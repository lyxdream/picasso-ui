import { defineComponent, openBlock, createElementBlock, normalizeClass } from 'vue';

var script$1 = defineComponent({
    name: "PButton",
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", null, "按钮"))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1); //注册全局组件
};
const _Button = script$1;
// createApp({}).use(_Button);

var script = defineComponent({
    name: "PIcon",
    props: {
        name: {
            type: String,
            default: "",
        },
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(`p-icon-${_ctx.name}`)
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script); //注册全局组件
};
const _Icon = script;

const components = [_Button, _Icon];
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
// 在使用组件库的时候可以使用 createApp().use(XXX)
var index = {
    install,
};

export { index as default };
