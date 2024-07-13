<template>
  <div class="CurrentUI">
    <div class="character" v-for="(character, index) in partyStore.characters" @click="clickTarget(character)"
      @mouseover="overTarget(character)"
      :class="{ currentCharacter: character == currentCharacter, targetCharacter: (targetCharacter?.includes(character)) }">
      <img v-if="showCharacterAnime && showCharacterAnime[index]" :src="toCharacterAnime!" class="toCharacterAnime"
        @load="loadSkillAnime(index)" alt="skill effect">
      <div v-if="showCharacterEffect && showCharacterEffect[index]" class="characterEffect"
        :class="{ effectGreen: toCharacterEffectType == bConfig.effectHeal, effectRed: toCharacterEffectType == bConfig.effectAttack }">
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
import Character from '@/class/Character.ts';
import { SkillEffect } from '@/class/ActiveSkill.ts';
import { getCharacterIndex } from '@/process/Common.ts';

import ProgressBarHp from '@/components/progress/ProgressBarHp.vue';
import ProgressBarMp from '@/components/progress/ProgressBarMp.vue';

import bConfig from '@/config/battleConfig.ts';

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

const emit = defineEmits(["selectCharacter", 'skillAnimeFinish', 'effectFinish'])

// キャラクターを選択中に呼び出す関数
function overTarget(character: Character) {
  if (props.selectionMode != bConfig.targetOneFriend) return
  //ターゲット設定
  if (!props.targetCharacter?.includes(character)) {
    selectCharacter('over', character)
  }
}
// キャラクターを選択中に呼び出す関数
function clickTarget(character: Character) {
  if (props.selectionMode == bConfig.targetMyself) {
    selectCharacter('click')
  } else if (props.selectionMode == bConfig.targetOneFriend) {
    //ターゲット設定
    if (props.targetCharacter?.includes(character)) {
      selectCharacter('click', character)
    } else {
      selectCharacter('over', character)
    }
  } else if (props.selectionMode == bConfig.targetAllFriends) {
    selectCharacter('click')
  }
}

// 対象キャラクター指定
const selectCharacter = (selectType: string, character: Character | null = null) => {
  emit('selectCharacter', selectType, character)
};

// スキルロード後
const loadSkillAnime = (index: number = 0) => {
  //
  console.log('loadSkillAnime', Date.now())
  //
  if (!props.toSkillEffect) return
  setTimeout(() => {
    //
    console.log('loadSkillAnime_setTimeout', Date.now())
    //
    showCharacterAnime.value[index] = false
    toCharacterAnime.value = null;
    emit('skillAnimeFinish')
  }, props.toSkillEffect.anime_time)
}

//キャラクター向けのエフェクトを表示
function effectToCharacters(index: number) {
  if (props.toCharacterEffect[index] == null) return;
  console.log('effectToCharacters', Date.now())

  showCharacterEffect.value[index] = true;
  setTimeout(() => {
    showCharacterEffect.value[index] = false
    console.log('effectToCharacters_setTimeout', Date.now())
  }, bConfig.effectTime);
}

watch(() => props.startCharacterAnime, () => {
  if (!props.startCharacterAnime) return
  if (!props.targetCharacter) return
  if (!props.toSkillEffect) return
  console.log('startCharacterAnime', props.toSkillEffect)
  //キャラクター向けスキルのアニメーション表示
  toCharacterAnime.value = props.toSkillEffect.skill_anime
  showCharacterAnime.value[getCharacterIndex(props.targetCharacter[0])] = true
})

watch(() => props.startCharacterEffect, () => {
  if (!props.startCharacterEffect || !props.toCharacterEffect) return
  let delay = bConfig.delayTime;
  for (let i = 0; i < partyStore.characters.length; i++) {
    if (props.toCharacterEffect[i] == null) continue;
    setTimeout(() => {
      effectToCharacters(i)
    }, delay);
    delay += bConfig.delayTime;
  }
  setTimeout(() => {
    emit('effectFinish')
  }, delay + bConfig.effectTime);
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
</style>@/process/Common