---
name: "ckanthony/openapi-mcp"
description: "OpenAPI-MCP: Dockerized MCP Server to allow your AI agent to access any API with existing api docs."
description_tr: "OpenAPI-MCP: API dökümentasyonları olan herhangi bir API'ye AI ajanınızı bağlamak için containerized MCP Server."
category: "Code Execution"
repo: "ckanthony/openapi-mcp"
stars: 187
url: "https://github.com/ckanthony/openapi-mcp"
body_length: 13923
language: "Go"
body_tr: |-
  # OpenAPI-MCP: AI aracınızın mevcut API belgelerine sahip herhangi bir API'ye erişmesini sağlayan Dockerize MCP Sunucusu

  [![Go Reference](https://pkg.go.dev/badge/github.com/ckanthony/openapi-mcp.svg)](https://pkg.go.dev/github.com/ckanthony/openapi-mcp)
  [![CI](https://github.com/ckanthony/openapi-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/ckanthony/openapi-mcp/actions/workflows/ci.yml)
  [![codecov](https://codecov.io/gh/ckanthony/openapi-mcp/branch/main/graph/badge.svg)](https://codecov.io/gh/ckanthony/openapi-mcp)
  ![](https://badge.mcpx.dev?type=dev 'MCP Dev')

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ckanthony/openapi-mcp)](https://archestra.ai/mcp-catalog/ckanthony__openapi-mcp)

  ![openapi-mcp logo](https://raw.githubusercontent.com/ckanthony/openapi-mcp/HEAD/openapi-mcp.png)

  **MCP araç tanımlarını doğrudan bir Swagger/OpenAPI belirtim dosyasından oluşturun.**

  OpenAPI-MCP, bir `swagger.json` veya `openapi.yaml` dosyasını okuyan ve karşılık gelen [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) araç setini oluşturan bir dockerize MCP sunucusudur. Bu, [Cursor](https://cursor.sh/) gibi MCP ile uyumlu istemcilerin standart OpenAPI belirtimleriyle tanımlanan API'lerle etkileşime girmesini sağlar. Artık AI aracınızı, sadece OpenAPI/Swagger belirtimini sağlayarak herhangi bir API'ye erişebilir hale getirebilirsiniz - ek kodlama gerekmez.

  ## İçindekiler

  -   [Neden OpenAPI-MCP?](#neden-openapi-mcp)
  -   [Özellikler](#özellikler)
  -   [Kurulum](#kurulum)
      -   [Önceden Derlenmiş Docker Hub İmajını Kullanma (Önerilen)](#önceden-derlenmiş-docker-hub-imajını-kullanma-önerilen)
      -   [Yerel Olarak Derleme (İsteğe Bağlı)](#yerel-olarak-derleme-isteğe-bağlı)
  -   [Weatherbit Örneğini Çalıştırma (Adım Adım)](#weatherbit-örneğini-çalıştırma-adım-adım)
  -   [Komut Satırı Seçenekleri](#komut-satırı-seçenekleri)
      -   [Ortam Değişkenleri](#ortam-değişkenleri)

  ## Demo

  Demoyu kendiniz çalıştırın: [Weatherbit Örneğini Çalıştırma (Adım Adım)](#weatherbit-örneğini-çalıştırma-adım-adım)

  ![demo](https://github.com/user-attachments/assets/4d457137-5da4-422a-b323-afd4b175bd56)

  ## Neden OpenAPI-MCP?

  -   **Standart Uyumluluğu:** Mevcut OpenAPI/Swagger belgelerinizi kullanın.
  -   **Otomatik Araç Oluşturma:** Her endpoint için manuel yapılandırma olmadan MCP araçları oluşturun.
  -   **Esnek API Anahtarı Yönetimi:** Proxy API'si için API anahtarı doğrulamasını güvenli bir şekilde yönetin ve anahtarları MCP istemcisine sunmayın.
  -   **Yerel ve Uzak Belgeler:** Yerel belirtim dosyaları veya uzak URL'ler ile çalışır.
  -   **Dockerize Araç:** Docker ile konteynerize hizmet olarak kolayca dağıtın ve çalıştırın.

  ## Özellikler

  -   **OpenAPI v2 (Swagger) & v3 Desteği:** Standart belirtim biçimlerini ayrıştırır.
  -   **Şema Oluşturma:** OpenAPI işlem parametrelerinden ve request/response tanımlarından MCP araç şemaları oluşturur.
  -   **Güvenli API Anahtarı Yönetimi:**
      -   API anahtarlarını komut satırı yapılandırmasına dayalı olarak isteklere enjekte eder (`header`, `query`, `path`, `cookie`).
          -   API anahtarlarını doğrudan bayraklardan (`--api-key`), ortam değişkenlerinden (`--api-key-env`) veya yerel belgelerle birlikte bulunan `.env` dosyalarından yükler.
          -   API anahtarlarını son MCP istemcisinden (ör. AI asistanı) gizli tutar.
  -   **Sunucu URL'si Algılaması:** Belirtimden sunucu URL'lerini araç etkileşimleri için temel olarak kullanır (geçersiz kılınabilir).
  -   **Filtreleme:** Belirli işlemleri veya etiketleri dahil etme/dışlama seçenekleri (`--include-tag`, `--exclude-tag`, `--include-op`, `--exclude-op`).
  -   **Request Header Enjeksiyonu:** `REQUEST_HEADERS` ortam değişkeni aracılığıyla özel başlıklar geçirin (ek kimlik doğrulama, izleme vb. için).

  ## Kurulum

  ### Docker

  Bu aracı çalıştırmanın önerilen yolu [Docker](https://hub.docker.com/r/ckanthony/openapi-mcp) aracılığıyladır.

  #### Önceden Derlenmiş Docker Hub İmajını Kullanma (Önerilen)

  Alternatif olarak, [Docker Hub](https://hub.docker.com/r/ckanthony/openapi-mcp) üzerinde mevcut olan önceden derlenmiş imajı kullanabilirsiniz.

  1.  **İmajı Çekin:**
      ```bash
      docker pull ckanthony/openapi-mcp:latest
      ```
  2.  **Konteyneri Çalıştırın:**
      Yukarıdaki `docker run` örneklerini izleyin, ancak `openapi-mcp:latest` yerine `ckanthony/openapi-mcp:latest` kullanın.

  #### Yerel Olarak Derleme (İsteğe Bağlı)

  1.  **Docker İmajını Yerel Olarak Derleyin:**
      ```bash
      # Depo kökü klasörüne gidin
      cd openapi-mcp
      # Docker imajını derleyin (istediğiniz şekilde etiketleyin, ör. openapi-mcp:latest)
      docker build -t openapi-mcp:latest .
      ```

  2.  **Konteyneri Çalıştırın:**
      Konteyneri çalıştırırken OpenAPI belirtimini ve gerekli API anahtarı yapılandırmasını sağlamanız gerekir.

      *   **Örnek 1: Yerel belirtim dosyası ve `.env` dosyası kullanma:**
          -   OpenAPI belirtim dosyanızı içeren bir dizin oluşturun (ör. `./my-api`, `openapi.json` veya `swagger.yaml` içerir).
          -   API bir anahtar gerektiriyorsa, *aynı dizinde* bir `.env` dosyası oluşturun (ör. `./my-api/.env`) ve `API_KEY=your_actual_key` yazın (`--api-key-env` bayrağı farklıysa `API_KEY` değiştirin).
          ```bash
          docker run -p 8080:8080 --rm \\
              -v $(pwd)/my-api:/app/spec \\
              --env-file $(pwd)/my-api/.env \\
              openapi-mcp:latest \\
              --spec /app/spec/openapi.json \\
              --api-key-env API_KEY \\
              --api-key-name X-API-Key \\
              --api-key-loc header
          ```
          *(İhtiyaç doğrultusunda `--spec`, `--api-key-env`, `--api-key-name`, `--api-key-loc` ve `-p` ayarlayın.)*

      *   **Örnek 2: Uzak belirtim URL'si ve doğrudan ortam değişkeni kullanma:**
          ```bash
          docker run -p 8080:8080 --rm \\
              -e SOME_API_KEY="your_actual_key" \\
              openapi-mcp:latest \\
              --spec https://petstore.swagger.io/v2/swagger.json \\
              --api-key-env SOME_API_KEY \\
              --api-key-name api_key \\
              --api-key-loc header
          ```

      *   **Anahtar Docker Run Seçenekleri:**
          *   `-p <host_port>:8080`: Host üzerindeki bir portu konteynerın varsayılan 8080 portuna eşleyin.
          *   `--rm`: Çıkışında konteyneri otomatik olarak kaldırın.
          *   `-v <host_path>:<container_path>`: Belirtim içeren yerel bir dizini konteynere monte edin. Mutlak yollar veya `$(pwd)/...` kullanın. Yaygın konteyner yolu: `/app/spec`.
          *   `--env-file <path_to_host_env_file>`: Yerel dosyadan ortam değişkenlerini yükleyin (API anahtarları vb.). Yol host üzerindedir.
          *   `-e <VAR_NAME>="<value>"`: Tek bir ortam değişkenini doğrudan geçirin.
          *   `openapi-mcp:latest`: Yerel olarak derlediğiniz imajın adı.
          *   `--spec ...`: **Gerekli.** Belirtim dosyasının yolu *konteyner içinde* (ör. `/app/spec/openapi.json`) veya genel bir URL.
          *   `--port 8080`: (İsteğe Bağlı) Sunucunun dinlediği dahili portu değiştirin (`-p` içindeki konteyner portuyla eşleşmelidir).
          *   `--api-key-env`, `--api-key-name`, `--api-key-loc`: Hedef API'nin API anahtarı gerektirmesi durumunda gereklidir.
          *   (Tüm komut satırı seçenekleri için `--help` bayrağını kullanarak bkz: `docker run --rm openapi-mcp:latest --help`)


  ## Weatherbit Örneğini Çalıştırma (Adım Adım)

  Bu depo, [Weatherbit API](https://www.weatherbit.io/) kullanılan bir örnek içermektedir. İşte genel Docker imajını kullanarak nasıl çalıştırılacağı:

  1.  **OpenAPI Belgelerini Bulma (İsteğe Bağlı Bilgi):**
      Birçok genel API'nin OpenAPI/Swagger belirtimi çevrimiçi olarak mevcuttur. Bunları keşfetmek için harika bir kaynak [APIs.guru](https://apis.guru/)'dur. Bu örnekte kullanılan Weatherbit belirtimi (`weatherbitio-swagger.json`) oradan alınmıştır.

  2.  **Weatherbit API Anahtarı Alın:**
      *   [Weatherbit.io](https://www.weatherbit.io/) adresine gidin ve bir hesap oluşturun (ücretsiz seviye sunmaktadırlar).
      *   Weatherbit hesabı panonuzdan API anahtarınızı bulun.

  3.  **Bu Depoyu Klonlayın:**
      Bu depodan örnek dosyalara ihtiyacınız vardır.
      ```bash
      git clone https://github.com/ckanthony/openapi-mcp.git
      cd openapi-mcp
      ```

  4.  **Ortam Dosyasını Hazırlayın:**
      *   Örnek dizinine gidin: `cd example/weather`
      *   Örnek ortam dosyasını kopyalayın: `cp .env.example .env`
      *   Yeni `.env` dosyasını düzenleyin ve `YOUR_WEATHERBIT_API_KEY_HERE` yerine Weatherbit'ten aldığınız gerçek API anahtarını koyun.

  5.  **Docker Konteynerini Çalıştırın:**
      `openapi-mcp` **kök dizininden** (örnek klasörünü içeren), aşağıdaki komutu çalıştırın:
      ```bash
      docker run -p 8080:8080 --rm \\
          -v $(pwd)/example/weather:/app/spec \\
          --env-file $(pwd)/example/weather/.env \\
          ckanthony/openapi-mcp:latest \\
          --spec /app/spec/weatherbitio-swagger.json \\
          --api-key-env API_KEY \\
          --api-key-name key \\
          --api-key-loc query
      ```
      *   `-v $(pwd)/example/weather:/app/spec`: Yerel `example/weather` dizinini (belirtim ve `.env` dosyasını içeren) konteynerdeki `/app/spec`'e monte eder.
      *   `--env-file $(pwd)/example/weather/.env`: Docker'ı `.env` dosyanızdan ortam değişkenlerini (`API_KEY` özellikle) yüklemesi için belirtir.
      *   `ckanthony/openapi-mcp:latest`: Genel Docker imajını kullanır.
      *   `--spec /app/spec/weatherbitio-swagger.json`: Konteynerdeki belirtim dosyasını gösterir.
      *   `--api-key-*` bayrakları, aracın API anahtarını nasıl enjekte etmesi gerektiğini yapılandırır (`API_KEY` env değişkeninden okunur, adı `key`, sorgu dizinine yerleştirilir).

  6.  **MCP Sunucusuna Erişin:**
      MCP sunucusu artık uyumlu istemciler için `http://localhost:8080` adresinde çalışıyor ve erişilebilir olmalıdır.

  **Docker Compose Kullanma (Örnek):**

  `example/` dizininde sağlanan bir `docker-compose.yml` dosyası, *yerel olarak derlenmiş* imaj kullanarak Weatherbit API örneğini çalıştırmayı göstermektedir.

  1.  **Ortam Dosyasını Hazırlayın:** `example/weather/.env.example` öğesini `example/weather/.env` öğesine kopyalayın ve gerçek Weatherbit API anahtarınızı ekleyin:
      ```dotenv
      # example/weather/.env
      API_KEY=YOUR_ACTUAL_WEATHERBIT_KEY
      ```

  2.  **Docker Compose ile Çalıştırın:** `example` dizinine gidin ve şu komutu çalıştırın:
      ```bash
      cd example
      # Bu, proje kökündeki Dockerfile'dan imajı yerel olarak derler
      # Docker Hub'ın genel imajını KULLANMAZ
      docker-compose up --build
      ```
      *   `--build`: Docker Compose'u, hizmeti başlatmadan önce proje kökündeki `Dockerfile`'ı kullanarak imajı derlemesi için zorlar.
      *   Compose, `example/docker-compose.yml` dosyasını okuyacak, imajı derleyecek, `./weather`'ı monte edecek, `./weather/.env`'i okuyacak ve belirtilen komut satırı argümanları ile `openapi-mcp` konteynerini başlatacaktır.
      *   MCP sunucusu `http://localhost:8080` adresinde mevcut olacaktır.

  3.  **Hizmeti Durdur:** Compose'un çalıştığı terminalde `Ctrl+C` basın veya başka bir terminalden `example` dizininden `docker-compose down` komutunu çalıştırın.

  ## Komut Satırı Seçenekleri

  `openapi-mcp` komutu aşağıdaki bayrakları kabul eder:

  | Bayrak               | Açıklama                                                                                                            | Tür            | Varsayılan                       |
  |----------------------|---------------------------------------------------------------------------------------------------------------------|----------------|----------------------------------|
  | `--spec`             | **Gerekli.** OpenAPI belirtim dosyasının yolu veya URL'si.                                                           | `string`       | (yok)                            |
  | `--port`             | MCP sunucusunu çalıştıracak port.                                                                                  | `int`          | `8080`                           |
  | `--api-key`          | Doğrudan API anahtarı değeri (güvenlik için `--api-key-env` veya `.env` dosyasını kullanın).                        | `string`       | (yok)                            |
  | `--api-key-env`      | API anahtarını içeren ortam değişken adı. Belirtim yerel ise, belirtimin dizinindeki `.env` dosyasını da kontrol eder. | `string`       | (yok)                            |
  | `--api-key-name`     | **Anahtar kullanılıyorsa gerekli.** API anahtarı parametresinin adı (header, query, path veya cookie adı).         | `string`       | (yok)                            |
  | `--api-key-loc`      | **Anahtar kullanılıyorsa gerekli.** API anahtarının konumu: `header`, `query`, `path` veya `cookie`.               | `string`       | (yok)                            |
  | `--include-tag`      | Dahil edilecek etiket (tekrarlanabilir). Dahil etme bayrakları kullanılıyorsa yalnızca dahil edilen öğeler açığa çıkar. | `string slice` | (yok)                            |
  | `--exclude-tag`      | Dışlanacak etiket (tekrarlanabilir). Dışlamalar dahil etmelerden sonra uygulanır.                                  | `string slice` | (yok)                            |
  | `--include-op`       | Dahil edilecek Operation ID (tekrarlanabilir).                                                                     | `string slice` | (yok)                            |
  | `--exclude-op`       | Dışlanacak Operation ID (tekrarlanabilir).                                                                         | `string slice` | (yok)                            |
  | `--base-url`         | Belirtimden algılanan hedef API sunucusu taban URL'sini el ile geçersiz kılın.                                      | `string`       | (yok)                            |
  | `--name`             | Oluşturulan MCP araç setinin varsayılan adı (belirtimde başlık yoksa kullanılır).                                   | `string`       | "OpenAPI-MCP Tools"              |
  | `--desc`             | Oluşturulan MCP araç setinin varsayılan açıklaması (belirtimde açıklama yoksa kullanılır).                        | `string`       | "Tools generated from OpenAPI spec" |

  **Not:** Bu listeyi `--help` bayrağı ile çalıştırarak alabilirsiniz (ör. `docker run --rm ckanthony/openapi-mcp:latest --help`).

  ### Ortam Değişkenleri

  *   `REQUEST_HEADERS`: Hedef API'ye yapılan *tüm* giden isteklere özel başlıklar eklemek için bu ortam değişkenini bir JSON dizesine ayarlayın (ör. `'{"X-Custom": "Value"}'`).
---

# OpenAPI-MCP: Dockerized MCP Server to allow your AI agent to access any API with existing api docs

[![Go Reference](https://pkg.go.dev/badge/github.com/ckanthony/openapi-mcp.svg)](https://pkg.go.dev/github.com/ckanthony/openapi-mcp)
[![CI](https://github.com/ckanthony/openapi-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/ckanthony/openapi-mcp/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ckanthony/openapi-mcp/branch/main/graph/badge.svg)](https://codecov.io/gh/ckanthony/openapi-mcp)
![](https://badge.mcpx.dev?type=dev 'MCP Dev')

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ckanthony/openapi-mcp)](https://archestra.ai/mcp-catalog/ckanthony__openapi-mcp)

![openapi-mcp logo](https://raw.githubusercontent.com/ckanthony/openapi-mcp/HEAD/openapi-mcp.png)

**Generate MCP tool definitions directly from a Swagger/OpenAPI specification file.**

OpenAPI-MCP is a dockerized MCP server that reads a `swagger.json` or `openapi.yaml` file and generates a corresponding [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) toolset. This allows MCP-compatible clients like [Cursor](https://cursor.sh/) to interact with APIs described by standard OpenAPI specifications. Now you can enable your AI agent to access any API by simply providing its OpenAPI/Swagger specification - no additional coding required.

## Table of Contents

-   [Why OpenAPI-MCP?](#why-openapi-mcp)
-   [Features](#features)
-   [Installation](#installation)
    -   [Using the Pre-built Docker Hub Image (Recommended)](#using-the-pre-built-docker-hub-image-recommended)
    -   [Building Locally (Optional)](#building-locally-optional)
-   [Running the Weatherbit Example (Step-by-Step)](#running-the-weatherbit-example-step-by-step)
-   [Command-Line Options](#command-line-options)
    -   [Environment Variables](#environment-variables)

## Demo

Run the demo yourself: [Running the Weatherbit Example (Step-by-Step)](#running-the-weatherbit-example-step-by-step)

![demo](https://github.com/user-attachments/assets/4d457137-5da4-422a-b323-afd4b175bd56)

## Why OpenAPI-MCP?

-   **Standard Compliance:** Leverage your existing OpenAPI/Swagger documentation.
-   **Automatic Tool Generation:** Create MCP tools without manual configuration for each endpoint.
-   **Flexible API Key Handling:** Securely manage API key authentication for the proxied API without exposing keys to the MCP client.
-   **Local & Remote Specs:** Works with local specification files or remote URLs.
-   **Dockerized Tool:** Easily deploy and run as a containerized service with Docker.

## Features

-   **OpenAPI v2 (Swagger) & v3 Support:** Parses standard specification formats.
-   **Schema Generation:** Creates MCP tool schemas from OpenAPI operation parameters and request/response definitions.
-   **Secure API Key Management:**
    -   Injects API keys into requests (`header`, `query`, `path`, `cookie`) based on command-line configuration.
        -   Loads API keys directly from flags (`--api-key`), environment variables (`--api-key-env`), or `.env` files located alongside local specs.
        -   Keeps API keys hidden from the end MCP client (e.g., the AI assistant).
-   **Server URL Detection:** Uses server URLs from the spec as the base for tool interactions (can be overridden).
-   **Filtering:** Options to include/exclude specific operations or tags (`--include-tag`, `--exclude-tag`, `--include-op`, `--exclude-op`).
-   **Request Header Injection:** Pass custom headers (e.g., for additional auth, tracing) via the `REQUEST_HEADERS` environment variable.

## Installation

### Docker

The recommended way to run this tool is via [Docker](https://hub.docker.com/r/ckanthony/openapi-mcp).

#### Using the Pre-built Docker Hub Image (Recommended)

Alternatively, you can use the pre-built image available on [Docker Hub](https://hub.docker.com/r/ckanthony/openapi-mcp).

1.  **Pull the Image:**
    ```bash
    docker pull ckanthony/openapi-mcp:latest
    ```
2.  **Run the Container:**
    Follow the `docker run` examples above, but replace `openapi-mcp:latest` with `ckanthony/openapi-mcp:latest`.

#### Building Locally (Optional)

1.  **Build the Docker Image Locally:**
    ```bash
    # Navigate to the repository root
    cd openapi-mcp
    # Build the Docker image (tag it as you like, e.g., openapi-mcp:latest)
    docker build -t openapi-mcp:latest .
    ```

2.  **Run the Container:**
    You need to provide the OpenAPI specification and any necessary API key configuration when running the container.

    *   **Example 1: Using a local spec file and `.env` file:**
        -   Create a directory (e.g., `./my-api`) containing your `openapi.json` or `swagger.yaml`.
        -   If the API requires a key, create a `.env` file in the *same directory* (e.g., `./my-api/.env`) with `API_KEY=your_actual_key` (replace `API_KEY` if your `--api-key-env` flag is different).
        ```bash
        docker run -p 8080:8080 --rm \\
            -v $(pwd)/my-api:/app/spec \\
            --env-file $(pwd)/my-api/.env \\
            openapi-mcp:latest \\
            --spec /app/spec/openapi.json \\
            --api-key-env API_KEY \\
            --api-key-name X-API-Key \\
            --api-key-loc header
        ```
        *(Adjust `--spec`, `--api-key-env`, `--api-key-name`, `--api-key-loc`, and `-p` as needed.)*

    *   **Example 2: Using a remote spec URL and direct environment variable:**
        ```bash
        docker run -p 8080:8080 --rm \\
            -e SOME_API_KEY="your_actual_key" \\
            openapi-mcp:latest \\
            --spec https://petstore.swagger.io/v2/swagger.json \\
            --api-key-env SOME_API_KEY \\
            --api-key-name api_key \\
            --api-key-loc header
        ```

    *   **Key Docker Run Options:**
        *   `-p <host_port>:8080`: Map a port on your host to the container's default port 8080.
        *   `--rm`: Automatically remove the container when it exits.
        *   `-v <host_path>:<container_path>`: Mount a local directory containing your spec into the container. Use absolute paths or `$(pwd)/...`. Common container path: `/app/spec`.
        *   `--env-file <path_to_host_env_file>`: Load environment variables from a local file (for API keys, etc.). Path is on the host.
        *   `-e <VAR_NAME>="<value>"`: Pass a single environment variable directly.
        *   `openapi-mcp:latest`: The name of the image you built locally.
        *   `--spec ...`: **Required.** Path to the spec file *inside the container* (e.g., `/app/spec/openapi.json`) or a public URL.
        *   `--port 8080`: (Optional) Change the internal port the server listens on (must match the container port in `-p`).
        *   `--api-key-env`, `--api-key-name`, `--api-key-loc`: Required if the target API needs an API key.
        *   (See `--help` for all command-line options by running `docker run --rm openapi-mcp:latest --help`)


## Running the Weatherbit Example (Step-by-Step)

This repository includes an example using the [Weatherbit API](https://www.weatherbit.io/). Here's how to run it using the public Docker image:

1.  **Find OpenAPI Specs (Optional Knowledge):**
    Many public APIs have their OpenAPI/Swagger specifications available online. A great resource for discovering them is [APIs.guru](https://apis.guru/). The Weatherbit specification used in this example (`weatherbitio-swagger.json`) was sourced from there.

2.  **Get a Weatherbit API Key:**
    *   Go to [Weatherbit.io](https://www.weatherbit.io/) and sign up for an account (they offer a free tier).
    *   Find your API key in your Weatherbit account dashboard.

3.  **Clone this Repository:**
    You need the example files from this repository.
    ```bash
    git clone https://github.com/ckanthony/openapi-mcp.git
    cd openapi-mcp
    ```

4.  **Prepare Environment File:**
    *   Navigate to the example directory: `cd example/weather`
    *   Copy the example environment file: `cp .env.example .env`
    *   Edit the new `.env` file and replace `YOUR_WEATHERBIT_API_KEY_HERE` with the actual API key you obtained from Weatherbit.

5.  **Run the Docker Container:**
    From the `openapi-mcp` **root directory** (the one containing the `example` folder), run the following command:
    ```bash
    docker run -p 8080:8080 --rm \\
        -v $(pwd)/example/weather:/app/spec \\
        --env-file $(pwd)/example/weather/.env \\
        ckanthony/openapi-mcp:latest \\
        --spec /app/spec/weatherbitio-swagger.json \\
        --api-key-env API_KEY \\
        --api-key-name key \\
        --api-key-loc query
    ```
    *   `-v $(pwd)/example/weather:/app/spec`: Mounts the local `example/weather` directory (containing the spec and `.env` file) to `/app/spec` inside the container.
    *   `--env-file $(pwd)/example/weather/.env`: Tells Docker to load environment variables (specifically `API_KEY`) from your `.env` file.
    *   `ckanthony/openapi-mcp:latest`: Uses the public Docker image.
    *   `--spec /app/spec/weatherbitio-swagger.json`: Points to the spec file inside the container.
    *   The `--api-key-*` flags configure how the tool should inject the API key (read from the `API_KEY` env var, named `key`, placed in the `query` string).

6.  **Access the MCP Server:**
    The MCP server should now be running and accessible at `http://localhost:8080` for compatible clients.

**Using Docker Compose (Example):**

A `docker-compose.yml` file is provided in the `example/` directory to demonstrate running the Weatherbit API example using the *locally built* image.

1.  **Prepare Environment File:** Copy `example/weather/.env.example` to `example/weather/.env` and add your actual Weatherbit API key:
    ```dotenv
    # example/weather/.env
    API_KEY=YOUR_ACTUAL_WEATHERBIT_KEY
    ```

2.  **Run with Docker Compose:** Navigate to the `example` directory and run:
    ```bash
    cd example
    # This builds the image locally based on ../Dockerfile
    # It does NOT use the public Docker Hub image
    docker-compose up --build
    ```
    *   `--build`: Forces Docker Compose to build the image using the `Dockerfile` in the project root before starting the service.
    *   Compose will read `example/docker-compose.yml`, build the image, mount `./weather`, read `./weather/.env`, and start the `openapi-mcp` container with the specified command-line arguments.
    *   The MCP server will be available at `http://localhost:8080`.

3.  **Stop the service:** Press `Ctrl+C` in the terminal where Compose is running, or run `docker-compose down` from the `example` directory in another terminal.

## Command-Line Options

The `openapi-mcp` command accepts the following flags:

| Flag                 | Description                                                                                                         | Type          | Default                          |
|----------------------|---------------------------------------------------------------------------------------------------------------------|---------------|----------------------------------|
| `--spec`             | **Required.** Path or URL to the OpenAPI specification file.                                                          | `string`      | (none)                           |
| `--port`             | Port to run the MCP server on.                                                                                      | `int`         | `8080`                           |
| `--api-key`          | Direct API key value (use `--api-key-env` or `.env` file instead for security).                                       | `string`      | (none)                           |
| `--api-key-env`      | Environment variable name containing the API key. If spec is local, also checks `.env` file in the spec's directory. | `string`      | (none)                           |
| `--api-key-name`     | **Required if key used.** Name of the API key parameter (header, query, path, or cookie name).                       | `string`      | (none)                           |
| `--api-key-loc`      | **Required if key used.** Location of API key: `header`, `query`, `path`, or `cookie`.                              | `string`      | (none)                           |
| `--include-tag`      | Tag to include (can be repeated). If include flags are used, only included items are exposed.                       | `string slice`| (none)                           |
| `--exclude-tag`      | Tag to exclude (can be repeated). Exclusions apply after inclusions.                                                | `string slice`| (none)                           |
| `--include-op`       | Operation ID to include (can be repeated).                                                                          | `string slice`| (none)                           |
| `--exclude-op`       | Operation ID to exclude (can be repeated).                                                                          | `string slice`| (none)                           |
| `--base-url`         | Manually override the target API server base URL detected from the spec.                                              | `string`      | (none)                           |
| `--name`             | Default name for the generated MCP toolset (used if spec has no title).                                             | `string`      | "OpenAPI-MCP Tools"            |
| `--desc`             | Default description for the generated MCP toolset (used if spec has no description).                                | `string`      | "Tools generated from OpenAPI spec" |

**Note:** You can get this list by running the tool with the `--help` flag (e.g., `docker run --rm ckanthony/openapi-mcp:latest --help`).

### Environment Variables

*   `REQUEST_HEADERS`: Set this environment variable to a JSON string (e.g., `'{"X-Custom": "Value"}'`) to add custom headers to *all* outgoing requests to the target API.
