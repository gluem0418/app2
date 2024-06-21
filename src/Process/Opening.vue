<template>
  <div v-if="!isGameStart" class="background" @click="startOpening">
    <div class="enter">ENTER THE CLICK</div>
  </div>
  <div v-else class="background">
    <div class="title">{{ config.title }}</div>
    <SelectBtn class="btnCard" id="btn2" :inside="config.newgame" @click="newgame()"></SelectBtn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import SelectBtn from '@/components/flame/GreenBtn.vue';
import config from '@/config/commonConfig.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()

//音楽管理
import { useAudioStore } from '@/stores/Audio';
const audioStore = useAudioStore()

const isGameStart = ref(false);

//ロード時
onMounted(() => {
  if (window.innerHeight > window.innerWidth) {
    window.onload = () => {
      alert(config.msgInGame1)
    }
  }
  //music start
  window.onload = () => {
    alert(config.msgInGame2)
  }
});

//イベント送信
function startOpening() {
  isGameStart.value = true;
  audioStore.playBgm(config.mscTitle) // ここで音楽を再生
}

//イベント送信
function newgame() {
  // enterFullscreen()
  statusStore.status = config.statusTown
  statusStore.processTown = config.statusTown
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
  font-family: "Fredericka The Great";
  color: #BFAD8A;
  font-size: 12vw;
  padding-top: 4%;
}

.enter {
  position: absolute;
  color: #BFAD8A;
  top: 50%;
  left: 50%;
  font-size: 5vw;
  transform: translateY(-50%) translateX(-50%);
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