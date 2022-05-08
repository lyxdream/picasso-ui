<template>
  <Button v-if="false" />
  <hr />
  <Row v-if="false" />
  <Checkbox />
  <Transfer />
  <button @click="showMessage">点击</button>
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import Row from "./components/Row.vue";
import Checkbox from "./components/Checkbox.vue";
import Transfer from "./components/Transfer.vue";
import { defineComponent } from "vue";
// import { Message } from "../lib/message/index";
import { Message } from "../lib/message/index";
export default defineComponent({
  components: { Button, Row, Checkbox, Transfer },

  setup() {
    const showMessage = () => {
      Message();
    };
    return {
      showMessage,
    };
  },
});
</script>
