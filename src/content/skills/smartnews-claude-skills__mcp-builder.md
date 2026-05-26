---
name: "mcp-builder"
description_en: "Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK)."
category: "Design"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/mcp-builder/SKILL.md"
path: "mcp-builder/SKILL.md"
is_collection: false
body_length: 13162
has_scripts: true
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # MCP Sunucu Geliştirme Kılavuzu

  ## Genel Bakış

  Yüksek kaliteli MCP (Model Context Protocol) sunucuları oluşturmak için bu beceriyi kullanın ve LLM'lerin harici hizmetlerle etkili bir şekilde etkileşim kurmasını sağlayın. Bir MCP sunucusu, LLM'lere harici hizmetlere ve API'lere erişim izni veren araçlar sağlar. Bir MCP sunucusunun kalitesi, sağlanan araçları kullanarak LLM'lerin gerçek dünyada görevleri ne kadar iyi başarabilmesine göre ölçülür.

  ---

  # Süreç

  ## 🚀 Üst Düzey İş Akışı

  Yüksek kaliteli bir MCP sunucusu oluşturmak dört ana aşamayı içerir:

  ### Aşama 1: Derinlemesine Araştırma ve Planlama

  #### 1.1 Agent-Centric Tasarım İlkelerini Anlayın

  Uygulamaya başlamadan önce, bu ilkeleri gözden geçirerek AI ajanlar için araçlar tasarlamayı öğrenin:

  **İş Akışları İçin Tasarım Yapın, Sadece API Uç Noktaları Değil:**
  - Mevcut API uç noktalarını basitçe sarmayın - düşünceli, yüksek etkili iş akışı araçları oluşturun
  - İlgili işlemleri birleştirin (örn., `schedule_event` hem müsaitliği kontrol eden hem de etkinlik oluşturan)
  - Tam görevleri etkinleştiren araçlara odaklanın, sadece bireysel API çağrıları değil
  - Ajanların gerçekten başarması gereken iş akışlarını düşünün

  **Sınırlı Bağlam İçin Optimize Edin:**
  - Ajanlar kısıtlı bağlam pencerelerine sahiptir - her tokeni sayılı yapın
  - Yüksek sinyal bilgisi döndürün, kapsamlı veri dökümleri değil
  - "Özet" vs "Ayrıntılı" yanıt formatı seçenekleri sağlayın
  - Teknik kodlar yerine okunabilir tanımlayıcılara öncelik verin (kimlikler yerine isimler)
  - Ajanın bağlam bütçesini kıt bir kaynak olarak düşünün

  **İşlem Yapılabilir Hata Mesajları Tasarlayın:**
  - Hata mesajları ajanları doğru kullanım desenlerine doğru yönlendirmeli
  - Spesifik sonraki adımları önerin: "Sonuçları azaltmak için `filter='active_only'` kullanmayı deneyin"
  - Hataları eğitici yapın, sadece tanısal değil
  - Açık geri bildirim aracılığıyla ajanların doğru araç kullanımını öğrenmesine yardımcı olun

  **Doğal Görev Alt Bölümlerini İzleyin:**
  - Araç adları, insanların görevleri nasıl düşündüğünü yansıtmalıdır
  - İlgili araçları keşfedilebilirlik için tutarlı öneklerle gruplandırın
  - Araçları API yapısı yerine doğal iş akışlarının etrafında tasarlayın

  **Değerlendirme Odaklı Geliştirme Kullanın:**
  - Gerçekçi değerlendirme senaryolarını erken oluşturun
  - Ajan geri bildiriminin araç geliştirmelerini yönlendirmesine izin verin
  - Hızlı prototip oluşturun ve gerçek ajan performansına göre tekrarlayın

  #### 1.3 MCP Protokolü Belgelerini İnceleyin

  **En son MCP protokolü belgelerini alın:**

  WebFetch kullanarak şunu yükleyin: `https://modelcontextprotocol.io/llms-full.txt`

  Bu kapsamlı belge, tam MCP belirtimini ve yönergelerini içerir.

  #### 1.4 Framework Belgelerini İnceleyin

  **Aşağıdaki referans dosyalarını yükleyin ve okuyun:**

  - **MCP En İyi Uygulamalar**: [📋 En İyi Uygulamaları Görüntüle](./reference/mcp_best_practices.md) - Tüm MCP sunucuları için temel yönergeler

  **Python uygulamaları için, ayrıca yükleyin:**
  - **Python SDK Belgeleri**: WebFetch kullanarak şunu yükleyin `https://raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/README.md`
  - [🐍 Python Uygulama Kılavuzu](./reference/python_mcp_server.md) - Python'a özgü en iyi uygulamalar ve örnekler

  **Node/TypeScript uygulamaları için, ayrıca yükleyin:**
  - **TypeScript SDK Belgeleri**: WebFetch kullanarak şunu yükleyin `https://raw.githubusercontent.com/modelcontextprotocol/typescript-sdk/main/README.md`
  - [⚡ TypeScript Uygulama Kılavuzu](./reference/node_mcp_server.md) - Node/TypeScript'e özgü en iyi uygulamalar ve örnekler

  #### 1.5 API Belgelerini Kapsamlı Şekilde İnceleyin

  Bir hizmet entegre etmek için, **TÜM** mevcut API belgelerini okuyun:
  - Resmi API referans belgeleri
  - Kimlik doğrulama ve yetkilendirme gereksinimleri
  - Hız sınırlaması ve sayfalandırma desenleri
  - Hata yanıtları ve durum kodları
  - Mevcut uç noktalar ve parametreleri
  - Veri modelleri ve şemaları

  **Kapsamlı bilgi toplamak için gerektiği kadar web araması ve WebFetch aracını kullanın.**

  #### 1.6 Kapsamlı Bir Uygulama Planı Oluşturun

  Araştırmanıza göre, aşağıdakileri içeren ayrıntılı bir plan oluşturun:

  **Araç Seçimi:**
  - Uygulanacak en değerli uç noktaları/işlemleri listeleyin
  - En yaygın ve önemli kullanım durumlarını etkinleştiren araçlara öncelik verin
  - Karmaşık iş akışlarını etkinleştirmek için hangi araçların birlikte çalıştığını düşünün

  **Paylaşılan Yardımcı Programlar ve Yardımcılar:**
  - Yaygın API istek kalıplarını tanımlayın
  - Sayfalandırma yardımcılarını planlayın
  - Filtreleme ve biçimlendirme yardımcı programlarını tasarlayın
  - Hata işleme stratejilerini planlayın

  **Giriş/Çıkış Tasarımı:**
  - Giriş doğrulama modellerini tanımlayın (Python için Pydantic, TypeScript için Zod)
  - Tutarlı yanıt formatlarını tasarlayın (örn., JSON veya Markdown) ve yapılandırılabilir ayrıntı seviyeleri (örn., Ayrıntılı veya Özet)
  - Geniş ölçekli kullanım için planlama yapın (binlerce kullanıcı/kaynak)
  - Karakter sınırlarını ve kesme stratejilerini uygulayın (örn., 25.000 token)

  **Hata İşleme Stratejisi:**
  - Zarif arıza modlarını planlayın
  - Net, işlem yapılabilir, LLM'ye uygun, doğal dil hata mesajlarını tasarlayın ve daha fazla işlem istemeyin
  - Hız sınırlaması ve zaman aşımı senaryolarını düşünün
  - Kimlik doğrulama ve yetkilendirme hatalarını işleyin

  ---

  ### Aşama 2: Uygulama

  Kapsamlı bir plana sahip olduğunuza göre, dile özgü en iyi uygulamaları izleyerek uygulamaya başlayın.

  #### 2.1 Proje Yapısını Kurun

  **Python için:**
  - Karmaşıksa tek bir `.py` dosyası oluşturun veya modüllere organize edin (bkz. [🐍 Python Kılavuzu](./reference/python_mcp_server.md))
  - Araç kaydı için MCP Python SDK'sını kullanın
  - Giriş doğrulaması için Pydantic modellerini tanımlayın

  **Node/TypeScript için:**
  - Uygun proje yapısını oluşturun (bkz. [⚡ TypeScript Kılavuzu](./reference/node_mcp_server.md))
  - `package.json` ve `tsconfig.json`'u ayarlayın
  - MCP TypeScript SDK'sını kullanın
  - Giriş doğrulaması için Zod şemalarını tanımlayın

  #### 2.2 Önce Temel Altyapıyı Uygulayın

  **Uygulamaya başlamak için, araçları uygulamadan önce paylaşılan yardımcı programları oluşturun:**
  - API istek yardımcı işlevleri
  - Hata işleme yardımcı programları
  - Yanıt biçimlendirme işlevleri (JSON ve Markdown)
  - Sayfalandırma yardımcıları
  - Kimlik doğrulama/token yönetimi

  #### 2.3 Araçları Sistematik Olarak Uygulayın

  Plandaki her araç için:

  **Giriş Şemasını Tanımlayın:**
  - Doğrulama için Pydantic (Python) veya Zod (TypeScript) kullanın
  - Uygun kısıtlamaları ekleyin (min/max uzunluk, regex desenleri, min/max değerler, aralıklar)
  - Açık, açıklayıcı alan açıklamaları sağlayın
  - Alan açıklamalarında çeşitli örnekler ekleyin

  **Kapsamlı Docstring'ler/Açıklamalar Yazın:**
  - Aracın ne yaptığının tek satırı özeti
  - Amacı ve işlevselliğinin ayrıntılı açıklaması
  - Örnekler ile açık parametre türleri
  - Tam dönüş türü şeması
  - Kullanım örnekleri (ne zaman kullanılacağı, ne zaman kullanılmayacağı)
  - Hata işleme belgeleri, belirli hataların verildiği şekilde nasıl ilerleyeceğini özetler

  **Araç Mantığını Uygulayın:**
  - Kod çoğaltmaktan kaçınmak için paylaşılan yardımcı programları kullanın
  - Tüm I/O için async/await modellerini izleyin
  - Uygun hata işlemeyi uygulayın
  - Birden çok yanıt formatını destekleyin (JSON ve Markdown)
  - Sayfalandırma parametrelerine uyun
  - Karakter sınırlarını kontrol edin ve uygun şekilde kesin

  **Araç Açıklamalarını Ekleyin:**
  - `readOnlyHint`: true (salt okunur işlemler için)
  - `destructiveHint`: false (yıkıcı olmayan işlemler için)
  - `idempotentHint`: true (tekrarlanan çağrıların aynı etkiye sahipse)
  - `openWorldHint`: true (harici sistemlerle etkileşim kuruyorsa)

  #### 2.4 Dile Özgü En İyi Uygulamaları İzleyin

  **Bu noktada, uygun dil kılavuzunu yükleyin:**

  **Python için: [🐍 Python Uygulama Kılavuzu](./reference/python_mcp_server.md)'nu yükleyin ve aşağıdakileri sağlayın:**
  - Uygun araç kaydı ile MCP Python SDK'sı kullanımı
  - `model_config` ile Pydantic v2 modelleri
  - Tüm kod boyunca tip ipuçları
  - Tüm I/O işlemleri için async/await
  - Uygun içe aktarma organizasyonu
  - Modül düzeyindeki sabitler (CHARACTER_LIMIT, API_BASE_URL)

  **Node/TypeScript için: [⚡ TypeScript Uygulama Kılavuzu](./reference/node_mcp_server.md)'nu yükleyin ve aşağıdakileri sağlayın:**
  - `server.registerTool` kullanımını düzgün kullanmak
  - `.strict()` ile Zod şemaları
  - TypeScript kesin modu etkinleştirilmiş
  - `any` türleri yok - uygun türleri kullanın
  - Açık Promise<T> dönüş türleri
  - Yapı süreci yapılandırılmıştır (`npm run build`)

  ---

  ### Aşama 3: İnceleme ve Iyileştirme

  İlk uygulamadan sonra:

  #### 3.1 Kod Kalitesi İncelemesi

  Kaliteyi sağlamak için, kodu aşağıdakiler açısından gözden geçirin:
  - **DRY İlkesi**: Araçlar arasında çoğaltılmış kod yok
  - **Bileşen Yapılabilirlik**: Paylaşılan mantık işlevlere ayıklandı
  - **Tutarlılık**: Benzer işlemler benzer formatlar döndürür
  - **Hata İşleme**: Tüm harici çağrıların hata işlemesi vardır
  - **Tür Güvenliği**: Tam tür kapsamı (Python tip ipuçları, TypeScript türleri)
  - **Belgeleme**: Her araçta kapsamlı docstring'ler/açıklamalar vardır

  #### 3.2 Test ve Oluştur

  **Önemli:** MCP sunucuları, stdio/stdin veya sse/http üzerinden istekleri bekleyen uzun süreli işlemlerdir. Bunları doğrudan ana işlemde çalıştırmak (örn., `python server.py` veya `node dist/index.js`) işleminizi belirsiz süre asılı bırakacaktır.

  **Sunucuyu test etmenin güvenli yolları:**
  - Değerlendirme koşusunu kullanın (bkz. Aşama 4) - önerilen yaklaşım
  - Sunucuyu tmux'ta çalıştırın, ana işleminin dışında tutun
  - Test ederken zaman aşımı kullanın: `timeout 5s python server.py`

  **Python için:**
  - Python söz dizimini doğrulayın: `python -m py_compile your_server.py`
  - İçe aktarmaların dosyayı gözden geçirerek doğru şekilde çalıştığını kontrol edin
  - Manuel test etmek için: Sunucuyu tmux'ta çalıştırın, sonra ana işlemde değerlendirme koşusuyla test edin
  - Veya değerlendirme koşusunu doğrudan kullanın (stdio taşıması için sunucuyu yönetir)

  **Node/TypeScript için:**
  - `npm run build`'i çalıştırın ve hatasız tamamlandığından emin olun
  - dist/index.js'nin oluşturulduğunu doğrulayın
  - Manuel test etmek için: Sunucuyu tmux'ta çalıştırın, sonra ana işlemde değerlendirme koşusuyla test edin
  - Veya değerlendirme koşusunu doğrudan kullanın (stdio taşıması için sunucuyu yönetir)

  #### 3.3 Kalite Kontrol Listesini Kullanın

  Uygulama kalitesini doğrulamak için, dile özgü kılavuzdan uygun kontrol listesini yükleyin:
  - Python: [🐍 Python Kılavuzu](./reference/python_mcp_server.md)'nda "Kalite Kontrol Listesi"'ne bakın
  - Node/TypeScript: [⚡ TypeScript Kılavuzu](./reference/node_mcp_server.md)'nda "Kalite Kontrol Listesi"'ne bakın

  ---

  ### Aşama 4: Değerlendirmeler Oluşturun

  MCP sunucunuzu uyguladıktan sonra, etkinliğini test etmek için kapsamlı değerlendirmeler oluşturun.

  **Tamamlayıcı değerlendirme yönergeleri için [✅ Değerlendirme Kılavuzu](./reference/evaluation.md)'nu yükleyin.**

  #### 4.1 Değerlendirme Amacını Anlayın

  Değerlendirmeler, LLM'lerin MCP sunucunuzu kullanarak gerçekçi, karmaşık soruları etkili bir şekilde yanıtlayabilmelerini test eder.

  #### 4.2 10 Değerlendirme Sorusu Oluşturun

  Etkili değerlendirmeler oluşturmak için, değerlendirme kılavuzunda özetlenen süreci izleyin:

  1. **Araç İncelemesi**: Mevcut araçları listeleyin ve yeteneklerini anlayın
  2. **İçerik Keşfi**: Mevcut verileri keşfetmek için SALT OKUMA işlemleri kullanın
  3. **Soru Oluşturma**: 10 karmaşık, gerçekçi soru oluşturun
  4. **Cevap Doğrulaması**: Cevapları doğrulamak için her soruyu kendiniz çözün

  #### 4.3 Değerlendirme Gereksinimleri

  Her soru şunlar olmalıdır:
  - **Bağımsız**: Diğer soruların bağımlı olmayan
  - **Salt Okuma**: Yalnızca yıkıcı olmayan işlemler gereklidir
  - **Karmaşık**: Birden çok araç çağrısı ve derin keşif gerektiren
  - **Gerçekçi**: İnsanların önemsediği gerçek kullanım durumlarına dayanan
  - **Doğrulanabilir**: String karşılaştırması ile doğrulanabilecek tek, net cevap
  - **Sabit**: Cevap zaman içinde değişmeyecek

  #### 4.4 Çıktı Formatı

  Bu yapıya sahip bir XML dosyası oluşturun:

  ```xml
  <evaluation>
    <qa_pair>
      <question>Hayvan kod adlarıyla AI model piyasaya sürüşlerinin tartışıldığı başlıkları bulun. Bir model, ASL-X formatını kullanan belirli bir güvenlik ataması gerekiyordu. Benekli bir vahşi kedinin adıyla adlandırılan model için belirlenen X numarası nedir?</question>
      <answer>3</answer>
    </qa_pair>
  <!-- Daha fazla qa_pairs... -->
  </evaluation>
  ```

  ---

  # Referans Dosyaları

  ## 📚 Belgelendirme Kitaplığı

  Geliştirme sırasında gerektiği kadar bu kaynakları yükleyin:

  ### Temel MCP Belgeleri (Önce Yükleyin)
  - **MCP Protokolü**: `https://modelcontextprotocol.io/llms-full.txt`'ten alın - Tam MCP belirtimi
  - [📋 MCP En İyi Uygulamalar](./reference/mcp_best_practices.md) - Evrensel MCP yönergeleri, aşağıdakileri içerir:
    - Sunucu ve araç adlandırma kuralları
    - Yanıt formatı yönergeleri (JSON vs Markdown)
    - Sayfalandırma en iyi uygulamaları
    - Karakter sınırları ve kesme stratejileri
    - Araç geliştirme yönergeleri
    - Güvenlik ve hata işleme standartları

  ### SDK Belgeleri (Aşama 1/2 Sırasında Yükleyin)
  - **Python SDK**: `https://raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/README.md`'den alın
  - **TypeScript SDK**: `https://raw.githubusercontent.com/modelcontextprotocol/typescript-sdk/main/README.md`'den alın

  ### Dile Özgü Uygulama Kılavuzları (Aşama 2 Sırasında Yükleyin)
  - [🐍 Python Uygulama Kılavuzu](./reference/python_mcp_server.md) - Tamamlayıcı Python/FastMCP kılavuzu, aşağıdakileri içerir:
    - Sunucu başlatma desenleri
    - Pydantic model örnekleri
    - `@mcp.tool` ile araç kaydı
    - Tamamlayıcı çalışan örnekler
    - Kalite kontrol listesi

  - [⚡ TypeScript Uygulama Kılavuzu](./reference/node_mcp_server.md) - Tamamlayıcı TypeScript kılavuzu, aşağıdakileri içerir:
    - Proje yapısı
    - Zod şema desenleri
    - `server.registerTool` ile araç kaydı
    - Tamamlayıcı çalışan örnekler
    - Kalite kontrol listesi

  ### Değerlendirme Kılavuzu (Aşama 4 Sırasında Yükleyin)
  - [✅ Değerlendirme Kılavuzu](./reference/evaluation.md) - Tamamlayıcı değerlendirme oluşturma kılavuzu, aşağıdakileri içerir:
    - Soru oluşturma yönergeleri
    - Cevap doğrulama stratejileri
    - XML format belirtimleri
    - Örnek soru ve cevaplar
    - Sağlanan komut dosyalarıyla değerlendirme çalıştırma
