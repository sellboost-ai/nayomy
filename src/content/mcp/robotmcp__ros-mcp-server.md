---
name: "robotmcp/ros-mcp-server"
description: "The ROS MCP Server supports robot control by converting user-issued natural language commands into ROS or ROS2 control commands."
category: "Developer Tools"
repo: "robotmcp/ros-mcp-server"
stars: 1242
url: "https://github.com/robotmcp/ros-mcp-server"
body_length: 4243
license: "Apache-2.0"
language: "Python"
homepage: "https://robotmcp.ai"
body_tr: |-
  # ROS MCP Server 🧠⇄🤖

  ![Static Badge](https://img.shields.io/badge/ROS-Available-green)
  ![Static Badge](https://img.shields.io/badge/ROS2-Available-green)
  ![Static Badge](https://img.shields.io/badge/License-Apache%202.0-blue)
  ![Python](https://img.shields.io/badge/python-3.10%2B-blue)
  ![pip](https://img.shields.io/badge/pip-23.0%2B-blue)
  ![Dev Container](https://img.shields.io/badge/Dev-Container%20Ready-blue)
  ![GitHub Repo stars](https://img.shields.io/github/stars/robotmcp/ros-mcp-server?style=social)
  ![GitHub last commit](https://img.shields.io/github/last-commit/robotmcp/ros-mcp-server)

  <!-- mcp-name: io.github.robotmcp/ros-mcp-server -->

  <p align="center">
    
  </p>

  ROS-MCP-Server, büyük dil modellerini (Claude, GPT, Gemini gibi) robotlara bağlayarak, mevcut robot kaynak kodunda herhangi bir değişiklik yapılmaksızın çift yönlü iletişimi sağlar.

  ### Neden ROS-MCP?

  - **Robot kaynak kodu değişikliği yok** → mevcut ROS yapınıza sadece `rosbridge` node'unu ekleyin.
  - **Gerçek çift yönlü iletişim** → LLM'ler robotları hem *kontrol edebilir* hem de Robotta olup biten her şeyi *gözlemleyebilir*.
  - **Tam bağlam** → topic'lere yayınlayın ve abone olun, service'leri ve action'ları çağırın, parametreleri ayarlayın, sensör verilerini okuyun ve robot durumunu gerçek zamanda izleyin.
  - **Derin ROS anlayışı** → LLM'yi mevcut topic'ler, service'ler, action'lar ve bunların türlerini (özel olanlar dahil) keşfetmeye yönlendirir — manuel konfigürasyon olmaksızın bunları doğru söz dizimiyle kullanmasını sağlar.
  - **Herhangi bir MCP istemcisiyle çalışır** → açık [MCP standardı](https://modelcontextprotocol.io/) üzerine inşa edilmiş, Claude Code, Codex CLI, Gemini CLI, Claude Desktop, ChatGPT, Cursor ve daha fazlasını destekler.
  - **ROS sürümleri arasında çalışır** → ROS 2 (Jazzy, Humble ve diğerleri) ve ROS 1 distroları arasında uyumludur.

  ## 🎥 Çalışır Haldeki Örnekler

  🖥️ **Örnek - NVIDIA Isaac Sim'de MOCA mobil manipülatörünü kontrol etme**
  Komutlar Claude Desktop'a girilir ve bu, simüle edilen robotu kontrol etmek için MCP server'ı kullanır.

  <p align="center">
    
  </p>

  ---
  🐕 **Örnek - Unitree Go2'yi doğal dille kontrol etme** ([video](https://youtu.be/RW9_FgfxWzs?si=8bdhpHNYaupzi9q3))
  MCP server, Claude'un robotun kameralarından görüntüleri yorumlamasını ve insan doğal dil komutlarına göre robotu komut vermesini sağlar.

  <p align="left">
    
  </p>

  ---
  🏭 **Örnek - Endüstriyel bir robotu debug etme** ([Video](https://youtu.be/SrHzC5InJDA))
  - Endüstriyel bir robota bağlanmak, LLM'nin robot durumunu değerlendirmek için tüm ROS topic'lerini ve service'lerini göz atmasını sağlar.
  - Önceden tanımlanmış bağlam olmaksızın, MCP server LLM'nin özel topic ve service türleri ve bunların söz dizimi hakkında ayrıntıları sorgulamasını sağlar (00:28).
  - Yalnızca doğal dili kullanarak, operatör robotu test etmek ve debug etmek için özel service'leri çağırır (01:42).

  <p align="center">
    <a href="https://contoroinc.sharepoint.com/:v:/s/SandboxNewBusiness/EVh2t2_YG9BEl-Bw-8k6xucBcEv7XebJv1MtqLTIfrQpig?e=deu3YO">
      
    </a>
  </p>

  ---

  ## 🛠 Başlarken

  Başlamak için [kurulum kılavuzunu](docs/install/installation.md) izleyin.

  ROS-MCP, Claude Code, Codex CLI, Gemini CLI, Claude Desktop, ChatGPT, Cursor veya herhangi bir MCP uyumlu istemciyle çalışır.

  <p align="center">
    
  </p>

  ---

  ## 📚 Daha Fazla Örnek ve Öğreticiler

  Server'ı çalışır halde görmek için [örneklerimize](examples) göz atın.
  Yeni örnekler ve entegrasyonlar ile topluluk PR'lerini bekliyoruz!

  ---

  ## 🤝 Katkıda Bulunma

  Her türden katkıyı seviyoruz:
  - Bug düzeltmeleri ve dokümantasyon güncellemeleri
  - Yeni özellikler (örneğin, Action desteği, izinler)
  - Ek örnekler ve öğreticiler

  [Katkı kılavuzuna](docs/contributing.md) göz atın ve başlamak için **good first issue** etiketli sorunları görün.

  ---

  ## 📜 Lisans

  Bu proje [Apache License 2.0](LICENSE) altında lisanslanmıştır.
---

# ROS MCP Server 🧠⇄🤖

![Static Badge](https://img.shields.io/badge/ROS-Available-green)
![Static Badge](https://img.shields.io/badge/ROS2-Available-green)
![Static Badge](https://img.shields.io/badge/License-Apache%202.0-blue)
![Python](https://img.shields.io/badge/python-3.10%2B-blue)
![pip](https://img.shields.io/badge/pip-23.0%2B-blue)
![Dev Container](https://img.shields.io/badge/Dev-Container%20Ready-blue)
![GitHub Repo stars](https://img.shields.io/github/stars/robotmcp/ros-mcp-server?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/robotmcp/ros-mcp-server)

<!-- mcp-name: io.github.robotmcp/ros-mcp-server -->

<p align="center">
  
</p>

ROS-MCP-Server connects large language models (such as Claude, GPT, and Gemini) to robots, enabling bidirectional communication with no changes to existing robot source code.  

### Why ROS-MCP?

- **No robot source code changes** → just add the `rosbridge` node to your existing ROS setup.
- **True two-way communication** → LLMs can both *control* robots and *observe* everything happening on the Robot.
- **Full context** → publish & subscribe to topics, call services & actions, set parameters, read sensor data, and monitor robot state in real time.
- **Deep ROS understanding** → guides the LLM to discover available topics, services, actions, and their types (including custom ones) — enabling it to use them with the right syntax without manual configuration.
- **Works with any MCP client** → built on the open [MCP standard](https://modelcontextprotocol.io/), supporting Claude Code, Codex CLI, Gemini CLI, Claude Desktop, ChatGPT, Cursor, and more.
- **Works across ROS versions** → compatible across ROS 2 (Jazzy, Humble, and others) and ROS 1 distros.

## 🎥 Examples in Action  

🖥️ **Example - Controlling the MOCA mobile manipulator in NVIDIA Isaac Sim**  
Commands are entered into Claude Desktop, which uses the MCP server to control the simulated robot.  

<p align="center">
  
</p>  

---
🐕 **Example - Controlling Unitree Go2 with natural language**  ([video](https://youtu.be/RW9_FgfxWzs?si=8bdhpHNYaupzi9q3))  
The MCP server enables Claude to interpret images from the robot's cameras, and then command the robot based on human natural language commands. 

<p align="left">
  
</p>  

---
🏭 **Example - Debugging an industrial robot** ([Video](https://youtu.be/SrHzC5InJDA))  
- Connecting to an industrial robot enables the LLM to browse all ROS topics and services to assess the robot state. 
- With no predefined context, the MCP server enables the LLM to query details about custom topic and service types and their syntax (00:28). 
- Using only natural language, the operator calls the custom services to test and debug the robot (01:42). 

<p align="center">
  <a href="https://contoroinc.sharepoint.com/:v:/s/SandboxNewBusiness/EVh2t2_YG9BEl-Bw-8k6xucBcEv7XebJv1MtqLTIfrQpig?e=deu3YO">
    
  </a>
</p>

---

## 🛠 Getting Started

Follow the [installation guide](docs/install/installation.md) to get started.

ROS-MCP works with Claude Code, Codex CLI, Gemini CLI, Claude Desktop, ChatGPT, Cursor, or any MCP-compatible client.

<p align="center">
  
</p>

---

## 📚 More Examples & Tutorials  

Browse our [examples](examples) to see the server in action.  
We welcome community PRs with new examples and integrations!  

---

## 🤝 Contributing  

We love contributions of all kinds:  
- Bug fixes and documentation updates  
- New features (e.g., Action support, permissions)  
- Additional examples and tutorials  

Check out the [contributing guidelines](docs/contributing.md) and see issues tagged **good first issue** to get started.  

---

## 📜 License  

This project is licensed under the [Apache License 2.0](LICENSE).
