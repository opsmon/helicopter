"use client";

import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

export function CopyButton({ value, label = "Скопировать" }: { value: string; label?: string }) {
  const { showToast } = useToast();

  return (
    <button
      className="button button-outline no-print"
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        showToast("Данные скопированы.");
      }}
      type="button"
    >
      <Copy className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  );
}