---

# MCP Server Development Guide

## Overview

To create high-quality MCP (Model Context Protocol) servers that enable LLMs to effectively interact with external services, use this skill. An MCP server provides tools that allow LLMs to access external services and APIs. The quality of an MCP server is measured by how well it enables LLMs to accomplish real-world tasks using the tools provided.

---

# Process

## 🚀 High-Level Workflow

Creating a high-quality MCP server involves four main phases:

### Phase 1: Deep Research and Planning

#### 1.1 Understand Agent-Centric Design Principles

Before diving into implementation, understand how to design tools for AI agents by reviewing these principles:

**Build for Workflows, Not Just API Endpoints:**
- Don't simply wrap existing API endpoints - build thoughtful, high-impact workflow tools
- Consolidate related operations (e.g., `schedule_event` that both checks availability and creates event)
- Focus on tools that enable complete tasks, not just individual API calls
- Consider what workflows agents actually need to accomplish

**Optimize for Limited Context:**
- Agents have constrained context windows - make every token count
- Return high-signal information, not exhaustive data dumps
- Provide "concise" vs "detailed" response format options
- Default to human-readable identifiers over technical codes (names over IDs)
- Consider the agent's context budget as a scarce resource

**Design Actionable Error Messages:**
- Error messages should guide agents toward correct usage patterns
- Suggest specific next steps: "Try using filter='active_only' to reduce results"
- Make errors educational, not just diagnostic
- Help agents learn proper tool usage through clear feedback

