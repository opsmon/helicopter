import Link from "next/link";

export const metadata = {
  title: "404",
};

export default function Static404Page() {
  return (
    <main className="bg-dark pb-20 pt-36 text-white">
      <div className="container">
        <p className="eyebrow text-white/65">404</p>
        <h1 className="mt-3 text-5xl font-black">Страница не найдена</h1>
        <p className="mt-4 max-w-xl text-white/70">Статический маршрут 404 для GitHub Pages.</p>
        <Link className="button button-primary mt-6" href="/services/">
          Перейти к услугам
        </Link>
      </div>
    </main>
  );
}
