<template>
  <div class="lineFlame">
    <div class="message">{{ inside }}</div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  inside: { type: String },
});

</script>
<style scoped>
.lineFlame {
  background-image: url('/img/flame/flame0618.jpg');
  background-size: 100% 100%;
  text-align: center;
  padding-top: 8vh;
  height: 40vh;
  width: 100vw;
}

.message {
  font-family: "Mystery Quest";
  /* color: #F2EDD5; */
  color: #E2D8A6;
  font-size: 18vh;
  white-space: nowrap;
  animation: slideInOut 1.5s linear forwards;
}

@keyframes slideInOut {
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }

  10% {
    transform: translateX(-40%);
    opacity: 1;
  }

  30% {
    transform: translateX(-20%);
    opacity: 1;
  }

  70% {
    transform: translateX(20%);
    opacity: 1;
  }

  90% {
    transform: translateX(40%);
    opacity: 1;
  }

  100% {
    transform: translateX(50%);
    opacity: 0;
  }
}
</style>