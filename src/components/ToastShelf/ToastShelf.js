import React from "react";

import { ToastContext } from "../ToastProvider/ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleEsc(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [setToasts]);

  return (
    <ol
      className={styles.wrapper}
      aria-label="Notification"
      aria-live="polite"
      role="region"
    >
      {toasts.map(({ id, message, variant, visible }) => {
        if (!visible) {
          return undefined;
        }

        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast id={id} variant={variant}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
