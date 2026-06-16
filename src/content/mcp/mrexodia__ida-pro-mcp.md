---
name: "mrexodia/ida-pro-mcp"
description: "MCP server for IDA Pro, allowing you to perform binary analysis with AI assistants. This plugin implement decompilation, disassembly and allows you to generate malware analysis reports automatically."
category: "Security"
repo: "mrexodia/ida-pro-mcp"
stars: 8855
url: "https://github.com/mrexodia/ida-pro-mcp"
body_length: 18558
license: "MIT"
language: "Python"
homepage: "https://plugins.hex-rays.com/mrexodia/ida-pro-mcp"
body_tr: |-
  # IDA Pro MCP

  Simple [MCP Server](https://modelcontextprotocol.io/introduction) IDA Pro'da tersine mühendislik yapmaya olanak tanıyan sunucu.

  https://github.com/user-attachments/assets/6ebeaa92-a9db-43fa-b756-eececce2aca0

  Videoda kullanılan ikili dosyalar ve prompt, [mcp-reversing-dataset](https://github.com/mrexodia/mcp-reversing-dataset) deposunda mevcuttur.

  ## Ön Koşullar

  - [Python](https://www.python.org/downloads/) (**3.11 veya üstü**)
    - En yeni Python sürümüne geçmek için `idapyswitch` kullanın
  - [IDA Pro](https://hex-rays.com/ida-pro) (8.3 veya üstü, 9 önerilir), **IDA Free desteklenmemektedir**
  - Desteklenen MCP İstemci (istediğiniz birini seçin)
    - [Amazon Q Developer CLI](https://aws.amazon.com/q/developer/)
    - [Augment Code](https://www.augmentcode.com/)
    - [Claude](https://claude.ai/download)
    - [Claude Code](https://www.anthropic.com/code)
    - [Cline](https://cline.bot)
    - [Codex](https://github.com/openai/codex)
    - [Copilot CLI](https://docs.github.com/en/copilot)
    - [Crush](https://github.com/charmbracelet/crush)
    - [Cursor](https://cursor.com)
    - [Gemini CLI](https://google-gemini.github.io/gemini-cli/)
    - [Kilo Code](https://www.kilocode.com/)
    - [Kiro](https://kiro.dev/)
    - [LM Studio](https://lmstudio.ai/)
    - [Opencode](https://opencode.ai/)
    - [Qodo Gen](https://www.qodo.ai/)
    - [Qwen Coder](https://qwenlm.github.io/qwen-code-docs/)
    - [Roo Code](https://roocode.com)
    - [Trae](https://trae.ai/)
    - [VS Code](https://code.visualstudio.com/)
    - [VS Code Insiders](https://code.visualstudio.com/insiders)
    - [Warp](https://www.warp.dev/)
    - [Windsurf](https://windsurf.com)
    - [Zed](https://zed.dev/)
    - [Diğer MCP İstemcileri](https://modelcontextprotocol.io/clients#example-clients): İstemciniz için JSON config'i almak için `ida-pro-mcp --config` çalıştırın.

  ## Kurulum (Claude Code)

  Headless IDA Pro MCP'yi Claude Code'a kurmak için:

  ```bash
  claude plugin marketplace add mrexodia/claude-marketplace
  claude plugin install ida-pro-mcp@mrexodia
  ```

  En yeni sürüme güncellemek için:

  ```bash
  claude plugin update ida-pro-mcp@mrexodia
  ```

  **Not**: Bu, idalib'in global olarak etkinleştirilmesini ve [uv](https://astral.sh/uv) kurulumunu gerektirir:

  ```bash
  # windows
  uv run "C:\Program Files\IDA Professional 9.3\idalib\python\py-activate-idalib.py"
  # macos
  uv run "/Applications/IDA Professional 9.3.app/Contents/MacOS/idalib/python/py-activate-idalib.py"
  ```

  ## Kurulum (GUI)

  **Not**: MCP eklentisi artık önerilmemektedir ve sonunda kaldırılacaktır. Bunun yerine `idalib-mcp` kullanın.

  MCP sunucusunu IDA GUI'den manuel olarak yapılandırmak istiyorsanız:

  ```sh
  pip uninstall ida-pro-mcp
  pip install https://github.com/mrexodia/ida-pro-mcp/archive/refs/heads/main.zip
  ```

  MCP sunucularını yapılandırın ve IDA Eklentisini yükleyin:

  ```
  ida-pro-mcp --install
  ```

  **Önemli**: Kurulumun etkili olması için IDA ve MCP istemcinizi tamamen yeniden başlattığınızdan emin olun. Bazı istemciler (Claude gibi) arka planda çalışır ve sistem tepsisinden kapatılması gerekir.

  ## Prompt Mühendisliği

  LLM'ler halüsinasyona eğilimlidir ve promptinginizi spesifik olmalıdır. Tersine mühendislik için tam sayılar ile baytlar arasındaki dönüşüm özellikle sorunludur. Aşağıda minimal bir örnek prompt bulunmaktadır, farklı bir promptla iyi sonuçlar elde ettiyseniz bir tartışma başlatmaktan veya issue açmaktan çekinmeyin:

  ```md
  Göreviniz IDA Pro'da bir crackme'yi analiz etmektir. MCP araçlarını kullanarak bilgi alabilirsiniz. Genel olarak aşağıdaki stratejiyyi izleyin:

  - Decompilation'ı inceleyin ve bulgularınızla yorumlar ekleyin
  - Değişkenleri daha anlamlı isimlere yeniden adlandırın
  - Değişken ve argument türlerini gerekirse değiştirin (özellikle pointer ve array türleri)
  - Function isimlerini daha açıklayıcı olacak şekilde değiştirin
  - Daha fazla detay gerekiyorsa, function'ı disassemble edin ve yorumlar ekleyin
  - ASLA sayı tabanlarını kendiniz dönüştürmeyin. Gerekirse `int_convert` MCP aracını kullanın!
  - Brute force yapmaya çalışmayın, çözümleri tamamen disassembly ve basit python scriptlerinden türetin
  - Sonunda bulduğunuz bulgularınız ve attığınız adımlarla report.md oluşturun
  - Bir çözüm bulduğunuzda, kullanıcıdan geri bildirim isteyin ve bulduğunuz şifreyi bildirin
  ```

  Bu prompt sadece ilk deneydi, output'u iyileştirme yolları bulduysanız lütfen paylaşın!

  [@can1357](https://github.com/can1357) tarafından sağlanmış başka bir prompt:

  ```md
  Göreviniz kapsamlı ve tamamlanmış bir tersine mühendislik analizi oluşturmaktır. Proje hedeflerini anlamak ve analizi amacımıza uygun hale getirmek için AGENTS.md dosyasına başvurun.

  Aşağıdaki sistematik metodoloji kullanın:

  1. **Decompilation Analizi**
     - Decompiler çıktısını iyice inceleyin
     - Bulgularınızı belgelendiren detaylı yorumlar ekleyin
     - Her bileşenin gerçek işlevselliğini ve amacını anlamaya odaklanın (eski, yanlış yorumlara güvenmeyin)

  2. **Veri Tabanında Okunabilirliği İyileştirin**
     - Değişkenleri anlamlı, açıklayıcı isimlerle yeniden adlandırın
     - Değişken ve argument türlerini gerekli yerlerde düzeltin (özellikle pointer ve array türleri)
     - Function isimlerini gerçek amacını yansıtacak şekilde güncelleyin

  3. **Gerektiğinde Derin İnceleme**
     - Daha fazla detay gerekiyorsa, assembly'i inceleyin ve yorumlar ekleyin
     - Decompilation'dan net olmayan düşük seviye davranışları belgelendirin
     - Detaylı analiz için alt-ajanları kullanın

  4. **Önemli Kısıtlamalar**
     - ASLA sayı tabanlarını kendiniz dönüştürmeyin - gerekirse int_convert MCP aracını kullanın
     - Bilgi almak için gerektiğinde MCP araçlarını kullanın
     - Tüm sonuçları gerçek analiz üzerinden türetin, varsayımlardan değil

  5. **Dokumentasyon**
     - Bulduğunuz bilgilerle kapsamlı RE/*.md dosyaları üretin
     - Attığınız adımları ve kullandığınız metodoloji belgelendirin
     - Kullanıcı tarafından istendiğinde, önceki analiz dosyasından daha doğru olun
     - Bulguları AGENTS.md veya CLAUDE.md'de açıklanan proje hedefleri doğrultusunda organize edin
  ```

  Prompting hakkında tartışan ve bazı gerçek dünya kötü amaçlı yazılım analizini gösteren canlı yayın:

  [![](https://img.youtube.com/vi/iFxNuk3kxhk/0.jpg)](https://www.youtube.com/watch?v=iFxNuk3kxhk)

  ## LLM Doğruluğunu Artırmak İçin İpuçları

  Büyük Dil Modelleri (LLM'ler) güçlü araçlardır, ancak bazen karmaşık matematiksel hesaplamalarla mücadele edebilir veya "halüsinasyonlar" (gerçeği uydurma) gösterebilirler. LLM'ye `int_convert` MCP aracını kullanmasını söylediğinizden emin olun ve belirli işlemler için [math-mcp](https://github.com/EthanHenrickson/math-mcp) gerekebilir.

  Aklınızda tutulması gereken bir diğer şey, LLM'lerin obfüskeli kod üzerinde iyi performans göstermeyeceğidir. LLM'yi problemi çözmeye çalışmadan önce, ikili dosyanın etrafına bakın ve aşağıdaki şeyleri (otomatik olarak) kaldırmaktan kurtulmak için biraz zaman harcayın:

  - String şifreleme
  - Import hashing
  - Control flow flattening
  - Code şifreleme
  - Anti-decompilation hileleri

  Açık kaynak kütüphane kodunu ve C++ STL'yi çözmeye çalışmak için Lumina veya FLIRT gibi bir araç kullanmalısınız, bu doğruluğu daha da iyileştirecektir.

  ## Taşıma & Headless MCP

  Kullanıcı arayüzüne bağlanmak için SSE sunucusunu şu şekilde çalıştırabilirsiniz:

  ```sh
  uv run ida-pro-mcp --transport http://127.0.0.1:8744/sse
  ```

  [`idalib`](https://docs.hex-rays.com/core/idalib/getting-started) kurulduktan sonra, headless MCP sunucusu da çalıştırabilirsiniz. İlk ikili dosyayla başlayabilirsiniz:

  ```sh
  uv run idalib-mcp --host 127.0.0.1 --port 8745 path/to/executable
  ```

  Veya ikili dosya olmadan başlayın ve daha sonra `idalib_open(...)` / `idalib_close(...)` ile rasgele dosyaları açın/kapatın:

  ```sh
  uv run idalib-mcp --host 127.0.0.1 --port 8745
  ```

  Stdio tabanlı istemciler için şunu kullanın:

  ```sh
  uv run idalib-mcp --stdio
  ```

  `--stdio` veritabanı durumunu MCP sunucu işlemi içinde tutar. Codex alt-ajanları gibi ayrı MCP sunucu işlemleri oluşturan stdio istemcileri için, bunun yerine `--stdio-shared` kullanın:

  ```sh
  uv run idalib-mcp --stdio-shared
  ```

  `--stdio-shared` paylaşılan yerel HTTP supervisor başlatır veya yeniden kullanır ve stdio JSON-RPC'yi ona proxy'ler, böylece ayrı stdio MCP işlemleri aynı açık veritabanı worker'larını paylaşabilirler.

  _Not_: `idalib` özelliği [Willi Ballenthin](https://github.com/williballenthin) tarafından katkıda bulunulmuştur.

  ## Headless idalib Oturum Modeli

  `idalib-mcp` her açık veritabanını kendi idalib worker işleminde tutan bir supervisor'dur. `input_path` olmadan başlama desteklenir; veritabanları dinamik olarak açmak için `idalib_open(input_path, ...)` ve kapatmak için `idalib_close(session_id)` kullanın. Bu, tek bir headless MCP sunucusunun yaşamı boyunca rasgele dosyalarla çalışmasına olanak tanır.

  İstenen IDB, GUI IDA örneğinde eklentiyi çalıştıran bir örnekte zaten açılmışsa, `idalib-mcp` yinelenen bir headless worker oluşturmak yerine bu GUI örneğini kullanacaktır. GUI örneği daha sonra kaybolursa, sonraki yönlendirilmiş istek, mümkün olduğunda veritabanını headless worker'da yeniden açar. Kaydedilmemiş GUI-only değişiklikler, fallback'ten sonra görünür olması gerekiyorsa önce kaydedilmeli.

  Araçlar, geçerli MCP bağlamına bağlı veritabanını veya açık bir `database` argümanını hedefler.

  ```sh
  uv run idalib-mcp --stdio --max-workers 4
  ```

  Tipik akış:

  ```python
  idalib_open("/path/to/binary_a.exe", session_id="binary_a")
  idalib_open("/path/to/library.dll", session_id="library")

  decompile("main", database="binary_a")
  xrefs_to("ImportantExport", database="library")
  ```

  `database`, session ID'si, dosya adı veya input yolunu kabul eder. Atlanırsa, araçlar aktif bağlama bağlı veritabanını kullanır.

  Katı per-transport izolasyonunu etkinleştirmek için `--isolated-contexts` kullanın:

  ```sh
  uv run idalib-mcp --isolated-contexts --host 127.0.0.1 --port 8745 path/to/executable
  ```

  ### Neden `--isolated-contexts` kullanmalı?

  Birden fazla aracı aynı `idalib-mcp` sunucusuna bağladığınızda ve deterministik bağlam izolasyonu istediğinizde kullanın:

  - Bir aracının başka bir aracının aktif veritabanını yanlışlıkla değiştirmesini engelleyin.
  - Her transport bağlamının varsayılan veritabanını açık tutun.
  - Yine de `database=...` geçerek veya birden fazla aracı aynı session ID'sine bağlayarak bilinçli işbirliğine izin verin.

  `--isolated-contexts` etkinleştirildiğinde:

  - Her transport bağlamının kendi bağlaması vardır (MCP için `Mcp-Session-Id`, SSE için `session`, stdio için `stdio:default`).
  - Sınır olmayan bağlamlar, `database` sağlanmadıkça IDB'ye bağlı araçlar/kaynaklar için hızlı başarısız olur.
  - `idalib_switch(session_id)` ve `idalib_open(...)` yalnızca çağrıyı yapan bağlamı bağlar.

  ### Streamable HTTP davranışı

  `--isolated-contexts` ile birlikte, `Mcp-Session-Id` doğrulaması da dahil olmak üzere katı Streamable HTTP oturum semantiği etkinleştirilir.

  ### Bağlam araçları

  - `idalib_open(input_path, ...)`: İkili dosyayı worker'da aç ve aktif bağlam politikasına bağla.
  - `idalib_switch(session_id)`: Aktif bağlam politikasını mevcut bir oturuma yeniden bağla.
  - `idalib_current()`: Aktif bağlam politikasına bağlı oturumu döndür.
  - `idalib_unbind()`: Aktif bağlam bağlantısını kaldır.
  - `idalib_list()`: `is_active`, `is_current_context`, `bound_contexts`, backend (`worker` veya `gui`) ve işlem ID'lerini içerir.

  Worker kontrolleri:

  - `--max-workers N`: maksimum eşzamanlı veritabanı worker'ları (`0` = sınırsız, varsayılan `4`).
  - `IDA_MCP_MAX_WORKERS`: `--max-workers` için environment varsayılanı.


  ## MCP Kaynakları

  **Kaynaklar**, MCP'nin felsefesini takip eden taranabilir durumu (salt okunur veri) temsil eder.

  **Temel IDB Durumu:**
  - `ida://idb/metadata` - IDB dosya bilgisi (yol, mimari, taban, boyut, hashler)
  - `ida://idb/segments` - Bellek segmentleri izinlerle
  - `ida://idb/entrypoints` - Entry pointler (main, TLS callbacks, vb.)

  **UI Durumu:**
  - `ida://cursor` - Geçerli cursor konumu ve function
  - `ida://selection` - Geçerli seçim aralığı

  **Tip Bilgisi:**
  - `ida://types` - Tüm yerel tipler
  - `ida://structs` - Tüm yapılar/unions
  - `ida://struct/{name}` - Alanlarla yapı tanımı

  **Aramalar:**
  - `ida://import/{name}` - Ada göre import detayları
  - `ida://export/{name}` - Ada göre export detayları
  - `ida://xrefs/from/{addr}` - Adresden cross-reference'lar

  ## Temel Fonksiyonlar

  - `lookup_funcs(queries)`: Adres veya ada göre function'ları al (otomatik-algılar, liste veya virgülle ayrılmış string kabul eder).
  - `int_convert(inputs)`: Sayıları farklı formatlara dönüştür (decimal, hex, bytes, ASCII, binary).
  - `list_funcs(queries)`: Function'ları listele (sayfalanmış, filtrelenmiş).
  - `list_globals(queries)`: Global değişkenleri listele (sayfalanmış, filtrelenmiş).
  - `imports(offset, count)`: Tüm içe aktarılan sembolleri modül isimleriyle listele (sayfalanmış).
  - `decompile(addr)`: Verilen adreste function'ı decompile et.
  - `disasm(addr)`: Function'ı tam detaylarla disassemble et (argumentler, stack frame, vb).
  - `xrefs_to(addrs)`: Adres(ler)e tüm cross-reference'ları al.
  - `xrefs_to_field(queries)`: Spesifik struct alanına cross-reference'ları al.
  - `callees(addrs)`: Adres(ler)deki function tarafından çağrılan function'ları al.

  ## Modifikasyon İşlemleri

  - `set_comments(items)`: Disassembly ve decompiler görünümlerinde adres(ler)de yorum ayarla.
  - `patch_asm(items)`: Adres(ler)deki assembly instruction'ları yamayla.
  - `declare_type(decls)`: Yerel tip kütüphanesinde C tipi(leri) deklarasyon et.
  - `define_func(items)`: Adres(ler)de function(ları) tanımla. İsteğe bağlı olarak açık sınırlar için `end` belirt.
  - `define_code(items)`: Baytları adres(ler)de kod instruction'larına dönüştür.
  - `undefine(items)`: Adres(ler)deki item(ları) tanımsız yap, ham baytlara dönüştür. İsteğe bağlı olarak `end` veya `size` belirt.

  ## Bellek Okuma İşlemleri

  - `get_bytes(addrs)`: Adres(ler)deki ham baytları oku.
  - `get_int(queries)`: Tamsayı değerlerini ty kullanarak oku (i8/u64/i16le/i16be/vb).
  - `get_string(addrs)`: Null-sonlandırılmış string(ler)i oku.
  - `get_global_value(queries)`: Global değişken değer(ler)ini adres veya ada göre oku (otomatik-algılar, derleme zamanı değerleri).

  ## Stack Frame İşlemleri

  - `stack_frame(addrs)`: Function(ları) için stack frame değişkenlerini al.
  - `declare_stack(items)`: Belirtilen offset(ler)de stack değişkeni(leri) oluştur.
  - `delete_stack(items)`: Ada göre stack değişkeni(leri) sil.

  ## Yapı İşlemleri

  - `read_struct(queries)`: Spesifik adres(ler)de yapı alanı değerlerini oku.
  - `search_structs(filter)`: İsim desenine göre yapıları ara.

  ## Hata Ayıklayıcı İşlemleri (Uzantı)

  Hata ayıklayıcı araçları varsayılan olarak gizlidir. `?ext=dbg` sorgu parametresi ile etkinleştirin:

  ```
  http://127.0.0.1:13337/mcp?ext=dbg
  ```

  **Kontrol:**
  - `dbg_start()`: Hata ayıklayıcı işlemini başlat.
  - `dbg_exit()`: Hata ayıklayıcı işlemini çık.
  - `dbg_continue()`: Yürütmeyi devam ettir.
  - `dbg_run_to(addr)`: Adrese kadar çalıştır.
  - `dbg_step_into()`: Instruction'a adım at.
  - `dbg_step_over()`: Instruction'ı geç.

  **Breakpoint'ler:**
  - `dbg_bps()`: Tüm breakpoint'leri listele.
  - `dbg_add_bp(addrs)`: Breakpoint(ler) ekle.
  - `dbg_delete_bp(addrs)`: Breakpoint(leri) sil.
  - `dbg_toggle_bp(items)`: Breakpoint(leri) etkinleştir/devre dışı bırak.

  **Register'lar:**
  - `dbg_regs()`: Tüm register'lar, geçerli thread.
  - `dbg_regs_all()`: Tüm register'lar, tüm thread'ler.
  - `dbg_regs_remote(tids)`: Tüm register'lar, spesifik thread(ler).
  - `dbg_gpregs()`: GP register'ları, geçerli thread.
  - `dbg_gpregs_remote(tids)`: GP register'ları, spesifik thread(ler).
  - `dbg_regs_named(names)`: Adlandırılmış register'lar, geçerli thread.
  - `dbg_regs_named_remote(tid, names)`: Adlandırılmış register'lar, spesifik thread.

  **Stack & Bellek:**
  - `dbg_stacktrace()`: Modül/sembol bilgisiyle call stack.
  - `dbg_read(regions)`: Hata ayıklanan işlemden bellek oku.
  - `dbg_write(regions)`: Hata ayıklanan işleme bellek yaz.

  ## İleri Analiz İşlemleri

  - `py_eval(code)`: IDA bağlamında rasgele Python kodu yürüt (result/stdout/stderr içeren dict döndürür, Jupyter-style evaluationı destekler).
  - `analyze_funcs(addrs)`: Kapsamlı function analizi (decompilation, assembly, xrefs, callees, callers, strings, constants, basic blocks).

  ## Desen Eşleştirme & Arama

  - `find_regex(queries)`: Büyük/küçük harf duyarlı olmayan regex ile string'leri ara (sayfalanmış).
  - `find_bytes(patterns, limit=1000, offset=0)`: İkili dosyada bayt deseni(leri)ni bul (ör. "48 8B ?? ??"). Maks limit: 10000.
  - `find_insns(sequences, limit=1000, offset=0)`: Koddaki instruction sequence(ler)ini bul. Maks limit: 10000.
  - `find(type, targets, limit=1000, offset=0)`: Gelişmiş arama (immediate değerleri, string'ler, data/code referans'ları). Maks limit: 10000.

  ## Kontrol Akışı Analizi

  - `basic_blocks(addrs)`: Successor'lar ve predecessor'larla basic block'ları al.

  ## Tip İşlemleri

  - `set_type(edits)`: Tipi(leri) function'lara, global'lere, local'lere veya stack değişkenlerine uygula.
  - `infer_types(addrs)`: Hex-Rays veya heuristics kullanarak adres(ler)deki tipleri çıkart.

  ## Export İşlemleri

  - `export_funcs(addrs, format)`: Function(ları) belirtilen formatta export et (json, c_header, veya prototypes).

  ## Graph İşlemleri

  - `callgraph(roots, max_depth)`: Root function(ları)ndan yapılandırılabilir derinlikle call graph oluştur.

  ## Batch İşlemleri

  - `rename(batch)`: Function'lar, global'ler, local'ler ve stack değişkenleri için unified batch yeniden adlandırma işlemi (isteğe bağlı `func`, `data`, `local`, `stack` key'lerine sahip dict kabul eder).
  - `patch(patches)`: Aynı anda birden fazla bayt sequence'ini yamayla.
  - `put_int(items)`: Tamsayı değerlerini ty kullanarak yaz (i8/u64/i16le/i16be/vb).

  **Temel Özellikler:**

  - **Tip-güvenli API**: Tüm function'lar, daha iyi IDE desteği ve LLM yapılandırılmış output'ları için TypedDict şemalarıyla güçlü tipi-parametreyi kullanır
  - **Batch-first tasarım**: Çoğu işlem tek öğeleri ve listeleri kabul eder
  - **Tutarlı hata işleme**: Tüm batch işlemleri `[{..., error: null|string}, ...]` döndürür
  - **Cursor tabanlı sayfalandırma**: Arama function'ları `cursor: {next: offset}` veya `{done: true}` döndürür (varsayılan limit: 1000, zorunlu maks: 10000 token taşması önlemek için)
  - **Performans**: String'ler MD5-tabanlı geçersizleştirilme ile önbelleğe alınır, büyük projelerde tekrarlanan `build_strlist` çağrılarını önlemek için

  ## Geliştirme

  Yeni özellikler eklemek çok kolay ve akışlı bir işlemdir. Yapmanız gereken tek şey, `src/ida_pro_mcp/ida_mcp/api_*.py` içindeki modüler API dosyalarına yeni bir `@tool` function'ı eklemektir ve function'ınız hiçbir ek standart kod olmadan MCP sunucusunda kullanılabilir hale gelecektir! Aşağıda `get_metadata` function'ını 2 dakikadan kısa sürede ekleyen bir video bulunmaktadır (test dahil):

  https://github.com/user-attachments/assets/951de823-88ea-4235-adcb-9257e316ae64

  MCP sunucusunun kendisini test etmek için:

  ```sh
  npx -y @modelcontextprotocol/inspector
  ```

  Bu, http://localhost:5173 adresinde bir web arayüzü açacak ve test için MCP araçlarıyla etkileşim kurmanıza izin verecektir.

  Test için, IDA eklentisine sembolik bir bağlantı oluştururum ve ardından doğrudan `http://localhost:13337/mcp` adresine JSON-RPC isteği POST ederim. [Sembolik bağlantıları etkinleştirdikten](https://learn.microsoft.com/en-us/windows/apps/get-started/enable-your-device-for-development) sonra aşağıdaki komutu çalıştırabilirsiniz:

  ```sh
---

# IDA Pro MCP

Simple [MCP Server](https://modelcontextprotocol.io/introduction) to allow vibe reversing in IDA Pro.

https://github.com/user-attachments/assets/6ebeaa92-a9db-43fa-b756-eececce2aca0

The binaries and prompt for the video are available in the [mcp-reversing-dataset](https://github.com/mrexodia/mcp-reversing-dataset) repository.

## Prerequisites

- [Python](https://www.python.org/downloads/) (**3.11 or higher**)
  - Use `idapyswitch` to switch to the newest Python version
- [IDA Pro](https://hex-rays.com/ida-pro) (8.3 or higher, 9 recommended), **IDA Free is not supported**
- Supported MCP Client (pick one you like)
  - [Amazon Q Developer CLI](https://aws.amazon.com/q/developer/)
  - [Augment Code](https://www.augmentcode.com/)
  - [Claude](https://claude.ai/download)
  - [Claude Code](https://www.anthropic.com/code)
  - [Cline](https://cline.bot)
  - [Codex](https://github.com/openai/codex)
  - [Copilot CLI](https://docs.github.com/en/copilot)
  - [Crush](https://github.com/charmbracelet/crush)
  - [Cursor](https://cursor.com)
  - [Gemini CLI](https://google-gemini.github.io/gemini-cli/)
  - [Kilo Code](https://www.kilocode.com/)
  - [Kiro](https://kiro.dev/)
  - [LM Studio](https://lmstudio.ai/)
  - [Opencode](https://opencode.ai/)
  - [Qodo Gen](https://www.qodo.ai/)
  - [Qwen Coder](https://qwenlm.github.io/qwen-code-docs/)
  - [Roo Code](https://roocode.com)
  - [Trae](https://trae.ai/)
  - [VS Code](https://code.visualstudio.com/)
  - [VS Code Insiders](https://code.visualstudio.com/insiders)
  - [Warp](https://www.warp.dev/)
  - [Windsurf](https://windsurf.com)
  - [Zed](https://zed.dev/)
  - [Other MCP Clients](https://modelcontextprotocol.io/clients#example-clients): Run `ida-pro-mcp --config` to get the JSON config for your client.

## Installation (Claude Code)

To install the headless IDA Pro MCP in Claude Code:

```bash
claude plugin marketplace add mrexodia/claude-marketplace
claude plugin install ida-pro-mcp@mrexodia
```

To update to the latest version:

```bash
claude plugin update ida-pro-mcp@mrexodia
```

**Note**: This requires having idalib activated globally and [uv](https://astral.sh/uv) installed:

```bash
# windows
uv run "C:\Program Files\IDA Professional 9.3\idalib\python\py-activate-idalib.py"
# macos
uv run "/Applications/IDA Professional 9.3.app/Contents/MacOS/idalib/python/py-activate-idalib.py"
```

## Installation (GUI)

**Note**: the MCP plugin is no longer recommended and will eventually be deprecated. Use `idalib-mcp` instead.

If you want to configure the MCP server manually from the IDA GUI:

```sh
pip uninstall ida-pro-mcp
pip install https://github.com/mrexodia/ida-pro-mcp/archive/refs/heads/main.zip
```

Configure the MCP servers and install the IDA Plugin:

```
ida-pro-mcp --install
```

**Important**: Make sure you completely restart IDA and your MCP client for the installation to take effect. Some clients (like Claude) run in the background and need to be quit from the tray icon.

## Prompt Engineering

LLMs are prone to hallucinations and you need to be specific with your prompting. For reverse engineering the conversion between integers and bytes are especially problematic. Below is a minimal example prompt, feel free to start a discussion or open an issue if you have good results with a different prompt:

```md
Your task is to analyze a crackme in IDA Pro. You can use the MCP tools to retrieve information. In general use the following strategy:

- Inspect the decompilation and add comments with your findings
- Rename variables to more sensible names
- Change the variable and argument types if necessary (especially pointer and array types)
- Change function names to be more descriptive
- If more details are necessary, disassemble the function and add comments with your findings
- NEVER convert number bases yourself. Use the `int_convert` MCP tool if needed!
- Do not attempt brute forcing, derive any solutions purely from the disassembly and simple python scripts
- Create a report.md with your findings and steps taken at the end
- When you find a solution, prompt to user for feedback with the password you found
```

This prompt was just the first experiment, please share if you found ways to improve the output!

Another prompt by [@can1357](https://github.com/can1357):

```md
Your task is to create a complete and comprehensive reverse engineering analysis. Reference AGENTS.md to understand the project goals and ensure the analysis serves our purposes.

Use the following systematic methodology:

1. **Decompilation Analysis**
   - Thoroughly inspect the decompiler output
   - Add detailed comments documenting your findings
   - Focus on understanding the actual functionality and purpose of each component (do not rely on old, incorrect comments)

2. **Improve Readability in the Database**
   - Rename variables to sensible, descriptive names
   - Correct variable and argument types where necessary (especially pointers and array types)
   - Update function names to be descriptive of their actual purpose

3. **Deep Dive When Needed**
   - If more details are necessary, examine the disassembly and add comments with findings
   - Document any low-level behaviors that aren't clear from the decompilation alone
   - Use sub-agents to perform detailed analysis

4. **Important Constraints**
   - NEVER convert number bases yourself - use the int_convert MCP tool if needed
   - Use MCP tools to retrieve information as necessary
   - Derive all conclusions from actual analysis, not assumptions

5. **Documentation**
   - Produce comprehensive RE/*.md files with your findings
   - Document the steps taken and methodology used
   - When asked by the user, ensure accuracy over previous analysis file
   - Organize findings in a way that serves the project goals outlined in AGENTS.md or CLAUDE.md
```

Live stream discussing prompting and showing some real-world malware analysis:

[![](https://img.youtube.com/vi/iFxNuk3kxhk/0.jpg)](https://www.youtube.com/watch?v=iFxNuk3kxhk)

## Tips for Enhancing LLM Accuracy

Large Language Models (LLMs) are powerful tools, but they can sometimes struggle with complex mathematical calculations or exhibit "hallucinations" (making up facts). Make sure to tell the LLM to use the `int_convert` MCP tool and you might also need [math-mcp](https://github.com/EthanHenrickson/math-mcp) for certain operations.

Another thing to keep in mind is that LLMs will not perform well on obfuscated code. Before trying to use an LLM to solve the problem, take a look around the binary and spend some time (automatically) removing the following things:

- String encryption
- Import hashing
- Control flow flattening
- Code encryption
- Anti-decompilation tricks

You should also use a tool like Lumina or FLIRT to try and resolve all the open source library code and the C++ STL, this will further improve the accuracy.

## Transports & Headless MCP

You can run an SSE server to connect to the user interface like this:

```sh
uv run ida-pro-mcp --transport http://127.0.0.1:8744/sse
```

After installing [`idalib`](https://docs.hex-rays.com/core/idalib/getting-started) you can also run a headless MCP server. You can start with an initial binary:

```sh
uv run idalib-mcp --host 127.0.0.1 --port 8745 path/to/executable
```

Or start without a binary and open/close arbitrary files later with `idalib_open(...)` / `idalib_close(...)`:

```sh
uv run idalib-mcp --host 127.0.0.1 --port 8745
```

For stdio-based clients, use:

```sh
uv run idalib-mcp --stdio
```

`--stdio` keeps database state inside that MCP server process. For stdio clients
that spawn separate MCP server processes, such as Codex sub-agents, use
`--stdio-shared` instead:

```sh
uv run idalib-mcp --stdio-shared
```

`--stdio-shared` starts or reuses a shared local HTTP supervisor on the
configured host/port and proxies stdio JSON-RPC to it, so separate stdio MCP
processes can share the same opened database workers.

_Note_: The `idalib` feature was contributed by [Willi Ballenthin](https://github.com/williballenthin).

## Headless idalib Session Model

`idalib-mcp` is a supervisor that keeps each open database in its own idalib worker process. Starting without an `input_path` is supported; use `idalib_open(input_path, ...)` to open databases dynamically and `idalib_close(session_id)` to close them. This allows one headless MCP server to work with arbitrary files over its lifetime.

If the requested IDB is already open in a GUI IDA instance running the plugin, `idalib-mcp` will use that GUI instance instead of spawning a duplicate headless worker. If the GUI instance later disappears, the next routed request reopens the database in a headless worker when possible. Unsaved GUI-only changes must be saved first if they should be visible after fallback.

Tools target either the database bound to the current MCP context or an explicit `database` argument.

```sh
uv run idalib-mcp --stdio --max-workers 4
```

Typical flow:

```python
idalib_open("/path/to/binary_a.exe", session_id="binary_a")
idalib_open("/path/to/library.dll", session_id="library")

decompile("main", database="binary_a")
xrefs_to("ImportantExport", database="library")
```

`database` accepts a session ID, filename, or input path. If omitted, tools use the database bound to the active context.

Use `--isolated-contexts` to enable strict per-transport isolation:

```sh
uv run idalib-mcp --isolated-contexts --host 127.0.0.1 --port 8745 path/to/executable
```

### Why use `--isolated-contexts`?

Use it when multiple agents connect to the same `idalib-mcp` server and you want deterministic context isolation:

- Prevent one agent from changing another agent's active database accidentally.
- Keep each transport context's default database explicit.
- Still allow intentional collaboration by passing `database=...` or binding multiple agents to the same session ID.

When `--isolated-contexts` is enabled:

- Each transport context has its own binding (`Mcp-Session-Id` for `/mcp`, `session` for `/sse`, `stdio:default` for stdio).
- Unbound contexts fail fast for IDB-dependent tools/resources unless `database` is provided.
- `idalib_switch(session_id)` and `idalib_open(...)` bind the caller context only.

### Streamable HTTP behavior

With `--isolated-contexts`, strict Streamable HTTP session semantics are enabled, including `Mcp-Session-Id` validation.

### Context tools

- `idalib_open(input_path, ...)`: Open binary in a worker and bind it to the active context policy.
- `idalib_switch(session_id)`: Rebind the active context policy to an existing session.
- `idalib_current()`: Return the session bound to the active context policy.
- `idalib_unbind()`: Remove the active context binding.
- `idalib_list()`: Includes `is_active`, `is_current_context`, `bound_contexts`, backend (`worker` or `gui`), and process IDs.

Worker controls:

- `--max-workers N`: maximum simultaneous database workers (`0` = unlimited, default `4`).
- `IDA_MCP_MAX_WORKERS`: environment default for `--max-workers`.


## MCP Resources

**Resources** represent browsable state (read-only data) following MCP's philosophy.

**Core IDB State:**
- `ida://idb/metadata` - IDB file info (path, arch, base, size, hashes)
- `ida://idb/segments` - Memory segments with permissions
- `ida://idb/entrypoints` - Entry points (main, TLS callbacks, etc.)

**UI State:**
- `ida://cursor` - Current cursor position and function
- `ida://selection` - Current selection range

**Type Information:**
- `ida://types` - All local types
- `ida://structs` - All structures/unions
- `ida://struct/{name}` - Structure definition with fields

**Lookups:**
- `ida://import/{name}` - Import details by name
- `ida://export/{name}` - Export details by name
- `ida://xrefs/from/{addr}` - Cross-references from address

## Core Functions

- `lookup_funcs(queries)`: Get function(s) by address or name (auto-detects, accepts list or comma-separated string).
- `int_convert(inputs)`: Convert numbers to different formats (decimal, hex, bytes, ASCII, binary).
- `list_funcs(queries)`: List functions (paginated, filtered).
- `list_globals(queries)`: List global variables (paginated, filtered).
- `imports(offset, count)`: List all imported symbols with module names (paginated).
- `decompile(addr)`: Decompile function at the given address.
- `disasm(addr)`: Disassemble function with full details (arguments, stack frame, etc).
- `xrefs_to(addrs)`: Get all cross-references to address(es).
- `xrefs_to_field(queries)`: Get cross-references to specific struct field(s).
- `callees(addrs)`: Get functions called by function(s) at address(es).

## Modification Operations

- `set_comments(items)`: Set comments at address(es) in both disassembly and decompiler views.
- `patch_asm(items)`: Patch assembly instructions at address(es).
- `declare_type(decls)`: Declare C type(s) in the local type library.
- `define_func(items)`: Define function(s) at address(es). Optionally specify `end` for explicit bounds.
- `define_code(items)`: Convert bytes to code instruction(s) at address(es).
- `undefine(items)`: Undefine item(s) at address(es), converting back to raw bytes. Optionally specify `end` or `size`.

## Memory Reading Operations

- `get_bytes(addrs)`: Read raw bytes at address(es).
- `get_int(queries)`: Read integer values using ty (i8/u64/i16le/i16be/etc).
- `get_string(addrs)`: Read null-terminated string(s).
- `get_global_value(queries)`: Read global variable value(s) by address or name (auto-detects, compile-time values).

## Stack Frame Operations

- `stack_frame(addrs)`: Get stack frame variables for function(s).
- `declare_stack(items)`: Create stack variable(s) at specified offset(s).
- `delete_stack(items)`: Delete stack variable(s) by name.

## Structure Operations

- `read_struct(queries)`: Read structure field values at specific address(es).
- `search_structs(filter)`: Search structures by name pattern.

## Debugger Operations (Extension)

Debugger tools are hidden by default. Enable with `?ext=dbg` query parameter:

```
http://127.0.0.1:13337/mcp?ext=dbg
```

**Control:**
- `dbg_start()`: Start debugger process.
- `dbg_exit()`: Exit debugger process.
- `dbg_continue()`: Continue execution.
- `dbg_run_to(addr)`: Run to address.
- `dbg_step_into()`: Step into instruction.
- `dbg_step_over()`: Step over instruction.

**Breakpoints:**
- `dbg_bps()`: List all breakpoints.
- `dbg_add_bp(addrs)`: Add breakpoint(s).
- `dbg_delete_bp(addrs)`: Delete breakpoint(s).
- `dbg_toggle_bp(items)`: Enable/disable breakpoint(s).

**Registers:**
- `dbg_regs()`: All registers, current thread.
- `dbg_regs_all()`: All registers, all threads.
- `dbg_regs_remote(tids)`: All registers, specific thread(s).
- `dbg_gpregs()`: GP registers, current thread.
- `dbg_gpregs_remote(tids)`: GP registers, specific thread(s).
- `dbg_regs_named(names)`: Named registers, current thread.
- `dbg_regs_named_remote(tid, names)`: Named registers, specific thread.

**Stack & Memory:**
- `dbg_stacktrace()`: Call stack with module/symbol info.
- `dbg_read(regions)`: Read memory from debugged process.
- `dbg_write(regions)`: Write memory to debugged process.

## Advanced Analysis Operations

- `py_eval(code)`: Execute arbitrary Python code in IDA context (returns dict with result/stdout/stderr, supports Jupyter-style evaluation).
- `analyze_funcs(addrs)`: Comprehensive function analysis (decompilation, assembly, xrefs, callees, callers, strings, constants, basic blocks).

## Pattern Matching & Search

- `find_regex(queries)`: Search strings with case-insensitive regex (paginated).
- `find_bytes(patterns, limit=1000, offset=0)`: Find byte pattern(s) in binary (e.g., "48 8B ?? ??"). Max limit: 10000.
- `find_insns(sequences, limit=1000, offset=0)`: Find instruction sequence(s) in code. Max limit: 10000.
- `find(type, targets, limit=1000, offset=0)`: Advanced search (immediate values, strings, data/code references). Max limit: 10000.

## Control Flow Analysis

- `basic_blocks(addrs)`: Get basic blocks with successors and predecessors.

## Type Operations

- `set_type(edits)`: Apply type(s) to functions, globals, locals, or stack variables.
- `infer_types(addrs)`: Infer types at address(es) using Hex-Rays or heuristics.

## Export Operations

- `export_funcs(addrs, format)`: Export function(s) in specified format (json, c_header, or prototypes).

## Graph Operations

- `callgraph(roots, max_depth)`: Build call graph from root function(s) with configurable depth.

## Batch Operations

- `rename(batch)`: Unified batch rename operation for functions, globals, locals, and stack variables (accepts dict with optional `func`, `data`, `local`, `stack` keys).
- `patch(patches)`: Patch multiple byte sequences at once.
- `put_int(items)`: Write integer values using ty (i8/u64/i16le/i16be/etc).

**Key Features:**

- **Type-safe API**: All functions use strongly-typed parameters with TypedDict schemas for better IDE support and LLM structured outputs
- **Batch-first design**: Most operations accept both single items and lists
- **Consistent error handling**: All batch operations return `[{..., error: null|string}, ...]`
- **Cursor-based pagination**: Search functions return `cursor: {next: offset}` or `{done: true}` (default limit: 1000, enforced max: 10000 to prevent token overflow)
- **Performance**: Strings are cached with MD5-based invalidation to avoid repeated `build_strlist` calls in large projects

## Development

Adding new features is a super easy and streamlined process. All you have to do is add a new `@tool` function to the modular API files in `src/ida_pro_mcp/ida_mcp/api_*.py` and your function will be available in the MCP server without any additional boilerplate! Below is a video where I add the `get_metadata` function in less than 2 minutes (including testing):

https://github.com/user-attachments/assets/951de823-88ea-4235-adcb-9257e316ae64

To test the MCP server itself:

```sh
npx -y @modelcontextprotocol/inspector
```

This will open a web interface at http://localhost:5173 and allow you to interact with the MCP tools for testing.

For testing I create a symbolic link to the IDA plugin and then POST a JSON-RPC request directly to `http://localhost:13337/mcp`. After [enabling symbolic links](https://learn.microsoft.com/en-us/windows/apps/get-started/enable-your-device-for-development) you can run the following command:

```sh
uv run ida-pro-mcp --install
```

Generate the changelog of direct commits to `main`:

```sh
git log --first-parent --no-merges 1.2.0..main "--pretty=- %s"
```
