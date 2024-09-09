import { defineAsyncComponent } from "vue";
import type { App, Plugin } from "vue";
import { tooltipOptionsInjectionKey } from "@/injectionKeys";
import type { TippyOptions } from "./ToolTip.vue";

export const toolTipPlugin: Plugin = (app: App, options: TippyOptions): void => {
    app.provide(tooltipOptionsInjectionKey, options);
    const ToolTip = defineAsyncComponent(() => import("./ToolTip.vue"));
    app.component("ToolTip", ToolTip);
};
