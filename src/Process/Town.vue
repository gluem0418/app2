<template>
  <div class="town">
    <div v-if="statusStore.process == Config.statusTown">
      <div v-if="!showUIStore.party">
        <img class="dungeon" :src="iconDungeon" alt="DUNGEON" @click=clickShop(Config.statusDungeon)>
        <img class="guild" :src="iconGuild" alt="GUILD" @click=clickShop(Config.processGuild)>
        <img class="pub" :src="iconPub" alt="PUB" @click=clickShop(Config.processPub)>
      </div>
      <PartyUI />
    </div>
    <Guild v-else-if="statusStore.process == Config.processGuild" class="into" />
    <Pub v-else-if="statusStore.process == Config.processPub" class="into" />
    <ProcessBack v-if="statusStore.process != Config.statusTown" class="ProcessBack" />
  </div>
</template>

<script setup lang="ts">

import Guild from '@/Process/Guild.vue';
import Pub from '@/Process/Pub.vue';
import PartyUI from '@/UI/Party.vue';
import Config from '@/config.ts';
import ProcessBack from '@/components/icon/ProcessBack.vue';

//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()
//施設のアイコン
import iconGuild from "/icon/guild.jpg"
import iconPub from "/icon/pub.jpg"
import iconDungeon from "/icon/dungeon1.jpg"

//ショップ表示
function clickShop(name: string) {
  if (name == Config.statusDungeon) {
    statusStore.status = Config.statusDungeon
    statusStore.process = Config.processSearch
    return;
  }
  statusStore.process = name
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
  font-family: 'Century';
  font-size: 2vw;
  color: #E2D8A6;
}

.dungeon {
  position: absolute;
  width: 10vw;
  top: 3vh;
  left: 35vw;
  border-radius: 2.5vw;
  border: 0.3vw ridge #E2D8A6;
}

.guild {
  position: absolute;
  width: 10vw;
  bottom: 6vh;
  left: 19vw;
  border-radius: 2.5vw;
  border: 0.3vw ridge #E2D8A6;
}

.pub {
  position: absolute;
  width: 10vw;
  top: 28vh;
  right: 30vw;
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

</style>