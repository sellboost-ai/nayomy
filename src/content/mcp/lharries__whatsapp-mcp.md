---
name: "lharries/whatsapp-mcp"
description: "An MCP server for searching your personal WhatsApp messages, contacts and sending messages to individuals or groups"
category: "Communication"
repo: "lharries/whatsapp-mcp"
stars: 5689
url: "https://github.com/lharries/whatsapp-mcp"
body_length: 9023
license: "MIT"
language: "Go"
homepage: "https://x.com/LukeHarries_/status/1905986562388635913"
body_tr: |-
  # WhatsApp MCP Sunucusu

  Bu, WhatsApp için bir Model Context Protocol (MCP) sunucusudur.

  Bunu kullanarak kişisel WhatsApp mesajlarınızı (resimler, videolar, belgeler ve ses mesajları dahil) arayabilir ve okuyabilir, kişilerinizi arayabilir ve bireysel kişilere veya gruplara mesaj gönderebilirsiniz. Ayrıca resimler, videolar, belgeler ve ses mesajları dahil medya dosyaları gönderebilirsiniz.

  **Kişisel WhatsApp hesabınıza** doğrudan Whatsapp web çoklu cihaz API'si üzerinden bağlanır ([whatsmeow](https://github.com/tulir/whatsmeow) kütüphanesini kullanarak). Tüm mesajlarınız yerel bir SQLite veritabanında saklanır ve yalnızca bir LLM (Claude gibi) tarafından aracılar aracılığıyla erişildiğinde gönderilir (bunu kontrol edersiniz).

  Claude'a bağlandığında neler yapabileceğinize dair bir örnek aşağıdadır.

  ![WhatsApp MCP](https://raw.githubusercontent.com/lharries/whatsapp-mcp/HEAD/example-use.png)

  > Bu ve üzerinde çalıştığım diğer projeler hakkında güncellemeler almak için [buraya e-posta adresinizi girin](https://docs.google.com/forms/d/1rTF9wMBTN0vPfzWuQa2BjfGKdKIpTbyeKxhPMcEzgyI/preview)

  > *Uyarı:* birçok MCP sunucusu gibi, WhatsApp MCP de [ölümcül üçlüye](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) tabidir. Bu, proje enjeksiyonunun özel veri sızıntısına yol açabileceği anlamına gelir.

  ## Kurulum

  ### Ön Koşullar

  - Go
  - Python 3.6+
  - Anthropic Claude Desktop uygulaması (veya Cursor)
  - UV (Python paket yöneticisi), `curl -LsSf https://astral.sh/uv/install.sh | sh` ile yükleyin
  - FFmpeg (_isteğe bağlı_) - Yalnızca ses mesajları için gereklidir. Ses dosyalarını çalınabilir WhatsApp ses mesajları olarak göndermek istiyorsanız, bunlar `.ogg` Opus formatında olmalıdır. FFmpeg yüklü olduğunda, MCP sunucusu Opus olmayan ses dosyalarını otomatik olarak dönüştürecektir. FFmpeg olmadan, `send_file` aracını kullanarak ham ses dosyalarını yine de gönderebilirsiniz.

  ### Adımlar

  1. **Bu depoyu klonlayın**

     ```bash
     git clone https://github.com/lharries/whatsapp-mcp.git
     cd whatsapp-mcp
     ```

  2. **WhatsApp köprüsünü çalıştırın**

     whatsapp-bridge dizinine gidin ve Go uygulamasını çalıştırın:

     ```bash
     cd whatsapp-bridge
     go run main.go
     ```

     İlk çalıştırdığınızda, bir QR kodunu taramanız istenecektir. WhatsApp mobil uygulamanızla QR kodunu tarayarak kimlik doğrulama yapın.

     Yaklaşık 20 gün sonra, yeniden kimlik doğrulama yapmanız gerekebilir.

  3. **MCP sunucusuna bağlanın**

     Uygun {{PATH}} değerleriyle aşağıdaki json'u kopyalayın:

     ```json
     {
       "mcpServers": {
         "whatsapp": {
           "command": "{{PATH_TO_UV}}", // `which uv` komutunu çalıştırın ve çıktıyı buraya yapıştırın
           "args": [
             "--directory",
             "{{PATH_TO_SRC}}/whatsapp-mcp/whatsapp-mcp-server", // depoya girin, `pwd` komutunu çalıştırın ve çıktıyı buraya yapıştırın + "/whatsapp-mcp-server"
             "run",
             "main.py"
           ]
         }
       }
     }
     ```

     **Claude** için, bunu Claude Desktop yapılandırma dizininizde `claude_desktop_config.json` olarak kaydedin:

     ```
     ~/Library/Application Support/Claude/claude_desktop_config.json
     ```

     **Cursor** için, bunu Cursor yapılandırma dizininizde `mcp.json` olarak kaydedin:

     ```
     ~/.cursor/mcp.json
     ```

  4. **Claude Desktop / Cursor'u yeniden başlatın**

     Claude Desktop'u açın ve artık WhatsApp'i kullanılabilir bir entegrasyon olarak görebilirsiniz.

     Veya Cursor'u yeniden başlatın.

  ### Windows Uyumluluğu

  Bu projeyi Windows üzerinde çalıştırıyorsanız, `go-sqlite3`'ün düzgün şekilde derlenip çalışması için **CGO'nun etkinleştirilmesi** gerektiğini unutmayın. Varsayılan olarak, **Windows'ta CGO devre dışıdır**, bu nedenle açıkça etkinleştirmeniz ve bir C derleyicisi yüklemeniz gerekir.

  #### Çalışmaya başlamak için adımlar:

  1. **Bir C derleyicisi yükleyin**  
     Windows için bir C derleyicisi yüklemek için [MSYS2](https://www.msys2.org/) kullanmanızı öneririz. MSYS2'yi yükledikten sonra, `ucrt64\bin` klasörünü `PATH`'inize eklediğinizden emin olun.  
     → Adım adım kılavuz [burada](https://code.visualstudio.com/docs/cpp/config-mingw) mevcuttur.

  2. **CGO'yu etkinleştirin ve uygulamayı çalıştırın**

     ```bash
     cd whatsapp-bridge
     go env -w CGO_ENABLED=1
     go run main.go
     ```

  Bu kurulum olmadan, muhtemelen şu gibi hatalarla karşılaşacaksınız:

  > `Binary was compiled with 'CGO_ENABLED=0', go-sqlite3 requires cgo to work.`

  ## Mimari Genel Bakış

  Bu uygulama iki ana bileşenden oluşur:

  1. **Go WhatsApp Köprüsü** (`whatsapp-bridge/`): WhatsApp'ın web API'sine bağlanan, QR kodu aracılığıyla kimlik doğrulamayı işleyen ve mesaj geçmişini SQLite'de depolayan bir Go uygulaması. WhatsApp ve MCP sunucusu arasında köprü görevi görür.

  2. **Python MCP Sunucusu** (`whatsapp-mcp-server/`): Claude'un WhatsApp verileriyle etkileşim kurmasını ve mesaj göndermesini/almasını sağlayan standardlaştırılmış araçlar sağlayan Model Context Protocol (MCP) uygulayan bir Python sunucusu.

  ### Veri Depolama

  - Tüm mesaj geçmişi `whatsapp-bridge/store/` dizinindeki bir SQLite veritabanında saklanır
  - Veritabanı sohbetler ve mesajlar için tablolar içerir
  - Mesajlar verimli arama ve alma için indekslenir

  ## Kullanım

  Bağlandıktan sonra, Claude aracılığıyla WhatsApp kişilerinizle etkileşim kurabilir ve Claude'un AI yeteneklerini WhatsApp sohbetlerinizde kullanabilirsiniz.

  ### MCP Araçları

  Claude, WhatsApp ile etkileşim kurmak için aşağıdaki araçlara erişebilir:

  - **search_contacts**: Kişileri ada veya telefon numarasına göre arayın
  - **list_messages**: İsteğe bağlı filtreler ve bağlam ile mesajları alın
  - **list_chats**: Kullanılabilir sohbetleri meta verilerle listeleyin
  - **get_chat**: Belirli bir sohbet hakkında bilgi alın
  - **get_direct_chat_by_contact**: Belirli bir kişi ile doğrudan sohbeti bulun
  - **get_contact_chats**: Belirli bir kişiyi içeren tüm sohbetleri listeleyin
  - **get_last_interaction**: Bir kişi ile en son mesajı alın
  - **get_message_context**: Belirli bir mesaj etrafındaki bağlamı alın
  - **send_message**: Belirtilen bir telefon numarasına veya grup JID'sine WhatsApp mesajı gönderin
  - **send_file**: Belirtilen bir alıcıya dosya (resim, video, ham ses, belge) gönderin
  - **send_audio_message**: Ses dosyasını WhatsApp ses mesajı olarak gönderin (dosyanın .ogg opus dosyası olması veya ffmpeg'in yüklü olması gerekir)
  - **download_media**: WhatsApp mesajından medya indirin ve yerel dosya yolunu alın

  ### Medya İşleme Özellikleri

  MCP sunucusu çeşitli medya türlerinin hem gönderilmesini hem de alınmasını destekler:

  #### Medya Gönderme

  Çeşitli medya türlerini WhatsApp kişilerinize gönderebilirsiniz:

  - **Resimler, Videolar, Belgeler**: Desteklenen herhangi bir medya türünü paylaşmak için `send_file` aracını kullanın.
  - **Ses Mesajları**: Ses dosyalarını çalınabilir WhatsApp ses mesajları olarak göndermek için `send_audio_message` aracını kullanın.
    - En uygun uyumluluk için, ses dosyaları `.ogg` Opus formatında olmalıdır.
    - FFmpeg yüklü olduğunda, sistem diğer ses formatlarını (MP3, WAV vb.) otomatik olarak gerekli formata dönüştürecektir.
    - FFmpeg olmadan, `send_file` aracını kullanarak ham ses dosyalarını yine de gönderebilirsiniz, ancak çalınabilir ses mesajları olarak görünmeyeceklerdir.

  #### Medya İndirme

  Varsayılan olarak, medyanın yalnızca metadata'sı yerel veritabanında saklanır. İleti medyanın gönderildiğini gösterecektir. Bu medyaya erişmek için, `message_id` ve `chat_jid` alan download_media aracını kullanmanız gerekir (bunlar medya içeren mesajları yazdırırken gösterilir), bu medyayı indirir ve ardından açılabilir veya başka bir araca gönderilebilecek dosya yolunu döndürür.

  ## Teknik Detaylar

  1. Claude, Python MCP sunucusuna istekler gönderir
  2. MCP sunucusu, Go köprüsünü WhatsApp verileri için sorgular veya doğrudan SQLite veritabanına sorgular
  3. Go, WhatsApp API'sine erişir ve SQLite veritabanını güncel tutar
  4. Veriler zincirin geriye doğru Claude'a akar
  5. Mesaj gönderirken, istek Claude'tan MCP sunucusu aracılığıyla Go köprüsüne ve WhatsApp'e akar

  ## Sorun Giderme

  - UV çalıştırırken izin sorunları yaşarsanız, bunu PATH'inize eklemeniz veya yürütülebilir dosyasının tam yolunu kullanmanız gerekebilir.
  - Entegrasyonun düzgün çalışması için hem Go uygulaması hem de Python sunucusu çalışıyor olmalıdır.

  ### Kimlik Doğrulama Sorunları

  - **QR Kodu Görüntülenmiyor**: QR kodu görünmüyorsa, kimlik doğrulama betiğini yeniden başlatmayı deneyin. Sorunlar devam ederse, terminalinizin QR kodları görüntülemeyi destekleyip desteklemediğini kontrol edin.
  - **WhatsApp Zaten Oturum Açılmış**: Oturumunuz zaten aktifse, Go köprüsü bir QR kodu göstermeden otomatik olarak yeniden bağlanacaktır.
  - **Cihaz Sınırına Ulaşıldı**: WhatsApp bağlantılı cihazların sayısını sınırlandırır. Bu sınıra ulaşırsanız, telefonunuzdaki WhatsApp'tan mevcut bir cihazı kaldırmanız gerekir (Ayarlar > Bağlantılı Cihazlar).
  - **Mesaj Yüklenmediği**: İlk kimlik doğrulamadan sonra, özellikle çok sayıda sohbetiniz varsa, mesaj geçmişinin yüklenmesi birkaç dakika sürebilir.
  - **WhatsApp Senkronize Olmadı**: WhatsApp mesajlarınız köprü ile senkronize olmadıysa, her iki veritabanı dosyasını da silin (`whatsapp-bridge/store/messages.db` ve `whatsapp-bridge/store/whatsapp.db`) ve köprüyü yeniden kimlik doğrulamak için yeniden başlatın.

  Claude Desktop entegrasyonu ile ilgili ek sorun giderme için [MCP belgelerine](https://modelcontextprotocol.io/quickstart/server#claude-for-desktop-integration-issues) bakın. Belgeler günlükleri kontrol etme ve yaygın sorunları çözme konusunda yararlı ipuçları içerir.
---

# WhatsApp MCP Server

This is a Model Context Protocol (MCP) server for WhatsApp.

With this you can search and read your personal Whatsapp messages (including images, videos, documents, and audio messages), search your contacts and send messages to either individuals or groups. You can also send media files including images, videos, documents, and audio messages.

It connects to your **personal WhatsApp account** directly via the Whatsapp web multidevice API (using the [whatsmeow](https://github.com/tulir/whatsmeow) library). All your messages are stored locally in a SQLite database and only sent to an LLM (such as Claude) when the agent accesses them through tools (which you control).

Here's an example of what you can do when it's connected to Claude.

![WhatsApp MCP](https://raw.githubusercontent.com/lharries/whatsapp-mcp/HEAD/example-use.png)

> To get updates on this and other projects I work on [enter your email here](https://docs.google.com/forms/d/1rTF9wMBTN0vPfzWuQa2BjfGKdKIpTbyeKxhPMcEzgyI/preview)

> *Caution:* as with many MCP servers, the WhatsApp MCP is subject to [the lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/). This means that project injection could lead to private data exfiltration.

## Installation

### Prerequisites

- Go
- Python 3.6+
- Anthropic Claude Desktop app (or Cursor)
- UV (Python package manager), install with `curl -LsSf https://astral.sh/uv/install.sh | sh`
- FFmpeg (_optional_) - Only needed for audio messages. If you want to send audio files as playable WhatsApp voice messages, they must be in `.ogg` Opus format. With FFmpeg installed, the MCP server will automatically convert non-Opus audio files. Without FFmpeg, you can still send raw audio files using the `send_file` tool.

### Steps

1. **Clone this repository**

   ```bash
   git clone https://github.com/lharries/whatsapp-mcp.git
   cd whatsapp-mcp
   ```

2. **Run the WhatsApp bridge**

   Navigate to the whatsapp-bridge directory and run the Go application:

   ```bash
   cd whatsapp-bridge
   go run main.go
   ```

   The first time you run it, you will be prompted to scan a QR code. Scan the QR code with your WhatsApp mobile app to authenticate.

   After approximately 20 days, you will might need to re-authenticate.

3. **Connect to the MCP server**

   Copy the below json with the appropriate {{PATH}} values:

   ```json
   {
     "mcpServers": {
       "whatsapp": {
         "command": "{{PATH_TO_UV}}", // Run `which uv` and place the output here
         "args": [
           "--directory",
           "{{PATH_TO_SRC}}/whatsapp-mcp/whatsapp-mcp-server", // cd into the repo, run `pwd` and enter the output here + "/whatsapp-mcp-server"
           "run",
           "main.py"
         ]
       }
     }
   }
   ```

   For **Claude**, save this as `claude_desktop_config.json` in your Claude Desktop configuration directory at:

   ```
   ~/Library/Application Support/Claude/claude_desktop_config.json
   ```

   For **Cursor**, save this as `mcp.json` in your Cursor configuration directory at:

   ```
   ~/.cursor/mcp.json
   ```

4. **Restart Claude Desktop / Cursor**

   Open Claude Desktop and you should now see WhatsApp as an available integration.

   Or restart Cursor.

### Windows Compatibility

If you're running this project on Windows, be aware that `go-sqlite3` requires **CGO to be enabled** in order to compile and work properly. By default, **CGO is disabled on Windows**, so you need to explicitly enable it and have a C compiler installed.

#### Steps to get it working:

1. **Install a C compiler**  
   We recommend using [MSYS2](https://www.msys2.org/) to install a C compiler for Windows. After installing MSYS2, make sure to add the `ucrt64\bin` folder to your `PATH`.  
   → A step-by-step guide is available [here](https://code.visualstudio.com/docs/cpp/config-mingw).

2. **Enable CGO and run the app**

   ```bash
   cd whatsapp-bridge
   go env -w CGO_ENABLED=1
   go run main.go
   ```

Without this setup, you'll likely run into errors like:

> `Binary was compiled with 'CGO_ENABLED=0', go-sqlite3 requires cgo to work.`

## Architecture Overview

This application consists of two main components:

1. **Go WhatsApp Bridge** (`whatsapp-bridge/`): A Go application that connects to WhatsApp's web API, handles authentication via QR code, and stores message history in SQLite. It serves as the bridge between WhatsApp and the MCP server.

2. **Python MCP Server** (`whatsapp-mcp-server/`): A Python server implementing the Model Context Protocol (MCP), which provides standardized tools for Claude to interact with WhatsApp data and send/receive messages.

### Data Storage

- All message history is stored in a SQLite database within the `whatsapp-bridge/store/` directory
- The database maintains tables for chats and messages
- Messages are indexed for efficient searching and retrieval

## Usage

Once connected, you can interact with your WhatsApp contacts through Claude, leveraging Claude's AI capabilities in your WhatsApp conversations.

### MCP Tools

Claude can access the following tools to interact with WhatsApp:

- **search_contacts**: Search for contacts by name or phone number
- **list_messages**: Retrieve messages with optional filters and context
- **list_chats**: List available chats with metadata
- **get_chat**: Get information about a specific chat
- **get_direct_chat_by_contact**: Find a direct chat with a specific contact
- **get_contact_chats**: List all chats involving a specific contact
- **get_last_interaction**: Get the most recent message with a contact
- **get_message_context**: Retrieve context around a specific message
- **send_message**: Send a WhatsApp message to a specified phone number or group JID
- **send_file**: Send a file (image, video, raw audio, document) to a specified recipient
- **send_audio_message**: Send an audio file as a WhatsApp voice message (requires the file to be an .ogg opus file or ffmpeg must be installed)
- **download_media**: Download media from a WhatsApp message and get the local file path

### Media Handling Features

The MCP server supports both sending and receiving various media types:

#### Media Sending

You can send various media types to your WhatsApp contacts:

- **Images, Videos, Documents**: Use the `send_file` tool to share any supported media type.
- **Voice Messages**: Use the `send_audio_message` tool to send audio files as playable WhatsApp voice messages.
  - For optimal compatibility, audio files should be in `.ogg` Opus format.
  - With FFmpeg installed, the system will automatically convert other audio formats (MP3, WAV, etc.) to the required format.
  - Without FFmpeg, you can still send raw audio files using the `send_file` tool, but they won't appear as playable voice messages.

#### Media Downloading

By default, just the metadata of the media is stored in the local database. The message will indicate that media was sent. To access this media you need to use the download_media tool which takes the `message_id` and `chat_jid` (which are shown when printing messages containing the meda), this downloads the media and then returns the file path which can be then opened or passed to another tool.

## Technical Details

1. Claude sends requests to the Python MCP server
2. The MCP server queries the Go bridge for WhatsApp data or directly to the SQLite database
3. The Go accesses the WhatsApp API and keeps the SQLite database up to date
4. Data flows back through the chain to Claude
5. When sending messages, the request flows from Claude through the MCP server to the Go bridge and to WhatsApp

## Troubleshooting

- If you encounter permission issues when running uv, you may need to add it to your PATH or use the full path to the executable.
- Make sure both the Go application and the Python server are running for the integration to work properly.

### Authentication Issues

- **QR Code Not Displaying**: If the QR code doesn't appear, try restarting the authentication script. If issues persist, check if your terminal supports displaying QR codes.
- **WhatsApp Already Logged In**: If your session is already active, the Go bridge will automatically reconnect without showing a QR code.
- **Device Limit Reached**: WhatsApp limits the number of linked devices. If you reach this limit, you'll need to remove an existing device from WhatsApp on your phone (Settings > Linked Devices).
- **No Messages Loading**: After initial authentication, it can take several minutes for your message history to load, especially if you have many chats.
- **WhatsApp Out of Sync**: If your WhatsApp messages get out of sync with the bridge, delete both database files (`whatsapp-bridge/store/messages.db` and `whatsapp-bridge/store/whatsapp.db`) and restart the bridge to re-authenticate.

For additional Claude Desktop integration troubleshooting, see the [MCP documentation](https://modelcontextprotocol.io/quickstart/server#claude-for-desktop-integration-issues). The documentation includes helpful tips for checking logs and resolving common issues.
