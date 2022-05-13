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
      <slot>
        <div>
          {{ message }}
        </div>
      </slot>
      <div class="" v-if="showClose" @click.stop="close">
        <i class="p-message__closeBtn p-icon-close"></i>
      </div>
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
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classs = computed(() => [
      "p-message--" + props.type,
      props.center ? "is-center" : "",
    ]);
    const visible = ref(false);
    const timer = ref(null);
    const startTimer = () => {
      if (props.duration > 0) {
        timer.value = setTimeout(() => {
          if (visible.value) close();
        }, props.duration);
      }
    };
    const clearTimer = () => {
      clearTimeout(timer.value);
      timer.value = null;
    };
    const close = () => {
      visible.value = false;
    };
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    onUnmounted(() => {
      clearTimer();
      close();
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
      close,
    };
  },
});
</script>
