<template>
  <div v-if="character" class="EquipmentUI">
    <ul class="EquipmentTab">
      <li v-for="eqType in equipmentType" :key="eqType" @click="selectEquipmentType(eqType)"
        :class="{ 'selected-tab': eqType === selectedEquipmentType }" class="EquipmentTabItem">
        {{ eqType }}
      </li>
    </ul>
    <div class="underLine"></div>
    <div v-if="selectedEquipmentType">
      <ul class="EquipmentTypeList" density="compact">
        <li v-for="item in equipBagStore.equipmentType[selectedEquipmentType]" :key="item.eqpbag_id"
          @click="selectEquipment(item.eqp_id, selectedEquipmentType, item.eqpbag_id)" class="EquipmentItem"
          :class="{ 'selected-tab': selectedEquipment && item.eqpbag_id === selectedEqpbag_id }">
          <img v-if="item.equippedBy !== null" class="smallface"
            :src="getCharacterEquippedBy(item.equippedBy)?.faceGraphicUrl" alt="Character face" />
          <span v-else class="faceFlame"></span>

          <span class="itemName">{{ getEquipmentNameById(item.eqp_id) }}</span>

          <span v-if="selectedEquipment && item.eqpbag_id === selectedEqpbag_id" class="buttonPosition">
            <span class="button-equip" :class="{
              'equip': character.cha_id != item.equippedBy,
              'unequip': character.cha_id == item.equippedBy
            }" @click="updateEquipment(item.eqpbag_id, item.equippedBy)">{{ equipbutton(item.equippedBy) }}</span>
          </span>
        </li>
      </ul>
      <div class="underLine"></div>
      <div v-if="selectedEquipment" class="equipment-status">
        <div class="status" v-for="(value, key) in selectedEquipment.status" :key="key" v-if="diff !== undefined">
          <span class="status-key">{{ key }}</span>
          <span class="status-value">{{ value }}</span>
          <span class="status-diff" :class="{ 'colorblue': Number(diff[key]) >= 0, 'colorred': Number(diff[key]) < 0 }">{{
            diff[key]
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';
import Equipment from '@/class/Equipment.ts';
import { equipmentList, EquipmentType } from '@/class/Equipment.ts';
import Character from '@/class/Character.ts';
import { characterList } from '@/class/Character.ts';

const props = defineProps({
  character: { type: Character },
});

//equipmentBagを作成
import { useEquipBagStore } from '@/stores/EquipBag.ts';
const equipBagStore = useEquipBagStore()

const equipmentType: EquipmentType[] = ['WEP', 'ARM', 'ACC']

const selectedEquipmentType = ref<EquipmentType>('WEP');
const selectEquipmentType = (type: EquipmentType) => {
  selectedEquipmentType.value = type;
  selectedEqpbag_id.value = null;
  selectedEquipment.value = null;
};

// 現在の装備のステータス
const currentEquipment = computed(() => {
  return props.character?.equipment[selectedEquipmentType.value];
});

// 選択された装備のステータス
const selectedEquipment = ref<Equipment | null>(null);
const selectedEqpbag_id = ref<Number | null>(null)
const selectEquipment = (eqp_id: number, selectedEquipmentType: EquipmentType, eqpbag_id: number) => {
  const selectedEquipmentData = equipmentList.find(e => e.eqp_id === eqp_id && e.type === selectedEquipmentType);
  if (!selectedEquipmentData) return;
  selectedEquipment.value = selectedEquipmentData;
  selectedEqpbag_id.value = eqpbag_id
};

// 装備バッグのequippedByからcharacterを返す
const getCharacterEquippedBy = (equippedBy: number | null) => {

  // return partyStore.characters.find(char => char.cha_id === equippedBy);
  return characterList.find(char => char.cha_id === equippedBy);
};

const getEquipmentNameById = (eqp_id: number) => {
  const equipment = equipmentList.find(item => item.eqp_id === eqp_id);
  return equipment ? equipment.name : null;
}

const equipbutton = (equippedBy: number | null) => {
  if (props.character?.cha_id == equippedBy) {
    return "Unequip"
  } else {
    return "Equip"
  }
}
// ステータスの差分
const diff = computed(() => {
  if (!selectedEquipment.value) return;
  const diff: { [key: string]: string } = {};  // diff の型を明示的に指定
  let diffnum: number;
  for (const key in selectedEquipment.value.status) {
    diffnum = selectedEquipment.value.status[key] - (currentEquipment.value?.status[key] || 0);
    diff[key] = diffnum > 0 ? "+" + String(diffnum) : String(diffnum)
  }
  return diff;
});

// 装備変更
const updateEquipment = (eqpbag_id: number, equippedBy: number | null) => {
  let cha_id: number = props.character!.cha_id
  // equippedByと画面のキャラが同一の場合、解除
  if (equippedBy === cha_id) {
    equipBagStore.equipEquipment(eqpbag_id, null);
    //ステータス更新
    props.character?.changeEquipment(selectedEquipmentType.value, null)
  } else {
    // 既存装備がある場合、装備バッグの旧装備の状態を更新
    if (currentEquipment.value) {
      equipBagStore.unequipOldEquipment(selectedEquipmentType.value, cha_id);
    }
    // 誰かが装備していた場合、旧装備キャラのステータス更新
    if (equippedBy !== null) {
      getCharacterEquippedBy(equippedBy)?.changeEquipment(selectedEquipmentType.value, null)
      // debug
      console.log(getCharacterEquippedBy(equippedBy))
    }
    // 装備バッグの状態を更新
    equipBagStore.equipEquipment(eqpbag_id, cha_id);
    //ステータス更新
    props.character?.changeEquipment(selectedEquipmentType.value, selectedEquipment.value)
  }
  // debug
  console.log(equipBagStore)
  console.log(props.character)
};

</script>

<style scoped>
.EquipmentUI {
  background: rgba(59, 65, 60, 0.8);
  background-image: url('/img/flame/flame032702.png');
  background-size: 100% 100%;
  font-family: serif;
  /* font-family: "Verily Serif Mono"; */
  color: #F2EDD5;
  font-size: 2.8vh;
  padding: 1vh 0vw;
  position: relative;
  height: 85vh;
  width: 25vw;
}

.EquipmentTab {
  display: flex;
  text-align: center;
  list-style-type: none;
  color: #E2D8A6;
  align-items:center;
  padding: 0vh 0.6vw;
  font-size: 3.4vh;
  font-family: "Verily Serif Mono";
}

.EquipmentTabItem {
  width: 33%;
  /* border-right: 0.7vh double #3CD0E3; */
}

.selected-tab {
  background: #624CAB80;
  border-radius:1vh;
  border: 0.2vh solid #E2D8A6;
}

.underLine {
  margin: 0vh 0.5vw;
  /* border-bottom: 0.7vh double #3CD0E3; */
  border-bottom: 0.7vh double #84dae9;
}

.EquipmentTypeList {
  height: 50vh;
  overflow-y: auto;
  color: #F2EDD5;
  margin-top: 0.5vh;
  margin-left: 0.7vw;
  margin-right: 0.7vw;
}

.EquipmentItem {
  display: flex;
  align-items: center; /* これにより縦位置が中央になります */
  justify-content: start; 
  list-style-type: none;
  /* vertical-align: top; */
  height:5vh;
}

.faceFlame {
  margin-left: 2.7vw;
  /* margin-right: 2.7vw; */
}

.smallface {
  margin-left: 0.4vw;
  /* margin-right: 0.4vw; */
  height: 5vh;
  vertical-align: bottom;
}

.itemName {
  padding-left: 0.5vw;
  /* padding-right: 0.5vw; */
}
.buttonPosition {
  /* float:right; */
  /* margin-right:1vw; */
  margin-left:auto;
}
.equip {
  background: #0CCA4A;
}

.unequip {
  background: #F34213;
}

.equipment-status {
  /* height: 25vh; */
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0.5vh 0vw;
}

.status-key {
  font-family: "Verily Serif Mono";
  padding-left: 2vw;
  color: #E2D8A6;
}

.status-value {
  padding-left: 0.5vw;
}

.status-diff {
  padding-left: 0.5vw;
}

.colorblue {
  color: #84E2FB;
}

.colorred {
  color: #F34213;
}
</style>