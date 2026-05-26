---
name: "isaacphi/mcp-gdrive"
description: "Model Context Protocol (MCP) Server for reading from Google Drive and editing Google Sheets."
category: "File Systems"
repo: "isaacphi/mcp-gdrive"
stars: 280
url: "https://github.com/isaacphi/mcp-gdrive"
body_length: 4876
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Google Drive sunucusu

  Bu MCP sunucusu, dosyaları listeleme, okuma ve arama yapabilmenin yanı sıra Google Sheets'e okuma ve yazma özelliğini sağlamak için Google Drive ile entegre olur.

  Bu proje, Anthropic, PBC tarafından geliştirilen ve [bu depo](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive)dan MIT Lisansı altında lisanslanan kodu içerir.

  ## Bileşenler

  ### Tools

  - **gdrive_search**

    - **Açıklama**: Google Drive'da dosyaları arayın.
    - **Input**:
      - `query` (string): Arama sorgusu.
      - `pageToken` (string, isteğe bağlı): Sonraki sayfa için token.
      - `pageSize` (number, isteğe bağlı): Sayfa başına sonuç sayısı (maksimum 100).
    - **Output**: Eşleşen dosyaların adlarını ve MIME türlerini döndürür.

  - **gdrive_read_file**

    - **Açıklama**: Google Drive'dan bir dosyanın içeriğini okuyun.
    - **Input**:
      - `fileId` (string): Okunacak dosyanın ID'si.
    - **Output**: Belirtilen dosyanın içeriğini döndürür.

  - **gsheets_read**

    - **Açıklama**: Aralıklar ve biçimlendirme için esnek seçeneklerle Google Spreadsheet'ten veri okuyun.
    - **Input**:
      - `spreadsheetId` (string): Okunacak spreadsheet'in ID'si.
      - `ranges` (string dizisi, isteğe bağlı): A1 gösterim aralıkları isteğe bağlı dizisi (örneğin, `['Sheet1!A1:B10']`). Sağlanmazsa, tüm sayfayı okur.
      - `sheetId` (number, isteğe bağlı): Okunacak belirli sheet ID'si. Aralıklar ile sağlanmazsa, ilk sayfayı okur.
    - **Output**: Spreadsheet'ten belirtilen verileri döndürür.

  - **gsheets_update_cell**
    - **Açıklama**: Google Spreadsheet'teki bir hücre değerini güncelleyin.
    - **Input**:
      - `fileId` (string): Spreadsheet'in ID'si.
      - `range` (string): A1 gösteriminde hücre aralığı (örneğin, `'Sheet1!A1'`).
      - `value` (string): Yeni hücre değeri.
    - **Output**: Belirtilen hücredeki güncellenmiş değeri doğrular.

  ### Resources

  Sunucu, Google Drive dosyalarına erişim sağlar:

  - **Files** (`gdrive:///<file_id>`)
    - Tüm dosya türlerini destekler
    - Google Workspace dosyaları otomatik olarak dışa aktarılır:
      - Docs → Markdown
      - Sheets → CSV
      - Presentations → Düz metin
      - Drawings → PNG
    - Diğer dosyalar native biçimde sağlanır

  ## Başlangıç

  1. [Yeni bir Google Cloud projesi oluşturun](https://console.cloud.google.com/projectcreate)
  2. [Google Drive API'yi etkinleştirin](https://console.cloud.google.com/workspace-api/products)
  3. [Bir OAuth onay ekranı yapılandırın](https://console.cloud.google.com/apis/credentials/consent) (test için "internal" iyidir)
  4. OAuth kapsamlarını ekleyin: `https://www.googleapis.com/auth/drive.readonly`, `https://www.googleapis.com/auth/spreadsheets`
  5. Sheet'ler ve belgelerle etkileşim kurabilmek için [Google Sheets API](https://console.cloud.google.com/apis/api/sheets.googleapis.com/) ve [Google Docs API](https://console.cloud.google.com/marketplace/product/google/docs.googleapis.com)'yi çalışma alanınızın Etkinleştirilen API ve Hizmetler bölümünde etkinleştirmeniz gerekir.
  6. [Bir OAuth Client ID oluşturun](https://console.cloud.google.com/apis/credentials/oauthclient) uygulama türü "Desktop App" için
  7. İstemcinizin OAuth anahtarlarının JSON dosyasını indirin
  8. Anahtar dosyasını `gcp-oauth.keys.json` olarak yeniden adlandırın ve `GDRIVE_CREDS_DIR` ile belirttiğiniz yola yerleştirin (örneğin, `/Users/username/.config/mcp-gdrive`)
  9. OAuth Client ID ve Client Secret'ınızı not edin. Bunlar yapılandırma dizininizle birlikte environment variables olarak sağlanmalıdır.
  10. Projede aşağıdaki alanlarla bir .env dosyası ayarlamanız gerekecektir. Client ID ve Client Secret'ı Google Cloud Console'un Credentials bölümünde bulabilirsiniz.

  ```
  GDRIVE_CREDS_DIR=/path/to/config/directory
  CLIENT_ID=<CLIENT_ID>
  CLIENT_SECRET=<CLIENT_SECRET>
  ```

  Sunucuyu `npm run build` veya `npm run watch` ile oluşturduğunuzdan emin olun.

  ### Kimlik Doğrulama

  Daha sonra kimlik doğrulama adımını tetiklemek için `node ./dist/index.js` komutunu çalıştırmanız gerekecektir

  Tarayıcınız ile kimlik doğrulaması yapmaya davet edileceksiniz. Google Cloud projenizle aynı kuruluşta yer alan bir hesapla kimlik doğrulaması yapmalısınız.

  OAuth token'ınız `GDRIVE_CREDS_DIR` environment variable tarafından belirtilen dizine kaydedilir.

  ![Authentication Prompt](https://i.imgur.com/TbyV6Yq.png)

  ### Desktop App ile Kullanım

  Bu sunucuyu desktop uygulamayla entegre etmek için, uygulamanızın sunucu yapılandırmasına aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "gdrive": {
        "command": "npx",
        "args": ["-y", "@isaacphi/mcp-gdrive"],
        "env": {
          "CLIENT_ID": "<CLIENT_ID>",
          "CLIENT_SECRET": "<CLIENT_SECRET>",
          "GDRIVE_CREDS_DIR": "/path/to/config/directory"
        }
      }
    }
  }
  ```

  ## Lisans

  Bu MCP sunucusu MIT Lisansı altında lisanslanmıştır. Bu, MIT Lisansı'nın şartları ve koşullarına tabi olarak, yazılımı serbestçe kullanmanız, değiştirmeniz ve dağıtmanız anlamına gelir. Daha fazla ayrıntı için lütfen proje deposundaki LICENSE dosyasını görmek için bakınız.
---

# Google Drive server

This MCP server integrates with Google Drive to allow listing, reading, and searching files, as well as the ability to read and write to Google Sheets.

This project includes code originally developed by Anthropic, PBC, licensed under the MIT License from [this repo](https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive).

## Components

### Tools

- **gdrive_search**

  - **Description**: Search for files in Google Drive.
  - **Input**:
    - `query` (string): Search query.
    - `pageToken` (string, optional): Token for the next page of results.
    - `pageSize` (number, optional): Number of results per page (max 100).
  - **Output**: Returns file names and MIME types of matching files.

- **gdrive_read_file**

  - **Description**: Read contents of a file from Google Drive.
  - **Input**:
    - `fileId` (string): ID of the file to read.
  - **Output**: Returns the contents of the specified file.

- **gsheets_read**

  - **Description**: Read data from a Google Spreadsheet with flexible options for ranges and formatting.
  - **Input**:
    - `spreadsheetId` (string): The ID of the spreadsheet to read.
    - `ranges` (array of strings, optional): Optional array of A1 notation ranges (e.g., `['Sheet1!A1:B10']`). If not provided, reads the entire sheet.
    - `sheetId` (number, optional): Specific sheet ID to read. If not provided with ranges, reads the first sheet.
  - **Output**: Returns the specified data from the spreadsheet.

- **gsheets_update_cell**
  - **Description**: Update a cell value in a Google Spreadsheet.
  - **Input**:
    - `fileId` (string): ID of the spreadsheet.
    - `range` (string): Cell range in A1 notation (e.g., `'Sheet1!A1'`).
    - `value` (string): New cell value.
  - **Output**: Confirms the updated value in the specified cell.

### Resources

The server provides access to Google Drive files:

- **Files** (`gdrive:///<file_id>`)
  - Supports all file types
  - Google Workspace files are automatically exported:
    - Docs → Markdown
    - Sheets → CSV
    - Presentations → Plain text
    - Drawings → PNG
  - Other files are provided in their native format

## Getting started

1. [Create a new Google Cloud project](https://console.cloud.google.com/projectcreate)
2. [Enable the Google Drive API](https://console.cloud.google.com/workspace-api/products)
3. [Configure an OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent) ("internal" is fine for testing)
4. Add OAuth scopes `https://www.googleapis.com/auth/drive.readonly`, `https://www.googleapis.com/auth/spreadsheets`
5. In order to allow interaction with sheets and docs you will also need to enable the [Google Sheets API](https://console.cloud.google.com/apis/api/sheets.googleapis.com/) and [Google Docs API](https://console.cloud.google.com/marketplace/product/google/docs.googleapis.com) in your workspaces Enabled API and Services section.
6. [Create an OAuth Client ID](https://console.cloud.google.com/apis/credentials/oauthclient) for application type "Desktop App"
7. Download the JSON file of your client's OAuth keys
8. Rename the key file to `gcp-oauth.keys.json` and place into the path you specify with `GDRIVE_CREDS_DIR` (i.e. `/Users/username/.config/mcp-gdrive`)
9. Note your OAuth Client ID and Client Secret. They must be provided as environment variables along with your configuration directory.
10. You will also need to setup a .env file within the project with the following fields. You can find the Client ID and Client Secret in the Credentials section of the Google Cloud Console.

```
GDRIVE_CREDS_DIR=/path/to/config/directory
CLIENT_ID=<CLIENT_ID>
CLIENT_SECRET=<CLIENT_SECRET>
```

Make sure to build the server with either `npm run build` or `npm run watch`.

### Authentication

Next you will need to run `node ./dist/index.js` to trigger the authentication step

You will be prompted to authenticate with your browser. You must authenticate with an account in the same organization as your Google Cloud project.

Your OAuth token is saved in the directory specified by the `GDRIVE_CREDS_DIR` environment variable.

![Authentication Prompt](https://i.imgur.com/TbyV6Yq.png)

### Usage with Desktop App

To integrate this server with the desktop app, add the following to your app's server configuration:

```json
{
  "mcpServers": {
    "gdrive": {
      "command": "npx",
      "args": ["-y", "@isaacphi/mcp-gdrive"],
      "env": {
        "CLIENT_ID": "<CLIENT_ID>",
        "CLIENT_SECRET": "<CLIENT_SECRET>",
        "GDRIVE_CREDS_DIR": "/path/to/config/directory"
      }
    }
  }
}
```

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
