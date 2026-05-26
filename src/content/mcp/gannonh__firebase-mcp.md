---
name: "gannonh/firebase-mcp"
description: "Firebase services including Auth, Firestore and Storage."
description_tr: "Firebase servisleri (Auth, Firestore ve Storage) için entegrasyon desteği."
category: "Databases"
repo: "gannonh/firebase-mcp"
stars: 243
url: "https://github.com/gannonh/firebase-mcp"
body_length: 11107
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Firebase MCP


  ![Project Logo](https://raw.githubusercontent.com/gannonh/firebase-mcp/HEAD/assets/logo.png)

  <a href="https://glama.ai/mcp/servers/x4i8z2xmrq">
    
  </a>

  [![Firebase Tests CI](https://github.com/gannonh/firebase-mcp/actions/workflows/tests.yml/badge.svg)](https://github.com/gannonh/firebase-mcp/actions/workflows/tests.yml)

  ## Genel Bakış

  **Firebase MCP**, AI asistanlarının Firebase hizmetleriyle doğrudan çalışmasını sağlar:

  - **Firestore**: Belge veritabanı işlemleri
  - **Storage**: Güçlü yükleme yeteneklerine sahip dosya yönetimi
  - **Authentication**: Kullanıcı yönetimi ve doğrulama

  Sunucu, [Claude Desktop](https://claude.ai/download), [Augment Code](https://docs.augmentcode.com/setup-augment/mcp), [VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) ve [Cursor](https://www.cursor.com/) gibi MCP istemci uygulamalarıyla çalışır.

  > ⚠️ **Bilinen Sorun**: `firestore_list_collections` aracı istemci günlüklerinde Zod doğrulama hatası döndürebilir. Bu, MCP SDK'daki hatalı bir doğrulama hatasıdır; yaptığımız inceleme yanıtında hiçbir boolean değer olmadığını doğrulamıştır. Hata mesajına rağmen sorgu hala doğru şekilde çalışır ve uygun koleksiyon verilerini döndürür. Bu, işlevselliği etkilemeyen günlük düzeyindeki bir hatadır.

  ## ⚡ Hızlı Başlangıç

  ### Ön Koşullar
  - Firebase projesi ve service account kimlik bilgileri
  - Node.js ortamı

  ### 1. MCP Sunucusunu Yükleyin

  Sunucu yapılandırmasını MCP ayarları dosyanıza ekleyin:

  - Claude Desktop: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Augment: `~/Library/Application Support/Code/User/settings.json`
  - Cursor: `[project root]/.cursor/mcp.json`

  MCP Sunucuları manual olarak veya npx aracılığıyla çalışma zamanında yüklenebilir (önerilir). Yükleme şekliniz yapılandırmanızı belirler:

  #### npx için Yapılandırma (önerilir)

     ```json
     {
       "firebase-mcp": {
         "command": "npx",
         "args": [
           "-y",
           "@gannonh/firebase-mcp"
         ],
         "env": {
           "SERVICE_ACCOUNT_KEY_PATH": "/absolute/path/to/serviceAccountKey.json",
           "FIREBASE_STORAGE_BUCKET": "your-project-id.firebasestorage.app"
         }
       }
     }
     ```

  #### Yerel kurulum için Yapılandırma

     ```json
     {
       "firebase-mcp": {
         "command": "node",
         "args": [
           "/absolute/path/to/firebase-mcp/dist/index.js"
         ],
         "env": {
           "SERVICE_ACCOUNT_KEY_PATH": "/absolute/path/to/serviceAccountKey.json",
           "FIREBASE_STORAGE_BUCKET": "your-project-id.firebasestorage.app"
         }
       }
     }
     ```


  ### 2. Kurulumu Test Edin

  AI istemcinize şunu sorun: "Lütfen tüm Firebase MCP araçlarını test et."

  ## 🛠️ Kurulum & Yapılandırma

  ### 1. Firebase Yapılandırması

  1. [Firebase Console](https://console.firebase.google.com) → Proje Ayarları → Service Accounts bölümüne gidin
  2. "Yeni özel anahtar oluştur" seçeneğine tıklayın
  3. JSON dosyasını güvenli bir şekilde kaydedin

  ### 2. Ortam Değişkenleri

  #### Gerekli
  - `SERVICE_ACCOUNT_KEY_PATH`: Firebase service account key JSON dosyasının yolu (gerekli)

  #### İsteğe Bağlı
  - `FIREBASE_STORAGE_BUCKET`: Firebase Storage için depo adı (varsayılan: `[projectId].appspot.com`)
  - `MCP_TRANSPORT`: Kullanılacak aktarım türü (`stdio` veya `http`) (varsayılan: `stdio`)
  - `MCP_HTTP_PORT`: HTTP aktarımı için port (varsayılan: `3000`)
  - `MCP_HTTP_HOST`: HTTP aktarımı için host (varsayılan: `localhost`)
  - `MCP_HTTP_PATH`: HTTP aktarımı için yol (varsayılan: `/mcp`)
  - `DEBUG_LOG_FILE`: Dosya günlüğünü etkinleştir:
    - `true` olarak ayarlayın `~/.firebase-mcp/debug.log` dosyasına günlük kaydı için
    - Özel bir konuma günlük kaydı için dosya yolunu ayarlayın

  ### 3. İstemci Entegrasyonu

  #### Claude Desktop
  Düzenle: `~/Library/Application Support/Claude/claude_desktop_config.json`

  #### VS Code / Augment
  Düzenle: `~/Library/Application Support/Code/User/settings.json`

  #### Cursor
  Düzenle: `[project root]/.cursor/mcp.json`

  ## 📚 API Referansı

  ### Firestore Araçları

  | Araç                               | Açıklama                       | Gerekli Parametreler       |
  | ---------------------------------- | ------------------------------ | -------------------------- |
  | `firestore_add_document`           | Koleksiyona belge ekle          | `collection`, `data`       |
  | `firestore_list_documents`         | Belgeleri filtreyle listele     | `collection`               |
  | `firestore_get_document`           | Belirli bir belgeyi al          | `collection`, `id`         |
  | `firestore_update_document`        | Mevcut belgeyi güncelle         | `collection`, `id`, `data` |
  | `firestore_delete_document`        | Belgeyi sil                     | `collection`, `id`         |
  | `firestore_list_collections`       | Kök koleksiyonları listele      | Hiçbiri                    |
  | `firestore_query_collection_group` | Alt koleksiyonlar arasında sorgula | `collectionId`             |

  ### Storage Araçları

  | Araç                      | Açıklama                  | Gerekli Parametreler             |
  | ------------------------- | ------------------------- | -------------------------------- |
  | `storage_list_files`      | Bir dizindeki dosyaları listele | Hiçbiri (isteğe bağlı: `directoryPath`) |
  | `storage_get_file_info`   | Dosya meta verilerini ve URL'sini al | `filePath`                       |
  | `storage_upload`          | İçerikten dosya yükle     | `filePath`, `content`            |
  | `storage_upload_from_url` | URL'den dosya yükle       | `filePath`, `url`                |

  ### Authentication Araçları

  | Araç            | Açıklama             | Gerekli Parametreler |
  | --------------- | ----------------------- | ------------------- |
  | `auth_get_user` | Kullanıcıyı ID veya e-postayla al | `identifier`        |

  ## 💻 Geliştirici Rehberi

  ### Kurulum & Derleme

  ```bash
  git clone https://github.com/gannonh/firebase-mcp
  cd firebase-mcp
  npm install
  npm run build
  ```

  ### Testleri Çalıştırma

  Önce Firebase emulatörlerini yükleyin ve başlatın:
  ```bash
  npm install -g firebase-tools
  firebase init emulators
  firebase emulators:start
  ```

  Ardından testleri çalıştırın:
  ```bash
  # Emulatör ile testleri çalıştır
  npm run test:emulator

  # Kapsam ile testleri çalıştır
  npm run test:coverage:emulator
  ```

  ### Proje Yapısı

  ```bash
  src/
  ├── index.ts                  # Sunucu giriş noktası
  ├── utils/                    # Yardımcı fonksiyonlar
  └── lib/
      └── firebase/              # Firebase hizmet istemcileri
          ├── authClient.ts     # Authentication işlemleri
          ├── firebaseConfig.ts   # Firebase yapılandırması
          ├── firestoreClient.ts # Firestore işlemleri
          └── storageClient.ts  # Storage işlemleri
  ```

  ## 🌐 HTTP Aktarımı

  Firebase MCP artık varsayılan stdio aktarımına ek olarak HTTP aktarımını desteklemektedir. Bu, sunucuyu birden fazla istemci tarafından erişilebilen bağımsız bir HTTP hizmeti olarak çalıştırmanıza olanak tanır.

  ### HTTP Aktarımı ile Çalıştırma

  Sunucuyu HTTP aktarımı ile çalıştırmak için:

  ```bash
  # Ortam değişkenleri kullanarak
  MCP_TRANSPORT=http MCP_HTTP_PORT=3000 node dist/index.js

  # Veya npx ile
  MCP_TRANSPORT=http MCP_HTTP_PORT=3000 npx @gannonh/firebase-mcp
  ```

  ### HTTP için İstemci Yapılandırması

  HTTP aktarımı kullanırken, MCP istemcinizi HTTP endpoint'ine bağlanacak şekilde yapılandırın:

  ```json
  {
    "firebase-mcp": {
      "url": "http://localhost:3000/mcp"
    }
  }
  ```

  ### Oturum Yönetimi

  HTTP aktarımı, birden fazla istemcinin aynı sunucu örneğine bağlanmasına olanak tanıyan oturum yönetimini destekler. Her istemci, istekler arasında durumu korumak için kullanılan benzersiz bir oturum kimliği alır.

  ## 🔍 Sorun Giderme

  ### Yaygın Sorunlar

  #### Storage Deposu Bulunamadı
  "The specified bucket does not exist" hatası görürseniz:
  1. Firebase Console → Storage bölümünde depo adınızı doğrulayın
  2. `FIREBASE_STORAGE_BUCKET` ortam değişkeninde doğru depo adını ayarlayın

  #### Firebase Başlatma Başarısız Oldu
  "Firebase is not initialized" hatası görürseniz:
  1. Service account key yolunuzun doğru ve mutlak olduğunu kontrol edin
  2. Service account'unuzun Firebase hizmetleri için uygun izinleri olduğundan emin olun

  #### Bileşik İndeks Gereklidir
  "This query requires a composite index" hatası alırsanız:
  1. Hata mesajında sağlanan URL'yi arayın
  2. Firebase Console'da gerekli indeksi oluşturmak için bağlantıyı izleyin
  3. İndeks oluşturulduktan sonra sorgunuzu yeniden deneyin (birkaç dakika sürebilir)

  #### `firestore_list_collections` ile Zod Doğrulama Hatası
  `firestore_list_collections` aracı kullanırken "Expected object, received boolean" mesajıyla Zod doğrulama hatası görürseniz:

  > ⚠️ **Bilinen Sorun**: `firestore_list_collections` aracı istemci günlüklerinde Zod doğrulama hatası döndürebilir. Bu, MCP SDK'daki hatalı bir doğrulama hatasıdır; yaptığımız inceleme yanıtında hiçbir boolean değer olmadığını doğrulamıştır. Hata mesajına rağmen sorgu hala doğru şekilde çalışır ve uygun koleksiyon verilerini döndürür. Bu, işlevselliği etkilemeyen günlük düzeyindeki bir hatadır.

  ### Hata Ayıklama

  #### Dosya Günlüğünü Etkinleştirme
  Sorunları tanılamaya yardımcı olmak için dosya günlüğünü etkinleştirebilirsiniz:

  ```bash
  # Varsayılan konuma günlük kaydı (~/.firebase-mcp/debug.log)
  DEBUG_LOG_FILE=true npx @gannonh/firebase-mcp

  # Özel bir konuma günlük kaydı
  DEBUG_LOG_FILE=/path/to/custom/debug.log npx @gannonh/firebase-mcp
  ```

  MCP istemci yapılandırmanızda günlüğü de etkinleştirebilirsiniz:

  ```json
  {
    "firebase-mcp": {
      "command": "npx",
      "args": ["-y", "@gannonh/firebase-mcp"],
      "env": {
        "SERVICE_ACCOUNT_KEY_PATH": "/path/to/serviceAccountKey.json",
        "FIREBASE_STORAGE_BUCKET": "your-project-id.firebasestorage.app",
        "DEBUG_LOG_FILE": "true"
      }
    }
  }
  ```

  #### Gerçek Zamanlı Günlük Görüntüleme
  Günlükleri gerçek zamanlı olarak görüntülemek için:

  ```bash
  # Günlük dosyasını izlemek için tail kullanma
  tail -f ~/.firebase-mcp/debug.log

  # stderr'i yakalamak için bölünmüş terminal kullanma
  npm start 2>&1 | tee logs.txt
  ```

  #### MCP Inspector Kullanma
  MCP Inspector etkileşimli hata ayıklama sağlar:

  ```bash
  # MCP Inspector'u yükle
  npm install -g @mcp/inspector

  # MCP sunucunuza bağlan
  mcp-inspector --connect stdio --command "node ./dist/index.js"
  ```

  ## 📋 Yanıt Biçimlendirmesi

  ### Storage Yükleme Yanıtı Örneği

  ```json
  {
    "name": "reports/quarterly.pdf",
    "size": "1024000",
    "contentType": "application/pdf",
    "updated": "2025-04-11T15:37:10.290Z",
    "downloadUrl": "https://storage.googleapis.com/bucket/reports/quarterly.pdf?alt=media",
    "bucket": "your-project.appspot.com"
  }
  ```

  Kullanıcıya şu şekilde görüntülenir:

  ```markdown
  ## Dosya Başarıyla Yüklendi! 📁

  Dosyanız Firebase Storage'a yüklendi:

  **Dosya Ayrıntıları:**
  - **Ad:** reports/quarterly.pdf
  - **Boyut:** 1024000 bytes
  - **Tür:** application/pdf
  - **Son Güncelleme:** 11 Nisan 2025 saat 15:37:10 UTC

  **[Dosyanızı indirmek için burayı tıklayın](https://storage.googleapis.com/bucket/reports/quarterly.pdf?alt=media)**
  ```

  ## 🤝 Katkıda Bulunma

  1. Depoyu fork edin
  2. Bir özellik şubesi oluşturun
  3. Testler ile değişiklikleri uygulayın (%80+ kapsam gereklidir)
  4. Pull request gönderin

  ## 📄 Lisans

  MIT Lisansı - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın

  ## 🔗 İlgili Kaynaklar

  - [Model Context Protocol Belgeleri](https://github.com/modelcontextprotocol)
  - [Firebase Belgeleri](https://firebase.google.com/docs)
  - [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
---

# Firebase MCP


![Project Logo](https://raw.githubusercontent.com/gannonh/firebase-mcp/HEAD/assets/logo.png)

<a href="https://glama.ai/mcp/servers/x4i8z2xmrq">
  
</a>

[![Firebase Tests CI](https://github.com/gannonh/firebase-mcp/actions/workflows/tests.yml/badge.svg)](https://github.com/gannonh/firebase-mcp/actions/workflows/tests.yml)

## Overview

**Firebase MCP** enables AI assistants to work directly with Firebase services, including:

- **Firestore**: Document database operations
- **Storage**: File management with robust upload capabilities
- **Authentication**: User management and verification

The server works with MCP client applicatios such as [Claude Desktop](https://claude.ai/download), [Augment Code](https://docs.augmentcode.com/setup-augment/mcp), [VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers), and [Cursor](https://www.cursor.com/).

> ⚠️ **Known Issue**: The `firestore_list_collections` tool may return a Zod validation error in the client logs. This is an erroneous validation error in the MCP SDK, as our investigation confirmed no boolean values are present in the response. Despite the error message, the query still works correctly and returns the proper collection data. This is a log-level error that doesn't affect functionality.

## ⚡ Quick Start

### Prerequisites
- Firebase project with service account credentials
- Node.js environment

### 1. Install MCP Server

Add the server configuration to your MCP settings file:

- Claude Desktop: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Augment: `~/Library/Application Support/Code/User/settings.json`
- Cursor: `[project root]/.cursor/mcp.json`

MCP Servers can be installed manually or at runtime via npx (recommended). How you install determines your configuration:

#### Configure for npx (recommended)

   ```json
   {
     "firebase-mcp": {
       "command": "npx",
       "args": [
         "-y",
         "@gannonh/firebase-mcp"
       ],
       "env": {
         "SERVICE_ACCOUNT_KEY_PATH": "/absolute/path/to/serviceAccountKey.json",
         "FIREBASE_STORAGE_BUCKET": "your-project-id.firebasestorage.app"
       }
     }
   }
   ```

#### Configure for local installation

   ```json
   {
     "firebase-mcp": {
       "command": "node",
       "args": [
         "/absolute/path/to/firebase-mcp/dist/index.js"
       ],
       "env": {
         "SERVICE_ACCOUNT_KEY_PATH": "/absolute/path/to/serviceAccountKey.json",
         "FIREBASE_STORAGE_BUCKET": "your-project-id.firebasestorage.app"
       }
     }
   }
```


### 2. Test the Installation

Ask your AI client: "Please test all Firebase MCP tools."

## 🛠️ Setup & Configuration

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com) → Project Settings → Service Accounts
2. Click "Generate new private key"
3. Save the JSON file securely

### 2. Environment Variables

#### Required
- `SERVICE_ACCOUNT_KEY_PATH`: Path to your Firebase service account key JSON (required)

#### Optional
- `FIREBASE_STORAGE_BUCKET`: Bucket name for Firebase Storage (defaults to `[projectId].appspot.com`)
- `MCP_TRANSPORT`: Transport type to use (`stdio` or `http`) (defaults to `stdio`)
- `MCP_HTTP_PORT`: Port for HTTP transport (defaults to `3000`)
- `MCP_HTTP_HOST`: Host for HTTP transport (defaults to `localhost`)
- `MCP_HTTP_PATH`: Path for HTTP transport (defaults to `/mcp`)
- `DEBUG_LOG_FILE`: Enable file logging:
  - Set to `true` to log to `~/.firebase-mcp/debug.log`
  - Set to a file path to log to a custom location

### 3. Client Integration

#### Claude Desktop
Edit: `~/Library/Application Support/Claude/claude_desktop_config.json`

#### VS Code / Augment
Edit: `~/Library/Application Support/Code/User/settings.json`

#### Cursor
Edit: `[project root]/.cursor/mcp.json`

## 📚 API Reference

### Firestore Tools

| Tool                               | Description                    | Required Parameters        |
| ---------------------------------- | ------------------------------ | -------------------------- |
| `firestore_add_document`           | Add a document to a collection | `collection`, `data`       |
| `firestore_list_documents`         | List documents with filtering  | `collection`               |
| `firestore_get_document`           | Get a specific document        | `collection`, `id`         |
| `firestore_update_document`        | Update an existing document    | `collection`, `id`, `data` |
| `firestore_delete_document`        | Delete a document              | `collection`, `id`         |
| `firestore_list_collections`       | List root collections          | None                       |
| `firestore_query_collection_group` | Query across subcollections    | `collectionId`             |

### Storage Tools

| Tool                      | Description               | Required Parameters              |
| ------------------------- | ------------------------- | -------------------------------- |
| `storage_list_files`      | List files in a directory | None (optional: `directoryPath`) |
| `storage_get_file_info`   | Get file metadata and URL | `filePath`                       |
| `storage_upload`          | Upload file from content  | `filePath`, `content`            |
| `storage_upload_from_url` | Upload file from URL      | `filePath`, `url`                |

### Authentication Tools

| Tool            | Description             | Required Parameters |
| --------------- | ----------------------- | ------------------- |
| `auth_get_user` | Get user by ID or email | `identifier`        |

## 💻 Developer Guide

### Installation & Building

```bash
git clone https://github.com/gannonh/firebase-mcp
cd firebase-mcp
npm install
npm run build
```

### Running Tests

First, install and start Firebase emulators:
```bash
npm install -g firebase-tools
firebase init emulators
firebase emulators:start
```

Then run tests:
```bash
# Run tests with emulator
npm run test:emulator

# Run tests with coverage
npm run test:coverage:emulator
```

### Project Structure

```bash
src/
├── index.ts                  # Server entry point
├── utils/                    # Utility functions
└── lib/
    └── firebase/              # Firebase service clients
        ├── authClient.ts     # Authentication operations
        ├── firebaseConfig.ts   # Firebase configuration
        ├── firestoreClient.ts # Firestore operations
        └── storageClient.ts  # Storage operations
```

## 🌐 HTTP Transport

Firebase MCP now supports HTTP transport in addition to the default stdio transport. This allows you to run the server as a standalone HTTP service that can be accessed by multiple clients.

### Running with HTTP Transport

To run the server with HTTP transport:

```bash
# Using environment variables
MCP_TRANSPORT=http MCP_HTTP_PORT=3000 node dist/index.js

# Or with npx
MCP_TRANSPORT=http MCP_HTTP_PORT=3000 npx @gannonh/firebase-mcp
```

### Client Configuration for HTTP

When using HTTP transport, configure your MCP client to connect to the HTTP endpoint:

```json
{
  "firebase-mcp": {
    "url": "http://localhost:3000/mcp"
  }
}
```

### Session Management

The HTTP transport supports session management, allowing multiple clients to connect to the same server instance. Each client receives a unique session ID that is used to maintain state between requests.

## 🔍 Troubleshooting

### Common Issues

#### Storage Bucket Not Found
If you see "The specified bucket does not exist" error:
1. Verify your bucket name in Firebase Console → Storage
2. Set the correct bucket name in `FIREBASE_STORAGE_BUCKET` environment variable

#### Firebase Initialization Failed
If you see "Firebase is not initialized" error:
1. Check that your service account key path is correct and absolute
2. Ensure the service account has proper permissions for Firebase services

#### Composite Index Required
If you receive "This query requires a composite index" error:
1. Look for the provided URL in the error message
2. Follow the link to create the required index in Firebase Console
3. Retry your query after the index is created (may take a few minutes)

#### Zod Validation Error with `firestore_list_collections`
If you see a Zod validation error with message "Expected object, received boolean" when using the `firestore_list_collections` tool:

> ⚠️ **Known Issue**: The `firestore_list_collections` tool may return a Zod validation error in the client logs. This is an erroneous validation error in the MCP SDK, as our investigation confirmed no boolean values are present in the response. Despite the error message, the query still works correctly and returns the proper collection data. This is a log-level error that doesn't affect functionality.

### Debugging

#### Enable File Logging
To help diagnose issues, you can enable file logging:

```bash
# Log to default location (~/.firebase-mcp/debug.log)
DEBUG_LOG_FILE=true npx @gannonh/firebase-mcp

# Log to a custom location
DEBUG_LOG_FILE=/path/to/custom/debug.log npx @gannonh/firebase-mcp
```

You can also enable logging in your MCP client configuration:

```json
{
  "firebase-mcp": {
    "command": "npx",
    "args": ["-y", "@gannonh/firebase-mcp"],
    "env": {
      "SERVICE_ACCOUNT_KEY_PATH": "/path/to/serviceAccountKey.json",
      "FIREBASE_STORAGE_BUCKET": "your-project-id.firebasestorage.app",
      "DEBUG_LOG_FILE": "true"
    }
  }
}
```

#### Real-time Log Viewing
To view logs in real-time:

```bash
# Using tail to follow the log file
tail -f ~/.firebase-mcp/debug.log

# Using a split terminal to capture stderr
npm start 2>&1 | tee logs.txt
```

#### Using MCP Inspector
The MCP Inspector provides interactive debugging:

```bash
# Install MCP Inspector
npm install -g @mcp/inspector

# Connect to your MCP server
mcp-inspector --connect stdio --command "node ./dist/index.js"
```

## 📋 Response Formatting

### Storage Upload Response Example

```json
{
  "name": "reports/quarterly.pdf",
  "size": "1024000",
  "contentType": "application/pdf",
  "updated": "2025-04-11T15:37:10.290Z",
  "downloadUrl": "https://storage.googleapis.com/bucket/reports/quarterly.pdf?alt=media",
  "bucket": "your-project.appspot.com"
}
```

Displayed to the user as:

```markdown
## File Successfully Uploaded! 📁

Your file has been uploaded to Firebase Storage:

**File Details:**
- **Name:** reports/quarterly.pdf
- **Size:** 1024000 bytes
- **Type:** application/pdf
- **Last Updated:** April 11, 2025 at 15:37:10 UTC

**[Click here to download your file](https://storage.googleapis.com/bucket/reports/quarterly.pdf?alt=media)**
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Implement changes with tests (80%+ coverage required)
4. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🔗 Related Resources

- [Model Context Protocol Documentation](https://github.com/modelcontextprotocol)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
