<template>
  <Button />
  <hr />
  <p-row tag="div">
    <p-col tag="p" :span="6" :offset="2">1111</p-col>
    <p-col tag="p" :span="6">2222</p-col>
    <p-col tag="p" :span="6">22233</p-col>
    <p-col tag="p" :span="6">eee</p-col>
  </p-row>
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Button },
  setup(props, ctx) {},
});
</script>
