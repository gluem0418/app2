import { defineStore } from 'pinia';
import Config from '@/config.ts';

export const useStatusStore = defineStore('status', {
  state: () => ({
    status: Config.statusOpening,
    processTown: Config.statusTown,
    processDungeon: '',
    guildMenu: '',
    whichDungeon: '',
    // musicDungeon: '',
  }),
});