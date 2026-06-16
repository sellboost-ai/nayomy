---
name: "pyzig"
description_en: "How the Zig↔Python binding layer works (pyzig), including build-on-import, wrapper generation patterns, ownership rules, and where to add new exported APIs. Use when adding Zig-Python bindings, modifying native extensions, or debugging C-API interactions."
category: "Design"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/pyzig/SKILL.md"
path: ".claude/skills/pyzig/SKILL.md"
is_collection: false
body_length: 3830
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Pyzig Modülü

  `pyzig`, Faebryk'in native modüllerinin (graph, sexp, faebryk typegraph, …) kullanmış olduğu Zig↔Python birlikte çalışabilirlik katmanıdır.

  Ayırt edilmesi gereken üç ayrı katman vardır:
  - **Python loader/glue**: `src/faebryk/core/zig/__init__.py` (build-on-import + `.pyi` syncing)
  - **Zig build**: `src/faebryk/core/zig/build.zig` (`pyzig.so` + `pyzig_sexp.so` inşa eder, stub'lar üretir)
  - **Zig binding utilities**: `src/faebryk/core/zig/src/pyzig/*` (wrapper generation + minimal C-API surface)

  ## Hızlı Başlangıç

  ```bash
  ato dev compile
  python -c "import faebryk.core.zig; import faebryk.core.graph"
  ```

  ## İlgili Dosyalar

  - Python tarafı loader/build glue:
    - `src/faebryk/core/zig/__init__.py` (`ZIG_NORECOMPILE`, `ZIG_RELEASEMODE`, lock, stub syncing)
  - Zig build + stub generation:
    - `src/faebryk/core/zig/build.zig` (extensions'ı inşa eder + `.pyi` generator'ı çalıştırır)
  - Core pyzig utilities:
    - `src/faebryk/core/zig/src/pyzig/pybindings.zig` (minimal CPython C-API declarations)
    - `src/faebryk/core/zig/src/pyzig/pyzig.zig` (wrapper generation helpers)
    - `src/faebryk/core/zig/src/pyzig/type_registry.zig` (global type-object registry)
    - `src/faebryk/core/zig/src/pyzig/pyi.zig` (stub generation helpers)
  - Örnek tüketiciler:
    - `src/faebryk/core/zig/src/python/graph/graph_py.zig`
    - `src/faebryk/core/zig/src/python/sexp/sexp_py.zig`

  ## Bağımlılar (Çağrı Siteleri)

  - Graph bindings: `src/faebryk/core/zig/src/python/graph/*`
  - Sexp bindings: `src/faebryk/core/zig/src/python/sexp/*`
  - TypeGraph bindings: `src/faebryk/core/zig/src/python/faebryk/*` (ve diğerleri)

  ## Nasıl Çalışılır / Geliştiriş / Test

  ### Temel Konseptler
  - **Direct binding**: pyzig, CPython C-API'ı doğrudan çağırır (cffi/ctypes yok).
  - **Wrapper types**: çoğu exposed Zig struct, `wrap_in_python(...)` / `wrap_in_python_simple(...)` aracılığıyla Python heap type'larına dönüşür.
  - **Global type registry**: aynı Zig type'ı için Python `PyTypeObject`'lerin yeniden oluşturulmasını engeller (`type_registry`).
  - **Varsayılan olarak doğrudan `__init__` yok**: birçok "reference" type'ı kullanıcı tarafından inşa edilmesi amaçlanmamıştır; `pyzig` sıklıkla bir exception raise eden init kurar.
  - **Debug handle**: oluşturulan wrapper'lar pointer kimliği debug'lamaya yardımcı olmak için `__zig_address__()` içerir.

  ### Geliştirme Akışı
  1) Zig'i düzenleyin:
     - binding helpers: `src/faebryk/core/zig/src/pyzig/*`
     - module wrappers: `src/faebryk/core/zig/src/python/**`
  2) Native modüllerini yeniden inşa edin:
     - `ato dev compile` (`faebryk.core.zig`'i import eder; editable installs compile-on-import yapar)
     - gerektiğinde `ZIG_RELEASEMODE=ReleaseFast|ReleaseSafe|Debug` ayarlayın
  3) Stub'ları/çıktıyı değiştirdiyseniz:
     - `src/faebryk/core/zig/gen/**`'nin güncellendiğinden emin olun (bu `src/faebryk/core/zig/__init__.py` tarafından yönlendirilir)

  ### Test
  - Smoke test'ler genellikle downstream modüller aracılığıyla yapılır:
    - `python -m faebryk.core.graph` (GraphView allocation/cleanup stress)
    - `ato dev test --llm test/core/solver` (graph'i ve birçok alt sistem aracılığıyla binding'leri yoğun kullanır)

  ## En İyi Uygulamalar
  - **Hataların segfault yapacağını varsayın**: buradaki değişiklikleri güvenli olmayan systems programming'i gibi ele alın.
  - **Ownership konusunda açık olun**:
    - eğer bir wrapper, Zig memory'yi allocate ederse, nasıl serbest bırakıldığını tanımlayın (açık `.destroy()` vs `tp_dealloc` çağırıp `.deinit()`).
    - eğer input buffer'larını duplicate ederseniz (sexp yapar), bir `free(...)` path'i expose edin ve belgelendirin.
  - **Zig arena'ları için Python GC'ye güvenmeyin** unless deliberately installed a `tp_dealloc` çağıran `deinit`.
  - **Stub hygiene'i önemser**: `.pyi` surface'ini doğru tutun; birçok çağrıcı, navigation için type'lara güvenir.

  ## Build-on-import davranışı (önemli)

  `src/faebryk/core/zig/__init__.py` şunlardan sorumludur:
  - editable installs'te extension'ları derlemek (`ZIG_NORECOMPILE=1` olmadığı sürece)
  - `pyzig.so` ve `pyzig_sexp.so`'yu `src/faebryk/core/zig/zig-out/lib/`'ten yüklemek
  - oluşturulan `.pyi` dosyalarını `src/faebryk/core/zig/gen/**`'ye kopyalama + formatting (black + ruff)
