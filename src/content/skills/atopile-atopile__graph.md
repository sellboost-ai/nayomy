---
name: "graph"
description_en: "How the Zig-backed instance graph works (GraphView/NodeReference/EdgeReference), the real Python API surface, and the invariants around allocation, attributes, and cleanup. Use when working with low-level graph APIs, memory management, or building systems that traverse the instance graph."
description_tr: "Zig ile desteklenen instance graph'ın nasıl çalıştığını (GraphView/NodeReference/EdgeReference), gerçek Python API surface'ini ve allocation, attributes ve cleanup etrafındaki invariantları açıklar. Low-level graph API'ler, memory management veya instance graph'ı traverse eden sistemler geliştirirken kullanın."
category: "Design"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/graph/SKILL.md"
path: ".claude/skills/graph/SKILL.md"
is_collection: false
body_length: 3481
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Graph Modülü

  `faebryk.core.graph` modülü, Zig graph implementasyonunun etrafındaki ince bir Python wrapper'ıdır.

  Davranışın source-of-truth kaynakları:
  - Zig implementasyonu: `src/faebryk/core/zig/src/graph/graph.zig`
  - Python bindings: `src/faebryk/core/zig/src/python/graph/graph_py.zig`
  - Public Python API surface (stubs): `src/faebryk/core/zig/gen/graph/graph.pyi`

  ## Hızlı Başlangıç

  ```python
  from faebryk.core.graph import GraphView

  g = GraphView.create()
  try:
      _ = g.create_and_insert_node()
  finally:
      g.destroy()
  ```

  ## İlgili Dosyalar

  - Python wrapper/re-export: `src/faebryk/core/graph.py`
  - Zig graph core: `src/faebryk/core/zig/src/graph/graph.zig`
  - Zig → Python wrappers: `src/faebryk/core/zig/src/python/graph/graph_py.zig`
  - Üretilen type stubs: `src/faebryk/core/zig/gen/graph/graph.pyi`

  ## Bağımlı Modüller (Çağrı Siteleri)

  - `src/faebryk/core/node.py` (FabLL: node'lar/trait'ler graph-backed)
  - `src/atopile/compiler/gentypegraph.py` (compiler, graph API'leri aracılığıyla typegraph'lar/instance'lar oluşturur)
  - `src/faebryk/core/graph_render.py` (graph görselleştirmesi)

  ## Nasıl Çalışılır / Geliştirme / Test

  ### Mental Model
  - `NodeReference` / `EdgeReference`: Zig'deki global backing storage'a (UUID'ler) value-like handle'lar.
  - `GraphView`: bu reference'lar üzerinde bir *membership + adjacency* view (view başına arena + map'ler + bitset'ler).
  - `BoundNode` / `BoundEdge`: traversal helper'ları için kullanılan "reference + owning GraphView pointer" wrapper'ları.

  ### Temel Değişmezler (ihlal etmeyin)
  - **Doğrudan constructor yok**: `GraphView()`, `NodeReference()`, `EdgeReference()` çağrılması amaçlanmamıştır; exposed factory method'ları kullanın.
    - `GraphView.create()`
    - `NodeReference.create(**attrs)`
    - `EdgeReference.create(source=..., target=..., edge_type=..., **attrs)`
  - **Açık cleanup**: `GraphView.create()` Zig-side graph'ı C allocator'ında tahsis eder; sadece `GraphView.destroy()` tarafından serbest bırakılır.
    - Python GC'nin Zig tahsislerini geri almasına güvenmeyin.
  - **Attribute limitleri**: node/edge dinamik attribute'ları Zig'de sabit-kapasiteli (şu anda 6 giriş). Bunu aşmak hard failure'dır.
  - **Edge type width**: edge type'ları Zig'de `u8`; Python'da `0..255` olarak işleyin (hashing/modulo Zig tarafında gerçekleşir).
  - **Self node var**: `GraphView.init` bir `self_node` ekler; sayımlar bunu içerir.

  ### API Cheat Sheet (matches `src/faebryk/core/zig/gen/graph/graph.pyi`)

  ```python
  from faebryk.core.graph import GraphView, Node, Edge

  g = GraphView.create()
  try:
      n1 = g.create_and_insert_node()           # -> BoundNode
      n2 = Node.create(name="n2")               # -> NodeReference (henüz insert edilmedi)
      bn2 = g.insert_node(node=n2)              # -> BoundNode

      e = Edge.create(source=n1.node(), target=bn2.node(), edge_type=7, name="link")
      _be = g.insert_edge(edge=e)               # -> BoundEdge
  finally:
      g.destroy()
  ```

  ### Debugging
  - `GraphView.__repr__()` Zig'den `GraphView(id=..., |V|=..., |E|=...)` yazdırır.
  - Graph wrapper'ı stress test var: `python -m faebryk.core.graph` (`test_graph_garbage_collection` çalıştırır).

  ### Geliştirme Workflow'u
  1) Zig değişiklikleri: `src/faebryk/core/zig/src/graph/*` düzenleyin.
  2) Rebuild: `ato dev compile` (editable install'larda `faebryk.core.zig` import eder, compile eder).
  3) Exposed method'ları ekler/kaldırırsanız: `src/faebryk/core/zig/src/python/graph/graph_py.zig`'deki wrapper'ı güncelleyin ve stub'ların yeniden oluşturulduğundan emin olun.

  ### Testing
  Ana test entrypoint'leri:
  - Python: `python -m faebryk.core.graph`
  - Zig: `zig test src/faebryk/core/zig/src/graph/graph.zig`
