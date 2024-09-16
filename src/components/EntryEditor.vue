<script lang="ts" setup>
import { ref, computed, onMounted, inject } from "vue";

import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";

// import type { Ref } from "vue";
import type Emoji from "@/types/Emoji";
import type Entry from "@/types/Entry";
import { userInjectionKey } from "../injectionKeys";

const injectedUser = inject(userInjectionKey);

const body = ref("");
// const emoji: Ref<Emoji | null> = ref(null);
// or this way
const emoji = ref<Emoji | null>(null);

const maxChars = 280;
const charCount = computed(() => body.value.length);

const textarea = ref<HTMLTextAreaElement | null>(null);
onMounted(() => textarea.value?.focus());

const emit = defineEmits<{
  (e: "create", entry: Entry): void
}>();

const handleTextInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;

  if (textarea.value.length <= maxChars) {
    body.value = textarea.value;
  } else {
    body.value = textarea.value = textarea.value.slice(0, maxChars);
  }
}

const handleFormSubmit = () => {
  emit('create', { 
    body: body.value,
    emoji: emoji.value,
    createdAt: new Date(),
    userId: 1,
    id: Math.random()
  });

  body.value = "";
  emoji.value = null;
}
</script>

<template>
  <form
    class="entry-form"
    @submit.prevent="handleFormSubmit"
  >
    <textarea
      ref="textarea"
      :value="body"
      @keyup="handleTextInput"
      :placeholder="`New Journal Entry for ${injectedUser?.username || 'Anonymous'}`"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / 280</span>
      <button>Remember <ArrowCircleRight width="20" class="icons" /></button>
    </div>
  </form>
</template>

<style lang="postcss" scoped>
button {
  @apply px-5 py-2 bg-teal-700 rounded text-white flex;
}
button svg path {
  @apply fill-white;
}
button svg {
  @apply ml-3 fill-white;
}

/* Entry Form */
.entry-form {
  @apply p-5 rounded-md mt-10 bg-gray-200 dark:bg-slate-800;
}
.entry-form textarea {
  @apply w-full p-5 rounded-md mb-5 dark:bg-slate-900 h-40 resize-none;
}
.entry-form-footer {
  @apply flex justify-between;
}
</style>
