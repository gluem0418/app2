<template>
  <div class="partyUI">
    <div class="party" v-if="showUIStore.party || statusStore.guildMenu == config.menuRemoveMember">
      <div class="characters">
        <div v-for="(character, index) in partyStore.characters" :key="character.cha_id"
          @click="selectCharacter(index, character)" class="character-card"
          :class="{ 'changing': changing && changeIndex.includes(index) }">
          <StatusUI class="StatusUI" :character="character" />
          <div class="charaflame">
            <img :src="character.poseGraphicUrl" alt="" class="charaimage" />
          </div>
        </div>
      </div>
    </div>

    <CharacterUI :character="selectedCharacter" :index="selectedIndex" v-show="showUIStore.character"
      @changeCharacter='changeCharacter' />
    <!-- <ItemBagUI class="ItemBag" v-show="showUIStore.item" /> -->
    <Preparation class="Preparation" v-show="showUIStore.item || showUIStore.skill" />
    <IconBack class="IconBack" @click="clickBack" v-show="showUIStore.party || showUIStore.character" />

    <IconChange class="IconChange" @click="changeOrder" v-show="showUIStore.party" :class="{ 'changing': changing }" />

    <div
      v-if="statusStore.status == config.statusDungeon && statusStore.processDungeon == config.processSearch && !showUIStore.character">
      <IconSkill class="IconSkill" @click="clickIcon(bConfig.actionSkill)" />
      <IconBag class="IconBag" @click="clickIcon(bConfig.actionItem)" />
    </div>

    <IconParty class="IconParty" @click="clickParty" v-if="statusStore.guildMenu != config.menuRemoveMember" />

    <Confirmation v-show="showUIStore.message" :message="confirmationMessage"
      @confirmationResponse="confirmationResponse" />
    <Information v-show="showUIStore.errorMessage" :message="errorMessage" @hideError="hideErrorMessage" />
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

import StatusUI from './Status.vue';
import CharacterUI from './Character.vue';
import Preparation from '@/process/Preparation.vue';
// import CurrentUI from '@/UI/Current.vue';

import Character from '@/class/Character.ts';
import IconBack from '@/components/icon/IconBack.vue';
import IconBag from '@/components/icon/IconBag.vue';
import IconParty from '@/components/icon/IconParty.vue';
import IconChange from '@/components/icon/IconChange.vue';
import IconSkill from '@/components/icon/IconHeal.vue';
import Confirmation from '@/components/information/Confirmation.vue';
import Information from '@/components/information/Information.vue';

import config from '@/config/commonConfig.ts';
import bConfig from '@/config/battleConfig.ts';

//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()
//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()

//戻るアイコン
const clickBack = () => {
  changing.value = false;
  if (showUIStore.party) {
    partyBack()
  } else {
    characterBack()
  }
};
const partyBack = () => {
  changing.value = false;
  showUIStore.party = false;
  showUIStore.character = false;
  showUIStore.map = true;
  showUIStore.current = true;
};
const characterBack = () => {
  showUIStore.party = true;
  showUIStore.character = false;
  selectedIndex.value = undefined;
  selectedCharacter.value = undefined;

};
//かばんアイコン
const clickIcon = (kind: string) => {
  if (kind == bConfig.actionItem) {
    showUIStore.item = !showUIStore.item
    showUIStore.skill = false
    showUIStore.map = !showUIStore.item
  } else {
    showUIStore.skill = !showUIStore.skill
    showUIStore.item = false
    showUIStore.map = !showUIStore.skill
  }
  showUIStore.current = true
  showUIStore.party = false
};

//パーティーアイコンを押して表示切替
const clickParty = () => {
  changing.value = false;
  showUIStore.item = false;
  showUIStore.skill = false;
  //パーティー非表示かつキャラクター非表示の場合、他UI非表示
  if (!showUIStore.party && !showUIStore.character) {
    showUIStore.map = false;
    showUIStore.current = false;
  }
  //パーティー表示の場合、戻る
  if (showUIStore.party) {
    partyBack()
    return
  }
  showUIStore.party = !showUIStore.party;
  showUIStore.character = false;
};

