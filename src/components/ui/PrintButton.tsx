"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label = "Печать" }: { label?: string }) {
  return (
    <button className="button button-outline no-print" onClick={() => window.print()} type="button">
      <Printer className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  );
}
