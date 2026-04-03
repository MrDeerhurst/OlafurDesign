<template>
  <section class="derisk" id="Roadmap">
    <!-- Noise texture overlay -->
    <div class="noise" aria-hidden="true"></div>
    <div class="eyebrow">
      <span class="eyebrow-line"></span>
      <span class="eyebrow-text">Offer</span>
      <span class="eyebrow-line"></span>
    </div>
    <!-- Main content -->
    <div class="inner">
      <!-- Header -->
      <header class="header" ref="headerEl">
        <h2 class="title">A Clear Path to Yes</h2>
        <p class="subtitle">
          We don't expect you to overhaul your entire product line overnight.
          Let's prove the ROI on a single high-impact procedure.
        </p>
      </header>

      <!-- Timeline -->
      <div class="timeline" ref="timelineEl">
        <!-- Connector track -->
        <div class="track" aria-hidden="true">
          <div class="track-fill" :style="{ width: trackFill + '%' }"></div>
        </div>

        <!-- Phase cards -->
        <div
          v-for="(phase, i) in phases"
          :key="i"
          class="phase"
          :class="{
            active: activePhase === i,
            past: i < activePhase,
            visible: phaseVisible,
          }"
          :style="{ transitionDelay: `${i * 0.15}s` }"
          @mouseenter="activePhase = i"
          @mouseleave="activePhase = null"
        >
          <!-- Node -->
          <div class="node" :class="{ 'node--active': activePhase === i }">
            <div class="node-ring"></div>
            <span class="node-num">{{ i + 1 }}</span>
          </div>

          <!-- Card -->
          <div class="card">
            <div class="card-days">{{ phase.days }}</div>
            <h3 class="card-title">{{ phase.title }}</h3>
            <p class="card-body">{{ phase.body }}</p>

            <!-- Decorative step label -->
            <div class="card-step">
              Step {{ String(i + 1).padStart(2, "0") }}
            </div>

            <!-- Hover glow -->
            <div class="card-glow" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA strip -->
      <div class="cta-strip" :class="{ visible: phaseVisible }">
        <div class="cta-left">
          <span class="cta-label">Ready to start?</span>
          <p class="cta-text">
            Send us one CAD file and process instrucitons. That's the entire
            commitment.
          </p>
        </div>
        <button
          class="cta-btn"
          type="button"
          @click="scrollToSection('contact')"
        >
          <span>Begin Your Pilot</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const headerEl = ref(null);
const timelineEl = ref(null);
const phaseVisible = ref(false);
const activePhase = ref(null);

const phases = [
  {
    days: "Day 1 – 3",
    title: "Asset Audit",
    body: "Send us a CAD file and a standard SOP for one complex task. We analyse the procedure scope and identify spatial anchor points.",
  },
  {
    days: "Day 4 – 10",
    title: "AR Transformation",
    body: "We map the logic and create the spatial overlays, step annotations, fault-tree branches, and safety checkpoints rendered in-context.",
  },
  {
    days: "Day 11 – 14",
    title: "Live Validation",
    body: "We demo the guided procedure on your own equipment. You see real technicians completing the task with measurable confidence.",
  },
];

// Progress fill based on which phase is hovered
const trackFill = computed(() => {
  if (activePhase.value === null) return 0;
  return ((activePhase.value + 1) / phases.length) * 100;
});

let obs;
onMounted(() => {
  obs = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        phaseVisible.value = true;
        obs.disconnect();
      }
    },
    { threshold: 0.1 },
  );
  if (timelineEl.value) obs.observe(timelineEl.value);
});
onUnmounted(() => obs?.disconnect());

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<style scoped>
/* ─── Tokens ─── */
.derisk {
  --bg: #f9f9f9;
  --bg-card: #ffffff;
  --ink: #1a1612;
  --ink-mid: #333333;
  --ink-faint: #8888a0;
  --gold: #007bff;
  --gold-light: #024287;
  --gold-dark: #01274f;
  --red: #412bc0;
  --border: rgba(3, 2, 4, 0.1);
  --shadow: 0 2px 24px rgba(0, 0, 0, 0.08);

  --font-head: "Playfair Display", "Georgia", serif;
  --font-body: "Outfit", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", "Courier New", monospace;

  position: relative;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  padding: 6rem 2rem 5rem 5rem;
  overflow: hidden;
  min-height: 100vh;
}
.eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.eyebrow-line {
  display: block;
  width: 48px;
  height: 1px;
  background: #989898;
  opacity: 0.6;
}
.eyebrow-text {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #989898;
}

/* ─── Noise ─── */
.noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.6;
}

