<template>
  <div class="UI">
    <div v-if="statusStore.status == Config.statusOpening">
      <Opening />
    </div>
    <div v-else-if="statusStore.status == Config.statusTown">
      <Town />
    </div>
    <div v-else-if="statusStore.status == Config.statusDungeon">
      <div v-if="statusStore.process == Config.processSearch">
        <CurrentUI class="CurrentUI" v-show="showUIStore.current"/>
        <PartyUI />
      </div>
      <div v-else-if="statusStore.process == Config.processBattle">
        <Battle/>
      </div>
      <!-- <Dungeon class="Dungeon"/> -->
      <Dungeon />
      <MapUI class="MapUI" v-show="showUIStore.map"/>
    </div>
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
import MapUI from '@/UI/Map.vue';

import Monster from '@/Class/Monster.ts';
import monster_json from '@/assets/json/Monster.json';
import Config from '@/config.ts';

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
.CurrentUI {
  position: fixed;
  /* margin-left: 25%; */
  top: 1vh;
  right: 2vw;
  animation: slideRight 0.5s ease-in-out;
}

.MapUI {
  position: fixed;
  top:2vh;
  left:1vw;
  height: 30vh;
  border-radius: 1vw;
  /* border: 0.3vw ridge #E2D8A6; */
}

.Dungeon {
  /* position: absolute;
  top:0;
  left:0; */
  pointer-events: none;
}

</style>