---
name: "XeroAPI/xero-mcp-server"
description: "An MCP server that integrates with Xero's API, allowing for standardized access to Xero's accounting and business features."
category: "Finance & Fintech"
repo: "XeroAPI/xero-mcp-server"
stars: 293
url: "https://github.com/XeroAPI/xero-mcp-server"
body_length: 9351
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Xero MCP Server

  Bu, Xero için Model Context Protocol (MCP) sunucu uygulamasıdır. MCP protokolü ile Xero API'si arasında bir köprü sağlayarak, Xero'nun muhasebe ve işletme özelliklerine standartlaştırılmış erişim imkanı tanır.

  ## Özellikler

  - Xero OAuth2 kimlik doğrulaması ve özel bağlantılar
  - İletişim yönetimi
  - Hesap Planı yönetimi
  - Fatura oluşturma ve yönetimi
  - MCP protokolü uyumluluğu

  ## Ön Koşullar

  - Node.js (v18 veya daha yüksek)
  - npm veya pnpm
  - API kimlik bilgileriyle birlikte Xero geliştirici hesabı

  ## Dokümantasyon ve Bağlantılar

  - [Xero Public API Dokümantasyonu](https://developer.xero.com/documentation/api/)
  - [Xero API Explorer](https://api-explorer.xero.com/)
  - [Xero OpenAPI Specs](https://github.com/XeroAPI/Xero-OpenAPI)
  - [Xero-Node Public API SDK Dokümantasyonu](https://xeroapi.github.io/xero-node/accounting)
  - [Geliştirici Dokümantasyonu](https://developer.xero.com/)

  ## Kurulum

  ### Xero Hesabı Oluşturma

  Henüz Xero hesabınız ve organizasyonunuz yoksa, [buradaki](https://www.xero.com/au/signup/) ücretsiz deneme sürümünü kullanarak bir hesap oluşturabilirsiniz.

  Başlamak için Demo Company kullanmanızı öneririz çünkü önceden yüklenmiş örnek verilerle gelir. Oturum açtıktan sonra, sol üst köşedeki açılır menüyü kullanarak "Demo Company" seçerek geçiş yapabilirsiniz. Demo Company'deki verileri sıfırlayabilir veya ülkeyi değiştirebilirsiniz; sol üst köşedeki açılır menüyü kullanarak [My Xero](https://my.xero.com) sayfasına giderek bunu yapabilirsiniz.

  NOT: Bordro özelindeki sorguları kullanmak için bölge NZ veya UK olmalıdır.

  ### Kimlik Doğrulama

  Xero MCP sunucusu 2 kimlik doğrulama modunu desteklemektedir:

  #### 1. Özel Bağlantılar

  Bu, test ve geliştirme için daha iyi bir seçimdir ve belirli bir organizasyon için client id ve secret belirtmenizi sağlar.
  Claude Desktop gibi 3. parti MCP istemcilerine entegre ediliyorsa da önerilen yaklaşımdır.

  ##### Xero Geliştirici Hesabınızı Yapılandırma

  Şu talimatları izleyerek bir Özel Bağlantı kurun: https://developer.xero.com/documentation/guides/oauth2/custom-connections/

  ##### Gerekli Kapsamlar

  Özel bağlantılar, oluşturulma zamanına bağlı olarak farklı kapsamlar gerektirir. **İlgili listedeki tüm kapsamlar özel bağlantınıza eklenmelidir:**

  | Özel Bağlantı Oluşturulma Tarihi | Gerekli Kapsamlar |
  |---------------------------|-----------------|
  | 29 Nisan 2026'dan önce | [SCOPES_V1](src/clients/xero-client.ts#L82-L90) (paket izinler) |
  | 29 Nisan 2026'dan itibaren | [SCOPES_V2](src/clients/xero-client.ts#L93-L112) (ayrıntılı izinler) |

  > **Not:** MCP sunucusu otomatik olarak önce V1 kapsamlarını dener ve gerekirse V2'ye geri döner.
  > 
  > Bunları `XERO_SCOPES` ortam değişkenini boşlukla ayrılmış kapsam listesine ayarlayarak geçersiz kılabilirsiniz.

  ##### MCP sunucusunu Claude Desktop ile entegre etme

  MCP sunucusunu Claude'a eklemek için Settings > Developer > Edit config seçeneğine gidin ve aşağıdakini `claude_desktop_config.json` dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "xero": {
        "command": "npx",
        "args": ["-y", "@xeroapi/xero-mcp-server@latest"],
        "env": {
          "XERO_CLIENT_ID": "your_client_id_here",
          "XERO_CLIENT_SECRET": "your_client_secret_here",
          "XERO_SCOPES": "accounting.invoices accounting.contacts accounting.settings"
        }
      }
    }
  }
  ```

  `XERO_SCOPES` değişkeni isteğe bağlıdır. Belirtilmezse, yukarıda listelenen varsayılan kapsamlar kullanılacaktır.

  NOT: [Node Version Manager](https://github.com/nvm-sh/nvm) kullanıyorsanız, `"command": "npx"` bölümünü executable'ın tam yolu ile değiştirin; Mac/Linux'ta `your_home_directory/.nvm/versions/node/v22.14.0/bin/npx` veya Windows'ta `"your_home_directory\\.nvm\\versions\\node\\v22.14.0\\bin\\npx"` gibi

  #### 2. Bearer Token

  Bu, çalışma zamanında birden fazla Xero hesabını desteklemek ve MCP istemcisinin gerektiği şekilde kimlik doğrulama akışını (PKCE gibi) yürütmesine izin vermek istiyorsanız daha iyi bir seçimdir.
  Bu durumda, aşağıdaki yapılandırmayı kullanın:

  ```json
  {
    "mcpServers": {
      "xero": {
        "command": "npx",
        "args": ["-y", "@xeroapi/xero-mcp-server@latest"],
        "env": {
          "XERO_CLIENT_BEARER_TOKEN": "your_bearer_token"
        }
      }
    }
  }
  ```

  NOT: Tanımlandığında `XERO_CLIENT_BEARER_TOKEN` değişkeni `XERO_CLIENT_ID` değişkeninden öncelikli olacaktır.

  ##### Bearer Token İçin Gerekli Kapsamlar

  Bir bearer token aldığınızda, uygun kapsamları istemelisiniz. İstemeniz gereken kapsamlar şunlardır:

  > **Not:** Bazı kapsamlar daha ayrıntılı kapsamlar lehine kullanımdan kaldırılmaktadır. Kullanımdan kaldırma zaman çizelgeleri hakkında ayrıntılar için [Xero OAuth 2.0 Kapsamları dokümantasyonuna](https://developer.xero.com/documentation/guides/oauth2/scopes/) bakın.

  ```
  accounting.transactions (Deprecated)
  accounting.transactions.read (Deprecated)
  accounting.invoices
  accounting.invoices.read
  accounting.payments
  accounting.payments.read
  accounting.banktransactions
  accounting.banktransactions.read
  accounting.manualjournals
  accounting.manualjournals.read
  accounting.reports.read (Deprecated)
  accounting.reports.aged.read
  accounting.reports.balancesheet.read
  accounting.reports.profitandloss.read
  accounting.reports.trialbalance.read
  accounting.contacts 
  accounting.settings 
  payroll.settings 
  payroll.employees 
  payroll.timesheets
  ```


  ### Mevcut MCP Komutları

  - `list-accounts`: Hesapların listesini alma
  - `list-contacts`: Xero'dan iletişim listesini alma
  - `list-credit-notes`: Alacak notları listesini alma
  - `list-invoices`: Faturaların listesini alma
  - `list-items`: Ürünlerin listesini alma
  - `list-manual-journals`: Manuel günlüklerin listesini alma
  - `list-organisation-details`: Organizasyon detaylarını alma
  - `list-profit-and-loss`: Kar ve zarar raporu alma
  - `list-quotes`: Tekliflerin listesini alma
  - `list-tax-rates`: Vergi oranlarının listesini alma
  - `list-payments`: Ödemelerin listesini alma
  - `list-trial-balance`: Mizan raporu alma
  - `list-bank-transactions`: Banka hesabı işlemlerinin listesini alma
  - `list-payroll-employees`: Bordro Çalışanlarının listesini alma
  - `list-report-balance-sheet`: Bilançoyu alma
  - `list-payroll-employee-leave`: Bordro Çalışanının izin kayıtlarını alma
  - `list-payroll-employee-leave-balances`: Bordro Çalışanının izin bakiyelerini alma
  - `list-payroll-employee-leave-types`: Bordro izin türlerinin listesini alma
  - `list-payroll-leave-periods`: Bordro Çalışanının izin dönemlerinin listesini alma
  - `list-payroll-leave-types`: Xero Bordro'da mevcut tüm izin türlerinin listesini alma
  - `list-timesheets`: Bordro Zaman Çizelgelerinin listesini alma
  - `list-aged-receivables-by-contact`: Bir iletişim için yaşlandırılmış alacakları alma
  - `list-aged-payables-by-contact`: Bir iletişim için yaşlandırılmış borçları alma
  - `list-contact-groups`: İletişim gruplarının listesini alma
  - `list-tracking-categories`: İzleme kategorilerinin listesini alma
  - `create-bank-transaction`: Yeni banka işlemi oluşturma
  - `create-contact`: Yeni iletişim oluşturma
  - `create-credit-note`: Yeni alacak notu oluşturma
  - `create-invoice`: Yeni fatura oluşturma
  - `create-item`: Yeni ürün oluşturma
  - `create-manual-journal`: Yeni manuel günlük oluşturma
  - `create-payment`: Yeni ödeme oluşturma
  - `create-quote`: Yeni teklif oluşturma
  - `create-payroll-timesheet`: Yeni Bordro Zaman Çizelgesi oluşturma
  - `create-tracking-category`: Yeni izleme kategorisi oluşturma
  - `create-tracking-option`: Yeni izleme seçeneği oluşturma
  - `update-bank-transaction`: Mevcut banka işlemini güncelleme
  - `update-contact`: Mevcut iletişimi güncelleme
  - `update-invoice`: Mevcut taslak faturayı güncelleme
  - `update-item`: Mevcut ürünü güncelleme
  - `update-manual-journal`: Mevcut manuel günlüğü güncelleme
  - `update-quote`: Mevcut taslak teklifi güncelleme
  - `update-credit-note`: Mevcut taslak alacak notunu güncelleme
  - `update-tracking-category`: Mevcut izleme kategorisini güncelleme
  - `update-tracking-options`: İzleme seçeneklerini güncelleme
  - `update-payroll-timesheet-line`: Mevcut Bordro Zaman Çizelgesinde bir satırı güncelleme
  - `approve-payroll-timesheet`: Bordro Zaman Çizelgesini onaylama
  - `revert-payroll-timesheet`: Onaylanmış Bordro Zaman Çizelgesini geri alma
  - `add-payroll-timesheet-line`: Mevcut Bordro Zaman Çizelgesine yeni satır ekleme
  - `delete-payroll-timesheet`: Mevcut Bordro Zaman Çizelgesini silme
  - `get-payroll-timesheet`: Mevcut Bordro Zaman Çizelgesini alma

  Ayrıntılı API dokümantasyonu için lütfen [MCP Protokolü Belirtimi](https://modelcontextprotocol.io/) sayfasına başvurun.

  ## Geliştiriciler İçin

  ### Kurulum

  ```bash
  # npm kullanarak
  npm install

  # pnpm kullanarak
  pnpm install
  ```

  ### Derleme Yapma

  ```bash
  # npm kullanarak
  npm run build

  # pnpm kullanarak
  pnpm build
  ```

  ### Claude Desktop ile Entegre Etme

  Geliştirmede Xero MCP sunucunuzu Claude Desktop'a bağlamak için Settings > Developer > Edit config seçeneğine gidin ve aşağıdakini `claude_desktop_config.json` dosyasına ekleyin:

  NOT: Windows'ta `args` yolunun klasörler arasındaki `\` karakterini kaçırdığından emin olun; örneğin `"C:\\projects\xero-mcp-server\\dist\\index.js"`

  ```json
  {
    "mcpServers": {
      "xero": {
        "command": "node",
        "args": ["insert-your-file-path-here/xero-mcp-server/dist/index.js"],
        "env": {
          "XERO_CLIENT_ID": "your_client_id_here",
          "XERO_CLIENT_SECRET": "your_client_secret_here"
        }
      }
    }
  }
  ```

  ## Lisans

  MIT

  ## Güvenlik

  Lütfen `.env` dosyanızı veya herhangi bir hassas kimlik bilgisini sürüm kontrolüne kaydetmeyin (güvenli varsayılan olarak `.gitignore` dosyasında yer almaktadır.)
---

# Xero MCP Server

This is a Model Context Protocol (MCP) server implementation for Xero. It provides a bridge between the MCP protocol and Xero's API, allowing for standardized access to Xero's accounting and business features.

## Features

- Xero OAuth2 authentication with custom connections
- Contact management
- Chart of Accounts management
- Invoice creation and management
- MCP protocol compliance

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- A Xero developer account with API credentials

## Docs and Links

- [Xero Public API Documentation](https://developer.xero.com/documentation/api/)
- [Xero API Explorer](https://api-explorer.xero.com/)
- [Xero OpenAPI Specs](https://github.com/XeroAPI/Xero-OpenAPI)
- [Xero-Node Public API SDK Docs](https://xeroapi.github.io/xero-node/accounting)
- [Developer Documentation](https://developer.xero.com/)

## Setup

### Create a Xero Account

If you don't already have a Xero account and organisation already, can create one by signing up [here](https://www.xero.com/au/signup/) using the free trial.

We recommend using a Demo Company to start with because it comes with some pre-loaded sample data. Once you are logged in, switch to it by using the top left-hand dropdown and selecting "Demo Company". You can reset the data on a Demo Company, or change the country, at any time by using the top left-hand dropdown and navigating to [My Xero](https://my.xero.com).

NOTE: To use Payroll-specific queries, the region should be either NZ or UK.

### Authentication

There are 2 modes of authentication supported in the Xero MCP server:

#### 1. Custom Connections

This is a better choice for testing and development which allows you to specify client id and secrets for a specific organisation.
It is also the recommended approach if you are integrating this into 3rd party MCP clients such as Claude Desktop.

##### Configuring your Xero Developer account

Set up a Custom Connection following these instructions: https://developer.xero.com/documentation/guides/oauth2/custom-connections/

##### Required Scopes

Custom connections require different scopes depending on when they were created. **All scopes in the relevant list must be added to your custom connection:**

| Custom Connection Created | Required Scopes |
|---------------------------|-----------------|
| Before Apr 29, 2026 | [SCOPES_V1](src/clients/xero-client.ts#L82-L90) (bundled permissions) |
| From Apr 29, 2026 | [SCOPES_V2](src/clients/xero-client.ts#L93-L112) (granular permissions) |

> **Note:** The MCP server automatically tries V1 scopes first and falls back to V2 if needed.
> 
> You can override these by setting the `XERO_SCOPES` environment variable to a space-separated list of scopes.

##### Integrating the MCP server with Claude Desktop

To add the MCP server to Claude go to Settings > Developer > Edit config and add the following to your claude_desktop_config.json file:

```json
{
  "mcpServers": {
    "xero": {
      "command": "npx",
      "args": ["-y", "@xeroapi/xero-mcp-server@latest"],
      "env": {
        "XERO_CLIENT_ID": "your_client_id_here",
        "XERO_CLIENT_SECRET": "your_client_secret_here",
        "XERO_SCOPES": "accounting.invoices accounting.contacts accounting.settings"
      }
    }
  }
}
```

The `XERO_SCOPES` variable is optional. If omitted, the default scopes listed above will be used.

NOTE: If you are using [Node Version Manager](https://github.com/nvm-sh/nvm) `"command": "npx"` section change it to be the full path to the executable, ie: `your_home_directory/.nvm/versions/node/v22.14.0/bin/npx` on Mac / Linux or `"your_home_directory\\.nvm\\versions\\node\\v22.14.0\\bin\\npx"` on Windows

#### 2. Bearer Token

This is a better choice if you are to support multiple Xero accounts at runtime and allow the MCP client to execute an auth flow (such as PKCE) as required.
In this case, use the following configuration:

```json
{
  "mcpServers": {
    "xero": {
      "command": "npx",
      "args": ["-y", "@xeroapi/xero-mcp-server@latest"],
      "env": {
        "XERO_CLIENT_BEARER_TOKEN": "your_bearer_token"
      }
    }
  }
}
```

NOTE: The `XERO_CLIENT_BEARER_TOKEN` will take precedence over the `XERO_CLIENT_ID` if defined.

##### Required Scopes for Bearer Token

When obtaining a bearer token, you must request the appropriate scopes. The scopes you request should be:

> **Note:** Some scopes are being deprecated in favour of more granular scopes. See the [Xero OAuth 2.0 Scopes documentation](https://developer.xero.com/documentation/guides/oauth2/scopes/) for details on deprecation timelines.

```
accounting.transactions (Deprecated)
accounting.transactions.read (Deprecated)
accounting.invoices
accounting.invoices.read
accounting.payments
accounting.payments.read
accounting.banktransactions
accounting.banktransactions.read
accounting.manualjournals
accounting.manualjournals.read
accounting.reports.read (Deprecated)
accounting.reports.aged.read
accounting.reports.balancesheet.read
accounting.reports.profitandloss.read
accounting.reports.trialbalance.read
accounting.contacts 
accounting.settings 
payroll.settings 
payroll.employees 
payroll.timesheets
```


### Available MCP Commands

- `list-accounts`: Retrieve a list of accounts
- `list-contacts`: Retrieve a list of contacts from Xero
- `list-credit-notes`: Retrieve a list of credit notes
- `list-invoices`: Retrieve a list of invoices
- `list-items`: Retrieve a list of items
- `list-manual-journals`: Retrieve a list of manual journals
- `list-organisation-details`: Retrieve details about an organisation
- `list-profit-and-loss`: Retrieve a profit and loss report
- `list-quotes`: Retrieve a list of quotes
- `list-tax-rates`: Retrieve a list of tax rates
- `list-payments`: Retrieve a list of payments
- `list-trial-balance`: Retrieve a trial balance report
- `list-bank-transactions`: Retrieve a list of bank account transactions
- `list-payroll-employees`: Retrieve a list of Payroll Employees
- `list-report-balance-sheet`: Retrieve a balance sheet report
- `list-payroll-employee-leave`: Retrieve a Payroll Employee's leave records
- `list-payroll-employee-leave-balances`: Retrieve a Payroll Employee's leave balances
- `list-payroll-employee-leave-types`: Retrieve a list of Payroll leave types
- `list-payroll-leave-periods`: Retrieve a list of a Payroll Employee's leave periods
- `list-payroll-leave-types`: Retrieve a list of all available leave types in Xero Payroll
- `list-timesheets`: Retrieve a list of Payroll Timesheets
- `list-aged-receivables-by-contact`: Retrieves aged receivables for a contact
- `list-aged-payables-by-contact`: Retrieves aged payables for a contact
- `list-contact-groups`: Retrieve a list of contact groups
- `list-tracking-categories`: Retrieve a list of tracking categories
- `create-bank-transaction`: Create a new bank transaction
- `create-contact`: Create a new contact
- `create-credit-note`: Create a new credit note
- `create-invoice`: Create a new invoice
- `create-item`: Create a new item
- `create-manual-journal`: Create a new manual journal
- `create-payment`: Create a new payment
- `create-quote`: Create a new quote
- `create-payroll-timesheet`: Create a new Payroll Timesheet
- `create-tracking-category`: Create a new tracking category
- `create-tracking-option`: Create a new tracking option
- `update-bank-transaction`: Update an existing bank transaction
- `update-contact`: Update an existing contact
- `update-invoice`: Update an existing draft invoice
- `update-item`: Update an existing item
- `update-manual-journal`: Update an existing manual journal
- `update-quote`: Update an existing draft quote
- `update-credit-note`: Update an existing draft credit note
- `update-tracking-category`: Update an existing tracking category
- `update-tracking-options`: Update tracking options
- `update-payroll-timesheet-line`: Update a line on an existing Payroll Timesheet
- `approve-payroll-timesheet`: Approve a Payroll Timesheet
- `revert-payroll-timesheet`: Revert an approved Payroll Timesheet
- `add-payroll-timesheet-line`: Add new line on an existing Payroll Timesheet
- `delete-payroll-timesheet`: Delete an existing Payroll Timesheet
- `get-payroll-timesheet`: Retrieve an existing Payroll Timesheet

For detailed API documentation, please refer to the [MCP Protocol Specification](https://modelcontextprotocol.io/).

## For Developers

### Installation

```bash
# Using npm
npm install

# Using pnpm
pnpm install
```

### Run a build

```bash
# Using npm
npm run build

# Using pnpm
pnpm build
```

### Integrating with Claude Desktop

To link your Xero MCP server in development to Claude Desktop go to Settings > Developer > Edit config and add the following to your `claude_desktop_config.json` file:

NOTE: For Windows ensure the `args` path escapes the `\` between folders ie. `"C:\\projects\xero-mcp-server\\dist\\index.js"`

```json
{
  "mcpServers": {
    "xero": {
      "command": "node",
      "args": ["insert-your-file-path-here/xero-mcp-server/dist/index.js"],
      "env": {
        "XERO_CLIENT_ID": "your_client_id_here",
        "XERO_CLIENT_SECRET": "your_client_secret_here"
      }
    }
  }
}
```

## License

MIT

## Security

Please do not commit your `.env` file or any sensitive credentials to version control (it is included in `.gitignore` as a safe default.)
