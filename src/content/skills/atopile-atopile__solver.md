---
name: "solver"
description_en: "How the Faebryk parameter solver works (Sets/Literals, Parameters, Expressions), the core invariants enforced during mutation, and practical workflows for debugging and extending the solver. Use when implementing or modifying constraint solving, parameter bounds, or debugging expression simplification."
category: "Development"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/solver/SKILL.md"
path: ".claude/skills/solver/SKILL.md"
is_collection: false
body_length: 8923
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Solver Modülü

  Solver, atopile'nin **parametre alt sisteminin** kalbidir: **Parametreler**, **Literaller (Kümeler)** ve **İfadelerden** oluşturulan kısıt sistemlerini sembolik olarak basitleştirir ve kontrol eder.

  Solver'ın iç yapısını değiştiriyorsanız, önce bunları okuyun:

  - `src/faebryk/core/solver/README.md` (konseptler, küme korelasyonu, sadece-append grafleri, canonicalization)
  - `src/faebryk/core/solver/symbolic/invariants.py` (ifade ekleme sırasında uygulanan *gerçek* değişmezler)

  ## Hızlı Başlangıç

  ```python
  import faebryk.core.node as fabll
  import faebryk.library._F as F
  from faebryk.core.solver.defaultsolver import DefaultSolver
  from faebryk.libs.test.boundexpressions import BoundExpressions

  E = BoundExpressions()

  class _App(fabll.Node):
      x = F.Parameters.NumericParameter.MakeChild(unit=E.U.dl)

  app = _App.bind_typegraph(tg=E.tg).create_instance(g=E.g)
  x = app.x.get().can_be_operand.get()
  E.is_subset(x, E.lit_op_range(((9, E.U.dl), (11, E.U.dl))), assert_=True)

  solver = DefaultSolver()
  res = solver.simplify(g=E.g, tg=E.tg, terminal=True).data.mutation_map
  lit = res.try_extract_superset(app.x.get().is_parameter_operatable.get(), domain_default=True)
  assert lit is not None
  ```

  ## İlgili Dosyalar

  - Solver runtime + orkestrasyonu:
    - `src/faebryk/core/solver/defaultsolver.py` (`DefaultSolver`, iterasyon döngüsü, terminal vs non-terminal)
    - `src/faebryk/core/solver/solver.py` (solver protokolü + yardımcı API'ler)
  - Mutasyon mekanizması ("graflerin sadece-append olması" burada işlenir):
    - `src/faebryk/core/solver/mutator.py` (`Mutator`, `Transformations`, `MutationStage`, `MutationMap`, tracebacks)
  - Sembolik katman (kanonik formlar + değişmezler):
    - `src/faebryk/core/solver/symbolic/invariants.py` (`insert_expression(...)` değişmez pipeline'ı)
    - `src/faebryk/core/solver/symbolic/canonical.py` (canonicalization geçişleri)
    - `src/faebryk/core/solver/symbolic/*` (yapısal + ifade-yönlü algoritmalar)
  - Domain nesneleri (kullanıcıların grafiklerde gerçekten oluşturduğu şeyler):
    - `src/faebryk/library/Parameters.py` (ParameterOperatables, domainler, kompakt repr)
    - `src/faebryk/library/Expressions.py` (ifade düğüm türleri, yüklemler, assertables)
    - `src/faebryk/library/Literals.py` (Kümeler; sayısal/boolean/enum literalleri)
  - Test yardımcıları:
    - `src/faebryk/libs/test/boundexpressions.py` (testler için kısa graf + ifade oluşturma)

  ## Bağımlılar (Çağrı Alanları)

  - Kütüphane bileşenleri (`src/faebryk/library/`): parametreleri/kısıtlamaları tanımlar (ör. `R.resistance`)
  - Compiler + frontendler: `ato` kısıtlamalarını solver ifadelerine çevirir
  - Picker backend: solver basitleştirmesi + sınır çıkarma kullanarak aday parçaları budamak için

  ## Nasıl Çalışır / Geliştirme / Test

  ### Zihinsel Model (doğruluk için önemli olan kısımlar)

  ### 1) Literaller Kümelerdir (ve korelasyon inceliktir)
  - `100kOhm +/- 10%` gibi bir literal bir **Küme** (aralık), skaler değil.
  - **Tekil kümeler kendileriyle ilişkilidir**; diğer tüm kümeler **ilişkisiz** olarak değerlendirilir, hatta kendileriyle bile.
    - Bu yüzden `X - X` `X` bir aralık olduğunda mutlaka `{0}` değildir, ama `X` bir tekil küme olduğunda *mutlaka* `{0}` olur.

  ### 2) Semboller (Parametreler) korelasyon oluşturur
  - Bir `Parameter` matematiksel bir sembol (değişken) gibi davranır, Python değişkeni değil.
  - Semboller arasındaki korelasyon *asserted* kısıtlamalar aracılığıyla oluşturulur, en önemlileri:
    - `Is(A, B).assert_()` / `A.alias_is(B)` güçlü "bunlar aynı" korelasyonu oluşturur.
    - `IsSubset(A, X).assert_()` / `A.constrain_subset(X)` `A`'yı `X` içinde olacak şekilde kısıtlar.
    - `IsSubset(X, A).assert_()` / `A.constrain_superset(X)` `A`'yı en azından `X` kabul edecek şekilde kısıtlar.

  ### 3) İfadeler graf nesneleridir (sadece Python ağaçları değil)
  İfadeler, operand düğümlerine işaret eden Faebryk grafındaki düğümlerdir. Bu önemlidir çünkü…

  ### 4) Alttaki grafleri sadece-append'dir
  Solver bir ifadeyi yerinde "düzenleyemez". Bunun yerine:
  - dönüştürülmüş/kopyalanmış düğümler içeren yeni bir graf oluşturur,
  - eski düğümleri → yeni düğümlerin eşlemesini kaydeder (`MutationMap`),
  - eski grafı değişmez bırakır.

  ### Geliştirme İş Akışı

  1) Minimal grafta yeniden üretin (testler + `BoundExpressions` tercih edin).
  2) `DefaultSolver().simplify(...)` çalıştırın ve ortaya çıkan `MutationMap`'i inceleyin.
  3) Yeniden yazma mantığını değiştiriyorsanız, `src/faebryk/core/solver/symbolic/invariants.py::insert_expression` içindeki değişmez pipeline'ını anladığınızdan ve koruduğunuzdan emin olun.
  4) `src/faebryk/core/solver/symbolic/*` içinde algoritmalar ekleyin/ayarlayın (çoğu mantık orada yaşar, `mutator.py` içinde değil).

  ### Test
  - Solver testleri `test/core/solver/` içinde yaşar:
    - `test/core/solver/test_solver.py`
    - `test/core/solver/test_literal_folding.py`
    - `test/core/solver/test_solver_util.py`

  Tekrar ederken sıkı bir döngü çalıştırın:

  - `ato dev test --llm test/core/solver -k invariant -q`
  - `ato dev test --llm test/core/solver/test_solver.py::test_simplify -q`

  ## En İyi Uygulamalar

  ### Açık `simplify(...)` argümanlarını tercih edin
  `DefaultSolver.simplify` `(tg, g)` veya `(g, tg)` kabul eden bir uyumluluk katmanına sahiptir. Yeni kodda adlandırılmış argümanları tercih edin:

  ```python
  res = DefaultSolver().simplify(g=g, tg=tg, terminal=True)
  mutation_map = res.data.mutation_map
  ```

  ### Ad-hoc yeniden yazma yerine `Mutator`/`insert_expression` pipeline'ını kullanın
  Bir ifadeyi "oluşturduğunuzda" veya "yeniden yazdığınızda", gerçekten solver'dan geçici grafa bir şey eklemesini istiyorsunuz
  değişmezleri uphold ederken. Bunun gerçekleştiği kanonik yer:

  - `src/faebryk/core/solver/symbolic/invariants.py::insert_expression`

  Bunu bypass ederseniz, neredeyse kesinlikle bir değişmezi ihlal edeceksiniz ve şunu alacaksınız:
  - tekli/uyumlu ifadeler,
  - bir operand üzerinde birden fazla uyumsuz sınır,
  - operand olarak kullanılan yüklemler,
  - kaçırılan literal folding, veya
  - gerçek kök nedenin bulunmadığı çelişkiler.

  ## Temel Değişmezler (kaynak gerçeği: `insert_expression`)

  Değişmez pipeline'ı sıra-hassastır. Yüksek seviyede uyguladığı şey (parafraze):

  - Yüklem operandı yok: `Op(P!, ...)` mümkün olduğunca boolean literalleri kullanmak üzere yeniden yazılır
  - Yüklem literal kuralları: `P{S|True} -> P!`; `P!{S/P|False} -> Contradiction`; `P!{S|True} -> P!`
  - Literal eşitsizlik yok: literalleri içeren eşitsizlikler subset kısıtlamalarına yeniden yazılır
  - Operand olarak tekil superset yok: `f(A{S|{x}}, ...) -> f(x, ...)`
  - Uyum yok: uyumlu ifadeler çoğaltılmıştır (ilişkisiz uyum için isteğe bağlı kurallarla)
  - Minimal kapsama: daha güçlü kısıtlamalar daha zayıf olanları kapsar; fazlalık olanlar ilgisiz olur
  - Operand başına tek "birleştirilmiş" superset/subset (ör. kesiştirilmiş superset'ler)
  - Boş superset/subset yok: boş-küme kısıtlamaları çelişkilerdir
  - Saf literal ifadeleri literallere fold edin (ve subset/superset olarak yeniden ifade edin)
  - Belirli literal subset kısıtlamalarını sonlandırın
  - Kanonik form: ifadeler kanonik operatörlere oluşturulur/normalize edilir

  Yeni bir algoritma eklerken, doğru kalmak için en kolay yol yeni bir `ExpressionBuilder` oluşturmak
  ve `insert_expression`'ın zor işi yapmasına izin vermektir.

  ## İç Yapılar & Runtime Davranışı

  ### Örnek Oluşturma & Bağımlılıklar
  - **`DefaultSolver()` durum tutar**: `terminal=False` ile çağrıldığında, artımlı çözme için yeniden kullanılabilir iç durumu tutabilir.
  - **Terminal vs non-terminal**:
    - `terminal=True` (varsayılan) daha güçlüdür ama artımlı durum olarak yeniden kullanılması amaçlanmamıştır.
    - `terminal=False` sadece non-terminal algoritmaları çalıştırır ve sonraki çağrılar için `reusable_state` depolar.
  - **Graf kapsamı**: `simplify(..., relevant=[...])` "tüm dünyayı çözme"yi kaçınmak için amaçlanan kancadır.

  ### Veri Yapıları
  - `MutationStage`: bir algoritma uygulaması giriş graf → çıkış graf, `Transformations` nesnesiyle.
  - `MutationMap`: aşamaların bir zinciri; şunu yapmanızı sağlar:
    - eski → yeni operableları eşleyin (`map_forward`)
    - yeni → eski kaynakları eşleyin (`map_backward`)
    - mevcut sınırları literaller olarak çıkarın (`try_extract_superset`; subset çıkarma tipik olarak eşlenmiş operable'ın `try_extract_subset()` aracılığıyla yapılır)
    - "neden bu değişti?" için tracebacks oluşturun (bkz. `mutator.py` içinde `Traceback`)

  ### Hata Ayıklama & Logging
  Faydalı konfigürasyon bayrakları (bkz. `src/faebryk/core/solver/utils.py`):

  - `SLOG=1`: solver/mutator için hata ayıklama logging
  - `SPRINT_START=1`: her fazın başlangıcını log edin
  - `SVERBOSE_TABLE=1`: ayrıntılı mutasyon tabloları
  - `SSHOW_SS_IS=1`: graf yazdırma çıktılarında subset/is yüklemlerini içeyin
  - `SMAX_ITERATIONS=N`: kötü yeniden yazmaları yakalarken erken ise yükselt (sonsuz döngüyü bulunmasına yardımcı olur)

  Hatalarda, `Contradiction` / `ContradictionByLiteral` çıktısını arayın: mutasyon tracebacks'ini
  orijin ifadelerine/parametrelerine geri yazdırır, bu genellikle gerçek hataya en kısa yoldur.

  ### Performans
  - Yapabileceğiniz zaman `relevant=[...]` aracılığıyla kapsamı kısıtlamayı tercih edin.
  - çok sayıda neredeyse-tekli ifade oluşturmaktan kaçının; uyum + kapsama yardımcı olur, ama churn hala maliyetlidir.
  - Bir algoritma eklerseniz, bunu *idempotent* yapın (veya oluşturduğunuz şeyleri açıkça işaretleyin/sonlandırın) sonsuz iterasyonu kaçınmak için.
---

# Solver Module

The solver is the heart of atopile's **parameter subsystem**: it symbolically simplifies and checks constraint systems built from **Parameters**, **Literals (Sets)**, and **Expressions**.

If you are touching solver internals, read these first:

- `src/faebryk/core/solver/README.md` (concepts, set correlation, append-only graphs, canonicalization)
- `src/faebryk/core/solver/symbolic/invariants.py` (the *actual* invariants enforced during expression insertion)

## Quick Start

```python
import faebryk.core.node as fabll
import faebryk.library._F as F
from faebryk.core.solver.defaultsolver import DefaultSolver
from faebryk.libs.test.boundexpressions import BoundExpressions

E = BoundExpressions()

class _App(fabll.Node):
    x = F.Parameters.NumericParameter.MakeChild(unit=E.U.dl)

app = _App.bind_typegraph(tg=E.tg).create_instance(g=E.g)
x = app.x.get().can_be_operand.get()
E.is_subset(x, E.lit_op_range(((9, E.U.dl), (11, E.U.dl))), assert_=True)

solver = DefaultSolver()
res = solver.simplify(g=E.g, tg=E.tg, terminal=True).data.mutation_map
lit = res.try_extract_superset(app.x.get().is_parameter_operatable.get(), domain_default=True)
assert lit is not None
```

## Relevant Files

- Solver runtime + orchestration:
  - `src/faebryk/core/solver/defaultsolver.py` (`DefaultSolver`, iteration loop, terminal vs non-terminal)
  - `src/faebryk/core/solver/solver.py` (solver protocol + helper APIs)
- Mutation machinery (this is where “graphs are append-only” is handled):
  - `src/faebryk/core/solver/mutator.py` (`Mutator`, `Transformations`, `MutationStage`, `MutationMap`, tracebacks)
- Symbolic layer (canonical forms + invariants):
  - `src/faebryk/core/solver/symbolic/invariants.py` (`insert_expression(...)` invariant pipeline)
  - `src/faebryk/core/solver/symbolic/canonical.py` (canonicalization passes)
  - `src/faebryk/core/solver/symbolic/*` (structural + expression-wise algorithms)
- Domain objects (what users actually create in graphs):
  - `src/faebryk/library/Parameters.py` (ParameterOperatables, domains, compact repr)
  - `src/faebryk/library/Expressions.py` (expression node types, predicates, assertables)
  - `src/faebryk/library/Literals.py` (Sets; numeric/boolean/enum literals)
- Test helpers:
  - `src/faebryk/libs/test/boundexpressions.py` (concise graph + expression construction for tests)

## Dependants (Call Sites)

- Library components (`src/faebryk/library/`): define parameters/constraints (e.g. `R.resistance`)
- Compiler + frontends: translate `ato` constraints into solver expressions
- Picker backend: uses solver simplification + bounds extraction to prune candidate parts

## How to Work With / Develop / Test

### Mental Model (the parts that matter for correctness)

### 1) Literals are Sets (and correlation is subtle)
- A literal like `100kOhm +/- 10%` is a **Set** (a range), not a scalar.
- **Singleton sets are self-correlated**; all other sets are treated as **uncorrelated**, even with themselves.
  - This is why `X - X` is not necessarily `{0}` when `X` is a range, but *is* `{0}` when `X` is a singleton.

### 2) Symbols (Parameters) introduce correlation
- A `Parameter` behaves like a mathematical symbol (variable), not a Python variable.
- Correlation between symbols is created via *asserted* constraints, most notably:
  - `Is(A, B).assert_()` / `A.alias_is(B)` creates a strong “these are the same” correlation.
  - `IsSubset(A, X).assert_()` / `A.constrain_subset(X)` constrains `A` to be within `X`.
  - `IsSubset(X, A).assert_()` / `A.constrain_superset(X)` constrains `A` to accept at least `X`.

### 3) Expressions are graph objects (not just Python trees)
Expressions are nodes in the Faebryk graph that point at operand nodes. This matters because…

### 4) The underlying graphs are append-only
The solver cannot “edit” an expression in-place. Instead it:
- builds a new graph containing transformed/copied nodes,
- records a mapping from old nodes → new nodes (`MutationMap`),
- leaves the old graph untouched.

### Development Workflow

1) Reproduce in a minimal graph (prefer tests + `BoundExpressions`).
2) Run `DefaultSolver().simplify(...)` and inspect the resulting `MutationMap`.
3) If you’re changing rewrite logic, make sure you understand and preserve the invariant pipeline in
   `src/faebryk/core/solver/symbolic/invariants.py::insert_expression`.
