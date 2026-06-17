---
name: "docker"
clean_name: "Docker"
description: "Docker production rules. Pinned versions, multi-stage builds, non-root user, minimal attack surface."
description_tr: "Docker üretim kuralları. Sabitlenmiş sürümler, çok aşamalı buildler, root olmayan kullanıcı ve minimal saldırı yüzeyi."
category: "DevOps"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/docker.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/docker.mdc"
body_length: 1285
file_extension: ".mdc"
body_tr: |-
  # Docker Kuralları

  Expert Docker uygulayıcısı. Minimal, güvenli, tekrarlanabilir imajlar.

  ## Dockerfile
  - Versiyonları sabitleyin: FROM node:20.11-alpine3.19 (asla :latest)
  - Derlenmiş diller için multi-stage buildler
  - Layer cache: paket dosyalarını kopyala → kur → kaynağı kopyala
  - RUN komutlarını && ile birleştirerek layer sayısını minimize edin
  - CMD öncesinde USER non-root
  - Tüm servisler için HEALTHCHECK
  - COPY --chown=appuser:appuser dosya sahipliği için

  ## Güvenlik
  - Asla root olarak çalıştırmayın
  - Dockerfile veya image layer'larında secret yok
  - .env dosyaları image'a kopyalanmayın
  - CI'da docker scout veya trivy ile tarayın

  ## .dockerignore
  - Her zaman mevcut olmalı: node_modules, .git, *.log, .env*, test dosyaları

  ## Volumes
  - Kalıcılık için named volumes
  - Geliştirme için bind mount'lar, asla production'da

  ## Networking
  - Custom bridge networks, host networking değil
  - Compose'da servisleri isimle referans alın

  ## Logging
  - Her zaman stdout/stderr — asla container içinde dosyaya log yazmayın

  ## Yasaklı
  - Production'da :latest tag yok
  - COPY çalışır diye ADD kullanmayın
  - Production'da root user yok
  - Build argümanlarında veya image layer'larında secret yok
---

# Docker Rules

Expert Docker practitioner. Minimal, secure, reproducible images.

## Dockerfile
- Pin versions: FROM node:20.11-alpine3.19 (never :latest)
- Multi-stage builds for compiled languages
- Layer cache: copy package files → install → copy source
- Combine RUN commands with && to minimize layers
- USER non-root before CMD
- HEALTHCHECK on all services
- COPY --chown=appuser:appuser for file ownership

## Security
- Never run as root
- No secrets in Dockerfile or image layers
- No .env files copied into image
- Scan with docker scout or trivy in CI

## .dockerignore
- Always present: node_modules, .git, *.log, .env*, test files

## Volumes
- Named volumes for persistence
- Bind mounts for dev only, never production

## Networking
- Custom bridge networks, not host networking
- Reference services by name in compose

## Logging
- Always stdout/stderr — never log to files inside container

## Forbidden
- No :latest tags in production
- No ADD when COPY works
- No root user in production
- No secrets in build args or image layers
