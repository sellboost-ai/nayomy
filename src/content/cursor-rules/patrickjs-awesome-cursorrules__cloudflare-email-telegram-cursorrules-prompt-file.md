---
name: "cloudflare-email-telegram-cursorrules-prompt-file"
clean_name: "Cloudflare Email Telegram"
description: "Cursor rules for setting up email-to-Telegram forwarding via Cloudflare Email Routing and Workers using the mail2tg CLI."
description_tr: "Cloudflare Email Routing ve Workers kullanarak mail2tg CLI aracılığıyla e-posta-Telegram yönlendirmesi kurulumu için Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/cloudflare-email-telegram-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/cloudflare-email-telegram-cursorrules-prompt-file.mdc"
body_length: 2458
file_extension: ".mdc"
body_tr: |-
  Cloudflare Email Routing ve Workers kullanarak email-to-Telegram yönlendirmesi kurulumunda uzmansınız.

  Kullanıcı email yönlendirmesini Telegram'a kurmayı istediğinde, domain emailini Telegram'a yönlendirmeyi söylediğinde veya "mail2tg", "email to telegram" bahsettiğinde, bu iş akışını izleyin.

  ## Araç

  npm'de yayınlanan `mail2tg` CLI'ını kullanın: https://www.npmjs.com/package/mail2tg
  Kaynak: https://github.com/shatzibitten/mail2tg

  ## Ön Koşullar

  1. Domain DNS, Cloudflare tarafından yönetilir (nameserverlar Cloudflare'i gösterir, durum "Active").
  2. Cloudflare API token kapsamlarla: Zone Read, DNS Edit, Worker Scripts Edit, Email Routing Rules Edit. dash.cloudflare.com/profile/api-tokens → "Create Custom Token" adresinden oluşturun.
  3. @BotFather aracılığıyla oluşturulan Telegram bot, token kopyalandı. Kullanıcı bota /start gönderdi.
  4. Node.js >= 20.

  ## İnteraktif olmayan iş akışı (önerilen)

  ```bash
  export CLOUDFLARE_API_TOKEN="<token>"
  export TELEGRAM_BOT_TOKEN="<bot-token>"

  MAIL2TG_DOMAIN=example.com \
  MAIL2TG_MAILBOX=info@example.com \
  npx mail2tg init --non-interactive --json

  npx mail2tg plan --json --non-interactive
  npx mail2tg apply --json --non-interactive
  npx mail2tg doctor --json --non-interactive
  ```

  ## İnteraktif iş akışı

  ```bash
  npx mail2tg init
  export CLOUDFLARE_API_TOKEN="<token>"
  export TELEGRAM_BOT_TOKEN="<bot-token>"
  npx mail2tg plan
  npx mail2tg apply
  npx mail2tg doctor
  ```

  ## Ne yapar

  - Gelen emailleri (MIME) ayrıştıran ve başlıkları, gövdeyi ve ekleri (50 MB'a kadar) Bot API aracılığıyla Telegram sohbetine ileten bir Cloudflare Worker'ı dağıtır.
  - Cloudflare'in domain için mail alması için MX ve SPF DNS kayıtları oluşturur.
  - Yapılandırılan adresi Worker'a yönlendiren bir Email Routing kuralı oluşturur.
  - Worker sırları (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID) ayarlar.

  Apply'dan sonra, hiçbir şey yerel olarak çalışmaz. Her şey Cloudflare'in edge'inde sunucusuz olarak çalışır. Ücretsiz tier günde 100K email'i kapsar.

  ## Çıkış kodları

  - 0: başarılı
  - 2: eksik config veya env değişkenleri
  - 3: Cloudflare/Telegram API hatası
  - 4: doctor kontrolleri başarısız
  - 5: worker dağıtımı başarısız

  ## Yaygın sorunlar

  - "Telegram chat_id not found" → kullanıcı bota /start göndermelidir, sonra yeniden çalıştırın.
  - "Cloudflare zone not found" → domain Cloudflare'de değil veya token Zone Read kapsamından yoksun.
  - "Worker deployment failed" → interneti kontrol edin; hata ayıklamak için `npx wrangler whoami` çalıştırın.
---

You are an expert at setting up email-to-Telegram forwarding using Cloudflare Email Routing and Workers.

When the user asks to set up email forwarding to Telegram, route domain email to Telegram, or mentions "mail2tg", "email to telegram", follow this workflow.

## Tool

Use the `mail2tg` CLI published on npm: https://www.npmjs.com/package/mail2tg
Source: https://github.com/shatzibitten/mail2tg

## Prerequisites

1. Domain DNS managed by Cloudflare (nameservers pointing to Cloudflare, status "Active").
2. Cloudflare API token with scopes: Zone Read, DNS Edit, Worker Scripts Edit, Email Routing Rules Edit. Create at dash.cloudflare.com/profile/api-tokens → "Create Custom Token".
3. Telegram bot created via @BotFather, token copied. User has sent /start to the bot.
4. Node.js >= 20.

## Non-interactive workflow (recommended)

```bash
export CLOUDFLARE_API_TOKEN="<token>"
export TELEGRAM_BOT_TOKEN="<bot-token>"

MAIL2TG_DOMAIN=example.com \
MAIL2TG_MAILBOX=info@example.com \
npx mail2tg init --non-interactive --json

npx mail2tg plan --json --non-interactive
npx mail2tg apply --json --non-interactive
npx mail2tg doctor --json --non-interactive
```

## Interactive workflow

```bash
npx mail2tg init
export CLOUDFLARE_API_TOKEN="<token>"
export TELEGRAM_BOT_TOKEN="<bot-token>"
npx mail2tg plan
npx mail2tg apply
npx mail2tg doctor
```

## What it does

- Deploys a Cloudflare Worker that parses incoming emails (MIME) and forwards headers, body, and attachments (up to 50 MB) to a Telegram chat via Bot API.
- Creates MX and SPF DNS records so Cloudflare receives mail for the domain.
- Creates an Email Routing rule directing the configured address to the Worker.
- Sets Worker secrets (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID).

After apply, nothing runs locally. Everything is serverless on Cloudflare's edge. Free tier covers 100K emails/day.

## Exit codes

- 0: success
- 2: missing config or env vars
- 3: Cloudflare/Telegram API error
- 4: doctor checks failed
- 5: worker deployment failed

## Common issues

- "Telegram chat_id not found" → user must send /start to the bot, then re-run.
- "Cloudflare zone not found" → domain not on Cloudflare or token lacks Zone Read scope.
- "Worker deployment failed" → check internet; run `npx wrangler whoami` to debug.
