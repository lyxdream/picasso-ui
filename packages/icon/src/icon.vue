<template>
  <i :class="`p-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
});
</script>