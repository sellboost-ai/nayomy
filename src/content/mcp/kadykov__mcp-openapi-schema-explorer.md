---
name: "kadykov/mcp-openapi-schema-explorer"
description: "Token-efficient access to OpenAPI/Swagger specs via MCP Resources."
description_tr: "MCP Resources aracılığıyla OpenAPI/Swagger speclerine token-verimli erişim sağlayın."
category: "Developer Tools"
repo: "kadykov/mcp-openapi-schema-explorer"
stars: 72
url: "https://github.com/kadykov/mcp-openapi-schema-explorer"
body_length: 15459
license: "MIT"
language: "TypeScript"
body_tr: |-
  <p align="center">
    
  </p>

  # MCP OpenAPI Schema Explorer

  [![npm version](https://badge.fury.io/js/mcp-openapi-schema-explorer.svg)](https://badge.fury.io/js/mcp-openapi-schema-explorer)
  [![NPM Downloads](https://img.shields.io/npm/dw/mcp-openapi-schema-explorer)](https://badge.fury.io/js/mcp-openapi-schema-explorer)
  [![Docker Pulls](https://img.shields.io/docker/pulls/kadykov/mcp-openapi-schema-explorer.svg)](https://hub.docker.com/r/kadykov/mcp-openapi-schema-explorer)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![codecov](https://codecov.io/gh/kadykov/mcp-openapi-schema-explorer/graph/badge.svg?token=LFDOMJ6W4W)](https://codecov.io/gh/kadykov/mcp-openapi-schema-explorer)
  [![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/819a3ba3-ad54-4657-9241-648497e57d7b)
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/kadykov/mcp-openapi-schema-explorer)](https://archestra.ai/mcp-catalog/kadykov__mcp-openapi-schema-explorer)
  [![Listed on Spark](https://spark.entire.vc/badges/listed.svg)](https://spark.entire.vc/assets/vb-openapi-schema-explorer?utm_source=github&utm_medium=readme)

  OpenAPI (v3.0) ve Swagger (v2.0) spesifikasyonlarına token-verimli erişim sağlayan, **MCP Resource Templates** tabanlı bir MCP (Model Context Protocol) sunucusu.

  ## Proje Hedefi

  Bu projenin temel hedefi, MCP istemcilerine (Cline veya Claude Desktop gibi) tüm dosyayı LLM'nin context penceresine yüklemeden büyük OpenAPI spesifikasyonlarının yapısını ve ayrıntılarını keşfetmelerine olanak sağlamaktır. Bunu **MCP Resource Templates** aracılığıyla spesifikasyonun bölümlerini sunarak ve salt-okunur veri keşfi için parametreli erişim desenleri sağlayarak başarır.

  Bu sunucu, spesifikasyonları hem yerel dosya yollarından hem de uzak HTTP/HTTPS URL'lerinden yüklemeyi destekler. Swagger v2.0 spesifikasyonları yükleme sırasında otomatik olarak OpenAPI v3.0'a dönüştürülür.

  > **Not:** Bu sunucu **resource templates** (önceden numaralandırılmış kaynaklar değil) sağlar. MCP istemcileri bu şablonlara `resources/templates/list` protokol yöntemi aracılığıyla erişir. Resource templates hakkında daha fazla bilgi için [MCP Resource Templates belgelerine](https://modelcontextprotocol.io/specification/2025-11-25/server/resources#resource-templates) bakın.

  ## Neden MCP Resource Templates?

  Model Context Protocol hem **Resources** hem de **Tools** tanımlar.

  - **Resources:** Veri kaynakları (dosyalar, API yanıtları gibi) temsil eder. MCP istemcileri tarafından salt-okunur erişim ve keşif için idealdirler.
    - **Resource Templates:** Parametreli URI'ler kullanan (örneğin, `openapi://paths/{path}/{method}`) özel bir kaynak türü. Tüm olası değerleri önceden numaralandırmadan dinamik erişime olanak tanır.
  - **Tools:** Yürütülebilir eylemler veya işlevler temsil eder. LLM'ler tarafından görevleri gerçekleştirmek veya dış sistemlerle etkileşime girmek için sıklıkla kullanılır.

  _Tools_ aracılığıyla OpenAPI speclerine erişim sağlayan diğer MCP sunucuları varsa da, bu proje özellikle _Resource Templates_ aracılığıyla erişim sağlamaya odaklanır. Bu yaklaşım, özellikle büyük API'ler için verimlidir çünkü:

  - Binlerce olası path ve component'i önceden numaralandırmayı gerektirmez
  - İstemciler, şablon desenleri kullanarak mevcut kaynakları dinamik olarak keşfedebilir
  - Spesifikasyonun belirli bölümlerine yapılandırılmış, isteğe bağlı erişim sağlar

  MCP istemcileri ve yetenekleri hakkında daha fazla ayrıntı için [MCP İstemci Belgelerine](https://modelcontextprotocol.io/clients) bakın.

  ## İstemciye Göre Hızlı Başlangıç Kılavuzları

  - **[Claude Code](CLAUDE_CODE.md)** - Anthropic'in Claude ile kodlama için CLI aracı
  - **Claude Desktop, Cline, Windsurf** - Aşağıdaki kurulum talimatlarına bakın

  ## Kurulum

  Önerilen kullanım yöntemleri (`npx` ve Docker, aşağıda açıklanmıştır) için **ayrı bir kurulum adımı gerekli değildir**. MCP istemciniz sağladığınız konfigürasyona göre paketi otomatik olarak indirecek veya Docker görüntüsünü çekecektir.

  Bununla birlikte, sunucuyu açıkça kurmayı tercih ederseniz veya gerekiyorsa, iki seçeneğiniz vardır:

  1.  **Global Kurulum:** Paketi npm kullanarak global olarak kurabilirsiniz:

      ```bash
      npm install -g mcp-openapi-schema-explorer
      ```

      MCP istemcinizi global olarak kurulmuş bir sunucu kullanacak şekilde yapılandırmak için aşağıdaki **Yöntem 3**'e bakın.

  2.  **Yerel Geliştirme/Kurulum:** Repository'yi klonlayabilir ve yerel olarak derleyebilirsiniz:
      ```bash
      git clone https://github.com/kadykov/mcp-openapi-schema-explorer.git
      cd mcp-openapi-schema-explorer
      npm install
      npm run build
      ```
      Sunucuyu yerel derlemeden `node` kullanarak çalıştırmak için MCP istemcinizi yapılandırmak amacıyla aşağıdaki **Yöntem 4**'e bakın.

  ## Sunucuyu MCP İstemcinize Ekleme

  Bu sunucu MCP istemcileri tarafından çalıştırılmak için tasarlanmıştır (Claude Desktop, Windsurf, Cline vb.). Bunu kullanmak için, istemcinizin ayarlar dosyasına (genellikle bir JSON dosyası) bir konfigürasyon girdisi eklersiniz. Bu girdisi, istemciye sunucu işleminin nasıl yürütüleceğini söyler (örneğin, `npx`, `docker` veya `node` kullanarak). Sunucunun kendisi, istemci ayarları girişinde belirtilen command-line argümanlarının ötesinde ayrı bir konfigürasyon gerektirmez.

  Aşağıda, istemci konfigürasyonunuza sunucu girişi eklemenin yaygın yöntemleri verilmiştir.

  ### Yöntem 1: npx (Önerilen)

  `npx` kullanmak önerilir çünkü global/yerel kurulumdan kaçınır ve istemcinin yayınlanan en son sürümü kullanmasını sağlar.

  **Örnek İstemci Konfigürasyon Girdisi (npx Yöntemi):**

  Aşağıdaki JSON nesnesini MCP istemcinizin konfigürasyon dosyasının `mcpServers` bölümüne ekleyin. Bu girdisi, istemciye sunucuyu `npx` kullanarak nasıl çalıştıracağını söyler:

  ```json
  {
    "mcpServers": {
      "My API Spec (npx)": {
        "command": "npx",
        "args": [
          "-y",
          "mcp-openapi-schema-explorer@latest",
          "<path-or-url-to-spec>",
          "--output-format",
          "yaml"
        ],
        "env": {}
      }
    }
  }
  ```

  **Konfigürasyon Notları:**

  - `"My API Spec (npx)"` yerine, bu sunucu örneği için istemcinizde benzersiz bir ad yazın.
  - `<path-or-url-to-spec>` yerine, spesifikasyonunuzun mutlak yerel dosya yolunu veya tam uzak URL'sini yazın.
  - `--output-format` isteğe bağlıdır (`json`, `yaml`, `json-minified`), varsayılan olarak `json`'dur.
  - Birden fazla spesifikasyonu keşfetmek için `mcpServers` içine, her biri benzersiz bir adla ve farklı bir spec'i işaret eden ayrı girişler ekleyin.

  ### Yöntem 2: Docker

  MCP istemcinizi, resmi Docker görüntüsü `kadykov/mcp-openapi-schema-explorer` kullanarak sunucuyu çalıştırmaya yönelendirebilirsiniz.

  **Örnek İstemci Konfigürasyon Girdileri (Docker Yöntemi):**

  Aşağıdaki JSON nesnelerinden birini MCP istemcinizin konfigürasyon dosyasının `mcpServers` bölümüne ekleyin. Bu girişleri, istemciye sunucuyu `docker run` kullanarak nasıl çalıştıracağını söyler:

  - **Uzak URL:** URL'yi doğrudan `docker run`'a geçirin.

  - **Uzak URL Kullanarak:**

    ```json
    {
      "mcpServers": {
        "My API Spec (Docker Remote)": {
          "command": "docker",
          "args": [
            "run",
            "--rm",
            "-i",
            "kadykov/mcp-openapi-schema-explorer:latest",
            "<remote-url-to-spec>"
          ],
          "env": {}
        }
      }
    }
    ```

  - **Yerel Dosya Kullanarak:** (Dosyayı konteynera bağlamayı gerektirir)
    ```json
    {
      "mcpServers": {
        "My API Spec (Docker Local)": {
          "command": "docker",
          "args": [
            "run",
            "--rm",
            "-i",
            "-v",
            "/full/host/path/to/spec.yaml:/spec/api.yaml",
            "kadykov/mcp-openapi-schema-explorer:latest",
            "/spec/api.yaml",
            "--output-format",
            "yaml"
          ],
          "env": {}
        }
      }
    }
    ```
    **Önemli:** `/full/host/path/to/spec.yaml` yerine, ana makinenizde doğru mutlak yolu yazın. `/spec/api.yaml` yolu, konteyner içindeki karşılık gelen yoldur.

  ### Yöntem 3: Global Kurulum (Daha Az Yaygın)

  `npm install -g` kullanarak paketi global olarak kurduysanız, istemcinizi doğrudan çalıştırmak için yapılandırabilirsiniz.

  ```bash
  # Bu komutu terminalinizde bir kez çalıştırın
  npm install -g mcp-openapi-schema-explorer
  ```

  **Örnek İstemci Konfigürasyon Girdisi (Global Kurulum Yöntemi):**

  Aşağıdaki girdisi MCP istemcinizin konfigürasyon dosyasına ekleyin. Bu, `mcp-openapi-schema-explorer` komutunun istemcinin yürütme ortamı PATH'inde erişilebilir olduğunu varsayar.

  ```json
  {
    "mcpServers": {
      "My API Spec (Global)": {
        "command": "mcp-openapi-schema-explorer",
        "args": ["<path-or-url-to-spec>", "--output-format", "yaml"],
        "env": {}
      }
    }
  }
  ```

  - `command` (`mcp-openapi-schema-explorer`) öğesinin, MCP istemciniz tarafından kullanılan PATH ortam değişkeninde erişilebilir olduğundan emin olun.

  ### Yöntem 4: Yerel Geliştirme/Kurulum

  Bu yöntem, repository'yi yerel olarak klonladıysanız veya değiştirilmiş bir sürümü çalıştırmak istiyorsanız yararlıdır.

  **Kurulum Adımları (Terminalinizde bir kez çalıştırın):**

  1.  Repository'yi klonlayın: `git clone https://github.com/kadykov/mcp-openapi-schema-explorer.git`
  2.  Dizine gidin: `cd mcp-openapi-schema-explorer`
  3.  Bağımlılıkları yükleyin: `npm install`
  4.  Projeyi derleyin: `npm run build` (veya `just build`)

  **Örnek İstemci Konfigürasyon Girdisi (Yerel Geliştirme Yöntemi):**

  Aşağıdaki girdisi MCP istemcinizin konfigürasyon dosyasına ekleyin. Bu, istemciye yerel olarak derlenmiş sunucuyu `node` kullanarak çalıştırmasını söyler.

  ```json
  {
    "mcpServers": {
      "My API Spec (Local Dev)": {
        "command": "node",
        "args": [
          "/full/path/to/cloned/mcp-openapi-schema-explorer/dist/src/index.js",
          "<path-or-url-to-spec>",
          "--output-format",
          "yaml"
        ],

        "env": {}
      }
    }
  }
  ```

  **Önemli:** `/full/path/to/cloned/mcp-openapi-schema-explorer/dist/src/index.js` yerine, klonlanan repository'nizdeki derlenmiş `index.js` dosyasının doğru mutlak yolunu yazın.

  ## Özellikler

  - **MCP Resource Template Erişimi:** Parametreli URI şablonları (`openapi://info`, `openapi://paths/{path}/{method}`, `openapi://components/{type}/{name}`) aracılığıyla OpenAPI speclerini keşfedin.
  - **OpenAPI v3.0 & Swagger v2.0 Desteği:** Her iki formatı yükler, v2.0'ı otomatik olarak v3.0'a dönüştürür.
  - **Yerel & Uzak Dosyalar:** Specları yerel dosya yollarından veya HTTP/HTTPS URL'lerinden yükleyin.
  - **Token-Verimli:** LLM'ler için yapılandırılmış erişim sağlayarak token kullanımını minimize etmek için tasarlanmıştır.
  - **Çoklu Çıktı Formatları:** JSON (varsayılan), YAML veya minified JSON (`--output-format`) içinde ayrıntılı görünümler alın.
  - **Dinamik Sunucu Adı:** MCP istemcilerinde sunucu adı, yüklenen specin `info.title`'ını yansıtır.
  - **Reference Dönüşümü:** İç `$ref`'ler (`#/components/...`) tıklanabilir MCP URI'lerine dönüştürülür.

  ## Mevcut MCP Kaynakları

  Bu sunucu, OpenAPI spesifikasyonunu keşfetmek için aşağıdaki MCP resource şablonlarını sunar.

  > **Önemli:** Bu sunucu **resource şablonları** sağlar, önceden numaralandırılmış kaynaklar değil. MCP istemcisini kullandığınızda:
  >
  > - İstemci, mevcut şablon desenlerini keşfetmek için `resources/templates/list` öğesini çağırır
  > - Daha sonra, şablon parametrelerini doldurarak belirli URI'ler oluşturursunuz (örneğin, `{path}` yerine `users%2F%7Bid%7D`)
  > - İstemci, yapılandırılan URI'nizle `resources/read` kullanarak gerçek içeriği getirir
  >
  > `resources/list` ("templates" olmadan) çağrırsanız, boş bir liste alırsınız—bu beklenen davranıştır.

  **Çoklu Değer Parametrelerini Anlama (`*`)**

  Bazı resource şablonları, `{method*}` veya `{name*}` gibi yıldız işaretiyle biten parametreler içerir. Bu, parametrenin **virgülle ayrılmış birden fazla değeri** kabul ettiğini gösterir. Örneğin, bir yolun hem `GET` hem de `POST` yöntemleri için ayrıntılar isteyecekseniz, `openapi://paths/users/get,post` gibi bir URI kullanırsınız. Bu, tek bir istekte birden fazla öğe için ayrıntıları getirmeye olanak tanır.

  **Resource Şablonları:**

  - **`openapi://{field}`**
    - **Açıklama:** OpenAPI belgesinin üst düzey alanlarına (`info`, `servers`, `tags` gibi) veya `paths` veya `components` içeriğini listeler. Belirli mevcut alanlar, yüklenen spesifikasyona bağlıdır.
    - **Örnek:** `openapi://info`
    - **Çıktı:** `paths` ve `components` için `text/plain` liste; diğer alanlar için yapılandırılmış format (JSON/YAML/minified JSON).
    - **Tamamlamalar:** Yüklenen spece bulunan gerçek üst düzey anahtarlara göre `{field}` için dinamik öneriler sağlar.

  - **`openapi://paths/{path}`**
    - **Açıklama:** Belirli bir API yolu için mevcut HTTP yöntemlerini (işlemleri) listeler.
    - **Parameter:** `{path}` - API yol dizesi. **URL kodlanmış olmalıdır** (örneğin, `/users/{id}` `users%2F%7Bid%7D` olur).
    - **Örnek:** `openapi://paths/users%2F%7Bid%7D`
    - **Çıktı:** `text/plain` yöntem listesi.
    - **Tamamlamalar:** Yüklenen spece bulunan yollara göre `{path}` için dinamik öneriler sağlar (URL kodlanmış).

  - **`openapi://paths/{path}/{method*}`**
    - **Açıklama:** Belirli bir API yolu üzerinde bir veya daha fazla işlemin (HTTP yöntemi) ayrıntılı spesifikasyonunu alır.
    - **Parametreler:**
      - `{path}` - API yol dizesi. **URL kodlanmış olmalıdır**.
      - `{method*}` - Bir veya daha fazla HTTP yöntemi (örneğin, `get`, `post`, `get,post`). Büyük/küçük harf duyarsız.
    - **Örnek (Tek):** `openapi://paths/users%2F%7Bid%7D/get`
    - **Örnek (Çoklu):** `openapi://paths/users%2F%7Bid%7D/get,post`
    - **Çıktı:** Yapılandırılmış format (JSON/YAML/minified JSON).
    - **Tamamlamalar:** `{path}` için dinamik öneriler sağlar. `{method*}` için statik öneriler sağlar (GET, POST, PUT, DELETE vb. gibi yaygın HTTP fiilleri).

  - **`openapi://components/{type}`**
    - **Açıklama:** Belirli bir türün tüm tanımlı bileşenlerinin adlarını listeler (örneğin, `schemas`, `responses`, `parameters`). Belirli mevcut türler, yüklenen spesifikasyona bağlıdır. Ayrıca listelenen her tür için kısa bir açıklama sağlar.
    - **Örnek:** `openapi://components/schemas`
    - **Çıktı:** `text/plain` bileşen adları listesi açıklamalarla.
    - **Tamamlamalar:** Yüklenen spece bulunan bileşen türlerine göre `{type}` için dinamik öneriler sağlar.

  - **`openapi://components/{type}/{name*}`**
    - **Açıklama:** Belirli bir türün bir veya daha fazla adlandırılmış bileşeninin ayrıntılı spesifikasyonunu alır.
    - **Parametreler:**
      - `{type}` - Bileşen türü.
      - `{name*}` - Bir veya daha fazla bileşen adı (örneğin, `User`, `Order`, `User,Order`). Büyük/küçük harf duyarlı.
    - **Örnek (Tek):** `openapi://components/schemas/User`
    - **Örnek (Çoklu):** `openapi://components/schemas/User,Order`
    - **Çıktı:** Yapılandırılmış format (JSON/YAML/minified JSON).
    - **Tamamlamalar:** `{type}` için dinamik öneriler sağlar. Yüklenen spec toplamda tam olarak bir bileşen türü içeriyorsa _sadece_ `{name*}` için dinamik öneriler sağlar (örneğin, sadece `schemas`). MCP SDK şu anda seçilen `{type}`'a yönelik tamamlamalar sağlamayı desteklemediğinden bu sınırlama vardır; tüm türler arasında tüm adları sağlamak yanıltıcı olabilir.

  ## Katkıda Bulunma

  Katkılar hoş karşılanır! Geliştirme ortamını kurma, testleri çalıştırma ve değişiklikler gönderme hakkındaki talimatlar için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.

  ## Yayınlar

  Bu proje, [Conventional Commits](https://www.conventionalcommits.org/) tabanlı otomatik sürüm yönetimi ve paket yayınlama için [`semantic-release`](https://github.com/semantic-release/semantic-release) kullanır.

  ## Gelecek Planları

  (Gelecek planları henüz belirlenmemiştir)
---

<p align="center">
  
</p>

# MCP OpenAPI Schema Explorer

[![npm version](https://badge.fury.io/js/mcp-openapi-schema-explorer.svg)](https://badge.fury.io/js/mcp-openapi-schema-explorer)
[![NPM Downloads](https://img.shields.io/npm/dw/mcp-openapi-schema-explorer)](https://badge.fury.io/js/mcp-openapi-schema-explorer)
[![Docker Pulls](https://img.shields.io/docker/pulls/kadykov/mcp-openapi-schema-explorer.svg)](https://hub.docker.com/r/kadykov/mcp-openapi-schema-explorer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/kadykov/mcp-openapi-schema-explorer/graph/badge.svg?token=LFDOMJ6W4W)](https://codecov.io/gh/kadykov/mcp-openapi-schema-explorer)
[![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/819a3ba3-ad54-4657-9241-648497e57d7b)
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/kadykov/mcp-openapi-schema-explorer)](https://archestra.ai/mcp-catalog/kadykov__mcp-openapi-schema-explorer)
[![Listed on Spark](https://spark.entire.vc/badges/listed.svg)](https://spark.entire.vc/assets/vb-openapi-schema-explorer?utm_source=github&utm_medium=readme)

An MCP (Model Context Protocol) server that provides token-efficient access to OpenAPI (v3.0) and Swagger (v2.0) specifications via **MCP Resource Templates**.

## Project Goal

The primary goal of this project is to allow MCP clients (like Cline or Claude Desktop) to explore the structure and details of large OpenAPI specifications without needing to load the entire file into an LLM's context window. It achieves this by exposing parts of the specification through **MCP Resource Templates**, which provide parameterized access patterns for read-only data exploration.

This server supports loading specifications from both local file paths and remote HTTP/HTTPS URLs. Swagger v2.0 specifications are automatically converted to OpenAPI v3.0 upon loading.

> **Note:** This server provides **resource templates** (not pre-enumerated resources). MCP clients access these templates through the `resources/templates/list` protocol method. For more information about resource templates, see the [MCP Resource Templates documentation](https://modelcontextprotocol.io/specification/2025-11-25/server/resources#resource-templates).

## Why MCP Resource Templates?

The Model Context Protocol defines both **Resources** and **Tools**.

- **Resources:** Represent data sources (like files, API responses). They are ideal for read-only access and exploration by MCP clients.
  - **Resource Templates:** A special type of resource that uses parameterized URIs (e.g., `openapi://paths/{path}/{method}`), allowing dynamic access without pre-enumerating all possible values.
- **Tools:** Represent executable actions or functions, often used by LLMs to perform tasks or interact with external systems.

While other MCP servers exist that provide access to OpenAPI specs via _Tools_, this project specifically focuses on providing access via _Resource Templates_. This approach is particularly efficient for large APIs because:

- It doesn't require pre-enumerating thousands of potential paths and components
- Clients can discover available resources dynamically using the template patterns
- It provides structured, on-demand access to specific parts of the specification

For more details on MCP clients and their capabilities, see the [MCP Client Documentation](https://modelcontextprotocol.io/clients).

## Quick Start Guides by Client

- **[Claude Code](CLAUDE_CODE.md)** - Anthropic's CLI tool for coding with Claude
- **Claude Desktop, Cline, Windsurf** - See installation instructions below

## Installation

For the recommended usage methods (`npx` and Docker, described below), **no separate installation step is required**. Your MCP client will download the package or pull the Docker image automatically based on the configuration you provide.

However, if you prefer or need to install the server explicitly, you have two options:

1.  **Global Installation:** You can install the package globally using npm:

    ```bash
    npm install -g mcp-openapi-schema-explorer
    ```

    See **Method 3** below for how to configure your MCP client to use a globally installed server.

2.  **Local Development/Installation:** You can clone the repository and build it locally:
    ```bash
    git clone https://github.com/kadykov/mcp-openapi-schema-explorer.git
    cd mcp-openapi-schema-explorer
    npm install
    npm run build
    ```
    See **Method 4** below for how to configure your MCP client to run the server from your local build using `node`.

## Adding the Server to your MCP Client

This server is designed to be run by MCP clients (like Claude Desktop, Windsurf, Cline, etc.). To use it, you add a configuration entry to your client's settings file (often a JSON file). This entry tells the client how to execute the server process (e.g., using `npx`, `docker`, or `node`). The server itself doesn't require separate configuration beyond the command-line arguments specified in the client settings entry.

Below are the common methods for adding the server entry to your client's configuration.

### Method 1: npx (Recommended)

Using `npx` is recommended as it avoids global/local installation and ensures the client uses the latest published version.

**Example Client Configuration Entry (npx Method):**

Add the following JSON object to the `mcpServers` section of your MCP client's configuration file. This entry instructs the client on how to run the server using `npx`:

```json
{
  "mcpServers": {
    "My API Spec (npx)": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-openapi-schema-explorer@latest",
        "<path-or-url-to-spec>",
        "--output-format",
        "yaml"
      ],
      "env": {}
    }
  }
}
```

**Configuration Notes:**

- Replace `"My API Spec (npx)"` with a unique name for this server instance in your client.
- Replace `<path-or-url-to-spec>` with the absolute local file path or full remote URL of your specification.
- The `--output-format` is optional (`json`, `yaml`, `json-minified`), defaulting to `json`.
- To explore multiple specifications, add separate entries in `mcpServers`, each with a unique name and pointing to a different spec.

### Method 2: Docker

You can instruct your MCP client to run the server using the official Docker image: `kadykov/mcp-openapi-schema-explorer`.

**Example Client Configuration Entries (Docker Method):**

Add one of the following JSON objects to the `mcpServers` section of your MCP client's configuration file. These entries instruct the client on how to run the server using `docker run`:

- **Remote URL:** Pass the URL directly to `docker run`.

- **Using a Remote URL:**

  ```json
  {
    "mcpServers": {
      "My API Spec (Docker Remote)": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "kadykov/mcp-openapi-schema-explorer:latest",
          "<remote-url-to-spec>"
        ],
        "env": {}
      }
    }
  }
  ```

- **Using a Local File:** (Requires mounting the file into the container)
  ```json
  {
    "mcpServers": {
      "My API Spec (Docker Local)": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "-v",
          "/full/host/path/to/spec.yaml:/spec/api.yaml",
          "kadykov/mcp-openapi-schema-explorer:latest",
          "/spec/api.yaml",
          "--output-format",
          "yaml"
        ],
        "env": {}
      }
    }
  }
  ```
  **Important:** Replace `/full/host/path/to/spec.yaml` with the correct absolute path on your host machine. The path `/spec/api.yaml` is the corresponding path inside the container.

### Method 3: Global Installation (Less Common)

If you have installed the package globally using `npm install -g`, you can configure your client to run it directly.

```bash
# Run this command once in your terminal
npm install -g mcp-openapi-schema-explorer
```

**Example Client Configuration Entry (Global Install Method):**

Add the following entry to your MCP client's configuration file. This assumes the `mcp-openapi-schema-explorer` command is accessible in the client's execution environment PATH.

```json
{
  "mcpServers": {
    "My API Spec (Global)": {
      "command": "mcp-openapi-schema-explorer",
      "args": ["<path-or-url-to-spec>", "--output-format", "yaml"],
      "env": {}
    }
  }
}
```

- Ensure the `command` (`mcp-openapi-schema-explorer`) is accessible in the PATH environment variable used by your MCP client.

### Method 4: Local Development/Installation

This method is useful if you have cloned the repository locally for development or to run a modified version.

**Setup Steps (Run once in your terminal):**

1.  Clone the repository: `git clone https://github.com/kadykov/mcp-openapi-schema-explorer.git`
2.  Navigate into the directory: `cd mcp-openapi-schema-explorer`
3.  Install dependencies: `npm install`
4.  Build the project: `npm run build` (or `just build`)

**Example Client Configuration Entry (Local Development Method):**

Add the following entry to your MCP client's configuration file. This instructs the client to run the locally built server using `node`.

```json
{
  "mcpServers": {
    "My API Spec (Local Dev)": {
      "command": "node",
      "args": [
        "/full/path/to/cloned/mcp-openapi-schema-explorer/dist/src/index.js",
        "<path-or-url-to-spec>",
        "--output-format",
        "yaml"
      ],

      "env": {}
    }
  }
}
```

**Important:** Replace `/full/path/to/cloned/mcp-openapi-schema-explorer/dist/src/index.js` with the correct absolute path to the built `index.js` file in your cloned repository.

## Features

- **MCP Resource Template Access:** Explore OpenAPI specs via parameterized URI templates (`openapi://info`, `openapi://paths/{path}/{method}`, `openapi://components/{type}/{name}`).
- **OpenAPI v3.0 & Swagger v2.0 Support:** Loads both formats, automatically converting v2.0 to v3.0.
- **Local & Remote Files:** Load specs from local file paths or HTTP/HTTPS URLs.
- **Token-Efficient:** Designed to minimize token usage for LLMs by providing structured access.
- **Multiple Output Formats:** Get detailed views in JSON (default), YAML, or minified JSON (`--output-format`).
- **Dynamic Server Name:** Server name in MCP clients reflects the `info.title` from the loaded spec.
- **Reference Transformation:** Internal `$ref`s (`#/components/...`) are transformed into clickable MCP URIs.

## Available MCP Resources

This server exposes the following MCP resource templates for exploring the OpenAPI specification.

> **Important:** This server provides **resource templates**, not pre-enumerated resources. When you use an MCP client:
>
> - The client calls `resources/templates/list` to discover the available template patterns
> - You then construct specific URIs by filling in the template parameters (e.g., replacing `{path}` with `users%2F%7Bid%7D`)
> - The client uses `resources/read` with your constructed URI to fetch the actual content
>
> If you call `resources/list` (without "templates"), you will get an empty list—this is expected behavior.

**Understanding Multi-Value Parameters (`*`)**

Some resource templates include parameters ending with an asterisk (`*`), like `{method*}` or `{name*}`. This indicates that the parameter accepts **multiple comma-separated values**. For example, to request details for both the `GET` and `POST` methods of a path, you would use a URI like `openapi://paths/users/get,post`. This allows fetching details for multiple items in a single request.

**Resource Templates:**

- **`openapi://{field}`**
  - **Description:** Accesses top-level fields of the OpenAPI document (e.g., `info`, `servers`, `tags`) or lists the contents of `paths` or `components`. The specific available fields depend on the loaded specification.
  - **Example:** `openapi://info`
  - **Output:** `text/plain` list for `paths` and `components`; configured format (JSON/YAML/minified JSON) for other fields.
  - **Completions:** Provides dynamic suggestions for `{field}` based on the actual top-level keys found in the loaded spec.

- **`openapi://paths/{path}`**
  - **Description:** Lists the available HTTP methods (operations) for a specific API path.
  - **Parameter:** `{path}` - The API path string. **Must be URL-encoded** (e.g., `/users/{id}` becomes `users%2F%7Bid%7D`).
  - **Example:** `openapi://paths/users%2F%7Bid%7D`
  - **Output:** `text/plain` list of methods.
  - **Completions:** Provides dynamic suggestions for `{path}` based on the paths found in the loaded spec (URL-encoded).

- **`openapi://paths/{path}/{method*}`**
  - **Description:** Gets the detailed specification for one or more operations (HTTP methods) on a specific API path.
  - **Parameters:**
    - `{path}` - The API path string. **Must be URL-encoded**.
    - `{method*}` - One or more HTTP methods (e.g., `get`, `post`, `get,post`). Case-insensitive.
  - **Example (Single):** `openapi://paths/users%2F%7Bid%7D/get`
  - **Example (Multiple):** `openapi://paths/users%2F%7Bid%7D/get,post`
  - **Output:** Configured format (JSON/YAML/minified JSON).
  - **Completions:** Provides dynamic suggestions for `{path}`. Provides static suggestions for `{method*}` (common HTTP verbs like GET, POST, PUT, DELETE, etc.).

- **`openapi://components/{type}`**
  - **Description:** Lists the names of all defined components of a specific type (e.g., `schemas`, `responses`, `parameters`). The specific available types depend on the loaded specification. Also provides a short description for each listed type.
  - **Example:** `openapi://components/schemas`
  - **Output:** `text/plain` list of component names with descriptions.
  - **Completions:** Provides dynamic suggestions for `{type}` based on the component types found in the loaded spec.

- **`openapi://components/{type}/{name*}`**
  - **Description:** Gets the detailed specification for one or more named components of a specific type.
  - **Parameters:**
    - `{type}` - The component type.
    - `{name*}` - One or more component names (e.g., `User`, `Order`, `User,Order`). Case-sensitive.
  - **Example (Single):** `openapi://components/schemas/User`
  - **Example (Multiple):** `openapi://components/schemas/User,Order`
  - **Output:** Configured format (JSON/YAML/minified JSON).
  - **Completions:** Provides dynamic suggestions for `{type}`. Provides dynamic suggestions for `{name*}` _only if_ the loaded spec contains exactly one component type overall (e.g., only `schemas`). This limitation exists because the MCP SDK currently doesn't support providing completions scoped to the selected `{type}`; providing all names across all types could be misleading.

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on setting up the development environment, running tests, and submitting changes.

## Releases

This project uses [`semantic-release`](https://github.com/semantic-release/semantic-release) for automated version management and package publishing based on [Conventional Commits](https://www.conventionalcommits.org/).

## Future Plans

(Future plans to be determined)
