# AI Profit Flow — лендинг

Сайт агентства AI Profit Flow.

## Домены

| Домен | Роль |
| --- | --- |
| **aiprofitflow.ru** | основной (canonical, GitHub Pages Custom domain + бесплатный SSL) |
| **аипотокприбыли.рф** | редирект на основной у Timeweb Cloud |
| **www.aiprofitflow.ru** | CNAME → GitHub Pages (редирект на apex) |

Punycode для кириллического домена: `xn--80acuabjjuaidmw6k.xn--p1ai`

### DNS для `aiprofitflow.ru` в Timeweb Cloud

Домены и SSL → `aiprofitflow.ru` → DNS.

Удалите конфликтующие A/AAAA/CNAME на `@` и `www`, затем добавьте:

**A** (имя `@` или пусто):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**AAAA** (имя `@`):
- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

**CNAME** `www` → `Ekaterina1-ai.github.io`

SSL для `aiprofitflow.ru` выдаёт GitHub Pages (Let's Encrypt) автоматически после проверки DNS. В настройках репозитория Pages включите **Enforce HTTPS**.

### DNS / редирект для `аипотокприбыли.рф`

GitHub Pages принимает **только один** custom domain. Второй домен настраивается как редирект:

1. Timeweb Cloud → Домены и SSL → `аипотокприбыли.рф`
2. Включите **URL-перенаправление / forwarding** на `https://aiprofitflow.ru`
3. Если есть опция HTTPS/SSL для редиректа — включите (бесплатный сертификат Timeweb или Let's Encrypt в панели)

Если редиректа нет — направьте A/AAAA так же на IP GitHub Pages, но каноническим в SEO оставьте `aiprofitflow.ru`.

## Деплой

```bash
npm install
npm run deploy
```

Это собирает сайт и публикует ветку `gh-pages` (её читает GitHub Pages). Пуш только в `main` сайт не обновляет.

## Локально

```bash
npm run start
```

Форма заявок (`/api/send-application`) на GitHub Pages без отдельного бэкенда не работает.
