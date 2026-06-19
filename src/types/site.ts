export interface ServiceItem {
  id: string;
  title: string;
  href: string;
  image: string;
  summary: string;
  scenarios: string[];
  audience: string;
  aircraft: string;
  requiredData: string[];
  limits: string;
  accent?: boolean;
}

export interface Aircraft {
  id: string;
  name: string;
  image: string;
  description: string;
  passengers?: number;
  payload?: string;
  range?: string;
  cruiseSpeed?: string;
  purposes: string[];
  isDemoData: boolean;
}

export interface DocumentItem {
  id: string;
  title: string;
  category: string;
  number: string;
  date: string;
  format: string;
  size: string;
  href: string;
  isDemo: boolean;
}

export type RequestStatus =
  | "Заявка получена"
  | "Требуется уточнение деталей"
  | "Выполняется расчет"
  | "Предложение подготовлено"
  | "Идет согласование"
  | "Заявка завершена";

export interface DemoRequest {
  id: string;
  type: string;
  createdAt: string;
  status: RequestStatus;
  customer: {
    name: string;
    phone: string;
    email?: string;
    company?: string;
  };
  details: Record<string, string | number | boolean | undefined>;
  file?: {
    name: string;
    size: number;
    type: string;
  };
}

export interface RequestResult {
  ok: boolean;
  request: DemoRequest;
}

export interface RequestTransport {
  submit(data: Omit<DemoRequest, "id" | "createdAt" | "status">): Promise<RequestResult>;
}
