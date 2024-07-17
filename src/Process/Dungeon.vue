<template>
  <Loading v-show="showLoading" class="Loading" />
  <div v-if="!isLoading" v-show="showDungeon" ref="dungeon">
    <!-- <div ref="dungeon" class="dungeon"> -->
    <div v-if="(statusStore.processDungeon == config.processSearch) && !showUIStore.isAnyUIShow" class="crossKey">
      <div class="upKey" @click="playerMove(dConfig.ArrowUp)"></div>
      <!-- <div class="downKey" @click="playerMove(Config.ArrowDown)"></div> -->
      <div class="leftKey" @click="playerMove(dConfig.TurnLeft)"></div>
      <div class="rightKey" @click="playerMove(dConfig.TurnRight)"></div>
      <ActionLog ref="actionLog" class="actionLog" />
    </div>
    <MapUI class="MapUI" v-show="showUIStore.map" />
    <GetTreasure v-show="showUIStore.treasure" class="GetTreasure" :getTreasures="getTreasures" :getGold="getGold"
      @closeTreasure='closeTreasure' />
    <Confirmation v-show="showUIStore.message" :message="confirmationMessage"
      @confirmationResponse="confirmationResponse" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import CreateDungeon from '@/process/CreateDungeon.ts';
import { state, isWall } from '@/process/CreateDungeon.ts';
import GetTreasure from '@/process/GetTreasure.vue';
import MapUI from '@/ui/Map.vue';

import Dungeon from '@/class/Dungeon.ts';
import { dungeons } from '@/class/Dungeon.ts';
import TreasureBox from '@/class/TreasureBox.ts'
import Item from '@/class/Item.ts';
import Equipment from '@/class/Equipment.ts';

import ActionLog from '@/ui/ActionLog.vue';
import { LogService } from '@/process/LogService.ts';
import Confirmation from '@/components/information/Confirmation.vue';
import Loading from '@/components/information/Loading.vue';

import config from '@/config/commonConfig.ts';
import dConfig from '@/config/dungeonConfig.ts';

import { randomNum } from '@/process/Common.ts';

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

//出現モンスター管理
import { useSetMonsterStore } from '@/stores/SetMonster.ts';
const setMonsterStore = useSetMonsterStore()

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
// let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
// let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
let renderer = new THREE.WebGLRenderer();
let targetPosition = new THREE.Vector3(); // カメラの目標位置
// let sphere: THREE.Mesh;

