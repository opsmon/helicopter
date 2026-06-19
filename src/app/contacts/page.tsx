import type { Metadata } from "next";
import { CopyButton } from "@/components/ui/CopyButton";
import { PageHeader } from "@/components/sections/PageHeader";
import { PrintButton } from "@/components/ui/PrintButton";
import { UniversalRequestForm } from "@/components/forms/UniversalRequestForm";
import { contactDepartments, contacts } from "@/data/contacts";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Телефон, email, адрес, реквизиты и форма обратной связи.",
};

export default function ContactsPage() {
  const contactText = `${contacts.companyName}
Телефон: ${contacts.phone}
Email: ${contacts.email}
Площадка: ${contacts.helipadAddress}
Офис АУЦ: ${contacts.officeAddress}`;

  return (
    <main>
      <PageHeader
        eyebrow="Контакты"
        title="Связаться с ГРАНАТ"
        text="Подтвержденные контакты с текущего сайта, копирование данных, статическая карта и форма обратной связи."
      />
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            <div className="card p-5">
              <h2 className="text-3xl font-black">Владивосток / Артем</h2>
              <p className="mt-4 text-muted leading-7">
                <a href={`tel:${contacts.phoneHref}`}>{contacts.phone}</a>
                <br />
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                <br />
                {contacts.helipadAddress}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <CopyButton value={contactText} />
                <PrintButton label="Печать контактов" />
                <a className="button button-outline" download href={withBasePath("/granat.vcf")}>Добавить контакт</a>
              </div>
            </div>
            <div className="card p-5">
              <h2 className="text-2xl font-black">{contacts.auc.title}</h2>
              <p className="mt-3 text-muted">
                {contacts.auc.phone} · {contacts.auc.email}
              </p>
            </div>
            <div className="card p-5">
              <h2 className="text-2xl font-black">Направления связи</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {contactDepartments.map((item) => (
                  <span className="rounded-full bg-accent-light px-3 py-2 font-bold text-accent" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="card min-h-[420px] p-5">
            <p className="eyebrow">Карта</p>
            <svg className="mt-5 h-[330px] w-full" viewBox="0 0 640 360" role="img" aria-label="Схема проезда">
              <rect width="640" height="360" rx="8" fill="#fff" />
              <path d="M70 250 C170 180 285 180 390 120 C470 75 545 88 600 150" fill="none" stroke="#deded8" strokeWidth="18" />
              <path d="M70 250 C170 180 285 180 390 120 C470 75 545 88 600 150" fill="none" stroke="#8f1730" strokeWidth="4" />
              <circle cx="250" cy="185" r="12" fill="#8f1730" />
              <text x="270" y="192" fontSize="18" fill="#151515">Площадка</text>
            </svg>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Обратная связь</p>
            <h2 className="mt-3 text-4xl font-black">Оставить сообщение</h2>
          </div>
          <UniversalRequestForm presetType="консультация" />
        </div>
      </section>
    </main>
  );
}
