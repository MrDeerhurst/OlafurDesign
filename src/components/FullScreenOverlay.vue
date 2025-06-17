<script setup>
import { defineProps, defineEmits, watch, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

// Watch for changes in isVisible to toggle body scroll
watch(() => props.isVisible, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  } else {
    document.body.style.overflow = ''; // Restore background scrolling
  }
});

// Handle Escape key to close the overlay
const handleKeydown = (event) => {
  if (props.isVisible && event.key === 'Escape') {
    emit('close');
  }
};

// Add/remove event listener for keydown on mount/unmount
onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = ''; // Ensure scroll is restored if component is unmounted while overlay is open
});

// Method to close when clicking the overlay background itself (not the content)
const closeOnClickOutside = (event) => {
  if (event.target === event.currentTarget) { // Check if click was on the overlay div itself
    emit('close');
  }
};
</script>

<template>
  <Transition name="overlay-fade">
    <div v-if="isVisible" class="full-screen-overlay-backdrop" @click="closeOnClickOutside">
      <div class="full-screen-overlay-content">
        <div class="overlay-sticky-header">
          <button class="overlay-close-button" @click="$emit('close')">&times;</button>
        </div>
        <slot></slot> </div>
    </div>
  </Transition>
</template>

<style scoped>
.full-screen-overlay-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it's on top of other content */
  overflow-y: auto; /* Allow scrolling within the overlay if content is tall */
  padding: 20px; /* Padding around the content within the overlay */
}

.full-screen-overlay-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  max-width: 90%; /* Max width of the content box */
  max-height: 90%; /* Max height of the content box */
  overflow-y: auto; /* Enable scrolling for content inside the modal */
  position: relative;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  transform: scale(1); /* Initial state for animation */
}
.overlay-sticky-header {
  position: sticky; /* Make it sticky */
  top: 0; /* Stick to the top of its scrollable parent */
  width: 100%; /* Take full width */
  
  z-index: 10; /* Ensure it stays on top of scrolling content */
  padding: 15px 0; /* Add padding for spacing */
  
  display: flex;
  justify-content: flex-end; /* Push the button to the right */
  align-items: center;
}

.overlay-close-button {
 
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5em; /* Larger 'x' */
  color: #ffffff;
  background-color: #ef4545;
  cursor: pointer;
  line-height: 1;
  padding: 1rem, 1rem;
  transition: color 0.2s ease;
}

.overlay-close-button:hover {
  color: #666;
}

/* Transition for fade effect */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

/* Transition for content scaling effect */
.overlay-fade-enter-active .full-screen-overlay-content,
.overlay-fade-leave-active .full-screen-overlay-content {
  transition: transform 0.3s ease;
}

.overlay-fade-enter-from .full-screen-overlay-content,
.overlay-fade-leave-to .full-screen-overlay-content {
  transform: scale(0.95);
}
</style>