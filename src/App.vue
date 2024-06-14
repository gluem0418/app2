<template>
  <div class="UI">
    <div v-if="statusStore.status == Config.statusOpening">
      <Opening />
    </div>
    <div v-else-if="statusStore.status == Config.statusTown">
      <Town />
    </div>
    <div v-else-if="statusStore.status == Config.statusDungeon">
      <!-- <Dungeon /> -->
      <div v-if="statusStore.processDungeon == Config.processSearch">
        <CurrentUI class="CurrentUI" v-show="showUIStore.current" />
        <!-- <PartyUI /> -->
        <PartyUI class="PartyUI" />
      </div>
      <div v-else-if="statusStore.processDungeon == Config.processBattle">
        <Battle />
      </div>
      <Dungeon />
      <!-- <MapUI class="MapUI" v-show="showUIStore.map" /> -->
    </div>
    <IconFullscreen class="IconFullscreen" />
  </div>
</template>

<script setup lang="ts">

import { ref, provide } from 'vue';

import Opening from '@/Process/Opening.vue';
import Town from '@/Process/Town.vue';
import Dungeon from '@/Process/Dungeon.vue';
import Battle from '@/Process/Battle.vue';
import CurrentUI from '@/UI/Current.vue';
import PartyUI from '@/UI/Party.vue';
// import MapUI from '@/UI/Map.vue';

import Monster from '@/Class/Monster.ts';
import monster_json from '@/assets/json/Monster.json';
import Config from '@/config.ts';
import IconFullscreen from '@/components/icon/IconFullscreen.vue';

import { passiveSkills } from '@/Class/PassiveSkill.ts';
import { activeSkills } from '@/Class/ActiveSkill.ts';

///////////////////////////////
//初期設定
///////////////////////////////
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()

console.log('activeSkills', activeSkills)
console.log('passiveSkills', passiveSkills)

//Partyを作成
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()
partyStore.setParty();
console.log('party', partyStore.characters)

//equipmentBagを作成
import { useEquipBagStore } from '@/stores/EquipBag.ts';
const equipBagStore = useEquipBagStore()
equipBagStore.setEquipBag();
console.log('equipmentType', equipBagStore.equipmentType)
console.log('equipmentItem', equipBagStore.equipmentItem)

// monsterListを作成
const monsterList = ref(monster_json.map((monsterData: any) => new Monster(monsterData)));
provide('monsterList', monsterList.value);
console.log('monsterList', monsterList.value)

//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()

</script>

<style scoped>
.PartyUI {
  position: fixed;
  top: 0vh;
  right: 0vw;
  /* z-index:10; */
}

.CurrentUI {
  position: fixed;
  top: 1vh;
  right: 6vw;
  animation: slideRight 0.5s ease-in-out;
  /* z-index:10; */
}

.MapUI {
  position: fixed;
  top: 1vh;
  left: 1vw;
  /* border: 0.3vw ridge #E2D8A6; */
}

.Dungeon {
  /* position: absolute;
  top:0;
  left:0; */
  pointer-events: none;
}

.IconFullscreen {
  /* position: fixed; */
  position: absolute;
  right: 1vw;
  top: 1vh;
}
</style>