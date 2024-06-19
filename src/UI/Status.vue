<template>
  <div v-if="character" class="StatusUI">
    <div class="nameline">
      <span class="name">{{ character.name }}</span>
      <span class="level">
        <span class="statuskinds">LV&nbsp;</span>
        <span>{{ character.LV }}</span>
      </span>
    </div>
    <div class="hpline">
      <span class="statuskinds">HP</span>
      <span class="progress-bar">
        <ProgressBarHp  :nowHP="character.nowHP" :maxHP="character.totalStatus.HP" />
      </span>
    </div>
    <div class="mpline">
      <span class="statuskinds">MP</span>
      <span class="progress-bar">
        <ProgressBarMp  :nowMP="character.nowMP" :maxMP="character.totalStatus.MP" />
      </span>
      <!-- <progress class="progress-mp" :value="character.nowMP" :max="character.totalStatus.MP"></progress>
      <span class="nowmp">{{ character.nowMP }}/{{ character.totalStatus.MP
      }}</span> -->
    </div>
    <div class="atkline">
      <span class="leftItem">
        <span class="statuskinds">ATK</span>
        <span class="itemValue">{{ character.totalStatus.ATK }}</span>
      </span>
      <span class="rightItem">
        <span class="statuskinds">MGC</span>
        <span class="itemValue">{{ character.totalStatus.MGC }}</span>
      </span>
    </div>
    <div class="defline">
      <span class="leftItem">
        <span class="statuskinds">DEF</span>
        <span class="itemValue">{{ character.totalStatus.DEF }}</span>
      </span>
      <span class="rightItem">
        <span class="statuskinds">MDF</span>
        <span class="itemValue">{{ character.totalStatus.MDF }}</span>
      </span>
    </div>
    <div class="dexline">
      <span class="leftItem">
        <span class="statuskinds">DEX</span>
        <span class="itemValue">{{ character.totalStatus.DEX }}</span>
      </span>
      <span class="rightItem">
        <span class="statuskinds">SPD</span>
        <span class="itemValue">{{ character.totalStatus.SPD }}</span>
      </span>
    </div>
    <div class="wepline">
      <!-- <span class="iconFlame"><IconWep class="Icon" /></span> -->
      <span class="statuskinds">WEP</span>
      <span class="equipName">{{ character.equipment.WEP?.name }}</span>
    </div>
    <div class="armline">
      <!-- <span class="iconFlame"><IconArm class="Icon" /></span> -->
      <span class="statuskinds">ARM</span>
      <span class="equipName">{{ character.equipment.ARM?.name }}</span>
    </div>
    <div class="accline">
      <!-- <span class="iconFlame"><IconAcc class="Icon" /></span> -->
      <span class="statuskinds">ACC</span>
      <span class="equipName">{{ character.equipment.ACC?.name }}</span>
    </div>
  </div>
</template>
  
<script setup lang="ts">

import Character from '@/class/Character.ts';
import ProgressBarHp from '@/components/progress/ProgressBarHp.vue';
import ProgressBarMp from '@/components/progress/ProgressBarMp.vue';
// import IconWep from '@/components/IconWep.vue';
// import IconArm from '@/components/IconArm.vue';
// import IconAcc from '@/components/IconAcc.vue';

const props = defineProps({
  character: { type: Character },
});

</script>

<style scoped>
.StatusUI {
  background: rgba(59, 65, 60, 0.50);
  background-image: url('/img/flame/flame130203.png');
  background-size: 100% 100%;
  color: #F2EDD5;
  /* font-family: "Book Antiqua"; */
  /* font-family: "serif"; */
  font-family: serif;
  /* font-family: "Verily Serif Mono"; */
  /* font-family: "Vidaloka"; */
  font-size: 2.8vh;
  /* margin: 2%; */
  padding: 4% 8%;
  position: relative;
  height: 45vh;
  width:21vw;
}

.nameline {
  text-align: center;
}

.name {
   font-family: "Trade Winds";
   font-size: 4vh;
}

.level {
  margin-left: 1vw;
}

.statuskinds {
  font-family: "Verily Serif Mono";
  color: #E2D8A6;
}

.margin0 {
  margin: 0;
}

.nowhp {
  position: absolute;
  top: 8.1vh;
  left: 11vw;
  font-family: "Trade Winds";
  /* font-size: 1.2vw; */
  font-size: 2.5vh;
}

.nowmp {
  position: absolute;
  top: 12.5vh;
  left: 11vw;
  font-family: "Trade Winds";
  font-size: 2.5vh;
  /* font-size: 1.2vw; */
}

.progress-bar {
  position:absolute;
  margin-top: 0.4vh;
  margin-left: 1.5vw;
  width: 14vw;
}

.progress-hp {
  position:absolute;
  margin-top: 0.5vh;
  margin-left: 1.5vw;
  width: 14vw;
}

.progress-mp {
  position:absolute;
  margin-top: 0.5vh;
  margin-left: 1.5vw;
  width: 14vw;
}

.hpline {
  width: 100%;
}
.mpline {
  width: 100%;
}

.atkline {
  position: absolute;
  width: 100%;
  top: 17vh;
}

.defline {
  position: absolute;
  width: 100%;
  top: 21vh;
}

.dexline {
  position: absolute;
  width: 100%;
  top: 25vh;
}

.wepline {
  position: absolute;
  width: 100%;
  top: 30vh;
}

.armline {
  position: absolute;
  width: 100%;
  top: 34vh;
}

.accline {
  position: absolute;
  width: 100%;
  top: 38vh;
}

.leftItem {
  position: absolute;
  width: 50%;
}

.itemValue {
  position: absolute;
  left: 40%;
}

.rightItem {
  position: absolute;
  width: 50%;
  left: 45%;
}
.iconFlame {
  position: absolute;
  width:12%;
  text-align:center;
}
.Icon {
  height: 4vh;
}

.equipName {
  margin-left: 2vw;
  color: #E3CD3B;
}
</style>