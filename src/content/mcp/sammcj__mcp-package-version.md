---
name: "sammcj/mcp-package-version"
description: "An MCP Server to help LLMs suggest the latest stable package versions when writing code."
category: "Developer Tools"
repo: "sammcj/mcp-package-version"
stars: 121
url: "https://github.com/sammcj/mcp-package-version"
body_length: 9273
license: "MIT"
language: "Go"
homepage: "https://smcleod.net"
body_tr: |-
  # Package Version MCP Server

  [![smithery badge](https://smithery.ai/badge/mcp-package-version)](https://smithery.ai/server/mcp-package-version)

  Birden çok paket registryinden en son kararlı paket sürümlerini kontrol etmek için araçlar sağlayan bir MCP sunucusu:

  - npm (Node.js/JavaScript)
  - PyPI (Python)
  - Maven Central (Java)
  - Go Proxy (Go)
  - Swift Packages (Swift)
  - AWS Bedrock (AI Models)
  - Docker Hub (Container Images)
  - GitHub Container Registry (Container Images)
  - GitHub Actions

  Bu sunucu, LLM'lerin kod yazarken güncel paket sürümlerini önerdiğinden emin olmalarına yardımcı olur.

  **ÖNEMLİ: Bu aracı yavaş yavaş [mcp-devtools](https://github.com/sammcj/mcp-devtools) sunucusunun bir bileşenine taşıyorum**

  <a href="https://glama.ai/mcp/servers/zkts2w92ba"></a>

  ## Ekran Görüntüsü

  ![mcp-package-version ile ve olmadan araçlar](https://raw.githubusercontent.com/sammcj/mcp-package-version/HEAD/images/with-without.jpg)

  - [Package Version MCP Server](#package-version-mcp-server)
    - [Ekran Görüntüsü](#ekran-görüntüsü)
    - [Kurulum](#kurulum)
    - [Kullanım](#kullanım)
    - [Araçlar](#araçlar)
    - [Sürümler ve CI/CD](#sürümler-ve-cicd)
    - [Lisans](#lisans)

  ## Kurulum

  Gereksinimler:

  - Modern bir Go sürümü yüklü (Bkz. [Go Kurulum](https://go.dev/doc/install))

  `go install` kullanarak (MCP Client Kurulumu için Önerilen):

  ```bash
  go install github.com/sammcj/mcp-package-version/v2@HEAD
  ```

  Daha sonra istemcinizi MCP sunucusunu kullanacak şekilde ayarlayın. `go install github.com/sammcj/mcp-package-version/v2@HEAD` ile binary'yi yüklediyseniz ve `$GOPATH` değeriniz `/Users/sammcj/go/bin` ise, binary'nin tam yolunu sağlayabilirsiniz:

  ```json
  {
    "mcpServers": {
      "package-version": {
        "command": "/Users/sammcj/go/bin/mcp-package-version"
      }
    }
  }
  ```

  - Cline VSCode Extension için bu `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json` olacaktır
  - Claude Desktop için `~/Library/Application\ Support/Claude/claude_desktop_config.json`
  - GoMCP için `~/.config/gomcp/config.yaml`

  ### Diğer Kurulum Yöntemleri

  Veya depoyu klonlayıp derleyin:

  ```bash
  git clone https://github.com/sammcj/mcp-package-version.git
  cd mcp-package-version
  make
  ```

  Sunucuyu bir container içinde de çalıştırabilirsiniz:

  ```bash
  docker run -p 18080:18080 ghcr.io/sammcj/mcp-package-version:main
  ```

  Not: Bir container içinde çalıştırıyorsanız, istemciyi komut yerine URL kullanacak şekilde yapılandırmanız gerekir, örneğin:

  ```json
  {
    "mcpServers": {
      "package-version": {
        "url": "http://localhost:18080",
      }
    }
  }
  ```

  #### İpucu: Go Path

  Eğer `$GOPATH/bin` sizin `PATH` değerinizde değilse, MCP istemcinizi yapılandırırken binary'nin tam yolunu sağlamanız gerekir (örneğin `/Users/sammcj/go/bin/mcp-package-version`).

  Go uygulamaları hiç kullanmadıysanız ve Go'yu yeni yüklediyseniz, ortamınızda yapılandırılmış bir `$GOPATH` olmayabilir. Bu, herhangi bir `go install` komutunun doğru şekilde çalışması için önemlidir.

  > **`$GOPATH` Anlamak**
  >
  > `go install` komutu Go paketlerini indirir ve derler, ortaya çıkan binary çalıştırılabilir dosyasını `$GOPATH` sizin `bin` alt dizinine yerleştirir. Varsayılan olarak, `$GOPATH` Unix benzeri sistemlerde (macOS dahil) genellikle `$HOME/go` konumunda bulunur. `$GOPATH` değerini açıkça yapılandırmadıysanız, Go bu varsayılanı kullanır.
  >
  > `$GOPATH/bin` konumu (örn. `/Users/your_username/go/bin`) sisteminizin `PATH` ortam değişkenine dahil edilmelidir, eğer yüklü Go binary'lerini herhangi bir terminal konumundan doğrudan ad ile çalıştırmak istiyorsanız.
  >
  > Shell yapılandırma dosyanıza (örn. `~/.zshrc`, `~/.bashrc`) aşağıdaki satırı ekleyerek, `$GOPATH` değerini zaten ayarlanmadıysa varsayılan değere ayarlayabilir ve `$GOPATH/bin` değerini `PATH` değerinize dahil edebilirsiniz:
  >
  > ```bash
  > [ -z "$GOPATH" ] && export GOPATH="$HOME/go"; echo "$PATH" | grep -q ":$GOPATH/bin" || export PATH="$PATH:$GOPATH/bin"
  > ```
  >
  > Bu satırı ekledikten sonra terminal veya MCP istemcinizi yeniden başlatın.

  ## Kullanım

  Sunucu iki transport modunu destekler: stdio (varsayılan) ve SSE (Server-Sent Events).

  ### STDIO Transport (Varsayılan)

  ```bash
  mcp-package-version
  ```

  ### SSE Transport

  ```bash
  mcp-package-version --transport sse --port 18080 --base-url "http://localhost:18080"
  ```

  Bu, sunucuyu istemciler için `http://localhost:18080/sse` konumunda (Not: `/sse` eki!) kullanılabilir hale getirecektir.

  #### Komut Satırı Seçenekleri

  - `--transport`, `-t`: Transport türü (stdio veya sse). Varsayılan: stdio
  - `--port`: SSE transport için kullanılacak port. Varsayılan: 18080
  - `--base-url`: SSE transport için temel URL. Varsayılan: http://localhost

  ### Docker İmajları

  Docker imajları GitHub Container Registry'den kullanılabilir:

  ```bash
  docker pull ghcr.io/sammcj/mcp-package-version:main
  ```

  Ayrıca örnek [docker-compose.yaml](docker-compose.yaml) dosyasını da görebilirsiniz.

  ## Araçlar

  ### NPM Paketleri

  NPM paketlerinin en son sürümlerini kontrol edin:

  ```json
  {
    "name": "check_npm_versions",
    "arguments": {
      "dependencies": {
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "lodash": "4.17.21"
      },
      "constraints": {
        "react": {
          "majorVersion": 17
        }
      }
    }
  }
  ```

  ### Python Paketleri (requirements.txt)

  requirements.txt dosyasından Python paketlerinin en son sürümlerini kontrol edin:

  ```json
  {
    "name": "check_python_versions",
    "arguments": {
      "requirements": [
        "requests==2.28.1",
        "flask>=2.0.0",
        "numpy"
      ]
    }
  }
  ```

  ### Python Paketleri (pyproject.toml)

  pyproject.toml dosyasından Python paketlerinin en son sürümlerini kontrol edin:

  ```json
  {
    "name": "check_pyproject_versions",
    "arguments": {
      "dependencies": {
        "dependencies": {
          "requests": "^2.28.1",
          "flask": ">=2.0.0"
        },
        "optional-dependencies": {
          "dev": {
            "pytest": "^7.0.0"
          }
        },
        "dev-dependencies": {
          "black": "^22.6.0"
        }
      }
    }
  }
  ```

  ### Java Paketleri (Maven)

  Maven'den Java paketlerinin en son sürümlerini kontrol edin:

  ```json
  {
    "name": "check_maven_versions",
    "arguments": {
      "dependencies": [
        {
          "groupId": "org.springframework.boot",
          "artifactId": "spring-boot-starter-web",
          "version": "2.7.0"
        },
        {
          "groupId": "com.google.guava",
          "artifactId": "guava",
          "version": "31.1-jre"
        }
      ]
    }
  }
  ```

  ### Java Paketleri (Gradle)

  Gradle'dan Java paketlerinin en son sürümlerini kontrol edin:

  ```json
  {
    "name": "check_gradle_versions",
    "arguments": {
      "dependencies": [
        {
          "configuration": "implementation",
          "group": "org.springframework.boot",
          "name": "spring-boot-starter-web",
          "version": "2.7.0"
        },
        {
          "configuration": "testImplementation",
          "group": "junit",
          "name": "junit",
          "version": "4.13.2"
        }
      ]
    }
  }
  ```

  ### Go Paketleri

  go.mod dosyasından Go paketlerinin en son sürümlerini kontrol edin:

  ```json
  {
    "name": "check_go_versions",
    "arguments": {
      "dependencies": {
        "module": "github.com/example/mymodule",
        "require": [
          {
            "path": "github.com/gorilla/mux",
            "version": "v1.8.0"
          },
          {
            "path": "github.com/spf13/cobra",
            "version": "v1.5.0"
          }
        ]
      }
    }
  }
  ```

  ### Docker İmajları

  Docker imajları için kullanılabilir etiketleri kontrol edin:

  ```json
  {
    "name": "check_docker_tags",
    "arguments": {
      "image": "nginx",
      "registry": "dockerhub",
      "limit": 5,
      "filterTags": ["^1\\."],
      "includeDigest": true
    }
  }
  ```

  ### AWS Bedrock Modelleri

  Tüm AWS Bedrock modellerini listeleyin:

  ```json
  {
    "name": "check_bedrock_models",
    "arguments": {
      "action": "list"
    }
  }
  ```

  Belirli AWS Bedrock modellerini arayın:

  ```json
  {
    "name": "check_bedrock_models",
    "arguments": {
      "action": "search",
      "query": "claude",
      "provider": "anthropic"
    }
  }
  ```

  En son Claude Sonnet modelini alın:

  ```json
  {
    "name": "get_latest_bedrock_model",
    "arguments": {}
  }
  ```

  ### Swift Paketleri

  Swift paketlerinin en son sürümlerini kontrol edin:

  ```json
  {
    "name": "check_swift_versions",
    "arguments": {
      "dependencies": [
        {
          "url": "https://github.com/apple/swift-argument-parser",
          "version": "1.1.4"
        },
        {
          "url": "https://github.com/vapor/vapor",
          "version": "4.65.1"
        }
      ],
      "constraints": {
        "https://github.com/apple/swift-argument-parser": {
          "majorVersion": 1
        }
      }
    }
  }
  ```

  ### GitHub Actions

  GitHub Actions'ın en son sürümlerini kontrol edin:

  ```json
  {
    "name": "check_github_actions",
    "arguments": {
      "actions": [
        {
          "owner": "actions",
          "repo": "checkout",
          "currentVersion": "v3"
        },
        {
          "owner": "actions",
          "repo": "setup-node",
          "currentVersion": "v3"
        }
      ],
      "includeDetails": true
    }
  }
  ```

  ## Sürümler ve CI/CD

  Bu proje sürekli entegrasyon ve dağıtım için GitHub Actions kullanır. İş akışı otomatik olarak:

  1. Ana dala her push'ta ve pull request'lerde uygulamayı derler ve test eder
  2. `v*` formatında bir tag (örn. `v1.0.0`) puslendiğinde bir sürüm oluşturur
  3. Docker imajlarını derler ve GitHub Container Registry'ye yükler

  ## Lisans

  [MIT](LICENSE)
---

# Package Version MCP Server

[![smithery badge](https://smithery.ai/badge/mcp-package-version)](https://smithery.ai/server/mcp-package-version)

An MCP server that provides tools for checking latest stable package versions from multiple package registries:

- npm (Node.js/JavaScript)
- PyPI (Python)
- Maven Central (Java)
- Go Proxy (Go)
- Swift Packages (Swift)
- AWS Bedrock (AI Models)
- Docker Hub (Container Images)
- GitHub Container Registry (Container Images)
- GitHub Actions

This server helps LLMs ensure they're recommending up-to-date package versions when writing code.

**IMPORTANT: I'm slowly moving across this tool to a component of my [mcp-devtools](https://github.com/sammcj/mcp-devtools) server**

<a href="https://glama.ai/mcp/servers/zkts2w92ba"></a>

## Screenshot

![tooling with and without mcp-package-version](https://raw.githubusercontent.com/sammcj/mcp-package-version/HEAD/images/with-without.jpg)

- [Package Version MCP Server](#package-version-mcp-server)
  - [Screenshot](#screenshot)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tools](#tools)
  - [Releases and CI/CD](#releases-and-cicd)
  - [License](#license)

## Installation

Requirements:

- A modern go version installed (See [Go Installation](https://go.dev/doc/install))

Using `go install` (Recommended for MCP Client Setup):

```bash
go install github.com/sammcj/mcp-package-version/v2@HEAD
```

Then setup your client to use the MCP server. Assuming you've installed the binary with `go install github.com/sammcj/mcp-package-version/v2@HEAD` and your `$GOPATH` is `/Users/sammcj/go/bin`, you can provide the full path to the binary:

```json
{
  "mcpServers": {
    "package-version": {
      "command": "/Users/sammcj/go/bin/mcp-package-version"
    }
  }
}
```

- For the Cline VSCode Extension this will be `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- For Claude Desktop `~/Library/Application\ Support/Claude/claude_desktop_config.json`
- For GoMCP `~/.config/gomcp/config.yaml`

### Other Installation Methods

Or clone the repository and build it:

```bash
git clone https://github.com/sammcj/mcp-package-version.git
cd mcp-package-version
make
```

You can also run the server in a container:

```bash
docker run -p 18080:18080 ghcr.io/sammcj/mcp-package-version:main
```

Note: If running in a container, you'll need to configure the client to use the URL instead of command, e.g.:

```json
{
  "mcpServers": {
    "package-version": {
      "url": "http://localhost:18080",
    }
  }
}
```

#### Tip: Go Path

If `$GOPATH/bin` is not in your `PATH`, you'll need to provide the full path to the binary when configuring your MCP client (e.g. `/Users/sammcj/go/bin/mcp-package-version`).

If you haven't used go applications before and have only just installed go, you may not have a `$GOPATH` set up in your environment. This is important for any `go install` command to work correctly.

> **Understanding `$GOPATH`**
>
> The `go install` command downloads and compiles Go packages, placing the resulting binary executable in the `bin` subdirectory of your `$GOPATH`. By default, `$GOPATH` is > usually located at `$HOME/go` on Unix-like systems (including macOS). If you haven't configured `$GOPATH` explicitly, Go uses this default.
>
> The location `$GOPATH/bin` (e.g., `/Users/your_username/go/bin`) needs to be included in your system's `PATH` environment variable if you want to run installed Go binaries directly by name from any terminal location.
>
> You can add the following line to your shell configuration file (e.g., `~/.zshrc`, `~/.bashrc`) to set `$GOPATH` to the default if it's not already set, and ensure `$GOPATH/bin` is in your `PATH`:
>
> ```bash
> [ -z "$GOPATH" ] && export GOPATH="$HOME/go"; echo "$PATH" | grep -q ":$GOPATH/bin" || export PATH="$PATH:$GOPATH/bin"
> ```
>
> After adding this line, restart your terminal or MCP client.

## Usage

The server supports two transport modes: stdio (default) and SSE (Server-Sent Events).

### STDIO Transport (Default)

```bash
mcp-package-version
```

### SSE Transport

```bash
mcp-package-version --transport sse --port 18080 --base-url "http://localhost:18080"
```

This would make the server available to clients at `http://localhost:18080/sse` (Note the `/sse` suffix!).

#### Command-line Options

- `--transport`, `-t`: Transport type (stdio or sse). Default: stdio
- `--port`: Port to use for SSE transport. Default: 18080
- `--base-url`: Base URL for SSE transport. Default: http://localhost

### Docker Images

Docker images are available from GitHub Container Registry:

```bash
docker pull ghcr.io/sammcj/mcp-package-version:main
```

You can also see the example [docker-compose.yaml](docker-compose.yaml).

## Tools

### NPM Packages

Check the latest versions of NPM packages:

```json
{
  "name": "check_npm_versions",
  "arguments": {
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "lodash": "4.17.21"
    },
    "constraints": {
      "react": {
        "majorVersion": 17
      }
    }
  }
}
```

### Python Packages (requirements.txt)

Check the latest versions of Python packages from requirements.txt:

```json
{
  "name": "check_python_versions",
  "arguments": {
    "requirements": [
      "requests==2.28.1",
      "flask>=2.0.0",
      "numpy"
    ]
  }
}
```

### Python Packages (pyproject.toml)

Check the latest versions of Python packages from pyproject.toml:

```json
{
  "name": "check_pyproject_versions",
  "arguments": {
    "dependencies": {
      "dependencies": {
        "requests": "^2.28.1",
        "flask": ">=2.0.0"
      },
      "optional-dependencies": {
        "dev": {
          "pytest": "^7.0.0"
        }
      },
      "dev-dependencies": {
        "black": "^22.6.0"
      }
    }
  }
}
```

### Java Packages (Maven)

Check the latest versions of Java packages from Maven:

```json
{
  "name": "check_maven_versions",
  "arguments": {
    "dependencies": [
      {
        "groupId": "org.springframework.boot",
        "artifactId": "spring-boot-starter-web",
        "version": "2.7.0"
      },
      {
        "groupId": "com.google.guava",
        "artifactId": "guava",
        "version": "31.1-jre"
      }
    ]
  }
}
```

### Java Packages (Gradle)

Check the latest versions of Java packages from Gradle:

```json
{
  "name": "check_gradle_versions",
  "arguments": {
    "dependencies": [
      {
        "configuration": "implementation",
        "group": "org.springframework.boot",
        "name": "spring-boot-starter-web",
        "version": "2.7.0"
      },
      {
        "configuration": "testImplementation",
        "group": "junit",
        "name": "junit",
        "version": "4.13.2"
      }
    ]
  }
}
```

### Go Packages

Check the latest versions of Go packages from go.mod:

```json
{
  "name": "check_go_versions",
  "arguments": {
    "dependencies": {
      "module": "github.com/example/mymodule",
      "require": [
        {
          "path": "github.com/gorilla/mux",
          "version": "v1.8.0"
        },
        {
          "path": "github.com/spf13/cobra",
          "version": "v1.5.0"
        }
      ]
    }
  }
}
```

### Docker Images

Check available tags for Docker images:

```json
{
  "name": "check_docker_tags",
  "arguments": {
    "image": "nginx",
    "registry": "dockerhub",
    "limit": 5,
    "filterTags": ["^1\\."],
    "includeDigest": true
  }
}
```

### AWS Bedrock Models

List all AWS Bedrock models:

```json
{
  "name": "check_bedrock_models",
  "arguments": {
    "action": "list"
  }
}
```

Search for specific AWS Bedrock models:

```json
{
  "name": "check_bedrock_models",
  "arguments": {
    "action": "search",
    "query": "claude",
    "provider": "anthropic"
  }
}
```

Get the latest Claude Sonnet model:

```json
{
  "name": "get_latest_bedrock_model",
  "arguments": {}
}
```

### Swift Packages

Check the latest versions of Swift packages:

```json
{
  "name": "check_swift_versions",
  "arguments": {
    "dependencies": [
      {
        "url": "https://github.com/apple/swift-argument-parser",
        "version": "1.1.4"
      },
      {
        "url": "https://github.com/vapor/vapor",
        "version": "4.65.1"
      }
    ],
    "constraints": {
      "https://github.com/apple/swift-argument-parser": {
        "majorVersion": 1
      }
    }
  }
}
```

### GitHub Actions

Check the latest versions of GitHub Actions:

```json
{
  "name": "check_github_actions",
  "arguments": {
    "actions": [
      {
        "owner": "actions",
        "repo": "checkout",
        "currentVersion": "v3"
      },
      {
        "owner": "actions",
        "repo": "setup-node",
        "currentVersion": "v3"
      }
    ],
    "includeDetails": true
  }
}
```

## Releases and CI/CD

This project uses GitHub Actions for continuous integration and deployment. The workflow automatically:

1. Builds and tests the application on every push to the main branch and pull requests
2. Creates a release when a tag with the format `v*` (e.g., `v1.0.0`) is pushed
3. Builds and pushes Docker images to GitHub Container Registry

## License

[MIT](LICENSE)
