<script lang="ts" setup>
import { inject } from "vue";
import DateDisplay from "./DateDisplay.vue";
import UseEmojis from "@/composables/UseEmojis";

import type Entry from "@/types/Entry";
import { userInjectionKey } from "../injectionKeys";

const injectedUser = inject(userInjectionKey);

const { findEmoji } = UseEmojis();

defineProps<{
  entry: Entry
}>();
</script>
<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component width="75" :is="findEmoji(entry.emoji)"></component>
      <div class="entry-text">{{ entry.body }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createdAt" class="mr-2" />
      |
      <span class="ml-2">{{ entry.userId === injectedUser?.id ? injectedUser?.username : "Anonymous" }}</span>
    </div>
  </div>
</template>
