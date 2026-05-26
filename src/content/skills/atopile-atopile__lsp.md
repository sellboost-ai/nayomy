---
name: "lsp"
description_en: "How the atopile Language Server works (pygls), how it builds per-document graphs for completion/hover/defs, and the invariants for keeping it fast and crash-proof."
description_tr: "Atopile Language Server'ın (pygls) nasıl çalıştığı, completion/hover/definitions için belge başına grafikler oluşturması ve hızlı ve stabil kalmasını sağlayan değişmezleri açıklar."
category: "Document"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/lsp/SKILL.md"
path: ".claude/skills/lsp/SKILL.md"
is_collection: false
body_length: 2176
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # LSP Modülü

  `lsp` modülü (`src/atopile/lsp/` dizininde yer alır) atopile için Language Server Protocol'ü uygular. `ato` dosyaları için otomatik tamamlama, tanıma gitme ve tanılama (hata raporlama) gibi IDE özelliklerini sağlar.

  ## Hızlı Başlangıç

  Sunucuyu stdio üzerinde çalıştırın (editörlerin beklediği şey):

  ```bash
  python -m atopile.lsp.lsp_server
  ```

  ## İlgili Dosyalar

  - Sunucu uygulaması: `src/atopile/lsp/lsp_server.py`
    - global `LSP_SERVER` (pygls `LanguageServer`) sahibi
    - doküman başına `DocumentState` tutar (graph/typegraph/build_result)
    - completion/hover/definition/diagnostics handler'larını uygular
  - Yardımcı araçlar: `src/atopile/lsp/lsp_utils.py`
  - İsteğe bağlı hata ayıklama yardımcısı: `src/atopile/lsp/_debug_server.py`

  ## Bağımlılar (Çağrı Siteleri)

  - **VSCode Extension**: Bu sunucu için belirtilen istemci.
  - **Compiler**: LSP, kod yapısını anlamak için derleyiciyi (çoğunlukla kısmi veya hata-toleranslı modda) çağırır.

  ## Nasıl Çalışılır / Geliştirilebilir / Test Edilir

  ### Temel Kavramlar
  - **Kısmi Derleme**: CLI build'in aksine, LSP kırık veya eksik kodu kilitlenmeden işleyebilmelidir.
  - **Gecikme Süresi**: Özellikler hızlı olmalıdır (yazma için <50ms, tamamlama için <200ms).
  - **Doküman başına graph'lar**: açık olan her dokümanın `DocumentState` içinde depolanmış izole bir `GraphView` + `TypeGraph`'ı vardır.
  - **Son başarılı build'i tut**: sunucu, mevcut düzenleme hatalar içerse bile tamamlama/hover özelliklerini desteklemek için son başarılı `BuildFileResult`'ı tutar.

  ### Geliştirme İş Akışı
  1) `src/atopile/lsp/lsp_server.py` içindeki handler'ları/yardımcıları düzenleyin.
  2) Tamamlama testlerini çalıştırın (hızlı döngü) ve GraphView temizleme yollarını doğrulayın.

  ### Test Etme
  - Entegrasyon stili testler: `ato dev test --llm test/test_lsp_completion.py -q`

  ## En İyi Uygulamalar
  - **Sağlamlık**: Sunucunun hiçbir zaman kilitlenmesine izin vermeyin. Handler'lardaki tüm istisnaları yakalayın ve günlüğe kaydedin.
  - **Debouncing**: Her tuşa basışında pahalı işlemleri tetiklemeyin.

  ## Temel Değişmezler (regresyon açısından kolay)
  - Rebuild/reset yapılırken eski graph'ları her zaman yok edin (`DocumentState.reset_graph` çağrısı `GraphView.destroy()` yapar).
  - Build'lerin başarılı olacağını varsaymayın; çoğu özellik aşağıdakilerle başa çıkmalıdır:
    - söz dizimi hataları (ANTLR)
    - kısmi typegraph'lar
    - linking/deferred execution'dan gelen istisnalar
---

# LSP Module

The `lsp` module (located in `src/atopile/lsp/`) implements the Language Server Protocol for atopile. It provides IDE features like autocomplete, go-to-definition, and diagnostics (error reporting) for `ato` files.

## Quick Start

Run the server on stdio (what editors expect):

```bash
python -m atopile.lsp.lsp_server
```

## Relevant Files

- Server implementation: `src/atopile/lsp/lsp_server.py`
  - owns global `LSP_SERVER` (pygls `LanguageServer`)
  - maintains per-document `DocumentState` (graph/typegraph/build_result)
  - implements completion/hover/definition/diagnostics handlers
- Utilities: `src/atopile/lsp/lsp_utils.py`
- Optional debugging helper: `src/atopile/lsp/_debug_server.py`

## Dependants (Call Sites)

- **VSCode Extension**: The designated client for this server.
- **Compiler**: The LSP invokes the compiler (often in a partial or fault-tolerant mode) to understand the code structure.

## How to Work With / Develop / Test

### Core Concepts
- **Partial Compilation**: Unlike the CLI build, the LSP must handle broken or incomplete code without crashing.
- **Latency**: Features must be fast (<50ms for typing, <200ms for completion).
- **Per-document graphs**: each open document has an isolated `GraphView` + `TypeGraph` stored in `DocumentState`.
- **Keep last good build**: the server keeps the last successful `BuildFileResult` to power completion/hover even when the current edit has errors.

### Development Workflow
1) Edit handlers/helpers in `src/atopile/lsp/lsp_server.py`.
2) Run completion tests (fast loop) and verify GraphView cleanup paths.

### Testing
- Integration-style tests: `ato dev test --llm test/test_lsp_completion.py -q`

## Best Practices
- **Robustness**: Never let the server crash. Catch all exceptions in handlers and log them.
- **Debouncing**: Don't trigger expensive operations on every keystroke.

## Core Invariants (easy to regress)
- Always destroy old graphs on rebuild/reset (`DocumentState.reset_graph` calls `GraphView.destroy()`).
- Do not assume builds succeed; most features must handle:
  - syntax errors (ANTLR)
  - partial typegraphs
  - exceptions from linking/deferred execution
