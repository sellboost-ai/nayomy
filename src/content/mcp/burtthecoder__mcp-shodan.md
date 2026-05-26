---
name: "BurtTheCoder/mcp-shodan"
description: "MCP server for querying the Shodan API and Shodan CVEDB. This server provides tools for IP lookups, device searches, DNS lookups, vulnerability queries, CPE lookups, and more."
description_tr: "Shodan API ve Shodan CVEDB sorgulama için MCP sunucusu. IP aramaları, cihaz taramaları, DNS sorguları, güvenlik açığı araştırmaları, CPE aramaları ve daha fazlası için araçlar sunar."
category: "Security"
repo: "BurtTheCoder/mcp-shodan"
stars: 131
url: "https://github.com/BurtTheCoder/mcp-shodan"
body_length: 10080
license: "MIT"
language: "TypeScript"
homepage: "https://registry.modelcontextprotocol.io"
body_tr: |-
  # Shodan MCP Server

  [![smithery badge](https://smithery.ai/badge/@burtthecoder/mcp-shodan)](https://smithery.ai/server/@burtthecoder/mcp-shodan)
  [![MCP Registry](https://img.shields.io/badge/MCP-Registry-blue)](https://registry.modelcontextprotocol.io)

  [Shodan API](https://shodan.io) ve [Shodan CVEDB](https://cvedb.shodan.io) sorgulama için bir Model Context Protocol (MCP) sunucusu. Bu sunucu, IP keşfi, DNS işlemleri, güvenlik açığı takibi ve cihaz bulma dahil olmak üzere Shodan'ın ağ zekası ve güvenlik hizmetlerine kapsamlı erişim sağlar. Tüm araçlar kolay analiz ve entegrasyon için yapılandırılmış, biçimlendirilmiş çıkış sağlar.

  ## Hızlı Başlangıç (Önerilen)

  ### Claude Code ile Yükleme

  ```bash
  claude mcp add --transport stdio --env SHODAN_API_KEY=your-shodan-api-key shodan -- npx -y @burtthecoder/mcp-shodan
  ```

  ### Codex CLI ile Yükleme

  ```bash
  codex mcp add shodan --env SHODAN_API_KEY=your-shodan-api-key -- npx -y @burtthecoder/mcp-shodan
  ```

  ### Gemini CLI ile Yükleme

  ```bash
  gemini mcp add -e SHODAN_API_KEY=your-shodan-api-key shodan npx -y @burtthecoder/mcp-shodan
  ```

  ### Smithery ile Yükleme

  Shodan Server'ı Claude Desktop için [Smithery](https://smithery.ai/server/@burtthecoder/mcp-shodan) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install @burtthecoder/mcp-shodan --client claude
  ```

  ### Manuel Yükleme
  1. Sunucuyu npm aracılığıyla global olarak yükleyin:
  ```bash
  npm install -g @burtthecoder/mcp-shodan
  ```

  2. Claude Desktop yapılandırma dosyanıza ekleyin:
  ```json
  {
    "mcpServers": {
      "shodan": {
        "command": "mcp-shodan",
        "env": {
          "SHODAN_API_KEY": "your-shodan-api-key"
        }
      }
    }
  }
  ```

  Yapılandırma dosyası konumu:
  - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

  3. Claude Desktop'ı yeniden başlatın

  ## Alternatif Kurulum (Kaynak Kodundan)

  Kaynak kodundan çalıştırmayı veya kodu değiştirmeyi tercih ederseniz:

  1. Klonlayın ve derleyin:
  ```bash
  git clone https://github.com/BurtTheCoder/mcp-shodan.git
  cd mcp-shodan
  npm install
  npm run build
  ```

  2. Claude Desktop yapılandırmanıza ekleyin:
  ```json
  {
    "mcpServers": {
      "shodan": {
        "command": "node",
        "args": ["/absolute/path/to/mcp-shodan/build/index.js"],
        "env": {
          "SHODAN_API_KEY": "your-shodan-api-key"
        }
      }
    }
  }
  ```

  ## Özellikler

  - **Ağ Keşfi**: IP adresleri hakkında açık portlar, hizmetler ve güvenlik açıkları dahil olmak üzere ayrıntılı bilgi sorgulayın
  - **DNS İşlemleri**: Etki alanları ve IP adresleri için ileri ve ters DNS aramaları
  - **Güvenlik Açığı İstihbaratı**: Ayrıntılı güvenlik açığı bilgileri, CPE aramaları ve ürüne özgü CVE takibi için Shodan'ın CVEDB'sine erişim
  - **Cihaz Bulma**: İnternet'e bağlı cihazların Shodan veritabanında gelişmiş filtreleme ile arama

  ## Araçlar

  ### 1. IP Arama Aracı
  - Ad: `ip_lookup`
  - Açıklama: Coğrafi konum, açık portlar, çalışan hizmetler, SSL sertifikaları, ana bilgisayar adları ve varsa bulut sağlayıcı detayları dahil olmak üzere bir IP adresi hakkında kapsamlı bilgi alın
  - Parametreler:
    * `ip` (gerekli): Aranacak IP adresi
  - Döndürülen değerler:
    * IP Bilgileri (adres, kuruluş, ISP, ASN)
    * Konum (ülke, şehir, koordinatlar)
    * Hizmetler (portlar, protokoller, banner'lar)
    * Bulut sağlayıcı detayları (varsa)
    * İlişkili ana bilgisayar adları ve etki alanları
    * Etiketler

  ### 2. Shodan Arama Aracı
  - Ad: `shodan_search`
  - Açıklama: Shodan'ın İnternet'e bağlı cihazlar veritabanında arama yapın
  - Parametreler:
    * `query` (gerekli): Shodan arama sorgusu
    * `max_results` (opsiyonel, varsayılan: 10): Döndürülecek sonuç sayısı
  - Döndürülen değerler:
    * Toplam sonuçlar ile arama özeti
    * Ülkeye dayalı dağılım istatistikleri
    * Aşağıdakileri içeren ayrıntılı cihaz bilgileri:
      - Temel bilgiler (IP, kuruluş, ISP)
      - Konum verileri
      - Hizmet detayları
      - Web sunucusu bilgileri
      - İlişkili ana bilgisayar adları ve etki alanları

  ### 3. CVE Arama Aracı
  - Ad: `cve_lookup`
  - Açıklama: Shodan'ın CVEDB'sinden ayrıntılı güvenlik açığı bilgisini sorgulayın
  - Parametreler:
    * `cve` (gerekli): CVE-YYYY-NNNNN formatında CVE tanımlayıcısı (ör: CVE-2021-44228)
  - Döndürülen değerler:
    * Temel Bilgiler (ID, yayınlanma tarihi, özet)
    * Ciddiyet Puanları:
      - CVSS v2 ve v3 ciddiyet seviyeleri ile birlikte
      - EPSS olasılığı ve sıralaması
    * Etki Değerlendirmesi:
      - KEV durumu
      - Önerilen hafifletme yolları
      - Fidye yazılımı ilişkileri
    * Etkilenen ürünler (CPE'ler)
    * Referanslar

  ### 4. DNS Arama Aracı
  - Ad: `dns_lookup`
  - Açıklama: Shodan'ın DNS hizmetini kullanarak etki alanı adlarını IP adreslerine çözün
  - Parametreler:
    * `hostnames` (gerekli): Çözülecek ana bilgisayar adlarının dizisi
  - Döndürülen değerler:
    * Ana bilgisayar adlarını IP'lere eşleştiren DNS çözümlemeleri
    * Toplam aramaların ve sorgulanan ana bilgisayar adlarının özeti

  ### 5. Ters DNS Arama Aracı
  - Ad: `reverse_dns_lookup`
  - Açıklama: IP adreslerine ilişkili ana bilgisayar adlarını bulmak için ters DNS aramaları yapın
  - Parametreler:
    * `ips` (gerekli): Aranacak IP adreslerinin dizisi
  - Döndürülen değerler:
    * IP'leri ana bilgisayar adlarına eşleştiren ters DNS çözümlemeleri
    * Toplam aramaların ve sonuçların özeti

  ### 6. CPE Arama Aracı
  - Ad: `cpe_lookup`
  - Açıklama: Ürün adına göre Ortak Platform Numaralandırması (CPE) girişlerini arayın
  - Parametreler:
    * `product` (gerekli): Aranacak ürünün adı
    * `count` (opsiyonel, varsayılan: false): Doğru ise, yalnızca eşleşen CPE'lerin sayısını döndürür
    * `skip` (opsiyonel, varsayılan: 0): Atlanacak CPE sayısı (sayfalandırma için)
    * `limit` (opsiyonel, varsayılan: 1000): Döndürülecek maksimum CPE sayısı
  - Döndürülen değerler:
    * count doğru olduğunda: Eşleşen CPE'lerin toplam sayısı
    * count yanlış olduğunda: Sayfalandırma detayları ile CPE'lerin listesi

  ### 7. Ürün Başına CVE'ler Aracı
  - Ad: `cves_by_product`
  - Açıklama: Belirli ürünleri veya CPE'leri etkileyen güvenlik açıklarını arayın
  - Parametreler:
    * `cpe23` (opsiyonel): CPE 2.3 tanımlayıcısı (format: cpe:2.3:part:vendor:product:version)
    * `product` (opsiyonel): CVE'leri aranacak ürünün adı
    * `count` (opsiyonel, varsayılan: false): Doğru ise, yalnızca eşleşen CVE'lerin sayısını döndürür
    * `is_kev` (opsiyonel, varsayılan: false): Doğru ise, yalnızca KEV bayrağı ayarlanmış CVE'leri döndürür
    * `sort_by_epss` (opsiyonel, varsayılan: false): Doğru ise, CVE'leri EPSS puanına göre sıralar
    * `skip` (opsiyonel, varsayılan: 0): Atlanacak CVE sayısı (sayfalandırma için)
    * `limit` (opsiyonel, varsayılan: 1000): Döndürülecek maksimum CVE sayısı
    * `start_date` (opsiyonel): CVE'leri filtrelemek için başlangıç tarihi (format: YYYY-MM-DDTHH:MM:SS)
    * `end_date` (opsiyonel): CVE'leri filtrelemek için bitiş tarihi (format: YYYY-MM-DDTHH:MM:SS)
  - Notlar:
    * cpe23 veya product sağlamalısınız, ancak her ikisini birden değil
    * Tarih filtrelemesi CVE'lerin yayınlanma zamanını kullanır
  - Döndürülen değerler:
    * Sorgu bilgileri
    * Sayfalandırma detayları ile sonuç özeti
    * Aşağıdakileri içeren ayrıntılı güvenlik açığı bilgileri:
      - Temel bilgiler
      - Ciddiyet puanları
      - Etki değerlendirmeleri
      - Referanslar

  ## Gereksinimler

  - Node.js (v20 veya daha yeni)
  - Geçerli bir [Shodan API Anahtarı](https://account.shodan.io/)

  ## Sorun Giderme

  ### API Anahtarı Sorunları

  API anahtarı ile ilgili hatalar görürseniz (ör: "Request failed with status code 401"):

  1. API anahtarınızı doğrulayın:
     - [Hesap ayarlarınızdan](https://account.shodan.io/) geçerli bir Shodan API anahtarı olmalıdır
     - Anahtarın işlem için yeterli kredi/izinleri olduğundan emin olun
     - Yapılandırmada anahtarın etrafındaki fazla boşluk veya tırnak işaretlerini kontrol edin
     - Anahtarın SHODAN_API_KEY ortam değişkeninde doğru şekilde ayarlandığını doğrulayın

  2. Yaygın Hata Kodları:
     - 401 Yetkisiz: Geçersiz API anahtarı veya kimlik doğrulama eksik
     - 402 Ödeme Gerekli: Sorgu kredisi tükendi
     - 429 Çok Fazla İstek: Oran sınırı aşıldı

  3. Yapılandırma Adımları:
     a. API anahtarınızı [Shodan Hesabından](https://account.shodan.io/) alın
     b. Yapılandırma dosyanıza ekleyin:
        ```json
        {
          "mcpServers": {
            "shodan": {
              "command": "mcp-shodan",
              "env": {
                "SHODAN_API_KEY": "your-actual-api-key-here"
              }
            }
          }
        }
        ```
     c. Yapılandırma dosyasını kaydedin
     d. Claude Desktop'ı yeniden başlatın

  4. Anahtarınızı Test Etme:
     - Önce basit bir sorgu deneyin (ör: "google.com" için dns_lookup)
     - Kredi durumu için [Shodan hesap panelinizi](https://account.shodan.io/) kontrol edin
     - Anahtarın curl ile doğrudan çalışıp çalışmadığını doğrulayın:
       ```bash
       curl "https://api.shodan.io/dns/resolve?hostnames=google.com&key=your-api-key"
       ```

  ### Modül Yükleme Sorunları

  Modül yükleme hataları görürseniz:
  1. Global yükleme için: Hızlı Başlangıçta gösterilen basit yapılandırmayı kullanın
  2. Kaynak yüklemesi için: Node.js v18 veya daha yeni sürümü kullandığınızdan emin olun

  ## Geliştirme

  Projeyi derleyin:
  ```bash
  npm install
  npm run build
  ```

  FastMCP'nin yerleşik dev aracı ile etkileşimli olarak test edin:
  ```bash
  npx fastmcp dev build/index.js
  ```

  ## Hata İşleme

  Sunucu aşağıdakiler için kapsamlı hata işleme içerir:
  - Geçersiz API anahtarları
  - Oran sınırlama
  - Ağ hataları
  - Geçersiz giriş parametreleri
  - Geçersiz CVE formatları
  - Geçersiz CPE arama parametreleri
  - Geçersiz tarih formatları
  - Birbirini dışlayan parametre doğrulaması

  ## Sürüm Geçmişi

  - v1.0.22: [Resmi MCP Kayıt Defteri](https://registry.modelcontextprotocol.io)'ne yayınlandı — `server.json` manifest eklendi, Claude Code, Codex ve Gemini CLI için CLI yükleme desteği eklendi
  - v1.1.0: Ham `@modelcontextprotocol/sdk`'dan [FastMCP](https://github.com/punkpeye/fastmcp)'ye geçiş — modüler araç dosyaları, otomatik şema doğrulaması, basitleştirilmiş hata işleme
  - v1.0.12: Ters DNS araması eklendi ve çıkış biçimlendirmesi iyileştirildi
  - v1.0.7: CVE'leri Ürüne Göre Arama işlevselliği eklendi ve güvenlik açıkları aracı cve_lookup olarak yeniden adlandırıldı
  - v1.0.6: Gelişmiş CVE aramaları için CVEDB entegrasyonu ve CPE arama işlevselliği eklendi
  - v1.0.0: Temel işlevsellik ile ilk yayın

  ## Katkı Sağlama

  1. Deposu fork'layın
  2. Bir özellik dalı oluşturun (`git checkout -b feature/amazing-feature`)
  3. Değişikliklerinizi commitleyin (`git commit -m 'Add amazing feature'`)
  4. Dala push yapın (`git push origin feature/amazing-feature`)
  5. Pull Request açın

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

# Shodan MCP Server

[![smithery badge](https://smithery.ai/badge/@burtthecoder/mcp-shodan)](https://smithery.ai/server/@burtthecoder/mcp-shodan)
[![MCP Registry](https://img.shields.io/badge/MCP-Registry-blue)](https://registry.modelcontextprotocol.io)

A Model Context Protocol (MCP) server for querying the [Shodan API](https://shodan.io) and [Shodan CVEDB](https://cvedb.shodan.io). This server provides comprehensive access to Shodan's network intelligence and security services, including IP reconnaissance, DNS operations, vulnerability tracking, and device discovery. All tools provide structured, formatted output for easy analysis and integration.

## Quick Start (Recommended)

### Installing via Claude Code

```bash
claude mcp add --transport stdio --env SHODAN_API_KEY=your-shodan-api-key shodan -- npx -y @burtthecoder/mcp-shodan
```

### Installing via Codex CLI

```bash
codex mcp add shodan --env SHODAN_API_KEY=your-shodan-api-key -- npx -y @burtthecoder/mcp-shodan
```

### Installing via Gemini CLI

```bash
gemini mcp add -e SHODAN_API_KEY=your-shodan-api-key shodan npx -y @burtthecoder/mcp-shodan
```

### Installing via Smithery

To install Shodan Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@burtthecoder/mcp-shodan):

```bash
npx -y @smithery/cli install @burtthecoder/mcp-shodan --client claude
```

### Installing Manually
1. Install the server globally via npm:
```bash
npm install -g @burtthecoder/mcp-shodan
```

2. Add to your Claude Desktop configuration file:
```json
{
  "mcpServers": {
    "shodan": {
      "command": "mcp-shodan",
      "env": {
        "SHODAN_API_KEY": "your-shodan-api-key"
      }
    }
  }
}
```

Configuration file location:
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

3. Restart Claude Desktop

## Alternative Setup (From Source)

If you prefer to run from source or need to modify the code:

1. Clone and build:
```bash
git clone https://github.com/BurtTheCoder/mcp-shodan.git
cd mcp-shodan
npm install
npm run build
```

2. Add to your Claude Desktop configuration:
```json
{
  "mcpServers": {
    "shodan": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-shodan/build/index.js"],
      "env": {
        "SHODAN_API_KEY": "your-shodan-api-key"
      }
    }
  }
}
```

## Features

- **Network Reconnaissance**: Query detailed information about IP addresses, including open ports, services, and vulnerabilities
- **DNS Operations**: Forward and reverse DNS lookups for domains and IP addresses
- **Vulnerability Intelligence**: Access to Shodan's CVEDB for detailed vulnerability information, CPE lookups, and product-specific CVE tracking
- **Device Discovery**: Search Shodan's database of internet-connected devices with advanced filtering

## Tools

### 1. IP Lookup Tool
- Name: `ip_lookup`
- Description: Retrieve comprehensive information about an IP address, including geolocation, open ports, running services, SSL certificates, hostnames, and cloud provider details if available
- Parameters:
  * `ip` (required): IP address to lookup
- Returns:
  * IP Information (address, organization, ISP, ASN)
  * Location (country, city, coordinates)
  * Services (ports, protocols, banners)
  * Cloud Provider details (if available)
  * Associated hostnames and domains
  * Tags

### 2. Shodan Search Tool
- Name: `shodan_search`
- Description: Search Shodan's database of internet-connected devices
- Parameters:
  * `query` (required): Shodan search query
  * `max_results` (optional, default: 10): Number of results to return
- Returns:
  * Search summary with total results
  * Country-based distribution statistics
  * Detailed device information including:
    - Basic information (IP, organization, ISP)
    - Location data
    - Service details
    - Web server information
    - Associated hostnames and domains

### 3. CVE Lookup Tool
- Name: `cve_lookup`
- Description: Query detailed vulnerability information from Shodan's CVEDB
- Parameters:
  * `cve` (required): CVE identifier in format CVE-YYYY-NNNNN (e.g., CVE-2021-44228)
- Returns:
  * Basic Information (ID, published date, summary)
  * Severity Scores:
    - CVSS v2 and v3 with severity levels
    - EPSS probability and ranking
  * Impact Assessment:
    - KEV status
    - Proposed mitigations
    - Ransomware associations
  * Affected products (CPEs)
  * References

### 4. DNS Lookup Tool
- Name: `dns_lookup`
- Description: Resolve domain names to IP addresses using Shodan's DNS service
- Parameters:
  * `hostnames` (required): Array of hostnames to resolve
- Returns:
  * DNS resolutions mapping hostnames to IPs
  * Summary of total lookups and queried hostnames

### 5. Reverse DNS Lookup Tool
- Name: `reverse_dns_lookup`
- Description: Perform reverse DNS lookups to find hostnames associated with IP addresses
- Parameters:
  * `ips` (required): Array of IP addresses to lookup
- Returns:
  * Reverse DNS resolutions mapping IPs to hostnames
  * Summary of total lookups and results

### 6. CPE Lookup Tool
- Name: `cpe_lookup`
- Description: Search for Common Platform Enumeration (CPE) entries by product name
- Parameters:
  * `product` (required): Name of the product to search for
  * `count` (optional, default: false): If true, returns only the count of matching CPEs
  * `skip` (optional, default: 0): Number of CPEs to skip (for pagination)
  * `limit` (optional, default: 1000): Maximum number of CPEs to return
- Returns:
  * When count is true: Total number of matching CPEs
  * When count is false: List of CPEs with pagination details

### 7. CVEs by Product Tool
- Name: `cves_by_product`
- Description: Search for vulnerabilities affecting specific products or CPEs
- Parameters:
  * `cpe23` (optional): CPE 2.3 identifier (format: cpe:2.3:part:vendor:product:version)
  * `product` (optional): Name of the product to search for CVEs
  * `count` (optional, default: false): If true, returns only the count of matching CVEs
  * `is_kev` (optional, default: false): If true, returns only CVEs with KEV flag set
  * `sort_by_epss` (optional, default: false): If true, sorts CVEs by EPSS score
  * `skip` (optional, default: 0): Number of CVEs to skip (for pagination)
  * `limit` (optional, default: 1000): Maximum number of CVEs to return
  * `start_date` (optional): Start date for filtering CVEs (format: YYYY-MM-DDTHH:MM:SS)
  * `end_date` (optional): End date for filtering CVEs (format: YYYY-MM-DDTHH:MM:SS)
- Notes:
  * Must provide either cpe23 or product, but not both
  * Date filtering uses published time of CVEs
- Returns:
  * Query information
  * Results summary with pagination details
  * Detailed vulnerability information including:
    - Basic information
    - Severity scores
    - Impact assessments
    - References

## Requirements

- Node.js (v20 or later)
- A valid [Shodan API Key](https://account.shodan.io/)

## Troubleshooting

### API Key Issues

If you see API key related errors (e.g., "Request failed with status code 401"):

1. Verify your API key:
   - Must be a valid Shodan API key from your [account settings](https://account.shodan.io/)
   - Ensure the key has sufficient credits/permissions for the operation
   - Check for extra spaces or quotes around the key in the configuration
   - Verify the key is correctly set in the SHODAN_API_KEY environment variable

2. Common Error Codes:
   - 401 Unauthorized: Invalid API key or missing authentication
   - 402 Payment Required: Out of query credits
   - 429 Too Many Requests: Rate limit exceeded

3. Configuration Steps:
   a. Get your API key from [Shodan Account](https://account.shodan.io/)
   b. Add it to your configuration file:
      ```json
      {
        "mcpServers": {
          "shodan": {
            "command": "mcp-shodan",
            "env": {
              "SHODAN_API_KEY": "your-actual-api-key-here"
            }
          }
        }
      }
      ```
   c. Save the config file
   d. Restart Claude Desktop

4. Testing Your Key:
   - Try a simple query first (e.g., dns_lookup for "google.com")
   - Check your [Shodan account dashboard](https://account.shodan.io/) for credit status
   - Verify the key works directly with curl:
     ```bash
     curl "https://api.shodan.io/dns/resolve?hostnames=google.com&key=your-api-key"
     ```

### Module Loading Issues

If you see module loading errors:
1. For global installation: Use the simple configuration shown in Quick Start
2. For source installation: Ensure you're using Node.js v18 or later

## Development

Build the project:
```bash
npm install
npm run build
```

Test interactively with FastMCP's built-in dev tool:
```bash
npx fastmcp dev build/index.js
```

## Error Handling

The server includes comprehensive error handling for:
- Invalid API keys
- Rate limiting
- Network errors
- Invalid input parameters
- Invalid CVE formats
- Invalid CPE lookup parameters
- Invalid date formats
- Mutually exclusive parameter validation

## Version History

- v1.0.22: Published to the [official MCP Registry](https://registry.modelcontextprotocol.io) — added `server.json` manifest, CLI install support for Claude Code, Codex, and Gemini CLI
- v1.1.0: Migrated from raw `@modelcontextprotocol/sdk` to [FastMCP](https://github.com/punkpeye/fastmcp) — modular tool files, automatic schema validation, simplified error handling
- v1.0.12: Added reverse DNS lookup and improved output formatting
- v1.0.7: Added CVEs by Product search functionality and renamed vulnerabilities tool to cve_lookup
- v1.0.6: Added CVEDB integration for enhanced CVE lookups and CPE search functionality
- v1.0.0: Initial release with core functionality

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
