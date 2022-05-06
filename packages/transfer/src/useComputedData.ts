import { ITransferProps } from "./transfer.typs";
import { computed } from "vue";
export const useComputedData = (props: ITransferProps) => {
  // propsKey, sourceData, targetData
  const propsKey = computed(() => props.props.key);
  // {1:{},2:{}}
  const data = computed(() => {
    return props.data.reduce((memo, current) => {
      memo[current[propsKey.value]] = current;
      return memo;
    }, {});
  });
  //props中的data过滤掉modelValue
  const sourceData = computed(() => {
    return props.data.filter(
      (item) => !props.modelValue.includes(item[propsKey.value])
    );
  });
  const targetData = computed(() => {
    return props.modelValue.reduce((memo, key) => {
      memo.push(data.value[key]);
      return memo;
    }, []);
  });

  console.log(propsKey.value, "---value");
  console.log(data.value, "---data");
  console.log(sourceData.value, "---sourceData");
  console.log(targetData.value, "---targetData");

  return {
    propsKey,
    sourceData,
    targetData,
  };
};
