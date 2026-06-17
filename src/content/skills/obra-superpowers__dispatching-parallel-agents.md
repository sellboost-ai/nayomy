---
name: "dispatching-parallel-agents"
description_en: "Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies"
description_tr: "2 veya daha fazla bağımsız görevin paralel olarak yürütülebileceği ve aralarında state paylaşımı ya da sıralı bağımlılık olmadığı durumlarda kullanın."
category: "Development"
repo: "obra/superpowers"
stars: 229812
url: "https://github.com/obra/superpowers/blob/HEAD/skills/dispatching-parallel-agents/SKILL.md"
path: "skills/dispatching-parallel-agents/SKILL.md"
is_collection: false
body_length: 6454
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Paralel Ajanları Gönderme

  ## Genel Bakış

  Görevleri izole bağlamla uzmanlaşmış ajanlarına devredersiniz. Talimatlarını ve bağlamını dikkatli bir şekilde hazırlayarak, onların odaklanmış kalmasını ve görevlerini başarmasını sağlarsınız. Asla oturumunuzun bağlamını veya geçmişini miras almamalıdırlar — tam olarak ihtiyaç duydukları şeyi siz oluşturursunuz. Bu aynı zamanda koordinasyon çalışması için kendi bağlamınızı korur.

  Birden fazla ilişkisiz hatanız olduğunda (farklı test dosyaları, farklı alt sistemler, farklı hatalar), bunları sırayla araştırmak zaman kaybeder. Her araştırma bağımsızdır ve paralel olarak gerçekleştirilebilir.

  **Temel ilke:** Bağımsız her sorun alanı için bir ajan gönderin. Onları eşzamanlı olarak çalışmaya bırakın.

  ## Ne Zaman Kullanılır

  ```dot
  digraph when_to_use {
      "Multiple failures?" [shape=diamond];
      "Are they independent?" [shape=diamond];
      "Single agent investigates all" [shape=box];
      "One agent per problem domain" [shape=box];
      "Can they work in parallel?" [shape=diamond];
      "Sequential agents" [shape=box];
      "Parallel dispatch" [shape=box];

      "Multiple failures?" -> "Are they independent?" [label="yes"];
      "Are they independent?" -> "Single agent investigates all" [label="no - related"];
      "Are they independent?" -> "Can they work in parallel?" [label="yes"];
      "Can they work in parallel?" -> "Parallel dispatch" [label="yes"];
      "Can they work in parallel?" -> "Sequential agents" [label="no - shared state"];
  }
  ```

  **Kullanın:**
  - 3+ test dosyası farklı kök nedenlerle başarısız olduğunda
  - Birden fazla alt sistem bağımsız olarak bozulduğunda
  - Her sorun diğerlerinden bağlam olmadan anlaşılabilir olduğunda
  - Araştırmalar arasında paylaşılan durum olmadığında

  **Kullanmayın:**
  - Hatalar ilişkili olduğunda (birini düzeltmek diğerlerini düzeltebilir)
  - Tam sistem durumunu anlamanız gerektiğinde
  - Ajanlar birbirini etkileyeceğinde

  ## Desen

  ### 1. Bağımsız Alanları Tanımla

  Hataları ne kırıldığına göre grupla:
  - Dosya A testleri: Araç onay akışı
  - Dosya B testleri: Toplu iş tamamlanma davranışı
  - Dosya C testleri: İptal işlevi

  Her alan bağımsızdır - araç onayını düzeltmek iptal testlerini etkilemez.

  ### 2. Odaklanmış Ajan Görevleri Oluştur

  Her ajan alır:
  - **Spesifik kapsam:** Bir test dosyası veya alt sistem
  - **Açık amaç:** Bu testleri geçmesini sağla
  - **Kısıtlamalar:** Başka kod değiştirme
  - **Beklenen çıktı:** Bulduklarınız ve düzelttiğiniz şeylerin özeti

  ### 3. Paralel Olarak Gönder

  Aynı cevap içinde üç alt ajan göndermesini yapın — paralel çalışırlar:

  ```text
  Subagent (general-purpose): "Fix agent-tool-abort.test.ts failures"
  Subagent (general-purpose): "Fix batch-completion-behavior.test.ts failures"
  Subagent (general-purpose): "Fix tool-approval-race-conditions.test.ts failures"
  # All three run concurrently.
  ```

  Bir cevap içinde birden fazla gönderim = paralel yürütme. Bir cevap başına bir tane = sırayla.

  ### 4. İnceleme ve Entegrasyon

  Ajanlar döndüğünde:
  - Her özeti okuyun
  - Düzeltmelerin çakışmadığını doğrulayın
  - Tam test paketini çalıştırın
  - Tüm değişiklikleri entegre edin

  ## Ajan İstemi Yapısı

  İyi ajan istekleri:
  1. **Odaklanmış** - Bir açık sorun alanı
  2. **Kendi kendine yeterli** - Sorunu anlamak için gereken tüm bağlam
  3. **Çıktı hakkında spesifik** - Ajan ne döndürmelidir?

  ```markdown
  Fix the 3 failing tests in src/agents/agent-tool-abort.test.ts:

  1. "should abort tool with partial output capture" - expects 'interrupted at' in message
  2. "should handle mixed completed and aborted tools" - fast tool aborted instead of completed
  3. "should properly track pendingToolCount" - expects 3 results but gets 0

  These are timing/race condition issues. Your task:

  1. Read the test file and understand what each test verifies
  2. Identify root cause - timing issues or actual bugs?
  3. Fix by:
     - Replacing arbitrary timeouts with event-based waiting
     - Fixing bugs in abort implementation if found
     - Adjusting test expectations if testing changed behavior

  Do NOT just increase timeouts - find the real issue.

  Return: Summary of what you found and what you fixed.
  ```

  ## Yaygın Hatalar

  **❌ Çok geniş:** "Tüm testleri düzelt" - ajan kaybolur
  **✅ Spesifik:** "agent-tool-abort.test.ts'i düzelt" - odaklanmış kapsam

  **❌ Bağlam yok:** "Yarış durumunu düzelt" - ajan nerede olduğunu bilmez
  **✅ Bağlam:** Hata mesajlarını ve test adlarını yapıştırın

  **❌ Kısıtlama yok:** Ajan her şeyi refactor edebilir
  **✅ Kısıtlamalar:** "Üretim kodunu DEĞIŞTIRME" veya "Yalnızca testleri düzelt"

  **❌ Muğlak çıktı:** "Düzelt" - ne değiştiğini bilmezsiniz
  **✅ Spesifik:** "Kök nedeni ve değişikliklerin özetini döndür"

  ## Ne Zaman Kullanılmaz

  **İlişkili hatalar:** Birini düzeltmek diğerlerini düzeltebilir - önce birlikte araştırın
  **Tam bağlam gerekli:** Anlama için tüm sistemi görmek gereklidir
  **Keşifsel hata ayıklama:** Ne kırıldığını henüz bilmiyorsunuz
  **Paylaşılan durum:** Ajanlar birbirini etkileyebilir (aynı dosyaları düzenleme, aynı kaynakları kullanma)

  ## Oturumdan Gerçek Örnek

  **Senaryo:** Ana refactoring sonrası 3 dosya genelinde 6 test hatası

  **Hatalar:**
  - agent-tool-abort.test.ts: 3 hata (zamanlama sorunları)
  - batch-completion-behavior.test.ts: 2 hata (araçlar çalışmıyor)
  - tool-approval-race-conditions.test.ts: 1 hata (yürütme sayısı = 0)

  **Karar:** Bağımsız alanlar - iptal mantığı toplu tamamlanmadan ayrı, ıraksallık koşullarından ayrı

  **Gönderim:**
  ```
  Agent 1 → Fix agent-tool-abort.test.ts
  Agent 2 → Fix batch-completion-behavior.test.ts
  Agent 3 → Fix tool-approval-race-conditions.test.ts
  ```

  **Sonuçlar:**
  - Agent 1: Zaman aşımlarını olay tabanlı beklemeyle değiştirdi
  - Agent 2: Olay yapısı hatasını düzeltti (threadId yanlış yerde)
  - Agent 3: Zaman uyumsuz araç yürütmesinin tamamlanmasını beklemek için eklendi

  **Entegrasyon:** Tüm düzeltmeler bağımsız, çatışma yok, tam test paketi yeşil

  **Kazanılan zaman:** 3 sorun sırayla yerine paralel çözüldü

  ## Temel Faydalar

  1. **Paralelleştirme** - Birden fazla araştırma aynı anda gerçekleşir
  2. **Odaklanma** - Her ajanın dar kapsamı, izlenecek daha az bağlam
  3. **Bağımsızlık** - Ajanlar birbirini etkilemez
  4. **Hız** - 3 sorun 1'in zamanında çözülür

  ## Doğrulama

  Ajanlar döndüğünde:
  1. **Her özeti incele** - Ne değiştiğini anla
  2. **Çatışmaları kontrol et** - Ajanlar aynı kodu düzenlediler mi?
  3. **Tam paketi çalıştır** - Tüm düzeltmelerin birlikte çalıştığını doğrula
  4. **Spot kontrol** - Ajanlar sistematik hatalar yapabilir

  ## Gerçek Dünya Etkisi

  Hata ayıklama oturumundan (2025-10-03):
  - 3 dosya genelinde 6 hata
  - 3 ajan paralel olarak gönderildi
  - Tüm araştırmalar eşzamanlı olarak tamamlandı
  - Tüm düzeltmeler başarıyla entegre edildi
  - Ajan değişiklikleri arasında sıfır çatışma
