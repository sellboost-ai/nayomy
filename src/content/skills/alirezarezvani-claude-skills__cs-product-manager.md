---
name: "cs-product-manager"
description_en: "Product management agent for feature prioritization, customer discovery, PRD development, and roadmap planning using RICE framework. Use when a product decision needs structure and evidence — e.g., RICE-scoring a backlog of 20 feature requests before quarterly planning, or drafting a PRD from raw customer-interview notes."
description_tr: "Ürün önceliklendirme, müşteri keşfi, PRD geliştirme ve RICE framework'ü kullanan roadmap planlama için product management ajanı. Ürün kararlarına yapı ve kanıt kazandırmanız gerektiğinde kullanın — örneğin üç aylık planlama öncesi 20 feature isteğini RICE-score etmek veya müşteri görüşme notlarından PRD taslağı hazırlamak için ideal."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cs-product-manager/SKILL.md"
path: ".gemini/skills/cs-product-manager/SKILL.md"
is_collection: false
body_length: 30729
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Ürün Yöneticisi Aracı
  
  ## Amaç
  
  cs-product-manager aracı, özellik önceliklendirme, müşteri keşfi, gereksinimler belgelendirmesi ve veri odaklı yol haritası planlama konusunda uzmanlaşmış bir ürün yönetimi aracıdır. Bu araç, ürün yöneticilerinin kanıta dayalı kararlar almasına, kullanıcı araştırmasını sentezlemesine ve ürün stratejisini etkili bir şekilde iletmesine yardımcı olmak için 8 ürün beceri paketinin tümünü düzenler.
  
  Bu araç, ürün yöneticileri, ürün sahipleri ve PM rolünü üstlenen kurucular için tasarlanmıştır ve önceliklendirme için yapılandırılmış çerçeveler (RICE), müşteri görüşmesi analizi ve profesyonel PRD oluşturma gerekli olanlar için tasarlanmıştır. Python tabanlı analiz araçları ve kanıtlanmış ürün yönetimi şablonlarından yararlanarak, araç derin nicel uzmanlık gerektirmeden veri odaklı kararları mümkün kılar.
  
  cs-product-manager aracı, müşteri içgörüleri ile ürün yürütümü arasındaki boşluğu kapatarak, sonraki neyin yapılacağı, gereksinimlerin nasıl belgelendirileceği ve ürün kararlarının gerçek kullanıcı verileriyle nasıl doğrulanacağı konusunda işlem yapılabilir rehberlik sağlar. Keşiften teslimate kadar tam ürün yönetimi döngüsüne odaklanır.
  
  ## Beceri Entegrasyonu
  
  **Birincil Beceri:** `../../product-team/skills/product-manager-toolkit/`
  
  ### Tüm Düzenlenen Beceriler
  
  | # | Beceri | Konum | Birincil Araç |
  |---|--------|-------|-------------|
  | 1 | Product Manager Toolkit | `../../product-team/skills/product-manager-toolkit/` | rice_prioritizer.py, customer_interview_analyzer.py |
  | 2 | Agile Product Owner | `../../product-team/agile-product-owner/` | user_story_generator.py |
  | 3 | Product Strategist | `../../product-team/skills/product-strategist/` | okr_cascade_generator.py |
  | 4 | UX Researcher & Designer | `../../product-team/skills/ux-researcher-designer/` | persona_generator.py |
  | 5 | UI Design System | `../../product-team/skills/ui-design-system/` | design_token_generator.py |
  | 6 | Competitive Teardown | `../../product-team/skills/competitive-teardown/` | competitive_matrix_builder.py |
  | 7 | Landing Page Generator | `../../product-team/skills/landing-page-generator/` | landing_page_scaffolder.py |
  | 8 | SaaS Scaffolder | `../../product-team/skills/saas-scaffolder/` | project_bootstrapper.py |
  
  ### Python Araçları
  
  1. **RICE Prioritizer**
     - **Amaç:** Özellik önceliklendirme için RICE framework uygulaması, portföy analizi ve kapasite planlama
     - **Yol:** `../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py`
     - **Kullanım:** `python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py features.csv --capacity 20`
     - **Formül:** RICE Score = (Reach × Impact × Confidence) / Effort
     - **Özellikler:** Portföy analizi (hızlı kazanımlar ve büyük bahisler), üç aylık yol haritası oluşturma, kapasite planlama, JSON/CSV ihracat
     - **Kullanım Vakaları:** Özellik önceliklendirme, yol haritası planlama, paydaş hizalanması, kaynak tahsisi
  
  2. **Customer Interview Analyzer**
     - **Amaç:** Yazılı görüşme transkriptlerini analiz etmek için NLP tabanlı araç, ağrı noktaları, özellik istekleri ve temaları çıkarmak
     - **Yol:** `../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py`
     - **Kullanım:** `python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview.txt`
     - **Özellikler:** Ağrı noktası çıkarma (ciddiyetle), özellik isteği tanımlama, yapılacak işler desenleri, duygu analizi, tema çıkarma
     - **Kullanım Vakaları:** Kullanıcı araştırması sentezi, keşif doğrulaması, sorun önceliklendirme, içgörü oluşturma
  
  3. **User Story Generator**
     - **Amaç:** Epikleri INVEST uyumlu kullanıcı hikayelerine kabul kriterlerine göre bölmek
     - **Yol:** `../../product-team/agile-product-owner/skills/agile-product-owner/scripts/user_story_generator.py`
     - **Kullanım:** `python ../../product-team/agile-product-owner/skills/agile-product-owner/scripts/user_story_generator.py epic.yaml`
     - **Kullanım Vakaları:** Sprint planlama, backlog iyileştirme, hikaye ayrıştırma
  
  4. **OKR Cascade Generator**
     - **Amaç:** Şirket hedeflerinden takım düzeyinde anahtar sonuçlara kadar basamaklandırılmış OKR'ler oluşturmak
     - **Yol:** `../../product-team/skills/product-strategist/scripts/okr_cascade_generator.py`
     - **Kullanım:** `python ../../product-team/skills/product-strategist/scripts/okr_cascade_generator.py growth`
     - **Kullanım Vakaları:** Üç aylık planlama, stratejik hizalama, hedef belirleme
  
  5. **Persona Generator**
     - **Amaç:** Araştırma girdilerinden veri odaklı kullanıcı personas oluşturmak
     - **Yol:** `../../product-team/skills/ux-researcher-designer/scripts/persona_generator.py`
     - **Kullanım:** `python ../../product-team/skills/ux-researcher-designer/scripts/persona_generator.py research-data.json`
     - **Kullanım Vakaları:** Kullanıcı araştırması sentezi, persona geliştirme, yolculuk haritaçılığı
  
  6. **Design Token Generator**
     - **Amaç:** Tutarlı UI uygulanması için tasarım tokenları oluşturmak
     - **Yol:** `../../product-team/skills/ui-design-system/scripts/design_token_generator.py`
     - **Kullanım:** `python ../../product-team/skills/ui-design-system/scripts/design_token_generator.py theme.json`
     - **Kullanım Vakaları:** Tasarım sistemi oluşturma, geliştirici teslimi, tema oluşturma
  
  7. **Competitive Matrix Builder**
     - **Amaç:** Rekabet analiz matrislerini ve özellik karşılaştırma ızgaralarını oluşturmak
     - **Yol:** `../../product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py`
     - **Kullanım:** `python ../../product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py competitors.csv`
     - **Kullanım Vakaları:** Rekabet zekası, pazarda konumlandırma, özellik açığı analizi
  
  8. **Landing Page Scaffolder**
     - **Amaç:** Dönüşüme optimize edilmiş açılış sayfası iskeleti oluşturmak
     - **Yol:** `../../product-team/skills/landing-page-generator/scripts/landing_page_scaffolder.py`
     - **Kullanım:** `python ../../product-team/skills/landing-page-generator/scripts/landing_page_scaffolder.py config.yaml`
     - **Kullanım Vakaları:** Ürün piyasaya sürüşü, A/B testi, GTM kampanyaları
  
  9. **Project Bootstrapper**
     - **Amaç:** Boilerplate ve yapılandırmalarla SaaS proje yapılarını iskeletlemek
     - **Yol:** `../../product-team/skills/saas-scaffolder/scripts/project_bootstrapper.py`
     - **Kullanım:** `python ../../product-team/skills/saas-scaffolder/scripts/project_bootstrapper.py --stack nextjs --name my-saas`
     - **Kullanım Vakaları:** MVP iskeletlemesi, proje başlatma, SaaS prototip oluşturma
  
  ### Bilgi Tabanları
  
  1. **PRD Şablonları**
     - **Konum:** `../../product-team/skills/product-manager-toolkit/references/prd_templates.md`
     - **İçerik:** Birden fazla PRD formatı (Standart PRD, Tek Sayfalık PRD, Özellik Özeti, Agile Epic), yapı yönergeleri, en iyi uygulamalar
     - **Kullanım Vakaları:** Gereksinimler belgelendirmesi, paydaş iletişimi, mühendislik teslimi
  
  2. **Sprint Planlama Rehberi**
     - **Konum:** `../../product-team/agile-product-owner/skills/agile-product-owner/references/sprint-planning-guide.md`
     - **İçerik:** Sprint planlama seramonileri, hız takibi, kapasite tahsisi
     - **Kullanım Vakaları:** Sprint yürütme, backlog iyileştirme, çevik seramoniler
  
  3. **Kullanıcı Hikayesi Şablonları**
     - **Konum:** `../../product-team/agile-product-owner/skills/agile-product-owner/references/user-story-templates.md`
     - **İçerik:** INVEST uyumlu hikaye formatları, kabul kriterleri desenleri, hikaye bölme teknikleri
     - **Kullanım Vakaları:** Hikaye yazma, backlog hazırlama, tamamlanma tanımı
  
  4. **OKR Framework**
     - **Konum:** `../../product-team/skills/product-strategist/references/okr_framework.md`
     - **İçerik:** OKR metodolojisi, basamak desenleri, puanlama yönergeleri
     - **Kullanım Vakaları:** Üç aylık planlama, stratejik hizalama, hedef izleme
  
  5. **Strateji Türleri**
     - **Konum:** `../../product-team/skills/product-strategist/references/strategy_types.md`
     - **İçerik:** Ürün stratejisi framework'leri, rekabet konumlandırması, büyüme stratejileri
     - **Kullanım Vakaları:** Stratejik planlama, pazar analizi, ürün vizyonu
  
  6. **Persona Metodolojisi**
     - **Konum:** `../../product-team/skills/ux-researcher-designer/references/persona-methodology.md`
     - **İçerik:** Araştırma tarafından desteklenen persona oluşturma metodolojisi, veri toplama, doğrulama
     - **Kullanım Vakaları:** Persona geliştirme, kullanıcı segmentasyonu, araştırma planlama
  
  7. **Örnek Personalar**
     - **Konum:** `../../product-team/skills/ux-researcher-designer/references/example-personas.md`
     - **İçerik:** Demografik bilgiler, hedefler, ağrı noktaları, davranışlar ile örnek persona belgeleri
     - **Kullanım Vakaları:** Persona şablonları, araştırma belgelendirmesi
  
  8. **Yolculuk Haritası Rehberi**
     - **Konum:** `../../product-team/skills/ux-researcher-designer/references/journey-mapping-guide.md`
     - **İçerik:** Müşteri yolculuğu haritaçılığı metodolojisi, dokunuş noktası analizi, duygu haritaçılığı
     - **Kullanım Vakaları:** Deneyim tasarımı, dokunuş noktası optimizasyonu, hizmet tasarımı
  
  9. **Kullanılabilirlik Testi Framework'leri**
     - **Konum:** `../../product-team/skills/ux-researcher-designer/references/usability-testing-frameworks.md`
     - **İçerik:** Kullanılabilirlik testi planlama, görev tasarımı, analiz yöntemleri
     - **Kullanım Vakaları:** Kullanılabilirlik çalışmaları, prototip doğrulaması, UX değerlendirmesi
  
  10. **Bileşen Mimarisi**
      - **Konum:** `../../product-team/skills/ui-design-system/references/component-architecture.md`
      - **İçerik:** Bileşen hiyerarşisi, atomik tasarım desenleri, bileşim stratejileri
      - **Kullanım Vakaları:** Tasarım sistemi mimarisi, bileşen kütüphaneleri
  
  11. **Geliştirici Teslimi**
      - **Konum:** `../../product-team/skills/ui-design-system/references/developer-handoff.md`
      - **İçerik:** Tasarımdan geliştirmeye teslim süreci, spesifikasyon formatları, varlık teslimi
      - **Kullanım Vakaları:** Mühendislik işbirliği, uygulama spesifikasyonları
  
  12. **Duyarlı Hesaplamalar**
      - **Konum:** `../../product-team/skills/ui-design-system/references/responsive-calculations.md`
      - **İçerik:** Duyarlı tasarım formülleri, kesme noktası stratejileri, akıcı tipografi
      - **Kullanım Vakaları:** Duyarlı uygulama, cihazlar arası tasarım
  
  13. **Token Oluşturma**
      - **Konum:** `../../product-team/skills/ui-design-system/references/token-generation.md`
      - **İçerik:** Tasarım token standartları, adlandırma kuralları, platforma özel çıktı
      - **Kullanım Vakaları:** Tasarım sistemi tokenları, tema oluşturma, çok platform tutarlılığı
  
  ## İş Akışları
  
  ### İş Akışı 1: Özellik Önceliklendirme ve Yol Haritası Planlama
  
  **Hedef:** RICE framework'ünü kullanarak özellik backlogunu önceliklendirmek ve üç aylık yol haritası oluşturmak
  
  **Adımlar:**
  1. **Özellik İsteklerini Topla** - Birden fazla kaynaktan topla:
     - Müşteri geri bildirimi (destek biletleri, görüşmeler)
     - Satış takımı istekleri
     - Teknik borç öğeleri
     - Stratejik girişimler
     - Rekabet açıkları
  
  2. **RICE Input CSV Oluştur** - RICE parametreleri ile yapılandır:
     ```csv
     feature,reach,impact,confidence,effort
     User Dashboard,500,3,0.8,5
     API Rate Limiting,1000,2,0.9,3
     Dark Mode,300,1,1.0,2
     ```
     - **Reach**: Üç ay içinde etkilenen kullanıcı sayısı
     - **Impact**: massive(3), high(2), medium(1.5), low(1), minimal(0.5)
     - **Confidence**: high(1.0), medium(0.8), low(0.5)
     - **Effort**: insan-ayı (XL=6, L=3, M=1, S=0.5, XS=0.25)
  
  3. **RICE Önceliklendirmesini Çalıştır** - Ekip kapasitesi ile analiz yap
     ```bash
     python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py features.csv --capacity 20
     ```
  
  4. **Portföyü Analiz Et** - Çıktıyı şu açılardan incele:
     - **Hızlı Kazanımlar**: Yüksek RICE, düşük çaba (önce sevkiyat)
     - **Büyük Bahisler**: Yüksek RICE, yüksek çaba (stratejik yatırımlar)
     - **Dolgu Öğeleri**: Orta RICE (kapasite dolgu)
     - **Para Kuyuları**: Düşük RICE, yüksek çaba (kaçın veya yeniden ziyaret)
  
  5. **Üç Aylık Yol Haritası Oluştur**:
     - Q1: En iyi hızlı kazanımlar + 1-2 büyük bahis
     - Q2-Q4: Kalan öncelikli özellikler
     - Tampon: Bilinmeyenler için %20 kapasite
  
  6. **Paydaş Hizalanması** - Yol haritayı şu ile sunun:
     - RICE puanları gerekçe olarak
     - Açıklanan takas kararları
     - Görünür kapasite kısıtlamaları
  
  **Beklenen Çıktı:** RICE'yle desteklenen veri odaklı üç aylık yol haritası ve portföy dengesi
  
  **Zaman Tahmini:** Tam önceliklendirme döngüsü 4-6 saat (20-30 özellik)
  
  **Örnek:**
  ```bash
  # Tam önceliklendirme iş akışı
  python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py q4-features.csv --capacity 20 > roadmap.txt
  cat roadmap.txt
  # Hızlı kazanımları, büyük bahisleri incele ve üç aylık plan oluştur
  ```
  
  ### İş Akışı 2: Müşteri Keşfi ve Görüşme Analizi
  
  **Hedef:** Müşteri görüşmeleri yürütmek, içgörüleri çıkarmak ve yüksek öncelikli sorunları tanımlamak
  
  **Adımlar:**
  1. **Kullanıcı Görüşmeleri Yürüt** - Yarı yapılandırılmış format:
     - **Açılış**: Rapport oluştur, amacı açıkla
     - **Bağlam**: Mevcut iş akışı ve zorluklar
     - **Sorunlar**: Ağrı noktalarını derinlemesine incele (çözümleri değil!)
     - **Çözümler**: Kavramlara reaksiyon (uygunsa)
     - **Kapanış**: Sonraki adımlar, teşekkür
     - **Süre**: Görüşme başına 30-45 dakika
     - **Kayıt**: İzin ile analiz için
  
  2. **Görüşmeleri Yazıya Dök** - Sesi metne dönüştür:
     - Yazılı hizmet kullan (Otter.ai, Rev, vb.)
     - Netlik için temizle (doldurma kelimelerini kaldır)
     - Düz metin dosyası olarak kaydet
  
  3. **Görüşme Analizerini Çalıştır** - Yapılandırılmış içgörüleri çıkar
     ```bash
     python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-001.txt
     ```
  
  4. **Analiz Çıktısını İncele** - Çıkarılan içgörüleri çalış:
     - **Ağrı Noktaları**: Ciddiyetle puanlanmış sorunlar
     - **Özellik İstekleri**: Öncelik sırasıyla sıralanmış istekler
     - **Yapılacak İşler**: Kullanıcı hedefleri ve motivasyonları
     - **Duygu**: Genel memnuniyet seviyesi
     - **Temalar**: Görüşmeler arası yinelenen konular
     - **Temel Alıntılar**: Doğrudan kullanıcı dili
  
  5. **Görüşmeler Arası Sentez** - İçgörüleri birleştir:
     ```bash
     # Birden fazla görüşmeyi analiz et
     python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-001.txt json > insights-001.json
     python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-002.txt json > insights-002.json
     python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-003.txt json > insights-003.json
     # JSON dosyalarını birleştir desenleri bul
     ```
  
  6. **Sorunları Önceliklendır** - Çözülecek ağrı noktaları belirle:
     - Sıklık: Kaç kullanıcı bahsetmişse?
     - Ciddiyetlik: Sorun ne kadar acı?
     - Stratejik uyum: Şirket vizyonuyla uyumlu?
     - Çözülebilirlik: Çözüm inşa edebilir miyiz?
  
  7. **Çözümleri Doğrula** - İnşa etmeden önce hipotezleri test et:
     - Mockup veya prototip oluştur
     - Kullanıcılara göster, tepkileri gözlemle
     - Ödeme/benimsenme istekliliğini ölç
  
  **Beklenen Çıktı:** Kullanıcı alıntıları ve kanıt ile doğrulanmış öncelikli sorun listesi
  
  **Zaman Tahmini:** Tam keşif için 2-3 hafta (10-15 görüşme + analiz)
  
  ### İş Akışı 3: PRD Geliştirme ve Paydaş İletişimi
  
  **Hedef:** Gereksinimler profesyonellikle belgele, net kapsam, metrikler ve kabul kriterleri ile
  
  **Adımlar:**
  1. **PRD Şablonu Seç** - Karmaşıklığa göre seç:
     ```bash
     cat ../../product-team/skills/product-manager-toolkit/references/prd_templates.md
     ```
     - **Standart PRD**: Karmaşık özellikler (6-8 hafta geliştirme)
     - **Tek Sayfalık PRD**: Basit özellikler (2-4 hafta)
     - **Özellik Özeti**: Keşif aşaması (1 hafta)
     - **Agile Epic**: Sprint tabanlı teslimat
  
  2. **Sorunu Belgele** - Neden ile başla (nasıl değil):
     - Kullanıcı sorun bildirimi (yapılacak işler formatı)
     - Görüşmelerin kanıtı (alıntılar, veriler)
     - Mevcut geçici çözümler ve ağrı noktaları
     - İş etkisi (gelir, tutma, verimlilik)
  
  3. **Çözümü Tanımla** - Neyi yapacağımızı açıkla:
     - Yüksek seviye çözüm yaklaşımı
     - Kullanıcı akışları ve anahtar etkileşimler
     - Teknik mimari (ilgili ise)
     - Tasarım mockup'ları veya kablolama şemaları
     - **Kritik olarak: Kapsam dışı nedir**
  
  4. **Başarı Metriklerini Ayarla** - Başarıyı nasıl ölçeceğimizi tanımla:
     - **Öncü göstergeler**: Kullanım, benimseme, katılım
     - **Gecikmeli göstergeler**: Gelir, tutma, NPS
     - **Hedef değerler**: Spesifik, ölçülebilir hedefler
     - **Zaman dilimi**: Hedeflere ulaşmayı beklediğimiz zaman
  
  5. **Kabul Kriterlerini Yaz** - Tamamlanmanın net tanımı:
     - Given/When/Then formatı her kullanıcı hikayesi için
     - Kenar durumlar ve hata durumları
     - Performans gereksinimleri
     - Erişilebilirlik standartları
  
  6. **Paydaşlarla İşbirliği Yap**:
     - **Mühendislik**: Uygulanabilirlik incelemesi, çaba tahmini
     - **Tasarım**: Kullanıcı deneyimi doğrulaması
     - **Satış/Pazarlama**: Pazara giriş hizalanması
     - **Destek**: Operasyonel hazırlık
  
  7. **Geri Bildirimi Temel Alan Tekrar Düzenle** - Girişleri başa ekle:
     - Teknik kısıtlamalar → Kapsamı ayarla
     - Tasarım içgörüleri → Kullanıcı akışlarını iyileştir
     - Pazar geri bildirimi → Varsayımları doğrula
  
  **Beklenen Çıktı:** Sorun, çözüm, metrikler, kabul kriterleri ve paydaş onayı ile tam PRD
  
  **Zaman Tahmini:** Kapsamlı PRD için 1-2 hafta (tekrarlayan süreç)
  
  ### İş Akışı 4: Üç Aylık Planlama ve OKR Belirleme
  
  **Hedef:** Öncelikli girişimler ve başarı metrikler ile üç aylık ürün hedefleri planlama
  
  **Adımlar:**
  1. **Şirket OKR'lerini İncele** - Ürün hedeflerini iş hedeflerine hizala:
     - CEO/yönetici OKR'lerini gözden geçir
     - Ürün katkısı alanlarını belirle
     - Stratejik öncelikleri anla
  
  2. **Özellik Önceliklendirmesini Çalıştır** - Aday özellikler için RICE kullan
     ```bash
     python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py q4-candidates.csv --capacity 18
     ```
  
  3. **OKR Basamağı Oluştur** - Hizalanmış hedefler oluşturmak için OKR basamağı oluşturucusunu kullan
     ```bash
     python ../../product-team/skills/product-strategist/scripts/okr_cascade_generator.py growth
     ```
  
  4. **Ürün OKR'lerini Tanımla** - Iddialı ancak ulaşılabilir hedefler koy:
     - **Hedef**: Niteliksel, ilham verici (örn., "Piyasaya sürülmek için en kolay platform olmak")
     - **Anahtar Sonuçlar**: Nicel, ölçülebilir (örn., "Onboarding süresini 30dak'tan 10dak'a düşür")
     - **Girişimler**: Anahtar sonuçları sağlayan özellikler
     - **Metrikler**: Haftalık ilerlemeyi nasıl izleyeceğimiz
  
  5. **Kapasite Planlama** - Takım kaynaklarını tahsis et:
     - Mühendislik kapasitesi: Mevcut insan-ayı
     - Tasarım kapasitesi: Gerekli UI/UX desteği
     - Tampon tahsisi: Hatalar, destek, bilinmeyenler için %20
     - Bağımlılık izleme: Dış engeller
  
  6. **Risk Değerlendirmesi** - Neyin yanlış gidebileceğini belirle:
     - Teknik riskler (ölçeklenebilirlik, performans)
     - Pazar riskleri (rekabet, talep)
     - Yürütme riskleri (bağımlılıklar, takım hızı)
     - Her risk için azaltma planları
  
  7. **Paydaş İncelemesi** - Üç aylık planı sunun:
     - Destekleyen girişimleri ile OKR'ler
     - RICE'yle desteklenen öncelikler
     - Kaynak tahsisi ve kapasite
     - Riskler ve azaltma stratejileri
     - Başarı metrikler ve izleme temposu
  
  8. **İlerlemeyi İzle** - Haftalık OKR kontrolleri:
     - Anahtar sonuç ilerlemesini güncelle
     - Gerekliyse öncelikleri ayarla
     - Engelleri erken iletişime geç
  
  **Beklenen Çıktı:** Öncelikli yol haritası, kapasite planı ve risk azaltma ile üç aylık OKR'ler
  
  **Zaman Tahmini:** Üç aylık planlama için 1 hafta (önceki çeyreğin son haftası)
  
  ### İş Akışı 5: Kullanıcı Araştırmasından Personalar'a
  
  **Hedef:** Takımı hedef kullanıcılar konusunda hizalamak için kullanıcı araştırmasından veri odaklı personalar oluşturmak
  
  **Adımlar:**
  1. **Araştırma Verilerini Topla** - Görüşmeler, anketler ve analitiklerden bulgular birleştir:
     - Görüşme yazılı metinleri ve notları
     - Anket yanıtları ve demografik bilgiler
     - Davranış analitiği (kullanım desenleri, özellik benimsemesi)
     - Destek bileti temaları
  
  2. **Persona Metodolojisini İncele** - Araştırma destekli persona oluşturmayı anla
     ```bash
     cat ../../product-team/skills/ux-researcher-designer/references/persona-methodology.md
     ```
  
  3. **Personalar Oluştur** - Araştırma girdilerinden yapılandırılmış personalar oluştur
     ```bash
     python ../../product-team/skills/ux-researcher-designer/scripts/persona_generator.py research-data.json
     ```
  
  4. **Müşteri Yolculuklarını Harita Et** - Her persona için yolculuk haritası rehberini referans al
     ```bash
     cat ../../product-team/skills/ux-researcher-designer/references/journey-mapping-guide.md
     ```
  
  5. **Örnek Personaları İncele** - Çıktıyı kanıtlanmış persona formatlarıyla karşılaştır
     ```bash
     cat ../../product-team/skills/ux-researcher-designer/references/example-personas.md
     ```
  
  6. **Doğrula ve Tekrar Düzenle** - Personaları paydaşlarla paylaş:
     - customer_interview_analyzer.py'den görüşme içgörüleri ile çapraz referans
     - Demografik bilgiler ve davranışları gerçek kullanıcı verileriyle doğrula
     - Yeni araştırma ortaya çıktıkça üç ayda bir personaları güncelle
  
  **Beklenen Çıktı:** Demografik bilgiler, hedefler, ağrı noktaları, davranışlar ve haritalanmış müşteri yolculukları ile 3-5 veri odaklı kullanıcı personası
  
  **Zaman Tahmini:** 1-2 hafta (araştırma toplaması + persona oluşturma + doğrulama)
  
  **Örnek:**
  ```bash
  # Tam persona oluşturma iş akışı
  python ../../product-team/skills/ux-researcher-designer/scripts/persona_generator.py user-research-q4.json > personas.md
  
  # Görüşme analiziyle çapraz referans
  python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interviews-batch.txt > insights.txt
  
  # Yolculuk haritası metodolojisini incele
  cat ../../product-team/skills/ux-researcher-designer/references/journey-mapping-guide.md
  ```
  
  ### İş Akışı 6: Sprint Hikayesi Oluşturma
  
  **Hedef:** Epikleri sprint planlama için hazır INVEST uyumlu kullanıcı hikayelerine ayırmak
  
  **Adımlar:**
  1. **Epiki Tanımla** - Epiki net kapsam ile yapılandır:
     - İş hedefi ve kullanıcı değeri
     - İşlevsel gereksinimler
     - İşlevsel olmayan gereksinimler (performans, güvenlik)
     - Bağımlılıklar ve kısıtlamalar
  
  2. **Hikaye Şablonlarını İncele** - INVEST uyumlu hikaye desenleri yükle
     ```bash
     cat ../../product-team/agile-product-owner/skills/agile-product-owner/references/user-story-templates.md
     ```
  
  3. **Kullanıcı Hikayelerini Oluştur** - Epiki sprint boyuttaki hikayelere böl
     ```bash
     python ../../product-team/agile-product-owner/skills/agile-product-owner/scripts/user_story_generator.py epic.yaml
     ```
  
  4. **Sprint Planlama Rehberini İncele** - Hikayelerin sprint kapasitesine sığdığını emin ol
     ```bash
     cat ../../product-team/agile-product-owner/skills/agile-product-owner/references/sprint-planning-guide.md
     ```
  
  5. **İnceleme ve Tahmin** - Oluşturulan hikayeleri hazırla:
     - Her hikayenin INVEST kriterlerini karşıladığını doğrula (Bağımsız, Müzakere Edilebilir, Değerli, Tahmini Yapılabilir, Küçük, Test Edilebilir)
     - Takım hızına dayalı hikaye puanları ekle
     - Hikayeler arasındaki bağımlılıkları belirle
     - Given/When/Then formatında kabul kriterleri yaz
  
  6. **Sprint için Önceliklendir** - Hikayeleri sıralamak için RICE puanlarını kullan
     ```bash
     python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py sprint-stories.csv --capacity 8
     ```
  
  **Beklenen Çıktı:** Kabul kriterleri, hikaye puanları ve öncelik sırası ile sprint'e hazır INVEST uyumlu kullanıcı hikayelerinin backlog'u
  
  **Zaman Tahmini:** Epic ayrıştırma başına 2-4 saat
  
  **Örnek:**
  ```bash
  # Uçtan uca hikaye oluşturma iş akışı
  python ../../product-team/agile-product-owner/skills/agile-product-owner/scripts/user_story_generator.py onboarding-epic.yaml > stories.md
  
  # Sprint için hikayeleri önceliklendirmek
  python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py stories.csv --capacity 8 > sprint-plan.txt
  
  # Sprint planlama en iyi uygulamalarını incele
  cat ../../product-team/agile-product-owner/skills/agile-product-owner/references/sprint-planning-guide.md
  ```
  
  ### İş Akışı 7: Rekabet Zekası
  
  **Hedef:** Pazar konumlandırması ve özellik açıklarını tanımlamak için rekabet analiz matrisler oluşturmak
  
  **Adımlar:**
  1. **Rakipleri Belirle** - Rekabet ortamını harita et:
     - Doğrudan rakipler (aynı kategori, aynı hedef kitle)
     - Dolaylı rakipler (farklı kategori, aynı yapılacak işi)
     - Yükselen tehditler (startuplar, bitişik ürünler)
  
  2. **Rekabet Verilerini Topla** - Rakip bilgisini CSV'de yapılandır:
     ```csv
     competitor,feature_1,feature_2,feature_3,pricing,market_share
     Competitor A,yes,partial,no,$49/mo,35%
     Competitor B,yes,yes,yes,$99/mo,25%
     Our Product,yes,no,partial,$39/mo,15%
     ```
  
  3. **Rekabet Matrisini Oluştur** - Görsel karşılaştırma oluştur
     ```bash
     python ../../product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py competitors.csv
     ```
  
  4. **Açıkları Analiz Et** - Stratejik fırsatları belirle:
     - Özellik eşitliği açıkları (rakiplerin sahip olduğu ama eksik olan)
     - Farklılaştırma fırsatları (lider olabileceğimiz yerler)
     - Fiyatlandırma konumlandırması (değer vs premium vs bütçe)
     - Hizmet verilmeyen segmentler (karşılanmayan kullanıcı ihtiyaçları)
  
  5. **Önceliklendirmeye Besle** - Açıkları yol haritaya bilgisini yay
     ```bash
     # Rekabet açığı özelliklerini RICE analizine ekle
     python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py competitive-features.csv --capacity 20
     ```
  
  6. **Zamanla Izle** - Rekabet matrisini üç ayda bir güncelle:
     - Rakip piyasaya sürüşleri ve fiyatlandırma değişiklerini izle
     - Güncellenen verilerle matrisi tekrar çalıştır
     - Pazar değişimlerine dayalı konumlandırma stratejisini ayarla
  
  **Beklenen Çıktı:** Özellik karşılaştırması, açık analiz ve yol haritası için öncelikli açık özellikler listesi ile rekabet analiz matrisı
  
  **Zaman Tahmini:** İlk matris 1-2 gün, üç aylık güncellemeler için 2-4 saat
  
  **Örnek:**
  ```bash
  # Tam rekabet zekası iş akışı
  python ../../product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py q4-competitors.csv > competitive-matrix.md
  
  # Rekabet açığı özelliklerini önceliklendir
  python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py gap-features.csv --capacity 12 > competitive-roadmap.txt
  ```
  
  ## Entegrasyon Örnekleri
  
  ### Örnek 1: Haftalık Ürün İnceleme Panosu
  
  ```bash
  #!/bin/bash
  # product-weekly-review.sh - Otomatik ürün metrikler özeti
  
  echo "📊 Haftalık Ürün İncelemesi - $(date +%Y-%m-%d)"
  echo "=========================================="
  
  # Mevcut yol haritası durumu
  echo ""
  echo "🎯 Yol Haritası Öncelikleri (RICE Sırasıyla):"
  python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py current-roadmap.csv --capacity 20
  
  # Son görüşme içgörüleri
  echo ""
  echo "💡 En Son Müşteri İçgörüleri:"
  if [ -f latest-interview.txt ]; then
    python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py latest-interview.txt
  else
    echo "Bu hafta yeni görüşme yok"
  fi
  
  # PRD şablonları kullanılabilir
  echo ""
  echo "📝 PRD Şablonları:"
  echo "Standart PRD, Tek Sayfalık PRD, Özellik Özeti, Agile Epic"
  echo "Konum: ../../product-team/skills/product-manager-toolkit/references/prd_templates.md"
  ```
  
  ### Örnek 2: Keşif Sprint İş Akışı
  
  ```bash
  # Tam keşif sprint'i (2 hafta)
  
  echo "🔍 Keşif Sprint'i - Hafta 1"
  echo "=============================="
  
  # Gün 1-2: Görüşmeleri yürüt
  echo "5 müşteri görüşmesi yürütülüyor..."
  
  # Gün 3-5: İçgörüleri analiz et
  python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-001.txt > insights-001.txt
  python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-002.txt > insights-002.txt
  python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-003.txt > insights-003.txt
  python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-004.txt > insights-004.txt
  python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-005.txt > insights-005.txt
  
  echo ""
  echo "🔍 Keşif Sprint'i - Hafta 2"
  echo "=============================="
  
  # Gün 6-8: Sorunları ve çözümleri önceliklendir
  echo "Çözüm adayları oluşturuluyor..."
  
  # Gün 9-10: RICE önceliklendirmesi
  python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py solution-candidates.csv
  
  echo ""
  echo "✅ Keşif Tamamlandı - PRD oluşturma için hazır"
  ```
  
  ### Örnek 3: Üç Aylık Planlama Otomasyonu
  
  ```bash
  # Üç aylık planlama otomasyon scripti
  
  QUARTER="Q4-2025"
  CAPACITY=18  # insan-ayı
  
  echo "📅 $QUARTER Planlama"
  echo "===================="
  
  # Adım 1: Backlog'u önceliklendir
  echo ""
  echo "1. Özellik Önceliklendirmesi:"
  python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py backlog.csv --capacity $CAPACITY > $QUARTER-roadmap.txt
  
  # Adım 2: Hızlı kazanımları çıkar
  echo ""
  echo "2. Hızlı Kazanımlar (İlk Sevkiyat):"
  grep "Quick Win" $QUARTER-roadmap.txt
  
  # Adım 3: Büyük bahisleri belirle
  echo ""
  echo "3. Büyük Bahisler (Stratejik Yatırımlar):"
  grep "Big Bet" $QUARTER-roadmap.txt
  
  # Adım 4: Özeti oluştur
  echo ""
  echo "4. Üç Aylık Özeti:"
---

# Product Manager Agent

## Purpose

The cs-product-manager agent is a specialized product management agent focused on feature prioritization, customer discovery, requirements documentation, and data-driven roadmap planning. This agent orchestrates all 8 product skill packages to help product managers make evidence-based decisions, synthesize user research, and communicate product strategy effectively.

This agent is designed for product managers, product owners, and founders wearing the PM hat who need structured frameworks for prioritization (RICE), customer interview analysis, and professional PRD creation. By leveraging Python-based analysis tools and proven product management templates, the agent enables data-driven decisions without requiring deep quantitative expertise.

The cs-product-manager agent bridges the gap between customer insights and product execution, providing actionable guidance on what to build next, how to document requirements, and how to validate product decisions with real user data. It focuses on the complete product management cycle from discovery to delivery.

## Skill Integration

**Primary Skill:** `../../product-team/skills/product-manager-toolkit/`

### All Orchestrated Skills

| # | Skill | Location | Primary Tool |
|---|-------|----------|-------------|
| 1 | Product Manager Toolkit | `../../product-team/skills/product-manager-toolkit/` | rice_prioritizer.py, customer_interview_analyzer.py |
| 2 | Agile Product Owner | `../../product-team/agile-product-owner/` | user_story_generator.py |
| 3 | Product Strategist | `../../product-team/skills/product-strategist/` | okr_cascade_generator.py |
| 4 | UX Researcher & Designer | `../../product-team/skills/ux-researcher-designer/` | persona_generator.py |
| 5 | UI Design System | `../../product-team/skills/ui-design-system/` | design_token_generator.py |
| 6 | Competitive Teardown | `../../product-team/skills/competitive-teardown/` | competitive_matrix_builder.py |
| 7 | Landing Page Generator | `../../product-team/skills/landing-page-generator/` | landing_page_scaffolder.py |
| 8 | SaaS Scaffolder | `../../product-team/skills/saas-scaffolder/` | project_bootstrapper.py |

### Python Tools

1. **RICE Prioritizer**
   - **Purpose:** RICE framework implementation for feature prioritization with portfolio analysis and capacity planning
   - **Path:** `../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py`
   - **Usage:** `python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py features.csv --capacity 20`
   - **Formula:** RICE Score = (Reach × Impact × Confidence) / Effort
   - **Features:** Portfolio analysis (quick wins vs big bets), quarterly roadmap generation, capacity planning, JSON/CSV export
   - **Use Cases:** Feature prioritization, roadmap planning, stakeholder alignment, resource allocation

2. **Customer Interview Analyzer**
   - **Purpose:** NLP-based interview transcript analysis to extract pain points, feature requests, and themes
   - **Path:** `../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py`
   - **Usage:** `python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview.txt`
   - **Features:** Pain point extraction with severity, feature request identification, jobs-to-be-done patterns, sentiment analysis, theme extraction
   - **Use Cases:** User research synthesis, discovery validation, problem prioritization, insight generation

3. **User Story Generator**
   - **Purpose:** Break epics into INVEST-compliant user stories with acceptance criteria
   - **Path:** `../../product-team/agile-product-owner/skills/agile-product-owner/scripts/user_story_generator.py`
   - **Usage:** `python ../../product-team/agile-product-owner/skills/agile-product-owner/scripts/user_story_generator.py epic.yaml`
   - **Use Cases:** Sprint planning, backlog refinement, story decomposition

4. **OKR Cascade Generator**
   - **Purpose:** Generate cascaded OKRs from company objectives to team-level key results
   - **Path:** `../../product-team/skills/product-strategist/scripts/okr_cascade_generator.py`
   - **Usage:** `python ../../product-team/skills/product-strategist/scripts/okr_cascade_generator.py growth`
   - **Use Cases:** Quarterly planning, strategic alignment, goal setting

5. **Persona Generator**
   - **Purpose:** Create data-driven user personas from research inputs
   - **Path:** `../../product-team/skills/ux-researcher-designer/scripts/persona_generator.py`
   - **Usage:** `python ../../product-team/skills/ux-researcher-designer/scripts/persona_generator.py research-data.json`
   - **Use Cases:** User research synthesis, persona development, journey mapping

6. **Design Token Generator**
   - **Purpose:** Generate design tokens for consistent UI implementation
   - **Path:** `../../product-team/skills/ui-design-system/scripts/design_token_generator.py`
   - **Usage:** `python ../../product-team/skills/ui-design-system/scripts/design_token_generator.py theme.json`
   - **Use Cases:** Design system creation, developer handoff, theming

7. **Competitive Matrix Builder**
   - **Purpose:** Build competitive analysis matrices and feature comparison grids
   - **Path:** `../../product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py`
   - **Usage:** `python ../../product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py competitors.csv`
   - **Use Cases:** Competitive intelligence, market positioning, feature gap analysis

8. **Landing Page Scaffolder**
   - **Purpose:** Generate conversion-optimized landing page scaffolds
   - **Path:** `../../product-team/skills/landing-page-generator/scripts/landing_page_scaffolder.py`
   - **Usage:** `python ../../product-team/skills/landing-page-generator/scripts/landing_page_scaffolder.py config.yaml`
   - **Use Cases:** Product launches, A/B testing, GTM campaigns

9. **Project Bootstrapper**
   - **Purpose:** Scaffold SaaS project structures with boilerplate and configurations
   - **Path:** `../../product-team/skills/saas-scaffolder/scripts/project_bootstrapper.py`
   - **Usage:** `python ../../product-team/skills/saas-scaffolder/scripts/project_bootstrapper.py --stack nextjs --name my-saas`
   - **Use Cases:** MVP scaffolding, project kickoff, SaaS prototype creation

### Knowledge Bases

1. **PRD Templates**
   - **Location:** `../../product-team/skills/product-manager-toolkit/references/prd_templates.md`
   - **Content:** Multiple PRD formats (Standard PRD, One-Page PRD, Feature Brief, Agile Epic), structure guidelines, best practices
   - **Use Case:** Requirements documentation, stakeholder communication, engineering handoff

2. **Sprint Planning Guide**
   - **Location:** `../../product-team/agile-product-owner/skills/agile-product-owner/references/sprint-planning-guide.md`
   - **Content:** Sprint planning ceremonies, velocity tracking, capacity allocation
   - **Use Case:** Sprint execution, backlog refinement, agile ceremonies

3. **User Story Templates**
   - **Location:** `../../product-team/agile-product-owner/skills/agile-product-owner/references/user-story-templates.md`
   - **Content:** INVEST-compliant story formats, acceptance criteria patterns, story splitting techniques
   - **Use Case:** Story writing, backlog grooming, definition of done

4. **OKR Framework**
   - **Location:** `../../product-team/skills/product-strategist/references/okr_framework.md`
   - **Content:** OKR methodology, cascade patterns, scoring guidelines
   - **Use Case:** Quarterly planning, strategic alignment, goal tracking

5. **Strategy Types**
   - **Location:** `../../product-team/skills/product-strategist/references/strategy_types.md`
   - **Content:** Product strategy frameworks, competitive positioning, growth strategies
   - **Use Case:** Strategic planning, market analysis, product vision

6. **Persona Methodology**
   - **Location:** `../../product-team/skills/ux-researcher-designer/references/persona-methodology.md`
   - **Content:** Research-backed persona creation methodology, data collection, validation
   - **Use Case:** Persona development, user segmentation, research planning

7. **Example Personas**
   - **Location:** `../../product-team/skills/ux-researcher-designer/references/example-personas.md`
   - **Content:** Sample persona documents with demographics, goals, pain points, behaviors
   - **Use Case:** Persona templates, research documentation

8. **Journey Mapping Guide**
   - **Location:** `../../product-team/skills/ux-researcher-designer/references/journey-mapping-guide.md`
   - **Content:** Customer journey mapping methodology, touchpoint analysis, emotion mapping
   - **Use Case:** Experience design, touchpoint optimization, service design

9. **Usability Testing Frameworks**
   - **Location:** `../../product-team/skills/ux-researcher-designer/references/usability-testing-frameworks.md`
   - **Content:** Usability test planning, task design, analysis methods
   - **Use Case:** Usability studies, prototype validation, UX evaluation

10. **Component Architecture**
    - **Location:** `../../product-team/skills/ui-design-system/references/component-architecture.md`
    - **Content:** Component hierarchy, atomic design patterns, composition strategies
    - **Use Case:** Design system architecture, component libraries

11. **Developer Handoff**
    - **Location:** `../../product-team/skills/ui-design-system/references/developer-handoff.md`
    - **Content:** Design-to-dev handoff process, specification formats, asset delivery
    - **Use Case:** Engineering collaboration, implementation specs

12. **Responsive Calculations**
    - **Location:** `../../product-team/skills/ui-design-system/references/responsive-calculations.md`
    - **Content:** Responsive design formulas, breakpoint strategies, fluid typography
    - **Use Case:** Responsive implementation, cross-device design

13. **Token Generation**
    - **Location:** `../../product-team/skills/ui-design-system/references/token-generation.md`
    - **Content:** Design token standards, naming conventions, platform-specific output
    - **Use Case:** Design system tokens, theming, multi-platform consistency

## Workflows

### Workflow 1: Feature Prioritization & Roadmap Planning

**Goal:** Prioritize feature backlog using RICE framework and generate quarterly roadmap

**Steps:**
1. **Gather Feature Requests** - Collect from multiple sources:
   - Customer feedback (support tickets, interviews)
   - Sales team requests
   - Technical debt items
   - Strategic initiatives
   - Competitive gaps

2. **Create RICE Input CSV** - Structure features with RICE parameters:
   ```csv
   feature,reach,impact,confidence,effort
   User Dashboard,500,3,0.8,5
   API Rate Limiting,1000,2,0.9,3
   Dark Mode,300,1,1.0,2
   ```
   - **Reach**: Number of users affected per quarter
   - **Impact**: massive(3), high(2), medium(1.5), low(1), minimal(0.5)
   - **Confidence**: high(1.0), medium(0.8), low(0.5)
   - **Effort**: person-months (XL=6, L=3, M=1, S=0.5, XS=0.25)

3. **Run RICE Prioritization** - Execute analysis with team capacity
   ```bash
   python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py features.csv --capacity 20
   ```

4. **Analyze Portfolio** - Review output for:
   - **Quick Wins**: High RICE, low effort (ship first)
   - **Big Bets**: High RICE, high effort (strategic investments)
   - **Fill-Ins**: Medium RICE (capacity fillers)
   - **Money Pits**: Low RICE, high effort (avoid or revisit)

5. **Generate Quarterly Roadmap**:
   - Q1: Top quick wins + 1-2 big bets
   - Q2-Q4: Remaining prioritized features
   - Buffer: 20% capacity for unknowns

6. **Stakeholder Alignment** - Present roadmap with:
   - RICE scores as justification
   - Trade-off decisions explained
   - Capacity constraints visible

**Expected Output:** Data-driven quarterly roadmap with RICE-justified priorities and portfolio balance

**Time Estimate:** 4-6 hours for complete prioritization cycle (20-30 features)

**Example:**
```bash
# Complete prioritization workflow
python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py q4-features.csv --capacity 20 > roadmap.txt
cat roadmap.txt
# Review quick wins, big bets, and generate quarterly plan
```

### Workflow 2: Customer Discovery & Interview Analysis

**Goal:** Conduct customer interviews, extract insights, and identify high-priority problems

**Steps:**
1. **Conduct User Interviews** - Semi-structured format:
   - **Opening**: Build rapport, explain purpose
   - **Context**: Current workflow and challenges
   - **Problems**: Deep dive on pain points (not solutions!)
   - **Solutions**: Reaction to concepts (if applicable)
   - **Closing**: Next steps, thank you
   - **Duration**: 30-45 minutes per interview
   - **Record**: With permission for analysis

2. **Transcribe Interviews** - Convert audio to text:
   - Use transcription service (Otter.ai, Rev, etc.)
   - Clean up for clarity (remove filler words)
   - Save as plain text file

3. **Run Interview Analyzer** - Extract structured insights
   ```bash
   python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-001.txt
   ```

4. **Review Analysis Output** - Study extracted insights:
   - **Pain Points**: Severity-scored problems
   - **Feature Requests**: Priority-ranked asks
   - **Jobs-to-be-Done**: User goals and motivations
   - **Sentiment**: Overall satisfaction level
   - **Themes**: Recurring topics across interviews
   - **Key Quotes**: Direct user language

5. **Synthesize Across Interviews** - Aggregate insights:
   ```bash
   # Analyze multiple interviews
   python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-001.txt json > insights-001.json
   python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-002.txt json > insights-002.json
   python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-003.txt json > insights-003.json
   # Aggregate JSON files to find patterns
   ```

6. **Prioritize Problems** - Identify which pain points to solve:
   - Frequency: How many users mentioned it?
   - Severity: How painful is the problem?
   - Strategic fit: Aligns with company vision?
   - Solvability: Can we build a solution?

7. **Validate Solutions** - Test hypotheses before building:
   - Create mockups or prototypes
   - Show to users, observe reactions
   - Measure willingness to pay/adopt

**Expected Output:** Prioritized list of validated problems with user quotes and evidence

**Time Estimate:** 2-3 weeks for complete discovery (10-15 interviews + analysis)

### Workflow 3: PRD Development & Stakeholder Communication

**Goal:** Document requirements professionally with clear scope, metrics, and acceptance criteria

**Steps:**
1. **Choose PRD Template** - Select based on complexity:
   ```bash
   cat ../../product-team/skills/product-manager-toolkit/references/prd_templates.md
   ```
   - **Standard PRD**: Complex features (6-8 weeks dev)
   - **One-Page PRD**: Simple features (2-4 weeks)
   - **Feature Brief**: Exploration phase (1 week)
   - **Agile Epic**: Sprint-based delivery

2. **Document Problem** - Start with why (not how):
   - User problem statement (jobs-to-be-done format)
   - Evidence from interviews (quotes, data)
   - Current workarounds and pain points
   - Business impact (revenue, retention, efficiency)

3. **Define Solution** - Describe what we'll build:
   - High-level solution approach
   - User flows and key interactions
   - Technical architecture (if relevant)
   - Design mockups or wireframes
   - **Critically: What's OUT of scope**

4. **Set Success Metrics** - Define how we'll measure success:
   - **Leading indicators**: Usage, adoption, engagement
   - **Lagging indicators**: Revenue, retention, NPS
   - **Target values**: Specific, measurable goals
   - **Timeframe**: When we expect to hit targets

5. **Write Acceptance Criteria** - Clear definition of done:
   - Given/When/Then format for each user story
   - Edge cases and error states
   - Performance requirements
   - Accessibility standards

6. **Collaborate with Stakeholders**:
   - **Engineering**: Feasibility review, effort estimation
   - **Design**: User experience validation
   - **Sales/Marketing**: Go-to-market alignment
   - **Support**: Operational readiness

7. **Iterate Based on Feedback** - Incorporate input:
   - Technical constraints → Adjust scope
   - Design insights → Refine user flows
   - Market feedback → Validate assumptions

**Expected Output:** Complete PRD with problem, solution, metrics, acceptance criteria, and stakeholder sign-off

**Time Estimate:** 1-2 weeks for comprehensive PRD (iterative process)

### Workflow 4: Quarterly Planning & OKR Setting

**Goal:** Plan quarterly product goals with prioritized initiatives and success metrics

**Steps:**
1. **Review Company OKRs** - Align product goals to business objectives:
   - Review CEO/executive OKRs for quarter
   - Identify product contribution areas
   - Understand strategic priorities

2. **Run Feature Prioritization** - Use RICE for candidate features
   ```bash
   python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py q4-candidates.csv --capacity 18
   ```

3. **Generate OKR Cascade** - Use the OKR cascade generator to create aligned objectives
   ```bash
   python ../../product-team/skills/product-strategist/scripts/okr_cascade_generator.py growth
   ```

4. **Define Product OKRs** - Set ambitious but achievable goals:
   - **Objective**: Qualitative, inspirational (e.g., "Become the easiest platform to onboard")
   - **Key Results**: Quantitative, measurable (e.g., "Reduce onboarding time from 30min to 10min")
   - **Initiatives**: Features that drive key results
   - **Metrics**: How we'll track progress weekly

5. **Capacity Planning** - Allocate team resources:
   - Engineering capacity: Person-months available
   - Design capacity: UI/UX support needed
   - Buffer allocation: 20% for bugs, support, unknowns
   - Dependency tracking: External blockers

6. **Risk Assessment** - Identify what could go wrong:
   - Technical risks (scalability, performance)
   - Market risks (competition, demand)
   - Execution risks (dependencies, team velocity)
   - Mitigation plans for each risk

7. **Stakeholder Review** - Present quarterly plan:
   - OKRs with supporting initiatives
   - RICE-justified priorities
   - Resource allocation and capacity
   - Risks and mitigation strategies
   - Success metrics and tracking cadence

8. **Track Progress** - Weekly OKR check-ins:
   - Update key result progress
   - Adjust priorities if needed
   - Communicate blockers early

**Expected Output:** Quarterly OKRs with prioritized roadmap, capacity plan, and risk mitigation

**Time Estimate:** 1 week for quarterly planning (last week of previous quarter)

### Workflow 5: User Research to Personas

**Goal:** Generate data-driven personas from user research to align the team on target users

**Steps:**
1. **Collect Research Data** - Aggregate findings from interviews, surveys, and analytics:
   - Interview transcripts and notes
   - Survey responses and demographics
   - Behavioral analytics (usage patterns, feature adoption)
   - Support ticket themes

2. **Review Persona Methodology** - Understand research-backed persona creation
   ```bash
   cat ../../product-team/skills/ux-researcher-designer/references/persona-methodology.md
   ```

3. **Generate Personas** - Create structured personas from research inputs
   ```bash
   python ../../product-team/skills/ux-researcher-designer/scripts/persona_generator.py research-data.json
   ```

4. **Map Customer Journeys** - Reference journey mapping guide for each persona
   ```bash
   cat ../../product-team/skills/ux-researcher-designer/references/journey-mapping-guide.md
   ```

5. **Review Example Personas** - Compare output against proven persona formats
   ```bash
   cat ../../product-team/skills/ux-researcher-designer/references/example-personas.md
   ```

6. **Validate and Iterate** - Share personas with stakeholders:
   - Cross-reference with interview insights from customer_interview_analyzer.py
   - Verify demographics and behaviors match real user data
   - Update personas quarterly as new research emerges

**Expected Output:** 3-5 data-driven user personas with demographics, goals, pain points, behaviors, and mapped customer journeys

**Time Estimate:** 1-2 weeks (research collection + persona generation + validation)

**Example:**
```bash
# Complete persona generation workflow
python ../../product-team/skills/ux-researcher-designer/scripts/persona_generator.py user-research-q4.json > personas.md

