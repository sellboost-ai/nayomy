---
name: "collab-proof"
description_en: "Use when you want to understand what Claude contributed vs what you drove in a session. Triggers on: /collab-proof, session retrospective, ai contribution analysis, collaboration evidence, what did claude do."
description_tr: "Claude'un oturumda ne katkıda bulunduğunu ve siz ne yaptığınızı anlamak istediğinizde kullanın. Şu komutlarla tetiklenir: /collab-proof, session retrospective, ai contribution analysis, collaboration evidence, what did claude do."
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/collab-proof/SKILL.md"
path: ".gemini/skills/collab-proof/SKILL.md"
is_collection: false
body_length: 14152
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # collab-proof
  
  Geliştiricinin bilinçli olarak kaydetmediği AI işbirliği kanıtlarını ortaya çıkar.
  Vela 3 katmanlı pipeline × ADHD 4 çerçeve akıl yürütme — prompt-native, sıfır bağımlılık.
  
  ---
  
  ## Layer 01 — Signal tespiti
  
  Önce `git log --oneline -10` ve `git diff --stat HEAD~3..HEAD` komutlarını çalıştırın.
  
  Bu rubriği kullanarak sinyal seviyesini sınıflandırın (en yüksek eşleşeni seçin):
  
  **HIGH** → tam artifact'lar (DECISIONS.md + session-history + WORKLOG + HTML)
  - Yeni dosya oluşturuldu, VEYA
  - 4+ dosya değiştirildi, VEYA
  - Konuşmada açık seçenek karşılaştırması ("vs", "yerine", "X'i Y'ye tercih etti"), VEYA
  - Tasarım tartışması 15+ değişim sürdü, VEYA
  - **Kök neden tanısı ile hata** — konuşma hatanın NEDEN olduğunu içerir
    (sadece "X düzeltildi" değil, "hata Y'den kaynaklandı çünkü Z")
  
  **BUG_FIXING özel kuralı** — dosya sayısını geçersiz kıl:
  Sadece 1 dosya değişse bile, konuşma şunları içeriyorsa HIGH olarak sınıflandırın:
  - Kök neden açıklaması ("hata şuydu...", "bu şu nedenle oldu...", "sorun şuydu...")
  - Tanı süreci ("kontrol ettim...", "ortaya çıktı...", "sorun şuydu...")
  - Düzeltme mantığı ("bu yaklaşımı seçtim çünkü...", "X yerine Y'yi kullandım çünkü...")
  Hatalar için dosya sayısı önemli değil — iyi tanısı konmuş tek dosyalı bir düzeltme,
  tartışması olmayan 10 dosyalı bir özellikten daha değerlidir.
  
  **MEDIUM** → yalnızca WORKLOG
  - 1–3 dosya değiştirildi, kök neden tartışması yok, VEYA
  - Küçük özellik eklendi, tradeoff tartışılmadı
  
  **LOW** → sessizlik, kullanıcıya "Rutin oturum — hiçbir şey kaydedilmedi." deyin
  - Kod değişikliği yok, yalnızca planlama/tartışma, VEYA
  - Tek önemsiz değişiklik, bağlam yok ("bunu değiştir", "yazım hatası düzelt", "değişkeni yeniden adlandır")
  
  Kullanıcıya gösterin: `Signal: HIGH / MEDIUM / LOW — [tek satırlık sebep]`
  
  ---
  
  ## Layer 02 — WorkIntentClassifier
  
  Konuşma bağlamı + git diff'e karşı dört çerçevenin hepsini aynı anda çalıştırın.
  Aşağıdaki rubriği kullanarak her çerçeveyi 0.0–1.0 arasında puanlayın. Sonra budama ve sınıflandırma kurallarını uygulayın.
  
  ### Çerçeve puanlama rubriği
  
  **Çerçeve A — Teknik** (kod değişikliği karmaşıklığı)
  - `1.0` Yeni modül/dosya oluşturuldu, karmaşık mantık eklendi (state machine, Lua script, yeni algoritma)
  - `0.5` Mevcut fonksiyon mantığı değiştirildi, basit API endpoint'i eklendi
  - `0.1` Yazım hatası düzeltmesi, yorum değişikliği, düz metin düzenleme
  
  **Çerçeve B — Belirsizlik** (geliştirici şüphe sinyalleri)
  - `1.0` Kod yazılıp tamamen geri alındı, açık şüphe ifadesi ("bu doğru mu?", "çalışmıyor"), `git revert`
  - `0.5` Uygulama sırasında Claude'dan tavsiye istendi, aynı alan üzerinde 2+ revizyonlar
  - `0.0` Kesintisiz direktif yürütme — geliştirici tam olarak ne yapacağını biliyordu
  
  **Çerçeve C — Fork** (karar dalı varlığı)
  - `1.0` Konuşmada iki veya daha fazla alternatif açıkça karşılaştırıldı (A vs B)
  - `0.5` Açık karşılaştırma yok ama tradeoff'dan bahsedildi (performans vs okunabilirlik)
  - `0.0` Tek standart yaklaşım uygulandı, alternatif düşünülmedi
  
  **Çerçeve D — AI katkısı** (Claude'un gerçek etkisi)
  - `1.0` Claude geliştirici tarafından fark edilmeyen bir hatayı/kenar durumu belirledi ve düzeltme önerdi
  - `0.6` Claude yürütmeyi önemli ölçüde hızlandıran yapısal boilerplate/iskelet oluşturdu
  - `0.2` Claude geliştirici tarafından yönlendirilen kodu bağımsız katkı olmadan yeniden biçimlendirdi veya transkripsiyonunu yaptı
  
  ---
  
  ### Budama kuralı
  
  0.4'ten düşük puan alan herhangi bir çerçeveyi budayın.
  
  **İstisna — Yüksek Hızlı Yürütme Koruma:**
  Eğer `Frame A >= 0.8` VE `Frame D >= 0.6` ise, Frame B = 0.0 ve Frame C = 0.0 olsa bile
  budama yapmayın ve oturumu sessiz bırakmayın.
  Bu bir boilerplate-ağır FEATURE_BUILDING oturumudur. Hemen `FEATURE_BUILDING` olarak `HIGH` sinyaliyle sınıflandırın.
  Neden: hızlı hareket eden bir oturumda sıfır belirsizlik onu atılması için bir neden değil, bir özelliktir.
  
  ---
  
  ### Niyet sınıflandırması
  
  | Kalan çerçeveler | Baskın niyet | Anlamı |
  |---|---|---|
  | A yüksek + D orta-yüksek (B, C düşük) | `FEATURE_BUILDING` | Yüksek hız özellik oluşturma, Claude iskelet yapısı |
  | B yüksek + A/D yüksek | `BUG_FIXING` veya `STUCK` | Aktif hata ayıklama veya çözülmemiş döngü |
  | C yüksek + A yüksek | `REFACTORING` veya `EXPLORING` | Mimari keşif, alternatifleri tartma |
  | Tüm çerçeveler < 0.4 | `FLOW_STATE` veya LOW | Rutin yazım, Layer 01 HIGH değilse sessiz |
  
  Birden fazla niyet bağlı kalsa, en yüksek birleşik çerçeve puanı olanını seçin.
  Runner-up'ı kaydedin — oturum anlatısına ait.
  
  ---
  
  ### İç çıktı formatı
  
  Layer 03'e geçmeden önce bu yapıya çözünleyin (kullanıcıya gösterin):
  
  ```json
  {
    "frames": {
      "technical": 0.0,
      "uncertainty": 0.0,
      "fork": 0.0,
      "ai_contribution": 0.0
    },
    "pruned": ["budanan çerçeve adlarının listesi"],
    "intent": "FEATURE_BUILDING",
    "signal": "HIGH",
    "calibration_note": "uygulanan herhangi bir istisna kuralını açıklayan bir cümle"
  }
  ```
  
  ---
  
  ## Layer 03 — Çıktı
  
  ### Eğer HIGH sinyal ise
  
  **`DECISIONS.md`'ye ekleyin** — gerçek fork başına bir giriş (Frame C alternatiflerin var olduğunu onaylamalı):
  
  ```markdown
  ## [YYYY-MM-DD] <başlık>
  
  **Bağlam**: [Frame A — bu seçimi zorlayan şey]
  **Karar**: ne seçildi
  **Düşünülen alternatifler**: [Frame C — gidilmeyen yol]
  **Sebep**: neden — bağlamdan yeniden yapılandırılmışsa "inferred:" ile başlayın
  **AI katkısı**:
    - Belirledi: [Frame D — geliştirici tarafından kaçırılan bir şey]
    - Önerdi: [Frame D — yaklaşım veya alternatif]
    - Geliştirici tarafından yönlendirildi: [geliştirici tarafından bağımsız olarak karar verilen]
  **Niyet sınıfı**: [Layer 02'den]
  **Sinyal puanı**: HIGH
  **Sonuç**: uygulandı | beklemede | tersine çevrildi
  ```
  
  Gerçek fork yoksa → hiçbir şey yazma. Kararları asla uydurma.
  
  **BUG_FIXING niyeti: bunun yerine bu formatı kullanın:**
  
  ```markdown
  ## [YYYY-MM-DD] <hata başlığı>
  
  **Kök neden**: hatanın gerçekten ne yaptığı — sadece ne değil, NEDEN
  **Semptom**: geliştirici tarafından gözlemlenen ne
  **Düzeltme**: ne değiştirildi
  **Bu düzeltme neden**: mantığı — açıkça belirtilmemişse inferred
  **Düşünülen alternatif düzeltmeler**: tartışılan diğer yaklaşımlar (varsa)
  **AI katkısı**:
    - Belirledi: [Frame D — Claude kök nedeni buldu mu?]
    - Önerdi: [Frame D — düzeltme yaklaşımı veya teşhis adımı]
    - Geliştirici tarafından yönlendirildi: [geliştirici tarafından tanısı konmuş/karar verilen]
  **Niyet sınıfı**: BUG_FIXING
  **Sinyal puanı**: HIGH
  **Sonuç**: düzeltildi | geçici çözüm | ertelendi
  ```
  
  **Oluşturun `session-history/YYYY-MM-DD-HHMM.md`**:
  
  ```markdown
  # Oturum [YYYY-MM-DD HH:MM]
  
  **Niyet**: [sınıf] (runner-up: [sınıf varsa])
  **Sinyal**: HIGH
  **Etkin çerçeveler**: A ([puan]) / B ([puan]) / C ([puan]) / D ([puan])
  
  ## Gönderilen ne
  [git log'a dayalı]
  
  ## Anlaşılan ne
  [Frame B + C — akıl yürütme, tradeoff'lar, hata ayıklama — geliştiricilerin unuttukları]
  
  ## Bu oturumda alınan kararlar
  [DECISIONS.md girdilerine refs]
  
  ## Zorlu olduğu yerler
  [Frame B bulguları — belirsizlik, revert'ler, EXPLORING/STUCK sinyalleri]
  
  ## AI katkısı özeti
  [Frame D sentezi — bir dürüst paragraf, kalibre edilmiş]
  
  ## Anlaşılan sonraki adımlar
  [açıkça eksik olan ne]
  ```
  
  **`WORKLOG.md`'ye ekleyin**:
  ```
  YYYY-MM-DD HH:MM | [niyet] | HIGH | D:[puan] | cache:[hit%]% | tok:[toplam] | <fiil cümlesi> — <neden önemli olduğu>
  ```
  
  Alanlar:
  - `D:[puan]` — Frame D AI katkısı puanı (0.0–1.0)
  - `cache:[hit%]%` — token analizinden cache hit oranı (veri yoksa `cache:n/a`)
  - `tok:[toplam]` — bu oturum için toplam tokenlar (input + cache_read + cache_create + output, K cinsinden, örn. `45K`)
  - fiil cümlesi — ne gönderildi, git log'a dayalı
  
  **Token kullanımını topla** (bash — bunu çalıştırın ve çıktıyı yakala):
  ```bash
  python3 -c "
  import json, sys
  from pathlib import Path
  
  projects = Path.home() / '.claude/projects'
  files = sorted(projects.rglob('*.jsonl'), key=lambda f: f.stat().st_mtime, reverse=True)
  if not files:
      print('no_data'); sys.exit()
  
  with open(files[0]) as fp:
      lines = [json.loads(l) for l in fp if l.strip()]
  
  ti = to = cr = cc = 0
  turns = []
  for i, line in enumerate(lines):
      if line.get('type') == 'assistant':
          u = line.get('message', {}).get('usage', {})
          if not u: continue
          inp = u.get('input_tokens', 0)
          ti += inp; to += u.get('output_tokens', 0)
          cr += u.get('cache_read_input_tokens', 0)
          cc += u.get('cache_creation_input_tokens', 0)
          prompt = ''
          for j in range(i-1, -1, -1):
              if lines[j].get('type') == 'user':
                  c = lines[j].get('message', {}).get('content', '')
                  prompt = (c if isinstance(c, str) else next((x.get('text','') for x in c if isinstance(x,dict) and x.get('type')=='text'), ''))[:80]
                  break
          turns.append((inp, prompt))
  
  total = ti + cr + cc
  hit = cr / total * 100 if total else 0
  print(f'input={ti} output={to} cache_read={cr} cache_create={cc} hit={hit:.0f} turns={len(turns)}')
  turns.sort(reverse=True)
  for idx, (tok, p) in enumerate(turns[:3]):
      print(f'top{idx+1}={tok}|{p}')
  "
  ```
  
  Çıktıyı ayrıştırın ve token istatistiklerini oturum anlatısına dahil edin. Sonra:
  
  **Oluşturun `session-history/YYYY-MM-DD-HHMM-proof.html`** — kendi başına yeterli bir HTML dosyası yazın. Yapı ve sınıf adları sabittir — yeniden adlandırmayın veya yeniden sıralamayın.
  
  **Sabit CSS tokenları (tam olarak kullanın):**
  - Arka plan: `#0d1117`, Kart: `#161b22`, Sınır: `#30363d`
  - Font: `font-family: 'Courier New', monospace`
  - Çerçeve puan renkleri: `high` → `#3fb950`, `low` → `#f85149`, budanmış → `#8b949e`
  - AI satırı renkleri: `ai-identified` → `#a371f7`, `ai-suggested` → `#d29922`, `ai-developer` → `#3fb950`
  
  **Sabit HTML yapısı (sınıf adları tam olarak eşleşmelidir):**
  ```
  <div class="header">
    <div class="header-top">
      <div class="project-name">
      <span class="badge">                    <!-- niyet sınıfı -->
    <div class="meta-row">                    <!-- tarih, dal, sinyal seviyesi metni -->
    <div class="signal-container">
      <div class="signal-label">
      <div class="signal-track">
        <div class="signal-fill">             <!-- width % sinyal puanı tarafından yönlendirilir -->
  
  <div class="section">                       <!-- çerçeveler -->
    <div class="section-title"> ... <span class="count">Layer 02 · ADHD tree-of-thought</span>
    <div class="frames-grid">
      <div class="frame-card">               <!-- budanmış: class="frame-card pruned" -->
        <div class="frame-label">            <!-- Frame A / B / C / D -->
        <div class="frame-name">
        <div class="frame-score high|low">   <!-- puan değeri -->
  
  <div class="section">                       <!-- kararlar — hiç yoksa bölümü atla -->
    <div class="section-title"> ... <span class="count">N kayıtlı</span>
    <div class="decision-card">              <!-- DECISIONS.md girdisi başına bir -->
      <div class="decision-header">
        <div class="decision-title">
        <div class="decision-date">
      <div class="decision-fields">
        <div class="field-row">
          <div class="field-label">          <!-- Context / Decision / Alternatives / Reasoning -->
          <div class="field-value">
        <div class="field-row">              <!-- AI katkısı satırı -->
          <div class="field-label">AI katkısı</div>
          <div class="field-value">
            <div class="ai-block">
              <div class="ai-line ai-identified|ai-suggested|ai-developer">
                <span class="tag">IDENTIFIED|SUGGESTED|DEV-DRIVEN</span>
        <div class="field-row">              <!-- Outcome satırı -->
          <div class="field-label">Sonuç</div>
          <div class="field-value">
            <span class="outcome-badge outcome-implemented|outcome-pending|outcome-reversed">
  
  <div class="section">                       <!-- oturum anlatısı -->
    <div class="section-title">Oturum anlatısı</div>
    <div class="narrative-grid">
      <div class="narrative-card">           <!-- Gönderilen ne -->
      <div class="narrative-card">           <!-- Anlaşılan ne -->
      <div class="narrative-card">           <!-- Zorlu olduğu yerler -->
      <div class="narrative-card">           <!-- Anlaşılan sonraki adımlar -->
  
  <div class="section">                       <!-- AI katkısı özeti -->
    <div class="section-title">AI katkısı özeti</div>
    <div class="narrative-card">             <!-- Frame D sentezi paragrafı -->
  
  <div class="section">                       <!-- token kullanımı -->
    <div class="section-title">Token kullanımı</div>
    <div class="narrative-card">             <!-- cache hit oranı çubuğu + en üst dönüşümler + optimizasyon notu -->
  
  <div class="section">                       <!-- worklog kuyruğu -->
    <div class="section-title"> ... <span class="count">son N girdi</span>
    <div class="worklog-entry">              <!-- son WORKLOG satırı başına bir -->
  
  <div class="footer">                        <!-- son commit hash · "Generated by collab-proof · timestamp" -->
  ```
  
  HTML'i bash kullanarak yazın:
  ```bash
  cat > session-history/YYYY-MM-DD-HHMM-proof.html << 'HTMLEOF'
  <!DOCTYPE html>
  ... (satır içi CSS ile tam HTML, harici kaynak yok)
  HTMLEOF
  ```
  
  Yazdıktan sonra gösterin: `open session-history/YYYY-MM-DD-HHMM-proof.html`
  
  ---
  
  ### Eğer MEDIUM sinyal ise
  
  `WORKLOG.md`'ye sadece bir satır ekleyin:
  ```
  YYYY-MM-DD HH:MM | [niyet] | MEDIUM | D:[puan] | cache:[hit%]% | tok:[toplam] | <fiil cümlesi>
  ```
  
  ---
  
  ### Eğer LOW sinyal ise
  
  Kullanıcıya deyin: "Signal: LOW — Rutin oturum, hiçbir şey kaydedilmedi."
  
  ---
  
  ## Dürüstlük kuralları
  
  - Konuşmada olmayan veya diff tarafından ima edilmeyen kararları asla uydurma
  - Akıl yürütme yeniden yapılandırıldığında "inferred:" öneki
  - Frame D kalibre edilmelidir — ne abartma ne de görmezden gelme
  - Tüm çerçeveler < 0.4 puan alırsa → hiçbir şey yazma
  
  ---
  
  ## PreCompact snapshot'ı (bağlam sıkıştırma savunması)
  
  Bağlam sıkıştırması olmak üzereyken (PreCompact hook'u tarafından tetiklenen),
  bağlam kaybedilmeden önce hafif bir mid-oturum kontrol noktası çalıştırın:
  
  1. Mevcut bağlamdan mevcut Layer 01 sinyal seviyesini hesapla
  2. Şimdi görünür olana karşı dört çerçevenin hepsini puanla
  3. Bir snapshot'ı `session-history/.tmp-TIMESTAMP.json`'a yaz:
  
  ```json
  {
    "timestamp": "YYYY-MM-DD HH:MM:SS",
    "trigger": "pre-compact",
    "signal": "HIGH / MEDIUM / LOW",
    "frames": { "technical": 0.0, "uncertainty": 0.0, "fork": 0.0, "ai_contribution": 0.0 },
    "intent": "FEATURE_BUILDING",
    "key_moments": [
      "şimdiye kadar yapılan en önemli karar veya bulguların tek satırlık açıklaması"
    ]
  }
  ```
  
  `/collab-proof` oturum sonunda çalıştırıldığında:
  - Tüm `session-history/.tmp-*.json` dosyalarını oku
  - Çerçeve puanlarını birleştir (tüm snapshot'lar arasında çerçeve başına maksimum al)
  - `key_moments` dizilerini birleştir — bunlar sıkıştırılan tradeoff tartışmalarını korur
  - Birleştirdikten sonra `.tmp-*.json` dosyalarını sil
---

# collab-proof

Surfaces AI collaboration evidence the developer didn't consciously record.
Vela 3-layer pipeline × ADHD 4-frame reasoning — prompt-native, zero dependencies.

---

## Layer 01 — Signal detection

Run `git log --oneline -10` and `git diff --stat HEAD~3..HEAD` first.

Classify signal level using this rubric (pick the highest that matches):

**HIGH** → full artifacts (DECISIONS.md + session-history + WORKLOG + HTML)
- New file created, OR
- 4+ files modified, OR
- Explicit option comparison in conversation ("vs", "instead of", "chose X over Y"), OR
- Design discussion lasted 15+ exchanges, OR
- **Bug with root cause diagnosis** — conversation contains WHY the bug happened
  (not just "fixed X" but "the bug was caused by Y because Z")

**BUG_FIXING special rule** — override file count:
Even if only 1 file changed, classify as HIGH if the conversation contains:
- Root cause explanation ("the bug was...", "this happened because...", "the issue is...")
- Diagnosis process ("I checked...", "turned out...", "the problem was...")
- Fix rationale ("chose this approach because...", "instead of X, used Y because...")
File count doesn't matter for bugs — a well-diagnosed single-file fix is more valuable
than a 10-file feature with no discussion.

**MEDIUM** → WORKLOG only
- 1–3 files modified with no root cause discussion, OR
- Minor feature added, no tradeoffs discussed

**LOW** → silence, tell user "Routine session — nothing recorded."
- No code changes, only planning/discussion, OR
- Single trivial change with no context ("change this text", "fix typo", "rename variable")

Show the user: `Signal: HIGH / MEDIUM / LOW — [one-line reason]`

---

## Layer 02 — WorkIntentClassifier

Run all four frames simultaneously against conversation context + git diff.
Score each frame 0.0–1.0 using the rubric below. Then apply pruning and classification rules.

### Frame scoring rubric

**Frame A — Technical** (code churn complexity)
- `1.0` New module/file created, complex logic added (state machine, Lua script, novel algorithm)
- `0.5` Existing function logic modified, simple API endpoint added
- `0.1` Typo fix, comment change, plain text edit

**Frame B — Uncertainty** (developer doubt signals)
- `1.0` Code written then fully rolled back, explicit doubt expressed ("이게 맞나?", "동작 안 하네"), `git revert`
- `0.5` Advice sought from Claude mid-implementation, 2+ revision requests on same area
- `0.0` Uninterrupted directive execution — developer knew exactly what to build

**Frame C — Fork** (decision branch presence)
- `1.0` Two or more alternatives explicitly compared in conversation (A vs B)
- `0.5` No explicit comparison but tradeoff mentioned (performance vs readability)
- `0.0` Single standard approach applied, no alternatives considered

**Frame D — AI contribution** (Claude's actual impact)
- `1.0` Claude identified a bug/edge case the developer hadn't noticed and proposed the fix
- `0.6` Claude generated structural boilerplate/skeleton that significantly accelerated execution
- `0.2` Claude reformatted or transcribed developer-directed code without independent contribution

---

### Pruning rule

Prune any frame scoring < 0.4.

**Exception — High-Speed Execution Guard:**
If `Frame A >= 0.8` AND `Frame D >= 0.6`, do NOT prune and do NOT silence the session,
even if Frame B = 0.0 and Frame C = 0.0.
This is a boilerplate-heavy FEATURE_BUILDING session. Classify immediately as `FEATURE_BUILDING` with `HIGH` signal.
Rationale: zero uncertainty in a fast-moving session is a feature, not a reason to discard it.

---

### Intent classification

| Surviving frames | Dominant intent | Meaning |
|---|---|---|
| A high + D mid-high (B, C low) | `FEATURE_BUILDING` | High-velocity feature generation, Claude scaffolding |
| B high + A/D high | `BUG_FIXING` or `STUCK` | Active debugging or unresolved looping |
| C high + A high | `REFACTORING` or `EXPLORING` | Architecture exploration, weighing alternatives |
| All frames < 0.4 | `FLOW_STATE` or LOW | Routine typing, silence unless Layer 01 was HIGH |

If multiple intents tie, pick the one with the highest combined frame score.
Record the runner-up — it belongs in the session narrative.

---

### Internal output format

Before proceeding to Layer 03, resolve to this structure (show it to the user):

```json
{
  "frames": {
    "technical": 0.0,
    "uncertainty": 0.0,
    "fork": 0.0,
    "ai_contribution": 0.0
  },
  "pruned": ["list of pruned frame names"],
  "intent": "FEATURE_BUILDING",
  "signal": "HIGH",
  "calibration_note": "one sentence explaining any exception rule applied"
}
```

---

## Layer 03 — Output

### If HIGH signal

**Append to `DECISIONS.md`** — one entry per real fork (Frame C must confirm alternatives existed):

```markdown
## [YYYY-MM-DD] <title>

**Context**: [Frame A — what forced this choice]
**Decision**: what was chosen
**Alternatives considered**: [Frame C — road not taken]
**Reasoning**: why — prefix "inferred:" if reconstructed from context
**AI contribution**:
  - Identified: [Frame D — something developer missed]
  - Suggested: [Frame D — approach or alternative]
  - Developer-driven: [what the developer decided independently]
**Intent class**: [from Layer 02]
**Signal score**: HIGH
**Outcome**: implemented | pending | reversed
```

If no real fork existed → write nothing. Never fabricate decisions.

**BUG_FIXING intent: use this format instead:**

```markdown
## [YYYY-MM-DD] <bug title>

**Root cause**: what actually caused the bug — the WHY, not just the what
**Symptom**: what the developer observed
**Fix**: what was changed
**Why this fix**: rationale — inferred if not stated explicitly
**Alternative fixes considered**: other approaches discussed (if any)
**AI contribution**:
  - Identified: [Frame D — did Claude spot the root cause?]
  - Suggested: [Frame D — fix approach or diagnostic step]
  - Developer-driven: [what the developer diagnosed/decided independently]
**Intent class**: BUG_FIXING
**Signal score**: HIGH
**Outcome**: fixed | workaround | deferred
```

**Create `session-history/YYYY-MM-DD-HHMM.md`**:

```markdown
# Session [YYYY-MM-DD HH:MM]

**Intent**: [class] (runner-up: [class if any])
**Signal**: HIGH
**Frames active**: A ([score]) / B ([score]) / C ([score]) / D ([score])

## What shipped
[grounded in git log]

## What was figured out
[Frame B + C — the reasoning, tradeoffs, debugging — what developers forget]

## Decisions made this session
[refs to DECISIONS.md entries]

## Where it got hard
[Frame B findings — uncertainty, reverts, EXPLORING/STUCK signals]

## AI contribution summary
[Frame D synthesis — one honest paragraph, calibrated]

## Next steps inferred
[what's obviously incomplete]
```

**Append to `WORKLOG.md`**:
```
YYYY-MM-DD HH:MM | [intent] | HIGH | D:[score] | cache:[hit%]% | tok:[total] | <verb phrase> — <why it mattered>
```

Fields:
- `D:[score]` — Frame D AI contribution score (0.0–1.0)
- `cache:[hit%]%` — cache hit rate from token analysis (or `cache:n/a` if no data)
- `tok:[total]` — total tokens this session (input + cache_read + cache_create + output, in K e.g. `45K`)
- verb phrase — what shipped, grounded in git log

**Collect token usage** (bash — run this and capture output):
```bash
python3 -c "
import json, sys
from pathlib import Path

projects = Path.home() / '.claude/projects'
files = sorted(projects.rglob('*.jsonl'), key=lambda f: f.stat().st_mtime, reverse=True)
if not files:
    print('no_data'); sys.exit()

with open(files[0]) as fp:
    lines = [json.loads(l) for l in fp if l.strip()]

ti = to = cr = cc = 0
turns = []
for i, line in enumerate(lines):
    if line.get('type') == 'assistant':
        u = line.get('message', {}).get('usage', {})
        if not u: continue
        inp = u.get('input_tokens', 0)
        ti += inp; to += u.get('output_tokens', 0)
        cr += u.get('cache_read_input_tokens', 0)
        cc += u.get('cache_creation_input_tokens', 0)
        prompt = ''
        for j in range(i-1, -1, -1):
            if lines[j].get('type') == 'user':
                c = lines[j].get('message', {}).get('content', '')
                prompt = (c if isinstance(c, str) else next((x.get('text','') for x in c if isinstance(x,dict) and x.get('type')=='text'), ''))[:80]
                break
        turns.append((inp, prompt))

total = ti + cr + cc
hit = cr / total * 100 if total else 0
print(f'input={ti} output={to} cache_read={cr} cache_create={cc} hit={hit:.0f} turns={len(turns)}')
turns.sort(reverse=True)
for idx, (tok, p) in enumerate(turns[:3]):
    print(f'top{idx+1}={tok}|{p}')
"
```

Parse the output and include token stats in the session narrative. Then:

**Generate `session-history/YYYY-MM-DD-HHMM-proof.html`** — write a self-contained HTML file. Structure and class names are fixed — do not rename or reorder sections.

**Fixed CSS tokens (use exactly):**
- Background: `#0d1117`, Card: `#161b22`, Border: `#30363d`
- Font: `font-family: 'Courier New', monospace`
- Frame score colors: `high` → `#3fb950`, `low` → `#f85149`, pruned → `#8b949e`
- AI line colors: `ai-identified` → `#a371f7`, `ai-suggested` → `#d29922`, `ai-developer` → `#3fb950`

**Fixed HTML structure (class names must match exactly):**
```
<div class="header">
  <div class="header-top">
    <div class="project-name">
    <span class="badge">                    <!-- intent class -->
  <div class="meta-row">                    <!-- date, branch, signal level text -->
  <div class="signal-container">
    <div class="signal-label">
    <div class="signal-track">
      <div class="signal-fill">             <!-- width % driven by signal score -->

<div class="section">                       <!-- frames -->
  <div class="section-title"> ... <span class="count">Layer 02 · ADHD tree-of-thought</span>
  <div class="frames-grid">
    <div class="frame-card">               <!-- pruned: class="frame-card pruned" -->
      <div class="frame-label">            <!-- Frame A / B / C / D -->
      <div class="frame-name">
      <div class="frame-score high|low">   <!-- score value -->

<div class="section">                       <!-- decisions — skip section if none -->
  <div class="section-title"> ... <span class="count">N recorded</span>
  <div class="decision-card">              <!-- one per DECISIONS.md entry -->
    <div class="decision-header">
      <div class="decision-title">
      <div class="decision-date">
    <div class="decision-fields">
      <div class="field-row">
        <div class="field-label">          <!-- Context / Decision / Alternatives / Reasoning -->
        <div class="field-value">
      <div class="field-row">              <!-- AI contribution row -->
        <div class="field-label">AI contribution</div>
        <div class="field-value">
          <div class="ai-block">
            <div class="ai-line ai-identified|ai-suggested|ai-developer">
              <span class="tag">IDENTIFIED|SUGGESTED|DEV-DRIVEN</span>
      <div class="field-row">              <!-- Outcome row -->
        <div class="field-label">Outcome</div>
        <div class="field-value">
          <span class="outcome-badge outcome-implemented|outcome-pending|outcome-reversed">

<div class="section">                       <!-- session narrative -->
  <div class="section-title">Session narrative</div>
  <div class="narrative-grid">
    <div class="narrative-card">           <!-- What shipped -->
    <div class="narrative-card">           <!-- What was figured out -->
    <div class="narrative-card">           <!-- Where it got hard -->
    <div class="narrative-card">           <!-- Next steps inferred -->

<div class="section">                       <!-- AI contribution summary -->
  <div class="section-title">AI contribution summary</div>
  <div class="narrative-card">             <!-- Frame D synthesis paragraph -->

<div class="section">                       <!-- token usage -->
  <div class="section-title">Token usage</div>
  <div class="narrative-card">             <!-- cache hit rate bar + top turns + optimization note -->

<div class="section">                       <!-- worklog tail -->
  <div class="section-title"> ... <span class="count">last N entries</span>
  <div class="worklog-entry">              <!-- one per recent WORKLOG line -->

<div class="footer">                        <!-- last commit hash · "Generated by collab-proof · timestamp" -->
```

Write the HTML using bash:
```bash
cat > session-history/YYYY-MM-DD-HHMM-proof.html << 'HTMLEOF'
<!DOCTYPE html>
... (full HTML with inline CSS, no external resources)
HTMLEOF
```

After writing, show: `open session-history/YYYY-MM-DD-HHMM-proof.html`

---

### If MEDIUM signal

Append one line to `WORKLOG.md` only:
```
YYYY-MM-DD HH:MM | [intent] | MEDIUM | D:[score] | cache:[hit%]% | tok:[total] | <verb phrase>
```

---

### If LOW signal

Tell user: "Signal: LOW — Routine session, nothing recorded."

---

## Honesty rules

- Never invent decisions not in the conversation or implied by the diff
- "inferred:" prefix when reasoning is reconstructed
- Frame D must be calibrated — neither overclaim nor dismiss
- If all frames score < 0.4 → write nothing

---

## PreCompact snapshot (context compaction defence)

When context compaction is about to happen (triggered by the PreCompact hook),
run a lightweight mid-session checkpoint before context is lost:

1. Compute current Layer 01 signal level from available context
2. Score all four frames against what's visible now
3. Write a snapshot to `session-history/.tmp-TIMESTAMP.json`:

```json
{
  "timestamp": "YYYY-MM-DD HH:MM:SS",
  "trigger": "pre-compact",
  "signal": "HIGH / MEDIUM / LOW",
  "frames": { "technical": 0.0, "uncertainty": 0.0, "fork": 0.0, "ai_contribution": 0.0 },
  "intent": "FEATURE_BUILDING",
  "key_moments": [
    "one-line description of the most important decision or finding so far"
  ]
}
```

When `/collab-proof` runs at session end:
- Read all `session-history/.tmp-*.json` files
- Merge frame scores (take max per frame across all snapshots)
- Combine `key_moments` arrays — these preserve tradeoff discussions that were compacted away
- Delete `.tmp-*.json` files after merging
