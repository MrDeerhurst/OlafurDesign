<template>
  <section id="process" class="process-section">
    <div class="container">
      <h2>My Streamlined Development Process</h2>
      <p class="section-intro">My collaborative and transparent approach ensures your project's success.</p>

      <div class="process-steps">
        <div v-for="(step, index) in processSteps" :key="index" class="process-step">
          <div class="step-header" @click="toggleAccordion(index)">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <span class="accordion-icon" :class="{ 'rotate': activeAccordionIndex === index }">&#9660;</span>
          </div>

          <div class="step-content" :class="{ 'active-mobile': activeAccordionIndex === index }">
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>

      <p class="benefit-statement">This systematic process leads to successful, high-impact VR/AR solutions.</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      processSteps: [
        { title: 'Discovery & Strategy', description: 'We start by understanding your vision, target audience, and business objectives. This phase involves in-depth discussions to define project scope and technical requirements.' },
        { title: 'Concept & Design', description: 'Next, we translate ideas into tangible concepts. This includes wireframing, prototyping, and creating a visual design that aligns with your brand identity and user experience goals.' },
        { title: 'Development & Iteration', description: 'Our agile development process brings your concept to life. We work in sprints, constantly testing and iterating based on feedback to ensure a robust and high-quality solution.' },
        { title: 'Testing & Quality Assurance', description: 'Rigorous testing is performed to identify and fix any bugs, ensuring the application is stable, secure, and performs flawlessly across all target devices and environments.' },
        { title: 'Deployment & Launch', description: 'We handle the deployment process, ensuring a smooth and successful launch of your VR/AR solution. We manage all technical aspects so you can focus on your business.' },
        { title: 'Support & Evolution', description: 'Our commitment doesn’t end at launch. We provide ongoing support, maintenance, and analytics to monitor performance and identify opportunities for future enhancements and evolution.' }
      ],
      activeAccordionIndex: null, // Tracks which accordion item is open. null means all are closed.
      isMobile: false // To conditionally apply accordion behavior
    };
  },
  methods: {
    toggleAccordion(index) {
      if (this.isMobile) { // Only allow toggling if on mobile screen size
        this.activeAccordionIndex = this.activeAccordionIndex === index ? null : index;
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
    }
  },
  mounted() {
    // Initial check on mount
    this.checkScreenSize();
    // Listen for window resize events to update isMobile
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    // Clean up the event listener when the component is destroyed
    window.removeEventListener('resize', this.checkScreenSize);
  }
};
</script>

<style scoped>
/* Base Styles (apply to all screen sizes, including desktop) */
.process-section {
  padding: 40px 0;
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

.section-intro, .benefit-statement {
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
  margin-bottom: 15px;
}

.step-number {
  background-color: var(--primary-blue); /* Accent color */
  color: var(--bg-white);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8em;
  font-weight: bold;
  margin-right: 15px; 
  flex-shrink: 0;
  box-shadow: 0 0 0 5px var(--bg-white), 0 0 0 7px var(--primary-blue);
 
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

/* --- Media Queries for Mobile Accordion Behavior --- */
@media (max-width: 768px) { /* Adjust this breakpoint as needed for your definition of mobile */
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
    max-height: 0;
    overflow: hidden;
    padding-bottom: 0; /* No padding when collapsed */
    transition: max-height 0.3s ease-out, padding-bottom 0.3s ease-out; /* Smooth transition */
    display: block; /* Ensure it's a block element so max-height works */
  }

  .step-content.active-mobile { /* Use this class only for mobile active state */
    max-height: 300px; /* Sufficient height to show content when active */
    padding-bottom: 15px; /* Add some padding when open */
  }
}
</style>