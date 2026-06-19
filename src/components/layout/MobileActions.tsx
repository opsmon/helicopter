"use client";

import { Calculator, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { contacts } from "@/data/contacts";

export function MobileActions() {
  return (
    <div className="mobile-actions fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-3 py-2 pb-[calc(8px+env(safe-area-inset-bottom))] shadow-soft backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2 text-xs font-bold">
        <a className="button button-outline min-h-12" href={`tel:${contacts.phoneHref}`}>
          <Phone className="h-4 w-4" aria-hidden="true" />
          Позвонить
        </a>
        <Link className="button button-primary min-h-12" href="/request/">
          <Calculator className="h-4 w-4" aria-hidden="true" />
          Рассчитать
        </Link>
        <a className="button button-outline min-h-12" href={`mailto:${contacts.email}`}>
          <Mail className="h-4 w-4" aria-hidden="true" />
          Написать
        </a>
      </div>
    </div>
  );
}
