import type { Metadata } from "next";
import { FavoritesComparePanel } from "@/components/services/FavoritesComparePanel";
import { PageHeader } from "@/components/sections/PageHeader";
import { RecentViews } from "@/components/services/RecentViews";
import { ServiceAssistant } from "@/components/services/ServiceAssistant";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Каталог услуг авиакомпании ГРАНАТ.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Услуги"
        title="Все направления в одной понятной структуре"
        text="Аренда, пассажирские и грузовые перевозки, авиационные работы, техническое обслуживание, базирование и специальные задачи."
      />
      <FavoritesComparePanel />
      <RecentViews />
      <section className="section">
        <div className="container grid gap-5">
          <ServiceCard service={services[0]} wide />
          <div className="grid-auto">
            {services.slice(1).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <ServiceAssistant />
    </main>
  );
}
