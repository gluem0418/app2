<template>
  <div class="actionLog">
    <div class="logWindow" v-show="showLog">
      <ul class="logTab">
        <li v-for="item in logType" @click="selectLogType(item)" :class="{ 'selected-tab': item == selectedLogType }"
          class="tabItem">
          {{ item }}
        </li>
      </ul>
      <IconClose class="IconClose" @click="clickClose()" />
      <ul v-if="selectedLogType" class="logList" density="compact">
        <li v-for="(log, index) in (logStore as any)[selectedLogType]" :key="index" class="logMessage">
          {{ log }}
        </li>
      </ul>
    </div>
    <!-- <div class="iconLog" v-show="!showLog"> -->
    <img class="iconLog" v-show="!showLog" :src="imgLog" alt="Log" @click="clickLog()">
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import config from '@/config/commonConfig.ts';
import { LogService } from '@/process//LogService.ts';

import IconClose from '@/components/icon/IconClose.vue';
import imgLog from "/icon/message1.svg"

//log
import { useLogStore } from '@/stores/Log.ts';
const logStore = useLogStore()
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()

//logの表示を管理
const showLog = ref(false);

//logのタイプ
const logType: string[] = [config.strLog1, config.strLog2]
const selectedLogType = ref();
const selectLogType = (item: string) => {
  selectedLogType.value = item;
};

// // 新しい行動をログに追加する関数を定義します。
// function addLog(log: string, kind: number) {
//   if (kind == 0) {
//     logStore.GENERAL.push(log);
//   } else {
//     logStore.BATTLE.push(log);
//   }
//   // ログが追加されるたびにスクロール位置を最下部に設定します。
//   nextTick(() => {
//     scrollTop()
//   });
// };

function clickLog() {
  showLog.value = true
}

function clickClose() {
  showLog.value = false
}

// function scrollTop() {
//   const container = document.querySelector('.logList');
//   if (container) {
//     container.scrollTop = container!.scrollHeight;
//   }
// }
// 再ロード時に最新のログを表示
onMounted(() => {
  selectedLogType.value = statusStore.processDungeon == config.processBattle ? config.strLog2 : config.strLog1
  const logService = new LogService();
  logService.scrollTop()
})

// defineExpose({
//   addLog,
// });
</script>

<style scoped>
.actionLog {
  font-family: serif;
  color: #F2EDD5;
  font-size: 2.5vh;
  /* border-radius: 2vw; */
}

.logWindow {
  width: 30vw;
  background: rgba(59, 65, 60, 0.7);
  border-radius: 1vw;
}

.iconLog {
  width: 4.5vw;
}


.logTab {
  /* height: 4.5vh; */
  display: flex;
  text-align: center;
  list-style-type: none;
  color: #E2D8A6;
  font-size: 3vh;
  /* padding: 0.5vh 0vw; */
  /* font-size: 3.4vh; */
  /* font-family: "Vidaloka"; */
  border-bottom: 0.4vh outset #E2D8A6;
  font-family: "Verily Serif Mono";
}

.tabItem {
  padding: 0vh 2vw;
  /* width: 33%; */
}

.selected-tab {
  background: #624CAB80;
  border-radius: 1vw;
}

.IconClose {
  position: absolute;
  top: -0.2vh;
  right: -0.2vw;
}

.logList {
  height: 26vh;
  color: #F2EDD5;
  margin-left: 0.7vw;
  overflow-y: auto;
}

.logMessage {
  list-style-type: none;
}
</style>
@/process/LogService