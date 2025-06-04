<script setup>
const processSteps = [
  { title: 'Discovery & Ideation', description: 'Understanding your vision, goals, and target audience.' },
  { title: 'Concept & Prototyping', description: 'Designing the user experience, creating wireframes, and building interactive prototypes.' },
  { title: 'Development & Iteration', description: 'Bringing the concept to life with robust coding and regular client feedback.' },
  { title: 'Testing & Optimization', description: 'Ensuring performance, compatibility, and a flawless user experience on target mobile devices.' },
  { title: 'Deployment & Support', description: 'Launching the app on app stores and providing post-launch assistance.' }
];
</script>

<template>
  <section id="process" class="process-section">
    <div class="container">
      <h2>My Streamlined Development Process</h2>
      <p class="section-intro">My collaborative and transparent approach ensures your project's success.</p>
      <div class="process-steps">
        <div v-for="(step, index) in processSteps" :key="index" class="process-step">
          <div class="step-number">{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
      <p class="benefit-statement">This systematic process leads to successful, high-impact VR/AR solutions.</p>
    </div>
  </section>
</template>

<style scoped>
.process-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
}

.process-step {
  background-color: var(--bg-white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  width: 300px;
  text-align: left;
  position: relative;
  padding-top: 60px;
}

.step-number {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-blue); /* Use primary blue */
  color: var(--bg-white);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  box-shadow: 0 0 0 5px var(--bg-white), 0 0 0 7px var(--primary-blue); /* Outer ring with primary blue */
}

.process-step h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  margin-bottom: 10px;
  text-align: center;
  color: var(--text-charcoal);
}

.process-step p {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-medium-gray);
}

.benefit-statement {
  margin-top: 60px;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--primary-blue); /* Highlight with primary blue */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .process-step {
    width: calc(50% - 15px); /* Two columns on tablets, respecting gap */
    padding: 25px;
    padding-top: 55px;
  }
}

@media (max-width: 480px) {
  .process-steps {
    gap: 20px;
  }
  .process-step {
    width: 90%;
    max-width: 350px;
    padding: 20px;
    padding-top: 50px;
  }
  .step-number {
    width: 45px;
    height: 45px;
    font-size: 1.6rem;
    box-shadow: 0 0 0 4px var(--bg-white), 0 0 0 6px var(--primary-blue); /* Slightly smaller shadow */
  }
  .benefit-statement {
    font-size: 1rem;
    margin-top: 40px;
  }
}
</style>