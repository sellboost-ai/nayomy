---
name: "grants"
description_en: "NIH grant research skill for clinical researchers. Grill-me intake (research idea + career stage + preliminary data + environment + submission posture + known institute targets) locks down the funding strategy before any search runs. Runs a 5-facet Consensus positioning analysis (with draft Significance/Innovation language), maps the research to the right NIH institutes and study sections via RePO"
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/grants/SKILL.md"
path: ".gemini/skills/grants/SKILL.md"
is_collection: false
body_length: 13440
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Hibeler — NIH Finansman İstihbaratı

  > **Taşınabilirlik:** `bash_tool` (RePORTER POST için curl), Node.js ile `docx` paketi ve Consensus MCP bağlantısı gerektirir. Claude Code CLI'de yerel olarak çalışır. Claude.ai'de Code Execution + Consensus MCP ile iş akışı desteklenir ancak daha yavaştır.

  > **Kapsam: Yalnızca NIH.** NIH dışı finansörler (PCORI, DOD CDMRP, VA, vakıflar) kapsam dışıdır ve giriş aşamasında işaretlenir.

  Araştırma fikri olan klinik araştırmacı için düzenlenebilir `.docx` formatında stratejik NIH finansman genel görünümü üretin. Çıktı araştırma konumlandırması analizi, enstitü haritalaması, hedefli hibe keşfi ve araştırmacının editör, mentorleriyle paylaşabilecekleri stratejik öneriler içerir.

  ## Agent Bütünlük Kuralları (Research-Pack Konvansiyonu)

  Miras alınan; PR #657 denetimi başına kelime kelime kilitli.

  - **Yürütme disiplini.** Bir adım sonuç alındığında tamamlanmış olur. Consensus çağrıları **sıralı, 1+ sn duraksamalı**. RePORTER çağrıları sıralı.
  - **Veri kaynağı.** Yalnızca bu oturumdaki araç çağrılarının döndürdüğünü say. Hiçbir zaman eğitim bilgisiyle tamamlama yapma. Eğitim bilgisi `[Consensus/RePORTER'dan değil — referans bilgi]` olarak etiketlenir ve sayımlardan hariç tutulur.
  - **Sayımlar ve atıf.** Gönderilen sorgular / gösterilen sonuçlar / alıntılanan sonuçlar — üç ayrı sayı, asla karıştırma. Alıntılanan her makalenin bu oturumdaki erişilebilir URL'si vardır.
  - **Hata işleme.** Başarısızlık durumunda → 3sn bekle → bir kez yeniden dene → günlük. 3 araç arasında ardışık 3 başarısızlık: durdur, araştırmacıyı uyar, eksik olanları açıkla. Asla sessizce atla.
  - **Şeffaflık.** DOCX'te Denetim Günlüğü bölümü. Belgede olduğu gibi sohbet özetinde de aynı standartlar.

  [`references/reporter_post_patterns.md`](references/reporter_post_patterns.md) adresinde RePORTER POST kanonik + plan katmanı tespiti için bkz.

  ## Faz 1: Grill-Me Giriş (6 zorlayıcı soru, teker teker)

  ### S1 (kök) — Araştırma fikri

  > **Araştırma fikrini 2–3 cümlede açıklayın. Soru nedir, yeni olan nedir ve klinik alaka nedir? Muğlak cevaplar ("sağlık için AI", "hastalık X için biyobelirteçler") reddedilecektir — spesifiklik için ısrar edin.**
  >
  > *Neden soruyorum:* Beş Consensus araması (kurulu / riskler / mevcut yaklaşımlar / bitişik yöntemler / boşluklar) kesin bir araştırma fikrini gerektirir. Muğlak fikirler muğlak boşluk alıntıları ve işe yaramaz konumlandırma anlatımı üretir.

  Muğlak cevapları reddet. Kullanıcı çok geniş ise örneklerle bir kez yeniden sor.

  ### S2 (S1'e bağlı) — Kariyer aşaması

  > **Kariyer aşaması — birini seçin:**
  >
  > 1. Doktora öncesi (Doktora öğrencisi, T32 stajyeri)
  > 2. Doktora sonrası araştırmacı (F32, K99 adayı)
  > 3. Erken kariyer (K-award adayı, ilk R01)
  > 4. Bağımsız araştırmacı (birden fazla R01, kuruluş laboratoruvarı)
  > 5. Kıdemli PI (R35, P-serisi, U01 liderliği)
  >
  > *Neden soruyorum:* Kariyer aşaması mekanizma önerilerini filtreler. Stajyerler için F-serisi, erken kariyer için K-serisi, bağımsız olanlar için R-serisi. Yanlış aşama seçimi finanse edilemeyen mekanizma önerileri üretir.

  Zorlayıcı seçim.

  ### S3 (S2'ye bağlı) — Ön veri durumu

  > **Ön veri — birini seçin:**
  >
  > 1. Hiçbiri (de novo proje, henüz pilot veri yok)
  > 2. Pilot veri (erken bulgular, tek site)
  > 3. Güçlü ön veri (multi-deney, R01 ölçeğine hazır)
  > 4. Doğrulanmış ve hazır (çok siteli, yayın hazırlığı)
  >
  > *Neden soruyorum:* Ön veri durumu mekanizma bütçesini yönlendirir. Veri yok → R03 / R21 pilot kapsamı. Güçlü ön veri → R01 / U01 çok siteli ölçek. Uyumsuzluk rekabetçi olmayan başvurular üretir.

  ### S4 (S2'ye bağlı) — Ortam

  > **Araştırma ortamı — birini seçin:**
  >
  > 1. R01 uygun (NIH temel fonlaması olan araştırma yoğun enstitü)
  > 2. Orta kademe (bölgesel akademik tıp merkezi, mütevazı NIH portföyü)
  > 3. Kaynak sınırlı (küçük enstitü, minimal NIH temel fonu)
  > 4. Endüstri-işbirlikçi (akademik + endüstri ortaklığı)
  >
  > *Neden soruyorum:* Ortam, kapsam gerçekçiliğini (çok siteli U01 R01 uygun gerektirir) ve hangi mekanizma kategorilerinin rekabetçi olduğunu etkiler (R15 özellikle kaynak sınırlılığı hedefler).

  ### S5 (S1'e bağlı) — Sunuş tavrı

  > **Sunuş tavrı — birini seçin:**
  >
  > 1. Yeni başvuru (ilk sunuş, önceki inceleme yok)
  > 2. Yeniden sunuş (inceleyici yanıtları gereken A1)
  > 3. Keşif (henüz sunup sunmayacağına karar vermedim)
  >
  > *Neden soruyorum:* Yeniden sunuşlar DOCX'te inceleyici yanıt rehberliğine ihtiyaç duyar (Bölüm 7). Yeni uygulamalar bunu atlar. Keşif vurguyu strateji üzerinden peyzaja kaydırır.

  ### S6 (S1'e bağlı) — Bilinen enstitü hedefleri

  > **Zaten belirli NIH enstitülerini düşünüyor musunuz? İsim listesi verin (NCI / NHLBI / NIMH / NINDS / NIDDK / vb.) ya da "tercih yok — doğru olanları bulun" deyin.**
  >
  > *Neden soruyorum:* Enstitü hipoteziniz varsa, onu RePORTER verilerine karşı doğruluğunu kontrol edeceğim. Yoksa, enstitü sayımından bitişik çalışmayı finanse eden ilk 3 enstitüyü ortaya çıkaracağım.

  "Tercih yok" yaygın durum olarak kabul et.

  **Durdurma koşulu:** S6'dan sonra taahhüt ve Faz 2A'yı başlat. Faz 2A başladıktan sonra asla giriş tekrar açma.

  ## Faz 2A: Araştırma Konumlandırması (5 Consensus araması)

  Sıralı olarak 1 s/sn çalıştır. Her arama bir konumlandırma yönünü karşılık gelir:

  1. **Kurulu** — `"<araştırma fikri>" kurulu kanıt` — bilinen nedir
  2. **Riskler** — `"<konu>" mortalite VEYA yük VEYA maliyet VEYA prevalans` — neden önemli
  3. **Mevcut Yaklaşımlar** — `"<konu>" mevcut tedavi VEYA standart bakım VEYA yaklaşım` — sanat durumu
  4. **Bitişik Yöntemler** — `"<ilişkili teknik>" <konuya> uygulanmış` — metodolojik olanaklar
  5. **Boşluklar** — `"<konu>" sınırlamalar VEYA cevaplanmamış VEYA gelecek yönler VEYA zorluk` — boşluk sinyalleri

  Her biri için `scripts/citation_tracker.py --action record_consensus_search` kullan. Plan katmanı ilk yanıttan algılanır.

  **Sentez:** her yön için 2-3 alıntı yapılabilir bulgu ayıkla (Bölüm 2 boşluk alıntıları olur). "Alan X'i kurmuştur (refs), ancak Y yanıtlanmamıştır (refs)" desenini kullanan Önem/İnovasyon dili taslağı.

  ## Faz 2B: Enstitü Haritalaması + Hibe Keşfi (RePORTER POST)

  RePORTER **yalnızca POST**. `bash_tool` + `curl` kullan — hiçbir zaman `web_fetch` kullanma.

  ### Dinamik mali yıl penceresi

  Çalışma zamanında `scripts/fiscal_year_calculator.py` aracılığıyla hesapla. Varsayılan: mevcut FY + 3 önceki. Federal FY 1 Ekim'de başlar, bu nedenle:

  ```bash
  python scripts/fiscal_year_calculator.py --output json
  # Döndürür: {"current_fy": 2026, "window": [2023, 2024, 2025, 2026]}
  ```

  ### Dar (AND) arama — doğrudan örtüşmeyi bulur

  ```bash
  curl -X POST 'https://api.reporter.nih.gov/v2/projects/search' \
    -H 'Content-Type: application/json' \
    -d '{
      "criteria": {
        "fiscal_years": [2023, 2024, 2025, 2026],
        "include_active_projects": true,
        "advanced_text_search": {
          "operator": "AND",
          "search_field": "all",
          "search_text": "<anahtar terim 1> <anahtar terim 2>"
        }
      },
      "limit": 50,
      "include_fields": ["project_num", "project_title", "agency_ic_admin", "study_section", "fiscal_year", "principal_investigators", "abstract_text"]
    }'
  ```

  ### Geniş (OR) arama — bitişik çalışmayı bulur

  ```bash
  curl -X POST 'https://api.reporter.nih.gov/v2/projects/search' \
    -H 'Content-Type: application/json' \
    -d '{
      "criteria": {
        "fiscal_years": [2023, 2024, 2025, 2026],
        "advanced_text_search": {
          "operator": "OR",
          "search_field": "all",
          "search_text": "<terim> <eşanlamlı> <ilişkili kavram>"
        }
      },
      "limit": 50
    }'
  ```

  ### Enstitü sayımı + çalışma bölümü sıralaması

  RePORTER yanıtlarından sonra:
  - `agency_ic_admin` sayımı (enstitü kodu: NCI, NHLBI, NIMH, vb.) → ilk 3 fon enstitüsü
  - `study_section` sayımı → ilk 2 çalışma bölümü (uygulamaların inceleme için gittiği yer)

  ### NOSI keşfi

  RePORTER yanıtlarını `NOT-*` fırsat numaraları için ayrıştır. Her biri için:

  ```bash
  # NOSI'ler tahmin edilebilir URL'lerde yaşar:
  # https://grants.nih.gov/grants/guide/notice-files/NOT-<ENSTİTÜ>-<YIL>-<NUMARA>.html
  web_fetch <url>
  ```

  Getirme başarısız olursa: `[NOSI {numara} — getirme başarısız, dahil edilmedi]` günlüğe al, devam et.

  ## Mekanizma Eşleştirmesi (Kapsam Farkı)

  SADECE kariyer aşaması değil. Kariyer aşaması **+** proje kapsamı **+** ön veri mekanizma önerisini yönlendirir.

  `scripts/mechanism_matcher.py` kullan:

  ```bash
  python scripts/mechanism_matcher.py \
    --career-stage "early_career" \
    --prelim-data "pilot" \
    --environment "r01_eligible" \
    --scope "single_site" \
    --output json
  # Mekanizma kısa listesini mantıkla döndürür
  ```

  Tam matris için [`references/nih_mechanism_matching.md`](references/nih_mechanism_matching.md) adresine bkz.

  ## Faz 3: DOCX Üretimi

  Node.js + `docx` kütüphanesi aracılığıyla 9 bölüm. Tam spec için [`references/docx_9_sections.md`](references/docx_9_sections.md) adresine bkz.

  1. **Yönetici Özeti** — başlık + kariyer aşaması + ortam + 3-4 anahtar bulgu madde
  2. **Araştırma Konumlandırması** — 3-5 boşluk alıntısı (italik, satır içi Consensus alıntıları) + 2-3 paragraf konumlandırma anlatımı + destek kanıt tablosu
  3. **Hedef Enstitüler** — sıralama tablosu (enstitü, pencere içinde proje sayısı, fikirle % eşleşme) + 2-3 cümle yorumu
  4. **Hibe Fırsatları** — kalın NOSI çağrı varsa. Hiperlink FOA'lar + hibe başına kapsam/bütçe uygunluğu paragrafı ile ilk 3 hibe tablosu
  5. **Finanse Edilmiş Örtüşme** — ilk 5 proje tablosu (PI, project_num, IC, yıl, RePORTER'e hiperlink) + farklılaştırma paragrafı
  6. **Çalışma Bölümleri** — sıralama tablosu + en iyi eşleşme yorumu
  7. **Stratejik Öneriler ve Sonraki Adımlar** — 3-4 numaralandırılmış öneriler + **zorunlu program memuru önerisi** + sunuş zaman çizelgesi notu + (yeniden sunuş S5=2 ise) inceleyici yanıt rehberliği + kapanış paragrafı
  8. **Referanslar** — numaralandırılmış bibliyografi, Consensus'e hiperlink
  9. **Denetim Günlüğü** — Consensus aramaları tablosu, plan katmanı notu, RePORTER aramaları tablosu, NOSI getirmeleri tablosu, özet istatistikleri, araç kısıtlamaları notu, başarısız adımlar

  ### Stil

  Arial 12pt gövde, lacivert başlıklar (#1a3a5c), açık mavi tablo başlıkları (#e8f0f8), kehribar NOSI çağrısı. `ExternalHyperlink` desenleri:
  - Makale alıntıları: `https://consensus.app/papers/...`
  - FOA bağlantıları: `https://grants.nih.gov/grants/guide/...`
  - RePORTER projeleri: `https://reporter.nih.gov/project-details/<id>`

  ## Zorunlu Program Memuru Tavsiyesi

  Her zaman Bölüm 7'de dahil et:

  > **Önerilen sonraki adım: {üst enstitü} adresindeki program memuru ile iletişime geçin.** Personel sayfasını https://www.nih.gov/institutes-nih/list-nih-institutes-centers-offices adresinde bulun → {enstitü} → Program Memurları. Hazırla: 1 sayfalık belirli hedefler + CV'niz + uyum hakkında 3 spesifik soru. E-posta konusu: "Ön-başvuru danışması: <konu>".

  Bu, herhangi bir başvurucu için sunulan en değerli tavsiyedir. Asla atla.

  ## Sunuş Zaman Çizelgesi (DOCX Bölüm 7'ye Gömülü)

  | Mekanizma | Standart giriş tarihleri |
  |---|---|
  | R01, R21, R03 | 5 Şub, 5 Haz, 5 Eki |
  | K-award'lar (K01, K08, K23, K99) | 12 Şub, 12 Haz, 12 Eki |
  | R34, R61/R33 | 16 Şub, 16 Haz, 16 Eki |
  | F31, F32 | 8 Nis, 8 Ağu, 8 Ara |

  ## Faz 4: Sunum

  - DOCX'i `<output-dir>/grants_<topic-slug>_<YYYY-MM-DD>.docx` adresinde kaydet
  - Sohbet özeti: dosya yolu + denetim sayıları + plan katmanı + enstitü hedefleri hakkında karar
  - Doğrula: `python3 -c "import zipfile,sys; zipfile.ZipFile(sys.argv[1]).testzip()" <docx>` ile zip bütünlüğünü kontrol et (çıktı yok = bozulmamış), ardından gerekli bölümlerin mevcut olduğunu onaylayın

  ## Araçlar

  | Betik | Rol |
  |---|---|
  | `scripts/citation_tracker.py` | Üç sayı denetimi (Consensus gönderilen/gösterilen/alıntılanan + RePORTER projeleri/alıntılanan) `~/.grants_sessions/<session>.json` adresinde |
  | `scripts/fiscal_year_calculator.py` | Mevcut FY + 3-önceki pencere. Çalışma zamanında hesaplanır, asla sabit kodlanmaz. |
  | `scripts/mechanism_matcher.py` | Kariyer aşaması × kapsam × ön veri → mekanizma önerisi kısa listesi |

  ## Referanslar

  - [`references/nih_mechanism_matching.md`](references/nih_mechanism_matching.md) — kariyer aşaması × kapsam × ön veri → mekanizma kanonik (7+ kaynak)
  - [`references/reporter_post_patterns.md`](references/reporter_post_patterns.md) — RePORTER curl POST şablonları + plan katmanı tespiti (7+ kaynak)
  - [`references/docx_9_sections.md`](references/docx_9_sections.md) — 9 bölüm .docx spec + teknik gereksinimler (7+ kaynak)

  ## Hata İşleme

  | Başarısızlık | Davranış |
  |---|---|
  | Consensus hız sınırı tetiklendi | 3sn bekle, bir kez yeniden dene, günlüğe al; hala başarısız ise araştırmacıyı uyar |
  | Consensus bir yön için 0 döndürür | Açıkça yüzeyine çıkar; asla eğitim bilgisiyle doldurma yapma |
  | Consensus plan katmanı sınırı algılandı | Katmanı günlüğe al, denetim loguna not düş, araştırmacıya yüzeyine çıkar |
  | RePORTER POST hata döndürür | 3sn sonra bir kez yeniden dene; hala başarısız ise günlüğe al ve devam et |
  | RePORTER dar araması <5 döndürür | Belgele; geniş OR telafi etmeli; düşük sayı yüzeyine çıkar |
  | NOSI getirmesi başarısız | `[NOSI {n} — getirme başarısız]` günlüğe al, devam et |
  | 3 ardışık araç başarısızlığı | Durdur, araştırmacıyı eksik olanın açıklaması ile uyar |
  | DOCX üretimi başarısız | Ham verileri JSON olarak kaydet, araştırmacı çalışmasını kaybetmesin diye |

  ## Reddedilecek Anti-Desenler

  - Consensus çağrılarını paralelleştirme (hız sınırı tetikleyecek)
  - RePORTER için `web_fetch` kullanma (POST-only — `web_fetch` GET'dir)
  - Sabit kodlanmış mali yıl değerleri
  - Sadece kariyer aşamasına dayanan mekanizma önerileri (kapsam da dikkate almalı)
  - İnce yön sonuçlarını sessizce eğitim bilgisiyle doldurma yapma
  - Denetim logunu atla
  - Program memuru tavsiyesini atla
  - "Bulunan kağıtlar"ı "gösterilen kağıtlar"a ve "alıntılanan kağıtlar"a karıştırma
  - Getirme başarısız olduğunda NOSI detayları oluşturma

  ---

  **Sürüm:** 1.0.0
  **Kaynak spec:** [`megaprompts/08-grants-megaprompt.md`](../../../../megaprompts/08-grants-megaprompt.md)
  **Yapı deseni:** Yol B (doğrudan dönüştürme). Pulse + litreview'in Research-pack kardeşi.
---

# Grants — NIH Funding Intelligence

> **Portability:** Requires `bash_tool` (for RePORTER POST via curl), Node.js with `docx` package, and a Consensus MCP connection. Works in Claude Code CLI natively. In Claude.ai with Code Execution + Consensus MCP, the workflow is supported but slower.

> **Scope: NIH-only.** Non-NIH funders (PCORI, DOD CDMRP, VA, foundations) are out of scope and flagged at intake.

For a clinical researcher with a research idea, produce a strategic NIH funding overview as an editable `.docx`. Output covers research positioning analysis, institute mapping, targeted grant discovery, and strategic recommendations the researcher can edit, copy from, and share with their mentor.

## Agent Integrity Rules (Research-Pack Convention)

Inherited; locked verbatim per PR #657 audit.

- **Execution discipline.** A step isn't complete until result is confirmed received. Consensus calls **sequential with 1+ sec pause**. RePORTER calls sequential.
- **Data sourcing.** Count only what tool calls returned this session. Never supplement with training knowledge. Training knowledge labeled `[Not from Consensus/RePORTER — reference information]` and excluded from counts.
- **Counts & attribution.** Queries sent / results shown / results cited — three separate numbers, never conflate. Every cited paper has retrievable URL from this session.
- **Error handling.** On failure → wait 3s → retry once → log. After 3 consecutive failures across tools: stop, alert researcher, explain what's missing. Never silently skip.
- **Transparency.** Audit Log section in the DOCX. Same standards in chat summary as in document.

See [`references/reporter_post_patterns.md`](references/reporter_post_patterns.md) for the RePORTER POST canon + plan-tier detection.

## Phase 1: Grill-Me Intake (6 forcing questions, one at a time)

### Q1 (root) — Research idea

> **Describe the research idea in 2–3 sentences. What's the question, what's new, and what's the clinical relevance? Vague answers ("AI for healthcare", "biomarkers for disease X") will be rejected — push for specificity.**
>
> *Why I'm asking:* Five Consensus searches (established / stakes / current approaches / adjacent methods / gaps) depend on a precise research idea. Vague ideas produce vague gap quotes and useless positioning narrative.

Refuse mush. Re-ask once with examples if user is too broad.

### Q2 (depends on Q1) — Career stage

> **Career stage — pick one:**
>
> 1. Pre-doctoral (PhD student, T32 trainee)
> 2. Postdoctoral fellow (F32, K99 candidate)
> 3. Early career (K-award candidate, first R01)
> 4. Independent investigator (multiple R01s, established lab)
> 5. Senior PI (R35, P-series, U01 leadership)
>
> *Why I'm asking:* Career stage filters mechanism recommendations. F-series for trainees, K-series for early career, R-series for independent. Picking the wrong stage produces unfundable mechanism suggestions.

Forcing choice.

### Q3 (depends on Q2) — Preliminary data status

> **Preliminary data — pick one:**
>
> 1. None (de novo project, no pilot data yet)
> 2. Pilot data (early findings, single-site)
> 3. Strong preliminary (multi-experiment, ready for R01-scale)
> 4. Validated and ready (multi-site, publication-ready)
>
> *Why I'm asking:* Prelim data status drives mechanism budget. No data → R03 / R21 pilot scope. Strong prelim → R01 / U01 multi-site scale. Mismatch produces uncompetitive applications.

### Q4 (depends on Q2) — Environment

> **Research environment — pick one:**
>
> 1. R01-eligible (research-intensive institution with NIH base funding)
> 2. Mid-tier (regional academic medical center, modest NIH portfolio)
> 3. Resource-constrained (smaller institution, minimal NIH base)
> 4. Industry-collaborative (academic + industry partnership)
>
> *Why I'm asking:* Environment affects scope realism (multi-site U01 requires R01-eligible) and which mechanism categories are competitive (R15 specifically targets resource-constrained).

### Q5 (depends on Q1) — Submission posture

> **Submission posture — pick one:**
>
> 1. New application (first submission, no prior reviews)
> 2. Resubmission (A1 with reviewer responses needed)
> 3. Exploring (haven't decided yet whether to submit)
>
> *Why I'm asking:* Resubmissions need reviewer-response guidance in the DOCX (Section 7). New applications skip that. Exploring shifts emphasis to landscape over strategy.

### Q6 (depends on Q1) — Known institute targets

> **Are you already considering specific NIH institutes? List names (NCI / NHLBI / NIMH / NINDS / NIDDK / etc.) or say "no preference — find the right ones".**
>
> *Why I'm asking:* If you have an institute hypothesis, I'll validate it against RePORTER data. If not, I'll surface the top-3 institutes funding adjacent work from the institute-tally.

Accept "no preference" as the common case.

**Stop condition:** After Q6, commit and start Phase 2A. Never re-open intake after Phase 2A begins.

## Phase 2A: Research Positioning (5 Consensus searches)

Run sequentially at 1 q/sec. Each search corresponds to one positioning facet:

1. **Established** — `"<research idea>" established evidence` — what's known
2. **Stakes** — `"<topic>" mortality OR burden OR cost OR prevalence` — why it matters
3. **Current Approaches** — `"<topic>" current treatment OR standard of care OR approach` — state of the art
4. **Adjacent Methods** — `"<related technique>" applied to <topic>` — methodological possibilities
5. **Gaps** — `"<topic>" limitations OR unanswered OR future directions OR challenge` — gap signals

Use `scripts/citation_tracker.py --action record_consensus_search` for each. Plan-tier detected from first response.

**Synthesis:** for each facet, extract 2-3 quotable findings (becomes Section 2 gap quotes). Draft Significance/Innovation language using "the field has established X (refs), but Y remains unanswered (refs)" pattern.

## Phase 2B: Institute Mapping + Grant Discovery (RePORTER POST)

RePORTER is **POST-only**. Use `bash_tool` + `curl` — never `web_fetch`.

### Dynamic fiscal year window

Compute at runtime via `scripts/fiscal_year_calculator.py`. Default: current FY + 3 prior. Federal FY starts Oct 1, so:

```bash
python scripts/fiscal_year_calculator.py --output json
# Returns: {"current_fy": 2026, "window": [2023, 2024, 2025, 2026]}
```

### Narrow (AND) search — finds direct overlap

```bash
curl -X POST 'https://api.reporter.nih.gov/v2/projects/search' \
  -H 'Content-Type: application/json' \
  -d '{
    "criteria": {
      "fiscal_years": [2023, 2024, 2025, 2026],
      "include_active_projects": true,
      "advanced_text_search": {
        "operator": "AND",
        "search_field": "all",
        "search_text": "<key term 1> <key term 2>"
      }
    },
    "limit": 50,
    "include_fields": ["project_num", "project_title", "agency_ic_admin", "study_section", "fiscal_year", "principal_investigators", "abstract_text"]
  }'
```

### Broad (OR) search — finds adjacent work

```bash
curl -X POST 'https://api.reporter.nih.gov/v2/projects/search' \
  -H 'Content-Type: application/json' \
  -d '{
    "criteria": {
      "fiscal_years": [2023, 2024, 2025, 2026],
      "advanced_text_search": {
        "operator": "OR",
        "search_field": "all",
        "search_text": "<term> <synonym> <related concept>"
      }
    },
    "limit": 50
  }'
```

### Institute tally + study section ranking

After RePORTER responses:
- Tally `agency_ic_admin` (institute code: NCI, NHLBI, NIMH, etc.) → top-3 funding institutes
- Tally `study_section` → top-2 study sections (where applications go for review)

### NOSI discovery

Parse RePORTER responses for `NOT-*` opportunity numbers. For each:

```bash
# NOSIs live at predictable URLs:
# https://grants.nih.gov/grants/guide/notice-files/NOT-<INSTITUTE>-<YEAR>-<NUMBER>.html
web_fetch <url>
```

If fetch fails: log `[NOSI {number} — fetch failed, not included]`, continue.

## Mechanism Matching (Scope-Aware)

NOT career stage alone. Career stage **+** project scope **+** prelim data drive recommendation.

Use `scripts/mechanism_matcher.py`:

```bash
python scripts/mechanism_matcher.py \
  --career-stage "early_career" \
  --prelim-data "pilot" \
  --environment "r01_eligible" \
  --scope "single_site" \
  --output json
# Returns mechanism shortlist with rationale
```

See [`references/nih_mechanism_matching.md`](references/nih_mechanism_matching.md) for the full matrix.

## Phase 3: DOCX Generation

9 sections via Node.js + `docx` library. See [`references/docx_9_sections.md`](references/docx_9_sections.md) for full spec.

1. **Executive Summary** — title + career stage + environment + 3-4 key findings bullets
2. **Research Positioning** — 3-5 gap quotes (italicized, inline Consensus citations) + 2-3 paragraph positioning narrative + supporting evidence table
3. **Target Institutes** — ranking table (institute, project count in window, % match to your idea) + 2-3 sentence interpretation
4. **Grant Opportunities** — bold NOSI callout if any. Top-3 grants table with hyperlinked FOAs + per-grant scope/budget fit paragraph
5. **Funded Overlap** — top-5 projects table (PI, project_num, IC, year, hyperlinked to RePORTER) + differentiation paragraph
6. **Study Sections** — ranking table + best-match interpretation
7. **Strategic Recommendations & Next Steps** — 3-4 numbered recs + **mandatory program officer rec** + submission timeline note + (if resubmission Q5=2) reviewer-response guidance + closing paragraph
8. **References** — numbered bibliography, hyperlinked to Consensus
9. **Audit Log** — Consensus searches table, plan-tier note, RePORTER searches table, NOSI fetches table, summary stats, tool constraints note, failed steps

### Styling

Arial 12pt body, navy headings (#1a3a5c), light blue table headers (#e8f0f8), amber NOSI callout. `ExternalHyperlink` patterns:
- Paper citations: `https://consensus.app/papers/...`
- FOA links: `https://grants.nih.gov/grants/guide/...`
- RePORTER projects: `https://reporter.nih.gov/project-details/<id>`

## Mandatory Program Officer Recommendation

Always include in Section 7:

> **Recommended next step: contact program officer at {top institute}.** Find their staff page at https://www.nih.gov/institutes-nih/list-nih-institutes-centers-offices → {institute} → Program Officers. Prepare: 1-page specific aims + your CV + 3 specific questions about fit. Email subject: "Pre-application inquiry: <topic>".

This is the single most valuable advice for any applicant. Never skip.

## Submission Timeline (Embedded in DOCX Section 7)

| Mechanism | Standard receipt dates |
|---|---|
| R01, R21, R03 | Feb 5, Jun 5, Oct 5 |
| K awards (K01, K08, K23, K99) | Feb 12, Jun 12, Oct 12 |
| R34, R61/R33 | Feb 16, Jun 16, Oct 16 |
| F31, F32 | Apr 8, Aug 8, Dec 8 |

## Phase 4: Deliver

- Save DOCX to `<output-dir>/grants_<topic-slug>_<YYYY-MM-DD>.docx`
- Chat summary: file path + audit counts + plan tier + verdict on institute targets
- Validate: check zip integrity with `python3 -c "import zipfile,sys; zipfile.ZipFile(sys.argv[1]).testzip()" <docx>` (no output = intact), then confirm the required sections are present

## Tooling

| Script | Role |
|---|---|
| `scripts/citation_tracker.py` | Three-count audit (Consensus sent/shown/cited + RePORTER projects/cited) at `~/.grants_sessions/<session>.json` |
| `scripts/fiscal_year_calculator.py` | Current FY + 3-prior window. Computed at runtime, never hardcoded. |
| `scripts/mechanism_matcher.py` | Career stage × scope × prelim → mechanism recommendation shortlist |

## References

- [`references/nih_mechanism_matching.md`](references/nih_mechanism_matching.md) — career stage × scope × prelim → mechanism canon (7+ sources)
- [`references/reporter_post_patterns.md`](references/reporter_post_patterns.md) — RePORTER curl POST templates + plan-tier detection (7+ sources)
- [`references/docx_9_sections.md`](references/docx_9_sections.md) — 9-section .docx spec + technical requirements (7+ sources)

## Error Handling

| Failure | Behavior |
|---|---|
| Consensus rate-limit hit | Wait 3s, retry once, log; if still failing, alert researcher |
| Consensus returns 0 for a facet | Surface explicitly; never fill with training knowledge |
| Consensus plan-tier cap detected | Log tier, note in audit, surface to researcher |
| RePORTER POST returns error | Retry once after 3s; if still failing, log and continue |
| RePORTER returns <5 on narrow | Document; broad OR should compensate; surface low count |
| NOSI fetch fails | Log `[NOSI {n} — fetch failed]`, continue |
| 3 consecutive tool failures | Stop, alert researcher with what's missing |
| DOCX generation fails | Save raw data as JSON fallback so researcher doesn't lose work |

## Anti-Patterns To Reject

- Parallelizing Consensus calls (will hit rate limit)
- Using `web_fetch` for RePORTER (POST-only — `web_fetch` is GET)
- Hardcoded fiscal year values
- Mechanism recommendations based on career stage alone (must consider scope too)
- Silently filling thin facet results with training knowledge
- Skipping the audit log
- Skipping the program officer recommendation
- Conflating "papers found" with "papers shown" with "papers cited"
- Fabricating NOSI details when fetch fails

---

**Version:** 1.0.0
**Source spec:** [`megaprompts/08-grants-megaprompt.md`](../../../../megaprompts/08-grants-megaprompt.md)
**Build pattern:** Path B (direct conversion). Research-pack sibling of pulse + litreview.
