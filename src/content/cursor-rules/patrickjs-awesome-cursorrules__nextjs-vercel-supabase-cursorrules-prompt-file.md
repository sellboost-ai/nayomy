---
name: "nextjs-vercel-supabase-cursorrules-prompt-file"
clean_name: "Next.js Vercel Supabase"
description: "Cursor rules for Next.js development with Vercel and Supabase integration."
description_tr: "Next.js geliştirmesi için Cursor kuralları, Vercel ve Supabase entegrasyonu ile birlikte."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/nextjs-vercel-supabase-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-vercel-supabase-cursorrules-prompt-file.mdc"
body_length: 7792
file_extension: ".mdc"
body_tr: |-
  # Cursorrules

  ## Intro

  'BA Copilot' adında bir uygulama geliştiriyorum; BA, Business Analysts anlamına geliyor. Bazen buna bacp olarak da referans veririm.

  ## BA Copilot MVP

  ### Genel Bakış

  İş analisti yardımcısı bir araçtır. MVP, bpmn-js kullanarak BPMN diyagramlarını render edecek bir AI chatbot türü araç olacaktır. Kullanıcı daha sonra bunları aşağıdakilerin herhangi biriyle üzerinde yineleme yapabilir:

  - ek tartışma
  - diyagramı doğrudan düzenleme (bpmn-js bunu destekler)

  ### UI Açıklaması

  BPMN diyagramları oluşturma ve üzerinde yineleme yapma işlevselliğine odaklanan BA Copilot MVP'nin hiyerarşik, girintili madde işareti açıklaması:

  BA Copilot Arayüzü

  Soru Giriş Bölümü

  Kullanıcılar iş süreçleriyle ilgili soruları veya istekleri girebilir. Örnek: "Doküman içeriğine göre neyi kaçırdım?"

  İşlem Bölümü (İsteğe Bağlı)

  Kullanıcıların BPMN diyagramlarını .png, .vsdx vb. formatlar halinde yüklemesine veya görmesine izin verir. Kullanıcılar mevcut diyagramları görselleştirebilir ve düzenleyebilir veya yenilerini oluşturabilir. Örnek: "Gider raporu kaydet", "Onayla" ve "Reddet" süreçlerinin akışını gösteren BPMN diyagramı.

  Dokümanlar Bölümü (İsteğe Bağlı)

  Kullanıcılar, BPMN diyagramı için bağlam sağlayabilecek PDF'ler gibi ilgili belgeleri yükleyebilir. Örnek: BPMN diyagramı için bağlam sağlamak amacıyla "Shelter - çalışan el kitabı.pdf" yüklenmesi.

  Eserler Bölümü

  İlgili çıktılar veya referanslar için görüntülenecek alan sağlar. Örnek: Yüklenen içeriğe dayalı diyagram önerileri.

  Yinelemeli BPMN Diyagram Oluşturma ve Değiştirme

  Giriş Süreci

  Kullanıcılar, mevcut süreçlere yönelik değişiklikler için sorular veya istekler ortaya koyabilir. Örnek: Doküman içeriğine göre işlemde eksik adımlar isteme.

  Yapay Zeka Tarafından Desteklenen Öneriler

  Sistem, yüklenen belgelerin içeriği veya kullanıcı sorgularına dayalı olarak BPMN diyagramına eklemeler veya değişiklikler önerir. Örnek: Yüklenen el kitabının belirli bölümlerine atıfta bulunarak gider politikasını kontrol etmek için bir görev ekleme önerisi.

  Diyagram Düzenleme

  Kullanıcılar, alınan önerilere dayalı olarak BPMN diyagramını etkileşimli olarak düzenleyebilir. Örnek: "Gider politikasını kontrol et" görevini "Gider raporu" ve "Kontrol edilen gider raporu" gibi girdiler ve çıktılarla ekleme.

  Belgelendirme ve Referanslar

  Sistem, yüklenen belgelere başvurur ve ilgili bölümleri vurgular. Örnek: Çalışan el kitabından "Bölüm 7. Şirket adına yapılan ödemeler için geri ödeme talebinde bulunma" bölümüne atıfta bulunma.

  Kullanıcı İş Akışı

  Bir Soruyla Başlayın

  Kullanıcı, bir soru soracak veya talep edecek şekilde süreci başlatır.

  İşlem Diyagramlarını ve Belgeleri Yükleyin

  Kullanıcı, bağlam için mevcut diyagramları ve belgeleri yükler.

  Yapay Zeka Tarafından Oluşturulan Önerileri Alın

  Sistem, işlem akışını geliştirmek veya düzeltmek için öneriler sağlar.

  BPMN Diyagramını Değiştirin

  Kullanıcı, alınan önerilere dayalı olarak BPMN diyagramını düzenler.

  Memnun Olana Kadar Yineleyin

  Kullanıcı, istenen sonuç elde edilene kadar takip soruları soracak ve diyagramı değiştirmeye devam eder.

  Bu BA Copilot MVP, kullanıcıların yüklenen belgeleri ve kullanıcı sorgularından yararlanarak, bağlamsal önerilerle BPMN diyagramlarını verimli bir şekilde oluşturmasına, değiştirmesine ve üzerinde yineleme yapmasına olanak sağlar.

  ## BA Copilot Vizyonu

  ### Genel Bakış

  Bunun vizyonu, işletme analistlerinin işleriyle ilgili yardım almak için bir merkez olmasıdır. Ürünün değerini artırmak için ağ etkileri tarafından korunacaktır; örneğin BA ajansları ürünlerini toolkit bölümünde yayınlar ve üyeler community bölümünde BA konularını tartışırlar. Ayrıca, BA görevleri için giderek gelişen bir modelle kendisini koruyacaktır; örneğin BPMN oluşturma. Ancak hiçbir zaman kullanıcı verileri üzerinde eğitilmeyecektir. Dropbox tarzı "bir arkadaşınızı çağırın ve ikiniz de 100 AI kredisi alın" yoluyla viralitenin yayılmasıyla büyüyecektir. Gelir, şirketlerin bunu BAs için ödediği için gelecektir. Gelir ayrıca şirketlerin iş panosunda listelenmek için ödediği şeyden de gelecektir.

  ### UI Açıklaması

  Business Analyst (BA) Copilot için bu arayüz, iş analiziyle ilgili çeşitli görevleri kolaylaştırmak için tasarlanmıştır. Özellikleri şunlardır:

  Başlık Bölümü

  Üst gezinme çubuğu, "BA Copilot" uygulama adını gösterir ve prototip paylaşımı ve kullanıcı ayarlarına erişim gibi seçenekler sunar.

  Sol Kenar Çubuğu Navigasyonu

  Home: BA Copilot'un ana panosu veya açılış sayfası. Assistant: Muhtemelen kişiselleştirilmiş yardıma veya rehberli yardıma adanmış bir bölüm. Vault: Önemli belgeler veya kaynaklar için bir depolama alanı. Library: Kaynaklar, şablonlar veya referans materyalleri koleksiyonu. History: Geçmiş etkileşimlere, görevlere veya kaydedilmiş işlere erişim. Toolkit: Çeşitli BA aktivitelerini destekleyen araçlar veya yardımcı programlar. Community: Diğer kullanıcılarla etkileşim kurma, en iyi uygulamaları tartışma veya bilgi paylaşımı için bir bölüm. Job Board: İş ile ilgili kaynaklar için bir alan; muhtemelen açılışları veya kariyer fırsatlarını listeler. Settings: Alttakiler, BA Copilot deneyiminin özelleştirilmesine izin veren kullanıcıya özgü ayarlar. Kullanıcı Bilgileri: Altta, kullanıcının e-postası (örneğin, alex@tesla.com) ve verilerin güvenli olduğunu gösteren bir güvenlik notu görüntülenir.

  Ana İçerik Alanı

  Merkezi Etkileşim Kutusu

  "Sorular sor..." etiketli belirgin bir metin kutusu, kullanıcıları soruları, istekleri veya komutları girmeye davet eder. Bu, BA Copilot ile etkileşim için birincil arayüzdür.

  Hızlı İşlem Düğmeleri

  Etkileşim kutusunun altında, çeşitli düğmeler ortak BA görevlerine kısayollar sunar: Gereksinimlerden akış şeması oluştur: Gereksinimlerin listesine dayalı bir işlem akış şeması oluşturur. Akış şemasından gereksinimler oluştur: Mevcut bir akış şemasından gereksinimleri çıkarır ve belgeler. Notlardan belgelendirme oluştur: Toplantı notlarını veya diğer resmi olmayan belgelendirmeyi resmi belgeler haline dönüştürür. Belgelendirmeden testler oluştur: Mevcut belgelendirmeye dayalı olarak test senaryoları veya betikleri geliştir. Bana kariyer tavsiyesi ver: Kişiselleştirilmiş kariyer rehberliği veya kaynakları sağlar. Bir toolkit öner: Kullanıcının mevcut görevleri veya projeleriyle ilgili araçları veya yazılımları önerir.

  Genel Düzen

  Arayüz temiz, minimalist ve kullanıcı dostu olup, işlevsellik ve kullanım kolaylığına net vurgu yapar. Kullanıcıları tipik BA görevlerinden sorunsuz bir şekilde kılavuzlaması ve araç ve kaynaklara kolay erişim sağlaması için tasarlanmıştır. Bu arayüz, iş analistlerine günlük görevlerinde yardımcı olmak, işlerini daha verimli ve düzenli hale getirmek için tasarlanmış kapsamlı bir aracın vizyonunu somutlaştırır.

  ## Teknik

  ### Genel Bakış

  Stağın aşağıdaki öğeleri, ileride inşa etmeye devam edeceğim öğeler:

  - Next.js, Pages router'ı değil App router'ı kullanılır; Pages router için bir öneri yapıp yapmadığınızı her zaman kontrol edin; önerinizin App router için uygun olduğundan her zaman emin olun
  - Vercel AI
  - Supabase - db, onların tip güvenliği de dahil
  - Supabase - auth
  - Tanstack query
  - Material UI
  - Muhtemelen API çağrıları için Orval (typing, tanstack query ve mock service worker testing)
  - Quokka

  React ile orta düzey deneyimim var. Ancak Next.js'te yeniyim. Bu nedenle, Next.js ile bir şey uygularken, beni hiç bilmiyormuş gibi öğretin. Ardından daha fazla açıklanabilir olup olmadığını sorun. Yığının yukarıdaki öğelerini değiştirmeniz gerektiğini düşünüyorsam, size her zaman söylerim. Yığında eksik olan öğeler için, önerilerde bulunun ve artılarını ve eksileri açıklayın, ardından bir öneri yapın. Uygulama klasörüm src/app; app/ oluşturmayın; uygulama/ oluşturmak işleri bozacak

  ### Devias Şablonu

  Bu çalışma alanı şunları içerir:

  - inşa ettiğim depo (ba-copilot-main veya ba-copilot)
  - inşa ettiğim depo: nextjs-template-typescript

  nextjs-template-typescript, Devias Kit Pro tarafından yapılan bir şablondur; burada Devias. Öğeleri kendi depolarından benimkine getireceğim. Bu nedenle bunun farkında olun ve oradan öğeleri de getirmeyi ve kodlama stillerini ve yapılarını takip etmeyi önermek de değerlendir.
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
