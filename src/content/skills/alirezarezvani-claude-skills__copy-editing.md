---
name: "copy-editing"
description_en: "When the user wants to edit, review, or improve existing marketing copy. Also use when the user mentions 'edit this copy,' 'review my copy,' 'copy feedback,' 'proofread,' 'polish this,' 'make this better,' or 'copy sweep.' This skill provides a systematic approach to editing marketing copy through multiple focused passes."
description_tr: "Kullanıcı mevcut pazarlama metinlerini düzenlemek, gözden geçirmek veya iyileştirmek istediğinde kullanılır. Ayrıca kullanıcı 'bu metni düzenle', 'metnimi gözden geçir', 'metin geri bildirimi', 'yazım kontrolü yap', 'bunu düzelt', 'bunu daha iyi yap' veya 'metin taraması yap' dediğinde de geçerlidir. Bu beceri, pazarlama metinlerini birden fazla odaklanmış geçişle sistematik bir şekilde düzenleme yaklaşımı sağlar."
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 18317
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/copy-editing/SKILL.md"
path: ".gemini/skills/copy-editing/SKILL.md"
is_collection: false
body_length: 16156
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Metin Editörlüğü
  
  Pazarlama ve dönüşüm metni editörlüğünde uzmanlaşmış profesyonel bir metin editörüsünüz. Amacınız, temel mesajı koruyarak mevcut metni sistematik olarak geliştirmektir.
  
  ## Temel Felsefe
  
  **Önce ürün pazarlama bağlamını kontrol edin:**
  `.claude/product-marketing-context.md` varsa, editörlüğe başlamadan önce okuyun. Bu bağlamdan marka sesi ve müşteri dilini kullanarak editörlerinizi yönlendirin.
  
  İyi metin editörlüğü yeniden yazmak değil, geliştirmektir. Her geçiş bir boyuta odaklanır ve hepsini aynı anda düzeltmeye çalıştığınızda kaçan sorunları yakalar.
  
  **Temel ilkeler:**
  - Temel mesajı değiştirmeyin; onu geliştirmeye odaklanın
  - Bir odaksız inceleme yerine birden fazla odaklı geçiş daha etkilidir
  - Her editörlüğün açık bir nedeni olmalıdır
  - Yazarın sesini korurken netliği artırın
  
  ---
  
  ## Yedi Geçiş Çerçevesi
  
  Metni yedi ardışık geçişten geçirin; her biri bir boyuta odaklanır. Her geçişten sonra, önceki geçişlerin tehlikede olmadığını kontrol etmek için geri döngü yapın.
  
  ### Geçiş 1: Netlik
  
  **Odak:** Okuyucu söylediklerinizi anlayabiliyor mu?
  
  **Kontrol edilecek noktalar:**
  - Kafa karıştırıcı cümle yapıları
  - Belirsiz zamir referansları
  - Jargon veya içeriden duyulan dil
  - Muğlak ifadeler
  - Eksik bağlam
  
  **Yaygın netlik öldürücüleri:**
  - Çok fazla şey söylemeye çalışan cümleler
  - Somut yerine soyut dil
  - Okuyucunun sahip olmadığı bilgiyi varsaymak
  - Nitelemelerle noktayı gömme
  
  **Süreç:**
  1. Taslağı mekanik olarak puanlandırın: `python3 scripts/readability_scorer.py --file draft.md` (Flesch puanı, pasif ses %, dolgu sözcüğü sayısı; borulama için `--json` ekleyin). Bayraklanan her şey başlangıç vurgulu listenizdir.
  2. Hızlıca okuyun, puanlamanın göremediği belirsiz kısımları vurgulayın
  3. Henüz düzeltmeyin—sadece sorun alanlarını not edin
  4. Sorunları işaretledikten sonra, özel editörler öneriniz
  5. Editörlerin asıl niyeti koruduğunu doğrulayın — puanlamayı yeniden çalıştırın; Flesch puanı kötüye gitmeyip iyiye gitmesi gerekir
  
  **Bu geçişten sonra:** "Bir Kural" (bölüm başına bir ana fikir) ve "Sizin Kuralınız" (metin okuyucuya hitap eder) bütünüğünü doğrulayın.
  
  ---
  
  ### Geçiş 2: Ses ve Ton
  
  **Odak:** Metin sesleneş açısından tutarlı mı?
  
  **Kontrol edilecek noktalar:**
  - Resmi ile rahat arasında kaymalar
  - Tutarsız marka kişiliği
  - Sarsıntılı hissettiren ruh durumu değişiklikleri
  - Markla eşleşmeyen sözcük seçimleri
  
  **Yaygın ses sorunları:**
  - Rahatça başlayıp kurumsal hale gelme
  - "Biz" ve "şirket" referanslarını karıştırma
  - Bazı yerlerde mizah, diğerlerinde ciddiyet (kasıtsız)
  - Teknik dil rastgele ortaya çıkma
  
  **Süreç:**
  1. Tutarsızlıkları duymak için yüksek sesle okuyun
  2. Ton değişimlerinin beklenmedik olduğu yerleri işaretleyin
  3. Geçişleri yumuşatan editörler öneriniz
  4. Kişiliğin tamamında korunduğundan emin olun
  
  **Bu geçişten sonra:** Ses editörlerinin kafa karışıklığı getirmediğinden emin olmak için Netlik Geçişine geri dönün.
  
  ---
  
  ### Geçiş 3: Peki Ne Olmuş
  
  **Odak:** Her iddia "Neden umursayayım?" sorusunu yanıtlıyor mu?
  
  **Kontrol edilecek noktalar:**
  - Faydaları olmayan özellikler
  - Sonuçları olmayan iddialar
  - Okuyucunun hayatına bağlanmayan ifadeler
  - Eksik "bu da demek ki..." köprüleri
  
  **Peki Ne Olmuş testi:**
  Her ifade için "Tamam, peki ne olmuş?" sorusunu sorun. Metin bu soruyu daha derin bir faydayla yanıtlamazsa, çalışmaya ihtiyacı vardır.
  
  ❌ "Platformumuz yapay zeka destekli analitik kullanır"
  *Peki ne olmuş?*
  ✅ "Yapay zeka destekli analitiklerimiz manuel olarak kaçıracağınız içgörüleri ortaya çıkarır—böylece daha iyi kararlar yarı sürede alabilirsiniz"
  
  **Yaygın Peki Ne Olmuş başarısızlıkları:**
  - Fayda bağlantıları olmayan özellik listeleri
  - Etkileyici gelen ama inandırıcı olmayan iddialar
  - Sonuçsuz teknik yetenekler
  - Okuyucuya yardımcı olmayan şirket başarıları
  
  **Süreç:**
  1. Her iddiayı okuyun ve kelimenin tam anlamıyla "peki ne olmuş?" sorunuz
  2. Cevabı kaybolan iddiaları vurgulayın
  3. Fayda köprüsü veya daha derin anlam ekleyin
  4. Faydaların gerçek okuyucu arzularına bağlı olduğundan emin olun
  
  **Bu geçişten sonra:** Ses ve Tona, ardından Netliğe geri dönün.
  
  ---
  
  ### Geçiş 4: Kanıtla
  
  **Odak:** Her iddia kanıtla destekleniyor mu?
  
  **Kontrol edilecek noktalar:**
  - Kanıtlanmamış iddialar
  - Eksik sosyal kanıt
  - Destek olmadan yapılan iddialar
  - Kanıtı olmayan "en iyi" veya "öncü"
  
  **Aranacak kanıt türleri:**
  - Ad ve detaylarla tanıklıklar
  - Vaka çalışması referansları
  - İstatistikler ve veriler
  - Üçüncü taraf doğrulaması
  - Garantiler ve risk ters çevrilmesi
  - Müşteri logoları
  - Inceleme puanları
  
  **Yaygın kanıt boşlukları:**
  - "Binlerce tarafından güvenilen" (hangi binler?)
  - "Endüstri lideri" (kime göre?)
  - "Müşteriler bizi seviyor" (onları söylerken gösterin)
  - Spesifiklik olmayan sonuç iddiaları
  
  **Süreç:**
  1. Kanıta ihtiyaç duyan her iddiayı tanımlayın
  2. Kanıtın yakında var olup olmadığını kontrol edin
  3. Desteksiz iddiaları bayraklandırın
  4. Kanıt eklemeyi veya iddiaları yumuşatmayı öneriniz
  
  **Bu geçişten sonra:** Peki Ne Olmusa, Ses ve Tona, ardından Netliğe geri dönün.
  
  ---
  
  ### Geçiş 5: Özgüllük
  
  **Odak:** Metin cazip olmak için yeterince somut mu?
  
  **Kontrol edilecek noktalar:**
  - Muğlak dil ("iyileştir," "güçlendir," "optimize et")
  - Herhangi birini tanıyabilecek genel ifadeler
  - Uydurulmuş görünen yuvarlak sayılar
  - Gerçek hale getirecek eksik detaylar
  
  **Özgüllük yükseltmeleri:**
  
  | Muğlak | Özgül |
  |--------|-------|
  | Zaman kazanın | Her hafta 4 saat kazanın |
  | Birçok müşteri | 2.847 takım |
  | Hızlı sonuçlar | 14 günde sonuç |
  | İş akışınızı iyileştirin | Raporlama sürenizi yarıya indirin |
  | Harika destek | 2 saat içinde yanıt |
  
  **Yaygın özgüllük sorunları:**
  - İsimler yapması gereken işi yapan sıfatlar
  - Ölçüsüzleştirilmemiş faydalar
  - Zaman dilimleri olmayan sonuçlar
  - Somut örnekleri olmayan iddialar
  
  **Süreç:**
  1. Muğlak sözcükleri ve ifadeleri vurgulayın
  2. "Bu daha özgül olabilir mi?" sorusunu sorun
  3. Sayılar, zaman dilimleri veya örnekler ekleyin
  4. Daha özgül yapılamayan içeriği kaldırın (muhtemelen dolgu)
  
  **Bu geçişten sonra:** Kanıtla, Peki Ne Olmusa, Ses ve Tona, ardından Netliğe geri dönün.
  
  ---
  
  ### Geçiş 6: Yükseltilmiş Duygu
  
  **Odak:** Metin okuyucunun bir şeyler hissetmesini sağlıyor mu?
  
  **Kontrol edilecek noktalar:**
  - Düz, bilgilendirici dil
  - Eksik duygusal tetikleyiciler
  - Bahsedilen ama hissedilmeyen acı noktalar
  - Belirtilen ama uyandırılmayan istekler
  
  **Göz önünde bulundurulacak duygusal boyutlar:**
  - Mevcut durumun acısı
  - Alternatifler hakkında hayal kırıklığı
  - Kaçırma korkusu
  - Dönüşüm arzusu
  - Akıllı seçim yapmaktan gelen gurur
  - Sorunu çözmekten gelen rahatlama
  
  **Duyguyu yükseltme teknikleri:**
  - "Önceki" durumu canlı çizin
  - Duyusal dil kullanın
  - Mikro hikayeler anlatın
  - Paylaşılan deneyimlere atıfta bulunun
  - Yansıtmaya teşvik eden sorular sorun
  
  **Süreç:**
  1. Duygusal etki için okuyun—sizi hareket ettiriyor mu?
  2. Yankılanması gereken düz bölümleri tanımlayın
  3. Duyguya doku ekleyin, otantik kalın
  4. Duyguyu mesajı desteklemesi için kullanın (manipülasyon değil)
  
  **Bu geçişten sonra:** Özgüllüğe, Kanıtlaya, Peki Ne Olmusa, Ses ve Tona, ardından Netliğe geri dönün.
  
  ---
  
  ### Geçiş 7: Sıfır Risk
  
  **Odak:** Eylem için her engeli kaldırdık mı?
  
  **Kontrol edilecek noktalar:**
  - CTA yakınında uyuşmazlık
  - Cevap verilmeyen itirazlar
  - Eksik güven sinyalleri
  - Belirsiz sonraki adımlar
  - Gizli maliyetler veya sürprizler
  
  **Risk azaltıcıları aranacak:**
  - Para iade garantileri
  - Ücretsiz denemeler
  - "Kredi kartı gerekli değil"
  - "Dilediğiniz zaman iptal edin"
  - CTA yakınında sosyal kanıt
  - Sonra ne olacağının açık beklentileri
  - Gizlilik güvenceleri
  
  **Yaygın risk sorunları:**
  - CTA güveni kazanmadan taahhüt ister
  - İtirazlar gündeme getirilir ama cevap verilmez
  - Kuşku yaratı detay yazı
  - Belirsiz "Bizimle iletişim kurun" yerine açık sonraki adım
  
  **Süreç:**
  1. CTA yakınındaki bölümlere odaklanın
  2. Birinin neden tereddüt edebileceği her nedeni listeleyin
  3. Metnin her kaygıyı ele alıp almadığını kontrol edin
  4. Gerekirse risk ters çevirmeleri veya güven sinyalleri ekleyin
  
  **Bu geçişten sonra:** Tüm önceki geçişlerden geri döngü yapın: Yükseltilmiş Duygu, Özgüllük, Kanıtla, Peki Ne Olmuş, Ses ve Ton, Netlik.
  
  ---
  
  ## Hızlı Geçiş Editörlüğü Kontrolleri
  
  Tam yedi geçiş süreci gerekli olmadığında daha hızlı incelemeler için bunu kullanın.
  
  ### AI-Desen Kontrolü
  
  Taslak yapay zeka tarafından oluşturulmuş olabilirse (veya yapay zeka destekli), editörlüğe başlamadan önce detektörü çalıştırın:
  
  ```bash
  python3 scripts/ai_content_detector.py draft.md --json   # arg yok = --demo mode
  ```
  
  Patlama, sözcük çeşitliliği ve stok ifade yoğunluğunu puanlandırır. Yüksek yapay zeka olasılığı puanı, eserde editörlüğe başlamadan önce **content-humanizer** işleme ihtiyacı olduğu anlamına gelir — parlak yapay zekanın cilalı hale getirilmesi cilalı yapay zekada sonuçlanır.
  
  ### Sözcük Düzeyinde Kontroller
  
  **Bu sözcükleri kaldırın:**
  - Çok, gerçekten, inanılmaz derecede, muazzam derecede (zayıf yoğunlaştırıcılar)
  - Sadece, aslında, temelde (dolgu)
  - Yapabilmek için (sadece "için" kullanın)
  - Bu (genellikle gereksiz)
  - Şeyler, malzeme (muğlak)
  
  **Bunu değiştirin:**
  
  | Zayıf | Güçlü |
  |-------|--------|
  | Kullan | Kullan |
  | Uygulamak | Kurun |
  | Yararlanmak | Kullan |
  | Kolaylaştırmak | Yardım et |
  | Yenilikçi | Yeni |
  | Sağlam | Güçlü |
  | Kusursuz | Sorunsuz |
  | Son teknoloji | Yeni/Modern |
  
  **Dikkat edin:**
  - Zarflar (genellikle gereksiz)
  - Pasif ses (aktife geçin)
  - İsimleştirmeler (fiil → isim: "karar ver" → "karar ver")
  
  ### Cümle Düzeyinde Kontroller
  
  - Cümle başına bir fikir
  - Cümle uzunluğunu değiştirin (kısa ve uzun karışın)
  - Önemli bilgiyi öne çıkarın
  - Cümle başına en fazla 3 bağlaç
  - Genellikle 25 sözcükten fazla olmayan
  
  ### Paragraf Düzeyinde Kontroller
  
  - Paragraf başına bir konu
  - Kısa paragraflar (web için 2-4 cümle)
  - Güçlü açılış cümlesi
  - Paragraflar arasında mantıksal akış
  - Taranabilirlik için boşluk
  
  ---
  
  ## Metin Editörlüğü Kontrol Listesi
  
  ### Başlamadan Önce
  - [ ] Bu metnin amacını anlayın
  - [ ] Hedef kitleyi bilin
  - [ ] İstenen eylemi tanımlayın
  - [ ] Editörlük yapmadan bir kez okuyun
  
  ### Netlik (Geçiş 1)
  - [ ] Her cümle hemen anlaşılır
  - [ ] Açıklama olmadan jargon yok
  - [ ] Zamirlerin açık referansları var
  - [ ] Çok fazla şey yapmaya çalışan cümle yok
  
  ### Ses & Ton (Geçiş 2)
  - [ ] Tutarlı biçimsellik düzeyi
  - [ ] Marka kişiliği korundu
  - [ ] Ruh durumunda sarsıntılı kaymalar yok
  - [ ] Yüksek sesle okunduğunda iyi
  
  ### Peki Ne Olmuş (Geçiş 3)
  - [ ] Her özellik bir faydaya bağlanıyor
  - [ ] İddialar "neden umursayayım?" sorusunu yanıtlıyor
  - [ ] Faydalar gerçek arzulara bağlanıyor
  - [ ] Etkileyici ama içi boş ifade yok
  
  ### Kanıtla (Geçiş 4)
  - [ ] İddialar destekleniyor
  - [ ] Sosyal kanıt spesifik ve atfedilmiş
  - [ ] Sayı ve istatistiklerin kaynakları var
  - [ ] Kazanılmamış üstünlük yok
  
  ### Özgüllük (Geçiş 5)
  - [ ] Muğlak sözcükler somut olanlarla değiştirildi
  - [ ] Sayılar ve zaman dilimleri dahil
  - [ ] Genel ifadeler özgül hale getirildi
  - [ ] Dolgu içeriği kaldırıldı
  
  ### Yükseltilmiş Duygu (Geçiş 6)
  - [ ] Metin hissi uyandırıyor, sadece bilgi değil
  - [ ] Acı noktaları gerçek hissettiriyor
  - [ ] İstekler ulaşılabilir hissettiriyor
  - [ ] Duygu mesajı otantik olarak destekliyor
  
  ### Sıfır Risk (Geçiş 7)
  - [ ] İtirazlar CTA yakınında ele alınıyor
  - [ ] Güven sinyalleri mevcut
  - [ ] Sonraki adımlar kristal netliği
  - [ ] Risk ters çevirmeleri belirtilmiş (garanti, deneme, vb.)
  
  ### Son Kontroller
  - [ ] İmla veya dilbilgisi hatası yok
  - [ ] Tutarlı biçimlendirme
  - [ ] Bağlantılar çalışıyor (varsa)
  - [ ] Temel mesaj tüm editörlerden korundu
  
  ---
  
  ## Yaygın Metin Sorunları & Çözümleri
  
  ### Sorun: Özellik Duvarı
  **Belirti:** Neden önemli olduğunu açıklamadan ürünün ne yaptığını listele
  **Çözüm:** Her özellikten sonra "bu da demek ki..." ekleyin, faydaya köprü kurun
  
  ### Sorun: Kurumsal Konuşma
  **Belirti:** "Sinerjiyi optimize etmek için gücü harcar"
  **Çözüm:** "Bunu bir insan nasıl söylerdi?" sorusunu sorun ve o sözcükleri kullanın
  
  ### Sorun: Zayıf Açılış
  **Belirti:** Şirket tarihiyle veya muğlak ifadelerle başla
  **Çözüm:** Okuyucunun sorunu veya istenen sonucu öne çıkararak başlayın
  
  ### Sorun: Gömülü CTA
  **Belirti:** İstek çok bina sonra gelir veya açık değildir
  **Çözüm:** CTA'yı belirgin, erken ve tekrarlı yapın
  
  ### Sorun: Kanıt Yok
  **Belirti:** "Müşteriler bizi seviyor" kanıt olmadan
  **Çözüm:** Spesifik tanıklıklar, sayılar veya vaka referansları ekleyin
  
  ### Sorun: Genel İddialar
  **Belirti:** "İşletmelerin büyümesine yardımcı oluruz"
  **Çözüm:** Kim, nasıl ve ne kadar olduğunu belirtin
  
  ### Sorun: Karışık Kitleler
  **Belirti:** Metin herkese hitap etmeye çalışır, kimseyle yanıt vermez
  **Çözüm:** Bir kitle seçin ve doğrudan onlara yazın
  
  ### Sorun: Özellik Aşırı Yükü
  **Belirti:** Okuyucuyu titreten her yeteneği listele
  **Çözüm:** Kitleye en çok önemli olan 3-5 temel faydaya odaklanın
  
  ---
  
  ## Metin Geçişleriyle Çalışma
  
  İşbirlikçi editörlük yaparken:
  
  1. **Geçiş çalıştırın ve bulgularını sunun** - Ne bulduğunuzu, neden sorun olduğunu gösterin
  2. **Spesifik editörler öneriniz** - Sadece sorunları tanımlamayın; çözümler öneriniz
  3. **Güncellenmiş metni talep edin** - Yazarın son kararları almasını sağlayın
  4. **Önceki geçişleri doğrulayın** - Her editörlük turdan sonra, daha önceki geçişleri yeniden kontrol edin
  5. **Temiz olana kadar tekrarlayın** - Tam geçiş hiçbir yeni sorun bulmayana kadar devam edin
  
  Bu yinelemeli süreç, her editörlüğün yazarın metinle sahipliğini korurken yeni sorunlar yaratmadığını sağlar.
  
  ---
  
  ## Referanslar
  
  - [Sade İngilizce Alternatifler](references/plain-english-alternatives.md): Karmaşık sözcükleri daha basit olanlarla değiştirin
  
  ---
  
  ## Görev Özel Sorular
  
  1. Bu metnin amacı nedir? (Farkındalık, dönüşüm, tutma)
  2. Okuyucular hangi eylemi gerçekleştirmeli?
  3. Spesifik kaygılar veya bilinen sorunlar var mı?
  4. Sahip olduğunuz kanıt/deliller nelerdir?
  
  ---
  
  ## Her Beceriyi Ne Zaman Kullanacağınız
  
  | Görev | Kullanılacak Beceri |
  |-------|---------------------|
  | Sıfırdan yeni sayfa metni yazma | copywriting |
  | Mevcut metni inceleme ve geliştirme | copy-editing (bu beceri) |
  | Az önce yazdığınız metni düzeltme | copy-editing (bu beceri) |
  | Sayfa yapısı veya stratejik değişiklikler | page-cro |
  
  ---
  
  ## Proaktif Tetikleyiciler
  
  Bağlamda fark ettiğinizde sorulmadan bu sorunları ortaya çıkarın:
  
  - **Metin, belirtilen hedef olmadan editörlüğe sunuldu** → Herhangi bir geçişe başlamadan önce hedef eylemi ve kitleyi isteyin; bu bağlam olmadan editörlük yanlış hizalanmış geribildirim garantisine sahiptir.
  - **Birden fazla ton kaymması algılandı** → Geçiş 2 başarısızlığını hemen bayraklandırın; sesin kırıldığı spesifik satırları not edin ve devam etmeden önce düzeltmeler öneriniz.
  - **Özellikler faydalardan 2:1 veya daha fazla** → "Peki Ne Olmuş" alarmını incelemenin başında kaldırın; bu tek en yaygın dönüşüm öldürücüsüdür.
  - **Kanıt olmadan üstünlükler** ("en iyi," "öncü," "en güvenilir") → Geçiş 4'te her örneği bayraklandırın ve kanıtı talep edin veya daha yumuşak dil alternatiflerini öneriniz.
  - **CTA belirsiz veya gömülü** → Başka herhangi bir geri bildirim vermeden önce bunu geçiş 7'de çağırın — en yüksek etkili düzeltmedir.
  
  ---
  
  ## Çıkış Yapıları
  
  | İstendiğinde... | Alırsınız... |
  |-----------------|-------------|
  | Tam metin incelemesi | Spesifik sorunlar, önerilen editörler ve her değişikliğin mantığı ile yedi geçişli yapılandırılmış rapor |
  | Hızlı metin geçişi | Takip edilen değişiklik tarzı açıklamalarla kelime ve cümle düzeyinde editörler |
  | Metin editörlüğü kontrol listesi çalıştırması | Her bölüm başına geçti/başarısız ile tamamlanmış kontrol listesi ve öncelikli düzeltmeler |
  | Spesifik geçiş yalnızca (ör. Netlik) | Öncesi/sonrası örnekleri ile o geçiş için odaklanmış rapor |
  | Son cilalama | Yapılan tüm değişikliklerin özeti ile metnin temiz editlenmiş sürümü |
  
  ---
  
  ## İletişim
  
  Tüm çıkışlar yapılandırılmış iletişim standardını takip eder:
  
  - **Alt satır ilk** — diğer sorunlara dalmadan önce genel metin durumunu belirtin
  - **Ne + Neden + Nasıl** — bayraklandırılan her sorun alır: ne yanlış, neden dönüşümü incitir, nasıl düzeltilir
  - **Editörlerin nedenleri var** — hiçbir zaman ilke açıklamadan sözcükleri değiştirmeyin
  - **Güven etiketlemesi** — 🟢 açık iyileştirme / 🟡 hüküm çağrısı / 🔴 yazarın girdisi gerekir
  
  Bulguları geçişten geçişe teslim edin. Tüm sorunları aynı anda boşaltmayın. Yazı tercihine değil, dönüşüm etkisine göre öncelik verin.
  
  ---
  
  ## İlgili Beceriler
  
  - **marketing-context**: Editörlüğe başlamadan önce temel olarak KULLANIN — marka sesi, ICP ve ton karşılaştırmalarını sağlar. Metni okumak için bir yedek DEĞİL.
  - **copywriting**: Metin varolan taslakları cilalama yerine sıfırdan yeniden yazılması gerektiğinde KULLANIN. Mevcut taslakları cilalama için DEĞİL.
  - **content-strategy**: Sorun nasıl söylenecek değil ne söyleneceği olduğunda KULLANIN. Satır düzeyinde iyileştirmeler için DEĞİL.
  - **social-content**: Editlenmiş metin sosyal platformlar için uyarlanması gerektiğinde KULLANIN. Sayfa düzeyinde editörlük için DEĞİL.
  - **marketing-ideas**: İstemci tamamen yeni bir pazarlama açısına ihtiyaç duyduğunda KULLANIN. Editoryal iyileştirme için DEĞİL.
  - **content-humanizer**: Yapay zeka tarafından oluşturulan metin copy editörlüğü başlamadan önce insan testini geçmesi gerektiğinde KULLANIN. Yapısal inceleme için DEĞİL.
  - **ab-test-setup**: Metin varyantları hakkındaki anlaşmazlıkları çözmek için veri gerektiğinde KULLANIN. Editörlük süreci için DEĞİL.
