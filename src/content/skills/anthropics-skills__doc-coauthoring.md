---
name: "doc-coauthoring"
description_en: "Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation, proposals, technical specs, decision docs, or similar structured content. This workflow helps users efficiently transfer context, refine content through iteration, and verify the doc works for readers. Trigger when user mentions writing docs, creating proposals, drafting specs, or "
description_tr: "Kullanıcıları dokümantasyon yazımında yapılandırılmış bir iş akışı ile yönlendirir. Dokümantasyon, teklif, teknik özellikler, karar dokümanları veya benzeri yapılandırılmış içerik yazma ihtiyacı olduğunda kullanılır. Bu iş akışı, kullanıcıların bağlamı verimli bir şekilde aktarmasına, içeriği yinelemelerle rafine etmesine ve dokümanın okuyucular için işe yaradığını doğrulamasına yardımcı olur."
category: "Document"
repo: "anthropics/skills"
stars: 140618
url: "https://github.com/anthropics/skills/blob/HEAD/skills/doc-coauthoring/SKILL.md"
path: "skills/doc-coauthoring/SKILL.md"
is_collection: false
body_length: 15341
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Doküman Co-Authoring Workflow

  Bu beceri, kullanıcıları işbirlikçi belge oluşturma konusunda rehberlik etmek için yapılandırılmış bir workflow sağlar. Aktif bir rehber olarak hareket ederek, kullanıcıları üç aşama boyunca yönlendirin: Context Gathering (Bağlam Toplama), Refinement & Structure (Değerlendirme ve Yapılandırma) ve Reader Testing (Okuyucu Testi).

  ## Bu Workflow Ne Zaman Sunulacağı

  **Tetikleyici koşullar:**
  - Kullanıcı belge yazımından bahseder: "bir doc yaz", "draft bir proposal hazırla", "bir spec oluştur", "yazıp geç"
  - Kullanıcı belirli belge türlerinden bahseder: "PRD", "design doc", "decision doc", "RFC"
  - Kullanıcı önemli bir yazma görevine başlamakta gibi görünüyor

  **İlk teklif:**
  Kullanıcıya belgeyi co-author yapmak için yapılandırılmış bir workflow sunun. Üç aşamayı açıklayın:

  1. **Context Gathering (Bağlam Toplama)**: Kullanıcı tüm ilgili bağlamı sağlar ve Claude açıklayıcı sorular sorar
  2. **Refinement & Structure (Değerlendirme ve Yapılandırma)**: Her bölümü beyin fırtınası ve düzenleme yoluyla yinelemeli olarak oluşturun
  3. **Reader Testing (Okuyucu Testi)**: Belgeyi yeni bir Claude örneğiyle test edin (bağlamı olmadan) diğerleri okumadan önce körlük noktalarını yakalaması için

  Bu yaklaşımın, belgeyi diğerleri okuduğunda iyi çalışmasını sağlamaya yardımcı olduğunu açıklayın (Claude'a yapıştırdıklarında da dahil). Workflow'u denemek isteyip istemediğini yoksa freeform olarak çalışmayı tercih edip etmediğini sorun.

  Kullanıcı reddederse, freeform olarak çalışın. Kullanıcı kabul ederse, Stage 1'e geçin.

  ## Stage 1: Context Gathering (Bağlam Toplama)

  **Hedef:** Kullanıcının bildiği ile Claude'un bildiği arasındaki boşluğu kapatarak, daha sonra akıllı rehberlik sağlamayı etkinleştirin.

  ### İlk Sorular

  Belge hakkında meta-context için kullanıcıdan sorular sorarak başlayın:

  1. Bu belge ne türü? (örn. teknik spec, decision doc, proposal)
  2. Birincil hedef kitle kimdir?
  3. Biri bunu okuduğunda istenen etki nedir?
  4. Takip edilecek bir template veya belirli bir format var mı?
  5. Bilinmesi gereken başka kısıtlamalar veya bağlam var mı?

  Onlara kısa cevaplar verebileceklerini veya bilgiyi uygun olan şekilde dumplayabileceklerini bildirin.

  **Kullanıcı bir template sağlarsa veya doc türünden bahsederse:**
  - Paylaşmak için bir template belgesi olup olmadığını sorun
  - Paylaşılan belgede bir link sağlarlarsa, fetch etmek için uygun integration kullanın
  - Dosya sağlarlarsa, okuyun

  **Kullanıcı mevcut paylaşılan belgeyi düzenlemekten bahsederse:**
  - Mevcut durumu okumak için uygun integration kullanın
  - Alt-text olmayan görselleri kontrol edin
  - Alt-text olmayan görseller varsa, diğerleri belgeyi anlamak için Claude'u kullandığında Claude'un onları göremeyeceğini açıklayın. Alt-text oluşturmasını isteyip istemediğini sorun. Evet ise, her görsel için açıklayıcı alt-text oluşturmak üzere sohbet içine yapıştırmasını isteyin.

  ### Info Dumping

  İlk sorular yanıtlandıktan sonra, kullanıcıyı tüm bağlamını dumplaması için teşvik edin. Aşağıdaki gibi bilgileri isteyin:
  - Proje/sorun hakkında arka plan
  - İlgili takım tartışmaları veya paylaşılan belgeler
  - Alternatif çözümlerin neden kullanılmadığı
  - Organizasyon bağlamı (takım dinamikleri, geçmiş olaylar, politika)
  - Zaman baskısı veya kısıtlamalar
  - Teknik mimarisi veya bağımlılıkları
  - Paydaş endişeleri

  Onlara organize etme konusunda endişelenmemeleri - sadece hepsini çıkarması gerektiğini tavsiye edin. Bağlam sağlamak için birden fazla yol sunun:
  - Info dump stream-of-consciousness
  - Takım kanallarına veya dizilere işaret edin
  - Paylaşılan belgeler bağlantı

  **Integrations mevcut ise** (örn. Slack, Teams, Google Drive, SharePoint veya diğer MCP servers), bunların bağlamı doğrudan çekmek için kullanılabileceğinden bahsedin.

  **Integration algılanmadı ve Claude.ai veya Claude app ise:** Onlara Claude ayarlarında konektörleri etkinleştirerek mesajlaşma uygulamaları ve belge depolamadan doğrudan bağlam çekmelerine izin vereceğini tavsiye edin.

  Açıklayıcı soruların ilk dump sonrası sorulacağını bildirin.

  **Bağlam toplama sırasında:**

  - Kullanıcı takım kanallarından veya paylaşılan belgelerden bahsederse:
    - Integration mevcut ise: İçeriğin şimdi okunacağını bildirin, ardından uygun integration kullanın
    - Integration yoksa: Erişim eksikliğini açıklayın. Claude ayarlarında konektörleri etkinleştirmelerini tavsiye edin veya ilgili içeriği doğrudan yapıştırmalarını isteyin.

  - Kullanıcı bilinmeyen entities/projelerden bahsederse:
    - Bağlı araçların daha fazla öğrenmek için aranması gerekip gerekmediğini sorun
    - Aramadan önce kullanıcı onayını bekleyin

  - Kullanıcı bağlam sağlarken, nelerin öğrenildiğini ve neyin hala belirsiz olduğunu takip edin

  **Açıklayıcı sorular sorma:**

  Kullanıcı ilk dump yaptığını işaret ettiğinde (veya önemli bağlam sağlandıktan sonra), anlayışı sağlamak için açıklayıcı sorular sorun:

  Bağlamdaki boşluklara dayalı 5-10 numaralı soru oluşturun.

  Onlara kısa cevaplar verebileceklerini (örn. "1: evet, 2: #channel'a bak, 3: geriye uyumluluk nedeniyle hayır"), daha fazla doc'a bağlantı, kanallara işaret veya sadece info-dumping devam edebileceklerini bildirin. Ne onlar için en verimli ise.

  **Çıkış koşulu:**
  Sorular anlayışı gösterdiğinde yeterli bağlam toplanır - uç durumlar ve trade-off'lar temel kavramların açıklanmasına gerek kalmadan sorulabilir.

  **Geçiş:**
  Bu aşamada sağlamak istedikleri daha fazla bağlam olup olmadığını veya belgeyi taslaklaştırmaya geçme zamanı gelip gelmediğini sorun.

  Kullanıcı daha fazla eklemek isterse, izin verin. Hazır olunca, Stage 2'ye geçin.

  ## Stage 2: Refinement & Structure (Değerlendirme ve Yapılandırma)

  **Hedef:** Belgeyi beyin fırtınası, kurala uygun seçim ve yinelemeli iyileştirme yoluyla bölüm bölüm oluşturun.

  **Kullanıcıya talimatlar:**
  Belgenin bölüm bölüm oluşturulacağını açıklayın. Her bölüm için:
  1. Nelerin dahil edileceği hakkında açıklayıcı sorular sorulur
  2. 5-20 seçenek beyin fırtınası yapılır
  3. Kullanıcı neyi tutacağı/kaldıracağı/birleştireceğini gösterir
  4. Bölüm taslaklanır
  5. Cerrah gibi düzeltmeler yoluyla iyileştirilir

  En fazla bilinmeyeni olan bölümle başlayın (genellikle çekirdek karar/proposal), ardından geriye kalanların içinde çalışın.

  **Bölüm sıralaması:**

  Belge yapısı açık ise:
  Hangi bölümle başlamak istediğini sorun.

  En fazla bilinmeyeni olan bölümle başlamayı önerin. Decision doc'lar için, bu genellikle çekirdek proposal'dır. Spec'ler için, tipik olarak teknik yaklaşımdır. Özet bölümleri en son kalmak için iyidir.

  Kullanıcı hangi bölümlere ihtiyacı olduğunu bilmiyorsa:
  Belge türü ve template'e dayanarak, doc türü için uygun 3-5 bölüm önerin.

  Bu yapının işe yarıyıp yaramadığını veya ayarlamak isteyip istemediğini sorun.

  **Yapı anlaştıktan sonra:**

  Tüm bölümler için placeholder metin içeren ilk belge yapısı oluşturun.

  **Artifact'lara erişim varsa:**
  Artifact oluşturmak için `create_file` kullanın. Bu hem Claude'a hem de kullanıcıya bir iskelet verir.

  Tüm bölümler için placeholder metin içeren ilk yapının "[To be written]" veya "[Content here]" gibi oluşturulacağını bildirin.

  Tüm bölüm başlıkları ve kısa placeholder metin ile artifact oluşturun.

  İskelet bağlantısını sağlayın ve her bölümü doldurma zamanının geldiğini gösterin.

  **Artifact'lara erişim yoksa:**
  Çalışma dizininde markdown dosyası oluşturun. Uygun olarak adlandırın (örn. `decision-doc.md`, `technical-spec.md`).

  Tüm bölümler için placeholder metin içeren ilk yapının oluşturulacağını bildirin.

  Tüm bölüm başlıkları ve placeholder metin ile dosya oluşturun.

  Dosya adının oluşturulduğunu doğrulayın ve her bölümü doldurma zamanının geldiğini gösterin.

  **Her bölüm için:**

  ### Adım 1: Açıklayıcı Sorular

  [BÖLÜM ADI] bölümünde çalışmaya başlanacağını ilan edin. Nelerin dahil edileceği hakkında 5-10 açıklayıcı soru sorun:

  Bağlama ve bölüm amacına dayalı 5-10 spesifik soru oluşturun.

  Kısa cevaplar verebileceklerini veya yalnızca neyin kapsanması gerektiğini gösterebileceklerini bildirin.

  ### Adım 2: Beyin Fırtınası

  [BÖLÜM ADI] bölümü için, bölümün karmaşıklığına bağlı olarak [5-20] şeyin dahil edilebileceğini beyin fırtınası yapın. Aşağıdakileri arayın:
  - Unutulmuş olabilecek paylaşılan bağlam
  - Henüz bahsedilmemiş açılar veya düşünceler

  Bölüm karmaşıklığına dayalı 5-20 numaralı seçenek oluşturun. Sonunda, daha fazla seçenek isterlerse daha fazla beyin fırtınası yapmayı önerin.

  ### Adım 3: Kurala Uygun Seçim

  Hangi noktaların tutulması, kaldırılması veya birleştirilmesi gerektiğini sorun. Sonraki bölümler için öncelikleri öğrenmeye yardımcı olmak üzere kısa gerekçeler isteyin.

  Örnekler sağlayın:
  - "Keep 1,4,7,9"
  - "Remove 3 (duplicates 1)"
  - "Remove 6 (audience already knows this)"
  - "Combine 11 and 12"

  **Kullanıcı serbest biçim geri bildirim verirse** (örn. "looks good" veya "I like most of it but...") numaralı seçimler yerine, tercihlerini çıkarın ve devam edin. Neyi tutmak/kaldırmak/değiştirmek istediğini ayrıştırın ve uygulayın.

  ### Adım 4: Boşluk Kontrolü

  Seçtiklerine dayalı olarak, [BÖLÜM ADI] bölümü için eksik olan önemli bir şey olup olmadığını sorun.

  ### Adım 5: Taslaklandırma

  Bu bölüm için placeholder metni seçtikleri şeye dayalı taslaklanmış içerikle değiştirmek için `str_replace` kullanın.

  [BÖLÜM ADI] bölümünün seçtikleri şeye dayalı taslaklanacağını ilan edin.

  **Artifact'ları kullanıyorsanız:**
  Taslaklandıktan sonra artifact bağlantısını sağlayın.

  Bunu okumalarını ve neyi değiştirmesi gerektiğini belirtmelerini isteyin. Spesifik olmak sonraki bölümler için öğrenmeye yardımcı olduğunu not edin.

  **Dosya kullanıyorsanız (artifact yok):**
  Taslaklandıktan sonra tamamlamayı doğrulayın.

  [BÖLÜM ADI] bölümünün [dosya adı] içinde taslaklandığını bildirin. Bunu okumalarını ve neyi değiştirmesi gerektiğini belirtmelerini isteyin. Spesifik olmak sonraki bölümler için öğrenmeye yardımcı olduğunu not edin.

  **İlk bölümü taslaklandırırken dahil edilecek kullanıcı talimatı:**
  Not sağlayın: Belgeyi doğrudan düzenleme yerine, neyi değiştirmesi gerektiğini belirtmelerini isteyin. Bu gelecek bölümler için stillerinin öğrenilmesine yardımcı olur. Örneğin: "Remove the X bullet - already covered by Y" veya "Make the third paragraph more concise".

  ### Adım 6: Yinelemeli İyileştirme

  Kullanıcı geri bildirim sağlarken:
  - Düzeltmeleri yapmak için `str_replace` kullanın (hiçbir zaman tüm belgeyi yeniden yazdırmayın)
  - **Artifact'ları kullanıyorsanız:** Her düzeltmeden sonra artifact bağlantısı sağlayın
  - **Dosya kullanıyorsanız:** Sadece düzeltmelerin tamamlandığını doğrulayın
  - Kullanıcı belgeyi doğrudan düzenlerse ve okumasını isterse: Yaptıkları değişiklikleri zihinsel olarak not edin ve gelecek bölümler için başında bulundurun (bu tercihlerini gösterir)

  **Seçili bölüm tatmin edene kadar yineleyin.**

  ### Kalite Kontrolü

  3 ardışık yinelemeden sonra önemli değişiklik yoksa, önemli bilgi kaybedilmeden neyin kaldırılabileceğini sorun.

  Bölüm tamamlandığında, [BÖLÜM ADI]'nin tamamlandığını doğrulayın. Sonraki bölüme geçmeye hazır olup olmadığını sorun.

  **Tüm bölümler için tekrarlayın.**

  ### Tamamlanmaya Yakın

  Tamamlanmaya yaklaşırken (%80+ bölüm yapıldığında), tüm belgeyi yeniden okuma ve şunları kontrol etme niyetini ilan edin:
  - Bölümler arasında akış ve tutarlılık
  - Fazlalık veya çelişkiler
  - "Slop" veya genel doldurma gibi görünen her şey
  - Her cümlenin ağırlık taşıyıp taşımadığı

  Tüm belgeyi okuyun ve geri bildirim sağlayın.

  **Tüm bölümler taslaklanıp iyileştirildiğinde:**
  Tüm bölümlerin taslaklandığını ilan edin. Tüm belgeyi bir kez daha inceleme niyetini belirtin.

  Genel uyum, akış, tamlık açısından gözden geçirin.

  Herhangi bir son tavsiye sağlayın.

  Reader Testing'e geçmeye hazır olup olmadığını veya başka bir şeyi iyileştirmek isteyip istemediğini sorun.

  ## Stage 3: Reader Testing (Okuyucu Testi)

  **Hedef:** Belgeyi yeni bir Claude örneğiyle (bağlam olmadan) test ederek okuyucular için çalıştığını doğrulayın.

  **Kullanıcıya talimatlar:**
  Testi açıklayın - bu belgenin okuyucular için gerçekten çalışıp çalışmadığını görmek için yapılır. Bu körlük noktalarını yakalar - yazarlara mantıklı gelen ama diğerlerini kafa karıştırabilen şeyler.

  ### Test Yaklaşımı

  **Alt-agent'lara erişim varsa (örn. Claude Code'da):**

  Kullanıcı katılımı olmadan testi doğrudan gerçekleştirin.

  ### Adım 1: Okuyucu Soruları Tahmin Edin

  Okuyucuların bu belgeyi keşfetmeye çalışırken ne sorabileceğini tahmin etme niyetini ilan edin.

  Okuyucuların gerçekçi olarak sorabileceği 5-10 soru oluşturun.

  ### Adım 2: Alt-Agent ile Test Edin

  Bu soruların yeni bir Claude örneğiyle test edileceğini ilan edin (bu konuşmadan bağlam olmadan).

  Her soru için, sadece belge içeriği ve soruyla bir alt-agent çağırın.

  Reader Claude'un her soru için doğru/yanlış yaptığını özetleyin.

  ### Adım 3: Ek Kontroller Çalıştırın

  Ek kontroller yapılacağını ilan edin.

  Belirsizlik, yanlış varsayımlar, çelişkiler açısından kontrol etmek için alt-agent çağırın.

  Bulunan herhangi bir sorunu özetleyin.

  ### Adım 4: Rapor ve Düzelt

  Sorun bulunursa:
  Reader Claude'un belirli sorunlarla mücadele ettiğini rapor edin.

  Spesifik sorunları listeleyin.

  Bu boşlukları düzeltme niyetini belirtin.

  Sorunlu bölümler için iyileştirmeye geri döngüyü kapatın.

  ---

  **Alt-agent'lara erişim yoksa (örn. claude.ai web arayüzü):**

  Kullanıcı testi manuel olarak yapmalıdır.

  ### Adım 1: Okuyucu Soruları Tahmin Edin

  Bu belgeyi keşfetmeye çalışırken insanların ne sorabileceğini sorun. Claude.ai'ye ne yazarlar?

  Okuyucuların gerçekçi olarak sorabileceği 5-10 soru oluşturun.

  ### Adım 2: Test Kurulumu

  Test talimatları sağlayın:
  1. Yeni bir Claude konuşması açın: https://claude.ai
  2. Belge içeriğini yapıştırın veya paylaşın (paylaşılan doc platformunda konektörleri etkinleştirilmiş ise, bağlantıyı sağlayın)
  3. Reader Claude'a oluşturulan soruları sorun

  Her soru için, Reader Claude'u şunları sağlamaya talimat edin:
  - Cevap
  - Bir şey belirsiz veya açık değil miydi
  - Belgenin zaten bilinen ne bilgi/bağlam varsaydığı

  Reader Claude'un doğru cevaplar verip vermediğini veya bir şeyi yanlış anlamlandırıp anlamlandırmadığını kontrol edin.

  ### Adım 3: Ek Kontroller

  Reader Claude'a ayrıca sorun:
  - "What in this doc might be ambiguous or unclear to readers?"
  - "What knowledge or context does this doc assume readers already have?"
  - "Are there any internal contradictions or inconsistencies?"

  ### Adım 4: Sonuçlara Dayalı Yinele

  Reader Claude'un yanlış yaptığı veya mücadele ettiği şeyi sorun. Bu boşlukları düzeltme niyetini belirtin.

  Sorunlu bölümler için iyileştirmeye geri döngüyü kapatın.

  ---

  ### Çıkış Koşulu (Her İki Yaklaşım)

  Reader Claude soruları tutarlı olarak doğru cevaplayıp yeni boşluk veya belirsizlik ortaya çıkarmadığında, belge hazırdır.

  ## Son İnceleme

  Reader Testing geçtiğinde:
  Belgenin Reader Claude testini geçtiğini ilan edin. Tamamlanmadan önce:

  1. Kendi kendilerini son bir kez okumalarını tavsiye edin - bu belgeyi sahiplenir ve kalitesinden sorumludur
  2. Herhangi bir gerçek, bağlantı veya teknik detayı iki kez kontrol etmelerini tavsiye edin
  3. İstenen etkiyi başarıp başarmadığını doğrulamalarını isteyin

  Bir kez daha inceleme isteyip istemediğini veya işin bittiğini sorun.

  **Kullanıcı son incelemesi isterse, bunu sağlayın. Aksi takdirde:**
  Belge tamamlamayı ilan edin. Birkaç son tavsiye sağlayın:
  - Bu konuşmayı bir ek olarak bağlamayı düşünün, böylece okuyucular belgenin nasıl geliştirildiğini görebilir
  - Derinlik sağlamak için ek metin kullanın, ana belgeyi şişirmeden
  - Gerçek okuyuculardan geri bildirim alındıkça belgeyi güncelleyin

  ## Etkili Rehberlik İçin İpuçları

  **Ton:**
  - Doğrudan ve prosedürel olun
  - Kullanıcı davranışını etkilediğinde gerekçeyi kısaca açıklayın
  - Yaklaşımı "satmaya" çalışmayın - sadece çalıştırın

  **Sapmalarla İlgilenmek:**
  - Kullanıcı bir aşamayı atlamak isterse: Bunu atlamak ve freeform olarak yazmak isteyip istemediğini sorun
  - Kullanıcı hayal kırıklığına uğramışsa görünüyorsa: Bunun bekleneninden daha uzun sürdüğünü bildirin. Daha hızlı hareket etme yollarını öneriniz
  - Her zaman kullanıcıya süreci ayarlama yeteneği verin

  **Bağlam Yönetimi:**
  - Boyunca, bahsedilen bir şey hakkında bağlam eksikse, proaktif olarak sorun
  - Boşlukları birikmeye izin vermeyin - bunları ortaya çıktıkça ele alın

  **Artifact Yönetimi:**
  - Tam bölümleri taslaklandırmak için `create_file` kullanın
  - Tüm düzeltmeler için `str_replace` kullanın
  - Her değişiklikten sonra artifact bağlantısı sağlayın
  - Hiçbir zaman artifact'ları beyin fırtınası listeleri için kullanmayın - bu sadece konuşma

  **Hız Üzerinde Kalite:**
  - Aşamalar boyunca acele etmeyin
  - Her yineleme anlamlı iyileştirmeler yapmalıdır
  - Hedef, okuyucular için gerçekten çalışan bir belgedir
