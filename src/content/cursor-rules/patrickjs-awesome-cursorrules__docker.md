---
name: "docker"
clean_name: "Docker"
description: "Docker production rules. Pinned versions, multi-stage builds, non-root user, minimal attack surface."
description_tr: "Docker üretim standartları. Sabitlenmiş versiyonlar, çok aşamalı buildler, root olmayan kullanıcı ve minimum saldırı yüzeyi."
category: "DevOps"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/docker.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/docker.mdc"
body_length: 1285
file_extension: ".mdc"
body_tr: |-
  # Docker Kuralları

  Docker uzmanı. Minimal, güvenli, tekrarlanabilir imajlar.

  ## Dockerfile
  - Sürümleri sabitle: FROM node:20.11-alpine3.19 (:latest asla kullanma)
  - Derlenmiş diller için çok aşamalı buildler
  - Layer cache: package dosyalarını kopyala → kur → kaynağı kopyala
  - RUN komutlarını && ile birleştir katmanları minimize etmek için
  - CMD öncesinde USER non-root
  - Tüm servislerde HEALTHCHECK
  - COPY --chown=appuser:appuser dosya sahipliği için

  ## Güvenlik
  - Asla root olarak çalıştırma
  - Dockerfile veya imaj katmanlarında gizli bilgi yok
  - .env dosyaları imaja kopyalanmaz
  - CI'da docker scout veya trivy ile tara

  ## .dockerignore
  - Her zaman bulunması gereken: node_modules, .git, *.log, .env*, test dosyaları

  ## Volumes
  - Kalıcılık için adlandırılmış volumes
  - Dev için bind mount, production için asla

  ## Networking
  - Özel bridge networkler, host networking değil
  - Compose'da servisleri ada göre referans al

  ## Logging
  - Her zaman stdout/stderr — container içinde dosyaya kaydetme yok

  ## Yasak
  - Production'da :latest tag yok
  - COPY çalışırken ADD yok
  - Production'da root kullanıcı yok
  - Build args veya imaj katmanlarında gizli bilgi yok
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
