---
name: "ariadng/metatrader-mcp-server"
description: "Enable AI LLMs to execute trades using MetaTrader 5 platform"
category: "Finance & Fintech"
repo: "ariadng/metatrader-mcp-server"
stars: 297
url: "https://github.com/ariadng/metatrader-mcp-server"
body_length: 22903
license: "MIT"
language: "Python"
body_tr: |-
  <div align="center">
    <h1>MetaTrader MCP Sunucusu</h1>
  </div>

  <br />

  <div align="center">

  [![PyPI version](https://img.shields.io/pypi/v/metatrader-mcp-server.svg?style=flat&color=blue)](https://pypi.org/project/metatrader-mcp-server/)
  [![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  **AI asistanlarının doğal dil kullanarak sizin için ticaret yapmasını sağlayın**

  ![MetaTrader MCP Server](https://raw.githubusercontent.com/ariadng/metatrader-mcp-server/HEAD/docs/media/hero.webp)

  </div>

  <br />

  ---

  ## 📑 İçindekiler

  - [Bu Nedir?](#--bu-nedir)
  - [Özellikler](#-özellikler)
  - [Bu Kim İçin?](#--bu-kim-için)
  - [Önemli Uyarı](#%EF%B8%8F-önemli-uyarı)
  - [Ön Koşullar](#-ön-koşullar)
  - [Hızlı Başlangıç](#-hızlı-başlangıç)
  - [Ticaret Asistanı Becerisi](#-ticaret-asistanı-becerisi-claude-code--claude-desktop)
  - [Kullanım Örnekleri](#-kullanım-örnekleri)
  - [Mevcut İşlemler](#-mevcut-işlemler)
  - [WebSocket Fiyat Sunucusu](#-websocket-fiyat-sunucusu)
  - [Gelişmiş Yapılandırma](#-gelişmiş-yapılandırma)
  - [Yol Haritası](#%EF%B8%8F-yol-haritası)
  - [Geliştirme](#%EF%B8%8F-geliştirme)
  - [Katkıda Bulunma](#-katkıda-bulunma)
  - [Dokumentasyon](#-dokumentasyon)
  - [Yardım Almak](#-yardım-almak)
  - [Lisans](#-lisans)

  ---

  ## 🌟 Bu Nedir?

  **MetaTrader MCP Sunucusu**, AI asistanlarını (Claude, ChatGPT gibi) MetaTrader 5 ticaret platformuna bağlayan bir köprüdür. Düğmeleri tıklamak yerine, AI asistanınıza ne yapması gerektiğini söyleyebilirsiniz:

  > "Hesap bakiyemi göster"
  > "0.01 lot EUR/USD satın al"
  > "Tüm kârlı pozisyonları kapat"

  AI request'inizi anlar ve MetaTrader 5'te otomatik olarak çalıştırır.

  ### Nasıl Çalışır?

  ```
  Siz → AI Asistanı → MCP Sunucusu → MetaTrader 5 → Ticaret İşlemleriniz
  ```

  ## ✨ Özellikler

  - **🗣️ Doğal Dil Ticareti** - Ticaret işlemleri için AI'ye düz İngilizce konuşun
  - **🤖 Multi-AI Desteği** - Claude Desktop, ChatGPT (Open WebUI üzerinden) ve daha fazlası ile çalışır
  - **📊 Tam Pazar Erişimi** - Gerçek zamanlı fiyatlar, tarihsel veriler ve sembol bilgisi alın
  - **💼 Tam Hesap Kontrolü** - Bakiye, öz kaynaklar, marj ve ticaret istatistiklerini kontrol edin
  - **⚡ Emir Yönetimi** - Emirleri yerleştirin, değiştirin ve kapatın
  - **🔒 Güvenli** - Tüm kimlik bilgileri makinenizde kalır
  - **🌐 Esnek Arayüzler** - MCP sunucusu, REST API veya WebSocket akışı olarak kullanın
  - **📖 İyi Belgelenmiş** - Kapsamlı kılavuzlar ve örnekler

  ## 🎯 Bu Kim İçin?

  - **Yatırımcılar** - AI kullanarak ticaretlerini otomatik hale getirmek isteyen
  - **Geliştiriciler** - Ticaret botları veya analiz araçları oluşturayanlar
  - **Analistler** - Pazar verilerine hızlı erişim gerektiren
  - **Herkes** - AI'yı finansal piyasalarla birleştirmekle ilgilenen

  ## ⚠️ Önemli Uyarı

  **Bunu dikkatlice okuyun:**

  Finansal araçlarla ticaret önemli kayıp riski taşır. Bu yazılım olduğu gibi sağlanır ve geliştiriciler bu yazılımın kullanılmasından kaynaklanan herhangi bir ticaret kaybı, kazancı veya sonucu için **sorumluluk kabul etmez**.

  Bu yazılımı kullanarak şunları kabul etmiş olursunuz:
  - Finansal ticaretin risklerini anladığınızı
  - Bu sistem aracılığıyla yürütülen tüm işlemlerden siz sorumlusunuz
  - Geliştiricileri herhangi bir sonuç için sorumlu tutmayacağınızı
  - Bu yazılımı kendi riski altında kullandığınızı

  **Bu finansal tavsiye değildir. Her zaman sorumlu bir şekilde ticaret yapın.**

  ---

  ## 📋 Ön Koşullar

  Başlamadan önce şunlara sahip olduğunuzdan emin olun:

  1. **Python 3.10 veya daha yüksek** - [Buradan indirin](https://www.python.org/downloads/)
  2. **MetaTrader 5 terminali** - [Buradan indirin](https://www.metatrader5.com/en/download)
  3. **MT5 Ticaret Hesabı** - Demo veya gerçek hesap kimlik bilgileri
     - Giriş numarası
     - Şifre
     - Sunucu adı (örneğin, "MetaQuotes-Demo")

  ## 🚀 Hızlı Başlangıç

  ### Adım 1: Paketi Yükleyin

  Terminal veya komut istemi açın ve çalıştırın:

  ```bash
  pip install metatrader-mcp-server
  ```

  ### Adım 2: Algoritmik Ticareti Etkinleştirin

  1. MetaTrader 5'i açın
  2. `Araçlar` → `Seçenekler` adresine gidin
  3. `Expert Advisors` sekmesini tıklayın
  4. `Algoritmic trading' için izin ver` kutusunu işaretleyin
  5. `Tamam` düğmesine tıklayın

  ### Adım 3: Arayüzünüzü Seçin

  Nasıl kullanmak istediğinize bağlı olarak birini seçin:

  #### Seçenek A: Claude Desktop ile Kullanın (Yerel STDIO)

  1. Claude Desktop config dosyasını bulun:
     - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
     - **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`

  2. Dosyayı açın ve bu yapılandırmayı ekleyin:

  ```json
  {
    "mcpServers": {
      "metatrader": {
        "command": "metatrader-mcp-server",
        "args": [
          "--login",     "YOUR_MT5_LOGIN",
          "--password",  "YOUR_MT5_PASSWORD",
          "--server",    "YOUR_MT5_SERVER",
          "--transport", "stdio"
        ]
      }
    }
  }
  ```

  **Seçenek: Özel MT5 Terminal Yolunu Belirtin**

  MT5 terminaliniz standart olmayan bir konuma kuruluysa, `--path` parametresini ekleyin:

  ```json
  {
    "mcpServers": {
      "metatrader": {
        "command": "metatrader-mcp-server",
        "args": [
          "--login",     "YOUR_MT5_LOGIN",
          "--password",  "YOUR_MT5_PASSWORD",
          "--server",    "YOUR_MT5_SERVER",
          "--transport", "stdio",
          "--path",      "C:\\Program Files\\MetaTrader 5\\terminal64.exe"
        ]
      }
    }
  }
  ```

  3. `YOUR_MT5_LOGIN`, `YOUR_MT5_PASSWORD` ve `YOUR_MT5_SERVER` değerlerini gerçek kimlik bilgilerinizle değiştirin

  4. Claude Desktop'ı yeniden başlatın

  5. Sohbete başlayın! Deneyin: *"Hesap bakiyem nedir?"*

  #### Seçenek B: Open WebUI ile Kullanın (ChatGPT ve diğer LLM'ler için)

  1. HTTP sunucusunu başlatın:

  ```bash
  metatrader-http-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER --host 0.0.0.0 --port 8000
  ```

  **Seçenek: Özel MT5 Terminal Yolunu Belirtin**

  MT5 terminaliniz standart olmayan bir konuma kuruluysa, `--path` parametresini ekleyin:

  ```bash
  metatrader-http-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER --path "C:\Program Files\MetaTrader 5\terminal64.exe" --host 0.0.0.0 --port 8000
  ```

  2. Tarayıcınızda `http://localhost:8000/docs` adresine giderek API belgelerine bakın

  3. Open WebUI'da:
     - **Ayarlar** → **Araçlar** adresine gidin
     - **Araç Sunucusu Ekle** öğesine tıklayın
     - `http://localhost:8000` girin
     - Kaydedin

  4. Artık Open WebUI sohbetlerinizde ticaret araçlarını kullanabilirsiniz!

  #### Seçenek C: WebSocket üzerinden Gerçek Zamanlı Fiyatlar

  Canlı tick verilerini (bid, ask, spread, volume) panolar, botlar veya izleme için WebSocket üzerinden aktarın:

  ```bash
  metatrader-quote-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER
  ```

  Herhangi bir WebSocket istemcisi ile bağlantı kurun:

  ```bash
  websocat ws://localhost:8765
  ```

  `connected` mesajı ve ardından sürekli tick güncellemelerini JSON olarak alacaksınız. Tüm ayrıntılar için [WebSocket Fiyat Sunucusu](#-websocket-fiyat-sunucusu) bölümüne bakın.

  #### Seçenek D: Uzak MCP Sunucusu (SSE)

  MCP sunucusunu Windows VPS'sinde (MT5'in kurulu olduğu) çalıştırın ve Claude Desktop veya Claude Code'dan uzaktan bağlanın.

  **Sunucu tarafı** (Windows VPS üzerinde):

  ```bash
  metatrader-mcp-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER
  ```

  Bu, varsayılan olarak SSE sunucusunu `0.0.0.0:8080` adresinde başlatır. `--host` ve `--port` ile özelleştirin:

  ```bash
  metatrader-mcp-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER --host 127.0.0.1 --port 9000
  ```

  **İstemci tarafı** (yerel makinenizde Claude Desktop config):

  ```json
  {
    "mcpServers": {
      "metatrader": {
        "url": "http://VPS_IP:8080/sse"
      }
    }
  }
  ```

  `VPS_IP` kısmını sunucunuzun IP adresi ile değiştirin.

  > **Güvenlik Uyarısı**: MCP protokolü kimlik doğrulama içermez. SSE sunucusunu ağ üzerinden açığa çıkarırken, erişimi IP ile sınırlamak için bir firewall kullanın veya kimlik doğrulama olan ters proxy'nin arkasına yerleştirin ya da SSH tüneli kullanın.

  ---

  ## 🤖 Ticaret Asistanı Becerisi (Claude Code / Claude Desktop)

  `claude-skill/` dizininde önceden oluşturulmuş bir **Ticaret Terminali Asistanı** becerisi bulunur. Claudeye tüm 32 ticaret aracı, çıktı biçimlendirmesi ve MetaTrader 5 domain uzmanlığı hakkında yapılandırılmış bilgi sağlar.

  ### Claude Code için Kurulum

  **Seçenek 1: Symlink (önerilir)**

  Standart Claude Code beceri dizininden `claude-skill/` dizinine symlink oluşturun:

  ```bash
  cd metatrader-mcp-server
  mkdir -p .claude
  ln -s ../claude-skill .claude/skills
  ```

  Beceri otomatik olarak keşfedilecek ve `/trading` olarak kullanılabilir olacaktır.

  **Seçenek 2: Kopyala**

  Beceri dosyalarını Claude Code beceri dizinine kopyalayın:

  ```bash
  cd metatrader-mcp-server
  mkdir -p .claude/skills
  cp -r claude-skill/trading .claude/skills/trading
  ```

  ### Claude Desktop için Kurulum

  Claude Desktop için, beceriyi global Claude beceri dizinine kopyalayın:

  ```bash
  # macOS
  mkdir -p ~/Library/Application\ Support/Claude/skills
  cp -r claude-skill/trading ~/Library/Application\ Support/Claude/skills/trading

  # Windows
  mkdir "%APPDATA%\Claude\skills"
  xcopy /E claude-skill\trading "%APPDATA%\Claude\skills\trading\"
  ```

  ### Beceri Neler Yapar?

  - **Doğrudan Yürütme**: İstenenler doğrultusunda ticaret işlemlerini hemen yürütür, ekstra onay gerekmez
  - **İşlemler**: Karmaşık işlemler için araçları zincirlemeyi bilir (örneğin, pazar emri yerleştir sonra SL/TP ayarla)
  - **Biçimlendirme**: Hesap verilerini, pozisyonları, emirleri ve fiyatları temiz terminal tarzı tablolarda sunar
  - **Domain Bilgisi**: MT5 emir türlerini, zaman dilimlerini, sembol biçimlerini ve doldurma modlarını anlar

  ### Kullanım

  Bir kez kurulduktan sonra `/trading` ile çağırın veya doğrudan ticaret ile ilgili soruları sorun:

  ```
  /trading
  > Hesap panom göster
  > 1.0800'de SL ile 0.1 lot EURUSD satın al
  > Tüm kârlı pozisyonları kapat
  > GBPUSD H4 mumlarını göster
  ```

  ---

  ## 📡 WebSocket Fiyat Sunucusu

  WebSocket Fiyat Sunucusu, MetaTrader 5'ten gerçek zamanlı tick verilerini herhangi bir WebSocket istemcisine akıtır. Canlı panolar, algoritmik ticaret frontendleri ve gerçek zamanlı izleme için idealdir.

  ### Sunucuyu Başlatma

  ```bash
  metatrader-quote-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER
  ```

  Sunucu varsayılan olarak `ws://0.0.0.0:8765` adresinde başlar.

  ### Özelleştirme

  ```bash
  metatrader-quote-server \
    --login YOUR_LOGIN \
    --password YOUR_PASSWORD \
    --server YOUR_SERVER \
    --host 127.0.0.1 \
    --port 9000 \
    --symbols "EURUSD,GBPUSD,XAUUSD" \
    --poll-interval 200
  ```

  ### Yapılandırma

  | Bayrak | Çevre Değişkeni | Varsayılan | Açıklama |
  |--------|------------------|-----------|----------|
  | `--host` | `QUOTE_HOST` | `0.0.0.0` | Bağlanacak host |
  | `--port` | `QUOTE_PORT` | `8765` | Bağlanacak port |
  | `--symbols` | `QUOTE_SYMBOLS` | `XAUUSD,USOIL,GBPUSD,USDJPY,EURUSD,BTCUSD` | Akış yapılacak semboller (virgülle ayrılmış) |
  | `--poll-interval` | `QUOTE_POLL_INTERVAL_MS` | `100` | Tick yoklama aralığı (milisaniye) |

  CLI bayrakları çevre değişkenlerinden öncelikli olup, çevre değişkenleri varsayılan değerlerden önceliklidir.

  ### İleti Biçimi

  **Bağlantıda** — sunucu, sembol listesi ile `connected` mesajı gönderir ve ardından önbelleğe alınmış tikleri gönderir:
  ```json
  {"type": "connected", "symbols": ["XAUUSD", "EURUSD", "GBPUSD"], "poll_interval_ms": 100}
  ```

  **Tick güncellemeleri** — bid, ask veya volume değiştiğinde gönderilir:
  ```json
  {"type": "tick", "symbol": "XAUUSD", "bid": 2345.67, "ask": 2345.89, "spread": 0.22, "volume": 1234, "time": "2026-03-14T10:30:45+00:00"}
  ```

  **Hatalar** — bir sembol alınamazsa gönderilir:
  ```json
  {"type": "error", "symbol": "INVALID", "message": "Symbol not found or data unavailable"}
  ```

  ### Örnek: Python ile Bağlanma

  ```python
  import asyncio
  import json
  from websockets.asyncio.client import connect

  async def main():
      async with connect("ws://localhost:8765") as ws:
          async for message in ws:
              tick = json.loads(message)
              if tick["type"] == "tick":
                  print(f"{tick['symbol']}: {tick['bid']}/{tick['ask']} (spread: {tick['spread']})")

  asyncio.run(main())
  ```

  ### Tasarım Notları

  - **Değişim algılaması**: Bid, ask veya volume gerçekten değiştiğinde yalnızca yayın yapar ve gereksiz trafiği azaltır.
  - **Geç katılanlar**: Yeni istemciler bağlanır bağlanmaz önbelleğe alınmış tikleri alırlar, bu nedenle sonraki değişimi beklemelerine gerek kalmaz.
  - **MT5 thread güvenliği**: Tüm MT5 SDK çağrıları eşzamanlı erişim sorunlarını önlemek için tek iş parçacığı yürütücüsü aracılığıyla serileştirilir.
  - **Birden çok istemci**: Herhangi bir sayıda WebSocket istemcisi aynı anda bağlanabilir.

  ---

  ## 💡 Kullanım Örnekleri

  ### Claude Desktop ile

  Yapılandırıldıktan sonra doğal olarak sohbet edebilirsiniz:

  **Hesap Bilgisini Kontrol Edin:**
  > Siz: "Hesap bilgilerimi göster"
  >
  > Claude: *Bakiye, öz kaynaklar, marj, kaldıraç vb. döndürür*

  **Pazar Verilerini Alın:**
  > Siz: "EUR/USD'nin güncel fiyatı nedir?"
  >
  > Claude: *Bid, ask ve spreadi gösterir*

  **Ticaret Yapın:**
  > Siz: "GBP/USD'nin 0.01 lotunu 1.2500 stop loss ve 1.2700 take profit ile satın al"
  >
  > Claude: *Ticaret işlemini yürütür ve onaylar*

  **Pozisyonları Yönetin:**
  > Siz: "Kayıplı tüm pozisyonlarımı kapat"
  >
  > Claude: *Pozisyonları kapatır ve sonuçları raporlar*

  **Geçmişi Analiz Edin:**
  > Siz: "Geçen haftamın EUR/USD için tüm ticaretlerini göster"
  >
  > Claude: *Ticaret geçmişini tablo olarak döndürür*

  ### HTTP API ile

  ```bash
  # Hesap bilgisini al
  curl http://localhost:8000/api/v1/account/info

  # Güncel fiyat al
  curl "http://localhost:8000/api/v1/market/price?symbol_name=EURUSD"

  # Pazar emri yerleştir
  curl -X POST http://localhost:8000/api/v1/order/market \
    -H "Content-Type: application/json" \
    -d '{
      "symbol": "EURUSD",
      "volume": 0.01,
      "type": "BUY",
      "stop_loss": 1.0990,
      "take_profit": 1.1010
    }'

  # Tüm açık pozisyonları al
  curl http://localhost:8000/api/v1/positions

  # Spesifik bir pozisyonu kapat
  curl -X DELETE http://localhost:8000/api/v1/positions/12345
  ```

  ### Python Kütüphanesi Olarak

  ```python
  from metatrader_client import MT5Client

  # MT5'e bağlan
  config = {
      "login": 12345678,
      "password": "your_password",
      "server": "MetaQuotes-Demo"
  }
  client = MT5Client(config)
  client.connect()

  # Hesap istatistiklerini al
  stats = client.account.get_trade_statistics()
  print(f"Bakiye: ${stats['balance']}")
  print(f"Öz Kaynaklar: ${stats['equity']}")

  # Güncel fiyat al
  price = client.market.get_symbol_price("EURUSD")
  print(f"EUR/USD Bid: {price['bid']}, Ask: {price['ask']}")

  # Pazar emri yerleştir
  result = client.order.place_market_order(
      type="BUY",
      symbol="EURUSD",
      volume=0.01,
      stop_loss=1.0990,
      take_profit=1.1010
  )
  print(result['message'])

  # Tüm pozisyonları kapat
  client.order.close_all_positions()

  # Bağlantıyı kes
  client.disconnect()
  ```

  ---

  ## 📚 Mevcut İşlemler

  ### Hesap Yönetimi
  - `get_account_info` - Bakiye, öz kaynaklar, kâr, marj seviyesi, kaldıraç, para birimi alın

  ### Pazar Verisi
  - `get_symbols` - Mevcut tüm ticaret sembollerini listele
  - `get_symbol_price` - Bir sembol için güncel bid/ask fiyatını al
  - `get_candles_latest` - Son fiyat mumlarını al (OHLCV verisi)
  - `get_candles_by_date` - Tarih aralığı için tarihsel mumları al
  - `get_symbol_info` - Sembol hakkında detaylı bilgi al

  ### Emir Yürütme
  - `place_market_order` - Anında BUY/SELL emirleri yürüt
  - `place_pending_order` - Gelecekteki yürütme için limit/stop emirleri yerleştir
  - `modify_position` - Stop loss veya take profit'i güncelle
  - `modify_pending_order` - Beklemede olan emir parametrelerini değiştir

  ### Pozisyon Yönetimi
  - `get_all_positions` - Tüm açık pozisyonları görüntüle
  - `get_positions_by_symbol` - Pozisyonları ticaret çiftine göre filtrele
  - `get_positions_by_id` - Spesifik pozisyon detaylarını al
  - `close_position` - Spesifik bir pozisyonu kapat
  - `close_all_positions` - Tüm açık pozisyonları kapat
  - `close_all_positions_by_symbol` - Bir sembol için tüm pozisyonları kapat
  - `close_all_profitable_positions` - Yalnızca kazançlı işlemleri kapat
  - `close_all_losing_positions` - Yalnızca kayıplı işlemleri kapat

  ### Beklemede Olan Emirler
  - `get_all_pending_orders` - Tüm beklemede olan emirleri listele
  - `get_pending_orders_by_symbol` - Beklemede olan emirleri sembol'e göre filtrele
  - `cancel_pending_order` - Spesifik bir beklemede olan emri iptal et
  - `cancel_all_pending_orders` - Tüm beklemede olan emirleri iptal et
  - `cancel_pending_orders_by_symbol` - Bir sembol için beklemede olan emirleri iptal et

  ### Ticaret Geçmişi
  - `get_deals` - Geçmiş tamamlanmış işlemleri al
  - `get_orders` - Geçmiş emir kayıtlarını al

  ---

  ## 🔧 Gelişmiş Yapılandırma

  ### Çevre Değişkenleri Kullanma

  Kimlik bilgilerini komut satırına koymak yerine, bir `.env` dosyası oluşturun:

  ```env
  LOGIN=12345678
  PASSWORD=your_password
  SERVER=MetaQuotes-Demo

  # Seçenel: Özel MT5 terminal yolunu belirt (sağlanmazsa otomatik algılanır)
  # MT5_PATH=C:\Program Files\MetaTrader 5\terminal64.exe
  ```

  Ardından sunucuyu argüman olmadan başlatın:

  ```bash
  metatrader-http-server
  ```

  Sunucu otomatik olarak `.env` dosyasından kimlik bilgilerini yükleyecektir.

  ### MCP Taşıma Yapılandırması

  MCP sunucusu çoklu taşıma modlarını destekler:

  | Bayrak | Çevre Değişkeni | Varsayılan | Açıklama |
  |--------|------------------|-----------|----------|
  | `--transport` | `MCP_TRANSPORT` | `sse` | Taşıma türü: `sse`, `stdio`, `streamable-http` |
  | `--host` | `MCP_HOST` | `0.0.0.0` | Bağlanacak host (SSE/HTTP sadece) |
  | `--port` | `MCP_PORT` | `8080` | Bağlanacak port (SSE/HTTP sadece) |

  CLI bayrakları çevre değişkenlerinden öncelikli olup, çevre değişkenleri varsayılan değerlerden önceliklidir.

  ### Özel Port ve Host (HTTP API)

  ```bash
  metatrader-http-server --host 127.0.0.1 --port 9000
  ```

  ### Bağlantı Parametreleri

  MT5 istemcisi ek yapılandırmayı destekler:

  ```python
  config = {
      "login": 12345678,
      "password": "your_password",
      "server": "MetaQuotes-Demo",
      "path": None,               # MT5 terminal yürütülebilir yolu (varsayılan: otomatik algıla)
      "timeout": 60000,           # Bağlantı zaman aşımı (milisaniye) (varsayılan: 60000)
      "portable": False,          # Taşınabilir modu kullan (varsayılan: False)
      "max_retries": 3,           # Maksimum bağlantı yeniden deneme sayısı (varsayılan: 3)
      "backoff_factor": 1.5,      # Yeniden deneme arasındaki gecikme çarpanı (varsayılan: 1.5)
      "cooldown_time": 2.0,       # Bağlantılar arasında beklenecek saniye (varsayılan: 2.0)
      "debug": True               # Debug günlüğünü etkinleştir (varsayılan: False)
  }
  ```

  **Yapılandırma Seçenekleri:**

  - **login** (int, gerekli): MT5 hesap giriş numaranız
  - **password** (str, gerekli): MT5 hesap şifreniz
  - **server** (str, gerekli): MT5 sunucu adı (örneğin, "MetaQuotes-Demo")
  - **path** (str, seçienel): MT5 terminal yürütülebilir dosyasının tam yolu. Belirtilmezse, istemci standart kur
---

<div align="center">
  <h1>MetaTrader MCP Server</h1>
</div>

<br />

<div align="center">

[![PyPI version](https://img.shields.io/pypi/v/metatrader-mcp-server.svg?style=flat&color=blue)](https://pypi.org/project/metatrader-mcp-server/)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Let AI assistants trade for you using natural language**

![MetaTrader MCP Server](https://raw.githubusercontent.com/ariadng/metatrader-mcp-server/HEAD/docs/media/hero.webp)

</div>

<br />

---

## 📑 Table of Contents

- [What is This?](#-what-is-this)
- [Features](#-features)
- [Who Is This For?](#-who-is-this-for)
- [Important Disclaimer](#%EF%B8%8F-important-disclaimer)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Trading Assistant Skill](#-trading-assistant-skill-claude-code--claude-desktop)
- [Usage Examples](#-usage-examples)
- [Available Operations](#-available-operations)
- [WebSocket Quote Server](#-websocket-quote-server)
- [Advanced Configuration](#-advanced-configuration)
- [Roadmap](#%EF%B8%8F-roadmap)
- [Development](#%EF%B8%8F-development)
- [Contributing](#-contributing)
- [Documentation](#-documentation)
- [Getting Help](#-getting-help)
- [License](#-license)

---

## 🌟 What is This?

**MetaTrader MCP Server** is a bridge that connects AI assistants (like Claude, ChatGPT) to the MetaTrader 5 trading platform. Instead of clicking buttons, you can simply tell your AI assistant what to do:

> "Show me my account balance"
> "Buy 0.01 lots of EUR/USD"
> "Close all profitable positions"

The AI understands your request and executes it on MetaTrader 5 automatically.

### How It Works

```
You → AI Assistant → MCP Server → MetaTrader 5 → Your Trades
```

## ✨ Features

- **🗣️ Natural Language Trading** - Talk to AI in plain English to execute trades
- **🤖 Multi-AI Support** - Works with Claude Desktop, ChatGPT (via Open WebUI), and more
- **📊 Full Market Access** - Get real-time prices, historical data, and symbol information
- **💼 Complete Account Control** - Check balance, equity, margin, and trading statistics
- **⚡ Order Management** - Place, modify, and close orders with simple commands
- **🔒 Secure** - All credentials stay on your machine
- **🌐 Flexible Interfaces** - Use as MCP server, REST API, or WebSocket stream
- **📖 Well Documented** - Comprehensive guides and examples

## 🎯 Who Is This For?

- **Traders** who want to automate their trading using AI
- **Developers** building trading bots or analysis tools
- **Analysts** who need quick access to market data
- **Anyone** interested in combining AI with financial markets

## ⚠️ Important Disclaimer

**Please read this carefully:**

Trading financial instruments involves significant risk of loss. This software is provided as-is, and the developers accept **no liability** for any trading losses, gains, or consequences of using this software.

By using this software, you acknowledge that:
- You understand the risks of financial trading
- You are responsible for all trades executed through this system
- You will not hold the developers liable for any outcomes
- You are using this software at your own risk

**This is not financial advice. Always trade responsibly.**

---

## 📋 Prerequisites

Before you begin, make sure you have:

1. **Python 3.10 or higher** - [Download here](https://www.python.org/downloads/)
2. **MetaTrader 5 terminal** - [Download here](https://www.metatrader5.com/en/download)
3. **MT5 Trading Account** - Demo or live account credentials
   - Login number
   - Password
   - Server name (e.g., "MetaQuotes-Demo")

## 🚀 Quick Start

### Step 1: Install the Package

Open your terminal or command prompt and run:

```bash
pip install metatrader-mcp-server
```

### Step 2: Enable Algorithmic Trading

1. Open MetaTrader 5
2. Go to `Tools` → `Options`
3. Click the `Expert Advisors` tab
4. Check the box for `Allow algorithmic trading`
5. Click `OK`

### Step 3: Choose Your Interface

Pick one based on how you want to use it:

#### Option A: Use with Claude Desktop (Local STDIO)

1. Find your Claude Desktop config file:
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
   - **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`

2. Open the file and add this configuration:

```json
{
  "mcpServers": {
    "metatrader": {
      "command": "metatrader-mcp-server",
      "args": [
        "--login",     "YOUR_MT5_LOGIN",
        "--password",  "YOUR_MT5_PASSWORD",
        "--server",    "YOUR_MT5_SERVER",
        "--transport", "stdio"
      ]
    }
  }
}
```

**Optional: Specify Custom MT5 Terminal Path**

If your MT5 terminal is installed in a non-standard location, add the `--path` argument:

```json
{
  "mcpServers": {
    "metatrader": {
      "command": "metatrader-mcp-server",
      "args": [
        "--login",     "YOUR_MT5_LOGIN",
        "--password",  "YOUR_MT5_PASSWORD",
        "--server",    "YOUR_MT5_SERVER",
        "--transport", "stdio",
        "--path",      "C:\\Program Files\\MetaTrader 5\\terminal64.exe"
      ]
    }
  }
}
```

3. Replace `YOUR_MT5_LOGIN`, `YOUR_MT5_PASSWORD`, and `YOUR_MT5_SERVER` with your actual credentials

4. Restart Claude Desktop

5. Start chatting! Try: *"What's my account balance?"*

#### Option B: Use with Open WebUI (For ChatGPT and other LLMs)

1. Start the HTTP server:

```bash
metatrader-http-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER --host 0.0.0.0 --port 8000
```

**Optional: Specify Custom MT5 Terminal Path**

If your MT5 terminal is installed in a non-standard location, add the `--path` argument:

```bash
metatrader-http-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER --path "C:\Program Files\MetaTrader 5\terminal64.exe" --host 0.0.0.0 --port 8000
```

2. Open your browser to `http://localhost:8000/docs` to see the API documentation

3. In Open WebUI:
   - Go to **Settings** → **Tools**
   - Click **Add Tool Server**
   - Enter `http://localhost:8000`
   - Save

4. Now you can use trading tools in your Open WebUI chats!

#### Option C: Real-Time Quotes via WebSocket

Stream live tick data (bid, ask, spread, volume) over WebSocket for dashboards, bots, or monitoring:

```bash
metatrader-quote-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER
```

Connect with any WebSocket client:

```bash
websocat ws://localhost:8765
```

You'll receive a `connected` message followed by continuous tick updates as JSON. See [WebSocket Quote Server](#-websocket-quote-server) for full details.

#### Option D: Remote MCP Server (SSE)

Run the MCP server on a Windows VPS (where MT5 is installed) and connect to it remotely from Claude Desktop or Claude Code.

**Server-side** (on the Windows VPS):

```bash
metatrader-mcp-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER
```

This starts the SSE server on `0.0.0.0:8080` by default. Customize with `--host` and `--port`:

```bash
metatrader-mcp-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER --host 127.0.0.1 --port 9000
```

**Client-side** (Claude Desktop config on your local machine):

```json
{
  "mcpServers": {
    "metatrader": {
      "url": "http://VPS_IP:8080/sse"
    }
  }
}
```

Replace `VPS_IP` with your server's IP address.

> **Security Warning**: The MCP protocol does not include authentication. When exposing the SSE server over a network, use a firewall to restrict access by IP, or place it behind a reverse proxy with authentication, or use an SSH tunnel.

---

## 🤖 Trading Assistant Skill (Claude Code / Claude Desktop)

A pre-built **Trading Terminal Assistant** skill is included in the `claude-skill/` directory. It provides Claude with structured knowledge about all 32 trading tools, output formatting, and MetaTrader 5 domain expertise.

### Installing for Claude Code

**Option 1: Symlink (recommended)**

Create a symlink from the standard Claude Code skills directory to `claude-skill/`:

```bash
cd metatrader-mcp-server
mkdir -p .claude
ln -s ../claude-skill .claude/skills
```

The skill will be auto-discovered and available as `/trading`.

**Option 2: Copy**

Copy the skill files into the Claude Code skills directory:

```bash
cd metatrader-mcp-server
mkdir -p .claude/skills
cp -r claude-skill/trading .claude/skills/trading
```

### Installing for Claude Desktop

For Claude Desktop, copy the skill to the global Claude skills directory:

```bash
# macOS
mkdir -p ~/Library/Application\ Support/Claude/skills
cp -r claude-skill/trading ~/Library/Application\ Support/Claude/skills/trading

# Windows
mkdir "%APPDATA%\Claude\skills"
xcopy /E claude-skill\trading "%APPDATA%\Claude\skills\trading\"
```

### What the Skill Does

- **Direct Execution**: Executes trades immediately when requested, no extra confirmation needed
- **Workflows**: Knows how to chain tools for complex operations (e.g., place market order then set SL/TP)
- **Formatting**: Presents account data, positions, orders, and prices in clean terminal-style tables
- **Domain Knowledge**: Understands MT5 order types, timeframes, symbol formats, and filling modes

### Usage

Once installed, invoke with `/trading` or just ask trading-related questions naturally:

```
/trading
> Show me my account dashboard
> Buy 0.1 lots of EURUSD with SL at 1.0800
> Close all profitable positions
> Show me GBPUSD H4 candles
```

---

## 📡 WebSocket Quote Server

The WebSocket Quote Server streams real-time tick data from MetaTrader 5 to any WebSocket client. It's ideal for live dashboards, algorithmic trading frontends, and real-time monitoring.

### Starting the Server

```bash
metatrader-quote-server --login YOUR_LOGIN --password YOUR_PASSWORD --server YOUR_SERVER
```

The server starts on `ws://0.0.0.0:8765` by default.

### Customization

```bash
metatrader-quote-server \
  --login YOUR_LOGIN \
  --password YOUR_PASSWORD \
  --server YOUR_SERVER \
  --host 127.0.0.1 \
  --port 9000 \
  --symbols "EURUSD,GBPUSD,XAUUSD" \
  --poll-interval 200
```

### Configuration

| Flag | Env Var | Default | Description |
|------|---------|---------|-------------|
| `--host` | `QUOTE_HOST` | `0.0.0.0` | Host to bind |
| `--port` | `QUOTE_PORT` | `8765` | Port to bind |
| `--symbols` | `QUOTE_SYMBOLS` | `XAUUSD,USOIL,GBPUSD,USDJPY,EURUSD,BTCUSD` | Comma-separated symbols to stream |
| `--poll-interval` | `QUOTE_POLL_INTERVAL_MS` | `100` | Tick polling interval in milliseconds |

CLI flags take precedence over environment variables, which take precedence over defaults.

### Message Format

**On connect** — server sends a `connected` message with the symbol list, followed by any cached ticks:
```json
{"type": "connected", "symbols": ["XAUUSD", "EURUSD", "GBPUSD"], "poll_interval_ms": 100}
```

**Tick updates** — sent whenever bid, ask, or volume changes:
```json
{"type": "tick", "symbol": "XAUUSD", "bid": 2345.67, "ask": 2345.89, "spread": 0.22, "volume": 1234, "time": "2026-03-14T10:30:45+00:00"}
```

**Errors** — sent if a symbol cannot be fetched:
```json
{"type": "error", "symbol": "INVALID", "message": "Symbol not found or data unavailable"}
```

### Example: Connecting with Python

```python
import asyncio
import json
from websockets.asyncio.client import connect

async def main():
    async with connect("ws://localhost:8765") as ws:
        async for message in ws:
            tick = json.loads(message)
            if tick["type"] == "tick":
                print(f"{tick['symbol']}: {tick['bid']}/{tick['ask']} (spread: {tick['spread']})")

asyncio.run(main())
```

### Design Notes

- **Change detection**: Only broadcasts when bid, ask, or volume actually changes, reducing unnecessary traffic.
- **Late joiners**: New clients receive cached ticks immediately on connect, so they don't have to wait for the next change.
- **MT5 thread safety**: All MT5 SDK calls are serialized through a single-thread executor to prevent concurrent access issues.
- **Multiple clients**: Any number of WebSocket clients can connect simultaneously.

---

## 💡 Usage Examples

### With Claude Desktop

Once configured, you can chat naturally:

**Check Your Account:**
> You: "Show me my account information"
>
> Claude: *Returns balance, equity, margin, leverage, etc.*

**Get Market Data:**
> You: "What's the current price of EUR/USD?"
>
> Claude: *Shows bid, ask, and spread*

**Place a Trade:**
> You: "Buy 0.01 lots of GBP/USD with stop loss at 1.2500 and take profit at 1.2700"
>
> Claude: *Executes the trade and confirms*

**Manage Positions:**
> You: "Close all my losing positions"
>
> Claude: *Closes positions and reports results*

**Analyze History:**
> You: "Show me all my trades from last week for EUR/USD"
>
> Claude: *Returns trade history as a table*

### With HTTP API

```bash
# Get account info
curl http://localhost:8000/api/v1/account/info

# Get current price
curl "http://localhost:8000/api/v1/market/price?symbol_name=EURUSD"

# Place a market order
curl -X POST http://localhost:8000/api/v1/order/market \
  -H "Content-Type: application/json" \
  -d '{
    "symbol": "EURUSD",
    "volume": 0.01,
    "type": "BUY",
    "stop_loss": 1.0990,
    "take_profit": 1.1010
  }'

# Get all open positions
curl http://localhost:8000/api/v1/positions

# Close a specific position
curl -X DELETE http://localhost:8000/api/v1/positions/12345
```

### As a Python Library

```python
from metatrader_client import MT5Client

# Connect to MT5
config = {
    "login": 12345678,
    "password": "your_password",
    "server": "MetaQuotes-Demo"
}
client = MT5Client(config)
client.connect()

# Get account statistics
stats = client.account.get_trade_statistics()
print(f"Balance: ${stats['balance']}")
print(f"Equity: ${stats['equity']}")

# Get current price
price = client.market.get_symbol_price("EURUSD")
print(f"EUR/USD Bid: {price['bid']}, Ask: {price['ask']}")

# Place a market order
result = client.order.place_market_order(
    type="BUY",
    symbol="EURUSD",
    volume=0.01,
    stop_loss=1.0990,
    take_profit=1.1010
)
print(result['message'])

# Close all positions
client.order.close_all_positions()

# Disconnect
client.disconnect()
```

---

## 📚 Available Operations

### Account Management
- `get_account_info` - Get balance, equity, profit, margin level, leverage, currency

### Market Data
- `get_symbols` - List all available trading symbols
- `get_symbol_price` - Get current bid/ask price for a symbol
- `get_candles_latest` - Get recent price candles (OHLCV data)
- `get_candles_by_date` - Get historical candles for a date range
- `get_symbol_info` - Get detailed symbol information

### Order Execution
- `place_market_order` - Execute instant BUY/SELL orders
- `place_pending_order` - Place limit/stop orders for future execution
- `modify_position` - Update stop loss or take profit
- `modify_pending_order` - Modify pending order parameters

### Position Management
- `get_all_positions` - View all open positions
- `get_positions_by_symbol` - Filter positions by trading pair
- `get_positions_by_id` - Get specific position details
- `close_position` - Close a specific position
- `close_all_positions` - Close all open positions
- `close_all_positions_by_symbol` - Close all positions for a symbol
- `close_all_profitable_positions` - Close only winning trades
- `close_all_losing_positions` - Close only losing trades

### Pending Orders
- `get_all_pending_orders` - List all pending orders
- `get_pending_orders_by_symbol` - Filter pending orders by symbol
- `cancel_pending_order` - Cancel a specific pending order
- `cancel_all_pending_orders` - Cancel all pending orders
- `cancel_pending_orders_by_symbol` - Cancel pending orders for a symbol

### Trading History
- `get_deals` - Get historical completed trades
- `get_orders` - Get historical order records

---

## 🔧 Advanced Configuration

### Using Environment Variables

Instead of putting credentials in the command line, create a `.env` file:

```env
LOGIN=12345678
PASSWORD=your_password
SERVER=MetaQuotes-Demo

# Optional: Specify custom MT5 terminal path (auto-detected if not provided)
# MT5_PATH=C:\Program Files\MetaTrader 5\terminal64.exe
```

Then start the server without arguments:

```bash
metatrader-http-server
```

The server will automatically load credentials from the `.env` file.

### MCP Transport Configuration

The MCP server supports multiple transport modes:

| Flag | Env Var | Default | Description |
|------|---------|---------|-------------|
| `--transport` | `MCP_TRANSPORT` | `sse` | Transport type: `sse`, `stdio`, `streamable-http` |
| `--host` | `MCP_HOST` | `0.0.0.0` | Host to bind (SSE/HTTP only) |
| `--port` | `MCP_PORT` | `8080` | Port to bind (SSE/HTTP only) |

CLI flags take precedence over environment variables, which take precedence over defaults.

### Custom Port and Host (HTTP API)

```bash
metatrader-http-server --host 127.0.0.1 --port 9000
```

### Connection Parameters

The MT5 client supports additional configuration:

```python
config = {
    "login": 12345678,
    "password": "your_password",
    "server": "MetaQuotes-Demo",
    "path": None,               # Path to MT5 terminal executable (default: auto-detect)
    "timeout": 60000,           # Connection timeout in milliseconds (default: 60000)
    "portable": False,          # Use portable mode (default: False)
    "max_retries": 3,           # Maximum connection retry attempts (default: 3)
    "backoff_factor": 1.5,      # Delay multiplier between retries (default: 1.5)
    "cooldown_time": 2.0,       # Seconds to wait between connections (default: 2.0)
    "debug": True               # Enable debug logging (default: False)
}
```

**Configuration Options:**

- **login** (int, required): Your MT5 account login number
- **password** (str, required): Your MT5 account password
- **server** (str, required): MT5 server name (e.g., "MetaQuotes-Demo")
- **path** (str, optional): Full path to the MT5 terminal executable. If not specified, the client will automatically search standard installation directories
- **timeout** (int, optional): Connection timeout in milliseconds. Default: 60000 (60 seconds)
- **portable** (bool, optional): Enable portable mode for the MT5 terminal. Default: False
- **max_retries** (int, optional): Maximum number of connection retry attempts. Default: 3
- **backoff_factor** (float, optional): Exponential backoff factor for retry delays. Default: 1.5
- **cooldown_time** (float, optional): Minimum time in seconds between connection attempts. Default: 2.0
- **debug** (bool, optional): Enable detailed debug logging for troubleshooting. Default: False

---

## 🗺️ Roadmap

| Feature | Status |
|---------|--------|
| MetaTrader 5 Connection | ✅ Complete |
| Python Client Library | ✅ Complete |
| MCP Server | ✅ Complete |
| Claude Desktop Integration | ✅ Complete |
| HTTP/REST API Server | ✅ Complete |
| Open WebUI Integration | ✅ Complete |
| OpenAPI Documentation | ✅ Complete |
| PyPI Package | ✅ Published |
| SSE Transport Support | ✅ Complete |
| Google ADK Integration | 🚧 In Progress |
| WebSocket Quote Server | ✅ Complete |
| Docker Container | 📋 Planned |

---

## 🛠️ Development

### Setting Up Development Environment

```bash
# Clone the repository
git clone https://github.com/ariadng/metatrader-mcp-server.git
cd metatrader-mcp-server

# Install in development mode
pip install -e .

# Install development dependencies
pip install pytest python-dotenv

# Run tests
pytest tests/
```

### Project Structure

```
metatrader-mcp-server/
├── src/
│   ├── metatrader_client/      # Core MT5 client library
│   │   ├── account/            # Account operations
│   │   ├── connection/         # Connection management
│   │   ├── history/            # Historical data
│   │   ├── market/             # Market data
│   │   ├── order/              # Order execution
│   │   └── types/              # Type definitions
│   ├── metatrader_mcp/         # MCP server implementation
│   ├── metatrader_openapi/     # HTTP/REST API server
│   └── metatrader_quote/       # WebSocket quote streamer
├── tests/                      # Test suite
├── docs/                       # Documentation
└── pyproject.toml             # Project configuration
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report Bugs** - [Open an issue](https://github.com/ariadng/metatrader-mcp-server/issues)
2. **Suggest Features** - Share your ideas in issues
3. **Submit Pull Requests** - Fix bugs or add features
4. **Improve Documentation** - Help make docs clearer
5. **Share Examples** - Show how you're using it

### Contribution Guidelines

- Fork the repository
- Create a feature branch (`git checkout -b feature/amazing-feature`)
- Make your changes
- Write or update tests
- Ensure tests pass (`pytest`)
- Commit your changes (`git commit -m 'Add amazing feature'`)
- Push to the branch (`git push origin feature/amazing-feature`)
- Open a Pull Request

---

## 📖 Documentation

- **[Developer Documentation](docs/README.md)** - Detailed technical docs
- **[API Reference](docs/api-reference.md)** - Complete API documentation
- **[Examples](docs/examples/)** - Code examples and tutorials
- **[Roadmap](docs/roadmap/version-checklist.md)** - Feature development timeline

---

## 🆘 Getting Help

- **Issues**: [GitHub Issues](https://github.com/ariadng/metatrader-mcp-server/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ariadng/metatrader-mcp-server/discussions)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/ariadhanang)

### Common Issues

**"Connection failed"**
- Ensure MT5 terminal is running
- Check that algorithmic trading is enabled
- Verify your login credentials are correct

**"Module not found"**
- Make sure you've installed the package: `pip install metatrader-mcp-server`
- Check your Python version is 3.10 or higher

**"Order execution failed"**
- Verify the symbol exists on your broker
- Check that the market is open
- Ensure you have sufficient margin

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [FastMCP](https://github.com/jlowin/fastmcp) for MCP protocol support
- Uses [MetaTrader5](https://pypi.org/project/MetaTrader5/) Python package
- Powered by [FastAPI](https://fastapi.tiangolo.com/) for the REST API

---

## 📊 Project Stats

- **Version**: 0.5.1
- **Python**: 3.10+
- **License**: MIT
- **Status**: Active Development

---

<div align="center">

**Made with ❤️ by [Aria Dhanang](https://github.com/ariadng)**

⭐ Star this repo if you find it useful!

[PyPI](https://pypi.org/project/metatrader-mcp-server/) • [GitHub](https://github.com/ariadng/metatrader-mcp-server) • [Issues](https://github.com/ariadng/metatrader-mcp-server/issues)

</div>
