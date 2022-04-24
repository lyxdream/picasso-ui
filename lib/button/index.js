import { defineComponent, openBlock, createElementBlock } from 'vue';

var script = defineComponent({
    name: "PButton",
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", null, "按钮"))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script); //注册全局组件
};
const _Button = script;
// createApp({}).use(_Button);

export { _Button as default };
