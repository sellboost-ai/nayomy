---
name: "mindsdb/mindsdb"
description: "Connect and unify data across various platforms and databases with MindsDB as a single MCP server."
description_tr: "MindsDB MCP server ile farklı platformlar ve veritabanları arasındaki verileri bağlayın ve birleştirin."
category: "Aggregators"
repo: "mindsdb/mindsdb"
stars: 39315
url: "https://github.com/mindsdb/mindsdb"
body_length: 7807
license: "MIT"
language: "Makefile"
homepage: "https://mindshub.ai"
body_tr: |-
  <a name="readme-top"></a>
  
  
  
  <div align="center">
    <a href="https://pypi.org/project/MindsDB/" target="_blank">
      
    </a>
    <a href="https://www.python.org/downloads/" target="_blank">
      
    </a>
    <a href="https://hub.docker.com/r/mindsdb/mindsdb" target="_blank">
    
    </a>
  
    <p align="center">
      <a href="https://mindshub.ai">Dene</a>
      ·
      <a href="https://mindsdb.com/contact?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Demo için bize ulaşın</a>
      ·
      <a href="https://mindsdb.com/joincommunity?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Community Slack</a>
    </p>
  </div>
  
  ---
  
  ## MINDS PLATFORM 
  
  Minds Platform, geliştirilmiş Yapay Zeka için açık bir temel oluşturmaya adanmıştır ve gerçekten kontrol edebilecekleri, genişletebilecekleri ve her yerde (VPC, on-prem veya Cloud) dağıtabilecekleri AI sistemleri arayan geliştiriciler, işletmeler ve bireyler için tasarlanmıştır.
  
  Faydalı AI sistemlerinin iki temel yeteneğe ihtiyaç duyduğuna inanıyoruz: anlamlı işlemleri özerk olarak gerçekleştirme yeteneği **(Otomasyon)** ve doğru bilgileri bulma ve alma yeteneği **(Semantic Search)**. Ürünlerimiz bu iki temel etrafında tasarlanmıştır: 
  
  * [Minds Anton](https://github.com/mindsdb/anton) - Herhangi türde işi tamamlayabilen kendini geliştiren **Otomasyon** Agent. Neye ihtiyacınız olduğunu düz dilde söyleyin ve o oradan devam eder - raporlar oluşturur, verileri organize eder, e-postalar gönderir, API'ları çağırır, panolar oluşturur, görevleri planlar vb. 
  
  * [Minds Query Engine](https://github.com/mindsdb/engine) - **Semantic Search** query engine, yüzlerce yapılandırılmış ve yapılandırılmamış veri kaynağından büyük miktardaki verileri indexlemek ve organize etmek için kullanılır.
  
  
  # KULLANIM DURUMLAR
  
  | Kullanım Durumu | Çözüm |
  |---|---|
  | Otomatik raporlama, yinelenen workflow'lar ve operasyonel görev yürütümü | **Anton** |
  | Gömülebilir konuşmacı iş zekası | **Query Engine** |
  | Geniş bilgi tabanları arasında arama; belgeler, biletler vb | **Query Engine** |
  | Geniş bilgi tabanları arasında verileri arama ve analiz etme; belgeler, biletler vb | **Anton +  Query Engine** |
  | Satış, destek, finans ve mühendislik takımları için AI operasyon asistanları | **Anton** |
  | Hafıza, erişim, akıl yürütme ve yürütmeyi birleştiren büyük ölçekli Enterprise AI sistemleri | **Anton + Query Engine** |
  ---
  
  # HER YERDE DAĞITIM
  
  Minds Platform, aşağıdakiler arasında esnek dağıtım için tasarlanmıştır:
  
  - Cloud
  - VPC
  - On-Prem
  - Hava Yalıtımlı Ortamlar
  - Hibrit Altyapı
  
  Altyapınız, modelleriniz, izinleriniz ve verileriniz üzerinde tam kontrol sahibi olun.
  
  ## 🫴 Yardım ve destek
  
  Bir sorgu ile mi takılıp kaldınız? Bir hata mı buldunuz? Buradayız yardımcı olmak için.
  <table style="width:100%; border-collapse:collapse;">
    <tr>
      <td style="width:30%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
        Bir soru sorun
      </td>
      <td style="width:70%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
        <a href="https://mindsdb.com/joincommunity">Slack Community</a>'mize katılın.
      </td>
    </tr>
    <tr>
      <td style="width:30%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
        Hata bildirin
      </td>
      <td style="width:70%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
        Bir <a href="https://github.com/mindsdb/mindsdb/issues">GitHub Issue</a> açın. Lütfen çoğaltma adımlarını ekleyin!
      </td>
    </tr>
    <tr>
      <td style="width:30%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
        Ticari destek alın
      </td>
      <td style="width:70%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
        Kurumsal SLA'lar ve özel çözümler için <a href="https://mindsdb.com/contact?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">MindsDB Takımı</a>'na ulaşın.
      </td>
    </tr>
  </table>
  
  **Güvenlik Notu:** Bir güvenlik açığı bulursanız, lütfen halkaya açık bir issue açmayın. Raporlama talimatları için <a href="https://github.com/mindsdb/mindsdb/security">güvenlik politikamıza</a> bakın.
  
  ## 🤝 Minds Platform'a Katkıda Bulunun
  
  Minds Platform açık kaynaktır ve katkılar memnuniyetle karşılanır! Pull requestler aracılığıyla veya hataları raporlamak, yeni özellikler veya geliştirmeler önermek için issue açarak kod değişiklikleri sunabilirsiniz.
  
  
  **Nasıl katkıda bulunabilirsiniz**
  
  - Ayarlamak için <a href="https://docs.mindsdb.com/contribute/contribute?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">katkı rehberini</a> okuyun.
  - <a href="https://github.com/mindsdb/mindsdb/issues">Açık issue'lere</a> göz atın.
  - <a href="https://mindsdb.com/joincommunity">Slack</a>'deki #contributors kanalına katılın.
  - <a href="https://mindsdb.com/community?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Topluluk ödülleri ve programlarını</a> keşfedin.
  
  <div align="center">
  
  <strong>Top 100 katkıcılarımız</strong>
  
  <a href="https://github.com/mindsdb/mindsdb/graphs/contributors">
  
  </a>
  	
  [contrib.rocks](https://contrib.rocks) ile yapıldı
  </div>
  
  ## 📚 Kaynaklar
  - <a href="https://docs.mindsdb.com?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Dokümantasyon</a>
  - <a href="https://mindsdb.com/blog?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Blog</a>
  - <a href="https://mindsdb.com/events?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Etkinlikler</a>
  - <a href="https://mindsdb.com/joincommunity">Community Slack</a>
  - <a href="https://mindsdb.com/press-kit?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Marka yönergeleri</a>
  - <a href="https://mindsdb.com/contact?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">İletişim formu</a>
---

<a name="readme-top"></a>



<div align="center">
  <a href="https://pypi.org/project/MindsDB/" target="_blank">
    
  </a>
  <a href="https://www.python.org/downloads/" target="_blank">
    
  </a>
  <a href="https://hub.docker.com/r/mindsdb/mindsdb" target="_blank">
  
  </a>
<br/>
  <p align="center">
	<a href="https://docs.mindshub.ai/">Documentation</a>
    ·
    <a href="https://docs.mindshub.ai/setup.html">Try it</a>
    ·
    <a href="https://mindsdb.com/contact?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Contact us for a demo</a>
    
  </p>
</div>





# MINDS-COWORK PLATFORM 

Minds Platform is dedicated to building a general-purpose AI designed for knowledge workers — creators, strategists, and operators — and individuals seeking AI systems they can truly control to help them get work done, with full flexibility to extend and deploy anywhere (VPC, on-prem, or cloud).



## USE CASES


**For every knowledge worker**
- **Automate** any repetitive multi-step task that involves reading and writing (reports, monitoring, workflows)
- **Build** internal AI tools/artifacts without engineering and deploy to your team (apps, decks, docs, analyses)

---

## GET STARTED

### Desktop App:
Simplest way to use this is the latest build App, available on web or desktop:

- **web**: Click [here to register/login](https://mindshub.ai) the Minds-cowork app, packaged and ready for you in one click.

- **macOS**: Click [here to download](https://downloads.mindsdb.com/anton/mac/anton-latest.pkg) the Minds-cowork for MacOS.

- **Windows**: Click [here to download](https://downloads.mindsdb.com/anton/windows/anton-latest.exe) the Minds-cowork for Windows.
 

### Build from source:
**1. Clone the repository**
```bash
git clone --recurse-submodules https://github.com/mindsdb/minds-platform.git
cd minds-platform
```

**2. Install dependencies**
```bash
make setup
```

**3. Run**

| Mode | Command |
|---|---|
| Desktop app (Electron) with hot reload | `make dev` |
| Web app in browser with hot reload | `make dev-web` |
| Production build | `make build` |
| Package for macOS | `make dist-mac` |
| Package for Windows | `make dist-win` |
| Wipe all local installs + data (fresh start) | `make flush` |

> **Reset to a clean slate:** `make flush` uninstalls the local runtime (the `cowork-server` uv tool and the `backend/*/.venv`s) **and** deletes app state in `~/.anton` (provider keys) and `~/.cowork` (database, hermes, projects). Use it to test the from-scratch install flow or recover from a broken install. ⚠️ This deletes your conversations and saved keys. It prompts for confirmation; pass `FORCE=1` to skip it. The next `make setup` or app launch reinstalls everything.

### Working on feature branches (submodules)

This repo is a superproject that pins each module (`frontend`, `backend/core_api`, `backend/core_agent`, `backend/data-vault`) to a commit. To work on module branches without polluting `git status` or fighting over pins:

**1. Pick your branches** in a gitignored `dev.env` (copy the template):
```bash
cp dev.env.example dev.env      # then set REF=feat/my-thing (or per-module API_REF=…)
```

**2. `make` follows it** — one knob, both run paths:

| Command | What it does |
|---|---|
| `make use` | check out your `dev.env` refs across all submodules |
| `make dev` / `make dev-web` | run the local module source on those branches (hot reload) |
| `make server` + `make app` | run the desktop app against your branch's server |
| `make refs` | show which refs the next run will use |
| `make baseline` | reset submodules to the pinned commits |
| `make pin` | record the current submodule commits as the superproject's pins (one deliberate commit) |

Submodules are configured with `ignore = all`, so your branch work never shows up as superproject changes — the parent `git status` stays clean. Pins move **only** via `make pin`. See [`CLAUDE.md`](CLAUDE.md) for the full workflow.

---

## DEPLOY ANYWHERE

Minds Platform is designed for flexible deployment across:

- Cloud
- VPC
- On-Prem
- Air-Gapped Environments
- Hybrid Infrastructure

Maintain full control over your infrastructure, models, permissions, and data.

## 🫴 Help and support

Stuck on a query? Found a bug? We’re here to help.
<table style="width:100%; border-collapse:collapse;">
  <tr>
    <td style="width:30%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
      Ask a question
    </td>
    <td style="width:70%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
      Join our <a href="https://mindsdb.com/joincommunity">Slack Community</a>.
    </td>
  </tr>
  <tr>
    <td style="width:30%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
      Report a bug
    </td>
    <td style="width:70%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
      Open a <a href="https://github.com/mindsdb/mindsdb/issues">GitHub Issue</a>. Please include reproduction steps!
    </td>
  </tr>
  <tr>
    <td style="width:30%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
      Get commercial support
    </td>
    <td style="width:70%; border:1px solid #d0d7de; padding:12px; vertical-align:top;">
      Contact the <a href="https://mindsdb.com/contact?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">MindsDB Team</a> for enterprise SLAs and custom solutions.
    </td>
  </tr>
</table>

**Security Note:** If you find a security vulnerability, please do not open a public issue. Refer to our <a href="https://github.com/mindsdb/mindsdb/security">security policy</a> for reporting instructions.

## 🤝 Contribute to Minds Platform

Minds Platform is open source and contributions are welcome! You can submit code changes through pull requests or by opening issues to report bugs, suggest new features, or enhancements.


**How to contribute**

- Read the <a href="https://docs.mindsdb.com/contribute/contribute?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">contribution guide</a> to get set up.
- Browse <a href="https://github.com/mindsdb/mindsdb/issues">open issues</a>.
- Join the #contributors channel in <a href="https://mindsdb.com/joincommunity">Slack</a>.
- Explore <a href="https://mindsdb.com/community?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">community rewards and programs</a>.

<div align="center">

<strong>Our top 100 contributors</strong>

<a href="https://github.com/mindsdb/mindsdb/graphs/contributors">

</a>
	
Made with [contrib.rocks](https://contrib.rocks)
</div>

## 📚 Resources
- <a href="https://docs.mindsdb.com?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Documentation</a>
- <a href="https://mindsdb.com/blog?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Blog</a>
- <a href="https://mindsdb.com/events?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Events</a>
- <a href="https://mindsdb.com/joincommunity">Community Slack</a>
- <a href="https://mindsdb.com/press-kit?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Brand guidelines</a>
- <a href="https://mindsdb.com/contact?utm_medium=community&utm_source=github&utm_campaign=mindsdb%20repo">Contact form</a>
