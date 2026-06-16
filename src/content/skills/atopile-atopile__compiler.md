---
name: "compiler"
description_en: "How the atopile compiler builds and links TypeGraphs from `.ato` (ANTLR front-end → AST → TypeGraph → Linker → DeferredExecutor), plus the key invariants and test entrypoints. Use when modifying the compiler pipeline, grammar, AST visitors, or type resolution."
category: "Design"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/compiler/SKILL.md"
path: ".claude/skills/compiler/SKILL.md"
is_collection: false
body_length: 3782
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Derleyici Modülü

  Derleyici, `.ato` kaynaklarından **bağlantılı, bağımsız bir TypeGraph** oluşturur. Export/üretim yapıtları daha sonra derleme adımları/exporterler tarafından işlenir; derleyicinin görevi ayrıştırma + typegraph oluşturma + bağlantılamadır.

  Şunlarla başlayın:
  - `src/atopile/compiler/README.md` (aşama özeti + örnek kullanım)
  - `src/atopile/compiler/parser/README.md` (ANTLR çıktısını yeniden oluşturma)

  ## Hızlı Başlangıç

  Tek bir `.ato` dosyasını bağlantılı bir TypeGraph'a derleyin (ve entrypoint'ini örnekleyin):

  ```python
  import faebryk.core.faebrykpy as fbrk
  import faebryk.core.graph as graph
  import faebryk.core.node as fabll
  from atopile.compiler.build import Linker, StdlibRegistry, build_file
  from atopile.compiler.deferred_executor import DeferredExecutor
  from atopile.config import config

  g = graph.GraphView.create()
  tg = fbrk.TypeGraph.create(g=g)
  stdlib = StdlibRegistry(tg)
  linker = Linker(config, stdlib, tg)

  result = build_file(g=g, tg=tg, import_path="app.ato", path="path/to/app.ato")
  linker.link_imports(g=g, state=result.state)
  DeferredExecutor(g=g, tg=tg, state=result.state, visitor=result.visitor).execute()

  app_type = result.state.type_roots["ENTRYPOINT"]
  app_root = tg.instantiate_node(type_node=app_type, attributes={})
  app = fabll.Node.bind_instance(app_root)
  ```

  ## İlgili Dosyalar

  - Core pipeline:
    - `src/atopile/compiler/build.py` (`build_file`, `build_source`, `Linker`, `StdlibRegistry`, aşama yardımcıları)
    - `src/atopile/compiler/parse.py` (ANTLR parse + error listener → `UserSyntaxError`)
    - `src/atopile/compiler/antlr_visitor.py` (ANTLR CST → kaynak bilgili internal AST graph)
    - `src/atopile/compiler/ast_visitor.py` (AST → TypeGraph "ön" oluşturma)
    - `src/atopile/compiler/gentypegraph.py` (typegraph oluşturma araçları + import refs)
    - `src/atopile/compiler/deferred_executor.py` (terminal aşama: inheritance/retypes/for-loops)
  - Parser frontend:
    - `src/atopile/compiler/parser/` (`AtoLexer.g4`, `AtoParser.g4`, oluşturulan Python)

  ## Bağımlılar (Çağrı Siteleri)

  - **CLI (`src/atopile/cli/build.py`)**: Projeyi derlemek için derleyiciyi çağırır.
  - **LSP (`src/atopile/lsp/lsp_server.py`)**: Doküman başına graphlar oluşturur ve tamamlama/hover için son başarılı sonucu tutar.

  ## Nasıl Çalışılır / Geliştiriş / Test

  ### Temel Kavramlar
  - **ANTLR front-end**: `.ato` dosyasını ANTLR parse tree'sine ayrıştırır; syntax hataları `UserSyntaxError`'e dönüştürülür.
  - **AST graph**: `ANTLRVisitor` ANTLR çıktısını internal AST node'larına dönüştürür (kaynak bilgili FabLL node'ları).
  - **TypeGraph derleme**: AST visitor bir ön TypeGraph yayınlar.
  - **Bağlantılama**: `Linker` importları çözer, inheritance sıralamasını yürütür, retypeleri uygular ve bağımsız bir derleme birimini hazırlar.
  - **Deferred execution (terminal)**: `DeferredExecutor.execute()` çözülmüş türler gerektiren işlemleri çalıştırır (inheritance, retypes, for-loops).

  ### Geliştirme İş Akışı
  1) Gramer değişiklikleri:
     - `src/atopile/compiler/parser/AtoLexer.g4` / `AtoParser.g4` düzenleyin
     - yeniden oluşturun (bkz. `src/atopile/compiler/parser/README.md`)
  2) Dil özellikleri:
     - CST → AST: `src/atopile/compiler/antlr_visitor.py`
     - AST → TypeGraph: `src/atopile/compiler/ast_visitor.py` / `gentypegraph.py`
  3) Bağlantılama/terminal davranışı:
     - `src/atopile/compiler/build.py` / `src/atopile/compiler/deferred_executor.py`

  ### Test
  - Derleyici testleri: `ato dev test --llm test/compiler -q`
  - Linker davranışı: `ato dev test --llm test/compiler/test_linker.py -q`
  - Uçtan uca smoke: `ato dev test --llm test/test_end_to_end.py -q`

  ## En İyi Uygulamalar
  - Hataları kaynağa bağlı tutun: mümkün olduğunda AST kaynak bilgisi ile `DslRichException`/`UserException` yükseltin.
  - Graph yaşam sürelerini izleyin: çoğu entrypoint açıkça `(g, tg)` kabul eder; uzun süren işlemlerde `GraphView`'i yok edin (LSP bunu yapar).
