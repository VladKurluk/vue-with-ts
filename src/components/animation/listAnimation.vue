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
    <h4 class="py-5 text-2xl text-center font-bold">
      List Animation with GSAP
    </h4>
    <input
      type="search"
      v-model="search"
      class="mb-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li
        v-for="(creature, index) in matches"
        :key="creature.name"
        :data-index="index"
      >
        {{ creature.name }}
        <button
          class="!p-1 !text-xs !rounded-full"
          @click="pokemon.splice(index, 1)"
        >X</button>
      </li>
    </TransitionGroup>
    <button
      class="mt-5"
      @click="shuffleArray<Pokemon>(pokemon)"
    >
      Shuffle
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import gsap from "gsap";
import { shuffleArray } from "@/helpers/shuffleArray";

export type Pokemon = {
  name: string;
  url: string;
};

const pokemon = ref<Pokemon[]>([]);
const search = ref("");
const matches = computed<Pokemon[]>(() =>
  pokemon.value.filter((p) =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

fetch("https://pokeapi.co/api/v2/pokemon?limit=7").then(async (res) => {
  pokemon.value = (await res.json()).results;
});

function onBeforeEnter(el: Element): void {
  const htmlEl = el as HTMLElement;
  htmlEl.style.opacity = "0";
  htmlEl.style.height = "0";
}
function onEnter(el: Element, done: () => void): void {
  const htmlEl = el as HTMLElement;
  const index = parseFloat(htmlEl.dataset.index || "0");
  gsap.to(el, {
    opacity: 1,
    height: "1.6em",
    delay: index * 0.1,
    onComplete: done,
  });
}
function onLeave(el: Element, done: () => void): void {
  const htmlEl = el as HTMLElement;
  const index = parseFloat(htmlEl.dataset.index || "0");
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: index * 0.1,
    onComplete: done,
  });
}
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
