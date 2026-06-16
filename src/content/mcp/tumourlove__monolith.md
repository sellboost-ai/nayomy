---
name: "tumourlove/monolith"
description: "Unreal Engine 5.7 editor plugin that gives AI assistants full read/write access to Blueprints, Materials, Animation, Niagara, Config, Editor, Project Index, and Engine Source via MCP. 119 actions across 9 domains. Pure C++, embedded Streamable HTTP server, no Python bridges."
category: "Gaming"
repo: "tumourlove/monolith"
stars: 166
url: "https://github.com/tumourlove/monolith"
body_length: 11467
license: "MIT"
language: "C++"
homepage: "https://github.com/tumourlove/monolith/wiki"
body_tr: |-
  # Monolith
  
  **Bir plugin. Her Unreal alanı. Sıfır bağımlılık.**
  
  [![UE 5.7+](https://img.shields.io/badge/Unreal-5.7%2B-blue)](https://unrealengine.com)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  [![MCP](https://img.shields.io/badge/Protocol-MCP-purple)](https://modelcontextprotocol.io)
  
  ---
  
  ## Monolith Nedir?
  
  Monolith, Unreal Engine editör eklentisidir ve yapay zekaya [Model Context Protocol (MCP)](https://modelcontextprotocol.io) üzerinden projenize tam okuma/yazma erişimi sağlar. Bir eklenti kurun, AI istemcinizi tek bir endpoint'e işaret edin ve Blueprintler, Materyaller, Animasyon, Niagara, Ses (Sound Cue'lar, MetaSound'lar), AI (Behavior Tree'ler, State Tree'ler, EQS, Smart Objects), Gameplay Ability System, Logic Driver state makineleri, proje yapılandırması ve daha fazlasıyla çalışabilir.
  
  **Claude Code**, **Cursor** veya herhangi bir MCP uyumlu istemciyle çalışır. Eğer AI aracınız MCP konuşabiliyorsa, Monolith'i konuşabilir.
  
  > **Platform:** Windows, macOS, Linux.
  
  ## Neden Monolith?
  
  Çoğu MCP entegrasyonu her eylemi ayrı bir araç olarak kaydeder, bu da AI'nın bağlam penceresini doldurur ve gerçekten faydalı olan şeyleri gömülü hale getirir. Monolith bunun yerine bir **namespace dispatch pattern** kullanır: her alan, tek bir `{namespace}_query(action, params)` aracı ortaya koymakta, merkezi bir `monolith_discover()` çağrısı ise mevcut her şeyi listeler. Küçük araç listesi (23 araç), muazzam kapasite (19 yerleşik namespace'te 1344 eylem; kardeş eklentiler kendi eylemleri ekler ve yüklendiklerinde canlı kayıt daha da yükselir). AI hızlı bir şekilde yönelir ve bağlamını asıl sorununuzda harcayabilir.
  
  ## Gerçekten Neler Yapabilir?
  
  **Blueprint (111 eylem)** — Projenizin her Blueprint'i üzerinde tam programatik kontrol. Her üst sınıftan oluşturun, JSON spec'ten tüm node grafikleri kurun, node'ları toplu olarak ekleyin/kaldırın/bağlayın/bağlantısını kesin, değişkenleri, bileşenleri, fonksiyonları, makroları ve event dispatcher'ları yönetin. Interface'leri uygulayın, hiyerarşileri yeniden parent yapın, construction script'lerini düzenleyin, CDO özelliklerini her Blueprint veya DataAsset'te okuyun/yazın. Otomatik düzen motoru modifiye edilmiş Sugiyama algoritmasını kullandığından AI tarafından oluşturulan grafikler gerçekten temiz görünür. İki Blueprint'i yan yana karşılaştırın, şablonlardan scaffold yapın, kullanıcı tanımlı struct'ları ve enum'ları yönetin. 0.15.0'da yeni: DataTable'ları, CurveTable'ları ve StringTable'ları çift yönlü olarak işlemeye yarayan bir **veri seti okuma/düzenleme paketi** — satırları inline row struct şemasıyla okuyun, kuru çalışma önizlemeleriyle toplu upsert yapın, satır CRUD'ı, JSON/CSV import/export'u ve veri varlığını atomik bir çağrıda oluşturmak ve doldurmak için `seed_data_asset`. Ayrıca yeni: `add_property_access` (herhangi bir yabancı sınıftaki UPROPERTY'yi adıyla al/ayarla, gerçek türüne çözümlendi), `override_parent_function` (değer döndüren geçersiz kılınabilir bir üst fonksiyonu geçersiz kılın) ve bir toplu düzenleme partisini temizlemek için `save_dirty_assets`. AI'ya bir açıklama verin ve tüm şeyi kurar — veya varolan bir Blueprint'e işaret edin ve cerrahi olarak ihtiyacınız olan şeyi yeniden bağlayacaktır.
  
  **Material (63 eylem)** — Sıfırdan materyaller, material instance'ları ve material fonksiyonları oluşturun. Tüm PBR grafikleri programatik olarak kurun — expression'ları ekleyin, pin'leri bağlayın, otomatik düzen yapın, yeniden derleyin. Özel HLSL node'ları bırakın. Disketten dokuları içeri aktarın ve doğrudan material slot'larına bağlayın. Düzinelerce instance'ta toplu özellikler ayarlayın. Material önizlemeleri ve küçük resimleri AI oturumundan çıkmadan render yapın. Dokuları tam meta verilerle önizleyin, anti-tiling analiziyle kaplama kalitesini kontrol edin, expression'ları toplu olarak silin, tüm grafikleri temizleyin. Tam material fonksiyonu desteği: oluşturun, iç grafikleri kurun, projeler arasında export/import yapın. Derleme istatistikleri alın, hatalar için doğrulayın, shader karmaşıklığını inceleyin. Oluşturmadan doğrulamaya kadar tam material iş akışını kapsar.
  
  **Animation (125 eylem)** — Tamamen animation pipeline'ı, baştan sona. Bone track'ler, eğriler, notify'lar ve sync marker'larla sequence'ler oluşturun ve düzenleyin. Bölümler, slot'lar, blending konfigürasyonu ve anim segment'leriyle montaj'lar kurun. Örnek noktaları olan 1D/2D Blend Space'ler ve Aim Offset'ler ayarlayın. **Animation Blueprint graph yazma** — state makinelerine state'ler ekleyin, transition'lar oluşturun, transition kuralları ayarlayın, anim graph node'ları ekleyin ve bağlayın. 0.15.0 itibariyle, `add_anim_graph_node` keyfi somut özel AnimGraph node sınıflarını yol veya ad ile çözer (sadece yerleşik node-type takma adları değil), bu nedenle AI herhangi bir plugin'in `UAnimGraphNode_Base` alt sınıfından node'ları bağlayabilir. AI ABP locomotion konfigürasyonlarını programatik olarak kurabiliyor, sadece okumuyor. PoseSearch entegrasyonu: şema ve veritabanları oluşturun, kanalları konfigüre edin, arama dizinini yeniden kurun. Control Rig graph manipülasyonu node bağlantısı ve değişken yönetimiyle. Fizik Varlığı gövde ve kısıtlama özellikleri için düzenleme. IK Rig ve Retargeter desteği — chain mapping, solver konfigürasyonu ve daha fazlası. Soket'ler, sanal kemikler ve eğrilerle skeleton yönetimi. Tam animation pipeline'ını kaplayan 125 eylem.
  
  **Niagara (109 eylem)** — Tam sistem ve emitter yaşam döngüsü — oluşturun, çoğaltın, konfigüre edin, derleyin, kaydedin. Module CRUD geçersiz kılma korunuyor şekilde yeniden sıralama, böylece artist tweak'lerini bozmayın. Tamamlanan dinamik input yaşam döngüsü: input'ları ekleyin, ağacı inceleyin, değerleri okuyun, bunları kaldırın. Event handler ve simulation stage CRUD'ı. Niagara Parameter Collection'ları tam param yönetimiyle. Scalability ve culling konfigürasyonuyla Effect Type oluşturma. Kalite seviyesi başına scalability ayarları. Her tür için renderer yardımcıları — mesh assignment'ı, ribbon preset'leri (trail, beam, lightning, tube), SubUV ve flipbook konfigürasyonu. Data interface konfigürasyonu ve property inceleme JSON array'lerini ve struct'larını kendi sırasında işler. İki sistemi diff yaparak tam olarak ne değiştiğini görün. Module'lar arasında geçersiz kılmaları klonlayın, module'ları çoğaltın, parameter binding'leri keşfedin, module output'larını inceleyin, kullanıcı parametrelerini yeniden adlandırın. Kuru çalıştırmada toplu çalıştırma gereksiz derlemeler tetiklemeyen salt okunur optimizasyonla. Tam `export_system_spec` ve merge modla `import_system_spec`. 0.15.0 itibariyle, `get_system_summary` / `get_emitter_summary` daha zengin event-farkında payload'lar için bir `detail_level` alır ve `validate_system` inter-emitter event zincirlerini akıl yürütür — @middle233'ün PR #60'u sayesinde. Sistem oluşturmaktan final polishlemeye kadar tam Niagara iş akışını kapsar.
  
  **UI (138 eylem)** — Widget Blueprint CRUD tam widget ağacı manipülasyonuyla. UMG taban + Animation v2, EffectSurface, Spec Builder, Type Registry, hoisted Design Import ve 51 CommonUI eylemi (`WITH_COMMONUI` koşullu), artı 4 GAS attribute-binding takma adı. 0.15.0 burada MCP boşluğunun büyük bir kısmını kapattı: close-the-loop primitif'ler (`rename_widget`, `add_widget_variable`, `audit_focus_chain`, `list_widget_property_enums`, `convert_textblock_to_common`, `dump_blueprint_compile_log` ve arkadaşları), başlık scaffold'lar (`scaffold_main_menu`, `scaffold_settings_panel_with_tabs`, `scaffold_pause_menu`, `build_menu_from_spec`) ve `set_widget_navigation_bulk`, `dump_widget_navigation`, `convert_border_to_common`, `reparent_widget_root` ve `set_widget_is_variable` gibi boşluk kapatma eylemleri. Yaygın oyun UI'sı için önceden oluşturulmuş template'ler: HUD öğeleri, menüler, ayarlar panelleri, onay iletişim kutuları, yükleme ekranları, envanter grid'leri, kaydetme slot listeleri, notification toast'ları. Her şeyi stilleyin — fırça'lar, fontlar, renk şemaları, toplu stil işlemleri. Keyframed widget animasyonları oluşturun. Tam oyun scaffold'ı: ayar sistemleri, kaydetme/yükleme, ses konfigürasyonu, input remapping, erişilebilirlik özellikleri. Erişilebilirlik denetimi çalıştırın, renk körü modları ayarlayın, metin ölçeklendirmesini konfigüre edin. Widget oluşturmaktan erişilebilirliğe kadar tam UI iş akışını kapsar.
  
  **Editor (29 eylem)** — Tam UBT derlemelerini veya Live Coding derlemelerini tetikleyin, derleme hatalarını ve compiler çıktısını okuyun, editör günlüklerini arayın ve takip edin, başarısızlıklardan sonra crash bağlamı alın. Herhangi bir varlığın önizleme ekran görüntülerini yakalayın — materyaller, Niagara sistemleri, meshler. Çok çerçeveli GIF dizileri yakalayın. Dokuları içeri aktarın, flipbook'ları dikin, varlıkları silin, factory'den boş haritalar oluşturun, module durum'unu sorgulayın, tam yol ön ekiyle UE automation test'lerini listeleyin/çalıştırın, artı Python escape-hatch'i ve otomasyonflow'ları için persistent-level swap'ı. AI kodunuzu derleyebilir, hataları okuyabilir, C++'ı düzeltebilir, yeniden derleyebilir ve düzeltmeyi doğrulayabilir — editöre dokunmadan.
  
  **Config (6 eylem)** — Tam INI resolution chain farkındalığı: Base, Platform, Project, User. Herhangi bir ayarın ne yaptığını, nerede geçersiz kılındığını, etkin değerin ne olduğunu ve engine varsayılanından nasıl farklı olduğunu sorun. Tüm config dosyaları arasında aynı anda arayın. Performans tuning oturumları için mükemmel, burada AI sadece INI'larınızı çözüp ortaya koymaktan hoşlanıyor.
  
  **Source (11 eylem)** — Anında 1M+ Unreal Engine C++ sembolü üzerinde arayın. Fonksiyon uygulamalarını okuyun, tam sınıf hiyerarşileri alın, call grafikleri (arayanlar ve çağrılanlar) izleyin, include yollarını doğrulayın — tümü yerel bir dizine karşı, tamamen çevrimdışı. Native C++ indexer editör başlatılmasında otomatik çalışır. Python yok, kurulum yok. İsteğe bağlı olarak projenizin kendi C++ kaynağını dizine ekleyin ve aynı kapsam alın. AI bir fonksiyon imzasını tahmin etmek zorunda kalmamalıdır.
  
  **Project (7 eylem)** — SQLite FTS5 tam metin araması projenizin dizine alınmış her varlığı üzerinde. Varlıkları ad, tür, yol veya içerik ile bulun. Varlıklar arasındaki referansları izleyin. Gameplay tag'lerini arayın. Detaylı varlık meta verisini alın. Dizin varlıklar değiştikçe canlı olarak güncellenir ve marketplace/Fab eklenti içeriğini de kapsar — DataAsset alt sınıfları dahil 15 derin indexer kayıtlı.
  
  **Mesh (194 eylem)** — Bugüne kadarki en büyük modül. 22 kapasite seviyesi ile 194 temel eylem, artı varsayılan olarak devre dışı bırakılan 45 prosedürel şehir oluşturma eylemi (devam eden çalışma, ve geliştirilmesine yardımcı olmaya istekli değilseniz, en iyi şekilde yalnız bırakın — ilan edilen genel sayıda değildir). Mesh inceleme ve karşılaştırma. PIE olmadan editörde çalışan tam actor CRUD'ı ve sahne manipülasyonu. Fizik tabanlı mekansal sorgular (raycast'lar, sweep'ler, overlap'ler). Level blockout iş akışı otomatik eşleşme ve atomik değiştirmeyle. GeometryScript mesh işlemleri (boolean, basitleştir, remesh, LOD gen, UV projeksiyon). Korku mekansal analizi — sightline'lar, gizlenme yerleri, ambush noktaları, zone gerilim'i, pacing eğrileri (WIP). Erişilebilirlik doğrulaması A-F notlandırmasıyla. Aydınlatma analizi (WIP), ses/akustik Sabine RT60 ve stealth haritalarla (WIP), performans bütçelemesi (WIP). Hikaye anlatımlı preset'lerle decal yerleştirme. Işıklar, volume'lar, alt seviye'ler, prefab'lar, HISM örneğilemesi için level tasarımı araçları. Mesh import'u için tech art pipeline (şimdi `import_mesh` via isteğe bağlı skeletal-mesh + animation import ile, @4698to'ın PR #58'i sayesinde), LOD gen, texel density, collision authoring. Herhangi bir yüzeyde context-aware prop scatter. Prosedürel geometri — parametrik mobilya (15 tür), korku prop'ları (7 tür), mimari yapılar, labirent'ler, borular, arazi. Herhangi bir oyun türü için genre preset sistemi. Patrol rotaları, güvenli oda değerlendirmesi ve scare dizisi oluşturmayla encounter tasarım'ı. Tam erişilebilirlik raporlaması.
  
  **GAS (135 eylem)** — Tamamlanan Gameplay Ability System entegrasyonu. 131 GAS-namespace eylemi artı 4 widget attribute-binding eylemi `ui` namespace'te de takma ad olarak. Aktivasyon politikaları, cooldown'lar, maliyetler ve tag'lerle Gameplay Ability'leri oluşturun ve yönetin. Tam AttributeSet CRUD — hem C++ hem de Blueprint tabanlı (isteğe bağlı GBA eklentisi via). GBA olmayan projeler yine de çalışan bir starter seti almak için `ULeviathanVitalsSet` AttributeSet template'iyle gemi yapısı. Modifier'lar, duration politikaları, stacking, period ve koşullu uygulamayla Gameplay Effect authoring'i. Ability System Component (ASC) yönetimi — yetenekleri ver/iptal et, etkiler uygula/kaldır, aktif yetenekleri ve etkileri sorgula. Gameplay Tag yardımcıları. Gameplay Cue yönetimi — ses/görsel geri bildirim için cue'lar oluşturun, tetikleyin, inceleyin. Target veri oluşturma ve targeting görevleri. Ability aktivasyonu için input binding. Runtime inceleme ve debugging araçları. Şablonlardan tamamlanan GAS kurulum'larını oluşturan scaffold eylemleri. Azaltılmış zorluk modları için erişilebilirlik odaklı sonsuz-süreli GE'ler.
  
  **AI (221 eylem)** — Herhangi bir MCP sunucusu tarafından sağlanan en kapsamlı AI araç'ı. Behavior Tree'ler, Blackboard'lar, State Tree'ler, Environment Query System (EQS), Smart Objects, AI Controller'lar, AI Perception, Navigation ve runtime debugging için tam yaşam döngüsü yönetimi. Crown jewel eylemleri: `build_behavior_tree_from_spec` ve `build_state_tree_from_spec` — AI'ya istediğiniz AI davranışının JSON açıklamasını verin ve tüm varlığı programatik olarak kurar. Phase J BT crash hardening'i (F1) ve BT graph + perception inceleme yardımcılarını (F8) gönderdi. BT node'ları oluşturun (görevler, dekoratörler, hizmetler), bunları ağaçlara bağlayın, blackboard key'leri konfigüre edin, generator'lar ve test'lerle EQS sorguları kurun, davranış config'leriyle Smart Object slot'larını tanımlayın, perception sense'lerini konfigüre edin (sight, hearing, damage, touch), navigation filtrelerini ve query filtrelerini yönetin, PIE sırasında AI'yı inceleyin ve debug'layın. Scaffold eylemleri şablonlardan tamamlanan AI kurulum'larını oluştururlar — patrol AI, combat AI, companion AI ve daha fazlası. 15 kategori genelinde 221 eylem. State Tree ve Smart Objects eklentilerine koşullu (her ikisi de UE ile gemi yapısı) — `WITH_STATETREE` ve `WITH_SMARTOBJECTS` via gated (Phase J F22 retrofit). Large-scale AI için isteğe bağlı Mass Entity ve Zone Graph entegrasyonu.
  
  **Logic Driver (66 eylem)** — Logic Driver Pro, bir marketplace state machine eklentisinin tam entegrasyonu. State makinesi CRUD — oluşturun, inceleyin, derleyin, silin. Graph okuma/yazma — state'ler ekleyin, transition'lar, özellikleri konfigüre edin, transition kuralları ayarlayın. State node'ları, conduit node'ları ve transition event'leri için node konfigürasyonu. Runtime/PIE kontrolü — başlatın, durdurun, aktif state'leri sorgulayın, transition'ları tetikleyin. Bir çıkış `build_sm_from_spec` tamamlanan state makineleri JSON spec'inden kurar. Şablonlamak ve versiyon kontrolü için JSON spec import/export. Yaygın pattern'leri oluşturan scaffold eylemleri (kapı kontrolörü, sağlık sistemi, AI patrol, diyalog sistemi, asansör, bulmaca, envanter). Bir actor'da Logic Driver bileşenleri component yönetimi — ekleyin/konfigüre edin. Debugging için metin graph görselleştirmesi. Mevcut node sınıfları ve template'leri listeleyen keşif eylemleri. Reflection-only entegrasyon (doğrudan C++ API linkajı yok) — herhangi bir Logic Driver Pro sürümüyle çalışır. `#if WITH_LOGICDRIVER` koşullu — build zamanında otomatik algılanır.
  
  **ComboGraph (13 eylem)** — Visual combo tree düzenlenmesi için ComboGraph marketplace eklentisiyle entegrasyon. Graph CRUD — oluşturun, inceleyin, doğrulayın combo graph'ları. Node ve edge yönetimi — montaj animasyonları olan combo node'ları ekleyin, bunları edge'lerle bağlayın, efekt ve cue'ları konfigüre edin. GAS cross-integration — ComboGraph'ı Gameplay Ability System ile köprüleyen combo ability'leri scaffold yapın. Reflection-only entegrasyon, `#if WITH_COMBOGRAPH` koşullu.
  
  **Audio (98 eylem)** — Tam UE ses pipeline'ı genelinde editör-zaman ses varlığı authoring'i. 82 taban audio-namespace eylemi artı 4 perception-binding eylemi (`bind_sound_to_perception` ve arkadaşları, Phase J entegrasyonu) artı 12 v0.14.10 MetaSound belge introspection eylemi (PR #18 by @alakangas — varolan Builder API'ye salt okunur tamamlayıcı). 5 yapılandırılabilir ses varlığı türü üzerinde tam CRUD — SoundAttenuation, SoundClass, SoundMix, SoundConcurrency, SoundSubmix. Sound Cue graph inşaası — node'lar ekleyin (22 tür), pin'leri bağlayın, reflection via özellikleri ayarlayın. MetaSound Builder API entegrasyonu programatik MetaSound authoring'i için — node'lar, pin'ler, graph input'ları/output'ları, interface'ler, değişkenler. MetaSound belge introspection (v0.14.10) herhangi bir on-disk MetaSound varlığının salt okunur incelenmesi için — liste, belge walk, özet, node örneği detayları, bağlantılar, değişkenler, kullanıcı parametreleri, arama, bilgi, bağımlılıklar, doğrulama. Crown jewel'ler: `build_sound_cue_from_spec` ve `build_metasound_from_spec` — deklaratif JSON-to-graph tek bir çağrıda. Sınıf/attenuation/submix/concurrency/compression/looping/virtualization'u düzinelerce varlık arasında toplu işlem'ler. Ses sağlık kontrolleri — kullanmayan sesleri bulun, eksik attenuation'ı, atanmamış sınıfları. Yerleşik `create_test_wave` (Phase J F18) talep halinde teşhis çalışması için sine SoundWave oluşturur. Phase J F11 sertleştirilmiş bir ses varlığı validator'u ekledi. Beş template Sound Cue (random, layered, looping ambient, distance crossfade, switch) ve dört template MetaSound (oneshot SFX, looping ambient, synth tone, interactive). SoundWave inceleme salt okunur; reflection-tabanlı property düzenleme'ler yine de toplu ses dalgası tuning'i için çalışır. MetaSound özellikleri `#if WITH_METASOUND` gated — absent olduğunda graceful degradation.
  
  ---
  
  ## Özellikler
  
  - **Blueprint (111 eylem)** — Tam CRUD, node graph manipülasyonu, JSON-to-Blueprint kuruluş, otomatik düzen (Sugiyama), CDO property erişim'i, struct'lar, enum'lar, template sistemi, Blueprint karşılaştırması, cross-class property al/ayarla, parent-fonksiyon geçersiz kılmaları. İçeren 0.15.0 veri seti okuma/düzenleme paketi (DataTable/CurveTable/StringTable çift yönlü + `seed_data_asset`). Herhangi bir MCP istemciyle eksiksiz Blueprint ko-pilot olarak çalışır
  - **Material authoring (63 eylem)** — Programatik PBR graph kuruluşu, özel HLSL, material fonksiyonları, doku import'u, toplu işlem'ler, preview rendering'i, derleme istatistikleri, kaplama kalitesi analizi, doku preview'ü
  - **Animation (125 eylem)** — Sequence'ler, montaj'lar, blend space'ler, Animation Blueprint graph yazma (state'ler ekleyin, transition'lar, kurallar, node'ları bağlayın — `add_anim_graph_node` via keyfi özel `UAnimGraphNode_Base` sınıfları dahil), PoseSearch, Control Rig, Fizik Varlığı, IK Rig'ler, Retargeter'ler, skeleton yönetimi
  - **Niagara VFX (109 eylem)** — Sistem/emitter yaşam döngüsü, dinamik input'lar, event handler'lar, sim stage'ler, Parameter Collection'ları, Effect Type'lar, scalability ayarları, renderer preset'leri, data interface'ler, sistem diffing, toplu çalıştırma, event-farkında özet'ler + `validate_system` event-chain akıl yürütmesi (`detail_level`, 0.15.0)
  - **Mesh (194 eylem)** — 22 kapasite seviyesi: mesh inceleme, sahne manipülasyonu, mekansal sorgular, blockout-to-production, GeometryScript işlem'leri, korku mekansal analizi (WIP), erişilebilirlik doğrulaması (A-F notlandırması), aydınlatma (WIP), ses/akustik (WIP), performans bütçelemesi (WIP), decal'lar, level tasarım'ı, tech art pipeline (mesh import şimdi `import_mesh` via isteğe bağlı skeletal-mesh + animation import desteği, PR #58 by @4698to), context-aware prop'lar, prosedürel geometri (mobilya, korku prop'ları, yapılar, labirent'ler, arazi), genre preset'leri, encounter tasarım'ı, erişilebilirlik raporları. +45 town gen eylemi (devam eden çalışma, varsayılan olarak devre dışı, genel sayıda değil)
  - **AI (221 eylem)** — Behavior Tree'ler, Blackboard'lar, State Tree'ler, EQS, Smart Objects, AI Controller'lar, Perception, Navigation, runtime debugging, scaffold'lar. Crown jewel'ler: `build_behavior_tree_from_spec` ve `build_state_tree_from_spec`. `WITH_STATETREE` + `WITH_SMARTOBJECTS` gated (Phase J F22)
  - **GAS (135 eylem)** — Tam Gameplay Ability System: yetenekler, AttributeSet'ler (C++ + `ULeviathanVitalsSet` template; isteğe bağlı GBA via Blueprint set'leri), Gameplay Effect'ler, ASC yönetimi, tag'ler, cue'lar, targeting, input binding, runtime inceleme, scaffold template'leri, erişilebilirlik odaklı sonsuz-süreli GE'ler. 4 attribute-binding eylemi `ui` namespace'te takma ad olarak ortaya çıkar
  - **Logic Driver (66 eylem)** — Logic Driver Pro state makineleri: SM CRUD, graph okuma/yazma, node config, runtime/PIE, `build_sm_from_spec`, JSON spec, scaffold'lar (kapı, sağlık, AI patrol, diyalog, asansör, bulmaca, envanter), component yönetimi
  - **ComboGraph (13 eylem)** — ComboGraph combo ağaç
---

# Monolith

**One plugin. Every Unreal domain. Zero dependencies.**

[![UE 5.7+](https://img.shields.io/badge/Unreal-5.7%2B-blue)](https://unrealengine.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![MCP](https://img.shields.io/badge/Protocol-MCP-purple)](https://modelcontextprotocol.io)

---

## Why I built this

Most MCP integrations for Unreal register every action as a separate tool. That floods the AI's context window with hundreds of tool names before you've asked a single question — and the actually useful stuff gets buried. I built Monolith because I wanted my AI to spend its context on my problem, not on memorising a tool catalogue.

One plugin. One MCP endpoint. A handful of namespace-dispatch tools instead of ~1,500+. The AI calls `monolith_discover()` and `monolith_guide()` when it needs to know what's available, and otherwise just hits `blueprint_query("create_asset", ...)`, `material_query("compile", ...)`, and so on.

I use it every day. It does what I need.

---

## What it does

Monolith exposes **~1,500+ actions across 25+ in-tree namespaces** through a namespace-dispatch pattern: each domain registers a single `{namespace}_query(action, params)` tool, and a central `monolith_discover()` lists everything available. (Exact counts are intentionally approximate — query `monolith_discover()` for the live figure.)

Covered domains: Blueprints, Materials, Animation, Niagara, Mesh, UI (incl. CommonUI), AI (Behavior Trees, State Trees, EQS, Smart Objects, Perception, Navigation), Gameplay Ability System, Logic Driver state machines, ComboGraph combo trees, Audio (Sound Cues + MetaSounds), Editor control (UBT builds, log capture, scene capture, asset preview & inspection), Engine source search (1M+ symbols, fully offline), Project asset search (SQLite FTS5), INI config, Level Sequences, a `bulk_fill` / `describe` reflection framework for deep property writes, a `monolith_guide` self-onboarding tool for your AI, plus the new v0.17.0 **Reflection Intelligence** layer: `decision` (architectural decision-record harvest), `risk` (repo-level hotspot + co-change + conditional-gate signals), `cppreflect` (UE 5.7 UHT reflection-edge queries cross-joined with the asset registry), `network` (replication inspection — replicated classes, RPCs, OnRep handlers, unbalanced-handler audits), `pipeline` (read-only composer actions for PR review + release pre-flight), and `reflect` (index maintenance — a project-only force-rebuild of the reflection tables). The `cppreflect` and `network` indexers scan your project plugins by default, so replicated classes and RPCs declared in plugins are in scope without extra setup; enabled marketplace plugins are gated behind a setting, and Epic engine built-ins stay excluded.

**MCP LLM Ergonomics** (also new in v0.17.0): universal response shaping (`_fields` / `_omit` / `_compact_json`) on every action, schema-tagged param kinds with automatic `\` → `/` rewrite on asset paths, `did_you_mean` fuzzy match on dispatch errors, MCP `tools/list` annotations (read-only / destructive / idempotent hints), `source_query` cursor pagination, and a proxy-side JSONL call log. The whole point is to let your AI spend less context recovering from typos and trial-and-error.

**New in v0.19.0:** an **LLM C++ authoring ergonomics pack** in the `source` namespace — eight read-only lookups so your AI resolves an include path, exact signature, deprecation status, Build.cs deps, header lint, or a UCLASS stub in one round-trip instead of reading raw source (`get_include_path`, `get_signature`, `check_deprecations`, `verify_symbols`, `find_example_usage`, `suggest_build_cs_deps`, `lint_header`, `generate_class_stub`), plus `fix_hints` on `editor.get_build_errors`. A parser fix that finally indexes allman-brace plain classes/structs **tripled the engine source index** (~300K → ~967K symbols), so lookups for `FCollisionShape`, `FScopeLock`, `FPaths` and ~40K other engine types now actually return. Plus **live-PIE introspection + driving** in the `editor` namespace (`pie_get_object_properties`, `pie_call_function`, `pie_set_control_rotation`, `pie_inject_input_action`, `pie_possess_spectator_free`), programmatic stat-group readout (`get_stat_group_values`), time-series PIE sampling and anim-node binding read/write (`animation`), a Blueprint variable-reference census (`blueprint.find_variable_references`) and contract reconciliation, and first-class T3D asset-text export (`project.export_asset_text`). The `tools/list` manifest is ~40% smaller (duplicated action lists dropped from dispatcher descriptions), and two first-launch fixes land (MonolithMesh now delay-loads GeometryScripting; the deep indexer no longer asserts on UserDefinedStruct fields with unresolved types — issue #70, thanks @aggitti).

**Unreleased:** an **AnimGraph-authoring pack** in the `animation` namespace — apply-additive / mesh-space-additive nodes, slot nodes (validated against the skeleton's slot groups), save/use cached pose, output-pose and state-result wiring, blend-by-int, sync groups, layered-blend-per-bone filters, Control Rig anim-graph nodes, linked anim layers, and state-machine conduits — plus blend-space baking + interpolation control, state-machine teardown (remove states / transitions / re-point entry), IK-solver removal, and a Blueprint-Assist-free `auto_layout` formatter that works in release builds.

**New in v0.18.1:** a from-scratch **Motion Matching authoring pack** across the `animation`, `chooser`, and `blueprint` namespaces — Pose Search schema / database primitives, mirror data tables, chooser-table authoring, the AnimBP motion-matching graph + foot-IK, thread-safe AnimBP authoring (reflective Property Access, a thread-safe function flag, and an exec-driven chooser feeding the Motion Matching database), character/actor scaffolding, and a retarget create/run pack. Plus a **PIE / profiling harness** (async PIE-smoke sessions, CSV / Insights profiling brackets, clip + anim-frame capture, map authoring, nav rebuild/validate), **state-machine authoring + live anim-instance telemetry**, a generic **AI controller that runs a BehaviorTree on possess** with movement-driving BT task classes, inherited-native-component inspection, and live DataAsset field read-back.

**New in v0.18.0:** Niagara HLSL direct-editing — read and overwrite the HLSL source on a `CustomHlsl` node (`get_custom_hlsl_text` / `set_custom_hlsl_text`), plus simulation-stage / event-handler selectors on the module-stack actions and a ParameterMap bridge for `create_module_from_hlsl` (PR #65, thanks @middle233). Niagara also gains a search & discovery pack (`search_by_parameter`, `search_by_data_interface`, `query_niagara`, `find_similar_systems`, `search_by_material`, `find_niagara_references`, `list_system_data_interfaces`).

Full per-namespace breakdown: **[Tool Reference (wiki)](https://github.com/tumourlove/monolith/wiki/Tool-Reference)**.

Works with **Claude Code**, **Cursor**, **Cline**, or any MCP-compatible client. Windows, macOS, Linux.

---

## Quick install

**1. Drop into Plugins/**

```bash
cd YourProject/Plugins
git clone https://github.com/tumourlove/monolith.git Monolith
```

(Or grab the [latest release zip](https://github.com/tumourlove/monolith/releases) and extract to the same path. The release zip includes precompiled DLLs so Blueprint-only projects can open the editor immediately without rebuilding.)

**2. Create `.mcp.json`** in your project root (same directory as your `.uproject`):

```json
{
  "mcpServers": {
    "monolith": {
      "command": "Plugins/Monolith/Binaries/monolith_proxy.exe",
      "args": []
    }
  }
}
```

The native C++ proxy keeps your AI session alive when the editor restarts. For **Cursor/Cline**, **macOS/Linux**, or the **Python fallback**, see the [Installation wiki page](https://github.com/tumourlove/monolith/wiki/Installation).

**3. Open the editor.** Wait 30-60 seconds for the first-launch index. When you see `Monolith MCP server listening on port 9316` in the Output Log (filter `LogMonolith`), connect your AI client and ask *"what Monolith tools do you have?"* to verify.

Project-instructions files (`CLAUDE.md`, `AGENTS.md`, `.cursorrules`, etc.) vary per assistant — just paste the namespace list into your AI and ask it to generate the right format for your toolchain. Full install variants, troubleshooting, and post-install setup live on the [Installation wiki](https://github.com/tumourlove/monolith/wiki/Installation).

---

## Standalone tools

Two zero-dependency C++ executables ship in `Binaries/` and work without the editor:

- **`monolith_proxy.exe`** — MCP stdio↔HTTP proxy. Keeps your AI session alive across editor restarts. Used by the `.mcp.json` config above.
- **`monolith_query.exe`** — Offline query tool. Serves the engine source index, project asset index, and the full Reflection Intelligence surface (`decision` / `risk` / `cppreflect` / `network`) without launching UE — byte-identical to the live server, verified by a ship-blocking parity guard. Instant startup; useful for terminal-side lookups and CI when the editor is down.

Details: [wiki Tool Reference](https://github.com/tumourlove/monolith/wiki/Tool-Reference).

---

## Auto-updater

Off by default as of v0.14.6. Opt in via **Auto Update Enabled** in Editor Preferences > Plugins > Monolith — checks GitHub Releases on editor startup, verifies the downloaded zip's SHA256 against the release-notes marker, swaps the plugin on editor exit (after a Y/N prompt). See [Auto-Updater wiki](https://github.com/tumourlove/monolith/wiki/Auto-Updater).

---

## Network exposure

Monolith starts a local HTTP server on port 9316 to receive MCP traffic. UE's `FHttpServerModule` does **not** expose a bind-address parameter, so the listener is reachable on all network interfaces, not just `127.0.0.1`. CORS is restricted to localhost origins (which blocks browser-based cross-origin reads) but does **not** block direct HTTP requests from other devices on the same LAN.

If you work on an untrusted network: either add a Windows Firewall rule blocking inbound TCP on port 9316 from non-loopback addresses, or untick **MCP Server Enabled** in Editor Preferences > Plugins > Monolith and restart the editor.

See [SECURITY.md](SECURITY.md) for the full threat model and disclosure policy.

---

## Documentation

- **[Wiki](https://github.com/tumourlove/monolith/wiki)** — installation variants, tool reference, connecting your AI, configuration, auto-updater, FAQ, skills, optional modules, engine source index details, mesh module deep dive, horror level design, procedural geometry, genre presets, test status
- **[API_REFERENCE.md](Docs/API_REFERENCE.md)** — full per-action parameter reference, regenerated from the live registry each release
- **[SPEC_CORE.md](Docs/SPEC_CORE.md)** — technical specification and architecture; per-module specs at [`Docs/specs/`](Docs/specs/)
- **[CHANGELOG.md](CHANGELOG.md)** — version history, contributor credits, breaking-change notes
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — dev setup, coding conventions, how to add new actions, PR process

---

## Contributing

Contributions welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). Every release [CHANGELOG](CHANGELOG.md) names the PR authors and issue reporters whose work shipped — credit goes where it's due.

---

## License

[MIT](LICENSE) — see [ATTRIBUTION.md](ATTRIBUTION.md) for credits.
