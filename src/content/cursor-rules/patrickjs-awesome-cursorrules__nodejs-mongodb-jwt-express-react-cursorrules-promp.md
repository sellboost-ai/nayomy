---
name: "nodejs-mongodb-jwt-express-react-cursorrules-promp"
clean_name: "Node.js MongoDB Jwt Express React Cursorrules Promp"
description: "Cursor rules for Node.js development with MongoDB, JWT, Express, and React integration."
description_tr: "Node.js geliştirme için Cursor kuralları; MongoDB, JWT, Express ve React entegrasyonunu içerir."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/nodejs-mongodb-jwt-express-react-cursorrules-promp.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nodejs-mongodb-jwt-express-react-cursorrules-promp.mdc"
body_length: 2180
file_extension: ".mdc"
body_tr: |-
  Tech Stack:

  Backend: Node.js with Express.js  
  Database: MongoDB with Mongoose ODM  
  Frontend: React.js (yönetim paneli, gerekirse)  
  Authentication: JSON Web Tokens (JWT)  
  Version Control: Git  
  Deployment: Docker (isteğe bağlı)  

  Kullanıcı Gereksinimlerinde Hassasiyet:

  Belirtilen kullanıcı akışına ve oyun kurallarına kesinlikle uyun.  

  Strateji: 

  Seçim gönderme işlemini özetleyin ve API endpoint'ini ve iş mantığını sözde kod olarak özetleyin, kodlamadan önce.  

  Sözde Kod ile Stratejik Planlama:

  Her özelliği ayrıntılı sözde kod ile başlatın.  
  Örnek: Haftalık puanlama işlemi için sözde kod sağlayın, oyun sonucu girişinden giriş durumu güncellemelerine kadar olan adımları detaylandırarak.  

  Kod Kalitesi:

  RESTful API en iyi uygulamalarını takip eden güvenli, verimli kod sağlayın.  
  Uygun hata işleme ve giriş doğrulaması uygulayın.  

  Kullanıcı Akışı:

  Kullanıcılar mevcut Pool'lara göz atarlar  
  Her Pool için en fazla 3 Request gönderirler  
  Request'ler için ödemeyi tamamlarlar  
  Admin, Request'leri onaylar/reddeder  
  Onaylanan Request'ler Entry'ye dönüşür  

  Entry Yönetimi:

  Her kullanıcı Pool başına en fazla 3 Entry'ye sahip olabilir  
  Entry'ler 1, 2, 3 olarak numaralandırılır  
  Seçimler her Entry için ayrı olarak yapılır ve izlenir  

  Seçim Yönetimi:

  Kullanıcılar her Entry için ayrı olarak Seçim yaparlar  
  Seçimler son tarih (oyun başlangıcı veya bulunduğu haftanın Pazar günü 13:00) kadar güncellenebilir  

  Puanlama ve Sıralama:

  Seçimler oyunlar tamamlandıktan sonra puanlanır  
  Galibiyet: Entry bir sonraki haftaya ilerler  
  Kayıp: Entry Pool'dan elenir  
  Her Entry, Pool sıralamasında ayrı olarak sıralanır  

  Sonuçlar ve Sıralamalar:

  Kullanıcılar her Entry için ayrı olarak Seçimleri/puanları görüntülerler  
  Pool sıralaması tüm Entry'leri gösterir (Kullanıcı başına birden fazla mümkündür)  
  Pool üyeleri puanlamadan sonra tüm Seçimleri görüntüleyebilirler  

  Temel Uygulama Noktaları:

  Request'leri Kullanıcı başına Pool başına 3 ile sınırlayın  
  Request'leri ve Entry'leri ayrı olarak izleyin (1, 2, 3 olarak numaralandırılmış)  
  Request modelinde ödeme durumu izlemesini uygulayın  
  Entry'yi sadece admin onayından sonra ve ödeme tamamlandıktan sonra oluşturun  
  Request'leri yönetmek ve onaylamak için Admin arayüzü  
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
