import { useRef } from "react";

import { ToastType } from "../ToastProvider";

export default function useTimeout() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return {
    set(handler: () => void, duration: number) {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(handler, duration);
    },
  };
}
