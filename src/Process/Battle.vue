<template>
  <ImgEncount v-if="battleProcess == 'encount'" />
  <BattleResult v-if="battleProcess == 'result'" :getGold="getGold" :getExp="getExp" />
  <div v-if="battleProcess !== 'encount' && battleProcess !== 'result'" class=BattleUI>
    <TurnOrder class=turnOrder :turnOrder="turnOrder" :numOrder="numOrder" />
    <!-- monster  -->
    <div class=monsterGrid>
      <div v-for="(cell, index) in monsterGrid" :key="index" class="monsterCell"
        :class="{ pickMonster: isTarget(cell), currentMonster: cell != null && cell == currentMonster }">

        <div v-if="cell" @click="clickTarget(index, cell)" @mouseover="overTarget(index, cell)"
          @mouseout="outTarget(index)">
          <!-- monster effect -->
          <span v-for="(effect, effectIndex) in toMonsterEffect[index]" :key="effectIndex">
            <span v-if="effect.visible" class="monsterEffect" :style="effect.position">{{ effect.effect }}</span>
          </span>
          <!-- 単体用スキル -->
          <img v-if="showOneSkill[index]" :src="skillAnime" class="skillOneEffect" alt="skill effect"
            @load="loadSkillAnime(index)">
          <img :src="cell.GraphicUrl" class="monsterImage" alt="monsterImage">
        </div>

        <div v-if="selectMonster && selectMonster == cell" class="monsterInfo">
          <div class="monsterName">{{ selectMonster.name }}</div>
          <div class="progress-bar-hp">
            <ProgressBarHp :nowHP="selectMonster.nowHP" :maxHP="selectMonster.HP" />
          </div>
        </div>

      </div>
    </div>

    <!-- <div class="monsterInfo" v-if="selectMonster">
      <div class="monsterName">{{ selectMonster.name }}</div>
      <div class="progress-bar-hp">
        <ProgressBarHp :nowHP="selectMonster.nowHP" :maxHP="selectMonster.HP" />
      </div>
    </div> -->

    <!-- 複数スキル -->
    <img v-if="showAreaSkill == Config.targetRowEnemy" :src="skillAnime" class=skillRowEffect
      :style="{ top: skillTop + 'vh' }" alt="skill effect" @load="loadSkillAnime()">
    <img v-if="showAreaSkill == Config.targetColumnEnemy" :src="skillAnime" class=skillColEffect
      :style="{ left: skillLeft + 'vw' }" alt="skill effect" @load="loadSkillAnime()">
    <img v-if="showAreaSkill == Config.targetAll" :src="skillAnime" class=skillAllEffect alt="skill effect"
      @load="loadSkillAnime()">

    <div v-if="battleProcess == 'startTurn'" class="startTurn">{{ numTurn }} Turn Start</div>
    <div v-if="battleProcess == 'endBattle'" class="endBattle">Battle Ends</div>

    <!-- character  -->
    <CurrentUI class="CurrentUI" :currentCharacter="currentCharacter" :targetCharacter="targetCharacter"
      :showCharacterEffect="showCharacterEffect" :toCharacterEffect="toCharacterEffect"
      :toCharacterEffectType="toCharacterEffectType" :showCharacterAnime="showCharacterAnime"
      :toCharacterAnime="toCharacterAnime" :selectionMode="selectionMode" @selectCharacter='selectCharacter' />

    <!-- <div class="monsterInfo" v-if="battleProcess == 'selectTarget' && selectMonster"> -->
    <ActionLog ref="actionLog" class="actionLog" />

    <!-- icon  -->
    <div v-if="battleProcess == 'characterTurn' || battleProcess == 'selectTarget'">
      <IconAttack id="IconAttack" class="IconAttack" @click="clickIcon(Config.actionAttack)" :style="styles.AttackBtn" />
      <IconSkill v-if="characterType == Config.actionSkill" id="IconAttack" class="IconSkill"
        @click="clickIcon(Config.actionSkill)" :style="styles.SkillBtn" />
      <IconMagic v-else id="IconAttack" class="IconSkill" @click="clickIcon(Config.actionSkill)"
        :style="styles.SkillBtn" />

      <IconBag id="IconAttack" class="IconBag" @click="clickIcon(Config.actionItem)" :style="styles.ItemBtn" />

      <SkillUI v-if="showSkillList" class="SkillUI" :character="currentCharacter" :processBattle="showSkillList"
        @useSkill='useSkill' />

      <div v-if="currentAction == Config.actionSkill && battleProcess == 'selectTarget'">
        <!-- <div class="attackName">{{ activeSkill.name }}</div> -->
        <SelectName class="attackName" :inside="activeSkill.name"></SelectName>
        <SkillInfo class="skillInfo" :skillInfo="activeSkill.info" />
      </div>
      <!-- <div v-if="currentAction == Config.strAttack" class="attackName">Normal Attack</div> -->
      <SelectName v-if="currentAction == Config.actionAttack" class="attackName" :inside="Config.actionAttack">
      </SelectName>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject, reactive, CSSProperties } from 'vue'
import TurnOrder from './TurnOrder.vue';
import BattleResult from './BattleResult.vue';
import CurrentUI from '@/UI/Current.vue';
import SkillUI from '@/UI//Skill.vue';
import SkillInfo from '@/UI//SkillInfo.vue';
import ActionLog from '@/UI/ActionLog.vue';
import { LogService } from './LogService.ts';


