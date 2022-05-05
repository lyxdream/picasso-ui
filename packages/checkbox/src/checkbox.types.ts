import { ComputedRef } from "vue";

export interface ICheckboxProps {
  name?: string; //原生得name属性
  label?: string | boolean | number;
  modelValue: string | boolean | number; //绑定得checkbox的值
  indeterminate?: boolean; // 是否半选
  disabled?: boolean; // 禁用
  checked?: boolean; // 是否选中
}

// https://vue-next-template-explorer.netlify.app/
//modelValue  onUpdate:modelValue

export interface ICheckboxGroupInstance {
  modelValue?: ComputedRef; //绑定的值
  name?: string;
  changeEvent?: (val: unknown) => void; //修改事件
}
