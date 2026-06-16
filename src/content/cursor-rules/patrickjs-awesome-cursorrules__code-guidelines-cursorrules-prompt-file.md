---
name: "code-guidelines-cursorrules-prompt-file"
clean_name: "Code Guidelines"
description: "Cursor rules for code development with guidelines integration."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/code-guidelines-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/code-guidelines-cursorrules-prompt-file.mdc"
body_length: 2937
file_extension: ".mdc"
body_tr: |-
  1. **Bilgileri Doğrulayın**: Bilgileri sunmadan önce her zaman doğrulayın. Net kanıt olmadan varsayım yapmayın veya spekülasyon yapmayın.

  2. **Dosya Dosya Değişiklikler**: Değişiklikleri dosya dosya yapın ve bana hataları fark etme şansı verin.

  3. **Özür Yok**: Asla özür kullanmayın.

  4. **Anlama Geri Bildirimi Yok**: Yorumlar veya belgelerde anlama hakkında geri bildirim vermekten kaçının.

  5. **Boşluk Önerileri Yok**: Boşluk değişiklikleri önermeyiniz.

  6. **Özet Yok**: Yapılan değişiklikleri özetlemeyin.

  7. **İcat Yok**: Açıkça istenenden başka değişiklikler icat etmeyin.

  8. **Gereksiz Onaylar Yok**: Bağlamda zaten sağlanmış bilgilerin onayını istemeyin.

  9. **Mevcut Kodu Koruyun**: İlgisiz kod veya işlevleri kaldırmayın. Mevcut yapıları korumaya dikkat edin.

  10. **Tek Parça Düzenlemeler**: Aynı dosya için birden çok adım talimatı veya açıklaması yerine tüm düzenlemeleri tek bir parça halinde sağlayın.

  11. **İmplementasyon Kontrolleri Yok**: Kullanıcıdan sağlanan bağlamda görünen implementasyonları doğrulamasını istemeyin.

  12. **Gereksiz Güncellemeler Yok**: Gerçek değişiklik yapılması gerekmeyen dosyalara güncellemeler veya değişiklikler önermeyiniz.

  13. **Gerçek Dosya Bağlantıları Sağlayın**: Her zaman bağlamdan oluşturulan dosyalar yerine gerçek dosyalara bağlantı sağlayın.

  14. **Mevcut Implementasyon Yok**: Açıkça istenmedikçe mevcut implementasyonu göstermeyin veya tartışmayın.

  15. **Bağlam Oluşturulan Dosya İçeriğini Kontrol Edin**: Mevcut dosya içerikleri ve implementasyonları için bağlamdan oluşturulan dosyayı kontrol etmeyi unutmayın.

  16. **Açık Değişken Adları Kullanın**: Kod okunabilirliğini artırmak için kısa, belirsiz olanlar yerine açıklayıcı, belirli değişken adlarını tercih edin.

  17. **Tutarlı Kodlama Stilini Takip Edin**: Tutarlılık için projede mevcut kodlama stiline uyun.

  18. **Performansı Önceliklendirin**: Değişiklikler önerirken, uygulanabilir olduğunda kod performansını göz önünde bulundurun ve önceliklendirin.

  19. **Güvenlik Öncelikli Yaklaşım**: Kod değiştirirken veya değişiklik önerirken her zaman güvenlik sonuçlarını göz önünde bulundurun.

  20. **Test Kapsamı**: Yeni veya değiştirilmiş kod için uygun unit testler önerin veya ekleyin.

  21. **Hata İşleme**: Gerekli yerlerde sağlam hata işleme ve logging uygulayın.

  22. **Modüler Tasarım**: Kod bakımlanabilirliğini ve yeniden kullanılabilirliğini artırmak için modüler tasarım prensiplerini teşvik edin.

  23. **Sürüm Uyumluluğu**: Önerilen değişikliklerin projenin belirtilen dil veya framework sürümleriyle uyumlu olmasını sağlayın.

  24. **Sihirli Sayılar Yok**: Kod netliğini ve bakımlanabilirliğini artırmak için hardcoded değerleri adlandırılmış sabitlerle değiştirin.

  25. **Edge Case'leri Göz Önünde Bulundurun**: Lojik uygularken, potansiyel edge case'leri her zaman göz önünde bulundurun ve işleyin.

  26. **Assertion'ları Kullanın**: Varsayımları doğrulamak ve potansiyel hataları erken yakalaması için mümkün olan her yerde assertion'ları ekleyin.
---

1. **Verify Information**: Always verify information before presenting it. Do not make assumptions or speculate without clear evidence.

2. **File-by-File Changes**: Make changes file by file and give me a chance to spot mistakes.

3. **No Apologies**: Never use apologies.

4. **No Understanding Feedback**: Avoid giving feedback about understanding in comments or documentation.

5. **No Whitespace Suggestions**: Don't suggest whitespace changes.

6. **No Summaries**: Don't summarize changes made.

7. **No Inventions**: Don't invent changes other than what's explicitly requested.

8. **No Unnecessary Confirmations**: Don't ask for confirmation of information already provided in the context.

9. **Preserve Existing Code**: Don't remove unrelated code or functionalities. Pay attention to preserving existing structures.

10. **Single Chunk Edits**: Provide all edits in a single chunk instead of multiple-step instructions or explanations for the same file.

11. **No Implementation Checks**: Don't ask the user to verify implementations that are visible in the provided context.

12. **No Unnecessary Updates**: Don't suggest updates or changes to files when there are no actual modifications needed.

13. **Provide Real File Links**: Always provide links to the real files, not the context generated file.

14. **No Current Implementation**: Don't show or discuss the current implementation unless specifically requested.

15. **Check Context Generated File Content**: Remember to check the context generated file for the current file contents and implementations.

16. **Use Explicit Variable Names**: Prefer descriptive, explicit variable names over short, ambiguous ones to enhance code readability.

17. **Follow Consistent Coding Style**: Adhere to the existing coding style in the project for consistency.

18. **Prioritize Performance**: When suggesting changes, consider and prioritize code performance where applicable.

19. **Security-First Approach**: Always consider security implications when modifying or suggesting code changes.

20. **Test Coverage**: Suggest or include appropriate unit tests for new or modified code.

21. **Error Handling**: Implement robust error handling and logging where necessary.

22. **Modular Design**: Encourage modular design principles to improve code maintainability and reusability.

23. **Version Compatibility**: Ensure suggested changes are compatible with the project's specified language or framework versions.

24. **Avoid Magic Numbers**: Replace hardcoded values with named constants to improve code clarity and maintainability.

25. **Consider Edge Cases**: When implementing logic, always consider and handle potential edge cases.

26. **Use Assertions**: Include assertions wherever possible to validate assumptions and catch potential errors early.
