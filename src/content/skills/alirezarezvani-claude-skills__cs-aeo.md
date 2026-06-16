---
name: "cs-aeo"
description_en: "/cs:aeo — Answer Engine Optimization workflow. Audit content for E-E-A-T + structure signals that drive LLM citation (ChatGPT, Perplexity, Claude, Gemini, Mistral). Optimize content in 3 modes (conservative/balanced/aggressive). Track which LLMs cite which pages via local ledger. Industry-aware thresholds (8 industries with YMYL calibration). Distinct from SEO — refuses to optimize one at expense "
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cmd-cs-aeo/SKILL.md"
path: ".gemini/skills/cmd-cs-aeo/SKILL.md"
is_collection: false
body_length: 5663
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:aeo — Yanıt Motoru Optimizasyonu

  **Komut:** `/cs:aeo [action] [args]`

  `cs-aeo` komutu, **AEO iş akışları için giriş noktasıdır**: denetim → optimize → yayınla → alıntıları takip et.

  ## `/cs:seo-audit`'ten Farklı

  Bunlar ortak bir temele (E-E-A-T) sahiptir ancak farklı dönüşüm olaylarını optimize eder:

  - **`/cs:seo-audit`** — Google/Bing arama sonuçlarında sıralama + tıklamayı optimize eder
  - **`/cs:aeo`** (bu komut) — LLM'ler tarafından yetkili kaynak olarak alıntılanmayı optimize eder

  Aynı içerikte çalışabilirler. cs-aeo ajanı bunu ortaya çıkaracak ve yüksek etkili sayfalar için her ikisini de çalıştırmayı önerecektir.

  ## Ne Zaman Çalıştırılmalı

  - Mevcut içeriği AI-arama hazırlığı için denetleme (E-E-A-T + yapı sinyalleri)
  - Bir sayfayı yayınlamadan önce LLM alıntısı için optimize etme
  - LLM'lerin hangi sayfaları zaman içinde alıntıladığını takip etme (alıntı defteri)
  - Belirli bir içerik parçası için AEO yatırımının değerli olup olmadığını araştırma
  - Rakip alıntı oranlarına karşı kıyaslama

  ## Ne Zaman Çalıştırılmamalı

  - AI-alıntı niyeti olmayan saf tıklamayı optimize etme → `/cs:seo-audit` kullanın
  - Gerçeksel iddia olmayan marka sesi içeriği (alıntılar gerçekler gerektirir)
  - Zaman-duyarlı haberler (LLM eğitim gecikmesi, alıntı aylar sonra gelir)
  - LLM'lerin zaten güçlü eğitim aldığı konular (ör. ilkokul matematiği)

  ## Eylemler

  ### `audit` — İçeriği AEO hazırlığı için puanla

  ```bash
  /cs:aeo audit --input post.md --industry saas
  /cs:aeo audit --url https://example.com/blog/post --industry healthcare
  /cs:aeo audit --sample
  ```

  0-100 arası bileşik puan döndürür; boyut başına (E-E-A-T + Yapı) ve öncelik sırasına göre ilk 5 düzeltme.

  ### `optimize` — AEO-iyileştirilmiş varyant oluştur

  ```bash
  /cs:aeo optimize --input post.md --mode balanced --output post-aeo.md
  /cs:aeo optimize --input post.md --mode aggressive --industry finance
  ```

  Üç mod:
  - `conservative` — <10% sözcüğü değiştir (yalnızca şema + düzeltme alt bilgisi)
  - `balanced` — <30% değiştir (alıntı işaretleri + başlık yeniden yapılandırması + şema + alt bilgi)
  - `aggressive` — tam yeniden yapılandırma + gerçek-ilk açılış + maksimum alıntı yoğunluğu

  ### `track` — LLM yanıtında gözlemlediğiniz bir alıntıyı kaydedin

  ```bash
  /cs:aeo track --url https://example.com/post --llm perplexity --query "what is AEO" --date 2026-05-17
  ```

  `~/.aeo-data/citations.json` konumunda yerel defter tutar. Telemetri yok.

  ### `report` — URL için toplam alıntı raporu

  ```bash
  /cs:aeo report --url https://example.com/post
  ```

  Toplam alıntılar, LLM kapsamı, hız, en çok sorgulanan konular, karar (EARLY / EMERGING / STRONG) döndürür.

  ### `export` — Alıntı defterini CSV olarak aktar

  ```bash
  /cs:aeo export --output citations.csv
  ```

  İstemcilere / paydaşlara raporlama için.

  ## Minimal Giriş (3 Soru)

  | S | Sorar | Ne Zaman |
  |---|---|---|
  | S1 | Hangi eylem — audit / optimize / track / report? | Her zaman |
  | S2 | Sektör (saas / healthcare / finance / legal / ecommerce / b2b / media / education) | Her zaman (eşikleri ayarlar) |
  | S3 | `optimize` için: mod (conservative / balanced / aggressive)? | Yalnızca action=optimize olduğunda |

  Çoğu çağrı S2'den sonra girişten çıkar.

  ## İş Akışı

  ```bash
  # Aşama 1: Denetim
  python3 marketing-skill/skills/aeo/scripts/aeo_audit.py --input <file> --industry <industry>
  # → bileşik puan 0-100 + en iyi düzeltmeler

  # Aşama 2: Optimize et (denetim < sektör eşiği ise)
  python3 marketing-skill/skills/aeo/scripts/aeo_optimizer.py \
    --input <file> --mode <mode> --industry <industry> --output <file>-aeo.md
  # → optimize edilmiş varyant + değişiklik günlüğü

  # Aşama 3: Yayınla (manuel adım — optimize edilmiş varyantı incele, sonra dağıt)

  # Aşama 4: Takip et (4-12 hafta boyunca)
  python3 marketing-skill/skills/aeo/scripts/citation_tracker.py \
    --action add --url <url> --llm <llm> --query <query> --date <YYYY-MM-DD>
  # → defter güncellendi

  # Aşama 5: Rapor et (aylık)
  python3 marketing-skill/skills/aeo/scripts/citation_tracker.py \
    --action report --url <url>
  # → URL başına alıntı raporu
  ```

  ## Sektöre Özgü Eşikler

  Denetçi sektöre göre kalibre edilir. YMYL ("Paranız ya da Hayatınız") konuları daha katı eşikler kullanır:

  | Sektör | Min Bileşik | Neden |
  |---|---|---|
  | Healthcare | 85 | Doğrudan sağlık etkileri |
  | Finance | 85 | Gerçek finansal kararlar |
  | Legal | 85 | Yanlış uygulanırsa yasal tehlike |
  | Education | 75 | Öğrenme çıktıları |
  | SaaS, B2B, Media | 70 | İş kararları, orta düzey riskler |
  | E-commerce | 65 | Ürün incelemeleri, düşük bireysel risk |

  Eşiğin altında puan alan YMYL konuları için içerik, diğer sinyallere bakılmaksızın alıntılanması olası değildir — cs-aeo ajanı bunu işaretleyecek ve temel boyutlar iyileşene kadar agresif optimizasyondan kaçınacaktır.

  ## Reddedilen Anti-Desenler

  - İnsan incelemesi olmayan LLM tarafından oluşturulan AEO içeriği (RAG alma, jenerik LLM çıktısını deprioritize eder)
  - Yazar hakkında kısmında sahte kimlik bilgileri (LLM'ler LinkedIn/Wikipedia aracılığıyla çapraz başvuru yapar)
  - Şema spam'ı (yanlış yapılandırılmış veri işaretlemesi filtrelenir)
  - Otorite transferi (bağlantı kurmak otorite vermez)
  - LLM başına optimizasyon tünel görüşü (73% çapraz LLM alıntı korelasyonu — paylaşılan sinyalleri optimize et)
  - SEO pahasına AEO optimizasyonu (ve tersi) — birbirini tamamlarlar, ikame değildir

  ## Tetikleme İfadeleri

  - "AEO denetimi"
  - "ChatGPT / Perplexity / Claude / Gemini için optimize et"
  - "[LLM] tarafından alıntılanmak"
  - "LLM alıntı stratejisi"
  - "yanıt motoru optimizasyonu"
  - "E-E-A-T denetimi"
  - "AI arama için içerik"
  - "AI alıntılarını takip et"
  - "AI için şema"

  ## İlişkili

  - Ajan: [`cs-aeo`](agents/marketing/cs-aeo.md)
  - Beceri: [`aeo`](marketing-skill/skills/aeo/SKILL.md)
  - İlgili: `/cs:seo-audit` (SEO + AEO genellikle birlikte çalışır)
  - Kaynak: [`alirezarezvani/aeo-box`](https://github.com/alirezarezvani/aeo-box) adresinden taşındı

  ---

  **Sürüm:** 2.7.3
  **Lisans:** MIT
---

# /cs:aeo — Answer Engine Optimization

**Command:** `/cs:aeo [action] [args]`

The `cs-aeo` command is the **entry point for AEO workflows**: audit → optimize → publish → track citations.

## Distinct From `/cs:seo-audit`

These share a foundation (E-E-A-T) but optimize for different conversion events:

- **`/cs:seo-audit`** — optimizes for ranking + click-through in Google/Bing search results
- **`/cs:aeo`** (this command) — optimizes for being cited as authoritative source by LLMs

They can run on the same content. The cs-aeo agent will surface this and recommend running both for high-leverage pages.

## When To Run

- Auditing existing content for AI-search readiness (E-E-A-T + structure signals)
- Optimizing a page for LLM citation before publishing
- Tracking which LLMs cite which pages over time (citation ledger)
- Researching whether AEO investment is worth it for a given content piece
- Benchmarking against competitor citation rates

## When NOT To Run

- Pure click-through SEO without AI-citation intent → use `/cs:seo-audit`
- Brand-voice content with no factual claims (citations require facts)
- Time-sensitive news (LLM training lag means citation comes months later)
- Topics where LLMs already have strong training (e.g., elementary math)

## Actions

### `audit` — Score content for AEO readiness

```bash
/cs:aeo audit --input post.md --industry saas
/cs:aeo audit --url https://example.com/blog/post --industry healthcare
/cs:aeo audit --sample
```

Returns composite 0-100 with per-dimension breakdown (E-E-A-T + Structure) and top 5 fixes in priority order.

### `optimize` — Generate AEO-improved variant

```bash
/cs:aeo optimize --input post.md --mode balanced --output post-aeo.md
/cs:aeo optimize --input post.md --mode aggressive --industry finance
```

Three modes:
- `conservative` — touch <10% of words (schema + corrections footer only)
- `balanced` — touch <30% (citation markers + heading restructure + schema + footer)
- `aggressive` — full restructure + fact-first lede + maximum citation density

### `track` — Log a citation you observed in an LLM response

```bash
/cs:aeo track --url https://example.com/post --llm perplexity --query "what is AEO" --date 2026-05-17
```

Maintains a local ledger at `~/.aeo-data/citations.json`. No telemetry.

### `report` — Aggregate citation report for a URL

```bash
/cs:aeo report --url https://example.com/post
```

Returns total citations, LLM coverage, velocity, top queries, verdict (EARLY / EMERGING / STRONG).

### `export` — Emit citation ledger as CSV

```bash
/cs:aeo export --output citations.csv
```

For reporting to clients / stakeholders.

## Minimal Intake (3 Questions)

| Q | Asks | When |
|---|---|---|
| Q1 | What action — audit / optimize / track / report? | Always |
| Q2 | Industry (saas / healthcare / finance / legal / ecommerce / b2b / media / education) | Always (calibrates thresholds) |
| Q3 | For `optimize`: mode (conservative / balanced / aggressive)? | Only when action=optimize |

Most invocations exit intake after Q2.

## Workflow

```bash
# Phase 1: Audit
python3 marketing-skill/skills/aeo/scripts/aeo_audit.py --input <file> --industry <industry>
# → composite score 0-100 + top fixes

# Phase 2: Optimize (if audit < industry threshold)
python3 marketing-skill/skills/aeo/scripts/aeo_optimizer.py \
  --input <file> --mode <mode> --industry <industry> --output <file>-aeo.md
# → optimized variant + changelog

# Phase 3: Publish (manual step — review the optimized variant, then deploy)

# Phase 4: Track (over 4-12 weeks)
python3 marketing-skill/skills/aeo/scripts/citation_tracker.py \
  --action add --url <url> --llm <llm> --query <query> --date <YYYY-MM-DD>
# → ledger updated

# Phase 5: Report (monthly)
python3 marketing-skill/skills/aeo/scripts/citation_tracker.py \
  --action report --url <url>
# → per-URL citation report
```

## Industry-Specific Thresholds

The auditor calibrates per-industry. YMYL ("Your Money or Your Life") topics use stricter thresholds:

| Industry | Min Composite | Why |
|---|---|---|
| Healthcare | 85 | Direct health implications |
| Finance | 85 | Real financial decisions |
| Legal | 85 | Legal jeopardy if misapplied |
| Education | 75 | Learning outcomes |
| SaaS, B2B, Media | 70 | Business decisions, moderate stakes |
| E-commerce | 65 | Product reviews, lower individual risk |

Content for YMYL topics scoring below threshold is unlikely to be cited regardless of other signals — the cs-aeo agent will flag this and refuse aggressive optimization until the foundational dimensions improve.

## Anti-Patterns Rejected

- LLM-generated AEO content with no human review (RAG retrieval deprioritizes generic LLM output)
- Fabricated credentials in author bylines (LLMs cross-reference via LinkedIn/Wikipedia)
- Schema spam (false structured-data markup gets filtered)
- Authority laundering (linking out doesn't confer authority)
- Per-LLM optimization tunnel-vision (73% cross-LLM citation correlation — optimize for shared signals)
- Optimizing AEO at expense of SEO (and vice versa) — they complement, don't substitute

## Trigger Phrases

- "AEO audit"
- "optimize for ChatGPT / Perplexity / Claude / Gemini"
- "get cited by [LLM]"
- "LLM citation strategy"
- "answer engine optimization"
- "E-E-A-T audit"
- "content for AI search"
- "track AI citations"
- "schema for AI"

## Related

- Agent: [`cs-aeo`](agents/marketing/cs-aeo.md)
- Skill: [`aeo`](marketing-skill/skills/aeo/SKILL.md)
- Companion: `/cs:seo-audit` (SEO + AEO often run together)
- Source: ported from [`alirezarezvani/aeo-box`](https://github.com/alirezarezvani/aeo-box)

---

**Version:** 2.7.3
**License:** MIT