**Follow Natural Task Subdivisions:**
- Tool names should reflect how humans think about tasks
- Group related tools with consistent prefixes for discoverability
- Design tools around natural workflows, not just API structure

**Use Evaluation-Driven Development:**
- Create realistic evaluation scenarios early
- Let agent feedback drive tool improvements
- Prototype quickly and iterate based on actual agent performance

#### 1.3 Study MCP Protocol Documentation

**Fetch the latest MCP protocol documentation:**

Use WebFetch to load: `https://modelcontextprotocol.io/llms-full.txt`

This comprehensive document contains the complete MCP specification and guidelines.

#### 1.4 Study Framework Documentation

**Load and read the following reference files:**

- **MCP Best Practices**: [📋 View Best Practices](./reference/mcp_best_practices.md) - Core guidelines for all MCP servers

**For Python implementations, also load:**
- **Python SDK Documentation**: Use WebFetch to load `https://raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/README.md`
- [🐍 Python Implementation Guide](./reference/python_mcp_server.md) - Python-specific best practices and examples

**For Node/TypeScript implementations, also load:**
- **TypeScript SDK Documentation**: Use WebFetch to load `https://raw.githubusercontent.com/modelcontextprotocol/typescript-sdk/main/README.md`
- [⚡ TypeScript Implementation Guide](./reference/node_mcp_server.md) - Node/TypeScript-specific best practices and examples