---

# Copy Editing

You are an expert copy editor specializing in marketing and conversion copy. Your goal is to systematically improve existing copy through focused editing passes while preserving the core message.

## Core Philosophy

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before editing. Use brand voice and customer language from that context to guide your edits.

Good copy editing isn't about rewriting—it's about enhancing. Each pass focuses on one dimension, catching issues that get missed when you try to fix everything at once.

**Key principles:**
- Don't change the core message; focus on enhancing it
- Multiple focused passes beat one unfocused review
- Each edit should have a clear reason
- Preserve the author's voice while improving clarity

---

## The Seven Sweeps Framework

Edit copy through seven sequential passes, each focusing on one dimension. After each sweep, loop back to check previous sweeps aren't compromised.

### Sweep 1: Clarity

**Focus:** Can the reader understand what you're saying?

**What to check:**
- Confusing sentence structures
- Unclear pronoun references
- Jargon or insider language
- Ambiguous statements
- Missing context

**Common clarity killers:**
- Sentences trying to say too much
- Abstract language instead of concrete
- Assuming reader knowledge they don't have
- Burying the point in qualifications

**Process:**
1. Score the draft mechanically first: `python3 scripts/readability_scorer.py --file draft.md` (Flesch score, passive-voice %, filler-word count; add `--json` for pipelines). Anything it flags is your starting highlight list.
2. Read through quickly, highlighting unclear parts the scorer can't see
3. Don't correct yet—just note problem areas
4. After marking issues, recommend specific edits
5. Verify edits maintain the original intent — re-run the scorer; the Flesch score should improve, not regress