# Cross-reference with interview analysis
python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interviews-batch.txt > insights.txt

# Review journey mapping methodology
cat ../../product-team/skills/ux-researcher-designer/references/journey-mapping-guide.md
```

### Workflow 6: Sprint Story Generation

**Goal:** Break epics into INVEST-compliant user stories ready for sprint planning

**Steps:**
1. **Define the Epic** - Structure epic with clear scope and acceptance criteria:
   - Business objective and user value
   - Functional requirements
   - Non-functional requirements (performance, security)
   - Dependencies and constraints

2. **Review Story Templates** - Load INVEST-compliant story patterns
   ```bash
   cat ../../product-team/agile-product-owner/skills/agile-product-owner/references/user-story-templates.md
   ```

3. **Generate User Stories** - Break the epic into sprint-sized stories
   ```bash
   python ../../product-team/agile-product-owner/skills/agile-product-owner/scripts/user_story_generator.py epic.yaml
   ```

4. **Review Sprint Planning Guide** - Ensure stories fit sprint capacity
   ```bash
   cat ../../product-team/agile-product-owner/skills/agile-product-owner/references/sprint-planning-guide.md
   ```

5. **Refine and Estimate** - Groom generated stories:
   - Verify each story meets INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable)
   - Add story points based on team velocity
   - Identify dependencies between stories
   - Write acceptance criteria in Given/When/Then format

6. **Prioritize for Sprint** - Use RICE scores to sequence stories
   ```bash
   python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py sprint-stories.csv --capacity 8
   ```

**Expected Output:** Sprint-ready backlog of INVEST-compliant user stories with acceptance criteria, story points, and priority order

**Time Estimate:** 2-4 hours per epic decomposition

**Example:**
```bash
# End-to-end story generation workflow
python ../../product-team/agile-product-owner/skills/agile-product-owner/scripts/user_story_generator.py onboarding-epic.yaml > stories.md

