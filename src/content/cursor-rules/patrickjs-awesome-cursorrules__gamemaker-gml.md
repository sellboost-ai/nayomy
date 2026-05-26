---
name: "gamemaker-gml"
clean_name: "Gamemaker Gml"
description: "GameMaker Language (GML) rules for scripts, objects, events, rooms, data structures, and performance-minded game code"
description_tr: "GameMaker Language (GML) kuralları; scriptler, objeler, eventler, odalar, veri yapıları ve performans odaklı oyun kodu için rehberlik sağlar."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/gamemaker-gml.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/gamemaker-gml.mdc"
body_length: 2377
file_extension: ".mdc"
body_tr: |-
  # GameMaker GML Kuralları

  ## Kod Organizasyonu

  - Object event kodunu kısa tutun ve yeniden kullanılabilir davranışları script veya function'lara taşıyın.
  - Script, object, sprite, room ve global değişkenler için net prefix veya adlandırma kuralları kullanın.
  - Copy-paste yapılmış event bloklarından ziyade function'ları tercih edin.
  - Create-Step-Draw sorumluluk ayrımını tutun.
  - Initialization'ı Create'e, simulasyon'u Step'e ve yalnızca rendering işlemlerini Draw'a yerleştirin.

  ## GML Stili

  - Açıklayıcı değişken adları kullanın ve küçük döngülerin dışında tek harfli adlardan kaçının.
  - Gereksiz instance değişkenlerinden ziyade `var` veya function kapsamında local değişkenleri tercih edin.
  - Tekrarlanan identifierlar, layer adları, state'ler ve collision grupları için constant, enum ve macro'ları kullanın.
  - Opsiyonel instance referansları `instance_exists` ile koruyun.
  - Global state'i minimal tutun ve dokümante edin.

  ## Gameplay Mimarisi

  - Player, enemy, UI ve game-flow state'leri için finite state machine'leri kullanın.
  - Collision logic'i açık ve deterministik tutun.
  - Input toplamasını action yürütülmesinden ayırın.
  - Alarm, timeline veya explicit timer'ları tutarlı şekilde kullanın; sebep olmadan pattern'leri karıştırmayın.
  - Save verilerini structured map/struct aracılığıyla saklayın ve save format'ını versiyonlayın.

  ## Performans

  - Geniş `instance_find` veya her Step event'inde tekrarlanan collision scan'leri gibi pahalı aramaları kaçının.
  - Sık kullanılan asset ID'lerini, layer ID'lerini ve object referanslarını güvenli olduğunda cache'leyin.
  - Artık gerekli olmayan data structure'ları destroy edin.
  - Allocation maliyetli hale geldiğinde, sık proyektil, particle veya kısa ömürlü efekt'ler için object pooling kullanın.
  - Optimize etmeden önce profile yapın ve hot-path kodunu basit tutun.

  ## Debugging ve Testing

  - Collision box'ları, state, velocity ve AI kararlarını görselleştirmek için faydalı olduğunda debug overlay'ler ekleyin.
  - İmkansız state'ler için assertion veya explicit guard clause'ları kullanın.
  - Room transition'ları, pause/resume, save/load ve controller/keyboard input'unu ayrı ayrı test edin.
  - Karmaşık mekanikler için yeniden oluşturulabilir test room'ları tutun.

  ## Yaygın Hatalar

  - Game logic'i Draw event'lerine koymayın.
  - Data structure'ları destroy etmeden oluşturmayın.
  - Kritik davranış için room editor instance sırasına güvenmeyin.
  - Magic numeric state ID'leri hardcode'lamayın.
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
