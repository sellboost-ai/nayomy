---
name: "chigwell/telegram-mcp"
description: "Telegram API integration for accessing user data, managing dialogs (chats, channels, groups), retrieving messages, sending messages and handling read status."
category: "Communication"
repo: "chigwell/telegram-mcp"
stars: 1133
url: "https://github.com/chigwell/telegram-mcp"
body_length: 14565
license: "Apache-2.0"
language: "Python"
body_tr: |-
  <div align="center">
    
  </div>

  ![MCP Badge](https://badge.mcpx.dev)
  [![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
  [![Python Lint & Format Check](https://github.com/chigwell/telegram-mcp/actions/workflows/python-lint-format.yml/badge.svg)](https://github.com/chigwell/telegram-mcp/actions/workflows/python-lint-format.yml)
  [![Docker Build & Compose Validation](https://github.com/chigwell/telegram-mcp/actions/workflows/docker-build.yml/badge.svg)](https://github.com/chigwell/telegram-mcp/actions/workflows/docker-build.yml)

  Claude, Cursor ve diğer MCP uyumlu istemciler için Telegram entegrasyonu. Telegram hesabı, sohbet, mesaj, iletişim, medya, klasör ve yönetici işlemlerini [Model Context Protocol](https://modelcontextprotocol.io/) aracılığıyla [Telethon](https://docs.telethon.dev/) kullanarak açığa çıkarır.

  ## 🤖 MCP Uygulamada

  Claude'da temel Telegram MCP kullanımı:

  ![Telegram MCP in action](https://raw.githubusercontent.com/chigwell/telegram-mcp/HEAD/screenshots/1.png)

  Claude'tan sohbet geçmişini analiz etmesi ve yanıt göndermesi istenmesi:

  ![Telegram MCP Request](https://raw.githubusercontent.com/chigwell/telegram-mcp/HEAD/screenshots/2.png)

  Mesaj başarıyla gönderildi:

  ![Telegram MCP Result](https://raw.githubusercontent.com/chigwell/telegram-mcp/HEAD/screenshots/3.png)

  ## İçindekiler

  - [Neler Yapabilir](#neler-yapabilir)
  - [Gereksinimler](#gereksinimler)
  - [Hızlı Başlangıç](#hızlı-başlangıç)
  - [MCP İstemci Yapılandırması](#mcp-istemci-yapılandırması)
  - [Çok Hesaplı Kurulum](#çok-hesaplı-kurulum)
  - [Proxy Desteği](#proxy-desteği)
  - [Dosya Yolu Güvenliği](#dosya-yolu-güvenliği)
  - [Docker](#docker)
  - [Geliştirme](#geliştirme)
  - [Güvenlik Notları](#güvenlik-notları)
  - [Sorun Giderme](#sorun-giderme)
  - [Lisans](#lisans)

  ## Neler Yapabilir

  Sunucu şu alanlara ayrılmış 80+ MCP aracı içerir:

  - **Hesaplar:** yapılandırılmış hesapları listele ve tool çağrılarını hesap etiketi ile yönlendir.
  - **Sohbetler ve gruplar:** sohbetleri listele, meta verileri incele, grup/kanal oluştur, sohbetlere katıl veya ayrıl, kullanıcıları davet et, yöneticileri yönet, yasakları, varsayılan izinleri, yavaş modu, konuları, davet bağlantılarını, ortak sohbetleri, okundu bilgisini ve mesaj bağlantılarını yönet.
  - **Mesajlar:** gönder, zamanla, düzenle, sil, ilet, sabitle, sabitlemeyi kaldır, okundu işaretle, yanıtla, ara, bağlamı incele, anketler oluştur, reaksiyonları yönet, satır içi düğmeleri incele ve satır içi geri çağırıları basıl.
  - **İletişimler:** listele, ara, ekle, sil, engelle, engellemeyi kaldır, içe aktar, dışa aktar, doğrudan sohbetleri incele ve son iletişim etkileşimlerini bul.
  - **Medya:** dosya gönder, medya indir, dosya yükle, sesli not gönder, etiketler, GIF'ler gönder ve mesaj medyasını incele.
  - **Profil ve gizlilik:** kendi hesap bilgilerini al, profil alanlarını güncelle, profil fotoğraflarını ayarla veya sil, gizlilik ayarlarını incele, kullanıcı bilgilerini/fotoğraflarını/durumunu al ve bot komutlarını yönet.
  - **Klasörler ve taslaklar:** Telegram klasörlerini listele, oluştur, güncelle, yeniden sırala ve sil; taslakları kaydet, listele ve temizle.

  Telegram kullanıcı kontrollü içeriği içeren tüm tool sonuçları sterilize edilmiş ve mümkün olduğunda yapılandırılmış JSON olarak döndürülür.

  ## Gereksinimler

  - Python 3.10+
  - [my.telegram.org/apps](https://my.telegram.org/apps) adresinden Telegram API kimlik bilgileri
  - Telegram oturum dizesi veya dosya tabanlı oturum
  - Claude Desktop, Cursor veya başka bir MCP uyumlu konak gibi MCP istemci
  - İsteğe bağlı: yerel geliştirme için [uv](https://docs.astral.sh/uv/)

  ## Hızlı Başlangıç

  > Bu sunucuyu `uvx telegram-mcp`, `uvx --from telegram-mcp` veya `pip install telegram-mcp` ile kurma. PyPI üzerindeki `telegram-mcp` adı şu anda farklı bir proje tarafından sahiplenilmektedir ve bu depoyu kurmaz. `TELEGRAM_API_ID`, `TELEGRAM_API_HASH` veya `TELEGRAM_SESSION_STRING` adını bu pakete iletmek Telegram hesap kimlik bilgilerini alakasız üçüncü taraf koduna açığa çıkarabilir.

  ### 1. Klonla ve Yükle

  ```bash
  git clone https://github.com/chigwell/telegram-mcp.git
  cd telegram-mcp
  uv sync
  ```

  ### 2. Oturum Dizesi Oluştur

  ```bash
  uv run session_string_generator.py
  ```

  İstemleri takip et. Oluşturulan oturum dizesini güvenli bir şekilde kaydet.

  ### 3. Ortam Değişkenlerini Yapılandır

  Örnek dosyayı kopyala ve gerçek değerlerini doldur:

  ```bash
  cp .env.example .env
  ```

  Tek hesaplı kurulum:

  ```env
  TELEGRAM_API_ID=your_api_id_here
  TELEGRAM_API_HASH=your_api_hash_here
  TELEGRAM_SESSION_STRING=your_session_string_here
  ```

  Sunucuyu yerel olarak çalıştır:

  ```bash
  uv run main.py
  ```

  ## MCP İstemci Yapılandırması

  Claude Desktop veya Cursor için MCP sunucusunu bu projenin klonlanmış bir kopyas noktasına yönlendir:

  ```json
  {
    "mcpServers": {
      "telegram-mcp": {
        "command": "uv",
        "args": [
          "--directory",
          "/full/path/to/telegram-mcp",
          "run",
          "main.py"
        ],
        "env": {
          "TELEGRAM_API_ID": "your_api_id_here",
          "TELEGRAM_API_HASH": "your_api_hash_here",
          "TELEGRAM_SESSION_STRING": "your_session_string_here"
        }
      }
    }
  }
  ```

  Alternatif olarak, belirli bir release etiketini veya commit'i kullanarak bu depoyu doğrudan GitHub'dan bir sanal ortama yükle:

  ```bash
  python -m venv .venv
  . .venv/bin/activate
  pip install "git+https://github.com/chigwell/telegram-mcp.git@<tag-or-commit>"
  ```

  Ardından MCP istemcinizi yüklü console script'ini çalıştıracak şekilde yapılandır:

  ```json
  {
    "mcpServers": {
      "telegram-mcp": {
        "command": "/full/path/to/.venv/bin/telegram-mcp",
        "env": {
          "TELEGRAM_API_ID": "your_api_id_here",
          "TELEGRAM_API_HASH": "your_api_hash_here",
          "TELEGRAM_SESSION_STRING": "your_session_string_here"
        }
      }
    }
  }
  ```

  Depoyu klonlamadan bu depoyu GitHub'dan açıkça kaynak alarak oturum dizesi oluştur:

  ```bash
  uvx --from "git+https://github.com/chigwell/telegram-mcp.git@<pinned-release-tag-or-commit>" telegram-mcp-generate-session
  ```

  ## Çok Hesaplı Kurulum

  Birden fazla Telegram hesabı yapılandırmak için sonek ekli oturum değişkenlerini kullan:

  ```env
  TELEGRAM_API_ID=your_api_id_here
  TELEGRAM_API_HASH=your_api_hash_here
  TELEGRAM_SESSION_STRING_WORK=session_string_for_work
  TELEGRAM_SESSION_STRING_PERSONAL=session_string_for_personal
  ```

  Etiketler küçültülür ve toolslarda `account` parametresi değeri olur.

  - Tek hesaplı modda, `account` isteğe bağlıdır.
  - Çok hesaplı modda, yazma işlemi yapan toollar `account` gerektirir.
  - Yalnızca okuma toolları `account` atlanınca tüm hesaplara yayılır.

  Örnek istemi:

  - "Hesaplarımı listele"
  - "Tüm hesaplardan okunmamış mesajları göster"
  - "Bunu iş hesabımdan @example'a gönder"

  ## Proxy Desteği

  Telegram trafiğini proxy üzerinden yönlendir ve `TELEGRAM_PROXY_*` ortam değişkenlerini ayarla. Desteklenen türler `socks5`, `socks4`, `http` ve `mtproxy`'dir.

  SOCKS ve HTTP proxy'leri isteğe bağlı `python-socks` paketini gerektirir:

  ```bash
  uv sync --extra proxy
  # veya
  pip install python-socks
  ```

  Tek hesaplı yapılandırma:

  ```env
  TELEGRAM_PROXY_TYPE=socks5
  TELEGRAM_PROXY_HOST=127.0.0.1
  TELEGRAM_PROXY_PORT=1080
  TELEGRAM_PROXY_USERNAME=optional_user
  TELEGRAM_PROXY_PASSWORD=optional_pass
  TELEGRAM_PROXY_RDNS=true
  ```

  MTProxy:

  ```env
  TELEGRAM_PROXY_TYPE=mtproxy
  TELEGRAM_PROXY_HOST=mtproxy.example
  TELEGRAM_PROXY_PORT=443
  TELEGRAM_PROXY_SECRET=ee0123456789abcdef...
  ```

  Hesap başına geçersiz kılmalar, oturum değişkenleriyle aynı `_<LABEL>` sonekini kullanır ve soneksiz varsayılanlardan önceliklidir:

  ```env
  TELEGRAM_PROXY_TYPE=socks5
  TELEGRAM_PROXY_HOST=127.0.0.1
  TELEGRAM_PROXY_PORT=1080

  TELEGRAM_PROXY_TYPE_WORK=http
  TELEGRAM_PROXY_HOST_WORK=proxy.work.example
  TELEGRAM_PROXY_PORT_WORK=3128
  ```

  Yanlış yapılandırılmış proxy ayarları (bilinmeyen tür, eksik host/port, geçersiz port, eksik MTProxy sırrı veya eksik `python-socks` paketi), sunucunun başlangıçta proxy'yi sessizce atlama yerine net bir hata mesajıyla hızlı bir şekilde başarısız olmasına neden olur.

  ## Dosya Yolu Güvenliği

  Dosya yolu toolları, izin verilen kökler yapılandırılana kadar devre dışı bırakılır. Bu, `send_file`, `download_media`, `upload_file`, `send_voice`, `send_sticker`, `set_profile_photo` ve `edit_chat_photo` gibi toolları etkiler.

  İzin verilen kökler şu kaynaklardan gelebilir:

  - Sunucu CLI argümanları, geri dönüş olarak kullanılır.
  - İstemci tarafından desteklenirse MCP istemci Roots'ları.

  Güvenlik davranışı:

  - İstemci MCP Roots, mevcut olduğunda sunucu CLI köklerini değiştirir.
  - Boş istemci Roots, hepsini reddet olarak ele alınır.
  - Yollar gerçek yollar aracılığıyla çözülür ve izin verilen bir kökün içinde kalmalıdır.
  - Traversal, joker benzeri, shell benzeri ve null bayt yol desenleri reddedilir.
  - Göreceli yollar ilk izin verilen kök altında çözülür.
  - İndirmeler varsayılan olarak `<first_root>/downloads/` adresine gider.
  - Boyut ve uzantı sınırları duyarlı medya toolları için uygulanır.

  İzin verilen köklerle çalıştır:

  ```bash
  uv run main.py /data/telegram /tmp/telegram-mcp
  ```

  MCP istemci yapılandırmasından, `main.py` sonrasında aynı kökeri ilet:

  ```json
  {
    "mcpServers": {
      "telegram-mcp": {
        "command": "uv",
        "args": [
          "--directory",
          "/full/path/to/telegram-mcp",
          "run",
          "main.py",
          "/data/telegram",
          "/tmp/telegram-mcp"
        ],
        "env": {
          "TELEGRAM_API_ID": "your_api_id_here",
          "TELEGRAM_API_HASH": "your_api_hash_here",
          "TELEGRAM_SESSION_STRING": "your_session_string_here"
        }
      }
    }
  }
  ```

  ## Docker

  İmajı oluştur:

  ```bash
  docker build -t telegram-mcp:latest .
  ```

  Compose ile çalıştır:

  ```bash
  docker compose up --build
  ```

  Doğrudan çalıştır:

  ```bash
  docker run -it --rm \
    -e TELEGRAM_API_ID="YOUR_API_ID" \
    -e TELEGRAM_API_HASH="YOUR_API_HASH" \
    -e TELEGRAM_SESSION_STRING="YOUR_SESSION_STRING" \
    telegram-mcp:latest
  ```

  Birden fazla hesap için `TELEGRAM_SESSION_STRING_WORK` ve `TELEGRAM_SESSION_STRING_PERSONAL` gibi değişkenleri ilet.

  ## Geliştirme

  Uygulama, küçük bir uyumlu giriş noktası ve modüler paket koduna bölünmüştür:

  ```text
  main.py                    # geçmiş giriş noktası ve uyumlu ihraçlar
  telegram_mcp/runtime.py    # paylaşılan MCP kurulumu, hesap yönlendirmesi, doğrulama, dosya güvenliği
  telegram_mcp/runner.py     # uygulama başlangıcı
  telegram_mcp/tools/        # alan başına gruplanmış tool modülleri
  sanitize.py                # çıkış sterilizasyon yardımcıları
  tests/                     # pytest paketi
  ```

  Testleri çalıştır:

  ```bash
  uv run pytest
  ```

  Kapsama ile testleri çalıştır:

  ```bash
  uv run pytest --cov --cov-report=term-missing --cov-report=xml
  ```

  Kapsama `pyproject.toml` içinde yapılandırılmıştır; belirleyici birim sınanabilir çekirdek modüller için %80 minimum kapısı vardır. GitHub Actions aynı kapsama komutunu çalıştırır ve `coverage.xml` dosyasını yükler.

  Biçimlendirme denetimlerini çalıştır:

  ```bash
  uv run black --check .
  uv run flake8 .
  ```

  ## Güvenlik Notları

  - `.env`, oturum dizelerini veya `.session` dosyalarını hiçbir zaman commit etme.
  - Telegram oturum dizesi, ait olduğu hesaba erişim verir.
  - PyPI üzerindeki `telegram-mcp` paket adı bu proje tarafından kontrol edilmez.
    Mülkiyet değişmediği ve paket doğrulanmadığı sürece PyPI tabanlı `telegram-mcp` kurulum komutlarından kaçın.
  - Bu depo, kaynak denetimi olmayan veya doğrudan git/dosya yükleme kaydı olmayan yüklü `telegram-mcp` dağıtımlarını reddetme konusunda en iyi çabayı sağlayan bir başlangıç koruması içerir. Bu koruması, alakasız PyPI paketi tarafından başlatıldığında çalıştırılamaz; bu nedenle klona dayalı veya açık git yüklemelerini kullan.
  - Birden fazla sunucu örneği çalıştırırken dosya oturumları üzerinde oturum dizelerini tercih et.
  - Varsayılan olarak, Telegram API çağrıları makinenizden/kapsayıcınızdan doğrudan Telegram'a gider. `TELEGRAM_PROXY_*` yapılandırılırsa, Telegram trafiği bunun yerine yapılandırılmış SOCKS/HTTP/MTProxy proxy'si aracılığıyla yönlendirilir.
  - Kullanıcı tarafından oluşturulan Telegram içeriği MCP istemcilerine döndürülmeden önce sterilize edilir.

  ### İstem Enjeksiyonu Koruması

  Telegram mesajları, görünen adlar, sohbet başlıkları ve düğme etiketleri güvenilmeyen içeriktir. Sunucu istem enjeksiyonu riskini şu şekilde azaltır:

  - Mümkün olduğunca kullanıcı kontrollü veriler için yapılandırılmış JSON çıkışı.
  - Kontrol karakteri temizlemesi, görünmez karakter temizlemesi ve uzunluk sınırları için `sanitize_user_content()`, `sanitize_name()` ve `sanitize_dict()`.
  - Döndürülen içeriği kullanıcı izleyici verisi olarak işaretleyen MCP içerik ek açıklamaları.
  - Döndürülen Telegram alanlarını model talimatları olarak ele almamalarını istemcileri uyaran tool açıklamaları.
  - Kırılgan anahtar sözcük tabanlı filtreleme yok.

  ## Sorun Giderme

  - **Telegram oturumu yapılandırılmadı:** `TELEGRAM_SESSION_STRING`, `TELEGRAM_SESSION_NAME` veya sonek ekli çok hesaplı varyantlarını ayarla.
  - **Oturum yetkili değil:** `uv run session_string_generator.py` adresini MCP sunucusu dışında çalıştır, mümkün olduğunda QR girişini kullan, ardından `.env` dosyasında `TELEGRAM_SESSION_STRING` ayarla. MCP sunucusu stdio üzerinde etkileşimli telefon kodu girişi gerçekleştirmez.
  - **Geçersiz API kimlik bilgileri:** [my.telegram.org/apps](https://my.telegram.org/apps) adresinde `TELEGRAM_API_ID` ve `TELEGRAM_API_HASH` doğrulaması yap.
  - **Veritabanı kilitli:** dize oturumlarını tercih et veya başka hiçbir işlemin aynı dosya oturumunu kullanmadığından emin ol.
  - **Dosya toolları devre dışı:** izin verilen kökler ilet veya istemcinde MCP Roots'ları yapılandır.
  - **Yol reddedildi:** yolun izin verilen bir kökün içinde olduğundan ve traversal veya joker desenleri kullanmadığından emin ol.
  - **Parola değişikliğinden sonra Auth hatası:** oturum dizesini yeniden oluştur.
  - **Bot only aracı reddedildi:** normal kullanıcı hesapları bot komut ayarlarını yönetemez.
  - **Ayrıntılara ihtiyaç duy:** MCP istemci günlüklerini, terminal çıkışını ve `mcp_errors.log` adresini kontrol et.

  ## Katkı Yapma

  1. Depoyu fork ve klonla.
  2. Bağımlılıkları ve git hook'larını yükle:
     - `uv sync`
     - `uv run pre-commit install --hook-type pre-commit --hook-type pre-push`
  3. Odaklanmış bir dal oluştur.
  4. Davranış değişikliği olduğunda testler ekle veya güncelle.
  5. Yerel olarak denetimler çalıştır:
     - `uv run pre-commit run --all-files`
     - `uv run pre-commit run --hook-stage pre-push --all-files`
  6. Kısa bir açıklamayla bir pull request aç.

  ## Lisans

  Bu proje [Apache 2.0 Lisansı](LICENSE) altında lisanslanmıştır.

  ## Teşekkürler

  - [Telethon](https://github.com/LonamiWebs/Telethon)
  - [Model Context Protocol](https://modelcontextprotocol.io/)
  - [Claude](https://www.anthropic.com/) ve [Cursor](https://cursor.so/)
  - [chigwell/telegram-mcp](https://github.com/chigwell/telegram-mcp) upstream projesi

  [@chigwell](https://github.com/chigwell) ve [@l1v0n1](https://github.com/l1v0n1) tarafından yönetilmektedir. PR'lar hoştur.

  ## Yıldız Tarihi

  [![Star History Chart](https://api.star-history.com/svg?repos=chigwell/telegram-mcp&type=Date)](https://www.star-history.com/#chigwell/telegram-mcp&Date)

  ## Katkıcılar

  <a href="https://github.com/chigwell/telegram-mcp/graphs/contributors">
    
  </a>
---

<div align="center">
  
</div>

![MCP Badge](https://badge.mcpx.dev)
[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
[![Python Lint & Format Check](https://github.com/chigwell/telegram-mcp/actions/workflows/python-lint-format.yml/badge.svg)](https://github.com/chigwell/telegram-mcp/actions/workflows/python-lint-format.yml)
[![Docker Build & Compose Validation](https://github.com/chigwell/telegram-mcp/actions/workflows/docker-build.yml/badge.svg)](https://github.com/chigwell/telegram-mcp/actions/workflows/docker-build.yml)

A Telegram integration for Claude, Cursor, and other MCP-compatible clients. It exposes Telegram account, chat, message, contact, media, folder, and admin operations through the [Model Context Protocol](https://modelcontextprotocol.io/) using [Telethon](https://docs.telethon.dev/).

## 🤖 MCP in Action

Basic Telegram MCP usage in Claude:

![Telegram MCP in action](https://raw.githubusercontent.com/chigwell/telegram-mcp/HEAD/screenshots/1.png)

Asking Claude to analyze chat history and send a response:

![Telegram MCP Request](https://raw.githubusercontent.com/chigwell/telegram-mcp/HEAD/screenshots/2.png)

Message sent successfully:

![Telegram MCP Result](https://raw.githubusercontent.com/chigwell/telegram-mcp/HEAD/screenshots/3.png)

## Contents

- [What It Can Do](#what-it-can-do)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [MCP Client Configuration](#mcp-client-configuration)
- [Multi-Account Setup](#multi-account-setup)
- [Proxy Support](#proxy-support)
- [File Path Security](#file-path-security)
- [Docker](#docker)
- [Development](#development)
- [Security Notes](#security-notes)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## What It Can Do

The server currently includes 80+ MCP tools grouped into these areas:

- **Accounts:** list configured accounts and route tool calls by account label.
- **Chats and groups:** list chats, inspect metadata, create groups/channels, join or leave chats, invite users, manage admins, bans, default permissions, slow mode, topics, invite links, common chats, read receipts, and message links.
- **Messages:** send, schedule, edit, delete, forward, pin, unpin, mark read, reply, search, inspect context, create polls, manage reactions, inspect inline buttons, and press inline callbacks.
- **Contacts:** list, search, add, delete, block, unblock, import, export, inspect direct chats, and find recent contact interactions.
- **Media:** send files, download media, upload files, send voice notes, stickers, GIFs, and inspect message media.
- **Profile and privacy:** get your own account info, update profile fields, set or delete profile photos, inspect privacy settings, get user info/photos/status, and manage bot commands.
- **Folders and drafts:** list, create, update, reorder, and delete Telegram folders; save, list, and clear drafts.

All tool results that include Telegram user-controlled content are sanitized and, where practical, returned as structured JSON.

## Requirements

- Python 3.10+
- Telegram API credentials from [my.telegram.org/apps](https://my.telegram.org/apps)
- A Telegram session string or file-based session
- An MCP client such as Claude Desktop, Cursor, or another MCP-compatible host
- Optional: [uv](https://docs.astral.sh/uv/) for local development

## Quick Start

> Do not install this server with `uvx telegram-mcp`, `uvx --from telegram-mcp`,
> or `pip install telegram-mcp`. The `telegram-mcp` name on PyPI is currently
> owned by a different project and does not install this repository. Passing
> `TELEGRAM_API_ID`, `TELEGRAM_API_HASH`, or `TELEGRAM_SESSION_STRING` to that
> package can expose Telegram account credentials to unrelated third-party code.

### 1. Clone and Install

```bash
git clone https://github.com/chigwell/telegram-mcp.git
cd telegram-mcp
uv sync
```

### 2. Generate a Session String

```bash
uv run session_string_generator.py
```

Follow the prompts. Save the generated session string securely.

### 3. Configure Environment

Copy the example file and fill in your real values:

```bash
cp .env.example .env
```

Single-account setup:

```env
TELEGRAM_API_ID=your_api_id_here
TELEGRAM_API_HASH=your_api_hash_here
TELEGRAM_SESSION_STRING=your_session_string_here
```

Run the server locally:

```bash
uv run main.py
```

## MCP Client Configuration

For Claude Desktop or Cursor, point the MCP server at a cloned checkout of
this project:

```json
{
  "mcpServers": {
    "telegram-mcp": {
      "command": "uv",
      "args": [
        "--directory",
        "/full/path/to/telegram-mcp",
        "run",
        "main.py"
      ],
      "env": {
        "TELEGRAM_API_ID": "your_api_id_here",
        "TELEGRAM_API_HASH": "your_api_hash_here",
        "TELEGRAM_SESSION_STRING": "your_session_string_here"
      }
    }
  }
}
```

Alternatively, install this repository directly from GitHub into a virtual
environment using a specific release tag or commit:

```bash
python -m venv .venv
. .venv/bin/activate
pip install "git+https://github.com/chigwell/telegram-mcp.git@<tag-or-commit>"
```

Then configure your MCP client to run the installed console script:

```json
{
  "mcpServers": {
    "telegram-mcp": {
      "command": "/full/path/to/.venv/bin/telegram-mcp",
      "env": {
        "TELEGRAM_API_ID": "your_api_id_here",
        "TELEGRAM_API_HASH": "your_api_hash_here",
        "TELEGRAM_SESSION_STRING": "your_session_string_here"
      }
    }
  }
}
```

Generate a session string without cloning the repo by sourcing this repository
from GitHub explicitly:

```bash
uvx --from "git+https://github.com/chigwell/telegram-mcp.git@<pinned-release-tag-or-commit>" telegram-mcp-generate-session
```

## Multi-Account Setup

Use suffixed session variables to configure multiple Telegram accounts:

```env
TELEGRAM_API_ID=your_api_id_here
TELEGRAM_API_HASH=your_api_hash_here
TELEGRAM_SESSION_STRING_WORK=session_string_for_work
TELEGRAM_SESSION_STRING_PERSONAL=session_string_for_personal
```

Labels are lowercased and become the `account` parameter value in tools.

- In single-account mode, `account` is optional.
- In multi-account mode, write tools require `account`.
- Read-only tools fan out to all accounts when `account` is omitted.

Example prompts:

- "List my accounts"
- "Show unread messages from all accounts"
- "Send this from my work account to @example"

## Proxy Support

Route Telegram traffic through a proxy by setting the `TELEGRAM_PROXY_*`
environment variables. Supported types are `socks5`, `socks4`, `http`, and
`mtproxy`.

SOCKS and HTTP proxies require the optional `python-socks` package:

```bash
uv sync --extra proxy
# or
pip install python-socks
```

Single-account configuration:

```env
TELEGRAM_PROXY_TYPE=socks5
TELEGRAM_PROXY_HOST=127.0.0.1
TELEGRAM_PROXY_PORT=1080
TELEGRAM_PROXY_USERNAME=optional_user
TELEGRAM_PROXY_PASSWORD=optional_pass
TELEGRAM_PROXY_RDNS=true
```

MTProxy:

```env
TELEGRAM_PROXY_TYPE=mtproxy
TELEGRAM_PROXY_HOST=mtproxy.example
TELEGRAM_PROXY_PORT=443
TELEGRAM_PROXY_SECRET=ee0123456789abcdef...
```

Per-account overrides use the same `_<LABEL>` suffix as session variables and
take precedence over the unsuffixed defaults:

```env
TELEGRAM_PROXY_TYPE=socks5
TELEGRAM_PROXY_HOST=127.0.0.1
TELEGRAM_PROXY_PORT=1080

TELEGRAM_PROXY_TYPE_WORK=http
TELEGRAM_PROXY_HOST_WORK=proxy.work.example
TELEGRAM_PROXY_PORT_WORK=3128
```

Misconfigured proxy settings (unknown type, missing host/port, invalid port,
missing MTProxy secret, or a missing `python-socks` package) cause the server
to fail fast at startup with a clear error message instead of silently
bypassing the proxy.

## File Path Security

File-path tools are disabled until allowed roots are configured. This affects tools such as `send_file`, `download_media`, `upload_file`, `send_voice`, `send_sticker`, `set_profile_photo`, and `edit_chat_photo`.

Allowed roots can come from:

- Server CLI arguments, used as a fallback.
- MCP client Roots, when supported by the client.

Security behavior:

- Client MCP Roots replace server CLI roots when available.
- Empty client Roots are treated as deny-all.
- Paths are resolved through real paths and must stay inside an allowed root.
- Traversal, wildcard-like, shell-like, and null-byte path patterns are rejected.
- Relative paths resolve under the first allowed root.
- Downloads default to `<first_root>/downloads/`.
- Size and extension limits are enforced for sensitive media tools.

Run with allowed roots:

```bash
uv run main.py /data/telegram /tmp/telegram-mcp
```

From an MCP client configuration, pass the same roots after `main.py`:

```json
{
  "mcpServers": {
    "telegram-mcp": {
      "command": "uv",
      "args": [
        "--directory",
        "/full/path/to/telegram-mcp",
        "run",
        "main.py",
        "/data/telegram",
        "/tmp/telegram-mcp"
      ],
      "env": {
        "TELEGRAM_API_ID": "your_api_id_here",
        "TELEGRAM_API_HASH": "your_api_hash_here",
        "TELEGRAM_SESSION_STRING": "your_session_string_here"
      }
    }
  }
}
```

## Docker

Build the image:

```bash
docker build -t telegram-mcp:latest .
```

Run with Compose:

```bash
docker compose up --build
```

Run directly:

```bash
docker run -it --rm \
  -e TELEGRAM_API_ID="YOUR_API_ID" \
  -e TELEGRAM_API_HASH="YOUR_API_HASH" \
  -e TELEGRAM_SESSION_STRING="YOUR_SESSION_STRING" \
  telegram-mcp:latest
```

For multiple accounts, pass variables such as `TELEGRAM_SESSION_STRING_WORK` and `TELEGRAM_SESSION_STRING_PERSONAL`.

## Development

The implementation is split into a small compatibility entrypoint and modular package code:

```text
main.py                    # historical entrypoint and compatibility exports
telegram_mcp/runtime.py    # shared MCP setup, account routing, validation, file safety
telegram_mcp/runner.py     # application startup
telegram_mcp/tools/        # tool modules grouped by domain
sanitize.py                # output sanitization helpers
tests/                     # pytest suite
```

Run tests:

```bash
uv run pytest
```

Run tests with coverage:

```bash
uv run pytest --cov --cov-report=term-missing --cov-report=xml
```

Coverage is configured in `pyproject.toml` with an 80% minimum gate for deterministic unit-testable core modules. GitHub Actions runs the same coverage command and uploads `coverage.xml`.

Run formatting checks:

```bash
uv run black --check .
uv run flake8 .
```

## Security Notes

- Never commit `.env`, session strings, or `.session` files.
- A Telegram session string grants access to the account it belongs to.
- The `telegram-mcp` package name on PyPI is not controlled by this project.
  Avoid PyPI-based `telegram-mcp` install commands unless ownership changes and
  the package is verified.
- This repository includes a best-effort startup guard that refuses installed
  `telegram-mcp` distributions without a source checkout or direct git/file
  install record. That guard cannot run when the unrelated PyPI package itself
  is launched, so use clone-based or explicit git installs.
- Prefer session strings over file sessions when running multiple server instances.
- By default, Telegram API calls go directly from your machine/container to Telegram.
  If `TELEGRAM_PROXY_*` is configured, Telegram traffic is routed through the
  configured SOCKS/HTTP/MTProxy proxy instead.
- User-generated Telegram content is sanitized before being returned to MCP clients.

### Prompt Injection Protection

Telegram messages, display names, chat titles, and button labels are untrusted content. The server mitigates prompt-injection risk with:

- Structured JSON output for user-controlled data where practical.
- `sanitize_user_content()`, `sanitize_name()`, and `sanitize_dict()` for control-character stripping, invisible-character stripping, and length limits.
- MCP content annotations marking returned content as user audience data.
- Tool descriptions that warn clients not to treat returned Telegram fields as model instructions.
- No brittle keyword-based filtering.

## Troubleshooting

- **No Telegram session configured:** set `TELEGRAM_SESSION_STRING`, `TELEGRAM_SESSION_NAME`, or suffixed multi-account variants.
- **Session is not authorized:** run `uv run session_string_generator.py` outside
  the MCP server, use QR login when possible, then set `TELEGRAM_SESSION_STRING`
  in `.env`. The MCP server does not perform interactive phone-code login over
  stdio.
- **Invalid API credentials:** verify `TELEGRAM_API_ID` and `TELEGRAM_API_HASH` at [my.telegram.org/apps](https://my.telegram.org/apps).
- **Database is locked:** prefer string sessions, or make sure no other process is using the same file session.
- **File tools are disabled:** pass allowed roots or configure MCP Roots in your client.
- **Path rejected:** ensure the path is inside an allowed root and does not use traversal or wildcard patterns.
- **Auth errors after password changes:** regenerate your session string.
- **Bot-only tool rejected:** regular user accounts cannot manage bot command settings.
- **Need details:** check your MCP client logs, terminal output, and `mcp_errors.log`.

## Contributing

1. Fork and clone the repository.
2. Install dependencies and git hooks:
   - `uv sync`
   - `uv run pre-commit install --hook-type pre-commit --hook-type pre-push`
3. Create a focused branch.
4. Add or update tests when behavior changes.
5. Run checks locally:
   - `uv run pre-commit run --all-files`
   - `uv run pre-commit run --hook-stage pre-push --all-files`
6. Open a pull request with a concise description.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).

## Acknowledgements

- [Telethon](https://github.com/LonamiWebs/Telethon)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Claude](https://www.anthropic.com/) and [Cursor](https://cursor.so/)
- [chigwell/telegram-mcp](https://github.com/chigwell/telegram-mcp) upstream project

Maintained by [@chigwell](https://github.com/chigwell) and [@l1v0n1](https://github.com/l1v0n1). PRs welcome.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=chigwell/telegram-mcp&type=Date)](https://www.star-history.com/#chigwell/telegram-mcp&Date)

## Contributors

<a href="https://github.com/chigwell/telegram-mcp/graphs/contributors">
  
</a>
