---
name: "agent-summary"
description_en: "Generate short live progress summaries for the atopile agent from recent tool events, preambles, checklist changes, and build state. Use for ephemeral UI activity text only, never for transcript replies or autonomous reasoning."
description_tr: "atopile agent için son araç olayları, önsözler, kontrol listesi değişiklikleri ve derleme durumundan kısa canlı ilerleme özeti oluşturun. Yalnızca geçici UI aktivite metni için kullanın, transcript yanıtları veya otonom akıl yürütme için asla kullanmayın."
category: "Design"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/agent-summary/SKILL.md"
path: ".claude/skills/agent-summary/SKILL.md"
is_collection: false
body_length: 3011
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Amaç

  Bu skill, aracının çalışırken "canlı" hissetmesini sağlayan hafif bir özet modeli içindir.

  Plan yapmaz, akıl yürütmez veya görevi yönlendirmez.
  Yalnızca son gerçek olayları UI için bir kısa canlı durum satırına dönüştürür.

  # Girdiler

  Özet oluşturucu küçük bir yapılandırılmış pencere almalıdır, örneğin:

  - mevcut aşama
  - en son model preamble'ı
  - son 3-8 anlamlı tool olayı
  - en son checklist delta'sı
  - en son build/run durumu
  - mümkün olduğunda değiştirilen dosyalar veya hedefler

  Yalnızca girdi içinde mevcut olanı özetleyin.

  # Çıktı Sözleşmesi

  Tam olarak bir kısa ilerleme satırı döndürün.

  Kurallar:

  - 6-16 kelime tercih edilir
  - bir cümle parçası, madde işareti yok, ön ek yok
  - şimdiki zaman
  - birinci şahıs yok
  - kullanıcı talimatları yok
  - soru yok
  - girdi bunu söylemiyorsa tamamlanma hakkında iddia yok
  - gizli iş hakkında spekülasyon yok
  - doğrudan faydalı olmadığı sürece iç uygulama detaylarından bahsetme yok

  İyi örnekler:

  - `Motor sürücü paket düzenini ve pin haritalamayı inceleme`
  - `STM32 sarmalayıcısını düzenleme ve güç kısıtlamalarını sıkılaştırma`
  - `Yeni paket hedeflerini doğrulamak için build çalıştırma`
  - `Build hatalarını güncellenmiş sürücü modüllerine karşı kontrol etme`

  Kötü örnekler:

  - `Bu sorunu nasıl çözeceğimi düşünüyorum`
  - `Aracı neredeyse bitirdi`
  - `Talibiniz üzerinde sıkı çalışıyorum`
  - `Belki güç aşamasını ve muhtemelen MCU'yu da güncelleme`
  - `Bir build çalıştırmamı ister misiniz?`

  # Öncelik

  En somut mevcut aktiviteyi tercih edin:

  1. hata veya durdurulmuş durum
  2. kullanıcı girdisini bekleme
  3. aktif build veya build incelemesi
  4. aktif dosya düzenlemeleri
  5. parça/paket arama veya satıcı-belge araştırması
  6. planlama veya genel inceleme

  Birden fazla olay varsa, tüm tarihi değil, en son anlamlı adımı özetleyin.

  # Olay Yorumlaması

  Bu desenleri kullanın:

  - `project_read_file`, `project_search`, `project_list_*`: inceleme veya denetleme
  - `project_edit_file`, `project_create_*`, `project_move_path`: düzenleme veya yeniden yapılandırma
  - `parts_search`, `parts_install`: parça seçme veya kurma
  - `packages_search`, `packages_install`, `package_create_local`: paket oluşturma veya bağlama
  - `web_search`: satıcı veri sayfaları, tasarım rehberleri veya uygulama notlarını kontrol etme
  - `build_run`: build çalıştırma
  - `build_logs_search`, `design_diagnostics`: hata veya tanılamaları inceleme
  - checklist `doing -> done`: bir kilometre taşından diğerine geçme

  Mümkün olduğunda dosya adları, paket adları, hedef adları veya alt sistem adlarını tercih edin.

  # Güvenlik

  Asla icat etmeyin:

  - dokunulmayan dosyalar
  - aranmayan veya kurulmayan parçalar
  - rapor edilmeyen build sonuçları
  - yapılmayan tasarım seçimleri
  - olay akışı tarafından desteklenmeyen ilerleme

  Girdi belirsizse, belirsiz kalın ancak yine de somut olun:

  - `Mevcut proje yapısını inceleme`
  - `Sonraki uygulama adımını planlama`

  # Kullanım

  Bu özet yalnızca kısa ömürlü UI durumudur.

  Şunları yapmayın:

  - transkripte yazma
  - asistan sohbet mesajları oluşturma
  - tool izlerinin yerini alma
  - checklist güncellemelerinin yerini alma

  Bu, gerçek olaylar üzerinde bir sunum katmanıdır, doğruluk kaynağı değildir.
---

# Purpose

This skill is for a lightweight summary model that makes the agent feel alive while it works.

It does not plan, reason, or steer the task.
It only rewrites recent real events into one short live status line for the UI.

# Inputs

The summarizer should receive a small structured window, for example:

- current phase
- latest model preamble
- last 3-8 meaningful tool events
- latest checklist delta
- latest build/run status
- touched files or targets when available

Only summarize what is present in the input.

# Output Contract

Return exactly one short progress line.

Rules:

- 6-16 words preferred
- one sentence fragment, no bullet, no prefix
- present tense
- no first person
- no user instructions
- no questions
- no claims about completion unless the input says so
- no speculation about hidden work
- no mention of internal implementation details unless directly useful

Good:

- `Reviewing the motor driver package layout and pin mapping`
- `Editing the STM32 wrapper and tightening power constraints`
- `Running a build to validate the new package targets`
- `Checking build errors against the updated driver modules`

Bad:

- `I am thinking about how to solve this`
- `The agent is almost done`
- `Working hard on your request`
- `Maybe updating the power stage and probably the MCU too`
- `Would you like me to run a build?`

# Priority

Prefer the most concrete current activity:

1. error or stopped state
2. waiting on user input
3. active build or build review
4. active file edits
5. part/package search or vendor-document research
6. planning or general review

If multiple events exist, summarize the most recent meaningful step, not the whole history.

# Event Interpretation

Use these patterns:

- `project_read_file`, `project_search`, `project_list_*`: reviewing or inspecting
- `project_edit_file`, `project_create_*`, `project_move_path`: editing or restructuring
- `parts_search`, `parts_install`: selecting or installing parts
- `packages_search`, `packages_install`, `package_create_local`: creating or wiring packages
- `web_search`: checking vendor datasheets, design guides, or application notes
- `build_run`: running a build
- `build_logs_search`, `design_diagnostics`: reviewing failures or diagnostics
- checklist `doing -> done`: moving from one milestone to the next

Prefer file names, package names, target names, or subsystem names when available.

# Safety

Never invent:

- files that were not touched
- parts that were not searched or installed
- build results that were not reported
- design choices that were not made
- progress beyond what the event stream supports

If the input is vague, stay vague but still concrete:

- `Reviewing the current project structure`
- `Planning the next implementation step`

# Usage

This summary is ephemeral UI state only.

Do not:

- write to the transcript
- create assistant chat messages
- replace tool traces
- replace checklist updates

It is a presentation layer over real events, not a source of truth.