import Character from '@/Class/Character.ts';
import Monster from '@/Class/Monster.ts';
import ActiveSkill from '@/Class/ActiveSkill.ts';
import { SkillEffect } from '@/Class/ActiveSkill.ts';

import Config from '@/config.ts';
import { timer, randomNum, random } from '@/Process/Common.ts';

//components import
import ProgressBarHp from '@/components/progress/ProgressBarHp.vue';
import ImgEncount from '@/components/etc/ImgEncount.vue';
import IconAttack from '@/components/icon/IconAttack.vue';
import IconSkill from '@/components/icon/IconSkill.vue';
import IconMagic from '@/components/icon/IconMagic.vue';
import SelectName from '@/components/flame/Flame1.vue';
import IconBag from '@/components/icon/IconBag.vue';

//normal attack import
import normalSlash from '/effect/normal/slash.gif';
import normalShot from '/effect/normal/shot.gif';
import normalHit from '/effect/normal/hit.gif';

//monsterスキル表示
import monsterClaw from '/effect/monster/claw1.gif';

//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()
//音楽管理
import { useAudioStore } from '@/stores/Audio';
const audioStore = useAudioStore()

import { characterAssist } from '@/Process/CharacterAssist.ts';

//戦闘用のクラス
type fighter = Character | Monster
///////////////////////////////////////////////////////////
// monsterGridへの表示用
///////////////////////////////////////////////////////////
const monsterGrid = ref(Array(6).fill(null));
const monsterList = inject('monsterList') as Monster[];
const selectedMonsters: Monster[] = [];
const toMonsterEffect = ref<{ effect: string | number, position: { top: string, left: string }, visible: boolean }[][]>(Array(6).fill([]));
//戦闘表示用
const currentMonster = ref<Monster | undefined>(undefined)   //行動モンスター
const targetMonster = ref<Monster[]>([]) //対象モンスター
//スキル表示用
const skillAnime = ref<string>('')
const showOneSkill = ref<boolean[]>([]);
const showAreaSkill = ref<string>('')
const skillTop = ref<number>(0)
const skillLeft = ref<number>(0)
//選択中のモンスター情報
const selectMonster = ref<Monster | undefined>(undefined)
///////////////////////////////////////////////////////////
// キャラクター向け(CurrentUI)表示用
///////////////////////////////////////////////////////////
const currentCharacter = ref<Character>()   //行動キャラ
const targetCharacter = ref<Character[]>([])   //攻撃対象キャラ
const showCharacterAnime = ref<boolean[]>(new Array(partyStore.characters.length).fill(false));;
const toCharacterAnime = ref<string | null>(null)
const showCharacterEffect = ref<boolean[]>(new Array(partyStore.characters.length).fill(false));
const toCharacterEffect = ref<(string | number | null)[]>(new Array(partyStore.characters.length).fill(null));
const toCharacterEffectType = ref<string>()
///////////////////////////////////////////////////////////
// BattleResult表示用
///////////////////////////////////////////////////////////
const getGold = ref<number>(0)
const getExp = ref<number>(0)
///////////////////////////////////////////////////////////
// 戦闘管理
///////////////////////////////////////////////////////////
const turnOrder = ref<fighter[]>([])
const numOrder = ref<number>(0)
const battleProcess = ref<string | null>('encount');
let resolveSelectPromise: Function | null = null;
const characterType = ref<string>('') //物理タイプと魔法タイプでのアイコン切り替え
const styles = reactive<Record<string, CSSProperties>>({
  AttackBtn: {},
  SkillBtn: {},
  ItemBtn: {}
});

///////////////////////////////////////////////////////////
// 音楽関連の設定
///////////////////////////////////////////////////////////
const alyBattleMusic = new Array(
  Config.mscBattle1,
  Config.mscBattle2,
  Config.mscBattle3,
  Config.mscBattle4,
  Config.mscBattle5
)

///////////////////////////////////////////////////////////
// 共通関数
///////////////////////////////////////////////////////////
//キャラクター配列からindex取得
const getCharacterIndex = (character: Character) => {
  return partyStore.characters.findIndex(c => c === character);
}
//monsteGridから最小のindex取得
// const getMinGridIndex = () => {
//   return monsterGrid.value.findIndex(monster => monster !== null);
// }
//monsteGridから最大のindex取得
const getMaxGridIndex = () => {
  return monsterGrid.value.reduceRight((maxIndex, current, index) => {
    return maxIndex == 0 ? current !== null ? index : maxIndex : maxIndex;
  }, 0);
};
//ログ追加処理
const actionLog = ref(null);
const logService = new LogService();
const addNewLog = (log: string, kind: number) => logService.addNewLog(log, kind);
///////////////////////////////////////////////////////////
// 戦闘処理
///////////////////////////////////////////////////////////
//mount時にモンスター配置
onMounted(async () => {
  setMusic()
  await timer(Config.awaitTime);  //
  setMonster()
  battleProcess.value = "startTurn"
  // anime({
  //   targets: '.BattleUI',
  //   scale: [0.1, 1],
  //   duration: 2000,
  //   rotate: 360,
  //   // easing: 'linear' // 加減速の種類
  //   easing: 'easeInOutCubic' // 加減速の種類
  // });
  // await timer(3000);  //
  // 戦闘ループ
  // while (battleProcess.value !== "endBattle") {
  while (battleProcess.value !== "result") {
    //ターン開始を表示し、スタート
    battleProcess.value = "startTurn"
    await startTurn()
    // startTurn()
  }
})

