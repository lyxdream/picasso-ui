import { createVNode, render } from "vue";
import { IMessageParams } from "./message.types";
import MessageComponent from "./message.vue";
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
  console.log(MessageComponent, "===MessageComponent");
  const container = document.createElement("div");
  const vm = createVNode(MessageComponent, options as any);
  //渲染组件
  render(vm, container);
  //放到body下
  document.body.appendChild(container.firstElementChild!);
};

export default Message;
