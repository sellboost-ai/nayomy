---
name: "duriantaco/skylos"
description: "Dead code detection, security scanning, and code quality analysis for Python, TypeScript, and Go. 98% recall with fewer false positives than Vulture. Includes AI-powered remediation."
description_tr: "Python, TypeScript ve Go için ölü kod tespiti, güvenlik taraması ve kod kalitesi analizi. Vulture'dan daha az yanlış pozitif sonuçla %98 recall oranı. AI destekli remediation önerileri içerir."
category: "Security"
repo: "duriantaco/skylos"
stars: 441
url: "https://github.com/duriantaco/skylos"
body_length: 17327
license: "Apache-2.0"
language: "Python"
homepage: "https://skylos.dev/"
body_tr: |-
  <div align="center">
      
      <h1>Skylos</h1>
      <h3>Açık kaynak, yerel-öncelikli ölü kod, güvenlik sorunları, sırlar, kalite gerillemeleri ve AI kodu hataları için merge öncesi kontroller.</h3>
  </div>

  ![Lisans: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
  [![codecov](https://codecov.io/gh/duriantaco/skylos/branch/main/graph/badge.svg)](https://codecov.io/gh/duriantaco/skylos)
  ![PyPI - Python Sürümü](https://img.shields.io/pypi/pyversions/skylos)
  [![PyPI sürümü](https://img.shields.io/pypi/v/skylos)](https://pypi.org/project/skylos/)
  ![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/oha.skylos-vscode-extension)
  [![Astronomer Trust](https://img.shields.io/badge/Astronomer%20Trust-A-brightgreen?style=flat&logo=github&logoColor=white)](#star-authenticity-audit)
  [![Discord](https://img.shields.io/badge/Discord-Join-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/Ftn9t9tErf)

  [Web Sitesi](https://skylos.dev) |
  [Dokümanlar](https://docs.skylos.dev) |
  [Repo Haritası](https://duriantaco.github.io/skylos/repo-map/) |
  [Hızlı Başlangıç](https://docs.skylos.dev/quick-start) |
  [GitHub Action](./action.yml) |
  [VS Code Uzantısı](./editors/vscode/README.md) |
  [Gerçek Dünya Sonuçları](./REAL_WORLD_RESULTS.md) |
  [Kıyaslamalar](./BENCHMARK.md) |
  [Yol Haritası](./ROADMAP.md) |
  [Katkı Sağlama](./CONTRIBUTING.md)

  **English** | [Deutsch](./docs/i18n/README.de.md) | [简体中文](./docs/i18n/README.zh-CN.md) | [Çeviriler](./docs/i18n/README.md)

  ## Skylos Nedir?

  Skylos, Python, TypeScript, JavaScript, Java, Go, PHP, Rust, Dart, C#, Shell ve deployment config için açık kaynak statik analiz CLI aracıdır. Varsayılan olarak yerel çalışır ve ayrıca CI/CD PR kapısı olarak da kullanılabilir.

  Şu durumlar için bir repo veya pull request'i kontrol etmek istediğinizde Skylos kullanın:

  - ölü kod ve kullanılmayan dosyalar
  - güvenlik kusurları ve tehlikeli veri akışları
  - sırlar ve bağımlılık CVE'leri
  - CI/CD ve edge-cihaz deployment yanlış konfigürasyonları
  - karmaşıklık, duplicate dallar ve derin iç içelik gibi kalite gerillemeleri
  - eksik korumaları ve sahte yardımcıları içeren yaygın AI tarafından üretilen kod hataları
  - güvenli olmayan tool kullanımı ve eksik çıktı doğrulaması gibi LLM uygulaması riskleri

  ## 60 Saniyede Başlayın

  ```bash
  pip install skylos
  skylos .
  ```

  Varsayılan tarama ölü koda odaklanır. Güvenlik, sırlar, kalite ve bağımlılık kontrollerini `-a` ile ekleyin:

  ```bash
  skylos . -a
  ```

  Eşikler, görmezden gelenler, şablon hooks ve vibe sözlüğü uzantılarıyla bir proje config'i oluşturun:

  ```bash
  skylos init
  ```

  Başlangıç yerel rule pack'i oluşturun:

  ```bash
  skylos rules init
  skylos rules validate .skylos/rules/local.yml
  skylos rules list --json
  skylos rules list cross --json
  skylos rules list --packs --json
  skylos cache stats
  ```

  Bir GitHub Actions PR kapısı oluşturun:

  ```bash
  skylos cicd init
  git add .github/workflows/skylos.yml
  git commit -m "Add Skylos CI gate"
  git push
  ```

  Daha fazla komut mı gerekiyor? [CLI Referansını](https://docs.skylos.dev/cli-reference) okuyun.

  ## Yaygın İş Akışları

  | Hedef | Komut | Elde Ettikleriniz | Daha Fazla Bilgi |
  |:---|:---|:---|:---|
  | İlk ölü-kod taraması | `skylos .` | Kullanılmayan fonksiyonlar, sınıflar, importlar, dosyalar ve framework entrypoint hatalarını bulur | [Ölü kod dokümanları](https://docs.skylos.dev/dead-code-detection) |
  | Güvenlik ve kalite denetimi | `skylos . -a` | Tehlikeli akış, sırlar, bağımlılık, config ve kalite kontrolleri ekler | [Güvenlik dokümanları](https://docs.skylos.dev/security-analysis) |
  | PR kapısı | `skylos cicd init` | Annotation'lar ve başarısızlık eşikleriyle bir GitHub Actions workflow'u oluşturur | [CI/CD rehberi](https://docs.skylos.dev/ci-cd) |
  | Okunabilir terminal raporu | `skylos . --format pretty` | Bulguları dosya başına gruplandırır, şiddet rozetleri, snippet'ler ve kopyalanabilir `file:line` konumlarıyla | [CLI çıktı modları](./docs/cli-output.md) |
  | Seçilebilir terminal triyajı | `skylos . --tui` | Klavye kontrollü kategori listesi, bulgu listesi ve detay panelini açar | [CLI çıktı modları](./docs/cli-output.md) |
  | IDE/test-script çıktısı | `skylos --format concise src/test.py` | Yalnızca `file:line` bulgularını yazdırır ve bulgular olduğunda sıfır olmayan exit olur | [CLI Referansı](https://docs.skylos.dev/cli-reference) |
  | Değişen-satır incelemesi | `skylos . -a --diff origin/main` | Bulguları eski borçtan ziyade aktif işe odaklanır | [Kalite kapısı dokümanları](https://docs.skylos.dev/quality-gate) |
  | Runtime destekli ölü-kod kontrolü | `skylos . --trace` | Dinamik-kod yanlış pozitiflerini azaltmak için runtime izlerini kullanır | [Smart tracing](https://docs.skylos.dev/smart-tracing) |
  | Yerel rule pack | `skylos rules init` | Projeye özgü güvenlik ve kalite kontrolleri için YAML rule'ları iskele oluşturur | [Özel rule'lar](https://docs.skylos.dev/custom-rules) |
  | AI destekli inceleme | `skylos agent scan .` | Statik analiz artı isteğe bağlı LLM incelemesi ve düzeltme önerileri | [AI özellikleri](https://docs.skylos.dev/ai-features) |
  | LLM uygulaması savunması | `skylos defend .` | OWASP LLM risklerine eşlenen eksik AI uygulaması güvenlik önlemlerini bulur | [AI savunması](https://docs.skylos.dev/ai-defense) |
  | Teknik borç triyajı | `skylos debt .` | Sıcak noktaları ve borç trendlerini sıralar | [Teknik borç](https://docs.skylos.dev/technical-debt) |

  ## Skylos Neyi Yakalar

  | Kategori | Örnekler | Neden Önemli |
  |:---|:---|:---|
  | Ölü kod | kullanılmayan fonksiyonlar, sınıflar, importlar, paket entrypoint'leri, route handler'ları | dinamik framework'leri kırmadan bakım maliyetini azaltır |
  | Güvenlik kusurları | SQL enjeksiyonu, XSS, SSRF, path traversal, command injection, unsafe deserialization | exploitable akışları kodun main'e ulaşmadan önce yakalar |
  | Sırlar | API anahtarları, tokenlar, özel credentials, yüksek entropi stringler | credentials'ların commit'ler ve PR'lar üzerinden sızmasını önler |
  | CI/CD workflow'ları | GitHub Actions ve GitLab CI tehlikeli tetikleyiciler, sabitlemeyen action'lar/include'lar, geniş tokenlar, OIDC yanlış kullanımı, cache poisoning, mutable image'lar | CI/CD supply-chain riskini release job'ları çalışmadan önce azaltır |
  | Edge deployment config | Docker Compose ayrıcalıklı cihaz erişimi, host networking, systemd root servisleri, geniş yetenekler, eksik sandboxing | repo kontrolü altındaki ayarları app bug'larını cihaz kompromisine dönüştüren yakalanır |
  | Kalite gerillemeleri | karmaşıklık, derin iç içelik, duplicate dallar, uzun fonksiyonlar, tutarsız return'ler | AI destekli refactor'ların kırılgan kod eklemesini önler |
  | AI kod hataları | phantom güvenlik çağrıları, eksik decorators, tamamlanmamış stub'lar, devre dışı kontroller, timeout olmayan network çağrıları | yaygın halüsine edilmiş veya tamamlanmamış kod yollarını yakalar |
  | LLM uygulaması riskleri | güvenli olmayan tool kullanımı, prompt enjeksiyonu maruziyeti, eksik çıktı doğrulaması, eksik rate limit'ler | ekiplerin AI özelliklerini güvenlik önlemleriyle sevk etmesine yardımcı olur |

  Tam [Rules Referansını](https://docs.skylos.dev/rules-reference) görün.

  ## Skylos Nasıl Uygun

  Skylos, her uzmanlaşmış scanner'ın yerine geçmez. Birkaç yaygın inceleme kontrolünü bir CLI'nin arkasına koyan yerel-öncelikli repo ve PR kontrol aracıdır.

  - **Framework farkında ölü kod tespiti:** FastAPI, Django, Flask, pytest, SQLAlchemy, Next.js, React, paket entrypoint'leri ve yaygın plugin pattern'leri.
  - **PR odaklı çıktı:** diff taraması, CI eşikleri, GitHub annotation'ları ve mevcut bulgular için baseline'lar.
  - **Yerel-öncelikli operasyon:** temel statik analiz, bulut yüklemesi veya LLM çağrıları gerektirmez.
  - **AI destekli değişim incelemesi:** üretilen veya düzenlenen kodda kaldırılan doğrulama, auth, logging, CSRF, rate limiting, timeout'lar ve diğer korumaları kontrol eder.
  - **Projeye özgü rule'lar:** yerel YAML rule'ları ekleyin ve config'ten prompt, credential, sensitive-file ve timeout sözlüklerini genişletin.
  - **Tek komut arayüzü:** ölü kod, güvenlik, sırlar, bağımlılık, kalite, teknik borç, agent incelemesi ve AI savunması komutları aynı CLI'ı paylaşır.

  ## Kurulum Seçenekleri

  ```bash
  # Temel statik analiz
  pip install skylos

  # LLM destekli agent workflow'ları
  pip install "skylos[llm]"

  # Tüm yayınlanan isteğe bağlı ekstralar
  pip install "skylos[all]"
  ```

  Container image'ı:

  ```bash
  docker pull ghcr.io/duriantaco/skylos:latest
  docker run --rm -v "$PWD":/work -w /work ghcr.io/duriantaco/skylos:latest . --json --no-provenance
  ```

  Kaynak kurulumları, container kullanımı ve isteğe bağlı bağımlılıklar için [Kurulumu](https://docs.skylos.dev/installation) görün.

  ## Şablonları ve Vibe Kontrolleri Yapılandırın

  `skylos init` çalıştırarak bu bölümleri `pyproject.toml`a ekleyin:

  ```toml
  [tool.skylos.templates]
  # security = ".skylos/templates/security.md"
  # quality = ".skylos/templates/quality.md"
  # security_audit = ".skylos/templates/security_audit.md"
  # review = ".skylos/templates/review.md"

  [tool.skylos.vibe]
  extra_phantom_names = ["verify_enterprise_auth"]
  extra_phantom_decorators = ["tenant_admin_required"]
  extra_credential_names = ["tenant_signing_secret"]
  extra_network_timeout_calls = ["vendor_sdk.fetch"]
  ```

  Şablon dosyaları Skylos'un yerleşik promptlarını genişletir; JSON-yalnızca çıktı kontratını veya güvenilir olmayan kod güvenlik kurallarını değiştirmezler. Vibe sözlüğü uzantıları, ekiplerin Skylos'u yerel sahte-auth yardımcıları, proje credential adları, sensitive dosyaları ve timeout ayarlaması gereken network çağrıları hakkında öğretmelerini sağlar.

  ## Dil Desteği

  | Dil | Ölü Kod | Güvenlik | Kalite | Notlar |
  |:---|:---:|:---:|:---:|:---|
  | Python | Evet | Evet | Evet | en güçlü kapsama; framework farkında statik analiz ve isteğe bağlı tracing |
  | TypeScript / JavaScript | Evet | Evet | Evet | Tree-sitter parsing, package graph reachability, framework conventions |
  | Java | Evet | Evet | Evet | Tree-sitter parsing ve yapılandırılmış güvenlik-akış analizi |
  | Go | Evet | Kısmi | Kısmi | ölü-kod ve seçilmiş güvenlik benchmark kapsamı |
  | PHP | Evet | Evet | Kısmi | PHP parser kapsamı artı taint-stili güvenlik sink'leri ve kaynakları |
  | Rust | Evet | Evet | Kısmi | Rust parser kapsamı artı güvenlik sink/kaynak kontrolleri |
  | Dart | Evet | Evet | Kısmi | Dart parser kapsamı artı seçilmiş güvenlik sink'leri ve kaynakları |
  | C# | Evet | Evet | Kısmi | C# sembol kapsamı artı seçilmiş ASP.NET, process, SQL, HTTP ve file sink'ler |
  | Shell | Hayır | Evet | Kısmi | command injection, SSRF ve path traversal için shell-script güvenlik kontrolleri |

  Rule aileleri ve scanner kapsamı için [Rules Referansını](https://docs.skylos.dev/rules-reference) görün.

  ## Config ve Deployment Desteği

  | Yüzey | Dosyalar | Güvenlik Kapsamı |
  |:---|:---|:---|
  | GitHub Actions | `.github/workflows/*.yml`, `.github/workflows/*.yaml`, `action.yml`, `action.yaml` | tehlikeli tetikleyiciler, token izinleri, sabitlemeyen action'lar, şablon injection'ı, sırlar, OIDC, cache ve artifact policy'si |
  | GitLab CI | `.gitlab-ci.yml` | mutable image'lar, sabitlemeyen include'lar, literal sırlar, güvenilir olmayan eval, Docker-in-Docker, OIDC, cache, timeout ve runner-tag policy'si |
  | Edge Docker Compose | `compose*.yml`, `compose*.yaml`, `docker-compose*.yml`, `docker-compose*.yaml` | ayrıcalıklı container'lar, geniş host cihaz/kontrol mount'ları, GPU/cihaz runtime'ı ve host networking'i |
  | Edge systemd | `*.service` | root edge servisleri, mutable `ExecStart` yolları, eksik sandboxing, geniş yetenekler ve geniş cihaz erişimi |

  ## Kıyaslama Snapshot'ı

  Skylos, ölü kod, güvenlik, kalite ve agent incelemesi için kontrol edilmiş regresyon kıyaslamalarına sahiptir. Bunlar katı regresyon kapıları olup, herhangi bir aracın evrensel olarak en yeni çağda olduğunun geniş kanıtı değildir.

  | Suite | Mevcut Skylos Sonucu | Baseline |
  |:---|:---|:---|
  | Ölü kod regresyonu | 16 case, TP=36 FP=0 FN=0 TN=59, skor 100.0 | Ruff skor 62.67; Vulture son yerel rerun'da kurulu değil |
  | Güvenlik regresyonu | 56 case, TP=35 FP=0 FN=0 TN=23, skor 100.0 | Bandit skor 47.14 Python uygulanabilir case'ler üzerinde |
  | Kalite regresyonu | 13 case, skor 100.0 | yalnızca regresyon kapısı |
  | Agent incelemesi | 25 case, skor 100.0 | yalnızca regresyon kapısı |

  Donmuş `golden-v0.2` öne çıkanları:

  | Donmuş Suite | Skylos Sonucu | Uyarı |
  |:---|:---|:---|
  | Ölü kod tohumlanan dev | genel skor 96.28; TS/JS/Go/Java skor 100.0; Python skor 93.33 | Python kalıntıları etiket-inceleme öğeleridir |
  | Güvenlik tohumlanan dev | genel skor 96.52; bir Python `urljoin` yanlış pozitifiyle tam recall | etiket gözden geçirilmelidir |
  | OWASP Java güvenlik dev | TP=105 FP=0 FN=15 TN=120, skor 94.37 | request-wrapper, LDAP, XPath ve property weak-hash boşlukları kalır |
  | Kalite tohumlanan dev | TP=1 FP=0 FN=0 TN=1, skor 100.0 | yalnızca bir tohumlanan case |

  Metodoloji, komutlar, rekabet eden satırlar ve uyarılar için [BENCHMARK.md](./BENCHMARK.md)'i görün.

  ## Proje Kanıtı

  Skylos destekli ölü-kod temizleme PR'ları
  [Black](https://github.com/psf/black/pull/5041),
  [NetworkX](https://github.com/networkx/networkx/pull/8572),
  [Optuna](https://github.com/optuna/optuna/pull/6547),
  [mitmproxy](https://github.com/mitmproxy/mitmproxy/pull/8136),
  [pypdf](https://github.com/py-pdf/pypdf/pull/3685),
  [beets](https://github.com/beetbox/beets/pull/6473) ve
  [Flagsmith](https://github.com/Flagsmith/flagsmith/pull/6953) projeleriyle merge edilmiştir. Bunlar kabul edilen temizleme PR'ları olup, proje onaylamaları değildir. [Gerçek Dünya Sonuçlarını](./REAL_WORLD_RESULTS.md) görün.

  <a id="star-authenticity-audit"></a>

  26 Nisan 2026'da yerel Astronomer taraması 420 stargazer'ı hesapladı ve **genel güven: A** döndürdü. StarGuard ayrıca **düşük sahte-star riski** bildirdi.

  ## İntegrasyonlar

  | İntegrasyon | Link | Amaç |
  |:---|:---|:---|
  | GitHub Action | [GitHub Action](./action.yml) | PR kapıları, annotation'lar ve CI zorlaması |
  | VS Code uzantısı | [VS Code uzantısı](./editors/vscode/README.md) | editör içinde bulgular ve AI destekli düzeltmeler |
  | MCP server'ı | [MCP setup](https://docs.skylos.dev/mcp-server) | Skylos taramalarını AI agent'leri ve coding asistan'larına maruz bırakın |
  | Docker image'ı | [Kurulum](https://docs.skylos.dev/installation) | Skylos'u yerel Python kurulumu olmadan çalıştırın |
  | Skylos Cloud | [Cloud workflow'u](https://docs.skylos.dev/cloud-workflow) | isteğe bağlı yükleme ve dashboard workflow'ları |

  CLI'den bir GitHub Actions workflow'u oluşturun:

  ```bash
  skylos cicd init --upload
  skylos cicd init --upload --scan-path apps/api
  ```

  Oluşturulan yükleme workflow'u GitHub OIDC kullanır, PR head commit/branch metadata'sını gönderir ve `--scan-path` aracılığıyla monorepo alt projelerini destekler.

  ## Doküman Haritası

  | İhtiyaç | Bunu Okuyun |
  |:---|:---|
  | Kurulum seçenekleri, kaynak kurulum ve Docker | [Kurulum](https://docs.skylos.dev/installation) |
  | İlk tarama ve temel workflow'lar | [Hızlı Başlangıç](https://docs.skylos.dev/quick-start) |
  | CLI komutları, flag'ler ve örnekler | [CLI Referansı](https://docs.skylos.dev/cli-reference) |
  | CLI çıktı modları, güzel raporlar ve TUI kontrolleri | [CLI Çıktı Modları](./docs/cli-output.md) |
  | CI setup, PR kapıları, annotation'lar ve branch koruması | [CI/CD](https://docs.skylos.dev/ci-cd) |
  | Ölü-kod davranışı ve framework farkındalığı | [Ölü Kod Tespiti](https://docs.skylos.dev/dead-code-detection) |
  | Güvenlik taraması ve taint analizi | [Güvenlik Analizi](https://docs.skylos.dev/security-analysis) |
  | Rule ID ön ekleri ve ürün terminolojisi | [Rule Sözlüğü](./dictionary.md) |
  | Agent tarama, doğrulama, düzeltme ve model setup'ı | [AI Özellikleri](https://docs.skylos.dev/ai-features) |
  | AI savunması kontrolleri ve LLM güvenlik önlemleri | [AI Savunması](https://docs.skylos.dev/ai-defense) |
  | MCP server'ı setup'ı | [MCP Server'ı](https://docs.skylos.dev/mcp-server) |
  | Gerçek dünya merge edilmiş temizleme PR'ları | [Gerçek Dünya Sonuçları](./REAL_WORLD_RESULTS.md) |
  | Baseline'lar, filtreleme, bastırma ve whitelist'ler | [Konfigürasyon](https://docs.skylos.dev/configuration) |
  | Smart tracing | [Smart Tracing](https://docs.skylos.dev/smart-tracing) |
  | Rule aileleri ve dil desteği | [Rules Referansı](https://docs.skylos.dev/rules-reference) |
  | Bulut yüklemeleri ve dashboard akışı | [CLI to Dashboard](https://docs.skylos.dev/cloud-workflow) |
  | VS Code uzantısı | [VS Code Uzantısı](https://docs.skylos.dev/vscode) |
  | Kıyaslamalar ve metodoloji | [BENCHMARK.md](./BENCHMARK.md) |
  | Güvenlik politikası | [SECURITY.md](./SECURITY.md) |
  | Release süreci | [RELEASE_WORKFLOW.md](./RELEASE_WORKFLOW.md) |
  | Katkı öncelikleri | [ROADMAP.md](./ROADMAP.md) |
  | Katkı Sağlama | [CONTRIBUTING.md](./CONTRIBUTING.md) |

  ## Sık Sorulan Sorular

  **Skylos, Bandit, Semgrep, CodeQL veya Vulture'ün yerine geçer mi?**

  Hayır. Skylos onlarla yan yana çalışabilir. Framework farkında ölü-kod sinyali, PR gating, AI çağı regresyon kontrolleri ve ölü kod, güvenlik, sırlar ve kalite arasında birleşik workflow'a odaklanır.

  **Skylos bir LLM gerektiriyor mu?**

  Hayır. Temel statik analiz API anahtarları olmadan yerel çalışır. LLM özellikleri `skylos[llm]` ve agent komutları aracılığıyla isteğe bağlıdır.

  **Bunu yalnızca değişen kod üzerinde kullanabilir miyim?**

  Evet. `skylos . -a --diff origin/main` yerel olarak kullanın veya CI kapılarını yeni bulgulara odaklanacak şekilde yapılandırın.

  **Bilinçli dinamik kodu nasıl ele almalıyım?**

  Baseline'lar, whitelist'ler, satır içi bastırmalar veya runtime tracing kullanın. [Konfigürasyon dokümanlarını](https://docs.skylos.dev/configuration) ve [smart tracing dokümanlarını](https://docs.skylos.dev/smart-tracing) görün.

  ## Katkı Sağlama ve Destek

  - Güvenlik sorunlarını [SECURITY.md](./SECURITY.md) aracılığıyla bildirin.
  - Minimal repro'larla bug'lar ve yanlış-pozitif raporları açın.
  - Yararlı katkı alanları için [ROADMAP.md](./ROADMAP.md) kontrol edin.
  - Bir pull request göndermeden önce [CONTRIBUTING.md](./CONTRIBUTING.md) okuyun.
  - Proje kalitesi ve kapı beklentileri için [QUALITY.md](./QUALITY.md)'yi görün.
  - Topluluk desteği için [Discord](https://discord.gg/Ftn9t9tErf)'a katılın.

  ## Lisans

  Skylos, [Apache License 2.0](./LICENSE) altında lisanslanmıştır.

  <!-- mcp-name: io.github.duriantaco/skylos -->
---

<div align="center">
    
    <h1>Skylos</h1>
    <h3>Open-source, local-first checks for dead code, security issues, secrets, quality regressions, and AI-code mistakes before merge.</h3>
</div>

![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
[![codecov](https://codecov.io/gh/duriantaco/skylos/branch/main/graph/badge.svg)](https://codecov.io/gh/duriantaco/skylos)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/skylos)
[![PyPI version](https://img.shields.io/pypi/v/skylos)](https://pypi.org/project/skylos/)
![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/oha.skylos-vscode-extension)
[![Astronomer Trust](https://img.shields.io/badge/Astronomer%20Trust-A-brightgreen?style=flat&logo=github&logoColor=white)](#star-authenticity-audit)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/Ftn9t9tErf)

[Website](https://skylos.dev) |
[Docs](https://docs.skylos.dev) |
[Repo Map](https://duriantaco.github.io/skylos/repo-map/) |
[Quick Start](https://docs.skylos.dev/quick-start) |
[GitHub Action](./action.yml) |
[VS Code Extension](./editors/vscode/README.md) |
[Real-World Results](./REAL_WORLD_RESULTS.md) |
[Benchmarks](./BENCHMARK.md) |
[Roadmap](./ROADMAP.md) |
[Contributing](./CONTRIBUTING.md)

**English** | [Deutsch](./docs/i18n/README.de.md) | [简体中文](./docs/i18n/README.zh-CN.md) | [Translations](./docs/i18n/README.md)

## What Is Skylos?

Skylos is an open-source static analysis CLI for Python, TypeScript,
JavaScript, Java, Go, PHP, Rust, Dart, C#, Shell, and deployment config. It
runs locally by default and can also be used as a CI/CD PR gate.

Use Skylos when you want one command to check a repo or pull request for:

- dead code and unused files
- security flaws and dangerous data flows
- secrets and dependency CVEs
- CI/CD and edge-device deployment misconfigurations
- quality regressions such as complexity, duplicate branches, and deep nesting
- common AI-generated code mistakes, including missing guards and fake helpers
- LLM app risks such as unsafe tool use and missing output validation

## Start In 60 Seconds

```bash
pip install skylos
skylos .
```

The default scan focuses on dead code. Add security, secrets, quality, and
dependency checks with `-a`:

```bash
skylos . -a
```

Create a project config with thresholds, ignores, template hooks, and vibe
dictionary extensions:

```bash
skylos init
```

Create a starter local rule pack:

```bash
skylos rules init
skylos rules validate .skylos/rules/local.yml
skylos rules list --json
skylos rules list cross --json
skylos rules list --packs --json
skylos cache stats
```

Generate a GitHub Actions PR gate:

```bash
skylos cicd init
git add .github/workflows/skylos.yml
git commit -m "Add Skylos CI gate"
git push
```

Need more commands? Read the [CLI Reference](https://docs.skylos.dev/cli-reference).

## Common Workflows

| Goal | Command | What You Get | More Detail |
|:---|:---|:---|:---|
| First dead-code scan | `skylos .` | Finds unused functions, classes, imports, files, and framework entrypoint mistakes | [Dead code docs](https://docs.skylos.dev/dead-code-detection) |
| Security and quality audit | `skylos . -a` | Adds dangerous flow, secrets, dependency, config, and quality checks | [Security docs](https://docs.skylos.dev/security-analysis) |
| PR gate | `skylos cicd init` | Generates a GitHub Actions workflow with annotations and failure thresholds | [CI/CD guide](https://docs.skylos.dev/ci-cd) |
| Readable terminal report | `skylos . --format pretty` | Groups findings by file with severity badges, snippets, and copyable `file:line` locations | [CLI output modes](./docs/cli-output.md) |
| Selectable terminal triage | `skylos . --tui` | Opens a keyboard-driven category list, finding list, and detail pane | [CLI output modes](./docs/cli-output.md) |
| IDE/test-script output | `skylos --format concise src/test.py` | Prints only `file:line` findings and exits non-zero when findings exist | [CLI Reference](https://docs.skylos.dev/cli-reference) |
| Changed-lines review | `skylos . -a --diff origin/main` | Keeps findings focused on active work instead of legacy debt | [Quality gate docs](https://docs.skylos.dev/quality-gate) |
| Runtime-assisted dead-code check | `skylos . --trace` | Uses runtime traces to reduce dynamic-code false positives | [Smart tracing](https://docs.skylos.dev/smart-tracing) |
| Local rule pack | `skylos rules init` | Scaffolds YAML rules for project-specific security and quality checks | [Custom rules](https://docs.skylos.dev/custom-rules) |
| AI-assisted review | `skylos agent scan .` | Static analysis plus optional LLM review and fix suggestions | [AI features](https://docs.skylos.dev/ai-features) |
| LLM app defense | `skylos defend .` | Finds missing AI app guardrails mapped to OWASP LLM risks | [AI defense](https://docs.skylos.dev/ai-defense) |
| Technical debt triage | `skylos debt .` | Ranks hotspots and debt trends | [Technical debt](https://docs.skylos.dev/technical-debt) |

## What Skylos Catches

| Category | Examples | Why It Matters |
|:---|:---|:---|
| Dead code | unused functions, classes, imports, package entrypoints, route handlers | reduces maintenance cost without breaking dynamic frameworks |
| Security flaws | SQL injection, XSS, SSRF, path traversal, command injection, unsafe deserialization | catches exploitable flows before code reaches main |
| Secrets | API keys, tokens, private credentials, high-entropy strings | prevents credentials from leaking through commits and PRs |
| CI/CD workflows | GitHub Actions and GitLab CI dangerous triggers, unpinned actions/includes, broad tokens, OIDC misuse, cache poisoning, mutable images | reduces CI/CD supply-chain risk before release jobs run |
| Edge deployment config | Docker Compose privileged device access, host networking, systemd root services, broad capabilities, missing sandboxing | catches repo-controlled settings that turn app bugs into device compromise |
| Quality regressions | complexity, deep nesting, duplicate branches, long functions, inconsistent returns | keeps AI-assisted refactors from adding brittle code |
| AI code mistakes | phantom security calls, missing decorators, unfinished stubs, disabled controls, network calls without timeouts | catches common hallucinated or incomplete code paths |
| LLM app risks | unsafe tool use, prompt injection exposure, missing output validation, missing rate limits | helps teams ship AI features with guardrails |

See the full [Rules Reference](https://docs.skylos.dev/rules-reference).

## How Skylos Fits

Skylos is not a replacement for every specialized scanner. It is a local-first
repo and PR checker that puts several common review checks behind one CLI.

- **Framework-aware dead code detection:** FastAPI, Django, Flask, pytest,
  SQLAlchemy, Next.js, React, package entrypoints, and common plugin patterns.
- **PR-focused output:** diff scanning, CI thresholds, GitHub annotations, and
  baselines for existing findings.
- **Local-first operation:** core static analysis does not require cloud upload
  or LLM calls.
- **AI-assisted change review:** checks for removed validation, auth, logging,
  CSRF, rate limiting, timeouts, and other guards in generated or edited code.
- **Project-specific rules:** add local YAML rules and extend prompt, credential,
  sensitive-file, and timeout dictionaries from config.
- **One command surface:** dead code, security, secrets, dependency, quality,
  technical debt, agent review, and AI defense commands share the same CLI.

## Install Options

```bash
# Core static analysis
pip install skylos

# LLM-powered agent workflows
pip install "skylos[llm]"

# All published optional extras
pip install "skylos[all]"
```

Container image:

```bash
docker pull ghcr.io/duriantaco/skylos:latest
docker run --rm -v "$PWD":/work -w /work ghcr.io/duriantaco/skylos:latest . --json --no-provenance
```

See [Installation](https://docs.skylos.dev/installation) for source installs,
container usage, and optional dependencies.

## Configure Templates And Vibe Checks

Run `skylos init` to add these sections to `pyproject.toml`:

```toml
[tool.skylos.templates]
# security = ".skylos/templates/security.md"
# quality = ".skylos/templates/quality.md"
# security_audit = ".skylos/templates/security_audit.md"
# review = ".skylos/templates/review.md"

[tool.skylos.vibe]
extra_phantom_names = ["verify_enterprise_auth"]
extra_phantom_decorators = ["tenant_admin_required"]
extra_credential_names = ["tenant_signing_secret"]
extra_network_timeout_calls = ["vendor_sdk.fetch"]
```

Template files extend Skylos' built-in prompts; they do not replace the
JSON-only output contract or untrusted-code safety rules. Vibe dictionary
extensions let teams teach Skylos about local fake-auth helpers, project
credential names, sensitive files, and network calls that must set timeouts.

## Language Support

| Language | Dead Code | Security | Quality | Notes |
|:---|:---:|:---:|:---:|:---|
| Python | Yes | Yes | Yes | strongest coverage; framework-aware static analysis and optional tracing |
| TypeScript / JavaScript | Yes | Yes | Yes | Tree-sitter parsing, package graph reachability, framework conventions |
| Java | Yes | Yes | Yes | Tree-sitter parsing and structured security-flow analysis |
| Go | Yes | Partial | Partial | dead-code and selected security benchmark coverage |
| PHP | Yes | Yes | Partial | PHP parser coverage plus taint-style security sinks and sources |
| Rust | Yes | Yes | Partial | Rust parser coverage plus security sink/source checks |
| Dart | Yes | Yes | Partial | Dart parser coverage plus selected security sinks and sources |
| C# | Yes | Yes | Partial | C# symbol coverage plus selected ASP.NET, process, SQL, HTTP, and file sinks |
| Shell | No | Yes | Partial | shell-script security checks for command injection, SSRF, and path traversal |

See [Rules Reference](https://docs.skylos.dev/rules-reference) for rule families
and scanner scope.

## Config And Deployment Support

| Surface | Files | Security Scope |
|:---|:---|:---|
| GitHub Actions | `.github/workflows/*.yml`, `.github/workflows/*.yaml`, `action.yml`, `action.yaml` | dangerous triggers, token permissions, unpinned actions, template injection, secrets, OIDC, cache, and artifact policy |
| GitLab CI | `.gitlab-ci.yml` | mutable images, unpinned includes, literal secrets, untrusted eval, Docker-in-Docker, OIDC, cache, timeout, and runner-tag policy |
| Edge Docker Compose | `compose*.yml`, `compose*.yaml`, `docker-compose*.yml`, `docker-compose*.yaml` | privileged containers, broad host device/control mounts, GPU/device runtime, and host networking |
| Edge systemd | `*.service` | root edge services, mutable `ExecStart` paths, missing sandboxing, broad capabilities, and broad device access |

## Benchmark Snapshot

Skylos has checked-in regression benchmarks for dead code, security, quality,
and agent review. These are strict regression gates, not broad proof that any
tool is universally state of the art.

| Suite | Current Skylos Result | Baseline |
|:---|:---|:---|
| Dead code regression | 16 cases, TP=36 FP=0 FN=0 TN=59, score 100.0 | Ruff score 62.67; Vulture not installed in latest local rerun |
| Security regression | 56 cases, TP=35 FP=0 FN=0 TN=23, score 100.0 | Bandit score 47.14 on Python-applicable cases |
| Quality regression | 13 cases, score 100.0 | regression gate only |
| Agent review | 25 cases, score 100.0 | regression gate only |

Frozen `golden-v0.2` highlights:

| Frozen Suite | Skylos Result | Caveat |
|:---|:---|:---|
| Dead code seeded dev | overall score 96.28; TS/JS/Go/Java score 100.0; Python score 93.33 | Python residuals are label-review items |
| Security seeded dev | overall score 96.52; full recall with one Python `urljoin` false positive | label should be reviewed |
| OWASP Java security dev | TP=105 FP=0 FN=15 TN=120, score 94.37 | request-wrapper, LDAP, XPath, and property weak-hash gaps remain |
| Quality seeded dev | TP=1 FP=0 FN=0 TN=1, score 100.0 | one seeded case only |

For methodology, commands, competitor rows, and caveats, see
[BENCHMARK.md](./BENCHMARK.md).

## Project Evidence

Skylos-assisted dead-code cleanup PRs have been merged in
[Black](https://github.com/psf/black/pull/5041),
[NetworkX](https://github.com/networkx/networkx/pull/8572),
[Optuna](https://github.com/optuna/optuna/pull/6547),
[mitmproxy](https://github.com/mitmproxy/mitmproxy/pull/8136),
[pypdf](https://github.com/py-pdf/pypdf/pull/3685),
[beets](https://github.com/beetbox/beets/pull/6473), and
[Flagsmith](https://github.com/Flagsmith/flagsmith/pull/6953). These are
accepted cleanup PRs, not project endorsements. See
[Real-World Results](./REAL_WORLD_RESULTS.md).

<a id="star-authenticity-audit"></a>

A local Astronomer scan on April 26, 2026 computed 420 stargazers and returned
**overall trust: A**. StarGuard also reported **low fake-star risk**.

## Integrations

| Integration | Link | Purpose |
|:---|:---|:---|
| GitHub Action | [GitHub Action](./action.yml) | PR gates, annotations, and CI enforcement |
| VS Code extension | [VS Code extension](./editors/vscode/README.md) | in-editor findings and AI-assisted fixes |
| MCP server | [MCP setup](https://docs.skylos.dev/mcp-server) | expose Skylos scans to AI agents and coding assistants |
| Docker image | [Installation](https://docs.skylos.dev/installation) | run Skylos without a local Python install |
| Skylos Cloud | [Cloud workflow](https://docs.skylos.dev/cloud-workflow) | optional upload and dashboard workflows |

Generate a GitHub Actions workflow from the CLI:

```bash
skylos cicd init --upload
skylos cicd init --upload --scan-path apps/api
```

The generated upload workflow uses GitHub OIDC, sends PR head commit/branch
metadata, and supports monorepo subprojects through `--scan-path`.

## Documentation Map

| Need | Read This |
|:---|:---|
| Install options, source install, and Docker | [Installation](https://docs.skylos.dev/installation) |
| First scan and core workflows | [Quick Start](https://docs.skylos.dev/quick-start) |
| CLI commands, flags, and examples | [CLI Reference](https://docs.skylos.dev/cli-reference) |
| CLI output modes, pretty reports, and TUI controls | [CLI Output Modes](./docs/cli-output.md) |
| CI setup, PR gates, annotations, and branch protection | [CI/CD](https://docs.skylos.dev/ci-cd) |
| Dead-code behavior and framework awareness | [Dead Code Detection](https://docs.skylos.dev/dead-code-detection) |
| Security scanning and taint analysis | [Security Analysis](https://docs.skylos.dev/security-analysis) |
| Rule ID prefixes and product terminology | [Rule Dictionary](./dictionary.md) |
| Agent scan, verification, remediation, and model setup | [AI Features](https://docs.skylos.dev/ai-features) |
| AI defense checks and LLM guardrails | [AI Defense](https://docs.skylos.dev/ai-defense) |
| MCP server setup | [MCP Server](https://docs.skylos.dev/mcp-server) |
| Real-world merged cleanup PRs | [Real-World Results](./REAL_WORLD_RESULTS.md) |
| Baselines, filtering, suppressions, and whitelists | [Configuration](https://docs.skylos.dev/configuration) |
| Smart tracing | [Smart Tracing](https://docs.skylos.dev/smart-tracing) |
| Rule families and language support | [Rules Reference](https://docs.skylos.dev/rules-reference) |
| Cloud uploads and dashboard flow | [CLI to Dashboard](https://docs.skylos.dev/cloud-workflow) |
| VS Code extension | [VS Code Extension](https://docs.skylos.dev/vscode) |
| Benchmarks and methodology | [BENCHMARK.md](./BENCHMARK.md) |
| Security policy | [SECURITY.md](./SECURITY.md) |
| Release process | [RELEASE_WORKFLOW.md](./RELEASE_WORKFLOW.md) |
| Contribution priorities | [ROADMAP.md](./ROADMAP.md) |
| Contributing | [CONTRIBUTING.md](./CONTRIBUTING.md) |

## Common Questions

**Does Skylos replace Bandit, Semgrep, CodeQL, or Vulture?**

No. Skylos can run alongside them. It focuses on framework-aware dead-code
signal, PR gating, AI-era regression checks, and a combined workflow across
dead code, security, secrets, and quality.

**Does Skylos require an LLM?**

No. Core static analysis runs locally without API keys. LLM features are
optional through `skylos[llm]` and agent commands.

**Can I use it only on changed code?**

Yes. Use `skylos . -a --diff origin/main` locally or configure CI gates to focus
on new findings.

**How should I handle intentional dynamic code?**

Use baselines, whitelists, inline suppressions, or runtime tracing. See the
[configuration docs](https://docs.skylos.dev/configuration) and
[smart tracing docs](https://docs.skylos.dev/smart-tracing).

## Contributing And Support

- Report security issues through [SECURITY.md](./SECURITY.md).
- Open bugs and false-positive reports with minimal repros.
- Check [ROADMAP.md](./ROADMAP.md) for useful contribution areas.
- Read [CONTRIBUTING.md](./CONTRIBUTING.md) before sending a pull request.
- See [QUALITY.md](./QUALITY.md) for project quality and gate expectations.
- Join the [Discord](https://discord.gg/Ftn9t9tErf) for community support.

## License

Skylos is licensed under the [Apache License 2.0](./LICENSE).

<!-- mcp-name: io.github.duriantaco/skylos -->
