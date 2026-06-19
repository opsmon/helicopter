import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "Презентация проекта",
  description: "Что изменилось, реализованные функции и roadmap production-версии.",
};

const changed = [
  "современная навигация",
  "понятная структура услуг",
  "адаптивный интерфейс",
  "быстрые формы",
  "каталог документов",
  "воздушный флот",
  "интерактивный подбор услуги",
  "статус заявки",
  "мобильная панель действий",
];

const production = [
  "CRM / Bitrix24 / amoCRM",
  "email, Telegram и SMS",
  "электронная подпись",
  "онлайн-оплата",
  "личный кабинет",
  "API погоды и расчет маршрута",
  "карты и аналитика",
  "call tracking",
];

export default function DemoPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Презентация"
        title="Демо-сайт как готовый коммерческий продукт для показа заказчику"
        text="Страница фиксирует, что реализовано в демо, что имитируется из-за GitHub Pages и какие материалы нужны для production."
      />
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <p className="eyebrow">Что изменилось</p>
            <h2 className="mt-3 text-3xl font-black">Новая структура вместо визуального обновления старого сайта</h2>
            <ul className="mt-5 grid gap-2 text-muted">
              {changed.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="card p-6">
            <p className="eyebrow">Было / стало</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-card bg-background p-4">
                <h3 className="font-black">Было</h3>
                <p className="mt-2 text-muted">Разрозненные страницы, длинные тексты, формы с backend-зависимостью.</p>
              </div>
              <div className="rounded-card bg-accent-light p-4">
                <h3 className="font-black">Стало</h3>
                <p className="mt-2 text-muted">Единый каталог услуг, заявки, документы, статус, mobile-first интерфейс.</p>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <p className="eyebrow">Реализовано</p>
            <h2 className="mt-3 text-3xl font-black">Работающие возможности демо</h2>
            <ul className="mt-5 grid gap-2 text-muted">
              <li>localStorage-заявки и статус.</li>
              <li>Избранное, сравнение, история просмотров.</li>
              <li>Документы с поиском, фильтром и PDF-просмотром.</li>
              <li>Формы с Zod-валидацией и черновиком.</li>
              <li>Статический экспорт Next.js для GitHub Pages.</li>
            </ul>
          </div>
          <div className="card p-6">
            <p className="eyebrow">Production</p>
            <h2 className="mt-3 text-3xl font-black">Будущие интеграции</h2>
            <ul className="mt-5 grid gap-2 text-muted">
              {production.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container rounded-card bg-dark p-8 text-white">
          <h2 className="text-4xl font-black">Что требуется от заказчика</h2>
          <p className="mt-4 text-white/70 leading-7">
            Логотип, брендбук, актуальные фотографии, список воздушных судов, характеристики, сертификаты, контакты, юридические документы, реальные кейсы, отзывы, регионы и требования к CRM.
          </p>
          <Link className="button mt-6 bg-white text-foreground" href="/request/">
            Открыть форму заявки
          </Link>
        </div>
      </section>
    </main>
  );
}
