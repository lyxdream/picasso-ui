<template>
  <Button v-if="false" />
  <hr />
  <Row v-if="false" />
  <!-- 组件内部 会去emit('update:modelValue',[]) checkVal = []-->
  <!-- 如果用reative 会更新引用，只会更新一次 -->
  <p-checkbox v-model="checkVal">checkbox</p-checkbox>
  <p-checkbox-group></p-checkbox-group>
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import Row from "./components/Row.vue";
import { defineComponent, ref } from "vue";
// import { useCheckbox } from "./hook/useCheckbox";
export const useCheckbox = () => {
  const checkVal = ref(true);
  return {
    checkVal
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
