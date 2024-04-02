<template>
  <div v-if="character" class="SkillUI">
    <div class="skillSelect">
      <ul class="skillType">
        <li v-if="processBattle">{{ SkillType.ac }}</li>
        <li v-else v-for="skType in skillType" :key="skType" @click="selectSkillType(skType)"
          :class="{ 'selected-tab': skType === selectedSkillType }">
          {{ skType }}
        </li>
      </ul>
      <div class="underLine"></div>
      <div v-if="selectedSkillType == SkillType.pa">
        <ul class="skillList" density="compact">
          <li v-for="skill in character.passiveSkill" :key="skill.skill_id" @click="selectSkill(skill)" class="skillItem"
            :class="{ 'selected-tab': skill === selectedSkill }">

            <span v-if="skill.equip === true" class="statuskinds">E</span>
            <span v-else class="marginEquip"></span>
            <span class="marginLeft05">{{ skill.name }}</span>
            <span class="costValue">{{ skill.skill_cost }}</span>

            <!-- <span v-if="skill === selectedSkill" class='button-equip'
            :class="{ 'equip': skill.equip == false, 'unequip': skill.equip == true }">
            <button @click="updateSkill(skill)">{{ equipbutton(skill.equip) }}</button>
          </span> -->
            <span v-if="skill === selectedSkill" class='buttonPosition'>
              <span @click="updateSkill(skill)" class='button-equip'
                :class="{ 'equip': skill.equip == false, 'unequip': skill.equip == true }">{{ equipbutton(skill.equip)
                }}</span>
            </span>
          </li>
          <li class="totalCost">
            <span class="statuskinds">TOTAL COST</span>
            <span class="costValue">
              {{ character.passiveSkill.filter(skill => skill.equip).reduce((total, skill) =>
                total + skill.skill_cost, 0) }}
            </span>
          </li>
          <li class="totalCost">
            <span class="statuskinds">SKILL COST CAP</span>
            <span class="costValue">{{ character.passiveCost }}</span>
          </li>
        </ul>
      </div>

      <ErrorMessage v-show="showError" :message="errorMessage" @hideError="hideErrorMessage" />

      <div v-if="selectedSkillType == SkillType.ac">
        <ul class="skillList" density="compact">
          <li v-for="skill in character.activeSkill" :key="skill.skill_id" @click="selectSkill(skill)" class="skillItem"
            :class="{ 'selected-tab': skill === selectedSkill }">

            <span class="marginLeft1">{{ skill.name }}</span>
            <span class="costValue">{{ skill.consume_amount }}</span>
            <span class="consumeType">{{ skill.consume_type }}</span>

          </li>
        </ul>
      </div>
    </div>
    <SkillInfo v-if="selectedSkill" class="skillInfo" :skillInfo="selectedSkill.info" />
  </div>


  <!-- <div class="underLine"></div>
  <div v-if="selectedSkill" class="skillDetail">
    {{ selectedSkill.info }}
  </div> -->
</template>

<script setup lang="ts">

import { ref } from 'vue';
import PassiveSkill from '@/Class/PassiveSkill.ts';
import ActiveSkill from '@/Class/ActiveSkill.ts';
import Character from '@/Class/Character.ts';
import SkillInfo from '@/UI//SkillInfo.vue';

import Config from '@/config.ts';
import ErrorMessage from '@/components/information/Information.vue';

const props = defineProps({
  character: { type: Character },
  processBattle: { type: Boolean }
});

//スキルタイプ定義
enum SkillType {
  pa = 'PASSIVE',
  ac = 'ACTIVE'
}
const skillType: SkillType[] = [SkillType.pa, SkillType.ac]

const showError = ref(false);
const errorMessage = Config.msgSkillCostError

