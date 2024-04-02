<template>
  <div ref="dungeon"></div>
  <div v-if="(statusStore.process == Config.processSearch) && !showUIStore.party && !showUIStore.character" class="crossKey">
    <div class="upKey" @click="playerMove(Config.ArrowUp)"></div>
    <div class="downKey" @click="playerMove(Config.ArrowDown)"></div>
    <div class="leftKey" @click="playerMove(Config.TurnLeft)"></div>
    <div class="rightKey" @click="playerMove(Config.TurnRight)"></div>
    <ActionLog ref="actionLog" class="actionLog" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

import ActionLog from '@/components/information/ActionLog.vue';

import Config from '@/config.ts';
import { CreateDungeon, MapData, MapSet, initPoint, isWall } from './CreateDungeon.ts';
import { randomNum } from '@/Process/Common.ts';

// 素材テスト
// import img_wall01 from '/img/back/tesukiwashi-pattern-06.jpg';
// import img_floor01 from '/img/back/tatami02.jpg';
// 素材インポート
// 壁
import imgWall01 from '/img/back/wall/water03.jpg';
import imgWall02 from '/img/back/wall/mable-black-p.jpg';
import imgWall03 from '/img/back/wall/wood-deck-02.jpg';
import imgWall04 from '/img/back/wall/stone-tile02-p.jpg';
import imgWall05 from '/img/back/wall/brick1.jpg';
import imgWall06 from '/img/back/wall/tesukiwashi06.jpg';
const alyImgWall = new Array(
  imgWall01, imgWall02, imgWall03, imgWall04, imgWall05, imgWall06)
// 床
// import imgFloor01 from '/img/back/floor/water03.jpg';
import imgFloor02 from '/img/back/floor/Wonder-Marble.jpg';
import imgFloor03 from '/img/back/floor/wood-deck-03.jpg';
import imgFloor04 from '/img/back/floor/rockland3.jpg';
import imgFloor05 from '/img/back/floor/rockland2.jpg';
import imgFloor06 from '/img/back/floor/tatami02.jpg';
const alyImgFloor = new Array(
  imgWall01, imgFloor02, imgFloor03, imgFloor04, imgFloor05, imgFloor06)

// 天井
// import img_ceil01 from '/img/back/floor/ceil01.png';
// ドア
import imgLeftDoor1 from '/img/back/door/leftdoor1.jpg';
import imgRightDoor1 from '/img/back/door/rightdoor1.jpg';

//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()

//プレイヤー現在地
import { usePositionStore } from '@/stores/Position.ts';
const positionStore = usePositionStore();

//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()

const dungeon = ref<HTMLElement | null>(null);

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
let light: THREE.PointLight;
let targetPosition = new THREE.Vector3(); // カメラの目標位置
let targetRotation = 0; // カメラの目標回転角度
let encounter = 0; // エンカウントの確率を管理する変数
let indexTexture: number;

// Door型の定義
interface Door {
  id: number;
  leftDoor: THREE.Mesh;
  rightDoor: THREE.Mesh;
  isOpen: boolean;
}
let doors: Door[] = [] //door object 格納用
let doorId: number

onMounted(() => {

  //ダンジョン生成
  CreateDungeon()
  // console.log(MapData)
  // console.log(MapSet)
  //シーン初期化
  initScene()
  //ダンジョン描写
  SceneDungeon()
  // キーボードの矢印キーにイベントリスナーを追加
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('click', handleClick)
  // レンダリングループ
  animate();
  gameLoop();

});

const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

