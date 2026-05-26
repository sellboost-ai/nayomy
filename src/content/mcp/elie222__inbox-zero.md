---
name: "elie222/inbox-zero"
description: "An MCP server for Inbox Zero. Adds functionality on top of Gmail like finding out which emails you need to reply to or need to follow up on."
description_tr: "Inbox Zero için bir MCP sunucusu. Gmail üzerine eklenen işlevsellikle yanıtlamanız gereken veya takip etmeniz gereken e-postaları bulmanıza yardımcı olur."
category: "Communication"
repo: "elie222/inbox-zero"
stars: 10966
url: "https://github.com/elie222/inbox-zero"
body_length: 6105
license: "NOASSERTION"
language: "TypeScript"
homepage: "https://getinboxzero.com"
body_tr: |-
  [![](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/apps/web/app/opengraph-image.jpg)](https://www.getinboxzero.com)

  <p align="center">
    <a href="https://www.getinboxzero.com">
      <h1 align="center">Inbox Zero - 7/24 AI e-posta asistanınız</h1>
    </a>
    <p align="center">
      İnboxunuzu düzenler, yanıtları önceden hazırlar, takvimini yönetir ve ekleri organize eder. Inbox'unuzu hareket halindeyken yönetmek için Slack veya Telegram üzerinden sohbet edin. Fyxer'in açık kaynak alternatifi, ancak daha özelleştirilebilir ve güvenli.
      <br />
      <a href="https://www.getinboxzero.com">Website</a>
      ·
      <a href="https://www.getinboxzero.com/discord">Discord</a>
      ·
      <a href="https://github.com/elie222/inbox-zero/issues">Issues</a>
    </p>
  </p>

  <div align="center">

  ![Stars](https://img.shields.io/github/stars/elie222/inbox-zero?labelColor=black&style=for-the-badge&color=2563EB)
  ![Forks](https://img.shields.io/github/forks/elie222/inbox-zero?labelColor=black&style=for-the-badge&color=2563EB)

  <a href="https://trendshift.io/repositories/6400" target="_blank"></a>

  [![Vercel OSS Program](https://vercel.com/oss/program-badge.svg)](https://vercel.com/oss)

  </div>

  ## Misyon

  Inbox'ta daha az zaman harcamanıza yardımcı olmak, böylece gerçekten önemli olan şeylere odaklanabilirsiniz.

  ## Özellikler

  - **AI Kişisel Asistanı:** İnbox'unuzu düzenler ve yanıtları sizin ton ve stilinizde önceden hazırlar.
  - **E-posta için AI Kuralları:** AI'ınızın inbox'unuzu nasıl yönetmesi gerektiğini basit İngilizce ile açıklayın.
  - **Reply Zero:** Yanıt vermek gereken e-postaları ve yanıt bekleyenleri takip edin.
  - **Toplu Abonelik İptali:** Bir tıkla okumadığınız e-postaları abonelikten çıkartıp arşivleyin.
  - **Toplu Arşivleyici:** Eski e-postaları toplu arşivleyerek inbox'unuzu temizleyin.
  - **Soğuk E-posta Engelleyicisi:** Soğuk e-postaları otomatik olarak engelleyin.
  - **E-posta Analitikleri:** Etkinliğinizi ve eğilimleri zaman içinde takip edin.
  - **Toplantı Özeti:** Her toplantıdan önce e-posta ve takvimden bağlam çekerek kişiselleştirilmiş özetler alın.
  - **Akıllı Dosyalama:** E-posta eklerini otomatik olarak Google Drive veya OneDrive'a kaydedin.
  - **Slack & Telegram Entegrasyonu:** Zaten kullandığınız uygulamaları terk etmeden inbox'unuzu yönetmek için Slack veya Telegram'dan AI asistanınızla sohbet edin.


  Daha fazla bilgi için [dokümantasyonumuza](https://docs.getinboxzero.com) göz atın.

  ## Özellik Ekran Görüntüleri

  | ![AI Assistant](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/.github/screenshots/email-assistant.png) |        ![Reply Zero](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/.github/screenshots/reply-zero.png)        |
  | :------------------------------------------------------: | :-------------------------------------------------------------: |
  |                      _AI Asistanı_                      |                          _Reply Zero_                           |
  |  ![Gmail Client](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/.github/screenshots/email-client.png)   | ![Bulk Unsubscriber](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/.github/screenshots/bulk-unsubscriber.png) |
  |                      _Gmail istemcisi_                      |                       _Toplu Abonelik İptali_                       |

  ## Demo Video

  [![Inbox Zero demo](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/video-thumbnail.png)](http://www.youtube.com/watch?v=hfvKvTHBjG0)

  ## Yapıyla

  - [Next.js](https://nextjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Prisma](https://www.prisma.io/)
  - [Upstash](https://upstash.com/)
  - [Turborepo](https://turbo.build/)
  - [Popsy Illustrations](https://popsy.co/)

  ## Star Geçmişi

  [![Star History Chart](https://api.star-history.com/svg?repos=elie222/inbox-zero&type=Date)](https://www.star-history.com/#elie222/inbox-zero&Date)

  ## Özellik İstekleri

  Özellik isteği göndermek için bir [GitHub issue](https://github.com/elie222/inbox-zero/issues) açın veya [Discord](https://www.getinboxzero.com/discord) topluluğumuza katılın.

  ## Başlangıç

  Inbox Zero'nun barındırılan versiyonunu [getinboxzero.com](https://www.getinboxzero.com) adresinde sunuyoruz.

  ### Kendi Sunucunuzda Barındırma

  Inbox Zero'yu kendi sunucunuzda barındırmanın en hızlı yolu CLI ile:

  > **Ön Koşullar**: [Docker](https://docs.docker.com/engine/install/) ve [Node.js](https://nodejs.org/) v24+

  ```bash
  npx @inbox-zero/cli setup      # One-time setup wizard
  npx @inbox-zero/cli start      # Start containers
  ```

  http://localhost:3000 adresini açın

  Tam kendi sunucunuzda barındırma talimatları, üretim dağıtımı, OAuth kurulumu ve yapılandırma seçenekleri için **[Kendi Sunucunuzda Barındırma Dokümantasyonu](https://docs.getinboxzero.com/hosting/quick-start)** bölümüne bakın.

  ### Yerel Geliştirme

  > **Ön Koşullar**: [Docker](https://docs.docker.com/engine/install/), [Node.js](https://nodejs.org/) v24+ ve [pnpm](https://pnpm.io/) v10+

  ```bash
  git clone https://github.com/elie222/inbox-zero.git
  cd inbox-zero
  docker compose -f docker-compose.dev.yml up -d   # Postgres + Redis
  pnpm install
  npm run setup                                     # Interactive env setup
  cd apps/web && pnpm prisma migrate dev && cd ../..
  pnpm dev
  ```

  http://localhost:3000 adresini açın

  `pnpm install` sonrasında, yerel Google emülatörü kullanmak istiyorsanız, bunu şu komutla başlatın:

  ```bash
  docker compose -f docker-compose.dev.yml --profile google-emulator up -d
  ```

  Daha sonra `apps/web/.env` dosyasında şu ayarları yapın:

  ```bash
  GOOGLE_BASE_URL=http://localhost:4002
  GOOGLE_CLIENT_ID=emulate-google-client.apps.googleusercontent.com
  GOOGLE_CLIENT_SECRET=emulate-google-secret
  ```

  Yerel Microsoft emülatörü kullanmak istiyorsanız, bunu şu komutla başlatın:

  ```bash
  docker compose -f docker-compose.dev.yml --profile microsoft-emulator up -d
  ```

  Daha sonra `apps/web/.env` dosyasında şu ayarları yapın:

  ```bash
  MICROSOFT_BASE_URL=http://localhost:4003
  MICROSOFT_CLIENT_ID=emulate-microsoft-client-id
  MICROSOFT_CLIENT_SECRET=emulate-microsoft-secret
  ```

  DevContainer kurulumu dahil daha fazla ayrıntı için **[Katkı Rehberi](https://docs.getinboxzero.com/contributing)** bölümüne bakın.

  ## Katkı Sağlama

  [GitHub Issues](https://github.com/elie222/inbox-zero/issues) adresinde açık görevleri görüntüleyin ve üzerinde çalışılanları tartışmak için [Discord](https://www.getinboxzero.com/discord) topluluğumuza katılın.

  Docker image'leri `main` branch'e her push işleminde otomatik olarak oluşturulur ve commit SHA'sı ile etiketlenir (örneğin, `elie222/inbox-zero:abc1234`). `latest` etiketi her zaman en son main derlemesini işaret eder. Resmi sürümler sürüm etiketleri kullanır (örneğin, `v2.26.0`).
---

[![](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/apps/web/app/opengraph-image.jpg)](https://www.getinboxzero.com)

<p align="center">
  <a href="https://www.getinboxzero.com">
    <h1 align="center">Inbox Zero - your 24/7 AI email assistant</h1>
  </a>
  <p align="center">
    Organizes your inbox, pre-drafts replies, manages your calendar, and organizes attachments. Chat with it from Slack or Telegram to manage your inbox on the go. Open source alternative to Fyxer, but more customizable and secure.
    <br />
    <a href="https://www.getinboxzero.com">Website</a>
    ·
    <a href="https://www.getinboxzero.com/discord">Discord</a>
    ·
    <a href="https://github.com/elie222/inbox-zero/issues">Issues</a>
  </p>
</p>

<div align="center">

![Stars](https://img.shields.io/github/stars/elie222/inbox-zero?labelColor=black&style=for-the-badge&color=2563EB)
![Forks](https://img.shields.io/github/forks/elie222/inbox-zero?labelColor=black&style=for-the-badge&color=2563EB)

<a href="https://trendshift.io/repositories/6400" target="_blank"></a>

[![Vercel OSS Program](https://vercel.com/oss/program-badge.svg)](https://vercel.com/oss)

</div>

## Mission

To help you spend less time in your inbox, so you can focus on what matters most.

## Features

- **AI Personal Assistant:** Organizes your inbox and pre-drafts replies in your tone and style.
- **AI Rules for email:** Explain in plain English how your AI should handle your inbox.
- **Reply Zero:** Track emails to reply to and those awaiting responses.
- **Bulk Unsubscriber:** One-click unsubscribe and archive emails you never read.
- **Bulk Archiver:** Clean up your inbox by bulk archiving old emails.
- **Cold Email Blocker:** Auto‑block cold emails.
- **Email Analytics:** Track your activity and trends over time.
- **Meeting Briefs:** Get personalized briefings before every meeting, pulling context from your email and calendar.
- **Smart Filing:** Automatically save email attachments to Google Drive or OneDrive.
- **Slack & Telegram Integration:** Chat with your AI assistant from Slack or Telegram to manage your inbox without leaving the apps you already use.


Learn more in our [docs](https://docs.getinboxzero.com).

## Feature Screenshots

| ![AI Assistant](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/.github/screenshots/email-assistant.png) |        ![Reply Zero](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/.github/screenshots/reply-zero.png)        |
| :------------------------------------------------------: | :-------------------------------------------------------------: |
|                      _AI Assistant_                      |                          _Reply Zero_                           |
|  ![Gmail Client](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/.github/screenshots/email-client.png)   | ![Bulk Unsubscriber](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/.github/screenshots/bulk-unsubscriber.png) |
|                      _Gmail client_                      |                       _Bulk Unsubscriber_                       |

## Demo Video

[![Inbox Zero demo](https://raw.githubusercontent.com/elie222/inbox-zero/HEAD/video-thumbnail.png)](http://www.youtube.com/watch?v=hfvKvTHBjG0)

## Built with

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [Upstash](https://upstash.com/)
- [Turborepo](https://turbo.build/)
- [Popsy Illustrations](https://popsy.co/)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=elie222/inbox-zero&type=Date)](https://www.star-history.com/#elie222/inbox-zero&Date)

## Feature Requests

To request a feature open a [GitHub issue](https://github.com/elie222/inbox-zero/issues), or join our [Discord](https://www.getinboxzero.com/discord).

## Getting Started

We offer a hosted version of Inbox Zero at [getinboxzero.com](https://www.getinboxzero.com).

### Self-Hosting

The fastest way to self-host Inbox Zero is with the CLI:

> **Prerequisites**: [Docker](https://docs.docker.com/engine/install/) and [Node.js](https://nodejs.org/) v24+

```bash
npx @inbox-zero/cli setup      # One-time setup wizard
npx @inbox-zero/cli start      # Start containers
```

Open http://localhost:3000

For complete self-hosting instructions, production deployment, OAuth setup, and configuration options, see our **[Self-Hosting Docs](https://docs.getinboxzero.com/hosting/quick-start)**.

### Local Development

> **Prerequisites**: [Docker](https://docs.docker.com/engine/install/), [Node.js](https://nodejs.org/) v24+, and [pnpm](https://pnpm.io/) v10+

```bash
git clone https://github.com/elie222/inbox-zero.git
cd inbox-zero
docker compose -f docker-compose.dev.yml up -d   # Postgres + Redis
pnpm install
npm run setup                                     # Interactive env setup
cd apps/web && pnpm prisma migrate dev && cd ../..
pnpm dev
```

Open http://localhost:3000

After `pnpm install`, if you want to use the local Google emulator, start it with:

```bash
docker compose -f docker-compose.dev.yml --profile google-emulator up -d
```

Then point `apps/web/.env` at it with:

```bash
GOOGLE_BASE_URL=http://localhost:4002
GOOGLE_CLIENT_ID=emulate-google-client.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=emulate-google-secret
```

If you want to use the local Microsoft emulator, start it with:

```bash
docker compose -f docker-compose.dev.yml --profile microsoft-emulator up -d
```

Then point `apps/web/.env` at it with:

```bash
MICROSOFT_BASE_URL=http://localhost:4003
MICROSOFT_CLIENT_ID=emulate-microsoft-client-id
MICROSOFT_CLIENT_SECRET=emulate-microsoft-secret
```

See the **[Contributing Guide](https://docs.getinboxzero.com/contributing)** for more details including devcontainer setup.

## Contributing

View open tasks in [GitHub Issues](https://github.com/elie222/inbox-zero/issues) and join our [Discord](https://www.getinboxzero.com/discord) to discuss what's being worked on.

Docker images are automatically built on every push to `main` and tagged with the commit SHA (e.g., `elie222/inbox-zero:abc1234`). The `latest` tag always points to the most recent main build. Formal releases use version tags (e.g., `v2.26.0`).
