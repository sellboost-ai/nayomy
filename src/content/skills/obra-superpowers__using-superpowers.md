---
name: "using-superpowers"
description_en: "Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions"
description_tr: "Herhangi bir konuşma başlatırken kullanın - skill'lerin nasıl bulunacağını ve kullanılacağını belirler, clarification soruları da dahil olmak üzere HERHANGİ bir yanıt vermeden önce skill invocation gerektirir."
category: "Design"
repo: "obra/superpowers"
stars: 234469
url: "https://github.com/obra/superpowers/blob/HEAD/skills/using-superpowers/SKILL.md"
path: "skills/using-superpowers/SKILL.md"
is_collection: false
body_length: 5679
has_scripts: false
has_references: true
has_examples: false
related_files: []
body_tr: |-
  <SUBAGENT-STOP>
  Eğer belirli bir görevi yürütmek için bir alt-agent olarak gönderildiyseniz, bu beceriyi atlayın.
  </SUBAGENT-STOP>
  
  <EXTREMELY-IMPORTANT>
  Bir becerinin yaptığınız işe uygulanması için %1 bir şans olduğunu düşünüyorsanız, beceriyi MUTLAKA çağırmalısınız.
  
  BİR BECERİ GÖREVİNİZE UYUYORSA, SEÇİMİNİZ YOKTUR. BUNU KULLANMANIZ GEREKIR.
  
  Bu konuda ödün verilmez. Bu isteğe bağlı değildir. Bunun dışına çıkamazsınız.
  </EXTREMELY-IMPORTANT>
  
  ## Talimat Önceliği
  
  Superpowers becerileri varsayılan sistem prompt davranışını geçersiz kılar, ancak **kullanıcı talimatları her zaman üstün gelir**:
  
  1. **Kullanıcının açık talimatları** (CLAUDE.md, GEMINI.md, AGENTS.md, doğrudan istekler) — en yüksek öncelik
  2. **Superpowers becerileri** — çatıştıkları yerde varsayılan sistem davranışını geçersiz kılar
  3. **Varsayılan sistem prompt** — en düşük öncelik
  
  Eğer CLAUDE.md, GEMINI.md veya AGENTS.md "TDD kullanmayın" derse ve bir beceri "her zaman TDD kullanın" derse, kullanıcının talimatlarını izleyin. Kullanıcı kontrolde.
  
  ## Becerilere Nasıl Erişilir
  
  **Beceri dosyalarını asla dosya araçlarıyla manuel olarak okumayın** — becerinizin düzgün şekilde etkinleştirilmesini sağlamak için her zaman platformunuzun beceri yükleme mekanizmasını kullanın.
  
  **Claude Code'da:** `Skill` aracını kullanın. Bir beceriyi çağırdığınızda, içeriği yüklenir ve size sunulur — doğrudan izleyin.
  
  **Codex'te:** Beceriler yerel olarak yüklenir. Bir beceri etkinleştirildiğinde sunulan talimatları izleyin.
  
  **Copilot CLI'de:** `skill` aracını kullanın. Beceriler yüklü eklentilerden otomatik olarak keşfedilir.
  
  **Gemini CLI'de:** Beceriler `activate_skill` aracı aracılığıyla etkinleştirilir. Gemini, beceri meta verilerini oturum başında yükler ve tam içeriği talep üzerine etkinleştirir.
  
  **Diğer ortamlarda:** Platform-spesifik beceri yükleme yöntemleri için platformunuzun belgelerine bakın.
  
  ## Platform Uyarlaması
  
  Beceriler herhangi bir çalışma zamanının araçlarını adlandırmak yerine eylemlerde konuşur ("bir alt-agent gönder", "bir yapılacak oluştur", "bir dosya oku"). Platform başına araç eşdeğerleri ve talimatlar dosyası kuralları için [claude-code-tools.md](references/claude-code-tools.md), [codex-tools.md](references/codex-tools.md), [copilot-tools.md](references/copilot-tools.md), [gemini-tools.md](references/gemini-tools.md), [pi-tools.md](references/pi-tools.md) ve [antigravity-tools.md](references/antigravity-tools.md) bölümlerine bakın. Gemini CLI kullanıcıları GEMINI.md aracılığıyla otomatik olarak araç haritasını yüklenir.
  
  # Becerileri Kullanma
  
  ## Kural
  
  **Herhangi bir yanıt veya eylemden ÖNCE ilgili veya talep edilen becerileri çağırın.** Bir becerinin uygulanması için %1 bir şans olması bile, beceriyi kontrol etmek için çağırmalısınız anlamına gelir. Çağırılan bir beceri durumun yanlış olduğu ortaya çıkarsa, onu kullanmanız gerekmez.
  
  ```dot
  digraph skill_flow {
      "Kullanıcı mesajı alındı" [shape=doublecircle];
      "Plan moduna girmek üzere mü?" [shape=doublecircle];
      "Zaten beyin fırtınası yaptı mı?" [shape=diamond];
      "Beyin fırtınası becerisini çağır" [shape=box];
      "Herhangi bir beceri uygulanabilir mi?" [shape=diamond];
      "Beceriyi çağır" [shape=box];
      "Duyur: '[beceri] kullanılıyor [amaç] için'" [shape=box];
      "Kontrol listesi var mı?" [shape=diamond];
      "Her öğe için bir yapılacak oluştur" [shape=box];
      "Beceriyi tam olarak takip et" [shape=box];
      "Yanıt ver (açıklamalar da dahil)" [shape=doublecircle];
  
      "Plan moduna girmek üzere mü?" -> "Zaten beyin fırtınası yaptı mı?";
      "Zaten beyin fırtınası yaptı mı?" -> "Beyin fırtınası becerisini çağır" [label="hayır"];
      "Zaten beyin fırtınası yaptı mı?" -> "Herhangi bir beceri uygulanabilir mi?" [label="evet"];
      "Beyin fırtınası becerisini çağır" -> "Herhangi bir beceri uygulanabilir mi?";
  
      "Kullanıcı mesajı alındı" -> "Herhangi bir beceri uygulanabilir mi?";
      "Herhangi bir beceri uygulanabilir mi?" -> "Beceriyi çağır" [label="evet, %1 bile"];
      "Herhangi bir beceri uygulanabilir mi?" -> "Yanıt ver (açıklamalar da dahil)" [label="kesinlikle hayır"];
      "Beceriyi çağır" -> "Duyur: '[beceri] kullanılıyor [amaç] için'";
      "Duyur: '[beceri] kullanılıyor [amaç] için'" -> "Kontrol listesi var mı?";
      "Kontrol listesi var mı?" -> "Her öğe için bir yapılacak oluştur" [label="evet"];
      "Kontrol listesi var mı?" -> "Beceriyi tam olarak takip et" [label="hayır"];
      "Her öğe için bir yapılacak oluştur" -> "Beceriyi tam olarak takip et";
  }
  ```
  
  ## Uyarı İşaretleri
  
  Bu düşünceler DURUŞ anlamına gelir — rasyonalize ediyorsunuz:
  
  | Düşünce | Gerçek |
  |---------|--------|
  | "Bu sadece basit bir soru" | Sorular görevdir. Beceriler için kontrol edin. |
  | "Önce daha fazla bağlam ihtiyacım" | Beceri kontrolü açıklayıcı sorulardan ÖNCE gelir. |
  | "Kod tabanını ilk olarak keşfetme izin verin" | Beceriler SIZE nasıl keşfedileceğini söyler. Önce kontrol edin. |
  | "Git/dosyaları hızlı kontrol edebilir" | Dosyalarda konuşma bağlamı yoktur. Beceriler için kontrol edin. |
  | "Önce bilgi toplayalım" | Beceriler SIZE bilgi nasıl toplanacağını söyler. |
  | "Bu resmi bir beceri gerektirmez" | Bir beceri varsa, kullanın. |
  | "Bu beceriyi hatırlıyorum" | Beceriler gelişir. Mevcut sürümü okuyun. |
  | "Bu bir görev olarak sayılmaz" | Eylem = görev. Beceriler için kontrol edin. |
  | "Beceri aşırıya kaçıyor" | Basit şeyler karmaşık hale gelir. Kullanın. |
  | "İlk olarak bunu yapacağım" | Herhangi bir şey yapmadan ÖNCE kontrol edin. |
  | "Bu verimli hissettiriyor" | Disiplinsiz eylem zamanı ziyi. Beceriler bunu önler. |
  | "Bu ne anlama geldiğini biliyorum" | Konsepti bilmek ≠ beceriyi kullanmak. Çağırın. |
  
  ## Beceri Önceliği
  
  Birden çok beceri uygulanabilirse, bu sırayı kullanın:
  
  1. **İlk olarak işlem becerilerini kullanın** (beyin fırtınası, sistematik hata ayıklama) - bunlar görevin NASIL yapılacağını belirler
  2. **İkinci olarak uygulama becerilerini kullanın** (ön uç tasarımı, mcp-builder) - bunlar yürütme rehberliği sağlar
  
  "X oluşturalım" → ilk beyin fırtınası, sonra uygulama becerileri.
  "Bu hataları düzelt" → ilk sistematik hata ayıklama, sonra alan-spesifik beceriler.
  
  ## Beceri Türleri
  
  **Katı** (TDD, sistematik hata ayıklama): Tam olarak takip edin. Disiplini uyarlanarak çıkmayın.
  
  **Esnek** (desenler): İlkeleri bağlama uyarla.
  
  Beceri kendisi size hangisini söyler.
  
  ## Kullanıcı Talimatları
  
  Talimatlar NE söyler, NASIL değil. "X ekle" veya "Y düzelt" iş akışlarını atlamak anlamına gelmez.
