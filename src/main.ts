import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createToolTipPlugin } from "./plugins/toolTipPlugin";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { MotionPlugin } from '@vueuse/motion';
import "@/assets/base.css";

const app = createApp(App);

app.use(router);
app.use(createToolTipPlugin({
    placement: "top-start",
    delay: 100,
    arrow: true,
}));
app.use(autoAnimatePlugin);
app.use(MotionPlugin);

app.mount("#app");
