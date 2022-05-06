<template>
  <Button v-if="false" />
  <hr />
  <Row v-if="false" />
  <Checkbox />
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import Row from "./components/Row.vue";
import Checkbox from "./components/Checkbox.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Button, Row, Checkbox },
  setup(props, ctx) {
    return {};
  },
});
</script>
<style lang="scss">
.p-col {
  border-radius: 4px;
}
</style>
