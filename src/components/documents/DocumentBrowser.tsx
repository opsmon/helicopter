"use client";

import { Copy, Download, Eye, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { documents } from "@/data/documents";
import { trackEvent } from "@/lib/analytics";
import { withBasePath } from "@/lib/paths";
import { useToast } from "@/components/ui/Toast";

export function DocumentBrowser() {
  const { showToast } = useToast();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Все");
  const [sort, setSort] = useState("title");
  const [active, setActive] = useState(documents[0]);
  const categories = ["Все", ...Array.from(new Set(documents.map((doc) => doc.category)))];

  const filtered = useMemo(() => {
    return documents
      .filter((doc) => category === "Все" || doc.category === category)
      .filter((doc) => `${doc.title} ${doc.number}`.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => String(a[sort as "title" | "category"]).localeCompare(String(b[sort as "title" | "category"])));
  }, [category, query, sort]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="card grid gap-4 p-5">
        <div className="grid gap-3 sm:grid-cols-[1fr_180px_150px]">
          <label className="field">
            <span className="sr-only">Поиск</span>
            <span className="relative">
              <Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-muted" aria-hidden="true" />
              <input className="pl-10" onChange={(event) => setQuery(event.currentTarget.value)} placeholder="Поиск по документам" />
            </span>
          </label>
          <label className="field">
            <span className="sr-only">Категория</span>
            <select onChange={(event) => setCategory(event.currentTarget.value)} value={category}>
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="sr-only">Сортировка</span>
            <select onChange={(event) => setSort(event.currentTarget.value)} value={sort}>
              <option value="title">По названию</option>
              <option value="category">По категории</option>
            </select>
          </label>
        </div>
        <div className="grid gap-3">
          {filtered.map((doc) => (
            <article className="rounded-card border border-border p-4" key={doc.id}>
              <p className="eyebrow">{doc.category}</p>
              <h3 className="mt-1 text-xl font-black">{doc.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {doc.number} · {doc.date} · {doc.format} · {doc.size}
              </p>
              {doc.isDemo ? <p className="mt-2 text-sm text-warning">Демонстрационные данные.</p> : null}
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  className="button button-primary"
                  onClick={() => {
                    setActive(doc);
                    trackEvent("document_opened", { id: doc.id });
                  }}
                  type="button"
                >
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  Открыть
                </button>
                <a
                  className="button button-outline"
                  download
                  href={withBasePath(doc.href)}
                  onClick={() => trackEvent("document_downloaded", { id: doc.id })}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Скачать
                </a>
                <button
                  className="button button-outline"
                  onClick={async () => {
                    await navigator.clipboard.writeText(new URL(withBasePath(doc.href), window.location.origin).toString());
                    showToast("Ссылка скопирована.");
                  }}
                  type="button"
                >
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  Ссылка
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="card overflow-hidden">
        <div className="border-b border-border p-4">
          <p className="eyebrow">Просмотр PDF</p>
          <h2 className="text-2xl font-black">{active.title}</h2>
        </div>
        <iframe
          className="h-[640px] w-full bg-white"
          src={withBasePath(active.href)}
          title={`Документ ${active.title}`}
        />
      </div>
    </div>
  );
}