---

# Doc Co-Authoring Workflow

This skill provides a structured workflow for guiding users through collaborative document creation. Act as an active guide, walking users through three stages: Context Gathering, Refinement & Structure, and Reader Testing.

## When to Offer This Workflow

**Trigger conditions:**
- User mentions writing documentation: "write a doc", "draft a proposal", "create a spec", "write up"
- User mentions specific doc types: "PRD", "design doc", "decision doc", "RFC"
- User seems to be starting a substantial writing task

**Initial offer:**
Offer the user a structured workflow for co-authoring the document. Explain the three stages:

1. **Context Gathering**: User provides all relevant context while Claude asks clarifying questions
2. **Refinement & Structure**: Iteratively build each section through brainstorming and editing
3. **Reader Testing**: Test the doc with a fresh Claude (no context) to catch blind spots before others read it

Explain that this approach helps ensure the doc works well when others read it (including when they paste it into Claude). Ask if they want to try this workflow or prefer to work freeform.

If user declines, work freeform. If user accepts, proceed to Stage 1.

## Stage 1: Context Gathering

**Goal:** Close the gap between what the user knows and what Claude knows, enabling smart guidance later.

### Initial Questions

Start by asking the user for meta-context about the document:

1. What type of document is this? (e.g., technical spec, decision doc, proposal)
2. Who's the primary audience?
3. What's the desired impact when someone reads this?
4. Is there a template or specific format to follow?
5. Any other constraints or context to know?

