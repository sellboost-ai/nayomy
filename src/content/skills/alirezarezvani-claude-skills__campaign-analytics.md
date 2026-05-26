---
name: "campaign-analytics"
description_en: "Analyzes campaign performance with multi-touch attribution, funnel conversion analysis, and ROI calculation for marketing optimization. Use when analyzing marketing campaigns, ad performance, attribution models, conversion rates, or calculating marketing ROI, ROAS, CPA, and campaign metrics across channels."
description_tr: "Çok noktalı atıbüsyon, funnel dönüşüm analizi ve ROI hesaplaması ile kampanya performansını analiz eder ve pazarlama optimizasyonunu sağlar. Pazarlama kampanyaları, reklam performansı, atıbüsyon modelleri, dönüşüm oranları veya kanallar arasında pazarlama ROI, ROAS, CPA ve kampanya metriklerini hesaplarken kullanın."
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/campaign-analytics/SKILL.md"
path: ".gemini/skills/campaign-analytics/SKILL.md"
is_collection: false
body_length: 7752
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Kampanya Analitikleri

  Üretim sınıfı kampanya performans analizi, çok-temas atribüsyon modellemesi, huni dönüşüm analizi ve ROI hesaplaması. Üç Python CLI aracı, yalnızca standart kütüphane kullanan — hiç harici bağımlılık yok, API çağrısı yok, ML modeli yok — belirleyici, tekrarlanabilir analitik sağlar.

  ---

  ## Giriş Gereksinimleri

  Tüm scriptler, pozisyonel giriş argümanı olarak bir JSON dosyası kabul eder. Tam örnekler için `assets/sample_campaign_data.json` dosyasına bakınız.

  ### Attribution Analyzer

  ```json
  {
    "journeys": [
      {
        "journey_id": "j1",
        "touchpoints": [
          {"channel": "organic_search", "timestamp": "2025-10-01T10:00:00", "interaction": "click"},
          {"channel": "email", "timestamp": "2025-10-05T14:30:00", "interaction": "open"},
          {"channel": "paid_search", "timestamp": "2025-10-08T09:15:00", "interaction": "click"}
        ],
        "converted": true,
        "revenue": 500.00
      }
    ]
  }
  ```

  ### Funnel Analyzer

  ```json
  {
    "funnel": {
      "stages": ["Awareness", "Interest", "Consideration", "Intent", "Purchase"],
      "counts": [10000, 5200, 2800, 1400, 420]
    }
  }
  ```

  ### Campaign ROI Calculator

  ```json
  {
    "campaigns": [
      {
        "name": "Spring Email Campaign",
        "channel": "email",
        "spend": 5000.00,
        "revenue": 25000.00,
        "impressions": 50000,
        "clicks": 2500,
        "leads": 300,
        "customers": 45
      }
    ]
  }
  ```

  ### Giriş Doğrulaması

  Scriptleri çalıştırmadan önce, JSON'unuzun geçerli olduğunu ve beklenen şemaya uyduğunu doğrulayın. Sık karşılaşılan hatalar:

  - **Eksik gerekli anahtarlar** (örn. `journeys`, `funnel.stages`, `campaigns`) → script açıklayıcı bir `KeyError` ile çıkış yapar
  - **Huni verilerinde uyumsuz dizi uzunlukları** (`stages` ve `counts` aynı uzunlukta olmalıdır) → `ValueError` oluşturur
  - **ROI verilerinde sayısal olmayan parasal değerler** → `TypeError` oluşturur

  JSON söz dizimini herhangi bir scripte geçirmeden önce doğrulamak için `python -m json.tool your_file.json` komutunu kullanın.

  ---

  ## Çıkış Formatları

  Tüm scriptler `--format` bayrağı aracılığıyla iki çıkış formatını destekler:

  - `--format text` (varsayılan): İnceleme için insan tarafından okunabilir tablolar ve özetler
  - `--format json`: İntegrasyonlar ve işlem hatları için makine tarafından okunabilir JSON

  ---

  ## Tipik Analiz İş Akışı

  Tam bir kampanya incelemesi için, üç scripti sırasıyla çalıştırın:

  ```bash
  # Adım 1 — Attribution: hangi kanalların dönüşümleri sürüklediğini anlayın
  python scripts/attribution_analyzer.py campaign_data.json --model time-decay

  # Adım 2 — Funnel: müşterilerin dönüşüme giden yolda nerede düştüğünü belirleyin
  python scripts/funnel_analyzer.py funnel_data.json

  # Adım 3 — ROI: kârlılığı hesaplayın ve endüstri standartlarıyla karşılaştırın
  python scripts/campaign_roi_calculator.py campaign_data.json
  ```

  En iyi performans gösteren kanalları belirlemek için atribüsyon sonuçlarını kullanın, ardından bu kanalların segmentlerine odaklanarak huni analizi yapın ve son olarak bütçe yeniden dağıtımını öncekilendirmek için ROI metriklerini doğrulayın.

  ---

  ## Nasıl Kullanılır

  ### Attribution Analysis

  ```bash
  # Tüm 5 atribüsyon modelini çalıştırın
  python scripts/attribution_analyzer.py campaign_data.json

  # Belirli bir modeli çalıştırın
  python scripts/attribution_analyzer.py campaign_data.json --model time-decay

  # İşlem hattı entegrasyonu için JSON çıktısı
  python scripts/attribution_analyzer.py campaign_data.json --format json

  # Özel time-decay half-life (varsayılan: 7 gün)
  python scripts/attribution_analyzer.py campaign_data.json --model time-decay --half-life 14
  ```

  ### Funnel Analysis

  ```bash
  # Temel huni analizi
  python scripts/funnel_analyzer.py funnel_data.json

  # JSON çıktısı
  python scripts/funnel_analyzer.py funnel_data.json --format json
  ```

  ### Campaign ROI Calculation

  ```bash
  # Tüm kampanyalar için ROI metriklerini hesaplayın
  python scripts/campaign_roi_calculator.py campaign_data.json

  # JSON çıktısı
  python scripts/campaign_roi_calculator.py campaign_data.json --format json
  ```

  ---

  ## Scriptler

  ### 1. attribution_analyzer.py

  Dönüşüm kredisini pazarlama kanalları arasında tahsis etmek için beş endüstri standardı atribüsyon modelini uygular:

  | Model | Açıklama | En İyi Kullanım Alanı |
  |-------|----------|----------|
  | First-Touch | İlk etkileşime %100 kredi | Marka farkındalık kampanyaları |
  | Last-Touch | Son etkileşime %100 kredi | Doğrudan yanıt kampanyaları |
  | Linear | Tüm temaslar için eşit kredi | Dengeli çok kanal değerlendirmesi |
  | Time-Decay | Son temaslar için daha fazla kredi | Kısa satış döngüleri |
  | Position-Based | 40/20/40 bölünmesi (ilk/orta/son) | Tam huni pazarlaması |

  ### 2. funnel_analyzer.py

  Darboğazları ve optimizasyon fırsatlarını belirlemek için dönüşüm hunilerini analiz eder:

  - Aşamadan aşamaya dönüşüm oranları ve düşüş yüzdeleri
  - Otomatik darboğaz tanımlaması (en büyük mutlak ve göreli düşüşler)
  - Genel huni dönüşüm oranı
  - Birden çok segment sağlandığında segment karşılaştırması

  ### 3. campaign_roi_calculator.py

  Endüstri karşılaştırması ile kapsamlı ROI metriklerini hesaplar:

  - **ROI**: Yatırım kârı yüzdesi
  - **ROAS**: Reklam harcaması kâr oranı
  - **CPA**: Kazanım başına maliyet
  - **CPL**: Müşteri adayı başına maliyet
  - **CAC**: Müşteri kazanım maliyeti
  - **CTR**: Tıklama oranı
  - **CVR**: Dönüşüm oranı (müşteri adayından müşteriye)
  - Endüstri karşılaştırmalarına karşı düşük performans gösteren kampanyaları işaretler

  ---

  ## Referans Kılavuzları

  | Kılavuz | Konum | Amaç |
  |--------|--------|---------|
  | Attribution Models Guide | `references/attribution-models-guide.md` | 5 model hakkında derin dalış, formüller, artıları/eksileri, seçim kriterleri |
  | Campaign Metrics Benchmarks | `references/campaign-metrics-benchmarks.md` | Kanal ve sektöre göre endüstri karşılaştırmaları; CTR, CPC, CPM, CPA, ROAS |
  | Funnel Optimization Framework | `references/funnel-optimization-framework.md` | Aşamaya göre optimizasyon stratejileri, yaygın darboğazlar, en iyi uygulamalar |

  ---

  ## En İyi Uygulamalar

  1. **Birden çok atribüsyon modeli kullanın** -- Kanal değerini üçgenlemek için en az 3 modeli karşılaştırın; hiçbir tek model tam öykü anlatmaz.
  2. **Uygun lookback pencereleri ayarlayın** -- Time-decay half-life değerini ortalama satış döngüsü uzunluğunuza göre ayarlayın.
  3. **Hunilerinizi segmentleyin** -- Performans sürücülerini belirlemek için segmentleri (kanal, kohort, coğrafya) karşılaştırın.
  4. **Önce kendi tarihçeleriniz ile karşılaştırın** -- Endüstri karşılaştırmaları bağlam sağlar, ancak tarihi veriler en uygun karşılaştırmadır.
  5. **ROI analizini düzenli aralıklarla çalıştırın** -- Aktif kampanyalar için haftalık, stratejik inceleme için aylık.
  6. **Tüm maliyetleri dahil edin** -- Doğru ROI için medya harcamasının yanı sıra yaratıcı, araç ve işçilik maliyetlerini hesaba katın.
  7. **A/B testlerini kesin şekilde belirtin** -- Sağlanan şablonu kullanarak istatistiksel geçerliliği ve açık karar kriterlerini sağlayın.

  ---

  ## Sınırlamalar

  - **İstatistiksel anlamlılık testi yok** -- Scriptler yalnızca tanımlayıcı metrikler sağlar; p-değeri hesaplamaları harici araçlar gerektirir.
  - **Yalnızca standart kütüphane** -- Gelişmiş istatistiksel kütüphaneler yok. Çoğu kampanya boyutu için uygun ancak 100K'yi aşan yolculuklarda optimize edilmemiş.
  - **Çevrimdışı analiz** -- Scriptler statik JSON anlık görüntülerini analiz eder; gerçek zamanlı veri bağlantısı veya API entegrasyonu yok.
  - **Tek para birimi** -- Tüm parasal değerlerin aynı para biriminde olduğu varsayılır; para birimi dönüştürme desteği yok.
  - **Basitleştirilmiş time-decay** -- Yapılandırılabilir half-life tabanlı üstel azalış; hafta içi/hafta sonu veya mevsimsel desenleri hesaba katmaz.
  - **Cihazlar arası izleme yok** -- Atribüsyon sağlanan yolculuk verilerine olduğu gibi işlenir; cihazlar arası kimlik çözümlemesi akış üstünde ele alınmalıdır.

  ## İlgili Beceriler

  - **analytics-tracking**: İzlemeyi ayarlamak için. Veri analiz etmek için DEĞİL (bu bu beceridir).
  - **ab-test-setup**: Analitiklerin ortaya çıkardığı şeyleri test etmek için deneyleri tasarlamak.
  - **marketing-ops**: İçgörüleri doğru yürütme becerisine yönlendirmek için.
  - **paid-ads**: Analitik bulgularına dayalı reklam harcamasını optimize etmek için.
