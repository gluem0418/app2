<template>
  <div class="flame">{{ inside }}</div>
</template>

<script setup lang="ts">

const props = defineProps({
  inside: { type: String },
});

</script>
<style scoped>
.flame {
  background-image: url('/img/flame/flame030302.png');
  background-size: 100% 100%;
  color: #E2D8A6;
  /* color: #E3CD3B;   */
  font-family: "Trade Winds";
  font-size: 5vh;
  height: 14vh;
  width: 38vw;
  padding-top: 3.5vh;
  text-align: center;
}
</style>