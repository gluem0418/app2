export default {
  //opening
  title: 'Seventh Dawn',
  newgame: 'NEW GAME',
  loadgame: 'LOAD GAME',

  //common
  textYes: 'YES',
  textNo: 'NO',

  //log
  strLog1: 'GENERAL',
  strLog2: 'BATTLE',

  //statusStore
  statusOpening: 'OPENING',
  statusTown: 'TOWN',
  statusDungeon: 'DUNGEON',

  processSearch: 'SEARCH',
  processBattle: 'BATTLE',

  processGuild: 'GUILD',
  menuAddMember: 'Add a Member',
  menuRemoveMember: 'Remove Member',

  processInn: 'INN',
  processPub: 'PUB',
  processChurch: 'CHURCH',
  processSmith: 'SMITH',
  processEquipShop: 'EQUPMENT SHOP',
  processItemShop: 'ITEM SHOP',

  nameDungeon1: 'Forest of Envy',
  nameDungeon2: 'Swamp of Gluttony',
  nameDungeon3: 'Desert of Sloth',
  nameDungeon4: 'Volcano of Wrath',
  nameDungeon5: 'Cave of Greed',
  nameDungeon6: 'Palace of Lust',
  nameDungeon7: 'Tower of Pride',

  //キャラクター
  mainChaid: 1,
  clsSamurai: 'Samurai',
  clsHolyKnight: 'HolyKnight',
  clsPriest: 'Priest',
  clsArcher: 'Archer',
  statusHP: 'HP',
  statusMP: 'MP',
  statusATK: 'ATK',
  statusMGC: 'MGC',
  statusDEF: 'DEF',
  statusMDF: 'MDF',
  statusDEX: 'DEX',
  statusSPD: 'SPD',
  statusnowHP: 'nowHP',
  statusnowMP: 'nowMP',

  //装備
  wepSword: 'Sword',
  wepAxe: 'Axe',
  wepDagger: 'Dagger',
  wepWand: 'Wand',
  wepBow: 'Bow',
  wepSpear: 'Spear',

  //マップ作成
  MapWidth: 100,
  MapHeight: 100,
  MapWall: 0,
  MapRoom: 1,
  MapRoad: 2,
  //配置情報
  SetDoorUp: 11,  //上にドア
  SetDoorUnder: 12,  //下にドア
  SetDoorLeft: 13,  //左にドア
  SetDoorRight: 14,  //右にドア
  roomMinHeight: 5,
  roomMaxHeight: 15,
  roomMinWidth: 5,
  roomMaxWidth: 15,
  RoomCountMin: 10,
  RoomCountMax: 20,

  BlockSize: 10, //1ブロックあたりの長さ
  BlockHeight: 20, //壁の高さ  
  //道の集合点を増やしたいならこれを増やす
  meetPointCount: 2,

  //ミニマップ
  MiniHeight: 300,
  // MiniWallColor: '#d4c08d',  
  // MiniRoomColor: '#C2B8B2',
  MiniRoomColor: '#3B413C',
  MiniMoveColor: '#F2EDD5',
  MiniPlayerColor: '#CBEF43',

  //移動キー
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  TurnLeft: 'TurnLeft',
  TurnRight: 'TurnRight',

  //エンカウント
  encountMin: 1,
  encountMax: 5,
  encountLimit: 1,  //エンカウント発生ポイント

  //戦闘
  monNumMin: 1,
  monNumMax: 6,
  minEffectTop: 20,
  maxEffectTop: 40,
  minEffectLeft: 30,
  maxEffectLeft: 50,
  initHitRate: 70,  //武器なしの命中率
  monsterHitRate: 75,  //モンスターの命中率
  normalDamageRate: 1,  //通常攻撃
  critDamageRate: 1.5,  //クリティカル攻撃
  effectTime: 1000,  //エフェクト表示時間
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

  // アイテム
  returnItemId: 1,
  // アイテムバッグ
  itemTabAll: 'All',
  itemTab1: 'Normal',
  itemTab2: 'Battle',
  itemTab3: 'Special',
  itemBtn1: 'USE',

  // music
  mscTitle: 'maou_bgm_orchestra18',
  mscTown: 'maou_bgm_acoustic36',

  mscDungeon1: 'maou_bgm_fantasy01',

  mscBattle1: 'Bite_the_Bullet',
  mscBattle2: 'maou_bgm_fantasy15',
  mscBattle3: 'maou_bgm_orchestra12',
  mscBattle4: 'Strike_the_Despair',
  mscBattle5: 'Integral-one',

  //log
  logEnterDungeon: 'Enter the dungeon',
  logMonsterEncounter: 'Monster Encounter',

  //メッセージ
  msgInGame1: 'Please turn the screen horizontally.',
  msgInGame2: 'Music plays in this game.',
  msgEnterDungeon: 'Do you enter The ',

  msgAddParty1: 'Do you add ',
  msgAddParty2: ' to your party?',
  msgRemoveParty1: 'Do you remove ',
  msgRemoveParty2: ' from the party?',
  msgAddPartyError: 'The party is full. Please remove someone.',
  msgRemovePartyError: 'This character cannot remove from party.',
  msgSkillCostError: 'Skill cost limit error test12345678901234567890',
}