// let camera: THREE.PerspectiveCamera
// let renderer: THREE.WebGLRenderer;
// let targetPosition: THREE.Vector3; // カメラの目標位置
let pointLight: THREE.PointLight;
let spotLight: THREE.SpotLight;
let targetRotation = 0; // カメラの目標回転角度
let encounter = 0; // エンカウントの確率を管理する変数
// let imgWall: string
// let imgFloor: string
// let imgCeil: string
// doorの定義
let gltfDoor: GLTF
interface Door {
  door: THREE.Group
  mesh: THREE.Mesh
  wall: THREE.Mesh
  mixer: THREE.AnimationMixer
  isOpen: boolean;
}
let doors: Door[] //door object 格納用
// Treasureの定義
let gltfTreasure: GLTF
interface Treasure {
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
let gltfMidBoss: GLTF
interface MidBoss {
  id: number
  midBoss: THREE.Group
}
let midBosses: MidBoss[]
let idBoss: number
// ボスの定義
let gltfBoss: GLTF
let groupBoss: THREE.Group
//ポイント光源
const lightParams = { point: 0xFBFDFF };
// 確認用メッセージ
let confirmationMessage: string
//ローディング画面制御
const isLoading = ref<boolean>(true)
const showLoading = ref<boolean>(true)
const showDungeon = ref<boolean>(false)
// 素材のロードが完了したかどうかを追跡するPromiseの配列
const loadPromises: Promise<any>[] = [];
////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////
onMounted(() => {
  // ダンジョン毎の処理
  whichDungeon()
  //素材のロード
  loadAssets()
  // すべての素材のロードが完了したら、ダンジョン描画
  Promise.all(loadPromises).then(() => {
    isLoading.value = false; // ロード完了を示す
    // DOMの更新が完了するのを待つ
    nextTick(() => {
      createLayer();
      console.log('scene', scene)
      // キーボードの矢印キーにイベントリスナーを追加
      window.addEventListener('keydown', handleKeydown)
      window.addEventListener('click', handleClick)
      // レンダリングループ
      // animate();
      gameLoop();
    });
  });
  // ダンジョンの情報セット
  function whichDungeon() {
    // imgWall = mapInfo.wallUrl
    // imgFloor = mapInfo.floorUrl
    // imgCeil = mapInfo.ceilUrl
    audioStore.playBgm(mapInfo.music)
    statusStore.musicDungeon = mapInfo.music
  }
  //
  function loadAssets() {
    //
    loadGltf(dConfig.strDoor, dConfig.pathDoor)
    loadGltf(dConfig.strTreasure, dConfig.pathTreasure)
    loadGltf(dConfig.strCircle, dConfig.pathCircle)
    loadGltf(dConfig.strMidBoss, dConfig.pathMidBoss)
    loadGltf(dConfig.strBoss, dConfig.pathBoss)

    function loadGltf(asset: string, path: string) {
      //各3dモデルのロード
      const gltfloader: GLTFLoader = new GLTFLoader();
      loadPromises.push(
        new Promise((resolve) => {
          gltfloader.load(path, (gltf: GLTF) => {
            switch (asset) {
              // 扉
              case dConfig.strDoor:
                gltfDoor = gltf;
                break
              // 宝箱
              case dConfig.strTreasure:
                gltfTreasure = gltf;
                break
              // 魔方陣
              case dConfig.strCircle:
                gltfCircle = gltf;
                break
              // 中ボス
              case dConfig.strMidBoss:
                gltfMidBoss = gltf;
                break
              // ボス
              case dConfig.strBoss:
                gltfBoss = gltf;
                break
              default:
            }
            resolve(asset);
          });
        })
      );
    }
  }
})
// コンポーネントがアンマウントされる前にイベントリスナーを解除
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('click', handleClick);
});
//ダンジョンの階層作成
// let animationRunning: boolean = false;
function createLayer() {
  //ダンジョン情報を作成し、取得
  CreateDungeon(mapInfo, nowLayer)
  console.log('MapData', state.MapData)
  console.log('MapSet', state.MapSet)
  console.log('initPoint', state.initPoint)
  //シーン初期化
  initScene()
  //ダンジョン描写
  SceneDungeon()
  // 2秒後に画面を表示
  setTimeout(() => {
    showLoading.value = false;
    showDungeon.value = true;
  }, 2000);
}
//
function initScene() {
  //scene object 初期化
  scene = new THREE.Scene();
  doors = [], treasures = [], midBosses = []
  // renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  //3dモデル用の設定
  // renderer.outputColorSpace = THREE.SRGBColorSpace;
  // renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  //
  dungeon.value?.appendChild(renderer.domElement);
  // プレイヤーの初期位置を設定
  // targetPosition = new THREE.Vector3(); // カメラの目標位置
  positionStore.playerPosition = new THREE.Vector3(dConfig.BlockSize * state.initPoint.X, 5, dConfig.BlockSize * state.initPoint.Y);
  targetPosition.copy(positionStore.playerPosition);
  // カメラの位置をプレイヤーの位置と同期
  camera.position.copy(positionStore.playerPosition);
  addNewLog(dConfig.logEnterDungeon, 0)
  //光源設定
  if (mapInfo.light == 'pointLight') {
    //PointLight(色, 光の強さ, 距離, 光の減衰率)
    pointLight = new THREE.PointLight(lightParams.point, 10, 50, 0.5);
    pointLight.position.copy(positionStore.playerPosition);
    scene.add(pointLight);
  } else {
    //全体光源
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
    scene.add(ambientLight);
  }
}

