---
name: "library"
description_en: "How the Faebryk component library is structured, how `_F.py` is generated, and the conventions/invariants for adding new library modules. Use when adding or modifying library components, traits, or module definitions."
category: "Development"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/library/SKILL.md"
path: ".claude/skills/library/SKILL.md"
is_collection: false
body_length: 2598
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Kütüphane Modülü

  `library` modülü (`src/faebryk/library/` dizininde yer alır), donanım tasarım dilinin "standart kütüphanesini" oluşturan yeniden kullanılabilir bileşenlerin, özelliklerin ve arayüzlerin koleksiyonunu içerir.

  ## Hızlı Başlangıç

  ```python
  import faebryk.core.faebrykpy as fbrk
  import faebryk.core.graph as graph
  import faebryk.library._F as F

  g = graph.GraphView.create()
  tg = fbrk.TypeGraph.create(g=g)

  resistor = F.Resistor.bind_typegraph(tg=tg).create_instance(g=g)
  ```

  ## İlgili Dosyalar

  - **Facade (otomatik oluşturulan)**: `src/faebryk/library/_F.py`
    - Kütüphane modüllerini ve türlerini `import faebryk.library._F as F` deseni için hevesle içeri aktarır ve yeniden dışa aktarır.
    - Bu dosya oluşturulmuştur; manuel olarak düzenlemeyin.
  - **Generator**: `tools/library/gen_F.py`
    - `src/faebryk/library/*.py` taraması yapar, dosyanın aynı adlı bir sınıf içerip içermediğini algılar ve `_F.py` yazar.
    - `F.<Name>` referanslarının topolojik sıralaması aracılığıyla dışa aktarımları sıralar ve import-order döngülerini önler.
  - **Bileşenler**: `src/faebryk/library/` spesifik bileşen tanımlarını içerir (örn. `Resistor.py`, `Capacitor.py`, `LED.py`).
  - **Traits/Arayüzler**: Trait tanımlarını da içerir (örn. `can_bridge.py`, `is_power.py`).

  ## Bağımlılar (Çağrı Sahaları)

  - **Kullanıcı Kodu**: atopile projeleri `faebryk.library._F` kütüphanesinden (takma ad olarak `F`) yoğun bir şekilde import eder.
  - **Compiler**: Derleyici `ato` yerleşiklerini bu sınıflara eşler.

  ## Nasıl Çalışılır / Geliştirme / Test

  ### Temel Kavramlar
  - **Traits vs Bileşenler**: Davranış için Traits kullanın (`can_bridge` gibi *yapabilir* şeyler) ve fiziksel şeyler için Bileşenleri kullanın (`Resistor` gibi *nedir* şeyler).
  - **Export modeli**: `_F.py` oluşturulmuş bir "barrel" modülüdür; içini aktarmak kasıtlı olarak uygundur ancak ağır olabilir.

  ### Geliştirme Akışı
  1.  **Yeni Bileşen**: `src/faebryk/library/` dizininde yeni bir `MyComponent.py` dosyası oluşturun. `Node` (veya daha spesifik bir taban) sınıfından devralın.
  2.  **Adlandırma Kuralı**: Sınıf adları dosya temel adıyla eşleşmelidir (genellikle).
  3.  **`_F.py` Yeniden Oluşturun**: `python tools/library/gen_F.py` çalıştırın ve güncellenmiş `src/faebryk/library/_F.py` commit edin.

  ### Test
  - Kütüphane testleri `test/library/` altında yaşar (`test/library/nodes/` dahil).
  - Yeni modüller için iyi bir smoke test:
    - `ato dev test --llm test/library/test_instance_library_modules.py -q`

  ## En İyi Uygulamalar
  - **Atomik Parçalar**: Yaprak bileşenleri (özel olarak doğrulanmış parça numaraları) `is_atomic_part` trait ile işaretleyin.
  - **Parametreler**: `resistance`, `capacitance` gibi fiziksel özellikleri tanımlamak için `F.Parameters` kullanın.
  - **Dokümantasyon**: Portlarını ve parametrelerini açıklayan bileşenlere docstring ekleyin.
---

# Library Module

The `library` module (located in `src/faebryk/library/`) contains the collection of reusable components, traits, and interfaces that form the "standard library" of the hardware design language.

## Quick Start

```python
import faebryk.core.faebrykpy as fbrk
import faebryk.core.graph as graph
import faebryk.library._F as F

g = graph.GraphView.create()
tg = fbrk.TypeGraph.create(g=g)

resistor = F.Resistor.bind_typegraph(tg=tg).create_instance(g=g)
```

## Relevant Files

- **Facade (auto-generated)**: `src/faebryk/library/_F.py`
  - Eagerly imports and re-exports library modules/types for the `import faebryk.library._F as F` pattern.
  - This file is generated; do not hand-edit it.
- **Generator**: `tools/library/gen_F.py`
  - Scans `src/faebryk/library/*.py`, detects whether the file contains a same-named class, and writes `_F.py`.
  - Orders exports via a topological sort of `F.<Name>` references to avoid import-order cycles.
- **Components**: `src/faebryk/library/` contains specific component definitions (e.g. `Resistor.py`, `Capacitor.py`, `LED.py`).
- **Traits/Interfaces**: Also contains trait definitions (e.g. `can_bridge.py`, `is_power.py`).

## Dependants (Call Sites)

- **User Code**: atopile projects heavily import from `faebryk.library._F` (aliased as `F`).
- **Compiler**: The compiler maps `ato` built-ins to these classes.

## How to Work With / Develop / Test

### Core Concepts
- **Traits vs Components**: Use Traits for behavior (what it *can do* like `can_bridge`) and Components for physical things (what it *is* like `Resistor`).
- **Export model**: `_F.py` is a generated “barrel” module; importing it is intentionally convenient but can be heavyweight.

### Development Workflow
1.  **New Component**: Create a new file `MyComponent.py` in `src/faebryk/library/`. Inherit from `Node` (or a more specific base).
2.  **Naming Convention**: Class names should match the file basename (usually).
3.  **Regenerate `_F.py`**: run `python tools/library/gen_F.py` and commit the updated `src/faebryk/library/_F.py`.

### Testing
- Library tests live under `test/library/` (including `test/library/nodes/`).
- A good smoke test for new modules is:
  - `ato dev test --llm test/library/test_instance_library_modules.py -q`

## Best Practices
- **Atomic Parts**: Mark leaf components (specifically verified part numbers) with the `is_atomic_part` trait.
- **Parameters**: Use `F.Parameters` to define physical properties like `resistance`, `capacitance`, etc.
- **Documentation**: Add docstrings to components explaining their ports and parameters.
