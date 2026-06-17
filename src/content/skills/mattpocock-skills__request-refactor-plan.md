---
name: "request-refactor-plan"
description_en: "Create a detailed refactor plan with tiny commits via user interview, then file it as a GitHub issue. Use when user wants to plan a refactor, create a refactoring RFC, or break a refactor into safe incremental steps."
description_tr: "Kullanıcı görüşmesi yoluyla ayrıntılı bir refactor planı oluşturun, küçük commitlerle düzenleyin ve GitHub issue olarak kaydettirin. Refactor planlaması, refactoring RFC oluşturma veya refactorı güvenli adımlara bölme gerektiğinde kullanın."
category: "Development"
repo: "mattpocock/skills"
stars: 132588
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/deprecated/request-refactor-plan/SKILL.md"
path: "skills/deprecated/request-refactor-plan/SKILL.md"
is_collection: false
body_length: 2443
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  Bu skill, kullanıcı bir refactor isteği oluşturmak istediğinde çağrılacaktır. Aşağıdaki adımları izlemelisiniz. Gerekli olmadığını düşünüyorsanız adımları atlayabilirsiniz.

  1. Kullanıcıdan çözmek istedikleri sorunun uzun ve detaylı bir açıklamasını ve olası çözüm fikirlerini isteyin.

  2. Repo'yu explore ederek onların iddialarını doğrulayın ve codebase'in mevcut durumunu anlayın.

  3. Başka seçenekleri göz önünde bulundurmuş olup olmadıklarını sorun ve onlara diğer seçenekleri sunun.

  4. Kullanıcıyla implementation hakkında görüşün. Son derece detaylı ve kapsamlı olun.

  5. Implementation'ın tam kapsamını belirleyin. Neyi değiştireceğinizi ve neyi değiştirmeyeceğinizi çalışın.

  6. Codebase'de bu alan için test coverage'ını kontrol edin. Yetersiz test coverage varsa, kullanıcıdan test planlarının neler olduğunu sorun.

  7. Implementation'ı küçük commit'lerin bir planına bölün. Martin Fowler'ın "her refactoring adımını olabildiğince küçük tutun, böylece program'ın her zaman çalıştığını görebilirsiniz" tavsiyesini hatırlayın.

  8. Refactor planı ile bir GitHub issue oluşturun. Issue açıklaması için aşağıdaki template'i kullanın:

  <refactor-plan-template>

  ## Problem Statement

  Developer'ın karşılaştığı sorunun, developer'ın perspektifinden açıklaması.

  ## Solution

  Soruna çözüm, developer'ın perspektifinden.

  ## Commits

  Uzun ve detaylı bir implementation planı. Planı düz İngilizce'de yazın, implementation'ı mümkün olan en küçük commit'lere bölün. Her commit, codebase'i çalışan bir durumda bırakmalıdır.

  ## Decision Document

  Alınan implementation kararlarının bir listesi. Buna şunlar dahil olabilir:

  - Build edilecek/modifiye edilecek moduller
  - Modifiye edilecek bu modüllerin interface'leri
  - Developer'dan gelen teknik açıklıklar
  - Architectural kararlar
  - Schema değişiklikleri
  - API kontratları
  - Spesifik etkileşimler

  Spesifik dosya yollarını veya kod snippet'lerini EKLEMEYIN. Bunlar çok hızlı eski haline gelebilir.

  ## Testing Decisions

  Alınan testing kararlarının bir listesi. Şunları dahil edin:

  - İyi bir test'in ne olduğunun açıklaması (sadece external behavior'u test edin, implementation details'i değil)
  - Test edilecek moduller
  - Test için prior art (yani codebase'deki benzer test türleri)

  ## Out of Scope

  Bu refactor için kapsamı dışında olan şeylerin açıklaması.

  ## Further Notes (optional)

  Refactor hakkında herhangi bir ek not.

  </refactor-plan-template>
---

This skill will be invoked when the user wants to create a refactor request. You should go through the steps below. You may skip steps if you don't consider them necessary.

1. Ask the user for a long, detailed description of the problem they want to solve and any potential ideas for solutions.

2. Explore the repo to verify their assertions and understand the current state of the codebase.

3. Ask whether they have considered other options, and present other options to them.

4. Interview the user about the implementation. Be extremely detailed and thorough.

5. Hammer out the exact scope of the implementation. Work out what you plan to change and what you plan not to change.

6. Look in the codebase to check for test coverage of this area of the codebase. If there is insufficient test coverage, ask the user what their plans for testing are.

7. Break the implementation into a plan of tiny commits. Remember Martin Fowler's advice to "make each refactoring step as small as possible, so that you can always see the program working."

8. Create a GitHub issue with the refactor plan. Use the following template for the issue description:

<refactor-plan-template>

## Problem Statement

The problem that the developer is facing, from the developer's perspective.

## Solution

The solution to the problem, from the developer's perspective.

## Commits

A LONG, detailed implementation plan. Write the plan in plain English, breaking down the implementation into the tiniest commits possible. Each commit should leave the codebase in a working state.

## Decision Document

A list of implementation decisions that were made. This can include:

- The modules that will be built/modified
- The interfaces of those modules that will be modified
- Technical clarifications from the developer
- Architectural decisions
- Schema changes
- API contracts
- Specific interactions

Do NOT include specific file paths or code snippets. They may end up being outdated very quickly.

## Testing Decisions

A list of testing decisions that were made. Include:

- A description of what makes a good test (only test external behavior, not implementation details)
- Which modules will be tested
- Prior art for the tests (i.e. similar types of tests in the codebase)

## Out of Scope

A description of the things that are out of scope for this refactor.

## Further Notes (optional)

Any further notes about the refactor.

</refactor-plan-template>
