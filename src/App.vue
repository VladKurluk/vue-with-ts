<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "@/components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";

import type Entry from "@/types/Entry";

const handleCreateEntry = (data: Entry) => {
  console.log(data);
}
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @create="handleCreateEntry"/>
    <ul>
      <li>
        <EntryCard />
      </li>
    </ul>
  </main>
</template>

