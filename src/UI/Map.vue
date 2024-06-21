<template>
  <div>
    <div class="miniMapFlame">
      <canvas class="miniMap" ref="MapUI" @click="clickMap()"></canvas>
    </div>
    <div v-show="showFullMap" class="modal" @click="clickMap()">
      <div class="fullMapFlame">
        <canvas class="fullMap" ref="fullMap" ></canvas>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, Ref, nextTick } from 'vue';
import dConfig from '@/config/dungeonConfig.ts';
import { state } from '@/process//CreateDungeon.ts';

//プレイヤー現在地
import { usePositionStore } from '@/stores/Position.ts';
const positionStore = usePositionStore();
// let prevPlayerPosition: THREE.Vector3 | null = null;

const MapUI: Ref<HTMLCanvasElement | undefined> = ref();
const fullMap: Ref<HTMLCanvasElement | undefined> = ref();

//img import
import img_Position from '/icon/playerPosition.png';
const playerIcon = new Image();
playerIcon.src = img_Position;

// マップ全体を表示するフラグ
const showFullMap = ref(false);

// ミニマップを描画
const initMapUI = () => {
  if (state.MapData!.length == 0 || !fullMap.value || !MapUI.value) return;
  const fullCtx = fullMap.value.getContext('2d');
  if (!fullCtx) return;

  fullMap.value.width = state.MapData[0].length * 3;
  fullMap.value.height = state.MapData.length * 3;
  MapUI.value.width = 40 * 3
  MapUI.value.height = 40 * 3

  for (let i = 0; i < state.MapData!.length; i++) {
    for (let j = 0; j < state.MapData![i].length; j++) {
      switch (state.MapData![i][j]) {
        // case 0: // 壁
        //   fullCtx.fillStyle = config.MiniWallColor;
        //   break;
        case 1: // 部屋                
        case 2: // 通路
          fullCtx.fillStyle = dConfig.MiniRoomColor;
          fullCtx.fillRect(j * 3, i * 3, 3, 3);
          break;
      }
    }
  }
  playerMove();
};

// ミニマップを更新
const playerMove = () => {
  if (!MapUI.value || !fullMap.value || !positionStore.playerPosition) return;
  const ctx = MapUI.value?.getContext('2d');
  const fullCtx = fullMap.value.getContext('2d');
  if (!ctx || !fullCtx) return;

  // プレイヤーの現在地
  const playerX = Math.floor(positionStore.playerPosition.x / dConfig.BlockSize - 1);
  const playerZ = Math.floor(positionStore.playerPosition.z / dConfig.BlockSize - 1);

  ctx.clearRect(0, 0, MapUI.value.width, MapUI.value.height);
  ctx.drawImage(fullMap.value, playerX * 3 - 20 * 3, playerZ * 3 - 20 * 3, 40 * 3, 40 * 3, 0, 0, 40 * 3, 40 * 3);
  // playerIcon.onload = function() {
  ctx.drawImage(playerIcon, 20 * 3, 20 * 3, dConfig.BlockSize, dConfig.BlockSize);
  // }

  // プレイヤーの現在地を探索済みとしてマーク
  fullCtx.fillStyle = dConfig.MiniMoveColor;
  fullCtx.fillRect((playerX + 1) * 3, (playerZ + 1) * 3, 3, 3);

  // プレイヤーの現在地を保存
  // prevPlayerPosition = positionStore.playerPosition.clone();
};

function clickMap() {
  showFullMap.value = !showFullMap.value;
  playerMove();
  console.log('clickMap', showFullMap)
}

watch(() => state.MapData, () => {
  nextTick(initMapUI);
}, { immediate: true, deep: true });

watch(() => positionStore.playerPosition, () => {
  playerMove();
}, { immediate: true, deep: true });

</script>

<style scoped>
.miniMapFlame {
  background-image: url('/img/flame/flame050802.jpg');
  background-size: 100% 100%;
  padding: 3vh 1.5vw;
  width: 19vw;
  height: 36vh;
}

.miniMap {
  height: 30vh;
  width: 16vw;
}


.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.fullMapFlame {
  margin: 2vh 15vw;
  background-image: url('/img/flame/flame050802.jpg');
  /* background-image: url('/img/flame/flame05081.png'); */
  background-size: 100% 100%;
  padding: 5vh 3vw;
  height: 95vh;
  width: 70vw;
}

.fullMap {
  /* border-radius: 1vw; */
  height: 90vh;
  width: 60vw;
}
</style>@/process/CreateDungeon