import { App } from "vue";

export const firstPluginExample = (app: App, options?: object) => {
    console.log("Hello from firstPluginExample", options);
};