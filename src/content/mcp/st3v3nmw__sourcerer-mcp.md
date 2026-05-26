---
name: "st3v3nmw/sourcerer-mcp"
description: "MCP for semantic code search & navigation that reduces token waste"
description_tr: "Semantic kod arama ve navigasyonu sağlayan, token tüketimini azaltan MCP"
category: "Developer Tools"
repo: "st3v3nmw/sourcerer-mcp"
stars: 114
url: "https://github.com/st3v3nmw/sourcerer-mcp"
body_length: 3144
license: "MIT"
language: "Go"
body_tr: |-
  # Sourcerer MCP 🧙

  Anlamsal kod araması ve navigasyonu için bir MCP sunucusu. AI ajanlarının pahalı token kullanmadan etkili bir şekilde çalışmasına yardımcı olur.
  Tüm dosyaları okumak yerine, ajanlar kavramsal olarak arama yapabilir ve doğrudan ihtiyaç duydukları belirli fonksiyonlara, sınıflara ve kod parçalarına atlayabilir.

  ## Demo

  [![asciicast](https://asciinema.org/a/736638.svg)](https://asciinema.org/a/736638)

  ## Gereksinimler

  - **OpenAI API Key**: Embeddings oluşturmak için gerekli (yerel embedding desteği planlıyor)
  - **Git**: Bir git repository olması gerekir (`.gitignore` dosyalarını dikkate alır)
  - **`.sourcerer/` klasörünü `.gitignore`'a ekleyin**: Bu dizin gömülü vektör veritabanını depolar

  ## Kurulum

  ### Go

  ```shell
  go install github.com/st3v3nmw/sourcerer-mcp/cmd/sourcerer@latest
  ```

  ### Homebrew

  ```shell
  brew tap st3v3nmw/tap
  brew install st3v3nmw/tap/sourcerer
  ```

  ## Yapılandırma

  ### Claude Code

  ```shell
  claude mcp add sourcerer -e OPENAI_API_KEY=your-openai-api-key -e SOURCERER_WORKSPACE_ROOT=$(pwd) -- sourcerer
  ```

  ### mcp.json

  ```json
  {
    "mcpServers": {
      "sourcerer": {
        "command": "sourcerer",
        "env": {
          "OPENAI_API_KEY": "your-openai-api-key",
          "SOURCERER_WORKSPACE_ROOT": "/path/to/your/project"
        }
      }
    }
  }
  ```

  ## Nasıl Çalışır

  Sourcerer 🧙 codebase'inizin anlamsal arama indeksini oluşturur:

  ### 1. Kod Ayrıştırması & Parçalanması

  - Kaynak dosyaları AST'lere ayrıştırmak için [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) kullanır
  - Anlamlı parçaları (fonksiyonlar, sınıflar, metodlar, türler) stabil ID'lerle çıkarır
  - Her parça kaynak kodu, konum bilgisi ve bağlamsal özetler içerir
  - Parça ID'leri şu formatı izler: `file.ext::Type::method`

  ### 2. Dosya Sistemi Entegrasyonu

  - `fsnotify` kullanarak dosya değişikliklerini izler
  - `git check-ignore` aracılığıyla `.gitignore` dosyalarını dikkate alır
  - Değiştirilen dosyaları otomatik olarak yeniden indeksler
  - Değişim zamanlarını izlemek için metadata depolar

  ### 3. Vektör Veritabanı

  - `.sourcerer/db/` dizininde kalıcı vektör depolaması için [chromem-go](https://github.com/philippgille/chromem-go) kullanır
  - OpenAI API aracılığıyla anlamsal benzerlik için embeddings oluşturur
  - Sadece metin eşleştirmesinden ziyade kavramsal aramayı etkinleştirir
  - Parçaları, bunların embeddings'lerini ve metadata'yı korur

  ### 4. MCP Tools

  - `semantic_search`: Anlamsal arama kullanarak ilgili kodu bul
  - `get_chunk_code`: ID'ye göre belirli parçaları al
  - `find_similar_chunks`: Benzer parçaları bul
  - `index_workspace`: Yeniden indekslemeyi manuel olarak tetikle
  - `get_index_status`: İndeksleme ilerlemesini kontrol et

  Bu yaklaşım, AI ajanlarının tüm dosyaları okumadan ilgili kodu bulmasını sağlar,
  token kullanımını ve bilişsel yükü önemli ölçüde azaltır.

  ## Desteklenen Diller

  Dil desteği, her bir dil için fonksiyonları, sınıfları, arayüzleri ve diğer kod yapılarını tanımlamak üzere [Tree-sitter sorguları](https://github.com/st3v3nmw/sourcerer-mcp/blob/main/internal/parser/go.go) yazmayı gerektirir.

  **Desteklenen:** Go, JavaScript, Markdown, Python, TypeScript

  **Planlı:** C, C++, Java, Ruby, Rust ve diğerleri

  ## Katkıda Bulunma

  Tüm katkılar memnuniyetle karşılanır! Bkz. [CONTRIBUTING.md](CONTRIBUTING.md).

  ```
  $ ls @stephenmwangi.com
  - gh:st3v3nmw/obsidian-spaced-repetition
  - gh:st3v3nmw/lsfr
  ```
---

# Sourcerer MCP 🧙

An MCP server for semantic code search & navigation that helps AI agents work
efficiently without burning through costly tokens.
Instead of reading entire files, agents can search conceptually and
jump directly to the specific functions, classes, and code chunks they need.

## Demo

[![asciicast](https://asciinema.org/a/736638.svg)](https://asciinema.org/a/736638)

## Requirements

- **OpenAI API Key**: Required for generating embeddings (local embedding support planned)
- **Git**: Must be a git repository (respects `.gitignore` files)
- **Add `.sourcerer/` to `.gitignore`**: This directory stores the embedded vector database

## Installation

### Go

```shell
go install github.com/st3v3nmw/sourcerer-mcp/cmd/sourcerer@latest
```

### Homebrew

```shell
brew tap st3v3nmw/tap
brew install st3v3nmw/tap/sourcerer
```

## Configuration

### Claude Code

```shell
claude mcp add sourcerer -e OPENAI_API_KEY=your-openai-api-key -e SOURCERER_WORKSPACE_ROOT=$(pwd) -- sourcerer
```

### mcp.json

```json
{
  "mcpServers": {
    "sourcerer": {
      "command": "sourcerer",
      "env": {
        "OPENAI_API_KEY": "your-openai-api-key",
        "SOURCERER_WORKSPACE_ROOT": "/path/to/your/project"
      }
    }
  }
}
```

## How it Works

Sourcerer 🧙 builds a semantic search index of your codebase:

### 1. Code Parsing & Chunking

- Uses [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) to parse source files into ASTs
- Extracts meaningful chunks (functions, classes, methods, types) with stable IDs
- Each chunk includes source code, location info, and contextual summaries
- Chunk IDs follow the format: `file.ext::Type::method`

### 2. File System Integration

- Watches for file changes using `fsnotify`
- Respects `.gitignore` files via `git check-ignore`
- Automatically re-indexes changed files
- Stores metadata to track modification times

### 3. Vector Database

- Uses [chromem-go](https://github.com/philippgille/chromem-go) for persistent vector storage in `.sourcerer/db/`
- Generates embeddings via OpenAI's API for semantic similarity
- Enables conceptual search rather than just text matching
- Maintains chunks, their embeddings, and metadata

### 4. MCP Tools

- `semantic_search`: Find relevant code using semantic search
- `get_chunk_code`: Retrieve specific chunks by ID
- `find_similar_chunks`: Find similar chunks
- `index_workspace`: Manually trigger re-indexing
- `get_index_status`: Check indexing progress

This approach allows AI agents to find relevant code without reading entire files,
dramatically reducing token usage and cognitive load.

## Supported Languages

Language support requires writing [Tree-sitter queries](https://github.com/st3v3nmw/sourcerer-mcp/blob/main/internal/parser/go.go) to
identify functions, classes, interfaces, and other code structures for each language.

**Supported:** Go, JavaScript, Markdown, Python, TypeScript

**Planned:** C, C++, Java, Ruby, Rust, and others

## Contributing

All contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

```
$ ls @stephenmwangi.com
- gh:st3v3nmw/obsidian-spaced-repetition
- gh:st3v3nmw/lsfr
```
