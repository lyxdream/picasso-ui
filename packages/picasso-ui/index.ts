import Button from "@picasso-ui/button";
import Icon from "@picasso-ui/icon";
import { App } from "vue";

const components = [Button, Icon];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

//使用组件的时候可以使用 createApp().use(xxx)
export default {
  install, // 导出install方法
};