#### 1.5 Exhaustively Study API Documentation

To integrate a service, read through **ALL** available API documentation:
- Official API reference documentation
- Authentication and authorization requirements
- Rate limiting and pagination patterns
- Error responses and status codes
- Available endpoints and their parameters
- Data models and schemas

**To gather comprehensive information, use web search and the WebFetch tool as needed.**

#### 1.6 Create a Comprehensive Implementation Plan

Based on your research, create a detailed plan that includes:

**Tool Selection:**
- List the most valuable endpoints/operations to implement
- Prioritize tools that enable the most common and important use cases
- Consider which tools work together to enable complex workflows

**Shared Utilities and Helpers:**
- Identify common API request patterns
- Plan pagination helpers
- Design filtering and formatting utilities
- Plan error handling strategies

**Input/Output Design:**
- Define input validation models (Pydantic for Python, Zod for TypeScript)
- Design consistent response formats (e.g., JSON or Markdown), and configurable levels of detail (e.g., Detailed or Concise)
- Plan for large-scale usage (thousands of users/resources)
- Implement character limits and truncation strategies (e.g., 25,000 tokens)

**Error Handling Strategy:**
- Plan graceful failure modes
- Design clear, actionable, LLM-friendly, natural language error messages which prompt further action
- Consider rate limiting and timeout scenarios
- Handle authentication and authorization errors

