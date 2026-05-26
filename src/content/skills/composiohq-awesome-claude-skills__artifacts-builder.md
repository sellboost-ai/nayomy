---
name: "artifacts-builder"
description_en: "Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts."
description_tr: "Claude.ai için React, Tailwind CSS ve shadcn/ui gibi modern frontend teknolojilerini kullanarak karmaşık, çok bileşenli HTML artifact'ları oluşturmak için tasarlanmış araç seti. State management, routing veya shadcn/ui bileşenleri gerektiren karmaşık artifact'lar için kullanın - basit tek dosyalı HTML/JSX artifact'ları için değil."
category: "Design"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/artifacts-builder/SKILL.md"
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
  5. (Opsiyonel) Artifact'ı test edin

  **Stack**: React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

  ## Tasarım & Stil Kılavuzu

  ÇOK ÖNEMLİ: Genellikle "AI slop" olarak adlandırılan şeyden kaçınmak için, aşırı ortalanmış layoutlar, mor gradientler, tekdüze yuvarlatılmış köşeler ve Inter fontunu kullanmaktan kaçının.

  ## Hızlı Başlangıç

  ### Adım 1: Projeyi Initialize Edin

  Yeni bir React projesi oluşturmak için initialization scriptini çalıştırın:
  ```bash
  bash scripts/init-artifact.sh <project-name>
  cd <project-name>
  ```

  Bu, şu özelliklere sahip tam yapılandırılmış bir proje oluşturur:
  - ✅ React + TypeScript (Vite aracılığıyla)
  - ✅ Tailwind CSS 3.4.1 shadcn/ui tema sistemiyle
  - ✅ Path alias'ları (`@/`) yapılandırılmış
  - ✅ 40+ shadcn/ui bileşeni önceden yüklenmiş
  - ✅ Tüm Radix UI bağımlılıkları dahil
  - ✅ Bundling için Parcel yapılandırılmış (.parcelrc aracılığıyla)
  - ✅ Node 18+ uyumluluğu (Vite versiyonunu otomatik olarak algılar ve sabitler)

  ### Adım 2: Artifact'ınızı Geliştirin

  Artifact'ı oluşturmak için oluşturulan dosyaları düzenleyin. Rehberlik için aşağıda **Yaygın Geliştirme Görevleri**'ne bakın.

  ### Adım 3: Tek HTML Dosyasına Paketleyin

  React uygulamasını tek bir HTML artifact'ına paketlemek için:
  ```bash
  bash scripts/bundle-artifact.sh
  ```

  Bu, tüm JavaScript, CSS ve bağımlılıkları içinde barındıran kendi kendine yeterli bir artifact olan `bundle.html` dosyası oluşturur. Bu dosya doğrudan Claude sohbetlerinde bir artifact olarak paylaşılabilir.

  **Gereksinimler**: Projenizin kök dizininde bir `index.html` dosyası olması gerekir.

  **Script'in yaptıkları**:
  - Bundling bağımlılıklarını yükler (parcel, @parcel/config-default, parcel-resolver-tspaths, html-inline)
  - Path alias desteği ile `.parcelrc` config'i oluşturur
  - Parcel ile derler (kaynak haritaları olmadan)
  - Tüm asset'leri html-inline kullanarak tek HTML'ye gömülü hale getirir

  ### Adım 4: Artifact'ı Kullanıcı ile Paylaşın

  Son olarak, paketlenmiş HTML dosyasını sohbette kullanıcı ile paylaşın, böylece artifact olarak görüntüleyebilsinler.

  ### Adım 5: Artifact'ı Test Etme/Görselleştirme (Opsiyonel)

  Not: Bu tamamen opsiyonel bir adımdır. Yalnızca gerekli veya istenirse gerçekleştirin.

  Artifact'ı test etmek/görselleştirmek için mevcut araçları kullanın (diğer Skills'ler veya Playwright veya Puppeteer gibi yerleşik araçlar dahil). Genel olarak, istek ile bitmiş artifact'ın görülebilmesi arasında gecikme eklemediği için artifact'ı önceden test etmekten kaçının. Gerekirse veya sorunlar ortaya çıkarsa, artifact'ı sunduktan sonra test edin.

  ## Referans

  - **shadcn/ui bileşenleri**: https://ui.shadcn.com/docs/components
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