//characterUIにてキャラクター変更時
const changeCharacter = (selectType: string) => {
  if (selectType == 'next') {
    selectedIndex.value = selectedIndex.value == partyStore.characters.length - 1 ? 0 : selectedIndex.value! + 1
    selectedCharacter.value = partyStore.characters[selectedIndex.value]
  } else {
    selectedIndex.value = selectedIndex.value == 0 ? partyStore.characters.length - 1 : selectedIndex.value! - 1
    selectedCharacter.value = partyStore.characters[selectedIndex.value]
  }
}

//キャラクターを押して表示切替
const selectedIndex = ref<number | undefined>(undefined);
const selectedCharacter = ref<Character | undefined>(undefined);
const changing = ref(false);
const changeIndex = ref<number[]>([]);
let confirmationMessage: string
let errorMessage: string

function selectCharacter(index: number, character: Character) {
  //メンバーを外す場合
  if (statusStore.guildMenu == config.menuRemoveMember) {
    if (character.cha_id == config.mainChaid) {
      errorMessage = config.msgRemovePartyError
      showUIStore.errorMessage = true;
      return;
    }
    confirmationMessage = config.msgRemoveParty1 + character.name + config.msgRemoveParty2
    showUIStore.message = true;
    selectedCharacter.value = character;
    return;
  }
  //入れ替え中
  if (changing.value) {
    // すでに選択されているキャラクターを再度選択した場合、選択を解除
    if (changeIndex.value.includes(index)) {
      changeIndex.value = changeIndex.value.filter(i => i !== index);
    } else if (changeIndex.value.length < 2) {
      // 2つ未満のキャラクターが選択されている場合、選択を追加
      changeIndex.value.push(index);
    }
    // 順番を入れ替える処理
    if (changeIndex.value.length === 2) {
      const temp = partyStore.characters[changeIndex.value[0]];
      partyStore.characters[changeIndex.value[0]] = partyStore.characters[changeIndex.value[1]];
      partyStore.characters[changeIndex.value[1]] = temp;
      //character hate update
      for (let order of changeIndex.value) {
        partyStore.characters[order].updateHate(order);
        console.log('partyStore.characters[order]', partyStore.characters[order])
      }

      changeIndex.value = [];
    }
    //キャラ選択
  } else {
    selectedIndex.value = index;
    selectedCharacter.value = character;
    showUIStore.party = false;
    showUIStore.character = true;
  }
}
// YESの場合、該当キャラクターをパーティから外す
const confirmationResponse = (response: string) => {
  showUIStore.message = false;
  if (response == config.textYes) {
    // partyStore.characters.push(selectedCharacter.value!);
    partyStore.characters = partyStore.characters.filter(character => character.cha_id !== selectedCharacter.value!.cha_id);
    showUIStore.character = false;
  }
};
const hideErrorMessage = () => {
  showUIStore.errorMessage = false;
};

const changeOrder = () => {
  changing.value = !changing.value
};
</script>
  
<style scoped>
.partyUI {
  width: 100vw;
  height: 100vh;
}

.party {
  position: absolute;
  background: #3B413C80;
  width: 100vw;
  height: 100vh;
}

.characters {
  margin-top: 3vh;
  margin-left: 4vw;
}

.character-card {
  display: inline-block;
  width: 23vw;
}

.character-card.changing {
  animation: blink 0.5s linear infinite;
}

.StatusUI {
  animation: slideTop 0.5s ease-in-out;
}

.charaflame {
  position: absolute;
  height: 48vh;
  text-align: center;
  animation: slideRight 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.charaimage {
  width: 23vw;
}

.IconBack {
  position: absolute;
  left: 2%;
  bottom: 2%;
}

.IconChange {
  position: absolute;
  right: 28vw;
  bottom: 1vh;
}

.IconChange.changing {
  animation: blink 0.5s linear infinite;
}

.IconSkill {
  position: absolute;
  right: 19vw;
  bottom: 0.5vh;
}

.IconBag {
  position: absolute;
  right: 11vw;
  bottom: 1vh;
}

.IconParty {
  position: absolute;
  right: 2vw;
  bottom: 1vh;
}
</style>