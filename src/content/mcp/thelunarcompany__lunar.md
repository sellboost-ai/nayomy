---
name: "TheLunarCompany/lunar"
description: "MCPX is a production-ready, open-source gateway to manage MCP servers at scale—centralize tool discovery, access controls, call prioritization, and usage tracking to simplify agent workflows."
description_tr: "MCPX, üretim ortamında kullanıma hazır bir açık kaynaklı gateway olup, MCP sunucularını ölçekli şekilde yönetmenizi sağlar—tool discovery, erişim kontrolleri, çağrı önceliklendirilmesi ve kullanım takibini merkezi bir yerden yönetmek suretiyle agent iş akışlarınızı basitleştirir."
category: "Aggregators"
repo: "TheLunarCompany/lunar"
stars: 446
url: "https://github.com/TheLunarCompany/lunar"
body_length: 2855
license: "MIT"
language: "TypeScript"
homepage: "https://lunar.dev"
body_tr: |-
  <div align="center">



  <a href="https://opensource.org/licenses/MIT">![License](https://img.shields.io/badge/License-MIT-blue.svg)</a>
  <a href="https://docs.lunar.dev/">![Documentation](https://img.shields.io/badge/docs-viewdocs-blue.svg?style=flat-square "Viewdocs")</a>
  <a href="https://lunar.dev/">![Website](https://img.shields.io/badge/lunar.dev-website-purple.svg?style=flat-square "Website")</a>

  </div>

  # Lunar.dev'e Hoşgeldiniz

  **Lunar.dev**, uygulamalar ve AI agent iş yükleri arasında üçüncü taraf API tüketimini **yönetmek, kontrol etmek ve optimize etmek** için açık kaynaklı bir platformdur.

  <div  align="center">


  </div>

  ## AI Çağı için Tüketim Yönetimi

  AI ajanları ve otonom iş akışları dış API'lere giderek daha fazla bağımlı hale geldikçe, uygulamalar, ajanlar ve bunların bağlı oldukları hizmetler arasında merkezi bir toplama noktası olarak davranan bir mediation katmanına ihtiyaç duyulmaktadır.

  Lunar.dev bu katmanı sağlar—AI için birleşik bir API Gateway olarak hizmet ederek şunları sunar:

  - **Canlı API Trafiği Görünürlüğü:** LLM ve agent çağrıları da dahil olmak üzere tüm giden trafik üzerinde gecikme, hatalar, maliyet ve token kullanımı hakkında gerçek zamanlı metrikler alın.
  - **AI Farkında Policy Uygulaması:** Tool erişimini kontrol edin, agent eylemlerini kısıtlayın ve agent trafiğini ince ayarlı kurallarla yönetin.
  - **Gelişmiş Traffic Shaping:** Yükü yönetmek ve güvenilirliği sağlamak için rate limit, retry, priority queue ve circuit breaker uygulayın.
  - **Maliyet & Performans Optimizasyonu:** Akıllı gateway politikaları aracılığıyla israfı belirleyin, trafiğin yoğun saatlerini düzleştirin ve pahalı API'ler üzerinde aşırı kullanımı azaltın.
  - **Merkezi MCP Agregasyonu:** Operasyonları kolaylaştırarak birden fazla MCP sunucusunu tek bir gateway'de konsolide edin, güvenlik, gözlemlenebilirlik ve yönetimi geliştirin.

  ## Yolunuzu Seçin

  Lunar.dev iki ana bileşenden oluşur:

  - [**Lunar Proxy**](https://github.com/TheLunarCompany/lunar/tree/main/proxy#readme) – temel API gateway'imiz ve kontrol katmanımız
  - [**Lunar MCPX**](https://github.com/TheLunarCompany/lunar/tree/main/mcpx#readme) – birden fazla MCP sunucusu için sıfır kod agregator, birleşik API erişimi ile

  İhtiyaçlarınıza uygun olanı keşfedin—veya tam yığın bir çözüm için ikisini de kullanın.

  ## Özünde Açık Kaynak

  Bu proje, üçüncü taraf API'leri yönetmek için daha sağlam ve üretime hazır bir yaklaşıma ihtiyaç duyulmasından ortaya çıktı. Özünde açık kaynak olmaya devam etmektedir ve üretim dışı/kişisel kullanım için ücretsizdir. Üretim ortamları için, rehberli onboarding ve platform seviyeleri aracılığıyla gelişmiş özellikler sunuyoruz; daha fazla bilgi için [web sitemizi ziyaret edin](https://lunar.dev) veya doğrudan bizimle iletişim kurun.
---

<div align="center">



<a href="https://opensource.org/licenses/MIT">![License](https://img.shields.io/badge/License-MIT-blue.svg)</a>
<a href="https://docs.lunar.dev/">![Documentation](https://img.shields.io/badge/docs-viewdocs-blue.svg?style=flat-square "Viewdocs")</a>
<a href="https://lunar.dev/">![Website](https://img.shields.io/badge/lunar.dev-website-purple.svg?style=flat-square "Website")</a>

</div>

# Welcome to Lunar.dev

**Lunar.dev** is an open-source platform for **managing, governing and optimizing** third-party API consumption across applications and AI agent workloads at scale.

<div  align="center">


</div>

## Consumption Management for the AI Era

As AI agents and autonomous workflows increasingly rely on external APIs, there's a growing need for a mediation layer that acts as a central aggregation point between applications, agents, and the services they depend on.

Lunar.dev provides that layer—serving as a unified API Gateway for AI, delivering:

- **Live API Traffic Visibility:** Get real-time metrics on latency, errors, cost, and token usage across all outbound traffic, including LLM and agent calls.
- **AI-Aware Policy Enforcement:** Control tool access, throttle agent actions, and govern agentic traffic with fine-grained rules.
- **Advanced Traffic Shaping:** Apply rate limits, retries, priority queues, and circuit breakers to manage load and ensure reliability.
- **Cost & Performance Optimization:** Identify waste, smooth traffic peaks, and reduce overuse of costly APIs through smart gateway policies.
- **Centralized MCP Aggregation:** Streamline operations by consolidating multiple MCP servers into a single gateway, enhancing security, observability, and management.

## Choose Your Path

Lunar.dev is composed of two major components:

- [**Lunar Proxy**](https://github.com/TheLunarCompany/lunar/tree/main/proxy#readme) – our core API gateway and control layer
- [**Lunar MCPX**](https://github.com/TheLunarCompany/lunar/tree/main/mcpx#readme) – a zero-code aggregator for multiple MCP servers with unified API access

Explore the one that fits your needs—or use both for a full-stack solution.

## Open Source at the Core

This project was born out of the need for a more robust, production-ready approach to managing third-party APIs. It remains open-source at its core and free for non-production/personal use. For production environments, we offer advanced features through guided onboarding and platform tiers; [visit our website](https://lunar.dev) or reach out directly for more information