---

# Dispatching Parallel Agents

## Overview

You delegate tasks to specialized agents with isolated context. By precisely crafting their instructions and context, you ensure they stay focused and succeed at their task. They should never inherit your session's context or history — you construct exactly what they need. This also preserves your own context for coordination work.

When you have multiple unrelated failures (different test files, different subsystems, different bugs), investigating them sequentially wastes time. Each investigation is independent and can happen in parallel.

**Core principle:** Dispatch one agent per independent problem domain. Let them work concurrently.

## When to Use

```dot
digraph when_to_use {
    "Multiple failures?" [shape=diamond];
    "Are they independent?" [shape=diamond];
    "Single agent investigates all" [shape=box];
    "One agent per problem domain" [shape=box];
    "Can they work in parallel?" [shape=diamond];
    "Sequential agents" [shape=box];
    "Parallel dispatch" [shape=box];

    "Multiple failures?" -> "Are they independent?" [label="yes"];
    "Are they independent?" -> "Single agent investigates all" [label="no - related"];
    "Are they independent?" -> "Can they work in parallel?" [label="yes"];
    "Can they work in parallel?" -> "Parallel dispatch" [label="yes"];
    "Can they work in parallel?" -> "Sequential agents" [label="no - shared state"];
}
```

**Use when:**
- 3+ test files failing with different root causes
- Multiple subsystems broken independently
- Each problem can be understood without context from others
- No shared state between investigations

