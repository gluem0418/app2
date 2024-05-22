<template>
  <div class="ItemBagUI">

    <div class="selectItem">
      <ul class="tabSelect">
        <li v-for="(tabName, tabKey) in itemTab" :key="tabKey" class="tab" @click="selectedTab = tabName"
          :class="{ 'selected-tab': selectedTab === tabName }">
          {{ tabName }}
        </li>
      </ul>
      <ul class="itemBox">
        <li v-for="items in filteredItems" :key="items.item_id" class="itemList" @click=selectItem(items)
          :class="{ 'selected-tab': selectedItem === items }">
          <span class="itemName">{{ items.item.name }}</span>
          <span class="itemNumber">{{ items.number }}</span>
        </li>
      </ul>
    </div>
    <SkillInfo v-if="selectedItem" class="skillInfo" :skillInfo="selectedItem.item.info" />
  </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';

import SkillInfo from '@/UI//SkillInfo.vue';
import Config from '@/config.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//アイテム管理
import { useItemBagStore, ItemBag } from '@/stores/ItemBag.ts';
const itemBagStore = useItemBagStore()

const itemTab = {
  tabAll: Config.itemTabAll,
  tab1: Config.itemTab1,
  tab2: Config.itemTab2,
  tab3: Config.itemTab3
};

const selectedTab = ref(Config.itemTabAll);
// フィルタリングされたアイテムリストを計算する
const filteredItems = computed(() => {
  selectedItem.value = null
  switch (selectedTab.value) {
    case Config.itemTab1:
      return itemBagStore.itemBag.filter(item => item.use === 0);
    case Config.itemTab2:
      return itemBagStore.itemBag.filter(item => item.use === 1);
    case Config.itemTab3:
      return itemBagStore.itemBag.filter(item => item.use === 2);
    default:
      return itemBagStore.itemBag;
  }
});

// 選択したアイテム
const selectedItem = ref<ItemBag | null>(null);
const selectItem = (itemBag: ItemBag) => {

  if (selectedItem.value == itemBag) {
    if (statusStore.processDungeon == Config.processSearch && itemBag.item.use != 1) {
      useItem(itemBag)
    } else if (statusStore.processDungeon == Config.processBattle && itemBag.item.use != 2) {
      useItem(itemBag)
    }
  }
  selectedItem.value = itemBag;
};

// 使用アイテム決定
const emit = defineEmits(["useItem"])
const useItem = (items: ItemBag) => {
  emit('useItem', items.item)
};

</script>

<style scoped>
.ItemBagUI {
  font-family: serif;
  color: #F2EDD5;
  font-size: 2.8vh;
  position: relative;
}

.selectItem {
  display: flex;
}

.tabSelect {
  background: rgba(59, 65, 60, 0.7);
  text-align: center;
  height: 30vh;
  width: 12vw;
  border-radius: 2vh;
  /* border: 0.6vh ridge #E2D8A6; */
  border: 0.6vh ridge #84dae9;
}

.tab {
  list-style-type: none;
  color: #E2D8A6;
  align-items: center;
  padding: 1vh 0.5vw;
  font-size: 3.4vh;
  font-family: "Verily Serif Mono";
}

.selected-tab {
  background: #624CAB80;
  border-radius: 1vh;
  border: 0.2vh solid #E2D8A6;
}

.itemBox {
  background: rgba(59, 65, 60, 0.7);
  background-image: url('/img/flame/flame032703.png');
  background-size: 100% 100%;
  padding: 2.5vh 0.7vw;
  height: 60vh;
  width: 25vw;
  list-style-type: none;
}

.itemList {
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: start; */
  list-style-type: none;
  padding: 0vh 1.5vw;
  /* vertical-align: top; */
  height: 5vh;
}

.itemNumber {
  float: right;
}
.skillInfo {
  margin-left: 12vw;
}

</style>