<template>
  <div class="p-transfer__panel">
    <p class="p-transfer__header">
      <PCheckbox v-model="allChecked" @change="handleCheckedAllChange"
        >全选/反选
      </PCheckbox>
    </p>
    <div class="p-transfer__body">
      <PCheckboxGroup v-model="checked">
        <PCheckbox
          :disabled="item[disabledProp]"
          v-for="item in data"
          :key="item[keyProp]"
          :label="item[keyProp]"
        >
          {{ item[labelProp] }}
        </PCheckbox>
      </PCheckboxGroup>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from "vue";
import { Props } from "./transfer.typs";
import { defineComponent, PropType } from "vue";
import PCheckbox from "@picasso-ui/checkbox";
import PCheckboxGroup from "@picasso-ui/checkbox-group";
import { useCheck } from "./useCheck.ts";

export default defineComponent({
  name: "PTransferPanel",
  components: { PCheckbox, PCheckboxGroup },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    props: Object as PropType<Props>,
  },
  setup(props) {
    //应该有一个属于面板自己的状态
    const panelState = reactive({
      checked: [], //选中的值
      allChecked: false, // 是否全选
    });
    //根据props 算出key 禁用 对应的值 用于模版渲染
    const { keyProp, labelProp, disabledProp, handleCheckedAllChange } =
      useCheck(props, panelState);
    // console.log(keyProp.value, labelProp.value, disabledProp.value, "---");
    return {
      labelProp,
      keyProp,
      disabledProp,
      handleCheckedAllChange,
      ...toRefs(panelState),
    };
  },
});
</script>
