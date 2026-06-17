---
name: "SureScaleAI/openai-gpt-image-mcp"
description: "OpenAI GPT image generation/editing MCP server."
category: "Aggregators"
repo: "SureScaleAI/openai-gpt-image-mcp"
stars: 102
url: "https://github.com/SureScaleAI/openai-gpt-image-mcp"
body_length: 5214
license: "MIT"
language: "TypeScript"
body_tr: |-
  # openai-gpt-image-mcp
  
  <p align="center">
    <a href="https://www.npmjs.com/package/@modelcontextprotocol/sdk"></a>
    <a href="https://www.npmjs.com/package/openai"></a>
    <a href="https://github.com/SureScaleAI/openai-gpt-image-mcp/blob/main/LICENSE"></a>
    <a href="https://github.com/SureScaleAI/openai-gpt-image-mcp/stargazers"></a>
    <a href="https://github.com/SureScaleAI/openai-gpt-image-mcp/actions"></a>
  </p>
  
  ---
  
  OpenAI'ın GPT-4o/gpt-image-1 görüntü oluşturma ve düzenleme API'leri için Model Context Protocol (MCP) tool server'ı.
  
  - **Görüntü oluştur**: OpenAI'ın en son modellerini kullanarak metin istekleri üzerinden görüntü oluştur.
  - **Görüntüleri düzenle**: İleri prompt kontrolü ile görüntüleri düzenle (inpainting, outpainting, compositing).
  - **Destekler**: Claude Desktop, Cursor, VSCode, Windsurf ve tüm MCP-uyumlu client'lar.
  
  ---
  
  ## ✨ Özellikler
  
  - **create-image**: İstekten görüntü oluştur, gelişmiş seçenekler ile (boyut, kalite, arka plan, vb).
  - **edit-image**: Prompt ve isteğe bağlı mask kullanarak görüntüleri düzenle veya genişlet, dosya yolları ve base64 girişini destekle.
  - **Dosya çıktısı**: Oluşturulan görüntüleri doğrudan diske kaydet veya base64 olarak al.
  
  ---
  
  ## 🚀 Kurulum
  
  ```sh
  git clone https://github.com/SureScaleAI/openai-gpt-image-mcp.git
  cd openai-gpt-image-mcp
  yarn install
  yarn build
  ```
  
  ---
  
  ## 🔑 Yapılandırma
  
  Claude Desktop veya VSCode (Cursor/Windsurf dahil) yapılandırmasına ekle:
  
  ```json
  {
    "mcpServers": {
      "openai-gpt-image-mcp": {
        "command": "node",
        "args": ["/absolute/path/to/dist/index.js"],
        "env": { "OPENAI_API_KEY": "sk-..." }
      }
    }
  }
  ```
  
  Azure dağıtımlarını da destekler:
  
  ```json
  {
    "mcpServers": {
      "openai-gpt-image-mcp": {
        "command": "node",
        "args": ["/absolute/path/to/dist/index.js"],
        "env": { 
          "AZURE_OPENAI_API_KEY": "sk-...",
          "AZURE_OPENAI_ENDPOINT": "my.endpoint.com",
          "OPENAI_API_VERSION": "2024-12-01-preview"
        }
      }
    }
  }
  ```
  
  Ayrıca ortam dosyası sağlamayı da destekler:
  
  ```json
  {
    "mcpServers": {
      "openai-gpt-image-mcp": {
        "command": "node",
        "args": ["/absolute/path/to/dist/index.js", "--env-file", "./deployment/.env"]
      }
    }
  }
  ```
  
  ---
  
  ## ⚡ Gelişmiş
  
  - `create-image` için, bir kerede 10'a kadar görüntü oluşturmak için `n` ayarla.
  - `edit-image` için, düzenleme yapılacak yeri kontrol etmek amacıyla mask görüntüsü (dosya yolu veya base64) sağla.
  - `--env-file path/to/file/.env` ile ortam dosyası sağla
  - Tüm seçenekler için `src/index.ts` bak.
  
  ---
  
  ## 🧑‍💻 Geliştirme
  
  - TypeScript kaynağı: `src/index.ts`
  - Derleme: `yarn build`
  - Çalıştır: `node dist/index.js`
  
  ---
  
  ## 📝 Lisans
  
  MIT
  
  ---
  
  ## 🩺 Sorun Giderme
  
  - `OPENAI_API_KEY` geçerli olduğundan ve görüntü API erişimine sahip olduğundan emin ol.
  - [Doğrulanmış bir OpenAI organizasyonunuz](https://platform.openai.com/account/organization) olması gerekir. Doğrulandıktan sonra, görüntü API erişiminin etkinleşmesi 15–20 dakika sürebilir.
  - Dosya yolları mutlak olmalıdır.
    - **Unix/macOS/Linux**: `/` ile başlayan (örn. `/path/to/image.png`)
    - **Windows**: Sürücü harfi ardından `:` (örn. `C:/path/to/image.png` veya `C:\path\to\image.png`)
  - Dosya çıktısı için dizinin yazılabilir olduğundan emin ol.
  - Dosya tipleri hakkında hatalar görürseniz, görüntü dosyasının uzantılarını ve formatlarını kontrol et.
  
  ---
  
  ## ⚠️ Sınırlamalar & Büyük Dosya Yönetimi
  
  - **1MB Payload Sınırı:** MCP client'ları (Claude Desktop dahil) tool yanıtları için 1MB'lık sabit bir sınıra sahiptir. Büyük görüntüler (özellikle yüksek çözünürlük veya birden fazla görüntü) base64 olarak döndürülürse kolayca bu sınırı aşabilir.
  - **Dosya Çıktısına Otomatik Geçiş:** Toplam görüntü boyutu 1MB'ı aşarsa, tool otomatik olarak görüntüleri diske kaydedecek ve base64 yerine dosya yolu(ları) döndürecektir. Bu uyumluluğu sağlar ve `result exceeds maximum length of 1048576` gibi hatalardan kaçınır.
  - **Varsayılan Dosya Konumu:** `file_output` yolu belirtmezseniz, görüntüler `/tmp` (veya `MCP_HF_WORK_DIR` ortam değişkeni tarafından ayarlanan dizin) içine benzersiz bir dosya adıyla kaydedilecektir.
  - **Ortam Değişkeni:**
    - `MCP_HF_WORK_DIR`: Büyük görüntülerin ve dosya çıktılarının nereye kaydedileceğini kontrol etmek için bunu ayarla. Örnek: `export MCP_HF_WORK_DIR=/your/desired/dir`
  - **En İyi Uygulama:** Büyük veya üretim görüntüleri için her zaman dosya çıktısı kullan ve client'ının dosya yollarını yönetmek üzere yapılandırıldığından emin ol.
  
  ---
  
  ## 📚 Referanslar
  
  - [OpenAI Images API Belgeleri](https://platform.openai.com/docs/api-reference/images)
  
  ---
  
  ## 🙏 Teşekkürler
  
  - [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk) ile oluşturuldu
  - [openai](https://www.npmjs.com/package/openai) Node.js SDK'sı kullanır
  - [SureScale.ai](https://surescale.ai) tarafından oluşturuldu
  - [Axle Research and Technology](https://axleinfo.com/) tarafından katkılar
---

# openai-gpt-image-mcp

<p align="center">
  <a href="https://www.npmjs.com/package/@modelcontextprotocol/sdk"></a>
  <a href="https://www.npmjs.com/package/openai"></a>
  <a href="https://github.com/SureScaleAI/openai-gpt-image-mcp/blob/main/LICENSE"></a>
  <a href="https://github.com/SureScaleAI/openai-gpt-image-mcp/stargazers"></a>
  <a href="https://github.com/SureScaleAI/openai-gpt-image-mcp/actions"></a>
</p>

---

A Model Context Protocol (MCP) tool server for OpenAI's GPT-4o/gpt-image-1 image generation and editing APIs.

- **Generate images** from text prompts using OpenAI's latest models.
- **Edit images** (inpainting, outpainting, compositing) with advanced prompt control.
- **Supports**: Claude Desktop, Cursor, VSCode, Windsurf, and any MCP-compatible client.

---

## ✨ Features

- **create-image**: Generate images from a prompt, with advanced options (size, quality, background, etc).
- **edit-image**: Edit or extend images using a prompt and optional mask, supporting both file paths and base64 input.
- **File output**: Save generated images directly to disk, or receive as base64.

---

## 🚀 Installation

```sh
git clone https://github.com/SureScaleAI/openai-gpt-image-mcp.git
cd openai-gpt-image-mcp
yarn install
yarn build
```

---

## 🔑 Configuration

Add to Claude Desktop or VSCode (including Cursor/Windsurf) config:

```json
{
  "mcpServers": {
    "openai-gpt-image-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/dist/index.js"],
      "env": { "OPENAI_API_KEY": "sk-..." }
    }
  }
}
```

Also supports Azure deployments:

```json
{
  "mcpServers": {
    "openai-gpt-image-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/dist/index.js"],
      "env": { 
        "AZURE_OPENAI_API_KEY": "sk-...",
        "AZURE_OPENAI_ENDPOINT": "my.endpoint.com",
        "OPENAI_API_VERSION": "2024-12-01-preview"
      }
    }
  }
}
```

Also supports supplying an environment files:

```json
{
  "mcpServers": {
    "openai-gpt-image-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/dist/index.js", "--env-file", "./deployment/.env"]
    }
  }
}
```

---

## ⚡ Advanced

- For `create-image`, set `n` to generate up to 10 images at once.
- For `edit-image`, provide a mask image (file path or base64) to control where edits are applied.
- Provide an environment file with `--env-file path/to/file/.env`
- See `src/index.ts` for all options.

---

## 🧑‍💻 Development

- TypeScript source: `src/index.ts`
- Build: `yarn build`
- Run: `node dist/index.js`

---

## 📝 License

MIT

---

## 🩺 Troubleshooting

- Make sure your `OPENAI_API_KEY` is valid and has image API access.
- You must have a [verified OpenAI organization](https://platform.openai.com/account/organization). After verifying, it can take 15–20 minutes for image API access to activate.
- File paths must be absolute.
  - **Unix/macOS/Linux**: Starting with `/` (e.g., `/path/to/image.png`)
  - **Windows**: Drive letter followed by `:` (e.g., `C:/path/to/image.png` or `C:\path\to\image.png`)
- For file output, ensure the directory is writable.
- If you see errors about file types, check your image file extensions and formats.

---

## ⚠️ Limitations & Large File Handling

- **1MB Payload Limit:** MCP clients (including Claude Desktop) have a hard 1MB limit for tool responses. Large images (especially high-res or multiple images) can easily exceed this limit if returned as base64.
- **Auto-Switch to File Output:** If the total image size exceeds 1MB, the tool will automatically save images to disk and return the file path(s) instead of base64. This ensures compatibility and prevents errors like `result exceeds maximum length of 1048576`.
- **Default File Location:** If you do not specify a `file_output` path, images will be saved to `/tmp` (or the directory set by the `MCP_HF_WORK_DIR` environment variable) with a unique filename.
- **Environment Variable:**
  - `MCP_HF_WORK_DIR`: Set this to control where large images and file outputs are saved. Example: `export MCP_HF_WORK_DIR=/your/desired/dir`
- **Best Practice:** For large or production images, always use file output and ensure your client is configured to handle file paths.

---

## 📚 References

- [OpenAI Images API Documentation](https://platform.openai.com/docs/api-reference/images)

---

## 🙏 Credits

- Built with [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
- Uses [openai](https://www.npmjs.com/package/openai) Node.js SDK 
- Built by [SureScale.ai](https://surescale.ai)
- Contributions from [Axle Research and Technology](https://axleinfo.com/)
