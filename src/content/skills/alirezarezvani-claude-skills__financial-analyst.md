---
name: "financial-analyst"
description_en: "Performs financial ratio analysis, DCF valuation, budget variance analysis, and rolling forecast construction for strategic decision-making. Use when analyzing financial statements, building valuation models, assessing budget variances, or constructing financial projections and forecasts. Also applicable when users mention financial modeling, cash flow analysis, company valuation, financial projec"
description_tr: "Finansal oran analizi, DCF değerleme, bütçe varyans analizi ve rolling forecast oluşturmayı gerçekleştirir. Finansal tabloları analiz ederken, değerleme modelleri inşa ederken, bütçe sapmalarını değerlendirirken veya finansal projeksiyonlar ve tahminler oluştururken kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/financial-analyst/SKILL.md"
path: ".gemini/skills/financial-analyst/SKILL.md"
is_collection: false
body_length: 6719
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Finansal Analist Becerisi
  
  ## Genel Bakış
  
  Oran analizi, DCF değerlemesi, bütçe varyans analizi ve devam eden tahmin oluşturmayı sağlayan üretim-hazır finansal analiz araç seti. Finansal modelleme, tahmin ve bütçeleme, yönetim raporlaması, işletme performans analizi ve yatırım analizi için tasarlanmıştır.
  
  ## 5 Aşamalı İş Akışı
  
  ### Aşama 1: Kapsam Belirleme
  - Analiz hedeflerini ve paydaş gereksinimlerini tanımlama
  - Veri kaynaklarını ve zaman dilimlerini belirleme
  - Önemlillik eşiklerini ve doğruluk hedeflerini oluşturma
  - Uygun analitik çerçeveleri seçme
  
  ### Aşama 2: Veri Analizi & Modelleme
  - Finansal verileri toplama ve doğrulama (gelir tablosu, bilanço, nakit akışı)
  - **Oran hesaplamalarını çalıştırmadan önce giriş veri bütünlüğünü doğrulama** (eksik alanlar, null değerler veya makul olmayan değerleri kontrol etme)
  - 5 kategori genelinde finansal oranları hesaplama (karlılık, likidite, kaldıraç, verimlilik, değerleme)
  - WACC ve terminal değer hesaplamaları ile DCF modelleri oluşturma; **DCF çıktılarını sanity bounds karşısında çapraz kontrol etme** (örn. ima edilen katlar vs. karşılaştırılabilirler)
  - Olumlu/olumsuz sınıflandırmaları ile bütçe varyans analizleri oluşturma
  - Senaryo modellemesi ile sürücü-tabanlı tahminler geliştirme
  
  ### Aşama 3: İçgörü Oluşturma
  - Oran eğilimlerini yorumlama ve endüstri standartlarına karşı kıyaslama
  - Önemli sapmaları ve kök nedenleri belirleme
  - Duyarlılık analizi aracılığıyla değerleme aralıklarını değerlendirme
  - Karar desteği için tahmin senaryolarını (temel/boğa/ayı) değerlendirme
  
  ### Aşama 4: Raporlama
  - Ana bulguları içeren yönetici özeti oluşturma
  - Departman ve kategoriye göre ayrıntılı varyans raporları üretme
  - Duyarlılık tabloları ile DCF değerleme raporları sunma
  - Trend analizi ile devam eden tahminleri sunma
  
  ### Aşama 5: Takip
  - Tahmin doğruluğunu izleme (hedef: +/-5% gelir, +/-3% giderler)
  - Rapor teslim zamanlamasını izleme (hedef: %100 zamanında)
  - Fiili veriler kullanılabilir hale geldikçe modelleri güncelleme
  - Varyans analizi temelinde varsayımları iyileştirme
  
  ## Araçlar
  
  ### 1. Oran Hesaplayıcı (`scripts/ratio_calculator.py`)
  
  Finansal tablo verilerinden finansal oranları hesaplama ve yorumlama.
  
  **Oran Kategorileri:**
  - **Karlılık:** ROE, ROA, Brüt Marj, Faaliyet Marjı, Net Marj
  - **Likidite:** Cari Oran, Hızlı Oran, Nakit Oranı
  - **Kaldıraç:** Borç-Öz Sermaye Oranı, Faiz Karşılama Oranı, DSCR
  - **Verimlilik:** Varlık Devri, Envanter Devri, Alacak Devri, DSO
  - **Değerleme:** P/E, P/B, P/S, EV/EBITDA, PEG Oranı
  
  ```bash
  python scripts/ratio_calculator.py assets/sample_financial_data.json
  python scripts/ratio_calculator.py assets/sample_financial_data.json --format json
  python scripts/ratio_calculator.py assets/sample_financial_data.json --category profitability
  ```
  
  ### 2. DCF Değerlemesi (`scripts/dcf_valuation.py`)
  
  Duyarlılık analizi ile İndirgenmemiş Nakit Akışı işletme ve öz sermaye değerlemesi.
  
  **Özellikler:**
  - CAPM aracılığıyla WACC hesaplaması
  - Gelir ve serbest nakit akışı projeksiyonları (5 yıl varsayılan)
  - Kalıcı büyüme ve çıkış katı yöntemleri aracılığıyla terminal değer
  - İşletme değeri ve öz sermaye değeri türetilmesi
  - İki yönlü duyarlılık analizi (indirim oranı vs büyüme oranı)
  
  ```bash
  python scripts/dcf_valuation.py assets/sample_financial_data.json
  python scripts/dcf_valuation.py assets/sample_financial_data.json --format json
  python scripts/dcf_valuation.py assets/sample_financial_data.json --projection-years 7
  ```
  
  ### 3. Bütçe Varyans Analisti (`scripts/budget_variance_analyzer.py`)
  
  Önemlillik filtreleme ile fiili vs bütçe vs önceki yıl performansını analiz etme.
  
  **Özellikler:**
  - Dolar ve yüzde varyans hesaplaması
  - Önemlillik eşiği filtreleme (varsayılan: %10 veya $50K)
  - Gelir/gider mantığı ile olumlu/olumsuz sınıflandırma
  - Departman ve kategori ayrıntılandırması
  - Yönetici özeti oluşturma
  
  ```bash
  python scripts/budget_variance_analyzer.py assets/sample_financial_data.json
  python scripts/budget_variance_analyzer.py assets/sample_financial_data.json --format json
  python scripts/budget_variance_analyzer.py assets/sample_financial_data.json --threshold-pct 5 --threshold-amt 25000
  ```
  
  ### 4. Tahmin Oluşturucu (`scripts/forecast_builder.py`)
  
  Senaryo modellemesi ve devam eden nakit akışı projeksiyonu ile sürücü-tabanlı gelir tahmini.
  
  **Özellikler:**
  - Sürücü-tabanlı gelir tahmin modeli
  - 13 haftalık devam eden nakit akışı projeksiyonu
  - Senaryo modellemesi (temel/boğa/ayı durumları)
  - Basit doğrusal regresyon (standart kütüphane) kullanarak trend analizi
  
  ```bash
  python scripts/forecast_builder.py assets/sample_financial_data.json
  python scripts/forecast_builder.py assets/sample_financial_data.json --format json
  python scripts/forecast_builder.py assets/sample_financial_data.json --scenarios base,bull,bear
  ```
  
  ## Bilgi Tabanları
  
  | Referans | Amaç |
  |----------|------|
  | `references/financial-ratios-guide.md` | Oran formülleri, yorumlama, endüstri kıyaslamaları |
  | `references/valuation-methodology.md` | DCF metodolojisi, WACC, terminal değer, karşılaştırılabilirler |
  | `references/forecasting-best-practices.md` | Sürücü-tabanlı tahmin, devam eden tahminler, doğruluk |
  | `references/industry-adaptations.md` | Sektöre özgü metrikler ve hususlar (SaaS, Perakende, İmalat, Finansal Hizmetler, Sağlık) |
  
  ## Şablonlar
  
  | Şablon | Amaç |
  |--------|------|
  | `assets/variance_report_template.md` | Bütçe varyans raporu şablonu |
  | `assets/dcf_analysis_template.md` | DCF değerleme analizi şablonu |
  | `assets/forecast_report_template.md` | Gelir tahmin raporu şablonu |
  
  ## Anahtar Metrikler & Hedefler
  
  | Metrik | Hedef |
  |--------|-------|
  | Tahmin doğruluğu (gelir) | +/-5% |
  | Tahmin doğruluğu (giderler) | +/-3% |
  | Rapor teslimi | %100 zamanında |
  | Model belgelendirmesi | Tüm varsayımlar için tam |
  | Varyans açıklaması | Önemli varyansların %100'ü |
  
  ## Giriş Veri Formatı
  
  Tüm komut dosyaları iki şekilde JSON giriş dosyalarını kabul eder:
  
  1. **Düz** — aracın beklenen anahtarları üst düzeyde (örn. oran hesaplayıcı için `income_statement` / `balance_sheet`, DCF için `historical` / `assumptions`, varyans için `line_items`, tahmin için `historical_periods` / `drivers` / `assumptions` / `cash_flow_inputs`).
  2. **İçiçe (paketlenmiş)** — tüm dört araç için girdiler bir dosyada, araç başına anahtarlar altında iç içe geçmiş: `ratio_analysis`, `dcf_valuation`, `budget_variance`, `forecast`. Tam paketlenmiş şema için `assets/sample_financial_data.json` dosyasına bakın; yukarıdaki her hızlı başlangıç komutu doğrudan ona karşı çalışır.
  
  Her komut dosyası şekli otomatik olarak algılar (düz anahtarlar varsa kazanır) ve her iki şekil de kullanılabilir veri vermezse sıfırdan farklı çıkar ve net bir hata verir.
  
  ## Bağımlılıklar
  
  **Yok** - Tüm komut dosyaları yalnızca Python standart kütüphanesini kullanır (`math`, `statistics`, `json`, `argparse`, `datetime`). numpy, pandas veya scipy gerekli değildir.
