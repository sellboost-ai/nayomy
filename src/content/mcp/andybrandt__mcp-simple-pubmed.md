---
name: "andybrandt/mcp-simple-pubmed"
description: "MCP to search and read medical / life sciences papers from PubMed."
category: "Search & Data Extraction"
repo: "andybrandt/mcp-simple-pubmed"
stars: 167
url: "https://github.com/andybrandt/mcp-simple-pubmed"
body_length: 5029
license: "MIT"
language: "Python"
body_tr: |-
  [![MseeP Badge](https://mseep.net/pr/andybrandt-mcp-simple-pubmed-badge.jpg)](https://mseep.ai/app/andybrandt-mcp-simple-pubmed)

  # MCP Simple PubMed
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/andybrandt/mcp-simple-pubmed)](https://archestra.ai/mcp-catalog/andybrandt__mcp-simple-pubmed)
  [![smithery badge](https://smithery.ai/badge/mcp-simple-pubmed)](https://smithery.ai/server/mcp-simple-pubmed)

  Entrez API aracılığıyla PubMed makalelerine erişim sağlayan bir MCP sunucusu.

  <a href="https://glama.ai/mcp/servers/5wlfb8i6bj"></a>

  ## Özellikler

  ### Tools
  - **PubMed Ara** - Anahtar kelimeler, MeSH terimleri, yazar adları, tarih aralıkları ve Boolean operatörleri kullanarak veritabanında arama yapın
  - **Tam Metni Al** - Kullanılabilir olduğunda tam metni indirin (PubMed Central'daki açık erişim makaleleri için)
  - **Özetlere Erişin** - Resource URI'leri aracılığıyla makale özetlerini ve meta verilerini alın

  ### Prompts (v0.1.14'te Yeni)
  MCP Prompts, etkili PubMed aramaları oluşturmanıza yardımcı olur:

  - **Sistematik Derleme Araması** - Sistematik derslemeler için MeSH terimleri, eş anlamlılar ve tarih filtreleri içeren kapsamlı arama stratejileri oluşturun
  - **PICO Araması** - PICO çerçevesini (Popülasyon, Müdahale, Karşılaştırma, Sonuç) kullanarak klinik soru aramaları oluşturun
  - **Yazar Araması** - Belirli bir yazar tarafından yapılan tüm yayınları uygun ad formatlaması ile bulun

  Bu promptlar, AI'nin optimize edilmiş PubMed sorguları oluşturmasını rehberlik eder ve kapsamlı literatür aramaları yapılmasını kolaylaştırır.

  ### Notlar

  Lütfen dikkat edin ki araç, tam metni XML'e dönüştürülmüş versiyonunu döndürür. Ancak bu, "insan tarafından okunabilir" metinden daha faydalıdır çünkü AI'lere belgenin yapısı hakkında ek bilgi verir. En azından Claude 3.5 Sonnet bunu tercih ettiğini söyledi.

  Ayrıca lütfen dikkat edin ki bu araç ve muhtemelen diğer araçların bir makalenin tam metnini sunamaması, bunun mevcut olmadığı anlamına gelmeyebilir. Bu aracı test ederken, PubMed'de tam metni olmayan bir makalenin karşılaştığım ve Claude, DOI aracılığıyla aldığımız yayın URL'sine fetch kullanarak eriştiğinde "forbidden" hatası aldığı durumu yaşadım. Ancak, aynı sayfaya düzenli bir tarayıcı kullanarak erişebildim.

  Başka bir deyişle, AI asistanınız bu aracı kullanarak bir makalenin tam metnini alamıyorsa, bunu düzenli bir web tarayıcısı ile manuel olarak denemeye değer.

  Son olarak, bu araç tabii ki ücretli/paywalled makalelere erişim sağlayamaz. Bunları kütüphane erişimi aracılığıyla veya son çare olarak kamu tarafından finanse edilen araştırmaları açık erişim yapma çabasında olan belirli bir site aracılığıyla okuyabilirsiniz.

  ## Kurulum

  ### Smithery Üzerinden Kurulum

  Simple PubMed'i Claude Desktop'ta otomatik olarak [Smithery](https://smithery.ai/server/mcp-simple-pubmed) aracılığıyla kurmak için:

  ```bash
  npx -y @smithery/cli install mcp-simple-pubmed --client claude
  ```

  ### Manuel Kurulum
  ```bash
  pip install mcp-simple-pubmed
  ```

  ## Konfigürasyon

  Sunucu aşağıdaki ortam değişkenlerini gerektirir:

  - `PUBMED_EMAIL`: E-posta adresiniz (NCBI tarafından zorunludur)
  - `PUBMED_API_KEY`: Daha yüksek hız limitleri için isteğe bağlı API anahtarı

  Standart hız limiti 3 istek / saniye. Tipik kullanım senaryosunda AI'nin daha fazla trafik oluşturması çok olası olmadığı için hız sınırlaması uygulanmamıştır. Buna ihtiyacınız varsa, [bir API anahtarı kaydedebilirsiniz](https://www.ncbi.nlm.nih.gov/account/) bu size 10 istek / saniye verecektir. [NCBI sayfalarında bunu okuyun](https://www.ncbi.nlm.nih.gov/books/NBK25497/#chapter2.Usage_Guidelines_and_Requiremen).

  ## Claude Desktop ile Kullanım

  Claude Desktop konfigürasyonunuza ekleyin (`claude_desktop_config.json`):

  (Mac OS)

  ```json
  {
    "mcpServers": {
      "simple-pubmed": {
        "command": "python",
        "args": ["-m", "mcp_simple_pubmed"],
        "env": {
          "PUBMED_EMAIL": "your-email@example.com",
          "PUBMED_API_KEY": "your-api-key" 
        }
      }
    }
  }
  ```

  (Windows)

  ```json
  {
    "mcpServers": {
      "simple-pubmed": {
        "command": "C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Programs\\Python\\Python311\\python.exe",
        "args": [
          "-m",
          "mcp_simple_pubmed"
        ],
        "env": {
          "PUBMED_EMAIL": "your-email@example.com",
          "PUBMED_API_KEY": "your-api-key" 
        }
      }
    }
  }
  ```

  ### macOS SSL Sertifikası Düzeltmesi

  Eğer macOS'ta SSL sertifikası doğrulama hataları alırsanız (örneğin `[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate in certificate chain`), uygun sertifika paketini kurmanız gerekir:

  ```bash
  /Applications/Python\ 3.13/Install\ Certificates.command
  ```
  `3.13` yerine Python sürüm numaranızı yazın. Bu script python.org'dan gelen Python kurulumlarında gelir.

  Bunu Finder'dan da çalıştırabilirsiniz:

  ![image](https://raw.githubusercontent.com/andybrandt/mcp-simple-pubmed/HEAD/MacOs_certificates_solution.jpg)

  Eğer bu değişikliği Claude Desktop açıkken yaparsanız, değişikliğin geçerli olması için onu kapatıp yeniden başlatmanız gerekir.

  ## Lisans

  MIT License
---

[![MseeP Badge](https://mseep.net/pr/andybrandt-mcp-simple-pubmed-badge.jpg)](https://mseep.ai/app/andybrandt-mcp-simple-pubmed)

# MCP Simple PubMed
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/andybrandt/mcp-simple-pubmed)](https://archestra.ai/mcp-catalog/andybrandt__mcp-simple-pubmed)
[![smithery badge](https://smithery.ai/badge/mcp-simple-pubmed)](https://smithery.ai/server/mcp-simple-pubmed)

An MCP server that provides access to PubMed articles through the Entrez API.

<a href="https://glama.ai/mcp/servers/5wlfb8i6bj"></a>

## Features

### Tools
- **Search PubMed** - Search the database using keywords, MeSH terms, author names, date ranges, and Boolean operators
- **Get Full Text** - Download full text when available (for open access articles in PubMed Central)
- **Access Abstracts** - Retrieve article abstracts and metadata via resource URIs

### Prompts (New in v0.1.14)
MCP Prompts help you construct effective PubMed searches:

- **Systematic Review Search** - Generate comprehensive search strategies with MeSH terms, synonyms, and date filters for systematic reviews
- **PICO Search** - Build clinical question searches using the PICO framework (Population, Intervention, Comparison, Outcome)
- **Author Search** - Find all publications by a specific author with proper name formatting

These prompts guide the AI to build optimized PubMed queries, making it easier to conduct thorough literature searches.

### Notes

Please note that the tool returns XML-ized version of full text. It is however more useful for AIs than a "human readable" text would have been as it gives them additional information about document's structure. At least, this is what Claude 3.5 Sonnet said he prefers. 

Please also note that inability of this tool and possibly other tools to deliver a paper's full text may not be due to the fact that it is not available. When testing this tool I came across a paper that did not have full text on PubMed and when Claude accessed the publication URL (which we did get through DOI) using fetch he did get a "forbidden” error. However, I was able to access the very same page using a regular browser. 

In other words if your AI assistant is not able to get the full text of a paper using this tool it is worth trying manually with a regular web browser.

Finally, this tool of course can’t give you access to paywalled/paid papers. You may be able to read them through your library access or – as a last resort – through a certain site that strives to make publicly funded research freely available. 

## Installation

### Installing via Smithery

To install Simple PubMed for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-simple-pubmed):

```bash
npx -y @smithery/cli install mcp-simple-pubmed --client claude
```

### Manual Installation
```bash
pip install mcp-simple-pubmed
```

## Configuration

The server requires the following environment variables:

- `PUBMED_EMAIL`: Your email address (required by NCBI)
- `PUBMED_API_KEY`: Optional API key for higher rate limits 

The standard rate limit is 3 requests / second. No rate limiting was implemented, as it is highly unlikely in the typical usage scenario that your AI would generate more traffic. If you need it, you can [register for an API key](https://www.ncbi.nlm.nih.gov/account/) which will give you 10 requests / second. Read about [this on NCBI pages](https://www.ncbi.nlm.nih.gov/books/NBK25497/#chapter2.Usage_Guidelines_and_Requiremen).

## Usage with Claude Desktop

Add to your Claude Desktop configuration (`claude_desktop_config.json`):

(Mac OS)

```json
{
  "mcpServers": {
    "simple-pubmed": {
      "command": "python",
      "args": ["-m", "mcp_simple_pubmed"],
      "env": {
        "PUBMED_EMAIL": "your-email@example.com",
        "PUBMED_API_KEY": "your-api-key" 
      }
    }
  }
}
```

(Windows)


```json
{
  "mcpServers": {
    "simple-pubmed": {
      "command": "C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Programs\\Python\\Python311\\python.exe",
      "args": [
        "-m",
        "mcp_simple_pubmed"
      ],
      "env": {
        "PUBMED_EMAIL": "your-email@example.com",
        "PUBMED_API_KEY": "your-api-key" 
      }
    }
  }
}
```

### macOS SSL Certificate Fix

If you encounter SSL certificate verification errors on macOS (such as `[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate in certificate chain`), you need to install the proper certificate bundle:

```bash
/Applications/Python\ 3.13/Install\ Certificates.command
```
Replace `3.13` with your Python version number. This script comes with Python installations from python.org.

You can also run it from the Finder:

![image](https://raw.githubusercontent.com/andybrandt/mcp-simple-pubmed/HEAD/MacOs_certificates_solution.jpg)

If you perform this change while Claude Desktop is open you will need to quit it and start it again for it to take effect. 

## License

MIT License
