---
name: "nextjs-vercel-supabase-cursorrules-prompt-file"
clean_name: "Next.js Vercel Supabase"
description: "Cursor rules for Next.js development with Vercel and Supabase integration."
description_tr: "Next.js geliştirmesi için Cursor kuralları, Vercel ve Supabase entegrasyonu ile birlikte."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/nextjs-vercel-supabase-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-vercel-supabase-cursorrules-prompt-file.mdc"
body_length: 7792
file_extension: ".mdc"
body_tr: |-
  # Cursorrules

  ## Intro

  'BA Copilot' (bacp olarak da adlandırılır) adlı bir proje geliştiriyorum. BA, Business Analysts (İş Analisti) anlamına gelir.

  ## BA Copilot MVP

  ### Genel Bakış

  İş analistleri için bir asistlandır. MVP, bpmn-js kullanarak BPMN diyagramlarını render edecek bir yapay zeka sohbet botu türü araç olacaktır. Kullanıcı bunları aşağıdakilerle yineleyebilir:

  - ek tartışma
  - diyagramı doğrudan düzenleme (bpmn-js bunu destekler)

  ### UI Açıklaması

  BPMN diyagramları oluşturmak ve üzerinde yinelemek için işlevselliğe odaklanan BA Copilot MVP'nin hiyerarşik, girintili bir madde işareti açıklaması:

  BA Copilot Arayüzü

  Soru Girişi Bölümü

  Kullanıcılar iş süreçleriyle ilgili sorular veya istekler girebilirler. Örnek: "Doküman içeriğine dayanarak neyi kaçırdım?"

  Süreç Bölümü (İsteğe Bağlı)

  Kullanıcıların .png, .vsdx gibi formatlarda BPMN diyagramlarını yüklemesine veya görüntülemesine olanak tanır. Kullanıcılar mevcut diyagramları görselleştirebilir ve düzenleyebilir veya yenilerini oluşturabilir. Örnek: "Masraf raporu kayıt et", "Onayla" ve "Reddet" süreçlerinin akışını gösteren bir BPMN diyagramı.

  Belgeler Bölümü (İsteğe Bağlı)

  Kullanıcılar süreç ayrıntılarını içerebilecek PDF'ler gibi ilgili belgeleri yükleyebilirler. Örnek: BPMN diyagramı için bağlam sağlamak amacıyla "Shelter - employee handbook.pdf" yükleme.

  Yapıtlar Bölümü

  İlgili çıktılar veya referanslar için bir alan sağlar. Örnek: Yüklenen içeriğe dayalı diyagram önerileri.

  Yinelemeli BPMN Diyagram Oluşturma ve Değiştirme

  Girdi Süreci

  Kullanıcılar mevcut süreçlere yönelik değişiklikler için sorular veya istekler sunabilirler. Örnek: Doküman içeriğine dayanarak süreçteki eksik adımları sorma.

  Yapay Zeka Destekli Öneriler

  Sistem, yüklenen belgelerin içeriğine veya kullanıcı sorgularına dayanarak BPMN diyagramına ekleme veya değişiklik önerileri sunar. Örnek: Yüklenen el kitabından belirli bölümlere atıfta bulunarak masraf politikasını kontrol etmek için bir görev ekleme önerisi.

  Diyagram Düzenleme

  Kullanıcılar alınan önerilere dayanarak BPMN diyagramını etkileşimli olarak düzenleyebilirler. Örnek: "Masraf politikasını kontrol et" görevini "Masraf raporu" ve "Kontrol edilen masraf raporu" gibi girdiler ve çıktılarla ekleme.

  Dokümantasyon ve Referanslar

  Sistem yüklenen belgeleri referans alır ve ilgili bölümleri vurgular. Örnek: Çalışan el kitabından "Section 7. Claiming reimbursement for payments made on behalf of the company" bölümüne atıfta bulunma.

  Kullanıcı İş Akışı

  Bir Soruyla Başlayın

  Kullanıcı bir soru sorarak veya bir istek yaparak süreci başlatır.

  Süreç Diyagramlarını ve Belgeleri Yükleyin

  Kullanıcı bağlam için mevcut diyagramları ve belgeleri yükler.

  Yapay Zeka Tarafından Oluşturulan Önerileri Alın

  Sistem süreç akışını geliştirmek veya düzeltmek için öneriler sağlar.

  BPMN Diyagramını Değiştirin

  Kullanıcı alınan önerilere dayanarak BPMN diyagramını düzenler.

  İstenilen Sonuç Elde Edilene Kadar Yineleyin

  Kullanıcı, istenen sonuç elde edilene kadar izleyen soruları sormaya ve diyagramı değiştirmeye devam eder.

  Bu BA Copilot MVP, kullanıcıların yüklenen belgeler ve kullanıcı sorgularından yararlanarak, bağlamsal önerilerle BPMN diyagramlarını verimli bir şekilde oluşturmasına, değiştirmesine ve üzerinde yineleme yapmasına olanak tanır.

  ## BA Copilot Vizyonu

  ### Genel Bakış

  Bunun vizyonu, iş analisti olmak olacak, ürünün değerini artırmak için ağ etkilerine sahip olacağı, örneğin BA ajansları ürünlerini araç seti bölümünde yayınlayıp, üyeler topluluk bölümünde BA konularını tartışacağı, ayrıca BPMN oluşturma gibi BA görevleri için sürekli gelişen bir modelle kendini koruyacağı bir evdir. Bununla birlikte, hiçbir zaman kullanıcı verileri üzerinde eğitilmeyecektir. Dropbox tarzı "bir arkadaşı davet edin ve ikiniz de 100 AI kredisi alın" mekanizmasıyla viralitenin yoluyla büyüyecektir. Gelir, şirketlerin BA'ları için bunu ödemesinden kaynaklanacaktır. Gelir ayrıca şirketlerin iş tahtasında listelenmek için ödeme yapmasından kaynaklanacaktır.

  ### UI Açıklaması

  İş Analisti (BA) Copilot için bu UI, iş analiziyle ilgili çeşitli görevleri kolaylaştırmak için tasarlanmıştır. İşte özellikleri:

  Başlık Bölümü

  Üst navigasyon çubuğu "BA Copilot" uygulama adını görüntüler ve prototip paylaşımı ve kullanıcı ayarlarına erişim gibi seçenekler sağlar.

  Sol Kenar Çubuğu Navigasyonu

  Home: BA Copilot'un ana panosu veya açılış sayfası. Assistant: Muhtemelen kişiselleştirilmiş yardım veya rehberli yardıma ayrılmış bir bölüm. Vault: Önemli belgeler veya kaynaklar için bir depolama alanı. Library: Kaynaklar, şablonlar veya referans materyalleri koleksiyonu. History: Geçmiş etkileşimlere, görevlere veya kaydedilen çalışmaya erişim. Toolkit: Çeşitli BA faaliyetlerini destekleyen araçlar veya yardımcı programlar. Community: Diğer kullanıcılarla etkileşim, en iyi uygulamaları tartışma veya bilgi paylaşımı için bir bölüm. Job Board: İş ile ilgili kaynaklar, muhtemelen açılışları listeleme alanı. Settings: Altta bulunan, BA Copilot deneyiminin özelleştirilmesine izin veren kullanıcıya özel ayarlar. Kullanıcı Bilgileri: Altta, kullanıcının e-postası (örneğin, alex@tesla.com) ve verilerin güvenli olduğunu belirten bir güvenlik notu görüntülenir.

  Ana İçerik Alanı

  Merkezi Etkileşim Kutusu

  "Ask anything..." etiketli belirgin bir metin kutusu, kullanıcıları sorular, istekler veya komutlar girmesi için davet eder. Bu, BA Copilot ile etkileşimin birincil arayüzüdür.

  Hızlı İşlem Düğmeleri

  Etkileşim kutusunun altında, birkaç düğme yaygın BA görevlerine kısayollar sunur: Create flowchart from requirements: Gereksinimler listesine dayalı bir süreç akış şeması oluşturur. Create requirements from flowchart: Mevcut bir akış şemasından gereksinimleri çıkartır ve belgeler. Create documentation from notes: Toplantı notlarını veya diğer gayri resmi belgeleri resmi belgelere dönüştürür. Create tests from documentation: Mevcut belgelere dayanarak test senaryoları veya betikleri geliştirir. Give me career advice: Kişiselleştirilmiş kariyer rehberliği veya kaynakları sağlar. Recommend a toolkit: Kullanıcının mevcut görevleriyle veya projeleriyle ilgili araçlar veya yazılım önerir.

  Genel Düzen

  Arayüz temiz, minimalist ve kullanıcı dostudur ve işlevselliğe ve kullanım kolaylığına açık vurgu yapar. Kullanıcıları tipik BA görevlerini sorunsuz bir şekilde yönlendirmek ve araçlar ile kaynaklara kolay erişim sağlamak için tasarlanmıştır. Bu UI, iş analisti olmak için tasarlanmış kapsamlı yet düzenli bir araç vizyonunu, iş analistlerin günlük görevlerinde daha verimli ve organize olmalarını sağlayan bir aracı somutlaştırır.

  ## Teknik

  ### Genel Bakış

  Stack'in aşağıdaki öğeleri, onlarla geliştireceğimden emin olduğum şeylerdir:

  - Next.js - App router kullanmak, Pages router kullanmamak, her zaman Pages router için bir öneri yapıp yapmadığınızı kontrol edin, her zaman tavsiyenizin App router için uygun olup olmadığını kontrol edin
  - Vercel AI
  - Supabase - db, tür güvenliği dahil
  - Supabase - auth
  - Tanstack query
  - Material UI
  - Muhtemelen Orval - API çağrıları için (typing, tanstack query, ve mock service worker testing)
  - Quokka

  React ile orta düzey deneyimim var. Ancak Next.js'te yeniyim. Bu nedenle Next.js ile bir şey uygularken, bunu bilmiyormuşum gibi öğret. Sonra daha fazla açıklamayı teklif et. Stack'imdeki öğeleri değiştirmen gerekirse, her zaman bana söyle. Stack'imde eksik olan öğeler için tavsiyeler verin ve artıları ve eksileri açıklayın, ardından bir tavsiye yapın. Uygulama klasörüm src/app. Hiçbir zaman app/ oluşturma, uygulama oluşturma çalışacak şeyleri kıracak

  ### Devias Şablonu

  Bu çalışma alanı şunları içerir:

  - üzerine inşa ettiğim repo (ba-copilot-main, or ba-copilot)
  - inşa ettiğim repo: nextjs-template-typescript

  nextjs-template-typescript, Devias Kit Pro tarafından oluşturulan, Devias tarafından yapılan bir şablondur. Depolarından öğeleri benimkine getireceğim. O yüzden bunun farkında ol ve öğeleri oradan getirmeyi tavsiye etmeyi ve kodlama stilini ve yapısını takip etmeyi düşün.
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
