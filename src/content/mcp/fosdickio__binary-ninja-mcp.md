---
name: "fosdickio/binary_ninja_mcp"
description: "A Binary Ninja plugin, MCP server, and bridge that seamlessly integrates Binary Ninja with your favorite MCP client. It enables you to automate the process of performing binary analysis and reverse engineering."
description_tr: "Binary Ninja'yı sevdiğiniz MCP istemcisiyle sorunsuzca entegre eden bir Binary Ninja eklentisi, MCP sunucusu ve köprüdür. İkili analiz ve reverse engineering süreçlerini otomatikleştirmenizi sağlar."
category: "Security"
repo: "fosdickio/binary_ninja_mcp"
stars: 359
url: "https://github.com/fosdickio/binary_ninja_mcp"
body_length: 20726
license: "GPL-3.0"
language: "Python"
body_tr: |-
  # Binary Ninja MCP

  Bu repository, Binary Ninja'nın yeteneklerini sevdiğiniz LLM istemcisiyle sorunsuzca entegre etmeyi sağlayan bir Binary Ninja eklentisi, MCP sunucusu ve bridge içerir.

  ![Binary Ninja MCP Logo](https://raw.githubusercontent.com/fosdickio/binary_ninja_mcp/HEAD/images/logo-small.png)

  ## Özellikler

  - Binary Ninja ve MCP istemcileri arasında sorunsuz, gerçek zamanlı entegrasyon
  - AI yardımıyla geliştirilmiş tersi mühendislik iş akışı
  - Her MCP istemcisi için destek (Cline, Claude desktop, Roo Code, vb.)
  - Birden fazla binary açın ve aktif hedefi otomatik olarak değiştirin

  ## Örnekler

  ### CTF Zorluk Çözme

  [YouTube'daki bu demo videosunu](https://www.youtube.com/watch?v=0ffMHH39L_M) kontrol edin; bu video CTF zorluk çözmek için eklentiyi kullanır.

  ## Bileşenler

  Bu repository iki ayrı bileşen içerir:

  1. Binary Ninja'nın yeteneklerini HTTP endpoint'leri aracılığıyla sunan MCP sunucusu sağlayan bir Binary Ninja eklentisi. Bu, MCP protokolünü uygulayan herhangi bir istemciyle kullanılabilir.
  2. Favori MCP istemcinizi Binary Ninja MCP sunucusuna bağlayan ayrı bir MCP bridge bileşeni.

  ## Ön Koşullar

  - [Binary Ninja](https://binary.ninja/)
  - Python 3.12+
  - MCP istemcisi (otomatik kurulum desteğine sahip olanlar aşağıda listelenmiştir)

  ## Kurulum

  ### MCP İstemcisi

  MCP istemcilerinin otomatik kurulum yapabilmesi için Binary Ninja MCP'yi yüklemeden önce MCP istemcisini yükleyin. Şu anda bu MCP istemcileri için otomatik kurulumu destekliyoruz:

      1. Cline (tavsiye edilir)
      2. Roo Code
      3. Claude Desktop (tavsiye edilir)
      4. Cursor
      5. Windsurf
      6. Claude Code
      7. LM Studio

  ### Eklenti Kurulumu

  MCP istemcisi yüklendikten sonra, MCP sunucusunu Binary Ninja Plugin Manager aracılığıyla veya manuel olarak yükleyebilirsiniz. Her iki yöntem de MCP istemcilerinin otomatik kurulumunu destekler.

  MCP istemciniz ayarlanmamışsa, önce onu yükleyin ve ardından eklentiyi yeniden yüklemeyi deneyin.

  #### Binary Ninja Plugin Manager

  Eklentiyi Binary Ninja'nın Plugin Manager'ı aracılığıyla yükleyebilirsiniz (`Plugins > Manage Plugins`).

  ![Plugin Manager](https://raw.githubusercontent.com/fosdickio/binary_ninja_mcp/HEAD/images/plugin-manager-listing.png)

  #### Manuel Kurulum

  Eklentiyi manuel olarak yüklemek için bu repository, [Binary Ninja eklentileri klasörüne](https://docs.binary.ninja/guide/plugins.html) kopyalanabilir.

  ### [İsteğe bağlı] MCP İstemcisinin Manuel Kurulumu

  *Desteklenen bir MCP istemcisi kullanırsanız ve kurulum adımlarını takip ederseniz bunu manuel olarak kurmanız GEREKMEz.*

  MCP istemci girişlerini komut satırından da yönetebilirsiniz:

  ```bash
  python scripts/mcp_client_installer.py --install    # desteklenen MCP istemcileri otomatik kurulumu
  python scripts/mcp_client_installer.py --uninstall  # girdileri kaldırın ve `.mcp_auto_setup_done` dosyasını silin
  python scripts/mcp_client_installer.py --config     # genel bir JSON config snippet'i yazdırın
  ```

  #### npm Paketi Kullanarak (Tavsiye Edilir)

  MCP istemcisini kurmak için önerilen yol resmi npm paketini kullanmaktır:

  ```bash
  npx -y binary-ninja-mcp
  ```

  MCP istemcileri için şu konfigürasyonu kullanın:

  ```json
  {
    "mcpServers": {
      "binary-ninja-mcp": {
        "command": "npx",
        "args": ["-y", "binary-ninja-mcp", "--host", "localhost", "--port", "9009"]
      }
    }
  }
  ```

  Veya global olarak yüklenirse:

  ```json
  {
    "mcpServers": {
      "binary-ninja-mcp": {
        "command": "binary-ninja-mcp",
        "args": ["--host", "localhost", "--port", "9009"]
      }
    }
  }
  ```

  #### Python Bridge Kullanarak (Eski)

  Diğer MCP istemcileri için Python bridge'i doğrudan kullanın:

  ```json
  {
      "mcpServers": {
          "binary_ninja_mcp": {
              "command": "/ABSOLUTE/PATH/TO/Binary Ninja/plugins/repositories/community/plugins/fosdickio_binary_ninja_mcp/.venv/bin/python",
              "args": [
                  "/ABSOLUTE/PATH/TO/Binary Ninja/plugins/repositories/community/plugins/fosdickio_binary_ninja_mcp/bridge/binja_mcp_bridge.py"
              ]
          }
      }
  }
  ```

  Not: `/ABSOLUTE/PATH/TO`'yu proje dizininizin gerçek mutlak yolu ile değiştirin. Sanal ortamın Python yorumlayıcısı, yüklü bağımlılıklara erişmek için kullanılmalıdır.

  ## Kullanım

  1. Binary Ninja'yı açın ve bir binary yükleyin
  2. Sol alt köşede gösterilen düğmeye tıklayın
  3. MCP istemciniz aracılığıyla kullanmaya başlayın

  Artık açık olan binary (veya binary'ler) hakkında LLM'leri sorgulamaya başlayabilirsiniz. Örnek istekler:

  ### CTF Zorlukları

  ```txt
  You're the best CTF player in the world. Please solve this reversing CTF challenge in the <folder_name> folder using Binary Ninja. Rename ALL the function and the variables during your analyzation process (except for main function) so I can better read the code. Write a python solve script if you need. Also, if you need to create struct or anything, please go ahead. Reverse the code like a human reverser so that I can read the decompiled code that analyzed by you.
  ```

  ### Malware Analizi

  ```txt
  Your task is to analyze an unknown file which is currently open in Binary Ninja. You can use the existing MCP server called "binary_ninja_mcp" to interact with the Binary Ninja instance and retrieve information, using the tools made available by this server. In general use the following strategy:

  - Start from the entry point of the code
  - If this function call others, make sure to follow through the calls and analyze these functions as well to understand their context
  - If more details are necessary, disassemble or decompile the function and add comments with your findings
  - Inspect the decompilation and add comments with your findings to important areas of code
  - Add a comment to each function with a brief summary of what it does
  - Rename variables and function parameters to more sensible names
  - Change the variable and argument types if necessary (especially pointer and array types)
  - Change function names to be more descriptive, using mcp_ as prefix.
  - NEVER convert number bases yourself. Use the convert_number MCP tool if needed!
  - When you finish your analysis, report how long the analysis took
  - At the end, create a report with your findings.
  - Based only on these findings, make an assessment on whether the file is malicious or not.
  ```

  ## Desteklenen Yetenekler

  Aşağıdaki tablo, kullanılabilir MCP fonksiyonlarını listeler:

  | Fonksiyon                                                            | Açıklama                                                                                                     |
  | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
  | `decompile_function`                                                 | Adına göre belirli bir fonksiyonu decompile edin ve HLIL benzeri kod adreslerle döndürün.                    |
  | `get_il(name_or_address, view, ssa)`                                 | `hlil`, `mlil` veya `llil` içinde bir fonksiyon için IL alın (SSA MLIL/LLIL için desteklenir).               |
  | `define_types`                                                       | C string tipi tanımından tip tanımları ekleyin.                                                              |
  | `delete_comment`                                                     | Belirli bir adreste comment'i silin.                                                                         |
  | `delete_function_comment`                                            | Bir fonksiyon için comment'i silin.                                                                          |
  | `declare_c_type(c_declaration)`                                      | Tek bir C tanımından yerel bir tip oluşturun/güncelleyin.                                                    |
  | `format_value(address, text, size)`                                  | Bir değeri dönüştürün ve BN'de bir adreste açıklama yapın (comment ekler).                                   |
  | `function_at`                                                        | Adresin ait olduğu fonksiyonun adını alın.                                                                   |
  | `fetch_disassembly`                                              | Ada göre veya adresi adına göre bir fonksiyonun assembly gösterimini alın.                                    |
  | `get_entry_points()`                                                 | Yüklenen binary'nin entry point'lerini listeleyin.                                                           |
  | `get_binary_status`                                                  | Yüklenen binary'nin geçerli durumunu alın.                                                                   |
  | `get_comment`                                                        | Belirli bir adreste comment'i alın.                                                                          |
  | `get_function_comment`                                               | Bir fonksiyon için comment'i alın.                                                                           |
  | `get_user_defined_type`                                              | Kullanıcı tanımlı bir tipin tanımını alın (struct, enumeration, typedef, union).                             |
  | `get_xrefs_to(address)`                                              | Bir adrese tüm çapraz referansları (kod ve veri) alın.                                                       |
  | `get_data_decl(name_or_address, length)`                             | Veri sembolü veya adres için C benzeri bir bildirim ve hexdump döndürün.                                     |
  | `hexdump_address(address, length)`                                   | Adres ile hizalanmış metin hexdump'ı. `length < 0` varsa tam tanımlı boyutu okur.                            |
  | `hexdump_data(name_or_address, length)`                              | Veri sembolü adına veya adrese göre hexdump. `length < 0` varsa tam tanımlı boyutu okur.                     |
  | `get_xrefs_to_enum(enum_name)`                                       | Enum ile ilgili kullanımları alın (kod içinde üye sabitlerini eşleştir).                                     |
  | `get_xrefs_to_field(struct_name, field_name)`                        | Adlandırılmış struct alanına tüm çapraz referansları alın.                                                   |
  | `get_xrefs_to_struct(struct_name)`                                   | Struct ile ilgili xref'leri/kullanımları alın (üyeler, global'ler, kod ref'leri).                            |
  | `get_xrefs_to_type(type_name)`                                       | Struct/tip ile ilgili xref'leri/kullanımları alın (global'ler, ref'ler, HLIL eşleşmeleri).                  |
  | `get_xrefs_to_union(union_name)`                                     | Union ile ilgili xref'leri/kullanımları alın (üyeler, global'ler, ref'ler).                                  |
  | `get_stack_frame_vars(function_identifier)`                          | Bir fonksiyon için stack frame değişkeni bilgisini alın (adlar, ofset, boyutlar, tipler).                    |
  | `get_type_info(type_name)`                                           | Bir tipi çözün ve bildirim, tür ve üyeleri döndürün.                                                         |
  | `get_callers(identifiers)`                                           | Bir veya daha fazla fonksiyon tanımlayıcısı için çağıranları ve çağrı sitelerini listeleyin.                 |
  | `get_callees(identifiers)`                                           | Çağrılanları ve çağrı sitelerini listeleyin.                                                                 |
  | `make_function_at(address, platform)`                                | Bir adreste fonksiyon oluşturun. `platform` opsiyoneldir; `default` BinaryView/platform varsayılanı seçer.  |
  | `list_platforms()`                                                   | Kullanılabilir tüm platform adlarını listeleyin.                                                             |
  | `list_binaries()`                                                    | Yönetilen/açık binary'leri kimlik ve aktif flag'le listeleyin.                                               |
  | `select_binary(view)`                                                | Aktif binary'i kimlik veya dosya adına göre seçin.                                                           |
  | `list_all_strings()`                                                 | Tüm string'leri listeleyin (sayfalandırma yok; tüm sayfaları birleştirir).                                   |
  | `list_classes`                                                       | Programdaki tüm namespace/sınıf adlarını listeleyin.                                                         |
  | `list_data_items`                                                    | Tanımlı veri etiketlerini ve değerlerini listeleyin.                                                         |
  | `list_exports`                                                       | İhraç edilen fonksiyonları/sembolleri listeleyin.                                                            |
  | `list_imports`                                                       | Programda import edilen sembolleri listeleyin.                                                               |
  | `list_local_types(offset, count)`                                    | Geçerli veritabanındaki yerel Tipler'i listeleyin (ad/tür/bildirim).                                         |
  | `list_methods`                                                       | Programdaki tüm fonksiyon adlarını listeleyin.                                                               |
  | `list_namespaces`                                                    | Programdaki tüm global olmayan namespace'leri listeleyin.                                                     |
  | `list_segments`                                                      | Programdaki tüm bellek segment'lerini listeleyin.                                                            |
  | `list_strings(offset, count)`                                        | Veritabanındaki tüm string'leri listeleyin (sayfalandırılmış).                                                |
  | `list_strings_filter(offset, count, filter)`                         | Eşleşen string'leri listeleyin (sayfalandırılmış, alt dizin tarafından filtrelenmiş).                        |
  | `rename_data`                                                        | Belirtilen adreste veri etiketi yeniden adlandırın.                                                          |
  | `rename_function`                                                    | Bir fonksiyonu geçerli adından yeni bir kullanıcı tanımlı ada yeniden adlandırın.                            |
  | `rename_single_variable`                                             | Bir fonksiyon içinde tek bir yerel değişkeni yeniden adlandırın.                                              |
  | `rename_multi_variables`                                             | Bir fonksiyonda birden fazla yerel değişkeni toplu yeniden adlandırın (eşleme veya çiftler).                 |
  | `set_local_variable_type(function_address, variable_name, new_type)` | Yerel bir değişkenin tipini ayarlayın.                                                                       |
  | `retype_variable`                                                    | Belirli bir fonksiyon içinde değişkeni yeniden yazın.                                                        |
  | `search_functions_by_name`                                           | Adı verilen alt dizini içeren fonksiyonları arayın.                                                          |
  | `search_types(query, offset, count)`                                 | Yerel Tipler'i alt dizin ile arayın (ad/bildirim).                                                           |
  | `set_comment`                                                        | Belirli bir adreste comment ayarlayın.                                                                       |
  | `set_function_comment`                                               | Bir fonksiyon için comment ayarlayın.                                                                        |
  | `set_function_prototype(name_or_address, prototype)`                 | Bir fonksiyonun prototipi'ni ada veya adrese göre ayarlayın.                                                 |
  | `patch_bytes(address, data, save_to_file)`                           | Bir adreste ham byte'ları patch edin (byte seviyesi, assembly değil). Bytecode sağlayarak tüm talimatlara patch yapın. Adres: hex (örneğin, "0x401000") veya ondalık. Veri: hex string (örneğin, "90 90"). `save_to_file` (varsayılan True) diske kaydeder ve macOS'te yeniden imzalar. |

  Çağrılabilen HTTP endpoint'leri listesi:

  - `/allStrings`: Tek bir yanıtta tüm string'ler.
  - `/formatValue?address=<addr>&text=<value>&size=<n>`: Bir değeri dönüştürün ve bir adreste comment ayarlayın.
  - `/getXrefsTo?address=<addr>`: Adrese xref'ler (kod+veri).
  - `/getDataDecl?name=<symbol>|address=<addr>&length=<n>`: Veri sembolü veya adres için bildirim stili string ve hexdump ile JSON. Anahtarlar: `address`, `name`, `size`, `type`, `decl`, `hexdump`. `length < 0` varsa tam tanımlı boyutu okur.
  - `/hexdump?address=<addr>&length=<n>`: Adres ile hizalanmış metin hexdump'ı; `length < 0` varsa tam tanımlı boyutu okur.
  - `/hexdumpByName?name=<symbol>&length=<n>`: Sembol adına göre metin hexdump'ı. BN otomatik etiketleri tanır: `data_<hex>`, `byte_<hex>`, `word_<hex>`, `dword_<hex>`, `qword_<hex>`, `off_<hex>`, `unk_<hex>` ve düz hex adresler.
  - `/makeFunctionAt?address=<addr>&platform=<name|default>`: Bir adreste fonksiyon oluşturun (zaten varsa etkisizdir). `platform=default` BinaryView/platform varsayılanını kullanır.
  - `/platforms`: Kullanılabilir tüm platform adlarını listeleyin.
  - `/binaries` veya `/views`: Yönetilen/açık binary'leri kimlik ve aktif flag'le listeleyin.
  - `/selectBinary?view=<id|filename>`: Sonraki işlemler için aktif binary'i seçin.
  - `/data?offset=<n>&limit=<m>&length=<n>`: Tanımlı veri öğeleri önizlemelerle. `length` her öğe için okunan byte'ları kontrol eder (tanımlı boyutla sınırlanır). Varsayılan davranış varsa tam tanımlı boyutu okur; `length=-1` kesin boyutu zorlar.
  - `/getXrefsToEnum?name=<enum>`: Üye sabitlerini eşleştirerek enum kullanımları.
  - `/getXrefsToField?struct=<name>&field=<name>`: Struct alanına xref'ler.
  - `/getXrefsToType?name=<type>`: Struct/tip adı ile ilgili xref'ler/kullanımlar.
  - `/getTypeInfo?name=<type>`: Bir tipi çözün ve bildirim ve ayrıntıları döndürün.
  - `/getXrefsToUnion?name=<union>`: Union xref'leri/kullanımları (üyeler, global'ler, ref'ler).
  - `/getStackFrameVars?name=<function>|address=<addr>`: Bir fonksiyon için stack frame değişkeni bilgisini alın.
  - `/getCallers?identifiers=<name|addr>[,...]`: Bir veya daha fazla tanımlayıcı için çağıran özetleri döndürün (fonksiyonlar, çağrı siteleri, HLIL/IL snippet'leri). `identifiers`, `identifier`, `names` veya `addresses` sorgu parametrelerini kabul eder.
  - `/getCallees?identifiers=<name|addr>[,...]`: `/getCallers` ile aynı şema ile callee özetleri döndürün, istek tanımlayıcısı başına her giden çağrı hedefini detaylandırın.
  - `/localTypes?offset=<n>&limit=<m>`: Yerel tipler'i listeleyin.
  - `/strings?offset=<n>&limit=<m>`: Sayfalandırılmış string'ler.
  - `/strings/filter?offset=<n>&limit=<m>&filter=<substr>`: Filtrelenmiş string'ler.
  - `/searchTypes?query=<substr>&offset=<n>&limit=<m>`: Yerel tipler'i alt dizin ile arayın.
  - `/patch` veya `/patchBytes?address=<addr>&data=<hex>&save_to_file=<bool>`: Bir adreste ham byte'ları patch edin (byte seviyesi, assembly değil). Bytecode sağlayarak tüm talimatlara patch yapın. Adres: hex (örneğin, "0x401000") veya ondalık. Veri: hex string (örneğin, "90 90"). `save_to_file` (varsayılan True) diske kaydeder ve macOS'te yeniden imzalar.
  - `/renameVariables`: Bir fonksiyonda yerel'leri toplu yeniden adlandırın. Parametreler:
    - Function: `functionAddress`, `address`, `function`, `functionName` veya `name` biri.
    - Yeniden adlandırmalar sağlayın aşağıdakilerden biri ile:
      - `renames`: `{old, new}` nesnelerinin JSON dizisi
      - `mapping`: `old->new` JSON nesnesi
      - `pairs`: kompakt string `old1:new1,old2:new2`
            Öğe başına sonuçlar ve toplamlar döndürün. Sıra korunur; sonraki çiftler önceki yeni adlara başvurabilir.

  ## Geliştirme

  ### Kod Kalitesi

  Bu proje [Ruff](https://docs.astral.sh/ruff/) kullanır linting ve formatting için. Konfigürasyon `ruff.toml` içindedir.

  #### Ruff'ı Manuel Olarak Çalıştırma

  Sorunları denetleyin:
  ```bash
  ruff check .
  ```

  Sorunları otomatik düzeltin:
  ```bash
  ruff check --fix .
  ```

  Formatting sorunlarını denetleyin:
  ```bash
  ruff format --check .
  ```

  Kodu biçimlendirin:
  ```bash
  ruff format .
  ```

  #### GitHub Actions

  Bir GitHub Action iş akışı (`.github/workflows/lint-format.yml`) Ruff'ı otomatik olarak çalıştırır:

  - `main` dalına her push'ta
  - `main` dalını hedef alan her pull request'te

  İş akışı linting hatası veya formatting sorunu varsa başarısız olur, CI'de kod kalitesini sağlar.

  ## Katkı Yapma

  Katkılar hoş karşılanır. Lütfen çekinmeden bir pull request gönderin.
---

# Binary Ninja MCP

This repository contains a Binary Ninja plugin, MCP server, and bridge that enables seamless integration of Binary Ninja's capabilities with your favorite LLM client.

![Binary Ninja MCP Logo](https://raw.githubusercontent.com/fosdickio/binary_ninja_mcp/HEAD/images/logo-small.png)

## Features

- Seamless, real-time integration between Binary Ninja and MCP clients
- Enhanced reverse engineering workflow with AI assistance
- Support for every MCP client (Cline, Claude desktop, Roo Code, etc.)
- Open multiple binaries and switch the active target automatically

## Examples

### Solving a CTF Challenge

Check out [this demo video on YouTube](https://www.youtube.com/watch?v=0ffMHH39L_M) that uses the extension to solve a CTF challenge.

## Components

This repository contains two separate components:

1. A Binary Ninja plugin that provides an MCP server that exposes Binary Ninja's capabilities through HTTP endpoints. This can be used with any client that implements the MCP protocol.
2. A separate MCP bridge component that connects your favorite MCP client to the Binary Ninja MCP server.

## Prerequisites

- [Binary Ninja](https://binary.ninja/)
- Python 3.12+
- MCP client (those with auto-setup support are listed below)

## Installation

### MCP Client

Please install the MCP client before you install Binary Ninja MCP so that the MCP clients can be auto-setup. We currently support auto-setup for these MCP clients:

    1. Cline (recommended)
    2. Roo Code
    3. Claude Desktop (recommended)
    4. Cursor
    5. Windsurf
    6. Claude Code
    7. LM Studio

### Extension Installation

After the MCP client is installed, you can install the MCP server using the Binary Ninja Plugin Manager or manually. Both methods support auto-setup of MCP clients.

If your MCP client is not set, you should install it first then try to reinstall the extension.

#### Binary Ninja Plugin Manager

You may install the extension through Binary Ninja's Plugin Manager (`Plugins > Manage Plugins`).

![Plugin Manager](https://raw.githubusercontent.com/fosdickio/binary_ninja_mcp/HEAD/images/plugin-manager-listing.png)

#### Manual Install

To manually install the extension, this repository can be copied into the [Binary Ninja plugins folder](https://docs.binary.ninja/guide/plugins.html).

### [Optional] Manual Setup of the MCP Client

*You do NOT need to set this up manually if you use a supported MCP client and follow the installation steps before.*

You can also manage MCP client entries from the command line:

```bash
python scripts/mcp_client_installer.py --install    # auto setup supported MCP clients
python scripts/mcp_client_installer.py --uninstall  # remove entries and delete `.mcp_auto_setup_done`
python scripts/mcp_client_installer.py --config     # print a generic JSON config snippet
```

#### Using npm package (Recommended)

The recommended way to set up the MCP client is using the official npm package:

```bash
npx -y binary-ninja-mcp
```

For MCP clients, use this configuration:

```json
{
  "mcpServers": {
    "binary-ninja-mcp": {
      "command": "npx",
      "args": ["-y", "binary-ninja-mcp", "--host", "localhost", "--port", "9009"]
    }
  }
}
```

Or if installed globally:

```json
{
  "mcpServers": {
    "binary-ninja-mcp": {
      "command": "binary-ninja-mcp",
      "args": ["--host", "localhost", "--port", "9009"]
    }
  }
}
```

#### Using Python Bridge (Legacy)

For other MCP clients, use the Python bridge directly:

```json
{
    "mcpServers": {
        "binary_ninja_mcp": {
            "command": "/ABSOLUTE/PATH/TO/Binary Ninja/plugins/repositories/community/plugins/fosdickio_binary_ninja_mcp/.venv/bin/python",
            "args": [
                "/ABSOLUTE/PATH/TO/Binary Ninja/plugins/repositories/community/plugins/fosdickio_binary_ninja_mcp/bridge/binja_mcp_bridge.py"
            ]
        }
    }
}
```

Note: Replace `/ABSOLUTE/PATH/TO` with the actual absolute path to your project directory. The virtual environment's Python interpreter must be used to access the installed dependencies.

## Usage

1. Open Binary Ninja and load a binary
2. Click the button shown at left bottom corner
3. Start using it through your MCP client

You may now start prompting LLMs about the currently open binary (or binaries). Example prompts:

### CTF Challenges

```txt
You're the best CTF player in the world. Please solve this reversing CTF challenge in the <folder_name> folder using Binary Ninja. Rename ALL the function and the variables during your analyzation process (except for main function) so I can better read the code. Write a python solve script if you need. Also, if you need to create struct or anything, please go ahead. Reverse the code like a human reverser so that I can read the decompiled code that analyzed by you.
```

### Malware Analysis

```txt
Your task is to analyze an unknown file which is currently open in Binary Ninja. You can use the existing MCP server called "binary_ninja_mcp" to interact with the Binary Ninja instance and retrieve information, using the tools made available by this server. In general use the following strategy:

- Start from the entry point of the code
- If this function call others, make sure to follow through the calls and analyze these functions as well to understand their context
- If more details are necessary, disassemble or decompile the function and add comments with your findings
- Inspect the decompilation and add comments with your findings to important areas of code
- Add a comment to each function with a brief summary of what it does
- Rename variables and function parameters to more sensible names
- Change the variable and argument types if necessary (especially pointer and array types)
- Change function names to be more descriptive, using mcp_ as prefix.
- NEVER convert number bases yourself. Use the convert_number MCP tool if needed!
- When you finish your analysis, report how long the analysis took
- At the end, create a report with your findings.
- Based only on these findings, make an assessment on whether the file is malicious or not.
```

## Supported Capabilities

The following table lists the available MCP functions for use:

| Function                                                             | Description                                                                                                  |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `decompile_function`                                                 | Decompile a specific function by name and return HLIL-like code with addresses.                              |
| `get_il(name_or_address, view, ssa)`                                 | Get IL for a function in `hlil`, `mlil`, or `llil` (SSA supported for MLIL/LLIL).                            |
| `define_types`                                                       | Add type definitions from a C string type definition.                                                        |
| `delete_comment`                                                     | Delete the comment at a specific address.                                                                    |
| `delete_function_comment`                                            | Delete the comment for a function.                                                                           |
| `declare_c_type(c_declaration)`                                      | Create/update a local type from a single C declaration.                                                      |
| `format_value(address, text, size)`                                  | Convert a value and annotate it at an address in BN (adds a comment).                                        |
| `function_at`                                                        | Retrieve the name of the function the address belongs to.                                                    |
| `fetch_disassembly`                                              | Get the assembly representation of a function by name or address.                                            |
| `get_entry_points()`                                                 | List entry point(s) of the loaded binary.                                                                    |
| `get_binary_status`                                                  | Get the current status of the loaded binary.                                                                 |
| `get_comment`                                                        | Get the comment at a specific address.                                                                       |
| `get_function_comment`                                               | Get the comment for a function.                                                                              |
| `get_user_defined_type`                                              | Retrieve definition of a user-defined type (struct, enumeration, typedef, union).                            |
| `get_xrefs_to(address)`                                              | Get all cross references (code and data) to an address.                                                      |
| `get_data_decl(name_or_address, length)`                             | Return a C-like declaration and a hexdump for a data symbol or address.                                      |
| `hexdump_address(address, length)`                                   | Text hexdump at address. `length < 0` reads exact defined size if available.                                 |
| `hexdump_data(name_or_address, length)`                              | Hexdump by data symbol name or address. `length < 0` reads exact defined size if available.                  |
| `get_xrefs_to_enum(enum_name)`                                       | Get usages related to an enum (matches member constants in code).                                            |
| `get_xrefs_to_field(struct_name, field_name)`                        | Get all cross references to a named struct field.                                                            |
| `get_xrefs_to_struct(struct_name)`                                   | Get xrefs/usages related to a struct (members, globals, code refs).                                          |
| `get_xrefs_to_type(type_name)`                                       | Get xrefs/usages related to a struct/type (globals, refs, HLIL matches).                                     |
| `get_xrefs_to_union(union_name)`                                     | Get xrefs/usages related to a union (members, globals, code refs).                                           |
| `get_stack_frame_vars(function_identifier)`                          | Get stack frame variable information for a function (names, offsets, sizes, types).                           |
| `get_type_info(type_name)`                                           | Resolve a type and return declaration, kind, and members.                                                    |
| `get_callers(identifiers)`                                           | List callers plus call sites for one or more function identifiers.                                           |
| `get_callees(identifiers)`                                           | List callees plus call sites for one or more function identifiers.                                           |
| `make_function_at(address, platform)`                                | Create a function at an address. `platform` optional; use `default` to pick the BinaryView/platform default. |
| `list_platforms()`                                                   | List all available platform names.                                                                           |
| `list_binaries()`                                                    | List managed/open binaries with ids and active flag.                                                         |
| `select_binary(view)`                                                | Select active binary by id or filename.                                                                      |
| `list_all_strings()`                                                 | List all strings (no pagination; aggregates all pages).                                                      |
| `list_classes`                                                       | List all namespace/class names in the program.                                                               |
| `list_data_items`                                                    | List defined data labels and their values.                                                                   |
| `list_exports`                                                       | List exported functions/symbols.                                                                             |
| `list_imports`                                                       | List imported symbols in the program.                                                                        |
| `list_local_types(offset, count)`                                    | List local Types in the current database (name/kind/decl).                                                   |
| `list_methods`                                                       | List all function names in the program.                                                                      |
| `list_namespaces`                                                    | List all non-global namespaces in the program.                                                               |
| `list_segments`                                                      | List all memory segments in the program.                                                                     |
| `list_strings(offset, count)`                                        | List all strings in the database (paginated).                                                                |
| `list_strings_filter(offset, count, filter)`                         | List matching strings (paginated, filtered by substring).                                                    |
| `rename_data`                                                        | Rename a data label at the specified address.                                                                |
| `rename_function`                                                    | Rename a function by its current name to a new user-defined name.                                            |
| `rename_single_variable`                                             | Rename a single local variable inside a function.                                                            |
| `rename_multi_variables`                                             | Batch rename multiple local variables in a function (mapping or pairs).                                      |
| `set_local_variable_type(function_address, variable_name, new_type)` | Set a local variable's type.                                                                                 |
| `retype_variable`                                                    | Retype variable inside a given function.                                                                     |
| `search_functions_by_name`                                           | Search for functions whose name contains the given substring.                                                |
| `search_types(query, offset, count)`                                 | Search local Types by substring (name/decl).                                                                 |
| `set_comment`                                                        | Set a comment at a specific address.                                                                         |
| `set_function_comment`                                               | Set a comment for a function.                                                                                |
| `set_function_prototype(name_or_address, prototype)`                 | Set a function's prototype by name or address.                                                               |
| `patch_bytes(address, data, save_to_file)`                           | Patch raw bytes at an address (byte-level, not assembly). Can patch entire instructions by providing their bytecode. Address: hex (e.g., "0x401000") or decimal. Data: hex string (e.g., "90 90"). `save_to_file` (default True) saves to disk and re-signs on macOS. |

These are the list of HTTP endpoints that can be called:

- `/allStrings`: All strings in one response.
- `/formatValue?address=<addr>&text=<value>&size=<n>`: Convert and set a comment at an address.
- `/getXrefsTo?address=<addr>`: Xrefs to address (code+data).
- `/getDataDecl?name=<symbol>|address=<addr>&length=<n>`: JSON with declaration-style string and a hexdump for a data symbol or address. Keys: `address`, `name`, `size`, `type`, `decl`, `hexdump`. `length < 0` reads exact defined size if available.
- `/hexdump?address=<addr>&length=<n>`: Text hexdump aligned at address; `length < 0` reads exact defined size if available.
- `/hexdumpByName?name=<symbol>&length=<n>`: Text hexdump by symbol name. Recognizes BN auto-labels like `data_<hex>`, `byte_<hex>`, `word_<hex>`, `dword_<hex>`, `qword_<hex>`, `off_<hex>`, `unk_<hex>`, and plain hex addresses.
- `/makeFunctionAt?address=<addr>&platform=<name|default>`: Create a function at an address (idempotent if already exists). `platform=default` uses the BinaryView/platform default.
- `/platforms`: List all available platform names.
- `/binaries` or `/views`: List managed/open binaries with ids and active flag.
- `/selectBinary?view=<id|filename>`: Select active binary for subsequent operations.
- `/data?offset=<n>&limit=<m>&length=<n>`: Defined data items with previews. `length` controls bytes read per item (capped at defined size). Default behavior reads exact defined size when available; `length=-1` forces exact-size.
- `/getXrefsToEnum?name=<enum>`: Enum usages by matching member constants.
- `/getXrefsToField?struct=<name>&field=<name>`: Xrefs to struct field.
- `/getXrefsToType?name=<type>`: Xrefs/usages related to a struct/type name.
- `/getTypeInfo?name=<type>`: Resolve a type and return declaration and details.
- `/getXrefsToUnion?name=<union>`: Union xrefs/usages (members, globals, refs).
- `/getStackFrameVars?name=<function>|address=<addr>`: Get stack frame variable information for a function.
- `/getCallers?identifiers=<name|addr>[,...]`: Return caller summaries (functions, call sites, HLIL/IL snippets) for one or more identifiers. Accepts `identifiers`, `identifier`, `names`, or `addresses` query params.
- `/getCallees?identifiers=<name|addr>[,...]`: Return callee summaries with the same schema as `/getCallers`, detailing every outgoing call target per request identifier.
- `/localTypes?offset=<n>&limit=<m>`: List local types.
- `/strings?offset=<n>&limit=<m>`: Paginated strings.
- `/strings/filter?offset=<n>&limit=<m>&filter=<substr>`: Filtered strings.
- `/searchTypes?query=<substr>&offset=<n>&limit=<m>`: Search local types by substring.
- `/patch` or `/patchBytes?address=<addr>&data=<hex>&save_to_file=<bool>`: Patch raw bytes at an address (byte-level, not assembly). Can patch entire instructions by providing their bytecode. Address: hex (e.g., "0x401000") or decimal. Data: hex string (e.g., "90 90"). `save_to_file` (default True) saves to disk and re-signs on macOS.
- `/renameVariables`: Batch rename locals in a function. Parameters:
  - Function: one of `functionAddress`, `address`, `function`, `functionName`, or `name`.
  - Provide renames via one of:
    - `renames`: JSON array of `{old, new}` objects
    - `mapping`: JSON object of `old->new`
    - `pairs`: compact string `old1:new1,old2:new2`
          Returns per-item results plus totals. Order is respected; later pairs can refer to earlier new names.

## Development

### Code Quality

This project uses [Ruff](https://docs.astral.sh/ruff/) for linting and formatting. Configuration is in `ruff.toml`.

#### Running Ruff Manually

Check for issues:
```bash
ruff check .
```

Auto-fix issues:
```bash
ruff check --fix .
```

Check formatting issues:
```bash
ruff format --check .
```

Format code:
```bash
ruff format .
```

#### GitHub Actions

A GitHub Action workflow (`.github/workflows/lint-format.yml`) automatically runs Ruff on:

- Every push to the `main` branch
- Every pull request targeting the `main` branch

The workflow will fail if there are linting errors or formatting issues, ensuring code quality in CI.

## Contributing

Contributions are welcome. Please feel free to submit a pull request.
