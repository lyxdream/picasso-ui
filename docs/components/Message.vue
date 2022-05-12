<template>
  <button @click="showMessage">点击</button>
  <button @click="showMessage1">点击2</button>
</template>
<script>
import { defineComponent, getCurrentInstance } from "vue";
import { PMessage } from "picasso-ui";
export default defineComponent({
  setup(props) {
    const { appContext } = getCurrentInstance();
    const showMessage = () => {
      const { $message } = appContext.config.globalProperties;
      // $message.error("pppp");
      PMessage({
        showClose: true,
        message: "1111",
        center: true,
        type: "success",
      });
    };
    const showMessage1 = () => {
      PMessage.closeAll();
    };
    return {
      showMessage,
      showMessage1,
    };
  },
});
</script>
