---
name: "network-troubleshoot"
clean_name: "Network Troubleshoot"
description: "Systematic, safety-first network troubleshooting for developers"
description_tr: "Geliştiriciler için sistematik, güvenlik odaklı ağ sorun giderme"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/network-troubleshoot.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/network-troubleshoot.mdc"
body_length: 7931
file_extension: ".mdc"
body_tr: |-
  # Ağ Sorunlarını Giderme

  Bu kuralı, geliştirici ağ hatalarına yönelik özlü bir karar rehberi olarak kullanın. Tanılamayı güvenli, hedef kapsamında ve salt okunur tutun. Bu kuralı otomatikleştirilmiş düzeltme araç seti haline getirmeyin.

  ## Güvenlik Sınırları

  - Salt okunur tanılama ve proje tarafından sağlanan güvenilir tanılama betikleri tercih edin.
  - Başarısız olan ana bilgisayarı, URL'yi, kayıt defterini veya hizmeti varsayılan araştırma hedefi olarak kullanın.
  - İlgisiz harici hizmetleri araştırmadan önce sorgulamayı isteyiniz.
  - Proxy URL'leri, kimlik bilgileri, belirteçleri, auth header'ları, paket dizin URL'lerini, kayıt defteri ana bilgisayar adlarını yapılandırmadan veya ham yapılandırma değerlerini paylaşılan çıktıda yazdırmayın.
  - İç ana bilgisayarlar ve URL'ler hedef kapsamında yerel tanılama için toplanabilir, ancak kullanıcı açıkça onaylamadığı sürece bunları paylaşılan günlüklerde veya raporlarda yer tutucularla değiştirin.
  - npm, pnpm, yarn, pip, Git, Docker, shell, OS proxy, VPN veya sertifika depolarından yerel yapılandırma aktarmayın.
  - TLS veya sertifika doğrulamasını devre dışı bırakmayın, atlayın veya atlattıktan.
  - Kullanıcı tarafından tam işleme ilişkin açık onay olmadan OS ağını, DNS'yi, proxy'yi, paket yöneticisini, Git'i, Docker'ı, shell'i, VPN'i veya güven deposunu değiştirmeyin.

  ## İş Akışı

  1. **Topla**: Tam hatayı, başarısız komutu, hedef ana bilgisayar/URL/portu, OS/shell'i, proxy/VPN bağlamını ve başarısızlığın bir hedefi mi yoksa çoğunu mu etkilediğini yakala.
  2. **Sınıflandır**: Semptodu en olası kategoriye eşle.
  3. **Tanıla**: Yalnızca başarısız olan hedefe kapsamında salt okunur kontroller çalıştır.
  4. **Açıkla**: Herhangi bir düzeltme önermeden önce çıktıyı yorumla.
  5. **Tavsiye Et**: Düzeltme seçeneklerini seçim olarak sunun ve durum değiştirmeden önce kullanıcı onayını bekleyin.
  6. **Doğrula**: Orijinal başarısız komutu veya eşdeğer bir hedef kapsamında kontrol'ü yeniden çalıştırın.

  ## Hata Sınıflandırması

  | Hata Deseni | Olası Kategori |
  |---|---|
  | `ECONNREFUSED`, `ERR_CONNECTION_REFUSED`, `Connection refused` | Hedef hizmeti veya portu dinlemiyor |
  | `ECONNRESET`, `socket hang up`, `Connection reset` | Bağlantı hedef, proxy, güvenlik duvarı veya ara kutulama tarafından kesildi |
  | `ETIMEDOUT`, `ERR_CONNECTION_TIMED_OUT`, `timed out` | Yönlendirme, güvenlik duvarı, proxy veya hedef kullanılabilirliği |
  | `ENOTFOUND`, `EAI_NONAME`, `ERR_NAME_NOT_RESOLVED`, `getaddrinfo` | DNS veya ana bilgisayar adı sorunu |
  | `ERR_PROXY_CONNECTION_FAILED`, proxy tüneli hataları, HTTP `407` | Proxy yapılandırması veya proxy kimlik doğrulaması |
  | `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, `CERT_HAS_EXPIRED`, `self signed`, `ERR_CERT_*` | TLS sertifikası veya yerel güven sorunu |
  | HTTP `403` | Yetkilendirme, IP izin listesi, CORS veya politika engeli |
  | HTTP `502`, `503`, `504` | Yukarı akış hizmeti, ağ geçidi, CDN veya geçici sunucu sorunu |
  | `npm ERR! network`, paket kurulum zaman aşımı, `pip` zaman aşımı | Paket kayıt defteri, proxy, DNS veya ağ yolu sorunu |
  | `fatal: unable to access`, Git getirme/gönderme zaman aşımı | Git uzaktan, proxy, DNS, TLS veya ağ yolu sorunu |

  ## Güvenli Hedef Kapsamında Kontroller

  En küçük ilgili seti seçin. Her komutu çalıştırmadan önce neyi kontrol ettiğini açıklayın.

  ### Bağlantı

  Linux/macOS:

  ```bash
  ping -c 4 <target-host>
  curl -v telnet://<target-host>:<port> --connect-timeout 5
  ```

  Windows PowerShell:

  ```powershell
  Test-Connection -ComputerName <target-host> -Count 4
  Test-NetConnection -ComputerName <target-host> -Port <port>
  ```

  ### DNS

  Linux/macOS:

  ```bash
  nslookup <target-host>
  dig <target-host>                # Linux/macOS, varsa
  ```

  Windows PowerShell:

  ```powershell
  Resolve-DnsName <target-host>
  ```

  ### HTTP

  Linux/macOS:

  ```bash
  curl -vvv -o /dev/null -w "HTTP %{http_code}\nTime: %{time_total}s\nDNS: %{time_namelookup}s\nConnect: %{time_connect}s\nTLS: %{time_appconnect}s\n" https://<target-host>/<path>
  curl -I https://<target-host>/<path>
  ```

  Windows PowerShell:

  ```powershell
  $uri = "https://<target-host>/<path>"
  try {
    $resp = Invoke-WebRequest -Uri $uri -Method Head -TimeoutSec 10
    "HTTP status: $([int]$resp.StatusCode)"
  } catch [Net.WebException] {
    if ($_.Exception.Response) {
      "HTTP status: $([int]$_.Exception.Response.StatusCode)"
    } else {
      "HTTP request failed: $($_.Exception.Message)"
    }
  }
  ```

  ### TLS

  Linux/macOS:

  ```bash
  openssl s_client -connect <target-host>:<port> -servername <target-host> -showcerts </dev/null
  echo | openssl s_client -connect <target-host>:<port> -servername <target-host> 2>/dev/null | openssl x509 -noout -subject -issuer -dates
  ```

  Windows PowerShell:

  HTTP durumlarını TLS veya ağ hatalarından ayrı olarak bildirin, böylece 2xx olmayan yanıtlar yanlışlıkla sertifika hatası olarak etiketlenmez.

  ```powershell
  try {
    $req = [Net.HttpWebRequest]::Create("https://<target-host>:<port>/<path>")
    $req.Method = "HEAD"
    $req.Timeout = 5000

    try {
      $resp = $req.GetResponse()
    } catch [Net.WebException] {
      $resp = $_.Exception.Response
      if ($req.ServicePoint.Certificate) {
        $cert = $req.ServicePoint.Certificate
        "Cert subject: $($cert.Subject)"
        "Cert expires: $($cert.GetExpirationDateString())"
      }
      if ($resp) {
        "HTTP status: $([int]$resp.StatusCode) $($resp.StatusDescription)"
        $resp.Close()
      } else {
        "TLS/network error: $($_.Exception.Message)"
      }
      return
    }

    $cert = $req.ServicePoint.Certificate
    if ($cert) {
      "Cert subject: $($cert.Subject)"
      "Cert expires: $($cert.GetExpirationDateString())"
    }
    "HTTP status: $([int]$resp.StatusCode) $($resp.StatusDescription)"
    $resp.Close()
  } catch {
    "TLS/network error: $($_.Exception.Message)"
  }
  ```

  ### Proxy ve Paket Yöneticileri

  Proxy, paket yöneticisi, Git, Docker ve OS ağ yapılandırması için ham yapılandırma okumalarından kaçının. Yalnızca bu, değerleri yazdırmadan kontrol edilebilirse ilgili ayarlar mevcut görünüyor mu'ya ilişkin bilgi verin. Kullanılabilir komut bir URL, belirteç, iç ana bilgisayar adı, auth header'ı veya tam yapılandırma değeri yazdıracaksa, bunu çalıştırmayın.

  Yalnızca başarısız işlem zaten bu kayıt defterini hedeflediğinde veya kullanıcı tam araştırma hedefini onayladıktan sonra paket kayıt defteri araştırmaları gerçekleştirin.

  ## Kullanıcı Tarafından Onaylanan Düzeltme Seçenekleri

  Bunlar otomatik olarak çalıştırılacak komutlar değil, kullanıcıyla tartışılacak seçeneklerdir.

  | Tanılama | Güvenli Tavsiye |
  |---|---|
  | Hedef hizmeti dinlemiyor | Yerel veya uzak hizmetin çalışıp çalışmadığını ve beklenen portun doğru olup olmadığını kontrol edin. |
  | DNS araması başarısız olur | Ana bilgisayar adını, hosts dosyası beklentilerini, DNS hizmet durumunu veya onaylı DNS değişikliklerini kontrol edin. |
  | Proxy gerekli veya kullanılamıyor görünüyor | Kullanıcıya proxy/VPN'i başlatmak veya ayarlamak isteyip istemediğini sorun, ardından yalnızca onaylı hedefi doğrulayın. |
  | TLS sertifikası süresi doldu | Sertifikayı yenileyin veya değiştirin, sistem saatini düzeltin, güvenilir yerel geliştirme CA'sı yükleyin veya güven deposunu güncelleyin. TLS doğrulamasını atlattıktan. |
  | TLS bilinmeyen CA | Kullanıcı kaynağı ve kapsamı onayladıktan sonra doğru CA'yı uygun güven deposuna aktarın. |
  | HTTP `407` | Kimlik bilgileri veya araç ayarlarını değiştirmeden önce kullanıcıdan proxy kimlik doğrulama gereksinimlerini onaylamasını isteyin. |
  | HTTP `403` | Kimlik doğrulama, API anahtarı kapsamı, IP izin listesi, CORS ilkesi veya hizmet ilkesini kontrol edin. |
  | HTTP `502`/`503`/`504` | Yukarı akış veya ağ geçidi instabilitesi olarak ele alın; onay alındığında durum sayfalarını kontrol edin ve backoff ile yeniden deneyin. |
  | Paket kurulum zaman aşımı | Depolanan yapılandırma değerlerini yazdırmadan veya değiştirmeden onaylı kayıt defteri, proxy veya ağ yolu seçeneklerini tartışın. |
  | Git ağ hatası | Yerel Git ayarlarını otomatik olarak değiştirmeden onaylı uzaktan URL, proxy, kimlik bilgisi, TLS veya ağ yolu seçeneklerini tartışın. |
  | Docker pull hatası | Docker daemon ayarlarında onaylı bir yapılandırma değişikliği olarak kayıt defteri aynası, proxy veya daemon ayarlarını tartışın. |

  ## Doğrulama

  Kullanıcı tarafından onaylı herhangi bir değişiklikten sonra, mümkün olduğunda orijinal başarısız komutu doğrulayın. Daha küçük bir kontrol gerekiyorsa, bunu aynı başarısız ana bilgisayar, URL, kayıt defteri veya hizmetle sınırlı tutun.

  Her zaman tanılama sonuçunun ne anlama geldiğini açıklayın ve sonraki adımı önermeden önce.
---


# Network Troubleshoot

Use this rule as a concise decision guide for developer network failures. Keep diagnostics safe, target-scoped, and read-only. Do not turn this rule into an automated remediation toolkit.

## Safety Boundaries

- Prefer read-only diagnostics and trusted project-provided diagnostic scripts.
- Use the failing host, URL, registry, or service as the default probe target.
- Ask before probing unrelated external services.
- Do not print proxy URLs, credentials, tokens, auth headers, package index URLs, registry hostnames from config, or raw config values in shared output.
- Internal hosts and URLs may be collected for target-scoped local diagnostics, but replace them with placeholders before sharing logs or reports unless the user explicitly approves including them.
- Do not dump local config from npm, pnpm, yarn, pip, Git, Docker, shell, OS proxy, VPN, or certificate stores.
- Do not disable, bypass, or skip TLS or certificate verification.
- Do not change OS networking, DNS, proxy, package manager, Git, Docker, shell, VPN, or trust-store settings without explicit user approval for the exact action.

## Workflow

1. **Collect**: Capture the exact error, failing command, target host/URL/port, OS/shell, proxy/VPN context, and whether the failure affects one target or many.
2. **Classify**: Match the symptom to the most likely category.
3. **Diagnose**: Run only read-only checks scoped to the failing target.
4. **Explain**: Interpret the output before suggesting any fix.
5. **Advise**: Present remediation options as choices and wait for user approval before changing state.
6. **Verify**: Re-run the original failing command or an equivalent target-scoped check.

## Error Classification

| Error Pattern | Likely Category |
|---|---|
| `ECONNREFUSED`, `ERR_CONNECTION_REFUSED`, `Connection refused` | Target service or port is not listening |
| `ECONNRESET`, `socket hang up`, `Connection reset` | Connection dropped by target, proxy, firewall, or middlebox |
| `ETIMEDOUT`, `ERR_CONNECTION_TIMED_OUT`, `timed out` | Routing, firewall, proxy, or target availability |
| `ENOTFOUND`, `EAI_NONAME`, `ERR_NAME_NOT_RESOLVED`, `getaddrinfo` | DNS or hostname issue |
| `ERR_PROXY_CONNECTION_FAILED`, proxy tunnel errors, HTTP `407` | Proxy configuration or proxy authentication |
| `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, `CERT_HAS_EXPIRED`, `self signed`, `ERR_CERT_*` | TLS certificate or local trust issue |
| HTTP `403` | Authorization, IP allowlist, CORS, or policy block |
| HTTP `502`, `503`, `504` | Upstream service, gateway, CDN, or transient server issue |
| `npm ERR! network`, package install timeout, `pip` timeout | Package registry, proxy, DNS, or network path issue |
| `fatal: unable to access`, Git fetch/push timeout | Git remote, proxy, DNS, TLS, or network path issue |

