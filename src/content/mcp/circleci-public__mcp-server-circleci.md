---
name: "CircleCI-Public/mcp-server-circleci"
description: "Enable AI Agents to fix build failures from CircleCI."
description_tr: "CircleCI'deki build hatalarını düzeltmek için AI Agents'ı etkinleştirin."
category: "Developer Tools"
repo: "CircleCI-Public/mcp-server-circleci"
stars: 84
url: "https://github.com/CircleCI-Public/mcp-server-circleci"
body_length: 32809
license: "NOASSERTION"
language: "TypeScript"
body_tr: |-
  # CircleCI MCP Server

  [![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/CircleCI-Public/mcp-server-circleci/blob/main/LICENSE)
  [![CircleCI](https://dl.circleci.com/status-badge/img/gh/CircleCI-Public/mcp-server-circleci/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/CircleCI-Public/mcp-server-circleci/tree/main)
  [![npm](https://img.shields.io/npm/v/@circleci/mcp-server-circleci?logo=npm)](https://www.npmjs.com/package/@circleci/mcp-server-circleci)

  Model Context Protocol (MCP), bir [yeni, standartlaştırılmış protokoldür](https://modelcontextprotocol.io/introduction) ve büyük dil modelleri (LLM'ler) ile harici sistemler arasında bağlamı yönetmeyi sağlar. Bu depoda, [CircleCI](https://circleci.com) için bir MCP Server sağlıyoruz.

  Cursor, Windsurf, Copilot, Claude veya herhangi bir MCP uyumlu istemciyi kullanarak CircleCI ile doğal dil aracılığıyla etkileşim kurun — IDE'nizi terk etmeden.

  ## Araçlar

  | Araç | Açıklama |
  |------|----------|
  | [`analyze_diff`](#analyze_diff) | Git diff'lerini cursor kurallarına karşı analiz edin ve ihlalleri tespit edin |
  | [`config_helper`](#config_helper) | CircleCI konfigürasyonunuzu doğrulayın ve rehberlik alın |
  | [`create_prompt_template`](#create_prompt_template) | AI uygulamaları için yapılandırılmış prompt şablonları oluşturun |
  | [`download_usage_api_data`](#download_usage_api_data) | CircleCI Usage API'sinden kullanım verilerini indirin |
  | [`find_flaky_tests`](#find_flaky_tests) | Test yürütme geçmişini analiz ederek kararsız testleri belirleyin |
  | [`find_underused_resource_classes`](#find_underused_resource_classes) | Yeterince kullanılmayan işlem kaynağına sahip işleri bulun |
  | [`get_build_failure_logs`](#get_build_failure_logs) | CircleCI derlemeleri ile ilgili ayrıntılı hata günlüklerini alın |
  | [`get_job_test_results`](#get_job_test_results) | CircleCI işlerine ilişkin test meta verilerini ve sonuçlarını alın |
  | [`get_latest_pipeline_status`](#get_latest_pipeline_status) | Bir dal için en son ardışık düzenin durumunu alın |
  | [`list_artifacts`](#list_artifacts) | CircleCI işi tarafından üretilen yapıtları listeleyin |
  | [`list_component_versions`](#list_component_versions) | CircleCI bileşeninin tüm sürümlerini listeleyin |
  | [`list_followed_projects`](#list_followed_projects) | Takip ettiğiniz tüm CircleCI projelerini listeleyin |
  | [`recommend_prompt_template_tests`](#recommend_prompt_template_tests) | Prompt şablonları için test senaryoları oluşturun |
  | [`rerun_workflow`](#rerun_workflow) | Bir iş akışını baştan veya başarısız olan işten yeniden çalıştırın |
  | [`run_evaluation_tests`](#run_evaluation_tests) | CircleCI ardışık düzeninde değerlendirme testleri çalıştırın |
  | [`run_pipeline`](#run_pipeline) | Bir ardışık düzeni çalıştırmak üzere tetikleyin |
  | [`run_rollback_pipeline`](#run_rollback_pipeline) | Bir proje için geri alma işlemini tetikleyin |

  ## Kurulum

  <details>
  <summary><strong>Cursor</strong></summary>

  **Ön Koşullar:**
  - [CircleCI Kişisel API jetonu](https://app.circleci.com/settings/user/tokens) ([daha fazlasını öğrenin](https://circleci.com/docs/managing-api-tokens/))
  - NPX: [Node.js >= v18](https://nodejs.org/) ve [pnpm](https://pnpm.io/installation)
  - Docker: [Docker](https://docs.docker.com/get-docker/)

  #### Yerel MCP Server'da NPX Kullanma

  Cursor MCP yapılandırmanıza aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "circleci-mcp-server": {
        "command": "npx",
        "args": ["-y", "@circleci/mcp-server-circleci@latest"],
        "env": {
          "CIRCLECI_TOKEN": "your-circleci-token",
          "CIRCLECI_BASE_URL": "https://circleci.com",
          "MAX_MCP_OUTPUT_LENGTH": "50000"
        }
      }
    }
  }
  ```

  > `CIRCLECI_BASE_URL` isteğe bağlıdır — yalnızca şirket içi müşteriler için gereklidir.
  > `MAX_MCP_OUTPUT_LENGTH` isteğe bağlıdır — MCP yanıtları için maksimum çıktı uzunluğu (varsayılan: 50000).

  #### Yerel MCP Server'da Docker Kullanma

  Cursor MCP yapılandırmanıza aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "circleci-mcp-server": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "-e",
          "CIRCLECI_TOKEN",
          "-e",
          "CIRCLECI_BASE_URL",
          "-e",
          "MAX_MCP_OUTPUT_LENGTH",
          "circleci/mcp-server-circleci"
        ],
        "env": {
          "CIRCLECI_TOKEN": "your-circleci-token",
          "CIRCLECI_BASE_URL": "https://circleci.com",
          "MAX_MCP_OUTPUT_LENGTH": "50000"
        }
      }
    }
  }
  ```

  #### Kendi Kendine Yönetilen Uzak MCP Server Kullanma

  Cursor MCP yapılandırmanıza aşağıdakini ekleyin:

  ```json
  {
    "inputs": [
      {
        "type": "promptString",
        "id": "circleci-token",
        "description": "CircleCI API Token",
        "password": true
      }
    ],
    "servers": {
      "circleci-mcp-server-remote": {
        "url": "http://your-circleci-remote-mcp-server-endpoint:8000/mcp"
      }
    }
  }
  ```

  </details>

  <details>
  <summary><strong>VS Code</strong></summary>

  **Ön Koşullar:**
  - [CircleCI Kişisel API jetonu](https://app.circleci.com/settings/user/tokens) ([daha fazlasını öğrenin](https://circleci.com/docs/managing-api-tokens/))
  - NPX: [Node.js >= v18](https://nodejs.org/) ve [pnpm](https://pnpm.io/installation)
  - Docker: [Docker](https://docs.docker.com/get-docker/)

  #### Yerel MCP Server'da NPX Kullanma

  Projenizde `.vscode/mcp.json` dosyasına aşağıdakini ekleyin:

  ```json
  {
    "inputs": [
      {
        "type": "promptString",
        "id": "circleci-token",
        "description": "CircleCI API Token",
        "password": true
      },
      {
        "type": "promptString",
        "id": "circleci-base-url",
        "description": "CircleCI Base URL",
        "default": "https://circleci.com"
      }
    ],
    "servers": {
      "circleci-mcp-server": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "@circleci/mcp-server-circleci@latest"],
        "env": {
          "CIRCLECI_TOKEN": "${input:circleci-token}",
          "CIRCLECI_BASE_URL": "${input:circleci-base-url}"
        }
      }
    }
  }
  ```

  > 💡 Girişler ilk sunucu başlatmasında istenir, ardından VS Code tarafından güvenli şekilde saklanır.

  #### Yerel MCP Server'da Docker Kullanma

  Projenizde `.vscode/mcp.json` dosyasına aşağıdakini ekleyin:

  ```json
  {
    "inputs": [
      {
        "type": "promptString",
        "id": "circleci-token",
        "description": "CircleCI API Token",
        "password": true
      },
      {
        "type": "promptString",
        "id": "circleci-base-url",
        "description": "CircleCI Base URL",
        "default": "https://circleci.com"
      }
    ],
    "servers": {
      "circleci-mcp-server": {
        "type": "stdio",
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "-e",
          "CIRCLECI_TOKEN",
          "-e",
          "CIRCLECI_BASE_URL",
          "circleci/mcp-server-circleci"
        ],
        "env": {
          "CIRCLECI_TOKEN": "${input:circleci-token}",
          "CIRCLECI_BASE_URL": "${input:circleci-base-url}"
        }
      }
    }
  }
  ```

  #### Kendi Kendine Yönetilen Uzak MCP Server Kullanma

  Projenizde `.vscode/mcp.json` dosyasına aşağıdakini ekleyin:

  ```json
  {
    "servers": {
      "circleci-mcp-server-remote": {
        "type": "sse",
        "url": "http://your-circleci-remote-mcp-server-endpoint:8000/mcp"
      }
    }
  }
  ```

  </details>

  <details>
  <summary><strong>Claude Desktop</strong></summary>

  **Ön Koşullar:**
  - [CircleCI Kişisel API jetonu](https://app.circleci.com/settings/user/tokens) ([daha fazlasını öğrenin](https://circleci.com/docs/managing-api-tokens/))
  - NPX: [Node.js >= v18](https://nodejs.org/) ve [pnpm](https://pnpm.io/installation)
  - Docker: [Docker](https://docs.docker.com/get-docker/)

  #### Yerel MCP Server'da NPX Kullanma

  `claude_desktop_config.json` dosyanıza aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "circleci-mcp-server": {
        "command": "npx",
        "args": ["-y", "@circleci/mcp-server-circleci@latest"],
        "env": {
          "CIRCLECI_TOKEN": "your-circleci-token",
          "CIRCLECI_BASE_URL": "https://circleci.com",
          "MAX_MCP_OUTPUT_LENGTH": "50000"
        }
      }
    }
  }
  ```

  #### Yerel MCP Server'da Docker Kullanma

  `claude_desktop_config.json` dosyanıza aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "circleci-mcp-server": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "-e",
          "CIRCLECI_TOKEN",
          "-e",
          "CIRCLECI_BASE_URL",
          "-e",
          "MAX_MCP_OUTPUT_LENGTH",
          "circleci/mcp-server-circleci"
        ],
        "env": {
          "CIRCLECI_TOKEN": "your-circleci-token",
          "CIRCLECI_BASE_URL": "https://circleci.com",
          "MAX_MCP_OUTPUT_LENGTH": "50000"
        }
      }
    }
  }
  ```

  #### Kendi Kendine Yönetilen Uzak MCP Server Kullanma

  Bir sarmalayıcı betik oluşturun (ör. `circleci-remote-mcp.sh`):

  ```bash
  #!/bin/bash
  export CIRCLECI_TOKEN="your-circleci-token"
  npx mcp-remote http://your-circleci-remote-mcp-server-endpoint:8000/mcp --allow-http
  ```

  Betiği çalıştırılabilir yapın:

  ```bash
  chmod +x circleci-remote-mcp.sh
  ```

  Ardından `claude_desktop_config.json` dosyasına aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "circleci-remote-mcp-server": {
        "command": "/full/path/to/circleci-remote-mcp.sh"
      }
    }
  }
  ```

  Yapılandırma dosyasını bulmak veya oluşturmak için Claude Desktop ayarlarını açın, sol kenar çubuğunda **Developer** öğesine tıklayın ve ardından **Edit Config** öğesine tıklayın. Yapılandırma dosyası şu konumdadır:

  - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

  Daha fazla bilgi için: https://modelcontextprotocol.io/quickstart/user

  </details>

  <details>
  <summary><strong>Claude Code</strong></summary>

  **Ön Koşullar:**
  - [CircleCI Kişisel API jetonu](https://app.circleci.com/settings/user/tokens) ([daha fazlasını öğrenin](https://circleci.com/docs/managing-api-tokens/))
  - NPX: [Node.js >= v18](https://nodejs.org/) ve [pnpm](https://pnpm.io/installation)
  - Docker: [Docker](https://docs.docker.com/get-docker/)

  #### Yerel MCP Server'da NPX Kullanma

  ```bash
  claude mcp add circleci-mcp-server -e CIRCLECI_TOKEN=your-circleci-token -- npx -y @circleci/mcp-server-circleci@latest
  ```

  #### Yerel MCP Server'da Docker Kullanma

  ```bash
  claude mcp add circleci-mcp-server -e CIRCLECI_TOKEN=your-circleci-token -e CIRCLECI_BASE_URL=https://circleci.com -- docker run --rm -i -e CIRCLECI_TOKEN -e CIRCLECI_BASE_URL circleci/mcp-server-circleci
  ```

  #### Kendi Kendine Yönetilen Uzak MCP Server Kullanma

  ```bash
  claude mcp add circleci-mcp-server -e CIRCLECI_TOKEN=your-circleci-token -- npx mcp-remote http://your-circleci-remote-mcp-server-endpoint:8000/mcp --allow-http
  ```

  Daha fazla bilgi için: https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/tutorials#set-up-model-context-protocol-mcp

  </details>

  <details>
  <summary><strong>Windsurf</strong></summary>

  **Ön Koşullar:**
  - [CircleCI Kişisel API jetonu](https://app.circleci.com/settings/user/tokens) ([daha fazlasını öğrenin](https://circleci.com/docs/managing-api-tokens/))
  - NPX: [Node.js >= v18](https://nodejs.org/) ve [pnpm](https://pnpm.io/installation)
  - Docker: [Docker](https://docs.docker.com/get-docker/)

  #### Yerel MCP Server'da NPX Kullanma

  Windsurf `mcp_config.json` dosyasına aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "circleci-mcp-server": {
        "command": "npx",
        "args": ["-y", "@circleci/mcp-server-circleci@latest"],
        "env": {
          "CIRCLECI_TOKEN": "your-circleci-token",
          "CIRCLECI_BASE_URL": "https://circleci.com",
          "MAX_MCP_OUTPUT_LENGTH": "50000"
        }
      }
    }
  }
  ```

  #### Yerel MCP Server'da Docker Kullanma

  Windsurf `mcp_config.json` dosyasına aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "circleci-mcp-server": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "-e",
          "CIRCLECI_TOKEN",
          "-e",
          "CIRCLECI_BASE_URL",
          "-e",
          "MAX_MCP_OUTPUT_LENGTH",
          "circleci/mcp-server-circleci"
        ],
        "env": {
          "CIRCLECI_TOKEN": "your-circleci-token",
          "CIRCLECI_BASE_URL": "https://circleci.com",
          "MAX_MCP_OUTPUT_LENGTH": "50000"
        }
      }
    }
  }
  ```

  #### Kendi Kendine Yönetilen Uzak MCP Server Kullanma

  Windsurf `mcp_config.json` dosyasına aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "circleci": {
        "command": "npx",
        "args": [
          "mcp-remote",
          "http://your-circleci-remote-mcp-server-endpoint:8000/mcp",
          "--allow-http"
        ],
        "disabled": false,
        "alwaysAllow": []
      }
    }
  }
  ```

  Daha fazla bilgi için: https://docs.windsurf.com/windsurf/mcp

  </details>

  <details>
  <summary><strong>Amazon Q Developer CLI</strong></summary>

  **Ön Koşullar:**
  - [CircleCI Kişisel API jetonu](https://app.circleci.com/settings/user/tokens) ([daha fazlasını öğrenin](https://circleci.com/docs/managing-api-tokens/))
  - NPX: [Node.js >= v18](https://nodejs.org/) ve [pnpm](https://pnpm.io/installation)

  Amazon Q Developer'daki MCP istemcisi yapılandırması JSON formatında ve `mcp.json` adlı bir dosyada saklanır. İki yapılandırma düzeyi desteklenir:

  - **Global:** `~/.aws/amazonq/mcp.json` — tüm çalışma alanları için geçerli
  - **Çalışma Alanı:** `.amazonq/mcp.json` — mevcut çalışma alanına özgü

  Her iki dosya da mevcutsa, içerikleri birleştirilir. Çakışma durumunda, çalışma alanı yapılandırması öncelik alır.

  #### Yerel MCP Server'da NPX Kullanma

  `~/.aws/amazonq/mcp.json` dosyasını düzenleyin veya aşağıdakini içeren `.amazonq/mcp.json` dosyasını oluşturun:

  ```json
  {
    "mcpServers": {
      "circleci-local": {
        "command": "npx",
        "args": [
          "-y",
          "@circleci/mcp-server-circleci@latest"
        ],
        "env": {
          "CIRCLECI_TOKEN": "YOUR_CIRCLECI_TOKEN",
          "CIRCLECI_BASE_URL": "https://circleci.com",
          "MAX_MCP_OUTPUT_LENGTH": "50000"
        },
        "timeout": 60000
      }
    }
  }
  ```

  #### Kendi Kendine Yönetilen Uzak MCP Server Kullanma

  Bir sarmalayıcı betik oluşturun (ör. `circleci-remote-mcp.sh`):

  ```bash
  #!/bin/bash
  export CIRCLECI_TOKEN="your-circleci-token"
  npx mcp-remote http://your-circleci-remote-mcp-server-endpoint:8000/mcp --allow-http
  ```

  Betiği çalıştırılabilir yapın ve ekleyin:

  ```bash
  chmod +x circleci-remote-mcp.sh
  q mcp add --name circleci --command "/full/path/to/circleci-remote-mcp.sh"
  ```

  </details>

  <details>
  <summary><strong>Amazon Q Developer in the IDE</strong></summary>

  **Ön Koşullar:**
  - [CircleCI Kişisel API jetonu](https://app.circleci.com/settings/user/tokens) ([daha fazlasını öğrenin](https://circleci.com/docs/managing-api-tokens/))
  - NPX: [Node.js >= v18](https://nodejs.org/) ve [pnpm](https://pnpm.io/installation)

  #### Yerel MCP Server'da NPX Kullanma

  `~/.aws/amazonq/mcp.json` dosyasını düzenleyin veya aşağıdakini içeren `.amazonq/mcp.json` dosyasını oluşturun:

  ```json
  {
    "mcpServers": {
      "circleci-local": {
        "command": "npx",
        "args": [
          "-y",
          "@circleci/mcp-server-circleci@latest"
        ],
        "env": {
          "CIRCLECI_TOKEN": "YOUR_CIRCLECI_TOKEN",
          "CIRCLECI_BASE_URL": "https://circleci.com",
          "MAX_MCP_OUTPUT_LENGTH": "50000"
        },
        "timeout": 60000
      }
    }
  }
  ```

  #### Kendi Kendine Yönetilen Uzak MCP Server Kullanma

  Bir sarmalayıcı betik oluşturun (ör. `circleci-remote-mcp.sh`):

  ```bash
  #!/bin/bash
  npx mcp-remote http://your-circleci-remote-mcp-server-endpoint:8000/mcp --allow-http
  ```

  Betiği çalıştırılabilir yapın ve ardından MCP yapılandırması UI aracılığıyla ekleyin:

  1. [MCP yapılandırması UI'ya erişin](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/mcp-ide.html#mcp-ide-configuration-access-ui)
  2. **+** sembolünü seçin
  3. Kapsam seçin: **global** veya **local**
  4. Bir ad girin (ör. `circleci-remote-mcp`)
  5. Taşıma protokolünü seçin: **stdio**
  6. Betiğinizin komut yolunu girin
  7. **Kaydet**'e tıklayın

  </details>

  <details>
  <summary><strong>Smithery</strong></summary>

  [Smithery](https://smithery.ai/server/@CircleCI-Public/mcp-server-circleci) aracılığıyla CircleCI MCP Server'ı Claude Desktop için otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install @CircleCI-Public/mcp-server-circleci --client claude
  ```

  </details>

  ## Demo

  <details>
  <summary><strong>Eylemde Görelim</strong></summary>

  Örnek: "Dalımda en son başarısız ardışık düzeni bul ve günlükleri al"
  — daha fazla örnek için [wiki](https://github.com/CircleCI-Public/mcp-server-circleci/wiki#circleci-mcp-server-with-cursor-ide) bölümüne bakın.

  https://github.com/user-attachments/assets/3c765985-8827-442a-a8dc-5069e01edb74

  </details>

  ## Araç Ayrıntıları

  <details>
  <summary id="analyze_diff"><strong><code>analyze_diff</code></strong></summary>

  Git diff'lerini cursor kurallarına karşı analiz ederek kural ihlallerini belirler.

  Sağlayın:
  - **Git diff içeriği** (ör. `git diff --cached`, `git diff HEAD`)
  - **Repository kuralları** `.cursorrules` veya `.cursor/rules` dosyasından

  İhlal raporlarını güven puanları ve açıklamalarıyla birlikte döndürür.

  Şunlar için faydalıdır:
  - Gönderim öncesi kod kalitesi kontrolleri
  - Takım kodlama standartlarıyla tutarlılığın sağlanması
  - Kodu incelemeden öncce kural ihlallerinin yakalanması

  </details>

  <details>
  <summary id="config_helper"><strong><code>config_helper</code></strong></summary>

  CircleCI yapılandırma görevleriyle yardımcı olur ve rehberlik ve doğrulama sağlar.

  - `.circleci/config.yml` dosyasını söz dizimi ve anlambilim hataları açısından doğrular
  - Ayrıntılı doğrulama sonuçları ve yapılandırma önerileri sağlar
  - Örnek: "CircleCI yapılandırmamı doğrula"

  </details>

  <details>
  <summary id="create_prompt_template"><strong><code>create_prompt_template</code></strong></summary>

  Özellik gereksinimlerine dayalı olarak AI öğretimli uygulamalar için yapılandırılmış prompt şablonları oluşturur.

  - Kullanıcı gereksinimlerini optimize edilmiş prompt şablonlarına dönüştürür
  - Yapılandırılmış bir şablon ve gerekli giriş parametrelerini tanımlayan bir bağlam şeması döndürür
  - Örnek: "Yaşa ve konuya göre uyku zamanı hikayeleri oluşturmak için bir prompt şablonu oluştur"

  </details>

  <details>
  <summary id="download_usage_api_data"><strong><code>download_usage_api_data</code></strong></summary>

  Belirli bir kuruluş için CircleCI Usage API'sinden kullanım verilerini indirir. Esnek tarih girişini kabul eder (ör. "Mart 2025" veya "geçen ay"). Yalnızca bulut özelliği.

  **Seçenek 1:** Aşağıdakileri sağlayarak yeni bir dışa aktarma işi başlatın:
  - `orgId`, `startDate`, `endDate` (maksimum 32 gün), `outputDir`

  **Seçenek 2:** Aşağıdakileri sağlayarak mevcut bir dışa aktarma işini kontrol edin/indirin:
  - `orgId`, `jobId`, `outputDir`

  Belirtilen zaman dilimi için CircleCI kullanım verilerini içeren bir CSV dosyası döndürür.

  > [!NOTE]
  > Kullanım verileri, maliyet optimizasyonu analizi için `find_underused_resource_classes` aracına beslenebilir.

  </details>

  <details>
  <summary id="find_flaky_tests"><strong><code>find_flaky_tests</code></strong></summary>

  Test yürütme geçmişini analiz ederek CircleCI projenizde kararsız testleri belirler. CircleCI'daki [kararsız test algılama özelliğinden](https://circleci.com/blog/introducing-test-insights-with-flaky-test-detection/#flaky-test-detection) yararlanır.

  Bu araç üç şekilde kullanılabilir:

  1. **Project Slug Kullanma (Önerilir):**
     - Önce `list_followed_projects` kullanarak projelerinizi alın, ardından:
     - Örnek: "my-project için kararsız testleri al"

  2. **CircleCI Proje URL'si Kullanma:**
     - Örnek: "https://app.circleci.com/pipelines/github/org/repo'da kararsız testleri bul"

  3. **Yerel Proje Bağlamı Kullanma:**
     - Çalışma alanınızdan çalışır ve çalışma alanı kökü ile git uzak URL'si sağlar
     - Örnek: "Geçerli projemdeki kararsız testleri bul"

  Çıktı modları:

  - **Metin (varsayılan):** Kararsız test ayrıntılarını metin formatında döndürür
  - **Dosya** (`FILE_OUTPUT_DIRECTORY` env değişkeni gerekir): Kararsız test ayrıntılarını içeren bir dizin oluşturur

  </details>

  <details>
  <summary id="find_underused_resource_classes"><strong><code>find_underused_resource_classes</code></strong></summary>

  Ortalama veya maksimum CPU/
---

# CircleCI MCP Server

[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/CircleCI-Public/mcp-server-circleci/blob/main/LICENSE)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/CircleCI-Public/mcp-server-circleci/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/CircleCI-Public/mcp-server-circleci/tree/main)
[![npm](https://img.shields.io/npm/v/@circleci/mcp-server-circleci?logo=npm)](https://www.npmjs.com/package/@circleci/mcp-server-circleci)

Model Context Protocol (MCP) is a [new, standardized protocol](https://modelcontextprotocol.io/introduction) for managing context between large language models (LLMs) and external systems. In this repository, we provide an MCP Server for [CircleCI](https://circleci.com).

Use Cursor, Windsurf, Copilot, Claude, or any MCP-compatible client to interact with CircleCI using natural language — without leaving your IDE.

## Tools

| Tool | Description |
|------|-------------|
| [`analyze_diff`](#analyze_diff) | Analyze git diffs against cursor rules for violations |
| [`config_helper`](#config_helper) | Validate and get guidance for your CircleCI configuration |
| [`create_prompt_template`](#create_prompt_template) | Generate structured prompt templates for AI applications |
| [`download_usage_api_data`](#download_usage_api_data) | Download usage data from the CircleCI Usage API |
| [`find_flaky_tests`](#find_flaky_tests) | Identify flaky tests by analyzing test execution history |
| [`find_underused_resource_classes`](#find_underused_resource_classes) | Find jobs with underused compute resources |
| [`get_build_failure_logs`](#get_build_failure_logs) | Retrieve detailed failure logs from CircleCI builds |
| [`get_job_test_results`](#get_job_test_results) | Retrieve test metadata and results for CircleCI jobs |
| [`get_latest_pipeline_status`](#get_latest_pipeline_status) | Get the status of the latest pipeline for a branch |
| [`list_artifacts`](#list_artifacts) | List artifacts produced by a CircleCI job |
| [`list_component_versions`](#list_component_versions) | List all versions for a CircleCI component |
| [`list_followed_projects`](#list_followed_projects) | List all CircleCI projects you're following |
| [`recommend_prompt_template_tests`](#recommend_prompt_template_tests) | Generate test cases for prompt templates |
| [`rerun_workflow`](#rerun_workflow) | Rerun a workflow from start or from the failed job |
| [`run_evaluation_tests`](#run_evaluation_tests) | Run evaluation tests on a CircleCI pipeline |
| [`run_pipeline`](#run_pipeline) | Trigger a pipeline to run |
| [`run_rollback_pipeline`](#run_rollback_pipeline) | Trigger a rollback for a project |

## Installation

<details>
<summary><strong>Cursor</strong></summary>

**Prerequisites:**
- [CircleCI Personal API token](https://app.circleci.com/settings/user/tokens) ([learn more](https://circleci.com/docs/managing-api-tokens/))
- NPX: [Node.js >= v18](https://nodejs.org/) and [pnpm](https://pnpm.io/installation)
- Docker: [Docker](https://docs.docker.com/get-docker/)

#### Using NPX in a local MCP Server

Add the following to your Cursor MCP config:

```json
{
  "mcpServers": {
    "circleci-mcp-server": {
      "command": "npx",
      "args": ["-y", "@circleci/mcp-server-circleci@latest"],
      "env": {
        "CIRCLECI_TOKEN": "your-circleci-token",
        "CIRCLECI_BASE_URL": "https://circleci.com",
        "MAX_MCP_OUTPUT_LENGTH": "50000"
      }
    }
  }
}
```

> `CIRCLECI_BASE_URL` is optional — required for on-prem customers only.
> `MAX_MCP_OUTPUT_LENGTH` is optional — maximum output length for MCP responses (default: 50000).

#### Using Docker in a local MCP Server

Add the following to your Cursor MCP config:

```json
{
  "mcpServers": {
    "circleci-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "CIRCLECI_TOKEN",
        "-e",
        "CIRCLECI_BASE_URL",
        "-e",
        "MAX_MCP_OUTPUT_LENGTH",
        "circleci/mcp-server-circleci"
      ],
      "env": {
        "CIRCLECI_TOKEN": "your-circleci-token",
        "CIRCLECI_BASE_URL": "https://circleci.com",
        "MAX_MCP_OUTPUT_LENGTH": "50000"
      }
    }
  }
}
```

#### Using a Self-Managed Remote MCP Server

Add the following to your Cursor MCP config:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "circleci-token",
      "description": "CircleCI API Token",
      "password": true
    }
  ],
  "servers": {
    "circleci-mcp-server-remote": {
      "url": "http://your-circleci-remote-mcp-server-endpoint:8000/mcp"
    }
  }
}
```

</details>

<details>
<summary><strong>VS Code</strong></summary>

**Prerequisites:**
- [CircleCI Personal API token](https://app.circleci.com/settings/user/tokens) ([learn more](https://circleci.com/docs/managing-api-tokens/))
- NPX: [Node.js >= v18](https://nodejs.org/) and [pnpm](https://pnpm.io/installation)
- Docker: [Docker](https://docs.docker.com/get-docker/)

#### Using NPX in a local MCP Server

Add the following to `.vscode/mcp.json` in your project:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "circleci-token",
      "description": "CircleCI API Token",
      "password": true
    },
    {
      "type": "promptString",
      "id": "circleci-base-url",
      "description": "CircleCI Base URL",
      "default": "https://circleci.com"
    }
  ],
  "servers": {
    "circleci-mcp-server": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@circleci/mcp-server-circleci@latest"],
      "env": {
        "CIRCLECI_TOKEN": "${input:circleci-token}",
        "CIRCLECI_BASE_URL": "${input:circleci-base-url}"
      }
    }
  }
}
```

> 💡 Inputs are prompted on first server start, then stored securely by VS Code.

#### Using Docker in a local MCP Server

Add the following to `.vscode/mcp.json` in your project:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "circleci-token",
      "description": "CircleCI API Token",
      "password": true
    },
    {
      "type": "promptString",
      "id": "circleci-base-url",
      "description": "CircleCI Base URL",
      "default": "https://circleci.com"
    }
  ],
  "servers": {
    "circleci-mcp-server": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "CIRCLECI_TOKEN",
        "-e",
        "CIRCLECI_BASE_URL",
        "circleci/mcp-server-circleci"
      ],
      "env": {
        "CIRCLECI_TOKEN": "${input:circleci-token}",
        "CIRCLECI_BASE_URL": "${input:circleci-base-url}"
      }
    }
  }
}
```

#### Using a Self-Managed Remote MCP Server

Add the following to `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "circleci-mcp-server-remote": {
      "type": "sse",
      "url": "http://your-circleci-remote-mcp-server-endpoint:8000/mcp"
    }
  }
}
```

</details>

<details>
<summary><strong>Claude Desktop</strong></summary>

**Prerequisites:**
- [CircleCI Personal API token](https://app.circleci.com/settings/user/tokens) ([learn more](https://circleci.com/docs/managing-api-tokens/))
- NPX: [Node.js >= v18](https://nodejs.org/) and [pnpm](https://pnpm.io/installation)
- Docker: [Docker](https://docs.docker.com/get-docker/)

#### Using NPX in a local MCP Server

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "circleci-mcp-server": {
      "command": "npx",
      "args": ["-y", "@circleci/mcp-server-circleci@latest"],
      "env": {
        "CIRCLECI_TOKEN": "your-circleci-token",
        "CIRCLECI_BASE_URL": "https://circleci.com",
        "MAX_MCP_OUTPUT_LENGTH": "50000"
      }
    }
  }
}
```

#### Using Docker in a local MCP Server

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "circleci-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "CIRCLECI_TOKEN",
        "-e",
        "CIRCLECI_BASE_URL",
        "-e",
        "MAX_MCP_OUTPUT_LENGTH",
        "circleci/mcp-server-circleci"
      ],
      "env": {
        "CIRCLECI_TOKEN": "your-circleci-token",
        "CIRCLECI_BASE_URL": "https://circleci.com",
        "MAX_MCP_OUTPUT_LENGTH": "50000"
      }
    }
  }
}
```

#### Using a Self-Managed Remote MCP Server

Create a wrapper script (e.g. `circleci-remote-mcp.sh`):

```bash
#!/bin/bash
export CIRCLECI_TOKEN="your-circleci-token"
npx mcp-remote http://your-circleci-remote-mcp-server-endpoint:8000/mcp --allow-http
```

Make it executable:

```bash
chmod +x circleci-remote-mcp.sh
```

Then add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "circleci-remote-mcp-server": {
      "command": "/full/path/to/circleci-remote-mcp.sh"
    }
  }
}
```

To find or create your config file, open Claude Desktop settings, click **Developer** in the left sidebar, then click **Edit Config**. The config file is located at:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

For more information: https://modelcontextprotocol.io/quickstart/user

</details>

<details>
<summary><strong>Claude Code</strong></summary>

**Prerequisites:**
- [CircleCI Personal API token](https://app.circleci.com/settings/user/tokens) ([learn more](https://circleci.com/docs/managing-api-tokens/))
- NPX: [Node.js >= v18](https://nodejs.org/) and [pnpm](https://pnpm.io/installation)
- Docker: [Docker](https://docs.docker.com/get-docker/)

#### Using NPX in a local MCP Server

```bash
claude mcp add circleci-mcp-server -e CIRCLECI_TOKEN=your-circleci-token -- npx -y @circleci/mcp-server-circleci@latest
```

#### Using Docker in a local MCP Server

```bash
claude mcp add circleci-mcp-server -e CIRCLECI_TOKEN=your-circleci-token -e CIRCLECI_BASE_URL=https://circleci.com -- docker run --rm -i -e CIRCLECI_TOKEN -e CIRCLECI_BASE_URL circleci/mcp-server-circleci
```

#### Using a Self-Managed Remote MCP Server

```bash
claude mcp add circleci-mcp-server -e CIRCLECI_TOKEN=your-circleci-token -- npx mcp-remote http://your-circleci-remote-mcp-server-endpoint:8000/mcp --allow-http
```

For more information: https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/tutorials#set-up-model-context-protocol-mcp

</details>

<details>
<summary><strong>Windsurf</strong></summary>

**Prerequisites:**
- [CircleCI Personal API token](https://app.circleci.com/settings/user/tokens) ([learn more](https://circleci.com/docs/managing-api-tokens/))
- NPX: [Node.js >= v18](https://nodejs.org/) and [pnpm](https://pnpm.io/installation)
- Docker: [Docker](https://docs.docker.com/get-docker/)

#### Using NPX in a local MCP Server

Add the following to your Windsurf `mcp_config.json`:

```json
{
  "mcpServers": {
    "circleci-mcp-server": {
      "command": "npx",
      "args": ["-y", "@circleci/mcp-server-circleci@latest"],
      "env": {
        "CIRCLECI_TOKEN": "your-circleci-token",
        "CIRCLECI_BASE_URL": "https://circleci.com",
        "MAX_MCP_OUTPUT_LENGTH": "50000"
      }
    }
  }
}
```

#### Using Docker in a local MCP Server

Add the following to your Windsurf `mcp_config.json`:

```json
{
  "mcpServers": {
    "circleci-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "CIRCLECI_TOKEN",
        "-e",
        "CIRCLECI_BASE_URL",
        "-e",
        "MAX_MCP_OUTPUT_LENGTH",
        "circleci/mcp-server-circleci"
      ],
      "env": {
        "CIRCLECI_TOKEN": "your-circleci-token",
        "CIRCLECI_BASE_URL": "https://circleci.com",
        "MAX_MCP_OUTPUT_LENGTH": "50000"
      }
    }
  }
}
```

#### Using a Self-Managed Remote MCP Server

Add the following to your Windsurf `mcp_config.json`:

```json
{
  "mcpServers": {
    "circleci": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "http://your-circleci-remote-mcp-server-endpoint:8000/mcp",
        "--allow-http"
      ],
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

For more information: https://docs.windsurf.com/windsurf/mcp

</details>

<details>
<summary><strong>Amazon Q Developer CLI</strong></summary>

**Prerequisites:**
- [CircleCI Personal API token](https://app.circleci.com/settings/user/tokens) ([learn more](https://circleci.com/docs/managing-api-tokens/))
- NPX: [Node.js >= v18](https://nodejs.org/) and [pnpm](https://pnpm.io/installation)

MCP client configuration in Amazon Q Developer is stored in JSON format in a file named `mcp.json`. Two levels of configuration are supported:

- **Global:** `~/.aws/amazonq/mcp.json` — applies to all workspaces
- **Workspace:** `.amazonq/mcp.json` — specific to the current workspace

If both files exist, their contents are merged. In case of conflict, the workspace config takes precedence.

#### Using NPX in a local MCP Server

Edit `~/.aws/amazonq/mcp.json` or create `.amazonq/mcp.json` with the following:

```json
{
  "mcpServers": {
    "circleci-local": {
      "command": "npx",
      "args": [
        "-y",
        "@circleci/mcp-server-circleci@latest"
      ],
      "env": {
        "CIRCLECI_TOKEN": "YOUR_CIRCLECI_TOKEN",
        "CIRCLECI_BASE_URL": "https://circleci.com",
        "MAX_MCP_OUTPUT_LENGTH": "50000"
      },
      "timeout": 60000
    }
  }
}
```

#### Using a Self-Managed Remote MCP Server

Create a wrapper script (e.g. `circleci-remote-mcp.sh`):

```bash
#!/bin/bash
export CIRCLECI_TOKEN="your-circleci-token"
npx mcp-remote http://your-circleci-remote-mcp-server-endpoint:8000/mcp --allow-http
```

Make it executable and add it:

```bash
chmod +x circleci-remote-mcp.sh
q mcp add --name circleci --command "/full/path/to/circleci-remote-mcp.sh"
```

</details>

<details>
<summary><strong>Amazon Q Developer in the IDE</strong></summary>

**Prerequisites:**
- [CircleCI Personal API token](https://app.circleci.com/settings/user/tokens) ([learn more](https://circleci.com/docs/managing-api-tokens/))
- NPX: [Node.js >= v18](https://nodejs.org/) and [pnpm](https://pnpm.io/installation)

#### Using NPX in a local MCP Server

Edit `~/.aws/amazonq/mcp.json` or create `.amazonq/mcp.json` with the following:

```json
{
  "mcpServers": {
    "circleci-local": {
      "command": "npx",
      "args": [
        "-y",
        "@circleci/mcp-server-circleci@latest"
      ],
      "env": {
        "CIRCLECI_TOKEN": "YOUR_CIRCLECI_TOKEN",
        "CIRCLECI_BASE_URL": "https://circleci.com",
        "MAX_MCP_OUTPUT_LENGTH": "50000"
      },
      "timeout": 60000
    }
  }
}
```

#### Using a Self-Managed Remote MCP Server

Create a wrapper script (e.g. `circleci-remote-mcp.sh`):

```bash
#!/bin/bash
npx mcp-remote http://your-circleci-remote-mcp-server-endpoint:8000/mcp --allow-http
```

Make it executable, then add it via the MCP configuration UI:

1. [Access the MCP configuration UI](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/mcp-ide.html#mcp-ide-configuration-access-ui)
2. Choose the **+** symbol
3. Select scope: **global** or **local**
4. Enter a name (e.g. `circleci-remote-mcp`)
5. Select transport protocol: **stdio**
6. Enter the command path to your script
7. Click **Save**

</details>

<details>
<summary><strong>Smithery</strong></summary>

To install CircleCI MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@CircleCI-Public/mcp-server-circleci):

```bash
npx -y @smithery/cli install @CircleCI-Public/mcp-server-circleci --client claude
```

</details>

## Demo

<details>
<summary><strong>Watch it in action</strong></summary>

Example: "Find the latest failed pipeline on my branch and get logs"
— see the [wiki](https://github.com/CircleCI-Public/mcp-server-circleci/wiki#circleci-mcp-server-with-cursor-ide) for more examples.

https://github.com/user-attachments/assets/3c765985-8827-442a-a8dc-5069e01edb74

</details>

## Tool Details

<details>
<summary id="analyze_diff"><strong><code>analyze_diff</code></strong></summary>

Analyzes git diffs against cursor rules to identify rule violations.

Provide:
- **Git diff content** (e.g. `git diff --cached`, `git diff HEAD`)
- **Repository rules** from `.cursorrules` or `.cursor/rules`

Returns detailed violation reports with confidence scores and explanations.

Useful for:
- Pre-commit code quality checks
- Ensuring consistency with team coding standards
- Catching rule violations before code review

</details>

<details>
<summary id="config_helper"><strong><code>config_helper</code></strong></summary>

Assists with CircleCI configuration tasks by providing guidance and validation.

- Validates your `.circleci/config.yml` for syntax and semantic errors
- Provides detailed validation results and configuration recommendations
- Example: "Validate my CircleCI config"

</details>

<details>
<summary id="create_prompt_template"><strong><code>create_prompt_template</code></strong></summary>

Generates structured prompt templates for AI-enabled applications based on feature requirements.

- Transforms user requirements into optimized prompt templates
- Returns a structured template and a context schema defining required input parameters
- Example: "Create a prompt template for generating bedtime stories by age and topic"

</details>

<details>
<summary id="download_usage_api_data"><strong><code>download_usage_api_data</code></strong></summary>

Downloads usage data from the CircleCI Usage API for a given organization. Accepts flexible date input (e.g., "March 2025" or "last month"). Cloud-only feature.

**Option 1:** Start a new export job by providing:
- `orgId`, `startDate`, `endDate` (max 32 days), `outputDir`

**Option 2:** Check/download an existing export job by providing:
- `orgId`, `jobId`, `outputDir`

Returns a CSV file with CircleCI usage data for the specified time frame.

> [!NOTE]
> Usage data can be fed into the `find_underused_resource_classes` tool for cost optimization analysis.

</details>

<details>
<summary id="find_flaky_tests"><strong><code>find_flaky_tests</code></strong></summary>

Identifies flaky tests in your CircleCI project by analyzing test execution history. Leverages the [flaky test detection feature](https://circleci.com/blog/introducing-test-insights-with-flaky-test-detection/#flaky-test-detection) in CircleCI.

This tool can be used in three ways:

1. **Using Project Slug (Recommended):**
   - First use `list_followed_projects` to get your projects, then:
   - Example: "Get flaky tests for my-project"

2. **Using CircleCI Project URL:**
   - Example: "Find flaky tests in https://app.circleci.com/pipelines/github/org/repo"

3. **Using Local Project Context:**
   - Works from your local workspace by providing workspace root and git remote URL
   - Example: "Find flaky tests in my current project"

Output modes:

- **Text (default):** Returns flaky test details in text format
- **File** (requires `FILE_OUTPUT_DIRECTORY` env var): Creates a directory with flaky test details

</details>

<details>
<summary id="find_underused_resource_classes"><strong><code>find_underused_resource_classes</code></strong></summary>

Analyzes a CircleCI usage data CSV file to find jobs with average or max CPU/RAM usage below a given threshold (default: 40%).

Provide a CSV file obtained from `download_usage_api_data`.

Returns a markdown list of underused jobs organized by project and workflow — useful for identifying cost optimization opportunities.

</details>

<details>
<summary id="get_build_failure_logs"><strong><code>get_build_failure_logs</code></strong></summary>

Retrieves detailed failure logs from CircleCI builds. This tool can be used in three ways:

1. **Using Project Slug and Branch (Recommended):**
   - First use `list_followed_projects` to get your projects, then:
   - Example: "Get build failures for my-project on the main branch"

2. **Using CircleCI URLs:**
   - Provide a failed job URL or pipeline URL directly
   - Example: "Get logs from https://app.circleci.com/pipelines/github/org/repo/123"

3. **Using Local Project Context:**
   - Works from your local workspace by providing workspace root, git remote URL, and branch name
   - Example: "Find the latest failed pipeline on my current branch"

The tool returns formatted logs including:

- Job names
- Step-by-step execution details
- Failure messages and context

</details>

<details>
<summary id="get_job_test_results"><strong><code>get_job_test_results</code></strong></summary>

Retrieves test metadata for CircleCI jobs, allowing you to analyze test results without leaving your IDE. This tool can be used in three ways:

1. **Using Project Slug and Branch (Recommended):**
   - Example: "Get test results for my-project on the main branch"

2. **Using CircleCI URL:**
   - Job URL: `https://app.circleci.com/pipelines/github/org/repo/123/workflows/abc-def/jobs/789`
   - Workflow URL: `https://app.circleci.com/pipelines/github/org/repo/123/workflows/abc-def`
   - Pipeline URL: `https://app.circleci.com/pipelines/github/org/repo/123`

3. **Using Local Project Context:**
   - Works from your local workspace by providing workspace root, git remote URL, and branch name

The tool returns:

- Summary of all tests (total, successful, failed)
- Detailed info on failed tests: name, class, file, error message, duration
- List of successful tests with timing
- Filter by test result

> [!NOTE]
> Test metadata must be configured in your CircleCI config. See [Collect Test Data](https://circleci.com/docs/collect-test-data/) for setup instructions.

</details>

<details>
<summary id="get_latest_pipeline_status"><strong><code>get_latest_pipeline_status</code></strong></summary>

Retrieves the status of the latest pipeline for a given branch. This tool can be used in three ways:

1. **Using Project Slug and Branch (Recommended):**
   - Example: "Get the status of the latest pipeline for my-project on the main branch"

2. **Using CircleCI Project URL:**
   - Example: "Get the status of the latest pipeline for https://app.circleci.com/pipelines/github/org/repo"

3. **Using Local Project Context:**
   - Works from your local workspace by providing workspace root, git remote URL, and branch name

Example output:

```
---
Workflow: build
Status: success
Duration: 5 minutes
Created: 4/20/2025, 10:15:30 AM
Stopped: 4/20/2025, 10:20:45 AM
---
Workflow: test
Status: running
Duration: unknown
Created: 4/20/2025, 10:21:00 AM
Stopped: in progress
```

</details>

<details>
<summary id="list_artifacts"><strong><code>list_artifacts</code></strong></summary>

Retrieves the list of artifacts produced by a CircleCI job. This tool can be used in three ways:

1. **Using Project Slug and Branch (Recommended):**
   - First use `list_followed_projects` to get your projects, then:
   - Example: "List artifacts for my-project on the main branch"

2. **Using CircleCI URL:**
   - Job URL: `https://app.circleci.com/pipelines/gh/organization/project/123/workflows/abc-def/jobs/789`
   - Workflow URL: `https://app.circleci.com/pipelines/gh/organization/project/123/workflows/abc-def`
   - Pipeline URL: `https://app.circleci.com/pipelines/gh/organization/project/123`

3. **Using Local Project Context:**
   - Works from your local workspace by providing workspace root, git remote URL, and branch name

Useful for:
- Finding download URLs for build artifacts (binaries, reports, logs)
- Checking what artifacts were produced by a pipeline run

</details>

<details>
<summary id="list_component_versions"><strong><code>list_component_versions</code></strong></summary>

Lists all versions for a specific CircleCI component in an environment. Includes deployment status, commit information, and timestamps.

The tool will prompt you to select the component and environment if not provided.

Useful for:
- Identifying which version is currently live
- Selecting target versions for rollback operations
- Getting deployment details (pipeline, workflow, job)

</details>

<details>
<summary id="list_followed_projects"><strong><code>list_followed_projects</code></strong></summary>

Lists all projects that the user is following on CircleCI.

- Shows all projects you have access to with their `projectSlug`
- Example: "List my CircleCI projects"

Example output:

```
Projects followed:
1. my-project (projectSlug: gh/organization/my-project)
2. another-project (projectSlug: gh/organization/another-project)
```

> [!NOTE]
> The `projectSlug` (not the project name) is required for many other CircleCI tools.

</details>

<details>
<summary id="recommend_prompt_template_tests"><strong><code>recommend_prompt_template_tests</code></strong></summary>

Generates test cases for prompt templates to ensure they produce expected results.

- Creates diverse test scenarios based on your prompt template and context schema
- Returns an array of recommended test cases with various parameter combinations
- Example: "Generate tests for my bedtime story prompt template"

</details>

<details>
<summary id="rerun_workflow"><strong><code>rerun_workflow</code></strong></summary>

Reruns a workflow from its start or from the failed job.

Returns the ID of the newly-created workflow and a link to monitor it.

</details>

<details>
<summary id="run_evaluation_tests"><strong><code>run_evaluation_tests</code></strong></summary>

Runs evaluation tests (also known as "Prompt Tests") on a CircleCI pipeline. Generates an appropriate CircleCI configuration and triggers a pipeline using it.

This tool can be used in three ways:

1. **Using Project Slug and Branch (Recommended):**
   - First use `list_followed_projects` to get your projects, then:
   - Example: "Run evaluation tests for my-project on the main branch"

2. **Using CircleCI URL:**
   - Project URL, Pipeline URL, Workflow URL, or Job URL
   - Example: "Run evaluation tests for https://app.circleci.com/pipelines/gh/organization/project/123"

3. **Using Local Project Context:**
   - Works from your local workspace by providing workspace root, git remote URL, and branch name

The tool accepts prompt template files and returns a URL to monitor the triggered pipeline.

> [!NOTE]
> If the project has multiple pipeline definitions, the tool will return a list of available pipelines for you to choose from.

</details>

<details>
<summary id="run_pipeline"><strong><code>run_pipeline</code></strong></summary>

Triggers a pipeline to run. This tool can be used in three ways:

1. **Using Project Slug and Branch (Recommended):**
   - Example: "Run the pipeline for my-project on the main branch"

2. **Using CircleCI URL:**
   - Pipeline URL, Workflow URL, Job URL, or Project URL with branch
   - Example: "Run the pipeline for https://app.circleci.com/pipelines/github/org/repo/123"

3. **Using Local Project Context:**
   - Works from your local workspace by providing workspace root, git remote URL, and branch name

The tool returns a link to monitor the pipeline execution.

</details>

<details>
<summary id="run_rollback_pipeline"><strong><code>run_rollback_pipeline</code></strong></summary>

Triggers a rollback for a CircleCI project. The tool interactively guides you through:

1. **Project Selection** — lists followed projects for you to choose from
2. **Environment Selection** — lists available environments (auto-selects if only one)
3. **Component Selection** — lists available components (auto-selects if only one)
4. **Version Selection** — displays available versions; you select the target for rollback
5. **Rollback Mode Detection** — checks if a rollback pipeline is configured
6. **Execute Rollback** — two options:
   - **Pipeline Rollback:** triggers the rollback pipeline
   - **Workflow Rerun:** reruns a previous workflow using its workflow ID
7. **Confirmation** — summarizes and confirms before execution

</details>

## Troubleshooting

<details>
<summary><strong>Quick Fixes</strong></summary>

**Most common issues:**

1. **Clear package caches:**
   ```bash
   npx clear-npx-cache
   npm cache clean --force
   ```

2. **Force latest version:** Add `@latest` to your config:
   ```json
   "args": ["-y", "@circleci/mcp-server-circleci@latest"]
   ```

3. **Restart your IDE completely** (not just reload window)

</details>

<details>
<summary><strong>Authentication Issues</strong></summary>

- **Invalid token errors:** Verify your `CIRCLECI_TOKEN` in [Personal API Tokens](https://app.circleci.com/settings/user/tokens)
- **Permission errors:** Ensure the token has read access to your projects
- **Environment variables not loading:** Test with `echo $CIRCLECI_TOKEN` (Mac/Linux) or `echo %CIRCLECI_TOKEN%` (Windows)

</details>

<details>
<summary><strong>Connection and Network Issues</strong></summary>

- **Base URL:** Confirm `CIRCLECI_BASE_URL` is `https://circleci.com`
- **Corporate networks:** Configure npm proxy settings if behind a firewall
- **Firewall blocking:** Check if security software blocks package downloads

</details>

<details>
<summary><strong>System Requirements</strong></summary>

- **Node.js version:** Ensure >= 18.0.0 with `node --version`
- **Update Node.js:** Consider latest LTS if experiencing compatibility issues
- **Package manager:** Verify npm/pnpm is working: `npm --version`

</details>

<details>
<summary><strong>IDE-Specific Issues</strong></summary>

- **Config file location:** Double-check the path for your OS
- **Syntax errors:** Validate JSON syntax in your config file
- **Console logs:** Check the IDE developer console for specific errors
- **Try a different IDE:** Test in another supported editor to isolate the issue

</details>

<details>
<summary><strong>Process Issues</strong></summary>

**Hanging processes — kill existing MCP processes:**

```bash
# Mac/Linux:
pkill -f "mcp-server-circleci"

# Windows:
taskkill /f /im node.exe
```

**Port conflicts:** Restart your IDE if the connection seems blocked.

</details>

<details>
<summary><strong>Advanced Debugging</strong></summary>

- **Test package directly:** `npx @circleci/mcp-server-circleci@latest --help`
- **Verbose logging:** `DEBUG=* npx @circleci/mcp-server-circleci@latest`
- **Docker fallback:** Try Docker installation if npx fails consistently

**Still need help?**
1. Check [GitHub Issues](https://github.com/CircleCI-Public/mcp-server-circleci/issues) for similar problems
2. Include your OS, Node version, and IDE when reporting issues
3. Share relevant error messages from the IDE console

</details>

## Telemetry

The server supports OpenTelemetry metrics for tracking tool usage. To disable telemetry, set `DISABLE_TELEMETRY=true`.

| Metric | Description |
|--------|-------------|
| `circleci.mcp.tool.invocations` | Tool invocation count |
| `circleci.mcp.tool.duration_ms` | Execution time in ms |
| `circleci.mcp.tool.errors` | Error count |

# Development

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/CircleCI-Public/mcp-server-circleci.git
   cd mcp-server-circleci
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Build the project:
   ```bash
   pnpm build
   ```

## Building Docker Container

You can build the Docker container locally using:

```bash
docker build -t circleci:mcp-server-circleci .
```

This will create a Docker image tagged as `circleci:mcp-server-circleci` that you can use with any MCP client.

To run the container locally:

```bash
docker run --rm -i -e CIRCLECI_TOKEN=your-circleci-token -e CIRCLECI_BASE_URL=https://circleci.com circleci:mcp-server-circleci
```

To run the container as a self-managed remote MCP server, add `start=remote` and optionally specify the port (default: `8000`):

```bash
docker run --rm -i -e CIRCLECI_TOKEN=your-circleci-token -e CIRCLECI_BASE_URL=https://circleci.com -e start=remote -e port=8000 circleci:mcp-server-circleci
```

## Development with MCP Inspector

The easiest way to iterate on the MCP Server is using the MCP inspector. You can learn more about the MCP inspector at https://modelcontextprotocol.io/docs/tools/inspector

1. Start the development server:

   ```bash
   pnpm watch # Keep this running in one terminal
   ```

2. In a separate terminal, launch the inspector:

   ```bash
   pnpm inspector
   ```

3. Configure the environment:
   - Add your `CIRCLECI_TOKEN` to the Environment Variables section in the inspector UI
   - The token needs read access to your CircleCI projects
   - Optionally set your CircleCI Base URL (defaults to `https://circleci.com`)

## Testing

- Run the test suite:

  ```bash
  pnpm test
  ```

- Run tests in watch mode during development:
  ```bash
  pnpm test:watch
  ```

For more detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)
