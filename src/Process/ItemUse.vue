<template>
  <div class="ItemUseUI">

    <!-- <CurrentUI class="CurrentUI" v-if="statusStore.processDungeon == Config.processSearch" /> -->
    <CurrentUI class="CurrentUI" v-if="statusStore.processDungeon == Config.processSearch"
      :targetCharacter="targetCharacter" :showCharacterEffect="showCharacterEffect" :toCharacterEffect="toCharacterEffect"
      :toCharacterEffectType="toCharacterEffectType" :showCharacterAnime="showCharacterAnime"
      :toCharacterAnime="toCharacterAnime" :selectionMode="selectionMode" @selectCharacter='selectCharacter' />

    <ItemBagUI class="itemBag" @useItem='useItem' />

    <!-- GIF表示用のモーダルウィンドウ -->
    <transition name="fade">
      <div v-if="(showItemAnime == Config.targetAll) && skillAnime" class="gif-modal" @click="showItemAnime = null">
        <img :src="skillAnime" alt="animation" @load="loadSkillAnime()" />
      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

import CurrentUI from '@/UI/Current.vue';
import ItemBagUI from '@/UI/ItemBag.vue';

import Character from '@/Class/Character.ts';
import Item from '@/Class/Item.ts';
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

// 通常時アイテム使用
const skillAnime = ref<string>('')
const animeTime = ref<number>(0)
const showItemAnime = ref<string | null>('')

//アイテム使用決定
const selectedItem = ref<Item | null>(null);
async function useItem(item: Item) {
  console.log('useItem',item)
  selectedItem.value = item

  //Special Item
  if (item.use == 2) {
    switch (item.item_id) {
      //帰還用アイテム
      case Config.returnItemId:
        showItemAnime.value = Config.targetAll;
        skillAnime.value = item.skill_effect[0].skill_anime
        animeTime.value = item.skill_effect[0].anime_time
        break
      default:
    }
    return
  }

  //skillEffectあり
  if (item.skill_effect.length !== 0) {
    //味方対象アイテム
    if (item.skill_effect[0].target == 1) {
      // ターゲットの選択を待つ(味方対象)
      selectionMode.value = item.skill_effect[0].target_type
      if (selectionMode.value == Config.targetAllFriends) {
        targetCharacter.value = partyStore.characters.filter(character => character.nowHP > 0)
      } else {
        targetCharacter.value = []
      }
      // battleProcess.value = 'selectTarget'
      await waitForTargetSelection();
    }
    //ターゲット選択後
    for (const skillEffect of item.skill_effect) {
      // animeTime = skillEffect.anime_time
      // effectTime = 0
      // actionTimes = 0
      //1回目と対象タイプが異なる

      if (skillEffect.target == 1) {
        toCharacterEffect.value = characterAssist(skillEffect, item.name, targetCharacter.value)

        // characterAssist(skillEffect, item.name)

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
.ItemUseUI {
  width: 100vw;
  height: 100vh;
  background: #3B413C80;
  font-family: serif;
  color: #F2EDD5;
  font-size: 2.8vh;
  position: relative;
}

.CurrentUI {
  position: absolute;
  /* position: fixed; */
  top: 1vh;
  right: 6vw;
  animation: slideRight 0.5s ease-in-out;
}

.itemBag {
  position: absolute;
  left: 45vw;
  top: 15vh;
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