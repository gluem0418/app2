// import { ref, watchEffect } from 'vue';

export default function useFullscreen() {

  // const isFullscreen = ref(document.fullscreenElement !== null);

  // watchEffect(() => {
  //   document.onfullscreenchange = () => {
  //     isFullscreen.value = document.fullscreenElement !== null;
  //     console.log(document.fullscreenElement, isFullscreen.value)
  //   };
  // });

  // watchEffect(() => {
  //   document.onfullscreenchange = () => {
  //     isFullscreen.value = document.fullscreenElement == null ? false : true;
  //   };
  // });

  const enterFullscreen = async () => {
    try {
      await document.documentElement.requestFullscreen();
      // isFullscreen.value = true;
    } catch (err) {
      console.error(err);
    }
  };

  const exitFullscreen = async () => {
    try {
      await document.exitFullscreen();
      // isFullscreen.value = false;
    } catch (err) {
      console.error(err);
    }
  };

  // return { isFullscreen, enterFullscreen, exitFullscreen };
  return { enterFullscreen, exitFullscreen };
}