<template>
  <section class="Deployment" id="Value">
    <!-- Background grid -->
    <div class="grid-bg" aria-hidden="true">
      <div class="grid-lines"></div>
    </div>
    <div class="revealer" :class="{ visible: block1Visible }" ref="block1">
      <!-- Header -->
      <div class="section-header" ref="header">
        <div class="eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">{{
            Languages.current.Value.EyelashText
          }}</span>
          <span class="eyebrow-line"></span>
        </div>
        <h2 class="section-title">
          {{ Languages.current.Value.MainTitle }}
        </h2>
        <p class="section-intro">{{ Languages.current.Value.SubTitle }}</p>
      </div>
    </div>
    <div class="revealer" :class="{ visible: block2Visible }" ref="block2">
      <div
        v-for="(MainItem, i) in Languages.current.Value.Cards"
        :key="i"
        class="blocks"
      >
        <div class="block-body">
          <h3 class="block-title">
            {{ MainItem.label }}
          </h3>
          <p class="block-lead">
            {{ MainItem.desc }}
          </p>
        </div>
        <ComparisonTable
          :items="MainItem.items"
          :old-label="Languages.current.Value.compareTableHead.before"
          :new-label="Languages.current.Value.compareTableHead.after"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Languages } from "./contentFolder/Language";
import ComparisonTable from "./reusable/ComparisonTable.vue";
const header = ref(null);
const block1 = ref(null);
const block2 = ref(null);
const block1Visible = ref(false);
const block2Visible = ref(false);

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
.Deployment {
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
  color: var(--c-muted);
  font-family: var(--font-body);
  overflow: hidden;
  padding: 6rem 6rem 4rem;
  min-height: 100vh;
}
.revealer {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.revealer.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Google Fonts import via @import inside style is not scoped-safe, use link in index.html or add globally */

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
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
}

.section-intro {
  font-size: 1.1em;
  color: #666;
  max-width: 800px;
  margin: 30px auto 30px auto;
}

/* ── Blocks ── */
.blocks {
  position: relative;
  z-index: 1;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
}

.block {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  box-shadow: 0 0px 18px rgba(0, 0, 0, 0.2);
  padding: 2.5rem 2rem 2rem;

  overflow: hidden;
}
.block-body {
}

.block.visible {
  opacity: 1;
  transform: translateY(0);
}
.block--alt {
  transition-delay: 0.15s;
}
.subFeature-item {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em 1em;
  justify-content: space-between;

  border-style: solid;
  border-width: 1px;
}
.block.visible .subFeature-item {
  opacity: 1;
  transform: translateX(0);
}

.comparisonBlock {
  display: grid;
  flex-direction: column;
  max-width: 30rem;
  min-width: 9rem;
  grid-auto-flow: row;
  border-style: solid;
  border-width: 1px;
  padding: 0.5rem;
}
.blockArrow {
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 0;
  margin: 0;
}
.comparisonBlock strong {
  font-weight: 700;
}
/* ── Block Meta ── */
.block-meta {
  display: flex;
  align-items: center;
  justify-content: center;

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
  font-family: "DM Serif Display", serif;
  font-size: 1.8em;
  font-weight: 200;
  line-height: 1;
  color: #333;
  margin: 0 0 0.85rem;
  letter-spacing: -0.015em;
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
  justify-content: center;
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
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-accent);

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
  align-items: center;
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
  text-align: center;
}

.subFeature-content {
  display: grid;
  flex-direction: row;
  align-items: flex-start;
  grid-auto-flow: column;
}
.subFeature-contentItems {
  display: grid;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
}
.secondCardContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
}

.secondCardContent strong {
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
  text-align: center;
  padding-bottom: 0.5rem;
}

.secondCardContent span {
  font-size: 0.82rem;
  color: var(--c-muted);
  line-height: 1.25;
  text-align: left;
}

.secondCardContent-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 1.4rem;
  color: #333;
  text-align: center;
  padding-bottom: 0.5rem;
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
@media (max-width: 740px) {
  .Deployment {
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
  .subFeature-content {
    display: grid;
    grid-auto-flow: row;
  }
}
</style>
