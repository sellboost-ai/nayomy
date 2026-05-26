---
name: "ato-language"
description_en: "Reference for the `.ato` declarative DSL: type system, connection semantics, constraint model, and standard library. Use when authoring or reviewing `.ato` code."
description_tr: "`.ato` deklaratif DSL'i için referans: tip sistemi, bağlantı semantiği, kısıtlama modeli ve standart kütüphane. `.ato` kodu yazarken veya gözden geçirirken kullanın."
category: "Development"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/ato-language/SKILL.md"
path: ".claude/skills/ato-language/SKILL.md"
is_collection: false
body_length: 13938
has_scripts: false
has_references: false
has_examples: false
related_files: ["EXTENSION.md"]
body_tr: |-
  # ato dili

  ato, elektronik devreleri tanımlamak için bir **deklaratif, kısıtlama tabanlı DSL**'dir. Kontrol akışı, mutasyon ve yürütme sırası yoktur — devre _ne olduğunu_ bildirirsiniz ve derleyici + çözücü bunu geçerli bir tasarıma dönüştürür.

  ## Hızlı Başlangıç

  Minimal, tam bir `.ato` dosyası:

  ```ato
  #pragma experiment("BRIDGE_CONNECT")

  import Resistor
  import ElectricPower
  import Capacitor

  module PowerFilter:
      """A simple decoupled power input with a pull-down resistor."""
      power = new ElectricPower
      decoupling_capacitor = new Capacitor
      pulldown_resistor = new Resistor

      power.hv ~> decoupling_capacitor ~> power.lv
      power.hv ~> pulldown_resistor ~> power.lv

      decoupling_capacitor.capacitance = 100nF +/- 20%
      pulldown_resistor.resistance = 100kohm +/- 5%
      assert power.voltage within 3.0V to 3.6V
  ```

  Paket dizininden `ato build` ile doğrulayın.

  ## Temel Kavramlar

  ### 1. Her Şey Grafta Bir Node

  Her varlık (bir direnç, bir güç reli, bir I2C veri yolu, bir gerilim parametresi) yazılı bir grafta bir **node**'dur. Node'lar birbirine **kenarlar** aracılığıyla ilişkilenir: bileşim (üst–alt), bağlantı (aynı net) ve özellikler (davranışsal metadata). `.ato` dili, bu grafı deklaratif olarak oluşturmak için bir yüzey sözdizimidir.

  ### 2. Üç Blok Türü

  ato'nun yeni bir tür tanımlamak için tam olarak üç yolu vardır:

  | Anahtar Kelime | Semantik                                           | Tipik Kullanım              |
  | -------------- | -------------------------------------------------- | --------------------------- |
  | `module`       | Alt öğeler ve bağlantılar içeren bir tasarım birimi | Devre blokları, alt sistemler |
  | `interface`    | `~` ile bağlanabilir bir sınır; kablolu hale getirilebilir | Veri yolları, güç raileri, sinyaller |
  | `component`    | Footprint/sembol olan fiziksel bir parça          | Satıcı IC'leri, konektörler |

  Üçü de graf node'larına derlenir. Ayrım, derleyicinin hangi **özellikleri** eklediğini (`is_module`, `is_interface`) ve hangi işlemlerin yasal olduğunu kontrol eder (kural olarak, interface'ler `~` işaretinin her iki tarafında da görünür).

  Miras, `from` kullanır:

  ```ato
  module MyRegulator from Regulator:
      pass
  ```

  ### 3. Bileşim — Alt Öğeler ve Örnekleme

  Türler alt öğeler içerir. Bir blok gövdesi içinde, `new` bir alt öğeyi örnekler:

  ```ato
  module Board:
      power = new ElectricPower      # interface alt öğesi
      sensor = new BME280            # module alt öğesi
      caps = new Capacitor[4]        # 4 kondansatörün dizisi
  ```

  Alt öğelere **nokta-gösterimi** ile erişilir: `sensor.power.voltage`, `caps[0].capacitance`.

  ### 4. Bağlantı — Elektriksel Kimlik Bildirme

  **Kablo operatörü `~`** iki interface'in _aynı net/veri yolu_ olduğunu bildirir. Çift yönlüdür ve eşleşen türler gerektirir:

  ```ato
  power_3v3 ~ sensor.power          # ElectricPower ~ ElectricPower
  i2c_bus ~ sensor.i2c              # I2C ~ I2C
  ```

  **Köprü operatörü `~>`** (`#pragma experiment("BRIDGE_CONNECT")` gerekli) seriye bir bileşen ekler. Bileşen, giriş/çıkış eşlemesini tanımlayan `can_bridge` özelliğini taşımalıdır:

  ```ato
  power_5v ~> regulator ~> power_3v3
  i2c.scl.line ~> pullup ~> power.hv
  ```

  ### 5. Kısıtlamalar — Fiziksel Büyüklükler ve İddialar

  ato'daki değerler **birim** ve **tolerans** taşır. Çözücü, gerçek parçaları seçmek için bunları kullanır.

  **Atama** bir parametre için bir değeri bağlar:

  ```ato
  power.voltage = 3.3V +/- 5%
  resistor.resistance = 10kohm +/- 10%
  i2c.frequency = 400kHz
  i2c.address = 0x48
  ```

  **İddıalar** çözücünün karşılaması gereken kısıtlamaları bildirir:

  ```ato
  assert power.voltage within 3.0V to 3.6V
  assert i2c.frequency <= 400kHz
  assert sensor.i2c.address is 0x50
  ```

  Üç değer formu vardır:

  - **Tam**: `3.3V`
  - **Bilateral tolerans**: `10kohm +/- 5%`
  - **Sınırlı aralık**: `3.0V to 3.6V`

  ### 6. Özellikler — Davranışsal Metadata

  Özellikler node'lara yetenekler veya metadata ekler. Bunlar alt öğeler değildir — grafta özellik kenarlarını kullanırlar.

  ```ato
  #pragma experiment("TRAITS")

  import has_part_removed
  import is_atomic_part

  module Placeholder:
      trait has_part_removed          # fiziksel olmayan yer tutucu olarak işaretleyin
      trait is_atomic_part            # footprint'i olan kullanıcı tanımlı parça
  ```

  Temel yerleşik özellikler:

  | Özellik                 | Etki                                                     |
  | ----------------------- | -------------------------------------------------------- |
  | `can_bridge`            | `~>` operatörüyle kullanımı etkinleştirir (giriş/çıkış pin eşlemesini tanımlar) |
  | `has_part_removed`      | Fiziksel parça yerleştirilmez (sembolik node)           |
  | `is_atomic_part`        | `manufacturer`, `partnumber`, `footprint` ile kullanıcı tanımlı parça |
  | `has_datasheet`         | Bir teknik datasheet referansı ekler                    |
  | `has_designator_prefix` | PCB belirteci (R, C, U, vb.) ayarlar                    |

  ### 7. İthalatçı Sistemi

  **Basit ithalatlar** standart kütüphane türlerine çözümlenir (ithalatçı başına 1 satır):

  ```ato
  import ElectricPower
  import I2C
  import Resistor
  ```

  **Yol ithalatları** diğer `.ato` dosyalarında tanımlanan türlere çözümlenir (ithalatçı başına 1 satır):

  ```ato
  from "atopile/vendor-part/vendor-part.ato" import Vendor_Part
  ```

  ### 8. Pragma Özellik Bayrakları

  Deneysel sözdizimi pragmalar tarafından kapısız tutulur (dosya üstü, ithalatlardan önce):

  ```ato
  #pragma experiment("BRIDGE_CONNECT")     # ~> operatörü
  #pragma experiment("FOR_LOOP")           # for döngüleri
  #pragma experiment("TRAITS")             # trait anahtar kelimesi
  #pragma experiment("MODULE_TEMPLATING")  # new Foo<p=v>
  #pragma experiment("INSTANCE_TRAITS")    # örnekler üzerindeki özellikler
  ```

  Kapılı sözdizimini pragma olmadan kullanmak derleme hatasıdır.

  ## İfade Referansı

  Bir blok gövdesi içindeki her ifade şu ifadelerden birdir:

  | İfade   | Sözdizim                            | Amaç                                   |
  | ------- | ----------------------------------- | -------------------------------------- |
  | `assign`  | `name = value` veya `name = new Type` | Bir değeri bağla veya bir alt öğeyi örnekle |
  | `connect` | `a ~ b`                             | İki interface'i birbirine kablola      |
  | `bridge`  | `a ~> b ~> c`                       | Köprülenebilir bileşenleri seriye ekle |
  | `assert`  | `assert expr <op> expr`             | Bir kısıtlama bildirin                 |
  | `retype`  | `name -> NewType`                   | Devralınan alt öğenin türünü değiştir |
  | `pin`     | `pin VCC`                           | Fiziksel bir pin bildirin              |
  | `signal`  | `signal reset`                      | Elektriksel bir sinyal bildirin        |
  | `trait`   | `trait TraitName`                   | Bir özellik ekle                       |
  | `import`  | `import Type`                       | Bir türü içe aktar                     |
  | `for`     | `for x in arr:`                     | Bir dizi üzerinde yineleme (pragma-kapılı) |
  | `string`  | `"""..."""`                         | Dokumentasyon dizesi                   |
  | `pass`    | `pass`                              | Boş yer tutucu                         |

  Bir blok içindeki ifadeler **sıradan bağımsızdır** — derleyici ifadelerin tam grafını çözer, bir işlem dizisini değil.

  ## Tür Sistemi

  ### Interface'ler (`~` veya `~>` ile bağlanabilir)

  | Tür                                                           | Alt Öğeler / Parametreler                                    | Amaç                             |
  | ------------------------------------------------------------- | -------------------------------------------------------- | -------------------------------- |
  | `Electrical`                                                  | _(tek node)_                                          | Ham elektriksel bağlantı noktası |
  | `ElectricPower`                                               | `.hv`, `.lv` (Electrical); `.voltage`, `.max_current`    | Güç raileri                      |
  | `ElectricLogic`                                               | `.line` (Electrical), `.reference` (ElectricPower)       | Gerilim bağlamında dijital sinyaller |
  | `ElectricSignal`                                              | `.line` (Electrical), `.reference` (ElectricPower)       | Analog sinyaller                 |
  | `I2C`                                                         | `.scl`, `.sda` (ElectricLogic); `.frequency`, `.address` | I2C veri yolu                    |
  | `SPI`                                                         | `.sclk`, `.mosi`, `.miso` (ElectricLogic); `.frequency`  | SPI veri yolu                    |
  | `UART` / `UART_Base`                                          | `.tx`, `.rx` (ElectricLogic); flow control hatları       | Seri iletişim                    |
  | `I2S`                                                         | dijital ses veri yolu hatları                            | Dijital ses                      |
  | `DifferentialPair`                                            | `.p`, `.n`                                               | Diferansiyel sinyaller           |
  | `USB2_0` / `USB3` / `USB2_0_IF`                               | USB verisi + gücü                                        | USB arayüzleri                   |
  | `CAN_TTL`                                                     | CAN veri yolu hatları                                    | CAN veri yolu                    |
  | `SWD` / `JTAG`                                                | debug hatları                                            | Hata ayıklama arayüzleri         |
  | `Ethernet` / `HDMI` / `RS232` / `PDM` / `XtalIF` / `MultiSPI` | protokole özgü                                           | Diğer protokoller                |

  ### Modüller (`new` ile örneklenebilir)

  | Tür                                 | Alt Öğeler / Parametreler                                                                  | Belirteci |
  | ----------------------------------- | -------------------------------------------------------------------------------------- | --------- |
  | `Resistor`                          | `.unnamed[0..1]`; `.resistance`, `.max_power`                                          | R         |
  | `Capacitor`                         | `.unnamed[0..1]`, `.power`; `.capacitance`, `.max_voltage`, `.temperature_coefficient` | C         |
  | `CapacitorPolarized`                | Kapasitörün polarize türü                                                              | C         |
  | `Inductor`                          | `.unnamed[0..1]`; `.inductance`                                                        | L         |
  | `Fuse`                              | `.unnamed[0..1]`; `.trip_current`, `.fuse_type`                                        | F         |
  | `Diode`                             | `.anode`, `.cathode`; `.forward_voltage`, `.current`                                   | D         |
  | `LED`                               | `.diode`; `.brightness`, `.color`                                                      | D         |
  | `MOSFET`                            | `.source`, `.gate`, `.drain`; `.channel_type`, `.gate_source_threshold_voltage`        | Q         |
  | `BJT`                               | `.emitter`, `.base`, `.collector`; `.doping_type`                                      | Q         |
  | `Regulator` / `AdjustableRegulator` | `.power_in`, `.power_out`                                                              | —         |
  | `Crystal`                           | `.unnamed[0..1]`, `.gnd`; `.frequency`, `.load_capacitance`                            | XTAL      |
  | `Crystal_Oscillator`                | osilatör modülü                                                                        | —         |
  | `ResistorVoltageDivider`            | gerilim bölücü devresi                                                                 | —         |
  | `FilterElectricalRC`                | RC filtresi                                                                            | —         |
  | `Net`                               | `.part_of` (Electrical)                                                                | —         |
  | `TestPoint`                         | `.contact`; `.pad_size`, `.pad_type`                                                   | TP        |
  | `MountingHole` / `NetTie`           | mekanik                                                                                | —         |
  | `SPIFlash`                          | SPI flash belleği                                                                      | —         |

  ### Özellikler (`trait` ile eklenebilir)

  `has_part_removed`, `is_atomic_part`, `can_bridge`, `can_bridge_by_name`, `has_datasheet`, `has_designator_prefix`, `has_doc_string`, `has_net_name_affix`, `has_net_name_suggestion`, `has_package_requirements`, `has_single_electric_reference`, `is_auto_generated`, `requires_external_usage`

  ## Birimler ve Literals

  **SI-önekli birimler**: `V`, `mV` | `A`, `mA` | `ohm`, `kohm`, `Mohm` | `F`, `uF`, `nF`, `pF` | `Hz`, `kHz`, `MHz`, `GHz` | `s`, `ms` | `W`, `mW`

  **Sayı biçimleri**: ondalık (`3.3`), bilimsel (`1e-6`), onaltılık (`0x48`), ikili (`0b1010`), alt çizgi ayrılmış (`1_000_000`)

  **Booleyanlar**: `True`, `False`

  ## Değişmezler

  1. **Tür-güvenli bağlantılar**: `~` ve `~>` eşleşen interface türlerini bağlamalıdır. `ElectricPower ~ I2C` bir tür uyuşmazlığıdır (zorlama güçlendirilmektedir).
  2. **Pragma kapılı sözdizim**: `~>`, `for`, `trait` veya `<>` kullanmak pragma olmadan derleme hatasıdır.
  3. **Pasifler üzerinde toleranslar**: `resistance = 10kohm` (sıfır tolerans) gerçek parçalara uymaz. Her zaman `+/- N%` kullanın.
  4. **ElectricLogic bir referans gerektirir**: mantık sinyalleri gerilim bağlamı için bir güç referansı gerektirir. `signal.reference ~ power_rail` ayarlayın.
  5. **Sıradan bağımsızlık**: bir blok içindeki ifadeler sırayla yürütülmez. Çözücü tam grafiği çözer.
  6. **Prosedürel mantık yok**: `if`, `while`, `return`, fonksiyon, sınıf veya istisna yok.
