import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PrintButton } from "@/components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Демонстрационная политика обработки персональных данных.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Privacy"
        title="Политика конфиденциальности демо-сайта"
        text="GitHub Pages-демо не отправляет данные на сервер. Все заявки остаются в localStorage браузера пользователя."
      />
      <section className="section">
        <div className="container max-w-3xl">
          <div className="card p-6 leading-8">
            <h2 className="text-2xl font-black">Обработка данных</h2>
            <p className="mt-4 text-muted">
              Форма работает в демонстрационном режиме: данные не передаются сотрудникам компании, не сохраняются в базе данных и не используются для реальной обработки заявки.
            </p>
            <h2 className="mt-8 text-2xl font-black">Production-версия</h2>
            <p className="mt-4 text-muted">
              Для production требуется согласовать юридические документы, обработчика, срок хранения и каналы передачи заявок.
            </p>
            <div className="mt-6">
              <PrintButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