4) Add/adjust algorithms in `src/faebryk/core/solver/symbolic/*` (most logic lives there, not in `mutator.py`).

### Testing
- Solver tests live in `test/core/solver/`:
  - `test/core/solver/test_solver.py`
  - `test/core/solver/test_literal_folding.py`
  - `test/core/solver/test_solver_util.py`

Run a tight loop while iterating:

- `ato dev test --llm test/core/solver -k invariant -q`
- `ato dev test --llm test/core/solver/test_solver.py::test_simplify -q`

## Best Practices

### Prefer explicit `simplify(...)` arguments
`DefaultSolver.simplify` has a compatibility layer that accepts `(tg, g)` or `(g, tg)`. In new code, prefer named args:

```python
res = DefaultSolver().simplify(g=g, tg=tg, terminal=True)
mutation_map = res.data.mutation_map
```

### Use the `Mutator`/`insert_expression` pipeline, not ad-hoc rewrites
When you “create” or “rewrite” an expression, you are really requesting that the solver insert something into the
transient graph while upholding invariants. The canonical place where this happens is:

- `src/faebryk/core/solver/symbolic/invariants.py::insert_expression`

If you bypass this, you will almost certainly violate an invariant and get:
- duplicate/congruent expressions,
- multiple incompatible bounds on an operand,
- predicates used as operands,
- missed literal folding, or
- contradictions that don’t point back to the real root cause.

