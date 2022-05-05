
<template>
  <div class="p-checkbox-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, provide } from "vue";
export default defineComponent({
  name: "PCheckboxGroup",
  props: {
    modelValue: Array, //父组件将modelValue传递给儿子
    disabled: Boolean,
  },
  emits: ["change", "update:modelValue"],
  setup(props, { emit }) {
    //将props属性创造出一个新的来交给儿子
    const modelValue = computed(() => props.modelValue);
    const changeEvent = (val) => {
      emit("change", val);
      emit("update:modelValue", val);
    };
    provide("PCheckboxGroup", {
      name: "PCheckboxGroup",
      modelValue,
      changeEvent,
    });
  },
});
</script>