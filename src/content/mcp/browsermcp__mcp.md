---
name: "BrowserMCP/mcp"
description: "Automate your local Chrome browser"
category: "Browser Automation"
repo: "BrowserMCP/mcp"
stars: 6568
url: "https://github.com/BrowserMCP/mcp"
body_length: 1506
license: "Apache-2.0"
language: "TypeScript"
homepage: "https://browsermcp.io"
body_tr: |-
  <a href="https://browsermcp.io">
    
  </a>

  <h3 align="center">Browser MCP</h3>

  <p align="center">
    Tarayıcınızı AI ile otomatikleştirin.
    <br />
    <a href="https://browsermcp.io"><strong>Website</strong></a> 
    •
    <a href="https://docs.browsermcp.io"><strong>Dokümantasyon</strong></a>
  </p>

  ## Hakkında

  Browser MCP, VS Code, Claude, Cursor ve Windsurf gibi AI uygulamalarını kullanarak tarayıcınızı otomatikleştirmenizi sağlayan bir MCP sunucusu + Chrome uzantısıdır.

  ## Özellikler

  - ⚡ Hızlı: Otomasyon makinenizde yerel olarak gerçekleşir, ağ gecikmesi olmadan daha iyi performans sağlar.
  - 🔒 Özel: Otomasyon yerel olarak gerçekleştiği için, tarayıcı aktiviteniz cihazınızda kalır ve uzak sunuculara gönderilmez.
  - 👤 Oturum Açılı: Mevcut tarayıcı profilinizi kullanarak, tüm hizmetlerinizde oturum açık kalırsınız.
  - 🥷🏼 Gizli: Gerçek tarayıcı parmak izinizi kullanarak temel bot algılaması ve CAPTCHA'ları atlatır.

  ## Katkı Yapma

  Bu depo, Browser MCP'nin tüm çekirdek MCP kodunu içerir, ancak geliştirildiği monorepo'dan gelen yardımcı programlar ve türler bağımlılıkları nedeniyle şu anda kendi başına oluşturulamaz.

  ## Krediler

  Browser MCP, kullanıcının tarayıcısını otomatikleştirmek için yeni tarayıcı örnekleri oluşturmak yerine [Playwright MCP sunucusundan](https://github.com/microsoft/playwright-mcp) uyarlanmıştır. Bu, kullanıcının mevcut tarayıcı profilini oturum açılı oturumları kullanmak ve otomatikleştirilmiş tarayıcı kullanımını yaygın olarak engelleyen bot algılama mekanizmalarını önlemek için kullanmayı sağlar.
---

<a href="https://browsermcp.io">
  
</a>

<h3 align="center">Browser MCP</h3>

<p align="center">
  Automate your browser with AI.
  <br />
  <a href="https://browsermcp.io"><strong>Website</strong></a> 
  •
  <a href="https://docs.browsermcp.io"><strong>Docs</strong></a>
</p>

## About

Browser MCP is an MCP server + Chrome extension that allows you to automate your browser using AI applications like VS Code, Claude, Cursor, and Windsurf.

## Features

- ⚡ Fast: Automation happens locally on your machine, resulting in better performance without network latency.
- 🔒 Private: Since automation happens locally, your browser activity stays on your device and isn't sent to remote servers.
- 👤 Logged In: Uses your existing browser profile, keeping you logged into all your services.
- 🥷🏼 Stealth: Avoids basic bot detection and CAPTCHAs by using your real browser fingerprint.

## Contributing

This repo contains all the core MCP code for Browser MCP, but currently cannot yet be built on its own due to dependencies on utils and types from the monorepo where it's developed.

## Credits

Browser MCP was adapted from the [Playwright MCP server](https://github.com/microsoft/playwright-mcp) in order to automate the user's browser rather than creating new browser instances. This allows using the user's existing browser profile to use logged-in sessions and avoid bot detection mechanisms that commonly block automated browser use.
