---
name: "aymericzip/intlayer"
description: "A MCP Server that enhance your IDE with AI-powered assistance for Intlayer i18n / CMS tool: smart CLI access, access to the docs."
category: "Command Line"
repo: "aymericzip/intlayer"
stars: 744
url: "https://github.com/aymericzip/intlayer"
body_length: 29507
license: "Apache-2.0"
language: "TypeScript"
homepage: "https://intlayer.org"
body_tr: |-
  <p align="center">
    <a href="https://intlayer.org" rel="">
      
    </a>
  </p>

  <h1 align="center">
    <strong>Bileşen başına i18n</strong>
  </h1>

  <h2 align="center">
    <strong>AI destekli çeviri. Görsel Editör. Çok dilli CMS.</strong>
  </h2>

  <br />

  <p align="center">
    <a href="https://intlayer.org/doc/concept/content" rel="">Dokümanlar</a> •
    <a href="https://intlayer.org/doc/environment/nextjs" rel="">Next.js</a> •
    <a href="https://intlayer.org/doc/environment/vite-and-react" rel="">React + Vite</a> •
    <a href="https://intlayer.org/doc/concept/cms" rel="">CMS</a> •
    <a href="https://discord.gg/7uxamYVeCk" rel="noopener noreferrer nofollow">Discord</a>
  </p>
  <p align="center" style="margin-top:15px;">
    <a href="https://www.npmjs.com/package/intlayer" target="_blank" rel="noopener noreferrer nofollow"></a>
    <a href="https://github.com/aymericzip/intlayer/stargazers" target="_blank" rel="noopener noreferrer nofollow"></a>
    <a href="https://www.npmjs.org/package/intlayer" target="_blank" rel="noopener noreferrer nofollow"></a>
    <a href="https://github.com/aymericzip/intlayer/blob/main/LICENSE" target="_blank" rel="noopener noreferrer nofollow"></a>
    <a href="https://github.com/aymericzip/intlayer/commits/main" target="_blank" rel="noopener noreferrer nofollow">
    </a>
  </p>

  ![Watch the video](https://github.com/aymericzip/intlayer/blob/main/docs/assets/demo_video.gif)

  <a href="https://intlayer.org/doc/concept/content" rel="">
    
  </a>

  ## Intlayer nedir?

  Çoğu i18n kütüphanesi ya çok karmaşık, ya çok katı veya modern framework'ler için tasarlanmamıştır.

  Intlayer, web ve mobil uygulamalar için **modern i18n çözümüdür**.  
  Framework'ten bağımsız, **AI destekli** ve ücretsiz **CMS & görsel editör** içerir.

  **Yerel başına içerik dosyaları**, **TypeScript otomatik tamamlama**, **tree-shakable sözlükler** ve **CI/CD entegrasyonu** ile Intlayer uluslararasılaştırmayı **daha hızlı, daha temiz ve daha akıllı** hale getirir.

  ## Intlayer'ın temel faydaları:

  | Özellik                                                                                                                                             | Açıklama                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  |                           | **Çapraz Framework Desteği**<br><br>Intlayer, Next.js, React, Vite, Vue.js, Nuxt, Preact, Express ve daha fazlası dahil olmak üzere tüm ana framework'ler ve kütüphanelerle uyumludur.                                                                                                                                                                                                                                                                                                |
  |        | **JavaScript Destekli İçerik Yönetimi**<br><br>JavaScript'in esnekliğinden yararlanarak içeriğinizi verimli bir şekilde tanımlayın ve yönetin. <br><br> - [İçerik bildirimi](https://intlayer.org/doc/concept/content)                                                                                                                                                                                                                                                            |
  |  | **Yerel Başına İçerik Bildirimi Dosyası**<br><br>Otomatik oluşturulmadan önce içeriğinizi bir kez bildirerek geliştirmeyi hızlandırın.<br><br> - [Yerel Başına İçerik Bildirimi Dosyası](https://intlayer.org/doc/concept/per-locale-file)                                                                                                                                                                                                                                          |
  |                             | **Derleyici**<br><br>Intlayer Derleyicisi, içeriği bileşenlerden otomatik olarak çıkarır ve sözlük dosyaları oluşturur.<br><br> - [Derleyici](https://intlayer.org/doc/compiler)                                                                                                                                                                                                                                                                                  |
  |                       | **Tür-Güvenli Ortam**<br><br>TypeScript'den yararlanarak içerik tanımlamalarınızın ve kodunuzun hatasız olmasını sağlayın ve IDE otomatik tamamlamasından da yararlanın.<br><br> - [TypeScript konfigürasyonu](https://intlayer.org/doc/environment/vite-and-react#configure-typescript)                                                                                                                                                                                              |
  |                          | **Basitleştirilmiş Kurulum**<br><br>Minimal konfigürasyonla hızlıca başlayın. Uluslararasılaştırma, yönlendirme, AI, derleme ve içerik işleme ayarlarını kolaylıkla yapılandırın. <br><br> - [Next.js entegrasyonunu keşfedin](https://intlayer.org/doc/environment/nextjs)                                                                                                                                                                                                      |
  |                    | **Basitleştirilmiş İçerik Alımı**<br><br>`t` fonksiyonunuzu her içerik parçası için çağırmaya gerek yok. Tüm içeriğinizi doğrudan tek bir hook kullanarak alın.<br><br> - [React entegrasyonu](https://intlayer.org/doc/environment/create-react-app)                                                                                                                                                                                                                           |
  |                     | **Tutarlı Server Bileşen Uygulaması**<br><br>Next.js server bileşenleri için mükemmel şekilde uygun, hem client hem de server bileşenleri için aynı uygulamayı kullanın, `t` fonksiyonunuzu her server bileşenine aktarmaya gerek yok. <br><br> - [Server Bileşenleri](https://intlayer.org/doc/environment/nextjs#step-7-utilize-content-in-your-code)                                                                                                                    |
  |                            | **Organize Edilmiş Kod Tabanı**<br><br>Kod tabanınızı daha organize tutun: 1 bileşen = 1 sözlük aynı klasörde. Çeviriler ilgili bileşenlerin yakınında, bakım kolaylığı ve netliği artırır. <br><br> - [Intlayer nasıl çalışır](https://intlayer.org/doc/concept/how-works-intlayer)                                                                                                                                                                                |
  |                          | **Geliştirilmiş Yönlendirme**<br><br>App yönlendirmesinin tam desteği, Next.js, React, Vite, Vue.js vb. karmaşık uygulama yapılarına sorunsuzca uyum sağlar.<br><br> - [Next.js entegrasyonunu keşfedin](https://intlayer.org/doc/environment/nextjs)                                                                                                                                                                                                                                 |
  |                             | **Markdown Desteği**<br><br>Çok dilli içerik gibi gizlilik politikaları, dokümantasyon vb. için yerel dosyalar ve uzak Markdown dosyalarını içe aktarın ve yorumlayın. Markdown metadata'sını kodunuzda erişilebilir yapın.<br><br> - [İçerik dosyaları](https://intlayer.org/doc/concept/content/file)                                                                                                                                                                               |
  |                        | **Ücretsiz Görsel Editör & CMS**<br><br>İçerik yazarları için ücretsiz bir görsel editör ve CMS mevcuttur, yerelleştirme platformu ihtiyacını ortadan kaldırır. Git kullanarak içeriğinizi senkronize tutun veya CMS ile tamamen veya kısmen dış kaynaklı hale getirin.<br><br> - [Intlayer Editörü](https://intlayer.org/doc/concept/editor) <br> - [Intlayer CMS](https://intlayer.org/doc/concept/cms)                                                                                          |
  |                               | **Tree-Shakable İçerik**<br><br>Tree-shakable içerik, son paket boyutunu azaltır. Bileşen başına içerik yükler, kullanılmayan herhangi bir içeriği paketinizden hariç tutar. Tembel yüklemeyi destekler ve uygulama yükleme verimliliğini artırır. <br><br> - [Uygulama derleme optimizasyonu](https://intlayer.org/doc/concept/how-works-intlayer#app-build-optimization)                                                                                                                         |
  |                     | **Statik Rendering**<br><br>Statik Rendering'i engellemez. <br><br> - [Next.js entegrasyonu](https://intlayer.org/doc/environment/nextjs)                                                                                                                                                                                                                                                                                                                                   |
  |                       | **AI Destekli Çeviri**<br><br>Intlayer'ın gelişmiş AI destekli çeviri araçlarını kullanarak kendi AI sağlayıcınız / API anahtarınız ile web sitenizi tek tıklama ile 231 dile dönüştürün. <br><br> - [CI/CD entegrasyonu](https://intlayer.org/doc/concept/ci-cd) <br> - [Intlayer CLI](https://intlayer.org/doc/concept/cli) <br> - [Otomatik doldurma](https://intlayer.org/doc/concept/auto-fill)                                                                              |
  |                                  | **MCP Server Entegrasyonu**<br><br>IDE otomasyonu için bir MCP (Model Context Protocol) sunucusu sağlar, geliştirme ortamınızda doğrudan sorunsuz içerik yönetimi ve i18n iş akışlarını etkinleştirir. <br><br> - [MCP Server](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/mcp_server.md)                                                                                                                                                            |
  |                     | **VSCode Uzantısı**<br><br>Intlayer, içeriğinizi ve çevirilerinizi yönetmenize, sözlüklerinizi oluşturmanıza, içeriğinizi çevirmenize ve daha fazlasını yapmanıza yardımcı olmak için bir VSCode uzantısı sağlar. <br><br> - [VSCode Uzantısı](https://intlayer.org/doc/vs-code-extension)                                                                                                                                                                                                                |
  |                     | **Birlikte Çalışabilirlik**<br><br>react-i18next, next-i18next, next-intl, react-intl, vue-i18n ile birlikte çalışabilirlik sağlar. <br><br> - [Intlayer ve react-intl](https://intlayer.org/blog/intlayer-with-react-intl) <br> - [Intlayer ve next-intl](https://intlayer.org/blog/intlayer-with-next-intl) <br> - [Intlayer ve next-i18next](https://intlayer.org/blog/intlayer-with-next-i18next) <br> - [Intlayer ve vue-i18n](https://intlayer.org/blog/intlayer-with-vue-i18n) |
  |                            | **Performans & Ölçünleme**<br><br>Performansı artırmak ve çözümü olabildiğince hafif tutmak için gelişmiş tree-shaking ve dinamik yükleme kullanır. <br><br> - [Performans & Ölçünleme](https://intlayer.org/doc/benchmark)                                                                                                                                                                                                                                              |

  ---

  ## 📦 Kurulum

  Intlayer ile yolculuğunuza bugün başlayın ve uluslararasılaştırma için daha sorunsuz, daha güçlü bir yaklaşım deneyimleyin.

  <a href="https://intlayer.org/doc/concept/content" rel="">
    
  </a>

  ```bash
  npm install intlayer react-intlayer
  ```

  ⚡ Hızlı Başlangıç (Next.js)

  ```ts
  // intlayer.config.ts
  import { Locales, type IntlayerConfig } from "intlayer";

  const config: IntlayerConfig = {
    internationalization: {
      locales: [Locales.ENGLISH, Locales.FRENCH, Locales.SPANISH],
      defaultLocale: Locales.ENGLISH,
    },
  };

  export default config;
  ```

  ```ts
  // app/home.content.ts
  import { t, type Dictionary } from "intlayer";

  const content = {
    key: "home",
    content: {
      title: t({
        en: "Home",
        fr: "Accueil",
        es: "Inicio",
      }),
    },
  } satisfies Dictionary;

  export default content;
  ```

  ```tsx
  // app/page.tsx
  import { useIntlayer } from "react-intlayer";

  const HomePage = () => {
    const { title } = useIntlayer("home");

    return <h1>{title}</h1>;
  };
  ```

  <a href="https://intlayer.org/doc/environment/nextjs"> Tam kılavuzu alın → </a>

  ## 🎥 YouTube'da canlı öğretici

  [![How to Internationalize your application using Intlayer](https://i.ytimg.com/vi/e_PPG7PTqGU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtyJ4uYotEjl12nZ_gZKZ_kjEgOQ)](https://youtu.be/e_PPG7PTqGU?si=GyU_KpVhr61razRw)

  <a href="https://intlayer.org/doc/concept/content" rel="">
    
  </a>

  ## İçindekiler

  Intlayer ile başlamak ve projelerinize entegre etmeyi öğrenmek için kapsamlı dokümantasyonumuzu keşfedin.

  <details open>
  <summary style="font-size:16px; font-weight:bold;">📘 Başlangıç</summary>
  <ul>
    <li><a href="https://intlayer.org/doc/why" rel=''>Neden Intlayer?</a></li>
    <li><a href="https://intlayer.org/doc" rel=''>Giriş</a></li>
  </ul>
  </details>

  <details>
  <summary style="font-size:16px; font-weight:bold;">⚙️ Konsept</summary>
  <ul>
    <li><a href="https://intlayer.org/doc/concept/how-works-intlayer" rel=''>Intlayer Nasıl Çalışır</a></li>
    <li><a href="https://intlayer.org/doc/concept/configuration" rel=''>Konfigürasyon</a></li>
    <li><a href="https://intlayer.org/doc/concept/cli" rel=''>Intlayer CLI</a></li>
    <li><a href="https://intlayer.org/doc/compiler" rel=''>Derleyici</a></li>

    <li><a href="https://intlayer.org/doc/concept/editor" rel=''>Intlayer Editörü</a></li>
    <li><a href="https://intlayer.org/doc/concept/cms" rel=''>Intlayer CMS</a></li>
    <li><a href="https://intlayer.org/doc/concept/content" rel=''>Sözlük</a>
      <ul>
        <li><a href="https://intlayer.org/doc/concept/content/per-locale-file" rel=''>Yerel Başına İçerik Bildirimi Dosyası</a></li>
        <li><a href="https://intlayer.org/doc/concept/content/translation" rel=''>Çeviri</a></li>
        <li><a href="https://intlayer.org/doc/concept/content/enumeration" rel=''>Numaralandırma</a></li>
        <li><a href="https://intlayer.org/doc/concept/content/condition" rel=''>Koşul</a></li>
        <li><a href="https://intlayer.org/doc/concept/content/nesting" rel=''>İç içe Geçme</a></li>
        <li><a href="https://intlayer.org/doc/concept/content/markdown" rel=''>Markdown</a></li>
        <li><a href="https://intlayer.org/doc/concept/content/function-fetching" rel=''>Function Fetching</a></li>
        <li><a href="https://intlayer.org/doc/concept/content/insertion" rel=''>Ekleme</a></li>
        <li><a href="https://intlayer.org/doc/concept/content/file" rel=''>Dosya</a></li>
      </ul>
    </li>
  </ul>
  </details>

  <details open>
  <summary style="font-size:16px; font-weight:bold;">🌐 Ortam</summary>
  <ul>
    <li><a href="https://intlayer.org/doc/environment/nextjs" rel=''>Intlayer with Next.js 16</a>
      <ul>
        <li><a href="https://intlayer.org/doc/environment/nextjs/15" rel=''>Next.js 15</a></li>
        <li><a href="https://intlayer.org/doc/environment/nextjs/14" rel=''>Next.js 14 (App Router)</a></li>
        <li><a href="https://intlayer.org/doc/environment/nextjs/next-with-Page-Router" rel=''>Next.js Page Router</a></li>
        <li><a href="https://intlayer.org/doc/environment/nextjs/compiler" rel=''>Next.js using Compiler</a></li>
      </ul>
    </li>
    <li><a href="https://intlayer.org/doc/environment/create-react-app" rel=''>React CRA</a></li>
    <li><a href="https://intlayer.org/doc/environment/vite-and-react" rel=''>Vite + React</a></li>
    <li><a href="https://intlayer.org/doc/environment/vite-and-react" rel=''>Vite + React using Compiler</a></li>
    <li><a href="https://intlayer.org/doc/environment/vite-and-react/compiler" rel=''>React-router-v7</a></li>
    <li><a href="https://intlayer.org/doc/environment/tanstack-start" rel=''>Tanstack start</a>
      <ul>
        <li><a href="https://intlayer.org/doc/environment/tanstack-start/solid" rel=''>Solid</a></li>
      </ul>
    </li>
    <li><a href="https://intlayer.org/doc/environment/astro" rel=''>Astro</a>
      <ul>
        <li><a href="https://intlayer.org/doc/environment/astro/react" rel=''>React</a></li>
        <li><a href="https://intlayer.org/doc/environment/astro/vue" rel=''>Vue</a></li>
        <li><a href="https://intlayer.org/doc/environment/astro/svelte" rel=''>Svelte</a></li>
        <li><a href="https://intlayer.org/doc/environment/astro/solid" rel=''>Solid</a></li>
        <li><a href="https://intlayer.org/doc/environment/astro/vanilla" rel=''>Vanilla JS</a></li>
        <li><a href="https://intlayer.org/doc/environment/astro/lit" rel=''>Lit</a></li>
      </ul>
    </li>

    <li><a href="https://intlayer.org/doc/environment/react-native-and-expo" rel=''>React Native</a></li>
    <li><a href="https://intlayer.org/doc/environment/vite-and-svelte" rel=''>Vite + Svelte</a></li>
    <li><a href="https://intlayer.org/doc/environment/sveltekit" rel=''>SvelteKit</a></li>
    <li><a href="https://intlayer.org/doc/environment/vite-and-preact" rel=''>Vite + Preact</a></li>
    <li><a href="https://intlayer.org/doc/environment/vite-and-vue" rel=''>Vite + Vue</a></li>
    <li><a href="https://intlayer.org/doc/environment/vite-and-nuxt" rel=''>Vite + Nuxt</a></li>
    <li><a href="https://intlayer.org/doc/environment/vite-and-solid" rel=''>Vite + Solid</a></li>
    <li><a href="https://intlayer.org/doc/environment/angular" rel=''>Angular</a></li>
    <li>
       <a href="https://intlayer.org/doc/environment/express" rel=''>Backend</a>
       <ul>
        <li><a href="https://intlayer.org/doc/environment/express" rel=''>Express</a></li>
        <li><a href="https://intlayer.org/doc/environment/nest" rel=''>NestJS</a></li>
        <li><a href="https://intlayer.org/doc/environment/fastify" rel=''>Fastify</a></li>
        <li><a href="https://intlayer.org/doc/environment/adonisjs" rel=''>AdonisJS</a></li>
        <li><a href="https://intlayer.org/doc/environment/hono" rel=''>Hono</a></li>
      </ul>
    </li>
  </ul>
  </details>

  <details>
  <summary style="font-size:16px; font-weight:bold;">📊 Ölçünleme</summary>
  <ul>
    <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/nextjs.md" rel=''>Next.js</a></li>
    <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/tanstack.md" rel=''>TanStack Start</a></li>
    <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/vue.md" rel=''>Vue</a></li>
    <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/solid.md" rel=''>Solid</a></li>
    <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/svelte.md" rel=''>Svelte</a></li>
  </ul>
  </details>

  <details>
  <summary style="font-size:16px; font-weight:bold;">📰 Blog</summary>
  <ul>
    <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/blog/en/what_is_internationalization.md" rel=''>i18n nedir</a></li>
    <li><a href="https://intlayer.org/blog/SEO-and-i18n" rel=''>i18n ve SEO</a></li>
    <li><a href="https://intlayer.org/blog/intlayer-with-next-i18next" rel=''>Intlayer ve i18next</a></li>
    <li><a href="https://intlayer.org/blog/intlayer-with-react-i18next" rel=''>Intlayer ve react-intl</a></li>
    <li><a href="https://intlayer.org/blog/intlayer-with-next-intl" rel=''>Intlayer ve next-intl</a></li>
  </ul>
  </details>

  ## Çok dilli içerik yönetim sistemi

  Sadece i18n kütüphanesi değil, Intlayer tam bir **çok dilli içerik yönetim sistemi**dır. Ücretsiz tam bir CMS [app.intlayer.org](https://app.intlayer.org) adresinde mevcuttur.

  Intlayer, **geliştiricileri**, **içerik yazarlarını** ve **AI ajanlarını** çok dilli web siteleri zahmetsizce oluşturmak ve bakımını yapmak için tek bir iş akışında birleştirir. Intlayer aşağıdaki yığını tek bir çözümle değiştirir:

  - i18n çözümleri (ör. `i18next`, `next-intl`, `vue-i18n`)
  - TMS'ler (Translation Management Systems) (ör. Crowdin, Phrase, Lokalise)
  - Özellik bayrakları
  - Headless CMS'ler (ör. Contentful, Strapi, Sanity)

  ![CMS Preview](https://github.com/aymericzip/intlayer/blob/main/docs/assets/CMS.png?raw=true)

  ## 🌐 Diğer dillerde Readme

  <p align="center">
    <a href="https://github.com/aymericzip/intlayer/blob/main/readme.md">English</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/zh/readme.md">简体中文</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/ru/readme.md">Русский</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/ja/readme.md">日本語</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/fr/readme.md">Français</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/ko/readme.md">한국어</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/es/readme.md">Español</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/de/readme.md">Deutsch</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/ar/readme.md">العربية</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/it/readme.md">Italiano</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en-GB/readme.md">English (UK)</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/pt/readme.md">Português</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/hi/readme.md">हिन्दी</a> •
    <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/tr/readme.md">Türkçe</a>
  </p>

  ## 🤝 Topluluk

  Intlayer topluluğun tarafından ve için inşa edilmiş ve sizin görüşünüzü merak ediyoruz!

  - Bir öneriniz mi var? [Bir issue açın](https://github.com/aymericzip/intlayer/issues)
  - Bir hata mı buldunuz veya iyileştirme mi? [Bir PR gönderin](https://github.com/aymericzip/intlayer/pulls)
  - Yardıma mı ihtiyacınız var veya bağlantı kurmak mı istiyorsunuz? [Discord'umuza katılın](https://discord.gg/7uxamYVeCk)

  Bizi şu yerlerden de takip edebilirsiniz:

    <div>
      <br/>
      <p align="center">
        <a href="https://discord.gg/528mBV4N" target="blank" rel='noopener noreferrer nofollow'></a>
        <a href="https://www.linkedin.com/company/intlayerorg" target="blank" rel='noopener noreferrer nofol
---

<p align="center">
  <a href="https://intlayer.org" rel="">
    
  </a>
</p>

<h1 align="center">
  <strong>Per-component i18n</strong>
</h1>

<h2 align="center">
  <strong>AI-powered translation. Visual Editor. Multilingual CMS.</strong>
</h2>

<br />

<p align="center">
  <a href="https://intlayer.org/doc/concept/content" rel="">Docs</a> •
  <a href="https://intlayer.org/doc/environment/nextjs" rel="">Next.js</a> •
  <a href="https://intlayer.org/doc/environment/vite-and-react" rel="">React + Vite</a> •
  <a href="https://intlayer.org/doc/concept/cms" rel="">CMS</a> •
  <a href="https://discord.gg/7uxamYVeCk" rel="noopener noreferrer nofollow">Discord</a>
</p>
<p align="center" style="margin-top:15px;">
  <a href="https://www.npmjs.com/package/intlayer" target="_blank" rel="noopener noreferrer nofollow"></a>
  <a href="https://github.com/aymericzip/intlayer/stargazers" target="_blank" rel="noopener noreferrer nofollow"></a>
  <a href="https://www.npmjs.org/package/intlayer" target="_blank" rel="noopener noreferrer nofollow"></a>
  <a href="https://github.com/aymericzip/intlayer/blob/main/LICENSE" target="_blank" rel="noopener noreferrer nofollow"></a>
  <a href="https://github.com/aymericzip/intlayer/commits/main" target="_blank" rel="noopener noreferrer nofollow">
  </a>
</p>

![Watch the video](https://github.com/aymericzip/intlayer/blob/main/docs/assets/demo_video.gif)

<a href="https://intlayer.org/doc/concept/content" rel="">
  
</a>

## What is Intlayer?

Most i18n libraries are either too complex, too rigid, or not built for modern frameworks.

Intlayer is a **modern i18n solution** for web and mobile apps.  
It’s framework-agnostic, **AI-powered**, and includes a free **CMS & visual editor**.

With **per-locale content files**, **TypeScript autocompletion**, **tree-shakable dictionaries**, and **CI/CD integration**, Intlayer makes internationalization **faster, cleaner, and smarter**.

## Keys benefits of Intlayer:

| Feature                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                           | **Cross-Frameworks Support**<br><br>Intlayer is compatible with all major frameworks and libraries, including Next.js, React, Vite, Vue.js, Nuxt, Preact, Express, and more.                                                                                                                                                                                                                                                                                                |
|        | **JavaScript-Powered Content Management**<br><br>Harness the flexibility of JavaScript to define and manage your content efficiently. <br><br> - [Content declaration](https://intlayer.org/doc/concept/content)                                                                                                                                                                                                                                                            |
|  | **Per-Locale Content Declaration File**<br><br>Speed up your development by declaring your content once, before auto generation.<br><br> - [Per-Locale Content Declaration File](https://intlayer.org/doc/concept/per-locale-file)                                                                                                                                                                                                                                          |
|                             | **Compiler**<br><br>The Intlayer Compiler extract automatically the content from the components and generate the dictionary files.<br><br> - [Compiler](https://intlayer.org/doc/compiler)                                                                                                                                                                                                                                                                                  |
|                       | **Type-Safe Environment**<br><br>Leverage TypeScript to ensure your content definitions and code are error-free, while also benefiting from IDE autocompletion.<br><br> - [TypeScript configuration](https://intlayer.org/doc/environment/vite-and-react#configure-typescript)                                                                                                                                                                                              |
|                          | **Simplified Setup**<br><br>Get up and running quickly with minimal configuration. Adjust settings for internationalization, routing, AI, build, and content handling with ease. <br><br> - [Explore Next.js integration](https://intlayer.org/doc/environment/nextjs)                                                                                                                                                                                                      |
|                    | **Simplified Content Retrieval**<br><br>No need to call your `t` function for each piece of content. Retrieve all your content directly using a single hook.<br><br> - [React integration](https://intlayer.org/doc/environment/create-react-app)                                                                                                                                                                                                                           |
|                     | **Consistent Server Component Implementation**<br><br>Perfectly suited for Next.js server components, use the same implementation for both client and server components, no need to pass your `t` function across each server component. <br><br> - [Server Components](https://intlayer.org/doc/environment/nextjs#step-7-utilize-content-in-your-code)                                                                                                                    |
|                            | **Organized Codebase**<br><br>Keep your codebase more organized: 1 component = 1 dictionary in the same folder. Translations close to their respective components, enhance maintainability and clarity. <br><br> - [How Intlayer works](https://intlayer.org/doc/concept/how-works-intlayer)                                                                                                                                                                                |
|                          | **Enhanced Routing**<br><br>Full support of app routing, adapting seamlessly to complex application structures, for Next.js, React, Vite, Vue.js, etc.<br><br> - [Explore Next.js integration](https://intlayer.org/doc/environment/nextjs)                                                                                                                                                                                                                                 |
|                             | **Markdown Support**<br><br>Import and interpret, locale files and remote Markdown for multilingual content like privacy policies, documentation, etc. Interpret and make Markdown metadata accessible in your code.<br><br> - [Content files](https://intlayer.org/doc/concept/content/file)                                                                                                                                                                               |
|                        | **Free Visual Editor & CMS**<br><br>A free visual editor and CMS are available for content writers, removing the need for a localization platform. Keep your content synchronized using Git, or externalize it totally or partially with the CMS.<br><br> - [Intlayer Editor](https://intlayer.org/doc/concept/editor) <br> - [Intlayer CMS](https://intlayer.org/doc/concept/cms)                                                                                          |
|                               | **Tree-shakable Content**<br><br>Tree-shakable content, reducing the size of the final bundle. Loads content per component, excluding any unused content from your bundle. Supports lazy loading to enhance app loading efficiency. <br><br> - [App build optimization](https://intlayer.org/doc/concept/how-works-intlayer#app-build-optimization)                                                                                                                         |
|                     | **Static Rendering**<br><br>Doesn't block Static Rendering. <br><br> - [Next.js integration](https://intlayer.org/doc/environment/nextjs)                                                                                                                                                                                                                                                                                                                                   |
|                       | **AI-Powered Translation**<br><br>Transform your website into 231 languages with just one click using Intlayer's advanced AI-powered translation tools using your own AI provider / API key. <br><br> - [CI/CD integration](https://intlayer.org/doc/concept/ci-cd) <br> - [Intlayer CLI](https://intlayer.org/doc/concept/cli) <br> - [Auto fill](https://intlayer.org/doc/concept/auto-fill)                                                                              |
|                                  | **MCP Server Integration**<br><br>Provides an MCP (Model Context Protocol) server for IDE automation, enabling seamless content management and i18n workflows directly within your development environment. <br><br> - [MCP Server](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/mcp_server.md)                                                                                                                                                            |
|                     | **VSCode Extension**<br><br>Intlayer provides a VSCode extension to help you manage your content and translations, building your dictionaries, translating your content, and more. <br><br> - [VSCode Extension](https://intlayer.org/doc/vs-code-extension)                                                                                                                                                                                                                |
|                     | **Interoperability**<br><br>Allow interoperability with react-i18next, next-i18next, next-intl, react-intl, vue-i18n. <br><br> - [Intlayer and react-intl](https://intlayer.org/blog/intlayer-with-react-intl) <br> - [Intlayer and next-intl](https://intlayer.org/blog/intlayer-with-next-intl) <br> - [Intlayer and next-i18next](https://intlayer.org/blog/intlayer-with-next-i18next) <br> - [Intlayer and vue-i18n](https://intlayer.org/blog/intlayer-with-vue-i18n) |
|                            | **Performances & Benchmark**<br><br>Uses advanced tree-shaking and dynamic loading to boost performances and keep the solution as light as possible. <br><br> - [Performances & Benchmark](https://intlayer.org/doc/benchmark)                                                                                                                                                                                                                                              |

---

## 📦 Installation

Start your journey with Intlayer today and experience a smoother, more powerful approach to internationalization.

<a href="https://intlayer.org/doc/concept/content" rel="">
  
</a>

```bash
npm install intlayer react-intlayer
```

⚡ Quick Start (Next.js)

```ts
// intlayer.config.ts
import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.FRENCH, Locales.SPANISH],
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;
```

```ts
// app/home.content.ts
import { t, type Dictionary } from "intlayer";

const content = {
  key: "home",
  content: {
    title: t({
      en: "Home",
      fr: "Accueil",
      es: "Inicio",
    }),
  },
} satisfies Dictionary;

export default content;
```

```tsx
// app/page.tsx
import { useIntlayer } from "react-intlayer";

const HomePage = () => {
  const { title } = useIntlayer("home");

  return <h1>{title}</h1>;
};
```

<a href="https://intlayer.org/doc/environment/nextjs"> Get the full guide → </a>

## 🎥 Live tutorial on YouTube

[![How to Internationalize your application using Intlayer](https://i.ytimg.com/vi/e_PPG7PTqGU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtyJ4uYotEjl12nZ_gZKZ_kjEgOQ)](https://youtu.be/e_PPG7PTqGU?si=GyU_KpVhr61razRw)

<a href="https://intlayer.org/doc/concept/content" rel="">
  
</a>

## Table of Contents

Explore our comprehensive documentation to get started with Intlayer and learn how to integrate it into your projects.

<details open>
<summary style="font-size:16px; font-weight:bold;">📘 Get Started</summary>
<ul>
  <li><a href="https://intlayer.org/doc/why" rel=''>Why Intlayer?</a></li>
  <li><a href="https://intlayer.org/doc" rel=''>Introduction</a></li>
</ul>
</details>

<details>
<summary style="font-size:16px; font-weight:bold;">⚙️ Concept</summary>
<ul>
  <li><a href="https://intlayer.org/doc/concept/how-works-intlayer" rel=''>How Intlayer Works</a></li>
  <li><a href="https://intlayer.org/doc/concept/configuration" rel=''>Configuration</a></li>
  <li><a href="https://intlayer.org/doc/concept/cli" rel=''>Intlayer CLI</a></li>
  <li><a href="https://intlayer.org/doc/compiler" rel=''>Compiler</a></li>

  <li><a href="https://intlayer.org/doc/concept/editor" rel=''>Intlayer Editor</a></li>
  <li><a href="https://intlayer.org/doc/concept/cms" rel=''>Intlayer CMS</a></li>
  <li><a href="https://intlayer.org/doc/concept/content" rel=''>Dictionary</a>
    <ul>
      <li><a href="https://intlayer.org/doc/concept/content/per-locale-file" rel=''>Per-Locale Content Declaration File</a></li>
      <li><a href="https://intlayer.org/doc/concept/content/translation" rel=''>Translation</a></li>
      <li><a href="https://intlayer.org/doc/concept/content/enumeration" rel=''>Enumeration</a></li>
      <li><a href="https://intlayer.org/doc/concept/content/condition" rel=''>Condition</a></li>
      <li><a href="https://intlayer.org/doc/concept/content/nesting" rel=''>Nesting</a></li>
      <li><a href="https://intlayer.org/doc/concept/content/markdown" rel=''>Markdown</a></li>
      <li><a href="https://intlayer.org/doc/concept/content/function-fetching" rel=''>Function Fetching</a></li>
      <li><a href="https://intlayer.org/doc/concept/content/insertion" rel=''>Insertion</a></li>
      <li><a href="https://intlayer.org/doc/concept/content/file" rel=''>File</a></li>
    </ul>
  </li>
</ul>
</details>

<details open>
<summary style="font-size:16px; font-weight:bold;">🌐 Environment</summary>
<ul>
  <li><a href="https://intlayer.org/doc/environment/nextjs" rel=''>Intlayer with Next.js 16</a>
    <ul>
      <li><a href="https://intlayer.org/doc/environment/nextjs/15" rel=''>Next.js 15</a></li>
      <li><a href="https://intlayer.org/doc/environment/nextjs/14" rel=''>Next.js 14 (App Router)</a></li>
      <li><a href="https://intlayer.org/doc/environment/nextjs/next-with-Page-Router" rel=''>Next.js Page Router</a></li>
      <li><a href="https://intlayer.org/doc/environment/nextjs/compiler" rel=''>Next.js using Compiler</a></li>
    </ul>
  </li>
  <li><a href="https://intlayer.org/doc/environment/create-react-app" rel=''>React CRA</a></li>
  <li><a href="https://intlayer.org/doc/environment/vite-and-react" rel=''>Vite + React</a></li>
  <li><a href="https://intlayer.org/doc/environment/vite-and-react" rel=''>Vite + React using Compiler</a></li>
  <li><a href="https://intlayer.org/doc/environment/vite-and-react/compiler" rel=''>React-router-v7</a></li>
  <li><a href="https://intlayer.org/doc/environment/tanstack-start" rel=''>Tanstack start</a>
    <ul>
      <li><a href="https://intlayer.org/doc/environment/tanstack-start/solid" rel=''>Solid</a></li>
    </ul>
  </li>
  <li><a href="https://intlayer.org/doc/environment/astro" rel=''>Astro</a>
    <ul>
      <li><a href="https://intlayer.org/doc/environment/astro/react" rel=''>React</a></li>
      <li><a href="https://intlayer.org/doc/environment/astro/vue" rel=''>Vue</a></li>
      <li><a href="https://intlayer.org/doc/environment/astro/svelte" rel=''>Svelte</a></li>
      <li><a href="https://intlayer.org/doc/environment/astro/solid" rel=''>Solid</a></li>
      <li><a href="https://intlayer.org/doc/environment/astro/vanilla" rel=''>Vanilla JS</a></li>
      <li><a href="https://intlayer.org/doc/environment/astro/lit" rel=''>Lit</a></li>
    </ul>
  </li>

  <li><a href="https://intlayer.org/doc/environment/react-native-and-expo" rel=''>React Native</a></li>
  <li><a href="https://intlayer.org/doc/environment/vite-and-svelte" rel=''>Vite + Svelte</a></li>
  <li><a href="https://intlayer.org/doc/environment/sveltekit" rel=''>SvelteKit</a></li>
  <li><a href="https://intlayer.org/doc/environment/vite-and-preact" rel=''>Vite + Preact</a></li>
  <li><a href="https://intlayer.org/doc/environment/vite-and-vue" rel=''>Vite + Vue</a></li>
  <li><a href="https://intlayer.org/doc/environment/vite-and-nuxt" rel=''>Vite + Nuxt</a></li>
  <li><a href="https://intlayer.org/doc/environment/vite-and-solid" rel=''>Vite + Solid</a></li>
  <li><a href="https://intlayer.org/doc/environment/angular" rel=''>Angular</a></li>
  <li>
     <a href="https://intlayer.org/doc/environment/express" rel=''>Backend</a>
     <ul>
      <li><a href="https://intlayer.org/doc/environment/express" rel=''>Express</a></li>
      <li><a href="https://intlayer.org/doc/environment/nest" rel=''>NestJS</a></li>
      <li><a href="https://intlayer.org/doc/environment/fastify" rel=''>Fastify</a></li>
      <li><a href="https://intlayer.org/doc/environment/adonisjs" rel=''>AdonisJS</a></li>
      <li><a href="https://intlayer.org/doc/environment/hono" rel=''>Hono</a></li>
    </ul>
  </li>
</ul>
</details>

<details>
<summary style="font-size:16px; font-weight:bold;">📊 Benchmark</summary>
<ul>
  <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/nextjs.md" rel=''>Next.js</a></li>
  <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/tanstack.md" rel=''>TanStack Start</a></li>
  <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/vue.md" rel=''>Vue</a></li>
  <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/solid.md" rel=''>Solid</a></li>
  <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/benchmark/svelte.md" rel=''>Svelte</a></li>
</ul>
</details>

<details>
<summary style="font-size:16px; font-weight:bold;">📰 Blog</summary>
<ul>
  <li><a href="https://github.com/aymericzip/intlayer/blob/main/docs/blog/en/what_is_internationalization.md" rel=''>What is i18n</a></li>
  <li><a href="https://intlayer.org/blog/SEO-and-i18n" rel=''>i18n and SEO</a></li>
  <li><a href="https://intlayer.org/blog/intlayer-with-next-i18next" rel=''>Intlayer and i18next</a></li>
  <li><a href="https://intlayer.org/blog/intlayer-with-react-i18next" rel=''>Intlayer and react-intl</a></li>
  <li><a href="https://intlayer.org/blog/intlayer-with-next-intl" rel=''>Intlayer and next-intl</a></li>
</ul>
</details>

## Multilingual content management system

More than an i18n library, Intlayer is a complete **multilingual content management system**. A full CMS is available for free at [app.intlayer.org](https://app.intlayer.org).

Intlayer connects **developers**, **copywriters**, and **AI agents** in one workflow for creating and maintaining multilingual websites effortlessly.Intlayer replaces the following stack in a single solution:

- i18n solutions (e.g. `i18next`, `next-intl`, `vue-i18n`)
- TMSs (Translation Management Systems) (e.g. Crowdin, Phrase, Lokalise)
- Feature flags
- Headless CMSs (e.g. Contentful, Strapi, Sanity)

![CMS Preview](https://github.com/aymericzip/intlayer/blob/main/docs/assets/CMS.png?raw=true)

## 🌐 Readme in other languages

<p align="center">
  <a href="https://github.com/aymericzip/intlayer/blob/main/readme.md">English</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/zh/readme.md">简体中文</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/ru/readme.md">Русский</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/ja/readme.md">日本語</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/fr/readme.md">Français</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/ko/readme.md">한국어</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/es/readme.md">Español</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/de/readme.md">Deutsch</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/ar/readme.md">العربية</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/it/readme.md">Italiano</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/en-GB/readme.md">English (UK)</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/pt/readme.md">Português</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/hi/readme.md">हिन्दी</a> •
  <a href="https://github.com/aymericzip/intlayer/blob/main/docs/docs/tr/readme.md">Türkçe</a>
</p>

## 🤝 Community

Intlayer is built with and for the community and we’d love your input!

- Have a suggestion? [Open an issue](https://github.com/aymericzip/intlayer/issues)
- Found a bug or improvement? [Submit a PR](https://github.com/aymericzip/intlayer/pulls)
- Need help or want to connect? [Join our Discord](https://discord.gg/7uxamYVeCk)

You can also follow us on :

  <div>
    <br/>
    <p align="center">
      <a href="https://discord.gg/528mBV4N" target="blank" rel='noopener noreferrer nofollow'></a>
      <a href="https://www.linkedin.com/company/intlayerorg" target="blank" rel='noopener noreferrer nofollow'></a>
      <a href="https://www.instagram.com/intlayer/" target="blank" rel='noopener noreferrer nofollow'></a>
      <a href="https://x.com/Intlayer183096" target="blank" rel='noopener noreferrer nofollow'></a>
      <a href="https://www.youtube.com/@intlayer" target="blank" rel='noopener noreferrer nofollow'></a>
      <a href="https://www.tiktok.com/@intlayer" target="blank" rel='noopener noreferrer nofollow'></a>
      <br>
    </p>
</div>

### Contribution

For more detailed guidelines on contributing to this project, please refer to the [`CONTRIBUTING.md`](https://github.com/aymericzip/intlayer/blob/main/CONTRIBUTING.md) file. It contains essential information on our development process, commit message conventions, and release procedures. Your contributions are valuable to us, and we appreciate your efforts in making this project better!

Contribute on [GitHub](https://github.com/aymericzip/intlayer), [GitLab](https://gitlab.com/ay.pineau/intlayer), or [Bitbucket](https://bitbucket.org/intlayer/intlayer/).

### Thank You for the Support

If you like Intlayer, give us a ⭐ on GitHub. It helps others discover the project! [See why GitHub Stars matter](https://github.com/aymericzip/intlayer/blob/main/CONTRIBUTING.md#why-github-stars-matter-).

[![Star History Chart](https://api.star-history.com/svg?repos=aymericzip/intlayer&type=Date)](https://star-history.com/#aymericzip/intlayer&Date)
