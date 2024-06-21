<template>
  <div class="battleResult" @click="clickResult()">
    <TitleName class="result" :inside="'Battle Result'" />
    <div class="resultFlame">
      <div class="expGoldLine">
        <span class="expItem">
          <span class="itemKinds">GET EXP</span>
          <span class="itemValue">{{ getExp }}</span>
        </span>
        <span class="goldItem">
          <span class="itemKinds">GET GOLD</span>
          <span class="itemValue">{{ getGold }}</span>
        </span>
      </div>
      <div class="character" v-for="(character) in partyStore.characters">
        <div class="characterFlame">
          <img class="face" :src="character.faceGraphicUrl">
          <div class="rightFlame">
            <div class="level">LV {{ character.LV }}</div>
            <span class="progress-bar">
              <ProgressBarExp :exp="character.exp" :next="character.nextLvExp" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue'

import config from '@/config/commonConfig.ts';
import ProgressBarExp from '@/components/progress/ProgressBarExp.vue';
import TitleName from '@/components/flame/Flame2.vue';

//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()
//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//音楽管理
import { useAudioStore } from '@/stores/Audio';
const audioStore = useAudioStore()

const props = defineProps({
  getExp: { type: Number },
  getGold: { type: Number },
});
//mount時に音楽再生
onMounted(() => {
  audioStore.playBgm(config.mscVictory) // ここで音楽を再生
})

function clickResult() {
  showUIStore.map = true
  statusStore.processDungeon = config.processSearch
  audioStore.playBgm(statusStore.musicDungeon) // ここで音楽を再生
}

</script>
  
<style scoped>
.battleResult {
  position: relative;
}

.result {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 2vh;
  /* background-image: url('/img/flame/flame030302.png');
  background-size: 100% 100%;
  color: #E2D8A6;
  font-family: "Trade Winds";
  font-size: 8vh;
  height: 14vh;
  width: 35vw;
  padding: 1.5vh;
  text-align: center; */
  z-index: 10;
}

.resultFlame {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 6.5vh;
  background: rgba(59, 65, 60, 0.7);
  /* background-image: url('/img/flame/flame030105.png'); */
  background-image: url('/img/flame/flame0322.png');
  background-size: 100% 100%;
  color: #F2EDD5;
  /* font-family: "Mystery Quest"; */
  font-size: 5vh;
  height: 90vh;
  width: 90vw;
}

.expGoldLine {
  font-family: "Verily Serif Mono";
  margin-top: 13vh;
}

.itemKinds {
  color: #E2D8A6;
}

.expItem {
  margin-left: 20vw;
}

.goldItem {
  margin-left: 10vw;
}

.itemValue {
  font-family: "Trade Winds";
  margin-left: 3vw;
}

.character {
  width: 30vw;
  margin: 2vh;
  margin-left: 10vw;
}

.characterFlame {
  display: flex;
  position: relative;
  font-family: "Verily Serif Mono";
  font-size: 3vh
}

.face {
  width: 6vw;
}

.rightFlame {
  width: 10vw;
  margin-left: 1vw;
}

.progress-bar {
  position: absolute;
  width: 15vw;
}
</style>