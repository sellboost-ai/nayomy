---
name: "tiianhk/MaxMSP-MCP-Server"
description: "A coding agent for Max (Max/MSP/Jitter), which is a visual programming language for music and multimedia."
description_tr: "Max için kodlama ajanı olup, müzik ve multimedya için tasarlanmış görsel bir programlama dilidir."
category: "Coding Agents"
repo: "tiianhk/MaxMSP-MCP-Server"
stars: 222
url: "https://github.com/tiianhk/MaxMSP-MCP-Server"
body_length: 2925
license: "MIT"
language: "Max"
body_tr: |-
  **Not:** ersatzben ve BenCello tarafından hazırlanan genişletilmiş bir versiyon şurada bulunabilir: [https://github.com/ersatzben/maxmsp-mcp](https://github.com/ersatzben/maxmsp-mcp)

  # MaxMSP-MCP Server

  Bu proje, LLM'lerin Max patch'lerini doğrudan anlayabilmesi ve oluşturabilmesi için [Model Context Protocol](https://modelcontextprotocol.io/introduction) (MCP) protokolünü kullanır.

  ### Anlama: LLM'nin Max Patch'i Açıklaması

  ![img](https://raw.githubusercontent.com/tiianhk/MaxMSP-MCP-Server/HEAD/assets/understand.gif)
  [Video bağlantısı](https://www.youtube.com/watch?v=YKXqS66zrec). Açıklama: açıklanan patch [buradan](https://github.com/jeffThompson/MaxMSP_TeachingSketches/blob/master/02_MSP/07%20Ring%20Modulation.maxpat) indirilmiştir. Orijinal dosyadaki metin açıklamaları silinmiştir.

  ### Oluşturma: LLM'nin FM Synthesizer Yapması

  ![img](https://raw.githubusercontent.com/tiianhk/MaxMSP-MCP-Server/HEAD/assets/generate.gif)
  Sentezlenen sesleri dinleyebileceğiniz [tam videoyu](https://www.youtube.com/watch?v=Ns89YuE5-to) izleyin.

  LLM ajanı, her bir objenin resmi dokümantasyonuna ve ayrıca mevcut patch ve subpatch pencereleri içindeki objelere erişebilir; bu da objeleri bulma ve açıklama, hata ayıklama ve kendi eylemlerini doğrulama konusunda yardımcı olur.

  ## Kurulum  

  ### Ön Gereksinimler  

   - Python 3.8 veya daha yeni  
   - [uv package manager](https://github.com/astral-sh/uv)  
   - Max 9 veya daha yeni (çünkü bazı scriptler Javascript V8 motorunu gerektirir), Max 8 veya daha eski versiyonlarda henüz test etmedik.  

  ### MCP sunucusunu kurma

  1. uv'yi yükleyin:
  ```
  # macOS ve Linux'ta:
  curl -LsSf https://astral.sh/uv/install.sh | sh
  # Windows'ta:
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  ```
  2. Bu depoyu klonlayın ve dizinine gidin:
  ```
  git clone https://github.com/tiianhk/MaxMSP-MCP-Server.git
  cd MaxMSP-MCP-Server
  ```
  3. Yeni bir environment başlatın ve python bağımlılıklarını yükleyin:
  ```
  uv venv
  source .venv/bin/activate
  uv pip install -r requirements.txt
  ```
  4. MCP sunucusunu bir MCP istemcisine bağlayın (LLM'leri barındıran):
  ```
  # Claude:
  python install.py --client claude
  # veya Cursor:
  python install.py --client cursor
  ```
  Diğer istemcileri kullanmak için ([listeyi](https://modelcontextprotocol.io/clients) kontrol edin), indirip yapılandırma dosyası yolunu [buraya](https://github.com/tiianhk/MaxMSP-MCP-Server/blob/main/install.py#L6-L13) manuel olarak ekleyip `python install.py --client {your_client_name}` komutunu çalıştırarak bağlanmanız gerekir.

  ### Max patch'e kurulum  

  `MaxMSP_Agent/demo.maxpat` dosyasını kullanın veya kopyalayın. İlk sekmede, [npm](https://github.com/npm/cli) yüklü olduğunu doğrulamak için `script npm version` mesajına tıklayın. Ardından gerekli bağımlılıkları yüklemek için `script npm install` öğesine tıklayın. Ajanı erişmek için ikinci sekmeye geçin. Python ile iletişim başlatmak için `script start` öğesine tıklayın. Bağlantı kurulduktan sonra, patch içinde objeleri açıklatmak, değiştirmek veya oluşturmak için LLM arayüzü ile etkileşim kurabilirsiniz.

  ## Sorumluluk Reddi

  Bu, üçüncü taraf bir uygulamadır ve Cycling '74 tarafından yapılmamıştır.
---

**Note:** An extended version by ersatzben and BenCello can be found at: [https://github.com/ersatzben/maxmsp-mcp](https://github.com/ersatzben/maxmsp-mcp)

# MaxMSP-MCP Server

This project uses the [Model Context Protocol](https://modelcontextprotocol.io/introduction) (MCP) to let LLMs directly understand and generate Max patches.

### Understand: LLM Explaining a Max Patch

![img](https://raw.githubusercontent.com/tiianhk/MaxMSP-MCP-Server/HEAD/assets/understand.gif)
[Video link](https://www.youtube.com/watch?v=YKXqS66zrec). Acknowledgement: the patch being explained is downloaded from [here](https://github.com/jeffThompson/MaxMSP_TeachingSketches/blob/master/02_MSP/07%20Ring%20Modulation.maxpat). Text comments in the original file are deleted.

### Generate: LLM Making an FM Synth

![img](https://raw.githubusercontent.com/tiianhk/MaxMSP-MCP-Server/HEAD/assets/generate.gif)
Check out the [full video](https://www.youtube.com/watch?v=Ns89YuE5-to) where you can listen to the synthesised sounds.

The LLM agent has access to the official documentation of each object, as well as objects in the current patch and subpatch windows, which helps in retrieving and explaining objects, debugging, and verifying their own actions.

## Installation  

### Prerequisites  

 - Python 3.8 or newer  
 - [uv package manager](https://github.com/astral-sh/uv)  
 - Max 9 or newer (because some of the scripts require the Javascript V8 engine), we have not tested it on Max 8 or earlier versions of Max yet.  

### Installing the MCP server

1. Install uv:
```
# On macOS and Linux:
curl -LsSf https://astral.sh/uv/install.sh | sh
# On Windows:
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
2. Clone this repository and open its directory:
```
git clone https://github.com/tiianhk/MaxMSP-MCP-Server.git
cd MaxMSP-MCP-Server
```
3. Start a new environment and install python dependencies:
```
uv venv
source .venv/bin/activate
uv pip install -r requirements.txt
```
4. Connect the MCP server to a MCP client (which hosts LLMs):
```
# Claude:
python install.py --client claude
# or Cursor:
python install.py --client cursor
```
To use other clients (check the [list](https://modelcontextprotocol.io/clients)), you need to download, mannually add the configuration file path to [here](https://github.com/tiianhk/MaxMSP-MCP-Server/blob/main/install.py#L6-L13), and connect by running `python install.py --client {your_client_name}`.

### Installing to a Max patch  

Use or copy from `MaxMSP_Agent/demo.maxpat`. In the first tab, click the `script npm version` message to verify that [npm](https://github.com/npm/cli) is installed. Then click `script npm install` to install the required dependencies. Switch to the second tab to access the agent. Click `script start` to initiate communication with Python. Once connected, you can interact with the LLM interface to have it explain, modify, or create Max objects within the patch.

## Disclaimer

This is a third party implementation and not made by Cycling '74.
