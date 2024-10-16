<template>
  <Multiselect
    v-bind="context.attrs"
    :id="context.id"
    :name="context.node.name"
    :model-value="context._value"
    :disabled="context.disabled"
    :class="context.classes?.input"
    @update:model-value="context.node.input($event)"
    @blur="context.handlers.blur"
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

<style scoped>
.formkit-input.multiselect {
  padding: 0;
}
</style>