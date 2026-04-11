<template>
  <div class="ct-wrapper">
    <!-- Sticky Header -->
    <div class="ct-header">
      <div class="ct-header-cell ct-header-old">
        <span class="ct-header-icon">✕</span>
        {{ oldLabel }}
      </div>
      <div class="ct-header-divider" />
      <div class="ct-header-cell ct-header-new">
        <span class="ct-header-icon">✓</span>
        {{ newLabel }}
      </div>
    </div>

    <!-- Rows -->
    <div
      v-for="(item, index) in items"
      :key="index"
      class="ct-row"
      :class="{
        'ct-row--alt': index % 2 !== 0,
        'ct-row--open': isMobile && openIndex === index,
        'ct-row--mobile': isMobile,
      }"
      @click="handleClick(index)"
      :role="isMobile ? 'button' : undefined"
      :aria-expanded="isMobile ? openIndex === index : undefined"
      :tabindex="isMobile ? 0 : undefined"
      @keydown.enter="isMobile && toggle(index)"
      @keydown.space.prevent="isMobile && toggle(index)"
    >
      <!-- Before Cell -->
      <div class="ct-cell ct-cell--old">
        <div class="ct-title-row">
          <p class="ct-title">
            <span class="ct-icon ct-icon--bad" aria-hidden="true">✕</span>
            {{ item.oldTitle }}
          </p>
          <span
            v-if="isMobile"
            class="ct-chevron"
            :class="{ 'ct-chevron--open': openIndex === index }"
            aria-hidden="true"
            >❯</span
          >
        </div>
        <div
          class="ct-desc-wrap"
          :class="{ 'ct-desc-wrap--open': !isMobile || openIndex === index }"
        >
          <p class="ct-desc">{{ item.oldDesc }}</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="ct-row-divider" aria-hidden="true" />

      <!-- After Cell -->
      <div class="ct-cell ct-cell--new">
        <div class="ct-title-row">
          <p class="ct-title">
            <span class="ct-icon ct-icon--good" aria-hidden="true">✓</span>
            {{ item.newTitle }}
          </p>
          <!-- Chevron: only rendered on mobile via v-if -->
          <span
            v-if="isMobile"
            class="ct-chevron"
            :class="{ 'ct-chevron--open': openIndex === index }"
            aria-hidden="true"
            >❯</span
          >
        </div>
        <div
          class="ct-desc-wrap"
          :class="{ 'ct-desc-wrap--open': !isMobile || openIndex === index }"
        >
          <p class="ct-desc">{{ item.newDesc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
  oldLabel: {
    type: Array,
    default: "Before",
  },
  newLabel: {
    type: Array,
    default: "After",
  },
});

// ── Accordion state ──
const openIndex = ref(null);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

function handleClick(index) {
  if (!isMobile.value) return;
  toggle(index);
}

// ── Responsive breakpoint via matchMedia ──
const isMobile = ref(false);
let mql = null;

function handleMediaChange(e) {
  isMobile.value = e.matches;
  if (!e.matches) openIndex.value = null; // reset on switch to desktop
}

onMounted(() => {
  mql = window.matchMedia("(max-width: 767px)");
  isMobile.value = mql.matches;
  mql.addEventListener("change", handleMediaChange);
});

