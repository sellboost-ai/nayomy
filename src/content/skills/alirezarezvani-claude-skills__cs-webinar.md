---
name: "cs-webinar"
description_en: "/cs:webinar — Webinar & virtual-event marketing workflow. Plan a webinar from scratch (sized backward from the business goal), rescue one whose numbers disappointed (score the funnel, fix the broken stage), or turn a past webinar into an evergreen on-demand lead engine. Covers the full funnel: registration, promotion runway, show-up, live engagement, live-to-close, and segmented follow-up. Treats "
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cs-webinar/SKILL.md"
path: ".gemini/skills/cs-webinar/SKILL.md"
is_collection: false
body_length: 5096
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:webinar — Webinar & Sanal Etkinlik Pazarlaması

  **Komut:** `/cs:webinar [mode] [args]`

  `cs-webinar` komutu **webinar iş akışları için giriş noktasıdır**: planlama → promosyon → yayın → takip, ya da tanı → düzeltme → yeniden çalıştırma.

  ## Ne Zaman Çalıştırılır

  - Sıfırdan webinar, sanal etkinlik, canlı demo, workshop, masterclass, fireside chat veya sanal zirve planlama
  - Hayal kırıklığı yaratan sayılara sahip bir webinarı kurtarma — düşük kayıtlar, düşük katılım veya dönüşüm yapmayan katılımcılar
  - Tek seferlik bir webinarı her zaman açık evergreen / talep üzerine bir motora dönüştürme
  - Gerçekten kırık olan aşamayı bulmak için mevcut bir huniyı puanlama

  ## Ne Zaman Çalıştırılmaz

  - Tam ürün lansman (sadece webinar değil) → `/cs:launch` / launch-strategy kullanın
  - Bir olayla ilgisiz genel yaşam döngüsü beslemesi e-postası → `emails` skill'ini kullanın
  - Yüz yüze alan etkinliği lojistiği (mekan, catering, stand) → kapsam dışı

  ## Modlar

  ### `plan` — Tüm hareketi sıfırdan tasarla

  ```bash
  /cs:webinar plan
  ```

  İntake sürecini yürütür, promise ve formatı kilitler, huniyeyi iş hedefinden geriye doğru boyutlandırır,
  promosyon pistini oluşturur ve katılım + canlı-kapanış + takibi tasarlar. `marketing-skill/skills/webinar-marketing/templates/webinar-plan-template.md` 
  kullanarak tam bir plan sunur.

  ### `rescue` — Düşük performans gösteren bir webinarı tanıla ve düzelt

  ```bash
  /cs:webinar rescue --input funnel.json
  ```

  Huniyeyi puanlar, en zayıf aşamayı adlandırır ve gerçek darboğazı hedef alan sıralanmış düzeltmeleri döndürür
  — refleksif landing page yeniden yazısı değil.

  ### `evergreen` — Geçmiş bir webinarı talep üzerine dönüştür

  ```bash
  /cs:webinar evergreen
  ```

  Talep üzerine kayıt → izleme → takip otomasyonunu eşler, dürüst canlı-vs-simüle çerçevelemesi ile.

  ### `score` — Huniye puanlamacısını doğrudan çalıştır

  ```bash
  /cs:webinar score --input funnel.json
  /cs:webinar score                 # gömülü örnek veriler
  ```

  ## Minimum İntake (3 Soru)

  | S | Sorar | Ne Zaman |
  |---|---|---|
  | S1 | Hangi mod — plan / rescue / evergreen? | Her zaman |
  | S2 | İş hedefi + dönüşüm eylemi (leads, pipeline, adoption, retention, brand)? | Her zaman (huniye matematikini yönlendirir) |
  | S3 | Hedef kitle sıcaklığı (customers / warm / owned_cold / paid_cold)? | Her zaman (benchmarkları seçer) |

  Eğer varsa `marketing-context.md` dosyasını önce okuyun — marka sesi, personas ve müşteri dilini kapsar,
  böylece sadece bu etkinliğe özgü olanları sorarsınız.

  ## İş Akışı

  ```bash
  # Mod: rescue / score — kırık aşamayı önce bulun
  python3 marketing-skill/skills/webinar-marketing/scripts/webinar_funnel_scorer.py funnel.json
  # → genel 0-100 puanı + aşama başına oran vs. benchmark + adlandırılmış darboğaz

  # stdin üzerinden JSON'u boru ile aktar
  cat funnel.json | python3 marketing-skill/skills/webinar-marketing/scripts/webinar_funnel_scorer.py -

  # Gömülü örnek veriler üzerinde demo (--help bayrağı yok — argüman olmadan çalıştır)
  python3 marketing-skill/skills/webinar-marketing/scripts/webinar_funnel_scorer.py
  ```

  Input JSON (`registrations` + `attended_live` gerekli; geri kalanı isteğe bağlı):

  ```json
  {
    "invited": 5000, "page_visits": 1800, "registrations": 620,
    "attended_live": 180, "cta_clicks": 40, "conversions": 14,
    "audience": "owned_cold", "runtime_min": 45, "avg_watch_min": 26
  }
  ```

  ## Huniye Matematikası (Geriye Doğru Planla)

  Her zaman iş hedefinden geriye doğru boyutlandırın — bu, 6 kişi satın alırken 800 kaydı kutlayan herkesi durdurur:

  ```
  İş hedefi:            20 satış-nitelikli fırsat
  ÷ katılımcı→SQO oranı (~10%)      → 200 katılımcı gerekli
  ÷ kayıt→katıl         (~35% live) → ~570 kayıt gerekli
  ÷ landing-page CVR    (~40%)      → ~1.425 landing-page ziyareti gerekli
  → promosyon ~1.425 nitelikli ziyareti yürütmeli
  ```

  Gerekli ziyaretler ulaşılabilir kitleyi aşarsa, hedefi, formatı veya promosyon bütçesini *şimdi* düzeltin.

  ## Kitle Benchmarkları

  Puanlamacı kitle sıcaklığına göre kalibre eder (daha sıcak kitleler her aşamada daha iyi dönüşür):

  | Kitle | Sayfa→Kayıt | Kayıt→Katıl | Katıl→CTA | Katıl→Dönüş |
  |---|---|---|---|---|
  | `customers` | 40% | 50% | 25% | 12% |
  | `warm` | 35% | 42% | 22% | 10% |
  | `owned_cold` | 25% | 35% | 18% | 7% |
  | `paid_cold` | 18% | 28% | 15% | 5% |

  ## Reddedilen Anti-Paternler

  - Kayıtları kutlarken katılım veya dönüşüm sessizce başarısız olur
  - Kırık aşama katılım veya canlı-kapanış olduğunda landing page yeniden yazma
  - Buniyeyi iş hedefinden geriye doğru boyutlandırmadan promosyon yapma
  - Hedef kitleyi erozyona uğratan açık sahte-canlı çerçevelemesi
  - Bir webinarı etkinlik yerine huniye olarak görme

  ## Tetikleyici İfadeler

  - "webinar planla" / "webinar stratejisi"
  - "webinarım dönüşmüyor" / "düşük katılım oranı"
  - "webinar promosyonu" / "webinar takibi"
  - "sanal etkinlik" / "canlı demo" / "masterclass" / "fireside chat" / "sanal zirve"
  - "evergreen webinar" / "talep üzerine webinar"
  - "kayıt huniyesi" / "katılım oranı"

  ## İlişkili

  - Agent: [`cs-webinar-marketer`](../agents/marketing/cs-webinar-marketer.md)
  - Skill: [`webinar-marketing`](../marketing-skill/skills/webinar-marketing/SKILL.md)
  - Companion: `/cs:aeo` (AI arama tarafından alıntılanan destekleyici içerik alın), launch-strategy (tam lanşlar)

  ---

  **Versiyon:** 2.9.0
  **Lisans:** MIT