---

# The ato language

ato is a **declarative, constraint-based DSL** for describing electronic circuits. There is no control flow, no mutation, and no execution order — you declare _what_ a circuit is, and the compiler + solver resolve it into a valid design.

## Quick Start

A minimal complete `.ato` file:

```ato
#pragma experiment("BRIDGE_CONNECT")

import Resistor
import ElectricPower
import Capacitor

module PowerFilter:
    """A simple decoupled power input with a pull-down resistor."""
    power = new ElectricPower
    decoupling_capacitor = new Capacitor
    pulldown_resistor = new Resistor

    power.hv ~> decoupling_capacitor ~> power.lv
    power.hv ~> pulldown_resistor ~> power.lv

    decoupling_capacitor.capacitance = 100nF +/- 20%
    pulldown_resistor.resistance = 100kohm +/- 5%
    assert power.voltage within 3.0V to 3.6V
```

Validate with `ato build` from the package directory.

## Core Concepts

### 1. Everything is a Node in a Graph

Every entity (a resistor, a power rail, an I2C bus, a voltage parameter) is a **node** in a typed graph. Nodes relate to each other through **edges**: composition (parent–child), connection (same-net), and traits (behavioral metadata). The `.ato` language is a surface syntax for constructing this graph declaratively.

### 2. Three Block Types

