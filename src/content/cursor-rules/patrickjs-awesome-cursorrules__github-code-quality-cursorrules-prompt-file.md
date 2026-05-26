---
name: "github-code-quality-cursorrules-prompt-file"
clean_name: "Github Code Quality"
description: "Cursor rules for GitHub development with code quality integration."
description_tr: "GitHub geliştirme için Cursor kuralları ve kod kalitesi entegrasyonu."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/github-code-quality-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/github-code-quality-cursorrules-prompt-file.mdc"
body_length: 3492
file_extension: ".mdc"
body_tr: |-
  ```json
  {
    "rules": [
      {
        "name": "Bilgileri Doğrulayın",
        "pattern": "(?i)\\b(assume|assumption|guess|speculate)\\b",
        "message": "Her zaman sunmadan önce bilgileri doğrulayın. Net kanıt olmadan varsayımda bulunmayın veya spekülasyon yapmayın."
      },
      {
        "name": "Dosya Dosya Değişiklikler",
        "pattern": "// MULTI-FILE CHANGE:",
        "message": "Değişiklikleri dosya dosya yapın ve hatalar bulabilmem için bana şans verin"
      },
      {
        "name": "Özür Yok",
        "pattern": "(?i)\\b(sorry|apologize|apologies)\\b",
        "message": "Asla özür kullanmayın"
      },
      {
        "name": "Anlama Geri Bildirimi Yok",
        "pattern": "(?i)\\b(understand|understood|got it)\\b",
        "message": "Yorum veya dokümantasyonda anlama hakkında geri bildirim vermeyin"
      },
      {
        "name": "Boşluk Önerisi Yok",
        "pattern": "(?i)\\b(whitespace|indentation|spacing)\\b",
        "message": "Boşluk değişikliklerini önermeyin"
      },
      {
        "name": "Özet Yok",
        "pattern": "(?i)\\b(summary|summarize|overview)\\b",
        "message": "Yapılan değişiklikleri özetlemeyin"
      },
      {
        "name": "İcatlara Yer Yok",
        "pattern": "(?i)\\b(suggest|recommendation|propose)\\b",
        "message": "Açıkça istenmemişse başka değişiklikler icat etmeyin"
      },
      {
        "name": "Gereksiz Onaylar Yok",
        "pattern": "(?i)\\b(make sure|confirm|verify|check)\\b",
        "message": "Bağlamda zaten sağlanmış bilgilerin onaylanmasını istemeyin"
      },
      {
        "name": "Mevcut Kodu Koruyun",
        "pattern": "(?i)\\b(remove|delete|eliminate|destroy)\\b",
        "message": "İlgisiz kod veya işlevleri kaldırmayın. Mevcut yapıları korumaya dikkat edin."
      },
      {
        "name": "Tek Parça Düzenlemeler",
        "pattern": "(?i)\\b(first|then|next|after that|finally)\\b",
        "message": "Aynı dosya için çok adımlı talimatlar veya açıklamalar yerine tüm düzenlemeleri tek bir parça halinde sağlayın"
      },
      {
        "name": "Uygulama Kontrolü Yok",
        "pattern": "(?i)\\b(make sure|verify|check|confirm) (it's|it is|that) (correctly|properly) implemented\\b",
        "message": "Sağlanan bağlamda görülebilecek uygulamaları doğrulamasını kullanıcıdan istemeyin"
      },
      {
        "name": "Gereksiz Güncellemeler Yok",
        "pattern": "(?i)\\b(update|change|modify|alter)\\b.*\\bno changes\\b",
        "message": "Gerçek değişiklik gerekli olmadığında dosyalara güncellemeler veya değişiklikler önermeyin"
      },
      {
        "name": "Gerçek Dosya Bağlantıları Sağlayın",
        "pattern": "(?i)\\b(file|in)\\b.*\\b(x\\.md)\\b",
        "message": "Her zaman x.md değil, gerçek dosyalara bağlantı sağlayın"
      },
      {
        "name": "Önceki x.md Göz Önüne Alınması Yok",
        "pattern": "(?i)\\b(previous|earlier|last)\\b.*\\bx\\.md\\b",
        "message": "Belleğinizde önceki x.md dosyalarını göz önüne almayın. İçerikler önceki çalıştırmalarla aynı ise şikayet edin."
      },
      {
        "name": "Mevcut Uygulama Yok",
        "pattern": "(?i)\\b(current|existing)\\s+(implementation|code)\\b",
        "message": "Özellikle istenmedikçe mevcut uygulamayı veya kodu göstermeyin veya tartışmayın"
      },
      {
        "name": "x.md İçeriğini Kontrol Edin",
        "pattern": "(?i)\\b(file|content|implementation)\\b",
        "message": "Güncel dosya içeriği ve uygulamaları için x.md dosyasını kontrol etmeyi unutmayın"
      }
    ]
  }
  ```
