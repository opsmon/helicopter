import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { FavoritesComparePanel } from "@/components/services/FavoritesComparePanel";
import { FleetCards } from "@/components/fleet/FleetCards";
import { Hero } from "@/components/sections/Hero";
import { MediaGallery } from "@/components/sections/MediaGallery";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { QuickRequestForm } from "@/components/forms/QuickRequestForm";
import { RecentViews } from "@/components/services/RecentViews";
import { ServiceAssistant } from "@/components/services/ServiceAssistant";
import { ServiceCard } from "@/components/services/ServiceCard";
import { cases } from "@/data/cases";
import { documents } from "@/data/documents";
import { faq } from "@/data/faq";
import { demoRoutes } from "@/data/routes";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Вертолетные услуги для людей, бизнеса и сложных задач",
  description: "Главная страница демо-сайта авиакомпании ГРАНАТ.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="container relative z-10">
        <QuickRequestForm />
      </section>
      <FavoritesComparePanel />
      <RecentViews />
      <MediaGallery />
      <section className="section">
        <div className="container">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Основные услуги</p>
              <h2 className="mt-3 text-4xl font-black">От пассажирского перелета до сложной авиационной задачи</h2>
            </div>
            <Link className="button button-outline" href="/services/">
              Все услуги
            </Link>
          </div>
          <div className="grid gap-5">
            <ServiceCard service={services[0]} wide />
            <div className="grid-auto">
              {services.slice(1, 8).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <ServiceAssistant />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Преимущества</p>
            <h2 className="mt-3 text-4xl font-black">Спокойная авиационная экспертиза вместо громких обещаний</h2>
            <p className="lead mt-4">
              Сайт показывает конкретную пользу: подготовку маршрута, работу с документами, разные форматы авиационных работ и сопровождение заявки.
            </p>
          </div>
          <div className="grid-auto">
            {[
              "Задачи в труднодоступных районах",
              "Индивидуальная подготовка маршрута",
              "Частные, корпоративные и государственные сценарии",
              "Техническая инфраструктура и базирование",
              "Помощь в подготовке документов",
              "Нестандартные задачи через консультацию",
            ].map((item) => (
              <div className="card p-5" key={item}>
                <h3 className="text-xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProcessSteps />
      <section className="section bg-white">
        <div className="container">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Воздушный флот</p>
              <h2 className="mt-3 text-4xl font-black">Карточки воздушных судов</h2>
            </div>
            <Link className="button button-outline" href="/fleet/">
              Открыть флот
            </Link>
          </div>
          <FleetCards compact />
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="eyebrow">География</p>
            <h2 className="mt-3 text-4xl font-black">Маршрут рассчитывается индивидуально</h2>
          </div>
          <div className="grid gap-3 lg:col-span-2">
            {demoRoutes.map((route) => (
              <div className="card p-5" key={`${route.from}-${route.to}`}>
                <h3 className="text-xl font-black">
                  {route.from} - {route.to}
                </h3>
                <p className="mt-2 text-muted">{route.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-dark text-white">
        <div className="container grid gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow text-white/65">Документы и безопасность</p>
            <h2 className="mt-3 text-4xl font-black">Лицензии, сертификаты и пассажирские материалы</h2>
          </div>
          <div className="grid gap-3">
            {documents.slice(0, 4).map((doc) => (
              <Link className="rounded-card bg-white/8 p-4 hover:bg-white/12" href="/documents/" key={doc.id}>
                <strong>{doc.title}</strong>
                <span className="block text-white/60">{doc.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Кейсы</p>
          <h2 className="mt-3 text-4xl font-black">Демонстрационная структура кейсов</h2>
          <div className="mt-6 grid-auto">
            {cases.map((item) => (
              <article className="card p-5" key={item.title}>
                <p className="eyebrow">{item.category}</p>
                <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-muted">{item.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h2 className="mb-6 mt-3 text-4xl font-black">Частые вопросы</h2>
          <Accordion items={faq} />
        </div>
      </section>
      <section className="section">
        <div className="container rounded-card bg-accent p-8 text-white md:p-12">
          <h2 className="text-4xl font-black">Опишите задачу, а менеджер уточнит маршрут и ограничения</h2>
          <Link className="button mt-6 bg-white text-accent" href="/request/">
            Оставить заявку
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Авиакомпания ГРАНАТ",
            url: "https://granatcompany.ru",
          }),
        }}
      />
    </main>
  );
}
