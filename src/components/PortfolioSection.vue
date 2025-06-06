<script setup>
import ProgressiveImage from './reusable/ProgressiveImage.vue';
import expanedProjectCard from './reusable/ExpanedProjectCard.vue';
import { projectsList } from "./contentFolder/Content"
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <h2>My Latest Work</h2>
      <p class="section-intro">A showcase of some of the innovative projects that demonstrate my capabilities.</p>
      <expanedProjectCard :projects="projectsList" />
    </div>
  </section>
</template>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 40px;
}

.portfolio-item {
  background-color: var(--bg-white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12); /* Slightly stronger shadow on hover */
}

.project-thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.item-content {
  padding: 25px;
}

.item-content h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--text-charcoal);
}

.item-content p {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--text-medium-gray);
  margin-bottom: 15px;
  line-height: 1.5;
}

.technologies {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background-color: #E0F7FA; /* Lighter variant of teal/aqua */
  color: var(--secondary-teal); /* Use secondary accent */
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.85rem; /* Slightly larger for readability */
  white-space: nowrap;
  font-weight: 500;
}

.view-case-study-button {
  display: block;
  background-color: var(--primary-blue);
  color: var(--bg-white);
  padding: 10px 20px;
  border: none;
  border-radius: 5px; /* Consistent radius */
  cursor: pointer;
  font-size: 0.95rem; /* Slightly larger font */
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}

.view-case-study-button:hover {
  background-color: var(--primary-blue-dark);
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .portfolio-grid {
    gap: 20px;
  }
  .portfolio-item {
    min-width: 280px;
  }
  .item-content {
    padding: 20px;
  }
}
@media (max-width: 480px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  .portfolio-item {
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
  }
  .project-thumbnail {
    height: 180px;
  }
}
</style>