---
name: "juehang/vscode-mcp-server"
description: "A MCP Server that allows AI such as Claude to read from the directory structure in a VS Code workspace, see problems picked up by linter(s) and the language server, read code files, and make edits."
category: "Coding Agents"
repo: "juehang/vscode-mcp-server"
stars: 367
url: "https://github.com/juehang/vscode-mcp-server"
body_length: 12445
license: "MIT"
language: "TypeScript"
body_tr: |-
  # VS Code MCP Server

  Visual Studio Code uzantısı ([Marketplace](https://marketplace.visualstudio.com/items?itemName=JuehangQin.vscode-mcp-server)'de mevcuttur), Claude ve diğer MCP istemcilerinin VS Code'da doğrudan kod yazmasını sağlar! [Serena](https://github.com/oraios/serena)'dan esinlenmiş, ancak VS Code'un yerleşik yeteneklerini kullanır. Mevcut kodlama ajanlarını (Claude Code gibi) VS Code'a özgü yeteneklerle (sembol arama, belge ana hatları) genişletmek için idealdir; zaten sahip oldukları araçları tekrarlamadan. Bu uzantının streamable HTTP API'sini kullandığını, SSE API'sini değil.

  Bu uzantı kabuk komutlarının yürütülmesine izin verebilir. Bu, potansiyel bir güvenlik riski anlamına gelir, bu nedenle dikkat ile kullanın ve kullandığınız MCP istemcisine güvendiğinizden ve port'un herhangi bir şeye maruz kalmadığından emin olun. Kimlik doğrulama yardımcı olabilir, ancak MCP kimlik doğrulama spec'i hala değişim halinde olduğundan, şu an için bu uygulanmamıştır.

  PR'ler hoş geldiniz!

  ## Demo Videosu
  https://github.com/user-attachments/assets/20b87dfb-fc39-4710-a910-b9481dde1e90

  ## Kurulum

  1. Uzantıyı [Marketplace](https://marketplace.visualstudio.com/items?itemName=JuehangQin.vscode-mcp-server)'den yükleyin veya bu depoyu klonlayın ve `npm install` ve `npm run compile` komutlarını çalıştırarak derleyin.

  ## Claude Desktop Konfigürasyonu

  Claude Desktop, bu uzantıyı bir MCP sunucusu olarak kullanacak şekilde yapılandırılabilir. Bunu yapmak için `claude_desktop_config.json` dosyanız şu şekilde görünmelidir:
  ```
  {
    "mcpServers": {
      "vscode-mcp-server": {
          "command": "npx",
          "args": ["mcp-remote@next", "http://localhost:3000/mcp"]
      }

    }
  }
  ```

  Ayrıca bu uzantıyı bir Claude projesinde kullanmayı da seviyorum, çünkü Claude için ek talimatlar belirtmeme izin veriyor. Aşağıdaki prompt'un iyi çalıştığını buldum:
  ```
  You are working on an existing codebase, which you can access using your tools. These code tools interact with a VS Code workspace.

  WORKFLOW ESSENTIALS:
  1. Always start exploration with list_files_code on root directory (.) first
  2. CRITICAL: Run get_diagnostics_code after EVERY set of code changes before completing tasks
  3. For small edits (≤10 lines): use replace_lines_code with exact original content
  4. For large changes, new files, or uncertain content: use create_file_code with overwrite=true

  EXPLORATION STRATEGY:
  - Start: list_files_code with path='.' (never recursive on root)
  - Understand structure: read key files like package.json, README, main entry points
  - Find symbols: use search_symbols_code for functions/classes, get_document_symbols_code for file overviews
  - Before editing: read_file_code the target file to understand current content

  EDITING BEST PRACTICES:
  - Small modifications: replace_lines_code (requires exact original content match)
  - If replace_lines_code fails: read_file_code the target lines, then retry with correct content
  - Large changes: create_file_code with overwrite=true is more reliable
  - After any changes: get_diagnostics_code to check for errors

  PLANNING REQUIREMENTS:
  Before making code modifications, present a comprehensive plan including:
  - Confidence level (1-10) and reasoning
  - Specific tools you'll use and why
  - Files you'll modify and approach (small edits vs complete rewrites)
  - How you'll verify the changes work (diagnostics, testing, etc.)

  ERROR HANDLING:
  - Let errors happen naturally - don't add unnecessary try/catch blocks
  - For tool failures: follow the specific recovery guidance in each tool's description
  - If uncertain about file content: use read_file_code to verify before making changes

  APPROVAL PROCESS:
  IMPORTANT: Only run code modification tools after presenting a plan and receiving explicit approval. Each change requires separate approval.

  Do not add tests unless specifically requested. If you believe testing is important, explain why and let the user decide.
  ```

  Kod tabanlarını keşfederken bağlam verimliliği için bunu CLAUDE.md dosyanıza eklemeyi göz önünde bulundurun:
  ```
  ## VS Code Symbol Tools for Context Efficiency
  Use VS Code symbol tools to reduce context consumption:
  - `get_document_symbols_code` for file structure overview instead of reading entire files
  - `search_symbols_code` to find symbols by name across the project
  - `get_symbol_definition_code` for type info and docs without full file context
  - Workflow: get outline → search symbols → get definitions → read implementation only when needed
  ```



  Bu uzantı, bir Model Context Protocol (MCP) sunucusu olarak hizmet verir ve VS Code'un dosya sistemi ve düzenleme yeteneklerini MCP istemcilerine açığa çıkarır.

  ## Özellikler

  VS Code MCP Server uzantısı, yapay zeka modelleri ve diğer MCP istemcilerinin aşağıdakileri yapmasına olanak tanıyan MCP uyumlu bir sunucu uygular:

  - **Dosyaları ve dizinleri listele** VS Code çalışma alanınızda
  - **Dosya içeriğini oku** kodlama desteği ve boyut sınırlamaları ile
  - **Dosya ve dizinleri taşı** içe aktarımlar için uygun refactoring desteği ile
  - **Dosya ve dizinleri yeniden adlandır** otomatik referans güncellemeleri ile
  - **Dosyaları kopyala** yeni konumlara (sadece dosyalar, dizinler değil)
  - **Semboller için arama yap** çalışma alanınızda
  - **Sembol tanımlarını al** ve satır ve sembol adına göre hover bilgisi
  - **Yeni dosyalar oluştur** VS Code'un WorkspaceEdit API'sini kullanarak
  - **Satır değişiklikleri yap** dosyalarda
  - **Tanılamalar için kontrol et** (hatalar ve uyarılar) çalışma alanınızda
  - **Kabuk komutlarını yürüt** entegre terminalde kabuk entegrasyonu ile
  - **Sunucuyu aç ve kapat** durum çubuğu öğesi aracılığıyla

  Bu uzantı, yapay zeka asistanlarının ve diğer araçların standartlaştırılmış MCP protokolü aracılığıyla VS Code çalışma alanınızla etkileşim kurmasını sağlar.

  ## Nasıl Çalışır

  Uzantı, aşağıdakileri yapan bir MCP sunucusu oluşturur:

  1. Yapılandırılabilir bir port'ta (etkinleştirildiğinde) yerel olarak çalışır
  2. HTTP aracılığıyla MCP protokol isteklerini işler
  3. VS Code'un işlevselliğini MCP araçları olarak açığa çıkarır
  4. Sunucu durumunu gösteren ve sunucuyu aç/kapat için tıklanabilen bir durum çubuğu göstergesi sağlar

  ## Desteklenen MCP Araçları

  ### Dosya Araçları
  - **list_files_code**: Çalışma alanınızdaki dosyaları ve dizinleri listeler
    - Parametreler:
      - `path`: Dosyaları listelemek için yol
      - `recursive` (isteğe bağlı): Dosyaları özyinelemeli olarak listele

  - **read_file_code**: Dosya içeriğini okur
    - Parametreler:
      - `path`: Okunacak dosyanın yolu
      - `encoding` (isteğe bağlı): Dosya kodlaması (varsayılan: utf-8)
      - `maxCharacters` (isteğe bağlı): Maksimum karakter sayısı (varsayılan: 100.000)

  - **move_file_code**: Bir dosya veya dizini VS Code'un WorkspaceEdit API'sini kullanarak yeni bir konuma taşır
    - Parametreler:
      - `sourcePath`: Taşınacak dosya veya dizinin mevcut yolu
      - `targetPath`: Dosya veya dizinin taşınacağı yeni yol
      - `overwrite` (isteğe bağlı): Hedef zaten varsa üzerine yazılsın mı (varsayılan: false)

  - **rename_file_code**: Bir dosya veya dizini VS Code'un WorkspaceEdit API'sini kullanarak yeniden adlandırır
    - Parametreler:
      - `filePath`: Yeniden adlandırılacak dosya veya dizinin mevcut yolu
      - `newName`: Dosya veya dizinin yeni adı
      - `overwrite` (isteğe bağlı): Aynı ada sahip bir dosya zaten varsa üzerine yazılsın mı (varsayılan: false)

  - **copy_file_code**: Bir dosyayı VS Code'un dosya sistemi API'sini kullanarak yeni bir konuma kopyalar
    - Parametreler:
      - `sourcePath`: Kopyalanacak dosyanın yolu
      - `targetPath`: Kopyanın oluşturulacağı yol
      - `overwrite` (isteğe bağlı): Hedef zaten varsa üzerine yazılsın mı (varsayılan: false)

  ### Düzenleme Araçları
  - **create_file_code**: VS Code'un WorkspaceEdit API'sini kullanarak yeni bir dosya oluşturur
    - Parametreler:
      - `path`: Oluşturulacak dosyanın yolu
      - `content`: Dosyaya yazılacak içerik
      - `overwrite` (isteğe bağlı): Dosya zaten varsa üzerine yazılsın mı (varsayılan: false)
      - `ignoreIfExists` (isteğe bağlı): Dosya zaten varsa yok sayılsın mı (varsayılan: false)

  - **replace_lines_code**: Bir dosyadaki belirli satırları değiştirir
    - Parametreler:
      - `path`: Değiştirilecek dosyanın yolu
      - `startLine`: Başlangıç satırı numarası (1 tabanlı, kapsayıcı)
      - `endLine`: Bitiş satırı numarası (1 tabanlı, kapsayıcı)
      - `content`: Satırları değiştirecek yeni içerik
      - `originalCode`: Doğrulama için orijinal kod

  ### Tanılama Araçları
  - **get_diagnostics_code**: Çalışma alanınızda uyarıları ve hataları kontrol eder
    - Parametreler:
      - `path` (isteğe bağlı): Kontrol edilecek dosya yolu (sağlanmadığında tüm çalışma alanını kontrol eder)
      - `severities` (isteğe bağlı): Eklenecek önem seviyeleri dizisi (0=Hata, 1=Uyarı, 2=Bilgi, 3=İpucu). Varsayılan: [0, 1]
      - `format` (isteğe bağlı): Çıkış biçimi ('text' veya 'json'). Varsayılan: 'text'
      - `includeSource` (isteğe bağlı): Tanılama kaynağını ekle. Varsayılan: true

    Bu araç özellikle kullanışlıdır:
    - Kod kalitesi kontrolleri değişiklikleri commit etmeden önce
    - Düzeltmelerin tüm bildirilen sorunları çözdüğünü doğrulama
    - Belirli dosyalarda veya tüm çalışma alanında sorunları tanımlama

  ### Sembol Araçları
  - **search_symbols_code**: Çalışma alanında semboller arar
    - Parametreler:
      - `query`: Sembol adları için arama sorgusu
      - `maxResults` (isteğe bağlı): Döndürülecek maksimum sonuç sayısı (varsayılan: 10)
    
    Bu araç kullanışlıdır:
    - Kod tabanında sembol tanımlarını (işlevler, sınıflar, değişkenler, vb.) bulma
    - Proje yapısını ve organizasyonunu keşfetme
    - Belirli elemanları ada göre bulma

  - **get_symbol_definition_code**: Bir dosyadaki sembolün tanım bilgisini alır
    - Parametreler:
      - `path`: Sembolü içeren dosyanın yolu
      - `line`: Sembolün satır numarası
      - `symbol`: Belirtilen satırda aranacak sembol adı
    
    Bu araç sağlar:
    - Sembol türü bilgisi, belgesi ve kaynak detayları
    - Sembolün göründüğü satırı gösteren kod bağlamı
    - Sembol aralığı bilgisi
    
    Özellikle kullanışlıdır:
    - Sembolün ne temsil ettiğini başka bir yere gitmeden anlama
    - İşlev imzaları, tür tanımları veya belgeleri kontrol etme
    - API'ler veya kütüphane işlevleri için hızlı referans

  - **get_document_symbols_code**: Bir dosyadaki tüm semboller için ana hatlar alır, hiyerarşik yapıyı gösterir
    - Parametreler:
      - `path`: Analiz edilecek dosyanın yolu (çalışma alanına göre)
      - `maxDepth` (isteğe bağlı): Gösterilecek maksimum iç içe geçme derinliği
    
    Bu araç sağlar:
    - Bir belge için tam sembol ağacı (VS Code'un Outline görünümüne benzer)
    - Sınıfları, işlevleri, yöntemleri, değişkenleri, vb. gösteren hiyerarşik yapı
    - Her sembol için konum bilgisi ve sembol türleri
    - Sembol türüne göre özet istatistikleri
    
    Özellikle kullanışlıdır:
    - Dosya yapısını ve organizasyonunu bir bakışta anlama
    - Bir belgedeki tüm sembollere genel bakış elde etme
    - Kod mimarisini ve ilişkilerini analiz etme
    - Bir dosya içindeki belirli türdeki tüm sembolleri bulma

  ### Shell Araçları
  - **execute_shell_command_code**: VS Code entegre terminalinde kabuk entegrasyonu ile bir kabuk komutu yürütür
    - Parametreler:
      - `command`: Yürütülecek kabuk komutu
      - `cwd` (isteğe bağlı): Komut için isteğe bağlı çalışma dizini (varsayılan: '.')

    Bu araç kullanışlıdır:
    - CLI komutlarını ve derleme işlemlerini çalıştırma
    - Git komutlarını yürütme
    - Terminal erişimi gerektiren herhangi bir kabuk işlemi
    - Analiz ve daha fazla işlem için komut çıkışı alma

  ## Uyarılar/TODO

  Şu anda yalnızca bir çalışma alanı desteklenmektedir. Uzantı da sadece yerel olarak çalışır, VS Code örneğinizi bağlı olabileceğiniz herhangi bir ağa maruz bırakmaktan kaçınmak için.

  ## Uzantı Ayarları

  * `vscode-mcp-server.port`: MCP sunucusu için port numarası (varsayılan: 3000)
  * `vscode-mcp-server.host`: MCP sunucusu için host adresi (varsayılan: 127.0.0.1)
  * `vscode-mcp-server.defaultEnabled`: MCP sunucusu VS Code başlangıcında varsayılan olarak etkinleştirilsin mi
  * `vscode-mcp-server.enabledTools`: Hangi araç kategorilerinin etkinleştirildiğini yapılandırın (file, edit, shell, diagnostics, symbol)

  **Seçmeli Araç Konfigürasyonu**: Zaten belirli yeteneklere sahip kodlama ajanları için kullanışlıdır. Örneğin, Claude Code ile dosya/düzenleme araçlarını devre dışı bırakabilir ve araç çoğaltmasından kaçınmak için sadece VS Code'a özgü sembol araması eklemek için sembol araçlarını etkinleştirebilirsiniz.

  ## MCP İstemcileri ile Kullanma

  MCP istemcilerini bu sunucuya bağlanmak için yapılandırın:
  ```
  http://localhost:3000/mcp
  ```

  Veya özel bir host yapılandırdıysanız:
  ```
  http://[your-host]:3000/mcp
  ```

  Sunucuyu ilk olarak durum çubuğu öğesine tıklayarak etkinleştirmeniz gerektiğini unutmayın!

  ## Katkı Yapma

  Katkılar hoş geldiniz! Sorun bildir veya çekme istekleri gönder.

  ## Lisans

  [MIT](LICENSE)
---

# VS Code MCP Server

A Visual Studio Code extension (available on the [Marketplace](https://marketplace.visualstudio.com/items?itemName=JuehangQin.vscode-mcp-server)) that allows Claude and other MCP clients to code directly in VS Code! Inspired by [Serena](https://github.com/oraios/serena), but using VS Code's built-in capabilities. Perfect for extending existing coding agents like Claude Code with VS Code-specific capabilities (symbol search, document outlines) without duplicating tools they already have. Note that this extension uses the streamable HTTP API, not the SSE API.

This extension can allow for execution of shell commands. This means that there is a potential security risk, so use with caution, and ensure that you trust the MCP client that you are using and that the port is not exposed to anything. Authentication would help, but as the MCP authentication spec is still in flux, this has not been implemented for now.

PRs are welcome!

## Demo Video
https://github.com/user-attachments/assets/20b87dfb-fc39-4710-a910-b9481dde1e90

## Installation

1. Install the extension from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=JuehangQin.vscode-mcp-server) or clone this repository and run `npm install` and `npm run compile` to build it.

## Claude Desktop Configuration

Claude Desktop can be configured to use this extension as an MCP server. To do this, your `claude_desktop_config.json` file should look like this:
```
{
  "mcpServers": {
    "vscode-mcp-server": {
        "command": "npx",
        "args": ["mcp-remote@next", "http://localhost:3000/mcp"]
    }

  }
}
```

I also like to use this extension in a Claude project, as it allows me to specify additional instructions for Claude. I find the following prompt to work well:
```
You are working on an existing codebase, which you can access using your tools. These code tools interact with a VS Code workspace.

WORKFLOW ESSENTIALS:
1. Always start exploration with list_files_code on root directory (.) first
2. CRITICAL: Run get_diagnostics_code after EVERY set of code changes before completing tasks
3. For small edits (≤10 lines): use replace_lines_code with exact original content
4. For large changes, new files, or uncertain content: use create_file_code with overwrite=true

EXPLORATION STRATEGY:
- Start: list_files_code with path='.' (never recursive on root)
- Understand structure: read key files like package.json, README, main entry points
- Find symbols: use search_symbols_code for functions/classes, get_document_symbols_code for file overviews
- Before editing: read_file_code the target file to understand current content

EDITING BEST PRACTICES:
- Small modifications: replace_lines_code (requires exact original content match)
- If replace_lines_code fails: read_file_code the target lines, then retry with correct content
- Large changes: create_file_code with overwrite=true is more reliable
- After any changes: get_diagnostics_code to check for errors

PLANNING REQUIREMENTS:
Before making code modifications, present a comprehensive plan including:
- Confidence level (1-10) and reasoning
- Specific tools you'll use and why
- Files you'll modify and approach (small edits vs complete rewrites)
- How you'll verify the changes work (diagnostics, testing, etc.)

ERROR HANDLING:
- Let errors happen naturally - don't add unnecessary try/catch blocks
- For tool failures: follow the specific recovery guidance in each tool's description
- If uncertain about file content: use read_file_code to verify before making changes

APPROVAL PROCESS:
IMPORTANT: Only run code modification tools after presenting a plan and receiving explicit approval. Each change requires separate approval.

Do not add tests unless specifically requested. If you believe testing is important, explain why and let the user decide.
```

For context efficiency when exploring codebases, consider adding this to your CLAUDE.md:
```
## VS Code Symbol Tools for Context Efficiency
Use VS Code symbol tools to reduce context consumption:
- `get_document_symbols_code` for file structure overview instead of reading entire files
- `search_symbols_code` to find symbols by name across the project
- `get_symbol_definition_code` for type info and docs without full file context
- Workflow: get outline → search symbols → get definitions → read implementation only when needed
```



This extension serves as a Model Context Protocol (MCP) server, exposing VS Code's filesystem and editing capabilities to MCP clients.

## Features

The VS Code MCP Server extension implements an MCP-compliant server that allows AI models and other MCP clients to:

- **List files and directories** in your VS Code workspace
- **Read file contents** with encoding support and size limits
- **Move files and directories** with proper refactoring support for imports
- **Rename files and directories** with automatic reference updates
- **Copy files** to new locations (files only, not directories)
- **Search for symbols** across your workspace
- **Get symbol definitions** and hover information by line and symbol name
- **Create new files** using VS Code's WorkspaceEdit API
- **Make line replacements** in files
- **Check for diagnostics** (errors and warnings) in your workspace
- **Execute shell commands** in the integrated terminal with shell integration
- **Toggle the server** on and off via a status bar item

This extension enables AI assistants and other tools to interact with your VS Code workspace through the standardized MCP protocol.

## How It Works

The extension creates an MCP server that:

1. Runs locally on a configurable port (when enabled)
2. Handles MCP protocol requests via HTTP
3. Exposes VS Code's functionality as MCP tools
4. Provides a status bar indicator showing server status, which can be clicked to toggle the server on/off

## Supported MCP Tools

### File Tools
- **list_files_code**: Lists files and directories in your workspace
  - Parameters:
    - `path`: The path to list files from
    - `recursive` (optional): Whether to list files recursively

- **read_file_code**: Reads file contents
  - Parameters:
    - `path`: The path to the file to read
    - `encoding` (optional): File encoding (default: utf-8)
    - `maxCharacters` (optional): Maximum character count (default: 100,000)

- **move_file_code**: Moves a file or directory to a new location using VS Code's WorkspaceEdit API
  - Parameters:
    - `sourcePath`: The current path of the file or directory to move
    - `targetPath`: The new path where the file or directory should be moved to
    - `overwrite` (optional): Whether to overwrite if target already exists (default: false)

- **rename_file_code**: Renames a file or directory using VS Code's WorkspaceEdit API
  - Parameters:
    - `filePath`: The current path of the file or directory to rename
    - `newName`: The new name for the file or directory
    - `overwrite` (optional): Whether to overwrite if a file with the new name already exists (default: false)

- **copy_file_code**: Copies a file to a new location using VS Code's file system API
  - Parameters:
    - `sourcePath`: The path of the file to copy
    - `targetPath`: The path where the copy should be created
    - `overwrite` (optional): Whether to overwrite if target already exists (default: false)

### Edit Tools
- **create_file_code**: Creates a new file using VS Code's WorkspaceEdit API
  - Parameters:
    - `path`: The path to the file to create
    - `content`: The content to write to the file
    - `overwrite` (optional): Whether to overwrite if the file exists (default: false)
    - `ignoreIfExists` (optional): Whether to ignore if the file exists (default: false)

- **replace_lines_code**: Replaces specific lines in a file
  - Parameters:
    - `path`: The path to the file to modify
    - `startLine`: The start line number (1-based, inclusive)
    - `endLine`: The end line number (1-based, inclusive)
    - `content`: The new content to replace the lines with
    - `originalCode`: The original code for validation

### Diagnostics Tools
- **get_diagnostics_code**: Checks for warnings and errors in your workspace
  - Parameters:
    - `path` (optional): File path to check (if not provided, checks the entire workspace)
    - `severities` (optional): Array of severity levels to include (0=Error, 1=Warning, 2=Information, 3=Hint). Default: [0, 1]
    - `format` (optional): Output format ('text' or 'json'). Default: 'text'
    - `includeSource` (optional): Whether to include the diagnostic source. Default: true

  This tool is particularly useful for:
  - Code quality checks before committing changes
  - Verifying fixes resolved all reported issues
  - Identifying problems in specific files or the entire workspace

### Symbol Tools
- **search_symbols_code**: Searches for symbols across the workspace
  - Parameters:
    - `query`: The search query for symbol names
    - `maxResults` (optional): Maximum number of results to return (default: 10)
  
  This tool is useful for:
  - Finding definitions of symbols (functions, classes, variables, etc.) across the codebase
  - Exploring project structure and organization
  - Locating specific elements by name

- **get_symbol_definition_code**: Gets definition information for a symbol in a file
  - Parameters:
    - `path`: The path to the file containing the symbol
    - `line`: The line number of the symbol
    - `symbol`: The symbol name to look for on the specified line
  
  This tool provides:
  - Type information, documentation, and source details for symbols
  - Code context showing the line where the symbol appears
  - Symbol range information
  
  It's particularly useful for:
  - Understanding what a symbol represents without navigating away
  - Checking function signatures, type definitions, or documentation
  - Quick reference for APIs or library functions

- **get_document_symbols_code**: Gets an outline of all symbols in a file, showing the hierarchical structure
  - Parameters:
    - `path`: The path to the file to analyze (relative to workspace)
    - `maxDepth` (optional): Maximum nesting depth to display
  
  This tool provides:
  - Complete symbol tree for a document (similar to VS Code's Outline view)
  - Hierarchical structure showing classes, functions, methods, variables, etc.
  - Position information and symbol kinds for each symbol
  - Summary statistics by symbol type
  
  It's particularly useful for:
  - Understanding file structure and organization at a glance
  - Getting an overview of all symbols in a document
  - Analyzing code architecture and relationships
  - Finding all symbols of specific types within a file

### Shell Tools
- **execute_shell_command_code**: Executes a shell command in the VS Code integrated terminal with shell integration
  - Parameters:
    - `command`: The shell command to execute
    - `cwd` (optional): Optional working directory for the command (default: '.')

  This tool is useful for:
  - Running CLI commands and build operations
  - Executing git commands
  - Performing any shell operations that require terminal access
  - Getting command output for analysis and further processing

## Caveats/TODO

Currently, only one workspace is supported. The extension also only works locally, to avoid exposing your VS Code instance to any network you may be connected to.

## Extension Settings

* `vscode-mcp-server.port`: The port number for the MCP server (default: 3000)
* `vscode-mcp-server.host`: Host address for the MCP server (default: 127.0.0.1)
* `vscode-mcp-server.defaultEnabled`: Whether the MCP server should be enabled by default on VS Code startup
* `vscode-mcp-server.enabledTools`: Configure which tool categories are enabled (file, edit, shell, diagnostics, symbol)

**Selective Tool Configuration**: Useful for coding agents that already have certain capabilities. For example, with Claude Code you might disable file/edit tools and only enable symbol tools to add VS Code-specific symbol searching without tool duplication.

## Using with MCP Clients

To connect MCP clients to this server, configure them to use:
```
http://localhost:3000/mcp
```

Or if you've configured a custom host:
```
http://[your-host]:3000/mcp
```

Remember that you need to enable the server first by clicking on the status bar item!

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

[MIT](LICENSE)
