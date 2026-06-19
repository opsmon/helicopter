"use client";

import { GitCompare, Trash2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

export function FavoritesComparePanel() {
  const [favorites, setFavorites] = useLocalStorageState<string[]>("granat.demo.favoriteServices", []);
  const [compare, setCompare] = useLocalStorageState<string[]>("granat.demo.compareServices", []);
  const favoriteServices = services.filter((service) => favorites.includes(service.id));
  const comparedServices = services.filter((service) => compare.includes(service.id));

  if (!favoriteServices.length && !comparedServices.length) return null;

  return (
    <section className="section-tight">
      <div className="container grid gap-5">
        {favoriteServices.length ? (
          <div className="card p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-black">Избранные услуги</h2>
              <button className="button button-outline" onClick={() => setFavorites([])} type="button">
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                Очистить
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {favoriteServices.map((service) => (
                <Link className="rounded-full bg-accent-light px-3 py-2 font-bold text-accent" href={service.href} key={service.id}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
        {comparedServices.length ? (
          <div className="card overflow-hidden p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="flex items-center gap-2 text-2xl font-black">
                <GitCompare className="h-5 w-5" aria-hidden="true" />
                Сравнение услуг
              </h2>
              <button className="button button-outline" onClick={() => setCompare([])} type="button">
                Очистить
              </button>
            </div>
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <tbody>
                  {["назначение", "тип клиента", "данные", "воздушное судно", "ограничения"].map((row) => (
                    <tr className="border-t border-border" key={row}>
                      <th className="w-40 py-3 text-muted">{row}</th>
                      {comparedServices.map((service) => (
                        <td className="px-3 py-3 align-top" key={service.id}>
                          {row === "назначение" && service.summary}
                          {row === "тип клиента" && service.audience}
                          {row === "данные" && service.requiredData.join(", ")}
                          {row === "воздушное судно" && service.aircraft}
                          {row === "ограничения" && service.limits}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-3 md:hidden">
              {comparedServices.map((service) => (
                <div className="rounded-card border border-border p-4" key={service.id}>
                  <h3 className="font-black">{service.title}</h3>
                  <p className="mt-2 text-muted">{service.summary}</p>
                  <p className="mt-2 text-sm">{service.requiredData.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
