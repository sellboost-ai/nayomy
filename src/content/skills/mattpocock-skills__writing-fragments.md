---
name: "writing-fragments"
description_en: "Grilling session that mines the user for fragments — heterogeneous nuggets of writing (claims, vignettes, sharp sentences, half-thoughts) — and appends them to a single document as raw material for a future article. Use when the user wants to develop ideas before imposing structure, or mentions \"fragments\", \"ideate\", or \"raw material\" for writing."
description_tr: "Kullanıcıdan çeşitli yazı parçaları — iddialar, kısa sahneler, keskin cümleler, yarım fikirler — topladığı ve bunları gelecekteki bir makalede kullanmak üzere tek bir dokümana eklediği bir grilling oturumu. Kullanıcı fikirleri yapılandırmadan önce geliştirmek istediğinde veya \"fragments\", \"ideate\" ya da \"raw material\" gibi ifadeler kullandığında kullanılır."
category: "Document"
repo: "mattpocock/skills"
stars: 134333
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/in-progress/writing-fragments/SKILL.md"
path: "skills/in-progress/writing-fragments/SKILL.md"
is_collection: false
body_length: 2912
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  <what-to-do>
  
  Keskin bir soru sorma seansı yürüt ve parçalar üret. Kullanıcıyı yazmak istedikleri konu hakkında ısrarla sorgulamaya tut. Aşamalar, taslaklar veya yapı dayatma — bu açıkça kapsam dışıdır.
  
  Konuşmanın her iki tarafından da parçalar ortaya çıktıkça, bunları tek bir markdown dosyasına ekle. Kullanıcı oturum sırasında bu dosyayı düzenleyecektir; yazdığından önce her zaman yeniden oku, böylece onların değişiklikleri korunur.
  
  Kullanıcı bir yol geçmediyse, belgeyi nereye kaydedeceğini bir kez sor, sonra bu oturumun geri kalanında bunu hatırla.
  
  İlk şeyi de dahil olmak üzere, konuşmanın her iki tarafından da parçaları yakala.
  
  İlk yazıda, sadece bir H1 başlık (daha sonra değişebilir) koy ve başka hiçbir şey koyma — meta veri yok, içindekiler tablosu yok, tarih yok.
  
  </what-to-do>
  
  <supporting-info>
  
  ## Parça nedir
  
  Parça, son makaleye hayatta kalabilecek herhangi bir metin parçasıdır. _Yazara okunabilir_ olması gerekir — yazar bunun ne anlama geldiğini anlayabilir — ancak terimlerini tanımlaması veya soğuk bir okuyucu için anlaşılabilir olması gerekmez. Standart şudur: "Bu iyi yazılmış bir metin mi?", "Bu kendi kendine yeterli bir argüman mı?" değildir.
  
  Parçalar kasıtlı olarak heterojen. Parça olabilecek şeylere örnekler:
  
  - Bir yerde konuşlandırmak isteyeceğin ama henüz nereye koyacağını bilmediğin keskin bir cümle.
  - Tek satırlık bir açıklamaya sahip bir iddia.
  - Bir vignette: bir şey oldu, bir kod parçası, bir senaryo, bir analoji.
  - Yarım düşünce: "X'in Y'ye benzer hissettirilmesi hakkında bir şey, daha sonra bunu işle."
  - Bir alıntı, bir diyalog parçası, duyulan bir satır.
  - Bir arada kalan ilgili gözlemler, hissettirilişe göre birlikleri.
  - Bir yakınma, bir itiraf, bir şaka.
  
  Romancının günlüğü modeldir: daha sonra ham malzeme için madenciliği yapılacak yıllar süren yapılandırılmamış gözlemler. Parçalar gözlemlerdir.
  
  ## Dosya biçimi
  
  ```markdown
  # Çalışan başlık
  
  İlk parça burada yaşar.
  
  Birden çok paragraf olabilir. Liste, kod, alıntı içerebilir — parçanın doğal olarak aldığı her şekil.
  
  ---
  
  İkinci bir parça.
  
  ---
  
  > Kullanıcının etrafta tutmak istediği alıntılı bir satır.
  
  Ona karşı bir tepki.
  
  ---
  
  - İlgili gözlemlerin bir kümesi
  - Hissettirilişe göre birlikleri
  - Ve birbirlerine yakın olmak isteyen
  ```
  
  Parçalar yatay bir kural (`\n---\n`) ile ayrılır. Gövdede başlık yok. Etiket yok. Eklenme sırası dışında bir sıra yok.
  
  ## Yazma ritmi
  
  Sessizce ekle. Her parça için izin isteme. Ne eklediğini geçişte belirt ("onu ekliyorum"), ancak konuşmayı kaydetme diyaloglarıyla kesintiye uğratma.
  
  Her yazıdan önce: dosyayı diskten yeniden oku. Kullanıcı parçaları arasında düzenleyebilir, yeniden sıralayabilir veya silebilir — onların değişikliklerini koru. Dosyayı hiçbir zaman üzerine yazma; sadece ekle (veya kullanıcı isterseniz, belirli bir parçayı yerinde düzenle).
  
  Kullanıcı herhangi bir zamanda "sonuncu olanı sil", "onu daha keskin yaz", "şunları birleştir" diyebilir. Bunları birinci sınıf talimatlar olarak değerlendir.
  
  </supporting-info>
---

<what-to-do>

Run a grilling session that produces fragments. Interview the user relentlessly about whatever they want to write about. Do not impose phases, outlines, or structure — that is explicitly out of scope.

As fragments emerge from either side of the conversation, append them to a single markdown file. The user will be editing this file during the session; always re-read it before writing so their edits are preserved.

If the user did not pass a path, ask once where to save the document, then remember it for the rest of the session.

Capture fragments from the very first thing the user says, including the initial prompt.

On first write, put a single H1 at the top with a working title (it can change later) and nothing else — no metadata, no TOC, no date.

</what-to-do>

<supporting-info>

## What is a fragment

A fragment is any piece of text that might survive into the final article. It must be _readable by the author_ — the author can tell what it means — but it does not need to define its terms or be comprehensible to a cold reader. The bar is "is this a piece of good writing?", not "is this a self-contained argument?"

Fragments are deliberately heterogeneous. Examples of what could be a fragment:

- A sharp sentence you'd want to deploy somewhere but don't yet know where.
- A claim with a one-line justification.
- A vignette: a thing that happened, a code snippet, a scenario, an analogy.
- A half-thought: "something about how X feels like Y, work this out later."
- A quote, a piece of dialogue, an overheard line.
- A list of related observations that hang together by feel.
- A complaint, a confession, a punchline.

The novelist's diary is the model: years of unstructured noticings that later get mined for raw material. Fragments are noticings.

## File format

```markdown
# Working title

A first fragment lives here.

It can be multiple paragraphs. It can include lists, code, quotes — whatever
shape the fragment naturally takes.

---

A second fragment.

---

> A quoted line that the user wants to keep around.

A reaction to it.

---

- A cluster of related observations
- That hang together by feel
- And want to be near each other
```

Fragments are separated by a horizontal rule (`\n---\n`). No headings inside the body. No tags. No order beyond the order they were added.

## Writing rhythm

Append silently. Don't ask permission for each fragment. Mention what you added in passing ("adding that"), but don't interrupt the conversation with save dialogs.

Before every write: re-read the file from disk. The user may have edited, reordered, or deleted fragments between turns — preserve their changes. Never overwrite the file; only append (or, if the user asks, edit a specific fragment in place).

The user can say "cut the last one", "rewrite that one sharper", "merge those two" at any time. Treat those as first-class instructions.

</supporting-info>