---

# Graph Module

The `faebryk.core.graph` module is a thin Python wrapper around the Zig graph implementation.

Source-of-truth for behavior is:
- Zig implementation: `src/faebryk/core/zig/src/graph/graph.zig`
- Python bindings: `src/faebryk/core/zig/src/python/graph/graph_py.zig`
- Public Python API surface (stubs): `src/faebryk/core/zig/gen/graph/graph.pyi`

## Quick Start

```python
from faebryk.core.graph import GraphView

g = GraphView.create()
try:
    _ = g.create_and_insert_node()
finally:
    g.destroy()
```

## Relevant Files

- Python wrapper/re-export: `src/faebryk/core/graph.py`
- Zig graph core: `src/faebryk/core/zig/src/graph/graph.zig`
- Zig → Python wrappers: `src/faebryk/core/zig/src/python/graph/graph_py.zig`
- Generated type stubs: `src/faebryk/core/zig/gen/graph/graph.pyi`

## Dependants (Call Sites)

- `src/faebryk/core/node.py` (FabLL: nodes/traits are graph-backed)
- `src/atopile/compiler/gentypegraph.py` (compiler constructs typegraphs/instances via graph APIs)
- `src/faebryk/core/graph_render.py` (graph visualization)

## How to Work With / Develop / Test

### Mental Model
- `NodeReference` / `EdgeReference`: value-like handles (UUIDs) into global backing storage in Zig.
- `GraphView`: a *membership + adjacency* view over those references (per-view arena + maps + bitsets).
- `BoundNode` / `BoundEdge`: “reference + owning GraphView pointer” wrappers used for traversal helpers.

### Core Invariants (do not violate)
- **No direct constructors**: `GraphView()`, `NodeReference()`, `EdgeReference()` are not meant to be called; use the exposed factory methods.
  - `GraphView.create()`
  - `NodeReference.create(**attrs)`
  - `EdgeReference.create(source=..., target=..., edge_type=..., **attrs)`
- **Explicit cleanup**: `GraphView.create()` allocates a Zig-side graph on the C allocator; it is freed only by `GraphView.destroy()`.
  - Do not rely on Python GC to reclaim Zig allocations.
- **Attribute limits**: node/edge dynamic attributes are fixed-capacity in Zig (currently 6 entries). Exceeding this is a hard failure.
- **Edge type width**: edge types are `u8` in Zig; treat them as `0..255` in Python (hashing/modulo happens on the Zig side).
- **Self node exists**: `GraphView.init` inserts a `self_node`; counts include it.

### API Cheatsheet (matches `src/faebryk/core/zig/gen/graph/graph.pyi`)

```python
from faebryk.core.graph import GraphView, Node, Edge

g = GraphView.create()
try:
    n1 = g.create_and_insert_node()           # -> BoundNode
    n2 = Node.create(name="n2")               # -> NodeReference (not inserted yet)
    bn2 = g.insert_node(node=n2)              # -> BoundNode

    e = Edge.create(source=n1.node(), target=bn2.node(), edge_type=7, name="link")
    _be = g.insert_edge(edge=e)               # -> BoundEdge
finally:
    g.destroy()
```

### Debugging
- `GraphView.__repr__()` prints `GraphView(id=..., |V|=..., |E|=...)` from Zig.
- Graph wrapper has a stress test: `python -m faebryk.core.graph` (runs `test_graph_garbage_collection`).

### Development Workflow
1) Zig changes: edit `src/faebryk/core/zig/src/graph/*`.
2) Rebuild: `ato dev compile` (imports `faebryk.core.zig`, which compiles in editable installs).
3) If you add/remove exposed methods: update the wrapper in `src/faebryk/core/zig/src/python/graph/graph_py.zig` and ensure stubs regenerate.

### Testing
Key test entrypoints:
- Python: `python -m faebryk.core.graph`
- Zig: `zig test src/faebryk/core/zig/src/graph/graph.zig`