---

<SUBAGENT-STOP>
If you were dispatched as a subagent to execute a specific task, skip this skill.
</SUBAGENT-STOP>

<EXTREMELY-IMPORTANT>
If you think there is even a 1% chance a skill might apply to what you are doing, you ABSOLUTELY MUST invoke the skill.

IF A SKILL APPLIES TO YOUR TASK, YOU DO NOT HAVE A CHOICE. YOU MUST USE IT.

This is not negotiable. This is not optional. You cannot rationalize your way out of this.
</EXTREMELY-IMPORTANT>

## Instruction Priority

Superpowers skills override default system prompt behavior, but **user instructions always take precedence**:

1. **User's explicit instructions** (CLAUDE.md, GEMINI.md, AGENTS.md, direct requests) — highest priority
2. **Superpowers skills** — override default system behavior where they conflict
3. **Default system prompt** — lowest priority

If CLAUDE.md, GEMINI.md, or AGENTS.md says "don't use TDD" and a skill says "always use TDD," follow the user's instructions. The user is in control.

## How to Access Skills

**Never read skill files manually with file tools** — always use your platform's skill-loading mechanism so the skill is properly activated.

**In Claude Code:** Use the `Skill` tool. When you invoke a skill, its content is loaded and presented to you — follow it directly.