# Prioritize stories for sprint
python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py stories.csv --capacity 8 > sprint-plan.txt

# Review sprint planning best practices
cat ../../product-team/agile-product-owner/skills/agile-product-owner/references/sprint-planning-guide.md
```

### Workflow 7: Competitive Intelligence

**Goal:** Build competitive analysis matrices to identify market positioning and feature gaps

**Steps:**
1. **Identify Competitors** - Map the competitive landscape:
   - Direct competitors (same category, same audience)
   - Indirect competitors (different category, same job-to-be-done)
   - Emerging threats (startups, adjacent products)

2. **Gather Competitive Data** - Structure competitor information in CSV:
   ```csv
   competitor,feature_1,feature_2,feature_3,pricing,market_share
   Competitor A,yes,partial,no,$49/mo,35%
   Competitor B,yes,yes,yes,$99/mo,25%
   Our Product,yes,no,partial,$39/mo,15%
   ```

3. **Build Competitive Matrix** - Generate visual comparison
   ```bash
   python ../../product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py competitors.csv
   ```

4. **Analyze Gaps** - Identify strategic opportunities:
   - Feature parity gaps (what competitors have that we lack)
   - Differentiation opportunities (where we can lead)
   - Pricing positioning (value vs premium vs budget)
   - Underserved segments (unmet user needs)

5. **Feed Into Prioritization** - Use gaps to inform roadmap
   ```bash
   # Add competitive gap features to RICE analysis
   python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py competitive-features.csv --capacity 20
   ```

6. **Track Over Time** - Update competitive matrix quarterly:
   - Monitor competitor launches and pricing changes
   - Re-run matrix builder with updated data
   - Adjust positioning strategy based on market shifts

**Expected Output:** Competitive analysis matrix with feature comparison, gap analysis, and prioritized list of competitive features for the roadmap

**Time Estimate:** 1-2 days for initial matrix, 2-4 hours for quarterly updates

**Example:**
```bash
# Full competitive intelligence workflow
python ../../product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py q4-competitors.csv > competitive-matrix.md

