<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';
import tippy, { Instance, Props } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const props = defineProps<{
  text: string
}>();

const tooltip = ref<HTMLSpanElement | null>(null);
let tippyInstance: Instance<Props> | null = null;

function initTippy() {
  const parent = tooltip.value?.parentNode;
  if (!parent) return;

  if(tippyInstance) tippyInstance.destroy();

  if (parent instanceof HTMLElement) {
    tippyInstance = tippy(parent, {
      content: props.text,
    });
  }
};

onMounted(initTippy);
onUpdated(initTippy);
onUnmounted((): void => tippyInstance?.destroy());
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