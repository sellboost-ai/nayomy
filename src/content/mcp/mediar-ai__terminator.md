---
name: "mediar-ai/terminator"
description: "Desktop GUI automation using accessibility APIs. Control Windows, macOS, and Linux applications without vision models or screenshots. Supports workflow recording, structured data extraction, and browser DOM inspection."
category: "Coding Agents"
repo: "mediar-ai/terminator"
stars: 1499
url: "https://github.com/mediar-ai/terminator"
body_length: 9124
license: "MIT"
language: "Rust"
homepage: "https://t8r.tech/"
---

![Demo](https://github.com/user-attachments/assets/b33212a6-7bd1-4654-b658-8a2f9a3a8b77)

<p align="center">
  <a href="https://cdn.crabnebula.app/download/mediar/mediar/latest/platform/windows-x86_64">
    
  </a>
  &nbsp;&nbsp;
  <a href="https://app.mediar.ai">
    
  </a>
</p>

<p align="center">
  <a href="https://t8r.tech">
    
  </a>
  <a href="https://discord.gg/dU9EBuw7Uq">
    
  </a>
  <a href="https://www.youtube.com/@mediar_ai">
    
  </a>
  <a href="https://crates.io/crates/terminator-rs">
    
  </a>
  <a href="https://crates.io/crates/terminator-workflow-recorder">
    
  </a>
</p>

<p align="center">
  <a href="https://github.com/mediar-ai/terminator/blob/main/terminator-mcp-agent/README.md#quick-install">
    
  </a>
  <a href="https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%7B%22terminator-mcp-agent%22%3A%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22terminator-mcp-agent%22%5D%7D%7D">
    
  </a>
  <a href="https://insiders.vscode.dev/redirect?url=vscode-insiders%3Amcp%2Finstall%3F%7B%22terminator-mcp-agent%22%3A%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22terminator-mcp-agent%22%5D%7D%7D">
    
  </a>
</p>

## Computer Use MCP that controls your entire desktop

Give AI assistants (Claude, Cursor, VS Code, etc.) the ability to control your desktop and automate tasks across any application.

**Claude Code (one-liner):**
```bash
claude mcp add terminator "npx -y terminator-mcp-agent@latest"
```

**Other clients (Cursor, VS Code, Windsurf, etc.):**

Add to your MCP config file:
```json
{
  "mcpServers": {
    "terminator-mcp-agent": {
      "command": "npx",
      "args": ["-y", "terminator-mcp-agent@latest"],
      "env": {
        "LOG_LEVEL": "info",
        "RUST_BACKTRACE": "1"
      }
    }
  }
}
```

See the [MCP Agent README](https://github.com/mediar-ai/terminator/tree/main/terminator-mcp-agent) for detailed setup instructions.

### Why Terminator MCP?

- **Uses your browser session** - no need to relogin, keeps all your cookies and auth
- **Doesn't take over your cursor or keyboard** - runs in the background without interrupting your work
- **Works across all dimensions** - pixels, DOM, and Accessibility tree for maximum reliability

### Use Cases

- Create a new instance on GCP, connect to it using CLI
- Check logs on Vercel to find most common errors
- Test my app new features based on recent commits

## What's new

- 01/09/26 - Mediar IDE (Cursor for Windows automation) is in public access - [download now](https://cdn.crabnebula.app/download/mediar/mediar/latest/platform/windows-x86_64)
- 10/30 Public alpha is live - [Cursor for Windows automation](https://www.mediar.ai)
- 09/26 Terminator was on [Cohere Labs podcast](https://www.youtube.com/watch?v=cfQxlk8KNmY), also [check the slides](https://092025-cohere.mediar.ai/)
- 08/25 Big release — NodeJS SDK in YAML workflows, run JS in browser, OS event recording → YAML generation in MCP, and more
- 08/25 [we raised $2.8m to give AI hands to every desktop](https://x.com/louis030195/status/1948745185178914929)

## Why Terminator

### For Developers

- Create automations that work across any desktop app or browser
- Runs 100x faster than ChatGPT Agents, Claude, Perplexity Comet, BrowserBase, BrowserUse (deterministic, CPU speed, with AI recovery)
- >95% success rate unlike most computer use overhyped products
- MIT-licensed — fork it, ship it, no lock-in

We achieve this by pre-training workflows as deterministic code, and calling AI only when recovery is needed.

### For Teams

[Our public beta workflow builder](https://www.mediar.ai) + managed hosting:

- Record, map your processes, and implement the workflow without technical skills
- Deploy AI to execute them at >95% success rate without managing hundreds of Windows VMs
- Kill repetitive work without legacy RPA complexity, implementation and maintenance cost

## Feature Support

Terminator currently supports **Windows only**. macOS and Linux are not supported.

| Feature                      | Windows | macOS | Linux | Notes                                                |
| ---------------------------- | :-----: | :---: | :---: | ---------------------------------------------------- |
| **Core Automation**          |         |       |       |                                                      |
| Element Locators             |   Yes   |   No  |   No  | Find elements by `name`, `role`, `window`, etc.      |
| UI Actions (`click`, `type`) |   Yes   |   No  |   No  | Core interactions with UI elements.                  |
| Application Management       |   Yes   |   No  |   No  | Launch, list, and manage applications.               |
| Window Management            |   Yes   |   No  |   No  | Get active window, list windows.                     |
| **Advanced Features**        |         |       |       |                                                      |
| Browser Automation           |   Yes   |   No  |   No  | Chrome extension enables browser control.            |
| Workflow Recording           |   Yes   |   No  |   No  | Record human workflows for deterministic automation. |
| Monitor Management           |   Yes   |   No  |   No  | Multi-display support.                               |
| Screen & Element Capture     |   Yes   |   No  |   No  | Take screenshots of displays or elements.            |
| **Libraries**                |         |       |       |                                                      |
| Python (`terminator.py`)     | Partial |   No  |   No  | `pip install terminator`                             |
| TypeScript (`@mediar-ai/terminator`) |   Yes   |   No  |   No  | `npm i @mediar-ai/terminator`                        |
| Workflow (`@mediar-ai/workflow`) |   Yes   |   No  |   No  | `npm i @mediar-ai/workflow`                          |
| CLI (`@mediar-ai/cli`)       |   Yes   |   No  |   No  | `npm i @mediar-ai/cli`                               |
| KV (`@mediar-ai/kv`)         |   Yes   |   No  |   No  | `npm i @mediar-ai/kv`                                |
| MCP (`terminator-mcp-agent`) |   Yes   |   No  |   No  | `npx -y terminator-mcp-agent --add-to-app [app]`     |
| Rust (`terminator-rs`)       |   Yes   |   No  |   No  | `cargo add terminator-rs`                            |

**Legend:**

- **Yes**: Supported - The feature is stable and well-tested.
- **Partial**: Partial / Experimental - The feature is in development and may have limitations.
- **No**: Not available on this platform.

## How to Inspect Accessibility Elements (like `name:Seven`)

To create reliable selectors (e.g. `name:Seven`, `role:Button`, `window:Calculator`), you need to inspect the Windows Accessibility Tree:

### Windows

- **Tool:** [Accessibility Insights for Windows](https://accessibilityinsights.io/downloads/)
- **Alt:** [Inspect.exe](https://learn.microsoft.com/en-us/windows/win32/winauto/inspect-objects) (comes with Windows SDK)
- **Usage:** Open the app you want to inspect → launch Accessibility Insights → hover or use keyboard navigation to explore the UI tree (Name, Role, ControlType, AutomationId).

> These tools show you the `Name`, `Role`, `ControlType`, and other metadata used in Terminator selectors.

### Platform Support

| Platform | CLI | MCP Agent | Automation | Installation Method |
|----------|:---:|:---------:|:----------:|---------------------|
| Windows  | Yes | Yes       | Yes        | npm/bunx |

**Note:** Terminator currently supports Windows only. macOS and Linux support is not available.

## Troubleshooting

For detailed troubleshooting, debugging, and MCP server logs, [send us a message](https://www.mediar.ai/).

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests. many parts are experimental, and help is appreciated.
