<template>
  <div v-if="character" class="CharaStatusUI">
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
    </div>
    <div class="expline">
      <span class="statuskinds">EXP</span>
      <span class="progress-bar-exp">
        <ProgressBarExp  :exp="character.exp" :next="character.nextLvExp" />
      </span>
    </div>
    <div class="atkline">
      <span class="leftItem">
        <span class="statuskinds">ATK</span>
        <span class="statusValue">{{ character.totalStatus.ATK }}</span>
      </span>
      <span class="rightItem">
        <span class="statuskinds">MGC</span>
        <span class="statusValue">{{ character.totalStatus.MGC }}</span>
      </span>
    </div>
    <div class="defline">
      <span class="leftItem">
        <span class="statuskinds">DEF</span>
        <span class="statusValue">{{ character.totalStatus.DEF }}</span>
      </span>
      <span class="rightItem">
        <span class="statuskinds">MDF</span>
        <span class="statusValue">{{ character.totalStatus.MDF }}</span>
      </span>
    </div>
    <div class="dexline">
      <span class="leftItem">
        <span class="statuskinds">DEX</span>
        <span class="statusValue">{{ character.totalStatus.DEX }}</span>
      </span>
      <span class="rightItem">
        <span class="statuskinds">SPD</span>
        <span class="statusValue">{{ character.totalStatus.SPD }}</span>
      </span>
    </div>
    <div class="wepline">
      <span class="statuskinds">WEP</span>
      <span class="equipName">{{ character.equipment.WEP?.name }}</span>
    </div>
    <div class="armline">
      <span class="statuskinds">ARM</span>
      <span class="equipName">{{ character.equipment.ARM?.name }}</span>
    </div>
    <div class="accline">
      <span class="statuskinds">ACC</span>
      <span class="equipName">{{ character.equipment.ACC?.name }}</span>
    </div>
    <div class="passiveSkill">
      <div class="statuskinds">PASSIVE SKILL</div>
      <ul class="skillList" density="compact">
        <li v-for="skill in character.passiveSkill" :key="skill.skill_id" class="skillItem">
          <span v-if="skill.equip === true">{{ skill.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import Character from '@/class/Character.ts';
import ProgressBarHp from '@/components/progress/ProgressBarHp.vue';
import ProgressBarMp from '@/components/progress/ProgressBarMp.vue';
import ProgressBarExp from '@/components/progress/ProgressBarExp.vue';

const props = defineProps({
  character: { type: Character }
});

</script>
  
<style scoped>
.CharaStatusUI {
  background: rgba(59, 65, 60, 0.8);
  background-image: url('/img/flame/flame032701.png');
  background-size: 100% 100%;
  color: #F2EDD5;
  font-family: serif;
  font-size: 2.8vh;
  /* padding: 3vh 2vw; */
  padding-top: 4vh;
  padding-left: 2.5vw;
  position: relative;
  height: 70vh;
  width: 23vw;
}

.hpline {
  width: 100%;
}

.mpline {
  width: 100%;
}

.expline {
  /* position: absolute; */
  width: 100%;
  /* top: 12vh; */
}

.atkline {
  position: absolute;
  width: 100%;
  top: 18vh;
}

.defline {
  position: absolute;
  width: 100%;
  top: 22vh;
}

.dexline {
  position: absolute;
  width: 100%;
  top: 26vh;
}

.wepline {
  position: absolute;
  width: 100%;
  top: 31vh;
}

.armline {
  position: absolute;
  width: 100%;
  top: 35vh;
}

.accline {
  position: absolute;
  width: 100%;
  top: 39vh;
}

.passiveSkill {
  position: absolute;
  width: 100%;
  top: 44vh;
}

.nowhp {
  position: absolute;
  margin-top: 0.4vh;
  left: 50%;
  font-family: "Trade Winds";
  font-size: 2.5vh;
}

.nowmp {
  position: absolute;
  margin-top: 0.4vh;
  left: 50%;
  font-family: "Trade Winds";
  font-size: 2.5vh;
}

.next {
  position: absolute;
  left: 20%;
  font-size: 2.5vh;
}

.nextExp {
  position: absolute;
  margin-top: 0.4vh;
  left: 41%;
  font-family: "Trade Winds";
  font-size: 2.5vh;
}

.progress-bar {
  position: absolute;
  margin-top: 0.4vh;
  margin-left: 2vw;
  width: 14vw;
}

.progress-bar-exp {
  position: absolute;
  margin-top: 0.4vh;
  margin-left: 1.3vw;
  width: 14vw;
}

.progress-hp {
  position: absolute;
  margin-top: 0.5vh;
  margin-left: 1.5vw;
  width: 15vw;
}

.progress-mp {
  position: absolute;
  margin-top: 0.5vh;
  margin-left: 1.5vw;
  width: 15vw;
}

.progress-exp {
  position: absolute;
  margin-top: 0.5vh;
  margin-left: 1vw;
  width: 14.5vw;
}

.leftItem {
  position: absolute;
  width: 50%;
}

.statusValue {
  position: absolute;
  left: 40%;
}

.rightItem {
  position: absolute;
  left: 40%;
  width: 50%;
}

.skillItem {
  margin-left: 0.7vw;
  list-style-type: none;
  word-wrap: break-word;
}

.costValue {
  margin-left: 1vw;
}

.Icon {
  height: 4.5vh;
}

.statuskinds {
  font-family: "Verily Serif Mono";
  color: #E2D8A6;
}

.equipName {
  margin-left: 10%;
  color: #E3CD3B;
}

.margin-left5 {
  margin-left: 5%;
}
</style>