<script setup lang="ts">
import { ref, watch } from 'vue';
import type { MenuItem, MenuItemWithRoute, MenuItemWithSubmenu } from "@/types/MainMenu";

const props = defineProps<{
  menuItem: MenuItem;
  menuVisibility: boolean;
}>();

watch(
  () => props.menuVisibility,
  (menuVisible) => {
    if (!menuVisible) {
      isCoursesSubmenuVisible.value = false;
    }
  }
);

const isCoursesSubmenuVisible = ref(false);
</script>

<template>
  <li>
    <template v-if="!menuItem.submenu">
      <router-link
        :to="(menuItem as MenuItemWithRoute).route.path || ''"
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <span>{{ (menuItem as MenuItemWithRoute).title }}</span>
      </router-link>
    </template>
    <template v-else>
      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-example"
        @click="isCoursesSubmenuVisible = !isCoursesSubmenuVisible"
      >
        <span class="flex-1 text-left rtl:text-right whitespace-nowrap">{{ menuItem.title }}</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <ul
        id="dropdown-example"
        :class="[
          'py-2 space-y-2',
          isCoursesSubmenuVisible ? '' : 'hidden'
        ]"
      >
        <li
          v-for="(link, index) in (menuItem as MenuItemWithSubmenu).routes"
          :key="index"
        >
          <router-link
            :to="link.path"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-5 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </template>
  </li>
</template>
