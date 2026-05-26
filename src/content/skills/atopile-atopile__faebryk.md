---
name: "faebryk"
description_en: "How Faebryk's TypeGraph works (GraphView + Zig edges), how to traverse/resolve references, and how FabLL types/traits map onto edge types. Use when working with TypeGraph traversal, edge types, or building type-aware queries."
description_tr: "Faebryk'ın TypeGraph'inin nasıl çalıştığını (GraphView + Zig edges), referansları nasıl traverse/resolve edeceğini ve FabLL types/traits'in edge types'a nasıl map olduğunu öğrenin. TypeGraph traversal, edge types veya type-aware queries oluştururken kullanın."
category: "Design"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/faebryk/SKILL.md"
path: ".claude/skills/faebryk/SKILL.md"
is_collection: false
body_length: 3179
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Faebryk Core Modülü

  Buradaki Faebryk core'u **TypeGraph** + Zig'de uygulanan edge tipleri ve `faebryk.core.faebrykpy` aracılığıyla Python'a expose edilen bileşenlerdir.

  API + davranış için doğruluk kaynağı:
  - `src/faebryk/core/faebrykpy.py` (Python-facing wrapper + type-safe `EdgeTrait.traverse`)
  - `src/faebryk/core/zig/gen/faebryk/typegraph.pyi` (public stubbed API surface)
  - `src/faebryk/core/zig/src/faebryk/*` (Zig implementation)

  ## Hızlı Başlangıç

  ```python
  import faebryk.core.faebrykpy as fbrk
  import faebryk.core.graph as graph

  g = graph.GraphView.create()
  tg = fbrk.TypeGraph.create(g=g)
  ```

  ## İlgili Dosyalar

  - `src/faebryk/core/faebrykpy.py` (re-exports + `EdgeTraversal` + type-safe `EdgeTrait.traverse`)
  - `src/faebryk/core/zig/gen/faebryk/typegraph.pyi` (TypeGraph stub)
  - Temel edge tipleri (`faebrykpy.py` tarafından import edilir):
    - `EdgeComposition` (parent/child yapısı)
    - `EdgeTrait` / `Trait` (trait ekleme)
    - `EdgePointer` (referanslar)
    - `EdgeInterfaceConnection` (interface bağlantıları)
    - `EdgeOperand` (solver operand wiring)
    - `EdgeType` / `EdgeNext` (type graph plumbing)
  - Linker:
    - `Linker` (compiler/linking aşamaları tarafından kullanılır)

  ## Bağımlılar (Çağrı Siteleri)

  - FabLL: `src/faebryk/core/node.py` (Python sınıflarını TypeGraph'a bağlar; composition/trait edges kullanır)
  - Compiler: `src/atopile/compiler/*` (TypeGraph'ları oluşturur ve bağlar)
  - Solver: `src/faebryk/core/solver/*` (operand edges ve instance traversal)
  - Build/export pipeline: `src/atopile/build_steps.py` (PCB/layout özelliği için type/instance edges'i ziyaret eder)

  ## Nasıl Çalışılır / Geliştirilebilir / Test Edilebilir

  ### Temel Kavramlar
  - **GraphView + TypeGraph**: bir `TypeGraph` bir `GraphView`'a karşı oluşturulur:
    ```python
    import faebryk.core.graph as graph
    import faebryk.core.faebrykpy as fbrk

    g = graph.GraphView.create()
    tg = fbrk.TypeGraph.create(g=g)
    ```
  - **Type node'ları vs instance node'ları**:
    - TypeGraph type tanımlarını depolar ("bir type üzerinde yapısal olarak ne var")
    - GraphView ayrıca bu type'lardan oluşturulan instance'ları depolar ("somut bir design graph")
  - **EdgeTraversal**: `TypeGraph.ensure_child_reference(..., path=[...])` type graph üzerinden referansları yürümek için `EdgeTraversal` item'larını kullanır.

  ### Geliştirme İş Akışı
  1) Zig-side değişiklikleri: `src/faebryk/core/zig/src/faebryk/*` dosyalarını düzenleyin (edges, typegraph internals).
  2) Bindings'i yeniden derleyin: `ato dev compile` (`faebryk.core.zig` import eder).
  3) Python ergonomics: `src/faebryk/core/faebrykpy.py` içine wrapper'lar/helper'lar ekleyin (örnek: type-safe `EdgeTrait.traverse`).

  ### Test Etme
  - TypeGraph-ağır testler compiler/runtime suite'lerinde bulunur:
    - `ato dev test --llm test/compiler/test_typegraph.py -q`
    - `ato dev test --llm test/compiler/test_runtime.py -q`
  - Zig-backed traversal testleri:
    - `ato dev test --llm test/core/zig/test_interface_pathfinder.py -q`

  ## En İyi Uygulamalar
  - Edges/TypeGraph'ı `faebryk.core.faebrykpy` üzerinden import edin (böylece arayanlar Python helper'larını alır, sadece raw generated type'ları değil).
  - Type-safe trait traversal'ı tercih edin:
    - `EdgeTrait.traverse(trait_type=SomeTrait)` yerine stringly-typed `trait_type_name=...` kullanın.
  - Reference path'leri oluştururken, implicit string davranışına güvenmek yerine edge semantiği'ni açıkça belirtin (composition vs pointer vs trait).
