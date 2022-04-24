<template>
  <button>按钮</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
type IButtonType =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "default";
export default defineComponent({
  props: {
    type: {
      type: String as PropType<IButtonType>,
      default: "primary",
      vaildator: (val: string) => {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "info",
        ].includes(val);
      },
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean,
  },
  name: "PButton",
  setup(props, ctx) {
    props.type;
  },
});
</script>