<template>
  <!-- <div class="progress-bar-exp"> -->
    <progress class="progress-exp" :value="exp" :max="next"></progress>
    <span class="next">NEXT</span>
    <span class="nextExp">{{ next! - exp! }}</span>
  <!-- </div> -->
</template>

<script setup lang="ts">

const props = defineProps({
  exp: { type: Number },
  next: { type: Number },
});

</script>

<style scoped>
.progress-bar-exp {
  position: relative;
  width: 100%;
}

.progress-exp {
  position: absolute;
}

.next {
  position: absolute;
  font-family: "Verily Serif Mono";
  margin-left: 1vw;
  margin-top: -0.3vh;
  font-size: 2.5vh;
}

.nextExp {
  position: absolute;
  margin-top: -0.1vh;
  margin-left: 5vw;
  font-family: "Trade Winds";
  font-size: 2.5vh;
}
</style>