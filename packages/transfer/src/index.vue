<template>
  <div class="p-transfer">
    <!-- 左边穿梭框 -->
    <PTransferPanel :data="sourceData" :props="props"></PTransferPanel>
    <div class="p-transfer__buttons">
      <p-button type="primary" icon="p-icon-arrow-left"> </p-button>
      &nbsp;
      <p-button type="primary" icon="p-icon-arrow-right"> </p-button>
    </div>
    <!-- 左边穿梭框 -->
    <PTransferPanel :data="targetData" :props="props"></PTransferPanel>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
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
  setup(props, {}) {
    //数据分成两边 一个左，一个右
    // console.log(props.data, props.props,props.modelValue);
    let { propsKey, sourceData, targetData } = useComputedData(props);
    console.log(propsKey, sourceData, targetData);
  },
});
</script>