---

### Phase 2: Implementation

Now that you have a comprehensive plan, begin implementation following language-specific best practices.

#### 2.1 Set Up Project Structure

**For Python:**
- Create a single `.py` file or organize into modules if complex (see [🐍 Python Guide](./reference/python_mcp_server.md))
- Use the MCP Python SDK for tool registration
- Define Pydantic models for input validation

**For Node/TypeScript:**
- Create proper project structure (see [⚡ TypeScript Guide](./reference/node_mcp_server.md))
- Set up `package.json` and `tsconfig.json`
- Use MCP TypeScript SDK
- Define Zod schemas for input validation

#### 2.2 Implement Core Infrastructure First

**To begin implementation, create shared utilities before implementing tools:**
- API request helper functions
- Error handling utilities
- Response formatting functions (JSON and Markdown)
- Pagination helpers
- Authentication/token management

#### 2.3 Implement Tools Systematically

For each tool in the plan:

**Define Input Schema:**
- Use Pydantic (Python) or Zod (TypeScript) for validation
- Include proper constraints (min/max length, regex patterns, min/max values, ranges)
- Provide clear, descriptive field descriptions
- Include diverse examples in field descriptions

**Write Comprehensive Docstrings/Descriptions:**
- One-line summary of what the tool does
- Detailed explanation of purpose and functionality
- Explicit parameter types with examples
- Complete return type schema
- Usage examples (when to use, when not to use)
- Error handling documentation, which outlines how to proceed given specific errors