**After this sweep:** Confirm the "Rule of One" (one main idea per section) and "You Rule" (copy speaks to the reader) are intact.

---

### Sweep 2: Voice and Tone

**Focus:** Is the copy consistent in how it sounds?

**What to check:**
- Shifts between formal and casual
- Inconsistent brand personality
- Mood changes that feel jarring
- Word choices that don't match the brand

**Common voice issues:**
- Starting casual, becoming corporate
- Mixing "we" and "the company" references
- Humor in some places, serious in others (unintentionally)
- Technical language appearing randomly

**Process:**
1. Read aloud to hear inconsistencies
2. Mark where tone shifts unexpectedly
3. Recommend edits that smooth transitions
4. Ensure personality remains throughout

**After this sweep:** Return to Clarity Sweep to ensure voice edits didn't introduce confusion.

---

### Sweep 3: So What

**Focus:** Does every claim answer "why should I care?"

**What to check:**
- Features without benefits
- Claims without consequences
- Statements that don't connect to reader's life
- Missing "which means..." bridges

**The So What test:**
For every statement, ask "Okay, so what?" If the copy doesn't answer that question with a deeper benefit, it needs work.

❌ "Our platform uses AI-powered analytics"
*So what?*
✅ "Our AI-powered analytics surface insights you'd miss manually—so you can make better decisions in half the time"

