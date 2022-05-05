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
      />
    </span>
    <span class="p-checkbox__label">
      <slot></slot>
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
