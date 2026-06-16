---
name: "business-operations-skills"
description_en: "Use when running, diagnosing, or designing internal business operations — process documentation, vendor SLAs, capacity planning, internal comms, SOP/runbook authoring, procurement spend. Triggers on \"BizOps review\", \"where's the bottleneck\", \"vendor health\", \"internal SOP\", \"all-hands deck\", \"spend categorization\", \"capacity for Q3\", \"process mapping\". Forks context to route to one of six BizOps s"
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/business-operations-skills/SKILL.md"
path: ".gemini/skills/business-operations-skills/SKILL.md"
is_collection: false
body_length: 8084
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # İş Operasyonları — Domain Orchestrator

  BizOps yüzeyi **dahilidir**: şirket aslında nasıl çalışır. Bu orchestrator konuşma bağlamını böler, sorgunuzu altı alt-beceriden birine yönlendirir, ardından ana iş parçacığına sıkı bir özet döndürür. Ağır alım (satıcı katalogları, süreç görüşmeleri, multi-doc SOP alımı) bölünmüş bağlamda kalır.

  ## Ne zaman çağırılacak

  | Semptom | Yönlendirilecek Alt-beceri |
  |---|---|
  | "İş çoğunlukla neyi bekleyerek geçiriyor?" | `process-mapper` |
  | "Bu satıcı SLA'yı karşılıyor mu?" | `vendor-management` |
  | "Q3'te gemi göndermek için yeterli insanımız var mı?" | `capacity-planner` |
  | "Şirketi bir yeniden org konusunda bilgilendirmem gerekiyor" | `internal-comms` |
  | "Bana olayın yanıt süreci için bir runbook yazın" | `knowledge-ops` |
  | "Yazılım harcamamız neden YoY %40 arttı?" | `procurement-optimizer` |

  ## Yönlendirme mantığı (deterministik)

  Orchestrator, soruyu prompt'ta tespit edilen **sinyallere** göre sınıflandırır. Güvenilir yönlendirme için iki sinyallik eşik; bir sinyal açıklayıcı bir soruyu tetikler.

  ### Sinyal tablosu

  | Sinyal sınıfı | Anahtar kelimeler | Alt-beceri |
  |---|---|---|
  | **PROCESS** | bottleneck, cycle time, waiting, handoff, BPMN, process map, workflow | `process-mapper` |
  | **VENDOR** | vendor, supplier, SLA, contract, third-party, MSA, SaaS subscription, renewal | `vendor-management` |
  | **CAPACITY** | headcount, capacity, utilization, planning, hiring sequence, FTE | `capacity-planner` |
  | **COMMS** | all-hands, internal newsletter, announcement, change management, FAQ, town hall | `internal-comms` |
  | **KNOWLEDGE** | SOP, runbook, knowledge base, wiki, playbook, documentation, onboarding doc | `knowledge-ops` |
  | **PROCUREMENT** | spend, procurement, purchase, supplier rationalization, software audit, SaaS sprawl | `procurement-optimizer` |

  Sinyaller karışmışsa (ör. "vendor SLA + spend audit"), **en yüksek güven düzeyindeki alt-beceriyi** çalıştırın, ardından sonraki turda ikinci alt-beceriye zincirleyin.

  ### Fallback

  Hiçbir sinyal sınıfı ≥ 2 puan almıyorsa, **bir** açıklayıcı soru sorun ve en muhtemel iki adayı adlandırın. Sessizce tahmin EDİN.

  ## Workflow (Matt Pocock grill disiplini)

  Matt Pocock'ın `grill-with-docs` modelinden türetildi: **önce araştır sonra sor, her turda bir soru ve önerilen cevap, karar ağacını derinliğe öncelikli olarak yürü, bağımlılıkları izle, her zorluğu belgelenen kanona sabit le** (`references/`).

  ### Adım 1 — Sormadan önce araştır

  Herhangi bir açıklayıcı sorudan önce kontrol edin:
  - Kullanıcının çalışma dizini zaten bir süreç haritası, satıcı kataloğu, SOP veya org şeması içeriyor mu ve grep yapabiliyoruz mu?
  - Sorgu zaten şeridi disambiguate ediyor mu (ör. "vendor SLA review" — bu `vendor-management`, soru gerek yok)?
  - Şerit, belirtilen dosya adlarından açık mı (`procurement-Q3.csv` → procurement)?

  Kod tabanı şeridi çözerse, **sessizce yönlendir**. Soru sorma.

  ### Adım 2 — Hâlâ belirsizse, önerilen cevaplı BİR zorlu soru

  Matt'ın kuralı: soruları asla bir araya getirme. Asla "ne düşünüyorsunuz?" varsayılanına gitme. Her zaman tavsiyeni sun.

  Desen:
  ```
  Q1/1: [iki aday şeridi adlandıran hassas soru]
  Tavsiye: [Şerit X, çünkü <sinyal tablosundan tek cümlelik gerekçe>]

  (Onayla veya geçersiz kıl?)
  ```

  Kullanıcının yanıtını bekle. **Sonra** yönlendir. Soru soran bir turdan sonra sessizce tahmin etme.

  ### Adım 3 — Dallanma karar-ağacı yürüyüşü (yalnızca sorgu şeritleri geçerse)

  Kullanıcının sorgusu meşru bir şekilde iki şeridi geçerse (ör. "vendor SLA + spend audit" = VENDOR + PROCUREMENT), ağacı **derinliğe öncelikli** olarak yürü:

  1. Daha yüksek güven düzeyindeki şeridi çöz → bu alt-beceriyi bölünmüş bağlamda çalıştır → özet döndür
  2. Sor: "Şimdi [ikinci şerit] çalıştırmalı mıyız? Tavsiyem: evet, çünkü [bağımlılık nedeni]."
  3. Yalnızca açık kullanıcı onayından sonra, ikinci alt-beceriyi çalıştır

  Sessizce zincirleme yapmayın. Her dallanma açık bir kullanıcı-onaylı adımdır.

  ### Adım 4 — Bölünmüş bağlamda alt-beceriyi çağır

  Her alt-beceri, orijinal prompt + herhangi bir yapılandırılmış girdi özetine (dosya yolları, JSON girdileri) sahip çağrılır. Dallanma, ağır alımı (satıcı kataloğu, süreç transkriptleri, SOP kaynak belgeleri) ana bağlam dışında tutar.

  ### Adım 5 — Alıntı yapılan kanon zorlama ile özet döndür

  Alt-beceri tamamlandığında, ana iş parçacığına **≤ 200 kelimelik bir özet** döndür:

  - Ne analiz edildi
  - En önemli 3 bulgu (her biri bir referans doc alıntısı ile sabit — ör. "Goldratt'ın Kısıtlama Teorisi: bottleneck'i optimize et, kısıt olmayan şeyi değil")
  - En önemli 3 sonraki eylem (mümkünse adlandırılmış sahipler)
  - Üretilen artifact(lar) yolu
  - **Bir grill zorlama** kullanıcı için, alıntı yapıldı: "Değer ekleme oranınız %12'dir. Lean kanonu (Womack & Jones 1996) <%15'i atık ağırlıklı olarak sınıflandırır. Süreç yeniden tasarımını engelleyen ne — siyasi, teknik mi, yoksa bütçe mi?"

  Ana agent daha sonra takip soruları sorabilir (her biri yeni bölünmüş çağrıları tetikler).

  ## Zorlu-soru kütüphanesi (grill-with-docs deseni)

  Kullanıcı bir şeride girmek için yeterli bağlam sağlamışsa, orchestrator onları **o şeridin içindeki kararlar** hakkında grill edebilir, alt-beceriyi çağırmadan. Her turda bir soru, her biri önerilen cevap + kanon alıntı ile. Örnekler:

  - **PROCESS şeridi**: "Eşlemeden önce: aşama başına ölçülen döngü zamanları var mı, yoksa yalnızca tahminler mi? Tavsiye: en uzun 3 aşama için ölçülen verileri ısrar edin. Anti-desen (Goldratt 1984): tahminleri eşle, yanlış kısıtı optimize et."
  - **VENDOR şeridi**: "Puanlama öncesi: tier-1 kritiklik eşiğiniz nedir — harcama ($X/yıl) veya operasyonel bağımlılık (satıcı başarısız olursa gelir bloklandı) ile mi? Tavsiye: operasyonel bağımlılık. Anti-desen (Gartner TPRM): yalnızca harcamaya göre tierleme, Target ihlalindeki HVAC satıcısı gibi kritik düşük harcama satıcılarını kaçırır."
  - **CAPACITY şeridi**: "Modelleme öncesi: kullanım mı yoksa iş hacmi mi için planlıyorsunuz? Tavsiye: iş hacmi (Little's Law). Anti-desen (DORA): >%80 kullanım için planlama, kuyruk oluşturma yoluyla iş hacmini yok eder."

  Şerit tanımlayan karar kilitlenene kadar bir alt-beceriyi çalıştırma.

  ## Varsayımlar

  1. Kullanıcı ≥ 10 çalışanı olan bir organizasyon adına hareket eder (daha küçük organizasyonlar bu yüzeye ihtiyaç duymaz).
  2. Kullanıcı, alt-becerinin ihtiyaç duyduğu verilere erişimi var (süreç dokümanları, satıcı listesi, harcama dışa aktarımı, vb.) — veya becerinin şablonlu sahte verisini kabul eder.
  3. Kullanıcı LLM tarafından tatlandırılmış prose yerine **deterministik, tekrarlanabilir analiz** istiyor. Her alt-beceri stdlib-only Python araçları sunar.

  ## Hedeflenmeyenler

  - Bir ERP, satıcı yönetimi platformunun (Vendr, Tropic) veya kapasite planlama SaaS'nin (Float, Runn) yerine.
  - Oturumlar arasında durumu depolama — her çağrı bağımsızdır.
  - Python araçlarından harici API'ları çağırma (tasarım gereği stdlib sadece).

  ## Farklı olan

  - **`business-growth/*`** — bu, **dış satış hareketi** (CSM, satış mühendisliği, RevOps). BizOps **dahilidir**.
  - **`c-level-advisor/coo-advisor`** — bu, stratejik COO yargısı ("yeniden yapılandırmalı mıyız?"). BizOps taktiktir ("burada bottlenekli süreç haritası var").
  - **`engineering/slo-architect`** — bu, SLO/SLI/hata bütçeleri ile sistem güvenilirliğidir. `process-mapper` **sistem** güvenilirliği değil, **iş süreci** güvenilirliğidir.
  - **`engineering/llm-wiki`** — bu, **kişisel** PKM'dir (Karpathy'nin deseni). `knowledge-ops` **şirket çapında** SOP yazımıdır.

  ## Çıkış artifact'ları

  Her alt-beceri, kullanıcının çalışma dizinine kaydedilen en az bir artifact (markdown, CSV veya JSON) üretir. Orchestrator, dosya yolunu özette yüzeyle.

  ## Anti-desenler (yapma)

  - ❌ "Kapsamlı olmak için" tüm 6 alt-beceriyi çalıştır — sinyale göre birini seç, özet döndür, kullanıcı zincirleme yaptsın
  - ❌ Otomatik olarak bir satıcıyı veya süreç değişikliğini onayla — bulguları yüzeyleyerek; insan karar verir
  - ❌ İzin sormadan üretim süreç dokümanlarını düzenle — yeni bir dosyaya yaz, diff'i öner
  - ❌ Özet adımını atla — ana bağlama ≤ 200 kelimelik özet gerekli, tüm alt-beceri çıktısı değil

  ## Referanslar

  - Stratejik COO çerçevesi için `c-level-advisor/coo-advisor` bkz.
  - Path-B yapı deseni: `documentation/implementation/bizops-commercial-expansion-plan.md`
