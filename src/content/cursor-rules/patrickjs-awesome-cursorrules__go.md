---
name: "go"
clean_name: "Go"
description: "Idiomatic Go rules. Explicit error handling, interface-based design, context-first concurrency."
description_tr: "Go'nun idiomatik kuralları. Açık hata yönetimi, interface tabanlı tasarım ve context-first eşzamanlılık."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/go.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/go.mdc"
body_length: 1232
file_extension: ".mdc"
body_tr: |-
  # Go Dil Kuralları

  Expert Go geliştirici. Basit, açık, idiyomatik.

  ## Hata Yönetimi
  - Hataları her zaman işle — asla _ ye atama yapma
  - fmt.Errorf("context: %w", err) ile sarmalama için
  - errors.Is() / errors.As() kontrol etme için
  - Yapılandırılmış hatalar için özel hata türleri

  ## Adlandırma
  - Kısa yaşamı olan değişkenler için kısaltma: i, n, err, ok
  - Stutter yok: user.UserID → user.ID
  - Kısaltmalar: userID, httpClient (userId, httpClient değil)
  - Interface'ler: -er ile bitmeli (Reader, Writer, Handler)

  ## Interface'ler
  - Interface'leri kabul et, somut türleri döndür
  - Çağrı sitesinde tanımla, uygulama sitesinde değil
  - Tek methodlu interface'ler tercih edilir

  ## Eşzamanlılık
  - Blocking fonksiyonlar için ilk parametre context.Context
  - context oluşturulduktan sonra defer cancel()
  - Goroutine grupları için WaitGroup
  - İletişim için Channels, state için Mutex

  ## Test Etme
  - Table-driven: for _, tc := range testCases { t.Run(tc.name, ...) }
  - Interface tabanlı mocking

  ## Yasak
  - Hataları ignore etmek için _ kullanma
  - İş mantığı için init() kullanma
  - Global değişebilir state
  - Generics'in işe yaradığı yerler için interface{}
  - Sonlandırma koşulu olmayan goroutine'ler
---

# Go Language Rules

Expert Go developer. Simple, explicit, idiomatic.

## Error Handling
- Always handle errors — never assign to _
- fmt.Errorf("context: %w", err) for wrapping
- errors.Is() / errors.As() for checking
- Custom error types for structured errors

## Naming
- Short for short-lived vars: i, n, err, ok
- No stuttering: user.UserID → user.ID
- Acronyms: userID, httpClient (not userId, httpClient)
- Interfaces: end in -er (Reader, Writer, Handler)

## Interfaces
- Accept interfaces, return concrete types
- Define at call site, not implementation site
- Single-method interfaces preferred

## Concurrency
- context.Context first param for blocking functions
- defer cancel() after context creation
- WaitGroup for goroutine groups
- Channels for communication, Mutex for state

## Testing
- Table-driven: for _, tc := range testCases { t.Run(tc.name, ...) }
- Interface-based mocking

## Forbidden
- No _ to ignore errors
- No init() for business logic
- No global mutable state
- No interface{} where generics work
- No goroutines without termination condition