---

{
  "rules": [
    {
      "name": "Verify Information",
      "pattern": "(?i)\\b(assume|assumption|guess|speculate)\\b",
      "message": "Always verify information before presenting it. Do not make assumptions or speculate without clear evidence."
    },
    {
      "name": "File-by-File Changes",
      "pattern": "// MULTI-FILE CHANGE:",
      "message": "Make changes file by file and give me a chance to spot mistakes"
    },
    {
      "name": "No Apologies",
      "pattern": "(?i)\\b(sorry|apologize|apologies)\\b",
      "message": "Never use apologies"
    },
    {
      "name": "No Understanding Feedback",
      "pattern": "(?i)\\b(understand|understood|got it)\\b",
      "message": "Avoid giving feedback about understanding in comments or documentation"
    },
    {
      "name": "No Whitespace Suggestions",
      "pattern": "(?i)\\b(whitespace|indentation|spacing)\\b",
      "message": "Don't suggest whitespace changes"
    },
    {
      "name": "No Summaries",
      "pattern": "(?i)\\b(summary|summarize|overview)\\b",
      "message": "Don't summarize changes made"
    },
    {
      "name": "No Inventions",
      "pattern": "(?i)\\b(suggest|recommendation|propose)\\b",
      "message": "Don't invent changes other than what's explicitly requested"
    },
    {
      "name": "No Unnecessary Confirmations",
      "pattern": "(?i)\\b(make sure|confirm|verify|check)\\b",
      "message": "Don't ask for confirmation of information already provided in the context"
    },
    {
      "name": "Preserve Existing Code",
      "pattern": "(?i)\\b(remove|delete|eliminate|destroy)\\b",
      "message": "Don't remove unrelated code or functionalities. Pay attention to preserving existing structures."
    },
    {
      "name": "Single Chunk Edits",
      "pattern": "(?i)\\b(first|then|next|after that|finally)\\b",
      "message": "Provide all edits in a single chunk instead of multiple-step instructions or explanations for the same file"
    },
    {
      "name": "No Implementation Checks",
      "pattern": "(?i)\\b(make sure|verify|check|confirm) (it's|it is|that) (correctly|properly) implemented\\b",
      "message": "Don't ask the user to verify implementations that are visible in the provided context"
    },
    {
      "name": "No Unnecessary Updates",
      "pattern": "(?i)\\b(update|change|modify|alter)\\b.*\\bno changes\\b",
      "message": "Don't suggest updates or changes to files when there are no actual modifications needed"
    },
    {
      "name": "Provide Real File Links",
      "pattern": "(?i)\\b(file|in)\\b.*\\b(x\\.md)\\b",
      "message": "Always provide links to the real files, not x.md"
    },
    {
      "name": "No Previous x.md Consideration",
      "pattern": "(?i)\\b(previous|earlier|last)\\b.*\\bx\\.md\\b",
      "message": "Do not consider any previous x.md files in your memory. Complain if the contents are the same as previous runs."
    },
    {
      "name": "No Current Implementation",
      "pattern": "(?i)\\b(current|existing)\\s+(implementation|code)\\b",
      "message": "Don't show or discuss the current implementation unless specifically requested"
    },
    {
      "name": "Check x.md Content",
      "pattern": "(?i)\\b(file|content|implementation)\\b",
      "message": "Remember to check the x.md file for the current file contents and implementations"
    }
  ]
}
