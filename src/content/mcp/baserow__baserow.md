---
name: "baserow/baserow"
description: "Baserow database integration with table search, list, and row create, read, update, and delete capabilities."
description_tr: "Baserow veritabanı entegrasyonu tablo arama, listeleme ve satır oluşturma, okuma, güncelleme ve silme işlemleriyle birlikte gelir."
category: "Databases"
repo: "baserow/baserow"
stars: 4899
url: "https://github.com/baserow/baserow"
body_length: 5445
license: "NOASSERTION"
language: "Python"
homepage: "https://baserow.io"
body_tr: |-
  ## Baserow: veritabanları, otomasyonlar, uygulamalar ve AI ajanları oluşturun — kod yazmadan

  Baserow, veritabanları, uygulamalar, otomasyonlar ve AI ajanları oluşturmak için güvenli,
  açık kaynaklı bir platformdur — tamamen kodsuz. 150.000'den fazla kullanıcı tarafından
  güvenilen Baserow, GDPR, HIPAA ve SOC 2 Type II uyumluluğu ile kurumsal düzey güvenlik
  sağlar ve bulut ile self-hosted dağıtımlar sunarak veri kontrolü sağlar. Doğal dil
  kullanarak veritabanları ve workflow'lar oluşturmanıza olanak tanıyan yerleşik AI
  Asistanı ile Baserow, takımları verileri yapılandırmaya, süreçleri otomatikleştirmeye,
  dahili araçlar oluşturmaya ve özel panolar oluşturmaya güçlendirir. Tam olarak
  genişletilebilir ve API-first yapısıyla Baserow, mevcut araçlarınızla sorunsuzca
  entegre olur ve herhangi bir ölçekte performans gösterir.

  * Kullanım kolaylığı ve güçlü veri organizasyonunu birleştiren bir e-tablo veritabanı
    hybrid'i.
  * Uygulamalar ve portallar oluşturun ve bunları kendi alan adınızda yayınlayın.
  * Otomasyonlar ile tekrarlayan workflow'ları otomatikleştirin.
  * Panolar ile verilerinizi görselleştirin.
  * Kuma, tam çözümler oluşturan güçlü AI asistanı.
  * GDPR, HIPAA ve SOC 2 Type II uyumlu.
  * Depolama kısıtlaması olmayan kolay self-hosted kurulum veya hemen başlamak için
    https://baserow.io adresine kaydolun.
  * Airtable'ın En İyi Alternatifi.
  * Ticari ve özel kullanıma izin veren [MIT Lisansı](https://choosealicense.com/licenses/mit/)
    altında tüm premium olmayan ve kurumsal olmayan özelliklerle açık çekirdek yapı.
  * Headless ve API first.
  * [Django](https://www.djangoproject.com/), [Vue.js](https://vuejs.org/) ve
    [PostgreSQL](https://www.postgresql.org/) gibi popüler framework'ler ve araçları
    kullanır.

  [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://www.heroku.com/deploy/?template=https://github.com/baserow/baserow/tree/master)

  ```bash
  docker run -v baserow_data:/baserow/data -p 80:80 -p 443:443 baserow/baserow:2.2.2
  ```

  ![Baserow database screenshot](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot.png "Baserow database screenshot")

  ![Baserow form screenshot](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_kuma_form.png "Baserow form view and Kuma screenshot")

  ![Baserow kanban screenshot](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_kanban.png "Baserow kanban view screenshot")

  ![Baserow application builder](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_application_builder.png "Baserow application builder screenshot")

  ![Baserow application builder](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_automations.png "Baserow automations screenshot")

  ![Baserow application builder](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_dashboard.png "Baserow dashboard screenshot")

  ## 🚨 Depo Taşınması Bildirimi

  Baserow, GitLab'tan GitHub'a taşınmıştır. Tüm sorunlar başarıyla taşınmıştır, ancak
  birleştirilmiş ve kapatılmış merge istekleri (PR'ler) içe aktarılmamıştır. Eski depoyu
  ve geçmişini hala şu adreste inceleyebilirsiniz: https://gitlab.com/baserow/baserow.

  Lütfen tüm yeni sorunlar, tartışmalar ve katkılar için bu GitHub deposunu kullanın:
  https://github.com/baserow/baserow.

  ## Katılın

  Forumumuza https://community.baserow.io/ adresinde katılın. Katılımcı olmak hakkında
  [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına bakın.

  ## Kurulum

  * [**Docker**](docs/installation/install-with-docker.md)
  * [**Helm**](docs/installation/install-with-helm.md)
  * [**Docker Compose** ](docs/installation/install-with-docker-compose.md)
  * [**Heroku**: Baserow'u Heroku'da kolayca kurun ve ölçekleyin.](docs/installation/install-on-heroku.md)
  * [**Render**: Baserow'u Render'da kolayca kurun ve ölçekleyin.](docs/installation/install-on-render.md)
  * [**Digital Ocean**: Baserow'u Digital Ocean'da kolayca kurun ve ölçekleyin.](docs/installation/install-on-digital-ocean.md)
  * [**AWS**: AWS'de ölçeklenebilir şekilde kurun](docs/installation/install-on-aws.md)
  * [**Cloudron**: Baserow'u kendi Cloudron sunucunuzda kurun ve güncelleyin.](docs/installation/install-on-cloudron.md)
  * [**Railway**: Railway aracılığıyla Baserow'u kurun.](docs/installation/install-on-railway.md)
  * [**Elestio**: Elestio tarafından tamamen yönetilir.](https://elest.io/open-source/baserow)

  ## Resmi dokümantasyon

  Resmi dokümantasyon https://baserow.io/docs/index adresindeki web sitesinde veya
  [burada](./docs/index.md) depo içinde bulunabilir. API dokümantasyonu
  https://api.baserow.io/api/redoc/ adresinde veya OpenAPI şemasını arıyorsanız
  https://api.baserow.io/api/schema.json adresinde bulunabilir.

  ## Geliştirme ortamı

  Baserow'a katkıda bulunmak istiyorsanız, geliştirme ortamını şu şekilde kurabilirsiniz:

  ```bash
  git clone https://github.com/baserow/baserow.git
  cd baserow

  just dc-dev build --parallel
  just dc-dev up -d
  ```

  Baserow geliştirme ortamı şimdi çalışıyor.
  Sıcak kod yeniden yükleme ve diğer geliştirici özellikleri etkinleştirilen geliştirme
  modunda çalışan bir sürümü görmek için tarayıcınızda
  [http://localhost:3000](http://localhost:3000) adresini ziyaret edin.

  Geliştirme ortamı hakkında daha ayrıntılı talimatlar ve daha fazla bilgi
  [https://baserow.io/docs/development/development-environment](./docs/development/development-environment.md)
  adresinde bulunabilir.

  ## Neden Baserow?

  Airtable gibi tescilli araçların aksine, Baserow size **tam veri sahipliği**,
  **sonsuz ölçeklenebilirlik** ve **satıcı bağımlılığı olmama** — hepsi e-tablo
  arayüzünün basitliğini koruyarak sağlar.

  ## Meta

  Baserow B.V. tarafından oluşturuldu - bram@baserow.io.

  MIT lisansı altında dağıtılır. Daha fazla bilgi için `LICENSE` dosyasına bakın.

  Sürüm: 2.2.2

  Resmi depo https://github.com/baserow/baserow adresinde bulunabilir.

  Değişiklik günlüğü [burada](./changelog.md) bulunabilir.

  GitHub Sponsor olun [burada](https://github.com/sponsors/bram2w).
---

## Baserow: build databases, automations, apps & agents with AI — no code

Baserow is the secure, open-source platform for building databases, applications,
automations, and AI agents — all without code. Trusted by over 150,000 users, Baserow
delivers enterprise-grade security with GDPR, HIPAA, and SOC 2 Type II compliance, plus
cloud and self-hosted deployments for full data control. With a built-in AI Assistant
that lets you create databases and workflows using natural language, Baserow empowers
teams to structure data, automate processes, build internal tools, and create custom
dashboards. Fully extensible and API-first, Baserow integrates seamlessly with your
existing tools and performs at any scale.

* A spreadsheet database hybrid combining ease of use and powerful data organization.
* Create applications and portals, and publish them on your own domain.
* Automate repetitive workflows with automations.
* Visualize your data with dashboards.
* Kuma, powerful AI-assistant to builds complete solutions.
* GDPR, HIPAA, and SOC 2 Type II compliant.
* Easily self-hosted with no storage restrictions or sign-up on https://baserow.io to
  get started immediately.
* Best Alternative to Airtable.
* Open-core with all non-premium and non-enterprise features under
  the [MIT License](https://choosealicense.com/licenses/mit/) allowing commercial and
  private use.
* Headless and API first.
* Uses popular frameworks and tools like [Django](https://www.djangoproject.com/),
  [Vue.js](https://vuejs.org/) and [PostgreSQL](https://www.postgresql.org/).

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://www.heroku.com/deploy/?template=https://github.com/baserow/baserow/tree/master)

```bash
docker run -v baserow_data:/baserow/data -p 80:80 -p 443:443 baserow/baserow:2.2.2
```

![Baserow database screenshot](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot.png "Baserow database screenshot")

![Baserow form screenshot](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_kuma_form.png "Baserow form view and Kuma screenshot")

![Baserow kanban screenshot](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_kanban.png "Baserow kanban view screenshot")

![Baserow application builder](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_application_builder.png "Baserow application builder screenshot")

![Baserow application builder](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_automations.png "Baserow automations screenshot")

![Baserow application builder](https://raw.githubusercontent.com/baserow/baserow/HEAD/docs/assets/screenshot_dashboard.png "Baserow dashboard screenshot")

## 🚨 Repository Migration Notice

Baserow has moved from GitLab to GitHub. All issues have been successfully migrated,
but merged and closed merge requests (PRs) were not imported. You can still browse the
old repository and its history at: https://gitlab.com/baserow/baserow.

Please use this GitHub repository  for all new issues, discussions, and contributions
going forward at: https://github.com/baserow/baserow.

## Get Involved

Join our forum at https://community.baserow.io/. See
[CONTRIBUTING.md](./CONTRIBUTING.md) on how to become a contributor.

## Installation

* [**Docker**](docs/installation/install-with-docker.md)
* [**Helm**](docs/installation/install-with-helm.md)
* [**Docker Compose** ](docs/installation/install-with-docker-compose.md)
* [**Heroku**: Easily install and scale up Baserow on Heroku.](docs/installation/install-on-heroku.md)
* [**Render**: Easily install and scale up Baserow on Render.](docs/installation/install-on-render.md)
* [**Digital Ocean**: Easily install and scale up Baserow on Digital Ocean.](docs/installation/install-on-digital-ocean.md)
* [**AWS**: Install in a scalable way on AWS](docs/installation/install-on-aws.md)
* [**Cloudron**: Install and update Baserow on your own Cloudron server.](docs/installation/install-on-cloudron.md)
* [**Railway**: Install Baserow via Railway.](docs/installation/install-on-railway.md)
* [**Elestio**: Fully managed by Elestio.](https://elest.io/open-source/baserow)

## Official documentation

The official documentation can be found on the website at https://baserow.io/docs/index
or [here](./docs/index.md) inside the repository. The API docs can be found here at
https://api.baserow.io/api/redoc/ or if you are looking for the OpenAPI schema here
https://api.baserow.io/api/schema.json.

## Development environment

If you want to contribute to Baserow you can setup a development environment like so:

```bash
git clone https://github.com/baserow/baserow.git
cd baserow

just dc-dev build --parallel
just dc-dev up -d
```

The Baserow development environment is now running.
Visit [http://localhost:3000](http://localhost:3000) in your browser to see a working
version in development mode with hot code reloading and other dev features enabled.

More detailed instructions and more information about the development environment can be
found at [https://baserow.io/docs/development/development-environment](./docs/development/development-environment.md).

## Why Baserow?

Unlike proprietary tools like Airtable, Baserow gives you **full data ownership**,
**infinite scalability**, and **no vendor lock-in** — all while keeping the simplicity
of a spreadsheet interface.

## Meta

Created by Baserow B.V. - bram@baserow.io.

Distributes under the MIT license. See `LICENSE` for more information.

Version: 2.2.2

The official repository can be found at https://github.com/baserow/baserow.

The changelog can be found [here](./changelog.md).

Become a GitHub Sponsor [here](https://github.com/sponsors/bram2w).
