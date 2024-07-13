<template>
  <div class="progress-bar-hp">
    <progress class="progress-hp" :value="nowHP" :max="maxHP"></progress>
    <span class="nowHP">{{ nowHP }}/{{ maxHP }}</span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  nowHP: { type: Number },
  maxHP: { type: Number },
});

</script>

<style scoped>

.progress-bar-hp {
  position:relative;
  width: 100%;
}
.statuskinds {
  font-family: "Verily Serif Mono";
  color: #E2D8A6;
}

.progress-hp {
  position: absolute;
}

.nowHP {
  position: absolute;
  width:100%;
  text-align:right;
  margin-top: -0.1vh;
  padding-right: 1vw;
  font-family: "Trade Winds";
  font-size: 2.5vh;
}
</style>