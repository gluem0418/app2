import Character from '@/class/Character.ts';
import { SkillEffect } from '@/class/ActiveSkill.ts';
import { getCharacterIndex } from '@/process/Common.ts';

import config from '@/config/commonConfig.ts';
import bConfig from '@/config/battleConfig.ts';

import { LogService } from './LogService.ts';
import { usePartyStore } from '@/stores/Party.ts';

// キャラクター向けの補助処理
export function characterAssist(skillEffect: SkillEffect, skillName: string, targetCharacter: Character[], character?: Character): (string | number | null)[] {

  //パーティ情報
  const partyStore = usePartyStore()

  let toCharacterEffect: (string | number | null)[] = new Array(partyStore.characters.length).fill(null);

  console.log('characterAssist', skillName, skillEffect)
  let assistValue: number = 0
  //効果量の算出
  if (skillEffect.base_status == bConfig.baseFixValue || skillEffect.base_status == bConfig.baseFixRate) {
    assistValue = skillEffect.effect_amount
  } else {
    assistValue = character!.totalStatus[skillEffect.base_status] * skillEffect.effect_amount
  }
  //effect_type毎の処理
  switch (skillEffect.effect_type) {
    //回復
    case bConfig.effectHeal:
      switch (skillEffect.target_type) {
        case bConfig.targetMyself:
        case bConfig.targetOneFriend:
          // if (!targetCharacter.value) return;
          characterHeal(targetCharacter[0], assistValue, skillEffect.effect_kind)
          toCharacterEffect[getCharacterIndex(targetCharacter[0])] = assistValue
          break
        case bConfig.targetAllFriends:
          for (let chara of targetCharacter) {
            characterHeal(chara, assistValue, skillEffect.effect_kind)
            toCharacterEffect[getCharacterIndex(chara)] = assistValue
          }
          break
        case bConfig.targetRandomFriend:
          break
        default:
      }
      break
    //バフ
    case bConfig.effectBuff:
      switch (skillEffect.target_type) {
        case bConfig.targetMyself:
        case bConfig.targetOneFriend:
          if (!targetCharacter) break;
          targetCharacter[0].addBuff(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
          targetCharacter[0].calculateTotalStatus()
          break
        case bConfig.targetAllFriends:
          for (let chara of targetCharacter) {
            chara.addBuff(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
            chara.calculateTotalStatus()
          }
          break
        case bConfig.targetRandomFriend:
          break
        default:
      }
      break
    //状態追加
    case bConfig.effectCondition:
      switch (skillEffect.target_type) {
        case bConfig.targetMyself:
        case bConfig.targetOneFriend:
          // if (!targetCharacter.value) return;
          targetCharacter[0].addCondition(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
          break
        case bConfig.targetAllFriends:
          for (let chara of targetCharacter) {
            chara.addCondition(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
          }
          break
        case bConfig.targetRandomFriend:
          break
        default:
      }
      break
    default:
  }
  return toCharacterEffect;
}
//回復処理
export function characterHeal(character: Character, assistValue: number, effect_kind: string) {

  //ログ表示用
  const logService = new LogService();
  const addNewLog = (log: string, kind: number) => logService.addNewLog(log, kind);

  if (effect_kind == config.statusnowHP) {
    character.nowHP = character.nowHP + assistValue > character.totalStatus.HP ? character.totalStatus.HP : character.nowHP + assistValue
  } else if (effect_kind == config.statusnowMP) {
    character.nowMP = character.nowMP + assistValue > character.totalStatus.MP ? character.totalStatus.MP : character.nowMP + assistValue
  }
  addNewLog("> Recovers " + character.name + "'s " + effect_kind + " by " + assistValue, 1)
}