**In Codex:** Skills load natively. Follow the instructions presented when a skill activates.

**In Copilot CLI:** Use the `skill` tool. Skills are auto-discovered from installed plugins.

**In Gemini CLI:** Skills activate via the `activate_skill` tool. Gemini loads skill metadata at session start and activates the full content on demand.

**In other environments:** Check your platform's documentation for how skills are loaded.

## Platform Adaptation

Skills speak in actions ("dispatch a subagent", "create a todo", "read a file") rather than naming any one runtime's tools. For per-platform tool equivalents and instructions-file conventions, see [claude-code-tools.md](references/claude-code-tools.md), [codex-tools.md](references/codex-tools.md), [copilot-tools.md](references/copilot-tools.md), [gemini-tools.md](references/gemini-tools.md), [pi-tools.md](references/pi-tools.md), and [antigravity-tools.md](references/antigravity-tools.md). Gemini CLI users get the tool mapping loaded automatically via GEMINI.md.

# Using Skills

## The Rule

**Invoke relevant or requested skills BEFORE any response or action.** Even a 1% chance a skill might apply means that you should invoke the skill to check. If an invoked skill turns out to be wrong for the situation, you don't need to use it.

```dot
digraph skill_flow {
    "User message received" [shape=doublecircle];
    "About to enter plan mode?" [shape=doublecircle];
    "Already brainstormed?" [shape=diamond];
    "Invoke brainstorming skill" [shape=box];
    "Might any skill apply?" [shape=diamond];
    "Invoke the skill" [shape=box];
    "Announce: 'Using [skill] to [purpose]'" [shape=box];
    "Has checklist?" [shape=diamond];
    "Create a todo per item" [shape=box];
    "Follow skill exactly" [shape=box];
    "Respond (including clarifications)" [shape=doublecircle];

    "About to enter plan mode?" -> "Already brainstormed?";
    "Already brainstormed?" -> "Invoke brainstorming skill" [label="no"];
    "Already brainstormed?" -> "Might any skill apply?" [label="yes"];
    "Invoke brainstorming skill" -> "Might any skill apply?";

    "User message received" -> "Might any skill apply?";
    "Might any skill apply?" -> "Invoke the skill" [label="yes, even 1%"];
    "Might any skill apply?" -> "Respond (including clarifications)" [label="definitely not"];
    "Invoke the skill" -> "Announce: 'Using [skill] to [purpose]'";
    "Announce: 'Using [skill] to [purpose]'" -> "Has checklist?";
    "Has checklist?" -> "Create a todo per item" [label="yes"];
    "Has checklist?" -> "Follow skill exactly" [label="no"];
    "Create a todo per item" -> "Follow skill exactly";
}
```

## Red Flags

These thoughts mean STOP—you're rationalizing:

| Thought | Reality |
|---------|---------|
| "This is just a simple question" | Questions are tasks. Check for skills. |
| "I need more context first" | Skill check comes BEFORE clarifying questions. |
| "Let me explore the codebase first" | Skills tell you HOW to explore. Check first. |
| "I can check git/files quickly" | Files lack conversation context. Check for skills. |
| "Let me gather information first" | Skills tell you HOW to gather information. |
| "This doesn't need a formal skill" | If a skill exists, use it. |
| "I remember this skill" | Skills evolve. Read current version. |
| "This doesn't count as a task" | Action = task. Check for skills. |
| "The skill is overkill" | Simple things become complex. Use it. |
| "I'll just do this one thing first" | Check BEFORE doing anything. |
| "This feels productive" | Undisciplined action wastes time. Skills prevent this. |
| "I know what that means" | Knowing the concept ≠ using the skill. Invoke it. |

## Skill Priority

When multiple skills could apply, use this order:

1. **Process skills first** (brainstorming, systematic-debugging) - these determine HOW to approach the task
2. **Implementation skills second** (frontend-design, mcp-builder) - these guide execution

"Let's build X" → brainstorming first, then implementation skills.
"Fix this bug" → systematic-debugging first, then domain-specific skills.

## Skill Types

**Rigid** (TDD, systematic-debugging): Follow exactly. Don't adapt away discipline.

**Flexible** (patterns): Adapt principles to context.

The skill itself tells you which.

## User Instructions

Instructions say WHAT, not HOW. "Add X" or "Fix Y" doesn't mean skip workflows.