---

# Campaign Analytics

Production-grade campaign performance analysis with multi-touch attribution modeling, funnel conversion analysis, and ROI calculation. Three Python CLI tools provide deterministic, repeatable analytics using standard library only -- no external dependencies, no API calls, no ML models.

---

## Input Requirements

All scripts accept a JSON file as positional input argument. See `assets/sample_campaign_data.json` for complete examples.

### Attribution Analyzer

```json
{
  "journeys": [
    {
      "journey_id": "j1",
      "touchpoints": [
        {"channel": "organic_search", "timestamp": "2025-10-01T10:00:00", "interaction": "click"},
        {"channel": "email", "timestamp": "2025-10-05T14:30:00", "interaction": "open"},
        {"channel": "paid_search", "timestamp": "2025-10-08T09:15:00", "interaction": "click"}
      ],
      "converted": true,
      "revenue": 500.00
    }
  ]
}
```

### Funnel Analyzer

```json
{
  "funnel": {
    "stages": ["Awareness", "Interest", "Consideration", "Intent", "Purchase"],
    "counts": [10000, 5200, 2800, 1400, 420]
  }
}
```

### Campaign ROI Calculator

```json
{
  "campaigns": [
    {
      "name": "Spring Email Campaign",
      "channel": "email",
      "spend": 5000.00,
      "revenue": 25000.00,
      "impressions": 50000,
      "clicks": 2500,
      "leads": 300,
      "customers": 45
    }
  ]
}
```

