---
name: "zilliztech/mcp-server-milvus"
description: "MCP Server for Milvus / Zilliz, making it possible to interact with your database."
description_tr: "Milvus / Zilliz için MCP Server, veritabanınızla etkileşim kurmanızı sağlar."
category: "Databases"
repo: "zilliztech/mcp-server-milvus"
stars: 231
url: "https://github.com/zilliztech/mcp-server-milvus"
body_length: 16175
license: "Apache-2.0"
language: "Python"
body_tr: |-
  # Milvus için MCP Sunucusu

  > Model Context Protocol (MCP), LLM uygulamalarıyla dış veri kaynakları ve araçlar arasında sorunsuz entegrasyon sağlayan açık bir protokoldür. AI destekli bir IDE oluşturuyor olsanız, sohbet arayüzünü geliştiriyor olsanız veya özel AI iş akışları oluşturuyor olsanız, MCP LLM'leri ihtiyaç duydukları bağlam ile bağlamak için standartlaştırılmış bir yol sağlar.

  Bu depo, [Milvus](https://milvus.io/) vektör veritabanı işlevselliğine erişim sağlayan bir MCP sunucusu içerir.

  ![MCP with Milvus](https://raw.githubusercontent.com/zilliztech/mcp-server-milvus/HEAD/Claude_mcp+1080.gif)

  ## Ön Koşullar

  Bu MCP sunucusunu kullanmadan önce, aşağıdakilere sahip olduğunuzdan emin olun:

  - Python 3.10 veya daha yüksek sürüm
  - Çalışan bir [Milvus](https://milvus.io/) instance'ı (yerel veya uzak)
  - [uv](https://github.com/astral-sh/uv) yüklü (sunucuyu çalıştırmak için önerilir)

  ## Kullanım

  Bu MCP sunucusunu kullanmanın önerilen yolu, kurulum yapmadan doğrudan `uv` ile çalıştırmaktır. Bu, aşağıdaki örneklerde hem Claude Desktop hem de Cursor'un nasıl yapılandırıldığıdır.

  Depoyu klonlamak istiyorsanız:

  ```bash
  git clone https://github.com/zilliztech/mcp-server-milvus.git
  cd mcp-server-milvus
  ```

  Daha sonra sunucuyu doğrudan çalıştırabilirsiniz:

  ```bash
  uv run src/mcp_server_milvus/server.py --milvus-uri http://localhost:19530
  ```

  Alternatif olarak, `src/mcp_server_milvus/` dizinindeki .env dosyasını değiştirerek ortam değişkenlerini ayarlayabilir ve sunucuyu aşağıdaki komutla çalıştırabilirsiniz:

  ```bash
  uv run src/mcp_server_milvus/server.py
  ```

  ### Önemli: .env dosyası komut satırı argümanlarından daha yüksek önceliğe sahip olacaktır.

  ### Çalıştırma Modları

  Sunucu iki çalıştırma modunu destekler: **stdio** (varsayılan) ve **SSE** (Server-Sent Events).

  ### Stdio Modu (Varsayılan)

  - **Açıklama**: İstemci ile standart giriş/çıkış aracılığıyla iletişim kurar. Mode belirtilmemişse bu varsayılan moddur.

  - Kullanım:

    ```bash
    uv run src/mcp_server_milvus/server.py --milvus-uri http://localhost:19530
    ```

  ### SSE Modu

  - **Açıklama**: HTTP Server-Sent Events kullanarak iletişim kurar. Bu mod, birden fazla istemcinin HTTP aracılığıyla bağlanmasına izin verir ve web tabanlı uygulamalar için uygundur.

  - **Kullanım:**

    ```bash
    uv run src/mcp_server_milvus/server.py --sse --milvus-uri http://localhost:19530 --port 8000
    ```

    - `--sse`: SSE modunu etkinleştirir.
    - `--port`: SSE sunucusu için portu belirtir (varsayılan: 8000).

  - **SSE Modunda Hata Ayıklama:**

    SSE modunda hata ayıklamak istiyorsanız, SSE hizmetini başlattıktan sonra aşağıdaki komutu girin:

    ```bash
    mcp dev src/mcp_server_milvus/server.py
    ```

    Çıktı şöyle görünecektir:

    ```plaintext
    % mcp dev src/mcp_server_milvus/merged_server.py
    Starting MCP inspector...
    ⚙️ Proxy server listening on port 6277
    🔍 MCP Inspector is up and running at http://127.0.0.1:6274 🚀
    ```

    Daha sonra `http://127.0.0.1:6274` adresinde MCP Inspector'a erişebilirsiniz.

  ### Streamable HTTP Modu

  - **Açıklama**: İletişim için akış desteğine sahip HTTP kullanır. Bu, üretim dağıtımları için önerilen transport'tur ve hem stateful hem de stateless işlemi destekler.

  - **Kullanım:**

    ```bash
    uv run src/mcp_server_milvus/server.py --streamable-http --milvus-uri http://localhost:19530 --port 8000
    ```

    - `--streamable-http`: Streamable HTTP modunu etkinleştirir.
    - `--port`: Sunucu için portu belirtir (varsayılan: 8000).
    - `--stateless`: Stateless mod için isteğe bağlı bayrak (oturum kalıcılığı yok).

  - **Stateless Modu:**

    ```bash
    uv run src/mcp_server_milvus/server.py --streamable-http --stateless --milvus-uri http://localhost:19530 --port 8000
    ```

  ## Desteklenen Uygulamalar

  Bu MCP sunucusu, Model Context Protocol'ü destekleyen çeşitli LLM uygulamalarıyla kullanılabilir:

  - **Claude Desktop**: Anthropic'in Claude için masaüstü uygulaması
  - **Cursor**: MCP desteğine sahip AI destekli kod editörü
  - **Custom MCP clients**: MCP client belirtimini uygulayan herhangi bir uygulama

  ## Claude Desktop ile Kullanım

  ### Farklı Modlar için Yapılandırma

  #### SSE Modu Yapılandırması

  Claude Desktop'ı SSE modu için yapılandırmak üzere şu adımları izleyin:

  1. Claude Desktop'ı https://claude.ai/download adresinden yükleyin.
  2. Claude Desktop yapılandırma dosyasını açın:
     - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  3. SSE modu için aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
    "mcpServers": {
      "milvus-sse": {
        "url": "http://your_sse_host:port/sse",
        "disabled": false,
        "autoApprove": []
      }
    }
  }
  ```

  #### Streamable HTTP Modu Yapılandırması

  ```json
  {
    "mcpServers": {
      "milvus-streamable-http": {
        "url": "http://your_host:port/mcp",
        "disabled": false,
        "autoApprove": []
      }
    }
  }
  ```

  4. Değişiklikleri uygulamak için Claude Desktop'ı yeniden başlatın.

  #### Stdio Modu Yapılandırması

  Stdio modu için şu adımları izleyin:

  1. Claude Desktop'ı https://claude.ai/download adresinden yükleyin.
  2. Claude Desktop yapılandırma dosyasını açın:
     - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  3. Stdio modu için aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
    "mcpServers": {
      "milvus": {
        "command": "/PATH/TO/uv",
        "args": [
          "--directory",
          "/path/to/mcp-server-milvus/src/mcp_server_milvus",
          "run",
          "server.py",
          "--milvus-uri",
          "http://localhost:19530"
        ]
      }
    }
  }
  ```

  4. Değişiklikleri uygulamak için Claude Desktop'ı yeniden başlatın.

  ## Cursor ile Kullanım

  [Cursor ayrıca MCP'yi destekler](https://docs.cursor.com/context/model-context-protocol). Milvus MCP sunucunuzu Cursor ile aşağıdaki adımları izleyerek entegre edebilirsiniz:

  ### Entegrasyon Adımları

  1. `Cursor Settings` > `MCP` açın
  2. `Add new global MCP server` (Yeni global MCP sunucusu ekle) seçeneğini tıklayın
  3. Tıkladıktan sonra, otomatik olarak `mcp.json` dosyasına yönlendirileceksiniz; bu dosya mevcut değilse oluşturulacaktır

  ### `mcp.json` Dosyasını Yapılandırma

  #### Stdio Modu İçin:

  `mcp.json` dosyasını aşağıdaki içerikle değiştirin:

  ```json
  {
    "mcpServers": {
      "milvus": {
        "command": "/PATH/TO/uv",
        "args": [
          "--directory",
          "/path/to/mcp-server-milvus/src/mcp_server_milvus",
          "run",
          "server.py",
          "--milvus-uri",
          "http://127.0.0.1:19530"
        ]
      }
    }
  }
  ```

  #### SSE Modu İçin:

  1. Aşağıdaki komutu çalıştırarak hizmeti başlatın:

     ```bash
     uv run src/mcp_server_milvus/server.py --sse --milvus-uri http://your_sse_host --port port
     ```

     > **Not**: `http://your_sse_host` yerine gerçek SSE host adresinizi ve `port` yerine kullandığınız port numarasını yazın.

  2. Hizmet çalışmaya başladıktan sonra, `mcp.json` dosyasını aşağıdaki içerikle değiştirin:

     ```json
     {
         "mcpServers": {
           "milvus-sse": {
             "url": "http://your_sse_host:port/sse",
             "disabled": false,
             "autoApprove": []
           }
         }
     }
     ```

  #### Streamable HTTP Modu İçin:

  1. Hizmeti başlatın:

     ```bash
     uv run src/mcp_server_milvus/server.py --streamable-http --milvus-uri http://your_host --port port
     ```

  2. `mcp.json` dosyasını güncelleyin:

     ```json
     {
       "mcpServers": {
         "milvus-streamable-http": {
           "url": "http://your_host:port/mcp",
           "disabled": false,
           "autoApprove": []
         }
       }
     }
     ```

  ### Entegrasyonu Tamamlama

  Yukarıdaki adımları tamamladıktan sonra, yapılandırmanın etkili olmasını sağlamak için Cursor'u yeniden başlatın veya pencereyi yenileyin.

  ## Entegrasyonu Doğrulama

  Cursor'un Milvus MCP sunucusu ile başarılı bir şekilde entegre olduğunu doğrulamak için:

  1. `Cursor Settings` > `MCP` açın
  2. Listede "milvus", "milvus-sse" veya "milvus-streamable-http" adının görünüp görünmediğini kontrol edin (seçtiğiniz moda bağlı olarak)
  3. İlgili araçların listelendiğini doğrulayın (örn. milvus_list_collections, milvus_vector_search, vb.)
  4. Sunucu etkinse ancak hata gösteriyorsa, aşağıdaki Sorun Giderme bölümünü kontrol edin

  ## Kullanılabilir Araçlar

  Sunucu aşağıdaki araçları sağlar:

  ### Arama ve Sorgu İşlemleri

  - `milvus_text_search`: Tam metin araması kullanarak belgeleri ara

    - Parametreler:
      - `collection_name`: Araştırılacak koleksiyonun adı
      - `query_text`: Aranacak metin
      - `limit`: Döndürülecek maksimum sonuç sayısı (varsayılan: 5)
      - `output_fields`: Sonuçlara dahil edilecek alanlar
      - `drop_ratio`: Göz ardı edilecek düşük frekans terimlerinin oranı (0.0-1.0) (varsayılan: 0.2)
  - `milvus_vector_search`: Bir koleksiyonda vektör benzerliği araması gerçekleştir
    - Parametreler:
      - `collection_name`: Araştırılacak koleksiyonun adı
      - `vector`: Sorgu vektörü
      - `vector_field`: Vektör araması için alan adı (varsayılan: "vector")
      - `limit`: Döndürülecek maksimum sonuç sayısı (varsayılan: 5)
      - `output_fields`: Sonuçlara dahil edilecek alanlar
      - `filter_expr`: Filtre ifadesi
      - `metric_type`: Mesafe metriği (COSINE, L2, IP) (varsayılan: "COSINE")
      - `radius`: Aralık araması için isteğe bağlı alt sınır (varsayılan: None)
      - `range_filter`: Aralık araması için isteğe bağlı üst sınır (varsayılan: None)
  - `milvus_hybrid_search`: Bir koleksiyonda hibrit arama gerçekleştir
    - Parametreler:
      - `collection_name`: Araştırılacak koleksiyonun adı
      - `query_text`: Arama için metin sorgusu
      - `text_field`: Metin araması için alan adı
      - `vector`: Metin sorgusunun vektörü
      - `vector_field`: Vektör araması için alan adı
      - `limit`: Döndürülecek maksimum sonuç sayısı (varsayılan: 5)
      - `output_fields`: Sonuçlara dahil edilecek alanlar
      - `filter_expr`: Filtre ifadesi
      - `sparse_radius`: Seyrek aralık araması için isteğe bağlı alt sınır (varsayılan: None)
      - `sparse_range_filter`: Seyrek aralık araması için isteğe bağlı üst sınır (varsayılan: None)
      - `dense_radius`: Yoğun aralık araması için isteğe bağlı alt sınır (varsayılan: None)
      - `dense_range_filter`: Yoğun aralık araması için isteğe bağlı üst sınır (varsayılan: None)
  - `milvus_text_similarity_search`: Bir koleksiyonda metin benzerliği araması gerçekleştir
    > **Not**: Bu araç yalnızca Milvus 2.6.0 ve sonraki sürümlerde desteklenir. Ve Milvus sunucusunda embedding işlevini ayarlamanız gerekir. Daha fazla bilgi için [Embedding Function](https://milvus.io/docs/embedding-function-overview.md#Embedding-Function-Overview) bölümüne bakın.
    - Parametreler:
      - `collection_name`: Araştırılacak koleksiyonun adı
      - `query_text`: Benzerlik araması için metin sorgusu
      - `anns_field`: Metin araması için alan adı
      - `limit`: Döndürülecek maksimum sonuç sayısı (varsayılan: 5)
      - `output_fields`: Sonuçlara dahil edilecek alanlar
      - `metric_type`: Mesafe metriği (COSINE, L2, IP) (varsayılan: "COSINE")
      - `filter_expr`: İsteğe bağlı filtre ifadesi
      - `radius`: Aralık araması için isteğe bağlı alt sınır (varsayılan: None)
      - `range_filter`: Aralık araması için isteğe bağlı üst sınır (varsayılan: None)
  - `milvus_query`: Filtre ifadelerini kullanarak koleksiyonu sorgula
    - Parametreler:
      - `collection_name`: Sorgulanacak koleksiyonun adı
      - `filter_expr`: Filtre ifadesi (örn. 'age > 20')
      - `output_fields`: Sonuçlara dahil edilecek alanlar
      - `limit`: Döndürülecek maksimum sonuç sayısı (varsayılan: 10)

  ### Koleksiyon Yönetimi

  - `milvus_list_collections`: Veritabanındaki tüm koleksiyonları listele

  - `milvus_create_collection`: Hızlı kurulum veya özelleştirilmiş şema ile yeni koleksiyon oluştur

    - Parametreler:
      - `collection_name`: Yeni koleksiyonun adı
      - `auto_id`: İD'nin otomatik olarak oluşturulup oluşturulmayacağı, varsayılan True
      - `dimension`: Vektör boyutu, varsayılan 768; hızlı kurulum için ve `field_schema` sağlanırsa göz ardı edilecek
      - `primary_field_name`: Ana alan adı, varsayılan "id"; hızlı kurulum için ve `field_schema` sağlanırsa göz ardı edilecek
      - `vector_field_name`: Vektör alan adı, varsayılan "vector"; hızlı kurulum için ve `field_schema` sağlanırsa göz ardı edilecek
      - `metric_type`: Metrik tipi, varsayılan "COSINE"; hızlı kurulum için ve `field_schema` sağlanırsa göz ardı edilecek
      - `field_schema`: Alan şemasının listesi, her öğe aşağıdaki anahtarlarla bir sözlüktür:
          - `name`: Alanın adı
          - `type`: Alanın tipi
      - `index_params`: İsteğe bağlı indeks parametreleri listesi, her öğe aşağıdaki anahtarlarla bir sözlüktür:
          - `field_name`: İndekslenmesi gereken alanın adı
          - `index_type`: İndeks tipi
          - `**kwargs`: Diğer isteğe bağlı indeks parametreleri
      - `other_kwargs`: Koleksiyon oluşturması için ek anahtar sözcük argümanları

  - `milvus_load_collection`: Bir koleksiyonu arama ve sorgu için belleğe yükle

    - Parametreler:
      - `collection_name`: Yüklenecek koleksiyonun adı
      - `replica_number`: Replika sayısı (varsayılan: 1)

  - `milvus_release_collection`: Bir koleksiyonu bellekten serbest bırak
    - Parametreler:
      - `collection_name`: Serbest bırakılacak koleksiyonun adı

  - `milvus_get_collection_info`: Şema, özellikler, koleksiyon ID'si ve belirli bir koleksiyonun diğer metadata'sı gibi ayrıntılı bilgileri listele.
    - Parametreler:
      - `collection_name`: Ayrıntılı bilgi almak istediğiniz koleksiyonun adı

  ### Veri İşlemleri

  - `milvus_insert_data`: Bir koleksiyona veri ekle

    - Parametreler:
      - `collection_name`: Koleksiyonun adı
      - `data`: Alan adlarını değer listelerine eşleyen sözlük

  - `milvus_delete_entities`: Filtre ifadesine bağlı olarak bir koleksiyondan varlıkları sil
    - Parametreler:
      - `collection_name`: Koleksiyonun adı
      - `filter_expr`: Silinecek varlıkları seçmek için filtre ifadesi

  ## Ortam Değişkenleri

  - `MILVUS_URI`: Milvus sunucusu URI'ı (--milvus-uri yerine ayarlanabilir)
  - `MILVUS_TOKEN`: İsteğe bağlı kimlik doğrulama tokeni
  - `MILVUS_DB`: Veritabanı adı (varsayılan: "default")

  ## Geliştirme

  Sunucuyu doğrudan çalıştırmak için:

  ```bash
  uv run server.py --milvus-uri http://localhost:19530
  ```

  ## Örnekler

  ### Claude Desktop'ı Kullanma

  #### Örnek 1: Koleksiyonları Listeleme

  ```
  What are the collections I have in my Milvus DB?
  ```

  Claude daha sonra Milvus veritabanınızdaki bu bilgileri kontrol etmek için MCP'yi kullanacaktır.

  ```
  I'll check what collections are available in your Milvus database.

  Here are the collections in your Milvus database:

  1. rag_demo
  2. test
  3. chat_messages
  4. text_collection
  5. image_collection
  6. customized_setup
  7. streaming_rag_demo
  ```

  #### Örnek 2: Belge Arama

  ```
  Find documents in my text_collection that mention "machine learning"
  ```

  Claude, makine öğrenmesini içeren ilgili belgeleri bulmak için Milvus'un tam metin arama özelliklerini kullanacaktır:

  ```
  I'll search for documents about machine learning in your text_collection.

  > View result from milvus-text-search from milvus (local)

  Here are the documents I found that mention machine learning:
  [Results will appear here based on your actual data]
  ```

  ### Cursor'u Kullanma

  #### Örnek: Koleksiyon Oluşturma

  Cursor'da şunları sorabilirsiniz:

  ```
  Create a new collection called 'articles' in Milvus with fields for title (string), content (string), and a vector field (128 dimensions)
  ```

  Cursor bu işlemi yürütmek için MCP sunucusunu kullanacaktır:

  ```
  I'll create a new collection called 'articles' with the specified fields.

  Collection 'articles' has been created successfully with the following schema:
  - title: string
  - content: string
  - vector: float vector[128]
  ```

  ## Sorun Giderme

  ### Yaygın Sorunlar

  #### Bağlantı Hataları

  "Failed to connect to Milvus server" gibi hatalar görüyorsanız:

  1. Milvus instance'ınızın çalışıp çalışmadığını doğrulayın: `docker ps` (Docker kullanıyorsanız)
  2. Yapılandırmanızdaki URI'nin doğru olduğunu kontrol edin
  3. Bağlantıyı engelleyen güvenlik duvarı kuralları olmadığından emin olun
  4. URI'de `localhost` yerine `127.0.0.1` kullanmayı deneyin

  #### Kimlik Doğrulama Hataları

  Kimlik doğrulama hataları görüyorsanız:

  1. `MILVUS_TOKEN` değerinin doğru olduğunu doğrulayın
  2. Milvus instance'ınızın kimlik doğrulama gerektirip gerektirmediğini kontrol edin
  3. Gerçekleştirmeye çalıştığınız işlemler için doğru izinlere sahip olduğunuzdan emin olun

  #### Araç Bulunamadı

  MCP araçları Claude Desktop veya Cursor'da görünmüyorsa:

  1. Uygulamayı yeniden başlatın
  2. Sunucu günlüklerinde hataları kontrol edin
  3. MCP sunucusunun doğru şekilde çalışıp çalışmadığını doğrulayın
  4. MCP ayarlarındaki yenile düğmesine basın (Cursor için)

  ### Yardım Almak

  Sorunları yaşamaya devam ediyorsanız:

  1. Benzer sorunlar için [GitHub Issues](https://github.com/zilliztech/mcp-server-milvus/issues) bölümünü kontrol edin
  2. Destek için [Milvus Community Discord](https://milvus.io/discord) kanalına katılın
  3. Sorununuz hakkında ayrıntılı bilgi ile yeni bir issue açın
---

# MCP Server for Milvus

> The Model Context Protocol (MCP) is an open protocol that enables seamless integration between LLM applications and external data sources and tools. Whether you're building an AI-powered IDE, enhancing a chat interface, or creating custom AI workflows, MCP provides a standardized way to connect LLMs with the context they need.

This repository contains a MCP server that provides access to [Milvus](https://milvus.io/) vector database functionality.

![MCP with Milvus](https://raw.githubusercontent.com/zilliztech/mcp-server-milvus/HEAD/Claude_mcp+1080.gif)

## Prerequisites

Before using this MCP server, ensure you have:

- Python 3.10 or higher
- A running [Milvus](https://milvus.io/) instance (local or remote)
- [uv](https://github.com/astral-sh/uv) installed (recommended for running the server)

## Usage

The recommended way to use this MCP server is to run it directly with `uv` without installation. This is how both Claude Desktop and Cursor are configured to use it in the examples below.

If you want to clone the repository:

```bash
git clone https://github.com/zilliztech/mcp-server-milvus.git
cd mcp-server-milvus
```

Then you can run the server directly:

```bash
uv run src/mcp_server_milvus/server.py --milvus-uri http://localhost:19530
```

Alternatively you can change the .env file in the `src/mcp_server_milvus/` directory to set the environment variables and run the server with the following command:

```bash
uv run src/mcp_server_milvus/server.py
```

### Important: the .env file will have higher priority than the command line arguments.

### Running Modes

The server supports two running modes: **stdio** (default) and **SSE** (Server-Sent Events).

### Stdio Mode (Default)

- **Description**: Communicates with the client via standard input/output. This is the default mode if no mode is specified.

- Usage:

  ```bash
  uv run src/mcp_server_milvus/server.py --milvus-uri http://localhost:19530
  ```

### SSE Mode

- **Description**: Uses HTTP Server-Sent Events for communication. This mode allows multiple clients to connect via HTTP and is suitable for web-based applications.

- **Usage:**

  ```bash
  uv run src/mcp_server_milvus/server.py --sse --milvus-uri http://localhost:19530 --port 8000
  ```

  - `--sse`: Enables SSE mode.
  - `--port`: Specifies the port for the SSE server (default: 8000).

- **Debugging in SSE Mode:**

  If you want to debug in SSE mode, after starting the SSE service, enter the following command:

  ```bash
  mcp dev src/mcp_server_milvus/server.py
  ```

  The output will be similar to:

  ```plaintext
  % mcp dev src/mcp_server_milvus/merged_server.py
  Starting MCP inspector...
  ⚙️ Proxy server listening on port 6277
  🔍 MCP Inspector is up and running at http://127.0.0.1:6274 🚀
  ```

  You can then access the MCP Inspector at `http://127.0.0.1:6274` for testing.

### Streamable HTTP Mode

- **Description**: Uses HTTP with streaming support for communication. This is the recommended transport for production deployments and supports both stateful and stateless operation.

- **Usage:**

  ```bash
  uv run src/mcp_server_milvus/server.py --streamable-http --milvus-uri http://localhost:19530 --port 8000
  ```

  - `--streamable-http`: Enables Streamable HTTP mode.
  - `--port`: Specifies the port for the server (default: 8000).
  - `--stateless`: Optional flag for stateless mode (no session persistence).

- **Stateless Mode:**

  ```bash
  uv run src/mcp_server_milvus/server.py --streamable-http --stateless --milvus-uri http://localhost:19530 --port 8000
  ```

## Supported Applications

This MCP server can be used with various LLM applications that support the Model Context Protocol:

- **Claude Desktop**: Anthropic's desktop application for Claude
- **Cursor**: AI-powered code editor with MCP support
- **Custom MCP clients**: Any application implementing the MCP client specification

## Usage with Claude Desktop

### Configuration for Different Modes

#### SSE Mode Configuration

Follow these steps to configure Claude Desktop for SSE mode:

1. Install Claude Desktop from https://claude.ai/download.
2. Open your Claude Desktop configuration file:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
3. Add the following configuration for SSE mode:

```json
{
  "mcpServers": {
    "milvus-sse": {
      "url": "http://your_sse_host:port/sse",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```
#### Streamable HTTP Mode Configuration

```json
{
  "mcpServers": {
    "milvus-streamable-http": {
      "url": "http://your_host:port/mcp",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```


4. Restart Claude Desktop to apply the changes.

#### Stdio Mode Configuration

For stdio mode, follow these steps:

1. Install Claude Desktop from https://claude.ai/download.
2. Open your Claude Desktop configuration file:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
3. Add the following configuration for stdio mode:

```json
{
  "mcpServers": {
    "milvus": {
      "command": "/PATH/TO/uv",
      "args": [
        "--directory",
        "/path/to/mcp-server-milvus/src/mcp_server_milvus",
        "run",
        "server.py",
        "--milvus-uri",
        "http://localhost:19530"
      ]
    }
  }
}
```

4. Restart Claude Desktop to apply the changes.

## Usage with Cursor

[Cursor also supports MCP](https://docs.cursor.com/context/model-context-protocol) tools. You can integrate your Milvus MCP server with Cursor by following these steps:

### Integration Steps

1. Open `Cursor Settings` > `MCP`
2. Click on `Add new global MCP server`
3. After clicking, it will automatically redirect you to the `mcp.json` file, which will be created if it doesn’t exist

### Configuring the `mcp.json` File

#### For Stdio Mode:

Overwrite the `mcp.json` file with the following content:

```json
{
  "mcpServers": {
    "milvus": {
      "command": "/PATH/TO/uv",
      "args": [
        "--directory",
        "/path/to/mcp-server-milvus/src/mcp_server_milvus",
        "run",
        "server.py",
        "--milvus-uri",
        "http://127.0.0.1:19530"
      ]
    }
  }
}
```

#### For SSE Mode:

1. Start the service by running the following command:

   ```bash
   uv run src/mcp_server_milvus/server.py --sse --milvus-uri http://your_sse_host --port port
   ```

   > **Note**: Replace `http://your_sse_host` with your actual SSE host address and `port` with the specific port number you’re using.

2. Once the service is up and running, overwrite the `mcp.json` file with the following content:

   ```json
   {
       "mcpServers": {
         "milvus-sse": {
           "url": "http://your_sse_host:port/sse",
           "disabled": false,
           "autoApprove": []
         }
       }
   }
   ```

#### For Streamable HTTP Mode:

1. Start the service:

   ```bash
   uv run src/mcp_server_milvus/server.py --streamable-http --milvus-uri http://your_host --port port
   ```

2. Update `mcp.json`:

   ```json
   {
     "mcpServers": {
       "milvus-streamable-http": {
         "url": "http://your_host:port/mcp",
         "disabled": false,
         "autoApprove": []
       }
     }
   }
   ```

### Completing the Integration

After completing the above steps, restart Cursor or reload the window to ensure the configuration takes effect.

## Verifying the Integration

To verify that Cursor has successfully integrated with your Milvus MCP server:

1. Open `Cursor Settings` > `MCP`
2. Check if "milvus", "milvus-sse", or "milvus-streamable-http" appear in the list (depending on the mode you have chosen)
3. Confirm that the relevant tools are listed (e.g., milvus_list_collections, milvus_vector_search, etc.)
4. If the server is enabled but shows an error, check the Troubleshooting section below

## Available Tools

The server provides the following tools:

### Search and Query Operations

- `milvus_text_search`: Search for documents using full text search

  - Parameters:
    - `collection_name`: Name of collection to search
    - `query_text`: Text to search for
    - `limit`: The maximum number of results to return (default: 5)
    - `output_fields`: Fields to include in results
    - `drop_ratio`: Proportion of low-frequency terms to ignore (0.0-1.0) (default: 0.2)
- `milvus_vector_search`: Perform vector similarity search on a collection
  - Parameters:
    - `collection_name`: Name of collection to search
    - `vector`: Query vector
    - `vector_field`: Field name for vector search (default: "vector")
    - `limit`: The maximum number of results to return (default: 5)
    - `output_fields`: Fields to include in results
    - `filter_expr`: Filter expression
    - `metric_type`: Distance metric (COSINE, L2, IP) (default: "COSINE")
    - `radius`: Optional lower bound for range search (default: None)
    - `range_filter`: Optional upper bound for range search (default: None)
- `milvus_hybrid_search`: Perform hybrid search on a collection
  - Parameters:
    - `collection_name`: Name of collection to search
    - `query_text`: Text query for search
    - `text_field`: Field name for text search
    - `vector`: Vector of the text query
    - `vector_field`: Field name for vector search
    - `limit`: The maximum number of results to return (default: 5)
    - `output_fields`: Fields to include in results
    - `filter_expr`: Filter expression
    - `sparse_radius`: Optional lower bound for sparse range search (default: None)
    - `sparse_range_filter`: Optional upper bound for sparse range search (default: None)
    - `dense_radius`: Optional lower bound for dense range search (default: None)
    - `dense_range_filter`: Optional upper bound for dense range search (default: None)
- `milvus_text_similarity_search`: Perform text similarity search on a collection
  > **Note**: This tool is only supported in Milvus 2.6.0 and above. And you need to set the embedding function at the Milvus server. See [Embedding Function](https://milvus.io/docs/embedding-function-overview.md#Embedding-Function-Overview) for more details.
  - Parameters:
    - `collection_name`: Name of collection to search
    - `query_text`: Text query for similarity search
    - `anns_field`: Field name for text search
    - `limit`: The maximum number of results to return (default: 5)
    - `output_fields`: Fields to include in results
    - `metric_type`: Distance metric (COSINE, L2, IP) (default: "COSINE")
    - `filter_expr`: Optional filter expression
    - `radius`: Optional lower bound for range search (default: None)
    - `range_filter`: Optional upper bound for range search (default: None)
- `milvus_query`: Query collection using filter expressions
  - Parameters:
    - `collection_name`: Name of collection to query
    - `filter_expr`: Filter expression (e.g. 'age > 20')
    - `output_fields`: Fields to include in results
    - `limit`: The maximum number of results to return (default: 10)

### Collection Management

- `milvus_list_collections`: List all collections in the database

- `milvus_create_collection`: Create a new collection with quick setup or customized schema

  - Parameters:
    - `collection_name`: Name for the new collection
    - `auto_id`: whether to auto generate id, default to True
    - `dimension`: vector dimension, default to 768; for quick setup and will be ignored if `field_schema` is provided
    - `primary_field_name`: name of the primary field, default to "id"; for quick setup and will be ignored if `field_schema` is provided
    - `vector_field_name`: name of the vector field, default to "vector"; for quick setup and will be ignored if `field_schema` is provided
    - `metric_type`: metric type, default to "COSINE"; for quick setup and will be ignored if `field_schema` is provided
    - `field_schema`: List of field schema, each element is a dictionary with the following keys:
        - `name`: name of the field
        - `type`: type of the field
    - `index_params`: Optional list of index parameters, each element is a dictionary with the following keys:
        - `field_name`: name of the field to index
        - `index_type`: index type
        - `**kwargs`: other optional index parameters
    - `other_kwargs`: Additional keyword arguments for the collection creation

- `milvus_load_collection`: Load a collection into memory for search and query

  - Parameters:
    - `collection_name`: Name of collection to load
    - `replica_number`: Number of replicas (default: 1)

- `milvus_release_collection`: Release a collection from memory
  - Parameters:
    - `collection_name`: Name of collection to release

- `milvus_get_collection_info`: Lists detailed information like schema, properties, collection ID, and other metadata of a specific collection.
  - Parameters:
    - `collection_name`:  Name of the collection to get detailed information about

### Data Operations

- `milvus_insert_data`: Insert data into a collection

  - Parameters:
    - `collection_name`: Name of collection
    - `data`: Dictionary mapping field names to lists of values

- `milvus_delete_entities`: Delete entities from a collection based on filter expression
  - Parameters:
    - `collection_name`: Name of collection
    - `filter_expr`: Filter expression to select entities to delete

## Environment Variables

- `MILVUS_URI`: Milvus server URI (can be set instead of --milvus-uri)
- `MILVUS_TOKEN`: Optional authentication token
- `MILVUS_DB`: Database name (defaults to "default")

## Development

To run the server directly:

```bash
uv run server.py --milvus-uri http://localhost:19530
```

## Examples

### Using Claude Desktop

#### Example 1: Listing Collections

```
What are the collections I have in my Milvus DB?
```

Claude will then use MCP to check this information on your Milvus DB.

```
I'll check what collections are available in your Milvus database.

Here are the collections in your Milvus database:

1. rag_demo
2. test
3. chat_messages
4. text_collection
5. image_collection
6. customized_setup
7. streaming_rag_demo
```

#### Example 2: Searching for Documents

```
Find documents in my text_collection that mention "machine learning"
```

Claude will use the full-text search capabilities of Milvus to find relevant documents:

```
I'll search for documents about machine learning in your text_collection.

> View result from milvus-text-search from milvus (local)

Here are the documents I found that mention machine learning:
[Results will appear here based on your actual data]
```

### Using Cursor

#### Example: Creating a Collection

In Cursor, you can ask:

```
Create a new collection called 'articles' in Milvus with fields for title (string), content (string), and a vector field (128 dimensions)
```

Cursor will use the MCP server to execute this operation:

```
I'll create a new collection called 'articles' with the specified fields.

Collection 'articles' has been created successfully with the following schema:
- title: string
- content: string
- vector: float vector[128]
```

## Troubleshooting

### Common Issues

#### Connection Errors

If you see errors like "Failed to connect to Milvus server":

1. Verify your Milvus instance is running: `docker ps` (if using Docker)
2. Check the URI is correct in your configuration
3. Ensure there are no firewall rules blocking the connection
4. Try using `127.0.0.1` instead of `localhost` in the URI

#### Authentication Issues

If you see authentication errors:

1. Verify your `MILVUS_TOKEN` is correct
2. Check if your Milvus instance requires authentication
3. Ensure you have the correct permissions for the operations you're trying to perform

#### Tool Not Found

If the MCP tools don't appear in Claude Desktop or Cursor:

1. Restart the application
2. Check the server logs for any errors
3. Verify the MCP server is running correctly
4. Press the refresh button in the MCP settings (for Cursor)

### Getting Help

If you continue to experience issues:

1. Check the [GitHub Issues](https://github.com/zilliztech/mcp-server-milvus/issues) for similar problems
2. Join the [Milvus Community Discord](https://milvus.io/discord) for support
3. File a new issue with detailed information about your problem
