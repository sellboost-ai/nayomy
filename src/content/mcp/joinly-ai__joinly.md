---
name: "joinly-ai/joinly"
description: "MCP server to interact with browser-based meeting platforms (Zoom, Teams, Google Meet). Enables AI agents to send bots to online meetings, gather live transcripts, speak text, and send messages in the meeting chat."
description_tr: "Tarayıcı tabanlı toplantı platformları (Zoom, Teams, Google Meet) ile etkileşim kurmak için MCP sunucusu. AI ajanlarının çevrimiçi toplantılara bot göndermesini, canlı transkriptleri toplamasını, metni seslendirilmesini ve toplantı sohbetine mesaj göndermesini sağlar."
category: "Communication"
repo: "joinly-ai/joinly"
stars: 519
url: "https://github.com/joinly-ai/joinly"
body_length: 14160
license: "MIT"
language: "Python"
homepage: "https://joinly.ai"
body_tr: |-
  <p align="center">
    <a href="https://github.com/joinly-ai/assets">
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="https://raw.githubusercontent.com/joinly-ai/assets/main/animations/logo-animations/joinly_logo_black_cropped.gif"
        >
        
      </picture>
    </a>
  </p>

  [![GitHub Release](https://img.shields.io/github/v/release/joinly-ai/joinly?sytle=flat&label=Release&labelColor=black&color=%237B2CBF)](https://github.com/joinly-ai/joinly/releases)
  [![GitHub License](https://img.shields.io/github/license/joinly-ai/joinly?style=flat&label=License&labelColor=black&color=%237B2CBF)](LICENSE) 
  [![GitHub Repo stars](https://img.shields.io/github/stars/joinly-ai/joinly?style=flat&logo=github&logoColor=white&label=Stars&labelColor=black&color=7B2CBF)](https://github.com/joinly-ai/joinly)
  [![Discord](https://img.shields.io/discord/1377431745632145500?style=flat&logo=discord&logoColor=white&label=Discord&labelColor=black&color=7B2CBF)](https://discord.com/invite/AN5NEBkS4d) 
  [![GitHub Discussions](https://img.shields.io/github/discussions/joinly-ai/joinly?style=flat&labelColor=black&label=Discussions&color=%237B2CBF)](https://github.com/joinly-ai/joinly/discussions)
  [![joinly cloud](https://img.shields.io/badge/joinly.ai_cloud-☁️-%237B2CBF?style=flat&labelColor=black)](https://cloud.joinly.ai)

  <h1 align="center">Toplantılarınızı AI Ajanlarına Erişilebilir Hale Getirin 🤖</h1>

  **joinly.ai**, AI ajanlarının video çağrılarına katılmasını ve aktif olarak katılmasını sağlamak için tasarlanmış bir connector middleware'dir. MCP server'ı aracılığıyla joinly.ai, herhangi bir AI ajanını toplantılarınızda gerçek zamanda görevleri gerçekleştirme ve sizinle etkileşim kurma becerileriyle donatabilecek temel [meeting tools](#tools) ve [resources](#resources) sağlar.

  > Hemen başlamak mı istiyorsunuz? [Quickstart](#zap-quickstart) bölümüne gidin!
  > Daha fazla bilgi mi istiyorsunuz? [Web sitemizi](https://joinly.ai/) ziyaret edin!

  > [!IMPORTANT]  
  > Her şeyi kurmak istemiyorsunuz? Önce [cloud](https://cloud.joinly.ai) versiyonunu deneyin! ☁️🚀


  # :sparkles: Özellikler
  - **Canlı Etkileşim**: Ajanlarınızın toplantılarınız içinde sesli veya chat yoluyla görevleri gerçek zamanda gerçekleştirmesini ve yanıt vermesini sağlar
  - **Konuşmacı akışı**: Kesintileri ve çok konuşmacılı etkileşimleri ele alarak doğal konuşmaları sağlayan yerleşik mantık
  - **Çoklu platform**: Google Meet, Zoom ve Microsoft Teams'e katılın (veya tarayıcıda bulunan herhangi biri)
  - **Kendi LLM'nizi getirin**: Tüm LLM sağlayıcılarıyla çalışır (ayrıca Ollama ile yerel olarak)
  - **Tercih ettiğiniz TTS/STT'yi seçin**: Modüler tasarım birden fazla hizmeti destekler - STT için Whisper/Deepgram ve TTS için Kokoro/ElevenLabs/Deepgram (ve daha fazlası yakında...)
  - **%100 açık kaynak, kendi barındırma ve gizlilik odaklı** :rocket:

  # :video_camera: Demolar
  ### GitHub
  [![GitHub Demo](https://raw.githubusercontent.com/joinly-ai/assets/main/images/others/github-demo.png)](https://youtu.be/XWolVuxw8I8)
  > Bu demo videosunda, joinly "Joinly nedir?" sorusunu web'den en son haberlere erişerek yanıtlar. Daha sonra bir GitHub demo repository'sinde bir issue oluşturur.
  ### Notion
  [![Notion Demo](https://raw.githubusercontent.com/joinly-ai/assets/main/images/others/notion-demo.png)](https://www.youtube.com/watch?v=pvYqZi2KeI0)
  > Bu demo videosunda, joinly'i MCP aracılığıyla notion'a bağlarız ve bir sayfa içeriğini toplantı sırasında canlı olarak düzenlemesini sağlarız.

  Sırada ne inşa etmeliyiz hakkında bir fikiniz var mı? [Bize yazın!](https://discord.com/invite/AN5NEBkS4d) :rocket:

  # :zap: Quickstart
  joinly'i Docker ile temel bir konuşmacı ajan istemcisi kullanarak çalıştırın.

  > [!IMPORTANT]
  > **Ön Koşullar**: [Docker kurulumu](https://docs.docker.com/engine/install/)

  Yeni bir `joinly` klasörü oluşturun veya bu repository'yi klonlayın (aşağıdaki adımlar için zorunlu değil). Bu dizinde, kullanmak istediğiniz LLM sağlayıcısı için geçerli bir API anahtarı ile yeni bir `.env` dosyası oluşturun, örneğin OpenAI:

  > [!TIP]
  > OpenAI API anahtarını [burada](https://platform.openai.com/api-keys) bulabilirsiniz

  ```Dotenv
  # .env
  # OpenAI LLM için
  # anahtarı ve modeli istediğiniz olanla değiştirin
  JOINLY_LLM_MODEL=gpt-4o
  JOINLY_LLM_PROVIDER=openai
  OPENAI_API_KEY=your-openai-api-key
  ```

  > [!NOTE]
  > Anthropic (Claude) ve Ollama kurulumları da dahil olmak üzere tam konfigürasyon seçenekleri için [.env.example](.env.example) dosyasına bakın. Placeholder değerlerini gerçek API anahtarlarınız ile değiştirin ve model adını gerektiği gibi ayarlayın. Kullanmadığınız sağlayıcıların placeholder değerlerini silin.


  Docker image'ını çekin (~2.3GB, tarayıcı ve modelleri içerdiği için):
  ```bash
  docker pull ghcr.io/joinly-ai/joinly:latest
  ```

  [Zoom](https://www.zoom.com), [Google Meet](https://meet.google.com) veya Teams'de bir toplantı başlatın ve joinly'in toplantı linkini `<MeetingURL>` olarak kullanarak toplantıya katılmasını sağlayın. Daha sonra, `.env` dosyasını oluşturduğunuz klasörden aşağıdaki komutu çalıştırın:
  ```bash  
  docker run --env-file .env ghcr.io/joinly-ai/joinly:latest --client <MeetingURL>
  ```
  > :red_circle: Başlamakta sorun mu yaşıyorsunuz? Birlikte çözelim [discord](https://discord.com/invite/AN5NEBkS4d) kanalımızda! 

  # :technologist: Harici istemci çalıştırma
  Quickstart'ta, Docker Container'ı doğrudan `--client` kullanarak istemci olarak çalıştırdık. Ancak aynı zamanda bunu bir sunucu olarak çalıştırabiliriz ve container dışından buna bağlanabiliriz, bu da diğer MCP sunucularını bağlamamızı sağlar. Burada [joinly-client paketi](https://pypi.org/project/joinly-client/) kullanarak harici bir istemci çalıştırır ve bunu joinly MCP server'ına bağlarız.

  > [!IMPORTANT]
  > **Ön Koşullar**: [Quickstart](#zap-quickstart) bölümünü (son komut hariç) yapın, [uv'yi yükleyin](https://github.com/astral-sh/uv) ve iki terminal açın

  Birinci terminalde joinly server'ını başlatın (dikkat, burada `--client` kullanmıyoruz ve `8000` portunu iletiyoruz):
  ```bash  
  docker run -p 8000:8000 ghcr.io/joinly-ai/joinly:latest
  ```

  Server çalışırken, ikinci terminal penceresinde örnek istemci implementasyonunu başlatarak buna bağlanın ve bir toplantıya katılın:
  ```bash  
  uvx joinly-client --env-file .env <MeetingUrl>
  ```

  ## MCP sunucularını istemciye ekleyin
  Herhangi bir MCP server'ının araçlarını JSON konfigürasyonu sağlayarak ajana ekleyin. Konfigürasyon dosyası `"mcpServers"` altında birden fazla entry içerebilir ve hepsi toplantıda araç olarak kullanılabilir (sözdizimi için [fastmcp client docs](https://gofastmcp.com/clients/client) bölümüne bakın):

  ```json
  {
      "mcpServers": {
          "localServer": {
              "command": "npx",
              "args": ["-y", "package@0.1.0"]
          },
          "remoteServer": {
              "url": "http://mcp.example.com",
              "auth": "oauth"
          }
      }
  }
  ```

  Örneğin web arama için bir [Tavily config](examples/config_tavily.json) ekleyin, sonra istemciyi `config.json` adlı config dosyası kullanarak çalıştırın:

  ```bash
  uvx joinly-client --env-file .env --mcp-config config.json <MeetingUrl>
  ```

  # :wrench: Konfigürasyonlar

  Konfigürasyonlar çevre değişkenleri ve/veya komut satırı argümanları aracılığıyla verilebilir. Burada, Docker container'ını başlatırken kullanılabilecek ortak konfigürasyon seçeneklerinin bir listesi bulunmaktadır:
  ```bash
  docker run --env-file .env -p 8000:8000 ghcr.io/joinly-ai/joinly:latest <MyOptionArgs>
  ```

  Alternatif olarak, `joinly-client` kullanarak `--name`, `--lang` ve [provider settings](#providers) komut satırı argümanları olarak iletebilirsiniz, bu da server ayarlarını geçersiz kılar:
  ```bash
  uvx joinly-client <MyOptionArgs> <MeetingUrl>
  ```

  ## Temel Ayarlar

  Genel olarak, docker image varsayılan olarak başlatılan bir MCP server'ı sağlar. Ancak hızlı bir şekilde başlamak için `--client` aracılığıyla kullanılabilecek bir istemci implementasyonu da ekledik. Bu durumda hiçbir server başlatılmaz ve buna başka bir istemci bağlanamaz.

  ```bash
  # Doğrudan istemci olarak başlat; varsayılan, harici bir istemcinin bağlanabileceği server'dır
  --client <MeetingUrl>

  # Katılımcı adını değiştir (varsayılan: joinly)
  --name "AI Assistant"

  # TTS/STT dilini değiştir (varsayılan: en)
  # Not: kullanılabilirlik TTS/STT sağlayıcısına bağlıdır
  --lang de

  # joinly MCP server'ının host ve port'unu değiştir
  --host 0.0.0.0 --port 8000
  ```

  ## Sağlayıcılar

  ### Metinden Konuşmaya
  ```bash
  # Kokoro (yerel) TTS (varsayılan)
  --tts kokoro
  --tts-arg voice=<VoiceName>  # isteğe bağlı olarak, farklı ses ayarla

  # ElevenLabs TTS, .env'ye ELEVENLABS_API_KEY ekleyin
  --tts elevenlabs
  --tts-arg voice_id=<VoiceID>  # isteğe bağlı olarak, farklı ses ayarla

  # Deepgram TTS, .env'ye DEEPGRAM_API_KEY ekleyin
  --tts deepgram
  --tts-arg model_name=<ModelName>  # isteğe bağlı olarak, farklı model (ses) ayarla
  ```

  ### Transkripsiyon
  ```bash
  # Whisper (yerel) STT (varsayılan)
  --stt whisper
  --stt-arg model_name=<ModelName>  # isteğe bağlı olarak, farklı model ayarla (varsayılan: base), GPU desteği için aşağıya bakın

  # Deepgram STT, .env'ye DEEPGRAM_API_KEY ekleyin
  --stt deepgram
  --stt-arg model_name=<ModelName>  # isteğe bağlı olarak, farklı model ayarla
  ```

  ## Hata Ayıklama
  ```bash
  # Hata ayıklama için VNC server'ı olan tarayıcıyı başlat;
  # portu ilet ve bir VNC istemcisi kullanarak bağlan
  --vnc-server --vnc-server-port 5900

  # Logging
  -v  # veya -vv, -vvv

  # Yardım
  --help
  ```

  ## GPU Desteği

  Transkripsiyon ve TTS modellerini bir GPU'da çalıştırmak için CUDA GPU desteğine sahip bir Docker image sağlıyoruz. Bunu kullanmak için [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) yüklü olması ve `CUDA >= 12.6` gerekir. Daha sonra CUDA etkinleştirilmiş image'ını çekin:
  ```bash
  docker pull ghcr.io/joinly-ai/joinly:latest-cuda
  ```

  Yukarıdaki komutlar ile aynı komutlar kullanarak istemci veya server olarak çalıştırın, ancak `joinly:{version}-cuda` image'ını kullanın ve `--gpus all` ayarlayın:
  ```bash
  # Server olarak çalıştır
  docker run --gpus all --env-file .env -p 8000:8000 ghcr.io/joinly-ai/joinly:latest-cuda -v
  # İstemci olarak çalıştır
  docker run --gpus all --env-file .env ghcr.io/joinly-ai/joinly:latest-cuda -v --client <MeetingURL>
  ```

  Varsayılan olarak, `joinly` image'ı transkripsiyon için `base` Whisper modelini kullanır, çünkü CPU'da hala makul bir hızda çalışır. `cuda` için, önemli ölçüde daha iyi transkripsiyon kalitesi için otomatik olarak `distil-large-v3` olarak ayarlanır. Model'i `--stt-arg model_name=<model_name>` ayarlayarak değiştirebilirsiniz (örneğin, `--stt-arg model_name=large-v3`). Ancak, docker image'da yalnızca ilgili varsayılan modeller paketlenmiştir, bu nedenle container başlangıcında model ağırlıklarını indirmeye başlayacaktır.

  # :test_tube: Kendi ajanınızı oluşturun

  Ayrıca kendi ajanınızı yazabilir ve bunu joinly MCP server'ına bağlayabilirsiniz. joinly-client paketi için [code examples](https://github.com/joinly-ai/joinly/client/README.md#code-usage) bölümüne veya [client_example.py](examples/client_example.py) dosyasına bakın, eğer framework'ümüze bağlı olmayan bir başlangıç noktası istiyorsanız.

  joinly MCP server'ı aşağıdaki araçları ve kaynakları sağlar:

  ### Araçlar

  - **`join_meeting`** - URL, katılımcı adı ve isteğe bağlı şifre ile toplantıya katıl
  - **`leave_meeting`** - Mevcut toplantıdan ayrıl
  - **`speak_text`** - Metni TTS kullanarak seslendir (`text` parametresi gerekli)
  - **`send_chat_message`** - Chat mesajı gönder (`message` parametresi gerekli)
  - **`mute_yourself`** - Mikrofonu kapat
  - **`unmute_yourself`** - Mikrofonu aç
  - **`get_chat_history`** - Mevcut toplantı chat geçmişini JSON formatında al
  - **`get_participants`** - Mevcut toplantı katılımcılarını JSON formatında al
  - **`get_transcript`** - Mevcut toplantı transkriptini JSON formatında al, isteğe bağlı olarak dakikalar ile filtrele
  - **`get_video_snapshot`** - Mevcut toplantıdan bir görüntü al, örneğin mevcut screenshare'i görüntüle

  ### Kaynaklar

  - **`transcript://live`** - Canlı toplantı transkripti JSON formatında, zaman damgaları ve konuşmacı bilgileri dahil. Yeni ses parçaları eklendiğinde gerçek zamanlı güncellemeler için abone olunabilir.

  # :building_construction: joinly.ai Geliştirme

  Geliştirme için gerekli tüm bağımlılıkları yükleyen development container'ını kullanmanızı öneriyoruz. Başlamak için, Visual Studio Code için DevContainer Extension'ını yükleyin, repository'yi açın ve **Reopen in Container** seçeneğini seçin.

  Kurulum biraz zaman alabilir, çünkü tüm paketleri ve Whisper/Kokoro için modelleri ve Chromium tarayıcısını indirir. Sonunda, [download_assets.py](scripts/download_assets.py) betiğini otomatik olarak çağırır. `Missing kokoro-v1.0.onnx` gibi hatalar görürseniz, şu komutu kullanarak bu betiği manuel olarak çalıştırın:
  ```bash
  uv run scripts/download_assets.py
  ```

  Onunla ne yaptığınızı veya ne inşa ettiğinizi görmek isteyiz. Çalışmanızı [discord](https://discord.com/invite/AN5NEBkS4d) kanalımızda sergileyin
  # :pencil2: Yol Haritası

  **Toplantı**
  - [x] Toplantı chat erişimi
  - [ ] Video çağrıda kamera ve durum güncellemeleri
  - [ ] Video konferansları sırasında ekran paylaşımını etkinleştir
  - [ ] Katılımcı metadata'sı ve katılma/ayrılma
  - [ ] Tarayıcı ajan yeteneklerini iyileştir

  **Konuşma**
  - [x] Transkripsiyon için konuşmacı özelliği
  - [ ] İstemci belleğini iyileştir: token kullanımını azalt, toplantılar arasında kalıcılığa izin ver
  - [ ] Utterance sonu/tur alma algılamasını iyileştir
  - [ ] Toplantı içinden insan onay mekanizması

  **Entegrasyonlar**
  - [ ] A2A protokolü kullanarak ajanların nasıl ekleneceğini göster
  - [ ] Daha fazla sağlayıcı entegrasyonu ekle (STT, TTS)
  - [ ] Toplantı platformu SDK'larını entegre et
  - [ ] Alternatif açık kaynak toplantı sağlayıcısı ekle
  - [ ] Konuşma2Konuşma modelleri için destek ekle
    
  # :busts_in_silhouette: Katkıda Bulunma
  Katkılar her zaman hoşlanır! Hatalar için issue açmaktan veya feature isteği göndermekten çekinmeyin. Tüm katkıları mümkün olan en kısa sürede gözden geçireceğiz ve değişikliklerinizi birleştirmeye yardımcı olacağız.

  Lütfen [Yol Haritamızı](#pencil2-yol-haritası) kontrol edin ve bizimle iletişime geçmekten çekinmeyin!

  # :memo: Lisans
  Bu proje MIT Lisansı altında lisanslanmıştır ‒ ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

  # :speech_balloon: Yardım Alma
  Sorularınız veya geri bildiriminiz varsa veya bakımcılar veya diğer topluluk üyeleriyle sohbet etmek istiyorsanız, lütfen aşağıdaki bağlantıları kullanın:
  -  [Discord'umuza katılın](https://discord.com/invite/AN5NEBkS4d)
  -  [GitHub Tartışmalarımızı keşfedin](https://github.com/joinly-ai/joinly/discussions)

  <div align="center">
  Osnabrück'te ❤️ ile yapılmıştır
   </div>
---

<p align="center">
  <a href="https://github.com/joinly-ai/assets">
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcset="https://raw.githubusercontent.com/joinly-ai/assets/main/animations/logo-animations/joinly_logo_black_cropped.gif"
      >
      
    </picture>
  </a>
</p>

[![GitHub Release](https://img.shields.io/github/v/release/joinly-ai/joinly?sytle=flat&label=Release&labelColor=black&color=%237B2CBF)](https://github.com/joinly-ai/joinly/releases)
[![GitHub License](https://img.shields.io/github/license/joinly-ai/joinly?style=flat&label=License&labelColor=black&color=%237B2CBF)](LICENSE) 
[![GitHub Repo stars](https://img.shields.io/github/stars/joinly-ai/joinly?style=flat&logo=github&logoColor=white&label=Stars&labelColor=black&color=7B2CBF)](https://github.com/joinly-ai/joinly)
[![Discord](https://img.shields.io/discord/1377431745632145500?style=flat&logo=discord&logoColor=white&label=Discord&labelColor=black&color=7B2CBF)](https://discord.com/invite/AN5NEBkS4d) 
[![GitHub Discussions](https://img.shields.io/github/discussions/joinly-ai/joinly?style=flat&labelColor=black&label=Discussions&color=%237B2CBF)](https://github.com/joinly-ai/joinly/discussions)
[![joinly cloud](https://img.shields.io/badge/joinly.ai_cloud-☁️-%237B2CBF?style=flat&labelColor=black)](https://cloud.joinly.ai)

<h1 align="center">Make your meetings accessible to AI Agents 🤖</h1>

**joinly.ai** is a connector middleware designed to enable AI agents to join and actively participate in video calls. Through its MCP server, joinly.ai provides essential [meeting tools](#tools) and [resources](#resources) that can equip any AI agent with the skills to perform tasks and interact with you in real time during your meetings.

> Want to dive right in? Jump to the [Quickstart](#zap-quickstart)!
> Want to know more? Visit our [website](https://joinly.ai/)!

> [!IMPORTANT]  
> Don't want the hustle of setting everything up? Try our [cloud](https://cloud.joinly.ai) first! ☁️🚀


# :sparkles: Features
- **Live Interaction**: Lets your agents execute tasks and respond in real-time by voice or chat within your meetings
- **Conversational flow**: Built-in logic that ensures natural conversations by handling interruptions and multi-speaker interactions
- **Cross-platform**: Join Google Meet, Zoom, and Microsoft Teams (or any available over the browser)
- **Bring-your-own-LLM**: Works with all LLM providers (also locally with Ollama)
- **Choose-your-preferred-TTS/STT**: Modular design supports multiple services - Whisper/Deepgram for STT and Kokoro/ElevenLabs/Deepgram for TTS (and more to come...)
- **100% open-source, self-hosted and privacy-first** :rocket:

# :video_camera: Demos
### GitHub
[![GitHub Demo](https://raw.githubusercontent.com/joinly-ai/assets/main/images/others/github-demo.png)](https://youtu.be/XWolVuxw8I8)
> In this demo video, joinly answers the question 'What is Joinly?' by accessing the latest news from the web. It then creates an issue in a GitHub demo repository.
### Notion
[![Notion Demo](https://raw.githubusercontent.com/joinly-ai/assets/main/images/others/notion-demo.png)](https://www.youtube.com/watch?v=pvYqZi2KeI0)
> In this demo video, we connect joinly to our notion via MCP and let it edit the content of a page content live in the meeting. 

Any ideas what we should build next? [Write us!](https://discord.com/invite/AN5NEBkS4d) :rocket:

# :zap: Quickstart
Run joinly via Docker with a basic conversational agent client.

> [!IMPORTANT]
> **Prerequisites**: [Docker installation](https://docs.docker.com/engine/install/)

Create a new folder `joinly` or clone this repository (not mandatory for the following steps). In this directory, create a new `.env` file with a valid API key for the LLM provider you want to use, e.g. OpenAI:

> [!TIP]
> You can find the OpenAI API key [here](https://platform.openai.com/api-keys)

```Dotenv
# .env
# for OpenAI LLM
# change key and model to your desired one
JOINLY_LLM_MODEL=gpt-4o
JOINLY_LLM_PROVIDER=openai
OPENAI_API_KEY=your-openai-api-key
```

> [!NOTE]
> See [.env.example](.env.example) for complete configuration options including Anthropic (Claude) and Ollama setups. Replace the placeholder values with your actual API keys and adjust the model name as needed. Delete the placeholder values of the providers you don't use.


Pull the Docker image (~2.3GB since it packages browser and models):
```bash
docker pull ghcr.io/joinly-ai/joinly:latest
```

Launch your meeting in [Zoom](https://www.zoom.com), [Google Meet](https://meet.google.com) or Teams and let joinly join the meeting using the meeting link as `<MeetingURL>`. Then, run the following command from the folder where you created the `.env` file:
```bash  
docker run --env-file .env ghcr.io/joinly-ai/joinly:latest --client <MeetingURL>
```
> :red_circle: Having trouble getting started? Let's figure it out together on our [discord](https://discord.com/invite/AN5NEBkS4d)! 

# :technologist: Run an external client
In Quickstart, we ran the Docker Container directly as a client using `--client`. But we can also run it as a server and connect to it from outside the container, which allows us to connect other MCP servers. Here, we run an external client using the [joinly-client package](https://pypi.org/project/joinly-client/) and connect it to the joinly MCP server.

> [!IMPORTANT]
> **Prerequisites**: do the [Quickstart](#zap-quickstart) (except the last command), [install uv](https://github.com/astral-sh/uv), and open two terminals

Start the joinly server in the first terminal (note, we are not using `--client` here and forward port `8000`):
```bash  
docker run -p 8000:8000 ghcr.io/joinly-ai/joinly:latest
```

While the server is running, start the example client implementation in the second terminal window to connect to it and join a meeting:
```bash  
uvx joinly-client --env-file .env <MeetingUrl>
```

## Add MCP servers to the client
Add the tools of any MCP server to the agent by providing a JSON configuration. The configuration file can contain multiple entries under `"mcpServers"` which will all be available as tools in the meeting (see [fastmcp client docs](https://gofastmcp.com/clients/client) for config syntax):

```json
{
    "mcpServers": {
        "localServer": {
            "command": "npx",
            "args": ["-y", "package@0.1.0"]
        },
        "remoteServer": {
            "url": "http://mcp.example.com",
            "auth": "oauth"
        }
    }
}
```

Add for example a [Tavily config](examples/config_tavily.json) for web searching, then run the client using the config file, here named `config.json`:

```bash
uvx joinly-client --env-file .env --mcp-config config.json <MeetingUrl>
```

# :wrench: Configurations

Configurations can be given via env variables and/or command line args. Here is a list of common configuration options, which can be used when starting the docker container:
```bash
docker run --env-file .env -p 8000:8000 ghcr.io/joinly-ai/joinly:latest <MyOptionArgs>
```

Alternatively, you can pass `--name`, `--lang`, and [provider settings](#providers) as command line arguments using `joinly-client`, which will override settings of the server:
```bash
uvx joinly-client <MyOptionArgs> <MeetingUrl>
```

## Basic Settings

In general, the docker image provides an MCP server which is started by default. But to quickly get started, we also include a client implementation that can be used via `--client`. Note, in this case no server is started and no other client can connect to it.

```bash
# Start directly as client; default is as server, to which an external client can connect
--client <MeetingUrl>

# Change participant name (default: joinly)
--name "AI Assistant"

# Change language of TTS/STT (default: en)
# Note, availability depends on the TTS/STT provider
--lang de

# Change host & port of the joinly MCP server
--host 0.0.0.0 --port 8000
```

## Providers

### Text-to-Speech
```bash
# Kokoro (local) TTS (default)
--tts kokoro
--tts-arg voice=<VoiceName>  # optionally, set different voice

# ElevenLabs TTS, include ELEVENLABS_API_KEY in .env
--tts elevenlabs
--tts-arg voice_id=<VoiceID>  # optionally, set different voice

# Deepgram TTS, include DEEPGRAM_API_KEY in .env
--tts deepgram
--tts-arg model_name=<ModelName>  # optionally, set different model (voice)
```

### Transcription
```bash
# Whisper (local) STT (default)
--stt whisper
--stt-arg model_name=<ModelName>  # optionally, set different model (default: base), for GPU support see below

# Deepgram STT, include DEEPGRAM_API_KEY in .env
--stt deepgram
--stt-arg model_name=<ModelName>  # optionally, set different model
```

## Debugging
```bash
# Start browser with a VNC server for debugging;
# forward the port and connect to it using a VNC client
--vnc-server --vnc-server-port 5900

# Logging
-v  # or -vv, -vvv

# Help
--help
```

## GPU Support

We provide a Docker image with CUDA GPU support for running the transcription and TTS models on a GPU. To use it, you need to have the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) installed and `CUDA >= 12.6`. Then pull the CUDA-enabled image:
```bash
docker pull ghcr.io/joinly-ai/joinly:latest-cuda
```

Run as client or server with the same commands as above, but use the `joinly:{version}-cuda` image and set `--gpus all`:
```bash
# Run as server
docker run --gpus all --env-file .env -p 8000:8000 ghcr.io/joinly-ai/joinly:latest-cuda -v
# Run as client
docker run --gpus all --env-file .env ghcr.io/joinly-ai/joinly:latest-cuda -v --client <MeetingURL>
```

By default, the `joinly` image uses the Whisper model `base` for transcription, since it still runs reasonably fast on CPU. For `cuda`, it automatically defaults to `distil-large-v3` for significantly better transcription quality. You can change the model by setting `--stt-arg model_name=<model_name>` (e.g., `--stt-arg model_name=large-v3`). However, only the respective default models are packaged in the docker image, so it will start to download the model weights on container start.

# :test_tube: Create your own agent

You can also write your own agent and connect it to our joinly MCP server. See the [code examples](https://github.com/joinly-ai/joinly/client/README.md#code-usage) for the joinly-client package or the [client_example.py](examples/client_example.py) if you want a starting point that doesn't depend on our framework.

The joinly MCP server provides following tools and resources:

### Tools

- **`join_meeting`** - Join meeting with URL, participant name, and optional passcode
- **`leave_meeting`** - Leave the current meeting
- **`speak_text`** - Speak text using TTS (requires `text` parameter)
- **`send_chat_message`** - Send chat message (requires `message` parameter)
- **`mute_yourself`** - Mute microphone
- **`unmute_yourself`** - Unmute microphone
- **`get_chat_history`** - Get current meeting chat history in JSON format
- **`get_participants`** - Get current meeting participants in JSON format
- **`get_transcript`** - Get current meeting transcript in JSON format, optionally filtered by minutes
- **`get_video_snapshot`** - Get an image from the current meeting, e.g., view a current screenshare

### Resources

- **`transcript://live`** - Live meeting transcript in JSON format, including timestamps and speaker information. Subscribable for real-time updates when new utterances are added.

# :building_construction: Developing joinly.ai

For development we recommend using the development container, which installs all necessary dependencies. To get started, install the DevContainer Extension for Visual Studio Code, open the repository and choose **Reopen in Container**.



The installation can take some time, since it downloads all packages as well as models for Whisper/Kokoro and the Chromium browser. At the end, it automatically invokes the [download_assets.py](scripts/download_assets.py) script. If you see errors like `Missing kokoro-v1.0.onnx`, run this script manually using:
```bash
uv run scripts/download_assets.py
```

We'd love to see what you are using it for or building with it. Showcase your work on our [discord](https://discord.com/invite/AN5NEBkS4d)
# :pencil2: Roadmap

**Meeting**
- [x] Meeting chat access
- [ ] Camera in video call with status updates
- [ ] Enable screen share during video conferences
- [ ] Participant metadata and joining/leaving
- [ ] Improve browser agent capabilities

**Conversation**
- [x] Speaker attribute for transcription
- [ ] Improve client memory: reduce token usage, allow persistence across meetings
events
- [ ] Improve End-of-Utterance/turn-taking detection
- [ ] Human approval mechanism from inside the meeting

**Integrations**
- [ ] Showcase how to add agents using the A2A protocol
- [ ] Add more provider integrations (STT, TTS)
- [ ] Integrate meeting platform SDKs
- [ ] Add alternative open-source meeting provider
- [ ] Add support for Speech2Speech models
  
# :busts_in_silhouette: Contributing
Contributions are always welcome! Feel free to open issues for bugs or submit a feature request. We'll do our best to review all contributions promptly and help merge your changes.

Please check our [Roadmap](#pencil2-roadmap) and don't hesitate to reach out to us!

# :memo: License
This project is licensed under the MIT License ‒ see the [LICENSE](LICENSE) file for details.

# :speech_balloon: Getting help
If you have questions or feedback, or if you would like to chat with the maintainers or other community members, please use the following links:
-  [Join our Discord](https://discord.com/invite/AN5NEBkS4d)
-  [Explore our GitHub Discussions](https://github.com/joinly-ai/joinly/discussions)

<div align="center">
Made with ❤️ in Osnabrück
 </div>
