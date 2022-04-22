import Button from "@picasso-ui/button";
import Icon from "@picasso-ui/icon";
import { App } from "vue";

const components = [Button, Icon];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
// 在使用组件库的时候可以使用 createApp().use(XXX)
export default {
  install,
};
