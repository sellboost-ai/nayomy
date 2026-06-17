---
name: "setup-matt-pocock-skills"
description_en: "Sets up an `## Agent skills` block in AGENTS.md/CLAUDE.md and `docs/agents/` so the engineering skills know this repo's issue tracker (GitHub or local markdown), triage label vocabulary, and domain doc layout. Run before first use of `to-issues`, `to-prd`, `triage`, `diagnose`, `tdd`, `improve-codebase-architecture`, or `zoom-out` — or if those skills appear to be missing context about the issue t"
description_tr: "`## Agent skills` bloğunu AGENTS.md/CLAUDE.md ve `docs/agents/` içinde ayarlar, böylece engineering skills bu repo'nun issue tracker'ını (GitHub veya local markdown), triage label sözcüklerini ve domain doc düzenini tanır. `to-issues`, `to-prd`, `triage`, `diagnose`, `tdd`, `improve-codebase-architecture` veya `zoom-out` komutlarını kullanmadan önce çalıştırın — ya da bu skill'ler issue hakkında bağlam eksik görünüyorsa."
category: "Document"
repo: "mattpocock/skills"
stars: 132588
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/setup-matt-pocock-skills/SKILL.md"
path: "skills/engineering/setup-matt-pocock-skills/SKILL.md"
is_collection: false
body_length: 6269
has_scripts: false
has_references: false
has_examples: false
related_files: ["domain.md", "issue-tracker-github.md", "issue-tracker-gitlab.md", "issue-tracker-local.md", "triage-labels.md"]
body_tr: |-
  # Matt Pocock's Becerilerini Kur

  Mühendislik becerilerinin varsaydığı repo başına konfigürasyonu hazırla:

  - **Issue tracker** — sorunların yaşadığı yer (varsayılan olarak GitHub; yerel markdown da kutudan çıktığı gibi desteklenir)
  - **Triage labels** — beş kanonik triage rolü için kullanılan stringler
  - **Domain docs** — `CONTEXT.md` ve ADR'lerin yaşadığı yer ve onları okumak için tüketici kuralları

  Bu, deterministik bir script değil, prompt güdümlü bir beceridir. Keşfet, bulduklarını sun, kullanıcıya onayla, sonra yaz.

  ## Süreç

  ### 1. Keşfet

  Başlangıç durumunu anlamak için mevcut repo'ya bak. Var olanları oku; varsayımda bulunma:

  - `git remote -v` ve `.git/config` — bu bir GitHub repo'su mu? Hangisi?
  - `AGENTS.md` ve `CLAUDE.md` repo kökünde — biri var mı? `## Agent skills` bölümü zaten var mı?
  - `CONTEXT.md` ve `CONTEXT-MAP.md` repo kökünde
  - `docs/adr/` ve `src/*/docs/adr/` dizinleri
  - `docs/agents/` — bu becerinin önceki çıktısı zaten var mı?
  - `.scratch/` — yerel markdown issue tracker kuralının zaten kullanımda olduğunun işareti

  ### 2. Bulguları sun ve sor

  Neyin mevcut olduğunu ve neyin eksik olduğunu özetle. Sonra kullanıcıyı üç karardan birer birer yönlendir — bir bölüm sun, kullanıcının cevabını al, sonra sıradakine geç. Her üçünü birden dökme.

  Kullanıcının bu terimlerin anlamını bilmediğini varsay. Her bölüm kısa bir açıklamayla başlar (nedir, neden bu beceriler buna ihtiyaç duyar, farklı seçim yaparsanız ne değişir). Sonra seçenekleri ve varsayılanı göster.

  **Bölüm A — Issue tracker.**

  > Açıklama: "Issue tracker", bu repo için sorunların yaşadığı yerdir. `to-issues`, `triage`, `to-prd` ve `qa` gibi beceriler buradan okur ve buraya yazarlar — `gh issue create` mi çağıracaklarını, markdown dosyasını `.scratch/` altına mı yazacaklarını yoksa tanımladığınız başka bir workflow'u mu izleyeceklerini bilmeleri gerekir. Bu repo için çalışmayı takip ettiğiniz yeri seçin.

  Varsayılan tutum: bu beceriler GitHub için tasarlanmıştır. Eğer bir `git remote` GitHub'a işaret ediyorsa, onu öneri olarak sun. Eğer `git remote` GitLab'a işaret ediyorsa (`gitlab.com` veya self-hosted host), GitLab'ı öneri olarak sun. Aksi halde (veya kullanıcı tercih ederse), şu seçenekleri sun:

  - **GitHub** — sorunlar repo'nun GitHub Issues'inde yaşar (`gh` CLI kullanır)
  - **GitLab** — sorunlar repo'nun GitLab Issues'inde yaşar ([`glab`](https://gitlab.com/gitlab-org/cli) CLI kullanır)
  - **Local markdown** — sorunlar bu repo'da `.scratch/<feature>/` altında dosya olarak yaşar (solo projeler veya remote'u olmayan repo'lar için iyidir)
  - **Other** (Jira, Linear, vb.) — kullanıcıdan workflow'u bir paragrafta açıklamasını isteyin; beceri bunu serbest metin olarak kaydedecektir

  **Bölüm B — Triage label vocabulary.**

  > Açıklama: `triage` becerisi gelen bir issue'yu işlediğinde, onu bir state machine'de hareket ettirir — değerlendirmeye ihtiyaç duyar, rapor veren için bekler, bir AFK ajanının alması için hazır, insan için hazır veya düzeltilmeyecek. Bunu yapmak için, gerçekten yapılandırdığınız stringlerle eşleşen label'ları (veya issue tracker'ınızdaki eşdeğerini) uygulaması gerekir. Eğer repo'nuz zaten farklı label adları kullanıyorsa (ör. `needs-triage` yerine `bug:triage`), bunları harita yapın, böylece beceri doğru olanları uygulayabilir ve kopyalar oluşturmaz.

  Beş kanonik rol:

  - `needs-triage` — bakıcı değerlendirmeye ihtiyaç duyar
  - `needs-info` — rapor veren için bekler
  - `ready-for-agent` — tam belirtilmiş, AFK-hazır (bir ajan bunu insan bağlamı olmadan alabilir)
  - `ready-for-human` — insan uygulamasına ihtiyaç duyar
  - `wontfix` — işlem yapılmayacak

  Varsayılan: her rol'ün stringi adına eşittir. Kullanıcıya herhangi birini geçersiz kılmak isteyip istemediğini sorun. Eğer issue tracker'larında mevcut label yoksa, varsayılanlar iyidir.

  **Bölüm C — Domain docs.**

  > Açıklama: Bazı beceriler (`improve-codebase-architecture`, `diagnose`, `tdd`) proje'nin domain dilini öğrenmek için `CONTEXT.md` dosyasını ve geçmiş mimari kararları için `docs/adr/` dosyasını okurlar. Repo'nun bir global context'i mi yoksa birden fazla context'i mi olduğunu (ör. ayrı frontend/backend context'leri olan bir monorepo) bilmeleri gerekir, böylece doğru yerde bakarlar.

  Layout'ı onayla:

  - **Single-context** — repo kökünde bir `CONTEXT.md` + `docs/adr/`. Çoğu repo'su budur.
  - **Multi-context** — kök'te `CONTEXT-MAP.md` işaret eden per-context `CONTEXT.md` dosyaları (tipik olarak monorepo).

  ### 3. Onayla ve düzenle

  Kullanıcıya şunların taslağını göster:

  - `CLAUDE.md` / `AGENTS.md`'den hangisinin düzenleneceğine eklenecek `## Agent skills` bloğu (seçim kuralları için adım 4'e bak)
  - `docs/agents/issue-tracker.md`, `docs/agents/triage-labels.md`, `docs/agents/domain.md` içerikleri

  Yazmadan önce düzenlemesine izin ver.

  ### 4. Yaz

  **Düzenlenecek dosyayı seç:**

  - Eğer `CLAUDE.md` varsa, bunu düzenle.
  - Aksi halde `AGENTS.md` varsa, bunu düzenle.
  - İkisi de yoksa, kullanıcıya hangisini oluşturacağını sor — senin için seçim yapma.

  `CLAUDE.md` zaten varken asla `AGENTS.md` oluşturma (veya tersi) — her zaman zaten orada olan biri'ni düzenle.

  Eğer seçilen dosyada `## Agent skills` bloğu zaten varsa, duplicate eklemek yerine içeriğini yerinde güncelle. Çevre bölümlerdeki kullanıcı düzenlemelerini üzerine yazma.

  Blok:

  ```markdown
  ## Agent skills

  ### Issue tracker

  [sorunların takip edildiği yerin tek satır özeti]. `docs/agents/issue-tracker.md` bak.

  ### Triage labels

  [label vocabulary'nin tek satır özeti]. `docs/agents/triage-labels.md` bak.

  ### Domain docs

  [layout'ın tek satır özeti — "single-context" veya "multi-context"]. `docs/agents/domain.md` bak.
  ```

  Sonra bu skill klasöründeki seed template'lerini başlangıç noktası olarak kullanarak üç docs dosyasını yaz:

  - [issue-tracker-github.md](./issue-tracker-github.md) — GitHub issue tracker
  - [issue-tracker-gitlab.md](./issue-tracker-gitlab.md) — GitLab issue tracker
  - [issue-tracker-local.md](./issue-tracker-local.md) — local-markdown issue tracker
  - [triage-labels.md](./triage-labels.md) — label mapping
  - [domain.md](./domain.md) — domain doc consumer kuralları + layout

  "Other" issue tracker'ları için, kullanıcının açıklamasını kullanarak `docs/agents/issue-tracker.md` dosyasını sıfırdan yaz.

  ### 5. Bitti

  Kullanıcıya kurulumun tamamlandığını ve hangi mühendislik becerilerinin artık bu dosyalardan okuyacağını söyle. `docs/agents/*.md` dosyalarını doğrudan daha sonra düzenleyebileceklerini belirt — bu beceriyi yeniden çalıştırmak sadece issue tracker'ları değiştirmek veya sıfırdan başlamak isterlerse gereklidir.
---

# Setup Matt Pocock's Skills

Scaffold the per-repo configuration that the engineering skills assume:

- **Issue tracker** — where issues live (GitHub by default; local markdown is also supported out of the box)
- **Triage labels** — the strings used for the five canonical triage roles
- **Domain docs** — where `CONTEXT.md` and ADRs live, and the consumer rules for reading them

This is a prompt-driven skill, not a deterministic script. Explore, present what you found, confirm with the user, then write.

## Process

### 1. Explore

Look at the current repo to understand its starting state. Read whatever exists; don't assume:

- `git remote -v` and `.git/config` — is this a GitHub repo? Which one?
- `AGENTS.md` and `CLAUDE.md` at the repo root — does either exist? Is there already an `## Agent skills` section in either?
- `CONTEXT.md` and `CONTEXT-MAP.md` at the repo root
- `docs/adr/` and any `src/*/docs/adr/` directories
- `docs/agents/` — does this skill's prior output already exist?
- `.scratch/` — sign that a local-markdown issue tracker convention is already in use

### 2. Present findings and ask

Summarise what's present and what's missing. Then walk the user through the three decisions **one at a time** — present a section, get the user's answer, then move to the next. Don't dump all three at once.

Assume the user does not know what these terms mean. Each section starts with a short explainer (what it is, why these skills need it, what changes if they pick differently). Then show the choices and the default.

**Section A — Issue tracker.**

> Explainer: The "issue tracker" is where issues live for this repo. Skills like `to-issues`, `triage`, `to-prd`, and `qa` read from and write to it — they need to know whether to call `gh issue create`, write a markdown file under `.scratch/`, or follow some other workflow you describe. Pick the place you actually track work for this repo.

Default posture: these skills were designed for GitHub. If a `git remote` points at GitHub, propose that. If a `git remote` points at GitLab (`gitlab.com` or a self-hosted host), propose GitLab. Otherwise (or if the user prefers), offer:

- **GitHub** — issues live in the repo's GitHub Issues (uses the `gh` CLI)
- **GitLab** — issues live in the repo's GitLab Issues (uses the [`glab`](https://gitlab.com/gitlab-org/cli) CLI)
- **Local markdown** — issues live as files under `.scratch/<feature>/` in this repo (good for solo projects or repos without a remote)
- **Other** (Jira, Linear, etc.) — ask the user to describe the workflow in one paragraph; the skill will record it as freeform prose

**Section B — Triage label vocabulary.**

> Explainer: When the `triage` skill processes an incoming issue, it moves it through a state machine — needs evaluation, waiting on reporter, ready for an AFK agent to pick up, ready for a human, or won't fix. To do that, it needs to apply labels (or the equivalent in your issue tracker) that match strings *you've actually configured*. If your repo already uses different label names (e.g. `bug:triage` instead of `needs-triage`), map them here so the skill applies the right ones instead of creating duplicates.

The five canonical roles:

- `needs-triage` — maintainer needs to evaluate
- `needs-info` — waiting on reporter
- `ready-for-agent` — fully specified, AFK-ready (an agent can pick it up with no human context)
- `ready-for-human` — needs human implementation
- `wontfix` — will not be actioned

Default: each role's string equals its name. Ask the user if they want to override any. If their issue tracker has no existing labels, the defaults are fine.

**Section C — Domain docs.**

> Explainer: Some skills (`improve-codebase-architecture`, `diagnose`, `tdd`) read a `CONTEXT.md` file to learn the project's domain language, and `docs/adr/` for past architectural decisions. They need to know whether the repo has one global context or multiple (e.g. a monorepo with separate frontend/backend contexts) so they look in the right place.

Confirm the layout:

- **Single-context** — one `CONTEXT.md` + `docs/adr/` at the repo root. Most repos are this.
- **Multi-context** — `CONTEXT-MAP.md` at the root pointing to per-context `CONTEXT.md` files (typically a monorepo).

### 3. Confirm and edit

Show the user a draft of:

- The `## Agent skills` block to add to whichever of `CLAUDE.md` / `AGENTS.md` is being edited (see step 4 for selection rules)
- The contents of `docs/agents/issue-tracker.md`, `docs/agents/triage-labels.md`, `docs/agents/domain.md`

Let them edit before writing.

### 4. Write

**Pick the file to edit:**

- If `CLAUDE.md` exists, edit it.
- Else if `AGENTS.md` exists, edit it.
- If neither exists, ask the user which one to create — don't pick for them.

Never create `AGENTS.md` when `CLAUDE.md` already exists (or vice versa) — always edit the one that's already there.

If an `## Agent skills` block already exists in the chosen file, update its contents in-place rather than appending a duplicate. Don't overwrite user edits to the surrounding sections.

The block:

```markdown
## Agent skills

### Issue tracker

[one-line summary of where issues are tracked]. See `docs/agents/issue-tracker.md`.

### Triage labels

[one-line summary of the label vocabulary]. See `docs/agents/triage-labels.md`.

### Domain docs

[one-line summary of layout — "single-context" or "multi-context"]. See `docs/agents/domain.md`.
```

Then write the three docs files using the seed templates in this skill folder as a starting point:

- [issue-tracker-github.md](./issue-tracker-github.md) — GitHub issue tracker
- [issue-tracker-gitlab.md](./issue-tracker-gitlab.md) — GitLab issue tracker
- [issue-tracker-local.md](./issue-tracker-local.md) — local-markdown issue tracker
- [triage-labels.md](./triage-labels.md) — label mapping
- [domain.md](./domain.md) — domain doc consumer rules + layout

For "other" issue trackers, write `docs/agents/issue-tracker.md` from scratch using the user's description.

### 5. Done

Tell the user the setup is complete and which engineering skills will now read from these files. Mention they can edit `docs/agents/*.md` directly later — re-running this skill is only necessary if they want to switch issue trackers or restart from scratch.
