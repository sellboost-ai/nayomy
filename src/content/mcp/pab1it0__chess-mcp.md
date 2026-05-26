---
name: "pab1it0/chess-mcp"
description: "Access Chess.com player data, game records, and other public information through standardized MCP interfaces, allowing AI assistants to search and analyze chess information."
description_tr: "Chess.com oyuncu verilerini, oyun kayıtlarını ve diğer genel bilgileri standardize MCP interface'leri üzerinden erişin; AI asistanlarının satranç bilgilerini araması ve analiz etmesini sağlayın."
category: "Gaming"
repo: "pab1it0/chess-mcp"
stars: 74
url: "https://github.com/pab1it0/chess-mcp"
body_length: 3930
license: "MIT"
language: "Python"
body_tr: |-
  # Chess.com MCP Sunucusu

  Chess.com'un Yayınlanan Veri API'si için bir [Model Context Protocol][mcp] (MCP) sunucusu.

  Bu, Chess.com oyuncu verilerine, oyun kayıtlarına ve diğer halka açık bilgilere standart MCP arayüzleri aracılığıyla erişim sağlar ve yapay zeka asistanlarının satranç bilgilerini aramasına ve analiz etmesine olanak tanır.

  https://github.com/user-attachments/assets/3b33361b-b604-465c-9f6a-3699b6907757

  [mcp]: https://modelcontextprotocol.io/introduction/introduction

  ## Özellikler

  - [x] Oyuncu profilleri, istatistikleri ve oyun kayıtlarına erişim
  - [x] Oyunları tarih ve oyuncuya göre arama
  - [x] Oyuncunun çevrimiçi durumunu kontrol etme
  - [x] Kulüpler ve unvanlı oyuncuların bilgilerini alma
  - [x] Kimlik doğrulaması gerekmez (Chess.com'un genel API'sini kullanır)
  - [x] Docker konteynerizasyon desteği
  - [x] Yapay zeka asistanları için etkileşimli araçlar sağlama

  Araçlar listesi yapılandırılabilir, bu nedenle MCP istemcisinde hangi araçların kullanılabileceğini seçebilirsiniz.

  ## Kullanım

  ### Docker (Önerilen)

  chess-mcp'yi [Claude Desktop](https://claude.ai/desktop) ile çalıştırmanın en kolay yolu Docker kullanmaktır. Docker yüklü değilse, bunu [Docker'ın resmi web sitesinden](https://www.docker.com/get-started/) alabilirsiniz.


  Claude Desktop config dosyanızı düzenleyin:
  * Mac: `~/Library/Application Support/Claude/claude_desktop_config.json`
  * Windows: `%APPDATA%/Claude/claude_desktop_config.json`
  * Linux: `~/.config/Claude/claude_desktop_config.json`

  Ardından aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
    "mcpServers": {
      "chess": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "pab1it0/chess-mcp"
        ]
      }
    }
  }
  ```

  ### UV ile Çalıştırma

  Alternatif olarak, sunucuyu doğrudan UV kullanarak çalıştırabilirsiniz. Claude Desktop config dosyanızı düzenleyin (konumlar yukarıda listelenmiştir) ve sunucu yapılandırmasını ekleyin:

  ```json
  {
    "mcpServers": {
      "chess": {
        "command": "uv",
        "args": [
          "--directory",
          "<chess-mcp dizinine giden tam yol>",
          "run",
          "src/chess_mcp/main.py"
        ]
      }
    }
  }
  ```

  > Not: [Claude Desktop](https://claude.ai/desktop)'ta `Error: spawn uv ENOENT` hatası görürseniz, `uv`'nin tam yolunu belirtmeniz veya yapılandırmada `NO_UV=1` ortam değişkenini ayarlamanız gerekebilir.

  ## Geliştirme

  Katkılar hoş karşılanır! Herhangi bir öneriniz veya iyileştirmeniz varsa lütfen bir konu açın veya pull request gönderin.

  Bu proje bağımlılıkları yönetmek için [`uv`](https://github.com/astral-sh/uv) kullanır. Platformunuza yönelik talimatları izleyerek `uv`'yi yükleyin:

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  Daha sonra bir sanal ortam oluşturabilir ve bağımlılıkları yükleyebilirsiniz:

  ```bash
  uv venv
  source .venv/bin/activate  # Unix/macOS üzerinde
  .venv\Scripts\activate     # Windows üzerinde
  uv pip install -e .
  ```

  ### Test

  Proje işlevselliği sağlayan ve regresyonları önlemeye yardımcı olan bir test paketini içerir.

  Testleri pytest ile çalıştırın:

  ```bash
  # Geliştirme bağımlılıklarını yükleyin
  uv pip install -e ".[dev]"

  # Testleri çalıştırın
  pytest

  # Kapsam raporu ile çalıştırın
  pytest --cov=src --cov-report=term-missing
  ```

  ## Kullanılabilir Araçlar

  ### Oyuncu Bilgileri
  - `get_player_profile` - Chess.com'dan oyuncu profili al
  - `get_player_stats` - Chess.com'dan oyuncu istatistiklerini al
  - `is_player_online` - Oyuncunun şu anda Chess.com'da çevrimiçi olup olmadığını kontrol et
  - `get_titled_players` - Chess.com'dan unvanlı oyunculara ilişkin liste al

  ### Oyunlar
  - `get_player_current_games` - Chess.com'da oyuncunun devam eden oyunlarını al
  - `get_player_games_by_month` - Chess.com'dan belirli bir ay için oyuncunun oyunlarını al
  - `get_player_game_archives` - Chess.com'da bir oyuncu için mevcut aylık oyun arşivlerinin listesini al
  - `download_player_games_pgn` - Chess.com'dan belirli bir aydaki tüm oyunlar için PGN dosyalarını indir

  ### Kulüpler
  - `get_club_profile` - Chess.com'da bir kulübün bilgilerini al
  - `get_club_members` - Chess.com'da bir kulübün üyelerini al

  ## Lisans

  MIT

  ---

  [mcp]: https://modelcontextprotocol.io
---

# Chess.com MCP Server

A [Model Context Protocol][mcp] (MCP) server for Chess.com's Published Data API.

This provides access to Chess.com player data, game records, and other public information through standardized MCP interfaces, allowing AI assistants to search and analyze chess information.

https://github.com/user-attachments/assets/3b33361b-b604-465c-9f6a-3699b6907757

[mcp]: https://modelcontextprotocol.io/introduction/introduction

## Features

- [x] Access player profiles, stats, and game records
- [x] Search games by date and player
- [x] Check player online status
- [x] Get information about clubs and titled players
- [x] No authentication required (uses Chess.com's public API)
- [x] Docker containerization support
- [x] Provide interactive tools for AI assistants

The list of tools is configurable, so you can choose which tools you want to make available to the MCP client.

## Usage

### Docker (Recommended)

The easiest way to run chess-mcp with [Claude Desktop](https://claude.ai/desktop) is using Docker. If you don't have Docker installed, you can get it from [Docker's official website](https://www.docker.com/get-started/).


Edit your Claude Desktop config file:
* Mac: `~/Library/Application Support/Claude/claude_desktop_config.json`
* Windows: `%APPDATA%/Claude/claude_desktop_config.json`
* Linux: `~/.config/Claude/claude_desktop_config.json`

Then add the following configuration:

```json
{
  "mcpServers": {
    "chess": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "pab1it0/chess-mcp"
      ]
    }
  }
}
```

### Running with UV

Alternatively, you can run the server directly using UV. Edit your Claude Desktop config file (locations listed above) and add the server configuration:

```json
{
  "mcpServers": {
    "chess": {
      "command": "uv",
      "args": [
        "--directory",
        "<full path to chess-mcp directory>",
        "run",
        "src/chess_mcp/main.py"
      ]
    }
  }
}
```

> Note: if you see `Error: spawn uv ENOENT` in [Claude Desktop](https://claude.ai/desktop), you may need to specify the full path to `uv` or set the environment variable `NO_UV=1` in the configuration.

## Development

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

This project uses [`uv`](https://github.com/astral-sh/uv) to manage dependencies. Install `uv` following the instructions for your platform:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

You can then create a virtual environment and install the dependencies with:

```bash
uv venv
source .venv/bin/activate  # On Unix/macOS
.venv\Scripts\activate     # On Windows
uv pip install -e .
```

### Testing

The project includes a test suite that ensures functionality and helps prevent regressions.

Run the tests with pytest:

```bash
# Install development dependencies
uv pip install -e ".[dev]"

# Run the tests
pytest

# Run with coverage report
pytest --cov=src --cov-report=term-missing
```

## Available Tools

### Player Information
- `get_player_profile` - Get a player's profile from Chess.com
- `get_player_stats` - Get a player's stats from Chess.com
- `is_player_online` - Check if a player is currently online on Chess.com
- `get_titled_players` - Get a list of titled players from Chess.com

### Games
- `get_player_current_games` - Get a player's ongoing games on Chess.com
- `get_player_games_by_month` - Get a player's games for a specific month from Chess.com
- `get_player_game_archives` - Get a list of available monthly game archives for a player on Chess.com
- `download_player_games_pgn` - Download PGN files for all games in a specific month from Chess.com

### Clubs
- `get_club_profile` - Get information about a club on Chess.com
- `get_club_members` - Get members of a club on Chess.com

## License

MIT

---

[mcp]: https://modelcontextprotocol.io
