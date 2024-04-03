// useFullscreen.ts
import { ref } from 'vue';

export default function useFullscreen() {
  const isFullscreen = ref(false);

  const enterFullscreen = async () => {
    try {
      await document.documentElement.requestFullscreen();
      isFullscreen.value = true;
    } catch (err) {
      console.error(err);
    }
  };

  const exitFullscreen = async () => {
    try {
      await document.exitFullscreen();
      isFullscreen.value = false;
    } catch (err) {
      console.error(err);
    }
  };

  return { isFullscreen, enterFullscreen, exitFullscreen };
}