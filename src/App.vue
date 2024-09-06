<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "@/components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";

import type Emoji from "@/types/Emoji";

const handleCreateEntry = (data: { text: string; emoji: Emoji | null }) => {
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

