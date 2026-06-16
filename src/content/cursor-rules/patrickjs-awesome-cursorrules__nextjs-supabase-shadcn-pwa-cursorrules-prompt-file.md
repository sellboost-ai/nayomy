---
name: "nextjs-supabase-shadcn-pwa-cursorrules-prompt-file"
clean_name: "Next.js Supabase Shadcn PWA"
description: "Cursor rules for Nextjs Supabase Shadcn Pwa."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/nextjs-supabase-shadcn-pwa-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-supabase-shadcn-pwa-cursorrules-prompt-file.mdc"
body_length: 6569
file_extension: ".mdc"
body_tr: |-
  ## Temel İlkeler

  - **Kod Kalitesi & Stili**

    - Özlü, bakımı kolay ve güçlü şekilde yazılmış TypeScript uygulamaları ile kod yazın.
    - Fonksiyonel, deklaratif programlamayı benimseyin. OOP ve sınıflardan kaçının.
    - Dosyaları maksimum 150 satır ile sınırlayın; aşılırsa daha küçük modüllere yeniden düzenleyin.
    - Çoğaltmaya tercih ederek tekrarı önleyin ve modülerleştirin.
    - Yardımcı fiiller içeren açıklayıcı, anlamsal değişken adları kullanın (örn. `isLoading`, `hasError`).
    - Dizinler ve dosyalar için küçük harf ve tire kullanın (örn. `components/auth-wizard`).
    - Bileşenler için adlandırılmış export'lar tercih edin.
    - Fonksiyon parametreleri/dönüşleri için RORO (Nesne Al, Nesne Döndür) benimseyin.
    - DRY (Don't Repeat Yourself) ilkelerine her zaman uyun.
    - Tutarlılık ve kaliteyi sağlamak için düzenli kod incelemeler ve sık refaktoring oturumları yapın.
    - Web Vitals'ı (LCP, CLS, FID) kontrol edin ve geliştirebilir, performans ve kullanıcı deneyimini koruyun.

  - **'Build Notes' Oluşturun:**

    - Çalıştığınız her görev grubu için bir 'Build Notes' dosyası oluşturmalısınız.
    - **Açıklık & Kısalık:** Notları özlü, doğrudan ve görev odaklı tutun.
    - **Mantıksal İsimlendirme:** Her notlar dosyasını belirli bir görev ve tarihle bağlayan tutarlı bir adlandırma kuralı kullanın.
    - **Artımlı Güncellemeler:** Planlar geliştiğinde veya görevler tamamlandığında notları güncelleyin. Üzerine yazmak yerine ekleyin.
    - **İzlenebilirlik:** Her karar veya yaklaşım değişikliğinin kaydedilmesini ve izlenebilmesini sağlayın.

  - **'Project Contexts' İnceleyin:**

    - Proje bağlamının güncel ve doğru olduğundan emin olmak için `projectContext.md` dosyasını incelemelisiniz.
    - **Kararlılık:** Bağlam dosyalarını günlük çalışma notları olarak değil, istikrarlı referanslar olarak kullanın.
    - **Seçici Güncellemeler:** Bağlam dosyalarını yalnızca gereksinimler veya proje kapsamında önemli, onaylanmış değişiklikler olduğunda güncelleyin.
    - **Erişilebilirlik:** Bağlam dosyalarını kolayca anlaşılır ve düzenli hale getirin, böylece gelecekteki geliştiriciler projenin temel rehberliğini hızlı bir şekilde kavrayabilsin.

  - **Stack ve Framework Kuralları**

    - **Next.js 15+** hedefleyin ve App Router, React Server Components (RSC) ve SSR yeteneklerinden yararlanın.
    - Gerekli olduğunda istemci bileşenlerinde durum yönetimi için Zustand kullanın.
    - `npx shadcn@latest add` komutunu kullanarak Shadcn UI yönetimini düzgün şekilde yapın.
    - Mobil-ilk yaklaşım ve duyarlı tasarım desenleri izleyin.
    - Sunucu tarafı mantığını vurgulayın, `use client` ve diğer istemci-yalnız API'lerin kullanımını en aza indirin.
    - Projeyi Progressive Web App (PWA) olarak yapılandırın; çevrimdışı yetenekler, uygulama benzeri deneyim ve cihazlar arasında yüklenebilirlik içersin.

  - **Monorepo & Araçlar**

    - Bir monorepo yapısı kullanıyorsanız, paylaşılan kodu `packages/` dizinine ve uygulamaya özel kodu `app/` dizinine yerleştirin.
    - Geliştirme, test ve dağıtım görevleri için `Taskfile.yml` komutlarını kullanın.
    - Ortam değişkenlerini ve hassas verileri kodun dışında tutun ve bunlara `.env` dosyaları veya benzer konfigürasyon aracılığıyla erişin.

  Aşağıda, anahtar ilkeleri ve `/ProjectDocs/Build_Notes/` ile `/ProjectDocs/contexts/` dizinlerinin bakımı için detaylı kuralları içeren AI geliştirme ajanına sağlanacak yapılandırılmış bir rehber yer almaktadır.

  ---

  ### Build Notes Dosyaları için Kurallar

  1. **Konum & İsimlendirme:**

     - Tüm notlar dosyalarını `/ProjectDocs/Build_Notes/` içinde depolayın.
     - Mantıksal, açıklayıcı bir adlandırma kuralı kullanın, örn. `build-title_phase-#_task-group-name.md`.
     - Yapı görevini tanımlamak için `<build-title>` kullanın.
     - Yapı görevine Phase # uygulamak için `<phase-#>` kullanın.
     - Görev grubu adını tanımlamak için `<task-group-name>` kullanın.
     - Örnek: `supabase-schema-standardization_phase-1_preparation-and-code-analysis.md`
       - `supabase-schema-standardization` yapı başlığıdır
       - `phase-1` faz numarasıdır
       - `preparation-and-code-analysis` görev grubu adıdır

  2. **İçerik Yapısı:**

     - Başlangıçta ne elde etmeyi amaçladığınızı özetleyen bir **Görev Hedefi** ile başlayın.
     - **Mevcut Durum Değerlendirmesi**: yapı görevlerine ilişkin projenin mevcut durumunun kısa bir açıklamasını sağlayın.
     - **Gelecek Durum Hedefi**: yapı görevlerine ilişkin projenin gelecek durumunun kısa bir açıklamasını sağlayın.
     - Devamında bir **Uygulama Planı**: gelecek duruma ulaşmak için kontrol listesi **görevleri** içeren numaralandırılmış **adımlar** listesi.
     - Görevler tamamlandıkça **Uygulama Planını** güncelleyin ve uygulanmayan görevlerin üzerini çizin. ASLA PLANDAN GÖREV SİLMEYİN.
     - Plan değişirse veya gelişirse, önceki içeriğin üzerine yazmak yerine yeni **adımlar** veya **görevler** ekleyin.

  3. **Ne Zaman Güncellenecek:**

     - **Görev Başlatılırken:** Görev-spesifik notlar dosyasını oluşturun veya açın ve kodlamadan önce ilk planı kaydedin.
     - **Görev Yürütülürken:** Planlar değiştiğinde, zorluklar ortaya çıktığında veya yeni içgörüler ortaya çıktığında güncellemeler ekleyin.
     - **Görev Tamamlandığında:** Yapılanların bir özetini ekleyin ve orijinal hedefle uyumlu olduğunu doğrulayın.

  4. **Stil & Ton:**

     - Notları özlü, konuya odaklı ve alakasız yorum içermeyen tutun.
     - Gelecekteki okuyucuların karar verme sürecini karışıklık olmadan anlayabileceği şekilde mantıksal bir sıra koruyun.

  5. **Build Notes'un Tamamlanması:**

     - Build notes tamamlandığında dosyayı `/ProjectDocs/Build_Notes/completed/` dizinine taşıyın.
     - Build notes kullanımdan kaldırıldıysa ve artık gerekli değilse, dosyayı `/ProjectDocs/Build_Notes/archived/` dizinine taşıyın.

  ---

  ### Context Dosyaları için Kurallar

  1. **Master Proje Bağlamı (`projectContext.md`):**

     - `/ProjectDocs/contexts/` içinde bulunur.
     - Proje kapsamı, gereksinimler ve tasarım ilkelerinin genel görünümünü sağlar.
     - Bu dosyayı yalnızca projenin temel yönü veya kapsamında büyük değişiklikler olduğunda güncelleyin.

  2. **Ek Bağlam Dosyaları:**

     - Ek dosyalar (örn. `uiContext.md`, `featureAContext.md`) belirli işlevsellikler, tasarımlar veya uygulama alanları hakkında daha detaylı spesifikasyonlar için oluşturulabilir.
     - Bu dosyaları kararlı tutun. Bunları yalnızca yeni, onaylanmış değişiklikler belgelendirilmesi gerektiğinde güncelleyin.
     - Geliştirmenin kurulan rehberlikle uyumlu olduğundan emin olmak için bu dosyaları sık sık referans alın.

  3. **Değişim Yönetimi:**

     - Bağlam dosyalarında yapılan tüm değişiklikleri, bu görev için ilgili build notes dosyasında kaydedin.
     - Şeffaflık ve çekirdek proje hedefleriyle uyumu korumak için bağlam değişikliklerinin net bir gerekçesini tutun.

  ---

  ## Proje Yapısı

  Açık, modüler bir dizin yapısı benimseyin:
---

## Key Principles

- **Code Quality & Style**

  - Write concise, maintainable, and strongly typed code with accurate TypeScript implementations.
  - Embrace functional, declarative programming. Avoid OOP and classes.
  - Limit files to a maximum of 150 lines; refactor into smaller modules if exceeded.
  - Prefer iteration and modularization over duplication.
  - Use descriptive, semantic variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
  - Use lowercase with dashes for directories and files (e.g., `components/auth-wizard`).
  - Favor named exports for components.
  - Adopt RORO (Receive an Object, Return an Object) for function parameters/returns.
  - Always attain to use DRY (Don't Repeat Yourself) principles.
  - Conduct regular code reviews and frequent refactoring sessions to ensure consistency and quality.
  - Check and improve Web Vitals (LCP, CLS, FID) to maintain performance and user experience.

- **Create 'Build Notes':**

  - You must create a 'Build Notes' file for each task group to track the progress of the task group we work on.
  - **Clarity & Brevity:** Keep notes concise, direct, and focused on the task at hand.
  - **Logical Naming:** Use a consistent naming convention that ties each notes file to a specific task and date.
  - **Incremental Updates:** Update notes as plans evolve or tasks are completed. Append rather than overwrite.
  - **Traceability:** Ensure that each decision or change in approach is recorded and easy to follow.

- **Review 'Project Contexts':**

  - You must review the `projectContext.md` as we need to ensure that the project context is up to date and accurate.
  - **Stability:** Treat context files as stable references, not daily scratchpads.
  - **Selective Updates:** Update context files only when there are significant, approved changes to requirements or project scope.
  - **Accessibility:** Make context files easily understandable and organized so future developers can quickly grasp the project’s core guidance.

- **Stack and Framework Conventions**

  - Target **Next.js 15+** and leverage the App Router, React Server Components (RSC), and SSR capabilities.
  - Use Zustand for state management in client components when necessary.
  - Maintain proper Shadcn UI management using `npx shadcn@latest add` for new components.
  - Follow a mobile-first approach and responsive design patterns.
  - Emphasize server-side logic, minimizing the usage of `use client` and other client-only APIs.
  - Structure project as Progressive Web App (PWA) with offline capabilities, app-like experience, and installability across devices.

- **Monorepo & Tooling**

  - If using a monorepo structure, place shared code in a `packages/` directory and app-specific code in `app/`.
  - Use `Taskfile.yml` commands for development, testing, and deployment tasks.
  - Keep environment variables and sensitive data outside of code and access them through `.env` files or similar configuration.

Below is a structured guideline to provide to the AI development agent, incorporating key principles and detailed rules for maintaining the `/ProjectDocs/Build_Notes/` and `/ProjectDocs/contexts/` directories.

---

### Rules for Build Notes Files

1. **Location & Naming:**

   - Store all notes files in `/ProjectDocs/Build_Notes/`.
   - Use a logical, descriptive naming convention, e.g., `build-title_phase-#_task-group-name.md`.
   - Use the `<build-title>` to describe the build task.
   - Use the `<phase-#>` to apply the Phase # to the build task.
   - Use the `<task-group-name>` to describe the task group name.
   - Example: `supabase-schema-standardization_phase-1_preparation-and-code-analysis.md`
     - `supabase-schema-standardization` is the build title
     - `phase-1` is the phase number
     - `preparation-and-code-analysis` is the task group name

2. **Content Structure:**

   - Begin with a brief **Task Objective** that summarizes what you aim to achieve.
   - Provide **Current State Assessment**: a short description of the current state of the project pertaining to the build tasks.
   - Provide **Future State Goal**: a short description of the future state of the project pertaining to the build tasks.
   - Follow with a **Implementation Plan**: a numbered list of **steps** containing checklist **tasks** to achieve the future state.
   - Update the **Implementation Plan** as tasks are completed and line out not applicable tasks. NEVER DELETE TASKS FROM THE PLAN.
   - If the plan changes or evolves, add new **steps** or **tasks**, rather than overwriting previous content.

3. **When to Update:**

   - **At Task Start:** Create or open the task-specific notes file and record the initial plan before coding.
   - **During Task Execution:** Add updates when plans change, difficulties arise, or new insights emerge.
   - **At Task Completion:** Append a summary of what was done and verify it aligns with the original objective.

4. **Style & Tone:**

   - Keep notes succinct, on-topic, and free of unrelated commentary.
   - Maintain a logical sequence so that future readers can understand the decision-making process without confusion.

5. **Completion of Build Notes:**

   - Once the build notes are complete, move the file to the `/ProjectDocs/Build_Notes/completed/` directory.
   - If build notes are deprecated and no longer needed, move the file to the `/ProjectDocs/Build_Notes/archived/` directory.

---

### Rules for Context Files

1. **Master Project Context (`projectContext.md`):**

   - Located in `/ProjectDocs/contexts/`.
   - Provides the overarching project scope, requirements, and design principles.
   - Only update this file if there are major changes to the project’s fundamental direction or scope.

2. **Additional Context Files:**

   - Supplementary files (e.g., `uiContext.md`, `featureAContext.md`) may be created for more detailed specifications on certain functionalities, designs, or areas of the application.
   - Keep these files stable. Update them only when new, approved changes need to be documented.
   - Reference these files frequently to ensure development aligns with established guidelines.

3. **Change Management:**

   - Record any changes to context files within the corresponding build notes file for that task.
   - Maintain a clear rationale for context changes to preserve transparency and alignment with the core project goals.

---

## Project Structure

Adopt a clear, modular directory structure:
