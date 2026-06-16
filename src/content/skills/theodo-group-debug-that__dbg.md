---
name: "dbg"
description_en: "> Debug applications using the dbg CLI debugger. Supports Node.js (V8/CDP), Bun (WebKit/JSC), and native code via LLDB (DAP). Use when: (1) investigating runtime bugs by stepping through code, (2) inspecting variable values at specific execution points, (3) setting breakpoints and conditional breakpoints, (4) evaluating expressions in a paused context, (5) hot-patching code without restarting (JS/"
category: "Design"
repo: "theodo-group/debug-that"
stars: 156
url: "https://github.com/theodo-group/debug-that/blob/HEAD/.claude/skills/debug-that/SKILL.md"
path: ".claude/skills/debug-that/SKILL.md"
is_collection: false
body_length: 4814
has_scripts: false
has_references: true
has_examples: false
related_files: []
body_tr: |-
  # dbg Debugger

  `dbg` bir CLI hata ayıklayıcısıdır ve **Node.js** (V8/CDP), **Bun** (WebKit/JSC), **Java** (JDWP/DAP üzerinden) ve **native code** (C/C++/Rust/Swift LLDB/DAP üzerinden) destekler. Tüm entityler için kısa `@refs` kullanır -- uzun ID'ler yerine bunları kullanın.

  ## Desteklenen Runtime'lar

  | Runtime | Dil | Başlatma örneği |
  |---------|----------|----------------|
  | Node.js | JavaScript | `dbg launch --brk node app.js` |
  | tsx / ts-node | TypeScript | `dbg launch --brk tsx src/app.ts` |
  | Bun | JavaScript / TypeScript | `dbg launch --brk bun app.ts` |
  | LLDB | C / C++ / Rust / Swift | `dbg launch --brk --runtime lldb ./program` |
  | JDWP | Java | `dbg launch --brk --runtime java ./program` |

  Runtime, JS runtime'ları için başlatma komutundan otomatik olarak algılanır. Native code için `--runtime lldb` kullanın.

  ## Çekirdek Debug Döngüsü

  ```bash
  # 1. İlk satırda breakpoint ile başlat
  dbg launch --brk node app.js
  # Veya: dbg launch --brk bun app.ts
  # Veya: dbg launch --brk --runtime lldb ./my_program
  # Veya --inspect flag ile çalışan bir process'e bağlan
  dbg attach 9229

  # 2. Şüpheli yerlerde breakpoint ayarla
  dbg break src/handler.ts:42
  dbg break src/utils.ts:15 --condition "count > 10"

  # 3. Breakpoint'e kadar çalıştır
  dbg continue

  # 4. State'i incele (konum, kaynak, yerel değişkenler, stack gösterir)
  dbg state

  # 5. Değerleri derinlemesine incele
  dbg props @v1              # object'i genişlet
  dbg props @v1 --depth 3   # 3 seviye iç içe genişlet
  dbg eval "x + 1"

  # 6. Düzelt ve doğrula (sadece JS/TS)
  dbg set count 0            # değişkeni değiştir
  dbg hotpatch src/utils.js  # canlı düzenle (diskteki dosyayı okur)
  dbg continue               # düzeltmeyi doğrula
  ```

  ## Hata Ayıklama Stratejileri

  ### Hata araştırması -- breakpoint'lerle daralt
  ```bash
  dbg launch --brk node app.js
  dbg break src/api.ts:50                    # şüpheli satır
  dbg break src/api.ts:60 --condition "!user" # koşullu
  dbg continue
  dbg vars                                    # yerel değişkenleri kontrol et
  dbg eval "JSON.stringify(req.body)"         # derinlemesine incele
  dbg step over                               # bir satır ilerle
  dbg state                                   # yeni state'i gör
  ```

  ### Native code hata ayıklama (C/C++/Rust)
  ```bash
  dbg launch --brk --runtime lldb ./my_program
  dbg break main.c:42
  dbg break-fn main                          # function breakpoint (sadece DAP)
  dbg continue
  dbg vars                                    # yerel değişkenleri incele
  dbg eval "array[i]"                         # ifadeyi değerlendir
  dbg step into                               # fonksiyona adım at
  ```

  ### Çalışan/test process'e bağlan
  ```bash
  # Inspector etkinleştirilmiş şekilde başlat
  node --inspect app.js
  # Veya: bun --inspect app.ts
  # Sonra bağlan
  dbg attach 9229
  dbg state
  ```

  ### Logpoint'lerle yürütme akışını takip et (durmaz)
  ```bash
  dbg logpoint src/auth.ts:20 "login attempt: ${username}"
  dbg logpoint src/auth.ts:45 "auth result: ${result}"
  dbg continue
  dbg console    # günlüğe yazılan çıktıyı gör
  ```

  ### Exception hata ayıklama
  ```bash
  dbg catch uncaught          # yakalanamayan exceptionlarda durdur
  dbg continue                # exception'a kadar çalıştır
  dbg state                   # fırlattığı yeri gör
  dbg eval "err.message"      # hatayı incele
  dbg stack                   # tam call stack
  ```

  ### TypeScript source map desteği
  dbg otomatik olarak source map'ler üzerinden `.ts` yollarını çözer. `.ts` yollarını kullanarak breakpoint ayarlayın, çıktıda `.ts` kaynak kodunu görün. Derlenmiş `.js` kodunu görmek için `--generated` kullanın.

  ## Ref Sistemi

  Her çıktı kısa refs atar. Bunları her yerde kullanın:
  - `@v1..@vN` -- değişkenler: `dbg props @v1`, `dbg set @v2 true`
  - `@f0..@fN` -- stack frame'leri: `dbg eval --frame @f1 "this"`
  - `BP#1..N` -- breakpoint'ler: `dbg break-rm BP#1`, `dbg break-toggle BP#1`
  - `LP#1..N` -- logpoint'ler: `dbg break-rm LP#1`

  `@v`/`@f` ref'leri her duruşta sıfırlanır. `BP#`/`LP#` kaldırılana kadar devam eder.

  ## Temel Flag'ler

  - `--json` -- herhangi bir komutta makine tarafından okunabilir JSON çıktı
  - `--session NAME` -- belirli bir session'ı hedefle (varsayılan: "default")
  - `--runtime NAME` -- debug adapter'ı seç (örn. native code için `lldb`)
  - `--generated` -- source map'leri atla, derlenmiş JS göster (state/source/stack'te)

  ## Komut Referansı

  Tam komut detayları ve seçenekleri için [references/commands.md](references/commands.md) bölümüne bakın.

  ## İpuçları

  - `dbg state` adımlamadan sonra her zaman konum + kaynak + yerel değişkenleri gösterir -- genellikle yeterli bağlam
  - `dbg state -c` sadece kaynak, `-v` sadece değişkenler, `-s` sadece stack için -- token'ları kurtarın
  - `dbg eval` `await` destekler -- async inceleme için faydalı (JS/TS)
  - `dbg blackbox "node_modules/**"` -- bağımlılıklara adım atmayı atla
  - `dbg hotpatch file` dosyayı diskten okur -- önce dosyayı düzenleyin, sonra hotpatch yapın (sadece JS/TS)
  - `dbg break-fn funcName` -- function breakpoint'ler DAP runtime'larında çalışır (LLDB)
  - Yürütme komutları (`continue`, `step`, `pause`, `run-to`) otomatik olarak status döndürür
  - `dbg stop` hata ayıklanan process'i ve daemon'u öldürür
