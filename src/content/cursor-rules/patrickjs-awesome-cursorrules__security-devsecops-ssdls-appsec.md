---
name: "security-devsecops-ssdls-appsec"
clean_name: "Security Devsecops Ssdls Appsec"
description: "Cursor rules for secure coding, secret handling, dependency hygiene, authentication, authorization, security testing, and compliance documentation."
description_tr: "Güvenli kodlama, sır yönetimi, bağımlılık hijyeni, kimlik doğrulama, yetkilendirme, güvenlik testleri ve uyum belgesi için Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/security-devsecops-ssdls-appsec.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/security-devsecops-ssdls-appsec.mdc"
body_length: 2618
file_extension: ".mdc"
body_tr: |-
  # DevSecOps + SSDLC + AppSec Cursor Rule

  ## Genel Güvenlik İlkeleri
  - Hiçbir zaman sırları, kimlik bilgilerini veya API anahtarlarını kodda sabit olarak yazma. Hassas veriler için ortam değişkenlerini veya güvenli vault'ları kullan.
  - `.env`, gizli yapılandırma dosyaları veya bilinmeyen token'ların kaynak kontrol sistemine dahil edilmesini yasakla.
  - Hassas verileri, sırları veya oturum token'larını asla uygulama günlüklerine kaydetme.
  - Tüm kullanıcı girdisini doğrula ve temizle. HTML, JS ve SQL bağlamlarında çıktıyı escape et.
  - `exec`, `eval` veya benzeri dinamik kod yürütme gibi güvenli olmayan işlevlerden kaçın.

  ## Veritabanı Güvenliği
  - Tüm veritabanı erişimi için parametreli sorguları veya ORM kullan. Sorgu oluştururken dize birleştirmesi kullanma.
  - Veritabanı kullanıcılarının görevleri için gereken minimum izinlere sahip olmasını sağla.
  - Veritabanı erişim politikalarını düzenli olarak gözden geçir ve güncelle.

  ## Bağımlılık Yönetimi
  - Paketleri yalnızca doğrulanmış kaynaklardan kullan.
  - Açık onay ve güvenlik incelemesi olmadan yeni bağımlılıklar ekleme.
  - Bağımlılıkları düzenli olarak güncelle ve bilinen açıklıkları taraması yap (SCA).

  ## Kimlik Doğrulama & Yetkilendirme
  - Güvenli kimlik doğrulama framework'lerini kullan; özel kimlik doğrulama uygulamaktan kaçın.
  - Parolaları güçlü, tuzlanmış hash'ler kullanarak depola (ör. Argon2, bcrypt).
  - Hassas işlemler için Rol Tabanlı Erişim Kontrolü (RBAC) uygula.
  - API'ler ve UI eylemleri için en az yetki ilkesini uygula.

  ## Güvenli SDLC Uygulamaları
  - Statik Uygulama Güvenliği Testi (SAST) ve Yazılım Bileşeni Analizi (SCA) çözümlerini CI pipeline'ına entegre et.
  - Tüm kodları merge'den önce sırlar açısından tara (Secret Scanning).
  - Tüm altyapı kodu için Kod Olarak Altyapı (IaC) taraması kullan.
  - Dağıtılmış uygulamalar için Dinamik Uygulama Güvenliği Testi (DAST) çözümünü CD pipeline'ına entegre et.
  - Otomatikleştirilmiş, versiyon kontrollü güvenlik politikaları için Kod Olarak Politika (PaC) uygula.

  ## İzleme & Geri Bildirim
  - Sürekli açıklık izlemeyi ve uyarı sistemini etkinleştir.
  - Gerektiğinde Runtime Application Self-Protection (RASP) ve Web Application Firewall (WAF) entegrasyonu sağla.
  - Düzenli açıklık değerlendirmeleri ve penetrasyon testini destekle.
  - Tekrarlanan açıklıklara dayanarak kuralları ve istekleri güncellemek için bir geri bildirim döngüsü oluştur.

  ## Uyum & Dokümantasyon
  - Endüstri standartlarıyla uyum sağla (ör. OWASP Top 10, NIST, ISO 27001).
  - Tüm güvenlik kontrollerini ve kararlarını denetlenebilirlik için dokümante et.
---

# DevSecOps + SSDLC + AppSec Cursor Rule

## General Security Principles
- Never hardcode secrets, credentials, or API keys. Use environment variables or secure vaults for sensitive data.
- Prohibit the inclusion of `.env`, secret config files, or unknown tokens in source control.
- Never log sensitive data, secrets, or session tokens in application logs.
- Validate and sanitize all user input. Escape output in HTML, JS, and SQL contexts.
- Avoid unsafe functions such as `exec`, `eval`, or similar dynamic code execution.

## Database Security
- Use parameterized queries or ORM for all database access. Do not use string concatenation for query building.
- Ensure database users have the least privilege required for their tasks.
- Regularly review and update database access policies.

## Dependency Management
- Only use packages from verified sources.
- Do not add new dependencies without explicit approval and security review.
- Regularly update dependencies and scan for known vulnerabilities (SCA).

## Authentication & Authorization
- Use secure authentication frameworks; never implement custom authentication.
- Store passwords using strong, salted hashes (e.g., Argon2, bcrypt).
- Implement Role-Based Access Control (RBAC) for sensitive operations.
- Enforce the principle of least privilege for APIs and UI actions.

## Secure SDLC Practices
- Integrate Static Application Security Testing (SAST) and Software Composition Analysis (SCA) into the CI pipeline.
- Scan all code for secrets before merging (Secret Scanning).
- Use Infrastructure as Code (IaC) scanning for all infrastructure code.
- Integrate Dynamic Application Security Testing (DAST) in the CD pipeline for deployed applications.
- Enforce Policy as Code (PaC) for automated, version-controlled security policies.

## Monitoring & Feedback
- Enable continuous vulnerability monitoring and alerting.
- Integrate Runtime Application Self-Protection (RASP) and Web Application Firewall (WAF) as appropriate.
- Encourage regular vulnerability assessments and penetration testing.
- Maintain a feedback loop to update rules and prompts based on recurring vulnerabilities.

## Compliance & Documentation
- Align with industry standards (e.g., OWASP Top 10, NIST, ISO 27001).
- Document all security controls and decisions for auditability.