Inform them they can answer in shorthand or dump information however works best for them.

**If user provides a template or mentions a doc type:**
- Ask if they have a template document to share
- If they provide a link to a shared document, use the appropriate integration to fetch it
- If they provide a file, read it

**If user mentions editing an existing shared document:**
- Use the appropriate integration to read the current state
- Check for images without alt-text
- If images exist without alt-text, explain that when others use Claude to understand the doc, Claude won't be able to see them. Ask if they want alt-text generated. If so, request they paste each image into chat for descriptive alt-text generation.

### Info Dumping

Once initial questions are answered, encourage the user to dump all the context they have. Request information such as:
- Background on the project/problem
- Related team discussions or shared documents
- Why alternative solutions aren't being used
- Organizational context (team dynamics, past incidents, politics)
- Timeline pressures or constraints
- Technical architecture or dependencies
- Stakeholder concerns

Advise them not to worry about organizing it - just get it all out. Offer multiple ways to provide context:
- Info dump stream-of-consciousness
- Point to team channels or threads to read
- Link to shared documents

**If integrations are available** (e.g., Slack, Teams, Google Drive, SharePoint, or other MCP servers), mention that these can be used to pull in context directly.

**If no integrations are detected and in Claude.ai or Claude app:** Suggest they can enable connectors in their Claude settings to allow pulling context from messaging apps and document storage directly.

