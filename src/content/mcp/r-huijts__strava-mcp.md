---
name: "r-huijts/strava-mcp"
description: "A Model Context Protocol (MCP) server that connects to Strava API, providing tools to access Strava data through LLMs"
category: "Sports"
repo: "r-huijts/strava-mcp"
stars: 417
url: "https://github.com/r-huijts/strava-mcp"
body_length: 11472
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Strava MCP Server

  **AI'nizi kullanarak Strava verilerinizle konuşun.**

  Claude'u Strava hesabınıza bağlayın ve düz İngilizcede sorular sorun: "Bu ay ne kadar koştum?", "Son bisiklet turumu analiz et" veya "En hızlı segmentlerimi göster."

  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/r-huijts-strava-mcp-badge.png)](https://mseep.ai/app/r-huijts-strava-mcp)

  <a href="https://glama.ai/mcp/servers/@r-huijts/strava-mcp">
    
  </a>

  ---

  ## Bununla Ne Yapabilirsiniz?

  Bağlandıktan sonra, Claude'a tüm Strava verilerinize erişimi olan bir arkadaş gibi konuşun:

  ### 🏃 İlerlemenizi Takip Edin
  > "Bu ay kaç kilometre koştum?"
  > 
  > "Ocak ile Aralık arasında koşu istatistiklerimi karşılaştır"
  > 
  > "Şimdiye kadar en uzun bisiklet turumun ne?"

  ### 📊 Antrenmanlarınızı Analiz Edin
  > "Son bisiklet antrenmanımı parçala - güç, kalp atış hızı ve kadansı göster"
  > 
  > "Dün koşuşum sırasında kalp atış hızı bölgelerim nasıl görünüyordu?"
  > 
  > "Interval antrenmanımda her tur için ortalama tempom ne?"

  ### 🗺️ Rotaları ve Segmentleri Keşfedin
  > "Central Park'ın yakınında en popüler bisiklet segmentleri neler?"
  > 
  > "Yıldızlı segmentlerimi göster"
  > 
  > "Pazar sabahı rotamı GPX dosyası olarak dışa aktar"

  ### 🏆 Antrenörlük İçgörüleri Alın
  > "Bu haftaki antrenman yükümü analiz et"
  > 
  > "Mevcut fitness'im geçen ay ile nasıl kıyaslanıyor?"
  > 
  > "Bu yıl bisiklet performansımın bir özetini ver"

  ---

  ## Hızlı Başlangıç (3 Adım)

  ### Adım 1: Claude Desktop'a Ekleyin

  Claude Desktop konfigürasyon dosyanızı açın:
  - **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

  Dosyaya bunu ekleyin:

  ```json
  {
    "mcpServers": {
      "strava": {
        "command": "npx",
        "args": ["-y", "@r-huijts/strava-mcp-server"]
      }
    }
  }
  ```

  ### Adım 1 (alternatif): Claude Code'a Ekleyin

  Bu MCP server'ı claude code'a aşağıdaki komutla ekleyebilirsiniz:

  ```
  claude mcp add --transport stdio strava -- npx @r-huijts/strava-mcp-server
  ```

  Başarılı kurulumu aşağıdaki gibi doğrulayabilirsiniz:

  ```
  % claude mcp list
  Checking MCP server health...

  strava: npx @r-huijts/strava-mcp-server - ✓ Connected
  ```

  ### Adım 2: Claude Desktop'ı Yeniden Başlatın

  Yeni konfigürasyonu yüklemek için Claude Desktop'ı kapatıp yeniden açın.

  ### Adım 3: Strava Hesabınızı Bağlayın

  Claude'a basitçe şunu söyleyin:

  > **"Connect my Strava account"** (Strava hesabımı bağla)

  Bir tarayıcı penceresi açılacak. Strava API kimlik bilgilerinizi girin, uygulamayı yetkilendirin ve bitti!

  **Hepsi bu!** Aktiviteleriniz hakkında soru sormaya başlayın.

  ---

  ## Strava Hesabınızı Bağlama

  ### İlk Kez Kurulum

  "Connect my Strava account" dediğinizde işte ne olur:

  1. **Bir tarayıcı penceresi açılır** - kurulum sayfasını gösterir
  2. **Strava API kimlik bilgilerinizi girin** (Client ID ve Client Secret)
  3. **"Continue to Strava"'ya tıklayın** - Strava'ya yönlendirileceksiniz
  4. **Uygulamayı Strava'da yetkilendirin**
  5. **Başarı mesajını görün** - tarayıcıyı kapatabilirsiniz
  6. **Bitti!** Claude bağlı olduğunuzu doğrular

  Kimlik bilgileriniz `~/.config/strava-mcp/config.json` dosyasına yerel olarak kaydedilir ve oturumlar arasında kalıcı olur.

  ### Strava API Kimlik Bilgilerinizi Almak

  Ücretsiz bir Strava API uygulaması oluşturmanız gerekir (tek seferlik kurulum):

  1. [strava.com/settings/api](https://www.strava.com/settings/api) adresine gidin
  2. "Create an App"a tıklayın (veya mevcut uygulamanızı görüntüleyin)
  3. Formu doldurun:
     - **Application Name**: İstediğiniz herhangi bir ad (örneğin, "My Claude Assistant")
     - **Category**: Herhangi birini seçin
     - **Website**: Herhangi bir şey olabilir (örneğin, `http://localhost`)
     - **Authorization Callback Domain**: `localhost` olmalı
  4. **Client ID** ve **Client Secret**'ı kopyalayın

  Hepsi bu! Bunu sadece bir kez yapmanız gerekir.

  ### Bağlantınızı Yönetme

  - **Durumu kontrol edin**: "Am I connected to Strava?" (Strava'ya bağlı mıyım?)
  - **Yeniden bağlayın**: "Connect my Strava account" (kullanmak için `force: true`)
  - **Bağlantıyı kesin**: "Disconnect my Strava account" (Strava hesabımı çıkar)

  ---

  ## Kurulum Seçenekleri

  ### Seçenek A: Sadece Kullanın (Önerilen)

  Kurulum gerekli değil! Hızlı Başlangıç'taki `npx` komutu en son sürümü otomatik olarak indirir ve çalıştırır.

  ### Seçenek B: Küresel Olarak Yükleyin

  Eğer bir kez yüklememeyi tercih ederseniz:

  ```bash
  npm install -g @r-huijts/strava-mcp-server
  ```

  Ardından Claude config'inizi güncelleyin:

  ```json
  {
    "mcpServers": {
      "strava": {
        "command": "strava-mcp-server"
      }
    }
  }
  ```

  **Not:** Paket adı `@r-huijts/strava-mcp-server` olsa da, geriye dönük uyumluluk için çalıştırılabilir adı `strava-mcp-server` kalır.

  ### Seçenek C: Kaynaktan Derleyin

  Kodu değiştirmek isteyen geliştiriciler için:

     ```bash
     git clone https://github.com/r-huijts/strava-mcp.git
     cd strava-mcp
     npm install
     npm run build
     ```

  Ardından Claude'u yerel derlemesine işaret edin:

  ```json
  {
    "mcpServers": {
      "strava": {
        "command": "node",
        "args": ["/path/to/strava-mcp/dist/server.js"]
      }
    }
  }
  ```

  ---

  ## Örnek Konuşmalar

  ### Sabah Check-in

  > **Siz**: Bu haftada egzersiz için ne yaptım?
  >
  > **Claude**: Strava'daki bu haftanın aktivitelerine baktığımızda şunları tamamladınız:
  > - Pazartesi: 5,2km koşu (28:15)
  > - Çarşamba: 45km bisiklet turu (1:32:00)
  > - Cumartesi: 10km koşu (52:30)
  > 
  > Toplam: 3 aktivite içinde 60,2km. Harika tutarlılık!

  ### Antrenman Analizi

  > **Siz**: Son bisiklet antrenmanımı detaylı olarak analiz et
  >
  > **Claude**: İşte dün "Evening Loop" turununuzun analizi:
  > 
  > **Genel Bakış**
  > - Mesafe: 42,3 km
  > - Zaman: 1:28:45
  > - Ort. Hız: 28,6 km/s
  > 
  > **Güç Analizi**
  > - Ortalama Güç: 185W
  > - Normalleştirilmiş Güç: 198W
  > - Maksimum Güç: 520W
  > 
  > **Kalp Atış Hızı**
  > - Ortalama: 142 bpm
  > - Maksimum: 175 bpm
  > - Bölge 4+ saati: 23 dakika
  > 
  > Güç-kalp atış hızı oranınız iyi aerobik verimliliği gösteriyor...

  ### Yeni Rotalar Bulma

  > **Siz**: Boulder, Colorado'nun yakınında zorlu bisiklet tırmanışları bul
  >
  > **Claude**: Boulder'ın yakınında popüler tırmanış segmentleri:
  > 
  > 1. **Flagstaff Road** - 5,2km, %6,8 ort. gradient
  > 2. **Sunshine Canyon** - 3,8km, %7,2 ort. gradient  
  > 3. **Left Hand Canyon** - 8,1km, %4,5 ort. gradient
  > 
  > Bunlardan herhangi birini yıldızlamak istiyorum musunuz böylece daha sonra kolayca bulabilirsiniz?

  ---

  ## Mevcut Araçlar

  ### Hesap ve Profil

  | Ne sorabilirsiniz | Ne yapar |
  |------------------|----------|
  | "Connect my Strava account" | Strava'yı Claude'a bağlar |
  | "Check my Strava connection" | Bağlantı durumunu gösterir |
  | "Get my Strava profile" | Profil bilgilerinizi gösterir |
  | "What shoes do I have?" | Ayakkabılarınız ve kullanım mesafesini listeler |
  | "What are my training zones?" | KA ve güç bölgelerinizi gösterir |

  ### Aktiviteler

  | Ne sorabilirsiniz | Ne yapar |
  |------------------|----------|
  | "Show my recent activities" | Son antrenmanlarınızı listeler |
  | "Get all my runs from January" | Aktiviteleri filtrelerle getirir |
  | "Analyze activity 12345" | Bir aktivite hakkında detaylı bilgi |
  | "Show the laps from my last run" | Tur-tur analiz |
  | "Get heart rate data from my ride" | Zaman serisi antrenman verileri (optimize sıkıştırılmış format) |
  | "Show photos from my hike" | Aktivite fotoğrafları |

  ### İstatistikler ve İlerleme

  | Ne sorabilirsiniz | Ne yapar |
  |------------------|----------|
  | "What are my running stats?" | YTD ve tüm zamanlar toplamları |
  | "How far have I cycled this year?" | Aktivite toplamları türe göre |
  | "What's my longest ride?" | Kişisel rekorlar |

  ### Segmentler

  | Ne sorabilirsiniz | Ne yapar |
  |------------------|----------|
  | "Show my starred segments" | Favori segmentleriniz |
  | "Find segments near [location]" | Popüler segmentleri keşfet |
  | "Get details on segment 12345" | Segment bilgisi ve liderlik tablosu |
  | "Star this segment" | Favori olarak kaydet |
  | "Show my efforts on [segment]" | Bir segmentteki denemeleriniz |

  ### Rotalar

  | Ne sorabilirsiniz | Ne yapar |
  |------------------|----------|
  | "List my saved routes" | Oluşturduğunuz rotalar |
  | "Get details for my [route name]" | Rota bilgisi |
  | "Export [route] as GPX" | GPS cihazları için indir |
  | "Export [route] as TCX" | GPS cihazları için indir |

  ### Kulüpler

  | Ne sorabilirsiniz | Ne yapar |
  |------------------|----------|
  | "What clubs am I in?" | Strava kulüplerini listeler |

  ---

  ## Sorun Giderme

  ### "Connect my Strava account" tarayıcı açmıyor

  - Claude Desktop'ın MCP server'ı çalıştırdığından emin olun (Claude'da hataları kontrol edin)
  - Claude Desktop'ı yeniden başlatmayı deneyin
  - Port 8111'in bir firewall tarafından engellenmediğini kontrol edin

  ### "Authentication failed" veya "Invalid token"

  - Token'ınız süresi bitmiş olabilir - "Connect my Strava account" deyin yeniden bağlanmak için
  - Strava API uygulamanızın [strava.com/settings/api](https://www.strava.com/settings/api) adresinde hala etkin olduğundan emin olun

  ### "Missing credentials" hatası

  - OAuth akışını tamamlamanız gerekir - "Connect my Strava account" deyin
  - Ortam değişkenlerini kullanıyorsanız, 4'ünün tümünün ayarlandığından emin olun (Geliştirici bölümüne bakın)

  ### Claude Strava araçlarını görmüyor

  - `claude_desktop_config.json`'inizin geçerli JSON olduğundan emin olun (trailing commas yok!)
  - Config değişiklikleri yaptıktan sonra Claude Desktop'ı yeniden başlatın
  - Hata mesajleri için Claude'un geliştirici konsolunu kontrol edin

  ### Paket adı değişikliğinden sonra JSONRPC.ProtocolTransportError

  `@r-huijts/strava-mcp-server`'a güncelledikten sonra JSONRPC hatası alıyorsanız:

  1. **npx cache'i temizleyin**: Terminal'de `rm -rf ~/.npm/_npx` çalıştırın
  2. **Config'i doğrulayın** - `@r-huijts/strava-mcp-server` kullanıyor (eski `strava-mcp-server` değil)
  3. **Claude Desktop'ı tamamen yeniden başlatın** (kapat ve yeniden aç)
  4. **Manuel test edin**: `npx -y @r-huijts/strava-mcp-server` çalıştırın - "Starting Strava MCP Server v1.2.1..." görmelisiniz

  ---

  ## Geliştiriciler İçin

  <details>
  <summary>Teknik detayları görmek için tıklayın</summary>

  ### Ortam Değişkenleri

  Tarayıcı tabanlı kimlik doğrulama yerine ortam değişkenlerini ayarlayabilirsiniz:

  | Değişken | Açıklama |
  |----------|----------|
  | `STRAVA_CLIENT_ID` | Strava Application Client ID'niz |
  | `STRAVA_CLIENT_SECRET` | Strava Application Client Secret'ınız |
  | `STRAVA_ACCESS_TOKEN` | OAuth access token |
  | `STRAVA_REFRESH_TOKEN` | OAuth refresh token |
  | `ROUTE_EXPORT_PATH` | GPX/TCX dışa aktarmaları için dizin |

  ### Token Yenileme

  Server, süresi dolmuş token'ları otomatik olarak yeniler. Yeni token'lar hem `process.env` hem de `~/.config/strava-mcp/config.json` dosyasına kaydedilir.

  ### Config Önceliği

  1. Ortam değişkenleri (en yüksek)
  2. `~/.config/strava-mcp/config.json`
  3. Yerel `.env` dosyası

  ### Derleme ve Test

  ```bash
  npm install
  npm run build
  npm test
  ```

  ### Aktivite Akışları Optimizasyonu

  `get-activity-streams` aracı, varsayılan olarak sıkıştırılmış bir format kullanır ve yük boyutunu ~70-80% azaltır:

  - **Sıkıştırılmış format** (varsayılan): Meta verili ham diziler, ~70-80% daha küçük, LLM işleme için ideal
  - **Ayrıntılı format**: İnsan tarafından okunabilir nesneler ve biçimlendirilmiş değerler (geriye dönük uyumlu)
  - **Akıllı chunking**: Büyük aktiviteler otomatik olarak ~50KB parçalara ayrılır
  - **İsteğe bağlı downsampling**: Çok büyük veri setlerini anahtar özellikleri korurken azaltabilir

  Sıkıştırılmış format, LLM'lerin ham sayısal verileri anlaması için kapsamlı meta veriler (birimler, açıklamalar, istatistikler) içerir.

  ### API Referansı

  Server, Model Context Protocol (MCP) uygular ve Strava API v3 için 25 araç ortaya çıkarır. Uygulama ayrıntıları için `src/tools/` dizinindeki kaynak koda bakın.

  ### Katkı Sağlama

  Katkılar hoş geldindir! Lütfen bir Pull Request gönderin.

  </details>

  ---

  ## Lisans

  MIT License - ayrıntılar için LICENSE dosyasına bakın.

  ---

  **Sorular?** [GitHub](https://github.com/r-huijts/strava-mcp/issues) üzerinde bir issue açın.
---

# Strava MCP Server

**Talk to your Strava data using AI.**

Connect Claude to your Strava account and ask questions in plain English: "How far did I run this month?", "Analyze my last ride", or "Show me my fastest segments."

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/r-huijts-strava-mcp-badge.png)](https://mseep.ai/app/r-huijts-strava-mcp)

<a href="https://glama.ai/mcp/servers/@r-huijts/strava-mcp">
  
</a>

---

## What Can You Do With This?

Once connected, just talk to Claude like you're talking to a friend who has access to all your Strava data:

### 🏃 Track Your Progress
> "How many kilometers did I run this month?"
> 
> "Compare my running stats from January to December"
> 
> "What's my longest ride ever?"

### 📊 Analyze Your Workouts
> "Break down my last cycling workout - show me power, heart rate, and cadence"
> 
> "How did my heart rate zones look during yesterday's run?"
> 
> "What was my average pace for each lap in my interval training?"

### 🗺️ Explore Routes & Segments
> "What are the most popular cycling segments near Central Park?"
> 
> "Show me my starred segments"
> 
> "Export my Sunday morning route as a GPX file"

### 🏆 Get Coaching Insights
> "Analyze my training load this week"
> 
> "How does my current fitness compare to last month?"
> 
> "Give me a summary of my cycling performance this year"

---

## Quick Start (3 Steps)

### Step 1: Add to Claude Desktop

Open your Claude Desktop configuration file:
- **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add this to the file:

```json
{
  "mcpServers": {
    "strava": {
      "command": "npx",
      "args": ["-y", "@r-huijts/strava-mcp-server"]
    }
  }
}
```

### Step 1 (alternative): Add to Claude Code

You can add this MCP server to claude code with the following command:

```
claude mcp add --transport stdio strava -- npx @r-huijts/strava-mcp-server
```

You can confirm successful instalation as follows:

```
% claude mcp list
Checking MCP server health...

strava: npx @r-huijts/strava-mcp-server - ✓ Connected
```

### Step 2: Restart Claude Desktop

Close and reopen Claude Desktop to load the new configuration.

### Step 3: Connect Your Strava

Just say to Claude:

> **"Connect my Strava account"**

A browser window will open. Enter your Strava API credentials, authorize the app, and you're done!

**That's it!** Start asking about your activities.

---

## Connecting Your Strava Account

### First Time Setup

When you say "Connect my Strava account", here's what happens:

1. **A browser window opens** showing a setup page
2. **Enter your Strava API credentials** (Client ID and Client Secret)
3. **Click "Continue to Strava"** - you'll be redirected to Strava
4. **Authorize the app** on Strava's website
5. **See the success message** - you can close the browser
6. **Done!** Claude confirms you're connected

Your credentials are saved locally at `~/.config/strava-mcp/config.json` and persist across sessions.

### Getting Your Strava API Credentials

You need to create a free Strava API application (one-time setup):

1. Go to [strava.com/settings/api](https://www.strava.com/settings/api)
2. Click "Create an App" (or view your existing app)
3. Fill in the form:
   - **Application Name**: Anything you want (e.g., "My Claude Assistant")
   - **Category**: Choose any
   - **Website**: Can be anything (e.g., `http://localhost`)
   - **Authorization Callback Domain**: Must be `localhost`
4. Copy your **Client ID** and **Client Secret**

That's it! You only need to do this once.

### Managing Your Connection

- **Check status**: "Am I connected to Strava?"
- **Reconnect**: "Connect my Strava account" (use `force: true` to reconnect)
- **Disconnect**: "Disconnect my Strava account"

---

## Installation Options

### Option A: Just Use It (Recommended)

No installation needed! The `npx` command in the Quick Start automatically downloads and runs the latest version.

### Option B: Install Globally

If you prefer to install it once:

```bash
npm install -g @r-huijts/strava-mcp-server
```

Then update your Claude config to use:

```json
{
  "mcpServers": {
    "strava": {
      "command": "strava-mcp-server"
    }
  }
}
```

**Note:** Even though the package name is `@r-huijts/strava-mcp-server`, the executable name remains `strava-mcp-server` for backward compatibility.

### Option C: Build from Source

For developers who want to modify the code:

   ```bash
   git clone https://github.com/r-huijts/strava-mcp.git
   cd strava-mcp
   npm install
   npm run build
   ```

Then point Claude to your local build:

```json
{
  "mcpServers": {
    "strava": {
      "command": "node",
      "args": ["/path/to/strava-mcp/dist/server.js"]
    }
  }
}
```

---

## Example Conversations

### Morning Check-in

> **You**: What did I do for exercise this week?
>
> **Claude**: Looking at your Strava activities this week, you completed:
> - Monday: 5.2km run (28:15)
> - Wednesday: 45km bike ride (1:32:00)
> - Saturday: 10km run (52:30)
> 
> Total: 60.2km across 3 activities. Nice consistency!

### Workout Analysis

> **You**: Analyze my last cycling workout in detail
>
> **Claude**: Here's a breakdown of your ride "Evening Loop" from yesterday:
> 
> **Overview**
> - Distance: 42.3 km
> - Time: 1:28:45
> - Avg Speed: 28.6 km/h
> 
> **Power Analysis**
> - Average Power: 185W
> - Normalized Power: 198W
> - Max Power: 520W
> 
> **Heart Rate**
> - Average: 142 bpm
> - Max: 175 bpm
> - Time in Zone 4+: 23 minutes
> 
> Your power-to-heart-rate ratio suggests good aerobic efficiency...

### Finding New Routes

> **You**: Find me some challenging cycling climbs near Boulder, Colorado
>
> **Claude**: Here are popular climbing segments near Boulder:
> 
> 1. **Flagstaff Road** - 5.2km, 6.8% avg grade
> 2. **Sunshine Canyon** - 3.8km, 7.2% avg grade  
> 3. **Left Hand Canyon** - 8.1km, 4.5% avg grade
> 
> Want me to star any of these so you can find them easily later?

---

## Available Tools

### Account & Profile

| What you can ask | What it does |
|------------------|--------------|
| "Connect my Strava account" | Links your Strava to Claude |
| "Check my Strava connection" | Shows connection status |
| "Get my Strava profile" | Shows your profile info |
| "What shoes do I have?" | Lists your shoes and usage distance |
| "What are my training zones?" | Shows HR and power zones |

### Activities

| What you can ask | What it does |
|------------------|--------------|
| "Show my recent activities" | Lists your latest workouts |
| "Get all my runs from January" | Fetches activities with filters |
| "Analyze activity 12345" | Detailed info about one activity |
| "Show the laps from my last run" | Lap-by-lap breakdown |
| "Get heart rate data from my ride" | Time-series workout data (optimized compact format) |
| "Show photos from my hike" | Activity photos |

### Stats & Progress

| What you can ask | What it does |
|------------------|--------------|
| "What are my running stats?" | YTD and all-time totals |
| "How far have I cycled this year?" | Activity totals by type |
| "What's my longest ride?" | Personal records |

### Segments

| What you can ask | What it does |
|------------------|--------------|
| "Show my starred segments" | Your favorite segments |
| "Find segments near [location]" | Discover popular segments |
| "Get details on segment 12345" | Segment info and leaderboard |
| "Star this segment" | Save to favorites |
| "Show my efforts on [segment]" | Your attempts on a segment |

### Routes

| What you can ask | What it does |
|------------------|--------------|
| "List my saved routes" | Your created routes |
| "Get details for my [route name]" | Route info |
| "Export [route] as GPX" | Download for GPS devices |
| "Export [route] as TCX" | Download for GPS devices |

### Clubs

| What you can ask | What it does |
|------------------|--------------|
| "What clubs am I in?" | Lists your Strava clubs |

---

## Troubleshooting

### "Connect my Strava account" doesn't open a browser

- Make sure Claude Desktop is running the MCP server (check for errors in Claude)
- Try restarting Claude Desktop
- Check that port 8111 isn't blocked by a firewall

### "Authentication failed" or "Invalid token"

- Your token may have expired - say "Connect my Strava account" to reconnect
- Make sure your Strava API application is still active at [strava.com/settings/api](https://www.strava.com/settings/api)

### "Missing credentials" error

- You need to complete the OAuth flow - say "Connect my Strava account"
- If you're using environment variables, make sure all 4 are set (see Developer section)

### Claude doesn't see the Strava tools

- Make sure your `claude_desktop_config.json` is valid JSON (no trailing commas!)
- Restart Claude Desktop after making config changes
- Check Claude's developer console for error messages

### JSONRPC.ProtocolTransportError after package name change

If you're getting a JSONRPC error after updating to `@r-huijts/strava-mcp-server`:

1. **Clear npx cache**: Run `rm -rf ~/.npm/_npx` in terminal
2. **Verify config** uses `@r-huijts/strava-mcp-server` (not the old `strava-mcp-server`)
3. **Restart Claude Desktop** completely (quit and reopen)
4. **Test manually**: Run `npx -y @r-huijts/strava-mcp-server` - you should see "Starting Strava MCP Server v1.2.1..."

---

## For Developers

<details>
<summary>Click to expand technical details</summary>

### Environment Variables

Instead of using the browser-based auth, you can set environment variables:

| Variable | Description |
|----------|-------------|
| `STRAVA_CLIENT_ID` | Your Strava Application Client ID |
| `STRAVA_CLIENT_SECRET` | Your Strava Application Client Secret |
| `STRAVA_ACCESS_TOKEN` | OAuth access token |
| `STRAVA_REFRESH_TOKEN` | OAuth refresh token |
| `ROUTE_EXPORT_PATH` | Directory for GPX/TCX exports |

### Token Refresh

The server automatically refreshes expired tokens. New tokens are saved to both `process.env` and `~/.config/strava-mcp/config.json`.

### Config Priority

1. Environment variables (highest)
2. `~/.config/strava-mcp/config.json`
3. Local `.env` file

### Building & Testing

```bash
npm install
npm run build
npm test
```

### Activity Streams Optimization

The `get-activity-streams` tool uses a compact format by default, reducing payload size by ~70-80% while preserving all data:

- **Compact format** (default): Raw arrays with metadata, ~70-80% smaller, ideal for LLM processing
- **Verbose format**: Human-readable objects with formatted values (backward compatible)
- **Smart chunking**: Large activities automatically split into ~50KB chunks
- **Optional downsampling**: Can reduce very large datasets while preserving key features

The compact format includes comprehensive metadata (units, descriptions, statistics) so LLMs can understand the raw numeric data.

### API Reference

The server implements the Model Context Protocol (MCP) and exposes 25 tools for Strava API v3. See the source code in `src/tools/` for implementation details.

### Contributing

Contributions welcome! Please submit a Pull Request.

</details>

---

## License

MIT License - see LICENSE file for details.

---

**Questions?** Open an issue on [GitHub](https://github.com/r-huijts/strava-mcp/issues).
