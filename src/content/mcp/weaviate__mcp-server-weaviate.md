---
name: "weaviate/mcp-server-weaviate"
description: "An MCP Server to connect to your Weaviate collections as a knowledge base as well as using Weaviate as a chat memory store."
category: "Databases"
repo: "weaviate/mcp-server-weaviate"
stars: 161
url: "https://github.com/weaviate/mcp-server-weaviate"
body_length: 378
language: "Go"
homepage: "https://www.anthropic.com/news/model-context-protocol"
body_tr: |-
  # Weaviate MCP Sunucusu

  ## Talimatlar

  Sunucuyu derleyin:
  ```
  make build
  ```

  Test istemcisini çalıştırın
  ```
  make run-client
  ```

  ## Araçlar

  ### Bir Tane Ekle
  Weaviate'e bir nesne ekleyin.

  **İstek gövdesi:**
  ```json
  {}
  ```

  **Yanıt gövdesi**
  ```json
  {}
  ```

  ### Sorgu
  Weaviate'den hibrit aramayla nesneleri alın.

  **İstek gövdesi:**
  ```json
  {}
  ```

  **Yanıt gövdesi**
  ```json
  {}
  ```
---

# Weaviate MCP Server

## Instructions

Build the server:
```
make build
```

Run the test client
```
make run-client
```

## Tools

### Insert One
Insert an object into weaviate.

**Request body:**
```json
{}
```

**Response body**
```json
{}
```

### Query
Retrieve objects from weaviate with hybrid search.

**Request body:**
```json
{}
```

**Response body**
```json
{}
```
