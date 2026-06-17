---
name: "nextjs-supabase-shadcn-pwa-cursorrules-prompt-file"
clean_name: "Next.js Supabase Shadcn PWA"
description: "Cursor rules for Nextjs Supabase Shadcn Pwa."
description_tr: "Nextjs Supabase Shadcn Pwa için Cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/nextjs-supabase-shadcn-pwa-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-supabase-shadcn-pwa-cursorrules-prompt-file.mdc"
body_length: 6569
file_extension: ".mdc"
body_tr: |-
  ## Temel İlkeler

  - **Kod Kalitesi & Stili**

    - Kısa, bakımlanabilir ve güçlü şekilde yazılmış kod yazın; doğru TypeScript uygulamalarını gerçekleştirin.
    - Fonksiyonel, deklaratif programlamayı benimseyin. OOP ve sınıflardan kaçının.
    - Dosyaları maksimum 150 satırla sınırlayın; aşılırsa daha küçük modüllere yeniden düzenleyin.
    - Tekrar etmeyi modülarizasyondan daha az tercih edin.
    - Yardımcı fiillerle açıklayıcı, anlamsal değişken adları kullanın (örneğin, `isLoading`, `hasError`).
    - Dizinler ve dosyalar için küçük harfle tire kullanın (örneğin, `components/auth-wizard`).
    - Bileşenler için adlandırılmış exportları tercih edin.
    - Fonksiyon parametreleri/geri dönüşleri için RORO (Receive an Object, Return an Object) benimseyin.
    - Her zaman DRY (Don't Repeat Yourself) ilkelerine uyun.
    - Tutarlılık ve kaliteyi sağlamak için düzenli kod incelemesi ve sık yeniden düzenleme oturumları yapın.
    - Web Vitals'ı (LCP, CLS, FID) kontrol edin ve geliştirin; performans ve kullanıcı deneyimini koruyun.

  - **'Build Notes' Oluşturun:**

    - Her görev grubu için çalıştığınız görev grubunun ilerlemesini izlemek üzere bir 'Build Notes' dosyası oluşturmalısınız.
    - **Açıklık & Kısalık:** Notları kısa, doğrudan ve görev odaklı tutun.
    - **Mantıksal Adlandırma:** Her notlar dosyasını belirli bir görev ve tarihle bağlayan tutarlı bir adlandırma kuralı kullanın.
    - **Artırımsal Güncellemeler:** Planlar geliştikçe veya görevler tamamlandıkça notları güncelleyin. Üzerine yazmak yerine ekleyin.
    - **İzlenebilirlik:** Her karar veya yaklaşım değişikliğinin kaydedilmesini ve takip edilmesini sağlayın.

  - **'Project Contexts' İnceleyin:**

    - Proje bağlamının güncel ve doğru olduğundan emin olmak için `projectContext.md` dosyasını incelemelisiniz.
    - **Stabilite:** Bağlam dosyalarını günlük karalamalar değil, kararlı referanslar olarak kullanın.
    - **Seçici Güncellemeler:** Bağlam dosyalarını yalnızca gereksinimler veya proje kapsamında önemli, onaylanmış değişiklikler olduğunda güncelleyin.
    - **Erişilebilirlik:** Bağlam dosyalarını kolayca anlaşılır ve organize hale getirin; gelecek geliştiriciler projenin temel rehberliğini hızlıca kavrayabilsin.

  - **Stack ve Framework Kuralları**

    - **Next.js 15+** hedefleyin ve App Router, React Server Components (RSC) ve SSR yeteneklerinden yararlanın.
    - Gerektiğinde istemci bileşenlerinde durum yönetimi için Zustand kullanın.
    - `npx shadcn@latest add` kullanarak yeni bileşenler için uygun Shadcn UI yönetimini sürdürün.
    - Mobil-ilk yaklaşımını ve duyarlı tasarım desenlerini izleyin.
    - Sunucu tarafı mantığını vurgulayın; `use client` ve diğer yalnızca istemci API'lerinin kullanımını en aza indirin.
    - Projeyi Progressive Web App (PWA) olarak yapılandırın; çevrimdışı özellikler, uygulama benzeri deneyim ve cihazlar arasında yüklenebilirlik ekleyin.

  - **Monorepo & Araçlar**

    - Monorepo yapısı kullanıyorsanız, paylaşılan kodu bir `packages/` dizinine ve uygulamaya özgü kodu `app/` dizinine yerleştirin.
    - Geliştirme, test ve dağıtım görevleri için `Taskfile.yml` komutlarını kullanın.
    - Ortam değişkenlerini ve hassas verileri kod dışında tutun; `.env` dosyaları veya benzeri konfigürasyon aracılığıyla erişin.

  AI geliştirme ajanına sağlanacak yapılandırılmış rehber aşağıda verilmiştir; `/ProjectDocs/Build_Notes/` ve `/ProjectDocs/contexts/` dizinlerini korumak için temel ilkeler ve detaylı kuralları içerir.

  ---

  ### Build Notes Dosyaları için Kurallar

  1. **Konum & Adlandırma:**

     - Tüm notlar dosyalarını `/ProjectDocs/Build_Notes/` dizinine saklayın.
     - Mantıksal, açıklayıcı bir adlandırma kuralı kullanın; örneğin, `build-title_phase-#_task-group-name.md`.
     - Yapı görevini açıklamak için `<build-title>` kullanın.
     - Yapı görevine Phase # uygulamak için `<phase-#>` kullanın.
     - Görev grubu adını açıklamak için `<task-group-name>` kullanın.
     - Örnek: `supabase-schema-standardization_phase-1_preparation-and-code-analysis.md`
       - `supabase-schema-standardization` yapı başlığıdır
       - `phase-1` faz numarasıdır
       - `preparation-and-code-analysis` görev grubu adıdır

  2. **İçerik Yapısı:**

     - Nelere ulaşmak istediğinizi özetleyen kısa bir **Task Objective** (Görev Hedefi) ile başlayın.
     - **Current State Assessment** (Mevcut Durum Değerlendirmesi) sağlayın: yapı görevlerine ilişkin projenin mevcut durumunun kısa açıklaması.
     - **Future State Goal** (Gelecek Durum Hedefi) sağlayın: yapı görevlerine ilişkin projenin gelecek durumunun kısa açıklaması.
     - Bunu **Implementation Plan** (Uygulama Planı) ile takip edin: gelecek duruma ulaşmak için kontrol listesi **görevleri** içeren **adımların** numaralandırılmış listesi.
     - Görevler tamamlandıkça **Implementation Plan** (Uygulama Planı) güncelleyin ve uygulanamayan görevleri çizin. PLANDAN ASLA GÖREVLERİ SİLMEYİN.
     - Plan değişirse veya gelişirse, önceki içeriğin üzerine yazmak yerine yeni **adımlar** veya **görevler** ekleyin.

  3. **Güncellenme Zamanı:**

     - **Görev Başlatılırken:** Görev özel notlar dosyasını oluşturun veya açın ve kodlamadan önce ilk planı kaydedin.
     - **Görev Yürütülürken:** Planlar değiştiğinde, zorluklar ortaya çıktığında veya yeni içgörüler elde edildiğinde güncellemeler ekleyin.
     - **Görev Tamamlanırken:** Yapılanların bir özetini ekleyin ve orijinal hedefle uyumlu olduğunu doğrulayın.

  4. **Stil & Ton:**

     - Notları kısa, konuya uygun ve ilgisiz yorumlardan arındırılmış tutun.
     - Mantıksal bir sıra koruun; gelecek okuyucular kararma alma sürecini karışıklık olmadan anlayabilsin.

  5. **Build Notes Tamamlanması:**

     - Build notları tamamlandıktan sonra dosyayı `/ProjectDocs/Build_Notes/completed/` dizinine taşıyın.
     - Build notları kullanımdan kaldırılmışsa ve artık gerekli değilse, dosyayı `/ProjectDocs/Build_Notes/archived/` dizinine taşıyın.

  ---

  ### Context Dosyaları için Kurallar

  1. **Master Project Context (`projectContext.md`):**

     - `/ProjectDocs/contexts/` dizininde yer alır.
     - Kapsamlı proje kapsamını, gereksinimlerini ve tasarım ilkelerini sağlar.
     - Bu dosyayı yalnızca projenin temel yönü veya kapsamında önemli değişiklikler olduğunda güncelleyin.

  2. **Ek Context Dosyaları:**

     - Ek dosyalar (örneğin, `uiContext.md`, `featureAContext.md`) belirli işlevsellikler, tasarımlar veya uygulamanın alanları hakkında daha detaylı özellikler için oluşturulabilir.
     - Bu dosyaları kararlı tutun. Bunları yalnızca belgelendirilmesi gereken yeni, onaylanmış değişiklikler olduğunda güncelleyin.
     - Geliştirmenin oluşturulan yönergelerle uyumlu olduğundan emin olmak için bu dosyalara sık sık başvurun.

  3. **Değişiklik Yönetimi:**

     - Bu görev için karşılık gelen yapı notları dosyasında bağlam dosyalarında yapılan değişiklikleri kaydedin.
     - Şeffaflığı ve temel proje hedefleriyle uyumluluğu korumak için bağlam değişikliklerinin açık bir gerekçesini tutun.

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