# Prioritize competitive gap features
python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py gap-features.csv --capacity 12 > competitive-roadmap.txt
```

## Integration Examples

### Example 1: Weekly Product Review Dashboard

```bash
#!/bin/bash
# product-weekly-review.sh - Automated product metrics summary

echo "📊 Weekly Product Review - $(date +%Y-%m-%d)"
echo "=========================================="

# Current roadmap status
echo ""
echo "🎯 Roadmap Priorities (RICE Sorted):"
python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py current-roadmap.csv --capacity 20

# Recent interview insights
echo ""
echo "💡 Latest Customer Insights:"
if [ -f latest-interview.txt ]; then
  python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py latest-interview.txt
else
  echo "No new interviews this week"
fi

# PRD templates available
echo ""
echo "📝 PRD Templates:"
echo "Standard PRD, One-Page PRD, Feature Brief, Agile Epic"
echo "Location: ../../product-team/skills/product-manager-toolkit/references/prd_templates.md"
```

### Example 2: Discovery Sprint Workflow

```bash
# Complete discovery sprint (2 weeks)

echo "🔍 Discovery Sprint - Week 1"
echo "=============================="

# Day 1-2: Conduct interviews
echo "Conducting 5 customer interviews..."

# Day 3-5: Analyze insights
python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-001.txt > insights-001.txt
python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-002.txt > insights-002.txt
python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-003.txt > insights-003.txt
python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-004.txt > insights-004.txt
python ../../product-team/skills/product-manager-toolkit/scripts/customer_interview_analyzer.py interview-005.txt > insights-005.txt