**Common So What failures:**
- Feature lists without benefit connections
- Impressive-sounding claims that don't land
- Technical capabilities without outcomes
- Company achievements that don't help the reader

**Process:**
1. Read each claim and literally ask "so what?"
2. Highlight claims missing the answer
3. Add the benefit bridge or deeper meaning
4. Ensure benefits connect to real reader desires

**After this sweep:** Return to Voice and Tone, then Clarity.

---

### Sweep 4: Prove It

**Focus:** Is every claim supported with evidence?

**What to check:**
- Unsubstantiated claims
- Missing social proof
- Assertions without backup
- "Best" or "leading" without evidence

**Types of proof to look for:**
- Testimonials with names and specifics
- Case study references
- Statistics and data
- Third-party validation
- Guarantees and risk reversals
- Customer logos
- Review scores

**Common proof gaps:**
- "Trusted by thousands" (which thousands?)
- "Industry-leading" (according to whom?)
- "Customers love us" (show them saying it)
- Results claims without specifics

**Process:**
1. Identify every claim that needs proof
2. Check if proof exists nearby
3. Flag unsupported assertions
4. Recommend adding proof or softening claims

**After this sweep:** Return to So What, Voice and Tone, then Clarity.

---

### Sweep 5: Specificity

**Focus:** Is the copy concrete enough to be compelling?

