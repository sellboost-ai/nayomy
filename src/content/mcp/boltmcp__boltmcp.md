---
name: "boltmcp/boltmcp"
description: "Enterprise-grade MCP orchestration platform to create, deploy, and manage custom MCP servers on-premises"
description_tr: "Kurumsal düzeyde MCP sunucuları oluşturmak, dağıtmak ve yönetmek için şirket içi MCP orkestrasyonu platformu."
category: "Aggregators"
repo: "boltmcp/boltmcp"
stars: 353
url: "https://github.com/boltmcp/boltmcp"
body_length: 2188
language: "Shell"
homepage: "https://boltmcp.io"
body_tr: |-
  # BoltMCP

  BoltMCP, özel MCP sunucularını şirket içinde oluşturmak, dağıtmak ve yönetmek için kurumsal düzeyde bir MCP orkestrasyonu platformudur.

  <!-- ## Demo

  Video demo of creating and using an MCP server -->

  ## Kurulum

  BoltMCP'yi kurmanın ve çalıştırmanın iki yolu vardır:

  ### [Docker Compose ile yerel olarak test etme](./docker-compose/)

  Bilgisayarınızda hızlı bir deneme yapmak için BoltMCP'yi Docker Compose ile kurun. Bu, üretim ortamı için uygun değildir.

  ### [Helm ile üretim ortamına dağıtma](./helm-chart)

  Bir Kubernetes kümesine dağıtmak için BoltMCP'yi Helm ile kurun. Bu, kurumsal üretim ortamları için uygundur.

  ## OpenMCP takipçileri için

  OpenMCP, MCP sunucuları için token yönetimi tekniklerinin erken bir keşifiydi. O zamandan beri güvenli sunucular oluşturmak ve bu süreçten öğrenmek için çok zaman harcadık. Bu, projeyi bugün BoltMCP olarak adlandırılan şeye dönüştürdü. OpenMCP ile desteğiniz ve deneyimleriniz için teşekkür ederiz. Umarız bu heveskarlık, bu sürüm için yaptığımız tüm gelişmelerle devam eder.

  ### Değişiklikler

  **Barındırma**

  - Tüm yazılım artık şirket içinde self-hosted
  - Kurumsal düzeyde cloud native altyapı ve entegrasyonlar

  **Transport ve yetkilendirme**

  - Tüm sunucular varsayılan olarak Streamable HTTP
  - Tüm sunucular varsayılan olarak OAuth 2 ile güvenli
  - Her sunucu artık farklı auth gereksinimlerine sahip birden fazla upstream API ile etkileşim kurabilir

  **Zengin özelleştirme**

  - Belirli bir kullanım durumunuz için uyarlanmış araçların bir alt kümesiyle anında özel MCP sunucuları oluşturabilirsiniz
  - Araçlar artık zengin giriş/çıkış dönüşümü ve bildirimsel json/yaml spec tarafından desteklenen tek bir araç içinde birden fazla API işleminin bileşimi ile tam olarak özelleştirilebilir
  - Araçlar önceden kaydedilebilir, istek üzerine alınabilir veya kısmen kaydedilerek istek üzerine tembel yükleme yapılabilir

  **MCP client oyun alanı**

  - Uygulama artık sunucularınız ile sohbet etmek için kullanabileceğiniz bir MCP client oyun alanı ile birlikte gelir
  - Resmi MCP Inspector de uygulamayla birlikte sunulmaktadır

  **Kendi LLM'inizi getirin**

  - Seçtiğiniz bir LLM'i (self-hosted veya bulut) yapılandırın. Bunu, oyun alanı da dahil olmak üzere uygulamadaki AI destekli özellikler için kullanın
---

# BoltMCP

BoltMCP is an enterprise-grade MCP orchestration platform to create, deploy, and manage custom MCP servers on-premises.

<!-- ## Demo

Video demo of creating and using an MCP server -->

## Installation

There are two ways to install and run BoltMCP:

### [Testing locally with Docker Compose](./docker-compose/)

To take a quick spin on your laptop, install BoltMCP with Docker Compose. This isn’t suitable for production.

### [Deploying to production with Helm](./helm-chart)

To deploy to a Kubernetes cluster, install BoltMCP with Helm. This is suitable for enterprise production environments.

## For followers of OpenMCP

OpenMCP was an early exploration of techniques in token-management for MCP servers. Since then we’ve spent a lot of time building secure servers and learning from the process, which has evolved the project into what is now called BoltMCP. Thank you for your support and experimentation with OpenMCP, we hope this enthusiasm continues with all the developments we’ve made for this iteration.

### What has changed

**Hosting**

- All software is now self-hosted on-premises
- Enterprise-grade cloud native infrastructure and integrations

**Transport & authorization**

- All servers are Streamable HTTP by default
- All servers are secured with OAuth 2 by default
- Each server can now interact with multiple upstream APIs with different auth requirements

**Rich customization**

- You can spin up custom MCP servers on-the-fly with a subset of tools tailored for your specific use-case
- Tools can now be fully customized with rich transformation of inputs/outputs, and composition of multiple API operations within a single tool, all backed by a declarative json/yaml spec.
- Tools can be registered up-front, retrieved on demand, or partially registered and lazy-loaded on demand

**MCP client playground**

- The application now bundles with an MCP client playground which you can use to chat with your servers
- The official MCP Inspector is also bundled with the application

**Bring your own LLM**

- Configure an LLM of your choice, self-hosted or cloud, to use for the AI-powered features within the application, including the playground
