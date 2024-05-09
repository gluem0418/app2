<template>
  <canvas ref="MapUI"></canvas>
</template>
  
<script setup lang="ts">
import { ref, watch, Ref, nextTick } from 'vue';
import * as THREE from 'three';
import Config from '@/config.ts';
import { MapData } from '@/Process//CreateDungeon.ts';

//プレイヤー現在地
import { usePositionStore } from '@/stores/Position.ts';
const positionStore = usePositionStore();

const MapUI: Ref<HTMLCanvasElement | undefined> = ref();

//img import
import img_Position from '/icon/playerPosition.png';
const playerIcon = new Image();
playerIcon.src = img_Position;

let prevPlayerPosition: THREE.Vector3 | null = null;

// ミニマップを描画
const initMapUI = () => {

  if (MapData!.length == 0) return;
  if (!MapUI.value) return;
  const ctx = MapUI.value?.getContext('2d');
  if (!ctx) return;
  MapUI.value.height = Config.MiniHeight

  for (let i = 0; i < MapData!.length; i++) {
    for (let j = 0; j < MapData![i].length; j++) {
      switch (MapData![i][j]) {
        case 0: // 壁
          ctx.fillStyle = Config.MiniWallColor;
          break;
        case 1: // 部屋                
        case 2: // 通路
          ctx.fillStyle = Config.MiniRoomColor;
          break;
      }
      ctx.fillRect(j * 3, i * 3, 3, 3);
    }
  }
  playerMove()
};

// ミニマップを更新
const playerMove = () => {

  const ctx = MapUI.value?.getContext('2d');
  if (!ctx) return;
  if (!positionStore.playerPosition) return;
  // プレイヤーの描画
  // playerIcon.src = img_Position;
  // 前のプレイヤーの位置
  // if (prevPlayerPosition) {
  if (prevPlayerPosition) {
    ctx.fillStyle = Config.MiniMoveColor;
    ctx.fillRect(Math.floor(prevPlayerPosition.x / Config.BlockSize - 1) * 3, Math.floor(prevPlayerPosition.z / Config.BlockSize - 1) * 3, Config.BlockSize, Config.BlockSize);
  }
  // プレイヤーの現在地
  ctx.drawImage(playerIcon, Math.floor(positionStore.playerPosition.x / Config.BlockSize - 1) * 3, Math.floor(positionStore.playerPosition.z / Config.BlockSize - 1) * 3, Config.BlockSize, Config.BlockSize);
  // プレイヤーの現在地を保存
  prevPlayerPosition = positionStore.playerPosition.clone();
};

watch(() => MapData, () => {
  nextTick(initMapUI);
}, { immediate: true, deep: true });

watch(() => positionStore.playerPosition, () => {
  // nextTick(playerMove);
  playerMove();
}, { immediate: true, deep: true });

</script>
  
<style scoped>
</style>