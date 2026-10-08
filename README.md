# AI Profit Flow — лендинг

**Единственная рабочая папка проекта:** `Desktop\AI-Profit-Flow`  
Репозиторий: https://github.com/Ekaterina1-ai/ai-profit-flow

| Ссылка | Когда открывается |
| --- | --- |
| https://ekaterina1-ai.github.io/ai-profit-flow/ | всегда (временная) |
| https://aiprofitflow.ru | после настройки DNS в Timeweb |
| https://аипотокприбыли.рф | редирект на aiprofitflow.ru |

## Как работать

```bash
npm install
npm run start      # локально
npm run deploy     # выложить на GitHub Pages
```

После правок: `git commit` → `git push` → **`npm run deploy`**.

Формы → Formspree (`https://formspree.io/f/xdeaervd`) → Telegram / почта.

## Домены в Timeweb Cloud

### 1) `aiprofitflow.ru` (основной)

Домены и SSL → DNS. Удалите старые записи `@` и `www`, добавьте:

**A** (`@`):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**AAAA** (`@`):
- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

**CNAME** `www` → `Ekaterina1-ai.github.io`

Подождите 10–60 минут. Затем GitHub → Settings → Pages → **Enforce HTTPS**.

### 2) `аипотокприбыли.рф`

В Timeweb: **URL-перенаправление** на `https://aiprofitflow.ru`  
(в GitHub Pages можно указать только один свой домен).

Punycode: `xn--80acuabjjuaidmw6k.xn--p1ai`
