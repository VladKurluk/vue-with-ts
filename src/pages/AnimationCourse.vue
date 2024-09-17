<template>
  <div>
    <h1>Animation Course</h1>
    <FadeTransition>
      <span v-if="show">Hello Fade In</span>
    </FadeTransition>
    <br />
    <PopTransition>
      <span v-if="show">Hello Pop In</span>
    </PopTransition>
    <br />
    <div>
      <button @click="show = !show">Toggle</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FadeTransition from "@/components/animation/FadeTransition.vue";
import PopTransition from "@/components/animation/PopTransition.vue";

const show = ref(true);
</script>

<style scoped>

</style>