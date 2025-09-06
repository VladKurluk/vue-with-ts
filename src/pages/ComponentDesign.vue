<template>
  <div>
    <PageHeading :number="1">Branching Component Pattern</PageHeading>
    <div class="flex gap-3">
      <GithubCardBefore username="VladKurluk" />
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
</template>

<script setup>
import { ref, watch } from "vue"
import { sleep } from "@/utils/index.ts"

import PageHeading from "@/components/layout/PageHeading.vue"
import GithubCardBefore from "@/components/componentsDesign/1/GithubCardBefore.vue"
import GithubCardAfter from "@/components/componentsDesign/1/GithubCardAfter.vue"

import AppButton from "@/components/componentsDesign/2/AppButton.vue"

const loading = ref(false);
watch(loading, async () => {
  if (loading.value) {
    await sleep(2000);
    loading.value = false
  }
})
</script>

<style scoped>

</style>