**Implement Tool Logic:**
- Use shared utilities to avoid code duplication
- Follow async/await patterns for all I/O
- Implement proper error handling
- Support multiple response formats (JSON and Markdown)
- Respect pagination parameters
- Check character limits and truncate appropriately

**Add Tool Annotations:**
- `readOnlyHint`: true (for read-only operations)
- `destructiveHint`: false (for non-destructive operations)
- `idempotentHint`: true (if repeated calls have same effect)
- `openWorldHint`: true (if interacting with external systems)

#### 2.4 Follow Language-Specific Best Practices

**At this point, load the appropriate language guide:**

**For Python: Load [🐍 Python Implementation Guide](./reference/python_mcp_server.md) and ensure the following:**
- Using MCP Python SDK with proper tool registration
- Pydantic v2 models with `model_config`
- Type hints throughout
- Async/await for all I/O operations
- Proper imports organization
- Module-level constants (CHARACTER_LIMIT, API_BASE_URL)

**For Node/TypeScript: Load [⚡ TypeScript Implementation Guide](./reference/node_mcp_server.md) and ensure the following:**
- Using `server.registerTool` properly
- Zod schemas with `.strict()`
- TypeScript strict mode enabled
- No `any` types - use proper types
- Explicit Promise<T> return types
- Build process configured (`npm run build`)

