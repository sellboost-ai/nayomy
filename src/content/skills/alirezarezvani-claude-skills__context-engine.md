---
name: "context-engine"
description_en: "Loads and manages company context for all C-suite advisor skills. Reads ~/.claude/company-context.md, detects stale context (>90 days), enriches context during conversations, and enforces privacy/anonymization rules before external API calls. Use when starting any C-suite advisor session, when context looks stale or missing, or before sending company data to an external service."
description_tr: "C-suite danışmanı becerileriniz için şirket bağlamını yükler ve yönetir. ~/.claude/company-context.md dosyasını okur, eski bağlamı (>90 gün) algılar, konuşmalar sırasında bağlamı zenginleştirir ve harici API çağrılarından önce gizlilik/anonimleştirme kurallarını uygular. Herhangi bir C-suite danışmanı oturumunu başlatırken, bağlam eski veya eksik görünüyorken veya şirket verilerini harici bir hizmete göndermeden önce kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/context-engine/SKILL.md"
path: ".gemini/skills/context-engine/SKILL.md"
is_collection: false
body_length: 3804
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Şirket Bağlam Motoru
  
  C-suite danışmanları için hafıza katmanı. Her danışman becerisi bunu ilk olarak yükler. Bağlam, genel tavsiyeyi spesifik içgörüye dönüştüren şeydir.
  
  ## Anahtar Kelimeler
  şirket bağlamı, bağlam yükleme, bağlam motoru, şirket profili, danışman bağlamı, eski bağlam, bağlam yenileme, gizlilik, anonimleştirme
  
  ---
  
  ## Yükleme Protokolü (Her C-Suite Oturumunun Başında Çalıştırın)
  
  **Adım 1 — Bağlam dosyasını kontrol edin:** `~/.claude/company-context.md`
  - Var → Adım 2'ye geçin
  - Yok → Uyarı: *"/cs:setup komutunu çalıştırarak şirket bağlamınızı oluşturun — her danışman konuşmasını önemli ölçüde daha faydalı hale getirir."*
  
  **Adım 2 — Eskilik kontrol edin:** `Last updated` alanını okuyun.
  - **< 90 gün:** Yükleyin ve devam edin.
  - **≥ 90 gün:** Uyarı: *"Bağlamınız [N] gün eski. Hızlı 15 dakikalık yenileme (/cs:update), yoksa elimdekiyle devam etmek mi?"*
    - Devam etmek seçilirse: `[ESKİ — son güncelleme TARİH]` not edilerek yükleyin.
  
  **Adım 3 — Çalışma belleğine ayrıştırın.** Her zaman aktif:
  - Şirket aşaması (PMF öncesi / ölçekleme / optimizasyon)
  - Kurucu arketipi (ürün / satış / teknik / operatör)
  - #1 güncel zorluk
  - Parasal kaynak (risk sinyali olarak — asla dışarıya paylaşmayın)
  - Takım boyutu
  - Haksız avantaj
  - 12 aylık hedef
  
  ---
  
  ## Bağlam Kalitesi Sinyalleri
  
  | Durum | Güven | İşlem |
  |-------|-------|-------|
  | < 30 gün, tam görüşme | Yüksek | Doğrudan kullan |
  | 30–90 gün, güncelleme yapılmış | Orta | Kullan, değişmiş olabilecekleri işaretle |
  | > 90 gün | Düşük | Eskilik işaretle, yenileme uyarısı ver |
  | Ana alanlar eksik | Düşük | Oturum içinde sor |
  | Dosya yok | Hiçbiri | /cs:setup uyarısı ver |
  
  Düşük ise: *"Bağlamım [eski/eksik] — [X] varsayıyorum. Yanılıyorsam düzelt."*
  
  ---
  
  ## Bağlam Zenginleştirme
  
  Konuşmalar sırasında dosyada olmayan şeyler öğreneceksiniz. Bunları kaydedin.
  
  **Tetikleyiciler:** Yeni sayı veya zaman çizelgesi ortaya çıktığında, önemli kişi bahsedildiğinde, öncelik değiştiğinde, kısıtlama ortaya çıktığında.
  
  **Protokol:**
  1. Dahili not: `[BAĞLAM GÜNCELLEMESİ: {öğrenilen şey}]`
  2. Oturum sonu: *"Bağlamınıza eklemek için birkaç şey öğrendim. Dosyayı güncellememi ister misin?"*
  3. Evet ise: ilgili boyuta ekleyin, zaman damgasını güncelleyin.
  
  **Asla sessizce üzerine yazmayın.** Bağlam dosyasını değiştirmeden önce her zaman onay alın.
  
  ---
  
  ## Gizlilik Kuralları
  
  ### Asla dışarıya göndermeyin
  - Spesifik gelir veya harcama rakamları
  - Müşteri adları
  - Çalışan adları (kamuya açık değilse)
  - Yatırımcı adları (kamuya açık değilse)
  - Spesifik parasal kaynak ayları
  - İzleme Listesi içerikleri
  
  ### Dışarıda kullanmak güvenli (anonimleştirme ile)
  - Aşama etiketi
  - Takım boyutu aralıkları (1–10, 10–50, 50–200+)
  - Endüstri sektörü
  - Zorluk kategorisi
  - Pazar konumu tanımlaması
  
  ### Herhangi bir harici API çağrısı veya web araması öncesi
  `references/anonymization-protocol.md` uygulayın:
  - Sayılar → aralıklar veya aşama-göreceli tanımlayıcılar
  - Adlar → roller
  - Gelir → yüzdeler veya aşama etiketleri
  - Müşteriler → "Müşteri A, B, C"
  
  ---
  
  ## Eksik veya Kısmi Bağlam
  
  Nezaketle ele alın — asla konuşmayı engellemeyiniz.
  
  - **Eksik aşama:** "Kalibre etmek için — hâlâ PMF mi arıyorsunuz yoksa işe yarayanı mı ölçekliyorsunuz?"
  - **Eksik finansal bilgi:** Aşama + takım boyutunu kullanarak çıkarımda bulunun. Boşluğu not edin.
  - **Eksik kurucu profili:** Konuşma stilinden çıkarımda bulunun. İnceleme olarak işaretle.
  - **Birden fazla kurucu:** Bağlam görüşülen kişiyi yansıtır. Kurucu ortağı perspektifinin farklı olabileceğini not edin.
  
  ---
  
  ## Gerekli Bağlam Alanları
  
  ```
  Zorunlu:
    - Son güncelleme (tarih)
    - Şirket Kimliği → Ne yaptığımız
    - Aşama & Ölçek → Aşama
    - Kurucu Profili → Kurucu arketipi
    - Mevcut Zorluklar → Öncelik #1
    - Hedefler & Hırs → 12 aylık hedef
  
  Yüksek değerli isteğe bağlı:
    - Haksız avantaj
    - Ölüm vuruşu riski
    - Kaçınılan karar
    - İzleme listesi
  ```
  
  Gerekli alanlar eksikse: boşlukları not edin, oturum içinde çalışın, yalnızca kritik olduğunda oturum içinde sorun.
  
  ---
  
  ## Kaynaklar
  - `references/anonymization-protocol.md` — harici çağrılardan önce hassas verileri çıkarmak için ayrıntılı kurallar
