---
name: "nextjs-vercel-supabase-cursorrules-prompt-file"
clean_name: "Next.js Vercel Supabase"
description: "Cursor rules for Next.js development with Vercel and Supabase integration."
description_tr: "Next.js geliştirmesi için Cursor kuralları, Vercel ve Supabase entegrasyonu ile birlikte."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/nextjs-vercel-supabase-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-vercel-supabase-cursorrules-prompt-file.mdc"
body_length: 7792
file_extension: ".mdc"
body_tr: |-
  # Cursorrules

  ## Intro

  'BA Copilot' adında bir ürün geliştiriyorum; burada BA, Business Analysts (İş Analisti) anlamına gelir. Bazen buna bacp olarak da atıfta bulunurum.

  ## BA Copilot MVP

  ### Overview

  İş analistleri için bir asistandır. MVP, bpmn-js kullanarak BPMN diyagramlarını render eden bir AI chatbot türü araç olacaktır. Kullanıcı daha sonra bunları şu yollarla geliştirebilir:

  - ek tartışmalar
  - diyagramı doğrudan düzenleme (bpmn-js bunu destekler)

  ### UI Description

  BA Copilot MVP'nin, BPMN diyagramlarının oluşturulması ve yinelemesi işlevselliğine odaklanan hiyerarşik, girintili bir madde listesi açıklaması aşağıda verilmiştir:

  BA Copilot Arayüzü

  Soru Giriş Bölümü

  Kullanıcılar iş süreçleriyle ilgili sorular veya istekleri girebilirler. Örnek: "Belge içeriğine dayanarak neyi kaçırdığım?"

  İşlem Bölümü (İsteğe Bağlı)

  Kullanıcıların .png, .vsdx vb. formatlarında BPMN diyagramlarını yüklemesine veya görüntülemesine olanak tanır. Kullanıcılar mevcut diyagramları görselleştirebilir ve düzenleyebilir veya yeni diyagramlar oluşturabilirler. Örnek: "Masraf raporunu kaydet", "Onayla" ve "Reddet" süreçlerinin akışını gösteren bir BPMN diyagramı.

  Belgeler Bölümü (İsteğe Bağlı)

  Kullanıcılar işlem ayrıntılarını içerebilecek PDF'ler gibi ilgili belgeleri yükleyebilirler. Örnek: BPMN diyagramı için bağlam sağlamak üzere "Shelter - çalışan el kitabı.pdf" yüklendi.

  Artifacts Bölümü

  İlgili çıktılar veya referanslar için bir alan sağlar. Örnek: Yüklenen içeriğe dayalı diyagram önerileri.

  Yinelemeli BPMN Diyagram Oluşturma ve Değişiklik

  Giriş Süreci

  Kullanıcılar mevcut süreçlerin değiştirilmesi için sorular veya isteklerde bulunabilirler. Örnek: Belge içeriğine dayalı süreçteki eksik adımlar için isteme.

  AI Tarafından Desteklenen Öneriler

  Sistem, yüklenen belgelerin veya kullanıcı sorgularının içeriğine dayalı olarak BPMN diyagramına eklemeler veya değişiklikler önerir. Örnek: Yüklenen el kitabının belirli bölümlerine atıfta bulunarak masraf politikasını kontrol etme görevi ekleme önerisi.

  Diyagram Düzenleme

  Kullanıcılar alınan önerilere dayalı olarak BPMN diyagramını etkileşimli olarak düzenleyebilirler. Örnek: "Masraf raporunu kontrol et" görevini "Masraf raporu" ve "Kontrol edilen masraf raporu" gibi giriş ve çıkışlarla ekleme.

  Dokümantasyon ve Referanslar

  Sistem yüklenen belgelere atıfta bulunur ve ilgili bölümleri vurgular. Örnek: Çalışan el kitabından "Bölüm 7. Şirket adına yapılan ödemeler için geri ödeme talep etme" bölümüne atıfta bulunma.

  Kullanıcı İş Akışı

  Bir Soruyla Başlayın

  Kullanıcı bir soru sorarak veya istekte bulunarak süreci başlatır.

  İşlem Diyagramlarını ve Belgeleri Yükleyin

  Kullanıcı bağlam sağlamak için mevcut diyagramları ve belgeleri yükler.

  AI Tarafından Oluşturulan Önerileri Alın

  Sistem işlem akışını geliştirmek veya düzeltmek için öneriler sağlar.

  BPMN Diyagramını Değiştirin

  Kullanıcı alınan önerilere dayalı olarak BPMN diyagramını düzenler.

  İstenilen Sonuca Kadar Yineleyin

  Kullanıcı, istenen sonuca ulaşıncaya kadar takip soruları sormuş ve diyagramı değiştirmeye devam eder.

  Bu BA Copilot MVP, kullanıcıların yüklenen belgeleri ve kullanıcı sorgularından yararlanarak, bağlamsal önerilerle BPMN diyagramlarını verimli bir şekilde oluşturmasına, değiştirmesine ve yinelemesine olanak tanır.

  ## BA Copilot Vision

  ### Overview

  Bunun vizyonu, iş analistlerinin işleriyle ilgili yardım almak için gideceği ev olmasıdır. Ürünün değerini artırmak için ağ etkilerini koruyacaktır, örneğin BA ajansları toolkit bölümünde ürünlerini yayınlayıp topluluk bölümünde BA konuları üzerine tartışmalar yapılacaktır. Ayrıca BA görevleri için gittikçe iyileşen bir model (örn. BPMN oluşturma) aracılığıyla kendini koruyacaktır. Ancak hiçbir zaman kullanıcı verilerine dayalı olarak eğitilmeyecektir. Dropbox tarzı "bir arkadaşı davet et ve ikiniz de 100 AI kredisi alın" aracılığıyla viral şekilde büyüyecektir. Gelir, şirketlerin BA'ları için bunu ödeyerek elde edilecektir. Gelir aynı zamanda şirketlerin iş panosu üzerinde listelenme için ödeme yapmalarıyla da gelecektir.

  ### UI Description

  Business Analyst (BA) Copilot'un bu arayüzü, iş analizi ile ilgili çeşitli görevleri kolaylaştıracak şekilde tasarlanmıştır. İşte özelliklerinin bir açıklaması:

  Başlık Bölümü

  Üst gezinti çubuğu "BA Copilot" uygulama adını görüntüler ve prototip paylaşmak ve kullanıcı ayarlarına erişmek gibi seçenekler sunar.

  Sol Kenar Çubuğu Gezintisi

  Ana sayfa: BA Copilot'un ana panosu veya açılış sayfası. Asistan: Muhtemelen kişiselleştirilmiş yardım veya rehberli yardım için ayrılmış bir bölüm. Kasa: Önemli belgelerin veya kaynakların depolandığı bir alan. Kütüphane: Kaynaklar, şablonlar veya referans materyalleri koleksiyonu. Geçmiş: Geçmiş etkileşimler, görevler veya kaydedilen işlere erişim. Araç Seti: Çeşitli BA aktivitelerini destekleyen araçlar veya yardımcı programlar. Topluluk: Diğer kullanıcılarla etkileşim kurma, en iyi uygulamaları tartışma veya bilgi paylaşma bölümü. İş Panosu: İş ile ilgili kaynakların bulunduğu, muhtemelen açılışları veya kariyer fırsatlarını listeleyen bir alan. Ayarlar: Alt kısımda yer alan kullanıcıya özel ayarlar, BA Copilot deneyiminin kişiselleştirilmesine olanak tanır. Kullanıcı Bilgileri: Alt kısımda, kullanıcının e-postası (örn. alex@tesla.com) ve verilerin güvenli olduğunu gösteren bir güvenlik notu görüntülenir.

  Ana İçerik Alanı

  Merkezi Etkileşim Kutusu

  "Herhangi bir şey sorun..." etiketli belirgin bir metin kutusu, kullanıcıları sorular, istekler veya komutlar girmeye davet eder. Bu, BA Copilot ile etkileşim kurmanın birincil arayüzüdür.

  Hızlı İşlem Düğmeleri

  Etkileşim kutusunun altında, birkaç düğme yaygın BA görevlerine kısayollar sunar: Gereksinimlerden akış şeması oluştur: Gereksinimler listesine dayalı olarak bir işlem akış şeması oluşturur. Akış şemasından gereksinimler oluştur: Mevcut bir akış şemasından gereksinimleri çıkarır ve belgeler. Notlardan dokümantasyon oluştur: Toplantı notlarını veya diğer gayri resmi belgeleri resmi belgelere dönüştürür. Dokümantasyondan testler oluştur: Mevcut dokümantasyona dayalı olarak test senaryoları veya komut dosyaları geliştirir. Bana kariyer tavsiyesi verin: Kişiselleştirilmiş kariyer rehberliği veya kaynaklar sağlar. Araç Seti Öner: Kullanıcının mevcut görevleri veya projeleriyle ilgili araçlar veya yazılımları önerir.

  Genel Düzen

  Arayüz temiz, minimalist ve kullanıcı dostu olup işlevselliğe ve kullanım kolaylığına net vurgu yapılmıştır. Kullanıcıları tipik BA görevlerinden sorunsuzca yönlendirirken araçlar ve kaynaklara kolay erişim sağlayacak şekilde tasarlanmıştır. Bu arayüz, iş analistlerinin günlük görevlerini daha verimli ve organize hale getirmek için onlara yardımcı olmak amacıyla tasarlanmış kapsamlı yine de akıcı bir araç vizyonunu somutlaştırır.

  ## Technical

  ### Overview

  Yığının aşağıdaki öğeleri, bunları kullanacağımdan emin olduğum öğelerdir:

  - Next.js using App router, not Pages router always check that you have not made a recommendation that is for Pages router always check that your recommendation is appropriate for App router
  - Vercel AI
  - Supabase - db, including their type safety
  - Supabase - auth
  - Tanstack query
  - Material UI
  - Potentially Orval for API calls (typing, tanstack query, and mock service worker testing)
  - Quokka

  React'te ara düzey deneyime sahibim. Ancak Next.js'de yeniyim. Bu nedenle Next.js ile bir şey uygularken, bunu bilmiyormuşum gibi bana öğretin. Sonra daha fazla açıklamayı teklif edin. Yığının yukarıdaki öğelerini değiştirmeliyim olduğunu düşünüyorsam, bana her zaman söyleyin. Yığında eksik olan öğeler için öneriler yapın ve artı ve eksileri açıklayın, ardından bir tavsiye yapın. Uygulama klasörüm src/app. App/ oluşturmayın Oluşturmak app/ şeyleri kıracaktır

  ### Devias Template

  Bu çalışma alanı şunları içerir:

  - içinde geliştirdiğim depo (ba-copilot-main, veya ba-copilot)
  - inşa ettiğim depo: nextjs-template-typescript

  nextjs-template-typescript, Devias Kit Pro tarafından yapılmış bir şablondur; burada Devias. Bunlardan öğeleri kendi depoma getirecektim. Bundan haberdar olun ve bunları depolarından getirmeyi önermek ve kodlama stillerini ve yapılarını takip etmeyi düşünün.
