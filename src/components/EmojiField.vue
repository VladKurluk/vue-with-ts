<script lang="ts" setup>
import UseEmojis from "@/composables/UseEmojis";
const { emojis } = UseEmojis();

defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="emoji-container">
    <span
      v-for="emoji in emojis"
      :key="emoji.name"
    >
      <component
        :is="emoji.component"
        :class="{ selected: modelValue === emoji.name }"
        @click="
          $emit(
            'update:modelValue',
            emoji.name === modelValue ? null : emoji.name
          )
        "
      ></component>
      <ToolTip :text="emoji.name" />
    </span>
  </div>
</template>