---

# /cs:webinar — Webinar & Virtual Event Marketing

**Command:** `/cs:webinar [mode] [args]`

The `cs-webinar` command is the **entry point for webinar workflows**: plan → promote → run → follow up, or diagnose → fix → re-run.

## When To Run

- Planning a webinar, virtual event, live demo, workshop, masterclass, fireside chat, or virtual summit from scratch
- Rescuing a webinar whose numbers disappointed — low registrations, low show-up, or attendees who don't convert
- Turning a one-time webinar into an always-on evergreen / on-demand engine
- Scoring an existing funnel to find the stage that's actually broken

## When NOT To Run

- Full product launch (not just a webinar) → use `/cs:launch` / launch-strategy
- Generic lifecycle nurture email unrelated to an event → use the `emails` skill
- In-person field-event logistics (venue, catering, booth) → out of scope

## Modes

### `plan` — Design the whole motion from scratch

```bash
/cs:webinar plan
```

Walks the intake, locks the promise + format, sizes the funnel backward from the business goal,
builds the promotion runway, and designs show-up + live-to-close + follow-up. Delivers a full plan
using `marketing-skill/skills/webinar-marketing/templates/webinar-plan-template.md`.

### `rescue` — Diagnose and fix an underperforming webinar

```bash
/cs:webinar rescue --input funnel.json
```

