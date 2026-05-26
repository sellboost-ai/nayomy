---
name: "MarkusPfundstein/mcp-gsuite"
description: "Integration with gmail and Google Calendar."
description_tr: "Gmail ve Google Calendar ile entegrasyon."
category: "Workplace & Productivity"
repo: "MarkusPfundstein/mcp-gsuite"
stars: 486
url: "https://github.com/MarkusPfundstein/mcp-gsuite"
body_length: 7749
license: "MIT"
language: "Python"
body_tr: |-
  # mcp-gsuite MCP sunucusu

  [![smithery badge](https://smithery.ai/badge/mcp-gsuite)](https://smithery.ai/server/mcp-gsuite)
  Google ürünleriyle etkileşim kurmak için MCP sunucusu.

  ## Örnek istemler

  Şu anda bu MCP sunucusu Gmail ve Takvim entegrasyonunu aşağıdaki yeteneklerle desteklemektedir:

  1. Genel
  * Birden fazla google hesabı

  2. Gmail
  * Gmail kullanıcı bilgilerinizi alın
  * Esnek aramayla e-postaları sorgulayın (örneğin, okunmamış, belirli göndericilerden, tarih aralıkları, ekli dosyalarla)
  * ID'ye göre tam e-posta içeriğini alın
  * Alıcılar, konu, gövde ve CC seçenekleriyle yeni taslak e-postalar oluşturun
  * Taslak e-postaları silin
  * Mevcut e-postaylara yanıt verin (hemen gönderebilir veya taslak olarak kaydedebilirsiniz)
  * ID'lerine göre birden fazla e-postayı aynı anda alın
  * E-postalardan birden fazla eki yerel sisteminize kaydedin

  3. Takvim
  * Birden fazla takvimi yönetin
  * Belirtilen zaman aralıklarında takvim etkinliklerini alın
  * Takvim etkinlikleri oluşturun:
    + Başlık, başlangıç/bitiş saatleri
    + İsteğe bağlı konum ve açıklama
    + İsteğe bağlı katılımcılar
    + Özel saat dilimi desteği
    + Bildirim tercihleri
  * Takvim etkinliklerini silin

  Deneyebileceğiniz örnek istemler:

  * Son okunmamış mesajlarımı al
  * Scrum Master'ın e-postalarını ara
  * Muhasebe'den tüm e-postaları al
  * ABC hakkındaki e-postayı al ve özetle
  * Alice'in son e-postasına hoş bir yanıt yaz ve taslak olarak yükle
  * Bob'un e-postasına Teşekkür notu ile yanıt ver. Taslak olarak kaydet

  * Yarın takvimimde neler var?
  * Özel hesabımın Aile takvimini gelecek hafta için kontrol et
  * Tim ile sonraki hafta 2 saatlik bir etkinlik planlamam gerekiyor. Bazı zaman aralıkları öner

  ## Hızlı Başlangıç

  ### Kurulum

  ### Smithery Üzerinden Yükleme

  mcp-gsuite'i Claude Desktop'a otomatik olarak [Smithery](https://smithery.ai/server/mcp-gsuite) aracılığıyla yüklemek için:

  ```bash
  npx -y @smithery/cli install mcp-gsuite --client claude
  ```

  #### OAuth 2

  Google Workspace (G Suite) API'leri OAuth2 yetkilendirmesi gerektirir. Kimlik doğrulamayı ayarlamak için bu adımları izleyin:

  1. OAuth2 Kimlik Bilgileri Oluşturun:
     - [Google Cloud Console](https://console.cloud.google.com/) sayfasına gidin
     - Yeni bir proje oluşturun veya mevcut bir projeyi seçin
     - Projeniz için Gmail API ve Google Takvim API'sini etkinleştirin
     - "Credentials" → "Create Credentials" → "OAuth client ID" sayfasına gidin
     - Uygulama türü olarak "Desktop app" veya "Web application" seçin
     - Gerekli bilgiler ile OAuth consent screen'i yapılandırın
     - Yetkili redirect URI'lerini ekleyin (yerel geliştirme için `http://localhost:4100/code` ekleyin)

  2. Gerekli OAuth2 Kapsamları:
     

  ```json
     [
       "openid",
       "https://mail.google.com/",
       "https://www.googleapis.com/auth/calendar",
       "https://www.googleapis.com/auth/userinfo.email"
     ]
  ```

  3. Daha sonra çalışma dizininizde client ile bir `.gauth.json` dosyası oluşturun

  ```json
  {
      "web": {
          "client_id": "$your_client_id",
          "client_secret": "$your_client_secret",
          "redirect_uris": ["http://localhost:4100/code"],
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token"
      }
  }
  ```

  4. Hesap bilgileriyle bir `.accounts.json` dosyası oluşturun

  ```json
  {
      "accounts": [
          {
              "email": "alice@bob.com",
              "account_type": "personal",
              "extra_info": "Claude'a söylemek istediğiniz ek bilgiler: Örn. 'Aile Takvimini İçerir'"
          }
      ]
  }
  ```

  Birden fazla hesap belirtebilirsiniz. Google Auth uygulamanızda bunlara erişim izni olduğundan emin olun. `extra_info` alanı özellikle ilginçtir çünkü yapay zeka hakkında bilgilendirmek istediğiniz bilgileri buraya ekleyebilirsiniz (örneğin, belirli bir ajandaya sahip olup olmadığı)

  Not: Belirli bir hesap için araçlardan birini ilk kez çalıştırdığınızda, bir tarayıcı açılır, sizi Google'a yönlendirir ve kimlik bilgilerinizi, kapsamı vb. ister. Başarılı bir giriş sonrasında, kimlik bilgilerini `.oauth.{email}.json` adlı yerel bir dosyaya kaydeder. Yetkilendirildikten sonra, refresh token kullanılacaktır.

  #### Claude Desktop

  MacOS üzerinde: `~/Library/Application\ Support/Claude/claude_desktop_config.json`

  Windows üzerinde: `%APPDATA%/Claude/claude_desktop_config.json`

  <details>
    <summary>Geliştirme/Yayımlanmamış Sunucular Yapılandırması</summary>
    

  ```json
  {
    "mcpServers": {
      "mcp-gsuite": {
        "command": "uv",
        "args": [
          "--directory",
          "<dir_to>/mcp-gsuite",
          "run",
          "mcp-gsuite"
        ]
      }
    }
  }
  ```


  Not: Farklı bir hesaplar dosyasını belirtmek için `uv run mcp-gsuite --accounts-file /path/to/custom/.accounts.json` komutunu veya farklı bir credentials dizinini belirtmek için `--credentials-dir /path/to/custom/credentials` komutunu da kullanabilirsiniz.

  ```json
  {
    "mcpServers": {
      "mcp-gsuite": {
        "command": "uv",
        "args": [
          "--directory",
          "<dir_to>/mcp-gsuite",
          "run",
          "mcp-gsuite",
          "--accounts-file",
          "/path/to/custom/.accounts.json",
          "--credentials-dir",
          "/path/to/custom/credentials"
        ]
      }
    }
  }
  ```

  </details>

  <details>
    <summary>Yayımlanmış Sunucular Yapılandırması</summary>
    

  ```json
  {
    "mcpServers": {
      "mcp-gsuite": {
        "command": "uvx",
        "args": [
          "mcp-gsuite",
          "--accounts-file",
          "/path/to/custom/.accounts.json",
          "--credentials-dir",
          "/path/to/custom/credentials"
        ]
      }
    }
  }
  ```

  </details>

  ### Yapılandırma Seçenekleri

  MCP sunucusu, kimlik doğrulama ve hesap bilgileri için özel yolları belirtmek üzere birkaç command-line seçeneğiyle yapılandırılabilir:

  * `--gauth-file`: OAuth2 client yapılandırmasını içeren `.gauth.json` dosyasının yolunu belirtir. Varsayılan `./.gauth.json`'dur.
  * `--accounts-file`: Google hesapları hakkında bilgi içeren `.accounts.json` dosyasının yolunu belirtir. Varsayılan `./.accounts.json`'dur.
  * `--credentials-dir`: Başarılı kimlik doğrulamadan sonra OAuth kimlik bilgilerinin saklandığı dizini belirtir. Varsayılan, her hesap için `.oauth.{email}.json` alt dizini ile geçerli çalışma dizinidir.

  Bu seçenekler, özellikle geliştirme ve test senaryolarında farklı ortamları veya birden fazla kimlik bilgileri ve hesaplar kümesini yönetmede esneklik sağlar.

  Örnek kullanım:

  ```bash
  uv run mcp-gsuite --gauth-file /path/to/custom/.gauth.json --accounts-file /path/to/custom/.accounts.json --credentials-dir /path/to/custom/credentials
  ```

  Bu yapılandırma, sunucunun birden fazla örneğini farklı yapılandırmalarla çalıştırdığınızda veya varsayılan yolların uygun olmadığı ortamlara dağıtırken özellikle faydalıdır.

  ## Geliştirme

  ### Derleme ve Yayımlama

  Paketi dağıtım için hazırlamak için:

  1. Bağımlılıkları senkronize edin ve lockfile'ı güncelleyin:

  ```bash
  uv sync
  ```

  2. Paket dağıtımlarını oluşturun:

  ```bash
  uv build
  ```

  Bu, `dist/` dizininde kaynak ve wheel dağıtımları oluşturacaktır.

  3. PyPI'ye yayımlayın:

  ```bash
  uv publish
  ```

  Not: PyPI kimlik bilgilerini environment variables veya command flags aracılığıyla ayarlamanız gerekecektir:
  * Token: `--token` veya `UV_PUBLISH_TOKEN`
  * Ya da username/password: `--username`/`UV_PUBLISH_USERNAME` ve `--password`/`UV_PUBLISH_PASSWORD`

  ### Hata Ayıklama

  MCP sunucuları stdio üzerinden çalıştığından, hata ayıklama zor olabilir. En iyi hata ayıklama deneyimi için [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanmanızı kesinlikle öneriyoruz.

  MCP Inspector'u şu komutla [ `npm` ](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) aracılığıyla başlatabilirsiniz:

  ```bash
  npx @modelcontextprotocol/inspector uv --directory /path/to/mcp-gsuite run mcp-gsuite
  ```

  Başlatıldığında, Inspector hata ayıklamaya başlamak için tarayıcınızda erişebileceğiniz bir URL gösterecektir.

  Ayrıca sunucu günlüklerini şu komutla izleyebilirsiniz:

  ```bash
  tail -n 20 -f ~/Library/Logs/Claude/mcp-server-mcp-gsuite.log
  ```
---

# mcp-gsuite MCP server

[![smithery badge](https://smithery.ai/badge/mcp-gsuite)](https://smithery.ai/server/mcp-gsuite)
MCP server to interact with Google products.

## Example prompts

Right now, this MCP server supports Gmail and Calendar integration with the following capabilities:

1. General
* Multiple google accounts

2. Gmail
* Get your Gmail user information
* Query emails with flexible search (e.g., unread, from specific senders, date ranges, with attachments)
* Retrieve complete email content by ID
* Create new draft emails with recipients, subject, body and CC options
* Delete draft emails
* Reply to existing emails (can either send immediately or save as draft)
* Retrieve multiple emails at once by their IDs.
* Save multiple attachments from emails to your local system.

3. Calendar
* Manage multiple calendars
* Get calendar events within specified time ranges
* Create calendar events with:
  + Title, start/end times
  + Optional location and description
  + Optional attendees
  + Custom timezone support
  + Notification preferences
* Delete calendar events

Example prompts you can try:

* Retrieve my latest unread messages
* Search my emails from the Scrum Master
* Retrieve all emails from accounting
* Take the email about ABC and summarize it
* Write a nice response to Alice's last email and upload a draft.
* Reply to Bob's email with a Thank you note. Store it as draft

* What do I have on my agenda tomorrow?
* Check my private account's Family agenda for next week
* I need to plan an event with Tim for 2hrs next week. Suggest some time slots.

## Quickstart

### Install

### Installing via Smithery

To install mcp-gsuite for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-gsuite):

```bash
npx -y @smithery/cli install mcp-gsuite --client claude
```

#### Oauth 2

Google Workspace (G Suite) APIs require OAuth2 authorization. Follow these steps to set up authentication:

1. Create OAuth2 Credentials:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Gmail API and Google Calendar API for your project
   - Go to "Credentials" → "Create Credentials" → "OAuth client ID"
   - Select "Desktop app" or "Web application" as the application type
   - Configure the OAuth consent screen with required information
   - Add authorized redirect URIs (include `http://localhost:4100/code` for local development)

2. Required OAuth2 Scopes:
   

```json
   [
     "openid",
     "https://mail.google.com/",
     "https://www.googleapis.com/auth/calendar",
     "https://www.googleapis.com/auth/userinfo.email"
   ]
```

3. Then create a `.gauth.json` in your working directory with client

```json
{
    "web": {
        "client_id": "$your_client_id",
        "client_secret": "$your_client_secret",
        "redirect_uris": ["http://localhost:4100/code"],
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token"
    }
}
```

4. Create a `.accounts.json` file with account information

```json
{
    "accounts": [
        {
            "email": "alice@bob.com",
            "account_type": "personal",
            "extra_info": "Additional info that you want to tell Claude: E.g. 'Contains Family Calendar'"
        }
    ]
}
```

You can specifiy multiple accounts. Make sure they have access in your Google Auth app. The `extra_info` field is especially interesting as you can add info here that you want to tell the AI about the account (e.g. whether it has a specific agenda)

Note: When you first execute one of the tools for a specific account, a browser will open, redirect you to Google and ask for your credentials, scope, etc. After a successful login, it stores the credentials in a local file called `.oauth.{email}.json` . Once you are authorized, the refresh token will be used.

#### Claude Desktop

On MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`

On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

<details>
  <summary>Development/Unpublished Servers Configuration</summary>
  

```json
{
  "mcpServers": {
    "mcp-gsuite": {
      "command": "uv",
      "args": [
        "--directory",
        "<dir_to>/mcp-gsuite",
        "run",
        "mcp-gsuite"
      ]
    }
  }
}
```


Note: You can also use the `uv run mcp-gsuite --accounts-file /path/to/custom/.accounts.json` to specify a different accounts file or `--credentials-dir /path/to/custom/credentials` to specify a different credentials directory.

```json
{
  "mcpServers": {
    "mcp-gsuite": {
      "command": "uv",
      "args": [
        "--directory",
        "<dir_to>/mcp-gsuite",
        "run",
        "mcp-gsuite",
        "--accounts-file",
        "/path/to/custom/.accounts.json",
        "--credentials-dir",
        "/path/to/custom/credentials"
      ]
    }
  }
}
```

</details>

<details>
  <summary>Published Servers Configuration</summary>
  

```json
{
  "mcpServers": {
    "mcp-gsuite": {
      "command": "uvx",
      "args": [
        "mcp-gsuite",
        "--accounts-file",
        "/path/to/custom/.accounts.json",
        "--credentials-dir",
        "/path/to/custom/credentials"
      ]
    }
  }
}
```

</details>

### Configuration Options

The MCP server can be configured with several command-line options to specify custom paths for authentication and account information:

* `--gauth-file`: Specifies the path to the `.gauth.json` file containing OAuth2 client configuration. Default is `./.gauth.json`.
* `--accounts-file`: Specifies the path to the `.accounts.json` file containing information about the Google accounts. Default is `./.accounts.json`.
* `--credentials-dir`: Specifies the directory where OAuth credentials are stored after successful authentication. Default is the current working directory with a subdirectory for each account as `.oauth.{email}.json`.

These options allow for flexibility in managing different environments or multiple sets of credentials and accounts, especially useful in development and testing scenarios.

Example usage:

```bash
uv run mcp-gsuite --gauth-file /path/to/custom/.gauth.json --accounts-file /path/to/custom/.accounts.json --credentials-dir /path/to/custom/credentials
```

This configuration is particularly useful when you have multiple instances of the server running with different configurations or when deploying to environments where the default paths are not suitable.

## Development

### Building and Publishing

To prepare the package for distribution:

1. Sync dependencies and update lockfile:

```bash
uv sync
```

2. Build package distributions:

```bash
uv build
```

This will create source and wheel distributions in the `dist/` directory.

3. Publish to PyPI:

```bash
uv publish
```

Note: You'll need to set PyPI credentials via environment variables or command flags:
* Token: `--token` or `UV_PUBLISH_TOKEN`
* Or username/password: `--username`/`UV_PUBLISH_USERNAME` and `--password`/`UV_PUBLISH_PASSWORD`

### Debugging

Since MCP servers run over stdio, debugging can be challenging. For the best debugging
experience, we strongly recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector).

You can launch the MCP Inspector via [ `npm` ](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) with this command:

```bash
npx @modelcontextprotocol/inspector uv --directory /path/to/mcp-gsuite run mcp-gsuite
```

Upon launching, the Inspector will display a URL that you can access in your browser to begin debugging.

You can also watch the server logs with this command:

```bash
tail -n 20 -f ~/Library/Logs/Claude/mcp-server-mcp-gsuite.log
```