### Input Validation

Before running scripts, verify your JSON is valid and matches the expected schema. Common errors:

- **Missing required keys** (e.g., `journeys`, `funnel.stages`, `campaigns`) → script exits with a descriptive `KeyError`
- **Mismatched array lengths** in funnel data (`stages` and `counts` must be the same length) → raises `ValueError`
- **Non-numeric monetary values** in ROI data → raises `TypeError`

Use `python -m json.tool your_file.json` to validate JSON syntax before passing it to any script.

---

## Output Formats

All scripts support two output formats via the `--format` flag:

- `--format text` (default): Human-readable tables and summaries for review
- `--format json`: Machine-readable JSON for integrations and pipelines

---

## Typical Analysis Workflow

For a complete campaign review, run the three scripts in sequence:

```bash
# Step 1 — Attribution: understand which channels drive conversions
python scripts/attribution_analyzer.py campaign_data.json --model time-decay

# Step 2 — Funnel: identify where prospects drop off on the path to conversion
python scripts/funnel_analyzer.py funnel_data.json

# Step 3 — ROI: calculate profitability and benchmark against industry standards
python scripts/campaign_roi_calculator.py campaign_data.json
```

Use attribution results to identify top-performing channels, then focus funnel analysis on those channels' segments, and finally validate ROI metrics to prioritize budget reallocation.

