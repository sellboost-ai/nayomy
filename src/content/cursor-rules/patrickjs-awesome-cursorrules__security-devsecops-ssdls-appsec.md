---
name: "security-devsecops-ssdls-appsec"
clean_name: "Security Devsecops Ssdls Appsec"
description: "Cursor rules for secure coding, secret handling, dependency hygiene, authentication, authorization, security testing, and compliance documentation."
description_tr: "Güvenli kodlama, gizli yönetimi, bağımlılık hijyeni, kimlik doğrulama, yetkilendirme, güvenlik testi ve uyum belgesi için Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/security-devsecops-ssdls-appsec.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/security-devsecops-ssdls-appsec.mdc"
body_length: 2618
file_extension: ".mdc"
body_tr: |-
  # DevSecOps + SSDLC + AppSec Cursor Rule

  ## Genel Güvenlik Prensipleri
  - Gizli anahtarları, kimlik bilgilerini veya API anahtarlarını asla hardcode etmeyin. Hassas veriler için ortam değişkenleri veya güvenli vault'lar kullanın.
  - `.env`, gizli config dosyaları veya bilinmeyen token'ların kaynak kontrolüne dahil edilmesini yasaklayın.
  - Hassas verileri, gizli anahtarları veya oturum token'larını asla uygulama log'larına kaydetmeyin.
  - Tüm kullanıcı girişini doğrulayın ve sanitize edin. HTML, JS ve SQL bağlamlarında çıktıyı escape edin.
  - `exec`, `eval` veya benzer dinamik kod yürütme gibi güvensiz fonksiyonlardan kaçının.

  ## Veritabanı Güvenliği
  - Tüm veritabanı erişimi için parametreli sorgular veya ORM kullanın. Sorgu oluşturmak için string concatenation kullanmayın.
  - Veritabanı kullanıcılarının görevleri için gereken minimum yetkilere sahip olduğundan emin olun.
  - Veritabanı erişim politikalarını düzenli olarak gözden geçirin ve güncelleyin.

  ## Bağımlılık Yönetimi
  - Paketleri yalnızca doğrulanmış kaynaklardan kullanın.
  - Açık onay ve güvenlik incelemesi olmadan yeni bağımlılıklar eklemeyin.
  - Bağımlılıkları düzenli olarak güncelleyin ve bilinen güvenlik açıklarını tarayın (SCA).

  ## Kimlik Doğrulama ve Yetkilendirme
  - Güvenli kimlik doğrulama framework'leri kullanın; asla özel kimlik doğrulama uygulamayın.
  - Parolaları güçlü, tuzlanmış hash'lerle saklayın (ör. Argon2, bcrypt).
  - Hassas operasyonlar için Role-Based Access Control (RBAC) uygulayın.
  - API'ler ve UI eylemleri için en az yetki prensibini uygulayın.

  ## Güvenli SDLC Uygulamaları
  - Static Application Security Testing (SAST) ve Software Composition Analysis (SCA)'yı CI pipeline'ına entegre edin.
  - Birleştirmeden önce tüm kodu gizli anahtarlar açısından tarayın (Secret Scanning).
  - Tüm altyapı kodu için Infrastructure as Code (IaC) taraması kullanın.
  - Dynamic Application Security Testing (DAST)'ı CD pipeline'ına dağıtılan uygulamalar için entegre edin.
  - Otomatik, sürüm kontrollü güvenlik politikaları için Policy as Code (PaC) uygulayın.

  ## İzleme ve Geri Bildirim
  - Sürekli güvenlik açığı izleme ve uyarısını etkinleştirin.
  - Runtime Application Self-Protection (RASP) ve Web Application Firewall (WAF)'yi uygun şekilde entegre edin.
  - Düzenli güvenlik açığı değerlendirmelerini ve penetrasyon testlerini teşvik edin.
  - Yinelenen güvenlik açıklarına dayalı olarak kuralları ve istemlerini güncellemek için bir geri bildirim döngüsü oluşturun.

  ## Uyum ve Dokümantasyon
  - Endüstri standartlarıyla uyumlu olun (ör. OWASP Top 10, NIST, ISO 27001).
  - Denetlenebilirlik için tüm güvenlik kontrolleri ve kararları belgelendirin.
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
