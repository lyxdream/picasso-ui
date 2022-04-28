import { defineComponent, h, computed, inject } from "vue";
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
    xs: {
      type: Number,
      default: 0,
    },
    sm: {
      type: Number,
      default: 0,
    },
    md: {
      type: Number,
      default: 0,
    },
    lg: {
      type: Number,
      default: 0,
    },
    xl: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const gutter = inject("PRow", 0);
    const classs = computed(() => {
      const ret = [];
      const pos = ["span", "offset"] as const;
      const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
      pos.forEach((item) => {
        const size = props[item];
        if (typeof size == "number" && size > 0) {
          ret.push(`p-col-${item}-${props[item]}`);
        }
      });
      sizes.forEach((size) => {
        if (typeof props[size] === "number") {
          ret.push(`p-col-${size}-${props[size]}`);
        }
      });
      return ["p-col", ...ret];
    });
    const styles = computed(() => {
      if (gutter != 0) {
        return {
          paddingLeft: gutter / 2 + "px",
          paddingRight: gutter / 2 + "px",
        };
      }
      return {};
    });

    return () =>
      h(
        props.tag,
        {
          class: classs.value,
          style: styles.value,
        },
        slots.default?.()
      );
  },
});
