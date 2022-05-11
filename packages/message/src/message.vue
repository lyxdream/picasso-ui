<template>
  <transition
    name="p-message-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      class="p-message"
      :id="id"
      v-show="visible"
      :class="classs"
      :style="styles"
    >
      {{ message }}
    </div>
  </transition>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
} from "vue";
import { IType } from "./message.types";
export default defineComponent({
  name: "PMessage",
  props: {
    id: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String as PropType<IType>,
      default: "info",
    },
    duration: {
      type: Number,
      default: 3000,
    },
    center: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: false,
    },
    offset: {
      type: Number,
      default: 20,
    },
  },
  setup(props) {
    const classs = computed(() => [
      "p-message--" + props.type,
      props.center ? "is-center" : "",
    ]);
    const visible = ref(false);
    let timer = null;
    const startTimer = () => {
      timer = setTimeout(() => {
        visible.value = false;
      }, props.duration);
    };
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    onUnmounted(() => {
      clearTimeout(timer);
      timer = null;
    });
    const styles = computed(() => {
      return {
        top: `${props.offset}px`,
      };
    });
    return {
      classs,
      visible,
      styles,
    };
  },
});
</script>