/* ─── Left Rail ─── */
.left-rail {
  position: absolute;
  left: 1.75rem;
  top: 6rem;
  bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.rail-label {
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  color: var(--gold);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  opacity: 0.7;
}
.rail-line {
  flex: 1;
  width: 1px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  opacity: 0.3;
}

/* ─── Inner ─── */
.inner {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
}

/* ─── Header ─── */
.header {
  margin-bottom: 4.5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.kicker {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-dark);
  margin-bottom: 1rem;
}
.kicker-diamond {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: var(--gold);
  transform: rotate(45deg);
  flex-shrink: 0;
}
.title {
  font-family: var(--font-head);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin: 0 0 1.2rem;
}
.subtitle {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--ink-mid);
  max-width: 560px;
  margin: 0;
}

/* ─── Timeline ─── */
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 2.5rem;
}

/* Track bar (sits at top, behind nodes) */
.track {
  position: absolute;
  top: 0;
  left: calc(50% / 3);
  right: calc(50% / 3);
  height: 1px;
  background: var(--border);
  z-index: 0;
}
.track-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--gold);
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ─── Phase ─── */
.phase {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.phase.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Node ─── */
.node {
  position: relative;
  z-index: 1;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  cursor: default;
}
.node-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid transparent;
  transition:
    border-color 0.3s,
    transform 0.4s;
}
.node--active .node-ring {
  border-color: var(--gold);
  transform: scale(1.1);
  animation: pulse-ring 1.5s ease infinite;
}
.node--active {
  border-color: var(--gold);
  box-shadow: 0 0 0 4px #007bff;
}
.node-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--ink-mid);
  transition: color 0.3s;
}
.node--active .node-num {
  color: var(--gold-dark);
}

@keyframes pulse-ring {
  0%,
  100% {
    opacity: 1;
    transform: scale(1.1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

/* ─── Card ─── */
.card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 1.75rem 1.5rem 1.5rem;
  width: 100%;
  overflow: hidden;
  transition:
    border-color 0.3s,
    box-shadow 0.3s,
    transform 0.3s;
}
.phase.active .card {
  border-color: rgba(54, 44, 187, 0.35);
  box-shadow:
    var(--shadow),
    0 0 0 1px rgba(53, 42, 200, 0.1);
  transform: translateY(-4px);
}

.card-days {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.6rem;
}
.card-title {
  font-family: var(--font-head);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.75rem;
  line-height: 1.2;
}
.card-body {
  font-size: 0.86rem;
  line-height: 1.65;
  color: var(--ink-mid);
  margin: 0;
}
.card-step {
  position: absolute;
  bottom: 1rem;
  right: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  color: var(--ink-faint);
  opacity: 0.5;
}

/* Card top accent */
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--gold),
    var(--gold-light),
    transparent
  );
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.phase.active .card::before {
  transform: scaleX(1);
}

/* Card glow */
.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(200, 146, 42, 0.07),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.phase.active .card-glow {
  opacity: 1;
}

/* ─── CTA Strip ─── */
.cta-strip {
  margin-top: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 2.5rem;
  border: 1px solid var(--border);
  border-radius: 5px;
  background: var(--gold-light);
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.6s ease 0.5s,
    transform 0.6s ease 0.5s;
}
.cta-strip.visible {
  opacity: 1;
  transform: translateY(0);
}
.cta-label {
  font-family: rgba(255, 255, 255, 0.2);
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffffff;
  display: block;
  margin-bottom: 0.35rem;
}
.cta-text {
  font-size: 0.95rem;
  color: rgba(245, 242, 236, 0.75);
  margin: 0;
  line-height: 1.5;
}
.cta-btn {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--gold);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  border: none;
  border-radius: 2px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  letter-spacing: 0.02em;
  transition:
    background 0.2s,
    transform 0.2s;
  white-space: nowrap;
}
.cta-btn svg {
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
}
.cta-btn:hover {
  background: var(--gold-light);
  transform: translateY(-1px);
}
.cta-btn:hover svg {
  transform: translateX(3px);
}

/* ─── Responsive ─── */
@media (max-width: 720px) {
  .derisk {
    padding: 4rem 1.5rem 4rem 3.5rem;
  }
  .timeline {
    grid-template-columns: 1fr;
    padding-top: 0;
    gap: 2rem;
  }
  .track {
    display: none;
  }
  .node {
    margin-bottom: 0.85rem;
  }
  .cta-strip {
    flex-direction: column;
    align-items: flex-start;
  }
  .cta-btn {
    width: 100%;
    justify-content: center;
  }
  .left-rail {
    left: 1rem;
  }
}
</style>
