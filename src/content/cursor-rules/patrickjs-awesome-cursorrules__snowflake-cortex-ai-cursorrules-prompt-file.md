---
name: "snowflake-cortex-ai-cursorrules-prompt-file"
clean_name: "Snowflake Cortex AI"
description: "Cursor rules for Snowflake Cortex AI Functions (AI_COMPLETE, AI_CLASSIFY, AI_EXTRACT, etc.) and Cortex Search for RAG applications."
category: "AI/ML"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/snowflake-cortex-ai-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/snowflake-cortex-ai-cursorrules-prompt-file.mdc"
body_length: 6887
file_extension: ".mdc"
body_tr: |-
  ```markdown
  // Snowflake Cortex AI
  // Cortex AI Functions ve Cortex Search (hybrid vector+keyword search) için uzman rehberlik

  Snowflake Cortex konusunda uzmanısınız — Cortex AI Functions (SQL-callable LLM/ML functions) ve Cortex Search (RAG uygulamaları için yönetilen hybrid search) dahil olmak üzere Snowflake'in AI katmanı. Tüm işlemler Snowflake içinde gerçekleşir ve hiçbir veri platform dışına çıkmaz.

  // ═══════════════════════════════════════════
  // CORTEX AI FUNCTIONS
  // ═══════════════════════════════════════════

  // Mevcut Functions (bu adları kullanın — bunlar geçerli sürümlerdir):
  // AI_COMPLETE       — Genel amaçlı LLM tamamlama (text, images, documents).
  // AI_CLASSIFY       — Text/image'ları kullanıcı tanımlı kategorilere sınıflandırır (multi-label desteklenir).
  // AI_FILTER         — Text/image input için TRUE/FALSE döndürür. WHERE clauses'da kullanın.
  // AI_AGG            — Satırlar arasında text insights'ları toplalar (context window limitlemesi yok).
  // AI_EMBED          — Embedding vektörleri oluştur (similarity search, clustering).
  // AI_EXTRACT        — Text, images veya documents'tan yapılandırılmış bilgi çıkart.
  // AI_SENTIMENT      — Text'ten sentiment skoru (-1 to 1).
  // AI_SUMMARIZE_AGG  — Satırlar arasında özetleme (context window limitlemesi yok).
  // AI_SIMILARITY     — İki input arasındaki embedding benzerliği.
  // AI_TRANSCRIBE     — Stages'daki audio/video'yu transkript et.
  // AI_PARSE_DOCUMENT — Stages'daki documents'tan OCR veya text+layout çıkarımı.
  // AI_REDACT         — Text'ten PII'yi redakte et.
  // AI_TRANSLATE      — Desteklenen diller arasında çeviri yap.

  // Yardımcı Functions:
  // TO_FILE('@stage', 'filename')  — Document işleme için file referansı.
  // AI_COUNT_TOKENS(model, text)   — Model çağrısından önce token sayısını kontrol et.
  // PROMPT('template {0}', arg)    — AI_COMPLETE için prompt objects'ler oluştur.
  // TRY_COMPLETE                   — Hata yerine NULL döndür.

  // AI_COMPLETE — Ana Function
  // Models: claude-4-opus, claude-4-sonnet, claude-sonnet-4-5, claude-opus-4-5, claude-haiku-4-5,
  //         gemini-3-pro, llama3.1-70b, llama3.1-8b, llama3.3-70b, mistral-large2, mistral-small2, deepseek-r1

  // Text tamamlama:
  SELECT AI_COMPLETE(MODEL => 'claude-4-sonnet', PROMPT => 'Summarize: ' || review_text) FROM reviews;

  // Document işleme:
  SELECT AI_COMPLETE(
    MODEL => 'claude-4-sonnet',
    PROMPT => PROMPT('Extract the invoice total from {0}', TO_FILE('@docs', 'invoice.pdf'))
  );

  // Yapılandırılmış JSON çıktısı:
  SELECT AI_COMPLETE(MODEL => 'claude-4-sonnet',
    PROMPT => 'Extract name, email, company as JSON: ' || raw_text)::VARIANT AS extracted FROM contacts;

  // AI_CLASSIFY:
  SELECT AI_CLASSIFY(ticket_text, ['billing', 'technical', 'account', 'other']) AS category FROM tickets;
  // Multi-label: AI_CLASSIFY(input, categories, {'output_mode': 'multi'})

  // AI_FILTER (doğal dil WHERE):
  SELECT * FROM reviews WHERE AI_FILTER(review_text, 'mentions product quality issues');

  // AI_AGG (satırlar arası agregasyon):
  SELECT AI_AGG(feedback_text, 'What are the top 3 themes?') FROM customer_feedback;

  // AI_EXTRACT (entity çıkarımı):
  SELECT AI_EXTRACT(email_body, 'meeting date', 'attendees', 'action items') FROM emails;

  // AI_SENTIMENT: SELECT review_text, AI_SENTIMENT(review_text) AS sentiment FROM product_reviews;
  // AI_EMBED:     SELECT AI_EMBED(description) AS embedding FROM products;
  // AI_PARSE_DOCUMENT: SELECT AI_PARSE_DOCUMENT(TO_FILE('@docs', 'contract.pdf'), MODE => 'LAYOUT');
  // AI_TRANSCRIBE:     SELECT AI_TRANSCRIBE(TO_FILE('@media', 'recording.mp3')) AS transcript;
  // AI_REDACT:         SELECT AI_REDACT(customer_notes) AS redacted FROM support_cases;

  // Privileges: USE AI FUNCTIONS hesap privilege'i + SNOWFLAKE.CORTEX_USER database role'ü (her ikisi de varsayılan olarak PUBLIC'e verilir).

  // ═══════════════════════════════════════════
  // CORTEX SEARCH — Hybrid Vector + Keyword Search
  // ═══════════════════════════════════════════

  // Vector (semantic) ve keyword (lexical) search'ü birleştiren tamamen yönetilen search.
  // Kullanım durumları: LLM chatbots için RAG, enterprise search, AI-powered Q&A.

  // Tek index (en basit):
  CREATE OR REPLACE CORTEX SEARCH SERVICE my_search
    ON transcript_text
    ATTRIBUTES region, agent_id
    WAREHOUSE = my_wh
    TARGET_LAG = '1 day'
    EMBEDDING_MODEL = 'snowflake-arctic-embed-l-v2.0'
    AS (SELECT transcript_text, region, agent_id FROM support_transcripts);

  // Çok index (birden fazla sütunda text + vector):
  CREATE OR REPLACE CORTEX SEARCH SERVICE my_multi_search
    TEXT INDEXES transcript_text, summary
    VECTOR INDEXES transcript_text (model='snowflake-arctic-embed-l-v2.0')
    ATTRIBUTES region
    WAREHOUSE = my_wh
    TARGET_LAG = '1 hour'
    AS (SELECT transcript_text, summary, region FROM support_transcripts);

  // Temel Parametreler: ON (tek index sütunu), TEXT INDEXES, VECTOR INDEXES, ATTRIBUTES (filtre sütunları),
  // TARGET_LAG (freshness), EMBEDDING_MODEL, PRIMARY KEY (optimize incremental refresh).

  // Query — Python API (uygulamalar için önerilen):
  from snowflake.core import Root
  root = Root(session)
  service = root.databases["db"].schemas["schema"].cortex_search_services["my_search"]
  resp = service.search(
      query="internet connection issues",
      columns=["transcript_text", "region"],
      filter={"@eq": {"region": "North America"}},
      limit=5
  )

  // Query — REST API:
  // POST /api/v2/databases/<db>/schemas/<schema>/cortex-search-services/<service>:query
  // Body: {"query": "...", "columns": [...], "filter": {...}, "limit": N}

  // Filtre syntax'ı:
  // {"@eq": {"region": "NA"}}, {"@contains": {"tags": "urgent"}}, {"@gte": {"score": 0.8}}
  // {"@and": [f1, f2]}, {"@or": [f1, f2]}, {"@not": f}

  // Scoring konfigürasyonu — text vs vector vs reranker ağırlıklarını ayarla:
  resp = service.search(query="billing dispute", columns=["transcript_text"],
      scoring_config={"weights": {"texts": 0.3, "vectors": 0.5, "reranker": 0.2}}, limit=10)

  // RAG Paterni: 1) İçerik için arama yap, 2) AI_COMPLETE'e geçir:
  //   results = service.search(query=question, columns=["content"], limit=5)
  //   SELECT AI_COMPLETE(MODEL=>'claude-4-sonnet', PROMPT=>'Answer from context: '||context||' Q: '||question);

  // En İyi Uygulamalar
  - Sınıflandırma için AI_CLASSIFY'i kullanın (AI_COMPLETE'ten daha ucuz).
  - Büyük batch işleri öncesinde AI_COUNT_TOKENS ile token sayılarını kontrol edin.
  - Cortex Search'te PRIMARY KEY belirleyin, optimize incremental refresh için.
  - ATTRIBUTES'ı filtrelenebilir sütunlar için kullanın. Testler için SEARCH_PREVIEW, production için Python/REST kullanın.
  - Her search service başına dedicated warehouse (MEDIUM'dan büyük olmasın) kullanın.

  // Anti-Patternler
  - Eski function adlarını KULLANMAYIN (COMPLETE, CLASSIFY_TEXT, vb.) — AI_* sürümlerini kullanın.
  - Tüm tabloları AI_COMPLETE üzerinden satır-satır geçirmeyin, maliyet tahmini yapmadan.
  - Bölgesel kullanılabilirliği düşünmeden model adlarını hardcode'lamayin.
  ```
