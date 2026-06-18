---
name: "boltmcp/boltmcp"
description: "Enterprise-grade MCP orchestration platform to create, deploy, and manage custom MCP servers on-premises"
description_tr: "Şirket içi ortamında özel MCP sunucuları oluşturmak, dağıtmak ve yönetmek için kurumsal düzeyde MCP orkestrasyonu platformu."
category: "Aggregators"
repo: "boltmcp/boltmcp"
stars: 355
url: "https://github.com/boltmcp/boltmcp"
body_length: 994
language: "Shell"
homepage: "https://install.boltmcp.io"
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

# BoltMCP Installation

BoltMCP installs on any Kubernetes cluster with a single Helm chart.

## Install with Claude

1. Prerequisite: [install Claude Code](https://code.claude.com/docs/) and login

```bash
claude auth login
```

2. Clone this repository

```bash
git clone https://github.com/boltmcp/boltmcp.git
```

3. Move your BoltMCP access key to the `keys` directory

```bash
mv ~/Downloads/my-key.json boltmcp/keys/
```
> Replace `~/Downloads/my-key.json` with the path to your access key file

4. Open Claude Code from inside the `boltmcp` directory

```bash
cd boltmcp && claude
```

5. Invoke the Skill and Claude will walk you through the installation process

```
/install-boltmcp Install BoltMCP on a new cluster
```

> Replace the text after "/install-boltmcp " with any instruction related to installing, updating or uninstalling BoltMCP.

## Install Manually

If you'd prefer to do the installation manually, visit https://install.boltmcp.io and follow the instructions there.
