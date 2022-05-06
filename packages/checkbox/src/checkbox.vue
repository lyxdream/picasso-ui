<template>
  <div class="p-checkbox">
    <span class="p-checkbox__input">
      <input
        type="checkbox"
        v-model="model"
        :checked="isChecked"
        @change="handleChange"
        :name="name"
        :disabled="disabled"
        :indeterminate="indeterminate"
        :value="label"
      />
      <!-- vue 的特点 如果对于checkbox而言 绑定的数据是数组，那么value在v-model中的数据中则被选中 -->
    </span>
    <span v-if="$slots.default || label" class="p-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useCheckbox } from "./useCheckbox";
export default defineComponent({
  name: "PCheckbox",
  props: {
    name: String,
    indeterminate: Boolean,
    checked: Boolean,
    disabled: Boolean,
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    return useCheckbox(props);
  },
});
</script>