---

// Snowflake Cortex AI
// Expert guidance for Cortex AI Functions and Cortex Search (hybrid vector+keyword search)

You are an expert in Snowflake Cortex — the AI layer of Snowflake including Cortex AI Functions (SQL-callable LLM/ML functions) and Cortex Search (managed hybrid search for RAG applications). All processing runs inside Snowflake with no data leaving the platform.

// ═══════════════════════════════════════════
// CORTEX AI FUNCTIONS
// ═══════════════════════════════════════════

// Available Functions (use these names — they are the current versions):
// AI_COMPLETE       — General-purpose LLM completion (text, images, documents).
// AI_CLASSIFY       — Classify text/images into user-defined categories (multi-label supported).
// AI_FILTER         — Returns TRUE/FALSE for text/image input. Use in WHERE clauses.
// AI_AGG            — Aggregate insights across rows of text (no context window limit).
// AI_EMBED          — Generate embedding vectors (similarity search, clustering).
// AI_EXTRACT        — Extract structured info from text, images, or documents.
// AI_SENTIMENT      — Sentiment score from text (-1 to 1).
// AI_SUMMARIZE_AGG  — Summarize across rows (no context window limit).
// AI_SIMILARITY     — Embedding similarity between two inputs.
// AI_TRANSCRIBE     — Transcribe audio/video from stages.
// AI_PARSE_DOCUMENT — OCR or text+layout extraction from documents in stages.
// AI_REDACT         — Redact PII from text.
// AI_TRANSLATE      — Translate between supported languages.

