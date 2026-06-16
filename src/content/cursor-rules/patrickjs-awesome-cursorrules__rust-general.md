---
name: "rust-general"
clean_name: "Rust General"
description: "General Rust rules for safe, idiomatic application and library development"
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/rust-general.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/rust-general.mdc"
body_length: 2218
file_extension: ".mdc"
body_tr: |-
  # Rust Genel Kuralları

  ## Proje Yapısı

  - Crate'leri odaklanmış tutun ve modülleri domain sorumluluk alanına göre adlandırın.
  - Yeniden kullanılabilir kütüphane kodunu `src/lib.rs` içine ve binary giriş noktalarını `src/main.rs` veya `src/bin/` içine koyun.
  - Public API'ları küçük ve belgelenmiş tutun.
  - Feature flag'lerini bilinçli şekilde kullanın ve varsayılan olmayan özellikleri belgelemek.
  - Uygulamalar için `Cargo.lock` commit'leyin; kütüphaneler için proje kuralına uyun.

  ## Ownership ve Tipler

  - Ownership gerekli olmadığında clonlamaya tercih ederek borrowing kullanın.
  - Çağrılan taraf veri depolaması gerektiğinde API sınırlarında owned değerleri kullanın.
  - Domain state'lerini string veya boolean yerine enum ve struct'larla modellendirin.
  - Yokluk için `Option<T>` ve başarısız olabilir işlemler için `Result<T, E>` kullanın.
  - Testler, örnek kodlar ve process-startup invariant'ları dışında `unwrap()` ve `expect()` kullanmaktan kaçının.

  ## Hata İşleme

  - Kütüphaneler için `thiserror` veya proje standardı custom error'lar kullanın.
  - Uygulamalar için `anyhow` veya proje standardı context-rich error'lar kullanın.
  - IO, network, database veya parsing sınırlarını geçerken context ekleyin.
  - Error'ları `_` ile açıkça belgelenmediği sürece atıp sakmayın.

  ## Concurrency ve Async

  - `Send` ve `Sync` sınırlarını bilinçli şekilde kullanın.
  - Async iş için message passing veya owned task input'larını tercih edin.
  - `.await` üzerinde blocking lock tutmayın.
  - Async uygulamalarda blocking CPU veya IO için `tokio::task::spawn_blocking` veya eşdeğerini kullanın.
  - Cancellation'ı detached task'lar içinde saklama yerine future'lar aracılığıyla propagate edin.

  ## Test ve Kalite

  - Teslim etmeden önce `cargo fmt` ve `cargo clippy` çalıştırın.
  - Saf logic için unit test'ler ve public davranış için integration test'ler ekleyin.
  - Parser'lar, serializer'lar ve state machine'ler için faydalı olduğunda property test'lerini kullanın.
  - Benchmark'ları yalnızca gerçek bir performance sorusu tanımladıktan sonra kullanın.

  ## Yaygın Hatalar

  - Borrow checker ile savaşmak için gereksiz `Arc<Mutex<_>>` eklemeyin.
  - Yanlışlıkla public API'lar aracılığıyla iç modül yapısını exposed etmeyin.
  - Ölçme yapmadan hot loop'lar içinde allocate etmeyin.
  - Invariant belgelenmiş ve test edilmediği sürece unsafe kod kullanmayın.
---


# Rust General Rules

## Project Structure

- Keep crates focused and name modules by domain responsibility.
- Put reusable library code in `src/lib.rs` and binary entry points in `src/main.rs` or `src/bin/`.
- Keep public APIs small and documented.
- Use feature flags deliberately and document non-default features.
- Commit `Cargo.lock` for applications; follow the project convention for libraries.

## Ownership and Types

- Prefer borrowing over cloning when ownership is not needed.
- Use owned values at API boundaries when the callee must store data.
- Model domain states with enums and structs instead of strings or booleans.
- Use `Option<T>` for absence and `Result<T, E>` for fallible operations.
- Avoid `unwrap()` and `expect()` outside tests, examples, and process-startup invariants.

## Error Handling

- Use `thiserror` or project-standard custom errors for libraries.
- Use `anyhow` or project-standard context-rich errors for applications.
- Add context when crossing IO, network, database, or parsing boundaries.
- Do not discard errors with `_` unless explicitly documented.

## Concurrency and Async

- Use `Send` and `Sync` boundaries intentionally.
- Prefer message passing or owned task inputs for async work.
- Do not hold blocking locks across `.await`.
- Use `tokio::task::spawn_blocking` or equivalent for blocking CPU or IO in async applications.
- Propagate cancellation through futures rather than hiding it in detached tasks.

## Testing and Quality

- Run `cargo fmt` and `cargo clippy` before delivery.
- Add unit tests for pure logic and integration tests for public behavior.
- Use property tests for parsers, serializers, and state machines when useful.
- Use benchmarks only after identifying a real performance question.

## Common Mistakes

- Do not fight the borrow checker by adding unnecessary `Arc<Mutex<_>>`.
- Do not expose internal module structure through public APIs by accident.
- Do not allocate in hot loops without measuring.
- Do not use unsafe code unless the invariant is documented and tested.
