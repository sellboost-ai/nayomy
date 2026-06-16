---
name: "ztxtxwd/open-feishu-mcp-server"
description: "A Model Context Protocol (MCP) server with built-in Feishu OAuth authentication, supporting remote connections and providing comprehensive Feishu document management tools including block creation, content updates, and advanced features."
category: "Communication"
repo: "ztxtxwd/open-feishu-mcp-server"
stars: 86
url: "https://github.com/ztxtxwd/open-feishu-mcp-server"
body_length: 5486
license: "MIT"
language: "TypeScript"
homepage: "https://fms-tapeless.lovable.app"
body_tr: |-
  [![MCP Badge](https://lobehub.com/badge/mcp/ztxtxwd-open-feishu-mcp-server)](https://lobehub.com/mcp/ztxtxwd-open-feishu-mcp-server)

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ztxtxwd/open-feishu-mcp-server)](https://archestra.ai/mcp-catalog/ztxtxwd__open-feishu-mcp-server)
  # 飞书 MCP Server

  [English Documentation](README.en.md)

  Bu, [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) sunucusu uzaktan bağlantı desteği ve yerleşik Feishu OAuth kimlik doğrulaması ile sağlanmaktadır.

  Bu proje [cloudflare/ai/demos/remote-mcp-github-oauth](https://github.com/cloudflare/ai/tree/main/demos/remote-mcp-github-oauth) dosyasından değiştirilmiş olup GitHub OAuth, Feishu OAuth ile değiştirilmiştir.

  Bunu kendi Cloudflare hesabınıza dağıtabilir ve kendi Feishu OAuth istemci uygulamasını oluşturduktan sonra, tamamen işlevsel bir uzaktan MCP sunucusuna sahip olabilirsiniz. Kullanıcılar Feishu hesabı aracılığıyla MCP sunucunuza bağlanabilir.

  ## 📋 İçindekiler

  - [Feishu Resmi MCP Server ile Farklar](#-feishu-resmi-mcp-server-ile-farklar)
  - [Özellikler](#-özellikler)
  - [Hızlı Başlangıç](#-hızlı-başlangıç)
  - [Dağıtım Yöntemleri](#-dağıtım-yöntemleri)
    - [Üretim Ortamı Dağıtımı](#üretim-ortamı-dağıtımı)
    - [Yerel Geliştirme Ortamı](#yerel-geliştirme-ortamı)
  - [İstemci Entegrasyonu](#-istemci-entegrasyonu)
    - [Inspector Kullanarak Test Etme](#inspector-kullanarak-test-etme)
    - [Cursor Kullanma](#cursor-kullanma)
    - [ChatWise Kullanma](#chatwise-kullanma)
  - [Erişim Kontrolü](#-erişim-kontrolü)
  - [Araç Geliştirme Yol Haritası](#-araç-geliştirme-yol-haritası)
  - [Teknik İlkeler](#-teknik-ilkeler)
  - [Geliştirme Kılavuzu](#-geliştirme-kılavuzu)


  ## 🆚 Feishu Resmi MCP Server ile Farklar

  Feishu resmi olarak da bir MCP Server yayınlamış olsa da, bu proje birkaç açıdan önemli avantajlara sahiptir:

  ### 🎯 Sıfır Yapılandırma Deneyimi
  - **Bu Proje**: Kullanıcılar herhangi bir parametreyi manuel olarak yapılandırmaya gerek kalmaz, tüm süreç `user_access_token` kullanır ve otomatik olarak yenilenir
  - **Resmi Proje**: Kullanıcıların birden çok parametreyi manuel olarak yapılandırması gerekir, yapılandırma karmaşıktır

  ### 🚀 Uç Kullanılabilirlik Optimizasyonu
  - **Bu Proje**: Araç boyutu ve yapısını derinlemesine optimize eder, özellikle belge oluşturma bloğu araçları, iç içe geçmiş blok oluşturma araçları gibi karmaşık işlevleri içerir, Cursor gibi istemcilerde normal kullanım sağlar
  - **Resmi Proje**: Basit API'den MCP aracına dönüştürme, bazı araçlar çok büyüktür, gerçek kullanımda kullanılabilirlik sorunları vardır

  ### 🌐 İleri Temel Altyapı
  - Cloudflare Workers'a dağıtımı destekler, endüstrinin en ileri kenar bilişim altyapısından yararlanır

  ## ✨ Özellikler

  - 🎯 **Sıfır Yapılandırma Deneyimi**: Kullanıcılar herhangi bir parametreyi manuel olarak yapılandırmaya gerek kalmaz, `user_access_token` otomatik olarak yönetilir ve yenilenir
  - 🔐 **Feishu OAuth Kimlik Doğrulaması**: Güvenli kullanıcı kimlik doğrulaması
  - 🌐 **Uzaktan MCP Sunucusu**: Birden çok istemci bağlantısını destekler
  - 🚀 **Cloudflare Workers**: Yüksek performanslı, global dağıtılmış dağıtım, endüstrinin en ileri kenar bilişim altyapısından yararlanır
  - 🛠️ **Derinlemesine Optimize Edilmiş Araç Seti**: Belge oluşturma, iç içe geçmiş bloklar gibi karmaşık araçları özel olarak optimize eder, çeşitli istemcilerde normal kullanım sağlar
  - 🔧 **Yerel Geliştirme Desteği**: Geliştirme ve test için uygun ortam
  - ⚡ **Uç Kullanılabilirlik**: Resmi MCP Server ile karşılaştırıldığında, gerçek kullanım deneyimini ve istikrarını önemli ölçüde iyileştirir

  ## 🚀 Hızlı Başlangıç

  ### Ön Koşullar

  - Node.js 18+ ve npm
  - Cloudflare hesabı
  - Feishu Açık Platform hesabı

  ### Kurulum

  ```bash
  # Depoyu klonlayın
  git clone <repository-url>
  cd open-feishu-mcp-server

  # Bağımlılıkları yükleyin
  npm install
  ```

  ## 🚀 Dağıtım Yöntemleri

  ### Üretim Ortamı Dağıtımı

  #### Adım 1: Feishu Uygulaması Oluşturun

  1. [Feishu Açık Platform](https://open.feishu.cn/) ziyaret edin ve giriş yapın
  2. "Geliştirici Arka Planda" tıklayın ve yeni bir uygulama oluşturun
  3. Uygulama ayarlarında izinleri yapılandırın:
     - "İzinler ve İşlevler" bölümüne girin ve aşağıdaki izinleri ekleyin:
       - "Kullanıcı ID'sini Al" (auth:user.id:read)
       - "Kullanıcı Görev Bilgisini Al" (task:task:read)
       - "Kullanıcı Yetkilendirme Kimlik Bilgisini Al" (offline_access)
       - "Kullanıcı Temel Bilgisini Al" (user_profile)
       
          ...
  4. **Uygulama ID** ve **Uygulama Parolası** not alın

  #### Adım 2: Cloudflare Ortamını Yapılandırın

  ```bash
  # Gerekli gizli anahtarları ayarlayın
  wrangler secret put FEISHU_APP_ID
  wrangler secret put FEISHU_APP_SECRET
  wrangler secret put COOKIE_ENCRYPTION_KEY  # openssl rand -hex 32 kullanarak oluşturun

  # KV ad alanı oluşturun
  wrangler kv namespace create "OAUTH_KV"
  ```

  #### Adım 3: Yapılandırma Dosyasını Güncelleyin

  Adım 2'de alınan KV ID'sini kullanarak `wrangler.toml` dosyasındaki KV ad alanı yapılandırmasını güncelleyin.

  #### Adım 4: Sunucuyu Dağıtın

  ```bash
  npm run deploy
  ```

  Dağıtım tamamlandıktan sonra, gerçek subdomain'inizi not alın (dağıtım günlüğünde gösterilir).

  #### Adım 5: Yeniden Yönlendirme URL'sini Yapılandırın

  Feishu uygulama ayarlarına geri dönün:
  1. "Güvenlik Ayarları" bölümüne girin
  2. Yeniden Yönlendirme URL'sini ekleyin: `https://feishu-mcp-server.<your-actual-subdomain>.workers.dev/callback`

  ### Yerel Geliştirme Ortamı

  #### Yerel Ortamı Yapılandırın

  1. **Feishu Uygulamasını Yapılandırın**:
     - Feishu uygulamasının "Güvenlik Ayarları" bölümüne şunu ekleyin: `http://localhost:8788/callback`
     - Gerekli izinlere sahip olduğunuzdan emin olun (üretim ortamı gibi)

  2. **Ortam Değişkenini Dosya Oluşturun**:
     Proje kök dizininde `.dev.vars` dosyası oluşturun:
     ```
     FEISHU_APP_ID=your_development_feishu_app_id
     FEISHU_APP_SECRET=your_development_feishu_app_secret
     COOKIE_ENCRYPTION_KEY=any_random_string_here
     ```

  #### Yerel Sunucuyu Başlatın

  ```bash
  npm run dev
  ```

  Sunucu `http://localhost:8788` adresinde çalışacaktır.

  ## 🔌 İstemci Entegrasyonu

  ### Inspector Kullanarak Test Etme

  Sunucunuzu test etmek için resmi MCP Inspector'ı kullanın:

  ```bash
  npx @modelcontextprotocol/inspector@latest
  ```

  **Bağlantı Adresi**:
  - Üretim ortamı: `https://feishu-mcp-server.<your-subdomain>.workers.dev/sse`
  - Yerel ortam: `http://localhost:8788/sse`

  ### Cursor Kullanma

  Tek tıklamayla yükleme düğmesi aracılığıyla hızlı yapılandırma:

  [![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=feishu&config=eyJ1cmwiOiJodHRwOi8vbG9jYWxob3N0Ojg3ODgvc3NlIn0%3D)

  Veya manuel olarak yapılandırın:

  ```json
  {
    "mcpServers": {
      "feishu": {
        "url": "http://localhost:8788/sse"
      }
    }
  }
  ```

  ### ChatWise Kullanma

  1. **Yapılandırma Adımları**:
     - ChatWise ayarları arayüzünü açın
     - Araçlar seçeneğine gidin
     - Yeni komut satırı giriş/çıkış (stdio) ekleyin
     - Komut: `npx -y mcp-remote ${URL}`

  2. **Bağlantı Adresi**:
     - Yerel: `http://localhost:8788/sse`
     - Üretim: `https://feishu-mcp-server.<your-subdomain>.workers.dev/sse`

  3. **İlk Kullanım**:
     - Yapılandırma kaydedildikten sonra Feishu OAuth giriş sayfası otomatik olarak açılır
     - Yetkilendirmeyi tamamladıktan sonra Feishu ilgili işlevlerini kullanabilirsiniz

  ## 🔐 Erişim Kontrolü

  - **Kimlik Doğrulama**: Kullanıcı kimlik doğrulaması için Feishu OAuth kullanır
  - **İzin Kapsamı**: Tüm kimlik doğrulaması yapılmış Feishu kullanıcıları tüm araçlara erişebilir

  ## 📋 Araç Geliştirme Yol Haritası

  ### 🚧 Şu Anda Geliştirme Aşamasında (Feishu Belgeleri)
  - **🔧Geliştirme Yardımcı Araçları**
    - ✅ Belge İçeriği Arama ve Geri Çağırma
  - **📄 Belge Temel İşlemleri**
    - ✅ Belge Bloğu Ağaç Yapısı Alma
    - ✅ Blok Türü Oluşturma Parametreleri Schema Alma
    - ✅ Belge Bloğu Oluşturma (çeşitli blok türlerini destekler)
    - ✅ Belge Bloğu İçeriğini Güncelleme
    - ✅ Toplu Belge Bloğu Silme
  - **🔧 Belge İleri İşlevleri**
    - ✅ Tablo Oluşturma ve İşletme
    - ✅ Resim, Video, Dosya Yükleme ve Ekleme
    - ✅ Markdown İçe Aktarma İşlevi
    - ✅ Malzeme Yükleme ve Yönetimi
    - ✅ Belge Arama

  ### 🎯 Gelecek Planları
  - **📊 Elektronik Tablo (Sheets)**
    - 📋 Çalışma Sayfası Temel İşlemleri (oluşturma, silme, yeniden adlandırma)
    - 📋 Hücre Veri Okuma/Yazma
    - 📋 Formül Hesaplaması ve Uygulaması
    - 📋 Grafik Oluşturma ve Düzenleme
    - 📋 Veri Filtreleme ve Sıralama
    - 📋 İşbirliği ve İzin Yönetimi

  - **🗃️ Çok Boyutlu Tablo (Base/Bitable)**
    - 📋 Veri Tablosu Temel İşlemleri
    - 📋 Kayıt Ekleme, Silme, Güncelleme, Okuma
    - 📋 Alan Türü Yönetimi
    - 📋 Görünüm Oluşturma ve Yapılandırma
    - 📋 Otomasyon Kuralı Ayarları
    - 📋 Veri İçe/Dışa Aktarma

    ...

  **Açıklama**: ✅ Tamamlandı | 🔄 Geliştirme Aşamasında | 📋 Planlı

  ## 🛠️ Teknik İlkeler

  ### Mimari Bileşenler

  #### OAuth Sağlayıcı
  Tam OAuth 2.1 sunucusu uygulaması, aşağıdakileri işler:
  - MCP istemcisi kimlik doğrulaması
  - Feishu OAuth hizmet bağlantı yönetimi
  - KV depolamasında güvenli token yönetimi

  #### Dayanıklı MCP
  Cloudflare Durable Objects tabanlı MCP uzantısı:
  - Dayanıklı durum yönetimi
  - Kimlik doğrulama bağlamı depolaması
  - `this.props` aracılığıyla kullanıcı bilgisine erişim
  - Kullanıcı kimliğine dayalı koşullu araç kullanılabilirliği

  #### MCP Uzaktan
  Uzaktan MCP istemci bağlantılarını destekler:
  - İstemci-sunucu iletişim protokolü tanımı
  - Yapılandırılmış araç tanımı yöntemi
  - İstek/Yanıt serileştirmesini işler
  - SSE bağlantısını korur

  ## 👨‍💻 Geliştirme Kılavuzu

  ### MCP Sunucusu ([Cloudflare Workers](https://developers.cloudflare.com/workers/) tarafından desteklenir)

  Bu proje çift OAuth rolü uygular:
  * MCP istemcilerine karşı OAuth **sunucusu** olarak davranır
  * Feishu OAuth hizmetine karşı OAuth **istemcisi** olarak davranır

  ### Araç Geliştirme

  Mevcut araçlar kullanıcı erişim token'ı kullanarak kimlik doğrulaması yapar, bu aşağıdakları sağlar:
  - Feishu API'sine güvenli erişim
  - Kullanıcı izinlerine dayalı özellik erişimi
  - Eksiksiz hata işleme ve günlüğe kaydetme

  ---

  **📝 Not**: Dağıtmadan önce tüm ortam değişkenlerini ve Feishu uygulama ayarlarını doğru şekilde yapılandırdığınızdan emin olun. Sorun yaşarsanız, Feishu uygulama izin yapılandırması ve yeniden yönlendirme URL'si ayarlarını kontrol edin.

  ## Star History

  [![Star History Chart](https://api.star-history.com/svg?repos=ztxtxwd/open-feishu-mcp-server&type=Date)](https://star-history.com/#ztxtxwd/open-feishu-mcp-server&Date)
---

[![MCP Badge](https://lobehub.com/badge/mcp/ztxtxwd-open-feishu-mcp-server)](https://lobehub.com/mcp/ztxtxwd-open-feishu-mcp-server)

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ztxtxwd/open-feishu-mcp-server)](https://archestra.ai/mcp-catalog/ztxtxwd__open-feishu-mcp-server)
# 飞书 MCP Server

[English Documentation](README.en.md)

这是一个支持远程连接的[模型上下文协议 (MCP)](https://modelcontextprotocol.io/introduction) 服务器，内置了飞书 OAuth 认证。

本项目修改自 [cloudflare/ai/demos/remote-mcp-github-oauth](https://github.com/cloudflare/ai/tree/main/demos/remote-mcp-github-oauth)，将 GitHub OAuth 替换为飞书 OAuth。

您可以将其部署到自己的 Cloudflare 账户，并在创建自己的飞书 OAuth 客户端应用后，拥有一个功能完整的远程 MCP 服务器。用户可以通过飞书账号登录连接到您的 MCP 服务器。

## 📋 目录

- [与飞书官方 MCP Server 的区别](#-与飞书官方-mcp-server-的区别)
- [特性](#-特性)
- [快速开始](#-快速开始)
- [部署方式](#-部署方式)
  - [生产环境部署](#生产环境部署)
  - [本地开发环境](#本地开发环境)
- [客户端集成](#-客户端集成)
  - [使用 Inspector 测试](#使用-inspector-测试)
  - [使用 Cursor](#使用-cursor)
  - [使用 ChatWise](#使用-chatwise)
- [访问控制](#-访问控制)
- [工具开发路线图](#-工具开发路线图)
- [技术原理](#-技术原理)
- [开发指南](#-开发指南)


## 🆚 与飞书官方 MCP Server 的区别

虽然飞书官方也推出了 MCP Server，但本项目在以下几个方面具有显著优势：

### 🎯 零配置体验
- **本项目**：用户无需手动配置任何参数，全程使用 `user_access_token`，过期自动刷新
- **官方项目**：需要用户手动配置多个参数，配置复杂

### 🚀 极致的可用性优化
- **本项目**：深度优化工具尺寸和结构，特别是文档创建块工具、创建嵌套块工具等复杂功能，确保在 Cursor 等客户端中正常使用
- **官方项目**：简单的 API 到 MCP 工具转换，部分工具过于庞大，在实际使用中存在可用性问题

### 🌐 前沿基础设施
- 支持部署在 Cloudflare Workers，享受业界最前沿的边缘计算基础设施
## ✨ 特性

- 🎯 **零配置体验**：用户无需手动配置参数，自动管理 `user_access_token` 和刷新
- 🔐 **飞书 OAuth 认证**：安全的用户身份验证
- 🌐 **远程 MCP 服务器**：支持多客户端连接
- 🚀 **Cloudflare Workers**：高性能、全球分布式部署，享受业界最前沿的边缘计算基础设施
- 🛠️ **深度优化的工具集**：特别优化文档创建、嵌套块等复杂工具，确保在各种客户端中正常使用
- 🔧 **本地开发支持**：便于开发和测试的本地环境
- ⚡ **极致可用性**：相比官方 MCP Server，大幅提升实际使用体验和稳定性

## 🚀 快速开始

### 前置要求

- Node.js 18+ 和 npm
- Cloudflare 账户
- 飞书开放平台账户

### 安装

```bash
# 克隆仓库
git clone <repository-url>
cd open-feishu-mcp-server

# 安装依赖
npm install
```

## 🚀 部署方式

### 生产环境部署

#### 步骤 1: 创建飞书应用

1. 访问[飞书开放平台](https://open.feishu.cn/)并登录
2. 点击"开发者后台"并创建一个新应用
3. 在应用设置中配置权限：
   - 进入"权限与功能"并添加以下权限：
     - "获取用户 ID" (auth:user.id:read)
     - "获取用户任务信息" (task:task:read)
     - "获取用户授权凭证" (offline_access)
     - "获取用户基本信息" (user_profile)
     
        ...
4. 记下您的**应用 ID** 和**应用密钥**

#### 步骤 2: 配置 Cloudflare 环境

```bash
# 设置必要的密钥
wrangler secret put FEISHU_APP_ID
wrangler secret put FEISHU_APP_SECRET
wrangler secret put COOKIE_ENCRYPTION_KEY  # 使用 openssl rand -hex 32 生成

# 创建 KV 命名空间
wrangler kv namespace create "OAUTH_KV"
```

#### 步骤 3: 更新配置文件

使用步骤 2 中获得的 KV ID 更新 `wrangler.toml` 文件中的 KV 命名空间配置。

#### 步骤 4: 部署服务器

```bash
npm run deploy
```

部署完成后，记下您的实际 subdomain（会在部署日志中显示）。

#### 步骤 5: 配置重定向 URL

回到飞书应用设置：
1. 进入"安全设置"
2. 添加重定向 URL：`https://feishu-mcp-server.<your-actual-subdomain>.workers.dev/callback`

### 本地开发环境

#### 配置本地环境

1. **配置飞书应用**：
   - 在飞书应用的"安全设置"中添加：`http://localhost:8788/callback`
   - 确保拥有所需的权限（同生产环境）

2. **创建环境变量文件**：
   在项目根目录创建 `.dev.vars` 文件：
   ```
   FEISHU_APP_ID=your_development_feishu_app_id
   FEISHU_APP_SECRET=your_development_feishu_app_secret
   COOKIE_ENCRYPTION_KEY=any_random_string_here
   ```

#### 启动本地服务器

```bash
npm run dev
```

服务器将在 `http://localhost:8788` 运行。

## 🔌 客户端集成

### 使用 Inspector 测试

使用官方的 MCP Inspector 测试您的服务器：

```bash
npx @modelcontextprotocol/inspector@latest
```

**连接地址**：
- 生产环境：`https://feishu-mcp-server.<your-subdomain>.workers.dev/sse`
- 本地环境：`http://localhost:8788/sse`

### 使用 Cursor

通过一键安装按钮快速配置：

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=feishu&config=eyJ1cmwiOiJodHRwOi8vbG9jYWxob3N0Ojg3ODgvc3NlIn0%3D)

或手动配置：

```json
{
  "mcpServers": {
    "feishu": {
      "url": "http://localhost:8788/sse"
    }
  }
}
```

### 使用 ChatWise

1. **配置步骤**：
   - 打开 ChatWise 设置界面
   - 导航到工具选项
   - 新增命令行输入输出（stdio）
   - 命令：`npx -y mcp-remote ${URL}`

2. **连接地址**：
   - 本地：`http://localhost:8788/sse`
   - 生产：`https://feishu-mcp-server.<your-subdomain>.workers.dev/sse`

3. **首次使用**：
   - 保存配置后会自动打开飞书 OAuth 登录页面
   - 完成授权即可使用飞书相关功能

## 🔐 访问控制

- **身份验证**：使用飞书 OAuth 进行用户身份验证
- **权限范围**：所有经过身份验证的飞书用户都可以访问所有工具

## 📋 工具开发路线图

### 🚧 当前开发中 (飞书文档)
- **🔧开发辅助工具**
  - ✅ 开发文档内容搜索与召回
- **📄 文档基础操作**
  - ✅ 文档块树结构获取
  - ✅ 获取块类型创建参数 schema
  - ✅ 创建文档块（支持各种块类型）
  - ✅ 更新文档块内容
  - ✅ 批量删除文档块
- **🔧 文档高级功能**
  - ✅ 表格创建与操作
  - ✅ 图片、视频、文件上传与插入
  - ✅ Markdown 导入功能
  - ✅ 素材上传与管理
  - ✅ 文档搜索

### 🎯 未来计划
- **📊 电子表格（Sheets）**
  - 📋 工作表基础操作（创建、删除、重命名）
  - 📋 单元格数据读写
  - 📋 公式计算与应用
  - 📋 图表创建与编辑
  - 📋 数据筛选与排序
  - 📋 协作与权限管理

- **🗃️ 多维表格（Base/Bitable）**
  - 📋 数据表基础操作
  - 📋 记录增删改查
  - 📋 字段类型管理
  - 📋 视图创建与配置
  - 📋 自动化规则设置
  - 📋 数据导入导出

  ...

**图例**：✅ 已完成 | 🔄 开发中 | 📋 计划中

## 🛠️ 技术原理

### 架构组件

#### OAuth Provider
完整的 OAuth 2.1 服务器实现，处理：
- MCP 客户端身份验证
- 飞书 OAuth 服务连接管理
- KV 存储中的安全令牌管理

#### Durable MCP
基于 Cloudflare Durable Objects 的 MCP 扩展：
- 持久状态管理
- 身份验证上下文存储
- 通过 `this.props` 访问用户信息
- 基于用户身份的条件工具可用性

#### MCP Remote
支持远程 MCP 客户端连接：
- 定义客户端-服务器通信协议
- 提供结构化工具定义方式
- 处理请求/响应序列化
- 维护 SSE 连接

## 👨‍💻 开发指南

### MCP 服务器（由 [Cloudflare Workers](https://developers.cloudflare.com/workers/) 提供支持）

本项目实现了双重 OAuth 角色：
* 对 MCP 客户端充当 OAuth **服务器**
* 对飞书 OAuth 服务充当 OAuth **客户端**

### 工具开发

当前工具使用用户访问令牌进行身份验证，确保：
- 安全访问飞书 API
- 基于用户权限的功能访问
- 完整的错误处理和日志记录

---

**📝 注意**：确保在部署前正确配置所有环境变量和飞书应用设置。如遇问题，请检查飞书应用权限配置和重定向 URL 设置。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ztxtxwd/open-feishu-mcp-server&type=Date)](https://star-history.com/#ztxtxwd/open-feishu-mcp-server&Date)
