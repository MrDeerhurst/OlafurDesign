<template>
  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <h2>What My Clients Say</h2>
      <p class="section-intro">Trusted by innovators to deliver outstanding results.</p>

      <div v-if="!isMobile" class="testimonials-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <p class="quote">"{{ testimonial.quote }}"</p>
          <p class="author">- {{ testimonial.name }} <span v-if="testimonial.company">, {{ testimonial.company }}</span></p>
        </div>
      </div>

      <div v-else class="testimonials-swiper-wrapper">
        <swiper
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false
          }"
          :pagination="{ clickable: true }"
          :navigation="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="mySwiper"
          :modules="modules"
        >
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
            <p class="quote">"{{ testimonial.quote }}"</p>
            <p class="author">- {{ testimonial.name }} <span v-if="testimonial.company">, {{ testimonial.company }}</span></p>
          </swiper-slide>
        </swiper>
      </div>

    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles (core and required modules)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonials: [
        { quote: 'Working with Olafur was a game-changer for our project. Their attention to detail and innovative solutions truly exceeded our expectations.', name: 'Jane Doe', company: 'Tech Innovators Inc.' },
        { quote: 'The VR experience Olafur crafted for us was immersive and flawlessly executed. Highly recommend their expertise in interactive solutions.', name: 'John Smith', company: 'Virtual Worlds Co.' },
        { quote: 'Exceptional communication and delivery. Olafur transformed our complex ideas into a user-friendly and visually stunning application.', name: 'Emily White', company: 'Digital Dreamscapes' },
        { quote: 'From concept to deployment, the process was smooth and transparent. Olafur delivered a high-impact AR solution that delighted our customers.', name: 'David Lee', company: 'Augmented Futures Ltd.' },
        
      ],
      modules: [Autoplay, Pagination, Navigation],
      isMobile: false, // New data property to track mobile state
      mobileBreakpoint: 768 // Define your breakpoint (e.g., 768px for tablets/mobiles)
    };
  },
  methods: {
    onSwiper(swiper) {
      //console.log('Swiper initialized:', swiper);
    },
    onSlideChange() {
      //console.log('Slide changed!');
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth <= this.mobileBreakpoint;
      // You might want to reset Swiper or other states if resizing across breakpoint,
      // but v-if/v-else largely handles the rendering for us.
    }
  },
  mounted() {
    this.checkScreenSize(); // Initial check
    window.addEventListener('resize', this.checkScreenSize); // Listen for resize
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize); // Clean up
  }
};
</script>

<style scoped>
/* Base Testimonials Section Styles */
.testimonials-section {
  padding: 60px 0;
 
  text-align: center;
}

.container {
  max-width: 900px; /* Adjust container width for testimonials */
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 2.8em;
  margin-bottom: 15px;
  color: #2c3e50;
}

.section-intro {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
}

/* --- Desktop Grid Layout Styles (Applies when !isMobile) --- */
.testimonials-grid {
  display: grid; /* Use CSS Grid for a nice layout */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
  gap: 30px; /* Space between grid items */
  justify-content: center; /* Center grid items if they don't fill the row */
}

/* Testimonial Card Styles (common to both grid and swiper) */
.testimonial-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  padding: 40px;
  min-height: 200px; /* Ensure cards have a consistent minimum height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.quote {
  font-size: 1.4em;
  font-style: italic;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.6;
}

.author {
  font-size: 1.1em;
  font-weight: bold;
  color: #007bff; /* Accent color */
}

.author span {
  font-weight: normal;
  color: #777;
}


/* --- Mobile Swiper Styles (Applies when isMobile) --- */
/* Wrapper to give Swiper proper context when conditionally rendered */
.testimonials-swiper-wrapper {
  width: 100%;
}

.mySwiper {
  width: 100%; /* Take full width of its parent container */
  height: auto; /* Height will adjust to content */
  padding-bottom: 40px; /* Space for pagination dots */
}

/* Swiper Pagination (Dots) Customization */
:deep(.swiper-pagination-bullet) {
  background-color: #ccc;
  opacity: 0.8;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  transition: background-color 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #007bff;
  opacity: 1;
}

/* Swiper Navigation (Arrows) Customization */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #007bff;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, color 0.3s ease;
}

:deep(.swiper-button-next)::after,
:deep(.swiper-button-prev)::after {
  font-size: 1.2em;
  font-weight: bold;
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background-color: #007bff;
  color: white;
}

/* Hide navigation arrows on very small screens if desired */
@media (max-width: 576px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }
}
</style>