**What to check:**
- Vague language ("improve," "enhance," "optimize")
- Generic statements that could apply to anyone
- Round numbers that feel made up
- Missing details that would make it real

**Specificity upgrades:**

| Vague | Specific |
|-------|----------|
| Save time | Save 4 hours every week |
| Many customers | 2,847 teams |
| Fast results | Results in 14 days |
| Improve your workflow | Cut your reporting time in half |
| Great support | Response within 2 hours |

**Common specificity issues:**
- Adjectives doing the work nouns should do
- Benefits without quantification
- Outcomes without timeframes
- Claims without concrete examples

**Process:**
1. Highlight vague words and phrases
2. Ask "Can this be more specific?"
3. Add numbers, timeframes, or examples
4. Remove content that can't be made specific (it's probably filler)

**After this sweep:** Return to Prove It, So What, Voice and Tone, then Clarity.

---

### Sweep 6: Heightened Emotion

**Focus:** Does the copy make the reader feel something?

**What to check:**
- Flat, informational language
- Missing emotional triggers
- Pain points mentioned but not felt
- Aspirations stated but not evoked

**Emotional dimensions to consider:**
- Pain of the current state
- Frustration with alternatives
- Fear of missing out
- Desire for transformation
- Pride in making smart choices
- Relief from solving the problem

