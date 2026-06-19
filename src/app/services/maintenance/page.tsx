import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { TrackServiceView } from "@/components/services/RecentViews";
import { UniversalRequestForm } from "@/components/forms/UniversalRequestForm";
import { documents } from "@/data/documents";

export const metadata: Metadata = {
  title: "Техническое обслуживание",
  description: "Плановые работы, диагностика, ремонт и документы для воздушных судов.",
};

export default function MaintenancePage() {
  return (
    <main>
      <TrackServiceView serviceId="maintenance" />
      <PageHeader
        eyebrow="Техническое обслуживание"
        title="Плановые работы, диагностика и подготовка документации"
        text="Форма поддерживает выбор файла, проверку размера и сохранение только метаданных в localStorage."
      />
      <section className="section">
        <div className="container grid-auto">
          {["Плановые работы", "Диагностика", "Ремонт", "Комплектующие", "Подготовка документов", "Консультации"].map((item) => (
            <div className="card p-5" key={item}>
              <h2 className="text-2xl font-black">{item}</h2>
              <p className="mt-3 text-muted">Состав работ определяется по модели ВС, документации и описанию задачи.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Сертификаты</p>
            <h2 className="mt-3 text-4xl font-black">Документы по техническому обслуживанию</h2>
            <ul className="mt-5 grid gap-3">
              {documents.filter((doc) => doc.category.includes("Техническое")).map((doc) => (
                <li className="card p-4" key={doc.id}>{doc.title}</li>
              ))}
            </ul>
          </div>
          <UniversalRequestForm presetType="техническое обслуживание" />
        </div>
      </section>
    </main>
  );
}
