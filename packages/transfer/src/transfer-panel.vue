<template>
  <div class="p-transfer__panel">
    <p class="z-transfer-panel__header">列表</p>
    <div class="z-transfer-panel__body">----</div>
  </div>
</template>
<script lang="ts">
import { Props } from "./transfer.typs";
import { defineComponent, PropType } from "vue";
import PCheckbox from "@picasso-ui/checkbox";
import PCheckboxGroup from "@picasso-ui/checkbox-group";

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
  setup() {},
});
</script>
