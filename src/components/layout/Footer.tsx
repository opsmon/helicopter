import Link from "next/link";
import { contacts } from "@/data/contacts";

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark py-12 text-white">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_2fr_1fr]">
        <div>
          <div className="mb-4 text-2xl font-black">ГРАНАТ</div>
          <p className="text-white/70 leading-7">
            Современная демо-версия сайта авиакомпании для презентации услуг, документов и заявок.
          </p>
        </div>
        <nav className="grid gap-3 sm:grid-cols-2" aria-label="Навигация в подвале">
          <Link href="/services/">Услуги</Link>
          <Link href="/fleet/">Воздушный флот</Link>
          <Link href="/routes/">География</Link>
          <Link href="/documents/">Документы</Link>
          <Link href="/request/status/">Статус заявки</Link>
          <Link href="/demo/">Презентация</Link>
          <Link href="/privacy/">Конфиденциальность</Link>
          <Link href="/contacts/">Контакты</Link>
        </nav>
        <address className="not-italic text-white/75 leading-7">
          <a href={`tel:${contacts.phoneHref}`}>{contacts.phone}</a>
          <br />
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          <br />
          {contacts.helipadAddress}
        </address>
      </div>
    </footer>
  );
}
