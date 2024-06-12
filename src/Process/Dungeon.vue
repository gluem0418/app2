<template>
  <div ref="dungeon"></div>
  <div v-if="(statusStore.processDungeon == Config.processSearch) && !showUIStore.isAnyUIShow" class="crossKey">
    <div class="upKey" @click="playerMove(Config.ArrowUp)"></div>
    <!-- <div class="downKey" @click="playerMove(Config.ArrowDown)"></div> -->
    <div class="leftKey" @click="playerMove(Config.TurnLeft)"></div>
    <div class="rightKey" @click="playerMove(Config.TurnRight)"></div>
    <ActionLog ref="actionLog" class="actionLog" />
  </div>
  <GetTreasure v-show="showUIStore.treasure" class="GetTreasure" :getTreasures="getTreasures" :getGold="getGold"
    @closeTreasure='closeTreasure' />
  <Confirmation v-show="showUIStore.message" :message="confirmationMessage"
    @confirmationResponse="confirmationResponse" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import CreateDungeon from './CreateDungeon.ts';
import { state, isWall } from './CreateDungeon.ts';
import GetTreasure from './GetTreasure.vue';

import Dungeon from '@/Class/Dungeon.ts';
import { dungeons } from '@/Class/Dungeon.ts';
import TreasureBox from '@/Class/TreasureBox.ts'
import Item from '@/Class/Item.ts';
import Equipment from '@/Class/Equipment.ts';

import ActionLog from '@/UI/ActionLog.vue';
import { LogService } from '@/Process/LogService.ts';
import Confirmation from '@/components/information/Confirmation.vue';

import Config from '@/config.ts';

import { randomNum } from '@/Process/Common.ts';

import imgWall01 from '/img/dungeon/wall/forest1.jpg';

import imgWall11 from '/img/dungeon/wall/water03.jpg';
import imgWall02 from '/img/dungeon/wall/mable-black-p.jpg';
import imgWall03 from '/img/dungeon/wall/wood-deck-02.jpg';
import imgWall04 from '/img/dungeon/wall/stone-tile02-p.jpg';
import imgWall05 from '/img/dungeon/wall/brick1.jpg';
import imgWall06 from '/img/dungeon/wall/tesukiwashi06.jpg';
const alyImgWall = new Array(
  imgWall01, imgWall02, imgWall03, imgWall04, imgWall05, imgWall06)
// 床
import imgFloor01 from '/img/dungeon/floor/forest1.jpg';

// import imgFloor01 from '/img/back/floor/water03.jpg';
import imgFloor02 from '/img/dungeon/floor/Wonder-Marble.jpg';
import imgFloor03 from '/img/dungeon/floor/wood-deck-03.jpg';
import imgFloor04 from '/img/dungeon/floor/rockland3.jpg';
import imgFloor05 from '/img/dungeon/floor/rockland2.jpg';
import imgFloor06 from '/img/dungeon/floor/tatami02.jpg';
const alyImgFloor = new Array(
  imgWall01, imgFloor02, imgFloor03, imgFloor04, imgFloor05, imgFloor06)

// 天井
// import img_ceil01 from '/img/back/floor/ceil01.png';
// ドア
import imgLeftDoor1 from '/img/dungeon/door/leftdoor1.jpg';
import imgRightDoor1 from '/img/dungeon/door/rightdoor1.jpg';

//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()

//プレイヤー現在地
import { usePositionStore } from '@/stores/Position.ts';
const positionStore = usePositionStore();

//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()

//音楽管理
import { useAudioStore } from '@/stores/Audio';
const audioStore = useAudioStore()

//ログ追加処理
const actionLog = ref(null);
const logService = new LogService();
const addNewLog = (log: string, kind: number) => logService.addNewLog(log, kind);

