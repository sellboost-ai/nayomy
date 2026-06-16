---
name: "gamemaker-gml"
clean_name: "Gamemaker Gml"
description: "GameMaker Language (GML) rules for scripts, objects, events, rooms, data structures, and performance-minded game code"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/gamemaker-gml.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/gamemaker-gml.mdc"
body_length: 2377
file_extension: ".mdc"
body_tr: |-
  # GameMaker GML Kuralları

  ## Kod Organizasyonu

  - Nesne event kodunu kısa tutun ve yeniden kullanılabilir davranışları script'lere veya function'lara taşıyın.
  - Script'ler, nesneler, sprite'lar, odalar ve globallar için açık ön ekler veya adlandırma kuralları kullanın.
  - Kopyala-yapıştır yapılan event bloklarına tercih olarak function'ları kullanın.
  - Create-Step-Draw sorumluluk alanlarını ayrı tutun.
  - Başlatmayı Create'e, simülasyonu Step'e ve yalnızca render işlemlerini Draw'a koyun.

  ## GML Stili

  - Açıklayıcı değişken adları kullanın ve küçük döngüler dışında tek harfli adlardan kaçının.
  - Gereksiz instance değişkenlerine tercih olarak `var` veya function kapsamlı deklarasyonları kullanan yerel değişkenleri tercih edin.
  - Tekrarlanan tanımlayıcılar, layer adları, durumlar ve collision grupları için sabitler, enum'lar ve macro'lar kullanın.
  - Opsiyonel instance referanslarını `instance_exists` ile kontrol edin.
  - Global durumu minimal tutun ve dokümante edin.

  ## Gameplay Mimarisi

  - Oyuncu, düşman, UI ve oyun akışı durumları için sonlu durum makineleri kullanın.
  - Collision mantığını açık ve belirlenimci tutun.
  - Input toplama işlemini action yürütmesinden ayrı tutun.
  - Alarm'lar, timeline'lar veya açık timer'ları tutarlı şekilde kullanın; sebep olmadan pattern'leri karıştırmayın.
  - Save verilerini yapılandırılmış map'ler/struct'lar aracılığıyla saklayın ve save formatını versiyonlayın.

  ## Performans

  - Geniş `instance_find` veya her Step event'inde tekrarlanan collision taramaları gibi pahalı aramaları önleyin.
  - Sık kullanılan asset ID'leri, layer ID'lerini ve object referanslarını güvenli olduğunda önbelleğe alın.
  - Artık ihtiyaç duyulmayan veri yapılarını yok edin.
  - Sık yapılan projectile'lar, particle'lar veya kısa ömürlü efektler için tahsis maliyetli hale geldiğinde object pooling kullanın.
  - Optimize etmeden önce profil çıkarın ve hot-path kodunu basit tutun.

  ## Hata Ayıklama ve Test

  - Yararlı olduğunda collision box'ları, durumu, hızı ve AI kararlarını göstermek için debug overlay'leri ekleyin.
  - İmkansız durumlar için assertion'lar veya açık guard clause'ları kullanın.
  - Oda geçişleri, pause/resume, save/load ve controller/keyboard input'u ayrı ayrı test edin.
  - Karmaşık mekanikler için tekrarlanabilir test odaları tutun.

  ## Yaygın Hatalar

  - Draw event'lerine oyun mantığı koymayın.
  - Veri yapılarını yok etmeden oluşturmayın.
  - Kritik davranış için oda editörü instance sırasına güvenmeyin.
  - Magic sayısal state ID'leri hardcode etmeyin.
---


# GameMaker GML Rules

## Code Organization

- Keep object event code short and move reusable behavior into scripts or functions.
- Use clear prefixes or naming conventions for scripts, objects, sprites, rooms, and globals.
- Prefer functions over copy-pasted event blocks.
- Keep create-step-draw responsibilities separate.
- Put initialization in Create, simulation in Step, and rendering-only work in Draw.

## GML Style

- Use descriptive variable names and avoid one-letter names outside small loops.
- Prefer local variables with `var` or function-scoped declarations over unnecessary instance variables.
- Use constants, enums, and macros for repeated identifiers, layer names, states, and collision groups.
- Guard optional instance references with `instance_exists`.
- Keep global state minimal and document it.

## Gameplay Architecture

- Use finite state machines for player, enemy, UI, and game-flow states.
- Keep collision logic explicit and deterministic.
- Separate input collection from action execution.
- Use alarms, timelines, or explicit timers consistently; do not mix patterns without reason.
- Store save data through structured maps/structs and version the save format.

## Performance

- Avoid expensive searches such as broad `instance_find` or repeated collision scans in every Step event.
- Cache frequently used asset IDs, layer IDs, and object references when safe.
- Destroy data structures when no longer needed.
- Use object pooling for frequent projectiles, particles, or short-lived effects when allocation becomes costly.
- Profile before optimizing and keep hot-path code simple.

## Debugging and Testing

- Add debug overlays for collision boxes, state, velocity, and AI decisions when useful.
- Use assertions or explicit guard clauses for impossible states.
- Test room transitions, pause/resume, save/load, and controller/keyboard input separately.
- Keep reproducible test rooms for complex mechanics.

## Common Mistakes

- Do not put game logic in Draw events.
- Do not create data structures without destroying them.
- Do not rely on room editor instance order for critical behavior.
- Do not hardcode magic numeric state IDs.
