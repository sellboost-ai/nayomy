---
name: "google-adk"
clean_name: "Google Adk"
description: "Google Agent Development Kit rules for agents, tools, sessions, memory, artifacts, evaluation, and deployment"
description_tr: "Google Agent Development Kit'te ajanlar, araçlar, oturumlar, bellek, yapıtlar, değerlendirme ve dağıtım için kurallar"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/google-adk.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/google-adk.mdc"
body_length: 2293
file_extension: ".mdc"
body_tr: |-
  # Google ADK Kuralları

  ## Agent Tasarımı

  - Her agent'ı net bir hedef, persona ve tool seti ile sınırlandırın.
  - Esnek akıl yürütme için LLM agent'larını, deterministik orkestrasyonda workflow agent'larını kullanın.
  - Görev sınırlarını, tool kullanım kurallarını ve escalation davranışını tanımlayan talimatlar yazın.
  - Multi-agent sistemleri uygulama kolaylığından ziyade sorumluluk alanına göre bölün.
  - Model seçimlerini yapılandırılabilir tutun.

  ## Araçlar (Tools)

  - Tool'lara dar ve type'lanmış input ve output verin.
  - Tool argümanlarını yan etkiler gerçekleştirmeden önce doğrulayın.
  - Sırları, kimlik bilgilerini ve ayrıcalıklı API'leri agent prompt'larından uzak tutun.
  - Tool hatalarını açıkça ele alın ve işlem yapılabilir başarısızlık mesajları döndürün.
  - ADK tool sınırlamalarından haberdar olun; bazı built-in tool'lar aynı agent'ta diğer tool'larla birleştirilemez.

  ## Oturumlar, Durum ve Hafıza

  - Geçerli konuşma verileri için session state'ini kullanın.
  - Oturumlar arası geri çağırma ve retrieval için memory'yi kullanın.
  - State'i küçük ve serialize edilebilir tutun.
  - Session state'e büyük dosyalar veya binary payload'ları depolamayın.
  - State key'lerini stabil ve dokumente edin.

  ## Artefaktlar (Artifacts)

  - Oluşturulan dosyalar, yüklenen dosyalar, raporlar, görseller, ses ve diğer binary veriler için artifact'ları kullanın.
  - Artifact işlemlere güvenmeden önce runner'da artifact servisi yapılandırın.
  - Artifact dosya adlarını kasıtlı olarak version'layın ve semantik olarak farklı output'ları üzerine yazmaktan kaçının.
  - Tam içerik artifact'lara ait olduğunda state'e yalnızca referanslar veya özetler depolayın.

  ## Değerlendirme ve Deployment

  - Tool davranışı, agent routing, prompt regressiyonları ve güvensiz tool çağrıları için testler ekleyin.
  - Agent kararlarını debug etmek için trace veya event log'larını kullanın.
  - Yerel development, staging ve production yapılandırmasını ayrı tutun.
  - Latans, tool başarısızlıkları, token kullanımı ve handoff başarısızlıkları için observability ekleyin.

  ## Sık Yapılan Hatalar

  - Bir agent'ı her workflow için sorumlu yapmayın.
  - Tool'lara doğrulama olmaksızın keyfi shell, SQL veya HTTP input kabul ettirmeyin.
  - Erişim kontrolü için prompt metinine güvenmeyin.
  - Önemli yan etkileri genel tool adlarının arkasında gizlemeyin.
---


# Google ADK Rules

## Agent Design

- Keep each agent focused on a clear goal, persona, and tool set.
- Use LLM agents for flexible reasoning and workflow agents for deterministic orchestration.
- Write instructions that define task boundaries, tool-use rules, and escalation behavior.
- Split multi-agent systems by responsibility rather than by implementation convenience.
- Keep model choices configurable.

## Tools

- Give tools narrow, typed inputs and outputs.
- Validate tool arguments before performing side effects.
- Keep secrets, credentials, and privileged APIs out of agent prompts.
- Handle tool errors explicitly and return actionable failure messages.
- Be aware of ADK tool limitations; some built-in tools cannot be combined with other tools on the same agent.

## Sessions, State, and Memory

- Use session state for current-conversation data.
- Use memory for cross-session recall and retrieval.
- Keep state small and serializable.
- Do not store large files or binary payloads in session state.
- Make state keys stable and documented.

## Artifacts

- Use artifacts for generated files, uploaded files, reports, images, audio, and other binary data.
- Configure an artifact service in the runner before relying on artifact operations.
- Version artifact filenames intentionally and avoid overwriting semantically different outputs.
- Store only references or summaries in state when full content belongs in artifacts.

## Evaluation and Deployment

- Add tests for tool behavior, agent routing, prompt regressions, and unsafe tool calls.
- Use trace or event logs to debug agent decisions.
- Keep local development, staging, and production configuration separate.
- Add observability for latency, tool failures, token use, and handoff failures.

## Common Mistakes

- Do not make one agent responsible for every workflow.
- Do not let tools accept arbitrary shell, SQL, or HTTP input without validation.
- Do not rely on prompt text for access control.
- Do not hide important side effects behind generic tool names.
