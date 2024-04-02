import { defineStore } from 'pinia';
import Config from '@/config.ts';

export const useStatusStore = defineStore('status', {
  state: () => ({
    status: Config.statusOpening,
    process: Config.processSearch,
    action: '',
  }),
});