<template>
  <Button v-if="false" />
  <hr />
  <Row v-if="false" />
  <p-checkbox></p-checkbox>
  <p-checkbox-group></p-checkbox-group>
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import Row from "./components/Row.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Button, Row },
  setup(props, ctx) {},
});
</script>
<style lang="scss">
.p-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
