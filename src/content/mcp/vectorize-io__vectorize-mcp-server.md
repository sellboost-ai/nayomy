---
name: "vectorize-io/vectorize-mcp-server"
description: "Vectorize MCP server for advanced retrieval, Private Deep Research, Anything-to-Markdown file extraction and text chunking."
description_tr: "Vectorize MCP sunucusu, gelişmiş retrieval, Özel Deep Research, herhangi bir dosyayı Markdown'a çıkarma ve metin chunking işlemleri için tasarlanmıştır."
category: "Search & Data Extraction"
repo: "vectorize-io/vectorize-mcp-server"
stars: 106
url: "https://github.com/vectorize-io/vectorize-mcp-server"
body_length: 6029
license: "MIT"
language: "JavaScript"
homepage: "https://docs.vectorize.io/developer-guides/mcp-server/"
body_tr: |-
  # Vectorize MCP Sunucusu

  [Vectorize](https://vectorize.io/) ile entegre olan Model Context Protocol (MCP) sunucu uygulaması; gelişmiş vector retrieval ve metin çıkarma işlemleri için.

  <a href="https://glama.ai/mcp/servers/pxwbgk0kzr">
    
  </a>


  ## Kurulum

  ### npx ile Çalıştırma

  ```bash
  export VECTORIZE_ORG_ID=YOUR_ORG_ID
  export VECTORIZE_TOKEN=YOUR_TOKEN
  export VECTORIZE_PIPELINE_ID=YOUR_PIPELINE_ID

  npx -y @vectorize-io/vectorize-mcp-server@latest
  ```

  ### VS Code Kurulumu

  Tek tıklamayla kurulum için aşağıdaki kurulum düğmelerinden birine tıklayın:

  [![Install with NPX in VS Code](https://img.shields.io/badge/VS_Code-NPM-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=vectorize&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40vectorize-io%2Fvectorize-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22VECTORIZE_ORG_ID%22%3A%22%24%7Binput%3Aorg_id%7D%22%2C%22VECTORIZE_TOKEN%22%3A%22%24%7Binput%3Atoken%7D%22%2C%22VECTORIZE_PIPELINE_ID%22%3A%22%24%7Binput%3Apipeline_id%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22org_id%22%2C%22description%22%3A%22Vectorize+Organization+ID%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22token%22%2C%22description%22%3A%22Vectorize+Token%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22pipeline_id%22%2C%22description%22%3A%22Vectorize+Pipeline+ID%22%7D%5D) [![Install with NPX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-NPM-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=vectorize&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40vectorize-io%2Fvectorize-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22VECTORIZE_ORG_ID%22%3A%22%24%7Binput%3Aorg_id%7D%22%2C%22VECTORIZE_TOKEN%22%3A%22%24%7Binput%3Atoken%7D%22%2C%22VECTORIZE_PIPELINE_ID%22%3A%22%24%7Binput%3Apipeline_id%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22org_id%22%2C%22description%22%3A%22Vectorize+Organization+ID%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22token%22%2C%22description%22%3A%22Vectorize+Token%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22pipeline_id%22%2C%22description%22%3A%22Vectorize+Pipeline+ID%22%7D%5D&quality=insiders)

  ### Manuel Kurulum

  En hızlı kurulum için bu bölümün üstündeki tek tıklamayla kurulum düğmelerini kullanın.

  Manuel olarak kurmak için, VS Code'da Kullanıcı Ayarları (JSON) dosyanıza aşağıdaki JSON bloğunu ekleyin. Bunu `Ctrl + Shift + P` tuşlarına basıp `Preferences: Open User Settings (JSON)` yazarak yapabilirsiniz.

  ```json
  {
    "mcp": {
      "inputs": [
        {
          "type": "promptString",
          "id": "org_id",
          "description": "Vectorize Organization ID"
        },
        {
          "type": "promptString",
          "id": "token",
          "description": "Vectorize Token",
          "password": true
        },
        {
          "type": "promptString",
          "id": "pipeline_id",
          "description": "Vectorize Pipeline ID"
        }
      ],
      "servers": {
        "vectorize": {
          "command": "npx",
          "args": ["-y", "@vectorize-io/vectorize-mcp-server@latest"],
          "env": {
            "VECTORIZE_ORG_ID": "${input:org_id}",
            "VECTORIZE_TOKEN": "${input:token}",
            "VECTORIZE_PIPELINE_ID": "${input:pipeline_id}"
          }
        }
      }
    }
  }
  ```

  İsteğe bağlı olarak, yapılandırmayı başkalarıyla paylaşmak için çalışma alanınızda `.vscode/mcp.json` adlı bir dosyaya aşağıdakini ekleyebilirsiniz:

  ```json
  {
    "inputs": [
      {
        "type": "promptString",
        "id": "org_id",
        "description": "Vectorize Organization ID"
      },
      {
        "type": "promptString",
        "id": "token",
        "description": "Vectorize Token",
        "password": true
      },
      {
        "type": "promptString",
        "id": "pipeline_id",
        "description": "Vectorize Pipeline ID"
      }
    ],
    "servers": {
      "vectorize": {
        "command": "npx",
        "args": ["-y", "@vectorize-io/vectorize-mcp-server@latest"],
        "env": {
          "VECTORIZE_ORG_ID": "${input:org_id}",
          "VECTORIZE_TOKEN": "${input:token}",
          "VECTORIZE_PIPELINE_ID": "${input:pipeline_id}"
        }
      }
    }
  }
  ```

  ## Claude/Windsurf/Cursor/Cline Yapılandırması

  ```json
  {
    "mcpServers": {
      "vectorize": {
        "command": "npx",
        "args": ["-y", "@vectorize-io/vectorize-mcp-server@latest"],
        "env": {
          "VECTORIZE_ORG_ID": "your-org-id",
          "VECTORIZE_TOKEN": "your-token",
          "VECTORIZE_PIPELINE_ID": "your-pipeline-id"
        }
      }
    }
  }
  ```

  ## Araçlar

  ### Belgeleri Alma

  Vector arama gerçekleştirin ve belgeleri alın (resmi [API](https://docs.vectorize.io/api/api-pipelines/api-retrieval) bölümüne bakın):

  ```json
  {
    "name": "retrieve",
    "arguments": {
      "question": "Financial health of the company",
      "k": 5
    }
  }
  ```

  ### Metin çıkarma ve parçalama (Herhangi bir dosyadan Markdown'a)

  Belgeden metin çıkarın ve bunu Markdown formatında parçalara ayırın (resmi [API](https://docs.vectorize.io/api/api-extraction) bölümüne bakın):

  ```json
  {
    "name": "extract",
    "arguments": {
      "base64document": "base64-encoded-document",
      "contentType": "application/pdf"
    }
  }
  ```

  ### Derin Araştırma

  Pipeline'ınızdan Özel Derin Araştırma oluşturun (resmi [API](https://docs.vectorize.io/api/api-pipelines/api-deep-research) bölümüne bakın):

  ```json
  {
    "name": "deep-research",
    "arguments": {
      "query": "Generate a financial status report about the company",
      "webSearch": true
    }
  }
  ```

  ## Geliştirme

  ```bash
  npm install
  npm run dev
  ```

  ### Yayınlama
  package.json sürümünü değiştirin ve sonra:
  ```bash
  git commit -am "x.y.z"
  git tag x.y.z
  git push origin
  git push origin --tags
  ```

  ### Katkıda Bulunma

  1. Repository'yi fork edin
  2. Feature branch'inizi oluşturun
  3. Pull request gönderin
---

# Vectorize MCP Server

A Model Context Protocol (MCP) server implementation that integrates with [Vectorize](https://vectorize.io/) for advanced Vector retrieval and text extraction.

<a href="https://glama.ai/mcp/servers/pxwbgk0kzr">
  
</a>


## Installation

### Running with npx

```bash
export VECTORIZE_ORG_ID=YOUR_ORG_ID
export VECTORIZE_TOKEN=YOUR_TOKEN
export VECTORIZE_PIPELINE_ID=YOUR_PIPELINE_ID

npx -y @vectorize-io/vectorize-mcp-server@latest
```

### VS Code Installation

For one-click installation, click one of the install buttons below:

[![Install with NPX in VS Code](https://img.shields.io/badge/VS_Code-NPM-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=vectorize&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40vectorize-io%2Fvectorize-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22VECTORIZE_ORG_ID%22%3A%22%24%7Binput%3Aorg_id%7D%22%2C%22VECTORIZE_TOKEN%22%3A%22%24%7Binput%3Atoken%7D%22%2C%22VECTORIZE_PIPELINE_ID%22%3A%22%24%7Binput%3Apipeline_id%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22org_id%22%2C%22description%22%3A%22Vectorize+Organization+ID%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22token%22%2C%22description%22%3A%22Vectorize+Token%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22pipeline_id%22%2C%22description%22%3A%22Vectorize+Pipeline+ID%22%7D%5D) [![Install with NPX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-NPM-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=vectorize&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40vectorize-io%2Fvectorize-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22VECTORIZE_ORG_ID%22%3A%22%24%7Binput%3Aorg_id%7D%22%2C%22VECTORIZE_TOKEN%22%3A%22%24%7Binput%3Atoken%7D%22%2C%22VECTORIZE_PIPELINE_ID%22%3A%22%24%7Binput%3Apipeline_id%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22org_id%22%2C%22description%22%3A%22Vectorize+Organization+ID%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22token%22%2C%22description%22%3A%22Vectorize+Token%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22pipeline_id%22%2C%22description%22%3A%22Vectorize+Pipeline+ID%22%7D%5D&quality=insiders)

### Manual Installation

For the quickest installation, use the one-click install buttons at the top of this section.

To install manually, add the following JSON block to your User Settings (JSON) file in VS Code. You can do this by pressing `Ctrl + Shift + P` and typing `Preferences: Open User Settings (JSON)`.

```json
{
  "mcp": {
    "inputs": [
      {
        "type": "promptString",
        "id": "org_id",
        "description": "Vectorize Organization ID"
      },
      {
        "type": "promptString",
        "id": "token",
        "description": "Vectorize Token",
        "password": true
      },
      {
        "type": "promptString",
        "id": "pipeline_id",
        "description": "Vectorize Pipeline ID"
      }
    ],
    "servers": {
      "vectorize": {
        "command": "npx",
        "args": ["-y", "@vectorize-io/vectorize-mcp-server@latest"],
        "env": {
          "VECTORIZE_ORG_ID": "${input:org_id}",
          "VECTORIZE_TOKEN": "${input:token}",
          "VECTORIZE_PIPELINE_ID": "${input:pipeline_id}"
        }
      }
    }
  }
}
```

Optionally, you can add the following to a file called `.vscode/mcp.json` in your workspace to share the configuration with others:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "org_id",
      "description": "Vectorize Organization ID"
    },
    {
      "type": "promptString",
      "id": "token",
      "description": "Vectorize Token",
      "password": true
    },
    {
      "type": "promptString",
      "id": "pipeline_id",
      "description": "Vectorize Pipeline ID"
    }
  ],
  "servers": {
    "vectorize": {
      "command": "npx",
      "args": ["-y", "@vectorize-io/vectorize-mcp-server@latest"],
      "env": {
        "VECTORIZE_ORG_ID": "${input:org_id}",
        "VECTORIZE_TOKEN": "${input:token}",
        "VECTORIZE_PIPELINE_ID": "${input:pipeline_id}"
      }
    }
  }
}
```

## Configuration on Claude/Windsurf/Cursor/Cline

```json
{
  "mcpServers": {
    "vectorize": {
      "command": "npx",
      "args": ["-y", "@vectorize-io/vectorize-mcp-server@latest"],
      "env": {
        "VECTORIZE_ORG_ID": "your-org-id",
        "VECTORIZE_TOKEN": "your-token",
        "VECTORIZE_PIPELINE_ID": "your-pipeline-id"
      }
    }
  }
}
```

## Tools

### Retrieve documents

Perform vector search and retrieve documents (see official [API](https://docs.vectorize.io/api/api-pipelines/api-retrieval)):

```json
{
  "name": "retrieve",
  "arguments": {
    "question": "Financial health of the company",
    "k": 5
  }
}
```

### Text extraction and chunking (Any file to Markdown)

Extract text from a document and chunk it into Markdown format (see official [API](https://docs.vectorize.io/api/api-extraction)):

```json
{
  "name": "extract",
  "arguments": {
    "base64document": "base64-encoded-document",
    "contentType": "application/pdf"
  }
}
```

### Deep Research

Generate a Private Deep Research from your pipeline (see official [API](https://docs.vectorize.io/api/api-pipelines/api-deep-research)):

```json
{
  "name": "deep-research",
  "arguments": {
    "query": "Generate a financial status report about the company",
    "webSearch": true
  }
}
```

## Development

```bash
npm install
npm run dev
```

### Release
Change the package.json version and then:
```bash
git commit -am "x.y.z"
git tag x.y.z
git push origin
git push origin --tags
```

### Contributing

1. Fork the repository
2. Create your feature branch
3. Submit a pull request
