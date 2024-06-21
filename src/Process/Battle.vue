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
          <img :src="cell.GraphicUrl" class="monsterImage" :id="'monsterImage' + index" alt="monsterImage">
        </div>

        <div v-if="selectMonster && selectMonster == cell" class="monsterInfo">
          <div class="monsterName">{{ selectMonster.name }}</div>
          <div class="progress-bar-hp">
            <ProgressBarHp :nowHP="selectMonster.nowHP" :maxHP="selectMonster.totalStatus.HP" />
          </div>
        </div>

      </div>
    </div>

    <!-- 複数スキル -->
    <img v-if="showAreaSkill == bConfig.targetRowEnemy" :src="skillAnime" class=skillRowEffect
      :style="{ top: skillTop + 'vh' }" alt="skill effect" @load="loadSkillAnime()">
    <img v-if="showAreaSkill == bConfig.targetColumnEnemy" :src="skillAnime" class=skillColEffect
      :style="{ left: skillLeft + 'vw' }" alt="skill effect" @load="loadSkillAnime()">
    <img v-if="showAreaSkill == bConfig.targetAll" :src="skillAnime" class=skillAllEffect alt="skill effect"
      @load="loadSkillAnime()">

    <LineFlame1 v-if="battleProcess == 'startTurn' || battleProcess == 'endBattle'" class="boxBattleProcess"
      :inside="battleMessage" />

    <!-- <div v-if="battleProcess == 'startTurn'" class="boxBattleProcess">
      <div class="msgBattleProcess">{{ numTurn }} Turn Start</div>
    </div>
    <div v-if="battleProcess == 'endBattle'" class="boxBattleProcess">
      <div class="msgBattleProcess">Battle Ends</div>
    </div> -->
    <!-- <LineFlame1 class="boxBattleProcess" :inside="battleMessage" /> -->
    <!-- <LineFlame1 v-if="battleProcess == 'endBattle'" class="boxBattleProcess" /> -->

    <!-- character  -->
    <CurrentUI class="CurrentUI" :currentCharacter="currentCharacter" :targetCharacter="targetCharacter"
      :startCharacterAnime="startCharacterAnime" :startCharacterEffect="startCharacterEffect"
      :toSkillEffect="toSkillEffect" :toCharacterEffect="toCharacterEffect" :toCharacterEffectType="toCharacterEffectType"
      :selectionMode="selectionMode" @selectCharacter='selectCharacter' />

    <ActionLog ref="actionLog" class="actionLog" />

    <!-- icon  -->
    <div v-if="battleProcess == 'characterTurn' || battleProcess == 'selectTarget'">
      <IconAttack id="IconAttack" class="IconAttack" @click="clickIcon(bConfig.actionAttack)" :style="styles.AttackBtn" />
      <IconSkill id="IconAttack" class="IconSkill" @click="clickIcon(bConfig.actionSkill)" :characterType="characterType"
        :style="styles.SkillBtn" />

      <IconBag id="IconAttack" class="IconBag" @click="clickIcon(bConfig.actionItem)" :style="styles.ItemBtn" />

      <SkillUI v-if="showSkillList" class="SkillUI" :character="currentCharacter" :inUseSkill=true @useSkill='useSkill' />

      <ItemBagUI v-if="showItemList" class="ItemBagUI" />

      <div v-if="battleProcess == 'selectTarget'">
        <!-- <div class="attackName">{{ activeSkill.name }}</div> -->
        <SelectName class="attackName" :inside="activeSkill.name"></SelectName>
        <SkillInfo class="skillInfo" :skillInfo="activeSkill.info" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, CSSProperties } from 'vue'
import anime from 'animejs';

import TurnOrder from '@/process/TurnOrder.vue';
import BattleResult from '@/process/BattleResult.vue';
import CurrentUI from '@/ui/Current.vue';
import SkillUI from '@/ui//Skill.vue';
import SkillInfo from '@/ui//SkillInfo.vue';
import ItemBagUI from '@/ui/ItemBag.vue';
import useCharacterSkill from './useCharacterSkill.ts';

import { characterAssist, characterHeal } from '@/process/CharacterAssist.ts';

import ActionLog from '@/ui/ActionLog.vue';
import { LogService } from './LogService.ts';

