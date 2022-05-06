<template>
  <Button v-if="false" />
  <hr />
  <Row v-if="false" />
  <Checkbox />
  <!-- <el-transfer
    v-model="leftValue"
    style="text-align: left; display: inline-block"
    filterable
    :left-default-checked="[2, 3]"
    :right-default-checked="[1]"
    :render-content="renderFunc"
    :titles="['Source', 'Target']"
    :button-texts="['To left', 'To right']"
    :format="{
      noChecked: '${total}',
      hasChecked: '${checked}/${total}',
    }"
    :data="data"
    @change="handleChange"
  >
    <template #left-footer>
      <el-button class="transfer-footer" size="small">Operation</el-button>
    </template>
    <template #right-footer>
      <el-button class="transfer-footer" size="small">Operation</el-button>
    </template>
  </el-transfer> -->

  <p-transfer
    v-model="value"
    :data="transferData"
    :props="transferProps"
  ></p-transfer>
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import Row from "./components/Row.vue";
import Checkbox from "./components/Checkbox.vue";
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
    value: [1, 4],
    transferProps: {
      key: "value",
      label: "desc",
    },
  };
};
export default defineComponent({
  components: { Button, Row, Checkbox },
  setup(props, ctx) {
    return {
      ...useTransfer(),
    };
  },
});
</script>
<style lang="scss">
.p-col {
  border-radius: 4px;
}
</style>