function setMusic() {
  let indexMusic: number
  indexMusic = Math.floor(Math.random() * alyBattleMusic.length);
  audioStore.playBgm(alyBattleMusic[indexMusic])
}

//
function setMonster() {
  // 出現モンスターを作成
  const numMonsters = randomNum(Config.monNumMin, Config.monNumMax)
  for (let i = 0; i < numMonsters; i++) {
    const newMonster = new Monster(monsterList[random(monsterList.length)]);
    selectedMonsters.push(newMonster);
  }

  // モンスター配置場所を決定
  let positions: number[] = [];
  while (positions.length < selectedMonsters.length) {
    const position: number = random(6);

    if (!positions.includes(position)) {
      positions.push(position);
    }
  }

  // グリッドにモンスター配置、selectedMonstersに配置場所を設定
  positions.forEach((position, index) => {
    selectedMonsters[index].order = position;
    monsterGrid.value[position] = selectedMonsters[index];
  });
  console.log(selectedMonsters)
}
let numTurn = 1
// ターン開始時に呼び出される関数
async function startTurn() {
  // battleProcess.value = ""
  currentCharacter.value = undefined
  // 行動順を決定
  turnOrder.value = [
    ...partyStore.characters.filter(character => character.nowHP > 0),
    ...selectedMonsters.filter(monster => monster.nowHP > 0)
  ];
  // SPD値を基準にソート
  turnOrder.value.sort((a: fighter, b: fighter) => {
    let aSPD = a instanceof Character ? a.totalStatus.SPD : a.SPD;
    let bSPD = b instanceof Character ? b.totalStatus.SPD : b.SPD;
    return bSPD - aSPD;
  });
  await timer(Config.awaitTime);  //
  // 行動順にキャラクターまたはモンスターの行動を実行
  for (let i = 0; i < turnOrder.value.length; i++) {
    let currentTurn = turnOrder.value[i];
    console.log("currentTurn", currentTurn)
    numOrder.value = i
    selectionMode.value = ''
    targetCharacter.value = [];
    targetMonster.value = []
    // HPが0以上のキャラクターまたはモンスターのみが行動できる
    if (currentTurn.nowHP > 0) {
      if (currentTurn instanceof Character) {
        currentCharacter.value = currentTurn;
        await characterTurn(currentTurn)
        currentCharacter.value = undefined;
        currentAction = null
        selectMonster.value = undefined
      } else if (currentTurn instanceof Monster) {
        // モンスターの行動を処理するコード
        currentMonster.value = currentTurn;
        await monsterTurn(currentTurn);
        currentMonster.value = undefined;
      }
    }
    // モンスター全員のHPが0になったら戦闘終了
    if (!selectedMonsters.some(monster => monster.nowHP > 0)) {
      battleProcess.value = "endBattle"
      await timer(Config.awaitTime);
      battleProcess.value = "result"
      break;
      // endBattle()
    }
    // キャラクター全員のHPが0になったら全滅
    if (!partyStore.characters.some(character => character.nowHP > 0)) {
      battleProcess.value = "result"
      break;
    }
    await timer(Config.nextTime)
  }
  endTurn()
  numTurn += 1
  await timer(Config.nextTime)
}
// キャラクターの行動を処理する非同期関数
async function characterTurn(character: Character) {
  battleProcess.value = "characterTurn"
  if (character.class == Config.clsPriest) {
    characterType.value = Config.actionMagic
  } else {
    characterType.value = Config.actionSkill
  }
  // ターゲットの選択を待つ
  await waitForTargetSelection();
  battleProcess.value = ""
  // 選択されたモンスターに対して攻撃を行う
  await characterAction(character);
  resetStyle(true);
}
// アイコンがクリックされたときに呼び出される関数
const showSkillList = ref(false)  //スキルUI表示
const showItemList = ref(false)  //アイテムUI表示
let currentAction: string | null;
function clickIcon(iconId: string) {
  battleProcess.value = "characterTurn"
  showSkillList.value = false
  showItemList.value = false
  // 同じアイコンを押した一旦リセット
  if (currentAction === iconId) {
    resetStyle(true);
    currentAction = null;
  } else {
    resetStyle();
    styles[iconId] = { transform: 'scale(1.5) translateY(-20%)', opacity: 1 };
    currentAction = iconId;
    switch (iconId) {
      case Config.actionAttack:
        selectionMode.value = Config.targetOneEnemy
        selectMonster.value = monsterGrid.value[getMaxGridIndex()]
        setTarget(getMaxGridIndex())
        battleProcess.value = 'selectTarget'
        break
      case Config.actionSkill:
      case Config.actionMagic:
        showSkillList.value = true
        break
      case Config.actionItem:
        showItemList.value = true
        break
    }
    //通常攻撃
    // if (iconId == Config.actionAttack) {
    //   selectionMode.value = Config.targetOneEnemy
    //   selectMonster.value = monsterGrid.value[getMaxGridIndex()]
    //   setTarget(getMaxGridIndex())
    //   battleProcess.value = 'selectTarget'
    // } else {
    //   showSkillList.value = true
    // }
  }
}
// activeSkill選択時
const selectionMode = ref('');
// let activeSkill: ActiveSkill | undefined
let activeSkill: ActiveSkill
const useSkill = (skill: ActiveSkill) => {
  showSkillList.value = false
  activeSkill = skill
  selectionMode.value = skill.skill_effect[0].target_type
  //初期ターゲットを表示
  setTarget(getMaxGridIndex())
  battleProcess.value = 'selectTarget'
}
const isTarget = (cell: Monster) => {
  if (battleProcess.value != 'selectTarget') return false
  if (!targetMonster.value) return false
  return targetMonster.value.includes(cell)
}
//ターゲット設定
function setTarget(index: number) {

  targetCharacter.value = [];
  targetMonster.value = []
  switch (selectionMode.value) {
    case Config.targetMyself:
      targetCharacter.value.push(currentCharacter.value!)
      break
    case Config.targetOneFriend:
      targetCharacter.value.push(currentCharacter.value!)
      break
    case Config.targetAllFriends:
      targetCharacter.value = partyStore.characters.filter(character => character.nowHP > 0)
      break
    case Config.targetRandomFriend:
      break
    case Config.targetOneEnemy:
      targetMonster.value.push(monsterGrid.value[index]);
      break
    case Config.targetColumnEnemy:
      targetColumn(index)
      break
    case Config.targetRowEnemy:
      targetRow(index)
      break
    case Config.targetAllEnemy:
      targetMonster.value = monsterGrid.value.filter(monster => monster !== null);
      break
    case Config.targetRandomEnemy:
      targetMonster.value = monsterGrid.value.filter(monster => monster !== null);
      break
    default:
  }
}
//列指定スキル
const targetColumn = (index: number) => {
  for (let i = index % 3; i < monsterGrid.value.length; i += 3) {
    if (monsterGrid.value[i] !== null) {
      targetMonster.value.push(monsterGrid.value[i]);
    }
  }
};
//行指定スキル
const targetRow = (index: number) => {
  let start = (index <= 2) ? 0 : 3;
  let end = (index <= 2) ? 2 : 5;
  for (let i = start; i <= end; i++) {
    if (monsterGrid.value[i] !== null) {
      targetMonster.value.push(monsterGrid.value[i]);
    }
  }
}
// キャラクター指定スキルにて対象選択後
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
//アイコンの初期化
const resetStyle = (resetAll = false) => {
  styles.AttackBtn = resetAll ? {} : { opacity: 0.5 };
  styles.SkillBtn = resetAll ? {} : { opacity: 0.5 };
  // styles.MagicBtn = resetAll ? {} : { opacity: 0.5 };
};
// 非同期関数でターゲットの選択を待つ
async function waitForTargetSelection() {
  return new Promise<void>((resolve) => {
    resolveSelectPromise = resolve;
  });
}
// モンスターを選択中に呼び出す関数
function overTarget(index: number, cell: Monster) {
  if (!monsterGrid.value[index]) return
  //モンスター情報表示
  selectMonster.value = cell;
}
// モンスターからマウスを外したときに呼び出す関数
function outTarget(index: number) {
  if (!monsterGrid.value[index]) return
  //モンスター情報非表示
  selectMonster.value = undefined;
}

