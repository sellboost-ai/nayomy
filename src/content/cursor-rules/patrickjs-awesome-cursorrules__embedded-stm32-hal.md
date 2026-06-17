---
name: "embedded-stm32-hal"
clean_name: "Embedded Stm32 Hal"
description: "Embedded C/C++ rules for MCU, STM32, HAL, interrupts, DMA, memory constraints, and hardware-focused testing"
description_tr: "MCU, STM32, HAL, kesintiler, DMA, bellek kısıtlamaları ve donanım odaklı test için gömülü C/C++ kuralları ve en iyi uygulamalar."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
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
  - Saat ağacı, pin haritalamalar, çevre birimi sahipliği ve kesinti önceliklerini belgeleyin.

  ## STM32 HAL ve Çevre Birimleri

  - Çevre birimlerini tek bir yerde başlatın ve gizli yeniden konfigürasyondan kaçının.
  - HAL çağrılarından dönen değerleri kontrol edin ve timeout/hata durumlarını yönetin.
  - Blocking HAL çağrılarını zaman-kritik yollardan uzak tutun.
  - Uygun olduğunda yüksek kapasiteli UART, SPI, I2C, ADC veya timer capture yolları için DMA kullanın.
  - DMA işlemleri için buffer sahipliğini ve yaşam döngüsünü belgeleyin.
  - `volatile` yalnızca ISR'ler veya donanım yazmaçlarıyla paylaşılan bellek için kullanın.

  ## Kesintiler ve Eşzamanlılık

  - ISR'leri kısa ve belirleyici tutun.
  - Ağır işleri kesintilerden ana döngüye, RTOS görevine veya olay kuyruğuna erteleyin.
  - Paylaşılan verileri kritik bölümler, atomikler, kuyruklar veya RTOS ilkelleriyle koruyun.
  - Kesintilerde dinamik ayırma yapmayın.
  - Kesinti önceliği kararlarını açık hale getirin.

  ## Bellek ve Zamanlama

  - Proje açıkça izin vermediği sürece firmware'de heap ayırmasından kaçının.
  - ISR'ler ve RTOS görevleri için stack kullanımını kontrol edin.
  - Lookup tabloları `const` tutun, böylece flash'ta yaşayabilsinler.
  - Donanım yüzleyen kod için sabit genişlikli tamsayı türleri kullanın.
  - Donanım beklentileri için timeout'lar ekleyin.
  - Watchdog konfigürasyonunu geç bir eklenti değil, uygulama tasarımının bir parçası olarak ele alın.

  ## Test ve Hata Ayıklama

  - Saf mantığı host build'leri üzerinde unit test edin.
  - Çevre birimi davranışı için hardware-in-the-loop testlerini kullanın.
  - Debug build'lerde imkansız donanım durumları için assertions ekleyin.
  - SWD/JTAG, mantık analizcileri ve hız sınırlanmış seri loglarını kullanın.
  - Fault handler'ları faydalı tutun: reset nedenini, fault yazmaçlarını ve mümkün olduğunda build sürümünü yakalayın.

  ## Yaygın Hatalar

  - İş akışı değişiklikleri korumazsa üretilen dosyaları değiştirmeyin.
  - Donanım flagları üzerinde sonsuza kadar busy-wait yapmayın.
  - DMA ve CPU arasında senkronizasyon olmadan buffer paylaşmayın.
  - Düşük güç modlarından sonra çevre birimi reset durumunu varsaymayın.
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
