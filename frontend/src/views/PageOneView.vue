<template>
  <div class="app-container">
      <video ref="bgVideo1" muted loop autoplay width="100%" height="auto">
        <source :src="Page1Video" type="video/mp4">
      </video>
  </div>

</template>

<script>
import { onMounted, ref } from 'vue';
import Page1Video from '../assets/video/Page1Video.mp4'; // Adjust the path accordingly

export default {
  setup() {
    const bgVideo = ref(null);

    onMounted(() => {
      if (bgVideo.value) {
        bgVideo.value.play().catch(error => {
          console.error('Autoplay failed:', error);
        });
      }
    });

    return {
      bgVideo,
      Page1Video,
    };
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  background-color: rgb(0, 0, 21);
}

video {
  object-fit: cover;
  position: absolute;
  height: 100%;
}

.content-container {
  text-align: center;
  padding: 20px;
  background-color: rgb(0, 0, 21);
}

</style>