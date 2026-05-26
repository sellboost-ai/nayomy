---
name: "entanglr/zettelkasten-mcp"
description: "A Model Context Protocol (MCP) server that implements the Zettelkasten knowledge management methodology, allowing you to create, link, and search atomic notes through Claude and other MCP-compatible clients."
description_tr: "Claude ve diğer MCP uyumlu istemciler üzerinden atomik notlar oluşturmanıza, bağlamanıza ve aramanıza olanak tanıyan, Zettelkasten bilgi yönetimi metodolojisini uygulayan bir Model Context Protocol (MCP) sunucusu."
category: "Knowledge & Memory"
repo: "entanglr/zettelkasten-mcp"
stars: 153
url: "https://github.com/entanglr/zettelkasten-mcp"
body_length: 11598
license: "MIT"
language: "Python"
body_tr: |-
  # Zettelkasten MCP Server

  Zettelkasten bilgi yönetimi metodolojisini uygulayan bir Model Context Protocol (MCP) sunucusu. Claude ve diğer MCP uyumlu istemciler aracılığıyla atomik notlar oluşturmanızı, bağlantı kurmanızı, keşfetmenizi ve sentezlemenizi sağlar.

  ## Zettelkasten Nedir?

  Zettelkasten yöntemi, Alman sosyolog Niklas Luhmann tarafından geliştirilen bir bilgi yönetimi sistemidir. Luhmann bu sistemi kullanarak 70'ten fazla kitap ve yüzlerce makale üretmiştir. Üç temel prensipten oluşur:

  1. **Atomiklik**: Her not tam olarak bir fikir içerir ve bilginin ayrı bir birimi olarak işlev görür
  2. **Bağlantılılık**: Notlar birbirine bağlanarak bir bilgi ağı oluşturur ve fikirler arasında anlamlı ilişkiler kurulur
  3. **Ortaya Çıkış**: Ağ büyüdükçe, bireysel notlar oluşturulurken belirgin olmayan yeni desenler ve içgörüler ortaya çıkar

  Zettelkasten yaklaşımını güçlü kılan şey, birden fazla şekilde keşif yapma imkanı sunmasıdır:

  - **Dikey keşif**: Bir konu alanı içindeki bağlantıları takip ederek belirli konulara daha derin inin.
  - **Yatay keşif**: Etki alanları aşan bağlantıları takip ederek farklı alanlar arasında beklenmedik ilişkiler keşfedin.

  Bu yapı, nottan nota düşünce izlerini takip ederken serendipitous keşifler için zemin hazırlar ve aynı zamanda her bilgi parçasını benzersiz kimliği aracılığıyla kolayca erişilebilir tutar. Luhmann sistemini "ikinci beyin" veya "iletişim ortağı" olarak adlandırmıştır - bu dijital uygulama modern teknoloji aracılığıyla benzer faydalar sağlamayı amaçlar.

  ## Özellikler

  - Benzersiz zaman damgası tabanlı ID'lerle atomik notlar oluşturma
  - Bir bilgi grafiği oluşturmak için notları çift yönlü olarak bağlama
  - Kategorik organizasyon için notları etiketleme
  - İçerik, etiketler veya bağlantılara göre not arama
  - İnsan tarafından okunabilirlik ve düzenleme için markdown formatı kullanma
  - MCP aracılığıyla Claude ile entegrasyon için yapay zeka destekli bilgi yönetimi
  - Çift depolama mimarisi (aşağıya bakınız)
  - Basitleştirilmiş mimari için senkron işletim modeli

  ## Örnekler

  - Bilgi oluşturma: [Zettelkasten yöntemi hakkında küçük bir Zettelkasten bilgi ağı](https://github.com/entanglr/zettelkasten-mcp/discussions/5)

  ## Not Türleri

  Zettelkasten MCP sunucusu farklı not türlerini destekler:

  |Tür|İşleyici|Açıklama|
  |---|---|---|
  |**Geçici notlar**|`fleeting`|Fikirleri yakalamak için hızlı, geçici notlar|
  |**Literatür notları**|`literature`|Okuma materyalinden alınan notlar|
  |**Kalıcı notlar**|`permanent`|İyi formüle edilmiş, uzun ömürlü notlar|
  |**Yapı notları**|`structure`|Diğer notları organize eden indeks veya ana hat notları|
  |**Hub notları**|`hub`|Zettelkasten'e ana konularda giriş noktaları|

  ## Bağlantı Türleri

  Zettelkasten MCP sunucusu, notlar arasında anlamlı bağlantılar oluşturan kapsamlı bir semantik bağlama sistemi kullanır. Her bağlantı türü belirli bir ilişkiyi temsil eder ve zengin, çok boyutlu bir bilgi grafiği oluşturmaya olanak tanır.

  | Birincil Bağlantı Türü | Ters Bağlantı Türü | İlişki Açıklaması |
  |---|---|---|
  | `reference` | `reference` | Basit referans (simetrik ilişki) |
  | `extends` | `extended_by` | Bir not diğerinden kavramlar üzerine inşa eder veya geliştirir |
  | `refines` | `refined_by` | Bir not diğerini açıklığa kavuşturur veya iyileştirir |
  | `contradicts` | `contradicted_by` | Bir not diğerine karşıt görüşler sunar |
  | `questions` | `questioned_by` | Bir not diğeri hakkında sorular sorar |
  | `supports` | `supported_by` | Bir not diğerine kanıt sağlar |
  | `related` | `related` | Genel ilişki (simetrik ilişki) |

  ## İstemi (Prompting)

  Maksimum etkinlik için, LLM'ye bilgi işleme, Zettelkasten notlarınızı keşfetme veya sentezleme görevleri verirken bir sistem istemi ("proje talimatları"), proje bilgisi ve uygun bir sohbet istemi kullanmanızı öneriz. Bu havuzun `docs` dizini başlamanız için gerekli dosyaları içerir:

  ### Sistem istemi

  Birini seçin:

  - [system-prompt.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/system/system-prompt.md)
  - [system-prompt-with-protocol.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/system/system-prompt-with-protocol.md)

  ### Proje bilgisi

  Son kullanıcılar için:

  - [zettelkasten-methodology-technical.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/user/zettelkasten-methodology-technical.md)
  - [link-types-in-zettelkasten-mcp-server.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/user/link-types-in-zettelkasten-mcp-server.md)
  - (projenizle ilgili daha fazla bilgi)

  ### Sohbet İstemleri

  - [chat-prompt-knowledge-creation.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/chat/chat-prompt-knowledge-creation.md)
  - [chat-prompt-knowledge-creation-batch.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/chat/chat-prompt-knowledge-creation-batch.md)
  - [chat-prompt-knowledge-exploration.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/chat/chat-prompt-knowledge-exploration.md)
  - [chat-prompt-knowledge-synthesis.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/chat/chat-prompt-knowledge-synthesis.md)

  ### Proje bilgisi (geliştirici)

  Geliştirici ve katkıda bulunanlar için:

  - [Example - A simple MCP server.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/dev/Example%20-%20A%20simple%20MCP%20server%20that%20exposes%20a%20website%20fetching%20tool.md)
  - [MCP Python SDK-README.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/dev/MCP%20Python%20SDK-README.md)
  - [llms-full.txt](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/dev/llms-full.txt)

  NB: İsteğe bağlı olarak [repomix](https://github.com/yamadashy/repomix) gibi bir araçla kaynak kodu ekleyin.

  ## Depolama Mimarisi

  Bu sistem çift depolama yaklaşımı kullanır:

  1. **Markdown Dosyaları**: Tüm notlar, meta veriler için YAML ön materyali ile birlikte insan tarafından okunabilir Markdown dosyaları olarak depolanır. Bu dosyalar **doğru kaynaktır** ve şunlar yapılabilir:
     - Herhangi bir metin düzenleyicide doğrudan düzenlenme
     - Versiyon kontrolü altına alınma (Git, vb.)
     - Standart dosya yedekleme prosedürleri kullanılarak yedekleme
     - Diğer metin dosyaları gibi paylaşılma veya aktarılma

  2. **SQLite Veritabanı**: Şunları sağlayan bir indeksleme katmanı olarak işlev görür:
     - Verimli sorgulama ve arama işlemlerine olanak tanır
     - Claude'un bilgi grafiğini hızlı bir şekilde geçmesine olanak tanır
     - Bağlantı geçişini hızlandırmak için ilişki bilgilerini korur
     - Gerektiğinde Markdown dosyalarından otomatik olarak yeniden oluşturulur

  Markdown dosyalarını sistem dışında doğrudan düzenlerseniz, veritabanını güncellemek için `zk_rebuild_index` aracını çalıştırmanız gerekir. Veritabanının kendisi istediğiniz zaman silinebilir - Markdown dosyalarınızdan yeniden oluşturulacaktır.

  ## Kurulum

  ```bash
  # Depoyu klonla
  git clone https://github.com/entanglr/zettelkasten-mcp.git
  cd zettelkasten-mcp

  # uv ile sanal ortam oluştur
  uv venv
  source .venv/bin/activate  # Windows'ta: .venv\Scripts\activate

  # Bağımlılıkları yükle
  uv add "mcp[cli]"

  # Geliştirici bağımlılıklarını yükle
  uv sync --all-extras
  ```

  ## Yapılandırma

  Örneği kopyalayarak proje köküne bir `.env` dosyası oluşturun:

  ```bash
  cp .env.example .env
  ```

  Daha sonra dosyayı düzenleyerek bağlantı parametrelerinizi yapılandırın.

  ## Kullanım

  ### Sunucuyu Başlatma

  ```bash
  python -m zettelkasten_mcp.main
  ```

  Veya açık yapılandırma ile:

  ```bash
  python -m zettelkasten_mcp.main --notes-dir ./data/notes --database-path ./data/db/zettelkasten.db
  ```

  ### Claude Desktop'a Bağlanma

  Claude Desktop'ınıza aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
    "mcpServers": {
      "zettelkasten": {
        "command": "/absolute/path/to/zettelkasten-mcp/.venv/bin/python",
        "args": [
          "-m",
          "zettelkasten_mcp.main"
        ],
        "env": {
          "ZETTELKASTEN_NOTES_DIR": "/absolute/path/to/zettelkasten-mcp/data/notes",
          "ZETTELKASTEN_DATABASE_PATH": "/absolute/path/to/zettelkasten-mcp/data/db/zettelkasten.db",
          "ZETTELKASTEN_LOG_LEVEL": "INFO"
        }
      }
    }
  }
  ```

  ## Mevcut MCP Araçları

  Tüm araçlara daha iyi organizasyon için `zk_` öneki eklenmiştir:

  | Araç | Açıklama |
  |---|---|
  | `zk_create_note` | Başlık, içerik ve isteğe bağlı etiketlerle yeni bir not oluştur |
  | `zk_get_note` | Belirli bir notu ID veya başlığa göre al |
  | `zk_update_note` | Varolan bir notun içeriğini veya meta verilerini güncelle |
  | `zk_delete_note` | Bir notu sil |
  | `zk_create_link` | Notlar arasında bağlantı oluştur |
  | `zk_remove_link` | Notlar arasında bağlantı kaldır |
  | `zk_search_notes` | İçerik, etiketler veya bağlantılara göre notları ara |
  | `zk_get_linked_notes` | Belirli bir nota bağlı notları bul |
  | `zk_get_all_tags` | Sistemdeki tüm etiketleri listele |
  | `zk_find_similar_notes` | Verilen nota benzer notları bul |
  | `zk_find_central_notes` | En fazla bağlantıya sahip notları bul |
  | `zk_find_orphaned_notes` | Hiçbir bağlantısı olmayan notları bul |
  | `zk_list_notes_by_date` | Notları oluşturulma/güncelleme tarihine göre listele |
  | `zk_rebuild_index` | Veritabanı indeksini Markdown dosyalarından yeniden oluştur |

  ## Proje Yapısı

  ```
  zettelkasten-mcp/
  ├── src/
  │   └── zettelkasten_mcp/
  │       ├── models/       # Veri modelleri
  │       ├── storage/      # Depolama katmanı
  │       ├── services/     # İş mantığı
  │       └── server/       # MCP sunucu uygulaması
  ├── data/
  │   ├── notes/            # Not depolaması (Markdown dosyaları)
  │   └── db/               # İndeksleme için veritabanı
  ├── tests/                # Test paketi
  ├── .env.example          # Ortam değişkeni şablonu
  └── README.md
  ```

  ## Testler

  Zettelkasten MCP'nin modelden MCP sunucu uygulamasına kadar uygulamanın tüm katmanlarını kapsayan kapsamlı test paketi.

  ### Testleri Nasıl Çalıştıracağınız

  Proje kök dizininden şunu çalıştırın:

  #### pytest'i doğrudan kullanma
  ```bash
  python -m pytest -v tests/
  ```

  #### UV kullanma
  ```bash
  uv run pytest -v tests/
  ```

  #### Kapsam raporu ile
  ```bash
  uv run pytest --cov=zettelkasten_mcp --cov-report=term-missing tests/
  ```

  #### Belirli bir test dosyasını çalıştırma
  ```bash
  uv run pytest -v tests/test_models.py
  ```

  #### Belirli bir test sınıfını çalıştırma
  ```bash
  uv run pytest -v tests/test_models.py::TestNoteModel
  ```

  #### Belirli bir test fonksiyonunu çalıştırma
  ```bash
  uv run pytest -v tests/test_models.py::TestNoteModel::test_note_validation
  ```

  ### Tests Dizin Yapısı

  ```
  tests/
  ├── conftest.py - Tüm testler için ortak fixture'lar
  ├── test_integration.py - Tüm sistemin entegrasyon testleri
  ├── test_mcp_server.py - MCP sunucu araçlarının testleri
  ├── test_models.py - Veri modellerinin testleri
  ├── test_note_repository.py - Not repository'sinin testleri
  ├── test_search_service.py - Arama hizmetinin testleri
  ├── test_semantic_links.py - Semantik bağlammanın testleri
  └── test_zettel_service.py - Zettel hizmetinin testleri
  ```

  ## Önemli Uyarı

  **⚠️ KENDİ RİSKİNİZDE KULLANIN**: Bu yazılım deneyseldir ve hiçbir garantisi olmaksızın olduğu gibi sağlanmaktadır. Veri bütünlüğünü sağlamak için çaba gösterilmiş olsa da, veri kaybı veya bozulmasına yol açabilecek hatalar içerebilir. Notlarınızı düzenli olarak yedekleyin ve önemli bilgilerle test ederken dikkatli olun.

  ## Kredi Verilmesi Gereken Yerlere

  Bu MCP sunucusu, Claude'un yardımıyla oluşturulmuştur. Claude, bu projenin atomik düşüncelerini tutarlı bir bilgi grafiğinde organize etmesine yardımcı oldu. İyi bir Zettelkasten sistemi gibi, Claude aksi takdirde izole kalabilecek fikirler arasındaki noktaları birleştirdi. Ancak Luhmann'ın kağıt tabanlı sisteminden farklı olarak, Claude etkili olmak için 90.000 index karta ihtiyaç duymadı.

  ## Lisans

  MIT Lisansı
---

# Zettelkasten MCP Server

A Model Context Protocol (MCP) server that implements the Zettelkasten knowledge management methodology, allowing you to create, link, explore and synthesize atomic notes through Claude and other MCP-compatible clients.

## What is Zettelkasten?

The Zettelkasten method is a knowledge management system developed by German sociologist Niklas Luhmann, who used it to produce over 70 books and hundreds of articles. It consists of three core principles:

1. **Atomicity**: Each note contains exactly one idea, making it a discrete unit of knowledge
2. **Connectivity**: Notes are linked together to create a network of knowledge, with meaningful relationships between ideas
3. **Emergence**: As the network grows, new patterns and insights emerge that weren't obvious when the individual notes were created

What makes the Zettelkasten approach powerful is how it enables exploration in multiple ways:

- **Vertical exploration**: dive deeper into specific topics by following connections within a subject area.
- **Horizontal exploration**: discover unexpected relationships between different fields by traversing links that cross domains.

This structure invites serendipitous discoveries as you follow trails of thought from note to note, all while keeping each piece of information easily accessible through its unique identifier. Luhmann called his system his "second brain" or "communication partner" - this digital implementation aims to provide similar benefits through modern technology.

## Features

- Create atomic notes with unique timestamp-based IDs
- Link notes bidirectionally to build a knowledge graph
- Tag notes for categorical organization
- Search notes by content, tags, or links
- Use markdown format for human readability and editing
- Integrate with Claude through MCP for AI-assisted knowledge management
- Dual storage architecture (see below)
- Synchronous operation model for simplified architecture

## Examples

- Knowledge creation: [A small Zettelkasten knowledge network about the Zettelkasten method itself](https://github.com/entanglr/zettelkasten-mcp/discussions/5)

## Note Types

The Zettelkasten MCP server supports different types of notes:

|Type|Handle|Description|
|---|---|---|
|**Fleeting notes**|`fleeting`|Quick, temporary notes for capturing ideas|
|**Literature notes**|`literature`|Notes from reading material|
|**Permanent notes**|`permanent`|Well-formulated, evergreen notes|
|**Structure notes**|`structure`|Index or outline notes that organize other notes|
|**Hub notes**|`hub`|Entry points to the Zettelkasten on key topics|

## Link Types

The Zettelkasten MCP server uses a comprehensive semantic linking system that creates meaningful connections between notes. Each link type represents a specific relationship, allowing for a rich, multi-dimensional knowledge graph.

| Primary Link Type | Inverse Link Type | Relationship Description |
|-------------------|-------------------|--------------------------|
| `reference` | `reference` | Simple reference to related information (symmetric relationship) |
| `extends` | `extended_by` | One note builds upon or develops concepts from another |
| `refines` | `refined_by` | One note clarifies or improves upon another |
| `contradicts` | `contradicted_by` | One note presents opposing views to another |
| `questions` | `questioned_by` | One note poses questions about another |
| `supports` | `supported_by` | One note provides evidence for another |
| `related` | `related` | Generic relationship (symmetric relationship) |

## Prompting

To ensure maximum effectiveness, we recommend using a system prompt ("project instructions"), project knowledge, and an appropriate chat prompt when asking the LLM to process information, or explore or synthesize your Zettelkasten notes. The `docs` directory in this repository contains the necessary files to get you started:

### System prompts

Pick one:

- [system-prompt.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/system/system-prompt.md)
- [system-prompt-with-protocol.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/system/system-prompt-with-protocol.md)

### Project knowledge

For end users:

- [zettelkasten-methodology-technical.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/user/zettelkasten-methodology-technical.md)
- [link-types-in-zettelkasten-mcp-server.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/user/link-types-in-zettelkasten-mcp-server.md)
- (more info relevant to your project)

### Chat Prompts

- [chat-prompt-knowledge-creation.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/chat/chat-prompt-knowledge-creation.md)
- [chat-prompt-knowledge-creation-batch.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/chat/chat-prompt-knowledge-creation-batch.md)
- [chat-prompt-knowledge-exploration.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/chat/chat-prompt-knowledge-exploration.md)
- [chat-prompt-knowledge-synthesis.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/prompts/chat/chat-prompt-knowledge-synthesis.md)

### Project knowledge (dev)

For developers and contributors:

- [Example - A simple MCP server.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/dev/Example%20-%20A%20simple%20MCP%20server%20that%20exposes%20a%20website%20fetching%20tool.md)
- [MCP Python SDK-README.md](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/dev/MCP%20Python%20SDK-README.md)
- [llms-full.txt](https://github.com/entanglr/zettelkasten-mcp/blob/main/docs/project-knowledge/dev/llms-full.txt)

NB: Optionally include the source code with a tool like [repomix](https://github.com/yamadashy/repomix).

## Storage Architecture

This system uses a dual storage approach:

1. **Markdown Files**: All notes are stored as human-readable Markdown files with YAML frontmatter for metadata. These files are the **source of truth** and can be:
   - Edited directly in any text editor
   - Placed under version control (Git, etc.)
   - Backed up using standard file backup procedures
   - Shared or transferred like any other text files

2. **SQLite Database**: Functions as an indexing layer that:
   - Facilitates efficient querying and search operations
   - Enables Claude to quickly traverse the knowledge graph
   - Maintains relationship information for faster link traversal
   - Is automatically rebuilt from Markdown files when needed

If you edit Markdown files directly outside the system, you'll need to run the `zk_rebuild_index` tool to update the database. The database itself can be deleted at any time - it will be regenerated from your Markdown files.

## Installation

```bash
# Clone the repository
git clone https://github.com/entanglr/zettelkasten-mcp.git
cd zettelkasten-mcp

# Create a virtual environment with uv
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
uv add "mcp[cli]"

# Install dev dependencies
uv sync --all-extras
```

## Configuration

Create a `.env` file in the project root by copying the example:

```bash
cp .env.example .env
```

Then edit the file to configure your connection parameters.

## Usage

### Starting the Server

```bash
python -m zettelkasten_mcp.main
```

Or with explicit configuration:

```bash
python -m zettelkasten_mcp.main --notes-dir ./data/notes --database-path ./data/db/zettelkasten.db
```

### Connecting to Claude Desktop

Add the following configuration to your Claude Desktop:

```json
{
  "mcpServers": {
    "zettelkasten": {
      "command": "/absolute/path/to/zettelkasten-mcp/.venv/bin/python",
      "args": [
        "-m",
        "zettelkasten_mcp.main"
      ],
      "env": {
        "ZETTELKASTEN_NOTES_DIR": "/absolute/path/to/zettelkasten-mcp/data/notes",
        "ZETTELKASTEN_DATABASE_PATH": "/absolute/path/to/zettelkasten-mcp/data/db/zettelkasten.db",
        "ZETTELKASTEN_LOG_LEVEL": "INFO"
      }
    }
  }
}
```

## Available MCP Tools

All tools have been prefixed with `zk_` for better organization:

| Tool | Description |
|---|---|
| `zk_create_note` | Create a new note with a title, content, and optional tags |
| `zk_get_note` | Retrieve a specific note by ID or title |
| `zk_update_note` | Update an existing note's content or metadata |
| `zk_delete_note` | Delete a note |
| `zk_create_link` | Create links between notes |
| `zk_remove_link` | Remove links between notes |
| `zk_search_notes` | Search for notes by content, tags, or links |
| `zk_get_linked_notes` | Find notes linked to a specific note |
| `zk_get_all_tags` | List all tags in the system |
| `zk_find_similar_notes` | Find notes similar to a given note |
| `zk_find_central_notes` | Find notes with the most connections |
| `zk_find_orphaned_notes` | Find notes with no connections |
| `zk_list_notes_by_date` | List notes by creation/update date |
| `zk_rebuild_index` | Rebuild the database index from Markdown files |

## Project Structure

```
zettelkasten-mcp/
├── src/
│   └── zettelkasten_mcp/
│       ├── models/       # Data models
│       ├── storage/      # Storage layer
│       ├── services/     # Business logic
│       └── server/       # MCP server implementation
├── data/
│   ├── notes/            # Note storage (Markdown files)
│   └── db/               # Database for indexing
├── tests/                # Test suite
├── .env.example          # Environment variable template
└── README.md
```

## Tests

Comprehensive test suite for Zettelkasten MCP covering all layers of the application from models to the MCP server implementation.

### How to Run the Tests

From the project root directory, run:

#### Using pytest directly
```bash
python -m pytest -v tests/
```

#### Using UV
```bash
uv run pytest -v tests/
```

#### With coverage report
```bash
uv run pytest --cov=zettelkasten_mcp --cov-report=term-missing tests/
```

#### Running a specific test file
```bash
uv run pytest -v tests/test_models.py
```

#### Running a specific test class
```bash
uv run pytest -v tests/test_models.py::TestNoteModel
```

#### Running a specific test function
```bash
uv run pytest -v tests/test_models.py::TestNoteModel::test_note_validation
```

### Tests Directory Structure

```
tests/
├── conftest.py - Common fixtures for all tests
├── test_integration.py - Integration tests for the entire system
├── test_mcp_server.py - Tests for MCP server tools
├── test_models.py - Tests for data models
├── test_note_repository.py - Tests for note repository
├── test_search_service.py - Tests for search service
├── test_semantic_links.py - Tests for semantic linking
└── test_zettel_service.py - Tests for zettel service
```

## Important Notice

**⚠️ USE AT YOUR OWN RISK**: This software is experimental and provided as-is without warranty of any kind. While efforts have been made to ensure data integrity, it may contain bugs that could potentially lead to data loss or corruption. Always back up your notes regularly and use caution when testing with important information.

## Credit Where Credit's Due

This MCP server was crafted with the assistance of Claude, who helped organize the atomic thoughts of this project into a coherent knowledge graph. Much like a good Zettelkasten system, Claude connected the dots between ideas that might otherwise have remained isolated. Unlike Luhmann's paper-based system, however, Claude didn't require 90,000 index cards to be effective.

## License

MIT License
