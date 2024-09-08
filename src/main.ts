import { createApp } from "vue";
import App from "./App.vue";
import { firstPluginExample } from "./plugins/firstPlugin";
import "@/assets/base.css";

const app = createApp(App);

app.use(firstPluginExample, {
    option1: "foo",
});

app.mount("#app");