ato has exactly three ways to define a new type:

| Keyword     | Semantics                                            | Typical Use                 |
| ----------- | ---------------------------------------------------- | --------------------------- |
| `module`    | A design unit that contains children and connections | Circuit blocks, subsystems  |
| `interface` | A connectable boundary; can be wired with `~`        | Buses, power rails, signals |
| `component` | A physical part with footprint/symbol                | Vendor ICs, connectors      |

All three compile to graph nodes. The distinction controls which **traits** the compiler attaches (`is_module`, `is_interface`) and what operations are legal (by convention, interfaces appear on both sides of `~`).

Inheritance uses `from`:

```ato
module MyRegulator from Regulator:
    pass
```

### 3. Composition — Children and Instantiation

Types contain children. Inside a block body, `new` instantiates a child:

```ato
module Board:
    power = new ElectricPower      # interface child
    sensor = new BME280            # module child
    caps = new Capacitor[4]        # array of 4 capacitors
```

Children are accessed via **dot-notation**: `sensor.power.voltage`, `caps[0].capacitance`.

### 4. Connection — Declaring Electrical Identity

The **wire operator `~`** declares that two interfaces _are the same net/bus_. It is bidirectional and requires matching types:

```ato
power_3v3 ~ sensor.power          # ElectricPower ~ ElectricPower
i2c_bus ~ sensor.i2c              # I2C ~ I2C
```

