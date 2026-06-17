---
name: "nodejs-mongodb-cursorrules-prompt-file-tutorial"
clean_name: "Node.js MongoDB Cursorrules Prompt File Tutorial"
description: "Cursor rules for Node.js development with MongoDB integration."
description_tr: "Node.js geliştirimi için MongoDB entegrasyonlu Cursor kuralları."
category: "Data"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
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

  Deployment: Docker (opsiyonel)

  Kullanıcı Gereksinimlerinde Kesinlik:

  Belirtilen kullanıcı akışına ve oyun kurallarına kesinlikle uyun.

  Strateji: 

  Pick gönderim işlemini özetleyin ve API endpoint'ini ile business logic'i pseudocode'da özetleyin.

  Pseudocode ile Stratejik Planlama:

  Her özelliği detaylı pseudocode ile başlatın.

  Örnek: Haftalık puanlama işlemi için pseudocode sağlayın, oyun sonucu girişinden entry durum güncellemelerine kadar adımları detaylandırarak.

  Kod Kalitesi:

  RESTful API best practices'ını takip ederek güvenli ve verimli kod sağlayın.

  Uygun hata işleme ve input doğrulaması uygulayın.

  Kullanıcı Akışı:

  Kullanıcılar mevcut Pools'a göz atar

  Pool başına 3 adede kadar Request gönderir

  Requests için ödeme tamamlanır

  Admin, Requests'i onaylar/reddeder

  Onaylanan Requests, Entries haline gelir

  Entry Yönetimi:

  Her kullanıcı Pool başına 3 adede kadar Entry'ye sahip olabilir

  Entries 1, 2, 3 olarak numaralandırılır

  Picks, her Entry için ayrı ayrı yapılır ve izlenir

  Pick Yönetimi:

  Kullanıcılar her Entry için ayrı ayrı Picks yaparlar

  Picks, deadline'a kadar güncellenebilir (oyun başlangıcı veya pick'in yapıldığı haftanın Pazar günü saat 13:00)

  Puanlama ve Sıralama:

  Oyunlar tamamlandıktan sonra Picks puanlanır

  Kazanış: Entry bir sonraki haftaya ilerler

  Kayıp: Entry Pool'dan elenir

  Her Entry, Pool standings'te ayrı ayrı sıralanır

  Sonuçlar ve Standings:

  Kullanıcılar, her Entry için Picks/puanları ayrı ayrı görüntüler

  Pool standings, tüm Entries'i gösterir (User başına birden fazla olabilir)

  Pool üyeleri puanlamadan sonra tüm Picks'leri görüntüleyebilir

  Temel Uygulama Noktaları:

  Requests'i Pool başına User başına 3 ile sınırlayın

  Requests ve Entries'i ayrı ayrı izleyin (1, 2, 3 olarak numaralandırılmış)

  Request model'de payment status izlemesini uygulayın

  Entry'yi yalnızca admin onayından ve ödeme tamamlandıktan sonra oluşturun

  Requests'i yönetmek ve onaylamak için Admin arayüzü

  State geçişlerini uygulayın (Request: pending -> approved -> Entry created)
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