// モンスターが選択されたときに呼び出される関数
function clickTarget(index: number, cell: Monster) {
  if (!monsterGrid.value[index]) return
  //ターゲット設定
  selectMonster.value = cell;
  if (battleProcess.value !== "selectTarget") return
  //選択中のモンスターの場合、行動決定
  if (targetMonster.value.includes(monsterGrid.value[index])) {
    if (resolveSelectPromise) {
      resolveSelectPromise();
      resolveSelectPromise = null;
    }
  } else {
    //選択中以外はターゲット再設定
    setTarget(index)
  }
}

// モンスターの行動を処理する関数
async function monsterTurn(monster: Monster) {
  battleProcess.value = "monsterTurn"
  await monsterAction(monster, selectMonsterAction()!);
}
// モンスターの攻撃対象を決定
const selectMonsterAction = () => {
  // HPが0以上のキャラクターのみが攻撃を受けることができる
  const aliveCharacters = partyStore.characters.filter(character => character.nowHP > 0);

  // キャラクターが選ばれる確率を計算
  const totalHate = aliveCharacters.reduce((sum, character) => sum + character.totalStatus.Hate, 0);
  const probabilities = aliveCharacters.map(character => character.totalStatus.Hate / totalHate);

  // 確率に基づいてキャラクターを選択
  const rand = Math.random();
  let sum = 0;
  for (let i = 0; i < probabilities.length; i++) {
    sum += probabilities[i];
    if (rand < sum) {
      return aliveCharacters[i];
    }
  }
}
//キャラクター行動
let animeTime: number
let effectTime: number
let actionTimes: number

