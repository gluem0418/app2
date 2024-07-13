<template>
  <div class="Preparation">

    <ItemBagUI v-if="showUIStore.item && !selectedItem" class="selectItem" @useItem='useItem' />
    <div v-if="showUIStore.skill && !selectedItem" class="selectSkill">
      <ul class="characterSelect">
        <li v-for="character in partyStore.characters" class="characterFlame" @click="selectedCharacter = character"
          :class="{ 'selected-tab': selectedCharacter === character }">
          <img class="characterface" :src="character.faceGraphicUrl">
        </li>
      </ul>
      <SkillUI v-if="selectedCharacter" class="SkillUI" :character="selectedCharacter" :inUseSkill=true
        @useSkill='useItem' />
    </div>

    <div v-if="selectedItem">
      <!-- character  -->
      <CurrentUI class="CurrentUI" :currentCharacter="currentCharacter" :targetCharacter="targetCharacter"
        :startCharacterAnime="startCharacterAnime" :startCharacterEffect="startCharacterEffect"
        :toSkillEffect="toSkillEffect" :toCharacterEffect="toCharacterEffect"
        :toCharacterEffectType="toCharacterEffectType" :selectionMode="selectionMode"
        @selectCharacter='selectCharacter' />
      <SelectName class="selectName" :inside="selectedItem.name"></SelectName>
      <SkillInfo class="skillInfo" :skillInfo="selectedItem.info" />
      <!-- Special Item  -->
      <OkBtn v-if="selectedItem.use == 2" class="OkBtn" :inside="config.textOk" @click="clickOk(selectedItem)" />

      <CancelBtn class="CancelBtn" :inside="config.textCancel" @click="clickCancel()" />
    </div>

    <!-- 全体スキル(GIF)表示用のモーダルウィンドウ -->
    <transition name="fade">
      <div v-if="(showAreaSkill == bConfig.targetAll) && skillAnime" class="gif-modal" @click="showAreaSkill = null">
        <img :src="skillAnime" alt="animation" @load="loadSkillAnime()" />
      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

import CurrentUI from '@/ui/Current.vue';
import ItemBagUI from '@/ui/ItemBag.vue';
import SkillInfo from '@/ui//SkillInfo.vue';
import SkillUI from '@/ui/Skill.vue';
import useCharacterSkill from '@/process/useCharacterSkill.ts';

import Character from '@/class/Character.ts';
import Item from '@/class/Item.ts';
import ActiveSkill from '@/class/ActiveSkill.ts';
import { SkillEffect } from '@/class/ActiveSkill.ts';
import OkBtn from '@/components/flame/BlueBtn.vue';
import CancelBtn from '@/components/flame/RedBtn.vue';

import config from '@/config/commonConfig.ts';
import bConfig from '@/config/battleConfig.ts';

import { characterAssist } from '@/process/CharacterAssist.ts';
import { timer } from '@/process/Common.ts';
import SelectName from '@/components/flame/Flame1.vue';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//アイテム管理
import { useItemBagStore } from '@/stores/ItemBag.ts';
const itemBagStore = useItemBagStore()
//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()
//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()

///////////////////////////////////////////////////////////
// キャラクター向け(CurrentUI)表示用
///////////////////////////////////////////////////////////
const currentCharacter = ref<Character>()   //行動キャラ
const targetCharacter = ref<Character[]>([])   //攻撃対象キャラ
const startCharacterAnime = ref<boolean>(false);
const startCharacterEffect = ref<boolean>(false);
const toSkillEffect = ref<SkillEffect>();
const toCharacterEffect = ref<(string | number | null)[]>(new Array(partyStore.characters.length).fill(null));
const toCharacterEffectType = ref<string>()
const selectionMode = ref('');

const selectedCharacter = ref<Character | undefined>(partyStore.characters[0]);

// 通常時アイテム使用
const skillAnime = ref<string>('')
// const animeTime = ref<number>(0)
const showAreaSkill = ref<string | null>(null)
//カスタムフック
//キャラクター向けスキル
const { toCharacterSkill, showCharacterEffect } = useCharacterSkill(
  startCharacterAnime,
  startCharacterEffect,
  toSkillEffect,
  toCharacterEffect,
  toCharacterEffectType,
  skillAnime,
  showAreaSkill
)