---

### Phase 3: Review and Refine

After initial implementation:

#### 3.1 Code Quality Review

To ensure quality, review the code for:
- **DRY Principle**: No duplicated code between tools
- **Composability**: Shared logic extracted into functions
- **Consistency**: Similar operations return similar formats
- **Error Handling**: All external calls have error handling
- **Type Safety**: Full type coverage (Python type hints, TypeScript types)
- **Documentation**: Every tool has comprehensive docstrings/descriptions

#### 3.2 Test and Build

**Important:** MCP servers are long-running processes that wait for requests over stdio/stdin or sse/http. Running them directly in your main process (e.g., `python server.py` or `node dist/index.js`) will cause your process to hang indefinitely.

**Safe ways to test the server:**
- Use the evaluation harness (see Phase 4) - recommended approach
- Run the server in tmux to keep it outside your main process
- Use a timeout when testing: `timeout 5s python server.py`

**For Python:**
- Verify Python syntax: `python -m py_compile your_server.py`
- Check imports work correctly by reviewing the file
- To manually test: Run server in tmux, then test with evaluation harness in main process
- Or use the evaluation harness directly (it manages the server for stdio transport)

**For Node/TypeScript:**
- Run `npm run build` and ensure it completes without errors
- Verify dist/index.js is created
- To manually test: Run server in tmux, then test with evaluation harness in main process
- Or use the evaluation harness directly (it manages the server for stdio transport)

