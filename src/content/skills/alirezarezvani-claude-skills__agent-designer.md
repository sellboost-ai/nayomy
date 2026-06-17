---
name: "agent-designer"
description_en: "Use when the user asks to design a multi-agent system, pick an orchestration pattern (supervisor/swarm/pipeline), generate tool schemas for agents, or evaluate agent execution logs for cost, latency, and failure bottlenecks. Examples: 'design an agent architecture for research automation', 'generate Anthropic tool schemas from these tool descriptions', 'analyze these agent run logs for bottlenecks"
description_tr: "Multi-agent sistem tasarlamak, orchestration pattern'ı seçmek (supervisor/swarm/pipeline), agentlar için tool schema'ları üretmek veya agent execution log'larını maliyet, latency ve failure bottleneck'leri açısından değerlendirmek için kullanın. Örnekler: 'araştırma otomasyonu için agent mimarisi tasarla', 'bu tool açıklamalarından Anthropic tool schema'ları oluştur', 'bu agent run log'larını bottleneck'ler için analiz et'."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/agent-designer/SKILL.md"
path: ".gemini/skills/agent-designer/SKILL.md"
is_collection: false
body_length: 3647
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Agent Designer - Multi-Agent Sistem Mimarisi
  
  **Tier:** POWERFUL  
  **Category:** Engineering  
  **Tags:** AI agents, architecture, system design, orchestration, multi-agent systems
  
  ## Genel Bakış
  
  Agent Designer, multi-agent sistemleri tasarlamak, mimarlandırmak ve değerlendirmek için kapsamlı bir araç setidir. Agent mimarisi desenleri, tool tasarım ilkeleri, iletişim stratejileri ve sağlam, ölçeklenebilir AI agent sistemleri oluşturmak için performans değerlendirme çerçeveleri sunar.
  
  ## Temel Yetenekler
  
  ### 1. Agent Mimarisi Desenleri
  
  #### Tek Agent Deseni
  - **Kullanım Durumu:** Net sınırları olan basit, odaklanmış görevler
  - **Artıları:** Minimum karmaşıklık, kolay hata ayıklaması, öngörülebilir davranış
  - **Eksileri:** Sınırlı ölçeklenebilirlik, tek hata noktası
  - **Uygulama:** Kapsamlı tool erişimiyle doğrudan kullanıcı-agent etkileşimi
  
  #### Supervisor Deseni
  - **Kullanım Durumu:** Merkezi kontrol ile hiyerarşik görev ayrıştırması
  - **Mimarisi:** Birden fazla uzman agenti koordine eden bir supervisor agent
  - **Artıları:** Net komuta yapısı, merkezi karar verme
  - **Eksileri:** Supervisor darboğazı, karmaşık koordinasyon mantığı
  - **Uygulama:** Supervisor görevleri alır, uzmanlar arasında dağıtır, sonuçları toplar
  
  #### Swarm Deseni
  - **Kullanım Durumu:** Peer-to-peer işbirliğiyle dağıtık problem çözme
  - **Mimarisi:** Paylaşılan hedefleri olan birden fazla otonom agent
  - **Artıları:** Yüksek paralelizm, hata toleransı, ortaya çıkan zeka
  - **Eksileri:** Karmaşık koordinasyon, olası çatışmalar, tahmin etmesi daha zor
  - **Uygulama:** Agent keşfi, fikir birliği mekanizmaları, dağıtık görev tahsisi
  
  #### Hiyerarşik Deseni
  - **Kullanım Durumu:** Birden fazla organizasyonel katmana sahip karmaşık sistemler
  - **Mimarisi:** Farklı seviyelerde yöneticiler ve çalışanlar içeren ağaç yapısı
  - **Artıları:** Doğal organizasyonel eşleme, net sorumluluklar
  - **Eksileri:** İletişim yükü, her seviyede olası darboğazlar
  - **Uygulama:** Geri bildirim döngüleriyle çok seviyeli delegasyon
  
  #### Pipeline Deseni
  - **Kullanım Durumu:** Uzmanlaşmış aşamalarla sıralı işleme
  - **Mimarisi:** İşleme pipeline'ında düzenlenmiş agentler
  - **Artıları:** Net veri akışı, aşama başına uzmanlaşmış optimizasyon
  - **Eksileri:** Sıralı darboğazlar, katı işleme sırası
  - **Uygulama:** Aşamalar arasında message queue'lar, durum el değiştirmeler
  
  ### 2. Agent Rol Tanımı
  
  #### Rol Belirleme Çerçevesi
  - **Kimlik:** Ad, amaç ifadesi, temel yetkinlikler
  - **Sorumluluklar:** Birincil görevler, karar sınırları, başarı kriterleri
  - **Yetenekler:** Gerekli toollar, bilgi alanları, işleme limitleri
  - **Arayüzler:** Giriş/çıkış formatları, iletişim protokolleri
  - **Kısıtlamalar:** Güvenlik sınırları, kaynak limitleri, işletim yönergeleri
  
  #### Yaygın Agent Arketipler
  
  **Koordinatör Agent**
  - Multi-agent iş akışlarını düzenler
  - Üst düzey kararlar ve kaynak tahsisi yapar
  - Sistem sağlığı ve performansını izler
  - Escalation'ları ve çatışma çözümünü ele alır
  
  **Uzman Agent**
  - Belirli bir alanda derin uzmanlık (kod, veri, araştırma)
  - Uzmanlaşmış görevler için optimize edilmiş toollar ve bilgi
  - Dar kapsam içinde yüksek kaliteli çıktı
  - Kapsam dışı istekler için net el değiştirme protokolleri
  
  **Interface Agent**
  - Dış etkileşimleri ele alır (kullanıcılar, API'lar, sistemler)
  - Protokol çevirisi ve format dönüşümü
  - Kimlik doğrulaması ve yetkilendirme yönetimi
  - Kullanıcı deneyimi optimizasyonu
  
  **Monitor Agent**
  - Sistem sağlığı izleme ve uyarı
  - Performans metrikleri toplama ve analiz
  - Anomali algılama ve raporlama
  - Uyumluluk ve denetim izi bakımı
  
  ### 3. Tool Tasarım İlkeleri
  
  #### Şema Tasarımı
  - **Giriş Doğrulaması:** Güçlü yazma, gerekli ve isteğe bağlı parametreler
  - **Çıktı Tutarlılığı:** Standardize yanıt formatları, hata işleme
  - **Dokümantasyon:** Net açıklamalar, kullanım örnekleri, sınır durumları
  - **Versiyonlama:** Geriye dönük uyumluluk, geçiş yolları
  
  #### Hata İşleme Desenleri
  - **Zarifçe Bozulma:** Bağımlılıklar başarısız olduğunda kısmi işlevsellik
  - **Retry Mantığı:** Üstel geri gitme, circuit breaker'lar, maksimum denemeler
  - **Hata Yayılması:** Yapılandırılmış hata yanıtları, hata sınıflandırması
  - **Kurtarma Stratejileri:** Fallback yöntemleri, alternatif yaklaşımlar
  
  #### İdempotans Gereksinimleri
  - **Güvenli İşlemler:** Yan etkisi olmayan okuma işlemleri
  - **İdempotent Yazma:** Aynı işlem güvenle tekrar edilebilir
  - **Durum Yönetimi:** Versiyon takibi, çatışma çözümü
  - **Atomiklik:** Tümü-ya-da-hiçbir-şey işlem tamamlama
  
  ### 4. İletişim Desenleri
  
  #### Message Passing
  - **Asenkron Mesajlaşma:** Ayrıştırılmış agentler, message queue'lar
  - **Message Formatı:** Metadata içeren yapılandırılmış yük
  - **Teslimat Garantileri:** En-az-bir-kez, tam-bir-kez semantikleri
  - **Yönlendirme:** Doğrudan mesajlaşma, publish-subscribe, broadcast
  
  #### Paylaşılan Durum
  - **Durum Depoları:** Merkezi veri depoları
  - **Tutarlılık Modelleri:** Güçlü, nihai, zayıf tutarlılık
  - **Erişim Desenleri:** Okuma-yoğun, yazma-yoğun, karma iş yükleri
  - **Çatışma Çözümü:** Son-yazar-kazanır, merge stratejileri
  
  #### Event-Driven Mimarisi
  - **Event Sourcing:** Değişmez event logları, durum yeniden yapılandırması
  - **Event Türleri:** Domain event'ları, sistem event'ları, entegrasyon event'ları
  - **Event İşleme:** Gerçek-zaman, batch, stream işleme
  - **Event Şeması:** Versiyonlu event formatları, geriye dönük uyumluluk
  
  ### 5. Guardrail'lar ve Güvenlik
  
  #### Giriş Doğrulaması
  - **Şema Zorlaması:** Gerekli alanlar, tip kontrolü, format doğrulaması
  - **İçerik Filtreleme:** Zararlı içerik algılama, PII temizliği
  - **Rate Limiting:** İstek daraltma, kaynak kotaları
  - **Kimlik Doğrulaması:** Kimlik doğrulama, yetkilendirme kontrolleri
  
  #### Çıktı Filtreleme
  - **İçerik Moderasyonu:** Zararlı içerik kaldırma, kalite kontrolleri
  - **Tutarlılık Doğrulaması:** Mantık kontrolleri, kısıt doğrulaması
  - **Biçimlendirme:** Standardize çıktı formatları, temiz sunum
  - **Denetim Günlüğü:** Karar izleri, uyumluluk kayıtları
  
  #### İnsan-İçin-Döngü
  - **Onay İş Akışları:** Kritik karar kontrol noktaları
  - **Escalation Tetikleyicileri:** Güven eşikleri, risk değerlendirmesi
  - **Geçersiz Kılma Mekanizmaları:** İnsan yargısı önceliği
  - **Geri Bildirim Döngüleri:** İnsan düzeltmeleri sistem davranışını iyileştirir
  
  ### 6. Değerlendirme Çerçeveleri
  
  #### Görev Tamamlama Metrikleri
  - **Başarı Oranı:** Başarıyla tamamlanan görevlerin yüzdesi
  - **Kısmi Tamamlama:** Karmaşık görevler için ilerleme ölçümü
  - **Görev Sınıflandırması:** Görev türüne göre başarı kriterleri
  - **Hata Analizi:** Kök neden tanımlanması ve sınıflandırması
  
  #### Kalite Değerlendirmesi
  - **Çıktı Kalitesi:** Doğruluk, ilgi, bütünlük ölçümleri
  - **Tutarlılık:** Benzer girdiler arasında yanıt değişkenliği
  - **Uyum:** Mantıksal akış ve iç tutarlılık
  - **Kullanıcı Memnuniyeti:** Geri bildirim puanları, kullanım desenleri
  
  #### Maliyet Analizi
  - **Token Kullanımı:** Görev başına giriş/çıktı token tüketimi
  - **API Maliyetleri:** Harici hizmet kullanımı ve ücretleri
  - **Compute Kaynakları:** CPU, bellek, depolama kullanımı
  - **Değer Zamanı:** Başarılı görev başına maliyet
  
  #### Latans Dağılımı
  - **Yanıt Süresi:** Uçtan uca görev tamamlama zamanı
  - **İşleme Aşamaları:** Aşama başına darboğaz tanımlanması
  - **Queue Süreleri:** İşleme pipeline'larında bekleme süreleri
  - **Kaynak Çatışması:** Eşzamanlı işlemlerin etkisi
  
  ### 7. Orchestration Stratejileri
  
  #### Merkezi Orchestration
  - **Workflow Engine:** Merkezi koordinatör tüm agentleri yönetir
  - **Durum Yönetimi:** Merkezi workflow durum takibi
  - **Karar Mantığı:** Karmaşık yönlendirme ve branşing kuralları
  - **İzleme:** Tüm işlemlere kapsamlı görünürlük
  
  #### Desentralize Orchestration
  - **Peer-to-Peer:** Agentler birbirleriyle doğrudan koordine olur
  - **Hizmet Keşfi:** Dinamik agent kaydı ve arama
  - **Fikir Birliği Protokolleri:** Dağıtık karar verme
  - **Hata Toleransı:** Tek hata noktası yok
  
  #### Hibrit Yaklaşımlar
  - **Alan Sınırları:** Alanlar içinde merkezi, alanlar arası federe
  - **Hiyerarşik Koordinasyon:** Birden fazla orchestration seviyesi
  - **Bağlama Bağımlı:** Görev türüne göre strateji seçimi
  - **Load Balancing:** Koordinasyon sorumluluğunu dağıt
  
  ### 8. Bellek Desenleri
  
  #### Kısa Dönem Bellek
  - **Context Window'lar:** Mevcut görevler için çalışan bellek
  - **Session Durum:** Devam eden etkileşimler için geçici veriler
  - **Cache Yönetimi:** Performans optimizasyon stratejileri
  - **Bellek Baskısı:** Kapasite kısıtlamalarının işlenmesi
  
  #### Uzun Dönem Bellek
  - **Kalıcı Depolama:** Seanslar arasında dayanıklı veriler
  - **Bilgi Tabanı:** Birikmiş alan bilgisi
  - **Deneyim Tekrarı:** Geçmiş etkileşimlerden öğrenme
  - **Bellek Konsolidasyonu:** Kısa dönemden uzun döneme transfer
  
  #### Paylaşılan Bellek
  - **İşbirlikçi Bilgi:** Agentler arasında paylaşılan öğrenme
  - **Senkronizasyon:** Tutarlılık bakım stratejileri
  - **Erişim Kontrolü:** İzin tabanlı bellek erişimi
  - **Bellek Bölümlendirmesi:** Agent grupları arasında izolasyon
  
  ### 9. Ölçeklendirme Dikkat Edilecek Noktaları
  
  #### Yatay Ölçeklendirme
  - **Agent Replikasyon:** Aynı agent türünün birden fazla örneği
  - **Yük Dağılımı:** Agent örnekleri arasında istek yönlendirmesi
  - **Kaynak Havuzu:** Paylaşılan compute ve depolama kaynakları
  - **Coğrafi Dağılım:** Multi-region dağıtımlar
  
  #### Dikey Ölçeklendirme
  - **Yetenek Geliştirme:** Daha güçlü bireysel agentler
  - **Tool Genişlemesi:** Agent başına daha geniş tool erişimi
  - **Context Genişlemesi:** Daha geniş çalışan bellek kapasitesi
  - **İşleme Gücü:** Agent başına daha yüksek throughput
  
  #### Performans Optimizasyonu
  - **Caching Stratejileri:** Yanıt caching'i, tool sonuç caching'i
  - **Paralel İşleme:** Eşzamanlı görev yürütme
  - **Kaynak Optimizasyonu:** Verimli kaynak kullanımı
  - **Darboğaz Eliminasyonu:** Sistematik performans ayarlaması
  
  ### 10. Hata İşleme
  
  #### Retry Mekanizmaları
  - **Üstel Geri Gitme:** Retry'lar arasında artan gecikmeler
  - **Jitter:** Thundering herd'ü önlemek için rastgele gecikme varyasyonu
  - **Maksimum Denemeler:** Sınırlanmış retry davranışı
  - **Retry Koşulları:** Geçici vs kalıcı hata sınıflandırması
  
  #### Fallback Stratejileri
  - **Zarifçe Bozulma:** Sistemler başarısız olduğunda azalmış işlevsellik
  - **Alternatif Yaklaşımlar:** Aynı hedefler için farklı yöntemler
  - **Varsayılan Yanıtlar:** Güvenli fallback davranışları
  - **Kullanıcı İletişimi:** Net hata mesajlaşması
  
  #### Circuit Breaker'lar
  - **Hata Algılama:** Hata oranları ve yanıt sürelerinin izlenmesi
  - **Durum Yönetimi:** Açık, kapalı, yarı-açık circuit durumları
  - **Kurtarma Testi:** Normal işletmeye kademeli dönüş
  - **Cascading Hata Önleme:** Upstream sistemleri koruma
  
  ## Uygulama Yönergeleri
  
  ### Mimari Karar Verme Süreci
  1. **Gereksinimler Analizi:** Sistem hedeflerini, kısıtlamalarını, ölçeğini anlama
  2. **Desen Seçimi:** Uygun mimari desen seçme
  3. **Agent Tasarımı:** Rolleri, sorumlulukları, arayüzleri tanımlama
  4. **Tool Mimarisi:** Tool şemaları ve hata işleme tasarlama
  5. **İletişim Tasarımı:** Message desenleri ve protokolleri seçme
  6. **Güvenlik Uygulaması:** Guardrail'lar ve doğrulama oluşturma
  7. **Değerlendirme Planlaması:** Başarı metriklerini ve izlemeyi tanımlama
  8. **Dağıtım Stratejisi:** Ölçeklendirme ve hata işleme planı yapma
  
  ### Kalite Güvencesi
  - **Test Stratejisi:** Unit, entegrasyon ve sistem test yaklaşımları
  - **İzleme:** Gerçek-zaman sistem sağlığı ve performans takibi
  - **Dokümantasyon:** Mimari dokümantasyon ve runbook'lar
  - **Güvenlik İncelemesi:** Tehdit modelleme ve güvenlik değerlendirmeleri
  
  ### Sürekli İyileştirme
  - **Performans İzleme:** Devam eden sistem performans analizi
  - **Kullanıcı Geri Bildirimi:** Kullanıcı deneyimi iyileştirmelerini dahil etme
  - **A/B Testi:** Sistem iyileştirmeleri için kontrol deneyler
  - **Bilgi Tabanı Güncellemeleri:** Sürekli öğrenme ve adaptasyon
  
  Bu yetenek, karmaşık görevleri ele alırken güvenlik, güvenilirlik ve performansı ölçekte koruyan sağlam, ölçeklenebilir multi-agent sistemleri tasarlamak için temel oluşturur.
---

# Agent Designer — Multi-Agent System Architecture

Design, schema-generate, and evaluate multi-agent systems with three deterministic tools. The scripts are the workflow — do not freehand an architecture when the planner can score one from requirements.

## When to use

- Designing a new multi-agent system from requirements (pattern choice, roles, comms)
- Generating provider-ready tool schemas (Anthropic + OpenAI formats) from plain tool descriptions
- Evaluating execution logs: success rate, latency distribution, cost, bottlenecks

**When NOT to use:** Claude Code Workflow-tool automations → `workflow-builder`; single-agent workflow scaffolds → `agent-workflow-designer`; multi-agent fan-out at runtime → `agenthub`.

## Pattern decision table

| Choose | When | Watch out for |
|---|---|---|
| Single agent | One bounded task, < ~5 tools | Don't add agents you don't need |
| Supervisor | Central decomposition, specialists report back | Supervisor becomes the bottleneck |
| Pipeline | Strictly sequential stages with handoffs | Rigid order; slowest stage gates throughput |
| Hierarchical | Multiple org layers, > ~8 agents | Communication overhead per level |
| Swarm | Parallel peers, fault tolerance over predictability | Hard to debug; needs consensus rules |

The planner applies this scoring deterministically — run it rather than picking by feel.

## Workflow

All paths relative to this skill folder. Each step's JSON output is the next step's design input.

### 1. Design the architecture

Write a requirements JSON (copy `assets/sample_system_requirements.json` — keys: `goal`, `tasks[]`, `constraints{max_response_time, budget_per_task, concurrent_tasks}`, `team_size`):

```bash
python3 agent_planner.py requirements.json --format json -o arch
```

Emits `arch.json` with `architecture_design` (pattern, agents, communication links), `mermaid_diagram`, and `implementation_roadmap`. Read `architecture_design.pattern` and the per-agent role list; present the mermaid diagram to the user.

### 2. Generate tool schemas

Describe each agent's tools in plain JSON (copy `assets/sample_tool_descriptions.json`), then:

```bash
python3 tool_schema_generator.py tool_descriptions.json --validate -o tools
```

Emits `tools.json` (`tool_schemas`, `validation_summary`) plus provider-specific `tools_anthropic.json` / `tools_openai.json`. **Gate: every tool must print `✓ Valid`.** Fix any invalid schema before proceeding — never hand an agent an unvalidated schema.

### 3. Evaluate execution logs

Once the system runs (or against `assets/sample_execution_logs.json` for a dry run):

```bash
python3 agent_evaluator.py execution_logs.json --detailed -o eval
```

Emits `eval.json` with `summary`, `agent_metrics`, `bottleneck_analysis`, `error_analysis`, `cost_breakdown`, `sla_compliance`, and `optimization_recommendations`, plus split files (`eval_errors.json`, `eval_recommendations.json`).

### 4. Verification loop

The design is not done until:

1. `tool_schema_generator.py --validate` reports 0 invalid schemas.
2. `agent_evaluator.py` on a pilot run reports **0 critical issues** (the tool prints `CRITICAL: N critical issues` when found). If N > 0, apply the top item in `eval_recommendations.json`, re-run the pilot, and re-evaluate.
3. Compare your outputs against `expected_outputs/` to confirm the schema shape you're consuming hasn't drifted.

## References

- `references/agent_architecture_patterns.md` — pattern trade-offs in depth
- `references/tool_design_best_practices.md` — schema, idempotency, error-handling rules
- `references/evaluation_methodology.md` — metric definitions the evaluator implements
