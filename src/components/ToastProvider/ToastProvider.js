import React from "react";
import useEscapeKey from "../../hooks/use-esc-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]));

  function createToast(message, variant) {
    const newToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message, variant, visible: true },
    ];
    setToasts(newToasts);
  }

  function dismissToast(id) {
    const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, createToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
