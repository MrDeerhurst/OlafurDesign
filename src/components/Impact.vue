<template>
  <section id="Impact" class="process-section" aria-hidden="false">
    <div class="eyebrow">
      <span class="eyebrow-line"></span>
      <span class="eyebrow-text">{{
        Languages.current.Impact.EyelashText
      }}</span>
      <span class="eyebrow-line"></span>
    </div>
    <div class="container">
      <div class="block" :class="{ visible: el1Visible }" ref="el1">
        <h2 class="Announcer">{{ Languages.current.Impact.MainTitle }}</h2>
        <p class="section-intro">{{ Languages.current.Impact.SubTitle }}</p>
      </div>
      <div class="block" :class="{ visible: el2Visible }" ref="el2">
        <div v-for="(items) in Languages.current.Impact.processSteps" class="block-Container">
          <strong class="block-Title">{{ items.title }}</strong>
          <p class="section-intro">{{ items.subtitle }}</p>
          <div class="process-steps">
            <div
              v-for="(step) in items.subitems"
              :key="step.index"
              class="process-step"
            >
              <div class="step-header" @click="toggleAccordion(step.index)">
                <img class="step-number"
                :src = "step.icon"></img>
                <h3>{{ step.title }}</h3>
                <span
                  class="accordion-icon"
                  :class="{ rotate: activeAccordionIndex === step.index }"
                  >&#9660;</span
                >
              </div>

              <div
                class="step-content"
                :class="{ 'active-mobile': activeAccordionIndex === step.index }"
              >
                <div class="sub-container">
                  <ImageRotator
                    class="exampleImages"
                    :images="step.images"
                    :interval="4000"
                    :transition-duration="step.durnation"
                    :transitions="step.transt"
                    aspect-ratio="6/10"
                  />
                  <div class="step-textbox">
                    <p>{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageRotator from "@/components/reusable/ImageRotator.vue";

import { Languages } from "./contentFolder/Language";

import { ref, onMounted, onUnmounted } from "vue";

export default {
  data() {
    return {
      activeAccordionIndex: null, // Tracks which accordion item is open. null means all are closed.
      isMobile: false, // To conditionally apply accordion behavior
      el1Visible: false,
      el2Visible: false,
      observers: [],
      Languages,
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.isMobile) {
        // Only allow toggling if on mobile screen size
        this.activeAccordionIndex =
          this.activeAccordionIndex === index ? null : index;
      }
    },
    // Method to check screen size and update isMobile
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768; // Example breakpoint for mobile (adjust as needed)
      // If resizing from mobile to desktop, ensure all accordions are "open" visually
      // By resetting activeAccordionIndex, the `active-mobile` class won't be applied
      // and the default desktop styles will take over.
      if (!this.isMobile) {
        this.activeAccordionIndex = null;
      }
    },
  },
  mounted() {
    // Initial check on mount
    this.checkScreenSize();
    // Listen for window resize events to update isMobile
    window.addEventListener("resize", this.checkScreenSize);
    const observe = (el, key) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this[key] = true;
            obs.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      if (el) obs.observe(el);
      this.observers.push(obs);
    };

    observe(this.$refs.el1, "el1Visible");
    observe(this.$refs.el2, "el2Visible");
  },
  beforeUnmount() {
    // Clean up the event listener when the component is destroyed
    window.removeEventListener("resize", this.checkScreenSize);
  },
  components: {
    ImageRotator,
  },

  unmounted() {
    this.observers.forEach((o) => o.disconnect());
  },
};
</script>

<style scoped>
.block {
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

.Announcer {
  font-family: "Playfair Display", "Georgia", serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
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
/* Base Styles (apply to all screen sizes, including desktop) */
.process-section {
  padding: 10px 10px 40px 10px;
  background-color: #f9f9f9;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.block-Container{
  margin-top: 2rem;
  padding: 0 20px;
}

h2 {
  font-family: "DM Serif Display", serif;
  font-size: 2.0em;
  margin-bottom: 10px;
  color: #333;
}
.block-Title{
  font-family: "DM Serif Display", serif;
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #333;
}

.section-intro,
.benefit-statement {
  font-size: 1.1em;
  color: #666;
  max-width: 800px;
  margin: 30px auto 30px auto;
}

.process-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between cards */
}

.process-step {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 30px;
  flex: 1 1 calc(33.333% - 40px); /* 3 items per row on desktop */
  min-width: 280px; /* Minimum width for cards */
  text-align: left;
  transition: transform 0.3s ease-in-out;
}

.process-step:hover {
  transform: translateY(-5px);
}

.step-header {
  display: flex;
  text-align: center;
  margin-bottom: 12px;
}

.step-number {
  border-radius: 25%;
  width: 45px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8em;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
}

.process-step h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  color: var(--text-charcoal);
  margin: 0;
  flex-grow: 1;
  align-content: center;
}

.process-step p {
  font-size: 1em;
  line-height: 1.6;
  color: #555;
  margin-top: 0;
}
.step-textbox {
  display: flex;
  width: auto;
  height: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Accordion Icon - HIDDEN by default on desktop */
.accordion-icon {
  display: none;
  font-size: 1.5em;
  transition: transform 0.3s ease;
  margin-left: 10px;
}

.accordion-icon.rotate {
  transform: rotate(180deg);
}

.sub-container {
  display: table;
  clear: both;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.exampleImages {
  display: flex;
  height: 20rem;
  width: 18rem;
  margin: 4px;
  border-radius: 5%;

  align-items: center;
  justify-content: center;
}
.step-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}

/* --- Media Queries for Mobile Accordion Behavior --- */
@media (max-width: 820px) {
  /* Adjust this breakpoint as needed for your definition of mobile */
  .process-steps {
    gap: 10px;
  }

  .process-step {
    display: flex;
    align-items: stretch;
    flex: 1 1 100%; /* Each item takes full width */
    padding: 15px 20px; /* Adjust padding for mobile */
  }

  .step-header {
    display: flex;
    cursor: pointer; /* Indicate it's clickable on mobile */
    margin-bottom: 0; /* Remove header margin on mobile */
    padding: 10px 0;
    justify-content: space-between; /* Space out title and icon */
    align-items: center;
  }

  .accordion-icon {
    display: block; /* SHOW icon on mobile */
  }

  .step-header h3 {
    font-size: 1.2em; /* Adjust heading size for mobile */
  }

  /* Accordion Content - Hidden by default on mobile, animated */
  .step-content {
    display: flex;
    max-height: 0;
    overflow: hidden;
    padding-bottom: 0; /* No padding when collapsed */
    transition:
      max-height 0.3s ease-out,
      padding-bottom 0.3s ease-out; /* Smooth transition */
    display: block; /* Ensure it's a block element so max-height works */
  }

  .step-content.active-mobile {
    /* Use this class only for mobile active state */
    max-height: 600px; /* Sufficient height to show content when active */
    padding-bottom: 15px; /* Add some padding when open */
  }
}
</style>
