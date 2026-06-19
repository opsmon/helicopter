import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { CopyButton } from "@/components/ui/CopyButton";
import { PageHeader } from "@/components/sections/PageHeader";
import { PrintButton } from "@/components/ui/PrintButton";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Пассажирам",
  description: "Правила, багаж, документы и подготовка к полету.",
};

const passengerSections = [
  "перед полетом",
  "документы",
  "регистрация",
  "багаж",
  "ручная кладь",
  "опасные предметы",
  "дети",
  "животные",
  "пассажиры с ограниченной мобильностью",
  "правила поведения",
  "задержка или отмена",
  "возврат",
  "контакты",
];

export default function PassengersPage() {
  const items = passengerSections.map((section) => ({
    question: section,
    answer:
      "Официальные формулировки должны быть подтверждены заказчиком. В демо этот блок показывает структуру: краткое пояснение для пассажира отделяется от юридического текста и не заменяет правила перевозки.",
  }));

  return (
    <main>
      <PageHeader
        eyebrow="Пассажирам"
        title="Правила и подготовка к полету без длинного полотна текста"
        text="Раздел разбит на категории, поддерживает печать, скачивание памятки и быстрый переход по темам."
      />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="card h-fit p-5">
            <h2 className="text-xl font-black">Содержание</h2>
            <nav className="mt-4 grid gap-2" aria-label="Содержание пассажирских правил">
              {passengerSections.map((section) => (
                <a className="text-muted hover:text-accent" href={`#${section}`} key={section}>{section}</a>
              ))}
            </nav>
            <div className="mt-5 flex flex-wrap gap-2">
              <PrintButton />
              <a className="button button-outline" download href={withBasePath("/documents/passenger-demo.pdf")}>PDF</a>
            </div>
          </aside>
          <div className="grid gap-6">
            <div className="card p-5">
              <h2 className="text-2xl font-black">Что взять с собой</h2>
              <ul className="mt-4 grid gap-2 text-muted">
                <li>Документ, удостоверяющий личность.</li>
                <li>Информацию о багаже и особых требованиях.</li>
                <li>Контактный телефон для связи перед вылетом.</li>
              </ul>
            </div>
            <div className="demo-note">
              Разговорные пояснения в демо отделены от юридического текста. Официальные правила нужно сверить с актуальными документами компании.
            </div>
            <Accordion items={items} />
            <CopyButton value="Документы, багаж, маршрут, контактный телефон" label="Скопировать список" />
          </div>
        </div>
      </section>
    </main>
  );
}
