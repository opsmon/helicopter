import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { CopyButton } from "@/components/ui/CopyButton";
import { FleetCards } from "@/components/fleet/FleetCards";
import { PageHeader } from "@/components/sections/PageHeader";
import { PrintButton } from "@/components/ui/PrintButton";
import { TrackServiceView } from "@/components/services/RecentViews";
import { UniversalRequestForm } from "@/components/forms/UniversalRequestForm";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Аренда вертолета",
  description: "Аренда вертолета для пассажирских, корпоративных и специальных задач.",
};

export default function RentalPage() {
  return (
    <main>
      <TrackServiceView serviceId="helicopter-rental" />
      <PageHeader
        eyebrow="Аренда вертолета"
        title="Перелет под конкретный маршрут, задачу и ограничения"
        text="Страница объединяет частные, корпоративные и грузовые сценарии, список данных для расчета и демо-форму без выдуманных цен."
      />
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Сценарии</p>
            <h2 className="mt-3 text-4xl font-black">Частные, деловые и нестандартные перелеты</h2>
            <div className="mt-6 grid gap-3">
              {["Частный перелет", "Корпоративная поездка", "Туристический маршрут", "Доставка груза", "Труднодоступная точка"].map((item) => (
                <div className="card p-4" key={item}>{item}</div>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <p className="eyebrow">Предварительный расчет</p>
            <h3 className="mt-2 text-2xl font-black">Что подготовить</h3>
            <ul className="mt-4 grid gap-2 text-muted">
              <li>Маршрут и желаемая дата.</li>
              <li>Количество пассажиров, багаж и обратный перелет.</li>
              <li>Дополнительные требования к площадке или времени.</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <button className="button button-outline" type="button">
                <Calculator className="h-4 w-4" aria-hidden="true" />
                Точный расчет делает менеджер
              </button>
              <CopyButton value="Маршрут, дата, пассажиры, багаж, обратный перелет, дополнительные требования" label="Копировать данные" />
              <PrintButton />
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <p className="eyebrow">Флот</p>
          <h2 className="mb-6 mt-3 text-4xl font-black">Подбор воздушного судна</h2>
          <FleetCards compact />
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Заявка</p>
            <h2 className="mt-3 text-4xl font-black">Сохранить запрос на аренду</h2>
          </div>
          <UniversalRequestForm presetType="пассажирский перелет" />
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <Accordion items={faq.slice(0, 6)} />
        </div>
      </section>
    </main>
  );
}
