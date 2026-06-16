---
name: "mcpdotdirect/evm-mcp-server"
description: "Comprehensive blockchain services for 30+ EVM networks, supporting native tokens, ERC20, NFTs, smart contracts, transactions, and ENS resolution."
category: "Finance & Fintech"
repo: "mcpdotdirect/evm-mcp-server"
stars: 377
url: "https://github.com/mcpdotdirect/evm-mcp-server"
body_length: 26214
license: "MIT"
language: "TypeScript"
body_tr: |-
  # EVM MCP Sunucusu

  ![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
  ![EVM Networks](https://img.shields.io/badge/Networks-60+-green)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178C6)
  ![MCP](https://img.shields.io/badge/MCP-1.22.0+-blue)
  ![Viem](https://img.shields.io/badge/Viem-2.39.3+-green)

  60+ EVM uyumlu ağ arasında blockchain hizmetleri sağlayan kapsamlı bir Model Context Protocol (MCP) sunucusu. Bu sunucu, AI ajanlarının Ethereum, Optimism, Arbitrum, Base, Polygon ve birçok diğer EVM zincirleri ile 22 araç ve 10 AI rehberli ipucu aracılığıyla birleşik bir arayüz üzerinden etkileşim kurmasını sağlar.

  ## 📋 İçerik

  - [Genel Bakış](#genel-bakış)
  - [Özellikler](#özellikler)
  - [Desteklenen Ağlar](#desteklenen-ağlar)
  - [Ön Koşullar](#ön-koşullar)
  - [Kurulum](#kurulum)
  - [Yapılandırma](#yapılandırma)
    - [Ortam Değişkenleri](#ortam-değişkenleri)
    - [Sunucu Yapılandırması](#sunucu-yapılandırması)
  - [Kullanım](#kullanım)
  - [API Referansı](#api-referansı)
    - [Araçlar](#araçlar)
    - [İpuçları](#ipuçları)
    - [Kaynaklar](#kaynaklar)
  - [Güvenlik Hususları](#güvenlik-hususları)
  - [Proje Yapısı](#proje-yapısı)
  - [Geliştirme](#geliştirme)
  - [Lisans](#lisans)

  ## 🔭 Genel Bakış

  MCP EVM Sunucusu, AI ajanlarına blockchain hizmetleri sağlamak için Model Context Protocol'ü kullanır. Aşağıdakiler de dahil olmak üzere geniş bir hizmet yelpazesini destekler:

  - Blockchain durumunu okuma (bakiyeler, işlemler, bloklar, vb.)
  - Akıllı sözleşmelerle etkileşim **blok araştırıcılarından otomatik ABI getirme** ile
  - Token'ları transfer etme (yerel, ERC20, ERC721, ERC1155)
  - Token meta verilerini ve bakiyelerini sorgulama
  - 60+ EVM ağ arasında ağ özel hizmetleri (34 mainnet + 26 testnet)
  - **ENS adı çözümlemesi** tüm adres parametreleri için (adresleri yerine 'vitalik.eth' gibi insan tarafından okunabilir isimler kullanın)
  - **AI dostu ipuçları** ajanları karmaşık iş akışlarında yönlendiren

  Tüm hizmetler tutarlı bir MCP araçları, kaynakları ve ipuçları arayüzü aracılığıyla sunulur, böylece AI ajanlarının blockchain işlevselliğini keşfetmesi ve kullanması kolay hale gelir. **Ethereum adreslerini kabul eden her araç ENS adlarını da destekler**, bunları arka planda otomatik olarak adreslere çözer. Sunucu, akıllı ABI getirme işlemini içerir, sözleşme ABI'lerini önceden bilmeye gerek ortadan kalkar.

  ## ✨ Özellikler

  ### Blockchain Veri Erişimi

  - **Çok zincir desteği** 60+ EVM uyumlu ağ için (34 mainnet + 26 testnet)
  - **Zincir bilgisi** blockNumber, chainId ve RPC'leri içeren
  - **Blok veri** erişimi numara, hash veya en son bloğa göre
  - **İşlem detayları** ve çözülen günlüklere sahip makbuzlar
  - **Adres bakiyeleri** yerel token'lar ve tüm token standartları için
  - **ENS çözümlemesi** insan tarafından okunabilir Ethereum adresleri için ('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045' yerine 'vitalik.eth' kullanın)

  ### Token hizmetleri

  - **ERC20 Token'ları**

    - Token meta verilerini al (ad, sembol, ondalık, arz)
    - Token bakiyelerini kontrol et
    - Token'ları adresler arasında transfer et
    - Harcama izinlerini onayla

  - **NFT'ler (ERC721)**

    - Koleksiyon ve token meta verilerini al
    - Token sahipliğini doğrula
    - NFT'leri adresler arasında transfer et
    - Token URI'lerini ve tutulan sayılarını al

  - **Çoklu token'lar (ERC1155)**
    - Token bakiyelerini ve meta verilerini al
    - Miktarla token'ları transfer et
    - Token URI'lerine erişim

  ### Akıllı Sözleşme Etkileşimleri

  - **Sözleşme durumunu oku** view/pure fonksiyonlar aracılığıyla
  - **Sözleşmelere yaz** - Otomatik ABI getirme ile herhangi bir durum değiştirici fonksiyonu çalıştır
  - **Sözleşme doğrulaması** EOA'lardan ayırt etmek için
  - **Olay günlükleri** alma ve filtreleme
  - **Otomatik ABI getirme** tüm 60+ ağ arasında Etherscan v2 API'sından (ABI'leri önceden bilmeye gerek yok)
  - **ABI ayrıştırma ve doğrulama** fonksiyon keşfi ile

  ### Kapsamlı İşlem Desteği

  - **Esnek Cüzdan Desteği** - Özel Anahtar veya Mnemonik (BIP-39) ile yapılandır, HD yolu desteği ile
  - **Yerel token transferleri** tüm desteklenen ağlar arasında
  - **Gas tahmini** işlem planlama için
  - **İşlem durumu** ve makbuz bilgisi
  - **Hata işleme** açıklayıcı mesajlarla

  ### İleti İmzalama Yetenekleri

  - **Kişisel İleti İmzalama** - Kimlik doğrulama ve doğrulama için rastgele iletileri imzala
  - **EIP-712 Tip Veri İmzalama** - Gazlı olmayan işlemler ve meta işlemler için yapılandırılmış veri imzala
  - **SIWE Desteği** - Sign-In With Ethereum kimlik doğrulama akışlarını etkinleştir
  - **İzin İmzaları** - Gazlı olmayan token işlemleri için çevrimdışı onaylar oluştur
  - **Meta İşlem Desteği** - Relay hizmetleri ve gazlı olmayan transferler için işlem verilerini imzala

  ### AI Rehberli İş Akışları (İpuçları)

  - **İşlem hazırlığı** - Transfer planlama ve yürütme rehberi
  - **Cüzdan analizi** - Cüzdan etkinliğini ve varlıklarını analiz etme araçları
  - **Akıllı sözleşme keşfi** - Etkileşimli ABI getirme ve sözleşme analizi
  - **Sözleşme etkileşimi** - Akıllı sözleşmelerde yazma işlemlerinin güvenli yürütülmesi
  - **Ağ bilgisi** - EVM ağları ve karşılaştırmaları hakkında öğrenme
  - **Onay denetimi** - Token onaylarının incelenmesi ve yönetimi
  - **Hata tanısı** - İşlem başarısızlıklarının giderilmesi

  ## 🌐 Desteklenen Ağlar

  ### Mainnet'ler

  - Ethereum (ETH)
  - Optimism (OP)
  - Arbitrum (ARB)
  - Arbitrum Nova
  - Base
  - Polygon (MATIC)
  - Polygon zkEVM
  - Avalanche (AVAX)
  - Binance Smart Chain (BSC)
  - zkSync Era
  - Linea
  - Celo
  - Gnosis (xDai)
  - Fantom (FTM)
  - Filecoin (FIL)
  - Moonbeam
  - Moonriver
  - Cronos
  - Scroll
  - Mantle
  - Manta
  - Blast
  - Fraxtal
  - Mode
  - Metis
  - Kroma
  - Zora
  - Aurora
  - Canto
  - Flow
  - Lumia

  ### Testnet'ler

  - Sepolia
  - Optimism Sepolia
  - Arbitrum Sepolia
  - Base Sepolia
  - Polygon Amoy
  - Avalanche Fuji
  - BSC Testnet
  - zkSync Sepolia
  - Linea Sepolia
  - Scroll Sepolia
  - Mantle Sepolia
  - Manta Sepolia
  - Blast Sepolia
  - Fraxtal Testnet
  - Mode Testnet
  - Metis Sepolia
  - Kroma Sepolia
  - Zora Sepolia
  - Celo Alfajores
  - Goerli
  - Holesky
  - Flow Testnet
  - Filecoin Calibration
  - Lumia Testnet

  ## 🛠️ Ön Koşullar

  - [Bun](https://bun.sh/) 1.0.0 veya üstü (önerilir)
  - Node.js 20.0.0 veya üstü (Bun kullanmıyorsanız)
  - İsteğe bağlı: ABI getirme için [Etherscan API anahtarı](https://etherscan.io/apis)

  ## 📦 Kurulum

  ```bash
  # Depoyu klonla
  git clone https://github.com/mcpdotdirect/mcp-evm-server.git
  cd mcp-evm-server

  # Bun ile bağımlılıkları yükle
  bun install

  # Veya npm ile
  npm install
  ```

  ## ⚙️ Yapılandırma

  ### Ortam Değişkenleri

  Sunucu aşağıdaki ortam değişkenlerini kullanır. Yazma işlemleri ve ABI getirme için bu değişkenleri yapılandırmalısınız:

  #### Cüzdan Yapılandırması (Yazma İşlemleri İçin)

  Cüzdanınızı **özel bir anahtar** veya **mnemonik ifadesi** kullanarak yapılandırabilirsiniz:

  **Seçenek 1: Özel Anahtar**

  ```bash
  export EVM_PRIVATE_KEY="0x..." # Özel anahtarınız hex formatında (0x ön eki ile veya olmadan)
  ```

  **Seçenek 2: Mnemonik İfadesi (HD Cüzdanlar İçin Önerilir)**

  ```bash
  export EVM_MNEMONIC="word1 word2 word3 ... word12" # 12 veya 24 sözcükten oluşan BIP-39 mnemonik'iniz
  export EVM_ACCOUNT_INDEX="0" # İsteğe bağlı: HD cüzdan türetme için hesap indeksi (varsayılan: 0)
  ```

  Mnemonik seçeneği hiyerarşik belirlenimci (HD) cüzdan türetmeyi destekler:

  - BIP-39 standart mnemonik ifadeleri kullanır (12 veya 24 sözcük)
  - BIP-44 türetme yolunu destekler: `m/44'/60'/0'/0/{accountIndex}`
  - `EVM_ACCOUNT_INDEX` aynı mnemonik'ten farklı hesaplar türetmenizi sağlar
  - Varsayılan hesap indeksi 0 (ilk hesap)

  **Cüzdan kullanılır:**

  - Yerel token'ları transfer etme (`transfer_native` aracı)
  - ERC20 token'larını transfer etme (`transfer_erc20` aracı)
  - Token harcamalarını onaylama (`approve_token_spending` aracı)
  - Akıllı sözleşmelere yazma (`write_contract` aracı)
  - İletileri kimlik doğrulaması için imzalama (`sign_message` aracı)
  - Gazlı olmayan işlemler için yapılandırılmış veri imzalama (`sign_typed_data` aracı)

  ⚠️ **Güvenlik**:

  - Özel anahtarınızı veya mnemonik'inizi asla sürüm kontrolüne kaydetmeyin
  - Ortam değişkenlerini veya güvenli bir anahtar yönetim sistemini kullanın
  - Mnemonik'leri güvenli bir şekilde saklayın - tüm türetilmiş hesaplara erişim sağlarlar
  - Farklı amaçlar için farklı hesap indeksleri kullanmayı düşünün

  #### API Anahtarları (ABI Getirme İçin)

  ```bash
  export ETHERSCAN_API_KEY="your-api-key-here"
  ```

  Bu API anahtarı isteğe bağlıdır ancak aşağıdakiler için gereklidir:

  - Blok araştırıcılardan otomatik ABI getirme (`get_contract_abi` aracı)
  - Sözleşmeleri okurken ABI otomatik getirme (`read_contract` aracı `abiJson` parametresi ile)
  - `fetch_and_analyze_abi` ipucu

  Ücretsiz API anahtarınızı şuradan alın:

  - [Etherscan](https://etherscan.io/apis) - Ethereum ve uyumlu zincirleri için
  - Aynı anahtar Etherscan v2 API aracılığıyla tüm 60+ ağ arasında çalışır

  ### Sunucu Yapılandırması

  Sunucu aşağıdaki varsayılan yapılandırmayı kullanır:

  - **Varsayılan Zincir ID**: 1 (Ethereum Mainnet)
  - **Sunucu Portu**: 3001
  - **Sunucu Ana Bilgisayarı**: 0.0.0.0 (herhangi bir ağ arabiriminden erişilebilir)

  Bu değerler uygulamada sabit kodlanmıştır. Bunları değiştirmeye ihtiyacınız varsa, aşağıdaki dosyaları düzenleyebilirsiniz:

  - Zincir yapılandırması için: `src/core/chains.ts`
  - Sunucu yapılandırması için: `src/server/http-server.ts`

  ## 🚀 Kullanım

  ### npx'i Kullanma (Kurulum Gerekmez)

  Kurulum yapmadan MCP EVM Sunucusunu doğrudan npx'i kullanarak çalıştırabilirsiniz:

  ```bash
  # Sunucuyu stdio modunda çalıştır (CLI araçları için)
  npx @mcpdotdirect/evm-mcp-server

  # Sunucuyu HTTP modunda çalıştır (web uygulamaları için)
  npx @mcpdotdirect/evm-mcp-server --http
  ```

  ### Sunucuyu Yerel Olarak Çalıştırma

  Stdio'yu kullanarak sunucuyu başlat (CLI araçlarına gömme için):

  ```bash
  # Stdio sunucusunu başlat
  bun start

  # Otomatik yeniden yükleme ile geliştirme modu
  bun dev
  ```

  Veya web uygulamaları için SSE'li HTTP sunucusunu başlat:

  ```bash
  # HTTP sunucusunu başlat
  bun start:http

  # Otomatik yeniden yükleme ile geliştirme modu
  bun dev:http
  ```

  ### Sunucuya Bağlanma

  Bu MCP sunucusuna MCP uyumlu herhangi bir istemci kullanarak bağlanın. Test etme ve hata ayıklama için [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanabilirsiniz.

  ### Cursor'dan Bağlanma

  MCP sunucusuna Cursor'dan bağlanmak için:

  1. Cursor'u açın ve Ayarlar'a gidin (sol alt köşedeki dişli simgesi)
  2. Sol kenar çubuğunda "Özellikler"e tıklayın
  3. "MCP Sunucuları" bölümüne kaydırın
  4. "Yeni MCP sunucusu ekle"ye tıklayın
  5. Aşağıdaki detayları girin:

     - Sunucu adı: `evm-mcp-server`
     - Tür: `command`
     - Komut: `npx @mcpdotdirect/evm-mcp-server`

  6. "Kaydet"e tıklayın

  Bağlandığında, MCP sunucusunun yeteneklerini doğrudan Cursor'da kullanabilirsiniz. Sunucu MCP Sunucuları listesinde görünecek ve gerektiğinde etkinleştirilebilir/devre dışı bırakılabilir.

  ### Cursor ile mcp.json Kullanma

  Takımınızla paylaşabileceğiniz veya projeler arasında kullanabileceğiniz daha taşınabilir bir yapılandırma için, projenizin kök dizininde `.cursor/mcp.json` dosyası oluşturabilirsiniz:

  ```json
  {
    "mcpServers": {
      "evm-mcp-server": {
        "command": "npx",
        "args": ["-y", "@mcpdotdirect/evm-mcp-server"]
      },
      "evm-mcp-http": {
        "command": "npx",
        "args": ["-y", "@mcpdotdirect/evm-mcp-server", "--http"]
      }
    }
  }
  ```

  Bu dosyayı projenizin `.cursor` dizininde yerleştirin (mevcut değilse oluşturun) ve Cursor, o projede çalışırken bu MCP sunucu yapılandırmalarını otomatik olarak algılar ve kullanır. Bu yaklaşım aşağıdakileri kolaylaştırır:

  1. MCP yapılandırmalarını takımınızla paylaşma
  2. MCP kurulumunuzu sürüm kontrolü altında tutma
  3. Farklı projeler için farklı sunucu yapılandırmaları kullanma

  ### Örnek: SSE ile HTTP Modu

  Web uygulaması geliştiriyorsanız ve Server-Sent Events (SSE) ile HTTP sunucusuna bağlanmak istiyorsanız, bu yapılandırmayı kullanabilirsiniz:

  ```json
  {
    "mcpServers": {
      "evm-mcp-sse": {
        "url": "http://localhost:3001/sse"
      }
    }
  }
  ```

  Bu, doğrudan HTTP sunucusunun SSE uç noktasına bağlanır, bu da aşağıdakiler için faydalıdır:

  - Tarayıcıdan MCP sunucusuna bağlanması gereken web uygulamaları
  - Yerel komut çalıştırmanın ideal olmadığı ortamlar
  - Birden fazla kullanıcı veya uygulama arasında tek bir MCP sunucu örneğini paylaşma

  Bu yapılandırmayı kullanmak için:

  1. Proje kök dizininizde `.cursor` dizini oluşturun (mevcut değilse)
  2. Yukarıdaki JSON'ı `.cursor` dizininde `mcp.json` olarak kaydedin
  3. Cursor'u yeniden başlatın veya projenizi açın
  4. Cursor yapılandırmayı algılayacak ve sunucu(ları) etkinleştirmeyi teklif edecektir

  ### Örnek: MCP Sunucusunu Cursor'da Kullanma

  `mcp.json` ile MCP sunucusunu yapılandırdıktan sonra, bunu Cursor'da kolayca kullanabilirsiniz. İşte örnek bir iş akışı:

  1. Projenizde yeni bir JavaScript/TypeScript dosyası oluşturun:

  ```javascript
  // blockchain-example.js
  async function main() {
    try {
      // ENS kullanarak bir adres için ETH bakiyesi al
      console.log("vitalik.eth için ETH bakiyesi alınıyor...");

      // Cursor ile kullanırken, Cursor'dan bunu isteyebilirsiniz:
      // "mainnet'te vitalik.eth'in ETH bakiyesini kontrol et"
      // Veya "cüzdanımdan vitalik.eth'e 0.1 ETH transfer et"

      // Cursor, ek kod gerektirmeden bu işlemleri yürütmek için MCP sunucusunu kullanacak

      // Bu, MCP entegrasyonunun gücüdür - AI asistanınız
      // herhangi bir ek kod olmadan doğrudan blockchain verilerine ve işlemlerine erişebilir
    } catch (error) {
      console.error("Hata:", error.message);
    }
  }

  main();
  ```

  2. Dosya Cursor'da açıkken, Cursor'dan aşağıdakileri isteyebilirsiniz:

     - "vitalik.eth'in mevcut ETH bakiyesini kontrol et"
     - "Ethereum'da USDC fiyatını ara"
     - "Optimism'deki en son bloğu göster"
     - "0x1234... adres kontratı mı kontrol et"

  3. Cursor, bu işlemleri yürütmek için MCP sunucusunu kullanacak ve sonuçları doğrudan sohbetinizde döndürecektir.

  MCP sunucusu tüm blockchain iletişimini yönetirken, Cursor'un doğal dil aracılığıyla blockchain ile ilgili görevleri anlamasını ve yürütmesini sağlar.

  ### Claude CLI Kullanarak Bağlanma

  Claude CLI kullanıyorsanız, MCP sunucusuna sadece iki komutla bağlanabilirsiniz:

  ```bash
  # MCP sunucusunu ekle
  claude mcp add evm-mcp-server npx @mcpdotdirect/evm-mcp-server

  # MCP sunucusu etkinleştirilmiş Claude'u başlat
  claude
  ```

  ### Örnek: ENS ile Token Bakiyesi Alma

  ```javascript
  // MCP istemcisini kullanarak ENS ile token bakiyesi kontrol etme örneği
  const mcp = new McpClient("http://localhost:3000");

  const result = await mcp.invokeTool("get-token-balance", {
    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC on Ethereum
    ownerAddress: "vitalik.eth", // Adres yerine ENS adı
    network: "ethereum",
  });

  console.log(result);
  // {
  //   tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  //   owner: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  //   network: "ethereum",
  //   raw: "1000000000",
  //   formatted: "1000",
  //   symbol: "USDC",
  //   decimals: 6
  // }
  ```

  ### Örnek: ENS Adını Çözümleme

  ```javascript
  // MCP istemcisini kullanarak ENS adını adrese çözmek örneği
  const mcp = new McpClient("http://localhost:3000");

  const result = await mcp.invokeTool("resolve-ens", {
    ensName: "vitalik.eth",
    network: "ethereum",
  });

  console.log(result);
  // {
  //   ensName: "vitalik.eth",
  //   normalizedName: "vitalik.eth",
  //   resolvedAddress: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  //   network: "ethereum"
  // }
  ```

  ### Örnek: Multicall ile Çoklu Çağrıları Toplu İşleme

  ```javascript
  // Multicall'ı kullanarak tek bir RPC çağrısında birden fazla sözleşme okumasını toplu işleme örneği
  const mcp = new McpClient("http://localhost:3000");

  const result = await mcp.invokeTool("multicall", {
    network: "ethereum",
    calls: [
      {
        contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
        functionName: "balanceOf",
        args: ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"],
      },
      {
        contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
        functionName: "symbol",
      },
      {
        contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
        functionName: "decimals",
      },
    ],
  });

  console.log(result);
  // {
  //   network: "ethereum",
  //   totalCalls: 3,
  //   successfulCalls: 3,
  //   failedCalls: 0,
  //   results: [
  //     { contractAddress: "0xA0b...", functionName: "balanceOf", result: "1000000000", status: "success" },
  //     { contractAddress: "0xA0b...", functionName: "symbol", result: "USDC", status: "success" },
  //     { contractAddress: "0xA0b...", functionName: "decimals", result: "6", status: "success" }
  //   ]
  // }
  ```

  ## 📚 API Referansı

  ### Araçlar

  Sunucu, ajanlar için 25 odaklanmış MCP aracı sağlar. **Adres parametrelerini kabul eden tüm araçlar hem Ethereum adreslerini hem de ENS adlarını destekler.**

  #### Cüzdan Bilgisi

  | Araç Adı             | Açıklama                                             | Anahtar Parametreler |
  | -------------------- | ---------------------------------------------------- | -------------------- |
  | `get_wallet_address` | Yapılandırılmış cüzdanın adresini al (EVM_PRIVATE_KEY'den) | yok                  |

  #### Ağ Bilgisi

  | Araç Adı                 | Açıklama                      | Anahtar Parametreler |
  | ------------------------ | ----------------------------- | -------------------- |
  | `get_chain_info`         | Ağ bilgisi al                 | `network`            |
  | `get_supported_networks` | Tüm desteklenen EVM ağlarını listele | yok                  |
  | `get_gas_price`          | Bir ağda geçerli gas fiyatlarını al | `network`            |

  #### ENS Hizmetleri

  | Araç Adı             | Açıklama                       | Anahtar Parametreler       |
  | -------------------- | ------------------------------ | -------------------------- |
  | `resolve_ens_name`   | ENS adını adrese çözümle       | `ensName`, `network`       |
  | `lookup_ens_address` | Adrese ters bakış ENS adı     | `address`, `network`       |

  #### Blok ve İşlem Bilgisi

  | Araç Adı                  | Açıklama                       | Anahtar Parametreler                          |
  | ------------------------- | ------------------------------ | --------------------------------------------- |
  | `get_block`               | Blok verisi al                 | `blockNumber` veya `blockHash`, `network`     |
  | `get_latest_block`        | En son blok verisi al          | `network`                                     |
  | `get_transaction`         | İşlem detaylarını al           | `txHash`, `network`                           |
  | `get_transaction_receipt` | Günlüklü işlem makbuzu al      | `txHash`, `network`                           |
  | `wait_for_transaction`    | İşlem onayını bekle            | `txHash`, `confirmations`, `network`          |

  #### Bakiye ve Token Bilgisi

  | Araç Adı            | Açıklama                       | Anahtar Parametreler                                                                                        |
  | ------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------- |
  | `get_balance`       |
---

# EVM MCP Server

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![EVM Networks](https://img.shields.io/badge/Networks-60+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178C6)
![MCP](https://img.shields.io/badge/MCP-1.22.0+-blue)
![Viem](https://img.shields.io/badge/Viem-2.39.3+-green)

A comprehensive Model Context Protocol (MCP) server that provides blockchain services across 60+ EVM-compatible networks. This server enables AI agents to interact with Ethereum, Optimism, Arbitrum, Base, Polygon, and many other EVM chains with a unified interface through 22 tools and 10 AI-guided prompts.

## 📋 Contents

- [Overview](#overview)
- [Features](#features)
- [Supported Networks](#supported-networks)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)
  - [Server Configuration](#server-configuration)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [Tools](#tools)
  - [Prompts](#prompts)
  - [Resources](#resources)
- [Security Considerations](#security-considerations)
- [Project Structure](#project-structure)
- [Development](#development)
- [License](#license)

## 🔭 Overview

The MCP EVM Server leverages the Model Context Protocol to provide blockchain services to AI agents. It supports a wide range of services including:

- Reading blockchain state (balances, transactions, blocks, etc.)
- Interacting with smart contracts with **automatic ABI fetching** from block explorers
- Transferring tokens (native, ERC20, ERC721, ERC1155)
- Querying token metadata and balances
- Chain-specific services across 60+ EVM networks (34 mainnets + 26 testnets)
- **ENS name resolution** for all address parameters (use human-readable names like 'vitalik.eth' instead of addresses)
- **AI-friendly prompts** that guide agents through complex workflows

All services are exposed through a consistent interface of MCP tools, resources, and prompts, making it easy for AI agents to discover and use blockchain functionality. **Every tool that accepts Ethereum addresses also supports ENS names**, automatically resolving them to addresses behind the scenes. The server includes intelligent ABI fetching, eliminating the need to know contract ABIs in advance.

## ✨ Features

### Blockchain Data Access

- **Multi-chain support** for 60+ EVM-compatible networks (34 mainnets + 26 testnets)
- **Chain information** including blockNumber, chainId, and RPCs
- **Block data** access by number, hash, or latest
- **Transaction details** and receipts with decoded logs
- **Address balances** for native tokens and all token standards
- **ENS resolution** for human-readable Ethereum addresses (use 'vitalik.eth' instead of '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045')

### Token services

- **ERC20 Tokens**

  - Get token metadata (name, symbol, decimals, supply)
  - Check token balances
  - Transfer tokens between addresses
  - Approve spending allowances

- **NFTs (ERC721)**

  - Get collection and token metadata
  - Verify token ownership
  - Transfer NFTs between addresses
  - Retrieve token URIs and count holdings

- **Multi-tokens (ERC1155)**
  - Get token balances and metadata
  - Transfer tokens with quantity
  - Access token URIs

### Smart Contract Interactions

- **Read contract state** through view/pure functions
- **Write to contracts** - Execute any state-changing function with automatic ABI fetching
- **Contract verification** to distinguish from EOAs
- **Event logs** retrieval and filtering
- **Automatic ABI fetching** from Etherscan v2 API across all 60+ networks (no need to know ABIs in advance)
- **ABI parsing and validation** with function discovery

### Comprehensive Transaction Support

- **Flexible Wallet Support** - Configure with Private Key or Mnemonic (BIP-39) with HD path support
- **Native token transfers** across all supported networks
- **Gas estimation** for transaction planning
- **Transaction status** and receipt information
- **Error handling** with descriptive messages

### Message Signing Capabilities

- **Personal Message Signing** - Sign arbitrary messages for authentication and verification
- **EIP-712 Typed Data Signing** - Sign structured data for gasless transactions and meta-transactions
- **SIWE Support** - Enable Sign-In With Ethereum authentication flows
- **Permit Signatures** - Create off-chain approvals for gasless token operations
- **Meta-Transaction Support** - Sign transaction data for relay services and gasless transfers

### AI-Guided Workflows (Prompts)

- **Transaction preparation** - Guidance for planning and executing transfers
- **Wallet analysis** - Tools for analyzing wallet activity and holdings
- **Smart contract exploration** - Interactive ABI fetching and contract analysis
- **Contract interaction** - Safe execution of write operations on smart contracts
- **Network information** - Learning about EVM networks and comparisons
- **Approval auditing** - Reviewing and managing token approvals
- **Error diagnosis** - Troubleshooting transaction failures

## 🌐 Supported Networks

### Mainnets

- Ethereum (ETH)
- Optimism (OP)
- Arbitrum (ARB)
- Arbitrum Nova
- Base
- Polygon (MATIC)
- Polygon zkEVM
- Avalanche (AVAX)
- Binance Smart Chain (BSC)
- zkSync Era
- Linea
- Celo
- Gnosis (xDai)
- Fantom (FTM)
- Filecoin (FIL)
- Moonbeam
- Moonriver
- Cronos
- Scroll
- Mantle
- Manta
- Blast
- Fraxtal
- Mode
- Metis
- Kroma
- Zora
- Aurora
- Canto
- Flow
- Lumia

### Testnets

- Sepolia
- Optimism Sepolia
- Arbitrum Sepolia
- Base Sepolia
- Polygon Amoy
- Avalanche Fuji
- BSC Testnet
- zkSync Sepolia
- Linea Sepolia
- Scroll Sepolia
- Mantle Sepolia
- Manta Sepolia
- Blast Sepolia
- Fraxtal Testnet
- Mode Testnet
- Metis Sepolia
- Kroma Sepolia
- Zora Sepolia
- Celo Alfajores
- Goerli
- Holesky
- Flow Testnet
- Filecoin Calibration
- Lumia Testnet

## 🛠️ Prerequisites

- [Bun](https://bun.sh/) 1.0.0 or higher (recommended)
- Node.js 20.0.0 or higher (if not using Bun)
- Optional: [Etherscan API key](https://etherscan.io/apis) for ABI fetching

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/mcpdotdirect/mcp-evm-server.git
cd mcp-evm-server

# Install dependencies with Bun
bun install

# Or with npm
npm install
```

## ⚙️ Configuration

### Environment Variables

The server uses the following environment variables. For write operations and ABI fetching, you must configure these variables:

#### Wallet Configuration (For Write Operations)

You can configure your wallet using **either** a private key or a mnemonic phrase:

**Option 1: Private Key**

```bash
export EVM_PRIVATE_KEY="0x..." # Your private key in hex format (with or without 0x prefix)
```

**Option 2: Mnemonic Phrase (Recommended for HD Wallets)**

```bash
export EVM_MNEMONIC="word1 word2 word3 ... word12" # Your 12 or 24 word BIP-39 mnemonic
export EVM_ACCOUNT_INDEX="0" # Optional: Account index for HD wallet derivation (default: 0)
```

The mnemonic option supports hierarchical deterministic (HD) wallet derivation:

- Uses BIP-39 standard mnemonic phrases (12 or 24 words)
- Supports BIP-44 derivation path: `m/44'/60'/0'/0/{accountIndex}`
- `EVM_ACCOUNT_INDEX` allows you to derive different accounts from the same mnemonic
- Default account index is 0 (first account)

**Wallet is used for:**

- Transferring native tokens (`transfer_native` tool)
- Transferring ERC20 tokens (`transfer_erc20` tool)
- Approving token spending (`approve_token_spending` tool)
- Writing to smart contracts (`write_contract` tool)
- Signing messages for authentication (`sign_message` tool)
- Signing structured data for gasless transactions (`sign_typed_data` tool)

⚠️ **Security**:

- Never commit your private key or mnemonic to version control
- Use environment variables or a secure key management system
- Store mnemonics securely - they provide access to all derived accounts
- Consider using different account indices for different purposes

#### API Keys (For ABI Fetching)

```bash
export ETHERSCAN_API_KEY="your-api-key-here"
```

This API key is optional but required for:

- Automatic ABI fetching from block explorers (`get_contract_abi` tool)
- Auto-fetching ABIs when reading contracts (`read_contract` tool with `abiJson` parameter)
- The `fetch_and_analyze_abi` prompt

Get your free API key from:

- [Etherscan](https://etherscan.io/apis) - For Ethereum and compatible chains
- The same key works across all 60+ EVM networks via the Etherscan v2 API

### Server Configuration

The server uses the following default configuration:

- **Default Chain ID**: 1 (Ethereum Mainnet)
- **Server Port**: 3001
- **Server Host**: 0.0.0.0 (accessible from any network interface)

These values are hardcoded in the application. If you need to modify them, you can edit the following files:

- For chain configuration: `src/core/chains.ts`
- For server configuration: `src/server/http-server.ts`

## 🚀 Usage

### Using npx (No Installation Required)

You can run the MCP EVM Server directly without installation using npx:

```bash
# Run the server in stdio mode (for CLI tools)
npx @mcpdotdirect/evm-mcp-server

# Run the server in HTTP mode (for web applications)
npx @mcpdotdirect/evm-mcp-server --http
```

### Running the Server Locally

Start the server using stdio (for embedding in CLI tools):

```bash
# Start the stdio server
bun start

# Development mode with auto-reload
bun dev
```

Or start the HTTP server with SSE for web applications:

```bash
# Start the HTTP server
bun start:http

# Development mode with auto-reload
bun dev:http
```

### Connecting to the Server

Connect to this MCP server using any MCP-compatible client. For testing and debugging, you can use the [MCP Inspector](https://github.com/modelcontextprotocol/inspector).

### Connecting from Cursor

To connect to the MCP server from Cursor:

1. Open Cursor and go to Settings (gear icon in the bottom left)
2. Click on "Features" in the left sidebar
3. Scroll down to "MCP Servers" section
4. Click "Add new MCP server"
5. Enter the following details:

   - Server name: `evm-mcp-server`
   - Type: `command`
   - Command: `npx @mcpdotdirect/evm-mcp-server`

6. Click "Save"

Once connected, you can use the MCP server's capabilities directly within Cursor. The server will appear in the MCP Servers list and can be enabled/disabled as needed.

### Using mcp.json with Cursor

For a more portable configuration that you can share with your team or use across projects, you can create an `.cursor/mcp.json` file in your project's root directory:

```json
{
  "mcpServers": {
    "evm-mcp-server": {
      "command": "npx",
      "args": ["-y", "@mcpdotdirect/evm-mcp-server"]
    },
    "evm-mcp-http": {
      "command": "npx",
      "args": ["-y", "@mcpdotdirect/evm-mcp-server", "--http"]
    }
  }
}
```

Place this file in your project's `.cursor` directory (create it if it doesn't exist), and Cursor will automatically detect and use these MCP server configurations when working in that project. This approach makes it easy to:

1. Share MCP configurations with your team
2. Version control your MCP setup
3. Use different server configurations for different projects

### Example: HTTP Mode with SSE

If you're developing a web application and want to connect to the HTTP server with Server-Sent Events (SSE), you can use this configuration:

```json
{
  "mcpServers": {
    "evm-mcp-sse": {
      "url": "http://localhost:3001/sse"
    }
  }
}
```

This connects directly to the HTTP server's SSE endpoint, which is useful for:

- Web applications that need to connect to the MCP server from the browser
- Environments where running local commands isn't ideal
- Sharing a single MCP server instance among multiple users or applications

To use this configuration:

1. Create a `.cursor` directory in your project root if it doesn't exist
2. Save the above JSON as `mcp.json` in the `.cursor` directory
3. Restart Cursor or open your project
4. Cursor will detect the configuration and offer to enable the server(s)

### Example: Using the MCP Server in Cursor

After configuring the MCP server with `mcp.json`, you can easily use it in Cursor. Here's an example workflow:

1. Create a new JavaScript/TypeScript file in your project:

```javascript
// blockchain-example.js
async function main() {
  try {
    // Get ETH balance for an address using ENS
    console.log("Getting ETH balance for vitalik.eth...");

    // When using with Cursor, you can simply ask Cursor to:
    // "Check the ETH balance of vitalik.eth on mainnet"
    // Or "Transfer 0.1 ETH from my wallet to vitalik.eth"

    // Cursor will use the MCP server to execute these operations
    // without requiring any additional code from you

    // This is the power of the MCP integration - your AI assistant
    // can directly interact with blockchain data and operations
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
```

2. With the file open in Cursor, you can ask Cursor to:

   - "Check the current ETH balance of vitalik.eth"
   - "Look up the price of USDC on Ethereum"
   - "Show me the latest block on Optimism"
   - "Check if 0x1234... is a contract address"

3. Cursor will use the MCP server to execute these operations and return the results directly in your conversation.

The MCP server handles all the blockchain communication while allowing Cursor to understand and execute blockchain-related tasks through natural language.

### Connecting using Claude CLI

If you're using Claude CLI, you can connect to the MCP server with just two commands:

```bash
# Add the MCP server
claude mcp add evm-mcp-server npx @mcpdotdirect/evm-mcp-server

# Start Claude with the MCP server enabled
claude
```

### Example: Getting a Token Balance with ENS

```javascript
// Example of using the MCP client to check a token balance using ENS
const mcp = new McpClient("http://localhost:3000");

const result = await mcp.invokeTool("get-token-balance", {
  tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC on Ethereum
  ownerAddress: "vitalik.eth", // ENS name instead of address
  network: "ethereum",
});

console.log(result);
// {
//   tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
//   owner: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
//   network: "ethereum",
//   raw: "1000000000",
//   formatted: "1000",
//   symbol: "USDC",
//   decimals: 6
// }
```

### Example: Resolving an ENS Name

```javascript
// Example of using the MCP client to resolve an ENS name to an address
const mcp = new McpClient("http://localhost:3000");

const result = await mcp.invokeTool("resolve-ens", {
  ensName: "vitalik.eth",
  network: "ethereum",
});

console.log(result);
// {
//   ensName: "vitalik.eth",
//   normalizedName: "vitalik.eth",
//   resolvedAddress: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
//   network: "ethereum"
// }
```

### Example: Batch Multiple Calls with Multicall

```javascript
// Example of using multicall to batch multiple contract reads in a single RPC call
const mcp = new McpClient("http://localhost:3000");

const result = await mcp.invokeTool("multicall", {
  network: "ethereum",
  calls: [
    {
      contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
      functionName: "balanceOf",
      args: ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"],
    },
    {
      contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
      functionName: "symbol",
    },
    {
      contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
      functionName: "decimals",
    },
  ],
});

console.log(result);
// {
//   network: "ethereum",
//   totalCalls: 3,
//   successfulCalls: 3,
//   failedCalls: 0,
//   results: [
//     { contractAddress: "0xA0b...", functionName: "balanceOf", result: "1000000000", status: "success" },
//     { contractAddress: "0xA0b...", functionName: "symbol", result: "USDC", status: "success" },
//     { contractAddress: "0xA0b...", functionName: "decimals", result: "6", status: "success" }
//   ]
// }
```

## 📚 API Reference

### Tools

The server provides 25 focused MCP tools for agents. **All tools that accept address parameters support both Ethereum addresses and ENS names.**

#### Wallet Information

| Tool Name            | Description                                                     | Key Parameters |
| -------------------- | --------------------------------------------------------------- | -------------- |
| `get_wallet_address` | Get the address of the configured wallet (from EVM_PRIVATE_KEY) | none           |

#### Network Information

| Tool Name                | Description                         | Key Parameters |
| ------------------------ | ----------------------------------- | -------------- |
| `get_chain_info`         | Get network information             | `network`      |
| `get_supported_networks` | List all supported EVM networks     | none           |
| `get_gas_price`          | Get current gas prices on a network | `network`      |

#### ENS Services

| Tool Name            | Description                        | Key Parameters       |
| -------------------- | ---------------------------------- | -------------------- |
| `resolve_ens_name`   | Resolve ENS name to address        | `ensName`, `network` |
| `lookup_ens_address` | Reverse lookup address to ENS name | `address`, `network` |

#### Block & Transaction Information

| Tool Name                 | Description                       | Key Parameters                          |
| ------------------------- | --------------------------------- | --------------------------------------- |
| `get_block`               | Get block data                    | `blockNumber` or `blockHash`, `network` |
| `get_latest_block`        | Get latest block data             | `network`                               |
| `get_transaction`         | Get transaction details           | `txHash`, `network`                     |
| `get_transaction_receipt` | Get transaction receipt with logs | `txHash`, `network`                     |
| `wait_for_transaction`    | Wait for transaction confirmation | `txHash`, `confirmations`, `network`    |

#### Balance & Token Information

| Tool Name           | Description                    | Key Parameters                                                                                        |
| ------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `get_balance`       | Get native token balance       | `address` (address/ENS), `network`                                                                    |
| `get_token_balance` | Check ERC20 token balance      | `tokenAddress` (address/ENS), `ownerAddress` (address/ENS), `network`                                 |
| `get_allowance`     | Check token spending allowance | `tokenAddress` (address/ENS), `ownerAddress` (address/ENS), `spenderAddress` (address/ENS), `network` |

#### Smart Contract Interactions

| Tool Name          | Description                                                           | Key Parameters                                                                                   |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `get_contract_abi` | Fetch contract ABI from block explorer (60+ networks)                 | `contractAddress` (address/ENS), `network`                                                       |
| `read_contract`    | Read smart contract state (auto-fetches ABI if needed)                | `contractAddress`, `functionName`, `args[]`, `abiJson` (optional), `network`                     |
| `write_contract`   | Execute state-changing functions (auto-fetches ABI if needed)         | `contractAddress`, `functionName`, `args[]`, `value` (optional), `abiJson` (optional), `network` |
| `multicall`        | Batch multiple read calls into a single RPC request (uses Multicall3) | `calls[]` (array of contract calls), `allowFailure` (optional), `network`                        |

#### Token Transfers

| Tool Name                | Description                    | Key Parameters                                                                    |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------------- |
| `transfer_native`        | Send native tokens (ETH, etc.) | `to` (address/ENS), `amount`, `network`                                           |
| `transfer_erc20`         | Transfer ERC20 tokens          | `tokenAddress` (address/ENS), `to` (address/ENS), `amount`, `network`             |
| `approve_token_spending` | Approve token allowances       | `tokenAddress` (address/ENS), `spenderAddress` (address/ENS), `amount`, `network` |

#### NFT Services

| Tool Name             | Description               | Key Parameters                                                                   |
| --------------------- | ------------------------- | -------------------------------------------------------------------------------- |
| `get_nft_info`        | Get NFT (ERC721) metadata | `tokenAddress` (address/ENS), `tokenId`, `network`                               |
| `get_erc1155_balance` | Check ERC1155 balance     | `tokenAddress` (address/ENS), `tokenId`, `ownerAddress` (address/ENS), `network` |

#### Message Signing

| Tool Name         | Description                                                                              | Key Parameters                                          |
| ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `sign_message`    | Sign arbitrary messages for authentication and verification (SIWE, off-chain signatures) | `message`                                               |
| `sign_typed_data` | Sign EIP-712 structured data for gasless transactions, permits, and meta-transactions    | `domainJson`, `typesJson`, `primaryType`, `messageJson` |

### Resources

The server exposes blockchain data through the following MCP resource URIs. All resource URIs that accept addresses also support ENS names, which are automatically resolved to addresses.

#### Blockchain Resources

| Resource URI Pattern                        | Description                              |
| ------------------------------------------- | ---------------------------------------- |
| `evm://{network}/chain`                     | Chain information for a specific network |
| `evm://chain`                               | Ethereum mainnet chain information       |
| `evm://{network}/block/{blockNumber}`       | Block data by number                     |
| `evm://{network}/block/latest`              | Latest block data                        |
| `evm://{network}/address/{address}/balance` | Native token balance                     |
| `evm://{network}/tx/{txHash}`               | Transaction details                      |
| `evm://{network}/tx/{txHash}/receipt`       | Transaction receipt with logs            |

#### Token Resources

| Resource URI Pattern                                                   | Description                    |
| ---------------------------------------------------------------------- | ------------------------------ |
| `evm://{network}/token/{tokenAddress}`                                 | ERC20 token information        |
| `evm://{network}/token/{tokenAddress}/balanceOf/{address}`             | ERC20 token balance            |
| `evm://{network}/nft/{tokenAddress}/{tokenId}`                         | NFT (ERC721) token information |
| `evm://{network}/nft/{tokenAddress}/{tokenId}/isOwnedBy/{address}`     | NFT ownership verification     |
| `evm://{network}/erc1155/{tokenAddress}/{tokenId}/uri`                 | ERC1155 token URI              |
| `evm://{network}/erc1155/{tokenAddress}/{tokenId}/balanceOf/{address}` | ERC1155 token balance          |

## 🔒 Security Considerations

- **Private keys** are used only for transaction signing and are never stored by the server
- Consider implementing additional authentication mechanisms for production use
- Use HTTPS for the HTTP server in production environments
- Implement rate limiting to prevent abuse
- For high-value services, consider adding confirmation steps

## 📁 Project Structure

```
mcp-evm-server/
├── src/
│   ├── index.ts                # Main stdio server entry point
│   ├── server/                 # Server-related files
│   │   ├── http-server.ts      # HTTP server with SSE
│   │   └── server.ts           # General server setup
│   ├── core/
│   │   ├── chains.ts           # Chain definitions and utilities
│   │   ├── resources.ts        # MCP resources implementation
│   │   ├── tools.ts            # MCP tools implementation
│   │   ├── prompts.ts          # MCP prompts implementation
│   │   └── services/           # Core blockchain services
│   │       ├── index.ts        # Operation exports
│   │       ├── balance.ts      # Balance services
│   │       ├── transfer.ts     # Token transfer services
│   │       ├── utils.ts        # Utility functions
│   │       ├── tokens.ts       # Token metadata services
│   │       ├── contracts.ts    # Contract interactions
│   │       ├── transactions.ts # Transaction services
│   │       └── blocks.ts       # Block services
│   │       └── clients.ts      # RPC client utilities
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Development

To modify or extend the server:

1. Add new services in the appropriate file under `src/core/services/`
2. Register new tools in `src/core/tools.ts`
3. Register new resources in `src/core/resources.ts`
4. Add new network support in `src/core/chains.ts`
5. To change server configuration, edit the hardcoded values in `src/server/http-server.ts`

## 📄 License

This project is licensed under the terms of the [MIT License](./LICENSE).
