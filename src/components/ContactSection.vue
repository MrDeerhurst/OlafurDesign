<script setup>
import { ref } from 'vue';
import apiService from '../services/api';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = async () => {
  try {
    //console.log('Submitting form with data:', form.value);

    // Call the service function to send the data
    const response = await apiService.submitContactForm(form.value);

   // console.log('Backend response:', response.data);

    if (response.data.success) {
      alert(response.data.message);
      // Clear the form fields
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    } else {
      alert(`Error: ${response.data.message}`);
    }
  } catch (error) {
   // console.error('Error submitting form:', error);
    if (error.response) {
      alert(`Failed to send message: ${error.response.data.message || 'An unexpected error occurred.'}`);
    } else {
      alert('Failed to send message. Please try again later.');
    }
  }
};
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Ready to Build Your Next Reality?</h2>
      <p class="section-intro">Let's collaborate on your innovative VR/AR solutions.</p>
      <div class="contact-grid">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="message">Project Details / Message</label>
            <textarea id="message" v-model="form.message" rows="6" required></textarea>
          </div>
          <button type="submit" class="cta-button">Send Message</button>
        </form>
        <div class="contact-info">
          <h3>Direct Contact</h3>
          <p>📧 Email: <a href="Design@olafur.design">design@olafur.design</a></p>
          <p>📱 Phone: <a href="tel:+1234567890">+1 (234) 567-890</a> </p>
          <p>📅 Schedule a call: <a href="https://calendly.com/design-olafur" target="_blank" rel="noopener noreferrer">Book Here</a></p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/olafur-konrad/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
            <!-- <a href="https://behance.net/yourprofile" target="_blank" rel="noopener noreferrer">Behance</a> -->
            <a href="https://bsky.app/profile/wolaf.bsky.social" target="_blank" rel="noopener noreferrer"> Bluesky</a>
          </div>
          <p class="location">Serving clients globally from Reykjavik, Iceland.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fa {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  font-size: 1.0rem;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  text-decoration: none;
  margin: 2px 2px;
}

.fa:hover {
    opacity: 0.7;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-bluesky {
  background: #007bb5;
  color: white;
}




.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 50px;
  text-align: left;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.contact-form {
  background-color: var(--bg-white);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

@media (max-width: 480px) {
  .contact-form {
    padding: 30px;
  }
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-family: var(--font-body);
  display: block;
  font-weight: 600; /* Bolder label */
  margin-bottom: 8px;
  color: var(--text-charcoal);
  font-size: 0.95rem; /* Slightly smaller than default for labels */
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-light-gray); /* Lighter, subtle border */
  border-radius: 5px;
  font-size: 1rem;
  font-family: var(--font-body);
  color: var(--text-charcoal);
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-blue); /* Primary blue on focus */
  box-shadow: 0 0 0 3px rgba(44, 100, 255, 0.2); /* Subtle blue glow on focus */
}

.form-group textarea {
  resize: vertical;
}


.contact-info h3 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--primary-blue);
}

.contact-info p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: var(--text-charcoal);
}

.contact-info a {
  font-weight: 500;
  color: var(--primary-blue);
}

.social-links {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.social-links a {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 600; /* Bolder social links */
  color: var(--primary-blue);
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.location {
  margin-top: 25px;
  font-size: 1rem;
  color: var(--text-medium-gray);
}
</style>