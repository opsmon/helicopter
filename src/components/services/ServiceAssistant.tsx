"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { serviceRecommendations, services } from "@/data/services";

export function ServiceAssistant() {
  const [active, setActive] = useState(serviceRecommendations[0]);
  const service = useMemo(
    () => services.find((item) => item.id === active.serviceId) ?? services[0],
    [active],
  );

  return (
    <section className="section bg-dark text-white">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow text-white/65">Помощник выбора</p>
          <h2 className="mt-3 text-4xl font-black">Какая задача перед вами?</h2>
          <p className="mt-4 text-white/70 leading-7">
            Обычный пошаговый подбор без имитации AI-чата. Выберите сценарий, а сайт покажет подходящее направление и данные для расчета.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2 sm:grid-cols-2">
            {serviceRecommendations.map((item) => (
              <button
                className={`min-h-12 rounded-card border px-4 py-3 text-left font-bold ${
                  active.task === item.task ? "border-accent bg-accent" : "border-white/15 bg-white/5"
                }`}
                key={item.task}
                onClick={() => setActive(item)}
                type="button"
              >
                {item.task}
              </button>
            ))}
          </div>
          <div className="rounded-card bg-white p-5 text-foreground">
            <p className="eyebrow">Рекомендуемая услуга</p>
            <h3 className="mt-2 text-2xl font-black">{service.title}</h3>
            <p className="mt-3 text-muted leading-7">{active.explanation}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <strong>Необходимые данные</strong>
                <ul className="mt-2 list-disc pl-5 text-muted">
                  {service.requiredData.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Ограничения</strong>
                <p className="mt-2 text-muted">{service.limits}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="button button-primary" href={service.href}>
                Перейти к услуге
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link className="button button-outline" href="/request/">
                Открыть форму
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
