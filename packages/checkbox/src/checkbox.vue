
<template>
  <div class="p-checkbox">
    <span class="p-checkbox__input">
      <input type="checkbox" />
    </span>
    <span class="p-checkbox__label">
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
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
  setup() {},
});
</script>