import Link from "next/link";
import Image from "next/image";
import { Phone, Send } from "lucide-react";
import { contacts } from "@/data/contacts";
import { heroFrames } from "@/data/media";

export function Hero() {
  return (
    <section className="hero-video relative min-h-[92vh] overflow-hidden bg-dark text-white">
      <div className="absolute inset-0" aria-hidden="true">
        {heroFrames.map((frame, index) => (
          <Image
            alt=""
            className={`hero-frame hero-frame-${index + 1} object-cover`}
            fill
            fetchPriority={index === 0 ? "high" : "auto"}
            key={frame.src}
            priority={index === 0}
            sizes="100vw"
            src={frame.src}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-dark/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/52 to-black/20" />
      <div className="container relative z-10 flex min-h-[92vh] items-center pb-32 pt-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-white/70">Авиакомпания ГРАНАТ · видео-шапка</p>
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
      <div className="container absolute inset-x-0 bottom-6 z-20 hidden lg:block">
        <div className="grid w-full grid-cols-5 gap-3">
          {heroFrames.map((frame, index) => (
            <div className="relative h-24 overflow-hidden rounded-card border border-white/20 bg-white/10" key={frame.src}>
              <Image
                alt={frame.alt}
                className="object-cover"
                fill
                sizes="20vw"
                src={frame.src}
              />
              <span className="absolute bottom-2 left-2 rounded-full bg-black/55 px-2 py-1 text-xs font-bold text-white backdrop-blur">
                {String(index + 1).padStart(2, "0")} · {frame.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
