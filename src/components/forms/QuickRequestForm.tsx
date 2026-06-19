"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DemoRequestTransport } from "@/lib/requests";

const schema = z.object({
  service: z.string(),
  from: z.string().min(2, "Укажите точку отправления"),
  to: z.string().optional(),
  date: z.string().min(1, "Укажите дату"),
  passengers: z.coerce.number().optional(),
  phone: z.string().min(10, "Укажите телефон"),
  extra: z.string().optional(),
});

type Values = z.infer<typeof schema>;

export function QuickRequestForm() {
  const [requestId, setRequestId] = useState("");
  const [service, setService] = useState("пассажирский перелет");
  const { register, handleSubmit, formState } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { service },
  });

  async function submit(values: Values) {
    const result = await new DemoRequestTransport().submit({
      type: values.service,
      customer: { name: "Быстрая заявка", phone: values.phone },
      details: values,
    });
    setRequestId(result.request.id);
  }

  return (
    <form className="card -mt-10 grid gap-4 p-5 shadow-soft md:grid-cols-6" onSubmit={handleSubmit(submit)}>
      <div className="field md:col-span-2">
        <label htmlFor="quick-service">Тип услуги</label>
        <select
          id="quick-service"
          {...register("service")}
          onChange={(event) => setService(event.currentTarget.value)}
        >
          <option>пассажирский перелет</option>
          <option>грузовая перевозка</option>
          <option>техническое обслуживание</option>
          <option>базирование</option>
        </select>
      </div>
      {service === "техническое обслуживание" ? (
        <div className="field md:col-span-2">
          <label htmlFor="quick-from">Модель вертолета</label>
          <input id="quick-from" {...register("from")} />
        </div>
      ) : (
        <div className="field md:col-span-2">
          <label htmlFor="quick-from">Откуда</label>
          <input id="quick-from" {...register("from")} />
        </div>
      )}
      <div className="field md:col-span-2">
        <label htmlFor="quick-to">{service === "базирование" ? "Период / услуги" : "Куда / детали"}</label>
        <input id="quick-to" {...register("to")} />
      </div>
      <div className="field">
        <label htmlFor="quick-date">Дата</label>
        <input id="quick-date" type="date" {...register("date")} />
      </div>
      <div className="field">
        <label htmlFor="quick-passengers">Пассажиры</label>
        <input id="quick-passengers" type="number" min={0} {...register("passengers")} />
      </div>
      <div className="field md:col-span-2">
        <label htmlFor="quick-phone">Телефон</label>
        <input id="quick-phone" inputMode="tel" {...register("phone")} />
      </div>
      <button className="button button-primary self-end md:col-span-2" type="submit">
        Получить расчет
      </button>
      <div className="md:col-span-6" aria-live="polite">
        {Object.values(formState.errors)[0]?.message ? (
          <span className="field-error">{Object.values(formState.errors)[0]?.message}</span>
        ) : null}
        {requestId ? (
          <p className="flex items-center gap-2 rounded-card bg-green-50 p-3 text-success">
            <Check className="h-5 w-5" aria-hidden="true" />
            Заявка сохранена в демонстрационном режиме: {requestId}
          </p>
        ) : null}
      </div>
    </form>
  );
}
