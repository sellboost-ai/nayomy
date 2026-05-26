---
name: "nextjs-supabase-shadcn-pwa-cursorrules-prompt-file"
clean_name: "Next.js Supabase Shadcn PWA"
description: "Cursor rules for Nextjs Supabase Shadcn Pwa."
description_tr: "Nextjs Supabase Shadcn PWA için Cursor kuralları."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/nextjs-supabase-shadcn-pwa-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-supabase-shadcn-pwa-cursorrules-prompt-file.mdc"
body_length: 6569
file_extension: ".mdc"
body_tr: |-
  ## Temel İlkeler

  - **Kod Kalitesi & Stili**

    - Kısa, sürdürülebilir ve güçlü şekilde yazılmış kod yazın ve doğru TypeScript uygulamaları gerçekleştirin.
    - Fonksiyonel, bildirimsel programlamayı benimseyin. OOP ve sınıflardan kaçının.
    - Dosyaları maksimum 150 satırla sınırlayın; aşılırsa daha küçük modüllere yeniden düzenleyin.
    - Kodun tekrar kullanılmasını tercih edin, kopyalamaktan kaçının.
    - Tanımlayıcı, anlamsal değişken adları kullanın ve yardımcı fiillerle adlandırın (ör. `isLoading`, `hasError`).
    - Dizinler ve dosyalar için küçük harf ve tire kullanın (ör. `components/auth-wizard`).
    - Bileşenler için adlandırılmış export'ları tercih edin.
    - Fonksiyon parametreleri/dönüşleri için RORO (Nesne Al, Nesne Döndür) benimseyin.
    - Her zaman DRY (Don't Repeat Yourself) ilkelerine uyun.
    - Tutarlılık ve kalite sağlamak için düzenli kod incelemeleri ve sık refactoring oturumları gerçekleştirin.
    - Web Vitals'ı (LCP, CLS, FID) kontrol edin ve iyileştirin; performans ve kullanıcı deneyimini koruyun.

  - **'Build Notes' (Yapı Notları) Oluşturun:**

    - Üzerinde çalıştığınız her görev grubu için bir 'Build Notes' dosyası oluşturmalısınız; görev grubunun ilerlemesini izlemek için.
    - **Netlik & Kısalık:** Notları özlü, doğrudan ve konuya odaklı tutun.
    - **Mantıksal Adlandırma:** Her notes dosyasını belirli bir görev ve tarihle bağlayan tutarlı bir adlandırma kuralı kullanın.
    - **Kademeli Güncellemeler:** Planlar değiştikçe veya görevler tamamlandıkça notları güncelleyin. Üzerine yazma yerine ekleyin.
    - **İzlenebilirlik:** Her karar veya yaklaşım değişikliğini kaydedin ve izlenmesi kolay olmasını sağlayın.

  - **'Project Contexts' (Proje Bağlamları) İnceleyin:**

    - Proje bağlamının güncel ve doğru olmasını sağlamak için `projectContext.md` dosyasını incelemelisiniz.
    - **Kararlılık:** Bağlam dosyalarını günlük çalışma tahtası değil, sabit referanslar olarak işleyin.
    - **Seçici Güncellemeler:** Bağlam dosyalarını yalnızca gereksinimler veya proje kapsamında önemli, onaylanmış değişiklikler olduğunda güncelleyin.
    - **Erişilebilirlik:** Bağlam dosyalarını kolayca anlaşılabilir ve düzenli tutun; gelecek geliştiriciler projenin temel kılavuzunu hızlıca kavrasınlar.

  - **Stack ve Framework Kuralları**

    - **Next.js 15+** hedefleyin ve App Router, React Server Components (RSC) ve SSR yeteneklerinden yararlanın.
    - Gerektiğinde istemci bileşenlerinde durum yönetimi için Zustand kullanın.
    - `npx shadcn@latest add` komutunu kullanarak uygun Shadcn UI yönetimini sağlayın.
    - Mobil-ilk yaklaşımı ve responsive tasarım desenlerini izleyin.
    - Sunucu tarafı mantığını vurgulayın; `use client` ve diğer istemci-yalnızca API'lerinin kullanımını minimize edin.
    - Projeyi Progressive Web App (PWA) olarak yapılandırın; çevrimdışı yetenekler, uygulamaya benzer deneyim ve cihazlarda kurulabilirlik ile.

  - **Monorepo & Araçlar**

    - Monorepo yapısı kullanılırsa, paylaşılan kodu `packages/` dizinine ve uygulamaya özel kodu `app/` dizinine yerleştirin.
    - Geliştirme, test etme ve dağıtım görevleri için `Taskfile.yml` komutlarını kullanın.
    - Ortam değişkenlerini ve hassas verileri kodun dışında tutun; `.env` dosyaları veya benzer konfigürasyonlar üzerinden erişin.

  Aşağıda, anahtar ilkeleri ve `/ProjectDocs/Build_Notes/` ile `/ProjectDocs/contexts/` dizinlerinin bakımını sağlamak için ayrıntılı kuralları içeren yapılandırılmış bir kılavuz bulunmaktadır.

  ---

  ### Build Notes Dosyaları için Kurallar

  1. **Konum & Adlandırma:**

     - Tüm notes dosyalarını `/ProjectDocs/Build_Notes/` içine depolayın.
     - Mantıksal, tanımlayıcı bir adlandırma kuralı kullanın, ör. `build-title_phase-#_task-group-name.md`.
     - Yapı görevini açıklamak için `<build-title>` kullanın.
     - Yapı görevine Phase # uygulamak için `<phase-#>` kullanın.
     - Görev grubu adını açıklamak için `<task-group-name>` kullanın.
     - Örnek: `supabase-schema-standardization_phase-1_preparation-and-code-analysis.md`
       - `supabase-schema-standardization` yapı başlığıdır
       - `phase-1` faz numarasıdır
       - `preparation-and-code-analysis` görev grubu adıdır

  2. **İçerik Yapısı:**

     - Başında, hedeflediğiniz şeyi özetleyen kısa bir **Görev Amacı** (Task Objective) ile başlayın.
     - **Mevcut Durum Değerlendirmesi** sağlayın: yapı görevleriyle ilgili projenin mevcut durumunun kısa açıklaması.
     - **Gelecek Durum Hedefi** sağlayın: yapı görevleriyle ilgili projenin gelecek durumunun kısa açıklaması.
     - Ardından **Uygulama Planı** (Implementation Plan) ekleyin: gelecek duruma ulaşmak için kontrol listesi **görevlerini** içeren numaralandırılmış **adımlar**.
     - Görevler tamamlandıkça ve geçerli olmayan görevler çizilince **Uygulama Planı**'nı güncelleyin. ASLA PLANDAKI GÖREVLERİ SİLMEYİN.
     - Plan değişirse veya evrimleşirse, önceki içeriğin üzerine yazma yerine yeni **adımlar** veya **görevler** ekleyin.

  3. **Ne Zaman Güncelleyin:**

     - **Görev Başlangıcında:** Görev özel notes dosyasını oluşturun veya açın ve kodlamadan önce ilk planı kaydedin.
     - **Görev Yürütülürken:** Planlar değiştiğinde, zorluklar ortaya çıktığında veya yeni bulgular ortaya çıktığında güncellemeleri ekleyin.
     - **Görev Tamamlanında:** Yapılan işlerin bir özetini ekleyin ve orijinal amaçla uyumlu olduğunu doğrulayın.

  4. **Stil & Ton:**

     - Notları özlü, konuya uygun ve ilgisiz açıklamalardan uzak tutun.
     - Gelecek okuyucuların karar alma sürecini kafa karışıklığı olmadan anlayabilmeleri için mantıksal bir sıra koruyun.

  5. **Build Notes'un Tamamlanması:**

     - Build notes tamamlandığında, dosyayı `/ProjectDocs/Build_Notes/completed/` dizinine taşıyın.
     - Build notes kullanımdan kaldırılmış ve artık gerekli değilse, dosyayı `/ProjectDocs/Build_Notes/archived/` dizinine taşıyın.

  ---

  ### Context Dosyaları için Kurallar

  1. **Ana Proje Bağlamı (`projectContext.md`):**

     - `/ProjectDocs/contexts/` içinde bulunur.
     - Genel proje kapsamı, gereksinimler ve tasarım ilkelerini sağlar.
     - Bu dosyayı yalnızca projenin temel yönü veya kapsamında büyük değişiklikler olduğunda güncelleyin.

  2. **Ek Context Dosyaları:**

     - Ek dosyalar (ör. `uiContext.md`, `featureAContext.md`) belirli işlevler, tasarımlar veya uygulamanın alanları hakkında daha ayrıntılı özellikler için oluşturulabilir.
     - Bu dosyaları sabit tutun. Yalnızca yeni, onaylanmış değişikliklerin belgelendirilmesi gerektiğinde güncelleyin.
     - Geliştirmenin oluşturulan kılavuzlarla uyumlu olmasını sağlamak için bu dosyaları sık sık referans alın.

  3. **Değişim Yönetimi:**

     - Context dosyalarındaki tüm değişiklikleri o görevin ilgili build notes dosyası içinde kaydedin.
     - Context değişiklikleri için şeffaflığı ve temel proje hedefleriyle uyumluluğu korumak amacıyla açık bir gerekçe sağlayın.

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
