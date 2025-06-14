
<template>
<div class="portfolio-grid">
    <div v-for="(singleProject, index) in projects" :key="index" class="card"> <!-- @click="openCard(index)">-->
      <VideoAnimation
        :webm-src="singleProject.webmLink"
        :mp4-src="singleProject.mp4Link"
        :poster-src= "singleProject.image"
       
      ></VideoAnimation>    
      <div>
        <div class="cardText">
          <h3 class="card-title">{{ singleProject.title }}</h3>
          <p class="card-desc">{{ singleProject.short_description }}</p>
        </div>
        <div class="CardTags">
          <div class="tech-tags">
            <span v-for="(technologies, i) in singleProject.technologies" :key="i" class="tag">{{ technologies }}</span>
          </div>
        </div>
      </div>

    </div>
</div>
 
</template>

<script setup>
import { ref } from 'vue';
import ProgressiveImage from './ProgressiveImage.vue';
import VideoAnimation from './VideoComponent.vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

defineExpose({
  VideoAnimation
});

const activeCard = ref(null);

function openCard(index) {
  activeCard.value = index;
}

function closeCard() {
  activeCard.value = null;
}

function nextCard() {
  if (activeCard.value < props.projects.length - 1) activeCard.value++;
}

function prevCard() {
  if (activeCard.value > 0) activeCard.value--;
}
</script>

<style scoped>


.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}
.card {
  background: white;
  border-radius: 12px;
  padding: 0px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
.card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.cardText{ 
  display: flex ;
  flex-direction: column;
 
  margin: 8px;
}
.card-title {
display: flex ;
justify-content: center; 
}

.card-desc{
display: flex ;
margin-inline: 4px;
}

.tech-tags {
  margin-top: 12px;
  margin-left: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 1rem;
}
.tag {
  background: #e0f7fa;
  color: #00796b;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}
.overlay-content {
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
}
.overlay-title {
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 600;
}
.overlay-subtitle {
  font-size: 1rem;
  margin-bottom: 20px;
  color: #444;
}
.overlay-section {
  margin-bottom: 24px;
}
.overlay-section h4 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #222;
}
.overlay-section ul {
  list-style: none;
  padding-left: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
}
.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
}
.nav-buttons {
  display: flex;
  justify-content: space-between;
}
.nav-buttons button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.nav-buttons button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
.nav-buttons button:hover:not(:disabled) {
  background-color: #0056b3;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
@media (max-width: 480px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  .overlay-content {
    width: 95%;
    padding: 24px;
  }
  .overlay-title {
    font-size: 1.5rem;
  }
}
</style>
