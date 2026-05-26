---
name: "CoderGamester/mcp-unity"
description: "MCP Server for Unity3d Game Engine integration for game development"
description_tr: "Unity3d Oyun Motoru entegrasyonu için MCP Server, oyun geliştirme sürecini kolaylaştırır."
category: "Gaming"
repo: "CoderGamester/mcp-unity"
stars: 1723
url: "https://github.com/CoderGamester/mcp-unity"
body_length: 33659
license: "MIT"
language: "C#"
body_tr: |-
  # MCP Unity Editörü (Oyun Motoru)

  [![](https://badge.mcpx.dev?status=on 'MCP Enabled')](https://modelcontextprotocol.io/introduction)
  [![](https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white 'Unity')](https://unity.com/releases/editor/archive)
  [![](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white 'Node.js')](https://nodejs.org/en/download/)
  [![](https://img.shields.io/github/stars/CoderGamester/mcp-unity 'Stars')](https://github.com/CoderGamester/mcp-unity/stargazers)
  [![](https://img.shields.io/github/last-commit/CoderGamester/mcp-unity 'Last Commit')](https://github.com/CoderGamester/mcp-unity/commits/main)
  [![](https://img.shields.io/badge/License-MIT-red.svg 'MIT License')](https://opensource.org/licenses/MIT)

  | [🇺🇸English](README.md) | [🇨🇳简体中文](README_zh-CN.md) | [🇯🇵日本語](README-ja.md) |
  |----------------------|---------------------------------|----------------------|

  ```        
                                ,/(/.   *(/,                                  
                            */(((((/.   *((((((*.                             
                       .*((((((((((/.   *((((((((((/.                         
                   ./((((((((((((((/    *((((((((((((((/,                     
               ,/(((((((((((((/*.           */(((((((((((((/*.                
              ,%%#((/((((((*                    ,/(((((/(#&@@(                
              ,%%##%%##((((((/*.             ,/((((/(#&@@@@@@(                
              ,%%######%%##((/(((/*.    .*/(((//(%@@@@@@@@@@@(                
              ,%%####%#(%%#%%##((/((((((((//#&@@@@@@&@@@@@@@@(                
              ,%%####%(    /#%#%%%##(//(#@@@@@@@%,   #@@@@@@@(                
              ,%%####%(        *#%###%@@@@@@(        #@@@@@@@(                
              ,%%####%(           #%#%@@@@,          #@@@@@@@(                
              ,%%##%%%(           #%#%@@@@,          #@@@@@@@(                
              ,%%%#*              #%#%@@@@,             *%@@@(                
              .,      ,/##*.      #%#%@@@@,     ./&@#*      *`                
                  ,/#%#####%%#/,  #%#%@@@@, ,/&@@@@@@@@@&\.                    
                   `*#########%%%%###%@@@@@@@@@@@@@@@@@@&*´                   
                      `*%%###########%@@@@@@@@@@@@@@&*´                        
                          `*%%%######%@@@@@@@@@@&*´                            
                              `*#%%##%@@@@@&*´                                 
                                 `*%#%@&*´                                     
                                                         
       ███╗   ███╗ ██████╗██████╗         ██╗   ██╗███╗   ██╗██╗████████╗██╗   ██╗
       ████╗ ████║██╔════╝██╔══██╗        ██║   ██║████╗  ██║██║╚══██╔══╝╚██╗ ██╔╝
       ██╔████╔██║██║     ██████╔╝        ██║   ██║██╔██╗ ██║██║   ██║    ╚████╔╝ 
       ██║╚██╔╝██║██║     ██╔═══╝         ██║   ██║██║╚██╗██║██║   ██║     ╚██╔╝  
       ██║ ╚═╝ ██║╚██████╗██║             ╚██████╔╝██║ ╚████║██║   ██║      ██║   
       ╚═╝     ╚═╝ ╚═════╝╚═╝              ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝      ╚═╝   
  ```       

  MCP Unity, Unity Editörü için Model Context Protocol uygulamasıdır ve AI asistanlarının Unity projelerinizle etkileşim kurmasını sağlar. Bu paket, Unity ile MCP protokolünü uygulayan bir Node.js sunucusu arasında bir köprü sağlar ve Cursor, Windsurf, Claude Code, Codex CLI, GitHub Copilot, Google Antigravity ve OpenCode gibi AI ajanlarının Unity Editörü içinde işlem yürütmesini sağlar.

  ## Özellikler

  ### IDE Entegrasyonu - Paket Önbelleği Erişimi

  MCP Unity, VSCode benzeri IDEler (Visual Studio Code, Cursor, Windsurf, Google Antigravity) ile otomatik entegrasyon sağlar ve Unity `Library/PackedCache` klasörünü çalışma alanınıza ekler. Bu özellik:

  - Unity paketleri için kod zekasını iyileştirir
  - Unity paketleri için daha iyi otomatik tamamlama ve tür bilgisi sağlar
  - AI kodlama asistanlarının projenizin bağımlılıklarını anlamasına yardımcı olur

  ### MCP Sunucu Araçları

  Aşağıdaki araçlar MCP aracılığıyla Unity sahneleri ve GameObjects'i manipüle etme ve sorgulama için kullanılabilir:

  - `execute_menu_item`: Unity menü öğelerini çalıştırır (MenuItem özniteliği ile etiketlenmiş fonksiyonlar)
    > **Örnek istem:** "Yeni boş bir GameObject oluşturmak için 'GameObject/Create Empty' menü öğesini çalıştır"

  - `select_gameobject`: GameObject'leri hiyerarşide yol veya örnek kimliğine göre seçer
    > **Örnek istem:** "Sahnemizdeki Main Camera nesnesini seç"

  - `update_gameobject`: GameObject'in temel özelliklerini günceller (ad, etiket, katman, aktif/statik durumu) veya yoksa GameObject oluşturur
    > **Örnek istem:** "Player nesnesinin etiketini 'Enemy' olarak ayarla ve onu deaktif yap"

  - `update_component`: GameObject'teki bileşen alanlarını günceller veya GameObject'te yoksa bileşeni ekler
    > **Örnek istem:** "Player nesnesine Rigidbody bileşeni ekle ve kütlesini 5 olarak ayarla"

  - `add_package`: Unity Package Manager'da yeni paketler yükler
    > **Örnek istem:** "TextMeshPro paketini projeme ekle"

  - `run_tests`: Unity Test Runner kullanarak testleri çalıştırır
    > **Örnek istem:** "Projemizdeki tüm EditMode testlerini çalıştır"

  - `send_console_log`: Unity'ye konsol günlüğü gönderir
    > **Örnek istem:** "Unity Editörüne bir konsol günlüğü gönder"

  - `add_asset_to_scene`: AssetDatabase'deki bir varlığı Unity sahnesine ekler
    > **Örnek istem:** "Player prefab'ini projemden mevcut sahneye ekle"

  - `create_prefab`: İsteğe bağlı MonoBehaviour script ve serialized alan değerleri ile bir prefab oluşturur
    > **Örnek istem:** "'PlayerController' script'inden 'Player' adlı bir prefab oluştur"

  - `create_scene`: Yeni bir sahne oluşturur ve belirtilen yola kaydeder
    > **Örnek istem:** "Scenes klasöründe 'Level1' adlı yeni bir sahne oluştur"

  - `load_scene`: Bir sahneyi yol veya ada göre yükler, isteğe bağlı olarak eklemeli yükleme ile
    > **Örnek istem:** "MainMenu sahnesi yükle"

  - `delete_scene`: Bir sahneyi yol veya ada göre siler ve Build Settings'ten kaldırır
    > **Örnek istem:** "Eski TestScene'i projemden sil"

  - `get_gameobject`: Tüm bileşenleri içeren belirli bir GameObject hakkında ayrıntılı bilgi alır
    > **Örnek istem:** "Player GameObject'inin ayrıntılarını al"

  - `get_console_logs`: Sayfalandırma desteği ile Unity konsolundan günlükleri alır
    > **Örnek istem:** "Unity konsolundan son 20 hata günlüğünü göster"

  - `recompile_scripts`: Unity projesindeki tüm script'leri yeniden derler
    > **Örnek istem:** "Unity projemizdeki script'leri yeniden derle"

  - `save_scene`: Mevcut etkin sahneyi kaydeder, isteğe bağlı olarak yeni yola Farklı Kaydet ile
    > **Örnek istem:** "Mevcut sahneyi kaydet" veya "Sahneyi 'Assets/Scenes/Level2.unity' olarak kaydet"

  - `get_scene_info`: Etkin sahne hakkında bilgi alır: ad, yol, dirty durumu ve yüklü tüm sahneler
    > **Örnek istem:** "Projemde şu anda hangi sahneler yüklü?"

  - `unload_scene`: Bir sahneyi hiyerarşiden boşaltır (sahne varlığını silmez)
    > **Örnek istem:** "UI sahnesi hiyerarşiden boşalt"

  - `duplicate_gameobject`: Sahnede isteğe bağlı yeniden adlandırma ve yeniden ebeveynleştirme ile bir GameObject'i kopyalar
    > **Örnek istem:** "Enemy prefab'ini 5 kez kopyala ve Enemy_1 ile Enemy_5 arasında adlandır"

  - `delete_gameobject`: Sahnesinden bir GameObject'i siler
    > **Örnek istem:** "Eski Player nesnesini sahnesinden sil"

  - `reparent_gameobject`: Hiyerarşideki GameObject'in ebeveynini değiştirir
    > **Örnek istem:** "HealthBar nesnesini UI Canvas'ının alt öğesi olacak şekilde taşı"

  - `move_gameobject`: Bir GameObject'i yeni bir konuma taşır (yerel veya dünya alanı)
    > **Örnek istem:** "Player nesnesini dünya alanında (10, 0, 5) konumuna taşı"

  - `rotate_gameobject`: Bir GameObject'i yeni bir rotasyona döndürür (yerel veya dünya alanı, Euler açıları veya quaternion)
    > **Örnek istem:** "Kamerayı Y ekseni üzerinde 45 derece döndür"

  - `scale_gameobject`: Bir GameObject'i yeni bir yerel ölçeğe ölçeklendir
    > **Örnek istem:** "Enemy nesnesini boyutunun iki katına ölçeklendir"

  - `set_transform`: Bir GameObject'in konumunu, rotasyonunu ve ölçeğini tek bir işlemde ayarlar
    > **Örnek istem:** "Cube'ün konumunu (0, 5, 0), rotasyonunu (0, 90, 0) ve ölçeğini (2, 2, 2) olarak ayarla"

  - `create_material`: Belirtilen shader ile yeni bir materyal oluşturur ve projeye kaydeder
    > **Örnek istem:** "URP Lit shader kullanarak 'EnemyMaterial' adlı kırmızı bir materyal oluştur"

  - `assign_material`: Bir GameObject'in Renderer bileşenine bir materyal atar
    > **Örnek istem:** "'EnemyMaterial'ı Enemy GameObject'ine ata"

  - `modify_material`: Mevcut bir materyalin özelliklerini değiştirir (renkler, float'lar, dokular)
    > **Örnek istem:** "'EnemyMaterial'ın rengini mavi olarak değiştir ve metalik'i 0.8 olarak ayarla"

  - `get_material_info`: Shader ve tüm özellikleri içeren materyal hakkında ayrıntılı bilgi alır
    > **Örnek istem:** "'PlayerMaterial'ın tüm özelliklerini göster"

  - `batch_execute`: Birden fazla araç işlemini tek bir batch istekte çalıştırır, tur sayısını azaltır ve başarısızlık durumunda isteğe bağlı geri alma ile atomic işlemleri sağlar
    > **Örnek istem:** "Enemy_1 ile Enemy_10 arasında adlandırılmış 10 boş GameObject'i tek bir batch işleminde oluştur"

  ### MCP Sunucu Kaynakları

  - `unity://menu-items`: `execute_menu_item` aracını kolaylaştırmak için Unity Editörü'ndeki tüm kullanılabilir menü öğelerinin bir listesini alır
    > **Örnek istem:** "GameObject oluşturma ile ilgili tüm kullanılabilir menü öğelerini göster"

  - `unity://scenes-hierarchy`: Mevcut Unity sahne hiyerarşisindeki tüm game objects'in bir listesini alır
    > **Örnek istem:** "Geçerli sahneler hiyerarşi yapısını göster"

  - `unity://gameobject/{id}`: Örnek kimliğine veya sahne hiyerarşisindeki nesne yoluna göre belirli bir GameObject hakkında ayrıntılı bilgi alır; tüm GameObject bileşenleri ile serialized özellikler ve alanları içerir
    > **Örnek istem:** "Player GameObject hakkında ayrıntılı bilgi al"

  - `unity://logs`: Unity konsolundaki tüm günlüklerin bir listesini alır
    > **Örnek istem:** "Unity konsolundan son hata mesajlarını göster"

  - `unity://packages`: Unity Package Manager'dan yüklü ve kullanılabilir paketler hakkında bilgi alır
    > **Örnek istem:** "Unity projemde şu anda yüklü olan tüm paketleri listele"

  - `unity://assets`: Unity Asset Database'deki varlıklar hakkında bilgi alır
    > **Örnek istem:** "Projemde tüm doku varlıklarını bul"

  - `unity://tests/{testMode}`: Unity Test Runner'daki testler hakkında bilgi alır
    > **Örnek istem:** "Unity projemizdeki tüm kullanılabilir testleri listele"

  ## Gereksinimler
  - Unity 6 veya daha yeni - sunucuyu [yüklemek](#install-server) için
  - Node.js 18 veya daha yeni - sunucuyu [başlatmak](#start-server) için
  - npm 9 veya daha yeni - sunucuyu [hata ayıklamak](#debug-server) için

  > [!NOTE]
  > **Boşluk İçeren Proje Yolları**
  >
  > MCP Unity boşluk içeren proje yollarını destekler. Ancak bağlantı sorunları yaşıyorsanız, sorun giderme adımı olarak projenizi boşluk olmayan bir yola taşımayı deneyin.
  >
  > **Örnekler:**
  > -   ✅ **Önerilen:** `C:\Users\YourUser\Documents\UnityProjects\MyAwesomeGame`
  > -   ✅ **Desteklenen:** `C:\Users\Your User\Documents\Unity Projects\My Awesome Game`

  ## <a name="install-server"></a>Kurulum

  MCP Unity Server'ı yüklemek çok adımlı bir işlemdir:

  ### Adım 1: Node.js'i yükle
  > MCP Unity sunucusunu çalıştırmak için, bilgisayarınızda Node.js 18 veya daha yeni bir sürüm yüklü olmalıdır:

  ![node](https://raw.githubusercontent.com/CoderGamester/mcp-unity/HEAD/docs/node.jpg)

  <details>
  <summary><span style="font-size: 1.1em; font-weight: bold;">Windows</span></summary>

  1. [Node.js indirme sayfasını](https://nodejs.org/en/download/) ziyaret edin
  2. LTS sürümü için Windows Installer (.msi) dosyasını indirin (önerilir)
  3. Yükleyiciyi çalıştırın ve kurulum sihirbazını takip edin
  4. PowerShell'i açarak ve şu komutu çalıştırarak kurulumu doğrulayın:
     ```bash
     node --version
     ```
  </details>

  <details>
  <summary><span style="font-size: 1.1em; font-weight: bold;">macOS</span></summary>

  1. [Node.js indirme sayfasını](https://nodejs.org/en/download/) ziyaret edin
  2. LTS sürümü için macOS Installer (.pkg) dosyasını indirin (önerilir)
  3. Yükleyiciyi çalıştırın ve kurulum sihirbazını takip edin
  4. Alternatif olarak, Homebrew yüklüyse, şu komutu çalıştırabilirsiniz:
     ```bash
     brew install node@18
     ```
  5. Terminal'i açarak ve şu komutu çalıştırarak kurulumu doğrulayın:
     ```bash
     node --version
     ```
  </details>

  ### Adım 2: Unity MCP Server paketini Unity Package Manager aracılığıyla yükle
  1. Unity Package Manager'ı aç (Window > Package Manager)
  2. Sol üst köşedeki "+" düğmesini tıkla
  3. "Add package from git URL..." seçeneğini belirle
  4. Şu komutu gir: `https://github.com/CoderGamester/mcp-unity.git`
  5. "Add" butonuna tıkla

  ![package manager](https://github.com/user-attachments/assets/a72bfca4-ae52-48e7-a876-e99c701b0497)

  ### Adım 3: AI LLM İstemcisini Yapılandır

  <details open>
  <summary><span style="font-size: 1.1em; font-weight: bold;">Seçenek 1: Unity Editörü Kullanarak Yapılandırma</span></summary>

  1. Unity Editörü'nü aç
  2. Tools > MCP Unity > Server Window'a git
  3. Aşağıdaki görüntüde gösterildiği gibi AI LLM istemciniz için "Configure" düğmesine tıkla

  ![image](https://raw.githubusercontent.com/CoderGamester/mcp-unity/HEAD/docs/configure.jpg)

  4. Verilen açılır pencerenin yanında konfigürasyon kurulumunu onayla

  ![image](https://github.com/user-attachments/assets/b1f05d33-3694-4256-a57b-8556005021ba)

  </details>

  <details>
  <summary><span style="font-size: 1.1em; font-weight: bold;">Seçenek 2: Manuel Olarak Yapılandırma</span></summary>

  AI istemcinizin MCP yapılandırma dosyasını açın ve MCP Unity sunucu yapılandırmasını ekleyin:

  > `ABSOLUTE/PATH/TO` değerini MCP Unity kurulumunuzun mutlak yolunun yerine geçirin veya Unity Editörü MCP Server penceresinden metni kopyalayın (Tools > MCP Unity > Server Window).
  >
  > Git'e yürütülen ve Unity proje ağacı içinde yaşayan konfigürasyonlar için (ör. `<project>/.vscode/mcp.json`, `<project>/opencode.json`, `<project>/.cursor/mcp.json`, `<project>/.mcp.json`, `<project>/.codex/config.toml`), projeyle ilgili yolu tercih edin ve aynı dosya makineler arasında çalışsın. Server Window'da **"Use relative path"** seçeneğini açıp/kapatarak kopyalama-yapıştırma snippet'i mutlak ve proje-göreceli formları arasında değiştirin. **Configure GitHub Copilot**, **Configure OpenCode**, **Configure Cursor (Project)**, **Configure Claude Code (Project)** ve **Configure Codex CLI (Project)** düğmeleri zaten otomatik olarak nispi yolları yayarlar.
  >
  > Proje-yerel düğmeler (Cursor / Claude Code / Codex CLI), MCP sunucu girişini global kullanıcı yapılandırması yerine Unity proje dizinine yazarlar, böylece diğer (Unity olmayan) projeler MCP bağlantı hatası uyarıları görmezler. **Codex CLI (Project)** özelinde, proje kökünden ilk kez `codex` çalıştırdığınızda, Codex `<project>/.codex/config.toml` dosyasını yok sayar aksi takdirde proje güven istemini onaylamalısınız.

  **JSON tabanlı istemciler için** (Cursor, Windsurf, Claude Code, GitHub Copilot, vb.):

  ```json
  {
     "mcpServers": {
         "mcp-unity": {
            "command": "node",
            "args": [
               "ABSOLUTE/PATH/TO/mcp-unity/Server~/build/index.js"
            ]
         }
     }
  }
  ```

  Çalışma alanı kapsamlı VS Code / GitHub Copilot (`.vscode/mcp.json`) için, yolun makineler arasında taşınabilir olması için `${workspaceFolder}` kullanın:

  ```json
  {
     "mcpServers": {
         "mcp-unity": {
            "command": "node",
            "args": [
               "${workspaceFolder}/Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"
            ]
         }
     }
  }
  ```

  **Codex CLI için** (`~/.codex/config.toml`):

  ```toml
  [mcp_servers.mcp-unity]
  command = "node"
  args = ["ABSOLUTE/PATH/TO/mcp-unity/Server~/build/index.js"]
  ```

  **Cursor — proje-yerel** (Unity proje kökündeki `.cursor/mcp.json`, proje-göreceli yol):

  ```json
  {
     "mcpServers": {
         "mcp-unity": {
            "command": "node",
            "args": [
               "Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"
            ]
         }
     }
  }
  ```

  **Claude Code — proje-yerel** (Unity proje kökündeki `.mcp.json`, proje-göreceli yol — Claude Code'un takım paylaşımı MCP yapılandırması):

  ```json
  {
     "mcpServers": {
         "mcp-unity": {
            "command": "node",
            "args": [
               "Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"
            ]
         }
     }
  }
  ```

  **Codex CLI — proje-yerel** (Unity proje kökündeki `.codex/config.toml`, proje-göreceli yol):

  ```toml
  [mcp_servers.mcp-unity]
  command = "node"
  args = ["Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"]
  ```

  > Codex, bu dosyayı global `~/.codex/config.toml` üzerine katmanlar, ancak yalnızca proje güvenilir olarak işaretlenmişse. Proje içine ilk kez `cd` yaptığınızda ve `codex` çalıştırdığınızda, güven istemini onaylayın — aksi takdirde Codex `.codex/config.toml` dosyasını yok sayar.

  **OpenCode için** (Unity proje kökündeki `opencode.json`):

  ```json
  {
    "$schema": "https://opencode.ai/config.json",
    "mcp": {
      "mcp-unity": {
        "type": "local",
        "enabled": true,
        "command": ["node", "Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"],
        "environment": {}
      }
    }
  }
  ```

  > Not: UPM paket önbelleği yolundaki `@<hash>` segmenti, paket güncellendiğinde değişir. MCP Unity'yi güncellerseniz, **Configure** düğmesini yeniden çalıştırın (veya yolu manuel olarak güncelleyin) böylece snippet yeni önbellek dizinini göstersin.

  </details>

  ## <a name="start-server"></a>Unity Editörü MCP Sunucusunu Başlat
  1. Unity Editörü'nü aç
  2. Tools > MCP Unity > Server Window'a git
  3. WebSocket sunucusunu başlatmak için "Start Server" düğmesine tıkla
  4. AI Kodlama IDE'nizi açın (ör. Cursor, Windsurf, Claude Code, Codex CLI, GitHub Copilot, Google Antigravity, OpenCode, vb.) ve Unity araçlarını çalıştırmaya başlayın
     
  ![connect](https://github.com/user-attachments/assets/2e266a8b-8ba3-4902-b585-b220b11ab9a2)

  > AI istemcisi WebSocket sunucusuna bağlanırken, penceredeki yeşil kutuda otomatik olarak gösterilir

  ## İsteğe Bağlı: WebSocket Bağlantı Noktasını Ayarla
  Varsayılan olarak, WebSocket sunucusu '8090' bağlantı noktasında çalışır. Bu bağlantı noktasını iki şekilde değiştirebilirsiniz:

  1. Unity Editörü'nü aç
  2. Tools > MCP Unity > Server Window'a git
  3. "WebSocket Port" değerini istenen bağlantı noktası numarasına değiştir
  4. Unity UNITY_PORT sistem ortam değişkenini yeni bağlantı noktası numarasına ayarlar
  5. Node.js sunucusunu yeniden başlat
  6. Unity Editörü web soketini Node.js MCP Sunucusuna yeniden bağlanmak için "Start Server"'ı tekrar tıkla

  ## İsteğe Bağlı: Zaman Aşımını Ayarla

  Varsayılan olarak, MCP sunucusu ile WebSocket arasındaki zaman aşımı 10 saniyedir.
  Kullandığınız işletim sistemine bağlı olarak değiştirebilirsiniz:

  1. Unity Editörü'nü aç
  2. Tools > MCP Unity > Server Window'a git
  3. "Request Timeout (seconds)" değerini istenen zaman aşımı saniyesine değiştir
  4. Unity UNITY_REQUEST_TIMEOUT sistem ortam değişkenini yeni zaman aşımı değerine ayarlar
  5. Node.js sunucusunu yeniden başlat
  6. Unity Editörü web soketini Node.js MCP Sunucusuna yeniden bağlanmak için "Start Server"'ı tekrar tıkla

  > [!TIP]  
  > AI Kodlama IDE'niz (ör. Claude Desktop, Cursor IDE, Windsurf IDE) ile MCP Sunucusu arasındaki zaman aşımı IDE'ye bağlıdır.

  ## İsteğe Bağlı: Uzak MCP Köprüsü Bağlantılarına İzin Ver

  Varsayılan olarak, WebSocket sunucusu 'localhost' üzerine bağlanır. Diğer makinelerden MCP köprüsü bağlantılarına izin vermek için:

  1. Unity Editörü'nü aç
  2. Tools > MCP Unity > Server Window'a git
  3. "Allow Remote Connections" onay kutusunu etkinleştir
  4. Unity WebSocket sunucusunu '0.0.0.0' (tüm arayüzleri) üzerine bağlar
  5. Yeni host yapılandırmasını uygulamak için Node.js sunucusunu yeniden başlat
  6. MCP köprüsünü uzaktan çalıştırırken UNITY_HOST ortam değişkenini Unity makinenizin IP adresine ayarla: `UNITY_HOST=192.168.1.100 node server.js`

  ## <a name="debug-server"></a>Sunucuyu Hata Ayıklama

  <details>
  <summary><span style="font-size: 1.1em; font-weight: bold;">Node.js
---

# MCP Unity Editor (Game Engine)

[![](https://badge.mcpx.dev?status=on 'MCP Enabled')](https://modelcontextprotocol.io/introduction)
[![](https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white 'Unity')](https://unity.com/releases/editor/archive)
[![](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white 'Node.js')](https://nodejs.org/en/download/)
[![](https://img.shields.io/github/stars/CoderGamester/mcp-unity 'Stars')](https://github.com/CoderGamester/mcp-unity/stargazers)
[![](https://img.shields.io/github/last-commit/CoderGamester/mcp-unity 'Last Commit')](https://github.com/CoderGamester/mcp-unity/commits/main)
[![](https://img.shields.io/badge/License-MIT-red.svg 'MIT License')](https://opensource.org/licenses/MIT)

| [🇺🇸English](README.md) | [🇨🇳简体中文](README_zh-CN.md) | [🇯🇵日本語](README-ja.md) |
|----------------------|---------------------------------|----------------------|

```        
                              ,/(/.   *(/,                                  
                          */(((((/.   *((((((*.                             
                     .*((((((((((/.   *((((((((((/.                         
                 ./((((((((((((((/    *((((((((((((((/,                     
             ,/(((((((((((((/*.           */(((((((((((((/*.                
            ,%%#((/((((((*                    ,/(((((/(#&@@(                
            ,%%##%%##((((((/*.             ,/((((/(#&@@@@@@(                
            ,%%######%%##((/(((/*.    .*/(((//(%@@@@@@@@@@@(                
            ,%%####%#(%%#%%##((/((((((((//#&@@@@@@&@@@@@@@@(                
            ,%%####%(    /#%#%%%##(//(#@@@@@@@%,   #@@@@@@@(                
            ,%%####%(        *#%###%@@@@@@(        #@@@@@@@(                
            ,%%####%(           #%#%@@@@,          #@@@@@@@(                
            ,%%##%%%(           #%#%@@@@,          #@@@@@@@(                
            ,%%%#*              #%#%@@@@,             *%@@@(                
            .,      ,/##*.      #%#%@@@@,     ./&@#*      *`                
                ,/#%#####%%#/,  #%#%@@@@, ,/&@@@@@@@@@&\.                    
                 `*#########%%%%###%@@@@@@@@@@@@@@@@@@&*´                   
                    `*%%###########%@@@@@@@@@@@@@@&*´                        
                        `*%%%######%@@@@@@@@@@&*´                            
                            `*#%%##%@@@@@&*´                                 
                               `*%#%@&*´                                     
                                                       
     ███╗   ███╗ ██████╗██████╗         ██╗   ██╗███╗   ██╗██╗████████╗██╗   ██╗
     ████╗ ████║██╔════╝██╔══██╗        ██║   ██║████╗  ██║██║╚══██╔══╝╚██╗ ██╔╝
     ██╔████╔██║██║     ██████╔╝        ██║   ██║██╔██╗ ██║██║   ██║    ╚████╔╝ 
     ██║╚██╔╝██║██║     ██╔═══╝         ██║   ██║██║╚██╗██║██║   ██║     ╚██╔╝  
     ██║ ╚═╝ ██║╚██████╗██║             ╚██████╔╝██║ ╚████║██║   ██║      ██║   
     ╚═╝     ╚═╝ ╚═════╝╚═╝              ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝      ╚═╝   
```       

MCP Unity is an implementation of the Model Context Protocol for Unity Editor, allowing AI assistants to interact with your Unity projects. This package provides a bridge between Unity and a Node.js server that implements the MCP protocol, enabling AI agents like Cursor, Windsurf, Claude Code, Codex CLI, GitHub Copilot, Google Antigravity, and OpenCode to execute operations within the Unity Editor.

## Features

### IDE Integration - Package Cache Access

MCP Unity provides automatic integration with VSCode-like IDEs (Visual Studio Code, Cursor, Windsurf, Google Antigravity) by adding the Unity `Library/PackedCache` folder to your workspace. This feature:

- Improves code intelligence for Unity packages
- Enables better autocompletion and type information for Unity packages
- Helps AI coding assistants understand your project's dependencies

### MCP Server Tools

The following tools are available for manipulating and querying Unity scenes and GameObjects via MCP:

- `execute_menu_item`: Executes Unity menu items (functions tagged with the MenuItem attribute)
  > **Example prompt:** "Execute the menu item 'GameObject/Create Empty' to create a new empty GameObject"

- `select_gameobject`: Selects game objects in the Unity hierarchy by path or instance ID
  > **Example prompt:** "Select the Main Camera object in my scene"

- `update_gameobject`: Updates a GameObject's core properties (name, tag, layer, active/static state), or creates the GameObject if it does not exist
  > **Example prompt:** "Set the Player object's tag to 'Enemy' and make it inactive"

- `update_component`: Updates component fields on a GameObject or adds it to the GameObject if it does not contain the component
  > **Example prompt:** "Add a Rigidbody component to the Player object and set its mass to 5"

- `add_package`: Installs new packages in the Unity Package Manager
  > **Example prompt:** "Add the TextMeshPro package to my project"

- `run_tests`: Runs tests using the Unity Test Runner
  > **Example prompt:** "Run all the EditMode tests in my project"

- `send_console_log`: Send a console log to Unity
  > **Example prompt:** "Send a console log to Unity Editor"

- `add_asset_to_scene`: Adds an asset from the AssetDatabase to the Unity scene
  > **Example prompt:** "Add the Player prefab from my project to the current scene"

- `create_prefab`: Creates a prefab with optional MonoBehaviour script and serialized field values
  > **Example prompt:** "Create a prefab named 'Player' from the 'PlayerController' script"

- `create_scene`: Creates a new scene and saves it to the specified path
  > **Example prompt:** "Create a new scene called 'Level1' in the Scenes folder"

- `load_scene`: Loads a scene by path or name, with optional additive loading
  > **Example prompt:** "Load the MainMenu scene"

- `delete_scene`: Deletes a scene by path or name and removes it from Build Settings
  > **Example prompt:** "Delete the old TestScene from my project"

- `get_gameobject`: Gets detailed information about a specific GameObject including all components
  > **Example prompt:** "Get the details of the Player GameObject"

- `get_console_logs`: Retrieves logs from the Unity console with pagination support
  > **Example prompt:** "Show me the last 20 error logs from the Unity console"

- `recompile_scripts`: Recompiles all scripts in the Unity project
  > **Example prompt:** "Recompile scripts in my Unity project"

- `save_scene`: Saves the current active scene, with optional Save As to a new path
  > **Example prompt:** "Save the current scene" or "Save the scene as 'Assets/Scenes/Level2.unity'"

- `get_scene_info`: Gets information about the active scene including name, path, dirty state, and all loaded scenes
  > **Example prompt:** "What scenes are currently loaded in my project?"

- `unload_scene`: Unloads a scene from the hierarchy (does not delete the scene asset)
  > **Example prompt:** "Unload the UI scene from the hierarchy"

- `duplicate_gameobject`: Duplicates a GameObject in the scene with optional renaming and reparenting
  > **Example prompt:** "Duplicate the Enemy prefab 5 times and rename them Enemy_1 through Enemy_5"

- `delete_gameobject`: Deletes a GameObject from the scene
  > **Example prompt:** "Delete the old Player object from the scene"

- `reparent_gameobject`: Changes the parent of a GameObject in the hierarchy
  > **Example prompt:** "Move the HealthBar object to be a child of the UI Canvas"

- `move_gameobject`: Moves a GameObject to a new position (local or world space)
  > **Example prompt:** "Move the Player object to position (10, 0, 5) in world space"

- `rotate_gameobject`: Rotates a GameObject to a new rotation (local or world space, Euler angles or quaternion)
  > **Example prompt:** "Rotate the Camera 45 degrees on the Y axis"

- `scale_gameobject`: Scales a GameObject to a new local scale
  > **Example prompt:** "Scale the Enemy object to twice its size"

- `set_transform`: Sets position, rotation, and scale of a GameObject in a single operation
  > **Example prompt:** "Set the Cube's position to (0, 5, 0), rotation to (0, 90, 0), and scale to (2, 2, 2)"

- `create_material`: Creates a new material with specified shader and saves it to the project
  > **Example prompt:** "Create a red material called 'EnemyMaterial' using the URP Lit shader"

- `assign_material`: Assigns a material to a GameObject's Renderer component
  > **Example prompt:** "Assign the 'EnemyMaterial' to the Enemy GameObject"

- `modify_material`: Modifies properties of an existing material (colors, floats, textures)
  > **Example prompt:** "Change the color of 'EnemyMaterial' to blue and set metallic to 0.8"

- `get_material_info`: Gets detailed information about a material including shader and all properties
  > **Example prompt:** "Show me all the properties of the 'PlayerMaterial'"

- `batch_execute`: Executes multiple tool operations in a single batch request, reducing round-trips and enabling atomic operations with optional rollback on failure
  > **Example prompt:** "Create 10 empty GameObjects named Enemy_1 through Enemy_10 in a single batch operation"

### MCP Server Resources

- `unity://menu-items`: Retrieves a list of all available menu items in the Unity Editor to facilitate `execute_menu_item` tool
  > **Example prompt:** "Show me all available menu items related to GameObject creation"

- `unity://scenes-hierarchy`: Retrieves a list of all game objects in the current Unity scene hierarchy
  > **Example prompt:** "Show me the current scenes hierarchy structure"

- `unity://gameobject/{id}`: Retrieves detailed information about a specific GameObject by instance ID or object path in the scene hierarchy, including all GameObject components with it's serialized properties and fields
  > **Example prompt:** "Get me detailed information about the Player GameObject"

- `unity://logs`: Retrieves a list of all logs from the Unity console
  > **Example prompt:** "Show me the recent error messages from the Unity console"

- `unity://packages`: Retrieves information about installed and available packages from the Unity Package Manager
  > **Example prompt:** "List all the packages currently installed in my Unity project"

- `unity://assets`: Retrieves information about assets in the Unity Asset Database
  > **Example prompt:** "Find all texture assets in my project"

- `unity://tests/{testMode}`: Retrieves information about tests in the Unity Test Runner
  > **Example prompt:** "List all available tests in my Unity project"

## Requirements
- Unity 6 or later - to [install the server](#install-server)
- Node.js 18 or later - to [start the server](#start-server)
- npm 9 or later - to [debug the server](#debug-server)

> [!NOTE]
> **Project Paths with Spaces**
>
> MCP Unity supports project paths containing spaces. However, if you experience connection issues, try moving your project to a path without spaces as a troubleshooting step.
>
> **Examples:**
> -   ✅ **Recommended:** `C:\Users\YourUser\Documents\UnityProjects\MyAwesomeGame`
> -   ✅ **Supported:** `C:\Users\Your User\Documents\Unity Projects\My Awesome Game`

## <a name="install-server"></a>Installation

Installing this MCP Unity Server is a multi-step process:

### Step 1: Install Node.js 
> To run MCP Unity server, you'll need to have Node.js 18 or later installed on your computer:

![node](https://raw.githubusercontent.com/CoderGamester/mcp-unity/HEAD/docs/node.jpg)

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Windows</span></summary>

1. Visit the [Node.js download page](https://nodejs.org/en/download/)
2. Download the Windows Installer (.msi) for the LTS version (recommended)
3. Run the installer and follow the installation wizard
4. Verify the installation by opening PowerShell and running:
   ```bash
   node --version
   ```
</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">macOS</span></summary>

1. Visit the [Node.js download page](https://nodejs.org/en/download/)
2. Download the macOS Installer (.pkg) for the LTS version (recommended)
3. Run the installer and follow the installation wizard
4. Alternatively, if you have Homebrew installed, you can run:
   ```bash
   brew install node@18
   ```
5. Verify the installation by opening Terminal and running:
   ```bash
   node --version
   ```
</details>

### Step 2: Install Unity MCP Server package via Unity Package Manager
1. Open the Unity Package Manager (Window > Package Manager)
2. Click the "+" button in the top-left corner
3. Select "Add package from git URL..."
4. Enter: `https://github.com/CoderGamester/mcp-unity.git`
5. Click "Add"

![package manager](https://github.com/user-attachments/assets/a72bfca4-ae52-48e7-a876-e99c701b0497)

### Step 3: Configure AI LLM Client

<details open>
<summary><span style="font-size: 1.1em; font-weight: bold;">Option 1: Configure using Unity Editor</span></summary>

1. Open the Unity Editor
2. Navigate to Tools > MCP Unity > Server Window
3. Click on the "Configure" button for your AI LLM client as shown in the image below

![image](https://raw.githubusercontent.com/CoderGamester/mcp-unity/HEAD/docs/configure.jpg)

4. Confirm the configuration installation with the given popup

![image](https://github.com/user-attachments/assets/b1f05d33-3694-4256-a57b-8556005021ba)

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Option 2: Configure Manually</span></summary>

Open the MCP configuration file of your AI client and add the MCP Unity server configuration:

> Replace `ABSOLUTE/PATH/TO` with the absolute path to your MCP Unity installation or just copy the text from the Unity Editor MCP Server window (Tools > MCP Unity > Server Window).
>
> For configs that live inside the Unity project tree and get committed to git (e.g. `<project>/.vscode/mcp.json`, `<project>/opencode.json`, `<project>/.cursor/mcp.json`, `<project>/.mcp.json`, `<project>/.codex/config.toml`), prefer a project-relative path so the same file works across machines. Toggle **"Use relative path"** in the Server Window to switch the copy-paste snippet between absolute and project-relative forms. The **Configure GitHub Copilot**, **Configure OpenCode**, **Configure Cursor (Project)**, **Configure Claude Code (Project)**, and **Configure Codex CLI (Project)** buttons already emit relative paths automatically.
>
> Project-local buttons (Cursor / Claude Code / Codex CLI) write the MCP server entry into the Unity project directory instead of your global user config, so other (non-Unity) projects don't see MCP connection-failure warnings. For **Codex CLI (Project)** specifically, you must approve the project trust prompt the first time you run `codex` from the project root, otherwise Codex ignores `<project>/.codex/config.toml`.

**For JSON-based clients** (Cursor, Windsurf, Claude Code, GitHub Copilot, etc.):

```json
{
   "mcpServers": {
       "mcp-unity": {
          "command": "node",
          "args": [
             "ABSOLUTE/PATH/TO/mcp-unity/Server~/build/index.js"
          ]
       }
   }
}
```

For workspace-scoped VS Code / GitHub Copilot (`.vscode/mcp.json`), use `${workspaceFolder}` so the path is portable across machines:

```json
{
   "mcpServers": {
       "mcp-unity": {
          "command": "node",
          "args": [
             "${workspaceFolder}/Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"
          ]
       }
   }
}
```

**For Codex CLI** (`~/.codex/config.toml`):

```toml
[mcp_servers.mcp-unity]
command = "node"
args = ["ABSOLUTE/PATH/TO/mcp-unity/Server~/build/index.js"]
```

**For Cursor — project-local** (`.cursor/mcp.json` in the Unity project root, project-relative path):

```json
{
   "mcpServers": {
       "mcp-unity": {
          "command": "node",
          "args": [
             "Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"
          ]
       }
   }
}
```

**For Claude Code — project-local** (`.mcp.json` in the Unity project root, project-relative path — Claude Code's team-shared MCP config):

```json
{
   "mcpServers": {
       "mcp-unity": {
          "command": "node",
          "args": [
             "Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"
          ]
       }
   }
}
```

**For Codex CLI — project-local** (`.codex/config.toml` in the Unity project root, project-relative path):

```toml
[mcp_servers.mcp-unity]
command = "node"
args = ["Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"]
```

> Codex layers this file over the global `~/.codex/config.toml`, but only when the project is marked trusted. The first time you `cd` into the project and run `codex`, approve the trust prompt — otherwise Codex ignores `.codex/config.toml`.

**For OpenCode** (`opencode.json` in the Unity project root):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mcp-unity": {
      "type": "local",
      "enabled": true,
      "command": ["node", "Library/PackageCache/com.gamelovers.mcp-unity@<hash>/Server~/build/index.js"],
      "environment": {}
    }
  }
}
```

> Note: the `@<hash>` segment in the UPM package cache path changes when the package is updated. If you update MCP Unity, re-run the **Configure** button (or update the path manually) so the snippet points at the new cache directory.

</details>

## <a name="start-server"></a>Start Unity Editor MCP Server
1. Open the Unity Editor
2. Navigate to Tools > MCP Unity > Server Window
3. Click "Start Server" to start the WebSocket server
4. Open your AI Coding IDE (e.g. Cursor, Windsurf, Claude Code, Codex CLI, GitHub Copilot, Google Antigravity, OpenCode, etc.) and start executing Unity tools
   
![connect](https://github.com/user-attachments/assets/2e266a8b-8ba3-4902-b585-b220b11ab9a2)

> When the AI client connects to the WebSocket server, it will automatically show in the green box in the window

## Optional: Set WebSocket Port
By default, the WebSocket server runs on port '8090'. You can change this port in two ways:

1. Open the Unity Editor
2. Navigate to Tools > MCP Unity > Server Window
3. Change the "WebSocket Port" value to your desired port number
4. Unity will setup the system environment variable UNITY_PORT to the new port number
5. Restart the Node.js server
6. Click again on "Start Server" to reconnect the Unity Editor web socket to the Node.js MCP Server

## Optional: Set Timeout

By default, the timeout between the MCP server and the WebSocket is 10 seconds.
You can change depending on the OS you are using:

1. Open the Unity Editor
2. Navigate to Tools > MCP Unity > Server Window
3. Change the "Request Timeout (seconds)" value to your desired timeout seconds
4. Unity will setup the system environment variable UNITY_REQUEST_TIMEOUT to the new timeout value
5. Restart the Node.js server
6. Click again on "Start Server" to reconnect the Unity Editor web socket to the Node.js MCP Server

> [!TIP]  
> The timeout between your AI Coding IDE (e.g., Claude Desktop, Cursor IDE, Windsurf IDE) and the MCP Server depends on the IDE.

## Optional: Allow Remote MCP Bridge Connections

By default, the WebSocket server binds to 'localhost'. To allow MCP bridge connections from other machines:

1. Open the Unity Editor
2. Navigate to Tools > MCP Unity > Server Window
3. Enable the "Allow Remote Connections" checkbox
4. Unity will bind the WebSocket server to '0.0.0.0' (all interfaces)
5. Restart the Node.js server to apply the new host configuration
6. Set the environment variable UNITY_HOST to your Unity machine's IP address when running the MCP bridge remotely: `UNITY_HOST=192.168.1.100 node server.js`

## <a name="debug-server"></a>Debugging the Server

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Building the Node.js Server</span></summary>

The MCP Unity server is built using Node.js . It requires to compile the TypeScript code to JavaScript in the `build` directory.
In case of issues, you can force install it in by:

1. Open the Unity Editor
2. Navigate to Tools > MCP Unity > Server Window
3. Click on "Force Install Server" button

![install](https://raw.githubusercontent.com/CoderGamester/mcp-unity/HEAD/docs/install.jpg)

If you want to build it manually, you can follow these steps:

1. Open a terminal/PowerShell/Command Prompt

2. Navigate to the Server directory:
   ```bash
   cd ABSOLUTE/PATH/TO/mcp-unity/Server~
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the server:
   ```bash
   npm run build
   ```

5. Run the server:
   ```bash
   node build/index.js
   ```

</details>
   
<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Debugging with MCP Inspector</span></summary>

Debug the server with [@modelcontextprotocol/inspector](https://github.com/modelcontextprotocol/inspector):
   - Powershell
   ```powershell
   npx @modelcontextprotocol/inspector node Server~/build/index.js
   ```
   - Command Prompt/Terminal
   ```cmd
   npx @modelcontextprotocol/inspector node Server~/build/index.js
   ```

Don't forget to shutdown the server with `Ctrl + C` before closing the terminal or debugging it with the [MCP Inspector](https://github.com/modelcontextprotocol/inspector).

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Enable Console Logs</span></summary>

1. Enable logging on your terminal or into a log.txt file:
   - Powershell
   ```powershell
   $env:LOGGING = "true"
   $env:LOGGING_FILE = "true"
   ```
   - Command Prompt/Terminal
   ```cmd
   set LOGGING=true
   set LOGGING_FILE=true
   ```

</details>

## Frequently Asked Questions

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">What is MCP Unity?</span></summary>

MCP Unity is a powerful bridge that connects your Unity Editor environment to AI assistants LLM tools using the Model Context Protocol (MCP).

In essence, MCP Unity:
-   Exposes Unity Editor functionalities (like creating objects, modifying components, running tests, etc.) as "tools" and "resources" that an AI can understand and use.
-   Runs a WebSocket server inside Unity and a Node.js server (acting as a WebSocket client to Unity) that implements the MCP. This allows AI assistants to send commands to Unity and receive information back.
-   Enables you to use natural language prompts with your AI assistant to perform complex tasks within your Unity project, significantly speeding up development workflows.

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Why use MCP Unity?</span></summary>

MCP Unity offers several compelling advantages for developers, artists, and project managers:

-   **Accelerated Development:** Automate repetitive tasks, generate boilerplate code, and manage assets using AI prompts. This frees up your time to focus on creative and complex problem-solving.
-   **Enhanced Productivity:** Interact with Unity Editor features without needing to manually click through menus or write scripts for simple operations. Your AI assistant becomes a direct extension of your capabilities within Unity.
-   **Improved Accessibility:** Allows users who are less familiar with the deep intricacies of the Unity Editor or C# scripting to still make meaningful contributions and modifications to a project through AI guidance.
-   **Seamless Integration:** Designed to work with various AI assistants and IDEs that support MCP, providing a consistent way to leverage AI across your development toolkit.
-   **Extensibility:** The protocol and the toolset can be expanded. You can define new tools and resources to expose more of your project-specific or Unity's functionality to AI.
-   **Collaborative Potential:** Facilitates a new way of collaborating where AI can assist in tasks traditionally done by team members, or help in onboarding new developers by guiding them through project structures and operations.

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">How does MCP Unity compare with the upcoming Unity 6.2 AI features?</span></summary>

Unity 6.2 is set to introduce new built-in AI tools, including the previous Unity Muse (for generative AI capabilities like texture and animation generation) and Unity Sentis (for running neural networks in Unity runtime). As Unity 6.2 is not yet fully released, this comparison is based on publicly available information and anticipated functionalities:

-   **Focus:**
    -   **MCP Unity:** Primarily focuses on **Editor automation and interaction**. It allows external AI (like LLM-based coding assistants) to *control and query the Unity Editor itself* to manipulate scenes, assets, and project settings. It's about augmenting the *developer's workflow* within the Editor.
    -   **Unity 6.2 AI:**
        -   Aims at in-Editor content creation (generating textures, sprites, animations, behaviors, scripts) and AI-powered assistance for common tasks, directly integrated into the Unity Editor interface.
        -   A fine-tuned model to ask any question about Unity's documentation and API structure, with customized examples more accurate to Unity's environment.
        -   Adds the functionality to run AI model inference, allowing developers to deploy and run pre-trained neural networks *within your game or application* for features like NPC behavior, image recognition, etc.

-   **Use Cases:**
    -   **MCP Unity:** "Create a new 3D object, name it 'Player', add a Rigidbody, and set its mass to 10." "Run all Play Mode tests." "Ask to fix the error on the console log." "Execute the custom menu item 'Prepare build for iOS' and fix any errors that may occur."
    -   **Unity 6.2 AI:** "Generate a sci-fi texture for this material." "Update all trees position in the scene to be placed inside of terrain zones tagged with 'forest'." "Create a walking animation for this character." "Generate 2D sprites to complete the character." "Ask details about the error on the console log."

-   **Complementary, Not Mutually Exclusive:**
    MCP Unity and Unity's native AI tools can be seen as complementary. You might use MCP Unity with your AI coding assistant to set up a scene or batch-modify assets, and then use Unity AI tools to generate a specific texture, or to create animations, or 2D sprites for one of those assets. MCP Unity provides a flexible, protocol-based way to interact with the Editor, which can be powerful for developers who want to integrate with a broader range of external AI services or build custom automation workflows.

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">What MCP hosts and IDEs currently support MCP Unity?</span></summary>

MCP Unity is designed to work with any AI assistant or development environment that can act as an MCP client. The ecosystem is growing, but current known integrations or compatible platforms include:
-  Cursor
-  Windsurf
-  Claude Desktop
-  Claude Code
-  Codex CLI
-  GitHub Copilot
-  Google Antigravity
-  OpenCode

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Can I extend MCP Unity with custom tools for my project?</span></summary>

Yes, absolutely! One of the significant benefits of the MCP Unity architecture is its extensibility.
-   **In Unity (C#):** You can create new C# classes that inherit from `McpToolBase` (or a similar base for resources) to expose custom Unity Editor functionality. These tools would then be registered in `McpUnityServer.cs`. For example, you could write a tool to automate a specific asset import pipeline unique to your project.
-   **In Node.js Server (TypeScript):** You would then define the corresponding TypeScript tool handler in the `Server/src/tools/` directory, including its Zod schema for inputs/outputs, and register it in `Server/src/index.ts`. This Node.js part will forward the request to your new C# tool in Unity.

This allows you to tailor the AI's capabilities to the specific needs and workflows of your game or application.

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Is MCP Unity free to use?</span></summary>

Yes, MCP Unity is an open-source project distributed under the MIT License. You are free to use, modify, and distribute it according to the license terms.

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Why am I unable to connect to MCP Unity?</span></summary>

- Ensure the WebSocket server is running (check the Server Window in Unity)
- Send a console log message from MCP client to force a reconnection between MCP client and Unity server
- Change the port number in the Unity Editor MCP Server window. (Tools > MCP Unity > Server Window)

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Why won't the MCP Unity server start?</span></summary>

- Check the Unity Console for error messages
- Ensure Node.js is properly installed and accessible in your PATH
- Verify that all dependencies are installed in the Server directory

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Why do I get a connection failed error when running Play Mode tests?</span></summary>

The `run_tests` tool returns the following response:
```
Error:
Connection failed: Unknown error
```

This error occurs because the bridge connection is lost when the domain reloads upon switching to Play Mode.  The workaround is to turn off **Reload Domain** in **Edit > Project Settings > Editor > "Enter Play Mode Settings"**.

</details>

<details>
<summary><span style="font-size: 1.1em; font-weight: bold;">Why do some clients fail with <code>KeyError: 'position'</code> during tool initialization?</span></summary>

Some MCP clients may fail while parsing tool schemas when they contain local JSON pointer references such as `#/properties/position`.

MCP Unity avoids this by registering transform tool inputs (`set_transform`, `move_gameobject`, `rotate_gameobject`, `scale_gameobject`) with fresh nested vector schemas per field, so the generated schema does not rely on local `#/properties/...` references.

If you still see this error:
- update your MCP client to the latest version,
- rebuild the Node server (`cd Server~ && npm run build`),
- confirm your package version includes this compatibility fix.

</details>

## Troubleshooting: WSL2 (Windows 11) networking

When running the MCP (Node.js) server inside WSL2 while Unity runs on Windows 11, connecting to `ws://localhost:8090/McpUnity` may fail with `ECONNREFUSED`.

Cause: WSL2 and Windows have separate network namespaces — `localhost` inside WSL2 does not point to the Windows host. By default, Unity listens on `localhost:8090`.

### Solution 1 — Enable WSL2 Mirrored mode networking (preferred)
- Windows 11: Settings → System → For developers → WSL → Enable “Mirrored mode networking”.
- Or via `.wslconfig` (then run `wsl --shutdown` and reopen WSL):

```ini
[wsl2]
networkingMode=mirrored
```

After enabling, `localhost` is shared between Windows and WSL2, so the default config (`localhost:8090`) works.

### Solution 2 — Point the Node client to the Windows host
Set in your WSL shell before starting the MCP client:

```bash
# Use the Windows host IP detected from resolv.conf
export UNITY_HOST=$(grep -m1 nameserver /etc/resolv.conf | awk '{print $2}')
```

With this, `Server~/src/unity/mcpUnity.ts` will connect to `ws://$UNITY_HOST:8090/McpUnity` instead of `localhost` (it reads `UNITY_HOST`, and may also honor a `Host` in `ProjectSettings/McpUnitySettings.json` if present).

### Solution 3 — Allow remote connections from Unity
- Unity: Tools → MCP Unity → Server Window → enable “Allow Remote Connections” (Unity binds to `0.0.0.0`).
- Ensure Windows Firewall allows inbound TCP on your configured port (default 8090).
- From WSL2, connect to the Windows host IP (see Solution 2) or to `localhost` if mirrored mode is enabled.

> [!NOTE]
> Default port is `8090`. You can change it in the Unity Server Window (Tools → MCP Unity → Server Window). The value maps to `McpUnitySettings` and is persisted in `ProjectSettings/McpUnitySettings.json`.

#### Validate connectivity

```bash
npm i -g wscat
# After enabling mirrored networking
wscat -c ws://localhost:8090/McpUnity
# Or using the Windows host IP
wscat -c ws://$UNITY_HOST:8090/McpUnity
```

## Running Tests

### C# Tests (Unity)
Run tests using Unity's Test Runner:
1. Open Unity Editor
2. Navigate to Window > General > Test Runner
3. Select "EditMode" tab
4. Click "Run All" to execute all tests

### TypeScript Tests (Server)
Run tests using Jest:
```bash
cd Server~
npm test
```

To run tests in watch mode:
```bash
npm run test:watch
```

## Support & Feedback

If you have any questions or need support, please open an [issue](https://github.com/CoderGamester/mcp-unity/issues) on this repository or alternative you can reach out on:
- Linkedin: [![](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white 'LinkedIn')](https://www.linkedin.com/in/miguel-tomas/)
- Discord: gamester7178
- Email: game.gamester@gmail.com

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue with your request.

**Commit your changes** following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

## License

This project is under [MIT License](LICENSE.md)

## Acknowledgements

- [Model Context Protocol](https://modelcontextprotocol.io)
- [Unity Technologies](https://unity.com)
- [Node.js](https://nodejs.org)
- [WebSocket-Sharp](https://github.com/sta/websocket-sharp)
