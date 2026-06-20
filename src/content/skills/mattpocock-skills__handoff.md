---
name: "handoff"
description_en: "Compact the current conversation into a handoff document for another agent to pick up."
description_tr: "Mevcut konuşmayı başka bir agent'ın devralması için bir handoff belgesine sıkıştırın."
category: "Document"
repo: "mattpocock/skills"
stars: 137186
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/handoff/SKILL.md"
path: "skills/productivity/handoff/SKILL.md"
is_collection: false
body_length: 666
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Devir Belgesi Oluştur
  
  Geçerli konuşmayı özetleyen bir devir belgesi yazın ve yeni bir aracı çalışmaya devam edebilmesi için hazırlayın. Kullanıcının işletim sisteminin geçici dizinine kaydedin - mevcut çalışma alanına değil.
  
  Belgede, aracının çağırması gereken becerileri öneren bir "Önerilen Beceriler" bölümü ekleyin.
  
  Diğer yapıtlarda (PRD'ler, planlar, ADR'ler, sorunlar, commit'ler, diff'ler) zaten yakalanmış içeriği tekrar etmeyin. Bunları yol veya URL ile referans verin.
  
  API anahtarları, parolalar veya kişisel tanımlayıcı bilgiler gibi hassas bilgileri redakte edin.
  
  Kullanıcı argüman iletmişse, bunları sonraki oturumun odaklanacağı şeyin açıklaması olarak değerlendirin ve belgeyi buna göre uyarlayın.
---

Write a handoff document summarising the current conversation so a fresh agent can continue the work. Save to the temporary directory of the user's OS - not the current workspace.

Include a "suggested skills" section in the document, which suggests skills that the agent should invoke.

Do not duplicate content already captured in other artifacts (PRDs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead.

Redact any sensitive information, such as API keys, passwords, or personally identifiable information.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.