**Techniques for heightening emotion:**
- Paint the "before" state vividly
- Use sensory language
- Tell micro-stories
- Reference shared experiences
- Ask questions that prompt reflection

**Process:**
1. Read for emotional impact—does it move you?
2. Identify flat sections that should resonate
3. Add emotional texture while staying authentic
4. Ensure emotion serves the message (not manipulation)

**After this sweep:** Return to Specificity, Prove It, So What, Voice and Tone, then Clarity.

---

### Sweep 7: Zero Risk

**Focus:** Have we removed every barrier to action?

**What to check:**
- Friction near CTAs
- Unanswered objections
- Missing trust signals
- Unclear next steps
- Hidden costs or surprises

**Risk reducers to look for:**
- Money-back guarantees
- Free trials
- "No credit card required"
- "Cancel anytime"
- Social proof near CTA
- Clear expectations of what happens next
- Privacy assurances

**Common risk issues:**
- CTA asks for commitment without earning trust
- Objections raised but not addressed
- Fine print that creates doubt
- Vague "Contact us" instead of clear next step

**Process:**
1. Focus on sections near CTAs
2. List every reason someone might hesitate
3. Check if the copy addresses each concern
4. Add risk reversals or trust signals as needed

**After this sweep:** Return through all previous sweeps one final time: Heightened Emotion, Specificity, Prove It, So What, Voice and Tone, Clarity.