function initScene() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  dungeon.value?.appendChild(renderer.domElement);

  // プレイヤーの初期位置を設定
  positionStore.playerPosition = new THREE.Vector3(Config.BlockSize * initPoint.X, 5, Config.BlockSize * initPoint.Y);
  targetPosition.copy(positionStore.playerPosition);
  // カメラの位置をプレイヤーの位置と同期
  camera.position.copy(positionStore.playerPosition);
  addNewLog(Config.logEnterDungeon)
  // 上空カメラ
  // camera.position.set(500, 500, 0);
  // camera.lookAt(450, 100, 0);
  //光源を追加
  //全体光源
  // const light = new THREE.AmbientLight(0xFFFFFF, 1.0);  
  //ポイント光源
  // const lightParams = {point: 0xFBFDFF};
  const lightParams = { point: 0xFBF5CB };
  light = new THREE.PointLight(lightParams.point, 20, 150, 1.0);
  light.position.copy(positionStore.playerPosition);
  scene.add(light);
}
// ダンジョンを描画
function SceneDungeon() {
  // テクスチャをランダムに選択
  indexTexture = Math.floor(Math.random() * alyImgWall.length);
  const loadPic = new THREE.TextureLoader();
  // 壁
  const wGeometry = new THREE.PlaneGeometry(Config.BlockSize, Config.BlockHeight);
  const wTexture = loadPic.load(alyImgWall[indexTexture]);
  const wMaterial = new THREE.MeshPhongMaterial({ map: wTexture, side: THREE.DoubleSide, bumpMap: wTexture, bumpScale: 0.2 });
  // 扉
  const dGeometry = new THREE.PlaneGeometry(Config.BlockSize / 2, Config.BlockHeight);
  const dTextureLeft = loadPic.load(imgLeftDoor1);
  const dTextureRight = loadPic.load(imgRightDoor1);
  const dMaterialLeft = new THREE.MeshPhongMaterial({ map: dTextureLeft, side: THREE.DoubleSide, bumpMap: dTextureLeft, bumpScale: 0.2 });
  const dMaterialRight = new THREE.MeshPhongMaterial({ map: dTextureRight, side: THREE.DoubleSide, bumpMap: dTextureRight, bumpScale: 0.2 });
  // 床
  const fGeometry = new THREE.PlaneGeometry(Config.BlockSize, Config.BlockSize);
  const fTexture = loadPic.load(alyImgFloor[indexTexture]);
  const fMaterial = new THREE.MeshPhongMaterial({ map: fTexture, side: THREE.DoubleSide, bumpMap: fTexture, bumpScale: 0.2 });
  // 天井
  // var uGeometry = new THREE.PlaneGeometry(BLOCK_SIZE, BLOCK_SIZE);
  // const cTexture = loadPic.load(img_ceil01);
  // const cMaterial = new THREE.MeshPhongMaterial({ map: cTexture, side: THREE.DoubleSide, bumpMap: cTexture, bumpScale: 0.2 });


  for (let i = 0; i < MapData.length; i++) {
    for (let j = 0; j < MapData[i].length; j++) {

      if (MapData[i][j] == Config.MapRoom || MapData[i][j] == Config.MapRoad) {

        // 部屋か通路の場合、床と天井を追加
        const planeFloor = new THREE.Mesh(fGeometry, fMaterial);
        planeFloor.position.set(Config.BlockSize * j, 0, Config.BlockSize * i);
        planeFloor.rotation.x = 90 * Math.PI / 180;
        scene.add(planeFloor);

        // 天井はマップが出来てから設置
        // const planeCeil = new THREE.Mesh(fGeometry, cMaterial);
        // planeCeil.position.set(Config.BlockSize * j, Config.BlockHeight, Config.BlockSize * i);
        // planeCeil.rotation.x = 90 * Math.PI / 180;
        // scene.add(planeCeil);

        // 通路や部屋の上下左右で壁がある場合に壁を描画
        if (isWall(i - 1, j)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(Config.BlockSize * j, Config.BlockHeight / 2, Config.BlockSize * (i - 0.5));
          scene.add(planeWall);
          // walls.push(planeWall);
        }
        if (isWall(i + 1, j)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(Config.BlockSize * j, Config.BlockHeight / 2, Config.BlockSize * (i + 0.5));
          scene.add(planeWall);
          // walls.push(planeWall);
        }
        if (isWall(i, j - 1)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(Config.BlockSize * (j - 0.5), Config.BlockHeight / 2, Config.BlockSize * i);
          planeWall.rotation.y = 90 * Math.PI / 180;
          scene.add(planeWall);
          // walls.push(planeWall);
        }
        if (isWall(i, j + 1)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(Config.BlockSize * (j + 0.5), Config.BlockHeight / 2, Config.BlockSize * i);
          planeWall.rotation.y = 90 * Math.PI / 180;
          scene.add(planeWall);
          // walls.push(planeWall);
        }

        // 通路と部屋の境目に扉を描画
        const planeLeftDoor = new THREE.Mesh(dGeometry, dMaterialLeft);
        const planeRightDoor = new THREE.Mesh(dGeometry, dMaterialRight);
        switch (MapSet[i][j]) {
          case Config.SetDoorUp:
            //この地点か一つ上の左右が壁の場合に描画
            // if ((isWall(i, j + 1) && isWall(i, j - 1)) || (isWall(i - 1, j + 1) && isWall(i - 1, j - 1))) {
            planeLeftDoor.position.set(Config.BlockSize * j - (Config.BlockSize / 4), Config.BlockHeight / 2, Config.BlockSize * (i - 0.5));
            scene.add(planeLeftDoor);
            planeRightDoor.position.set(Config.BlockSize * j + (Config.BlockSize / 4), Config.BlockHeight / 2, Config.BlockSize * (i - 0.5));
            scene.add(planeRightDoor);
            pushDoor(planeLeftDoor, planeRightDoor)
            // }
            break
          case Config.SetDoorUnder:
            //この地点か一つ下の左右が壁の場合に描画
            // if ((isWall(i, j + 1) && isWall(i, j - 1)) || (isWall(i + 1, j + 1) && isWall(i + 1, j - 1))) {
            planeLeftDoor.position.set(Config.BlockSize * j - (Config.BlockSize / 4), Config.BlockHeight / 2, Config.BlockSize * (i + 0.5));
            scene.add(planeLeftDoor);
            planeRightDoor.position.set(Config.BlockSize * j + (Config.BlockSize / 4), Config.BlockHeight / 2, Config.BlockSize * (i + 0.5));
            scene.add(planeRightDoor);
            pushDoor(planeLeftDoor, planeRightDoor)
            // }
            break
          case Config.SetDoorLeft:
            // この地点か一つ左の上下が壁の場合に描画
            // if ((isWall(i + 1, j) && isWall(i - 1, j)) || (isWall(i + 1, j - 1) && isWall(i - 1, j - 1))) {
            planeLeftDoor.position.set(Config.BlockSize * (j - 0.5), Config.BlockHeight / 2, Config.BlockSize * i + (Config.BlockSize / 4));
            planeLeftDoor.rotation.y = 90 * Math.PI / 180;
            scene.add(planeLeftDoor);
            planeRightDoor.position.set(Config.BlockSize * (j - 0.5), Config.BlockHeight / 2, Config.BlockSize * i - (Config.BlockSize / 4));
            planeRightDoor.rotation.y = 90 * Math.PI / 180;
            scene.add(planeRightDoor);
            pushDoor(planeLeftDoor, planeRightDoor)
            // }
            break
          case Config.SetDoorRight:
            //この地点か一つ右の上下が壁の場合に描画
            // if ((isWall(i + 1, j) && isWall(i - 1, j)) || (isWall(i + 1, j + 1) && isWall(i - 1, j + 1))) {
            planeLeftDoor.position.set(Config.BlockSize * (j + 0.5), Config.BlockHeight / 2, Config.BlockSize * i + (Config.BlockSize / 4));
            planeLeftDoor.rotation.y = 90 * Math.PI / 180;
            scene.add(planeLeftDoor);
            planeRightDoor.position.set(Config.BlockSize * (j + 0.5), Config.BlockHeight / 2, Config.BlockSize * i - (Config.BlockSize / 4));
            planeRightDoor.rotation.y = 90 * Math.PI / 180;
            scene.add(planeRightDoor);
            pushDoor(planeLeftDoor, planeRightDoor)
            // }
            break
          default:
        }
      }
    }
  }
}

