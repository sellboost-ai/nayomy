---
name: "freeze"
description_en: "/cs:freeze <decision> <days> — Lock a strategic decision for a cooldown period to prevent impulse reversal. Mirrors gstack's safety primitives for the business layer. Use when an irreversible decision was made under pressure — e.g. a layoff plan or multi-year contract — and deserves a cooling-off lock before execution."
description_tr: "/cs:freeze <decision> <days> — Stratejik bir kararı belirli bir süre için kilitleyerek dürtüsel geri dönüşleri önler. gstack'in iş katmanı için sunduğu güvenlik mekanizmalarını yansıtır. Baskı altında alınan geri dönülemez kararlar (örneğin işten çıkarma planı veya çok yıllı kontrat) için yürütmeden önce bekleme süresi uygulamak istediğinizde kullanın."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/freeze/SKILL.md"
path: ".gemini/skills/freeze/SKILL.md"
is_collection: false
body_length: 3345
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:freeze — Bir Kararın Üzerine Bekleme Kilidi
  
  **Komut:** `/cs:freeze <decision-path> <days>`
  
  Bir kararı tanımlı bir bekleme süresi için kilitler. Bekleme süresi boyunca, chief-of-staff yönlendiricisi bir kill kriteri açıkça tetiklenmedikçe kararı yeniden tartışmayı reddeder.
  
  gstack'in `/freeze` ve `/guard` güvenlik ilkelerinden ilham alınmıştır — kod kapsamından stratejik kapsamına uyarlanmıştır.
  
  ## Ne Zaman Kullanılır
  
  Kurucular desen eşleyicisidir; zor bir karar sonrasında desen eşlemesi genellikle aslında karar yorgunluğu olan bir ters çevirmeyi üretir. Bekleme bir disiplin uygular:
  
  - Herhangi bir **geri döndürülemez** veya **ters çevirmesi pahalı** karar sonrasında (finansman, işten çıkarma, pazar girişi)
  - Bir **bölünmüş oy yapılan yönetim kurulu** sonrasında (çağrıyı ikinci düşüncülere karşı koru)
  - Bir **kurucu beden hissi** tarafından oybirliğine yakın danışman fikri geçersiz kılındıktan sonra (çalışmasına izin ver)
  - Bir **personel geçişi** sırasında (yöneticinin yeniden tartışmak yerine yürütebilmesi için stratejiyi kilitle)
  
  ## Varsayılan Bekleme Süreleri
  
  | Karar türü | Varsayılan bekleme |
  |---|---|
  | Finansman turu büyüklüğü / baş seçimi | 30 gün |
  | Fiyatlandırma değişikliği | 60 gün |
  | Pazar girişi / çıkışı | 90 gün |
  | İşten çıkarma / RIF | 30 gün |
  | Stratejik pivot | 90 gün |
  | Personel (yönetici işe alınması / işten çıkarılması) | 60 gün |
  | M&A LOI | 30 gün |
  | Özel | komutta belirt |
  
  ## İş Akışı
  
  1. Karar kaydını oku
  2. APPROVED durumuna sahip olduğunu doğrula
  3. Kilidi uygula: karar kaydına `freeze_until: YYYY-MM-DD` yaz
  4. `~/.claude/freezes/active.md` dosyasındaki aktif-kilitleri indeksine ekle
  5. cs-chief-of-staff yönlendiricisi şu ana kadar bu konuyu yönetim kuruluna yeniden yönlendirmeyi reddeder:
     - Bekleme süresi sona erer, VEYA
     - Bir kill kriteri açıkça tetiklenir
  
  ## Çıktı
  
  Karar kaydı yerinde güncellenir:
  
  ```markdown
  # Decision: <title>
  ...
  **Status:** FROZEN
  **Frozen until:** YYYY-MM-DD
  **Reason for freeze:** <text>
  **Override condition:** Kill criterion <name> triggers OR founder issues `/cs:unfreeze` with stated reason
  ```
  
  Aktif-kilitleri indeksi güncellenir:
  
  ```markdown
  # Active Freezes
  **Updated:** YYYY-MM-DD
  
  | Decision | Frozen until | Override condition |
  |---|---|---|
  | <decision title> | YYYY-MM-DD | <kill criterion or /cs:unfreeze> |
  ```
  
  ## Geçersiz Kılma
  
  Süre bitmeden önce kilidi açmak için kurucu şunu çalıştırır:
  
  ```
  /cs:unfreeze <decision> <reason>
  ```
  
  Kilidi açma işlemi karar geçmişinde günlüğe kaydedilir (kalıcı olarak saklanır). Zorunlu geçersiz kılmalar post-mortem'de ortaya çıkan bir izleme izi oluşturur.
  
  ## Otomatik Geçersiz Kılma
  
  Karardaki bir kill kriteri tetiklenirse, bekleme otomatik olarak serbest bırakılır ve chief-of-staff hemen `/cs:post-mortem` yoluna yönlendirilir. Bekleme gerçekliğe karşı koruma sağlamaz; dürtüsel davranışa karşı koruma sağlar.
  
  ## Neden Bu "Sadece Yeniden Karar Verme" Seçeneğinden Daha İyidir
  
  Kurucuların yetkileri vardır. Açık bir kilit + günlük olmadan, her oynaşma bir "bunu yeniden tartışalım" üretir — bu danışmanlar için yorucudur ve yönetim kurulunun değerini aşındırır. Bekleme **bir işlem**tir, kural değil; post-mortem'de kurucu disiplinini denetleyebilmesi için her geçersiz kılmayı günlüğe kaydeder.
  
  ## Yönlendirme
  
  - `/cs:unfreeze` — açık erken serbest bırakma
  - `/cs:post-mortem` — kill kriteri tetiklenirse otomatik tetikleme
  - `/cs:boardroom` — kilidi açma veya sona erme kadar engellenir
  
  ## İlgili
  
  - Beceri: [`decision-logger`](https://github.com/alirezarezvani/claude-skills/blob/HEAD/skills/decision-logger/SKILL.md)
  - Agent: [`cs-chief-of-staff`](https://github.com/alirezarezvani/claude-skills/blob/HEAD/agents/cs-chief-of-staff.md) — yönlendirmede kilitleri uygular
  
  ---
  
  **Sürüm:** 1.0.0
---

# /cs:freeze — Cooldown Lock on a Decision

**Command:** `/cs:freeze <decision-path> <days>`

Locks a decision for a defined cooldown period. During the freeze, the chief-of-staff router refuses to re-litigate the decision unless a kill criterion explicitly triggers.

Inspired by gstack's `/freeze` and `/guard` safety primitives — adapted from code-scoping to strategic-scoping.

## When to Use

Founders are pattern-matchers; pattern-matching after a tough decision often produces a reversal that's actually just decision fatigue. The freeze enforces a discipline:

- After any **irreversible** or **high-cost-to-reverse** decision (fundraise, layoff, market entry)
- After a **split-vote boardroom** (preserve the call against second-guessing)
- After a **founder gut-feel** override of unanimous advisor consensus (let it run)
- During a **personnel transition** (lock the strategy so the new exec can execute, not redebate)

## Default Freeze Periods

| Decision type | Default freeze |
|---|---|
| Fundraise round size / lead choice | 30 days |
| Pricing change | 60 days |
| Market entry / exit | 90 days |
| Layoff / RIF | 30 days |
| Strategic pivot | 90 days |
| Personnel (exec hire / fire) | 60 days |
| M&A LOI | 30 days |
| Custom | specify in command |

## Workflow

1. Read the decision record
2. Validate it has APPROVED status
3. Apply freeze: write `freeze_until: YYYY-MM-DD` to the decision record
4. Add to active-freezes index at `~/.claude/freezes/active.md`
5. cs-chief-of-staff router now refuses to re-route this topic to the boardroom until:
   - The freeze period expires, OR
   - A kill criterion explicitly triggers

## Output

The decision record is updated in place:

```markdown
# Decision: <title>
...
**Status:** FROZEN
**Frozen until:** YYYY-MM-DD
**Reason for freeze:** <text>
**Override condition:** Kill criterion <name> triggers OR founder issues `/cs:unfreeze` with stated reason
```

The active-freezes index is updated:

```markdown
# Active Freezes
**Updated:** YYYY-MM-DD

| Decision | Frozen until | Override condition |
|---|---|---|
| <decision title> | YYYY-MM-DD | <kill criterion or /cs:unfreeze> |
```

## Override

To unfreeze before the period ends, the founder runs:

```
/cs:unfreeze <decision> <reason>
```

The unfreeze is logged in the decision history (preserved permanently). Forced overrides create a paper trail that surfaces at post-mortem.

## Auto-Override

If a kill criterion in the decision triggers, the freeze auto-releases and the chief-of-staff routes immediately to `/cs:post-mortem`. The freeze does not protect against reality; it protects against impulse.

## Why This Beats "Just Don't Re-Decide"

Founders have authority. Without an explicit lock + log, every wobble produces a "let's discuss this again" — which is exhausting for advisors and erodes the value of the boardroom. The freeze is **a process**, not a rule; it logs every override so the post-mortem can audit founder discipline.

## Routing

- `/cs:unfreeze` — explicit early release
- `/cs:post-mortem` — auto-triggered if kill criterion fires
- `/cs:boardroom` — blocked until unfreeze or expiry

## Related

- Skill: [`decision-logger`](https://github.com/alirezarezvani/claude-skills/blob/HEAD/skills/decision-logger/SKILL.md)
- Agent: [`cs-chief-of-staff`](https://github.com/alirezarezvani/claude-skills/blob/HEAD/agents/cs-chief-of-staff.md) — enforces freezes in routing

---

**Version:** 1.0.0
