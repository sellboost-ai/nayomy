---
name: "hannesrudolph/mcp-ragdocs"
description: "An MCP server implementation that provides tools for retrieving and processing documentation through vector search, enabling AI assistants to augment their responses with relevant documentation context"
category: "Knowledge & Memory"
repo: "hannesrudolph/mcp-ragdocs"
stars: 264
url: "https://github.com/hannesrudolph/mcp-ragdocs"
body_length: 4506
license: "MIT"
language: "TypeScript"
body_tr: |-
  # RAG Dokumentasyon MCP Sunucusu

  Vektör araması aracılığıyla belgeleri alma ve işleme araçları sağlayan bir MCP sunucu uygulaması. AI asistanlarının yanıtlarını ilgili belgeleme bağlamıyla zenginleştirmesini sağlar.

  <a href="https://glama.ai/mcp/servers/54hsrjhmq9"></a>

  ## Özellikler

  - Vektör tabanlı belgeleme araması ve alımı
  - Birden fazla belgeleme kaynağı desteği
  - Semantik arama yetenekleri
  - Otomatik belgeleme işleme
  - LLM'ler için gerçek zamanlı bağlam zenginleştirmesi

  ## Araçlar

  ### search_documentation
  Depolanan belgeleri doğal dil sorguları kullanarak arayın. Eşleşen alıntıları bağlamla birlikte döndürür, ilgiye göre sıralanır.

  **Girdiler:**
  - `query` (string): Belgelerde aranacak metin. Doğal dil sorgusu, belirli terimler veya kod parçacıkları olabilir.
  - `limit` (number, opsiyonel): Döndürülecek maksimum sonuç sayısı (1-20, varsayılan: 5). Daha yüksek limitler daha kapsamlı sonuçlar sağlar ancak işleme daha uzun sürebilir.

  ### list_sources
  Sistemde şu anda depolanan tüm belgeleme kaynaklarını listeleyin. İndexlenmiş tüm belgelemenin kapsamlı bir listesini, kaynak URL'lerini, başlıkları ve son güncelleme zamanlarını döndürür. Arama için hangi belgelemenin mevcut olduğunu anlamak veya belirli kaynakların indekslenip indekslenmediğini doğrulamak için kullanın.

  ### extract_urls
  Belirli bir web sayfasındaki tüm URL'leri çıkarın ve analiz edin. Bu araç, belirtilen web sayfasını tarar, tüm hiperlinkleri tanımlar ve isteğe bağlı olarak işleme kuyruğuna ekler.

  **Girdiler:**
  - `url` (string): Analiz edilecek web sayfasının tam URL'si (protokol içermelidir, örneğin https://). Sayfa herkese açık olarak erişilebilir olmalıdır.
  - `add_to_queue` (boolean, opsiyonel): Doğruysa, çıkarılan URL'leri otomatik olarak daha sonra indeksleme için işleme kuyruğuna ekleyin. Büyük siteler üzerinde aşırı sıraya alma yaşamaktan kaçınmak için dikkatli kullanın.

  ### remove_documentation
  Belirli belgeleme kaynaklarını sistemden URL'lerine göre kaldırın. Kaldırma kalıcıdır ve gelecekteki arama sonuçlarını etkileyecektir.

  **Girdiler:**
  - `urls` (string[]): Veritabanından kaldırılacak URL'lerin dizisi. Her URL, belgeleme eklenirken kullanılan URL'yle tam olarak eşleşmelidir.

  ### list_queue
  Belgeleme işleme kuyruğunda şu anda bekleyen tüm URL'leri listeleyin. run_queue çağrıldığında işlenecek bekleyen belgeleme kaynaklarını gösterir. Kuyruk durumunu izlemek, URL'lerin doğru şekilde eklendiğini doğrulamak veya işleme birikintisini kontrol etmek için kullanın.

  ### run_queue
  Şu anda belgeleme kuyruğundaki tüm URL'leri işleyin ve indeksleyin. Her URL sırayla işlenir, uygun hata işleme ve yeniden deneme mantığı ile. İşleme sırasında ilerleme güncellemeleri sağlanır. Uzun süren işlemler kuyruk boşana veya kurtarılamaz bir hata meydana gelene kadar işlemeye devam edecektir.

  ### clear_queue
  Belgeleme işleme kuyruğundan tüm bekleyen URL'leri kaldırın. Sıfırdan başlamak istediğinizde, istenmeyen URL'leri kaldırmak veya bekleyen işlemeyi iptal etmek için kullanın. Bu işlem anlıktır ve kalıcıdır - daha sonra işlemek istiyorsanız URL'ler yeniden eklenmesi gerekecektir.

  ## Kullanım

  RAG Belgeleme aracı şunlar için tasarlanmıştır:

  - AI yanıtlarını ilgili belgeleme ile zenginleştirme
  - Belgelemeleri farkında olan AI asistanları oluşturma
  - Geliştiriciler için bağlam farkında araçlar oluşturma
  - Semantik belgeleme araması uygulama
  - Mevcut bilgi tabanlarını zenginleştirme

  ## Yapılandırma

  ### Claude Desktop ile Kullanım

  Bunu `claude_desktop_config.json` dosyanıza ekleyin:

  ```json
  {
    "mcpServers": {
      "rag-docs": {
        "command": "npx",
        "args": [
          "-y",
          "@hannesrudolph/mcp-ragdocs"
        ],
        "env": {
          "OPENAI_API_KEY": "",
          "QDRANT_URL": "",
          "QDRANT_API_KEY": ""
        }
      }
    }
  }
  ```

  Aşağıdaki ortam değişkenleri için değer sağlamanız gerekecektir:
  - `OPENAI_API_KEY`: Gömülü oluşturma için OpenAI API anahtarınız
  - `QDRANT_URL`: Qdrant vektör veritabanı örneğinizin URL'si
  - `QDRANT_API_KEY`: Qdrant ile kimlik doğrulaması için API anahtarı

  ## Lisans

  Bu MCP sunucusu MIT Lisansı altında lisanslanmıştır. Bu, MIT Lisansının şart ve koşullarına tabi olarak yazılımı kullanmakta, değiştirmekte ve dağıtmakta özgürsünüz. Daha fazla ayrıntı için lütfen proje deposundaki LICENSE dosyasına bakın.

  ## Teşekkürler

  Bu proje [qpd-v/mcp-ragdocs](https://github.com/qpd-v/mcp-ragdocs) deposunun bir çatalıdır ve orijinal olarak qpd-v tarafından geliştirilmiştir. Orijinal proje bu uygulamanın temelini sağlamıştır.
---

# RAG Documentation MCP Server

An MCP server implementation that provides tools for retrieving and processing documentation through vector search, enabling AI assistants to augment their responses with relevant documentation context.

<a href="https://glama.ai/mcp/servers/54hsrjhmq9"></a>

## Features

- Vector-based documentation search and retrieval
- Support for multiple documentation sources
- Semantic search capabilities
- Automated documentation processing
- Real-time context augmentation for LLMs

## Tools

### search_documentation
Search through stored documentation using natural language queries. Returns matching excerpts with context, ranked by relevance.

**Inputs:**
- `query` (string): The text to search for in the documentation. Can be a natural language query, specific terms, or code snippets.
- `limit` (number, optional): Maximum number of results to return (1-20, default: 5). Higher limits provide more comprehensive results but may take longer to process.

### list_sources
List all documentation sources currently stored in the system. Returns a comprehensive list of all indexed documentation including source URLs, titles, and last update times. Use this to understand what documentation is available for searching or to verify if specific sources have been indexed.

### extract_urls
Extract and analyze all URLs from a given web page. This tool crawls the specified webpage, identifies all hyperlinks, and optionally adds them to the processing queue.

**Inputs:**
- `url` (string): The complete URL of the webpage to analyze (must include protocol, e.g., https://). The page must be publicly accessible.
- `add_to_queue` (boolean, optional): If true, automatically add extracted URLs to the processing queue for later indexing. Use with caution on large sites to avoid excessive queuing.

### remove_documentation
Remove specific documentation sources from the system by their URLs. The removal is permanent and will affect future search results.

**Inputs:**
- `urls` (string[]): Array of URLs to remove from the database. Each URL must exactly match the URL used when the documentation was added.

### list_queue
List all URLs currently waiting in the documentation processing queue. Shows pending documentation sources that will be processed when run_queue is called. Use this to monitor queue status, verify URLs were added correctly, or check processing backlog.

### run_queue
Process and index all URLs currently in the documentation queue. Each URL is processed sequentially, with proper error handling and retry logic. Progress updates are provided as processing occurs. Long-running operations will process until the queue is empty or an unrecoverable error occurs.

### clear_queue
Remove all pending URLs from the documentation processing queue. Use this to reset the queue when you want to start fresh, remove unwanted URLs, or cancel pending processing. This operation is immediate and permanent - URLs will need to be re-added if you want to process them later.

## Usage

The RAG Documentation tool is designed for:

- Enhancing AI responses with relevant documentation
- Building documentation-aware AI assistants
- Creating context-aware tooling for developers
- Implementing semantic documentation search
- Augmenting existing knowledge bases

## Configuration

### Usage with Claude Desktop

Add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "rag-docs": {
      "command": "npx",
      "args": [
        "-y",
        "@hannesrudolph/mcp-ragdocs"
      ],
      "env": {
        "OPENAI_API_KEY": "",
        "QDRANT_URL": "",
        "QDRANT_API_KEY": ""
      }
    }
  }
}
```

You'll need to provide values for the following environment variables:
- `OPENAI_API_KEY`: Your OpenAI API key for embeddings generation
- `QDRANT_URL`: URL of your Qdrant vector database instance
- `QDRANT_API_KEY`: API key for authenticating with Qdrant

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.

## Acknowledgments

This project is a fork of [qpd-v/mcp-ragdocs](https://github.com/qpd-v/mcp-ragdocs), originally developed by qpd-v. The original project provided the foundation for this implementation.
