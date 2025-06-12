<script setup>
import { ref } from 'vue'; // Import ref for reactive variables


// Reactive state for the mobile menu
const isMobileMenuOpen = ref(false); // Declared as a ref, initialized to false

// Method for smooth scrolling to sections
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Method to toggle the mobile menu state
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value; // Access ref value with .value

  // Prevent/allow body scrolling
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Method to close the mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false; // Access ref value with .value
  document.body.style.overflow = ''; // Restore body scrolling
};

// --- Optional: Listen for screen resize to close menu on desktop ---
// This is good practice to ensure menu closes if screen size changes
import { onMounted, onBeforeUnmount } from 'vue';

const handleResize = () => {
  // Assuming 768px is your breakpoint for mobile menu
  if (window.innerWidth > 768 && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});


</script>


<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <!--<img :src=OKA_Logo2  /> -->
        <a href="/">Olafur Design</a>
      </div>

      <nav class="main-nav">
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <!--<li><a href="#testimonials">Testimonials</a></li> -->
        </ul>
      </nav>
        <button class="cta-button desktop-cta" @click="() => { scrollToSection('contact'); closeMobileMenu(); }">
            Let’s Talk
        </button>
      
      <div class="hamburger" @click="toggleMobileMenu" :class="{ 'is-active': isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <transition name="mobile-menu-fade">
      <nav v-if="isMobileMenuOpen" class="mobile-nav-overlay">
        <ul>
          <li><a href="#services" @click="closeMobileMenu">Services</a></li>
          <li><a href="#portfolio" @click="closeMobileMenu">Portfolio</a></li>
          <li><a href="#about" @click="closeMobileMenu">About</a></li>
          
          
          <li><button class="cta-button mobile-cta" @click="() => { closeMobileMenu(); scrollToSection('contact'); }">
                  Let’s Talk
              </button>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--bg-white);
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
}

.logo {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  
}

.logo img {
  display: flex;
  max-width: 4rem;
  min-width: 2rem;
  border-radius: 50%;
 
}

.logo a {
  display: flex;
  font-family: var(--font-heading); /* Use heading font for logo text */
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-charcoal);
  text-decoration: none;
}

/* Desktop Navigation */
.main-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.main-nav li {
  margin-left: 30px;
}

.main-nav a {
  display: flex;
  font-size: 1rem; /* Slightly smaller for nav */
  font-weight: 500;
  color: var(--text-charcoal);
  transition: color 0.3s ease;
  padding: 10px 4px;
  display: block;
}

.main-nav a:hover {
  color: var(--charcoal); /* Highlight with primary blue */
}

.desktop-cta {
    display: flex;
    width: 15%;
    height: 20%;
    padding: 1rem 1.5rem;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
}

/* Hamburger Icon */
.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  padding: 5px 0;
  z-index: 1001;
  margin-right: 8px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--text-charcoal); /* Match text color */
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.hamburger.is-active span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
  background-color: var(--bg-white); /* White for contrast on dark overlay */
}
.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active span:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
  background-color: var(--bg-white); /* White for contrast on dark overlay */
}

/* Mobile Navigation Overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95); /* Darker, slightly transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto; /* Allow scrolling if menu content is long */
}

.mobile-nav-overlay ul {
  list-style: none;
  padding: 0;
  text-align: center;
  width: 80%; /* Constrain width of menu links */
  max-width: 400px;
}

.mobile-nav-overlay li {
  margin-bottom: 30px;
}

.mobile-nav-overlay a {
  color: var(--bg-white);
  font-size: 1.8rem;
  font-weight: bold;
  padding: 15px 0;
  display: block;
  transition: color 0.3s ease;
}

.mobile-nav-overlay a:hover {
  color: var(--primary-blue);
}

.mobile-nav-overlay .mobile-cta {
  font-size: 1.3rem;
  padding: 15px 30px;
  margin-top: 20px;
  width: 100%; /* Full width mobile CTA */
  max-width: 300px;
}

/* Transition for mobile menu */
.mobile-menu-fade-enter-active, .mobile-menu-fade-leave-active {
  transition: opacity 0.3s ease;
}
.mobile-menu-fade-enter-from, .mobile-menu-fade-leave-to {
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-nav, .desktop-cta {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .logo a {
    font-size: 1.6rem;
  }
}
</style>