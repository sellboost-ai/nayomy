---
name: "impeccable"
description_en: "Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing pages, dashboards, product UI, app shells, components, forms, settings, onboarding, and empty states. Handles UX review, visual hierarchy, information architecture, cognitive load, acc"
category: "Design"
repo: "pbakaus/impeccable"
stars: 38882
url: "https://github.com/pbakaus/impeccable/blob/HEAD/.agents/skills/impeccable/SKILL.md"
path: ".agents/skills/impeccable/SKILL.md"
is_collection: false
body_length: 20049
has_scripts: true
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # İmparable

  Üretim kalitesinde ön uç arayüzleri tasarlar ve yineler. Gerçek çalışan kod, bilinçli tasarım seçimleri, olağanüstü işçilik.

  ## Kurulum

  Devam etmeden önce bu adımları MUTLAKA yapmalısınız:

  1. `node .agents/skills/impeccable/scripts/context.mjs` dosyasını oturumda bir kez çalıştırın. Bu konuşmada çıktısını zaten görmüşseniz, tekrar çalıştırmayın. Script, projenin PRODUCT.md'sini (ve varsa DESIGN.md'sini) markdown bloğu olarak yazdırır ya da eksik olduğunu söyler. Yazdırdığını takip edin. **Eğer `NO_PRODUCT_MD` rapor ederse, durun ve başka bir şey yapmadan önce `reference/init.md` dosyasını takip edin.** Çıktı `UPDATE_AVAILABLE` yönergesiyle biterse, bunu takip edin (kullanıcıya bir kez güncellemek hakkında sorun, sonra devam edin). Asla mevcut görevi engellemez.
  2. Kullanıcı bir alt komut çağırdıysa (`craft`, `shape`, `audit`, `polish`, ...), bundan sonra `reference/<command>.md` dosyasını MUTLAKA okuyun. İsteğe bağlı değil. Referans, komutun akışını tanımlar; onsuz kullanıcının beklediği adımları atlayacaksınız.
  3. Koddaki mevcut tasarım sistemi, kurallar ve bileşenlerle kendinizi tanıştırın. En az bir proje dosyası okuyun (CSS / tokens / theme / temsilci bir bileşen ya da sayfa). **Alt komut referansı yüklediğinizde bile gereklidir.** Tekerleği yeniden icat etmeyin; işe yarayan şeyi kullanın, UX kazandığında farklılaştırın.
  4. Eşleşen kayıt referansını okuyun. **Bu zorunludur; atlamak genel çıktı verir.** Proje pazarlama, açılış sayfası, kampanya, uzun form içerik ya da portföyse (tasarım ÜRÜNÜN kendisidir), `reference/brand.md` dosyasını okuyun. Uygulama UI, yönetim, pano ya da araç ise (tasarım ÜRÜNE hizmet eder), `reference/product.md` dosyasını okuyun. İlk eşleşmeyi seçin: (1) görev ipucu ("açılış sayfası" vs "pano"); (2) odaklanılan yüzey (çalışılan sayfa, dosya ya da rota); (3) PRODUCT.md'deki `register` alanı.
  5. **Proje yeni ise (3. adımda mevcut CSS tokens / theme / taahhüt edilmiş marka renkleri bulunamadıysa)**, `node .agents/skills/impeccable/scripts/palette.mjs` dosyasını çalıştırın ve bir marka tohum rengi ile bileşim rehberi alın. Bu, birincil marka renginiz için ankordur. Yönergelere göre geri kalan paleti (bg, surface, ink, accent, muted) buna göre oluşturun. Boyunca OKLCH kullanın. **Bu adımı yalnızca 3. adım mevcut tokens'de taahhüt edilmiş renkler bulduğunda atlayın; bu durumda kimlik koruması kazanır.**

  ## Tasarım rehberi

  Prototype ya da başlangıç noktası değil, göndermeye hazır, üretim kalitesinde kod üretin. Kullanıcı istemediği sürece kısayol almayın (kuşkuya düştüğünüzde sorun). Tam bir uygulama (güzel, duyarlı, hızlı, kesin, hatasız, markaya uygun) gelene kadar durmayın. Detaya dikkat etmeyi ciddiye alırsınız: hazırlanan her sayfa, bölüm ya da bileşen elinizdeki araçlar kullanılarak test edilir (tarayıcı ekran görüntüsü, bilgisayar kullanımı, vb.). GPT olağanüstü çalışmalar yapabilir. Geri tutmayın.

  ### Genel kurallar

  #### Renk

  - **Kontrast doğrulayın.** Ana metin arka planına karşı ≥4.5:1 vurması gerekir; büyük metin (≥18px ya da kalın ≥14px) ≥3:1 gerektirir. Yer tutucu metin, dilimlenmiş gri varsayılan değil, aynı 4.5:1 gerektirir. En yaygın hata: tinted neredeyse beyaz arka planında soluk gri metin. Kontrast yakınsa, metin rengini mürekkep ucuna doğru itin; açık gri "elegans için" AI tasarımların okunması zor hissettirilmesinin tek en büyük nedenidir.
  - Renkli arka plan üzerinde gri metin soluk görünür. Arka planın kendi renginin daha koyu tonunu ya da metin renginin şeffaflığını kullanın.

  #### Tipografi

  - Gövde satır uzunluğunu 65–75ch ile sınırlayın.
  - Benzer ancak özdeş olmayan fontları eşleştirmeyin (iki geometrik sans-serif, iki insancıl sans-serif). Kontrast ekseni (serif + sans, geometrik + insancıl) üzerinde eşleştirin ya da bir aileyi birden fazla ağırlıkta kullanın.
  - Kahraman / görüntü başlığı tavanı: clamp() maks ≤ 6rem (~96px). Bunun üzerinde sayfa haykırıyor, tasarlamıyor.
  - Görüntü başlığı harf aralığı tabanı: ≥ -0.04em. Bundan daha sıkı ve harfler birbirine değer; sıkışık, "tasarlanmış" değil.
  - h1–h3 üzerinde `text-wrap: balance` kullanın eşit satır uzunlukları için; uzun düz metin üzerinde `text-wrap: pretty` kullanın yetim azaltmak için.

  Mevcut olarak kaçırdığınız bir zor tipografik tavan:
  - Görüntü harf aralığı ≥ -0.04em. Görüntü H1 üzerindeki -0.05 ile -0.085em varsayılanınız harfleri birbirine temas ettirip sıkışık okur. -0.02 ile -0.03em sıkı grotesque görüntü için yeterlidir; -0.04em tabandır.

  #### Düzen

  - Ritim için aralığı değiştirin.
  - Kartlar tembel yanıttır. Onları ancak gerçekten en iyi ödünç olduğunda kullanın. İç içe kartlar her zaman yanlıştır.
  - 1D için Flexbox, 2D için Grid. `flex-wrap` daha basit olduğunda Grid'e varsayılan olarak gitmeyin.
  - Breakpoint'ler olmadan duyarlı ızgaralar için: `repeat(auto-fit, minmax(280px, 1fr))`.
  - Anlamsal z-index ölçeği oluşturun (dropdown → sticky → modal-backdrop → modal → toast → tooltip). Hiçbir zaman 999 ya da 9999 gibi keyfi değerler.

  #### Hareket
  - Hareket kasıtlı olmalı ve bir sonradan düşünce olmamalı. Bunu yapının bir parçası olarak düşünün.
  - Gerçekten ihtiyaç olmadıkça CSS düzen özelliklerini animasyon yapmayın.
  - Üstel eğrileri (ease-out-quart / quint / expo) ile çıkış yapın. Sekme yok, elastik yok.
  - Daha gelişmiş hareket ihtiyaçları için kütüphaneler kullanın (örn. motion, gsap, anime.js, lenis vb.)
  - Azaltılmış hareket isteğe bağlı değil. Her animasyonun bir `@media (prefers-reduced-motion: reduce)` alternatifi gerekir: genellikle solma veya anında geçiş.
  - Bir listenin içindeki öğeleri kademeli olarak kaydırmak meşrudur. Söyletki, tek bir özdeş giriş (her bölüme uygulanan tek bir yanıt) reflek değil harekete; her ortaya çıkış ortaya çıkardığı şeye uymalı. Refleksi bastırmak hiçbir zaman boş hareket olmayan bir sayfa göndermek için sebep değil.
  - Ortaya çıkış animasyonları zaten görünen varsayılanı geliştirmelidir. İçerik görünürlüğünü bir sınıf tetikli geçişe kaplamayın; geçişler gizli sekmelerde ve başkanı kaldırılan oluşturucularda duraklatılır, bu nedenle ortaya çıkış asla tetiklenmez ve bölüm boş gönderilir.
  - Premium hareket malzemeleri sadece transform/opacity değildir. Bulanıklık, backdrop-filter, clip-path, mask ve shadow/glow, efekti önemli ölçüde iyileştirdiklerinde ve sorunsuz kaldıklarında paletinin parçasıdır.

  #### Etkileşim

  - `overflow: hidden` ya da `overflow: auto` kapsayıcı içinde `position: absolute` ile oluşturulan açılır menüler kesilecektir. Yerel `<dialog>` / popover API, `position: fixed` ya da yığın bağlamını kaçmak için portal kullanın.

  ### Yalnızca yeni projeler (önceki çalışma yoksa)

  #### Renk & Tema

  - OKLCH kullanın.
  - **Krem / kum / bej gövde arka planı, 2026'nın doymuş AI varsayılanıdır.** Tüm ılık nötr bandı (OKLCH L 0.84-0.97, C < 0.06, hue 40-100) ne dediğinize bakılmaksızın krem/kum/kağıt/parşömen olarak okunur. Token adları `--paper`, `--cream`, `--sand`, `--bone`, `--flour`, `--linen`, `--parchment`, `--wheat`, `--biscuit`, `--ivory` gibi kendileri işarettir. Kısa öz "ılık, geleneksel, aile-kıyı-İtalyan" ya da "dergi-ılık" ya da "editorial-ılılık" ise, bunu neredeyse beyaz ılık tintili arka plana çevirmeyin; bu AI harekettir. Seçin: (a) gövde olarak doymuş marka rengi (teracotta, oxblood, derin oker, neredeyse siyah), (b) chroma 0'da doğru off-beyaz (ya da chroma markanın kendi rengi doğru, varsayılan ılılık doğru değil), ya da (c) açıkça markanın kendisine ait daha koyu orta ton tintili nötr. Markanın "ılılığı" gövde arka planı değil başlık + tipografi + görüntü tarafından taşınır.
  - Tintili nötrler: markanın rengi doğru 0.005–0.015 chroma ekleyin. "Marka bu şekilde hissettirdiği için" varsayılan olarak sıcak ya da soğuk doğru tintlemeyiniz; bu projeler arası monokultur harekettir.
  - Tema seçerken: Koyu vs. ışık hiçbir zaman varsayılan değil. "Araçlar koyu görünüyor" diye koyu değil. "Güvenli olmak için" ışık değil. Seçmeden önce fiziksel sahneden bir cümle yazın: bunu kim kullanır, nerede, hangi ışık ortamında, hangi ruh halinde. Cümle yanıtı zorlamamışsa, yeterince somut değil. Yanıtı zorlayan ayrıntı ekleyin.
  - Renkleri seçmeden önce **renk stratejisi** seçin. Taahhüt ekseni üzerinde dört adım:
    - **Kısıtlı**: tintili nötrler + bir aksent ≤10%. Ürün varsayılanı; marka minimalizmi.
    - **Taahhütlü**: bir doymuş renk yüzeyin 30–60%'ini taşır. Kimlik odaklı sayfalar için marka varsayılanı.
    - **Tam palet**: 3–4 adlandırılmış rol, her biri kasıtlı olarak kullanılan. Marka kampanyaları; ürün veri görselleştirmesi.
    - **Batırılmış**: yüzey RENKTİR. Marka kahramanları, kampanya sayfaları.

  ### Mutlak yasaklar

  Eşleştir ve reddet. Aşağıdakilerden birini yazmak üzere olsaydınız, öğeyi farklı yapı ile yeniden yazın.

  - **Yan şerit sınırları.** `border-left` ya da `border-right` kartlar, liste öğeleri, açıklamalar ya da uyarılar üzerinde renkli aksent olarak 1px'den büyük. Hiçbir zaman kasıtlı. Tam sınırlar, arka plan tintleri, baştaki numaralar/simgeler ya da hiçbir şey ile yeniden yazın.
  - **Gradient metin.** `background-clip: text` gradient arka planla birleştirilmiş. Dekoratif, hiçbir zaman anlamsal. Tek bir katı renk kullanın. Ağırlık ya da boyut ile vurgulama.
  - **Varsayılan olarak Glassmorphism.** Bulanıklıklar ve cam kartlar dekoratif olarak kullanılan. Nadir ve kasıtlı ya da hiçbir şey.
  - **Kahraman metrik şablonu.** Büyük sayı, küçük etiket, destekleyici istatistikler, gradient aksent. SaaS klişesi.
  - **Özdeş kart ızgaraları.** Simge + başlık + metin ile aynı boyutlu kartlar, sonsuzca tekrarlanan.
  - **Her bölümün üstünde küçük büyük harfli izleri.** 2023 dönemi kicker'ı (geniş izleme ile küçük büyük harfli metin, her başlığın üstünde "HAKKINDA" "SÜREÇ" "FİYATLANDIRMA"), artık doymuş AI yapı iskeleti; kuşkusuz hangi öz olursa olsun %55-95'te görünür, bu monokultur tanımıdır. Bir adlandırılmış kicker kasıtlı marka sistemi olarak ses; her bölümün üzerinde kaşları farklı bir ritim seçin.
  - **Varsayılan olarak numaralandırılmış bölüm işaretleri (01 / 02 / 03).** Her bölümün üstünde `01 · Hakkında / 02 · Süreç / 03 · Fiyatlandırma` koymak, kaşı trope'u bir katman daha derin: "açılış sayfaları bunu yapar" ve reflek tarafından yapı iskelesi çünkü bunu yaparsınız. Sayılar, bölüm gerçekten bir dizi OLDUĞU zaman ve sıra okuyucunun ihtiyaç duyduğu bilgiyi taşıdığı zaman (gerçek 3 adımlı bir işlem, sıralı bir akış, yazılan bir zaman çizelgesi) yerini kazanır. Bir sayfa üzerinde bir kasıtlı numaralandırılmış dizi ses; siteler arasında her bölüm üzerinde numaralandırılmış kaşlar AI dilbilgisi.
  - **Konteynerine taşan metin.** Uzun başlık sözcükleri artı büyük clamp ölçekleri artı dar ızgaralar tablet/mobil üzerinde başlık taşmalarına neden olur. Başlık kopyasını her kesintide test edin; taşarsa, clamp maksimumunu azaltın ya da kopyayı yeniden yazın. Viewport, tasarımın parçasıdır.

  **Codex'e özgü kusurlar** (en sık görülen giveaway'lar; yeniden yazma ile reddet):

  - **`border: 1px solid X` + `box-shadow: 0 Npx Mpx ...`** aynı elemanla M ≥ 16px. "Ghost-kart" deseni: 1px sınır artı düğmeler ve kartlar üzerinde yumuşak geniş düşürme gölgesi. Bunları eşleştirmeyin. Birini seçin (marka renginde tek bir katı sınır YA DA en fazla 8px bulanıklığında tanımlanmış gölge), hiçbir zaman ikisi de dekorasyon olarak.
  - **`border-radius: 32px+` kartlar / bölümler / girdiler üzerinde.** Çok fazla yuvarlaksınız. Kartlar 12–16px'de karşılaştırılır; tam hap etiketler/düğmeler için gayet iyi. Bir kart üzerinde 24/28/32/40px seçmek codex söyleme; hiçbir marka "çılgınca yuvarlak" istemiyor.
  - **El ile çizilmiş / kroki SVG görselleri.** `loose-sketch`, `*-sketch`, `doodle`, `wavy` gibi sınıf adları; `feTurbulence` / `feDisplacementMap` "kağıt tahıl" filtreleri; 5 ile 30 yol ham sahneler somut bir konu tasvir etmek için (bir otter, bir tablo ve çatal, bir albüm kapağı). Bunların tümü amatörce, neşeli değil. Sahneyi gerçek varlıklarla oluşturamazsanız, görseli göndermeyip yeniden yazın. El ile çizilmiş SVG'yi fallback olarak denemeyin.
  - **`repeating-linear-gradient(...)` şerit arka planları.** `body:before` ya da bölüm arka planlarında çapraz şeritler saf codex dekorasyonu. Yapmayın.
  - **Meta-eleştiri kopyası.** Bir kavramı adlandırıp ironi ayar katmanlaştırıl, ya da bir strawman sahnelenip "düzeltilsin". Bunun yerine belirli iddiayı yapın.

  ### AI slop testi

  Eğer birisi bu arayüze bakabilir ve kuşkusuz "AI bunu yaptı" diyebilirse, başarısız olmuştur. Çapraz kayıt başarısızlıkları yukarıdaki mutlak yasaklardır. Kayıt'a özgü başarısızlıklar her referansta yaşar.

  **Kategori reflek kontrolü.** İki irtifada çalıştırın; ikincisi birincinin kaçırdığını yakalar.

  - **Birinci derece:** eğer biri temayı + paleti yalnızca kategoriden tahmin edebilirse, ilk eğitim verilerinin refleksidir. Sahne cümlesini ve renk stratejisini yanıtın kategoriden açık olmayacağı şekilde yeniden çalışın.
  - **İkinci derece:** eğer biri estetik ailesini kategori artı anti-referanslardan tahmin edebilirse ("SaaS krem değil AI iş akışı aracı → editorial-tipografik", "fintech tersine-prime-yerel koyu mod değil"), daha derin tuzaktır. İlk reflek kaçınıldı; ikincisi değil. Her iki yanıt açık olmayacağı şekilde yeniden çalışın. Marka kaydının [reflex-reject estetik şeritleri](reference/brand.md) listesi şu anda doymuş aileleri yakalar.

  ## Komutlar

  | Komut | Kategori | Açıklama | Referans |
  |---|---|---|---|
  | `craft [feature]` | İnşa | Bir özelliği planla, sonra uçtan uca oluştur | [reference/craft.md](reference/craft.md) |
  | `shape [feature]` | İnşa | Kod yazmadan UX/UI planlayın | [reference/shape.md](reference/shape.md) |
  | `init` | İnşa | Proje bağlamını ayarlayın: PRODUCT.md, DESIGN.md, canlı yapılandırma, sonraki adımlar | [reference/init.md](reference/init.md) |
  | `document` | İnşa | Mevcut proje kodundan DESIGN.md oluşturun | [reference/document.md](reference/document.md) |
  | `extract [target]` | İnşa | Yeniden kullanılabilir tokens ve bileşenleri tasarım sistemine çekin | [reference/extract.md](reference/extract.md) |
  | `critique [target]` | Değerlendir | Sezgisel puanlama ile UX tasarım incelemesi | [reference/critique.md](reference/critique.md) |
  | `audit [target]` | Değerlendir | Teknik kalite kontrolleri (a11y, perf, responsive) | [reference/audit.md](reference/audit.md) |
  | `polish [target]` | İyileştir | Göndermeden önce son kalite geçişi | [reference/polish.md](reference/polish.md) |
  | `bolder [target]` | İyileştir | Güvenli ya da sıkıcı tasarımları güçlendir | [reference/bolder.md](reference/bolder.md) |
  | `quieter [target]` | İyileştir | Saldırgan ya da aşırı uyarıcı tasarımları azalt | [reference/quieter.md](reference/quieter.md) |
  | `distill [target]` | İyileştir | Özüne soyundu, karmaşıklığı kaldır | [reference/distill.md](reference/distill.md) |
  | `harden [target]` | İyileştir | Üretim'e hazır: hatalar, i18n, sınır durumları | [reference/harden.md](reference/harden.md) |
  | `onboard [target]` | İyileştir | Tasarım ilk çalışma akışları, boş durumlar, aktivasyon | [reference/onboard.md](reference/onboard.md) |
  | `animate [target]` | Geliştir | Kasıtlı animasyonlar ve hareket ekleyin | [reference/animate.md](reference/animate.md) |
  | `colorize [target]` | Geliştir | Monokromatik UI'lara stratejik renk ekleyin | [reference/colorize.md](reference/colorize.md) |
  | `typeset [target]` | Geliştir | Tipografi hiyerarşisini ve fontları iyileştirin | [reference/typeset.md](reference/typeset.md) |
  | `layout [target]` | Geliştir | Aralığı, ritimleri ve görsel hiyerarşiyi düzeltin | [reference/layout.md](reference/layout.md) |
  | `delight [target]` | Geliştir | Kişilik ve akılda kalıcı dokunuşlar ekleyin | [reference/delight.md](reference/delight.md) |
  | `overdrive [target]` | Geliştir | Geleneksel sınırların ötesine itin | [reference/overdrive.md](reference/overdrive.md) |
  | `clarify [target]` | Düzelt | UX kopyasını, etiketleri ve hata mesajlarını iyileştirin | [reference/clarify.md](reference/clarify.md) |
  | `adapt [target]` | Düzelt | Farklı cihazlar ve ekran boyutları için uyarlayın | [reference/adapt.md](reference/adapt.md) |
  | `optimize [target]` | Düzelt | UI performansını tanılayın ve düzeltin | [reference/optimize.md](reference/optimize.md) |
  | `live` | Tekrarla | Görsel varyant modu: tarayıcıda öğeleri seçin, alternatifler oluşturun | [reference/live.md](reference/live.md) |

  Artı üç yönetim komutu: `pin <command>`, `unpin <command>`, ve `hooks <on|off|status|...>`, aşağıda ayrıntılı.

  ### Yönlendirme kuralları

  1. **Bağımsız değişken yok**: kullanıcı "ne yapmalıyım?" diye soruyor. Menu'yu statik yerine bağlam farkında yapın. Kurulum zaten `context.mjs` çalıştırmıştır; eğer bu `NO_PRODUCT_MD` rapor ettiyse, zaten init'tesiniz (kurulum), bunu bitirin ve bunu atlayın. Aksi takdirde `node .agents/skills/impeccable/scripts/context-signals.mjs` dosyasını bir kez çalıştırın ve JSON'unu okuyun, ardından sinyallerden çekilen bir satırlık nedenle **2-3 en yüksek değere sahip sonraki komutla başlayın**, bunu tam menu'yle (kategoriye göre gruplandırılmış yukarıdaki tablo) izleyin. **Hiçbir zaman otomatik olarak bir komut çalıştırmayın; tavsiye, kullanıcının onaylayacağı bir öneritir.**

     Sinyallerle sebep verin; hiç puan yoktur:
     - `setup.hasDesign` yanlış `setup.hasCode` doğruyken → `document` (görsel sistemi yakala).
     - `critique.latest` boş → proje hiçbir zaman eleştirilmemiş; gerçek yüzeyli kurulmuş bir proje için, `$impeccable critique <surface>` sunmak güçlü varsayılandır.
     - `critique.latest` düşük `score` ya da sıfır olmayan `p0` / `p1` ile → `polish` (bu anlık görüntüyü arka planı olarak okur), ya da anlık görüntü eski görünüyorsa yeniden çalıştırın `critique`.
     - `git.changedFiles` bir yüzeye işaret ediyor → `audit` ya da `polish`'ı bu dosyalara özel olarak, onları adlandırarak kapsam edin.
     - `devServer.running` doğu → `live` tarayıcıda yineleme için kullanılabilir; yanlışsa, `live` ile başlamayın.
     - Aksi takdirde başlangıç noktalarını tam olarak init'in "Öneril başlayan noktalar" adımından gruplandırın (yeni inşa / olanı iyileştir / görsel olarak yinele), `setup.register`'a uyarlanmış.

     **`scan.targets` boş olmayansa, `node .agents/skills/impeccable/scripts/detect.mjs --json <scan.targets boşlukla birleştirilmiş>` dosyasını bir kez çalıştırın** (yerel dosyalar üzerinde paketlenmiş dedektör: ağ yok, npx yok). `scan.via` ne olduklarını söyler: `git-changes` (kirli ağaçtaki işaretleme/stil dosyaları, en alakalı set), `source-dir` (ör. `src`, `app`), `html`, ya da `root`. Vurguları seçimlerinize katın: birçok kalite / kontrast vurgusu → `audit` ya da `polish`; belirli slop ailesi → eşleşen komut (gradient metin ya da kaşlar → `quieter` / `typeset`, düz ya da gri palet → `colorize`, vb.). Bu gerçek, mevcut sinyal tahminle daha iyi. Detect hata verirse ya da ağaç büyükse ve yavaşsa, atla ve kullanıcıya `audit` kendi başlarına çalıştırmasını öner; asla öneriyi engellemesi için engelle.

     Tam komut yazacak 2-3 işaret seçimi tutun. Menu fallback kalır; tavsiye lede.
  2. **İlk kelime bir komutu eşleşir** (yukarıdaki tablo YA DA `pin` / `unpin` / `hooks`): referans dosyasını yükle ve talimatlarını takip et. Komut adından sonraki her şey hedef olur.
  3. **İlk kelime eşleşmez, ama niyet açıkça bir komuta eşlenir** (ör. "aralığı düzelt" → `layout`, "bu hata mesajını yeniden yaz" → `clarify`, "renkler düz hissettiriliyor" → `colorize`): o komutun referansını yükle ve çağrılmış gibi devam et. İki komut uyabilirse, bir kez sorun.
  4. **Net komut eşleşmesi yok**: genel tasarım çağırma. Kurulum adımlarını, Genel kuralları ve yüklenen kayıt referansını uygula, bağımsız değişkeni tam bağlam olarak kullanarak.

  Kurulum (bağlam toplama, kayıt) daha sonra zaten yüklenir; alt komutlar `$impeccable` yeniden çağırmaz.

  İlk kelime `craft` ise, kurulum yine de çalışır, ancak [reference/craft.md](reference/craft.md) geri kalan akışına sahiptir. Kurulum `init`'i bloklayıcı olarak çağırdıysa, init'i bitir, bağlamı yenile, sonra orijinal komutu ve hedefi devam ettir.

  `teach`, `init` için kullanımdan kaldırılan takma addır: kullanıcı yazarsa, [reference/init.md](reference/init.md) dosyasını yükle ve `init` çağırmış gibi devam et.

  ## Sabitle / Sabitlemeyi Kaldır

  **Sabitle**, `$<command>` `$impeccable <command>`'i doğrudan çağırması için bağımsız kısayol oluşturur. **Sabitlemeyi Kaldır** bunu kaldırır. Script, projede mevcut olan her harness dizinine yazar.

  ```bash
  node .agents/skills/impeccable/scripts/pin.mjs <pin|unpin> <command>
  ```

  Geçerli `<command>` yukarıdaki tablodan herhangi bir komuttur. Script'in sonucunu kısaca raporlayın. Başarı sonrası yeni kısayolu onaylayın, hata sonrası stderr verbatim olarak iletir.

  ## Hooks

  `$impeccable hooks <on|off|status|ignore-rule|ignore-file|ignore-value|reset>` bu proje için tasarım dedektörü hook'unu yönetir. Hook'u doğrudan UI dosyası düzenlemesinden sonra otomatik olarak çalıştırır ve bulgular sistem hatırlatmaları olarak yüzeylendirir. Tam akış [reference/hooks.md](reference/hooks.md)'de; kullanıcı `$impeccable hooks` herhangi bir bağımsız değişken ile çağırdığında yükle.
