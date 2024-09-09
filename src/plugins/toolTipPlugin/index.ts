import { defineAsyncComponent } from "vue";
import type { App, Plugin } from "vue";

export const toolTipPlugin: Plugin = (app: App): void => {
    const ToolTip = defineAsyncComponent(() => import("./ToolTip.vue"));
    app.component("ToolTip", ToolTip);
};