const dungeon = ref<HTMLElement | null>(null);
let nowLayer: number = 0
let mapInfo: Dungeon
const wmapInfo = dungeons.find(d => d.name === statusStore.whichDungeon);
if (!wmapInfo) {
  throw new Error(`Dungeon ${statusStore.whichDungeon} does not exist in dungeons.`);
} else {
  mapInfo = wmapInfo
}
// let scene = new THREE.Scene()
let scene: THREE.Scene
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
let targetPosition = new THREE.Vector3(); // カメラの目標位置
// let camera :THREE.PerspectiveCamera
// let renderer :THREE.WebGLRenderer;
// let targetPosition : THREE.Vector3; // カメラの目標位置
let pointLight: THREE.PointLight;
let spotLight: THREE.SpotLight;
let targetRotation = 0; // カメラの目標回転角度
let encounter = 0; // エンカウントの確率を管理する変数
let imgWall: string
let imgFloor: string
let imgCeil: string
// doorの定義
interface Door {
  // id: number;
  leftDoor: THREE.Mesh;
  rightDoor: THREE.Mesh;
  isOpen: boolean;
}
let doors: Door[] //door object 格納用
// Treasureの定義
let gltfTreasure: GLTF
interface Treasure {
  // id: number;
  treasure: THREE.Group
  mixer: THREE.AnimationMixer
  isOpen: boolean
}
let treasures: Treasure[] //treasure object 格納用
// let treasureId: number = 0
// 宝箱取得時
const getTreasures = ref<(Item | Equipment)[]>()
const getGold = ref<number>()
const strTreasure = 'jb477'
// 魔方陣の定義
let gltfCircle: GLTF
let groupCircle: THREE.Group
let mixerCircle: THREE.AnimationMixer
let flgNearCircle: Boolean = false
// MidBossの定義
interface MidBoss {
  midBoss: THREE.Group
}
let midBosses: MidBoss[]
// ボスの定義
let groupBoss: THREE.Group
//ポイント光源
const lightParams = { point: 0xFBFDFF };
// 確認用メッセージ
let confirmationMessage: string

onMounted(() => {
  // ダンジョン毎の処理
  whichDungeon()
  //ダンジョンの階層作成
  createLayer()
});
const clock = new THREE.Clock();
const animate = function () {
  requestAnimationFrame(animate);
  //3dモデルアニメーション
  const delta = clock.getDelta();
  // 各宝箱のアニメーションを更新
  treasures.forEach(treasure => {
    treasure.mixer.update(delta);
  });
  if (mixerCircle) mixerCircle.update(delta)
  renderer.render(scene, camera);
};

function createLayer() {
  //ダンジョン生成
  CreateDungeon(mapInfo, nowLayer)
  console.log('MapData', state.MapData)
  console.log('MapSet', state.MapSet)
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
}
function initScene() {
  //scene object 初期化
  scene = new THREE.Scene();
  doors = [], treasures = [], midBosses = []

  renderer.setSize(window.innerWidth, window.innerHeight);
  //3dモデル用の設定
  // renderer.outputColorSpace = THREE.SRGBColorSpace;
  // renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  //
  dungeon.value?.appendChild(renderer.domElement);
  // プレイヤーの初期位置を設定
  positionStore.playerPosition = new THREE.Vector3(Config.BlockSize * state.initPoint.X, 5, Config.BlockSize * state.initPoint.Y);
  targetPosition.copy(positionStore.playerPosition);
  // カメラの位置をプレイヤーの位置と同期
  camera.position.copy(positionStore.playerPosition);
  addNewLog(Config.logEnterDungeon, 0)
  //全体光源
  // const light = new THREE.AmbientLight(0xFFFFFF, 1.0);  
  //PointLight(色, 光の強さ, 距離, 光の減衰率)
  pointLight = new THREE.PointLight(lightParams.point, 10, 50, 0.5);
  pointLight.position.copy(positionStore.playerPosition);
  scene.add(pointLight);
}
// ダンジョンの情報セット
function whichDungeon() {
  imgWall = mapInfo.wallUrl
  imgFloor = mapInfo.floorUrl
  imgCeil = mapInfo.ceilUrl
  audioStore.playBgm(mapInfo.music)
  statusStore.musicDungeon = mapInfo.music
}