---

Designs and iterates production-grade frontend interfaces. Real working code, committed design choices, exceptional craft.

## Setup

You MUST do these steps before proceeding:

1. Run `node .agents/skills/impeccable/scripts/context.mjs` once per session. If you've already seen its output in this conversation, do not re-run it. The script either prints the project's PRODUCT.md (and DESIGN.md when present) as a markdown block, or tells you it's missing. Follow whatever it prints. **If it reports `NO_PRODUCT_MD`, stop and follow `reference/init.md` before doing anything else.** If the output ends with an `UPDATE_AVAILABLE` directive, follow it (ask the user once about updating, then continue). It never blocks the current task.
2. If the user invoked a sub-command (`craft`, `shape`, `audit`, `polish`, ...), you MUST read `reference/<command>.md` next. Non-optional. The reference defines the command's flow; without it you will skip steps the user expects.
3. Familiarize yourself with any existing design system, conventions, and components in the code. Read at least one project file (CSS / tokens / theme / a representative component or page). **Required even when you've loaded a sub-command reference in step 2.** Don't reinvent the wheel; use what's there when it works, branch out when the UX wins.
4. Read the matching register reference. **This is non-optional; skipping it produces generic output.** If the project is marketing, a landing page, a campaign, long-form content, or a portfolio (design IS the product), read `reference/brand.md`. If it is app UI, admin, a dashboard, or a tool (design SERVES the product), read `reference/product.md`. Pick by first match: (1) task cue ("landing page" vs "dashboard"); (2) surface in focus (the page, file, or route being worked on); (3) `register` field in PRODUCT.md.
5. **If the project is brand-new (no existing CSS tokens / theme / committed brand colors found in step 3)**, run `node .agents/skills/impeccable/scripts/palette.mjs` to receive a brand seed color and composition guidance. This is the anchor for your primary brand color. Compose the rest of the palette (bg, surface, ink, accent, muted) around it per the script's instructions. Use OKLCH throughout. **Skip this step only if step 3 found committed brand colors in existing tokens; in that case identity-preservation wins.**

