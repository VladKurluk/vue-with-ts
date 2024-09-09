<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted, inject } from 'vue';
import tippy, { Instance, Props, Placement } from 'tippy.js';
import { tooltipOptionsInjectionKey } from "@/injectionKeys";
import 'tippy.js/dist/tippy.css';

export interface TippyOptions {
  placement?: Placement,
  delay?: number
}

const props = defineProps<{
  text: string,
  options: TippyOptions
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
      ...inject(tooltipOptionsInjectionKey),
      ...props.options,
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