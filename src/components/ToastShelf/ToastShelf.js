import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ data, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {data.map(({ id, message, variant, visible }) => {
        if (!visible) {
          return undefined;
        }

        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast id={id} variant={variant} handleDismiss={handleDismiss}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
