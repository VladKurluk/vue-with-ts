import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createToolTipPlugin } from "./plugins/toolTipPlugin";
import "@/assets/base.css";

const app = createApp(App);

app.use(router);
app.use(createToolTipPlugin({
    placement: "top-start",
    delay: 100,
    arrow: true,
}));

app.mount("#app");
