---
name: "githejie/mcp-server-calculator"
description: "This server enables LLMs to use calculator for precise numerical calculations"
description_tr: "Bu sunucu, LLM'lerin hassas matematiksel hesaplamalar için hesap makinesi kullanmasını sağlar."
category: "Other Tools and Integrations"
repo: "githejie/mcp-server-calculator"
stars: 148
url: "https://github.com/githejie/mcp-server-calculator"
body_length: 1472
license: "MIT"
language: "Python"
body_tr: |-
  # Calculator MCP Server

  Model Context Protocol sunucusu hesaplama için. Bu sunucu, LLM'lerin hassas sayısal hesaplamalar için calculator kullanmasını sağlar.

  ### Kullanılabilir Araçlar

  - `calculate` - Verilen ifadeyi hesaplar/değerlendirir.
    - `expression` (string, gerekli): Hesaplanacak ifade

  ## Kurulum

  ### uv Kullanarak (önerilen)

  [`uv`](https://docs.astral.sh/uv/) kullanırken özel kurulum gerekmez. 
  *mcp-server-calculator* uygulamasını doğrudan çalıştırmak için [`uvx`](https://docs.astral.sh/uv/guides/tools/) kullanacağız.

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  ### PIP Kullanarak

  Alternatif olarak `mcp-server-calculator` uygulamasını pip aracılığıyla kurabilirsiniz:

  ```bash
  pip install mcp-server-calculator
  ```

  Kurulumdan sonra, bunu script olarak çalıştırabilirsiniz:

  ```bash
  python -m mcp_server_calculator
  ```

  ## Yapılandırma

  ### uv Kullanarak (önerilen)

  Bunu MCP client ayarlarınıza ekleyin:

  ```json
  "mcpServers": {
    "calculator": {
      "command": "uvx",
      "args": ["mcp-server-calculator"]
    }
  }
  ```

  ### PIP Kullanarak

  Alternatif olarak bunu MCP client ayarlarınıza ekleyin:

  ```json
  "mcpServers": {
    "calculator": {
      "command": "python",
      "args": ["-m", "mcp_server_calculator"]
    }
  }
  ```

  ## Lisans

  mcp-server-calculator MIT Lisansı altında lisanslanmıştır. Bu, yazılımı MIT Lisansının şartları ve koşullarına tabi olarak kullanma, değiştirme ve dağıtma özgürlüğü vermeniz anlamına gelir. Daha fazla ayrıntı için lütfen proje deposundaki LICENSE dosyasına bakın.
---

# Calculator MCP Server

A Model Context Protocol server for calculating. This server enables LLMs to use calculator for precise numerical calculations.

### Available Tools

- `calculate` - Calculates/evaluates the given expression.
  - `expression` (string, required): Expression to be calculated

## Installation

### Using uv (recommended)

When using [`uv`](https://docs.astral.sh/uv/) no specific installation is needed. We will
use [`uvx`](https://docs.astral.sh/uv/guides/tools/) to directly run *mcp-server-calculator*.

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Using PIP

Alternatively you can install `mcp-server-calculator` via pip:

```bash
pip install mcp-server-calculator
```

After installation, you can run it as a script using:

```bash
python -m mcp_server_calculator
```

## Configuration

### Using uv (recommended)

Add this to your MCP client settings:

```json
"mcpServers": {
  "calculator": {
    "command": "uvx",
    "args": ["mcp-server-calculator"]
  }
}
```

### Using PIP

Alternatively add this to your MCP client settings:

```json
"mcpServers": {
  "calculator": {
    "command": "python",
    "args": ["-m", "mcp_server_calculator"]
  }
}
```

## License

mcp-server-calculator is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