import Character from '@/class/Character.ts';
import Monster from '@/class/Monster.ts';
import ActiveSkill from '@/class/ActiveSkill.ts';
import { SkillEffect } from '@/class/ActiveSkill.ts';

import config from '@/config/commonConfig.ts';
import bConfig from '@/config/battleConfig.ts';
import { timer, randomNum, random, getCharacterIndex } from '@/process/Common.ts';

//components import
import ProgressBarHp from '@/components/progress/ProgressBarHp.vue';
import ImgEncount from '@/components/etc/ImgEncount.vue';
import IconAttack from '@/components/icon/IconAttack.vue';
import IconSkill from '@/components/icon/IconSkill.vue';
// import IconMagic from '@/components/icon/IconMagic.vue';
import SelectName from '@/components/flame/Flame1.vue';
import IconBag from '@/components/icon/IconBag.vue';
import LineFlame1 from '@/components/flame/LineFlame1.vue';

//パーティ情報
import { usePartyStore } from '@/stores/Party.ts';
const partyStore = usePartyStore()
//音楽管理
import { useAudioStore } from '@/stores/Audio';
const audioStore = useAudioStore()
//出現モンスター管理
import { useSetMonsterStore } from '@/stores/SetMonster.ts';
const setMonsterStore = useSetMonsterStore()

//戦闘用のクラス
type Current = Character | Monster
///////////////////////////////////////////////////////////
// monsterGridへの表示用
///////////////////////////////////////////////////////////
const monsterGrid = ref(Array(6).fill(null));
// const monsterList = inject('monsterList') as Monster[];
// const selectedMonsters: Monster[] = [];
const toMonsterEffect = ref<{ effect: string | number, position: { top: string, left: string }, visible: boolean }[][]>(Array(6).fill([]));
//戦闘表示用
const currentMonster = ref<Monster | undefined>(undefined)   //行動モンスター
const targetMonster = ref<Monster[]>([]) //対象モンスター
//スキル表示用
const skillAnime = ref<string>('')
const showOneSkill = ref<boolean[]>([]);
const showAreaSkill = ref<string | null>(null)
const skillTop = ref<number>(0)
const skillLeft = ref<number>(0)
//選択中のモンスター情報
const selectMonster = ref<Monster | undefined>(undefined)
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
///////////////////////////////////////////////////////////
// BattleResult表示用
///////////////////////////////////////////////////////////
const getGold = ref<number>(0)
const getExp = ref<number>(0)
///////////////////////////////////////////////////////////
// 戦闘管理
///////////////////////////////////////////////////////////
const turnOrder = ref<Current[]>([])
const numOrder = ref<number>(0)
const battleProcess = ref<string | null>('encount');
const battleMessage = ref<string>();
let resolveSelectPromise: Function | null = null;
// const characterType = ref<string>('') //物理タイプと魔法タイプでのアイコン切り替え
const styles = reactive<Record<string, CSSProperties>>({
  AttackBtn: {},
  SkillBtn: {},
  ItemBtn: {}
});
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
///////////////////////////////////////////////////////////
// 音楽関連の設定
///////////////////////////////////////////////////////////
const alyBattleMusic = new Array(
  config.mscBattle1,
  config.mscBattle2,
  config.mscBattle3,
  config.mscBattle4,
  config.mscBattle5
)
///////////////////////////////////////////////////////////
// 共通関数
///////////////////////////////////////////////////////////
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
let numTurn = 1
//mount時にモンスター配置
onMounted(async () => {
  setMusic()
  await timer(bConfig.awaitTime);  //
  setMonster()
  battleProcess.value = "startTurn"
  battleMessage.value = String(numTurn) + ' Turn Start'
  // 戦闘ループ
  while (battleProcess.value !== "result") {
    //ターン開始を表示し、スタート
    battleProcess.value = "startTurn"
    await startTurn()
  }
})

function setMusic() {
  if (setMonsterStore.isBoss) {
    audioStore.playBgm(setMonsterStore.music)
  } else {
    let indexMusic: number
    indexMusic = Math.floor(Math.random() * alyBattleMusic.length);
    audioStore.playBgm(alyBattleMusic[indexMusic])
  }
}