## Design guidance

Produce ready-to-ship, production-grade code, not prototypes or starting points. Take no shortcuts unless the user asks for them (when in doubt, ask). Don't stop until arriving at a complete implementation (beautiful, responsive, fast, precise, bug-free, on brand). You take attention to detail seriously: every page, section or component crafted is battle tested using the tools available to you (browser screenshotting, computer use, etc). GPT is capable of extraordinary work. Don't hold back.

### General rules

#### Color

- **Verify contrast.** Body text must hit ≥4.5:1 against its background; large text (≥18px or bold ≥14px) needs ≥3:1. Placeholder text needs the same 4.5:1, not the muted-gray default. The most common failure: muted gray body text on a tinted near-white. If the contrast is even close, bump the body color toward the ink end of the ramp; light gray "for elegance" is the single biggest reason AI designs feel hard to read.
- Gray text on a colored background looks washed out. Use a darker shade of the background's own hue, or a transparency of the text color.

#### Typography

- Cap body line length at 65–75ch.
- Don't pair fonts that are similar but not identical (two geometric sans-serifs, two humanist sans-serifs). Pair on a contrast axis (serif + sans, geometric + humanist) or use one family in multiple weights.
- Hero / display heading ceiling: clamp() max ≤ 6rem (~96px). Above that the page is shouting, not designing.
- Display heading letter-spacing floor: ≥ -0.04em. Anything tighter and letters touch; cramped, not "designed".
- Use `text-wrap: balance` on h1–h3 for even line lengths; `text-wrap: pretty` on long prose to reduce orphans.