Inform them clarifying questions will be asked once they've done their initial dump.

**During context gathering:**

- If user mentions team channels or shared documents:
  - If integrations available: Inform them the content will be read now, then use the appropriate integration
  - If integrations not available: Explain lack of access. Suggest they enable connectors in Claude settings, or paste the relevant content directly.

- If user mentions entities/projects that are unknown:
  - Ask if connected tools should be searched to learn more
  - Wait for user confirmation before searching

- As user provides context, track what's being learned and what's still unclear

**Asking clarifying questions:**

When user signals they've done their initial dump (or after substantial context provided), ask clarifying questions to ensure understanding:

Generate 5-10 numbered questions based on gaps in the context.

Inform them they can use shorthand to answer (e.g., "1: yes, 2: see #channel, 3: no because backwards compat"), link to more docs, point to channels to read, or just keep info-dumping. Whatever's most efficient for them.

**Exit condition:**
Sufficient context has been gathered when questions show understanding - when edge cases and trade-offs can be asked about without needing basics explained.

**Transition:**
Ask if there's any more context they want to provide at this stage, or if it's time to move on to drafting the document.

If user wants to add more, let them. When ready, proceed to Stage 2.

## Stage 2: Refinement & Structure

**Goal:** Build the document section by section through brainstorming, curation, and iterative refinement.

