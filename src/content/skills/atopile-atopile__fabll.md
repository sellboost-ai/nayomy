---
name: "fabll"
description_en: "How FabLL (faebryk.core.node) maps Python node/trait declarations into the TypeGraph + instance graph, including field/trait invariants and instantiation patterns. Use when defining new components or traits, working with the Node API, or understanding type registration."
description_tr: "FabLL (faebryk.core.node) Python node/trait deklarasyonlarını TypeGraph ve instance graph'a nasıl dönüştürdüğünü, field/trait invariantlarını ve instantiation pattern'lerini açıklar. Yeni componentler veya trait'ler tanımlarken, Node API ile çalışırken veya type registration'ı anlarken kullanın."
category: "Development"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/fabll/SKILL.md"
path: ".claude/skills/fabll/SKILL.md"
is_collection: false
body_length: 4112
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # FabLL (Fabric Low Level) Modülü

  `fabll` (esas olarak `src/faebryk/core/node.py`) donanım bileşenleri tanımlamak ve bunlarla çalışmak için yüksek seviyeli Python API'sidir. Python sınıfları ile temel `TypeGraph` ve instance grafiği arasındaki boşluğu kapatır.

  ## Hızlı Başlangıç

  ```python
  import faebryk.core.faebrykpy as fbrk
  import faebryk.core.graph as graph
  import faebryk.core.node as fabll

  g = graph.GraphView.create()
  tg = fbrk.TypeGraph.create(g=g)

  class _App(fabll.Node):
      pass

  app = _App.bind_typegraph(tg=tg).create_instance(g=g)
  ```

  ## İlgili Dosyalar

  - `src/faebryk/core/node.py` (Node/Traits/alanlar, tür kaydı, bağlama/örnekleme yardımcıları)
  - `src/faebryk/core/faebrykpy.py` (FabLL tarafından arka planda kullanılan edge türleri)
  - `src/faebryk/core/graph.py` (örnekler tarafından kullanılan GraphView sarıcısı)

  ## Bağımlılar (Çağrı Siteleri)

  - **Kütüphane (`src/faebryk/library/`)**: Her bileşen (Resistor, Capacitor, vb.) `Node` sınıfından türetilir.
  - **Derleyici**: `ato` dosyalarından dinamik olarak `Node` alt sınıfları oluşturur.
  - **Çözücüler**: Parametreleri ve kısıtlamaları çıkarmak için `Node` örnekleri üzerinde çalışır.

  ## Nasıl Çalışılır / Geliştirme / Test

  ### Temel Konseptler
  - **Nodlar graf örneklerinin sarıcılarıdır**: bir `fabll.Node` bir `graph.BoundNode` ile oluşturulur.
  - **Sınıf öznitelikleri aracılığıyla bildiri**:
    - yapısal alt öğeler: `SomeType.MakeChild(...)`
    - trait ekleri: `Traits.MakeEdge(SomeTrait.MakeChild().put_on_type())` (veya benzer)
  - **Bağlama**:
    - tür bağlama: `MyType.bind_typegraph(tg)`
    - instance oluşturma: `.create_instance(g)`
  - **Tür tanımlayıcıları**:
    - kütüphane türleri (`faebryk.library.*`) ato içeri aktarmaları için kasıtlı olarak kısa tanımlayıcılara (sınıf adı) sahiptir
    - kütüphane olmayan türler modülden türetilmiş bir sonek içerir; tür ID'leri benzersiz olmalıdır (`Node._register_type` içinde zorunlu kılınır)

  ### Geliştirme İş Akışı
  1) Davranış eklemeyi sınıf hiyerarşilerini derinleştirmek yerine bir Trait olarak tercih edin.
  2) Yeni bir yapısal ilişki/alan türüne ihtiyacınız varsa, `src/faebryk/core/node.py` içinde bulunur (alan sistemi).
  3) Sınıf oluşturma sırasında zorunlu kılınan değişmezlere dikkat edin (metaclass + `__init_subclass__`).

  ### Test
  - Çekirdek testler: `ato dev test --llm test/core/test_node.py -q` ve `ato dev test --llm test/library/test_traits.py -q`

  ## En İyi Uygulamalar
  - **Traits'i Tercih Edin**: `Node` alt sınıflarına bir Trait olabilecek metotlar eklemeyin. Bu, onların farklı bileşen aileleri için uygulanmasına olanak tanır.
  - **Derin kalıtımdan Kaçının**: FabLL node türleri için tek seviyeli alt sınıflamayı zorunlu kılar (`Node.__init_subclass__`).
  - **Türe güvenli geçiş**: trait edge'lerini manuel olarak geçerken `EdgeTrait.traverse(trait_type=...)` tercih edin.

  ## İç Yapı ve Çalışma Zamanı Davranışı

  ### Örnekleme ve Yaşam Döngüsü
  - **Argüman olmadan `MyNode()` çağırmayın**: örnekler bağlı bir tür aracılığıyla `bind_typegraph(...).create_instance(...)` ile oluşturulur.
  - **TypeGraph bağlamı gereklidir**:
    ```python
    import faebryk.core.graph as graph
    import faebryk.core.faebrykpy as fbrk

    g = graph.GraphView.create()
    tg = fbrk.TypeGraph.create(g=g)
    inst = MyNode.bind_typegraph(tg).create_instance(g=g)
    ```
  - **Tek seviyeli alt sınıflama değişmezi**: `Node.__init_subclass__` node türleri için "birden fazla seviye derinliğinde" kalıtımı yasaklar.

  ### Trait Uygulaması
  - **Traitler Noddur**: Traitler sadece Python mixin'leri değildir; tipik olarak bir `ImplementsTrait` edge içeren `Node` alt sınıflarıdır.
  - **Trait Tanımı**:
    ```python
    class MyTrait(Node):
        is_trait = Traits.MakeEdge(ImplementsTrait.MakeChild().put_on_type())
    ```
  - **Çözünürlük**: Bir trait örneğini almak için `node_instance.get_trait(TraitType)` kullanın. Bu bir graf geçişi gerçekleştirir.

  ### Performans ve Bellek
  - **Tür Oluşturma**: Bir tür oluşturmanın önemli yükü vardır (alanları yürütme, bağımlılıkları çözme). Oluşturulduktan sonra, örnekleri örneklemek daha hızlıdır ancak yine de Zig arka uçunda tahsisi içerir.
  - **Ağaç Yapısı**: Nodlar `EdgeComposition` aracılığıyla bağlanır. `add_child` bu edge'i oluşturur. Büyük ağaçlar (10k+ düğüm) Python döngü yükünden kaçınmak için dikkatli bir şekilde inşa edilmelidir; temel graf verimlidir, ancak Python etkileşimleri zaman maliyeti vardır.
