---
name: "zinja-coder/apktool-mcp-server"
description: "APKTool MCP Server is a MCP server for the Apk Tool to provide automation in reverse engineering of Android APKs."
category: "Security"
repo: "zinja-coder/apktool-mcp-server"
stars: 452
url: "https://github.com/zinja-coder/apktool-mcp-server"
body_length: 11810
license: "Apache-2.0"
language: "Python"
body_tr: |-
  <div align="center">

  # apktool-mcp-server (Zin's Reverse Engineering MCP Suite'nin Parçası)

  ⚡ Claude gibi LLM'ler kullanarak Android APK'ları analiz etmek için apktool üzerine inşa edilmiş tam otomatik MCP sunucusu — güvenlik açıklarını ortaya çıkarın, manifestleri ayrıştırın ve tersine mühendislik yapın.

  ![GitHub contributors apktool-mcp-server](https://img.shields.io/github/contributors/zinja-coder/apktool-mcp-server)
  ![GitHub all releases](https://img.shields.io/github/downloads/zinja-coder/apktool-mcp-server/total)
  ![GitHub release (latest by SemVer)](https://img.shields.io/github/downloads/zinja-coder/apktool-mcp-server/latest/total)
  ![Latest release](https://img.shields.io/github/release/zinja-coder/apktool-mcp-server.svg)
  ![Python 3.10+](https://img.shields.io/badge/python-3%2E10%2B-blue)
  [![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

  </div>

  <!-- Hâlâ erken geliştirme aşamasındadır, bu nedenle hataları, çöküşleri ve mantıksal hataları bekleyin.-->

  <div align="center">
      
  </div>

  <!--![apktool-mcp-server-banner.png](https://raw.githubusercontent.com/zinja-coder/apktool-mcp-server/HEAD/docs/assets/apktool-mcp-server-banner.png)-->

  AI araçları kullanılarak oluşturulmuş görsel.

  ---

  ## 🤖 apktool-mcp-server nedir?

  **apktool-mcp-server**, [Apk Tool](https://github.com/iBotPeaches/apktool) için [Model Context Protocol (MCP)](https://github.com/anthropic/mcp) ile doğrudan entegre olan ve Claude gibi LLM'lerle **canlı tersine mühendislik desteği** sağlayan bir MCP sunucusudur.

  Şöyle düşünün: "Decompile → Context-Aware Code Review → AI Önerileri" — tümü gerçek zamanda.

  Demo izleyin!

  https://github.com/user-attachments/assets/d50251b8-6b1c-4341-b18e-ae54eb24a847

  - **CTF'leri Çözme**

  https://github.com/user-attachments/assets/c783a604-a636-4e70-9fa8-37e3d219b20b


  ## Zin MCP Suite'deki Diğer Projeler
   - **[JADX-AI-MCP](https://github.com/zinja-coder/jadx-ai-mcp)**
   - **[JADX-MCP-Server](https://github.com/zinja-coder/jadx-mcp-server)**
   - **[ZIN-MCP-Client](https://github.com/zinja-coder/zin-mcp-client)**

  ## Mevcut MCP Araçları

  Aşağıdaki MCP araçları mevcuttur:

  - `build_apk()` — Deşifre edilmiş bir APKTool Projesi'nden APK oluşturun.
  - `get_manifest()` — Deşifre edilmiş bir APK projesinden AndroidManifest.xml içeriğini alın. 
  - `get_apktool_yml()` — Deşifre edilmiş bir APK projesinden apktool.yml bilgisini alın. 
  - `list_smali_directories()` — Projede tüm smali dizinlerini listeleyin. 
  - `list_smali_files()` — Belirli bir smali dizinindeki smali dosyalarını listeleyin, isteğe bağlı olarak paket önekine göre filtrelenebilir.
  - `get_smali_file()` — Belirli bir smali dosyasının içeriğini sınıf adına göre alın. 
  - `modify_smali_file()` — Belirli bir smali dosyasının içeriğini değiştirin. 
  - `list_resources()` — Projede kaynakları listeleyin, isteğe bağlı olarak kaynak türüne göre filtrelenebilir. 
  - `get_resource_file()` — Belirli bir kaynak dosyasının içeriğini alın. 
  - `modify_resource_file()` — Belirli bir kaynak dosyasının içeriğini değiştirin. 
  - `search_in_file()` — Belirtilen uzantılara sahip dosyalarda desen arayın. 
  - `clean_project()` — Yeniden oluşturmaya hazırlamak için proje dizinini temizleyin.
  - `decode_apk()` — APKTool kullanarak bir APK dosyasını deşifre edin, kaynakları ve smali kodunu çıkarın. 

  ---

  ## 🗒️ Örnek İstemler


  ### 🔍 Temel Kod Anlama

  - "dvac projesi için tüm smali dizinlerini listele."

  - "Bana dvac projesinde com.vulnerable.component paket önekinin altındaki tüm smali dosyalarını göster."

  - "com.vulnerable.component.MainActivity sınıfı için smali kodunu al."

  - "MainActivity.smali'yi önceki sürümüyle karşılaştır ve farklılıkları göster."

  - "dvac projesinin smali dosyalarında startActivity kullanımını ara."

  ### 🛡️ Güvenlik Açığı Algılama

  - "dvac AndroidManifest.xml'de bildirilen izinleri analiz et ve tehlikeli olanları işaretle."

  - "Projede tüm .xml ve .smali dosyalarında sabit kodlanmış URL'ler veya IP'ler ara."

  - "smali dosyalarında PendingIntent.getActivity'nin tüm kullanımlarını bulun."

  - "dvac'ın AndroidManifest.xml'de dışa aktarılan aktiviteleri veya alıcıları kontrol edin."

  - "android.permission.SEND_SMS veya READ_CONTACTS'e erişen tüm smali dosyalarını listeleyin."

  ### 🛠️ Ters Mühendislik Yardımcıları

  - "Bu APK'yı deşifre et: dvac.apk ve dvac adında bir proje oluştur."

  - "test-harness adında yeni bir APKTool projesi oluştur."

  - "Yeniden oluşturmadan önce dvac projesini temizle."

  - "dvac projesinden DEX dosyalarını harici analiz için çıkar."

  - "MainActivity.smali'yi değiştir onCreate()'nin başına bir log satırı ekle."

  ### 📦 Statik Analiz

  - "dvac projesinden tam AndroidManifest.xml'i al."

  - "dvac projesi için apktool.yml içeriğini göster."

  - "Türü layout olan tüm kaynak dosyalarını listele."

  - "Tüm kaynak ve smali dosyalarında password sözcüğünü ara."

  - "Hangi izinlerin kullanıldığını kontrol et ve bunları tipik over-permissioning risklerine karşı karşılaştır."

  ### 🤖 AI Kod Değişiklikleri

  - "MainActivity.smali'deki onCreate() metodunu bir toast mesajı eklemek için değiştir."

  - "strings.xml'de tüm http:// bağlantılarını https:// ile değiştir."

  - "AndroidManifest.xml'de tüm aktivitelere android:exported=false niteliğini ekle."

  - "LoginManager.smali'deki validateLogin metodunu her zaman true döndürecek şekilde düzelt."

  - "MainActivity.smali'deki her metoda logging ifadeleri ekle."

  ### 📄 Belgelendirme ve Meta Veriler

  - "Çalışma alanında deşifre edilmiş tüm APKTool projelerini listele."

  - "apktool.yml yapılandırmasını bana göster, sürümü, orijinal APK meta verilerini ve sıkıştırma ayarlarını gözden geçirmek için."

  - "ADB üzerinden bağlı olan tüm Android cihazlarını al. (ADB MCP Server'a geçirilecek.)"

  - "dvac projesinin apktool.yml'sinden meta veriler hakkında bilgi al."

  - "Şu anda sunucuda yüklü olan APKTool sürümünü kontrol et."
  ---

  ## 🛠️ Başlarken 
  ### 1. Releases'ten İndir: https://github.com/zinja-coder/apktool-mcp-server/releases

  ```bash
  # 0. apktool'u indir ve kur
  https://apktool.org/docs/install

  # 1. apktool'un ortam değişkenlerinde doğru şekilde yapılandırılıp yapılandırılmadığını test et
  $ apktool -version

  # 2. apktool-mcp-server-<version>.zip'i indir
  https://github.com/zinja-coder/apktool-mcp-server/releases

  # 3. 
  unzip apktool-mcp-server-<version>.zip

  ├apktool-mcp-server/
    ├── apktool_mcp_server.py
    ├── requirements.txt
    ├── README.md
    ├── LICENSE

  # 4. apktool-mcp-server dizinine git
  cd apktool-mcp-server

  # 5. Bu proje bağımlılık yönetimi için pip yerine uv - https://github.com/astral-sh/uv kullanır.
      ## a. uv'yi kur (henüz yoksa)
  curl -LsSf https://astral.sh/uv/install.sh | sh
      ## b. İSTEĞE BAĞLI, herhangi bir nedenle apktool-mcp-server'de bağımlılık hataları alırsanız, ortamı kurun
  uv venv
  source .venv/bin/activate  # veya Windows'ta .venv\Scripts\activate
      ## c. İSTEĞE BAĞLI Bağımlılıkları kur
  uv pip install httpx fastmcp

  # apktool-mcp-server kurulumu tamamlandı.
  ```

  ## 2. Ollama ve Zin MCP Client Kullanarak Yerel LLM'de Çalıştırma - Önerilen

  <div align="center">
      <a href="https://github.com/zinja-coder/zin-mcp-client">
      
      </a>
  </div>

  ⚡ STDIO MCP Sunucuları için Hafif, Hızlı, Basit, CLI Tabanlı MCP İstemcisi; yerel LLM'leriniz ile Ollama'da çalışan MCP Sunucuları arasında boşluğu doldurmak ve köprü sağlamak için.

  Şimdi Kontrol Et: https://github.com/zinja-coder/zin-mcp-client

  Demo: Yakında...

  ## 🤖 3. Claude Desktop Kurulumu

  Claude Desktop'ın MCP etkin olacak şekilde çalıştığından emin olun.

  Örneğin, Kali Linux için aşağıdakini kullandım: https://github.com/aaddrick/claude-desktop-debian

  MCP sunucusunu yapılandırın ve LLM dosyasına ekleyin:
  ```bash
  nano ~/.config/Claude/claude_desktop_config.json
  ```

     - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
     - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

  Ve aşağıdaki içeriği içine ekleyin:
  ```json
  {
      "mcpServers": {
          "apktool-mcp-server": {
              "command": "/<path>/<to>/uv", 
              "args": [
                  "--directory",
                  "</PATH/TO/>apktool-mcp-server/",
                  "run",
                  "apktool_mcp_server.py"
              ]
          }
      }
  }
  ```

  Şunları değiştirin:

  - `path/to/uv` ile `uv` çalıştırılabilir dosyasının gerçek yolu
  - `path/to/apktool-mcp-server` ile bu depoyu klonladığınız yere giden mutlak yol

  Ardından, kodu gözden geçirin ve yerleşik entegrasyon kullanarak gerçek zamanlı kod inceleme istekleriyle etkileşime geçin.

  ## 4. Cherry Studio Kurulumu

  MCP aracını Cherry Studio'da yapılandırmak istiyorsanız, aşağıdaki yapılandırmaya başvurabilirsiniz.
  - Tür: stdio
  - komut: uv
  - argüman:
  ```bash
  --directory
  path/to/apktool-mcp-server
  run
  apktool_mcp_server.py
  ```
  - `path/to/apktool-mcp-server` ile bu depoyu klonladığınız yere giden mutlak yol

  ## Hataları, sorunları, özellik önerisini, performans sorununu, genel soruyu, belgelendirme sorununu bildirmek için.
   - Lütfen ilgili şablonla bir konu açın.

   - Claude Desktop İstemcisinde test edilmiştir, diğer AI'lar için destek yakında test edilecektir!

  ## 🙏 Teşekkürler

  Bu proje, harika bir açık kaynaklı Android tersine mühendislik aracı olan ve [@iBotPeaches](https://github.com/iBotPeaches) tarafından oluşturulan ve yönetilen [Apktool](https://github.com/iBotPeaches/apktool) için bir MCP Sunucusudur. Tüm temel APK deşifre ve kaynak işleme mantığı onlara aittir. Ben bunu sadece AI yetenekleri ile MCP sunucusunu desteklemek için genişlettim.

  [📎 Orijinal README (Apktool)](https://github.com/iBotPeaches/apktool)

  Apktool'un orijinal README.md dosyası referans ve kredi için bu depo içinde yer almaktadır.

  Ayrıca Debian tabanlı Linux için Claude masaüstünü geliştirmek için [@aaddrick](https://github.com/aaddrick)'ye çok teşekkürler.

  Ve son olarak, Model Context Protocol'ü geliştirdiği için [@anthropics](https://github.com/anthropics) ve [@FastMCP](https://github.com/jlowin/fastmcp) ekibine teşekkürler.

  Ve bu gibi projeleri mümkün kılan kütüphaneler ve bağımlılıklar sağlayan tüm açık kaynak proje geliştirici ve katılımcılarına.

  ## 📄 Lisans

  apktool-mcp-server ve tüm ilgili projeler Apache 2.0'ı devralır 

  ## ⚖️ Yasal Uyarı

  **Sorumluluk Reddi**

  `apktool-mcp-server` ve bu proje kapsamındaki tüm ilgili araçlar, eğitim, araştırma ve etik güvenlik değerlendirmesi amaçları için kesin olarak tasarlanmıştır. Bunlar hiçbir garanti olmadan sağlanır, açık veya zımni. Kullanıcılar, bu araçların kullanımının tüm geçerli yasalar, yönetmelikleri ve etik yönergelere uygun olduğundan emin olmaktan tamamen sorumludur.

  `apktool-mcp-server` kullanarak, bunları yalnızca sahip olduğunuz veya analiz etme konusunda açık izniniz olan uygulamalar gibi test yetkisine sahip olduğunuz ortamlarda kullanacağınızı kabul edersiniz. Bu araçların yetkisiz tersine mühendislik, fikri mülkiyet haklarının ihlali veya kötü amaçlı aktivite için kötüye kullanılması kesinlikle yasaktır.

  `apktool-mcp-server` geliştiricileri, bu araçların kullanımından veya kötüye kullanımından kaynaklanan herhangi bir hasar, veri kaybı, yasal sonuç veya diğer sonuçlardan sorumlu tutulamaz. Kullanıcılar, eylemlerinin ve kullanımlarının neden olduğu herhangi bir etkinin tam sorumluluğunu üstlenirler.

  Sorumlu bir şekilde kullanın. Fikri mülkiyete saygı gösterin. Etik hacking uygulamalarını takip edin.

  ---

  ## 🙌 Katkı Yapın veya Destekleyin

  ## Katkı Yapma

  [![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTE.md)

  - Faydalı buldum mu? Ona ⭐️ ver
  - Fikirler var mı? Bir [issue](https://github.com/zinja-coder/apktool-mcp-server/issues) açın veya PR gönderin
  - Üzerine bir şey mi inşa ettiniz? Bana DM gönderin veya bahsedin — README'ye ekleyeceğim!

  ---
  ## Denetlendi ve Değerlendirme Rozeti Aldı

  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/zinja-coder-apktool-mcp-server-badge.png)](https://mseep.ai/app/zinja-coder-apktool-mcp-server)

  Mseep.net'e denetleme ve Değerlendirme Rozeti sağladığı için teşekkürler.
  ---

  Tersine mühendislik ve AI toplulukları için ❤️ ile yapılmıştır.
---

<div align="center">

# apktool-mcp-server (Part of Zin's Reverse Engineering MCP Suite)

⚡ Fully automated MCP server built on top of apktool to analyze Android APKs using LLMs like Claude — uncover vulnerabilities, parse manifests, and reverse engineer effortlessly.

![GitHub contributors apktool-mcp-server](https://img.shields.io/github/contributors/zinja-coder/apktool-mcp-server)
![GitHub all releases](https://img.shields.io/github/downloads/zinja-coder/apktool-mcp-server/total)
![GitHub release (latest by SemVer)](https://img.shields.io/github/downloads/zinja-coder/apktool-mcp-server/latest/total)
![Latest release](https://img.shields.io/github/release/zinja-coder/apktool-mcp-server.svg)
![Python 3.10+](https://img.shields.io/badge/python-3%2E10%2B-blue)
[![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

</div>

<!-- It is a still in early stage of development, so expects bugs, crashes and logical erros.-->

<div align="center">
    
</div>

<!--![apktool-mcp-server-banner.png](https://raw.githubusercontent.com/zinja-coder/apktool-mcp-server/HEAD/docs/assets/apktool-mcp-server-banner.png)-->

Image generated using AI tools.

---

## 🤖 What is apktool-mcp-server?

**apktool-mcp-server** is a MCP server for the [Apk Tool](https://github.com/iBotPeaches/apktool) that integrates directly with [Model Context Protocol (MCP)](https://github.com/anthropic/mcp) to provide **live reverse engineering support with LLMs like Claude**.

Think: "Decompile → Context-Aware Code Review → AI Recommendations" — all in real time.

Watch the demo!

https://github.com/user-attachments/assets/d50251b8-6b1c-4341-b18e-ae54eb24a847

- **Solving the CTFs**



https://github.com/user-attachments/assets/c783a604-a636-4e70-9fa8-37e3d219b20b


## Other projects in Zin MCP Suite
 - **[JADX-AI-MCP](https://github.com/zinja-coder/jadx-ai-mcp)**
 - **[JADX-MCP-Server](https://github.com/zinja-coder/jadx-mcp-server)**
 - **[ZIN-MCP-Client](https://github.com/zinja-coder/zin-mcp-client)**

## Current MCP Tools

The following MCP tools are available:

- `build_apk()` — Build an APK from a decoded APKTool Project.
- `get_manifest()` — Get the AndroidManifest.xml content from a decoded APK project. 
- `get_apktool_yml()` — Get apktool.yml information from a decoded APK project. 
- `list_smali_directories()` — List all smali directories in a project. 
- `list_smali_files()` — List smali files in a specific smali directory, optinally filtered by package prefix.
- `get_smali_file()` — Get content of a specific smali file by class name. 
- `modify_smali_file()` — Modify the content of a specific smali file. 
- `list_resources()` — List resources in a project, optionally filtered by resource type. 
- `get_resource_file()` — Get Content of a specific resource file. 
- `modify_resource_file()` — Modify the content of a specific resource file. 
- `search_in_file()` — Search for a pattern in files with specified extensions. 
- `clean_project()` — Clean a project directory to prepare for rebuilding.
- `decode_apk()` — Decode an APK file using APKTool, extracting resources and smali code. 

---

## 🗒️ Sample Prompts


### 🔍 Basic Code Understanding

- “List all smali directories for the dvac project.”

- “Show me all the smali files under the package prefix com.vulnerable.component in the dvac project.”

- “Get the smali code for the class com.vulnerable.component.MainActivity.”

- “Compare MainActivity.smali with its previous version and show differences.”

- “Search for usage of startActivity in smali files of dvac project.”

### 🛡️ Vulnerability Detection

- “Analyze declared permissions in the dvac AndroidManifest.xml and flag dangerous ones.”

- “Search for hardcoded URLs or IPs in all .xml and .smali files in the project.”

- “Find all uses of PendingIntent.getActivity in smali files.”

- “Check for exported activities or receivers in dvac’s AndroidManifest.xml.”

- “List all smali files that access android.permission.SEND_SMS or READ_CONTACTS.”

### 🛠️ Reverse Engineering Helpers

- “Decode this APK: dvac.apk and create a project called dvac.”

- “Create a new APKTool project called test-harness.”

- “Clean the dvac project before rebuild.”

- “Extract DEX files from dvac project for external analysis.”

- “Modify MainActivity.smali to insert a log line at the beginning of onCreate().”

### 📦 Static Analysis

- “Get the complete AndroidManifest.xml from dvac project.”

- “Show the contents of apktool.yml for the dvac project.”

- “List all resource files of type layout.”

- “Search for the word password in all resource and smali files.”

- “Check which permissions are used and compare them against typical over-permissioning risks.”

### 🤖 AI Code Modification

- “Modify the onCreate() method in MainActivity.smali to add a toast message.”

- “Replace all http:// links with https:// in strings.xml.”

- “Add the android:exported=false attribute to all activities in the AndroidManifest.xml.”

- “Patch the method validateLogin in LoginManager.smali to always return true.”

- “Add logging statements to every method in MainActivity.smali.”

### 📄 Documentation & Metadata

- “List all decoded APKTool projects in the workspace.”

- “Show me the apktool.yml config to review the version, original APK metadata, and compression settings.”

- “Get all available Android devices connected via ADB. (To be migrated to ADB MCP Server.)”

- “Get metadata about the project dvac from its apktool.yml.”

- “Check which APKTool version is currently installed on the server.”
---

## 🛠️ Getting Started 
### 1. Downlaod from Releases: https://github.com/zinja-coder/apktool-mcp-server/releases

```bash
# 0. Download and install apktool
https://apktool.org/docs/install

# 1. Test whether apktool has been correctly configured in the environment variables
$ apktool -version

# 2. Download the apktool-mcp-server-<version>.zip
https://github.com/zinja-coder/apktool-mcp-server/releases

# 3. 
unzip apktool-mcp-server-<version>.zip

├apktool-mcp-server/
  ├── apktool_mcp_server.py
  ├── requirements.txt
  ├── README.md
  ├── LICENSE

# 4. Navigate to apktool-mcp-server directory
cd apktool-mcp-server

# 5. This project uses uv - https://github.com/astral-sh/uv instead of pip for dependency management.
    ## a. Install uv (if you dont have it yet)
curl -LsSf https://astral.sh/uv/install.sh | sh
    ## b. OPTIONAL, if for any reasons, you get dependecy errors in apktool-mcp-server, Set up the environment
uv venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows
    ## c. OPTIONAL Install dependencies
uv pip install httpx fastmcp

# The setup for apktool-mcp-server is done.
```

## 2. Running on Local LLM Using Ollama and Zin MCP Client - Recommended

<div align="center">
    <a href="https://github.com/zinja-coder/zin-mcp-client">
    
    </a>
</div>

⚡ Lightweight, Fast, Simple, CLI-Based MCP Client for STDIO MCP Servers, to fill the gap and provide bridge between your local LLMs running Ollama and MCP Servers.

Check Now: https://github.com/zinja-coder/zin-mcp-client

Demo: Coming soon...

## 🤖 3. Claude Desktop Setup

Make sure Claude Desktop is running with MCP enabled.

For instance, I have used following for Kali Linux: https://github.com/aaddrick/claude-desktop-debian

Configure and add MCP server to LLM file:
```bash
nano ~/.config/Claude/claude_desktop_config.json
```

   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

And following content in it:
```json
{
    "mcpServers": {
        "apktool-mcp-server": {
            "command": "/<path>/<to>/uv", 
            "args": [
                "--directory",
                "</PATH/TO/>apktool-mcp-server/",
                "run",
                "apktool_mcp_server.py"
            ]
        }
    }
}
```

Replace:

- `path/to/uv` with the actual path to your `uv` executable
- `path/to/apktool-mcp-server` with the absolute path to where you cloned this
repository

Then, navigate code and interact via real-time code review prompts using the built-in integration.

## 4. Cherry Studio Setup

If you want to configure the MCP tool in Cherry Studio, you can refer to the following configuration.
- Type: stdio
- command: uv
- argument:
```bash
--directory
path/to/apktool-mcp-server
run
apktool_mcp_server.py
```
- `path/to/apktool-mcp-server` with the absolute path to where you cloned this
repository

## To report bugs, issues, feature suggestion, Performance issue, general question, Documentation issue.
 - Kindly open an issue with respective template.

 - Tested on Claude Desktop Client, support for other AI will be tested soon!

## 🙏 Credits

This project is a MCP Server for [Apktool](https://github.com/iBotPeaches/apktool), an amazing open-source Android reverse engineering tool created and maintained by [@iBotPeaches](https://github.com/iBotPeaches). All core APK decoding and resource processing logic belongs to them. I have only extended it to support my MCP server with AI capabilities.

[📎 Original README (Apktool)](https://github.com/iBotPeaches/apktool)

The original README.md from Apktool is included here in this repository for reference and credit.

Also huge thanks to [@aaddrick](https://github.com/aaddrick) for developing Claude desktop for Debian based Linux.

And in last, thanks to [@anthropics](https://github.com/anthropics) for developing the Model Context Protocol and [@FastMCP](https://github.com/jlowin/fastmcp) team.

And all open source project maintainers and contributos which provies libraries and dependencies to make project like this possible.

## 📄 License

apktool-mcp-server and all related projects inherits the Apache 2.0 

## ⚖️ Legal Warning

**Disclaimer**

The tools `apktool-mcp-server` and all related tools under this project are intended strictly for educational, research, and ethical security assessment purposes. They are provided "as-is" without any warranties, expressed or implied. Users are solely responsible for ensuring that their use of these tools complies with all applicable laws, regulations, and ethical guidelines.

By using `apktool-mcp-server`, you agree to use them only in environments you are authorized to test, such as applications you own or have explicit permission to analyze. Any misuse of these tools for unauthorized reverse engineering, infringement of intellectual property rights, or malicious activity is strictly prohibited.

The developers of `apktool-mcp-server` shall not be held liable for any damage, data loss, legal consequences, or other consequences resulting from the use or misuse of these tools. Users assume full responsibility for their actions and any impact caused by their usage.

Use responsibly. Respect intellectual property. Follow ethical hacking practices.

---

## 🙌 Contribute or Support

## Contributing

[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTE.md)

- Found it useful? Give it a ⭐️
- Got ideas? Open an [issue](https://github.com/zinja-coder/apktool-mcp-server/issues) or submit a PR
- Built something on top? DM me or mention me — I’ll add it to the README!

---
## Audited and Received Assessment Badge

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/zinja-coder-apktool-mcp-server-badge.png)](https://mseep.ai/app/zinja-coder-apktool-mcp-server)

Thank you Mseep.net for auditing and providing Assessment Badge.
---

Built with ❤️ for the reverse engineering and AI communities.
