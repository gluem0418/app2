import Character from '@/Class/Character.ts';
import { SkillEffect } from '@/Class/ActiveSkill.ts';
import { getCharacterIndex } from '@/Process/Common.ts';
import Config from '@/config.ts';
import { LogService } from './LogService.ts';
import { usePartyStore } from '@/stores/Party.ts';

// キャラクター向けの補助処理
export function characterAssist(skillEffect: SkillEffect, skillName: string, targetCharacter: Character, character?: Character): (string | number | null)[] {

  //パーティ情報
  const partyStore = usePartyStore()

  let toCharacterEffect: (string | number | null)[] = new Array(partyStore.characters.length).fill(null);

  //キャラクター配列からindex取得
  // const getCharacterIndex = (character: Character) => {
  //   return partyStore.characters.findIndex(c => c === character);
  // }

  console.log('characterAssist', skillName, skillEffect)
  let assistValue: number = 0
  //効果量の算出
  if (skillEffect.base_status == Config.baseFixValue || skillEffect.base_status == Config.baseFixRate) {
    assistValue = skillEffect.effect_amount
  } else {
    assistValue = character!.totalStatus[skillEffect.base_status] * skillEffect.effect_amount
  }
  //effect_type毎の処理
  switch (skillEffect.effect_type) {
    //回復
    case Config.effectHeal:
      switch (skillEffect.target_type) {
        case Config.targetMyself:
        case Config.targetOneFriend:
          // if (!targetCharacter.value) return;
          characterHeal(targetCharacter, assistValue, skillEffect.effect_kind)
          toCharacterEffect[getCharacterIndex(targetCharacter)] = assistValue
          break
        case Config.targetAllFriends:
          for (let chara of partyStore.characters) {
            characterHeal(chara, assistValue, skillEffect.effect_kind)
            toCharacterEffect[getCharacterIndex(chara)] = assistValue
          }
          break
        case Config.targetRandomFriend:
          break
        default:
      }
      break
    //バフ
    case Config.effectBuff:
      switch (skillEffect.target_type) {
        case Config.targetMyself:
        case Config.targetOneFriend:
          if (!targetCharacter) break;
          targetCharacter.addBuff(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
          targetCharacter.calculateTotalStatus()
          break
        case Config.targetAllFriends:
          for (let chara of partyStore.characters) {
            chara.addBuff(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
            chara.calculateTotalStatus()
          }
          break
        case Config.targetRandomFriend:
          break
        default:
      }
      break
    //状態追加
    case Config.effectCondition:
      switch (skillEffect.target_type) {
        case Config.targetMyself:
        case Config.targetOneFriend:
          // if (!targetCharacter.value) return;
          targetCharacter.addCondition(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
          break
        case Config.targetAllFriends:
          for (let chara of partyStore.characters) {
            chara.addCondition(skillName, skillEffect.effect_kind, assistValue, skillEffect.effect_times)
          }
          break
        case Config.targetRandomFriend:
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

  if (effect_kind == Config.statusnowHP) {
    character.nowHP = character.nowHP + assistValue > character.totalStatus.HP ? character.totalStatus.HP : character.nowHP + assistValue
  } else if (effect_kind == Config.statusnowMP) {
    character.nowMP = character.nowMP + assistValue > character.totalStatus.MP ? character.totalStatus.MP : character.nowMP + assistValue
  }
  addNewLog("> Recovers " + character.name + "'s " + effect_kind + " by " + assistValue, 1)
}
