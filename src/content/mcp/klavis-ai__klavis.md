---
name: "Klavis-AI/klavis"
description: "Extract and convert YouTube video information."
category: "Other"
repo: "Klavis-AI/klavis"
stars: 5746
url: "https://github.com/Klavis-AI/klavis"
body_length: 7075
license: "Apache-2.0"
language: "Python"
homepage: "https://www.klavis.ai/"
---

<div align="center">
  <picture>
    
  </picture>
</div>

<div align="center">

[![Documentation](https://img.shields.io/badge/Documentation-📖-green)](https://www.klavis.ai/docs)
[![Website](https://img.shields.io/badge/Website-🌐-purple)](https://www.klavis.ai)
[![Discord](https://img.shields.io/badge/Discord-Join-7289DA?logo=discord&logoColor=white)](https://discord.gg/p7TuTEcssn)

<a href="https://www.producthunt.com/products/strata-2?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-strata&#0045;2" target="_blank"></a>

</div>

## 🎯 Choose Your Solution

<div align="center">
  <table>
    <tr>
      <td align="center" width="33%" valign="top" style="vertical-align: top; height: 250px;">
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h2>Strata</h2>
            <p><strong>Intelligent connectors for your AI agent, optimize context window</strong></p>
          </div>
          <div>
            <a href="https://www.klavis.ai/docs/concepts/strata">
              
            </a>
          </div>
        </div>
      </td>
      <td align="center" width="33%" valign="top" style="vertical-align: top; height: 250px;">
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h2>MCP Integrations</h2>
            <p><strong>100+ prebuilt integrations out-of-the-box, with OAuth support</strong></p>
          </div>
          <div>
            <a href="https://www.klavis.ai/docs/mcp-server/overview">
              
            </a>
          </div>
        </div>
      </td>
      <td align="center" width="33%" valign="top" style="vertical-align: top; height: 250px;">
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h2>MCP Sandbox</h2>
            <p><strong>scalable MCP environments for LLM training and RL</strong></p>
          </div>
          <div>
            <a href="https://www.klavis.ai/docs/concepts/sandbox">
              
            </a>
          </div>
        </div>
      </td>
    </tr>
  </table>
</div>

## Quick Start

### Option 1: Cloud-hosted - [klavis.ai](https://www.klavis.ai)

[Quickstart guide →](https://www.klavis.ai/docs/quickstart)

### Option 2: Self-host

```bash
# Run any MCP Integration
docker pull ghcr.io/klavis-ai/github-mcp-server:latest
docker run -p 5000:5000 ghcr.io/klavis-ai/github-mcp-server:latest

# Install Open Source Strata locally
pipx install strata-mcp
strata add --type stdio playwright npx @playwright/mcp@latest
```

### Option 3: SDK

```python
# Python SDK
from klavis import Klavis
from klavis.types import McpServerName

klavis = Klavis(api_key="your-key")

# Create Strata instance
strata = klavis_client.mcp_server.create_strata_server(
    user_id="user123",
    servers=[McpServerName.GMAIL, McpServerName.SLACK],
)

# Or use individual MCP servers
gmail = klavis.mcp_server.create_server_instance(
    server_name=McpServerName.GMAIL,
    user_id="user123",
)
```

```typescript
// TypeScript SDK
import { KlavisClient, McpServerName } from 'klavis';

const klavis = new KlavisClient({ apiKey: 'your-api-key' });

// Create Strata instance
const strata = await klavis.mcpServer.createStrataServer({
    userId: "user123",
    servers: [Klavis.McpServerName.Gmail, Klavis.McpServerName.Slack],
});

// Or use individual MCP servers
const gmail = await klavis.mcpServer.createServerInstance({
    serverName: McpServerName.GMAIL,
    userId: "user123"
});
```

### Option 4: REST API


```bash
# Create Strata server
curl -X POST "https://api.klavis.ai/v1/mcp-server/strata" \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": "user123",
    "servers": ["GMAIL", "SLACK"]
  }'

# Create individual MCP server
curl -X POST "https://api.klavis.ai/v1/mcp-server/instance" \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "server_name": "GMAIL",
    "user_id": "user123"
  }'
```


## Resources

- 📖 [Documentation](https://www.klavis.ai/docs)
- 💬 [Discord Community](https://discord.gg/p7TuTEcssn)
- 🐛 [Report Issues](https://github.com/klavis-ai/klavis/issues)
- 🌐 [Klavis AI Website](https://www.klavis.ai)

---

<div align="center">
  <p><strong>Made with ❤️ by the Klavis Team</strong></p>
</div>
