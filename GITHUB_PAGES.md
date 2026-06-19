# GitHub Pages

## Создание и деплой

1. Создать репозиторий.
2. Включить GitHub Pages через GitHub Actions.
3. Убедиться, что workflow `.github/workflows/deploy.yml` запускается на `main`.
4. В настройках Pages выбрать Source: GitHub Actions.

## basePath и assetPrefix

В GitHub Actions `GITHUB_ACTIONS=true`, поэтому `next.config.ts` включает:

```ts
basePath: "/helicopter"
assetPrefix: "/helicopter/"
```

Имя можно изменить переменной `GITHUB_PAGES_REPOSITORY`.

## Кастомный домен

1. Скопировать `public/CNAME.example` в `public/CNAME`.
2. Указать реальный домен.
3. Создать DNS-запись CNAME или A/AAAA по инструкции GitHub.
4. Включить HTTPS в Pages.
5. Для домена верхнего уровня обычно не нужен `basePath`.

## Ошибки 404

Для статического экспорта включен `trailingSlash`. Внутренние маршруты создаются как папки с `index.html`, что помогает при прямом открытии страниц.