---

# Financial Analyst Skill

## Overview

Production-ready financial analysis toolkit providing ratio analysis, DCF valuation, budget variance analysis, and rolling forecast construction. Designed for financial modeling, forecasting & budgeting, management reporting, business performance analysis, and investment analysis.

## 5-Phase Workflow

### Phase 1: Scoping
- Define analysis objectives and stakeholder requirements
- Identify data sources and time periods
- Establish materiality thresholds and accuracy targets
- Select appropriate analytical frameworks

### Phase 2: Data Analysis & Modeling
- Collect and validate financial data (income statement, balance sheet, cash flow)
- **Validate input data completeness** before running ratio calculations (check for missing fields, nulls, or implausible values)
- Calculate financial ratios across 5 categories (profitability, liquidity, leverage, efficiency, valuation)
- Build DCF models with WACC and terminal value calculations; **cross-check DCF outputs against sanity bounds** (e.g., implied multiples vs. comparables)
- Construct budget variance analyses with favorable/unfavorable classification
- Develop driver-based forecasts with scenario modeling

### Phase 3: Insight Generation
- Interpret ratio trends and benchmark against industry standards
- Identify material variances and root causes
- Assess valuation ranges through sensitivity analysis
- Evaluate forecast scenarios (base/bull/bear) for decision support

