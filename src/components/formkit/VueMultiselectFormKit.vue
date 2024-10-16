<template>
  <Multiselect
    :model-value="context.value"
    :options="context.attrs.options"
    @update:model-value="context.node.input($event)"
  />
</template>

<script setup lang="ts">
import Multiselect from 'vue-multiselect';
import type { FormKitProps } from "@formkit/core";

defineProps<{
  context: FormKitProps,
}>();
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>