import Image from "next/image";
import { mediaGallery } from "@/data/media";
import { withBasePath } from "@/lib/paths";

export function MediaGallery() {
  return (
    <section className="section bg-dark text-white">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-white/65">Визуальная подача</p>
            <h2 className="mt-3 text-4xl font-black">Больше вертолета, воздуха и рабочих сценариев</h2>
          </div>
          <p className="max-w-md text-white/65 leading-7">
            Кадры используются локально: шапка, карточки услуг, флот, базирование и авиационные работы не зависят от внешних ссылок.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-6">
          {mediaGallery.map((item, index) => (
            <figure
              className={`group relative overflow-hidden rounded-card border border-white/12 bg-white/5 ${
                index === 0 || index === 3 ? "md:col-span-3" : "md:col-span-2"
              }`}
              key={item.src}
            >
              <div className={index === 0 || index === 3 ? "relative aspect-[16/9]" : "relative aspect-[4/3]"}>
                <Image
                  alt={item.alt}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  fill
                  sizes={index === 0 || index === 3 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                  src={withBasePath(item.src)}
                />
              </div>
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-sm font-bold backdrop-blur">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
