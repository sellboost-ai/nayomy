---
name: "embedded-stm32-hal"
clean_name: "Embedded Stm32 Hal"
description: "Embedded C/C++ rules for MCU, STM32, HAL, interrupts, DMA, memory constraints, and hardware-focused testing"
description_tr: "MCU, STM32, HAL, interrupt, DMA ve hafıza kısıtlamaları için gömülü C/C++ kuralları ve donanım odaklı test yöntemleri."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/embedded-stm32-hal.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/embedded-stm32-hal.mdc"
body_length: 2432
file_extension: ".mdc"
body_tr: |-
  # Embedded MCU, STM32 ve HAL Kuralları

  ## Proje Yapısı

  - Board desteği, sürücüler, middleware, uygulama mantığı ve testleri ayrı tutun.
  - Üretilen CubeMX veya vendor kodunu el yazısı uygulama kodundan izole edin.
  - Donanım soyutlamasını dar arayüzlerin arkasına koyun, böylece mantık donanım olmadan test edilebilsin.
  - Saat ağacı, pin eşlemeleri, çevresel sahiplik ve kesme önceliklerini belgelendirin.

  ## STM32 HAL ve Çevre Birimleri

  - Çevresel birimleri tek bir yerde başlatın ve gizli yeniden yapılandırmadan kaçının.
  - HAL çağrılarından dönüş değerlerini kontrol edin ve timeout/hata durumlarını işleyin.
  - Zaman kritik yollarda HAL çağrılarını bloke etmeyin.
  - Uygun olduğunda yüksek verimlilik için UART, SPI, I2C, ADC veya timer yakalama yollarında DMA kullanın.
  - DMA işlemleri için buffer sahipliğini ve ömrünü belgelendirin.
  - `volatile` yalnızca ISR'ler veya donanım yazmaçlarıyla paylaşılan bellek için kullanın.

  ## Kesintiler ve Eşzamanlılık

  - ISR'leri kısa ve deterministik tutun.
  - Ağır işleri kesintilerden ana döngüye, RTOS görevine veya olay kuyruğuna erteleyin.
  - Paylaşılan verileri kritik bölümler, atomikler, kuyruklar veya RTOS ilkeleriyle koruyun.
  - Kesintilerde dinamik tahsisattan kaçının.
  - Kesme önceliği kararlarını açık hale getirin.

  ## Bellek ve Zamanlama

  - Proje açıkça izin vermedikçe firmware'de heap tahsisinden kaçının.
  - ISR'ler ve RTOS görevleri için stack kullanımını kontrol edin.
  - Arama tablolarını `const` tutun, böylece flash'ta yaşayabilsinler.
  - Donanımla ilişkili kod için sabit genişlikli tamsayı türleri kullanın.
  - Donanım bekleme işlemleri için timeout ekleyin.
  - Watchdog yapılandırmasını geç ekleme değil, uygulama tasarımının parçası olarak düşünün.

  ## Test Etme ve Hata Ayıklama

  - Saf mantığı host derlemelerinde birim test edin.
  - Çevresel davranış için donanım-in-the-loop testler kullanın.
  - Hata ayıklama derlemelerinde imkansız donanım durumları için iddialar ekleyin.
  - SWD/JTAG, mantık analizörleri ve seri günlükleri hız limitleriyle kullanın.
  - Hata işleyicileri faydalı tutun: mümkün olduğunda reset nedenini, hata yazmaçlarını ve derleme sürümünü yakalayın.

  ## Yaygın Hatalar

  - İş akışı değişiklikleri korumuş olmadıkça üretilen dosyaları değiştirmeyin.
  - Donanım bayraklarında sonsuza kadar meşgul-beklemeyin.
  - DMA ve CPU arasında senkronizasyon olmadan buffer paylaşmayın.
  - Düşük güç modlarından sonra çevresel reset durumunu varsaymayın.
---


# Embedded MCU, STM32, and HAL Rules

## Project Structure

- Keep board support, drivers, middleware, application logic, and tests separate.
- Isolate generated CubeMX or vendor code from hand-written application code.
- Put hardware abstraction behind narrow interfaces so logic can be tested without hardware.
- Document clock tree, pin mappings, peripheral ownership, and interrupt priorities.

## STM32 HAL and Peripherals

- Initialize peripherals in one place and avoid hidden reconfiguration.
- Check return values from HAL calls and handle timeout/error cases.
- Keep blocking HAL calls out of time-critical paths.
- Use DMA for high-throughput UART, SPI, I2C, ADC, or timer capture paths when appropriate.
- Document buffer ownership and lifetime for DMA operations.
- Use `volatile` only for memory shared with ISRs or hardware registers.

## Interrupts and Concurrency

- Keep ISRs short and deterministic.
- Defer heavy work from interrupts to the main loop, RTOS task, or event queue.
- Protect shared data with critical sections, atomics, queues, or RTOS primitives.
- Avoid dynamic allocation in interrupts.
- Make interrupt priority decisions explicit.

## Memory and Timing

- Avoid heap allocation in firmware unless the project explicitly allows it.
- Check stack usage for ISRs and RTOS tasks.
- Keep lookup tables `const` so they can live in flash.
- Use fixed-width integer types for hardware-facing code.
- Add timeouts for hardware waits.
- Treat watchdog configuration as part of application design, not a late add-on.

## Testing and Debugging

- Unit test pure logic on host builds.
- Use hardware-in-the-loop tests for peripheral behavior.
- Add assertions for impossible hardware states in debug builds.
- Use SWD/JTAG, logic analyzers, and serial logs with rate limits.
- Keep fault handlers useful: capture reset reason, fault registers, and build version when possible.

## Common Mistakes

- Do not modify generated files unless the workflow preserves changes.
- Do not busy-wait forever on hardware flags.
- Do not share buffers between DMA and CPU without synchronization.
- Do not assume peripheral reset state after low-power modes.
