<script>

import portfolio from './PortfolioSection.vue'; // Adjust path if needed
import services from './ServicesSection.vue';

export default {
  components: {
    portfolio,
    services
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth', // This makes the scroll animated
          block: 'start'      // Aligns the top of the element with the top of the viewport
        });
      }
    }
  }
};
</script>

<template>
  <section id="hero" class="hero-section">
    <img src="../assets/images/website_cover_image.png" alt="Immersive VR/AR Solutions" class="fallback-hero-image">
    <div class="hero-content">
      <h1>Transforming Ideas into Immersive VR/AR Experiences.</h1>
      <p>Specializing in engaging, high-performance virtual and augmented reality applications.</p>
      <div class="hero-ctas">
        <button class="cta-primary" @click="scrollToSection('portfolio')" >View My Portfolio</button>
        <button class="cta-secondary" @click="scrollToSection('services')"  >Learn More About My Services</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 80vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-white); /* Ensure text is white */
  overflow: hidden;
  text-align: left;
  padding: 20px;
 
  background-image: linear-gradient(0deg,#f8f9fa 0%, rgba(253, 187, 45, 0) 100%);
  
  
  
}

.video-background, .fallback-hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  object-fit: cover;
  z-index: -1;
  /*filter: brightness(0.4);  Slightly darker filter for better text contrast */
  background-color: white; /* For browsers that do not support gradients */
  background-image: linear-gradient(0deg,rgba(255, 255, 255, 1) 10%, rgba(253, 187, 45, 0) 100%);
  
  transition:  3s ease-in-out;
  }

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 20px;
}

.hero-content h1 {
  font-family: var(--font-heading); /* Ensure headings use chosen font */
  font-size: 3.5rem; /* Base size, adjusted by global App.vue styles */
  margin-bottom: 20px;
  line-height: 1.2;
  color: var(--bg-white); /* Ensure heading is white */
}

.hero-content p {
  font-family: var(--font-body); /* Ensure body text uses chosen font */
  font-size: 1.4rem;
  margin-bottom: 40px;
  opacity: 0.9;
  color: var(black); /* Ensure paragraph is white */
}

.hero-ctas {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* Specific styles for hero CTAs, overriding global button styles */
.hero-ctas .cta-primary {
  background-color: var(--primary-blue);
  color: var(--bg-white);
  box-shadow: 0 6px 15px rgba(44, 100, 255, 0.3); /* Stronger shadow for primary CTA */
}

.hero-ctas .cta-primary:hover {
  background-color: var(--primary-blue-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(44, 100, 255, 0.4);
}

.hero-ctas .cta-secondary {
  background-color: transparent;
  border: 2px solid var(--bg-white);
  color: var(--bg-white);
  box-shadow: none;
}

.hero-ctas .cta-secondary:hover {
  background-color: var(--primary-blue);
  color: var(--bg-white);
  border-color: var(--primary-blue);
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(44, 100, 255, 0.3); /* Add shadow on hover */
}

/* Responsive adjustments specific to HeroSection */
@media (max-width: 768px) {
  .hero-section {
    height: 70vh;
  }
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .hero-content p {
    font-size: 1rem;
    margin-bottom: 30px;
  }
  .hero-ctas button {
    width: 90%;
    max-width: 300px;
    margin: 5px 0;
  }
}
@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.8rem;
  }
  .hero-content p {
    font-size: 0.9rem;
  }
}
</style>