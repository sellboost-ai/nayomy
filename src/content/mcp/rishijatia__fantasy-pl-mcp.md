---
name: "rishijatia/fantasy-pl-mcp"
description: "An MCP server for real-time Fantasy Premier League data and analysis tools."
category: "Gaming"
repo: "rishijatia/fantasy-pl-mcp"
stars: 69
url: "https://github.com/rishijatia/fantasy-pl-mcp"
body_length: 10833
license: "MIT"
language: "Python"
body_tr: |-
  # Fantasy Premier League MCP Server

  [![PyPI version](https://badge.fury.io/py/fpl-mcp.svg)](https://badge.fury.io/py/fpl-mcp)
  [![Package Check](https://github.com/rishijatia/fantasy-pl-mcp/actions/workflows/package-check.yml/badge.svg)](https://github.com/rishijatia/fantasy-pl-mcp/actions/workflows/package-check.yml)
  [![PyPI - Python Version](https://img.shields.io/pypi/pyversions/fpl-mcp)](https://pypi.org/project/fpl-mcp/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Downloads](https://static.pepy.tech/badge/fpl-mcp)](https://pepy.tech/project/fpl-mcp)

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/rishijatia/fantasy-pl-mcp)](https://archestra.ai/mcp-catalog/rishijatia__fantasy-pl-mcp)
  <a href="https://glama.ai/mcp/servers/2zxsxuxuj9">
    

  Fantasy Premier League (FPL) verisine ve araçlarına erişim sağlayan bir Model Context Protocol (MCP) sunucusu. Bu sunucu, Claude for Desktop ve diğer MCP uyumlu istemcilerde FPL verileriyle etkileşim kurmanızı sağlar.

  *Fantasy Premier League MCP Server'ın çalışması sırasında bir demo*

  [![Fantasy Premier League MCP Demo](https://img.youtube.com/vi/QfOOOQ_jeMA/0.jpg)](https://youtu.be/QfOOOQ_jeMA)


  ## Desteklenen Platformlar

  - Claude Desktop
  - Cursor
  - Windsurf
  - Diğer MCP Uyumlu Desktop LLM'ler

  Mobil şu anda desteklenmemektedir.

  ## Özellikler

  - **Zengin Oyuncu Verileri**: FPL API'sinden kapsamlı oyuncu istatistiklerine erişin
  - **Takım Bilgileri**: Premier League takımları hakkında detayları öğrenin
  - **Gameweek Verileri**: Mevcut ve geçmiş gameweek bilgilerini görüntüleyin
  - **Oyuncu Arama**: Oyuncuları ada veya takıma göre bulun
  - **Oyuncu Karşılaştırması**: Herhangi iki oyuncu arasında detaylı istatistikleri karşılaştırın

  ## Gereksinimler

  - Python 3.10 veya daha yüksek sürüm
  - Claude Desktop (AI entegrasyonu için)

  ## Kurulum

  ### Seçenek 1: PyPI'den Kurulum (Önerilir)

  ```bash
  pip install fpl-mcp
  ```

  ### Seçenek 1b: Geliştirme Bağımlılıklarıyla Kurulum

  ```bash
  pip install "fpl-mcp[dev]"
  ```

  ### Seçenek 2: GitHub'dan Kurulum

  ```bash
  pip install git+https://github.com/rishijatia/fantasy-pl-mcp.git
  ```

  ### Seçenek 3: Yerel Olarak Klonlama ve Kurulum

  ```bash
  git clone https://github.com/rishijatia/fantasy-pl-mcp.git
  cd fantasy-pl-mcp
  pip install -e .
  ```

  ## Sunucuyu Çalıştırma

  Kurulumdan sonra, sunucuyu çalıştırmak için birkaç seçeneğiniz vardır:

  ### 1. CLI komutunu kullanma

  ```bash
  fpl-mcp
  ```

  ### 2. Python modülünü kullanma

  ```bash
  python -m fpl_mcp
  ```

  ### 3. Claude Desktop ile kullanma

  `claude_desktop_config.json` dosyanızı düzenleyerek Claude Desktop'ı yüklü paketi kullanacak şekilde yapılandırın:

  **Yöntem 1: Python modülünü doğrudan kullanma (en güvenilir)**

  ```json
  {
    "mcpServers": {
      "fantasy-pl": {
        "command": "python",
        "args": ["-m", "fpl_mcp"]
      }
    }
  }
  ```

  **Yöntem 2: Tam yol ile yüklü komutu kullanma (pip ile kurulduysa)**

  ```json
  {
    "mcpServers": {
      "fantasy-pl": {
        "command": "/full/path/to/your/venv/bin/fpl-mcp"
      }
    }
  }
  ```

  `/full/path/to/your/venv/bin/fpl-mcp` kısmını çalıştırılabilir dosyanın gerçek yolu ile değiştirin. Virtual ortamınızı aktifleştirdikten sonra terminalinde `which fpl-mcp` komutunu çalıştırarak bunu bulabilirsiniz.

  > **Not:** Sadece `"command": "fpl-mcp"` kullanmak, Claude Desktop'ın sanal ortamınızın PATH'ine erişemeyebileceği için `spawn fpl-mcp ENOENT` hatası ile sonuçlanabilir. Tam yol veya Python modülü yaklaşımını kullanmak bu sorunu önlemeye yardımcı olur.

  ## Kullanım

  ### Claude for Desktop'ta

  1. Claude for Desktop'ı başlatın
  2. Çekiç simgesi aracılığıyla FPL araçlarını görebilirsiniz
  3. Örnek sorgular:
     - "Compare Mohamed Salah and Erling Haaland over the last 5 gameweeks"
     - "Find all Arsenal midfielders"
     - "What's the current gameweek status?"
     - "Show me the top 5 forwards by points"

  #### Fantasy-PL MCP Kullanım Talimatları

  #### Temel Komutlar:
  - Oyuncuları karşılaştır: "Compare [Player1] and [Player2]"
  - Oyuncuları bul: "Find players from [Team]" veya "Search for [Player Name]"
  - Maç zorluğu: "Show upcoming fixtures for [Team]"
  - Kaptan tavsiyesi: "Who should I captain between [Player1] and [Player2]?"

  #### Gelişmiş Özellikler:
  - İstatistiksel analiz: "Compare underlying stats for [Player1] and [Player2]"
  - Form kontrolü: "Show me players in form right now"
  - Diferansiyel seçimler: "Suggest differentials under 10% ownership"
  - Takım optimizasyonu: "Rate my team and suggest transfers"

  #### İpuçları:
  - Doğru sonuçlar için oyuncu adlarını spesifik olarak yazın
  - Arama yaparken pozisyonları ekleyin (FWD, MID, DEF, GK)
  - En iyi kaptan tavsiyesi için form, fixtures ve altta yatan istatistikleri sorun
  - Spesifik metriklerin karşılaştırılmasını isteyebilirsiniz (xG, shots in box, vb.)

  ### Geliştirme için MCP Inspector

  Geliştirme ve test için:

  ```bash
  # mcp[cli] kurulu olduğunda
  mcp dev -m fpl_mcp

  # Veya npx kullanarak
  npx @modelcontextprotocol/inspector python -m fpl_mcp
  ```

  ## Mevcut Kaynaklar
  - `fpl://static/players` - Kapsamlı istatistikler ile tüm oyuncu verileri
  - `fpl://static/players/{name}` - Ada göre oyuncu verileri arama
  - `fpl://static/teams` - Tüm Premier League takımları
  - `fpl://static/teams/{name}` - Ada göre takım verileri
  - `fpl://gameweeks/current` - Mevcut gameweek verileri
  - `fpl://gameweeks/all` - Tüm gameweeks verileri
  - `fpl://fixtures` - Mevcut sezon için tüm maçlar
  - `fpl://fixtures/gameweek/{gameweek_id}` - Belirli bir gameweek için maçlar
  - `fpl://fixtures/team/{team_name}` - Belirli bir takım için maçlar
  - `fpl://players/{player_name}/fixtures` - Belirli bir oyuncu için yaklaşan maçlar
  - `fpl://gameweeks/blank` - Yaklaşan blank gameweekler hakkında bilgiler
  - `fpl://gameweeks/double` - Yaklaşan double gameweekler hakkında bilgiler

  ## Mevcut Araçlar
  - `get_gameweek_status` - Mevcut, önceki ve sonraki gameweekler hakkında kesin bilgi alın
  - `analyze_player_fixtures` - Bir oyuncunun yaklaşan maçlarını zorluk derecelendirmeleriyle analiz edin
  - `get_blank_gameweeks` - Yaklaşan blank gameweekler hakkında bilgi alın
  - `get_double_gameweeks` - Yaklaşan double gameweekler hakkında bilgi alın
  - `analyze_players` - FPL oyuncularını birden fazla kritere göre filtreleyin ve analiz edin
  - `analyze_fixtures` - Oyuncuların, takımların veya pozisyonların yaklaşan maçlarını analiz edin
  - `compare_players` - Birden fazla oyuncuyu çeşitli metrikler arasında karşılaştırın
  - `check_fpl_authentication` - FPL kimlik doğrulamasının düzgün çalışıp çalışmadığını kontrol edin
  - `get_my_team` - Kimlik doğrulanmış takımınızı görüntüleyin (kimlik doğrulama gerekir)
  - `get_team` - Belirli bir kimliğe sahip herhangi bir takımı görüntüleyin (kimlik doğrulama gerekir)
  - `get_manager_info` - Yönetici detaylarını alın (kimlik doğrulama gerekir)

  ## İstem Şablonları
  - `player_analysis_prompt` - Bir FPL oyuncusunu derinlemesine analiz etmek için bir istem oluşturun
  - `transfer_advice_prompt` - Bütçe ve pozisyona göre oyuncu transferleri hakkında tavsiye alın
  - `team_rating_prompt` - Bir FPL takımını derecelendirmek ve analiz etmek için bir istem oluşturun
  - `differential_players_prompt` - Düşük mülkiyet oranı ile diferansiyel oyuncular bulmak için bir istem oluşturun
  - `chip_strategy_prompt` - Chip stratejisi tavsiyesi için bir istem oluşturun

  ## Geliştirme

  ### Özellik Ekleme

  Yeni özellikler eklemek için:

  1. `fpl_mcp/fpl/resources/` içindeki uygun dosyaya resource handler'ları ekleyin
  2. `fpl_mcp/fpl/tools/` içindeki uygun dosyaya tool handler'ları ekleyin
  3. Yeni resource'ları ve araçları kaydetmek için `__main__.py` dosyasını güncelleyin
  4. Claude for Desktop'a dağıtmadan önce MCP Inspector kullanarak test edin

  ## Kimlik Doğrulama

  Kimlik doğrulama gerektiren özellikleri (örneğin, takımınıza veya özel liglere erişmek gibi) kullanmak için FPL kimlik bilgilerinizi ayarlamanız gerekir:

  ```bash
  # Credential setup aracını çalıştırın
  fpl-mcp-config setup
  ```

  Bu etkileşimli araç:
  1. FPL e-postanız, şifreniz ve takım kimliğiniz isteyecektir
  2. Config.json veya .env dosyasında depolamayı seçmenizi sağlar
  3. Kimlik bilgilerini güvenli bir şekilde ~/.fpl-mcp/ içine kaydeder

  Kimlik doğrulamanızı test edebilirsiniz:
  ```bash
  fpl-mcp-config test
  ```

  Alternatif olarak, kimlik doğrulamayı manuel olarak yapılandırabilirsiniz:
  1. `~/.fpl-mcp/.env` dosyası oluşturun:
     ```
     FPL_EMAIL=your_email@example.com
     FPL_PASSWORD=your_password
     FPL_TEAM_ID=your_team_id
     ```
     
  2. Veya `~/.fpl-mcp/config.json` oluşturun:
     ```json
     {
       "email": "your_email@example.com",
       "password": "your_password",
       "team_id": "your_team_id"
     }
     ```

  3. Veya ortam değişkenlerini ayarlayın:
     ```bash
     export FPL_EMAIL=your_email@example.com
     export FPL_PASSWORD=your_password
     export FPL_TEAM_ID=your_team_id
     ```

  ## Sınırlamalar

  - FPL API resmi olarak belgelenmemiş ve bildirim yapılmadan değişebilir
  - Şu anda yalnızca okuma işlemleri desteklenmektedir

  ## Sorun Giderme

  ### Yaygın Sorunlar

  #### 1. Claude Desktop'ta "spawn fpl-mcp ENOENT" hatası

  Bu, Claude Desktop'ın PATH'inde `fpl-mcp` çalıştırılabilir dosyasını bulamadığında oluşur.

  **Çözüm:** Bu yaklaşımlardan birini kullanın:

  - Config dosyasında çalıştırılabilir dosyanın tam yolunu kullanın
    ```json
    {
      "mcpServers": {
        "fantasy-pl": {
          "command": "/full/path/to/your/venv/bin/fpl-mcp"
        }
      }
    }
    ```

  - Modülü Python ile doğrudan çalıştırın (tercih edilen yöntem)
    ```json
    {
      "mcpServers": {
        "fantasy-pl": {
          "command": "python",
          "args": ["-m", "fpl_mcp"]
        }
      }
    }
    ```

  #### 2. Sunucu hemen bağlantısı kesilir

  Sunucu başlarsa ancak hemen bağlantısı kesilirlerse:

  - `~/Library/Logs/Claude/mcp*.log` (macOS) veya `%APPDATA%\Claude\logs\mcp*.log` (Windows) dosyasından günlükleri kontrol edin
  - Tüm bağımlılıkların kurulu olduğundan emin olun
  - Hataları görmek için `python -m fpl_mcp` ile sunucuyu manuel olarak çalıştırmayı deneyin

  #### 3. Sunucu Claude Desktop'ta gösterilmiyor

  Çekiç simgesi görüntülenmiyorsa:

  - Claude Desktop'ı tamamen yeniden başlatın
  - `claude_desktop_config.json` dosyasının doğru JSON sözdiziminde olduğunu doğrulayın
  - Python veya çalıştırılabilir dosyanın yolunun mutlak olduğundan emin olun, göreceli değil

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için LICENSE dosyasına bakın.

  ## Katkıda Bulunma

  Katkılar hoş karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.

  1. Depoyu fork edin
  2. Feature branch'inizi oluşturun (`git checkout -b feature/amazing-feature`)
  3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
  4. Branch'e push edin (`git push origin feature/amazing-feature`)
  5. Bir Pull Request açın

  Daha fazla detay için lütfen [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.

  ## Teşekkürler

  - [Fantasy Premier League API](https://fantasy.premierleague.com/api/) - Veri sağlama için
  - [Model Context Protocol](https://modelcontextprotocol.io/) - Bağlantı standardı için
  - [Claude](https://claude.ai/) - AI asistan yetenekleri için

  ## Atıf

  Bu paketi araştırmanızda veya projenizde kullanırsanız, lütfen bunu alıntılamayı göz önünde bulundurun:

  ```bibtex
  @software{fpl_mcp,
    author = {Jatia, Rishi and Fantasy PL MCP Contributors},
    title = {Fantasy Premier League MCP Server},
    url = {https://github.com/rishijatia/fantasy-pl-mcp},
    version = {0.1.0},
    year = {2025},
  }
  ```
---

# Fantasy Premier League MCP Server

[![PyPI version](https://badge.fury.io/py/fpl-mcp.svg)](https://badge.fury.io/py/fpl-mcp)
[![Package Check](https://github.com/rishijatia/fantasy-pl-mcp/actions/workflows/package-check.yml/badge.svg)](https://github.com/rishijatia/fantasy-pl-mcp/actions/workflows/package-check.yml)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/fpl-mcp)](https://pypi.org/project/fpl-mcp/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://static.pepy.tech/badge/fpl-mcp)](https://pepy.tech/project/fpl-mcp)

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/rishijatia/fantasy-pl-mcp)](https://archestra.ai/mcp-catalog/rishijatia__fantasy-pl-mcp)
<a href="https://glama.ai/mcp/servers/2zxsxuxuj9">
  

A Model Context Protocol (MCP) server that provides access to Fantasy Premier League (FPL) data and tools. This server allows you to interact with FPL data in Claude for Desktop and other MCP-compatible clients.

*Demo of the Fantasy Premier League MCP Server in action*

[![Fantasy Premier League MCP Demo](https://img.youtube.com/vi/QfOOOQ_jeMA/0.jpg)](https://youtu.be/QfOOOQ_jeMA)


## Supported Platforms

- Claude Desktop
- Cursor
- Windsurf
- Other MCP Compatible Desktop LLMs

Mobile is currently not supported.

## Features

- **Rich Player Data**: Access comprehensive player statistics from the FPL API
- **Team Information**: Get details about Premier League teams
- **Gameweek Data**: View current and past gameweek information
- **Player Search**: Find players by name or team
- **Player Comparison**: Compare detailed statistics between any two players

## Requirements

- Python 3.10 or higher
- Claude Desktop (for AI integration)

## Installation

### Option 1: Install from PyPI (Recommended)

```bash
pip install fpl-mcp
```

### Option 1b: Install with Development Dependencies

```bash
pip install "fpl-mcp[dev]"
```

### Option 2: Install from GitHub

```bash
pip install git+https://github.com/rishijatia/fantasy-pl-mcp.git
```

### Option 3: Clone and Install Locally

```bash
git clone https://github.com/rishijatia/fantasy-pl-mcp.git
cd fantasy-pl-mcp
pip install -e .
```

## Running the Server

After installation, you have several options to run the server:

### 1. Using the CLI command

```bash
fpl-mcp
```

### 2. Using the Python module

```bash
python -m fpl_mcp
```

### 3. Using with Claude Desktop

Configure Claude Desktop to use the installed package by editing your `claude_desktop_config.json` file:

**Method 1: Using the Python module directly (most reliable)**

```json
{
  "mcpServers": {
    "fantasy-pl": {
      "command": "python",
      "args": ["-m", "fpl_mcp"]
    }
  }
}
```

**Method 2: Using the installed command with full path (if installed with pip)**

```json
{
  "mcpServers": {
    "fantasy-pl": {
      "command": "/full/path/to/your/venv/bin/fpl-mcp"
    }
  }
}
```

Replace `/full/path/to/your/venv/bin/fpl-mcp` with the actual path to the executable. You can find this by running `which fpl-mcp` in your terminal after activating your virtual environment.

> **Note:** Using just `"command": "fpl-mcp"` may result in a `spawn fpl-mcp ENOENT` error since Claude Desktop might not have access to your virtual environment's PATH. Using the full path or the Python module approach helps avoid this issue.

## Usage

### In Claude for Desktop

1. Start Claude for Desktop
2. You should see FPL tools available via the hammer icon
3. Example queries:
   - "Compare Mohamed Salah and Erling Haaland over the last 5 gameweeks"
   - "Find all Arsenal midfielders"
   - "What's the current gameweek status?"
   - "Show me the top 5 forwards by points"

#### Fantasy-PL MCP Usage Instructions

#### Basic Commands:
- Compare players: "Compare [Player1] and [Player2]"
- Find players: "Find players from [Team]" or "Search for [Player Name]"
- Fixture difficulty: "Show upcoming fixtures for [Team]"
- Captain advice: "Who should I captain between [Player1] and [Player2]?"

#### Advanced Features:
- Statistical analysis: "Compare underlying stats for [Player1] and [Player2]"
- Form check: "Show me players in form right now"
- Differential picks: "Suggest differentials under 10% ownership"
- Team optimization: "Rate my team and suggest transfers"

#### Tips:
- Be specific with player names for accurate results
- Include positions when searching (FWD, MID, DEF, GK)
- For best captain advice, ask about form, fixtures, and underlying stats
- Request comparison of specific metrics (xG, shots in box, etc.   

### MCP Inspector for Development

For development and testing:

```bash
# If you have mcp[cli] installed
mcp dev -m fpl_mcp

# Or use npx
npx @modelcontextprotocol/inspector python -m fpl_mcp
```

## Available Resources
- `fpl://static/players` - All player data with comprehensive statistics
- `fpl://static/players/{name}` - Player data by name search
- `fpl://static/teams` - All Premier League teams
- `fpl://static/teams/{name}` - Team data by name search
- `fpl://gameweeks/current` - Current gameweek data
- `fpl://gameweeks/all` - All gameweeks data
- `fpl://fixtures` - All fixtures for the current season
- `fpl://fixtures/gameweek/{gameweek_id}` - Fixtures for a specific gameweek
- `fpl://fixtures/team/{team_name}` - Fixtures for a specific team
- `fpl://players/{player_name}/fixtures` - Upcoming fixtures for a specific player
- `fpl://gameweeks/blank` - Information about upcoming blank gameweeks
- `fpl://gameweeks/double` - Information about upcoming double gameweeks

## Available Tools
- `get_gameweek_status` - Get precise information about current, previous, and next gameweeks
- `analyze_player_fixtures` - Analyze upcoming fixtures for a player with difficulty ratings
- `get_blank_gameweeks` - Get information about upcoming blank gameweeks
- `get_double_gameweeks` - Get information about upcoming double gameweeks
- `analyze_players` - Filter and analyze FPL players based on multiple criteria
- `analyze_fixtures` - Analyze upcoming fixtures for players, teams, or positions
- `compare_players` - Compare multiple players across various metrics
- `check_fpl_authentication` - Check if FPL authentication is working correctly
- `get_my_team` - View your authenticated team (requires authentication)
- `get_team` - View any team with a specific ID (requires authentication)
- `get_manager_info` - Get manager details (requires authentication)

## Prompt Templates
- `player_analysis_prompt` - Create a prompt for analyzing an FPL player in depth
- `transfer_advice_prompt` - Get advice on player transfers based on budget and position
- `team_rating_prompt` - Create a prompt for rating and analyzing an FPL team
- `differential_players_prompt` - Create a prompt for finding differential players with low ownership
- `chip_strategy_prompt` - Create a prompt for chip strategy advice

## Development

### Adding Features

To add new features:

1. Add resource handlers in the appropriate file within `fpl_mcp/fpl/resources/`
2. Add tool handlers in the appropriate file within `fpl_mcp/fpl/tools/`
3. Update the `__main__.py` file to register new resources and tools
4. Test using the MCP Inspector before deploying to Claude for Desktop

## Authentication

To use features requiring authentication (like accessing your team or private leagues), you need to set up your FPL credentials:

```bash
# Run the credential setup tool
fpl-mcp-config setup
```

This interactive tool will:
1. Prompt for your FPL email, password, and team ID
2. Let you choose between storing in config.json or .env file
3. Save credentials securely to ~/.fpl-mcp/

You can test your authentication with:
```bash
fpl-mcp-config test
```

Alternatively, you can manually configure authentication:
1. Create `~/.fpl-mcp/.env` file with:
   ```
   FPL_EMAIL=your_email@example.com
   FPL_PASSWORD=your_password
   FPL_TEAM_ID=your_team_id
   ```
   
2. Or create `~/.fpl-mcp/config.json`:
   ```json
   {
     "email": "your_email@example.com",
     "password": "your_password",
     "team_id": "your_team_id"
   }
   ```

3. Or set environment variables:
   ```bash
   export FPL_EMAIL=your_email@example.com
   export FPL_PASSWORD=your_password
   export FPL_TEAM_ID=your_team_id
   ```

## Limitations

- The FPL API is not officially documented and may change without notice
- Only read operations are currently supported

## Troubleshooting

### Common Issues

#### 1. "spawn fpl-mcp ENOENT" error in Claude Desktop

This occurs because Claude Desktop cannot find the `fpl-mcp` executable in its PATH.

**Solution:** Use one of these approaches:

- Use the full path to the executable in your config file
  ```json
  {
    "mcpServers": {
      "fantasy-pl": {
        "command": "/full/path/to/your/venv/bin/fpl-mcp"
      }
    }
  }
  ```

- Use Python to run the module directly (preferred method)
  ```json
  {
    "mcpServers": {
      "fantasy-pl": {
        "command": "python",
        "args": ["-m", "fpl_mcp"]
      }
    }
  }
  ```

#### 2. Server disconnects immediately

If the server starts but immediately disconnects:

- Check logs at `~/Library/Logs/Claude/mcp*.log` (macOS) or `%APPDATA%\Claude\logs\mcp*.log` (Windows)
- Ensure all dependencies are installed
- Try running the server manually with `python -m fpl_mcp` to see any errors

#### 3. Server not showing in Claude Desktop

If the hammer icon doesn't appear:

- Restart Claude Desktop completely
- Verify your `claude_desktop_config.json` has correct JSON syntax
- Ensure the path to Python or the executable is absolute, not relative

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For more details, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Acknowledgments

- [Fantasy Premier League API](https://fantasy.premierleague.com/api/) for providing the data
- [Model Context Protocol](https://modelcontextprotocol.io/) for the connectivity standard
- [Claude](https://claude.ai/) for the AI assistant capabilities

## Citation

If you use this package in your research or project, please consider citing it:

```bibtex
@software{fpl_mcp,
  author = {Jatia, Rishi and Fantasy PL MCP Contributors},
  title = {Fantasy Premier League MCP Server},
  url = {https://github.com/rishijatia/fantasy-pl-mcp},
  version = {0.1.0},
  year = {2025},
}
```
