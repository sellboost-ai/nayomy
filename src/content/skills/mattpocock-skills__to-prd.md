---
name: "to-prd"
description_en: "Turn the current conversation into a PRD and publish it to the project issue tracker — no interview, just synthesis of what you've already discussed."
description_tr: "Mevcut sohbet içeriğini bir PRD'ye dönüştürün ve proje issue tracker'ına yayınlayın. Kullanıcı geçerli bağlamdan bir PRD oluşturmak istediğinde kullanılır."
category: "Development"
repo: "mattpocock/skills"
stars: 140637
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/to-prd/SKILL.md"
path: "skills/engineering/to-prd/SKILL.md"
is_collection: false
body_length: 2802
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  Bu beceri mevcut konuşma bağlamını ve kod tabanı anlayışını alarak bir PRD üretir. Kullanıcıya soru SORMAYIN — sadece zaten bildiklerinizi sentezleyin.
  
  Issue tracker ve triage label sözlüğü size sağlanmış olmalıdır — `/setup-matt-pocock-skills` komutunu çalıştırın.
  
  ## Süreç
  
  1. Henüz yapmadıysanız depoyu keşfederek kod tabanının mevcut durumunu anlayın. PRD'nin tamamında projenin alan sözlüğü kelimelerini kullanın ve dokunduğunuz alanda herhangi bir ADR'ye uyun.
  
  2. Özelliği test edeceğiniz seams noktalarını taslak olarak çizin. Mevcut seams yeni olanlardan tercih edilmelidir. Mümkün olan en yüksek seam kullanın. Yeni seamlara ihtiyaç varsa, bunları yapabileceğiniz en yüksek noktada önerin.
  
  Bu seamlerin kullanıcının beklentileriyle eşleştiğini kontrol edin.
  
  3. Aşağıdaki şablonu kullanarak PRD'yi yazın ve proje issue tracker'ına yayınlayın. `ready-for-agent` triage etiketini uygulayın - ek triage gerekmez.
  
  <prd-template>
  
  ## Problem Tanımı
  
  Kullanıcının karşılaştığı sorun, kullanıcının perspektifinden.
  
  ## Çözüm
  
  Soruna çözüm, kullanıcının perspektifinden.
  
  ## Kullanıcı Hikayeleri
  
  UZUN, numaralandırılmış bir kullanıcı hikayeleri listesi. Her kullanıcı hikayesi şu formatta olmalıdır:
  
  1. <Aktör> olarak, <özellik> istiyorum, böylece <fayda>
  
  <user-story-example>
  1. Mobil banka müşterisi olarak, hesaplarımda bakiye görmek istiyorum, böylece harcamalarım hakkında daha bilinçli kararlar alabilirim
  </user-story-example>
  
  Bu kullanıcı hikayeleri listesi son derece kapsamlı olmalı ve özelliğin tüm yönlerini kapsayabilmelidir.
  
  ## Uygulama Kararları
  
  Alınan uygulama kararlarının listesi. Buna şunlar dahil olabilir:
  
  - İnşa edilecek/değiştirilecek modüller
  - Bu modüllerin değiştirilecek arayüzleri
  - Geliştirici tarafından verilen teknik açıklıklar
  - Mimari kararlar
  - Schema değişiklikleri
  - API kontratları
  - Spesifik etkileşimler
  
  Spesifik dosya yollarını veya kod parçacıklarını EKLEMEYIN. Çok çabuk güncel olmaktan çıkabilirler.
  
  İstisna: eğer bir prototip bir kararı prose'den daha kesin bir şekilde kodlayan bir parçacık ürettiyse (state machine, reducer, schema, type shape), bunu ilgili karar içinde satır içine koyun ve kısaca prototipten geldiğini belirtin. Karar açısından zengin kısımlara indirin — çalışan demo değil, sadece önemli kısımlar.
  
  ## Test Kararları
  
  Alınan test kararlarının listesi. Şunları dahil edin:
  
  - İyi bir testin ne olduğunun açıklaması (sadece dış davranışı test edin, uygulama ayrıntılarını değil)
  - Hangi modüllerin test edileceği
  - Testlerin önceki sanatı (yani kod tabanında benzer test türleri)
  
  ## Kapsam Dışı
  
  Bu PRD için kapsam dışında olan şeyler hakkında açıklama.
  
  ## Ek Notlar
  
  Özellik hakkında herhangi bir ek not.
  
  </prd-template>
---

This skill takes the current conversation context and codebase understanding and produces a PRD. Do NOT interview the user — just synthesize what you already know.

The issue tracker and triage label vocabulary should have been provided to you — run `/setup-matt-pocock-skills` if not.

## Process

1. Explore the repo to understand the current state of the codebase, if you haven't already. Use the project's domain glossary vocabulary throughout the PRD, and respect any ADRs in the area you're touching.

2. Sketch out the seams at which you're going to test the feature. Existing seams should be preferred to new ones. Use the highest seam possible. If new seams are needed, propose them at the highest point you can. The fewer seams across the codebase, the better - the ideal number is one.

Check with the user that these seams match their expectations.

3. Write the PRD using the template below, then publish it to the project issue tracker. Apply the `ready-for-agent` triage label - no need for additional triage.

<prd-template>

## Problem Statement

The problem that the user is facing, from the user's perspective.

## Solution

The solution to the problem, from the user's perspective.

## User Stories

A LONG, numbered list of user stories. Each user story should be in the format of:

1. As an <actor>, I want a <feature>, so that <benefit>

<user-story-example>
1. As a mobile bank customer, I want to see balance on my accounts, so that I can make better informed decisions about my spending
</user-story-example>

This list of user stories should be extremely extensive and cover all aspects of the feature.

## Implementation Decisions

A list of implementation decisions that were made. This can include:

- The modules that will be built/modified
- The interfaces of those modules that will be modified
- Technical clarifications from the developer
- Architectural decisions
- Schema changes
- API contracts
- Specific interactions

Do NOT include specific file paths or code snippets. They may end up being outdated very quickly.

Exception: if a prototype produced a snippet that encodes a decision more precisely than prose can (state machine, reducer, schema, type shape), inline it within the relevant decision and note briefly that it came from a prototype. Trim to the decision-rich parts — not a working demo, just the important bits.

## Testing Decisions

A list of testing decisions that were made. Include:

- A description of what makes a good test (only test external behavior, not implementation details)
- Which modules will be tested
- Prior art for the tests (i.e. similar types of tests in the codebase)

## Out of Scope

A description of the things that are out of scope for this PRD.

## Further Notes

Any further notes about the feature.

</prd-template>
