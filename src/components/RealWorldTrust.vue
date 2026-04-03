<template>
  <section class="trust-layer" id="Deployment">
    <!-- Background grid -->
    <div class="grid-bg" aria-hidden="true">
      <div class="grid-lines"></div>
    </div>

    <!-- Header -->
    <div class="section-header" ref="header">
      <div class="eyebrow">
        <span class="eyebrow-line"></span>
        <span class="eyebrow-text">Deployment</span>
        <span class="eyebrow-line"></span>
      </div>
      <h2 class="section-title">Built for the Real World</h2>
    </div>

    <!-- Two-column blocks -->
    <div class="blocks">
      <!-- Block 1: Hardware Agnostic -->
      <div class="block" :class="{ visible: block1Visible }" ref="block1">
        <div class="block-meta">
          <span class="block-num">01</span>
          <div class="block-tag">Hardware Agnostic</div>
        </div>

        <div class="block-body">
          <h3 class="block-title">Use the Tools You Already Own</h3>
          <p class="block-lead">
            No need to buy $5,000 goggles just to see the value. Our platform is
            built to run on the hardware your team and customers already have in
            their pockets.
          </p>

          <ul class="feature-list">
            <li
              v-for="(item, i) in hardwareFeatures"
              :key="i"
              class="feature-item"
              :style="{ transitionDelay: `${0.1 + i * 0.08}s` }"
            >
              <div class="feature-icon">
                <component
                  :is="'svg'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    v-for="p in item.paths"
                    :key="p"
                    :d="p"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </component>
              </div>
              <div class="feature-content">
                <strong>{{ item.label }}</strong>
                <span>{{ item.desc }}</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="block-accent" aria-hidden="true">
          <div class="accent-circle"></div>
        </div>
      </div>

      <!-- Block 2: CAD to Site -->
      <div
        class="block block--alt"
        :class="{ visible: block2Visible }"
        ref="block2"
      >
        <div class="block-meta">
          <span class="block-num">02</span>
          <div class="block-tag">Deployment</div>
        </div>

        <div class="block-body">
          <h3 class="block-title">
            From CAD to Site in Days, <em>Not Months</em>
          </h3>
          <p class="block-lead">
            We've eliminated the "Implementation Gap." Our deployment pipeline
            is optimized for the speed of manufacturing.
          </p>

          <ul class="feature-list">
            <li
              v-for="(item, i) in deployFeatures"
              :key="i"
              class="feature-item"
              :style="{ transitionDelay: `${0.1 + i * 0.08}s` }"
            >
              <div class="feature-icon">
                <component
                  :is="'svg'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    v-for="p in item.paths"
                    :key="p"
                    :d="p"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </component>
              </div>
              <div class="feature-content">
                <strong>{{ item.label }}</strong>
                <span>{{ item.desc }}</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="block-accent" aria-hidden="true">
          <div class="accent-circle accent-circle--alt"></div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="bottom-bar">
      <div class="stat" v-for="stat in stats" :key="stat.label">
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const header = ref(null);
const block1 = ref(null);
const block2 = ref(null);
const block1Visible = ref(false);
const block2Visible = ref(false);

const hardwareFeatures = [
  {
    label: "Mobile & Tablet",
    desc: "Full support for iOS and Android (ARKit / ARCore).",
    paths: [
      "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5",
      "M12 18h.008v.008H12V18z",
    ],
  },
  {
    label: "Industrial Wearables",
    desc: "Ready for RealWear and HoloLens, hands-free in high-risk zones.",
    paths: [
      "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z",
      "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    ],
  },
  {
    label: "Legacy Integration",
    desc: "Works with your existing CAD exports, no expensive proprietary remodeling.",
    paths: [
      "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
    ],
  },
];

const deployFeatures = [
  {
    label: "Rapid Ingestion",
    desc: "Upload your existing 3D models and PDF manuals, ready in days.",
    paths: [
      "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
    ],
  },
  {
    label: "Quick Update",
    desc: "Revised procedures to every field machine simultaneously, no paper supplements.",
    paths: [
      "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
    ],
  },
  {
    label: "Low-Code Logic",
    desc: "Subject matter experts update fault trees, no software engineer required.",
    paths: [
      "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    ],
  },
];

const stats = [
  { value: "< 7days", label: "Avg. Deployment Time" },
  { value: "3+", label: "Hardware Ecosystems" },
  { value: "0", label: "Proprietary Lock-in" },
];

let observers = [];

onMounted(() => {
  const observe = (el, setter) => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setter(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (el) obs.observe(el);
    observers.push(obs);
  };
  observe(block1.value, (v) => (block1Visible.value = v));
  observe(block2.value, (v) => (block2Visible.value = v));
});

onUnmounted(() => observers.forEach((o) => o.disconnect()));
</script>

<style scoped>
/* ── Tokens ── */
.trust-layer {
  --c-bg: #f9f9f9;
  --c-surface: #ffffff;
  --c-border: rgba(255, 255, 255, 0.07);
  --c-text: #e2e8f0;
  --c-muted: #64748b;
  --c-accent: #989898;
  --c-accent2: #6098ff;
  --c-gold: #f0a500;
  --r-block: 2px;
  --font-head: "Poppins", sans-serif;
  --font-body: "DM Sans", "Helvetica Neue", sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  position: relative;
  background: var(--c-bg);
  color: var(--c-text);
  font-family: var(--font-body);
  overflow: hidden;
  padding: 6rem 6rem 4rem;
  min-height: 100vh;
}

/* Google Fonts import via @import inside style is not scoped-safe, use link in index.html or add globally */

/* ── Grid Background ── */
.grid-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 212, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}
.scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--c-accent), transparent);
  opacity: 0.3;
  animation: scan 6s linear infinite;
}
@keyframes scan {
  0% {
    top: -2px;
  }
  100% {
    top: 100%;
  }
}

