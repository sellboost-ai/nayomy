---
name: "ChronulusAI/chronulus-mcp"
description: "Predict anything with Chronulus AI forecasting and prediction agents."
description_tr: "Chronulus AI tahmin ve prediksiyon ajanlarıyla her şeyi öngörün."
category: "Data Science Tools"
repo: "ChronulusAI/chronulus-mcp"
stars: 108
url: "https://github.com/ChronulusAI/chronulus-mcp"
body_length: 5291
license: "MIT"
language: "Python"
homepage: "https://www.chronulus.com"
body_tr: |-
  <div align="center">

      <h1 align="center">Chronulus için MCP Sunucusu</h1>
      <h3 align="center">Claude'da Chronulus AI Tahmin ve Ön Görü Ajanları ile Sohbet Edin</h3>
  </div>




  ### Hızlı Başlangıç: Claude for Desktop

  #### Kurulum 

  Claude for Desktop şu anda macOS ve Windows'ta kullanılabilir.

  Claude for Desktop'ı [buradan](https://claude.ai/download) yükleyin

  #### Yapılandırma

  Claude desktop istemcisini yapılandırmak için [buradaki](https://modelcontextprotocol.io/quickstart/user) genel talimatları izleyin.

  Claude yapılandırmanızı aşağıdaki konumlardan birinde bulabilirsiniz:

  - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

  Ardından ihtiyaçlarınıza en uygun olan aşağıdaki yöntemlerden birini seçin ve `claude_desktop_config.json` dosyanıza ekleyin



  <details>
  <summary>pip kullanarak</summary>

  (Seçenek 1) PyPI'den release yükleyin

  ```bash 
  pip install chronulus-mcp
  ```


  (Seçenek 2) Github'dan yükleyin

  ```bash 
  git clone https://github.com/ChronulusAI/chronulus-mcp.git
  cd chronulus-mcp
  pip install .
  ```



  ```json 
  {
    "mcpServers": {
      "chronulus-agents": {
        "command": "python",
        "args": ["-m", "chronulus_mcp"],
        "env": {
          "CHRONULUS_API_KEY": "<YOUR_CHRONULUS_API_KEY>"
        }
      }
    }
  }
  ```

  Not: "MCP chronulus-agents: spawn python ENOENT" gibi bir hata alırsanız, 
  büyük olasılıkla `python` için mutlak yolu sağlamanız gerekir. 
  Örneğin `/Library/Frameworks/Python.framework/Versions/3.11/bin/python3` yerine sadece `python`

  </details>


  <details>
  <summary>docker kullanarak</summary>

  Burada Claude config'imizde yeniden kullanabileceğimiz 'chronulus-mcp' adlı bir docker image oluşturacağız.

  ```bash 
  git clone https://github.com/ChronulusAI/chronulus-mcp.git
  cd chronulus-mcp
   docker build . -t 'chronulus-mcp'
  ```

  Claude config'inizde, son argümanın build komutunda docker image'e verdiğiniz adla eşleştiğinden emin olun.

  ```json 
  {
    "mcpServers": {
      "chronulus-agents": {
        "command": "docker",
        "args": ["run", "-i", "--rm", "-e", "CHRONULUS_API_KEY", "chronulus-mcp"],
        "env": {
          "CHRONULUS_API_KEY": "<YOUR_CHRONULUS_API_KEY>"
        }
      }
    }
  }
  ```

  </details>

  <details>
  <summary>uvx kullanarak</summary>

  `uvx`, PyPI registry'sinden `chronulus-mcp`'nin en son sürümünü çeker, kurar ve ardından çalıştırır.


  ```json 
  {
    "mcpServers": {
      "chronulus-agents": {
        "command": "uvx",
        "args": ["chronulus-mcp"],
        "env": {
          "CHRONULUS_API_KEY": "<YOUR_CHRONULUS_API_KEY>"
        }
      }
    }
  }
  ```

  Not: "MCP chronulus-agents: spawn uvx ENOENT" gibi bir hata alırsanız, büyük olasılıkla şunlardan birini yapmanız gerekir:
  1. [uv'yi yükleyin](https://docs.astral.sh/uv/getting-started/installation/) veya
  2. `uvx` için mutlak yolu sağlayın. Örneğin `/Users/username/.local/bin/uvx` yerine sadece `uvx`

  </details>

  #### Ek Sunucular (Dosya Sistemi, Fetch, vb.)

  Demomuzda [fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) ve [filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) gibi üçüncü taraf sunucuları kullanıyoruz.

  Üçüncü taraf sunucu kurulumu ve yapılandırması hakkında ayrıntılar için lütfen sunucu bakıcısı tarafından sağlanan belgelere bakın.

  Aşağıda, `claude_desktop_config.json` dosyanızda Chronulus ile birlikte dosya sistemini ve fetch'i yapılandırmanın bir örneği verilmiştir: 

  ```json 
  {
    "mcpServers": {
      "chronulus-agents": {
        "command": "uvx",
        "args": ["chronulus-mcp"],
        "env": {
          "CHRONULUS_API_KEY": "<YOUR_CHRONULUS_API_KEY>"
        }
      },
      "filesystem": {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-filesystem",
          "/path/to/AIWorkspace"
        ]
      },
      "fetch": {
        "command": "uvx",
        "args": ["mcp-server-fetch"]
      }
    }
  } 
  ```


  #### Claude Tercihleri

  Claude'u birden fazla araç seti ile kullanma deneyiminizi kolaylaştırmak için tercihlerinizi Claude Ayarları altına eklemeniz en iyisidir. 

  Claude tercihlerinizi birkaç yoldan güncelleyebilirsiniz:

  * Claude Desktop'tan: `Settings -> General -> Claude Settings -> Profile (tab)`
  * [claude.ai/settings](https://claude.ai/settings) sayfasından: `Profile (tab)`

  Tercihler hem Claude for Desktop hem de Claude.ai (web arayüzü) arasında paylaşılır. Bu nedenle talimatlarınızın her iki deneyimde de çalışması gerekir.

  Demolarımızda gösterilen sonuçları elde etmek için kullandığımız tercihler aşağıda verilmiştir:

  ```
  ## Araçlara Bağımlı Protokoller
  Aşağıdaki talimatlar yalnızca araçlar/MCP Sunucuları erişilebilir olduğunda geçerlidir.

  ### Dosya Sistemi - Araç Talimatları
  - İkili dosyalara (örneğin resimler, pdf'ler, docx) 'read_file' veya 'read_multiple_files' kullanmayın.
  - İkili dosyalarla (örneğin resimler, pdf'ler, docx) çalışırken, bir dosyayı incelemek için 'read_*' araçları yerine 'get_info' kullanın.

  ### Chronulus Ajanları - Araç Talimatları
  - Chronulus kullanırken, dosyaları doğrudan taramak yerine TextFromFile, PdfFromFile ve ImageFromFile gibi input alanı türlerini kullanmayı tercih edin.
  - Chronulus'tan tahminleri çizerken, her zaman Chronulus tarafından sağlanan tahmin açıklamasını grafiğin altına ekleyin ve Chronulus Açıklaması olarak etiketleyin.
  ```
---

<div align="center">

    <h1 align="center">MCP Server for Chronulus</h1>
    <h3 align="center">Chat with Chronulus AI Forecasting & Prediction Agents in Claude</h3>
</div>




### Quickstart: Claude for Desktop

#### Install 

Claude for Desktop is currently available on macOS and Windows.

Install Claude for Desktop [here](https://claude.ai/download)

#### Configuration

Follow the general instructions [here](https://modelcontextprotocol.io/quickstart/user) to configure the Claude desktop client.

You can find your Claude config at one of the following locations:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Then choose one of the following methods that best suits your needs and add it to your `claude_desktop_config.json`



<details>
<summary>Using pip</summary>

(Option 1) Install release from PyPI

```bash 
pip install chronulus-mcp
```


(Option 2) Install from Github

```bash 
git clone https://github.com/ChronulusAI/chronulus-mcp.git
cd chronulus-mcp
pip install .
```



```json 
{
  "mcpServers": {
    "chronulus-agents": {
      "command": "python",
      "args": ["-m", "chronulus_mcp"],
      "env": {
        "CHRONULUS_API_KEY": "<YOUR_CHRONULUS_API_KEY>"
      }
    }
  }
}
```

Note, if you get an error like "MCP chronulus-agents: spawn python ENOENT", 
then you most likely need to provide the absolute path to `python`. 
For example `/Library/Frameworks/Python.framework/Versions/3.11/bin/python3` instead of just `python`

</details>


<details>
<summary>Using docker</summary>

Here we will build a docker image called 'chronulus-mcp' that we can reuse in our Claude config.

```bash 
git clone https://github.com/ChronulusAI/chronulus-mcp.git
cd chronulus-mcp
 docker build . -t 'chronulus-mcp'
```

In your Claude config, be sure that the final argument matches the name you give to the docker image in the build command.

```json 
{
  "mcpServers": {
    "chronulus-agents": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "-e", "CHRONULUS_API_KEY", "chronulus-mcp"],
      "env": {
        "CHRONULUS_API_KEY": "<YOUR_CHRONULUS_API_KEY>"
      }
    }
  }
}
```

</details>

<details>
<summary>Using uvx</summary>

`uvx` will pull the latest version of `chronulus-mcp` from the PyPI registry, install it, and then run it.


```json 
{
  "mcpServers": {
    "chronulus-agents": {
      "command": "uvx",
      "args": ["chronulus-mcp"],
      "env": {
        "CHRONULUS_API_KEY": "<YOUR_CHRONULUS_API_KEY>"
      }
    }
  }
}
```

Note, if you get an error like "MCP chronulus-agents: spawn uvx ENOENT", then you most likely need to either:
1. [install uv](https://docs.astral.sh/uv/getting-started/installation/) or
2. Provide the absolute path to `uvx`. For example `/Users/username/.local/bin/uvx` instead of just `uvx`

</details>

#### Additional Servers (Filesystem, Fetch, etc)

In our demo, we use third-party servers like [fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) and [filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem).

For details on installing and configure third-party server, please reference the documentation provided by the server maintainer.

Below is an example of how to configure filesystem and fetch alongside Chronulus in your `claude_desktop_config.json`: 

```json 
{
  "mcpServers": {
    "chronulus-agents": {
      "command": "uvx",
      "args": ["chronulus-mcp"],
      "env": {
        "CHRONULUS_API_KEY": "<YOUR_CHRONULUS_API_KEY>"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/AIWorkspace"
      ]
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
} 
```


#### Claude Preferences

To streamline your experience using Claude across multiple sets of tools, it is best to add your preferences to under Claude Settings. 

You can upgrade your Claude preferences in a couple ways:

* From Claude Desktop: `Settings -> General -> Claude Settings -> Profile (tab)`
* From [claude.ai/settings](https://claude.ai/settings): `Profile (tab)`

Preferences are shared across both Claude for Desktop and Claude.ai (the web interface). So your instruction need to work across both experiences.

Below are the preferences we used to achieve the results shown in our demos:

```
## Tools-Dependent Protocols
The following instructions apply only when tools/MCP Servers are accessible.

### Filesystem - Tool Instructions
- Do not use 'read_file' or 'read_multiple_files' on binary files (e.g., images, pdfs, docx) .
- When working with binary files (e.g., images, pdfs, docx) use 'get_info' instead of 'read_*' tools to inspect a file.

### Chronulus Agents - Tool Instructions
- When using Chronulus, prefer to use input field types like TextFromFile, PdfFromFile, and ImageFromFile over scanning the files directly.
- When plotting forecasts from Chronulus, always include the Chronulus-provided forecast explanation below the plot and label it as Chronulus Explanation.
```
