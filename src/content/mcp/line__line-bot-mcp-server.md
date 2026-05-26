---
name: "line/line-bot-mcp-server"
description: "MCP Server for Integrating LINE Official Account"
description_tr: "LINE Official Account ile entegrasyon sağlayan MCP Server'ı."
category: "Communication"
repo: "line/line-bot-mcp-server"
stars: 590
url: "https://github.com/line/line-bot-mcp-server"
body_length: 8920
license: "Apache-2.0"
language: "TypeScript"
body_tr: |-
  [Türkçe sürüm README'si burada](README.ja.md)

  # LINE Bot MCP Server

  [![npmjs](https://badge.fury.io/js/%40line%2Fline-bot-mcp-server.svg)](https://www.npmjs.com/package/@line/line-bot-mcp-server)

  [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol) sunucu uygulaması, LINE Messaging API'sini entegre ederek bir AI Ajanını LINE Resmi Hesabına bağlar.

  ![](https://raw.githubusercontent.com/line/line-bot-mcp-server/HEAD/assets/demo.png)

  > [!NOTE]
  > Bu depo önizleme sürümü olarak sağlanmaktadır. Deneysel amaçlar için sunulsa da, lütfen tam işlevsellik veya kapsamlı destek içermeyebileceğinin farkında olun.

  ## Araçlar

  1. **push_text_message**
     - LINE üzerinden bir kullanıcıya basit bir metin mesajı gönderin.
     - **Girdiler:**
       - `userId` (string?): Mesaj alacak kullanıcı ID'si. Varsayılan olarak DESTINATION_USER_ID'dir. `userId` veya `DESTINATION_USER_ID` ayarlanmalıdır.
       - `message.text` (string): Kullanıcıya gönderilecek düz metin içeriği.
  2. **push_flex_message**
     - LINE üzerinden bir kullanıcıya yüksek oranda özelleştirilebilir bir flex mesajı gönderin.
     - **Girdiler:**
       - `userId` (string?): Mesaj alacak kullanıcı ID'si. Varsayılan olarak DESTINATION_USER_ID'dir. `userId` veya `DESTINATION_USER_ID` ayarlanmalıdır.
       - `message.altText` (string): Flex mesajı görüntülenemediğinde gösterilen alternatif metin.
       - `message.contents` (any): Flex mesajının içeriği. Bu, mesajın düzenini ve bileşenlerini tanımlayan bir JSON nesnesidir.
       - `message.contents.type` (enum): Konteyner türü. Tek konteyner için 'bubble', birden fazla kaydırılabilir bubble için 'carousel'.
  3. **broadcast_text_message**
     - LINE üzerinden LINE Resmi Hesabınızı takip eden tüm kullanıcılara basit bir metin mesajı yayınlayın.
     - **Girdiler:**
       - `message.text` (string): Kullanıcılara gönderilecek düz metin içeriği.
  4. **broadcast_flex_message**
     - LINE üzerinden LINE Resmi Hesabınızı ekleyen tüm kullanıcılara yüksek oranda özelleştirilebilir bir flex mesajı yayınlayın.
     - **Girdiler:**
       - `message.altText` (string): Flex mesajı görüntülenemediğinde gösterilen alternatif metin.
       - `message.contents` (any): Flex mesajının içeriği. Bu, mesajın düzenini ve bileşenlerini tanımlayan bir JSON nesnesidir.
       - `message.contents.type` (enum): Konteyner türü. Tek konteyner için 'bubble', birden fazla kaydırılabilir bubble için 'carousel'.
  5. **get_profile**
     - Görünen ad, profil resmi URL'si, durum mesajı ve dil dahil olmak üzere bir LINE kullanıcısının ayrıntılı profil bilgilerini alın.
     - **Girdiler:**
       - `userId` (string?): Profilini almak istediğiniz kullanıcının ID'si. Varsayılan olarak DESTINATION_USER_ID'dir.
  6. **get_message_quota**
     - LINE Resmi Hesabının mesaj kotasını ve kullanımını alın. Bu, aylık mesaj limitini ve mevcut kullanımı gösterir.
     - **Girdiler:**
       - Yok
  7. **get_rich_menu_list**
     - LINE Resmi Hesabınızla ilişkilendirilen rich menü listesini alın.
     - **Girdiler:**
       - Yok
  8. **delete_rich_menu**
     - LINE Resmi Hesabınızdan bir rich menüyü silin.
     - **Girdiler:**
       - `richMenuId` (string): Silinecek rich menünün ID'si.
  9. **set_rich_menu_default**
      - Bir rich menüyü varsayılan rich menü olarak ayarlayın.
      - **Girdiler:**
        - `richMenuId` (string): Varsayılan olarak ayarlanacak rich menünün ID'si.
  10. **cancel_rich_menu_default**
      - Varsayılan rich menüyü iptal edin.
      - **Girdiler:**
        - Yok
  11. **create_rich_menu**
      - Verilen aksiyonlara dayalı bir rich menü oluşturun. Bir görüntü oluşturun ve yükleyin. Varsayılan olarak ayarlayın.
      - **Girdiler:**
        - `chatBarText` (string): Sohbet çubuğunda görüntülenen metin, aynı zamanda rich menü adı olarak kullanılır.
        - `actions` (array): Rich menünün aksiyonları. Minimum 1 ile maksimum 6 aksiyon belirtebilirsiniz. Her aksiyon aşağıdaki türlerden biri olabilir:
          - `postback`: Postback aksiyonu göndermek için
          - `message`: Metin mesajı göndermek için
          - `uri`: Bir URL açmak için
          - `datetimepicker`: Tarih/saat seçici açmak için
          - `camera`: Kamerayı açmak için
          - `cameraRoll`: Kamera rulosunu açmak için
          - `location`: Mevcut konumu göndermek için
          - `richmenuswitch`: Başka bir rich menüye geçmek için
          - `clipboard`: Metni panoya kopyalamak için

  12. **get_follower_ids**
      - LINE Resmi Hesabını arkadaş olarak ekleyen kullanıcıların kullanıcı ID'lerinin listesini alın. Bu, manuel olarak hazırlamadan mesaj göndermek için kullanıcı ID'leri elde etmenizi sağlar.
      - **Girdiler:**
        - `start` (string?): Sonraki kullanıcı ID'leri dizisini almak için devam jetonu. Önceki yanıtın `next` özelliğinde döndürülür.
        - `limit` (number?): Tek bir istekte alınacak maksimum kullanıcı ID'si sayısı.

  ## Kurulum (npx Kullanarak)

  gereksinimler:
  - Node.js v22 veya üstü

  ### Adım 1: LINE Resmi Hesabı Oluşturun

  Bu MCP sunucusu bir LINE Resmi Hesabı kullanır. Eğer hesabınız yoksa, lütfen [bu talimatları](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa) izleyerek oluşturun.

  Eğer zaten bir LINE Resmi Hesabınız varsa, lütfen [bu talimatları](https://developers.line.biz/en/docs/messaging-api/getting-started/#using-oa-manager) izleyerek LINE Resmi Hesabınız için Messaging API'sini etkinleştirin.

  ### Adım 2: AI Ajanını Yapılandırın

  Lütfen Claude Desktop veya Cline gibi bir AI Ajanj için aşağıdaki konfigürasyonu ekleyin.

  Ortam değişkenlerini veya argümanları şu şekilde ayarlayın:

  - `CHANNEL_ACCESS_TOKEN`: (gerekli) Channel Access Token. Bunu [bu talimatları](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token) izleyerek doğrulayabilirsiniz.
  - `DESTINATION_USER_ID`: (isteğe bağlı) Alıcının varsayılan kullanıcı ID'si. Eğer Tool'ün girdisi `userId` içermiyorsa, `DESTINATION_USER_ID` gereklidir. Bunu [bu talimatları](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-own-user-id) izleyerek doğrulayabilirsiniz.

  ```json
  {
    "mcpServers": {
      "line-bot": {
        "command": "npx",
        "args": [
          "@line/line-bot-mcp-server"
        ],
        "env": {
          "NPM_CONFIG_IGNORE_SCRIPTS": "true",
          "CHANNEL_ACCESS_TOKEN" : "FILL_HERE",
          "DESTINATION_USER_ID" : "FILL_HERE"
        }
      }
    }
  }
  ```

  ## Kurulum (Docker Kullanarak)

  ### Adım 1: LINE Resmi Hesabı Oluşturun

  Bu MCP sunucusu bir LINE Resmi Hesabı kullanır. Eğer hesabınız yoksa, lütfen [bu talimatları](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa) izleyerek oluşturun.

  Eğer zaten bir LINE Resmi Hesabınız varsa, lütfen [bu talimatları](https://developers.line.biz/en/docs/messaging-api/getting-started/#using-oa-manager) izleyerek LINE Resmi Hesabınız için Messaging API'sini etkinleştirin.


  ### Adım 2: line-bot-mcp-server görüntüsünü oluşturun

  Bu depoyu klonlayın:

  ```
  git clone git@github.com:line/line-bot-mcp-server.git
  ```

  Docker görüntüsünü oluşturun:

  ```
  docker build -t line/line-bot-mcp-server .
  ```

  ### Adım 3: AI Ajanını Yapılandırın

  Lütfen Claude Desktop veya Cline gibi bir AI Ajanj için aşağıdaki konfigürasyonu ekleyin.

  Ortam değişkenlerini veya argümanları şu şekilde ayarlayın:

  - `mcpServers.args`: (gerekli) `line-bot-mcp-server` yolu.
  - `CHANNEL_ACCESS_TOKEN`: (gerekli) Channel Access Token. Bunu [bu talimatları](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token) izleyerek doğrulayabilirsiniz.
  - `DESTINATION_USER_ID`: (isteğe bağlı) Alıcının varsayılan kullanıcı ID'si. Eğer Tool'ün girdisi `userId` içermiyorsa, `DESTINATION_USER_ID` gereklidir.
  Bunu [bu talimatları](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-own-user-id) izleyerek doğrulayabilirsiniz.


  ```json
  {
    "mcpServers": {
      "line-bot": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e",
          "CHANNEL_ACCESS_TOKEN",
          "-e",
          "DESTINATION_USER_ID",
          "line/line-bot-mcp-server"
        ],
        "env": {
          "CHANNEL_ACCESS_TOKEN" : "FILL_HERE",
          "DESTINATION_USER_ID" : "FILL_HERE"
        }
      }
    }
  }
  ```

  ## İnceleme ile Yerel Geliştirme

  Sunucuyu yerel olarak test etmek ve hata ayıklamak için MCP Inspector'ı kullanabilirsiniz.

  ### Ön Koşullar

  1. Depoyu klonlayın:
  ```bash
  git clone git@github.com:line/line-bot-mcp-server.git
  cd line-bot-mcp-server
  ```

  2. Bağımlılıkları yükleyin:
  ```bash
  npm install
  ```

  3. Projeyi oluşturun:
  ```bash
  npm run build
  ```

  ### Inspector'ı Çalıştırın

  Projeyi oluşturduktan sonra, MCP Inspector'ı başlatabilirsiniz:

  ```bash
  npx @modelcontextprotocol/inspector node dist/index.js \
    -e CHANNEL_ACCESS_TOKEN="YOUR_CHANNEL_ACCESS_TOKEN" \
    -e DESTINATION_USER_ID="YOUR_DESTINATION_USER_ID"
  ```

  Bu, LINE Bot MCP Server araçlarıyla etkileşim kurabileceğiniz ve işlevselliklerini test edebileceğiniz MCP Inspector arayüzünü başlatacaktır.

  ## Sürüm Oluşturma

  Bu proje anlamsal sürüm oluşturmaya saygı gösterir

  Bkz. http://semver.org/

  ## Katkıda Bulunma

  Katkı sağlamadan önce lütfen [CONTRIBUTING](./CONTRIBUTING.md) dosyasını kontrol edin.
---

[日本語版 READMEはこちら](README.ja.md)

# LINE Bot MCP Server

[![npmjs](https://badge.fury.io/js/%40line%2Fline-bot-mcp-server.svg)](https://www.npmjs.com/package/@line/line-bot-mcp-server)

[Model Context Protocol (MCP)](https://github.com/modelcontextprotocol) server implementation that integrates the LINE Messaging API to connect an AI Agent to the LINE Official Account.

![](https://raw.githubusercontent.com/line/line-bot-mcp-server/HEAD/assets/demo.png)

> [!NOTE]
> This repository is provided as a preview version. While we offer it for experimental purposes, please be aware that it may not include complete functionality or comprehensive support.

## Tools

1. **push_text_message**
   - Push a simple text message to a user via LINE.
   - **Inputs:**
     - `userId` (string?): The user ID to receive a message. Defaults to DESTINATION_USER_ID. Either `userId` or `DESTINATION_USER_ID` must be set.
     - `message.text` (string): The plain text content to send to the user.
2. **push_flex_message**
   - Push a highly customizable flex message to a user via LINE.
   - **Inputs:**
     - `userId` (string?): The user ID to receive a message. Defaults to DESTINATION_USER_ID. Either `userId` or `DESTINATION_USER_ID` must be set.
     - `message.altText` (string): Alternative text shown when flex message cannot be displayed.
     - `message.contents` (any): The contents of the flex message. This is a JSON object that defines the layout and components of the message.
     - `message.contents.type` (enum): Type of the container. 'bubble' for single container, 'carousel' for multiple swipeable bubbles.
3. **broadcast_text_message**
   - Broadcast a simple text message via LINE to all users who have followed your LINE Official Account.
   - **Inputs:**
     - `message.text` (string): The plain text content to send to the users.
4. **broadcast_flex_message**
   - Broadcast a highly customizable flex message via LINE to all users who have added your LINE Official Account.
   - **Inputs:**
     - `message.altText` (string): Alternative text shown when flex message cannot be displayed.
     - `message.contents` (any): The contents of the flex message. This is a JSON object that defines the layout and components of the message.
     - `message.contents.type` (enum): Type of the container. 'bubble' for single container, 'carousel' for multiple swipeable bubbles.
5. **get_profile**
   - Get detailed profile information of a LINE user including display name, profile picture URL, status message and language.
   - **Inputs:**
     - `userId` (string?): The ID of the user whose profile you want to retrieve. Defaults to DESTINATION_USER_ID.
6. **get_message_quota**
   - Get the message quota and consumption of the LINE Official Account. This shows the monthly message limit and current usage.
   - **Inputs:**
     - None
7. **get_rich_menu_list**
   - Get the list of rich menus associated with your LINE Official Account.
   - **Inputs:**
     - None
8. **delete_rich_menu**
   - Delete a rich menu from your LINE Official Account.
   - **Inputs:**
     - `richMenuId` (string): The ID of the rich menu to delete.
9. **set_rich_menu_default**
    - Set a rich menu as the default rich menu.
    - **Inputs:**
      - `richMenuId` (string): The ID of the rich menu to set as default.
10. **cancel_rich_menu_default**
    - Cancel the default rich menu.
    - **Inputs:**
      - None
11. **create_rich_menu**
    - Create a rich menu based on the given actions. Generate and upload an image. Set as default.
    - **Inputs:**
      - `chatBarText` (string): Text displayed in chat bar, also used as rich menu name.
      - `actions` (array): The actions of the rich menu. You can specify minimum 1 to maximum 6 actions. Each action can be one of the following types:
        - `postback`: For sending a postback action
        - `message`: For sending a text message
        - `uri`: For opening a URL
        - `datetimepicker`: For opening a date/time picker
        - `camera`: For opening the camera
        - `cameraRoll`: For opening the camera roll
        - `location`: For sending the current location
        - `richmenuswitch`: For switching to another rich menu
        - `clipboard`: For copying text to clipboard

12. **get_follower_ids**
    - Get a list of user IDs of users who have added the LINE Official Account as a friend. This allows you to obtain user IDs for sending messages without manually preparing them.
    - **Inputs:**
      - `start` (string?): Continuation token to get the next array of user IDs. Returned in the `next` property of a previous response.
      - `limit` (number?): The maximum number of user IDs to retrieve in a single request.

## Installation (Using npx)

requirements:
- Node.js v22 or later

### Step 1: Create LINE Official Account

This MCP server utilizes a LINE Official Account. If you do not have one, please create it by following [this instructions](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa). 

If you have a LINE Official Account, enable the Messaging API for your LINE Official Account by following [this instructions](https://developers.line.biz/en/docs/messaging-api/getting-started/#using-oa-manager).

### Step 2: Configure AI Agent

Please add the following configuration for an AI Agent like Claude Desktop or Cline. 

Set the environment variables or arguments as follows:

- `CHANNEL_ACCESS_TOKEN`: (required) Channel Access Token. You can confirm this by following [this instructions](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token).
- `DESTINATION_USER_ID`: (optional) The default user ID of the recipient. If the Tool's input does not include `userId`, `DESTINATION_USER_ID` is required. You can confirm this by following [this instructions](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-own-user-id).

```json
{
  "mcpServers": {
    "line-bot": {
      "command": "npx",
      "args": [
        "@line/line-bot-mcp-server"
      ],
      "env": {
        "NPM_CONFIG_IGNORE_SCRIPTS": "true",
        "CHANNEL_ACCESS_TOKEN" : "FILL_HERE",
        "DESTINATION_USER_ID" : "FILL_HERE"
      }
    }
  }
}
```

## Installation (Using Docker)

### Step 1: Create LINE Official Account

This MCP server utilizes a LINE Official Account. If you do not have one, please create it by following [this instructions](https://developers.line.biz/en/docs/messaging-api/getting-started/#create-oa).

If you have a LINE Official Account, enable the Messaging API for your LINE Official Account by following [this instructions](https://developers.line.biz/en/docs/messaging-api/getting-started/#using-oa-manager).


### Step 2: Build line-bot-mcp-server image

Clone this repository:

```
git clone git@github.com:line/line-bot-mcp-server.git
```

Build the Docker image:

```
docker build -t line/line-bot-mcp-server .
```

### Step 3: Configure AI Agent

Please add the following configuration for an AI Agent like Claude Desktop or Cline.

Set the environment variables or arguments as follows:

- `mcpServers.args`: (required) The path to `line-bot-mcp-server`.
- `CHANNEL_ACCESS_TOKEN`: (required) Channel Access Token. You can confirm this by following [this instructions](https://developers.line.biz/en/docs/basics/channel-access-token/#long-lived-channel-access-token).
- `DESTINATION_USER_ID`: (optional) The default user ID of the recipient. If the Tool's input does not include `userId`, `DESTINATION_USER_ID` is required.
You can confirm this by following [this instructions](https://developers.line.biz/en/docs/messaging-api/getting-user-ids/#get-own-user-id).


```json
{
  "mcpServers": {
    "line-bot": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "CHANNEL_ACCESS_TOKEN",
        "-e",
        "DESTINATION_USER_ID",
        "line/line-bot-mcp-server"
      ],
      "env": {
        "CHANNEL_ACCESS_TOKEN" : "FILL_HERE",
        "DESTINATION_USER_ID" : "FILL_HERE"
      }
    }
  }
}
```

## Local Development with Inspector

You can use the MCP Inspector to test and debug the server locally.

### Prerequisites

1. Clone the repository:
```bash
git clone git@github.com:line/line-bot-mcp-server.git
cd line-bot-mcp-server
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

### Run the Inspector

After building the project, you can start the MCP Inspector:

```bash
npx @modelcontextprotocol/inspector node dist/index.js \
  -e CHANNEL_ACCESS_TOKEN="YOUR_CHANNEL_ACCESS_TOKEN" \
  -e DESTINATION_USER_ID="YOUR_DESTINATION_USER_ID"
```

This will start the MCP Inspector interface where you can interact with the LINE Bot MCP Server tools and test their functionality.

## Versioning

This project respects semantic versioning

See http://semver.org/

## Contributing

Please check [CONTRIBUTING](./CONTRIBUTING.md) before making a contribution.
