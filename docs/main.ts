import { createApp } from "vue";
import App from "./App.vue";

import PUI from "picasso-ui";

import "theme-chalk/src/index.scss";

//创建应用，使用组件
createApp(App).use(PUI).mount("#app");
