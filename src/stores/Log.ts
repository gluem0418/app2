import { defineStore } from 'pinia';

// LogStoreの型を定義します。
export const useLogStore = defineStore('log', {
  state: () => ({
    GENERAL: [] as string[],
    BATTLE: [] as string[],
  }),
});