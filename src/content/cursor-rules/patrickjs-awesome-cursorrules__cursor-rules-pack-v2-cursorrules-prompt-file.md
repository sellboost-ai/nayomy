---
name: "cursor-rules-pack-v2-cursorrules-prompt-file"
clean_name: "Cursor Rules Pack V2"
description: "7 sample production-tested rules (dependency discipline, error handling, state management, webhook security, and more). See the pack README for full-pack details."
description_tr: "7 adet üretim ortamında test edilmiş kural (bağımlılık disiplini, hata yönetimi, state yönetimi, webhook güvenliği ve daha fazlası). Tüm detaylar için pack README dosyasını kontrol edin."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/cursor-rules-pack-v2-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/cursor-rules-pack-v2-cursorrules-prompt-file.mdc"
body_length: 2646
file_extension: ".mdc"
body_tr: |-
  # Cursor Rules Pack v2 — Örnek Kurallar
  # 7 üretim ortamında test edilmiş kural, tam 50 kuraldan oluşan paketten
  # Tam paket: https://oliviacraftlat.gumroad.com/l/wyaeil

  ## Kural 1 — Bağımlılık Disiplini
  Yeni bir npm paketi önerisinde bulunmadan önce: (1) ne yaptığını bir cümleyle açıklayın, (2) aktif olarak bakım görüp görmediğini kontrol edin (son yayın < 6 ay önce), (3) bunu 30 satırdan az kodla bağımlılık olmadan uygulayıp uygulayamayacağımızı doğrulayın. Daha az, iyi bakım görmüş paketleri tercih edin. 20 satırdan az kodla yapılabilecek bir görev için hiçbir zaman bağımlılık eklemeyin.

  ## Kural 2 — Açık Hata Yönetimi
  Her zaman async işlemleri try/catch ile sarın. Hataları sessizce yok saymayın. Result pattern kullanarak veya typed hatalar fırlatarak yazılı hata nesneleri döndürün. Hataları bağlamla logla: `logger.error('[FunctionName] description', { error, context })`. UI bileşenlerinde her zaman kullanıcıya yönelik hata durumlarını sağlayın.

  ## Kural 3 — Yorum Politikası
  Önce kendini açıklayan kod yazın. Yalnızca şu durumlarda yorum ekleyin: (1) açık olmayan business logic — NE değil, NEDEN açıklayın, (2) geçici çözümler — geçici çözümün neden var olduğunu açıklayın ve issue bağlantısı verin, (3) karmaşık algoritmalar — algoritma adını referans verin. Kodun açıkça yaptığını asla yorumlamayın.

  ## Kural 4 — State Yönetimi Hiyerarşisi
  Bu state hiyerarşisine kesinlikle uyun:
  - URL state → filtreler, pagination, arama (useSearchParams)
  - React state → yalnızca UI, geçici (useState)
  - Zustand → bileşenler arası app state
  - React Query → tüm server state
  Zustand'ı server verilerini önbelleğe almak için kullanmayın — bu React Query'nin işi. Redux'a başvurmayın.

  ## Kural 5 — Paralel Veri Getirme
  Bağımsız veri getirme işlemlerini tanımlayın ve paralelize edin. İşlemler bağımsız olduğunda sırayla await yapmayın — `Promise.all` kullanın. Sırayla await yapıyorken, sekansı zorlayan bağımlılığı açıklayan bir yorum ekleyin.

  ## Kural 6 — Webhook Güvenliği
  Gelen webhooklar için: imzayı handler'ın ilk 3 satırında doğrulayın — geçersizse hemen reddedin. HTTP 200 ile 5 saniye içinde yanıt verin — işlemeyi bir background job'a devrederek başlayın. İşlemeden önce raw webhook olayını saklayın. Olay kimliğini kullanarak idempotency uygulayın.

  ## Kural 7 — Veritabanı Sorgusu Güvenliği
  Hiçbir zaman tam veritabanı kayıtlarını istemciye döndürmeyin — ihtiyaç duyulan alanları tam olarak belirtmek için `select` kullanın. Bu, yanlışlıkla parola hash'lerini, sıfırlama tokenlarını, iç flagları ve diğer hassas alanları açığa çıkarmayı önler. 50'den fazla satır döndürebilecek sorgular için her zaman pagination ekleyin (take/skip veya cursor tabanlı).
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
