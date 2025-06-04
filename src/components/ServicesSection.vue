<script setup>
// Import the carousel components and CSS
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';


const services = [
  {
    icon: '💡', // Replace with actual SVG/font icon
    title: 'Mobile Augmented Reality (AR) Development',
    description: 'Custom AR app development for iOS (ARKit) & Android (ARCore), interactive marketing experiences, AR filters, product visualization, AR gaming, spatial computing.'
  },
  {
    icon: '🌐',
    title: 'Mobile Virtual Reality (VR) Development',
    description: 'Immersive VR experiences for mobile VR headsets, training simulations, virtual tours, educational content.'
  },
  {
    icon: '✨',
    title: 'Interactive 3D Experiences',
    description: 'Creating compelling 3D models, animations, and interactive scenes optimized for mobile VR/AR environments.'
  },
  {
    icon: '📐',
    title: 'Prototyping & Concept Development',
    description: 'From ideation to interactive prototypes, helping clients visualize and validate their VR/AR concepts before full development.'
  },
  {
    icon: '🎨',
    title: 'UI/UX Design for Immersive Experiences',
    description: 'Designing intuitive and engaging user interfaces and experiences specifically tailored for VR and AR environments on mobile devices.'
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
</script>

<template>
  <section id="services">
    <div class="container">
      <h2>My Mobile VR/AR Services</h2>
      <p class="section-intro">Bringing your vision to life with specialized virtual and augmented reality solutions.</p>

      <Carousel :items-to-show="1" :wrap-around="true" :breakpoints="breakpoints" class="services-carousel" >
        <Slide v-for="(service, index) in services" :key="index">
          <div class="carousel__item">
            <div class="service-block">
              <div class="service-icon">{{ service.icon }}</div>
              <h3>{{ service.title }}</h3>
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
  </section>
  
</template>

<style scoped>
.fit-content-paragraph {

  display: inline-block; /* Takes only the width it needs, but respects padding/margin */
  /* display: inline; */ /* Also takes only width it needs, but ignores vertical padding/margin */
  margin: 0; /* Remove default paragraph margin */
  /* Text resizing (as discussed in previous answer) */
  font-size: 1vw; /* This will make the text size relative to the viewport width */
  line-height: 1.4;
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
  max-height: 400px; /* Give a consistent minimum height to cards */
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
  font-size: 3.2rem;
  margin-bottom: 20px;
  color: var(--secondary-teal);
}

.service-block h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--text-charcoal);
}

.service-block p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
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

@media (max-width: 768px) {
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
@media (max-width: 768px) {
  .service-block {
    padding: 25px;
    min-height: 100px; /* Adjust height for smaller screens */
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