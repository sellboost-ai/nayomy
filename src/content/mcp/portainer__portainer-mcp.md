---
name: "portainer/portainer-mcp"
description: "A powerful MCP server that enables AI assistants to seamlessly interact with Portainer instances, providing natural language access to container management, deployment operations, and infrastructure monitoring capabilities."
category: "Cloud Platforms"
repo: "portainer/portainer-mcp"
stars: 160
url: "https://github.com/portainer/portainer-mcp"
body_length: 5485
license: "MIT"
language: "Python"
body_tr: |-
  # Portainer MCP

  Portainer'ın resmi MCP sunucusu, [FastMCP](https://github.com/PrefectHQ/fastmcp) aracılığıyla Portainer OpenAPI spec'inden oluşturulmuştur.

  ## Genel Bakış

  Bu MCP sunucusu, Portainer REST API'sini MCP araçları olarak sunar: ortamları listeleyin ve inceleyin, GitOps iş akışlarını yönetin, Docker ve Kubernetes kaynaklarında sorun giderin. Ayrıca her ortamın temel Docker ve K8s API'lerine istekleri proxy'lemeyi destekler.

  MCP sunucusunun minor sürümünü Portainer örneğinizin minor sürümüyle eşleştirin — örneğin MCP sunucusu 2.42.x ile Portainer 2.42.x. Ayrıntılar için [Sürüm uyumluluğu](#sürüm-uyumluluğu) bölümüne bakın.

  ## Başlarken

  MCP sunucusu `uvx` aracılığıyla yerel olarak veya bir container olarak çalıştırılabilir.

  MCP yeteneklerini yerel olarak keşfetmek ve takım tabanlı dağıtım kurulumu için bunu kendi altyapınızda container olarak dağıtmak için ilk yaklaşımı kullanın.

  > [!NOTE]
  > MCP'yi kullanmadan önce, Portainer'da **Hesabım → Erişim tokenları** altında bir API anahtarı oluşturmayı unutmayın, çünkü her iki yolun da buna ihtiyacı vardır.

  ### Tek kullanıcı (stdio via `uvx`)

  MCP sunucusunu yerel olarak test etmenin önerilen yolu. Makinenizde bir stdio işlemi olarak çalışır ve Portainer örneğine doğrudan bağlanır.

  > [!NOTE]
  > `uv` kurulu olmalı ve `PATH`'de kullanılabilir olmalıdır.
  > Bkz. [uv kurulum belgeleri](https://docs.astral.sh/uv/getting-started/installation/).

  Claude Code ile kaydedin:

  ```bash
  claude mcp add portainer \
    -e PORTAINER_URL=https://portainer.example.com \
    -e PORTAINER_API_KEY=ptr_xxxxxxxxxxxxxxxx \
    -- uvx --from "mcp-portainer~=2.42.0" mcp-portainer
  ```

  > [!NOTE]
  > Portainer örneğiniz kendi imzalı TLS sertifikaları kullanıyorsa `PORTAINER_TLS_VERIFY=0` ayarlayın.

  Diğer istemciler için bkz.
  [`docs/distribution/`](https://github.com/portainer/portainer-mcp/tree/main/docs/distribution).
  Diğer istemci talimatları için katkılar memnuniyetle karşılanır!

  ### Takım dağıtımı (container)

  Portainer örneğinizle MCP aracılığıyla etkileşim kuran birden fazla kullanıcınız olması için önerilen yol. İş istasyonlarından kullanıcılar tarafından HTTP üzerinden erişilen, paylaşılan bir bearer sırrı tarafından korunan altyapınızın içinde [`container`](https://hub.docker.com/r/portainer/portainer-mcp) olarak dağıtılır.

  > [!IMPORTANT]
  > Container, HTTP sonlandırır, **HTTPS'yi DEĞİL**, ve kimlik doğrulamayı tek bir paylaşılan bearer olarak sunar.
  > Sır, TLS sonlandırması olmadan istemci ve sunucu arasındaki herhangi bir yolda yakalanabilir.
  > 
  > Bu MCP sunucusunu genel internette sunmak **ÖNERİLMEZ**.
  > 
  > Ön cephede TLS sonlandıran ters proxy olsa bile, bu MCP sunucusunu özel altyapınızda güvenlik altına almak önerilir.

  MCP sunucusunu altyapınızda container olarak çalıştırın:

  ```bash
  docker run -d --name portainer-mcp -p 17717:17717 \
    -e PORTAINER_URL=https://portainer.example.com \
    -e PORTAINER_API_KEY=ptr_xxxxxxxxxxxxxxxx \
    -e PORTAINER_MCP_AUTH_TOKEN="$(openssl rand -hex 32)" \
    -e PORTAINER_MCP_ALLOWED_HOSTS=mcp.example.com:17717 \
    portainer/portainer-mcp:2.42
  ```

  `PORTAINER_MCP_ALLOWED_HOSTS` değerini, kullanıcıların MCP'ye erişmek için kullanacağı hostname veya IP adresine ayarlayın — aksi takdirde DNS-rebinding allowlist isteği 421-reddeder.

  `PORTAINER_MCP_AUTH_TOKEN` HTTP modunda **gereklidir**. MCP'ye erişimi kontrol etmek için anahtarı sağlar, bu tokeni kullanıcılara dağıtın; MCP istemcileri bunu `Authorization` başlığı aracılığıyla gönderecektir.

  MCP endpoint'ini Claude Code'a ekleme:
  ```bash
  claude mcp add portainer --transport http http://mcp.example.com:17717/mcp --header "Authorization: Bearer <token>"
  ```

  ### Hijyen becerisi (önerilen)

  Bu depo, Claude Code becerisini ([`portainer-mcp-hygiene`](https://github.com/portainer/portainer-mcp/blob/main/skills/portainer-mcp-hygiene/SKILL.md)) içerir ve modelin MCP'yi verimli bir şekilde sorgulamasına ve yanıtları context içinde tutmasına yardımcı olur. Sunucuyla aynı etikete sabitlenmiş şekilde kullanıcı genelinde yükleyin:

  ```bash
  mkdir -p ~/.claude/skills/portainer-mcp-hygiene && \
    curl -fsSL https://raw.githubusercontent.com/portainer/portainer-mcp/2.42.0/skills/portainer-mcp-hygiene/SKILL.md \
    -o ~/.claude/skills/portainer-mcp-hygiene/SKILL.md
  ```

  Beceri sunucu yükseltmesiyle senkronize kalması için her sunucu yükseltmesinde yeniden çalıştırılması önerilir.

  ## MCP sunucusu yeteneklerini kısıtlama ve genişletme

  MCP sunucusu varsayılan olarak aşağıdaki yetenekler etkinleştirilmiş şekilde gelir:
  * Temel Portainer işlem desteği (ayarlar, sürüm, ortamlar...)
  * Docker işlem desteği
  * Kubernetes işlem desteği
  * Docker ve Kubernetes proxy desteği

  Bu yetenek setini kısıtlamak veya genişletmek için bkz. [`docs/profiles.md`](https://github.com/portainer/portainer-mcp/blob/main/docs/profiles.md).

  ## Sürüm uyumluluğu

  **MCP sunucusunun minor'ını Portainer minor'ınıza eşleştirin.** Major+minor, gömülü spec'in hedeflediği Portainer API sürümünü izler.

  | Sunucu sürümü | Portainer (CE / EE) |
  | ------------- | ------------------- |
  | `2.42.x`      | `2.42.x`            |
  | `2.41.x`      | `2.41.x`            |

  Sürüm politikası hakkında daha fazla bilgi için [`docs/versioning.md`](https://github.com/portainer/portainer-mcp/blob/main/docs/versioning.md) bölümüne bakın.

  ## Yapılandırma

  MCP sunucusu aşağıdakiler gibi farklı yetenekleri sunar:
  * Belirli profil yapılandırmasına göre farklı araç seti etkinleştirme
  * Kapatmak için ekstra etiketleri belirterek API kapsamını genişletme
  * Yalnızca salt okunur yetenekleri gösterme
  * Proxy yeteneklerini devre dışı bırakma

  MCP sunucusu yapılandırması hakkında daha fazla bilgi için [`docs/configuration.md`](https://github.com/portainer/portainer-mcp/blob/main/docs/configuration.md) bölümüne bakın.
---

# Portainer MCP

Official MCP server for Portainer, generated from the Portainer OpenAPI spec via [FastMCP](https://github.com/PrefectHQ/fastmcp).

## Overview

This MCP server exposes the Portainer REST API as MCP tools: list and inspect environments, manage GitOps workflows, troubleshoot Docker and Kubernetes resources. It also supports proxying requests to the underlying Docker and K8s APIs of each environment.

Match the MCP server's minor version to your Portainer instance's minor — e.g. MCP server 2.42.x with Portainer 2.42.x. See [Version compatibility](#version-compatibility) for details.

## Getting started

The MCP server can be executed locally via `uvx` or as a container.

Use the first approach to explore the MCP capabilities locally and deploy it inside your infrastructure as a container for a team based deployment setup.

> [!NOTE]
> Before using the MCP, make sure to generate an API key in Portainer under **My Account → Access tokens** first as both paths need it.

### Single user (stdio via `uvx`)

The recommended way to test the MCP server locally. Runs as a stdio process on your machine and connects directly to the Portainer instance.

> [!NOTE]
> `uv` must be installed and available on `PATH`.
> See [the uv install docs](https://docs.astral.sh/uv/getting-started/installation/).

Register with Claude Code:

```bash
claude mcp add portainer \
  -e PORTAINER_URL=https://portainer.example.com \
  -e PORTAINER_API_KEY=ptr_xxxxxxxxxxxxxxxx \
  -- uvx --from "mcp-portainer~=2.42.0" mcp-portainer
```

> [!NOTE]
> Set `PORTAINER_TLS_VERIFY=0` if your Portainer instance uses self-signed TLS certificates.

For other clients, see
[`docs/distribution/`](https://github.com/portainer/portainer-mcp/tree/main/docs/distribution).
Contributions for other client instructions are welcome!

### Team deployment (container)

The recommended way to have multiple users interacting with your Portainer instance via MCP. Deployed as a [`container`](https://hub.docker.com/r/portainer/portainer-mcp) inside your infrastructure, accessed by users from their workstations over HTTP, gated by a shared bearer secret.

> [!IMPORTANT]
> The container terminates HTTP, **NOT HTTPS**, and serves auth as a single shared bearer.
> The secret can be intercepted on any path between client and server without TLS termination.
> 
> It is **NOT** recommended to expose this MCP server on the public internet.
> 
> Even with a TLS-terminating reverse proxy in front, the recommendation is to gate this MCP server inside your private infrastructure.

Run the MCP server as a container in your infrastructure:

```bash
docker run -d --name portainer-mcp -p 17717:17717 \
  -e PORTAINER_URL=https://portainer.example.com \
  -e PORTAINER_API_KEY=ptr_xxxxxxxxxxxxxxxx \
  -e PORTAINER_MCP_AUTH_TOKEN="$(openssl rand -hex 32)" \
  -e PORTAINER_MCP_ALLOWED_HOSTS=mcp.example.com:17717 \
  portainer/portainer-mcp:2.42
```

Set `PORTAINER_MCP_ALLOWED_HOSTS` to the hostname or IP address that users will use to reach the MCP — otherwise the DNS-rebinding allowlist 421-rejects the request.

`PORTAINER_MCP_AUTH_TOKEN` is **required** in HTTP mode. It provides the key to gate access to the MCP, distribute this token to the users; their MCP client will send it via the `Authorization` header.

Adding the MCP endpoint on Claude Code:
```bash
claude mcp add portainer --transport http http://mcp.example.com:17717/mcp --header "Authorization: Bearer <token>"
```

### Hygiene skill (recommended)

This repo ships a Claude Code skill ([`portainer-mcp-hygiene`](https://github.com/portainer/portainer-mcp/blob/main/skills/portainer-mcp-hygiene/SKILL.md)) that helps the model query the MCP efficiently and keep responses within context. Install user-wide, pinned to the same tag as the server:

```bash
mkdir -p ~/.claude/skills/portainer-mcp-hygiene && \
  curl -fsSL https://raw.githubusercontent.com/portainer/portainer-mcp/2.42.0/skills/portainer-mcp-hygiene/SKILL.md \
  -o ~/.claude/skills/portainer-mcp-hygiene/SKILL.md
```

It is recommended to re-run on each server upgrade so the skill stays in sync.

## Restricting and expanding the MCP server capabilities

The MCP server comes with the following capabilities enabled by default:
* Basic Portainer operation support (settings, version, environments...)
* Docker operation support
* Kubernetes operation support
* Docker and Kubernetes proxy support

For restricting or expanding this set of capabilities, see [`docs/profiles.md`](https://github.com/portainer/portainer-mcp/blob/main/docs/profiles.md).

## Version compatibility

**Match the MCP server's minor to your Portainer minor.** The major+minor tracks the Portainer API version the embedded spec targets.

| Server version | Portainer (CE / EE) |
| -------------- | ------------------- |
| `2.42.x`       | `2.42.x`            |
| `2.41.x`       | `2.41.x`            |

For more information about the versioning policy, see [`docs/versioning.md`](https://github.com/portainer/portainer-mcp/blob/main/docs/versioning.md).

## Configuration

The MCP server exposes different capabilities such as:
* Enable different set of tools based on specific profile configuration
* Widen the API coverage by specifying extra tags to cover
* Expose only read-only capabilities
* Disable proxy capabilities

For more information about the MCP server configuration, refer to [`docs/configuration.md`](https://github.com/portainer/portainer-mcp/blob/main/docs/configuration.md).