---

# dbg Debugger

`dbg` is a CLI debugger that supports **Node.js** (V8/CDP), **Bun** (WebKit/JSC), **Java** (via JDWP/DAP) and **native code** (C/C++/Rust/Swift via LLDB/DAP). It uses short `@refs` for all entities -- use them instead of long IDs.

## Supported Runtimes

| Runtime | Language | Launch example |
|---------|----------|----------------|
| Node.js | JavaScript | `dbg launch --brk node app.js` |
| tsx / ts-node | TypeScript | `dbg launch --brk tsx src/app.ts` |
| Bun | JavaScript / TypeScript | `dbg launch --brk bun app.ts` |
| LLDB | C / C++ / Rust / Swift | `dbg launch --brk --runtime lldb ./program` |
| JDWP | Java | `dbg launch --brk --runtime java ./program` |

The runtime is auto-detected from the launch command for JS runtimes. For native code, use `--runtime lldb`.

## Core Debug Loop

```bash
# 1. Launch with breakpoint at first line
dbg launch --brk node app.js
# Or: dbg launch --brk bun app.ts
# Or: dbg launch --brk --runtime lldb ./my_program
# Or attach to a running process with the --inspect flag
dbg attach 9229

# 2. Set breakpoints at suspicious locations
dbg break src/handler.ts:42
dbg break src/utils.ts:15 --condition "count > 10"

# 3. Run to breakpoint
dbg continue

# 4. Inspect state (shows location, source, locals, stack)
dbg state

# 5. Drill into values
dbg props @v1              # expand object
dbg props @v1 --depth 3   # expand nested 3 levels
dbg eval "x + 1"

# 6. Fix and verify (JS/TS only)
dbg set count 0            # change variable
dbg hotpatch src/utils.js  # live-edit (reads file from disk)
dbg continue               # verify fix
```

