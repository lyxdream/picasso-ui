<template>
  <Button />
  <hr />
  <p-row tag="div">
    <p-col tag="p" :span="6" :offset="2">
      <div style="background: red">1111</div>
    </p-col>
    <p-col tag="p" :span="6">
      <div style="background: yellow">222</div>
    </p-col>
    <p-col tag="p" :span="6">22233</p-col>
    <p-col tag="p" :span="6">eee</p-col>
  </p-row>

  <div style="border: 1px solid #ddd">
    <p-row tag="div" :gutter="20">
      <p-col tag="p" :span="8"> <div style="background: red">1111</div></p-col>
      <p-col tag="p" :span="8"
        ><div style="background: yellow">1111</div></p-col
      >
      <p-col tag="p" :span="8">22233</p-col>
    </p-row>
  </div>

  <div style="border: 1px solid #ddd">
    <p-row justify="end">
      <p-col tag="p" :span="2">
        <div style="background: red">1111</div>
      </p-col>
      <p-col tag="p" :span="2"
        ><div style="background: yellow">1111</div>
      </p-col>
      <p-col tag="p" :span="2">22233</p-col>
    </p-row>
  </div>
  <div style="border: 1px solid #ddd">
    <p-row>
      <p-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple"></div
      ></p-col>
      <p-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple-light"></div
      ></p-col>
      <p-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple"></div
      ></p-col>
      <p-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple-light"></div
      ></p-col>
    </p-row>
  </div>
</template>
<script lang="ts">
import Button from "./components/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Button },
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
