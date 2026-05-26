---
name: "rust-general"
clean_name: "Rust General"
description: "General Rust rules for safe, idiomatic application and library development"
description_tr: "Rust uygulamaları ve kütüphaneleri güvenli ve idiomatik şekilde geliştirmek için genel kurallar"
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
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
  - Feature flag'lerini bilinçli kullanın ve varsayılan olmayan özellikleri belgeyin.
  - Uygulamalar için `Cargo.lock` commit edin; kütüphaneler için proje kuralına uyun.

  ## Ownership ve Türler

  - Ownership gerekli olmadığında cloning yerine borrowing tercih edin.
  - Çağrılan tarafın veri depolaması gerektiğinde API sınırlarında owned value'lar kullanın.
  - Domain durumlarını string veya boolean yerine enum ve struct'larla modelleyin.
  - Yokluk için `Option<T>` ve başarısız olabilecek işlemler için `Result<T, E>` kullanın.
  - Test'ler, örnek kodlar ve process-startup değişmezleri dışında `unwrap()` ve `expect()` kullanmaktan kaçının.

  ## Hata Yönetimi

  - Kütüphaneler için `thiserror` veya proje standardı custom error'lar kullanın.
  - Uygulamalar için `anyhow` veya proje standardı bağlamsal zengin error'lar kullanın.
  - IO, network, database veya parsing sınırlarını geçerken context ekleyin.
  - Açıkça belgelenmiş olmadığı sürece `_` ile hataları görmezden gelmeyin.

  ## Concurrency ve Async

  - `Send` ve `Sync` sınırlarını bilinçli kullanın.
  - Async işler için message passing veya owned task input'larını tercih edin.
  - `.await` boyunca blocking lock'ları tutmayın.
  - Async uygulamalarda blocking CPU veya IO için `tokio::task::spawn_blocking` veya eşdeğerini kullanın.
  - İptal işlemini detached task'lerde gizlemek yerine future'lar aracılığıyla yayın.

  ## Test ve Kalite

  - Teslimatından önce `cargo fmt` ve `cargo clippy` çalıştırın.
  - Saf mantık için unit test'ler ve public davranış için integration test'ler ekleyin.
  - Parser'lar, serializer'lar ve state machine'ler için faydalı olduğunda property test'leri kullanın.
  - Benchmark'ları ancak gerçek bir performans sorusu belirledikten sonra kullanın.

  ## Yaygın Hatalar

  - Gereksiz `Arc<Mutex<_>>` ekleyerek borrow checker ile savaşmayın.
  - Internal modül yapısını yanlışlıkla public API'ler aracılığıyla açığa çıkarmayın.
  - Ölçmeden hot loop'larda allocation yapmayın.
  - Değişmez belgelenmiş ve test edilmedikçe unsafe kod kullanmayın.
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
