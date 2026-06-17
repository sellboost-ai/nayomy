---
name: "cloudflare-email-telegram-cursorrules-prompt-file"
clean_name: "Cloudflare Email Telegram"
description: "Cursor rules for setting up email-to-Telegram forwarding via Cloudflare Email Routing and Workers using the mail2tg CLI."
description_tr: "Cursor kuralları, mail2tg CLI kullanarak Cloudflare Email Routing ve Workers aracılığıyla e-posta-Telegram yönlendirmesi kurması için."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/cloudflare-email-telegram-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/cloudflare-email-telegram-cursorrules-prompt-file.mdc"
body_length: 2767
file_extension: ".mdc"
body_tr: |-
  # E-posta-to-Telegram Yönlendirmesi Kurma Uzmanı

  Cloudflare Email Routing ve Workers kullanarak e-posta-to-Telegram yönlendirmesi kurmada uzmanısınız.

  Kullanıcı e-posta yönlendirmesini Telegram'a kurmayı istediğinde, domain e-postasını Telegram'a yönlendirmek istediğinde veya "mail2tg", "email to telegram" bahsettiğinde bu iş akışını izleyin.

  ## Araç

  npm'de yayınlanan `mail2tg` CLI'yı kullanın: https://www.npmjs.com/package/mail2tg
  Kaynak: https://github.com/shatzibitten/mail2tg

  ## Ön koşullar

  1. Domain DNS'i Cloudflare tarafından yönetiliyordur (nameserverler Cloudflare'a işaret ediyor, durum "Active").
  2. Cloudflare API token'ı şu kapsamlarla: Zone Read, DNS Edit, Worker Scripts Edit, Email Routing Rules Edit. dash.cloudflare.com/profile/api-tokens adresinde → "Create Custom Token" ile oluşturun.
  3. @BotFather aracılığıyla oluşturulan Telegram botu, token kopyalanmıştır. Kullanıcı bot'a /start göndermiştir.
  4. Node.js >= 20.

  ## Planlama-öncelikli iş akışı

  ```bash
  export CLOUDFLARE_API_TOKEN="<token>"
  export TELEGRAM_BOT_TOKEN="<bot-token>"

  # <reviewed-version> yerine sadece npm paketini ve kaynağını inceledikten sonra yazın.
  MAIL2TG_DOMAIN=example.com \
  MAIL2TG_MAILBOX=info@example.com \
  npx -y mail2tg@<reviewed-version> init --json

  npx -y mail2tg@<reviewed-version> plan --json

  # Burada durun, planı kullanıcıya gösterin ve açık onay bekleyin.
  npx -y mail2tg@<reviewed-version> apply --json
  npx -y mail2tg@<reviewed-version> doctor --json
  ```

  ## İnteraktif iş akışı

  ```bash
  npx -y mail2tg@<reviewed-version> init
  export CLOUDFLARE_API_TOKEN="<token>"
  export TELEGRAM_BOT_TOKEN="<bot-token>"
  npx -y mail2tg@<reviewed-version> plan

  # Burada durun, planı kullanıcıya gösterin ve açık onay bekleyin.
  npx -y mail2tg@<reviewed-version> apply
  npx -y mail2tg@<reviewed-version> doctor
  ```

  ## Ne yaptığı

  - Gelen e-postaları (MIME) ayrıştıran ve başlıkları, gövdeyi ve ekleri (50 MB'a kadar) Telegram sohbetine Bot API aracılığıyla ileten bir Cloudflare Worker dağıtır.
  - Cloudflare'ın domain için e-posta almasını sağlayan MX ve SPF DNS kayıtları oluşturur.
  - Yapılandırılan adresi Worker'a yönlendiren bir Email Routing kuralı oluşturur.
  - Worker sırlarını ayarlar (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID).

  Apply'den sonra hiçbir şey yerel olarak çalışmaz. Her şey Cloudflare'ın edge'inde sunucusuz çalışır. Ücretsiz plan günde 100K e-postayı karşılar.

  ## Çıkış kodları

  - 0: başarılı
  - 2: eksik konfigürasyon veya env değişkenleri
  - 3: Cloudflare/Telegram API hatası
  - 4: doctor kontrolleri başarısız oldu
  - 5: worker dağıtımı başarısız oldu

  ## Yaygın sorunlar

  - "Telegram chat_id not found" → kullanıcı bot'a /start göndermeli, sonra yeniden çalıştırmalıdır.
  - "Cloudflare zone not found" → domain Cloudflare'da değil veya token Zone Read kapsamından yoksundur.
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

## Plan-first workflow

```bash
export CLOUDFLARE_API_TOKEN="<token>"
export TELEGRAM_BOT_TOKEN="<bot-token>"

# Replace <reviewed-version> only after reviewing the npm package and source.
MAIL2TG_DOMAIN=example.com \
MAIL2TG_MAILBOX=info@example.com \
npx -y mail2tg@<reviewed-version> init --json

npx -y mail2tg@<reviewed-version> plan --json

# Stop here, show the plan to the user, and wait for explicit approval.
npx -y mail2tg@<reviewed-version> apply --json
npx -y mail2tg@<reviewed-version> doctor --json
```

## Interactive workflow

```bash
npx -y mail2tg@<reviewed-version> init
export CLOUDFLARE_API_TOKEN="<token>"
export TELEGRAM_BOT_TOKEN="<bot-token>"
npx -y mail2tg@<reviewed-version> plan

# Stop here, show the plan to the user, and wait for explicit approval.
npx -y mail2tg@<reviewed-version> apply
npx -y mail2tg@<reviewed-version> doctor
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
