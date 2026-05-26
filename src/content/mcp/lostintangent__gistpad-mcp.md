---
name: "lostintangent/gistpad-mcp"
description: "Use GitHub Gists to manage and access your personal knowledge, daily notes, and reusable prompts. This acts as a companion to https://gistpad.dev and the GistPad VS Code extension."
description_tr: "GitHub Gists'i kişisel bilgilerinizi, günlük notlarınızı ve yeniden kullanılabilir promptlarınızı yönetmek ve erişmek için kullanın. Bu araç, https://gistpad.dev ve GistPad VS Code extension'ına eşlik eder."
category: "Knowledge & Memory"
repo: "lostintangent/gistpad-mcp"
stars: 194
url: "https://github.com/lostintangent/gistpad-mcp"
body_length: 7343
license: "MIT"
language: "TypeScript"
homepage: "https://npmjs.com/gistpad-mcp"
body_tr: |-
  # 📓 GistPad MCP

  Kişisel bilginizi, günlük notlarınızı ve yeniden kullanılabilir promptlarınızı GitHub Gists aracılığıyla yönetmek ve paylaşmak için bir MCP sunucusu. GistPad [VS Code extension](https://aka.ms/gistpad) ve [GistPad.dev](https://gistpad.dev) (web/mobil için) uygulamasının bir tamamlayıcısıdır. Herhangi bir MCP özellikli yapay zeka ürününden (örn. GitHub Copilot, Claude Desktop) gistlerinize erişmenize ve düzenlemenize olanak sağlar.

  - 🏃 [Başlarken](#-başlarken)
  - 🛠️ [Dahil edilen araçlar](#️-dahil-edilen-araçlar)
  - 📁 [Dahil edilen kaynaklar](#-dahil-edilen-kaynaklar)
  - 💬 [Yeniden kullanılabilir promptlar](#-yeniden-kullanılabilir-promptlar)
  - 💻 [CLI referansı](#-cli-referansı)

  ## 🏃 Başlarken

  1. VS Code kullanıyor musunuz?
     1. [GistPad extension](https://aka.ms/gistpad)'i yükleyin ve ardından VS Code'u yeniden yükleyin

        > _Not: Bu, VS Code 1.101.0+ gerektirir, eski bir sürümdeysseniz güncelleme zamanı gelmiştir!_

     1. `GistPad` sekmesini açın ve GitHub hesabınızla oturum açın. Bundan sonra, ek kurulum veya token yönetimi yapmadan Copilot chat'ten (Agent modunda) GistPad'i kullanmaya başlayabilirsiniz 💪

  1. Diğer MCP istemcileri...
     1. Yalnızca `gist` kapsamını içeren bir personal access token oluşturun: https://github.com/settings/tokens/new
     1. Aşağıdakine eşdeğer bir şeyi istemcinizin MCP config dosyasına ekleyin (veya "MCP sunucusu ekle" GUI/TUI aracılığıyla):

        ```json
        {
          "mcpServers": {
            "gistpad": {
              "command": "npx",
              "args": ["-y", "gistpad-mcp"],
              "env": {
                "GITHUB_TOKEN": "<YOUR_PAT>"
              }
            }
          }
        }
        ```

  İstemciniz kurulduktan sonra, gistler + MCP ile eğlenmeye başlayabilirsiniz! 🥳 Örneğin, aşağıdaki gibi şeyleri deneyin...

  1. **İçeriği keşfetme**
     - `Bu ay kaç gist düzenledim?`
     - `Benim <foo> gistimin özeti nedir?`

  1. **İçerik oluşturma**
     - `<foo> hakkında yeni bir gist oluştur`
     - `Benim <foo> gistimi <bar>'ı vurgulayacak şekilde güncelle`

  1. **Günlük yapılacaklar**
     - `Bugün benim tamamlanmamış yapılacaklarım nelerdir?`
     - `<foo> için yeni bir yapılacak ekle`

  1. **İşbirliği**
     - `<foo> gistine <bar> diyerek bir yorum ekle`
     - `Bana <foo> gistinin paylaşım URL'sini ver`
     - `Yıldızlanmış gistlerimi göster`

  1. **Gist organizasyonu**
     - `<foo> hakkındaki gistimi arşivle`
     - `<bar> gistine yeni bir <foo> dosyası ekle ve <baz> içeriğini buna geçir`

  1. **Yeniden kullanılabilir promptlar**
     - `Belirtilen bir manga serisini web'de arayan ve ardından bunun hakkında bir özet sağlayan yeni bir prompt oluştur`
     - `<foo> hakkındaki promptumu sil`

  ## 🛠️ Dahil edilen araçlar

  ### Gist yönetimi

  - `list_gists` - Tüm gistlerinizi listeleyin (günlük notları ve arşivlenmiş gistleri hariç).
  - `get_gist` - Bir gistinizin içeriğini ID'ye göre alın.
  - `create_gist` - Belirtilen açıklama ve başlangıç dosya içeriğiyle yeni bir gist oluşturun.
  - `delete_gist` - Bir gisti ID'ye göre silin.
  - `update_gist_description` - Bir gistin açıklamasını ID'ye göre güncelleyin.
  - `duplicate_gist` - Tüm dosyalarıyla birlikte mevcut bir gistin bir kopyasını oluşturun.
  - `refresh_gists` - Gist listelerinizi yeniden yükleyin ve önbelleğe alınan verileri yoksayın.

  ### Dosya yönetimi

  - `update_gist_file` - Bir gist içindeki belirli bir dosyanın içeriğini güncelleyin.
  - `add_gist_file` - Mevcut bir giste yeni bir dosya ekleyin.
  - `delete_gist_file` - Bir gist'ten dosya silin.
  - `rename_gist_file` - Bir gist içindeki mevcut bir dosyayı yeniden adlandırın.
  - `edit_gist_file` - Bir gist dosyasına hedefli bulma ve değiştirme düzenlemeleri yapın.

  ### Yorumlar

  - `list_gist_comments` - Belirtilen bir gist için tüm yorumları listeleyin.
  - `add_gist_comment` - Bir giste yeni bir yorum ekleyin.
  - `edit_gist_comment` - Mevcut bir yorumun içeriğini güncelleyin.
  - `delete_gist_comment` - Bir gist'ten yorum silin.

  ## 🛠️ İsteğe bağlı araçlar

  Aşağıdaki araç setleri, araç yüzeyini minimal tutmak için varsayılan olarak devre dışı bırakılmıştır. Bunları karşılık gelen CLI bayrağını geçirerek etkinleştirin.

  #### Günlük notlar (`--daily`)

  - `get_todays_note` - Bugünün günlük notunu alın veya oluşturun.
  - `update_todays_note` - Bugünün günlük notunun içeriğini güncelleyin.
  - `list_daily_notes` - Tüm günlük notlarınızı listeleyin.
  - `get_daily_note` - Belirtilen tarihe göre belirli bir günlük notun içeriğini alın.
  - `delete_daily_note` - Belirtilen tarihe göre belirli bir günlük notu silin.

  #### Yıldızlama (`--starred`)

  - `list_starred_gists` - Tüm yıldızlanmış gistlerinizi listeleyin.
  - `star_gist` - Belirtilen bir gisti ID'ye göre yıldızlayın.
  - `unstar_gist` - Yıldızlanmış bir gisti yıldızdan çıkarın.

  #### Arşivleme (`--archived`)

  - `list_archived_gists` - Tüm arşivlenmiş gistlerinizi listeleyin.
  - `archive_gist` - Gistlerinizin birini arşivleyin.
  - `unarchive_gist` - Arşivlenmiş bir gisti arşivden çıkarın.

  #### Promptlar (`--prompts`)

  - `list_gist_prompts` - Prompts koleksiyonunuzdaki promptları listeleyin.
  - `add_gist_prompt` - Prompts koleksiyonunuza yeni bir prompt ekleyin.
  - `delete_gist_prompt` - Koleksiyonunuzdan bir promptu silin.

  ## 📁 Dahil edilen kaynaklar

  Yukarıdaki araçlara ek olarak, GistPad MCP sunucusu ayrıca gistlerinizi kaynaklar olarak ortaya çıkarır (`gist:///` URI şemasını kullanarak). Bu, istemcilerin bunları araç yürütmesi gerekmeden okumasına olanak sağlar.

  Bir gist eklediğinizde/sildiğinizde/çoğalttığınızda veya gistin açıklamasını değiştirdiğinizde, MCP istemcilerine kaynak listesinin değiştiğini belirten bir bildirim sağlanacaktır. MCP istemciniz kaynak aboneliklerini destekliyorsa, belirli bir giste abone olabilir ve güncellendiğinde bildirim alabilirsiniz.

  Ek olarak, MCP istemcileriniz kaynak şablonlarını destekleyen istemciler için, GistPad ayrıca `gist:///{gistId}/comments` adresinde bir kaynak ortaya çıkarır. Bu, `list_gist_comments` aracını yürütme gerekmeden bir gistin yorumlarını sorgulamaya olanak sağlar.

  ### Kaynak konfigürasyonu

  Arşivlenmiş gistlerinizi, yıldızlanmış gistlerinizi ve/veya günlük notlarınızı kaynaklar olarak ortaya çıkarmak istiyorsanız, MCP sunucusu konfigürasyonunuzu `gistpad-mcp` CLI'sine `--archived`, `--starred` ve/veya `--daily` bayraklarını geçecek şekilde güncelleyin.

  ## 💬 Yeniden kullanılabilir promptlar

  GistPad, bir gist içinde markdown dosyaları olarak saklanan parametreleştirilmiş/yeniden kullanılabilir promptlar oluşturmanıza ve yönetmenize olanak sağlar. `add_prompt` ve `delete_prompt` aracını kullanarak, MCP istemcinizden belirtilen içerik/argümanlar ile bir prompt oluşturmasını/silmesini isteyerek promptları yönetebilirsiniz.

  Perde arkasında, promptlar `💬 Prompts` adlı bir gist içinde markdown dosyaları olarak depolanır (bu, `add_prompt` aracı tarafından otomatik olarak oluşturulur). Prompt dosyaları, prompt'ı gövde olarak ve isteğe bağlı olarak ön madde kullanarak açıklamalar ve argümanlar içerir. Prompt argümanlar kullanıyorsa, promptun gövdesi `{{argument}}` yer tutuçlarını içermelidir. Bu, MCP istemcisi bunu aldığında değiştirilecektir.

  ## 💻 CLI Referansı

  `gistpad-mcp` CLI aşağıdaki isteğe bağlı bayrakları kabul eder:

  - `--archived` - Arşiv araçlarını etkinleştirin ve arşivlenmiş gistleri kaynaklara dahil edin
  - `--starred` - Yıldızlama araçlarını etkinleştirin ve yıldızlanmış gistleri kaynaklara dahil edin
  - `--daily` - Günlük not araçlarını etkinleştirin ve günlük notları kaynaklara dahil edin
  - `--prompts` - Prompt araçlarını ve MCP prompt işleyicilerini etkinleştirin
  - `--markdown` - Gistleri yalnızca Markdown dosyalarından oluşturulanlarla filtrelenin

  ## 🧰 Sorun giderme

  - <u>Listenizde bir gist görmüyor musunuz?</u> GistPad MCP sunucusu gist listenizi önbelleğe alır ve 1) MCP sunucusu aracılığıyla herhangi bir değişiklik yaptığınızda veya 2) her saat günceller. Ancak, bir gisti harici bir istemci kullanarak ekler/düzenler/silerseniz, GistPad MCP'nin kendisini yenilemesini söylemeniz gerekebilir (saatlik yenilemesini henüz gerçekleştirmediyse). Bunu `refresh_gists` aracını tetikleyerek yapabilirsiniz (örn. VS Code Copilot chat'te `#refresh_gists` komutunu çalıştırarak).
---

# 📓 GistPad MCP

An MCP server for managing and sharing your personal knowledge, daily notes, and reuseable prompts via GitHub Gists. It's a companion to the GistPad [VS Code extension](https://aka.ms/gistpad) and [GistPad.dev](https://gistpad.dev) (for web/mobile), which allows you to access and edit your gists from any MCP-enabled AI product (e.g. GitHub Copilot, Claude Desktop).

- 🏃 [Getting started](#-getting-started)
- 🛠️ [Included tools](#️-included-tools)
- 📁 [Included resources](#-included-resources)
- 💬 [Reusable prompts](#-reusable-prompts)
- 💻 [CLI reference](#-cli-reference)

## 🏃 Getting started

1. Using VS Code?
   1. Install the [GistPad extension](https://aka.ms/gistpad) and then reload VS Code

      > _Note: This requires VS Code 1.101.0+, so if you're on an older version, it's time to upgrade!_

   1. Open the `GistPad` tab and sign-in with your GitHub account. After that, you can begin using GistPad from Copilot chat (in `Agent` mode) without doing any extra setup or token management 💪

1. Other MCP clients...
   1. Generate a personal access token that includes _only_ the `gist` scope: https://github.com/settings/tokens/new
   1. Add the equivalent of the following to your client's MCP config file (or via an "Add MCP server" GUI/TUI):

      ```json
      {
        "mcpServers": {
          "gistpad": {
            "command": "npx",
            "args": ["-y", "gistpad-mcp"],
            "env": {
              "GITHUB_TOKEN": "<YOUR_PAT>"
            }
          }
        }
      }
      ```

Once your client it setup, you can start having fun with gists + MCP! 🥳 For example, try things like...

1. **Exploring content**
   - `How many gists have I edited this month?`
   - `What's the summary of my <foo> gist?`

1. **Creating content**
   - `Create a new gist about <foo>`
   - `Update my <foo> gist to call out <bar>`

1. **Daily todos**
   - `What are my unfinished todos for today?`
   - `Add a new todo for <foo>`

1. **Collaboration**
   - `Add a comment to the <foo> gist saying <bar>`
   - `Give me a share URL for the <foo> gist`
   - `View my starred gists`

1. **Gist organization**
   - `Archive my gist about <foo>`
   - `Add a new <foo> file to the <bar> gist and migrate the <baz> content into it`

1. **Reusable prompts**
   - `Create a new prompt that searches the web ofor a specified manga series and then provides a summary about it`
   - `Delete my prompt about <foo>`

## 🛠️ Included tools

### Gist management

- `list_gists` - List all of your gists (excluding daily notes and archived gists).
- `get_gist` - Get the contents of a gist by ID.
- `create_gist` - Create a new gist with a specified description and initial file contents.
- `delete_gist` - Delete a gist by ID.
- `update_gist_description` - Update a gist's description by ID.
- `duplicate_gist` - Create a copy of an existing gist with all its files.
- `refresh_gists` - Reload your gist lists, ignoring any cached data.

### File management

- `update_gist_file` - Update the contents of a specific file in a gist.
- `add_gist_file` - Add a new file to an existing gist.
- `delete_gist_file` - Delete a file from a gist.
- `rename_gist_file` - Rename an existing file within a gist.
- `edit_gist_file` - Make targeted find-and-replace edits to a gist file.

### Comments

- `list_gist_comments` - List all comments for a specified gist.
- `add_gist_comment` - Add a new comment to a gist.
- `edit_gist_comment` - Update the content of an existing comment.
- `delete_gist_comment` - Delete a comment from a gist.

## 🛠️ Optional tools

The following tool sets are disabled by default to keep the tool surface minimal. Enable them by passing the corresponding CLI flag.

#### Daily notes (`--daily`)

- `get_todays_note` - Get or create today's daily note.
- `update_todays_note` - Update the content of today's daily note.
- `list_daily_notes` - List all of your daily notes.
- `get_daily_note` - Get the contents of a specific daily note by date.
- `delete_daily_note` - Delete a specific daily note by date.

#### Starring (`--starred`)

- `list_starred_gists` - List all your starred gists.
- `star_gist` - Star a specific gist by ID.
- `unstar_gist` - Unstar a starred gist by ID.

#### Archiving (`--archived`)

- `list_archived_gists` - List all of your archived gists.
- `archive_gist` - Archive one of your gists.
- `unarchive_gist` - Unarchive an archived gist.

#### Prompts (`--prompts`)

- `list_gist_prompts` - List the prompts in your prompts collection.
- `add_gist_prompt` - Add a new prompt to your prompts collection.
- `delete_gist_prompt` - Delete a prompt from your collection.

## 📁 Included resources

In addition to the above tools, the GistPad MCP server also exposes your gists as resources (using the `gist:///` URI scheme), which allows clients to read them without requiring tool execution.

When you add/delete/duplicate a gist, or change a gist's description, then a notification will be provided to MCP clients, indicating that the list of resources have changed. And if your MCP client supports resource subscriptions, then you can subscribe to a specific gist and get notified when it's updated.

Additionally, for MCP clients that support resource templates, GistPad also exposes a resource at `gist:///{gistId}/comments`, which allows querying the comments for a gist (without needing to execute the `list_gist_comments` tool).

### Resource configuration

If you'd like to expose either your archived gists, starred gists, and/or daily notes as resources, then simply update your MCP server config to pass the `--archived`, `--starred`, and/or `--daily` flags to the `gistpad-mcp` CLI.

## 💬 Reusable prompts

GistPad allows you to create and manage parameterized/reusable prompts that are stored as markdown files in a gist. You can manage prompts using the `add_prompt` and `delete_prompt` tool, by simply asking your MCP client to create/delete a prompt, with the specified contents/arguments you want.

Behind the scenes, prompts are stored as markdown files in a gist called `💬 Prompts` (which is automatically created by the `add_prompt` tool). The prompt files include their prompt as the body, and optionally, a description and arguments using front-matter. And if the prompt makes use of arguments, the body of the prompt should include `{{argument}}` placeholders, which will be replaced when the MCP client retrieves it.

## 💻 CLI Reference

The `gistpad-mcp` CLI accepts the following optional flags:

- `--archived` - Enable archive tools and include archived gists in resources
- `--starred` - Enable starring tools and include starred gists in resources
- `--daily` - Enable daily note tools and include daily notes in resources
- `--prompts` - Enable prompt tools and MCP prompt handlers
- `--markdown` - Filter gists to only those composed of Markdown files

## 🧰 Troubleshooting

- <u>Not seeing a gist in your list?</u> The GistPad MCP server caches your gist list and updates it 1) anytime you make a change through the MCP server, or 2) every hour. However, if you add/edit/delete a gist using an external client, you may need to tell GistPad MCP to refresh itself (assuming it hasn't performed its hourly refresh yet). You can do this by triggering the `refresh_gists` tool (e.g. running `#refresh_gists` in VS Code Copilot chat).
