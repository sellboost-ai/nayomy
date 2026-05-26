---
name: "helium-mcp-cursorrules-prompt-file"
clean_name: "Helium Mcp"
description: "Cursor rules for Helium Mcp."
description_tr: "Helium Mcp için Cursor kuralları."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/helium-mcp-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/helium-mcp-cursorrules-prompt-file.mdc"
body_length: 4431
file_extension: ".mdc"
body_tr: |-
  # Cursor'da Helium MCP

  Kullanıcının projesi veya sorusu **haber**, **medya yanlılığı**, **piyasalar**, **opsiyonlar** veya **finansal meme'ler** içeriyorsa, başlıkları, fiyatları veya Yunanlıları tahmin etmek yerine **Helium MCP araçlarını** (etkinleştirilmişse) tercih edin. Helium, [Helium Trades](https://heliumtrades.com) tarafından sunulan bir barındırılan MCP hizmetidir; upstream belgeler ve kaynak kodu [github.com/connerlambden/helium-mcp](https://github.com/connerlambden/helium-mcp) adresinde yer almaktadır.

  ## Sunucuyu Cursor'da etkinleştirin

  Barındırılan endpoint'e işaret eden akışkan bir HTTP MCP girdisi ekleyin (ücretsiz katman için API anahtarı gerekli değildir; ücretli katmanlar MCP sayfasından anahtarlar kullanır):

  ```json
  {
    "mcpServers": {
      "helium": {
        "url": "https://heliumtrades.com/mcp"
      }
    }
  }
  ```

  Alternatif: iş akışınız yerel bir işlem gerektiriyorsa `npx @mcp-get-community/server-helium` aracılığıyla stdio köprüsü (o paketin README'sinde `HELIUM_MCP_URL` geçersiz kılmaları görmek için).

  ## Agent için temel kurallar

  1. **Araçları çağırın, veri uydurmayin** — Makale başlıkları, yanlılık puanları, fiyatlar, tahminler, opsiyon adil değerleri veya meme metadatası oluşturmayın. Uygun araç ile getirin, ardından dönen sonuçları özetleyin ve alıntı yapın.
  2. **Yinelenen çağrıları en aza indirin** — Toplu akıl yürütme: akış başına görev başına bir `get_ticker` ve kullanıcı yenileme talep etmedikçe; aynı konuşmada hala ilgili olan önceki araç çıktısını yeniden kullanın.
  3. **Sınırlara saygı gösterin** — Halk katmanı mütevazı bir ücretsiz sorgu payına sahiptir; paralel çağrıları spam yapmasından kaçının. Bir çağrı kota veya hız sınırı nedeniyle başarısız olursa, bunu söyleyin ve istekleri aralama veya [heliumtrades.com/mcp-page](https://heliumtrades.com/mcp-page/) aracılığıyla yükseltme yapma önerisinde bulunun.
  4. **İstemcinin araç listesine güvenin** — Barındırılan sunucu aşağıda **dokuz** birinci sınıf araç belgelendirir. Cursor derlemeniz farklı bir sayı veya ad listeliyorsa, MCP panelinden canlı `tools/list` çıktısını izleyin.

  ## Araç seçim kılavuzu

  Kullanıcı anahtar kelimeler ile eşleşen **ham makaleler** istediğinde ve isteğe bağlı filtreler (kaynak, kategori, tarih penceresi, minimum paylaşım, sıralama) **`search_news`** kullanın. "X hakkında outlet'ler ne söylüyor?" ve kanıt toplama için iyi.

  Kullanıcı **çoklu outlet sentezi** (sol/merkez/sağ tarzı denge) istediğinde, özet ve çıkarımlar ve ticker'lar ile—bireysel makale dökümleri değil— **`search_balanced_news`** kullanın.

  Kullanıcı bir **outlet** (örneğin "Fox News", "CNN") adlandırıp **kurumsal yanlılık profilleri**, imza cümleler, benzer outlet'ler ve isteğe bağlı son makale çözümlemeleri istediğinde **`get_source_bias`** kullanın.

  Kullanıcı **tek bir makale URL'si** sağlayıp o sayfa için **boyut başına yanlılık puanlaması** istediğinde **`get_bias_from_url`** kullanın.

  Kullanıcı **peyzaj görünümü** istediğinde (aynı anda birçok kaynak, sıralanmış/outlet'leri karşılaştırma) **`get_all_source_biases`** kullanın. Bu ağır olabilir; derinlik yerine genişlik istediklerini onaylayın.

  **Hisse senetleri, ETF'ler veya kripto** için **`get_ticker`** kullanın: spot bağlam, boğa/ayı anlatısı, tahmin tarzı çıktı, IV rank, volatilite bağlamı ve **o sembol için Helium tarafından döndürülen opsiyon stratejisi içeriğine bağlantılar**.

  Kullanıcı **tek bir listelenen opsiyon** (dayanak varlık, kullanım fiyatı, vade sonu `YYYY-MM-DD`, çağrı/satış) belirttiğinde ve Helium modellerinden **ML adil değeri** ve **ITM olasılığı** istediğinde **`get_option_price`** kullanın—broker kotasyonları değil.

  Kullanıcı **sıralanmış opsiyon yapıları** (kısa vol vs uzun vol paketleri, edge tarzı sıralama) istediğinde **`get_top_trading_strategies`** kullanın. Kullanıcı olumsallık vs ödül/risk vs tarihsel performans önemsediğinde sıralama tercihini iletin.

  **Anlamsal meme arama** (başlık/OCR'ye karşı anahtar kelimeler), katılım sayıları ve görüntü referansları için **`search_memes`** kullanın—finansmana bitişik kültür/pazar duyarlılığı için kullanışlı.

  ## Araç çağrılarından sonra yanıt stili

  - **Cevap** ile başlayın, ardından destekleyici metriklerin **kompakt madde işaretleri** (yanlılık boyutları, fiyat, tahmin aralığı, strateji adları, meme katılımı).
  - **Sınırlamaları** açık olarak adlandırın: model çıktıları yatırım tavsiyesi değildir; haber kapsamı hızlı piyasalara geç kalabilir; meme OCR gürültülü olabilir.
  - Haberleri ve piyasaları karıştırırken, fazlalıklı çakışan aramalar yerine **araçları mantıksal olarak sıralayın** (ör. `search_balanced_news` → bahsedilen ticker'lar için `get_ticker`).

  ## Güvenlik ve gizlilik

  **Sırları** araç bağımsız değişkenlerine yapıştırmayın. Makale URL'leri izleyiciler içerebilir; kullanıcının sağladığı kanonik makale bağlantılarını tercih edin. İlgisiz özel repo içeriğini arama sorgularına sızdırmayın.
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
