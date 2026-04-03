<template>
  <div class="rotator-wrapper">
    <!-- ── Image stage ─────────────────────────── -->
    <div class="stage" :style="{ aspectRatio: aspectRatio }">
      <!-- FADE: all images stacked, opacity toggled -->
      <template v-if="currentTransition === 'fade'">
        <img
          v-for="(img, i) in images"
          :key="'f-' + i"
          :src="img.src"
          :alt="img.alt || `Slide ${i + 1}`"
          class="stage-img"
          :style="{
            opacity: i === currentIndex ? 1 : 0,
            transition: `opacity ${transitionDuration}ms ease-in-out`,
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: img.obf,
          }"
        />
      </template>

      <!-- SCAN BAR: previous image underneath, new image revealed by a sweep -->
      <template v-else-if="currentTransition === 'scanbar'">
        <img
          :src="images[prevIndex].src"
          :alt="images[prevIndex].alt || `Slide ${prevIndex + 1}`"
          class="stage-img"
          style="position: absolute; inset: 0; width: 100%; height: 100%"
          :style="{ objectFit: images[prevIndex].of }"
        />
        <img
          :src="images[currentIndex].src"
          :alt="images[currentIndex].alt || `Slide ${currentIndex + 1}`"
          class="stage-img scanbar-next"
          :class="{ scanning: isTransitioning }"
          style="position: absolute; inset: 0; width: 100%; height: 100%"
          :style="{
            '--scan-dur': transitionDuration + 'ms',
            objectFit: images[prevIndex].of,
          }"
        />
        <div
          class="scan-line"
          :class="{ scanning: isTransitioning }"
          :style="{
            '--scan-dur': transitionDuration + 'ms',
            objectFit: images[prevIndex].of,
          }"
        ></div>
      </template>

      <!-- DIRECT: instant cut, single image shown -->
      <template v-else-if="currentTransition === 'direct'">
        <img
          :src="images[currentIndex].src"
          :alt="images[currentIndex].alt || `Slide ${currentIndex + 1}`"
          class="stage-img"
          style="position: absolute; inset: 0; width: 100%; height: 100%"
          :style="{ objectFit: images[prevIndex].of }"
        />
      </template>
    </div>
    <!-- end stage -->
  </div>
</template>

<script setup>
/**
 * ════════════════════════════════════════════════════════
 *  ImageRotator.vue  —  Vue 3 Composition API
 * ════════════════════════════════════════════════════════
 *
 *  REQUIRED PROP FORMAT  ─  `images`
 *  ─────────────────────────────────
 *  Pass an Array of image objects. Each object shape:
 *
 *  {
 *    src:      string   — URL or local path to the PNG   (REQUIRED)
 *    alt?:     string   — Accessible alt text            (optional)
 *    caption?: string   — Overlay caption text           (optional)
 *  }
 *
 *  Example:
 *  [
 *    { src: '/images/photo1.png', alt: 'Mountain at dawn', caption: 'The Alps' },
 *    { src: '/images/photo2.png', alt: 'Ocean sunset' },
 *    { src: 'https://example.com/img.png' }
 *  ]
 *
 *  PARENT USAGE EXAMPLE
 *  ────────────────────
 *  <ImageRotator
 *    :images="slides"
 *    :interval="4000"
 *    :transition-duration="800"
 *    :transitions="['fade', 'scanbar', 'direct']"
 *    aspect-ratio="16/9"
 *  />
 *
 *  ALL PROPS
 *  ─────────
 *  images            Array   Required. See format above.
 *  interval          Number  Ms each slide is shown.          Default: 4000
 *  transitionDuration Number  Ms the transition animation runs. Default: 800
 *  transitions       Array   Ordered list of transition names to cycle through.
 *                            Valid values: 'fade' | 'scanbar' | 'direct'
 *                            Default: ['fade', 'scanbar', 'direct']
 *  aspectRatio       String  CSS aspect-ratio, e.g. "16/9".   Default: '16/9'
 */

import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator: (val) =>
      val.length > 0 && val.every((img) => typeof img.src === "string"),
  },
  interval: { type: Number, default: 1000 },
  transitionDuration: { type: Number, default: 800 },
  transitions: {
    type: Array,
    default: () => ["fade", "scanbar", "direct"],
    validator: (val) =>
      val.every((t) => ["fade", "scanbar", "direct"].includes(t)),
  },
  aspectRatio: { type: String, default: "16/9" },
});

// ── State ──────────────────────────────────────────────
const currentIndex = ref(0);
const prevIndex = ref(0);
const transitionStep = ref(0); // cycles through props.transitions[]
const isTransitioning = ref(false);
const isProgressAnimating = ref(false);

