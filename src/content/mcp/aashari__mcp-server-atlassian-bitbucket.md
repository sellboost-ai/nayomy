---
name: "aashari/mcp-server-atlassian-bitbucket"
description: "Atlassian Bitbucket Cloud integration. Enables AI systems to interact with repositories, pull requests, workspaces, and code in real time."
category: "Developer Tools"
repo: "aashari/mcp-server-atlassian-bitbucket"
stars: 149
url: "https://github.com/aashari/mcp-server-atlassian-bitbucket"
body_length: 25314
language: "TypeScript"
body_tr: |-
  # Bitbucket Depoları'nı AI'ye Bağlayın

  Bitbucket ile çalışma şeklinizi dönüştürün - Claude, Cursor AI ve diğer AI asistanlarını doğrudan depoları, pull request'leri ve kodunuza bağlayın. Anında içgörü elde edin, kod incelemelerini otomatikleştirin ve geliştirme akışınızı hızlandırın.

  [![NPM Version](https://img.shields.io/npm/v/@aashari/mcp-server-atlassian-bitbucket)](https://www.npmjs.com/package/@aashari/mcp-server-atlassian-bitbucket)
  [![License](https://img.shields.io/npm/l/@aashari/mcp-server-atlassian-bitbucket)](https://github.com/aashari/mcp-server-atlassian-bitbucket/blob/main/LICENSE)

  ## Neler Yapabilirsiniz?

  - **AI'ye kod hakkında soru sorun**: "Ana depomdaki son commit nedir?"
  - **PR içgörüleri alın**: "İncelenmesi gereken tüm açık pull request'leri göster"
  - **Codebase'inizi arayın**: "Authentication fonksiyonunu kullanan tüm JavaScript dosyalarını bul"
  - **Kod değişikliklerini gözden geçirin**: "Feature branch'im ile main arasındaki farkları karşılaştır"
  - **Pull request'leri yönetin**: "Yeni-feature branch'i için bir PR oluştur"
  - **İş akışlarını otomatikleştirin**: "PR #123'e test sonuçlarını gösteren bir yorum ekle"

  ## Kimler İçin?

  - **Developers** - kod incelemesi ve depo yönetiminde AI desteği isteyenler
  - **Team Leads** - proje durumu ve pull request aktivitesi hakkında hızlı içgörü almak isteyenler
  - **DevOps Engineers** - depo iş akışlarını ve branch yönetimini otomatikleştirmek isteyenler
  - **Herkes** - Bitbucket'i doğal dille kullanmak isteyen kişiler

  ## Gereksinimler

  - **Node.js** 18.0.0 veya daha yüksek sürüm
  - **Bitbucket Cloud** hesabı (Bitbucket Server/Data Center değil)
  - **Kimlik doğrulama**: Scoped API Token (önerilen) veya App Password (eski)

  ## Hızlı Başlangıç

  2 dakika içinde başlayın:

  ### 1. Bitbucket Kimlik Bilgilerinizi Alın

  > **ÖNEMLİ**: Bitbucket App Passwords'lar kullanımdan kaldırılıyor ve **Haziran 2026**'da silinecektir. Yeni kurulumlar için **Scoped API Tokens** kullanmanızı öneriyoruz.

  #### Seçenek A: Scoped API Token (Önerilen - Gelecek-Proof)

  **Bitbucket app password'ları kullanımdan kaldırıyor**. Bunun yerine yeni scoped API token'larını kullanın:

  1. [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens) adresine gidin
  2. **"Create API token with scopes"** butonuna tıklayın
  3. Ürün olarak **"Bitbucket"** seçin
  4. Uygun scope'ları seçin:
     - **Sadece okunur erişim için**: `repository`, `workspace`
     - **Tam işlevsellik için**: `repository`, `workspace`, `pullrequest`
  5. Oluşturulan token'ı kopyalayın (`ATATT` ile başlayan)
  6. Kullanıcı adı olarak Atlassian e-postanızla kullanın

  #### Seçenek B: App Password (Eski - Kullanımdan Kaldırılacak)

  Bir Bitbucket App Password oluşturun (eski yöntem):
  1. [Bitbucket App Passwords](https://bitbucket.org/account/settings/app-passwords/) adresine gidin
  2. "Create app password" tıklayın
  3. "AI Assistant" gibi bir ad verin
  4. Şu izinleri seçin:
     - **Workspaces**: Read
     - **Repositories**: Read (AI'nin PR/yorum oluşturması istiyorsanız Write)
     - **Pull Requests**: Read (PR yönetimi için Write)

  ### 2. Hemen Deneyin

  ```bash
  # Kimlik bilgilerinizi ayarlayın (bir yöntemi seçin)

  # Yöntem 1: Scoped API Token (önerilen - gelecek-proof)
  export ATLASSIAN_USER_EMAIL="your.email@company.com"
  export ATLASSIAN_API_TOKEN="your_scoped_api_token"  # ATATT ile başlayan token

  # VEYA Yöntem 2: Eski App Password (Haziran 2026'da kullanımdan kaldırılacak)
  export ATLASSIAN_BITBUCKET_USERNAME="your_username"
  export ATLASSIAN_BITBUCKET_APP_PASSWORD="your_app_password"

  # Workspace'lerinizi listeleyin
  npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/workspaces"

  # Workspace'te depoları listeleyin
  npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/repositories/your-workspace"

  # Depo için pull request'leri alın
  npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/repositories/your-workspace/your-repo/pullrequests"

  # JMESPath filtreleme ile depo detaylarını alın
  npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/repositories/your-workspace/your-repo" --jq "{name: name, language: language}"
  ```

  ## AI Asistanlarına Bağlanın

  ### Claude Desktop Kullanıcıları İçin

  Bunu Claude konfigürasyon dosyanıza ekleyin (`~/.claude/claude_desktop_config.json`):

  **Seçenek 1: Scoped API Token (önerilen - gelecek-proof)**
  ```json
  {
    "mcpServers": {
      "bitbucket": {
        "command": "npx",
        "args": ["-y", "@aashari/mcp-server-atlassian-bitbucket"],
        "env": {
          "ATLASSIAN_USER_EMAIL": "your.email@company.com",
          "ATLASSIAN_API_TOKEN": "your_scoped_api_token"
        }
      }
    }
  }
  ```

  **Seçenek 2: Eski App Password (Haziran 2026'da kullanımdan kaldırılacak)**
  ```json
  {
    "mcpServers": {
      "bitbucket": {
        "command": "npx",
        "args": ["-y", "@aashari/mcp-server-atlassian-bitbucket"],
        "env": {
          "ATLASSIAN_BITBUCKET_USERNAME": "your_username",
          "ATLASSIAN_BITBUCKET_APP_PASSWORD": "your_app_password"
        }
      }
    }
  }
  ```

  Claude Desktop'u yeniden başlatın, status bar'da bitbucket server'ını göreceksiniz.

  ### Diğer AI Asistanları İçin

  Çoğu AI asistanı MCP'yi destekler. Aşağıdakilerden birini yapabilirsiniz:

  **Seçenek 1: npx kullanın (önerilen - her zaman en son sürüm):**
  AI asistanınızı şu komutu çalıştıracak şekilde yapılandırın: `npx -y @aashari/mcp-server-atlassian-bitbucket`

  **Seçenek 2: Global olarak yükleyin:**
  ```bash
  npm install -g @aashari/mcp-server-atlassian-bitbucket
  ```

  Ardından AI asistanınızı STDIO transport'u ile MCP server'ını kullanacak şekilde yapılandırın.

  **Desteklenen AI asistanları:**
  - Claude Desktop (resmi destek)
  - Cursor AI
  - Continue.dev
  - Cline
  - MCP uyumlu herhangi bir client

  ### Alternatif: Konfigürasyon Dosyası

  Sistem geneline yapılandırma için `~/.mcp/configs.json` oluşturun:

  **Seçenek 1: Scoped API Token (önerilen - gelecek-proof)**
  ```json
  {
    "bitbucket": {
      "environments": {
        "ATLASSIAN_USER_EMAIL": "your.email@company.com",
        "ATLASSIAN_API_TOKEN": "your_scoped_api_token",
        "BITBUCKET_DEFAULT_WORKSPACE": "your_main_workspace"
      }
    }
  }
  ```

  **Seçenek 2: Eski App Password (Haziran 2026'da kullanımdan kaldırılacak)**
  ```json
  {
    "bitbucket": {
      "environments": {
        "ATLASSIAN_BITBUCKET_USERNAME": "your_username",
        "ATLASSIAN_BITBUCKET_APP_PASSWORD": "your_app_password",
        "BITBUCKET_DEFAULT_WORKSPACE": "your_main_workspace"
      }
    }
  }
  ```

  **Alternatif konfigürasyon anahtarları:** Sistem ayrıca `"atlassian-bitbucket"`, `"@aashari/mcp-server-atlassian-bitbucket"` veya `"mcp-server-atlassian-bitbucket"` değerlerini `"bitbucket"` yerine kabul eder.

  ## Kullanılabilir Araçlar

  Bu MCP server, herhangi bir Bitbucket API endpoint'ine erişebilen 6 genel araç sağlar:

  | Araç | Açıklama | Parametreler |
  |------|----------|-------------|
  | `bb_get` | Herhangi bir Bitbucket API endpoint'ine GET (veri oku) | `path`, `queryParams?`, `jq?`, `outputFormat?` |
  | `bb_post` | Herhangi bir endpoint'e POST (kaynak oluştur) | `path`, `body`, `queryParams?`, `jq?`, `outputFormat?` |
  | `bb_put` | Herhangi bir endpoint'e PUT (kaynakları değiştir) | `path`, `body`, `queryParams?`, `jq?`, `outputFormat?` |
  | `bb_patch` | Herhangi bir endpoint'e PATCH (kısmi güncellemeler) | `path`, `body`, `queryParams?`, `jq?`, `outputFormat?` |
  | `bb_delete` | Herhangi bir endpoint'ten DELETE (kaynakları kaldır) | `path`, `queryParams?`, `jq?`, `outputFormat?` |
  | `bb_clone` | Depoyu yerel olarak klonla | `workspaceSlug?`, `repoSlug`, `targetPath` |

  ### Araç Parametreleri

  Tüm API araçları şu ortak parametreleri destekler:

  - **`path`** (gerekli): `/` ile başlayan API endpoint yolu (`/2.0` ön eki otomatik eklenir)
  - **`queryParams`** (isteğe bağlı): Query parametreleri için anahtar-değer çiftleri (ör. `{"pagelen": "25", "page": "2"}`)
  - **`jq`** (isteğe bağlı): Yanıtı filtrelemek/dönüştürmek için JMESPath ifadesi - **token maliyetini azaltmak için kesinlikle öneriliyor**
  - **`outputFormat`** (isteğe bağlı): `"toon"` (varsayılan, %30-60 daha az token) veya `"json"`
  - **`body`** (POST/PUT/PATCH için gerekli): JSON nesnesi olarak request body

  ### Yaygın API Yolları

  Tüm yollara otomatik olarak `/2.0` ön eki eklenir. Tam Bitbucket Cloud REST API 2.0 referansı: https://developer.atlassian.com/cloud/bitbucket/rest/

  **Workspace'ler & Depoları:**
  - `/workspaces` - Tüm workspace'leri listele
  - `/repositories/{workspace}` - Workspace'teki depoları listele
  - `/repositories/{workspace}/{repo}` - Depo detaylarını al
  - `/repositories/{workspace}/{repo}/refs/branches` - Branch'leri listele
  - `/repositories/{workspace}/{repo}/refs/branches/{branch_name}` - Branch'i al/sil
  - `/repositories/{workspace}/{repo}/commits` - Commit'leri listele
  - `/repositories/{workspace}/{repo}/commits/{commit}` - Commit detaylarını al
  - `/repositories/{workspace}/{repo}/src/{commit}/{filepath}` - Dosya içeriğini al

  **Pull Request'ler:**
  - `/repositories/{workspace}/{repo}/pullrequests` - PR'leri listele (GET) veya PR oluştur (POST)
  - `/repositories/{workspace}/{repo}/pullrequests/{id}` - PR'yi al/güncelle/sil
  - `/repositories/{workspace}/{repo}/pullrequests/{id}/diff` - PR diff'ini al
  - `/repositories/{workspace}/{repo}/pullrequests/{id}/comments` - PR yorumlarını listele/ekle
  - `/repositories/{workspace}/{repo}/pullrequests/{id}/approve` - PR'yi onayla (POST) veya onayı kaldır (DELETE)
  - `/repositories/{workspace}/{repo}/pullrequests/{id}/request-changes` - Değişiklik talep et (POST)
  - `/repositories/{workspace}/{repo}/pullrequests/{id}/merge` - PR'yi merge et (POST)
  - `/repositories/{workspace}/{repo}/pullrequests/{id}/decline` - PR'yi reddet (POST)

  **Karşılaştırmalar:**
  - `/repositories/{workspace}/{repo}/diff/{source}..{destination}` - Branch'leri/commit'leri karşılaştır

  **Diğer Kaynaklar:**
  - `/repositories/{workspace}/{repo}/issues` - Issue'ları listele/yönet
  - `/repositories/{workspace}/{repo}/downloads` - İndirmeleleri listele/yönet
  - `/repositories/{workspace}/{repo}/pipelines` - Bitbucket Pipelines'ı erişle
  - `/repositories/{workspace}/{repo}/deployments` - Deployment'ları görüntüle

  ### TOON Çıktı Formatı

  **TOON Nedir?** Token-Oriented Object Notation, LLM'ler için iyileştirilmiş ve JSON'a kıyasla %30-60 token tüketimini azaltan bir formattır. Tabular array'ler ve minimal sözdizimi kullanırken tüm verileri korur.

  **Varsayılan davranış:** Tüm araçlar varsayılan olarak TOON formatını döndürür. Gerekirse `outputFormat: "json"` ile bunu geçersiz kılabilirsiniz.

  **Örnek karşılaştırma:**
  ```
  JSON (verbose):
  {
    "values": [
      {"name": "repo1", "slug": "repo-1"},
      {"name": "repo2", "slug": "repo-2"}
    ]
  }

  TOON (efficient):
  values:
    name  | slug
    repo1 | repo-1
    repo2 | repo-2
  ```

  Daha fazla bilgi: https://github.com/toon-format/toon

  ### JMESPath Filtreleme

  Tüm araçlar, belirli verileri ayıklamak ve token maliyetini daha da azaltmak için isteğe bağlı JMESPath (`jq`) filtrelemesini destekler:

  **Önemli:** Yanıtları filtrelemek için her zaman `jq` kullanın! Filtrelenmemiş API yanıtları çok büyük olabilir ve token açısından pahalıdır.

  ```bash
  # Sadece depo adlarını al
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/repositories/myworkspace" \
    --jq "values[].name"

  # PR başlıklarını ve durumlarını al (özel nesne şekli)
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/repositories/myworkspace/myrepo/pullrequests" \
    --jq "values[].{title: title, state: state, author: author.display_name}"

  # Sadece ilk sonucu al
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/repositories/myworkspace" \
    --jq "values[0]"

  # Bir öğe ile şema keşfet, sonra filtrele
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/workspaces" \
    --query-params '{"pagelen": "1"}'
  ```

  **Yaygın JMESPath örüntüleri:**
  - `values[*].fieldName` - Tüm öğelerden tek bir alan ayıkla
  - `values[*].{key1: field1, key2: field2}` - Özel nesne şekli oluştur
  - `values[0]` - İlk öğeyi al
  - `values[:5]` - İlk 5 öğeyi al
  - `values[?state=='OPEN']` - Şarta göre filtrele

  Tam JMESPath referansı: https://jmespath.org

  ## Gerçek Dünya Örnekleri

  ### Depoları Keşfedin

  AI asistanınıza şunu sorun:
  - *"Ana workspace'imdeki tüm depoları listele"*
  - *"Backend-api deposu hakkında detayları göster"*
  - *"Feature-auth branch'inin commit geçmişi nedir?"*
  - *"Main branch'ten src/config.js dosyasının içeriğini al"*

  ### Pull Request'leri Yönetin

  AI asistanınıza şunu sorun:
  - *"İncelenmesi gereken tüm açık pull request'leri göster"*
  - *"Pull request #42 hakkında detayları al, kod değişikliklerini de dahil et"*
  - *"Feature-login'den main branch'e bir pull request oluştur"*
  - *"PR #15'e testlerin geçtiğini söyleyen bir yorum ekle"*
  - *"Pull request #33'ü onayla"*

  ### Branch'ler ve Kod ile Çalış

  AI asistanınıza şunu sorun:
  - *"Feature branch'imi main ile karşılaştır"*
  - *"User-service deposundaki tüm branch'leri listele"*
  - *"abc123 ile def456 commit'leri arasındaki farkları göster"*

  ## Gelişmiş Kullanım

  ### Maliyet Optimizasyonu İpuçları

  1. **JMESPath filtrelemesini her zaman kullanın** - Token kullanımını en aza indirmek için yalnızca gerekli alanları ayıklayın
  2. **Pagination'u akıllıca kullanın** - `pagelen` query parametresini sonuçları sınırlamak için ayarlayın (ör. `{"pagelen": "10"}`)
  3. **Şemayı önce keşfedin** - Sunucu tarafında filtreleme olmadan bir öğeyi getirerek mevcut alanları görün, ardından sonraki çağrıları filtreleyin
  4. **TOON formatını kullanın** - Varsayılan TOON formatı JSON'a kıyasla %30-60 token tasarrufu sağlar
  5. **Filtreleme için Query parametreleri** - Sonuçlar döndürülmeden önce sunucu tarafında filtreleme yapmak için Bitbucket'ın `q` parametresini kullanın

  ### Query Parameter Örnekleri

  ```bash
  # PR'leri duruma göre filtrele
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/repositories/workspace/repo/pullrequests" \
    --query-params '{"state": "OPEN", "pagelen": "5"}' \
    --jq "values[*].{id: id, title: title}"

  # PR'leri başlığa göre ara
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/repositories/workspace/repo/pullrequests" \
    --query-params '{"q": "title~\"bug\""}' \
    --jq "values[*].{id: id, title: title}"

  # Depoları role göre filtrele
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/repositories/workspace" \
    --query-params '{"role": "owner", "pagelen": "10"}'

  # Güncelleme tarihine göre sırala
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/repositories/workspace/repo/pullrequests" \
    --query-params '{"sort": "-updated_on"}' \
    --jq "values[*].{id: id, title: title, updated: updated_on}"
  ```

  ### Büyük Yanıtlarla Çalışmak

  Büyük yükler döndüren API'lerle uğraşırken:

  1. **Sparse fieldset'leri kullanın** - `fields` query parametresini ekleyin: `{"fields": "values.name,values.slug"}`
  2. **Sonuçları sayfalandırın** - `pagelen` ve `page` parametrelerini kullanın
  3. **Kaynakta filtreleyin** - Sunucu tarafında filtreleme yapmak için Bitbucket'ın `q` parametresini kullanın
  4. **JQ ile post-işlem yapın** - JMESPath ile yanıtı daha fazla filtreleyin

  Tüm teknikleri birleştiren örnek:
  ```bash
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/repositories/workspace/repo/pullrequests" \
    --query-params '{"state": "OPEN", "pagelen": "10", "fields": "values.id,values.title,values.state"}' \
    --jq "values[*].{id: id, title: title}"
  ```

  ### AI Etkileşimleri İçin En İyi Uygulamalar

  1. **Yolları belirli olarak kullanın** - Tam workspace/repo slug'ları kullanın (büyük/küçük harfe duyarlı)
  2. **CLI'de önce test edin** - MCP bağlamında kullanmadan önce yolları ve kimlik doğrulamayı doğrulayın
  3. **Açıklayıcı JQ filtreleri kullanın** - AI'nin daha iyi anlaması için anlamlı alan adlarını ayıklayın
  4. **Sorun giderme için DEBUG'u etkinleştirin** - Bitbucket API'sine tam olarak ne gönderildiğini görün
  5. **API limitlerini kontrol edin** - Bitbucket Cloud'un hız limitleri vardır; çağrıları azaltmak için filtreleme kullanın

  ## CLI Komutları

  CLI, MCP araçlarını doğrudan terminal erişimi için yansıtır. Tüm komutlar JSON çıkışı döndürür (TOON değil - TOON yalnızca MCP modunda geçerlidir).

  ### Kullanılabilir Komutlar

  ```bash
  # Yardım al
  npx -y @aashari/mcp-server-atlassian-bitbucket --help

  # GET isteği
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/workspaces" \
    --jq "values[*].{name: name, slug: slug}"

  # Query parametreleri ile GET
  npx -y @aashari/mcp-server-atlassian-bitbucket get \
    --path "/repositories/myworkspace/myrepo/pullrequests" \
    --query-params '{"state": "OPEN", "pagelen": "10"}' \
    --jq "values[*].{id: id, title: title}"

  # POST isteği (PR oluştur)
  npx -y @aashari/mcp-server-atlassian-bitbucket post \
    --path "/repositories/myworkspace/myrepo/pullrequests" \
    --body '{"title": "My PR", "source": {"branch": {"name": "feature"}}, "destination": {"branch": {"name": "main"}}}' \
    --jq "{id: id, title: title}"

  # Query parametreleri ile POST
  npx -y @aashari/mcp-server-atlassian-bitbucket post \
    --path "/repositories/myworkspace/myrepo/pullrequests/42/comments" \
    --body '{"content": {"raw": "Looks good!"}}' \
    --query-params '{"fields": "id,content"}' \
    --jq "{id: id, content: content.raw}"

  # PUT isteği (kaynağı değiştir)
  npx -y @aashari/mcp-server-atlassian-bitbucket put \
    --path "/repositories/myworkspace/myrepo" \
    --body '{"description": "Updated description", "is_private": true}'

  # PATCH isteği (kısmi güncelleme)
  npx -y @aashari/mcp-server-atlassian-bitbucket patch \
    --path "/repositories/myworkspace/myrepo/pullrequests/123" \
    --body '{"title": "Updated PR title"}'

  # DELETE isteği
  npx -y @aashari/mcp-server-atlassian-bitbucket delete \
    --path "/repositories/myworkspace/myrepo/refs/branches/old-branch"

  # Depoyu klonla
  npx -y @aashari/mcp-server-atlassian-bitbucket clone \
    --workspace-slug myworkspace \
    --repo-slug myrepo \
    --target-path /absolute/path/to/parent/directory
  ```

  ### CLI Seçenekleri

  **`get` ve `delete` komutları için:**
  - `-p, --path <path>` (gerekli) - API endpoint yolu
  - `-q, --query-params <json>` (isteğe bağlı) - JSON string olarak Query parametreleri
  - `--jq <expression>` (isteğe bağlı) - JMESPath filtre ifadesi

  **`post`, `put` ve `patch` komutları için:**
  - `-p, --path <path>` (gerekli) - API endpoint yolu
  - `-b, --body <json>` (gerekli) - JSON string olarak Request body
  - `-q, --query-params <json>` (isteğe bağlı) - JSON string olarak Query parametreleri
  - `--jq <expression>` (isteğe bağlı) - JMESPath filtre ifadesi

  **`clone` komutu için:**
  - `--workspace-slug <slug>` (isteğe bağlı) - Workspace slug'ı (sağlanmazsa varsayılanı kullanır)
  - `--repo-slug <slug>` (gerekli) - Depo slug'ı
  - `--target-path <path>` (gerekli) - Deponun klonlanacağı üst dizine giden mutlak yol

  ## Hata Ayıklama

  ### Debug Modu Etkinleştirin

  Detaylı günlüğe kayıt görmek için `DEBUG` ortam değişkenini ayarlayın:

  ```bash
  # CLI testi için
  DEBUG=true npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/workspaces"

  # Claude Desktop için - config'e ekleyin
  {
    "mcpServers": {
      "bitbucket": {
        "command": "npx",
        "args": ["-y", "@aashari/mcp-server-atlassian-bitbucket"],
        "env": {
          "DEBUG": "true",
          "ATLASSIAN_USER_EMAIL": "...",
          "ATLASSIAN_API_TOKEN": "..."
        }
      }
    }
  }
  ```

  **Log dosyaları:** MCP modunda çalışırken, loglar `~/.mcp/data/@aashari-mcp-server-atlassian-bitbucket.[session-id].log` dosyasına yazılır

  ### HTTP Modu ile Test Edin

  İnteraktif hata ayıklama için server'ı HTTP modunda çalıştırın ve MCP Inspector'ı kullanın:

  ```bash
  # Kimlik bilgilerini önce ayarlayın
  export ATLASSIAN_USER_EMAIL="your.email@company.com"
  export ATLASSIAN_API_TOKEN="your_token"
  export DEBUG=true

  # MCP Inspector ile HTTP server başlatın
  npx -y @aashari/mcp-server-atlassian-bitbucket
  # Ardından başka bir terminal'de:
  PORT=3000 npm run mcp:inspect
  ```

  Bu, araçları test etmek ve request/response verilerini görmek için görsel bir arayüz açar.

  ### Yaygın Sorunlar

  **Server Claude Desktop'ta görünmüyor:**
  1. Config dosyası sözdizimini kontrol edin (geçerli JSON)
  2. Claude Desktop'u tamamen yen
---

# Connect AI to Your Bitbucket Repositories

Transform how you work with Bitbucket by connecting Claude, Cursor AI, and other AI assistants directly to your repositories, pull requests, and code. Get instant insights, automate code reviews, and streamline your development workflow.

[![NPM Version](https://img.shields.io/npm/v/@aashari/mcp-server-atlassian-bitbucket)](https://www.npmjs.com/package/@aashari/mcp-server-atlassian-bitbucket)
[![License](https://img.shields.io/npm/l/@aashari/mcp-server-atlassian-bitbucket)](https://github.com/aashari/mcp-server-atlassian-bitbucket/blob/main/LICENSE)

## What You Can Do

- **Ask AI about your code**: "What's the latest commit in my main repository?"
- **Get PR insights**: "Show me all open pull requests that need review"
- **Search your codebase**: "Find all JavaScript files that use the authentication function"
- **Review code changes**: "Compare the differences between my feature branch and main"
- **Manage pull requests**: "Create a PR for my new-feature branch"
- **Automate workflows**: "Add a comment to PR #123 with the test results"

## Perfect For

- **Developers** who want AI assistance with code reviews and repository management
- **Team Leads** needing quick insights into project status and pull request activity
- **DevOps Engineers** automating repository workflows and branch management
- **Anyone** who wants to interact with Bitbucket using natural language

## Requirements

- **Node.js** 18.0.0 or higher
- **Bitbucket Cloud** account (not Bitbucket Server/Data Center)
- **Authentication credentials**: Scoped API Token (recommended) or App Password (legacy)

## Quick Start

Get up and running in 2 minutes:

### 1. Get Your Bitbucket Credentials

> **IMPORTANT**: Bitbucket App Passwords are being deprecated and will be removed by **June 2026**. We recommend using **Scoped API Tokens** for new setups.

#### Option A: Scoped API Token (Recommended - Future-Proof)

**Bitbucket is deprecating app passwords**. Use the new scoped API tokens instead:

1. Go to [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Click **"Create API token with scopes"**
3. Select **"Bitbucket"** as the product
4. Choose the appropriate scopes:
   - **For read-only access**: `repository`, `workspace`
   - **For full functionality**: `repository`, `workspace`, `pullrequest`
5. Copy the generated token (starts with `ATATT`)
6. Use with your Atlassian email as the username

#### Option B: App Password (Legacy - Will be deprecated)

Generate a Bitbucket App Password (legacy method):
1. Go to [Bitbucket App Passwords](https://bitbucket.org/account/settings/app-passwords/)
2. Click "Create app password"
3. Give it a name like "AI Assistant"
4. Select these permissions:
   - **Workspaces**: Read
   - **Repositories**: Read (and Write if you want AI to create PRs/comments)
   - **Pull Requests**: Read (and Write for PR management)

### 2. Try It Instantly

```bash
# Set your credentials (choose one method)

# Method 1: Scoped API Token (recommended - future-proof)
export ATLASSIAN_USER_EMAIL="your.email@company.com"
export ATLASSIAN_API_TOKEN="your_scoped_api_token"  # Token starting with ATATT

# OR Method 2: Legacy App Password (will be deprecated June 2026)
export ATLASSIAN_BITBUCKET_USERNAME="your_username"
export ATLASSIAN_BITBUCKET_APP_PASSWORD="your_app_password"

# List your workspaces
npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/workspaces"

# List repositories in a workspace
npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/repositories/your-workspace"

# Get pull requests for a repository
npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/repositories/your-workspace/your-repo/pullrequests"

# Get repository details with JMESPath filtering
npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/repositories/your-workspace/your-repo" --jq "{name: name, language: language}"
```

## Connect to AI Assistants

### For Claude Desktop Users

Add this to your Claude configuration file (`~/.claude/claude_desktop_config.json`):

**Option 1: Scoped API Token (recommended - future-proof)**
```json
{
  "mcpServers": {
    "bitbucket": {
      "command": "npx",
      "args": ["-y", "@aashari/mcp-server-atlassian-bitbucket"],
      "env": {
        "ATLASSIAN_USER_EMAIL": "your.email@company.com",
        "ATLASSIAN_API_TOKEN": "your_scoped_api_token"
      }
    }
  }
}
```

**Option 2: Legacy App Password (will be deprecated June 2026)**
```json
{
  "mcpServers": {
    "bitbucket": {
      "command": "npx",
      "args": ["-y", "@aashari/mcp-server-atlassian-bitbucket"],
      "env": {
        "ATLASSIAN_BITBUCKET_USERNAME": "your_username",
        "ATLASSIAN_BITBUCKET_APP_PASSWORD": "your_app_password"
      }
    }
  }
}
```

Restart Claude Desktop, and you'll see the bitbucket server in the status bar.

### For Other AI Assistants

Most AI assistants support MCP. You can either:

**Option 1: Use npx (recommended - always latest version):**
Configure your AI assistant to run: `npx -y @aashari/mcp-server-atlassian-bitbucket`

**Option 2: Install globally:**
```bash
npm install -g @aashari/mcp-server-atlassian-bitbucket
```

Then configure your AI assistant to use the MCP server with STDIO transport.

**Supported AI assistants:**
- Claude Desktop (official support)
- Cursor AI
- Continue.dev
- Cline
- Any MCP-compatible client

### Alternative: Configuration File

Create `~/.mcp/configs.json` for system-wide configuration:

**Option 1: Scoped API Token (recommended - future-proof)**
```json
{
  "bitbucket": {
    "environments": {
      "ATLASSIAN_USER_EMAIL": "your.email@company.com",
      "ATLASSIAN_API_TOKEN": "your_scoped_api_token",
      "BITBUCKET_DEFAULT_WORKSPACE": "your_main_workspace"
    }
  }
}
```

**Option 2: Legacy App Password (will be deprecated June 2026)**
```json
{
  "bitbucket": {
    "environments": {
      "ATLASSIAN_BITBUCKET_USERNAME": "your_username",
      "ATLASSIAN_BITBUCKET_APP_PASSWORD": "your_app_password",
      "BITBUCKET_DEFAULT_WORKSPACE": "your_main_workspace"
    }
  }
}
```

**Alternative config keys:** The system also accepts `"atlassian-bitbucket"`, `"@aashari/mcp-server-atlassian-bitbucket"`, or `"mcp-server-atlassian-bitbucket"` instead of `"bitbucket"`.

## Available Tools

This MCP server provides 6 generic tools that can access any Bitbucket API endpoint:

| Tool | Description | Parameters |
|------|-------------|------------|
| `bb_get` | GET any Bitbucket API endpoint (read data) | `path`, `queryParams?`, `jq?`, `outputFormat?` |
| `bb_post` | POST to any endpoint (create resources) | `path`, `body`, `queryParams?`, `jq?`, `outputFormat?` |
| `bb_put` | PUT to any endpoint (replace resources) | `path`, `body`, `queryParams?`, `jq?`, `outputFormat?` |
| `bb_patch` | PATCH any endpoint (partial updates) | `path`, `body`, `queryParams?`, `jq?`, `outputFormat?` |
| `bb_delete` | DELETE any endpoint (remove resources) | `path`, `queryParams?`, `jq?`, `outputFormat?` |
| `bb_clone` | Clone a repository locally | `workspaceSlug?`, `repoSlug`, `targetPath` |

### Tool Parameters

All API tools support these common parameters:

- **`path`** (required): API endpoint path starting with `/` (the `/2.0` prefix is added automatically)
- **`queryParams`** (optional): Key-value pairs for query parameters (e.g., `{"pagelen": "25", "page": "2"}`)
- **`jq`** (optional): JMESPath expression to filter/transform the response - **highly recommended** to reduce token costs
- **`outputFormat`** (optional): `"toon"` (default, 30-60% fewer tokens) or `"json"`
- **`body`** (required for POST/PUT/PATCH): Request body as JSON object

### Common API Paths

All paths automatically have `/2.0` prepended. Full Bitbucket Cloud REST API 2.0 reference: https://developer.atlassian.com/cloud/bitbucket/rest/

**Workspaces & Repositories:**
- `/workspaces` - List all workspaces
- `/repositories/{workspace}` - List repos in workspace
- `/repositories/{workspace}/{repo}` - Get repo details
- `/repositories/{workspace}/{repo}/refs/branches` - List branches
- `/repositories/{workspace}/{repo}/refs/branches/{branch_name}` - Get/delete branch
- `/repositories/{workspace}/{repo}/commits` - List commits
- `/repositories/{workspace}/{repo}/commits/{commit}` - Get commit details
- `/repositories/{workspace}/{repo}/src/{commit}/{filepath}` - Get file content

**Pull Requests:**
- `/repositories/{workspace}/{repo}/pullrequests` - List PRs (GET) or create PR (POST)
- `/repositories/{workspace}/{repo}/pullrequests/{id}` - Get/update/delete PR
- `/repositories/{workspace}/{repo}/pullrequests/{id}/diff` - Get PR diff
- `/repositories/{workspace}/{repo}/pullrequests/{id}/comments` - List/add PR comments
- `/repositories/{workspace}/{repo}/pullrequests/{id}/approve` - Approve PR (POST) or remove approval (DELETE)
- `/repositories/{workspace}/{repo}/pullrequests/{id}/request-changes` - Request changes (POST)
- `/repositories/{workspace}/{repo}/pullrequests/{id}/merge` - Merge PR (POST)
- `/repositories/{workspace}/{repo}/pullrequests/{id}/decline` - Decline PR (POST)

**Comparisons:**
- `/repositories/{workspace}/{repo}/diff/{source}..{destination}` - Compare branches/commits

**Other Resources:**
- `/repositories/{workspace}/{repo}/issues` - List/manage issues
- `/repositories/{workspace}/{repo}/downloads` - List/manage downloads
- `/repositories/{workspace}/{repo}/pipelines` - Access Bitbucket Pipelines
- `/repositories/{workspace}/{repo}/deployments` - View deployments

### TOON Output Format

**What is TOON?** Token-Oriented Object Notation is a format optimized for LLMs that reduces token consumption by 30-60% compared to JSON. It uses tabular arrays and minimal syntax while preserving all data.

**Default behavior:** All tools return TOON format by default. You can override this with `outputFormat: "json"` if needed.

**Example comparison:**
```
JSON (verbose):
{
  "values": [
    {"name": "repo1", "slug": "repo-1"},
    {"name": "repo2", "slug": "repo-2"}
  ]
}

TOON (efficient):
values:
  name  | slug
  repo1 | repo-1
  repo2 | repo-2
```

Learn more: https://github.com/toon-format/toon

### JMESPath Filtering

All tools support optional JMESPath (`jq`) filtering to extract specific data and reduce token costs further:

**Important:** Always use `jq` to filter responses! Unfiltered API responses can be very large and expensive in terms of tokens.

```bash
# Get just repository names
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/repositories/myworkspace" \
  --jq "values[].name"

# Get PR titles and states (custom object shape)
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/repositories/myworkspace/myrepo/pullrequests" \
  --jq "values[].{title: title, state: state, author: author.display_name}"

# Get first result only
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/repositories/myworkspace" \
  --jq "values[0]"

# Explore schema with one item first, then filter
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/workspaces" \
  --query-params '{"pagelen": "1"}'
```

**Common JMESPath patterns:**
- `values[*].fieldName` - Extract single field from all items
- `values[*].{key1: field1, key2: field2}` - Create custom object shape
- `values[0]` - Get first item only
- `values[:5]` - Get first 5 items
- `values[?state=='OPEN']` - Filter by condition

Full JMESPath reference: https://jmespath.org

## Real-World Examples

### Explore Your Repositories

Ask your AI assistant:
- *"List all repositories in my main workspace"*
- *"Show me details about the backend-api repository"*
- *"What's the commit history for the feature-auth branch?"*
- *"Get the content of src/config.js from the main branch"*

### Manage Pull Requests

Ask your AI assistant:
- *"Show me all open pull requests that need review"*
- *"Get details about pull request #42 including the code changes"*
- *"Create a pull request from feature-login to main branch"*
- *"Add a comment to PR #15 saying the tests passed"*
- *"Approve pull request #33"*

### Work with Branches and Code

Ask your AI assistant:
- *"Compare my feature branch with the main branch"*
- *"List all branches in the user-service repository"*
- *"Show me the differences between commits abc123 and def456"*

## Advanced Usage

### Cost Optimization Tips

1. **Always use JMESPath filtering** - Extract only needed fields to minimize token usage
2. **Use pagination wisely** - Set `pagelen` query parameter to limit results (e.g., `{"pagelen": "10"}`)
3. **Explore schema first** - Fetch one item without filters to see available fields, then filter subsequent calls
4. **Leverage TOON format** - Default TOON format saves 30-60% tokens vs JSON
5. **Query parameters for filtering** - Use Bitbucket's `q` parameter for server-side filtering before results are returned

### Query Parameter Examples

```bash
# Filter PRs by state
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/repositories/workspace/repo/pullrequests" \
  --query-params '{"state": "OPEN", "pagelen": "5"}' \
  --jq "values[*].{id: id, title: title}"

# Search PRs by title
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/repositories/workspace/repo/pullrequests" \
  --query-params '{"q": "title~\"bug\""}' \
  --jq "values[*].{id: id, title: title}"

# Filter repositories by role
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/repositories/workspace" \
  --query-params '{"role": "owner", "pagelen": "10"}'

# Sort by updated date
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/repositories/workspace/repo/pullrequests" \
  --query-params '{"sort": "-updated_on"}' \
  --jq "values[*].{id: id, title: title, updated: updated_on}"
```

### Working with Large Responses

When dealing with APIs that return large payloads:

1. **Use sparse fieldsets** - Add `fields` query parameter: `{"fields": "values.name,values.slug"}`
2. **Paginate results** - Use `pagelen` and `page` parameters
3. **Filter at the source** - Use Bitbucket's `q` parameter for server-side filtering
4. **Post-process with JQ** - Further filter the response with JMESPath

Example combining all techniques:
```bash
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/repositories/workspace/repo/pullrequests" \
  --query-params '{"state": "OPEN", "pagelen": "10", "fields": "values.id,values.title,values.state"}' \
  --jq "values[*].{id: id, title: title}"
```

### Best Practices for AI Interactions

1. **Be specific with paths** - Use exact workspace/repo slugs (case-sensitive)
2. **Test with CLI first** - Verify paths and authentication before using in AI context
3. **Use descriptive JQ filters** - Extract meaningful field names for better AI understanding
4. **Enable DEBUG for troubleshooting** - See exactly what's being sent to Bitbucket API
5. **Check API limits** - Bitbucket Cloud has rate limits; use filtering to reduce calls

## CLI Commands

The CLI mirrors the MCP tools for direct terminal access. All commands return JSON output (not TOON - TOON is only for MCP mode).

### Available Commands

```bash
# Get help
npx -y @aashari/mcp-server-atlassian-bitbucket --help

# GET request
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/workspaces" \
  --jq "values[*].{name: name, slug: slug}"

# GET with query parameters
npx -y @aashari/mcp-server-atlassian-bitbucket get \
  --path "/repositories/myworkspace/myrepo/pullrequests" \
  --query-params '{"state": "OPEN", "pagelen": "10"}' \
  --jq "values[*].{id: id, title: title}"

# POST request (create a PR)
npx -y @aashari/mcp-server-atlassian-bitbucket post \
  --path "/repositories/myworkspace/myrepo/pullrequests" \
  --body '{"title": "My PR", "source": {"branch": {"name": "feature"}}, "destination": {"branch": {"name": "main"}}}' \
  --jq "{id: id, title: title}"

# POST with query parameters
npx -y @aashari/mcp-server-atlassian-bitbucket post \
  --path "/repositories/myworkspace/myrepo/pullrequests/42/comments" \
  --body '{"content": {"raw": "Looks good!"}}' \
  --query-params '{"fields": "id,content"}' \
  --jq "{id: id, content: content.raw}"

# PUT request (replace resource)
npx -y @aashari/mcp-server-atlassian-bitbucket put \
  --path "/repositories/myworkspace/myrepo" \
  --body '{"description": "Updated description", "is_private": true}'

# PATCH request (partial update)
npx -y @aashari/mcp-server-atlassian-bitbucket patch \
  --path "/repositories/myworkspace/myrepo/pullrequests/123" \
  --body '{"title": "Updated PR title"}'

# DELETE request
npx -y @aashari/mcp-server-atlassian-bitbucket delete \
  --path "/repositories/myworkspace/myrepo/refs/branches/old-branch"

# Clone repository
npx -y @aashari/mcp-server-atlassian-bitbucket clone \
  --workspace-slug myworkspace \
  --repo-slug myrepo \
  --target-path /absolute/path/to/parent/directory
```

### CLI Options

**For `get` and `delete` commands:**
- `-p, --path <path>` (required) - API endpoint path
- `-q, --query-params <json>` (optional) - Query parameters as JSON string
- `--jq <expression>` (optional) - JMESPath filter expression

**For `post`, `put`, and `patch` commands:**
- `-p, --path <path>` (required) - API endpoint path
- `-b, --body <json>` (required) - Request body as JSON string
- `-q, --query-params <json>` (optional) - Query parameters as JSON string
- `--jq <expression>` (optional) - JMESPath filter expression

**For `clone` command:**
- `--workspace-slug <slug>` (optional) - Workspace slug (uses default if not provided)
- `--repo-slug <slug>` (required) - Repository slug
- `--target-path <path>` (required) - Absolute path to parent directory where repo will be cloned

## Debugging

### Enable Debug Mode

Set the `DEBUG` environment variable to see detailed logging:

```bash
# For CLI testing
DEBUG=true npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/workspaces"

# For Claude Desktop - add to config
{
  "mcpServers": {
    "bitbucket": {
      "command": "npx",
      "args": ["-y", "@aashari/mcp-server-atlassian-bitbucket"],
      "env": {
        "DEBUG": "true",
        "ATLASSIAN_USER_EMAIL": "...",
        "ATLASSIAN_API_TOKEN": "..."
      }
    }
  }
}
```

**Log files:** When running in MCP mode, logs are written to `~/.mcp/data/@aashari-mcp-server-atlassian-bitbucket.[session-id].log`

### Test with HTTP Mode

For interactive debugging, run the server in HTTP mode and use the MCP Inspector:

```bash
# Set credentials first
export ATLASSIAN_USER_EMAIL="your.email@company.com"
export ATLASSIAN_API_TOKEN="your_token"
export DEBUG=true

# Start HTTP server with MCP Inspector
npx -y @aashari/mcp-server-atlassian-bitbucket
# Then in another terminal:
PORT=3000 npm run mcp:inspect
```

This opens a visual interface to test tools and see request/response data.

### Common Issues

**Server not appearing in Claude Desktop:**
1. Check config file syntax (valid JSON)
2. Restart Claude Desktop completely
3. Check Claude Desktop logs: `~/Library/Logs/Claude/mcp*.log` (macOS)

**Tools not working:**
1. Enable DEBUG mode to see detailed errors
2. Test with CLI first to isolate MCP vs credentials issues
3. Verify API paths are correct (case-sensitive)

## Troubleshooting

### "Authentication failed" or "403 Forbidden"

1. **Choose the right authentication method**:
   - **Standard Atlassian method** (recommended): Use your Atlassian account email + API token (works with any Atlassian service)
   - **Bitbucket-specific method** (legacy): Use your Bitbucket username + App password (Bitbucket only)

2. **For Scoped API Tokens** (recommended):
   - Go to [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
   - Make sure your token is still active and has the right scopes
   - Required scopes: `repository`, `workspace` (add `pullrequest` for PR management)
   - Token should start with `ATATT`

3. **For Bitbucket App Passwords** (legacy):
   - Go to [Bitbucket App Passwords](https://bitbucket.org/account/settings/app-passwords/)
   - Make sure your app password has the right permissions
   - Remember: App passwords will be deprecated by June 2026

4. **Verify your credentials**:
   ```bash
   # Test credentials with CLI
   export ATLASSIAN_USER_EMAIL="your.email@company.com"
   export ATLASSIAN_API_TOKEN="your_token"
   npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/workspaces"
   ```

5. **Environment variable naming**:
   - Use `ATLASSIAN_USER_EMAIL` + `ATLASSIAN_API_TOKEN` for scoped tokens
   - Use `ATLASSIAN_BITBUCKET_USERNAME` + `ATLASSIAN_BITBUCKET_APP_PASSWORD` for app passwords
   - Don't use `ATLASSIAN_SITE_NAME` - it's not needed for Bitbucket Cloud

### "Resource not found" or "404"

1. **Check the API path**:
   - Paths are case-sensitive
   - Use workspace slug (from URL), not display name
   - Example: If your repo URL is `https://bitbucket.org/myteam/my-repo`, use `myteam` and `my-repo`

2. **Verify the resource exists**:
   ```bash
   # List workspaces to find the correct slug
   npx -y @aashari/mcp-server-atlassian-bitbucket get --path "/workspaces"
   ```

### Claude Desktop Integration Issues

1. **Restart Claude Desktop** after updating the config file
2. **Verify config file location**:
   - macOS: `~/.claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

### Getting Help

If you're still having issues:
1. Run a simple test command to verify everything works
2. Check the [GitHub Issues](https://github.com/aashari/mcp-server-atlassian-bitbucket/issues) for similar problems
3. Create a new issue with your error message and setup details

## Frequently Asked Questions

### What permissions do I need?

**For Scoped API Tokens** (recommended):
- Required scopes: `repository`, `workspace`
- Add `pullrequest` for PR management

**For Bitbucket App Passwords** (legacy):
- For **read-only access**: Workspaces: Read, Repositories: Read, Pull Requests: Read
- For **full functionality**: Add "Write" permissions for Repositories and Pull Requests

### Can I use this with private repositories?

Yes! This works with both public and private repositories. You just need the appropriate permissions through your credentials.

### What AI assistants does this work with?

Any AI assistant that supports the Model Context Protocol (MCP):
- Claude Desktop
- Cursor AI
- Continue.dev
- Many others

### Is my data secure?

Yes! This tool:
- Runs entirely on your local machine
- Uses your own Bitbucket credentials
- Never sends your data to third parties
- Only accesses what you give it permission to access

## Migration from v1.x

Version 2.0 represents a major architectural change. If you're upgrading from v1.x:

**Before (v1.x) - 20+ specific tools:**
```
bb_ls_workspaces, bb_get_workspace, bb_ls_repos, bb_get_repo,
bb_list_branches, bb_add_branch, bb_get_commit_history, bb_get_file,
bb_ls_prs, bb_get_pr, bb_add_pr, bb_update_pr, bb_approve_pr, bb_reject_pr,
bb_ls_pr_comments, bb_add_pr_comment, bb_diff_branches, bb_diff_commits, bb_search
```

**After (v2.0+) - 6 generic tools:**
```
bb_get, bb_post, bb_put, bb_patch, bb_delete, bb_clone
```

### Migration Examples

| v1.x Tool | v2.0+ Equivalent |
|-----------|------------------|
| `bb_ls_workspaces()` | `bb_get(path: "/workspaces")` |
| `bb_ls_repos(workspace: "myteam")` | `bb_get(path: "/repositories/myteam")` |
| `bb_get_repo(workspace: "myteam", repo: "myrepo")` | `bb_get(path: "/repositories/myteam/myrepo")` |
| `bb_list_branches(workspace: "myteam", repo: "myrepo")` | `bb_get(path: "/repositories/myteam/myrepo/refs/branches")` |
| `bb_add_branch(...)` | `bb_post(path: "/repositories/.../refs/branches", body: {...})` |
| `bb_ls_prs(workspace: "myteam", repo: "myrepo")` | `bb_get(path: "/repositories/myteam/myrepo/pullrequests")` |
| `bb_get_pr(workspace: "myteam", repo: "myrepo", id: 42)` | `bb_get(path: "/repositories/myteam/myrepo/pullrequests/42")` |
| `bb_add_pr(...)` | `bb_post(path: "/repositories/.../pullrequests", body: {...})` |
| `bb_update_pr(...)` | `bb_patch(path: "/repositories/.../pullrequests/42", body: {...})` |
| `bb_approve_pr(workspace: "myteam", repo: "myrepo", id: 42)` | `bb_post(path: "/repositories/myteam/myrepo/pullrequests/42/approve", body: {})` |
| `bb_diff_branches(...)` | `bb_get(path: "/repositories/.../diff/branch1..branch2")` |

### Key Changes
1. **All tools now require explicit paths** - more verbose but more flexible
2. **Use JMESPath filtering** - extract only what you need to reduce tokens
3. **TOON format by default** - 30-60% fewer tokens (can override with `outputFormat: "json"`)
4. **Direct Bitbucket API access** - any API endpoint works, no code changes needed for new features

## Support

Need help? Here's how to get assistance:

1. **Check the troubleshooting section above** - most common issues are covered there
2. **Visit our GitHub repository** for documentation and examples: [github.com/aashari/mcp-server-atlassian-bitbucket](https://github.com/aashari/mcp-server-atlassian-bitbucket)
3. **Report issues** at [GitHub Issues](https://github.com/aashari/mcp-server-atlassian-bitbucket/issues)
4. **Start a discussion** for feature requests or general questions

---

*Made with care for developers who want to bring AI into their Bitbucket workflow.*
