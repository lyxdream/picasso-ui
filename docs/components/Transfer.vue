<template>
  <p-transfer
    v-model="value"
    :data="transferData"
    :props="transferProps"
  ></p-transfer>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export const useTransfer = () => {
  const data = [];
  const generateData = () => {
    for (let i = 1; i <= 15; i++) {
      data.push({
        value: i,
        desc: `Option ${i}`,
        disabled: i % 4 === 0,
      });
    }
    return ref(data);
  };
  return {
    transferData: generateData(),
    value: ref([1, 4]),
    transferProps: {
      key: "value",
      label: "desc",
      disabled: "disabled",
    },
  };
};
export default defineComponent({
  setup(props, ctx) {
    return {
      ...useTransfer(),
    };
  },
});
</script>