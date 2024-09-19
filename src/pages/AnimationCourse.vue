<template>
  <section class="card mb-2.5">
    <h2>Animation Basic</h2>
    <div class="h-20 mb-2">
      <FadeTransition>
        <p
          v-if="show"
          class="font-normal text-gray-700 dark:text-gray-400"
        >
          Hello Fade In
        </p>
      </FadeTransition>
      <br />
      <PopTransition>
        <p
          v-if="show"
          class="font-normal text-gray-700 dark:text-gray-400"
        >
        Hello Pop In
        </p>
      </PopTransition>
    </div>
    <div>
      <button @click="show = !show">Toggle</button>
    </div>
  </section>
  <section class="card mb-2.5">
    <h2>Animation with GSAP</h2>
    <div class="h-14 mb-2">
      <GsapTransition>
        <div v-if="showGsap" class="circle"></div>
      </GsapTransition>
    </div>
    <div>
      <button @click="showGsap = !showGsap">Toggle</button>
    </div>
  </section>
  <section class="card mb-2.5">
    <h2>Animation with Animate.css</h2>
    <div class="h-14 mb-2">
      <RubberBandTransition>
        <div v-if="showAnimateCss" class="circle"></div>
      </RubberBandTransition>
    </div>
    <div>
      <button @click="showAnimateCss = !showAnimateCss">Toggle</button>
    </div>
  </section>
  <section class="card mb-2.5">
    <h2>Transition Group</h2>
    <listAnimation />
  </section>
  <section class="card">
    <h2>AutoAnimate Plugin</h2>
    <ShufleColors />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "animate.css";

import FadeTransition from "@/components/animation/FadeTransition.vue";
import PopTransition from "@/components/animation/PopTransition.vue";
import GsapTransition from "@/components/animation/GsapTransition.vue";
import RubberBandTransition from "@/components/animation/RubberBandTransition.vue";
import listAnimation from "@/components/animation/listAnimation.vue";
import ShufleColors from "@/components/animation/ShufleColors.vue";

const show = ref(true);
const showGsap = ref(true);
const showAnimateCss = ref(true);
</script>

<style lang="postcss" scoped>
.card {
  @apply block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
}

.card h2 {
  @apply mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white;
}

.card button {
  @apply inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
}
.circle {
  @apply w-12 h-12 bg-green-500 rounded-full;
}
</style>