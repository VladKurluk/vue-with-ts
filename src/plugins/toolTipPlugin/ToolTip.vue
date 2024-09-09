<script setup lang="ts">
defineProps<{
  text: string
}>();
</script>

<script lang="ts">
export default {
  name: "ToolTip",
};
</script>

<template>
  <div>{{ text }}</div>
</template>

<style scoped>

</style>