let slideTimer = null;
let progressTimer = null;

// ── Computed ───────────────────────────────────────────
const currentTransition = computed(
  () => props.transitions[transitionStep.value % props.transitions.length],
);

const transitionLabel = computed(
  () =>
    ({
      fade: "✦ Fade",
      scanbar: "▤ Scan Bar",
      direct: "◼ Direct Cut",
    })[currentTransition.value],
);

// ── Advance to next slide ──────────────────────────────
function advance() {
  prevIndex.value = currentIndex.value;
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
  transitionStep.value++;

  isTransitioning.value = true;
  setTimeout(() => {
    isTransitioning.value = false;
  }, props.transitionDuration);

  restartProgress();
}

// ── Progress bar animation ─────────────────────────────
function restartProgress() {
  isProgressAnimating.value = false;
  clearTimeout(progressTimer);
  progressTimer = setTimeout(() => {
    isProgressAnimating.value = true;
  }, 40);
}

// ── Timer ──────────────────────────────────────────────
function startTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(advance, props.interval);
}

// ── Lifecycle ──────────────────────────────────────────
onMounted(() => {
  startTimer();
  restartProgress();
});

onUnmounted(() => {
  clearInterval(slideTimer);
  clearTimeout(progressTimer);
});

watch(
  () => props.images,
  () => {
    currentIndex.value = 0;
    prevIndex.value = 0;
    transitionStep.value = 0;
    startTimer();
    restartProgress();
  },
);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,200&display=swap");

/* ── Root ─────────────────────────────────────────── */
.rotator-wrapper {
  --clr-surface: #161616;
  --clr-accent: #e8d5b0;
  --clr-muted: #444;
  --clr-fade: #7ecba1;
  --clr-scan: #7ab8f5;
  --clr-direct: #f5a97a;

  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  font-family: "DM Mono", monospace;
  background: var(--clr-bg);
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  max-width: 780px;
  box-sizing: border-box;
}

/* ── Transition badge ─────────────────────────────── */
.transition-badge {
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.67rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  padding: 5px 12px;
  border-radius: 2px;
}
.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.badge-dot.fade {
  background: var(--clr-fade);
  box-shadow: 0 0 6px var(--clr-fade);
}
.badge-dot.scanbar {
  background: var(--clr-scan);
  box-shadow: 0 0 6px var(--clr-scan);
}
.badge-dot.direct {
  background: var(--clr-direct);
  box-shadow: 0 0 6px var(--clr-direct);
}

/* ── Slide counter ────────────────────────────────── */
.slide-counter {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 0.64rem;
  letter-spacing: 0.1em;
  color: var(--clr-muted);
}

/* ── Stage ────────────────────────────────────────── */
.stage {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 15%;
}
.stage-img {
  display: block;
}

/* ── Caption overlay ──────────────────────────────── */
.caption-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 20px 16px;
  pointer-events: none;
  z-index: 10;
}
.caption-overlay p {
  font-family: "Fraunces", serif;
  font-style: italic;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

/* ── Scan bar ─────────────────────────────────────── */
.scanbar-next {
  clip-path: inset(0 100% 0 0);
}
.scanbar-next.scanning {
  animation: scanReveal var(--scan-dur) linear forwards;
}
@keyframes scanReveal {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0% 0 0);
  }
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(120, 200, 255, 0.9) 40%,
    rgba(220, 245, 255, 1) 50%,
    rgba(120, 200, 255, 0.9) 60%,
    transparent
  );
  box-shadow: 0 0 14px 4px rgba(120, 200, 255, 0.45);
  opacity: 0;
  pointer-events: none;
  z-index: 9;
}
.scan-line.scanning {
  animation: scanLine var(--scan-dur) linear forwards;
}
@keyframes scanLine {
  from {
    left: 0%;
    opacity: 1;
  }
  99% {
    left: 99%;
    opacity: 1;
  }
  to {
    left: 100%;
    opacity: 0;
  }
}

/* ── Progress bar ─────────────────────────────────── */
.progress-track {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 11;
}
.progress-fill {
  height: 100%;
  width: 0%;
  background: var(--clr-accent);
  opacity: 0.65;
}
.progress-fill.animating {
  animation: fillProgress var(--interval) linear forwards;
}
@keyframes fillProgress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* ── Dots ─────────────────────────────────────────── */
.dots {
  display: flex;
  gap: 7px;
}
.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--clr-muted);
  transition:
    background 0.3s,
    transform 0.3s;
}
.dot.active {
  background: var(--clr-accent);
  transform: scale(1.5);
}
</style>