## Core Invariants (source of truth: `insert_expression`)

The invariant pipeline is sequencing-sensitive. At a high level it enforces (paraphrased):

- No predicate operands: `Op(P!, ...)` is rewritten to use boolean literals where possible
- Predicate literal rules: `P{S|True} -> P!`; `P!{S/P|False} -> Contradiction`; `P!{S|True} -> P!`
- No literal inequalities: inequalities involving literals are rewritten into subset constraints
- No singleton supersets as operands: `f(A{S|{x}}, ...) -> f(x, ...)`
- No congruence: congruent expressions are deduplicated (with optional rules for uncorrelated congruence)
- Minimal subsumption: stronger constraints subsume weaker ones; redundant ones become irrelevant
- Single “merged” superset/subset per operand (e.g. intersected supersets)
- No empty supersets/subsets: empty-set constraints are contradictions
- Fold pure literal expressions into literals (and re-express as subset/superset where appropriate)
- Terminate certain literal subset constraints to stop churn
- Canonical form: expressions are created/normalized into canonical operators

When adding a new algorithm, the easiest way to stay correct is to construct a new `ExpressionBuilder`
and let `insert_expression` do the hard work.

## Internals & Runtime Behavior

### Instantiation & Dependencies
- **`DefaultSolver()` holds state**: when called with `terminal=False`, it can keep a reusable internal state for incremental solving.
- **Terminal vs non-terminal**:
  - `terminal=True` (default) is more powerful but not intended to be reused as incremental state.
  - `terminal=False` runs only non-terminal algorithms and stores `reusable_state` for subsequent calls.