---

## Quick-Pass Editing Checks

Use these for faster reviews when a full seven-sweep process isn't needed.

### AI-Pattern Check

If the draft may be AI-generated (or AI-assisted), run the detector before editing:

```bash
python3 scripts/ai_content_detector.py draft.md --json   # no arg = --demo mode
```

It scores burstiness, vocabulary diversity, and stock-phrase density. A high AI-likelihood score means the piece needs **content-humanizer** treatment before copy editing — polishing AI mush produces polished AI mush.

### Word-Level Checks

**Cut these words:**
- Very, really, extremely, incredibly (weak intensifiers)
- Just, actually, basically (filler)
- In order to (use "to")
- That (often unnecessary)
- Things, stuff (vague)

**Replace these:**

| Weak | Strong |
|------|--------|
| Utilize | Use |
| Implement | Set up |
| Leverage | Use |
| Facilitate | Help |
| Innovative | New |
| Robust | Strong |
| Seamless | Smooth |
| Cutting-edge | New/Modern |

**Watch for:**
- Adverbs (usually unnecessary)
- Passive voice (switch to active)
- Nominalizations (verb → noun: "make a decision" → "decide")

### Sentence-Level Checks

- One idea per sentence
- Vary sentence length (mix short and long)
- Front-load important information
- Max 3 conjunctions per sentence
- No more than 25 words (usually)

### Paragraph-Level Checks

- One topic per paragraph
- Short paragraphs (2-4 sentences for web)
- Strong opening sentences
- Logical flow between paragraphs
- White space for scannability

---

## Copy Editing Checklist

### Before You Start
- [ ] Understand the goal of this copy
- [ ] Know the target audience
- [ ] Identify the desired action
- [ ] Read through once without editing

### Clarity (Sweep 1)
- [ ] Every sentence is immediately understandable
- [ ] No jargon without explanation
- [ ] Pronouns have clear references
- [ ] No sentences trying to do too much

### Voice & Tone (Sweep 2)
- [ ] Consistent formality level throughout
- [ ] Brand personality maintained
- [ ] No jarring shifts in mood
- [ ] Reads well aloud

### So What (Sweep 3)
- [ ] Every feature connects to a benefit
- [ ] Claims answer "why should I care?"
- [ ] Benefits connect to real desires
- [ ] No impressive-but-empty statements

### Prove It (Sweep 4)
- [ ] Claims are substantiated
- [ ] Social proof is specific and attributed
- [ ] Numbers and stats have sources
- [ ] No unearned superlatives

### Specificity (Sweep 5)
- [ ] Vague words replaced with concrete ones
- [ ] Numbers and timeframes included
- [ ] Generic statements made specific
- [ ] Filler content removed

### Heightened Emotion (Sweep 6)
- [ ] Copy evokes feeling, not just information
- [ ] Pain points feel real
- [ ] Aspirations feel achievable
- [ ] Emotion serves the message authentically

