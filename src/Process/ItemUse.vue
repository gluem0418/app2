<template>
  <div class="ItemBagUI">

    <!-- <CurrentUI class="CurrentUI" v-if="statusStore.processDungeon == Config.processSearch" /> -->
    <CurrentUI class="CurrentUI" v-if="statusStore.processDungeon == Config.processSearch"
      :targetCharacter="targetCharacter" :showCharacterEffect="showCharacterEffect" :toCharacterEffect="toCharacterEffect"
      :toCharacterEffectType="toCharacterEffectType" :showCharacterAnime="showCharacterAnime"
      :toCharacterAnime="toCharacterAnime" :selectionMode="selectionMode" @selectCharacter='selectCharacter' />

    <div class="itemBag">
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

            <span
              v-if="selectedItem === items && ((statusStore.processDungeon == Config.processSearch && items.item.use !== 1))"
              class='buttonPosition'>
              <span @click="clickItem(items)" class='button-equip'>{{ Config.itemBtn1 }}</span>
            </span>

            <span class="itemNumber">{{ items.number }}</span>
          </li>
        </ul>
      </div>
      <SkillInfo v-if="selectedItem" class="skillInfo" :skillInfo="selectedItem.item.info" />
    </div>

    <!-- GIF表示用のモーダルウィンドウ -->
    <transition name="fade">
      <div v-if="(showItemAnime == Config.targetAll) && skillAnime" class="gif-modal" @click="showItemAnime = null">
        <img :src="skillAnime" alt="animation" @load="loadSkillAnime()" />
      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';

import SkillInfo from '@/UI//SkillInfo.vue';
import CurrentUI from '@/UI/Current.vue';

import Character from '@/Class/Character.ts';
// import Item, { Items } from '@/Class/Item.ts';
import Config from '@/config.ts';

import { characterAssist } from '@/Process/CharacterAssist.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//アイテム管理
import { useItemBagStore, ItemBag } from '@/stores/ItemBag.ts';
const itemBagStore = useItemBagStore()
//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()
//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()

const props = defineProps({
  processBattle: { type: Boolean }
});

///////////////////////////////////////////////////////////
// キャラクター向け(CurrentUI)表示用
///////////////////////////////////////////////////////////
// const currentCharacter = ref<Character>()   //行動キャラ
const targetCharacter = ref<Character[]>([])   //攻撃対象キャラ
const showCharacterAnime = ref<boolean[]>(new Array(partyStore.characters.length).fill(false));;
const toCharacterAnime = ref<string | null>(null)
const showCharacterEffect = ref<boolean[]>(new Array(partyStore.characters.length).fill(false));
const toCharacterEffect = ref<(string | number | null)[]>(new Array(partyStore.characters.length).fill(null));
const toCharacterEffectType = ref<string>()
const selectionMode = ref('');

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
  if (props.processBattle && selectedItem.value == itemBag) {
    useItem(itemBag)
  }
  selectedItem.value = itemBag;
};

// 戦闘アイテム決定
const emit = defineEmits(["useItem"])
const useItem = (items: ItemBag) => {
  emit('useItem', items.item)
};

// 通常時アイテム使用
const skillAnime = ref<string>('')
const animeTime = ref<number>(0)
const showItemAnime = ref<string | null>('')

//アイテム使用決定
async function clickItem(items: ItemBag) {

  //Special Item
  if (items.item.use == 2) {
    switch (items.item_id) {
      //帰還用アイテム
      case Config.returnItemId:
        showItemAnime.value = Config.targetAll;
        skillAnime.value = items.item.skill_effect[0].skill_anime
        animeTime.value = items.item.skill_effect[0].anime_time
        break
      default:
    }
    return
  }

  //skillEffectあり
  if (items.item.skill_effect.length !== 0) {
    //味方対象アイテム
    if (items.item.skill_effect[0].target == 1) {
      // ターゲットの選択を待つ(味方対象)
      selectionMode.value = items.item.skill_effect[0].target_type
      if (selectionMode.value == Config.targetAllFriends) {
        targetCharacter.value = partyStore.characters.filter(character => character.nowHP > 0)
      } else {
        targetCharacter.value = []
      }
      // battleProcess.value = 'selectTarget'
      await waitForTargetSelection();
    }
    //ターゲット選択後
    for (const skillEffect of items.item.skill_effect) {
      // animeTime = skillEffect.anime_time
      // effectTime = 0
      // actionTimes = 0
      //1回目と対象タイプが異なる

      if (skillEffect.target == 1) {
        characterAssist(skillEffect, items.item.name)

      }
      //アニメーション表示
      // skillAttackAnime(skillEffect)
    }

    // effectTime = Config.effectTime + actionTimes * Config.delayTime
    // await timer(animeTime + effectTime);

  }
}


// 非同期関数でターゲットの選択を待つ
let resolveSelectPromise: Function | null = null;
async function waitForTargetSelection() {
  return new Promise<void>((resolve) => {
    resolveSelectPromise = resolve;
  });
}
// キャラクター指定アイテムにて対象選択後
const selectCharacter = (selectType: string, character: Character) => {
  if (selectType == 'over') {
    targetCharacter.value = []
    targetCharacter.value.push(character)
  } else if (selectType == 'click') {
    if (resolveSelectPromise) {
      resolveSelectPromise();
      resolveSelectPromise = null;
    }
  }
}

// スキルロード後
const loadSkillAnime = () => {
  setTimeout(() => {
    showItemAnime.value = null
    useNormalItem()
  }, animeTime.value);
}

// アイテム使用
const useNormalItem = () => {
  if (!selectedItem.value) return
  if (selectedItem.value.item_id == Config.returnItemId) {
    statusStore.status = Config.statusTown
    showUIStore.item = false
    console.log('useNormalItem', selectedItem.value)
  }
}

</script>

<style scoped>
.ItemBagUI {
  width: 100vw;
  height: 100vh;
  font-family: serif;
  color: #F2EDD5;
  font-size: 2.8vh;
  position: relative;
}

.CurrentUI {
  position: fixed;
  top: 1vh;
  right: 6vw;
  animation: slideRight 0.5s ease-in-out;
}

.itemBag {
  position: absolute;
  left: 45vw;
  top: 15vh;
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
  border: 0.6vh ridge #E2D8A6;
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


.buttonPosition {
  position: absolute;
  right: 3vw;
  margin-top: -0.8vh;
}

.button-equip {
  background: #3CD0E3;
}


.skillInfo {
  margin-left: 12vw;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.gif-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>