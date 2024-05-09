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
  background-image: url('/img/flame/flame042204.png');
  background-size: 100% 100%;
  text-align:center;
  padding: 3.8vh 2vw;
  height: 12vh;
  width: 25vw;
  font-size: 3vh;
}
</style>