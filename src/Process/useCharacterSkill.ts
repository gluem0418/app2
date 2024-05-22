import { Ref } from 'vue';
// import Character from '@/Class/Character.ts';
import { SkillEffect } from '@/Class/ActiveSkill.ts';
import Config from '@/config.ts';

export default function useCharacterSkill(
  startCharacterAnime: Ref<boolean>,
  startCharacterEffect: Ref<boolean>,
  toSkillEffect: Ref<SkillEffect | undefined>,
  toCharacterEffect: Ref<(string | number | null)[]>,
  toCharacterEffectType: Ref<string | undefined>,
  skillAnime: Ref<string>,
  showAreaSkill: Ref<string | null>
) {
  //キャラクター向けのアニメーション表示
  function toCharacterSkill(skillEffect: SkillEffect) {

    toSkillEffect.value = skillEffect
    switch (skillEffect.target_type) {
      case Config.targetMyself:
      case Config.targetOneFriend:
        startCharacterAnime.value = true
        //以降の処理はCurrent.vueで
        break
      case Config.targetRandomFriend:
      case Config.targetAllFriends:
        showAreaSkill.value = Config.targetAll
        skillAnime.value = skillEffect.skill_anime
        break
      default:
    }
    setTimeout(() => {
      startCharacterAnime.value = false
      //キャラクター向けのエフェクトありの場合
      if (toCharacterEffect.value.some(effect => effect !== null)) {
        showCharacterEffect(skillEffect)
      }
    }, skillEffect.anime_time);
  }
  //キャラクター向けのエフェクト表示
  function showCharacterEffect(skillEffect: SkillEffect) {
    console.log('showCharacterEffect_toCharacterEffect.value', toCharacterEffect.value);
    startCharacterEffect.value = true
    toCharacterEffectType.value = skillEffect.effect_type
    //以降の処理はCurrent.vueで
    setTimeout(() => {
      startCharacterEffect.value = false
    }, Config.effectTime);
  }
  return {
    toCharacterSkill,
    showCharacterEffect,
    startCharacterAnime,
    startCharacterEffect,
    toSkillEffect,
    toCharacterEffectType,
    showAreaSkill,
    skillAnime,
  };
}