Scores the funnel, names the weakest stage, and returns ranked fixes targeting the actual bottleneck
— not a reflexive landing-page rewrite.

### `evergreen` — Convert a past webinar to on-demand

```bash
/cs:webinar evergreen
```

Maps the on-demand registration → watch → follow-up automation, with honest live-vs-simulated framing.

### `score` — Run the funnel scorer directly

```bash
/cs:webinar score --input funnel.json
/cs:webinar score                 # embedded sample data
```

## Minimal Intake (3 Questions)

| Q | Asks | When |
|---|---|---|
| Q1 | Which mode — plan / rescue / evergreen? | Always |
| Q2 | Business goal + conversion action (leads, pipeline, adoption, retention, brand)? | Always (drives the backward funnel math) |
| Q3 | Audience temperature (customers / warm / owned_cold / paid_cold)? | Always (selects benchmarks) |

Read `marketing-context.md` first if it exists — it covers brand voice, personas, and customer language,
so you only ask for what's specific to this event.

## Workflow

```bash
# Mode: rescue / score — find the broken stage first
python3 marketing-skill/skills/webinar-marketing/scripts/webinar_funnel_scorer.py funnel.json
# → overall 0-100 score + per-stage rate vs. benchmark + named bottleneck

# Pipe JSON via stdin
cat funnel.json | python3 marketing-skill/skills/webinar-marketing/scripts/webinar_funnel_scorer.py -

# Demo on embedded sample data (no --help flag — run with no args)
python3 marketing-skill/skills/webinar-marketing/scripts/webinar_funnel_scorer.py
```

Input JSON (`registrations` + `attended_live` required; rest optional):

```json
{
  "invited": 5000, "page_visits": 1800, "registrations": 620,
  "attended_live": 180, "cta_clicks": 40, "conversions": 14,
  "audience": "owned_cold", "runtime_min": 45, "avg_watch_min": 26
}
```

## The Funnel Math (Plan Backward)

Always size from the business goal backward — this stops anyone celebrating 800 registrations while 6 people buy:

```
Business goal:        20 sales-qualified opportunities
÷ attendee→SQO rate   (~10%)      → need 200 engaged attendees
÷ register→attend     (~35% live) → need ~570 registrations
÷ landing-page CVR     (~40%)     → need ~1,425 landing-page visits
→ promotion must drive ~1,425 qualified visits
```

If the required visits exceed the reachable audience, fix the goal, format, or promotion budget *now*.

## Audience Benchmarks

The scorer calibrates per audience temperature (warmer audiences convert better at every stage):

| Audience | Page→Reg | Reg→Attend | Attend→CTA | Attend→Convert |
|---|---|---|---|---|
| `customers` | 40% | 50% | 25% | 12% |
| `warm` | 35% | 42% | 22% | 10% |
| `owned_cold` | 25% | 35% | 18% | 7% |
| `paid_cold` | 18% | 28% | 15% | 5% |

## Anti-Patterns Rejected

- Celebrating registrations while show-up or conversion quietly fails
- Rewriting the landing page when the broken stage is show-up or live-to-close
- Promoting before sizing the funnel backward from the business goal
- Obvious fake-live framing that erodes audience trust
- Treating a webinar as an event instead of a funnel

## Trigger Phrases

- "plan a webinar" / "webinar strategy"
- "my webinar isn't converting" / "low show-up rate"
- "webinar promotion" / "webinar follow-up"
- "virtual event" / "live demo" / "masterclass" / "fireside chat" / "virtual summit"
- "evergreen webinar" / "on-demand webinar"
- "registration funnel" / "attendance rate"

## Related

- Agent: [`cs-webinar-marketer`](../agents/marketing/cs-webinar-marketer.md)
- Skill: [`webinar-marketing`](../marketing-skill/skills/webinar-marketing/SKILL.md)
- Companion: `/cs:aeo` (get supporting content cited by AI search), launch-strategy (full launches)

---

**Version:** 2.9.0
**License:** MIT
