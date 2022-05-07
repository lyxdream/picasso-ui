<template>
  <div class="p-transfer">
    <!-- 左边穿梭框 -->
    <PTransferPanel
      :data="sourceData"
      :props="props"
      @checked-change="onSourceCheckedChange"
    ></PTransferPanel>
    <div class="p-transfer__buttons">
      <p-button
        type="primary"
        icon="p-icon-arrow-left"
        @click="addToLeft"
        :disabled="rightChecked.length === 0"
      >
      </p-button>
      &nbsp;
      <p-button
        type="primary"
        icon="p-icon-arrow-right"
        @click="addToRight"
        :disabled="leftChecked.length === 0"
      >
      </p-button>
    </div>
    <!-- 左边穿梭框 -->
    <PTransferPanel
      :data="targetData"
      :props="props"
      @checked-change="onTargetCheckedChange"
    ></PTransferPanel>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "vue";
import PTransferPanel from "./transfer-panel.vue";
import PButton from "@picasso-ui/button";
import { DataItem, Key, Props } from "./transfer.typs";
import { useComputedData } from "./useComputedData";
export default defineComponent({
  name: "PTransfer",
  components: {
    PTransferPanel,
    PButton,
  },
  props: {
    data: {
      type: Array as PropType<DataItem[]>,
    },
    modelValue: {
      type: Array as PropType<Key[]>,
    },
    props: {
      type: Object as PropType<Props>,
      default: () => ({
        label: "label",
        key: "key",
        disabled: "disabled",
      }),
    },
  },
  setup(props, { emit }) {
    //数据分成两边 一个左，一个右
    let { propsKey, sourceData, targetData } = useComputedData(props);
    const checkedState = reactive({
      leftChecked: [],
      rightChecked: [],
    });
    const onSourceCheckedChange = (leftVal) => {
      checkedState.leftChecked = leftVal;
    };
    const onTargetCheckedChange = (rightVal) => {
      checkedState.rightChecked = rightVal;
    };

    const addToLeft = () => {
      console.log("addToLeft");
      const currentValue = props.modelValue.slice(); //当前右边的索引值
      checkedState.rightChecked.forEach((item) => {
        const index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      });
      emit("update:modelValue", currentValue);
    };
    const addToRight = () => {
      console.log("addToRight");
      //将左边的映射成key 和右边的拼接一下，把数据发射出去
      let currentValue = props.modelValue.slice(); //当前右边的索引值
      // 在所有数据中找出选中的
      const itemsToBeMoved = props.data
        .filter((item) =>
          checkedState.leftChecked.includes(item[propsKey.value])
        )
        .map((item) => item[propsKey.value]);
      currentValue = currentValue.concat(itemsToBeMoved);
      emit("update:modelValue", currentValue);
    };
    return {
      propsKey,
      sourceData,
      targetData,
      onSourceCheckedChange,
      onTargetCheckedChange,
      ...toRefs(checkedState),
      addToLeft,
      addToRight,
    };
  },
});
</script>