---

# Company Context Engine

The memory layer for C-suite advisors. Every advisor skill loads this first. Context is what turns generic advice into specific insight.

## Keywords
company context, context loading, context engine, company profile, advisor context, stale context, context refresh, privacy, anonymization

---

## Load Protocol (Run at Start of Every C-Suite Session)

**Step 1 — Check for context file:** `~/.claude/company-context.md`
- Exists → proceed to Step 2
- Missing → prompt: *"Run /cs:setup to build your company context — it makes every advisor conversation significantly more useful."*

**Step 2 — Check staleness:** Read `Last updated` field.
- **< 90 days:** Load and proceed.
- **≥ 90 days:** Prompt: *"Your context is [N] days old. Quick 15-min refresh (/cs:update), or continue with what I have?"*
  - If continue: load with `[STALE — last updated DATE]` noted internally.

**Step 3 — Parse into working memory.** Always active:
- Company stage (pre-PMF / scaling / optimizing)
- Founder archetype (product / sales / technical / operator)
- Current #1 challenge
- Runway (as risk signal — never share externally)
- Team size
- Unfair advantage
- 12-month target

---

## Context Quality Signals

| Condition | Confidence | Action |
|-----------|-----------|--------|
| < 30 days, full interview | High | Use directly |
| 30–90 days, update done | Medium | Use, flag what may have changed |
| > 90 days | Low | Flag stale, prompt refresh |
| Key fields missing | Low | Ask in-session |
| No file | None | Prompt /cs:setup |

If Low: *"My context is [stale/incomplete] — I'm assuming [X]. Correct me if I'm wrong."*

---

## Context Enrichment

During conversations, you'll learn things not in the file. Capture them.

**Triggers:** New number or timeline revealed, key person mentioned, priority shift, constraint surfaces.

**Protocol:**
1. Note internally: `[CONTEXT UPDATE: {what was learned}]`
2. At session end: *"I picked up a few things to add to your context. Want me to update the file?"*
3. If yes: append to the relevant dimension, update timestamp.

**Never silently overwrite.** Always confirm before modifying the context file.

---

## Privacy Rules

### Never send externally
- Specific revenue or burn figures
- Customer names
- Employee names (unless publicly known)
- Investor names (unless public)
- Specific runway months
- Watch List contents

### Safe to use externally (with anonymization)
- Stage label
- Team size ranges (1–10, 10–50, 50–200+)
- Industry vertical
- Challenge category
- Market position descriptor

### Before any external API call or web search
Apply `references/anonymization-protocol.md`:
- Numbers → ranges or stage-relative descriptors
- Names → roles
- Revenue → percentages or stage labels
- Customers → "Customer A, B, C"

---

## Missing or Partial Context

Handle gracefully — never block the conversation.

- **Missing stage:** "Just to calibrate — are you still finding PMF or scaling what works?"
- **Missing financials:** Use stage + team size to infer. Note the gap.
- **Missing founder profile:** Infer from conversation style. Mark as inferred.
- **Multiple founders:** Context reflects the interviewee. Note co-founder perspective may differ.

---

## Required Context Fields

```
Required:
  - Last updated (date)
  - Company Identity → What we do
  - Stage & Scale → Stage
  - Founder Profile → Founder archetype
  - Current Challenges → Priority #1
  - Goals & Ambition → 12-month target

High-value optional:
  - Unfair advantage
  - Kill-shot risk
  - Avoided decision
  - Watch list
```

Missing required fields: note gaps, work around in session, ask in-session only when critical.

---

## References
- `references/anonymization-protocol.md` — detailed rules for stripping sensitive data before external calls