---

## How to Use

### Attribution Analysis

```bash
# Run all 5 attribution models
python scripts/attribution_analyzer.py campaign_data.json

# Run a specific model
python scripts/attribution_analyzer.py campaign_data.json --model time-decay

# JSON output for pipeline integration
python scripts/attribution_analyzer.py campaign_data.json --format json

# Custom time-decay half-life (default: 7 days)
python scripts/attribution_analyzer.py campaign_data.json --model time-decay --half-life 14
```

### Funnel Analysis

```bash
# Basic funnel analysis
python scripts/funnel_analyzer.py funnel_data.json

# JSON output
python scripts/funnel_analyzer.py funnel_data.json --format json
```

### Campaign ROI Calculation

```bash
# Calculate ROI metrics for all campaigns
python scripts/campaign_roi_calculator.py campaign_data.json

# JSON output
python scripts/campaign_roi_calculator.py campaign_data.json --format json
```

---

## Scripts

### 1. attribution_analyzer.py

Implements five industry-standard attribution models to allocate conversion credit across marketing channels:

| Model | Description | Best For |
|-------|-------------|----------|
| First-Touch | 100% credit to first interaction | Brand awareness campaigns |
| Last-Touch | 100% credit to last interaction | Direct response campaigns |
| Linear | Equal credit to all touchpoints | Balanced multi-channel evaluation |
| Time-Decay | More credit to recent touchpoints | Short sales cycles |
| Position-Based | 40/20/40 split (first/middle/last) | Full-funnel marketing |

### 2. funnel_analyzer.py

Analyzes conversion funnels to identify bottlenecks and optimization opportunities:

- Stage-to-stage conversion rates and drop-off percentages
- Automatic bottleneck identification (largest absolute and relative drops)
- Overall funnel conversion rate
- Segment comparison when multiple segments are provided

### 3. campaign_roi_calculator.py

Calculates comprehensive ROI metrics with industry benchmarking:

- **ROI**: Return on investment percentage
- **ROAS**: Return on ad spend ratio
- **CPA**: Cost per acquisition
- **CPL**: Cost per lead
- **CAC**: Customer acquisition cost
- **CTR**: Click-through rate
- **CVR**: Conversion rate (leads to customers)
- Flags underperforming campaigns against industry benchmarks

---

## Reference Guides

| Guide | Location | Purpose |
|-------|----------|---------|
| Attribution Models Guide | `references/attribution-models-guide.md` | Deep dive into 5 models with formulas, pros/cons, selection criteria |
| Campaign Metrics Benchmarks | `references/campaign-metrics-benchmarks.md` | Industry benchmarks by channel and vertical for CTR, CPC, CPM, CPA, ROAS |
| Funnel Optimization Framework | `references/funnel-optimization-framework.md` | Stage-by-stage optimization strategies, common bottlenecks, best practices |

---

## Best Practices

1. **Use multiple attribution models** -- Compare at least 3 models to triangulate channel value; no single model tells the full story.
2. **Set appropriate lookback windows** -- Match your time-decay half-life to your average sales cycle length.
3. **Segment your funnels** -- Compare segments (channel, cohort, geography) to identify performance drivers.
4. **Benchmark against your own history first** -- Industry benchmarks provide context, but historical data is the most relevant comparison.
5. **Run ROI analysis at regular intervals** -- Weekly for active campaigns, monthly for strategic review.
6. **Include all costs** -- Factor in creative, tooling, and labor costs alongside media spend for accurate ROI.
7. **Document A/B tests rigorously** -- Use the provided template to ensure statistical validity and clear decision criteria.

---

## Limitations

- **No statistical significance testing** -- Scripts provide descriptive metrics only; p-value calculations require external tools.
- **Standard library only** -- No advanced statistical libraries. Suitable for most campaign sizes but not optimized for datasets exceeding 100K journeys.
- **Offline analysis** -- Scripts analyze static JSON snapshots; no real-time data connections or API integrations.
- **Single-currency** -- All monetary values assumed to be in the same currency; no currency conversion support.
- **Simplified time-decay** -- Exponential decay based on configurable half-life; does not account for weekday/weekend or seasonal patterns.
- **No cross-device tracking** -- Attribution operates on provided journey data as-is; cross-device identity resolution must be handled upstream.

## Related Skills

- **analytics-tracking**: For setting up tracking. NOT for analyzing data (that's this skill).
- **ab-test-setup**: For designing experiments to test what analytics reveals.
- **marketing-ops**: For routing insights to the right execution skill.
- **paid-ads**: For optimizing ad spend based on analytics findings.