---

# Business Operations — Domain Orchestrator

The BizOps surface is **internal**: how the company actually runs. This orchestrator forks its conversation context, routes your inquiry to one of six sub-skills, then returns a tight digest to the parent thread. The heavy ingestion (vendor catalogs, process interviews, multi-doc SOP intake) stays in the forked context.

## When to invoke

| Symptom | Sub-skill to route to |
|---|---|
| "Where does the work spend most of its time waiting?" | `process-mapper` |
| "Is this vendor delivering against the SLA?" | `vendor-management` |
| "Do we have enough people to ship in Q3?" | `capacity-planner` |
| "I need to brief the company on a re-org" | `internal-comms` |
| "Write me a runbook for the incident response process" | `knowledge-ops` |
| "Why is our software spend up 40% YoY?" | `procurement-optimizer` |

## Routing logic (deterministic)

The orchestrator classifies the inquiry by **signals** detected in the prompt. Two-signal threshold for confident routing; one-signal triggers a clarifying question.

### Signal table

| Signal class | Keywords | Sub-skill |
|---|---|---|
| **PROCESS** | bottleneck, cycle time, waiting, handoff, BPMN, process map, workflow | `process-mapper` |
| **VENDOR** | vendor, supplier, SLA, contract, third-party, MSA, SaaS subscription, renewal | `vendor-management` |
| **CAPACITY** | headcount, capacity, utilization, planning, hiring sequence, FTE | `capacity-planner` |
| **COMMS** | all-hands, internal newsletter, announcement, change management, FAQ, town hall | `internal-comms` |
| **KNOWLEDGE** | SOP, runbook, knowledge base, wiki, playbook, documentation, onboarding doc | `knowledge-ops` |
| **PROCUREMENT** | spend, procurement, purchase, supplier rationalization, software audit, SaaS sprawl | `procurement-optimizer` |

