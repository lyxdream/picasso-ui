import { defineComponent, h, computed, provide } from "vue";
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
    provide("PRow", props.gutter); //提供给所有的子组件,都能使用这个属性
    const classs = computed(() => {
      return [
        "p-row",
        props.justify !== "start" ? `is-justify-${props.justify}` : "",
      ];
    });
    const styles = computed(() => {
      let ret = {
        marginLeft: "",
        marginRight: "",
      };
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`;
        ret.marginRight = `-${props.gutter / 2}px`;
      }
      return ret;
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
