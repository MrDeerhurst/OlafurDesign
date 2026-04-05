<script setup>
// Import the carousel components and CSS
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { Languages } from "./contentFolder/Language";


import interactivity from '@/assets/images/interactive.png';
import prototype from '@/assets/images/prototype.png';
import arDevelopment from '@/assets/images/Custom_VR.png';
import vrExperiences from '@/assets/images/organisation.png';
import UXUI from '@/assets/images/UIUX.png';
import Mobile from '@/assets/images/MobileVR_AR.png'
 
const services = [
  { // Object/Image detection
    icon:arDevelopment ,
    stepTitle: "Step One",
    title: 'Capture', 
    description: 'We digitize your manuals and expert knowledge.'
  },
  { // Connects 
    icon: Mobile,
    stepTitle: "Step Two",
    title: 'Deploy',
    description: 'Your team accesses instructions instantly via smartphone or tablet.'
  },
    { // design and animation
    icon: interactivity,
    stepTitle: "Step Three",
    title: 'Execute',
    description: 'AR overlays show exactly which bolt to turn and which lever to pull.'
  },
  { // AR/VR Concept Prototyping
    icon: vrExperiences,
    stepTitle: "Step Four",
    title: 'Verify',
    description: 'Real-time data logs ensure the job was done to spec'
  }
  
];


// Define breakpoints for responsive carousel behavior
const breakpoints = {
  // 0px to 480px (small mobile)
  0: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // 481px to 768px (larger mobile/small tablet)
  481: {
    itemsToShow: 1.5, // Shows one full and a hint of the next
    snapAlign: 'center',
  },
  // 769px to 1024px (tablet/small desktop)
  769: {
    itemsToShow: 2.5,
    snapAlign: 'start',
  },
  // 1025px and up (larger desktop)
  1025: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
};



import { ref, onMounted, onUnmounted } from "vue";

const el1 = ref(null)
const el2 = ref(null)
const el1Visible = ref(false)
const el2Visible = ref(false)

let observers = []

onMounted(() => {
  const observe = (el, setter) => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setter(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (el) obs.observe(el)
    observers.push(obs)
  }

  observe(el1.value, v => (el1Visible.value = v))
  observe(el2.value, v => (el2Visible.value = v))
})

onUnmounted(() => observers.forEach(o => o.disconnect()))
</script>

<template>
  <section id="Function" aria-hidden="false" >
        <div class="eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">{{  Languages.current.Function.EyelashText }}</span>
          <span class="eyebrow-line"></span>
      </div>
   <div class="block" :class="{ visible: el1Visible }" ref="el1">
    <div class="container" ref="header" :class="{ visible: phaseVisible }">
      <h2 class ="Announcer">{{  Languages.current.Function.MainTitle }}</h2>
      <p class="section-intro">{{  Languages.current.Function.SubTitle }}</p>
    
    <div class="block" :class="{ visible: el2Visible }" ref="el2">
      <Carousel :items-to-show="1" :wrap-around="true" :breakpoints="breakpoints" class="services-carousel"   ref="blocks" >
        <Slide v-for="(service, index) in  Languages.current.Function.services" :key="index">
          <div class="carousel__item">
            <div class="service-block">
              <dev class ="serviec-subtitle">{{ service.stepTitle }}</dev>
            
              <img 
                :src= service.icon  
                class="service-icon">
              </img>
             
              
              <h3 >{{ service.title }}</h3>
              
              <p class="fit-content-paragraph">{{ service.description }}</p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      </div>
      
    </div>
    </div>
  </section>
  
</template>

<style scoped>
.block {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.block.visible {
  opacity: 1;
  transform: translateY(0);
}
.Announcer{
 font-family: "Playfair Display", "Georgia", serif;
 font-weight: 700;
}
.eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.eyebrow-line {
  display: block;
  width: 48px;
  height: 1px;
  background: #989898;
  opacity: 0.6;
}
.eyebrow-text {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #989898;
}

/* Remove the previous grid layout for services, as carousel handles it */
 .services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 40px;
} 

