<template>
  <!-- <div class="txtEncount">Encounter</div> -->
  <img class="imgEncount" :src="img" alt="imgEncount">
</template>
  
<script setup lang="ts">

import img from "/img/back/lightning.gif"

</script>
<style scoped>
.encount {
  text-align:center;
}
.imgEncount {
  object-fit:cover;
  height:100vh;
  width:100%;
}
.txtEncount {
  position: absolute;
  top: 25%;
  left: 13%;
  font-family: "Mystery Quest";
  color: #F34213;
  font-size: 18vw;
  animation: slide 1.0s ease-in-out;
}
@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
  }
}

</style>