---
name: "nodejs-mongodb-jwt-express-react-cursorrules-promp"
clean_name: "Node.js MongoDB Jwt Express React Cursorrules Promp"
description: "Cursor rules for Node.js development with MongoDB, JWT, Express, and React integration."
description_tr: "Node.js geliştirmesi için Cursor rules ile MongoDB, JWT, Express ve React entegrasyonunu yönetin."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/nodejs-mongodb-jwt-express-react-cursorrules-promp.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nodejs-mongodb-jwt-express-react-cursorrules-promp.mdc"
body_length: 2180
file_extension: ".mdc"
body_tr: |-
  Tech Stack:

  Backend: Node.js with Express.js  
  Database: MongoDB with Mongoose ODM  
  Frontend: React.js (yönetici paneli, gerekirse)  
  Authentication: JSON Web Tokens (JWT)  
  Version Control: Git  
  Deployment: Docker (isteğe bağlı)  

  Kullanıcı Gereksinimlerinde Hassasiyet:

  Belirtilen kullanıcı akışına ve oyun kurallarına kesinlikle uyun.  

  Strateji: 

  Pick gönderme işlemini özetleyin ve API endpoint'ini ile iş mantığını pseudocode ile gösterin.  

  Pseudocode ile Stratejik Planlama:

  Her özelliğe detaylı pseudocode ile başlayın.  
  Örnek: Haftalık puanlama işlemi için pseudocode sağlayın, oyun sonucu girişinden entry durumu güncellemelerine kadar olan adımları detaylandırarak.  

  Kod Kalitesi:

  RESTful API en iyi uygulamalarını izleyerek güvenli, verimli kod sağlayın.  
  Uygun hata işleme ve input doğrulaması uygulayın.  

  Kullanıcı Akışı:

  Kullanıcılar mevcut Pools'a göz atar  
  Pool başına 3'e kadar Request gönderir  
  Requests için ödeme tamamlar  
  Admin Requests'i onaylar/reddeder  
  Onaylanan Requests, Entries olur  

  Entry Yönetimi:

  Her kullanıcı Pool başına 3'e kadar Entry'ye sahip olabilir  
  Entries 1, 2, 3 olarak numaralandırılır  
  Pickler her Entry için ayrı ayrı yapılır ve izlenir  

  Pick Yönetimi:

  Kullanıcılar her Entry için ayrı ayrı Pick yapar  
  Pickler son tarih (oyun başlangıcı veya pick yapılan haftanın Pazar saat 13:00) kadar güncellenebilir  

  Puanlama ve Sıralama:

  Pickler oyunlar tamamlandıktan sonra puanlanır  
  Kazanma: Entry bir sonraki haftaya ilerler  
  Kaybetme: Entry Pool'dan çıkarılır  
  Her Entry, Pool standings'te ayrı ayrı sıralanır  

  Sonuçlar ve Standings:

  Kullanıcılar her Entry için ayrı ayrı Picks/puanları görüntüler  
  Pool standings tüm Entries'leri gösterir (User başına birden fazla olası)  
  Pool üyeleri puanlama sonrası tüm Picks'leri görüntüleyebilir  

  Temel Uygulama Noktaları:

  Requests'leri User başına Pool başına 3 ile sınırla  
  Requests ve Entries'leri ayrı ayrı izle (1, 2, 3 olarak numaralandırılmış)  
  Request modelinde ödeme durumu izlemesini uygula  
  Admin onayından ve ödeme tamamlandıktan sonra Entry oluştur  
  Requests'leri yönetmek ve onaylamak için Admin arayüzü  
  Durum geçişlerini uygula (Request: pending -> approved -> Entry created)
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