One hard typographic ceiling you currently miss:
- Display letter-spacing ≥ -0.04em. Your default of -0.05 to -0.085em on display H1s makes the letters touch and reads as cramped. -0.02 to -0.03em is plenty for tight grotesque display; -0.04em is the floor.

#### Layout

- Vary spacing for rhythm.
- Cards are the lazy answer. Use them only when they're truly the best affordance. Nested cards are always wrong.
- Flexbox for 1D, Grid for 2D. Don't default to Grid when `flex-wrap` would be simpler.
- For responsive grids without breakpoints: `repeat(auto-fit, minmax(280px, 1fr))`.
- Build a semantic z-index scale (dropdown → sticky → modal-backdrop → modal → toast → tooltip). Never arbitrary values like 999 or 9999.

#### Motion
- Motion should be intentional, and not be an afterthought. consider it as part of the build.
- Don't animate CSS layout properties unless truly needed.
- Ease out with exponential curves (ease-out-quart / quint / expo). No bounce, no elastic.
- Use libraries for more advanced motion needs (e.g. motion, gsap, anime.js, lenis etc)
- Reduced motion is not optional. Every animation needs a `@media (prefers-reduced-motion: reduce)` alternative: typically a crossfade or instant transition.
- Staggering the items within one list is legitimate. The tell is the uniform reflex (one identical entrance applied to every section), not motion itself; each reveal should fit what it reveals. Suppressing the reflex is never a reason to ship a page with no motion at all.
- Reveal animations must enhance an already-visible default. Don't gate content visibility on a class-triggered transition; transitions pause on hidden tabs and headless renderers, so the reveal never fires and the section ships blank.
- Premium motion materials are not just transform/opacity. Blur, backdrop-filter, clip-path, mask, and shadow/glow are part of the palette when they materially improve the effect and stay smooth.

