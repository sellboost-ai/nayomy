---
name: "lpigeon/unitree-go2-mcp-server"
description: "The Unitree Go2 MCP Server is a server built on the MCP that enables users to control the Unitree Go2 robot using natural language commands interpreted by a LLM."
category: "Developer Tools"
repo: "lpigeon/unitree-go2-mcp-server"
stars: 78
url: "https://github.com/lpigeon/unitree-go2-mcp-server"
body_length: 4726
license: "Apache-2.0"
language: "Python"
homepage: "https://github.com/lpigeon/unitree-go2-mcp-server"
body_tr: |-
  # Unitree Go2 MCP Server
  ![ROS 2](https://img.shields.io/badge/ROS_2-Foxy|Humble-blue)
  ![Static Badge](https://img.shields.io/badge/License-Apache2.0-green)

  <center></center>

  **Unitree Go2 MCP Server**, Model Context Protocol (MCP) üzerine inşa edilmiş bir sunucudur ve kullanıcıların Unitree Go2 robotunu Large Language Model (LLM) tarafından yorumlanan doğal dil komutları kullanarak kontrol etmesini sağlar. Bu komutlar ROS2 talimatlarına çevrilir ve robotun karşılık gelen eylemleri gerçekleştirmesini sağlar.

  <a href="https://glama.ai/mcp/servers/@lpigeon/unitree-go2-mcp-server">
    
  </a>

  ## Gereksinimler

  - **Unitree Go2 robotu**
  - **Ubuntu 20.04 veya 22.04**
  - **ROS2 ortamı** : [Humble](https://docs.ros.org/en/humble/Installation.html)(önerilen) veya [Foxy](https://docs.ros.org/en/foxy/Installation.html)

  ## MCP Fonksiyonları

  Fonksiyonların listesini [MCPFUNCTIONS.md](MCPFUNCTIONS.md) dosyasında bulabilirsiniz.

  ## Kurulum

  ### 1. `unitree_ros2` ortamını ayarlayın

  https://github.com/unitreerobotics/unitree_ros2

  - **Yukarıdaki bağlantıda verilen deponun `Adım 2: Bağlan ve test et` adımına kadar kurulumu tamamlamanız gerekir.**

  ### 2. Bu depoyu klonlayın

  ```bash
  git clone https://github.com/lpigeon/unitree-go2-mcp-server.git
  cd unitree-go2-mcp-server
  ```

  ### 3. `uv` Kurulumu
  - `uv` yüklemek için aşağıdaki komutu kullanabilirsiniz:
  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```
  veya
  ```bash
  pip install uv
  ```

  - Sanal ortam oluşturun ve etkinleştirin (İsteğe bağlı)
  ```bash
  uv venv
  source .venv/bin/activate
  ```

  ### 4. MCP Server Konfigürasyonu
  MCP ayarını mcp.json dosyasına ayarlayın.

  **Go2'ye bağlı olan bilgisayarda konfigürasyonun yapılması gerektiğini unutmayın.**

  ```bash
  {
      "mcpServers": {
          "unitree-go2-mcp-server": {
              "command": "uv",
              "args": [
                "--directory",
                "/ABSOLUTE/PATH/TO/PARENT/FOLDER/unitree-go2-mcp-server",
                "run",
                "server.py"
              ]
          }
      }
  }
  ```

  Claude Desktop kullanıyorsanız, aşağıdaki komutu kullanarak mcp.json dosyasını bulabilirsiniz:

  - MacOS
  ```bash
  code ~/Library/Application\ Support/Claude/claude_desktop_config.json
  ```

  - Linux(Ubuntu)
    
  Claude Desktop'u kullanmak için [claude-desktop-debian](https://github.com/aaddrick/claude-desktop-debian) yükleyebilirsiniz.

  ```bash
  code ~/.config/Claude/claude_desktop_config.json
  ```

  - Windows
  ```bash
  code $env:AppData\Claude\claude_desktop_config.json
  ```

  ## Nasıl Kullanılır
  ### 1. `UNITREE_ROS2_SETUP_SH_PATH` ayarlayın.
  - `server.py` dosyasını açın ve `UNITREE_ROS2_SETUP_SH_PATH` değerini değiştirin (örn. `/home/lpigeon/unitree_ros2/setup.sh`)

  #### `rosbridge` kullanıyorsanız, rosbridge'e bağlanmak için IP ve Port ayarlamak gerekir (İsteğe bağlı).
  - `server.py` dosyasını açın ve `LOCAL_IP`, `ROSBRIDGE_IP` ve `ROSBRIDGE_PORT` değerlerini değiştirin. (`ROSBRIDGE_PORT` varsayılan değeri `9090`'dır)

  ### 2. Go2 robotunun ağa bağlı olduğunu kontrol edin.
  Terminale aşağıdaki komutu yazın.
  ```bash
  ros2 topic list
  ```
  Aşağıdaki topic'i görmelisiniz:
  ```bash
  /wirelesscontroller
  ```
  **Eğer topic'i görmüyorsanız, Go2 robotu ile ağ arasındaki bağlantıyı kontrol edin.**

  ### 3. `unitree-go2-mcp-server` ürününü içe aktaran herhangi bir AI sistemini çalıştırın.

  ### 4. "Go2 robotunu 3 saniye boyunca 0.5 m/s hızında ileri hareket ettir." yazın.

  <center></center>

  ### 5. Go2 robotunun hareketini kontrol edin.

  <center></center>

  ### 6. Ne yapmak istiyorsanız yazın ve keyfini çıkarın!

  ## Bağlamsal Anlama
  "Go2'nin yorulmaya başladığı gibi görünüyor" gibi bir komut yazdığınızda, LLM bunu bağlamsal olarak yorumlar — robotun bir mola veya bir tür esnetme gerekebileceğini anlar!

  <center></center>

  ## Basit Görev
  Bu görev, Unitree Go2 robotunun engel avoidansı, yön değiştirme ve kullanıcı etkileşimi yeteneklerini sergileyen kapsamlı bir demo görevidir.

  <center></center>

  ## Katkıda Bulunma
  Katkıları bekliyoruz!  
  Bir typo düzeltmesi, yeni bir fonksiyon ekleme veya iyileştiriler önerme olsun, yardımınız takdir edilir.  
  Bu projeye nasıl katkıda bulunacağınız hakkında daha fazla ayrıntı için lütfen [katkı rehberini](CONTRIBUTING.md) izleyin.
---

# Unitree Go2 MCP Server
![ROS 2](https://img.shields.io/badge/ROS_2-Foxy|Humble-blue)
![Static Badge](https://img.shields.io/badge/License-Apache2.0-green)

<center></center>

The **Unitree Go2 MCP Server** is a server built on the Model Context Protocol (MCP) that enables users to control the Unitree Go2 robot using natural language commands interpreted by a Large Language Model (LLM). These commands are translated into ROS2 instructions, allowing the robot to perform corresponding actions.

<a href="https://glama.ai/mcp/servers/@lpigeon/unitree-go2-mcp-server">
  
</a>

## Requirements

- **Unitree Go2 robot**
- **Ubuntu 20.04 or 22.04**
- **ROS2 environment** : [Humble](https://docs.ros.org/en/humble/Installation.html)(recommended) or [Foxy](https://docs.ros.org/en/foxy/Installation.html)

## MCP Functions

You can find the list of functions in the [MCPFUNCTIONS.md](MCPFUNCTIONS.md).

## Installation

### 1. Setup `unitree_ros2` environment

https://github.com/unitreerobotics/unitree_ros2

- **You need to complete the setup up to `Step 2: Connect and test` in the repository linked above.**

### 2. Clone this repository

```bash
git clone https://github.com/lpigeon/unitree-go2-mcp-server.git
cd unitree-go2-mcp-server
```

### 3. `uv` Installation
- To install `uv`, you can use the following command:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
or
```bash
pip install uv
```

- Create virtual environment and activate it (Optional)
```bash
uv venv
source .venv/bin/activate
```

### 4. MCP Server Configuration
Set MCP setting to mcp.json.

**Please keep in mind that the configuration must be done on the PC connected to the Go2.**

```bash
{
    "mcpServers": {
        "unitree-go2-mcp-server": {
            "command": "uv",
            "args": [
              "--directory",
              "/ABSOLUTE/PATH/TO/PARENT/FOLDER/unitree-go2-mcp-server",
              "run",
              "server.py"
            ]
        }
    }
}
```

If you use Claude Desktop, you can find mcp.json using the following command:

- MacOS
```bash
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

- Linux(Ubuntu)
  
You can install Claude Desktop to use [claude-desktop-debian](https://github.com/aaddrick/claude-desktop-debian).

```bash
code ~/.config/Claude/claude_desktop_config.json
```

- Windows
```bash
code $env:AppData\Claude\claude_desktop_config.json
```

## How To Use
### 1. Set `UNITREE_ROS2_SETUP_SH_PATH`.
- Open `server.py` and change your `UNITREE_ROS2_SETUP_SH_PATH` (eg. `/home/lpigeon/unitree_ros2/setup.sh`)

#### If you use `rosbridge`, you need Set IP and Port to connect rosbridge (Optional).
- Open `server.py` and change your `LOCAL_IP`, `ROSBRIDGE_IP` and `ROSBRIDGE_PORT`. (`ROSBRIDGE_PORT`'s default value is `9090`)

### 2. Check the Go2 robot is connected to the network.
Type the following command in the terminal.
```bash
ros2 topic list
```
You should see the following topic:
```bash
/wirelesscontroller
```
**If you don't see the topic, check the connection between the Go2 robot and the network.**

### 3. Run any AI system that has imported `unitree-go2-mcp-server`.

### 4. Type "Make the Go2 robot move forward at a velocity of 0.5 m/s for 3 seconds.".

<center></center>

### 5. Check the Go2 robot's movement.

<center></center>

### 6. Type what you want to do and Enjoy!

## Contextual Understanding
When you type a command like "It looks like the Go2 is getting tired," the LLM interprets this contextually — understanding that the robot might need a break or some form of stretching!

<center></center>

## Simple Task
This task is a comprehensive demo task showcasing the Unitree Go2 robot's obstacle avoidance, direction changing, and user interaction capabilities.

<center></center>

## Contributing
Contributions are welcome!  
Whether you're fixing a typo, adding a new function, or suggesting improvements, your help is appreciated.  
Please follow the [contributing guidelines](CONTRIBUTING.md) for more details on how to contribute to this project.
