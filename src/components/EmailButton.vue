<template>
  
      <a :href="simpleEmailLink" class="contact-me-button">
        Contact Me
      </a>

</template>

<script>
export default {
  data() {
    return {
      myEmailAddress: 'design@olafur.design' 
    };
  },
  computed: {
    simpleEmailLink() {
      // Constructs the mailto link with only the recipient's email
      return `mailto:${this.myEmailAddress}`;
    }
  },
  methods: {
    openSimpleEmail() {
      // This method does the same as directly binding to href
      window.location.href = this.simpleEmailLink;
    }
  }
};
</script>

<style scoped>
/* Style for your button */
.contact-me-button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #007bff; /* Example blue */
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none; /* Remove underline for anchor tag */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

.contact-me-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.contact-me-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);
}

/* Optional styling for the section containing the button */
#contact-button-section {
  text-align: center;
  padding: 50px 20px;
  background-color: #e9f7ff;
}

#contact-button-section h2 {
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
}

#contact-button-section p {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 30px;
}
</style>