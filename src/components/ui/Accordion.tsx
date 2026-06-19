"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Accordion({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div className="card overflow-hidden" key={item.question}>
            <h3>
              <button
                aria-expanded={active}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold"
                onClick={() => setOpen(active ? -1 : index)}
                type="button"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 transition ${active ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div className={`${active ? "block" : "hidden"} px-5 pb-5 text-muted leading-7`}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
