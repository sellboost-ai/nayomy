---
name: "hashicorp/terraform-mcp-server"
description: "The official Terraform MCP Server seamlessly integrates with the Terraform ecosystem, enabling provider discovery, module analysis, and direct Registry API integration for advanced Infrastructure as Code workflows."
description_tr: "Resmi Terraform MCP Server, Terraform ekosistemiyle sorunsuzca entegre olarak sağlayıcı keşfi, modül analizi ve gelişmiş Infrastructure as Code iş akışları için Registry API entegrasyonunu sağlar."
category: "Cloud Platforms"
repo: "hashicorp/terraform-mcp-server"
stars: 1380
url: "https://github.com/hashicorp/terraform-mcp-server"
body_length: 20563
license: "MPL-2.0"
language: "Go"
body_tr: |-
  #  Terraform MCP Sunucusu

  Terraform MCP Sunucusu, [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) 
  sunucusu olup Terraform Registry API'leriyle sorunsuz entegrasyon sağlayarak, Altyapı Kod Olarak (IaC) 
  geliştirme için gelişmiş otomasyon ve etkileşim yetenekleri sunar.

  ## Özellikler

  - **Çift Transport Desteği**: Stdio ve StreamableHTTP transportları yapılandırılabilir uç noktalarla
  - **Terraform Registry Entegrasyonu**: Sağlayıcılar, modüller ve politikalar için genel Terraform Registry API'leriyle doğrudan entegrasyon
  - **HCP Terraform & Terraform Enterprise Desteği**: Tam workspace yönetimi, organizasyon/proje listeleme ve özel registry erişimi
  - **Workspace İşlemleri**: Değişkenler, etiketler ve run yönetimine destek ile workspace'ler oluşturun, güncelleyin, silin
  - **OTel metrikleri araç kullanımını izlemek için**: Açık telemetri meterleriyle entegrasyon, StreamableHTTP modunda araç çağrı hacmini, gecikmeyi ve başarısızlıkları izler. Bu özellik etkinleştirildiğinde varsayılan http sunucusu metriklerini de sunar

  > **Güvenlik Notu:** Bu aşamada MCP sunucusu yalnızca yerel kullanım için tasarlanmıştır. StreamableHTTP transportunu kullanıyorsanız, erişimi yalnızca güvenilen kaynaklar ile sınırlamak için her zaman MCP_ALLOWED_ORIGINS ortam değişkenini yapılandırın. Bu, DNS rebinding saldırılarını ve diğer cross-origin açıklarını önlemeye yardımcı olur.

  > **Güvenlik Notu:** Sorguya bağlı olarak MCP sunucusu belirli Terraform verilerini MCP istemcisine ve LLM'ye maruz bırakabilir. MCP sunucusunu güvenilmeyen MCP istemcileri veya LLM'ler ile kullanmayın.

  > **Yasal Notu:** Üçüncü taraf MCP İstemcisi/LLM kullanımınız yalnızca söz konusu MCP/LLM'nin kullanım şartlarına tabidir ve IBM, bu tür üçüncü taraf araçların performansından sorumlu değildir. IBM, üçüncü taraf MCP İstemcileri/LLM'ler için tüm garantileri ve sorumluluğu açıkça reddetmektedir ve bu tür üçüncü taraf araçlar tarafından neden olunan sorunları çözmek için destek sağlayamayabilir.

  > **Dikkat:**  MCP sunucusu tarafından sağlanan çıktılar ve öneriler dinamik olarak oluşturulur ve sorguya, modele ve bağlı MCP istemcisine göre değişebilir. Kullanıcılar, uygulamadan önce tüm çıktıları/önerileri kuruluşlarının güvenlik en iyi uygulamaları, maliyet verimlilik hedefleri ve uyum gereksinimleriyle uyumlu olduğundan emin olmak için kapsamlı bir şekilde gözden geçirmelidir.

  ## Ön Koşullar

  1. Sunucuyu konteynerleştirilmiş ortamda kullanmak için [Docker](https://www.docker.com/)'ın kurulu ve çalışır durumda olduğundan emin olun.
  1. Model Context Protocol (MCP)'yi destekleyen bir yapay zeka asistanı yükleyin.

  ## Komut Satırı Seçenekleri

  **Ortam Değişkenleri:**

  | Değişken | Açıklama | Varsayılan |
  |----------|----------|-----------|
  | `TFE_ADDRESS` | HCP Terraform veya TFE adresi | `"https://app.terraform.io"` |
  | `TFE_TOKEN` | Terraform Enterprise API token'ı | `""` (boş) |
  | `TFE_SKIP_TLS_VERIFY` | HCP Terraform veya Terraform Enterprise TLS doğrulamasını atla | `false` |
  | `LOG_LEVEL` | Günlükleme seviyesi: `trace`, `debug`, `info`, `warn`, `error`, `fatal`, `panic` (--log-level bayrağını geçersiz kılar) | `info` |
  | `LOG_FORMAT` | Günlükleme biçimi: `text` veya `json` (--log-format bayrağını geçersiz kılar)| `text` |
  | `TRANSPORT_MODE` | HTTP transportu etkinleştirmek için `streamable-http`'ye ayarlayın (eski `http` değeri hala desteklenmektedir) | `stdio` |
  | `TRANSPORT_HOST` | HTTP sunucusunun bağlanacağı host | `127.0.0.1` |
  | `TRANSPORT_PORT` | HTTP sunucusu portu | `8080` |
  | `MCP_ENDPOINT` | HTTP sunucusu uç nokta yolu | `/mcp` |
  | `MCP_KEEP_ALIVE` | SSE bağlantıları için keep-alive aralığı (örn. 30s, 1m). Devre dışı bırakmak için 0 | `0` |
  | `MCP_SESSION_MODE` | Oturum modu: `stateful` veya `stateless` | `stateful` |
  | `MCP_ALLOWED_ORIGINS` | CORS için virgülle ayrılmış izin verilen kaynakların listesi | `""` (boş) |
  | `MCP_CORS_MODE` | CORS modu: `strict`, `development` veya `disabled` | `strict` |
  | `MCP_TLS_CERT_FILE` | TLS sertifika dosyasının yolu, localhost olmayan dağıtım için gerekli (örn. `/path/to/cert.pem`) | `""` (boş) |
  | `MCP_TLS_KEY_FILE` |  TLS anahtar dosyasının yolu, localhost olmayan dağıtım için gerekli (örn. `/path/to/key.pem`)| `""` (boş) |
  | `MCP_RATE_LIMIT_GLOBAL` | Global hız sınırı (biçim: `rps:burst`) | `10:20` |
  | `MCP_RATE_LIMIT_SESSION` | Oturum başına hız sınırı (biçim: `rps:burst`) | `5:10` |
  | `ENABLE_TF_OPERATIONS` | Açık onay gerektiren araçları etkinleştir | `false` |
  | `OTEL_METRICS_ENABLED` | Otel kullanarak araç ve sunucu metriklerini etkinleştir | `false` |
  | `OTEL_METRICS_SERVICE_VERSION` | Metrikleri gönderen terraform-mcp-server sürümü, metrik özniteliklerini ayarlamak için kullanılır. Ayrıca farklı dağıtımlar arasında metrikleri izlemeye yardımcı olur | `latest` |
  | `OTEL_METRICS_SERVICE_NAME` | Metriklerin kaynağını belirler (örn. "terraform-mcp-server") | `terraform-mcp-server` |
  | `OTEL_METRICS_EXPORT_INTERVAL` | Metrik fluslarının sıklığını kontrol eder | `2` |
  | `OTEL_METRICS_ENDPOINT` | OTel Collector'ın veya backend'in URL'si | `localhost:4318` |


  ```bash
  # Stdio modu
  terraform-mcp-server stdio [--log-file /path/to/log] [--log-level info] [--log-format text] [--toolsets <toolsets>] [--tools <tools>]

  # StreamableHTTP modu
  terraform-mcp-server streamable-http [--transport-port 8080] [--transport-host 127.0.0.1] [--mcp-endpoint /mcp] [--log-file /path/to/log] [--log-level info] [--log-format text] [--toolsets <toolsets>] [--tools <tools>]
  ```

  ## Talimatlar

  MCP sunucusunun varsayılan talimatları `cmd/terraform-mcp-server/instructions.md` dosyasında yer almaktadır; bu talimatlar kuruluşunuzun Terraform uygulamaları için uygun görünmüyorsa veya MCP sunucusu yanlış yanıtlar üretiyorsa, lütfen bunları kendi talimatlarınızla değiştirin ve container'ı veya binary'yi yeniden derleyin. Böyle bir talimat örneği `instructions/example-mcp-instructions.md` konumunda yer almaktadır.

  `AGENTS.md` temelde kodlama ajanları için README'ler gibi davranır: yapay zeka kodlama ajanlarının projeniz üzerinde çalışmasına yardımcı olmak için bağlam ve talimatlar sağlamaya yönelik adanmış, öngörülebilir bir yer. Bir `AGENTS.md` dosyası farklı kodlama ajanlarıyla çalışır. Böyle bir talimat örneği `instructions/example-AGENTS.md` konumunda yer almaktadır; bunu kullanmak için Terraform yapılandırmalarınızın bulunduğu dizine `AGENTS.md` adında bir dosya commit'leyin.

  ## Kurulum

  ### Visual Studio Code ile Kullanım

  Aşağıdaki JSON bloğunu VS Code'daki Kullanıcı Ayarları (JSON) dosyasına ekleyin. Bunu `Ctrl + Shift + P` tuşlarına basıp `Preferences: Open User Settings (JSON)` yazarak yapabilirsiniz.

  VS Code'un [agent modu dokümantasyonu](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)nda MCP sunucusu araçlarını kullanma hakkında daha fazla bilgi.

  <table>
  <tr><th>Sürüm 0.3.0+ veya daha yüksek</th><th>Sürüm 0.2.3 veya daha düşük</th></tr>
  <tr valign=top>
  <td>

  ```json
  {
    "mcp": {
      "servers": {
        "terraform": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "-e", "TFE_TOKEN=${input:tfe_token}",
            "-e", "TFE_ADDRESS=${input:tfe_address}",
            "hashicorp/terraform-mcp-server:0.5.2"
          ]
        }
      },
      "inputs": [
        {
          "type": "promptString",
          "id": "tfe_token",
          "description": "Terraform API Token",
          "password": true
        },
        {
          "type": "promptString",
          "id": "tfe_address",
          "description": "Terraform Address",
          "password": false
        }
      ]
    }
  }
  ```
  </td>
  <td>

  ```json
  {
    "mcp": {
      "servers": {
        "terraform": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "hashicorp/terraform-mcp-server:0.2.3"
          ]
        }
      }
    }
  }
  ```

  </td>
  </tr>
  </table>

  İsteğe bağlı olarak, çalışma alanınızda `.vscode/mcp.json` adlı bir dosyaya benzer bir örnek (yani mcp anahtarı olmadan) ekleyebilirsiniz. Bu, konfigürasyonu diğerleriyle paylaşmanıza izin verecektir.

  <table>
  <tr><th>Sürüm 0.3.0+ veya daha yüksek</th><th>Sürüm 0.2.3 veya daha düşük</th></tr>
  <tr valign=top>
  <td>

  ```json
  {
    "servers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e", "TFE_TOKEN=${input:tfe_token}",
          "-e", "TFE_ADDRESS=${input:tfe_address}",
          "hashicorp/terraform-mcp-server:0.5.2"
        ]
      }
    },
    "inputs": [
      {
        "type": "promptString",
        "id": "tfe_token",
        "description": "Terraform API Token",
        "password": true
      },
      {
        "type": "promptString",
        "id": "tfe_address",
        "description": "Terraform Address",
        "password": false
      }
    ]
  }
  ```

  </td>
  <td>

  ```json
  {
    "servers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "hashicorp/terraform-mcp-server:0.2.3"
        ]
      }
    }
  }
  ```
  </td>
  </tr>
  </table>


  [](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%7B%22name%22%3A%22terraform%22%2C%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-i%22%2C%22--rm%22%2C%22hashicorp%2Fterraform-mcp-server%22%5D%7D)
  [](https://insiders.vscode.dev/redirect?url=vscode-insiders%3Amcp%2Finstall%3F%7B%22name%22%3A%22terraform%22%2C%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-i%22%2C%22--rm%22%2C%22hashicorp%2Fterraform-mcp-server%22%5D%7D)

  ### Cursor ile Kullanım

  Bunu Cursor konfigürasyonunuza (`~/.cursor/mcp.json`) veya Ayarlar → Cursor Ayarları → MCP üzerinden ekleyin:

  <table>
  <tr><th>Sürüm 0.3.0+ veya daha yüksek</th><th>Sürüm 0.2.3 veya daha düşük</th></tr>
  <tr valign=top>
  <td>

  ```json
  {
    "mcpServers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e", "TFE_ADDRESS=<<PASTE_TFE_ADDRESS_HERE>>",
          "-e", "TFE_TOKEN=<<PASTE_TFE_TOKEN_HERE>>",
          "hashicorp/terraform-mcp-server:0.5.2"
        ]
      }
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "servers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "hashicorp/terraform-mcp-server:0.2.3"
        ]
      }
    }
  }
  ```
  </td>
  </tr>
  </table>

  <a href="cursor://anysphere.cursor-deeplink/mcp/install?name=terraform&config=eyJjb21tYW5kIjoiZG9ja2VyIiwiYXJncyI6WyJydW4iLCItaSIsIi0tcm0iLCJoYXNoaWNvcnAvdGVycmFmb3JtLW1jcC1zZXJ2ZXIiXX0%3D">
    
  </a>

  ### Claude Desktop / Amazon Q Developer / Kiro CLI ile Kullanım

  Claude Desktop'ta MCP sunucusu araçlarını kullanma hakkında daha fazla bilgi için [kullanıcı dokümantasyonuna](https://modelcontextprotocol.io/quickstart/user) bakın. [Amazon Q Developer](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/qdev-mcp.html) ve [Kiro CLI](https://kiro.dev/docs/mcp/)'de MCP sunucusu kullanma hakkında daha fazla bilgi edinin.

  <table>
  <tr><th>Sürüm 0.3.0+ veya daha yüksek</th><th>Sürüm 0.2.3 veya daha düşük</th></tr>
  <tr valign=top>
  <td>

  ```json
  {
    "mcpServers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e", "TFE_ADDRESS=<<PASTE_TFE_ADDRESS_HERE>>",
          "-e", "TFE_TOKEN=<<PASTE_TFE_TOKEN_HERE>>",
          "hashicorp/terraform-mcp-server:0.5.2"
        ]
      }
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "mcpServers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "hashicorp/terraform-mcp-server:0.2.3"
        ]
      }
    }
  }
  ```
  </td>
  </tr>
  </table>

  ### Claude Code ile Kullanım

  Claude Code'da MCP sunucusu araçlarını kullanma ve ekleme hakkında daha fazla bilgi için [kullanıcı dokümantasyonuna](https://docs.claude.com/en/docs/claude-code/mcp) bakın.

  - Yerel (`stdio`) Transport

  ```sh
  claude mcp add terraform -s user -t stdio -- docker run -i --rm hashicorp/terraform-mcp-server
  ```

  - Uzak (`streamable-http`) Transport

  ```sh
  # Sunucuyu çalıştır (örnek)
  docker run -p 8080:8080 --rm -e TRANSPORT_MODE=streamable-http -e TRANSPORT_HOST=0.0.0.0 hashicorp/terraform-mcp-server

  # Claude Code'a ekle
  claude mcp add --transport http terraform http://localhost:8080/mcp
  ```

  ### Gemini uzantıları ile Kullanım

  Güvenlik için, kimlik bilgilerinizi hardcode etmeyin; HCP Terraform veya Terraform Enterprise kimlik bilgilerini depolamak için `~/.gemini/.env` oluşturun veya güncelleyin (burada ~ ev veya proje dizininizdir)

  ```
  # ~/.gemini/.env
  TFE_ADDRESS=your_tfe_address_here
  TFE_TOKEN=your_tfe_token_here
  ```

  Uzantıyı yükleyin ve Gemini'yi çalıştırın

  ```
  gemini extensions install https://github.com/hashicorp/terraform-mcp-server
  gemini
  ```

  ### Bob IDE / Shell ile Kullanım

  Bob IDE veya Shell'de MCP sunucusu araçlarını kullanma ve ekleme hakkında daha fazla bilgi için [Bob'da MCP Kullanımı](https://bob.ibm.com/docs/ide/configuration/mcp/mcp-in-bob) bölümüne bakın.

  <table>
  <tr><th>Sürüm 0.3.0+ veya daha yüksek</th><th>Sürüm 0.2.3 veya daha düşük</th></tr>
  <tr valign=top>
  <td>

  ```json
  {
    "mcpServers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e", "TFE_ADDRESS=<<PASTE_TFE_ADDRESS_HERE>>",
          "-e", "TFE_TOKEN=<<PASTE_TFE_TOKEN_HERE>>",
          "hashicorp/terraform-mcp-server:0.5.2"
        ],
        "disabled": false
      }
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "mcpServers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "hashicorp/terraform-mcp-server:0.2.3"
        ],
        "disabled": false
      }
    }
  }
  ```

  </td>
  </tr>
  </table>

  ## Kaynaktan Yükleme

  En son release sürümünü kullanın:

  ```console
  go install github.com/hashicorp/terraform-mcp-server/cmd/terraform-mcp-server@latest
  ```

  main branch'ini kullanın:

  ```console
  go install github.com/hashicorp/terraform-mcp-server/cmd/terraform-mcp-server@main
  ```

  <table>
  <tr><th>Sürüm 0.3.0+ veya daha yüksek</th><th>Sürüm 0.2.3 veya daha düşük</th></tr>
  <tr valign=top>
  <td>

  ```json
  {
    "mcp": {
      "servers": {
        "terraform": {
          "type": "stdio",
          "command": "/path/to/terraform-mcp-server",
          "env": {
            "TFE_TOKEN": "<<TFE_TOKEN_HERE>>"
          },
        }
      }
    }
  }
  ```

  </td>
  <td>

  ```json
  {
    "mcp": {
      "servers": {
        "terraform": {
          "type": "stdio",
          "command": "/path/to/terraform-mcp-server"
        }
      }
    }
  }
  ```
  </td>
  </tr>
  </table>

  ## Docker İmajını Yerel Olarak Derleme

  Sunucuyu kullanmadan önce Docker imajını yerel olarak derlemeniz gerekir:

  1. Depoyu klonlayın:
  ```bash
  git clone https://github.com/hashicorp/terraform-mcp-server.git
  cd terraform-mcp-server
  ```

  2. Docker imajını derleyin:
  ```bash
  make docker-build
  ```

  3. Bu, aşağıdaki konfigürasyonda kullanabileceğiniz yerel bir Docker imajı oluşturacaktır.

  ```bash
  # Stdio modunda çalıştır
  docker run -i --rm terraform-mcp-server:dev

  # streamable-http modunda çalıştır
  docker run -p 8080:8080 --rm -e TRANSPORT_MODE=streamable-http -e TRANSPORT_HOST=0.0.0.0 terraform-mcp-server:dev

  # Araçları filtrele (isteğe bağlı)
  docker run -i --rm terraform-mcp-server:dev --toolsets=registry,terraform
  docker run -i --rm terraform-mcp-server:dev --tools=search_providers,get_provider_details
  ```

  > **Not:** Docker'da çalıştırırken, container'ın dışından bağlantılara izin vermek için `TRANSPORT_HOST=0.0.0.0` ayarlamalısınız.

  4. (İsteğe bağlı) Http modunda bağlantıyı test edin

  ```bash
  # Bağlantıyı test et
  curl http://localhost:8080/health
  ```

  5. Bunu yapay zeka asistanınızda aşağıdaki gibi kullanabilirsiniz:

  ```json
  {
    "mcpServers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "terraform-mcp-server:dev"
        ]
      }
    }
  }
  ```

  ## Mevcut Araçlar

  [Mevcut araçları burada kontrol edin :link:](https://developer.hashicorp.com/terraform/docs/tools/mcp-server/reference#available-tools)

  ## Mevcut Kaynaklar

  [Mevcut kaynakları burada kontrol edin :link:](https://developer.hashicorp.com/terraform/docs/tools/mcp-server/reference#available-tools)

  ## Mevcut Metrikler

  İki tür metrik toplanmaktadır.
  İlk olarak, HTTP mux'u otelhttp.NewHandler(...) ile kaplayarak standart HTTP sunucusu metrikleri eklenir. Bu, aşağıdakileri yayarlar:

  1. http.server.request.body.size
  2. http.server.response.body.size
  3. http.server.request.duration

  İkincisi, MCP sunucusu MCP hooks'ları (BeforeCallTool / AfterCallTool) kullanarak araç yürütme etrafında özel araç metrikleri kaydeder. Bunlar aşağıdakileri yayarlar:

  1. mcp_tool_calls_total
  2. mcp_tool_errors_total
  3. mcp_tool_duration_seconds


  ### Araç Filtreleme

  `--toolsets` (gruplar) veya `--tools` (bireysel) kullanarak hangi araçların kullanılabilir olduğunu kontrol edin:

  ```bash
  # Araç gruplarını etkinleştir (varsayılan: registry)
  terraform-mcp-server --toolsets=registry,terraform

  # Yalnızca belirli araçları etkinleştir
  terraform-mcp-server --tools=search_providers,get_provider_details,list_workspaces
  ```

  Mevcut araç setleri: `registry`, `registry-private`, `terraform`, `all`, `default`. Bireysel araç adları için `pkg/toolsets/mapping.go` dosyasına bakın. Her iki bayrağı birlikte kullanamaz.

  ## Transport Desteği

  Terraform MCP Sunucusu birden fazla transport protokolünü destekler:

  ### 1. Stdio Transport (Varsayılan)
  JSON-RPC mesajlarını kullanarak standart giriş/çıkış iletişimi. Yerel geliştirme ve MCP istemcileriyle doğrudan entegrasyon için idealdir.

  ### 2. StreamableHTTP Transport
  Hem doğrudan HTTP isteklerini hem de Sunucu Tarafından Gönderilen Olayları (SSE) akışlarını destekleyen modern HTTP tabanlı transport. Bu, uzak/dağıtılmış kurulumlar için önerilen transporttur.

  **Özellikler:**
  - **Uç Nokta**: `http://{hostname}:8080/mcp`
  - **Sağlık Kontrolü**: `http://{hostname}:8080/health`
  - **Ortam Konfigürasyonu**: HTTP transportunu etkinleştirmek için `TRANSPORT_MODE=http` veya `TRANSPORT_PORT=8080` ayarlayın

  ## Oturum Modları

  Terraform MCP Sunucusu, StreamableHTTP transportu kullanılırken iki oturum modunu destekler:

  - **Stateful Modu (Varsayılan)**: İstekler arasında oturum durumunu koruyarak bağlam duyarlı işlemleri sağlar.
  - **Stateless Modu**: Her istek, oturum durumunu korumadan bağımsız olarak işlenir; bu, yüksek kullanılabilirlik dağıtımları veya yük dengeleyicileri kullanırken kullanışlı olabilir.

  Stateless modunu etkinleştirmek için ortam değişkenini ayarlayın:
  ```bash
  export MCP_SESSION_MODE=stateless
  ```

  ## Sorun Giderme

  ### Kurumsal Proxy / TLS Denetimi (Zscaler, vb.)

  Kurumsal TLS denetimi yapan bir proxy'nin arkasındaysanız (Zscaler Internet Access gibi), sertifika hataları görebilirsiniz:
  ```
  tls: failed to verify certificate: x509: certificate signed by unknown authority
  ```

  **Çözüm: Kurumsal CA sertifikanızı container'a bağlayın:**
  ```bash
  docker run -i --rm \
    -v /path/to/corporate-ca.pem:/etc/ssl/certs/corporate-ca.pem \
    -e SSL_CERT_FILE=/etc/ssl/certs/corporate-ca.pem \
    hashicorp/terraform-mcp-server:0.5.2
  ```

  MCP istemci konfigürasyonları için:
  ```json
  {
    "mcpServers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-v", "/path/to/corporate-ca.pem:/etc/ssl/certs/corporate-ca.pem",
          "-e", "SSL_CERT_FILE=/etc/ssl/certs/corporate-ca.pem",
          "-e", "TFE_TOKEN=<>",
          "hashicorp/terraform-mcp-server:0.5.2"
        ]
      }
    }
  }
  ```

  **Alternatif: Binary'yi doğrudan çalıştırın**

  Docker'ın ortamınızda izin verilmemesi
---

#  Terraform MCP Server

The Terraform MCP Server is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction)
server that provides seamless integration with Terraform Registry APIs, enabling advanced
automation and interaction capabilities for Infrastructure as Code (IaC) development.

## Features

- **Dual Transport Support**: Both Stdio and StreamableHTTP transports with configurable endpoints
- **Terraform Registry Integration**: Direct integration with public Terraform Registry APIs for providers, modules, and policies
- **HCP Terraform & Terraform Enterprise Support**: Full workspace management, organization/project listing, and private registry access
- **Workspace Operations**: Create, update, delete workspaces with support for variables, tags, and run management
- **OTel metrics for monitoring tool usage**: Integration with open telemetry meters to track tool-call volume, latency and failures in Streamable HTTP mode. Also exposes default http server metrics when this feature is enabled

> **Security Note:** At this stage, the MCP server is intended for local use only. If using the StreamableHTTP transport, always configure the MCP_ALLOWED_ORIGINS environment variable to restrict access to trusted origins only. This helps prevent DNS rebinding attacks and other cross-origin vulnerabilities.

> **Security Note:** Depending on the query, the MCP server may expose certain Terraform data to the MCP client and LLM. Do not use the MCP server with untrusted MCP clients or LLMs.

> **Legal Note:** Your use of a third party MCP Client/LLM is subject solely to the terms of use for such MCP/LLM, and IBM is not responsible for the performance of such third party tools. IBM expressly disclaims any and all warranties and liability for third party MCP Clients/LLMs, and may not be able to provide support to resolve issues which are caused by the third party tools.

> **Caution:**  The outputs and recommendations provided by the MCP server are generated dynamically and may vary based on the query, model, and the connected MCP client. Users should thoroughly review all outputs/recommendations to ensure they align with their organization’s security best practices, cost-efficiency goals, and compliance requirements before implementation.

## Prerequisites

1. Ensure [Docker](https://www.docker.com/) is installed and running to use the server in a containerized environment.
1. Install an AI assistant that supports the Model Context Protocol (MCP).

## Command Line Options

**Environment Variables:**

| Variable | Description | Default |
|----------|-------------|---------|
| `TFE_ADDRESS` | HCP Terraform or TFE address | `"https://app.terraform.io"` |
| `TFE_TOKEN` | Terraform Enterprise API token | `""` (empty) |
| `TFE_SKIP_TLS_VERIFY` | Skip HCP Terraform or Terraform Enterprise TLS verification | `false` |
| `LOG_LEVEL` | Logging level: `trace`, `debug`, `info`, `warn`, `error`, `fatal`, `panic` (overrides `--log-level` flag) | `info` |
| `LOG_FORMAT` | Logging format: `text` or `json` (overrides `--log-format` flag)| `text` |
| `TRANSPORT_MODE` | Set to `streamable-http` to enable HTTP transport (legacy `http` value still supported) | `stdio` |
| `TRANSPORT_HOST` | Host to bind the HTTP server | `127.0.0.1` |
| `TRANSPORT_PORT` | HTTP server port | `8080` |
| `MCP_ENDPOINT` | HTTP server endpoint path | `/mcp` |
| `MCP_KEEP_ALIVE` | Keep-alive interval for SSE connections (e.g., 30s, 1m). 0 to disable | `0` |
| `MCP_SESSION_MODE` | Session mode: `stateful` or `stateless` | `stateful` |
| `MCP_ALLOWED_ORIGINS` | Comma-separated list of allowed origins for CORS | `""` (empty) |
| `MCP_CORS_MODE` | CORS mode: `strict`, `development`, or `disabled` | `strict` |
| `MCP_TLS_CERT_FILE` | Path to TLS cert file, required for non-localhost deployment (e.g. `/path/to/cert.pem`) | `""` (empty) |
| `MCP_TLS_KEY_FILE` |  Path to TLS key file, required for non-localhost deployment (e.g. `/path/to/key.pem`)| `""` (empty) |
| `MCP_RATE_LIMIT_GLOBAL` | Global rate limit (format: `rps:burst`) | `10:20` |
| `MCP_RATE_LIMIT_SESSION` | Per-session rate limit (format: `rps:burst`) | `5:10` |
| `ENABLE_TF_OPERATIONS` | Enable tools that require explicit approval | `false` |
| `OTEL_METRICS_ENABLED` | Enable tools and server metrics using otel | `false` |
| `OTEL_METRICS_SERVICE_VERSION` | Version of the terraform-mcp-server sending metrics, which is used to set metric attributes. It also helps track metrics across different deployments | `latest` |
| `OTEL_METRICS_SERVICE_NAME` | Identifies the source of the metrics (e.g., "terraform-mcp-server") | `terraform-mcp-server` |
| `OTEL_METRICS_EXPORT_INTERVAL` | Controls the frequency of metric flushes | `2` |
| `OTEL_METRICS_ENDPOINT` | URL of your OTel Collector or backend | `localhost:4318` |


```bash
# Stdio mode
terraform-mcp-server stdio [--log-file /path/to/log] [--log-level info] [--log-format text] [--toolsets <toolsets>] [--tools <tools>]

# StreamableHTTP mode
terraform-mcp-server streamable-http [--transport-port 8080] [--transport-host 127.0.0.1] [--mcp-endpoint /mcp] [--log-file /path/to/log] [--log-level info] [--log-format text] [--toolsets <toolsets>] [--tools <tools>]
```

## Instructions

Default instructions for the MCP server is located in `cmd/terraform-mcp-server/instructions.md`, if those do not seem appropriate for your organization's Terraform practices or if the MCP server is producing inaccurate responses, please replace them with your own instructions and rebuild the container or binary. An example of such instruction is located in `instructions/example-mcp-instructions.md`

`AGENTS.md` essentially behaves as READMEs for coding agents: a dedicated, predictable place to provide the context and instructions to help AI coding agents work on your project. One `AGENTS.md` file works with different coding agents. An example of such instruction is located in `instructions/example-AGENTS.md`, in order to use it commit a file name `AGENTS.md` to the directory where your Terraform configurations reside.

## Installation

### Usage with Visual Studio Code

Add the following JSON block to your User Settings (JSON) file in VS Code. You can do this by pressing `Ctrl + Shift + P` and typing `Preferences: Open User Settings (JSON)`.

More about using MCP server tools in VS Code's [agent mode documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

<table>
<tr><th>Version 0.3.0+ or greater</th><th>Version 0.2.3 or lower</th></tr>
<tr valign=top>
<td>

```json
{
  "mcp": {
    "servers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e", "TFE_TOKEN=${input:tfe_token}",
          "-e", "TFE_ADDRESS=${input:tfe_address}",
          "hashicorp/terraform-mcp-server:0.5.2"
        ]
      }
    },
    "inputs": [
      {
        "type": "promptString",
        "id": "tfe_token",
        "description": "Terraform API Token",
        "password": true
      },
      {
        "type": "promptString",
        "id": "tfe_address",
        "description": "Terraform Address",
        "password": false
      }
    ]
  }
}
```
</td>
<td>

```json
{
  "mcp": {
    "servers": {
      "terraform": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "hashicorp/terraform-mcp-server:0.2.3"
        ]
      }
    }
  }
}
```

</td>
</tr>
</table>

Optionally, you can add a similar example (i.e. without the mcp key) to a file called `.vscode/mcp.json` in your workspace. This will allow you to share the configuration with others.

<table>
<tr><th>Version 0.3.0+ or greater</th><th>Version 0.2.3 or lower</th></tr>
<tr valign=top>
<td>

```json
{
  "servers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e", "TFE_TOKEN=${input:tfe_token}",
        "-e", "TFE_ADDRESS=${input:tfe_address}",
        "hashicorp/terraform-mcp-server:0.5.2"
      ]
    }
  },
  "inputs": [
    {
      "type": "promptString",
      "id": "tfe_token",
      "description": "Terraform API Token",
      "password": true
    },
    {
      "type": "promptString",
      "id": "tfe_address",
      "description": "Terraform Address",
      "password": false
    }
  ]
}
```

</td>
<td>

```json
{
  "servers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "hashicorp/terraform-mcp-server:0.2.3"
      ]
    }
  }
}
```
</td>
</tr>
</table>


[](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%7B%22name%22%3A%22terraform%22%2C%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-i%22%2C%22--rm%22%2C%22hashicorp%2Fterraform-mcp-server%22%5D%7D)
[](https://insiders.vscode.dev/redirect?url=vscode-insiders%3Amcp%2Finstall%3F%7B%22name%22%3A%22terraform%22%2C%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-i%22%2C%22--rm%22%2C%22hashicorp%2Fterraform-mcp-server%22%5D%7D)

### Usage with Cursor

Add this to your Cursor config (`~/.cursor/mcp.json`) or via Settings → Cursor Settings → MCP:

<table>
<tr><th>Version 0.3.0+ or greater</th><th>Version 0.2.3 or lower</th></tr>
<tr valign=top>
<td>

```json
{
  "mcpServers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e", "TFE_ADDRESS=<<PASTE_TFE_ADDRESS_HERE>>",
        "-e", "TFE_TOKEN=<<PASTE_TFE_TOKEN_HERE>>",
        "hashicorp/terraform-mcp-server:0.5.2"
      ]
    }
  }
}
```

</td>
<td>

```json
{
  "servers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "hashicorp/terraform-mcp-server:0.2.3"
      ]
    }
  }
}
```
</td>
</tr>
</table>

<a href="cursor://anysphere.cursor-deeplink/mcp/install?name=terraform&config=eyJjb21tYW5kIjoiZG9ja2VyIiwiYXJncyI6WyJydW4iLCItaSIsIi0tcm0iLCJoYXNoaWNvcnAvdGVycmFmb3JtLW1jcC1zZXJ2ZXIiXX0%3D">
  
</a>

### Usage with Claude Desktop / Amazon Q Developer / Kiro CLI

More about using MCP server tools in Claude Desktop [user documentation](https://modelcontextprotocol.io/quickstart/user). Read more about using MCP server in [Amazon Q Developer](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/qdev-mcp.html) and [Kiro CLI](https://kiro.dev/docs/mcp/).

<table>
<tr><th>Version 0.3.0+ or greater</th><th>Version 0.2.3 or lower</th></tr>
<tr valign=top>
<td>

```json
{
  "mcpServers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e", "TFE_ADDRESS=<<PASTE_TFE_ADDRESS_HERE>>",
        "-e", "TFE_TOKEN=<<PASTE_TFE_TOKEN_HERE>>",
        "hashicorp/terraform-mcp-server:0.5.2"
      ]
    }
  }
}
```

</td>
<td>

```json
{
  "mcpServers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "hashicorp/terraform-mcp-server:0.2.3"
      ]
    }
  }
}
```
</td>
</tr>
</table>

### Usage with Claude Code

More about using and adding MCP server tools in Claude Code [user documentation](https://docs.claude.com/en/docs/claude-code/mcp)

- Local (`stdio`) Transport

```sh
claude mcp add terraform -s user -t stdio -- docker run -i --rm hashicorp/terraform-mcp-server
```

- Remote (`streamable-http`) Transport

```sh
# Run server (example)
docker run -p 8080:8080 --rm -e TRANSPORT_MODE=streamable-http -e TRANSPORT_HOST=0.0.0.0 hashicorp/terraform-mcp-server

# Add to Claude Code
claude mcp add --transport http terraform http://localhost:8080/mcp
```

### Usage with Gemini extensions

For security, avoid hardcoding your credentials, create or update `~/.gemini/.env` (where ~ is your home or project directory) for storing HCP Terraform or Terraform Enterprise credentials

```
# ~/.gemini/.env
TFE_ADDRESS=your_tfe_address_here
TFE_TOKEN=your_tfe_token_here
```

Install the extension & run Gemini

```
gemini extensions install https://github.com/hashicorp/terraform-mcp-server
gemini
```

### Usage with Bob IDE / Shell

More about using and adding MCP servers tools in Bob IDE or Shell [Using MCP in Bob](https://bob.ibm.com/docs/ide/configuration/mcp/mcp-in-bob).

<table>
<tr><th>Version 0.3.0+ or greater</th><th>Version 0.2.3 or lower</th></tr>
<tr valign=top>
<td>

```json
{
  "mcpServers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e", "TFE_ADDRESS=<<PASTE_TFE_ADDRESS_HERE>>",
        "-e", "TFE_TOKEN=<<PASTE_TFE_TOKEN_HERE>>",
        "hashicorp/terraform-mcp-server:0.5.2"
      ],
      "disabled": false
    }
  }
}
```

</td>
<td>

```json
{
  "mcpServers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "hashicorp/terraform-mcp-server:0.2.3"
      ],
      "disabled": false
    }
  }
}
```

</td>
</tr>
</table>

## Install from source

Use the latest release version:

```console
go install github.com/hashicorp/terraform-mcp-server/cmd/terraform-mcp-server@latest
```

Use the main branch:

```console
go install github.com/hashicorp/terraform-mcp-server/cmd/terraform-mcp-server@main
```

<table>
<tr><th>Version 0.3.0+ or greater</th><th>Version 0.2.3 or lower</th></tr>
<tr valign=top>
<td>

```json
{
  "mcp": {
    "servers": {
      "terraform": {
        "type": "stdio",
        "command": "/path/to/terraform-mcp-server",
        "env": {
          "TFE_TOKEN": "<<TFE_TOKEN_HERE>>"
        },
      }
    }
  }
}
```

</td>
<td>

```json
{
  "mcp": {
    "servers": {
      "terraform": {
        "type": "stdio",
        "command": "/path/to/terraform-mcp-server"
      }
    }
  }
}
```
</td>
</tr>
</table>

## Building the Docker Image locally

Before using the server, you need to build the Docker image locally:

1. Clone the repository:
```bash
git clone https://github.com/hashicorp/terraform-mcp-server.git
cd terraform-mcp-server
```

2. Build the Docker image:
```bash
make docker-build
```

3. This will create a local Docker image that you can use in the following configuration.

```bash
# Run in stdio mode
docker run -i --rm terraform-mcp-server:dev

# Run in streamable-http mode
docker run -p 8080:8080 --rm -e TRANSPORT_MODE=streamable-http -e TRANSPORT_HOST=0.0.0.0 terraform-mcp-server:dev

# Filter tools (optional)
docker run -i --rm terraform-mcp-server:dev --toolsets=registry,terraform
docker run -i --rm terraform-mcp-server:dev --tools=search_providers,get_provider_details
```

> **Note:** When running in Docker, you should set `TRANSPORT_HOST=0.0.0.0` to allow connections from outside the container.

4. (Optional) Test connection in http mode

```bash
# Test the connection
curl http://localhost:8080/health
```

5. You can use it on your AI assistant as follow:

```json
{
  "mcpServers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "terraform-mcp-server:dev"
      ]
    }
  }
}
```

## Available Tools

[Check out available tools here :link:](https://developer.hashicorp.com/terraform/docs/tools/mcp-server/reference#available-tools)

## Available Resources

[Check out available resources here :link:](https://developer.hashicorp.com/terraform/docs/tools/mcp-server/reference#available-tools)

## Available Metrics

Two kinds of metrics are collected.
First, standard HTTP server metrics are added by wrapping the HTTP mux with otelhttp.NewHandler(...). This emits:

1. http.server.request.body.size
2. http.server.response.body.size
3. http.server.request.duration

Second, the MCP server records custom tool metrics around tool execution using MCP hooks (BeforeCallTool / AfterCallTool). These emit:

1. mcp_tool_calls_total
2. mcp_tool_errors_total
3. mcp_tool_duration_seconds


### Tool Filtering

Control which tools are available using `--toolsets` (groups) or `--tools` (individual):

```bash
# Enable tool groups (default: registry)
terraform-mcp-server --toolsets=registry,terraform

# Enable specific tools only
terraform-mcp-server --tools=search_providers,get_provider_details,list_workspaces
```

Available toolsets: `registry`, `registry-private`, `terraform`, `all`, `default`. See `pkg/toolsets/mapping.go` for individual tool names. Cannot use both flags together.

## Transport Support

The Terraform MCP Server supports multiple transport protocols:

### 1. Stdio Transport (Default)
Standard input/output communication using JSON-RPC messages. Ideal for local development and direct integration with MCP clients.

### 2. StreamableHTTP Transport
Modern HTTP-based transport supporting both direct HTTP requests and Server-Sent Events (SSE) streams. This is the recommended transport for remote/distributed setups.

**Features:**
- **Endpoint**: `http://{hostname}:8080/mcp`
- **Health Check**: `http://{hostname}:8080/health`
- **Environment Configuration**: Set `TRANSPORT_MODE=http` or `TRANSPORT_PORT=8080` to enable

## Session Modes

The Terraform MCP Server supports two session modes when using the StreamableHTTP transport:

- **Stateful Mode (Default)**: Maintains session state between requests, enabling context-aware operations.
- **Stateless Mode**: Each request is processed independently without maintaining session state, which can be useful for high-availability deployments or when using load balancers.

To enable stateless mode, set the environment variable:
```bash
export MCP_SESSION_MODE=stateless
```
## Troubleshooting

### Corporate Proxy / TLS Inspection (Zscaler, etc.)

If you're behind a corporate proxy that performs TLS inspection (like Zscaler Internet Access), you may see certificate errors:
```
tls: failed to verify certificate: x509: certificate signed by unknown authority
```

**Solution: Mount your corporate CA certificate into the container:**
```bash
docker run -i --rm \
  -v /path/to/corporate-ca.pem:/etc/ssl/certs/corporate-ca.pem \
  -e SSL_CERT_FILE=/etc/ssl/certs/corporate-ca.pem \
  hashicorp/terraform-mcp-server:0.5.2
```

For MCP client configurations:
```json
{
  "mcpServers": {
    "terraform": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-v", "/path/to/corporate-ca.pem:/etc/ssl/certs/corporate-ca.pem",
        "-e", "SSL_CERT_FILE=/etc/ssl/certs/corporate-ca.pem",
        "-e", "TFE_TOKEN=<>",
        "hashicorp/terraform-mcp-server:0.5.2"
      ]
    }
  }
}
```

**Alternative: Run the binary directly**

If Docker is not permitted in your environment, you can install and run the server binary directly, which will use your system's certificate store:
```bash
go install github.com/hashicorp/terraform-mcp-server/cmd/terraform-mcp-server@latest
terraform-mcp-server stdio
```
## Development

### Prerequisites
- Go (check [go.mod](./go.mod) file for specific version)
- Docker (optional, for container builds)

### Available Make Commands

| Command | Description |
|---------|-------------|
| `make build` | Build the binary |
| `make test` | Run all tests |
| `make test-e2e` | Run end-to-end tests |
| `make docker-build` | Build Docker image |
| `make run-http` | Run HTTP server locally |
| `make docker-run-http` | Run HTTP server in Docker |
| `make test-http` | Test HTTP health endpoint |
| `make clean` | Remove build artifacts |
| `make help` | Show all available commands |

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is licensed under the terms of the MPL-2.0 open source license. Please refer to [LICENSE](./LICENSE) file for the full terms.

## Security

For security issues, please contact security@hashicorp.com or follow our [security policy](https://www.hashicorp.com/en/trust/security/vulnerability-management).

## Support

For bug reports and feature requests, please open an issue on GitHub.

For general questions and discussions, open a GitHub Discussion.
