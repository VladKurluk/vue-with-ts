import { defaultConfig, DefaultConfigOptions, createInput } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";
import createToolTipPlugin from "@/plugins/formkit-plugin";
// import { generateClasses } from "@formkit/themes";
import { rootClasses } from "./formkit.theme";
import VueMultiselectFormKit from "@/components/formkit/VueMultiselectFormKit.vue";
import type { FormKitNode } from "@formkit/core";
import "@/plugins/formkit-plugin/styles.css";

const config: DefaultConfigOptions = {
  // theme: "genesis",
  plugins: [
    createAutoAnimatePlugin(),
    createToolTipPlugin(),
  ],
  config: {
    rootClasses,
    // classes: generateClasses({
    //   global: {
    //     label: "text-red-400 formkit-invalid:text-red-900",
    //   },
    //   text: {
    //     label: "bg-blue-500",
    //   },
    //   password: {},
    //   url: {},
    // }),
  },
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
  inputs: {
    multiSelect: createInput(VueMultiselectFormKit, {}),
  },
};

export default defaultConfig(config);