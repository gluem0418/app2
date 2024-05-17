<template>
  <div class="CurrentUI">
    <div class="character" v-for="(character, index) in partyStore.characters" @click="clickTarget(character)"
      @mouseover="overTarget(character)"
      :class="{ currentCharacter: character == currentCharacter, targetCharacter: (targetCharacter?.includes(character)) }">
      <img v-if="showCharacterAnime && showCharacterAnime[index]" :src="toCharacterAnime!" class="toCharacterAnime"
        @load="loadSkillAnime(index)" alt="skill effect">
      <div v-if="showCharacterEffect && showCharacterEffect[index]" class="characterEffect"
        :class="{ effectGreen: toCharacterEffectType == Config.effectHeal, effectRed: toCharacterEffectType == Config.effectDamage }">
        {{ toCharacterEffect[index] }}
      </div>
      <img class="characterface" :src="character.faceGraphicUrl">
      <span class="progress-bar-hp">
        <ProgressBarHp :nowHP="character.nowHP" :maxHP="character.totalStatus.HP" />
      </span>
      <div class="progress-bar-mp">
        <ProgressBarMp :nowMP="character.nowMP" :maxMP="character.totalStatus.MP" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, watch } from 'vue'
import Character from '@/Class/Character.ts';
import { SkillEffect } from '@/Class/ActiveSkill.ts';
import { getCharacterIndex } from '@/Process/Common.ts';

import ProgressBarHp from '@/components/progress/ProgressBarHp.vue';
import ProgressBarMp from '@/components/progress/ProgressBarMp.vue';

import Config from '@/config.ts';

//monsterスキル表示
import monsterClaw from '/effect/monster/claw1.gif';

const props = defineProps({
  currentCharacter: { type: Character },
  targetCharacter: { type: Array as () => Character[] },
  startCharacterAnime: { type: Boolean },
  startCharacterEffect: { type: Boolean },
  toSkillEffect: Object as () => SkillEffect,
  toCharacterEffect: { type: Array as PropType<(number | string | null)[]>, default: () => [] },
  toCharacterEffectType: { type: String },
  selectionMode: { type: String },
});

//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()

const toCharacterAnime = ref<string | null>(null)
const showCharacterAnime = ref<boolean[]>(new Array(partyStore.characters.length).fill(false));;
const showCharacterEffect = ref<boolean[]>(new Array(partyStore.characters.length).fill(false));

// キャラクターを選択中に呼び出す関数
function overTarget(character: Character) {
  if (props.selectionMode != Config.targetOneFriend) return
  //ターゲット設定
  if (!props.targetCharacter?.includes(character)) {
    selectCharacter('over', character)
  }
}
// キャラクターを選択中に呼び出す関数
function clickTarget(character: Character) {
  if (props.selectionMode == Config.targetMyself) {
    selectCharacter('click')
  } else if (props.selectionMode == Config.targetOneFriend) {
    //ターゲット設定
    if (props.targetCharacter?.includes(character)) {
      selectCharacter('click', character)
    } else {
      selectCharacter('over', character)
    }
  } else if (props.selectionMode == Config.targetAllFriends) {
    selectCharacter('click')
  }
}

// 対象キャラクター指定
const emit = defineEmits(["selectCharacter"])
const selectCharacter = (selectType: string, character: Character | null = null) => {
  emit('selectCharacter', selectType, character)
};

//キャラクター向けのアニメーション表示
// function toCharacterSkillAnime(skillEffect: SkillEffect) {
function characterAnime(index: number, skillAnime: string) {
  console.log('skillEffect', props.toSkillEffect)
  // if (!props.targetCharacter) return
  // switch (skillEffect.target_type) {
  //   case Config.targetMyself:
  //   case Config.targetOneFriend:
  // let characterIndex = getCharacterIndex(props.targetCharacter[0])
  toCharacterAnime.value = skillAnime
  showCharacterAnime.value[index] = true // アニメーションを表示にする
  //     break
  //   default:
  // }
}
//キャラクター向けの攻撃アニメーション表示
// function toCharacterAttackAnime() {
//   if (!props.targetCharacter) return
//   let characterIndex = getCharacterIndex(props.targetCharacter[0])
//   toCharacterAnime.value = monsterClaw
//   showCharacterAnime.value[characterIndex] = true //アニメーションを表示
// }

