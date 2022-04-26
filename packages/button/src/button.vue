<template>
  <button :class="classs" @click="handleClick">
    <i v-if="loading" class="p-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
type IButtonType =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "default";
type ComponentSize = "large" | "medium" | "small" | "mini";
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
    size: {
      type: String as PropType<ComponentSize>,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean,
  },
  emits: ["click"],
  name: "PButton",
  setup(props, ctx) {
    const classs = computed(() => [
      "p-button",
      "p-button--" + props.type,
      {
        "is-disabled": props.disabled,
        "is-loading": props.loading,
        "is-round": props.round,
      },
    ]);
    const handleClick = (e) => {
      console.log("innner");
      ctx.emit("click", e);
    };
    return {
      classs,
      handleClick,
    };
  },
});
</script>
