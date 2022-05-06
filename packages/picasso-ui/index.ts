import Button from "@picasso-ui/button";
import Icon from "@picasso-ui/icon";
import ButtonGroup from "@picasso-ui/button-group";
import Row from "@picasso-ui/row";
import Col from "@picasso-ui/col";
import Checkbox from "@picasso-ui/checkbox";
import CheckboxGroup from "@picasso-ui/checkbox-group";
import Transfer from "@picasso-ui/transfer";
import { App } from "vue";

const components = [
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  Checkbox,
  CheckboxGroup,
  Transfer,
];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
// 在使用组件库的时候可以使用 createApp().use(XXX)
export default {
  install,
};
