---
name: "securityfortech/secops-mcp"
description: "All-in-one security testing toolbox that brings together popular open source tools through a single MCP interface. Connected to an AI agent, it enables tasks like pentesting, bug bounty hunting, threat hunting, and more."
category: "Security"
repo: "securityfortech/secops-mcp"
stars: 195
url: "https://github.com/securityfortech/secops-mcp"
body_length: 6219
license: "MIT"
language: "Python"
body_tr: |-
  # Güvenlik İşlemleri Çok Araçlı Platform (MCP)
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/securityfortech/secops-mcp)](https://archestra.ai/mcp-catalog/securityfortech__secops-mcp)

  Birden fazla güvenlik aracını birleşik bir arayüzde entegre eden kapsamlı bir güvenlik işlemleri platformu. Bu platform, çeşitli güvenlik taraması ve test araçlarını çalıştırmak için merkezi bir yol sağlar.

  ## Özellikler

  - **Birleşik Arayüz**: Birden fazla güvenlik aracı için tek giriş noktası
  - **Docker Desteği**: Docker kullanarak kolay dağıtım
  - **JSON Çıktısı**: Tüm araçlar arasında tutarlı JSON çıktı formatı
  - **Hata Yönetimi**: Güçlü hata işleme ve raporlama
  - **Genişletilebilir**: Yeni araçlar ve işlevleri kolayca ekleme

  ## Dahil Edilen Araçlar

  - **Nuclei**: Hızlı ve özelleştirilebilir zafiyet tarayıcısı
  - **FFUF**: Hızlı web fuzzer ve içerik keşif aracı
  - **Amass**: Derinlemesine saldırı yüzeyi eşlemesi ve dış varlık keşfi
  - **Arjun**: Gizli parametreleri bulmak için HTTP parametresi keşif aracı
  - **Dirsearch**: Web yolu tarayıcısı
  - **Gospider**: Crawling ve URL keşfi için hızlı web spider
  - **Hashcat**: Gelişmiş parola kurtarma
  - **HTTPX**: Hızlı ve çok amaçlı HTTP toolkit
  - **IPInfo**: IP adresi bilgi toplama
  - **Nmap**: Ağ keşfi ve güvenlik denetimi
  - **SQLMap**: Otomatik SQL injection ve veritabanı devralmesi aracı
  - **Subfinder**: Subdomain keşif aracı
  - **TLSX**: TLS/SSL taraması ve analizi
  - **WFuzz**: Web uygulaması fuzzer
  - **XSStrike**: Gelişmiş XSS tespiti ve istismarı

  ## Araç Kategorileri

  ### Web Uygulaması Güvenliği
  - **Nuclei**: Özel şablonlarla zafiyet taraması
  - **FFUF**: Hızlı web fuzzing ve içerik keşfi
  - **WFuzz**: Web uygulaması fuzzing
  - **XSStrike**: XSS tespiti ve istismarı
  - **SQLMap**: SQL injection testi ve istismarı
  - **Arjun**: HTTP parametresi keşfi ve testi
  - **Gospider**: Web crawling ve URL keşfi
  - **Dirsearch**: Dizin ve dosya enumerasyonu

  ### Ağ Güvenliği
  - **Nmap**: Ağ taraması ve servis enumerasyonu
  - **HTTPX**: HTTP probing ve analizi
  - **TLSX**: TLS/SSL yapılandırması analizi

  ### Keşif
  - **Amass**: Saldırı yüzeyi eşlemesi ve varlık keşfi
  - **Subfinder**: Subdomain enumerasyonu
  - **IPInfo**: IP adresi zekası toplama

  ### Kriptografi
  - **Hashcat**: Parola kırma ve hash analizi

  ## Son Eklenenler

  ### Gospider Entegrasyonu
  - **Web Crawling**: Otomatik website crawling ve URL keşfi
  - **Birden Fazla Çıktı Formatı**: JSON ve metin çıktısı desteği
  - **Filtreleme Yetenekleri**: Uzantı tabanlı filtreleme ve içerik filtreleme
  - **Özelleştirilebilir Derinlik**: Ayarlanabilir crawling derinliği ve eşzamanlılık
  - **Subdomain Desteği**: Crawling'de alt domainleri dahil etme seçeneği
  - **Form Tespiti**: Otomatik HTML form tespiti
  - **Gizli Bilgi Keşfi**: Potansiyel hassas bilgilerin tanımlanması

  ### Arjun Entegrasyonu
  - **Parametre Keşfi**: Web uygulamalarında gizli HTTP parametrelerini bulma
  - **Birden Fazla HTTP Metodu**: GET, POST, PUT ve diğer metodlar desteği
  - **Toplu Tarama**: Birden fazla URL'yi aynı anda tarama
  - **Özel Wordlistler**: Özel parametre wordlistleri kullanma
  - **Kararlı Mod**: Kararlı tarama moduyla azaltılmış yalış pozitifleri
  - **Özel Header'lar**: Özel HTTP header'ları ve kimlik doğrulama desteği
  - **Threading Desteği**: Hızlı taramalar için yapılandırılabilir threading

  ## Kurulum

  ### Docker Kullanarak (Önerilen)

  1. Repository'yi klonlayın:
     ```bash
     git clone https://github.com/securityfortech/secops-mcp.git
     cd secops-mcp
     ```

  2. Docker image'ını oluşturun:
     ```bash
     docker build -t secops-mcp .
     ```

  3. Container'ı çalıştırın:
     ```bash
     docker run -it --rm secops-mcp
     ```

  ### Manuel Kurulum

  1. Repository'yi klonlayın:
     ```bash
     git clone https://github.com/securityfortech/secops-mcp.git
     cd secops-mcp
     ```

  2. Virtual environment oluşturun ve etkinleştirin:
     ```bash
     python -m venv venv
     source venv/bin/activate  # Windows'ta: venv\Scripts\activate
     ```

  3. Bağımlılıkları yükleyin:
     ```bash
     pip install -r requirements.txt
     ```

  4. Gerekli araçları yükleyin:
     - `tools/` dizinindeki her araç için kurulum talimatlarını izleyin
     - Tüm araçların sistem PATH'inizde olduğundan emin olun

  ## Kullanım

  1. Uygulamayı başlatın:
     ```bash
     python main.py
     ```

  2. Uygulama, çeşitli güvenlik araçlarını çalıştırmak için birleşik bir arayüz sağlayacaktır.

  3. Her araç tutarlı bir JSON formatında sonuçlar döndürür:
     ```json
     {
         "success": boolean,
         "error": string (hata durumunda),
         "results": object (başarı durumunda)
     }
     ```

  ## Kullanım Örnekleri

  ### Gospider Web Crawling
  ```python
  # Temel web crawling
  gospider_scan("https://example.com", depth=3, include_subs=True)

  # Belirli dosya türleri için filtrelenmiş crawling
  gospider_filtered_scan(
      "https://example.com",
      extensions=["js", "json", "xml"],
      exclude_extensions=["png", "jpg", "css"]
  )
  ```

  ### Arjun Parametre Keşfi
  ```python
  # Temel parametre keşfi
  arjun_scan("https://example.com/api", method="GET")

  # Özel verilerle POST parametresi keşfi
  arjun_scan(
      "https://example.com/login",
      method="POST",
      data="username=test&password=test",
      stable=True
  )

  # Toplu parametre taraması
  arjun_bulk_parameter_scan([
      "https://example.com/api/v1",
      "https://example.com/api/v2"
  ])
  ```

  ## Araç Yapılandırması

  Her araç, `tools/` dizinindeki ilgili wrapper aracılığıyla yapılandırılabilir. Yapılandırma seçenekleri şunlardır:

  - Çıktı formatları
  - Zaman aşımları
  - Ayrıntılılık seviyeleri
  - Özel wordlistler
  - Araç özel parametreleri

  ## Güvenlik Hususları

  - Bu araç yalnızca yetkili güvenlik testi için kullanılır
  - Sistemleri taramadan önce her zaman uygun yetkilendirme alın
  - Rate limiting ve tarama yoğunluğu konusunda dikkatli olun
  - robots.txt ve hizmet koşullarına saygı gösterin
  - Uygun wordlistler ve tarama parametreleri kullanın

  ## Katkıda Bulunma

  1. Repository'yi fork edin
  2. Bir feature branch oluşturun
  3. Değişikliklerinizi commit edin
  4. Branch'e push edin
  5. Pull Request oluşturun

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için LICENSE dosyasına bakın.

  ## Teşekkürler

  - Tüm güvenlik araçları ve bunların geliştiricileri
  - Katkı ve desteği için güvenlik topluluğu
---

# Security Operations Multi-Tool Platform (MCP)
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/securityfortech/secops-mcp)](https://archestra.ai/mcp-catalog/securityfortech__secops-mcp)

A comprehensive security operations platform that integrates multiple security tools into a unified interface. This platform provides a centralized way to run various security scanning and testing tools.

## Features

- **Unified Interface**: Single entry point for multiple security tools
- **Docker Support**: Easy deployment using Docker
- **JSON Output**: Consistent JSON output format across all tools
- **Error Handling**: Robust error handling and reporting
- **Extensible**: Easy to add new tools and functionality

## Included Tools

- **Nuclei**: Fast and customizable vulnerability scanner
- **FFUF**: Fast web fuzzer and content discovery tool
- **Amass**: In-depth attack surface mapping and external asset discovery
- **Arjun**: HTTP parameter discovery tool for finding hidden parameters
- **Dirsearch**: Web path scanner
- **Gospider**: Fast web spider for crawling and URL discovery
- **Hashcat**: Advanced password recovery
- **HTTPX**: Fast and multi-purpose HTTP toolkit
- **IPInfo**: IP address information gathering
- **Nmap**: Network exploration and security auditing
- **SQLMap**: Automatic SQL injection and database takeover tool
- **Subfinder**: Subdomain discovery tool
- **TLSX**: TLS/SSL scanning and analysis
- **WFuzz**: Web application fuzzer
- **XSStrike**: Advanced XSS detection and exploitation

## Tool Categories

### Web Application Security
- **Nuclei**: Vulnerability scanning with custom templates
- **FFUF**: Fast web fuzzing and content discovery
- **WFuzz**: Web application fuzzing
- **XSStrike**: XSS detection and exploitation
- **SQLMap**: SQL injection testing and exploitation
- **Arjun**: HTTP parameter discovery and testing
- **Gospider**: Web crawling and URL discovery
- **Dirsearch**: Directory and file enumeration

### Network Security
- **Nmap**: Network scanning and service enumeration
- **HTTPX**: HTTP probing and analysis
- **TLSX**: TLS/SSL configuration analysis

### Reconnaissance
- **Amass**: Attack surface mapping and asset discovery
- **Subfinder**: Subdomain enumeration
- **IPInfo**: IP address intelligence gathering

### Cryptography
- **Hashcat**: Password cracking and hash analysis

## Recent Additions

### Gospider Integration
- **Web Crawling**: Automated website crawling and URL discovery
- **Multiple Output Formats**: JSON and text output support
- **Filtering Capabilities**: Extension-based filtering and content filtering
- **Configurable Depth**: Customizable crawling depth and concurrency
- **Subdomain Support**: Option to include subdomains in crawling
- **Form Detection**: Automatic detection of HTML forms
- **Secret Discovery**: Identification of potential sensitive information

### Arjun Integration
- **Parameter Discovery**: Find hidden HTTP parameters in web applications
- **Multiple HTTP Methods**: Support for GET, POST, PUT, and other methods
- **Bulk Scanning**: Scan multiple URLs simultaneously
- **Custom Wordlists**: Use custom parameter wordlists
- **Stable Mode**: Reduced false positives with stable scanning mode
- **Custom Headers**: Support for custom HTTP headers and authentication
- **Threading Support**: Configurable threading for faster scans

## Installation

### Using Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/securityfortech/secops-mcp.git
   cd secops-mcp
   ```

2. Build the Docker image:
   ```bash
   docker build -t secops-mcp .
   ```

3. Run the container:
   ```bash
   docker run -it --rm secops-mcp
   ```

### Manual Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/securityfortech/secops-mcp.git
   cd secops-mcp
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Install required tools:
   - Follow the installation instructions for each tool in the `tools/` directory
   - Ensure all tools are in your system PATH

## Usage

1. Start the application:
   ```bash
   python main.py
   ```

2. The application will provide a unified interface for running various security tools.

3. Each tool returns results in a consistent JSON format:
   ```json
   {
       "success": boolean,
       "error": string (if error),
       "results": object (if success)
   }
   ```

## Usage Examples

### Gospider Web Crawling
```python
# Basic web crawling
gospider_scan("https://example.com", depth=3, include_subs=True)

# Filtered crawling for specific file types
gospider_filtered_scan(
    "https://example.com",
    extensions=["js", "json", "xml"],
    exclude_extensions=["png", "jpg", "css"]
)
```

### Arjun Parameter Discovery
```python
# Basic parameter discovery
arjun_scan("https://example.com/api", method="GET")

# POST parameter discovery with custom data
arjun_scan(
    "https://example.com/login",
    method="POST",
    data="username=test&password=test",
    stable=True
)

# Bulk parameter scanning
arjun_bulk_parameter_scan([
    "https://example.com/api/v1",
    "https://example.com/api/v2"
])
```

## Tool Configuration

Each tool can be configured through its respective wrapper in the `tools/` directory. Configuration options include:

- Output formats
- Timeouts
- Verbosity levels
- Custom wordlists
- Tool-specific parameters

## Security Considerations

- This tool is for authorized security testing only
- Always obtain proper authorization before scanning systems
- Be mindful of rate limiting and scanning intensity
- Respect robots.txt and terms of service
- Use appropriate wordlists and scanning parameters

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All the security tools and their developers
- The security community for their contributions and support
