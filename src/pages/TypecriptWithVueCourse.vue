<script setup lang="ts">
import { reactive, provide } from "vue";

import TheHeader from "@/components/typescript/TheHeader.vue";
import EntryEditor from "@/components/typescript/EntryEditor.vue";
import EntryCard from "@/components/typescript/EntryCard.vue";

import type Entry from "@/types/Entry";
import type User from "@/types/User";
import { userInjectionKey } from "@/injectionKeys";

const user: User = reactive({
  id: 1,
  username: "danielkelly.io",
  settings: []
});

provide(userInjectionKey, user);

const entries: Entry[] = reactive([]);

const handleCreateEntry = (data: Entry) => {
  entries.unshift(data);
}
</script>

<template>
  <TheHeader />
  <EntryEditor @create="handleCreateEntry"/>
  <ul>
    <li v-for="entry in entries" :key="entry.id">
      <EntryCard :entry="entry" />
    </li>
  </ul>
</template>