If signals are mixed (e.g., "vendor SLA + spend audit"), run the **highest-confidence sub-skill first**, then chain into the second one in a follow-up forked turn.

### Fallback

If no signal class scores ≥ 2, ask **one** clarifying question naming the two most likely candidates. Do NOT guess silently.

## Workflow (Matt Pocock grill discipline)

Derived from Matt Pocock's `grill-with-docs` pattern: **explore-then-ask, one question per turn with a recommended answer, walk the decision tree depth-first, track dependencies, anchor every challenge in the documented canon** (`references/`).

### Step 1 — Explore before asking

Before any clarifying question, check:
- Does the user's working directory already contain a process map, vendor catalog, SOP, or org chart we can grep?
- Does the inquiry already disambiguate the lane (e.g., "vendor SLA review" — that's `vendor-management`, no question needed)?
- Is the lane unambiguous from filenames mentioned (`procurement-Q3.csv` → procurement)?

If the codebase resolves the lane, **route silently**. Don't ask.

### Step 2 — If still ambiguous, ONE forcing question with a recommended answer

Matt's rule: never bundle questions. Never default to "what do you think?". Always offer your recommendation.

Pattern:
```
Q1/1: [precise question naming the two candidate lanes]
Recommended: [Lane X, because <one-sentence rationale from the signal table>]

(Confirm, or override?)
```

Wait for the user's response. **Then** route. Never guess silently after a turn that asked a question.

### Step 3 — Forking decision-tree walk (only if the inquiry crosses lanes)

If the user's inquiry legitimately crosses two lanes (e.g., "vendor SLA + spend audit" = VENDOR + PROCUREMENT), walk the tree **depth-first**:

1. Resolve the higher-confidence lane first → run that sub-skill in forked context → return digest
2. Ask: "Should we now run [second lane]? My recommendation: yes, because [dependency reason]."
3. Only after explicit user confirmation, run the second sub-skill

Do NOT chain silently. Each fork is an explicit user-confirmed step.

### Step 4 — Invoke sub-skill in forked context

Each sub-skill is invoked with the original prompt + a digest of any structured inputs (file paths, JSON inputs). The fork keeps heavy ingestion (vendor catalog, process transcripts, SOP source documents) out of the parent context.

### Step 5 — Return digest with cited canon challenge

When the sub-skill completes, return a **≤ 200-word digest** to the parent thread:

- What was analyzed
- Top 3 findings (each anchored in a reference doc citation — e.g., "Goldratt's Theory of Constraints: optimize the bottleneck, not the non-constraint")
- Top 3 next actions (named owners if possible)
- Path to the artifact(s) produced
- **One grill challenge** for the user, cited: "Your value-add ratio is 12%. Lean canon (Womack & Jones 1996) classifies <15% as waste-heavy. What's blocking process redesign — political, technical, or budget?"

The parent agent can then ask follow-ups (each triggering new forked invocations).

## Forcing-question library (grill-with-docs pattern)

When the user has provided enough context to enter a lane, the orchestrator may grill them on the **decisions inside that lane** before invoking the sub-skill. One question per turn, each with a recommended answer + canon citation. Examples:

- **PROCESS lane**: "Before mapping: do you have measured cycle times per stage, or only estimates? Recommended: insist on measured data for the top-3 longest stages. Anti-pattern (Goldratt 1984): map estimates, optimize the wrong constraint."
- **VENDOR lane**: "Before scoring: what's your tier-1 criticality threshold — by spend ($X/year), or by operational dependency (revenue-blocking if vendor fails)? Recommended: operational dependency. Anti-pattern (Gartner TPRM): spend-only tiering misses critical low-spend vendors like the HVAC vendor in the Target breach."
- **CAPACITY lane**: "Before modeling: are you planning for utilization or throughput? Recommended: throughput (Little's Law). Anti-pattern (DORA): planning for utilization > 80% destroys throughput via queueing."

Never run a sub-skill until the lane-defining decision is locked.

## Assumptions

1. The user is acting on behalf of an organization with ≥ 10 employees (smaller orgs don't need this surface).
2. The user has access to the data the sub-skill needs (process docs, vendor list, spend export, etc.) — or accepts the skill's templated dummy data.
3. The user wants **deterministic, repeatable analysis** over LLM-flavored prose. Every sub-skill ships stdlib-only Python tools.

## Non-goals

- Not a substitute for an ERP, vendor management platform (Vendr, Tropic), or capacity-planning SaaS (Float, Runn).
- Does not store state across sessions — every invocation is self-contained.
- Does not call external APIs from Python tools (stdlib only, by design).

## Distinct from

- **`business-growth/*`** — that's the **external sales motion** (CSM, sales engineering, RevOps). BizOps is **internal**.
- **`c-level-advisor/coo-advisor`** — that's strategic COO judgment ("should we restructure?"). BizOps is tactical ("here's the process map with bottlenecks").
- **`engineering/slo-architect`** — that's system reliability with SLO/SLI/error budgets. `process-mapper` is **business process** reliability, not system reliability.
- **`engineering/llm-wiki`** — that's a **personal** PKM (Karpathy's pattern). `knowledge-ops` is **company-wide** SOP authoring.

## Output artifacts

Every sub-skill produces at least one artifact (markdown, CSV, or JSON) saved to the user's working directory. The orchestrator surfaces the file path in the digest.

## Anti-patterns (do not)

- ❌ Run all 6 sub-skills "to be thorough" — pick one based on signal, return digest, let user chain
- ❌ Auto-approve a vendor or process change — surface findings; the human decides
- ❌ Edit production process docs without asking — write to a new file, propose the diff
- ❌ Skip the digest step — parent context needs ≤ 200-word digest, not the full sub-skill output

## References

- See `c-level-advisor/coo-advisor` for strategic COO framing
- Path-B build pattern: `documentation/implementation/bizops-commercial-expansion-plan.md`
