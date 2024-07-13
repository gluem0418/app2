import { Ref } from 'vue';
// import Character from '@/Class/Character.ts';
import { SkillEffect } from '@/class/ActiveSkill';
import bConfig from '@/config/battleConfig.ts';

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
  // function toCharacterSkill(skillEffect: SkillEffect): Promise<void> {
  //   return new Promise((resolve) => {
  function toCharacterSkill(skillEffect: SkillEffect) {

    console.log('toCharacterSkill', Date.now())
    //
    toSkillEffect.value = skillEffect
    startCharacterAnime.value = true
    setTimeout(() => {
      //
      console.log('toCharacterSkill_setTimeout', Date.now())
      //
      startCharacterAnime.value = false
    }, skillEffect.anime_time);
  };
  //キャラクター向けのエフェクト表示
  function showCharacterEffect(skillEffect: SkillEffect) {
    // function showCharacterEffect(skillEffect: SkillEffect): Promise<void> {
    // return new Promise((resolve) => {

    console.log('showCharacterEffect_toCharacterEffect.value', toCharacterEffect.value);
    startCharacterEffect.value = true
    toCharacterEffectType.value = skillEffect.effect_type
    //以降の処理はCurrent.vueで
    setTimeout(() => {
      startCharacterEffect.value = false
      // resolve();  // アニメーションが完了したらresolveを呼び出してPromiseを解決します。
    }, bConfig.effectTime);
  };
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