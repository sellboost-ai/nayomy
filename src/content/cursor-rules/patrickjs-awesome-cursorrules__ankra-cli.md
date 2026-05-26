---
name: "ankra-cli"
clean_name: "Ankra CLI"
description: "Ankra CLI rules and best practices for managing Kubernetes clusters via the Ankra platform"
description_tr: "Ankra CLI kuralları ve Ankra platformu aracılığıyla Kubernetes clusterlarını yönetmek için en iyi uygulamalar"
category: "Tools"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/ankra-cli.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/ankra-cli.mdc"
body_length: 7080
file_extension: ".mdc"
body_tr: |-
  # Ankra CLI En İyi Uygulamaları

  Ankra, bir Kubernetes küme yönetim platformudur. CLI aracı (`ankra`), kuruluşları, kümeleri, eklentileri, yığınları, Helm sürümlerini, kimlik bilgilerini ve tokenları terminalden yönetmenizi sağlar.

  ## Kimlik Doğrulama & Yapılandırma

  - Önce kimlik doğrulaması yapın: `ankra login`
  - Varsayılan yapılandırma `~/.ankra.yaml` konumundadır; `--config <path>` ile geçersiz kılın
  - API base URL'sini `--base-url` veya `ANKRA_BASE_URL` ile geçersiz kılın
  - `--token` veya `ANKRA_API_TOKEN` ile API token sağlayın (CI'da env var tercih edin)
  - Temiz şekilde çıkış yapın: `ankra logout`

  ```yaml
  # ~/.ankra.yaml örneği
  base_url: https://api.ankra.io
  token: ${ANKRA_API_TOKEN}
  ```

  ## Kuruluş Yönetimi

  ```bash
  ankra org list                          # Erişilebilir kuruluşları listele
  ankra org switch <org-name>             # Aktif kuruluşu değiştir
  ankra org create <name>                 # Yeni kuruluş oluştur
  ankra org invite <email>                # Mevcut kuruluşa kullanıcı davet et
  ankra org members                       # Mevcut kuruluşun üyelerini listele
  ```

  ## Küme Yaşam Döngüsü

  ```bash
  ankra cluster list                      # Kuruluştaki tüm kümeleri listele
  ankra cluster select <name>             # Aktif küme bağlamını ayarla
  ankra cluster info                      # Aktif küme hakkında detayları göster
  ankra cluster provision                 # Yeni küme provizyon et
  ankra cluster deprovision               # Kümeyi deprovizyon et (sil)
  ankra cluster reconcile                 # Kümeyi istenen duruma uzlaştır
  ankra delete cluster <name>             # Adlandırılmış kümeyi sil
  ```

  - Yıkıcı işlemler yapmadan önce her zaman `ankra cluster info` çalıştırın
  - Yapılandırma değişikliklerinden sonra durumun doğru olduğunu varsaymadan önce `ankra cluster reconcile` kullanın

  ## Eklentiler

  ```bash
  ankra cluster addons list               # Yüklü eklentileri listele
  ankra cluster addons available          # Yüklenebilir eklentileri listele
  ankra cluster addons settings <addon>   # Bir eklentinin mevcut ayarlarını göster
  ankra cluster addons update <addon>     # Eklenti yapılandırmasını güncelle
  ankra cluster addons uninstall <addon>  # Eklentiyi kaldır
  ```

  ## Yığınlar (Uygulama Yığınları)

  ```bash
  ankra cluster stacks list               # Kümedeki yığınları listele
  ankra cluster stacks create <name>      # Yeni yığın oluştur
  ankra cluster stacks delete <name>      # Yığını sil
  ankra cluster stacks rename <old> <new> # Yığını yeniden adlandır
  ankra cluster stacks clone <src> <dst>  # Yığını klonla
  ankra cluster stacks history <name>     # Yığın değişim geçmişini görüntüle
  ```

  - Mevcut çalışan bir yığını çoğaltırken `create` yerine `clone` kullanmayı tercih edin
  - Geri almadan önce ne değiştiğini anlamak için `history` kontrol edin

  ## Manifestler & İşlemler

  ```bash
  ankra cluster manifests list            # Dağıtılmış manifestleri listele
  ankra cluster operations list           # Devam eden veya son işlemleri listele
  ankra cluster operations cancel <id>    # Çalışan bir işlemi iptal et
  ```

  ## Küme Aracısı

  ```bash
  ankra cluster agent status              # Aracı sağlığını kontrol et
  ankra cluster agent token               # Aracı bootstrap tokenini al
  ankra cluster agent upgrade             # Küme içi aracıyı yükselt
  ```

  - Küme komutları yanıt vermezse `agent status` çalıştırın
  - Güvenlik için aracı tokenini düzenli olarak döndürün

  ## Helm

  ```bash
  ankra cluster helm releases             # Kümedeki Helm sürümlerini listele
  ankra cluster helm uninstall <release>  # Helm sürümünü kaldır
  ankra helm registries                   # Yapılandırılmış Helm kayıt defterlerini listele
  ankra helm credentials                  # Helm kayıt defteri kimlik bilgilerini listele
  ```

  ## Hetzner Cloud Kümeleri

  ```bash
  ankra cluster hetzner create            # Hetzner destekli küme oluştur
  ankra cluster hetzner scale             # Küme düğüm sayısını ölçekle
  ankra cluster hetzner upgrade           # Kubernetes sürümünü yükselt
  ankra cluster hetzner workers           # Worker düğüm gruplarını yönet
  ankra cluster hetzner node-group        # Düğüm grubu yönetimi
  ```

  ## Grafikler

  ```bash
  ankra charts list                       # Mevcut grafikleri listele
  ankra charts search <term>              # Grafikleri ara
  ankra charts info <chart>               # Ayrıntılı grafik bilgisi
  ```

  ## Kimlik Bilgileri

  ```bash
  ankra credentials list                              # Depolanan kimlik bilgilerini listele
  ankra credentials get <name>                        # Kimlik bilgisi al
  ankra credentials validate <name>                   # Kimlik bilgisini doğrula
  ankra credentials delete <name>                     # Kimlik bilgisini sil
  ankra credentials hetzner --name <n> --token <t>   # Hetzner API tokenini depola
  ankra credentials ovh ...                           # OVH kimlik bilgilerini depola
  ankra credentials upcloud ...                       # UpCloud kimlik bilgilerini depola
  ```

  - Kimlik bilgilerini kaynak kontrolüne asla commit etmeyin; `ANKRA_API_TOKEN` env var kullanın
  - Oluşturmadan hemen sonra kimlik bilgilerini doğrulayın: `ankra credentials validate <name>`

  ## Tokenler (API Tokenları)

  ```bash
  ankra tokens list                       # API tokenlarını listele
  ankra tokens create --name <name>       # Yeni API token oluştur
  ankra tokens revoke <id>                # Token'ı iptal et (kayıt tutar)
  ankra tokens delete <id>                # Token'ı kalıcı olarak sil
  ```

  ## Yapay Zeka Sorun Giderme

  ```bash
  ankra chat                              # Yapay zeka destekli sorun giderme oturumunu başlat
  ```

  Belirsiz hatayla karşılaştığınızda `ankra chat` kullanın — bağlamsal rehberlik sağlar.

  ## Genel Bayraklar

  | Bayrak | Env Var | Açıklama |
  |--------|---------|----------|
  | `--base-url <url>` | `ANKRA_BASE_URL` | API base URL'sini geçersiz kıl |
  | `--token <token>` | `ANKRA_API_TOKEN` | API kimlik doğrulama tokeni |
  | `--config <path>` | — | Yapılandırma dosyasının yolu (varsayılan `~/.ankra.yaml`) |

  ## Komut Dosyası Oluşturma & Otomasyon İpuçları

  - CI ardışık düzenlerinde `ANKRA_API_TOKEN` dışa aktarın; tokenları sabit kodlamayın
  - Env var enjeksiyonunun mümkün olmadığı tek seferlik komut dosyaları için `--token` kullanın
  - Komut dosyalarında küme kapsamlı komutlardan önce `ankra cluster select` zincirleyin
  - JSON çıktısı mevcut olduğunda yapılandırılmış işleme için çıktıyı `jq` aracılığıyla ilettin
  - Async işlem tamamlanmasını yoklamak için CI'da `ankra cluster operations list` kullanın
  - Ankra CLI kullanan shell komut dosyalarına `set -euo pipefail` ekleyin

  ## Yaygın İş Akışları

  ### Yeni bir Hetzner kümesi provizyon edin ve yapılandırın

  ```bash
  ankra login
  ankra org switch my-org
  ankra cluster hetzner create
  ankra cluster select my-new-cluster
  ankra cluster agent status
  ankra cluster addons available
  ankra cluster addons update some-addon
  ankra cluster reconcile
  ```

  ### Bir grafikten yığın dağıtın

  ```bash
  ankra cluster select my-cluster
  ankra charts search my-app
  ankra charts info my-app
  ankra cluster stacks create my-stack
  ankra cluster manifests list
  ```

  ### Kimlik bilgilerini güvenli şekilde döndürün

  ```bash
  ankra tokens create --name ci-token-new
  # CI sırrını yeni tokenle güncelleyin
  ankra tokens revoke <old-token-id>
  ankra credentials validate my-cloud-cred
  ```
---

# Ankra CLI Best Practices

Ankra is a Kubernetes cluster management platform. Its CLI (`ankra`) lets you manage organisations, clusters, add-ons, stacks, Helm releases, credentials, and tokens from the terminal.

## Authentication & Configuration

- Authenticate first: `ankra login`
- Default config lives at `~/.ankra.yaml`; override with `--config <path>`
- Override the API base URL with `--base-url` or `ANKRA_BASE_URL`
- Supply an API token via `--token` or `ANKRA_API_TOKEN` (prefer env var in CI)
- Logout cleanly: `ankra logout`

```yaml
# ~/.ankra.yaml example
base_url: https://api.ankra.io
token: ${ANKRA_API_TOKEN}
```

## Organisation Management

```bash
ankra org list                          # List accessible organisations
ankra org switch <org-name>             # Switch active organisation
ankra org create <name>                 # Create a new organisation
ankra org invite <email>                # Invite a user to the current org
ankra org members                       # List members of the current org
```

## Cluster Lifecycle

```bash
ankra cluster list                      # List all clusters in the org
ankra cluster select <name>             # Set the active cluster context
ankra cluster info                      # Show details about the active cluster
ankra cluster provision                 # Provision a new cluster
ankra cluster deprovision               # Deprovision (destroy) the active cluster
ankra cluster reconcile                 # Reconcile cluster to desired state
ankra delete cluster <name>             # Delete a named cluster
```

- Always run `ankra cluster info` before destructive operations
- Use `ankra cluster reconcile` after config changes before assuming state is correct

## Add-ons

```bash
ankra cluster addons list               # List installed add-ons
ankra cluster addons available          # List available (installable) add-ons
ankra cluster addons settings <addon>   # Show current settings for an add-on
ankra cluster addons update <addon>     # Update add-on configuration
ankra cluster addons uninstall <addon>  # Uninstall an add-on
```

## Stacks (Application Stacks)

```bash
ankra cluster stacks list               # List stacks in the cluster
ankra cluster stacks create <name>      # Create a new stack
ankra cluster stacks delete <name>      # Delete a stack
ankra cluster stacks rename <old> <new> # Rename a stack
ankra cluster stacks clone <src> <dst>  # Clone a stack
ankra cluster stacks history <name>     # View stack change history
```

- Prefer `clone` over `create` when replicating an existing working stack
- Check `history` before rolling back to understand what changed

## Manifests & Operations

```bash
ankra cluster manifests list            # List deployed manifests
ankra cluster operations list           # List in-progress or recent operations
ankra cluster operations cancel <id>    # Cancel a running operation
```

## Cluster Agent

```bash
ankra cluster agent status              # Check agent health
ankra cluster agent token               # Retrieve agent bootstrap token
ankra cluster agent upgrade             # Upgrade the in-cluster agent
```

- Run `agent status` if cluster commands seem unresponsive
- Rotate the agent token periodically for security

## Helm

```bash
ankra cluster helm releases             # List Helm releases in the cluster
ankra cluster helm uninstall <release>  # Uninstall a Helm release
ankra helm registries                   # List configured Helm registries
ankra helm credentials                  # List Helm registry credentials
```

## Hetzner Cloud Clusters

```bash
ankra cluster hetzner create            # Create a Hetzner-backed cluster
ankra cluster hetzner scale             # Scale the cluster node count
ankra cluster hetzner upgrade           # Upgrade Kubernetes version
ankra cluster hetzner workers           # Manage worker node groups
ankra cluster hetzner node-group        # Node group management
```

## Charts

```bash
ankra charts list                       # List available charts
ankra charts search <term>              # Search charts
ankra charts info <chart>               # Detailed chart information
```

## Credentials

```bash
ankra credentials list                              # List stored credentials
ankra credentials get <name>                        # Retrieve a credential
ankra credentials validate <name>                   # Validate a credential
ankra credentials delete <name>                     # Delete a credential
ankra credentials hetzner --name <n> --token <t>   # Store Hetzner API token
ankra credentials ovh ...                           # Store OVH credentials
ankra credentials upcloud ...                       # Store UpCloud credentials
```

- Never commit credentials to source control; use `ANKRA_API_TOKEN` env var
- Validate credentials immediately after creation: `ankra credentials validate <name>`

## Tokens (API Tokens)

```bash
ankra tokens list                       # List API tokens
ankra tokens create --name <name>       # Create a new API token
ankra tokens revoke <id>                # Revoke a token (keeps record)
ankra tokens delete <id>                # Permanently delete a token
```

## AI Troubleshooting

```bash
ankra chat                              # Start AI-powered troubleshooting session
```

Use `ankra chat` when facing ambiguous errors — it provides contextual guidance.

## Global Flags

| Flag | Env Var | Description |
|------|---------|-------------|
| `--base-url <url>` | `ANKRA_BASE_URL` | Override API base URL |
| `--token <token>` | `ANKRA_API_TOKEN` | API authentication token |
| `--config <path>` | — | Path to config file (default `~/.ankra.yaml`) |

## Scripting & Automation Tips

- Export `ANKRA_API_TOKEN` in CI pipelines; never hard-code tokens
- Use `--token` for one-off scripts where env var injection is not possible
- Chain `ankra cluster select` before cluster-scoped commands in scripts
- Pipe output through `jq` for structured processing where JSON output is available
- Use `ankra cluster operations list` in CI to poll for async operation completion
- Add `set -euo pipefail` to shell scripts using the Ankra CLI

## Common Workflows

### Provision and configure a new Hetzner cluster

```bash
ankra login
ankra org switch my-org
ankra cluster hetzner create
ankra cluster select my-new-cluster
ankra cluster agent status
ankra cluster addons available
ankra cluster addons update some-addon
ankra cluster reconcile
```

### Deploy a stack from a chart

```bash
ankra cluster select my-cluster
ankra charts search my-app
ankra charts info my-app
ankra cluster stacks create my-stack
ankra cluster manifests list
```

### Rotate credentials safely

```bash
ankra tokens create --name ci-token-new
# Update CI secret with new token
ankra tokens revoke <old-token-id>
ankra credentials validate my-cloud-cred
```