---

# Cursorrules

## Intro

I am building 'BA Copilot', where BA stands for Business Analysts. I will sometimes refer to it as bacp.

## BA Copilot MVP

### Overview

It is an assistant for business analysts. The MVP will be a an ai chatbot type tool, which will render BPMN diagrams using bpmn-js. The user can then iterate on them either with:

- additional discussion
- editing the diagram directly (bpmn-js supports this)

### UI Description

Here is a hierarchical, indented bullet description of the BA Copilot MVP, focusing on its functionality for creating and iterating on BPMN diagrams:

BA Copilot Interface

Question Input Section

Users can input questions or requests related to business processes. Example: "Based on the doc content what have I missed?"

Process Section (Optional)

Allows users to upload or view BPMN diagrams in formats like .png, .vsdx, etc. Users can visualize and edit existing diagrams or create new ones. Example: A BPMN diagram showing a flow of "Register expense report", "Approve", and "Deny" processes.

Documents Section (Optional)

Users can upload relevant documents, such as PDFs, that might contain process details. Example: "Shelter - employee handbook.pdf" uploaded to provide context for the BPMN diagram.

Artifacts Section

Provides a space for related outputs or references to be displayed. Example: Diagram suggestions based on uploaded content.

Iterative BPMN Diagram Creation and Modification

