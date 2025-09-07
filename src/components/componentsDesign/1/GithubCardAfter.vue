<!-- GithubProfile.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { sleep } from '@/utils/index.ts'
import type { UserData } from '@/types/components-design/UserData.ts'
import GithubCardContent from './GithubCardContent.vue'
import GithubCardSkeleton from './GithubCardSkeleton.vue'

const props = defineProps<{
  username: string
}>()

const loading = ref(true)
const userData = ref<UserData | null>(null)

fetch(`https://api.github.com/users/${props.username}`)
  .then(async (response) => {
    await sleep(2000)
    userData.value = await response.json() as UserData
  }).catch((error: unknown) => {
    if (error instanceof Error) {
    console.error('Error fetching GitHub data:', error.message)
  } else {
    console.error('Unexpected error:', error)
  }
  })
  .finally(() => {
    loading.value = false
  })

</script>

<template>
  <div class="card bg-base-100 shadow-xl max-w-sm w-[350px]">
    <GithubCardSkeleton v-if="loading" />
    <GithubCardContent v-else-if="userData" :userData="userData" />
  </div>
</template>