<template>
  <button @click="showMessage">点击</button>
</template>
<script>
import { defineComponent } from "vue";
import { Message } from "../../lib/message/index";
export default defineComponent({
  setup() {
    const showMessage = () => {
      Message({
        message: "1111",
        center: true,
        type: "success",
      });
    };
    return {
      showMessage,
    };
  },
});
</script>