**Don't use when:**
- Failures are related (fix one might fix others)
- Need to understand full system state
- Agents would interfere with each other

## The Pattern

### 1. Identify Independent Domains

Group failures by what's broken:
- File A tests: Tool approval flow
- File B tests: Batch completion behavior
- File C tests: Abort functionality

Each domain is independent - fixing tool approval doesn't affect abort tests.

### 2. Create Focused Agent Tasks

Each agent gets:
- **Specific scope:** One test file or subsystem
- **Clear goal:** Make these tests pass
- **Constraints:** Don't change other code
- **Expected output:** Summary of what you found and fixed

### 3. Dispatch in Parallel

Issue all three subagent dispatches in the same response — they run in parallel:

```text
Subagent (general-purpose): "Fix agent-tool-abort.test.ts failures"
Subagent (general-purpose): "Fix batch-completion-behavior.test.ts failures"
Subagent (general-purpose): "Fix tool-approval-race-conditions.test.ts failures"
# All three run concurrently.
```

Multiple dispatch calls in one response = parallel execution. One per response = sequential.

### 4. Review and Integrate

When agents return:
- Read each summary
- Verify fixes don't conflict
- Run full test suite
- Integrate all changes

## Agent Prompt Structure

Good agent prompts are:
1. **Focused** - One clear problem domain
2. **Self-contained** - All context needed to understand the problem
3. **Specific about output** - What should the agent return?

