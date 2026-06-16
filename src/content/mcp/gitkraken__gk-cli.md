---
name: "gitkraken/gk-cli"
description: "A CLI for interacting with GitKraken APIs. Includes an MCP server via gk mcp that not only wraps GitKraken APIs, but also Jira, GitHub, GitLab, and more. Works with local tools and remote services."
category: "Developer Tools"
repo: "gitkraken/gk-cli"
stars: 403
url: "https://github.com/gitkraken/gk-cli"
body_length: 5703
license: "NOASSERTION"
homepage: "https://www.gitkraken.com"
body_tr: |-
  # 🚀 GitKraken CLI

  `gk`, komut satırında GitKraken'dir. Temel işlevsellik, üzerinde çalıştığınız özellik veya sorunu temsil edebilen "Work Items" (İş Öğeleri) üzerine odaklanmıştır. Bu, aynı anda birden fazla repo ile çalışmanıza ve tek bir monorepo'da olduğunuz gibi aynı UX'i almanıza olanak tanır. Ayrıca güçlü AI destekli commit mesajları ve Pull Request oluşturma özelliği sağlıyoruz. Ayrıca git ve Issue ile git hosting sağlayıcılarınızla çalışmayı kolaylaştıran bir MCP sunucusu sağlar.

  GitKraken CLI, macOS, Windows ve Unix sistemlerinde kullanılabilir.

  ![](https://raw.githubusercontent.com/gitkraken/gk-cli/HEAD/images/cli-header-wide.png)

  ## İçindekiler

  - [MCP Sunucusu](#mcp-sunucusu)
  - [Belgeler](#belgeler)
  - [İş Akışları](#iş-akışları)
  - [`git` Komut Geçişi](#git-komut-geçişi)
  - [Kurulum](#kurulum)
  - [Sorun Giderme](#sorun-giderme)
  - [Destek](#destek)

  ## MCP Sunucusu

  GitKraken MCP sunucusu, güçlü ve kullanımı kolay yerel bir MCP sunucusudur. Git, GitHub, Jira MCP eylemlerini sarmaladığı ve LLM'lere GitKraken API'leri ve işlevselliği ile çalışan araçlar sağladığı kadar. Seçtiğiniz AI uygulamasına dayalı belirli kurulum talimatlarını [Yardım Merkezi](https://help.gitkraken.com/cli/gk-cli-mcp/)'nde bulabilirsiniz.

  MCP sunucusu hakkında daha fazla bilgi almak istiyorsanız, [tanıtım blog yazısını](https://www.gitkraken.com/blog/introducing-gitkraken-mcp) inceleyebilirsiniz.

  ## Belgeler

  `gk help` CLI'yi keşfetmenin en iyi kaynağı olacaktır. Ayrıca aşağıdaki [İş Akışları](#iş-akışları)'na da bakabilirsiniz.

  ```bash
  Welcome to GitKraken CLI, a premium CLI experience for managing multiple repositories with familiar GIT CLI commands

  Usage:
    gk [flags]
    gk [command]

  AUTHENTICATING
    auth         Authenticate with the GitKraken platform
    provider     Add or remove provider tokens

  CORE COMMANDS
    graph        Display commit graph in current repository
    issue        Manage your issues
    organization Manage your Gitkraken organizations
    work         Interact with your work.
    workspace    Interact with your workspaces. Alias: 'ws'

  Additional Commands:
    help         Help about any command
    setup        Display information about your current system configuration
    version      Print the version number of GK CLI

  Flags:
    -h, --help   help for gk

  Use "gk [command] --help" for more information about a command.
  ```

  ## İş Akışları

  Tek bir repo ile başlayın. Daha sonra daha fazla ekleyebilirsiniz.

  Genel olarak, işleminiz şöyle görünecektir:

  ```bash

  # Kimlik doğrulaması yap
  gk auth login

  # Dosya sisteminizde bir git repo dizinine gidin
  cd ./path/to/repo

  # Ardından bir Work Item oluşturun ve mevcut dizin
  # otomatik olarak Work Item'e eklenecektir
  gk work create "My new work item"

  # Dosyaları düzenleyin...
  # ...

  # AI kullanarak değişiklikleri commit edin
  gk work commit --ai

  # Değişiklikleri push edin
  gk work push

  # Pull Request oluşturun
  gk work pr create --ai

  ```

  Tek bir repo kullanmaya alışkın olduktan sonra, yeni bir Work Item'e birden fazla repo ekleyerek aynı anda birden fazla repo için work item oluşturmayı ve commit ile PR oluşturmayı deneyin.

  ```bash
  # Mevcut work item'e bir repo ekleyin
  gk work add ./path/to/repo # path eğer zaten dizinde iseniz "." kadar basit olabilir
  ```

  ## `git` Komut Geçişi

  Ayrıca herhangi bir `git` komutunu geçmek için `gk`'yu kullanabilirsiniz. Örneğin:

  ```bash
  gk status
  gk remote -v
  # vb.
  ```

  ## Kurulum

  ### macOS

  `gk`, [Homebrew](https://formulae.brew.sh/cask/gitkraken-cli)'dan aşağıdaki komutla mevcuttur:

  Homebrew:

  ```bash
  brew install gitkraken-cli
  ```

  Veya [releases sayfası](https://github.com/gitkraken/gk-cli/releases)'ndan indirin ve binaries klasörünüze ekleyin:

  ```bash
  mv ~/Downloads/gk /usr/local/bin/gk
  ```

  ---

  ### Unix / Ubuntu

  [![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/gitkraken-cli)

  `gk`, [releases sayfası](https://github.com/gitkraken/gk-cli/releases)'ndan indirilebilir bir binary olarak mevcuttur. Sahip olduktan sonra, onu binaries klasörünüze ekleyin:

  ```bash
  mv ~/Downloads/gk /usr/local/bin/gk
  ```

  Ya da yeni bir dizin oluşturun, binary'yi taşıyın ve $PATH'e ekleyin:

  ```bash
  mkdir "$HOME/cli"
  mv ~/Downloads/gk "$HOME/cli"
  export PATH="$HOME/gk:$PATH"
  ```

  Ayrıca ilgili paketinizi (`.deb`, `.rpm`) [indirebilir][releases page] ve aşağıdakiyle yükleyebilirsiniz:

  ```bash
  sudo apt install ./gk.deb
  ```

  veya

  ```bash
  sudo rpm -i ./gk.rpm
  ```

  ---

  ### Windows

  `gk`, [Winget][winget]'ten aşağıdaki komutla mevcuttur:

  ```bash
  winget install gitkraken.cli
  ```

  ## ⚙️ Yapılandırma

  ### Nerd Fontlar

  GitKraken CLI, bazı komutlar için simgeler görüntülemek üzere Nerd Fonts'u destekler. Doğru simge renderlamasını sağlamak için lütfen https://www.nerdfonts.com/ adresinde bulunan bir Nerd Font edinin ve yükleyin. Kurulumdan sonra, seçilen Nerd Font'u terminalinizin varsayılan fontu olarak ayarlayın.

  ## Sorun Giderme

  ### `gk login` tarayıcıda kimlik doğrulamasından sonra dondurulur

  Bu sorun tarayıcıdan kaynaklanmaktadır. Şu anda Safari ve Brave'in localhost aracılığıyla 1314 portuna yanıt vermesine izin vermediğini biliyoruz. Bunu düzeltmek için varsayılan tarayıcınızı değiştirin veya yönlendirmeden önce URL'yi kopyalayın ve başka bir tarayıcıda açın.

  ### Oh-My-Zsh'ten gk

  Oh-My-Zsh, `gitk`'yi `gk` olarak takma ad yaptığından ve bu sorunlara neden olabilir. Bunu düzeltmek için terminalinize yazın:

  ```
  unalias gk
  ```

  ### Manuel macOS Kurulumu

  CLI'yi releases sayfasından macOS'a manuel olarak yüklerseniz, muhtemelen şöyle görünen bir güvenlik hatasıyla karşılaşacaksınız:

  ![](https://raw.githubusercontent.com/gitkraken/gk-cli/HEAD/images/not-opened.png)

  Bunu düzeltmek için Settings > Security & Privacy > General adresine gidin ve "Allow Anyway" (Yine de İzin Ver)'e tıklayın.

  ![](https://raw.githubusercontent.com/gitkraken/gk-cli/HEAD/images/allow-anyway.png)

  `gk setup` komutunu tekrar çalıştırmayı deneyin ve devam etmek için "Open Anyway" (Yine de Aç) öğesine tıklayın.

  ![](https://raw.githubusercontent.com/gitkraken/gk-cli/HEAD/images/open-anyway.png)
---

# 🚀 GitKraken CLI

`gk` is GitKraken on the command line. The core functionality is focused on "Work Items" which can be thought of as the feature or issue you are trying to tackle. This allows you to work with multiple repos at once and get the same UX as if you were in a monorepo. We also provide robust AI-powered commit messages and Pull Request generation. It also provides an MCP server that streamlines working with git and your Issue and git hosting providers.

GitKraken CLI is available on macOS, Windows, and Unix systems.

![](https://raw.githubusercontent.com/gitkraken/gk-cli/HEAD/images/cli-header-wide.png)

## Table of Contents

- [MCP Server](#mcp-server)
- [Documentation](#documentation)
- [Workflows](#workflows)
- [`git` Command Passthrough](#git-command-passthrough)
- [Installation](#installation)
- [Troubleshooting](#troubleshooting)
- [Support](#support)

## MCP Server

The GitKraken MCP server is a local MCP server that is powerful and easy to use. It wraps git, GitHub, Jira MCP actions as well as provides tools to LLMs that work with GitKraken APIs and functionality. You can find specific installation instructions based on your chosen AI application in the [Help Center](https://help.gitkraken.com/cli/gk-cli-mcp/).

If you want to read more about the MCP server, you can check out the [introduction blog post](https://www.gitkraken.com/blog/introducing-gitkraken-mcp)

## Documentation

`gk help` is going to be your best source for exploring the CLI. But also see the [workflows](#workflows) below.

```bash
Welcome to GitKraken CLI, a premium CLI experience for managing multiple repositories with familiar GIT CLI commands

Usage:
  gk [flags]
  gk [command]

AUTHENTICATING
  auth         Authenticate with the GitKraken platform
  provider     Add or remove provider tokens

CORE COMMANDS
  graph        Display commit graph in current repository
  issue        Manage your issues
  organization Manage your Gitkraken organizations
  work         Interact with your work.
  workspace    Interact with your workspaces. Alias: 'ws'

Additional Commands:
  help         Help about any command
  setup        Display information about your current system configuration
  version      Print the version number of GK CLI

Flags:
  -h, --help   help for gk

Use "gk [command] --help" for more information about a command.
```

## Workflows

Start with a single repo. You can add more later.

In general, your process will look like this:

```bash

# Authenticate
gk auth login

# Navigate to a git repo directory on your filesystem
cd ./path/to/repo

# Then create a Work Item and the current directory
# will be automatically added to the Work Item
gk work create "My new work item"

# Edit files...
# ...

# Commit your changes using AI
gk work commit --ai

# Push your changes
gk work push

# Create a Pull Request
gk work pr create --ai

```

Once you have familiarized yourself with using a single repo, try out creating work items and generating commits and PRs for multiple repos at a time by just adding multiple repos to a new Work Item.

```bash
# Add a repo to the current work item
gk work add ./path/to/repo # path could be as simple as "." if you are in the directory already
```

## `git` Command Passthrough

You can also use `gk` to pass through any `git` command. eg:

```bash
gk status
gk remote -v
# etc
```

## Installation

### macOS

`gk` is available from [Homebrew](https://formulae.brew.sh/cask/gitkraken-cli) with the following command:

Homebrew:

```bash
brew install gitkraken-cli
```

Or download it from the [releases page](https://github.com/gitkraken/gk-cli/releases) and add it to your binaries folder:

```bash
mv ~/Downloads/gk /usr/local/bin/gk
```

---

### Unix / Ubuntu

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/gitkraken-cli)

`gk` is available as a downloadable binary from the [releases page](https://github.com/gitkraken/gk-cli/releases). Once you have it, add it to your binaries folder:

```bash
mv ~/Downloads/gk /usr/local/bin/gk
```

Or create a new directory, move the binary and add it to $PATH:

```bash
mkdir "$HOME/cli"
mv ~/Downloads/gk "$HOME/cli"
export PATH="$HOME/gk:$PATH"
```

You can also [download][releases page] your corresponding package (`.deb`, `.rpm`) and install it with:

```bash
sudo apt install ./gk.deb
```

or

```bash
sudo rpm -i ./gk.rpm
```

---

### Windows

`gk` is available from [Winget][winget] with the following command:

```bash
winget install gitkraken.cli
```

## ⚙️ Configuration

### Nerd Fonts

The GitKraken CLI supports Nerd Fonts to display icons for some commands. To ensure correct icon rendering, please obtain and install a Nerd Font available at https://www.nerdfonts.com/. After installation, set the selected Nerd Font as the default font for your terminal.

## Troubleshooting

### `gk login` freezes after authenticating in browser

This problem is due to the browser. Currently we know that Safari and Brave do not allow to respond to localhost through port 1314. To fix this, change your default browser or copy the URL before the redirect and open it in another browser.

### gk from Oh-My-Zsh

Oh-My-Zsh has `gitk` aliased as `gk` and that can create some problems. To fix this, type in your terminal:

```
unalias gk
```

### Manual macOS Installation

If you install the CLI manually from the releases page on macOS, you will likely run into a security error that looks like this:

![](https://raw.githubusercontent.com/gitkraken/gk-cli/HEAD/images/not-opened.png)

To fix this, go to Settings > Security & Privacy > General and click "Allow Anyway".

![](https://raw.githubusercontent.com/gitkraken/gk-cli/HEAD/images/allow-anyway.png)

Try running `gk setup` again and then click "Open Anyway" to continue.

![](https://raw.githubusercontent.com/gitkraken/gk-cli/HEAD/images/open-anyway.png)