//
function setMonster() {
  // 出現モンスターを作成
  console.log("setMonster", setMonsterStore.selectedMonsters)

  let positions: number[] = [];
  //ボス戦の場合、固定配置
  if (setMonsterStore.isBoss) {
    positions.push(bConfig.positionBoss);
  } else {
    // モンスター配置場所を決定
    while (positions.length < setMonsterStore.selectedMonsters.length) {
      const position: number = random(6);

      if (!positions.includes(position)) {
        positions.push(position);
      }
    }
  }

  // グリッドにモンスター配置、selectedMonstersに配置場所を設定
  positions.forEach((position, index) => {
    setMonsterStore.selectedMonsters[index].order = position;
    monsterGrid.value[position] = setMonsterStore.selectedMonsters[index];
  });
}
// ターン開始時に呼び出される関数
async function startTurn() {
  // battleProcess.value = ""
  currentCharacter.value = undefined
  // 行動順を決定
  turnOrder.value = [
    ...partyStore.characters.filter(character => character.nowHP > 0),
    ...setMonsterStore.selectedMonsters.filter(monster => monster.nowHP > 0)
  ];
  // SPD値を基準にソート
  turnOrder.value.sort((a: Current, b: Current) => {
    let aSPD = a.totalStatus.SPD
    let bSPD = b.totalStatus.SPD
    return bSPD - aSPD;
  });
  await timer(bConfig.awaitTime);  //
  console.log("startTurn", turnOrder.value)
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
    if (!setMonsterStore.selectedMonsters.some(monster => monster.nowHP > 0)) {
      battleProcess.value = "endBattle"
      battleMessage.value = 'Battle Ends'
      await timer(bConfig.awaitTime);
      battleProcess.value = "result"
      break;
    }
    // キャラクター全員のHPが0になったら全滅
    if (!partyStore.characters.some(character => character.nowHP > 0)) {
      battleProcess.value = "result"
      break;
    }
    await timer(bConfig.nextTime)
  }
  endTurn()
  numTurn += 1
}
const characterType = ref()
// キャラクターの行動を処理する非同期関数
async function characterTurn(character: Character) {
  battleProcess.value = "characterTurn"
  if (character.class == config.clsPriest || character.class == config.clsWitch) {
    characterType.value = bConfig.actionMagic
  } else {
    characterType.value = bConfig.actionSkill
  }
  // ターゲットの選択を待つ
  await waitForTargetSelection();
  battleProcess.value = ""
  // 選択されたモンスターに対して攻撃を行う
  await turnAction(character);
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
      case bConfig.actionAttack:
        if (currentCharacter.value && currentCharacter.value.equipment.WEP!.activeSkill) {
          useSkill(currentCharacter.value.equipment.WEP!.activeSkill)
        }
        break
      case bConfig.actionSkill:
        // case Config.actionMagic:
        showSkillList.value = true
        break
      case bConfig.actionItem:
        showItemList.value = true
        break
    }
  }
}
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
    case bConfig.targetMyself:
      targetCharacter.value.push(currentCharacter.value!)
      break
    case bConfig.targetOneFriend:
      targetCharacter.value.push(currentCharacter.value!)
      break
    case bConfig.targetAllFriends:
      targetCharacter.value = partyStore.characters.filter(character => character.nowHP > 0)
      break
    case bConfig.targetRandomFriend:
      break
    case bConfig.targetOneEnemy:
      targetMonster.value.push(monsterGrid.value[index]);
      break
    case bConfig.targetColumnEnemy:
      targetColumn(index)
      break
    case bConfig.targetRowEnemy:
      targetRow(index)
      break
    case bConfig.targetAllEnemy:
      targetMonster.value = monsterGrid.value.filter(monster => monster !== null);
      break
    case bConfig.targetRandomEnemy:
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
//キャラクター行動
let animeTime: number
let effectTime: number
let actionTimes: number
let targetNow: number
async function turnAction(current: Current) {
  addNewLog(current.name + "'s " + activeSkill.name, 1)
  //HP MP消費
  if (activeSkill.consume_type == config.statusHP) {
    current.nowHP -= activeSkill.consume_amount
  } else {
    current.nowMP -= activeSkill.consume_amount
  }
  //
  for (const skillEffect of activeSkill.skill_effect) {
    targetNow = skillEffect.target
    animeTime = skillEffect.anime_time
    effectTime = 0
    actionTimes = 0
    //1回目と対象タイプが異なる場合、ターゲットを再設定
    if (selectionMode.value != skillEffect.target_type) {
      selectionMode.value = skillEffect.target_type
      setTarget2nd(current)
    }
    //味方対象スキル
    if (skillEffect.target == 1) {
      //キャラクターのスキル
      if (current instanceof Character) {
        toCharacterEffect.value = characterAssist(skillEffect, activeSkill.name, targetCharacter.value, current)
      } else {
        monsterAction(current, skillEffect)
      }
      //アニメーションあり
      if (skillEffect.skill_anime) {
        toCharacterSkill(skillEffect)
      } else {
        //アニメーションなしでエフェクトあり
        if (toCharacterEffect.value.some(effect => effect !== null)) {
          showCharacterEffect(skillEffect)
        }
      }
    } else if (skillEffect.target == 2) {
      //キャラクターの敵対象スキル
      if (current instanceof Character) {
        toMonsterEffect.value = Array.from({ length: 6 }, () => []);
        if (skillEffect.target_type == bConfig.targetRandomEnemy) {
          //攻撃回数の攻撃
          for (let time = 1; time <= skillEffect.effect_times; time++) {
            //monsterからランダムに対象を設定
            const monster = targetMonster.value[random(targetMonster.value.length)]
            const gridIndex = monster.order!
            attackAction(current, monster, skillEffect, gridIndex)
            actionTimes += 1
          }
        } else {
          //ターゲットの数
          for (let monster of targetMonster.value) {
            const gridIndex = monster.order!
            //攻撃回数の攻撃
            for (let time = 1; time <= skillEffect.effect_times; time++) {
              attackAction(current, monster, skillEffect, gridIndex)
              actionTimes += 1
            }
          }
        }
      } else {
        //モンスターの仲間対象スキル

      }
      //アニメーションあり
      if (skillEffect.skill_anime) {
        //アニメーション表示
        skillAttackAnime(skillEffect)
      } else {
        //アニメーションなしでエフェクトあり
        if (toMonsterEffect.value.some(effect => effect !== null)) {
          showMonsterEffect()
        }
      }
      effectTime = bConfig.effectTime + actionTimes * bConfig.delayTime
    }
    await timer(animeTime + effectTime);
    //HPが0のモンスターをgridから削除
    for (let monster of targetMonster.value) {
      if (monster.nowHP == 0) {
        console.log('turnAction_monster.nowHP == 0', monster);
        monsterGrid.value = monsterGrid.value.map(cell => cell === monster ? null : cell);
      }
    }
  }
}

