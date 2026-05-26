---
name: "sexp"
description_en: "How the Zig S-expression engine and typed KiCad models work, how they are exposed to Python (pyzig_sexp), and the invariants around parsing, formatting, and freeing. Use when working with KiCad file parsing, S-expression generation, or layout sync."
description_tr: "Zig S-expression motoru ve yazılı KiCad modellerinin nasıl çalıştığını, Python'a (pyzig_sexp) nasıl expose edildiğini ve parsing, formatting ve memory freeing etrafındaki invariantları öğrenin. KiCad dosya parsing, S-expression generation veya layout sync işlemlerinde kullanın."
category: "Development"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/sexp/SKILL.md"
path: ".claude/skills/sexp/SKILL.md"
is_collection: false
body_length: 3782
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Sexp Modülü

  Sexp alt sistemi şunları sağlar:
  - Zig'de hızlı bir S-expression tokenizer/parser/pretty-printer ve
  - KiCad formatları (PCB, footprint, netlist, symbol, schematic, fp_lib_table) için yazılı Zig modelleri,
  `pyzig_sexp` extension modülü aracılığıyla Python'a açık hale getirilmiş.

  Kaynak-of-truth dokümanları ve kod:
  - `src/faebryk/core/zig/README.md` (üst düzey genel bakış)
  - `src/faebryk/core/zig/src/sexp/*` (tokenizer/AST/yapı)
  - `src/faebryk/core/zig/src/python/sexp/sexp_py.zig` (Python API + kritik bellek kuralları)

  ## Hızlı Başlangıç

  ```python
  from pathlib import Path
  from faebryk.libs.kicad.fileformats import kicad

  pcb = kicad.loads(kicad.pcb.PcbFile, Path("board.kicad_pcb"))
  _text = kicad.dumps(pcb)
  ```

  ## İlgili Dosyalar

  - Zig çekirdeği:
    - `src/faebryk/core/zig/src/sexp/tokenizer.zig` (tokenization + satır/sütun takibi)
    - `src/faebryk/core/zig/src/sexp/ast.zig` (SExp ağacı + KiCad pretty formatting)
    - `src/faebryk/core/zig/src/sexp/structure.zig` (decode/encode + hata bağlamı)
    - `src/faebryk/core/zig/src/sexp/kicad/*` (yazılı KiCad modelleri)
  - Python extension giriş noktası:
    - `src/faebryk/core/zig/src/python/sexp/init.zig` (`PyInit_pyzig_sexp` dışa aktarır)
    - `src/faebryk/core/zig/src/python/sexp/sexp_py.zig` (modül + tür bağlama oluşturma)
  - Oluşturulan Python stub'ları (kullanıcıların "gördüğü"):
    - `src/faebryk/core/zig/gen/sexp/*.pyi`
  - Kod tabanı genelinde kullanılan kolaylık sarmalayıcısı:
    - `src/faebryk/libs/kicad/fileformats.py` (ad alanlarını modüller + önbelleğe alma + `loads/dumps`)

  ## Bağımlılar (Çağrı Yerleri)

  - `src/faebryk/libs/kicad/fileformats.py` (birincil entegrasyon katmanı)
  - KiCad dışa aktarıcıları ve layout senkronizasyonu:
    - `src/faebryk/exporters/pcb/kicad/*`
    - `src/faebryk/exporters/pcb/layout/layout_sync.py`
  - KiCad plugin iş akışı: `src/atopile/kicad_plugin/*`

  ## Nasıl Çalışılır / Geliştirme / Test

  ### Temel Kavramlar
  - **İki seviyeli model**:
    - ham `SExp` parsing/formatting (`tokenizer.zig`, `ast.zig`)
    - yazılı KiCad decode/encoding (`structure.zig` + `sexp/kicad/*.zig`)
  - **Python API şekli**: extension, format başına modülleri (örneğin `pcb`, `netlist`) şu şekilde açığa çıkarır:
    - modül düzeyinde `loads(data: str) -> File`
    - modül düzeyinde `dumps(file: File) -> str`
    - Zig'e ait ayırmaları serbest bırakmak için `File.free(...)`
  - **Kolaylık sarmalayıcısı**: `faebryk.libs.kicad.fileformats.kicad` bu modülleri sarar ve `kicad.loads(...)`/`kicad.dumps(...)` sağlar.

  ### Geliştirme İş Akışı
  1) Zig'i değiştir:
     - parsing/formatting: `src/faebryk/core/zig/src/sexp/*`
     - Python açığa çıkarması: `src/faebryk/core/zig/src/python/sexp/sexp_py.zig`
  2) Yeniden derle:
     - `ato dev compile` (`faebryk.core.zig` içe aktarır)
  3) API'yi değiştirdiysen:
     - `src/faebryk/core/zig/gen/sexp/*.pyi` altındaki stub'ların buna göre güncellediğini doğrula
     - gerekirse `src/faebryk/libs/kicad/fileformats.py` ayarla

  ### Test
  - En iyi pratik test round-trip'tir:
    - bilinen bir `.kicad_pcb` / `.kicad_sch` yükle, dump et ve KiCad'in bunu kabul ettiğini doğrula (formatting duyarlı).
  - Zig unit testleri (mevcut olduğunda):
    - `zig test src/faebryk/core/zig/src/sexp/ast.zig`
    - `zig test src/faebryk/core/zig/src/sexp/structure.zig`

  ## En İyi Uygulamalar
  - Ham modül API'sine açıkça ihtiyaç duymadığın sürece `faebryk.libs.kicad.fileformats.kicad` tercih et.
  - `kicad.loads(...)` içindeki **shared-object önbelleğe alma**ya dikkat et: yol tabanlı yüklemeler önbelleğe alınır ve referans olarak döndürülür (mutasyonlar paylaşılır).

  ## Bellek & Yaşam Süresi Değişmezleri (kritik)

  Python bağlamaları, ayrıştırılan structs giriş arabelleğine işaretçiler içerdiği için giriş S-expression dizesini kalıcı bir ayırıcıya çoğaltır.

  Çıkarımlar:
  - Büyük dosyaların tekrarlanan `loads(...)` işlemleri, döndürülen `*File` üzerinde hiçbir zaman `free(...)` çağırmazsanız belleği büyütebilir.
  - Kolaylık sarmalayıcısı şu anda yüklenen nesneleri yola göre önbelleğe alır; cache'i de geçersiz kılmadığın sürece önbelleğe alınmış nesneler üzerinde `free(...)` çağırma.
