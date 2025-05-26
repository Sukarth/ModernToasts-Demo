
export enum ToastType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export interface ToastData {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

export interface ToastProps extends ToastData {
  onClose: (id: string) => void; // Changed: onClose now takes the id of the toast to remove
  stackStyle: React.CSSProperties;
}
