<template>
  <div class="GetTreasure">
    <div class="flame">
      <TitleName class="result" :inside="'Discover treasure!'" />
      <ul class="listBox">
        <div class="getGold">{{ getGold }}</div>
        <li v-for="item in getTreasures" class="itemList" @click="selectedItem = item"
          :class="{ 'selected-tab': selectedItem === item }">
          <span class="itemName">{{ item.name }}</span>
        </li>
      </ul>
      <SkillInfo v-if="selectedItem" class="skillInfo" :skillInfo="selectedItem.info" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, PropType } from 'vue';

import SkillInfo from '@/UI//SkillInfo.vue';
import Item from '@/Class/Item.ts';
import Equipment from '@/Class/Equipment.ts';
import TitleName from '@/components/flame/Flame2.vue';

import Config from '@/config.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//アイテム管理
import { useItemBagStore, ItemBag } from '@/stores/ItemBag.ts';
const itemBagStore = useItemBagStore()

const props = defineProps({
  getGold: { type: Number },
  getTreasures: { type: Array as PropType<(Item | Equipment)[]>, default: () => [] },
});

// 選択したアイテム
const selectedItem = ref<Item | Equipment | null>(null);

</script>

<style scoped>
.GetTreasure {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-family: serif;
  color: #F2EDD5;
  font-size: 2.8vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.flame {
  /* position:absolute; */
  margin-top:15vh;
  margin-left:4vw;
}


.selected-tab {
  background: #624CAB80;
  border-radius: 1vh;
  border: 0.2vh solid #E2D8A6;
}

.listBox {
  background: rgba(59, 65, 60, 0.7);
  background-image: url('/img/flame/flame032703.png');
  background-size: 100% 100%;
  padding: 2.5vh 0.7vw;
  margin-top: 1vh;
  margin-left: 10vw;
  height: 60vh;
  width: 25vw;
  list-style-type: none;
}

.itemList {
  list-style-type: none;
  padding: 0vh 1.5vw;
  height: 5vh;
}

.itemNumber {
  float: right;
}

.skillInfo {
  margin-left: 0.5vw;
}
</style>