/* Add margin to the carousel overall to provide spacing */
.services-carousel {
  margin-top: 0px;
  margin-bottom: 0px;
  
  

  /* Customize pagination button size */
  --vc-pgn-width: 2rem;  /* Increase width */
  --vc-pgn-height: 2rem; /* Increase height */

  /* Customize pagination button shape (make it a circle) */
  --vc-pgn-border-radius: 60%; /* Makes it a perfect circle if width and height are equal */

  /* Customize colors (optional) */
  --vc-pgn-active-color: #007bff;     /* Active dot color (e.g., blue) */
  
  --vc-nav-height: 4rem;
  --vc-nav-width: 4rem;

}

/* Style for each item inside the carousel slide */
/* Apply consistent margin to slides to create spacing between them */
.carousel__item {
  padding: 15px; /* Creates spacing between carousel items */
  width: 100%; /* Ensure the item takes full width of its slide */
  height: 100%; /* Ensure the item takes full width of its slide */
}

.service-block {
  background-color: var(--bg-white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08); /* Retain subtle shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 280px; /* Give a consistent minimum height to cards */
  max-height: 600px; /* Give a consistent minimum height to cards */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 100%; /* Ensure all service blocks in a row have the same height */
}

.service-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12); /* Slightly stronger shadow on hover */
}

.service-icon {
  display: flex;
  font-size: 3.2rem;
  margin-bottom: 0px;
  color: var(--secondary-teal);
  width: 50%;

}
.serviec-subtitle {
  font-weight: bold;
  font-size: 1.0rem;
}

.service-block h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--text-charcoal);
}

.service-block p {
  font-family: var(--font-body);
  font-size: clamp(16px, calc(20px + (36 - 20) * (100vw - 768px) / (1920 - 768)), 1rem);
  
  line-height: 1;
  color: var(--text-medium-gray);
  flex-grow: 1; /* Allows the paragraph to take up remaining space */
}

/* Customizing vue3-carousel navigation and pagination */
/* These styles will apply globally if not scoped, but are often placed here for specific carousel instances */
.carousel__icon {
    fill: currentColor;
    height: 2rem;
    width: 3rem;
}

.carousel__prev, .carousel__next {
  background-color: var(--primary-blue);
  color: var(--bg-white);
  border-radius: 50%;
  width: 3rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  top: 50%; /* Center vertically */
  transform: translateY(-50%);
  transition: background-color 0.3s ease;
}

.carousel__prev:hover, .carousel__next:hover {
  background-color: var(--primary-blue-dark);
}

/* Adjust position of arrows slightly for better visibility */
.carousel__prev {
  left: -20px; /* Adjust as needed */
}
.carousel__next {
  right: -20px; /* Adjust as needed */
}

@media (max-width: 820px) {
  .carousel__prev {
    left: -10px;
  }
  .carousel__next {
    right: -10px;
  }
}

@media (max-width: 480px) {
  .carousel__prev, .carousel__next {
    width: 35px;
    height: 35px;
    font-size: 0.8rem; /* Smaller arrow icon */
  }
  .carousel__prev {
    left: 0px; /* Push arrows closer to edges on small screens */
  }
  .carousel__next {
    right: 0px;
  }
}

.carousel__pagination {
  margin-top: 30px; /* Space between slides and pagination */
  
}



.carousel__pagination-button::after {
  background-color: var(--border-light-gray); /* Inactive dot color */
  border-radius: 50%;
  width: 30px;
  height: 10px;
  transition: background-color 0.3s ease;
}
.carousel__pagination-button--active::after {
  background-color: var(--primary-blue); /* Active dot color */
  transform: scale(1.2); /* Make active dot slightly larger */
}

/* Responsive adjustments for overall section if needed, but breakpoints handle most for carousel */
@media (max-width: 820px) {
  .service-block {
    padding: 25px;
    min-height: 100px; /* Adjust height for smaller screens */
    max-height: 700px;
  }
  .service-icon {
    font-size: 2.8rem;
  }
}

@media (max-width: 480px) {
  .service-block {
    padding: 20px;
    min-height: 100px; /* Further adjust height for tiny screens */
    
  }
  .service-icon {
    font-size: 2.5rem;
  }
}
</style>