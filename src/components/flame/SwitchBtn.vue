<template>
  <div class="outline" @click="change">
    <span v-if="showFirst" class="first">{{switchWord![0]}}</span>
    <span v-else class="second">{{switchWord![1]}}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  switchWord: { type: Array },
});

const showFirst = ref(true);

const change = () => {
  showFirst.value = !showFirst.value;
};

</script>
<style scoped>
.outline {
  background: rgba(59, 65, 60, 0.50);
  font-family: "Verily Serif Mono";
  /* font-family: "BreeSerif"; */
  color: #F2EDD5;
  font-size: 4vh;
  border-radius: 1.2vw;
  border: 0.8vh ridge #3CD0E3;
  width:12vw;
}
.first {
  background: #624CAB80;
  padding: 0.8vh 1vw;
  border-radius: 1vw;
  border-right: 0.8vh ridge #3CD0E3;
}

.second {
  float: right;
  background: #624CAB80;
  padding: 0vh 1vw;
  border-radius: 1vw;
  border-left: 0.8vh ridge #3CD0E3;
}

</style>