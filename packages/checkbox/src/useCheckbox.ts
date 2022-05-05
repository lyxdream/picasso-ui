import { ICheckboxProps, ICheckboxGroupInstance } from "./checkbox.types";
import { computed, getCurrentInstance, WritableComputedRef, inject } from "vue";

const useCheckboxGroup = () => {
  const checkboxGroup = inject<ICheckboxGroupInstance>("PCheckboxGroup", {});
  const isGroup = computed(() => checkboxGroup.name === "PCheckboxGroup");
  return {
    checkboxGroup,
    isGroup,
  };
};

const useModel = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance(); //只有checkbox的时候，用户会传递modelValue
  const { isGroup } = useCheckboxGroup();
  console.log(isGroup.value, "--isGroup");
  const model = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit("update:modelValue", val);
    },
  });
  return model;
};
const useCheckboxStatus = (
  props: ICheckboxProps,
  model: WritableComputedRef<unknown>
) => {
  const isChecked = computed(() => {
    const value = model.value; //当前是不是选中的
    //todo...
    return value;
  });
  return isChecked;
};

const useEvent = () => {
  const { emit } = getCurrentInstance();
  const handleChange = (e: InputEvent) => {
    const target = e.target as HTMLInputElement;
    emit("change", target.checked);
  };
  return handleChange;
};

export const useCheckbox = (props: ICheckboxProps) => {
  //1、设计一个属性，这个属性采用的就是modelValue,还能更改，更改的时候要触发一个事件，更新数据
  let model = useModel(props);
  // 2、需要给checkbox设置一个checked的状态，等一会儿更改checkbox选中或者取消选中需要获取到checkbox的状态
  const isChecked = useCheckboxStatus(props, model);
  //3.加一个change事件  可以触发绑定到自己身上的change
  const handleChange = useEvent();

  return {
    model,
    isChecked,
    handleChange,
  };
};
