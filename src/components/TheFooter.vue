<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Olafur Design. All Rights Reserved.</p>
      <nav class="footer-nav">
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: var(--text-charcoal); /* Darker background for footer */
  color: var(--bg-white);
  padding: 30px 0;
  text-align: center;
  font-size: 0.9rem;
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

@media (max-width: 768px) {
  .footer .container {
    flex-direction: column;
    text-align: center;
  }
  .footer-nav ul {
    flex-direction: column;
    gap: 10px;
  }
  .footer p, .footer-nav a {
    font-size: 0.85rem;
  }
}

.footer-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.footer-nav li {
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-nav a {
  font-family: var(--font-body);
  color: var(--bg-white);
  opacity: 0.8;
  transition: opacity 0.3s ease;
  padding: 5px 0;
  display: block;
}

.footer-nav a:hover {
  opacity: 1;
  text-decoration: underline;
}
</style>