### Phase 4: Reporting
- Generate executive summaries with key findings
- Produce detailed variance reports by department and category
- Deliver DCF valuation reports with sensitivity tables
- Present rolling forecasts with trend analysis

### Phase 5: Follow-up
- Track forecast accuracy (target: +/-5% revenue, +/-3% expenses)
- Monitor report delivery timeliness (target: 100% on time)
- Update models with actuals as they become available
- Refine assumptions based on variance analysis

## Tools

### 1. Ratio Calculator (`scripts/ratio_calculator.py`)

Calculate and interpret financial ratios from financial statement data.

**Ratio Categories:**
- **Profitability:** ROE, ROA, Gross Margin, Operating Margin, Net Margin
- **Liquidity:** Current Ratio, Quick Ratio, Cash Ratio
- **Leverage:** Debt-to-Equity, Interest Coverage, DSCR
- **Efficiency:** Asset Turnover, Inventory Turnover, Receivables Turnover, DSO
- **Valuation:** P/E, P/B, P/S, EV/EBITDA, PEG Ratio

```bash
python scripts/ratio_calculator.py assets/sample_financial_data.json
python scripts/ratio_calculator.py assets/sample_financial_data.json --format json
python scripts/ratio_calculator.py assets/sample_financial_data.json --category profitability
```