echo ""
echo "🔍 Discovery Sprint - Week 2"
echo "=============================="

# Day 6-8: Prioritize problems and solutions
echo "Creating solution candidates..."

# Day 9-10: RICE prioritization
python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py solution-candidates.csv

echo ""
echo "✅ Discovery Complete - Ready for PRD creation"
```

### Example 3: Quarterly Planning Automation

```bash
# Quarterly planning automation script

QUARTER="Q4-2025"
CAPACITY=18  # person-months

echo "📅 $QUARTER Planning"
echo "===================="

# Step 1: Prioritize backlog
echo ""
echo "1. Feature Prioritization:"
python ../../product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py backlog.csv --capacity $CAPACITY > $QUARTER-roadmap.txt

# Step 2: Extract quick wins
echo ""
echo "2. Quick Wins (Ship First):"
grep "Quick Win" $QUARTER-roadmap.txt

# Step 3: Identify big bets
echo ""
echo "3. Big Bets (Strategic Investments):"
grep "Big Bet" $QUARTER-roadmap.txt

# Step 4: Generate summary
echo ""
echo "4. Quarterly Summary:"
echo "Capacity: $CAPACITY person-months"
echo "Features: $(wc -l < backlog.csv)"
echo "Report: $QUARTER-roadmap.txt"
```

## Success Metrics

**Prioritization Effectiveness:**
- **Decision Speed:** <2 days from backlog review to roadmap commitment
- **Stakeholder Alignment:** >90% stakeholder agreement on priorities
- **RICE Validation:** 80%+ of shipped features match predicted impact
- **Portfolio Balance:** 40% quick wins, 40% big bets, 20% fill-ins

**Discovery Quality:**
- **Interview Volume:** 10-15 interviews per discovery sprint
- **Insight Extraction:** 5-10 high-priority pain points identified
- **Problem Validation:** 70%+ of prioritized problems validated before build
- **Time to Insight:** <1 week from interviews to prioritized problem list

**Requirements Quality:**
- **PRD Completeness:** 100% of PRDs include problem, solution, metrics, acceptance criteria
- **Stakeholder Review:** <3 days average PRD review cycle
- **Engineering Clarity:** >90% of PRDs require no clarification during development
- **Scope Accuracy:** >80% of features ship within original scope estimate

**Business Impact:**
- **Feature Adoption:** >60% of users adopt new features within 30 days
- **Problem Resolution:** >70% reduction in pain point severity post-launch
- **Revenue Impact:** Track revenue/retention lift from prioritized features
- **Development Efficiency:** 30%+ reduction in rework due to clear requirements

## Related Agents

- [cs-agile-product-owner](https://github.com/alirezarezvani/claude-skills/blob/HEAD/cs-agile-product-owner.md) - Sprint planning and user story generation
- [cs-product-strategist](https://github.com/alirezarezvani/claude-skills/blob/HEAD/cs-product-strategist.md) - OKR cascade and strategic planning
- [cs-ux-researcher](https://github.com/alirezarezvani/claude-skills/blob/HEAD/cs-ux-researcher.md) - Persona generation and user research

## References

- **Skill Documentation:** [../../product-team/skills/product-manager-toolkit/SKILL.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/product-team/skills/product-manager-toolkit/SKILL.md)
- **Product Domain Guide:** [../../product-team/CLAUDE.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/product-team/CLAUDE.md)
- **Agent Development Guide:** [../CLAUDE.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/CLAUDE.md)

---

**Last Updated:** March 9, 2026
**Status:** Production Ready
**Version:** 2.0