/* ── Section Header ── */
.section-header {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 4rem;
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
.section-title {
  font-family: "Playfair Display", "Georgia", serif;
  color: #333;
  margin: 0;
}
.section-title em {
  font-style: normal;
  background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Blocks ── */
.blocks {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
}

.block {
  position: relative;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 2.5rem 2rem 2rem;
  overflow: hidden;
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.block.visible {
  opacity: 1;
  transform: translateY(0);
}
.block--alt {
  transition-delay: 0.15s;
}

/* top accent stripe */
.block::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--c-accent), transparent);
}
.block--alt::before {
  background: linear-gradient(90deg, var(--c-accent2), transparent);
}

/* ── Block Meta ── */
.block-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.block-num {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--c-muted);
  letter-spacing: 0.1em;
}
.block-tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-accent);
  border: 1px solid rgba(0, 212, 255, 0.25);
  padding: 0.2em 0.6em;
  border-radius: 2px;
}
.block--alt .block-tag {
  color: #a78bfa;
  border-color: rgba(124, 58, 237, 0.3);
}

/* ── Block Body ── */
.block-title {
  font-family: var(--font-head);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 700;
  line-height: 1.2;
  color: #333;
  margin: 0 0 0.85rem;
  letter-spacing: -0.015em;
}
.block-title em {
  font-style: normal;
}
.block--alt .block-title em {
}

.block-lead {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--c-muted);
  margin: 0 0 1.75rem;
}

/* ── Feature List ── */
.feature-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  opacity: 0;
  transform: translateX(-12px);
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;
}
.block.visible .feature-item {
  opacity: 1;
  transform: translateX(0);
}

.feature-icon {
  flex-shrink: 0;
  width: 2rem;
  height: 3rem;
  border: 1px solid rgba(0, 212, 255, 0.18);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-accent);
  background: rgba(0, 212, 255, 0.05);
  margin-top: 0.1rem;
}
.feature-icon svg {
  width: 14px;
  height: 14px;
}
.block--alt .feature-icon {
  border-color: rgba(3, 20, 251, 0.22);
  color: #3051f9;
  background: rgba(37, 33, 247, 0.07);
}

.feature-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
}
.feature-content strong {
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.88rem;
  color: #333;
  letter-spacing: 0.01em;
}
.feature-content span {
  font-size: 0.82rem;
  color: var(--c-muted);
  line-height: 1.5;
  text-align: justify;
}

/* ── Block Accent ── */
.block-accent {
  position: absolute;
  bottom: -40px;
  right: -40px;
  pointer-events: none;
}
.accent-circle {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 212, 255, 0.08) 0%,
    transparent 70%
  );
}
.accent-circle--alt {
  background: radial-gradient(
    circle,
    rgba(124, 58, 237, 0.1) 0%,
    transparent 70%
  );
}

/* ── Bottom Bar ── */
.bottom-bar {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 0;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  overflow: hidden;
}
.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  gap: 0.3rem;
  border-right: 1px solid var(--c-border);
  background: rgba(255, 255, 255, 0.02);
  transition: background 0.2s;
}
.stat:last-child {
  border-right: none;
}
.stat:hover {
  background: rgba(0, 212, 255, 0.04);
}

.stat-value {
  font-family: var(--font-head);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--c-accent);
  letter-spacing: -0.02em;
}
.stat-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-muted);
  text-align: center;
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .trust-layer {
    padding: 4rem 1.25rem 3rem;
  }
  .bottom-bar {
    flex-direction: column;
  }
  .stat {
    border-right: none;
    border-bottom: 1px solid var(--c-border);
  }
  .stat:last-child {
    border-bottom: none;
  }
}
</style>
