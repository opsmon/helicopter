import type { Metadata } from "next";
import { FleetCards } from "@/components/fleet/FleetCards";
import { PageHeader } from "@/components/sections/PageHeader";
import { UniversalRequestForm } from "@/components/forms/UniversalRequestForm";

export const metadata: Metadata = {
  title: "Воздушный флот",
  description: "Демонстрационный каталог воздушных судов.",
};

export default function FleetPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Флот"
        title="Воздушные суда под разные задачи"
        text="Характеристики в демо помечены отдельно, чтобы заказчик мог заменить их после подтверждения."
      />
      <section className="section">
        <div className="container">
          <FleetCards />
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Подбор</p>
            <h2 className="mt-3 text-4xl font-black">Подобрать воздушное судно под задачу</h2>
          </div>
          <UniversalRequestForm presetType="консультация" />
        </div>
      </section>
    </main>
  );
}
