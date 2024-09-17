<template>
  <div>
    <h2 class="text-3xl block text-center mb-2">
      Animation Course
    </h2>
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
    <h2 class="text-3xl block text-center mb-2">
      Animation with GSAP
    </h2>
    <GsapTransition>
      <div v-if="show2" class="circle"></div>
    </GsapTransition>
    <br />
    <div>
      <button @click="show2 = !show2">Toggle</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FadeTransition from "@/components/animation/FadeTransition.vue";
import PopTransition from "@/components/animation/PopTransition.vue";
import GsapTransition from "@/components/animation/GsapTransition.vue";

const show = ref(true);
const show2 = ref(true);
</script>

<style lang="postcss" scoped>
.circle {
  @apply w-12 h-12 bg-green-500 rounded-full;
}
</style>