"use client";

import { GitCompare, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/data/fleet";
import { trackEvent } from "@/lib/analytics";
import { withBasePath } from "@/lib/paths";

export function FleetCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid-auto">
      {fleet.slice(0, compact ? 2 : fleet.length).map((aircraft) => (
        <article className="card overflow-hidden" key={aircraft.id}>
          <div className="relative h-52 w-full">
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              src={withBasePath(aircraft.image)}
            />
          </div>
          <div className="grid gap-4 p-5">
            <div>
              <p className="eyebrow">{aircraft.purposes.join(" · ")}</p>
              <h3 className="mt-2 text-2xl font-black">{aircraft.name}</h3>
            </div>
            <p className="text-muted leading-7">{aircraft.description}</p>
            <dl className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-muted">Пассажиры</dt>
                <dd className="font-bold">{aircraft.passengers ?? "по задаче"}</dd>
              </div>
              <div>
                <dt className="text-muted">Груз</dt>
                <dd className="font-bold">{aircraft.payload}</dd>
              </div>
              <div>
                <dt className="text-muted">Дальность</dt>
                <dd className="font-bold">{aircraft.range}</dd>
              </div>
              <div>
                <dt className="text-muted">Скорость</dt>
                <dd className="font-bold">{aircraft.cruiseSpeed}</dd>
              </div>
            </dl>
            {aircraft.isDemoData ? (
              <div className="demo-note">Демонстрационные характеристики. Требуется подтверждение заказчика.</div>
            ) : null}
            <div className="flex flex-wrap gap-2">
              <Link
                className="button button-primary"
                href="/request/"
                onClick={() => trackEvent("fleet_opened", { id: aircraft.id })}
              >
                <Plane className="h-4 w-4" aria-hidden="true" />
                Подобрать
              </Link>
              <button className="button button-outline" type="button">
                <GitCompare className="h-4 w-4" aria-hidden="true" />
                Сравнить
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
