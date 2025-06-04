<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2>About Me</h2>
      <p class="section-intro">My journey into VR/AR and my commitment to innovation.</p>
      <div class="about-content">
        <p>Hello! I'm [Your Name], a passionate freelance developer specializing in cutting-edge mobile Virtual and Augmented Reality solutions. My journey into immersive technologies began [mention brief origin, e.g., "during my studies in computer science," or "several years ago after witnessing the potential of AR in a gaming context"]. I'm driven by the desire to create truly engaging and valuable experiences that leverage the power of VR/AR on mobile devices.</p>
        <p>My philosophy is rooted in a collaborative approach, ensuring transparent communication and client involvement at every stage. I'm committed to delivering not just functional apps, but impactful solutions that solve real-world problems and open up new possibilities for your business.</p>
        <p>I continuously explore new technologies and best practices in the VR/AR space to ensure my clients always receive the most innovative and optimized solutions.</p>
        <p><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  text-align: center;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: left;
}

.about-content p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: var(--text-charcoal);
}

.about-content a {
  font-weight: 500;
  color: var(--primary-blue);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-content {
    margin-top: 30px;
  }
  .about-content p {
    font-size: 1rem;
    line-height: 1.7;
  }
}
@media (max-width: 480px) {
  .about-content p {
    font-size: 0.9rem;
  }
}
</style>