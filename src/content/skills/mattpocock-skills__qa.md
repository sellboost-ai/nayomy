---
name: "qa"
description_en: "Interactive QA session where user reports bugs or issues conversationally, and the agent files GitHub issues. Explores the codebase in the background for context and domain language. Use when user wants to report bugs, do QA, file issues conversationally, or mentions \"QA session\"."
description_tr: "Kullanıcının sorun ve hataları konuşarak bildirebildiği, aracının GitHub issue açtığı interaktif QA oturumu. Arka planda codebase'i inceleyerek bağlam ve domain dilini öğrenir. Kullanıcı hata bildirmek, QA yapmak, konuşarak issue açmak istediğinde veya \"QA session\" dediğinde kullanılır."
category: "Development"
repo: "mattpocock/skills"
stars: 132588
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/deprecated/qa/SKILL.md"
path: "skills/deprecated/qa/SKILL.md"
is_collection: false
body_length: 4617
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # QA Oturumu

  Etkileşimli bir QA oturumu çalıştırın. Kullanıcı karşılaştıkları sorunları açıklar. Siz açıklığa kavuşturur, kod tabanını bağlam için keşfedersiniz ve GitHub sorunları dosyalarsınız — sorunlar dayanıklı, kullanıcı odaklı ve projenin etki alanı dilini kullanan sorunlar.

  ## Kullanıcının ortaya koyduğu her sorun için

  ### 1. Dinleyin ve hafif açıklığa kavuşturun

  Kullanıcının sorunu kendi sözcükleriyle açıklamasını sağlayın. **En fazla 2-3 kısa açıklayıcı soru** sorun — şunlara odaklanarak:

  - Neyi beklediği vs. aslında ne oldu
  - Yeniden üretme adımları (açık değilse)
  - Tutarlı mı yoksa aralıklı mı

  Fazla soru sormayın. Açıklama dosyalamaya yeterli açıklıksa, devam edin.

  ### 2. Arka planda kod tabanını keşfedin

  Kullanıcıyla konuşurken, ilgili alanı anlamak için arka planda bir Agent (subagent_type=Explore) başlatın. Amaç bir düzeltme bulmak DEĞİLdir — amaç şudur:

  - O alandaki kullanılan etki alanı dilini öğrenin (UBIQUITOUS_LANGUAGE.md dosyasını kontrol edin)
  - Özelliğin ne yapması gerektiğini anlayın
  - Kullanıcıya görünen davranış sınırını belirleyin

  Bu bağlam size daha iyi bir sorun yazmanıza yardımcı olur — ancak sorunun kendisi belirli dosyalara, satır numaralarına veya iç uygulama ayrıntılarına referans vermemelidir.

  ### 3. Kapsamı değerlendirin: tek sorun mu yoksa parçalanma mı?

  Dosyalamadan önce, bunun **tek bir sorun** mu yoksa **birden fazla soruna ayrılması** gerekip gerekmediğine karar verin.

  Şu durumlarda parçalayın:

  - Düzeltme birden fazla bağımsız alanı kapsar (ör. "form doğrulaması yanlış VE başarı mesajı eksik VE yönlendirme bozuk")
  - Açıkça ayrılabilir endişeler vardır ve farklı kişiler paralel olarak üzerinde çalışabilir
  - Kullanıcı, birden fazla farklı başarısızlık modu veya semptoma sahip bir şeyi açıklar

  Tek sorun olarak tutun:

  - Bir yerde yanlış olan bir davranışsa
  - Semptomların tümü aynı kök davranıştan kaynaklanıyor

  ### 4. GitHub sorununu dosyalayın

  `gh issue create` komutuyla sorunlar oluşturun. Kullanıcıdan önce gözden geçirmesini istemeyin — sadece dosyalayıp URL'leri paylaşın.

  Sorunlar **dayanıklı** olmalıdır — büyük refaktorlar sonrasında bile anlamlı olmalıdır. Kullanıcının perspektifinden yazın.

  #### Tek bir sorun için

  Bu şablonu kullanın:

  ```
  ## Ne oldu

  [Kullanıcının yaşadığı gerçek davranışı açık dillle açıklayın]

  ## Ne bekliyordum

  [Beklenen davranışı açıklayın]

  ## Yeniden üretme adımları

  1. [Bir geliştiricinin takip edebileceği somut, numaralandırılmış adımlar]
  2. [Kod tabanındaki etki alanı terimlerini kullanın, iç modül adlarını değil]
  3. [İlgili girdileri, bayrakları veya yapılandırmayı dahil edin]

  ## Ek bağlam

  [Kullanıcıdan veya kod tabanı keşfinden sorunu çerçevelemeye yardımcı olan ekstra gözlemler — ör. "bu sadece Docker katmanı kullanıldığında oluşur, dosya sistemi katmanında değil" — etki alanı dilini kullanın ama dosyalara atıfta bulunmayın]
  ```

  #### Parçalanma için (birden fazla sorun)

  Sorunları bağımlılık sırasına göre oluşturun (engelleme sorunları önce) böylece gerçek sorun numaralarına referans verebilirsiniz.

  Her alt-sorun için şu şablonu kullanın:

  ```
  ## Üst sorun

  #<üst-sorun-numarası> (bir takip sorunu oluşturduysanız) veya "QA oturumunda rapor edildi"

  ## Ne yanlış

  [Bu spesifik davranış sorununu açıklayın — sadece bu dilim, bütün rapor değil]

  ## Ne bekliyordum

  [Bu spesifik dilim için beklenen davranış]

  ## Yeniden üretme adımları

  1. [BU sorununa özgü adımlar]

  ## Engelleme nedeni

  - #<sorun-numarası> (bu sorun başka bir sorun çözülene kadar test edilemiyorsa)

  Veya "Hiçbiri — hemen başlanabilir" eğer engel yoksa.

  ## Ek bağlam

  [Bu dilimleme ile ilgili ekstra gözlemler]
  ```

  Parçalanma oluştururken:

  - **Az sayıda kalın sorun yerine çok sayıda ince sorun tercih edin** — her biri bağımsız olarak düzeltilmeli ve doğrulanabilir olmalıdır
  - **Engelleme ilişkilerini dürüstçe işaretleyin** — eğer B sorunsu A çözülene kadar gerçekten test edilemiyorsa, söyleyin. Bağımsızlarsa, her ikisini "Hiçbiri — hemen başlanabilir" olarak işaretleyin
  - **Sorunları bağımlılık sırasına göre oluşturun** böylece "Engelleme nedeni" kısmında gerçek sorun numaralarına referans verebilirsiniz
  - **Paralelliği maksimize edin** — amaç, birden fazla kişinin (veya ajanın) farklı sorunları aynı anda alabilmesidir

  #### Tüm sorun gövdeleri için kurallar

  - **Dosya yolları veya satır numaraları yok** — bunlar modası geçer
  - **Projenin etki alanı dilini kullanın** (varsa UBIQUITOUS_LANGUAGE.md dosyasını kontrol edin)
  - **Davranışları açıklayın, kodu değil** — "senkronizasyon hizmeti yama uygulamakta başarısız oluyor" değil "applyPatch() satır 42'de hata fırlatıyor"
  - **Yeniden üretme adımları zorunludur** — eğer belirleyemiyorsanız, kullanıcıya sorun
  - **Kısa tutun** — bir geliştirici sorunları 30 saniyede okuyabilmelidir

  Dosyaladıktan sonra, tüm sorun URL'lerini (engelleme ilişkileri özetlenerek) yazdırın ve sorun: "Sonraki sorun, yoksa bitirdik mi?"

  ### 5. Oturuma devam edin

  Kullanıcı bitirdiklerini söyleyene kadar devam edin. Her sorun bağımsızdır — hepsini toplu olarak işlemeyin.
