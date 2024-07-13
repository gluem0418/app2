<template>
  <div class="town">
    <div v-if="statusStore.processTown == config.statusTown">
      <div v-if="!showUIStore.party">
        <img class="guild" :src="iconGuild" alt="GUILD" @click=clickShop(config.processGuild)
          @mouseover="overFacility(config.processGuild)" @mouseout="outFacility()">
        <img class="inn" :src="iconInn" alt="INN" @click=clickShop(config.processInn)
          @mouseover="overFacility(config.processInn)" @mouseout="outFacility()">
        <img class="dungeon1" :src="iconDungeon1" alt="Dungeon1" @click=clickDungeon(config.nameDungeon1)
          @mouseover="overFacility(config.nameDungeon1)" @mouseout="outFacility()">
        <img class="dungeon2" :src="iconDungeon2" alt="Dungeon2" @click=clickDungeon(config.nameDungeon2)
          @mouseover="overFacility(config.nameDungeon2)" @mouseout="outFacility()">
        <img class="dungeon3" :src="iconDungeon3" alt="Dungeon3" @click=clickDungeon(config.nameDungeon3)
          @mouseover="overFacility(config.nameDungeon3)" @mouseout="outFacility()">
        <img class="dungeon4" :src="iconDungeon4" alt="Dungeon4" @click=clickDungeon(config.nameDungeon4)
          @mouseover="overFacility(config.nameDungeon4)" @mouseout="outFacility()">
        <img class="dungeon5" :src="iconDungeon5" alt="Dungeon5" @click=clickDungeon(config.nameDungeon5)
          @mouseover="overFacility(config.nameDungeon5)" @mouseout="outFacility()">
        <img class="dungeon6" :src="iconDungeon6" alt="Dungeon6" @click=clickDungeon(config.nameDungeon6)
          @mouseover="overFacility(config.nameDungeon6)" @mouseout="outFacility()">
        <img class="dungeon7" :src="iconDungeon7" alt="Dungeon7" @click=clickDungeon(config.nameDungeon7)
          @mouseover="overFacility(config.nameDungeon7)" @mouseout="outFacility()">
        <SelectName v-if="selectName" class="selectName" :inside="selectName"></SelectName>
      </div>
      <PartyUI />
      <Confirmation v-show="showUIStore.message" :message="confirmationMessage"
          @confirmationResponse="confirmationResponse" />
    </div>
    <Guild v-else-if="statusStore.processTown == config.processGuild" class="into" />
    <Inn v-else-if="statusStore.processTown == config.processInn" class="into" />
    <ProcessBack v-if="statusStore.processTown != config.statusTown" class="ProcessBack" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import Guild from '@/process/Guild.vue';
import Inn from '@/process/Inn.vue';
import PartyUI from '@/ui/Party.vue';
import config from '@/config/commonConfig.ts';

import ProcessBack from '@/components/icon/ProcessBack.vue';
import SelectName from '@/components/flame/Flame1.vue';
import Confirmation from '@/components/information/Confirmation.vue';

import useFullscreen from '@/process/UseFullscreen';
const { enterFullscreen } = useFullscreen();

//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()
//音楽管理
import { useAudioStore } from '@/stores/Audio';
const audioStore = useAudioStore()
//施設のアイコン
import iconGuild from "/icon/town/guild.jpg"
import iconInn from "/icon/town/inn.jpg"
//ダンジョンのアイコン
import iconDungeon1 from "/icon/town/forest.jpg"
import iconDungeon2 from "/icon/town/swamp.jpg"
import iconDungeon3 from "/icon/town/desert.jpg"
import iconDungeon4 from "/icon/town/cave.jpg"
import iconDungeon5 from "/icon/town/palace.jpg"
import iconDungeon6 from "/icon/town/volcano.jpg"
import iconDungeon7 from "/icon/town/tower.jpg"

//ロード時
onMounted(() => {
  audioStore.playBgm(config.mscTown) // ここで音楽を再生
});

//ショップ表示
function clickShop(name: string) {
  statusStore.processTown = name
}

//ダンジョン入場確認
let confirmationMessage: string
let selectDungeon: string
function clickDungeon(name: string) {
  confirmationMessage = config.msgEnterDungeon + name + '?'
  selectDungeon = name
  showUIStore.message = true
}
// YESの場合、該当キャラクターをパーティに追加
async function confirmationResponse(response: string) {
  showUIStore.message = false;
  if (response == config.textYes) {
    await enterFullscreen()
    statusStore.status = config.statusDungeon
    statusStore.processDungeon = config.processSearch
    statusStore.whichDungeon = selectDungeon
  }
};

//施設にカーソル
const selectName = ref<string>('')
function overFacility(name: string) {
  selectName.value = name
}

//カーソルはずっし
function outFacility() {
  selectName.value = ''
}

</script>
<style scoped>
.town {
  background-image: url('/img/back/town/town.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  /* height: 180vh; */
  height: 100vh;
  width: 100%;
  font-family: serif;
  font-size: 2vw;
  color: #E2D8A6;
}

.selectName {
  position: absolute;
  top: 2vh;
  left: 35vw;
}


.dungeon1 {
  position: absolute;
  width: 10vw;
  top: 52vh;
  left: 2vw;
  border-radius: 1.3vw;
}

.dungeon2 {
  position: absolute;
  width: 10vw;
  top: 29vh;
  left: 2vw;
  border-radius: 1.5vw;
}

.dungeon3 {
  position: absolute;
  width: 10vw;
  top: 5vh;
  left: 2vw;
  border-radius: 1.0vw;
}

.dungeon4 {
  position: absolute;
  width: 10vw;
  top:10vh;
  left: 15vw;
  border-radius: 1.0vw;
}

.dungeon5 {
  position: absolute;
  width: 10vw;
  top: 14vh;
  left: 28vw;
  border-radius: 0.9vw;
}

.dungeon6 {
  position: absolute;
  width: 10vw;
  top: 16vh;
  left: 41vw;
  border-radius: 0.5vw;
}

.dungeon7 {
  position: absolute;
  width: 10vw;
  top: 14vh;
  left: 54vw;
  border-radius: 0.3vw;
}

.guild {
  position: absolute;
  width: 10vw;
  bottom: 5vh;
  left: 28vw;
  border-radius: 2.5vw;
  border: 0.3vw ridge #E2D8A6;
}

.inn {
  position: absolute;
  width: 10vw;
  top: 50vh;
  right: 20vw;
  border-radius: 2.5vw;
  border: 0.3vw ridge #E2D8A6;
}

.into {
  position: fixed;
  /* margin: 1.5vh 1.5vw; */
  /* border: 0.3vw ridge #E2D8A6; */
  animation: scaleUp 0.5s ease-in-out;
}

.ProcessBack {
  position: fixed;
  left: 2vw;
  bottom: 3vh;
}

.IconFullscreen {
  position: fixed;
  right: 2vw;
  top: 2vh;
}
</style>