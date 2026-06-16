---
name: "domain-layer"
description_en: "Instructions for electronics-specific logic and build processes: netlists, PCBs, build steps, and exporters. Use when implementing or modifying build steps, exporters, PCB generation, or BOM/netlist output."
category: "Design"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/domain-layer/SKILL.md"
path: ".claude/skills/domain-layer/SKILL.md"
is_collection: false
body_length: 2911
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Domain Layer Modülü

  `domain layer` (öncelikle `src/atopile/build_steps.py` ve `src/faebryk/exporters/`) elektronik donanım mühendisliğine özgü mantık ve işlemleri kapsar. Buna derlenmiş bir grafiği üretim yapıtlarına (Gerber, BOM, Pick & Place) dönüştüren build pipeline'ı dahildir.

  ## Hızlı Başlangıç

  Bir proje dizininden (burada `ato.yaml` bulunur) standart build pipeline'ını çalıştırın:

  ```bash
  ato build
  ```

  ## İlgili Dosyalar

  - **Build Orchestration**: `src/atopile/build_steps.py`
      - `Muster` sınıfını tanımlar (DAG tabanlı bir görev çalıştırıcı).
      - Standart build hedeflerini kaydeder: `generate_bom`, `generate_manufacturing_data`, `update_pcb`, vb.
  - **Build entry / app init**: `src/atopile/build.py` (`.ato` veya `.py` dosyasından app grafiği oluşturur, unit inference'ı çalıştırır)
  - **Exporters**: `src/faebryk/exporters/`
      - **pcb/**: KiCad PCB üretimi ve layout senkronizasyonu (`layout_sync.py`).
      - **bom/**: Bill of Materials üretimi (`jlcpcb.py`, vb.).
      - **netlist/**: Netlist formatlaması.
      - **documentation/**: Datasheetler, şemalar.
  - **Layout sync girdileri**:
    - `src/atopile/layout.py` (`.layouts.json` modülü→layout eşlemesi üretir)
    - `src/atopile/kicad_plugin/README.md` (plugin iş akışı özeti)

  ## Bağımlılar (Çağrı Siteleri)

  - **CLI (`src/atopile/cli/build.py`)**: `ato build` komutu doğrudan `build_steps.muster`'ı çağırarak pipeline'ı yürütür.
  - **IDE/Extension**: Önizlemeler için belirli build adımlarını çağırabilir (örn. `generate_3d_render`).

  ## Nasıl Çalışılır / Geliştirilebilir / Test Edilir

  ### Temel Konseptler
  - **Muster**: Görev çalıştırıcısı. Hedefler bağımlılıkları bildirir (örn. `generate_bom`, `build_design`'a bağlıdır).
  - **Layout Sync**: Manuel PCB layout değişikliklerini korurken netlist/bileşenleri koddan güncellemek işlemidir (`update_pcb`).
  - **Artifacts**: Build işlemi tarafından üretilen dosyalar, build dizininde depolanır.

  ### Geliştirme İş Akışı
  1.  **Config Seçeneği Ekleme**: Yeni bir build adımının konfigürasyon gerektirmesi durumunda, `atopile.config`'e ekleyin (burada kapsanmamıştır, ancak ilgilidir).
  2.  **Yeni Exporters**: `src/faebryk/exporters/` içinde yeni bir modül oluşturun ve `build_steps.py`'de `@muster.register` kullanarak bir sarmalayıcı fonksiyon kaydettirin.

  ### Test Etme
  - **Integration Tests**: Bu katman tüm akışı düzenledığinden, `test/end_to_end/` veya `test/integration/` içindeki end-to-end veya integration testler aracılığıyla en iyi şekilde test edilir.
  - **Manuel Doğrulama**: Örnek bir proje üzerinde `ato build` çalıştırın ve üretilen yapıtları kontrol edin (Gerbers, BOM csv).
  - **Muster unit testleri**: `ato dev test --llm test/test_muster.py -q`

  ## En İyi Uygulamalar
  - **İdempotency**: Build adımları genel olarak idempotent olmalıdır.
  - **Virtual Targets**: Yalnızca diğer hedefleri gruplandıran hedefler için `virtual=True` kullanın (örn. `all` veya `default`).
  - **Layout Koruması**: Kullanıcının manuel PCB yönlendirmesinin veri kaybı riskini ortadan kaldırmak için `update_pcb` veya `layout_sync` mantığını değiştirirken çok dikkatli olun.
---

# Domain Layer Module

The `domain layer` (primarily `src/atopile/build_steps.py` and `src/faebryk/exporters/`) encompasses the logic and processes specific to electronic hardware engineering. This includes the build pipeline that transforms a compiled graph into manufacturing artifacts (Gerbers, BOMs, Pick & Place).

## Quick Start

Run the standard build pipeline from a project directory (where `ato.yaml` lives):

```bash
ato build
```

## Relevant Files

- **Build Orchestration**: `src/atopile/build_steps.py`
    - Defines the `Muster` class (a DAG-based task runner).
    - Registers standard build targets: `generate_bom`, `generate_manufacturing_data`, `update_pcb`, etc.
- **Build entry / app init**: `src/atopile/build.py` (constructs app graph from `.ato` or `.py`, runs unit inference)
- **Exporters**: `src/faebryk/exporters/`
    - **pcb/**: KiCad PCB generation and layout sync (`layout_sync.py`).
    - **bom/**: Bill of Materials generation (`jlcpcb.py`, etc.).
    - **netlist/**: Netlist formatting.
    - **documentation/**: Datasheets, diagrams.
- **Layout sync inputs**:
  - `src/atopile/layout.py` (generates `.layouts.json` module→layout mapping)
  - `src/atopile/kicad_plugin/README.md` (plugin workflow overview)

## Dependants (Call Sites)

- **CLI (`src/atopile/cli/build.py`)**: The `ato build` command directly invokes `build_steps.muster` to execute the pipeline.
- **IDE/Extension**: May invoke specific build steps for previews (e.g., `generate_3d_render`).

## How to Work With / Develop / Test

### Core Concepts
- **Muster**: The task runner. Targets declare dependencies (e.g. `generate_bom` depends on `build_design`).
- **Layout Sync**: The process of preserving manual PCB layout changes while updating the netlist/components from the code (`update_pcb`).
- **Artifacts**: Files produced by the build process, stored in the build directory.

### Development Workflow
1.  **Adding a Config Option**: If a new build step needs configuration, add it to `atopile.config` (not covered here, but relevant).
2.  **New Exporters**: Create a new module in `src/faebryk/exporters/` and register a wrapper function in `build_steps.py` using `@muster.register`.

### Testing
- **Integration Tests**: Since this layer orchestrates the whole flow, it is best tested via end-to-end tests or integration tests in `test/end_to_end/` or `test/integration/`.
- **Manual Verification**: Run `ato build` on a sample project and inspect the generated artifacts (Gerbers, BOM csv).
- **Muster unit tests**: `ato dev test --llm test/test_muster.py -q`

## Best Practices
- **Idempotency**: Build steps should generally be idempotent.
- **Virtual Targets**: Use `virtual=True` for targets that just group other targets (e.g. `all` or `default`).
- **Layout Preservation**: Be extremely careful when modifying `update_pcb` or `layout_sync` logic to avoid dataloss of user's manual PCB routing.
