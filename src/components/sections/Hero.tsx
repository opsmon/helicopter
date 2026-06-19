import Link from "next/link";
import Image from "next/image";
import { Phone, Send } from "lucide-react";
import { contacts } from "@/data/contacts";

export function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-dark text-white">
      <Image
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fill
        fetchPriority="high"
        priority
        sizes="100vw"
        src="/images/hero/helicopter-main.png"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/52 to-black/20" />
      <div className="container relative flex min-h-[86vh] items-center pb-24 pt-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-white/70">Авиакомпания ГРАНАТ</p>
          <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
            Вертолетные услуги для людей, бизнеса и сложных задач
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Организуем пассажирские и грузовые перелеты, выполняем авиационные работы, техническое обслуживание и базирование вертолетов.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button button-primary" href="/request/">
              <Send className="h-4 w-4" aria-hidden="true" />
              Рассчитать полет
            </Link>
            <Link className="button button-secondary" href="/services/">
              Смотреть услуги
            </Link>
            <a className="button button-secondary" href={`tel:${contacts.phoneHref}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Позвонить
            </a>
            <Link className="button button-secondary" href="/contacts/">
              Задать вопрос
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
