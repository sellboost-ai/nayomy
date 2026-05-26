---
name: "burningion/video-editing-mcp"
description: "Add, Analyze, Search, and Generate Video Edits from your Video Jungle Collection"
description_tr: "Video Jungle koleksiyonunuzdan video düzenlemeleri ekleyin, analiz edin, arayın ve oluşturun"
category: "Art & Culture"
repo: "burningion/video-editing-mcp"
stars: 268
url: "https://github.com/burningion/video-editing-mcp"
body_length: 7194
language: "Python"
body_tr: |-
  # Video Editor MCP sunucusu

  [![Video Jungle MCP Server](https://raw.githubusercontent.com/burningion/video-editing-mcp/HEAD/assets/create-edit.png)](https://www.video-jungle.com)

  Demo'yu burada görüntüleyin: [https://www.youtube.com/watch?v=KG6TMLD8GmA](https://www.youtube.com/watch?v=KG6TMLD8GmA)

  Herkesinin en sevdiği LLM ve [Video Jungle](https://www.video-jungle.com/) ile videoları yükleyin, düzenleyin, arayın ve oluşturun.

  Bu aracı kullanmak için [Video Jungle](https://app.video-jungle.com/register)'da bir hesap açmanız ve API anahtarınızı eklemeniz gerekir.

  [![PyPI version](https://badge.fury.io/py/video-editor-mcp.svg)](https://badge.fury.io/py/video-editor-mcp)

  ## Bileşenler

  ### Kaynaklar

  Sunucu, videoları yüklemek, oluşturmak ve düzenlemek için bir interface uygular:
  - Bireysel videoları ve projeleri erişmek için özel vj:// URI şeması
  - Her proje kaynağının bir adı ve açıklaması vardır
  - Arama sonuçları, videoda neler olduğu ve ne zaman olduğuna dair metaveri ile döndürülür, bu da doğrudan düzenleme oluşturmaya izin verir

  ### İstemler

  Çok yakında geliyor.

  ### Araçlar

  Sunucu birkaç araç uygular:
  - add-video
    - Bir URL'den analiz için Video Dosyası ekleyin. Video dosyasına başvurmak için bir vj:// URI döndürür
  - create-videojungle-project
    - Generatif komutları, analiz edilen videoları ve video düzenleme oluşturma için görüntüleri içerecek bir Video Jungle projesi oluşturur
  - edit-locally
    - Bir OpenTimelineIO projesi oluşturur ve bunu makinenize indirir, bu projeyi bir Davinci Resolve Studio örneğinde açmak için (Resolve Studio _mutlaka_ bu aracı çağırmadan önce çalışıyor olmalıdır.)
  - generate-edit-from-videos
    - Bir dizi video dosyasından render edilmiş bir video düzenlemesi oluşturur
  - generate-edit-from-single-video
    - Tek bir giriş video dosyasından bir düzenleme oluşturun
  - get-project-assets
    - Video düzenleme oluşturma için bir proje içindeki varlıkları alın.
  - search-videos
    - Embedding ve anahtar kelimeler temel alınarak video eşleşmeleri döndürür
  - update-video-edit
    - Bir video düzenlemesinin bilgilerini canlı olarak güncelleyin. Video Jungle açıksa, düzenleme gerçek zamanlı olarak güncellenecektir.

  ### Araçları Pratikte Kullanmak

  Araçları kullanmak için Video Jungle'da kaydolmanız ve API anahtarınızı eklemeniz gerekir.

  **add-video**

  `add-video` aracını çağırmak için bir örnek istem:

  ```
  https://www.youtube.com/shorts/RumgYaH5XYw adresindeki videoyu indir ve buna fly traps adını ver misin?
  ```

  Bu, bir URL'den video indirir, kitaplığınıza ekler ve daha sonra alınabilmesi için analiz eder. Analiz çok modlu olduğundan, hem ses hem de görsel bileşenlere karşı sorgu yapılabilir.

  **search-videos**

  Bir video indirdikten ve analiz ettikten sonra, `search-videos` aracını kullanarak buna karşı sorgular yapabilirsiniz:

  ```
  videolarımda fly traps araması yapabilir misin?
  ```

  Arama sonuçları, başlangıç analizinde keşfedilen ayrıntılara göre bir video düzenleme oluşturmak için ilgili metaveri içerir.

  **search-local-videos**

  Bu aracı kullanmak için `LOAD_PHOTOS_DB=1` ortam değişkenini ayarlamanız gerekir, çünkü bu Claude'un yerel makinenizde dosyalara erişmesini istemeyi sağlayacaktır.

  Bunu yaptıktan sonra, Apple'ın etiketlerini kullanarak telefonunuzda bulunan videolar için Photos uygulamanızda arama yapabilirsiniz.

  Benim durumumda, "Skateboard" için arama yaptığımda 1903 video dosyası alıyorum.

  ```
  yerel video dosyalarımda Skateboard araması yapabilir misin?
  ```

  **generate-edit-from-videos**

  Son olarak, bu arama sonuçlarını kullanarak bir düzenleme oluşturabilirsiniz:

  ```
  videonun "fly trap" dediği tüm zamanların bir düzenlemesini oluşturabilir misin?
  ```

  (Şu an için) video düzenlemeleri aracı geçerli sohbetteki bağlama dayanır.

  **generate-edit-from-single-video**

  Son olarak, tek bir mevcut videodan bir düzenlemeyi azaltabilirsiniz:

  ```
  bu videonun "fly trap" sözcüğünü söylediği tüm zamanların bir düzenlemesini oluşturabilir misin?
  ```

  ## Yapılandırma

  [Video Jungle ayarlarında](https://app.video-jungle.com/profile/settings) oturum açmalı ve [API anahtarınızı](https://app.video-jungle.com/profile/settings) almalısınız. Ardından, Video Jungle MCP'yi başlatmak için bunu kullanın:

  ```bash
  $ uv run video-editor-mcp YOURAPIKEY
  ```

  Bu MCP sunucusunun MacOS'ta Photos uygulamanızda arama yapmasına izin vermek için:

  ```
  $ LOAD_PHOTOS_DB=1 uv run video-editor-mcp YOURAPIKEY
  ```

  ## Hızlı Başlangıç

  ### Yükleme

  #### Smithery aracılığıyla Yükleme

  Video Editor for Claude Desktop'u [Smithery](https://smithery.ai/server/video-editor-mcp) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install video-editor-mcp --client claude
  ```

  #### Claude Desktop

  `claude_desktop_config.json`'ınızı el ile ayarlamanız gerekecektir:

  MacOS'ta: `~/Library/Application\ Support/Claude/claude_desktop_config.json`
  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  <details>
  <details>
    <summary>Yayınlanan Sunucu Yapılandırması</summary>
    
   ```json
    "mcpServers": {
      "video-editor-mcp": {
        "command": "uvx",
        "args": [
          "video-editor-mcp",
          "YOURAPIKEY"
        ]
      }
    }
    ```
  </details>
    <summary>Geliştirme/Yayınlanmamış Sunucular Yapılandırması</summary>
    
   ```json
    "mcpServers": {
      "video-editor-mcp": {
        "command": "uv",
        "args": [
          "--directory",
          "/Users/YOURDIRECTORY/video-editor-mcp",
          "run",
          "video-editor-mcp",
          "YOURAPIKEY"
        ]
      }
    }
    ```

    Yerel Photos uygulaması erişimi etkinleştirilmiş (Photos uygulamanızda arama yapın):

    ```json
      "video-jungle-mcp": {
        "command": "uv",
        "args": [
          "--directory",
          "/Users/<PATH_TO>/video-jungle-mcp",
          "run",
          "video-editor-mcp",
          "<YOURAPIKEY>"
        ],
       "env": {
  	      "LOAD_PHOTOS_DB": "1"
        }
      },
    ```

  </details>

  Dizinleri, depoyu bilgisayarınıza yerleştirdiğiniz dizinlerle değiştirdiğinizden emin olun.

  ## Geliştirme

  ### Derleme ve Yayımlama

  Paketi dağıtım için hazırlamak için:

  1. Bağımlılıkları eşitleyin ve lockfile'ı güncelleyin:
  ```bash
  uv sync
  ```

  2. Paket dağıtımları oluşturun:
  ```bash
  uv build
  ```

  Bu, `dist/` dizininde kaynak ve wheel dağıtımları oluşturacaktır.

  3. PyPI'ye yayımlayın:
  ```bash
  uv publish
  ```

  Not: PyPI kimlik bilgilerini ortam değişkenleri veya komut bayrakları aracılığıyla ayarlamanız gerekecektir:
  - Token: `--token` veya `UV_PUBLISH_TOKEN`
  - Veya kullanıcı adı/şifre: `--username`/`UV_PUBLISH_USERNAME` ve `--password`/`UV_PUBLISH_PASSWORD`

  ### MCP Sunucu Kaydı

  ```
  mcp-name: io.github.burningion/video-editing-mcp
  ```

  ### Hata Ayıklama

  MCP sunucuları stdio üzerinden çalıştığı için hata ayıklama zor olabilir. En iyi hata ayıklama deneyimi için, [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanmanızı şiddetle tavsiye ederiz.

  Bu komutla [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) aracılığıyla MCP Inspector'ı başlatabilirsiniz:

  (`YOURDIRECTORY` ve `YOURAPIKEY`'i bu deponun bulunduğu dizin ve ayarlar sayfasında bulunan Video Jungle API anahtarınız ile değiştirdiğinizden emin olun.)

  ```bash
  npx @modelcontextprotocol/inspector uv run --directory /Users/YOURDIRECTORY/video-editor-mcp video-editor-mcp YOURAPIKEY
  ```

  Başlatıldıktan sonra, Inspector hata ayıklamaya başlamak için tarayıcınızda erişebileceğiniz bir URL görüntüleyecektir.

  Ek olarak, proje dizininde `app.log`'a kayıt eklemiş bulundum. Bir API çağrısını tanılamak için kayıt ekleyebilirsiniz:

  ```
  logging.info("this is a test log")
  ```

  Projede çalışırken takip etmenin makul bir yolu, bir terminal oturumu açmak ve şunu yapmaktır:

  ```bash
  $ tail -n 90 -f app.log
  ```
---

# Video Editor MCP server

[![Video Jungle MCP Server](https://raw.githubusercontent.com/burningion/video-editing-mcp/HEAD/assets/create-edit.png)](https://www.video-jungle.com)

See a demo here: [https://www.youtube.com/watch?v=KG6TMLD8GmA](https://www.youtube.com/watch?v=KG6TMLD8GmA)

Upload, edit, search, and generate videos from everyone's favorite LLM and [Video Jungle](https://www.video-jungle.com/).

You'll need to sign up for an account at [Video Jungle](https://app.video-jungle.com/register) in order to use this tool, and add your API key.

[![PyPI version](https://badge.fury.io/py/video-editor-mcp.svg)](https://badge.fury.io/py/video-editor-mcp)

## Components

### Resources

The server implements an interface to upload, generate, and edit videos with:
- Custom vj:// URI scheme for accessing individual videos and projects
- Each project resource has a name, description
- Search results are returned with metadata about what is in the video, and when, allowing for edit generation directly

### Prompts

Coming soon.

### Tools

The server implements a few tools:
- add-video
  - Add a Video File for analysis from a URL. Returns an vj:// URI to reference the Video file
- create-videojungle-project
  - Creates a Video Jungle project to contain generative scripts, analyzed videos, and images for video edit generation
- edit-locally
  - Creates an OpenTimelineIO project and downloads it to your machine to open in a Davinci Resolve Studio instance (Resolve Studio _must_ already be running before calling this tool.) 
- generate-edit-from-videos
  - Generates a rendered video edit from a set of video files
- generate-edit-from-single-video
  - Generate an edit from a single input video file
- get-project-assets
  - Get assets within a project for video edit generation.
- search-videos
  - Returns video matches based upon embeddings and keywords
- update-video-edit
  - Live update a video edit's information. If Video Jungle is open, edit will be updated in real time.

### Using Tools in Practice

In order to use the tools, you'll need to sign up for Video Jungle and add your API key.

**add-video**

Here's an example prompt to invoke the `add-video` tool:

```
can you download the video at https://www.youtube.com/shorts/RumgYaH5XYw and name it fly traps?
```

This will download a video from a URL, add it to your library, and analyze it for retrieval later. Analysis is multi-modal, so both audio and visual components can be queried against.

**search-videos**

Once you've got a video downloaded and analyzed, you can then do queries on it using the `search-videos` tool:

```
can you search my videos for fly traps?
```

Search results contain relevant metadata for generating a video edit according to details discovered in the initial analysis.

**search-local-videos**

You must set the environment variable `LOAD_PHOTOS_DB=1` in order to use this tool, as it will make Claude prompt to access your files on your local machine.

Once that's done, you can search through your Photos app for videos that exist on your phone, using Apple's tags.

In my case, when I search for "Skateboard", I get 1903 video files.

```
can you search my local video files for Skateboard?
```

**generate-edit-from-videos**

Finally, you can use these search results to generate an edit:

```
can you create an edit of all the times the video says "fly trap"?
```

(Currently), the video edits tool relies on the context within the current chat. 

**generate-edit-from-single-video**

Finally, you can cut down an edit from a single, existing video:

```
can you create an edit of all the times this video says the word "fly trap"?
```

## Configuration

You must login to [Video Jungle settings](https://app.video-jungle.com/profile/settings), and get your [API key](https://app.video-jungle.com/profile/settings). Then, use this to start Video Jungle MCP:

```bash
$ uv run video-editor-mcp YOURAPIKEY
```

To allow this MCP server to search your Photos app on MacOS:

```
$ LOAD_PHOTOS_DB=1 uv run video-editor-mcp YOURAPIKEY
```
## Quickstart

### Install

#### Installing via Smithery

To install Video Editor for Claude Desktop automatically via [Smithery](https://smithery.ai/server/video-editor-mcp):

```bash
npx -y @smithery/cli install video-editor-mcp --client claude
```

#### Claude Desktop

You'll need to adjust your `claude_desktop_config.json` manually:

On MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

<details>
<details>
  <summary>Published Server Configuration</summary>
  
 ```json
  "mcpServers": {
    "video-editor-mcp": {
      "command": "uvx",
      "args": [
        "video-editor-mcp",
        "YOURAPIKEY"
      ]
    }
  }
  ```
</details>
  <summary>Development/Unpublished Servers Configuration</summary>
  
 ```json
  "mcpServers": {
    "video-editor-mcp": {
      "command": "uv",
      "args": [
        "--directory",
        "/Users/YOURDIRECTORY/video-editor-mcp",
        "run",
        "video-editor-mcp",
        "YOURAPIKEY"
      ]
    }
  }
  ```

  With local Photos app access enabled (search your Photos app):

  ```json
    "video-jungle-mcp": {
      "command": "uv",
      "args": [
        "--directory",
        "/Users/<PATH_TO>/video-jungle-mcp",
        "run",
        "video-editor-mcp",
        "<YOURAPIKEY>"
      ],
     "env": {
	      "LOAD_PHOTOS_DB": "1"
      }
    },
  ```

</details>

Be sure to replace the directories with the directories you've placed the repository in on **your** computer.

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
- Token: `--token` or `UV_PUBLISH_TOKEN`
- Or username/password: `--username`/`UV_PUBLISH_USERNAME` and `--password`/`UV_PUBLISH_PASSWORD`

### MCP Server Registry

```
mcp-name: io.github.burningion/video-editing-mcp
```

### Debugging

Since MCP servers run over stdio, debugging can be challenging. For the best debugging
experience, we strongly recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector).


You can launch the MCP Inspector via [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) with this command:

(Be sure to replace `YOURDIRECTORY` and `YOURAPIKEY` with the directory this repo is in, and your Video Jungle API key, found in the settings page.)

```bash
npx @modelcontextprotocol/inspector uv run --directory /Users/YOURDIRECTORY/video-editor-mcp video-editor-mcp YOURAPIKEY
```


Upon launching, the Inspector will display a URL that you can access in your browser to begin debugging.

Additionally, I've added logging to `app.log` in the project directory. You can add logging to diagnose API calls via a:

```
logging.info("this is a test log")
```

A reasonable way to follow along as you're workin on the project is to open a terminal session and do a:

```bash
$ tail -n 90 -f app.log
```
