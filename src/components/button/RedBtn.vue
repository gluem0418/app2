<template>
  <div class="btnFlame">{{ inside }}</div>
</template>

<script setup lang="ts">

const props = defineProps({
  inside: { type: String },
});

</script>
<style scoped>
.btnFlame {
  background-image: url('/img/button/redBtn1.png');
  background-size: 100% 100%;
  padding: 3vh 4vw;
  color: #F2EDD5;
  /* color: #260101; */
  font-size: 4vh;
}

.btnFlame:hover {
  background-image: url('/img/button/redBtn2.png');
}

.btnFlame:active {
  animation: hide 0.5s;
}

</style>