The **bridge operator `~>`** (requires `#pragma experiment("BRIDGE_CONNECT")`) inserts a component in series. The component must carry the `can_bridge` trait which defines its in/out mapping:

```ato
power_5v ~> regulator ~> power_3v3
i2c.scl.line ~> pullup ~> power.hv
```

### 5. Constraints — Physical Quantities and Assertions

Values in ato carry **units** and **tolerances**. The solver uses these to select real parts.

**Assignment** binds a value to a parameter:

```ato
power.voltage = 3.3V +/- 5%
resistor.resistance = 10kohm +/- 10%
i2c.frequency = 400kHz
i2c.address = 0x48
```

**Assertions** declare constraints the solver must satisfy:

```ato
assert power.voltage within 3.0V to 3.6V
assert i2c.frequency <= 400kHz
assert sensor.i2c.address is 0x50
```

Three value forms exist:

- **Exact**: `3.3V`
- **Bilateral tolerance**: `10kohm +/- 5%`
- **Bounded range**: `3.0V to 3.6V`

### 6. Traits — Behavioral Metadata

Traits attach capabilities or metadata to nodes. They are not children — they use trait edges in the graph.

```ato
#pragma experiment("TRAITS")

import has_part_removed
import is_atomic_part

module Placeholder:
    trait has_part_removed          # mark as non-physical placeholder
    trait is_atomic_part            # user-defined part with footprint
```