**Instructions to user:**
Explain that the document will be built section by section. For each section:
1. Clarifying questions will be asked about what to include
2. 5-20 options will be brainstormed
3. User will indicate what to keep/remove/combine
4. The section will be drafted
5. It will be refined through surgical edits

Start with whichever section has the most unknowns (usually the core decision/proposal), then work through the rest.

**Section ordering:**

If the document structure is clear:
Ask which section they'd like to start with.

Suggest starting with whichever section has the most unknowns. For decision docs, that's usually the core proposal. For specs, it's typically the technical approach. Summary sections are best left for last.

If user doesn't know what sections they need:
Based on the type of document and template, suggest 3-5 sections appropriate for the doc type.

Ask if this structure works, or if they want to adjust it.

**Once structure is agreed:**

Create the initial document structure with placeholder text for all sections.

**If access to artifacts is available:**
Use `create_file` to create an artifact. This gives both Claude and the user a scaffold to work from.

Inform them that the initial structure with placeholders for all sections will be created.

Create artifact with all section headers and brief placeholder text like "[To be written]" or "[Content here]".

Provide the scaffold link and indicate it's time to fill in each section.

**If no access to artifacts:**
Create a markdown file in the working directory. Name it appropriately (e.g., `decision-doc.md`, `technical-spec.md`).

