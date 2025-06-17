<template>
  
    <div class="container">
      <div class="top_elements">
      <h2 class="portfolio-title">My Projects</h2>
      <button v-if="props.activeView === 'portfolio'" @click="switchViewToProjectSection" class="switch-button">
        View Curated Projects
      </button>
      </div>
      
      <div class="portfolio-grid">
        <div v-for="(project, index) in PorfolioProjectsList" :key="index" class="portfolio-card">
          <div class="card-image-wrapper">
            <img :src="project.image" :alt="project.title" class="card-image" />
            <video v-if="project.webmLink || project.mp4Link" class="card-video" autoplay loop muted playsinline>
              <source v-if="project.webmLink" :src="project.webmLink" type="video/webm">
              <source v-if="project.mp4Link" :src="project.mp4Link" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="card-content">
            <h2 class="card-title">{{ project.title }}</h2>
            <p class="subtext">{{ project.shortDescription }}</p>
            <div class="card-details">
              <p class ='subtext' > <strong class ="subtitleTitle">Task:</strong> {{ project.task }}</p>
              <div class ="subtitleTitle">Key Results:</div>
                <ul>
                  <li v-for="(result, i) in project.keyResults" :key="i" class="subtext">{{ result }}</li>
                </ul>
                <p class ='subtext'> <strong class ="subtitleTitle">My Role:</strong> {{ project.myRole }}</p>
                <div class ="subtitleTitle">Platform:
                <div class="tech-tags">
                  <span v-for="(technologies, i) in project.technologies" :key="i" class="Ttag">{{ technologies }}</span>
                </div>
              </div>
              <div class ="subtitleTitle">Skills:
                <div class="tech-tags">
                  <span v-for="(technologies, i) in project.skills" :key="i" class="Stag">{{ technologies }}</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import {PorfolioProjectsList} from '@/components/contentFolder/PortfolioDetails'
import { ref, computed, defineProps, defineEmits } from 'vue';

// Define props for this component
const props = defineProps({
  activeView: {
    type: String,
    required: true
  }
});

// Define emits for this component
const emit = defineEmits(['switch-view']);

// Reactive state for expand/collapse
const expanded = ref(false);

// Computed property for projects to show (expand/collapse logic)
const projectsToShow = computed(() => {
  if (expanded.value) {
    return projects.value;
  }
  return projects.value.slice(0, 3);
});


// Function to emit the event when the button is clicked
const switchViewToProjectSection = () => {
  emit('switch-view', 'projectSection');
};

</script>

<style scoped>

.top_elements {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heroSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;

  background-repeat: no-repeat;
  background-size: cover;

}

.portfolio-container {
  padding: 30px;
  max-width: 1200px;
  min-width: 400px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif; /* Or your preferred font */
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;

}

.portfolio-title {
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 2.5em;
  color: #333;
}

.portfolio-grid {
  display: flex;
  gap: 30px;
  flex-direction: column;
}

.portfolio-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100% ;
  width: 100%;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-image-wrapper {
  width:100%;
  position: relative;
  overflow: hidden;
}

.card-image,
.card-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 2rem;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 2.0em;
  margin-top: 0;
  margin-bottom: 10px;
  color: #000000; /* A nice blue for titles */
}

.card-short-description {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.card-details {
  font-size: 1.2em;
  color: #444;
  margin-bottom: 20px;
  flex-grow: 1;
}

.card-details p {
  margin-bottom: 5px;
}

.card-details ul {
  list-style: disc;
  margin-left: 20px;
  padding: 0;
  margin-top: 5px;
}

.card-details li {
  margin-bottom: 3px;
}

.subtitleTitle {
  font-family: var(--font-heading);
  color: var(--text-charcoal);
  line-height: 1.2;
  font-size: 1.0rem; 
  font-weight: 700; 
  margin-top: 1rem;
  padding-bottom: 0.5rem;
}

.subtext {
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  font-size: 1rem;
}

.case-study-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-top: auto; /* Pushes the button to the bottom */
}

.case-study-button:hover {
  background-color: #0056b3;
}

.tech-tags {
  margin-top: 12px;
  margin-left: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 0rem;
   font-size: 1rem;
}
.Ttag {
  background: #e0e3ff;
  color: #000679;
  padding: 3px 8px;
  border-radius: 4px;

}

.Stag {
  background: #e0f7fa;
  color: #016559;
  padding: 4px 8px;
  border-radius: 4px;
 
}
.project-section {
  padding: 40px 20px;
  background-color: #e0f7fa;
  text-align: center;
}

.view-switcher {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
}

.view-switcher h2 {
  font-size: 2.5em;
  color: #00796b;
  margin: 0;
}

.switch-button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
    display: flex;
    max-width: 16rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.switch-button:hover {
  background-color: #0056b3;
}


/* --- Responsive Design --- */

/* Tablet styles */
@media (max-width: 800px) {
  

.subtext {
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  font-size: 1rem;
   
}

.tech-tags {
   font-size: 0.8rem;
}

  .card-image,
.card-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  max-height: 20rem;
  
}

  .card-image-wrapper {
  width: 100%;
  max-height: 20rem;
  
  }

  .portfolio-card {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  }

  .portfolio-title {
    font-size: 2rem;
    margin-bottom: 30px;

  }

  .card-title {
    font-size: 2em;
  }

  .card-short-description,
  .card-details {
    font-size: 1em;
  }
}

/* Mobile styles */
@media (max-width: 700px) {
   .card-image-wrapper {
  width: 100%;
  height: 20rem;
  }

  .portfolio-grid {
    grid-template-columns: 1fr; /* Single column for mobile */
    gap: 20px;
  }

  .portfolio-container {
    padding: 15px;
  }

  .portfolio-title {
    font-size: 1.8em;
    margin-bottom: 25px;
  }

  .card-content {
    padding: 15px;
  }

  .card-title {
    font-size: 1.3em;
  }

  .card-short-description,
  .card-details {
    font-size: 0.85em;
  }

  .case-study-button {
    padding: 8px 12px;
    font-size: 0.9em;
  }
}



</style>