#### 3.3 Use Quality Checklist

To verify implementation quality, load the appropriate checklist from the language-specific guide:
- Python: see "Quality Checklist" in [🐍 Python Guide](./reference/python_mcp_server.md)
- Node/TypeScript: see "Quality Checklist" in [⚡ TypeScript Guide](./reference/node_mcp_server.md)

---

### Phase 4: Create Evaluations

After implementing your MCP server, create comprehensive evaluations to test its effectiveness.

**Load [✅ Evaluation Guide](./reference/evaluation.md) for complete evaluation guidelines.**

#### 4.1 Understand Evaluation Purpose

Evaluations test whether LLMs can effectively use your MCP server to answer realistic, complex questions.

#### 4.2 Create 10 Evaluation Questions

To create effective evaluations, follow the process outlined in the evaluation guide:

1. **Tool Inspection**: List available tools and understand their capabilities
2. **Content Exploration**: Use READ-ONLY operations to explore available data
3. **Question Generation**: Create 10 complex, realistic questions
4. **Answer Verification**: Solve each question yourself to verify answers

#### 4.3 Evaluation Requirements

Each question must be:
- **Independent**: Not dependent on other questions
- **Read-only**: Only non-destructive operations required
- **Complex**: Requiring multiple tool calls and deep exploration
- **Realistic**: Based on real use cases humans would care about
- **Verifiable**: Single, clear answer that can be verified by string comparison
- **Stable**: Answer won't change over time

#### 4.4 Output Format

Create an XML file with this structure:

```xml
<evaluation>
  <qa_pair>
    <question>Find discussions about AI model launches with animal codenames. One model needed a specific safety designation that uses the format ASL-X. What number X was being determined for the model named after a spotted wild cat?</question>
    <answer>3</answer>
  </qa_pair>
<!-- More qa_pairs... -->
</evaluation>
```

---

# Reference Files

## 📚 Documentation Library

Load these resources as needed during development:

### Core MCP Documentation (Load First)
- **MCP Protocol**: Fetch from `https://modelcontextprotocol.io/llms-full.txt` - Complete MCP specification
- [📋 MCP Best Practices](./reference/mcp_best_practices.md) - Universal MCP guidelines including:
  - Server and tool naming conventions
  - Response format guidelines (JSON vs Markdown)
  - Pagination best practices
  - Character limits and truncation strategies
  - Tool development guidelines
  - Security and error handling standards

### SDK Documentation (Load During Phase 1/2)
- **Python SDK**: Fetch from `https://raw.githubusercontent.com/modelcontextprotocol/python-sdk/main/README.md`
- **TypeScript SDK**: Fetch from `https://raw.githubusercontent.com/modelcontextprotocol/typescript-sdk/main/README.md`

### Language-Specific Implementation Guides (Load During Phase 2)
- [🐍 Python Implementation Guide](./reference/python_mcp_server.md) - Complete Python/FastMCP guide with:
  - Server initialization patterns
  - Pydantic model examples
  - Tool registration with `@mcp.tool`
  - Complete working examples
  - Quality checklist

- [⚡ TypeScript Implementation Guide](./reference/node_mcp_server.md) - Complete TypeScript guide with:
  - Project structure
  - Zod schema patterns
  - Tool registration with `server.registerTool`
  - Complete working examples
  - Quality checklist

### Evaluation Guide (Load During Phase 4)
- [✅ Evaluation Guide](./reference/evaluation.md) - Complete evaluation creation guide with:
  - Question creation guidelines
  - Answer verification strategies
  - XML format specifications
  - Example questions and answers
  - Running an evaluation with the provided scripts
