<template>
  <div v-if="selectedCharacter" class="CharacterUI"
    :style="{ backgroundImage: 'url(' + selectedCharacter.backgroundUrl + ')' }">
    <div class="imageFlame" @click="addMember">
      <img class="charaimage" :src="selectedCharacter.poseGraphicUrl" alt="" />
    </div>
    <CharaCardUI class="CharaCardUI" :character="selectedCharacter" />

    <CharaStatusUI v-if="showStatus" class="CharaStatusUI" :character="selectedCharacter" />
    <CharaSubStatusUI v-else class="CharaSubStatusUI" :character="selectedCharacter" />
    <switchBtn class="ChangeStatus" @click="changeStatus" :switchWord='switchStatus' />

    <EquipmentUI v-if="showEuip" class="EquipmentUI" :character="selectedCharacter" />
    <SkillUI v-else class="SkillUI" :character="selectedCharacter" />
    <switchBtn class="ChangeSkill" @click="changeSkill" :switchWord='switchEquip' />

    <IconLeft class="IconCharaBack" @click="backCharacter" />
    <IconRight class="IconCharaNext" @click="nextCharacter" />
    <Confirmation v-show="showUIStore.message" :message="confirmationMessage" @confirmationResponse="confirmationResponse" />
    <Information v-show="showUIStore.errorMessage" :message="errorMessage" @hideError="hideErrorMessage" />

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import CharaCardUI from '@/ui/CharaCard.vue';
import CharaStatusUI from '@/ui/CharaStatus.vue';
import CharaSubStatusUI from '@/ui/CharaSubStatus.vue';
import EquipmentUI from '@/ui/Equipment.vue';
import SkillUI from '@/ui/Skill.vue';

import Character from '@/class/Character.ts';
import config from '@/config/commonConfig.ts';

import switchBtn from '@/components/flame/SwitchBtn.vue';
import IconLeft from '@/components/icon/IconLeft.vue';
import IconRight from '@/components/icon/IconRight.vue';
import Confirmation from '@/components/information/Confirmation.vue';
import Information from '@/components/information/Information.vue';

//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()
//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()

const props = defineProps({
  index: { type: Number },
  character: { type: Character },
});
const selectedIndex = ref<number>(0);
const selectedCharacter = ref<Character | undefined>(undefined);

//ステータスの切り替え
const showStatus = ref(true);
const switchStatus = ['MAIN', 'SUB']
const changeStatus = () => {
  showStatus.value = !showStatus.value;
};

//装備とスキルの切り替え
const showEuip = ref(true);
const switchEquip = ['EQUIP', 'SKILL']
const changeSkill = () => {
  showEuip.value = !showEuip.value;
};

// 対象キャラクター指定
const emit = defineEmits(["changeCharacter"])
const changeCharacter = (selectType: string) => {
  emit('changeCharacter', selectType)
};

function nextCharacter() {
  changeCharacter('next')

  // selectedIndex.value = selectedIndex.value == partyStore.characters.length - 1 ? 0 : selectedIndex.value + 1
  // selectedCharacter.value = partyStore.characters[selectedIndex.value]
}

function backCharacter() {
  changeCharacter('back')

  // selectedIndex.value = selectedIndex.value == 0 ? partyStore.characters.length - 1 : selectedIndex.value - 1
  // selectedCharacter.value = partyStore.characters[selectedIndex.value]
}

// 対象キャラクターをパーティに追加（ギルド機能）
let confirmationMessage: string
let errorMessage : string
// 確認メッセージを表示
function addMember() {
  if (statusStore.guildMenu != config.menuAddMember) return;
  if (partyStore.characters.length == 4) {
    errorMessage = config.msgAddPartyError
    showUIStore.errorMessage = true;
    return;
  }
  confirmationMessage = config.msgAddParty1 + selectedCharacter.value!.name + config.msgAddParty2
  showUIStore.message = true;
}
// YESの場合、該当キャラクターをパーティに追加
const confirmationResponse = (response: string) => {
  showUIStore.message = false;
  if (response == config.textYes) {
    partyStore.characters.push(selectedCharacter.value!);
    showUIStore.character = false;
  }
};

const hideErrorMessage = () => {
  showUIStore.errorMessage = false;
};

watch(() => props.index, () => {
  if (props.index) {
    selectedIndex.value = props.index;
  }
})

watch(() => props.character, () => {
  if (props.character) {
    selectedCharacter.value = props.character;
  }
})

</script>
  
<style scoped>
.CharacterUI {
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: show 1s;
}

.CharaCardUI {
  position: absolute;
  margin: 1.5vh 2.6vw;
  animation: slideTop 0.5s ease-in-out;
}

.CharaStatusUI {
  position: absolute;
  top: 18vh;
  left: 4vw;
  animation: slideTop 0.3s ease-in-out;
}

.imageFlame {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* height: 100vh; */
}

.charaimage {
  /* width: 50vw; */
  animation: slideBottom 0.5s ease-in-out;
  height: 95vh;
}

.IconCharaBack {
  position: absolute;
  top: 45%;
  left: 27%;
}

.IconCharaNext {
  position: absolute;
  top: 45%;
  right: 29%;
}

.EquipmentUI {
  position: absolute;
  margin-top: 3vh;
  right: 4vw;
  animation: slideTop 0.3s ease-in-out;
}

.SkillUI {
  position: absolute;
  margin-top: 3vh;
  right: 4vw;
  animation: slideTop 0.3s ease-in-out;
}

.ChangeStatus {
  position: absolute;
  bottom: 2vh;
  left: 17%;
}

.ChangeSkill {
  position: absolute;
  bottom: 2vh;
  right: 19%;
}
</style>