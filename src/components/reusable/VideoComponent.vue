<template>
  <div class="video-animation-wrapper">
    <video
      ref="videoPlayer"
      :src="selectedSrc"
      :poster="posterSrc"
      :alt="altText"
      autoplay
      loop
      muted
      playsinline
      loading="lazy"
      @error="handleVideoError"
      class="imageSize"
    >
      <source v-if="webmSrc" :src="webmSrc" type="video/webm">
      <source v-if="mp4Src" :src="mp4Src" type="video/mp4">
      
      <img v-if="posterSrc" :src="posterSrc" :alt="altText">
      <p v-else>{{ altText || 'Your browser does not support the video tag.' }}</p>
    </video>
  </div>
</template>

<script>


export default {
  name: 'VideoAnimation', // Good practice to name your component

  props: {
    // Path to the WebM version of the video (optional but recommended)
    webmSrc: {
      type: String,
      default: '' // Make it optional
    },
    // Path to the MP4 version of the video (required as primary fallback)
    mp4Src: {
      type: String,
      default: '' // Make it optional. You should have at least one of webmSrc/mp4Src
    },
    // Path to a poster image (thumbnail shown before video loads/plays)
    posterSrc: {
      type: String,
      default: ''
    },
    // Alt text for accessibility and fallback image
    altText: {
      type: String,
      default: 'Animated content'
    }
  },

  data() {
    return {
      // This will store the source that the browser actually picks, or be empty if none work
      selectedSrc: '' 
    };
  },

  mounted() {
    this.setSelectedSource();
  },

  watch: {
    // Watch for changes in props and update the source
    webmSrc() { this.setSelectedSource(); },
    mp4Src() { this.setSelectedSource(); }
  },

  methods: {
    setSelectedSource() {
      // Basic logic to pick a source. The <source> tags handle this natively,
      // but if you only provide one prop, we ensure `src` is set correctly.
      if (this.webmSrc && this.$refs.videoPlayer.canPlayType('video/webm')) {
        this.selectedSrc = this.webmSrc;
      } else if (this.mp4Src && this.$refs.videoPlayer.canPlayType('video/mp4')) {
        this.selectedSrc = this.mp4Src;
      } else {
        this.selectedSrc = ''; // No supported source
      }
    },
    handleVideoError(event) {
      console.error('Video loading error:', event.target.error.message, event.target.src, );
      // You could emit an event, display a message, or swap to the poster image if not already shown
      this.$emit('video-error', { src: event.target.src, error: event.target.error });
    }
  }
};
</script>

<style scoped>

.imageSize {
  display: flex ;
  max-height: 18rem;
}
/* Scoped styles ensure these styles only apply to this component */
.video-animation-wrapper {
  /* Add any wrapper styling here, e.g., to control max-width */
  width: 100%; /* Or set a specific max-width */
  max-width: 40rem; /* Example max-width */
  margin: 0 auto; /* Center if max-width is set */
}

video {
  width: 100%; /* Make the video responsive to its container */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Remove extra space below the video */
  object-fit: cover; /* Ensures video covers the area, cropping if necessary */
  border-radius: 8px;
  
}


</style>