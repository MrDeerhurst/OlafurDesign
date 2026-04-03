<template>
  <section id="Impact" class="process-section" aria-hidden="false">
    <div class="eyebrow">
      <span class="eyebrow-line"></span>
      <span class="eyebrow-text">Impact</span>
      <span class="eyebrow-line"></span>
    </div>
    <div class="container">
      <div class="block" :class="{ visible: el1Visible }" ref="el1">
        <h2 class="Announcer">Services Impact Examples</h2>
        <p class="section-intro">
          Just few of the general ways how this service can create value, only
          requiring a mobile phone.
        </p>
      </div>
      <div class="block" :class="{ visible: el2Visible }" ref="el2">
        <div class="process-steps">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="process-step"
          >
            <div class="step-header" @click="toggleAccordion(index)">
              <div class="step-number">{{ step.icon }}</div>
              <h3>{{ step.title }}</h3>
              <span
                class="accordion-icon"
                :class="{ rotate: activeAccordionIndex === index }"
                >&#9660;</span
              >
            </div>

            <div
              class="step-content"
              :class="{ 'active-mobile': activeAccordionIndex === index }"
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
  </section>
</template>

<script>
import ImageRotator from "@/components/reusable/ImageRotator.vue";
import imageOne from "@/assets/images/PipingNormal.png";
import imageTwo from "@/assets/images/PipingAdded.png";
import FSTS_N from "@/assets/images/FSTS_N.png";
import FSTS_A from "@/assets/images/FSTS_A.png";
import WH_One from "@/assets/images/WH_1.png";
import WH_Two from "@/assets/images/WH_2.png";
import WH_Three from "@/assets/images/WH_3.png";

import MT_One from "@/assets/images/MT_1.png";
import MT_Two from "@/assets/images/MT_2.png";
import MT_Three from "@/assets/images/MT_3.png";

import ASTwo_One from "@/assets/images/ASTwo_1.png";
import ASTwo_Two from "@/assets/images/ASTwo_2.png";

import TS_One from "@/assets/images/TS_1.png";
import TS_Two from "@/assets/images/TS_2.png";
import TS_Three from "@/assets/images/TS_3.png";
import TS_Four from "@/assets/images/TS_4.png";

import { ref, onMounted, onUnmounted } from "vue";

