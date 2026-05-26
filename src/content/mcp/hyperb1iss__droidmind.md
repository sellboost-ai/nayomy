---
name: "hyperb1iss/droidmind"
description: "Control Android devices with AI through MCP, enabling device control, debugging, system analysis, and UI automation with a comprehensive security framework."
category: "Developer Tools"
repo: "hyperb1iss/droidmind"
stars: 400
url: "https://github.com/hyperb1iss/droidmind"
body_length: 7484
license: "Apache-2.0"
language: "Python"
homepage: "https://hyperb1iss.github.io/droidmind/"
body_tr: |-
  <div align="center">

  # 🤖 DroidMind 🧠



  [![Python 3.13](https://img.shields.io/badge/python-3.13-9D00FF.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/downloads/)
  [![License](https://img.shields.io/badge/license-Apache_2.0-FF00FF.svg?style=for-the-badge&logo=apache&logoColor=white)](LICENSE)
  [![Status](https://img.shields.io/badge/status-active_development-39FF14.svg?style=for-the-badge&logo=githubactions&logoColor=white)](docs/plan.md)
  [![Code Style](https://img.shields.io/badge/code_style-ruff-00FFFF.svg?style=for-the-badge&logo=ruff&logoColor=white)](https://github.com/astral-sh/ruff)
  [![Type Check](https://img.shields.io/badge/type_check-pyright-FFBF00.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/microsoft/pyright)
  [![MCP](https://img.shields.io/badge/protocol-MCP-E6E6FA.svg?style=for-the-badge&logo=anthropic&logoColor=white)](https://modelcontextprotocol.io/)
  [![Android](https://img.shields.io/badge/platform-android-A4C639.svg?style=for-the-badge&logo=android&logoColor=white)](https://www.android.com/)
  [![Docs](https://img.shields.io/badge/docs-online-FF9E80.svg?style=for-the-badge&logo=gitbook&logoColor=white)](https://hyperb1iss.github.io/droidmind/)

  **Model Context Protocol aracılığıyla AI ile Android cihazlarını kontrol edin**

  </div>

  DroidMind, AI asistanları ile Android cihazları arasında güçlü bir köprü olup, doğal dil aracılığıyla kontrol, debugging ve sistem analizi sağlar. Model Context Protocol (MCP) uygulanarak, DroidMind, AI modellerinin ADB üzerinden Android cihazlarıyla güvenli ve yapılandırılmış bir şekilde doğrudan etkileşim kurmasını sağlar. Agentic coding workflow'unun bir parçası olarak kullanıldığında, DroidMind asistanınızın cihazınızla doğrudan döngüde olmak üzere oluşturmak ve debug etmesini sağlar.

  ## 💫 Temel Özellikler

  DroidMind, AI asistanlarını şu özelliklere sahip kılar:

  - 📱 **Cihazları Yönet**: USB/TCP-IP üzerinden bağlan, cihazları listele, özellikleri görüntüle ve yeniden başlat.
  - 📊 **Sistemleri Analiz Et**: Loglar'a erişim (logcat, ANR, crash, pil), bug raporlarını yakala ve heap'i döküt.
  - 📂 **Dosyaları İşle**: Cihaz dosyalarını ve dizinlerini gözat, oku, yaz, gönder, çek, sil ve yönet.
  - 📦 **Uygulamaları Kontrol Et**: Uygulamaları kur, kaldır, başlat, durdur, verileri temizle ve uygulama detaylarını (manifest, izinler, aktiviteler) incele.
  - 🖼️ **UI'yı Otomatikleştir**: Dokunuş, kaydırma, metin girdisi ve tuş basışı gerçekleştir.
  - 🐚 **Shell Komutlarını Çalıştır**: Güvenlik bilincine sahip bir framework ile ADB shell komutlarını çalıştır.
  - 🔒 **Güvenli İşlem Yap**: Komut doğrulaması, risk değerlendirmesi ve sanitizasyondan yararlan.
  - 💬 **Sorunsuz İntegrasyon**: Herhangi bir MCP uyumlu istemci (Claude, Cursor, Cline, vb.) ile bağlan.

  Yeteneklerin detaylı listesi için **[Kullanıcı Kılavuzu](docs/user_manual/index.md)** ve **[MCP Referansı](docs/mcp-reference.md)** bölümüne bakın.

  ## 🚀 Başlarken

  ### IDE'ler için Hızlı Başlangıç (`uvx` ile Sıfır Kurulum)

  DroidMind'ı bir MCP uyumlu IDE (Cursor gibi) ile entegre etmenin en hızlı yolu, `uvx` kullanarak doğrudan GitHub repository'sinden çalıştırmak için yapılandırmaktır. Bu yöntem **DroidMind'ı manuel olarak klonlamak veya kurmak gerekmez**.

  IDE'nizin MCP yapılandırmasına aşağıdakini ekleyin (örneğin Cursor için `.cursor/mcp.json`):

  ```json
  {
    "mcpServers": {
      "droidmind": {
        "command": "uvx",
        "args": [
          "--from",
          "git+https://github.com/hyperb1iss/droidmind",
          "droidmind",
          "--transport",
          "stdio" // Çoğu IDE entegrasyonu için varsayılan ve tercih edilen mod
        ]
      }
    }
  }
  ```

  IDE'niz isteğe bağlı olarak DroidMind'ı başlatmak için yapılandırılır. Bu kurulumun tam talimatları **[Hızlı Başlangıç Kılavuzu](docs/quickstart.md#1-configure-your-ide-to-run-droidmind-via-uvx)** içinde yer almaktadır.

  ### Gereksinimler

  - Python 3.13 (3.14 henüz desteklenmiyor)
  - `uv` (Python paket yöneticisi)
  - USB debugging etkinleştirilmiş Android cihazı
  - ADB (Android Debug Bridge) yüklü ve sistem PATH'inde

  ### Kurulum

  `uvx` ile hızlı IDE entegrasyonu (Hızlı Başlangıç'ta ele alınan), kaynaktan manuel kurulum veya Docker kullanımı da dahil olmak üzere DroidMind'ı ayarlama hakkında detaylı talimatlar için lütfen **[Kurulum Kılavuzu](docs/installation.md)** bölümüne bakın.

  ### DroidMind'ı Çalıştırma

  DroidMind'ı nasıl çalıştıracağınız, kurulumunuza bağlıdır:

  - **IDE Entegrasyonu (`uvx` üzerinden)**: IDE'niz, MCP ayarlarında (örneğin `mcp.json`) yapılandırıldığı şekilde DroidMind'ı otomatik olarak yönetir. [Hızlı Başlangıç Kılavuzu](docs/quickstart.md) bölümüne bakın.
  - **Manuel Kurulum**: Kaynaktan yükledikten sonra, DroidMind'ı doğrudan çalıştırabilirsiniz.
    - **Stdio (doğrudan terminal etkileşimi veya bazı IDE kurulumları için):**
      ```bash
      droidmind --transport stdio
      ```
    - **SSE (web UI'ları veya Claude Desktop gibi AI asistanları için):**
      ```bash
      droidmind --transport sse
      ```
      Bu genellikle `sse://localhost:4256/sse` adresinde bir sunucu başlatır.
  - **Docker**: DroidMind'ı bir container'da çalıştırmak için komutlar [Docker Kılavuzu](docs/docker.md) bölümüne bakın.

  DroidMind'ı farklı ortamlarda çalıştırma hakkında daha fazla detay için **[Kurulum Kılavuzu](docs/installation.md)** bölümüne bakın.

  ## 🐳 Docker ile Çalıştırma

  DroidMind, tutarlı, konteynerleştirilmiş bir ortam için Docker kullanılarak da çalıştırılabilir. Bu, dağıtım ve bağımlılıkları izole etmek için özellikle yararlıdır.

  Docker imajını oluşturma ve DroidMind'ı `stdio` veya `SSE` transport ile bir container'da çalıştırma hakkında kapsamlı talimatlar ve ADB cihaz erişimi hakkında notlar için, lütfen **[Docker Kılavuzu](docs/docker.md)** bölümüne bakın.

  ## 🔮 Örnek AI Asistanı Sorguları

  DroidMind'a bağlı bir AI asistanı ile aşağıdakine benzer istekler yapabilirsiniz:

  - "Bağlı tüm Android cihazlarını listele ve özelliklerini göster."
  - "Pixel'imin bir ekran görüntüsünü al."
  - "`emulator-5554` üzerine bu APK'yı kur."
  - "`your_device_serial` adlı cihazdan son crash loglarını göster."
  - "`emulator-5554` cihazının mevcut ekranındaki 'Sonraki' düğmesine dokunun."

  Daha fazla fikir için, Kullanıcı Kılavuzu'nda **[Örnek Sorgular ve Workflow'lar](docs/user_manual/example_queries.md)** bölümüne bakın.

  ## 🔒 Güvenlik

  DroidMind, cihazlarınızı korumak için bir güvenlik framework'ü içerir:

  - **Komut Doğrulaması ve Sanitizasyonu**
  - **Risk Değerlendirmesi Kategorilendirmesi**
  - **Korumalı Yol İşlemleri**
  - **Kapsamlı Logging**

  Yüksek riskli işlemler işaretlenir ve kritik olanlar varsayılan olarak engellenir. Daha fazlasını **[Güvenlik Hususları](docs/user_manual/security.md)** bölümünde öğrenin.

  ## 💻 Geliştirme

  DroidMind, bağımlılık yönetimi ve geliştirme workflow'ları için `uv` kullanır.

  ```bash
  # Bağımlılıkları yükle/güncelle (.venv oluşturur/günceller)
  uv sync --all-groups

  # Testleri çalıştır
  uv run pytest

  # Linting'i çalıştır
  uv run ruff check .

  # Tür kontrolünü çalıştır
  uv run pyright
  ```

  ## 🤝 Katkıda Bulunma

  Katkılar memnuniyetle karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.

  1.  Repository'yi fork edin.
  2.  Özellik dalınızı oluşturun (`git checkout -b feature/amazing-feature`).
  3.  Geliştirme ortamınızı `uv` ile ayarlayın.
  4.  Değişikliklerinizi yapın.
  5.  Testleri, linting'i ve tür kontrolünü çalıştırın.
  6.  Değişikliklerinizi işleyin (`git commit -m 'Add some amazing feature'`).
  7.  Dalına push edin (`git push origin feature/amazing-feature`).
  8.  Bir Pull Request açın.

  ## 📝 Lisans

  Bu proje Apache Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

  ---

  <div align="center">

  [Stefanie Jane 🌠](https://github.com/hyperb1iss) tarafından oluşturuldu

  DroidMind'ı faydalı buluyorsanız, [bana bir Monster Ultra Violet ⚡️ al](https://ko-fi.com/hyperb1iss)

  </div>
---

<div align="center">

# 🤖 DroidMind 🧠



[![Python 3.13](https://img.shields.io/badge/python-3.13-9D00FF.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-Apache_2.0-FF00FF.svg?style=for-the-badge&logo=apache&logoColor=white)](LICENSE)
[![Status](https://img.shields.io/badge/status-active_development-39FF14.svg?style=for-the-badge&logo=githubactions&logoColor=white)](docs/plan.md)
[![Code Style](https://img.shields.io/badge/code_style-ruff-00FFFF.svg?style=for-the-badge&logo=ruff&logoColor=white)](https://github.com/astral-sh/ruff)
[![Type Check](https://img.shields.io/badge/type_check-pyright-FFBF00.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/microsoft/pyright)
[![MCP](https://img.shields.io/badge/protocol-MCP-E6E6FA.svg?style=for-the-badge&logo=anthropic&logoColor=white)](https://modelcontextprotocol.io/)
[![Android](https://img.shields.io/badge/platform-android-A4C639.svg?style=for-the-badge&logo=android&logoColor=white)](https://www.android.com/)
[![Docs](https://img.shields.io/badge/docs-online-FF9E80.svg?style=for-the-badge&logo=gitbook&logoColor=white)](https://hyperb1iss.github.io/droidmind/)

**Control Android devices with AI through the Model Context Protocol**

</div>

DroidMind is a powerful bridge between AI assistants and Android devices, enabling control, debugging, and system analysis through natural language. By implementing the Model Context Protocol (MCP), DroidMind allows AI models to directly interact with Android devices via ADB in a secure, structured way. When used as part of an agentic coding workflow, DroidMind can enable your assistant to build and debug with your device directly in the loop.

## 💫 Core Features

DroidMind empowers AI assistants to:

- 📱 **Manage Devices**: Connect via USB/TCP-IP, list devices, view properties, and reboot.
- 📊 **Analyze Systems**: Access logs (logcat, ANR, crash, battery), capture bug reports, and dump heap.
- 📂 **Handle Files**: Browse, read, write, push, pull, delete, and manage device files/directories.
- 📦 **Control Apps**: Install, uninstall, start, stop, clear data, and inspect app details (manifest, permissions, activities).
- 🖼️ **Automate UI**: Perform taps, swipes, text input, and key presses.
- 🐚 **Execute Shell Commands**: Run ADB shell commands with a security-conscious framework.
- 🔒 **Operate Securely**: Benefit from command validation, risk assessment, and sanitization.
- 💬 **Integrate Seamlessly**: Connect with any MCP-compatible client (Claude, Cursor, Cline, etc.).

For a detailed list of capabilities, see the **[User Manual](docs/user_manual/index.md)** and **[MCP Reference](docs/mcp-reference.md)**.

## 🚀 Getting Started

### Quickstart for IDEs (Zero Install with `uvx`)

For the fastest way to integrate DroidMind with an MCP-compatible IDE (like Cursor), you can configure it to run DroidMind directly from its GitHub repository using `uvx`. This method **does not require you to manually clone or install DroidMind first**.

Add the following to your IDE's MCP configuration (e.g., `.cursor/mcp.json` for Cursor):

```json
{
  "mcpServers": {
    "droidmind": {
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/hyperb1iss/droidmind",
        "droidmind",
        "--transport",
        "stdio" // The default and preferred mode for most IDE integrations
      ]
    }
  }
}
```

Your IDE will be configured to launch DroidMind on demand. Full instructions for this setup are in the **[Quick Start Guide](docs/quickstart.md#1-configure-your-ide-to-run-droidmind-via-uvx)**.

### Prerequisites

- Python 3.13 (3.14 not yet supported)
- `uv` (Python package manager)
- Android device with USB debugging enabled
- ADB (Android Debug Bridge) installed and in your system's PATH

### Installation

For detailed instructions on setting up DroidMind, including the quick IDE integration with `uvx` (covered in the Quick Start), manual installation from source, or using Docker, please see our comprehensive **[Installation Guide](docs/installation.md)**.

### Running DroidMind

How you run DroidMind depends on your setup:

- **IDE Integration (via `uvx`)**: Your IDE automatically manages running DroidMind as configured in its MCP settings (e.g., `mcp.json`). See the [Quick Start Guide](docs/quickstart.md).
- **Manual Installation**: After installing from source, you can run DroidMind directly.
  - **Stdio (for direct terminal interaction or some IDE setups):**
    ```bash
    droidmind --transport stdio
    ```
  - **SSE (for web UIs or AI assistants like Claude Desktop):**
    ```bash
    droidmind --transport sse
    ```
    This usually starts a server at `sse://localhost:4256/sse`.
- **Docker**: Refer to the [Docker Guide](docs/docker.md) for commands to run DroidMind in a container.

Refer to the **[Installation Guide](docs/installation.md)** for more details on running DroidMind in different environments.

## 🐳 Running with Docker

DroidMind can also be run using Docker for a consistent, containerized environment. This is particularly useful for deployment and isolating dependencies.

For comprehensive instructions on building the Docker image and running DroidMind in a container with `stdio` or `SSE` transport, including notes on ADB device access, please refer to our **[Docker Guide](docs/docker.md)**.

## 🔮 Example AI Assistant Queries

With an AI assistant connected to DroidMind, you can make requests like:

- "List all connected Android devices and show their properties."
- "Take a screenshot of my Pixel."
- "Install this APK on `emulator-5554`."
- "Show me the recent crash logs from `your_device_serial`."
- "Tap the 'Next' button on the current screen of `emulator-5554`."

For more inspiration, check out our **[Example Queries and Workflows](docs/user_manual/example_queries.md)** in the User Manual.

## 🔒 Security

DroidMind incorporates a security framework to protect your devices:

- **Command Validation & Sanitization**
- **Risk Assessment Categorization**
- **Protected Path Operations**
- **Comprehensive Logging**

High-risk operations are flagged, and critical ones are blocked by default. Learn more in our **[Security Considerations](docs/user_manual/security.md)** chapter.

## 💻 Development

DroidMind uses `uv` for dependency management and development workflows.

```bash
# Install/update dependencies (creates/updates `.venv`)
uv sync --all-groups

# Run tests
uv run pytest

# Run linting
uv run ruff check .

# Run type checking
uv run pyright
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/amazing-feature`).
3.  Set up your development environment with `uv`.
4.  Make your changes.
5.  Run tests, linting, and type checking.
6.  Commit your changes (`git commit -m 'Add some amazing feature'`).
7.  Push to the branch (`git push origin feature/amazing-feature`).
8.  Open a Pull Request.

## 📝 License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Created by [Stefanie Jane 🌠](https://github.com/hyperb1iss)

If you find DroidMind useful, [buy me a Monster Ultra Violet ⚡️](https://ko-fi.com/hyperb1iss)

</div>
