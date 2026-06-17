---
name: "anti-overengineering"
clean_name: "Anti Overengineering"
description: "Prevent AI over-engineering by keeping changes scoped, simple, and directly tied to the user's request"
description_tr: "AI'nin aşırı mühendislik yapmasını önlemek için değişiklikleri kapsamlı tutun, basit tutun ve doğrudan kullanıcının isteğine bağlı tutun."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/anti-overengineering.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/anti-overengineering.mdc"
body_length: 584
file_extension: ".mdc"
body_tr: |-
  # Aşırı Mühendislik Karşıtlığı

  Yalnızca istenen değişiklikleri yap. En basit çözümü önce deneyin. Emin değilseniz, sorun.

  İstenmeyen kodu değiştirme, somut bir ihtiyaç olmaksızın soyutlamalar ekleme, gereksiz bağımlılıkları içe aktarma, küçük değişiklikler için tüm dosyaları yeniden yazma veya imkansız senaryolar için hata işleme ekleme yapma.

  Teslimattan önce: yalnızca istenen kodu değiştirdiğinizi doğrulayın, daha basit yaklaşımları kontrol edin, istenmeyen dosyalara dokunulmadığını onaylayın.
---

# Anti-Over-Engineering

Only change what was asked. Simplest solution first. When unsure, ask.

Do not modify unrequested code, add abstractions without a concrete need, import unnecessary dependencies, rewrite entire files for small changes, or add error handling for impossible scenarios.

Before delivery: verify you only changed requested code, check for simpler approaches, confirm no unrequested files were touched.