---

# Pyzig Module

`pyzig` is the Zig↔Python interoperability layer used by Faebryk’s native modules (graph, sexp, faebryk typegraph, …).

There are three distinct layers to keep straight:
- **Python loader/glue**: `src/faebryk/core/zig/__init__.py` (build-on-import + `.pyi` syncing)
- **Zig build**: `src/faebryk/core/zig/build.zig` (builds `pyzig.so` + `pyzig_sexp.so`, generates stubs)
- **Zig binding utilities**: `src/faebryk/core/zig/src/pyzig/*` (wrapper generation + minimal C-API surface)

## Quick Start

```bash
ato dev compile
python -c "import faebryk.core.zig; import faebryk.core.graph"
```

## Relevant Files

- Python-side loader/build glue:
  - `src/faebryk/core/zig/__init__.py` (`ZIG_NORECOMPILE`, `ZIG_RELEASEMODE`, lock, stub syncing)
- Zig build + stub generation:
  - `src/faebryk/core/zig/build.zig` (builds extensions + runs `.pyi` generator)
- Core pyzig utilities:
  - `src/faebryk/core/zig/src/pyzig/pybindings.zig` (minimal CPython C-API declarations)
  - `src/faebryk/core/zig/src/pyzig/pyzig.zig` (wrapper generation helpers)
  - `src/faebryk/core/zig/src/pyzig/type_registry.zig` (global type-object registry)
  - `src/faebryk/core/zig/src/pyzig/pyi.zig` (stub generation helpers)
- Example consumers:
  - `src/faebryk/core/zig/src/python/graph/graph_py.zig`
  - `src/faebryk/core/zig/src/python/sexp/sexp_py.zig`

## Dependants (Call Sites)

- Graph bindings: `src/faebryk/core/zig/src/python/graph/*`
- Sexp bindings: `src/faebryk/core/zig/src/python/sexp/*`
- TypeGraph bindings: `src/faebryk/core/zig/src/python/faebryk/*` (and friends)

## How to Work With / Develop / Test

### Core Concepts
- **Direct binding**: pyzig calls the CPython C-API directly (no cffi/ctypes).
- **Wrapper types**: most exposed Zig structs become Python heap types via `wrap_in_python(...)` / `wrap_in_python_simple(...)`.
- **Global type registry**: prevents re-creating Python `PyTypeObject`s for the same Zig type (`type_registry`).
- **No direct `__init__` (by default)**: many “reference” types are not meant to be user-constructed; `pyzig` often installs an init that raises.
- **Debug handle**: generated wrappers include `__zig_address__()` to help debug pointer identity.

### Development Workflow
1) Edit Zig:
   - binding helpers: `src/faebryk/core/zig/src/pyzig/*`
   - module wrappers: `src/faebryk/core/zig/src/python/**`
2) Rebuild native modules:
   - `ato dev compile` (imports `faebryk.core.zig`; editable installs compile-on-import)
   - set `ZIG_RELEASEMODE=ReleaseFast|ReleaseSafe|Debug` as needed
3) If you changed stubs/output:
   - ensure `src/faebryk/core/zig/gen/**` gets updated (this is driven by `src/faebryk/core/zig/__init__.py`)

### Testing
- Smoke tests are usually through downstream modules:
  - `python -m faebryk.core.graph` (GraphView allocation/cleanup stress)
  - `ato dev test --llm test/core/solver` (heavy user of graph + bindings via many subsystems)

## Best Practices
- **Assume mistakes segfault**: treat changes here like unsafe systems programming.
- **Be explicit about ownership**:
  - if a wrapper allocates Zig memory, define how it is freed (explicit `.destroy()` vs `tp_dealloc` calling `.deinit()`).
  - if you duplicate input buffers (sexp does), expose a `free(...)` path and document it.
- **Don’t rely on Python GC for Zig arenas** unless you intentionally installed a `tp_dealloc` that calls `deinit`.
- **Stub hygiene matters**: keep the `.pyi` surface accurate; many callers rely on types for navigation.

## Build-on-import behavior (important)

`src/faebryk/core/zig/__init__.py` is responsible for:
- compiling extensions in editable installs (unless `ZIG_NORECOMPILE=1`)
- loading `pyzig.so` and `pyzig_sexp.so` from `src/faebryk/core/zig/zig-out/lib/`
- copying + formatting generated `.pyi` files into `src/faebryk/core/zig/gen/**` (black + ruff)
