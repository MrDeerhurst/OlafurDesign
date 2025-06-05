<script setup>
const testimonials = [
  {
    quote: "Working with Ólafur on our AR marketing campaign was a game-changer. The app was incredibly smooth and truly captured our brand's essence.",
    name: "Jane Doe",
    company: "Marketing Innovations Inc."
  },
  {
    quote: "The VR training simulator developed by Ólafur significantly reduced our onboarding time and improved retention. Professional and highly skilled!",
    name: "John Smith",
    company: "Global Logistics Co."
  },
  {
    quote: "Their expertise in mobile 3D experiences is unmatched. Our customers love the new product configurator!",
    name: "Alice Johnson",
    company: "Creative Furniture Ltd."
  }
];
</script>

<template>
  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <h2>What My Clients Say</h2>
      <p class="section-intro">Trusted by innovators to deliver outstanding results.</p>
      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <p class="quote">"{{ testimonial.quote }}"</p>
          <p class="author">- {{ testimonial.name }} <span v-if="testimonial.company">, {{ testimonial.company }}</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background-color: var(--bg-light-gray); /* Use the softer background gray */
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.testimonial-card {
  background-color: var(--bg-white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  text-align: left;
}

.testimonial-card .quote {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
  color: var(--text-charcoal);
}

.testimonial-card .author {
  font-family: var(--font-body);
  font-weight: bold;
  color: var(--primary-blue); /* Use primary blue for author */
  font-size: 0.95rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .testimonials-grid {
    gap: 20px;
  }
  .testimonial-card {
    padding: 25px;
  }
  .testimonial-card .quote {
    font-size: 1rem;
  }
}
@media (max-width: 480px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  .testimonial-card {
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
    padding: 20px;
  }
  .testimonial-card .quote {
    font-size: 0.9rem;
  }
}
</style>