---

# Faebryk Core Module

The Faebryk core here is the **TypeGraph** + edge types implemented in Zig and exposed to Python via `faebryk.core.faebrykpy`.

Source-of-truth for API + behavior:
- `src/faebryk/core/faebrykpy.py` (Python-facing wrapper + type-safe `EdgeTrait.traverse`)
- `src/faebryk/core/zig/gen/faebryk/typegraph.pyi` (public stubbed API surface)
- `src/faebryk/core/zig/src/faebryk/*` (Zig implementation)

## Quick Start

```python
import faebryk.core.faebrykpy as fbrk
import faebryk.core.graph as graph

g = graph.GraphView.create()
tg = fbrk.TypeGraph.create(g=g)
```

## Relevant Files

- `src/faebryk/core/faebrykpy.py` (re-exports + `EdgeTraversal` + type-safe `EdgeTrait.traverse`)
- `src/faebryk/core/zig/gen/faebryk/typegraph.pyi` (TypeGraph stub)
- Key edge types (imported by `faebrykpy.py`):
  - `EdgeComposition` (parent/child structure)
  - `EdgeTrait` / `Trait` (trait attachment)
  - `EdgePointer` (references)
  - `EdgeInterfaceConnection` (interface connections)
  - `EdgeOperand` (solver operand wiring)
  - `EdgeType` / `EdgeNext` (type graph plumbing)
- Linker:
  - `Linker` (used by compiler/linking stages)

## Dependants (Call Sites)

- FabLL: `src/faebryk/core/node.py` (binds Python classes into the TypeGraph; uses composition/trait edges)
- Compiler: `src/atopile/compiler/*` (creates and links TypeGraphs)
- Solver: `src/faebryk/core/solver/*` (operand edges and instance traversal)
- Build/export pipeline: `src/atopile/build_steps.py` (visits type/instance edges for PCB/layout features)

## How to Work With / Develop / Test

### Core Concepts
- **GraphView + TypeGraph**: a `TypeGraph` is created against a `GraphView`:
  ```python
  import faebryk.core.graph as graph
  import faebryk.core.faebrykpy as fbrk

  g = graph.GraphView.create()
  tg = fbrk.TypeGraph.create(g=g)
  ```
- **Type nodes vs instance nodes**:
  - TypeGraph stores type definitions (“what exists structurally on a type”)
  - GraphView also holds instances created from those types (“a concrete design graph”)
- **EdgeTraversal**: `TypeGraph.ensure_child_reference(..., path=[...])` uses `EdgeTraversal` items to walk references through the type graph.

### Development Workflow
1) Zig-side changes: edit `src/faebryk/core/zig/src/faebryk/*` (edges, typegraph internals).
2) Rebuild bindings: `ato dev compile` (imports `faebryk.core.zig`).
3) Python ergonomics: add wrappers/helpers in `src/faebryk/core/faebrykpy.py` (example: type-safe `EdgeTrait.traverse`).

### Testing
- TypeGraph-heavy tests live in compiler/runtime suites:
  - `ato dev test --llm test/compiler/test_typegraph.py -q`
  - `ato dev test --llm test/compiler/test_runtime.py -q`
- Zig-backed traversal tests:
  - `ato dev test --llm test/core/zig/test_interface_pathfinder.py -q`

## Best Practices
- Import edges/TypeGraph via `faebryk.core.faebrykpy` (so callers get Python helpers, not just raw generated types).
- Prefer type-safe trait traversal:
  - `EdgeTrait.traverse(trait_type=SomeTrait)` over stringly-typed `trait_type_name=...`.
- When building reference paths, be explicit about edge semantics (composition vs pointer vs trait) rather than relying on implicit string behavior.
