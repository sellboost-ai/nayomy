---
name: "diivi/aseprite-mcp"
description: "MCP server using the Aseprite API to create pixel art"
category: "Art & Culture"
repo: "diivi/aseprite-mcp"
stars: 178
url: "https://github.com/diivi/aseprite-mcp"
body_length: 1563
license: "MIT"
language: "Python"
body_tr: |-
  # Aseprite MCP Araçları

  Aseprite API ile etkileşim kurmak için MCP sunucusu olarak hizmet veren bir Python modülü

  Cursor'un MCP kullanarak Aseprite'da bulut çizdiği demo:

  https://github.com/user-attachments/assets/572edf75-ab66-4700-87ee-d7d3d196c597

  ## Docker Kullanımı

  ### Hızlı Başlangıç

  Docker image'ını derleyin ve çalıştırın:
  ```bash
  docker build -t aseprite-mcp:latest .
  docker run -it --rm aseprite-mcp:latest
  ```

  Veya sağlanan build scriptlerini kullanın:
  - **Linux/macOS**: `chmod +x build-docker.sh && ./build-docker.sh`
  - **Windows**: `.\build-docker.ps1`

  ### Docker Compose Kullanımı
  ```bash
  # Production
  docker-compose up aseprite-mcp

  # Development modu
  docker-compose --profile dev up aseprite-mcp-dev
  ```

  Detaylı Docker kurulum talimatları için [DOCKER.md](DOCKER.md) dosyasını inceleyin.

  ### İsteğe Bağlı: Steam Üzerinden Aseprite Kurulumu

  Konteyner'in başlatılması sırasında Aseprite'ı SteamCMD aracılığıyla kurmak için Steam kimlik bilgilerini sağlayın:

  ```powershell
  # STEAM_USERNAME/STEAM_PASSWORD (ve isteğe bağlı STEAM_GUARD_CODE) içeren bir .env dosyası oluşturun
  # Ardından
  docker run --rm -i --env-file .env aseprite-mcp:latest
  ```

  Kurulduysa, binary `/opt/steamapps/common/Aseprite/aseprite` konumunda olacak ve `ASEPRITE_PATH` otomatik olarak algılanacaktır.

  ## Yerel Kurulum

  ### Ön Koşullar
  - Python 3.13+
  - `uv` paket yöneticisi

  ### Kurulum:
  ```json
  {
    "mcpServers": {
        "aseprite": {
            "command": "/opt/homebrew/bin/uv",
            "args": [
                "--directory",
                "/path/to/repo",
                "run",
                "-m",
                "aseprite_mcp"
            ]
        }
    }
  }
  ```
---

# Aseprite MCP Tools

A Python module that serves as an MCP server for interacting with the Aseprite API

Demo where Cursor draws a cloud in aseprite using the MCP:

https://github.com/user-attachments/assets/572edf75-ab66-4700-87ee-d7d3d196c597

## Docker Usage

### Quick Start

Build and run the Docker image:
```bash
docker build -t aseprite-mcp:latest .
docker run -it --rm aseprite-mcp:latest
```

Or use the provided build scripts:
- **Linux/macOS**: `chmod +x build-docker.sh && ./build-docker.sh`
- **Windows**: `.\build-docker.ps1`

### Using Docker Compose
```bash
# Production
docker-compose up aseprite-mcp

# Development mode
docker-compose --profile dev up aseprite-mcp-dev
```

See [DOCKER.md](DOCKER.md) for detailed Docker setup instructions.

### Optional: Install Aseprite via Steam

To have the container install Aseprite via SteamCMD at startup, provide Steam credentials:

```powershell
# Create a .env with STEAM_USERNAME/STEAM_PASSWORD (and optional STEAM_GUARD_CODE)
# Then
docker run --rm -i --env-file .env aseprite-mcp:latest
```

If installed, the binary will be at `/opt/steamapps/common/Aseprite/aseprite` and `ASEPRITE_PATH` will be picked up automatically.

## Local Installation

### Prerequisites
- Python 3.13+
- `uv` package manager

### Installation:
```json
{
  "mcpServers": {
      "aseprite": {
          "command": "/opt/homebrew/bin/uv",
          "args": [
              "--directory",
              "/path/to/repo",
              "run",
              "-m",
              "aseprite_mcp"
          ]
      }
  }
}
```
