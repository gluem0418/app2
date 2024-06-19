<template>
  <div class="TurnOrder">
    <div v-for="(order, index) in turnOrder" v-show="order.nowHP > 0" :key="index" class="turnOrderFlame"
      :class="{ currentOrder: index == numOrder }" :style="{
        backgroundImage: 'url(' + getFlameImage(order) + ')',
        zIndex: index == numOrder ? 1000 : turnOrder!.length - index}">
      <img :src="getOrderImage(order)" alt="" class="turnOrderImage">
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Character from '@/class/Character.ts'
import Monster from '@/class/Monster.ts';

import characterFlame from "/img/flame/flame032401.png"
import monsterFlame from "/img/flame/flame032402.png"

type fighter = Character | Monster

const props = defineProps({
  turnOrder: Array as PropType<fighter[]>,
  numOrder: Number
});

//フレーム読み込み
// キャラクターとモンスター別にフレームをを取得する関数
const getFlameImage = (order: fighter) => {
  return order instanceof Character ? characterFlame : monsterFlame;
};
// 行動順にキャラクターの画像を取得する関数
const getOrderImage = (order: fighter) => {
  return order instanceof Character ? order.faceGraphicUrl : order.GraphicUrl;
};

</script>
<style scoped>
.TurnOrder {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.turnOrderFlame {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 7vw;
  height: 14vh;
  margin-top: -6vh;
  text-align:center;
}

.currentOrder {
  animation: blink 1s ease infinite alternate;
}

@keyframes blink {
  0% {}

  100% {
    background-color: #F2EDD5;
  }
}

.turnOrderImage {
  padding-top: 1.5vh;
  height: 92%;
}
</style>