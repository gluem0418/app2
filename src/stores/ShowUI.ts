import { defineStore } from 'pinia';

export const useShowUI = defineStore('showUI', {
  state: () => ({
    map: true,
    current: true,
    party: false,
    character: false,
    message: false,
    errorMessage: false,
  }),
});