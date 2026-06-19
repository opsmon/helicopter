# ГРАНАТ — демонстрационный сайт авиакомпании

Современный статический демо-сайт для презентации услуг авиакомпании «ГРАНАТ»: аренда вертолетов, пассажирские и грузовые перевозки, авиационные работы, техническое обслуживание, базирование, документы и заявки.

## Стек

Next.js App Router, TypeScript, React, Tailwind CSS, Lucide Icons, React Hook Form, Zod, Framer Motion-ready архитектура, ESLint, Prettier.

## Запуск

```bash
npm install
npm run dev
```

## Проверки и сборка

```bash
npm run lint
npm run typecheck
npm run build
```

`next.config.ts` настроен на `output: "export"`, поэтому после `npm run build` создается директория `out/`. Именно ее публикует GitHub Pages workflow.

## GitHub Pages

`GITHUB_PAGES_REPOSITORY` задает имя поддиректории для `basePath` и `assetPrefix` при сборке в GitHub Actions. Для пользовательского домена обычно оставляют `basePath` пустым и настраивают `public/CNAME`.

## Контент

Данные вынесены в `src/data/*`, короткие переводы — в `src/content/*`. Подтвержденные контакты взяты с текущего сайта 19.06.2026. Характеристики флота, маршруты и кейсы помечены как демонстрационные.

## Демо-ограничения

GitHub Pages не имеет backend. Формы валидируются на клиенте, имитируют отправку и сохраняют заявки в `localStorage`. Для production нужно подключить transport-адаптер к CRM, serverless API или собственному backend.
