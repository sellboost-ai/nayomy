---
name: "google-adk"
clean_name: "Google Adk"
description: "Google Agent Development Kit rules for agents, tools, sessions, memory, artifacts, evaluation, and deployment"
description_tr: "Google Agent Development Kit ile ajanlar, araçlar, oturumlar, bellek, artifact'lar, değerlendirme ve deployment işlemlerini yönetmek için kurallar ve en iyi uygulamalar."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/google-adk.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/google-adk.mdc"
body_length: 2293
file_extension: ".mdc"
body_tr: |-
  # Google ADK Kuralları

  ## Agent Tasarımı

  - Her agentti net bir hedef, persona ve tool seti etrafında odaklanmış tutun.
  - Esnek akıl yürütme için LLM agenttelerini, belirleyici orkestrasyonlar için workflow agenttelerini kullanın.
  - Görev sınırlarını, tool kullanım kurallarını ve yükseltme davranışını tanımlayan talimatlar yazın.
  - Multi-agent sistemlerini uygulama kolaylığı yerine sorumluluk temelinde bölün.
  - Model seçimlerini yapılandırılabilir tutun.

  ## Araçlar (Tools)

  - Toollara dar, tiplendirilmiş girdiler ve çıktılar verin.
  - Tool argümanlarını yan etkiler yapmadan önce doğrulayın.
  - Sırları, kimlik bilgilerini ve ayrıcalıklı API'leri agent promptlarından uzak tutun.
  - Tool hatalarını açık şekilde işleyin ve işlem yapılabilir hata mesajları döndürün.
  - ADK tool sınırlamalarından haberdar olun; bazı yerleşik araçlar aynı agent üzerindeki diğer araçlarla birleştirilemez.

  ## Oturumlar, Durum ve Bellek

  - Geçerli konuşma verileri için session durumunu kullanın.
  - Oturumlar arası hatırlama ve geri alma için belleği kullanın.
  - Durumu küçük ve serileştirilebilir tutun.
  - Büyük dosyaları veya ikili yükleri session durumunda depolamayın.
  - Durum anahtarlarını istikrarlı ve belgelenmiş tutun.

  ## Artefaktlar

  - Oluşturulan dosyalar, yüklenen dosyalar, raporlar, görüntüler, ses ve diğer ikili veriler için artefaktları kullanın.
  - Artefakt işlemlerine güvenmeden önce runner'da bir artefakt hizmeti yapılandırın.
  - Artefakt dosya adlarını kasıtlı olarak sürümlendirin ve anlamsal olarak farklı çıktıların üzerine yazılmasından kaçının.
  - Tam içerik artefaktlara ait olduğunda durumda yalnızca referanslar veya özetler depolayın.

  ## Değerlendirme ve Dağıtım

  - Tool davranışı, agent yönlendirmesi, prompt regresyonları ve güvenli olmayan tool çağrıları için testler ekleyin.
  - Agent kararlarını hata ayıklamak için izleme veya olay günlüklerini kullanın.
  - Yerel geliştirme, hazırlık ve üretim yapılandırmasını ayrı tutun.
  - Gecikme, tool hataları, token kullanımı ve handoff hataları için gözlemlenebilirlik ekleyin.

  ## Yaygın Hatalar

  - Bir agentti her iş akışından sorumlu yapmayın.
  - Toollara doğrulama olmaksızın keyfi shell, SQL veya HTTP girdisi kabul ettirmeyin.
  - Erişim kontrolü için prompt metnine güvenmeyin.
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
