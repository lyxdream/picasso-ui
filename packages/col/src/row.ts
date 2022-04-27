import { defineComponent, h } from "vue";
export default defineComponent({
  name: "PRow",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    gutter: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: "flex",
    },
    justify: {
      type: String,
      default: "start", //start/end/center/space-around/space-between
    },
  },
  setup(props, { slots }) {
    return () => h(props.tag, {}, slots.default?.());
  },
});
