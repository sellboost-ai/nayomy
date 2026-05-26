---
name: "mberg/kokoro-tts-mcp"
description: "MCP Server that uses the open weight Kokoro TTS models to convert text-to-speech. Can convert text to MP3 on a local driver or auto-upload to an S3 bucket."
description_tr: "Açık ağırlıklı Kokoro TTS modellerini kullanarak metinden konuşmaya dönüştüren MCP Server. Metni yerel sürücüde MP3'e dönüştürebilir veya otomatik olarak S3 bucket'ına yükleyebilir."
category: "Text-to-Speech"
repo: "mberg/kokoro-tts-mcp"
stars: 78
url: "https://github.com/mberg/kokoro-tts-mcp"
body_length: 4396
license: "Apache-2.0"
language: "Python"
body_tr: |-
  <a href="https://glama.ai/mcp/servers/@mberg/kokoro-tts-mcp">
    
  </a>

  ## Kokoro Metin Konuşmaya (TTS) MCP Sunucusu

  Kokoro Metin Konuşmaya MCP sunucusu, S3'e yükleme seçeneği ile .mp3 dosyaları oluşturur.

  Kullanılan: https://huggingface.co/spaces/hexgrad/Kokoro-TTS

  ## Yapılandırma

  * Yerel bir depo olarak klonlayın.
  * [Kokoro Onnx Ağırlıkları](https://github.com/thewh1teagle/kokoro-onnx) için [kokoro-v1.0.onnx](https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx) ve [voices-v1.0.bin](https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin) dosyalarını indirin ve aynı depo içinde saklayın.

  Aşağıdakileri MCP yapılandırmalarınıza ekleyin. Kendi değerlerinizle güncelleyin.

  ```
    "kokoro-tts-mcp": {
        "command": "uv",
        "args": [
          "--directory",
          "/path/toyourlocal/kokoro-tts-mcp",
          "run",
          "mcp-tts.py"
        ],
        "env": {
          "TTS_VOICE": "af_heart",
          "TTS_SPEED": "1.0",
          "TTS_LANGUAGE": "en-us",
          "AWS_ACCESS_KEY_ID": "",
          "AWS_SECRET_ACCESS_KEY": "",
          "AWS_REGION": "us-east-1",
          "AWS_S3_FOLDER": "mp3",
          "S3_ENABLED": "true",
          "MP3_FOLDER": "/path/to/mp3"
        } 
      }
  ```

  ### ffmpeg Kurulumu

  Bu, .wav dosyalarını .mp3 dosyalarına dönüştürmek için gereklidir.

  Mac için:

  ``` 
  brew install ffmpeg
  ```

  Yerel olarak çalıştırmak için bu değerleri .env dosyanıza ekleyin. env.example dosyasına bakın ve .env dosyasına kopyalayın, kendi değerlerinizle değiştirin.

  ### Desteklenen Ortam Değişkenleri

  - `AWS_ACCESS_KEY_ID`: AWS erişim anahtarı kimliği
  - `AWS_SECRET_ACCESS_KEY`: AWS gizli erişim anahtarı
  - `AWS_S3_BUCKET_NAME`: S3 bucket adı
  - `AWS_S3_REGION`: S3 bölgesi (örn., us-east-1)
  - `AWS_S3_FOLDER`: S3 bucket içindeki klasör yolu
  - `AWS_S3_ENDPOINT_URL`: S3 uyumlu depolama için isteğe bağlı özel endpoint URL'si
  - `MCP_HOST`: Sunucunun bağlanacağı host (varsayılan: 0.0.0.0)
  - `MCP_PORT`: Dinlenecek port (varsayılan: 9876)
  - `MCP_CLIENT_HOST`: İstemci bağlantıları için hostname (varsayılan: localhost)
  - `DEBUG`: Debug modunu etkinleştir ("true" veya "1" olarak ayarla)
  - `S3_ENABLED`: S3 yüklemelerini etkinleştir ("true" veya "1" olarak ayarla)
  - `MP3_FOLDER`: MP3 dosyalarını depolamak için yol (varsayılan, script dizininde 'mp3' klasörü)
  - `MP3_RETENTION_DAYS`: Otomatik silmeden önce MP3 dosyalarını tutulacak gün sayısı
  - `DELETE_LOCAL_AFTER_S3_UPLOAD`: Başarılı S3 yüklemesinden sonra yerel MP3 dosyalarını silip silmeyeceğini belirt ("true" veya "1" olarak ayarla)
  - `TTS_VOICE`: TTS istemcisi için varsayılan ses (varsayılan: af_heart)
  - `TTS_SPEED`: TTS istemcisi için varsayılan hız (varsayılan: 1.0)
  - `TTS_LANGUAGE`: TTS istemcisi için varsayılan dil (varsayılan: en-us)

  ## Sunucuyu Yerel Olarak Çalıştırma

  Tercih edilen yöntem UV kullanmaktır
  ```
  uv run mcp-tts.py
  ```


  ## TTS İstemcisini Kullanma

  `mcp_client.py` script'i sunucuya TTS istekleri göndermenize izin verir. Aşağıdaki şekilde kullanılabilir:

  ### Bağlantı Ayarları

  Sunucu ve istemci aynı makinede çalışırken:
  - Sunucu `0.0.0.0` (tüm arayüzler) veya `127.0.0.1` (sadece localhost) adresine bağlanmalıdır
  - İstemci `localhost` veya `127.0.0.1` adresine bağlanmalıdır


  ### Temel Kullanım

  ```bash
  python mcp_client.py --text "Hello, world!"
  ```

  ### Metni Dosyadan Okuma

  ```bash
  python mcp_client.py --file my_text.txt
  ```

  ### Ses ve Hızı Özelleştirme

  ```bash
  python mcp_client.py --text "Hello, world!" --voice "en_female" --speed 1.2
  ```

  ### S3 Yüklemesini Devre Dışı Bırakma

  ```bash
  python mcp_client.py --text "Hello, world!" --no-s3
  ```

  ### Komut Satırı Seçenekleri

  ```bash
  python mcp_client.py --help
  ```

  ## MP3 Dosya Yönetimi

  TTS sunucusu, yerel olarak depolanan ve isteğe bağlı olarak S3'e yüklenen MP3 dosyaları oluşturur. Bu dosyaların nasıl yönetildiğini yapılandırabilirsiniz:

  ### Yerel Depolama

  - MP3 dosyalarının nerede depolandığını belirtmek için `.env` dosyanızda `MP3_FOLDER` seçeneğini ayarlayın
  - Dosyalar otomatik olarak silinmediği sürece bu klasörde tutulur

  ### Otomatik Temizleme

  - Dosyaları belirtilen gün sayısından daha eski olduğunda otomatik olarak silmek için `MP3_RETENTION_DAYS=30` (veya herhangi bir sayı) ayarlayın
  - Başarılı S3 yüklemesinden hemen sonra yerel dosyaları silmek için `DELETE_LOCAL_AFTER_S3_UPLOAD=true` ayarlayın

  ### S3 Entegrasyonu

  - `S3_ENABLED=true` veya `DISABLE_S3=true` ile S3 yüklemelerini etkinleştirin/devre dışı bırakın
  - `.env` dosyasında AWS kimlik bilgilerini ve bucket ayarlarını yapılandırın
  - S3 yüklemeleri, istemcinin `--no-s3` seçeneği kullanılarak istek başına devre dışı bırakılabilir
---

<a href="https://glama.ai/mcp/servers/@mberg/kokoro-tts-mcp">
  
</a>

## Kokoro Text to Speech (TTS) MCP Server

Kokoro Text to Speech MCP server that generates .mp3 files with option to upload to S3.

Uses: https://huggingface.co/spaces/hexgrad/Kokoro-TTS

## Configuration

* Clone to a local repo.
* Download the [Kokoro Onnx Weights](https://github.com/thewh1teagle/kokoro-onnx) for [kokoro-v1.0.onnx](https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx) and [voices-v1.0.bin](https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin) and store in the same repo.

Add the following to your MCP configs. Update with your own values.

```
  "kokoro-tts-mcp": {
      "command": "uv",
      "args": [
        "--directory",
        "/path/toyourlocal/kokoro-tts-mcp",
        "run",
        "mcp-tts.py"
      ],
      "env": {
        "TTS_VOICE": "af_heart",
        "TTS_SPEED": "1.0",
        "TTS_LANGUAGE": "en-us",
        "AWS_ACCESS_KEY_ID": "",
        "AWS_SECRET_ACCESS_KEY": "",
        "AWS_REGION": "us-east-1",
        "AWS_S3_FOLDER": "mp3",
        "S3_ENABLED": "true",
        "MP3_FOLDER": "/path/to/mp3"
      } 
    }
```

### Install ffmmeg

This is needed to convert .wav to .mp3 files

For mac:

``` 
brew install ffmpeg
```

To run locally add these to your .env file.  See env.example and copy to .env and modify with your own values.

### Supported Environment Variables

- `AWS_ACCESS_KEY_ID`: Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key
- `AWS_S3_BUCKET_NAME`: S3 bucket name
- `AWS_S3_REGION`: S3 region (e.g., us-east-1)
- `AWS_S3_FOLDER`: Folder path within the S3 bucket
- `AWS_S3_ENDPOINT_URL`: Optional custom endpoint URL for S3-compatible storage
- `MCP_HOST`: Host to bind the server to (default: 0.0.0.0)
- `MCP_PORT`: Port to listen on (default: 9876)
- `MCP_CLIENT_HOST`: Hostname for client connections to the server (default: localhost)
- `DEBUG`: Enable debug mode (set to "true" or "1")
- `S3_ENABLED`: Enable S3 uploads (set to "true" or "1")
- `MP3_FOLDER`: Path to store MP3 files (default is 'mp3' folder in script directory)
- `MP3_RETENTION_DAYS`: Number of days to keep MP3 files before automatic deletion
- `DELETE_LOCAL_AFTER_S3_UPLOAD`: Whether to delete local MP3 files after successful S3 upload (set to "true" or "1")
- `TTS_VOICE`: Default voice for the TTS client (default: af_heart)
- `TTS_SPEED`: Default speed for the TTS client (default: 1.0)
- `TTS_LANGUAGE`: Default language for the TTS client (default: en-us)

## Running the Server Locally

Preferred method use UV 
```
uv run mcp-tts.py
```


## Using the TTS Client

The `mcp_client.py` script allows you to send TTS requests to the server. It can be used as follows:

### Connection Settings

When running the server and client on the same machine:
- Server should bind to `0.0.0.0` (all interfaces) or `127.0.0.1` (localhost only)
- Client should connect to `localhost` or `127.0.0.1`


### Basic Usage

```bash
python mcp_client.py --text "Hello, world!"
```

### Reading Text from a File

```bash
python mcp_client.py --file my_text.txt
```

### Customizing Voice and Speed

```bash
python mcp_client.py --text "Hello, world!" --voice "en_female" --speed 1.2
```

### Disabling S3 Upload

```bash
python mcp_client.py --text "Hello, world!" --no-s3
```

### Command-line Options

```bash
python mcp_client.py --help
```

## MP3 File Management

The TTS server generates MP3 files that are stored locally and optionally uploaded to S3. You can configure how these files are managed:

### Local Storage

- Set `MP3_FOLDER` in your `.env` file to specify where MP3 files are stored
- Files are kept in this folder unless automatically deleted

### Automatic Cleanup

- Set `MP3_RETENTION_DAYS=30` (or any number) to automatically delete files older than that number of days
- Set `DELETE_LOCAL_AFTER_S3_UPLOAD=true` to delete local files immediately after successful S3 upload

### S3 Integration

- Enable/disable S3 uploads with `S3_ENABLED=true` or `DISABLE_S3=true`
- Configure AWS credentials and bucket settings in the `.env` file
- S3 uploads can be disabled per-request using the client's `--no-s3` option