// ダンジョンを描画
function SceneDungeon() {
  // テクスチャをランダムに選択
  // indexTexture = Math.floor(Math.random() * alyImgWall.length);
  const loadPic = new THREE.TextureLoader();
  // 壁
  const wGeometry = new THREE.PlaneGeometry(Config.BlockSize, Config.BlockHeight);
  // const wTexture = loadPic.load(alyImgWall[indexTexture]);
  const wTexture = loadPic.load(imgWall);
  const wMaterial = new THREE.MeshPhongMaterial({ map: wTexture, side: THREE.DoubleSide, bumpMap: wTexture, bumpScale: 0.2 });
  // 扉
  // const dGeometry = new THREE.PlaneGeometry(Config.BlockSize / 2, Config.BlockHeight);
  const dGeometry = new THREE.PlaneGeometry(Config.BlockSize / 2, Config.BlockHeight / 1.5);
  const dTextureLeft = loadPic.load(imgLeftDoor1);
  const dTextureRight = loadPic.load(imgRightDoor1);
  const dMaterialLeft = new THREE.MeshPhongMaterial({ map: dTextureLeft, side: THREE.DoubleSide, bumpMap: dTextureLeft, bumpScale: 0.2 });
  const dMaterialRight = new THREE.MeshPhongMaterial({ map: dTextureRight, side: THREE.DoubleSide, bumpMap: dTextureRight, bumpScale: 0.2 });
  const wdGeometry = new THREE.PlaneGeometry(Config.BlockSize, Config.BlockHeight / 3); //扉の上の壁
  // 床
  const fGeometry = new THREE.PlaneGeometry(Config.BlockSize, Config.BlockSize);
  // const fTexture = loadPic.load(alyImgFloor[indexTexture]);
  const fTexture = loadPic.load(imgFloor);
  const fMaterial = new THREE.MeshPhongMaterial({ map: fTexture, side: THREE.DoubleSide, bumpMap: fTexture, bumpScale: 0.2 });
  // 天井
  // var cGeometry = new THREE.PlaneGeometry(Config.BlockSize, Config.BlockHeight);
  const cTexture = loadPic.load(imgCeil);
  const cMaterial = new THREE.MeshPhongMaterial({ map: cTexture, side: THREE.DoubleSide, bumpMap: cTexture, bumpScale: 0.2 });


  for (let i = 0; i < state.MapData.length; i++) {
    for (let j = 0; j < state.MapData[i].length; j++) {

      if (state.MapData[i][j] == Config.MapRoom || state.MapData[i][j] == Config.MapRoad) {

        // 部屋か通路の場合、床と天井を追加
        const planeFloor = new THREE.Mesh(fGeometry, fMaterial);
        planeFloor.position.set(Config.BlockSize * j, 0, Config.BlockSize * i);
        planeFloor.rotation.x = 90 * Math.PI / 180;
        scene.add(planeFloor);

        // 天井はマップが出来てから設置
        const planeCeil = new THREE.Mesh(fGeometry, cMaterial);
        planeCeil.position.set(Config.BlockSize * j, Config.BlockHeight, Config.BlockSize * i);
        planeCeil.rotation.x = 90 * Math.PI / 180;
        scene.add(planeCeil);

        // 通路や部屋の上下左右で壁がある場合に壁を描画
        if (isWall(i - 1, j)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(Config.BlockSize * j, Config.BlockHeight / 2, Config.BlockSize * (i - 0.5));
          scene.add(planeWall);
        }
        if (isWall(i + 1, j)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(Config.BlockSize * j, Config.BlockHeight / 2, Config.BlockSize * (i + 0.5));
          scene.add(planeWall);
        }
        if (isWall(i, j - 1)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(Config.BlockSize * (j - 0.5), Config.BlockHeight / 2, Config.BlockSize * i);
          planeWall.rotation.y = 90 * Math.PI / 180;
          scene.add(planeWall);
        }
        if (isWall(i, j + 1)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(Config.BlockSize * (j + 0.5), Config.BlockHeight / 2, Config.BlockSize * i);
          planeWall.rotation.y = 90 * Math.PI / 180;
          scene.add(planeWall);
        }

        // 通路と部屋の境目に扉を描画
        //宝箱と魔方陣を描画
        switch (state.MapSet[i][j]) {
          case Config.SetDoorUp:
            //この地点か一つ上の左右が壁の場合に描画
            setDoor(i, j, 'Up')
            break
          case Config.SetDoorUnder:
            //この地点か一つ下の左右が壁の場合に描画
            setDoor(i, j, 'Under')
            break
          case Config.SetDoorLeft:
            // この地点か一つ左の上下が壁の場合に描画
            setDoor(i, j, 'Left')
            break
          case Config.SetDoorRight:
            //この地点か一つ右の上下が壁の場合に描画
            setDoor(i, j, 'Right')
            break
          case Config.SetTreasure:
            //宝箱を配置
            setTreasure(i, j)
            break
          case Config.SetCircle:
            //魔方陣を配置
            setCircle(i, j)
            break
          default:
        }
        //中ボスを描画
        if (state.MapSet[i][j] >= 1000 && state.MapSet[i][j] < 2000) {
          setMidBoss(i, j)
        }
        //ボスを描画
        if (state.MapSet[i][j] >= 2000) {
          setBoss(i, j)
        }
      }
    }
  }
  //扉セット処理
  function setDoor(i: number, j: number, position: string) {
    const planeLeftDoor = new THREE.Mesh(dGeometry, dMaterialLeft);
    const planeRightDoor = new THREE.Mesh(dGeometry, dMaterialRight);
    const planeWallDoor = new THREE.Mesh(wdGeometry, wMaterial);

    switch (position) {
      case 'Up':
        planeLeftDoor.position.set(Config.BlockSize * j - (Config.BlockSize / 4), Config.BlockHeight / 3, Config.BlockSize * (i - 0.5));
        planeRightDoor.position.set(Config.BlockSize * j + (Config.BlockSize / 4), Config.BlockHeight / 3, Config.BlockSize * (i - 0.5));
        planeWallDoor.position.set(Config.BlockSize * j, Config.BlockHeight / 1.2, Config.BlockSize * (i - 0.5));
        break
      case 'Under':
        planeLeftDoor.position.set(Config.BlockSize * j - (Config.BlockSize / 4), Config.BlockHeight / 3, Config.BlockSize * (i + 0.5));
        planeRightDoor.position.set(Config.BlockSize * j + (Config.BlockSize / 4), Config.BlockHeight / 3, Config.BlockSize * (i + 0.5));
        planeWallDoor.position.set(Config.BlockSize * j, Config.BlockHeight / 1.2, Config.BlockSize * (i + 0.5));
        break
      case 'Left':
        planeLeftDoor.position.set(Config.BlockSize * (j - 0.5), Config.BlockHeight / 3, Config.BlockSize * i + (Config.BlockSize / 4));
        planeLeftDoor.rotation.y = 90 * Math.PI / 180;
        planeRightDoor.position.set(Config.BlockSize * (j - 0.5), Config.BlockHeight / 3, Config.BlockSize * i - (Config.BlockSize / 4));
        planeRightDoor.rotation.y = 90 * Math.PI / 180;
        planeWallDoor.position.set(Config.BlockSize * (j - 0.5), Config.BlockHeight / 1.2, Config.BlockSize * i);
        planeWallDoor.rotation.y = 90 * Math.PI / 180;
        break
      case 'Right':
        planeLeftDoor.position.set(Config.BlockSize * (j + 0.5), Config.BlockHeight / 3, Config.BlockSize * i + (Config.BlockSize / 4));
        planeLeftDoor.rotation.y = 90 * Math.PI / 180;
        planeRightDoor.position.set(Config.BlockSize * (j + 0.5), Config.BlockHeight / 3, Config.BlockSize * i - (Config.BlockSize / 4));
        planeRightDoor.rotation.y = 90 * Math.PI / 180;
        planeWallDoor.position.set(Config.BlockSize * (j + 0.5), Config.BlockHeight / 1.2, Config.BlockSize * i);
        planeWallDoor.rotation.y = 90 * Math.PI / 180;
        break
      default:
    }
    scene.add(planeLeftDoor);
    scene.add(planeRightDoor);
    pushDoor(planeLeftDoor, planeRightDoor)
    scene.add(planeWallDoor);
    //
    function pushDoor(leftDoor: THREE.Mesh, rightDoor: THREE.Mesh) {
      doors.push({
        // id: doorId, // 一意のIDを設定
        leftDoor: leftDoor,
        rightDoor: rightDoor,
        isOpen: false
      });
      // doorId += 1
    }
  }
  //宝箱セット処理
  function setTreasure(i: number, j: number) {
    //宝箱のロードと表示位置の設定
    const gltfloader: GLTFLoader = new GLTFLoader();
    let groupTreasure: THREE.Group
    let mixerTreasure: THREE.AnimationMixer
    gltfloader.load(Config.pathTreasure, (gltf: GLTF) => {
      gltfTreasure = gltf;
      groupTreasure = gltfTreasure.scene;
      groupTreasure.position.set(Config.BlockSize * j, 0, Config.BlockSize * i); //表示が歯車の上に来るように調整
      groupTreasure.scale.set(1.5, 1.5, 1.5); //大きさの調整
      scene.add(groupTreasure);
      mixerTreasure = new THREE.AnimationMixer(groupTreasure)
      pushTreasure(groupTreasure, mixerTreasure)
    });
    //SpotLight(色, 光の強さ, 距離, 照射角, ボケ具合, 減衰率)
    spotLight = new THREE.SpotLight(lightParams.point, 10, 20, Math.PI, 20, 1.0);
    spotLight.position.set(Config.BlockSize * j, 0, Config.BlockSize * i)
    scene.add(spotLight);
    //
    function pushTreasure(groupTreasure: THREE.Group, mixerTreasure: THREE.AnimationMixer) {
      treasures.push({
        // id: treasureId, // 一意のIDを設定
        treasure: groupTreasure,
        mixer: mixerTreasure,
        isOpen: false
      });
      // treasureId += 1
    }
  }
  //魔方陣セット処理
  function setCircle(i: number, j: number) {
    //魔方陣のロードと表示位置の設定
    const gltfloader: GLTFLoader = new GLTFLoader();
    gltfloader.load(Config.pathCircle, (gltf: GLTF) => {
      gltfCircle = gltf;
      groupCircle = gltfCircle.scene;
      groupCircle.position.set(Config.BlockSize * j, 0, Config.BlockSize * i); //表示が歯車の上に来るように調整
      // groupCircle.scale.set(1.5, 1.5, 1.5); //大きさの調整
      groupCircle.scale.set(3, 3, 3); //大きさの調整
      scene.add(groupCircle);
      mixerCircle = new THREE.AnimationMixer(groupCircle)
      console.log('setCircle_gltfCircle', gltfCircle)
      // マテリアルの透過処理
      groupTransparent(groupCircle)
      // バウンディングボックスヘルパーの作成
      const boxHelper = new THREE.BoxHelper(groupCircle, 0xffff00);
      scene.add(boxHelper);
    });
  }
  //中ボスセット処理
  function setMidBoss(i: number, j: number) {
    //中ボスのロードと表示位置の設定
    console.log('setMidBoss')
    const gltfloader: GLTFLoader = new GLTFLoader();
    let groupMidBoss: THREE.Group
    gltfloader.load(Config.pathMidBoss, (gltf: GLTF) => {
      // gltfTreasure = gltf;
      groupMidBoss = gltf.scene;
      groupMidBoss.position.set(Config.BlockSize * j, 0, Config.BlockSize * i); //表示が歯車の上に来るように調整
      groupMidBoss.scale.set(5.0, 5.0, 5.0); //大きさの調整
      groupMidBoss.traverse((obj) => {
        if (obj.type === 'Mesh') {
          obj.receiveShadow = true;
          obj.castShadow = true;
          // } else if (obj.type === 'DirectionalLight') {
          //   obj.castShadow = true;
        }
      });
      scene.add(groupMidBoss);
      pushMidBoss(groupMidBoss)
    });
    //SpotLight(色, 光の強さ, 距離, 照射角, ボケ具合, 減衰率)
    // spotLight = new THREE.SpotLight(lightParams.point, 10, 30, Math.PI / 6, 0, 0.5);
    // spotLight.position.set(Config.BlockSize * j, Config.BlockHeight, Config.BlockSize * i - Config.BlockSize)
    // spotLight.target.position.set(Config.BlockSize * j, 0, Config.BlockSize * i);
    // scene.add(spotLight);
    // scene.add(spotLight.target);
    //
    function pushMidBoss(groupMidBoss: THREE.Group) {
      midBosses.push({
        // id: midBossId, // 一意のIDを設定
        midBoss: groupMidBoss,
      });
      // midBossId += 1
    }

  }
  //ボスセット処理
  function setBoss(i: number, j: number) {
    //中ボスのロードと表示位置の設定
    console.log('setBoss')
    const gltfloader: GLTFLoader = new GLTFLoader();
    // let groupMidBoss: THREE.Group
    gltfloader.load(Config.pathBoss, (gltf: GLTF) => {
      groupBoss = gltf.scene;
      groupBoss.position.set(Config.BlockSize * j, 0, Config.BlockSize * i); //表示が歯車の上に来るように調整
      groupBoss.scale.set(0.5, 0.5, 0.5); //大きさの調整
      groupBoss.traverse((obj) => {
        if (obj.type === 'Mesh') {
          obj.receiveShadow = true;
          obj.castShadow = true;
          // } else if (obj.type === 'DirectionalLight') {
          //   obj.castShadow = true;
        }
      });
      scene.add(groupBoss);
    });
    //SpotLight(色, 光の強さ, 距離, 照射角, ボケ具合, 減衰率)
    // spotLight = new THREE.SpotLight(lightParams.point, 10, 30, Math.PI / 6, 0, 0.5);
    // spotLight.position.set(Config.BlockSize * j, Config.BlockHeight, Config.BlockSize * i - Config.BlockSize)
    // spotLight.target.position.set(Config.BlockSize * j, 0, Config.BlockSize * i);
    // scene.add(spotLight);
    // scene.add(spotLight.target);
    //
  }

}
function groupTransparent(group: THREE.Group) {
  group.traverse((node: THREE.Object3D) => {
    if ((node as THREE.Mesh).isMesh) {
      const material = (node as THREE.Mesh).material;
      if (Array.isArray(material)) {
        // マテリアルが配列の場合、各マテリアルに対して透明性を設定
        material.forEach((mat) => {
          mat.transparent = true;
        });
      } else {
        // マテリアルが単一の場合、透明性を設定
        material.transparent = true;
      }
    }
  });
}
// マウスクリックイベントを設定
let clickedTreasureId: number | null = null;
const handleClick = (event: MouseEvent) => {
  if (statusStore.processDungeon == Config.processBattle) return;
  // if (showUIStore.party || showUIStore.character || showUIStore.item || showUIStore.skill || showUIStore.treasure) return;
  if (showUIStore.isAnyUIShow) return;
  // Raycasterのインスタンスを作成
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  // マウスの位置を正規化（-1から1の範囲）
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  // Raycasterを更新
  raycaster.setFromCamera(mouse, camera);
  // 宝箱との交差を計算
  const intersectsTreasure = raycaster.intersectObjects(treasures.map(t => t.treasure), true);
  // 宝箱が近くにある場合、3dモデルの親を取得
  if (rayObjects(intersectsTreasure)) {
    const clickedScene = getScene(intersectsTreasure[0].object)
    console.log('handleClick_clickedTreasure', clickedScene)
    const intersectedTreasure = treasures.find(treasure => treasure.treasure === clickedScene);
    // 未開封の宝箱なら開ける
    if (intersectedTreasure && !intersectedTreasure.isOpen) {
      console.log('handleClick_intersectedTreasure', clickedScene.id, intersectedTreasure)
      clickedTreasureId = clickedScene.id; // クリックした宝箱のIDを保存
      intersectedTreasure.isOpen = true;
      clickTreasure(intersectedTreasure)
    }
  }
  //宝箱クリック時の処理
  function clickTreasure(treasure: Treasure) {
    // アニメーションを開始
    console.log('clickTreasure', treasure)
    const action = treasure.mixer.clipAction(gltfTreasure.animations[0]);
    action.play();
    // 2秒後にアニメーションを停止
    setTimeout(() => {
      action.paused = true
    }, 2000)
    // rankTreasure配列からランダムなインデックスを取得
    const randomIndex = Math.floor(Math.random() * mapInfo.layers[0].rankTreasure.length);
    // ランダムなインデックスの値をrankTreasureにセット
    const rankTreasure = mapInfo.layers[0].rankTreasure[randomIndex];
    // Treasureを取得
    getTreasures.value = TreasureBox.getRandomTreasures(rankTreasure)
    getGold.value = randomNum(rankTreasure * 100, rankTreasure * 1000)
    console.log('clickTreasure', getTreasures.value, getGold.value)
    // 取得したTreasureを表示
    showUIStore.treasure = true
  }
  // 扉のオブジェクトとの交差を計算
  const intersectsDoor = raycaster.intersectObjects(doors.flatMap(door => [door.leftDoor, door.rightDoor]));
  // if (intersectsDoor.length > 0) {
  if (rayObjects(intersectsDoor)) {
    // 交差したオブジェクトがある場合
    const intersectedDoor = doors.find(door => door.leftDoor === intersectsDoor[0].object || door.rightDoor === intersectsDoor[0].object);
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
//Objectとの距離を算出し、近くにあればtrueを返す
function rayObjects(Intersects: THREE.Intersection[]): Boolean {
  // 宝箱がクリックされた場合
  if (Intersects.length > 0) {
    if (Intersects[0].distance <= Config.BlockSize) {
      return true
    } else return false
  } else return false
}
//ObjectのSceneを取得
function getScene(object: THREE.Object3D): THREE.Object3D {
  while (object.parent?.type !== 'Scene') {
    if (object.parent) {
      object = object.parent;
    }
  }
  return object
}

//宝箱画面を閉じて、宝を削除
const closeTreasure = () => {
  const treasureToRemove = scene.getObjectById(clickedTreasureId!);
  if (treasureToRemove) {
    // 宝箱の中身を削除
    const objectToRemove = treasureToRemove.children.find(child => child.name === strTreasure);
    if (objectToRemove) {
      treasureToRemove.remove(objectToRemove);
    }
  } else {
    console.log('closeTreasure_no', clickedTreasureId)
  }
  showUIStore.treasure = false
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
  // console.log('playerMove', eventKey)

  //パーティorキャラクターui表示時
  if (statusStore.processDungeon == Config.processBattle) return;
  // if (showUIStore.party || showUIStore.character || showUIStore.item || showUIStore.skill || showUIStore.treasure) return;
  if (showUIStore.isAnyUIShow) return;
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
    const intersectsDoor = raycaster.intersectObjects(doors.flatMap(door => [door.leftDoor, door.rightDoor]));
    // 交差したオブジェクトがある場合
    if (intersectsDoor.length > 0) {
      // 扉が閉じていて、一定の距離以内にある場合、移動を停止
      const intersectedDoor = doors.find(door => door.leftDoor === intersectsDoor[0].object || door.rightDoor === intersectsDoor[0].object);
      if (intersectedDoor && !intersectedDoor.isOpen && intersectsDoor[0].distance <= Config.BlockSize) {
        return;
      }
    }
    // 宝箱との交差を計算
    const intersectsTreasure = raycaster.intersectObjects(treasures.map(t => t.treasure), true);
    // 宝箱が近くにある場合、3dモデルの親を取得
    if (rayObjects(intersectsTreasure)) {
      const clickedScene = getScene(intersectsTreasure[0].object)
      const intersectedTreasure = treasures.find(treasure => treasure.treasure === clickedScene);
      // 未開封の宝箱なら移動を停止
      if (intersectedTreasure && !intersectedTreasure.isOpen) return
    }
    // // 魔方陣との交差を計算
    // const intersectsCircle = raycaster.intersectObject(groupCircle, true);
    // // 魔方陣が近くにある場合、アニメーションを開始
    // console.log('playerMove_intersectsCircle', intersectsCircle, groupCircle)
    // if (rayObjects(intersectsCircle)) {
    //   const action = mixerCircle.clipAction(gltfCircle.animations[0]);
    //   action.play();
    // }
    //魔方陣との距離を計算
    const objectPosition = groupCircle.position;
    // プレイヤーとオブジェクトの間の距離を計算
    const distance = newPosition.distanceTo(objectPosition);
    // 距離が一定の閾値以下であるかをチェック
    const action = mixerCircle.clipAction(gltfCircle.animations[0]);
    if (distance <= 15) {
      if (!flgNearCircle) {
        action.play();
        if (nowLayer == mapInfo.numLayers - 1) {
          //最下層の場合、町に戻る？
          confirmationMessage = Config.msgLastLayer
        } else {
          //次に層に進む？
          confirmationMessage = Config.msgNextLayer
        }
        flgNearCircle = true
        showUIStore.message = true;
        positionStore.playerPosition.copy(newPosition);
        targetPosition.copy(newPosition); // 目標位置を新しい位置に更新
        return
      }
    } else {
      flgNearCircle = false
      // action.paused = true;
      action.stop();
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
  addNewLog(Config.logMonsterEncounter, 0)
  showUIStore.map = false
  statusStore.processDungeon = Config.processBattle
}

const gameLoop = () => {
  // カメラの位置を更新
  if (!camera.position.equals(targetPosition)) {
    camera.position.lerp(targetPosition, 0.05);
    pointLight.position.copy(targetPosition);
  }

  // カメラの回転を更新
  if (camera.rotation.y !== targetRotation) {
    camera.rotation.y += (targetRotation - camera.rotation.y) * 0.10;
  }

  requestAnimationFrame(gameLoop); // 次のフレームでゲームループを再度呼び出す
}

// YESの場合、現在の階層から移動
const confirmationResponse = (response: string) => {
  showUIStore.message = false;
  if (response == Config.textYes) {
    if (nowLayer == mapInfo.numLayers - 1) {
      //最下層の場合、町に戻る
      statusStore.status = Config.statusTown
      console.log('confirmationResponse_return')
    } else {
      //次に層に進む
      nowLayer += 1
      // scene = new THREE.Scene();  //シーンリセット
      resetDungeon()
      createLayer()
    }
  }
};
function resetDungeon() {
  // シーンからすべてのオブジェクトを削除
  for (const object of scene.children) {
    scene.remove(object);
  }
  // 新しいシーンを作成
  // scene = new THREE.Scene();
}

</script>

<style scoped>
.GetTreasure {
  position: fixed;
  z-index: 10;
}

.upKey {
  position: absolute;
  top: 0;
  left: 33.5vw;
  width: 33vw;
  height: 100vh;
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