## Safe Target-Scoped Checks

Choose the smallest relevant set. Explain what each command checks before running it.

### Connectivity

Linux/macOS:

```bash
ping -c 4 <target-host>
curl -v telnet://<target-host>:<port> --connect-timeout 5
```

Windows PowerShell:

```powershell
Test-Connection -ComputerName <target-host> -Count 4
Test-NetConnection -ComputerName <target-host> -Port <port>
```

### DNS

Linux/macOS:

```bash
nslookup <target-host>
dig <target-host>                # Linux/macOS, if available
```

Windows PowerShell:

```powershell
Resolve-DnsName <target-host>
```

### HTTP

Linux/macOS:

```bash
curl -vvv -o /dev/null -w "HTTP %{http_code}\nTime: %{time_total}s\nDNS: %{time_namelookup}s\nConnect: %{time_connect}s\nTLS: %{time_appconnect}s\n" https://<target-host>/<path>
curl -I https://<target-host>/<path>
```

Windows PowerShell:

```powershell
$uri = "https://<target-host>/<path>"
try {
  $resp = Invoke-WebRequest -Uri $uri -Method Head -TimeoutSec 10
  "HTTP status: $([int]$resp.StatusCode)"
} catch [Net.WebException] {
  if ($_.Exception.Response) {
    "HTTP status: $([int]$_.Exception.Response.StatusCode)"
  } else {
    "HTTP request failed: $($_.Exception.Message)"
  }
}
```

