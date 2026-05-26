---
name: "nodejs-mongodb-cursorrules-prompt-file-tutorial"
clean_name: "Node.js MongoDB Cursorrules Prompt File Tutorial"
description: "Cursor rules for Node.js development with MongoDB integration."
description_tr: "Node.js geliştirme için Cursor kuralları ve MongoDB entegrasyonu."
category: "Data"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/nodejs-mongodb-cursorrules-prompt-file-tutorial.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nodejs-mongodb-cursorrules-prompt-file-tutorial.mdc"
body_length: 2111
file_extension: ".mdc"
body_tr: |-
  Tech Stack:

  Backend: Node.js with Express.js

  Database: MongoDB with Mongoose ODM

  Frontend: React.js (yönetici paneli gerekirse)

  Authentication: JSON Web Tokens (JWT)

  Version Control: Git

  Deployment: Docker (isteğe bağlı)

  Kullanıcı Gereksinimlerinde Hassasiyet:

  Belirtilen kullanıcı akışına ve oyun kurallarına kesinlikle uyun.

  Strateji: 

  Pick gönderme işlemini özetleyin ve API endpoint'i ile iş mantığını sözde kod ile belirtin.

  Sözde Kod ile Stratejik Planlama:

  Her özelliğe detaylı sözde kod ile başlayın.

  Örnek: Haftalık puanlama işlemi için sözde kod sağlayın, oyun sonucu girişinden entry durumu güncellemesine kadar olan adımları detaylandırarak.

  Kod Kalitesi:

  RESTful API en iyi uygulamalarını takip ederek güvenli, verimli kod yazın.

  Uygun hata işleme ve input doğrulaması uygulayın.

  Kullanıcı Akışı:

  Kullanıcılar mevcut Havuzlara göz atar

  Pool başına 3'e kadar Request gönderir

  Request'ler için ödemeyi tamamlar

  Yönetici Request'leri onaylar/reddeder

  Onaylanan Request'ler Entry haline gelir

  Entry Yönetimi:

  Her kullanıcı Pool başına 3'e kadar Entry'ye sahip olabilir

  Entry'ler 1, 2, 3 numaralandırılmış

  Pick'ler her Entry için ayrı ayrı yapılır ve takip edilir

  Pick Yönetimi:

  Kullanıcılar her Entry için ayrı ayrı Pick yapar

  Pick'ler deadline'a kadar güncellenebilir (oyun başlangıcı veya pick'in yapıldığı haftanın Pazar günü saat 13:00)

  Puanlama ve Sıralama:

  Pick'ler oyunlar tamamlandıktan sonra puanlandırılır

  Kazanış: Entry sonraki haftaya ilerler

  Kayıp: Entry Pool'dan elenir

  Her Entry Pool sıralamalarında ayrı ayrı sıralanır

  Sonuçlar ve Sıralamalar:

  Kullanıcılar her Entry'nin Pick'lerini/puanlarını ayrı ayrı görüntüler

  Pool sıralamalarında tüm Entry'ler gösterilir (kullanıcı başına birden fazla olabilir)

  Puanlandırıktan sonra Pool üyeleri tüm Pick'leri görüntüleyebilir

  Temel Uygulama Noktaları:

  Request'leri Pool başına kullanıcı başına 3 ile sınırlandırın

  Request'leri ve Entry'leri ayrı ayrı takip edin (1, 2, 3 numaralandırılmış)

  Request model'inde ödeme durumu takibini uygulayın

  Yönetici onayı ve ödeme tamamlandıktan sonra Entry oluşturun

  Request'leri yönetmek ve onaylamak için yönetici arayüzü

  Durum geçişlerini uygulayın (Request: pending -> approved -> Entry created)
---

Tech Stack:

Backend: Node.js with Express.js

Database: MongoDB with Mongoose ODM

Frontend: React.js (for admin panel, if required)

Authentication: JSON Web Tokens (JWT)

Version Control: Git

Deployment: Docker (optional)

Precision in User Requirements:

Strictly adhere to specified user flow and game rules.

Strategy: 

Summarize the pick submission process and outline the API endpoint and business logic in pseudocode before coding.

Strategic Planning with Pseudocode:

Begin each feature with detailed pseudocode.

Example: Provide pseudocode for the weekly scoring process, detailing steps from game result input to entry status updates.

Code Quality:

Ensure secure, efficient code following RESTful API best practices.

Implement proper error handling and input validation.

User Flow:

Users browse available Pools

Submit up to 3 Requests per Pool

Complete payment for Requests

Admin approves/rejects Requests

Approved Requests become Entries

Entry Management:

Each user can have up to 3 Entries per Pool

Entries are numbered 1, 2, 3

Picks are made and tracked separately for each Entry

Pick Management:

Users make Picks for each Entry separately

Picks can be updated until deadline (game start or 1PM Sunday of the current week of the pick)

Scoring and Ranking:

Picks scored after games complete

Win: Entry moves to next week

Loss: Entry eliminated from Pool

Each Entry ranked separately in Pool standings

Results and Standings:

Users view Picks/scores for each Entry separately

Pool standings show all Entries (multiple per User possible)

Pool members can view all Picks after scoring

Key Implementation Points:

Limit Requests to 3 per User per Pool

Track Requests and Entries separately (numbered 1, 2, 3)

Implement payment status tracking in Request model

Create Entry only after admin approval and payment completion

Admin interface for managing and approving Requests

Implement state transitions (Request: pending -> approved -> Entry created)
