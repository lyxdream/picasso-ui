export type IType = "success" | "warning" | "info" | "error";
export interface IMessageOptions {
  id?: string;
  message?: string;
  type?: IType;
  duration?: number;
  center?: boolean;
  onClose?: () => void;
  offset?: number;
}

export type IMessageParams = IMessageOptions | string;

export const messageTypes = ["success", "info", "warning", "error"] as const;
