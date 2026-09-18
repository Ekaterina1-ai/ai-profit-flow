# AI Profit Flow — лендинг

Сайт агентства AI Profit Flow.

## Домены

| Домен | Роль |
| --- | --- |
| **aiprofitflow.ru** | основной (canonical, GitHub Pages Custom domain) |
| **аипоток.рф** | редирект на основной у регистратора DNS |

### DNS для `aiprofitflow.ru` (apex)

Добавьте у регистратора записи:

**A**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**AAAA**
- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

Опционально **CNAME** `www` → `Ekaterina1-ai.github.io`

### DNS для `аипоток.рф`

Настройте **URL-редирект / forwarding** на `https://aiprofitflow.ru` (чтобы не было дублей в SEO).  
Если регистратор умеет только A/CNAME — направьте так же на GitHub Pages, но в Яндекс/Google каноническим оставьте `aiprofitflow.ru`.

После DNS в Settings → Pages включите **Enforce HTTPS**.

## Локально

```bash
npm install
npm run build
npm run preview
```

Форма заявок (`/api/send-application`) на GitHub Pages не работает без отдельного бэкенда — для продакшена нужен сервер или serverless.
