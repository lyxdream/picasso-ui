<template>
  <Button v-if="false" />
  <hr />
  <Row v-if="false" />
  <p-checkbox>checkbox</p-checkbox>
  <p-checkbox-group></p-checkbox-group>
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import Row from "./components/Row.vue";
import { defineComponent } from "vue";
// import { useCheckbox } from "./hook/useCheckbox";
export const useCheckbox = () => {
  // const checkVal = ref(true);
  return {};
};

export default defineComponent({
  components: { Button, Row },
  setup(props, ctx) {
    return {
      ...useCheckbox,
    };
  },
});
</script>
<style lang="scss">
.p-col {
  border-radius: 4px;
}
</style>
