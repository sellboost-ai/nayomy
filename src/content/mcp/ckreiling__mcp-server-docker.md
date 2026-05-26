---
name: "ckreiling/mcp-server-docker"
description: "Integrate with Docker to manage containers, images, volumes, and networks."
description_tr: "Docker ile entegre olarak container, image, volume ve network yönetimi yapabilirsiniz."
category: "Developer Tools"
repo: "ckreiling/mcp-server-docker"
stars: 719
url: "https://github.com/ckreiling/mcp-server-docker"
body_length: 5443
license: "GPL-3.0"
language: "Python"
body_tr: |-
  # 🐋 Docker MCP server

  Doğal dil ile Docker'ı yönetmek için bir MCP sunucusu!

  ## 🪩 Ne yapabilir?

  - 🚀 Doğal dil ile containerları compose edin
  - 🔍 Çalışan containerları inceleyip debug edin
  - 📀 Docker volume'ler ile kalıcı verileri yönetin

  ## ❓ Bu kimin için?

  - Sunucu yöneticileri: uzak Docker engine'lerine bağlanarak örneğin herkese açık bir web sitesini yönetin.
  - Meraklılar: containerları yerel olarak çalıştırın ve Docker destekleyen açık kaynak uygulamalarla deneyler yapın.
  - AI meraklıları: bir LLM'nin yapabileceklerinin sınırlarını zorlayın!

  ## Demo

  Doğal dil kullanarak WordPress dağıtımını gösteren hızlı bir demo:

  https://github.com/user-attachments/assets/65e35e67-bce0-4449-af7e-9f4dd773b4b3

  ## 🏎️ Hızlı Başlangıç

  ### Kurulum

  #### Claude Desktop

  MacOS'ta: `~/Library/Application\ Support/Claude/claude_desktop_config.json`

  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  <details>
    <summary>PyPi'den uv ile kurun</summary>

  `uv` yüklü değilse, sisteminiz için kurulum talimatlarını izleyin:
  [link](https://docs.astral.sh/uv/getting-started/installation/#installation-methods)

  Ardından MCP sunucuları dosyanıza aşağıdakini ekleyin:

  ```
  "mcpServers": {
    "mcp-server-docker": {
      "command": "uvx",
      "args": [
        "mcp-server-docker"
      ]
    }
  }
  ```

  </details>

  <details>
    <summary>Docker ile kurun</summary>

  Sadece kolaylık için sunucu bir Docker container'ında çalışabilir.

  Bu repository'yi klonladıktan sonra Docker image'ını oluşturun:

  ```bash
  docker build -t mcp-server-docker .
  ```

  Ardından MCP sunucuları dosyanıza aşağıdakini ekleyin:

  ```
  "mcpServers": {
    "mcp-server-docker": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-v",
        "/var/run/docker.sock:/var/run/docker.sock",
        "mcp-server-docker:latest"
      ]
    }
  }
  ```

  Docker soketini bir volume olarak mount ettiğimize dikkat edin; bu MCP sunucusunun yerel Docker daemon'una bağlanmasını ve kontrol etmesini sağlar.

  </details>

  ## 📝 Promptlar

  ### 🎻 `docker_compose`

  Doğal dil kullanarak containerları compose edin. Demo için [yukarıya](#demo) bakın.

  Bir Project Name'i ve istediğiniz containerların tanımını sağlayın ve LLM'nin geri kalanını yapmasına izin verin.

  Bu prompt, LLM'yi bir `plan+apply` döngüsüne girmesi için talimatlandırır. LLM ile etkileşiminiz aşağıdaki adımları içerecektir:

  1. LLM'ye hangi containerların ayağa kaldırılacağı hakkında talimatlar verirsiniz
  2. LLM kısa bir doğal dil planı hesaplar ve size sunun
  3. Siz şunlardan birini yaparsınız:
     - Planı uygulayın
     - LLM'ye geri bildirim verin ve LLM planı yeniden hesaplayın

  #### Örnekler

  - name: `nginx`, containers: "nginx container'ını deploy edin ve 9000 portunda expose edin"
  - name: `wordpress`, containers: "WordPress container'ı ve destekleyici bir MySQL container'ı deploy edin, WordPress'i 9000 portunda expose edin"

  #### Bir Projeyi Devam Ettirme

  Bu prompt ile yeni bir sohbet başlatırken, LLM verilen proje `name` ile oluşturulan container'lar, volume'ler ve ağların durumunu alacaktır.

  Bu esas olarak birçok container'dan sorumlu bir sohbeti kaybetmeniz durumunda temizleme için yararlıdır.

  ## 📔 Kaynaklar

  Sunucu her container için bir kaç resource uygular:

  - Stats: Bir container için CPU, bellek vb.
  - Logs: Bir container'dan bazı logları tail edin

  ## 🔨 Araçlar

  ### Containerlar

  - `list_containers`
  - `create_container`
  - `run_container`
  - `recreate_container`
  - `start_container`
  - `fetch_container_logs`
  - `stop_container`
  - `remove_container`

  ### İmajlar

  - `list_images`
  - `pull_image`
  - `push_image`
  - `build_image`
  - `remove_image`

  ### Ağlar

  - `list_networks`
  - `create_network`
  - `remove_network`

  ### Volume'ler

  - `list_volumes`
  - `create_volume`
  - `remove_volume`

  ## 🚧 Sorumluluk Reddi

  ### Hassas Veriler

  **CONTAINERLARI HASSAS VERİLERLE YAPILANDIRMAYIN.** Buna API anahtarları, veritabanı şifreleri vb. dahildir.

  LLM ile değiş tokuş edilen herhangi bir hassas veri, LLM yerel makinenizde çalışmıyorsa doğal olarak tehlikelidir.

  Sırları containerları güvenli bir şekilde iletmekle ilgileniyorsanız, bu repository'de kullanım durumunuzla bir issue açın.

  ### Oluşturulan Containerları İnceleme

  LLM'nin oluşturduğu containerları dikkatli bir şekilde incelemeyi unutmayın. Docker güvenli bir sandbox değildir ve bu nedenle MCP sunucusu potansiyel olarak Docker aracılığıyla host makineyi etkileyebilir.

  Güvenlik nedenleriyle, bu MCP sunucusu `--privileged` veya `--cap-add/--cap-drop` gibi hassas Docker seçeneklerini desteklemez. Bu özellikleri kullanmakla ilgileniyorsanız, bu repository'de kullanım durumunuzla bir issue açın.

  ## 🛠️ Yapılandırma

  Bu sunucu Python Docker SDK'sının `from_env` metodunu kullanır. Yapılandırma ayrıntıları için
  [belgelendirmeye](https://docker-py.readthedocs.io/en/stable/client.html#docker.client.from_env) bakın.

  ### SSH üzerinden Docker'a Bağlanma

  Bu MCP sunucusu SSH üzerinden uzak bir Docker daemon'una bağlanabilir.

  MCP sunucu tanımında bir `ssh://` host URL'i ayarlayın:

  ```
  "mcpServers": {
    "mcp-server-docker": {
      "command": "uvx",
      "args": [
        "mcp-server-docker"
      ],
      "env": {
        "DOCKER_HOST": "ssh://myusername@myhost.example.com"
      }
    }
  }
  ```

  ## 💻 Geliştirme

  Geliştirme ortamınızı yapılandırmak için Devbox kullanmayı tercih edin.

  Faydalı geliştirme komutları için `devbox.json` dosyasına bakın.

  Devbox'u ayarladıktan sonra Claude MCP yapılandırmanızı bunu kullanacak şekilde yapılandırabilirsiniz:

  ```
    "docker": {
      "command": "/path/to/repo/.devbox/nix/profile/default/bin/uv",
      "args": [
        "--directory",
        "/path/to/repo/",
        "run",
        "mcp-server-docker"
      ]
    },
  ```
---

# 🐋 Docker MCP server

An MCP server for managing Docker with natural language!

## 🪩 What can it do?

- 🚀 Compose containers with natural language
- 🔍 Introspect & debug running containers
- 📀 Manage persistent data with Docker volumes

## ❓ Who is this for?

- Server administrators: connect to remote Docker engines for e.g. managing a
  public-facing website.
- Tinkerers: run containers locally and experiment with open-source apps
  supporting Docker.
- AI enthusiasts: push the limits of that an LLM is capable of!

## Demo

A quick demo showing a WordPress deployment using natural language:

https://github.com/user-attachments/assets/65e35e67-bce0-4449-af7e-9f4dd773b4b3

## 🏎️ Quickstart

### Install

#### Claude Desktop

On MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`

On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

<details>
  <summary>Install from PyPi with uv</summary>

If you don't have `uv` installed, follow the installation instructions for your
system:
[link](https://docs.astral.sh/uv/getting-started/installation/#installation-methods)

Then add the following to your MCP servers file:

```
"mcpServers": {
  "mcp-server-docker": {
    "command": "uvx",
    "args": [
      "mcp-server-docker"
    ]
  }
}
```

</details>

<details>
  <summary>Install with Docker</summary>

Purely for convenience, the server can run in a Docker container.

After cloning this repository, build the Docker image:

```bash
docker build -t mcp-server-docker .
```

And then add the following to your MCP servers file:

```
"mcpServers": {
  "mcp-server-docker": {
    "command": "docker",
    "args": [
      "run",
      "-i",
      "--rm",
      "-v",
      "/var/run/docker.sock:/var/run/docker.sock",
      "mcp-server-docker:latest"
    ]
  }
}
```

Note that we mount the Docker socket as a volume; this ensures the MCP server
can connect to and control the local Docker daemon.

</details>

## 📝 Prompts

### 🎻 `docker_compose`

Use natural language to compose containers. [See above](#demo) for a demo.

Provide a Project Name, and a description of desired containers, and let the LLM
do the rest.

This prompt instructs the LLM to enter a `plan+apply` loop. Your interaction
with the LLM will involve the following steps:

1. You give the LLM instructions for which containers to bring up
2. The LLM calculates a concise natural language plan and presents it to you
3. You either:
   - Apply the plan
   - Provide the LLM feedback, and the LLM recalculates the plan

#### Examples

- name: `nginx`, containers: "deploy an nginx container exposing it on port
  9000"
- name: `wordpress`, containers: "deploy a WordPress container and a supporting
  MySQL container, exposing Wordpress on port 9000"

#### Resuming a Project

When starting a new chat with this prompt, the LLM will receive the status of
any containers, volumes, and networks created with the given project `name`.

This is mainly useful for cleaning up, in-case you lose a chat that was
responsible for many containers.

## 📔 Resources

The server implements a couple resources for every container:

- Stats: CPU, memory, etc. for a container
- Logs: tail some logs from a container

## 🔨 Tools

### Containers

- `list_containers`
- `create_container`
- `run_container`
- `recreate_container`
- `start_container`
- `fetch_container_logs`
- `stop_container`
- `remove_container`

### Images

- `list_images`
- `pull_image`
- `push_image`
- `build_image`
- `remove_image`

### Networks

- `list_networks`
- `create_network`
- `remove_network`

### Volumes

- `list_volumes`
- `create_volume`
- `remove_volume`

## 🚧 Disclaimers

### Sensitive Data

**DO NOT CONFIGURE CONTAINERS WITH SENSITIVE DATA.** This includes API keys,
database passwords, etc.

Any sensitive data exchanged with the LLM is inherently compromised, unless the
LLM is running on your local machine.

If you are interested in securely passing secrets to containers, file an issue
on this repository with your use-case.

### Reviewing Created Containers

Be careful to review the containers that the LLM creates. Docker is not a secure
sandbox, and therefore the MCP server can potentially impact the host machine
through Docker.

For safety reasons, this MCP server doesn't support sensitive Docker options
like `--privileged` or `--cap-add/--cap-drop`. If these features are of interest
to you, file an issue on this repository with your use-case.

## 🛠️ Configuration

This server uses the Python Docker SDK's `from_env` method. For configuration
details, see
[the documentation](https://docker-py.readthedocs.io/en/stable/client.html#docker.client.from_env).

### Connect to Docker over SSH

This MCP server can connect to a remote Docker daemon over SSH.

Simply set a `ssh://` host URL in the MCP server definition:

```
"mcpServers": {
  "mcp-server-docker": {
    "command": "uvx",
    "args": [
      "mcp-server-docker"
    ],
    "env": {
      "DOCKER_HOST": "ssh://myusername@myhost.example.com"
    }
  }
}
```

## 💻 Development

Prefer using Devbox to configure your development environment.

See the `devbox.json` for helpful development commands.

After setting up devbox you can configure your Claude MCP config to use it:

```
  "docker": {
    "command": "/path/to/repo/.devbox/nix/profile/default/bin/uv",
    "args": [
      "--directory",
      "/path/to/repo/",
      "run",
      "mcp-server-docker"
    ]
  },
```
