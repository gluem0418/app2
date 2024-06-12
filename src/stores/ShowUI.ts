import { defineStore } from 'pinia';

type State = {
  map: boolean;
  current: boolean;
  party: boolean;
  character: boolean;
  item: boolean;
  skill: boolean;
  treasure: boolean;
  message: boolean;
  errorMessage: boolean;
  [key: string]: any;  // インデックスシグネチャを追加
};

export const useShowUI = defineStore('showUI', {
  state: () :State => ({
    map: true,
    current: true,
    party: false,
    character: false,
    item: false,
    skill: false,
    treasure: false,
    message: false,
    errorMessage: false,
  }),
  getters: {
    // 追加：UIが表示されているかどうかを判定するgetter
    isAnyUIShow(state:State) {
      // UIに関連するプロパティの配列
      const uiProperties = ['party', 'character', 'item', 'skill', 'treasure', 'message'];
      // いずれかのUIが表示されているかどうかを返す
      return uiProperties.some(prop => state[prop]);
    },
  },
});