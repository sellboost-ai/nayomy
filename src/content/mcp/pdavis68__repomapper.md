---
name: "pdavis68/RepoMapper"
description: "An MCP server (and command-line tool) to provide a dynamic map of chat-related files from the repository with their function prototypes and related files in order of relevance. Based on the \"Repo Map\" functionality in Aider.chat"
category: "Coding Agents"
repo: "pdavis68/RepoMapper"
stars: 172
url: "https://github.com/pdavis68/RepoMapper"
body_length: 9401
license: "MIT"
language: "Tree-sitter Query"
body_tr: |-
  # RepoMap - Komut Satırı Aracı ve MCP Sunucusu

  RepoMap, öncelikle LLM'lerin karmaşık kod tabanlarını anlamalarına ve gezinmelerine yardımcı olmak için tasarlanmış güçlü bir araçtır. Hem istek üzerine analiz için komut satırı uygulaması hem de MCP (Model Context Protocol) sunucusu olarak işlev görür ve diğer uygulamalara sürekli depo haritalama özellikleri sağlar. Yazılım deposunun bir "haritasını" oluşturarak RepoMap, önemli dosyaları, kod tanımlarını ve bunların ilişkilerini vurgular. Tree-sitter'ı doğru kod ayrıştırması için ve PageRank algoritmasını kod öğelerini önem açısından sıralamak için kullanır; böylece en ilgili bilgiler her zaman önceliklendirilebilir.

  <a href="https://glama.ai/mcp/servers/@pdavis68/RepoMapper">
    
  </a>

  ## İçindekiler
  - [Aider](#aider)
  - [Örnek Çıktı](#örnek-çıktı)
  - [Özellikler](#özellikler)
  - [Kurulum](#kurulum)
  - [Kullanım](#kullanım)
    - [Temel Kullanım](#temel-kullanım)
    - [Gelişmiş Seçenekler](#gelişmiş-seçenekler)
  - [Nasıl Çalışır](#nasıl-çalışır)
  - [Çıktı Formatı](#çıktı-formatı)
  - [Bağımlılıklar](#bağımlılıklar)
  - [Önbellekleme](#önbellekleme)
  - [Desteklenen Diller](#desteklenen-diller)
  - [Lisans](#lisans)
  - [MCP Sunucusu Olarak Çalıştırma](#mcp-sunucusu-olarak-çalıştırma)
    - [Kurulum](#kurulum-1)
    - [Kullanım](#kullanım-1)
  - [Değişim Günlüğü](#değişim-günlüğü)
  ----------

  ## Aider

  RepoMap, Aider'ın Repo map işlevselliğine %100 dayanmaktadır, ancak onunla herhangi bir kod paylaştığını düşünmüyorum. Bana izin verin açıklayım.

  Orijinal çabam, RepoMap sınıfını Aider'dan almak, aider'a özgü tüm bağımlılıkları kaldırmak ve ardından bunu komut satırı aracına dönüştürmekti. Python benim ana dilim değil ve bunu çalıştırmak için gerçekten zorlandım.

  Birkaç saat önce, farklı bir fikrim vardı. RepoMap'i ve bunun bazı ilişkili kodlarını aider'dan aldım ve bunları bir LLM'ye (Claude veya Gemini 2.5 Pro olduğunu hatırlayamıyorum) besleyerek temel olarak aider'ın uygulamasından bu için belirtimler oluşturmasını istedi. Dolayısıyla bu uygulamanın (MCP bitleri hariç) çok ayrıntılı bir belirtimini oluşturdu ve ardından bunu, Aider with Claude 3.7 ile besleyerek komut satırı sürümünü oluşturdu.

  Daha sonra Aider w/Claude 3.7, Cline w/Gemini 2.5 Pro Preview & Gemini 2.5 Flash Preview ve Phind.com, Gemini.com, Claude.com, ChatGPT.com'un bir kombinasyonunu kullandım ve birkaç saat sonra, sonunda MCP sunucusunu halletim. Yine, Python'ın gerçekten benim ana dilim olmadığını unutmayın.

  ----------

  ## Örnek Çıktı

  ```
  > python repomap.py . --chat-files repomap_class.py
  Chat files: ['/mnt/programming/RepoMapper/repomap_class.py']
  repomap_class.py:
  (Rank value: 10.8111)

    36: CACHE_VERSION = 1
    39: TAGS_CACHE_DIR = os.path.join(os.getcwd(), f".repomap.tags.cache.v{CACHE_VERSION}")
    40: SQLITE_ERRORS = (sqlite3.OperationalError, sqlite3.DatabaseError)
    43: Tag = namedtuple("Tag", "rel_fname fname line name kind".split())
    46: class RepoMap:
    49:     def __init__(
    93:     def load_tags_cache(self):
   102:     def save_tags_cache(self):
   459:     def get_ranked_tags_map_uncached(
   483:         def try_tags(num_tags: int) -> Tuple[Optional[str], int]:
   512:     def get_repo_map(

  utils.py:
  (Rank value: 0.2297)

    18: Tag = namedtuple("Tag", "rel_fname fname line name kind".split())
    21: def count_tokens(text: str, model_name: str = "gpt-4") -> int:
    35: def read_text(filename: str, encoding: str = "utf-8", silent: bool = False) -> Optional[str]:

  importance.py:
  (Rank value: 0.1149)

     8: IMPORTANT_FILENAMES = {
    27: IMPORTANT_DIR_PATTERNS = {
    34: def is_important(rel_file_path: str) -> bool:
    56: def filter_important_files(file_paths: List[str]) -> List[str]:

      ...
      ...
      ...
  ```

  ----------

  ## Özellikler

  -   **Akıllı Kod Analizi**: Kaynak kodu ayrıştırmak ve function/class tanımlarını çıkarmak için Tree-sitter'ı kullanır
  -   **İlgililik Sıralaması**: Kod öğelerini önemine göre sıralamak için PageRank algoritmasını kullanır
  -   **Token-Farkında**: LLM bağlam pencerelerine uyacak şekilde token limitlerini dikkate alır
  -   **Önbellekleme**: Hızlı sonraki çalıştırmalar için kalıcı önbellekleme
  -   **Çok Dil**: Python, JavaScript, TypeScript, Java, C/C++, Go, Rust ve daha fazlasını destekler
  -   **Önemli Dosya Algılaması**: Otomatik olarak önemli dosyaları tanımlar ve önceliklendiriyor (README, requirements.txt, vb.)

  ----------

  ## Kurulum

  ```bash
  pip install -r requirements.txt
  ```

  ----------

  ## Kullanım

  ### Temel Kullanım

  ```bash
  # Geçerli dizini haritala
  python repomap.py .

  # Belirli dizini özel token limitiyle haritala
  python repomap.py src/ --map-tokens 2048

  # Belirli dosyaları haritala
  python repomap.py file1.py file2.py

  # Chat dosyalarını (daha yüksek öncelik) diğer dosyalara karşı belirt
  python repomap.py --chat-files main.py --other-files src/

  # Bahsedilen dosyaları ve tanımlayıcıları belirt
  python repomap.py --mentioned-files config.py --mentioned-idents "main_function"

  # Ayrıntılı çıktıyı etkinleştir
  python repomap.py . --verbose

  # Önbellekleri yenilemeyi zorla
  python repomap.py . --force-refresh

  # Token sayımı için modeli belirt
  python repomap.py . --model gpt-3.5-turbo

  # Maksimum bağlam penceresini ayarla
  python repomap.py . --max-context-window 8192

  # Page Rank 0 olan dosyaları hariç tut
  python repomap.py . --exclude-unranked
  ```

  Araç dosyaları şu sırayla önceliklendiriyor:

  1.  `--chat-files`: Bu dosyalar en yüksek önceliğe sahiptir, çünkü şu anda üzerinde çalıştığınız dosyalar olarak kabul edilir.
  2.  `--mentioned-files`: Bu dosyalar yüksek önceliğe sahiptir, çünkü geçerli bağlamda açıkça bahsedilir.
  3.  `--other-files`: Bu dosyalar en düşük önceliğe sahiptir ve ek bağlam sağlamak için kullanılır.

  ### Gelişmiş Seçenekler

  ```bash
  # Ayrıntılı çıktıyı etkinleştir
  python repomap.py . --verbose

  # Önbellekleri yenilemeyi zorla
  python repomap.py . --force-refresh

  # Token sayımı için modeli belirt
  python repomap.py . --model gpt-3.5-turbo

  # Maksimum bağlam penceresini ayarla
  python repomap.py . --max-context-window 8192

  # Page Rank 0 olan dosyaları hariç tut
  python repomap.py . --exclude-unranked

  # Daha yüksek öncelik için belirli dosya veya tanımlayıcıları bahset
  python repomap.py . --mentioned-files config.py --mentioned-idents "main_function"
  ```

  ----------

  ## Nasıl Çalışır

  1.  **Dosya Bulma**: Depoyu kaynak dosyaları arar
  2.  **Kod Ayrıştırması**: Kodu ayrıştırmak ve tanımları/referansları çıkarmak için Tree-sitter'ı kullanır
  3.  **Grafik Oluşturma**: Dosyaların düğüm olduğu ve sembol referanslarının kenar olduğu bir grafik oluşturur
  4.  **Sıralama**: Dosya ve sembolleri önemine göre sıralamak için PageRank algoritmasını uygular
  5.  **Token Optimizasyonu**: Token limitler içinde en önemli içeriğe uyması için ikili arama kullanır
  6.  **Çıktı Oluşturma**: Sonuçları okunabilir bir kod haritası olarak biçimlendirir

  ----------

  ## Çıktı Formatı

  Araç, kod tabanınızın yapılandırılmış bir görünümünü gösterir:

  -   Dosya yolları ve önemli kod bölümleri
  -   Function ve class tanımları
  -   Kod öğeleri arasındaki temel ilişkiler
  -   Gerçek kullanım ve referanslara göre önceliklendirilen

  ----------

  ## Bağımlılıklar

  -   `tiktoken`: Çeşitli LLM modelleri için token sayımı
  -   `networkx`: Grafik algoritmaları (PageRank)
  -   `diskcache`: Kalıcı önbellekleme
  -   `grep-ast`: Kod ayrıştırması için Tree-sitter entegrasyonu
  -   `tree-sitter`: Kod ayrıştırma çerçevesi
  -   `pygments`: Sözdizimi vurgulama ve sözcüksel analiz

  ----------

  ## Önbellekleme

  Araç, sonraki çalıştırmaları hızlandırmak için kalıcı önbellekleme kullanır:

  -   Önbellek dizini: `.repomap.tags.cache.v1/`
  -   Dosyalar değiştiğinde otomatik olarak geçersiz kılınır
  -   `--force-refresh` ile temizlenebilir

  ----------

  ## Desteklenen Diller

  Şu anda Tree-sitter gramer'ine sahip dilleri destekler:

  -   arduino
  -   chatito
  -   commonlisp
  -   cpp
  -   csharp
  -   c
  -   dart
  -   d
  -   elisp
  -   elixir
  -   elm
  -   gleam
  -   go
  -   javascript
  -   java
  -   lua
  -   ocaml_interface
  -   ocaml
  -   pony
  -   properties
  -   python
  -   racket
  -   r
  -   ruby
  -   rust
  -   solidity
  -   swift
  -   udev
  -   c_sharp
  -   hcl
  -   kotlin
  -   php
  -   ql
  -   scala

  ----------

  ## Lisans

  Bu uygulama, Aider projesinden RepoMap tasarımına dayanmaktadır.

  ----------

  ## MCP Sunucusu Olarak Çalıştırma

  RepoMap, diğer uygulamaların depo haritalama yeteneklerine erişmesine olanak tanıyarak bir MCP (Model Context Protocol) sunucusu olarak da çalıştırılabilir.

  ### Kurulum

  1. RepoMap MCP sunucusu iletişim için STDIO (standart giriş/çıkış) kullanır. Taşıma katmanı için ek yapılandırma gerekli değildir.
  2. RepoMap'i Cline (veya Roo gibi benzer araçlar) ile bir MCP sunucusu olarak ayarlamak için, Cline ayarları dosyanıza (örneğin `cline_mcp_settings.json`) aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
    "mcpServers": {
      "RepoMapper": {
        "disabled": false,
        "timeout": 60,
        "type": "stdio",
        "command": "/usr/bin/python3",
        "args": [
          "/absolute/path/to/repomap_server.py"
        ]
      }
    }
  }
  ```

  - `"/absolute/path/to/repomap_server.py"` yerine `repomap_server.py` dosyasının gerçek yolunu yazın.

  ### Kullanım

  1. `repomap_server.py` script'ini çalıştırın:

  ```bash
  python repomap_server.py
  ```

  2. Sunucu başlayacak ve STDIO üzerinden gelen istekleri dinleyecektir.
  3. Diğer uygulamalar daha sonra sunucu tarafından sağlanan `repo_map` aracını depo haritaları oluşturmak için kullanabilir. Haritamak istedikleri projeye mutlak yolu olarak `project_root` parametresini belirtmeleri gerekir.


  ## Değişim Günlüğü

  7/13/2025 - project.json bağımlılığı kaldırıldı. MCP sunucusu, LLM'nin dosya adları açısından çalışması için biraz daha kolay hale getirildi.
---

# RepoMap - Command-Line Tool and MCP Server

RepoMap is a powerful tool designed to help, primarily LLMs, understand and navigate complex codebases. It functions both as a command-line application for on-demand analysis and as an MCP (Model Context Protocol) server, providing continuous repository mapping capabilities to other applications. By generating a "map" of the software repository, RepoMap highlights important files, code definitions, and their relationships. It leverages Tree-sitter for accurate code parsing and the PageRank algorithm to rank code elements by importance, ensuring that the most relevant information is always prioritized.

<a href="https://glama.ai/mcp/servers/@pdavis68/RepoMapper">
  
</a>

## Table of Contents
- [Aider](#aider)
- [Example Output](#example-output)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Advanced Options](#advanced-options)
- [How It Works](#how-it-works)
- [Output Format](#output-format)
- [Dependencies](#dependencies)
- [Caching](#caching)
- [Supported Languages](#supported-languages)
- [License](#license)
- [Running as an MCP Server](#running-as-an-mcp-server)
  - [Setup](#setup)
  - [Usage](#usage-1)
- [Changelog](#changelog)
----------

## Aider

RepoMap is 100% based on Aider's Repo map functionality, but I don't believe it shares any code with it. Allow me to explain.

My original effort was to take the RepoMap class from Aider, remove all the aider-specific dependencies, and then make it into a command-line tool. Python isn't my native language and I really struggled to get it to work.

So a few hours ago, I had a different idea. I took the RepoMap and some of its related code from aider and I fed it to an LLM (Either Claude or Gemini 2.5 Pro, can't remember) and had it create specifications for this, basically, from aider's implementation. So it generated a very detailed specification for this application (minus the MCP bits) and then I fed that to, well, Aider with Claude 3.7, and it built the command-line version of this.

I then used a combination of Aider w/Claude 3.7, Cline w/Gemini 2.5 Pro Preview & Gemini 2.5 Flash Preview, and Phind.com, and Gemini.com and Claude.com and ChatGPT.com and after a few hours, I finally got the MCP server sorted out. Again, keeping in mind, Python isn't really my native tongue.

----------

## Example Output

```
> python repomap.py . --chat-files repomap_class.py
Chat files: ['/mnt/programming/RepoMapper/repomap_class.py']
repomap_class.py:
(Rank value: 10.8111)

  36: CACHE_VERSION = 1
  39: TAGS_CACHE_DIR = os.path.join(os.getcwd(), f".repomap.tags.cache.v{CACHE_VERSION}")
  40: SQLITE_ERRORS = (sqlite3.OperationalError, sqlite3.DatabaseError)
  43: Tag = namedtuple("Tag", "rel_fname fname line name kind".split())
  46: class RepoMap:
  49:     def __init__(
  93:     def load_tags_cache(self):
 102:     def save_tags_cache(self):
 459:     def get_ranked_tags_map_uncached(
 483:         def try_tags(num_tags: int) -> Tuple[Optional[str], int]:
 512:     def get_repo_map(

utils.py:
(Rank value: 0.2297)

  18: Tag = namedtuple("Tag", "rel_fname fname line name kind".split())
  21: def count_tokens(text: str, model_name: str = "gpt-4") -> int:
  35: def read_text(filename: str, encoding: str = "utf-8", silent: bool = False) -> Optional[str]:

importance.py:
(Rank value: 0.1149)

   8: IMPORTANT_FILENAMES = {
  27: IMPORTANT_DIR_PATTERNS = {
  34: def is_important(rel_file_path: str) -> bool:
  56: def filter_important_files(file_paths: List[str]) -> List[str]:

    ...
    ...
    ...
```

----------

## Features

-   **Smart Code Analysis**: Uses Tree-sitter to parse source code and extract function/class definitions
-   **Relevance Ranking**: Employs PageRank algorithm to rank code elements by importance
-   **Token-Aware**: Respects token limits to fit within LLM context windows
-   **Caching**: Persistent caching for fast subsequent runs
-   **Multi-Language**: Supports Python, JavaScript, TypeScript, Java, C/C++, Go, Rust, and more
-   **Important File Detection**: Automatically identifies and prioritizes important files (README, requirements.txt, etc.)

----------

## Installation

```bash
pip install -r requirements.txt
```

----------

## Usage

### Basic Usage

```bash
# Map current directory
python repomap.py .

# Map specific directory with custom token limit
python repomap.py src/ --map-tokens 2048

# Map specific files
python repomap.py file1.py file2.py

# Specify chat files (higher priority) vs other files
python repomap.py --chat-files main.py --other-files src/

# Specify mentioned files and identifiers
python repomap.py --mentioned-files config.py --mentioned-idents "main_function"

# Enable verbose output
python repomap.py . --verbose

# Force refresh of caches
python repomap.py . --force-refresh

# Specify model for token counting
python repomap.py . --model gpt-3.5-turbo

# Set maximum context window
python repomap.py . --max-context-window 8192

# Exclude files with Page Rank 0
python repomap.py . --exclude-unranked
```

The tool prioritizes files in the following order:

1.  `--chat-files`: These files are given the highest priority, as they're assumed to be the files you're currently working on.
2.  `--mentioned-files`: These files are given a high priority, as they're explicitly mentioned in the current context.
3.  `--other-files`: These files are given the lowest priority and are used to provide additional context.

### Advanced Options

```bash
# Enable verbose output
python repomap.py . --verbose

# Force refresh of caches
python repomap.py . --force-refresh

# Specify model for token counting
python repomap.py . --model gpt-3.5-turbo

# Set maximum context window
python repomap.py . --max-context-window 8192

# Exclude files with Page Rank 0
python repomap.py . --exclude-unranked

# Mention specific files or identifiers for higher priority
python repomap.py . --mentioned-files config.py --mentioned-idents "main_function"
```

----------

## How It Works

1.  **File Discovery**: Scans the repository for source files
2.  **Code Parsing**: Uses Tree-sitter to parse code and extract definitions/references
3.  **Graph Building**: Creates a graph where files are nodes and symbol references are edges
4.  **Ranking**: Applies PageRank algorithm to rank files and symbols by importance
5.  **Token Optimization**: Uses binary search to fit the most important content within token limits
6.  **Output Generation**: Formats the results as a readable code map

----------

## Output Format

The tool generates a structured view of your codebase showing:

-   File paths and important code sections
-   Function and class definitions
-   Key relationships between code elements
-   Prioritized based on actual usage and references

----------

## Dependencies

-   `tiktoken`: Token counting for various LLM models
-   `networkx`: Graph algorithms (PageRank)
-   `diskcache`: Persistent caching
-   `grep-ast`: Tree-sitter integration for code parsing
-   `tree-sitter`: Code parsing framework
-   `pygments`: Syntax highlighting and lexical analysis

----------

## Caching

The tool uses persistent caching to speed up subsequent runs:

-   Cache directory: `.repomap.tags.cache.v1/`
-   Automatically invalidated when files change
-   Can be cleared with `--force-refresh`

----------

## Supported Languages

Currently supports languages with Tree-sitter grammars:

-   arduino
-   chatito
-   commonlisp
-   cpp
-   csharp
-   c
-   dart
-   d
-   elisp
-   elixir
-   elm
-   gleam
-   go
-   javascript
-   java
-   lua
-   ocaml_interface
-   ocaml
-   pony
-   properties
-   python
-   racket
-   r
-   ruby
-   rust
-   solidity
-   swift
-   udev
-   c_sharp
-   hcl
-   kotlin
-   php
-   ql
-   scala

----------

## License

This implementation is based on the RepoMap design from the Aider project.

----------

## Running as an MCP Server

RepoMap can also be run as an MCP (Model Context Protocol) server, allowing other applications to access its repository mapping capabilities.

### Setup

1. The RepoMap MCP server uses STDIO (standard input/output) for communication. No additional configuration is required for the transport layer.
2. To set up RepoMap as an MCP server with Cline (or similar tools like Roo), add the following configuration to your Cline settings file (e.g., `cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "RepoMapper": {
      "disabled": false,
      "timeout": 60,
      "type": "stdio",
      "command": "/usr/bin/python3",
      "args": [
        "/absolute/path/to/repomap_server.py"
      ]
    }
  }
}
```

- Replace `"/absolute/path/to/repomap_server.py"` with the actual path to your `repomap_server.py` file.

### Usage

1. Run the `repomap_server.py` script:

```bash
python repomap_server.py
```

2. The server will start and listen for requests via STDIO.
3. Other applications can then use the `repo_map` tool provided by the server to generate repository maps. They must specify the `project_root` parameter as an absolute path to the project they want to map.


## Changelog

7/13/2025 - Removed the project.json dependency. Fixed the MCP server to be a little easier for the LLM to work with in terms of filenames.
