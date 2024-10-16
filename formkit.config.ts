import { defaultConfig, DefaultConfigOptions } from '@formkit/vue';
import { createAutoAnimatePlugin } from "@formkit/addons";
import createToolTipPlugin from "@/plugins/formkit-plugin";
import type { FormKitNode } from "@formkit/core";
import "@/plugins/formkit-plugin/styles.css";

const config: DefaultConfigOptions = {
  theme: "genesis",
  plugins: [
    createAutoAnimatePlugin(),
    createToolTipPlugin(),
  ],
  messages: {
    en: {
      validation: {
        username_is_unique({ args, name, node }) {
          return `${node.value} is already taken`;
        },
      },
    },
  },
  rules: {
    username_is_unique(node: FormKitNode): boolean {
      const usernames = ["jpschroeder", "luanguyen", "danielkelly_io"];
      return !usernames.includes(node.value as string);
    },
  },
};

export default defaultConfig(config);