<template>
  <div v-if="pokemon.length">
    <TransitionGroup
      tag="ul"
      leave-active-class="animate__animated animate__fadeOutRight absolute"
    >
      <li v-for="(creature, index) in pokemon" :key="creature.name">
        {{ creature.name }}
        <button
          class="!p-1 !text-xs !rounded-full"
          @click="pokemon.splice(index, 1)"
        >X</button>
      </li>
    </TransitionGroup>
    <button
      class="mt-5"
      @click="shuffleArray(pokemon)"
    >
      Shuffle
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { shuffleArray } from "@/helpers/shuffleArray";

export type Pokemon = {
  name: string;
  url: string;
};

const pokemon = ref<Pokemon[]>([]);
fetch("https://pokeapi.co/api/v2/pokemon?limit=7").then(async (res) => {
  pokemon.value = (await res.json()).results;
});
</script>

<style>
.v-move {
  transition: all 0.5s ease;
}
</style>

<style lang="postcss" scoped>
button {
  @apply inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
}
</style>
