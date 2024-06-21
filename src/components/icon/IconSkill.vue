<template>
  <img class="Icon" :src="img" alt="Attack">
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

import imgSkill from "/icon/SkillOrb.png"
import imgMagic from "/icon/MagicOrb.png"

import config from "@/config/battleConfig";

const props = defineProps({
  characterType: { type: String },
});

const img = ref()
if (props.characterType == config.actionSkill) {
  img.value = imgSkill
} else {
  img.value = imgMagic
}

</script>

<style scoped>
.Icon {
  height: 14vh;
}
</style>