function pushDoor(leftDoor: THREE.Mesh, rightDoor: THREE.Mesh) {
  doors.push({
    id: doorId, // 一意のIDを設定
    leftDoor: leftDoor,
    rightDoor: rightDoor,
    isOpen: false
  });
  doorId += 1
}

// マウスクリックイベントを設定
const handleClick = (event: MouseEvent) => {
  if (statusStore.process == Config.processBattle) return;
  // Raycasterのインスタンスを作成
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  // マウスの位置を正規化（-1から1の範囲）
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  // Raycasterを更新
  raycaster.setFromCamera(mouse, camera);
  // 扉のオブジェクトとの交差を計算
  const intersects = raycaster.intersectObjects(doors.flatMap(door => [door.leftDoor, door.rightDoor]));
  // 交差したオブジェクトがある場合
  if (intersects.length > 0) {
    // 最初に交差したオブジェクトを取得
    const intersectedDoor = doors.find(door => door.leftDoor === intersects[0].object || door.rightDoor === intersects[0].object);
    if (intersectedDoor) {
      // 扉が閉じている場合、扉を開く
      if (!intersectedDoor.isOpen) {
        intersectedDoor.leftDoor.translateOnAxis(new THREE.Vector3(-1, 0, 0), Config.BlockSize / 4);
        intersectedDoor.rightDoor.translateOnAxis(new THREE.Vector3(1, 0, 0), Config.BlockSize / 4);
        // 回転を設定
        intersectedDoor.leftDoor.rotateY(-Math.PI / 2.1);
        intersectedDoor.rightDoor.rotateY(Math.PI / 2.1);
        // 扉の位置を調整して、元に戻す
        intersectedDoor.leftDoor.translateOnAxis(new THREE.Vector3(1, 0, 0), Config.BlockSize / 4);
        intersectedDoor.rightDoor.translateOnAxis(new THREE.Vector3(-1, 0, 0), Config.BlockSize / 4);
        intersectedDoor.isOpen = true;
      }
    }
  }
};

