---
name: "network-troubleshoot"
clean_name: "Network Troubleshoot"
description: "Systematic, safety-first network troubleshooting for developers"
description_tr: "Geliştiriciler için sistematik ve güvenlik odaklı ağ sorun giderme"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/network-troubleshoot.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/network-troubleshoot.mdc"
body_length: 7931
file_extension: ".mdc"
body_tr: |-
  # Ağ Sorun Giderme

  Bu kuralı geliştirici ağ hatalarına yönelik kısa bir karar rehberi olarak kullanın. Tanılamaları güvenli, hedef kapsamlı ve salt okunur tutun. Bu kuralı otomatik düzeltme araç takımına dönüştürmeyin.

  ## Güvenlik Sınırları

  - Salt okunur tanılamaları ve projenin sağladığı güvenilen tanılama betiklerini tercih edin.
  - Başarısız olan ana bilgisayarı, URL'yi, kayıt defterini veya hizmeti varsayılan probe hedefi olarak kullanın.
  - İlgisiz dış hizmetleri yoklamadan önce sorun.
  - Proxy URL'leri, kimlik bilgileri, token'ları, auth başlıklarını, paket dizini URL'lerini, kayıt defteri ana bilgisayar adlarını veya ham config değerlerini paylaşılan çıktıda yazdırmayın.
  - İç ana bilgisayarlar ve URL'ler hedef kapsamlı yerel tanılamalar için toplanabilir, ancak kullanıcı açıkça onay vermediği sürece günlükleri veya raporları paylaşmadan önce bunları yer tutucularla değiştirin.
  - npm, pnpm, yarn, pip, Git, Docker, shell, OS proxy, VPN veya sertifika depolarından yerel config'i dökmeyim.
  - TLS'yi veya sertifika doğrulamasını devre dışı bırakmayın, atlayın veya atlayın.
  - Açık kullanıcı onayı olmadan OS ağını, DNS'yi, proxy'yi, paket yöneticisini, Git'i, Docker'ı, shell'i, VPN'yi veya güven deposunu değiştirmeyin.

  ## İş Akışı

  1. **Topla**: Tam hatayı, başarısız olan komutu, hedef ana bilgisayarı/URL/port'u, OS/shell'i, proxy/VPN bağlamını ve hatanın bir hedefi mi yoksa çoğunu mu etkilediğini yakala.
  2. **Sınıflandır**: Belirtiyi en olası kategoriye eşle.
  3. **Tanı Koy**: Yalnızca başarısız olan hedef kapsamlı salt okunur kontroller çalıştır.
  4. **Açıkla**: Herhangi bir düzeltme önermeden önce çıktıyı yorumla.
  5. **Tavsi Et**: Düzeltme seçeneklerini seçenekler olarak sun ve durum değiştirmeden önce kullanıcı onayını bekle.
  6. **Doğrula**: Orijinal başarısız komutu veya eşdeğer hedef kapsamlı bir kontrolü yeniden çalıştır.

  ## Hata Sınıflandırması

  | Hata Deseni | Olası Kategori |
  |---|---|
  | `ECONNREFUSED`, `ERR_CONNECTION_REFUSED`, `Connection refused` | Hedef hizmet veya port dinlemiyordur |
  | `ECONNRESET`, `socket hang up`, `Connection reset` | Hedef, proxy, firewall veya ara yazılım tarafından bağlantı kesildi |
  | `ETIMEDOUT`, `ERR_CONNECTION_TIMED_OUT`, `timed out` | Yönlendirme, firewall, proxy veya hedef kullanılabilirliği |
  | `ENOTFOUND`, `EAI_NONAME`, `ERR_NAME_NOT_RESOLVED`, `getaddrinfo` | DNS veya ana bilgisayar adı sorunu |
  | `ERR_PROXY_CONNECTION_FAILED`, proxy tunnel hataları, HTTP `407` | Proxy yapılandırması veya proxy kimlik doğrulaması |
  | `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, `CERT_HAS_EXPIRED`, `self signed`, `ERR_CERT_*` | TLS sertifikası veya yerel güven sorunu |
  | HTTP `403` | Yetkilendirme, IP allowlist, CORS veya politika bloğu |
  | HTTP `502`, `503`, `504` | Upstream hizmet, gateway, CDN veya geçici sunucu sorunu |
  | `npm ERR! network`, paket yükleme zaman aşımı, `pip` zaman aşımı | Paket kayıt defteri, proxy, DNS veya ağ yolu sorunu |
  | `fatal: unable to access`, Git fetch/push zaman aşımı | Git uzak konumu, proxy, DNS, TLS veya ağ yolu sorunu |

  ## Güvenli Hedef Kapsamlı Kontroller

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
  dig <target-host>                # Linux/macOS, eğer mevcutsa
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

  `HEAD` kullanın ve HTTP durumlarını TLS veya ağ hatalarından ayrı olarak bildirin, böylece 2xx dışı yanıtlar sertifika hatası olarak yanlış etiketlenmez.

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

  Proxy, paket yöneticisi, Git, Docker ve OS ağ yapılandırması için ham config okumasından kaçının. Bu, değerleri yazdırmadan kontrol edilebilirken yalnızca ilgili ayarların mevcut olduğu görülüp görülmeyeceğini bildirin. Mevcut komut bir URL, token, dahili ana bilgisayar adı, auth başlığı veya tam config değerini yazdıracaksa, bunu çalıştırmayın.

  Paket kayıt defteri sondalarını yalnızca başarısız işlem zaten bu kayıt defterini hedeflediğinde veya kullanıcı bu tam probe hedefini onayladıktan sonra gerçekleştirin.

  ## Kullanıcı Onayı Alınmış Düzeltme Seçenekleri

  Bunlar otomatik olarak çalıştırılacak komutlar değil, kullanıcı ile tartışılacak seçeneklerdir.

  | Tanı | Güvenli Tavsi |
  |---|---|
  | Hedef hizmet dinlemiyordur | Yerel veya uzak hizmetin çalışıp çalışmadığını ve beklenen portun doğru olup olmadığını kontrol edin. |
  | DNS araması başarısız olur | Ana bilgisayar adını, hosts dosyası beklentilerini, DNS hizmet durumunu veya onaylı DNS değişikliklerini kontrol edin. |
  | Proxy gerekli veya kullanılamaz görünüyor | Kullanıcıya proxy/VPN'yi başlatmak veya ayarlamak isteyip istemediğini sorun, ardından yalnızca onaylı hedefi doğrulayın. |
  | TLS sertifikası süresi doldu | Sertifikayı yenileyin veya değiştirin, sistem saatini düzeltim, güvenilir yerel geliştirme CA'sı yükleyin veya güven deposunu güncelleyin. TLS doğrulamasını atlayın. |
  | TLS bilinmeyen CA | Kullanıcı kaynağı ve kapsamı onayladıktan sonra doğru CA'yı uygun güven deposuna aktarın. |
  | HTTP `407` | Kullanıcıdan proxy kimlik doğrulama gereksinimlerini onaylamasını isteyin, ardından kimlik bilgilerini veya araç ayarlarını değiştirmeyin. |
  | HTTP `403` | Kimlik doğrulamayı, API anahtarı kapsamını, IP allowlist'i, CORS politikasını veya hizmet politikasını kontrol edin. |
  | HTTP `502`/`503`/`504` | Upstream veya gateway instabilitesi olarak değerlendirin; onaylandığında durum sayfalarını kontrol edin ve geri alma ile yeniden deneyin. |
  | Paket yükleme zaman aşımı | Depolanan config değerlerini yazdırmadan veya değiştirmeden onaylı kayıt defteri, proxy veya ağ yolu seçeneklerini tartışın. |
  | Git ağ hatası | Global Git ayarlarını otomatik olarak değiştirmeden onaylı uzak URL, proxy, kimlik bilgisi, TLS veya ağ yolu seçeneklerini tartışın. |
  | Docker pull hatası | Onaylı kayıt defteri aynası, proxy veya daemon ayarlarını kullanıcı onayı yapılan yapılandırma değişikliği olarak tartışın. |

  ## Doğrulama

  Herhangi bir kullanıcı onayı alınmış değişiklikten sonra mümkün olduğunca orijinal başarısız komutu kullanarak doğrulayın. Daha küçük bir kontrol gerekiyorsa, bunu aynı başarısız olan ana bilgisayar, URL, kayıt defteri veya hizmete kapsamlı tutun.

  Herhangi bir tanı sonucunun ne anlama geldiğini açıklamadan sonra bir sonraki adımı her zaman tavsiye edin.
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
