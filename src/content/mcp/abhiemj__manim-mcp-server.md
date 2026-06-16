---
name: "abhiemj/manim-mcp-server"
description: "A local MCP server that generates animations using Manim."
category: "Art & Culture"
repo: "abhiemj/manim-mcp-server"
stars: 594
url: "https://github.com/abhiemj/manim-mcp-server"
body_length: 3036
license: "MIT"
language: "Python"
body_tr: |-
  # Manim MCP Server

  ![Manim MCP Demo](https://raw.githubusercontent.com/abhiemj/manim-mcp-server/HEAD/Demo-manim-mcp.gif)


  ## Genel Bakış

  Bu, Manim animasyon kodunu çalıştıran ve oluşturulan videoyu döndüren bir MCP (Model Context Protocol) sunucusudur. Kullanıcıların Manim scriptleri göndermesine ve işlenmiş animasyonu almasına olanak tanır.

  ## Özellikler

  - Manim Python scriptlerini çalıştırır.
  - Animasyon çıktısını görünür bir media klasörüne kaydeder.
  - Kullanıcıların çalıştırmadan sonra geçici dosyaları temizlemesine izin verir.
  - Taşınabilir ve ortam değişkenleri aracılığıyla yapılandırılabilir.

  ## Kurulum

  ### Ön Koşullar

  Aşağıdakilerin kurulu olduğundan emin olun:

  - Python 3.8+
  - Manim (Community Version)
  - MCP

  ### Manim'i Yükleyin

  ```sh
  pip install manim
  ```

  ### MCP'yi Yükleyin

  ```sh
  pip install mcp
  ```

  ### Repository'i Klonlayın

  ```sh
  git clone https://github.com/abhiemj/manim-mcp-server.git
  cd manim-mcp-server
  ```

  ## Claude ile Entegrasyon

  Manim MCP sunucusunu Claude ile entegre etmek için, `claude_desktop_config.json` dosyanıza aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
       "manim-server": {
        "command": "/absolute/path/to/python",
        "args": [
          "/absolute/path/to/manim-mcp-server/src/manim_server.py"
        ],
        "env": {
          "MANIM_EXECUTABLE": "/Users/[Your_username]/anaconda3/envs/manim2/Scripts/manim.exe"
        }
      }
    }
  }
  ```

  ### Python Yolunu Bulma

  Python executable yolunu bulmak için aşağıdaki komutu kullanın:

  #### Windows (PowerShell):
  ```sh
  (Get-Command python).Source
  ```

  #### Windows (Command Prompt/Terminal):
  ```sh
  where python
  ```

  #### Linux/macOS (Terminal):
  ```sh
  which python
  ```

  Bu, Claude'un Manim MCP sunucusuyla iletişim kurmasını ve animasyonları dinamik olarak oluşturmasını sağlar.

  ## Katkı Yapma

  1. Repository'i fork edin.
  2. Yeni bir branch oluşturun:
     ```sh
     git checkout -b add-feature
     ```
  3. Değişiklikleri yapın ve commit edin:
     ```sh
     git commit -m "Added a new feature"
     ```
  4. Fork'unuza push edin:
     ```sh
     git push origin add-feature
     ```
  5. Bir pull request açın.

  ## Lisans

  Bu MCP sunucusu MIT Lisansı altında lisanslanmıştır. Bu, MIT Lisansı'nın şart ve koşullarına tabi olarak yazılımı kullanmakta, değiştirmekte ve dağıtmakta özgür olduğunuz anlamına gelir. Daha fazla ayrıntı için lütfen proje repository'sindeki LICENSE dosyasına bakın.

  ## Yazar

  **[abhiemj](https://github.com/abhiemj)** tarafından oluşturulmuştur. Katkılar memnuniyetle karşılanır! 🚀

  ### **Awesome MCP Servers'ta Listelendi**  
  Bu repository, [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) repository'sinde **Animation & Video** kategorisinde yer almaktadır. Diğer harika MCP sunucu uygulamalarıyla birlikte kontrol edin!


  ## **Teşekkürler**  
  - [Manim Community](https://www.manim.community/)'ye harika animasyon kütüphaneleri için.  
  - Açık kaynak MCP ekosisteminden ilham alınmıştır.

  ## Beni şurada bulun
  <a href="https://www.instagram.com/aiburner_official" target="blank"></a>
  @aiburner_official
---

# Manim MCP Server

![Manim MCP Demo](https://raw.githubusercontent.com/abhiemj/manim-mcp-server/HEAD/Demo-manim-mcp.gif)


## Overview

This is an MCP (Model Context Protocol) server that executes Manim animation code and returns the generated video. It allows users to send Manim scripts and receive the rendered animation.

## Features

- Executes Manim Python scripts.
- Saves animation output in a visible media folder.
- Allows users to clean up temporary files after execution.
- Portable and configurable via environment variables.

## Installation

### Prerequisites

Ensure you have the following installed:

- Python 3.8+
- Manim (Community Version)
- MCP

### Install Manim

```sh
pip install manim
```

### Install MCP

```sh
pip install mcp
```

### Clone the Repository

```sh
git clone https://github.com/abhiemj/manim-mcp-server.git
cd manim-mcp-server
```

## Integration with Claude

To integrate the Manim MCP server with Claude, add the following to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
     "manim-server": {
      "command": "/absolute/path/to/python",
      "args": [
        "/absolute/path/to/manim-mcp-server/src/manim_server.py"
      ],
      "env": {
        "MANIM_EXECUTABLE": "/Users/[Your_username]/anaconda3/envs/manim2/Scripts/manim.exe"
      }
    }
  }
}
```

### Finding Your Python Path

To find your Python executable path, use the following command:

#### Windows (PowerShell):
```sh
(Get-Command python).Source
```

#### Windows (Command Prompt/Terminal):
```sh
where python
```

#### Linux/macOS (Terminal):
```sh
which python
```

This ensures that Claude can communicate with the Manim MCP server to generate animations dynamically.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b add-feature
   ```
3. Make changes and commit:
   ```sh
   git commit -m "Added a new feature"
   ```
4. Push to your fork:
   ```sh
   git push origin add-feature
   ```
5. Open a pull request.

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.

## Author

Created by **[abhiemj](https://github.com/abhiemj)**. Contributions welcome! 🚀

### **Listed in Awesome MCP Servers**  
This repository is featured in the [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) repository under the **Animation & Video** category. Check it out along with other great MCP server implementations!


## **Acknowledgments**  
- Thanks to the [Manim Community](https://www.manim.community/) for their amazing animation library.  
- Inspired by the open-source MCP ecosystem.

## Find me at
<a href="https://www.instagram.com/aiburner_official" target="blank"></a>
@aiburner_official
