import { reactive } from 'vue';
import Dungeon from '@/class/Dungeon';

import dConfig from '@/config/dungeonConfig';
import { randomNum } from '@/process/Common';
//状態管理
// import { useStatusStore } from '@/stores/Status.ts';

interface Room {
  PointX: number;
  PointY: number;
  Width: number;
  Height: number;
  Overlap: boolean;
}

// interface Point {
//   X: number;
//   Y: number;
// }

export const state = reactive({
  MapData: Array<Array<number>>(),
  MapSet: Array<Array<number>>(),
  initPoint: { X: 0, Y: 0 },
});

// export let MapData: Array<Array<number>>
// export let MapSet: Array<Array<number>>
// export const initPoint: Point = { X: 0, Y: 0 }

//////////////////////////////////////////////////////
/// CreateDungeon
/// ダンジョン生成
//////////////////////////////////////////////////////
export default function CreateDungeon(mapInfo: Dungeon, nowLayer: number) {

  // export const MapData: Array<Array<number>> = Array(Config.MapHeight).fill(Config.MapWall).map(() => Array(Config.MapWidth).fill(Config.MapWall));;
  state.MapData = Array(mapInfo.mapHeight).fill(dConfig.MapWall).map(() => Array(mapInfo.mapWidth).fill(dConfig.MapWall));;
  state.MapSet = Array(mapInfo.mapHeight).fill(0).map(() => Array(mapInfo.mapWidth).fill(0));

  let rooms: Room[] = [];
  let roomCount: number = randomNum(mapInfo.roomCountMin, mapInfo.roomCountMax);

  let meetPointX: number[] = new Array(mapInfo.meetPointCount).fill(0);
  let meetPointY: number[] = new Array(mapInfo.meetPointCount).fill(0);

  for (let i = 0; i < meetPointX.length; i++) {
    meetPointX[i] = randomNum(mapInfo.mapWidth / 4, mapInfo.mapWidth * 3 / 4);
    meetPointY[i] = randomNum(mapInfo.mapHeight / 4, mapInfo.mapHeight * 3 / 4);
    state.MapData[meetPointY[i]][meetPointX[i]] = dConfig.MapRoad;
    if (i == 0) {
      state.initPoint.X = meetPointX[i];
      state.initPoint.Y = meetPointY[i];
    }
  }
  //部屋生成
  for (let i = 0; i < roomCount; i++) {
    const room = {
      Height: randomNum(mapInfo.roomMinHeight, mapInfo.roomMaxHeight),
      Width: randomNum(mapInfo.roomMinWidth, mapInfo.roomMaxWidth),
      PointX: randomNum(2, mapInfo.mapWidth - mapInfo.roomMaxWidth - 2),
      PointY: randomNum(2, mapInfo.mapHeight - mapInfo.roomMaxHeight - 2),
      Overlap: false
    };
    room.Overlap = CreateRoom(room.Height, room.Width, room.PointX, room.PointY);
    // console.log('Room', room.Height, room.Width, room.PointX, room.PointY, room.Overlap);
    rooms.push(room);
  }
  //通路生成
  //中継ポイントでの接続でダンジョンを接続
  // let meetPointIndex: number = 0
  for (let i = 0; i < roomCount; i++) {
    if (rooms[i].Overlap == false) {
      let StartPointX = randomNum(rooms[i].PointX, rooms[i].PointX + rooms[i].Width);
      let StartPointY = randomNum(rooms[i].PointY, rooms[i].PointY + rooms[i].Height);
      let randomIndex = randomNum(0, meetPointX.length - 1)
      CreateRoad(StartPointX, StartPointY, meetPointX[randomIndex], meetPointY[randomIndex]);
    }
  }
  //中継ポイント同士を繋ぐ
  for (let i = 0; i < meetPointX.length - 1; i++) {
    CreateRoad(meetPointX[i], meetPointY[i], meetPointX[i + 1], meetPointY[i + 1]);
  }
  //扉セット
  for (let i = 0; i < state.MapData.length; i++) {
    for (let j = 0; j < state.MapData[i].length; j++) {
      if (state.MapData[i][j] == dConfig.MapRoad) {
        CreateDoor(i, j)
      }
    }
  }
  //宝箱セット
  placeObjects(dConfig.strTreasure, mapInfo.layers[nowLayer].treasureRank)
  //魔方陣セット
  placeObjects(dConfig.strCircle, 1)
  //中ボスセット
  if (mapInfo.layers[nowLayer].midBoss.length > 0) {
    placeObjects(dConfig.strMidBoss, mapInfo.layers[nowLayer].midBoss)
  }
  //ボスセット
  if (mapInfo.layers[nowLayer].numBoss !== 0) {
    placeObjects(dConfig.strBoss, mapInfo.layers[nowLayer].numBoss)
  }
  //////////////////////////////////////////////////////
  /// CreateDoor
  /// 通路と部屋の境目に扉をセット
  /// <param name="y">縦位置</param>
  /// <param name="x">横位置</param>
  //////////////////////////////////////////////////////
  function CreateDoor(y: number, x: number) {
    //現在地の左右が壁の場合
    if (isWall(y, x - 1) && isWall(y, x + 1)) {
      //1つ上が部屋の場合、扉配置
      if (isRoom(y - 1, x) && (isRoom(y - 1, x - 1) || isRoom(y - 1, x + 1))) {
        state.MapSet[y][x] = dConfig.SetDoorUp;
      }
      //1つ下が部屋の場合、扉配置
      if (isRoom(y + 1, x) && (isRoom(y + 1, x - 1) || isRoom(y + 1, x + 1))) {
        state.MapSet[y][x] = dConfig.SetDoorUnder;
      }
    }
    //現在地の上下が壁の場合
    if (isWall(y - 1, x) && isWall(y + 1, x)) {
      //1つ左が部屋の場合、扉配置
      if (isRoom(y, x - 1) && (isRoom(y - 1, x - 1) || isRoom(y + 1, x - 1))) {
        state.MapSet[y][x] = dConfig.SetDoorLeft;
      }
      //1つ右が部屋の場合、扉配置
      if (isRoom(y, x + 1) && (isRoom(y - 1, x + 1) || isRoom(y + 1, x + 1))) {
        state.MapSet[y][x] = dConfig.SetDoorRight;
      }
    }
  }
  //////////////////////////////////////////////////////
  /// CreateRoom
  /// 部屋データを生成。すでに部屋か通路がある場合はtrueを返し、道を作らないようにする
  /// <param name="roomHeight">部屋の高さ</param>
  /// <param name="roomWidth">部屋の横幅</param>
  /// <param name="roomPointX">部屋の始点(x)</param>
  /// <param name="roomPointY">部屋の始点(y)</param>
  //////////////////////////////////////////////////////
  function CreateRoom(roomHeight: number, roomWidth: number, roomPointX: number, roomPointY: number): boolean {
    let isRoom = false;
    for (let i = 0; i < roomHeight; i++) {
      for (let j = 0; j < roomWidth; j++) {
        // if (MapData[roomPointY + i][roomPointX + j] == Config.MapRoom) {
        if (state.MapData[roomPointY + i][roomPointX + j] == dConfig.MapRoom || state.MapData[roomPointY + i][roomPointX + j] == dConfig.MapRoad) {
          isRoom = true;
        } else {
          state.MapData[roomPointY + i][roomPointX + j] = dConfig.MapRoom;
        }
      }
    }
    return isRoom;
  }
  /// <summary>
  /// 道データを生成
  /// </summary>
  /// <param name="roadStartPointX"></param>
  /// <param name="roadStartPointY"></param>
  /// <param name="meetPointX"></param>
  /// <param name="meetPointY"></param>
  function CreateRoad(StartPointX: number, StartPointY: number, meetPointX: number, meetPointY: number) {

    // console.log('Road', StartPointX, StartPointY, meetPointX, meetPointY)

    let isRight = StartPointX > meetPointX;
    let isUnder = StartPointY <= meetPointY;

    if (Math.floor(Math.random() * 2) == 0) {
      while (StartPointX != meetPointX) {
        SetRoad(1)
      }
      while (StartPointY != meetPointY) {
        SetRoad(2)
      }
    } else {
      while (StartPointY != meetPointY) {
        SetRoad(2)
      }
      while (StartPointX != meetPointX) {
        SetRoad(1)
      }
    }
    //direction : 横1 OR 縦2
    function SetRoad(direction: number) {
      if (state.MapData[StartPointY][StartPointX] == dConfig.MapWall) {
        state.MapData[StartPointY][StartPointX] = dConfig.MapRoad
      }
      if (direction == 1) {
        StartPointX = isRight ? StartPointX - 1 : StartPointX + 1;
      } else {
        StartPointY = isUnder ? StartPointY + 1 : StartPointY - 1;
      }
    }
  }
  // 宝箱を配置する関数
  function placeObjects(name: string, object: number[] | number) {
    // 部屋の位置からランダムに選んでオブジェクトを配置
    let count: number = 0
    let aryMidBoss: number[] = []
    let numBoss: number = 0
    // objectがnumber[]型である場合の処理
    if (Array.isArray(object)) {
      count = object.length
      if (name == dConfig.strMidBoss) aryMidBoss = object
    } else {
      count = 1
      if (name == dConfig.strBoss) numBoss = object
    }
    for (let i = 0; i < count; i++) {
      if (rooms.length === 0) {
        break; // 配置できる部屋がなくなったら終了
      }
      //ランダムな部屋
      const randomIndex = Math.floor(Math.random() * rooms.length);
      const randomX = randomNum(rooms[randomIndex].PointX, rooms[randomIndex].PointX + rooms[randomIndex].Width)
      const randomY = randomNum(rooms[randomIndex].PointY, rooms[randomIndex].PointY + rooms[randomIndex].Height)
      // 選んだ位置にオブジェクトを配置
      switch (name) {
        // 宝箱を配置
        case dConfig.strTreasure:
          state.MapSet[randomY][randomX] = dConfig.SetTreasure;
          break
        // 魔方陣を配置
        case dConfig.strCircle:
          state.MapSet[randomY][randomX] = dConfig.SetCircle;
          // state.MapSet[state.initPoint.Y][state.initPoint.X - 1] = dConfig.SetCircle;
          break
        // 中ボスを配置
        case dConfig.strMidBoss:
          state.MapSet[randomY][randomX] = aryMidBoss[i];
          break
        case dConfig.strBoss:
          state.MapSet[randomY][randomX] = numBoss;
          break
        default:
      }
      //debug start
      // MapSet[initPoint.Y][initPoint.X - 1] = Config.SetTreasure;
      //debug end
      console.log('placeObjects', object, randomY, randomX)
      // 配置した部屋はリストから削除
      rooms.splice(randomIndex, 1);
    }
  }
}

//指定場所 wall確認
export function isWall(y: number, x: number) {
  return y >= 0 && y < state.MapData.length && x >= 0 && x < state.MapData[0].length && state.MapData[y][x] == dConfig.MapWall;
}
//指定場所 Room or 確認
function isRoom(y: number, x: number) {
  return y >= 0 && y < state.MapData.length && x >= 0 && x < state.MapData[0].length && (state.MapData[y][x] == dConfig.MapRoom);
}

