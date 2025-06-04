<template>
  <section id="differentiators" class="differentiators-section">
    <div class="container">
      <h2>Why Partner With Me?</h2>
      <p class="section-intro">Unlock new possibilities for your business with my specialized expertise.</p>
      <div class="differentiators-grid">
        <div class="differentiator-item">
          <h3>Deep Mobile VR/AR Specialization</h3>
          <p>My entire focus is on creating exceptional virtual and augmented reality experiences optimized for mobile devices.</p>
        </div>
        <div class="differentiator-item">
          <h3>Performance & Optimization</h3>
          <p>I prioritize delivering smooth, high-performing applications that work flawlessly across a range of mobile hardware.</p>
        </div>
        <div class="differentiator-item">
          <h3>User-Centric Design</h3>
          <p>Every solution is crafted with intuitive UI/UX, ensuring engaging and accessible experiences for end-users.</p>
        </div>
        <div class="differentiator-item">
          <h3>Collaborative & Transparent</h3>
          <p>I believe in close communication and partnership throughout the entire development lifecycle.</p>
        </div>
      </div>
      </div>
  </section>
</template>

<style scoped>
.differentiators-section {
  text-align: center;
}

.differentiators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.differentiator-item {
  background-color: var(--bg-white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.differentiator-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.differentiator-item h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--primary-blue); /* Use primary blue for headings */
}

.differentiator-item p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-medium-gray);
}

.headshot {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 50px;
  border: 4px solid var(--primary-blue); /* Border with primary blue */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .differentiators-grid {
    gap: 20px;
  }
  .differentiator-item {
    padding: 25px;
  }
}
@media (max-width: 480px) {
  .differentiators-grid {
    grid-template-columns: 1fr;
  }
  .differentiator-item {
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>