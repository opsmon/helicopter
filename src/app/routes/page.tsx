import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { UniversalRequestForm } from "@/components/forms/UniversalRequestForm";
import { demoRoutes, routeRegions } from "@/data/routes";

export const metadata: Metadata = {
  title: "География полетов",
  description: "Дальний Восток, базовая точка и индивидуальные маршруты.",
};

export default function RoutesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="География"
        title="Базовая точка в Артеме и индивидуальные маршруты"
        text="Демонстрационная карта не требует платного API-ключа. Все маршруты рассчитываются индивидуально."
      />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="card min-h-[430px] p-5">
            <p className="eyebrow">SVG-карта</p>
            <svg className="mt-5 h-[330px] w-full" viewBox="0 0 700 420" role="img" aria-label="Демонстрационная карта Дальнего Востока">
              <rect width="700" height="420" rx="8" fill="#fff" />
              <path d="M100 260 C190 160 300 120 430 145 C535 165 600 230 620 320 C510 360 390 350 280 330 C190 312 135 300 100 260Z" fill="#f2e4e7" stroke="#8f1730" strokeWidth="3" />
              <circle cx="246" cy="292" r="9" fill="#8f1730" />
              <text x="260" y="298" fontSize="18" fill="#151515">Артем</text>
              <circle cx="520" cy="210" r="7" fill="#2f6e4f" />
              <circle cx="430" cy="300" r="7" fill="#2f6e4f" />
              <circle cx="330" cy="190" r="7" fill="#2f6e4f" />
            </svg>
          </div>
          <div className="grid gap-4">
            <div className="card p-5">
              <h2 className="text-2xl font-black">Регионы работы</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {routeRegions.map((item) => (
                  <span className="rounded-full bg-accent-light px-3 py-2 font-bold text-accent" key={item}>{item}</span>
                ))}
              </div>
            </div>
            {demoRoutes.map((route) => (
              <div className="card p-5" key={`${route.from}-${route.to}`}>
                <h3 className="text-xl font-black">{route.from} - {route.to}</h3>
                <p className="mt-2 text-muted">{route.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Произвольный маршрут</p>
            <h2 className="mt-3 text-4xl font-black">Укажите точки и комментарий</h2>
          </div>
          <UniversalRequestForm presetType="пассажирский перелет" />
        </div>
      </section>
    </main>
  );
}
