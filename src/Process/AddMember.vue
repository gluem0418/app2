<template>
  <div class="AddMember">
    <Carousel :items-to-show="3" :wrap-around="true" v-show="!showUIStore.character">
      <Slide v-for="(character, index) in notPartyList" :key="index">
        <div class="carousel__item" @click="selectCharacter(index, character)">
          <CharaCardUI class="CharaCardUI" :character="character" />
          <img class="chara-image" :src="character.poseGraphicUrl" alt="" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <CharacterUI :character="selectedCharacter" :index="selectedIndex" v-show="showUIStore.character"
      @changeCharacter='changeCharacter' />
  </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import CharaCardUI from '@/ui/CharaCard.vue';
import { characterList } from '@/class/Character.ts';
import CharacterUI from '@/ui/Character.vue';
import Character from '@/class/Character.ts';

//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()

//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()

//未加入メンバーの一覧
const notPartyList = computed(() => {
  return characterList.filter(character =>
    !partyStore.characters.some(partyCharacter => partyCharacter.cha_id === character.cha_id)
  );
});

//キャラクターを押して表示切替
const selectedIndex = ref<number | undefined>(undefined);
const selectedCharacter = ref<Character | undefined>(undefined);
function selectCharacter(index: number, character: Character) {
  selectedIndex.value = index;
  selectedCharacter.value = character;
  // showUIStore.party = false;
  showUIStore.character = true;
}

//characterUIにてキャラクター変更時
const changeCharacter = (selectType: string) => {
  if (selectType == 'next') {
    selectedIndex.value = selectedIndex.value == notPartyList.value.length - 1 ? 0 : selectedIndex.value! + 1
    selectedCharacter.value = notPartyList.value[selectedIndex.value]
  } else {
    selectedIndex.value = selectedIndex.value == 0 ? notPartyList.value.length - 1 : selectedIndex.value! - 1
    selectedCharacter.value = notPartyList.value[selectedIndex.value]
  }
}

</script>
  
<style scoped>
.AddMember {
  height: 100vh;
  width: 100vw;
  background: #3B413C80;
  font-family: serif;
  font-size: 2vw;
  color: #E2D8A6;
}

.carousel__item {
  display: flex;
  justify-content: center;
}

.CharaCardUI {
  position: absolute;
  top: 1vh;
  /* left:1vw; */
}

.chara-image {
  margin-top: 12vh;
  width: 38vw;
}
</style>