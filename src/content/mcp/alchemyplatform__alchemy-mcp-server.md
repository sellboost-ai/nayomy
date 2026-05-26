---
name: "alchemyplatform/alchemy-mcp-server"
description: "Allow AI agents to interact with Alchemy's blockchain APIs."
description_tr: "AI ajanlarının Alchemy'nin blockchain API'leri ile etkileşim kurmasını sağlayın."
category: "Finance & Fintech"
repo: "alchemyplatform/alchemy-mcp-server"
stars: 86
url: "https://github.com/alchemyplatform/alchemy-mcp-server"
body_length: 8191
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Alchemy MCP Sunucusu

  Yapay zeka ajanlarının Alchemy'nin blockchain API'lerini yapılandırılmış bir şekilde kullanmasını sağlayan bir Model Context Protocol (MCP) sunucusu. Bu, ajanların herhangi bir kod yazmadan doğrudan blockchain verilerini sorgulamasına olanak tanır.

  <a href="https://glama.ai/mcp/servers/@alchemyplatform/alchemy-mcp-server">
    
  </a>

  ## Uzak MCP Sunucusu (Önerilen)

  En hızlı başlama yöntemi, `https://mcp.alchemy.com/mcp` adresindeki barındırılan uzak sunucuya bağlanmaktır. OAuth ile kimlik doğrulama yapılır — istendiğinde Alchemy hesabınızla oturum açın. API anahtarı veya yerel kurulum gerekmez.

  **Tam dokümantasyon:** [alchemy.com/docs/alchemy-mcp-server](https://www.alchemy.com/docs/alchemy-mcp-server)

  > **Not:** `mcp.alchemy.com` adresindeki barındırılan sunucu ve bu açık kaynaklı depo ayrı ayrı yönetilmektedir ve senkronize olmayabilir.

  | İstemci             | Kurulum                                                                            |
  | ------------------- | ---------------------------------------------------------------------------------- |
  | **Claude Code**     | `claude mcp add alchemy --transport http https://mcp.alchemy.com/mcp`              |
  | **Codex**           | `codex mcp add alchemy --url https://mcp.alchemy.com/mcp`                          |
  | **Cursor**          | `~/.cursor/mcp.json` veya `.cursor/mcp.json` dosyasına ekleyin — aşağıdaki JSON yapılandırmasına bakın          |
  | **Windsurf**        | `~/.codeium/windsurf/mcp_config.json` dosyasına ekleyin — aşağıdaki JSON yapılandırmasına bakın               |
  | **VS Code Copilot** | `.vscode/mcp.json` dosyasına ekleyin — aşağıdaki JSON yapılandırmasına bakın                                  |
  | **Claude Desktop**  | `claude_desktop_config.json` dosyasına ekleyin — aşağıdaki JSON yapılandırmasına bakın                        |
  | **Cline**           | VS Code komut paletinden `Cline: MCP Servers` açın — aşağıdaki JSON yapılandırmasına bakın |

  <details>
  <summary>Cursor / Windsurf / Claude Desktop / Cline için JSON yapılandırması</summary>

  ```json
  {
    "mcpServers": {
      "alchemy": {
        "type": "streamable-http",
        "url": "https://mcp.alchemy.com/mcp"
      }
    }
  }
  ```

  </details>

  <details>
  <summary>VS Code Copilot için JSON yapılandırması</summary>

  ```json
  {
    "servers": {
      "alchemy": {
        "type": "http",
        "url": "https://mcp.alchemy.com/mcp"
      }
    }
  }
  ```

  </details>

  Diğer MCP uyumlu istemciler için `https://mcp.alchemy.com/mcp` adresine Streamable HTTP transportu kullanarak yönlendirin.

  ## Yerel STDIO Sunucusu

  Bu MCP sunucusu yapay zeka ajanları ile Alchemy'nin blockchain API'leri arasında bir köprü oluşturarak, ajanların şu işlemleri yapmasını sağlar:

  - Token fiyatları ve fiyat geçmişini sorgulama (esnek zaman dilimi sorguları dahil)
  - NFT sahiplik bilgisi ve sözleşme verilerini alma
  - Birden fazla ağ üzerinde işlem geçmişini görüntüleme
  - Birden fazla blockchain ağında token bakiyelerini kontrol etme
  - Filtreleme ile ayrıntılı varlık transferlerini alma
  - Smart Contract Hesapları aracılığıyla işlem gönderme (**yapılandırılmış cüzdan ajanı sunucusu gereklidir**)
  - DEX protokolleri aracılığıyla token takasları gerçekleştirme (**yapılandırılmış cüzdan ajanı sunucusu gereklidir**)
  - Ve daha fazlası!

  ### Hızlı Kurulum

  MCP sunucusunu hızlıca kurmak için, MCP yapılandırma dosyanızda (genellikle Claude Desktop veya Cursor ayarlarında) aşağıdaki yapılandırmayı kullanın:

  ```json
  {
    "mcpServers": {
      "alchemy": {
        "command": "npx",
        "args": ["-y", "@alchemy/mcp-server"],
        "env": {
          "ALCHEMY_API_KEY": "YOUR_API_KEY"
        }
      }
    }
  }
  ```

  Bu yapılandırma, depoyu manuel olarak klonlamadan sunucuyu kullanmanıza olanak tanır.

  ### Ortam Değişkenleri

  MCP sunucusu aşağıdaki ortam değişkenini gerektirir:

  - `ALCHEMY_API_KEY` - Alchemy API anahtarınız (tüm blockchain veri sorgulamaları için zorunludur)

  **İşlem gönderme ve takas işlevselliği için**, ayrıca şunları yapılandırmanız gerekir:

  - `AGENT_WALLET_SERVER` - Smart Contract Account işlemlerini yöneten yapılandırılmış bir cüzdan ajanı sunucusunun URL'si

  ⚠️ **Önemli**: `sendTransaction` ve `swap` yöntemleri, düzgün şekilde yapılandırılmış bir cüzdan ajanı sunucusu olmadan çalışmayacaktır. Bu yöntemler, işlemleri imzalamak ve yayınlamak için harici cüzdan altyapısı gerektirir.

  ## Mevcut Yöntemler

  Yapay zeka ajanınıza aşağıdaki yöntemleri kullanmasını söyleyebilirsiniz:

  ### Token Fiyatı Yöntemleri

  1. **fetchTokenPriceBySymbol**
     - Sembol bazında tokenler için güncel fiyat verilerini alır
     - Örnek: "ETH ve BTC'nin güncel fiyatı nedir?"

  2. **fetchTokenPriceByAddress**
     - Sözleşme adresi bazında tokenler için güncel fiyat verilerini alır
     - Örnek: "0x1234...5678 adresindeki tokenin Ethereum mainnet'teki fiyatı nedir?"

  3. **fetchTokenPriceHistoryBySymbol**
     - Belirli tarih aralıkları ile tokenler için geçmiş fiyat verilerini alır
     - Örnek: "1 Ocak'tan 1 Şubat 2023'e kadar günlük aralıklarla BTC fiyat geçmişini göster"

  4. **fetchTokenPriceHistoryByTimeFrame**
     - Esnek zaman dilimleri veya doğal dil kullanarak geçmiş fiyat verilerini alır
     - Örnek: "Son bir haftanın ETH fiyatını göster" veya "BTC fiyatını son 30 günden getir"

  ### Çok Ağlı Token Yöntemleri

  5. **fetchTokensOwnedByMultichainAddresses**
     - Birden fazla ağ üzerinde adresler için token bakiyelerini alır
     - Örnek: "0xabc...123 adresi Ethereum ve Base üzerinde hangi tokenları tutuyor?"

  ### İşlem Geçmişi Yöntemleri

  6. **fetchAddressTransactionHistory**
     - Birden fazla ağ üzerinde adresler için işlem geçmişini alır
     - Örnek: "0xdef...456 cüzdanının Ethereum üzerindeki son işlemlerini göster"

  7. **fetchTransfers**
     - Gelişmiş filtreleme seçenekleri ile ayrıntılı varlık transferi verilerini alır
     - Örnek: "0xghi...789'dan veya 0xghi...789'a tüm ERC-20 transferlerini göster"

  ### NFT Yöntemleri

  8. **fetchNftsOwnedByMultichainAddresses**
     - Spam filtrelemesi ile adresler tarafından sahip olunan tüm NFT'leri alır
     - Örnek: "0xjkl...012 adresi hangi NFT'lere sahiptir?"

  9. **fetchNftContractDataByMultichainAddress**
     - Adresler için NFT sözleşme verilerini alır
     - Örnek: "0xmno...345 hangi NFT koleksiyonlarından token'lara sahiptir?"

  ### İşlem Yöntemleri

  10. **sendTransaction**
      - Smart Contract Hesapları aracılığıyla işlem gönderir
      - **⚠️ Önemli**: `AGENT_WALLET_SERVER` ortam değişkeni ile yapılandırılmış bir cüzdan ajanı sunucusu gerektirir
      - Örnek: "0xpqr...678'e 0.1 ETH gönder"

  ### Takas Yöntemleri

  11. **swap**
      - DEX protokolleri aracılığıyla token takasları gerçekleştirir (Uniswap)
      - **⚠️ Önemli**: `AGENT_WALLET_SERVER` ortam değişkeni ile yapılandırılmış bir cüzdan ajanı sunucusu gerektirir
      - Örnek: "100 USDC'yi ETH için takas et"

  ## Yerel Geliştirme ve Açık Kaynak Katkıları

  ### Kurulum

  1. Depoyu klonlayın

  ```bash
  git clone https://github.com/alchemyplatform/alchemy-mcp.git
  cd alchemy-mcp
  ```

  2. Bağımlılıkları yükleyin

  ```bash
  pnpm install
  ```

  ### Geliştirme

  ```bash
  pnpm watch
  ```

  ### Üretim için Derleme

  ```bash
  pnpm build
  ```

  ### Hata Ayıklama için MCP Inspector'ı Kullanma

  MCP Inspector, yöntemlerinizi test etmek için görsel bir arayüz sağlayarak MCP sunucunuzdaki hataları ayıklamanıza yardımcı olur:

  ```bash
  pnpm inspector
  ```

  Bu, tarayıcınızda erişebileceğiniz MCP Inspector'ı başlatacaktır. Size aşağıdakileri yapmanıza izin verir:

  - Tüm mevcut yöntemleri görme
  - Yöntemleri farklı parametrelerle test etme
  - Yanıt verilerini görüntüleme
  - MCP sunucunuzdaki sorunları ayıklama

  ## Katkıda Bulunma

  Pull request'ler memnuniyetle karşılanır. Büyük değişiklikler için lütfen önce bir issue açarak neyi değiştirmek istediğinizi tartışın.

  ## Lisans

  Bu MCP sunucusu MIT Lisansı altında lisanslanmıştır. Bu, MIT Lisansının hüküm ve koşullarına tabi olarak yazılımı serbestçe kullanma, değiştirme ve dağıtma hakkı verdiği anlamına gelir.

  ## Örnek İstemler

  Yapay zeka ajanınızla kullanabileceğiniz bazı örnek istemler:

  ```
  Bitcoin ve Ethereum'un güncel fiyatları nedir?

  0x1234...5678 cüzdanının Ethereum üzerinde sahip olduğu NFT'leri göster.

  0xabcd...6789 cüzdanı Ethereum ve Base üzerinde hangi tokenları tutuyor?

  0x9876...5432 için işlem geçmişini al.

  1 Ocak'tan bugüne kadar günlük aralıklarla Ethereum'un fiyat geçmişini göster.

  Son bir haftanın saatlik aralıklarla Bitcoin fiyat verilerini al.

  Son ayın ETH fiyat performansını göster.

  Son 100 blokta 0x1234...5678 adresine hangi ERC-20 transferleri gerçekleşti?
  ```

  ## API Başvurusu

  Alchemy'nin API'leri hakkında daha fazla bilgi için bkz:

  - [Alchemy API Dokümantasyonu](https://docs.alchemy.com/)
---

# Alchemy MCP Server

A Model Context Protocol (MCP) server that enables AI agents to interact with Alchemy's blockchain APIs in a structured way. This allows agents to query blockchain data directly without writing any code.

<a href="https://glama.ai/mcp/servers/@alchemyplatform/alchemy-mcp-server">
  
</a>

## Remote MCP Server (Recommended)

The fastest way to get started is to connect to the hosted remote server at `https://mcp.alchemy.com/mcp`. It authenticates via OAuth — just sign in with your Alchemy account when prompted. No API key or local install required.

**Full documentation:** [alchemy.com/docs/alchemy-mcp-server](https://www.alchemy.com/docs/alchemy-mcp-server)

> **Note:** The hosted server at `mcp.alchemy.com` and this open-source repo are maintained separately and may not be in sync.

| Client              | Setup                                                                              |
| ------------------- | ---------------------------------------------------------------------------------- |
| **Claude Code**     | `claude mcp add alchemy --transport http https://mcp.alchemy.com/mcp`              |
| **Codex**           | `codex mcp add alchemy --url https://mcp.alchemy.com/mcp`                          |
| **Cursor**          | Add to `~/.cursor/mcp.json` or `.cursor/mcp.json` — see JSON config below          |
| **Windsurf**        | Add to `~/.codeium/windsurf/mcp_config.json` — see JSON config below               |
| **VS Code Copilot** | Add to `.vscode/mcp.json` — see JSON config below                                  |
| **Claude Desktop**  | Add to `claude_desktop_config.json` — see JSON config below                        |
| **Cline**           | Open `Cline: MCP Servers` from the VS Code command palette — see JSON config below |

<details>
<summary>JSON config for Cursor / Windsurf / Claude Desktop / Cline</summary>

```json
{
  "mcpServers": {
    "alchemy": {
      "type": "streamable-http",
      "url": "https://mcp.alchemy.com/mcp"
    }
  }
}
```

</details>

<details>
<summary>JSON config for VS Code Copilot</summary>

```json
{
  "servers": {
    "alchemy": {
      "type": "http",
      "url": "https://mcp.alchemy.com/mcp"
    }
  }
}
```

</details>

For any other MCP-compatible client, point it at `https://mcp.alchemy.com/mcp` using Streamable HTTP transport.

## Local STDIO Server

This MCP server creates a bridge between AI agents and Alchemy's blockchain APIs, allowing agents to:

- Query token prices and price history (including flexible time frame queries)
- Get NFT ownership information and contract data
- View transaction history across multiple networks
- Check token balances across multiple blockchain networks
- Retrieve detailed asset transfers with filtering
- Send transactions via Smart Contract Accounts (**requires configured wallet agent server**)
- Execute token swaps via DEX protocols (**requires configured wallet agent server**)
- And more!

### Quick Setup

To quickly set up the MCP server, use the following configuration in your MCP config file (typically in Claude Desktop or Cursor settings):

```json
{
  "mcpServers": {
    "alchemy": {
      "command": "npx",
      "args": ["-y", "@alchemy/mcp-server"],
      "env": {
        "ALCHEMY_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

This configuration allows you to use the server without manually cloning the repository.

### Environment Variables

The MCP server requires the following environment variable:

- `ALCHEMY_API_KEY` - Your Alchemy API key (required for all blockchain data queries)

**For transaction and swap functionality**, you must also configure:

- `AGENT_WALLET_SERVER` - URL of a configured wallet agent server that handles Smart Contract Account operations

⚠️ **Important**: The `sendTransaction` and `swap` methods will not function without a properly configured wallet agent server. These methods require external wallet infrastructure to handle signing and broadcasting transactions.

## Available Methods

You can prompt your AI agent to use the following methods:

### Token Price Methods

1. **fetchTokenPriceBySymbol**
   - Gets current price data for tokens by symbol
   - Example: "What's the current price of ETH and BTC?"

2. **fetchTokenPriceByAddress**
   - Gets current price data for tokens by contract address
   - Example: "What's the price of the token at address 0x1234...5678 on Ethereum mainnet?"

3. **fetchTokenPriceHistoryBySymbol**
   - Gets historical price data for tokens with specific date ranges
   - Example: "Show me BTC price history from Jan 1 to Feb 1, 2023, with daily intervals"

4. **fetchTokenPriceHistoryByTimeFrame**
   - Gets historical price data using flexible time frames or natural language
   - Example: "Show me ETH price for the last week" or "Get BTC price for the past 30 days"

### Multichain Token Methods

5. **fetchTokensOwnedByMultichainAddresses**
   - Gets token balances for addresses across multiple networks
   - Example: "What tokens does 0xabc...123 hold on Ethereum and Base?"

### Transaction History Methods

6. **fetchAddressTransactionHistory**
   - Gets transaction history for addresses across multiple networks
   - Example: "Show recent transactions for wallet 0xdef...456 on Ethereum"

7. **fetchTransfers**
   - Gets detailed asset transfer data with advanced filtering options
   - Example: "Show me all ERC-20 transfers to or from 0xghi...789"

### NFT Methods

8. **fetchNftsOwnedByMultichainAddresses**
   - Gets all NFTs owned by addresses with spam filtering
   - Example: "What NFTs does 0xjkl...012 own?"

9. **fetchNftContractDataByMultichainAddress**
   - Gets NFT contract data for addresses
   - Example: "What NFT collections does 0xmno...345 have tokens from?"

### Transaction Methods

10. **sendTransaction**
    - Sends transactions via Smart Contract Accounts
    - **⚠️ Important**: Requires a configured wallet agent server with `AGENT_WALLET_SERVER` environment variable
    - Example: "Send 0.1 ETH to 0xpqr...678"

### Swap Methods

11. **swap**
    - Executes token swaps via DEX protocols (Uniswap)
    - **⚠️ Important**: Requires a configured wallet agent server with `AGENT_WALLET_SERVER` environment variable
    - Example: "Swap 100 USDC for ETH"

## Local Development and Open Source Contributions

### Installation

1. Clone the repository

```bash
git clone https://github.com/alchemyplatform/alchemy-mcp.git
cd alchemy-mcp
```

2. Install dependencies

```bash
pnpm install
```

### Development

```bash
pnpm watch
```

### Building for Production

```bash
pnpm build
```

### Using the MCP Inspector for Debugging

The MCP Inspector helps you debug your MCP server by providing a visual interface to test your methods:

```bash
pnpm inspector
```

This will start the MCP Inspector which you can access in your browser. It allows you to:

- See all available methods
- Test methods with different parameters
- View the response data
- Debug issues with your MCP server

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License.

## Example Prompts

Here are some example prompts you can use with your AI agent:

```
What's the current price of Bitcoin and Ethereum?

Show me the NFTs owned by the wallet 0x1234...5678 on Ethereum.

What tokens does wallet 0xabcd...6789 hold across Ethereum and Base?

Get me the transaction history for 0x9876...5432.

Show me the price history of Ethereum from January 1st to today with daily intervals.

Get me Bitcoin price data for the last week with hourly intervals.

Show me ETH price performance for the past month.

What ERC-20 transfers happened to address 0x1234...5678 in the last 100 blocks?
```

## API Reference

For more information about Alchemy's APIs, refer to:

- [Alchemy API Documentation](https://docs.alchemy.com/)