#### Interaction

- Dropdowns rendered with `position: absolute` inside an `overflow: hidden` or `overflow: auto` container will be clipped. Use the native `<dialog>` / popover API, `position: fixed`, or a portal to escape the stacking context.

### New projects only (when no prior work exists)

#### Color & Theme

- Use OKLCH.
- **The cream / sand / beige body bg is the saturated AI default of 2026.** The whole warm-neutral band (OKLCH L 0.84-0.97, C < 0.06, hue 40-100) reads as cream/sand/paper/parchment regardless of what you call it. Token names like `--paper`, `--cream`, `--sand`, `--bone`, `--flour`, `--linen`, `--parchment`, `--wheat`, `--biscuit`, `--ivory` are tells in themselves. If the brief is "warm, traditional, family-coastal-Italian" or "magazine-warm" or "editorial-restraint", DO NOT translate that into a near-white warm-tinted bg; that's the AI move. Pick: (a) a saturated brand color as the body (terracotta, oxblood, deep ochre, near-black), (b) a true off-white at chroma 0 (or chroma toward the brand's own hue, not toward warmth-by-default), or (c) a darker mid-tone tinted neutral that's clearly the brand's own. "Warmth" in the brand is carried by accent + typography + imagery, not by body bg.
- Tinted neutrals: add 0.005–0.015 chroma toward the brand's hue. Don't default-tint toward warm or cool "because the brand feels that way"; that's the cross-project monoculture move.
- When picking a theme: Dark vs. light is never a default. Not dark "because tools look cool dark." Not light "to be safe.".Before choosing, write one sentence of physical scene: who uses this, where, under what ambient light, in what mood. If the sentence doesn't force the answer, it's not concrete enough. Add detail until it does.
- Pick a **color strategy** before picking colors. Four steps on the commitment axis:
  - **Restrained**: tinted neutrals + one accent ≤10%. Product default; brand minimalism.
  - **Committed**: one saturated color carries 30–60% of the surface. Brand default for identity-driven pages.
  - **Full palette**: 3–4 named roles, each used deliberately. Brand campaigns; product data viz.
  - **Drenched**: the surface IS the color. Brand heroes, campaign pages.

