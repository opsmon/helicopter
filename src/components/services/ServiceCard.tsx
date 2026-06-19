"use client";

import { Bookmark, GitCompare, Plane, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { trackEvent } from "@/lib/analytics";
import { withBasePath } from "@/lib/paths";
import type { ServiceItem } from "@/types/site";
import { useToast } from "@/components/ui/Toast";

const FAVORITES_KEY = "granat.demo.favoriteServices";
const COMPARE_KEY = "granat.demo.compareServices";

export function ServiceCard({ service, wide = false }: { service: ServiceItem; wide?: boolean }) {
  const { showToast } = useToast();
  const [favorites, setFavorites] = useLocalStorageState<string[]>(FAVORITES_KEY, []);
  const [compare, setCompare] = useLocalStorageState<string[]>(COMPARE_KEY, []);
  const saved = favorites.includes(service.id);
  const compared = compare.includes(service.id);

  function toggleFavorite() {
    setFavorites(saved ? favorites.filter((id) => id !== service.id) : [...favorites, service.id]);
    trackEvent("service_saved", { service: service.id });
  }

  function toggleCompare() {
    if (compared) {
      setCompare(compare.filter((id) => id !== service.id));
      return;
    }
    if (compare.length >= 3) {
      showToast("В сравнение можно добавить до трех услуг.");
      return;
    }
    setCompare([...compare, service.id]);
    trackEvent("service_compared", { service: service.id });
  }

  async function share() {
    const url = new URL(withBasePath(service.href), window.location.origin).toString();
    if (navigator.share) {
      await navigator.share({ title: service.title, url });
    } else {
      await navigator.clipboard.writeText(url);
      showToast("Ссылка скопирована.");
    }
  }

  return (
    <article className={`card overflow-hidden ${wide ? "md:grid md:grid-cols-[1.1fr_1fr]" : ""}`}>
      <div className={`relative h-56 w-full ${wide ? "md:h-full md:min-h-[360px]" : ""}`}>
        <Image
          alt=""
          className="object-cover"
          fill
          sizes={wide ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          src={withBasePath(service.image)}
        />
      </div>
      <div className="grid gap-4 p-5">
        <div>
          <p className="eyebrow">{service.audience}</p>
          <h3 className="mt-2 text-2xl font-black">{service.title}</h3>
        </div>
        <p className="text-muted leading-7">{service.summary}</p>
        <ul className="flex flex-wrap gap-2">
          {service.scenarios.map((item) => (
            <li className="rounded-full bg-accent-light px-3 py-1 text-sm font-semibold text-accent" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          <Link className="button button-primary" href={service.href} onClick={() => trackEvent("service_opened", { service: service.id })}>
            <Plane className="h-4 w-4" aria-hidden="true" />
            Подробнее
          </Link>
          <Link className="button button-outline" href={`/request/?type=${service.id}`}>
            Оставить заявку
          </Link>
          <button
            aria-label={saved ? "Удалить из избранного" : "Добавить в избранное"}
            className="button button-outline px-3"
            onClick={toggleFavorite}
            title={saved ? "Сохранено" : "В избранное"}
            type="button"
          >
            <Bookmark className={`h-4 w-4 ${saved ? "fill-accent text-accent" : ""}`} aria-hidden="true" />
          </button>
          <button
            aria-label={compared ? "Убрать из сравнения" : "Добавить в сравнение"}
            className="button button-outline px-3"
            onClick={toggleCompare}
            title="Сравнить"
            type="button"
          >
            <GitCompare className={`h-4 w-4 ${compared ? "text-accent" : ""}`} aria-hidden="true" />
          </button>
          <button aria-label="Поделиться" className="button button-outline px-3" onClick={share} type="button">
            <Share2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
