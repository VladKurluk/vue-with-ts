<template>
  <button
    @click="toggleNavMenu"
    type="button"
    class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
  >
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    <span class="sr-only">Main Menu</span>
  </button>
  <!-- drawer component -->
  <Transition>
    <div
      v-if="isVisibleMenu"
      id="drawer-navigation"
      class="fixed top-0 left-0 z-40 w-80 h-screen p-4 overflow-y-auto bg-white dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        type="button"
        aria-controls="drawer-navigation"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        @click="toggleNavMenu"
      >
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <navigationItem
            v-for="(link, index) in mainMenu"
            :key="index"
            :menuItem="link"
            :menuVisibility="isVisibleMenu"
          />
        </ul>
      </div>
    </div>
  </Transition>
  <Transition name="overlay">
    <div
      v-show="isVisibleMenu"
      class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"
      @click="isVisibleMenu = false"
    ></div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import navigationItem from './navigationItem.vue';
import { mainMenu } from '@/config/mainMenu';

const isVisibleMenu = ref(false);

const toggleNavMenu = (): void => {
  isVisibleMenu.value = !isVisibleMenu.value;
};
</script>

<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  @apply transition-transform;
}

.v-enter-from,
.v-leave-to {
  @apply -translate-x-full;
}

.v-enter-active {
  @apply delay-150;
}

.v-leave-from {
  @apply translate-x-full;
}

.overlay-enter-active,
.overlay-leave-active {
  @apply transition-opacity;
}

.overlay-enter-from,
.overlay-leave-to {
  @apply opacity-0 delay-150;
}

.overlay-enter-to,
.overlay-leave-from {
  @apply opacity-100;
}
</style>
