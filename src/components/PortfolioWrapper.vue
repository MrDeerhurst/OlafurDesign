<template>
  <div class="portfolio-wrapper">
    <ProjectSection
      v-if="activeView === 'projectSection'"
      @switch-view="handleSwitchView"
      :active-view="activeView"
    />
    <Portfolio
      v-else-if="activeView === 'portfolio'"
      @switch-view="handleSwitchView"
      :active-view="activeView"
    />

    </div>
</template>

<script>
import ProjectSection from '@/components/ProjectSection.vue'; // Adjust path if needed
import Portfolio from '@/components/Portfolio.vue';     // Adjust path if needed

export default {
  name: 'PortfolioWrapper',
  components: {
    ProjectSection,
    Portfolio,
  },
  data() {
    return {
      // Initialize with 'projectSection' so it appears first
      activeView: 'projectSection',
    };
  },
  methods: {
    // This method will be called by child components when they want to switch the view
    handleSwitchView(viewName) {
      this.activeView = viewName;
    },
  },
};
</script>

<style scoped>
/* Add any styling for the wrapper if needed */
.portfolio-wrapper {
  /* For example, padding or max-width */
  padding: 20px;
}
</style>