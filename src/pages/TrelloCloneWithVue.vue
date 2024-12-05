<template>
  <div class="min-h-screen bg-teal-600 overlow-auto">
    <h1 class="text-4xl text-white flex items-center mb-10">
      <img
        width="200"
        class="mr-3"
        src="https://vueschool.io/img/logo/vueschool_logo_multicolor_negative.svg"
        alt="Vue School"
      />
      Trello Board
    </h1>
    <Board />
  </div>
</template>

<script setup lang="ts">
import Board from '@/components/trello/Board.vue';
</script>
