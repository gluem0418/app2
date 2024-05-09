// LogService.ts
import { nextTick } from 'vue';
import { useLogStore } from '@/stores/Log.ts';

export class LogService {
  logStore = useLogStore()

  addNewLog(log: string, kind: number) {
    this.addLog(log, kind);
  }

  addLog(log: string, kind: number) {
    if (kind == 0) {
      this.logStore.GENERAL.push(log);
    } else {
      this.logStore.BATTLE.push(log);
    }
    // ログが追加されるたびにスクロール位置を最下部に設定します。
    nextTick(() => {
      this.scrollTop()
    });
  }

  scrollTop() {
    const container = document.querySelector('.logList');
    if (container) {
      container.scrollTop = container!.scrollHeight;
    }
  }
}
