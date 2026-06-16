---
name: "helium-mcp-cursorrules-prompt-file"
clean_name: "Helium Mcp"
description: "Cursor rules for Helium Mcp."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/helium-mcp-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/helium-mcp-cursorrules-prompt-file.mdc"
body_length: 4431
file_extension: ".mdc"
body_tr: |-
  # Cursor'da Helium MCP

  Kullanıcının projesi veya sorusu **haber**, **medya yanlılığı**, **piyasalar**, **opsiyonlar** veya **finansal memeler** içerdiğinde, başlıkları, fiyatları veya Greeks'i tahmin etmek yerine **Helium MCP araçlarını** (etkinse) tercih edin. Helium, [Helium Trades](https://heliumtrades.com) tarafından barındırılan bir MCP hizmetidir; upstream dokümanlar ve kaynak kodu [github.com/connerlambden/helium-mcp](https://github.com/connerlambden/helium-mcp) adresinde yer alır.

  ## Sunucuyu Cursor'da etkinleştirin

  Barındırılan uç noktaya işaret eden akışlı bir HTTP MCP girişi ekleyin (ücretsiz katman için API anahtarı gerekli değildir; ücretli katmanlar MCP sayfasındaki anahtarları kullanır):

  ```json
  {
    "mcpServers": {
      "helium": {
        "url": "https://heliumtrades.com/mcp"
      }
    }
  }
  ```

  Alternatif: İş akışınız yerel bir işlem gerektirirse `npx @mcp-get-community/server-helium` üzerinden stdio köprüsü (`HELIUM_MCP_URL` geçersiz kılmaları için o paketin README'sine bakın).

  ## Ajan için temel kurallar

  1. **Veri uydurma yerine araçları çağırın** — Makale başlıklarını, yanlılık puanlarını, fiyatları, tahminleri, opsiyon fair değerlerini veya meme meta verilerini yapmayın. Uygun araçla getirin, sonra dönen verileri özetleyin ve alıntı yapın.
  2. **Yinelenen çağrıları en aza indirin** — Toplu akıl yürütme: görev başına sembol başına bir `get_ticker` çağrısı (kullanıcı yenileme istemediği sürece); aynı konuşmada önceki araç çıktısını hala ilgili olduğunda yeniden kullanın.
  3. **Sınırlara uyun** — Genel katman mütevazı bir ücretsiz sorgu limitine sahiptir; paralel çağrıları spam yapmaktan kaçının. Kota veya hız sınırı nedeniyle bir çağrı başarısız olursa, bunu belirtin ve istekleri aralıklandırmayı veya [heliumtrades.com/mcp-page](https://heliumtrades.com/mcp-page/) üzerinden yükseltmeyi önerilir.
  4. **İstemci araç listesine güvenin** — Barındırılan sunucu aşağıda **dokuz** birinci sınıf araç belgelendirir. Cursor sürüm listeniz farklı sayı veya isimler sunuyorsa, MCP panelinden live `tools/list` çıktısını izleyin.

  ## Araç seçim rehberi

  Kullanıcı anahtar kelimelerle eşleşen **ham makaleler** istediğinde (isteğe bağlı filtrelerle: kaynak, kategori, tarih penceresi, minimum paylaşım, sıralama), **`search_news`** kullanın. "X hakkında kanallar ne söylüyor?" ve kanıt toplama için iyidir.

  Kullanıcı **çok kaynağa sahip sentez** istediğinde (sol/merkez/sağ stilinde denge) özetler, önemli çıkarımlar ve ticker'larla — bireysel makale dökümleri değil, **`search_balanced_news`** kullanın.

  Kullanıcı bir **kanal** adlandırdığında (ör. "Fox News", "CNN") ve **kurumsal yanlılık profilleri**, imza cümleleri, benzer kanallar ve isteğe bağlı son makale dökümleri istediğinde **`get_source_bias`** kullanın.

  Kullanıcı **tek bir makale URL'si** sağladığında ve o sayfa için **boyut başına yanlılık puanlandırması** istediğinde **`get_bias_from_url`** kullanın.

  Kullanıcı **manzara görünümü** istediğinde (aynı anda birçok kaynak, sıralanmış/karşılaştırmalı kanallar), **`get_all_source_biases`** kullanın. Bu ağır olabilir; derinliğe karşı genişlik isteyip istemediklerini doğrulayın.

  **`get_ticker`** kullanın **hisse senedi, ETF veya kripto** için: spot bağlam, bull/bear narratif, tahmin tarzı çıktı, IV rank, oynaklık bağlamı ve **Helium tarafından o sembol için döndürülen opsiyon stratejisi** kancaları.

  Kullanıcı **tek bir listelenen opsiyon** belirttiğinde (dayanak, strike, vade tarihi `YYYY-MM-DD`, call/put) ve **ML fair değeri** ve **ITM olasılığı** Helium'un modellerinden istediğinde — broker tekliflerinden değil, **`get_option_price`** kullanın.

  Kullanıcı **sıralanmış opsiyon yapıları** istediğinde (kısa vol vs uzun vol paketleri, kenar tarzı sıralama), **`get_top_trading_strategies`** kullanın. Kullanıcı oranlar, ödül/risk veya tarihsel performans konusunda önem verirse sıralama tercihini iletin.

  **Semantik meme araması** için (başlıklara/OCR'ye karşı anahtar kelimeler), katılım sayıları ve görüntü referansları **`search_memes`** kullanın — finansal kültür/pazar duyarlılığı için faydalı.

  ## Araç çağrılarından sonra yanıt tarzı

  - **Yanıt** ile başlayın, sonra **kompakt madde işaretleri** destekleyici metrikler (yanlılık boyutları, fiyat, tahmin aralığı, strateji adları, meme katılımı).
  - **Sınırlamalar** açıkça adlandırın: model çıktıları yatırım tavsiyesi değildir; haber kapsamı hızlı pazarları geciktirebilir; meme OCR gürültülü olabilir.
  - Haber ve pazarları karıştırırken, **sıra** araçları mantıksal olarak (ör. `search_balanced_news` → bahsedilen ticker'lar için `get_ticker`) yinelenen çakışan aramaların yerine.

  ## Güvenlik ve gizlilik

  **Sırları** araç argümanlarına yapıştırmayın. Makale URL'leri izleyiciler içerebilir; kullanıcının sağladığı kanonik makale bağlantılarını tercih edin. İlgisiz özel repo içeriğini arama sorgularına aktarmayın.
---

# Helium MCP in Cursor

When the user’s project or question involves **news**, **media bias**, **markets**, **options**, or **financial memes**, prefer **Helium MCP tools** (if enabled) over guessing headlines, prices, or Greeks. Helium is a hosted MCP service from [Helium Trades](https://heliumtrades.com); upstream docs and source live at [github.com/connerlambden/helium-mcp](https://github.com/connerlambden/helium-mcp).

## Enable the server in Cursor

Add a streamable HTTP MCP entry pointing at the hosted endpoint (no API key required for the free tier; paid tiers use keys from the MCP page):

```json
{
  "mcpServers": {
    "helium": {
      "url": "https://heliumtrades.com/mcp"
    }
  }
}
```

Alternative: stdio bridge via `npx @mcp-get-community/server-helium` if your workflow requires a local process (see that package’s README for `HELIUM_MCP_URL` overrides).

## Ground rules for the agent

1. **Call tools instead of inventing data** — Do not fabricate article headlines, bias scores, prices, forecasts, option fair values, or meme metadata. Fetch with the appropriate tool, then summarize and cite what came back.
2. **Minimize duplicate calls** — Batch reasoning: one `get_ticker` per symbol per task unless the user asks for a refresh; reuse prior tool output in the same conversation when still relevant.
3. **Respect limits** — The public tier includes a modest free query allowance; avoid spamming parallel calls. If a call fails for quota or rate limits, say so and suggest spacing requests or upgrading via [heliumtrades.com/mcp-page](https://heliumtrades.com/mcp-page/).
4. **Trust the client’s tool list** — The hosted server documents **nine** first-class tools below. If your Cursor build lists a different count or names, follow the live `tools/list` output from the MCP panel.

## Tool selection guide

Use **`search_news`** when the user wants **raw articles** matching keywords, with optional filters (source, category, date window, minimum shares, sort). Good for “what are outlets saying about X?” and evidence gathering.

Use **`search_balanced_news`** when the user wants **multi-outlet synthesis** (left/center/right-style balance) with summaries, takeaways, and tickers—not individual article dumps.

Use **`get_source_bias`** when the user names an **outlet** (e.g. “Fox News”, “CNN”) and wants **institutional bias profiles**, signature phrases, similar outlets, and optional recent article breakdowns.

Use **`get_bias_from_url`** when the user supplies a **single article URL** and wants **per-dimension bias scoring** for that page.

Use **`get_all_source_biases`** when the user wants a **landscape view** (many sources at once, ranked/compare outlets). This can be heavy; confirm they want breadth over depth.

Use **`get_ticker`** for **stocks, ETFs, or crypto**: spot context, bull/bear narrative, forecast-style output, IV rank, volatility context, and **hooks into options strategy** content returned by Helium for that symbol.

Use **`get_option_price`** when the user specifies a **single listed option** (underlying, strike, expiration `YYYY-MM-DD`, call/put) and wants **ML fair value** and **probability ITM** from Helium’s models—not broker quotes.

Use **`get_top_trading_strategies`** when the user asks for **ranked options structures** (short vol vs long vol packs, edge-style ranking). Pass sorting preference when the user cares about odds vs reward/risk vs historical performance.

Use **`search_memes`** for **semantic meme search** (keywords against captions/OCR), engagement counts, and image references—useful for culture/market sentiment adjacent to finance.

## Response style after tool calls

- Lead with **answer**, then **compact bullets** of supporting metrics (bias dimensions, price, forecast range, strategy names, meme engagement).
- Name **limitations** explicitly: model outputs are not investment advice; news coverage may lag fast markets; meme OCR can be noisy.
- When mixing news and markets, **sequence** tools logically (e.g. `search_balanced_news` → `get_ticker` for tickers mentioned) instead of redundant overlapping searches.

## Security and privacy

Do not paste **secrets** into tool arguments. Article URLs may contain trackers; prefer canonical article links the user provides. Do not exfiltrate unrelated private repo content into search queries.
