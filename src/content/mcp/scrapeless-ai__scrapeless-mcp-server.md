---
name: "scrapeless-ai/scrapeless-mcp-server"
description: "The Scrapeless Model Context Protocol service acts as an MCP server connector to the Google SERP API, enabling web search within the MCP ecosystem without leaving it."
category: "Search & Data Extraction"
repo: "scrapeless-ai/scrapeless-mcp-server"
stars: 161
url: "https://github.com/scrapeless-ai/scrapeless-mcp-server"
body_length: 9850
license: "MIT"
language: "TypeScript"
body_tr: |-
  ![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/banner.png)

  # Scrapeless MCP Server

  **Scrapeless Model Context Protocol (MCP) Server'e hoş geldiniz** — LLM'lerin, AI Ajanlarının ve AI uygulamalarının gerçek zamanlı olarak web ile etkileşim kurmasını sağlayan güçlü bir entegrasyon katmanı.

  Açık MCP standardı üzerine inşa edilen Scrapeless MCP Server, **ChatGPT**, **Claude** gibi modelleri ve **Cursor**, **Windsurf** gibi araçları geniş bir dış kaynak yelpazesine sorunsuzca bağlar; bunlar şunları içerir:

  - **Google hizmetleri entegrasyonu** (Arama, Trends)
  - **Tarayıcı otomasyonu** — sayfa düzeyinde navigasyon ve etkileşim için
  - **Web kazıma** — dinamik, JS-ağır siteleri HTML, Markdown veya ekran görüntüleri olarak dışa aktarın

  İster bir AI araştırma asistanı, ister bir kodlama copilotu veya özerk web ajanları inşa ediyor olun, bu sunucu iş akışlarınızın ihtiyaç duyduğu dinamik bağlamı ve gerçek dünya verilerini sağlar — **engellenmeden**.

  ## Kullanım Örnekleri

  1. Claude ile Otomatik Web Etkileşimi ve Veri Çıkarma

  Scrapeless MCP Browser kullanarak, Claude konuşma komutları aracılığıyla web navigasyonu, tıklama, kaydırma ve kazıma gibi karmaşık görevleri gerçekleştirebilir; `live sessions` aracılığıyla web etkileşimi sonuçlarının gerçek zamanlı önizlemesi mevcuttur.

  ![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/mcp-1.gif)

  2. Cloudflare'i Aşarak Hedef Sayfa İçeriğini Alma

  Scrapeless MCP Browser hizmetini kullanarak, Cloudflare sayfasına otomatik olarak erişilir ve işlem tamamlandıktan sonra sayfa içeriği çıkarılarak Markdown formatında döndürülür.

  ![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/mcp-2.gif)

  3. Dinamik Olarak Oluşturulan Sayfa İçeriğini Çıkarma ve Dosyaya Yazma

  Scrapeless MCP Universal API kullanarak, yukarıdaki hedef sayfanın JavaScript ile oluşturulan içeriği kazınır, Markdown formatında dışa aktarılır ve sonunda **`text.md`** adlı yerel bir dosyaya yazılır.

  ![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/mcp-3.gif)

  4. Otomatik SERP Kazıma

  Scrapeless MCP Server kullanarak, Google Arama'da "web scraping" anahtar kelimesini sorgulayın, ilk 10 arama sonucunu alın (başlık, bağlantı ve özet dahil) ve içeriği `serp.text` adlı dosyaya yazın.

  ![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/mcp-4.gif)

  Bu sunucuları nasıl kullanacağınıza ilişkin ek örnekler:

  | Örnek                                                                                                                           |
  | --------------------------------------------------------------------------------------------------------------------------------- |
  | Google arama ile scrapeless'i arayın.                                                                                               |
  | Son bir yılda "AI" için arama ilgisini bulun.                                                                                     |
  | [chatgpt.com](http://chatgpt.com) adresini ziyaret etmek için bir tarayıcı kullanın, "Bugün hava nasıl?" arayın ve sonuçları özetleyin. |
  | [scrapeless.com](http://scrapeless.com) sayfasının HTML içeriğini kazıyın.                                                          |
  | [scrapeless.com](http://scrapeless.com) sayfasının Markdown içeriğini kazıyın.                                                      |
  | [scrapeless.com](http://scrapeless.com) ekran görüntülerini alın.                                                                       |

  ## Kurulum Kılavuzu

  1. Scrapeless Anahtarı Alın

  - Scrapeless Paneline [giriş yapın](https://app.scrapeless.com/passport/login?utm_source=github&utm_medium=github-mcp&utm_campaign=mcp) (Ücretsiz deneme mevcuttur)
  - Ardından sol tarafta "**Setting**" seçeneğine tıklayın -> "**API Key Management**" seçeneğini seçin -> "**Create API Key**" seçeneğine tıklayın. Son olarak, oluşturduğunuz API Anahtarı'na tıklayarak **kopyalayın**.

  ![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/get-apikey.png)

  2. MCP İstemcinizi Yapılandırın

  Scrapeless MCP Server hem **Stdio** hem de **Streamable HTTP** taşıma modlarını destekler.

  🖥️ Stdio (Yerel Yürütme)

  ```JSON
  {
    "mcpServers": {
      "Scrapeless MCP Server": {
        "command": "npx",
        "args": ["-y", "scrapeless-mcp-server"],
        "env": {
          "SCRAPELESS_KEY": "YOUR_SCRAPELESS_KEY"
        }
      }
    }
  }
  ```

  🌐 Streamable HTTP (Barındırılan API Modu)

  ```JSON
  {
    "mcpServers": {
      "Scrapeless MCP Server": {
        "type": "streamable-http",
        "url": "https://api.scrapeless.com/mcp",
        "headers": {
          "x-api-token": "YOUR_SCRAPELESS_KEY"
        },
        "disabled": false,
        "alwaysAllow": []
      }
    }
  }
  ```

  #### Gelişmiş Seçenekler

  Tarayıcı oturumu davranışını isteğe bağlı parametrelerle özelleştirin. Bunlar ortam değişkenleri (Stdio için) veya HTTP başlıkları (Streamable HTTP için) aracılığıyla ayarlanabilir:

  | Stdio (Env Var)         | Streamable HTTP (HTTP Header) | Açıklama                                                                                                                  |
  | ----------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
  | BROWSER_PROFILE_ID      | x-browser-profile-id          | Oturum sürekliliği için yeniden kullanılabilir bir tarayıcı profili kimliğini belirtir.                                                              |
  | BROWSER_PROFILE_PERSIST | x-browser-profile-persist     | Çerezler, yerel depolama vb. için kalıcı depolamayı etkinleştirir.                                                                  |
  | BROWSER_SESSION_TTL     | x-browser-session-ttl         | Saniye cinsinden **maksimum oturum zaman aşımını** tanımlar. Oturum, bu etkinlik süresi sonra otomatik olarak sona erer. |

  ## Claude Desktop ile Entegrasyon

  1. **Claude Desktop**'ı açın
  2. Şuraya gidin: `Settings` → `Tools` → `MCP Servers`
  3. **"Add MCP Server"** seçeneğine tıklayın
  4. Yukarıdaki `Stdio` veya `Streamable HTTP` yapılandırmasını yapıştırın
  5. Kaydedin ve sunucuyu etkinleştirin
  6. Claude artık Scrapeless kullanarak web sorguları yapabilir, içerik çıkarabilir ve sayfalarla etkileşim kurabilir

  ## Cursor IDE ile Entegrasyon

  1. **Cursor**'ı açın
  2. `Cmd + Shift + P` tuşlarına basın ve şu şekilde arayın: `Configure MCP Servers`
  3. Scrapeless MCP yapılandırmasını yukarıdaki formatı kullanarak ekleyin
  4. Dosyayı kaydedin ve Cursor'ı yeniden başlatın (gerekirse)
  5. Şimdi Cursor'a şunlar gibi sorular sorabilirsiniz:
     1. `"Bu hatanın çözümü için StackOverflow'da arama yap"`
     2. `"Bu sayfanın HTML'sini kazı"`
  6. Arka planda Scrapeless'i kullanacaktır.

  ## Desteklenen MCP Araçları

  | Ad                 | Açıklama                                                    |
  | ------------------ | -------------------------------------------------------------- |
  | google_search      | Evrensel bilgi arama motoru.                           |
  | google_trends      | Google Trends'ten trend arama verilerini alın.                   |
  | browser_create     | Scrapeless kullanarak bir bulut tarayıcı oturumu oluşturun veya yeniden kullanın.      |
  | browser_close      | Bulut tarayıcısını keserek mevcut oturumu kapatın. |
  | browser_goto       | Tarayıcıyı belirtilen bir URL'ye yönlendirin.                           |
  | browser_go_back    | Tarayıcı geçmişinde bir adım geri gidin.                           |
  | browser_go_forward | Tarayıcı geçmişinde bir adım ileri gidin.                        |
  | browser_click      | Sayfada belirli bir öğeyi tıklayın.                          |
  | browser_type       | Belirtilen bir giriş alanına metin yazın.                        |
  | browser_press_key  | Tuş basışını simüle edin.                                          |
  | browser_wait_for   | Belirli bir sayfa öğesinin görünmesini bekleyin.                    |
  | browser_wait       | Belirli bir süre boyunca yürütmeyi duraklatın.                          |
  | browser_screenshot | Mevcut sayfanın ekran görüntüsünü alın.                      |
  | browser_get_html   | Mevcut sayfanın tam HTML'sini alın.                         |
  | browser_get_text   | Mevcut sayfadaki tüm görünür metni alın.                    |
  | browser_scroll     | Sayfanın sonuna kaydırın.                              |
  | browser_scroll_to  | Belirli bir öğeyi görünüme kaydırın.                           |
  | scrape_html        | Bir URL'yi kazıyın ve tam HTML içeriğini döndürün.                 |
  | scrape_markdown    | Bir URL'yi kazıyın ve içeriğini Markdown olarak döndürün.               |
  | scrape_screenshot  | Herhangi bir web sayfasının yüksek kaliteli ekran görüntüsünü alın.              |

  ## Güvenlik En İyi Uygulamaları

  Scrapeless MCP Server'ı LLM'lerle (ChatGPT, Claude veya Cursor gibi) kullanırken, kazınan veya çıkarılan tüm web içeriğini dikkatli bir şekilde ele almak kritiktir. **Web verileri varsayılan olarak güvenilmezdir** ve uygun olmayan işlem, uygulamanızı prompt enjeksiyonu veya diğer güvenlik açıklarına maruz bırakabilir.

  #### ✅ Önerilen Uygulamalar

  - **Ham kazınmış içeriği asla doğrudan LLM istemlerine geçirmeyin.** Ham HTML, JavaScript veya kullanıcı tarafından oluşturulan metin gizli enjeksiyon yükü içerebilir.
  - **Çıkarılan tüm içeriği temizleyin ve doğrulayın.** Zararlı olabilecek etiketleri ve komut dosyalarını, içeriği akış aşağı mantığında veya AI modellerinde kullanmadan önce çıkarın veya kaçırın.
  - **Serbest biçimli metin yerine yapılandırılmış çıkarmayı tercih edin.** Yalnızca güvendiğiniz içeriği çıkarmak için `scrape_html`, `scrape_markdown` veya hedeflenen `browser_get_text` öğelerini bilinen güvenli seçicilerle kullanın.
  - **Dinamik olarak oluşturulan sayfaları kazırken alan adı veya seçici beyaz listesi uygulayın**, veri akışını bilinen ve güvenilir kaynaklarla sınırlamak için.
  - **Yapılan tüm giden istekleri günlüğe kaydedin ve izleyin** tarayıcı veya kazıma araçları aracılığıyla, özellikle hassas veriler, tokenler veya dahili ağ erişimi işliyorsanız.

  #### 🚫 Kaçının

  - Kazınan HTML'yi doğrudan istemler içine enjekte etmek
  - Kullanıcıların doğrulama olmaksızın rastgele URL'ler veya CSS seçicileri belirtmesine izin vermek
  - Gelecekteki istem kullanımı için filtrelenmemiş kazınmış içeriği depolamak

  ## Topluluk

  - [MCP Server Discord](https://backend.scrapeless.com/app/api/v1/public/links/discord)

  ## Bize Ulaşın

  Sorular, öneriler veya işbirliği talepleri için aşağıdaki yollardan bize ulaşmaktan çekinmeyin:

  - Email: [market@scrapeless.com](mailto:market@scrapeless.com)
  - Resmi Web Sitesi: [https://www.scrapeless.com](https://www.scrapeless.com/)
  - Topluluk Forumu: https://discord.gg/Np4CAHxB9a
---

![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/banner.png)

# Scrapeless MCP Server

**Welcome to the official Scrapeless Model Context Protocol (MCP) Server** — a powerful integration layer that empowers LLMs, AI Agents, and AI applications to interact with the web in real time.

Built on the open MCP standard, Scrapeless MCP Server seamlessly connects models like **ChatGPT**, **Claude**, and tools like **Cursor** and **Windsurf** to a wide range of external capabilities, including:

- **Google services integration** (Search, Trends)
- **Browser automation** for page-level navigation and interaction
- **Scrape** dynamic, JS-heavy sites—export as HTML, Markdown, or screenshots

Whether you're building an AI research assistant, a coding copilot, or autonomous web agents, this server provides the dynamic context and real-world data your workflows need—**without getting blocked**.

## Usage Examples

1. Automated Web Interaction and Data Extraction with Claude

Using Scrapeless MCP Browser, Claude can perform complex tasks such as web navigation, clicking, scrolling, and scraping through conversational commands, with real-time preview of web interaction results via `live sessions`.

![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/mcp-1.gif)

2. Bypassing Cloudflare to Retrieve Target Page Content

Using the Scrapeless MCP Browser service, the Cloudflare page is automatically accessed, and after the process is completed, the page content is extracted and returned in Markdown format.

![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/mcp-2.gif)

3. Extracting Dynamically Rendered Page Content and Writing to File

Using the Scrapeless MCP Universal API, the JavaScript-rendered content of the target page above is scraped, exported in Markdown format, and finally written to a local file named **`text.md`**.

![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/mcp-3.gif)

4. Automated SERP Scraping

Using the Scrapeless MCP Server, query the keyword “web scraping” on Google Search, retrieve the first 10 search results (including title, link, and summary), and write the content to the file named `serp.text`.

![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/mcp-4.gif)

Here are some additional examples of how to use these servers:

| Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- |
| Search scrapeless by Google search.                                                                                               |
| Find the search interest for "AI" over the last year.                                                                             |
| Use a browser to visit [chatgpt.com](http://chatgpt.com), search for "What's the weather like today?", and summarize the results. |
| Scrape the HTML content of [scrapeless.com](http://scrapeless.com) page.                                                          |
| Scrape the Markdown content of [scrapeless.com](http://scrapeless.com) page.                                                      |
| Get screenshots of [scrapeless.com](http://scrapeless.com).                                                                       |

## Setup Guide

1. Get Scrapeless Key

- [Log in](https://app.scrapeless.com/passport/login?utm_source=github&utm_medium=github-mcp&utm_campaign=mcp) to the Scrapeless Dashboard（Free trial available）
- Then click "**Setting**" on the left -> select "**API Key Management**" -> click "**Create API Key**". Finally, click the API Key you created to **copy** it.

![preview](https://raw.githubusercontent.com/scrapeless-ai/scrapeless-mcp-server/HEAD/assets/get-apikey.png)

2. Configure Your MCP Client

Scrapeless MCP Server supports both **Stdio** and **Streamable HTTP** transport modes.

🖥️ Stdio (Local Execution)

```JSON
{
  "mcpServers": {
    "Scrapeless MCP Server": {
      "command": "npx",
      "args": ["-y", "scrapeless-mcp-server"],
      "env": {
        "SCRAPELESS_KEY": "YOUR_SCRAPELESS_KEY"
      }
    }
  }
}
```

🌐 Streamable HTTP (Hosted API Mode)

```JSON
{
  "mcpServers": {
    "Scrapeless MCP Server": {
      "type": "streamable-http",
      "url": "https://api.scrapeless.com/mcp",
      "headers": {
        "x-api-token": "YOUR_SCRAPELESS_KEY"
      },
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

#### Advanced Options

Customize browser session behavior with optional parameters. These can be set via environment variables (for Stdio) or HTTP headers (for Streamable HTTP):

| Stdio (Env Var)         | Streamable HTTP (HTTP Header) | Description                                                                                                                  |
| ----------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| BROWSER_PROFILE_ID      | x-browser-profile-id          | Specifies a reusable browser profile ID for session continuity.                                                              |
| BROWSER_PROFILE_PERSIST | x-browser-profile-persist     | Enables persistent storage for cookies, local storage, etc.                                                                  |
| BROWSER_SESSION_TTL     | x-browser-session-ttl         | Defines the **maximum session timeout** in seconds. The session will automatically expire after this duration of inactivity. |

## Integration with Claude Desktop

1. Open **Claude Desktop**
2. Navigate to: `Settings` → `Tools` → `MCP Servers`
3. Click **"Add MCP Server"**
4. Paste either the `Stdio` or `Streamable HTTP` config above
5. Save and enable the server
6. Claude will now be able to issue web queries, extract content, and interact with pages using Scrapeless

## Integration with Cursor IDE

1. Open **Cursor**
2. Press `Cmd + Shift + P` and search for: `Configure MCP Servers`
3. Add the Scrapeless MCP config using the format above
4. Save the file and restart Cursor (if needed)
5. Now you can ask Cursor things like:
   1. `"Search StackOverflow for a solution to this error"`
   2. `"Scrape the HTML from this page"`
6. And it will use Scrapeless in the background.

## Supported MCP Tools

| Name               | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| google_search      | Universal information search engine.                           |
| google_trends      | Get trending search data from Google Trends.                   |
| browser_create     | Create or reuse a cloud browser session using Scrapeless.      |
| browser_close      | Closes the current session by disconnecting the cloud browser. |
| browser_goto       | Navigate browser to a specified URL.                           |
| browser_go_back    | Go back one step in browser history.                           |
| browser_go_forward | Go forward one step in browser history.                        |
| browser_click      | Click a specific element on the page.                          |
| browser_type       | Type text into a specified input field.                        |
| browser_press_key  | Simulate a key press.                                          |
| browser_wait_for   | Wait for a specific page element to appear.                    |
| browser_wait       | Pause execution for a fixed duration.                          |
| browser_screenshot | Capture a screenshot of the current page.                      |
| browser_get_html   | Get the full HTML of the current page.                         |
| browser_get_text   | Get all visible text from the current page.                    |
| browser_scroll     | Scroll to the bottom of the page.                              |
| browser_scroll_to  | Scroll a specific element into view.                           |
| scrape_html        | Scrape a URL and return its full HTML content.                 |
| scrape_markdown    | Scrape a URL and return its content as Markdown.               |
| scrape_screenshot  | Capture a high-quality screenshot of any webpage.              |

## Security Best Practices

When using Scrapeless MCP Server with LLMs (like ChatGPT, Claude, or Cursor), it's critical to handle all scraped or extracted web content with care. **Web data is untrusted by default**, and improper handling may expose your application to prompt injection or other security vulnerabilities.

#### ✅ Recommended Practices

- **Never pass raw scraped content directly into LLM prompts.** Raw HTML, JavaScript, or user-generated text may contain hidden injection payloads.
- **Sanitize and validate all extracted content.** Strip or escape potentially harmful tags and scripts before using content in downstream logic or AI models.
- **Prefer structured extraction over free-form text.** Use tools like `scrape_html`, `scrape_markdown`, or targeted `browser_get_text` with known-safe selectors to extract only the content you trust.
- **Apply domain or selector whitelisting** when scraping dynamically generated pages, to restrict data flow to known and trusted sources.
- **Log and monitor all outbound requests** made via browser or scraping tools, especially if you're handling sensitive data, tokens, or internal network access.

#### 🚫 Avoid

- Injecting scraped HTML directly into prompts
- Letting users specify arbitrary URLs or CSS selectors without validation
- Storing unfiltered scraped content for future prompt usage

## Community

- [MCP Server Discord](https://backend.scrapeless.com/app/api/v1/public/links/discord)

## Contact Us

For questions, suggestions, or collaboration inquiries, feel free to contact us via:

- Email: [market@scrapeless.com](mailto:market@scrapeless.com)
- Official Website: [https://www.scrapeless.com](https://www.scrapeless.com/)
- Community Forum: https://discord.gg/Np4CAHxB9a
