<template>
  <div v-if="character" class="CharaStatusUI">
    <div class="statuskinds">RESISTANCE</div>
    <div class="slashline">
      <span class="leftItem">
        <img class="Icon" :src="imgSlash" alt="Slash">
        <span class="elementValue">{{ character.totalStatus.Slash }}</span>
      </span>
      <span class="rightItem">
        <img class="Icon" :src="imgStab" alt="Water">
        <span class="elementValue">{{ character.totalStatus.Stab }}</span>
      </span>
    </div>
    <div class="hitline">
      <span class="leftItem">
        <img class="Icon" :src="imgHit" alt="Hit">
        <span class="elementValue">{{ character.totalStatus.Hit }}</span>
      </span>
    </div>
    <div class="fireline">
      <span class="leftItem">
        <img class="Icon" :src="imgFire" alt="Fire">
        <span class="elementValue">{{ character.totalStatus.Fire }}</span>
      </span>
      <span class="rightItem">
        <img class="Icon" :src="imgWater" alt="Water">
        <span class="elementValue">{{ character.totalStatus.Water }}</span>
      </span>
    </div>
    <div class="earthline">
      <span class="leftItem">
        <img class="Icon" :src="imgEarth" alt="Earth">
        <span class="elementValue">{{ character.totalStatus.Earth }}</span>
      </span>
      <span class="rightItem">
        <img class="Icon" :src="imgWind" alt="Wind">
        <span class="elementValue">{{ character.totalStatus.Wind }}</span>
      </span>
    </div>
    <div class="lightline">
      <span class="leftItem">
        <img class="Icon" :src="imgLight" alt="Light">
        <span class="elementValue">{{ character.totalStatus.Light }}</span>
      </span>
      <span class="rightItem">
        <img class="Icon" :src="imgDark" alt="Dark">
        <span class="elementValue">{{ character.totalStatus.Dark }}</span>
      </span>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import Character from '@/class/Character.ts';

import imgSlash from "/icon/slash.png"
import imgStab from "/icon/stab.png"
import imgHit from "/icon/hit.png"
import imgFire from "/icon/fire.png"
import imgWater from "/icon/water.png"
import imgEarth from "/icon/earth.png"
import imgWind from "/icon/wind.png"
import imgLight from "/icon/light.png"
import imgDark from "/icon/dark.png"

const props = defineProps({
  character:  { type: Character }
});

</script>
  
<style scoped>
.CharaStatusUI {
  background: rgba(59, 65, 60, 0.7);
  background-image: url('/img/flame/flame032701.png');
  background-size: 100% 100%;
  color: #F2EDD5;
  font-family: serif;
  /* font-family: "Verily Serif Mono"; */
  /* font-size: 1.4vw; */
  font-size: 2.8vh;
  padding-top: 4vh;
  padding-left: 2.5vw;
  position: relative;
  height: 70vh;
  width: 23vw;
}

.slashline {
  position: absolute;
  width: 100%;
  top: 8vh;
  left:2.5vw;
}
.hitline {
  position: absolute;
  width: 100%;
  top: 13vh;
  left:2.5vw;
}
.fireline {
  position: absolute;
  width: 100%;
  top: 18vh;
  left:2.5vw;
}
.earthline {
  position: absolute;
  width: 100%;
  top: 23vh;
  left:2.5vw;
}
.lightline {
  position: absolute;
  width: 100%;
  top: 28vh;
  left:2.5vw;
}

.leftItem {
  position: absolute;
  width: 50%;
}

.statusValue {
  position: absolute;
  left: 40%;
}
.elementValue {
  position: absolute;
  margin-top: 0.5vh;
  left: 40%;
}

.rightItem {
  position: absolute;
  left: 40%;
  width: 50%;
}

.skillItem {
  width: 95%;
  list-style-type: none;
  word-wrap: break-word;
}

.skillName {
  color: #E3CD3B
}

.costValue {
  margin-left: 1vw;
}

.Icon {
  height: 4.5vh;
}

.statuskinds {
  color: #E2D8A6;
  font-family: "Verily Serif Mono";
}
.equipName {
  margin-left: 10%;
  color: #E3CD3B;
}

.margin-left5 {
  margin-left: 5%;
}
</style>