---

# Sexp Module

The sexp subsystem provides:
- a fast S-expression tokenizer/parser/pretty-printer in Zig, and
- typed Zig models for KiCad formats (PCB, footprint, netlist, symbol, schematic, fp_lib_table),
exposed to Python via the `pyzig_sexp` extension module.

Source-of-truth docs and code:
- `src/faebryk/core/zig/README.md` (high-level overview)
- `src/faebryk/core/zig/src/sexp/*` (tokenizer/AST/structure)
- `src/faebryk/core/zig/src/python/sexp/sexp_py.zig` (Python API + critical memory rules)

## Quick Start

```python
from pathlib import Path
from faebryk.libs.kicad.fileformats import kicad

pcb = kicad.loads(kicad.pcb.PcbFile, Path("board.kicad_pcb"))
_text = kicad.dumps(pcb)
```

## Relevant Files

- Zig core:
  - `src/faebryk/core/zig/src/sexp/tokenizer.zig` (tokenization + line/column tracking)
  - `src/faebryk/core/zig/src/sexp/ast.zig` (SExp tree + KiCad pretty formatting)
  - `src/faebryk/core/zig/src/sexp/structure.zig` (decode/encode + error context)
  - `src/faebryk/core/zig/src/sexp/kicad/*` (typed KiCad models)
- Python extension entrypoint:
  - `src/faebryk/core/zig/src/python/sexp/init.zig` (exports `PyInit_pyzig_sexp`)
  - `src/faebryk/core/zig/src/python/sexp/sexp_py.zig` (module + type binding generation)
- Generated Python stubs (what users “see”):
  - `src/faebryk/core/zig/gen/sexp/*.pyi`
- Convenience wrapper used throughout the codebase:
  - `src/faebryk/libs/kicad/fileformats.py` (namespaces modules + caching + `loads/dumps`)

## Dependants (Call Sites)

- `src/faebryk/libs/kicad/fileformats.py` (primary integration layer)
- KiCad exporters and layout sync:
  - `src/faebryk/exporters/pcb/kicad/*`
  - `src/faebryk/exporters/pcb/layout/layout_sync.py`
- KiCad plugin workflow: `src/atopile/kicad_plugin/*`

## How to Work With / Develop / Test

### Core Concepts
- **Two-level model**:
  - raw `SExp` parsing/formatting (`tokenizer.zig`, `ast.zig`)
  - typed KiCad decoding/encoding (`structure.zig` + `sexp/kicad/*.zig`)
- **Python API shape**: the extension exposes per-format modules (e.g. `pcb`, `netlist`) with:
  - module-level `loads(data: str) -> File`
  - module-level `dumps(file: File) -> str`
  - `File.free(...)` for releasing Zig-owned allocations
- **Convenience wrapper**: `faebryk.libs.kicad.fileformats.kicad` wraps these modules and provides `kicad.loads(...)`/`kicad.dumps(...)`.

### Development Workflow
1) Modify Zig:
   - parsing/formatting: `src/faebryk/core/zig/src/sexp/*`
   - Python exposure: `src/faebryk/core/zig/src/python/sexp/sexp_py.zig`
2) Rebuild:
   - `ato dev compile` (imports `faebryk.core.zig`)
3) If you changed the API:
   - verify stubs under `src/faebryk/core/zig/gen/sexp/*.pyi` update accordingly
   - adjust `src/faebryk/libs/kicad/fileformats.py` if needed

### Testing
- Best practical test is round-trip:
  - load a known `.kicad_pcb` / `.kicad_sch`, dump it, and ensure KiCad accepts it (formatting-sensitive).
- Zig unit tests (where present):
  - `zig test src/faebryk/core/zig/src/sexp/ast.zig`
  - `zig test src/faebryk/core/zig/src/sexp/structure.zig`

## Best Practices
- Prefer `faebryk.libs.kicad.fileformats.kicad` unless you explicitly need the raw module API.
- Be mindful of **shared-object caching** in `kicad.loads(...)`: path-based loads are cached and returned by reference (mutations are shared).

## Memory & Lifetime Invariants (critical)

The Python bindings duplicate the input S-expression string into a persistent allocator because parsed structs contain pointers into the input buffer.

Implications:
- Repeated `loads(...)` of large files can grow memory if you never call `free(...)` on the returned `*File`.
- The convenience wrapper currently caches loaded objects by path; do not `free(...)` cached objects unless you also invalidate the cache.