const selectedSkillType = ref<SkillType | undefined>(undefined);
if (props.processBattle == true) {
  selectedSkillType.value = SkillType.ac
} else {
  selectedSkillType.value = SkillType.pa
}
const selectSkillType = (type: SkillType) => {
  selectedSkillType.value = type;
  selectedSkill.value = null;
};
// 選択したスキル
const selectedSkill = ref<PassiveSkill | ActiveSkill | null>(null);
const selectSkill = (skill: PassiveSkill | ActiveSkill) => {
  if (props.processBattle && skill instanceof ActiveSkill && selectedSkill.value == skill) {
    useSkill(skill)
  }
  selectedSkill.value = skill;
};

const equipbutton = (equip: boolean) => {
  if (equip) {
    return "Unequip"
  } else {
    return "Equip"
  }
}

const totalCost = ref<Number>(0);
// スキル変更
const updateSkill = (skill: PassiveSkill) => {
  if (props.character) {
    // 装着済みのスキルコスト
    totalCost.value = props.character.passiveSkill.filter(skill => skill.equip).reduce((total, skill) => total + skill.skill_cost, 0)
    if (skill.equip) {
      skill.equip = false;
    } else {
      //スキル装着時、コストを確認
      if (Number(totalCost.value) + skill.skill_cost > props.character.passiveCost) {
        //コスト制限を超えたとき、エラーメッセージ 
        showError.value = true;
      } else {
        skill.equip = true;
      }
    }
  }
};

// 戦闘スキル決定
const emit = defineEmits(["useSkill"])
const useSkill = (skill: ActiveSkill) => {
  emit('useSkill', skill)
};

const hideErrorMessage = () => {
  showError.value = false;
};

</script>

<style scoped>
.SkillUI {
  font-family: 'Century';
  color: #F2EDD5;
  font-size: 2.8vh;
  position: relative;
  /* height: 53vh;
  width: 25vw; */
}

.skillSelect {
  background: rgba(59, 65, 60, 0.7);
  background-image: url('/img/flame/flame032703.png');
  background-size: 100% 100%;
  padding: 1.3vh 0vw;
  height: 55vh;
  width: 25vw;
}

.skillType {
  display: flex;
  text-align: center;
  list-style-type: none;
  color: #E2D8A6;
  /* padding: 0vh 0.7vw; */
  padding: 0vh 0.6vw;
  font-size: 3.4vh;
  font-family: "Vidaloka";
}

.skillType li {
  width: 100%;
}

.selected-tab {
  background: #624CAB80;
}

.underLine {
  margin: 0vh 0.5vw;
  border-bottom: 0.5vh solid #3CD0E3;
}

.skillList {
  height: 47vh;
  overflow-y: auto;
  color: #F2EDD5;
  margin: 0.7vh 0.7vw;
  list-style-type: none;
}

.marginEquip {
  margin-left: 1.3vw;
}

.marginLeft1 {
  margin-left: 1vw;
}

.marginLeft05 {
  margin-left: 0.5vw;
}

.consumeType {
  position: absolute;
  right: 4vw;
  font-family: "Verily Serif Mono";
  color: #E2D8A6;
}

.costValue {
  float: right;
  margin-right: 0.5vw;
}

.buttonPosition {
  position: absolute;
  right: 3vw;
  margin-top: -0.8vh;
}

.totalCost {
  margin-left: 2vw;
}

.skillOk {
  position: absolute;
  right: 6vw;
  margin-top: -0.7vh;
  width: 6vw;
  background: #624CAB;
}

.equip {
  background: #0CCA4A;
}

.unequip {
  background: #F34213;
}

.skillDetail {
  /* font-family: "Verily Serif Mono"; */
  padding: 0.5vh 1.5vw;
}

.status-key {
  font-family: "Verily Serif Mono";
  padding-left: 2vw;
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

.statuskinds {
  margin-left: 0.5vw;
  font-family: "Verily Serif Mono";
  color: #E2D8A6;
}

.skillInfo {
  /* position: absolute;
  right: 2vw;
  bottom: 2vh; */
}
</style>