async function characterAction(character: Character) {
  let gridIndex: number
  let monster: Monster
  // monsterEffect.value = []
  if (currentAction == Config.actionAttack) {
    //
    addNewLog(character.name + "'s " + Config.actionAttack, 1)
    //通常攻撃
    monster = targetMonster.value[0]
    gridIndex = monster.order!
    toMonsterEffect.value[gridIndex] = []
    characterAttack(character, monster, gridIndex)
    //アニメーション表示
    animeTime = Config.normalAttackTime
    normalAttackAnime(character)
    await timer(Config.normalAttackTime + Config.effectTime);  //
  } else {
    //スキル
    addNewLog(character.name + "'s " + activeSkill.name, 1)
    //
    for (const skillEffect of activeSkill.skill_effect) {
      animeTime = skillEffect.anime_time
      effectTime = 0
      actionTimes = 0
      //1回目と対象タイプが異なる
      if (selectionMode.value != skillEffect.target_type) {

        //対象タイプ毎に対象を設定
        setTarget2nd(skillEffect.target_type, character)
      }
      selectionMode.value = skillEffect.target_type

      //味方対象スキル
      if (skillEffect.target == 1) {
        toCharacterEffect.value = characterAssist(skillEffect, activeSkill.name, targetCharacter.value, character)
        toCharacterSkillAnime(skillEffect)

      } else if (skillEffect.target == 2) {
        //敵対象スキル
        toMonsterEffect.value = Array.from({ length: 6 }, () => []);
        if (skillEffect.target_type == Config.targetRandomEnemy) {
          //攻撃回数の攻撃
          for (let time = 1; time <= skillEffect.effect_times; time++) {
            //monsterからランダムに対象を設定
            monster = targetMonster.value[random(targetMonster.value.length)]
            gridIndex = monster.order!
            // toMonsterEffect.value[gridIndex] = []
            characterAttack(character, monster, gridIndex, skillEffect)
            actionTimes += 1
          }
        } else {
          //ターゲットの数
          for (let monster of targetMonster.value) {
            gridIndex = monster.order!
            // toMonsterEffect.value[gridIndex] = []
            //攻撃回数の攻撃
            for (let time = 1; time <= skillEffect.effect_times; time++) {
              characterAttack(character, monster, gridIndex, skillEffect)
              actionTimes += 1
            }
          }
        }
        //アニメーション表示
        skillAttackAnime(skillEffect)
      }
      effectTime = Config.effectTime + actionTimes * Config.delayTime
      await timer(animeTime + effectTime);
    }
  }
  //HPが0のモンスターをgridから削除
  for (let monster of targetMonster.value) {
    if (monster.nowHP == 0) {
      monsterGrid.value = monsterGrid.value.map(cell => cell === monster ? null : cell);
    }
  }
}

//2回目以降のスキル対象を設定
function setTarget2nd(targetType: string, character: Character) {
  targetCharacter.value = [];
  targetMonster.value = []
  switch (targetType) {
    case Config.targetMyself:
      targetCharacter.value.push(character)
      break
    case Config.targetAllFriends:
      targetCharacter.value = partyStore.characters.filter(character => character.nowHP > 0)
      break
    case Config.targetRandomFriend:
      break
    case Config.targetAllEnemy:
      targetMonster.value = monsterGrid.value.filter(monster => monster !== null);
      break
    case Config.targetRandomEnemy:
      targetMonster.value = monsterGrid.value.filter(monster => monster !== null);
      break
    default:
  }
}
// キャラクターの攻撃処理
function characterAttack(character: Character, monster: Monster, gridIndex: number, skillEffect?: SkillEffect) {
  let attackValue: number = 0
  let deffenceValue: number = 0
  let effectAmount: number = 0
  let damageRate: number = 0
  let damage: number = 0
  //命中率による命中の有無
  if (calcHit(character.totalStatus.HitRate, monster.SPD)) {
    //物理/魔法による設定
    if ((currentAction == Config.actionAttack) || (currentAction == Config.actionSkill && skillEffect?.base_status == Config.statusATK)) {
      //物理属性
      attackValue = character.totalStatus.ATK
      deffenceValue = monster.DEF
    } else if (currentAction == Config.actionSkill && skillEffect?.base_status == Config.statusMGC) {
      //魔法属性
      attackValue = character.totalStatus.MGC
      deffenceValue = monster.MDF
    }
    //クリティカル発生の有無
    damageRate = calcCrit(character.totalStatus.CritRate, deffenceValue) ? Config.critDamageRate : Config.normalDamageRate
    //
    effectAmount = currentAction == Config.actionAttack ? 1 : skillEffect!.effect_amount
    //ダメージ計算
    damage = Math.floor((attackValue - deffenceValue / 1.5) * effectAmount * damageRate)
    // debug st
    // console.log('damage', damage)
    console.log('characterAttack', attackValue)
    // console.log('deffenceValue', deffenceValue)
    // console.log('effectAmount', effectAmount)
    // console.log('damageRate', damageRate)
    // debug ed
    damage = damage < 0 ? 0 : damage
    const effect = addMonsterEffect(damage)
    monster.nowHP = damage > monster.nowHP ? 0 : monster.nowHP - damage
    if (monster.nowHP == 0) {
      getExp.value += monster.EXP
      getGold.value += monster.GOLD
    }
    //ダメージ追加  各gridに対して表示用の配列を作成して表示
    toMonsterEffect.value[gridIndex].push(effect);
    //
    addNewLog("> " + damage + " damage to " + monster.name, 1)
    //
  } else {
    //miss追加
    const effect = addMonsterEffect(Config.strMiss)
    toMonsterEffect.value[gridIndex].push(effect);
  }
}
// monster向けエフェクトの追加
const addMonsterEffect = (effect: string | number) => {
  // ダメージエフェクトを追加
  const position = {
    top: randomNum(Config.minEffectTop, Config.maxEffectTop) + '%',
    left: randomNum(Config.minEffectLeft, Config.maxEffectLeft) + '%'
  };
  return { effect, position, visible: false };
}
function calcHit(rate: number, deffence: number): boolean {
  let CritRate = rate - Math.floor(deffence / 10);
  let randomValue = Math.random(); // 0から1までのランダムな値を生成
  // ランダムな値がクリティカル率（0から1の範囲）以下であればクリティカル、以外は通常
  return randomValue <= CritRate / 100; // クリ率を100で割って0から1の範囲にする
}
function calcCrit(rate: number, SPD: number): boolean {
  let hitRate = rate - Math.floor(SPD / 5);
  let randomValue = Math.random(); // 0から1までのランダムな値を生成
  // ランダムな値が命中率（0から1の範囲）以下であれば命中、そうでなければミス
  return randomValue <= hitRate / 100; // 命中率を100で割って0から1の範囲にする
}
// キャラクター向けの補助処理
// function characterAssist(skillEffect: SkillEffect, skillName: string, character?: Character) {
//   console.log('characterAssist',skillName,skillEffect)
//   let assistValue: number = 0
//   //効果量の算出
//   if (skillEffect.base_status == Config.baseFixValue || skillEffect.base_status == Config.baseFixRate) {
//     assistValue = skillEffect.effect_amount
//   } else {
//     assistValue = character!.totalStatus[skillEffect.base_status] * skillEffect.effect_amount
//   }
//   //effect_type毎の処理
//   switch (skillEffect.effect_type) {
//     //回復
//     case Config.effectHeal:
//       switch (skillEffect.target_type) {
//         case Config.targetMyself:
//         case Config.targetOneFriend:
//           // if (!targetCharacter.value) return;
//           characterHeal(targetCharacter.value[0], assistValue, skillEffect.effect_kind)
//           break
//         case Config.targetAllFriends:
//           for (let chara of partyStore.characters) {
//             characterHeal(chara, assistValue, skillEffect.effect_kind)
//           }
//           break
//         case Config.targetRandomFriend:
//           break
//         default:
//       }
//       break
//     //バフ
//     case Config.effectBuff:
//       switch (skillEffect.target_type) {
//         case Config.targetMyself:
//         case Config.targetOneFriend:
//           if (!targetCharacter.value) return;
//           targetCharacter.value[0].addBuff(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
//           targetCharacter.value[0].calculateTotalStatus()
//           break
//         case Config.targetAllFriends:
//           for (let chara of partyStore.characters) {
//             chara.addBuff(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
//             chara.calculateTotalStatus()
//           }
//           break
//         case Config.targetRandomFriend:
//           break
//         default:
//       }
//       break
//     //状態追加
//     case Config.effectCondition:
//       switch (skillEffect.target_type) {
//         case Config.targetMyself:
//         case Config.targetOneFriend:
//           // if (!targetCharacter.value) return;
//           targetCharacter.value[0].addCondition(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
//           break
//         case Config.targetAllFriends:
//           for (let chara of partyStore.characters) {
//             chara.addCondition(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
//           }
//           break
//         case Config.targetRandomFriend:
//           break
//         default:
//       }
//       break
//     default:
//   }
//   //味方向けのアニメーション
//   toCharacterSkillAnime(skillEffect)
//   // toCharacterSkillAnime('assist', skillEffect, assistValue, )
// }
//回復処理
function characterHeal(character: Character, assistValue: number, effect_kind: string) {
  console.log('characterHeal', character, effect_kind, assistValue)
  if (effect_kind == Config.statusnowHP) {
    character.nowHP = character.nowHP + assistValue > character.totalStatus.HP ? character.totalStatus.HP : character.nowHP + assistValue
  } else if (effect_kind == Config.statusnowMP) {
    character.nowMP = character.nowMP + assistValue > character.totalStatus.MP ? character.totalStatus.MP : character.nowMP + assistValue
  }
  toCharacterEffect.value[getCharacterIndex(character)] = assistValue
  actionTimes += 1
  //
  addNewLog("> Recovers " + character.name + "'s " + effect_kind + " by " + assistValue, 1)
}

