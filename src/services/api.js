// OlafurDesign/src/services/api.js

import axios from 'axios';

const isProduction = import.meta.env.PROD; // Vite's way to check for production mode

const API_BASE_URL = isProduction
  ? 'https://olafur-design-backend.onrender.com' // Replace with your actual Render URL, e.g., 'https://olafur-design-backend.onrender.com/api'
  : 'http://localhost:3000/api'; // Your local backend URL (Node.js)

  
const apiClient = axios.create({
  baseURL: API_BASE_URL, // Base URL for your backend API
  headers: { 
    'Content-Type': 'application/json'
    // Add any other headers like authorization tokens here
  },
 
});

export default {
  submitContactForm(formData) {
    // This function now handles the API call for the contact form
    return apiClient.post('/api/contact', formData)
  // You can add more API calls here (e.g., postProduct, updateProduct, etc.)
    }
}