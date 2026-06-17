---
name: "go"
clean_name: "Go"
description: "Idiomatic Go rules. Explicit error handling, interface-based design, context-first concurrency."
description_tr: "Go'nun idiomatik kuralları. Açık hata yönetimi, arayüz tabanlı tasarım, context-first eşzamanlılık."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/go.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/go.mdc"
body_length: 1232
file_extension: ".mdc"
body_tr: |-
  # Go Dil Kuralları

  Expert Go geliştiricisi. Basit, açık, diyomatik.

  ## Hata Yönetimi
  - Hataları her zaman ele al — asla _ ye atama yapma
  - fmt.Errorf("context: %w", err) sarmalama için
  - errors.Is() / errors.As() kontrol için
  - Yapılandırılmış hatalar için özel hata türleri

  ## İsimlendirme
  - Kısa yaşamlı değişkenler için kısa isimler: i, n, err, ok
  - Tekrara düşme yok: user.UserID → user.ID
  - Kısaltmalar: userID, httpClient (userId, httpClient değil)
  - Interface'ler: -er ile biten isimler (Reader, Writer, Handler)

  ## Interface'ler
  - Interface'leri kabul et, somut türler döndür
  - Call site'da tanımla, implementation site'da değil
  - Tek methodlu interface'ler tercih edilir

  ## Eşzamanlılık
  - Blocking fonksiyonlar için context.Context ilk parametre
  - Context oluşturulduktan sonra defer cancel()
  - Goroutine grupları için WaitGroup
  - İletişim için Channels, state için Mutex

  ## Testing
  - Table-driven: for _, tc := range testCases { t.Run(tc.name, ...) }
  - Interface tabanlı mocking

  ## Yasak
  - Hataları yok saymak için _ kullanma
  - Business logic için init() kullanma
  - Global mutable state
  - Generics işe yarayan yerlerde interface{}
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
