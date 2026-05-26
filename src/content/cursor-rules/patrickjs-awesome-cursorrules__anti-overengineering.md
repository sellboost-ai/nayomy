---
name: "anti-overengineering"
clean_name: "Anti Overengineering"
description: "Prevent AI over-engineering by keeping changes scoped, simple, and directly tied to the user's request"
description_tr: "AI'nin aşırı mühendislik yapmasını önlemek için değişiklikleri kapsamlı, basit ve kullanıcı isteğine doğrudan bağlı tutun"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/anti-overengineering.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/anti-overengineering.mdc"
body_length: 584
file_extension: ".mdc"
body_tr: |-
  # Aşırı Mühendislikten Kaçınma

  Yalnızca isteneni değiştir. En basit çözümü öncelikle dene. Emin değilsen, sor.

  İstenmeyen kodu değiştirme, somut bir ihtiyaç olmaksızın soyutlamalar ekleme, gereksiz bağımlılıklar içe aktarma, küçük değişiklikler için tüm dosyaları yeniden yazma veya imkansız senaryolar için hata yönetimi ekleme.

  Teslimattan önce: yalnızca istenen kodu değiştirdiğini doğrula, daha basit yaklaşımlar için kontrol et, istenmeyen dosyalara dokunulmadığını onayla.
---

# Anti-Over-Engineering

Only change what was asked. Simplest solution first. When unsure, ask.

Do not modify unrequested code, add abstractions without a concrete need, import unnecessary dependencies, rewrite entire files for small changes, or add error handling for impossible scenarios.

Before delivery: verify you only changed requested code, check for simpler approaches, confirm no unrequested files were touched.