//通常攻撃のアニメーション
function normalAttackAnime(character: Character) {
  //attack animation
  if (character.equipment.WEP) {
    switch (character.equipment.WEP.kind) {
      case Config.wepSword:
      case Config.wepAxe:
      case Config.wepDagger:
        skillAnime.value = normalSlash
        break
      case Config.wepWand:
        skillAnime.value = normalHit
        break
      case Config.wepBow:
      case Config.wepSpear:
        skillAnime.value = normalShot
        break
      default:
    }
  } else {
    skillAnime.value = normalHit
  }
  //skill show position
  let cellIndex = targetMonster.value[0].order!
  showOneSkill.value[cellIndex] = true
  //
  // setTimeout(() => {
  //   showAreaSkill.value = '';
  //   showOneSkill.value[cellIndex] = false
  //   //エフェクト表示
  //   showMonsterEffect()
  // }, Config.normalAttackTime);
}
//スキル攻撃のアニメーション
function skillAttackAnime(skillEffect: SkillEffect) {
  // if (skillEffect.skill_anime == '') return
  //skill animation
  skillAnime.value = skillEffect.skill_anime
  //skill show position
  let cellIndex = targetMonster.value[0].order!
  if (skillEffect.target_type == Config.targetOneEnemy) {
    //target one enemy
    showOneSkill.value[cellIndex] = true
  } else {
    //target more enemy
    showAreaSkill.value = skillEffect.target_type
    switch (skillEffect.target_type) {
      case Config.targetColumnEnemy:
        // showAreaSkill.value = 'column'
        skillLeft.value = 7 + (cellIndex % 3) * 27; // 
        break
      case Config.targetRowEnemy:
        // showAreaSkill.value = 'row'
        // skillTop.value = 40 - Math.floor(cellIndex / 3) * 30; // 
        skillTop.value = 15 + Math.floor(cellIndex / 3) * 25; // 
        break
      case Config.targetAllEnemy:
        showAreaSkill.value = Config.targetAll
        break
      case Config.targetRandomEnemy:
        showAreaSkill.value = Config.targetAll
        break
      default:
    }
  }
  //
  // setTimeout(() => {
  //   showAreaSkill.value = '';
  //   showOneSkill.value[cellIndex] = false
  //   //モンスターのエフェクト表示
  //   showMonsterEffect()
  // }, animeTime);
}

