import { defineAsyncComponent } from "vue";
import type { App, Plugin } from "vue";
import { tooltipOptionsInjectionKey } from "@/injectionKeys";
import type { TippyOptions } from "./ToolTip.vue";
import { defu } from "defu";
import { hideAll } from "tippy.js";

export const toolTipPlugin: Plugin = (app: App, options: TippyOptions): void => {
  options = defu(options, {
    arrow: false
  });

  /**
   * Hide all visible tooltips.
   */
  app.config.globalProperties.$tippyHideAll = hideAll;

  app.provide(tooltipOptionsInjectionKey, options);
  const ToolTip = defineAsyncComponent(() => import("./ToolTip.vue"));
  app.component("ToolTip", ToolTip);
};
