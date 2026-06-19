import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { TrackServiceView } from "@/components/services/RecentViews";
import { UniversalRequestForm } from "@/components/forms/UniversalRequestForm";

export const metadata: Metadata = {
  title: "Авиационные работы",
  description: "Санитарная авиация, поиск и спасение, съемка, мониторинг и монтажные задачи.",
};

const operations = [
  "санитарная авиация",
  "поисково-спасательные работы",
  "воздушная съемка",
  "мониторинг территорий",
  "лесоавиационные работы",
  "строительно-монтажные работы",
  "погрузочно-разгрузочные работы",
  "транспортно-связные работы",
  "специальные задачи",
];

export default function AviationOperationsPage() {
  return (
    <main>
      <TrackServiceView serviceId="aviation-operations" />
      <PageHeader
        eyebrow="Авиационные работы"
        title="Работы там, где наземный транспорт не справляется"
        text="Фильтры, направления и форма заявки помогают быстро собрать исходные данные для промышленной, спасательной или мониторинговой задачи."
      />
      <section className="section">
        <div className="container">
          <div className="mb-6 flex flex-wrap gap-2">
            {["транспортные", "промышленные", "спасательные", "мониторинговые", "специальные"].map((filter) => (
              <button className="button button-outline" key={filter} type="button">{filter}</button>
            ))}
          </div>
          <div className="grid-auto">
            {operations.map((item) => (
              <article className="card p-5" key={item}>
                <h2 className="text-2xl font-black">{item}</h2>
                <p className="mt-3 text-muted leading-7">
                  Подходит для задач, где нужны маршрут, район работ, требования к оборудованию и ограничения площадки.
                </p>
                <div className="demo-note mt-4">Возможные ограничения уточняются после технического задания.</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Форма</p>
            <h2 className="mt-3 text-4xl font-black">Описать авиационные работы</h2>
          </div>
          <UniversalRequestForm presetType="авиационные работы" />
        </div>
      </section>
    </main>
  );
}