---

# FabLL (Fabric Low Level) Module

`fabll` (primarily `src/faebryk/core/node.py`) is the high-level Python API for defining and working with hardware components. It bridges the gap between Python classes and the underlying `TypeGraph` and instance graph.

## Quick Start

```python
import faebryk.core.faebrykpy as fbrk
import faebryk.core.graph as graph
import faebryk.core.node as fabll

g = graph.GraphView.create()
tg = fbrk.TypeGraph.create(g=g)

class _App(fabll.Node):
    pass

app = _App.bind_typegraph(tg=tg).create_instance(g=g)
```

## Relevant Files

- `src/faebryk/core/node.py` (Node/Traits/fields, type registration, binding/instantiation helpers)
- `src/faebryk/core/faebrykpy.py` (edge types used by FabLL under the hood)
- `src/faebryk/core/graph.py` (GraphView wrapper used by instances)

## Dependants (Call Sites)

- **Library (`src/faebryk/library/`)**: Every component (Resistor, Capacitor, etc.) inherits from `Node`.
- **Compiler**: Generates `Node` subclasses dynamically from `ato` files.
- **Solvers**: Operate on `Node` instances to extract parameters and constraints.

## How to Work With / Develop / Test

### Core Concepts
- **Nodes are wrappers over graph instances**: a `fabll.Node` is constructed with a `graph.BoundNode`.
- **Declaration via class attributes**:
  - structural children: `SomeType.MakeChild(...)`
  - trait attachments: `Traits.MakeEdge(SomeTrait.MakeChild().put_on_type())` (or similar)
- **Binding**:
  - type binding: `MyType.bind_typegraph(tg)`
  - instance creation: `.create_instance(g)`
- **Type identifiers**:
  - library types (`faebryk.library.*`) intentionally have short identifiers (class name) for ato imports
  - non-library types include a module-derived suffix; type IDs must be unique (enforced in `Node._register_type`)

### Development Workflow
1) Prefer adding behavior as a Trait rather than deepening class hierarchies.
2) If you need a new structural relation/field kind, it lives in `src/faebryk/core/node.py` (field system).
3) Keep an eye on invariants enforced at class creation time (metaclass + `__init_subclass__`).

### Testing
- Core tests: `ato dev test --llm test/core/test_node.py -q` and `ato dev test --llm test/library/test_traits.py -q`

## Best Practices
- **Prefer Traits**: Don't add methods to `Node` subclasses if they can be a Trait. This allows them to be applied to different component families.
- **Avoid deep inheritance**: FabLL enforces single-level subclassing for node types (`Node.__init_subclass__`).
- **Type-safe traversal**: when you must traverse trait edges manually, prefer `EdgeTrait.traverse(trait_type=...)`.

## Internals & Runtime Behavior

### Instantiation & Lifecycle
- **Don’t call `MyNode()` with no args**: instances are created from a bound type via `bind_typegraph(...).create_instance(...)`.
- **TypeGraph context is required**:
  ```python
  import faebryk.core.graph as graph
  import faebryk.core.faebrykpy as fbrk

  g = graph.GraphView.create()
  tg = fbrk.TypeGraph.create(g=g)
  inst = MyNode.bind_typegraph(tg).create_instance(g=g)
  ```
- **Single-level subclassing invariant**: `Node.__init_subclass__` forbids “deeper than one level” inheritance for node types.

### Trait Implementation
- **Traits are Nodes**: Traits are not just Python mixins; they are `Node` subclasses that typically contain an `ImplementsTrait` edge.
- **Trait Definition**:
  ```python
  class MyTrait(Node):
      is_trait = Traits.MakeEdge(ImplementsTrait.MakeChild().put_on_type())
  ```
- **Resolution**: Use `node_instance.get_trait(TraitType)` to retrieve a trait instance. This performs a graph traversal.

### Performance & Memory
- **Type Creation**: Creating a type involves significant overhead (executing fields, resolving dependencies). Once created, instantiating instances is faster but still involves allocation in the Zig backend.
- **Tree Structure**: Nodes are linked via `EdgeComposition`. `add_child` creates this edge. Large trees (10k+ nodes) should be constructed carefully to avoid Python loop overhead; the underlying graph is efficient, but Python interactions cost time.
