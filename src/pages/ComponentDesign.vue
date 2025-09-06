<template>
  <div>
    <PageHeading :number="1">Branching Component Pattern</PageHeading>
    <div class="flex gap-3">
      <!-- <GithubCardBefore username="VladKurluk" /> -->
      <GithubCardAfter username="VladKurluk" />
    </div>
  </div>

  <div class="mt-5">
    <PageHeading :number="2">Slots and Template Props Pattern</PageHeading>
    <div class="flex gap-3">
      <AppButton :outline="true" @click="loading = true" :loading="loading">
        <strong>Click Me</strong>
      </AppButton>
    </div>
  </div>

  <div class="mt-5">
    <PageHeading :number="3">List with List Item Pattern</PageHeading>
    <UserList :users="users" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { sleep } from "@/utils/index.ts"
import type { Users } from '@/types/components-design/UserData.ts'

import PageHeading from "@/components/layout/PageHeading.vue"
// import GithubCardBefore from "@/components/componentsDesign/1/GithubCardBefore.vue"
import GithubCardAfter from "@/components/componentsDesign/1/GithubCardAfter.vue"

import AppButton from "@/components/componentsDesign/2/AppButton.vue"

import UserList from "@/components/componentsDesign/3/UserList.vue"

const loading = ref(false);
watch(loading, async () => {
  if (loading.value) {
    await sleep(2000);
    loading.value = false
  }
})

const users = ref<Users>([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Moderator' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User' }
]);
</script>

<style scoped>

</style>