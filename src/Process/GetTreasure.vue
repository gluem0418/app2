<template>
  <div class="GetTreasure">
    <div class="flame1">
      <TitleName class="result" :inside="'Discover treasure!'" />
      <div class="flame2">
        <ul class="listBox">
          <div v-if="getGold">
            <span class="getGold">{{ getGold }}</span>
            <span class="txtGold">GOLD</span>
          </div>
          <li v-for="item in getTreasures" class="itemList" @click=selectItem(item)
            :class="{ 'selected-tab': selectedItem === item }">
            <span class="itemName">{{ item.name }}</span>
          </li>
        </ul>
        <SkillInfo v-if="selectedItem && itemInfo" class="SkillInfo" :skillInfo="itemInfo" />
        <EquipInfo v-else-if="selectedItem && equipStatus" class="SkillInfo" :status="equipStatus" />
      </div>
      <CloseBtn class="CloseBtn" :inside="'CLOSE'" @click="clickClose()" />

    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, PropType } from 'vue';

import Item from '@/Class/Item.ts';
import Equipment from '@/Class/Equipment.ts';

import SkillInfo from '@/UI//SkillInfo.vue';
import EquipInfo from '@/UI//EquipInfo.vue';

import TitleName from '@/components/flame/Flame2.vue';
import CloseBtn from '@/components/flame/BlueBtn.vue';

//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//アイテム管理
import { useItemBagStore, ItemBag } from '@/stores/ItemBag.ts';
const itemBagStore = useItemBagStore()
//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()

const props = defineProps({
  getGold: { type: Number },
  getTreasures: { type: Array as PropType<(Item | Equipment)[]>, default: () => [] },
});

// 選択したアイテム
const selectedItem = ref<Item | Equipment | null>(null);
const itemInfo = ref<string | null>(null);
const equipStatus = ref<{ [key: string]: number } | null>(null);

const selectItem = (item: Item | Equipment) => {
  selectedItem.value = item;
  if (item instanceof Item) {
    itemInfo.value = item.info
    equipStatus.value = null
  } else if (item instanceof Equipment) {
    equipStatus.value = item.status
    itemInfo.value = null
  }
};
// function clickClose() {
//   console.log('clickClose', selectedItem.value)
//   //画面クローズ
//   selectedItem.value = null
// }

  //画面クローズ
const emit = defineEmits(["closeTreasure"])
const clickClose = () => {
  selectedItem.value = null
  emit('closeTreasure')
};

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

.flame1 {
  margin-top: 5vh;
  margin-left: 5vw;
}
.result {
  margin-left:13vw;
}
.flame2 {
  display: flex;
  margin-top: 3vh;
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
  padding: 3vh 1vw;
  margin-left: 6.5vw;
  height: 60vh;
  width: 25vw;
  list-style-type: none;
}

.itemList {
  list-style-type: none;
  padding: 0vh 1.5vw;
  height: 5vh;
}

.getGold {
  margin-left: 1.5vw;
}

.txtGold {
  margin-left: 1vw;
}

.SkillInfo {
  margin-left: 1vw;
}

.CloseBtn {
  position: absolute;
  top: 55vh;
  left: 42vw;
}
</style>