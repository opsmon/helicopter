import type { DemoRequest, RequestStatus, RequestTransport } from "@/types/site";
import { readStorage, writeStorage } from "@/lib/storage";

export const REQUESTS_KEY = "granat.demo.requests";
export const DRAFT_KEY = "granat.demo.requestDraft";

export const requestStatuses: RequestStatus[] = [
  "Заявка получена",
  "Требуется уточнение деталей",
  "Выполняется расчет",
  "Предложение подготовлено",
  "Идет согласование",
  "Заявка завершена",
];

export function generateRequestId() {
  const year = new Date().getFullYear();
  const count = readStorage<DemoRequest[]>(REQUESTS_KEY, []).length + 1;
  return `GRT-DEMO-${year}-${String(count).padStart(4, "0")}`;
}

export function getRequests() {
  return readStorage<DemoRequest[]>(REQUESTS_KEY, []);
}

export function saveRequest(request: DemoRequest) {
  const list = getRequests();
  writeStorage(REQUESTS_KEY, [request, ...list.filter((item) => item.id !== request.id)]);
}

export function findRequest(id: string) {
  return getRequests().find((request) => request.id.toLowerCase() === id.trim().toLowerCase());
}

export function nextStatus(current: RequestStatus): RequestStatus {
  const index = requestStatuses.indexOf(current);
  return requestStatuses[Math.min(index + 1, requestStatuses.length - 1)];
}

export class DemoRequestTransport implements RequestTransport {
  async submit(data: Omit<DemoRequest, "id" | "createdAt" | "status">) {
    await new Promise((resolve) => window.setTimeout(resolve, 750));
    const request: DemoRequest = {
      ...data,
      id: generateRequestId(),
      createdAt: new Date().toISOString(),
      status: "Заявка получена",
    };
    saveRequest(request);
    return { ok: true, request };
  }
}