Key built-in traits:

| Trait                   | Effect                                                           |
| ----------------------- | ---------------------------------------------------------------- |
| `can_bridge`            | Enables use with `~>` operator (defines in/out pin mapping)      |
| `has_part_removed`      | No physical part placed (symbolic node)                          |
| `is_atomic_part`        | User-defined part with `manufacturer`, `partnumber`, `footprint` |
| `has_datasheet`         | Attaches a datasheet reference                                   |
| `has_designator_prefix` | Sets PCB designator (R, C, U, etc.)                              |

### 7. Import System

**Bare imports** resolve to standard library types (1 line per import):

```ato
import ElectricPower
import I2C
import Resistor
```

**Path imports** resolve to types defined in other `.ato` files (1 line per import):

```ato
from "atopile/vendor-part/vendor-part.ato" import Vendor_Part
```

### 8. Pragma Feature Flags

Experimental syntax is gated behind pragmas (file top, before imports):

```ato
#pragma experiment("BRIDGE_CONNECT")     # ~> operator
#pragma experiment("FOR_LOOP")           # for loops
#pragma experiment("TRAITS")             # trait keyword
#pragma experiment("MODULE_TEMPLATING")  # new Foo<p=v>
#pragma experiment("INSTANCE_TRAITS")    # traits on instances
```