### Absolute bans

Match-and-refuse. If you're about to write any of these, rewrite the element with different structure.

- **Side-stripe borders.** `border-left` or `border-right` greater than 1px as a colored accent on cards, list items, callouts, or alerts. Never intentional. Rewrite with full borders, background tints, leading numbers/icons, or nothing.
- **Gradient text.** `background-clip: text` combined with a gradient background. Decorative, never meaningful. Use a single solid color. Emphasis via weight or size.
- **Glassmorphism as default.** Blurs and glass cards used decoratively. Rare and purposeful, or nothing.
- **The hero-metric template.** Big number, small label, supporting stats, gradient accent. SaaS cliché.
- **Identical card grids.** Same-sized cards with icon + heading + text, repeated endlessly.
- **Tiny uppercase tracked eyebrow above every section.** The 2023-era kicker (small all-caps text with wide tracking, "ABOUT" "PROCESS" "PRICING" above each heading) is now the saturated AI scaffold; it appears on 55-95% of generations regardless of brief, which is the definition of a tell. One named kicker as a deliberate brand system is voice; an eyebrow on every section is AI grammar. Choose a different cadence.
- **Numbered section markers as default scaffolding (01 / 02 / 03).** Putting `01 · About / 02 · Process / 03 · Pricing` above every section is the eyebrow trope one tier deeper: reach for it because "landing pages do this" and you're scaffolding by reflex. Numbers earn their place when the section actually IS a sequence (a real 3-step process, an ordered flow, a typed timeline) and the order carries information the reader needs. One deliberate numbered sequence on one page is voice; numbered eyebrows on every section across the site is AI grammar.
- **Text that overflows its container.** Long heading words plus large clamp scales plus narrow grids cause headline overflow on tablet/mobile. Test the heading copy at every breakpoint; if it overflows, reduce the clamp max or rewrite the copy. The viewport is part of the design.

