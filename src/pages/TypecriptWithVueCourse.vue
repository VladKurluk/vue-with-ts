<script setup lang="ts">
import { reactive, provide } from "vue";

import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "@/components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";

import type Entry from "@/types/Entry";
import type User from "../types/User";
import { userInjectionKey } from "../injectionKeys";

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
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @create="handleCreateEntry"/>
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>