// スキルロード後
const loadSkillAnime = (index: number = 0) => {
  setTimeout(() => {
    showAreaSkill.value = '';
    showOneSkill.value[index] = false
    //モンスターのエフェクト表示
    showMonsterEffect()
  }, animeTime);
}

//キャラクター向けのアニメーション、エフェクト表示
function toCharacterSkillAnime(skillEffect: SkillEffect) {
  console.log('skillEffect', skillEffect)
  switch (skillEffect.target_type) {
    case Config.targetMyself:
    case Config.targetOneFriend:
      let characterIndex = getCharacterIndex(targetCharacter.value[0])
      toCharacterAnime.value = skillEffect.skill_anime
      showCharacterAnime.value[characterIndex] = true // アニメーションを表示にする
      setTimeout(() => {
        showCharacterAnime.value[characterIndex] = false // アニメーションを非表示にする
        toCharacterAnime.value = null // 
        applyEffectToCharacters(skillEffect.effect_type)
      }, animeTime) // アニメーションをtoCharacterAnimeTimeの時間表示した後に非表示にする
      break
    case Config.targetAllFriends:
      showAreaSkill.value = Config.targetAll
      skillAnime.value = skillEffect.skill_anime
      setTimeout(() => {
        skillAnime.value = '';
        showAreaSkill.value = '';
        applyEffectToCharacters(skillEffect.effect_type)
      }, animeTime);
      break
    case Config.targetRandomFriend:
      break
    default:
  }
}
//キャラクター向けのアニメーション、エフェクトを表示
function applyEffectToCharacters(effectType: string) {
  let delay = Config.delayTime;
  toCharacterEffectType.value = effectType;
  for (let i = 0; i < partyStore.characters.length; i++) {
    console.log('applyEffectToCharacters', toCharacterEffect.value[i], toCharacterEffectType.value)
    if (toCharacterEffect.value[i] == null) continue;
    setTimeout(() => {
      // toCharacterEffect.value[i] = effectDetails.value;
      showCharacterEffect.value[i] = true;
      setTimeout(() => {
        showCharacterEffect.value[i] = false
        toCharacterEffect.value[i] = null
      }, Config.effectTime);
    }, delay);
    delay += Config.delayTime;
    effectTime = Config.effectTime + delay
  }
}
//モンスター対象のエフェクト表示
function showMonsterEffect() {

  let delay = Config.delayTime;
  for (let effects of toMonsterEffect.value) {
    // if (effects.length === 0) continue; // 空の配列をスキップ
    if (Array.isArray(effects)) {
      for (let effect of effects) {
        setTimeout(() => {
          effect.visible = true;
          // さらに2秒後にエフェクトを非表示
          setTimeout(() => {
            effect.visible = false;
          }, Config.effectTime);
        }, delay);
        delay += Config.delayTime;
      }
    }
  }
  //HPが0のモンスターをgridから削除
  // for (let monster of targetMonster.value) {
  //   if (monster.nowHP == 0) {
  //     setTimeout(() => {
  //       monsterGrid.value = monsterGrid.value.map(cell => cell === monster ? null : cell);
  //     }, effectTime);
  //   }
  // }
}
//モンスターの行動
async function monsterAction(monster: Monster, character: Character) {
  // await timer(1000);  //
  console.log('monsterAction', monster)
  monsterAttack(monster, character)

  //アニメーション
  let characterIndex = getCharacterIndex(character)
  // targetCharacter.value = character
  targetCharacter.value = []
  targetCharacter.value.push(character)
  toCharacterAnime.value = monsterClaw
  showCharacterAnime.value[characterIndex] = true // アニメーションを表示
  setTimeout(() => {
    showCharacterAnime.value[characterIndex] = false // アニメーションを非表示
    toCharacterAnime.value = null // アニメーションを非表示にする
    applyEffectToCharacters(Config.effectDamage)
  }, Config.monsterAttackTime) // アニメーションをtoCharacterAnimeTimeの時間表示した後に非表示にする

  if (character.nowHP == 0) {
    // character HP0どうする？        
  }
  await timer(Config.monsterAttackTime + Config.effectTime);  //
}
// モンスターの攻撃処理
function monsterAttack(monster: Monster, character: Character) {
  let attackValue: number = 0
  let deffenceValue: number = 0
  // let effectAmount: number = 0
  let damageRate: number = 0
  let damage: number = 0
  //命中率による命中の有無
  if (calcHit(monster.HitRate, character.totalStatus.SPD)) {
    //物理属性
    attackValue = monster.ATK
    deffenceValue = character.totalStatus.DEF
    //クリティカル発生の有無
    damageRate = calcCrit(monster.CritRate, deffenceValue) ? Config.critDamageRate : Config.normalDamageRate
    //ダメージ計算
    damage = Math.floor((attackValue - deffenceValue / 1.5) * damageRate)
    // debug st
    console.log('monsterAttack', attackValue)
    // debug ed
    damage = damage < 0 ? 0 : damage
    //ダメージ設定
    toCharacterEffect.value[getCharacterIndex(character)] = damage
    character.nowHP = damage > character.nowHP ? 0 : character.nowHP - damage
  } else {
    //miss設定
    toCharacterEffect.value[getCharacterIndex(character)] = Config.strMiss
  }
}

