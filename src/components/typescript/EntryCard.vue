<script lang="ts" setup>
import { inject } from "vue";
import DateDisplay from "./DateDisplay.vue";
import UseEmojis from "@/composables/UseEmojis";

import type Entry from "@/types/Entry";
import { userInjectionKey } from "@/injectionKeys";

const injectedUser = inject(userInjectionKey);

const { findEmoji } = UseEmojis();

defineProps<{
  entry: Entry
}>();
</script>
<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component
        class="icons"
        width="75"
        :is="findEmoji(entry.emoji)"
      ></component>
      <div class="entry-text">{{ entry.body }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createdAt" class="mr-2" />
      |
      <span class="ml-2">
        {{ entry.userId === injectedUser?.id ? injectedUser?.username : "Anonymous" }}
      </span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
/* Entry Card */
.entry-card {
  @apply mt-5 bg-gray-200 dark:bg-slate-800 rounded-md p-5;
}
.entry-card-body {
  @apply flex items-center;
}
.entry-card svg {
  @apply mr-5 min-w-max;
}
.entry-footer {
  @apply flex text-teal-800 dark:text-teal-300 text-sm justify-end;
}
.entry-footer span {
  opacity: .6;
}
</style>
