<template>
  <div class="background">
    <div class="title">{{ Config.title }}</div>
    <SelectBtn class="btnCard" id="btn2" :inside="Config.newgame" @click="newgame()"></SelectBtn>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import useFullscreen from '@/Process/UseFullscreen';
// const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();
const { enterFullscreen } = useFullscreen();
import SelectBtn from '@/components/button/GreenBtn.vue';
import Config from '@/config.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()

//ロード時
onMounted(() => {

  if (window.innerHeight > window.innerWidth) {
    window.onload = () => {
      alert(Config.msgInGame)
    }
  }
});

//イベント送信
function newgame() {
  enterFullscreen()
  statusStore.status = Config.statusTown
  statusStore.process = Config.statusTown
}

</script>
<style scoped>
.background {
  background-image: url('/img/back/opening.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  text-align: center;
  font-family: "Mystery Quest";
}

.title {
  color: #BFAD8A;
  font-size: 10vw;
  padding-top: 4%;
}

.btnCard {
  /* background-image: url('/img/flame/btn0203.png'); */
  /* background-image: url('/img/button/selectBtn1.png');
  background-size: 100% 100%; */
  /* padding:4vh 4vw 3vh 4vw; */
  /* color: #F2EDD5; */
  /* font-size: 2vw; */
}

#btn1 {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  animation: show 1.5s;
}

#btn2 {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  animation: show 1.7s;
}
</style>