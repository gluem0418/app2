import { defineStore } from 'pinia';
import config from '@/config/commonConfig.ts';

export const useStatusStore = defineStore('status', {
  state: () => ({
    status: config.statusOpening,
    processTown: config.statusTown,
    processDungeon: '',
    guildMenu: '',
    whichDungeon: '',
    musicDungeon: '',
  }),
});