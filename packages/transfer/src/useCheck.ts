import { computed } from "vue";
import { ITransferPanelProps, IPanelState } from "./transfer.typs";

export const useCheck = (
  props: ITransferPanelProps,
  panelState: IPanelState
) => {
  const labelProp = computed(() => props.props.label);
  const keyProp = computed(() => props.props.key);
  const disabledProp = computed(() => props.props.disabled);

  //选出不是禁用的
  const checkAbleData = computed(() => {
    return props.data.filter((item) => !item[disabledProp.value]);
  });
  //todo 全选 半选
  const handleCheckedAllChange = (val) => {
    //需要将所有的数据拿到，通过当前的值做筛选
    panelState.allChecked = val;
    panelState.checked = val
      ? checkAbleData.value.map((item) => item[keyProp.value])
      : [];
  };
  return {
    labelProp,
    keyProp,
    disabledProp,
    handleCheckedAllChange,
  };
};