```markdown
Fix the 3 failing tests in src/agents/agent-tool-abort.test.ts:

1. "should abort tool with partial output capture" - expects 'interrupted at' in message
2. "should handle mixed completed and aborted tools" - fast tool aborted instead of completed
3. "should properly track pendingToolCount" - expects 3 results but gets 0

These are timing/race condition issues. Your task:

1. Read the test file and understand what each test verifies
2. Identify root cause - timing issues or actual bugs?
3. Fix by:
   - Replacing arbitrary timeouts with event-based waiting
   - Fixing bugs in abort implementation if found
   - Adjusting test expectations if testing changed behavior

Do NOT just increase timeouts - find the real issue.

Return: Summary of what you found and what you fixed.
```

## Common Mistakes

**❌ Too broad:** "Fix all the tests" - agent gets lost
**✅ Specific:** "Fix agent-tool-abort.test.ts" - focused scope

**❌ No context:** "Fix the race condition" - agent doesn't know where
**✅ Context:** Paste the error messages and test names

**❌ No constraints:** Agent might refactor everything
**✅ Constraints:** "Do NOT change production code" or "Fix tests only"

**❌ Vague output:** "Fix it" - you don't know what changed
**✅ Specific:** "Return summary of root cause and changes"

## When NOT to Use

**Related failures:** Fixing one might fix others - investigate together first
**Need full context:** Understanding requires seeing entire system
**Exploratory debugging:** You don't know what's broken yet
**Shared state:** Agents would interfere (editing same files, using same resources)

## Real Example from Session

**Scenario:** 6 test failures across 3 files after major refactoring

**Failures:**
- agent-tool-abort.test.ts: 3 failures (timing issues)
- batch-completion-behavior.test.ts: 2 failures (tools not executing)
- tool-approval-race-conditions.test.ts: 1 failure (execution count = 0)

**Decision:** Independent domains - abort logic separate from batch completion separate from race conditions

**Dispatch:**
```
Agent 1 → Fix agent-tool-abort.test.ts
Agent 2 → Fix batch-completion-behavior.test.ts
Agent 3 → Fix tool-approval-race-conditions.test.ts
```

**Results:**
- Agent 1: Replaced timeouts with event-based waiting
- Agent 2: Fixed event structure bug (threadId in wrong place)
- Agent 3: Added wait for async tool execution to complete

**Integration:** All fixes independent, no conflicts, full suite green

**Time saved:** 3 problems solved in parallel vs sequentially

## Key Benefits

1. **Parallelization** - Multiple investigations happen simultaneously
2. **Focus** - Each agent has narrow scope, less context to track
3. **Independence** - Agents don't interfere with each other
4. **Speed** - 3 problems solved in time of 1

## Verification

After agents return:
1. **Review each summary** - Understand what changed
2. **Check for conflicts** - Did agents edit same code?
3. **Run full suite** - Verify all fixes work together
4. **Spot check** - Agents can make systematic errors

## Real-World Impact

From debugging session (2025-10-03):
- 6 failures across 3 files
- 3 agents dispatched in parallel
- All investigations completed concurrently
- All fixes integrated successfully
- Zero conflicts between agent changes
