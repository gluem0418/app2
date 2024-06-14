<template>
  <div class="Loading" :style="{ backgroundImage: 'url(' + randomImg + ')' }">
    <div class="message">{{ Config.msgNowLoading }}</div>
  </div>
</template>
  
<script setup lang="ts">

import { ref } from 'vue';

import Config from '@/config.ts';

import imgBack01 from '/img/character/chara1back.jpg';
import imgBack02 from '/img/character/chara2back.jpg';
import imgBack03 from '/img/character/chara3back.jpg';
import imgBack04 from '/img/character/chara4back.jpg';
import imgBack05 from '/img/character/chara5back.jpg';
import imgBack06 from '/img/character/chara6back.jpg';
import imgBack07 from '/img/character/chara7back.jpg';


const alyImgBack = new Array(
  imgBack01, imgBack02, imgBack03, imgBack04, imgBack05, imgBack06, imgBack07)

let indexImg = Math.floor(Math.random() * alyImgBack.length);
const randomImg = ref(alyImgBack[indexImg])

</script>
<style scoped>
.Loading {
  position: fixed;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}


@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: black; }
}
.message {
  text-align: center;
  margin-right: 2vw;
  margin-bottom: 2vh;
  /* アニメーションの適用 */
  white-space: nowrap;
  overflow: hidden;
  border-right: .15em solid black; /* カーソルのような効果 */
  width: 0;
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}
</style>