<template>
  <Button />
  <hr />
  <Row v-if="false" />
  <Checkbox />
  <Transfer v-if="false" />
  <Message />
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import Row from "./components/Row.vue";
import Checkbox from "./components/Checkbox.vue";
import Transfer from "./components/Transfer.vue";
import { defineComponent, getCurrentInstance } from "vue";
import Message from "./components/Message.vue";
export default defineComponent({
  components: { Button, Row, Checkbox, Transfer, Message },
  setup() {},
});
</script>
