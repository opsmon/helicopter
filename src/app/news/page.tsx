import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Новости",
  description: "Демонстрационный раздел новостей.",
};

export default function NewsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Новости"
        title="Новости и обновления"
        text="В демо-разделе показан формат будущих публикаций без неподтвержденных событий и отзывов."
      />
      <section className="section">
        <div className="container grid-auto">
          {news.map((item) => (
            <article className="card p-5" key={item.slug}>
              <time className="eyebrow" dateTime={item.date}>{item.date}</time>
              <h2 className="mt-3 text-2xl font-black">{item.title}</h2>
              <p className="mt-3 text-muted leading-7">{item.excerpt}</p>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: item.title,
                    datePublished: item.date,
                  }),
                }}
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
