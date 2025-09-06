<template>
  <div>
    <PageHeading :number="1">Branching Component Pattern</PageHeading>
    <div class="flex gap-3">
      <GithubCardBefore username="VladKurluk" />
      <GithubCardAfter username="VladKurluk" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/layout/PageHeading.vue"
import GithubCardBefore from "@/components/componentsDesign/1/GithubCardBefore.vue"
import GithubCardAfter from "@/components/componentsDesign/1/GithubCardAfter.vue"
</script>

<style scoped>

</style>