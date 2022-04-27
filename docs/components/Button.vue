<template>
  <div>
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
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useButton } from "../hook/useButton";

export default defineComponent({
  setup(props, ctx) {
    return {
      ...useButton(),
    };
  },
});
</script>