// スキルロード後
let startTime: number
const loadSkillAnime = (index: number = 0) => {
  let animeTime = props.toCharacterEffectType == Config.effectDamage ? Config.monsterAttackTime : props.toSkillEffect?.anime_time
  startTime = performance.now()
  setTimeout(() => {
    console.log('loadSkillAnimeEnd', performance.now() - startTime)
    showCharacterAnime.value[index] = false
    toCharacterAnime.value = null;
    // effectToCharacters(index)
  }, animeTime)
}

//キャラクター向けのエフェクトを表示
function effectToCharacters(index: number) {
  if (props.toCharacterEffect[index] == null) return;
  showCharacterEffect.value[index] = true;
  setTimeout(() => {
    console.log('effectToCharactersEnd', performance.now() - startTime)
    showCharacterEffect.value[index] = false
  }, Config.effectTime);
}

watch(() => props.startCharacterAnime, () => {
  if (!props.startCharacterAnime) return
  if (!props.targetCharacter) return

  let characterIndex = getCharacterIndex(props.targetCharacter[0])

  console.log('startCharacterAnime', props.toCharacterEffectType)
  if (props.toCharacterEffectType == Config.effectDamage) {
    //モンスター通常攻撃
    characterAnime(characterIndex, monsterClaw)
    // toCharacterAttackAnime()
  } else {
    //キャラクター向けスキル
    characterAnime(characterIndex, props.toSkillEffect!.skill_anime)
  }
})

watch(() => props.startCharacterEffect, () => {
  if (!props.startCharacterEffect || !props.toCharacterEffect) return
  let delay = Config.delayTime;
  for (let i = 0; i < partyStore.characters.length; i++) {
    if (props.toCharacterEffect[i] == null) continue;
    setTimeout(() => {
      effectToCharacters(i)
    }, delay);
    delay += Config.delayTime;
  }
})

</script>

<style scoped>
.CurrentUI {
  width: 71vw;
  height: 12vh;
  display: flex;
  color: #F2EDD5;
  font-family: "Trade Winds";
  font-size: 2.5vh;
}

.character {
  width: 100%;
  display: flex;
  position: relative;
}

@keyframes currentBorder {
  0% {
    border: 0.2vw solid #624CAB;
  }

  100% {
    border: 0.2vw solid #F2EDD5;
    background: #624CAB80;
  }
}

.currentCharacter {
  border-radius: 1vw;
  animation: currentBorder 1s ease infinite alternate;
}

@keyframes targetBorder {
  0% {
    border: 0.2vw solid #3CD0E3;
  }

  100% {
    border: 0.2vw solid #F2EDD5;
    background: #624CAB80;
  }
}

.targetCharacter {
  border-radius: 1vw;
  animation: targetBorder 1s ease infinite alternate;
}

.progress-bar-hp {
  position: absolute;
  width: 11.5vw;
  margin-top: 2.5vh;
  margin-left: 3vw;
}

.progress-bar-mp {
  position: absolute;
  width: 11.5vw;
  margin-top: 4.5vh;
  margin-left: 3vw;
}

.progress-hp {
  margin-top: 5vh;
}

.progress-mp {
  margin-top: 0;
}

.nowhp {
  position: absolute;
  top: 4.9vh;
  left: 60%;
}

.nowmp {
  position: absolute;
  top: 9.2vh;
  left: 60%;
}

.characterEffect {
  position: absolute;
  /* top: 5%; */
  left: 40%;
  z-index: 10;
  font-family: "Bungee Inline";
  /* color: #F34213; */
  font-size: 8vh;
  /* font-size: 4vw; */
}

.characterface {
  border-radius: 1vw;
}

.effectGreen {
  color: #0CCA4A;
}

.effectRed {
  color: #F34213;
}

.toCharacterAnime {
  position: absolute;
  top: -15vh;
  /* left: 50%; */
  max-width: 30vw;
  height: 30vh;
}
</style>