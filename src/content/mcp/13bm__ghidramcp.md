---
name: "13bm/GhidraMCP"
description: "MCP server for integrating Ghidra with AI assistants. This plugin enables binary analysis, providing tools for function inspection, decompilation, memory exploration, and import/export analysis via the Model Context Protocol."
description_tr: "Ghidra'yı AI asistanlarıyla entegre eden MCP sunucusu. Bu plugin, Model Context Protocol üzerinden function incelemesi, decompilation, bellek analizi ve import/export analizi gibi araçlar sunarak binary analiz yapabilmenizi sağlar."
category: "Security"
repo: "13bm/GhidraMCP"
stars: 115
url: "https://github.com/13bm/GhidraMCP"
body_length: 14588
license: "Apache-2.0"
language: "Java"
body_tr: |-
  # GhidraMCP

  [![Build](https://github.com/13bm/GhidraMCP/actions/workflows/build.yml/badge.svg)](https://github.com/13bm/GhidraMCP/actions/workflows/build.yml)
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

  Ghidra'yı [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) aracılığıyla 70 adet ters-mühendislik aracını AI asistanlarına sunan bir Ghidra uzantısı. Bir binary dosyasını Ghidra'da açın, eklentiyi etkinleştirin ve Claude'u (veya herhangi bir MCP istemcisini) fonksiyonları decompile etme, sembolleri yeniden adlandırma, kodu açıklama ekleme, güvenlik açıklarını arama ve daha fazlasını yapmasına izin verin.

  ## Mimari

  ```
   AI Client (Claude Desktop / CLI)
          |  stdio + MCP JSON-RPC
          v
     Go MCP Bridge  (mcp_bridge)
          |  TCP, length-prefixed JSON-RPC
          v
     Ghidra Plugin  (MCPServerPlugin)
          |
          v
     Ghidra Program API
  ```

  **Ghidra eklentisi** (Java), Ghidra içinde bir TCP sunucusu başlatır ve **Go bridge** binary dosyasını otomatik olarak başlatır. Bridge, AI istemcisine MCP üzerinden JSON-RPC iletişimi kurar ve çağrıları 4 baytlık uzunluk ön ekli JSON-RPC çerçevelemesiyle yerel bir TCP soketine iletir. İsteğe bağlı API anahtarı kimlik doğrulaması TCP kanalını korur.

  ## Özellikler

  - **70 MCP aracı** -- query, mutation, analiz, malware triage, IoT/embedded güvenlik, yapı yönetimi, async decompilation ve çoklu örnek desteği kapsamında
  - **Kolay kurulum** -- eklenti bridge'i otomatik olarak başlatır; MCP istemcinizi yapılandırmak için **MCP > Settings > Write to Claude Config** kullanın
  - **Platformlar arası** -- Linux x86_64, Windows x86_64, macOS x86_64 ve macOS ARM64 için önceden derlenmiş bridge binary dosyaları
  - **Yapılandırılabilir** -- port, localhost-only binding, API-key auth, auto-start, bridge enable/disable özellikleri `GhidraMCP.properties` aracılığıyla
  - **Çoklu örnek** -- `target_port` kullanarak tool çağrılarını yönlendirmek için aynı anda birden fazla Ghidra penceresinde çalışın
  - **Async decompilation** -- büyük fonksiyonları engelleme olmadan decompile edin; sonuçları daha sonra poll'layın
  - **Bağlantı yeniden deneme** -- Ghidra yeniden başlarsa veya bağlantı koparsA bridge otomatik olarak yeniden bağlanır
  - **Pagination** -- büyük sonuç kümeleri (functions, strings, imports, ...) güvenli artımlı alma için `offset`/`limit` desteği
  - **CI/CD** -- otomatik derlemeler, Go + Java testleri, Ghidra entegrasyon testleri ve yeni bir Ghidra versiyonu çıktığında otomatik release

  ## Hızlı Başlangıç

  ### Ön Koşullar

  - [Ghidra](https://ghidra-sre.org/) 12.0.3+
  - Java 21+
  - MCP uyumlu bir AI istemcisi ([Claude Desktop](https://claude.ai/download), [Claude Code](https://docs.anthropic.com/en/docs/claude-code), vb.)

  ### Kurulum

  1. En son release ZIP dosyasını [Releases](https://github.com/13bm/GhidraMCP/releases) sayfasından indirin
  2. Ghidra'da: **File > Install Extensions > "+" > ZIP dosyasını seçin**
  3. Ghidra'yı yeniden başlatın

  ### Etkinleştirme

  1. Bir proje ve bir program (binary) açın
  2. **File > Configure > GhidraMCP -- MCPServerPlugin'i işaretleyin**
  3. Eklenti TCP sunucusunu otomatik olarak başlatır (varsayılan `localhost:8765`) ve bridge'i başlatır

  Claude Desktop'ı yapılandırmak için **MCP > Settings** açın ve **Write to Claude Config**'e tıklayın. Diğer MCP istemcileri için **Copy to Clipboard**'a tıklayın ve bunu istemci yapılandırmanıza ekleyin:

  ```json
  {
    "mcpServers": {
      "ghidra": {
        "command": "/path/to/mcp_bridge",
        "args": ["--host", "localhost", "--port", "8765"]
      }
    }
  }
  ```

  Bir API anahtarı ayarladıysanız, `env` bloğuna ekleyin (eklenti bunu otomatik olarak yapar):

  ```json
  {
    "mcpServers": {
      "ghidra": {
        "command": "/path/to/mcp_bridge",
        "args": ["--host", "localhost", "--port", "8765"],
        "env": {
          "GHIDRA_API_KEY": "your-key-here"
        }
      }
    }
  }
  ```

  Ayrıca Ghidra'dan snippet'i alabilirsiniz: **MCP > Copy MCP Config** (panoya kopyalar).

  ## Araçlar

  > **Parametreler, türler ve örneklerle tam başvuru:** **[TOOLS.md](TOOLS.md)**

  Aşağıdaki tablolar hızlı bir genel bakış sunar. Detaylı parametre dokümantasyonu için [TOOLS.md](TOOLS.md) dosyasına bakın.

  ### Query (1-21)

  | Tool | Açıklama |
  |------|----------|
  | `list_functions` | Giriş noktaları, boyutları, dönüş türleriyle tüm fonksiyonları listeleyin |
  | `list_classes` | Tüm sınıfları / namespace'leri listeleyin |
  | `list_imports` | İçeri aktarılan sembolleri ve harici bağımlılıkları listeleyin |
  | `list_exports` | Dışarı aktarılan sembolleri listeleyin |
  | `list_namespaces` | Tüm namespace'leri listeleyin |
  | `list_data_items` | Tanımlı verileri listeleyin (globals, constants, arrays, structs) |
  | `list_strings` | İsteğe bağlı substring filtresine sahip string'leri listeleyin |
  | `search_functions_by_name` | Fonksiyonları ad substring'ine göre arayın |
  | `get_function_by_address` | Bir adresteki fonksiyon için detaylı info |
  | `get_current_address` | Ghidra'da şu anda seçili adres |
  | `get_current_function` | Cursor konumundaki fonksiyon |
  | `decompile_function` | Ada göre C pseudocode'e decompile edin |
  | `decompile_function_by_address` | Adrese göre C pseudocode'e decompile edin |
  | `disassemble_function` | Bir fonksiyon için ham assembly listesi |
  | `get_xrefs_to` | Bir adrese GELEN cross-references |
  | `get_xrefs_from` | Bir adresten GIDEN cross-references |
  | `get_function_xrefs` | Bir fonksiyon için tüm xrefs (callers + callees) |
  | `get_program_info` | Program metadatası (arch, compiler, format, vb.) |
  | `get_memory_map` | Segment izinleriyle bellek düzeni |
  | `get_variables` | Bir fonksiyon için parametreler ve locals |

  ### Mutation (22-38)

  | Tool | Açıklama |
  |------|----------|
  | `rename_function` | Bir fonksiyonu ada göre yeniden adlandırın |
  | `rename_function_by_address` | Bir fonksiyonu adrese göre yeniden adlandırın |
  | `rename_data` | Bir veri etiketini yeniden adlandırın |
  | `rename_variable` | Yerel bir değişkeni yeniden adlandırın |
  | `set_decompiler_comment` | Decompiler görünümü için yorum ayarlayın |
  | `set_disassembly_comment` | Assembly görünümü için yorum ayarlayın |
  | `set_function_prototype` | Tam fonksiyon prototype'ını ayarlayın |
  | `set_local_variable_type` | Bir değişkenin veri türünü değiştirin |
  | `set_bookmark` | Bir bookmark ekleyin |
  | `remove_bookmark` | Bir bookmark'i kaldırın |
  | `set_equate` | Bir scalar operand'a adlı sabit ayarlayın |
  | `create_structure` | Bir structure veri türü oluşturun |
  | `create_enum` | Bir enum veri türü oluşturun |
  | `apply_data_type` | Bir adrese veri türü uygulayın |
  | `set_namespace` | Bir fonksiyon için namespace veya class ayarlayın |
  | `set_calling_convention` | Bir fonksiyon için calling convention ayarlayın |
  | `set_image_base` | Image base adresini ayarlayın |
  | `set_memory_permissions` | Bellek bloku izinlerini değiştirin |

  ### Gelişmiş Analiz (39-45)

  | Tool | Açıklama |
  |------|----------|
  | `patch_bytes` | Bir adresteki ham byte'ları yamayın |
  | `get_basic_blocks` | Bir fonksiyon için basic block'ları alın |
  | `extract_api_call_sequences` | Güvenlik analizi için API çağrı dizilerini çıkartın |
  | `identify_user_input_sources` | Kullanıcı girdisi giriş noktalarını bulun |
  | `generate_call_graph` | Hiyerarşik call graph oluşturun |
  | `identify_crypto_patterns` | Crypto implementasyonlarını algılayın |
  | `find_obfuscated_strings` | Obfuscate edilmiş string'leri bulun |

  ### Malware Analizi (46-53)

  | Tool | Açıklama |
  |------|----------|
  | `search_bytes` | Byte pattern'leri arayın |
  | `emulate_function` | Bir fonksiyonu emüle edin |
  | `extract_iocs` | Compromise indicators'ı çıkartın |
  | `find_dynamic_api_resolution` | Dynamic API resolution'ını algılayın |
  | `detect_anti_analysis` | Anti-analysis tekniklerini algılayın |
  | `add_external_function` | Harici fonksiyon referansı ekleyin |
  | `get_pe_info` | PE header detayları |
  | `get_elf_info` | ELF header detayları |

  ### IoT / Embedded Güvenlik (54-59)

  | Tool | Açıklama |
  |------|----------|
  | `create_memory_block` | Bir bellek bloku oluşturun |
  | `detect_security_mitigations` | Binary güvenlik mitigasyonlarını algılayın |
  | `find_format_string_vulns` | Format-string vulnerabilities'lerini bulun |
  | `find_rop_gadgets` | ROP gadget'larını bulun |
  | `detect_control_flow_flattening` | Control-flow flattening'i algılayın |
  | `mark_code_coverage` | Kod coverage bölgelerini işaretleyin |

  ### Utility (60-62)

  | Tool | Açıklama |
  |------|----------|
  | `get_bookmarks` | Bookmark'leri listeleyin (isteğe bağlı adrese göre) |
  | `list_equates` | Tüm equate'leri listeleyin |
  | `ping` | Bağlantı sağlık kontrolü |

  ### Çoklu Örnek (63)

  | Tool | Açıklama |
  |------|----------|
  | `list_ghidra_instances` | 8765-8774 portlarını çalışan Ghidra örnekleri için tarayın |

  Tüm araçlar, çağrıları belirli bir Ghidra örneğine yönlendirmek için isteğe bağlı `target_port` parametresini kabul eder. Bu, ayrı Ghidra pencerelerinde açılan birden fazla binary dosyasıyla aynı anda çalışmanıza olanak tanır.

  ### Yapı Yönetimi (64-68)

  | Tool | Açıklama |
  |------|----------|
  | `get_structure` | Bir structure'ın tüm detaylarını alın (fields, offsets, types) |
  | `list_structures` | Tüm tanımlı structure'ları pagination ile listeleyin |
  | `edit_structure` | Bir structure'a field ekleyin, değiştirin, silin, değiştirin veya temizleyin |
  | `rename_structure` | Mevcut bir structure'ı yeniden adlandırın |
  | `delete_structure` | Bir structure veri türünü silin |

  ### Async Decompilation (69-70)

  | Tool | Açıklama |
  |------|----------|
  | `decompile_function_async` | Büyük bir fonksiyonun async decompilation'ını başlatın (task ID döndürür) |
  | `get_decompile_result` | Task ID'sine göre async decompilation sonucunu poll'layın |

  Async decompilation, decompile etmesi 30+ saniye alabilen büyük fonksiyonlar için faydalıdır. İstemci decompilation'ı başlatabilir, diğer işleri devam ettirebilir ve sonucu daha sonra poll'layabilir.

  ## Yapılandırma

  Eklenti ayarlarını Ghidra'nın kullanıcı ayarları dizininde `GhidraMCP.properties` dosyasında depolar:

  | Özellik | Varsayılan | Açıklama |
  |---------|-----------|---------|
  | `port` | `8765` | Java sunucusu için TCP portu |
  | `localhost_only` | `true` | Yalnızca localhost'a bağlanın |
  | `api_key` | *(boş)* | Bridge kimlik doğrulaması için paylaşılan gizli |
  | `auto_start` | `true` | Eklenti yüklendiğinde sunucuyu başlatın |
  | `bridge_enabled` | `true` | Go bridge binary dosyasını otomatik olarak başlatın |

  ### Ayarlar İletişim Kutusu

  Tüm özellikleri GUI aracılığıyla yapılandırmak için Ghidra menüsünde **MCP > Settings** açın. İletişim kutusu şunları içerir:

  - Port, localhost binding, API anahtarı, auto-start ve bridge enabled için düzenlenebilir alanlar
  - Kriptografik olarak rastgele 32 karakterli bir API anahtarı oluşturmak için **Generate** düğmesi
  - GhidraMCP'yi Claude Desktop'ın `claude_desktop_config.json` dosyasına birleştirmek için **Write to Claude Config** düğmesi
  - Manuel kurulum için MCP config JSON snippet'ini panoya kopyalamak üzere **Copy to Clipboard** düğmesi
  - API anahtarı olmadan uzaktan erişimi etkinleştirirseniz güvenlik uyarısı
  - Sunucu çalışırken kaydetmek istiyorsanız otomatik yeniden başlatma istemi

  Değişiklikler OK'a tıkladığınızda diske kaydedilir. Ayrıca özellikleri dosyasını iletişim kutusunda gösterilen yolda doğrudan düzenleyebilirsiniz.

  `auto_start` `false` ise, sunucuyu Ghidra menüsünden **MCP > Toggle Server** seçerek el ile başlatın.

  > **Not:** `bridge_enabled` ayarı, bridge binary dosyasında hata ayıklayan veya TCP'ye doğrudan konuşan özel bir MCP istemcisi olan geliştiriciler için ileri seviyelerde kullanılır. Çoğu kullanıcı bunu etkin tutmalıdır.

  ## Güvenlik

  Varsayılan olarak TCP sunucusu **yalnızca localhost'a** bağlanır ve **API anahtarı yoktur**, bu da yerel tek kullanıcılı kullanım için uygundur. Daha sıkı kurulumlar için:

  ### API Anahtarı Kimlik Doğrulaması

  1. **MCP > Settings** açın ve rastgele bir anahtar oluşturmak için **Generate**'ye tıklayın (veya kendi anahtarınızı yazın)
  2. Kaydetmek için OK'a tıklayın -- bridge, sonraki başlamada anahtarı otomatik olarak alır
  3. Bağlantıda, bridge diğer çağrılardan önce anahtarla bir `authenticate` isteği gönderir
  4. Sunucu kimlik doğrulama başarılı olana kadar tüm auth dışı istekleri reddeder
  5. **3 başarısız denemeden** sonra sunucu bağlantıyı sonlandırır

  API anahtarı bridge'e `GHIDRA_API_KEY` ortam değişkeni aracılığıyla iletilir (CLI flag'i olarak değil) ve işlem argüman listesinde sızıntıyı önlemek için. Bridge'i el ile çalıştırırken ortam değişkenini ayarlayın:

  ```bash
  # Linux/macOS
  export GHIDRA_API_KEY="your-key-here"
  ./mcp_bridge --host localhost --port 8765

  # Windows (PowerShell)
  $env:GHIDRA_API_KEY = "your-key-here"
  .\mcp_bridge.exe --host localhost --port 8765
  ```

  Bir API anahtarı ayarlandığında, Ayarlar iletişim kutusundaki **Write to Claude Config** ve **Copy to Clipboard** düğmeleri otomatik olarak anahtarı `env` bloğuna ekler.

  ### Localhost Binding

  `localhost_only=true` (varsayılan) ile sunucu yalnızca `127.0.0.1`'den bağlantıları kabul eder. Uzaktan erişime ihtiyacınız varsa `false` olarak ayarlayın (örn. headless sunucu üzerinde Ghidra), ancak **localhost'un ötesine port açarken her zaman bir API anahtarı kullanın**.

  ### Uzaktan / Headless Kurulum

  GhidraMCP, başka bir makinede çalışan AI istemcilerine hizmet verebilir. Bu, Ghidra bir headless analiz sunucusunda çalışırken AI istemcisi başka bir yerde çalışıyorsa faydalıdır.

  1. **MCP > Settings** açın
  2. Uzaktan bağlantıları kabul etmek için **Localhost Only**'nin işaretini kaldırın
  3. Bir API anahtarı oluşturmak için **Generate**'ye tıklayın (uzaktan erişim için her zaman birini kullanın)
  4. OK'a tıklayın ve sunucuyu yeniden başlatın

  Uzak makinede, MCP istemcisini Ghidra host'una işaret edecek şekilde yapılandırın:

  ```json
  {
    "mcpServers": {
      "ghidra": {
        "command": "/path/to/mcp_bridge",
        "args": ["--host", "ghidra-server.local", "--port", "8765"],
        "env": {
          "GHIDRA_API_KEY": "your-key-here"
        }
      }
    }
  }
  ```

  > **Uyarı:** Sunucuyu localhost'un ötesine açarken her zaman bir API anahtarı kullanın. Kimlik doğrulama olmadan, porta ulaşabilen herkesA Ghidra API'sine tam erişime sahiptir.

  ## Kaynaktan Derleme

  ```bash
  git clone https://github.com/13bm/GhidraMCP.git
  cd GhidraMCP
  ```

  ### Go bridge'i derleyin

  ```bash
  cd mcp-bridge
  go build -o mcp_bridge .
  cd ..
  ```

  ### Ghidra uzantısını derleyin

  ```bash
  export GHIDRA_INSTALL_DIR=/path/to/ghidra
  gradle buildExtension
  ```

  Uzantı ZIP dosyası `dist/` dizininde olacaktır.

  ### Testleri çalıştırın

  ```bash
  # Go testleri
  cd mcp-bridge && go test ./... -v && cd ..

  # Java unit + integration testleri (headless Linux'ta Xvfb gereklidir)
  xvfb-run gradle test -PGHIDRA_INSTALL_DIR=$GHIDRA_INSTALL_DIR
  ```

  ## CI/CD

  Proje, otomatik derlemeler ve release'ler için GitHub Actions'ı kullanır:

  - **`build.yml`** -- `master` branch'e push/PR ve tag'ler üzerinde tetiklenir. Go testlerini çalıştırır, bridge'i 4 platform için çapraz derler, Xvfb altında Java unit + Ghidra entegrasyon testlerini çalıştırır, uzantı ZIP'ini derler ve `v*` tag'lerinde GitHub Releases oluşturur.
  - **`check-ghidra-release.yml`** -- Günlük çalışır. Yeni Ghidra release'lerini algılar, bir version-bump PR açar, GitHub App aracılığıyla otomatik olarak onaylar ve tüm testler geçerse otomatik olarak birleştirir.

  ## Katkıda Bulunma

  Katkılar hoş karşılanır! Lütfen issue açın veya pull request gönderin.

  1. Repository'yi fork'layın
  2. Bir feature branch oluşturun: `git checkout -b feature/my-feature`
  3. Değişikliklerinizi commit'leyin
  4. Push'layın ve Pull Request açın

  ## Lisans

  [Apache License 2.0](LICENSE)

  ## Teşekkürler

  - [NSA / Ghidra](https://github.com/NationalSecurityAgency/ghidra)
  - [Model Context Protocol](https://modelcontextprotocol.io/)
  - [mcp-go](https://github.com/mark3labs/mcp-go) -- Go MCP SDK

  ---

  *GhidraMCP, NSA veya Ghidra projesiyle bağlantılı değildir ve onaylanmamıştır.*
---

# GhidraMCP

[![Build](https://github.com/13bm/GhidraMCP/actions/workflows/build.yml/badge.svg)](https://github.com/13bm/GhidraMCP/actions/workflows/build.yml)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

A Ghidra extension that exposes 70 reverse-engineering tools to AI assistants through the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/). Open a binary in Ghidra, enable the plugin, and let Claude (or any MCP client) decompile functions, rename symbols, annotate code, search for vulnerabilities, and more.

## Architecture

```
 AI Client (Claude Desktop / CLI)
        |  stdio + MCP JSON-RPC
        v
   Go MCP Bridge  (mcp_bridge)
        |  TCP, length-prefixed JSON-RPC
        v
   Ghidra Plugin  (MCPServerPlugin)
        |
        v
   Ghidra Program API
```

The **Ghidra plugin** (Java) starts a TCP server inside Ghidra and auto-launches the **Go bridge** binary. The bridge speaks MCP over stdio to the AI client and forwards calls to the Java plugin over a local TCP socket with 4-byte length-prefixed JSON-RPC framing. Optional API-key authentication protects the TCP channel.

## Features

- **70 MCP tools** spanning query, mutation, analysis, malware triage, IoT/embedded security, structure management, async decompilation, and multi-instance support
- **Easy setup** -- plugin auto-starts the bridge; use **MCP > Settings > Write to Claude Config** to configure your MCP client
- **Cross-platform** -- prebuilt bridge binaries for Linux x86_64, Windows x86_64, macOS x86_64 and macOS ARM64
- **Configurable** -- port, localhost-only binding, API-key auth, auto-start, bridge enable/disable via `GhidraMCP.properties`
- **Multi-instance** -- work with multiple Ghidra windows simultaneously using `target_port` to route tool calls
- **Async decompilation** -- decompile large functions without blocking; poll for results later
- **Connection retry** -- the bridge reconnects automatically if Ghidra restarts or the connection drops
- **Pagination** -- large result sets (functions, strings, imports, ...) support `offset`/`limit` for safe incremental retrieval
- **CI/CD** -- automated builds, Go + Java tests, Ghidra integration tests, and auto-release when a new Ghidra version drops

## Quick Start

### Prerequisites

- [Ghidra](https://ghidra-sre.org/) 12.0.3+
- Java 21+
- An MCP-compatible AI client ([Claude Desktop](https://claude.ai/download), [Claude Code](https://docs.anthropic.com/en/docs/claude-code), etc.)

### Install

1. Download the latest release ZIP from [Releases](https://github.com/13bm/GhidraMCP/releases)
2. In Ghidra: **File > Install Extensions > "+" > select the ZIP**
3. Restart Ghidra

### Enable

1. Open a project and a program (binary)
2. **File > Configure > GhidraMCP -- check MCPServerPlugin**
3. The plugin auto-starts the TCP server (default `localhost:8765`) and launches the bridge

To configure Claude Desktop, open **MCP > Settings** and click **Write to Claude Config**. For other MCP clients, click **Copy to Clipboard** and add this to your client config:

```json
{
  "mcpServers": {
    "ghidra": {
      "command": "/path/to/mcp_bridge",
      "args": ["--host", "localhost", "--port", "8765"]
    }
  }
}
```

If you have an API key set, include it in the `env` block (the plugin does this automatically):

```json
{
  "mcpServers": {
    "ghidra": {
      "command": "/path/to/mcp_bridge",
      "args": ["--host", "localhost", "--port", "8765"],
      "env": {
        "GHIDRA_API_KEY": "your-key-here"
      }
    }
  }
}
```

You can also grab the snippet from Ghidra: **MCP > Copy MCP Config** (copies it to your clipboard).

## Tools

> **Full reference with parameters, types, and examples:** **[TOOLS.md](TOOLS.md)**

The tables below give a quick overview. See [TOOLS.md](TOOLS.md) for detailed parameter docs.

### Query (1-21)

| Tool | Description |
|------|-------------|
| `list_functions` | List all functions with entry points, sizes, return types |
| `list_classes` | List all classes / namespaces |
| `list_imports` | List imported symbols and external dependencies |
| `list_exports` | List exported symbols |
| `list_namespaces` | List all namespaces |
| `list_data_items` | List defined data (globals, constants, arrays, structs) |
| `list_strings` | List strings with optional substring filter |
| `search_functions_by_name` | Search functions by name substring |
| `get_function_by_address` | Detailed info for a function at an address |
| `get_current_address` | Address currently selected in Ghidra |
| `get_current_function` | Function at the current cursor position |
| `decompile_function` | Decompile by name to C pseudocode |
| `decompile_function_by_address` | Decompile by address to C pseudocode |
| `disassemble_function` | Raw disassembly listing for a function |
| `get_xrefs_to` | Cross-references TO an address |
| `get_xrefs_from` | Cross-references FROM an address |
| `get_function_xrefs` | All xrefs (callers + callees) for a function |
| `get_program_info` | Program metadata (arch, compiler, format, etc.) |
| `get_memory_map` | Memory layout with segment permissions |
| `get_variables` | Parameters and locals for a function |

### Mutation (22-38)

| Tool | Description |
|------|-------------|
| `rename_function` | Rename a function by name |
| `rename_function_by_address` | Rename a function by address |
| `rename_data` | Rename a data label |
| `rename_variable` | Rename a local variable |
| `set_decompiler_comment` | Set a decompiler-view comment |
| `set_disassembly_comment` | Set a disassembly-view comment |
| `set_function_prototype` | Set full function prototype |
| `set_local_variable_type` | Change a variable's data type |
| `set_bookmark` | Add a bookmark |
| `remove_bookmark` | Remove a bookmark |
| `set_equate` | Set a named constant on a scalar operand |
| `create_structure` | Create a structure data type |
| `create_enum` | Create an enum data type |
| `apply_data_type` | Apply a data type at an address |
| `set_namespace` | Set namespace or class for a function |
| `set_calling_convention` | Set calling convention for a function |
| `set_image_base` | Set the image base address |
| `set_memory_permissions` | Modify memory block permissions |

### Advanced Analysis (39-45)

| Tool | Description |
|------|-------------|
| `patch_bytes` | Patch raw bytes at an address |
| `get_basic_blocks` | Get basic blocks for a function |
| `extract_api_call_sequences` | Extract API call sequences for security analysis |
| `identify_user_input_sources` | Find user-input entry points |
| `generate_call_graph` | Hierarchical call graph |
| `identify_crypto_patterns` | Detect crypto implementations |
| `find_obfuscated_strings` | Locate obfuscated strings |

### Malware Analysis (46-53)

| Tool | Description |
|------|-------------|
| `search_bytes` | Search for byte patterns |
| `emulate_function` | Emulate a function |
| `extract_iocs` | Extract indicators of compromise |
| `find_dynamic_api_resolution` | Detect dynamic API resolution |
| `detect_anti_analysis` | Detect anti-analysis techniques |
| `add_external_function` | Add an external function reference |
| `get_pe_info` | PE header details |
| `get_elf_info` | ELF header details |

### IoT / Embedded Security (54-59)

| Tool | Description |
|------|-------------|
| `create_memory_block` | Create a memory block |
| `detect_security_mitigations` | Detect binary security mitigations |
| `find_format_string_vulns` | Find format-string vulnerabilities |
| `find_rop_gadgets` | Find ROP gadgets |
| `detect_control_flow_flattening` | Detect control-flow flattening |
| `mark_code_coverage` | Mark code coverage regions |

### Utility (60-62)

| Tool | Description |
|------|-------------|
| `get_bookmarks` | List bookmarks (optionally by address) |
| `list_equates` | List all equates |
| `ping` | Health-check the connection |

### Multi-Instance (63)

| Tool | Description |
|------|-------------|
| `list_ghidra_instances` | Scan ports 8765-8774 for running Ghidra instances |

All tools accept an optional `target_port` parameter to route calls to a specific Ghidra instance. This lets you work with multiple binaries open in separate Ghidra windows simultaneously.

### Structure Management (64-68)

| Tool | Description |
|------|-------------|
| `get_structure` | Get full details of a structure (fields, offsets, types) |
| `list_structures` | List all defined structures with pagination |
| `edit_structure` | Add, insert, delete, replace, or clear fields in a structure |
| `rename_structure` | Rename an existing structure |
| `delete_structure` | Delete a structure data type |

### Async Decompilation (69-70)

| Tool | Description |
|------|-------------|
| `decompile_function_async` | Start async decompilation of a large function (returns task ID) |
| `get_decompile_result` | Poll for an async decompilation result by task ID |

Async decompilation is useful for large functions that may take 30+ seconds to decompile. The client can start the decompilation, continue other work, and poll for the result later.

## Configuration

The plugin stores settings in `GhidraMCP.properties` inside Ghidra's user settings directory:

| Property | Default | Description |
|----------|---------|-------------|
| `port` | `8765` | TCP port for the Java server |
| `localhost_only` | `true` | Bind to localhost only |
| `api_key` | *(empty)* | Shared secret for bridge authentication |
| `auto_start` | `true` | Start the server when the plugin loads |
| `bridge_enabled` | `true` | Auto-launch the Go bridge binary |

### Settings Dialog

Open **MCP > Settings** in the Ghidra menu to configure all properties through a GUI. The dialog includes:

- Editable fields for port, localhost binding, API key, auto-start, and bridge enabled
- **Generate** button to create a cryptographically random 32-character API key
- **Write to Claude Config** button to merge GhidraMCP into Claude Desktop's `claude_desktop_config.json`
- **Copy to Clipboard** button to copy the MCP config JSON snippet for manual setup
- Security warning if you enable remote access without an API key
- Auto-restart prompt if the server is running when you save

Changes are saved to disk when you click OK. You can also edit the properties file directly at the path shown in the dialog.

If `auto_start` is `false`, start the server manually from **MCP > Toggle Server** in the Ghidra menu.

> **Note:** The `bridge_enabled` setting is for advanced use cases — developers debugging the bridge binary or users with a custom MCP client that talks TCP directly to the Java server. Most users should leave it enabled.

## Security

By default the TCP server binds to **localhost only** and has **no API key**, which is fine for local single-user use. For stricter setups:

### API-Key Authentication

1. Open **MCP > Settings** and click **Generate** to create a random key (or type your own)
2. Click OK to save — the bridge picks up the key automatically on next start
3. On connect, the bridge sends an `authenticate` request with the key before any other calls
4. The server rejects all non-auth requests until authentication succeeds
5. After **3 failed attempts** the server terminates the connection

The API key is passed to the bridge via the `GHIDRA_API_KEY` environment variable (not as a CLI flag) to prevent leaking it in the process argument list. When running the bridge manually, set the environment variable:

```bash
# Linux/macOS
export GHIDRA_API_KEY="your-key-here"
./mcp_bridge --host localhost --port 8765

# Windows (PowerShell)
$env:GHIDRA_API_KEY = "your-key-here"
.\mcp_bridge.exe --host localhost --port 8765
```

When an API key is set, the **Write to Claude Config** and **Copy to Clipboard** buttons in the Settings dialog include the key in the `env` block automatically.

### Localhost Binding

With `localhost_only=true` (default), the server only accepts connections from `127.0.0.1`. Set to `false` if you need remote access (e.g., Ghidra on a headless server), but **always use an API key** when exposing the port beyond localhost.

### Remote / Headless Setup

GhidraMCP can serve AI clients running on a different machine. This is useful when Ghidra runs on a headless analysis server while the AI client runs elsewhere.

1. Open **MCP > Settings**
2. Uncheck **Localhost Only** to accept remote connections
3. Click **Generate** to create an API key (always use one for remote access)
4. Click OK and restart the server

On the remote machine, configure the MCP client to point at the Ghidra host:

```json
{
  "mcpServers": {
    "ghidra": {
      "command": "/path/to/mcp_bridge",
      "args": ["--host", "ghidra-server.local", "--port", "8765"],
      "env": {
        "GHIDRA_API_KEY": "your-key-here"
      }
    }
  }
}
```

> **Warning:** Always use an API key when exposing the server beyond localhost. Without authentication, anyone who can reach the port has full access to the Ghidra API.

## Building from Source

```bash
git clone https://github.com/13bm/GhidraMCP.git
cd GhidraMCP
```

### Build the Go bridge

```bash
cd mcp-bridge
go build -o mcp_bridge .
cd ..
```

### Build the Ghidra extension

```bash
export GHIDRA_INSTALL_DIR=/path/to/ghidra
gradle buildExtension
```

The extension ZIP will be in `dist/`.

### Run tests

```bash
# Go tests
cd mcp-bridge && go test ./... -v && cd ..

# Java unit + integration tests (requires Xvfb on headless Linux)
xvfb-run gradle test -PGHIDRA_INSTALL_DIR=$GHIDRA_INSTALL_DIR
```

## CI/CD

The project uses GitHub Actions for automated builds and releases:

- **`build.yml`** -- Triggered on push/PR to `master` and on tags. Runs Go tests, cross-compiles the bridge for 4 platforms, runs Java unit + Ghidra integration tests under Xvfb, builds the extension ZIP, and creates GitHub Releases on `v*` tags.
- **`check-ghidra-release.yml`** -- Runs daily. Detects new Ghidra releases, opens a version-bump PR, auto-approves via GitHub App, and auto-merges if all tests pass.

## Contributing

Contributions welcome! Please open issues or submit pull requests.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes
4. Push and open a Pull Request

## License

[Apache License 2.0](LICENSE)

## Acknowledgments

- [NSA / Ghidra](https://github.com/NationalSecurityAgency/ghidra)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [mcp-go](https://github.com/mark3labs/mcp-go) -- Go MCP SDK

---

*GhidraMCP is not affiliated with or endorsed by the NSA or the Ghidra project.*
