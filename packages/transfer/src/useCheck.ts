import { computed, getCurrentInstance, watch } from "vue";
import { ITransferPanelProps, IPanelState } from "./transfer.types";

export const useCheck = (
  props: ITransferPanelProps,
  panelState: IPanelState
) => {
  const { emit } = getCurrentInstance();
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
  //watch的第一个参数尽量放函数,是基于effect实现，知识有对应的自己的调度方法scheduler
  watch(
    () => panelState.checked,
    () => {
      //看看有没有false，如果有false，则说明不是全选
      const checkKeys = checkAbleData.value.map((item) => item[keyProp.value]); //获取所有的key
      panelState.allChecked =
        checkKeys.length > 0 &&
        checkKeys.every((key) => panelState.checked.includes(key));
      emit("checked-change", panelState.checked);
    }
  );
  watch(
    () => props.data,
    () => {
      panelState.checked = [];
    }
  );
  return {
    labelProp,
    keyProp,
    disabledProp,
    handleCheckedAllChange,
  };
};
