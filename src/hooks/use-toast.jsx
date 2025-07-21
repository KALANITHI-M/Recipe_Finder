import { useState, useEffect } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  function toast({ id = Date.now(), title, description, action, ...props }) {
    setToasts((current) => [...current, { id, title, description, action, ...props }]);
  }

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((current) => current.slice(1));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return { toasts, toast };
}