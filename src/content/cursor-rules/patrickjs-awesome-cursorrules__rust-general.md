---
name: "rust-general"
clean_name: "Rust General"
description: "General Rust rules for safe, idiomatic application and library development"
description_tr: "Güvenli ve idiomatik Rust uygulaması ve kütüphane geliştirimi için genel kurallar"
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/rust-general.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/rust-general.mdc"
body_length: 2218
file_extension: ".mdc"
body_tr: |-
  # Rust Genel Kuralları

  ## Proje Yapısı

  - Crate'leri odaklanmış tutun ve modülleri alan sorumluluğuna göre adlandırın.
  - Yeniden kullanılabilir kütüphane kodunu `src/lib.rs` içine ve binary entry point'lerini `src/main.rs` veya `src/bin/` içine yerleştirin.
  - Public API'leri küçük ve belgelenmiş tutun.
  - Feature flag'lerini kasıtlı olarak kullanın ve varsayılan olmayan özellikleri belgeleyin.
  - Uygulamalar için `Cargo.lock` commit edin; kütüphaneler için proje konvansiyonunu takip edin.

  ## Ownership ve Types

  - Ownership gerekli olmadığında cloning yerine borrowing'i tercih edin.
  - Çağrılan fonksiyon veri depolaması gerektiğinde API sınırlarında sahip değerleri kullanın.
  - Domain state'lerini string'ler veya boolean'lar yerine enum'lar ve struct'larla modelleyin.
  - Yokluk için `Option<T>` ve hatalı operasyonlar için `Result<T, E>` kullanın.
  - Testler, örnekler ve process-startup invariant'ları dışında `unwrap()` ve `expect()` kullanmaktan kaçının.

  ## Error Handling

  - Kütüphaneler için `thiserror` veya proje-standart özel hatalar kullanın.
  - Uygulamalar için `anyhow` veya proje-standart bağlam-zengin hatalar kullanın.
  - IO, network, database veya parsing sınırlarını geçerken context ekleyin.
  - Açıkça belgelenmedikçe hataları `_` ile atmayın.

  ## Concurrency ve Async

  - `Send` ve `Sync` sınırlarını kasıtlı olarak kullanın.
  - Async çalışma için message passing veya sahip task input'larını tercih edin.
  - `.await` üzerinde blocking lock'ları tutmayın.
  - Async uygulamalarda blocking CPU veya IO için `tokio::task::spawn_blocking` veya eşdeğerini kullanın.
  - İptal işlemini ayırılmış task'lara gizlemek yerine future'lar aracılığıyla yayın.

  ## Testing ve Quality

  - Teslimat öncesinde `cargo fmt` ve `cargo clippy` çalıştırın.
  - Saf logic için unit test'ler ve public davranış için integration test'ler ekleyin.
  - Parser'lar, serializer'lar ve state machine'ler için faydalı olduğunda property test'lerini kullanın.
  - Gerçek bir performans sorusu belirledikten sonra benchmark'ları kullanın.

  ## Yaygın Hatalar

  - Gereksiz `Arc<Mutex<_>>` ekleyerek borrow checker ile savaşmayın.
  - Yanlışlıkla internal modül yapısını public API'ler aracılığıyla ortaya çıkarmayın.
  - Ölçüm yapmadan hot loop'larda allocate etmeyin.
  - Invariant belgelenmiş ve test edilmedikçe unsafe kodu kullanmayın.
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
