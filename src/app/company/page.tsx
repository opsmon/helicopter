import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { UniversalRequestForm } from "@/components/forms/UniversalRequestForm";
import { company } from "@/data/company";
import { documents } from "@/data/documents";

export const metadata: Metadata = {
  title: "Компания",
  description: "История, миссия, безопасность и направления деятельности.",
};

export default function CompanyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Компания"
        title="Авиационная экспертиза, безопасность и практичные решения"
        text="Страница переупаковывает сведения текущего сайта в современную структуру и явно маркирует данные, требующие подтверждения."
      />
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <p className="eyebrow">Миссия</p>
            <h2 className="mt-3 text-3xl font-black">{company.mission}</h2>
          </div>
          <div className="card p-6">
            <p className="eyebrow">История</p>
            <p className="mt-3 text-muted leading-7">{company.history}</p>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid-auto">
          {company.directions.map((direction) => (
            <div className="card p-5" key={direction}>
              <h2 className="text-2xl font-black">{direction}</h2>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-3">
          <div className="card p-5 lg:col-span-2">
            <h2 className="text-3xl font-black">Команда</h2>
            <p className="mt-3 text-muted">{company.teamPlaceholder}</p>
          </div>
          <div className="card p-5">
            <h2 className="text-3xl font-black">Безопасность</h2>
            <p className="mt-3 text-muted">Лицензии, сертификаты и охрана труда вынесены в каталог документов.</p>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Сертификаты</p>
            <h2 className="mt-3 text-4xl font-black">Документы компании</h2>
            <ul className="mt-5 grid gap-3">
              {documents.slice(0, 4).map((doc) => (
                <li className="card p-4" key={doc.id}>{doc.title}</li>
              ))}
            </ul>
          </div>
          <UniversalRequestForm presetType="консультация" />
        </div>
      </section>
    </main>
  );
}
