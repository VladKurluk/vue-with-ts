<script setup lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const props = defineProps<{
  text: string
}>();

const tooltip = ref<HTMLSpanElement | null>(null);

onMounted((): void => {
  const parent = tooltip.value?.parentNode;
  if (!parent) return;

  if (parent instanceof HTMLElement) {
    tippy(parent, {
      content: props.text,
    });
  }
});
</script>

<script lang="ts">
export default {
  name: "ToolTip",
};
</script>

<template>
  <span ref="tooltip"></span>
</template>

<style scoped>

</style>