//画面クリックでの移動処理
const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'a':
    case 'A':
      playerMove(Config.TurnLeft)
      break
    case 'd':
    case 'D':
      playerMove(Config.TurnRight)
      break
    default:
      playerMove(event.key)
  }
}
//十字キーでの移動
function playerMove(eventKey: string) {
  console.log('playerMove', eventKey)

  //パーティorキャラクターui表示時
  if (showUIStore.party || showUIStore.character) return;
  if (statusStore.process == Config.processBattle) return;
  if (!camera) return

  const direction = new THREE.Vector3()
  camera.getWorldDirection(direction)
  let newPosition = positionStore.playerPosition.clone();

  switch (eventKey) {
    case Config.ArrowUp:
      // 上矢印キーが押されたときに前に進む
      newPosition.add(direction.multiplyScalar(Config.BlockSize));
      correctPosition()
      break
    case Config.ArrowDown:
      // 下矢印キーが押されたときに後ろに進む
      newPosition.sub(direction.multiplyScalar(Config.BlockSize));
      correctPosition()
      break
    case Config.ArrowLeft:
      // 左矢印キーが押されたときに左に進む
      newPosition.x += direction.z * (Config.BlockSize)
      newPosition.z -= direction.x * (Config.BlockSize)
      correctPosition()
      break
    case Config.ArrowRight:
      // 右矢印キーが押されたときに右に進む
      newPosition.x -= direction.z * (Config.BlockSize)
      newPosition.z += direction.x * (Config.BlockSize)
      correctPosition()
      break
    case Config.TurnLeft:
      // Aキーが押されたときに視点を左に90度回転
      targetRotation += Math.PI / 2; // 目標回転角度を更新
      break
    case Config.TurnRight:
      // Dキーが押されたときに視点を右に90度回転
      targetRotation -= Math.PI / 2; // 目標回転角度を更新
      break
    default:
     return
  }
  //位置が同じときはリターン
  if (newPosition == positionStore.playerPosition) {
    return;
  }
  function correctPosition() {
    newPosition.x = Math.round(newPosition.x / Config.BlockSize) * Config.BlockSize;
    newPosition.z = Math.round(newPosition.z / Config.BlockSize) * Config.BlockSize;
  }
  // 新しい位置が壁でないことを確認
  let newX = Math.floor((newPosition.x + 5) / Config.BlockSize);
  let newY = Math.floor((newPosition.z + 5) / Config.BlockSize);
  // 新しい位置が壁でなければ、プレイヤーの位置を更新
  if (!isWall(newY, newX)) {
    // Raycasterのインスタンスを作成
    const raycaster = new THREE.Raycaster();
    // プレイヤーの現在の位置から新しい位置へのベクトルを作成
    const direction = newPosition.clone().sub(positionStore.playerPosition).normalize();
    // Raycasterを更新
    raycaster.set(positionStore.playerPosition, direction);
    // 扉のオブジェクトとの交差を計算
    const intersects = raycaster.intersectObjects(doors.flatMap(door => [door.leftDoor, door.rightDoor]));
    // 交差したオブジェクトがある場合
    if (intersects.length > 0) {
      // 最初に交差したオブジェクトを取得
      const intersectedDoor = doors.find(door => door.leftDoor === intersects[0].object || door.rightDoor === intersects[0].object);
      if (intersectedDoor && !intersectedDoor.isOpen && intersects[0].distance <= Config.BlockSize) {
        // 扉が閉じていて、一定の距離以内にある場合、移動を停止
        return;
      }
    }
    // カメラの位置をプレイヤーの位置と同期
    positionStore.playerPosition.copy(newPosition);
    targetPosition.copy(newPosition); // 目標位置を新しい位置に更新
    // エンカウント確率を更新
    encounter += randomNum(Config.encountMin, Config.encountMax)
    // エンカウント確率が一定の水準に達したらエンカウントをトリガー
    if (encounter >= Config.encountLimit) {
      triggerEncounter()
      encounter = 0 // エンカウント後は確率をリセット
    }
  }

}
// エンカウント処理
function triggerEncounter() {
  addNewLog(Config.logMonsterEncounter)
  showUIStore.map = false
  statusStore.process = Config.processBattle
}