Inform them that the initial structure with placeholders for all sections will be created.

Create file with all section headers and placeholder text.

Confirm the filename has been created and indicate it's time to fill in each section.

**For each section:**

### Step 1: Clarifying Questions

Announce work will begin on the [SECTION NAME] section. Ask 5-10 clarifying questions about what should be included:

Generate 5-10 specific questions based on context and section purpose.

Inform them they can answer in shorthand or just indicate what's important to cover.

### Step 2: Brainstorming

For the [SECTION NAME] section, brainstorm [5-20] things that might be included, depending on the section's complexity. Look for:
- Context shared that might have been forgotten
- Angles or considerations not yet mentioned

Generate 5-20 numbered options based on section complexity. At the end, offer to brainstorm more if they want additional options.

### Step 3: Curation

Ask which points should be kept, removed, or combined. Request brief justifications to help learn priorities for the next sections.

Provide examples:
- "Keep 1,4,7,9"
- "Remove 3 (duplicates 1)"
- "Remove 6 (audience already knows this)"
- "Combine 11 and 12"

**If user gives freeform feedback** (e.g., "looks good" or "I like most of it but...") instead of numbered selections, extract their preferences and proceed. Parse what they want kept/removed/changed and apply it.

### Step 4: Gap Check

Based on what they've selected, ask if there's anything important missing for the [SECTION NAME] section.

