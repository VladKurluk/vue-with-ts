<template>
  <section class="card">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="postcss">
.card {
  @apply block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700;
}

.card h2 {
  @apply mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white;
}
</style>