//ターン終了の処理
function endTurn() {
  targetCharacter.value = [];
  targetMonster.value = []
  //状態による処理
  for (let chara of partyStore.characters) {
    for (let condition of chara.conditions) {
      switch (condition.status) {
        case Config.effectRegeneration:
          characterHeal(chara, condition.value, Config.statusnowHP)
          // targetCharacter.value = chara
          applyEffectToCharacters(Config.effectHeal)
          // debug st
          console.log(Config.effectRegeneration, condition)
          // debug ed
          break
        default:
      }
    }
    //バフ、状態の更新
    chara.updateBuffs()
    chara.updateConditions()
  }
}

//ログ表示用
// const actionLog = ref<InstanceType<typeof ActionLog> | null>(null);
// const addNewLog = (log: string) => {
//   if (actionLog.value) {
//     actionLog.value.addLog(log, 1);
//   }
// };

</script>
<style scoped>
.BattleUI {
  position: absolute;
  color: #F2EDD5;
  /* font-family: "Verily Serif Mono"; */
  font-family: serif;
  font-size: 6vh;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
  animation: scale 1.0s ease-in-out;
}

@keyframes scale {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}


.actionLog {
  position: fixed;
  left: 1vw;
  top: 2vh;
}

.turnOrder {
  position: fixed;
  top: 10vh;
  right: 2vw;
}

.monsterGrid {
  position: absolute;
  top: 34vh;
  left: 7vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  transform: skewX(-30deg);
  grid-row-gap: 1vh;
  grid-column-gap: 1vh;
}

.monsterCell {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1vw;
  height: 25vh;
  width: 27vw;
  /* border: 0.2vw solid #624CAB; */
}

.monsterImage {
  /* align-items: bottom; */
  position: absolute;
  bottom: 0;
  left: 35%;
  transform: translate(-50%, 0) skewX(30deg);
  /* width:50vw; */
  /* height: 50vh; */
  /* max-width: 50vw; */
  max-height: 60vh;
  object-fit: contain;
  /* object-fit: cover; */
}

@keyframes blinkBorder1 {
  0% {
    border: 0.2vw solid #624CAB;
  }

  100% {
    border: 0.2vw solid #F2EDD5;
    background: #624CAB80;
  }
}

.pickMonster {
  border-radius: 1vw;
  animation: blinkBorder1 1s linear infinite alternate;
}

@keyframes blinkBorder2 {
  0% {
    border: 0.2vw solid #F34213;
  }

  100% {
    border: 0.2vw solid #F2EDD5;
    /* background: #624CAB80; */
  }
}

.currentMonster {
  border-radius: 1vw;
  animation: blinkBorder2 1s linear infinite alternate;
}

.monsterEffect {
  position: absolute;
  z-index: 10;
  font-family: "Bungee Inline";
  color: #F34213;
  font-size: 8vh;
}

.skillOneEffect {
  position: absolute;
  top: 20%;
  left: 40%;
  transform: translate(-50%, -50%) skewX(30deg);
  max-height: 70vh;
  z-index: 5;
}

.skillColEffect {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 60vw;
  height: 80vh;
  z-index: 5;
}

.skillRowEffect {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-height: 60vh;
  width: 80vw;
  z-index: 5;
}

.skillAllEffect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: auto;
  z-index: 5;
}

.monsterInfo {
  transform: translate(-50%, -190%) skewX(30deg);
  background-image: url('/img/flame/flame042201.png');
  background-size: 100% 100%;
  padding: 3vh 4vw;
  height: 14vh;
  width: 23vw;
  font-size: 3vh;
  font-family: "Trade Winds";
  pointer-events: none;
  /* z-index: 10; */
}

.monsterName {
  color: #F2EDD5;
  /* color: #260101 */
}

.progress-bar-hp {
  width: 13vw;
}

.startTurn {
  position: absolute;
  top: 25%;
  left: 5%;
  font-family: "Mystery Quest";
  color: #F34213;
  font-size: 30vh;
  clip-path: inset(0 100% 0 0);
  animation: textfadein 1.0s 0s both;
}

.endBattle {
  position: absolute;
  top: 25%;
  left: 5%;
  font-family: "Mystery Quest";
  color: #F34213;
  font-size: 30vh;
  clip-path: inset(0 100% 0 0);
  animation: textfadein 1.0s 0s both;
}

@keyframes textfadein {
  0% {
    clip-path: inset(0 100% 0 0);
  }

  100% {
    clip-path: inset(0);
  }
}

.CurrentUI {
  position: absolute;
  left: 1vw;
  bottom: 2vh;
}

.IconAttack {
  position: absolute;
  right: 20vw;
  bottom: 1vh;
}

.IconSkill {
  position: absolute;
  right: 11vw;
  bottom: 2vh;
}

.IconBag {
  position: absolute;
  right: 3%;
  bottom: 6%;
}

.SkillUI {
  position: absolute;
  top: 3vh;
  right: 12vw;
  animation: slideTop 0.3s ease-in-out;
}

.skillInfo {
  position: absolute;
  top: 2vh;
  right: 12vw;
  animation: slideBottom 0.3s ease-in-out;
}

.attackName {
  position: absolute;
  color: #F2EDD5;
  font-family: "Trade Winds";
  top: 2vh;
  left: 37vw;
  animation: slideLeft 0.3s ease-in-out;
}

#IconAttack {
  transition: transform 0.3s ease;
}

#IconAttack:hover {
  transform: translateY(-20%) scale(1.5);
}
</style>