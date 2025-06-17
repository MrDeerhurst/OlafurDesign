<script setup>

</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      
      <h2>About Me</h2>
      <p class="section-intro">My journey into VR/AR and my commitment to innovation.</p>
      <div class="about-content">
        <p>Hi, I'm Ólafur Konráð Albertsson a UX designer and developer with a deep passion for creating meaningful experiences through Virtual and Augmented Reality. My journey into immersive media began during my academic path in computer science and interactive media technology, where I discovered how spatial computing could reshape the way we learn, interact, and solve problems.</p>
        <p>Since then, I’ve been dedicated to designing and building VR/AR solutions that are not only technically sound but human-centered and purposeful. Whether it’s crafting simulations, prototypes, or tools for education and industry, I aim to bridge innovation with real-world utility.</p>
        <p>I believe the best work happens through open collaboration. That’s why I emphasize clear communication, shared understanding, and iterative design ensuring each solution is grounded in your goals and shaped by user needs.</p>
        <p>Always learning, always testing, I stay at the edge of XR development to bring forward-thinking, reliable experiences to every project.</p>
       
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile_Image {
  max-width: 12rem ;
  max-height: 12rem ;
  border-radius: 8rem;
  padding-bottom: 0;
}

.about-section {
  text-align: center;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: justify;
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