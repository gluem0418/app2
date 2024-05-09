<template>
  <div class="modal" @click="emit('hideError')">
    <div class="information">
      <div class="message">{{ message }}</div>
    </div>
  </div>
</template>
  
<script setup lang="ts">

const props = defineProps({
  message: { type: String, default: null },
});

const emit = defineEmits(['hideError']);

</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}
.information {
  position:absolute;
  top: 50%; /*親要素を起点に上から50%*/
  left: 50%;  /*親要素を起点に左から50%*/
  transform: translateY(-50%) translateX(-50%); /*要素の大きさの半分ずつを戻す*/
  background: #624CAB80;
  background-image: url('/img/flame/flame0322.png');
  background-size: 100% 100%;
  /* font-family: "Trade Winds"; */
  font-family: serif;
  /* color: #F34213; */
  color: #E3CD3B;
  font-size: 4vh;
  height: 35vh;
  width: 35vw;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: show 0.5s ease-in-out;
}

.message {
  text-align:center;
  padding: 4vh 3vw;
}
</style>