**Codex-specific defects** (your most-frequent giveaways; refuse-and-rewrite):

- **`border: 1px solid X` + `box-shadow: 0 Npx Mpx ...` with M ≥ 16px** on the same element. The "ghost-card" pattern: 1px border plus soft wide drop shadow on buttons and cards. Don't pair them. Pick one (a single solid border at the brand color, OR a defined shadow at no more than 8px blur), never both as decoration.
- **`border-radius: 32px+` on cards / sections / inputs.** You over-round. Cards top out at 12–16px; full-pill is fine for tags/buttons. Picking 24/28/32/40px on a card is the codex tell; no brand wants "insanely rounded".
- **Hand-drawn / sketchy SVG illustrations.** Class names like `loose-sketch`, `*-sketch`, `doodle`, `wavy`; `feTurbulence` / `feDisplacementMap` "paper grain" filters; 5-to-30 path crude scenes meant to depict a tangible subject (an otter, a table-and-fork, an album cover). All of these read as amateurish, not whimsical. If you can't render the scene with real assets, ship no illustration. Don't attempt sketchy SVG as a fallback.
- **`repeating-linear-gradient(...)` stripe backgrounds.** Diagonal stripes in `body:before` or section backgrounds are pure codex decoration. Don't.
- **Meta-criticism copy.** Naming a concept then layering an ironic modifier, or staging a strawman to "correct" it. Make the specific claim instead.

### The AI slop test

If someone could look at this interface and say "AI made that" without doubt, it's failed. Cross-register failures are the absolute bans above. Register-specific failures live in each reference.

**Category-reflex check.** Run at two altitudes; the second one catches what the first one misses.

- **First-order:** if someone could guess the theme + palette from the category alone, it's the first training-data reflex. Rework the scene sentence and color strategy until the answer isn't obvious from the domain.
- **Second-order:** if someone could guess the aesthetic family from category-plus-anti-references ("AI workflow tool that's not SaaS-cream → editorial-typographic", "fintech that's not navy-and-gold → terminal-native dark mode"), it's the trap one tier deeper. The first reflex was avoided; the second wasn't. Rework until both answers are not obvious. The brand register's [reflex-reject aesthetic lanes](reference/brand.md) list catches the currently-saturated families.

## Commands

