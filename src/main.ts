import { createApp } from "vue";
import App from "./App.vue";
import { toolTipPlugin } from "./plugins/toolTipPlugin";
import "@/assets/base.css";

const app = createApp(App);

app.use(toolTipPlugin);

app.mount("#app");
