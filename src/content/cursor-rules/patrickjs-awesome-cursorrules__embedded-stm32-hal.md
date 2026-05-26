---
name: "embedded-stm32-hal"
clean_name: "Embedded Stm32 Hal"
description: "Embedded C/C++ rules for MCU, STM32, HAL, interrupts, DMA, memory constraints, and hardware-focused testing"
description_tr: "MCU, STM32, HAL, kesintiler, DMA ve bellek kısıtlamaları için gömülü C/C++ kuralları ile donanım odaklı test desteği sağlar."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/embedded-stm32-hal.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/embedded-stm32-hal.mdc"
body_length: 2432
file_extension: ".mdc"
body_tr: |-
  # Embedded MCU, STM32 ve HAL Kuralları

  ## Proje Yapısı

  - Board support, driver'ları, middleware, uygulama mantığını ve testleri ayrı tutun.
  - Üretilen CubeMX veya vendor kodunu el yazısı uygulama kodundan izole edin.
  - Hardware abstraction'ı dar arayüzler arkasında tutun, böylece mantık donanım olmadan test edilebilsin.
  - Clock tree, pin mappings, peripheral ownership ve interrupt önceliklerini belgeleyebilir.

  ## STM32 HAL ve Peripherals

  - Peripheral'ları tek bir yerde initialize edin ve gizli reconfiguration'dan kaçının.
  - HAL çağrılarından return value'ları kontrol edin ve timeout/error durumlarda handle edin.
  - Blocking HAL çağrılarını time-critical path'lerden uzak tutun.
  - Yüksek-throughput UART, SPI, I2C, ADC veya timer capture path'leri için uygun olduğunda DMA kullanın.
  - DMA işlemleri için buffer ownership ve lifetime'ı belgeleyebilir.
  - `volatile` kullanımını sadece ISR'larla veya hardware register'larla paylaşılan memory için kullanın.

  ## Interrupt'lar ve Concurrency

  - ISR'ları kısa ve deterministic tutun.
  - Ağır işleri interrupt'lardan main loop'a, RTOS task'ına veya event queue'ya erteleyin.
  - Paylaşılan veriyi critical section'lar, atomics, queue'lar veya RTOS primitive'leriyle koruyun.
  - Interrupt'larda dynamic allocation'dan kaçının.
  - Interrupt priority kararlarını açık hale getirin.

  ## Memory ve Timing

  - Proje açıkça izin vermediği sürece firmware'de heap allocation'dan kaçının.
  - ISR'lar ve RTOS task'ları için stack usage'ını kontrol edin.
  - Lookup table'ları `const` tutun, böylece flash'ta yer alabilsin.
  - Hardware ile ilişkili kod için fixed-width integer type'ları kullanın.
  - Hardware bekleme işlemleri için timeout ekleyin.
  - Watchdog configuration'ı geç bir eklenti değil, uygulama tasarımının bir parçası olarak görün.

  ## Testing ve Debugging

  - Saf mantığı host build'lerinde unit test edin.
  - Peripheral davranışı için hardware-in-the-loop test'leri kullanın.
  - Debug build'lerinde imkansız hardware state'leri için assertion'lar ekleyin.
  - SWD/JTAG, logic analyzer'lar ve rate limit'li serial log'ları kullanın.
  - Fault handler'ları kullanışlı tutun: reset reason, fault register'ları ve build version'ını mümkün olduğunda capture edin.

  ## Yaygın Hatalar

  - Workflow değişiklikleri korumadığı sürece generated file'ları modifiye etmeyin.
  - Hardware flag'lerine sonsuza kadar busy-wait yapmayın.
  - DMA ve CPU arasında synchronization olmadan buffer'ları paylaşmayın.
  - Low-power mode'lardan sonra peripheral reset state'ini varsaymayın.
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