Using gated syntax without the pragma is a compile error.

## Statement Reference

Every statement inside a block body is one of:

| Statement | Syntax                              | Purpose                                |
| --------- | ----------------------------------- | -------------------------------------- |
| `assign`  | `name = value` or `name = new Type` | Bind a value or instantiate a child    |
| `connect` | `a ~ b`                             | Wire two interfaces together           |
| `bridge`  | `a ~> b ~> c`                       | Insert bridgeable components in series |
| `assert`  | `assert expr <op> expr`             | Declare a constraint                   |
| `retype`  | `name -> NewType`                   | Replace an inherited child's type      |
| `pin`     | `pin VCC`                           | Declare a physical pin                 |
| `signal`  | `signal reset`                      | Declare an electrical signal           |
| `trait`   | `trait TraitName`                   | Attach a trait                         |
| `import`  | `import Type`                       | Import a type                          |
| `for`     | `for x in arr:`                     | Iterate over an array (pragma-gated)   |
| `string`  | `"""..."""`                         | Documentation string                   |
| `pass`    | `pass`                              | Empty placeholder                      |

Statements within a block are **order-independent** — the compiler resolves the full graph, not a sequence of operations.

## Type System

### Interfaces (connectable with `~` or `~>`)

| Type                                                          | Children / Parameters                                    | Purpose                              |
| ------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------ |
| `Electrical`                                                  | _(single node)_                                          | Raw electrical connection point      |
| `ElectricPower`                                               | `.hv`, `.lv` (Electrical); `.voltage`, `.max_current`    | Power rails                          |
| `ElectricLogic`                                               | `.line` (Electrical), `.reference` (ElectricPower)       | Digital signals with voltage context |
| `ElectricSignal`                                              | `.line` (Electrical), `.reference` (ElectricPower)       | Analog signals                       |
| `I2C`                                                         | `.scl`, `.sda` (ElectricLogic); `.frequency`, `.address` | I2C bus                              |
| `SPI`                                                         | `.sclk`, `.mosi`, `.miso` (ElectricLogic); `.frequency`  | SPI bus                              |
| `UART` / `UART_Base`                                          | `.tx`, `.rx` (ElectricLogic); flow control lines         | Serial                               |
| `I2S`                                                         | audio data bus lines                                     | Digital audio                        |
| `DifferentialPair`                                            | `.p`, `.n`                                               | Differential signals                 |
| `USB2_0` / `USB3` / `USB2_0_IF`                               | USB data + power                                         | USB interfaces                       |
| `CAN_TTL`                                                     | CAN bus lines                                            | CAN bus                              |
| `SWD` / `JTAG`                                                | debug lines                                              | Debug interfaces                     |
| `Ethernet` / `HDMI` / `RS232` / `PDM` / `XtalIF` / `MultiSPI` | protocol-specific                                        | Other protocols                      |