### 2. DCF Valuation (`scripts/dcf_valuation.py`)

Discounted Cash Flow enterprise and equity valuation with sensitivity analysis.

**Features:**
- WACC calculation via CAPM
- Revenue and free cash flow projections (5-year default)
- Terminal value via perpetuity growth and exit multiple methods
- Enterprise value and equity value derivation
- Two-way sensitivity analysis (discount rate vs growth rate)

```bash
python scripts/dcf_valuation.py assets/sample_financial_data.json
python scripts/dcf_valuation.py assets/sample_financial_data.json --format json
python scripts/dcf_valuation.py assets/sample_financial_data.json --projection-years 7
```

### 3. Budget Variance Analyzer (`scripts/budget_variance_analyzer.py`)

Analyze actual vs budget vs prior year performance with materiality filtering.

**Features:**
- Dollar and percentage variance calculation
- Materiality threshold filtering (default: 10% or $50K)
- Favorable/unfavorable classification with revenue/expense logic
- Department and category breakdown
- Executive summary generation

```bash
python scripts/budget_variance_analyzer.py assets/sample_financial_data.json
python scripts/budget_variance_analyzer.py assets/sample_financial_data.json --format json
python scripts/budget_variance_analyzer.py assets/sample_financial_data.json --threshold-pct 5 --threshold-amt 25000
```

### 4. Forecast Builder (`scripts/forecast_builder.py`)

Driver-based revenue forecasting with rolling cash flow projection and scenario modeling.

**Features:**
- Driver-based revenue forecast model
- 13-week rolling cash flow projection
- Scenario modeling (base/bull/bear cases)
- Trend analysis using simple linear regression (standard library)

```bash
python scripts/forecast_builder.py assets/sample_financial_data.json
python scripts/forecast_builder.py assets/sample_financial_data.json --format json
python scripts/forecast_builder.py assets/sample_financial_data.json --scenarios base,bull,bear
```

## Knowledge Bases

| Reference | Purpose |
|-----------|---------|
| `references/financial-ratios-guide.md` | Ratio formulas, interpretation, industry benchmarks |
| `references/valuation-methodology.md` | DCF methodology, WACC, terminal value, comps |
| `references/forecasting-best-practices.md` | Driver-based forecasting, rolling forecasts, accuracy |
| `references/industry-adaptations.md` | Sector-specific metrics and considerations (SaaS, Retail, Manufacturing, Financial Services, Healthcare) |

## Templates

| Template | Purpose |
|----------|---------|
| `assets/variance_report_template.md` | Budget variance report template |
| `assets/dcf_analysis_template.md` | DCF valuation analysis template |
| `assets/forecast_report_template.md` | Revenue forecast report template |

## Key Metrics & Targets

| Metric | Target |
|--------|--------|
| Forecast accuracy (revenue) | +/-5% |
| Forecast accuracy (expenses) | +/-3% |
| Report delivery | 100% on time |
| Model documentation | Complete for all assumptions |
| Variance explanation | 100% of material variances |

## Input Data Format

All scripts accept JSON input files in either of two shapes:

1. **Flat** — the tool's expected keys at the top level (e.g., `income_statement` / `balance_sheet` for the ratio calculator, `historical` / `assumptions` for DCF, `line_items` for variance, `historical_periods` / `drivers` / `assumptions` / `cash_flow_inputs` for forecasting).
2. **Nested (bundled)** — inputs for all four tools in one file, nested under per-tool keys: `ratio_analysis`, `dcf_valuation`, `budget_variance`, `forecast`. See `assets/sample_financial_data.json` for the complete bundled schema; every quick-start command above runs directly against it.

Each script auto-detects the shape (flat keys win if present) and exits non-zero with a clear error if neither shape yields usable data.

## Dependencies

**None** - All scripts use Python standard library only (`math`, `statistics`, `json`, `argparse`, `datetime`). No numpy, pandas, or scipy required.
