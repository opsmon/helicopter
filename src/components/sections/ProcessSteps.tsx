import { Download, HelpCircle, Send } from "lucide-react";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";

const steps = [
  "Клиент описывает задачу",
  "Менеджер уточняет маршрут и ограничения",
  "Компания подготавливает расчет и документы",
  "Согласованная услуга выполняется",
];

export function ProcessSteps() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Процесс</p>
        <h2 className="mt-3 text-4xl font-black">Как заказать услугу</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div className="card p-5" key={step}>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white font-black">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black">{step}</h3>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="button button-primary" href="/request/">
            <Send className="h-4 w-4" aria-hidden="true" />
            Оставить заявку
          </Link>
          <a className="button button-outline" download href={withBasePath("/documents/passenger-demo.pdf")}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Список данных
          </a>
          <Link className="button button-outline" href="/contacts/">
            <HelpCircle className="h-4 w-4" aria-hidden="true" />
            Задать вопрос
          </Link>
        </div>
      </div>
    </section>
  );
}