### TLS

Linux/macOS:

```bash
openssl s_client -connect <target-host>:<port> -servername <target-host> -showcerts </dev/null
echo | openssl s_client -connect <target-host>:<port> -servername <target-host> 2>/dev/null | openssl x509 -noout -subject -issuer -dates
```

Windows PowerShell:

Use `HEAD` and report HTTP statuses separately from TLS or network errors so non-2xx responses are not mislabeled as certificate failures.

```powershell
try {
  $req = [Net.HttpWebRequest]::Create("https://<target-host>:<port>/<path>")
  $req.Method = "HEAD"
  $req.Timeout = 5000

  try {
    $resp = $req.GetResponse()
  } catch [Net.WebException] {
    $resp = $_.Exception.Response
    if ($req.ServicePoint.Certificate) {
      $cert = $req.ServicePoint.Certificate
      "Cert subject: $($cert.Subject)"
      "Cert expires: $($cert.GetExpirationDateString())"
    }
    if ($resp) {
      "HTTP status: $([int]$resp.StatusCode) $($resp.StatusDescription)"
      $resp.Close()
    } else {
      "TLS/network error: $($_.Exception.Message)"
    }
    return
  }

  $cert = $req.ServicePoint.Certificate
  if ($cert) {
    "Cert subject: $($cert.Subject)"
    "Cert expires: $($cert.GetExpirationDateString())"
  }
  "HTTP status: $([int]$resp.StatusCode) $($resp.StatusDescription)"
  $resp.Close()
} catch {
  "TLS/network error: $($_.Exception.Message)"
}
```

