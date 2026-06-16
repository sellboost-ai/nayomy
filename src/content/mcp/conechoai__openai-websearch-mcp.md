---
name: "ConechoAI/openai-websearch-mcp"
description: "This is a Python-based MCP server that provides OpenAI web_search build-in tool."
category: "Search & Data Extraction"
repo: "ConechoAI/openai-websearch-mcp"
stars: 89
url: "https://github.com/ConechoAI/openai-websearch-mcp"
body_length: 7356
license: "MIT"
language: "Python"
body_tr: |-
  # OpenAI WebSearch MCP Server 🔍

  [![PyPI version](https://badge.fury.io/py/openai-websearch-mcp.svg)](https://badge.fury.io/py/openai-websearch-mcp)
  [![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
  [![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-green.svg)](https://modelcontextprotocol.io/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  OpenAI'nin reasoning modellerini kullanan akıllı web arama yetenekleri sağlayan ileri seviye bir MCP sunucusu. Güncel bilgiye ve akıllı reasoning yeteneklerine ihtiyaç duyan AI asistanları için mükemmeldir.

  ## ✨ Özellikler

  - **🧠 Reasoning Model Desteği**: OpenAI'nin en son reasoning modelleriyle tam uyumluluk (gpt-5, gpt-5-mini, gpt-5-nano, o3, o4-mini)
  - **⚡ Akıllı Çaba Kontrolü**: Kullanım durumuna göre akıllı `reasoning_effort` varsayılanları
  - **🔄 Çok Modlu Arama**: gpt-5-mini ile hızlı iterasyonlar veya gpt-5 ile derin araştırma
  - **🌍 Yerelleştirilmiş Sonuçlar**: Konum tabanlı arama özelleştirmesi desteği
  - **📝 Zengin Açıklamalar**: Kolay entegrasyon için tam parametre dokumentasyonu
  - **🔧 Esnek Konfigürasyon**: Kolay dağıtım için environment variable desteği

  ## 🚀 Hızlı Başlangıç

  ### Claude Desktop için Tek Tıkla Kurulum

  ```bash
  OPENAI_API_KEY=sk-xxxx uvx --with openai-websearch-mcp openai-websearch-mcp-install
  ```

  `sk-xxxx` yerine [OpenAI Platform](https://platform.openai.com/)'dan aldığınız OpenAI API anahtarını yazın.

  ## ⚙️ Konfigürasyon

  ### Claude Desktop

  `claude_desktop_config.json` dosyanıza şu satırları ekleyin:

  ```json
  {
    "mcpServers": {
      "openai-websearch-mcp": {
        "command": "uvx",
        "args": ["openai-websearch-mcp"],
        "env": {
          "OPENAI_API_KEY": "your-api-key-here",
          "OPENAI_DEFAULT_MODEL": "gpt-5-mini"
        }
      }
    }
  }
  ```

  ### Cursor

  Cursor'da MCP ayarlarına şunu ekleyin:

  1. Cursor Ayarlarını açın (`Cmd/Ctrl + ,`)
  2. "MCP" araması yapın veya Extensions → MCP'ye gidin
  3. Sunucu konfigürasyonunu ekleyin:

  ```json
  {
    "mcpServers": {
      "openai-websearch-mcp": {
        "command": "uvx",
        "args": ["openai-websearch-mcp"],
        "env": {
          "OPENAI_API_KEY": "your-api-key-here",
          "OPENAI_DEFAULT_MODEL": "gpt-5-mini"
        }
      }
    }
  }
  ```

  ### Claude Code

  Claude Code, Claude Desktop için yapılandırılmış MCP sunucularını otomatik olarak algılar. Claude Desktop ile aynı konfigürasyonu kullanın.

  ### Yerel Geliştirme

  Yerel test için sanal ortamınıza tam yolu kullanın:

  ```json
  {
    "mcpServers": {
      "openai-websearch-mcp": {
        "command": "/path/to/your/project/.venv/bin/python",
        "args": ["-m", "openai_websearch_mcp"],
        "env": {
          "OPENAI_API_KEY": "your-api-key-here",
          "OPENAI_DEFAULT_MODEL": "gpt-5-mini",
          "PYTHONPATH": "/path/to/your/project/src"
        }
      }
    }
  }
  ```

  ## 🛠️ Mevcut Araçlar

  ### `openai_web_search`

  Reasoning model desteğiyle akıllı web arama.

  #### Parametreler

  | Parametre | Tür | Açıklama | Varsayılan |
  |-----------|------|----------|---------|
  | `input` | `string` | Arama sorgusu veya soru | *Zorunlu* |
  | `model` | `string` | Kullanılacak AI modeli. Desteklenen: gpt-4o, gpt-4o-mini, gpt-5, gpt-5-mini, gpt-5-nano, o3, o4-mini | `gpt-5-mini` |
  | `reasoning_effort` | `string` | Reasoning çaba seviyesi: low, medium, high, minimal | Akıllı varsayılan |
  | `type` | `string` | Web arama API versiyonu | `web_search_preview` |
  | `search_context_size` | `string` | Bağlam miktarı: low, medium, high | `medium` |
  | `user_location` | `object` | Yerelleştirilmiş sonuçlar için isteğe bağlı konum | `null` |

  ## 💬 Kullanım Örnekleri

  Konfigürasyondan sonra, AI asistanınızdan doğal dil kullanarak bilgi aramasını isteyebilirsiniz:

  ### Hızlı Arama
  > "openai_web_search kullanarak AI reasoning modellerindeki son gelişmeleri ara"

  ### Derin Araştırma  
  > "Kuantum bilişim atılımları hakkında kapsamlı bir analiz sunmak için openai_web_search'ü gpt-5 ve high reasoning effort ile kullan"

  ### Yerelleştirilmiş Arama
  > "openai_web_search kullanarak bu hafta San Francisco'da yerel teknoloji buluşmalarını ara"

  AI asistanı, isteğinize göre uygun parametrelerle `openai_web_search` aracını otomatik olarak kullanacaktır.

  ## 🤖 Model Seçimi Rehberi

  ### Hızlı Çok Turlu Aramalar 🚀
  - **Tavsiye Edilen**: `gpt-5-mini` ile `reasoning_effort: "low"`
  - **Kullanım Durumu**: Hızlı iterasyonlar, gerçek zamanlı bilgi, çoklu hızlı sorgular
  - **Faydaları**: Daha düşük gecikme, sık aramalar için uygun maliyetli

  ### Derin Araştırma 🔬
  - **Tavsiye Edilen**: `gpt-5` ile `reasoning_effort: "medium"` veya `"high"`
  - **Kullanım Durumu**: Kapsamlı analiz, karmaşık konular, detaylı araştırma
  - **Faydaları**: Çok turlu reasoning sonuçları, agent iterasyonlarına gerek yok

  ### Model Karşılaştırması

  | Model | Reasoning | Varsayılan Çaba | En İyi Kullanım |
  |-------|-----------|----------------|----------|
  | `gpt-4o` | ❌ | N/A | Standart arama |
  | `gpt-4o-mini` | ❌ | N/A | Basit sorgular |
  | `gpt-5-mini` | ✅ | `low` | Hızlı iterasyonlar |
  | `gpt-5` | ✅ | `medium` | Derin araştırma |
  | `gpt-5-nano` | ✅ | `medium` | Dengeli yaklaşım |
  | `o3` | ✅ | `medium` | İleri reasoning |
  | `o4-mini` | ✅ | `medium` | Verimli reasoning |

  ## 📦 Kurulum

  ### uvx Kullanarak (Tavsiye Edilir)

  ```bash
  # Doğrudan kur ve çalıştır
  uvx openai-websearch-mcp

  # Veya global olarak kur
  uvx install openai-websearch-mcp
  ```

  ### pip Kullanarak

  ```bash
  # PyPI'den kur
  pip install openai-websearch-mcp

  # Sunucuyu çalıştır
  python -m openai_websearch_mcp
  ```

  ### Kaynaktan

  ```bash
  # Repository'i klonla
  git clone https://github.com/yourusername/openai-websearch-mcp.git
  cd openai-websearch-mcp

  # Bağımlılıkları yükle
  uv sync

  # Geliştirme modunda çalıştır
  uv run python -m openai_websearch_mcp
  ```

  ## 👩‍💻 Geliştirme

  ### Geliştirme Ortamını Kur

  ```bash
  # Klonla ve kur
  git clone https://github.com/yourusername/openai-websearch-mcp.git
  cd openai-websearch-mcp

  # Sanal ortam oluştur ve bağımlılıkları yükle
  uv sync

  # Testleri çalıştır
  uv run python -m pytest

  # Geliştirme modunda kur
  uv pip install -e .
  ```

  ### Environment Değişkenleri

  | Değişken | Açıklama | Varsayılan |
  |----------|----------|---------|
  | `OPENAI_API_KEY` | OpenAI API anahtarınız | *Zorunlu* |
  | `OPENAI_DEFAULT_MODEL` | Kullanılacak varsayılan model | `gpt-5-mini` |

  ## 🐛 Hata Ayıklama

  ### MCP Inspector Kullanarak

  ```bash
  # uvx kurulumları için
  npx @modelcontextprotocol/inspector uvx openai-websearch-mcp

  # pip kurulumları için
  npx @modelcontextprotocol/inspector python -m openai_websearch_mcp
  ```

  ### Yaygın Sorunlar

  **Sorun**: "Unsupported parameter: 'reasoning.effort'"
  **Çözüm**: Bu, reasoning_effort parametresiyle non-reasoning modelleri (gpt-4o, gpt-4o-mini) kullanırken oluşur. Sunucu bunu otomatik olarak, reasoning parametrelerini yalnızca uyumlu modellere uygulayarak ele alır.

  **Sorun**: "No module named 'openai_websearch_mcp'"
  **Çözüm**: Paketi doğru kurduğunuzdan ve Python yolunuzun paket konumunu içerdiğinden emin olun.

  ## 📄 Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

  ## 🙏 Teşekkürler

  - 🤖 [Claude Code](https://claude.ai/code) ile oluşturulmuştur
  - 🔥 [OpenAI'nin Web Search API](https://openai.com)'si tarafından desteklenmektedir
  - 🛠️ [Model Context Protocol](https://modelcontextprotocol.io/) üzerine inşa edilmiştir

  ---

  **Co-Authored-By**: Claude <noreply@anthropic.com>
---

# OpenAI WebSearch MCP Server 🔍

[![PyPI version](https://badge.fury.io/py/openai-websearch-mcp.svg)](https://badge.fury.io/py/openai-websearch-mcp)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-green.svg)](https://modelcontextprotocol.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An advanced MCP server that provides intelligent web search capabilities using OpenAI's reasoning models. Perfect for AI assistants that need up-to-date information with smart reasoning capabilities.

## ✨ Features

- **🧠 Reasoning Model Support**: Full compatibility with OpenAI's latest reasoning models (gpt-5, gpt-5-mini, gpt-5-nano, o3, o4-mini)
- **⚡ Smart Effort Control**: Intelligent `reasoning_effort` defaults based on use case
- **🔄 Multi-Mode Search**: Fast iterations with gpt-5-mini or deep research with gpt-5
- **🌍 Localized Results**: Support for location-based search customization
- **📝 Rich Descriptions**: Complete parameter documentation for easy integration
- **🔧 Flexible Configuration**: Environment variable support for easy deployment

## 🚀 Quick Start

### One-Click Installation for Claude Desktop

```bash
OPENAI_API_KEY=sk-xxxx uvx --with openai-websearch-mcp openai-websearch-mcp-install
```

Replace `sk-xxxx` with your OpenAI API key from the [OpenAI Platform](https://platform.openai.com/).

## ⚙️ Configuration

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "openai-websearch-mcp": {
      "command": "uvx",
      "args": ["openai-websearch-mcp"],
      "env": {
        "OPENAI_API_KEY": "your-api-key-here",
        "OPENAI_DEFAULT_MODEL": "gpt-5-mini"
      }
    }
  }
}
```

### Cursor

Add to your MCP settings in Cursor:

1. Open Cursor Settings (`Cmd/Ctrl + ,`)
2. Search for "MCP" or go to Extensions → MCP
3. Add server configuration:

```json
{
  "mcpServers": {
    "openai-websearch-mcp": {
      "command": "uvx",
      "args": ["openai-websearch-mcp"],
      "env": {
        "OPENAI_API_KEY": "your-api-key-here",
        "OPENAI_DEFAULT_MODEL": "gpt-5-mini"
      }
    }
  }
}
```

### Claude Code

Claude Code automatically detects MCP servers configured for Claude Desktop. Use the same configuration as above for Claude Desktop.

### Local Development

For local testing, use the absolute path to your virtual environment:

```json
{
  "mcpServers": {
    "openai-websearch-mcp": {
      "command": "/path/to/your/project/.venv/bin/python",
      "args": ["-m", "openai_websearch_mcp"],
      "env": {
        "OPENAI_API_KEY": "your-api-key-here",
        "OPENAI_DEFAULT_MODEL": "gpt-5-mini",
        "PYTHONPATH": "/path/to/your/project/src"
      }
    }
  }
}
```

## 🛠️ Available Tools

### `openai_web_search`

Intelligent web search with reasoning model support.

#### Parameters

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `input` | `string` | The search query or question to search for | *Required* |
| `model` | `string` | AI model to use. Supports gpt-4o, gpt-4o-mini, gpt-5, gpt-5-mini, gpt-5-nano, o3, o4-mini | `gpt-5-mini` |
| `reasoning_effort` | `string` | Reasoning effort level: low, medium, high, minimal | Smart default |
| `type` | `string` | Web search API version | `web_search_preview` |
| `search_context_size` | `string` | Context amount: low, medium, high | `medium` |
| `user_location` | `object` | Optional location for localized results | `null` |

## 💬 Usage Examples

Once configured, simply ask your AI assistant to search for information using natural language:

### Quick Search
> "Search for the latest developments in AI reasoning models using openai_web_search"

### Deep Research  
> "Use openai_web_search with gpt-5 and high reasoning effort to provide a comprehensive analysis of quantum computing breakthroughs"

### Localized Search
> "Search for local tech meetups in San Francisco this week using openai_web_search"

The AI assistant will automatically use the `openai_web_search` tool with appropriate parameters based on your request.

## 🤖 Model Selection Guide

### Quick Multi-Round Searches 🚀
- **Recommended**: `gpt-5-mini` with `reasoning_effort: "low"`
- **Use Case**: Fast iterations, real-time information, multiple quick queries
- **Benefits**: Lower latency, cost-effective for frequent searches

### Deep Research 🔬
- **Recommended**: `gpt-5` with `reasoning_effort: "medium"` or `"high"`
- **Use Case**: Comprehensive analysis, complex topics, detailed investigation
- **Benefits**: Multi-round reasoned results, no need for agent iterations

### Model Comparison

| Model | Reasoning | Default Effort | Best For |
|-------|-----------|----------------|----------|
| `gpt-4o` | ❌ | N/A | Standard search |
| `gpt-4o-mini` | ❌ | N/A | Basic queries |
| `gpt-5-mini` | ✅ | `low` | Fast iterations |
| `gpt-5` | ✅ | `medium` | Deep research |
| `gpt-5-nano` | ✅ | `medium` | Balanced approach |
| `o3` | ✅ | `medium` | Advanced reasoning |
| `o4-mini` | ✅ | `medium` | Efficient reasoning |

## 📦 Installation

### Using uvx (Recommended)

```bash
# Install and run directly
uvx openai-websearch-mcp

# Or install globally
uvx install openai-websearch-mcp
```

### Using pip

```bash
# Install from PyPI
pip install openai-websearch-mcp

# Run the server
python -m openai_websearch_mcp
```

### From Source

```bash
# Clone the repository
git clone https://github.com/yourusername/openai-websearch-mcp.git
cd openai-websearch-mcp

# Install dependencies
uv sync

# Run in development mode
uv run python -m openai_websearch_mcp
```

## 👩‍💻 Development

### Setup Development Environment

```bash
# Clone and setup
git clone https://github.com/yourusername/openai-websearch-mcp.git
cd openai-websearch-mcp

# Create virtual environment and install dependencies
uv sync

# Run tests
uv run python -m pytest

# Install in development mode
uv pip install -e .
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | Your OpenAI API key | *Required* |
| `OPENAI_DEFAULT_MODEL` | Default model to use | `gpt-5-mini` |

## 🐛 Debugging

### Using MCP Inspector

```bash
# For uvx installations
npx @modelcontextprotocol/inspector uvx openai-websearch-mcp

# For pip installations
npx @modelcontextprotocol/inspector python -m openai_websearch_mcp
```

### Common Issues

**Issue**: "Unsupported parameter: 'reasoning.effort'"
**Solution**: This occurs when using non-reasoning models (gpt-4o, gpt-4o-mini) with reasoning_effort parameter. The server automatically handles this by only applying reasoning parameters to compatible models.

**Issue**: "No module named 'openai_websearch_mcp'"
**Solution**: Ensure you've installed the package correctly and your Python path includes the package location.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- 🤖 Generated with [Claude Code](https://claude.ai/code)
- 🔥 Powered by [OpenAI's Web Search API](https://openai.com)
- 🛠️ Built on the [Model Context Protocol](https://modelcontextprotocol.io/)

---

**Co-Authored-By**: Claude <noreply@anthropic.com>
