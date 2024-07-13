export default {
  positionBoss: 4,  //ボスの配置

  processEncount: 'encount',

  minEffectTop: 20,
  maxEffectTop: 40,
  minEffectLeft: 30,
  maxEffectLeft: 50,
  normalDamageRate: 1,  //通常攻撃
  critDamageRate: 1.5,  //クリティカル攻撃
  // effectTime: 1000,  //エフェクト表示時間
  effectTime: 500,  //エフェクト表示時間
  normalAttackTime: 400,  //通常攻撃時間
  monsterAttackTime: 500,  //モンスター通常攻撃時間
  delayTime: 100,  //エフェクト表示の時間差
  awaitTime: 1500,  //戦闘開始、終了時の待ち時間
  nextTime: 500,  //行動終了後の待ち時間

  actionAttack: 'Attack',
  actionSkill: 'Skill',
  actionMagic: 'Magic',
  actionItem: 'Item',

  strMiss: 'MISS',

  targetMyself: 'myself',
  targetOneFriend: 'oneFriend',
  targetAllFriends: 'allFriends',
  targetRandomFriend: 'randomFriend',
  targetOneEnemy: 'oneEnemy',
  targetColumnEnemy: 'columnEnemy',
  targetRowEnemy: 'rowEnemy',
  targetAllEnemy: 'allEnemy',
  targetRandomEnemy: 'randomEnemy',
  targetAll: 'all',

  effectAttack: 'attack',
  effectHeal: 'heal',
  effectBuff: 'buff',
  effectDebuff: 'debuff',
  effectCondition: 'condition',
  effectSpecial: 'special',
  effectDamage: 'damage',
  effectRegeneration: 'regeneration',

  // スキル
  baseFixValue: 'FixValue',
  baseFixRate: 'FixRate',
}