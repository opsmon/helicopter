"use client";

import Link from "next/link";
import { useEffect } from "react";
import { services } from "@/data/services";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

const KEY = "granat.demo.recentServices";

export function TrackServiceView({ serviceId }: { serviceId: string }) {
  const [, setRecent] = useLocalStorageState<string[]>(KEY, []);
  useEffect(() => {
    setRecent((current) => [serviceId, ...current.filter((id) => id !== serviceId)].slice(0, 6));
  }, [serviceId, setRecent]);
  return null;
}

export function RecentViews() {
  const [recent, setRecent] = useLocalStorageState<string[]>(KEY, []);
  const items = services.filter((service) => recent.includes(service.id));
  if (!items.length) return null;
  return (
    <section className="section-tight">
      <div className="container">
        <div className="card p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-black">Вы недавно смотрели</h2>
            <button className="button button-outline" onClick={() => setRecent([])} type="button">
              Очистить
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Link className="rounded-full bg-accent-light px-3 py-2 font-bold text-accent" href={item.href} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