- **Graph scoping**: `simplify(..., relevant=[...])` is the intended hook to avoid “solve the entire world”.

### Data Structures
- `MutationStage`: one algorithm application over an input graph → output graph, with a `Transformations` object.
- `MutationMap`: a chain of stages; lets you:
  - map old → new operables (`map_forward`)
  - map new → old sources (`map_backward`)
  - extract current bounds as literals (`try_extract_superset`; subset extraction is typically via the mapped operable’s `try_extract_subset()`)
  - generate tracebacks for “why did this change?” (see `Traceback` in `mutator.py`)

### Debugging & Logging
Useful config flags (see `src/faebryk/core/solver/utils.py`):

- `SLOG=1`: debug logging for solver/mutator
- `SPRINT_START=1`: log start of each phase
- `SVERBOSE_TABLE=1`: verbose mutation tables
- `SSHOW_SS_IS=1`: include subset/is predicates in graph printouts
- `SMAX_ITERATIONS=N`: raise early if stuck looping (helps catch bad rewrites)

In failures, look for `Contradiction` / `ContradictionByLiteral` output: it prints mutation tracebacks back to
origin expressions/parameters, which is usually the shortest path to the actual bug.

### Performance
- Prefer restricting scope via `relevant=[...]` when you can.
- Avoid creating huge numbers of near-duplicate expressions; congruence + subsumption help, but churn still costs.
- If you add an algorithm, make it *idempotent* (or explicitly mark/terminate what you produce) to avoid infinite iteration.
