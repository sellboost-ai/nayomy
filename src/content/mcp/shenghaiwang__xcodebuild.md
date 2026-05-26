---
name: "ShenghaiWang/xcodebuild"
description: "Build iOS Xcode workspace/project and feed back errors to llm."
category: "Developer Tools"
repo: "ShenghaiWang/xcodebuild"
stars: 84
url: "https://github.com/ShenghaiWang/xcodebuild"
body_length: 1986
license: "MIT"
language: "Python"
body_tr: |-
  # xcodebuild MCP Server

  iOS workspace/project oluşturmak için Model Context Protocol sunucusu. Visual Studio Code'da Cline veya Roo Code gibi uzantılarla iOS projeleriyle kesintisiz bir iş akışı sağlar.

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ShenghaiWang/xcodebuild)](https://archestra.ai/mcp-catalog/shenghaiwang__xcodebuild)
  <a href="https://glama.ai/mcp/servers/5ibnbzxmql">
    
  </a>

  ### Mevcut Araçlar

  - `build` - iOS Xcode workspace/project oluştur
      - `folder` (string, gerekli): iOS Xcode workspace/project dosyasının bulunduğu klasörün tam yolu
  - `test` - iOS Xcode workspace/project için test çalıştır
      - `folder` (string, gerekli): iOS Xcode workspace/project dosyasının bulunduğu klasörün tam yolu

  ## Kurulum


  ### uv kullanarak (önerilir)

  [`uv`](https://docs.astral.sh/uv/) kullanırken özel bir kurulum gerekmez. *mcpxcodebuild*'i doğrudan çalıştırmak için [`uvx`](https://docs.astral.sh/uv/guides/tools/) kullanacağız.

  ### PIP Kullanarak

  Alternatif olarak `mcpxcodebuild`'i pip aracılığıyla yükleyebilirsiniz:

  ```
  pip install mcpxcodebuild
  ```

  Kurulumdan sonra, bunu script olarak çalıştırabilirsiniz:

  ```
  python -m  mcpxcodebuild
  ```

  ## Yapılandırma

  ### Claude.app için Yapılandırma

  Claude ayarlarınıza ekleyin:

  <details>
  <summary>uvx kullanarak</summary>

  ```json
  "mcpServers": {
    "mcpxcodebuild": {
      "command": "uvx",
      "args": ["mcpxcodebuild"]
    }
  }
  ```
  </details>

  <details>
  <summary>pip yüklemesi kullanarak</summary>

  ```json
  "mcpServers": {
    "mcpxcodebuild": {
      "command": "python",
      "args": ["-m", "mcpxcodebuild"]
    }
  }
  ```
  </details>


  ## Lisans

  xcodebuild MCP aracı MIT Lisansı altında lisanslanmıştır. Bu, MIT Lisansının şartları ve koşullarına tabi olarak yazılımı özgürce kullanma, değiştirme ve dağıtma hakkına sahip olduğunuz anlamına gelir. Daha fazla ayrıntı için lütfen proje deposundaki LICENSE dosyasına bakınız.
---

# xcodebuild MCP Server

A Model Context Protocol server that builds iOS workspace/project that enables seamless workflow working with iOS projects in Visual Studio Code using extensions like Cline or Roo Code.

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ShenghaiWang/xcodebuild)](https://archestra.ai/mcp-catalog/shenghaiwang__xcodebuild)
<a href="https://glama.ai/mcp/servers/5ibnbzxmql">
  
</a>

### Available Tools

- `build` - Build iOS Xcode workspace/project
    - `folder` (string, required): The full path of the current folder that the iOS Xcode workspace/project sits
- `test` - Run test for iOS Xcode workspace/project
    - `folder` (string, required): The full path of the current folder that the iOS Xcode workspace/project sits

## Installation


### Using uv (recommended)

When using [`uv`](https://docs.astral.sh/uv/) no specific installation is needed. We will
use [`uvx`](https://docs.astral.sh/uv/guides/tools/) to directly run *mcpxcodebuild*.

### Using PIP

Alternatively you can install `mcpxcodebuild` via pip:

```
pip install mcpxcodebuild
```

After installation, you can run it as a script using:

```
python -m  mcpxcodebuild
```

## Configuration

### Configure for Claude.app

Add to your Claude settings:

<details>
<summary>Using uvx</summary>

```json
"mcpServers": {
  "mcpxcodebuild": {
    "command": "uvx",
    "args": ["mcpxcodebuild"]
  }
}
```
</details>

<details>
<summary>Using pip installation</summary>

```json
"mcpServers": {
  "mcpxcodebuild": {
    "command": "python",
    "args": ["-m", "mcpxcodebuild"]
  }
}
```
</details>


## License

xcodebuild MCP tool is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
