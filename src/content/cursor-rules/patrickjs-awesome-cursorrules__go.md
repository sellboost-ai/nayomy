---
name: "go"
clean_name: "Go"
description: "Idiomatic Go rules. Explicit error handling, interface-based design, context-first concurrency."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/go.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/go.mdc"
body_length: 1232
file_extension: ".mdc"
body_tr: |-
  # Go Dil Kuralları

  Uzman Go geliştirici. Basit, açık, idiyomatik.

  ## Hata İşleme
  - Her zaman hataları işle — asla _ ye atama yapma
  - fmt.Errorf("context: %w", err) sarmalama için
  - errors.Is() / errors.As() kontrol için
  - Yapılandırılmış hatalar için özel hata tipleri

  ## Adlandırma
  - Kısa değişkenler için kısa isimler: i, n, err, ok
  - Tekrara düşme yok: user.UserID → user.ID
  - Kısaltmalar: userID, httpClient (userId, httpClient değil)
  - Interfaceler: -er ile biter (Reader, Writer, Handler)

  ## Interfaceler
  - Interfaceleri kabul et, somut tipleri döndür
  - Çağrı yerinde tanımla, implementasyon yerinde değil
  - Tek-metodlu interfaceler tercih edilir

  ## Concurrency
  - context.Context bloklayan fonksiyonlar için ilk parametre
  - context oluşturulduktan sonra defer cancel()
  - Goroutine grupları için WaitGroup
  - Haberleşme için Channels, durum için Mutex

  ## Testing
  - Tablo-tabanlı: for _, tc := range testCases { t.Run(tc.name, ...) }
  - Interface tabanlı mock'lama

  ## Yasak
  - Hataları görmezden gelmek için _ kullanma
  - Business logic için init() kullanma
  - Global değişebilir durum yok
  - Generics çalışırken interface{} kullanma
  - Sonlandırma koşulu olmayan goroutinler yok
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
