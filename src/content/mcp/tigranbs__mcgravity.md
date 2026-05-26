---
name: "tigranbs/mcgravity"
description: "A proxy tool for composing multiple MCP servers into one unified endpoint. Scale your AI tools by load balancing requests across multiple MCP servers, similar to how Nginx works for web servers."
category: "Aggregators"
repo: "tigranbs/mcgravity"
stars: 97
url: "https://github.com/tigranbs/mcgravity"
body_length: 10286
language: "Rust"
body_tr: |-
  # McGravity

  <div align="center">
    
  </div>

  **AI destekli kodlama için hızlı, kararlı bir TUI.**

  McGravity, AI kodlama araçlarını (Claude Code, Codex, Gemini) sıkı bir geri bildirim döngüsünde yönetir: **küçük görevleri planlayın → birer birer yürütün → gözden geçirin → yeniden planlayın**. Muazzam bir istemi dökmek ve en iyisini umut etmek yerine, McGravity işinizi doğrulanması kolay ve düzeltilmesi basit olan atomik parçalara böler.

  ```
  +------------------------------------------------------------+
  | McGravity                                    [Claude Code] |
  +--------------------------- Output -------------------------+
  | > Planning complete                                        |
  | > Executing task-001.md...                                 |
  | + Created src/auth/login.rs                                |
  | + Updated src/main.rs                                      |
  +------------------------------------------------------------+
  | Iteration #1 | Executing | task-001.md                    |
  +------------------------------------------------------------+
  | [##########-----] 1/3 tasks                                |
  +--------------------------- Task ---------------------------+
  | Add user authentication with JWT tokens.                   |
  | Reference @src/auth/ for existing patterns.                |
  +------------------------------------------------------------+
  | [Esc] Cancel  [Ctrl+S] Settings                            |
  +------------------------------------------------------------+
  ```

  ## Nasıl Çalışır

  McGravity sürekli bir iyileştirme döngüsü çalıştırır:

  ```mermaid
  flowchart LR
      A[Your Task] --> B[Plan]
      B --> C[Execute]
      C --> D{Done?}
      D -->|More work needed| B
      D -->|Complete| E[Finished]
  ```

  ## Hızlı Başlangıç

  ### 1. McGravity Yükleyin

  ```bash
  # bun, npm, pnpm, yarn, vb.
  npm install -g mcgravity
  ```

  ### 2. Bir AI CLI Yükleyin

  McGravity'nin en az bir AI kodlama aracının yüklü olması gerekir:

  | Araç            | Yükleme Komutu                         | Dokümantasyon                                |
  | --------------- | -------------------------------------- | -------------------------------------------- |
  | **Claude Code** | `npm install -g @anthropic-ai/claude-code` | [claude.ai/code](https://claude.ai/code)     |
  | **Codex**       | `npm install -g @openai/codex`         | [openai.com/codex](https://openai.com/codex) |
  | **Gemini CLI**  | `npm install -g @google/gemini-cli`    | [ai.google.dev](https://ai.google.dev)       |

  ### 3. McGravity Çalıştırın

  ```bash
  cd your-project
  mcgravity
  ```

  İlk çalıştırmada, McGravity kullanılabilir AI araçlarını algılayacak ve planlama ve yürütme için hangisini kullanmak istediğinizi soracaktır.

  ### 4. Görevinizi Açıklayın

  Neleri inşa etmek veya düzeltmek istediğinizi yazın:

  ```
  Add a /health endpoint that returns JSON with status and uptime.
  Check @src/routes/ for existing patterns.
  ```

  Akışı başlatmak için `Enter` tuşuna basın.

  ## Kurulum Seçenekleri

  ### Kurulum Betiği (Önerilir)

  Kurulum betiği işletim sisteminizi ve mimarinizi otomatik olarak algılar:

  ```bash
  # bun, npm, pnpm, yarn, vb.
  npm install -g mcgravity
  ```

  ### GitHub Sürümleri

  [GitHub Sürümleri](https://github.com/tigranbs/mcgravity/releases) sayfasından platformunuza uygun son sürümü indirin, çıkartın ve PATH'e ekleyin.

  ### Kaynaktan Derleme

  ```bash
  git clone https://github.com/tigranbs/mcgravity.git
  cd mcgravity
  cargo install --path .
  ```

  ## Kullanım Kılavuzu

  ### Görev Açıklamaları Yazma

  İyi görev açıklamaları özgüldür ve ilgili dosyalara başvurur:

  ```
  Add input validation to the user registration form.
  - Email must be valid format
  - Password minimum 8 characters
  - Show error messages inline
  Check @src/components/RegisterForm.tsx for the component.
  ```

  **İpuçları:**

  - Neyi istediğiniz hakkında özgül olun
  - `@` işaretiyle dosyalara başvurun
  - Kabul kriterleri listeleyin
  - Sınırlamalardan bahsedin (örn. "yeni bağımlılıklar eklemeyin")

  ### @ Dosya Başvuruları

  `@` yazın ve ardından dosya adı yazarak projenizde arayın:

  ```
  Update @src/config.ts to add the new API endpoint.
  ```

  - **Bulanık arama**: `@config` dosyası `src/config.ts` için arar
  - **Navigasyon**: `Yukarı/Aşağı` veya `j/k` tuşlarını kullanarak seçin
  - **Ekleme**: `Tab` veya `Enter` tuşuna basarak yolu ekleyin
  - **İptal**: `Esc` tuşuna basarak kapatın

  `.gitignore` desenleriyle eşleşen dosyalar önerilerden dışlanır.

  ### Slash Komutları

  Bir satırın başında `/` yazarak kullanılabilir komutları görebilirsiniz:

  | Komut       | Açıklama                              |
  | ----------- | ------------------------------------- |
  | `/settings` | Ayarlar panelini aç                   |
  | `/clear`    | Görev, çıktı ve yapılacaklar dosyalarını temizle |
  | `/exit`     | McGravity'den çık                     |

  ### Ayarlar

  Ayarları açmak için `Ctrl+S` tuşlarına basın:

  | Ayar                | Seçenekler         | Açıklama                        |
  | ------------------- | ------------------ | ------------------------------- |
  | **Planlama Modeli** | Claude, Codex, Gemini | Görevleri bölen AI aracı |
  | **Yürütme Modeli**  | Claude, Codex, Gemini | Görevleri uygulayan AI aracı |
  | **Enter Davranışı** | Gönder / Yeni Satır | `Enter` tuşunun giriş alanında ne yaptığı |
  | **Maks Yinelemeler** | 1, 3, 5, 10, Sınırsız | Kaç plan→yürüt döngüsü |

  Ayarlar otomatik olarak `.mcgravity/settings.json` dosyasına kaydedilir.

  ## Tuş Bağlamaları

  ### Global

  | Tuş     | İşlem                                |
  | ------- | ------------------------------------ |
  | `Ctrl+S` | Ayarları aç                          |
  | `Ctrl+C` | Çık                                  |
  | `Esc`    | Çalışan akışı iptal et / Boşken çık |

  ### Metin Girdisi

  | Tuş           | İşlem                                      |
  | ------------- | ------------------------------------------ |
  | `Enter`       | Görev gönder (varsayılan) veya yeni satır (yapılandırılmışsa) |
  | `Ctrl+Enter`  | Her zaman gönder                           |
  | `Ctrl+J`      | Her zaman yeni satır ekle (tüm terminallerde çalışır) |
  | `Shift+Enter` | Yeni satır ekle                            |
  | `@`           | Dosya araması aç                           |
  | `/`           | Komut menüsünü aç (satırın başında)        |

  ### Çıktı Paneli

  | Tuş               | İşlem             |
  | ----------------- | ----------------- |
  | `Ctrl+Yukarı/Aşağı` | Çıktıyı kaydır    |
  | `PageUp/PageDown` | Sayfa kaydırma    |
  | `Ctrl+Home/End`   | Başına/Sonuna git |

  ### Ayarlar Paneli

  | Tuş                | İşlem           |
  | ------------------ | --------------- |
  | `Yukarı/Aşağı` veya `j/k` | Seçenekleri gez |
  | `Enter` veya `Boşluk` | Seçimi değiştir |
  | `Esc` veya `q`       | Ayarları kapat  |

  ### Akış Ayrıntılı Olarak

  ```mermaid
  flowchart TD
      subgraph Input
          A[Write task description]
      end

      subgraph Planning["Planning Phase"]
          B[AI reads your codebase]
          C[AI creates atomic task files]
          B --> C
      end

      subgraph Execution["Execution Phase"]
          D[Pick next task file]
          E[AI implements the task]
          F[Move to done folder]
          D --> E --> F
      end

      subgraph Review["Review Cycle"]
          G{More tasks?}
          H{More work needed?}
      end

      A --> B
      C --> G
      G -->|Yes| D
      G -->|No| I[Complete]
      F --> G
      G -->|All done| H
      H -->|Yes| B
      H -->|No| I
  ```

  **Neden bu yaklaşım?**

  1. **Odaklanmış AI**: Her aşamanın tek bir görevi vardır. Planlayıcı yalnızca planlar. Yürütücü yalnızca yürütür.
  2. **Atomik görevler**: Küçük, doğrulanabilir değişiklikler. Gözden geçirmesi kolay, bir şey yanlış giderse düzeltmesi basit.
  3. **Yerleşik bağlam**: Tamamlanan görevler sonraki planlama döngüsünü bilgilendirir, bu nedenle AI ne yapılmış olduğunu bilir.
  4. **Kontrol edilebilir**: `Esc` tuşuyla istediğiniz zaman iptal edin. Maks yinelemeleri ayarlayın. Her döngüden sonra gözden geçirin.

  ## Dosya Yapısı (McGravity tarafından oluşturulur)

  McGravity, projenizde bir `.mcgravity/` klasörü oluşturur:

  ```
  .mcgravity/
  ├── settings.json      # Tercihleriniz
  ├── task.md            # Mevcut görev + tamamlanmış görev başvuruları
  └── todo/
      ├── task-001.md    # Beklemede olan görev (planlayıcı tarafından oluşturulur)
      ├── task-002.md    # Beklemede olan görev
      └── done/
          └── task-001.md    # Tamamlanmış görev (arşivlendi)
  ```

  ### Görev Dosyaları

  Her görev dosyası şunları içerir:

  ```markdown
  # Task 001: Add health endpoint

  ## Objective

  Create a /health endpoint returning JSON status.

  ## Implementation Steps

  1. Create route handler in src/routes/health.rs
  2. Return JSON with status and uptime fields
  3. Register route in src/main.rs

  ## Reference Files

  - src/routes/mod.rs - Add module export
  - src/main.rs - Register route

  ## Acceptance Criteria

  - [ ] GET /health returns 200
  - [ ] Response includes "status" and "uptime" fields
  ```

  ## Sorun Giderme

  ### Hiçbir AI aracı algılanmadı

  McGravity en az bir AI CLI aracı gerektirir. Biri yükleyin:

  ```bash
  npm install -g @anthropic-ai/claude-code  # Claude Code
  npm install -g @openai/codex               # Codex
  npm install -g @google/gemini-cli          # Gemini
  ```

  Ardından McGravity'yi yeniden başlatın.

  ### Tuşlar beklendiği gibi çalışmıyor

  Bazı terminaller değiştirici tuşları doğru şekilde bildirmez. Deneyin:

  - Yeni satırlar için `Ctrl+J` kullanın (her yerde çalışır)
  - Navigasyon için `j/k` tuşlarını ok tuşları yerine kullanın

  Terminalinizin ne gönderdiğini görmek için hata ayıklama modunu etkinleştirin:

  ```bash
  MCGRAVITY_DEBUG_KEYS=1 mcgravity
  ```

  ### Çok satırlı giriş

  Yeni satırlar eklemenin birkaç yöntemi:

  | Yöntem           | Nasıl                                    |
  | ---------------- | ---------------------------------------- |
  | `Ctrl+J`         | Tüm terminallerde çalışır                |
  | `Shift+Enter`    | Standart (iPad'de çalışmayabilir)        |
  | `\` sonra `Enter` | Ters eğik çizgi kaçması                 |
  | Ayarlar          | "Enter Davranışı"nı "Yeni Satır" olarak ayarlayın |

  ### Akış ilerlemeyecek

  1. Çıktı panelinde hata mesajlarını kontrol edin
  2. AI CLI'nizin kimlik doğrulaması yapıldığını doğrulayın (`claude --help`, `codex --help`)
  3. Hata ayıklama için maks yinelemeleri 1'e düşürmüştry
  4. `Esc` tuşuyla iptal edin ve daha basit bir görev deneyin

  ## Gizlilik

  McGravity, AI CLI araçlarını makinenizde yerel olarak çalıştırır. Kodunuzu, API anahtarlarınızı asla toplamaz, saklamaz veya iletmez. Kimlik doğrulamasını doğrudan kullandığınız AI CLI araçlarında yapılandırın.

  ## Lisans

  MIT

  ---

  **Rust + Ratatui ile inşa edildi** - [@tigranbs](https://github.com/tigranbs)

  [Sorun Bildirin](https://github.com/tigranbs/mcgravity/issues) · [Sürümler](https://github.com/tigranbs/mcgravity/releases)
---

# McGravity

<div align="center">
  
</div>

**Fast, opinionated TUI for AI-assisted coding.**

McGravity orchestrates AI coding tools (Claude Code, Codex, Gemini) in a tight feedback loop: **plan small tasks → execute one at a time → review → replan**. Instead of dumping a huge prompt and hoping for the best, McGravity breaks your work into atomic pieces that are easier to verify and course-correct.

```
+------------------------------------------------------------+
| McGravity                                    [Claude Code] |
+--------------------------- Output -------------------------+
| > Planning complete                                        |
| > Executing task-001.md...                                 |
| + Created src/auth/login.rs                                |
| + Updated src/main.rs                                      |
+------------------------------------------------------------+
| Iteration #1 | Executing | task-001.md                    |
+------------------------------------------------------------+
| [##########-----] 1/3 tasks                                |
+--------------------------- Task ---------------------------+
| Add user authentication with JWT tokens.                   |
| Reference @src/auth/ for existing patterns.                |
+------------------------------------------------------------+
| [Esc] Cancel  [Ctrl+S] Settings                            |
+------------------------------------------------------------+
```

## How It Works

McGravity runs a continuous improvement loop:

```mermaid
flowchart LR
    A[Your Task] --> B[Plan]
    B --> C[Execute]
    C --> D{Done?}
    D -->|More work needed| B
    D -->|Complete| E[Finished]
```

## Quick Start

### 1. Install McGravity

```bash
# bun, npm, pnpm, yarn, etc.
npm install -g mcgravity
```

### 2. Install an AI CLI

McGravity needs at least one AI coding tool installed:

| Tool            | Install Command                            | Documentation                                |
| --------------- | ------------------------------------------ | -------------------------------------------- |
| **Claude Code** | `npm install -g @anthropic-ai/claude-code` | [claude.ai/code](https://claude.ai/code)     |
| **Codex**       | `npm install -g @openai/codex`             | [openai.com/codex](https://openai.com/codex) |
| **Gemini CLI**  | `npm install -g @google/gemini-cli`        | [ai.google.dev](https://ai.google.dev)       |

### 3. Run McGravity

```bash
cd your-project
mcgravity
```

On first run, McGravity will detect available AI tools and ask you to choose which to use for planning and execution.

### 4. Describe Your Task

Type what you want to build or fix:

```
Add a /health endpoint that returns JSON with status and uptime.
Check @src/routes/ for existing patterns.
```

Press `Enter` to start the flow.

## Installation Options

### Install Script (Recommended)

The install script automatically detects your OS and architecture:

```bash
# bun, npm, pnpm, yarn, etc.
npm install -g mcgravity
```

### GitHub Releases

Download the latest release for your platform from [GitHub Releases](https://github.com/tigranbs/mcgravity/releases), extract, and add to your PATH.

### Build from Source

```bash
git clone https://github.com/tigranbs/mcgravity.git
cd mcgravity
cargo install --path .
```

## Usage Guide

### Writing Task Descriptions

Good task descriptions are specific and reference relevant files:

```
Add input validation to the user registration form.
- Email must be valid format
- Password minimum 8 characters
- Show error messages inline
Check @src/components/RegisterForm.tsx for the component.
```

**Tips:**

- Be specific about what you want
- Reference files with `@` mentions
- List acceptance criteria
- Mention constraints (e.g., "don't add new dependencies")

### @ File Mentions

Type `@` followed by a filename to search your project:

```
Update @src/config.ts to add the new API endpoint.
```

- **Fuzzy search**: `@config` finds `src/config.ts`
- **Navigation**: Use `Up/Down` or `j/k` to select
- **Insert**: Press `Tab` or `Enter` to insert the path
- **Cancel**: Press `Esc` to dismiss

Files matching `.gitignore` patterns are excluded from suggestions.

### Slash Commands

Type `/` at the start of a line to see available commands:

| Command     | Description                        |
| ----------- | ---------------------------------- |
| `/settings` | Open settings panel                |
| `/clear`    | Clear task, output, and todo files |
| `/exit`     | Exit McGravity                     |

### Settings

Press `Ctrl+S` to open settings:

| Setting             | Options                | Description                     |
| ------------------- | ---------------------- | ------------------------------- |
| **Planning Model**  | Claude, Codex, Gemini  | AI tool for breaking down tasks |
| **Execution Model** | Claude, Codex, Gemini  | AI tool for implementing tasks  |
| **Enter Behavior**  | Submit / Newline       | What `Enter` does in the input  |
| **Max Iterations**  | 1, 3, 5, 10, Unlimited | How many plan→execute cycles    |

Settings are saved automatically to `.mcgravity/settings.json`.

## Key Bindings

### Global

| Key      | Action                               |
| -------- | ------------------------------------ |
| `Ctrl+S` | Open settings                        |
| `Ctrl+C` | Quit                                 |
| `Esc`    | Cancel running flow / Quit when idle |

### Text Input

| Key           | Action                                           |
| ------------- | ------------------------------------------------ |
| `Enter`       | Submit task (default) or newline (if configured) |
| `Ctrl+Enter`  | Always submits                                   |
| `Ctrl+J`      | Always inserts newline (works on all terminals)  |
| `Shift+Enter` | Insert newline                                   |
| `@`           | Open file search                                 |
| `/`           | Open command menu (at line start)                |

### Output Panel

| Key               | Action             |
| ----------------- | ------------------ |
| `Ctrl+Up/Down`    | Scroll output      |
| `PageUp/PageDown` | Page scroll        |
| `Ctrl+Home/End`   | Jump to top/bottom |

### Settings Panel

| Key                | Action           |
| ------------------ | ---------------- |
| `Up/Down` or `j/k` | Navigate options |
| `Enter` or `Space` | Change selection |
| `Esc` or `q`       | Close settings   |

### The Flow in Detail

```mermaid
flowchart TD
    subgraph Input
        A[Write task description]
    end

    subgraph Planning["Planning Phase"]
        B[AI reads your codebase]
        C[AI creates atomic task files]
        B --> C
    end

    subgraph Execution["Execution Phase"]
        D[Pick next task file]
        E[AI implements the task]
        F[Move to done folder]
        D --> E --> F
    end

    subgraph Review["Review Cycle"]
        G{More tasks?}
        H{More work needed?}
    end

    A --> B
    C --> G
    G -->|Yes| D
    G -->|No| I[Complete]
    F --> G
    G -->|All done| H
    H -->|Yes| B
    H -->|No| I
```

**Why this approach?**

1. **Focused AI**: Each phase has a single job. The planner only plans. The executor only executes.
2. **Atomic tasks**: Small, verifiable changes. Easy to review, easy to fix if something goes wrong.
3. **Built-in context**: Completed tasks inform the next planning cycle, so the AI knows what's been done.
4. **Controllable**: Cancel anytime with `Esc`. Set max iterations. Review after each cycle.

## File Structure (generated by McGravity)

McGravity creates a `.mcgravity/` folder in your project:

```
.mcgravity/
├── settings.json      # Your preferences
├── task.md            # Current task + completed task references
└── todo/
    ├── task-001.md    # Pending task (created by planner)
    ├── task-002.md    # Pending task
    └── done/
        └── task-001.md    # Completed task (archived)
```

### Task Files

Each task file contains:

```markdown
# Task 001: Add health endpoint

## Objective

Create a /health endpoint returning JSON status.

## Implementation Steps

1. Create route handler in src/routes/health.rs
2. Return JSON with status and uptime fields
3. Register route in src/main.rs

## Reference Files

- src/routes/mod.rs - Add module export
- src/main.rs - Register route

## Acceptance Criteria

- [ ] GET /health returns 200
- [ ] Response includes "status" and "uptime" fields
```

## Troubleshooting

### No AI tools detected

McGravity requires at least one AI CLI tool. Install one:

```bash
npm install -g @anthropic-ai/claude-code  # Claude Code
npm install -g @openai/codex               # Codex
npm install -g @google/gemini-cli          # Gemini
```

Then restart McGravity.

### Keys not working as expected

Some terminals don't report modifier keys correctly. Try:

- Use `Ctrl+J` for newlines (works everywhere)
- Use `j/k` instead of arrow keys for navigation

Enable debug mode to see what your terminal sends:

```bash
MCGRAVITY_DEBUG_KEYS=1 mcgravity
```

### Multi-line input

Several methods to insert newlines:

| Method           | How                               |
| ---------------- | --------------------------------- |
| `Ctrl+J`         | Works on all terminals            |
| `Shift+Enter`    | Standard (may not work on iPad)   |
| `\` then `Enter` | Backslash escape                  |
| Settings         | Set "Enter Behavior" to "Newline" |

### Flow not progressing

1. Check the output panel for error messages
2. Verify your AI CLI is authenticated (`claude --help`, `codex --help`)
3. Try reducing max iterations to 1 for debugging
4. Cancel with `Esc` and try a simpler task

## Privacy

McGravity runs AI CLI tools locally on your machine. It never collects, stores, or transmits your code or API keys. Configure authentication directly in the AI CLI tools you use.

## License

MIT

---

**Built with Rust + Ratatui** by [@tigranbs](https://github.com/tigranbs)

[Report Issues](https://github.com/tigranbs/mcgravity/issues) · [Releases](https://github.com/tigranbs/mcgravity/releases)
