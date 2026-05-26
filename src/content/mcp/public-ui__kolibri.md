---
name: "public-ui/kolibri"
description: "Streaming KoliBri MCP server (NPM: @public-ui/mcp) delivering 200+ guaranteed accessible web component samples, specs, docs, and scenarios via hosted HTTP endpoint or local kolibri-mcp CLI."
description_tr: "Streaming KoliBri MCP sunucusu (NPM: @public-ui/mcp), 200+ erişilebilir web component örneğini, spesifikasyonlarını, dokümantasyonunu ve senaryolarını barındırılan HTTP endpoint veya yerel kolibri-mcp CLI aracılığıyla sunar."
category: "Developer Tools"
repo: "public-ui/kolibri"
stars: 261
url: "https://github.com/public-ui/kolibri"
body_length: 6464
license: "EUPL-1.2"
language: "TypeScript"
homepage: "https://public-ui.github.io"
body_tr: |-
  # KoliBri'ye Hoşgeldiniz

  [![npm](https://img.shields.io/npm/v/@public-ui/components)](https://www.npmjs.com/package/@public-ui/components)
  [![license](https://img.shields.io/npm/l/@public-ui/components)](https://github.com/public-ui/kolibri/blob/main/LICENSE)
  [![downloads](https://img.shields.io/npm/dt/@public-ui/components)](https://www.npmjs.com/package/@public-ui/components)
  [![issues](https://img.shields.io/github/issues/public-ui/kolibri)](https://github.com/public-ui/kolibri/issues)
  [![pull requests](https://img.shields.io/github/issues-pr/public-ui/kolibri)](https://github.com/public-ui/kolibri/pulls)
  [![size](https://img.shields.io/bundlephobia/min/@public-ui/components)](https://bundlephobia.com/result?p=@public-ui/components)
  ![contributors](https://img.shields.io/github/contributors/public-ui/kolibri)

  > "Erişilebilir HTML standardı"

  KoliBri geleneksel anlamda **bir tasarım sistemi değildir**. Bunun yerine, HTML5 standardını kendi kendine yeterli, erişilebilir Web Components ile genişletiriz — herhangi bir tasarım veya markadan bağımsız olarak çalışan yeni HTML öğeleri. Bu atomik bileşenler, herhangi bir tasarım kütüphanesinin, framework'ün veya stil rehberinin gereksinimlerine göre yeniden kullanabileceği ve tema verebileceği bir temel oluşturur.

  **KoliBri** "erişilebilirlik için bileşen kütüphanesi" anlamına gelir ve
  [Informationstechnikzentrum Bund (ITZBund)](https://itzbund.de) tarafından açık kaynak olarak
  yeniden kullanım ve devam eden geliştirme için yayınlanmıştır.

  ## Vizyon

  Birlikte **HTML**'yi **yeniden kullanılabilir web bileşenleri** kullanarak erişilebilir hale getirerek **kullanılabilirlik** ve **erişilebilirlik** sağlıyoruz.

  ## Misyon

  [HTML web standardı](https://html.spec.whatwg.org) kendisi, mümkün olduğunca uzun ömürlü ve sağlam olabilmesi için çok "açık" bir şekilde belirtilmiştir. Bu nedenle HTML bileşimlerinin kolayca erişilebilir, semantik ve geçerli olmadığı durumlar sıklıkla ortaya çıkar.

  KoliBri doğrudan [W3C](https://www.w3.org) tarafından belirlenen [Web standartlarına](https://www.w3.org/standards/webdesign/) (framework-agnostik) dayalıdır ve [WCAG standardının](https://www.w3.org/WAI/standards-guidelines/wcag/) ve [BITV](https://www.bitvtest.de/bitv_test.html) erişilebilirlik standardının genel bir referans uygulamasıdır ve çok temalaşabilir bir sunum katmanı olarak uygulanmıştır. Teknik referans ve veri aktarım işlevselliği yoktur. Bu, KoliBri'nin hem statik web siteleri gerçekleştirmek hem de farklı kurumsal tasarımlar ve stil rehberleri ile dinamik web uygulamaları gerçekleştirmek için eşit şekilde yeniden kullanılabilir olmasını anlamına gelir ve bu nedenle açık kaynak için çok ilginçtir.

  ## Yol Haritası

  KoliBri, en son ana sürüm için iyileştirmeler, yeni özellikler ve geleceğe yönelik yenilikler üzerinde her zaman aktif bir şekilde çalışmaktadır. Aynı zamanda, seçilen bir LTS sürümü hata düzeltmeleri açısından korunmaktadır.

  | Sürüm | Yayın Tipi | Yayın  | Dönem | Destek Bitişi |
  | ------: | :----------: | :------: | :----: | :------------: |
  |     0.x |   İlk       | Temmuz 2020 |   -    |    Aralık 2021    |
  |     1.x |     LTS      | Aralık 2021 |   3y   |    Aralık 2024    |
  |     2.x |     LTS      | Aralık 2023 |   3y   |    Aralık 2026    |
  |     3.x |     STS      | Aralık 2024 |  15m   |    Mart 2026    |
  |     4.x |     LTS      | Aralık 2025 |   3y   |    Aralık 2028    |
  |     5.x |     STS      | Aralık 2026 |  15m   |    Mart 2028    |

  ```mermaid
  gantt
      title LTS & STS
      dateFormat YYYY-MM-DD

      0.x Initial implementation :, 2020-07-01, 17M
      1.x (LTS)                  :, 2021-12-01, 3y
      2.x (LTS)                  :,  2023-12-01, 3y
      3.x (STS)                  :crit , 2024-12-01, 15M
      4.x (LTS)                  :, 2025-12-01, 3y
      5.x (STS)                  :crit , 2026-12-01, 15M
      6.x (LTS)                  :, 2027-12-01, 3y

  ```

  ## Kurulum

  Paketleri [pnpm](https://pnpm.io) ile kurun:

  ```bash
  pnpm install
  ```

  Bileşenleri oluşturmak için bir kez build çalıştırın:

  ```bash
  pnpm -r build
  ```

  ### Hızlı başlangıç

  Varsayılan temayı kurun ve bileşenleri kaydedin:

  ```ts
  pnpm add @public-ui/components @public-ui/theme-default

  import { register } from '@public-ui/components';
  import { defineCustomElements } from '@public-ui/components/loader';
  import { DEFAULT } from '@public-ui/theme-default';

  register(DEFAULT, defineCustomElements);
  ```

  ### CSS Özel Özellik Çatışmalarından Kaçının

  KoliBri temaları, tüketicilerin görünüş ve hissi uyarlamasına izin vermek için birkaç CSS özel özelliğini ortaya çıkarır.
  Bu özellikler Shadow DOM içinde bile küresel kaldığı için, çok fazla sayıda kullanmak
  ana sayfada tanımlanan değişkenlerle çatışabilir.

  Ad alanıyla belirtilen özel özellikler yalnızca dışarıdan geçersiz kılınması gereken değerler için kullanın.
  İç hesaplamalar için ek CSS özelikleri yerine SASS değişkenlerine güvenin.
  Bu, bileşenleri sağlam tutar ve beklenmedik stil sızıntılarını engeller.

  ## İşbirliği ve koordinasyon

  **KoliBri'nin odağı**, **küçük** (atomik), çok **esnek** ve yüksek düzeyde **yeniden kullanılabilir** HTML bileşimleri (örneğin butonlar) üzerinedir. Bu tür bileşenlerin, herhangi bir üst düzey HTML yapısı veya bileşeni (molekül, organizma veya şablon) yeniden kullanmak için erişilebilir, semantik ve geçerli bir standart uygulaması sunuyoruz.
  Bu atomik bileşenler, **işbirliği** yapıp **koordinasyon** sağladığımız ve beceri ile bilgimizi birleştirdiğimiz yerdir. Temel bileşenlerdeki sinerji etkileri, konu alanına özgü içeriğe daha fazla odaklanmanıza olanak tanır.

  Birlikte KoliBri'yi **daha iyi** ve **daha renkli** hale getirelim!

  > [**Dokumentasyona**](https://public-ui.github.io/en/) devam edin…

  ## Katkı Sağlama

  Bug raporları ve pull request'leri memnuniyetle karşılarız. Başlamadan önce lütfen [katkı rehberimizi](./CONTRIBUTING.md) okuyun.

  ## SLSA/Provenance

  Bu depodan yayınlanan npm paketleri için **SLSA Build Level 3** hedefliyoruz. Sürümler GitHub Actions'da OIDC tabanlı kimlikle oluşturulur ve npm provenance (`--provenance`) ile yayınlanır, yayınlanan yapılar için doğrulanabilir attestasyonlar üretir. Yayın adımları ve npm provenance yapılandırması için [yayın workflow'una](./.github/workflows/publish.yml) bakın.

  **Doğrulama örneği**

  ```bash
  # Yayınlanan bir paket için provenance meta verilerini inceleyin
  pnpm view @public-ui/components dist.provenance

  # (İsteğe bağlı) npm istemciniz destekliyorsa imzaları/provenance'ı doğrulayın
  pnpm audit signatures --package=@public-ui/components@<version>
  ```

  ## Kaynaklar

  - [Başlayın](https://public-ui.github.io/en/docs/get-started/first-steps)
  - [Katkı Sağlama](./CONTRIBUTING.md)
  - [Davranış Kuralları](./CODE_OF_CONDUCT.md)
  - [Bilinen Sorunlar](http://public-ui.github.io/en/docs/known-issues)
  - [Güvenlik](./docs/SECURITY.md)
---

# Welcome to KoliBri

[![npm](https://img.shields.io/npm/v/@public-ui/components)](https://www.npmjs.com/package/@public-ui/components)
[![license](https://img.shields.io/npm/l/@public-ui/components)](https://github.com/public-ui/kolibri/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dt/@public-ui/components)](https://www.npmjs.com/package/@public-ui/components)
[![issues](https://img.shields.io/github/issues/public-ui/kolibri)](https://github.com/public-ui/kolibri/issues)
[![pull requests](https://img.shields.io/github/issues-pr/public-ui/kolibri)](https://github.com/public-ui/kolibri/pulls)
[![size](https://img.shields.io/bundlephobia/min/@public-ui/components)](https://bundlephobia.com/result?p=@public-ui/components)
![contributors](https://img.shields.io/github/contributors/public-ui/kolibri)

> "The accessible HTML standard"

KoliBri is **not a design system** in the traditional sense. Rather, we extend the HTML5 standard with self-contained, accessible Web Components — new HTML elements that work independently from any design or branding. These atomic components form a foundation that any design library, framework, or style guide can reuse and theme according to their needs.

**KoliBri** stands for "component library for accessibility" and was released as
open source by the
[Informationstechnikzentrum Bund (ITZBund)](https://itzbund.de) for reuse and
continued development.

## Vision

Together we make **HTML** accessible using **reusable web components** to ensure **usability** and **accessibility**.

## Mission

The [HTML web standard](https://html.spec.whatwg.org) is itself very “openly” specified in order to be as long-lasting and robust as possible. It therefore often happens that HTML compositions are not easily accessible, semantic and valid.

KoliBri is based directly on the [Web standards](https://www.w3.org/standards/webdesign/) of the [W3C](https://www.w3.org) (framework-agnostic), and is generic Reference implementation of the [WCAG standard](https://www.w3.org/WAI/standards-guidelines/wcag/) and the [BITV](https://www.bitvtest.de/bitv_test.html) for accessibility and implemented as a multi-theming capable presentation layer. There is no technical reference and no data transfer functionality. This means that KoliBri is equally reusable for the realization of static websites as well as dynamic web applications with different corporate designs and style guides and is therefore very interesting for open source.

## Roadmap

KoliBri is always actively working on improvements, new features and future-oriented innovations for the latest major release. In parallel, a selected LTS release is maintained with regard to bug fixes.

| Version | Release type | Release  | Period | End-of-Support |
| ------: | :----------: | :------: | :----: | :------------: |
|     0.x |   Initial    | Jul 2020 |   -    |    Dec 2021    |
|     1.x |     LTS      | Dec 2021 |   3y   |    Dec 2024    |
|     2.x |     LTS      | Dec 2023 |   3y   |    Dec 2026    |
|     3.x |     STS      | Dec 2024 |  15m   |    Mar 2026    |
|     4.x |     LTS      | Dec 2025 |   3y   |    Dec 2028    |
|     5.x |     STS      | Dec 2026 |  15m   |    Mar 2028    |

```mermaid
gantt
    title LTS & STS
    dateFormat YYYY-MM-DD

    0.x Initial implementation :, 2020-07-01, 17M
    1.x (LTS)                  :, 2021-12-01, 3y
    2.x (LTS)                  :,  2023-12-01, 3y
    3.x (STS)                  :crit , 2024-12-01, 15M
    4.x (LTS)                  :, 2025-12-01, 3y
    5.x (STS)                  :crit , 2026-12-01, 15M
    6.x (LTS)                  :, 2027-12-01, 3y

```

## Installation

Install the packages with [pnpm](https://pnpm.io):

```bash
pnpm install
```

Run the build once to generate the components:

```bash
pnpm -r build
```

### Quick start

Install the default theme and register the components:

```ts
pnpm add @public-ui/components @public-ui/theme-default

import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/loader';
import { DEFAULT } from '@public-ui/theme-default';

register(DEFAULT, defineCustomElements);
```

### Avoid CSS Custom Property Collisions

KoliBri themes expose a few CSS custom properties so consumers can adapt the look and feel.
Because these properties remain global—even inside a Shadow DOM—using too many of them can
clash with variables defined on the host page.

Use namespaced custom properties only for values that must be overridden from the outside.
For internal calculations rely on SASS variables instead of additional CSS properties.
This keeps components robust and prevents unexpected style leaks.

## Collaboration and cooperation

The **focus** of KoliBri is on **small** (atomic), very **flexible** and highly **reusable** HTML compositions (e.g. buttons). We offer an accessible, semantic and valid standard implementation of such components that can be reused for any higher-level HTML structure or component (molecule, organism or template).
These atomic components are where we should **collaborate** and **cooperate** to combine our skills and knowledge. The synergy effects on the basic components allow you to focus more on subject-specific content.

Let's make KoliBri **better** and **more colorful** together!

> Continue [to **Documentation**](https://public-ui.github.io/en/)…

## Contributing

Bug reports and pull requests are welcome. Please read our [contribution guide](./CONTRIBUTING.md) before getting started.

## SLSA/Provenance

We aim for **SLSA Build Level 3** for the npm packages published from this repository. Releases are built in GitHub Actions with OIDC-based identity and published with npm provenance (`--provenance`), producing verifiable attestations for the published artifacts. See the [publish workflow](./.github/workflows/publish.yml) for the release steps and npm provenance configuration.

**Verification example**

```bash
# Inspect provenance metadata for a published package
pnpm view @public-ui/components dist.provenance

# (Optional) Verify signatures/provenance if your npm client supports it
pnpm audit signatures --package=@public-ui/components@<version>
```

## Resources

- [Get Started](https://public-ui.github.io/en/docs/get-started/first-steps)
- [Contributing](./CONTRIBUTING.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Known Issues](http://public-ui.github.io/en/docs/known-issues)
- [Security](./docs/SECURITY.md)
