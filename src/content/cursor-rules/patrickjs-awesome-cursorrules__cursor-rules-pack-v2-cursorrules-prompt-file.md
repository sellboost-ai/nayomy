---
name: "cursor-rules-pack-v2-cursorrules-prompt-file"
clean_name: "Cursor Rules Pack V2"
description: "7 sample production-tested rules (dependency discipline, error handling, state management, webhook security, and more). See the pack README for full-pack details."
description_tr: "7 adet üretim ortamında test edilmiş kural (dependency disiplini, error handling, state management, webhook security ve daha fazlası). Tüm detaylar için pack README dosyasını kontrol edin."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/cursor-rules-pack-v2-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/cursor-rules-pack-v2-cursorrules-prompt-file.mdc"
body_length: 2646
file_extension: ".mdc"
body_tr: |-
  # Cursor Rules Pack v2 — Örnek Kurallar
  # Tam 50 kuraldan oluşan paketten 7 üretim testli kural
  # Tam paket: https://oliviacraftlat.gumroad.com/l/wyaeil

  ## Kural 1 — Bağımlılık Disiplini
  Yeni bir npm paketi önermeden önce: (1) ne yaptığını tek cümleyle açıkla, (2) aktif olarak bakımı yapılıp yapılmadığını kontrol et (son yayın < 6 ay), (3) bağımlılık olmadan 30 satırdan az kod ile uygulayıp uygulayamayacağımızı doğrula. Daha az sayıda, iyi bakımı yapılan paketleri tercih et. 20 satırdan az kod gerektiren görevler için asla bağımlılık ekleme.

  ## Kural 2 — Açık Hata Yönetimi
  Async işlemleri her zaman try/catch içine al. Hataları asla sessizce yutma. Result pattern kullanarak tipli hata nesneleri döndür ya da tipli hatalar fırlat. Hataları bağlam ile logla: `logger.error('[FunctionName] description', { error, context })`. UI bileşenlerinde her zaman kullanıcı tarafından görülen hata durumları sağla.

  ## Kural 3 — Yorum Politikası
  Önce kendini açıklayan kod yaz. Yorum ekle sadece: (1) açık olmayan iş mantığı — NE değil NEDEN'i açıkla, (2) geçici çözümler — geçici çözümün neden var olduğunu açıkla ve issue'ya bağlantı ver, (3) karmaşık algoritmalar — algoritma adını referans göster. Kodun açıkça ne yaptığını asla yorumla.

  ## Kural 4 — State Yönetim Hiyerarşisi
  Bu state hiyerarşisini kesin olarak takip et:
  - URL state → filtreler, sayfalandırma, arama (useSearchParams)
  - React state → sadece UI, geçici (useState)
  - Zustand → bileşenler arası app state
  - React Query → tüm server state
  Zustand'ı server verilerini cache'lemek için asla kullanma — bu React Query'nin işi. Redux'a hiçbir zaman başvurma.

  ## Kural 5 — Paralel Veri Getirme
  Bağımsız veri getirme işlemlerini tanımla ve paralelleştir. Bağımsız işlemler olduğunda sırayla await'le yapma — `Promise.all` kullan. Sırayla await'ler yapılırken, sırayı zorlayan bağımlılığı açıklayan bir yorum ekle.

  ## Kural 6 — Webhook Güvenliği
  Gelen webhooklar için: handler'ın ilk 3 satırında signature'ı doğrula — geçersizse hemen reddet. 5 saniye içinde HTTP 200 ile cevap ver — işleme işini bir arka plan işine ata. İşlenmeden önce raw webhook event'ini depola. Event ID'sini kullanarak idempotency'yi uygula.

  ## Kural 7 — Veritabanı Query Güvenliği
  Tam veritabanı kayıtlarını asla client'a döndürme — tam olarak hangi alanların gerekli olduğunu belirtmek için `select` kullan. Bu, şifre hash'lerini, reset token'larını, iç flag'leri ve diğer duyarlı alanları yanlışlıkla açığa çıkarmayı önler. 50'den fazla satır döndürebilecek sorgular için, her zaman sayfalandırma ekle (take/skip ya da cursor tabanlı).
---

# Cursor Rules Pack v2 — Sample Rules
# 7 production-tested rules from the full 50-rule pack
# Full pack: https://oliviacraftlat.gumroad.com/l/wyaeil

## Rule 1 — Dependency Discipline
Before suggesting a new npm package: (1) state what it does in one sentence, (2) check if it's actively maintained (last publish < 6 months), (3) confirm whether we could implement it in < 30 lines without the dependency. Prefer fewer, well-maintained packages. Never add a dependency for a task under 20 lines of code.

## Rule 2 — Explicit Error Handling
Always wrap async operations in try/catch. Never swallow errors silently. Return typed error objects using a Result pattern or throw typed errors. Log errors with context: logger.error('[FunctionName] description', { error, context }). Always provide user-facing error states in UI components.

## Rule 3 — Comments Policy
Write self-documenting code first. Add comments only for: (1) non-obvious business logic — explain WHY, not WHAT, (2) workarounds — explain why the workaround exists and link to the issue, (3) complex algorithms — reference the algorithm name. Never comment what the code clearly does.

## Rule 4 — State Management Hierarchy
Follow this state hierarchy strictly:
- URL state → filters, pagination, search (useSearchParams)
- React state → UI-only, ephemeral (useState)
- Zustand → cross-component app state
- React Query → all server state
Never use Zustand to cache server data — that's React Query's job. Never reach for Redux.

## Rule 5 — Parallel Data Fetching
Identify and parallelize independent data fetches. Never await sequentially when operations are independent — use Promise.all. When making a sequential await, add a comment explaining the dependency that forces the sequence.

## Rule 6 — Webhook Security
For incoming webhooks: verify the signature in the first 3 lines of the handler — reject immediately if invalid. Respond with HTTP 200 within 5 seconds — offload processing to a background job. Store the raw webhook event before processing. Implement idempotency using the event ID.

## Rule 7 — Database Query Safety
Never return full database records to the client — always use select to specify exactly which fields are needed. This prevents accidentally exposing password hashes, reset tokens, internal flags, and other sensitive fields. For queries that could return more than 50 rows, always add pagination (take/skip or cursor-based).
