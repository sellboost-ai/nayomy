---
name: "google-adk"
clean_name: "Google Adk"
description: "Google Agent Development Kit rules for agents, tools, sessions, memory, artifacts, evaluation, and deployment"
description_tr: "Google Agent Development Kit ile ajanlar, araçlar, oturumlar, bellek, yapıtlar, değerlendirme ve deployment için kurallar ve en iyi uygulamalar."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/google-adk.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/google-adk.mdc"
body_length: 2293
file_extension: ".mdc"
body_tr: |-
  # Google ADK Kuralları

  ## Agent Tasarımı

  - Her agent'ı net bir hedef, persona ve araç seti etrafında odaklanmış tutun.
  - Esnek akıl yürütme için LLM agent'ları, deterministik orkestrasyonu için workflow agent'ları kullanın.
  - Görev sınırlarını, araç kullanım kurallarını ve escalation davranışını tanımlayan talimatlar yazın.
  - Multi-agent sistemlerini uygulama kolaylığı yerine sorumluluk temelinde bölün.
  - Model seçimlerini yapılandırılabilir tutun.

  ## Araçlar

  - Araçlara dar, tipli girdiler ve çıktılar verin.
  - Yan etkiler gerçekleştirmeden önce araç argümanlarını doğrulayın.
  - Sırları, kimlik bilgilerini ve ayrıcalıklı API'leri agent prompt'larından uzak tutun.
  - Araç hatalarını açıkça ele alın ve işlem yapılabilir hata mesajları döndürün.
  - ADK araç sınırlamalarının farkında olun; bazı yerleşik araçlar aynı agent'ta diğer araçlarla birleştirilemez.

  ## Oturumlar, State ve Bellek

  - Geçerli konuşma verileri için session state'i kullanın.
  - Oturumlar arası geri çağırma ve alma için bellek kullanın.
  - State'i küçük ve serileştirilebilir tutun.
  - Session state'e büyük dosyalar veya binary payload'lar depolamayın.
  - State key'lerini stabil ve belgelenmesi sağlanan tutun.

  ## Artifact'ler

  - Generated dosyalar, yüklenen dosyalar, raporlar, görüntüler, ses ve diğer binary veriler için artifact'ler kullanın.
  - Artifact işlemlerine güvenmeden önce runner'da bir artifact servisi yapılandırın.
  - Artifact dosya adlarını kasıtlı olarak versiyonlandırın ve anlamsal olarak farklı çıktıları üzerine yazmaktan kaçının.
  - Tam içerik artifact'lerde bulunmalıyken state'de yalnızca referansları veya özetleri saklayın.

  ## Değerlendirme ve Deployment

  - Araç davranışı, agent yönlendirmesi, prompt regresyonları ve güvensiz araç çağrıları için testler ekleyin.
  - Agent kararlarında hata ayıklamak için trace veya event log'ları kullanın.
  - Yerel geliştirme, staging ve production yapılandırmasını ayrı tutun.
  - Gecikme, araç hataları, token kullanımı ve handoff hataları için observability ekleyin.

  ## Yaygın Hatalar

  - Bir agent'ı her workflow'dan sorumlu yapmayın.
  - Araçlara doğrulama olmadan keyfi shell, SQL veya HTTP girişi kabul ettirmeyin.
  - Access control için prompt metne güvenmeyin.
  - Önemli yan etkileri genel araç adlarının arkasına gizlemeyin.
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
