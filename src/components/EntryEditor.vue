<script lang="ts" setup>
import { ref, computed } from "vue";

import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";

// import type { Ref } from "vue";
import type Emoji from "@/types/Emoji";

const text = ref("");
// const emoji: Ref<Emoji | null> = ref(null);
// or this way
const emoji = ref<Emoji | null>(null);

const maxChars = 280;
const charCount = computed(() => text.value.length);

const handleTextInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;

  if (textarea.value.length <= maxChars) {
    text.value = textarea.value;
  } else {
    text.value = textarea.value = textarea.value.slice(0, maxChars);
  }
}
</script>

<template>
  <form class="entry-form" @submit.prevent>
    <textarea
      :value="text"
      @keyup="handleTextInput"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / 280</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
