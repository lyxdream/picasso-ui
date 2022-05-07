<template>
  <Button v-if="false" />
  <hr />
  <Row v-if="false" />
  <Checkbox />
  <Transfer />
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import Row from "./components/Row.vue";
import Checkbox from "./components/Checkbox.vue";
import Transfer from "./components/Transfer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Button, Row, Checkbox, Transfer },
  setup() {
    return {};
  },
});
</script>
