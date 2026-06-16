---
name: "security-devsecops-ssdls-appsec"
clean_name: "Security Devsecops Ssdls Appsec"
description: "Cursor rules for secure coding, secret handling, dependency hygiene, authentication, authorization, security testing, and compliance documentation."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/security-devsecops-ssdls-appsec.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/security-devsecops-ssdls-appsec.mdc"
body_length: 2618
file_extension: ".mdc"
body_tr: |-
  # DevSecOps + SSDLC + AppSec Cursor Rule

  ## Genel Güvenlik Prensipleri
  - Sırları, kimlik bilgilerini veya API anahtarlarını asla sabit kodlamayın. Hassas veriler için ortam değişkenlerini veya güvenli kasaları kullanın.
  - `.env`, gizli yapılandırma dosyalarını veya bilinmeyen tokenları kaynak kontrolüne dahil etmeyi yasaklayın.
  - Hassas verileri, sırları veya oturum tokenlarını asla uygulama günlüklerine kaydetmeyin.
  - Tüm kullanıcı girişini doğrulayın ve temizleyin. HTML, JS ve SQL bağlamlarında çıktıyı kaçış karakterleriyle işleyin.
  - `exec`, `eval` veya benzer dinamik kod yürütme işlevleri gibi güvenli olmayan fonksiyonlardan kaçının.

  ## Veritabanı Güvenliği
  - Tüm veritabanı erişimi için parametreli sorguları veya ORM kullanın. Sorgu oluşturmak için string birleştirmesini kullanmayın.
  - Veritabanı kullanıcılarının görevleri için gereken en az ayrıcalıklara sahip olduğundan emin olun.
  - Veritabanı erişim ilkelerini düzenli olarak gözden geçirin ve güncelleyin.

  ## Bağımlılık Yönetimi
  - Paketleri yalnızca doğrulanmış kaynaklardan kullanın.
  - Açık onay ve güvenlik incelemesi olmadan yeni bağımlılıklar eklemeyin.
  - Bağımlılıkları düzenli olarak güncelleyin ve bilinen güvenlik açıkları açısından tarayın (SCA).

  ## Kimlik Doğrulama & Yetkilendirme
  - Güvenli kimlik doğrulama çerçeveleri kullanın; asla özel kimlik doğrulama uygulamayın.
  - Şifreleri güçlü, tuzlanmış karma işlevler kullanarak depolayın (örn. Argon2, bcrypt).
  - Hassas işlemler için Rol Tabanlı Erişim Kontrolü (RBAC) uygulayın.
  - API'ler ve UI işlemleri için en az ayrıcalık ilkesini zorunlu kılın.

  ## Güvenli SDLC Uygulamaları
  - Statik Uygulama Güvenliği Testi (SAST) ve Yazılım Bileşeni Analizi (SCA) işlemlerini CI hattına entegre edin.
  - Birleştirmeden önce tüm kodları sırlar açısından tarayın (Gizli Tarama).
  - Tüm altyapı kodu için Altyapı Kodu (IaC) taraması kullanın.
  - Dağıtılan uygulamalar için Dinamik Uygulama Güvenliği Testi (DAST) işlemlerini CD hattına entegre edin.
  - Otomatikleştirilmiş, sürüm kontrollü güvenlik ilkeleri için İlke Kodu (PaC) uygulamasını zorunlu kılın.

  ## İzleme & Geribildirim
  - Sürekli güvenlik açığı izlemesini ve uyarılarını etkinleştirin.
  - Uygun şekillerde Çalışma Zamanı Uygulama Öz-Koruması (RASP) ve Web Uygulaması Güvenlik Duvarı (WAF) entegre edin.
  - Düzenli güvenlik açığı değerlendirmeleri ve penetrasyon testlerini teşvik edin.
  - Yinelenen güvenlik açıklarına dayalı olarak kuralları ve istemleri güncellemek için bir geribildirim döngüsü oluşturun.

  ## Uyum & Belgelendirme
  - Endüstri standartlarıyla uyumlu olun (örn. OWASP Top 10, NIST, ISO 27001).
  - Denetlenebilirlik için tüm güvenlik kontrollerini ve kararlarını belgelendirin.
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