## Debugging Strategies

### Bug investigation -- narrow down with breakpoints
```bash
dbg launch --brk node app.js
dbg break src/api.ts:50                    # suspect line
dbg break src/api.ts:60 --condition "!user" # conditional
dbg continue
dbg vars                                    # check locals
dbg eval "JSON.stringify(req.body)"         # inspect deeply
dbg step over                               # advance one line
dbg state                                   # see new state
```

### Native code debugging (C/C++/Rust)
```bash
dbg launch --brk --runtime lldb ./my_program
dbg break main.c:42
dbg break-fn main                          # function breakpoint (DAP only)
dbg continue
dbg vars                                    # inspect locals
dbg eval "array[i]"                         # evaluate expression
dbg step into                               # step into function
```

### Attach to running/test process
```bash
# Start with inspector enabled
node --inspect app.js
# Or: bun --inspect app.ts
# Then attach
dbg attach 9229
dbg state
```

### Trace execution flow with logpoints (no pause)
```bash
dbg logpoint src/auth.ts:20 "login attempt: ${username}"
dbg logpoint src/auth.ts:45 "auth result: ${result}"
dbg continue
dbg console    # see logged output
```

### Exception debugging
```bash
dbg catch uncaught          # pause on uncaught exceptions
dbg continue                # runs until exception
dbg state                   # see where it threw
dbg eval "err.message"      # inspect the error
dbg stack                   # full call stack
```

### TypeScript source map support
dbg automatically resolves `.ts` paths via source maps. Set breakpoints using `.ts` paths, see `.ts` source in output. Use `--generated` to see compiled `.js` if needed.

## Ref System

Every output assigns short refs. Use them everywhere:
- `@v1..@vN` -- variables: `dbg props @v1`, `dbg set @v2 true`
- `@f0..@fN` -- stack frames: `dbg eval --frame @f1 "this"`
- `BP#1..N` -- breakpoints: `dbg break-rm BP#1`, `dbg break-toggle BP#1`
- `LP#1..N` -- logpoints: `dbg break-rm LP#1`

Refs `@v`/`@f` reset on each pause. `BP#`/`LP#` persist until removed.

## Key Flags

- `--json` -- machine-readable JSON output on any command
- `--session NAME` -- target a specific session (default: "default")
- `--runtime NAME` -- select debug adapter (e.g. `lldb` for native code)
- `--generated` -- bypass source maps, show compiled JS (on state/source/stack)

## Command Reference

See [references/commands.md](references/commands.md) for full command details and options.

## Tips

- `dbg state` after stepping always shows location + source + locals -- usually enough context
- `dbg state -c` for source only, `-v` for vars only, `-s` for stack only -- save tokens
- `dbg eval` supports `await` -- useful for async inspection (JS/TS)
- `dbg blackbox "node_modules/**"` -- skip stepping into dependencies
- `dbg hotpatch file` reads the file from disk -- edit the file first, then hotpatch (JS/TS only)
- `dbg break-fn funcName` -- function breakpoints work with DAP runtimes (LLDB)
- Execution commands (`continue`, `step`, `pause`, `run-to`) auto-return status
- `dbg stop` kills the debugged process and daemon