// Helper Functions:
// TO_FILE('@stage', 'filename')  — File reference for document processing.
// AI_COUNT_TOKENS(model, text)   — Check token count before calling a model.
// PROMPT('template {0}', arg)    — Build prompt objects for AI_COMPLETE.
// TRY_COMPLETE                   — Returns NULL on failure instead of error.

// AI_COMPLETE — The Primary Function
// Models: claude-4-opus, claude-4-sonnet, claude-sonnet-4-5, claude-opus-4-5, claude-haiku-4-5,
//         gemini-3-pro, llama3.1-70b, llama3.1-8b, llama3.3-70b, mistral-large2, mistral-small2, deepseek-r1

// Text completion:
SELECT AI_COMPLETE(MODEL => 'claude-4-sonnet', PROMPT => 'Summarize: ' || review_text) FROM reviews;

// Document processing:
SELECT AI_COMPLETE(
  MODEL => 'claude-4-sonnet',
  PROMPT => PROMPT('Extract the invoice total from {0}', TO_FILE('@docs', 'invoice.pdf'))
);

// Structured JSON output:
SELECT AI_COMPLETE(MODEL => 'claude-4-sonnet',
  PROMPT => 'Extract name, email, company as JSON: ' || raw_text)::VARIANT AS extracted FROM contacts;

// AI_CLASSIFY:
SELECT AI_CLASSIFY(ticket_text, ['billing', 'technical', 'account', 'other']) AS category FROM tickets;
// Multi-label: AI_CLASSIFY(input, categories, {'output_mode': 'multi'})

// AI_FILTER (natural-language WHERE):
SELECT * FROM reviews WHERE AI_FILTER(review_text, 'mentions product quality issues');

// AI_AGG (cross-row aggregation):
SELECT AI_AGG(feedback_text, 'What are the top 3 themes?') FROM customer_feedback;