const gameLoop = () => {
  // カメラの位置を更新
  if (!camera.position.equals(targetPosition)) {
    camera.position.lerp(targetPosition, 0.05);
    light.position.copy(targetPosition);
  }

  // カメラの回転を更新
  if (camera.rotation.y !== targetRotation) {
    camera.rotation.y += (targetRotation - camera.rotation.y) * 0.10;
  }

  requestAnimationFrame(gameLoop); // 次のフレームでゲームループを再度呼び出す
}

//ログ表示用
const actionLog = ref<InstanceType<typeof ActionLog> | null>(null);
const addNewLog = (log: string) => {
  if (actionLog.value) {
    actionLog.value.addLog(log,0);
  }
};

</script>

<style scoped>
/* .dungeon {
  width: 100vw;
  height: 100vh;
} */

.upKey {
  position: absolute;
  top: 0;
  left: 33.5vw;
  width: 33vw;
  height: 50vh;
  /* border: 0.2vw solid #624CAB; */
}

.downKey {
  position: absolute;
  bottom: 0;
  left: 33.5vw;
  width: 33vw;
  height: 50vh;
  /* border: 0.2vw solid #624CAB; */
}

.leftKey {
  position: absolute;
  top: 25vh;
  /* left:auto; */
  width: 33vw;
  height: 50vh;
  /* border: 0.2vw solid #624CAB; */
}

.rightKey {
  position: absolute;
  top: 25vh;
  right: 0;
  width: 33vw;
  height: 50vh;
  /* border: 0.2vw solid #624CAB; */
}

.actionLog {
  position: absolute;
  left: 2vw;
  bottom: 2vh;
}
</style>