---

# QA Session

Run an interactive QA session. The user describes problems they're encountering. You clarify, explore the codebase for context, and file GitHub issues that are durable, user-focused, and use the project's domain language.

## For each issue the user raises

### 1. Listen and lightly clarify

Let the user describe the problem in their own words. Ask **at most 2-3 short clarifying questions** focused on:

- What they expected vs what actually happened
- Steps to reproduce (if not obvious)
- Whether it's consistent or intermittent

Do NOT over-interview. If the description is clear enough to file, move on.

### 2. Explore the codebase in the background

While talking to the user, kick off an Agent (subagent_type=Explore) in the background to understand the relevant area. The goal is NOT to find a fix — it's to:

- Learn the domain language used in that area (check UBIQUITOUS_LANGUAGE.md)
- Understand what the feature is supposed to do
- Identify the user-facing behavior boundary

This context helps you write a better issue — but the issue itself should NOT reference specific files, line numbers, or internal implementation details.

### 3. Assess scope: single issue or breakdown?

Before filing, decide whether this is a **single issue** or needs to be **broken down** into multiple issues.

Break down when:

- The fix spans multiple independent areas (e.g. "the form validation is wrong AND the success message is missing AND the redirect is broken")
- There are clearly separable concerns that different people could work on in parallel
- The user describes something that has multiple distinct failure modes or symptoms