| Command | Category | Description | Reference |
|---|---|---|---|
| `craft [feature]` | Build | Shape, then build a feature end-to-end | [reference/craft.md](reference/craft.md) |
| `shape [feature]` | Build | Plan UX/UI before writing code | [reference/shape.md](reference/shape.md) |
| `init` | Build | Set up project context: PRODUCT.md, DESIGN.md, live config, next steps | [reference/init.md](reference/init.md) |
| `document` | Build | Generate DESIGN.md from existing project code | [reference/document.md](reference/document.md) |
| `extract [target]` | Build | Pull reusable tokens and components into design system | [reference/extract.md](reference/extract.md) |
| `critique [target]` | Evaluate | UX design review with heuristic scoring | [reference/critique.md](reference/critique.md) |
| `audit [target]` | Evaluate | Technical quality checks (a11y, perf, responsive) | [reference/audit.md](reference/audit.md) |
| `polish [target]` | Refine | Final quality pass before shipping | [reference/polish.md](reference/polish.md) |
| `bolder [target]` | Refine | Amplify safe or bland designs | [reference/bolder.md](reference/bolder.md) |
| `quieter [target]` | Refine | Tone down aggressive or overstimulating designs | [reference/quieter.md](reference/quieter.md) |
| `distill [target]` | Refine | Strip to essence, remove complexity | [reference/distill.md](reference/distill.md) |
| `harden [target]` | Refine | Production-ready: errors, i18n, edge cases | [reference/harden.md](reference/harden.md) |
| `onboard [target]` | Refine | Design first-run flows, empty states, activation | [reference/onboard.md](reference/onboard.md) |
| `animate [target]` | Enhance | Add purposeful animations and motion | [reference/animate.md](reference/animate.md) |
| `colorize [target]` | Enhance | Add strategic color to monochromatic UIs | [reference/colorize.md](reference/colorize.md) |
| `typeset [target]` | Enhance | Improve typography hierarchy and fonts | [reference/typeset.md](reference/typeset.md) |
| `layout [target]` | Enhance | Fix spacing, rhythm, and visual hierarchy | [reference/layout.md](reference/layout.md) |
| `delight [target]` | Enhance | Add personality and memorable touches | [reference/delight.md](reference/delight.md) |
| `overdrive [target]` | Enhance | Push past conventional limits | [reference/overdrive.md](reference/overdrive.md) |
| `clarify [target]` | Fix | Improve UX copy, labels, and error messages | [reference/clarify.md](reference/clarify.md) |
| `adapt [target]` | Fix | Adapt for different devices and screen sizes | [reference/adapt.md](reference/adapt.md) |
| `optimize [target]` | Fix | Diagnose and fix UI performance | [reference/optimize.md](reference/optimize.md) |
| `live` | Iterate | Visual variant mode: pick elements in the browser, generate alternatives | [reference/live.md](reference/live.md) |

Plus three management commands: `pin <command>`, `unpin <command>`, and `hooks <on|off|status|...>`, detailed below.

### Routing rules

1. **No argument**: the user is asking "what should I do?" Make the menu context-aware instead of static. Setup has already run `context.mjs`; if that reported `NO_PRODUCT_MD` you are already in init (setup), so finish that and skip this. Otherwise run `node .agents/skills/impeccable/scripts/context-signals.mjs` once and read its JSON, then lead with the **2-3 highest-value next commands**, each with a one-line reason pulled from the signals, followed by the full menu (the table above, grouped by category). **Never auto-run a command; the recommendation is a suggestion the user confirms.**

   Reason over the signals; there is no score to obey:
   - `setup.hasDesign` false while `setup.hasCode` true → `document` (capture the visual system).
   - `critique.latest` is `null` → the project has never been critiqued; for a set-up project with a real surface, offering `$impeccable critique <surface>` is a strong default.
   - `critique.latest` with a low `score` or non-zero `p0` / `p1` → `polish` (it reads that snapshot as its backlog), or re-run `critique` if the snapshot looks stale.
   - `git.changedFiles` pointing at one surface → scope `audit` or `polish` to those files specifically, naming them.
   - `devServer.running` true → `live` is available for in-browser iteration; if false, don't lead with `live`.
   - Otherwise group by intent exactly as init's "Recommend starting points" step does (build new / improve what's there / iterate visually), tailored to `setup.register`.

   **If `scan.targets` is non-empty, run `node .agents/skills/impeccable/scripts/detect.mjs --json <scan.targets joined by spaces>` once** (the bundled detector over local files: no network, no npx). `scan.via` tells you what they are: `git-changes` (the markup/style files in your dirty tree, the most relevant set), `source-dir` (e.g. `src`, `app`), `html`, or `root`. Fold the hits into your picks: many quality / contrast hits → `audit` or `polish`; a specific slop family → the matching command (gradient text or eyebrows → `quieter` / `typeset`, flat or gray palette → `colorize`, and so on). It's a real, current signal that beats guessing. If detect errors or the tree is large and slow, skip it and recommend the user run `audit` themselves; never block the suggestion on it.

   Keep it to 2-3 pointed picks with the exact command to type. The menu stays the fallback; the recommendation is the lede.
2. **First word matches a command** (table above OR `pin` / `unpin` / `hooks`): load its reference file and follow its instructions. Everything after the command name is the target.
3. **First word doesn't match, but the intent clearly maps to one command** (e.g. "fix the spacing" → `layout`, "rewrite this error message" → `clarify`, "the colors feel flat" → `colorize`): load that command's reference and proceed as if invoked. If two commands could fit, ask once which.
4. **No clear command match**: general design invocation. Apply the setup steps, the General rules, and the loaded register reference, using the full argument as context.

Setup (context gathering, register) is already loaded by then; sub-commands don't re-invoke `$impeccable`.

If the first word is `craft`, setup still runs first, but [reference/craft.md](reference/craft.md) owns the rest of the flow. If setup invokes `init` as a blocker, finish init, refresh context, then resume the original command and target.

`teach` is a deprecated alias for `init`: if the user types it, load [reference/init.md](reference/init.md) and proceed as if they ran `init`.

## Pin / Unpin

**Pin** creates a standalone shortcut so `$<command>` invokes `$impeccable <command>` directly. **Unpin** removes it. The script writes to every harness directory present in the project.

```bash
node .agents/skills/impeccable/scripts/pin.mjs <pin|unpin> <command>
```

Valid `<command>` is any command from the table above. Report the script's result concisely. Confirm the new shortcut on success, relay stderr verbatim on error.

## Hooks

`$impeccable hooks <on|off|status|ignore-rule|ignore-file|ignore-value|reset>` manages the design detector hook for this project. The hook auto-runs the detector after direct UI file edits and surfaces findings as system reminders. Full flow is in [reference/hooks.md](reference/hooks.md); load it when the user invokes `$impeccable hooks` with any argument.
