<script setup lang="ts">
import mainNavigation from './components/layout/menu/mainNavigation.vue';
</script>

<template>
  <div class="p-2.5">
    <main-navigation />
    <main class="container m-auto p-10">
      <router-view></router-view>
    </main>
  </div>
</template>

