---
name: "lamemind/mcp-server-multiverse"
description: "A middleware server that enables multiple isolated instances of the same MCP servers to coexist independently with unique namespaces and configurations."
category: "Developer Tools"
repo: "lamemind/mcp-server-multiverse"
stars: 77
url: "https://github.com/lamemind/mcp-server-multiverse"
body_length: 9216
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Multiverse MCP Server

  Birden fazla aynı MCP sunucusunun izole edilmiş örneklerinin bağımsız olarak birlikte varolmasını sağlayan benzersiz ad alanları ve konfigürasyonlarla çalışan bir ara katman sunucusu.

  Multiverse MCP Server, aynı MCP sunucularının çatışma olmadan eşzamanlı olarak çalışabileceği izole işletim alanları oluşturur. Her "evren" kendi konfigürasyonunu, dosya sistemi erişimini ve fonksiyon adlandırmasını korur; bu da geliştiricilerin aynı sunucu türünün birden fazla örneğini çalıştırırken farklı bağlamlar veya projeler arasında tam ayrılık sağlamasını mümkün kılar.

  ## Temel Özellikler

  ### Birden Fazla Örneği Çalıştırın
  Aynı MCP sunucu türünün birden fazla örneğini bağımsız ve eşzamanlı olarak çalıştırın. Her örnek kendi izole evreninde ayrı konfigürasyonlarla çalışır. Bu şu senaryoları mümkün kılar:
  - Farklı veritabanlarına işaret eden birden fazla MySQL sunucusu `mcp-server-mysql`
  - Farklı Kişisel Erişim Jetonları ile birden fazla Git sunucusu `mcp-server-git`
  - Farklı kök yollarına erişen birden fazla dosya sistemi sunucusu `mcp-server-filesystem`

  ### Otomatik Sunucu Yeniden Başlatması
  Geliştirme sırasında dosya izleme yeteneğine sahip MCP sunucunuzu kaydedin. Etkinleştirildiğinde, sunucu belirtilen dizindeki değişiklikleri otomatik olarak algılar ve zarif bir yeniden başlatma gerçekleştirerek geliştirme ve test işlemlerini sorunsuz hale getirir.

  ### JSON Tabanlı Konfigürasyon Sistemi
  Multiverse kurulumunuzu basit ve esnek bir JSON konfigürasyon formatı kullanarak tanımlayın. Her sunucu örneği kendi parametreleriyle yapılandırılabilir:
  - Komut ve argümanları
  - Ortam değişkenleri
  - Yol çözümleme kuralları
  - Dosya izleme ayarları

  ## Barındırılan dağıtım

  Barındırılan bir dağıtım [Fronteir AI](https://fronteir.ai/mcp/lamemind-mcp-server-multiverse) üzerinde mevcuttur.

  ## Kurulum

  Öncelikle, [Claude Desktop uygulamasını](https://claude.ai/download) indirip yüklediğinizden ve npm'nin kurulu olduğundan emin olun.

  Ardından, `claude_desktop_config.json` dosyanıza bu girişi ekleyin
  - Mac'te, `~/Library/Application\ Support/Claude/claude_desktop_config.json` adresinde bulunur
  - Windows'ta, `C:\Users\<username>\AppData\Roaming\Claude\claude_desktop_config.json` adresinde bulunur

  Şimdi kaç tane multiverse sunucusu çalıştırmak istediğinizi ekleyin. Örneğin, `mcp-server-multiverse`'in iki örneğini çalıştırmak istiyorsanız, biri işiniz için diğeri yan projeniz için, aşağıdaki konfigürasyonu ekleyebilirsiniz:

  ```json
  {
    "mcpServers": {
      "job-multiverse": {
        "command": "npx",
        "args": [
          "-y",
          "@lamemind/mcp-server-multiverse@latest",
          "/path/to/your/job-multiverse.json"
        ]
      },
      "side-project-multiverse": {
        "command": "npx",
        "args": [
          "-y",
          "@lamemind/mcp-server-multiverse@latest",
          "/path/to/your/side-project-multiverse.json"
        ]
      }
    }
  }
  ```

  Bu konfigürasyon, Claude Desktop'ın uygulamayı başlattığınızda `mcp-server-multiverse` örneklerini otomatik olarak başlatmasını sağlar.

  ![demo.png](https://raw.githubusercontent.com/lamemind/mcp-server-multiverse/HEAD/assets/demo.png)

  ## Konfigürasyon Örnekleri

  ### `mcp-server-mysql`'in farklı veritabanlarıyla iki izole örneği oluşturun

  `job-multiverse.json` dosyanız
  ~~~JSON
  {
    "serverName": "JobMultiverse",
    "functionsPrefix": "job",
    "servers": [
      {
        "command": "npx",
        "args": [
          "-y",
          "@benborla29/mcp-server-mysql"
        ],
        "env": {
          "MYSQL_HOST": "127.0.0.1",
          "MYSQL_PORT": "3306",
          "MYSQL_USER": "root",
          "MYSQL_PASS": "",
          "MYSQL_DB": "my-job-db"
        }
      }
    ]
  }
  ~~~

  `side-project-multiverse.json` dosyanız
  ~~~JSON
  {
    "serverName": "SideProjectMultiverse",
    "functionsPrefix": "side-project",
    "servers": [
      {
        "command": "npx",
        "args": [
          "-y",
          "@benborla29/mcp-server-mysql"
        ],
        "env": {
          "MYSQL_HOST": "127.0.0.1",
          "MYSQL_PORT": "3306",
          "MYSQL_USER": "root",
          "MYSQL_PASS": "",
          "MYSQL_DB": "side-project-db"
        }
      }
    ]
  }
  ~~~


  ### `mcp-server-filesystem`'in izole örneğini oluşturun

  - `mcp-server-filesystem`'in fonksiyonları `side-project` öneki ile sunulacak, örneğin `side-project_read_file`, `side-project_write_file`.
  - Kök yol, `pathResolution` konfigürasyonu kullanılarak müşteriden (örneğin Claude Desktop) gizlenebilir.

  `pathResolution`'ın isteğe bağlı olduğunu ve kök yolu müşteriden gizlemek istiyorsanız yalnızca gerekli olduğunu unutmayın.

  `multiverse.json` dosyanız
  ~~~JSON
  {
    "serverName": "MySideProject",
    "functionsPrefix": "side-project",
    "servers": [
      {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-filesystem@latest",
          "/full/path/to/side-project"
        ],
        "pathResolution": {
          "root": "/full/path/to/side-project",
          "applyTo": [
            "path",
            "paths"
          ]
        }
      }
    ]
  }
  ~~~


  ### `fileWatch` ile dosya değişikliklerinde otomatik sunucu yeniden başlatması

  `multiverse.json` dosyanız
  ~~~JSON
  {
    "serverName": "MySideProject",
    "functionsPrefix": "side-project",
    "servers": [
      {
        "command": "node",
        "args": [
          "/my-own/mcp-server/i-m-working-on/build/index.js"
        ],
        "fileWatch": {
          "enabled": true,
          "path": "/my-own/mcp-server/i-m-working-on/build/"
        }
      }
    ]
  }
  ~~~

  ### `hideFunctions` seçeneği ile belirli fonksiyonları gizleme

  `hideFunctions` dizisini kullanarak sarılı sunuculardan belirli fonksiyonları seçilerek gizleyebilirsiniz. Bu, bir sunucuyu kullanmak istediğiniz ancak belirli potansiyel olarak tehlikeli veya gereksiz fonksiyonlara erişimi kısıtlamak istediğinizde kullanışlıdır.

  `hideFunctions` dizisi, sarılı sunucudan gizlenecek fonksiyon adlarının bir listesini kabul eder. Bir fonksiyon gizlendiğinde:
  - Ana MCP sunucusu ile kaydedilmez
  - Müşteri (örneğin Claude Desktop) tarafından kullanılamaz
  - Mevcut fonksiyonların listesinde görünmez

  Bu özellik özellikle şu durumlarda kullanışlıdır:
  - Potansiyel olarak tehlikeli fonksiyonlara erişimi kısıtlama (örneğin GitHub'ta `delete_repository`)
  - Nadiren kullanılan fonksiyonları gizleyerek arayüzü basitleştirme
  - Farklı sunucu örnekleri için farklı izin seviyeleri oluşturma

  ~~~JSON
  {
    "serverName": "GitHubWithRestrictions",
    "functionsPrefix": "github",
    "servers": [
      {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-github@latest"
        ],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-personal-access-token>"
        },
        "hideFunctions": [
          "create_repository",
          "delete_repository",
          "create_issue"
        ]
      }
    ]
  }
  ~~~

  Bu örnekte, GitHub sunucusu normal şekilde başlayacak ancak `create_repository`, `delete_repository` ve `create_issue` fonksiyonları gizlenecek ve müşteri tarafından kullanılamayacak olacaktır.


  ### `enabled` bayrağı ile belirli sunucuları devre dışı bırakma

  `enabled` bayrağını `false` olarak ayarlayarak belirli sunucuları JSON dosyasından kaldırmadan seçilerek devre dışı bırakabilirsiniz. Bu, geliştirme veya test sırasında sunucuları geçici olarak devre dışı bırakmak istediğinizde kullanışlıdır.
  ~~~JSON
  {
    "serverName": "MySideProject",
    "functionsPrefix": "side-project",
    "servers": [
      {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-filesystem@latest",
          "/full/path/to/side-project"
        ],
        "hideFunctions": [ "write_file" ]
      },
      {
        "enabled": false,
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-github@latest"
        ]
      }
    ]
  }
  ~~~

  Bu örnekte, ilk sunucu (dosya sistemi) başlayacak ancak `write_file` fonksiyonu gizlenmiş olacak, ikinci sunucu (GitHub) devre dışı bırakılmış ve başlatılmayacaktır.

  ### `multiverse.json` dosyasının tam örneği

  Bu örnek, farklı sunucu türlerinin birden fazla örneğiyle bir multiverse sunucusu oluşturmayı gösterir.

  `pathResolution`'ın isteğe bağlı olduğunu ve kök yolu müşteriden gizlemek istiyorsanız yalnızca gerekli olduğunu unutmayın.

  ~~~JSON
  {
    "serverName": "HugeProjectWithALotOfResources",
    "functionsPrefix": "huge-project",
    "servers": [
      {
        "command": "node",
        "args": [
          "/my-own/mcp-server/i-m-working-on/build/index.js"
        ],
        "fileWatch": {
          "enabled": true,
          "path": "/my-own/mcp-server/i-m-working-on/build/"
        }
      },
      {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-filesystem@latest",
          "/full/path/to/huge-project"
        ],
        "pathResolution": {
          "root": "/full/path/to/huge-project",
          "applyTo": [
            "path",
            "paths"
          ]
        }
      },
      {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-github@latest"
        ],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-personal-access-token>"
        }
      },
      {
        "command": "uvx",
        "args": [
          "mcp-server-git",
          "--repository",
          "/full/path/to/huge-project"
        ],
        "pathResolution": {
          "root": "/full/path/to/huge-project",
          "applyTo": [
            "repo_path"
          ]
        }
      }
    ]
  }
  ~~~

  ## Yapılacaklar

  - [ ] `Prompts` desteği ekleyin
  - [ ] `Resources` desteği ekleyin
  - [ ] Multiverse sunucularını yönetmek için bir GUI ekleyin

  ## Doğrulanan Platformlar

  - [x] Windows
  - [ ] macOS
  - [ ] Linux

  ## Lisans

  MIT
