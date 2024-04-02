import { defineStore } from 'pinia';
import * as THREE from 'three';

export const usePositionStore = defineStore('position', {
  state: () => ({
    // playerPosition: new THREE.Vector3(),
    playerPosition: new THREE.Vector3(),
  }),
});