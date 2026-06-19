"use client";

import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { findRequest, nextStatus, saveRequest } from "@/lib/requests";
import type { DemoRequest } from "@/types/site";

export function StatusLookup() {
  const [id, setId] = useState("");
  const [request, setRequest] = useState<DemoRequest | null>(null);
  const [notFound, setNotFound] = useState(false);

  function lookup() {
    const found = findRequest(id);
    setRequest(found ?? null);
    setNotFound(!found);
  }

  function advance() {
    if (!request) return;
    const updated = { ...request, status: nextStatus(request.status) };
    saveRequest(updated);
    setRequest(updated);
  }

  return (
    <div className="card grid gap-4 p-5 md:p-8">
      <div className="demo-note">Демонстрационный интерфейс статуса заявки.</div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          className="min-h-12 flex-1 rounded-card border border-border px-3"
          onChange={(event) => setId(event.currentTarget.value)}
          placeholder="GRT-DEMO-2026-0042"
          value={id}
        />
        <button className="button button-primary" onClick={lookup} type="button">
          <Search className="h-4 w-4" aria-hidden="true" />
          Проверить
        </button>
      </div>
      {notFound ? <p className="text-danger">Заявка не найдена в localStorage этого браузера.</p> : null}
      {request ? (
        <div className="rounded-card bg-accent-light p-5">
          <p className="eyebrow">{request.id}</p>
          <h2 className="mt-2 text-2xl font-black">{request.status}</h2>
          <p className="mt-2 text-muted">
            {request.type} · {new Date(request.createdAt).toLocaleString("ru-RU")}
          </p>
          <button className="button button-outline mt-4" onClick={advance} type="button">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            Перевести на следующий статус
          </button>
        </div>
      ) : null}
    </div>
  );
}