//アイテム使用決定
const selectedItem = ref<Item | ActiveSkill | null>(null);
let animeTime: number
//ターゲット選択後
async function useItem(item: Item | ActiveSkill) {
  console.log('useItem', item)
  selectedItem.value = item
  showUIStore.current = false
  //Special Item
  if (item instanceof Item && item.use == 2) {
    return
  }

  //skillEffectあり
  if (item.skill_effect.length !== 0) {
    //初期ターゲット
    setTarget(item)
    //ターゲット決定待ち
    await waitForTargetSelection();
    //アイテム（スキル）使用
    useAction(item);
  }
}
function setTarget(item: Item | ActiveSkill) {

  if (item.skill_effect[0].target == 1) {
    // ターゲットの選択を待つ(味方対象)
    selectionMode.value = item.skill_effect[0].target_type
    targetCharacter.value = [];
    switch (selectionMode.value) {
      // case Config.targetMyself:
      //   break
      case bConfig.targetOneFriend:
        targetCharacter.value.push(partyStore.characters[0]);
        break
      case bConfig.targetAllFriends:
        targetCharacter.value = partyStore.characters.filter(character => character.nowHP > 0)
        break
      // case Config.targetRandomFriend:
      //   break
      default:
    }
  }
}

async function useAction(item: Item | ActiveSkill) {

  for (const skillEffect of item.skill_effect) {
    animeTime = skillEffect.anime_time
    //1回目と対象タイプが異なる

    //味方対象スキル
    if (skillEffect.target == 1) {
      //キャラクターのスキル
      if (item instanceof Item) {
        toCharacterEffect.value = characterAssist(skillEffect, item.name, targetCharacter.value)
      } else {
        toCharacterEffect.value = characterAssist(skillEffect, item.name, targetCharacter.value, selectedCharacter.value)
      }
      //アニメーションあり
      if (skillEffect.skill_anime) {
        toCharacterSkill(skillEffect)
      }
      //でエフェクトあり
      if (toCharacterEffect.value.some(effect => effect !== null)) {
        showCharacterEffect(skillEffect)
      }
    }
    await timer(animeTime + bConfig.effectTime);
  }
  //アイテム減少
  if (item instanceof Item) {
    itemBagStore.useItem(item.item_id)
  }
  //アイテム初期化
  clickCancel()
}

function clickOk(item: Item | ActiveSkill) {
  if (item instanceof Item && item.skill_effect) {
    switch (item.item_id) {
      //帰還用アイテム
      case config.returnItemId:
        showAreaSkill.value = bConfig.targetAll;
        skillAnime.value = item.skill_effect[0].skill_anime
        animeTime = item.skill_effect[0].anime_time
        break
      default:
    }
  }
}

function clickCancel() {
  console.log('clickCancel', selectedItem.value)
  //選択アイテム初期化
  selectionMode.value = ''
  selectedItem.value = null
  targetCharacter.value = [];
  showUIStore.current = true
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
    showAreaSkill.value = ''
    if (selectedItem.value instanceof Item && selectedItem.value.item_id == config.returnItemId) {
      useReturnItem()
    }
  }, animeTime);
}

// アイテム使用
const useReturnItem = () => {
  statusStore.status = config.statusTown
  showUIStore.item = false
  showUIStore.skill = false
  showUIStore.map = true
  console.log('useReturnItem', selectedItem.value)
}

</script>

<style scoped>
.Preparation {
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
  top: 1vh;
  right: 6vw;
  animation: slideRight 0.5s ease-in-out;
}

.selectItem {
  position: absolute;
  left: 25vw;
  top: 18vh;
}

.selectSkill {
  position: absolute;
  left: 30vw;
  top: 18vh;
}

.characterSelect {
  list-style-type: none;
}

.characterface {
  width: 7vw;
  border-radius: 1vw;
}

.SkillUI {
  position: absolute;
  top: 0vh;
  left: 7.5vw;
}

.selected-tab {
  background: #624CAB80;
  border-radius: 1vh;
  border: 0.2vh solid #E2D8A6;
}

.skillInfo {
  position: absolute;
  top: 32vh;
  left: 37vw;
  animation: slideBottom 0.3s ease-in-out;
}

.selectName {
  position: absolute;
  color: #F2EDD5;
  font-family: "Trade Winds";
  font-size:1.8vw;
  top: 18vh;
  left: 37vw;
  animation: slideLeft 0.3s ease-in-out;
}

.OkBtn {
  position: absolute;
  top: 22vh;
  right: 23.7vw;
}

.CancelBtn {
  position: absolute;
  top: 35vh;
  right: 21vw;
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
  /* z-index: 1000; */
}
</style>@/process/useCharacterSkill@/process/Common@/process/CharacterAssist