### Step 5: Drafting

Use `str_replace` to replace the placeholder text for this section with the actual drafted content.

Announce the [SECTION NAME] section will be drafted now based on what they've selected.

**If using artifacts:**
After drafting, provide a link to the artifact.

Ask them to read through it and indicate what to change. Note that being specific helps learning for the next sections.

**If using a file (no artifacts):**
After drafting, confirm completion.

Inform them the [SECTION NAME] section has been drafted in [filename]. Ask them to read through it and indicate what to change. Note that being specific helps learning for the next sections.

**Key instruction for user (include when drafting the first section):**
Provide a note: Instead of editing the doc directly, ask them to indicate what to change. This helps learning of their style for future sections. For example: "Remove the X bullet - already covered by Y" or "Make the third paragraph more concise".

### Step 6: Iterative Refinement

As user provides feedback:
- Use `str_replace` to make edits (never reprint the whole doc)
- **If using artifacts:** Provide link to artifact after each edit
- **If using files:** Just confirm edits are complete
- If user edits doc directly and asks to read it: mentally note the changes they made and keep them in mind for future sections (this shows their preferences)

**Continue iterating** until user is satisfied with the section.

### Quality Checking

After 3 consecutive iterations with no substantial changes, ask if anything can be removed without losing important information.

When section is done, confirm [SECTION NAME] is complete. Ask if ready to move to the next section.

