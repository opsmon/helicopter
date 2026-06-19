"use client";

import { Calculator, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contacts } from "@/data/contacts";
import { services } from "@/data/services";
import { trackEvent } from "@/lib/analytics";

const nav = [
  { href: "/fleet/", label: "Воздушный флот" },
  { href: "/passengers/", label: "Пассажирам" },
  { href: "/company/", label: "Компания" },
  { href: "/documents/", label: "Документы" },
  { href: "/contacts/", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !open || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>("a, button, [tabindex]:not([tabindex='-1'])"),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "bg-surface/95 shadow-sm backdrop-blur" : "bg-transparent text-white"
      }`}
    >
      <div className={`container flex items-center justify-between gap-5 transition-all ${scrolled ? "h-16" : "h-20"}`}>
        <Link className="flex items-center gap-3 font-black" href="/">
          <span className="grid h-10 w-10 place-items-center rounded-card bg-accent text-white">Г</span>
          <span className="text-lg">ГРАНАТ</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold lg:flex" aria-label="Основная навигация">
          <div className="group relative">
            <Link href="/services/" className="py-5">
              Услуги
            </Link>
            <div className="invisible absolute left-0 top-10 grid w-72 gap-1 rounded-card border border-border bg-surface p-2 text-foreground opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
              {services.slice(0, 6).map((service) => (
                <Link className="rounded-card px-3 py-2 hover:bg-accent-light" href={service.href} key={service.id}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="button button-outline min-h-10 bg-white/90 text-foreground"
            href={`tel:${contacts.phoneHref}`}
            onClick={() => trackEvent("phone_clicked")}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contacts.phone}
          </a>
          <Link className="button button-primary min-h-10" href="/request/">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Рассчитать
          </Link>
        </div>
        <button
          aria-expanded={open}
          aria-label="Открыть меню"
          className="button button-outline bg-white/90 text-foreground lg:hidden"
          onClick={() => setOpen(true)}
          type="button"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-[70] bg-dark text-white lg:hidden" ref={panelRef} role="dialog" aria-modal="true">
          <div className="container flex h-20 items-center justify-between">
            <span className="text-xl font-black">ГРАНАТ</span>
            <button aria-label="Закрыть меню" className="button button-secondary" onClick={() => setOpen(false)} type="button">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="container grid gap-2 text-2xl font-bold" aria-label="Мобильная навигация">
            <Link onClick={() => setOpen(false)} href="/services/">Услуги</Link>
            {nav.map((item) => (
              <Link onClick={() => setOpen(false)} href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link onClick={() => setOpen(false)} href="/request/">Рассчитать полет</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
