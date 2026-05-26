---
name: "CheMiguel23/MemoryMesh"
description: "Enhanced graph-based memory with a focus on AI role-play and story generation"
description_tr: "AI rol-play ve hikaye üretimi için optimize edilmiş, graf tabanlı geliştirilmiş bellek sistemi"
category: "Knowledge & Memory"
repo: "CheMiguel23/MemoryMesh"
stars: 342
url: "https://github.com/CheMiguel23/MemoryMesh"
body_length: 18149
license: "MIT"
language: "TypeScript"
body_tr: |-
  # MemoryMesh
  [![Release](https://img.shields.io/badge/Release-v0.3.0-blue.svg)](./CHANGELOG.md)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ![GitHub Stars](https://img.shields.io/github/stars/CheMiguel23/MemoryMesh.svg?style=social)

  MemoryMesh, AI modelleri için tasarlanmış bir bilgi grafı sunucusudur ve metin tabanlı RPG'ler ile etkileşimli hikaye anlatımına odaklanmıştır. AI'ın konuşmalar arasında tutarlı, yapılandırılmış belleği korumasına yardımcı olarak, daha zengin ve dinamik etkileşimleri mümkün kılar.

  *Proje, MCP sunucuları deposundan [Knowledge Graph Memory Server](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) tabanlıdır ve temel işlevselliğini korumaktadır.*

  <a href="https://glama.ai/mcp/servers/kf6n6221pd"></a>

  [![MseeP.ai Security Assessment](https://mseep.net/pr/chemiguel23-memorymesh-badge.png)](https://mseep.ai/app/chemiguel23-memorymesh)

  ## ÖNEMLİ

  **v0.3.0 Güncellemesi:** MCP SDK, mevcut [Model Context Protocol spesifikasyonuna (2025-11-25)](https://modelcontextprotocol.io/specification/2025-11-25) uyum sağlamak için v1.0.4'ten v1.25.2'ye güncellendi. Bu, Claude Desktop, ChatGPT, Cursor, Gemini ve VS Code dahil olmak üzere en son MCP istemcileriyle uyumluluğu sağlayan büyük bir güncellemedir. Güncelledikten sonra, yeni bağımlılıkları almak için `npm install` komutunu çalıştırın.

  `v0.2.7` sürümünden itibaren şemaların varsayılan konumu `dist/data/schemas` olarak değiştirilmiştir.
  Bu konum gelecekte değişmesi beklenmemektedir, ancak önceki bir sürümden güncelleme yapıyorsanız, şema dosyalarınızı yeni konuma taşıdığınızdan emin olun.

  ## Hızlı Bağlantılar

  *   [Kurulum](#kurulum)
  *   [Örnek](#örnek)
  *   [SchemaManager Kılavuzu Tartışması](https://github.com/CheMiguel23/MemoryMesh/discussions/3)
  *   [MemoryViewer Kılavuzu Tartışması](https://github.com/CheMiguel23/MemoryMesh/discussions/15)

  ## Genel Bakış

  MemoryMesh, AI modelleri için yapılandırılmış bilgi oluşturmanızı ve yönetmenizi sağlayan yerel bir bilgi grafı sunucusudur. Metin tabanlı RPG'ler için özellikle uygun olmakla birlikte, uyarlanabilir tasarımı sosyal ağ simülasyonları, organizasyon planlaması veya yapılandırılmış verileri içeren herhangi bir senaryo için kullanışlı hale getirir.

  ### Temel Özellikler

  *   **Dinamik Şema Tabanlı Araçlar:** Verilerinizin yapısını şemalarla tanımlayın ve MemoryMesh, veri eklemek, güncellemek ve silmek için araçlar otomatik olarak oluştursun.
  *   **Sezgisel Şema Tasarımı:** AI'ı düğümleri oluşturmaya ve bağlamaya rehberlik eden şemalar oluşturun, zorunlu alanları, numaralandırılmış türleri ve ilişki tanımlamalarını kullanın.
  *   **AI Rehberliği için Meta Veri:**  AI'ın verilerinizin anlamını ve ilişkilerini anlamasına yardımcı olmak için bağlam ve yapı sağlamak amacıyla meta verileri kullanın.
  *   **İlişki Yönetimi:** Şemalarınız içinde ilişkileri tanımlayarak AI'ı ilgili veri noktaları (düğümler) arasında bağlantı (kenarlar) oluşturmaya teşvik edin.
  *   **Bilgilendirici Geri Bildirim:**  AI'a hata geri bildirimi sunarak, hata yapmaktan öğrenmesine ve bilgi grafı ile etkileşimlerini geliştirmesine olanak tanıyın.
  *   **Event Desteği:** Operasyonları izleyen bir event sistemi, bilgi grafının nasıl değiştirildiğine ilişkin içgörüler sağlar.

  #### Düğümler

  Düğümler, bilgi grafı içindeki varlıkları veya kavramları temsil eder. Her düğüm şunlara sahiptir:

  * `name`: Benzersiz bir tanımlayıcı.
  * `nodeType`: Düğümün türü (örn. `npc`, `artifact`, `location`), şemalarınız tarafından tanımlanır.
  * `metadata`: Düğüm hakkında açıklayıcı ayrıntılar sağlayan dizelerin bir dizisi.
  * `weight`: (İsteğe Bağlı) İlişkinin gücünü temsil eden 0 ile 1 arasında bir sayısal değer, varsayılan olarak 1'dir.

  **Örnek Düğüm:**

  ```json
      {
        "name": "Aragorn",
        "nodeType": "player_character",
        "metadata": [
          "Race: Human",
          "Class: Ranger",
          "Skills: Tracking, Swordsmanship",
          "Affiliation: Fellowship of the Ring"
        ]
      }
  ```

  #### Kenarlar

  Kenarlar, düğümler arasındaki ilişkileri temsil eder. Her kenar şunlara sahiptir:

  * `from`: Kaynak düğümün adı.
  * `to`: Hedef düğümün adı.
  * `edgeType`: İlişkinin türü (örn. `owns`, `located_in`).

  ```json
  {
    "from": "Aragorn",
    "to": "Andúril",
    "edgeType": "owns"
  }
  ```

  #### Şemalar

  Şemalar, MemoryMesh'in kalbidir. Verilerinizin yapısını tanımlar ve araçların otomatik oluşturulmasını yönlendirir.

  ##### Şema Dosyası Konumu

  Şema dosyalarınızı (`.schema.json`) yapılı MemoryMesh projenizin `dist/data/schemas` dizinine yerleştirin. MemoryMesh, başlangıçta bu dosyaları otomatik olarak algılayacak ve işleyecektir.

  ##### Şema Yapısı

  Dosya adı: `[name].schema.json`. Örneğin, bir 'npc' tanımlayan bir şema için, dosya adı `add_npc.schema.json` olacaktır.

  * `name` - Şema ve bellek içindeki düğüm türü için tanımlayıcı. **ÖNEMLİ**: Şemanın adı tanınması için `add_` ile başlamalıdır.
  * `description` - `add_<name>` aracının açıklaması olarak kullanılır, AI için bağlam sağlar. *(İçin `delete` ve `update` araçlarının genel bir açıklaması vardır)*
  * `properties` - Her property, türü, açıklaması ve ek kısıtlamalarını içerir.
      * `property`
          * `type` - Desteklenen değerler `string` veya `array` şeklindedir.
          * `description` - AI'ı varlığın amacı hakkında rehberlik etmeye yardımcı olur.
          * `required` - Boolean. `true` ise, **AI'ın zorunlu olarak** bir düğüm oluştururken bu property'yi sağlaması gerekir.
          * `enum` - Dizelerin bir dizisi. Mevcutsa, **AI'ın verilen seçeneklerden birini seçmesi gerekir**.
          * `relationship` - Başka bir düğüme bağlantı tanımlar. Bir property zorunlu ve ilişkiye sahipse, **AI her zaman** hem düğümü hem de karşılık gelen kenarı oluşturacaktır.
              * `edgeType` - Oluşturulacak ilişkinin türü.
              * `description` - AI'ı ilişkinin amacı hakkında rehberlik etmeye yardımcı olur.
  * `additionalProperties` - Boolean. `true` ise, AI'ın zorunlu veya isteğe bağlı olarak tanımlanan olanlar dışında ek attribute eklemesine izin verir.

  ##### Örnek Şema (add_npc.schema.json):

  ```json
  {
    "name": "add_npc",
    "description": "Schema for adding an NPC to the memory" ,
    "properties": {
      "name": {
        "type": "string",
        "description": "A unique identifier for the NPC",
        "required": true
      },
      "race": {
        "type": "string",
        "description": "The species or race of the NPC",
        "required": true,
        "enum": [
          "Human",
          "Elf",
          "Dwarf",
          "Orc",
          "Goblin"
        ]
      },
      "currentLocation": {
        "type": "string",
        "description": "The current location of the NPC",
        "required": true,
        "relationship": {
          "edgeType": "located_in",
          "description": "The current location of the NPC"
        }
      }
    },
    "additionalProperties": true
  }
  ```

  Bu şemaya bağlı olarak, MemoryMesh otomatik olarak şunları oluşturur:
  * add_npc: Yeni NPC düğümleri eklemek için.
  * update_npc: Mevcut NPC düğümlerini değiştirmek için.
  * delete_npc: NPC düğümlerini kaldırmak için.

  MemoryMesh, metin tabanlı RPG'ler için tasarlanmış 11 ön kurulu şema içerir ve oyun geliştirme için hazır kullanıma hazır bir temel sağlar.

  ##### SchemaManager Aracı

  MemoryMesh, şema oluşturma ve düzenlemesini basitleştirmek için bir [SchemaManager aracı](https://github.com/CheMiguel23/MemoryMesh/blob/main/SchemaManager.html) içerir. Visual bir arayüz sağlayarak, JSON'u doğrudan yazmadan veri yapılarınızı tanımlamayı kolaylaştırır.



  ### Dinamik Araçlar

  MemoryMesh, **dinamik araçlar** aracılığıyla bilgi grafınız ile etkileşimi basitleştirir. Bu araçlar manuel olarak kodlanmaz, bunun yerine **otomatik olarak oluşturulur** doğrudan **şema tanımlarınızdan**. Bu, şemalar kullanarak verilerinizin yapısını tanımladığınızda, MemoryMesh'in bu belirli veri yapısıyla çalışmak için özel olarak tasarlanmış bir araç seti zekice oluşturacağı anlamına gelir.

  **Bunu şöyle düşünün:** Siz bir blueprint (şema) sağlarsınız ve MemoryMesh, o blueprint'e dayalı olarak öğeleri oluşturmak, değiştirmek ve kaldırmak için gerekli araçları otomatik olarak inşa eder.

  #### Arkasında nasıl çalışır?

  MemoryMesh'in, şema tanımlarınızı okuyan akıllı bir sistemi vardır. Tanımladığınız yapıyı, varlıklarınızın özellikleri ve ilişkilerini analiz eder. Bu analize bağlı olarak, her varlık türü için otomatik olarak bir araç seti oluşturur:

  *   **`add_<entity>`:**  Bir varlığın yeni örneklerini oluşturmak için bir araç.
  *   **`update_<entity>`:** Mevcut varlıkları değiştirmek için bir araç.
  *   **`delete_<entity>`:** Varlıkları kaldırmak için bir araç.

  Bu araçlar daha sonra MemoryMesh içindeki merkezi bir hub aracılığıyla kullanıma sunulur, böylece bağlı herhangi bir istemci veya AI tarafından kolayca erişilebilir ve kullanılabilir duruma getirilir.

  **Esasen, MemoryMesh'in dinamik araç sistemi, bilgi grafınızı yönetmek için güçlü ve etkili bir yol sağlayarak, temel veri manipülasyonunun mekaniklerinden ziyade uygulamanızın içeriği ve mantığına odaklanmanıza olanak tanır.**

  ### Bellek dosyası

  Varsayılan olarak, veriler `dist/data/memory.json` dosyasında JSON olarak depolanır.

  #### Memory Viewer

  Memory Viewer, MemoryMesh tarafından yönetilen bilgi grafının içeriğini görselleştirmenize ve incelemenize yardımcı olmak için tasarlanmış ayrı bir araçtır. Düğümleri, kenarları ve özelliklerini keşfetmek için kullanıcı dostu bir arayüz sağlar.

  ##### Temel Özellikler:
  * Grafik Görselleştirmesi: Bilgi grafını etkileşimli bir düğüm-bağlantı diyagramı olarak görüntüleyin.
  * Düğüm İncelemesi: NodeType'ını, metadata'sını ve bağlı kenarlarını görmek için düğümleri seçin.
  * Kenar Keşfi: Düğümler arasındaki ilişkileri keşfedin, edgeType ve yönü de dahil olmak üzere.
  * Arama ve Filtreleme: Belirli düğümleri hızlıca bulun veya bunları türe göre filtreleyin.
  * Tablo Görünümü: Belirli düğümleri ve kenarları veya tümünü kolayca bulmanıza ve incelemenize izin verir.
  * Ham JSON Görünümü: Bellek dosyasından ham JSON verileri görüntülemenize izin verir.
  * İstatistikler Paneli: Bilgi grafı hakkında temel metrikler ve bilgiler sağlar: toplam düğümler, toplam kenarlar, düğüm türleri ve kenar türleri.
  * Arama ve Filtreleme: Düğüm türü veya kenar türüne göre filtrelemeye ve düğümleri, kenarları veya her ikisini de gösterip göstermemeyi filtrelemeye izin verir.

  ##### Memory Viewer'a Erişim
  Memory Viewer, bağımsız bir web uygulamasıdır. [Memory Viewer tartışması](https://github.com/CheMiguel23/MemoryMesh/discussions/15)

  ##### Memory Viewer'ı Kullanma
  * Bellek Dosyasını Seçin: Memory Viewer'da "Bellek Dosyasını Seç" düğmesine tıklayın.
  * Dosya Seçin: MemoryMesh proje dizinine gidin ve `memory.json` dosyasını seçin (varsayılan olarak `dist/data/memory.json` konumunda).
  * Keşfedin: Memory Viewer, bilgi grafının içeriğini yükleyecek ve görüntüleyecektir.

  ## Bellek Akışı

  ![image](https://github.com/user-attachments/assets/27519003-c1e6-448a-9fdb-cd0a0009f67d)

  ## İstemi

  En iyi sonuçlar için Claude'un "Projects" özelliğini özel talimatlarla kullanın. Başlayabileceğiniz bir istem örneği:

  ```
  You are a helpful AI assistant managing a knowledge graph for a text-based RPG. You have access to the following tools: add_npc, update_npc, delete_npc, add_location, update_location, delete_location, and other tools for managing the game world.

  When the user provides input, first process it using your available tools to update the knowledge graph. Then, respond in a way that is appropriate for a text-based RPG.
  ```

  Sohbette doğrudan AI'ya belirli eylemler gerçekleştirmesi talimatını da verebilirsiniz.

  Kullanım durumunuz için en iyi sonucu veren farklı istemler deneyin!

  ### Örnek
  1. Özel talimatlarla [basit bir örnek](https://pastebin.com/0HvKg5FZ).
  2. Örneğin sahibi olan bir örnek, görselleştirme ile _(İŞLEVSELLİĞİN PARÇASI DEĞİL)_

  > Birkaç şehir, bazı NPC'ler, şehrin etrafında keşfetmek için birkaç konum ekleyin, bir veya iki artefaktı bir yerlere gizleyin

  ![image](https://github.com/user-attachments/assets/508d5903-2896-4665-a892-cdb7b81dfba6)

  ## Kurulum

  ### Ön Koşullar

  *   **Node.js:** Sürüm 18 veya daha yüksek. [nodejs.org](https://nodejs.org/) adresinden indirebilirsiniz.
  *   **npm:**  Genellikle Node.js'ye dahildir.
  *   **Claude Desktop:**  [claude.ai/download](https://claude.ai/download) adresinden en son sürümü yüklediğinizden emin olun.

  ### Kurulum Adımları

  1. **Depoyu Klonlayın:**

      ```bash
      git clone https://github.com/CheMiguel23/memorymesh.git
      cd memorymesh
      ```

  2. **Bağımlılıkları Kurun:**

      ```bash
      npm install
      ```

  3. **Projeyi Yapılandırın:**

      ```bash
      npm run build
      ```
     Bu komut, TypeScript kodunu `dist` dizininde JavaScript'e derler ve örnek şema ile veri dosyalarını da kopyalar.

  4. **Dosya Kopyalamayı Doğrulayın (İsteğe Bağlı):**

      *   Yapı işlemi, `data` klasörünü `dist` klasörüne otomatik olarak kopyalamalıdır.
      *   **Kontrol edin** `dist/data` klasörünün var olduğunu ve `.json` dosyaları içerdiğini. Ayrıca `dist/data/schemas` klasörünün var olduğunu ve `.schema.json` dosyaları içerdiğini doğrulayın.

  5. **Claude Desktop'ı Yapılandırın:**

     Claude Desktop yapılandırma dosyanızı açın:

      * **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
      * **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
      * `mcpServers` bölümüne `memorymesh` için bir entry ekleyin. Aşağıdaki yapılandırma seçeneklerinden **birini** seçebilirsiniz:

      ```json
      "mcpServers": {
        "memorymesh": {
          "command": "node", 
          "args": ["/ABSOLUTE/PATH/TO/YOUR/PROJECT/memorymesh/dist/index.js"]
        }
      }
      ```

      *   `/ABSOLUTE/PATH/TO/YOUR/PROJECT/` öğesini `memorymesh` proje dizininizin **gerçek mutlak yolu** ile değiştirin.
      *   **Örnek (macOS):**
          ```json
          "command": "node",
          "args": ["/Users/yourusername/Projects/memorymesh/dist/index.js"]
          ```
      *   **Örnek (Windows):**
          ```json
          "command": "node",
          "args": ["C:\\Projects\\memorymesh\\dist\\index.js"]
          ```

  6. **Claude Desktop'ı Yeniden Başlatın:** Değişikliklerin etkili olması için Claude Desktop'ı tamamen yeniden başlatın.

  ### Kurulumu Doğrulayın

  1. Claude Desktop'ı başlatın.
  2. Yeni bir sohbet açın.
  3. Sağ üst köşedeki MCP eklenti simgesini arayın. Oradaysa, yapılandırmanız muhtemelen doğrudur.
  4. Simgeyi tıklayın. Bağlı sunucuların listesinde "memorymesh" görmeniz gerekir.
  5. Simgeyi tıklayın. Araçlar listelenen görmek istiyorsanız (örn. `add_npc`, `update_npc`, vb.), sunucunuz çalışıyor ve araçları doğru şekilde ortaya koymaktadır.

  ### Güncelleme
  Güncellemelerden önce, bellek verilerinizi kaybetmemek için `dist/data` dizinini yedekleyin.

  ### Sorun Giderme

  *   **Sunucu Claude'da görünmüyor:**
      *   `claude_desktop_config.json` dosyasındaki yolları çift kontrol edin. Mutlak yollar ve doğru oldukları emin olun.
      *   `dist` dizininin var olduğunu ve `index.js` dahil olmak üzere derlenmiş JavaScript dosyalarını içerdiğini doğrulayın.
      *   Claude Desktop günlüklerinde hataları kontrol edin:
          *   **macOS:** `~/Library/Logs/Claude/mcp-server-memorymesh.log` (ve `mcp.log`)
          *   **Windows:** (Muhtemelen `%AppData%\Claude` altındaki bir `Logs` klasöründe)

  *   **Araçlar görünmüyor:**
      *   `npm run build` komutunuzun hatasız tamamlandığından emin olun.
      *   Şema dosyalarınızın `dist/data/schemas` konumunda doğru bir şekilde yerleştirildiğini ve doğru adlandırma kuralını izlediğini doğrulayın (`add_[entity].schema.json`).
      *   Başlatma sırasında hataları almak için sunucunuzun konsol çıktısını veya günlüklerini kontrol edin.

  ## Gelişmiş Yapılandırma
  MemoryMesh, temel kurulumun ötesinde davranışını özelleştirmenin birkaç yolunu sunar:

  ### Değişkenler
  `/config/config.ts` içinde varsayılan ayarları geçersiz kılabilirsiniz
  * MEMORY_FILE: Bilgi grafı verilerini depolamak için kullanılan JSON dosyasının yolunu belirtir. (Varsayılan: `dist/data/memory.json`)
  * SCHEMAS_DIR: Şema dosyaları dizinine giden yol. (Varsayılan: `dist/data/schemas/memory.json`)

  ## Sınırlamalar

  1. **Düğüm Silme:** AI, bilgi grafından düğümleri silme konusunda isteksiz olabilir. Gerekirse istemler aracılığıyla bunu teşvik edin.

  2. **Çatışan Bilgi:** MemoryMesh, verileri işlemek için şu anda bir "son yazı kazanır" yaklaşımı kullanır. Aynı varlık hakkında çatışan bilgiler sağlanırsa, en son güncelleme önceki değerlerin yerine geçer. Çatışan bilgileri yönetmek için stratejiler:

     **Mevcut Yaklaşımlar:**
     - **Kaynakları izlemek için meta verileri kullanın:** `"Source: Character testimony"` veya `"Source: Official records"` gibi meta veri girişleri ekleyerek bilginin nereden geldiğini takip edin.
     - **Zamansal meta veri kullanın:** Meta verilere zaman damgalarını veya anlatı zaman işaretçilerini (örn. `"As of Chapter 3"`) ekleyerek bilginin ne zaman geçerli olduğunu takip edin.
     - **Perspektifler için ayrı düğümler oluşturun:** Öznel veya tartışmalı bilgiler için, farklı görüşpontları temsil eden ayrı düğümler oluşturun (örn. `rumor_about_villain` vs `truth_about_villain`).
     - **Kenar ağırlıklarını kullanın:** İlişkilerin güvenilirliğini veya ilişkisini belirtmek için kenarlar (0-1 aralığında) üzerinde isteğe bağlı `weight` özelliğini kullanın.

     **Örnek - Belirsiz bilgileri izlemek:**
     ```json
     {
       "name": "VillainOrigin_Rumor",
       "nodeType": "information",
       "metadata": [
         "Source: Tavern gossip",
         "Reliability: Low",
         "Claims: Villain came from the northern mountains"
       ]
     }
     ```

     **Gelecekteki Hususlar:**
     Sofistike çatışma çözümleme gerektiren uygulamalar için, şunları yapan özel bir katman uygulamayı düşünün:
     - Düğüm değişikliklerinin sürüm geçmişini tutar
     - Her bilgi parçasının kaynağını (provenance) takip eder
     - İçin güven puanları uygular
     - Gerçekler için zamansal geçerlilik dönemleri destekler

  ## Katkı

  Katkılar, geri bildirim ve fikirler hoş karşılanır!
  Bu proje, yapılandırılmış verilerin AI akıl yürütme yetenekleriyle entegre edilmesine yönelik kişisel bir keşiftir. Bunu ileriye taşımak veya yeni projeleri ilham vermek için katkılar, geri bildirim ve fikirler hoş karşılanır.
---

# MemoryMesh
[![Release](https://img.shields.io/badge/Release-v0.3.0-blue.svg)](./CHANGELOG.md)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub Stars](https://img.shields.io/github/stars/CheMiguel23/MemoryMesh.svg?style=social)

MemoryMesh is a knowledge graph server designed for AI models, with a focus on text-based RPGs and interactive storytelling. It helps AI maintain consistent, structured memory across conversations, enabling richer and more dynamic interactions.

*The project is based on the [Knowledge Graph Memory Server](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) from the MCP servers repository and retains its core functionality.*

<a href="https://glama.ai/mcp/servers/kf6n6221pd"></a>

[![MseeP.ai Security Assessment](https://mseep.net/pr/chemiguel23-memorymesh-badge.png)](https://mseep.ai/app/chemiguel23-memorymesh)

## IMPORTANT

**v0.3.0 Update:** The MCP SDK has been updated from v1.0.4 to v1.25.2 to comply with the current [Model Context Protocol specification (2025-11-25)](https://modelcontextprotocol.io/specification/2025-11-25). This is a major update that brings compatibility with the latest MCP clients including Claude Desktop, ChatGPT, Cursor, Gemini, and VS Code. After updating, run `npm install` to fetch the new dependencies.

Since `v0.2.7` the default location of schemas was changed to `dist/data/schemas`.
This location is not expected to change in the future, but if you are updating from a previous version, make sure to move your schema files to the new location.

## Quick Links

*   [Installation](#installation)
*   [Example](#example)
*   [SchemaManager Guide Discussion](https://github.com/CheMiguel23/MemoryMesh/discussions/3)
*   [MemoryViewer Guide Discussion](https://github.com/CheMiguel23/MemoryMesh/discussions/15)

## Overview

MemoryMesh is a local knowledge graph server that empowers you to build and manage structured information for AI models. While particularly well-suited for text-based RPGs, its adaptable design makes it useful for various applications, including social network simulations, organizational planning, or any scenario involving structured data.

### Key Features

*   **Dynamic Schema-Based Tools:** Define your data structure with schemas, and MemoryMesh automatically generates tools for adding, updating, and deleting data.
*   **Intuitive Schema Design:** Create schemas that guide the AI in generating and connecting nodes, using required fields, enumerated types, and relationship definitions.
*   **Metadata for AI Guidance:**  Use metadata to provide context and structure, helping the AI understand the meaning and relationships within your data.
*   **Relationship Handling:** Define relationships within your schemas to encourage the AI to create connections (edges) between related data points (nodes).
*   **Informative Feedback:**  Provides error feedback to the AI, enabling it to learn from mistakes and improve its interactions with the knowledge graph.
*   **Event Support:** An event system tracks operations, providing insights into how the knowledge graph is being modified.

#### Nodes

Nodes represent entities or concepts within the knowledge graph. Each node has:

* `name`: A unique identifier.
* `nodeType`: The type of the node (e.g., `npc`, `artifact`, `location`), defined by your schemas.
* `metadata`: An array of strings providing descriptive details about the node.
* `weight`: (Optional) A numerical value between 0 and 1 representing the strength of the relationship, defaulting to 1.

**Example Node:**

```json
    {
      "name": "Aragorn",
      "nodeType": "player_character",
      "metadata": [
        "Race: Human",
        "Class: Ranger",
        "Skills: Tracking, Swordsmanship",
        "Affiliation: Fellowship of the Ring"
      ]
    }
```

#### Edges

Edges represent relationships between nodes. Each edge has:

* `from`: The name of the source node.
* `to`: The name of the target node.
* `edgeType`: The type of relationship (e.g., `owns`, `located_in`).

```json
{
  "from": "Aragorn",
  "to": "Andúril",
  "edgeType": "owns"
}
```

#### Schemas

Schemas are the heart of MemoryMesh. They define the structure of your data and drive the automatic generation of tools.

##### Schema File Location

Place your schema files (`.schema.json`) in the `dist/data/schemas` directory of your built MemoryMesh project. MemoryMesh will automatically detect and process these files on startup.

##### Schema Structure

File name: `[name].schema.json`. For example, for a schema defining an 'npc', the filename would be `add_npc.schema.json`.

* `name` - Identifier for the schema and node type within the memory. **IMPORTANT**: The schema’s name *must* start with `add_` to be recognized.
* `description` - Used as the description for the `add_<name>` tool, providing context for the AI. *(The `delete` and `update` tools have a generic description)*
* `properties` - Each property includes its type, description, and additional constraints.
    * `property`
        * `type` - Supported values are `string` or `array`.
        * `description` - Helps guide the AI on the entity’s purpose.
        * `required` - Boolean. If `true`, the **AI is forced** to provide this property when creating a node.
        * `enum` - An array of strings. If present, the **AI must choose** one of the given options.
        * `relationship` - Defines a connection to another node. If a property is required and has a relationship, the **AI will always create** both the node and the corresponding edge.
            * `edgeType` - Type of the relationship to be created.
            * `description` - Helps guide the AI on the relationship’s purpose.
* `additionalProperties` - Boolean. If `true`, allows the AI to add extra attributes beyond those defined as required or optional.

##### Example Schema (add_npc.schema.json):

```json
{
  "name": "add_npc",
  "description": "Schema for adding an NPC to the memory" ,
  "properties": {
    "name": {
      "type": "string",
      "description": "A unique identifier for the NPC",
      "required": true
    },
    "race": {
      "type": "string",
      "description": "The species or race of the NPC",
      "required": true,
      "enum": [
        "Human",
        "Elf",
        "Dwarf",
        "Orc",
        "Goblin"
      ]
    },
    "currentLocation": {
      "type": "string",
      "description": "The current location of the NPC",
      "required": true,
      "relationship": {
        "edgeType": "located_in",
        "description": "The current location of the NPC"
      }
    }
  },
  "additionalProperties": true
}
```

Based on this schema, MemoryMesh automatically creates:
* add_npc: To add new NPC nodes.
* update_npc: To modify existing NPC nodes.
* delete_npc: To remove NPC nodes.

MemoryMesh includes 11 pre-built schemas designed for text-based RPGs, providing a ready-to-use foundation for game development.

##### SchemaManager Tool

MemoryMesh includes a [SchemaManager tool](https://github.com/CheMiguel23/MemoryMesh/blob/main/SchemaManager.html) to simplify schema creation and editing. It provides a visual interface, making it easy to define your data structures without writing JSON directly.



### Dynamic Tools

MemoryMesh simplifies interaction with your knowledge graph through **dynamic tools**. These tools are not manually coded but are **automatically generated** directly from your **schema definitions**. This means that when you define the structure of your data using schemas, MemoryMesh intelligently creates a set of tools tailored to work with that specific data structure.

**Think of it like this:** You provide a blueprint (the schema), and MemoryMesh automatically constructs the necessary tools to build, modify, and remove elements based on that blueprint.

#### How does it work behind the scenes?

MemoryMesh has an intelligent system that reads your schema definitions. It analyzes the structure you've defined, including the properties of your entities and their relationships. Based on this analysis, it automatically creates a set of tools for each entity type:

*   **`add_<entity>`:**  A tool for creating new instances of an entity.
*   **`update_<entity>`:** A tool for modifying existing entities.
*   **`delete_<entity>`:** A tool for removing entities.

These tools are then made available through a central hub within MemoryMesh, ensuring they can be easily accessed and used by any connected client or AI.

**In essence, MemoryMesh's dynamic tool system provides a powerful and efficient way to manage your knowledge graph, freeing you to focus on the content and logic of your application rather than the underlying mechanics of data manipulation.**

### Memory file

By default, data is stored in a JSON file in `dist/data/memory.json`.

#### Memory Viewer

The Memory Viewer is a separate tool designed to help you visualize and inspect the contents of the knowledge graph managed by MemoryMesh. It provides a user-friendly interface for exploring nodes, edges, and their properties.

##### Key Features:
* Graph Visualization: View the knowledge graph as an interactive node-link diagram.
* Node Inspection: Select nodes to see their nodeType, metadata, and connected edges.
* Edge Exploration: Examine relationships between nodes, including edgeType and direction.
* Search and Filtering: Quickly find specific nodes or filter them by type.
* Table View: Allows you to easily find and inspect specific nodes and edges, or all of them at once.
* Raw JSON View: Allows you to view the raw JSON data from the memory file.
* Stats Panel: Provides key metrics and information about the knowledge graph: total nodes, total edges, node types, and edge types.
* Search and Filter: Allows you to filter by node type or edge type and filter whether to show nodes, edges, or both.

##### Accessing the Memory Viewer
The Memory Viewer is a standalone web application. [Memory Viewer discussion](https://github.com/CheMiguel23/MemoryMesh/discussions/15)

##### Using the Memory Viewer
* Select Memory File: In the Memory Viewer, click the "Select Memory File" button.
* Choose File: Navigate to your MemoryMesh project directory and select the `memory.json` file (located in `dist/data/memory.json` by default).
* Explore: The Memory Viewer will load and display the contents of your knowledge graph.

## Memory Flow

![image](https://github.com/user-attachments/assets/27519003-c1e6-448a-9fdb-cd0a0009f67d)

## Prompt

For optimal results, use Claude's "Projects" feature with custom instructions. Here's an example of a prompt you can start with:

```
You are a helpful AI assistant managing a knowledge graph for a text-based RPG. You have access to the following tools: add_npc, update_npc, delete_npc, add_location, update_location, delete_location, and other tools for managing the game world.

When the user provides input, first process it using your available tools to update the knowledge graph. Then, respond in a way that is appropriate for a text-based RPG.
```

You can also instruct the AI to perform specific actions directly in the chat.

Experiment with different prompts to find what works best for your use case!

### Example
1. A [simple example](https://pastebin.com/0HvKg5FZ) with custom instructions.
2. An example for the sake of example, with visualization _(NOT part of the functionality)_

> Add a couple of cities, some npcs, couple locations around the city to explore, hide an artifact or two somewhere

![image](https://github.com/user-attachments/assets/508d5903-2896-4665-a892-cdb7b81dfba6)

## Installation

### Prerequisites

*   **Node.js:** Version 18 or higher. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm:**  Usually included with Node.js.
*   **Claude for Desktop:**  Make sure you have the latest version installed from [claude.ai/download](https://claude.ai/download).

### Installation Steps

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/CheMiguel23/memorymesh.git
    cd memorymesh
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Build the Project:**

    ```bash
    npm run build
    ```
   This command compiles the TypeScript code into JavaScript in the `dist` directory and copies sample schema and data files into it as well.

4. **Verify File Copy (Optional):**

    *   The build process should automatically copy the `data` folder to `dist`.
    *   **Check** that `dist/data` exists and contains `.json` files. Also verify that `dist/data/schemas` exists and contains `.schema.json` files.

5. **Configure Claude Desktop:**

   Open your Claude Desktop configuration file:

    * **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
    * **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
    * Add an entry for `memorymesh` to the `mcpServers` section. You can choose **one** of the following configuration options:

    ```json
    "mcpServers": {
      "memorymesh": {
        "command": "node", 
        "args": ["/ABSOLUTE/PATH/TO/YOUR/PROJECT/memorymesh/dist/index.js"]
      }
    }
    ```

    *   Replace `/ABSOLUTE/PATH/TO/YOUR/PROJECT/` with the **actual absolute path** to your `memorymesh` project directory.
    *   **Example (macOS):**
        ```json
        "command": "node",
        "args": ["/Users/yourusername/Projects/memorymesh/dist/index.js"]
        ```
    *   **Example (Windows):**
        ```json
        "command": "node",
        "args": ["C:\\Projects\\memorymesh\\dist\\index.js"]
        ```

6. **Restart Claude Desktop:** Completely restart Claude Desktop for the changes to take effect.

### Verify Installation

1. Start Claude Desktop.
2. Open a new chat.
3. Look for the MCP plugin icon  in the top-right corner. If it's there, your configuration is likely correct.
4. Click the  icon. You should see "memorymesh" in the list of connected servers.
5. Click the  icon. If you see tools listed (e.g., `add_npc`, `update_npc`, etc.), your server is working and exposing tools correctly.

### Updating
Before updates, make sure to back up your `dist/data` directory to avoid losing your memory data.

### Troubleshooting

*   **Server not appearing in Claude:**
    *   Double-check the paths in your `claude_desktop_config.json`. Make sure they are absolute paths and correct.
    *   Verify that the `dist` directory exists and contains the compiled JavaScript files, including `index.js`.
    *   Check the Claude Desktop logs for errors:
        *   **macOS:** `~/Library/Logs/Claude/mcp-server-memorymesh.log` (and `mcp.log`)
        *   **Windows:** (Likely in a `Logs` folder under `%AppData%\Claude`)

*   **Tools not showing up:**
    *   Make sure your `npm run build` command completed without errors.
    *   Verify that your schema files are correctly placed in `dist/data/schemas` and follow the correct naming convention (`add_[entity].schema.json`).
    *   Check your server's console output or logs for any errors during initialization.

## Advanced Configuration
MemoryMesh offers several ways to customize its behavior beyond the basic setup:

### Variables
You can override default settings using in `/config/config.ts`
* MEMORY_FILE: Specifies the path to the JSON file used for storing the knowledge graph data. (Default: `dist/data/memory.json`)
* SCHEMAS_DIR: Path to schema files directory. (Default: `dist/data/schemas/memory.json`)

## Limitations

1. **Node Deletion:** The AI may be hesitant to delete nodes from the knowledge graph. Encourage it through prompts if needed.

2. **Conflicting Knowledge:** MemoryMesh currently uses a "last write wins" approach for handling data. If conflicting information is provided about the same entity, the most recent update will overwrite previous values. Here are strategies for managing conflicting information:

   **Current Approaches:**
   - **Use metadata to track sources:** Add metadata entries like `"Source: Character testimony"` or `"Source: Official records"` to track where information came from.
   - **Use temporal metadata:** Include timestamps or narrative time markers (e.g., `"As of Chapter 3"`) in metadata to track when information was valid.
   - **Create separate nodes for perspectives:** For subjective or disputed information, create separate nodes representing different viewpoints (e.g., `rumor_about_villain` vs `truth_about_villain`).
   - **Use edge weights:** Leverage the optional `weight` property on edges (0-1 range) to indicate confidence or reliability of relationships.

   **Example - Tracking uncertain information:**
   ```json
   {
     "name": "VillainOrigin_Rumor",
     "nodeType": "information",
     "metadata": [
       "Source: Tavern gossip",
       "Reliability: Low",
       "Claims: Villain came from the northern mountains"
     ]
   }
   ```

   **Future Considerations:**
   For applications requiring sophisticated conflict resolution, consider implementing a custom layer that:
   - Maintains version history of node changes
   - Tracks provenance (source) of each piece of information
   - Implements confidence scores for assertions
   - Supports temporal validity periods for facts

## Contribution

Contributions, feedback, and ideas are welcome!
This project is a personal exploration into integrating structured data with AI reasoning capabilities. Contributions, feedback, and ideas are welcome to push it further or inspire new projects.
