import { ICheckboxProps } from "./checkbox.types";

const useModel = (props: ICheckboxProps) => {
  const model = computed();
  return model
};

export const useCheckbox = (props: ICheckboxProps) => {
  //设计一个属性，这个属性采用的就是modelValue,还能更改，更改的时候要触发一个事件，更新数据

  let model = useModel(props);
  return {};
};
