import { defineStore } from 'pinia';

export const useAudioStore = defineStore('audio', {
  state: () => ({
    currentBgm: null as string | null,
    audioElements: {} as Record<string, HTMLAudioElement>,
  }),
  actions: {
    playBgm(bgmName: string) {
      if (this.currentBgm) {
        this.audioElements[this.currentBgm].pause();
      }
      if (!this.audioElements[bgmName]) {
        // this.audioElements[bgmName] = new Audio(require(`@/assets/${bgmName}.mp3`));
        this.audioElements[bgmName] = new Audio(`music/bgm/${bgmName}.mp3`);
        this.audioElements[bgmName].loop = true;
      }
      this.audioElements[bgmName].currentTime = 0;
      this.audioElements[bgmName].play();
      this.currentBgm = bgmName;
    },
    playSfx(sfxName: string) {
      const audio = new Audio(require(`music/se/${sfxName}.mp3`));
      audio.play();
    },
  },
});