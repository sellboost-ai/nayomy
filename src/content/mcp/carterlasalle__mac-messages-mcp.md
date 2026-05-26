---
name: "carterlasalle/mac_messages_mcp"
description: "An MCP server that securely interfaces with your iMessage database via the Model Context Protocol (MCP), allowing LLMs to query and analyze iMessage conversations. It includes robust phone number validation, attachment processing, contact management, group chat handling, and full support for sending and receiving messages."
description_tr: "iMessage veritabanınız ile Model Context Protocol (MCP) üzerinden güvenli şekilde bağlantı kuran bir MCP sunucusu. LLM'lerin iMessage sohbetlerini sorgulamasına ve analiz etmesine olanak tanır. Güçlü telefon numarası doğrulaması, ek işleme, kişi yönetimi, grup sohbeti desteği ve mesaj gönderme/alma işlevselliğini içerir."
category: "Communication"
repo: "carterlasalle/mac_messages_mcp"
stars: 288
url: "https://github.com/carterlasalle/mac_messages_mcp"
body_length: 9951
license: "MIT"
language: "Python"
homepage: "https://pypi.org/project/mac-messages-mcp/"
body_tr: |-
  # Mac Messages MCP

  macOS Messages uygulamasıyla etkileşim kurmak için MCP (Multiple Context Protocol) kullanan bir Python köprüsü.

  [![PyPI Downloads](https://static.pepy.tech/badge/mac-messages-mcp)](https://pepy.tech/projects/mac-messages-mcp)

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/carterlasalle/mac_messages_mcp)](https://archestra.ai/mcp-catalog/carterlasalle__mac_messages_mcp)
  [![mac_messages_mcp MCP score](https://glama.ai/mcp/servers/carterlasalle/mac_messages_mcp/badges/score.svg)](https://glama.ai/mcp/servers/carterlasalle/mac_messages_mcp)

  ![a-diagram-of-a-mac-computer-with-the-tex_FvvnmbaBTFeKy6F2GMlLqA_IfCBMgJARcia1WTH7FaqwA](https://github.com/user-attachments/assets/dbbdaa14-fadd-434d-a265-9e0c0071c11d)

  [![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/fdc62324-6ac9-44e2-8926-722d1157759a)


  <a href="https://glama.ai/mcp/servers/gxvaoc9znc">
    
  </a>

  ## Hızlı Yükleme

  ### Cursor Kullanıcıları İçin

  [![Install MCP Server](https://cursor.com/deeplink/mcp-install-light.svg)](https://cursor.com/install-mcp?name=mac-messages-mcp&config=eyJjb21tYW5kIjoidXZ4IG1hYy1tZXNzYWdlcy1tY3AifQ%3D%3D)

  *Mac Messages MCP'yi Cursor'a otomatik olarak eklemek için yukarıdaki düğmeye tıklayın*

  ### Claude Desktop Kullanıcıları İçin

  Kurulum talimatları için aşağıda [Integration bölümüne](#integration) bakın.

  ## Özellikler

  - **Evrensel Mesaj Gönderme**: Alıcının durumuna göre otomatik olarak iMessage veya SMS/RCS üzerinden gönderir
  - **Akıllı Geri Dönüş**: iMessage kullanılamadığında SMS'e sorunsuz geçiş (Android kullanıcıları için mükemmel)
  - **Mesaj Okuma**: macOS Messages uygulamasından son mesajları okuyun
  - **Kişi Filtrelemesi**: Mesajları belirli kişilere veya telefon numaralarına göre filtreleyin
  - **Grup Sohbeti Filtrelemesi**: `tool_get_chats`'ten sohbet kimliklerini kullanarak bir grup konuşmasını kronolojik olarak okuyun
  - **Bulanık Arama**: Mesaj içeriğinde akıllı eşleştirme ile arama yapın
  - **Ekler**: Sohbetlerde paylaşılan fotoğraflar, PDF'ler ve diğer ekleri bulun ve görüntüleyin
  - **iMessage Algılama**: Gönderilmeden önce alıcıların iMessage'a sahip olup olmadığını kontrol edin
  - **Platformlar Arası**: iPhone/Mac kullanıcıları (iMessage) ve Android kullanıcıları (SMS/RCS) ile çalışır

  ### Eklerle çalışmak

  Ek erişimi **aşamalı açıklama** kullanır — keşif ucuz, getirme ise kasıtlıdır:

  1. **Seviye 1 — ileti arama sırasında keşif.** `tool_get_recent_messages` ve `tool_fuzzy_search_messages`, ekleri olan mesajları `[attachments: #42 image/jpeg (invitation.jpg)]` gibi kompakt bir özet ile açıklama yapar. Kimlik daha sonra dosyayı getirmek için kullanılabilir.
  2. **Seviye 2 — ek-öncelikli arama.** `tool_search_attachments(start_date, end_date, contact, mime_type, limit)` yalnızca meta veriler (kimlik, MIME türü, dosya adı, boyut, gönderici) döndürür — "2026 yılının Nisan ayında Elizabeth'in gönderdiği tüm görselleri bul" gibi işlemler için ileti metnini taramadan faydalı.
  3. **Seviye 3 — getir.** `tool_get_attachment(attachment_id)` dosyayı döndürür. Görüntü MIME türleri satır içine alınır (HEIC doğrudan görüntülenebilmesi için PNG'ye dönüştürülür). PDF'ler, video ve ses, aracının kendi araçları ile okuyabileceği bir dosya sistemi yolu olarak döndürülür. Satır içi görüntü baytları, bağlam şişkinliğini önlemek için varsayılan olarak 5MB ile sınırlandırılır; büyük görüntüler yol dönüşüne geri döner.

  Stickers, bağlantı önizleme "balon" yükleri ve `.pluginPayloadAttachment` konteynerları varsayılan olarak filtrelenir.

  ### Alıcı formatları

  Doğrudan göndermeler için, E.164 telefon numaraları `+14155551234` gibi önde gelen `+` ile en güvenilir formattır. Ülke kodu olan düz rakamlı telefon numaraları gönderilmeden önce normalleştirilir ve 10 haneli ABD numaraları `+1...` olarak gönderilir. `tool_find_contact` telefon eşleşmelerini aynı gönderme-hazır formatta döndürür.

  ## Ön Koşullar

  - macOS (macOS 11+ üzerinde test edildi)
  - Python 3.10+
  - **uv paket yöneticisi**

  ### uv Yükleme

  Mac'teyseniz, Homebrew kullanarak uv'yi yükleyin:

  ```bash
  brew install uv
  ```

  Aksi takdirde, [uv web sitesindeki](https://github.com/astral-sh/uv) yükleme talimatlarını izleyin.

  ⚠️ **uv yüklemeden devam etmeyin**

  ## Yükleme

  ### Tam Disk Erişim İzni

  ⚠️ Bu uygulama, terminale veya uygulamaya Messages veritabanına erişmek için **Tam Disk Erişim** izni gerektirir.

  Tam Disk Erişim vermek için:
  1. **Sistem Tercihleri/Ayarları** > **Güvenlik & Gizlilik/Gizlilik** > **Tam Disk Erişim**'i açın
  2. Değişiklik yapmak için kilit simgesine tıklayın
  3. Terminal uygulamanızı (Terminal, iTerm2, vb.) veya Claude Desktop/Cursor'ı listeye ekleyin
  4. İzin verdikten sonra terminali veya uygulamayı yeniden başlatın

  ## Entegrasyon

  ### Claude Desktop Entegrasyonu

  #### Seçenek 1: Claude Desktop Uzantısı

  Bu repo, Claude Desktop'ın tek tıkla uzantı akışı için MCPB uyumlu `manifest.json` içerir.

  ```bash
  yarn global add @anthropic-ai/mcpb
  mcpb pack
  ```

  Oluşturulan `.mcpb` dosyasını Claude Desktop **Ayarları** > **Uzantılar** > **Gelişmiş ayarlar** > **Uzantı Yükle...**'den yükleyin.

  Claude Desktop veya uzantıyı paketlemek/çalıştırmak için kullanılan terminal, Messages'ı okumak için hala Tam Disk Erişim'e ihtiyaç duyar.

  #### Seçenek 2: Manuel Yapılandırma

  1. **Claude** > **Ayarlar** > **Geliştirici** > **Yapılandırma Düzenle** > **claude_desktop_config.json**'a gidin
  2. Aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
      "mcpServers": {
          "messages": {
              "command": "uvx",
              "args": [
                  "mac-messages-mcp"
              ]
          }
      }
  }
  ```

  ### Cursor Entegrasyonu

  #### Seçenek 1: Tek Tıkla Yükleme (Önerilir)

  [![Install MCP Server](https://cursor.com/deeplink/mcp-install-light.svg)](https://cursor.com/install-mcp?name=mac-messages-mcp&config=eyJjb21tYW5kIjoidXZ4IG1hYy1tZXNzYWdlcy1tY3AifQ%3D%3D)

  #### Seçenek 2: Manuel Kurulum

  **Cursor Ayarları** > **MCP**'ye gidin ve bunu komut olarak yapıştırın:

  ```
  uvx mac-messages-mcp
  ```

  ⚠️ MCP sunucusunun yalnızca bir örneğini çalıştırın (Cursor veya Claude Desktop'ta), her ikisini de değil

  ### Docker Konteyner Entegrasyonu

  Docker konteynerinden `mac-messages-mcp`'ye bağlanmanız gerekiyorsa, stdio tabanlı sunucuyu HTTP'ye bağlamak için `mcp-proxy` paketini kullanmanız gerekir.

  Bu repository ayrıca katalog kontrolleri ve konteyner derlemesi için bir `Dockerfile` içerir:

  ```bash
  docker build -t mac-messages-mcp .
  ```

  Messages.app otomasyonu yalnızca macOS özel olup, Linux konteyneri içinde çalışmaz. Konteyner kullanımı birincil olarak MCP katalog uyumluluğu ve takılı veriler ile salt okunur veritabanı deneyleri içindir.

  #### Kurulum Talimatları

  1. **macOS ana makinenize mcp-proxy yükleyin:**
  ```bash
  npm install -g mcp-proxy
  ```

  2. **Proxy sunucusunu başlatın:**
  ```bash
  # Yayınlanan sürümü kullanarak
  npx mcp-proxy uvx mac-messages-mcp --port 8000 --host 0.0.0.0

  # Veya sorunlarla karşılaşırsanız yerel geliştirmeyi kullanarak
  npx mcp-proxy uv run python -m mac_messages_mcp.server --port 8000 --host 0.0.0.0
  ```

  3. **Docker'dan bağlantı kurun:**
  Docker konteyneriniz artık şu adreslere bağlanabilir:
  - URL: `http://host.docker.internal:8000/mcp` (macOS/Windows'ta)
  - URL: `http://<host-ip>:8000/mcp` (Linux'ta)

  4. **Docker Compose örneği:**
  ```yaml
  version: '3.8'
  services:
    your-app:
      image: your-image
      environment:
        MCP_MESSAGES_URL: "http://host.docker.internal:8000/mcp"
      extra_hosts:
        - "host.docker.internal:host-gateway"  # Linux ana makineler için
  ```

  5. **Birden fazla MCP sunucusu çalıştırma:**
  ```bash
  # Terminal 1 - Messages MCP, port 8001'de
  npx mcp-proxy uvx mac-messages-mcp --port 8001 --host 0.0.0.0

  # Terminal 2 - Başka bir MCP sunucusu, port 8002'de
  npx mcp-proxy uvx another-mcp-server --port 8002 --host 0.0.0.0
  ```

  **Not:** `0.0.0.0`'a bağlanmak, hizmeti tüm ağ arayüzlerine maruz bırakır. Üretimde, daha kısıtlayıcı ana bilgisayar bağlamalarını ve kimlik doğrulama eklemeyi göz önünde bulundurun.


  ### Seçenek 1: PyPI'den Yükleme

  ```bash
  uv pip install mac-messages-mcp
  ```

  ### Seçenek 2: Kaynaktan Yükleme

  ```bash
  # Deposu klonlayın
  git clone https://github.com/carterlasalle/mac_messages_mcp.git
  cd mac_messages_mcp

  # Bağımlılıkları yükleyin
  uv install -e .
  ```


  ## Kullanım

  ### Akıllı Mesaj Teslimi

  Mac Messages MCP, farklı platformlar arasında ileti teslimini otomatik olarak yönetir:

  - **iMessage Kullanıcıları** (iPhone, iPad, Mac): iMessage üzerinden gönderilen mesajlar
  - **Android Kullanıcıları**: Mesajlar otomatik olarak SMS/RCS'ye geri döner
  - **Karışık Gruplar**: Her alıcı için optimal teslim yöntemi seçilir

  ```python
  # iPhone kullanıcısına gönder - iMessage kullanır
  send_message("+1234567890", "Hey! This goes via iMessage")

  # Android kullanıcısına gönder - otomatik olarak SMS kullanır
  send_message("+1987654321", "Hey! This goes via SMS") 

  # Gönderilmeden önce teslim yöntemini kontrol et
  check_imessage_availability("+1234567890")  # Kullanılabilirlik durumunu döndürür
  ```

  ### Modül Olarak

  ```python
  from mac_messages_mcp import get_recent_messages, send_message

  # Son mesajları al
  messages = get_recent_messages(hours=48)
  print(messages)

  # Mesaj gönder (iMessage veya SMS'i otomatik olarak seçer)
  result = send_message(recipient="+1234567890", message="Hello from Mac Messages MCP!")
  print(result)  # iMessage veya SMS aracılığıyla gönderilip gönderilmediğini gösterir
  ```

  ### Komut Satırı Aracı Olarak

  ```bash
  # MCP sunucusunu doğrudan çalıştır
  mac-messages-mcp
  ```

  ## Geliştirme

  ### Sürüm Oluşturma

  Bu proje anlamsal sürümü kullanır. Sürüm sisteminin nasıl çalıştığı ve yeni sürümleri nasıl yayınlayacağınız hakkında ayrıntılar için [VERSIONING.md](VERSIONING.md)'ye bakın.

  Sürümü güncellemek için:

  ```bash
  python scripts/bump_version.py [patch|minor|major]
  ```

  ## Güvenlik Notları

  Bu uygulama, kişisel iletişimleri içeren Messages veritabanına doğrudan erişir. Lütfen bunu sorumlu bir şekilde kullanın ve uygun izinlere sahip olduğunuzdan emin olun.

  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/carterlasalle-mac-messages-mcp-badge.png)](https://mseep.ai/app/carterlasalle-mac-messages-mcp)

  ## Lisans

  MIT

  ## Katkıda Bulunma

  Katkılar memnuniyetle karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.

  ## Yıldız Tarihi

  [![Star History Chart](https://api.star-history.com/svg?repos=carterlasalle/mac_messages_mcp&type=Date)](https://www.star-history.com/#carterlasalle/mac_messages_mcp&Date)
---

# Mac Messages MCP

A Python bridge for interacting with the macOS Messages app using MCP (Multiple Context Protocol). 

[![PyPI Downloads](https://static.pepy.tech/badge/mac-messages-mcp)](https://pepy.tech/projects/mac-messages-mcp)

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/carterlasalle/mac_messages_mcp)](https://archestra.ai/mcp-catalog/carterlasalle__mac_messages_mcp)
[![mac_messages_mcp MCP score](https://glama.ai/mcp/servers/carterlasalle/mac_messages_mcp/badges/score.svg)](https://glama.ai/mcp/servers/carterlasalle/mac_messages_mcp)

![a-diagram-of-a-mac-computer-with-the-tex_FvvnmbaBTFeKy6F2GMlLqA_IfCBMgJARcia1WTH7FaqwA](https://github.com/user-attachments/assets/dbbdaa14-fadd-434d-a265-9e0c0071c11d)

[![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/fdc62324-6ac9-44e2-8926-722d1157759a)


<a href="https://glama.ai/mcp/servers/gxvaoc9znc">
  
</a>

## Quick Install

### For Cursor Users

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-light.svg)](https://cursor.com/install-mcp?name=mac-messages-mcp&config=eyJjb21tYW5kIjoidXZ4IG1hYy1tZXNzYWdlcy1tY3AifQ%3D%3D)

*Click the button above to automatically add Mac Messages MCP to Cursor*

### For Claude Desktop Users

See the [Integration section](#integration) below for setup instructions.

## Features

- **Universal Message Sending**: Automatically sends via iMessage or SMS/RCS based on recipient availability
- **Smart Fallback**: Seamless fallback to SMS when iMessage is unavailable (perfect for Android users)
- **Message Reading**: Read recent messages from the macOS Messages app
- **Contact Filtering**: Filter messages by specific contacts or phone numbers
- **Group Chat Filtering**: Use chat IDs from `tool_get_chats` to read one group conversation chronologically
- **Fuzzy Search**: Search through message content with intelligent matching
- **Attachments**: Find and view photos, PDFs, and other attachments shared in conversations
- **iMessage Detection**: Check if recipients have iMessage before sending
- **Cross-Platform**: Works with both iPhone/Mac users (iMessage) and Android users (SMS/RCS)

### Working with attachments

Attachment access uses **progressive disclosure** — discovery is cheap, fetching is deliberate:

1. **Tier 1 — discovery in message search.** `tool_get_recent_messages` and `tool_fuzzy_search_messages` annotate messages that have attachments with a compact summary like `[attachments: #42 image/jpeg (invitation.jpg)]`. The id lets you fetch the file later.
2. **Tier 2 — attachment-first search.** `tool_search_attachments(start_date, end_date, contact, mime_type, limit)` returns metadata only (id, MIME type, filename, size, sender) — useful for "find all images Elizabeth sent in April 2026" without scanning message text.
3. **Tier 3 — fetch.** `tool_get_attachment(attachment_id)` returns the file. Image MIME types come back inline (HEIC is converted to PNG so it can be viewed directly). PDFs, video, and audio come back as a filesystem path the agent can read with its own tools. Inline image bytes are capped at 5MB by default to avoid context blowup; oversized images fall back to path return.

Stickers, link-preview "balloon" payloads, and `.pluginPayloadAttachment` containers are filtered out by default.

### Recipient formats

For direct sends, E.164 phone numbers with a leading `+` are the most reliable format, such as `+14155551234`. Bare digit phone numbers with a country code are normalized before sending, and 10-digit US numbers are sent as `+1...`. `tool_find_contact` returns phone matches in the same send-ready format.

## Prerequisites

- macOS (tested on macOS 11+)
- Python 3.10+
- **uv package manager**

### Installing uv

If you're on Mac, install uv using Homebrew:

```bash
brew install uv
```

Otherwise, follow the installation instructions on the [uv website](https://github.com/astral-sh/uv).

⚠️ **Do not proceed before installing uv**

## Installation

### Full Disk Access Permission

⚠️ This application requires **Full Disk Access** permission for your terminal or application to access the Messages database. 

To grant Full Disk Access:
1. Open **System Preferences/Settings** > **Security & Privacy/Privacy** > **Full Disk Access**
2. Click the lock icon to make changes
3. Add your terminal app (Terminal, iTerm2, etc.) or Claude Desktop/Cursor to the list
4. Restart your terminal or application after granting permission

## Integration

### Claude Desktop Integration

#### Option 1: Claude Desktop Extension

This repo includes an MCPB-compatible `manifest.json` for Claude Desktop's one-click extension flow.

```bash
yarn global add @anthropic-ai/mcpb
mcpb pack
```

Install the generated `.mcpb` file from Claude Desktop **Settings** > **Extensions** > **Advanced settings** > **Install Extension...**.

Claude Desktop, or the terminal used to package/run the extension, still needs Full Disk Access to read Messages.

#### Option 2: Manual Config

1. Go to **Claude** > **Settings** > **Developer** > **Edit Config** > **claude_desktop_config.json**
2. Add the following configuration:

```json
{
    "mcpServers": {
        "messages": {
            "command": "uvx",
            "args": [
                "mac-messages-mcp"
            ]
        }
    }
}
```

### Cursor Integration

#### Option 1: One-Click Install (Recommended)

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-light.svg)](https://cursor.com/install-mcp?name=mac-messages-mcp&config=eyJjb21tYW5kIjoidXZ4IG1hYy1tZXNzYWdlcy1tY3AifQ%3D%3D)

#### Option 2: Manual Setup

Go to **Cursor Settings** > **MCP** and paste this as a command:

```
uvx mac-messages-mcp
```

⚠️ Only run one instance of the MCP server (either on Cursor or Claude Desktop), not both

### Docker Container Integration

If you need to connect to `mac-messages-mcp` from a Docker container, you'll need to use the `mcp-proxy` package to bridge the stdio-based server to HTTP.

This repository also includes a `Dockerfile` for catalog checks and container builds:

```bash
docker build -t mac-messages-mcp .
```

Messages.app automation is macOS-only and will not work inside a Linux container. Container use is primarily for MCP catalog compatibility and read-only database experiments with mounted data.

#### Setup Instructions

1. **Install mcp-proxy on your macOS host:**
```bash
npm install -g mcp-proxy
```

2. **Start the proxy server:**
```bash
# Using the published version
npx mcp-proxy uvx mac-messages-mcp --port 8000 --host 0.0.0.0

# Or using local development (if you encounter issues)
npx mcp-proxy uv run python -m mac_messages_mcp.server --port 8000 --host 0.0.0.0
```

3. **Connect from Docker:**
Your Docker container can now connect to:
- URL: `http://host.docker.internal:8000/mcp` (on macOS/Windows)
- URL: `http://<host-ip>:8000/mcp` (on Linux)

4. **Docker Compose example:**
```yaml
version: '3.8'
services:
  your-app:
    image: your-image
    environment:
      MCP_MESSAGES_URL: "http://host.docker.internal:8000/mcp"
    extra_hosts:
      - "host.docker.internal:host-gateway"  # For Linux hosts
```

5. **Running multiple MCP servers:**
```bash
# Terminal 1 - Messages MCP on port 8001
npx mcp-proxy uvx mac-messages-mcp --port 8001 --host 0.0.0.0

# Terminal 2 - Another MCP server on port 8002
npx mcp-proxy uvx another-mcp-server --port 8002 --host 0.0.0.0
```

**Note:** Binding to `0.0.0.0` exposes the service to all network interfaces. In production, consider using more restrictive host bindings and adding authentication.


### Option 1: Install from PyPI

```bash
uv pip install mac-messages-mcp
```

### Option 2: Install from source

```bash
# Clone the repository
git clone https://github.com/carterlasalle/mac_messages_mcp.git
cd mac_messages_mcp

# Install dependencies
uv install -e .
```


## Usage

### Smart Message Delivery

Mac Messages MCP automatically handles message delivery across different platforms:

- **iMessage Users** (iPhone, iPad, Mac): Messages sent via iMessage
- **Android Users**: Messages automatically fall back to SMS/RCS
- **Mixed Groups**: Optimal delivery method chosen per recipient

```python
# Send to iPhone user - uses iMessage
send_message("+1234567890", "Hey! This goes via iMessage")

# Send to Android user - automatically uses SMS
send_message("+1987654321", "Hey! This goes via SMS") 

# Check delivery method before sending
check_imessage_availability("+1234567890")  # Returns availability status
```

### As a Module

```python
from mac_messages_mcp import get_recent_messages, send_message

# Get recent messages
messages = get_recent_messages(hours=48)
print(messages)

# Send a message (automatically chooses iMessage or SMS)
result = send_message(recipient="+1234567890", message="Hello from Mac Messages MCP!")
print(result)  # Shows whether sent via iMessage or SMS
```

### As a Command-Line Tool

```bash
# Run the MCP server directly
mac-messages-mcp
```

## Development

### Versioning

This project uses semantic versioning. See [VERSIONING.md](VERSIONING.md) for details on how the versioning system works and how to release new versions.

To bump the version:

```bash
python scripts/bump_version.py [patch|minor|major]
```

## Security Notes

This application accesses the Messages database directly, which contains personal communications. Please use it responsibly and ensure you have appropriate permissions.

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/carterlasalle-mac-messages-mcp-badge.png)](https://mseep.ai/app/carterlasalle-mac-messages-mcp)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=carterlasalle/mac_messages_mcp&type=Date)](https://www.star-history.com/#carterlasalle/mac_messages_mcp&Date)
