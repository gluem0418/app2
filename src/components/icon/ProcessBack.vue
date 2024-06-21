<template>
  <IconBack class="IconBack" @click="clickBack" />
</template>

<script setup lang="ts">
import IconBack from '@/components/icon/IconBack.vue';
import config from '@/config/commonConfig.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()
//UI表示
import { useShowUI } from '@/stores/ShowUI.ts';
const showUIStore = useShowUI()

function clickBack() {
  if (showUIStore.message) {
    showUIStore.message = false
  } else if (showUIStore.character) {
    showUIStore.character = false
  } else if (statusStore.guildMenu) {
    statusStore.guildMenu = ''
  } else {
    statusStore.processTown = config.statusTown
  }
}

</script>

<style scoped>
</style>