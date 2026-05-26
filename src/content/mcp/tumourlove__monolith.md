---
name: "tumourlove/monolith"
description: "Unreal Engine 5.7 editor plugin that gives AI assistants full read/write access to Blueprints, Materials, Animation, Niagara, Config, Editor, Project Index, and Engine Source via MCP. 119 actions across 9 domains. Pure C++, embedded Streamable HTTP server, no Python bridges."
description_tr: "Unreal Engine 5.7 editör eklentisi, AI asistanlarına MCP üzerinden Blueprint, Material, Animation, Niagara, Config, Editor, Project Index ve Engine Source'a tam okuma/yazma erişimi sağlar. 9 domain'de 119 aksiyon, saf C++ ile yazılmış, gömülü Streamable HTTP sunucusu, Python köprüsü yok."
category: "Gaming"
repo: "tumourlove/monolith"
stars: 126
url: "https://github.com/tumourlove/monolith"
body_length: 49491
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

## What is Monolith?

Monolith is an Unreal Engine editor plugin that gives your AI full read/write access to your project through the [Model Context Protocol (MCP)](https://modelcontextprotocol.io). Install one plugin, point your AI client at one endpoint, and it can work with Blueprints, Materials, Animation, Niagara, Audio (Sound Cues, MetaSounds), AI (Behavior Trees, State Trees, EQS, Smart Objects), Gameplay Ability System, Logic Driver state machines, project configuration, and more.

It works with **Claude Code**, **Cursor**, or any MCP-compatible client. If your AI tool speaks MCP, it speaks Monolith.

> **Platform:** Windows, macOS, Linux.

## Why Monolith?

Most MCP integrations register every action as a separate tool, which floods the AI's context window and buries the actually useful stuff. Monolith uses a **namespace dispatch pattern** instead: each domain exposes a single `{namespace}_query(action, params)` tool, and a central `monolith_discover()` call lists everything available. Small tool list (23 tools), massive capability (1344 actions across 19 in-tree namespaces; sibling plugins add their own and push the live registry higher when loaded). The AI gets oriented fast and spends its context on your actual problem.

## What Can It Actually Do?

**Blueprint (111 actions)** — Full programmatic control of every Blueprint in your project. Create from any parent class, build entire node graphs from a JSON spec, add/remove/connect/disconnect nodes in bulk, manage variables, components, functions, macros, and event dispatchers. Implement interfaces, reparent hierarchies, edit construction scripts, read/write CDO properties on any Blueprint or DataAsset. The auto-layout engine uses a modified Sugiyama algorithm so AI-generated graphs actually look clean. Compare two Blueprints side-by-side, scaffold from templates, manage user defined structs and enums. New in 0.15.0: a **dataset read/edit pack** for round-tripping DataTables, CurveTables, and StringTables — read rows with the row struct schema inline, bulk upsert with dry-run previews, row CRUD, JSON/CSV import/export, plus `seed_data_asset` to create and populate a DataAsset in one atomic call. Also new: `add_property_access` (get/set a UPROPERTY on any foreign class by name, resolved to its real type), `override_parent_function` (override an overridable parent function that returns a value), and `save_dirty_assets` to flush a batch of edits. Hand the AI a description and it builds the whole thing — or point it at an existing Blueprint and it'll surgically rewire what you need.

**Material (63 actions)** — Create materials, material instances, and material functions from scratch. Build entire PBR graphs programmatically — add expressions, connect pins, auto-layout, recompile. Drop in custom HLSL nodes. Import textures from disk and wire them directly into material slots. Batch-set properties across dozens of instances at once. Render material previews and thumbnails without leaving the AI session. Preview textures with full metadata, check tiling quality with anti-tiling analysis, batch delete expressions, clear entire graphs. Full material function support: create, build internal graphs, export/import between projects. Get compilation stats, validate for errors, inspect shader complexity. Covers the full material workflow from creation to validation.

**Animation (125 actions)** — The entire animation pipeline, end to end. Create and edit sequences with bone tracks, curves, notifies, and sync markers. Build montages with sections, slots, blending config, and anim segments. Set up 1D/2D Blend Spaces and Aim Offsets with sample points. **Animation Blueprint graph writing** — add states to state machines, create transitions, set transition rules, add and connect anim graph nodes, set state animations. As of 0.15.0, `add_anim_graph_node` resolves arbitrary concrete custom AnimGraph node classes by path or name (not just the built-in node-type aliases), so AI can wire up nodes from any plugin's `UAnimGraphNode_Base` subclass. AI can build ABP locomotion setups programmatically, not just read them. PoseSearch integration: create schemas and databases, configure channels, rebuild the search index. Control Rig graph manipulation with node wiring and variable management. Physics Asset editing for body and constraint properties. IK Rig and Retargeter support — chain mapping, solver configuration, the works. Skeleton management with sockets, virtual bones, and curves. 125 actions covering the full animation pipeline.

**Niagara (109 actions)** — Full system and emitter lifecycle — create, duplicate, configure, compile, save. Module CRUD with override-preserving reorder so you don't blow away artist tweaks. Complete dynamic input lifecycle: attach inputs, inspect the tree, read values, remove them. Event handler and simulation stage CRUD. Niagara Parameter Collections with full param management. Effect Type creation with scalability and culling configuration. Per-quality-level scalability settings. Renderer helpers for every type — mesh assignment, ribbon presets (trail, beam, lightning, tube), SubUV and flipbook setup. Data interface configuration and property inspection handles JSON arrays and structs natively. Diff two systems to see exactly what changed. Clone overrides between modules, duplicate modules, discover parameter bindings, inspect module outputs, rename user parameters. Batch execute with read-only optimization so queries don't trigger unnecessary recompiles. Full `export_system_spec` and `import_system_spec` with merge mode. As of 0.15.0, `get_system_summary` / `get_emitter_summary` take a `detail_level` for richer event-aware payloads, and `validate_system` reasons about inter-emitter event chains — thanks to @middle233's PR #60. Covers the full Niagara workflow from system creation to final polish.

**UI (138 actions)** — Widget Blueprint CRUD with full widget tree manipulation. UMG baseline plus Animation v2, EffectSurface, Spec Builder, Type Registry, hoisted Design Import, and 51 CommonUI actions (conditional on `WITH_COMMONUI`), plus 4 GAS attribute-binding aliases. 0.15.0 closed a big chunk of the MCP gap here: close-the-loop primitives (`rename_widget`, `add_widget_variable`, `audit_focus_chain`, `list_widget_property_enums`, `convert_textblock_to_common`, `dump_blueprint_compile_log` and friends), headline scaffolders (`scaffold_main_menu`, `scaffold_settings_panel_with_tabs`, `scaffold_pause_menu`, `build_menu_from_spec`), and gap-closure actions like `set_widget_navigation_bulk`, `dump_widget_navigation`, `convert_border_to_common`, `reparent_widget_root`, and `set_widget_is_variable`. Pre-built templates for common game UI: HUD elements, menus, settings panels, confirmation dialogs, loading screens, inventory grids, save slot lists, notification toasts. Style everything — brushes, fonts, color schemes, batch style operations. Create keyframed widget animations. Full game scaffolding: settings systems, save/load, audio config, input remapping, accessibility features. Run accessibility audits, set up colorblind modes, configure text scaling. Covers the full UI workflow from widget creation to accessibility.

**Editor (29 actions)** — Trigger full UBT builds or Live Coding compiles, read build errors and compiler output, search and tail editor logs, get crash context after failures. Capture preview screenshots of any asset — materials, Niagara systems, meshes. Capture multi-frame GIF sequences. Import textures, stitch flipbooks, delete assets, create blank maps from the factory, query module status, list/run UE automation tests by full-path prefix, plus a Python escape-hatch and persistent-level swap for automation flows. The AI can compile your code, read the errors, fix the C++, recompile, and verify the fix — all without you touching the editor.

**Config (6 actions)** — Full INI resolution chain awareness: Base, Platform, Project, User. Ask what any setting does, where it's overridden, what the effective value is, and how it differs from the engine default. Search across all config files at once. Perfect for performance tuning sessions where you want the AI to just sort out your INIs.

**Source (11 actions)** — Search over 1M+ Unreal Engine C++ symbols instantly. Read function implementations, get full class hierarchies, trace call graphs (callers and callees), verify include paths — all against a local index, fully offline. The native C++ indexer runs automatically on editor startup. No Python, no setup. Optionally index your project's own C++ source for the same coverage on your code. The AI never has to guess at a function signature again.

**Project (7 actions)** — SQLite FTS5 full-text search across every indexed asset in your project. Find assets by name, type, path, or content. Trace references between assets. Search gameplay tags. Get detailed asset metadata. The index updates live as assets change and covers marketplace/Fab plugin content too — 15 deep indexers registered including DataAsset subclasses.

**Mesh (194 actions)** — The biggest module by far. 194 core actions across 22 capability tiers, plus 45 procedural town generation actions that are disabled by default (work-in-progress, and unless you're willing to dig in and help improve it, best left alone for now — they're not in the advertised public count). Mesh inspection and comparison. Full actor CRUD with scene manipulation. Physics-based spatial queries (raycasts, sweeps, overlaps) that work in-editor without PIE. Level blockout workflow with auto-matching and atomic replacement. GeometryScript mesh operations (boolean, simplify, remesh, LOD gen, UV projection). Horror spatial analysis — sightlines, hiding spots, ambush points, zone tension, pacing curves (WIP). Accessibility validation with A-F grading. Lighting analysis (WIP), audio/acoustics with Sabine RT60 and stealth maps (WIP), performance budgeting (WIP). Decal placement with storytelling presets. Level design tools for lights, volumes, sublevels, prefabs, HISM instancing. Tech art pipeline for mesh import (now with optional skeletal-mesh + animation import via `import_mesh`, thanks to @4698to's PR #58), LOD gen, texel density, collision authoring. Context-aware prop scatter on any surface. Procedural geometry — parametric furniture (15 types), horror props (7 types), architectural structures, mazes, pipes, terrain. Genre preset system for any game type. Encounter design with patrol routes, safe room evaluation, and scare sequence generation. Full accessibility reporting.

**GAS (135 actions)** — Complete Gameplay Ability System integration. 131 GAS-namespace actions plus 4 widget attribute-binding actions also aliased into the `ui` namespace. Create and manage Gameplay Abilities with activation policies, cooldowns, costs, and tags. Full AttributeSet CRUD — both C++ and Blueprint-based (via optional GBA plugin). Ships with `ULeviathanVitalsSet` AttributeSet template (Phase J F4) so projects without GBA still get a working starter set. Gameplay Effect authoring with modifiers, duration policies, stacking, period, and conditional application. Ability System Component (ASC) management — grant/revoke abilities, apply/remove effects, query active abilities and effects. Gameplay Tag utilities. Gameplay Cue management — create, trigger, inspect cues for audio/visual feedback. Target data generation and targeting tasks. Input binding for ability activation. Runtime inspection and debugging tools. Scaffolding actions that generate complete GAS setups from templates. Accessibility-focused infinite-duration GEs for reduced difficulty modes.

**AI (221 actions)** — The most comprehensive AI tooling available through any MCP server. Full lifecycle management for Behavior Trees, Blackboards, State Trees, Environment Query System (EQS), Smart Objects, AI Controllers, AI Perception, Navigation, and runtime debugging. Crown jewel actions: `build_behavior_tree_from_spec` and `build_state_tree_from_spec` — hand the AI a JSON description of your desired AI behavior and it builds the entire asset programmatically. Phase J shipped BT crash hardening (F1) and BT graph + perception inspection helpers (F8). Create BT nodes (tasks, decorators, services), wire them into trees, configure blackboard keys, set up EQS queries with generators and tests, define Smart Object slots with behavior configs, configure perception senses (sight, hearing, damage, touch), manage navigation filters and query filters, inspect and debug AI at runtime during PIE. Scaffolding actions generate complete AI setups from templates — patrol AI, combat AI, companion AI, and more. 221 actions across 15 categories. Conditional on State Tree and Smart Objects plugins (both ship with UE) — gated via `WITH_STATETREE` and `WITH_SMARTOBJECTS` (Phase J F22 retrofit). Optional Mass Entity and Zone Graph integration for large-scale AI.

**Logic Driver (66 actions)** — Full integration with Logic Driver Pro, a marketplace state machine plugin. State machine CRUD — create, inspect, compile, delete. Graph read/write — add states, transitions, configure properties, set transition rules. Node configuration for state nodes, conduit nodes, and transition events. Runtime/PIE control — start, stop, query active states, trigger transitions. One-shot `build_sm_from_spec` builds complete state machines from a JSON specification. JSON spec import/export for templating and version control. Scaffolding actions generate common patterns (door controller, health system, AI patrol, dialogue system, elevator, puzzle, inventory). Component management — add/configure Logic Driver components on actors. Text graph visualization for debugging. Discovery actions list available node classes and templates. Reflection-only integration (no direct C++ API linkage) — works with any Logic Driver Pro version. Conditional on `#if WITH_LOGICDRIVER` — auto-detected at build time.

**ComboGraph (13 actions)** — Integration with the ComboGraph marketplace plugin for visual combo tree editing. Graph CRUD — create, inspect, validate combo graphs. Node and edge management — add combo nodes with montage animations, wire them with edges, configure effects and cues. GAS cross-integration — scaffold combo abilities that bridge ComboGraph with Gameplay Ability System. Reflection-only integration, conditional on `#if WITH_COMBOGRAPH`.

**Audio (98 actions)** — Editor-time audio asset authoring across the full UE audio pipeline. 82 baseline audio-namespace actions plus 4 perception-binding actions (`bind_sound_to_perception` and friends, Phase J integration) plus 12 v0.14.10 MetaSound document introspection actions (PR #18 by @alakangas — read-side complement to the existing Builder API). Full CRUD on the 5 configurable audio asset types — SoundAttenuation, SoundClass, SoundMix, SoundConcurrency, SoundSubmix. Sound Cue graph construction — add nodes (22 types), wire them, set properties via reflection. MetaSound Builder API integration for programmatic MetaSound authoring — nodes, pins, graph inputs/outputs, interfaces, variables. MetaSound document introspection (v0.14.10) for read-only inspection of any on-disk MetaSound asset — list, document walk, summary, node instance details, connections, variables, user parameters, search, info, dependencies, validation. Crown jewels: `build_sound_cue_from_spec` and `build_metasound_from_spec` — declarative JSON-to-graph in a single call. Batch operations for class/attenuation/submix/concurrency/compression/looping/virtualization across dozens of assets at once. Audio health checks — find unused sounds, missing attenuation, unassigned classes. Built-in `create_test_wave` (Phase J F18) generates a sine SoundWave on demand for diagnostic work. Phase J F11 added a hardened audio asset validator. Five template Sound Cues (random, layered, looping ambient, distance crossfade, switch) and four template MetaSounds (oneshot SFX, looping ambient, synth tone, interactive). SoundWave inspection is read-only; reflection-based property edits still work for batch sound wave tuning. MetaSound features gated on `#if WITH_METASOUND` — graceful degradation when absent.

---

## Features

- **Blueprint (111 actions)** — Full CRUD, node graph manipulation, JSON-to-Blueprint building, auto-layout (Sugiyama), CDO property access, structs, enums, template system, Blueprint comparison, cross-class property get/set, parent-function overrides. Includes a 0.15.0 dataset read/edit pack (DataTable/CurveTable/StringTable round-trip + `seed_data_asset`). Works as a complete Blueprint co-pilot with any MCP client
- **Material authoring (63 actions)** — Programmatic PBR graph building, custom HLSL, material functions, texture import, batch operations, preview rendering, compilation stats, tiling quality analysis, texture preview
- **Animation (125 actions)** — Sequences, montages, blend spaces, Animation Blueprint graph writing (add states, transitions, rules, wire nodes — including arbitrary custom `UAnimGraphNode_Base` classes via `add_anim_graph_node`), PoseSearch, Control Rig, Physics Assets, IK Rigs, Retargeters, skeleton management
- **Niagara VFX (109 actions)** — System/emitter lifecycle, dynamic inputs, event handlers, sim stages, Parameter Collections, Effect Types, scalability settings, renderer presets, data interfaces, system diffing, batch execute, event-aware summaries + `validate_system` event-chain reasoning (`detail_level`, 0.15.0)
- **Mesh (194 actions)** — 22 capability tiers: mesh inspection, scene manipulation, spatial queries, blockout-to-production, GeometryScript ops, horror spatial analysis (WIP), accessibility validation (A-F grading), lighting (WIP), audio/acoustics (WIP), performance budgeting (WIP), decals, level design, tech art pipeline (mesh import now supports optional skeletal-mesh + animation import via `import_mesh`, PR #58 by @4698to), context-aware props, procedural geometry (furniture, horror props, structures, mazes, terrain), genre presets, encounter design, accessibility reports. +45 town gen actions (work-in-progress, disabled by default, not in the public count)
- **AI (221 actions)** — Behavior Trees, Blackboards, State Trees, EQS, Smart Objects, AI Controllers, Perception, Navigation, runtime debugging, scaffolding. Crown jewels: `build_behavior_tree_from_spec` and `build_state_tree_from_spec`. Gated on `WITH_STATETREE` + `WITH_SMARTOBJECTS` (Phase J F22)
- **GAS (135 actions)** — Full Gameplay Ability System: abilities, AttributeSets (C++ + `ULeviathanVitalsSet` template; Blueprint sets via optional GBA), Gameplay Effects, ASC management, tags, cues, targeting, input binding, runtime inspection, scaffolding templates, accessibility-focused infinite-duration GEs. 4 attribute-binding actions surface in the `ui` namespace as aliases
- **Logic Driver (66 actions)** — Logic Driver Pro state machines: SM CRUD, graph read/write, node config, runtime/PIE, `build_sm_from_spec`, JSON spec, scaffolding (door, health, AI patrol, dialogue, elevator, puzzle, inventory), component management
- **ComboGraph (13 actions)** — ComboGraph combo trees: graph CRUD, nodes, edges, effects, cues, GAS cross-integration, ability scaffolding
- **Audio (98 actions)** — Sound asset CRUD (SoundAttenuation, SoundClass, SoundMix, SoundConcurrency, SoundSubmix), Sound Cue graph building, MetaSound Builder API + document introspection (conditional on `WITH_METASOUND`; v0.14.10 +12 introspection actions from PR #18 by @alakangas), batch ops, audio health checks, `build_sound_cue_from_spec`, `build_metasound_from_spec`, `apply_audio_template`, template cues + MetaSounds, sine-wave test asset factory, AI perception sound binding
- **UI (138 actions)** — UMG baseline + 51 CommonUI (gated on `WITH_COMMONUI`, shipped v0.14.0) + 4 GAS attribute-binding aliases, plus the 0.15.0 gap-closure sweep: close-the-loop primitives, headline scaffolders (`scaffold_main_menu`, `scaffold_settings_panel_with_tabs`, `scaffold_pause_menu`, `build_menu_from_spec`), and navigation/conversion actions (`set_widget_navigation_bulk`, `dump_widget_navigation`, `convert_border_to_common`, `reparent_widget_root`, `set_widget_is_variable`). Widget Blueprint CRUD, pre-built templates (HUDs, menus, settings, inventory, save slots), styling, animation, game system scaffolding (save/load, audio, input remapping), accessibility audit, colorblind modes, text scaling
- **Editor control (29 actions)** — UBT builds, Live Coding, error diagnosis, log search, scene capture, GIF capture, texture import, crash context, blank map factory, module status, automation test list/run, Python escape-hatch, persistent-level swap
- **Config intelligence (6 actions)** — Full INI resolution chain, explain, diff, search across all config files
- **Project search (7 actions)** — SQLite FTS5 across all indexed assets including marketplace/Fab content, reference tracing, 15 deep indexers
- **Engine source (11 actions)** — Native C++ indexer over 1M+ symbols, call graphs, class hierarchy, offline — no Python required. Auto-reindex on hot-reload (Phase J F17)
- **Standalone C++ tools** — `monolith_proxy.exe` (MCP proxy) and `monolith_query.exe` (offline DB queries) — zero Python, zero UE dependency, instant startup
- **Auto-updater** — Off by default as of v0.14.6. When enabled, checks GitHub Releases on editor startup, verifies SHA256 against the release notes marker, downloads and stages updates, auto-swaps on exit
- **MCP auto-reconnect proxy** — stdio-to-HTTP proxy keeps Claude Code sessions alive across editor restarts. Available as native exe (zero dependencies) or Python script (fallback)
- **Optional module system** — Extend Monolith with new MCP namespaces for third-party plugins (GeometryScripting, BlueprintAssist, GBA, ComboGraph, Logic Driver, MetaSound) without breaking the build for users who don't own them. The sibling-plugin pattern lets you ship your own integration plugin alongside Monolith — see `Docs/SIBLING_PLUGIN_GUIDE.md`
- **Claude Code skills** — 16 domain-specific workflow guides bundled with the plugin
- **Bulk-fill + describe ergonomics framework** — `bulk_fill_query` (`apply` / `list_namespaces`) and `describe_query` (`schema` / `list_targets`) route through a reflection-walker to 12 per-namespace adapters, so your AI can populate or inspect deeply-nested property trees in a single call with dry-run previews (per-field writes, silent drops, clamps, errors). One mental model for bulk authoring across blueprint, gas, ui, ai, niagara, material, audio, mesh, animation, logicdriver, combograph, and the ISX sibling. `describe_query("action_schema")` returns any registered action's full param schema so callers stop guessing param names
- **`monolith_guide()`** — Section-keyed editorial onboarding guide for your AI agent: an onboarding script, worked cross-namespace recipes, X-vs-Y decision matrices, error-to-recovery maps, a skills map, and Monolith-specific gotchas — plus a live registry overlay so the action counts always match your running build. Pull a single section (`monolith_guide(section="recipes")`) to bound context cost. Built for users with no project `CLAUDE.md` or private skills — point your AI at it and it self-onboards. Hand-authored markdown + live counts; offline CLI parity. Error messages now self-describe their recovery steps inline
- **Pure C++** — Direct UE API access, embedded HTTP MCP server, zero external dependencies

---

## Installation

### Prerequisites

- **Unreal Engine 5.7+** — Launcher or source build ([unrealengine.com](https://unrealengine.com))

> **Platform:** Windows, macOS, Linux.

- **Claude Code, Cursor, or another MCP client** — Any tool that supports the Model Context Protocol
- **(Optional) Python 3.8+** — Only needed to index your own project's C++ source via `Scripts/index_project.py`. Engine source indexing is built-in and needs no Python. The MCP proxy and offline query tools are now standalone C++ executables — Python is no longer required for any core functionality.

### Step 1: Drop Monolith into your project

Every Unreal project has a `Plugins/` folder. If yours doesn't have one yet, create it next to your `.uproject` file:

```
YourProject/
  YourProject.uproject
  Content/
  Source/
  Plugins/          <-- here
    Monolith/
```

**Option A: Git clone (recommended)**

```bash
cd YourProject/Plugins
git clone https://github.com/tumourlove/monolith.git Monolith
```

**Option B: Download ZIP**

Grab the latest release from [GitHub Releases](https://github.com/tumourlove/monolith/releases), extract it, and drop the folder at `YourProject/Plugins/Monolith/`. The release ZIP includes precompiled DLLs — Blueprint-only projects can open the editor immediately without rebuilding. C++ projects should rebuild first.

**Option C: Let your AI do it**

If you're already in a Claude Code, Cursor, or Cline session, just say:

> "Install the Monolith plugin from https://github.com/tumourlove/monolith into my project's Plugins folder"

It'll clone the repo, create `.mcp.json`, and configure everything. After it's done, **restart your AI session** so it picks up the new `.mcp.json`, then skip to [Step 3](#step-3-open-the-editor).

### Step 2: Create `.mcp.json`

This file tells your AI client where to find Monolith's MCP server. Create it in your **project root** — same directory as your `.uproject`:

```
YourProject/
  YourProject.uproject
  .mcp.json          <-- create this
  Plugins/
    Monolith/
```

**For Claude Code (recommended: auto-reconnect proxy)**

Monolith ships with a stdio-to-HTTP proxy that keeps your MCP session alive when the Unreal Editor restarts. No manual reconnection needed. The proxy is available as a **standalone C++ executable** (zero dependencies) or a Python script (fallback).

**Option A: Native C++ proxy — Windows only (no Python required)**

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

**Option B: Python proxy (fallback — works on all platforms)**

Requires Python 3.8+ ([python.org](https://python.org)).

Windows:
```json
{
  "mcpServers": {
    "monolith": {
      "command": "Plugins/Monolith/Scripts/monolith_proxy.bat",
      "args": []
    }
  }
}
```

macOS / Linux:
```json
{
  "mcpServers": {
    "monolith": {
      "command": "Plugins/Monolith/Scripts/monolith_proxy.sh",
      "args": []
    }
  }
}
```

> **No proxy?** Use direct HTTP instead — you'll just need to restart Claude Code each time the editor restarts:
> ```json
> {"mcpServers": {"monolith": {"type": "http", "url": "http://localhost:9316/mcp"}}}
> ```

**For Cursor / Cline:**

```json
{
  "mcpServers": {
    "monolith": {
      "type": "streamableHttp",
      "url": "http://localhost:9316/mcp"
    }
  }
}
```

> Cursor and Cline handle server restarts natively — the proxy isn't needed.

### Step 3: Open the editor

Open your `.uproject` as normal. On first launch:

1. Monolith auto-indexes your project (30-60 seconds depending on size — go get a coffee)
2. Open the **Output Log** (Window > Developer Tools > Output Log)
3. Filter for `LogMonolith` — you'll see the server start up and the index complete

When you see `Monolith MCP server listening on port 9316`, you're in business.

### Step 4: Connect your AI

1. Open **Claude Code** (or your MCP client) from your project directory — the one with `.mcp.json`
2. Claude Code auto-detects `.mcp.json` on startup and connects to Monolith
3. Sanity check: ask *"What Monolith tools do you have?"*

You should get back a list of namespace tools (`blueprint_query`, `material_query`, etc.). If you do, everything's working.

### Step 5: Add project instructions for your AI

Different AI coding assistants use different conventions for project-instructions files (`CLAUDE.md` for Claude Code, `AGENTS.md` for Codex, `.cursorrules` for Cursor, `.github/copilot-instructions.md` for Copilot, plus a long tail). Those conventions evolve faster than a static template can keep up — so rather than ship a template that grows stale, the recommended workflow is to ask your AI directly.

Practical prompt to feed your assistant once Monolith is installed and running:

> *"I've installed the Monolith Unreal plugin. It exposes ~1344 actions across 19 namespaces (`blueprint`, `material`, `animation`, `niagara`, `mesh`, `ui`, `gas`, `ai`, `audio`, etc.) over an in-process MCP HTTP listener at `http://localhost:9316/mcp`. What's the best-practice format for a project-instructions file for [your assistant — e.g. `CLAUDE.md`, `AGENTS.md`, `.cursorrules`]? It should help with action discovery via `monolith_discover()` and `monolith_guide()`, asset-path conventions like `/Game/Path/Asset`, and verifying UE 5.7 APIs via `source_query` before writing code."*

Whatever your AI generates, drop it at the appropriate path for your toolchain. The action counts and workflow notes from this README's earlier sections are usable input.

### Step 6: (Optional) Index your project's C++ source

Engine source indexing is automatic — `source_query` works immediately with no setup.

If you also want your AI to search your **own project's C++ source** (find callers, callees, and class hierarchies across your own code):

1. Install **Python 3.10+**
2. Run `python Plugins/Monolith/Scripts/index_project.py` from your project root
3. Your project source gets indexed into `EngineSource.db` alongside engine symbols
4. To re-run the indexer without leaving the editor: `source_query("trigger_project_reindex")`

### Verify it's alive

With the editor running, hit this from any terminal:

```bash
curl -X POST http://localhost:9316/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

You'll get a JSON response listing all Monolith tools. If you get "connection refused", the editor isn't running or something went sideways — check the Output Log for `LogMonolith` errors.

### (Optional) Install Claude Code skills

Monolith ships domain-specific workflow skills for Claude Code:

```bash
cp -r Plugins/Monolith/Skills/* ~/.claude/skills/
```

---

## Architecture

```
Monolith.uplugin
  MonolithCore          — HTTP server, tool registry, discovery, auto-updater, monolith_guide, bulk_fill + describe ergonomics framework (monolith meta 5 + bulk_fill 2 + describe 3 actions)
  MonolithBlueprint     — Blueprint read/write, variable/component/graph CRUD, node operations, compile, CDO reader, dataset read/edit pack (DataTable/CurveTable/StringTable) (111 actions)
  MonolithMaterial      — Material inspection + graph editing + CRUD + material functions + tiling quality (63 actions)
  MonolithAnimation     — Animation sequences, montages, ABPs (incl. custom anim-graph nodes), PoseSearch, IKRig, Control Rig (125 actions)
  MonolithNiagara       — Niagara particle systems, dynamic inputs, event handlers, sim stages, event-aware summaries, scalability (109 actions)
  MonolithMesh          — Mesh inspection, scene manipulation, spatial queries, blockout, procedural geometry, horror/accessibility (194 core actions + 45 experimental town gen, off by default)
  MonolithAI            — Behavior Trees, Blackboards, State Trees, EQS, Smart Objects, Controllers, Perception, Navigation (221 actions)
  MonolithEditor        — Build triggers, log capture, compile output, crash context, GIF capture, blank map factory, module status, automation test list/run, Python escape-hatch, level swap (29 actions)
  MonolithConfig        — Config/INI resolution and search (6 actions)
  MonolithIndex         — SQLite FTS5 deep project indexer, marketplace content, 15 asset indexers (7 actions)
  MonolithSource        — Native C++ engine source indexer, call graphs, class hierarchy, hot-reload-aware reindex (11 actions)
  MonolithUI            — UI widget Blueprint CRUD, templates, styling, animation v1+v2, EffectSurface, Spec Builder, Type Registry, CommonUI, scaffolders + gap-closure (138 actions)
  MonolithGAS           — Gameplay Ability System: abilities, effects, attributes, ASC, tags, cues, targeting, ULeviathanVitalsSet template (135 actions)
  MonolithLogicDriver   — Logic Driver Pro state machines: SM CRUD, graph read/write, JSON spec, scaffolding (66 actions)
  MonolithComboGraph    — ComboGraph combo trees: graph CRUD, nodes, edges, effects, cues (13 actions)
  MonolithAudio         — Audio asset CRUD, Sound Cue + MetaSound graph building + document introspection, batch ops, templates, AI perception binding, sine test wave (98 actions)
  MonolithAudioRuntime  — Runtime sub-module supplying perception classes for audio.bind_sound_to_perception (0 MCP actions)
  MonolithBABridge      — Blueprint Assist integration bridge (0 MCP actions — IModularFeatures only)
  MonolithLevelSequence — Level Sequence introspection: full per-LS binding inventory (legacy Possessable/Spawnable + UE 5.7 UMovieSceneCustomBinding family), Director Blueprint functions/variables, event-track bindings, cross-sequence reverse lookup (8 actions)

Standalone Tools (in Binaries/)
  monolith_proxy.exe    — MCP stdio-to-HTTP proxy (zero UE dependency, WinHTTP + nlohmann/json)
  monolith_query.exe    — Offline DB query tool (zero UE dependency, sqlite3 amalgamation)
```

**1344 actions across 19 in-tree namespaces, exposed through 23 MCP tools (16 namespace dispatchers + `bulk_fill_query` + `describe_query` + 5 `monolith_*` meta-tools). The `ui` namespace double-counts 4 aliased GAS attribute-binding actions in that headline figure. 45 town-gen experimental actions are disabled by default (`bEnableProceduralTownGen=false`); enabling them brings the in-tree registry to 1389.** This count EXCLUDES sibling-plugin actions — `MonolithISX`, `MonolithSteamBridge`, `MonolithSubstance`, and `MonolithClaudeDesignBridge` ship in their own repos and are not in the public release zip. Live editors with sibling plugins loaded report higher counts.

### Tool Reference

| Namespace | Tool | Actions | Description |
|-----------|------|---------|-------------|
| `monolith` | `monolith_discover` | — | List available actions per namespace |
| `monolith` | `monolith_status` | — | Server health, version, index status |
| `monolith` | `monolith_reindex` | — | Trigger full project re-index |
| `monolith` | `monolith_update` | — | Check or install updates |
| `monolith` | `monolith_guide` | — | Section-keyed onboarding guide for your AI (onboarding / recipes / decisions / errors / skills_map / gotchas) with a live registry overlay |
| `blueprint` | `blueprint_query` | 111 | Full Blueprint CRUD — read/write graphs, variables, components, functions, nodes, compile, CDO properties, auto-layout, dataset read/edit pack (DataTable/CurveTable/StringTable + `seed_data_asset`), cross-class property access, parent-function overrides |
| `material` | `material_query` | 63 | Inspection, editing, graph building, material functions, previews, validation, tiling quality, texture preview, CRUD |
| `animation` | `animation_query` | 125 | Montages, blend spaces, ABPs, skeletons, bone tracks, PoseSearch, IKRig, Control Rig, ABP/ControlRig writes, custom anim-graph nodes |
| `niagara` | `niagara_query` | 109 | Systems, emitters, modules, parameters, renderers, HLSL, dynamic inputs, event handlers, sim stages, effect types, scalability, event-aware summaries + `validate_system` event-chain reasoning |
| `mesh` | `mesh_query` | 194 (+45) | Mesh inspection, scene manipulation, spatial queries, blockout, GeometryScript, horror analysis, lighting, audio, performance, procedural geometry, encounter design, mesh import (incl. skeletal + animation). Town gen 45 actions registered only when `bEnableProceduralTownGen=true` (not in the public count) |
| `ai` | `ai_query` | 221 | BT, BB, State Trees, EQS, Smart Objects, Controllers, Perception, Navigation, runtime debugging, scaffolding. Conditional on `WITH_STATETREE` + `WITH_SMARTOBJECTS` |
| `gas` | `gas_query` | 135 | Gameplay Ability System — abilities, effects, attributes (incl. `ULeviathanVitalsSet`), ASC, tags, cues, targeting, input, inspect, scaffold. Conditional on `WITH_GBA` for Blueprint AttributeSets |
| `logicdriver` | `logicdriver_query` | 66 | Logic Driver Pro state machines — SM CRUD, graph read/write, JSON spec, scaffolding, components. Conditional on `WITH_LOGICDRIVER` |
| `combograph` | `combograph_query` | 13 | ComboGraph combo trees — graph CRUD, nodes, edges, effects, cues, ability scaffolding. Conditional on `WITH_COMBOGRAPH` |
| `audio` | `audio_query` | 98 | Sound asset CRUD, Sound Cue + MetaSound graph building (Builder API write-side), MetaSound document introspection (read-side, v0.14.10 +12 from PR #18 by @alakangas), batch ops, audio health checks, templates, sine test wave, AI perception binding. MetaSound features conditional on `WITH_METASOUND` |
| `ui` | `ui_query` | 138 | UMG widget CRUD, templates, styling, animation v1+v2, EffectSurface, Spec Builder, Type Registry, settings scaffolding, headline scaffolders, navigation/conversion gap-closure, accessibility. CommonUI 51 actions conditional on `WITH_COMMONUI`. 4 GAS attribute-binding aliases also live here |
| `editor` | `editor_query` | 29 | Build triggers, error logs, compile output, crash context, scene capture, GIF capture, texture import, blank map factory, module status, UE automation test list/run, Python escape-hatch, persistent-level swap |
| `config` | `config_query` | 6 | INI resolution, explain, diff, search |
| `project` | `project_query` | 7 | Deep project search — FTS5 across all indexed assets including marketplace plugins |
| `source` | `source_query` | 11 | Native C++ engine source lookup, call graphs, class hierarchy, project reindex, hot-reload-aware refresh |
| `bulk_fill` | `bulk_fill_query` | 2 | Reflection-walker bulk property fill across 12 per-namespace adapters — `apply` (dry-run-able tree write), `list_namespaces` |
| `describe` | `describe_query` | 3 | Read-only schema introspection for the same 12 adapters — `schema`, `list_targets`, `action_schema` (any registered action's full param schema) |
| `level_sequence` | `level_sequence_query` | 8 | Level Sequence inspection: full binding inventory (one row per Guid×BindingIndex with kind classification — legacy Possessable/Spawnable + UE 5.7 UMovieSceneSpawnableActorBinding / Replaceable / Custom), Director Blueprint own functions (user / custom_event / sequencer_endpoint) and variables, event-track bindings with Director-function resolution, cross-sequence reverse lookup of function callers |

---

## Standalone Tools

Monolith ships two standalone C++ executables that work without the Unreal Editor, without Python, and without any external dependencies. Both are in `Binaries/` and included in every release.

### monolith_proxy.exe — MCP Proxy

A stdio-to-HTTP proxy that keeps Claude Code MCP sessions alive across editor restarts. Full feature parity with the Python `monolith_proxy.py`:

- JSON-RPC message handling with editor query splitting
- Background health poll with `notifications/tools/list_changed`
- Stable cached/seed `tools/list` response when the editor is down at AI-client startup
- Tool deduplication and action allowlist/denylist
- Built with WinHTTP + nlohmann/json, zero UE dependency

**Usage:** Set as the MCP command in `.mcp.json`:

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

**Migrating from Python proxy:** Replace `{"command": "python", "args": ["Plugins/Monolith/Scripts/monolith_proxy.py"]}` with the config above. The Python scripts remain as deprecated fallbacks.

**Source:** `Tools/MonolithProxy/monolith_proxy.cpp`

### monolith_query.exe — Offline Query Tool

A standalone database query tool that replaces both `monolith_offline.py` and the old `MonolithQueryCommandlet`. Instant startup (no 6+ second UE engine load), queries `EngineSource.db` and `ProjectIndex.db` directly.

**14 actions:** 9 source (search_source, read_source, find_callers, find_callees, find_references, get_class_hierarchy, get_module_info, get_symbol_context, read_file) + 5 project (search, find_by_type, find_references, get_stats, get_asset_details)

**Usage:**

```bash
# Engine source queries
Plugins/Monolith/Binaries/monolith_query.exe source search_source FCharacterMovementComponent --limit=5
Plugins/Monolith/Binaries/monolith_query.exe source read_source ACharacter --max-lines=50
Plugins/Monolith/Binaries/monolith_query.exe source get_class_hierarchy ACharacter --depth=3 --direction=down

# Project asset queries (JSON output)
Plugins/Monolith/Binaries/monolith_query.exe project search damage --limit=10
Plugins/Monolith/Binaries/monolith_query.exe project find_by_type Blueprint --limit=20
Plugins/Monolith/Binaries/monolith_query.exe project get_stats
```

Auto-detects database paths relative to exe location. No configuration needed.

**Source:** `Tools/MonolithQuery/monolith_query.cpp` (1080 lines)

### Building from Source

Both tools use standard C/C++ with no UE dependency:

```bash
# Proxy (requires WinHTTP, nlohmann/json header-only)
cl /O2 /EHsc /std:c++17 Tools/MonolithProxy/monolith_proxy.cpp /Fe:Binaries/monolith_proxy.exe winhttp.lib

# Query tool (sqlite3 amalgamation bundled)
cl /O2 /EHsc /std:c++17 Tools/MonolithQuery/monolith_query.cpp /Fe:Binaries/monolith_query.exe
```

Precompiled binaries are included in every release — building from source is only needed if you want to modify the tools.

---

## Auto-Updater

Monolith can check for new versions on editor startup so you don't have to babysit GitHub. **Off by default** as of v0.14.6 — opt in if you want it.

1. **Opt in** — Tick **Auto Update Enabled** in Editor Preferences > Plugins > Monolith
2. **On editor startup** — Checks GitHub Releases for a newer version
3. **Downloads and verifies** — If an update is found, it downloads the zip and verifies the SHA256 hash against the `Monolith-SHA256:` marker in the release notes. Mismatch aborts the install.
4. **Auto-swaps on exit** — The plugin is replaced when you close the editor (after a Y/N prompt in the swap script)
5. **Manual check** — `monolith_update` tool to check anytime
6. **Releases without a SHA256 marker** — log a warning and proceed without integrity check (legacy releases do not have markers; future-only releases will hard-fail without one)

See [the wiki Auto-Updater page](https://github.com/tumourlove/monolith/wiki/Auto-Updater) for full details.

---

## Network Exposure

Monolith starts a local HTTP server on port 9316 to receive MCP traffic from AI assistants. UE's `FHttpServerModule` does **not** expose a bind-address parameter, so the listener is reachable on all network interfaces, not just `127.0.0.1`. CORS is restricted to localhost origins (`http(s)://localhost`, `127.0.0.1`, `[::1]`), which blocks browser-based cross-origin reads, but does **not** block direct HTTP requests from other devices on the same LAN.

If you work on an untrusted network, choose one of:

- **Add a Windows Firewall rule** blocking inbound TCP on port 9316 from non-loopback addresses, OR
- **Disable the server** by unticking **MCP Server Enabled** in Editor Preferences > Plugins > Monolith and restarting the editor.

See [SECURITY.md](SECURITY.md) for the full threat model and disclosure policy.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| **Plugin doesn't appear in editor** | Verify the folder is at `YourProject/Plugins/Monolith/` and contains `Monolith.uplugin`. Check you're on UE 5.7+. |
| **MCP connection refused** | Make sure the editor is open and running. Check Output Log for port conflicts. Verify `.mcp.json` is in your project root. |
| **Index shows 0 assets** | Run `monolith_reindex` or restart the editor. Check Output Log for indexing errors. |
| **Source tools return empty results** | Run `monolith_reindex()` and wait for completion, then retry. Engine source indexing is built-in — if results are still empty, check the Output Log for `LogMonolith` errors. |
| **Claude can't find any tools** | Check `.mcp.json` transport type: Claude Code uses `"http"`, Cursor/Cline use `"streamableHttp"`. Restart your AI client after creating the file. |
| **Tools fail on first try** | Restart Claude Code to refresh the MCP connection. Known quirk with initial connection timing. |
| **Port 9316 already in use** | Change the port in Editor Preferences > Plugins > Monolith, then update `.mcp.json` to match. |
| **Proxy says "Python 3 not found"** | On Windows, switch to the C++ proxy (`monolith_proxy.exe`) — no Python needed. On macOS/Linux, install Python 3.8+ and ensure `python3` is on your PATH. |
| **monolith_query.exe returns no results** | The exe looks for databases relative to its own location. Make sure `Saved/Monolith/EngineSource.db` and `Saved/Monolith/ProjectIndex.db` exist (created on first editor launch). |
| **macOS: `monolith_proxy.sh` permission denied** | Make sure the script is executable: `chmod +x Plugins/Monolith/Scripts/monolith_proxy.sh`. |
| **macOS/Linux: native C++ proxy not available** | The prebuilt `monolith_proxy.exe` is Windows-only for now. Use the Python proxy (`monolith_proxy.sh`) — same protocol, same features. |

---

## Configuration

Settings live at **Editor Preferences > Plugins > Monolith**:

| Setting | Default | Description |
|---------|---------|-------------|
| MCP Server Port | `9316` | Port for the embedded HTTP server |
| Auto-Update | `Off` (as of v0.14.6) | Check GitHub Releases on editor startup. Opt-in. |
| Module Toggles | All enabled | Enable/disable individual domain modules |
| Database Path | Project-local | Override SQLite database storage location |
| Index Marketplace Plugins | `On` | Index content from installed marketplace/Fab plugins |
| Index Data Assets | `On` | Deep-index DataAsset subclasses (15 indexers) |
| Additional Content Paths | `[]` | Extra content paths to include in the project index |
| Enable Procedural Town Gen | `Off` | **Work-in-progress** — 45 additional mesh actions for procedural building/town generation. Very much a WIP; unless you're willing to dig in and help improve it, best left alone for now |
| Enable GAS | `On` | Gameplay Ability System integration (135 actions, requires GameplayAbilities plugin) |
| Enable Logic Driver | `On` | Logic Driver Pro state machine integration (66 actions, requires Logic Driver Pro marketplace plugin) |
| Enable ComboGraph | `On` | ComboGraph combo tree integration (13 actions, requires ComboGraph marketplace plugin) |
| Enable Blueprint Assist | `On` | Blueprint Assist integration for enhanced auto_layout (requires BA marketplace plugin) |

---

## Skills

Monolith bundles 16 Claude Code skills in `Skills/` — domain-specific workflow guides that give your AI the right mental model for each area:

| Skill | Description |
|-------|-------------|
| `unreal-blueprints` | Full Blueprint CRUD — read, create, edit variables/components/functions/nodes, compile |
| `unreal-materials` | PBR setup, graph building, validation |
| `unreal-animation` | Montages, ABP state machines, blend spaces |
| `unreal-niagara` | Particle system creation, HLSL modules, scalability |
| `unreal-audio` | Sound Cue + MetaSound graph building, audio asset CRUD, batch ops, templates |
| `unreal-mesh` | Mesh inspection, spatial queries, blockout, procedural geometry, horror/accessibility |
| `unreal-ui` | Widget Blueprint CRUD, templates, styling, accessibility |
| `unreal-gas` | Gameplay Ability System — abilities, effects, attributes, ASC, tags, cues |
| `unreal-logicdriver` | Logic Driver Pro state machines — SM CRUD, graph editing, JSON spec, scaffolding |
| `unreal-combograph` | ComboGraph combo trees — graph CRUD, nodes, edges, effects, ability scaffolding |
| `unreal-level-sequences` | Level Sequence inspection — full binding inventory (legacy + UE 5.7 custom bindings), Director Blueprint functions/variables, event-track bindings, cross-sequence reverse lookup |
| `unreal-debugging` | Build errors, log search, crash context |
| `unreal-performance` | Config auditing, shader stats, INI tuning |
| `unreal-project-search` | FTS5 search syntax, reference tracing |
| `unreal-cpp` | API lookup, include paths, Build.cs gotchas |
| `unreal-build` | Smart build decision-making, Live Coding vs full rebuild |

---

## Documentation

- [API_REFERENCE.md](Docs/API_REFERENCE.md) — Full action reference with parameters
- [SPEC_CORE.md](Docs/SPEC_CORE.md) — Technical specification and design decisions (per-module specs under [Docs/specs/](Docs/specs/))
- [CONTRIBUTING.md](CONTRIBUTING.md) — Dev setup, coding conventions, PR process
- [CHANGELOG.md](CHANGELOG.md) — Version history and release notes
- [Wiki](https://github.com/tumourlove/monolith/wiki) — Installation guides, test status, FAQ

---

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for dev environment setup, coding conventions, how to add new actions, and the PR process.

---

## License

[MIT](LICENSE) — See [ATTRIBUTION.md](ATTRIBUTION.md) for credits.
