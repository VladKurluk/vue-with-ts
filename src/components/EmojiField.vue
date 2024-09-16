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
        :class="[
          'icons',
          { selected: modelValue === emoji.name }
        ]"
        @click="
          $emit(
            'update:modelValue',
            emoji.name === modelValue ? null : emoji.name
          )
        "
      ></component>
      <ToolTip
        :text="emoji.name"
        :options="{
          placement: 'top-end',
          delay: 100,
          arrow: true,
          offset: [0, 15],
        }"
      />
    </span>
  </div>
</template>

<style lang="postcss" scoped>
/* Emoji Container */
.emoji-container {
  @apply flex gap-x-2 mb-5;
}
.emoji-container svg {
  transition: .2s ease all;
  @apply w-8 cursor-pointer;
}
.emoji-container svg.selected,
.emoji-container svg.selected path {
  @apply fill-white dark:fill-white rounded-3xl;
  @apply bg-teal-700 dark:bg-teal-700;
}
.emoji-container svg:hover {
  transform: scale(1.1);
}
</style>
