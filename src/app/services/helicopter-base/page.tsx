import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { TrackServiceView } from "@/components/services/RecentViews";
import { UniversalRequestForm } from "@/components/forms/UniversalRequestForm";

export const metadata: Metadata = {
  title: "Базирование вертолетов",
  description: "Стоянка, ангары, охрана, инфраструктура и обслуживание.",
};

export default function BasePage() {
  return (
    <main>
      <TrackServiceView serviceId="helicopter-base" />
      <PageHeader
        eyebrow="Базирование"
        title="Инфраструктура для размещения воздушного судна"
        text="Стоянка, ангары, охрана, доступ к инфраструктуре, техническая поддержка и дополнительные услуги по запросу."
      />
      <section className="section">
        <div className="container grid-auto">
          {["Стоянка", "Ангары", "Охрана", "Техническая поддержка", "Доступ к инфраструктуре", "Дополнительные услуги"].map((item) => (
            <div className="card p-5" key={item}>
              <h2 className="text-2xl font-black">{item}</h2>
              <p className="mt-3 text-muted">Наличие и формат услуги подтверждаются менеджером.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Запрос места</p>
            <h2 className="mt-3 text-4xl font-black">Указать модель, период и необходимые услуги</h2>
          </div>
          <UniversalRequestForm presetType="базирование" />
        </div>
      </section>
    </main>
  );
}
