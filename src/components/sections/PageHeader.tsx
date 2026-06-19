export function PageHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-dark pb-16 pt-32 text-white">
      <div className="container">
        <p className="eyebrow text-white/65">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">{text}</p>
      </div>
    </section>
  );
}
