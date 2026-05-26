---
name: "xzq-xu/jvm-mcp-server"
description: "An implementation project of a JVM-based MCP (Model Context Protocol) server."
description_tr: "JVM tabanlı bir MCP (Model Context Protocol) sunucusunun implementasyon projesi."
category: "Developer Tools"
repo: "xzq-xu/jvm-mcp-server"
stars: 85
url: "https://github.com/xzq-xu/jvm-mcp-server"
body_length: 7549
license: "MIT"
language: "Python"
body_tr: |-
  # JVM MCP Server

  <p align="center">
    
    
    
  </p>

  [English](README.md) | [中文](README_zh.md)

  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/xzq-xu-jvm-mcp-server-badge.png)](https://mseep.ai/app/xzq-xu-jvm-mcp-server)


  Native JDK araçlarına dayanan hafif bir JVM izleme ve tanılama MCP (Multi-Agent Communication Protocol) sunucu uygulaması. AI ajanlarına Arthas gibi üçüncü taraf araçlar gerektirmeden Java uygulamalarını izleme ve analiz etme konusunda güçlü yetenekler sağlar.

  <a href="https://glama.ai/mcp/servers/@xzq-xu/jvm-mcp-server">
    
  </a>

  ## Barındırılan dağıtım

  Barındırılan bir dağıtım [Fronteir AI](https://fronteir.ai/mcp/xzq-xu-jvm-mcp-server) üzerinde mevcuttur.

  ## Özellikler

  - **Sıfır Bağımlılık**: Yalnızca native JDK araçlarını kullanır (jps, jstack, jmap, vb.)
  - **Hafif**: Agent tabanlı çözümlere kıyasla minimal kaynak tüketimi
  - **Yüksek Uyumluluk**: Tüm Java sürümleri ve platformlarında çalışır
  - **Non-Intrusive**: Hedef uygulamalarda hiçbir değişiklik gerekmez
  - **Güvenli**: Yalnızca JDK tarafından onaylanmış araç ve komutları kullanır
  - **Uzak İzleme**: SSH aracılığıyla yerel ve uzak JVM izlemesini destekler

  ## Temel Yetenekler

  ### Temel İzleme
  - Java işlem listesi ve tanımlama
  - JVM temel bilgileri alma
  - Bellek kullanımı izleme
  - Thread bilgisi ve stack trace analizi
  - Sınıf yükleme istatistikleri
  - Detaylı sınıf yapısı bilgileri

  ### Gelişmiş Özellikler
  - Method çağrı yolu analizi
  - Sınıf decompilasyonu
  - Method arama ve inceleme
  - Method çağrısı izleme
  - Logger seviyesi yönetimi
  - Sistem kaynakları dashboard

  ## Sistem Gereksinimleri

  - Python 3.6+
  - JDK 8+
  - Linux/Unix/Windows OS
  - SSH erişimi (uzak izleme için)

  ## Kurulum

  ### uv kullanarak (Önerilir)

  ```bash
  # Eğer kurulu değilse uv yükleyin
  curl -LsSf https://astral.sh/uv/install.sh | sh  # Linux/macOS
  # veya
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"  # Windows

  # Paketi yükleyin
  uv pip install jvm-mcp-server
  ```

  ### pip kullanarak

  ```bash
  pip install jvm-mcp-server
  ```

  ### Kaynaktan

  ```bash
  # Deposunu klonlayın
  git clone https://github.com/your-repo/jvm-mcp-server.git
  cd jvm-mcp-server

  # uv kullanarak (önerilir)
  uv venv  # Sanal ortam oluşturun
  uv sync  # Bağımlılıkları yükleyin

  # Veya geliştirme modunda yükleyin
  uv pip install -e .
  ```

  ## Hızlı Başlangıç

  ### Sunucuyu Başlatma

  #### uv kullanarak (Önerilir)

  ```bash
  # Yerel mod
  uv run jvm-mcp-server

  # Uzak mod için ortam değişkenleri dosyası kullanarak
  uv run --env-file .env jvm-mcp-server

  # Belirli dizinde
  uv --directory /path/to/project run --env-file .env jvm-mcp-server
  ```

  #### uvx kullanarak

  ```bash
  # Yerel mod
  uvx run jvm-mcp-server

  # Ortam değişkenleriyle
  uvx run --env-file .env jvm-mcp-server
  ```

  #### Python ile doğrudan

  ```python
  from jvm_mcp_server import JvmMcpServer

  # Yerel mod
  server = JvmMcpServer()
  server.run()

  # Uzak mod (ortam değişkenleriyle)
  # SSH_HOST, SSH_PORT, SSH_USER, SSH_PASSWORD veya SSH_KEY ayarlayın
  import os
  os.environ['SSH_HOST'] = 'user@remote-host'
  os.environ['SSH_PORT'] = '22'
  server = JvmMcpServer()
  server.run()
  ```

  ### MCP Yapılandırması ile Kullanım

  ```json
  {
    "mcpServers": {
      "jvm-mcp-server": {
        "command": "uv",
        "args": [
          "--directory",
          "/path/to/jvm-mcp-server",
          "run",
          "--env-file",
          "/path/to/jvm-mcp-server/.env",
          "jvm-mcp-server"
        ]
      }
    }
  }
  ```

  ## Mevcut Araçlar

  JVM-MCP-Server, JVM izleme ve tanılaması için kapsamlı bir araç seti sağlar:

  - `list_java_processes`: Tüm Java işlemlerini listele
  - `get_thread_info`: Belirli bir işlem için thread bilgisi al
  - `get_jvm_info`: JVM temel bilgilerini al
  - `get_memory_info`: Bellek kullanımı bilgisini al
  - `get_stack_trace`: Thread stack trace bilgisini al
  - `get_class_info`: Yapı dahil ayrıntılı sınıf bilgisini al
  - `get_stack_trace_by_method`: Method çağrı yolunu al
  - `decompile_class`: Sınıf kaynak kodunu decompile et
  - `search_method`: Sınıflarda method ara
  - `watch_method`: Method çağrılarını izle
  - `get_logger_info`: Logger bilgisini al
  - `set_logger_level`: Logger seviyelerini ayarla
  - `get_dashboard`: Sistem kaynakları dashboard'ını al
  - `get_jcmd_output`: JDK jcmd komutlarını çalıştır
  - `get_jstat_output`: JDK jstat komutlarını çalıştır

  Her araç hakkında detaylı dokumentasyon için bkz. [Mevcut Araçlar](./doc/available_tools.md).

  ## Mimari

  JVM-MCP-Server modüler bir mimari üzerine inşa edilmiştir:

  1. **Komut Katmanı**: JDK native komutlarını sarmalanır
  2. **Executor Katmanı**: Yerel ve uzak komut yürütülmesini yönetir
  3. **Formatter Katmanı**: Komut çıktısını işler ve biçimlendirir
  4. **MCP Arayüzü**: FastMCP protokolü aracılığıyla işlevselliği sunar

  ### Temel Bileşenler

  - `BaseCommand`: Tüm komutlar için soyut temel sınıf
  - `CommandExecutor`: Komut yürütülmesi arayüzü (yerel ve uzak)
  - `OutputFormatter`: Komut çıktısını biçimlendirme arayüzü
  - `JvmMcpServer`: Tüm araçları kaydeden ana sunucu sınıfı

  ## Geliştirme Durumu

  Proje aktif geliştirme aşamasındadır. Mevcut ilerleme için [Native_TODO.md](Native_TODO.md) bölümüne bakın.

  ### Tamamlanan
  - Temel mimari ve komut framework
  - Temel komutlar uygulaması (jps, jstack, jmap, jinfo, jcmd, jstat)
  - Sınıf bilgisi alma sistemi
  - MCP araç parametre tipi uyumluluk düzeltmeleri

  ### Devam Eden
  - Caching mekanizması
  - Method tracing
  - Performans izleme
  - Hata işleme iyileştirmeleri

  ## Katkı Sağlama

  Katkılar hoşlanmaktadır! Lütfen bir Pull Request göndermekten çekinmeyin.

  1. Deposunu fork edin
  2. Özellik dalınızı oluşturun (`git checkout -b feature/amazing-feature`)
  3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
  4. Dalı push edin (`git push origin feature/amazing-feature`)
  5. Bir Pull Request açın

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

  ## Teşekkürler

  - JDK araçları dokumentasyonu
  - FastMCP protokolü spesifikasyonu
  - Katkıda bulunanlar ve test ediciler

  ## İzin Gereksinimleri

  Bazı JVM tanılama komutları (jstack, jmap, jinfo, jcmd, vb.) hedef JVM işlemine bağlanmak için yeterli izinler gerektirir. İzin hatalarıyla karşılaşırsanız, aşağıdaki çözümleri deneyin:

  ### Yaygın Hatalar

  - `Permission denied`: Yeterli izin yok
  - `Unable to open socket file`: JVM işlemine bağlanılamıyor
  - `No such process`: İşlem mevcut değil veya çıkış yaptı

  ### Çözümler

  1. **sudo ile çalıştırın** (önerilir): `sudo uv run jvm-mcp-server`
  2. **Hedef Java işlemiyle aynı kullanıcı olarak çalıştırın**: Java işleminin kullanıcı ID'sini kontrol edin ve bu kullanıcı olarak çalıştırın
  3. **JDK'ye experimental attach izni ekleyin**: JVM başlatma argümanlarına ekleyin:
     ```
     -XX:+AllowRedefinitionToAddDeleteMethods
     ```
  4. **Docker'da**: Konteynerın yeterli izinlere sahip olduğundan emin olun (--privileged veya /proc mount)

  Not: `list_java_processes` jps komutunu kullanır ve özel izinler gerektirmez. Diğer komutlar yukarıdaki çözümlere göre yapılandırılması gerekebilir.
---

# JVM MCP Server

<p align="center">
  
  
  
</p>

[English](README.md) | [中文](README_zh.md)

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/xzq-xu-jvm-mcp-server-badge.png)](https://mseep.ai/app/xzq-xu-jvm-mcp-server)


A lightweight JVM monitoring and diagnostic MCP (Multi-Agent Communication Protocol) server implementation based on native JDK tools. Provides AI agents with powerful capabilities to monitor and analyze Java applications without requiring third-party tools like Arthas.

<a href="https://glama.ai/mcp/servers/@xzq-xu/jvm-mcp-server">
  
</a>

## Hosted deployment

A hosted deployment is available on [Fronteir AI](https://fronteir.ai/mcp/xzq-xu-jvm-mcp-server).

## Features

- **Zero Dependencies**: Uses only native JDK tools (jps, jstack, jmap, etc.)
- **Lightweight**: Minimal resource consumption compared to agent-based solutions
- **High Compatibility**: Works with all Java versions and platforms
- **Non-Intrusive**: No modifications to target applications required
- **Secure**: Uses only JDK certified tools and commands
- **Remote Monitoring**: Support for both local and remote JVM monitoring via SSH

## Core Capabilities

### Basic Monitoring
- Java process listing and identification
- JVM basic information retrieval
- Memory usage monitoring
- Thread information and stack trace analysis
- Class loading statistics
- Detailed class structure information

### Advanced Features
- Method call path analysis
- Class decompilation
- Method search and inspection
- Method invocation monitoring
- Logger level management
- System resource dashboard

## System Requirements

- Python 3.6+
- JDK 8+
- Linux/Unix/Windows OS
- SSH access (for remote monitoring)

## Installation

### Using uv (Recommended)

```bash
# Install uv if not already installed
curl -LsSf https://astral.sh/uv/install.sh | sh  # Linux/macOS
# or
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"  # Windows

# Install the package
uv pip install jvm-mcp-server
```

### Using pip

```bash
pip install jvm-mcp-server
```

### From Source

```bash
# Clone the repository
git clone https://github.com/your-repo/jvm-mcp-server.git
cd jvm-mcp-server

# Using uv (recommended)
uv venv  # Create virtual environment
uv sync  # Install dependencies

# Or install in development mode
uv pip install -e .
```

## Quick Start

### Starting the Server

#### Using uv (Recommended)

```bash
# Local mode
uv run jvm-mcp-server

# Using environment variables file for remote mode
uv run --env-file .env jvm-mcp-server

# In specific directory
uv --directory /path/to/project run --env-file .env jvm-mcp-server
```

#### Using uvx

```bash
# Local mode
uvx run jvm-mcp-server

# With environment variables
uvx run --env-file .env jvm-mcp-server
```

#### Using Python directly

```python
from jvm_mcp_server import JvmMcpServer

# Local mode
server = JvmMcpServer()
server.run()

# Remote mode (via environment variables)
# Set SSH_HOST, SSH_PORT, SSH_USER, SSH_PASSWORD or SSH_KEY
import os
os.environ['SSH_HOST'] = 'user@remote-host'
os.environ['SSH_PORT'] = '22'
server = JvmMcpServer()
server.run()
```

### Using with MCP Configuration

```json
{
  "mcpServers": {
    "jvm-mcp-server": {
      "command": "uv",
      "args": [
        "--directory",
        "/path/to/jvm-mcp-server",
        "run",
        "--env-file",
        "/path/to/jvm-mcp-server/.env",
        "jvm-mcp-server"
      ]
    }
  }
}
```

## Available Tools

JVM-MCP-Server provides a comprehensive set of tools for JVM monitoring and diagnostics:

- `list_java_processes`: List all Java processes
- `get_thread_info`: Get thread information for a specific process
- `get_jvm_info`: Get JVM basic information
- `get_memory_info`: Get memory usage information
- `get_stack_trace`: Get thread stack trace information
- `get_class_info`: Get detailed class information including structure
- `get_stack_trace_by_method`: Get method call path
- `decompile_class`: Decompile class source code
- `search_method`: Search for methods in classes
- `watch_method`: Monitor method invocations
- `get_logger_info`: Get logger information
- `set_logger_level`: Set logger levels
- `get_dashboard`: Get system resource dashboard
- `get_jcmd_output`: Execute JDK jcmd commands
- `get_jstat_output`: Execute JDK jstat commands

For detailed documentation on each tool, see [Available Tools](./doc/available_tools.md).

## Architecture

JVM-MCP-Server is built on a modular architecture:

1. **Command Layer**: Wraps JDK native commands
2. **Executor Layer**: Handles local and remote command execution
3. **Formatter Layer**: Processes and formats command output
4. **MCP Interface**: Exposes functionality through FastMCP protocol

### Key Components

- `BaseCommand`: Abstract base class for all commands
- `CommandExecutor`: Interface for command execution (local and remote)
- `OutputFormatter`: Interface for formatting command output
- `JvmMcpServer`: Main server class that registers all tools

## Development Status

The project is in active development. See [Native_TODO.md](Native_TODO.md) for current progress.

### Completed
- Core architecture and command framework
- Basic commands implementation (jps, jstack, jmap, jinfo, jcmd, jstat)
- Class information retrieval system
- MCP tool parameter type compatibility fixes

### In Progress
- Caching mechanism
- Method tracing
- Performance monitoring
- Error handling improvements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

NP|## Acknowledgements
#MH|
#TK|- JDK tools documentation
#WY|- FastMCP protocol specification
#JK|- Contributors and testers
#BP|
#KG|## Permission Requirements
#YM|
#KB|Some JVM diagnostic commands (jstack, jmap, jinfo, jcmd, etc.) require sufficient permissions to attach to the target JVM process. If you encounter permission errors, try the following solutions:
#YB|
#KB|### Common Errors
#RR|
#KB|- `Permission denied`: Insufficient permissions
#YZ|- `Unable to open socket file`: Cannot connect to JVM process
#KD|- `No such process`: Process does not exist or has exited
#MH|
#KB|### Solutions
#BR|
#KB|1. **Run with sudo** (recommended): `sudo uv run jvm-mcp-server`
#XZ|2. **Run as the same user as target Java process**: Check the user ID of the Java process and run as that user
#HM|3. **Add experimental attach permission to JDK**: Add to JVM startup arguments:
#   ```
#   -XX:+AllowRedefinitionToAddDeleteMethods
#   ```
#XQ|4. **In Docker**: Ensure the container has sufficient permissions (--privileged or mount /proc)
#KB|
#KB|Note: `list_java_processes` uses the jps command and does not require special permissions. Other commands may need to be configured according to the solutions above.

- JDK tools documentation
- FastMCP protocol specification
- Contributors and testers
