---
name: "ros-ros2"
clean_name: "Ros Ros2"
description: "ROS and ROS2 rules for packages, nodes, launch files, messages, services, actions, simulation, and testing"
description_tr: "ROS ve ROS2 paketleri, node'lar, launch dosyaları, mesajlar, servisler, actionlar, simülasyon ve test işlemleri için kurallar"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/ros-ros2.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/ros-ros2.mdc"
body_length: 2143
file_extension: ".mdc"
body_tr: |-
  # ROS ve ROS2 Kuralları

  ## Paket Yapısı

  - Paketleri bir robot yeteneği veya entegrasyon sınırına odaklanmış şekilde tutun.
  - `package.xml` ve `CMakeLists.txt` veya `setup.py` dosyalarını paket türüyle tutarlı şekilde kullanın.
  - Launch dosyalarını `launch/` altında, konfigürasyonları `config/` altında, mesajları `msg/` altında, servisleri `srv/` altında ve action'ları `action/` altında tutun.
  - Node'lar yeniden kullanılabilir olduğunda, sabit kodlanmış topic isimlerinin yerine namespace'ler ve remapping kullanın.

  ## Node'lar ve Arayüzler

  - Node'ları küçük ve bileşken tutun.
  - Ayarlanabilir davranış için parametreler kullanın; ROS2 parametrelerini açıkça bildirin.
  - Durum akışları için mesajları, hızlı istek/yanıt işlemleri için servisleri ve geri bildirimli uzun süreli hedefler için action'ları tercih edin.
  - Özel arayüzler oluşturmadan önce standart mesaj türlerini kullanın.
  - Topic, servis, action, frame ve parametre sözleşmelerini belgeleyin.

  ## Zamanlama ve Frame'ler

  - Simülasyon veya bag replay önemli olduğunda ROS zamanını kullanın.
  - Frame dönüşümleri için `tf2` kullanın ve frame isimlerini belgeleyin.
  - Callback'leri bloke etmeyin; uzun işleri timer'lara, worker thread'lerine veya action'lara taşıyın.
  - QoS profillerini sensör verisi, yer tutucu konfigürasyon ve güvenilir komut yolları için kasıtlı olarak ayarlayın.

  ## Derleme ve Test

  - `colcon build` kullanın ve paket bağımlılıklarını açık tutun.
  - Workspace tarafından kullanılan linter'ları ve formatlayıcıları çalıştırın.
  - Multi-node davranışı için launch testleri veya entegrasyon testleri ekleyin.
  - Tekrarlanabilir sensör senaryoları için simülasyon, bag dosyaları veya kaydedilmiş fixture'ları kullanın.
  - Eksik frame dönüşümleri, eski sensör verisi ve kullanılamayan servisler gibi hata durumlarını test edin.

  ## Yaygın Hatalar

  - Mutlak yolları sabit kodlamayın; paket paylaşım dizinlerini kullanın.
  - Frame, birim ve zaman damgası varsayımlarını doğrulamadan komut yayınlamayın.
  - Standart bir mesaj uygun olduğunda özel mesajlar oluşturmayın.
  - Publisher'lar ve subscriber'lar arasındaki QoS uyuşmazlıklarını göz ardı etmeyin.
---


# ROS and ROS2 Rules

## Package Structure

- Keep packages focused on one robot capability or integration boundary.
- Use `package.xml` and `CMakeLists.txt` or `setup.py` consistently with the package type.
- Keep launch files under `launch/`, configs under `config/`, messages under `msg/`, services under `srv/`, and actions under `action/`.
- Use namespaces and remapping instead of hardcoded topic names when nodes may be reused.

## Nodes and Interfaces

- Keep nodes small and composable.
- Use parameters for tunable behavior; declare ROS2 parameters explicitly.
- Prefer messages for state streams, services for quick request/response operations, and actions for long-running goals with feedback.
- Use standard message types before creating custom interfaces.
- Document topic, service, action, frame, and parameter contracts.

## Timing and Frames

- Use ROS time when simulation or bag replay matters.
- Use `tf2` for frame transforms and document frame names.
- Avoid blocking callbacks; move long work to timers, worker threads, or actions.
- Set QoS profiles intentionally for sensor data, latched-like config, and reliable command paths.

## Build and Test

- Use `colcon build` and keep package dependencies explicit.
- Run linters and formatters used by the workspace.
- Add launch tests or integration tests for multi-node behavior.
- Use simulation, bags, or recorded fixtures for repeatable sensor scenarios.
- Test failure cases such as missing transforms, stale sensor data, and unavailable services.

## Common Mistakes

- Do not hardcode absolute paths; use package share directories.
- Do not publish commands without validating frame, units, and timestamp assumptions.
- Do not create custom messages when a standard message fits.
- Do not ignore QoS mismatches between publishers and subscribers.