---

# Multiverse MCP Server

A middleware server that enables multiple isolated instances of the same MCP servers to coexist independently with unique namespaces and configurations.

The Multiverse MCP Server creates isolated operational spaces where identical MCP servers can run simultaneously without conflicts. Each "universe" maintains its own configuration, filesystem access, and function naming, enabling developers to run multiple instances of the same server type while maintaining complete separation between different contexts or projects.

## Key Features

### Run Multiple Instances
Run multiple instances of the same MCP server type independently and simultaneously. Each instance operates in its own isolated universe with separate configurations. This enables scenarios like:
- Multiple MySQL servers `mcp-server-mysql` pointing to different databases
- Multiple Git servers `mcp-server-git` with different Personal Access Tokens
- Multiple filesystem servers `mcp-server-filesystem` accessing different root paths

### Automatic Server Restart
Register your MCP server with file watching capability during development. When enabled, the server automatically detects changes in the specified directory and performs a graceful restart, making development and testing seamless.

### JSON-based Configuration System
Define your multiverse setup using a simple and flexible JSON configuration format. Each server instance can be configured with its own:
- Command and arguments
- Environment variables
- Path resolution rules
- File watching settings

## Hosted deployment

A hosted deployment is available on [Fronteir AI](https://fronteir.ai/mcp/lamemind-mcp-server-multiverse).

## Installation

First, ensure you've downloaded and installed the [Claude Desktop app](https://claude.ai/download) and you have npm installed.

Next, add this entry to your `claude_desktop_config.json` 
- on Mac, found at `~/Library/Application\ Support/Claude/claude_desktop_config.json`
- on Windows, found at `C:\Users\<username>\AppData\Roaming\Claude\claude_desktop_config.json`

Now add how many multiverse servers you want to run. For example, if you want to run two instances of `mcp-server-multiverse`, one for your job and one for your side project, you can add the following configuration:

```json
{
  "mcpServers": {
    "job-multiverse": {
      "command": "npx",
      "args": [
        "-y",
        "@lamemind/mcp-server-multiverse@latest",
        "/path/to/your/job-multiverse.json"
      ]
    },
    "side-project-multiverse": {
      "command": "npx",
      "args": [
        "-y",
        "@lamemind/mcp-server-multiverse@latest",
        "/path/to/your/side-project-multiverse.json"
      ]
    }
  }
}
```

This config allows Claude Desktop to automatically start the `mcp-server-multiverse` instances when you start the app.

![demo.png](https://raw.githubusercontent.com/lamemind/mcp-server-multiverse/HEAD/assets/demo.png)

## Configuration Examples

### Create two isolated instances of `mcp-server-mysql` with different databases

Your `job-multiverse.json` file
~~~JSON
{
  "serverName": "JobMultiverse",
  "functionsPrefix": "job",
  "servers": [
    {
      "command": "npx",
      "args": [
        "-y",
        "@benborla29/mcp-server-mysql"
      ],
      "env": {
        "MYSQL_HOST": "127.0.0.1",
        "MYSQL_PORT": "3306",
        "MYSQL_USER": "root",
        "MYSQL_PASS": "",
        "MYSQL_DB": "my-job-db"
      }
    }
  ]
}
~~~

Your `side-project-multiverse.json` file
~~~JSON
{
  "serverName": "SideProjectMultiverse",
  "functionsPrefix": "side-project",
  "servers": [
    {
      "command": "npx",
      "args": [
        "-y",
        "@benborla29/mcp-server-mysql"
      ],
      "env": {
        "MYSQL_HOST": "127.0.0.1",
        "MYSQL_PORT": "3306",
        "MYSQL_USER": "root",
        "MYSQL_PASS": "",
        "MYSQL_DB": "side-project-db"
      }
    }
  ]
}
~~~


### Create an isolated instance of `mcp-server-filesystem`

- The `mcp-server-filesystem`'s functions will be exposed with `side-project` prefix, e.g. `side-project_read_file`, `side-project_write_file`.
- The root path can be hidden from the client (e.g. Claude Desktop) by using the `pathResolution` configuration.

Note that `pathResolution` is optional and is only needed if you want to hide the root path from the client.

Your `multiverse.json` file
~~~JSON
{
  "serverName": "MySideProject",
  "functionsPrefix": "side-project",
  "servers": [
    {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem@latest",
        "/full/path/to/side-project"
      ],
      "pathResolution": {
        "root": "/full/path/to/side-project",
        "applyTo": [
          "path",
          "paths"
        ]
      }
    }
  ]
}
~~~


### Automatic server restart on file changes with `fileWatch`

Your `multiverse.json` file
~~~JSON
{
  "serverName": "MySideProject",
  "functionsPrefix": "side-project",
  "servers": [
    {
      "command": "node",
      "args": [
        "/my-own/mcp-server/i-m-working-on/build/index.js"
      ],
      "fileWatch": {
        "enabled": true,
        "path": "/my-own/mcp-server/i-m-working-on/build/"
      }
    }
  ]
}
~~~

### Hiding specific functions with the `hideFunctions` option

You can selectively hide specific functions from wrapped servers using the `hideFunctions` array. This is useful when you want to use a server but restrict access to certain potentially dangerous or unnecessary functions.

The `hideFunctions` array accepts a list of function names that should be hidden from the wrapped server. When a function is hidden:
- It won't be registered with the main MCP server
- It won't be available to the client (e.g., Claude Desktop)
- It won't appear in the list of available functions

This feature is particularly useful for:
- Restricting access to potentially dangerous functions (e.g., `delete_repository` in GitHub)
- Simplifying the interface by hiding rarely used functions
- Creating different permission levels for different server instances

~~~JSON
{
  "serverName": "GitHubWithRestrictions",
  "functionsPrefix": "github",
  "servers": [
    {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github@latest"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-personal-access-token>"
      },
      "hideFunctions": [
        "create_repository",
        "delete_repository",
        "create_issue"
      ]
    }
  ]
}
~~~

