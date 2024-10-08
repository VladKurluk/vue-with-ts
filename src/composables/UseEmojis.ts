import { reactive } from "vue";

import type { Component } from "@vue/runtime-core";

import type Emoji from "@/types/Emoji";

const files: { [key: string]: unknown } = import.meta.glob(
  "../assets/icons/emojis/*.svg",
  { eager: true }
);

export default function UseEmojis() {
  const emojis: { name: string; component: Component }[] = reactive([]);
  for (const path in files) {
    const component = files[path] as Component;
    const name = path
      .replace("../assets/icons/emojis/", "")
      .replace("-emoji.svg", "");
    emojis.push({ name, component });
  }
  /**
   * Get a single emoji component by name
   */
  const findEmoji = (name: Emoji | null) =>
    emojis.find((emoji) => emoji.name === name)?.component;

  return { emojis, findEmoji };
}
