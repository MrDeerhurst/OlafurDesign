<script>
import portfolio from "./ProjectSection.vue"; // Adjust path if needed
import services from "./ServicesSection.vue";

export default {
  components: {
    portfolio,
    services,
  },
  data() {
    return {
      animationId: null,
      start: null,
      duration: 2800,
    };
  },

  mounted() {
    this.startAnimation();
  },

  beforeUnmount() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth", // This makes the scroll animated
          block: "start", // Aligns the top of the element with the top of the viewport
        });
      }
    },
    startAnimation() {
      this.animationId = requestAnimationFrame(this.animate);
    },

    animate(ts) {
      if (!this.start) this.start = ts;

      const elapsed = (ts - this.start) % (this.duration * 2);
      const t =
        elapsed < this.duration
          ? elapsed / this.duration
          : 2 - elapsed / this.duration;
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const pct = eased * 100;

      const bar = document.getElementById("scanBar");
      const overlay = document.getElementById("overlayImg");

      if (bar) bar.style.top = pct + "%";
      if (overlay) overlay.style.clipPath = `inset(0 0 ${100 - pct}% 0)`;

      this.animationId = requestAnimationFrame(this.animate);
    },

    stopAnimation() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
        this.start = null;
      }
    },
  },
};
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="phone-mockup">
      <div class="phone-notch"></div>
      <div class="phone-screen" id="phoneScreen">
        <img
          class="phone-bg-img"
          src="@/assets/images/PipingNormal.png"
          alt="Background"
        />
        <img
          class="phone-overlay-img"
          id="overlayImg"
          src="@/assets/images/PipingAdded.png"
          alt="AR Overlay"
        />
        <div class="scan-bar" id="scanBar"></div>
        <div class="phone-vignette"></div>
        <div class="ar-corners"><span></span></div>
      </div>
    </div>

    <div class="hero-content">
      <h1 style="text-align: left">
        Reduce Maintenance Errors with AR-Guided Training.
      </h1>
      <p style="text-align: left">
        <!--Specializing in engaging, high-performance virtual reality(VR) and augmented reality(AR) applications. -->
        Turn every technician into an expert. Our Augmented Reality platform
        provides real-time, hands-on guidance for setup and troubleshooting,
        reducing onboarding time and cutting service costs.
      </p>
      <div class="hero-ctas">
        <button class="cta-primary" @click="scrollToSection('Impact')">
          Impact Examples
        </button>
        <!--
        <button class="cta-secondary" @click="scrollToSection('services')">
          Learn More About Services
        </button>
      --></div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 80vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-white); /* Ensure text is white */
  overflow: hidden;
  text-align: left;
  padding: 20px;
  background: linear-gradient(145deg, #0b2e6e 0%, #1a5fbf 60%, #3a86ff 100%);
  padding: 60px 48px 52px;
  text-align: center;
  position: relative;
  overflow: hidden;

  font-family: "Poppins", sans-serif;
}

.hero-section::before {
  content: "";
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  top: -140px;
  right: -120px;
}
.hero-section::after {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  bottom: -80px;
  left: -60px;
}

.video-background,
.fallback-hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  object-fit: cover;
  z-index: -1;
  /*filter: brightness(0.4);  Slightly darker filter for better text contrast */
  background-color: white; /* For browsers that do not support gradients */
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 10%,
    rgba(253, 187, 45, 0) 100%
  );

  transition: 3s ease-in-out;
}

.hero-content {
  z-index: 1;
  max-width: 800px;
  padding: 10px 10px 10px 10px;
}
/* Phone mockup */
.phone-mockup {
  display: flex;
  z-index: 1;
  display: inline-block;
  width: 170px;
  min-width: 170px;
  background: #0a1e45;
  border-radius: 30px;
  padding: 10px 8px 14px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 28px 70px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.07) inset;
  margin-top: 8px;
}
.phone-notch {
  width: 48px;
  height: 7px;
  background: #0a1e45;
  border-radius: 0 0 8px 8px;
  margin: 0 auto 6px;
}
.phone-screen {
  border-radius: 18px;
  height: 280px;
  overflow: hidden;
  position: relative;
}
.phone-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.phone-overlay-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  clip-path: inset(0 0 100% 0);
}
.scan-bar {
  position: absolute;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(58, 134, 255, 0.6) 20%,
    rgba(255, 255, 255, 0.95) 50%,
    rgba(58, 134, 255, 0.6) 80%,
    transparent 100%
  );
  box-shadow:
    0 0 10px 3px rgba(58, 134, 255, 0.7),
    0 0 24px 6px rgba(58, 134, 255, 0.3);
  pointer-events: none;
  z-index: 3;
  top: 0;
}
.phone-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 55%,
    rgba(10, 30, 69, 0.55) 100%
  );
  pointer-events: none;
  z-index: 4;
}
.ar-corners {
  position: absolute;
  inset: 10px;
  pointer-events: none;
  z-index: 5;
}
.ar-corners::before,
.ar-corners::after,
.ar-corners span::before,
.ar-corners span::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-color: rgba(58, 134, 255, 0.85);
  border-style: solid;
}
.ar-corners::before {
  top: 0;
  left: 0;
  border-width: 2px 0 0 2px;
}
.ar-corners::after {
  top: 0;
  right: 0;
  border-width: 2px 2px 0 0;
}
.ar-corners span::before {
  bottom: 0;
  left: 0;
  border-width: 0 0 2px 2px;
}
.ar-corners span::after {
  bottom: 0;
  right: 0;
  border-width: 0 2px 2px 0;
}

.hero-content h1 {
  font-size: 3.5rem; /* Base size, adjusted by global App.vue styles */
  margin-bottom: 20px;
  line-height: 1.2;
  color: var(--bg-white); /* Ensure heading is white */
}

.hero-content p {
  font-family: var(--font-body); /* Ensure body text uses chosen font */
  font-size: 1.4rem;
  margin-bottom: 40px;
  opacity: 0.9;
  color: var(black); /* Ensure paragraph is white */
}

.hero-ctas {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
}

/* Specific styles for hero CTAs, overriding global button styles */
.hero-ctas .cta-primary {
  display: flex;
  background-color: var(--primary-blue);
  color: var(--bg-white);
  box-shadow: 0 6px 15px rgba(44, 100, 255, 0.3); /* Stronger shadow for primary CTA */
}

.hero-ctas .cta-primary:hover {
  background-color: var(--primary-blue-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(44, 100, 255, 0.4);
}

.hero-ctas .cta-secondary {
  background-color: transparent;
  border: 2px solid var(--bg-white);
  color: var(--bg-white);
  box-shadow: none;
}

.hero-ctas .cta-secondary:hover {
  background-color: var(--primary-blue);
  color: var(--bg-white);
  border-color: var(--primary-blue);
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(44, 100, 255, 0.3); /* Add shadow on hover */
}

/* Responsive adjustments specific to HeroSection */
@media (max-width: 820px) {
  .hero-section {
    height: 40rem;
    display: flex;
    align-items: center;
  }
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .hero-content p {
    font-size: 1rem;
    margin-bottom: 30px;
  }
  .hero-ctas button {
    width: 90%;
    max-width: 300px;
    margin: 5px 0;
  }
}
@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 1.4rem;
  }
  .hero-content p {
    font-size: 0.7rem;
  }
}
</style>
