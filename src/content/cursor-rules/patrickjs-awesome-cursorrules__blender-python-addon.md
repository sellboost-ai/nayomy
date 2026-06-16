---
name: "blender-python-addon"
clean_name: "Blender Python Addon"
description: "Blender Python add-on rules for operators, panels, properties, registration, testing, and API-safe scripting"
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/blender-python-addon.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/blender-python-addon.mdc"
body_length: 2491
file_extension: ".mdc"
body_tr: |-
  # Blender Python Add-on Kuralları

  ## Add-on Yapısı

  - Add-on giriş noktalarını `__init__.py` içinde tutun ve açık `register()` ve `unregister()` fonksiyonları tanımlayın.
  - Önemsiz olmayan add-onlar için operatörleri, panelleri, özellikleri, tercihleri ve yardımcı araçları ayrı modüllere gruplandırın.
  - Blender sürümüne ve paketleme hedefine göre `bl_info` veya `blender_manifest.toml` kullanın.
  - UI etiketlerini kısa tutun ve uygun yerlerde kullanıcıya sunulan metinleri çeviriye hazır hale getirin.

  ## API Kullanımı

  - Eylemler için `bpy.types.Operator`, UI için `bpy.types.Panel` ve gruplandırılmış ayarlar için `bpy.types.PropertyGroup` kullanın.
  - `bl_idname`, `bl_label` ve `bl_options` öğelerini açık şekilde tanımlayın.
  - Operatörleri etkinleştirmeden önce `poll()` içinde context doğrulaması yapın.
  - İnteraktif kurulum için `invoke()` ve gerçek işlem için `execute()` kullanın.
  - `{'FINISHED'}` veya `{'CANCELLED'}` tutarlı şekilde döndürün.
  - Son sahne durumunu okurken bağımlılık grafı güncellemelerini ve değerlendirilmiş nesneleri kullanın.

  ## Veri ve Özellikler

  - Özel özellikleri gevşek global durum yerine `PropertyGroup` sınıfları aracılığıyla kaydedin.
  - Add-on tercihlerini `AddonPreferences` içinde saklayın.
  - `PointerProperty`, `CollectionProperty` ve adlar ve açıklamalar içeren yazılı özellikleri kullanın.
  - `unregister()` sırasında özel özellikleri ve işleyicileri temizleyin.

  ## Güvenlik ve Performans

  - Açık kullanıcı eylemi olmaksızın yıkıcı sahne işlemleri çalıştırmayın.
  - Modal operatörlerde UI işini bloke etmekten kaçının; uzun işlemler için timerları veya modal durum makinelerini kullanın.
  - Mesh değişikliklerini toplu hale getirin ve programlı olarak mesh verilerini düzenlerken `bmesh` kullanın.
  - Çizim yöntemlerinde büyük sahneleri tekrar tekrar taramaktan kaçının.
  - Dosya yollarını yapılandırılabilir tutun ve Blender yol yardımcı programlarını kullanın.

  ## Test Etme ve Hata Ayıklama

  - Betikleri temiz bir Blender profilinde ve temsili bir üretim sahnesinde test edin.
  - Add-onu içe aktaran, kaydeden, temel operatörleri çalıştıran ve temiz şekilde kaydını silen smoke testleri ekleyin.
  - `self.report()` ile kullanıcıya yönelik operatör geri bildirimi için harekete geçirilebilir mesajları günlüğe kaydedin.
  - Sürüme özgü API farklarını yardımcı fonksiyonların arkasında izole tutun.

  ## Yaygın Hatalar

  - Sınıfları, işleyicileri, timerları ve tuş kombinasyonlarını unregister etmeyi unutmayın.
  - Panel `draw()` yöntemlerinden Blender verilerini mutasyona uğratmayın.
  - Context kontrolü olmaksızın etkin nesne, seçili nesne veya mod varsaymayın.
  - Mutlak varlık yollarını sabit kod olarak yazmaymayın.
---


# Blender Python Add-on Rules

## Add-on Structure

- Keep add-on entry points in `__init__.py` with clear `register()` and `unregister()` functions.
- Group operators, panels, properties, preferences, and utilities into separate modules for non-trivial add-ons.
- Use `bl_info` or `blender_manifest.toml` according to the Blender version and packaging target.
- Keep UI labels concise and user-facing text translatable where appropriate.

## API Usage

- Use `bpy.types.Operator` for actions, `bpy.types.Panel` for UI, and `bpy.types.PropertyGroup` for grouped settings.
- Define `bl_idname`, `bl_label`, and `bl_options` explicitly.
- Validate context in `poll()` before enabling operators.
- Use `invoke()` for interactive setup and `execute()` for the actual operation.
- Return `{'FINISHED'}` or `{'CANCELLED'}` consistently.
- Use dependency graph updates and evaluated objects when reading final scene state.

## Data and Properties

- Register custom properties through `PropertyGroup` classes instead of loose global state.
- Store add-on preferences in `AddonPreferences`.
- Use `PointerProperty`, `CollectionProperty`, and typed properties with names and descriptions.
- Clean up custom properties and handlers during `unregister()`.

## Safety and Performance

- Do not run destructive scene operations without explicit user action.
- Avoid blocking UI work in modal operators; use timers or modal state machines for long operations.
- Batch mesh changes and use `bmesh` when editing mesh data programmatically.
- Avoid repeatedly scanning large scenes in draw methods.
- Keep file paths configurable and use Blender path utilities.

## Testing and Debugging

- Test scripts in a clean Blender profile and a representative production scene.
- Add smoke tests that import the add-on, register it, run core operators, and unregister cleanly.
- Log actionable messages with `self.report()` for user-facing operator feedback.
- Keep version-specific API differences isolated behind helper functions.

## Common Mistakes

- Do not forget to unregister classes, handlers, timers, and keymaps.
- Do not mutate Blender data from panel `draw()` methods.
- Do not assume an active object, selected object, or mode without checking context.
- Do not hardcode absolute asset paths.