onUnmounted(() => {
  if (mql) mql.removeEventListener("change", handleMediaChange);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap");

.ct-wrapper {
  display: grid;

  font-family: var(--font-heading);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8e8e8;
}

.ct-header {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #e8e8e8;
}

.ct-header-cell {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 28px;
  font-family: "DM Serif Display", serif;
  font-size: 1rem;
  letter-spacing: 0.01em;
}

.ct-header-old {
  color: #b04040;
  background: rgba(245, 245, 245, 0.6);
  min-width: 14rem;
}

.ct-header-new {
  color: #2e7d57;
  background: rgba(255, 255, 255, 0.6);
  min-width: 14rem;
}

.ct-header-icon {
  font-size: 0.85rem;
  opacity: 0.8;
}

.ct-header-divider {
  background: #e8e8e8;
}

/* ── Rows ── */
.ct-row {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  border-bottom: 1px solid #ececec;
  /* No cursor or pointer affordance on desktop */
}

.ct-row:last-child {
  border-bottom: none;
}

/* Mobile-only interactivity classes */
.ct-row--mobile {
  cursor: pointer;
}

.ct-row--mobile:not(.ct-row--open):hover .ct-cell--old {
  background: #e6e6e6;
}

.ct-row--mobile:not(.ct-row--open):hover .ct-cell--new {
  background: #f0f7f4;
}

.ct-row--mobile.ct-row--open:hover .ct-cell--old {
  background: #ebebeb;
}

.ct-row--mobile.ct-row--open:hover .ct-cell--new {
  background: #f7faf9;
}

.ct-row--mobile:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 2px #4caf7d;
}

/* ── Alternating ── */
.ct-row--alt .ct-cell--old {
  background: #efefef;
}

/* ── Cells ── */
.ct-cell {
  padding: 20px 28px;
  transition: background 0.18s ease;
}

.ct-cell--old {
  background: #f5f5f5;
}

.ct-cell--new {
  background: #ffffff;
  box-shadow: inset -3px 0 0 0 rgba(76, 175, 125, 0.12);
}

/* ── Row Divider ── */
.ct-row-divider {
  background: #e8e8e8;
}

/* ── Title row (chevron slot on mobile) ── */
.ct-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

/* ── Typography ── */
.ct-title {
  display: flex;
  align-items: flex-start;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-family: "DM Serif Display", serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.35;
}

.ct-desc {
  text-align: left;
  margin: 0;
  padding-top: 10px;
  font-size: 0.875rem;
  font-weight: 300;
  color: #666;
  line-height: 1.6;
}

/* ── Accordion desc wrap ──
   Collapsed by default; opened via .ct-desc-wrap--open           */
.ct-desc-wrap {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.ct-desc-wrap--open {
  max-height: 300px;
}

/* ── Icons ── */
.ct-icon {
  flex-shrink: 0;
  margin-top: 2px;
  font-size: 0.8rem;
}

.ct-icon--bad {
  color: #e05252;
}

.ct-icon--good {
  color: #4caf7d;
}

/* ── Chevron (mobile only — never rendered on desktop via v-if) ── */
.ct-chevron {
  flex-shrink: 0;
  font-size: 0.75rem;
  color: #070707;
  display: inline-block;
  transform: rotate(90deg);
  transition:
    transform 0.3s ease,
    color 0.2s ease;
  line-height: 1;
  margin-left: 4px;
}

.ct-chevron--open {
  transform: rotate(270deg);
}

/* ── Mobile layout ── */
@media (max-width: 767px) {
  .ct-header-divider {
    display: none;
  }

  .ct-header-old {
    min-width: 12rem;
  }
  .ct-header-new {
    min-width: 12rem;
  }

  .ct-title {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
  }
  .ct-title-row {
    align-items: center;
  }
  .ct-cell--new {
    display: grid;
    align-items: start;
  }
  .ct-cell--old {
    display: grid;
    align-items: start;
  }
  .ct-desc {
    text-align: center;
    display: flex;
  }
  .ct-cell {
    padding: 1rem;
  }
}
@media (max-width: 467px) {
  .ct-header-old {
    min-width: 10rem;
    font-size: 0.9rem;
  }
  .ct-header-new {
    min-width: 10rem;
    font-size: 0.9rem;
  }
  .ct-title {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
  }
  .ct-cell--new {
    display: grid;
    align-items: center;
  }
}
@media (max-width: 340px) {
  .ct-header-old {
    min-width: 8rem;
  }
  .ct-header-new {
    min-width: 8rem;
  }
}
</style>
