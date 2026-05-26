---
name: "zcaceres/gtasks-mcp"
description: "An MCP server to Manage Google Tasks"
description_tr: "Google Tasks'ı yönetmek için bir MCP sunucusu"
category: "Communication"
repo: "zcaceres/gtasks-mcp"
stars: 135
url: "https://github.com/zcaceres/gtasks-mcp"
body_length: 3657
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Google Tasks MCP Server

  ![gtasks mcp logo](https://raw.githubusercontent.com/zcaceres/gtasks-mcp/HEAD/logo.jpg)
  [![smithery badge](https://smithery.ai/badge/@zcaceres/gtasks)](https://smithery.ai/server/@zcaceres/gtasks)

  Bu MCP sunucusu Google Tasks ile entegre olarak görevleri listeleme, okuma, arama, oluşturma, güncelleme ve silme işlemlerine olanak tanır.

  ## Bileşenler

  ### Araçlar

  - **search**
    - Google Tasks'ta görevleri ara
    - Input: `query` (string): Arama sorgusu
    - Eşleşen görevleri detaylarıyla döndürür

  - **list**
    - Google Tasks'taki tüm görevleri listele
    - İsteğe bağlı input: `cursor` (string): Sayfalama için imleç
    - Tüm görevlerin listesini döndürür

  - **create**
    - Google Tasks'ta yeni bir görev oluştur
    - Input:
      - `taskListId` (string, isteğe bağlı): Görev listesi ID'si
      - `title` (string, zorunlu): Görev başlığı
      - `notes` (string, isteğe bağlı): Görev notları
      - `due` (string, isteğe bağlı): Son tarih
    - Görev oluşturma onayını döndürür

  - **update**
    - Google Tasks'taki mevcut bir görevi güncelle
    - Input:
      - `taskListId` (string, isteğe bağlı): Görev listesi ID'si
      - `id` (string, zorunlu): Görev ID'si
      - `uri` (string, zorunlu): Görev URI'ı
      - `title` (string, isteğe bağlı): Yeni görev başlığı
      - `notes` (string, isteğe bağlı): Yeni görev notları
      - `status` (string, isteğe bağlı): Yeni görev durumu ("needsAction" veya "completed")
      - `due` (string, isteğe bağlı): Yeni son tarih
    - Görev güncelleme onayını döndürür

  - **delete**
    - Google Tasks'ta bir görevi sil
    - Input:
      - `taskListId` (string, zorunlu): Görev listesi ID'si
      - `id` (string, zorunlu): Görev ID'si
    - Görev silme onayını döndürür

  - **clear**
    - Google Tasks görev listesinden tamamlanan görevleri temizle
    - Input: `taskListId` (string, zorunlu): Görev listesi ID'si
    - Temizlenen görevlerin onayını döndürür

  ### Kaynaklar

  Sunucu Google Tasks kaynaklarına erişim sağlar:

  - **Tasks** (`gtasks:///<task_id>`)
    - Google Tasks'taki bireysel görevleri temsil eder
    - Başlık, durum, son tarih, notlar ve diğer metaverileri içeren görev detaylarının okunmasını destekler
    - Sağlanan araçlar kullanılarak listelenebilir, okunabilir, oluşturulabilir, güncellenebilir ve silinebilir

  ## Başlangıç

  1. [Yeni bir Google Cloud projesi oluştur](https://console.cloud.google.com/projectcreate)
  2. [Google Tasks API'ı etkinleştir](https://console.cloud.google.com/workspace-api/products)
  3. [OAuth onay ekranını yapılandır](https://console.cloud.google.com/apis/credentials/consent) (test için "internal" uygun)
  4. `https://www.googleapis.com/auth/tasks` kapsamlarını ekle
  5. [OAuth Client ID oluştur](https://console.cloud.google.com/apis/credentials/oauthclient) "Desktop App" uygulama türü için
  6. Client'ın OAuth anahtarlarının JSON dosyasını indir
  7. Anahtar dosyasını `gcp-oauth.keys.json` olarak yeniden adlandır ve bu repo'nun root'una yerleştir (yani `gcp-oauth.keys.json`)

  Sunucuyu `npm run build` veya `npm run watch` ile oluşturduğunuzdan emin olun.

  ### Smithery Üzerinden Yükleme

  Google Tasks Server'ı Claude Desktop'a [Smithery](https://smithery.ai/server/@zcaceres/gtasks) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install @zcaceres/gtasks --client claude
  ```

  ### Kimlik Doğrulama

  Kimlik doğrulaması yapmak ve kimlik bilgilerini kaydetmek için:

  1. Sunucuyu `auth` argümanı ile çalıştır: `npm run start auth`
  2. Bu, sistem tarayıcınızda bir kimlik doğrulama akışı açacaktır
  3. Kimlik doğrulama işlemini tamamla
  4. Kimlik bilgileri bu repo'nun root'una kaydedilecek (yani `.gdrive-server-credentials.json`)

  ### Desktop App ile Kullanım

  Bu sunucuyu desktop app'le entegre etmek için, uygulamanızın sunucu yapılandırmasına aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "gtasks": {
        "command": "/opt/homebrew/bin/node",
        "args": [
          "{ABSOLUTE PATH TO FILE HERE}/dist/index.js"
        ]
      }
    }
  }
  ```
---

# Google Tasks MCP Server

![gtasks mcp logo](https://raw.githubusercontent.com/zcaceres/gtasks-mcp/HEAD/logo.jpg)
[![smithery badge](https://smithery.ai/badge/@zcaceres/gtasks)](https://smithery.ai/server/@zcaceres/gtasks)

This MCP server integrates with Google Tasks to allow listing, reading, searching, creating, updating, and deleting tasks.

## Components

### Tools

- **search**
  - Search for tasks in Google Tasks
  - Input: `query` (string): Search query
  - Returns matching tasks with details

- **list**
  - List all tasks in Google Tasks
  - Optional input: `cursor` (string): Cursor for pagination
  - Returns a list of all tasks

- **create**
  - Create a new task in Google Tasks
  - Input:
    - `taskListId` (string, optional): Task list ID
    - `title` (string, required): Task title
    - `notes` (string, optional): Task notes
    - `due` (string, optional): Due date
  - Returns confirmation of task creation

- **update**
  - Update an existing task in Google Tasks
  - Input:
    - `taskListId` (string, optional): Task list ID
    - `id` (string, required): Task ID
    - `uri` (string, required): Task URI
    - `title` (string, optional): New task title
    - `notes` (string, optional): New task notes
    - `status` (string, optional): New task status ("needsAction" or "completed")
    - `due` (string, optional): New due date
  - Returns confirmation of task update

- **delete**
  - Delete a task in Google Tasks
  - Input:
    - `taskListId` (string, required): Task list ID
    - `id` (string, required): Task ID
  - Returns confirmation of task deletion

- **clear**
  - Clear completed tasks from a Google Tasks task list
  - Input: `taskListId` (string, required): Task list ID
  - Returns confirmation of cleared tasks

### Resources

The server provides access to Google Tasks resources:

- **Tasks** (`gtasks:///<task_id>`)
  - Represents individual tasks in Google Tasks
  - Supports reading task details including title, status, due date, notes, and other metadata
  - Can be listed, read, created, updated, and deleted using the provided tools

## Getting started

1. [Create a new Google Cloud project](https://console.cloud.google.com/projectcreate)
2. [Enable the Google Tasks API](https://console.cloud.google.com/workspace-api/products)
3. [Configure an OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent) ("internal" is fine for testing)
4. Add scopes `https://www.googleapis.com/auth/tasks`
5. [Create an OAuth Client ID](https://console.cloud.google.com/apis/credentials/oauthclient) for application type "Desktop App"
6. Download the JSON file of your client's OAuth keys
7. Rename the key file to `gcp-oauth.keys.json` and place into the root of this repo (i.e. `gcp-oauth.keys.json`)

Make sure to build the server with either `npm run build` or `npm run watch`.

### Installing via Smithery

To install Google Tasks Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@zcaceres/gtasks):

```bash
npx -y @smithery/cli install @zcaceres/gtasks --client claude
```

### Authentication

To authenticate and save credentials:

1. Run the server with the `auth` argument: `npm run start auth`
2. This will open an authentication flow in your system browser
3. Complete the authentication process
4. Credentials will be saved in the root of this repo (i.e. `.gdrive-server-credentials.json`)

### Usage with Desktop App

To integrate this server with the desktop app, add the following to your app's server configuration:

```json
{
  "mcpServers": {
    "gtasks": {
      "command": "/opt/homebrew/bin/node",
      "args": [
        "{ABSOLUTE PATH TO FILE HERE}/dist/index.js"
      ]
    }
  }
}
```
