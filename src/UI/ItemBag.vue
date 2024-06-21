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
        <li v-for="items in filteredItems" :key="items.item_id" class="itemList" @click=selectItem(items) :class="{
          'selected-tab': selectedItem === items,
          'useless': (statusStore.processDungeon == config.processSearch && items.use == 1) ||
            (statusStore.processDungeon == config.processBattle && items.use == 2)
        }">
          <span class="itemName">{{ items.item.name }}</span>
          <span class="itemNumber">{{ items.number }}</span>
        </li>
      </ul>
      <SkillInfo v-if="selectedItem" class="skillInfo" :skillInfo="selectedItem.item.info" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';

import SkillInfo from '@/ui//SkillInfo.vue';
import config from '@/config/commonConfig.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//アイテム管理
import { useItemBagStore, ItemBag } from '@/stores/ItemBag.ts';
const itemBagStore = useItemBagStore()

const itemTab = {
  tabAll: config.itemTabAll,
  tab1: config.itemTab1,
  tab2: config.itemTab2,
  tab3: config.itemTab3
};

const selectedTab = ref(config.itemTabAll);
// フィルタリングされたアイテムリストを計算する
const filteredItems = computed(() => {
  selectedItem.value = null
  switch (selectedTab.value) {
    case config.itemTab1:
      return itemBagStore.itemBag.filter(item => item.use === 0);
    case config.itemTab2:
      return itemBagStore.itemBag.filter(item => item.use === 1);
    case config.itemTab3:
      return itemBagStore.itemBag.filter(item => item.use === 2);
    default:
      return itemBagStore.itemBag;
  }
});

// 選択したアイテム
const selectedItem = ref<ItemBag | null>(null);
const selectItem = (itemBag: ItemBag) => {

  if (selectedItem.value == itemBag) {
    if (statusStore.processDungeon == config.processSearch && itemBag.item.use != 1) {
      useItem(itemBag)
    } else if (statusStore.processDungeon == config.processBattle && itemBag.item.use != 2) {
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

.useless {
  color: #B2B292;
}
.itemBox {
  background: rgba(59, 65, 60, 0.7);
  background-image: url('/img/flame/flame032703.png');
  background-size: 100% 100%;
  padding: 2.5vh 0.7vw;
  margin-left:0.5vw;
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