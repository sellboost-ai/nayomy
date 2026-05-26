---
name: "BurtTheCoder/mcp-maigret"
description: "MCP server for maigret, a powerful OSINT tool that collects user account information from various public sources. This server provides tools for searching usernames across social networks and analyzing URLs."
description_tr: "Maigret için MCP sunucusu; çeşitli açık kaynaklar üzerinden kullanıcı hesap bilgilerini toplayan güçlü bir OSINT aracıdır. Sunucu, sosyal ağlar arasında kullanıcı adı araması ve URL analizi için araçlar sağlar."
category: "Security"
repo: "BurtTheCoder/mcp-maigret"
stars: 241
url: "https://github.com/BurtTheCoder/mcp-maigret"
body_length: 6810
license: "MIT"
language: "JavaScript"
body_tr: |-
  # Maigret MCP Server
  [![smithery badge](https://smithery.ai/badge/mcp-maigret)](https://smithery.ai/server/mcp-maigret)

  [maigret](https://github.com/soxoj/maigret) için bir Model Context Protocol (MCP) sunucusu. Maigret, çeşitli açık kaynaklardan kullanıcı hesap bilgilerini toplayan güçlü bir OSINT aracıdır. Bu sunucu, kullanıcı adlarını sosyal ağlar arasında aramak ve URL'leri analiz etmek için araçlar sağlar. [Claude Desktop](https://claude.ai) gibi MCP uyumlu uygulamalarla sorunsuz entegrasyon için tasarlanmıştır.

  <a href="https://glama.ai/mcp/servers/knnpcz651x"></a>


  ## ⚠️ Uyarı

  Bu araç, meşru OSINT araştırması amaçları için tasarlanmıştır. Lütfen:
  - Yalnızca genel olarak erişilebilir bilgileri arayın
  - Gizliliğe ve veri koruma yasalarına saygı gösterin
  - Aranan platformların hizmet şartlarına uyun
  - Sorumlu ve etik şekilde kullanın
  - Bazı sitelerin otomatik aramaları sınırlandırabileceğini veya engelleyebileceğini unutmayın

  ## Güvenlik

  Bu sunucu, komut enjeksiyonu saldırılarını önlemek için birkaç güvenlik önlemi uygulamaktadır:

  ### Giriş Doğrulaması
  - **Kullanıcı adları**: Yalnızca alfanümerik karakterler, alt çizgiler, tireler ve noktalar izin verilir (maksimum 100 karakter)
  - **URL'ler**: Geçerli HTTP/HTTPS URL'leri olmalı ve shell meta karakterleri içermemelidir
  - **Etiketler**: Yalnızca alfanümerik karakterler, alt çizgiler ve tireler izin verilir

  ### Güvenli Komut Yürütme
  - Shell interpolasyonunu önlemek için `execFile()` yerine `exec()` kullanır
  - Tüm komut argümanları dizi olarak iletilir, birleştirilmiş dizeler değil
  - Docker komutları shell yorumu olmadan yürütülür

  ### Güvenlik Sorunlarını Bildirme
  Bir güvenlik açığı keşfederseniz, lütfen bir issue açarak veya maintainer'larla doğrudan iletişime geçerek bildirin. Güvenliği ciddiye alıyoruz ve hızlı bir şekilde yanıt vereceğiz.

  ## Gereksinimler

  - Node.js (v18 veya sonrası)
  - Docker
  - Docker Desktop yüklü macOS, Linux veya Windows
  - Reports dizinine yazma erişimi

  ## Hızlı Başlangıç

  ### Smithery Aracılığıyla Kurulum

  Maigret'i Claude Desktop için [Smithery](https://smithery.ai/server/mcp-maigret) aracılığıyla otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli install mcp-maigret --client claude
  ```

  ### Manuel Kurulum
  1. Docker'ı yükleyin:
     - macOS: [Docker Desktop](https://www.docker.com/products/docker-desktop) yükleyin
     - Linux: [Docker Engine kurulum kılavuzunu](https://docs.docker.com/engine/install/) izleyin

  2. Sunucuyu npm aracılığıyla global olarak yükleyin:
  ```bash
  npm install -g mcp-maigret
  ```

  3. Bir reports dizini oluşturun:
  ```bash
  mkdir -p /path/to/reports/directory
  ```

  4. Claude Desktop yapılandırma dosyanıza ekleyin:
  ```json
  {
    "mcpServers": {
      "maigret": {
        "command": "mcp-maigret",
        "env": {
          "MAIGRET_REPORTS_DIR": "/path/to/reports/directory"
        }
      }
    }
  }
  ```

  Yapılandırma dosyası konumu:
  - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

  5. Claude Desktop'ı yeniden başlatın

  ## Alternatif Kurulum (Kaynaktan)

  Kaynaktan çalıştırmayı tercih ediyorsanız veya kodu değiştirmeniz gerekiyorsa:

  1. Klonlayın ve oluşturun:
  ```bash
  git clone <repository_url>
  cd mcp-maigret
  npm install
  npm run build
  ```

  2. Claude Desktop yapılandırmanıza ekleyin:
  ```json
  {
    "mcpServers": {
      "maigret": {
        "command": "node",
        "args": ["/absolute/path/to/mcp-maigret/build/index.js"],
        "env": {
          "MAIGRET_REPORTS_DIR": "/path/to/reports/directory"
        }
      }
    }
  }
  ```

  ## Özellikler

  - **Kullanıcı Adı Araması**: Yüzlerce sosyal ağ ve websitesi arasında kullanıcı adı arayın
  - **URL Analizi**: URL'leri ayrıştırarak bilgi çıkarın ve ilişkili kullanıcı adlarını arayın
  - **Birden Fazla Çıktı Formatı**: txt, html, pdf, json, csv ve xmind formatları için destek
  - **Site Filtreleme**: Aramaları site etiketlerine göre filtreleyin (örneğin, photo, dating, us)
  - **Docker Tabanlı**: Ortamlar arasında güvenilir ve tutarlı yürütme

  ## Araçlar

  ### 1. Kullanıcı Adı Araması Aracı
  - Ad: `search_username`
  - Açıklama: Sosyal ağlar ve siteler arasında kullanıcı adı arayın
  - Parametreler:
    * `username` (zorunlu): Aranacak kullanıcı adı (alfanümerik, alt çizgiler, tireler, noktalar; maksimum 100 karakter)
    * `format` (isteğe bağlı, varsayılan: "pdf"): Çıktı formatı (txt, html, pdf, json, csv, xmind)
    * `use_all_sites` (isteğe bağlı, varsayılan: false): En iyi 500 yerine tüm kullanılabilir siteleri kullanın
    * `tags` (isteğe bağlı): Siteleri filtrelemek için etiketler dizisi (alfanümerik, alt çizgiler, tireler)

  Örnek:
  ```json
  {
    "username": "test_user123",
    "format": "html",
    "use_all_sites": false,
    "tags": ["photo"]
  }
  ```

  ### 2. URL Analizi Aracı
  - Ad: `parse_url`
  - Açıklama: URL'yi ayrıştırarak bilgi çıkarın ve ilişkili kullanıcı adlarını arayın
  - Parametreler:
    * `url` (zorunlu): Analiz edilecek URL
    * `format` (isteğe bağlı, varsayılan: "pdf"): Çıktı formatı (txt, html, pdf, json, csv, xmind)

  Örnek:
  ```json
  {
    "url": "https://example.com/profile",
    "format": "txt"
  }
  ```

  ## Sorun Giderme

  ### Docker Sorunları

  1. Docker'ın yüklü ve çalışır durumda olduğunu doğrulayın:
  ```bash
  docker --version
  docker ps
  ```

  2. Docker izinlerini kontrol edin:
     - Kullanıcınızın Docker komutlarını çalıştırma izni olduğundan emin olun
     - Linux'ta, kullanıcınızı docker grubuna ekleyin: `sudo usermod -aG docker $USER`

  ### Reports Dizini Sorunları

  1. Reports dizinini doğrulayın:
     - MAIGRET_REPORTS_DIR'de belirtilen dizin mevcut olmalıdır
     - Kullanıcınızın bu dizine yazma izni olmalıdır
     - İzinleri kontrol edin: `ls -la /path/to/reports/directory`

  2. Yaygın yapılandırma hataları:
     - Eksik MAIGRET_REPORTS_DIR ortam değişkeni
     - Dizin yok
     - Yanlış izinler
     - Yolda sondaki eğik çizgiler

  3. Herhangi bir sorunu düzelttikten sonra:
     - Yapılandırma dosyasını kaydedin
     - Claude Desktop'ı yeniden başlatın

  ## Hata Mesajları

  - "Docker is not installed or not running": Docker'ı yükleyin ve Docker daemon'ını başlatın
  - "MAIGRET_REPORTS_DIR environment variable must be set": Ortam değişkenini yapılandırmanıza ekleyin
  - "Error creating reports directory": Dizin izinlerini ve yolunu kontrol edin
  - "Error executing maigret": Docker günlüklerini kontrol edin ve konteyner'ın uygun izinleri olduğundan emin olun
  - "Invalid username": Kullanıcı adı geçersiz karakterler içeriyor. Yalnızca alfanümerik, alt çizgiler, tireler ve noktaları kullanın
  - "Invalid URL": URL yanlış biçimlendirilmiş veya yasak karakterler içeriyor
  - "Invalid tag": Etiket geçersiz karakterler içeriyor. Yalnızca alfanümerik, alt çizgiler ve tirehleri kullanın

  ## Katkıda Bulunma

  1. Repoyu fork edin
  2. Bir feature branch'i oluşturun (`git checkout -b feature/amazing-feature`)
  3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
  4. Branch'e push edin (`git push origin feature/amazing-feature`)
  5. Pull Request açın

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

# Maigret MCP Server
[![smithery badge](https://smithery.ai/badge/mcp-maigret)](https://smithery.ai/server/mcp-maigret)

A Model Context Protocol (MCP) server for [maigret](https://github.com/soxoj/maigret), a powerful OSINT tool that collects user account information from various public sources. This server provides tools for searching usernames across social networks and analyzing URLs. It is designed to integrate seamlessly with MCP-compatible applications like [Claude Desktop](https://claude.ai).

<a href="https://glama.ai/mcp/servers/knnpcz651x"></a>


## ⚠️ Warning

This tool is designed for legitimate OSINT research purposes. Please:
- Only search for information that is publicly available
- Respect privacy and data protection laws
- Follow the terms of service of the platforms being searched
- Use responsibly and ethically
- Be aware that some sites may rate-limit or block automated searches

## Security

This server implements several security measures to prevent command injection attacks:

### Input Validation
- **Usernames**: Only alphanumeric characters, underscores, hyphens, and periods are allowed (max 100 characters)
- **URLs**: Must be valid HTTP/HTTPS URLs without shell metacharacters
- **Tags**: Only alphanumeric characters, underscores, and hyphens are allowed

### Safe Command Execution
- Uses `execFile()` instead of `exec()` to prevent shell interpolation
- All command arguments are passed as arrays, not concatenated strings
- Docker commands are executed without shell interpretation

### Reporting Security Issues
If you discover a security vulnerability, please report it by opening an issue or contacting the maintainers directly. We take security seriously and will respond promptly.

## Requirements

- Node.js (v18 or later)
- Docker
- macOS, Linux, or Windows with Docker Desktop installed
- Write access to the reports directory

## Quick Start

### Installing via Smithery

To install Maigret for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-maigret):

```bash
npx -y @smithery/cli install mcp-maigret --client claude
```

### Installing Manually
1. Install Docker:
   - macOS: Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - Linux: Follow the [Docker Engine installation guide](https://docs.docker.com/engine/install/)

2. Install the server globally via npm:
```bash
npm install -g mcp-maigret
```

3. Create a reports directory:
```bash
mkdir -p /path/to/reports/directory
```

4. Add to your Claude Desktop configuration file:
```json
{
  "mcpServers": {
    "maigret": {
      "command": "mcp-maigret",
      "env": {
        "MAIGRET_REPORTS_DIR": "/path/to/reports/directory"
      }
    }
  }
}
```

Configuration file location:
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

5. Restart Claude Desktop

## Alternative Setup (From Source)

If you prefer to run from source or need to modify the code:

1. Clone and build:
```bash
git clone <repository_url>
cd mcp-maigret
npm install
npm run build
```

2. Add to your Claude Desktop configuration:
```json
{
  "mcpServers": {
    "maigret": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-maigret/build/index.js"],
      "env": {
        "MAIGRET_REPORTS_DIR": "/path/to/reports/directory"
      }
    }
  }
}
```

## Features

- **Username Search**: Search for a username across hundreds of social networks and websites
- **URL Analysis**: Parse URLs to extract information and search for associated usernames
- **Multiple Output Formats**: Support for txt, html, pdf, json, csv, and xmind formats
- **Site Filtering**: Filter searches by site tags (e.g., photo, dating, us)
- **Docker-based**: Reliable and consistent execution across environments

## Tools

### 1. Username Search Tool
- Name: `search_username`
- Description: Search for a username across social networks and sites
- Parameters:
  * `username` (required): Username to search for (alphanumeric, underscores, hyphens, periods only; max 100 chars)
  * `format` (optional, default: "pdf"): Output format (txt, html, pdf, json, csv, xmind)
  * `use_all_sites` (optional, default: false): Use all available sites instead of top 500
  * `tags` (optional): Array of tags to filter sites (alphanumeric, underscores, hyphens only)

Example:
```json
{
  "username": "test_user123",
  "format": "html",
  "use_all_sites": false,
  "tags": ["photo"]
}
```

### 2. URL Analysis Tool
- Name: `parse_url`
- Description: Parse a URL to extract information and search for associated usernames
- Parameters:
  * `url` (required): URL to analyze
  * `format` (optional, default: "pdf"): Output format (txt, html, pdf, json, csv, xmind)

Example:
```json
{
  "url": "https://example.com/profile",
  "format": "txt"
}
```

## Troubleshooting

### Docker Issues

1. Verify Docker is installed and running:
```bash
docker --version
docker ps
```

2. Check Docker permissions:
   - Ensure your user has permissions to run Docker commands
   - On Linux, add your user to the docker group: `sudo usermod -aG docker $USER`

### Reports Directory Issues

1. Verify the reports directory:
   - The directory specified in MAIGRET_REPORTS_DIR must exist
   - Your user must have write permissions to this directory
   - Check permissions: `ls -la /path/to/reports/directory`

2. Common configuration mistakes:
   - Missing MAIGRET_REPORTS_DIR environment variable
   - Directory doesn't exist
   - Incorrect permissions
   - Trailing slashes in the path

3. After fixing any issues:
   - Save the configuration file
   - Restart Claude Desktop

## Error Messages

- "Docker is not installed or not running": Install Docker and start the Docker daemon
- "MAIGRET_REPORTS_DIR environment variable must be set": Add the environment variable to your configuration
- "Error creating reports directory": Check directory permissions and path
- "Error executing maigret": Check Docker logs and ensure the container has proper permissions
- "Invalid username": Username contains invalid characters. Use only alphanumeric, underscores, hyphens, and periods
- "Invalid URL": URL is malformed or contains prohibited characters
- "Invalid tag": Tag contains invalid characters. Use only alphanumeric, underscores, and hyphens

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
