<template>
  <div class="progressive-image-container" :style="containerStyle">
    <img
      v-if="( isSmallScreen || !gifLoaded )"
      :src="placeholderPng"
      :alt="altText"
      class="progressive-image-placeholder"
      @error="handlePlaceholderError"
    />
    <img
      v-else-if="(gifLoaded && !gifError )"
      :src="fullGif"
      :alt="altText"
      class="progressive-image-full"
      @load="onGifDisplay"
    />

    <div v-else class="image-fallback">
      <slot name="errorFallback">
        Image failed to load.
      </slot>
    </div>

    <div v-if="!gifLoaded && !gifError && !isSmallScreen" class="progressive-image-spinner">
      <slot name="loadingSpinner">
        <div class="default-spinner"></div>
      </slot>
    </div>
  </div>
  
</template>

<script>


export default {
  name: 'ProgressiveImage', // Good practice to name your components
  props: {
    placeholderPng: {
      type: String,
      required: true,
    },
    fullGif: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: 'Animated content',
    },

    // Optional: Fixed dimensions for the container to prevent layout shift
    width: {
      type: [String, Number],
      default: '100%', // Default to 100% width
    },
    height: {
      type: [String, Number],
      default: 'auto', // Default to auto height
    },
    minHeight: { // Useful for ensuring placeholder has some height if content isn't fixed
      type: [String, Number],
      default: '150px' // Example default, adjust as needed
    }
  },
  data() {
    return {
      gifLoaded: false,
      gifError: false,
      placeholderError: false, // Track if placeholder itself fails
      imageLoader: null, // To manage the Image object
      isSmallScreen: false, // This will be true if screen width is <= 480px
      mediaQueryList: null  // To store the MediaQueryList object
      
    };
  },
  computed: {
    containerStyle() {
      const style = {
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        height: typeof this.height === 'number' ? `${this.height}px` : this.height,
        minHeight: typeof this.minHeight === 'number' ? `${this.minHeight}px` : this.minHeight,
        // If height is auto, minHeight is important for the placeholder
      };
      if (this.height === 'auto') {
        delete style.height; // Let content dictate height
      }
      return style;
    }
  },
  watch: {
    // Watch for changes in fullGif or placeholderPng props
    // This allows the component to re-load if the parent changes the image URLs
    fullGif() {
      this.preloadGif();
    },
    placeholderPng() {
      // If placeholder changes, reset error state for it
      this.placeholderError = false;
    }
  },
  mounted() {
    this.preloadGif();
    // Define the media query string you want to monitor
    const mediaQueryString = '(max-width: 480px)';

    // Initialize the MediaQueryList object
    this.mediaQueryList = window.matchMedia(mediaQueryString);

    // Set the initial value of the isSmallScreen data property
    this.updateIsSmallScreen();

    // Add an event listener to update the variable whenever the media query's status changes
    // The 'change' event on MediaQueryList is efficient; it only fires when the match status changes.
    this.mediaQueryList.addEventListener('change', this.updateIsSmallScreen);
  },
  beforeUnmount() {
    if (this.imageLoader) {
      this.imageLoader.onload = null;
      this.imageLoader.onerror = null;
      this.imageLoader = null;
    }
    // Clean up: Remove the event listener to prevent memory leaks
    if (this.mediaQueryList) {
      this.mediaQueryList.removeEventListener('change', this.updateIsSmallScreen);
    }
  },
  methods: {
    preloadGif() {
      this.gifLoaded = false;
      this.gifError = false;
      // If a previous loader exists, clean it up before starting a new one
      if (this.imageLoader) {
        this.imageLoader.onload = null;
        this.imageLoader.onerror = null;
        this.imageLoader = null;
      }

      this.imageLoader = new Image();
      this.imageLoader.src = this.fullGif;

      this.imageLoader.onload = () => {
        this.gifLoaded = true;
        this.imageLoader = null; // Clean up
      };

      this.imageLoader.onerror = () => {
       // console.error('Failed to load GIF:', this.fullGif);
        this.gifError = true;
        this.imageLoader = null; // Clean up
      };

    },
    handlePlaceholderError() {
     // console.error('Failed to load placeholder PNG:', this.placeholderPng);
      this.placeholderError = true;
      // If placeholder fails, and GIF hasn't loaded/failed yet, consider
      // displaying a generic broken image icon or a fallback message.
      // The v-else for `image-fallback` will catch this.
    },
    onGifDisplay() {
      // Emit an event if the parent component needs to know the GIF has displayed
      this.$emit('gif-displayed');
    },
    // Function to update the isSmallScreen data property
    updateIsSmallScreen() {
      // Access the 'matches' property of the MediaQueryList object
      this.isSmallScreen = this.mediaQueryList.matches;
     // console.log(`Media query '(max-width: 480px)' matches:`, this.isSmallScreen);
    }
  
  }
};
</script>

<style scoped>
.responsive-component-example {
  font-family: Arial, sans-serif;
  padding: 30px;
  margin: 20px auto;
  max-width: 700px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.progressive-image-container {
  position: relative;
  overflow: hidden; /* Important to clip overflowing spinners/images if not fixed size */
  display: flex; /* To center content within container */
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* Default background */
  border-radius: 8px; /* Example styling */
}

.progressive-image-placeholder,
.progressive-image-full {
  display: block; /* Remove extra space below image */
  width: 100%;
  height: 100%;
  object-fit: cover; /* Or 'contain', depending on desired fit */
  transition: opacity 0.5s ease-in-out; /* Smooth transition for the swap */
  position: absolute; /* Stack them */
  top: 0;
  left: 0;
}

.progressive-image-placeholder {
  z-index: 2; /* PNG on top initially */
}

.progressive-image-full {
  z-index: 1; /* GIF initially behind, comes forward when loaded */
  opacity: 0; /* Initially hidden */
}

/* When GIF is loaded, PNG fades out and GIF fades in */
.progressive-image-container:has(.progressive-image-full:not([src=""]):not([src=""]).progressive-image-full) .progressive-image-placeholder {
  opacity: 0; /* Fade out PNG */
}
.progressive-image-container:has(.progressive-image-full:not([src=""]):not([src=""]).progressive-image-full) .progressive-image-full {
  opacity: 1; /* Fade in GIF */
}


.progressive-image-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* Above images */
  color: #888;
  font-size: 1em;
}

/* Default Spinner (simple CSS animation) */
.default-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.image-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff4d4d;
  font-size: 0.9em;
  background-color: #ffe6e6;
  border: 1px dashed #ff4d4d;
}

</style>