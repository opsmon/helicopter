import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { UniversalRequestForm } from "@/components/forms/UniversalRequestForm";

export const metadata: Metadata = {
  title: "Заявка",
  description: "Универсальная демонстрационная форма заявки.",
};

export default function RequestPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Заявка"
        title="Единая форма для всех CTA сайта"
        text="Форма валидируется через Zod, сохраняет черновик, создает номер заявки и добавляет запись в историю localStorage."
      />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="card h-fit p-5">
            <h2 className="text-2xl font-black">После отправки</h2>
            <ul className="mt-4 grid gap-3 text-muted">
              <li>Имитируется задержка отправки.</li>
              <li>Создается номер вида GRT-DEMO-2026-0042.</li>
              <li>Данные остаются только в браузере.</li>
              <li>Статус можно проверить на отдельной странице.</li>
            </ul>
            <Link className="button button-outline mt-5" href="/request/status/">
              Проверить статус
            </Link>
          </aside>
          <UniversalRequestForm />
        </div>
      </section>
    </main>
  );
}
