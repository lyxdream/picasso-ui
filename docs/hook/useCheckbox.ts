import { ref } from "vue";
export const useCheckbox = () => {
  const checkVal1 = ref(true);
  const checkVal = ref(["上海", "北京"]);
  const checks = ref(["上海", "北京", "天津", "杭州"]);
  const checkboxChange = (val) => {
    console.log(val);
  };
  const checkboxChange1 = (val) => {
    console.log(val);
  };
  return {
    checkVal,
    checkVal1,
    checkboxChange,
    checkboxChange1,
    checks,
  };
};