Input Process

Users can pose questions or requests for modifications to existing processes. Example: Asking for missing steps in the process based on document content.

AI-Powered Suggestions

The system suggests additions or modifications to the BPMN diagram based on the content of uploaded documents or user queries. Example: Suggestion to add a task for checking the expense policy, citing specific sections from the uploaded handbook.

Diagram Editing

Users can interactively edit the BPMN diagram based on suggestions. Example: Adding a task "Check expense policy" with inputs and outputs like "Expense report" and "Checked expense report".

Documentation and References

The system references uploaded documents and highlights relevant sections. Example: Citing "Section 7. Claiming reimbursement for payments made on behalf of the company" from the employee handbook.

User Workflow

Start with a Question

User initiates the process by asking a question or making a request.

Upload Process Diagrams and Documents

User uploads existing diagrams and documents for context.

Receive AI-Generated Suggestions

System provides suggestions to enhance or correct the process flow.

Modify BPMN Diagram

User edits the BPMN diagram based on the received suggestions.

Iterate Until Satisfied

User continues to ask follow-up questions and modify the diagram until the desired outcome is achieved.

This BA Copilot MVP allows users to efficiently create, modify, and iterate on BPMN diagrams with contextual suggestions, leveraging uploaded documents and user queries.

## BA Copilot Vision

