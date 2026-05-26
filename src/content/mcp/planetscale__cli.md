---
name: "planetscale/cli"
description: "The CLI for PlanetScale Database."
description_tr: "PlanetScale Database için CLI aracı."
category: "Databases"
repo: "planetscale/cli"
stars: 650
url: "https://github.com/planetscale/cli"
body_length: 4040
license: "Apache-2.0"
language: "Go"
homepage: "https://planetscale.com/cli"
body_tr: |-
  # PlanetScale CLI [![Build status](https://github.com/planetscale/cli/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/planetscale/cli/actions/workflows/ci.yml)

  PlanetScale sadece bir veritabanıdan daha fazlası ve bizim CLI'mız komutların karmaşık bir yığınından daha fazlası. `pscale` command line aracı, branch'ler, deploy request'leri ve diğer PlanetScale konseptlerini parmaklarınızın ucuna getirir.

  ![PlanetScale CLI](https://user-images.githubusercontent.com/6104/191803574-be63da54-d255-4f5a-ab2d-2b49cdf7eb12.png)


  ## Kurulum

  #### macOS

  `pscale` bir Homebrew Tap aracılığıyla ve [releases](https://github.com/planetscale/cli/releases/latest) sayfasından indirilebilen binary olarak mevcuttur:

  ```
  brew install planetscale/tap/pscale
  ```
  İsteğe bağlı: `pscale` belirli komutlar için PATH'inizde bir MySQL 8 Client'ı gerektirir. Bunu aşağıdaki komutu çalıştırarak kurabilirsiniz:

  ```
  brew install mysql-client@8.4
  ```

  En son sürüme yükseltmek için:

  ```
  brew upgrade pscale
  ```

  #### Linux

  `pscale` [releases](https://github.com/planetscale/cli/releases/latest) sayfasından indirilebilen binary'ler olarak mevcuttur. [releases](https://github.com/planetscale/cli/releases/latest) sayfasından .deb veya .rpm'yi indirin ve sırasıyla `sudo dpkg -i` ve `sudo rpm -i` ile kurun.

  Arch: [`pscale-cli-bin`](https://aur.archlinux.org/packages/pscale-cli-bin)

  #### Windows

  `pscale` [scoop](https://scoop.sh/) aracılığıyla ve [releases](https://github.com/planetscale/cli/releases/latest) sayfasından indirilebilen binary olarak mevcuttur:

  ```
  scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
  scoop install pscale mysql
  ```

  En son sürüme yükseltmek için:

  ```
  scoop update pscale
  ```

  #### Manuel Kurulum

  [releases](https://github.com/planetscale/cli/releases/latest) sayfasından önceden derlenmiş binary'leri indirin ve istediğiniz konuma kopyalayın.

  Alternatif olarak, tüm `macOS`, `Windows` ve `Linux` platformlarında çalışan [bin](https://github.com/marcosnils/bin) kurabilirsiniz:

  ```
  bin install https://github.com/planetscale/cli
  ```

  En son sürüme yükseltmek için:

  ```
  bin upgrade pscale
  ```

  #### Container image'ları

  Kullanıma hazır Docker container image'ları sağlıyoruz. En son image'ı çekmek için:

  ```
  docker pull planetscale/pscale:latest
  ```

  Belirli bir sürümü çekmek için:

  ```
  docker pull planetscale/pscale:v0.63.0
  ```

  `pscale` yazınca docker'dan pscale'nin en son sürümünü çalıştıran bir shell alias'ına sahip olmak isterseniz:

  ```
  mkdir -p $HOME/.config/planetscale
  alias pscale="docker run -e HOME=/tmp -v $HOME/.config/planetscale:/tmp/.config/planetscale --user $(id -u):$(id -g) --rm -it -p 3306:3306/tcp planetscale/pscale:latest"
  ```

  Servis token'ları ile çalışan ve pseudo terminal veya non-interactive mode gerektiren komutlar arasında ayrım yapan daha gelişmiş bir örneğe ihtiyacınız varsa, [bu shell fonksiyonuna göz atın](https://github.com/jonico/pscale-cli-helper-scripts/blob/main/.pscale/cli-helper-scripts/use-pscale-docker-image.sh).

  ## MCP Server Entegrasyonu

  > **Deprecated:** CLI tabanlı MCP server'ı (`pscale mcp`) deprecated'dir ve gelecek bir sürümde kaldırılacaktır. Bunun yerine PlanetScale MCP server'ını kullanın: https://planetscale.com/docs/connect/mcp

  ## GitHub Actions Kullanımı
  GitHub Actions'da `pscale`'ı kurmak ve kullanmak için [setup-pscale-action](https://github.com/planetscale/setup-pscale-action) kullanın.

  ```yaml
  - name: Setup pscale
    uses: planetscale/setup-pscale-action@v1
  - name: Use pscale
    env:
      PLANETSCALE_SERVICE_TOKEN_ID: ${{ secrets.PLANETSCALE_SERVICE_TOKEN_ID }}
      PLANETSCALE_SERVICE_TOKEN: ${{ secrets.PLANETSCALE_SERVICE_TOKEN }}
    run: |
      pscale deploy-request list my-db --org my-org
  ```

  ## Yerel Geliştirme

  Bir command çalıştırmak için:
  ```
  go run cmd/pscale/main.go <command>
  ```

  Alternatif olarak, `pscale`'ı build edebilirsiniz:
  ```
  go build cmd/pscale/main.go
  ```

  Ve daha sonra test etmek için `cmd/pscale/` içinde build edilen `pscale` binary'sini kullanın:
  ```
  ./cmd/pscale/pscale <command>
  ```

  ## Dokümantasyon

  Lütfen Dokümantasyon sayfamızı ziyaret edin: [planetscale.com/docs](https://planetscale.com/docs/reference/planetscale-cli)
---

# PlanetScale CLI [![Build status](https://github.com/planetscale/cli/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/planetscale/cli/actions/workflows/ci.yml)

PlanetScale is more than a database and our CLI is more than a jumble of commands. The `pscale` command line tool brings branches, deploy requests, and other PlanetScale concepts to your fingertips.

![PlanetScale CLI](https://user-images.githubusercontent.com/6104/191803574-be63da54-d255-4f5a-ab2d-2b49cdf7eb12.png)


## Installation

#### macOS

`pscale` is available via a Homebrew Tap, and as downloadable binary from the [releases](https://github.com/planetscale/cli/releases/latest) page:

```
brew install planetscale/tap/pscale
```
Optional: `pscale` requires a MySQL 8 Client in your PATH for certain commands. You can install it by running:

```
brew install mysql-client@8.4
```

To upgrade to the latest version:

```
brew upgrade pscale
```

#### Linux

`pscale` is available as downloadable binaries from the [releases](https://github.com/planetscale/cli/releases/latest) page. Download the .deb or .rpm from the [releases](https://github.com/planetscale/cli/releases/latest) page and install with `sudo dpkg -i` and `sudo rpm -i` respectively.

Arch: [`pscale-cli-bin`](https://aur.archlinux.org/packages/pscale-cli-bin)

#### Windows

`pscale` is available via [scoop](https://scoop.sh/), and as a downloadable binary from the [releases](https://github.com/planetscale/cli/releases/latest) page:

```
scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
scoop install pscale mysql
```

To upgrade to the latest version:

```
scoop update pscale
```

#### Manually

Download the pre-compiled binaries from the [releases](https://github.com/planetscale/cli/releases/latest) page and copy to the desired location.

Alternatively, you can install [bin](https://github.com/marcosnils/bin) which works on all `macOS`, `Windows`, and `Linux` platforms:

```
bin install https://github.com/planetscale/cli
```

To upgrade to the latest version

```
bin upgrade pscale
```

#### Container images

We provide ready to use Docker container images.  To pull the latest image:

```
docker pull planetscale/pscale:latest
```

To pull a specific version:

```
docker pull planetscale/pscale:v0.63.0
```

If you like to have a shell alias that runs the latest version of pscale from docker whenever you type `pscale`:

```
mkdir -p $HOME/.config/planetscale
alias pscale="docker run -e HOME=/tmp -v $HOME/.config/planetscale:/tmp/.config/planetscale --user $(id -u):$(id -g) --rm -it -p 3306:3306/tcp planetscale/pscale:latest"
```

If you need a more advanced example that works with service tokens and differentiates between commands that need a pseudo terminal or non-interactive mode, [have a look at this shell function](https://github.com/jonico/pscale-cli-helper-scripts/blob/main/.pscale/cli-helper-scripts/use-pscale-docker-image.sh).

## MCP Server Integration

> **Deprecated:** The CLI-based MCP server (`pscale mcp`) is deprecated and will be removed in a future version. Use the PlanetScale MCP server instead: https://planetscale.com/docs/connect/mcp

## GitHub Actions Usage
Use the [setup-pscale-action](https://github.com/planetscale/setup-pscale-action) to install and use `pscale` in GitHub Actions.

```yaml
- name: Setup pscale
  uses: planetscale/setup-pscale-action@v1
- name: Use pscale
  env:
    PLANETSCALE_SERVICE_TOKEN_ID: ${{ secrets.PLANETSCALE_SERVICE_TOKEN_ID }}
    PLANETSCALE_SERVICE_TOKEN: ${{ secrets.PLANETSCALE_SERVICE_TOKEN }}
  run: |
    pscale deploy-request list my-db --org my-org
```

## Local Development

To run a command:
```
go run cmd/pscale/main.go <command>
```

Alternatively, you can build `pscale`:
```
go build cmd/pscale/main.go
```

And then use the `pscale` binary built in `cmd/pscale/` for testing:
```
./cmd/pscale/pscale <command>
```

## Documentation

Please checkout our Documentation page: [planetscale.com/docs](https://planetscale.com/docs/reference/planetscale-cli)
