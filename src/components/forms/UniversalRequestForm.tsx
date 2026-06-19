"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Copy, Printer, RotateCcw, Send, Trash2, Upload } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/Toast";
import { contacts } from "@/data/contacts";
import { trackEvent } from "@/lib/analytics";
import { DemoRequestTransport, DRAFT_KEY } from "@/lib/requests";
import { readStorage, removeStorage, writeStorage } from "@/lib/storage";

const schema = z.object({
  type: z.string().min(1, "Выберите тип услуги"),
  name: z.string().min(2, "Укажите имя"),
  company: z.string().optional(),
  phone: z.string().min(10, "Укажите телефон"),
  email: z.string().email("Проверьте email").optional().or(z.literal("")),
  contactMethod: z.string().min(1),
  route: z.string().optional(),
  date: z.string().optional(),
  passengers: z.coerce.number().min(0).optional(),
  description: z.string().min(10, "Опишите задачу"),
  consent: z.literal(true, { errorMap: () => ({ message: "Нужно согласие на обработку данных" }) }),
  website: z.string().max(0, "Проверка не пройдена").optional(),
});

type FormValues = z.infer<typeof schema>;

const defaults: FormValues = {
  type: "пассажирский перелет",
  name: "",
  company: "",
  phone: "",
  email: "",
  contactMethod: "телефон",
  route: "",
  date: "",
  passengers: 0,
  description: "",
  consent: false as unknown as true,
  website: "",
};

export function UniversalRequestForm({ compact = false, presetType }: { compact?: boolean; presetType?: string }) {
  const { showToast } = useToast();
  const [submittedId, setSubmittedId] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileMeta, setFileMeta] = useState<{ name: string; size: number; type: string } | undefined>();
  const transport = useMemo(() => new DemoRequestTransport(), []);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { ...defaults, type: presetType ?? defaults.type },
  });

  useEffect(() => {
    const draft = readStorage<Partial<FormValues>>(DRAFT_KEY, {});
    reset({ ...defaults, ...draft, type: presetType ?? draft.type ?? defaults.type } as FormValues);
  }, [presetType, reset]);

  useEffect(() => {
    const subscription = watch((value) => writeStorage(DRAFT_KEY, value));
    return () => subscription.unsubscribe();
  }, [watch]);

  async function onSubmit(values: FormValues) {
    setLoading(true);
    trackEvent("request_started", { type: values.type });
    const result = await transport.submit({
      type: values.type,
      customer: {
        name: values.name,
        phone: values.phone,
        email: values.email || undefined,
        company: values.company || undefined,
      },
      details: {
        contactMethod: values.contactMethod,
        route: values.route,
        date: values.date,
        passengers: values.passengers,
        description: values.description,
      },
      file: fileMeta,
    });
    setLoading(false);
    setSubmittedId(result.request.id);
    removeStorage(DRAFT_KEY);
    trackEvent("request_submitted", { id: result.request.id, type: values.type });
    showToast("Заявка сохранена в демонстрационном режиме.");
  }

  return (
    <form className={`card grid gap-4 p-5 ${compact ? "" : "md:p-8"}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="demo-note">
        Это демонстрационная форма. Данные не передаются сотрудникам компании, а сохраняются в localStorage.
      </div>
      <div className="hidden">
        <label>
          Не заполнять
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="field">
          <label htmlFor="type">Тип услуги</label>
          <select id="type" {...register("type")}>
            {[
              "пассажирский перелет",
              "грузовая перевозка",
              "авиационные работы",
              "техническое обслуживание",
              "базирование",
              "консультация",
              "другое",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          {errors.type ? <span className="field-error">{errors.type.message}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="name">Имя</label>
          <input id="name" {...register("name")} autoComplete="name" />
          {errors.name ? <span className="field-error">{errors.name.message}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="company">Организация</label>
          <input id="company" {...register("company")} />
        </div>
        <div className="field">
          <label htmlFor="phone">Телефон</label>
          <input id="phone" {...register("phone")} inputMode="tel" placeholder="+7" autoComplete="tel" />
          {errors.phone ? <span className="field-error">{errors.phone.message}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} inputMode="email" autoComplete="email" />
          {errors.email ? <span className="field-error">{errors.email.message}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="contactMethod">Способ связи</label>
          <select id="contactMethod" {...register("contactMethod")}>
            <option>телефон</option>
            <option>email</option>
            <option>мессенджер</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="route">Маршрут</label>
          <input id="route" {...register("route")} placeholder="Откуда - куда" />
        </div>
        <div className="field">
          <label htmlFor="date">Дата</label>
          <input id="date" {...register("date")} type="date" />
        </div>
        <div className="field">
          <label htmlFor="passengers">Пассажиров</label>
          <input id="passengers" {...register("passengers")} min={0} type="number" />
        </div>
        <div className="field">
          <label htmlFor="file">Файл</label>
          <label className="button button-outline cursor-pointer">
            <Upload className="h-4 w-4" aria-hidden="true" />
            Выбрать файл
            <input
              className="sr-only"
              id="file"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={(event) => {
                const file = event.currentTarget.files?.[0];
                if (!file) return;
                if (file.size > 5 * 1024 * 1024) {
                  showToast("Файл больше 5 MB.");
                  return;
                }
                setFileMeta({ name: file.name, size: file.size, type: file.type || "unknown" });
              }}
            />
          </label>
          {fileMeta ? (
            <div className="flex items-center justify-between gap-3 rounded-card bg-accent-light p-2 text-sm">
              <span>{fileMeta.name}</span>
              <button className="button button-outline min-h-9 px-2" onClick={() => setFileMeta(undefined)} type="button">
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                Удалить
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="field">
        <label htmlFor="description">Описание задачи</label>
        <textarea id="description" {...register("description")} />
        {errors.description ? <span className="field-error">{errors.description.message}</span> : null}
      </div>
      <label className="flex items-start gap-3 text-sm text-muted">
        <input className="mt-1" type="checkbox" {...register("consent")} />
        Согласен на обработку персональных данных в демо-режиме.
      </label>
      {errors.consent ? <span className="field-error">{errors.consent.message}</span> : null}
      <div className="flex flex-wrap gap-3">
        <button className="button button-primary" disabled={loading} type="submit">
          <Send className="h-4 w-4" aria-hidden="true" />
          {loading ? "Сохраняем..." : "Отправить заявку"}
        </button>
        <button
          className="button button-outline"
          type="button"
          onClick={() => {
            reset(defaults);
            removeStorage(DRAFT_KEY);
            showToast("Черновик очищен.");
          }}
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Очистить
        </button>
        <a className="button button-outline" href={`tel:${contacts.phoneHref}`}>
          Позвонить
        </a>
      </div>
      {submittedId ? (
        <div className="rounded-card border border-success/30 bg-green-50 p-4" aria-live="polite">
          <div className="mb-2 flex items-center gap-2 font-bold text-success">
            <Check className="h-5 w-5" aria-hidden="true" />
            Заявка сохранена: {submittedId}
          </div>
          <p className="mb-3 text-sm text-muted">
            В production-версии она будет передаваться менеджеру или в CRM.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              className="button button-outline"
              onClick={() => {
                navigator.clipboard.writeText(submittedId);
                showToast("Номер заявки скопирован.");
              }}
              type="button"
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
              Скопировать номер
            </button>
            <button className="button button-outline" onClick={() => window.print()} type="button">
              <Printer className="h-4 w-4" aria-hidden="true" />
              Печать
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
}
