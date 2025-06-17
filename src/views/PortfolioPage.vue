<script setup>
import Portfolio from '@/components/Portfolio.vue';
import AboutSection from '@/components/AboutSection.vue'; 
import ContactSection from '@/components/ContactSection.vue';

</script>

<template>
  <div class="portfolio-page">
    <div class ='heroSection' >
      <h2 >Portfolio</h2> 
      <h1>Ólafur</h1>
    </div>
    <AboutSection />
    <Portfolio />
    <ContactSection/>
  </div>
</template>



<style scoped>
/* Specific styles for your portfolio page layout if needed */
.portfolio-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px; /* Adjust as needed for header/navbar */

}
</style>