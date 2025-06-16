<template>
  <div class="portfolio-page">
    <Portfolio />
  </div>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'; 

export default {
  name: 'PortfolioPage',
  components: {
    Portfolio
  }
};
</script>

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