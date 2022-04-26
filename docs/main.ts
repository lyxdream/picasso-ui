import { createApp } from "vue";
import App from "./App.vue";

import PUI from "picasso-ui";
// import PUI from "../lib/index.js";
// import PUI from "../lib/index.esm.js";
// import Icon from "../lib/icon/index";
// import Button from "../lib/button/index";

import "theme-chalk/src/index.scss";

//创建应用，使用组件
createApp(App).use(PUI).mount("#app");