### Proxy And Package Managers

For proxy, package manager, Git, Docker, and OS network configuration, avoid raw config reads. Report only whether relevant settings appear present when this can be checked without printing values. If the available command would print a URL, token, internal hostname, auth header, or full config value, do not run it.

Only perform package registry probes when the failed operation already targeted that registry, or after the user approves that exact probe target.

## User-Approved Remediation Options

These are options to discuss with the user, not commands to run automatically.

| Diagnosis | Safe Advice |
|---|---|
| Target service is not listening | Check whether the local or remote service is running and whether the expected port is correct. |
| DNS lookup fails | Check the hostname, hosts-file expectations, DNS service status, or approved DNS changes. |
| Proxy appears required or unavailable | Ask whether the user wants to start or adjust the proxy/VPN, then verify only the approved target. |
| TLS certificate expired | Renew or replace the certificate, fix system time, install a trusted local development CA, or update the trust store. Do not bypass TLS verification. |
| TLS unknown CA | Import the correct CA into the appropriate trust store after the user confirms the source and scope. |
| HTTP `407` | Ask the user to confirm proxy authentication requirements before changing credentials or tool settings. |
| HTTP `403` | Check authentication, API key scope, IP allowlist, CORS policy, or service policy. |
| HTTP `502`/`503`/`504` | Treat as upstream or gateway instability; check status pages when approved and retry with backoff. |
| Package install timeout | Discuss approved registry, proxy, or network-path options without printing or changing stored config values. |
| Git network failure | Discuss approved remote URL, proxy, credential, TLS, or network-path options without changing global Git settings automatically. |
| Docker pull failure | Discuss approved registry mirror, proxy, or daemon settings as a user-approved configuration change. |

## Verification

After any user-approved change, verify with the original failing command whenever possible. If a smaller check is needed, keep it scoped to the same failing host, URL, registry, or service.

Always explain what each diagnostic result means before recommending the next step.
