<template>
  <div v-if="character" class="CharaCardUI">
    <div class="line1">
      <span class="name">{{ character.name }}</span>
      <span class="leftItem">
        <span class="statuskinds">LV&nbsp;</span>
        <span>{{ character.LV }}</span>
      </span>
    </div>
    <div class="line2">
      <span class="statuskinds">CLASS</span>
      <span class="leftItem">{{ character.class }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import Character from '@/class/Character.ts';

const props = defineProps({
  character:  { type: Character }
});

</script>

<style scoped>
.CharaCardUI {
  background-image: url('/img/flame/f020311.png');
  background-size: 100% 100%;
  color: #F2EDD5;
  font-family: serif;
  font-size: 2.8vh;
  padding: 3.5vh 5vw;
  position: relative;
  height: 15vh;
  width: 26vw;
  text-align: center;
}

.line1 {
  width: 100%;
  line-height:4vh;
}

.name {
  font-family: "Trade Winds";
  font-size: 4vh;
}

.statuskinds {
  font-family: "Verily Serif Mono";
  color: #E2D8A6;
}

.leftItem {
  margin-left: 1vw;
}
</style>