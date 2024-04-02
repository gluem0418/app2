<template>
  <div class="BattleGrid" ref="BattleGrid"></div>
</template>

<script setup lang="ts">
// Vue3 Composition APIとThree.jsをインポート
import { ref, onMounted, inject } from 'vue'
import * as THREE from 'three'

import Monster from '@/Class/Monster.ts';
import Config from '@/config.ts';
import { randomNum } from '@/Process/Common.ts';

const BattleGrid = ref<HTMLElement | null>(null);

let scene = new THREE.Scene()
// let camera = new THREE.OrthographicCamera(-15, 15, 5, -5, 0.1 , 1000 ); 
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ alpha: true });

// カメラの位置を設定
camera.position.set(0, 7, 5);
camera.lookAt(new THREE.Vector3(0, -2, 0));
// camera.lookAt(new THREE.Vector3(0, 0, 0));
// camera.up.set(0, 0, 0);　

const monsterList = inject('monsterList') as Monster[];

import img_mon1 from '/img/monster/mon1.png';
import img_cha1 from '/img/character/chara1.png';

onMounted(() => {

  // 出現モンスターを作成
  const numMonsters = randomNum(Config.monNumMin, Config.monNumMax)
  const selectedMonsters = [];
  for (let i = 0; i < numMonsters; i++) {
    const randomIndex = Math.floor(Math.random() * monsterList.length);
    selectedMonsters.push(monsterList[randomIndex]);
  }

  // グリッドを作成
  const monstergrid = new THREE.GridHelper(9, 3)
  monstergrid.position.x = -5; // 左側に配置
  scene.add(monstergrid)

  const charactergrid = new THREE.GridHelper(9, 3)
  charactergrid.position.x = 5; // 右側に配置
  scene.add(charactergrid)

  // テクスチャローダーを作成
  const loader = new THREE.TextureLoader()

  // モンスターとキャラクターの画像テクスチャをロード
  const monsterTexture = loader.load(img_mon1)
  const characterTexture = loader.load(img_cha1)

  // モンスターとキャラクターを作成（ここでは平面ジオメトリを使用）
  const geometry = new THREE.PlaneGeometry(3, 3)

  // モンスターとキャラクターを配置
  for (let i = 1; i < 4; i++) {
    const monsterMaterial = new THREE.MeshBasicMaterial({ map: monsterTexture, transparent: true })
    const monster = new THREE.Mesh(geometry, monsterMaterial)
    monster.rotation.x = -1;
    // monster.rotation.y = 1.5;
    monster.position.set(2 -(i * 3.8), 0, 0)
    scene.add(monster)

    const characterMaterial = new THREE.MeshBasicMaterial({ map: characterTexture, side: THREE.DoubleSide, transparent: true })
    const character = new THREE.Mesh(geometry, characterMaterial)
    character.rotation.x = -1;
    character.position.set(-1.4 + (i * 3.4), 0, 0)
    scene.add(character)
  }

  // test camera
  // camera.position.set(2, 4, -0.5);
  // camera.lookAt(new THREE.Vector3(-2, 0, -0.5));
  // レンダラーを作成
  // const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  BattleGrid.value?.appendChild(renderer.domElement)

  // アニメーション
  const animate = function () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()
})
</script>
<style scoped>
.BattleGrid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
}
</style>