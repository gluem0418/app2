<template>
  <img v-show="!isFullscreen" class="Icon" :src="img" alt="Fullscreen" @click="enterFullscreen()">
</template>

<script setup lang="ts">

import { ref, watchEffect } from 'vue';
import img from "/icon/fullscreen.svg"
import useFullscreen from '@/process/UseFullscreen';

// const { isFullscreen , enterFullscreen } = useFullscreen();
const { enterFullscreen } = useFullscreen();
const isFullscreen = ref(document.fullscreenElement !== null);

watchEffect(() => {
  document.onfullscreenchange = () => {
    isFullscreen.value = document.fullscreenElement !== null;
  };
});

</script>

<style scoped>
.Icon {
  height: 8vh;
}
</style>