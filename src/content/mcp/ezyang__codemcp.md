---
name: "ezyang/codemcp"
description: "Coding agent with basic read, write and command line tools."
category: "Coding Agents"
repo: "ezyang/codemcp"
stars: 1614
url: "https://github.com/ezyang/codemcp"
body_length: 8454
license: "Apache-2.0"
language: "Python"
body_tr: |-
  UYARI: Anthropic'in $20/ay aboneliği ile claude code kullanılabilir, bu nedenle codemcp'yi tamamen eski olarak görüyorum. Ancak bazı iyi tasarım fikirleri var (özellikle Git sürümleme şeması etrafında) ki bunları sonunda agentic coding cli'nin mevcut nesline taşımak istiyorum.

  # codemcp

  Claude Desktop'ı codemcp yükleyerek bir pair programming asistanına dönüştürün. Bunu sayesinde Claude'dan doğrudan bilgisayarınızdaki bir codebase'e özellikler uygulamasını, hataları düzeltmesini ve refactor yapmasını isteyebilirsiniz; Claude dosyaları doğrudan düzenler ve testleri çalıştırır. Kodları Claude'un chat penceresine girip çıkarmaktan artık elinizi kurtarın!

  ![Claude Desktop'ın codemcp ile ekran görüntüsü](https://raw.githubusercontent.com/ezyang/codemcp/HEAD/static/screenshot.png?raw=true)

  codemcp diğer AI kodlama yazılımlarına benzer işlevsellik sunur (Claude Code, Cursor, Cline, Aider), ancak tasarım alanında benzersiz bir konuma sahiptir:

  1. **Claude Pro**, Anthropic'in $20/ay abonelik sunumu ile kullanılması amaçlanmıştır. Kullanımımı bir abonelik planı ile ödemeyi seviyorum çünkü bu agent aksiyonları için **sıfır marjinal maliyet** demektir; artık çalışmayan bir değişiklik seti için beş dolar boşa harcadığım için kötü hissetmeyeceğim.

     Claude Max ($100/ay) sahipseniz, Claude Code'un da abonelik tabanlı fiyatlandırma ile kullanılabileceğini unutmayın. codemcp'nin değer önerişi bu durumda daha belirsizdir (ve bazı açılardan kesinlikle Claude Code'dan daha kötüdür), ancak diğer UI kararlarını tercih ederseniz Claude Max ile codemcp'yi yine de kullanabilirsiniz. (Ayrıca, açık kaynak kodlu olduğu için Claude Code'dan farklı olarak onu istediğiniz şekilde değiştirebilirsiniz!)

  2. **varsayılan olarak otomatik kabul** etrafında inşa edilmiştir. Agent'ın denetimim olmadan olabildiğince ileri gitmesini istiyorum, böylece sonunda her şeyi bir kez gözden geçirebilirim. codemcp'nin çoğu kodlama ajanından farklı yaptığı iki önemli şey var: **sınırlandırılmamış shell'i yasaklarız**, bunun yerine agent'ın ``codemcp.toml`` içinde kullanabileceği komutları önceden bildirmenizi gerektiririz ve **Git tüm LLM düzenlemelerini sürüm kontrol altına alırız**, böylece agent değişikliklerini ince taneli bir şekilde geri alabilir ve değişiklikleri commit etmeyi unutmak hakkında endişelenmenize gerek kalmaz.

  3. **IDE agnostiktir**: Claude'dan değişiklikler yapmasını istersiniz, o yapır, ve sonra değişiklikleri gözden geçirmek ve daha fazla düzenlemeler yapmak için favori IDE kurulumunuzu kullanabilirsiniz. Vim'i günlük editörüm olarak kullanıyorum ve VSCode'u veya belirli bir editörü gerektiren kodlama ortamları benim için caydırıcıdır.

  ## ÖNEMLİ: Master kullanıcılar için - Token verimliliği için önemli değişiklikler

  codemcp'nin token verimliliğini iyileştirmek için, master'da codemcp'yi tek bir araca geri dönüştürme sürecindeyim (InitProject sırasında talimatları chat'e atmak yerine). Bu, tool use'u manuel olarak onaylamanız gerektiği anlamına gelir. Tool use onayı birden fazla sohbet arasında kalıcı olduğundan, bu makul bir tradeoff olduğunu düşünüyorum, ancak gerçekten beğenmezseniz, otomatik onaylama tool use'unu desteklemek için [refined-claude](https://github.com/ezyang/refined-claude/issues) tarayıcı uzantısında bir bug dosyalayın.

  ## Kurulum

  codemcp'yi kurmanız ve kullanmanız için şu spesifik yolu tavsiye ederim:

  1. `uv` yükleyin ve zaten yüklü değillerse git yükleyin.

  2. Tarayıcınıza [claude-mcp](https://chromewebstore.google.com/detail/mcp-for-claudeai/jbdhaamjibfahpekpnjeikanebpdpfpb) yükleyin.
     Bu, SSE MCP sunucularına doğrudan web sitesinden bağlanmanıza olanak sağlar, bu da Claude Desktop'ı kullanmanız gerekmediği ve kolayca birden fazla chat pencereniz olabileceği anlamına gelir. Bu uzantının yakında [Integrations](https://www.anthropic.com/news/integrations) kullanıma sunulmasıyla eskileceğini bekliyoruz. Şu anda ancak Integrations henüz Claude Pro abone üyeleri için gelmemiş durumdadır.

  3. ``uvx --from git+https://github.com/ezyang/codemcp@prod codemcp serve`` kullanarak codemcp'yi çalıştırın.
     Standart olmayan bir port üzerinde dinlemesi gerekiyorsa ``--port 1234`` ekleyebilirsiniz.

     Pro ipucu: tehlikeli yaşamayı seviyorsanız, `prod` yerine `main` koyabilirsiniz. Belirli bir sürüme sabitlemek istiyorsanız, `0.3.0` veya benzeri bir sürümle değiştirin.

     Pro ipucu: codemcp'yi uzaktan çalıştırabilirsiniz! [Tailscale](https://tailscale.com/) kullanıyorsanız ve Tailnet'inizdeki tüm cihazlara güveniyorsanız, ``--host 100.101.102.103`` geçerek (IP'yi node'unuzun Tailscale IP adresiyle değiştirin. Bu IP genellikle 100.64.0.0/10 aralığında bulunur) bunu güvenli bir şekilde yapabilirsiniz. **UYARI:** Bu MCP'ye erişimi olan herkes bilgisayarınızda keyfi kod yürütebilir, **SON DERECE** 0.0.0.0'a bağlanmak istemeniz olası değildir.

  4. claude-mcp'yi şu URL ile yapılandırın: ``http://127.0.0.1:8000/sse`` (gerekirse portu değiştirin.)

  5. Ne yazık ki web UI çekiç simgesini tutarsız şekilde görüntüler. Ancak Console'da "[MCP codemcp] SSE connection opened" ifadesini arayarak veya Claude'a hangi araçlara sahip olduğunu soarak MCP sunucusunun çalışıp çalışmadığını kontrol edebilirsiniz (codemcp'den araçların mevcut olduğunu söylemelidir.)

  Claude Desktop'ı kullanmayı tercih ederseniz veya alışılmadık ihtiyaçlarınız varsa, çeşitli standart dışı durumlar için kurulum talimatları için [INSTALL.md](INSTALL.md) dosyasını kontrol edin.

  ## Kullanım

  İlk olarak, çalışmak istediğiniz Git repository checkout'unda `codemcp.toml` dosyası oluşturmanız gerekir. Formatörünüzü çalıştırmak veya testler çalıştırmak gibi şeyler yapmasını istiyorsanız, komutlar bölümünde bunları yürütmek için komutları ekleyin (not: bu komutların gerek duydukları sanal ortamları uygun şekilde kurması gerekir):

  ```toml
  format = ["./run_format.sh"]
  test = ["./run_test.sh"]
  ```

  ``format`` komutu özeldir; her dosya düzenlemesinden sonra her zaman çalıştırılır.

  Daha sonra, Claude Desktop'ta bir Proje oluşturmanız ve bunu Proje Talimatlarına koymanız önerilir:

  ```
  Initialize codemcp with $PROJECT_DIR
  ```

  `$PROJECT_DIR` üzerinde çalışmak istediğiniz projenin yoludur.

  Daha sonra Claude ile proje üzerinde yapmak istediğiniz değişiklikler hakkında sohbet edin. Her codemcp kodunuza değişiklik yaptığında, bir commit oluşturur.

  Bu araçı kullanan bazı örnek transkriptleri görmek için şu adresleri kontrol edin:

  - [Yeni bir özellik uygulamak](https://claude.ai/share/a229d291-6800-4cb8-a0df-896a47602ca0)
  - [Başarısız testleri düzeltmek](https://claude.ai/share/2b7161ef-5683-4261-ad45-fabc3708f950)
  - [Refactor yapmak](https://claude.ai/share/f005b43c-a657-43e5-ad9f-4714a5cd746f)

  codemcp, sohbet başına bir commit oluşturur ve özellik üzerinde çalışırken onu değiştirir.

  ## Felsefe

  - Hız sınırlaması yediğinizde, başka bir şey yapma vakti bulun (Claude'un kodunu gözden geçir, başka birinin kodunu gözden geçir, plan yap, bazı toplantılar yap)

  - Bu *otonom bir agent değildir*. En azından, her sohbetten sonra müdahale etmek ve sonraki değişikliği istemek zorunda kalırsınız. Tek bir sohbet içinde yapılacak uzun bir şey listesi isteyebilirsiniz *ancak*, muhtemelen Claude Desktop'ın çıkış sınırına ulaşacak ve ajanı manuel olarak "devam ettirmeniz" gerekecektir. Bunu kucaklayın ve Claude'un doğru şey yaptığından emin olmak için ara vermelerinizi kullanın.

  - Claude raydan çıktığında, size para yerine zaman maliyeti getirir. Buna göre davranın: zaman darboğaz ise, Claude'un aşamalı çıkışını dikkatle izleyin.

  ## Yapılandırma

  `codemcp.toml` tarafından desteklenen tüm yapılandırma seçenekleri aşağıdadır:

  ```toml
  project_prompt = """
  Bu özellik üzerinde çalışmaya başlamadan önce kısa bir haiku yazın. Bunu sadece bir kez yapın.
  """

  [commands]
  format = ["./run_format.sh"]
  test = ["./run_test.sh"]
  ```

  `project_prompt` sohbetlerde projeyi başlattığınızda yüklenecektir.

  `commands` bölümü belirli araçlar için komutları yapılandırmanıza olanak sağlar. Adları LLM'ye söylenir, o bunları ne zaman çalıştırmak istediğine karar verir. `project_prompt`'a araçların nasıl kullanılacağı hakkında talimatlar ekleyebilirsiniz; ayrıca araç başına spesifik talimatlar verebileceğiniz daha ayrıntılı bir sözdizimini destekleriz:

  ```
  [commands.test]
  command = ["./run_test.sh"]
  doc = "Belirli bir testi çalıştırmak için pytest tarzı bir test seçiciyi argüman olarak kabul eder."
  ```

  ## Sorun Giderme

  Sunucuyu inspector ile çalıştırmak için:

  ```
  PYTHONPATH=. mcp dev codemcp/__main__.py
  ```

  Günlükler `~/.codemcp/codemcp.log` dosyasına yazılır. Günlük seviyesi `~/.codemcprc` konumundaki genel yapılandırma dosyasında ayarlanabilir:

  ```toml
  [logger]
  verbosity = "INFO"  # DEBUG, INFO, WARNING, ERROR veya CRITICAL olabilir
  ```

  Günlüğe kaydetme proje başına yapılandırılamaz, ancak Claude Desktop'ı birden fazla projede paralel olarak kullanmak zor olduğu için bu çok önemli değildir.

  ## Katkıda Bulunmak

  [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.
---

NOTICE: claude code is available with Anthropic's $20/mo subscription, so I consider
codemcp fully obsolete.  However, there are some good design ideas (especially around
the Git-versioning scheme) that I eventually want to port into the current generation
of agentic coding clis.

# codemcp

Make Claude Desktop a pair programming assistant by installing codemcp.  With
it, you can directly ask Claude to implement features, fix bugs and do
refactors on a codebase on your computer; Claude will directly edit files and
run tests.  Say goodbye to copying code in and out of Claude's chat window!

![Screenshot of Claude Desktop with codemcp](https://raw.githubusercontent.com/ezyang/codemcp/HEAD/static/screenshot.png?raw=true)

codemcp offers similar functionality to other AI coding software (Claude Code,
Cursor, Cline, Aider), but it occupies a unique point in the design space:

1. It's intended to be used with **Claude Pro**, Anthropic's $20/mo
   subscription offering.  I like paying for my usage with a subscription plan
   because it means **zero marginal cost** for agent actions; no more feeling
   bad that you wasted five bucks on a changeset that doesn't work.

   Note that if you have Claude Max ($100/mo), Claude Code can also be used
   with subscription based pricing.  The value proposition for codemcp is
   murkier in this case (and it is definitely inferior to Claude Code in some
   respects), but you can still use codemcp with Claude Max if you prefer some
   of the other UI decisions it makes.  (Also, it's open source, so you can
   change it if you don't like it, unlike Claude Code!)

2. It's built around **auto-accept by default**.  I want my agent to get as
   far as it can without my supervision, so I can review everything in one go at
   the end.  There are two key things that codemcp does differently than most
   coding agents: we **forbid unrestricted shell**, instead requiring you to
   predeclare commands the agent can use in ``codemcp.toml``, and we **Git
   version all LLM edits**, so you can roll back agent changes on a
   fine-grained basis and don't have to worry about forgetting to commit
   changes.

3. It's **IDE agnostic**: you ask Claude to make changes, it makes them, and
   then you can use your favorite IDE setup to review the changes and make
   further edits.  I use vim as my daily driver editor, and coding environments
   that require VSCode or a specific editor are a turn off for me.

## IMPORTANT: For master users - Major changes for token efficiency

To improve codemcp's token efficiency, on master I am in the process of
changing codemcp back into a multi-tool tool (instead of a single tool whose
instructions are blatted into chat when you InitProject).  This means you have
to manually approve tool use.  Because tool use approval is persistent across
multiple chats, I think this is a reasonable tradeoff to make, but if you
really don't like, file a bug at
[refined-claude](https://github.com/ezyang/refined-claude/issues) browser
extension for supporting auto-approve tool use.

## Installation

I recommend this specific way of installing and using codemcp:

1. Install `uv` and install git, if they are not installed already.

2. Install [claude-mcp](https://chromewebstore.google.com/detail/mcp-for-claudeai/jbdhaamjibfahpekpnjeikanebpdpfpb) on your browser.
   This enables you to connect to SSE MCP servers directly from the website,
   which means you don't need to use Claude Desktop and can easily have
   multiple chat windows going in parallel.  We expect this extension should
   be soon obsoleted by the rollout of
   [Integrations](https://www.anthropic.com/news/integrations).  At time of
   writing, however, Integrations have not yet arrived for Claude Pro subscribers.

3. Run codemcp using ``uvx --from git+https://github.com/ezyang/codemcp@prod codemcp serve``.
   You can add ``--port 1234`` if you need it to listen on a non-standard port.

   Pro tip: if you like to live dangerously, you can change `prod` to `main`.  If
   you want to pin to a specific release, replace it with `0.3.0` or similar.

   Pro tip: you can run codemcp remotely!  If you use
   [Tailscale](https://tailscale.com/) and trust all devices on your Tailnet,
   you can do this securely by passing ``--host 100.101.102.103`` (replace the
   IP with the Tailscale IP address of your node.  This IP typically lives in
   the 100.64.0.0/10 range.)  **WARNING:** Anyone with access to this MCP can perform
   arbitrary code execution on your computer, it is **EXTREMELY** unlikely you want to
   bind to 0.0.0.0.

4. Configure claude-mcp with URL: ``http://127.0.0.1:8000/sse`` (replace the port if needed.)

5. Unfortunately, the web UI inconsistently displays the hammer icon.  However, you can verify
   that the MCP server is working by looking for "[MCP codemcp] SSE connection opened" in the
   Console, or by asking Claude what tools it has available (it should say
   tools from codemcp are available.)

If you prefer to use Claude Desktop or have unusual needs, check out [INSTALL.md](INSTALL.md) for
installation instructions for a variety of non-standard situations.

## Usage

First, you must create a `codemcp.toml` file in the Git repository checkout
you want to work on.  If you want the agent to be able to do things like run
your formatter or run tests, add the commands to execute them in the commands
section (note: these commands need to appropriately setup any virtual
environment they need):

```toml
format = ["./run_format.sh"]
test = ["./run_test.sh"]
```

The ``format`` command is special; it is always run after every file edit.

Next, in Claude Desktop, we recommend creating a Project and putting this in
the Project Instructions:

```
Initialize codemcp with $PROJECT_DIR
```

Where `$PROJECT_DIR` is the path to the project you want to work on.

Then chat with Claude about what changes you want to make to the project.
Every time codemcp makes a change to your code, it will generate a commit.

To see some sample transcripts using this tool, check out:

- [Implement a new feature](https://claude.ai/share/a229d291-6800-4cb8-a0df-896a47602ca0)
- [Fix failing tests](https://claude.ai/share/2b7161ef-5683-4261-ad45-fabc3708f950)
- [Do a refactor](https://claude.ai/share/f005b43c-a657-43e5-ad9f-4714a5cd746f)

codemcp will generate a commit per chat and amend it as it is working on your feature.

## Philosophy

- When you get rate limited, take the time to do something else (review
  Claude's code, review someone else's code, make plans, do some meetings)

- This is *not* an autonomous agent.  At minimum, you have to intervene after
  every chat to review the changes and request the next change.  While you
  *can* ask for a long list of things to be done in a single chat, you will
  likely hit Claude Desktop's output limit and have to manually "continue" the
  agent anyway.  Embrace it, and use the interruptions to make sure Claude is
  doing the right thing.

- When Claude goes off the rails, it costs you time rather than dollars.
  Behave accordingly: if time is the bottleneck, watch Claude's incremental
  output carefully.

## Configuration

Here are all the config options supported by `codemcp.toml`:

```toml
project_prompt = """
Before beginning work on this feature, write a short haiku.  Do this only once.
"""

[commands]
format = ["./run_format.sh"]
test = ["./run_test.sh"]
```

The `project_prompt` will be loaded when you initialize the project in chats.

The `commands` section allows you to configure commands for specific tools.  The
names are told to the LLM, who will decide when it wants to run them.  You can add
instructions how to use tools in the `project_prompt`; we also support a more verbose
syntax where you can give specific instructions on a tool-by-tool basis:

```
[commands.test]
command = ["./run_test.sh"]
doc = "Accepts a pytest-style test selector as an argument to run a specific test."
```

## Troubleshooting

To run the server with inspector, use:

```
PYTHONPATH=. mcp dev codemcp/__main__.py
```

Logs are written to `~/.codemcp/codemcp.log`. The log level can be set in a global configuration file at `~/.codemcprc`:

```toml
[logger]
verbosity = "INFO"  # Can be DEBUG, INFO, WARNING, ERROR, or CRITICAL
```

Logging is not configurable on a per project basis, but this shouldn't matter
much because it's difficult to use Claude Desktop in parallel on multiple
projects anyway.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
