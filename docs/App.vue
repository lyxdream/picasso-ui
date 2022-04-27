<template>
  <Button />
  <hr />
  <p-row tag="div">
    <p-col tag="p" :span="6" :offset="4"></p-col>
    <p-col tag="p" :span="6"></p-col>
    <p-col tag="p" :span="6"></p-col>
    <p-col tag="p" :span="6"></p-col>
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