//2回目以降のスキル対象を設定
function setTarget2nd(current: Current) {
  targetCharacter.value = [];
  targetMonster.value = []
  switch (selectionMode.value) {
    case bConfig.targetMyself:
      if (current instanceof Character) {
        targetCharacter.value.push(current)
      } else {
        targetMonster.value.push(current)
      }
      break
    case bConfig.targetAllFriends:
      targetCharacter.value = partyStore.characters.filter(character => character.nowHP > 0)
      break
    case bConfig.targetRandomFriend:
      break
    case bConfig.targetAllEnemy:
      targetMonster.value = monsterGrid.value.filter(monster => monster !== null);
      break
    case bConfig.targetRandomEnemy:
      targetMonster.value = monsterGrid.value.filter(monster => monster !== null);
      break
    default:
  }
}
// 攻撃処理(キャラクター、モンスター共通)
function attackAction(attacker: Current, attacked: Current, skillEffect: SkillEffect, gridIndex: number = 0) {
  let attackValue: number = 0
  let deffenceValue: number = 0
  let effectAmount: number = 0
  let damageRate: number = 0
  let damage: number | string = 0
  //命中率による命中の有無
  if (calcHit(attacker.totalStatus.HitRate, attacked.totalStatus.SPD)) {
    //物理/魔法による設定
    if (skillEffect.base_status == config.statusATK) {
      //物理属性
      attackValue = attacker.totalStatus.ATK
      deffenceValue = attacked.totalStatus.DEF
    } else if (skillEffect.base_status == config.statusMGC) {
      //魔法属性
      attackValue = attacker.totalStatus.MGC
      deffenceValue = attacked.totalStatus.MDF
    }
    //クリティカル発生の有無
    damageRate = calcCrit(attacker.totalStatus.CritRate, deffenceValue) ? bConfig.critDamageRate : bConfig.normalDamageRate
    //
    effectAmount = currentAction == bConfig.actionAttack ? 1 : skillEffect!.effect_amount
    //ダメージ計算
    damage = Math.floor((attackValue - deffenceValue / 1.5) * effectAmount * damageRate)
    damage = damage < 0 ? 0 : damage
    attacked.nowHP = damage > attacked.nowHP ? 0 : attacked.nowHP - damage
  } else {
    //攻撃が外れた場合
    damage = bConfig.strMiss
  }
  // debug st
  console.log('attackAction', attacker, attacked, damage)
  // debug ed
  //ダメージエフェクト追加
  if (attacked instanceof Monster) {
    const effect = addMonsterEffect(damage)
    toMonsterEffect.value[gridIndex].push(effect);
  } else {
    toCharacterEffect.value[getCharacterIndex(attacked)] = damage
  }
  if (attacked.nowHP == 0) {
    if (attacked instanceof Monster) {
      getExp.value += attacked.EXP
      getGold.value += attacked.GOLD
    } else {
      //キャラクターがHPの場合の処理
    }
  }
  addNewLog("> " + damage + " damage to " + attacked.name, 1)

}
// monster向けエフェクトの追加
const addMonsterEffect = (effect: string | number) => {
  // ダメージエフェクトを追加
  const position = {
    top: randomNum(bConfig.minEffectTop, bConfig.maxEffectTop) + '%',
    left: randomNum(bConfig.minEffectLeft, bConfig.maxEffectLeft) + '%'
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

//スキル攻撃のアニメーション
function skillAttackAnime(skillEffect: SkillEffect) {
  // if (skillEffect.skill_anime == '') return
  //skill animation
  skillAnime.value = skillEffect.skill_anime
  //skill show position
  let cellIndex = targetMonster.value[0].order!
  if (skillEffect.target_type == bConfig.targetOneEnemy) {
    //target one enemy
    showOneSkill.value[cellIndex] = true
  } else {
    //target more enemy
    showAreaSkill.value = skillEffect.target_type
    switch (skillEffect.target_type) {
      case bConfig.targetColumnEnemy:
        skillLeft.value = 7 + (cellIndex % 3) * 27; // 
        break
      case bConfig.targetRowEnemy:
        skillTop.value = 15 + Math.floor(cellIndex / 3) * 25; // 
        break
      case bConfig.targetAllEnemy:
        showAreaSkill.value = bConfig.targetAll
        break
      case bConfig.targetRandomEnemy:
        showAreaSkill.value = bConfig.targetAll
        break
      default:
    }
  }
}

// スキルロード後
const loadSkillAnime = (index: number = 0) => {
  setTimeout(() => {
    showAreaSkill.value = '';
    showOneSkill.value[index] = false
    //モンスターのエフェクト表示
    if (targetNow == 2 && toMonsterEffect.value.some(effect => effect !== null)) {
      showMonsterEffect()
    }
  }, animeTime);
}

//キャラクター向けのアニメーション表示
// function toCharacterSkill(skillEffect: SkillEffect) {

//   toSkillEffect.value = skillEffect
//   switch (skillEffect.target_type) {
//     case Config.targetMyself:
//     case Config.targetOneFriend:
//       startCharacterAnime.value = true
//       //以降の処理はCurrent.vueで
//       break
//     case Config.targetRandomFriend:
//     case Config.targetAllFriends:
//       showAreaSkill.value = Config.targetAll
//       skillAnime.value = skillEffect.skill_anime
//       break
//     default:
//   }
//   setTimeout(() => {
//     startCharacterAnime.value = false
//     //キャラクター向けのエフェクトありの場合
//     if (toCharacterEffect.value.some(effect => effect !== null)) {
//       showCharacterEffect(skillEffect)
//     }
//   }, animeTime);
// }
//モンスター対象のエフェクト表示
function showMonsterEffect() {

  let delay = bConfig.delayTime;
  for (let effects of toMonsterEffect.value) {
    // if (effects.length === 0) continue; // 空の配列をスキップ
    if (Array.isArray(effects)) {
      for (let effect of effects) {
        setTimeout(() => {
          effect.visible = true;
          // さらに2秒後にエフェクトを非表示
          setTimeout(() => {
            effect.visible = false;
          }, bConfig.effectTime);
        }, delay);
        delay += bConfig.delayTime;
      }
    }
  }
}

// function showCharacterEffect(skillEffect: SkillEffect) {
//   console.log('showCharacterEffect_toCharacterEffect.value', toCharacterEffect.value);
//   startCharacterEffect.value = true
//   toCharacterEffectType.value = skillEffect.effect_type
//   effectTime = Config.effectTime;
//   setTimeout(() => {
//     startCharacterEffect.value = false
//   }, Config.effectTime);
// }

// モンスターの行動を処理する関数
function monsterTurn(monster: Monster) {
  battleProcess.value = "monsterTurn"
  // animation test
  anime({
    targets: '#monsterImage' + monster.order!,
    // translateX: 250,
    scale: [1, 2, 1],
    duration: 1000,
    rotate: -30,
    // easing: 'easeInOutCubic' // 加減速の種類
    easing: 'linear' // 加減速の種類
  });

  //使用スキル決定
  let indexSkill: number
  indexSkill = Math.floor(Math.random() * monster.activeSkill.length);
  activeSkill = monster.activeSkill[indexSkill]
  //ターゲット決定
  selectionMode.value = activeSkill.skill_effect[0].target_type
  targetCharacter.value = [];
  targetMonster.value = []
  switch (selectionMode.value) {
    case bConfig.targetMyself: targetMonster
      targetMonster.value.push(monster);
      break
    case bConfig.targetOneFriend:
      targetCharacter.value.push(selectMonsterAction()!)
      break
    case bConfig.targetAllFriends:
    case bConfig.targetRandomFriend:
      targetCharacter.value = partyStore.characters.filter(character => character.nowHP > 0)
      break
    case bConfig.targetOneEnemy:
      //ランダムなモンスター一体を対象にする？
      targetMonster.value.push(monster);
      break
    case bConfig.targetColumnEnemy:
      targetColumn(monster.order!)
      break
    case bConfig.targetRowEnemy:
      targetRow(monster.order!)
      break
    case bConfig.targetAllEnemy:
      targetMonster.value = monsterGrid.value.filter(monster => monster !== null);
      break
    case bConfig.targetRandomEnemy:
      targetMonster.value = monsterGrid.value.filter(monster => monster !== null);
      break
    default:
  }
  turnAction(monster);
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

//モンスターの行動
async function monsterAction(monster: Monster, skillEffect: SkillEffect) {
  console.log('monsterAction', monster)

  toCharacterEffect.value = new Array(partyStore.characters.length).fill(null);
  if (skillEffect.target_type == bConfig.targetRandomFriend) {
    //攻撃回数の攻撃
    for (let time = 1; time <= skillEffect.effect_times; time++) {
      //characterからランダムに対象を設定
      const character = targetCharacter.value[random(targetCharacter.value.length)]
      attackAction(monster, character, skillEffect)
      actionTimes += 1
    }
  } else {
    //ターゲットの数
    for (let character of targetCharacter.value) {
      //攻撃回数の攻撃
      for (let time = 1; time <= skillEffect.effect_times; time++) {
        attackAction(monster, character, skillEffect)
        actionTimes += 1
      }
    }
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
        case bConfig.effectRegeneration:
          characterHeal(chara, condition.value, config.statusnowHP)
          toCharacterEffect.value[getCharacterIndex(chara)] = condition.value
          //キャラクターのエフェクト表示
          toCharacterEffectType.value = bConfig.effectHeal
          startCharacterEffect.value = true
          // debug st
          console.log(bConfig.effectRegeneration, condition)
          // debug ed
          break
        default:
      }
      if (toCharacterEffect.value) {
        setTimeout(() => {
          startCharacterEffect.value = false
        }, bConfig.effectTime);
      }
    }
    //バフ、状態の更新
    chara.updateBuffs()
    chara.updateConditions()
  }
}

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
  background: #3B413C70;
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
  max-height: 80vh;
  /* object-fit: contain; */
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
}

.progress-bar-hp {
  width: 13vw;
}

.boxBattleProcess {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  right: 3vw;
  bottom: 4vh;
}

.SkillUI {
  position: absolute;
  top: 10vh;
  left: 37vw;
  animation: slideTop 0.3s ease-in-out;
}

.ItemBagUI {
  position: absolute;
  top: 10vh;
  left: 25vw;
  animation: slideTop 0.3s ease-in-out;
}

.skillInfo {
  position: absolute;
  top: 3vh;
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