**Repeat for all sections.**

### Near Completion

As approaching completion (80%+ of sections done), announce intention to re-read the entire document and check for:
- Flow and consistency across sections
- Redundancy or contradictions
- Anything that feels like "slop" or generic filler
- Whether every sentence carries weight

Read entire document and provide feedback.

**When all sections are drafted and refined:**
Announce all sections are drafted. Indicate intention to review the complete document one more time.

Review for overall coherence, flow, completeness.

Provide any final suggestions.

Ask if ready to move to Reader Testing, or if they want to refine anything else.

## Stage 3: Reader Testing

**Goal:** Test the document with a fresh Claude (no context bleed) to verify it works for readers.

**Instructions to user:**
Explain that testing will now occur to see if the document actually works for readers. This catches blind spots - things that make sense to the authors but might confuse others.

### Testing Approach

**If access to sub-agents is available (e.g., in Claude Code):**

Perform the testing directly without user involvement.

### Step 1: Predict Reader Questions

Announce intention to predict what questions readers might ask when trying to discover this document.

Generate 5-10 questions that readers would realistically ask.

### Step 2: Test with Sub-Agent

Announce that these questions will be tested with a fresh Claude instance (no context from this conversation).

For each question, invoke a sub-agent with just the document content and the question.

Summarize what Reader Claude got right/wrong for each question.

### Step 3: Run Additional Checks

Announce additional checks will be performed.

Invoke sub-agent to check for ambiguity, false assumptions, contradictions.

Summarize any issues found.

### Step 4: Report and Fix

If issues found:
Report that Reader Claude struggled with specific issues.

List the specific issues.

Indicate intention to fix these gaps.

Loop back to refinement for problematic sections.

---

**If no access to sub-agents (e.g., claude.ai web interface):**

The user will need to do the testing manually.

### Step 1: Predict Reader Questions

Ask what questions people might ask when trying to discover this document. What would they type into Claude.ai?

Generate 5-10 questions that readers would realistically ask.

### Step 2: Setup Testing

Provide testing instructions:
1. Open a fresh Claude conversation: https://claude.ai
2. Paste or share the document content (if using a shared doc platform with connectors enabled, provide the link)
3. Ask Reader Claude the generated questions

For each question, instruct Reader Claude to provide:
- The answer
- Whether anything was ambiguous or unclear
- What knowledge/context the doc assumes is already known

Check if Reader Claude gives correct answers or misinterprets anything.

### Step 3: Additional Checks

Also ask Reader Claude:
- "What in this doc might be ambiguous or unclear to readers?"
- "What knowledge or context does this doc assume readers already have?"
- "Are there any internal contradictions or inconsistencies?"

### Step 4: Iterate Based on Results

Ask what Reader Claude got wrong or struggled with. Indicate intention to fix those gaps.

Loop back to refinement for any problematic sections.

---

### Exit Condition (Both Approaches)

When Reader Claude consistently answers questions correctly and doesn't surface new gaps or ambiguities, the doc is ready.

## Final Review

When Reader Testing passes:
Announce the doc has passed Reader Claude testing. Before completion:

1. Recommend they do a final read-through themselves - they own this document and are responsible for its quality
2. Suggest double-checking any facts, links, or technical details
3. Ask them to verify it achieves the impact they wanted

Ask if they want one more review, or if the work is done.

**If user wants final review, provide it. Otherwise:**
Announce document completion. Provide a few final tips:
- Consider linking this conversation in an appendix so readers can see how the doc was developed
- Use appendices to provide depth without bloating the main doc
- Update the doc as feedback is received from real readers

## Tips for Effective Guidance

**Tone:**
- Be direct and procedural
- Explain rationale briefly when it affects user behavior
- Don't try to "sell" the approach - just execute it

**Handling Deviations:**
- If user wants to skip a stage: Ask if they want to skip this and write freeform
- If user seems frustrated: Acknowledge this is taking longer than expected. Suggest ways to move faster
- Always give user agency to adjust the process

**Context Management:**
- Throughout, if context is missing on something mentioned, proactively ask
- Don't let gaps accumulate - address them as they come up

**Artifact Management:**
- Use `create_file` for drafting full sections
- Use `str_replace` for all edits
- Provide artifact link after every change
- Never use artifacts for brainstorming lists - that's just conversation

**Quality over Speed:**
- Don't rush through stages
- Each iteration should make meaningful improvements
- The goal is a document that actually works for readers
