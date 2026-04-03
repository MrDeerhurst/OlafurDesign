<template>
  <div class="video-animation-wrapper">
    <div
      style="
        margin: 0;
        display: inline-block;
        width: 200px;
        background: rgb(10, 30, 69);
        border-radius: 30px;
        padding: 10px 10px 20px 10px;
        border: 3px solid rgba(255, 255, 255, 0.18);
        box-shadow:
          0 3px 8px,
          0 0 0 1px inset;
        margin-top: 8px;
      "
    >
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
        <source class="mobileView" v-if="webmSrc" :src="webmSrc" />
        <source v-if="mp4Src" :src="mp4Src" type="video/mp4" />

        <img v-if="posterSrc" :src="posterSrc" :alt="altText" />
        <p v-else>
          {{ altText || "Your browser does not support the video tag." }}
        </p>
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoAnimation",

  props: {
    // Path to the WebM version of the video
    webmSrc: {
      type: String,
      default: "", // Make it optional
    },
    // Path to the MP4 version of the video
    mp4Src: {
      type: String,
      default: "", // Make it optional. You should have at least one of webmSrc/mp4Src
    },
    // Path to a poster image (thumbnail shown before video loads/plays)
    posterSrc: {
      type: String,
      default: "",
    },
    // Alt text for accessibility and fallback image
    altText: {
      type: String,
      default: "Animated content",
    },
  },

  data() {
    return {
      // This will store the source that the browser actually picks, or be empty if none work
      selectedSrc: "",
    };
  },

  mounted() {
    this.setSelectedSource();
  },

  watch: {
    // Watch for changes in props and update the source
    webmSrc() {
      this.setSelectedSource();
    },
    mp4Src() {
      this.setSelectedSource();
    },
  },

  methods: {
    setSelectedSource() {
      // Basic logic to pick a source. The <source> tags handle this natively,
      // but if you only provide one prop, we ensure `src` is set correctly.
      if (this.webmSrc && this.$refs.videoPlayer.canPlayType("video/webm")) {
        this.selectedSrc = this.webmSrc;
      } else if (
        this.mp4Src &&
        this.$refs.videoPlayer.canPlayType("video/mp4")
      ) {
        this.selectedSrc = this.mp4Src;
      } else {
        this.selectedSrc = ""; // No supported source
      }
    },
    handleVideoError(event) {
      console.error(
        "Video loading error:",
        event.target.error.message,
        event.target.src,
      );
      // You could emit an event, display a message, or swap to the poster image if not already shown
      this.$emit("video-error", {
        src: event.target.src,
        error: event.target.error,
      });
    },
  },
};
</script>

<style scoped>
.imageSize {
  display: flex;
  max-height: 35rem;
  min-height: 20rem;
  margin-top: 1rem;
  border-radius: 30px;
  display: flex;
}
/* Scoped styles ensure these styles only apply to this component */
.video-animation-wrapper {
  /* Add any wrapper styling here, e.g., to control max-width */
  width: 100%; /* Or set a specific max-width */
  max-width: 30rem; /* Example max-width */
  padding-top: 2rem;
  margin: 0 auto; /* Center if max-width is set */

  border-radius: 8px;
}

video {
  width: 100%; /* Make the video responsive to its container */
  height: 100%; /* Maintain aspect ratio */
  display: block; /* Remove extra space below the video */
  object-fit: contain; /* Ensures video covers the area, cropping if necessary */
  border-radius: 8px;
}
</style>
