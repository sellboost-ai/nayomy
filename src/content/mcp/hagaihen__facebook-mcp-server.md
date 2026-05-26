---
name: "HagaiHen/facebook-mcp-server"
description: "Integrates with Facebook Pages to enable direct management of posts, comments, and engagement metrics through the Graph API for streamlined social media management."
description_tr: "Facebook Sayfaları ile entegre olarak Graph API üzerinden gönderileri, yorumları ve engagement metriklerini doğrudan yönetebilir ve sosyal medya yönetimini kolaylaştırır."
category: "Social Media"
repo: "HagaiHen/facebook-mcp-server"
stars: 160
url: "https://github.com/HagaiHen/facebook-mcp-server"
body_length: 6515
license: "MIT"
language: "Python"
body_tr: |-
  # Facebook MCP Server

  Bu proje, Facebook Graph API'sini kullanarak Facebook Sayfasında etkileşimleri otomatikleştiren ve yöneten bir **MCP sunucusudur**. Yazı oluşturma, yorumları yönetme, yazı öngörülerini alma ve negatif geri bildirimi filtreleme araçlarını sunarak Claude veya diğer LLM tabanlı ajanlarla entegrasyon için hazırdır.

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/HagaiHen/facebook-mcp-server)](https://archestra.ai/mcp-catalog/hagaihen__facebook-mcp-server)
  <a href="https://glama.ai/mcp/servers/@HagaiHen/facebook-mcp-server">
    
  </a>

  ---

  ## 🤖 Bu Nedir?

  Bu MCP, doğrudan bir Facebook Sayfasına bağlanan ve yaygın API işlemlerini LLM-dostça fonksiyonlar olarak soyutlayan yapay zeka tarafından çağrılabilir araçlar takımı sağlar.

  ### ✅ Faydalar

  - **Sosyal medya yöneticilerini** moderasyon ve analitiği otomatikleştirmeye güçlendirir.
  - **Claude Desktop veya herhangi bir Agent istemcisiyle** sorunsuz şekilde entegre olur.
  - Facebook içeriğini doğal dilden ince kontrol sağlar.

  ---

  ## 📦 Özellikler

  | Araç                             | Açıklama                                                         |
  |----------------------------------|---------------------------------------------------------------------|
  | `post_to_facebook`               | Bir ileti ile yeni bir Facebook yazısı oluşturun.                          |
  | `reply_to_comment`               | Bir yazı üzerindeki belirli bir yoruma yanıt verin.                              |
  | `get_page_posts`                 | Sayfadaki son yazıları alın.                                |
  | `get_post_comments`              | Belirli bir yazı üzerindeki yorumları alın.                                     |
  | `delete_post`                    | Belirli bir yazıyı ID'ye göre silin.                                       |
  | `delete_comment`                 | Belirli bir yorumu ID'ye göre silin.                                    |
  | `hide_comment`                   | Bir yorumu genel görüşten gizleyin.                         |
  | `unhide_comment`                 | Daha önce gizlenen bir yorumu gösterin.                      |
  | `delete_comment_from_post`       | Belirli bir yazıdan yorumu silmek için takma ad.                  |
  | `filter_negative_comments`       | Negatif duyarlılık anahtar kelimeleri içeren yorumları filtreleyin.               |
  | `get_number_of_comments`         | Bir yazı üzerindeki yorum sayısını sayın.                             |
  | `get_number_of_likes`            | Bir yazı üzerindeki beğeni sayısını sayın.                                |
  | `get_post_impressions`           | Bir yazı üzerindeki toplam gösterimleri alın.                                    |
  | `get_post_impressions_unique`    | Yazıyı gören benzersiz kullanıcı sayısını alın.                        |
  | `get_post_impressions_paid`      | Yazı üzerindeki ödenen gösterim sayısını alın.                         |
  | `get_post_impressions_organic`   | Yazı üzerindeki organik gösterim sayısını alın.                      |
  | `get_post_engaged_users`         | Yazıyla etkileşimde bulunan kullanıcı sayısını alın.                      |
  | `get_post_clicks`                | Yazı üzerindeki tıklama sayısını alın.                                   |
  | `get_post_reactions_like_total`  | Toplam 'Beğen' tepki sayısını alın.                               |
  | `get_post_top_commenters`        | Bir yazı üzerindeki en çok yorum yapanları alın.                                   |
  | `post_image_to_facebook`         | Altyazılı bir resmi Facebook sayfasına gönderin.                  |
  | `send_dm_to_user`                | Bir kullanıcıya doğrudan mesaj gönderin.                                    |
  | `update_post`                    | Mevcut bir yazının mesajını güncelleyin.                                 |
  | `schedule_post`                  | Yazıyı gelecekte yayınlanmak üzere planlayın.                     |
  | `get_page_fan_count`             | Sayfa hayran sayısını alın.                     |
  | `get_post_share_count`           | Bir yazı üzerindeki paylaşım sayısını alın.                         |
  | `get_post_reactions_breakdown`   | Tek çağrıda bir yazı için tüm tepki sayılarını alın.              |
  | `bulk_delete_comments`           | Birden çok yorumu ID'ye göre silin.                              |
  | `bulk_hide_comments`             | Birden çok yorumu ID'ye göre gizleyin.                               |
  | `bulk_unhide_comments`           | Birden çok yorumu ID'ye göre gösterin.                             |
  | `get_comment_replies`            | Belirli bir yoruma tüm yanıtları alın.                      |
  | `get_post_permalink`             | Bir yazının permalink URL'sini alın.                            |
  | `get_scheduled_posts`            | Sayfa üzerindeki tüm planlanan (yayınlanmamış) yazıları listeleyin.         |
  | `get_page_info`                  | Genişletilmiş sayfa ayrıntılarını alın (ad, hakkında, kategori, website). |

  ---

  ## 🚀 Kurulum ve Yükleme

  ### 1. Depoyu Klonlayın

  ```bash
  git clone https://github.com/your-org/facebook-mcp-server.git
  cd facebook-mcp-server
  ```

  ### 2. 🛠️ Yükleme

  Hızlı Python paket yöneticisi uv kullanarak bağımlılıkları yükleyin:
  Eğer uv henüz yüklü değilse, şunu çalıştırın:
  ```bash
  curl -Ls https://astral.sh/uv/install.sh | bash
  ```

  uv yüklendikten sonra, proje bağımlılıklarını yükleyin:
  ```bash
  uv pip install -r requirements.txt
  ```

  ### 3. Ortamı Ayarlayın

  Kök dizinde bir .env dosyası oluşturun ve Facebook Sayfası kimlik bilgilerinizi ekleyin. 
  Bunları https://developers.facebook.com/tools/explorer adresinden alabilirsiniz

  ```bash
  FACEBOOK_ACCESS_TOKEN=your_facebook_page_access_token
  FACEBOOK_PAGE_ID=your_page_id
  ```

  ## 🧩 Claude Desktop ile Kullanım
  FacebookMCP'yi Claude'da ayarlamak için:

  1. Claude'u açın.
  2. Ayarlar → Geliştirici → Yapılandırmayı Düzenle'ye gidin.
  3. Açılan yapılandırma dosyasında aşağıdaki girişi ekleyin:

  ```bash
  "FacebookMCP": {
    "command": "uv",
    "args": [
      "run",
      "--with",
      "mcp[cli]",
      "--with",
      "requests",
      "mcp",
      "run",
      "/path/to/facebook-mcp-server/server.py"
    ]
  }
  ```

  ---

  ## ✅ Başlamaya Hazırsınız!

  Hepsi bu — Facebook MCP sunucunuz artık tam olarak yapılandırılmış ve Claude Desktop'u güçlendirmeye hazırdır. Artık yazı oluşturabilir, moderasyon yapabilir ve tüm etkileşimi doğal dil komutlarıyla ölçebilirsiniz!

  ---

  ## 🤝 Katkıda Bulunun

  Katkılar, sorunlar ve özellik istekleri memnuniyetle karşılanır!  
  Depoyu forklayın ve bir pull request gönderin.

  - Bir branch oluşturun: `git checkout -b feature/YourFeature`
  - Değişikliklerinizi commit edin: `git commit -m 'feat: add new feature'`
  - Branch'e push edin: `git push origin feature/YourFeature`
  - Bir pull request açın 🎉
---

# Facebook MCP Server

This project is a **MCP server** for automating and managing interactions on a Facebook Page using the Facebook Graph API. It exposes tools to create posts, moderate comments, fetch post insights, and filter negative feedback — ready to plug into Claude, or other LLM-based agents.

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/HagaiHen/facebook-mcp-server)](https://archestra.ai/mcp-catalog/hagaihen__facebook-mcp-server)
<a href="https://glama.ai/mcp/servers/@HagaiHen/facebook-mcp-server">
  
</a>

---

## 🤖 What Is This?

This MCP provides a suite of AI-callable tools that connect directly to a Facebook Page, abstracting common API operations as LLM-friendly functions.

### ✅ Benefits

- Empowers **social media managers** to automate moderation and analytics.
- Seamlessly integrates with **Claude Desktop or any Agent client**.
- Enables fine-grained control over Facebook content from natural language.

---

## 📦 Features

| Tool                             | Description                                                         |
|----------------------------------|---------------------------------------------------------------------|
| `post_to_facebook`               | Create a new Facebook post with a message.                          |
| `reply_to_comment`               | Reply to a specific comment on a post.                              |
| `get_page_posts`                 | Retrieve recent posts from the Page.                                |
| `get_post_comments`              | Fetch comments on a given post.                                     |
| `delete_post`                    | Delete a specific post by ID.                                       |
| `delete_comment`                 | Delete a specific comment by ID.                                    |
| `hide_comment`                   | Hide a comment from public view.                         |
| `unhide_comment`                 | Unhide a previously hidden comment.                      |
| `delete_comment_from_post`       | Alias for deleting a comment from a specific post.                  |
| `filter_negative_comments`       | Filter out comments with negative sentiment keywords.               |
| `get_number_of_comments`         | Count the number of comments on a post.                             |
| `get_number_of_likes`            | Count the number of likes on a post.                                |
| `get_post_impressions`           | Get total impressions on a post.                                    |
| `get_post_impressions_unique`    | Get number of unique users who saw the post.                        |
| `get_post_impressions_paid`      | Get number of paid impressions on the post.                         |
| `get_post_impressions_organic`   | Get number of organic impressions on the post.                      |
| `get_post_engaged_users`         | Get number of users who engaged with the post.                      |
| `get_post_clicks`                | Get number of clicks on the post.                                   |
| `get_post_reactions_like_total`  | Get total number of 'Like' reactions.                               |
| `get_post_top_commenters`        | Get the top commenters on a post.                                   |
| `post_image_to_facebook`         | Post an image with a caption to the Facebook page.                  |
| `send_dm_to_user`                | Send a direct message to a user.                                    |
| `update_post`                    | Updates an existing post's message.                                 |
| `schedule_post`                  | Schedule a post for future publication.                     |
| `get_page_fan_count`             | Retrieve the total number of Page fans.                     |
| `get_post_share_count`           | Get the number of shares on a post.                         |
| `get_post_reactions_breakdown`   | Get all reaction counts for a post in one call.              |
| `bulk_delete_comments`           | Delete multiple comments by ID.                              |
| `bulk_hide_comments`             | Hide multiple comments by ID.                               |
| `bulk_unhide_comments`           | Unhide multiple comments by ID.                             |
| `get_comment_replies`            | Get all replies to a specific comment.                      |
| `get_post_permalink`             | Get the permalink URL of a post.                            |
| `get_scheduled_posts`            | List all scheduled (unpublished) posts on the Page.         |
| `get_page_info`                  | Get extended Page details (name, about, category, website). |

---

## 🚀 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/facebook-mcp-server.git
cd facebook-mcp-server
```

### 2. 🛠️ Installation

Install dependencies using uv, a fast Python package manager:
If uv is not already installed, run:
```bash
curl -Ls https://astral.sh/uv/install.sh | bash
```

Once uv is installed, install the project dependencies:
```bash
uv pip install -r requirements.txt
```

### 3. Set Up Environment

Create a .env file in the root directory and add your Facebook Page credentials. 
You can obtain these from  https://developers.facebook.com/tools/explorer

```bash
FACEBOOK_ACCESS_TOKEN=your_facebook_page_access_token
FACEBOOK_PAGE_ID=your_page_id
```

## 🧩 Using with Claude Desktop
To set up the FacebookMCP in Clade:

1.	Open Clade.
2.	Go to Settings → Developer → Edit Config.
3.	In the config file that opens, add the following entry:

```bash
"FacebookMCP": {
  "command": "uv",
  "args": [
    "run",
    "--with",
    "mcp[cli]",
    "--with",
    "requests",
    "mcp",
    "run",
    "/path/to/facebook-mcp-server/server.py"
  ]
}
```

---

## ✅ You’re Ready to Go!

That’s it — your Facebook MCP server is now fully configured and ready to power Claude Desktop. You can now post, moderate, and measure engagement all through natural language prompts!

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo and submit a pull request.

- Create a branch: `git checkout -b feature/YourFeature`
- Commit your changes: `git commit -m 'feat: add new feature'`
- Push to the branch: `git push origin feature/YourFeature`
- Open a pull request 🎉
