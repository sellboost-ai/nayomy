---
name: "jasonjmcghee/claude-debugs-for-you"
description: "An MCP Server and VS Code Extension which enables (language agnostic) automatic debugging via breakpoints and expression evaluation."
category: "Developer Tools"
repo: "jasonjmcghee/claude-debugs-for-you"
stars: 510
url: "https://github.com/jasonjmcghee/claude-debugs-for-you"
body_length: 6418
license: "MIT"
language: "TypeScript"
homepage: "https://marketplace.visualstudio.com/items?itemName=JasonMcGhee.claude-debugs-for-you"
body_tr: |-
  #  Claude Debugs For You

  [![Badge](https://img.shields.io/badge/Visual%20Studio%20Marketplace-0.1.2-blue.svg)](https://marketplace.visualstudio.com/items?itemName=JasonMcGhee.claude-debugs-for-you)

  _Vibe Debugging olarak da bilinir_

  ### Claude'u (veya başka bir LLM'yi) kodunuzu interaktif olarak debug etmeyi sağlayın

  Bu bir [MCP](https://docs.anthropic.com/en/docs/build-with-claude/mcp) Server ve VS Code uzantısıdır ve claude'un kodu interaktif olarak debug etmesini ve ifadeleri değerlendirmesini sağlar.

  Bu, diğer modellerle / istemcilerle vb. çalışması gerektiği anlamına gelir, ancak burada bunu yalnızca Claude Desktop ve Continue ile gösterdim.

  Dil-agnostiktir ve debugger console desteği ile VSCode'da debugging için geçerli launch.json dosyasını varsayar.

  ## Başlangıç

  1. Uzantıyı [releases](https://github.com/jasonjmcghee/claude-debugs-for-you/releases/) veya [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=JasonMcGhee.claude-debugs-for-you)'ten indirin
  2. Uzantıyı kurun
    - `.vsix` dosyasını doğrudan kullanıyorsanız, VS Code'daki "Extensions"teki üç noktaya tıklayın ve "Install from VSIX..." seçeneğini seçin
  3. Düzgün çalışıp çalışmadığını gösteren (işaret) veya başlatma başarısız oldu (x) gösteren yeni bir durum menüsü öğesi "Claude Debugs For You" göreceksiniz



  Bu durum menüsünü tıklayarak kullanılabilir komutları görebilirsiniz



  ### Kurulumunuza bağlı olarak aşağıdaki seçeneklerden birini izleyin

  <details>
    <summary>stdio kullanıyorsanız (klasik, Claude Desktop için gerekli)</summary>

  4. VS Code komutlarında "Copy MCP Debug Server stdio path to clipboard" araması yaparak stdio sunucu yolunu panonuza kopyalayın

  5. Aşağıdakileri yapıştırın (AMA YOL KOPYALANAN OLANA GÜNCELLEYIN!) `claude_desktop_config.json` dosyanıza veya diğer MCP sunucuları kullanıyorsanız buna göre düzenleyin

  ```
  {
    "mcpServers": {
      "debug": {
        "command": "node",
        "args": [
          "/path/to/mcp-debug.js"
        ]
      }
    }
  }
  ```

  6. Claude desktop'ı başlatın (veya diğer MCP istemcisini)
      1. Not: Zaten çalışıyorsa yeniden başlatmanız gerekebilir.
      2. Continue/Cursor veya VS Code'a yerleşik diğer araçları kullanıyorsanız bu adımı atlayabilirsiniz
  </details>

  <details>
    <summary>/sse kullanıyorsanız (örn. Cursor)</summary>

  4. "Copy MCP Debug Server sse address to clipboard" komutunu kullanarak MCP sunucu sse adresini alın
      1. Basitçe "http://localhost:4711/sse" sunucu URL'sini yazabilirsiniz veya ayarlarda kurduğunuz başka bir port
  5. İstemcinize göre gerekli yere ekleyin
      1. İstemciye bağlı olarak "refresh" tuşuna basmanız gerekebilir: bu Cursor'da gereklidir
  6. MCP istemcisini başlatın
     1. Not: Zaten çalışıyorsa yeniden başlatmanız gerekebilir.
     2. Continue/Cursor veya VS Code'a yerleşik diğer araçları kullanıyorsanız bu adımı atlayabilirsiniz

  </details>

  ### Debug etmeye hazırsınız!

  _[VS Code Debugging Dokumentasyonu](https://code.visualstudio.com/Docs/editor/debugging)_

  `.vscode/launch.json` içeren bir proje açın ve ilk konfigürasyon `${file}` ile belirli bir dosyayı debug etmeyi sağlayacak şekilde kurulmuş olsun.

  Aşağıdaki [Bir Örneği Çalıştır](#run-an-example) bölümüne bakın ve/veya bir demo videosu izleyin.

  ## Katkı Sağlama

  Hata buldu veya bunu geliştirecek bir fikriniz mi var? Lütfen bir pull request açın veya bir issue kaydedin.

  Bu readme kötü mü? Onu iyileştirmeme yardım edin!

  ## Demo

  ### [Continue](https://github.com/continuedev/continue) kullanarak

  Sorunu anlar ve sonra bir düzeltme önerir, biz de onu uygulamak için tıklarız

  https://github.com/user-attachments/assets/3a0a879d-2db7-4a3f-ab43-796c22a0f1ef

  <details>
    <summary>Bunu Continue ile nasıl kurarım? / MCP Konfigürasyonunu Göster</summary>

    [Dokümantasyonu oku!](https://docs.continue.dev/customize/tools)

    Konfigürasyon:
    
    ```json
    {
      ...
      "experimental": {
        "modelContextProtocolServers": [
          {
            "transport": {
              "type": "stdio",
              "command": "node",
              "args": [
                "/Users/jason/Library/Application Support/Code/User/globalStorage/jasonmcghee.claude-debugs-for-you/mcp-debug.js"
              ]
            }
          }
        ]
      }
    }
    ```

    Ayrıca araçları kullanabilen bir modeli seçmeniz gerekecek.

    Araçlar listesi açılır sayfada, araçlar listenizde "debug" seçeneğini tıkladığınızdan ve bunu "Automatic" olarak ayarladığınızdan emin olun.

    ### Sorun Giderme

    Continue'de MCP hataları görüyorsanız, continue eklentisini devre dışı bırakmayı / etkinleştirmeyi deneyin

  </details>

  Yararlı olabilirse, benim konfigürasyonum böyle görünüyor! Ama Claude Desktop ile neredeyse aynı.


  ### Claude Desktop Kullanarak

  Bu örnekte, bunu kasıtlı olarak çok temkinli yapdum (hiçbir varsayım yapma vb - aşağıdaki aynı prompt) ama istediğiniz herhangi bir şeyi yapmasını isteyebilirsiniz.

  https://github.com/user-attachments/assets/ef6085f7-11a2-4eea-bb60-b5a54873b5d5

  ## Geliştirme

  - Bu repo'yu klonlayın / VS Code'da açın
  - `npm run install` ve `npm run compile` çalıştırın
  - "run"a basın, bu yeni bir VSCode açacaktır
  - Aksi takdirde "Başlangıç" ile aynıdır
  - Yeniden oluşturmak için, `npm run compile`

  ## Paket

  ```bash
  vsce package
  ```


  ## Bir Örneği Çalıştır

  VS Code penceresinde `examples/python` açın

  Prompt'u girin:

  ```
  i am building `longest_substring_with_k_distinct` and for some reason it's not working quite right. can you debug it step by step using breakpoints and evaluating expressions to figure out where it goes wrong? make sure to use the debug tool to get access and debug! don't make any guesses as to the problem up front. DEBUG!
  ```

  ## Belirtilmeye değer diğer şeyler

  Birden fazla vs code penceresini başlattığınızda, bir açılır pencere göreceksiniz. "Claude Debugs For You"yu pencereler arasında nazikçe aktarabilirsiniz.

  Ayrıca otomatik başlatmayı devre dışı bırakabilirsiniz. Sonra durum menüsünü tıklamanız ve "Start Server" seçmeniz yeterli olacaktır.




  ## Kısa fikir listesi

  - [ ] Dosyaları listele + dosya içeriğini al yerine, sizin istediğinizi bulmak için ripgrep kullanmalıdır.
  - [x] Koşullu breakpoint desteği ekleyin
  - [ ] MCP'nin bir CodeLens veya "otomatik düzeltme" önerisi eklemesine izin vererek "düzeltme" aracı ekleyin, böylece kullanıcı önerilen bir değişikliği uygulamayı seçebilir veya seçmeyebilir.
  - Sizin fikriniz burada!
---

#  Claude Debugs For You

[![Badge](https://img.shields.io/badge/Visual%20Studio%20Marketplace-0.1.2-blue.svg)](https://marketplace.visualstudio.com/items?itemName=JasonMcGhee.claude-debugs-for-you)

_aka Vibe Debugging_

### Enable Claude (or any other LLM) to interactively debug your code

This is an [MCP](https://docs.anthropic.com/en/docs/build-with-claude/mcp) Server and VS Code extension which enables claude to interactively debug and evaluate expressions.

That means it should also work with other models / clients etc. but I only demonstrate it with Claude Desktop and Continue here.

It's language-agnostic, assuming debugger console support and valid launch.json for debugging in VSCode.

## Getting Started

1. Download the extension from [releases](https://github.com/jasonjmcghee/claude-debugs-for-you/releases/) or [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=JasonMcGhee.claude-debugs-for-you)
2. Install the extension
  - If using `.vsix` directly, go to the three dots in "Extensions" in VS Code and choose "Install from VSIX..."
3. You will see a new status menu item "Claude Debugs For You" which shows if it is running properly (check) or failed to startup (x)



You can click this status menu for the commands available



### Follow one of the options below, depending on your setup

<details>
  <summary>If using stdio (classic, required for Claude Desktop)</summary>

4. Copy the stdio server path to your clipboard by searching vs code commands for "Copy MCP Debug Server stdio path to clipboard"

5. Paste the following (BUT UPDATE THE PATH TO THE COPIED ONE!) in your `claude_desktop_config.json` or edit accordingly if you use other MCP servers

```
{
  "mcpServers": {
    "debug": {
      "command": "node",
      "args": [
        "/path/to/mcp-debug.js"
      ]
    }
  }
}
```

6. Start Claude desktop (or other MCP client)
    1. Note: You may need to restart it, if it was already running.
    2. You can skip this step if using Continue/Cursor or other built-in to VS Code
</details>

<details>
  <summary>If using `/sse` (e.g. Cursor)</summary>

4. Retrieve the MCP server sse address by using the "Copy MCP Debug Server sse address to clipboard" command
    1. You can just write it out server URL of "http://localhost:4711/sse", or whatever port you setup in settings.
5. Add it wherever you need to based on your client
    1. You may need to hit "refresh" depending on client: this is required in Cursor
6. Start MCP client
   1. Note: You may need to restart it, if it was already running.
   2. You can skip this step if using Continue/Cursor or other built-in to VS Code

</details>

### You're ready to debug!

_[VS Code Debugging Documentation](https://code.visualstudio.com/Docs/editor/debugging)_

Open a project containing a `.vscode/launch.json` with the first configuration setup to debug a specific file with `${file}`.

See [Run  an Example](#run-an-example) below, and/or watch a demo video.

## Contributing

Find bugs or have an idea that will improve this? Please open a pull request or log an issue.

Does this readme suck? Help me improve it!

## Demo

### Using [Continue](https://github.com/continuedev/continue)

It figures out the problem, and then suggests a fix, which we just click to apply

https://github.com/user-attachments/assets/3a0a879d-2db7-4a3f-ab43-796c22a0f1ef

<details>
  <summary>How do I set this up with Continue? / Show MCP Configuration</summary>

  [Read the docs!](https://docs.continue.dev/customize/tools)

  Configuration:
  
  ```json
  {
    ...
    "experimental": {
      "modelContextProtocolServers": [
        {
          "transport": {
            "type": "stdio",
            "command": "node",
            "args": [
              "/Users/jason/Library/Application Support/Code/User/globalStorage/jasonmcghee.claude-debugs-for-you/mcp-debug.js"
            ]
          }
        }
      ]
    }
  }
  ```

  You'll also need to choose a model capable of using tools.

  When the list of tools pops up, make sure to click "debug" in the list of your tools, and set it to be "Automatic".

  ### Troubleshooting

  If you are seeing MCP errors in continue, try disabling / re-enabling the continue plugin

</details>

If helpful, this is what my configuration looks like! But it's nearly the same as Claude Desktop.


### Using Claude Desktop

In this example, I made it intentionally very cautious (make no assumptions etc - same prompt as below) but you can ask it to do whatever.

https://github.com/user-attachments/assets/ef6085f7-11a2-4eea-bb60-b5a54873b5d5

## Developing

- Clone / Open this repo with VS Code
- Run `npm run install` and `npm run compile`
- Hit "run" which will open a new VSCode
- Otherwise same as "Getting Started applies"
- To rebuild, `npm run compile`

## Package

```bash
vsce package
```


## Run an Example

Open `examples/python` in a VS Code window

Enter the prompt:

```
i am building `longest_substring_with_k_distinct` and for some reason it's not working quite right. can you debug it step by step using breakpoints and evaluating expressions to figure out where it goes wrong? make sure to use the debug tool to get access and debug! don't make any guesses as to the problem up front. DEBUG!
```

## Other things worth mentioning

When you start multiple vs code windows, you'll see a pop-up. You can gracefully hand-off "Claude Debugs For You" between windows.

You can also disable autostart. Then you'll just need to click the status menu and select "Start Server".




## Short list of ideas

- [ ] It should use ripgrep to find what you ask for, rather than list files + get file content.
- [x] Add support for conditional breakpoints
- [ ] Add "fix" tool by allowing MCP to insert a CodeLens or "auto fix" suggestion so the user can choose to apply a recommended change or not.
- Your idea here!