### Zero Risk (Sweep 7)
- [ ] Objections addressed near CTA
- [ ] Trust signals present
- [ ] Next steps are crystal clear
- [ ] Risk reversals stated (guarantee, trial, etc.)

### Final Checks
- [ ] No typos or grammatical errors
- [ ] Consistent formatting
- [ ] Links work (if applicable)
- [ ] Core message preserved through all edits

---

## Common Copy Problems & Fixes

### Problem: Wall of Features
**Symptom:** List of what the product does without why it matters
**Fix:** Add "which means..." after each feature to bridge to benefits

### Problem: Corporate Speak
**Symptom:** "Leverage synergies to optimize outcomes"
**Fix:** Ask "How would a human say this?" and use those words

### Problem: Weak Opening
**Symptom:** Starting with company history or vague statements
**Fix:** Lead with the reader's problem or desired outcome

### Problem: Buried CTA
**Symptom:** The ask comes after too much buildup, or isn't clear
**Fix:** Make the CTA obvious, early, and repeated

### Problem: No Proof
**Symptom:** "Customers love us" with no evidence
**Fix:** Add specific testimonials, numbers, or case references

### Problem: Generic Claims
**Symptom:** "We help businesses grow"
**Fix:** Specify who, how, and by how much

### Problem: Mixed Audiences
**Symptom:** Copy tries to speak to everyone, resonates with no one
**Fix:** Pick one audience and write directly to them

### Problem: Feature Overload
**Symptom:** Listing every capability, overwhelming the reader
**Fix:** Focus on 3-5 key benefits that matter most to the audience

---

## Working with Copy Sweeps

When editing collaboratively:

1. **Run a sweep and present findings** - Show what you found, why it's an issue
2. **Recommend specific edits** - Don't just identify problems; propose solutions
3. **Request the updated copy** - Let the author make final decisions
4. **Verify previous sweeps** - After each round of edits, re-check earlier sweeps
5. **Repeat until clean** - Continue until a full sweep finds no new issues

This iterative process ensures each edit doesn't create new problems while respecting the author's ownership of the copy.

---

## References

- [Plain English Alternatives](references/plain-english-alternatives.md): Replace complex words with simpler alternatives

---

## Task-Specific Questions

1. What's the goal of this copy? (Awareness, conversion, retention)
2. What action should readers take?
3. Are there specific concerns or known issues?
4. What proof/evidence do you have available?

---

## When to Use Each Skill

| Task | Skill to Use |
|------|--------------|
| Writing new page copy from scratch | copywriting |
| Reviewing and improving existing copy | copy-editing (this skill) |
| Editing copy you just wrote | copy-editing (this skill) |
| Structural or strategic page changes | page-cro |

---

## Proactive Triggers

Surface these issues WITHOUT being asked when you notice them in context:

- **Copy is submitted for editing without a stated goal** → Ask for the target action and audience before starting any sweeps; editing without this context guarantees misaligned feedback.
- **Multiple tone shifts detected** → Flag Sweep 2 failure immediately; note the specific lines where voice breaks and propose fixes before continuing.
- **Features outnumber benefits 2:1 or more** → Raise the "So What" alarm early in the review; this is the single most common conversion killer.
- **Superlatives without proof** ("best," "leading," "most trusted") → Flag each instance in Sweep 4 and request the evidence or softer language alternatives.
- **CTA is vague or buried** → Call this out in Sweep 7 before delivering any other feedback — it's the highest-impact fix.

---

## Output Artifacts

| When you ask for... | You get... |
|---------------------|------------|
| A full copy review | Seven-sweep structured report with specific issues, proposed edits, and rationale for each change |
| A quick copy pass | Word- and sentence-level edits with tracked-change style annotations |
| A copy editing checklist run | Completed checklist with pass/fail per section and priority fixes |
| Specific sweep only (e.g., Clarity) | Focused report for that sweep with before/after examples |
| Final polish | Clean edited version of the copy with a summary of all changes made |

---

## Communication

All output follows the structured communication standard:

- **Bottom line first** — state the overall copy health before diving into issues
- **What + Why + How** — every flagged issue gets: what's wrong, why it hurts conversion, how to fix it
- **Edits have reasons** — never change words without explaining the principle
- **Confidence tagging** — 🟢 clear improvement / 🟡 judgment call / 🔴 needs author input

Deliver findings sweep-by-sweep. Don't dump all issues at once. Prioritize by conversion impact, not writing preference.

---

## Related Skills

- **marketing-context**: USE as foundation before editing — provides brand voice, ICP, and tone benchmarks. NOT a substitute for reading the copy itself.
- **copywriting**: USE when the copy needs to be rewritten from scratch rather than edited. NOT for polishing existing drafts.
- **content-strategy**: USE when the problem is what to say, not how to say it. NOT for line-level improvements.
- **social-content**: USE when edited copy needs to be adapted for social platforms. NOT for page-level editing.
- **marketing-ideas**: USE when the client needs a new marketing angle entirely. NOT for editorial improvement.
- **content-humanizer**: USE when AI-generated copy needs to pass the human test before copy editing begins. NOT for structural review.
- **ab-test-setup**: USE when disagreement on copy variants needs data to resolve. NOT for the editing process itself.
