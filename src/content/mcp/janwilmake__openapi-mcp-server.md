---
name: "janwilmake/openapi-mcp-server"
description: "Connect any HTTP/REST API server using an Open API spec (v3)"
category: "Developer Tools"
repo: "janwilmake/openapi-mcp-server"
stars: 894
url: "https://github.com/janwilmake/openapi-mcp-server"
body_length: 1492
license: "MIT"
language: "TypeScript"
homepage: "https://openapisearch.com"
body_tr: |-
  # OpenAPI MCP Server

  [![janwilmake/openapi-mcp-server context](https://badge.forgithub.com/janwilmake/openapi-mcp-server?excludePathPatterns=*.yaml)](https://uithub.com/janwilmake/openapi-mcp-server?excludePathPatterns=*.yaml)

  Claude/Cursor için oapis.org üzerinden OpenAPI spesifikasyonlarını arama ve keşfetmeyi sağlayan bir Model Context Protocol (MCP) sunucusu.

  - Demo: https://x.com/janwilmake/status/1903497808134496583
  - HN Thread: https://news.ycombinator.com/item?id=43447278
  - OpenAPISearch: https://github.com/janwilmake/openapisearch
  - OAPIS: https://github.com/janwilmake/oapis

  MCP, 3 adımlık bir işlem uygulanarak çalışır:

  1. İhtiyacınız olan OpenAPI tanımlayıcısını belirler
  2. Bunun basit bir dilde özetini ister
  3. Hangi endpoint'lere ihtiyacınız olduğunu belirler ve tam olarak nasıl çalıştıklarını kontrol eder (yine basit bir dilde)

  Özellikler

  - Herhangi bir OpenAPI spesifikasyonunun genel görünümünü alın
  - Belirli API işlemleri hakkında ayrıntıları alın
  - JSON ve YAML formatları için destek
  - Claude Desktop ve Cursor ile test edilmiştir

  ## Kurulum

  [![Install OpenAPI MCP Server](https://img.shields.io/badge/Install_MCP-OpenAPI%20MCP%20Server-1e3a8a?style=for-the-badge)](https://installthismcp.com/OpenAPI%20MCP%20Server?url=https%3A%2F%2Fopenapi-mcp.openapisearch.com%2Fmcp)

  Diğer istemciler için MCP URL'sini kullanın: https://openapi-mcp.openapisearch.com/mcp

  ## Yerel test

  Önce sunucuyu çalıştırın

  ```
  wrangler dev
  ```

  Ardından MCP inspector'ı çalıştırın:

  ```
  npx @modelcontextprotocol/inspector
  ```
---

# OpenAPI MCP Server

[![janwilmake/openapi-mcp-server context](https://badge.forgithub.com/janwilmake/openapi-mcp-server?excludePathPatterns=*.yaml)](https://uithub.com/janwilmake/openapi-mcp-server?excludePathPatterns=*.yaml)

A Model Context Protocol (MCP) server for Claude/Cursor that enables searching and exploring OpenAPI specifications through oapis.org.

- Demo: https://x.com/janwilmake/status/1903497808134496583
- HN Thread: https://news.ycombinator.com/item?id=43447278
- OpenAPISearch: https://github.com/janwilmake/openapisearch
- OAPIS: https://github.com/janwilmake/oapis

The MCP works by applying a 3 step process:

1. It figures out the openapi identifier you need
2. It requests a summary of that in simple language
3. It determines which endpoints you need, and checks out how exactly they work (again, in simple language)

Features

- Get an overview of any OpenAPI specification
- Retrieve details about specific API operations
- Support for both JSON and YAML formats
- Tested with Claude Desktop and Cursor

## Installation

[![Install OpenAPI MCP Server](https://img.shields.io/badge/Install_MCP-OpenAPI%20MCP%20Server-1e3a8a?style=for-the-badge)](https://installthismcp.com/OpenAPI%20MCP%20Server?url=https%3A%2F%2Fopenapi-mcp.openapisearch.com%2Fmcp)

For other clients, use MCP URL: https://openapi-mcp.openapisearch.com/mcp

## Local testing

First run the server

```
wrangler dev
```

Then run the mcp inspector:

```
npx @modelcontextprotocol/inspector
```
