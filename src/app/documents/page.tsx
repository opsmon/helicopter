import type { Metadata } from "next";
import { DocumentBrowser } from "@/components/documents/DocumentBrowser";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "Документы",
  description: "Поиск, фильтрация, просмотр и скачивание документов.",
};

export default function DocumentsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Документы"
        title="Лицензии, сертификаты и пассажирские материалы"
        text="Каталог поддерживает поиск, фильтр, сортировку, просмотр PDF, скачивание и копирование ссылки."
      />
      <section className="section">
        <div className="container">
          <DocumentBrowser />
        </div>
      </section>
    </main>
  );
}
