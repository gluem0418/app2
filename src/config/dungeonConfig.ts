export default {
  //マップ作成
  MapWall: 0,
  MapRoom: 1,
  MapRoad: 2,
  //配置情報
  SetDoorUp: 11,  //上にドア
  SetDoorUnder: 12,  //下にドア
  SetDoorLeft: 13,  //左にドア
  SetDoorRight: 14,  //右にドア
  SetTreasure: 77,  //宝箱
  SetCircle: 100,  //魔方陣

  BlockSize: 10, //1ブロックあたりの長さ
  BlockHeight: 20, //壁の高さ  

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
  encountLimit: 10,  //エンカウント発生ポイント
  //ダンジョン素材
  pathDoor: '3d/doors1.glb',
  pathTreasure: '3d/treasure_box.glb',
  pathCircle: '3d/magic_circle.glb',
  pathMidBoss: '3d/sitting_gargoyle.glb',
  pathBoss: '3d/angel2.glb',
  
  strTreasure: 'Treasure',
  strCircle: 'MagicCircle',
  strMidBoss: 'MidBoss',
  strBoss: 'Boss',
  strDoor: 'Door',

  //log
  logEnterDungeon: 'Enter the dungeon',
  logMonsterEncounter: 'Monster Encounter',

}