### Overview

The vision for this is that it will be the home for business analysts to get assistance relating to their jobs. It will protect itself network effects to increase the value of the product e.g. BA agencies posting their products in the toolkit section, and members discussing BA topics in community section. It will also protect itself via an ever improving model for BA tasks e.g. BPMN generation. Although it will never be trained on user data. It will grow via virality via a dropbox style 'refer a friend and you both get 100 AI credits'. Revenue will be via companies paying for it for their BAs. Revenue will also be via companies paying to list on the job board.

### UI Description

This UI for the Business Analyst (BA) Copilot is designed to facilitate various tasks related to business analysis. Here's a description of its features:

Header Section

The top navigation bar displays the application name "BA Copilot" and provides options like sharing the prototype and accessing user settings.

Left Sidebar Navigation

Home: The main dashboard or landing page of the BA Copilot. Assistant: A section likely dedicated to personalized assistance or guided help. Vault: A storage area for important documents or resources. Library: A collection of resources, templates, or reference materials. History: Access to past interactions, tasks, or saved work. Toolkit: Tools or utilities that support various BA activities. Community: A section for engaging with other users, discussing best practices, or sharing knowledge. Job Board: An area for job-related resources, possibly listing openings or career opportunities. Settings: User-specific settings, located at the bottom, allowing for customization of the BA Copilot experience. User Information: At the bottom, the user's email is displayed (e.g., alex@tesla.com), along with a security note indicating data is secure.

Main Content Area

Central Interaction Box

A prominent text box labeled "Ask anything..." invites users to enter questions, requests, or commands. This is the primary interface for interacting with the BA Copilot.

Quick Action Buttons

Below the interaction box, several buttons offer shortcuts to common BA tasks: Create flowchart from requirements: Generates a process flowchart based on a list of requirements. Create requirements from flowchart: Extracts and documents requirements from an existing flowchart. Create documentation from notes: Converts meeting notes or other informal documentation into formal documents. Create tests from documentation: Develops test cases or scripts based on existing documentation. Give me career advice: Provides personalized career guidance or resources. Recommend a toolkit: Suggests tools or software relevant to the user's current tasks or projects.

Overall Layout

The interface is clean, minimalist, and user-friendly, with a clear emphasis on functionality and ease of use. It is designed to guide users smoothly through typical BA tasks while providing easy access to tools and resources. This UI embodies the vision of a comprehensive yet streamlined tool tailored to assist business analysts in their day-to-day tasks, making their work more efficient and organized.

## Technical

### Overview

The following elements of the stack are ones I'm confident I'll build with:

- Next.js using App router, not Pages router always check that you have not made a recommendation that is for Pages router always check that your recommendation is appropriate for App router
- Vercel AI
- Supabase - db, including their type safety
- Supabase - auth
- Tanstack query
- Material UI
- Potentially Orval for API calls (typing, tanstack query, and mock service worker testing)
- Quokka

I have intermediate experience with React. However, I am new to Next.js. So whenever implementing something with Next.js, teach me as if I don't know about it. Then offer to explain more. If you feel I should replace elements of my stack above, always tell me. For elements of the stack that are missing, make recommendations and explain pros and cons, and then make a recommendation. My app folder is src/app Never create app/Creating app/ will break things

### Devias Template

This workspace contains:

- the repo that I'm building in (ba-copilot-main, or ba-copilot)
- a repo that I'm building from: nextjs-template-typescript

nextjs-template-typescript is a template made my Devias Kit Pro herein Devias. I will bring elements in from their repo to mine. So be aware of that, and consider recommending bringing elements in from there as well, and following their coding style and structure.
