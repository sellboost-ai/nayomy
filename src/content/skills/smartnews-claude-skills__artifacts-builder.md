---
name: "artifacts-builder"
description_en: "Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts."
category: "Design"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/artifacts-builder/SKILL.md"
path: "artifacts-builder/SKILL.md"
is_collection: false
body_length: 2691
has_scripts: true
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Artifacts Builder

  Güçlü frontend claude.ai artifact'ları oluşturmak için şu adımları izleyin:
  1. `scripts/init-artifact.sh` kullanarak frontend repo'sunu initialize edin
  2. Oluşturulan kodu düzenleyerek artifact'ınızı geliştirin
  3. Tüm kodu `scripts/bundle-artifact.sh` kullanarak tek bir HTML dosyasına paketleyin
  4. Artifact'ı kullanıcıya gösterin
  5. (İsteğe bağlı) Artifact'ı test edin

  **Stack**: React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

  ## Tasarım & Stil Rehberi

  ÇOK ÖNEMLİ: Sıklıkla "AI slop" olarak adlandırılan şeyden kaçınmak için, aşırı ortalanmış layoutlar, mor degradeler, uniform köşe yuvarlamaları ve Inter font kullanmaktan kaçının.

  ## Hızlı Başlangıç

  ### Adım 1: Projeyi Initialize Edin

  Yeni bir React projesi oluşturmak için initialization script'ini çalıştırın:
  ```bash
  bash scripts/init-artifact.sh <project-name>
  cd <project-name>
  ```

  Bu, aşağıdakilerle tam olarak yapılandırılmış bir proje oluşturur:
  - ✅ React + TypeScript (Vite aracılığıyla)
  - ✅ Tailwind CSS 3.4.1 shadcn/ui theming sistemi ile
  - ✅ Path alias'ları (`@/`) yapılandırılmış
  - ✅ 40+ shadcn/ui component'i önceden yüklü
  - ✅ Tüm Radix UI bağımlılıkları dahil
  - ✅ Bundling için Parcel yapılandırılmış (.parcelrc aracılığıyla)
  - ✅ Node 18+ uyumluluğu (Vite sürümünü otomatik tespit eder ve sabitler)

  ### Adım 2: Artifact'ınızı Geliştirin

  Artifact'ı oluşturmak için oluşturulan dosyaları düzenleyin. Rehberlik için aşağıdaki **Yaygın Geliştirme Görevleri**ne bakın.

  ### Adım 3: Tek HTML Dosyasına Paketleyin

  React uygulamasını tek bir HTML artifact'ına paketlemek için:
  ```bash
  bash scripts/bundle-artifact.sh
  ```

  Bu, tüm JavaScript, CSS ve bağımlılıkları içinde sahip olan `bundle.html` dosyasını oluşturur. Bu dosya doğrudan Claude sohbetlerinde artifact olarak paylaşılabilir.

  **Gereksinimler**: Projenizin kök dizininde bir `index.html` dosyası olması gerekir.

  **Script ne yapar**:
  - Bundling bağımlılıklarını yükler (parcel, @parcel/config-default, parcel-resolver-tspaths, html-inline)
  - Path alias desteği ile `.parcelrc` config'i oluşturur
  - Parcel ile build eder (source map olmadan)
  - Tüm asset'leri html-inline kullanarak tek HTML'ye inline eder

  ### Adım 4: Artifact'ı Kullanıcı ile Paylaşın

  Son olarak, paketlenmiş HTML dosyasını sohbette kullanıcı ile paylaşın ve artifact olarak görüntülemesini sağlayın.

  ### Adım 5: Artifact'ı Test Etme/Görselleştirme (İsteğe bağlı)

  Not: Bu tamamen isteğe bağlı bir adımdır. Yalnızca gerekli olduğunda veya istendiğinde gerçekleştirin.

  Artifact'ı test etmek/görselleştirmek için mevcut araçları (diğer Skills veya Playwright ya da Puppeteer gibi yerleşik araçlar dahil) kullanın. Genel olarak, artifact'ı önceden test etmekten kaçının çünkü bu, istek ile bitmiş artifact'ın görülebileceği zaman arasında gecikme ekler. Gerekli ise veya sorun ortaya çıkarsa, artifact'ı sunduktan sonra test edin.

  ## Referans

  - **shadcn/ui components**: https://ui.shadcn.com/docs/components
---

# Artifacts Builder

To build powerful frontend claude.ai artifacts, follow these steps:
1. Initialize the frontend repo using `scripts/init-artifact.sh`
2. Develop your artifact by editing the generated code
3. Bundle all code into a single HTML file using `scripts/bundle-artifact.sh`
4. Display artifact to user
5. (Optional) Test the artifact

**Stack**: React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

## Design & Style Guidelines

VERY IMPORTANT: To avoid what is often referred to as "AI slop", avoid using excessive centered layouts, purple gradients, uniform rounded corners, and Inter font.

## Quick Start

### Step 1: Initialize Project

Run the initialization script to create a new React project:
```bash
bash scripts/init-artifact.sh <project-name>
cd <project-name>
```

This creates a fully configured project with:
- ✅ React + TypeScript (via Vite)
- ✅ Tailwind CSS 3.4.1 with shadcn/ui theming system
- ✅ Path aliases (`@/`) configured
- ✅ 40+ shadcn/ui components pre-installed
- ✅ All Radix UI dependencies included
- ✅ Parcel configured for bundling (via .parcelrc)
- ✅ Node 18+ compatibility (auto-detects and pins Vite version)

### Step 2: Develop Your Artifact

To build the artifact, edit the generated files. See **Common Development Tasks** below for guidance.

### Step 3: Bundle to Single HTML File

To bundle the React app into a single HTML artifact:
```bash
bash scripts/bundle-artifact.sh
```

This creates `bundle.html` - a self-contained artifact with all JavaScript, CSS, and dependencies inlined. This file can be directly shared in Claude conversations as an artifact.

**Requirements**: Your project must have an `index.html` in the root directory.

**What the script does**:
- Installs bundling dependencies (parcel, @parcel/config-default, parcel-resolver-tspaths, html-inline)
- Creates `.parcelrc` config with path alias support
- Builds with Parcel (no source maps)
- Inlines all assets into single HTML using html-inline

### Step 4: Share Artifact with User

Finally, share the bundled HTML file in conversation with the user so they can view it as an artifact.

### Step 5: Testing/Visualizing the Artifact (Optional)

Note: This is a completely optional step. Only perform if necessary or requested.

To test/visualize the artifact, use available tools (including other Skills or built-in tools like Playwright or Puppeteer). In general, avoid testing the artifact upfront as it adds latency between the request and when the finished artifact can be seen. Test later, after presenting the artifact, if requested or if issues arise.

## Reference

- **shadcn/ui components**: https://ui.shadcn.com/docs/components
