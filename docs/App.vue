<template>
  <Button v-if="false" />
  <hr />
  <Row v-if="false" />
  <!-- 组件内部 会去emit('update:modelValue',[]) checkVal = []-->
  <!-- 如果用reative 会更新引用，只会更新一次 -->
  {{ checkVal }}
  <!-- <p-checkbox v-model="checkVal" @change="checkboxChange" indeterminate
    >checkbox</p-checkbox
  > -->
  <p-checkbox-group v-model="checkVal">
    <p-checkbox v-for="item in checks" :key="item" :label="item"
      >checkbox</p-checkbox
    >
  </p-checkbox-group>
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import Row from "./components/Row.vue";
import { defineComponent, ref } from "vue";
// import { useCheckbox } from "./hook/useCheckbox";
export const useCheckbox = () => {
  // const checkVal = ref(true);
  const checkVal = ref(["上海", "北京"]);
  const checks = ref(["上海", "北京", "天津", "杭州"]);
  const checkboxChange = (val) => {
    console.log(val);
  };
  return {
    checkVal,
    checkboxChange,
    checks,
  };
};

export default defineComponent({
  components: { Button, Row },
  setup(props, ctx) {
    return {
      ...useCheckbox(),
    };
  },
});
</script>
<style lang="scss">
.p-col {
  border-radius: 4px;
}
</style>
