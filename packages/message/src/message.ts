import { ComponentPublicInstance, createVNode, render, VNode } from "vue";
import { IMessageParams } from "./message.types";
import MessageComponent from "./message.vue";
const instances: VNode[] = [];
let seed = 1;
const Message = (options: IMessageParams) => {
  //函数的参数个数不一致用函数重载
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }
  // options是一个对象，根据选项渲染一个组件
  //1、元素应该渲染body,手动挂载，而不是内置，此时是动态创建组件
  //2、new Vue(render:()=>h(Message)).mount
  //3、先把一个组件渲染成虚拟节点，然后再把一个节点render  createVnode(component)=>render(component,container)
  let verticalOffset = options.offset || 20;
  instances.forEach((vm) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + 16;
  }); //存放偏移量  创建组件的时候传入偏移量
  verticalOffset += 16;
  const userOnClose = options.onClose;
  const id = `message_${seed++}`;
  let opts = {
    ...options,
    offset: verticalOffset,
    id,
    onClose: () => {
      //当移除的时候 需要把位置进行一个调整，把当前的位置向上移，移除实例   //根据id移除掉  // userOnClose?.(); // 等价于 userOnClose&&userOnClose()
      console.log("根据id移除掉");
      close(id, userOnClose);
    },
  };
  const container = document.createElement("div");
  container.className = `container_${id}`;

  const vm = createVNode(MessageComponent, opts as any);
  //销毁组件
  vm.props!.onDestroy = () => {
    render(null, container); //此时render移除dom vue2的卸载不会移除
  };
  //渲染组件
  render(vm, container);
  //放到body下
  instances.push(vm);
  document.body.appendChild(container.firstElementChild!);
  return {
    // 与其直接调用onClose函数，不如设置这个值，这样我们就可以拥有完整的生命周期
    // 对于out组件，这样就不会跳过所有关闭步骤.
    close: () =>
      ((
        vm.component!.proxy as ComponentPublicInstance<{ visible: boolean }>
      ).visible = false),
  };
};

export function close(id: string, userOnClose?: (vm: VNode) => void): void {
  const idx = instances.findIndex((vm) => id === vm.component!.props.id);
  if (idx === -1) return;
  const vm = instances[idx];
  if (!vm) return;
  userOnClose?.(vm);

  const removedHeight = vm.el!.offsetHeight;
  instances.splice(idx, 1);

  // 调整其他实例的垂直偏移
  const len = instances.length;
  if (len < 1) return;
  for (let i = idx; i < len; i++) {
    const pos =
      Number.parseInt(instances[i].el!.style["top"], 10) - removedHeight - 16;
    instances[i].component!.props.offset = pos;
  }
}

export default Message;