### Modules (instantiable with `new`)

| Type                                | Children / Parameters                                                                  | Designator |
| ----------------------------------- | -------------------------------------------------------------------------------------- | ---------- |
| `Resistor`                          | `.unnamed[0..1]`; `.resistance`, `.max_power`                                          | R          |
| `Capacitor`                         | `.unnamed[0..1]`, `.power`; `.capacitance`, `.max_voltage`, `.temperature_coefficient` | C          |
| `CapacitorPolarized`                | polarized variant of Capacitor                                                         | C          |
| `Inductor`                          | `.unnamed[0..1]`; `.inductance`                                                        | L          |
| `Fuse`                              | `.unnamed[0..1]`; `.trip_current`, `.fuse_type`                                        | F          |
| `Diode`                             | `.anode`, `.cathode`; `.forward_voltage`, `.current`                                   | D          |
| `LED`                               | `.diode`; `.brightness`, `.color`                                                      | D          |
| `MOSFET`                            | `.source`, `.gate`, `.drain`; `.channel_type`, `.gate_source_threshold_voltage`        | Q          |
| `BJT`                               | `.emitter`, `.base`, `.collector`; `.doping_type`                                      | Q          |
| `Regulator` / `AdjustableRegulator` | `.power_in`, `.power_out`                                                              | —          |
| `Crystal`                           | `.unnamed[0..1]`, `.gnd`; `.frequency`, `.load_capacitance`                            | XTAL       |
| `Crystal_Oscillator`                | oscillator module                                                                      | —          |
| `ResistorVoltageDivider`            | voltage divider circuit                                                                | —          |
| `FilterElectricalRC`                | RC filter                                                                              | —          |
| `Net`                               | `.part_of` (Electrical)                                                                | —          |
| `TestPoint`                         | `.contact`; `.pad_size`, `.pad_type`                                                   | TP         |
| `MountingHole` / `NetTie`           | mechanical                                                                             | —          |
| `SPIFlash`                          | SPI flash memory                                                                       | —          |

### Traits (attachable with `trait`)

`has_part_removed`, `is_atomic_part`, `can_bridge`, `can_bridge_by_name`, `has_datasheet`, `has_designator_prefix`, `has_doc_string`, `has_net_name_affix`, `has_net_name_suggestion`, `has_package_requirements`, `has_single_electric_reference`, `is_auto_generated`, `requires_external_usage`

## Units and Literals

**SI-prefixed units**: `V`, `mV` | `A`, `mA` | `ohm`, `kohm`, `Mohm` | `F`, `uF`, `nF`, `pF` | `Hz`, `kHz`, `MHz`, `GHz` | `s`, `ms` | `W`, `mW`

**Number formats**: decimal (`3.3`), scientific (`1e-6`), hex (`0x48`), binary (`0b1010`), underscore-separated (`1_000_000`)

**Booleans**: `True`, `False`

## Invariants

1. **Type-safe connections**: `~` and `~>` should connect matching interface types. `ElectricPower ~ I2C` is a type mismatch (enforcement is being strengthened).
2. **Pragma gates syntax**: using `~>`, `for`, `trait`, or `<>` without the matching pragma is a compile error.
3. **Tolerances on passives**: `resistance = 10kohm` (zero tolerance) matches no real parts. Always use `+/- N%`.
4. **ElectricLogic needs a reference**: logic signals require a power reference for voltage context. Set `signal.reference ~ power_rail`.
5. **Order independence**: statements within a block are not sequentially executed. The solver resolves the full graph.
6. **No procedural logic**: no `if`, `while`, `return`, functions, classes, or exceptions.
