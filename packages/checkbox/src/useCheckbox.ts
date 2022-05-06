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
  const { isGroup, checkboxGroup } = useCheckboxGroup();
  const store = computed(() =>
    checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue
  ); // 将父组件v-model数据获取到 传递给自己，type="checkbox" 可以绑定数组
  const model = computed({
    get() {
      return isGroup.value ? store.value : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        return checkboxGroup.changeEvent(val);
      }
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
    const value = model.value; //当前是不是选中的  [上海，北京]
    //todo...
    // console.log(value, "---value");
    if (Array.isArray(value)) {
      //父组件group传过来的数组
      return value.includes(props.label);
    } else {
      return value;
    }
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
  // 4.每次状态发生变化都得调用

  return {
    model,
    isChecked,
    handleChange,
  };
};