In this example, the GitHub server will start normally, but the functions `create_repository`, `delete_repository`, and `create_issue` will be hidden and unavailable to the client.


### Disabling specific servers with the `enabled` flag

You can selectively disable specific servers in your configuration without removing them from the JSON file by setting the `enabled` flag to `false`. This is useful for temporarily disabling servers during development or testing.
~~~JSON
{
  "serverName": "MySideProject",
  "functionsPrefix": "side-project",
  "servers": [
    {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem@latest",
        "/full/path/to/side-project"
      ],
      "hideFunctions": [ "write_file" ]
    },
    {
      "enabled": false,
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github@latest"
      ]
    }
  ]
}
~~~

In this example, the first server (filesystem) will start but the function `write_file` has been hidden, the second server (GitHub) is disabled and won't be started.

### Full example of a `multiverse.json` file

This example demonstrates how to create a multiverse server with multiple instances of different server types.

Note that `pathResolution` is optional and is only needed if you want to hide the root path from the client.

~~~JSON
{
  "serverName": "HugeProjectWithALotOfResources",
  "functionsPrefix": "huge-project",
  "servers": [
    {
      "command": "node",
      "args": [
        "/my-own/mcp-server/i-m-working-on/build/index.js"
      ],
      "fileWatch": {
        "enabled": true,
        "path": "/my-own/mcp-server/i-m-working-on/build/"
      }
    },
    {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem@latest",
        "/full/path/to/huge-project"
      ],
      "pathResolution": {
        "root": "/full/path/to/huge-project",
        "applyTo": [
          "path",
          "paths"
        ]
      }
    },
    {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github@latest"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-personal-access-token>"
      }
    },
    {
      "command": "uvx",
      "args": [
        "mcp-server-git",
        "--repository",
        "/full/path/to/huge-project"
      ],
      "pathResolution": {
        "root": "/full/path/to/huge-project",
        "applyTo": [
          "repo_path"
        ]
      }
    }
  ]
}
~~~

## To Do

- [ ] Add support for `Prompts`
- [ ] Add support for `Resources`
- [ ] Add a GUI for managing multiverse servers

## Verified Platforms

- [x] Windows
- [ ] macOS
- [ ] Linux

## License

MIT
