<template>
  <div class="skillInfo">
    {{ skillInfo }}
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  skillInfo: { type: String }
});
</script>

<style scoped>

.skillInfo {
  background: rgba(59, 65, 60, 0.7);
  /* background-image: url('/img/flame/flame032704.png'); */
  /* background-size: 100% 100%; */
  border-radius: 0.5vw;
  /* border: 0.8vh double #3CD0E3; */
  border: 0.8vh ridge #84dae9;
  font-family: serif;
  color: #F2EDD5;
  font-size: 2.8vh;
  padding: 0.5vh 0.5vw;
  /* position: relative; */
  height: 23vh;
  width: 25vw;
}

</style>