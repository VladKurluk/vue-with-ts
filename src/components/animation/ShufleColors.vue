<script setup lang="ts">
import { ref } from "vue";
import { shuffleArray } from "@/helpers/shuffleArray";

// generate random color
const randomColor = (): string => {
  const randomColor: string = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

const colors = ref<string[]>(Array.from({ length: 18 }, () => randomColor()));
</script>

<template>
  <button
    class="w-full mb-5"
    @click="shuffleArray<string>(colors)"
  >
    Shuffle
  </button>
  <div class="flex flex-wrap" v-auto-animate>
    <div
      class="box"
      v-for="(color, i) in colors"
      @click="colors.splice(i, 1)"
      :key="color"
      :style="{ backgroundColor: color }"
    ></div>
  </div>
</template>

<style lang="postcss" scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 5px;
}

button {
  @apply inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
}
</style>