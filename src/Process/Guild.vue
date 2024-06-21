<template>
  <!-- <div class="Guild"> -->
    <div class="information" >
      <div class="flame" v-if="statusStore.guildMenu == ''">
        <div class="firstItem">Quest</div>
        <div class="secondItem">Accept a Quest</div>
        <div class="secondItem">Receive Rewards</div>
        <div class="firstItem" >About Member</div>
        <div class="secondItem" @click="clickItem(Config.menuAddMember)"> {{ Config.menuAddMember }}</div>
        <div class="secondItem" @click="clickItem(Config.menuRemoveMember)"> {{ Config.menuRemoveMember }}</div>
      </div>
      <AddMember v-if="statusStore.guildMenu == Config.menuAddMember" class="into"></AddMember>
      <RemoveMember v-if="statusStore.guildMenu == Config.menuRemoveMember" ></RemoveMember>
    </div>
  <!-- </div> -->
</template>

<script setup lang="ts">

import AddMember from '@/process/AddMember.vue';
import RemoveMember from '@/ui/Party.vue';

import Config from '@/config/commonConfig.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//

// メニューで選択した画面を開く
function clickItem(menu: string) {
  statusStore.guildMenu = menu
}

</script>
<style scoped>
.information {
  background-image: url('/img/back/town/guild.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  /* font-family: "Verily Serif Mono"; */
  font-family: serif;
  font-size: 2vw;
  color: #E2D8A6;
}

.flame {
  position: absolute;
  margin: 2vh 2vw;
  padding: 5vh 3vw;
  background-image: url('/img/flame/flame030401.png');
  background-size: 100% 100%;
  height: 60vh;
  width: 60vh;
}

.firstItem {
  text-align: left;
}

.secondItem {
  margin-left: 2vw;
  color: #F2EDD5;
}
.into {
  position: fixed;
  /* margin: 1.5vh 1.5vw; */
  /* border: 0.3vw ridge #E2D8A6; */
  animation: scaleUp 0.5s ease-in-out;
}
</style>