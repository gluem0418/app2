import Config from '@/config.ts';
import { randomNum } from '@/Process/Common.ts';

interface Room {
  PointX: number;
  PointY: number;
  Width: number;
  Height: number;
  Overlap: boolean;
}

interface Point {
  X: number;
  Y: number;
}

export const MapData: Array<Array<number>> = Array(Config.MapHeight).fill(Config.MapWall).map(() => Array(Config.MapWidth).fill(Config.MapWall));;
// const MapDataRef = ref<number[][]>([]);
export const MapSet: Array<Array<number>> = Array(Config.MapHeight).fill(0).map(() => Array(Config.MapWidth).fill(0));

export const initPoint: Point = { X: 0, Y: 0 }

//////////////////////////////////////////////////////
/// CreateDungeon
/// ダンジョン生成
//////////////////////////////////////////////////////
export function CreateDungeon() {
  let rooms: Room[] = [];
  let roomCount: number = randomNum(Config.RoomCountMin, Config.RoomCountMax);

  let meetPointX: number[] = new Array(Config.meetPointCount).fill(0);
  let meetPointY: number[] = new Array(Config.meetPointCount).fill(0);

  for (let i = 0; i < meetPointX.length; i++) {
    meetPointX[i] = randomNum(Config.MapWidth / 4, Config.MapWidth * 3 / 4);
    meetPointY[i] = randomNum(Config.MapHeight / 4, Config.MapHeight * 3 / 4);
    MapData[meetPointY[i]][meetPointX[i]] = Config.MapRoad;
  }
  //部屋生成
  for (let i = 0; i < roomCount; i++) {
    const room = {
      Height: randomNum(Config.roomMinHeight, Config.roomMaxHeight),
      Width: randomNum(Config.roomMinWidth, Config.roomMaxWidth),
      PointX: randomNum(2, Config.MapWidth - Config.roomMaxWidth - 2),
      PointY: randomNum(2, Config.MapHeight - Config.roomMaxHeight - 2),
      Overlap: false
    };
    room.Overlap = CreateRoom(room.Height, room.Width, room.PointX, room.PointY);
    // console.log('Room', room.Height, room.Width, room.PointX, room.PointY, room.Overlap);
    rooms.push(room);
  }
  //通路生成
  //中継ポイントでの接続でダンジョンを接続
  //中継ポイントが3つ以上だと、繋がらない確率が上がる。
  for (let i = 0; i < roomCount; i++) {
    if (rooms[i].Overlap == false) {
      let StartPointX = randomNum(rooms[i].PointX, rooms[i].PointX + rooms[i].Width);
      let StartPointY = randomNum(rooms[i].PointY, rooms[i].PointY + rooms[i].Height);
      if (i == 0) {
        initPoint.X = StartPointX;
        initPoint.Y = StartPointY;
      }
      CreateRoad(StartPointX, StartPointY, meetPointX[randomNum(0, meetPointX.length - 1)], meetPointY[randomNum(0, meetPointY.length - 1)]);
    }
  }
  //扉セット
  for (let i = 0; i < MapData.length; i++) {
    for (let j = 0; j < MapData[i].length; j++) {
      if (MapData[i][j] == Config.MapRoad) {
        CreateDoor(i, j)
      }
    }
  }
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
      MapSet[y][x] = Config.SetDoorUp;
    }
    //1つ下が部屋の場合、扉配置
    if (isRoom(y + 1, x) && (isRoom(y + 1, x - 1) || isRoom(y + 1, x + 1))) {
      MapSet[y][x] = Config.SetDoorUnder;
    }
  }
  //現在地の上下が壁の場合
  if (isWall(y - 1, x) && isWall(y + 1, x)) {
    //1つ左が部屋の場合、扉配置
    if (isRoom(y, x - 1) && (isRoom(y - 1, x - 1) || isRoom(y + 1, x - 1))) {
      MapSet[y][x] = Config.SetDoorLeft;
    }
    //1つ右が部屋の場合、扉配置
    if (isRoom(y, x + 1) && (isRoom(y - 1, x + 1) || isRoom(y + 1, x + 1))) {
      MapSet[y][x] = Config.SetDoorRight;
    }
  }
}

//指定場所 wall確認
export function isWall(y: number, x: number) {
  return y >= 0 && y < MapData.length && x >= 0 && x < MapData[0].length && MapData[y][x] == Config.MapWall;
}
//指定場所 Room or 確認
function isRoom(y: number, x: number) {
  return y >= 0 && y < MapData.length && x >= 0 && x < MapData[0].length && (MapData[y][x] == Config.MapRoom);
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
      if (MapData[roomPointY + i][roomPointX + j] == Config.MapRoom) {
        isRoom = true;
      } else {
        MapData[roomPointY + i][roomPointX + j] = Config.MapRoom;
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
    if (MapData[StartPointY][StartPointX] == Config.MapWall) {
      MapData[StartPointY][StartPointX] = Config.MapRoad
    }
    if (direction == 1) {
      StartPointX = isRight ? StartPointX - 1 : StartPointX + 1;
    } else {
      StartPointY = isUnder ? StartPointY + 1 : StartPointY - 1;
    }
  }
}