---
name: "SaseQ/discord-mcp"
description: "A MCP server for the Discord integration. Enable your AI assistants to seamlessly interact with Discord. Enhance your Discord experience with powerful automation capabilities."
description_tr: "Discord entegrasyonu için bir MCP sunucusu. AI asistanlarınızın Discord ile sorunsuzca etkileşim kurmasını sağlayın ve güçlü otomasyon yetenekleriyle Discord deneyiminizi geliştirin."
category: "Communication"
repo: "SaseQ/discord-mcp"
stars: 325
url: "https://github.com/SaseQ/discord-mcp"
body_length: 14986
license: "MIT"
language: "Java"
body_tr: |-
  <div align="center">
    
  </div>
  <hr>
  <div align="center" style="line-height: 1;">
      <a href="https://github.com/modelcontextprotocol/servers" target="_blank" style="margin: 2px;">
          
      </a>
      <a href="https://discord.gg/5Uvxe5jteM" target="_blank" style="margin: 2px;">
          
      </a>
      <a href="https://github.com/SaseQ/discord-mcp/blob/main/LICENSE" target="_blank" style="margin: 2px;">
          
      </a>
  </div>


  ## 📖 Açıklama

  Discord API için [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) sunucusu [(JDA)](https://jda.wiki/) kullanılarak oluşturulmuştur.
  MCP uyumlu uygulamalar (Claude, ChatGPT vb.) ile Discord botlarını entegre etmek için tasarlanmıştır. AI asistanlarının Discord ile etkileşime girmesini sağlayarak
  kanalları yönetme, mesaj gönderme ve sunucu bilgilerini alma imkanı verir. Güçlü Discord otomasyonu ve AI odaklı iş akışları oluşturmak için idealdir.


  ## 🔬 Kurulum

  ### ► 🐳 Docker Kurulumu (Önerilen)

  > [!NOTE]
  > Docker kurulumu gereklidir. Tam talimatlar [docker.com](https://www.docker.com/products/docker-desktop/) üzerinde bulunabilir.

  #### 1) Yerel ortam değişkenlerini ayarlayın
  ```bash
  export DISCORD_TOKEN="YOUR_DISCORD_BOT_TOKEN"
  export DISCORD_GUILD_ID="OPTIONAL_DEFAULT_SERVER_ID"
  export SPRING_PROFILES_ACTIVE=http
  ```

  > [!IMPORTANT]
  > Discord bot oluşturma ve token alma talimatları [burada](https://discordjs.guide/legacy/preparations/app-setup) bulunabilir.

  > [!TIP]
  > `DISCORD_GUILD_ID` ortam değişkeni isteğe bağlıdır.
  > 
  > Sağlandığında, varsayılan bir Discord sunucu ID'si ayarlar, böylece `guildId` parametresini kabul eden herhangi bir araç bunu atlayabilir.

  #### 2) Docker konteynerini çalıştırın
  ```bash
  docker run -d -i \
    --name discord-mcp \
    --restart unless-stopped \
    -p 8085:8085 \
    -e SPRING_PROFILES_ACTIVE \
    -e DISCORD_TOKEN \
    -e DISCORD_GUILD_ID \
    saseq/discord-mcp:latest
  ```

  Varsayılan MCP endpoint URL'si (HTTP profili): `http://localhost:8085/mcp`

  <details>
      <summary style="font-size: 1.35em; font-weight: bold;">
          🐋 Docker Compose Kurulumu
      </summary>

  #### 1) Repoyu klonlayın
  ```bash
  git clone https://github.com/SaseQ/discord-mcp
  ```

  #### 2) Proje dizinine gidin
  ```bash
  cd discord-mcp
  ```

  #### 3) Yerel runtime ortamı oluşturun
  ```bash
  cat > .env <<EOF
  SPRING_PROFILES_ACTIVE=http
  DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN>
  DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID>
  EOF
  ```

  #### 4) Paylaşılan bir MCP sunucu konteynerini başlatın
  ```bash
  docker compose up -d --build
  ```

  #### 5) Doğrulayın
  ```bash
  docker ps --filter name=discord-mcp
  curl -fsS http://localhost:8085/actuator/health
  ```

  > [!TIP]
  > `LOGGING_PATTERN_CONSOLE` öğesini manuel olarak ayarlamanıza gerek yoktur.
  > Günlüğe kaydetme hem `http` hem de eski `stdio` modları için otomatik olarak yapılandırılır.

  Varsayılan MCP endpoint URL'si (HTTP profili): `http://localhost:8085/mcp`

  Health endpoint'i (Actuator): `http://localhost:8085/actuator/health`

  </details>

  <details>
      <summary style="font-size: 1.35em; font-weight: bold;">
          🔧 Manuel Kurulum
      </summary>

  #### 1) Repoyu klonlayın
  ```bash
  git clone https://github.com/SaseQ/discord-mcp
  ```

  #### 2) Projeyi derleyin

  > NOT: mvn komutunu kullanmak için Maven kurulumu gereklidir. Tam talimatlar [burada](https://www.baeldung.com/install-maven-on-windows-linux-mac) bulunabilir.

  ```bash
  cd discord-mcp
  mvn clean package # JAR dosyası /target dizininde kullanılabilir olacak
  ```

  #### 3) AI istemcisini yapılandırın
  JAR dosyasını uzun süreli çalışan bir sunucu olarak çalıştırın:

  ```bash
  DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN> \
  DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID> \
  SPRING_PROFILES_ACTIVE=http \
  java -jar /absolute/path/to/discord-mcp-1.0.0.jar
  ```

  > NOT: `DISCORD_GUILD_ID` ortam değişkeni isteğe bağlıdır. Sağlandığında, varsayılan bir Discord sunucu ID'si ayarlar, böylece `guildId` parametresini kabul eden herhangi bir araç bunu atlayabilir.

  Varsayılan MCP endpoint URL'si (HTTP profili): `http://localhost:8085/mcp`

  </details>

  ## 🔗 Bağlantılar

  ### ► 🗞️ Varsayılan config.json Bağlantısı

  Önerilen (HTTP singleton modu):
  ```json
  {
    "mcpServers": {
      "discord-mcp": {
        "url": "http://localhost:8085/mcp"
      }
    }
  }
  ```

  Eski mod (stdio, her istemci oturumu için yeni bir işlem/konteyner başlatır):
  ```json
  {
    "mcpServers": {
      "discord-mcp": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "-e",
          "DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN>",
          "-e",
          "DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID>",
          "saseq/discord-mcp:latest"
        ]
      }
    }
  }
  ```

  <details>
      <summary style="font-size: 1.35em; font-weight: bold;">
          ⌨️ Claude Code Bağlantısı
      </summary>

  Önerilen (HTTP singleton modu):
  ```bash
  claude mcp add discord-mcp --transport http http://localhost:8085/mcp
  ```

  Eski mod (stdio, her istemci oturumu için yeni bir işlem/konteyner başlatır):
  ```bash
  claude mcp add discord-mcp -- docker run --rm -i -e DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN> -e DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID> saseq/discord-mcp:latest
  ```

  </details>

  <details>
      <summary style="font-size: 1.35em; font-weight: bold;">
          🤖 Codex CLI Bağlantısı
      </summary>

  ```bash
  codex mcp add discord-mcp --url http://localhost:8085/mcp
  codex mcp list
  ```

  </details>

  <details>
      <summary style="font-size: 1.35em; font-weight: bold;">
          🦞 OpenClaw Bağlantısı
      </summary>

  Bu komutu çalıştırın:
  ```bash
  openclaw mcp set discord-mcp '{"url":"http://localhost:8085/mcp","transport":"streamable-http"}'
  openclaw mcp list
  ```

  VEYA

  Aşağıdaki yapılandırmayı OpenClaw `~/.openclaw/config.json` dosyanıza yapıştırın:
  ```json
  {
    "mcp": {
      "servers": {
        "discord-mcp": {
          "url": "http://localhost:8085/mcp",
          "transport": "streamable-http"
        }
      }
    }
  }
  ```

  </details>

  <details>
      <summary style="font-size: 1.35em; font-weight: bold;">
          🖲 Cursor Bağlantısı
      </summary>

  Şu yola gidin: `Settings` -> `Cursor Settings` -> `MCP` -> `Add new global MCP server`

  Aşağıdaki yapılandırmayı Cursor `~/.cursor/mcp.json` dosyanıza yapıştırmak önerilen yaklaşımdır. Ayrıca proje klasörünüzde `.cursor/mcp.json` oluşturarak belirli bir projeye kurulum yapabilirsiniz. Daha fazla bilgi için [Cursor MCP dokümanları](https://docs.cursor.com/context/model-context-protocol) bölümüne bakın.
  ```json
  {
    "mcpServers": {
      "discord-mcp": {
        "url": "http://localhost:8085/mcp"
      }
    }
  }
  ```

  </details>

  <details>
      <summary style="font-size: 1.35em; font-weight: bold;">
          🚀 n8n Bağlantısı
      </summary>

  #### n8n'de Bağlantı Kurun
  1. n8n'i açın ve bir **MCP Client** node'u ekleyin.
  2. **HTTP** veya **Streamable HTTP** transport'unu seçin (n8n sürümü/node seçeneklerine bağlı olarak).
  3. Sunucu URL'sini şu şekilde ayarlayın: `http://localhost:8085/mcp`
  4. Node'u kaydedin ve bağlantıyı test edin.
  5. Bağlandıktan sonra, `discord-mcp` tarafından sunulan Discord araçlarını iş akışınız içinde kullanabilirsiniz.

  #### Notlar
  - n8n Docker'da çalışıyorsa, `localhost` n8n konteynerine işaret edebilir, ana bilgisayarınıza değil.
  - Bu durumda Docker hizmet adını veya başka erişilebilir bir host'u kullanın: `http://discord-mcp:8085/mcp`

  </details>

  <details>
      <summary style="font-size: 1.35em; font-weight: bold;">
          🖥 Claude Desktop Bağlantısı
      </summary>

  STDIO yerel yapılandırması (Varsayılan, eski):
  > Aşağıdaki yapılandırmayı Claude Desktop `claude_desktop_config.json` dosyanıza yapıştırın.
  ```json
  {
    "mcpServers": {
      "discord-mcp": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "-e",
          "DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN>",
          "-e",
          "DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID>",
          "saseq/discord-mcp:latest"
        ]
      }
    }
  }
  ```

  Uzak MCP Bağlayıcı:
  1. Claude Desktop'ı açın ve `Settings` -> `Connectors` öğesine gidin.
  2. Özel bir bağlayıcı ekleyin ve MCP URL'sini sunucu endpoint'inize ayarlayın (örneğin `https://<PUBLIC_HOST>/mcp`).
  3. Kaydedin ve yeniden bağlanın.

  > Claude Desktop uzak bağlayıcıları Connectors UI aracılığıyla yönetilir (`claude_desktop_config.json` üzerinden değil).
  > `http://localhost:8085/mcp` yalnızca makinenizden erişilebilir. Claude Desktop uzak bağlayıcıları için endpoint'i halka açık HTTPS ile açığa çıkarın (örneğin tunnel/reverse proxy).

  </details>


  ## 🛠️ Mevcut Araçlar

  #### Sunucu Bilgileri
  - [`get_server_info`](): Discord sunucusu hakkında ayrıntılı bilgi alın

  #### Kullanıcı Yönetimi
  - [`get_user_id_by_name`](): Ping kullanımı için guild içinde username ile Discord kullanıcısının ID'sini alın `<@id>`
  - [`send_private_message`](): Belirli bir kullanıcıya özel mesaj gönderin
  - [`edit_private_message`](): Belirli bir kullanıcıdan özel mesajı düzenleyin
  - [`delete_private_message`](): Belirli bir kullanıcıdan özel mesajı silin
  - [`read_private_messages`](): Belirli bir kullanıcının özel mesaj geçmişini okuyun (ek meta verileri içerir, `count` 1-100 ve isteğe bağlı cursor'u destekler: `before` veya `after` veya `around`)

  #### Mesaj Yönetimi
  - [`send_message`](): Belirli bir kanala mesaj gönderin
  - [`edit_message`](): Belirli bir kanaldan mesajı düzenleyin
  - [`delete_message`](): Belirli bir kanaldan mesajı silin
  - [`read_messages`](): Belirli bir kanalın mesaj geçmişini okuyun (ek meta verileri içerir, `count` 1-100 ve isteğe bağlı cursor'u destekler: `before` veya `after` veya `around`)
  - [`add_reaction`](): Belirli bir mesaja tepki (emoji) ekleyin
  - [`remove_reaction`](): Bir mesajdan belirtilen tepkiyi (emoji) kaldırın

  #### Kanal Yönetimi
  - [`create_text_channel`](): Yeni bir metin kanalı oluşturun
  - [`edit_text_channel`](): Metin kanalı ayarlarını düzenleyin (ad, konu, nsfw, slowmode, kategori, konum)
  - [`delete_channel`](): Kanalı silin
  - [`find_channel`](): Ad ve sunucu ID'sini kullanarak kanal türünü ve ID'sini bulun
  - [`list_channels`](): Tüm kanalların listesi
  - [`get_channel_info`](): Kanal hakkında ayrıntılı bilgi alın
  - [`move_channel`](): Kanalı başka bir kategoriye taşıyın ve/veya konumunu değiştirin

  #### Kategori Yönetimi
  - [`create_category`](): Kanallar için yeni bir kategori oluşturun
  - [`edit_category`](): Kategorisi düzenleyin (yeniden adlandırın veya konumunu taşıyın)
  - [`delete_category`](): Kategoriyi silin
  - [`find_category`](): Ad ve sunucu ID'sini kullanarak kategori ID'sini bulun
  - [`list_channels_in_category`](): Belirli bir kategorideki kanalların listesi

  #### Webhook Yönetimi
  - [`create_webhook`](): Belirli bir kanal üzerinde yeni bir webhook oluşturun
  - [`delete_webhook`](): Webhook'u silin
  - [`list_webhooks`](): Belirli bir kanal üzerindeki webhook'ların listesi
  - [`send_webhook_message`](): Webhook aracılığıyla mesaj gönderin

  #### Rol Yönetimi
  - [`list_roles`](): Sunucudaki tüm rollerin listesini detaylarıyla alın
  - [`create_role`](): Sunucuda yeni bir rol oluşturun
  - [`edit_role`](): Mevcut bir rolün ayarlarını değiştirin
  - [`delete_role`](): Bir rolü sunucudan kalıcı olarak silin
  - [`assign_role`](): Bir kullanıcıya rol atayın
  - [`remove_role`](): Bir kullanıcıdan rolü kaldırın

  #### Moderasyon ve Kullanıcı Yönetimi
  - [`kick_member`](): Üyeyi sunucudan çıkarın
  - [`ban_member`](): Kullanıcıyı sunucudan yasaklayın
  - [`unban_member`](): Bir kullanıcının yasağını kaldırın
  - [`timeout_member`](): Bir üyenin iletişimini belirli bir süre için devre dışı bırakın
  - [`remove_timeout`](): Süresi dolmadan bir üyenin timeout'unu (sustur) kaldırın
  - [`set_nickname`](): Sunucudaki bir üyenin takma adını değiştirin
  - [`get_bans`](): Sunucudaki yasaklı kullanıcıların listesini yasak nedenleriyle döndürün

  #### Ses ve Sahne Kanalı Yönetimi
  - [`create_voice_channel`](): Guild'de yeni bir ses kanalı oluşturun
  - [`create_stage_channel`](): Ses etkinlikleri için yeni bir sahne kanalı oluşturun
  - [`edit_voice_channel`](): Ses veya sahne kanalı ayarlarını düzenleyin (ad, bitrate, kullanıcı limiti, bölge)
  - [`move_member`](): Üyeyi başka bir ses kanalına taşıyın
  - [`disconnect_member`](): Üyeyi mevcut ses kanalından ayırın
  - [`modify_voice_state`](): Ses kanallarında üyeyi sunucu sesi kısma veya kapatma

  #### Planlanan Etkinlik Yönetimi
  - [`create_guild_scheduled_event`](): Sunucuda yeni bir etkinlik planlayın (ses, sahne veya harici)
  - [`edit_guild_scheduled_event`](): Etkinlik ayrıntılarını değiştirin veya durumunu değiştirin (başlat, tamamla, iptal)
  - [`delete_guild_scheduled_event`](): Planlanan etkinliği kalıcı olarak silin
  - [`list_guild_scheduled_events`](): Sunucudaki tüm etkin ve planlanan etkinlikleri listeleyin
  - [`get_guild_scheduled_event_users`](): Planlanan etkinliğe ilgi duyan kullanıcıların listesini alın

  #### Kanal İzin Geçişleri
  - [`list_channel_permission_overwrites`](): Bir kanalın tüm izin geçişlerini rol/üye ayrımına göre listeleyin
  - [`upsert_role_channel_permissions`](): Bir kanal üzerinde bir rol için izin geçişi oluşturun veya güncelleyin
  - [`upsert_member_channel_permissions`](): Bir kanal üzerinde bir üye için izin geçişi oluşturun veya güncelleyin
  - [`delete_channel_permission_overwrite`](): Bir kanal üzerinden bir rol veya üye için izin geçişini silin

  #### Davet Yönetimi
  - [`create_invite`](): Belirli bir kanal için yeni bir davet linki oluşturun
  - [`list_invites`](): Sunucudaki tüm aktif davetleri istatistikleriyle listeleyin
  - [`delete_invite`](): Daveti sil (iptal) ve linkin çalışmasını durdurun
  - [`get_invite_details`](): Belirli bir daveti hakkında ayrıntı alın (herhangi bir halka açık davet için çalışır)

  #### Forum Yönetimi
  - [`create_forum_channel`](): Yeni bir forum kanalı oluşturun
  - [`edit_forum_channel`](): Forum kanalı ayarlarını düzenleyin (ad, konu, nsfw, slowmode, kategori, konum, varsayılan sıralama, varsayılan düzen)
  - [`list_forum_channels`](): Sunucudaki tüm forum kanallarını listeleyin
  - [`get_forum_channel_info`](): Etiketler ve ayarlar dahil olmak üzere forum kanalı hakkında ayrıntılı bilgi alın
  - [`list_forum_tags`](): Forum kanalında kullanılabilir tüm etiketleri listeleyin
  - [`create_forum_post`](): Forum kanalında ilk mesajla yeni bir forum gönderisi (thread) oluşturun
  - [`list_forum_posts`](): Forum kanalında etkin gönderileri (thread'leri) listeleyin
  - [`modify_forum_post`](): Forum gönderisini değiştirin: kilitle/kilidi aç, arşivle/arşivden çıkar, sabitle/sabitlemeyi kaldır veya uygulanan etiketleri değiştirin

  #### Emoji Yönetimi
  - [`list_emojis`](): Sunucudaki tüm özel emoji'leri listeleyin
  - [`get_emoji_details`](): Belirli bir özel emoji hakkında ayrıntılı bilgi alın
  - [`create_emoji`](): Sunucuya yeni bir özel emoji yükleyin (base64 veya resim URL'si, maksimum 256KB)
  - [`edit_emoji`](): Mevcut bir emoji'nin adını veya rol kısıtlamalarını düzenleyin
  - [`delete_emoji`](): Özel bir emoji'yi sunucudan kalıcı olarak silin

  > `DISCORD_GUILD_ID` ayarlanırsa, `guildId` parametresi yukarıdaki tüm araçlar için isteğe bağlı olur.

  <hr>

  Daha ayrıntılı örnekler [Wiki](https://github.com/SaseQ/discord-mcp/wiki) üzerinde bulunabilir.
---

<div align="center">
  
</div>
<hr>
<div align="center" style="line-height: 1;">
    <a href="https://github.com/modelcontextprotocol/servers" target="_blank" style="margin: 2px;">
        
    </a>
    <a href="https://discord.gg/5Uvxe5jteM" target="_blank" style="margin: 2px;">
        
    </a>
    <a href="https://github.com/SaseQ/discord-mcp/blob/main/LICENSE" target="_blank" style="margin: 2px;">
        
    </a>
</div>


## 📖 Description

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server for the Discord API using [(JDA)](https://jda.wiki/),
designed to integrate Discord bots with MCP-compatible applications such as Claude, ChatGPT etc. It allows AI assistants to interact with 
Discord by managing channels, sending messages, and retrieving server information. Ideal for building powerful Discord automation and AI-driven workflows.


## 🔬 Installation

### ► 🐳 Docker Installation (Recommended)

> [!NOTE]
> Docker installation is required. Full instructions can be found on [docker.com](https://www.docker.com/products/docker-desktop/).

#### 1) Set local env variables
```bash
export DISCORD_TOKEN="YOUR_DISCORD_BOT_TOKEN"
export DISCORD_GUILD_ID="OPTIONAL_DEFAULT_SERVER_ID"
export SPRING_PROFILES_ACTIVE=http
```

> [!IMPORTANT]
> Instructions for creating a Discord bot and retrieving its token can be found [here](https://discordjs.guide/legacy/preparations/app-setup).

> [!TIP]
> The `DISCORD_GUILD_ID` env variable is optional.
> 
> When provided, it sets a default Discord server ID so any tool that accepts a `guildId` parameter can omit it.

#### 2) Run the Docker container
```bash
docker run -d -i \
  --name discord-mcp \
  --restart unless-stopped \
  -p 8085:8085 \
  -e SPRING_PROFILES_ACTIVE \
  -e DISCORD_TOKEN \
  -e DISCORD_GUILD_ID \
  saseq/discord-mcp:latest
```

Default MCP endpoint URL (HTTP profile): `http://localhost:8085/mcp`

<details>
    <summary style="font-size: 1.35em; font-weight: bold;">
        🐋 Docker Compose Installation
    </summary>

#### 1) Clone the repository
```bash
git clone https://github.com/SaseQ/discord-mcp
```

#### 2) Go to the project directory
```bash
cd discord-mcp
```

#### 3) Create local runtime env
```bash
cat > .env <<EOF
SPRING_PROFILES_ACTIVE=http
DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN>
DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID>
EOF
```

#### 4) Start one shared MCP server container
```bash
docker compose up -d --build
```

#### 5) Verify
```bash
docker ps --filter name=discord-mcp
curl -fsS http://localhost:8085/actuator/health
```

> [!TIP]
> You do not need to set `LOGGING_PATTERN_CONSOLE` manually.
> Logging is configured automatically for both `http` and legacy `stdio` modes.

Default MCP endpoint URL (HTTP profile): `http://localhost:8085/mcp`

Health endpoint (Actuator): `http://localhost:8085/actuator/health`

</details>

<details>
    <summary style="font-size: 1.35em; font-weight: bold;">
        🔧 Manual Installation
    </summary>

#### 1) Clone the repository
```bash
git clone https://github.com/SaseQ/discord-mcp
```

#### 2) Build the project

> NOTE: Maven installation is required to use the mvn command. Full instructions can be found [here](https://www.baeldung.com/install-maven-on-windows-linux-mac).

```bash
cd discord-mcp
mvn clean package # The jar file will be available in the /target directory
```

#### 3) Configure AI client
Run the JAR as a long-running server:

```bash
DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN> \
DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID> \
SPRING_PROFILES_ACTIVE=http \
java -jar /absolute/path/to/discord-mcp-1.0.0.jar
```

> NOTE: The `DISCORD_GUILD_ID` environment variable is optional. When provided, it sets a default Discord server ID so any tool that accepts a `guildId` parameter can omit it.

Default MCP endpoint URL (HTTP profile): `http://localhost:8085/mcp`

</details>

## 🔗 Connections

### ► 🗞️ Default config.json Connection

Recommended (HTTP singleton mode):
```json
{
  "mcpServers": {
    "discord-mcp": {
      "url": "http://localhost:8085/mcp"
    }
  }
}
```

Legacy mode (stdio, starts a new process/container per client session):
```json
{
  "mcpServers": {
    "discord-mcp": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN>",
        "-e",
        "DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID>",
        "saseq/discord-mcp:latest"
      ]
    }
  }
}
```

<details>
    <summary style="font-size: 1.35em; font-weight: bold;">
        ⌨️ Claude Code Connection
    </summary>

Recommended (HTTP singleton mode):
```bash
claude mcp add discord-mcp --transport http http://localhost:8085/mcp
```

Legacy mode (stdio, starts a new process/container per client session):
```bash
claude mcp add discord-mcp -- docker run --rm -i -e DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN> -e DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID> saseq/discord-mcp:latest
```

</details>

<details>
    <summary style="font-size: 1.35em; font-weight: bold;">
        🤖 Codex CLI Connection
    </summary>

```bash
codex mcp add discord-mcp --url http://localhost:8085/mcp
codex mcp list
```

</details>

<details>
    <summary style="font-size: 1.35em; font-weight: bold;">
        🦞 OpenClaw Connection
    </summary>

Run this command:
```bash
openclaw mcp set discord-mcp '{"url":"http://localhost:8085/mcp","transport":"streamable-http"}'
openclaw mcp list
```

OR

Pasting the following configuration into your OpenClaw `~/.openclaw/config.json` file:
```json
{
  "mcp": {
    "servers": {
      "discord-mcp": {
        "url": "http://localhost:8085/mcp",
        "transport": "streamable-http"
      }
    }
  }
}
```

</details>

<details>
    <summary style="font-size: 1.35em; font-weight: bold;">
        🖲 Cursor Connection
    </summary>

Go to: `Settings` -> `Cursor Settings` -> `MCP` -> `Add new global MCP server`

Pasting the following configuration into your Cursor `~/.cursor/mcp.json` file is the recommended approach. You may also install in a specific project by creating `.cursor/mcp.json` in your project folder. See [Cursor MCP docs](https://docs.cursor.com/context/model-context-protocol) for more info.
```json
{
  "mcpServers": {
    "discord-mcp": {
      "url": "http://localhost:8085/mcp"
    }
  }
}
```

</details>

<details>
    <summary style="font-size: 1.35em; font-weight: bold;">
        🚀 n8n Connection
    </summary>

#### Connect in n8n
1. Open n8n and add an **MCP Client** node.
2. Choose **HTTP** or **Streamable HTTP** transport (depending on your n8n version/node options).
3. Set the server URL to: `http://localhost:8085/mcp`
4. Save the node and test the connection.
5. After connecting, you can use the available Discord tools exposed by `discord-mcp` inside your workflow.

#### Notes
- If n8n is running in Docker, `localhost` may point to the n8n container itself, not your host machine.
- In that case, use the Docker service name or another reachable host, for example: `http://discord-mcp:8085/mcp`

</details>

<details>
    <summary style="font-size: 1.35em; font-weight: bold;">
        🖥 Claude Desktop Connection
    </summary>



STDIO local config (Default, legacy):
> Past the following configuration into your Claude Desktop `claude_desktop_config.json` file.
```json
{
  "mcpServers": {
    "discord-mcp": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "DISCORD_TOKEN=<YOUR_DISCORD_BOT_TOKEN>",
        "-e",
        "DISCORD_GUILD_ID=<OPTIONAL_DEFAULT_SERVER_ID>",
        "saseq/discord-mcp:latest"
      ]
    }
  }
}
```

Remote MCP Connector:
1. Open Claude Desktop and go to `Settings` -> `Connectors`.
2. Add a custom connector and set MCP URL to your server endpoint (for example `https://<PUBLIC_HOST>/mcp`).
3. Save and reconnect.

> Claude Desktop remote connectors are managed via Connectors UI (not `claude_desktop_config.json`).
> `http://localhost:8085/mcp` is reachable only from your machine. For Claude Desktop remote connectors, expose the endpoint with public HTTPS (for example tunnel/reverse proxy).

</details>


## 🛠️ Available Tools

#### Server Information
- [`get_server_info`](): Get detailed discord server information

#### User Management
- [`get_user_id_by_name`](): Get a Discord user's ID by username in a guild for ping usage `<@id>`
- [`send_private_message`](): Send a private message to a specific user
- [`edit_private_message`](): Edit a private message from a specific user
- [`delete_private_message`](): Delete a private message from a specific user
- [`read_private_messages`](): Read private message history from a specific user (includes attachment metadata, supports `count` 1-100 and optional cursor: `before` or `after` or `around`)

#### Message Management
- [`send_message`](): Send a message to a specific channel
- [`edit_message`](): Edit a message from a specific channel
- [`delete_message`](): Delete a message from a specific channel
- [`read_messages`](): Read message history from a specific channel (includes attachment metadata, supports `count` 1-100 and optional cursor: `before` or `after` or `around`)
- [`add_reaction`](): Add a reaction (emoji) to a specific message
- [`remove_reaction`](): Remove a specified reaction (emoji) from a message

#### Channel Management
- [`create_text_channel`](): Create a new text channel
- [`edit_text_channel`](): Edit settings of a text channel (name, topic, nsfw, slowmode, category, position)
- [`delete_channel`](): Delete a channel
- [`find_channel`](): Find a channel type and ID using name and server ID
- [`list_channels`](): List of all channels
- [`get_channel_info`](): Get detailed information about a channel
- [`move_channel`](): Move a channel to another category and/or change its position

#### Category Management
- [`create_category`](): Create a new category for channels
- [`edit_category`](): Edit a category (rename or move position)
- [`delete_category`](): Delete a category
- [`find_category`](): Find a category ID using name and server ID
- [`list_channels_in_category`](): List of channels in a specific category

#### Webhook Management
- [`create_webhook`](): Create a new webhook on a specific channel
- [`delete_webhook`](): Delete a webhook
- [`list_webhooks`](): List of webhooks on a specific channel
- [`send_webhook_message`](): Send a message via webhook

#### Role Management
- [`list_roles`](): Get a list of all roles on the server with their details
- [`create_role`](): Create a new role on the server
- [`edit_role`](): Modify an existing role's settings
- [`delete_role`](): Permanently delete a role from the server
- [`assign_role`](): Assign a role to a user
- [`remove_role`](): Remove a role from a user

#### Moderation and User Management
- [`kick_member`](): Kicks a member from the server
- [`ban_member`](): Bans a user from the server
- [`unban_member`](): Removes a ban from a user
- [`timeout_member`](): Disables communication for a member for a specified duration
- [`remove_timeout`](): Removes a timeout (unmute) from a member before it expires
- [`set_nickname`](): Changes a member's nickname on the server
- [`get_bans`](): Returns a list of banned users on the server with ban reasons

#### Voice & Stage Channel Management
- [`create_voice_channel`](): Create a new voice channel in a guild
- [`create_stage_channel`](): Create a new stage channel for audio events
- [`edit_voice_channel`](): Edit settings of a voice or stage channel (name, bitrate, user limit, region)
- [`move_member`](): Move a member to another voice channel
- [`disconnect_member`](): Disconnect a member from their current voice channel
- [`modify_voice_state`](): Server mute or deafen a member in voice channels

#### Scheduled Events Management
- [`create_guild_scheduled_event`](): Schedule a new event on the server (voice, stage, or external)
- [`edit_guild_scheduled_event`](): Modify event details or change its status (start, complete, cancel)
- [`delete_guild_scheduled_event`](): Permanently delete a scheduled event
- [`list_guild_scheduled_events`](): List all active and scheduled events on the server
- [`get_guild_scheduled_event_users`](): Get list of users interested in a scheduled event

#### Channel Permission Overwrites
- [`list_channel_permission_overwrites`](): List all permission overwrites for a channel with role/member breakdown
- [`upsert_role_channel_permissions`](): Create or update permission overwrite for a role on a channel
- [`upsert_member_channel_permissions`](): Create or update permission overwrite for a member on a channel
- [`delete_channel_permission_overwrite`](): Delete a permission overwrite for a role or member from a channel

#### Invite Management
- [`create_invite`](): Create a new invite link for a specific channel
- [`list_invites`](): List all active invites on the server with their statistics
- [`delete_invite`](): Delete (revoke) an invite so the link stops working
- [`get_invite_details`](): Get details about a specific invite (works for any public invite)

#### Forum Management
- [`create_forum_channel`](): Create a new forum channel
- [`edit_forum_channel`](): Edit settings of a forum channel (name, topic, nsfw, slowmode, category, position, default sort, default layout)
- [`list_forum_channels`](): List all forum channels in the server
- [`get_forum_channel_info`](): Get detailed information about a forum channel including tags and settings
- [`list_forum_tags`](): List all available tags in a forum channel
- [`create_forum_post`](): Create a new forum post (thread) with an initial message in a forum channel
- [`list_forum_posts`](): List active posts (threads) in a forum channel
- [`modify_forum_post`](): Modify a forum post: lock/unlock, archive/unarchive, pin/unpin, or change applied tags

#### Emoji Management
- [`list_emojis`](): List all custom emojis on the server
- [`get_emoji_details`](): Get detailed information about a specific custom emoji
- [`create_emoji`](): Upload a new custom emoji to the server (base64 or image URL, max 256KB)
- [`edit_emoji`](): Edit an existing emoji's name or role restrictions
- [`delete_emoji`](): Permanently delete a custom emoji from the server

>If `DISCORD_GUILD_ID` is set, the `guildId` parameter becomes optional for all tools above.

<hr>

A more detailed examples can be found in the [Wiki](https://github.com/SaseQ/discord-mcp/wiki).
