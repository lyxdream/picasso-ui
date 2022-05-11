import { App } from "vue";
import Message from "./src/message";

(Message as any).install = (app: App): void => {
  //这个写法是为了兼容vue2 否则无法在this上使用
  app.config.globalProperties.$message = Message;
};
//用户可以去引入组件 通过use的方式，或者可以直接导入
// export { Message };
export default Message;
