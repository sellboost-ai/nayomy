---
name: "planning"
description_en: "Spec-driven planning for complex design tasks: when to plan, how to write specs as .ato files, and how to verify against requirements."
description_tr: "Karmaşık tasarım görevleri için spec odaklı planlama: ne zaman plan yapacağınız, .ato dosyaları olarak spec yazma yöntemleri ve gereksinimlere karşı doğrulama."
category: "Design"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/planning/SKILL.md"
path: ".claude/skills/planning/SKILL.md"
is_collection: false
body_length: 15629
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Ne Zaman Plan Yapılmalı

  **Basit görevler — hemen yapılsın:**
  - Tek bileşen ekle/kaldır/değiştir, değer değişikliği, yeniden adlandırma
  - Kod veya tasarımı oku/açıkla
  - Belirli bir derleme hatasını düzelt
  - Tek bir açık aksiyonu olan herhangi bir görev

  **Karmaşık görevler — her zaman önce plan yapılsın:**
  - Multi-bileşen sistem tasarımı (2+ IC etkileşim halinde)
  - Yeni board veya alt sistem sıfırdan
  - Belirsiz veya fonksiyon seviyesinde gereksinimler ("Motor sürücüsü gerekli", "bana sensor board tasarımla")
  - Birden çok mimari karar almanız gereken görevler

  **Plan yapılıp yapılmayacağı sorma.** Karmaşık görevler için doğrudan planlamaya geç. Spesifikasyonu yaz, kontrol listesini oluştur, `design_questions` çağır — tümü bir turda. Kullanıcı spesifikasyonu ve soruları görür, oradan yönlendirebilir. Bu, plan yapılıp yapılmayacağı hakkında gidiş geliş yapmaktan daha hızlıdır.

  # Spesifikasyon TASARIM'dır

  Spesifikasyon ve tasarım **aynı** `.ato` dosyasıdır. Spesifikasyon sadece tasarımın yüksek abstraksiyon seviyesindedir — iskelet modüller, arabirimler, kısıtlamalar ve gereksinimler. Uygularken, gerçek bileşenleri, pin eşleştirmelerini ve değerleri doldurursunuz. Dosya büyür; yapı kalır.

  **Ayrı spesifikasyon dosyaları oluşturma.** Ana `.ato` dosyası spesifikasyondur.

  **Modül adlarına "Spec" soneki ekleme.** `PowerSupply`, `PowerSupplySpec` değil. Bu adlar nihai tasarıma devam eder — onları ne oldukları için adlandırın, spec olarak başladıkları gerçeği için değil. **ato** skill §1.9'daki adlandırma rehberini gör.

  # Proje Yapısı

  IC'leri olan her proje bu yapıyı izleyin. **IC wrapper paketleri ana tasarımdan ayrılmış.**

  ```
  my-project/
  ├── ato.yaml                        # Proje seviyesi derlemeler burada tanımlanır
  ├── main.ato                        # Üst seviye tasarım — paketleri içe aktar, ham parçaları değil
  ├── packages/
  │   ├── stm32g474/
  │   │   └── stm32g474.ato           # Wrapper: ham pinler → standart arabirimler
  │   ├── drv8317/
  │   │   └── drv8317.ato
  │   └── tcan3414/
  │       └── tcan3414.ato
  ├── parts/                          # Tüm ham parçalar (IC'ler + konnektörler)
  │   ├── STMicroelectronics_STM32G474CBT6/
  │   ├── TEXAS_INSTRUMENTS_DRV8317HREER/
  │   ├── Changzhou_Amass_Elec_XT30U_M/
  │   └── ...
  └── layouts/
  ```

  ## Ne nereye gider

  | Öğe | Konum | Neden |
  |------|----------|-----|
  | IC wrapper modülleri | `packages/<name>/<name>.ato` | Karmaşık pin eşleştirmesi, yeniden kullanılabilir |
  | Tüm ham parçalar | `parts/` (proje kökü) | `parts_install` tarafından kurulu |
  | Basit bağımsız parçalar | Doğrudan `main.ato`'da kullanılır | Destekleyici bileşenlere veya üst seviye arabirime ihtiyaç yok (ör. konnektörler, LED'ler, test noktaları) |
  | Genel pasif elemanlar | stdlib (`import Resistor`) | Paket gerekli değil |
  | Üst seviye tasarım | `main.ato` | Wrapperları içe aktar, ham `_package` hiç değil |

  ## Anahtar kurallar

  - **IC'ler her zaman wrapper paketleri alır** — MCU, kapı sürücüsü, alıcı-verici, karmaşık pin eşleştirmesi olan herhangi bir şey
  - **Wrapper modülleri standart arabirimler ortaya çıkarır** — `ElectricPower`, `I2C`, `SPI`, `CAN`, `UART`, `SWD`, `USB2_0`, `USB2_0_IF`, `ElectricLogic`, `ElectricSignal`, ham pinler değil
  - **Yeni arabirim tanımlamadan önce stdlib kontrol et** — stdlib zaten doğru arabirime sahipse, veya sınır stdlib arabirimlerinin dizileri/bileşimleri olarak modellenebilirse, proje-yerel arabirim icat etmek yerine bunu kullan
  - **Wrapper paketleri geneldir** — paket sınırları, bir panelin tam alt sistem ayrışması veya rol adlandırması değil, çip yeteneğini yansıtmalıdır
  - **Bağımsız parçalar wrapperlarına ihtiyaç duymaz** — destekleyici bileşenlere ihtiyacı olmayan ve üst seviye arabirimler açığa çıkarmayan herhangi bir şey (konnektörler, LED'ler, test noktaları, montaj delikleri)
  - **Paket dizinlerinde `ato.yaml` yok** — paket hedefleri otomatik olarak keşfedilir
  - **Üst seviye `ato.yaml`'a elle paket wrapper derleme hedefleri ekleme** — yerel paketler tarafından açığa çıkarılan paket hedeflerini keşfetmek için `workspace_list_targets` kullan

  ## `ato.yaml` formatı

  ```yaml
  requires-atopile: ^0.14.0

  paths:
    src: ./
    layout: ./layouts

  builds:
    default:
      entry: main.ato:DualBLDCController

    # Paket derlemeleri — bağımsız test için
    stm32g474:
      entry: packages/stm32g474/stm32g474.ato:STM32G474
      hide_designators: true
    drv8317:
      entry: packages/drv8317/drv8317.ato:DRV8317
      hide_designators: true
  ```

  ## Paket wrapper deseni

  ```ato
  #pragma experiment("BRIDGE_CONNECT")

  import ElectricPower
  import CAN
  import ElectricLogic
  import Capacitor

  from "parts/STMicroelectronics_STM32G474CBT6/STMicroelectronics_STM32G474CBT6.ato" import STMicroelectronics_STM32G474CBT6_package

  module STM32G474:
      """Ayıklamalar ve standart arabirimlerle STM32G474 MCU.

      Ortaya çıkarır:
      - power: 3.3V raylı
      - can: CAN FD arabirimi (PA11/PA12)
      - pwm_a: Motor A için 3x PWM (TIM1: PA8/PA9/PA10)
      - pwm_b: Motor B için 3x PWM (TIM8: PB13/PB14/PB15)
      """

      # ── Dış arabirimler ──
      power = new ElectricPower
      can = new CAN
      pwm_a = new ElectricLogic[3]
      pwm_b = new ElectricLogic[3]

      # ── Paket ──
      package = new STMicroelectronics_STM32G474CBT6_package

      # ── Güç ──
      power.hv ~ package.VDD
      power.hv ~ package.VDDA
      power.lv ~ package.VSS
      power.lv ~ package.VSSA
      assert power.voltage within 3.3V +/- 10%

      # ── Ayıklama ──
      decoupling = new Capacitor[3]
      for cap in decoupling:
          cap.capacitance = 100nF +/- 10%
          cap.package = "C0402"
          power ~> cap ~> power.lv

      # ── CAN ──
      can.tx.line ~ package.PA11
      can.rx.line ~ package.PA12
      can.tx.reference ~ power
      can.rx.reference ~ power

      # ── PWM ──
      pwm_a[0].line ~ package.PA8
      pwm_a[1].line ~ package.PA9
      pwm_a[2].line ~ package.PA10
      pwm_b[0].line ~ package.PB13
      pwm_b[1].line ~ package.PB14
      pwm_b[2].line ~ package.PB15
  ```

  ## Temiz `main.ato`

  ```ato
  #pragma experiment("BRIDGE_CONNECT")

  import ElectricPower

  from "packages/stm32g474/stm32g474.ato" import STM32G474
  from "packages/drv8317/drv8317.ato" import DRV8317
  from "packages/tcan3414/tcan3414.ato" import TCAN3414
  from "parts/Changzhou_Amass_Elec_XT30U_M/Changzhou_Amass_Elec_XT30U_M.ato" import Changzhou_Amass_Elec_XT30U_M_package

  module DualBLDCController:
      """Robot drivetrain için çift BLDC motor sürücü."""

      mcu = new STM32G474
      motor_a = new DRV8317
      motor_b = new DRV8317
      can_phy = new TCAN3414

      power = new ElectricPower
      power ~ mcu.power
      power ~ motor_a.motor_supply
      power ~ motor_b.motor_supply

      mcu.can ~ can_phy.can
      mcu.pwm_a ~ motor_a.pwm
      mcu.pwm_b ~ motor_b.pwm
  ```

  `packages/<name>/<name>.ato` dosyası o parça veya alt sistem için kanonik wrapper sınırıdır.
  O dosyayı yerinde iyileştir. `main.ato` bu wrapper paketlerini doğrudan içe aktar, ekstra wrapper toplayıcı dosyasından değil.

  # Docstringlerinde Gereksinimler

  Doğal dil gereksinimlerini doğrudan modülün docstringine bir `Requirements:` bölümü altına kaydet. Gereksinimleri onlardan sorumlu olan modüle koy — sistem genelinde gereksinimler için üst seviye, modüle özgü olanlar için belirli alt sistem.

  ```ato
  module PowerStage:
      """Sürekli motor akımı için boyutlandırılan üç fazlı MOSFET köprüsü.

      Requirements:
      - R1: 20A sürekli — FET aşaması termal kenar boşluğu ile 20A için derecelendir
      """
  ```

  Format: `- R<id>: <kısa metin> — <kriterler>`

  Bu gereksinimler tasarımda kalıcı kalır. Uygulama yanında tasarım amacını belgelemektedir.

  # Spesifikasyon Formatı

  Spesifikasyon tasarımın iskelidir. Mimariyi, gereksinimleri ve kısıtlamaları tanımlar — ama uygulama detaylarını (pin eşleştirmeler, destek devreleri) bırakır. Bunlar uygulama sırasında doldurulur.

  ```ato
  #pragma experiment("BRIDGE_CONNECT")

  import ElectricPower
  import CAN
  import ElectricLogic

  module BLDCController:
      """
      # BLDC Motor Sürücü

      STM32G474 ve iki DRV8317 sürücü kullanan çift-motor BLDC sürücü.

      ## Anahtar Kararlar
      - STM32G474 MCU — motor kontrol zamanlayıcıları + CAN FD
      - DRV8317 kapı sürücü — 3-fazlı, entegre LDO

      ## Gereksinimler
      - R1: MCU platformu — STM32G474 kullanır
      - R2: 5-18V giriş — İşletme voltaj aralığı
      - R3: Çift motor — 2x DRV8317 3-PWM modunda

      ## Açık Sorular
      - Akım algılama: faz şunt vs düşük-yan?
      """

      # ── Mimari ──
      power = new PowerSupply
      control = new MCU
      motor_a = new MotorDrive
      motor_b = new MotorDrive
      comms = new CANTransceiver

      power.rail_3v3 ~ control.power
      power.motor_supply ~ motor_a.supply
      power.motor_supply ~ motor_b.supply
      control.pwm_a ~ motor_a.pwm
      control.pwm_b ~ motor_b.pwm
      control.can ~ comms.can

      assert power.vin.voltage within 5V to 18V

  module PowerSupply:
      """Güç giriş ve regülasyon."""
      vin = new ElectricPower
      rail_3v3 = new ElectricPower
      motor_supply = new ElectricPower

  module MCU:
      """Zamanlayıcılar ve haberleşme çevre birimleriyle STM32G474."""
      power = new ElectricPower
      can = new CAN
      pwm_a = new ElectricLogic[3]
      pwm_b = new ElectricLogic[3]

  module MotorDrive:
      """DRV8317 3-fazlı kapı sürücü."""
      supply = new ElectricPower
      pwm = new ElectricLogic[3]

  module CANTransceiver:
      """UAVCAN konnektörlü CAN FD alıcı-verici.

      Requirements:
      - R4: UAVCAN konnektörlü CAN FD alıcı-verici
      """
      can = new CAN
  ```

  ## Spesifikasyon kavramları ato'ya nasıl eşlenir

  | Spesifikasyon Kavramı | ato Mekanizması |
  |---|---|
  | **Genel bakış** | Modül docstring (`"""..."""`) |
  | **Mimari** | Alt modüller + bağlantılar (`~`) |
  | **Gereksinimler** | Modül docstring'inde `- R<id>: <metin> — <kriterler>` |
  | **Biçimsel kısıtlamalar** | `assert` ifadeleri |
  | **Bileşen seçimi** | `new` örneklemeleri |
  | **Alt sistem açıklamaları** | Çocuk modülü docstringları |
  | **Açık sorular** | Docstring'inde bölüm |

  # İlerleme Takibi İçin Kontrol Listesi

  Spesifikasyon oluştururken, uygulama ilerlemesini takip etmek için bir kontrol listesi de oluştur. Kontrol listesi öğelerini spesifikasyon gereksinimlerine bağla:

  ```
  checklist_create({
    items: [
      {id: "spec", description: "Spesifikasyon ve proje yapısını yaz", criteria: "Mimari ve proje seviyesi ato.yaml ile main.ato"},
      {id: "questions", description: "Tasarım kararlarını topla", criteria: "Tüm açık sorularla design_questions çağrıldı"},
      {id: "pkg-mcu", description: "MCU wrapper paketi oluştur", criteria: "Standart arabirimlerle packages/stm32g474/stm32g474.ato"},
      {id: "pkg-driver", description: "Kapı sürücü wrapper paketi oluştur", criteria: "Standart arabirimlerle packages/drv8317/drv8317.ato"},
      {id: "integrate", description: "Üst seviye tasarımı yükle", criteria: "main.ato paketleri arabirimler aracılığıyla bağlar"},
      {id: "build", description: "Derle ve doğrula", criteria: "Derleme geçer veya sorunlar açıkça tanımlanır"},
    ]
  })
  ```

  # Planlama Akışı

  Amaç **tüm soruları ve kararları önceden almanık**, sonra kesintisiz uygulamaktır.

  ## Faz 1: Spesifikasyon & Sorma (bu sonra turun sonla)

  Adımları 1-5 **tek turda** yap — adım duyururken turun sonlanma.

  1. **Oku** mevcut proje dosyalarını geçerli durumu anlamak için.
  2. **Proje yapısını kur** — proje seviyesi `ato.yaml` ve `packages/` dizinlerini oluştur. Üretilen yerel paketler için elle paket-wrapper derleme hedefleri ekleme.
  3. **Spesifikasyonu yaz** `main.ato` olarak — alt modüllerle mimari, docstringlerinde gereksinimler, arabirim bağlantıları ve biçimsel kısıtlamalar. Yerel arabirimler icat etmek yerine spesifikasyonda standart kütüphane arabirimlerini (CAN, I2C, SPI, SWD, USB2_0, ElectricPower, ElectricLogic, ElectricSignal) kullan; sadece stdlib tarafından kapsanmayan gerçek yeniden kullanılabilir bir sınır varsa.
  4. **Kontrol listesi oluştur** her bir paket wrapperı + entegrasyon + derleme için öğelerle.
  5. **`design_questions` çağır** TÜM açık sorularla birden. Önerilen seçenekler ve önerilen varsayılanları dahil et — kullanıcının hızlı cevap vermesini kolaylaştır. Turun sonlandırması bu çağrıdan sonra otomatik olarak gerçekleşir.

  Birden çok tasarım kararını toplamak için `design_questions`'ı herhangi bir zaman kullan. Kullanıcının cevapla veya serbest metin ile geçersiz kılabileceği madde işareti seçenekleri sunan yapılandırılmış soruları sunar. Sorguları birden çok tur arasında sızıştırma — tümünü bir `design_questions` çağrısına topla.

  ## Faz 2: Kararları kilitle (kısa)

  6. **Kullanıcı yanıtlarını bekle.** Tüm kararları spesifikasyona ve kontrol listesine tek bir geçişte dahil et.

  ## Faz 3: Uçtan uca uygula (durdurma)

  7. **Paket wrapperları oluştur** — IC başına bir. Parçaları kur, satıcı veri sayfaları/tasarım rehberlerini `web_search` ile incele, pinleri arabirimlerle eşle.
     - Tanımadığınız bir IC, motor sürücü, PMIC, RF parça veya diğer yüksek riskli parçaya geçmeden önce, satıcı veri sayfasını/tasarım rehberini incelemek, aileleri karşılaştırmak, tipik topolojiyi doğrulamak ve referans devre rehberliği bulmak için kısa bir `web_search` geçişi yapın.
     - Wrapperları projeler arasında yeniden kullanılabilir tutun. Genel çip yeteneklerini ortaya çıkarın ve panele özgü gruplama ve rol adlandırmasını `main.ato` veya wrapperın üstündeki proje modüllerinde tutun.
     - Her wrapperı paket hedefini doğrulamak ve tasarımı entegre etmek için gereken minimum standart arabirimlerle temel yeniden kullanılabilir bir sınır olarak başlat. Entegrasyon gereksinimleri kanıtlarsa daha sonra sadece daha fazla arabirim veya alternatif pin eşleştirmeleri ekle.
     - Wrapper paket hedefi doğrularken yeni destekleyici pasif elemanlar, kristaller veya konnektörler gerekliyse, bunları paket projesine `parts_install(project_path="packages/<name>")` ile kur.
     - Paket projesi var olup çalışma bağımsız olduktan sonra, ana ajan entegrasyona ve mimariye devam edebilsin diye `package_agent_spawn(project_path="packages/<name>", goal=..., comments=...)` ile delegeler.
  8. **Paket hedeflerini ilk olarak doğrula** — yerel paketler tarafından otomatik olarak açığa çıkarılan paket hedeflerini keşfetmek için `workspace_list_targets` kullan, sonra tam tasarımı denemeyi deneyin ve wrapperları ve diğer alt modülleri düzelt.
     - Daha hızlı doğrulama olduğu için daha küçük tasarım bölümlerini ilk olarak derle.
     - Daha hızlı geri bildirim almak için bağımsız paket/alt modül derlemelerini paralel olarak çalıştır.
     - Paket wrapperı oluşturmayı sadece ideal arabirim seti tam açığa çıkmazsa engelle. Temel wrapperı derle, doğrula ve entegrasyon sırasında genişletmeyi devam ettir.
     - Tam tasarım derlemesini sadece bu daha küçük hedefler yeşil olduktan sonra kullan, böylece ilk hata ayıklama döngüsü değil, entegrasyon kontrolü olsun.
  9. **`main.ato`'yu yükle** — paketleri arabirimler aracılığıyla bağla. Burada ham `_package` içe aktarması yok.
  10. **Tam tasarımı son olarak derle ve doğrula** — paket ve alt modül hedefleri yeşil olduktan sonra, üst seviye derlemeyi çalıştır ve entegrasyon sorunlarını düzelt.

  **Takip soruları sormak için turun sonlanma** — makul varsayımlar yapın ve not et. Kullanıcı yönlendirme mesajları aracılığıyla düzeltme yapabilir.

  ## Faz 4: Sonuçları rapor et

  10. **Sonuçları döndür** ne değiştiğinin, derleme durumunun ve yaptığınız varsayımların kısa bir özeti ile.

  # Kurallar

  - **Plan yapılıp yapılmayacağı sorma** — karmaşık görevler için hemen yap. Kullanıcı spesifikasyonu görüp yönlendirebilir.
  - Spesifikasyon, tasarım dosyasıdır — aynı modüller, aynı adlar, aynı yapı. Sadece soyut başlar ve doldurulur.
  - **Spesifikasyondan uygulamaya geçerken modülleri yeniden adlandırma.** `PowerSupply` `PowerSupply` kalır.
  - Gereksinimleri tümü üst seviyeye değil, onlardan sorumlu olan modülün docstring'ine koy.
  - **IC wrapperları `packages/`'e gider**, `main.ato`'ya değil. Ham `_package` bileşenleri asla `main.ato`'da içe aktarılmaz.
  - Spesifikasyonu öğrendikçe güncelleyin (canlı bir belgedir).
  - Uygulama sırasında bir derleme başarısız olursa, gereksinimler hala karşılanıyorsa düzeltmeyi kontrol edin.
  - Basit görevler için bunu atla — sadece doğrudan uygula.
  - Gereksinimleri doğrulanabilir tut, bulanık değil.
---

# When to Plan

**Simple tasks — just do it:**
- Single component add/remove/change, value change, rename
- Read/explain code or design
- Fix a specific build error
- Any task with a single clear action

**Complex tasks — always plan first:**
- Multi-component system design (2+ ICs interacting)
- New board or subsystem from scratch
- Unclear or function-level requirements ("I need a motor driver", "design me a sensor board")
- Tasks where you need to make multiple architectural choices

**Do not ask whether to plan.** For complex tasks, go straight into planning. Write the spec, create the checklist, call `design_questions` — all in one turn. The user sees the spec and questions, and can steer from there. This is faster than a back-and-forth about whether to plan.

# The Spec IS the Design

The spec and the design are **one and the same** `.ato` file. A spec is just the design at a high level of abstraction — skeleton modules, interfaces, constraints, and requirements. As you implement, you fill in real components, pin mappings, and values. The file grows; the structure stays.

**Do not create separate spec files.** The main `.ato` file IS the spec.

**Do not suffix module names with "Spec".** `PowerSupply`, not `PowerSupplySpec`. These names persist into the final design — name them for what they are, not for the fact that they started as a spec. See the **ato** skill §1.9 for naming guidance.

# Project Structure

Every project with ICs should follow this structure. **IC wrapper packages are separate from the main design.**

```
my-project/
├── ato.yaml                        # Project-level builds defined here
├── main.ato                        # Top-level design — imports packages, not raw parts
├── packages/
│   ├── stm32g474/
│   │   └── stm32g474.ato           # Wrapper: raw pins → standard interfaces
│   ├── drv8317/
│   │   └── drv8317.ato
│   └── tcan3414/
│       └── tcan3414.ato
├── parts/                          # All raw parts (ICs + connectors)
│   ├── STMicroelectronics_STM32G474CBT6/
│   ├── TEXAS_INSTRUMENTS_DRV8317HREER/
│   ├── Changzhou_Amass_Elec_XT30U_M/
│   └── ...
└── layouts/
```

## What goes where

| Item | Location | Why |
|------|----------|-----|
| IC wrapper modules | `packages/<name>/<name>.ato` | Complex pin mapping, reusable |
| All raw parts | `parts/` (project root) | Installed by `parts_install` |
| Simple self-contained parts | Used directly in `main.ato` | No supporting components or high-level interfaces needed (e.g. connectors, LEDs, test points) |
| Generic passives | stdlib (`import Resistor`) | No package needed |
| Top-level design | `main.ato` | Imports wrappers, never raw `_package` |

## Key rules

- **ICs always get wrapper packages** — MCU, gate driver, transceiver, anything with complex pin mapping
- **Wrapper modules expose standard interfaces** — `ElectricPower`, `I2C`, `SPI`, `CAN`, `UART`, `SWD`, `USB2_0`, `USB2_0_IF`, `ElectricLogic`, `ElectricSignal`, not raw pins
- **Check stdlib before defining new interfaces** — if stdlib already has the right interface, or the boundary can be modeled as arrays/composition of stdlib interfaces, use that instead of inventing a project-local interface
- **Wrapper packages are generic** — package boundaries should reflect chip capability, not one board's exact subsystem decomposition or role naming
- **Self-contained parts don't need wrappers** — anything that doesn't need supporting components and doesn't expose high-level interfaces (connectors, LEDs, test points, mounting holes)
- **No `ato.yaml` inside package directories** — package targets are discovered automatically
- **Do not add manual package wrapper build targets to the top-level `ato.yaml`** — use `workspace_list_targets` to discover package targets exposed by local packages

## `ato.yaml` format

```yaml
requires-atopile: ^0.14.0

paths:
  src: ./
  layout: ./layouts

builds:
  default:
    entry: main.ato:DualBLDCController

  # Package builds — for independent testing
  stm32g474:
    entry: packages/stm32g474/stm32g474.ato:STM32G474
    hide_designators: true
  drv8317:
    entry: packages/drv8317/drv8317.ato:DRV8317
    hide_designators: true
```

## Package wrapper pattern

```ato
#pragma experiment("BRIDGE_CONNECT")

import ElectricPower
import CAN
import ElectricLogic
import Capacitor

from "parts/STMicroelectronics_STM32G474CBT6/STMicroelectronics_STM32G474CBT6.ato" import STMicroelectronics_STM32G474CBT6_package

module STM32G474:
    """STM32G474 MCU with decoupling and standard interfaces.

    Exposes:
    - power: 3.3V rail
    - can: CAN FD interface (PA11/PA12)
    - pwm_a: 3x PWM for motor A (TIM1: PA8/PA9/PA10)
    - pwm_b: 3x PWM for motor B (TIM8: PB13/PB14/PB15)
    """

    # ── External interfaces ──
    power = new ElectricPower
    can = new CAN
    pwm_a = new ElectricLogic[3]
    pwm_b = new ElectricLogic[3]

    # ── Package ──
    package = new STMicroelectronics_STM32G474CBT6_package

    # ── Power ──
    power.hv ~ package.VDD
    power.hv ~ package.VDDA
    power.lv ~ package.VSS
    power.lv ~ package.VSSA
    assert power.voltage within 3.3V +/- 10%

    # ── Decoupling ──
    decoupling = new Capacitor[3]
    for cap in decoupling:
        cap.capacitance = 100nF +/- 10%
        cap.package = "C0402"
        power ~> cap ~> power.lv

    # ── CAN ──
    can.tx.line ~ package.PA11
    can.rx.line ~ package.PA12
    can.tx.reference ~ power
    can.rx.reference ~ power

    # ── PWM ──
    pwm_a[0].line ~ package.PA8
    pwm_a[1].line ~ package.PA9
    pwm_a[2].line ~ package.PA10
    pwm_b[0].line ~ package.PB13
    pwm_b[1].line ~ package.PB14
    pwm_b[2].line ~ package.PB15
```

## Clean `main.ato`

```ato
#pragma experiment("BRIDGE_CONNECT")

import ElectricPower

from "packages/stm32g474/stm32g474.ato" import STM32G474
from "packages/drv8317/drv8317.ato" import DRV8317
from "packages/tcan3414/tcan3414.ato" import TCAN3414
from "parts/Changzhou_Amass_Elec_XT30U_M/Changzhou_Amass_Elec_XT30U_M.ato" import Changzhou_Amass_Elec_XT30U_M_package

module DualBLDCController:
    """Dual BLDC motor controller for robot drivetrain."""

    mcu = new STM32G474
    motor_a = new DRV8317
    motor_b = new DRV8317
    can_phy = new TCAN3414

    power = new ElectricPower
    power ~ mcu.power
    power ~ motor_a.motor_supply
    power ~ motor_b.motor_supply

    mcu.can ~ can_phy.can
    mcu.pwm_a ~ motor_a.pwm
    mcu.pwm_b ~ motor_b.pwm
```

The file at `packages/<name>/<name>.ato` is the canonical wrapper boundary for that part or subsystem.
Refine that file in place. `main.ato` should import those wrapper packages directly rather than routing through an extra wrapper aggregator file.

# Requirements in Docstrings

Capture natural-language requirements directly in the module's docstring under a `Requirements:` section. Place requirements on whichever module owns them — top-level for system-wide requirements, on a specific subsystem for module-specific ones.

```ato
module PowerStage:
    """Three-phase MOSFET bridge sized for continuous motor current.

    Requirements:
    - R1: 20A continuous — FET stage rated for 20A with thermal margin
    """
```

Format: `- R<id>: <short text> — <criteria>`

These requirements stay in the design permanently. They document design intent alongside the implementation.

# Spec Format

The spec is the skeleton of the design. It defines architecture, requirements, and constraints — but leaves out implementation details (pin mappings, support circuits). Those get filled in during implementation.

```ato
#pragma experiment("BRIDGE_CONNECT")

import ElectricPower
import CAN
import ElectricLogic

module BLDCController:
    """
    # BLDC Motor Controller

    Dual-motor BLDC controller using STM32G474 and two DRV8317 drivers.

    ## Key Decisions
    - STM32G474 MCU — motor control timers + CAN FD
    - DRV8317 gate driver — 3-phase, integrated LDO

    ## Requirements
    - R1: MCU platform — Uses STM32G474
    - R2: 5-18V input — Operating voltage range
    - R3: Dual motor — 2x DRV8317 in 3-PWM mode

    ## Open Questions
    - Current sensing: phase shunt vs low-side?
    """

    # ── Architecture ──
    power = new PowerSupply
    control = new MCU
    motor_a = new MotorDrive
    motor_b = new MotorDrive
    comms = new CANTransceiver

    power.rail_3v3 ~ control.power
    power.motor_supply ~ motor_a.supply
    power.motor_supply ~ motor_b.supply
    control.pwm_a ~ motor_a.pwm
    control.pwm_b ~ motor_b.pwm
    control.can ~ comms.can

    assert power.vin.voltage within 5V to 18V

module PowerSupply:
    """Power input and regulation."""
    vin = new ElectricPower
    rail_3v3 = new ElectricPower
    motor_supply = new ElectricPower

module MCU:
    """STM32G474 with timers and comms peripherals."""
    power = new ElectricPower
    can = new CAN
    pwm_a = new ElectricLogic[3]
    pwm_b = new ElectricLogic[3]

module MotorDrive:
    """DRV8317 3-phase gate driver."""
    supply = new ElectricPower
    pwm = new ElectricLogic[3]

module CANTransceiver:
    """CAN FD transceiver with UAVCAN connector.

    Requirements:
    - R4: CAN FD transceiver with UAVCAN connector
    """
    can = new CAN
```

## How spec concepts map to ato

| Spec Concept | ato Mechanism |
|---|---|
| **Overview** | Module docstring (`"""..."""`) |
| **Architecture** | Sub-modules + connections (`~`) |
| **Requirements** | `- R<id>: <text> — <criteria>` in module docstring |
| **Formal constraints** | `assert` statements |
| **Component selection** | `new` instantiations |
| **Sub-system descriptions** | Child module docstrings |
| **Open questions** | Section in docstring |

# Checklist for Tracking Progress

When creating a spec, also create a checklist to track implementation progress. Link checklist items to spec requirements:

```
checklist_create({
  items: [
    {id: "spec", description: "Write spec and project structure", criteria: "main.ato with architecture and project-level ato.yaml"},
    {id: "questions", description: "Gather design decisions", criteria: "design_questions called with all open questions"},
    {id: "pkg-mcu", description: "Create MCU wrapper package", criteria: "packages/stm32g474/stm32g474.ato with standard interfaces"},
    {id: "pkg-driver", description: "Create gate driver wrapper package", criteria: "packages/drv8317/drv8317.ato with standard interfaces"},
    {id: "integrate", description: "Wire up top-level design", criteria: "main.ato connects packages through interfaces"},
    {id: "build", description: "Build and verify", criteria: "Build passes or issues clearly identified"},
  ]
})
```

# Planning Flow

The goal is to **front-load all questions and decisions**, then implement without interruption.

## Phase 1: Spec & Ask (end turn after this)

Do steps 1-5 in a SINGLE turn — do not end your turn after announcing you will plan.

1. **Read** existing project files to understand current state.
2. **Set up project structure** — create the project-level `ato.yaml` and `packages/` directories. Do not add manual package-wrapper build targets for generated local packages.
3. **Write the spec** as `main.ato` — architecture with sub-modules, requirements in docstrings, interface connections, and formal constraints. Use standard library interfaces (CAN, I2C, SPI, SWD, USB2_0, ElectricPower, ElectricLogic, ElectricSignal) in the spec instead of inventing local interfaces unless there is a real reusable boundary not covered by stdlib.
4. **Create checklist** with items for each package wrapper + integration + build.
5. **Call `design_questions`** with ALL open questions at once. Include suggested options and recommended defaults where possible — make it easy for the user to answer quickly. Your turn ends automatically after this call.

Use `design_questions` any time you have multiple design decisions to gather. It presents structured questions with bullet-point options that the user can answer or override with freeform text. Do not trickle questions across multiple turns — batch them all into one `design_questions` call.

## Phase 2: Lock decisions (brief)

6. **Wait for user answers.** Incorporate all decisions into the spec and checklist in one pass.

## Phase 3: Implement end-to-end (do not stop)

7. **Create package wrappers** — one per IC. Install parts, inspect vendor datasheets/design guides with `web_search`, map pins to interfaces.
   - Before committing to an unfamiliar IC, motor driver, PMIC, RF part, or other high-risk part, do a brief `web_search` pass to inspect the vendor datasheet/design guide, compare families, confirm the typical topology, and find reference-circuit guidance.
   - Keep wrappers reusable across projects. Expose generic chip capabilities and keep board-specific grouping and role naming in `main.ato` or project modules above the wrapper.
   - Start each wrapper as a basic reusable boundary with the minimum standard interfaces needed to validate the package target and integrate the design. Add more interfaces or alternate pin mappings later only if integration proves they are needed.
   - If a wrapper needs new supporting passives, crystals, or connectors while you are validating that package target, install them into the package project itself with `parts_install(project_path="packages/<name>")`.
   - Once a package project exists and the work is independent, delegate it with `package_agent_spawn(project_path="packages/<name>", goal=..., comments=...)` so the main agent can keep moving on integration and architecture.
8. **Validate package targets first** — use `workspace_list_targets` to discover package targets automatically exposed by local packages, then build/fix wrappers and other submodules before attempting the full design.
   - Build smaller design sections first because they are much faster to validate.
   - Run independent package/submodule builds in parallel where practical to get faster feedback.
   - Do not mark wrapper creation blocked just because the full ideal interface set is not exposed yet. Build the basic wrapper, validate it, and continue expanding it during integration.
   - Use the full-design build only after those smaller targets are green so it serves as an integration check, not the first debugging loop.
9. **Wire up `main.ato`** — connect packages through their interfaces. No raw `_package` imports here.
10. **Build and verify the full design last** — once package and submodule targets are green, run the top-level build and fix integration issues.

**Do not end your turn to ask follow-up questions** — make reasonable assumptions and note them. The user can course-correct via steering messages.

## Phase 4: Report results

10. **Return results** with a concise summary of what changed, build status, and any assumptions you made.

# Rules

- **Do not ask whether to plan** — for complex tasks, just do it. The user sees the spec and can steer.
- The spec IS the design file — same modules, same names, same structure. It just starts abstract and gets filled in.
- **Do not rename modules** when transitioning from spec to implementation. `PowerSupply` stays `PowerSupply`.
- Place requirements in the docstring of whichever module owns them, not all on the top-level.
- **IC wrappers go in `packages/`**, not in `main.ato`. Raw `_package` components are never imported in `main.ato`.
- Update the spec as you learn things (it's a living document).
- If a build fails during implementation, check if the fix still meets requirements before moving on.
- For simple tasks, skip all of this — just implement directly.
- Keep requirements verifiable, not vague.
