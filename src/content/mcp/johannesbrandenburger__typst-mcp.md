---
name: "johannesbrandenburger/typst-mcp"
description: "MCP server for Typst, a markup-based typesetting system. It provides tools for converting between LaTeX and Typst, validating Typst syntax, and generating images from Typst code."
category: "Other Tools and Integrations"
repo: "johannesbrandenburger/typst-mcp"
stars: 156
url: "https://github.com/johannesbrandenburger/typst-mcp"
body_length: 6877
license: "MIT"
language: "Python"
body_tr: |-
  # Typst MCP Server

  Typst MCP Server, AI modellerinin [Typst](https://github.com/typst/typst) ile etkileşim kurmasına yardımcı olan bir [MCP (Model Context Protocol)](https://github.com/modelcontextprotocol) uygulamasıdır. Typst, markup tabanlı bir dizgi sistemidir. Server, LaTeX ve Typst arasında dönüştürme, Typst söz dizimi doğrulama ve Typst kodundan görüntü oluşturma için araçlar sağlar.

  ## Kullanılabilir Araçlar

  >⚠️ Şu anda tüm işlevsellik `tools` olarak uygulanmıştır, çünkü Cursor ve VS Code henüz diğer primitifleri işleyebilmektedir.

  Server aşağıdaki araçları sağlar:

  1. **`list_docs_chapters()`**: Typst dokumentasyonundaki tüm bölümleri listeler.
     - LLM'nin dokumentasyona genel bakış almasını ve okuyacağı bir bölüm seçmesini sağlar.
     - LLM, eldeki göreve bağlı olarak ilgili bölümü seçmelidir.

  2. **`get_docs_chapter(route)`**: Typst dokumentasyonundan belirli bir bölümü alır.
     - LLM tarafından seçilen bölüme bağlı olarak, bu araç bölümün içeriğini alır.
     - Ayrıca bir seferde birden fazla bölümü almak için `get_docs_chapters(routes: list)` olarak da kullanılabilir.

  3. **`latex_snippet_to_typst(latex_snippet)`**: LaTeX kodunu Pandoc kullanarak Typst'e dönüştürür.
     - LLM'ler Typst'ten daha iyi LaTeX yazabilir, bu nedenle bu araç LaTeX kodunu Typst'e dönüştürmeye yardımcı olur.
     - Ayrıca bir seferde birden fazla LaTeX snippet'ini dönüştürmek için `latex_snippets_to_typst(latex_snippets: list)` olarak da kullanılabilir.

  4. **`check_if_snippet_is_valid_typst_syntax(typst_snippet)`**: Typst kodunu doğrular.
     - Typst kodunu kullanıcıya göndermeden önce, LLM kodun geçerli olup olmadığını kontrol etmelidir.
     - Ayrıca birden fazla Typst snippet'ini doğrulamak için `check_if_snippets_are_valid_typst_syntax(typst_snippets: list)` olarak da kullanılabilir.

  5. **`typst_to_image(typst_snippet)`**: Typst kodunu PNG görüntüsüne işler.
     - Karmaşık Typst çizimleri kullanıcıya göndermeden önce, LLM kodu bir görüntüye işlemeli ve doğru görünüp görünmediğini kontrol etmelidir.
     - Yalnızca çok modlu modeller için ilgilidir.

  ## Başlangıç

  - Bu deposunu klonlayın
    - `git clone https://github.com/johannesbrandenburger/typst-mcp.git`
  - [Typst deposunu](https://github.com/typst/typst.git) klonlayın
    - `git clone https://github.com/typst/typst.git`
  - Typst deposunda docs oluşturmayı çalıştırın
    - `cargo run --package typst-docs -- --assets-dir ../typst-mcp/typst-docs --out-file ../typst-mcp/typst-docs/main.json`
      - Typst-mcp deposunun yerel klonavı ile yolu ayarladığınızdan emin olun
      - Bu, `main.json` ve varlıkları `typst-docs` klasöründe oluşturacaktır
  - Gerekli bağımlılıkları yükleyin: `uv sync` ([uv](https://github.com/astral-sh/uv)'yu henüz yüklemediyseniz yükleyin)
    
  - Typst'i yükleyin

  ## Server'ı Çalıştırma

  ### Yerel Kurulum

  Server scriptini çalıştırın:

  ```bash
  python server.py
  ```

  Veya Claude Desktop'a MCP ile yükleyin:

  ```bash
  mcp install server.py
  ```

  Veya VS Code'daki yeni agent modunu kullanın:

  [Agent mode: tüm kullanıcılara açık ve MCP'yi destekler](https://code.visualstudio.com/blogs/2025/04/07/agentMode)

  ### Docker

  Docker kurulumu ve kullanımı için, ayrıntılı derleme bilgileri ve talimatlar için [DOCKER.md](DOCKER.md) dosyasına bakın.

  ## Platform Konfigürasyonu

  Bu MCP server'ı çeşitli AI kodlama platformlarıyla entegre edebilirsiniz. Aşağıda popüler platformlar için konfigürasyon talimatları yer almaktadır:

  ### Claude Desktop

  Claude Desktop konfigürasyon dosyanıza (`claude_desktop_config.json`) aşağıdakileri ekleyin:

  **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`  
  **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

  ```json
  {
    "mcpServers": {
      "typst": {
        "command": "docker",
        "args": [
          "run", "--rm", "-i",
          "ghcr.io/johannesbrandenburger/typst-mcp:latest"
        ]
      }
    }
  }
  ```

  Veya yerel kurulum için:

  ```json
  {
    "mcpServers": {
      "typst": {
        "command": "docker",
        "args": [
          "run", "--rm", "-i",
          "ghcr.io/johannesbrandenburger/typst-mcp:latest"
        ]
      }
    }
  }
  ```

  ### Cursor

  Projeye özel konfigürasyon için proje kökünüzde `.cursor/mcp.json` dosyası oluşturun:

  ```json
  {
    "mcpServers": {
      "typst": {
        "command": "docker",
        "args": [
          "run", "--rm", "-i",
          "ghcr.io/johannesbrandenburger/typst-mcp:latest"
        ]
      }
    }
  }
  ```

  Veya global konfigürasyon için `~/.cursor/mcp.json` dosyası oluşturun. Yerel kurulum için:

  ```json
  {
    "mcpServers": {
      "typst": {
        "command": "python",
        "args": ["/path/to/typst-mcp/server.py"]
      }
    }
  }
  ```

  ### Roo Code

  Projeye özel konfigürasyon için proje kökünüzde `.roo/mcp.json` dosyası oluşturun:

  ```json
  {
    "mcpServers": {
      "typst": {
        "command": "docker",
        "args": [
          "run", "--rm", "-i",
          "ghcr.io/johannesbrandenburger/typst-mcp:latest"
        ]
      }
    }
  }
  ```

  Veya Roo Code MCP ayarları görünümü aracılığıyla global ayarları düzenleyin. Yerel kurulum için:

  ```json
  {
    "mcpServers": {
      "typst": {
        "command": "python",
        "args": ["/path/to/typst-mcp/server.py"]
      }
    }
  }
  ```

  ### OpenCode

  Proje kökünüzde `opencode.json` dosyasını oluşturun veya düzenleyin:

  ```json
  {
    "$schema": "https://opencode.ai/config.json",
    "mcp": {
      "typst": {
        "type": "local",
        "command": ["docker", "run", "--rm", "-i", 
          "ghcr.io/johannesbrandenburger/typst-mcp:latest"
        ],
        "enabled": true
      }
    }
  }
  ```

  Yerel kurulum için:

  ```json
  {
    "$schema": "https://opencode.ai/config.json",
    "mcp": {
      "typst": {
        "type": "local",
        "command": ["python", "/path/to/typst-mcp/server.py"],
        "enabled": true
      }
    }
  }
  ```

  ### Claude Code

  MCP server'larını Claude Code ayarları dosyanızda (`~/.claude/settings.json`) yapılandırın:

  ```json
  {
    "mcpServers": {
      "typst": {
        "command": "docker",
        "args": [
          "run", "--rm", "-i",
          "ghcr.io/johannesbrandenburger/typst-mcp:latest"
        ]
      }
    }
  }
  ```

  Veya yerel kurulum için:

  ```json
  {
    "mcpServers": {
      "typst": {
        "command": "python",
        "args": ["/path/to/typst-mcp/server.py"]
      }
    }
  }
  ```

  ### VS Code Agent Mode

  VS Code'un Agent Mode'u yerel MCP desteğine sahiptir (eklenti gerekli değil):

  1. VS Code ayarlarında Agent Mode'u etkinleştirin (`chat.agent.enabled`)
  2. Çalışma alanınızda `.vscode/mcp.json` dosyası oluşturun:

  ```json
  {
    "servers": {
      "typst": {
        "command": "docker",
        "args": [
          "run", "--rm", "-i",
          "ghcr.io/johannesbrandenburger/typst-mcp:latest"
        ]
      }
    }
  }
  ```

  Global konfigürasyon için, **MCP: Open User Configuration** komutu aracılığıyla kullanıcı profilinize ekleyin.

  ## Typst Dokumentasyonunun JSON Schema'sı

  >⚠️ Typst dokumentasyonunun şeması kararlı değildir ve herhangi bir zamanda değişebilir. Şema, Typst kaynak kodundan oluşturulur ve tam veya doğru olması garantili değildir. Şema değişirse, bu depo güncellenmesi gerekir, böylece docs işlevselliği yeniden çalışır.
---

# Typst MCP Server

Typst MCP Server is an [MCP (Model Context Protocol)](https://github.com/modelcontextprotocol) implementation that helps AI models interact with [Typst](https://github.com/typst/typst), a markup-based typesetting system. The server provides tools for converting between LaTeX and Typst, validating Typst syntax, and generating images from Typst code.

## Available Tools

>⚠️ Currently all the functionality is implemented as `tools`, because Cursor and VS Code are not able to handle the other primitives yet.

The server provides the following tools:

1. **`list_docs_chapters()`**: Lists all chapters in the Typst documentation.
   - Lets the LLM get an overview of the documentation and select a chapter to read.
   - The LLM should select the relevant chapter to read based on the task at hand.

2. **`get_docs_chapter(route)`**: Retrieves a specific chapter from the Typst documentation.
   - Based on the chapter selected by the LLM, this tool retrieves the content of the chapter.
   - Also available as `get_docs_chapters(routes: list)` for retrieving multiple chapters at once.

3. **`latex_snippet_to_typst(latex_snippet)`**: Converts LaTeX code to Typst using Pandoc.
   - LLMs are better at writing LaTeX than Typst, so this tool helps convert LaTeX code to Typst.
   - Also available as `latex_snippets_to_typst(latex_snippets: list)` for converting multiple LaTeX snippets at once.

4. **`check_if_snippet_is_valid_typst_syntax(typst_snippet)`**: Validates Typst code.
   - Before sending Typst code to the user, the LLM should check if the code is valid.
   - Also available as `check_if_snippets_are_valid_typst_syntax(typst_snippets: list)` for validating multiple Typst snippets at once.

5. **`typst_to_image(typst_snippet)`**: Renders Typst code to a PNG image.
   - Before sending complex Typst illustrations to the user, the LLM should render the code to an image and check if it looks correct.
   - Only relevant for multi modal models.

## Getting Started

- Clone this repository
  - `git clone https://github.com/johannesbrandenburger/typst-mcp.git`
- Clone the [typst repository](https://github.com/typst/typst.git)
  - `git clone https://github.com/typst/typst.git`
- Run the docs generation in the typst repository
  - `cargo run --package typst-docs -- --assets-dir ../typst-mcp/typst-docs --out-file ../typst-mcp/typst-docs/main.json`
    - Make sure to adjust the path to your local clone of the typst-mcp repository
    - This will generate the `main.json` and the assets in the `typst-docs` folder
- Install required dependencies: `uv sync` (install [uv](https://github.com/astral-sh/uv) if not already installed)
  
- Install Typst

## Running the Server

### Local Installation

Execute the server script:

```bash
python server.py
```

Or install it in Claude Desktop with MCP:

```bash
mcp install server.py
```

Or use the new agent mode in VS Code:

[Agent mode: available to all users and supports MCP](https://code.visualstudio.com/blogs/2025/04/07/agentMode)

### Docker

For Docker installation and usage, see [DOCKER.md](DOCKER.md) for detailed build information and instructions.

## Platform Configuration

This MCP server can be integrated with various AI coding platforms. Below are configuration instructions for popular platforms:

### Claude Desktop

Add the following to your Claude Desktop configuration file (`claude_desktop_config.json`):

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "typst": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "ghcr.io/johannesbrandenburger/typst-mcp:latest"
      ]
    }
  }
}
```

Or for local installation:

```json
{
  "mcpServers": {
    "typst": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "ghcr.io/johannesbrandenburger/typst-mcp:latest"
      ]
    }
  }
}
```

### Cursor

Create `.cursor/mcp.json` in your project root for project-specific configuration:

```json
{
  "mcpServers": {
    "typst": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "ghcr.io/johannesbrandenburger/typst-mcp:latest"
      ]
    }
  }
}
```

Or create `~/.cursor/mcp.json` for global configuration. For local installation:

```json
{
  "mcpServers": {
    "typst": {
      "command": "python",
      "args": ["/path/to/typst-mcp/server.py"]
    }
  }
}
```

### Roo Code

Create `.roo/mcp.json` in your project root for project-specific configuration:

```json
{
  "mcpServers": {
    "typst": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "ghcr.io/johannesbrandenburger/typst-mcp:latest"
      ]
    }
  }
}
```

Or edit global settings via Roo Code MCP settings view. For local installation:

```json
{
  "mcpServers": {
    "typst": {
      "command": "python",
      "args": ["/path/to/typst-mcp/server.py"]
    }
  }
}
```

### OpenCode

Create or edit the `opencode.json` file in your project root:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "typst": {
      "type": "local",
      "command": ["docker", "run", "--rm", "-i", 
        "ghcr.io/johannesbrandenburger/typst-mcp:latest"
      ],
      "enabled": true
    }
  }
}
```

For local installation:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "typst": {
      "type": "local",
      "command": ["python", "/path/to/typst-mcp/server.py"],
      "enabled": true
    }
  }
}
```

### Claude Code

Configure MCP servers in your Claude Code settings file (`~/.claude/settings.json`):

```json
{
  "mcpServers": {
    "typst": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "ghcr.io/johannesbrandenburger/typst-mcp:latest"
      ]
    }
  }
}
```

Or for local installation:

```json
{
  "mcpServers": {
    "typst": {
      "command": "python",
      "args": ["/path/to/typst-mcp/server.py"]
    }
  }
}
```

### VS Code with Agent Mode

VS Code's Agent Mode has native MCP support (no extension required):

1. Enable Agent Mode in VS Code settings (`chat.agent.enabled`)
2. Create `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "typst": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "ghcr.io/johannesbrandenburger/typst-mcp:latest"
      ]
    }
  }
}
```

For global configuration, add to your user profile via **MCP: Open User Configuration** command.

## JSON Schema of the Typst Documentation

>⚠️ The schema of the typst documentation is not stable and may change at any time. The schema is generated from the typst source code and is not guaranteed to be complete or correct. If the schema changes, this repository will need to be updated accordingly, so that the docs functionality works again.
