---
name: "kukapay/freqtrade-mcp"
description: "An MCP server that integrates with the Freqtrade cryptocurrency trading bot."
description_tr: "Freqtrade kripto trading botunun entegrasyonunu sağlayan bir MCP server'ı."
category: "Finance & Fintech"
repo: "kukapay/freqtrade-mcp"
stars: 118
url: "https://github.com/kukapay/freqtrade-mcp"
body_length: 7040
license: "MIT"
language: "Python"
body_tr: |-
  # Freqtrade-MCP

  [Freqtrade](https://www.freqtrade.io/) kripto para trading botunu REST API aracılığıyla entegre eden ve AI ajanların otomatik işlem yönetimi için sorunsuz etkileşimini sağlayan bir MCP sunucusu.

  Daha fazla kripto ile ilgili MCP sunucusu için, [Kukapay MCP sunucuları](https://github.com/kukapay/kukapay-mcp-servers) sayfasına bakın.

  ![GitHub License](https://img.shields.io/github/license/kukapay/freqtrade-mcp)
  ![Python Version](https://img.shields.io/badge/python-3.13+-blue)
  ![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

  ## Kurulum

  ### Ön Koşullar
  - **Python 3.13+**: Sisteminizde Python kurulu olduğundan emin olun.
  - **Freqtrade**: REST API etkinleştirilmiş çalışan bir Freqtrade örneği ([Freqtrade Dokümanları](https://www.freqtrade.io/en/stable/rest-api/)).
  - **Git**: Depoyu klonlamak için.

  ### Adımlar
  1. **Depoyu Klonlayın**:
     ```bash
     git clone https://github.com/kukapay/freqtrade-mcp.git
     cd freqtrade-mcp
     ```

  2. **Bağımlılıkları Kurun**:
     `pip` kullanarak:
     ```bash
     pip install freqtrade-client mcp[cli]
     ```
     Veya `uv` ile (isteğe bağlı):
     ```bash
     uv add freqtrade-client "mcp[cli]"
     ```

  3. **İstemci Yapılandırması**:

      ```
      "mcpServers": { 
        "freqtrade-mcp": { 
          "command": "uv", 
          "args": [ 
            "--directory", "/your/path/to/freqtrade-mcp", 
            "run", 
            "__main__.py" 
          ], 
          "env": { 
             "FREQTRADE_API_URL": "http://127.0.0.1:8080",
             "FREQTRADE_USERNAME": "your_username",
             "FREQTRADE_PASSWORD": "your_password"
          } 
        } 
      }
      ```
      
  4. **Freqtrade Yapılandırması**:

      Yapılandırmanıza api_server bölümünü ekleyerek REST API'yi etkinleştirin ve api_server.enabled'ı true olarak ayarlayın.

      Örnek yapılandırma:
      ```
          "api_server": {
          "enabled": true,
          "listen_ip_address": "127.0.0.1",
          "listen_port": 8080,
          "verbosity": "error",
          "enable_openapi": false,
          "jwt_secret_key": "somethingrandom",
          "CORS_origins": [],
          "username": "Freqtrader",
          "password": "SuperSecret1!",
          "ws_token": "sercet_Ws_t0ken"
      },
      ```

     Dokümanı [burada](https://www.freqtrade.io/en/stable/rest-api/#configuration) kontrol edin.

  ## Kullanım

  ### Kullanılabilir Araçlar
  Sunucu, aşağıdaki Freqtrade API endpoint'lerini MCP araçları olarak sunar:

  | Araç                  | Açıklama                             | Parametreler                        |
  |-----------------------|--------------------------------------|-------------------------------------|
  | `fetch_market_data`   | Bir pair için OHLCV verileri getir   | `pair: str`, `timeframe: str`       |
  | `fetch_bot_status`    | Açık işlem durumunu al               | Yok                                 |
  | `fetch_profit`        | Kar özetini al                       | Yok                                 |
  | `fetch_balance`       | Hesap bakiyesini al                  | Yok                                 |
  | `fetch_performance`   | Performans metriklerini al           | Yok                                 |
  | `fetch_whitelist`     | Pair whitelist'ini al                | Yok                                 |
  | `fetch_blacklist`     | Pair blacklist'ini al                | Yok                                 |
  | `fetch_trades`        | İşlem geçmişini al                   | Yok                                 |
  | `fetch_config`        | Bot yapılandırmasını al              | Yok                                 |
  | `fetch_locks`         | İşlem kilitlerini al                 | Yok                                 |
  | `place_trade`         | Bir buy/sell işlemi yerleştir        | `pair: str`, `side: str`, `stake_amount: float` |
  | `start_bot`           | Botu başlat                          | Yok                                 |
  | `stop_bot`            | Botu durdur                          | Yok                                 |
  | `reload_config`       | Bot yapılandırmasını yeniden yükle   | Yok                                 |
  | `add_blacklist`       | Pair'i blacklist'e ekle              | `pair: str`                         |
  | `delete_blacklist`    | Pair'i blacklist'ten kaldır          | `pair: str`                         |
  | `delete_lock`         | Bir işlem kilidini sil               | `lock_id: int`                      |

  ### Örnek İstemler
  1. **Pazar Verileri Getir**:
     - "BTC/USDT için saatlik fiyat verilerini göster."
     - "ETH/BTC'nin 5 dakikalık grafiği nasıl?"
     - "XRP/USDT için son saat içerisindeki en son mum verileri ver."

  2. **Bot Durumunu Getir**:
     - "Açık işlemlerimin mevcut durumu nedir?"
     - "Şu anda aktif işlem var mı?"
     - "Bana şu an botun işlem aktivitesi hakkında bilgi ver."

  3. **Kar Getir**:
     - "Şimdiye kadar ne kadar kar elde ettim?"
     - "Bot için toplam kar özeti nedir?"
     - "Bana ticari kazançlarımı gösterebilir misin?"

  4. **Bakiye Getir**:
     - "Hesap bakiyem nedir?"
     - "İşlem hesabımda ne kadar para var?"
     - "Freqtrade cüzdanımın mevcut bakiyesini söyle."

  5. **Performans Getir**:
     - "Bot ne kadar iyi performans gösteriyor?"
     - "Işlemlerim için performans metrikleri nedir?"
     - "Bana ticari istatistikleri göster."

  6. **Whitelist Getir**:
     - "Whitelist'te hangi pair'ler var?"
     - "Bot hangi işlem pair'lerini kullanmaya izin veriliyor?"
     - "Bana whitelisted pair'leri listele."

  7. **Blacklist Getir**:
     - "Hangi pair'ler blacklist'te?"
     - "Şu anda hangi işlem pair'leri engelleniyor?"
     - "Blacklist hakkında bana bilgi ver."

  8. **İşlemler Getir**:
     - "Kapalı işlemlerimin geçmişi nedir?"
     - "Botun tamamladığı tüm işlemleri göster."
     - "Geçmiş işlemlerimi listeler misin?"

  9. **Yapılandırma Getir**:
     - "Mevcut bot yapılandırması nedir?"
     - "Botun kullandığı ayarları göster."
     - "Freqtrade config'i hakkında bana bilgi ver."

  10. **Kilitler Getir**:
      - "Aktif herhangi bir işlem kilidi var mı?"
      - "Şu anda hangi kilitler yerinde?"
      - "Bana işlem kilitlerinin listesini göster."

  11. **İşlem Yerleştir**:
      - "Şimdi 0.01 BTC/USDT satın al."
      - "Hemen 0.05 ETH/USDT sat."
      - "0.1 XRP/USDT için bir alım emri yerleştir."

  12. **Botu Başlat**:
      - "İşlem botunu başlat."
      - "Freqtrade botunu aç."
      - "Botu şimdi çalıştır."

  13. **Botu Durdur**:
      - "İşlem botunu durdur."
      - "Freqtrade botunu kapat."
      - "Botun işlemini duraklat."

  14. **Yapılandırmayı Yeniden Yükle**:
      - "Botun yapılandırmasını yeniden yükle."
      - "Bot ayarlarını güncelle."
      - "Freqtrade config'ini yenile."

  15. **Blacklist'e Ekle**:
      - "ETH/USDT'yi blacklist'e al."
      - "BTC/ETH'yi blacklist'e ekle."
      - "XRP/USDT için işlemi engelle."

  16. **Blacklist'ten Sil**:
      - "ETH/USDT'yi blacklist'ten kaldır."
      - "BTC/ETH'yi işlem için aç."
      - "XRP/USDT'yi blacklist'ten çıkar."

  17. **Kilidi Sil**:
      - "ID'si 123 olan işlem kilidini sil."
      - "45 numaralı kilidi kaldır."
      - "ID'si 7 olan işlemin kilidini aç."

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır. Ayrıntılar için [LICENSE](LICENSE) dosyasını göz atın.
---

# Freqtrade-MCP

An MCP server that integrates with the [Freqtrade](https://www.freqtrade.io/) cryptocurrency trading bot via its REST API, enabling seamless AI agent interaction for automated trading operation.

For more crypto-related MCP servers, see the [Kukapay MCP servers](https://github.com/kukapay/kukapay-mcp-servers).

![GitHub License](https://img.shields.io/github/license/kukapay/freqtrade-mcp)
![Python Version](https://img.shields.io/badge/python-3.13+-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

## Installation

### Prerequisites
- **Python 3.13+**: Ensure Python is installed on your system.
- **Freqtrade**: A running Freqtrade instance with the REST API enabled (see [Freqtrade Docs](https://www.freqtrade.io/en/stable/rest-api/)).
- **Git**: For cloning the repository.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kukapay/freqtrade-mcp.git
   cd freqtrade-mcp
   ```

2. **Install Dependencies**:
   Using `pip`:
   ```bash
   pip install freqtrade-client mcp[cli]
   ```
   Or with `uv` (optional):
   ```bash
   uv add freqtrade-client "mcp[cli]"
   ```

3. **Client Configuration**:

    ```
    "mcpServers": { 
      "freqtrade-mcp": { 
        "command": "uv", 
        "args": [ 
          "--directory", "/your/path/to/freqtrade-mcp", 
          "run", 
          "__main__.py" 
        ], 
        "env": { 
           "FREQTRADE_API_URL": "http://127.0.0.1:8080",
           "FREQTRADE_USERNAME": "your_username",
           "FREQTRADE_PASSWORD": "your_password"
        } 
      } 
    }
    ```
    
4. **Freqtrade Configuration**:

    Enable the rest API by adding the api_server section to your configuration and setting api_server.enabled to true.

    Sample configuration:
    ```
        "api_server": {
        "enabled": true,
        "listen_ip_address": "127.0.0.1",
        "listen_port": 8080,
        "verbosity": "error",
        "enable_openapi": false,
        "jwt_secret_key": "somethingrandom",
        "CORS_origins": [],
        "username": "Freqtrader",
        "password": "SuperSecret1!",
        "ws_token": "sercet_Ws_t0ken"
    },
    ```

   Check the document [here](https://www.freqtrade.io/en/stable/rest-api/#configuration).

## Usage

### Available Tools
The server exposes the following Freqtrade API endpoints as MCP tools:

| Tool                  | Description                          | Parameters                          |
|-----------------------|--------------------------------------|-------------------------------------|
| `fetch_market_data`   | Fetch OHLCV data for a pair          | `pair: str`, `timeframe: str`       |
| `fetch_bot_status`    | Get open trade status                | None                                |
| `fetch_profit`        | Get profit summary                   | None                                |
| `fetch_balance`       | Get account balance                  | None                                |
| `fetch_performance`   | Get performance metrics              | None                                |
| `fetch_whitelist`     | Get whitelist of pairs               | None                                |
| `fetch_blacklist`     | Get blacklist of pairs               | None                                |
| `fetch_trades`        | Get trade history                    | None                                |
| `fetch_config`        | Get bot configuration                | None                                |
| `fetch_locks`         | Get trade locks                      | None                                |
| `place_trade`         | Place a buy/sell trade               | `pair: str`, `side: str`, `stake_amount: float` |
| `start_bot`           | Start the bot                        | None                                |
| `stop_bot`            | Stop the bot                         | None                                |
| `reload_config`       | Reload bot configuration             | None                                |
| `add_blacklist`       | Add pair to blacklist                | `pair: str`                         |
| `delete_blacklist`    | Remove pair from blacklist           | `pair: str`                         |
| `delete_lock`         | Delete a trade lock                  | `lock_id: int`                      |

### Example Prompts
1. **Fetch Market Data**:
   - "Show me the hourly price data for BTC/USDT."
   - "What’s the 5-minute chart for ETH/BTC like?"
   - "Give me the latest candlestick data for XRP/USDT over the past hour."

2. **Fetch Bot Status**:
   - "What’s the current status of my open trades?"
   - "Are there any active trades right now?"
   - "Tell me about the bot’s trading activity at the moment."

3. **Fetch Profit**:
   - "How much profit have I made so far?"
   - "What’s the total profit summary for the bot?"
   - "Can you show me my trading gains?"

4. **Fetch Balance**:
   - "What’s my account balance?"
   - "How much money do I have in the trading account?"
   - "Tell me the current balance of my Freqtrade wallet."

5. **Fetch Performance**:
   - "How well has the bot been performing?"
   - "What are the performance metrics for my trades?"
   - "Show me the trading stats."

6. **Fetch Whitelist**:
   - "Which pairs are on the whitelist?"
   - "What trading pairs is the bot allowed to use?"
   - "List the whitelisted pairs for me."

7. **Fetch Blacklist**:
   - "Which pairs are blacklisted?"
   - "What trading pairs are blocked right now?"
   - "Tell me about the blacklist."

8. **Fetch Trades**:
   - "What’s the history of my closed trades?"
   - "Show me all the trades the bot has completed."
   - "Can you list my past trades?"

9. **Fetch Config**:
   - "What’s the current bot configuration?"
   - "Show me the settings the bot is using."
   - "Tell me about the Freqtrade config."

10. **Fetch Locks**:
    - "Are there any trade locks active?"
    - "What locks are currently in place?"
    - "Show me the list of trading locks."

11. **Place Trade**:
    - "Buy 0.01 BTC/USDT right now."
    - "Sell 0.05 ETH/USDT immediately."
    - "Place a buy order for 0.1 XRP/USDT."

12. **Start Bot**:
    - "Start the trading bot."
    - "Turn on the Freqtrade bot."
    - "Get the bot running now."

13. **Stop Bot**:
    - "Stop the trading bot."
    - "Shut down the Freqtrade bot."
    - "Pause the bot’s trading."

14. **Reload Config**:
    - "Reload the bot’s configuration."
    - "Update the bot settings."
    - "Refresh the Freqtrade config."

15. **Add Blacklist**:
    - "Blacklist ETH/USDT."
    - "Add BTC/ETH to the blacklist."
    - "Block trading for XRP/USDT."

16. **Delete Blacklist**:
    - "Remove ETH/USDT from the blacklist."
    - "Unblock BTC/ETH for trading."
    - "Take XRP/USDT off the blacklist."

17. **Delete Lock**:
    - "Delete the trade lock with ID 123."
    - "Remove lock number 45."
    - "Unlock the trade with ID 7."

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
