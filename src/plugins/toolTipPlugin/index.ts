import { defineAsyncComponent } from "vue";
import type { App, Plugin } from "vue";
import { tooltipOptionsInjectionKey } from "@/injectionKeys";
import type { TippyOptions } from "./ToolTip.vue";
import { defu } from "defu";

export const toolTipPlugin: Plugin = (app: App, options: TippyOptions): void => {
  options = defu(options, {
    arrow: false
  });

  app.provide(tooltipOptionsInjectionKey, options);
  const ToolTip = defineAsyncComponent(() => import("./ToolTip.vue"));
  app.component("ToolTip", ToolTip);
};