// ダンジョンを描画
function SceneDungeon() {
  const loadPic = new THREE.TextureLoader();

  // 壁
  const wGeometry = new THREE.PlaneGeometry(dConfig.BlockSize, dConfig.BlockHeight);
  const wTexture = loadPic.load(mapInfo.wallUrl);
  const wMaterial = new THREE.MeshPhongMaterial({ map: wTexture, side: THREE.DoubleSide, bumpMap: wTexture, bumpScale: 0.2 });
  // 扉
  const dGeometry = new THREE.PlaneGeometry(dConfig.BlockSize / 2, dConfig.BlockHeight / 1.5);
  // const dMaterial = new THREE.MeshPhongMaterial({ map: null, side: THREE.DoubleSide, bumpMap: null, bumpScale: 0.2 });
  const dMaterial = new THREE.MeshPhongMaterial({
    map: null,
    side: THREE.DoubleSide,
    bumpMap: null,
    bumpScale: 0.2,
    transparent: true, // 透明性を有効にする
    opacity: 0 // 透明度を設定（0 = 完全に透明、1 = 完全に不透明）
  });
  // 床
  const fGeometry = new THREE.PlaneGeometry(dConfig.BlockSize, dConfig.BlockSize);
  const fTexture = loadPic.load(mapInfo.floorUrl);
  const fMaterial = new THREE.MeshPhongMaterial({ map: fTexture, side: THREE.DoubleSide, bumpMap: fTexture, bumpScale: 0.2 });

  // 天井
  const cTexture = loadPic.load(mapInfo.ceilUrl);
  const cMaterial = new THREE.MeshPhongMaterial({ map: cTexture, side: THREE.DoubleSide, bumpMap: cTexture, bumpScale: 0.2 });
  // 扉の上の壁
  const wdGeometry = new THREE.PlaneGeometry(dConfig.BlockSize, dConfig.BlockHeight / 2.5); //扉の上の壁

  // 屋根がないダンジョンでは空を設定
  if (mapInfo.skyUrl) {
    // const Sgeometry = new THREE.SphereGeometry(mapInfo.mapWidth * dConfig.BlockSize / 1.5, 64, 64);
    // Sgeometry.scale(-1, 1, 1);
    const sTexture = loadPic.load(mapInfo.skyUrl);
    scene.background = sTexture;
    // sTexture.colorSpace = THREE.SRGBColorSpace; // THREE.LinearSRGBColorSpace THREE.SRGBColorSpace

    // const Smaterial = new THREE.MeshBasicMaterial({
    //   color: 0xffffff,
    //   map: sTexture,
    //   // side: THREE.BackSide
    //   //wireframe: true,
    // });

    // sphere = new THREE.Mesh(Sgeometry, Smaterial);
    // sphere.position.set(mapInfo.mapWidth * dConfig.BlockSize / 2, 0, mapInfo.mapHeight * dConfig.BlockSize / 2);
    // scene.add(sphere);

    // const sTexture = loadPic.load(mapInfo.skyUrl);
    // sTexture.colorSpace = THREE.SRGBColorSpace; // THREE.LinearSRGBColorSpace THREE.SRGBColorSpace
    // scene.background = new THREE.Color('#000');

  }

  for (let i = 0; i < state.MapData.length; i++) {
    for (let j = 0; j < state.MapData[i].length; j++) {

      if (state.MapData[i][j] == dConfig.MapRoom || state.MapData[i][j] == dConfig.MapRoad) {

        // 部屋か通路の場合、床と天井を追加
        const planeFloor = new THREE.Mesh(fGeometry, fMaterial);
        planeFloor.position.set(dConfig.BlockSize * j, 0, dConfig.BlockSize * i);
        planeFloor.rotation.x = 90 * Math.PI / 180;
        scene.add(planeFloor);

        // 空がない場合は天井を描画
        if (!mapInfo.skyUrl) {
          const planeCeil = new THREE.Mesh(fGeometry, cMaterial);
          planeCeil.position.set(dConfig.BlockSize * j, dConfig.BlockHeight, dConfig.BlockSize * i);
          planeCeil.rotation.x = 90 * Math.PI / 180;
          scene.add(planeCeil);
        }

        // 通路や部屋の上下左右で壁がある場合に壁を描画
        if (isWall(i - 1, j)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(dConfig.BlockSize * j, dConfig.BlockHeight / 2, dConfig.BlockSize * (i - 0.5));
          scene.add(planeWall);
        }
        if (isWall(i + 1, j)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(dConfig.BlockSize * j, dConfig.BlockHeight / 2, dConfig.BlockSize * (i + 0.5));
          scene.add(planeWall);
        }
        if (isWall(i, j - 1)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(dConfig.BlockSize * (j - 0.5), dConfig.BlockHeight / 2, dConfig.BlockSize * i);
          planeWall.rotation.y = 90 * Math.PI / 180;
          scene.add(planeWall);
        }
        if (isWall(i, j + 1)) {
          const planeWall = new THREE.Mesh(wGeometry, wMaterial);
          planeWall.position.set(dConfig.BlockSize * (j + 0.5), dConfig.BlockHeight / 2, dConfig.BlockSize * i);
          planeWall.rotation.y = 90 * Math.PI / 180;
          scene.add(planeWall);
        }
        // 通路と部屋の境目に扉を描画
        //宝箱と魔方陣を描画
        switch (state.MapSet[i][j]) {
          case dConfig.SetDoorUp:
            //この地点か一つ上の左右が壁の場合に描画
            setDoor(i, j, 'Up')
            break
          case dConfig.SetDoorUnder:
            //この地点か一つ下の左右が壁の場合に描画
            setDoor(i, j, 'Under')
            break
          case dConfig.SetDoorLeft:
            // この地点か一つ左の上下が壁の場合に描画
            setDoor(i, j, 'Left')
            break
          case dConfig.SetDoorRight:
            //この地点か一つ右の上下が壁の場合に描画
            setDoor(i, j, 'Right')
            break
          case dConfig.SetTreasure:
            //宝箱を配置
            setTreasure(i, j)
            break
          case dConfig.SetCircle:
            //魔方陣を配置
            setCircle(i, j)
            break
          default:
        }
        //中ボスを描画
        if (state.MapSet[i][j] >= 1000 && state.MapSet[i][j] < 2000) {
          setMidBoss(i, j, state.MapSet[i][j])
        }
        //ボスを描画
        if (state.MapSet[i][j] >= 2000) {
          setBoss(i, j, state.MapSet[i][j])
        }
      }
    }
  }
  //扉セット処理
  function setDoor(i: number, j: number, position: string) {
    //宝箱のロードと表示位置の設定
    console.log('setDoor_gltfDoor', gltfDoor)
    let groupDoor: THREE.Group = gltfDoor.scene.clone(true); // クローンを作成
    const meshDoor = new THREE.Mesh(dGeometry, dMaterial);
    let planeWallDoor: THREE.Mesh
    if (mapInfo.skyUrl) {
      planeWallDoor = new THREE.Mesh(wdGeometry, wMaterial);
    } else {
      planeWallDoor = new THREE.Mesh(wdGeometry, cMaterial);
    }

    switch (position) {
      case 'Up':
        groupDoor.position.set(dConfig.BlockSize * j, 0, dConfig.BlockSize * (i - 0.5));
        meshDoor.position.set(dConfig.BlockSize * j, dConfig.BlockHeight / 3, dConfig.BlockSize * (i - 0.5));
        planeWallDoor.position.set(dConfig.BlockSize * j, dConfig.BlockHeight / 1.3, dConfig.BlockSize * (i - 0.5));
        break
      case 'Under':
        groupDoor.position.set(dConfig.BlockSize * j, 0, dConfig.BlockSize * (i + 0.5));
        meshDoor.position.set(dConfig.BlockSize * j, dConfig.BlockHeight / 3, dConfig.BlockSize * (i + 0.5));
        planeWallDoor.position.set(dConfig.BlockSize * j, dConfig.BlockHeight / 1.3, dConfig.BlockSize * (i + 0.5));
        break
      case 'Left':
        groupDoor.position.set(dConfig.BlockSize * (j - 0.5), 0, dConfig.BlockSize * i);
        groupDoor.rotation.y = 90 * Math.PI / 180;
        meshDoor.position.set(dConfig.BlockSize * (j - 0.5), dConfig.BlockHeight / 3, dConfig.BlockSize * i);
        meshDoor.rotation.y = 90 * Math.PI / 180;
        planeWallDoor.position.set(dConfig.BlockSize * (j - 0.5), dConfig.BlockHeight / 1.3, dConfig.BlockSize * i);
        planeWallDoor.rotation.y = 90 * Math.PI / 180;
        break
      case 'Right':
        groupDoor.position.set(dConfig.BlockSize * (j + 0.5), 0, dConfig.BlockSize * i);
        groupDoor.rotation.y = 90 * Math.PI / 180;
        meshDoor.position.set(dConfig.BlockSize * (j + 0.5), dConfig.BlockHeight / 3, dConfig.BlockSize * i);
        meshDoor.rotation.y = 90 * Math.PI / 180;
        planeWallDoor.position.set(dConfig.BlockSize * (j + 0.5), dConfig.BlockHeight / 1.3, dConfig.BlockSize * i);
        planeWallDoor.rotation.y = 90 * Math.PI / 180;
        break
      default:
    }
    groupDoor.scale.set(0.5, 0.5, 0.5); //大きさの調整
    scene.add(groupDoor);
    scene.add(meshDoor);
    scene.add(planeWallDoor);
    let mixerDoor = new THREE.AnimationMixer(groupDoor)
    pushDoor()
    //
    function pushDoor() {
      doors.push({
        door: groupDoor,
        mesh: meshDoor,
        wall: planeWallDoor,
        mixer: mixerDoor,
        isOpen: false
      });
    }
  }
  //宝箱セット処理
  function setTreasure(i: number, j: number) {
    //宝箱のロードと表示位置の設定
    console.log('setTreasure_gltfTreasure', gltfTreasure)
    // let groupTreasure = new THREE.Group()
    // let mixerTreasure: THREE.AnimationMixer
    // groupTreasure = gltfTreasure.scene;
    let groupTreasure: THREE.Group = gltfTreasure.scene.clone(true); // クローンを作成
    groupTreasure.position.set(dConfig.BlockSize * j, 0, dConfig.BlockSize * i); //表示が歯車の上に来るように調整
    groupTreasure.scale.set(1.5, 1.5, 1.5); //大きさの調整
    scene.add(groupTreasure);
    let mixerTreasure = new THREE.AnimationMixer(groupTreasure)
    pushTreasure(groupTreasure, mixerTreasure)
    // });
    //SpotLight(色, 光の強さ, 距離, 照射角, ボケ具合, 減衰率)
    spotLight = new THREE.SpotLight(lightParams.point, 10, 20, Math.PI, 20, 1.0);
    spotLight.position.set(dConfig.BlockSize * j, 0, dConfig.BlockSize * i)
    scene.add(spotLight);
    //
    function pushTreasure(groupTreasure: THREE.Group, mixerTreasure: THREE.AnimationMixer) {
      treasures.push({
        treasure: groupTreasure,
        mixer: mixerTreasure,
        isOpen: false
      });
    }
  }
  //魔方陣セット処理
  function setCircle(i: number, j: number) {
    //魔方陣のロードと表示位置の設定
    // const gltfloader: GLTFLoader = new GLTFLoader();
    // gltfloader.load(Config.pathCircle, (gltf: GLTF) => {
    // gltfCircle = gltf;
    console.log('setCircle_gltfCircle', gltfCircle)
    groupCircle = gltfCircle.scene;
    groupCircle.position.set(dConfig.BlockSize * j, 0, dConfig.BlockSize * i); //表示が歯車の上に来るように調整
    // groupCircle.scale.set(1.5, 1.5, 1.5); //大きさの調整
    groupCircle.scale.set(3, 3, 3); //大きさの調整
    scene.add(groupCircle);
    mixerCircle = new THREE.AnimationMixer(groupCircle)
    // マテリアルの透過処理
    groupTransparent(groupCircle)
    // バウンディングボックスヘルパーの作成
    const boxHelper = new THREE.BoxHelper(groupCircle, 0xffff00);
    scene.add(boxHelper);
    // });
  }
  //中ボスセット処理
  function setMidBoss(i: number, j: number, monsterId: number) {
    //中ボスのロードと表示位置の設定
    console.log('setMidBoss', gltfMidBoss)
    let groupMidBoss: THREE.Group = gltfMidBoss.scene.clone(true); // クローンを作成
    groupMidBoss.position.set(dConfig.BlockSize * j, 0, dConfig.BlockSize * i); //表示が歯車の上に来るように調整
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
    function pushMidBoss(groupMidBoss: THREE.Group) {
      midBosses.push({
        id: monsterId, // 中ボスのID
        midBoss: groupMidBoss,
      });
    }
  }
  //ボスセット処理
  function setBoss(i: number, j: number, monsterId: number) {
    //中ボスのロードと表示位置の設定
    console.log('setBoss', gltfBoss)
    groupBoss = gltfBoss.scene;
    groupBoss.position.set(dConfig.BlockSize * j, 0, dConfig.BlockSize * i); //表示が歯車の上に来るように調整
    groupBoss.scale.set(0.6, 0.6, 0.6); //大きさの調整
    groupBoss.traverse((obj) => {
      if (obj.type === 'Mesh') {
        obj.receiveShadow = true;
        obj.castShadow = true;
        // } else if (obj.type === 'DirectionalLight') {
        //   obj.castShadow = true;
      }
    });
    scene.add(groupBoss)
    idBoss = monsterId
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

// let animateId: number;
// const animate = function () {
//   animateId = requestAnimationFrame(animate);
//   // requestAnimationFrame(animate);
//   //3dモデルアニメーション
//   const delta = clock.getDelta();
//   // 各扉のアニメーションを更新
//   doors.forEach(door => {
//     door.mixer.update(delta);
//   });
//   // 各宝箱のアニメーションを更新
//   treasures.forEach(treasure => {
//     treasure.mixer.update(delta);
//   });
//   //魔方陣のアニメーション
//   if (mixerCircle) mixerCircle.update(delta)
//   renderer.render(scene, camera);
// };

let gameLoopId: number
const clock = new THREE.Clock();
const gameLoop = () => {
  // カメラの位置を更新
  if (!camera.position.equals(targetPosition)) {
    camera.position.lerp(targetPosition, 0.05);
    if (mapInfo.light == 'pointLight') {
      pointLight.position.copy(targetPosition);
    }
  }
  // カメラの回転を更新
  if (camera.rotation.y !== targetRotation) {
    camera.rotation.y += (targetRotation - camera.rotation.y) * 0.10;
  }
  //空の回転を更新
  // if (mapInfo.skyUrl) {
  //   sphere.rotation.y += 0.0001;
  // }
  //3dモデルアニメーション
  const delta = clock.getDelta();
  // 各扉のアニメーションを更新
  doors.forEach(door => {
    door.mixer.update(delta);
  });
  // 各宝箱のアニメーションを更新
  treasures.forEach(treasure => {
    treasure.mixer.update(delta);
  });
  //魔方陣のアニメーション
  if (mixerCircle) mixerCircle.update(delta)
  renderer.render(scene, camera);

  gameLoopId = requestAnimationFrame(gameLoop); // 次のフレームでゲームループを再度呼び出す
}

// マウスクリックイベントを設定
let clickedTreasureId: number | null = null;
const handleClick = (event: MouseEvent) => {
  if (statusStore.processDungeon == config.processBattle) return;
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
      return
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
    const randomIndex = Math.floor(Math.random() * mapInfo.layers[nowLayer].treasureRank.length);
    // ランダムなインデックスの値をrankTreasureにセット
    const rankTreasure = mapInfo.layers[nowLayer].treasureRank[randomIndex];
    // Treasureを取得
    getTreasures.value = TreasureBox.getRandomTreasures(rankTreasure)
    getGold.value = randomNum(rankTreasure * 100, rankTreasure * 1000)
    console.log('clickTreasure', getTreasures.value, getGold.value)
    // 取得したTreasureを表示
    showUIStore.treasure = true
  }
  // 扉との交差を計算
  let clickedDoorId: number | null = null;
  const intersectsDoor = raycaster.intersectObjects(doors.map(t => t.door), true);
  // 扉が近くにある場合、3dモデルの親を取得
  if (rayObjects(intersectsDoor)) {
    const clickedScene = getScene(intersectsDoor[0].object)
    console.log('handleClick_clicked', clickedScene)
    const intersectedDoor = doors.find(t => t.door === clickedScene);
    // 未開封の宝箱なら開ける
    if (intersectedDoor && !intersectedDoor.isOpen) {
      console.log('handleClick_intersectedDoor', clickedScene.id, intersectedDoor)
      clickedDoorId = clickedScene.id; // クリックした宝箱のIDを保存
      intersectedDoor.isOpen = true;
      // アニメーションを開始
      console.log('clickDoor', intersectedDoor)
      const action = intersectedDoor.mixer.clipAction(gltfDoor.animations[0]);
      action.play();
      // 1秒後にアニメーションを停止
      setTimeout(() => {
        action.paused = true
      }, 900)
      return
    }
  }
};
//Objectとの距離を算出し、近くにあればtrueを返す
function rayObjects(Intersects: THREE.Intersection[]): Boolean {
  // 宝箱がクリックされた場合
  if (Intersects.length > 0) {
    if (Intersects[0].distance <= dConfig.BlockSize) {
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
      playerMove(dConfig.TurnLeft)
      break
    case 'd':
    case 'D':
      playerMove(dConfig.TurnRight)
      break
    default:
      playerMove(event.key)
  }
}
//十字キーでの移動
function playerMove(eventKey: string) {
  // console.log('playerMove_position', positionStore.playerPosition)
  //パーティorキャラクターui表示時
  if (statusStore.processDungeon == config.processBattle) return;
  // if (showUIStore.party || showUIStore.character || showUIStore.item || showUIStore.skill || showUIStore.treasure) return;
  if (showUIStore.isAnyUIShow) return;
  if (!camera) return

  const direction = new THREE.Vector3()
  camera.getWorldDirection(direction)
  let newPosition = positionStore.playerPosition.clone();

  switch (eventKey) {
    case dConfig.ArrowUp:
      // 上矢印キーが押されたときに前に進む
      newPosition.add(direction.multiplyScalar(dConfig.BlockSize));
      correctPosition()
      break
    case dConfig.ArrowDown:
      // 下矢印キーが押されたときに後ろに進む
      newPosition.sub(direction.multiplyScalar(dConfig.BlockSize));
      correctPosition()
      break
    case dConfig.ArrowLeft:
      // 左矢印キーが押されたときに左に進む
      newPosition.x += direction.z * (dConfig.BlockSize)
      newPosition.z -= direction.x * (dConfig.BlockSize)
      correctPosition()
      break
    case dConfig.ArrowRight:
      // 右矢印キーが押されたときに右に進む
      newPosition.x -= direction.z * (dConfig.BlockSize)
      newPosition.z += direction.x * (dConfig.BlockSize)
      correctPosition()
      break
    case dConfig.TurnLeft:
      // Aキーが押されたときに視点を左に90度回転
      targetRotation += Math.PI / 2; // 目標回転角度を更新
      break
    case dConfig.TurnRight:
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
    newPosition.x = Math.round(newPosition.x / dConfig.BlockSize) * dConfig.BlockSize;
    newPosition.z = Math.round(newPosition.z / dConfig.BlockSize) * dConfig.BlockSize;
  }
  // 新しい位置が壁でないことを確認
  let newX = Math.floor((newPosition.x + 5) / dConfig.BlockSize);
  let newY = Math.floor((newPosition.z + 5) / dConfig.BlockSize);
  // 新しい位置が壁でなければ、プレイヤーの位置を更新
  if (!isWall(newY, newX)) {
    // Raycasterのインスタンスを作成
    const raycaster = new THREE.Raycaster();
    // プレイヤーの現在の位置から新しい位置へのベクトルを作成
    const direction = newPosition.clone().sub(positionStore.playerPosition).normalize();
    // Raycasterを更新
    raycaster.set(positionStore.playerPosition, direction);
    // 扉との交差を計算
    const intersectsMesh = raycaster.intersectObjects(doors.map(t => t.mesh), true);
    // 扉が近くにある場合、3dモデルの親を取得
    if (rayObjects(intersectsMesh)) {
      const intersectedMesh = intersectsMesh[0].object;
      const intersectedDoor = doors.find(t => t.mesh === intersectedMesh);
      // 未開封の扉なら移動を停止
      if (intersectedDoor && !intersectedDoor.isOpen) return
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
    // 中ボスとの交差を計算
    if (midBosses) {
      const intersectsMidBoss = raycaster.intersectObjects(midBosses.map(t => t.midBoss), true);
      // 中ボスが近くにいる場合、選択肢
      if (rayObjects(intersectsMidBoss)) {
        const clickedScene = getScene(intersectsMidBoss[0].object)
        const intersectedMidBoss = midBosses.find(t => t.midBoss === clickedScene);
        // 中ボスのidを保持
        if (intersectedMidBoss) {
          idBoss = intersectedMidBoss.id
        }
        //応答画面表示
        confirmationMessage = config.msgBeforeMidBoss
        showUIStore.message = true;
        return
      }
    }
    // ボスとの交差を計算
    if (groupBoss) {
      const intersectsBoss = raycaster.intersectObject(groupBoss, true);
      // ボスが近くにいる場合、選択肢
      if (rayObjects(intersectsBoss)) {
        //応答画面表示
        confirmationMessage = config.msgBeforeBoss
        showUIStore.message = true;
        return
      }
    }
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
          confirmationMessage = config.msgLastLayer
        } else {
          //次に層に進む？
          confirmationMessage = config.msgNextLayer
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
    encounter += randomNum(dConfig.encountMin, dConfig.encountMax)
    // エンカウント確率が一定の水準に達したらエンカウントをトリガー
    if (encounter >= dConfig.encountLimit) {
      //出現モンスター設定
      setMonsterStore.setMonster(mapInfo.layers[nowLayer].monsterRank)
      triggerEncounter()
      encounter = 0 // エンカウント後は確率をリセット
    }
  }

}
// エンカウント処理
function triggerEncounter() {
  addNewLog(dConfig.logMonsterEncounter, 0)
  showUIStore.map = false
  statusStore.processDungeon = config.processBattle
}

//確認メッセージ毎に応答処理
const confirmationResponse = (response: string) => {
  showUIStore.message = false;
  if (response == config.textYes) {
    switch (confirmationMessage) {
      //次に層に進む
      case config.msgNextLayer:
        showLoading.value = true;
        showDungeon.value = false;
        nowLayer += 1
        resetDungeon()
        createLayer()
        break
      //最下層の場合、町に戻る
      case config.msgLastLayer:
        resetDungeon()
        stopAnimation()
        statusStore.status = config.statusTown
        break
      //中ボス戦
      case config.msgBeforeMidBoss:
      case config.msgBeforeBoss:
        setMonsterStore.setBoss(idBoss)
        triggerEncounter()
        break
      default:
    }
  }

};
//
function resetDungeon() {
  while (scene.children.length > 0) {
    const object = scene.children[0];
    scene.remove(object);
    disposeObject(object);
  }
  dungeon.value = null;
  //
  function disposeObject(object: any) {
    // ジオメトリを解放
    if (object.geometry) {
      object.geometry.dispose();
    }

    // マテリアルを解放
    if (object.material) {
      if (Array.isArray(object.material)) {
        for (const material of object.material) {
          material.dispose();
        }
      } else {
        object.material.dispose();
      }
    }

    // テクスチャを解放
    if (object.texture) {
      object.texture.dispose();
    }

    // カメラやライトなどの特殊なオブジェクトタイプのための追加の解放処理
    if (object instanceof THREE.SpotLight || object instanceof THREE.PointLight) {
      // 特別な解放処理をここに書く
      object.dispose()
    }
  }
}
// アニメーションを停止する関数
function stopAnimation() {
  // cancelAnimationFrame(animateId);
  cancelAnimationFrame(gameLoopId);
}
</script>

<style scoped>
.MapUI {
  position: absolute;
  top: 1vh;
  left: 1vw;
  /* border: 0.3vw ridge #E2D8A6; */
}

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