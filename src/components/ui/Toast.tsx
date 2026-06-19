"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ToastContextValue = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");

  const showToast = useCallback((nextMessage: string) => {
    setMessage(nextMessage);
    window.setTimeout(() => setMessage(""), 2800);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        className={`fixed right-4 top-4 z-[80] rounded-card bg-dark px-4 py-3 text-sm font-semibold text-white shadow-soft transition ${
          message ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        {message}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
}
