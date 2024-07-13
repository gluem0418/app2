<template>
  <div class="progress-bar-mp">
    <progress class="progress-mp" :value="nowMP" :max="maxMP"></progress>
    <span class="nowMP">{{ nowMP }}/{{ maxMP }}</span>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  nowMP: { type: Number },
  maxMP: { type: Number },
});

</script>

<style scoped>

.progress-bar-mp {
  position:relative;
  width: 100%;
}
.statuskinds {
  font-family: "Verily Serif Mono";
  color: #E2D8A6;
}

.progress-mp {
  position: absolute;
}

.nowMP {
  position: absolute;
  width:100%;
  text-align:right;
  margin-top: -0.1vh;
  padding-right: 1vw;
  font-family: "Trade Winds";
  font-size: 2.5vh;
}
</style>