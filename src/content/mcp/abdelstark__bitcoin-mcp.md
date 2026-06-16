---
name: "AbdelStark/bitcoin-mcp"
description: "A Model Context Protocol (MCP) server that enables AI models to interact with Bitcoin, allowing them to generate keys, validate addresses, decode transactions, query the blockchain, and more."
category: "Other Tools and Integrations"
repo: "AbdelStark/bitcoin-mcp"
stars: 74
url: "https://github.com/AbdelStark/bitcoin-mcp"
body_length: 16815
license: "MIT"
language: "TypeScript"
homepage: "https://abdelstark.github.io/bitcoin-mcp/"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/abdelstark-bitcoin-mcp-badge.png)](https://mseep.ai/app/abdelstark-bitcoin-mcp)

  <div align="center">

  <a href="https://github.com/AbdelStark/bitcoin-mcp/actions/workflows/ci.yml"></a>
  <a href="https://bitcoin.org/"> </a>
  <a href="https://modelcontextprotocol.com/"> </a>

  </div>

  # ₿itcoin & Lightning Network MCP Server

  <div align="center">
    <h3>
      <a href="abdelstark.github.io/bitcoin-mcp/">
        Dokumentasyon
      </a>
      <span> | </span>
      <a href="https://abdelstark.github.io/bitcoin-mcp/docs/integration/claude-desktop">
        Claude ile Dene
      </a>
      <span> | </span>
      <a href="https://abdelstark.github.io/bitcoin-mcp/docs/integration/goose">
        Goose ile Dene
      </a>
    </h3>
  </div>

  <div align="center">
  <a href="https://smithery.ai/server/@AbdelStark/bitcoin-mcp"></a>
  <a href="https://www.npmjs.com/package/bitcoin-mcp"></a>
  </div>

  ## Genel Bakış

  AI modellerinin Bitcoin ve Lightning Network ile etkileşime girmesini sağlayan bir Model Context Protocol (MCP) sunucusu. Anahtarlar üretmek, adresleri doğrulamak, işlemleri çözmek, blockchain sorgulamak ve daha fazlasını yapabilirler.

  ## 🎮 Demo

  | Claude Demo [Video](https://github.com/user-attachments/assets/ce7a2665-c276-4a54-a727-b29dd911f8af)         | Goose Demo [Video](https://github.com/user-attachments/assets/7c1e4a05-51cf-435f-bd34-39e8fba6635e) |
  | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
  |  |           |

  ## 💼 İçindekiler

  - [₿itcoin \& Lightning Network MCP Server](#itcoin--lightning-network-mcp-server)
    - [Genel Bakış](#genel-bakış)
    - [🎮 Demo](#-demo)
    - [💼 İçindekiler](#-içindekiler)
    - [🔧 Özellikler](#-özellikler)
    - [🔑 Claude Desktop Entegrasyonu](#-claude-desktop-entegrasyonu)
      - [Claude Desktop Entegrasyonunu Test Etme](#claude-desktop-entegrasyonunu-test-etme)
    - [🦆 Goose Entegrasyonu](#-goose-entegrasyonu)
      - [STDIO Kullanma (Yerel Uzantı)](#stdio-kullanma-yerel-uzantı)
        - [SSE Kullanma (Uzak Uzantı)](#sse-kullanma-uzak-uzantı)
    - [📦 Geliştirme Kurulumu](#-geliştirme-kurulumu)
      - [Lightning Network Yapılandırması (İsteğe Bağlı)](#lightning-network-yapılandırması-isteğe-bağlı)
    - [📦 Kullanılabilir Araçlar](#-kullanılabilir-araçlar)
    - [🚨 Hata İşleme](#-hata-işleme)
    - [🤝 Katkı Sağlama](#-katkı-sağlama)
    - [📝 Lisans](#-lisans)

  ## 🔧 Özellikler

  - **Anahtar Üretimi**: Yeni Bitcoin anahtar çiftleri oluşturun — adres, açık anahtar ve özel anahtar (WIF) dahil.
  - **Adres Doğrulaması**: Bir Bitcoin adresinin doğruluğunu doğrulayın.
  - **İşlem Çözümü**: Ham bir Bitcoin işlemini ayrıştırın ve ayrıntılarını insan tarafından okunabilir bir biçimde görüntüleyin.
  - **Blockchain Sorguları**:
    - **Son Blok**: En son blok hakkında ayrıntıları alın (hash, yükseklik, zaman damgası, işlem sayısı, vb.).
    - **İşlem Ayrıntıları**: TXID kullanarak bir işlem hakkında ayrıntılı bilgi alın.
  - **Lightning Network**:
    - **Fatura Çözümü**: BOLT11 Lightning faturasını ayrıştırın ve insan tarafından okunabilir bilgiler görüntüleyin.
    - **Ödeme**: LNBits cüzdanınızdan doğrudan Lightning faturasına ödeme yapın.

  ## 🔑 Claude Desktop Entegrasyonu

  Bitcoin MCP sunucusunu Claude Desktop (Anthropic'in Claude için masaüstü uygulaması) ile kullanmak için aşağıdaki adımları izleyin:

  1. **Claude Desktop'ı İndirin ve Yükleyin:** Resmi Claude Desktop indirme sayfasını ziyaret edin ve işletim sisteminiz için uygulamayı alın (macOS veya Windows) ([Installing Claude for Desktop | Anthropic Help Center](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop#:~:text=1,page)). Uygulamayı yükleyin ve en son sürümü kullandığınızdan emin olun (uygulama menüsünden güncellemeleri kontrol edebilirsiniz).

  2. **Claude Desktop'ı Bitcoin MCP Sunucusunu Kullanacak Şekilde Yapılandırın:** Claude Desktop yapılandırma dosyasını açın (Claude Desktop'ta ayarları düzenlerken oluşturulur):

     - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
     - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`  
       Bu JSON yapılandırmasında `"mcpServers"` bölümü altına Bitcoin MCP sunucusu için bir giriş ekleyin. Örneğin:

     ```json
     {
       "mcpServers": {
         "bitcoin-mcp": {
           "command": "npx",
           "args": ["-y", "bitcoin-mcp@latest"]
         }
       }
     }
     ```

     Yukarıdaki kod parçacığında `"bitcoin-mcp"` sunucunun bir tanımlayıcısıdır (istediğiniz şekilde adlandırabileceğiniz). `command` `npx` komutunu çalıştırmak için ayarlanmış ve `args` Bitcoin MCP sunucusu betiğinin yolunu veya sunucuyu çalıştırma komutunu işaret eder.

  3. **Claude Desktop'ı Yeniden Başlatın:** `claude_desktop_config.json` dosyasını kaydedin ve ardından **Claude Desktop'ı kapatıp yeniden açın**. Sonraki açılışında Claude, yapılandırıldığı şekilde Bitcoin MCP sunucusunu otomatik olarak başlatacaktır. Claude Desktop çalışıyorsa, değişikliklerin geçerli olması için onu yeniden başlatmanız gerekir.

  ### Claude Desktop Entegrasyonunu Test Etme

  Claude Desktop yeniden başlatıldıktan sonra, Bitcoin MCP sunucusunun düzgün çalışıp çalışmadığını test edebilirsiniz:

  - **Claude'a Bitcoin ile ilgili örnek bir soru sorun.** Örneğin, şunu sorabilirsiniz: _"Bitcoin ağında son blok nedir?"_ Entegrasyon başarılı ise, Claude'un yanıtı MCP sunucusu tarafından alınan son bloğu içermelidir; "Bilmiyorum" veya genel bir cevap yerine. Ayrıca diğer sorguları da deneyebilirsiniz: _"abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 TXID'li işlem hakkında bilgi ver."_ Claude, MCP sunucusunun araçlarını kullanarak verileri almalı ve sorgunuzu cevaplamalıdır.

  - **Yanıtı Doğrulayın:** Claude hatasız ayrıntılı bir yanıt döndürmelidir (örneğin Bitcoin ağındaki son blok). Hata iletisi veya yararlı bir yanıt almazsanız, MCP sunucusu düzgün bağlanmamış olabilir.

  - **Claude'un günlüklerini kontrol edin (gerekirse):** Claude Desktop, MCP entegrasyonlarında hata ayıklamaya yardımcı olabilecek günlük dosyaları sağlar. Aracı yanıt vermiyorsa, şu yerlerdeki günlük dosyalarını kontrol edin:
    - **macOS:** `~/Library/Logs/Claude/`
    - **Windows:** `%APPDATA%\Claude\logs\`  
      Genel MCP bağlantı mesajleri için `mcp.log` dosyasını ve MCP sunucusunun çıktısı/hataları için `mcp-server-bitcoin-mcp.log` adlı dosyayı (veya kullandığınız herhangi bir ad) arayın. Bu günlükler sunucunun başlatılıp başlatılmadığını veya herhangi bir hata (yanlış yol veya sunucudaki istisna gibi) olup olmadığını gösterecektir. Hata görürseniz, yapılandırmayı veya ortamı düzeltin, ardından Claude Desktop'ı yeniden başlatın ve tekrar test edin.

  ## 🦆 Goose Entegrasyonu

  Goose, Model Context Protocol aracılığıyla uzantıları destekleyen Block tarafından sağlanan açık kaynaklı bir AI agent framework'tür. Bitcoin MCP sunucusunu, Goose'un Bitcoin blockchain ile etkileşime girmesini sağlayan bir Goose uzantısı olarak entegre edebilirsiniz. Goose, MCP sunucuları için iki entegrasyon modunu destekler: sunucuyu yerel bir işlem olarak çalıştırma (STDIO) veya bunu Sunucu Tarafından Gönderilen Olaylar (SSE) aracılığıyla uzak bir hizmet olarak bağlama. Her iki yöntem için de talimatlar aşağıda verilmiştir:

  ### STDIO Kullanma (Yerel Uzantı)

  Bu yöntem Bitcoin MCP sunucusunu Goose'un bir alt işlemi olarak yerel olarak çalıştırır ve standart giriş/çıkış aracılığıyla iletişim kurar.

  1. **Goose'da yeni bir uzantı ekleyin:** Goose'un yapılandırma arayüzünü açın. Bunu komut satırında `goose configure` komutunu çalıştırarak veya Goose Desktop uygulamasında **Ayarlar > Uzantılar**'a giderek yapabilirsiniz. Menüden **"Uzantı Ekle"yi** seçin. ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=1))

  2. **Uzantı türünü seçin – Komut Satırı Uzantısı:** Uzantı türü istendiğinde, **Komut Satırı Uzantısı**'nı seçin (CLI menüsünde veya UI'da), böylece Goose yerel bir komut başlatması gerektiğini bilir ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=3,extension%20you%E2%80%9Bd%20like%20to%20add)) (yerleşik veya uzak uzantıya karşı).

  3. **Uzantı ayrıntılarını girin:** Bitcoin MCP sunucusu için bir ad ve komut sağlayın:

     - **Ad:** "bitcoin" veya başka bir tanımlayıcı olarak adlandırabilirsiniz (uzantıyı böyle çağıracaksınız).
     - **Komut:** MCP sunucusunu çalıştırmak için nasıl yapılacağını belirtin. Örneğin, Python betiğiniz varsa, bunu çalıştırma komutunu girin. CLI yapılandırıcısında, "Hangi komut çalıştırılmalı?" sorusu sorabilir — şunu girersiniz:

       ```bash
       npx -y bitcoin-mcp@latest
       ```

       Bu Goose'a Bitcoin MCP sunucusunu başlaması için söyler ([GitHub - AbdelStark/bitcoin-mcp: Bitcoin MCP Server](https://github.com/AbdelStark/bitcoin-mcp)). (Sunucu betiğinin doğru yolunu veya sunucuyu çalıştırma komutunu kullandığınızdan emin olun, tıpkı Claude yapılandırmasında olduğu gibi.)

     - Genellikle betik yolunun ötesine hiçbir argument eklemeniz gerekmez (sunucunuz özel bayraklar gerektirmediği sürece). Yukarıdaki komut, Goose'un bir komut satırı uzantısı için beklediği varsayılan STDIO taşımasını kullanır. (Goose config dosyasında bu, `cmd: "npx"` ve `args: ["-y", "bitcoin-mcp@latest"]` içeren bir giriş olarak karşılık gelir; `type: stdio` standart I/O modunu belirtir ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=extensions%3A%20fetch%3A%20name%3A%20GitHub%20cmd%3A,%7D%20type%3A%20stdio)).)

  4. **Sonlandır ve etkinleştir:** Uzantı eklemeyi tamamlayın. Goose bu yeni uzantıyı yapılandırmasına ekleyecektir (genellikle `~/.config/goose/config.yaml`). Uzantının **etkinleştirildiğinden** emin olun (CLI sihirbazını kullanıyorsanız eklendikten sonra varsayılan olarak etkinleştirilmiş olmalıdır; Goose Desktop uygulamasında, Uzantılar listesini kontrol edebilir ve zaten açık değilse etkinleştirebilirsiniz ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#:~:text=%E2%97%87%20%20What%20would%20you,%E2%94%82%20%20%E2%97%BB%20fetch%20%E2%94%94)) ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#:~:text=%E2%94%82%20%20%E2%97%BE%20developer%20%E2%94%82,%E2%97%BB%20fetch%20%E2%94%94))).

  5. **Yeni uzantı ile bir Goose oturumu başlatın:** Artık uzantıyı Goose'da kullanabilirsiniz. Goose'u CLI aracılığıyla çalıştırıyorsanız, şu komutu çalıştırarak uzantıyı içeren bir oturum başlatın:

     ```bash
     goose session --with-extension "bitcoin"
     ```

  uzantıya verdiğiniz adla "bitcoin" yerine koyun ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#:~:text=Starting%20a%20Session%20with%20Extensions)). (Bu oturumun uzantıyı yüklemesini sağlar. Alternatif olarak, uzantı küresel olarak etkinleştirilirse, Goose Desktop veya CLI otomatik olarak tüm oturumlarda kullanılabilir hale gelir.)

  #### SSE Kullanma (Uzak Uzantı)

  Bu yöntem Goose'u zaten çalışan bir MCP sunucusuna HTTP SSE akışı üzerinden bağlar. Bunu Bitcoin MCP sunucusunu bağımsız bir hizmet olarak (muhtemelen başka bir makinede veya Goose'tan bağımsız olarak) çalıştırmak istiyorsanız kullanın.

  1. **MCP sunucusunu bağımsız bir hizmet olarak başlatın:** Bitcoin MCP sunucusunu bağlantılar için dinleyecek şekilde çalıştırın. Pratikte bu, sunucunun MCP için HTTP endpoint'inin hizmet vermesini sağlayacak şekilde başlatılması anlamına gelir. Örneğin, sunucuyu belirli bir komut veya seçenekle bir port üzerinde dinlemek için çalıştırabilirsiniz (MCP kütüphanesinin yerleşik web sunucusu özelliklerini kullanarak veya bir web framework'ü altında çalıştırarak). Sunucunun bilinen bir URL'de erişilebilir olduğundan emin olun (örneğin `http://localhost:9000`) ve MCP protokolünü SSE üzerinden destekleyin.

  2. **Goose'da yeni bir uzantı ekleyin (Uzak):** Daha önce olduğu gibi, `goose configure` komutunu çalıştırın veya Goose UI'sında **Uzantı Ekle**'yi kullanın ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=1)). Bu sefer, uzantı türü istendiğinde **Uzak Uzantı**'nı seçin ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=3,extension%20you%E2%80%9Bd%20like%20to%20add)). Bu Goose'a SSE aracılığıyla harici bir sunucuya bağlanacağını söyler.

  3. **Uzak uzantı ayrıntılarını girin:** Uzantıya bir ad verin (örneğin "bitcoin") ve sunucunun URL'sini sağlayın. **URL** için, MCP sunucusunun çalıştığı temel adresini girin. Örneğin, sunucunuz yerel makinenizde port 9000'de dinliyorsa, `http://localhost:9000` girebilirsiniz. Goose, MCP sunucusunun SSE endpoint'sine o adresle bağlanmaya çalışacaktır. (Goose standart MCP SSE yolunu kullanır; kural gereği sunucudaki `/mcp/sse` yolu altında yer alır; genellikle sadece ana bilgisayar ve port sağlamanız yeterlidir; Goose'un geri kalanını yönetir.)

  4. **Uzantıyı etkinleştirin:** Uzak uzantıyı ekledikten sonra, Goose'un ayarlarında etkinleştirildiğinden emin olun (STDIO durumunda olduğu gibi). Aynı araçlara sahip STDIO veya SSE uzantısının (aynı adla) sadece biri etkinleştirilmelidir — aynı sunucunun yerel ve uzak sürümünü yanlışlıkla etkinleştirirseniz, karışıklığı önlemek için birini devre dışı bırakmak isteyebilirsiniz.

  **Goose'da Bitcoin MCP uzantısını kullanma:** Uzantı kurulduktan (yukarıdaki yöntemlerden biriyle) ve etkinleştirildikten sonra, Goose ile etkileşime girebilir ve Bitcoin verilerini ona sorgu yapabilirsiniz. Yeni bir Goose sohbeti veya oturumunda, normalde olduğu gibi sorular sorun. Goose, isteğinizi yerine getirmek için Bitcoin MCP araçlarını ne zaman kullanacağını algılayacaktır. Örneğin:

  - _"Bitcoin'in son bloğu nedir?"_
  - _"abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 TXID'li işlem hakkında bilgi ver."_

  Bu soruları sorduğunuzda, Goose MCP sunucusunun araçlarını çağıracak ve cevabı döndürecektir (örneğin, en son Bitcoin blok bilgileri). Goose'un MCP sunucusu aracılığıyla Bitcoin blockchain'den alınan güncel bilgilerle yanıt vermesini görmelisiniz.

  Eğer Goose uzantıyı kullanmıyor gibi görünüyorsa (örneğin, bilgiyi bulamadığını söylüyorsa), uzantının etkinleştirildiğinden emin olun ve sunucunun çalıştığından emin olun (SSE modu için uzak). Uzantıyı çağırmaya çalışıp çalışmadığını görmek için Goose'un CLI'sini ayrıntılı günlüğe kaydedilmiş olarak çalıştırabilirsiniz. Genel olarak doğru yapılandırılmışsa, Goose otomatik olarak MCP sunucusunun yeteneklerini bulacak ve ilgili olduğunda kullanacaktır.

  **Ek Kaynaklar:** Goose uzantıları ve MCP hakkında daha fazla bilgi için resmi Goose belgelerine bakın ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=MCP%20Server%20Directory)). Belgeler yerleşik ve topluluk uzantılarının bir listesini içerir ve MCP sunucularının Goose'a nasıl entegre olduğunu açıklar. Daha fazla uzantı keşfetmek veya kendi uzantınızı geliştirmek istiyorsanız, Goose belgeleri ve Model Context Protocol belgelerinde mevcut MCP sunucularından oluşan bir dizin ve ek yapılandırma ipuçlarını bulabilirsiniz.

  ## 📦 Geliştirme Kurulumu

  [Development Setup](https://abdelstark.github.io/bitcoin-mcp/docs/getting-started/development-setup) kılavuzunda kurulum talimatlarını bulabilirsiniz.

  ### Lightning Network Yapılandırması (İsteğe Bağlı)

  Lightning Network özelliklerini kullanmak için LNBits bağlantı ayrıntılarını yapılandırmanız gerekecektir. Bunlar isteğe bağlıdır ve yalnızca Lightning Network araçlarını kullanmayı planlıyorsanız gereklidir.

  ```json
  {
    "lnbitsUrl": "https://demo.lnbits.com",  
    "lnbitsAdminKey": "your_admin_key",      // Ödeme yapmak için gereklidir
    "lnbitsReadKey": "your_read_key"         // Cüzdan bilgileri için gereklidir
  }
  ```

  Bu değerleri şu şekilde elde edebilirsiniz:
  1. [LNBits](https://lnbits.com/) üzerinde bir hesap oluşturun
  2. Yeni bir cüzdan oluşturun
  3. API bilgilerine giderek API anahtarlarınızı bulun

  ## 📦 Kullanılabilir Araçlar

  Kullanılabilir araçları [API Reference](https://abdelstark.github.io/bitcoin-mcp/docs/api/generate-key) kılavuzunda bulabilirsiniz.

  ## 🚨 Hata İşleme

  Sunucu, Bitcoin işlemlerini ve blockchain sorgularını işlemek için özel hata türleri kullanır. Ayrıntılı hata mesajları Pino kullanılarak günlüğe kaydedilir ve hata ayıklamayı kolaylaştırmak için istemci yanıtlarına dahil edilir.

  ## 🤝 Katkı Sağlama

  Katkı ve özellik istekleri memnuniyetle karşılanır! GitHub'da pull request göndermekten veya sorun açmaktan çekinmeyin.

  ## 📝 Lisans

  Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/abdelstark-bitcoin-mcp-badge.png)](https://mseep.ai/app/abdelstark-bitcoin-mcp)

<div align="center">

<a href="https://github.com/AbdelStark/bitcoin-mcp/actions/workflows/ci.yml"></a>
<a href="https://bitcoin.org/"> </a>
<a href="https://modelcontextprotocol.com/"> </a>

</div>

# ₿itcoin & Lightning Network MCP Server

<div align="center">
  <h3>
    <a href="abdelstark.github.io/bitcoin-mcp/">
      Documentation
    </a>
    <span> | </span>
    <a href="https://abdelstark.github.io/bitcoin-mcp/docs/integration/claude-desktop">
      Try with Claude
    </a>
    <span> | </span>
    <a href="https://abdelstark.github.io/bitcoin-mcp/docs/integration/goose">
      Try with Goose
    </a>
  </h3>
</div>

<div align="center">
<a href="https://smithery.ai/server/@AbdelStark/bitcoin-mcp"></a>
<a href="https://www.npmjs.com/package/bitcoin-mcp"></a>
</div>

## Overview

A Model Context Protocol (MCP) server that enables AI models to interact with Bitcoin and Lightning Network, allowing them to generate keys, validate addresses, decode transactions, query the blockchain, and more.

## 🎮 Demo

| Claude Demo [Video](https://github.com/user-attachments/assets/ce7a2665-c276-4a54-a727-b29dd911f8af)         | Goose Demo [Video](https://github.com/user-attachments/assets/7c1e4a05-51cf-435f-bd34-39e8fba6635e) |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
|  |           |

## 💼 Table of Contents

- [₿itcoin \& Lightning Network MCP Server](#itcoin--lightning-network-mcp-server)
  - [Overview](#overview)
  - [🎮 Demo](#-demo)
  - [💼 Table of Contents](#-table-of-contents)
  - [🔧 Features](#-features)
  - [🔑 Claude Desktop Integration](#-claude-desktop-integration)
    - [Testing the Claude Desktop Integration](#testing-the-claude-desktop-integration)
  - [🦆 Goose Integration](#-goose-integration)
    - [Using STDIO (Local Extension)](#using-stdio-local-extension)
      - [Using SSE (Remote Extension)](#using-sse-remote-extension)
  - [📦 Development Setup](#-development-setup)
    - [Lightning Network Configuration (Optional)](#lightning-network-configuration-optional)
  - [📦 Available Tools](#-available-tools)
  - [🚨 Error Handling](#-error-handling)
  - [🤝 Contributing](#-contributing)
  - [📝 License](#-license)

## 🔧 Features

- **Key Generation**: Create new Bitcoin key pairs — including address, public key, and private key (WIF).
- **Address Validation**: Validate the correctness of a Bitcoin address.
- **Transaction Decoding**: Parse a raw Bitcoin transaction and display its details in a human-readable format.
- **Blockchain Queries**:
  - **Latest Block**: Retrieve details about the most recent block (hash, height, timestamp, transaction count, etc.).
  - **Transaction Details**: Fetch detailed information about a transaction using its TXID.
- **Lightning Network**:
  - **Invoice Decoding**: Parse a BOLT11 Lightning invoice and display human-readable information.
  - **Payment**: Pay a Lightning invoice directly from your LNBits wallet.

## 🔑 Claude Desktop Integration

To use the Bitcoin MCP server with Claude Desktop (Anthropic's desktop app for Claude), follow these steps:

1. **Download and Install Claude Desktop:** Visit the official Claude Desktop downloads page and get the app for your operating system (macOS or Windows) ([Installing Claude for Desktop | Anthropic Help Center](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop#:~:text=1,page)). Install the app and ensure you're using the latest version (you can check for updates in the app menu).

2. **Configure Claude Desktop to use the Bitcoin MCP Server:** Open the Claude Desktop configuration file (it's created when you first edit settings in Claude Desktop):

   - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`  
     Add an entry for the Bitcoin MCP server in this JSON config under the `"mcpServers"` section. For example:

   ```json
   {
     "mcpServers": {
       "bitcoin-mcp": {
         "command": "npx",
         "args": ["-y", "bitcoin-mcp@latest"]
       }
     }
   }
   ```

   In the snippet above, `"bitcoin-mcp"` is an identifier for the server (you can name it whatever you want). The `command` is set to run the `npx` command, and `args` points to the path of your Bitcoin MCP server script or the command to run the server.

3. **Restart Claude Desktop:** Save the `claude_desktop_config.json` file and then **close and reopen Claude Desktop**. On the next launch, Claude will automatically start the Bitcoin MCP server as configured. If Claude Desktop was running, you need to restart it for the changes to take effect.

### Testing the Claude Desktop Integration

Once Claude Desktop is restarted, you can test whether the Bitcoin MCP server is working correctly:

- **Ask Claude a sample question related to Bitcoin.** For example, try asking: _"What's the latest block on the Bitcoin network?"_ If the integration is successful, Claude's response should include the latest block fetched via the MCP server, rather than an "I don't know" or a generic answer. You can also try other queries like _"Give me information about the transaction with TXID abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890."_ Claude should use the MCP server's tools to retrieve the data and answer your query.

- **Verify the response:** Claude should return a detailed answer (e.g. the latest block on the Bitcoin network) without errors. If you get an error message or no useful response, the MCP server might not be connected properly.

- **Check Claude's logs (if needed):** Claude Desktop provides log files that can help debug MCP integrations. If the tool isn't responding, check the log files in:
  - **macOS:** `~/Library/Logs/Claude/`
  - **Windows:** `%APPDATA%\Claude\logs\`  
    Look for `mcp.log` for general MCP connection messages, and a file named `mcp-server-bitcoin-mcp.log` (or with whatever name you used) for the MCP server's output/errors. These logs will show if the server started up or if there were any errors (such as a wrong path or exceptions in the server). If you see errors, fix the configuration or environment as needed, then restart Claude Desktop and test again.

## 🦆 Goose Integration

Goose is an open-source AI agent framework by Block that supports extensions via the Model Context Protocol. You can integrate the Bitcoin MCP server as a Goose extension to allow Goose to interact with the Bitcoin blockchain. Goose supports two modes of integration for MCP servers: running the server as a local process (STDIO) or connecting to it as a remote service via Server-Sent Events (SSE). Below are instructions for both methods:

### Using STDIO (Local Extension)

This method runs the Bitcoin MCP server locally as a subprocess of Goose, communicating through standard input/output.

1. **Add a new extension in Goose:** Open Goose's configuration interface. You can do this via the command line by running `goose configure`, or in the Goose Desktop app by going to **Settings > Extensions**. From the menu, choose **"Add Extension."** ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=1))

2. **Choose the extension type – Command-Line Extension:** When prompted for the type of extension, select **Command-Line Extension** (in the CLI menu or UI) so that Goose knows it should launch a local command ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=3,extension%20you%E2%80%99d%20like%20to%20add)) (as opposed to a built-in or remote extension).

3. **Enter the extension details:** Provide a name and command for the Bitcoin MCP server:

   - **Name:** You can call it "bitcoin", or any identifier (this will be how you refer to the extension).
   - **Command:** Specify how to run the MCP server. For example, if you have the Python script, enter the command to run it. In the CLI configurator, it might ask "What command should be run?" – you would enter:

     ```bash
     npx -y bitcoin-mcp@latest
     ```

     This tells Goose to launch the Bitcoin MCP server ([GitHub - AbdelStark/bitcoin-mcp: Bitcoin MCP Server](https://github.com/AbdelStark/bitcoin-mcp)). (Make sure to use the correct path to your server script or the correct command to run the server, just like in the Claude config.)

   - You typically do not need to add any arguments beyond the script path (unless your server requires special flags). The above command uses the default STDIO transport, which Goose expects for a command-line extension. (In the Goose config file, this would correspond to an entry with `cmd: "npx"` and `args: ["-y", "bitcoin-mcp@latest"]`, with `type: stdio` indicating standard I/O mode ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=extensions%3A%20fetch%3A%20name%3A%20GitHub%20cmd%3A,%7D%20type%3A%20stdio)).)

4. **Finalize and enable:** Complete the extension addition. Goose will add this new extension to its configuration (usually `~/.config/goose/config.yaml`). Ensure the extension is **enabled** (if using the CLI wizard, it should be enabled by default once added; in the Goose Desktop app, you can check the Extensions list and toggle it on if it isn't already ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#:~:text=%E2%97%87%20%20What%20would%20you,%E2%94%82%20%20%E2%97%BB%20fetch%20%E2%94%94)) ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#:~:text=%E2%94%82%20%20%E2%97%BE%20developer%20%E2%94%82,%E2%97%BB%20fetch%20%E2%94%94))).

5. **Start a Goose session with the new extension:** You can now use the extension in Goose. If you're running Goose via CLI, start a session that includes the extension by running:

   ```bash
   goose session --with-extension "bitcoin"
   ```

replacing "bitcoin" with whatever name you gave the extension ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#:~:text=Starting%20a%20Session%20with%20Extensions)). (This ensures the session loads the extension. Alternatively, if the extension is enabled globally, Goose Desktop or CLI will automatically have it available in all sessions.)

#### Using SSE (Remote Extension)

This method connects Goose to an already-running MCP server via an HTTP SSE stream. Use this if you want to run the Bitcoin MCP server as a standalone service (possibly on another machine or just independently of Goose).

1. **Launch the MCP server as a standalone service:** Run the Bitcoin MCP server so that it listens for connections. In practice, this means the server needs to be started in a mode that serves an HTTP endpoint for MCP. For example, you might run the server with a specific command or option to listen on a port (such as using an MCP library's built-in web server capabilities or running under a web framework). Ensure the server is reachable at a known URL (e.g., `http://localhost:9000`) and supports the MCP protocol over SSE.

2. **Add a new extension in Goose (Remote):** As before, run `goose configure` or use the Goose UI to **Add Extension** ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=1)). This time, choose **Remote Extension** when asked for the type of extension ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=3,extension%20you%E2%80%99d%20like%20to%20add)). This tells Goose that it will connect to an external server via SSE.

3. **Enter the remote extension details:** Give the extension a name (e.g., "bitcoin") and provide the server's URL. For the **URL**, enter the base address where the MCP server is running. For instance, if your server is listening on port 9000 on your local machine, you might enter `http://localhost:9000`. Goose will attempt to connect to the MCP server's SSE endpoint at that address. (Goose uses the standard MCP SSE path, which by convention is under the `/mcp/sse` route on the server, you usually just need to supply the host and port, and Goose handles the rest.)

4. **Enable the extension:** After adding the remote extension, ensure it's enabled in Goose's settings (just like in the STDIO case). Only one of the STDIO or SSE extension (with the same tools) needs to be enabled – if you accidentally enable both a local and remote version of the same server, you may want to disable one to avoid confusion.

**Using the Bitcoin MCP extension in Goose:** Once the extension is set up (via either method above) and enabled, you can interact with Goose and query Bitcoin data through it. In a new Goose chat or session, simply ask questions as you normally would. Goose will recognize when to use the Bitcoin MCP tools to fulfill your request. For example:

- _"What's the latest Bitcoin block?"_
- _"Give me information about the transaction with TXID abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890."_

When you ask these questions, Goose will invoke the MCP server's tools and return the answer (e.g., the latest Bitcoin block information). You should see Goose responding with up-to-date information pulled from the Bitcoin blockchain via the MCP server.

If Goose does not seem to use the extension (for instance, if it responds that it cannot find the information), make sure the extension is enabled and that the server is running (in SSE mode for remote). You can also run Goose's CLI with verbose logging to see if it attempted to call the extension. Generally, if configured correctly, Goose will automatically discover the MCP server's capabilities and use them when relevant.

**Further Resources:** For more details on Goose extensions and the MCP, refer to the official Goose documentation ([Using Extensions | goose](https://block.github.io/goose/docs/getting-started/using-extensions/#adding-extensions#:~:text=MCP%20Server%20Directory)). The docs include a list of built-in and community extensions and explain how MCP servers integrate into Goose. You can also find a directory of available MCP servers and additional configuration tips in the Goose docs and the Model Context Protocol documentation. This can help if you want to explore more extensions or develop your own.

## 📦 Development Setup

Find the setup instructions in the [Development Setup](https://abdelstark.github.io/bitcoin-mcp/docs/getting-started/development-setup) guide.

### Lightning Network Configuration (Optional)

To use Lightning Network features, you'll need to configure LNBits connection details. These are optional and only required if you plan to use the Lightning Network tools.

```json
{
  "lnbitsUrl": "https://demo.lnbits.com",  
  "lnbitsAdminKey": "your_admin_key",      // Required for making payments
  "lnbitsReadKey": "your_read_key"         // Required for wallet information
}
```

You can obtain these values by:
1. Creating an account at [LNBits](https://lnbits.com/)
2. Creating a new wallet
3. Going to API info to find your API keys

## 📦 Available Tools

Find the available tools in the [API Reference](https://abdelstark.github.io/bitcoin-mcp/docs/api/generate-key) guide.

## 🚨 Error Handling

The server employs custom error types to handle Bitcoin operations and blockchain queries. Detailed error messages are logged using Pino and included in client responses for easier debugging.

## 🤝 Contributing

Contributions and feature requests are welcome! Feel free to submit pull requests or open issues on GitHub.

## 📝 License

This project is licensed under the [MIT License](LICENSE).