export default {
  data() {
    return {
      processSteps: [
        {
          icon: "🔧",
          title: "Eliminate Schematic Confusion",
          obf: "fill",
          images: [
            {
              src: FSTS_N,
              alt: "Image 1",
              caption: "The sample",
              of: "fill",
            }, // full
            {
              src: FSTS_A,
              alt: "Image 2 - Baraba",
              caption: "The Alps",
              of: "fill",
            },
          ],
          description:
            "Stop wasting hours deciphering grease-stained paper blueprints. Our AR overlays trace exact cable routes directly onto your panels, improving wiring accuracy and cutting repair cycles in half.",
          durnation: 400,
          interval: 10,
          transt: ["fade"],
        },
        {
          icon: "📦",
          title: "Precision Picking at Speed",
          obf: "fill",
          images: [
            {
              src: WH_One,
              alt: "Image 1",
              caption: "The sample",
              of: "fill",
            }, // full
            {
              src: WH_Three,
              alt: "Image 2 - Baraba",
              caption: "The Alps",
              of: "fill",
            },
          ],
          description:
            "Turn seasonal staff into top performers faster. AR-guided routing and bin-highlighting reducing 'search time' and picking errors, ensuring your high-volume facility stays on schedule without the training overhead",
          durnation: 800,
          interval: 4000,
          transt: ["fade"],
        },
        {
          icon: "🏭",
          title: "Standardize Expert Performance",
          obf: "fill",
          images: [
            {
              src: MT_One,
              alt: "Image 1",
              caption: "The sample",
              of: "fill",
            }, // full
            {
              src: MT_Two,
              alt: "Image 2 - Baraba",
              caption: "The Alps",
              of: "fade",
            },
            {
              src: MT_Three,
              alt: "Image 3",
              caption: "The sample",
              of: "fill",
            }, // full
          ],
          description:
            "Stop 'shadowing' and start doing. Trainees follow foolproof AR overlays on live machinery, bridging the gap between knowledge and action, resulting in lower error rates. With this you get faster onboarding and  compliance with SOPs.",
          durnation: 800,
          interval: 4000,
          transt: ["direct", "direct"],
          of: "fade",
        },
        {
          icon: "🔍",
          title: "Visualize Hidden Hazards",
          obf: "fill",
          images: [
            {
              src: imageOne,
              alt: "Image 1",
              caption: "The sample",
              of: "fill",
            }, // full
            {
              src: imageTwo,
              alt: "Image 2 - Baraba",
              caption: "The Alps",
              of: "fill",
            },
          ],
          description:
            "Keep your team out of the danger zone. Our interface projects spatial risk zones and historical fault data directly onto the worker’s field of view, turning safety compliance from a checklist into a visual reality.",
          durnation: 800,
          interval: 4000,
          transt: ["fade"],
        },
        {
          icon: "⚙️",
          title: "Reduce-Error Commissioning",
          obf: "fill",
          images: [
            {
              src: ASTwo_One,
              alt: "Image 1",
              caption: "The sample",
              of: "fill",
            }, // full
            {
              src: ASTwo_Two,
              alt: "Image 2 - Baraba",
              caption: "The Alps",
              of: "fill",
            },
          ],
          description:
            "Reduce the 'measure twice, drill once' headache. Project exact bolt-hole locations and alignment markers directly onto mounting surfaces to ensure heavy equipment is installed well the first time.",
          durnation: 800,
          interval: 4000,
          transt: ["fade"],
        },
        {
          icon: "🚨",
          title: "Adaptive Fault Recovery",
          obf: "fill",
          images: [
            {
              src: TS_One,
              alt: "Image 1",
              caption: "The sample",
              of: "fill",
            }, // full
            {
              src: TS_Two,
              alt: "Image 2 - Baraba",
              caption: "The Alps",
              of: "fill",
            },
            {
              src: TS_Three,
              alt: "Image 2 - Baraba",
              caption: "The Alps",
              of: "fill",
            },
            {
              src: TS_Four,
              alt: "Image 2 - Baraba",
              caption: "The Alps",
              of: "fill",
            },
          ],
          description:
            "No more guessing games. Our dynamic fault-tree overlays react to what the technician sees in real-time, guiding them through complex repairs with the precision of a senior engineer,even if it's their first day.",
          durnation: 800,
          interval: 4000,
          transt: ["fade"],
        },
        /*,{ title: 'Discovery & Strategy', description: 'I start by understanding your vision, target audience, and business objectives. This phase involves in-depth discussions to define project scope and technical requirements.' },
        { title: 'Concept & Design', description: 'Next, I translate ideas into tangible concepts. This includes wireframing, prototyping, and creating a visual design that aligns with your brand identity and user experience goals.' },
        { title: 'Development & Iteration', description: 'My agile development process brings your concept to life. I work in sprints, constantly testing and iterating based on feedback to ensure a robust and high-quality solution.' },
        { title: 'Testing & Quality Assurance', description: 'Rigorous testing is performed to identify and fix any bugs, ensuring the application is stable, secure, and performs flawlessly across all target devices and environments.' },
        { title: 'Deployment & Launch', description: 'I handle the deployment process, ensuring a smooth and successful launch of your VR/AR solution. I manage all technical aspects so you can focus on your business.' },
        { title: 'Support & Evolution', description: 'My commitment doesn’t end at launch. I provide ongoing support, maintenance, and analytics to monitor performance and identify opportunities for future enhancements and evolution.' }
      */
      ],
      activeAccordionIndex: null, // Tracks which accordion item is open. null means all are closed.
      isMobile: false, // To conditionally apply accordion behavior
      el1Visible: false,
      el2Visible: false,
      observers: [],
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

h2 {
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
  gap: 20px; /* Space between cards */
  justify-content: center;
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
  align-items: center;
  margin-bottom: 12px;
}

.step-number {
  background-color: var(--primary-blue);
  color: var(--bg-white);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.8em;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
  box-shadow:
    0 0 0 5px var(--bg-white),
    0 0 0 7px var(--primary-blue);
}

.process-step h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  color: var(--text-charcoal);
  margin: 0;
  flex-grow: 1;
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
}

.exampleImages {
  display: flex;
  height: 20rem;
  width: 18rem;
  margin: 4px;
  border-radius: 15%;

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
@media (max-width: 768px) {
  /* Adjust this breakpoint as needed for your definition of mobile */
  .process-steps {
    flex-direction: column; /* Stack cards vertically */
    gap: 10px;
  }

  .process-step {
    flex: 1 1 100%; /* Each item takes full width */
    padding: 15px 20px; /* Adjust padding for mobile */
  }

  .step-header {
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
