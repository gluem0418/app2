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
  processGuild: 'GUILD',
  actionAddMember: 'Add a Member',
  actionRemoveMember: 'Remove Member',
  processPub: 'PUB',
  processInn: 'INN',
  processChurch: 'CHURCH',
  processSmith: 'SMITH',
  processEquipShop: 'EQUPMENT SHOP',
  processItemShop: 'ITEM SHOP',
  statusDungeon: 'DUNGEON',
  processSearch: 'SEARCH',
  processBattle: 'BATTLE',

  //キャラクター
  mainChaid: 1,
  clsSamurai: 'Samurai',
  clsHolyKnight: 'HolyKnight',
  clsPriest: 'Priest',
  clsArcher: 'Archer',

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
  BlockHeight: 15, //壁の高さ  
  //道の集合点を増やしたいならこれを増やす
  meetPointCount: 2,

  //ミニマップ
  MiniHeight: 300,
  MiniWallColor: '#02040F',
  MiniRoomColor: '#C2B8B2',
  MiniMoveColor: '#197BBD',
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
  strAttack: 'Attack',
  strSkill: 'Skill',
  strMagic: 'Magic',
  strAtk: 'ATK',
  strMgc: 'MGC',
  strMiss: 'MISS',
  
  /////////////////////////////////////
  //log
  /////////////////////////////////////
  logEnterDungeon: 'Enter the dungeon',
  logMonsterEncounter: 'Monster Encounter',
  /////////////////////////////////////
  //メッセージ
  /////////////////////////////////////
  msgInGame: 'Please turn the screen horizontally.',
  msgAddParty1: 'Do you add ',
  msgAddParty2: ' to your party?',
  msgRemoveParty1: 'Do you remove ',
  msgRemoveParty2: ' from the party?',
  msgAddPartyError: 'The party is full. Please remove someone.',
  msgRemovePartyError: 'This character cannot remove from party.',
  msgSkillCostError: 'Skill cost limit error test12345678901234567890',
}