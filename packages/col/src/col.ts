import { defineComponent, h, computed } from "vue";
export default defineComponent({
  name: "PCol",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: {
      //栅格占据的列数
      type: Number,
      default: 24,
    },
    offset: {
      //栅格左侧的间隔格数
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const classs = computed(() => {
      const ret = [];
      const pos = ["span", "offset"] as const;
      pos.forEach((item) => {
        const size = pos[item];
        if (typeof size == "number" && size > 0) {
          ret.push(`p-col-${item}-${props[item]}`);
        }
      });
      return ["p-col", ...ret];
    });
    return () =>
      h(
        props.tag,
        {
          class: classs.value,
        },
        slots.default?.()
      );
  },
});
