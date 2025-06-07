<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import DifferentiatorsSection from './components/DifferentiatorsSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'

</script>

<template>
  
  
    <TheHeader />
    <main>
      
      <HeroSection />
      <ServicesSection />
      
      <ProcessSection />
      <PortfolioSection />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </main>
    <TheFooter />
  
</template>



<style>
/* ------------------------------------ */
/* Global CSS Variables (Color Palette) */
/* ------------------------------------ */
:root {
  --primary-blue: #2C64FF;
  --primary-blue-dark: #004FDE;
  --secondary-teal: #00D0B4; /* New accent color */

  --bg-light-gray: #F8F9FA;
  --bg-white: #FFFFFF;

  --text-charcoal: #343A40;
  --text-medium-gray: #6C757D;
  --border-light-gray: #DEE2E6;

  /* Fonts */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}

/* ------------------------------------ */
/* Basic Global Resets & Styles */
/* ------------------------------------ */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-body);
  background-color: var(--bg-light-gray);
  color: var(--text-charcoal);
  line-height: 1.7; /* Improved readability */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

section {
  padding: 80px 5%;
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  section {
    padding: 60px 4%;
  }
}

@media (max-width: 480px) {
  section {
    padding: 40px 3%;
  }
}

/* ------------------------------------ */
/* Global Typography */
/* ------------------------------------ */
h1, h2, h3 {
  font-family: var(--font-heading);
  color: var(--text-charcoal);
  line-height: 1.2;
  
  margin-bottom: 20px; /* Consistent margin */
}

h1 { font-size: 3.5rem; font-weight: 700; 
     margin-top: 0;
}
h2 { font-size: 2.8rem; font-weight: 700;
     margin-top: 4rem; /* for navigation scroll to show the top of the content*/
}
h3 { font-size: 2.1rem; font-weight: 600;
     margin-top: 0;
}

@media (max-width: 1024px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 1.9rem; }
}

@media (max-width: 768px) {
  h1 { font-size: 2.4rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.6rem; }
  body { line-height: 1.7; }
}

@media (max-width: 480px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.8rem; }
  h3 { font-size: 1.4rem; }
  body { font-size: 0.95rem; line-height: 1.6; } /* Slightly smaller base font on tiny screens */
}

/* ------------------------------------ */
/* Global Links & Buttons */
/* ------------------------------------ */
a {
  color: var(--primary-blue);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--primary-blue-dark);
  text-decoration: underline;
}

button {
  background-color: var(--primary-blue);
  color: var(--bg-white);
  padding: 14px 30px; /* Larger padding for better touch target */
  border: none;
  border-radius: 8px; /* Slightly more rounded */
  cursor: pointer;
  font-size: 1.1rem; /* Slightly larger font */
  font-weight: 600; /* Bolder text */
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  /* min-width: 160px;  Ensure buttons are tappable */
  /* min-height: 50px; /* Google's recommended touch target size */
  box-shadow: 0 4px 12px rgba(44, 100, 255, 0.2); /* Subtle shadow */
}

button:hover {
  background-color: var(--primary-blue-dark);
  transform: translateY(-3px); /* More pronounced lift */
  box-shadow: 0 8px 20px rgba(44, 100, 255, 0.3); /* Enhanced shadow on hover */
}

/* Base styles for secondary CTA button (e.g., in hero section) */
.cta-secondary {
  background-color: transparent;
  border: 2px solid var(--bg-white);
  color: var(--bg-white);
  box-shadow: none; /* No shadow by default for secondary */
}

.cta-secondary:hover {
  background-color: var(--primary-blue); /* Fills with blue on hover */
  color: var(--bg-white);
  border-color: var(--primary-blue); /* Border matches fill */
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(44, 100, 255, 0.3);
}

/* ------------------------------------ */
/* Common Layouts & Components */
/* ------------------------------------ */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px; /* Adjust padding for inner content */
}

.section-intro {
  font-size: 1.2rem;
  color: var(--text-medium-gray);
  max-width: 700px;
  margin: 20px auto 20px auto;
}
@media (max-width: 768px) {
  .section-intro {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }
}
@media (max-width: 480px) {
  .section-intro {
    font-size: 1rem;
    margin-bottom: 30px;
  }
}
</style>