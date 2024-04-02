<template>
  <div class="CurrentUI">
    <div class="character" v-for="(character, index) in partyStore.characters" @click="clickTarget(character)"
      @mouseover="overTarget(character)"
      :class="{ currentCharacter: character == currentCharacter, targetCharacter: (targetCharacter?.includes(character)) }">
      <!-- <div v-show="showCharacterEffect && showCharacterEffect[index] && targetCharacter?.includes(character)"> -->
      <div v-show="showCharacterEffect && showCharacterEffect[index]" class="characterEffect"
        :class="{ effectGreen: toCharacterEffectType == 'heal', effectRed: toCharacterEffectType == 'damage' }">{{
          toCharacterEffect[index] }} </div>
      <img v-show="showCharacterAnime && showCharacterAnime[index]" :src="toCharacterAnime!" class="toCharacterAnime"
        alt="skill effect">
      <img class="characterface" :src="character.faceGraphicUrl">
      <!-- <span class="progress-bar-hp">
          <ProgressBarHp :nowHP="character.nowHP" :maxHP="character.totalStatus.HP" />
        </span> -->
      <span class="progress-bar-hp">
        <ProgressBarHp :nowHP="character.nowHP" :maxHP="character.totalStatus.HP" />
      </span>
      <div class="progress-bar-mp">
        <ProgressBarMp :nowMP="character.nowMP" :maxMP="character.totalStatus.MP" />
        <!-- <progress class="progress-mp" :value="character.nowMP" :max="character.totalStatus.MP"></progress>
        <span class="nowmp">{{ character.nowMP }}/{{ character.totalStatus.MP }}</span> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, watch } from 'vue'
import Character from '@/Class/Character.ts';
import ProgressBarHp from '@/components/progress/ProgressBarHp.vue';
import ProgressBarMp from '@/components/progress/ProgressBarMp.vue';

const props = defineProps({
  currentCharacter: { type: Character },
  targetCharacter: { type: Array as () => Character[] },
  showCharacterEffect: { type: Array as () => Boolean[] },
  toCharacterEffect: { type: Array as PropType<(number | string | null)[]>, default: () => [] },
  toCharacterEffectType: { type: String },
  showCharacterAnime: { type: Array as () => Boolean[] },
  toCharacterAnime: { type: [String, null] as PropType<string | null>, default: null },
  selectionMode: { type: String },
});

//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()

// キャラクターを選択中に呼び出す関数
function overTarget(character: Character) {
  if (props.selectionMode != 'oneFriend') return
  //ターゲット設定
  if (!props.targetCharacter?.includes(character)) {
    selectCharacter('over', character)
  }
}
// キャラクターを選択中に呼び出す関数
function clickTarget(character: Character) {
  if (props.selectionMode == 'myself') {
    selectCharacter('click')
  } else if (props.selectionMode == 'oneFriend') {
    //ターゲット設定
    if (props.targetCharacter?.includes(character)) {
      selectCharacter('click', character)
    } else {
      selectCharacter('over', character)
    }
  } else if (props.selectionMode == 'allFriends') {
    selectCharacter('click')
  }
}

// 対象キャラクター指定
const emit = defineEmits(["selectCharacter"])
const selectCharacter = (selectType: string, character: Character | null = null) => {
  emit('selectCharacter', selectType, character)
};

watch(() => props.showCharacterEffect, () => {
  console.log('showCharacterEffect', props.showCharacterEffect)
})
watch(() => props.toCharacterEffect, () => {
  console.log('toCharacterEffect', props.toCharacterEffect)
})
watch(() => props.toCharacterEffectType, () => {
  console.log('toCharacterEffectType', props.toCharacterEffectType)
})
watch(() => props.selectionMode, () => {
  console.log('selectionMode', props.selectionMode)
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