<template>
  <p-button
    type="primary"
    round
    icon="p-icon-close"
    @click="buttonClick"
    :loading="buttonLoading"
  ></p-button>
  <p-button icon="p-icon-loading" type="primary" round loading>按钮</p-button>
  <p-button icon="p-icon-loading" type="success" round>按钮</p-button>
  <p-icon name="loading"></p-icon>
  <hr />

  <p-button-group>
    <p-button type="primary" icon="p-icon-arrow-left">上一页</p-button>
    <p-button type="primary">
      下一页
      <i class="p-icon-arrow-right"></i
    ></p-button>
  </p-button-group>
  <hr />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export const useButton = () => {
  const buttonLoading = ref(true);
  const buttonClick = () => {
    console.log("handle-click");
  };
  setTimeout(() => {
    buttonLoading.value = false;
  }, 1000);
  return {
    buttonClick,
    buttonLoading,
  };
};

export default defineComponent({
  setup(props, ctx) {
    return {
      ...useButton(),
    };
  },
});
</script>