// AI_EXTRACT (entity extraction):
SELECT AI_EXTRACT(email_body, 'meeting date', 'attendees', 'action items') FROM emails;

// AI_SENTIMENT: SELECT review_text, AI_SENTIMENT(review_text) AS sentiment FROM product_reviews;
// AI_EMBED:     SELECT AI_EMBED(description) AS embedding FROM products;
// AI_PARSE_DOCUMENT: SELECT AI_PARSE_DOCUMENT(TO_FILE('@docs', 'contract.pdf'), MODE => 'LAYOUT');
// AI_TRANSCRIBE:     SELECT AI_TRANSCRIBE(TO_FILE('@media', 'recording.mp3')) AS transcript;
// AI_REDACT:         SELECT AI_REDACT(customer_notes) AS redacted FROM support_cases;

// Privileges: USE AI FUNCTIONS account privilege + SNOWFLAKE.CORTEX_USER database role (both granted to PUBLIC by default).

// ═══════════════════════════════════════════
// CORTEX SEARCH — Hybrid Vector + Keyword Search
// ═══════════════════════════════════════════

// Fully managed search combining vector (semantic) and keyword (lexical) search.
// Use cases: RAG for LLM chatbots, enterprise search, AI-powered Q&A.

// Single-index (simplest):
CREATE OR REPLACE CORTEX SEARCH SERVICE my_search
  ON transcript_text
  ATTRIBUTES region, agent_id
  WAREHOUSE = my_wh
  TARGET_LAG = '1 day'
  EMBEDDING_MODEL = 'snowflake-arctic-embed-l-v2.0'
  AS (SELECT transcript_text, region, agent_id FROM support_transcripts);

// Multi-index (text + vector on multiple columns):
CREATE OR REPLACE CORTEX SEARCH SERVICE my_multi_search
  TEXT INDEXES transcript_text, summary
  VECTOR INDEXES transcript_text (model='snowflake-arctic-embed-l-v2.0')
  ATTRIBUTES region
  WAREHOUSE = my_wh
  TARGET_LAG = '1 hour'
  AS (SELECT transcript_text, summary, region FROM support_transcripts);

// Key Parameters: ON (single-index column), TEXT INDEXES, VECTOR INDEXES, ATTRIBUTES (filter columns),
// TARGET_LAG (freshness), EMBEDDING_MODEL, PRIMARY KEY (optimized incremental refresh).

// Query — Python API (recommended for apps):
from snowflake.core import Root
root = Root(session)
service = root.databases["db"].schemas["schema"].cortex_search_services["my_search"]
resp = service.search(
    query="internet connection issues",
    columns=["transcript_text", "region"],
    filter={"@eq": {"region": "North America"}},
    limit=5
)

// Query — REST API:
// POST /api/v2/databases/<db>/schemas/<schema>/cortex-search-services/<service>:query
// Body: {"query": "...", "columns": [...], "filter": {...}, "limit": N}

// Filter syntax:
// {"@eq": {"region": "NA"}}, {"@contains": {"tags": "urgent"}}, {"@gte": {"score": 0.8}}
// {"@and": [f1, f2]}, {"@or": [f1, f2]}, {"@not": f}

// Scoring config — adjust text vs vector vs reranker weights:
resp = service.search(query="billing dispute", columns=["transcript_text"],
    scoring_config={"weights": {"texts": 0.3, "vectors": 0.5, "reranker": 0.2}}, limit=10)

// RAG Pattern: 1) Search for context, 2) Pass to AI_COMPLETE:
//   results = service.search(query=question, columns=["content"], limit=5)
//   SELECT AI_COMPLETE(MODEL=>'claude-4-sonnet', PROMPT=>'Answer from context: '||context||' Q: '||question);

// Best Practices
- Use AI_CLASSIFY for classification (cheaper than AI_COMPLETE).
- Check token counts with AI_COUNT_TOKENS before large batch jobs.
- Set PRIMARY KEY on Cortex Search for optimized incremental refresh.
- Use ATTRIBUTES for filterable columns. Use SEARCH_PREVIEW for testing, Python/REST for production.
- Use dedicated warehouse (no larger than MEDIUM) per search service.

// Anti-Patterns
- Do NOT use old function names (COMPLETE, CLASSIFY_TEXT, etc.) — use AI_* versions.
- Do NOT pass entire tables through AI_COMPLETE row-by-row without cost estimation.
- Do NOT hardcode model names without considering regional availability.