---

# Compiler Module

The compiler builds a **linked, self-contained TypeGraph** from `.ato` sources. Export/manufacturing artifacts are handled later by build steps/exporters; the compiler’s job is parsing + typegraph construction + linking.

Start with:
- `src/atopile/compiler/README.md` (stage overview + example usage)
- `src/atopile/compiler/parser/README.md` (how to regenerate ANTLR output)

## Quick Start

Build a single `.ato` file into a linked TypeGraph (and instantiate its entrypoint):

```python
import faebryk.core.faebrykpy as fbrk
import faebryk.core.graph as graph
import faebryk.core.node as fabll
from atopile.compiler.build import Linker, StdlibRegistry, build_file
from atopile.compiler.deferred_executor import DeferredExecutor
from atopile.config import config

g = graph.GraphView.create()
tg = fbrk.TypeGraph.create(g=g)
stdlib = StdlibRegistry(tg)
linker = Linker(config, stdlib, tg)

result = build_file(g=g, tg=tg, import_path="app.ato", path="path/to/app.ato")
linker.link_imports(g=g, state=result.state)
DeferredExecutor(g=g, tg=tg, state=result.state, visitor=result.visitor).execute()

app_type = result.state.type_roots["ENTRYPOINT"]
app_root = tg.instantiate_node(type_node=app_type, attributes={})
app = fabll.Node.bind_instance(app_root)
```

## Relevant Files

- Core pipeline:
  - `src/atopile/compiler/build.py` (`build_file`, `build_source`, `Linker`, `StdlibRegistry`, stage helpers)
  - `src/atopile/compiler/parse.py` (ANTLR parse + error listener → `UserSyntaxError`)
  - `src/atopile/compiler/antlr_visitor.py` (ANTLR CST → internal AST graph with source info)
  - `src/atopile/compiler/ast_visitor.py` (AST → TypeGraph “preliminary” construction)
  - `src/atopile/compiler/gentypegraph.py` (typegraph generation utilities + import refs)
  - `src/atopile/compiler/deferred_executor.py` (terminal stage: inheritance/retypes/for-loops)
- Parser frontend:
  - `src/atopile/compiler/parser/` (`AtoLexer.g4`, `AtoParser.g4`, generated Python)

## Dependants (Call Sites)

- **CLI (`src/atopile/cli/build.py`)**: Calls the compiler to build the project.
- **LSP (`src/atopile/lsp/lsp_server.py`)**: Builds per-document graphs and keeps the last successful result for completions/hover.

## How to Work With / Develop / Test

### Core Concepts
- **ANTLR front-end**: parse `.ato` into an ANTLR parse tree; syntax errors are converted to `UserSyntaxError`.
- **AST graph**: `ANTLRVisitor` converts ANTLR output into internal AST nodes (FabLL nodes with source info).
- **TypeGraph build**: AST visitor emits a preliminary TypeGraph.
- **Linking**: `Linker` resolves imports, executes inheritance ordering, applies retypes, and prepares a self-contained compilation unit.
- **Deferred execution (terminal)**: `DeferredExecutor.execute()` runs operations that require resolved types (inheritance, retypes, for-loops).

### Development Workflow
1) Grammar changes:
   - edit `src/atopile/compiler/parser/AtoLexer.g4` / `AtoParser.g4`
   - regenerate (see `src/atopile/compiler/parser/README.md`)
2) Language features:
   - CST → AST: `src/atopile/compiler/antlr_visitor.py`
   - AST → TypeGraph: `src/atopile/compiler/ast_visitor.py` / `gentypegraph.py`
3) Linking/terminal behavior:
   - `src/atopile/compiler/build.py` / `src/atopile/compiler/deferred_executor.py`

### Testing
- Compiler tests: `ato dev test --llm test/compiler -q`
- Linker behavior: `ato dev test --llm test/compiler/test_linker.py -q`
- End-to-end smoke: `ato dev test --llm test/test_end_to_end.py -q`

## Best Practices
- Keep errors source-attached: raise `DslRichException`/`UserException` with AST source info when possible.
- Watch graph lifetimes: most entrypoints accept `(g, tg)` explicitly; ensure you destroy `GraphView` in long-running processes (LSP does this).
