---
name: "aeo"
description_en: "Answer Engine Optimization (AEO) skill — optimize content to be cited by AI language models (ChatGPT, Perplexity, Claude, Gemini, Mistral) as authoritative sources. Distinct from SEO — AEO optimizes for citation in LLM-generated responses, not search rankings. Use when planning content for AI-first search audiences, auditing existing content for E-E-A-T signals, tracking which pages get cited by w"
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/aeo/SKILL.md"
path: ".gemini/skills/aeo/SKILL.md"
is_collection: false
body_length: 9178
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Answer Engine Optimization (AEO)

  **ChatGPT, Perplexity, Claude, Gemini ve Mistral tarafından yetkili kaynak olarak alıntılanmak için içeriğinizi optimize edin.**

  AEO, LLM tarafından üretilen yanıtlarda **alıntılanma** için içeriği optimize etme uygulamasıdır — arama sıralamalarına yönelik SEO'dan farklıdır. Bu beceri AEO performansını denetler, optimize eder ve izler.

  ## SEO'dan Farklı

  | | SEO | AEO |
  |---|---|---|
  | **Optimize eden** | Tıklama sıralaması | Yetkili kaynak olarak alıntılanma |
  | **Hedef kitle** | Arama sonuçlarına gözatan insanlar | Sorulara cevap veren LLM'ler |
  | **Başarı metriği** | 1-10 konumu, organik trafik | LLM'ler arasında alıntı sayısı |
  | **Anahtar sinyaller** | Geri bağlantılar, anahtar sözcükler, sayfa hızı | E-E-A-T, yapılandırılmış veri, gerçek yoğunluğu |
  | **Güncelleme hızı** | Haftalar-aylar | Günler-haftalar (LLM eğitim döngüleri) |

  Her ikisi de bir arada bulunabilir — aynı içerik Google'da #1 sırada ÇIKABİLİR VE Perplexity tarafından alıntılanabilir. Ancak teknikler farklıdır: SEO, anahtar sözcük yoğunluğu + geri bağlantıları ödüllendirir; AEO, birincil kaynak sinyalleri + yapılandırılmış gerçekleri ödüllendirir.

  ## Ne Zaman Kullanılır

  - AI-öncelikli bir hedef kitle için yeni bir içerik parçası planlama
  - AI Overview kullanıma açılmadan önce mevcut içeriği E-E-A-T açıkları için denetleme
  - Hangi sayfaların hangi LLM tarafından alıntılandığını izleme (alıntı defteri)
  - LLM'lerin hangi sorgular için kaynak alıntıladığını araştırma (eğitim verileriyle cevaplananlar)
  - Rakiplerin alıntı oranlarına karşı değerlendirme
  - Geleneksel SEO ile uyumlu uzun vadeli bir AEO stratejisi oluşturma

  ## Ne Zaman Kullanılmaz

  - LLM alıntı niyeti olmaksızın saf tıklama SEO'su — bunun yerine `marketing-skill/skills/seo-audit` kullanın
  - Gerçek iddiası olmayan marka sesi içeriği — alıntılar alıntılanacak gerçekler gerektirir
  - LLM'lerin zaten güçlü bir eğitim sinyaline sahip olduğu konular (örn. ilköğretim matematiği) — alıntı potansiyeli minimumdur
  - Zamana duyarlı içerik (haber spikeri) — LLM eğitim gecikmesi alıntıların aylar sonra gelmesi anlamına gelir

  ## Temel Yetenekler

  ### 1. İçerik denetimi + E-E-A-T puanlaması

  Denetçi (`aeo_audit.py`) içeriği 4 boyut üzerinden puanlandırır:

  - **Experience**: Birinci şahıs kanıtı, tarihli örnekler, vaka çalışmaları, "2026'da X çalıştırdık" iddialarını
  - **Expertise**: Yazar biyografisi, kimlik bilgileri, akran tarafından incelenen kaynaklara alıntılar, teknik derinlik
  - **Authoritativeness**: Otorite alanlarından dış bağlantılar, schema.org işaretlemesi, yapılandırılmış veri
  - **Trustworthiness**: HTTPS, iletişim bilgileri, şeffaf düzeltmeler, gerçek yoğunluğu (1000 kelime başına doğrulanabilir iddia sayısı)

  0-100 arasında bileşik puan ve boyut başına detaylı dökümü. Çıktı: belirli düzeltme önerileriyle işaretleme raporu.

  ### 2. İçerik optimizasyonu

  Iyileştirici (`aeo_optimizer.py`) AEO-geliştirilmiş varyantlar oluşturur:

  - **Yapı yeniden yazma** — LLM ayrıştırması için optimize edilmiş H2/H3 hiyerarşisi
  - **Alıntı yoğunluğu artışı** — kaynaklarla `[1]` stil referansları ekler
  - **Schema enjeksiyonu** — FAQ, HowTo, Article şemaları için JSON-LD oluşturur
  - **Gerçek-önce açılış** — doğrulanabilir iddiaları ilk 200 kelimeye taşır

  Üç mod: `conservative` (< %10 kelime dokunuş), `balanced` (< %30), `aggressive` (maksimum AEO için yeniden yazı).

  ### 3. Alıntı izleme

  İzleyici (`citation_tracker.py`) yerel bir alıntı defteri tutar:

  - Manuel giriş: ChatGPT/Perplexity/Claude/Gemini çıktısında bulunan alıntıyı yapıştırın
  - Hangi URL, hangi LLM, hangi sorgu, hangi tarih olduğunu izleyin
  - Sayfa başına alıntı sayısı, alıntı hızı, LLM kapsamını hesaplayın
  - Raporlama için CSV'ye aktarın

  `~/.aeo-data/citations.json` içinde depolanır (yerel, telemetri yok).

  ## İş Akışı

  ```
  1. Mevcut içeriği denetle
     $ python3 scripts/aeo_audit.py --url https://example.com/blog/post
     → bileşik puan + 4 boyut dökümü ile işaretleme raporu

  2. Optimizasyon önerilerini uygula
     $ python3 scripts/aeo_optimizer.py --input post.md --mode balanced --output post-aeo.md
     → alıntılar + şema + yapısal düzeltmelerle optimize edilmiş varyant

  3. Yayımla + izle
     $ python3 scripts/citation_tracker.py --action add --url https://example.com/blog/post \
         --llm perplexity --query "what is AEO" --date 2026-05-17
     → yerel citations.json defterine giriş ekler

  4. Rapor
     $ python3 scripts/citation_tracker.py --action report --url https://example.com/blog/post
     → sayfa başına alıntı istatistikleri: sayı, LLM'ler, sorgular, hız
  ```

  ## Yapılandırma

  Beceri, çalışma başına `--industry` bayrağı aracılığıyla sektöre duyarlıdır. Desteklenen: `saas`, `healthcare`, `finance`, `legal`, `ecommerce`, `b2b`, `media`, `education`.

  Sektör etkileyenler:
  - **Otorite sinyali gereksinimleri** — sağlık hizmetleri/finans daha katı kaynak alıntıları gerektirir
  - **Gerçek denetleme titizliği** — hukuk/sağlık hizmetleri doğrulanabilir olmayan iddialar kritik olarak işaretlenir
  - **Alıntı stili** — akademik vs. ticari dergi vs. blog kuralları

  Örnek:
  ```bash
  python3 scripts/aeo_audit.py --url <url> --industry healthcare
  # → daha katı E-E-A-T eşikleri; birincil alıntısız herhangi bir sağlık iddiasını işaretler
  ```

  ## Çıktı Biçimi

  ### İşaretleme denetim raporu (varsayılan)

  ```markdown
  # AEO Denetim Raporu — [Sayfa Başlığı]

  **URL:** https://example.com/blog/post
  **Tarih:** 2026-05-17
  **Sektör:** saas
  **Bileşik Puan:** 72/100 (B+)

  ## Boyut Dökümü

  | Boyut | Puan | Karar |
  |---|---|---|
  | Experience | 80/100 | Güçlü — birinci şahıs vaka çalışması mevcut |
  | Expertise | 65/100 | Yazar biyografisi kimlik bilgileri eksik |
  | Authoritativeness | 75/100 | Otorite alanlarından 4 geri bağlantı |
  | Trustworthiness | 68/100 | Düzeltmeler politikası bağlantı yok |

  ## En İyi 3 Düzeltme

  1. Kimlik bilgileriyle yazar biyografisi ekle (Expertise +15)
  2. Düzeltmeler politikasını altbilgiden bağla (Trustworthiness +12)
  3. H2'lerde zımni olan 5 soru için FAQ şeması enjekte et (Authoritativeness +8)

  ## Tüm Öneriler
  [...]

  ## Denetim İzleri
  [analiz adımlarının 3 sayısı, alıntı yapılan kaynaklar, kullanılan zaman]
  ```

  ### Pipeline'lar için JSON

  ```bash
  python3 scripts/aeo_audit.py --url <url> --output json
  ```

  İçerik yönetimi iş akışlarıyla entegrasyon için tam yapılandırılmış verileri döndürür.

  ## Sektöre Özel E-E-A-T Eşikleri

  | Sektör | Min Bileşik | Kritik Sinyaller |
  |---|---|---|
  | Healthcare | 85 | Tıbbi inceleme yazarlığı, akran tarafından incelenen alıntılar, FDA açıklaması |
  | Finance | 85 | Yazar CFA/CPA kimlik bilgileri, "yatırım tavsiyesi değil" sorumluluk reddi, tarihli örnekler |
  | Legal | 85 | Yetki alanı açıklaması, avukat biyografisi, "hukuki tavsiye değil" sorumluluk reddi |
  | SaaS | 70 | Ürün müdürü yazarlığı, metrikli vaka çalışması, ROI hesaplayıcısı |
  | E-commerce | 65 | Toplu ürün incelemeleri, iade politikası, schema.org Product |
  | B2B | 70 | Endüstri analisti alıntıları, müşteri logoları, ROI verileri |
  | Media | 70 | Editoryal politika, gerçek kontrol bağlantısı, orijinal raporlama |
  | Education | 75 | Eğitmen biyografisi, öğrenme sonuçları, varsa akredite |

  ## Reddedilen Anti-Desenler

  - **AI için anahtar sözcük doldurma** — LLM'ler zaten semantikten konuyu çıkarır; anahtar sözcük yoğunluğu alıntı olasılığını artırmaz
  - **İnsan gözden geçirmesiz saf AI-üretilmiş içerik** — genel LLM çıktısı, ayırt edici sinyal arayan RAG alma algoritmaları tarafından düşürülür
  - **Alıntı çiftlikleri / bağlantı çarkları** — modern LLM RAG düşük otorite bağlantılı ağları cezalandırır
  - **Şema spam'ı** — yanlış veya doğrulanabilir olmayan schema.org iddialar filtrelenir; yalnızca gerçek, doğrulanabilir iddialar işaretle
  - **Bir LLM için diğerlerinin pahasına optimize etme** — alıntı dağılımları, eğitim veri kaynakları paylaştığı için büyük LLM'ler arasında yüksek ilişkilidir; LLM başına oyunlar değil paylaşılan sinyalleri (E-E-A-T) optimize et
  - **SEO'yu tamamen görmezden gelme** — AEO alıntıları sık sık zaten organik olarak iyi sıralanan kaynaklardan kaynaklanır; AEO ve SEO tamamlayıcı, ikame değildir

  ## Bağımlılıklar

  - **Yalnızca stdlib** tüm 3 betik için — `pip install` gerekli değil
  - **İsteğe bağlı**: `requests` + `beautifulsoup4` eğer `--url` modu kullanılıyorsa (aksi takdirde dosya tabanlı denetimler için `--input` aracılığıyla işaretlemeyi geçir)
  - **İsteğe bağlı**: `query_research` modu için herhangi bir LLM API anahtarı (şu anda iskele-yalnızca — tam LLM-tarafından yönlendirilen sorgu araştırması yol haritası)

  ## Depolama

  Tüm veriler yerel-öncelikli:
  - `~/.aeo-data/citations.json` — alıntı defteri
  - `~/.aeo-data/patterns.json` — başarı desenleri kütüphanesi
  - `~/.aeo-data/audits/<hash>.md` — kaydedilmiş denetim raporları

  Telemetri yok. Bulut senkronizasyonu yok. `citation_tracker.py --action export` aracılığıyla istediğiniz zaman CSV'ye aktarın.

  ## Tetikleyici İfadeler

  - "AEO denetimi", "AEO kontrolü"
  - "ChatGPT / Perplexity / Claude / Gemini için optimize et"
  - "[LLM] tarafından alıntılanmak"
  - "LLM alıntı stratejisi"
  - "answer engine optimization"
  - "AI arama için içerik"
  - "E-E-A-T denetimi"
  - "AI alıntılarını izle"
  - "AI için şema"

  ## İlişkili Beceriler

  - `marketing-skill/skills/seo-audit` — geleneksel tıklama SEO'su
  - `marketing-skill/skills/programmatic-seo` — şablon-tarafından yönlendirilen ölçekli SEO
  - `marketing-skill/skills/content-strategy` — daha geniş içerik planlama
  - `marketing-skill/skills/copywriting` — ses + ton
  - `marketing-skill/skills/schema-markup` — yapılandırılmış veri uygulaması

  ---

  **Sürüm:** 2.7.3
  **Kaynak:** [`alirezarezvani/aeo-box`](https://github.com/alirezarezvani/aeo-box) adresinden taşındı (`answer-engine-optimization/` beceri, 9 modül arasında 2.464 LOC). Bu port, 9 modüllü Python araç takımını claude-skills kuralına göre 3 stdlib CLI aracına damıtır; E-E-A-T puanlama metodolojisini, alıntı izleme şemasını ve sektöre duyarlı eşikleri kelimesi kelimesine korur.
  **Lisans:** MIT (upstream + bu repo ile eşleşir).
---

# Answer Engine Optimization (AEO)

**Get your content cited by ChatGPT, Perplexity, Claude, Gemini, and Mistral as the authoritative source.**

AEO is the practice of optimizing content for **citation** in LLM-generated responses — distinct from SEO, which optimizes for search rankings. This skill audits, optimizes, and tracks AEO performance.

## Distinct From SEO

| | SEO | AEO |
|---|---|---|
| **Optimizes for** | Click-through rankings | Being cited as authoritative source |
| **Audience** | Humans browsing search results | LLMs answering questions |
| **Success metric** | Position 1-10, organic traffic | Citation count across LLMs |
| **Key signals** | Backlinks, keywords, page speed | E-E-A-T, structured data, factual density |
| **Update cadence** | Weeks-to-months | Days-to-weeks (LLM training cycles) |

Both can coexist — the same content can rank #1 on Google AND get cited by Perplexity. But the techniques differ: SEO rewards keyword density + backlinks; AEO rewards primary-source signals + structured facts.

## When To Use

- Planning a new content piece for an AI-first audience
- Auditing existing content for E-E-A-T gaps before AI Overview rollout
- Tracking which pages get cited by which LLM (citation ledger)
- Researching what queries LLMs cite sources for (vs. what they answer from training)
- Benchmarking against competitors' citation rates
- Building a long-term AEO strategy aligned with traditional SEO

## When NOT To Use

- Pure click-through SEO without LLM-citation intent — use `marketing-skill/skills/seo-audit` instead
- Brand-voice content with no factual claims — citations require facts to cite
- Content for a topic where LLMs already have strong training signal (e.g., elementary math) — citation upside is minimal
- Time-sensitive content (breaking news) — LLM training lag means citations come months later

## Core Capabilities

### 1. Content audit + E-E-A-T scoring

The auditor (`aeo_audit.py`) scores content across 4 dimensions:

- **Experience**: First-person evidence, dated examples, case studies, "We ran X in 2026" claims
- **Expertise**: Author bio, credentials, citations to peer-reviewed sources, technical depth
- **Authoritativeness**: External backlinks from authority domains, schema.org markup, structured data
- **Trustworthiness**: HTTPS, contact info, transparent corrections, factual density (number of verifiable claims per 1000 words)

Composite score 0-100 with per-dimension breakdown. Output: markdown report with specific fix recommendations.

### 2. Content optimization

The optimizer (`aeo_optimizer.py`) generates AEO-improved variants:

- **Structure rewrite** — H2/H3 hierarchy optimized for LLM parsing
- **Citation density boost** — adds `[1]`-style references with sources
- **Schema injection** — generates JSON-LD for FAQ, HowTo, Article schemas
- **Fact-first lede** — moves verifiable claims into the first 200 words

Three modes: `conservative` (touch <10% of words), `balanced` (touch <30%), `aggressive` (rewrite for maximum AEO).

### 3. Citation tracking

The tracker (`citation_tracker.py`) maintains a local ledger of citations:

- Manual entry: paste a citation found in ChatGPT/Perplexity/Claude/Gemini output
- Track which URL, which LLM, which query, what date
- Compute per-page citation count, citation velocity, LLM coverage
- Export to CSV for reporting

Stores in `~/.aeo-data/citations.json` (local, no telemetry).

## Workflow

```
1. Audit existing content
   $ python3 scripts/aeo_audit.py --url https://example.com/blog/post
   → markdown report with composite score + 4-dimension breakdown

2. Apply optimization recommendations
   $ python3 scripts/aeo_optimizer.py --input post.md --mode balanced --output post-aeo.md
   → optimized variant with citations + schema + structural fixes

3. Publish + monitor
   $ python3 scripts/citation_tracker.py --action add --url https://example.com/blog/post \
       --llm perplexity --query "what is AEO" --date 2026-05-17
   → adds entry to local citations.json ledger

4. Report
   $ python3 scripts/citation_tracker.py --action report --url https://example.com/blog/post
   → per-page citation stats: count, LLMs, queries, velocity
```

## Configuration

The skill is industry-aware via per-run `--industry` flag. Supported: `saas`, `healthcare`, `finance`, `legal`, `ecommerce`, `b2b`, `media`, `education`.

Industry affects:
- **Authority signal requirements** — healthcare/finance need stricter source citations
- **Fact-checking rigor** — legal/healthcare flag unverifiable claims as critical
- **Citation style** — academic vs. trade-journal vs. blog conventions

Example:
```bash
python3 scripts/aeo_audit.py --url <url> --industry healthcare
# → stricter E-E-A-T thresholds; flags any health claim without primary citation
```

## Output Format

### Markdown audit report (default)

```markdown
# AEO Audit Report — [Page Title]

**URL:** https://example.com/blog/post
**Date:** 2026-05-17
**Industry:** saas
**Composite Score:** 72/100 (B+)

## Dimension Breakdown

| Dimension | Score | Verdict |
|---|---|---|
| Experience | 80/100 | Strong — first-person case study present |
| Expertise | 65/100 | Author bio missing credentials |
| Authoritativeness | 75/100 | 4 backlinks from authority domains |
| Trustworthiness | 68/100 | No corrections policy linked |

## Top 3 Fixes

1. Add author bio with credentials (Expertise +15)
2. Link to corrections policy from footer (Trustworthiness +12)
3. Inject FAQ schema for the 5 questions implicit in H2s (Authoritativeness +8)

## All Recommendations
[...]

## Audit Trail
[3-count of analysis steps, sources cited, time taken]
```

### JSON for pipelines

```bash
python3 scripts/aeo_audit.py --url <url> --output json
```

Returns full structured data for integration with content management workflows.

## Industry-Specific E-E-A-T Thresholds

| Industry | Min Composite | Critical Signals |
|---|---|---|
| Healthcare | 85 | Medical reviewer byline, peer-reviewed citations, FDA disclosure |
| Finance | 85 | Author CFA/CPA credentials, "not investment advice" disclaimer, dated examples |
| Legal | 85 | Jurisdiction disclosed, attorney bio, "not legal advice" disclaimer |
| SaaS | 70 | Product manager byline, case study with metrics, ROI calculator |
| E-commerce | 65 | Product reviews aggregated, return policy, schema.org Product |
| B2B | 70 | Industry analyst quotes, customer logos, ROI data |
| Media | 70 | Editorial policy, fact-check link, original reporting |
| Education | 75 | Instructor bio, learning outcomes, accreditation if applicable |

## Anti-Patterns Rejected

- **Keyword stuffing for AI** — LLMs already extract topic from semantics; keyword density doesn't boost citation likelihood
- **Pure AI-generated content with no human review** — generic LLM output gets de-prioritized by RAG retrieval algorithms looking for distinctive signal
- **Citation farms / link wheels** — modern LLM RAG penalizes low-authority linked networks
- **Schema spam** — false or unverifiable schema.org claims get filtered; only mark up real, verifiable claims
- **Optimizing for one LLM at expense of others** — citation distributions are highly correlated across major LLMs because they share training data sources; optimize for the shared signals (E-E-A-T) not per-LLM hacks
- **Ignoring SEO entirely** — AEO citations often originate from sources that already rank well organically; AEO and SEO are complements, not substitutes

## Dependencies

- **stdlib-only** for all 3 scripts — no `pip install` required
- **Optional**: `requests` + `beautifulsoup4` if `--url` mode used (otherwise pass markdown via `--input` for file-based audits)
- **Optional**: any LLM API key for `query_research` mode (currently scaffold-only — full LLM-driven query research is roadmap)

## Storage

All data is local-first:
- `~/.aeo-data/citations.json` — citation ledger
- `~/.aeo-data/patterns.json` — success patterns library
- `~/.aeo-data/audits/<hash>.md` — saved audit reports

No telemetry. No cloud sync. Export to CSV anytime via `citation_tracker.py --action export`.

## Trigger Phrases

- "AEO audit", "AEO check"
- "optimize for ChatGPT / Perplexity / Claude / Gemini"
- "get cited by [LLM]"
- "LLM citation strategy"
- "answer engine optimization"
- "content for AI search"
- "E-E-A-T audit"
- "track AI citations"
- "schema for AI"

## Related Skills

- `marketing-skill/skills/seo-audit` — traditional click-through SEO
- `marketing-skill/skills/programmatic-seo` — template-driven SEO at scale
- `marketing-skill/skills/content-strategy` — broader content planning
- `marketing-skill/skills/copywriting` — voice + tone
- `marketing-skill/skills/schema-markup` — structured data implementation

---

**Version:** 2.7.3
**Source:** Ported from [`alirezarezvani/aeo-box`](https://github.com/alirezarezvani/aeo-box) (`answer-engine-optimization/` skill, 2,464 LOC across 9 modules). This port distills the 9-module Python toolkit into 3 stdlib CLI tools per the claude-skills convention; preserves the E-E-A-T scoring methodology, citation-tracking schema, and industry-aware thresholds verbatim.
**License:** MIT (matches upstream + this repo).
