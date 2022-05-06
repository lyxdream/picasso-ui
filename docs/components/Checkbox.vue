<template>
  <!-- 组件内部 会去emit('update:modelValue',[]) checkVal = []-->
  <!-- 如果用reative 会更新引用，只会更新一次 -->
  {{ checkVal1 }}
  {{ checkVal }}
  <p-checkbox v-model="checkVal1" @change="checkboxChange1" indeterminate>
    checkbox
  </p-checkbox>

  <p-checkbox-group v-model="checkVal">
    <p-checkbox v-for="item in checks" :key="item" :label="item"></p-checkbox>
  </p-checkbox-group>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useCheckbox } from "../hook/useCheckbox";
export default defineComponent({
  setup(props, ctx) {
    return {
      ...useCheckbox(),
    };
  },
});
</script>