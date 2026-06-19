import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { StatusLookup } from "@/components/request/StatusLookup";

export const metadata: Metadata = {
  title: "Статус заявки",
  description: "Демонстрационный поиск заявки в localStorage.",
};

export default function StatusPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Статус заявки"
        title="Проверка демо-заявки по номеру"
        text="Заявка ищется в localStorage текущего браузера. Кнопка перехода статуса доступна только как демо-функция."
      />
      <section className="section">
        <div className="container">
          <StatusLookup />
        </div>
      </section>
    </main>
  );
}
