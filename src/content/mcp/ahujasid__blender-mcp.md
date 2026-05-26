---
name: "ahujasid/blender-mcp"
description: "MCP server for working with Blender"
description_tr: "Blender ile çalışmak için MCP sunucusu"
category: "Art & Culture"
repo: "ahujasid/blender-mcp"
stars: 22034
url: "https://github.com/ahujasid/blender-mcp"
body_length: 10076
license: "MIT"
language: "Python"
body_tr: |-
  # BlenderMCP - Blender Model Context Protocol Entegrasyonu

  BlenderMCP, Blender'ı Claude AI'a Model Context Protocol (MCP) aracılığıyla bağlayarak Claude'un Blender ile doğrudan etkileşim kurmasını ve kontrolünü sağlar. Bu entegrasyon, isteme dayalı 3D modelleme, sahne oluşturma ve manipülasyonunu mümkün kılar.

  **Resmi bir web sitemiz yoktur. İnternette gördüğünüz herhangi bir web sitesi gayriresmi olup bu projeyle hiçbir bağlantısı yoktur. Bunları kendi sorumluluğunuzda kullanın.**

  [Tam eğitim](https://www.youtube.com/watch?v=lCyQ717DuzQ)

  ### Topluluğa Katılın

  Geri bildirim verin, ilham alın ve MCP üzerinde geliştirmeler yapın: [Discord](https://discord.gg/z5apgR8TFU)

  ### Destekçiler

  [CodeRabbit](https://www.coderabbit.ai/)

  **Tüm destekçiler:**

  [Bu projeyi destekleyin](https://github.com/sponsors/ahujasid)

  ## Mevcut sürüm (1.5.5)
  - Hunyuan3D desteği eklendi
  - Sahneyi daha iyi anlamak için Blender viewport ekran görüntülerini görüntüleyin
  - Sketchfab modellerini arayın ve indirin
  - Poly Haven varlıklarına API aracılığıyla destek
  - Hyper3D Rodin kullanarak 3D modelleri oluşturmak için destek
  - Blender MCP'yi uzak bir bilgisayarda çalıştırın
  - Yürütülen araçlar için telemetri (tamamen anonim)

  ### Yeni bir sürümü yükleme (mevcut kullanıcılar)
  - Yeni başlayanlar doğrudan Kuruluma gidebilir. Mevcut kullanıcılar için aşağıdaki noktalara bakın
  - En son addon.py dosyasını indirin ve eskisinin yerine koyun, ardından Blender'a ekleyin
  - MCP sunucusunu Claude'dan silin ve tekrar ekleyin, böylece yolunuzda olabilirsiniz!


  ## Özellikler

  - **Çift yönlü iletişim**: Claude AI'ı soket tabanlı sunucu aracılığıyla Blender'a bağlayın
  - **Nesne manipülasyonu**: Blender'da 3D nesneler oluşturun, değiştirin ve silin
  - **Malzeme kontrolü**: Malzemeleri ve renkleri uygulayın ve değiştirin
  - **Sahne inceleme**: Mevcut Blender sahnesinin ayrıntılı bilgisini alın
  - **Kod yürütme**: Claude'dan Blender'da rastgele Python kodu çalıştırın

  ## Bileşenler

  Sistem iki ana bileşenden oluşur:

  1. **Blender Eklentisi (`addon.py`)**: Blender içinde bir soket sunucusu oluşturan ve komutları almak ve yürütmek için bir Blender eklentisi
  2. **MCP Sunucusu (`src/blender_mcp/server.py`)**: Model Context Protocol'u uygulayan ve Blender eklentisine bağlanan bir Python sunucusu

  ## Kurulum


  ### Ön Koşullar

  - Blender 3.0 veya daha yeni
  - Python 3.10 veya daha yeni
  - uv paket yöneticisi: 

  **Mac'teyseniz, lütfen uv'yi şu şekilde yükleyin**
  ```bash
  brew install uv
  ```
  **Windows üzerinde**
  ```powershell
  powershell -c "irm https://astral.sh/uv/install.ps1 | iex" 
  ```
  ve ardından Windows'ta uv'yi kullanıcı yoluna ekleyin (Claude Desktop'ı yeniden başlatmanız gerekebilir):
  ```powershell
  $localBin = "$env:USERPROFILE\.local\bin"
  $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
  [Environment]::SetEnvironmentVariable("Path", "$userPath;$localBin", "User")
  ```

  Aksi takdirde kurulum talimatları kendi web sitelerinde bulunur: [uv'yi yükle](https://docs.astral.sh/uv/getting-started/installation/)

  **⚠️ UV yüklemeden önce devam etmeyin**

  ### Ortam Değişkenleri

  Aşağıdaki ortam değişkenleri Blender bağlantısını yapılandırmak için kullanılabilir:

  - `BLENDER_HOST`: Blender soket sunucusu için host adresi (varsayılan: "localhost")
  - `BLENDER_PORT`: Blender soket sunucusu için port numarası (varsayılan: 9876)

  Örnek:
  ```bash
  export BLENDER_HOST='host.docker.internal'
  export BLENDER_PORT=9876
  ```

  ### Claude for Desktop Entegrasyonu

  [Kurulum talimatlarını izleyin](https://www.youtube.com/watch?v=neoK_WMq92g) (uv'nin zaten yüklenmiş olduğunu varsayarak)

  Claude > Ayarlar > Geliştirici > Yapılandırmayı Düzenle > claude_desktop_config.json adresine gidin ve aşağıdakini ekleyin:

  ```json
  {
      "mcpServers": {
          "blender": {
              "command": "uvx",
              "args": [
                  "blender-mcp"
              ]
          }
      }
  }
  ```
  <details>
  <summary>Claude Code</summary>

  Blender MCP sunucusunu eklemek için Claude Code CLI'ı kullanın:

  ```bash
  claude mcp add blender uvx blender-mcp
  ```
  </details>

  ### Cursor entegrasyonu

  [![MCP Sunucusunu Yükle](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/link/mcp%2Finstall?name=blender&config=eyJjb21tYW5kIjoidXZ4IGJsZW5kZXItbWNwIn0%3D)

  Mac kullanıcıları için Ayarlar > MCP adresine gidin ve aşağıdakini yapıştırın

  - Genel sunucu olarak kullanmak için "yeni genel MCP sunucusu ekle" düğmesini kullanın ve yapıştırın
  - Projeye özgü sunucu olarak kullanmak için projenin kökünde `.cursor/mcp.json` dosyası oluşturun ve yapıştırın


  ```json
  {
      "mcpServers": {
          "blender": {
              "command": "uvx",
              "args": [
                  "blender-mcp"
              ]
          }
      }
  }
  ```

  Windows kullanıcıları için Ayarlar > MCP > Sunucu Ekle adresine gidin, aşağıdaki ayarlarla yeni bir sunucu ekleyin:

  ```json
  {
      "mcpServers": {
          "blender": {
              "command": "cmd",
              "args": [
                  "/c",
                  "uvx",
                  "blender-mcp"
              ]
          }
      }
  }
  ```

  [Cursor kurulum videosu](https://www.youtube.com/watch?v=wgWsJshecac)

  **⚠️ MCP sunucusunun yalnızca bir örneğini çalıştırın (Cursor veya Claude Desktop'ta), ikisini birden değil**

  ### Visual Studio Code Entegrasyonu

  _Ön Koşullar_: Devam etmeden önce [Visual Studio Code](https://code.visualstudio.com/) yüklü olduğundan emin olun.

  [![VS Code'a Yükle](https://img.shields.io/badge/VS_Code-Install_blender--mcp_server-0098FF?style=flat-square&logo=visualstudiocode&logoColor=ffffff)](vscode:mcp/install?%7B%22name%22%3A%22blender-mcp%22%2C%22type%22%3A%22stdio%22%2C%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22blender-mcp%22%5D%7D)

  ### Blender Eklentisini Yükleme

  1. Bu repo'dan `addon.py` dosyasını indirin
  2. Blender'ı açın
  3. Düzen > Tercihler > Eklentiler adresine gidin
  4. "Yükle..." seçeneğine tıklayın ve `addon.py` dosyasını seçin
  5. "Interface: Blender MCP" seçeneğinin yanındaki kutuyu işaretleyerek eklentiyi etkinleştirin


  ## Kullanım

  ### Bağlantıyı Başlatma
  ![Kenar çubuğunda BlenderMCP](https://raw.githubusercontent.com/ahujasid/blender-mcp/HEAD/assets/addon-instructions.png)

  1. Blender'da 3D Görünüm kenar çubuğuna gidin (görünür değilse N tuşuna basın)
  2. "BlenderMCP" sekmesini bulun
  3. API'lerinden varlıklar istiyorsanız Poly Haven onay kutusunu açın (isteğe bağlı)
  4. "Claude'a Bağlan" seçeneğine tıklayın
  5. MCP sunucusunun terminalinde çalıştığından emin olun

  ### Claude ile Kullanım

  Config dosyası Claude'da ayarlandığında ve eklenti Blender'da çalışırken, Blender MCP için araçları içeren çekiç simgesini görürsünüz.

  ![Kenar çubuğunda BlenderMCP](https://raw.githubusercontent.com/ahujasid/blender-mcp/HEAD/assets/hammer-icon.png)

  #### Yetenekler

  - Sahne ve nesne bilgilerini alın 
  - Şekilleri oluşturun, silin ve değiştirin
  - Nesnelere malzeme uygulayın veya oluşturun
  - Blender'da herhangi bir Python kodu çalıştırın
  - [Poly Haven](https://polyhaven.com/) aracılığıyla doğru modelleri, varlıkları ve HDRI'leri indirin
  - [Hyper3D Rodin](https://hyper3d.ai/) aracılığıyla yapay zeka tarafından oluşturulan 3D modelleri


  ### Örnek Komutlar

  Claude'dan isteyebileceğiniz şeylere örnekler:

  - "Altın bir kapı koruyan bir ejderhası olan bir zindanda düşük poli bir sahne oluştur" [Demo](https://www.youtube.com/watch?v=DqgKuLYUv00)
  - "Poly Haven'dan HDRI'ler, dokular ve kayalar ve bitki örtüsü gibi modelleri kullanarak bir plaj havası oluştur" [Demo](https://www.youtube.com/watch?v=I29rn92gkC4)
  - Bir referans görüntüsü verin ve bundan bir Blender sahnesini oluşturun [Demo](https://www.youtube.com/watch?v=FDRb03XPiRo)
  - "Hyper3D aracılığıyla bir bahçe cüceinin 3D modelini oluştur"
  - "Mevcut sahne hakkında bilgi alın ve bundan bir threejs taslağı yapın" [Demo](https://www.youtube.com/watch?v=jxbNI5L7AH8)
  - "Bu arabayı kırmızı ve metalik yap" 
  - "Bir küre oluştur ve onu küpün üzerine koy"
  - "Aydınlatmayı bir stüdyo gibi yap"
  - "Kamerayı sahneye doğrult ve izometrik yap"

  ## Hyper3D entegrasyonu

  Hyper3D'nin ücretsiz deneme anahtarı, günde sınırlı sayıda modeli oluşturmanıza izin verir. Günlük sınıra ulaşılırsa, bir sonraki günün sıfırlanmasını bekleyebilir veya hyper3d.ai ve fal.ai'den kendi anahtarınızı alabilirsiniz.

  ## Sorun Giderme

  - **Bağlantı sorunları**: Blender eklentisi sunucusunun çalıştığından ve MCP sunucusunun Claude'da yapılandırıldığından emin olun, terminalinde uvx komutunu çalıştırmayın. Bazen ilk komut geçmeyebilir ancak bundan sonra çalışmaya başlar.
  - **Zaman aşımı hataları**: İsteklerinizi basitleştirmeyi veya bunları daha küçük adımlara bölmeyi deneyin
  - **Poly Haven entegrasyonu**: Claude bazen hatasız davranabilir
  - **Kapatıp yeniden açmayı denediniz mi?**: Hala bağlantı hatalarıyla karşılaşıyorsanız, hem Claude'u hem de Blender sunucusunu yeniden başlatmayı deneyin


  ## Teknik Ayrıntılar

  ### İletişim Protokolü

  Sistem TCP soketleri üzerinde basit bir JSON tabanlı protokol kullanır:

  - **Komutlar** `type` ve isteğe bağlı `params` içeren JSON nesneleri olarak gönderilir
  - **Yanıtlar** `status` ve `result` veya `message` içeren JSON nesneleridir

  ## Sınırlamalar ve Güvenlik Konuları

  - `execute_blender_code` aracı Blender'da rastgele Python kodu çalıştırmaya izin verir, bu güçlü olabilir ancak potansiyel olarak tehlikeli olabilir. Üretim ortamlarında dikkatle kullanın. HER ZAMAN bunu kullanmadan önce çalışmanızı kaydedin.
  - Poly Haven, modelleri, dokuları ve HDRI görüntülerini indirmeyi gerektirir. Bunu kullanmak istemiyorsanız, Blender'daki onay kutusunu kapatın. 
  - Karmaşık işlemler daha küçük adımlara bölünmesi gerekebilir


  #### Telemetri Kontrolü

  BlenderMCP, aracı geliştirmeye yardımcı olmak için anonim kullanım verilerini toplar. Telemetriyi iki şekilde kontrol edebilirsiniz:

  1. **Blender'da**: Düzen > Tercihler > Eklentiler > Blender MCP adresine gidin ve telemetri onay kutusu'nun işaretini kaldırın
     - Onay ile (işaretli): Anonim hale getirilmiş istemler, kod parçacıkları ve ekran görüntülerini toplar
     - Onay olmadan (işaretsiz): Yalnızca minimal anonim kullanım verilerini toplar (araç adları, başarı/başarısızlık, süre)

  2. **Ortam Değişkeni**: Şunu çalıştırarak tüm telemetriyi tamamen devre dışı bırakın:
  ```bash
  DISABLE_TELEMETRY=true uvx blender-mcp
  ```

  Veya MCP yapılandırmanıza ekleyin:
  ```json
  {
      "mcpServers": {
          "blender": {
              "command": "uvx",
              "args": ["blender-mcp"],
              "env": {
                  "DISABLE_TELEMETRY": "true"
              }
          }
      }
  }
  ```

  Tüm telemetri verileri tamamen anonim hale getirilir ve yalnızca BlenderMCP'yi iyileştirmek için kullanılır.


  ## Katkıda Bulunma

  Katkılar hoş karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.

  ## Feragatname

  Bu, Blender tarafından yapılmayan üçüncü taraf bir entegrasyon. [Siddharth](https://x.com/sidahuj) tarafından yapılmıştır
---

# BlenderMCP - Blender Model Context Protocol Integration

BlenderMCP connects Blender to Claude AI through the Model Context Protocol (MCP), allowing Claude to directly interact with and control Blender. This integration enables prompt assisted 3D modeling, scene creation, and manipulation.

**We have no official website. Any website you see online is unofficial and has no affiliation with this project. Use them at your own risk.**

[Full tutorial](https://www.youtube.com/watch?v=lCyQ717DuzQ)

### Join the Community

Give feedback, get inspired, and build on top of the MCP: [Discord](https://discord.gg/z5apgR8TFU)

### Supporters

[CodeRabbit](https://www.coderabbit.ai/)

**All supporters:**

[Support this project](https://github.com/sponsors/ahujasid)

## Current version(1.5.5)
- Added Hunyuan3D support
- View screenshots for Blender viewport to better understand the scene
- Search and download Sketchfab models
- Support for Poly Haven assets through their API
- Support to generate 3D models using Hyper3D Rodin
- Run Blender MCP on a remote host
- Telemetry for tools executed (completely anonymous)

### Installating a new version (existing users)
- For newcomers, you can go straight to Installation. For existing users, see the points below
- Download the latest addon.py file and replace the older one, then add it to Blender
- Delete the MCP server from Claude and add it back again, and you should be good to go!


## Features

- **Two-way communication**: Connect Claude AI to Blender through a socket-based server
- **Object manipulation**: Create, modify, and delete 3D objects in Blender
- **Material control**: Apply and modify materials and colors
- **Scene inspection**: Get detailed information about the current Blender scene
- **Code execution**: Run arbitrary Python code in Blender from Claude

## Components

The system consists of two main components:

1. **Blender Addon (`addon.py`)**: A Blender addon that creates a socket server within Blender to receive and execute commands
2. **MCP Server (`src/blender_mcp/server.py`)**: A Python server that implements the Model Context Protocol and connects to the Blender addon

## Installation


### Prerequisites

- Blender 3.0 or newer
- Python 3.10 or newer
- uv package manager: 

**If you're on Mac, please install uv as**
```bash
brew install uv
```
**On Windows**
```powershell
powershell -c "irm https://astral.sh/uv/install.ps1 | iex" 
```
and then add uv to the user path in Windows (you may need to restart Claude Desktop after):
```powershell
$localBin = "$env:USERPROFILE\.local\bin"
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
[Environment]::SetEnvironmentVariable("Path", "$userPath;$localBin", "User")
```

Otherwise installation instructions are on their website: [Install uv](https://docs.astral.sh/uv/getting-started/installation/)

**⚠️ Do not proceed before installing UV**

### Environment Variables

The following environment variables can be used to configure the Blender connection:

- `BLENDER_HOST`: Host address for Blender socket server (default: "localhost")
- `BLENDER_PORT`: Port number for Blender socket server (default: 9876)

Example:
```bash
export BLENDER_HOST='host.docker.internal'
export BLENDER_PORT=9876
```

### Claude for Desktop Integration

[Watch the setup instruction video](https://www.youtube.com/watch?v=neoK_WMq92g) (Assuming you have already installed uv)

Go to Claude > Settings > Developer > Edit Config > claude_desktop_config.json to include the following:

```json
{
    "mcpServers": {
        "blender": {
            "command": "uvx",
            "args": [
                "blender-mcp"
            ]
        }
    }
}
```
<details>
<summary>Claude Code</summary>

Use the Claude Code CLI to add the blender MCP server:

```bash
claude mcp add blender uvx blender-mcp
```
</details>

### Cursor integration

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/link/mcp%2Finstall?name=blender&config=eyJjb21tYW5kIjoidXZ4IGJsZW5kZXItbWNwIn0%3D)

For Mac users, go to Settings > MCP and paste the following 

- To use as a global server, use "add new global MCP server" button and paste
- To use as a project specific server, create `.cursor/mcp.json` in the root of the project and paste


```json
{
    "mcpServers": {
        "blender": {
            "command": "uvx",
            "args": [
                "blender-mcp"
            ]
        }
    }
}
```

For Windows users, go to Settings > MCP > Add Server, add a new server with the following settings:

```json
{
    "mcpServers": {
        "blender": {
            "command": "cmd",
            "args": [
                "/c",
                "uvx",
                "blender-mcp"
            ]
        }
    }
}
```

[Cursor setup video](https://www.youtube.com/watch?v=wgWsJshecac)

**⚠️ Only run one instance of the MCP server (either on Cursor or Claude Desktop), not both**

### Visual Studio Code Integration

_Prerequisites_: Make sure you have [Visual Studio Code](https://code.visualstudio.com/) installed before proceeding.

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_blender--mcp_server-0098FF?style=flat-square&logo=visualstudiocode&logoColor=ffffff)](vscode:mcp/install?%7B%22name%22%3A%22blender-mcp%22%2C%22type%22%3A%22stdio%22%2C%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22blender-mcp%22%5D%7D)

### Installing the Blender Addon

1. Download the `addon.py` file from this repo
1. Open Blender
2. Go to Edit > Preferences > Add-ons
3. Click "Install..." and select the `addon.py` file
4. Enable the addon by checking the box next to "Interface: Blender MCP"


## Usage

### Starting the Connection
![BlenderMCP in the sidebar](https://raw.githubusercontent.com/ahujasid/blender-mcp/HEAD/assets/addon-instructions.png)

1. In Blender, go to the 3D View sidebar (press N if not visible)
2. Find the "BlenderMCP" tab
3. Turn on the Poly Haven checkbox if you want assets from their API (optional)
4. Click "Connect to Claude"
5. Make sure the MCP server is running in your terminal

### Using with Claude

Once the config file has been set on Claude, and the addon is running on Blender, you will see a hammer icon with tools for the Blender MCP.

![BlenderMCP in the sidebar](https://raw.githubusercontent.com/ahujasid/blender-mcp/HEAD/assets/hammer-icon.png)

#### Capabilities

- Get scene and object information 
- Create, delete and modify shapes
- Apply or create materials for objects
- Execute any Python code in Blender
- Download the right models, assets and HDRIs through [Poly Haven](https://polyhaven.com/)
- AI generated 3D models through [Hyper3D Rodin](https://hyper3d.ai/)


### Example Commands

Here are some examples of what you can ask Claude to do:

- "Create a low poly scene in a dungeon, with a dragon guarding a pot of gold" [Demo](https://www.youtube.com/watch?v=DqgKuLYUv00)
- "Create a beach vibe using HDRIs, textures, and models like rocks and vegetation from Poly Haven" [Demo](https://www.youtube.com/watch?v=I29rn92gkC4)
- Give a reference image, and create a Blender scene out of it [Demo](https://www.youtube.com/watch?v=FDRb03XPiRo)
- "Generate a 3D model of a garden gnome through Hyper3D"
- "Get information about the current scene, and make a threejs sketch from it" [Demo](https://www.youtube.com/watch?v=jxbNI5L7AH8)
- "Make this car red and metallic" 
- "Create a sphere and place it above the cube"
- "Make the lighting like a studio"
- "Point the camera at the scene, and make it isometric"

## Hyper3D integration

Hyper3D's free trial key allows you to generate a limited number of models per day. If the daily limit is reached, you can wait for the next day's reset or obtain your own key from hyper3d.ai and fal.ai.

## Troubleshooting

- **Connection issues**: Make sure the Blender addon server is running, and the MCP server is configured on Claude, DO NOT run the uvx command in the terminal. Sometimes, the first command won't go through but after that it starts working.
- **Timeout errors**: Try simplifying your requests or breaking them into smaller steps
- **Poly Haven integration**: Claude is sometimes erratic with its behaviour
- **Have you tried turning it off and on again?**: If you're still having connection errors, try restarting both Claude and the Blender server


## Technical Details

### Communication Protocol

The system uses a simple JSON-based protocol over TCP sockets:

- **Commands** are sent as JSON objects with a `type` and optional `params`
- **Responses** are JSON objects with a `status` and `result` or `message`

## Limitations & Security Considerations

- The `execute_blender_code` tool allows running arbitrary Python code in Blender, which can be powerful but potentially dangerous. Use with caution in production environments. ALWAYS save your work before using it.
- Poly Haven requires downloading models, textures, and HDRI images. If you do not want to use it, please turn it off in the checkbox in Blender. 
- Complex operations might need to be broken down into smaller steps


#### Telemetry Control

BlenderMCP collects anonymous usage data to help improve the tool. You can control telemetry in two ways:

1. **In Blender**: Go to Edit > Preferences > Add-ons > Blender MCP and uncheck the telemetry consent checkbox
   - With consent (checked): Collects anonymized prompts, code snippets, and screenshots
   - Without consent (unchecked): Only collects minimal anonymous usage data (tool names, success/failure, duration)

2. **Environment Variable**: Completely disable all telemetry by running:
```bash
DISABLE_TELEMETRY=true uvx blender-mcp
```

Or add it to your MCP config:
```json
{
    "mcpServers": {
        "blender": {
            "command": "uvx",
            "args": ["blender-mcp"],
            "env": {
                "DISABLE_TELEMETRY": "true"
            }
        }
    }
}
```

All telemetry data is fully anonymized and used solely to improve BlenderMCP.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer

This is a third-party integration and not made by Blender. Made by [Siddharth](https://x.com/sidahuj)