Keep as a single issue when:

- It's one behavior that's wrong in one place
- The symptoms are all caused by the same root behavior

### 4. File the GitHub issue(s)

Create issues with `gh issue create`. Do NOT ask the user to review first — just file and share URLs.

Issues must be **durable** — they should still make sense after major refactors. Write from the user's perspective.

#### For a single issue

Use this template:

```
## What happened

[Describe the actual behavior the user experienced, in plain language]

## What I expected

[Describe the expected behavior]

## Steps to reproduce

1. [Concrete, numbered steps a developer can follow]
2. [Use domain terms from the codebase, not internal module names]
3. [Include relevant inputs, flags, or configuration]

## Additional context

[Any extra observations from the user or from codebase exploration that help frame the issue — e.g. "this only happens when using the Docker layer, not the filesystem layer" — use domain language but don't cite files]
```

#### For a breakdown (multiple issues)

Create issues in dependency order (blockers first) so you can reference real issue numbers.

Use this template for each sub-issue:

```
## Parent issue

#<parent-issue-number> (if you created a tracking issue) or "Reported during QA session"

## What's wrong

[Describe this specific behavior problem — just this slice, not the whole report]

## What I expected

[Expected behavior for this specific slice]

## Steps to reproduce

1. [Steps specific to THIS issue]

## Blocked by

- #<issue-number> (if this issue can't be fixed until another is resolved)

Or "None — can start immediately" if no blockers.

## Additional context

[Any extra observations relevant to this slice]
```

When creating a breakdown:

- **Prefer many thin issues over few thick ones** — each should be independently fixable and verifiable
- **Mark blocking relationships honestly** — if issue B genuinely can't be tested until issue A is fixed, say so. If they're independent, mark both as "None — can start immediately"
- **Create issues in dependency order** so you can reference real issue numbers in "Blocked by"
- **Maximize parallelism** — the goal is that multiple people (or agents) can grab different issues simultaneously

#### Rules for all issue bodies

- **No file paths or line numbers** — these go stale
- **Use the project's domain language** (check UBIQUITOUS_LANGUAGE.md if it exists)
- **Describe behaviors, not code** — "the sync service fails to apply the patch" not "applyPatch() throws on line 42"
- **Reproduction steps are mandatory** — if you can't determine them, ask the user
- **Keep it concise** — a developer should be able to read the issue in 30 seconds

After filing, print all issue URLs (with blocking relationships summarized) and ask: "Next issue, or are we done?"

### 5. Continue the session

Keep going until the user says they're done. Each issue is independent — don't batch them.
