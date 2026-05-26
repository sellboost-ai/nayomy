---
name: "ckanthony/gin-mcp"
description: "A zero-configuration Go library to automatically expose existing Gin web framework APIs as MCP tools."
category: "Developer Tools"
repo: "ckanthony/gin-mcp"
stars: 77
url: "https://github.com/ckanthony/gin-mcp"
body_length: 18148
license: "MIT"
language: "Go"
body_tr: |-
  # Gin-MCP: Sıfır Konfigürasyonlu Gin to MCP Köprüsü

  [![Go Reference](https://pkg.go.dev/badge/github.com/ckanthony/gin-mcp.svg)](https://pkg.go.dev/github.com/ckanthony/gin-mcp)
  [![CI](https://github.com/ckanthony/gin-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/ckanthony/gin-mcp/actions/workflows/ci.yml)
  [![codecov](https://codecov.io/gh/ckanthony/gin-mcp/branch/main/graph/badge.svg)](https://codecov.io/gh/ckanthony/gin-mcp)
  ![](https://badge.mcpx.dev?type=dev 'MCP Dev')

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ckanthony/gin-mcp)](https://archestra.ai/mcp-catalog/ckanthony__gin-mcp)

  <table border="0">
    <tr>
      <td valign="top">
        <strong>Herhangi bir Gin API'sı için tek satır kod ile MCP özelliklerini etkinleştirin.</strong>
        <br><br>
        Gin-MCP, mevcut Gin endpoint'lerinizi otomatik olarak <a href="https://modelcontextprotocol.io/introduction">Model Context Protocol (MCP)</a> tool'ları olarak açığa çıkaran <strong>görüşlü, sıfır-konfigürasyonlu</strong> bir kütüphanedir ve bunları <a href="https://cursor.sh/">Cursor</a>, <a href="https://claude.ai/desktop">Claude Desktop</a>, <a href="https://continue.dev/">Continue</a>, <a href="https://zed.dev/">Zed</a> ve diğer MCP etkinli tool'lar gibi MCP uyumlu istemciler tarafından anında kullanılabilir hale getirir.
        <br><br>
        Felseféimiz basittir: <strong>minimum kurulum, maksimum verimlilik</strong>. Gin-MCP'yi Gin uygulamanıza takın ve geri kalanını biz hallederiz.
      </td>
      <td valign="top" align="right" width="200">
        
      </td>
    </tr>
  </table>

  ## Gin-MCP Neden?

  -   **Zahmetsiz Entegrasyon:** Gin API'nizi MCP istemcilerine, sıkıcı boilerplate kod yazarak, bağlayın.
  -   **Sıfır Konfigürasyon (varsayılan olarak):** Hemen başlayın. Gin-MCP rota'ları otomatik olarak keşfeder ve şema'ları çıkarır.
  -   **Geliştirici Verimliliği:** Araç konfigürasyonunda daha az zaman harcayın ve özellik geliştirmede daha fazla zaman harcayın.
  -   **Esneklik:** Sıfır-konfigürasyon varsayılan olsa da, ihtiyaç halinde şema'ları ve endpoint açığa çıkarmayı özelleştirin.
  -   **Mevcut API:** Mevcut Gin API'niz ile çalışır - hiçbir kod değişikliği yapmanız gerekmez.

  ## Demo

  ![gin-mcp-example](https://github.com/user-attachments/assets/ad6948ce-ed11-400b-8e96-9b020e51df78)

  ## Özellikler

  -   **Otomatik Keşif:** Tüm kayıtlı Gin route'larını akıllıca bulur.
  -   **Schema İnferansi:** Rota parametreleri ve request/response türlerinden otomatik olarak MCP tool schema'ları oluşturur (mümkün olan yerlerde).
  -   **Doğrudan Gin Entegrasyonu:** MCP server'ını doğrudan mevcut `gin.Engine` üzerine monte eder.
  -   **Parameter Koruyması:** Gin rota parametrelerinizi (path, query) oluşturulan MCP tool'larında doğru şekilde yansıtır.
  -   **Dinamik BaseURL Çözünürlüğü:** Proxy ortamları (Quicknode, RAGFlow) için destek kullanıcı/deployment başına endpoint'ler ile.
  -   **Özelleştirilebilir Şema'lar:** `RegisterSchema` kullanarak belirli route'lar için şema'ları manuel olarak kaydedin ve hassas kontrol sağlayın.
  -   **Seçmeli Açığa Çıkarma:** Operation ID'ler veya tag'ler kullanarak hangi endpoint'lerin açığa çıkarıldığını filtreleyin.
  -   **Esnek Dağıtım:** MCP server'ını aynı Gin uygulaması içine monte edin veya ayrı olarak dağıtın.
  -   **Streamable HTTP Taşıması:** MCP spec 2025-03-26 için opt-in ile durumsuz, load-balancer dostu dağıtımlar yapın, oturum yakınlığı gerekmez.
  -   **Authorization Header İletimi:** İstemcinin `Authorization` başlığını otomatik olarak her dahili tool-execution çağrısına ileterek, JWT korumalı API'lere MCP erişimi etkinleştirin.

  ## Kurulum

  ```bash
  go get github.com/ckanthony/gin-mcp
  ```

  ## Temel Kullanım: Anında MCP Sunucusu

  Minimal kod ile MCP sunucunuzu dakikalar içinde çalıştırın:

  ```go
  package main

  import (
  	"net/http"

  	server "github.com/ckanthony/gin-mcp/"
  	"github.com/gin-gonic/gin"
  )

  func main() {
  	// 1. Gin engine'i oluşturun
  	r := gin.Default()

  	// 2. API route'larınızı tanımlayın (Gin-MCP bunları keşfedecek)
  	r.GET("/ping", func(c *gin.Context) {
  		c.JSON(http.StatusOK, gin.H{"message": "pong"})
  	})

  	r.GET("/users/:id", func(c *gin.Context) {
  		// Örnek handler...
  		userID := c.Param("id")
  		c.JSON(http.StatusOK, gin.H{"user_id": userID, "status": "fetched"})
  	})

  	// 3. MCP server'ını oluşturun ve yapılandırın
  	//    MCP istemcisi için gerekli detayları sağlayın.
  	mcp := server.New(r, &server.Config{
  		Name:        "My Simple API",
  		Description: "An example API automatically exposed via MCP.",
  		// BaseURL çok önemli! MCP istemcilerine istekleri nereye göndereceğini söyler.
  		BaseURL: "http://localhost:8080",
  	})

  	// 4. MCP server endpoint'ini monte edin
  	mcp.Mount("/mcp") // MCP istemcileri buraya bağlanacak

  	// 5. Gin sunucunuzu çalıştırın
  	r.Run(":8080") // Gin server'ı normal şekilde çalışır
  }

  ```

  Hepsi bu! MCP tool'larınız artık `http://localhost:8080/mcp` adresinde mevcuttur. Gin-MCP otomatik olarak `/ping` ve `/users/:id` için tool'lar oluşturdu.

  > **`BaseURL` Hakkında Not**: Her zaman açık bir `BaseURL` sağlayın. Bu, MCP server'ına istemci tarafından bir tool çalıştırıldığında API isteklerini nereye ileteceğini söyler. Olmadan, otomatik algılama başarısız olabilir, özellikle proxy'ler veya farklı dahili/harici URL'ler olan ortamlarda.

  ## Gelişmiş Kullanım

  Gin-MCP sıfır konfigürasyonu hedeflese de, davranışını özelleştirebilirsiniz.

  ### Handler'ları Yorumlar ile Açıklama

  Gin-MCP, zengin tool açıklamaları oluşturmak için handler function yorumlarından meta veri'yi otomatik olarak çıkarır. Bu açıklamaları MCP tool'larınızı daha keşfedilebilir ve kullanışlı hale getirmek için kullanın:

  ```go
  // listProducts, ürünlerin sayfalanmış listesini alır
  // @summary Tüm ürünleri listele
  // @description Fiyat, tag'ler ve kullanılabilirliğe göre isteğe bağlı filtreleme ile ürünlerin sayfalanmış listesini döndürür
  // @param page Sayfalama için sayfa numarası (varsayılan: 1)
  // @param limit Sayfa başına öğe sayısı (varsayılan: 10, maks: 100)
  // @param minPrice Minimum fiyat filtresi
  // @param tag Ürünleri tag'e göre filtrele
  // @tags public catalog
  func listProducts(c *gin.Context) {
      // Handler implementasyonu...
  }
  ```

  **Desteklenen Açıklamalar:**

  -   **`@summary`** - Kısa tek satırlık açıklama, tool'un ana açıklaması olur
  -   **`@description`** - Özete eklenen ek detaylı açıklama
  -   **`@param <name> <text>`** - Oluşturulan şema'daki belirli giriş parametrelerine açıklayıcı metin ekler
  -   **`@tags`** - Tool'ları filtrelemek için kullanılan boşluk veya virgülle ayrılmış tag'ler (aşağıda "Açığa Çıkarılan Endpoint'leri Filtreleme" bölümüne bakın)
  -   **`@operationId <id>`** - Tool için özel operation ID (varsayılan `METHOD_path` adlandırma şemasını geçersiz kılar). Tüm route'lar arasında benzersiz olmalı; yinelemeler atlanacak (ilk bildirim kazanır) ve bir uyarı kaydedilecektir.

  Tüm açıklamalar isteğe bağlıdır, ancak bunları kullanmak API tool'larınızı Claude Desktop ve Cursor gibi MCP istemcilerde çok daha kullanıcı dostu hale getirir.

  **Özel Operation ID'ler:**

  Varsayılan olarak, Gin-MCP operation ID'ler `METHOD_path` formatını kullanarak oluşturur (örn. `GET_users_id`). Çok uzun yollara sahip route'lar için, daha kısa, daha yönetilebilir bir ad belirtmek üzere `@operationId` kullanabilirsiniz:

  ```go
  // getUserProfile, genişletilmiş meta veri ile bir kullanıcının profilini alır
  // @summary Kullanıcı profilini al
  // @operationId getUserProfile
  // @param id Kullanıcı tanımlayıcı
  func getUserProfile(c *gin.Context) {
      // Varsayılan "GET_api_v2_users_userId_profile_extended" yerine
      // bu tool "getUserProfile" olarak adlandırılacak
  }
  ```

  **Önemli:** Operation ID'ler benzersiz olmalı. İki handler aynı `@operationId` kullanırsa, yineleme tamamen atlanacak (ilk bildirim kazanır) ve her zaman bir uyarı kaydedilecektir. Bu, tool listesi ile operations map'i arasında tutarlılık sağlar.

  ### `RegisterSchema` ile Hassas Schema Kontrolü

  Bazen otomatik schema çıkarımı yeterli değildir. `RegisterSchema`, belirli route'lar için query parametreleri veya request body'ler için açıkça şema tanımlamanıza izin verir. Bu kullanışlıdır:

  -   Query parametreleri için karmaşık struct'lar kullandığınızda (`ShouldBindQuery`).
  -   Request body'ler için ayrı şema'lar tanımlamak istediğinizde (örn. POST/PUT için).
  -   Otomatik çıkarım, MCP tool tanımında açığa çıkarmak istediğiniz belirli kısıtlamaları (enum'lar, açıklamalar vb.) yakalamazsa.

  ```go
  package main

  import (
  	// ... diğer import'lar
  	"github.com/ckanthony/gin-mcp/pkg/server"
  	"github.com/gin-gonic/gin"
  )

  // Query parametreleri için örnek struct
  type ListProductsParams struct {
  	Page  int    `form:"page,default=1" json:"page,omitempty" jsonschema:"description=Page number,minimum=1"`
  	Limit int    `form:"limit,default=10" json:"limit,omitempty" jsonschema:"description=Items per page,maximum=100"`
  	Tag   string `form:"tag" json:"tag,omitempty" jsonschema:"description=Filter by tag"`
  }

  // POST request body'si için örnek struct
  type CreateProductRequest struct {
  	Name  string  `json:"name" jsonschema:"required,description=Product name"`
  	Price float64 `json:"price" jsonschema:"required,minimum=0,description=Product price"`
  }

  func main() {
  	r := gin.Default()

  	// --- Route'ları Tanımlayın ---
  	r.GET("/products", func(c *gin.Context) { /* ... handler ... */ })
  	r.POST("/products", func(c *gin.Context) { /* ... handler ... */ })
  	r.PUT("/products/:id", func(c *gin.Context) { /* ... handler ... */ })


  	// --- MCP Sunucusunu Yapılandırın ---
  	mcp := server.New(r, &server.Config{
  		Name:        "Product API",
  		Description: "API for managing products.",
  		BaseURL:     "http://localhost:8080",
  	})

  	// --- Şema'ları Kaydedin ---
  	// ListProductsParams'ı GET /products için query şema'sı olarak kaydedin
  	mcp.RegisterSchema("GET", "/products", ListProductsParams{}, nil)

  	// CreateProductRequest'i POST /products için request body şema'sı olarak kaydedin
  	mcp.RegisterSchema("POST", "/products", nil, CreateProductRequest{})

  	// Gerektiğinde diğer method'lar/route'lar için şema'lar kaydedebilirsiniz
  	// örn. mcp.RegisterSchema("PUT", "/products/:id", nil, UpdateProductRequest{})

  	mcp.Mount("/mcp")
  	r.Run(":8080")
  }
  ```

  **Açıklama:**

  -   `mcp.RegisterSchema(method, path, querySchema, bodySchema)`
  -   `method`: HTTP method'u (örn. "GET", "POST").
  -   `path`: Gin rota yolu (örn. "/products", "/products/:id").
  -   `querySchema`: Query parametreleri için kullanılan struct'ın bir instance'ı (veya hiç yoksa `nil`). Gin-MCP şema'yı oluşturmak için reflection ve `jsonschema` tag'lerini kullanır.
  -   `bodySchema`: Request body'si için kullanılan struct'ın bir instance'ı (veya hiç yoksa `nil`).

  ### Açığa Çıkarılan Endpoint'leri Filtreleme

  Operation ID'ler veya tag'ler kullanarak hangi Gin endpoint'lerinin MCP tool'ları olacağını kontrol edin. Tag'ler handler fonksiyon yorumlarınızdan `@tags` açıklamasından gelir (yukarıda "Handler'ları Açıklama" bölümüne bakın).

  #### Tag Tabanlı Filtreleme

  Tag'ler handler function yorumlarında `@tags` açıklaması kullanarak belirtilir. Tag'leri boşluk, virgül veya her ikisi ile ayrılmış olarak belirtebilirsiniz:

  ```go
  // listUsers kullanıcı listelemeyi işler
  // @summary Tüm kullanıcıları listele
  // @tags public users
  func listUsers(c *gin.Context) {
      // Implementasyon...
  }

  // deleteUser kullanıcı silmeyi işler
  // @summary Kullanıcı sil
  // @tags admin, internal
  func deleteUser(c *gin.Context) {
      // Implementasyon...
  }
  ```

  #### Filtreleme Konfigürasyonu

  ```go
  // Sadece belirli operation'ları Operation ID'lerine göre dahil et
  mcp := server.New(r, &server.Config{
      // ... diğer config ...
      IncludeOperations: []string{"GET_users", "POST_users"},
  })

  // Belirli operation'ları hariç tut
  mcp := server.New(r, &server.Config{
      // ... diğer config ...
      ExcludeOperations: []string{"DELETE_users_id"}, // Sil tool'unu açığa çıkarma
  })

  // Sadece "public" veya "users" tag'leri ile etiketlenen operation'ları dahil et
  // Bir tool belirtilen tag'lerden HERHANGİ BİRİNE sahipse dahil edilir
  mcp := server.New(r, &server.Config{
      // ... diğer config ...
      IncludeTags: []string{"public", "users"},
  })

  // "admin" veya "internal" tag'leri ile etiketlenen operation'ları hariç tut
  // Bir tool belirtilen tag'lerden HERHANGİ BİRİNE sahipse hariç tutulur
  mcp := server.New(r, &server.Config{
      // ... diğer config ...
      ExcludeTags: []string{"admin", "internal"},
  })
  ```

  **Filtreleme Kuralları:**

  -   Sadece **bir** dahil etme filtresi (`IncludeOperations` **VEYA** `IncludeTags`) kullanabilirsiniz.
      - Her ikisi de ayarlanırsa, `IncludeOperations` önceliklidir ve bir uyarı kaydedilir.
  -   Sadece **bir** hariç tutma filtresi (`ExcludeOperations` **VEYA** `ExcludeTags`) kullanabilirsiniz.
      - Her ikisi de ayarlanırsa, `ExcludeOperations` önceliklidir ve bir uyarı kaydedilir.
  -   Bir dahil etme filtresi ile bir hariç tutma filtresini **birleştirebilirsiniz** (örn. "public" tag'ini dahil et ama "legacyPublicOp" operation'ını hariç tut).
  -   **Hariç tutma her zaman kazanır**: Bir tool hem dahil etme hem de hariç tutma filtrelerine uyuyorsa, hariç tutulacaktır.
  -   **Tag eşleşmesi**: Bir tool belirtilen tag'lerden **herhangi birine** sahipse dahil edilir/hariç tutulur (VEYA mantığı).

  **Örnekler:**

  ```go
  // "public" endpoint'lerini dahil et ama "internal" tag'leri de olanları hariç tut
  mcp := server.New(r, &server.Config{
      IncludeTags: []string{"public"},
      ExcludeTags: []string{"internal"},
  })

  // Belirli operation'ları dahil et ama admin endpoint'lerini hariç tut
  mcp := server.New(r, &server.Config{
      IncludeOperations: []string{"GET_users", "GET_products"},
      ExcludeTags:       []string{"admin"},  // Bu göz ardı edilecek (öncelik kuralı)
  })
  ```

  ### Şema Açıklamalarını Özelleştirme (Daha Az Sık)

  Yanıt şema'larının oluşturulan tool'larda açıklanma şeklinin üzerinde gelişmiş kontrol için (genellikle gerekli değildir):

  ```go
  mcp := server.New(r, &server.Config{
      // ... diğer config ...
      DescribeAllResponses:    true, // Tüm olası response şema'larını (örn. 200, 404) tool açıklamalarına dahil et
      DescribeFullResponseSchema: true, // Sadece bir referans yerine tam JSON schema object'ini dahil et
  })
  ```

  ## Örnekler

  Çeşitli özelikleri gösteren tam, çalıştırılabilir örnekler için [`examples`](examples) dizinine bakın:

  ### Temel Kullanım Örnekleri

  - **[`examples/simple/main.go`](examples/simple/main.go)** - Statik BaseURL konfigürasyonu ile tam ürün mağazası API'si
  - **[`examples/simple/quicknode.go`](examples/simple/quicknode.go)** - Quicknode proxy ortamları için dinamik BaseURL konfigürasyonu  
  - **[`examples/simple/ragflow.go`](examples/simple/ragflow.go)** - RAGFlow dağıtım senaryoları için dinamik BaseURL konfigürasyonu

  ### Proxy Senaryoları için Dinamik BaseURL

  Her kullanıcı/dağıtımın farklı bir endpoint'e sahip olduğu ortamlarda (Quicknode veya RAGFlow gibi), dinamik BaseURL çözünürlüğünü yapılandırabilirsiniz:

  ```go
  // Quicknode örneği - kullanıcıya özel endpoint'leri çözer
  mcp := server.New(r, &server.Config{
      Name: "Your API",
      Description: "API with dynamic Quicknode endpoints",
      // Statik BaseURL gerekmez!
  })

  resolver := server.NewQuicknodeResolver("http://localhost:8080")
  mcp.SetExecuteToolFunc(func(operationID string, parameters map[string]interface{}) (interface{}, error) {
      return mcp.ExecuteToolWithResolver(operationID, parameters, resolver)
  })
  ```

  **Desteklenen Ortam Değişkenleri:**
  - **Quicknode**: `QUICKNODE_USER_ENDPOINT`, `USER_ENDPOINT`, `HOST`
  - **RAGFlow**: `RAGFLOW_ENDPOINT`, `RAGFLOW_WORKFLOW_URL`, `RAGFLOW_BASE_URL` + `WORKFLOW_ID`

  Bu, başlangıçta statik BaseURL konfigürasyonunun ihtiyacını ortadan kaldırır, çok kiracılı proxy ortamları için mükemmeldir!

  ### Streamable HTTP Taşıması (yatay ölçeklendirme)

  Varsayılan olarak, Gin-MCP **SSE transport**'unu (MCP spec 2024-11-05) kullanır, bu da kalıcı bir GET bağlantısının sonraki POST istekleri ile **aynı pod**'a yönlendirilmesi gerektirir. Bu, load balancer'ları oturum yakınlığı (sticky sessions) kullanmaya zorlar, bu da yatay autoscaling ile uyumsuz ve birçok yönetilen load balancer tarafından desteklenmez (örn. GCP, AWS ALB).

  **Streamable HTTP transport**'u (MCP spec 2025-03-26) bunu çözer: her POST JSON-RPC yanıtını doğrudan HTTP body'sine döndürür. Önceki GET bağlantısı veya pod yakınlığı gerekli değildir.

  ```go
  mcp := server.New(r, &server.Config{
      Name:          "My API",
      BaseURL:       "https://api.example.com",
      TransportType: server.TransportTypeStreamableHTTP,
  })
  mcp.Mount("/mcp")
  ```

  MCP istemcileri tek bir `POST /mcp` ile bağlanırlar — önceki GET gerekmez.

  #### Origin doğrulaması (DNS rebinding koruması)

  [MCP spec 2025-03-26 §Security](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#security-considerations) uyarınca, sunucular `Origin` başlığını doğrulamalıdır. `AllowedOrigins` kullanarak tarayıcı kaynağındaki istekleri kısıtlayın:

  ```go
  mcp := server.New(r, &server.Config{
      Name:          "My API",
      BaseURL:       "https://api.example.com",
      TransportType: server.TransportTypeStreamableHTTP,
      // Sadece bu tarayıcı kaynağından isteklere izin ver.
      // Kimlik doğrulama zaten yetkisiz erişimi engellediğinde atlanız (veya nil olarak bırakınız).
      AllowedOrigins: []string{"https://app.example.com"},
  })
  ```

  - Listede olmayan bir `Origin` başlığına sahip istekler → `403 Forbidden`.
  - `Origin` başlığı olmayan istekler (sunucu-sunucu arası: `curl`, Node.js vb.) → her zaman izin verilir.
  - Boş / nil `AllowedOrigins` → tüm kaynaklara izin verilir (Bearer token gerekli olduğunda uygun).

  ### Authorization Header İletimi

  Gin endpoint'leriniz JWT Bearer token'ları tarafından korunuyorsa, istemcinin `Authorization` başlığını her dahili tool-execution HTTP çağrısına iletebilirsiniz:

  ```go
  mcp := server.New(r, &server.Config{
      Name:               "My API",
      BaseURL:            "https://api.example.com",
      ForwardAuthHeaders: true,
  })
  mcp.Mount("/mcp")
  ```

  - **SSE transport**: başlık SSE bağlantı zamanında bir kez yakalanır ve o bağlantı üzerinde tüm sonraki tool çağrıları için yeniden kullanılır.
  - **Streamable HTTP transport**: başlık POST isteği başına yakalanır (her çağrı bağımsızdır).
  - Varsayılan: `false` (devre dışı, geriye uyumluluk için).

  ## MCP İstemcilerini Bağlama

  Gin-MCP ile Gin uygulamanız çalıştığında:

  1.  Uygulamanızı başlatın.
  2.  MCP istemcinizde, MCP server'ını monte ettiğiniz URL'yi sağlayın (örn. `http://localhost:8080/mcp`):
      - **SSE transport (varsayılan)**: SSE endpoint'i olarak bağlanın (aynı yola GET sonra POST).
      - **Streamable HTTP transport**: düz HTTP endpoint'i olarak bağlanın (sadece POST).
      - **Cursor**: Ayarlar → MCP → Sunucu Ekle
      - **Claude Desktop**: MCP yapılandırma dosyasına ekle
      - **Continue**: VS Code ayarlarında yapılandır
      - **Zed**: MCP ayarlarına ekle
  3.  İstemci bağlanacak ve mevcut API tool'larını otomatik olarak keşfedecek.

  ## Katkı Sağlama

  Katkılar hoş geldinir! Lütfen issues veya Pull Requests göndermekten çekinmeyin.
---

# Gin-MCP: Zero-Config Gin to MCP Bridge

[![Go Reference](https://pkg.go.dev/badge/github.com/ckanthony/gin-mcp.svg)](https://pkg.go.dev/github.com/ckanthony/gin-mcp)
[![CI](https://github.com/ckanthony/gin-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/ckanthony/gin-mcp/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ckanthony/gin-mcp/branch/main/graph/badge.svg)](https://codecov.io/gh/ckanthony/gin-mcp)
![](https://badge.mcpx.dev?type=dev 'MCP Dev')

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ckanthony/gin-mcp)](https://archestra.ai/mcp-catalog/ckanthony__gin-mcp)

<table border="0">
  <tr>
    <td valign="top">
      <strong>Enable MCP features for any Gin API with a line of code.</strong>
      <br><br>
      Gin-MCP is an <strong>opinionated, zero-configuration</strong> library that automatically exposes your existing Gin endpoints as <a href="https://modelcontextprotocol.io/introduction">Model Context Protocol (MCP)</a> tools, making them instantly usable by MCP-compatible clients like <a href="https://cursor.sh/">Cursor</a>, <a href="https://claude.ai/desktop">Claude Desktop</a>, <a href="https://continue.dev/">Continue</a>, <a href="https://zed.dev/">Zed</a>, and other MCP-enabled tools.
      <br><br>
      Our philosophy is simple: <strong>minimal setup, maximum productivity</strong>. Just plug Gin-MCP into your Gin application, and it handles the rest.
    </td>
    <td valign="top" align="right" width="200">
      
    </td>
  </tr>
</table>

## Why Gin-MCP?

-   **Effortless Integration:** Connect your Gin API to MCP clients without writing tedious boilerplate code.
-   **Zero Configuration (by default):** Get started instantly. Gin-MCP automatically discovers routes and infers schemas.
-   **Developer Productivity:** Spend less time configuring tools and more time building features.
-   **Flexibility:** While zero-config is the default, customize schemas and endpoint exposure when needed.
-   **Existing API:** Works with your existing Gin API - no need to change any code.

## Demo

![gin-mcp-example](https://github.com/user-attachments/assets/ad6948ce-ed11-400b-8e96-9b020e51df78)

## Features

-   **Automatic Discovery:** Intelligently finds all registered Gin routes.
-   **Schema Inference:** Automatically generates MCP tool schemas from route parameters and request/response types (where possible).
-   **Direct Gin Integration:** Mounts the MCP server directly onto your existing `gin.Engine`.
-   **Parameter Preservation:** Accurately reflects your Gin route parameters (path, query) in the generated MCP tools.
-   **Dynamic BaseURL Resolution:** Support for proxy environments (Quicknode, RAGFlow) with per-user/deployment endpoints.
-   **Customizable Schemas:** Manually register schemas for specific routes using `RegisterSchema` for fine-grained control.
-   **Selective Exposure:** Filter which endpoints are exposed using operation IDs or tags.
-   **Flexible Deployment:** Mount the MCP server within the same Gin app or deploy it separately.
-   **Streamable HTTP Transport:** Opt in to MCP spec 2025-03-26 for stateless, load-balancer-friendly deployments with no session affinity required.
-   **Authorization Header Forwarding:** Automatically forward the client's `Authorization` header to every internal tool-execution call, enabling MCP access to JWT-protected APIs.

## Installation

```bash
go get github.com/ckanthony/gin-mcp
```

## Basic Usage: Instant MCP Server

Get your MCP server running in minutes with minimal code:

```go
package main

import (
	"net/http"

	server "github.com/ckanthony/gin-mcp/"
	"github.com/gin-gonic/gin"
)

func main() {
	// 1. Create your Gin engine
	r := gin.Default()

	// 2. Define your API routes (Gin-MCP will discover these)
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "pong"})
	})

	r.GET("/users/:id", func(c *gin.Context) {
		// Example handler...
		userID := c.Param("id")
		c.JSON(http.StatusOK, gin.H{"user_id": userID, "status": "fetched"})
	})

	// 3. Create and configure the MCP server
	//    Provide essential details for the MCP client.
	mcp := server.New(r, &server.Config{
		Name:        "My Simple API",
		Description: "An example API automatically exposed via MCP.",
		// BaseURL is crucial! It tells MCP clients where to send requests.
		BaseURL: "http://localhost:8080",
	})

	// 4. Mount the MCP server endpoint
	mcp.Mount("/mcp") // MCP clients will connect here

	// 5. Run your Gin server
	r.Run(":8080") // Gin server runs as usual
}

```

That's it! Your MCP tools are now available at `http://localhost:8080/mcp`. Gin-MCP automatically created tools for `/ping` and `/users/:id`.

> **Note on `BaseURL`**: Always provide an explicit `BaseURL`. This tells the MCP server the correct address to forward API requests to when a tool is executed by the client. Without it, automatic detection might fail, especially in environments with proxies or different internal/external URLs.

## Advanced Usage

While Gin-MCP strives for zero configuration, you can customize its behavior.

### Annotating Handlers with Comments

Gin-MCP automatically extracts metadata from handler function comments to generate rich tool descriptions. Use these annotations to make your MCP tools more discoverable and easier to use:

```go
// listProducts retrieves a paginated list of products
// @summary List all products
// @description Returns a paginated list of products with optional filtering by price, tags, and availability
// @param page Page number for pagination (default: 1)
// @param limit Number of items per page (default: 10, max: 100)
// @param minPrice Minimum price filter
// @param tag Filter products by tag
// @tags public catalog
func listProducts(c *gin.Context) {
    // Handler implementation...
}
```

**Supported Annotations:**

-   **`@summary`** - Brief one-line description that becomes the tool's primary description
-   **`@description`** - Additional detailed explanation appended to the summary
-   **`@param <name> <text>`** - Attaches descriptive text to specific input parameters in the generated schema
-   **`@tags`** - Space or comma-separated tags used for filtering tools (see "Filtering Exposed Endpoints" below)
-   **`@operationId <id>`** - Custom operation ID for the tool (overrides the default `METHOD_path` naming scheme). Must be unique across all routes; duplicates will be skipped (first declaration wins) with a warning logged.

All annotations are optional, but using them makes your API tools much more user-friendly in MCP clients like Claude Desktop and Cursor.

**Custom Operation IDs:**

By default, Gin-MCP generates operation IDs using the format `METHOD_path` (e.g., `GET_users_id`). For routes with very long paths, you can use `@operationId` to specify a shorter, more manageable name:

```go
// getUserProfile retrieves a user's profile with extended metadata
// @summary Get user profile
// @operationId getUserProfile
// @param id User identifier
func getUserProfile(c *gin.Context) {
    // Instead of the default "GET_api_v2_users_userId_profile_extended"
    // this tool will be named "getUserProfile"
}
```

**Important:** Operation IDs must be unique. If two handlers use the same `@operationId`, the duplicate will be skipped entirely (first declaration wins), and a warning will always be logged. This ensures consistency between the tool list and operations map.

### Fine-Grained Schema Control with `RegisterSchema`

Sometimes, automatic schema inference isn't enough. `RegisterSchema` allows you to explicitly define schemas for query parameters or request bodies for specific routes. This is useful when:

-   You use complex structs for query parameters (`ShouldBindQuery`).
-   You want to define distinct schemas for request bodies (e.g., for POST/PUT).
-   Automatic inference doesn't capture specific constraints (enums, descriptions, etc.) that you want exposed in the MCP tool definition.

```go
package main

import (
	// ... other imports
	"github.com/ckanthony/gin-mcp/pkg/server"
	"github.com/gin-gonic/gin"
)

// Example struct for query parameters
type ListProductsParams struct {
	Page  int    `form:"page,default=1" json:"page,omitempty" jsonschema:"description=Page number,minimum=1"`
	Limit int    `form:"limit,default=10" json:"limit,omitempty" jsonschema:"description=Items per page,maximum=100"`
	Tag   string `form:"tag" json:"tag,omitempty" jsonschema:"description=Filter by tag"`
}

// Example struct for POST request body
type CreateProductRequest struct {
	Name  string  `json:"name" jsonschema:"required,description=Product name"`
	Price float64 `json:"price" jsonschema:"required,minimum=0,description=Product price"`
}

func main() {
	r := gin.Default()

	// --- Define Routes ---
	r.GET("/products", func(c *gin.Context) { /* ... handler ... */ })
	r.POST("/products", func(c *gin.Context) { /* ... handler ... */ })
	r.PUT("/products/:id", func(c *gin.Context) { /* ... handler ... */ })


	// --- Configure MCP Server ---
	mcp := server.New(r, &server.Config{
		Name:        "Product API",
		Description: "API for managing products.",
		BaseURL:     "http://localhost:8080",
	})

	// --- Register Schemas ---
	// Register ListProductsParams as the query schema for GET /products
	mcp.RegisterSchema("GET", "/products", ListProductsParams{}, nil)

	// Register CreateProductRequest as the request body schema for POST /products
	mcp.RegisterSchema("POST", "/products", nil, CreateProductRequest{})

	// You can register schemas for other methods/routes as needed
	// e.g., mcp.RegisterSchema("PUT", "/products/:id", nil, UpdateProductRequest{})

	mcp.Mount("/mcp")
	r.Run(":8080")
}
```

**Explanation:**

-   `mcp.RegisterSchema(method, path, querySchema, bodySchema)`
-   `method`: HTTP method (e.g., "GET", "POST").
-   `path`: Gin route path (e.g., "/products", "/products/:id").
-   `querySchema`: An instance of the struct used for query parameters (or `nil` if none). Gin-MCP uses reflection and `jsonschema` tags to generate the schema.
-   `bodySchema`: An instance of the struct used for the request body (or `nil` if none).

### Filtering Exposed Endpoints

Control which Gin endpoints become MCP tools using operation IDs or tags. Tags come from the `@tags` annotation in your handler comments (see "Annotating Handlers" above).

#### Tag-Based Filtering

Tags are specified in handler function comments using the `@tags` annotation. You can specify tags separated by spaces, commas, or both:

```go
// listUsers handles user listing
// @summary List all users
// @tags public users
func listUsers(c *gin.Context) {
    // Implementation...
}

// deleteUser handles user deletion
// @summary Delete a user
// @tags admin, internal
func deleteUser(c *gin.Context) {
    // Implementation...
}
```

#### Filtering Configuration

```go
// Only include specific operations by their Operation ID
mcp := server.New(r, &server.Config{
    // ... other config ...
    IncludeOperations: []string{"GET_users", "POST_users"},
})

// Exclude specific operations
mcp := server.New(r, &server.Config{
    // ... other config ...
    ExcludeOperations: []string{"DELETE_users_id"}, // Don't expose delete tool
})

// Only include operations tagged with "public" or "users"
// A tool is included if it has ANY of the specified tags
mcp := server.New(r, &server.Config{
    // ... other config ...
    IncludeTags: []string{"public", "users"},
})

// Exclude operations tagged with "admin" or "internal"
// A tool is excluded if it has ANY of the specified tags
mcp := server.New(r, &server.Config{
    // ... other config ...
    ExcludeTags: []string{"admin", "internal"},
})
```

**Filtering Rules:**

-   You can only use **one** inclusion filter (`IncludeOperations` **OR** `IncludeTags`).
    - If both are set, `IncludeOperations` takes precedence and a warning is logged.
-   You can only use **one** exclusion filter (`ExcludeOperations` **OR** `ExcludeTags`).
    - If both are set, `ExcludeOperations` takes precedence and a warning is logged.
-   You **can** combine an inclusion filter with an exclusion filter (e.g., include tag "public" but exclude operation "legacyPublicOp").
-   **Exclusion always wins**: If a tool matches both inclusion and exclusion filters, it will be excluded.
-   **Tag matching**: A tool is included/excluded if it has **any** of the specified tags (OR logic).

**Examples:**

```go
// Include all "public" endpoints but exclude those also tagged "internal"
mcp := server.New(r, &server.Config{
    IncludeTags: []string{"public"},
    ExcludeTags: []string{"internal"},
})

// Include specific operations but exclude admin endpoints
mcp := server.New(r, &server.Config{
    IncludeOperations: []string{"GET_users", "GET_products"},
    ExcludeTags:       []string{"admin"},  // This will be ignored (precedence rule)
})
```

### Customizing Schema Descriptions (Less Common)

For advanced control over how response schemas are described in the generated tools (often not needed):

```go
mcp := server.New(r, &server.Config{
    // ... other config ...
    DescribeAllResponses:    true, // Include *all* possible response schemas (e.g., 200, 404) in tool descriptions
    DescribeFullResponseSchema: true, // Include the full JSON schema object instead of just a reference
})
```

## Examples

See the [`examples`](examples) directory for complete, runnable examples demonstrating various features:

### Basic Usage Examples

- **[`examples/simple/main.go`](examples/simple/main.go)** - Complete product store API with static BaseURL configuration
- **[`examples/simple/quicknode.go`](examples/simple/quicknode.go)** - Dynamic BaseURL configuration for Quicknode proxy environments  
- **[`examples/simple/ragflow.go`](examples/simple/ragflow.go)** - Dynamic BaseURL configuration for RAGFlow deployment scenarios

### Dynamic BaseURL for Proxy Scenarios

For environments where each user/deployment has a different endpoint (like Quicknode or RAGFlow), you can configure dynamic BaseURL resolution:

```go
// Quicknode example - resolves user-specific endpoints
mcp := server.New(r, &server.Config{
    Name: "Your API",
    Description: "API with dynamic Quicknode endpoints",
    // No static BaseURL needed!
})

resolver := server.NewQuicknodeResolver("http://localhost:8080")
mcp.SetExecuteToolFunc(func(operationID string, parameters map[string]interface{}) (interface{}, error) {
    return mcp.ExecuteToolWithResolver(operationID, parameters, resolver)
})
```

**Environment Variables Supported:**
- **Quicknode**: `QUICKNODE_USER_ENDPOINT`, `USER_ENDPOINT`, `HOST`
- **RAGFlow**: `RAGFLOW_ENDPOINT`, `RAGFLOW_WORKFLOW_URL`, `RAGFLOW_BASE_URL` + `WORKFLOW_ID`

This eliminates the need for static BaseURL configuration at startup, perfect for multi-tenant proxy environments!

### Streamable HTTP Transport (horizontal scaling)

By default, Gin-MCP uses the **SSE transport** (MCP spec 2024-11-05), which requires a persistent GET connection to be routed to the **same pod** as subsequent POST requests. This forces load balancers to use session affinity (sticky sessions), which is incompatible with horizontal autoscaling and unsupported by many managed load balancers (e.g. GCP, AWS ALB).

The **Streamable HTTP transport** (MCP spec 2025-03-26) solves this: every POST returns the JSON-RPC response directly in the HTTP body. No prior GET connection or pod affinity is required.

```go
mcp := server.New(r, &server.Config{
    Name:          "My API",
    BaseURL:       "https://api.example.com",
    TransportType: server.TransportTypeStreamableHTTP,
})
mcp.Mount("/mcp")
```

MCP clients connect with a single `POST /mcp` — no prior GET needed.

#### Origin validation (DNS rebinding protection)

Per [MCP spec 2025-03-26 §Security](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#security-considerations), servers should validate the `Origin` header. Use `AllowedOrigins` to restrict browser-originated requests:

```go
mcp := server.New(r, &server.Config{
    Name:          "My API",
    BaseURL:       "https://api.example.com",
    TransportType: server.TransportTypeStreamableHTTP,
    // Only allow requests from this browser origin.
    // Omit (or leave nil) when authentication already prevents unauthorised access.
    AllowedOrigins: []string{"https://app.example.com"},
})
```

- Requests **with** an `Origin` header not in the list → `403 Forbidden`.
- Requests **without** an `Origin` header (server-to-server: `curl`, Node.js, etc.) → always allowed.
- Empty / nil `AllowedOrigins` → all origins permitted (suitable when a Bearer token is required).

### Authorization Header Forwarding

When your Gin endpoints are protected by JWT Bearer tokens, you can forward the client's `Authorization` header to every internal tool-execution HTTP call:

```go
mcp := server.New(r, &server.Config{
    Name:               "My API",
    BaseURL:            "https://api.example.com",
    ForwardAuthHeaders: true,
})
mcp.Mount("/mcp")
```

- **SSE transport**: the header is captured once at SSE connection time and reused for all subsequent tool calls on that connection.
- **Streamable HTTP transport**: the header is captured per POST request (each call is independent).
- Default: `false` (disabled, for backward compatibility).

## Connecting MCP Clients

Once your Gin application with Gin-MCP is running:

1.  Start your application.
2.  In your MCP client, provide the URL where you mounted the MCP server (e.g., `http://localhost:8080/mcp`):
    - **SSE transport (default)**: connect as an SSE endpoint (GET then POST to the same path).
    - **Streamable HTTP transport**: connect as a plain HTTP endpoint (POST only).
    - **Cursor**: Settings → MCP → Add Server
    - **Claude Desktop**: Add to MCP configuration file
    - **Continue**: Configure in VS Code settings
    - **Zed**: Add to MCP settings
3.  The client will connect and automatically discover the available API tools.

## Contributing

Contributions are welcome! Please feel free to submit issues or Pull Requests.
