<template>
  <div class="EquipInfo">
    <div class="status" v-for="(value, key) in status" :key="key">
      <span class="status-key">{{ key }}</span>
      <span class="status-value">{{ value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  status: Object
});
</script>

<style scoped>
.EquipInfo {
  background: rgba(59, 65, 60, 0.7);
  border-radius: 0.5vw;
  border: 0.8vh ridge #84dae9;
  font-family: serif;
  color: #F2EDD5;
  font-size: 2.8vh;
  padding: 0.5vh 0.5vw;
  height: 23vh;
  width: 25vw;
}
.status-key {
  font-family: "Verily Serif Mono";
  padding-left: 1vw;
  color: #E2D8A6;
}

.status-value {
  padding-left: 0.5vw;
}

</style>