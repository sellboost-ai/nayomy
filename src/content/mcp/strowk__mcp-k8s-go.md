---
name: "strowk/mcp-k8s-go"
description: "Kubernetes cluster operations through MCP"
category: "Cloud Platforms"
repo: "strowk/mcp-k8s-go"
stars: 382
url: "https://github.com/strowk/mcp-k8s-go"
body_length: 7876
license: "MIT"
language: "Go"
homepage: "https://www.npmjs.com/package/@strowk/mcp-k8s"
body_tr: |-
  <h4 align="center">Kubernetes'e bağlanan Golang tabanlı MCP sunucusu</h4>

  <h1 align="center">
     
     <br/>
     MCP K8S Go
  </h1>

  <p align="center">
    <a href="#features">Özellikler</a> ⚙
    <a href="#browse-with-inspector">Inspector ile Göz Atın</a> ⚙
    <a href="#use-with-claude">Claude ile Kullanın</a> ⚙
    <a href="https://github.com/strowk/mcp-k8s-go/blob/main/CONTRIBUTING.md">Katkıda Bulunun ↗</a> ⚙
    <a href="https://modelcontextprotocol.io">MCP Hakkında ↗</a>
  </p>

  <p align="center">
      <a href="https://github.com/strowk/mcp-k8s-go/actions/workflows/dependabot/dependabot-updates"></a>
      <a href="https://github.com/strowk/mcp-k8s-go/actions/workflows/test.yaml"></a>
  	  <a href="https://github.com/strowk/mcp-k8s-go/actions/workflows/golangci-lint.yaml"></a>
      <br/>
      <a href="https://github.com/strowk/mcp-k8s-go/releases/latest"></a>
      <a href="https://goreportcard.com/report/github.com/strowk/mcp-k8s-go"></a>
      <a href="https://github.com/strowk/mcp-k8s-go/blob/main/LICENSE"></a>
  </p>

  ## Özellikler

  MCP 💬 prompt 🗂️ resource 🤖 tool 

  - 🗂️🤖 Kubernetes context'lerini listeleyin
  - 💬🤖 Kubernetes namespace'lerini listeleyin
  - 🤖 Herhangi bir Kubernetes kaynağını listeleyin, alın, oluşturun ve değiştirin
    - pod, service, deployment gibi kaynaklar için özel mappingler içerir
  - 🤖 Kubernetes node'larını listeleyin
  - 💬 Kubernetes pod'larını listeleyin
  - 🤖 Kubernetes event'lerini alın
  - 🤖 Kubernetes pod log'larını alın
  - 🤖 Kubernetes pod'unda komut çalıştırın

  ## Inspector ile Göz Atın

  En son yayınlanan versiyonu Inspector ile kullanmak için şu komutu çalıştırabilirsiniz:

  ```bash
  npx @modelcontextprotocol/inspector npx @strowk/mcp-k8s
  ```

  ## Claude ile Kullanın

  <details><summary><b>
  Demo Kullanımı
  </b></summary>

  Aşağıdaki Claude Desktop sohbeti, belirli bir context'i resource olarak seçtikten sonra kube-system namespace'inde pod log'larında hataları kontrol etmesi istenen örneği göstermektedir:

  ![Claude Desktop](https://raw.githubusercontent.com/strowk/mcp-k8s-go/HEAD/docs/images/claude-desktop-logs.png)

  </details>

  Bu MCP sunucusunu Claude Desktop (veya başka herhangi bir client) ile kullanmak için hangi kurulum yöntemini seçeceğinize karar vermeniz gerekebilir.

  Birden fazla seçeneğiniz vardır:

  |              | <a href="#using-smithery">Smithery</a> | <a href="#using-mcp-get">mcp-get</a> | <a href="#prebuilt-from-npm">Önceden derlenmiş NPM</a> | <a href="#from-github-releases">Github'da Önceden derlenmiş</a> | <a href="#building-from-source">Kaynak kodundan</a> | <a href="#using-docker">Docker Kullanarak</a> |
  | ------------ | -------------------------------------- | ------------------------------------ | ---------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
  | Claude Kurulumu | Otomatik                                   | Otomatik                                 | Manuel                                         | Manuel                                                  | Manuel                                           | Manuel                                   |
  | Ön Koşul | Node.js                                | Node.js                              | Node.js                                        | Hiçbiri                                                    | Golang                                           | Docker                                   |

  ### Smithery Kullanarak

  MCP K8S Go'yu Claude Desktop'a [Smithery](https://smithery.ai/server/@strowk/mcp-k8s) aracılığıyla otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli install @strowk/mcp-k8s --client claude
  ```

  ### mcp-get Kullanarak

  MCP K8S Go'yu Claude Desktop'a [mcp-get](https://mcp-get.com/packages/%40strowk%2Fmcp-k8s) aracılığıyla otomatik olarak kurmak için:

  ```bash
  npx @michaellatman/mcp-get@latest install @strowk/mcp-k8s
  ```

  ### Önceden derlenmiş ikili dosyalarla Manuel Kurulum

  #### NPM'den Önceden Derlenmiş

  npm yüklüyse ve önceden derlenmiş ikili dosyaları kullanmak istiyorsanız bunu kullanın:

  ```bash
  npm install -g @strowk/mcp-k8s
  ```

  Ardından `mcp-k8s --version` komutunu çalıştırarak versiyonu kontrol edin ve bu yüklü versiyonu yazdırırsa, `claude_desktop_config.json` dosyasına konfigürasyon eklemeye devam edebilirsiniz:

  ```json
  {
    "mcpServers": {
      "mcp_k8s": {
        "command": "mcp-k8s",
        "args": []
      }
    }
  }
  ```

  , veya herhangi bir client ile `npx` kullanarak:

  ```bash
  npx @strowk/mcp-k8s
  ```

  Örneğin Claude için:

  ```json
  {
    "mcpServers": {
      "mcp_k8s": {
        "command": "npx",
        "args": [
          "@strowk/mcp-k8s"
        ]
      }
    }
  }
  ```

  #### GitHub Releases'tan

  [GitHub releases](https://github.com/strowk/mcp-k8s-go/releases) sayfasına gidin ve platformunuz için en son release'i indirin.

  Arşivi açın, içinde `mcp-k8s-go` adlı ikili dosya olacaktır, bu dosyayı PATH'inize bir yere koyun ve ardından `claude_desktop_config.json` dosyasına aşağıdaki konfigürasyonu ekleyin:

  ```json
  {
    "mcpServers": {
      "mcp_k8s": {
        "command": "mcp-k8s-go",
        "args": []
      }
    }
  }
  ```

  ### Kaynak Kodundan Derleme

  Bu projeyi derlemek için Golang yüklü olması gerekir:

  ```bash
  go get github.com/strowk/mcp-k8s-go
  go install github.com/strowk/mcp-k8s-go
  ```

  , ardından `claude_desktop_config.json` dosyasına aşağıdaki konfigürasyonu ekleyin:

  ```json
  {
    "mcpServers": {
      "mcp_k8s_go": {
        "command": "mcp-k8s-go",
        "args": []
      }
    }
  }
  ```

  ### Docker Kullanarak

  Bu sunucu 0.3.1-beta.2 release'inden itibaren Docker Hub'da derlenmiş ve yayınlanmakta, linux/amd64 ve linux/arm64 mimarileri için çok mimarili imajlar mevcuttur.

  En son tag'ı örneğin şöyle kullanabilirsiniz:

  ```bash
  docker run -i -v ~/.kube/config:/home/nonroot/.kube/config --rm mcpk8s/server:latest
  ```

  Windows kullanıcıları en azından Git Bash'te `~/.kube/config` yerine `//c/Users/<username>/.kube/config` ile değiştirmek gerekebilir.

  Claude için:

  ```json
  {
    "mcpServers": {
      "mcp_k8s_go": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "-v",
          "~/.kube/config:/home/nonroot/.kube/config",
          "--rm",
          "mcpk8s/server:latest"
        ]
      }
    }
  }
  ```

  ### Ortam Değişkenleri ve Komut Satırı Seçenekleri

  MCP sunucusu tarafından kullanılan ortam değişkenleri:

  - `KUBECONFIG`: Kubernetes yapılandırma dosyanızın yolu (isteğe bağlı, varsayılan olarak ~/.kube/config)

  Desteklenen komut satırı seçenekleri:

  - `--allowed-contexts=<ctx1,ctx2,...>`: Kullanıcıların erişebileceği Kubernetes context'lerinin virgülle ayrılmış listesi. Belirtilmezse, tüm context'lere izin verilir.
  - `--readonly`: Cluster'a değişiklik yazabilen tüm tool'ları devre dışı bırakır
  - `--help`: Yardım bilgisini görüntüle
  - `--version`: Sürüm bilgisini görüntüle
  - `--mask-secrets`: Çıktıda secret'ları maskelyin (varsayılan: true). Maskelemeyi devre dışı bırakmak için `--mask-secrets=false` kullanın

  Örneğin Claude Desktop'u yapılandırıyorsanız, `claude_desktop_config.json` dosyasına aşağıdaki konfigürasyonu ekleyebilirsiniz:

  ```json
  {
      "mcpServers": {
          "mcp_k8s": {
              "command": "mcp-k8s",
              "args": [
                  "--allowed-contexts=dev,prod",
                  "--readonly"
              ]
          }
      }
  }
  ```

  , bu yalnızca `dev` ve `prod` context'lerinin kullanılmasına izin verir ve cluster'a değişiklik yazabilen tüm tool'ları devre dışı bırakır.
---

<h4 align="center">Golang-based MCP server connecting to Kubernetes</h4>

<h1 align="center">
   
   <br/>
   MCP K8S Go
</h1>

<p align="center">
  <a href="#features">Features</a> ⚙
  <a href="#browse-with-inspector">Browse With Inspector</a> ⚙
  <a href="#use-with-claude">Use With Claude</a> ⚙
  <a href="https://github.com/strowk/mcp-k8s-go/blob/main/CONTRIBUTING.md">Contributing ↗</a> ⚙
  <a href="https://modelcontextprotocol.io">About MCP ↗</a>
</p>

<p align="center">
    <a href="https://github.com/strowk/mcp-k8s-go/actions/workflows/dependabot/dependabot-updates"></a>
    <a href="https://github.com/strowk/mcp-k8s-go/actions/workflows/test.yaml"></a>
	  <a href="https://github.com/strowk/mcp-k8s-go/actions/workflows/golangci-lint.yaml"></a>
    <br/>
    <a href="https://github.com/strowk/mcp-k8s-go/releases/latest"></a>
    <a href="https://goreportcard.com/report/github.com/strowk/mcp-k8s-go"></a>
    <a href="https://github.com/strowk/mcp-k8s-go/blob/main/LICENSE"></a>
</p>

## Features

MCP 💬 prompt 🗂️ resource 🤖 tool 

- 🗂️🤖 List Kubernetes contexts
- 💬🤖 List Kubernetes namespaces
- 🤖 List, get, create and modify any Kubernetes resources
  - includes custom mappings for resources like pods, services, deployments
- 🤖 List Kubernetes nodes
- 💬 List Kubernetes pods
- 🤖 Get Kubernetes events
- 🤖 Get Kubernetes pod logs
- 🤖 Run command in Kubernetes pod

## Browse With Inspector

To use latest published version with Inspector you can run this:

```bash
npx @modelcontextprotocol/inspector npx @strowk/mcp-k8s
```

## Use With Claude

<details><summary><b>
Demo Usage
</b></summary>

Following chat with Claude Desktop demonstrates how it looks when selected particular context as a resource and then asked to check pod logs for errors in kube-system namespace:

![Claude Desktop](https://raw.githubusercontent.com/strowk/mcp-k8s-go/HEAD/docs/images/claude-desktop-logs.png)

</details>

To use this MCP server with Claude Desktop (or any other client) you might need to choose which way of installation to use.

You have multiple options:

|              | <a href="#using-smithery">Smithery</a> | <a href="#using-mcp-get">mcp-get</a> | <a href="#prebuilt-from-npm">Pre-built NPM</a> | <a href="#from-github-releases">Pre-built in Github</a> | <a href="#building-from-source">From sources</a> | <a href="#using-docker">Using Docker</a> |
| ------------ | -------------------------------------- | ------------------------------------ | ---------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| Claude Setup | Auto                                   | Auto                                 | Manual                                         | Manual                                                  | Manual                                           | Manual                                   |
| Prerequisite | Node.js                                | Node.js                              | Node.js                                        | None                                                    | Golang                                           | Docker                                   |

### Using Smithery

To install MCP K8S Go for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@strowk/mcp-k8s):

```bash
npx -y @smithery/cli install @strowk/mcp-k8s --client claude
```

### Using mcp-get

To install MCP K8S Go for Claude Desktop automatically via [mcp-get](https://mcp-get.com/packages/%40strowk%2Fmcp-k8s):

```bash
npx @michaellatman/mcp-get@latest install @strowk/mcp-k8s
```

### Manually with prebuilt binaries

#### Prebuilt from npm

Use this if you have npm installed and want to use pre-built binaries:

```bash
npm install -g @strowk/mcp-k8s
```

Then check version by running `mcp-k8s --version` and if this printed installed version, you can proceed to add configuration to `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "mcp_k8s": {
      "command": "mcp-k8s",
      "args": []
    }
  }
}
```

, or using `npx` with any client:

```bash
npx @strowk/mcp-k8s
```

For example for Claude:

```json
{
  "mcpServers": {
    "mcp_k8s": {
      "command": "npx",
      "args": [
        "@strowk/mcp-k8s"
      ]
    }
  }
}
```

#### From GitHub releases

Head to [GitHub releases](https://github.com/strowk/mcp-k8s-go/releases) and download the latest release for your platform.

Unpack the archive, which would contain binary named `mcp-k8s-go`, put that binary somewhere in your PATH and then add the following configuration to the `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "mcp_k8s": {
      "command": "mcp-k8s-go",
      "args": []
    }
  }
}
```

### Building from source

You would need Golang installed to build this project:

```bash
go get github.com/strowk/mcp-k8s-go
go install github.com/strowk/mcp-k8s-go
```

, and then add the following configuration to the `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "mcp_k8s_go": {
      "command": "mcp-k8s-go",
      "args": []
    }
  }
}
```

### Using Docker

This server is built and published to Docker Hub since 0.3.1-beta.2 release with multi-arch images available for linux/amd64 and linux/arm64 architectures.

You can use latest tag f.e like this:

```bash
docker run -i -v ~/.kube/config:/home/nonroot/.kube/config --rm mcpk8s/server:latest
```

Windows users might need to replace `~/.kube/config` with `//c/Users/<username>/.kube/config` at least in Git Bash.

For Claude:

```json
{
  "mcpServers": {
    "mcp_k8s_go": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "-v",
        "~/.kube/config:/home/nonroot/.kube/config",
        "--rm",
        "mcpk8s/server:latest"
      ]
    }
  }
}
```

### Environment Variables and Command-line Options

The following environment variables are used by the MCP server:

- `KUBECONFIG`: Path to your Kubernetes configuration file (optional, defaults to ~/.kube/config)

The following command-line options are supported:

- `--allowed-contexts=<ctx1,ctx2,...>`: Comma-separated list of allowed Kubernetes contexts that users can access. If not specified, all contexts are allowed.
- `--readonly`: Disables any tool which can write changes to the cluster
- `--help`: Display help information
- `--version`: Display version information
- `--mask-secrets`: Mask secrets in the output (default: true). Use `--mask-secrets=false` to disable masking

For example if you are configuring Claude Desktop, you can add the following configuration to `claude_desktop_config.json` file:

```json
{
    "mcpServers": {
        "mcp_k8s": {
            "command": "mcp-k8s",
            "args": [
                "--allowed-contexts=dev,prod",
                "--readonly"
            ]
        }
    }
}
```

, which would allow only `dev` and `prod` contexts to be used and would disable any tool which can write changes to the cluster.
