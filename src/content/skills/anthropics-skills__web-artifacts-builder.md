---
name: "web-artifacts-builder"
description_en: "Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts."
category: "Design"
repo: "anthropics/skills"
stars: 140618
url: "https://github.com/anthropics/skills/blob/HEAD/skills/web-artifacts-builder/SKILL.md"
path: "skills/web-artifacts-builder/SKILL.md"
is_collection: false
body_length: 2695
has_scripts: true
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Web Artifacts Builder

  Güçlü frontend claude.ai artifact'ları oluşturmak için şu adımları izleyin:
  1. `scripts/init-artifact.sh` kullanarak frontend repo'sunu başlatın
  2. Oluşturulan kodu düzenleyerek artifact'ınızı geliştirin
  3. `scripts/bundle-artifact.sh` kullanarak tüm kodu tek bir HTML dosyasında paketleyin
  4. Artifact'ı kullanıcıya gösterin
  5. (İsteğe bağlı) Artifact'ı test edin

  **Stack**: React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

  ## Tasarım & Stil Yönergeleri

  ÇOK ÖNEMLİ: Genellikle "AI slop" olarak adlandırılan şeylerden kaçınmak için, aşırı ortalanmış düzenler, mor gradyanlar, düzgün köşeler ve Inter fontundan kaçının.

  ## Hızlı Başlangıç

  ### Adım 1: Projeyi Başlatın

  Yeni bir React projesi oluşturmak için başlatma scriptini çalıştırın:
  ```bash
  bash scripts/init-artifact.sh <project-name>
  cd <project-name>
  ```

  Bu, tamamen yapılandırılmış bir proje oluşturur:
  - ✅ React + TypeScript (Vite aracılığıyla)
  - ✅ Tailwind CSS 3.4.1 shadcn/ui tema sistemiyle
  - ✅ Path aliases (`@/`) yapılandırılmış
  - ✅ 40+ shadcn/ui component'i önceden yüklü
  - ✅ Tüm Radix UI bağımlılıkları dahil
  - ✅ Bundling için Parcel yapılandırılmış (.parcelrc aracılığıyla)
  - ✅ Node 18+ uyumluluğu (Vite sürümünü otomatik algılar ve sabitleri)

  ### Adım 2: Artifact'ınızı Geliştirin

  Artifact'ı oluşturmak için oluşturulan dosyaları düzenleyin. Rehberlik için aşağıdaki **Yaygın Geliştirme Görevleri**ne bakın.

  ### Adım 3: Tek HTML Dosyasına Paketleyin

  React uygulamasını tek bir HTML artifact'ına paketlemek için:
  ```bash
  bash scripts/bundle-artifact.sh
  ```

  Bu, tüm JavaScript, CSS ve bağımlılıkları satır içine yerleştirilmiş kendi kendine yeterli bir artifact olan `bundle.html` oluşturur. Bu dosya doğrudan Claude konuşmalarında artifact olarak paylaşılabilir.

  **Gereksinimler**: Projenizin kök dizininde bir `index.html` dosyası olması gerekir.

  **Script'in yaptığı şeyler**:
  - Bundling bağımlılıklarını yükler (parcel, @parcel/config-default, parcel-resolver-tspaths, html-inline)
  - Path alias desteğiyle `.parcelrc` config'i oluşturur
  - Parcel ile oluşturur (kaynak haritası yok)
  - Tüm varlıkları html-inline kullanarak tek HTML'e satır içine yerleştirir

  ### Adım 4: Artifact'ı Kullanıcıyla Paylaşın

  Son olarak, paketlenmiş HTML dosyasını konuşmada kullanıcıyla paylaşın böylece onu artifact olarak görüntüleyebilsin.

  ### Adım 5: Artifact'ı Test Etme/Görselleştirme (İsteğe bağlı)

  Not: Bu tamamen isteğe bağlı bir adımdır. Yalnızca gerekli olursa veya istenirse gerçekleştirin.

  Artifact'ı test etmek/görselleştirmek için mevcut araçları kullanın (diğer Skills veya Playwright veya Puppeteer gibi yerleşik araçlar dahil). Genel olarak, istek ile bitmiş artifact'ın görülebilmesi arasındaki gecikmeyi artırdığı için artifact'ı baştan itibaren test etmekten kaçının. Gerekirse veya sorunlar ortaya çıkarsa artifact'ı sunulduktan sonra test edin.

  ## Referans

  - **shadcn/ui components**: https://ui.shadcn.com/docs/components
---

# Web Artifacts Builder

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
