---
name: "stack-chan/stack-chan"
description: "A JavaScript-driven M5Stack-embedded super-kawaii robot with MCP server functionality for AI-controlled interactions and emotions."
description_tr: "JavaScript ile çalışan, MCP server işlevselliğine sahip M5Stack tabanlı süper sevimli bir robot; yapay zeka tarafından kontrol edilen etkileşimler ve duygular için tasarlanmıştır."
category: "Embedded System"
repo: "stack-chan/stack-chan"
stars: 1493
url: "https://github.com/stack-chan/stack-chan"
body_length: 2773
license: "Apache-2.0"
language: "TypeScript"
body_tr: |-
  # Stack-chan

  [![Build Stack-chan Firmware](https://github.com/stack-chan/stack-chan/actions/workflows/build.yml/badge.svg)](https://github.com/stack-chan/stack-chan/actions/workflows/build.yml)
  [![Discord server invitation](https://img.shields.io/badge/Discord-Join%20server-5865F2?logo=discord&logoColor=white)](https://discord.gg/eGhd9adnBm)

  [日本語](./README_ja.md)

  ![stackchan](https://raw.githubusercontent.com/stack-chan/stack-chan/HEAD/docs/images/stackchan.gif)

  Stack-chan, M5Stack'e entegre edilmiş JavaScript tarafından yönlendirilen süper-kawaii bir robot.

  * Video (İngilizce altyazılarla): https://youtu.be/fZb_mF08xV0
  * Resmi hashtag: [`#stackchan` | `#ｽﾀｯｸﾁｬﾝ` (JP)](https://twitter.com/search?q=%23stackchan%20OR%20%23%EF%BD%BD%EF%BE%80%EF%BD%AF%EF%BD%B8%EF%BE%81%EF%BD%AC%EF%BE%9D).

  ## Özellikler

  * :neutral_face:     Sevimli yüz göster
  * :smile:            İfade (Mutlu, Kızgın, Üzgün, vb.)
  * :smiley_cat:       Yüzü özelleştir
  * :eyes:             Bakış/Nazar/Göz teması
  * :speech_balloon:   Şeyler söyle
  * :bulb:             M5Units eklentileri
  * :cyclone:          Serial (TTL) / PWM servo kontrolü
  * :game_die:         Kendi uygulamalarını oluştur

  ## İçerik

  Bu repository robot'un tüm bileşenlerini içerir.

  * __firmware__ : Firmware'in kaynak kodları.
  * __case__ : Stereolitografi (STL) kasa dosyaları.
  * __schematics__ : Şematikler ve board layout verileri.

  ## Kurulum

  ### Board'u Birleştir

  * Bkz. [schematics/README.md](./schematics/README.md) ve [case/README.md](./case/README.md)
  * VEYA Önceden monte edilmiş bir modül alabilirsiniz (YAKINDA GELECEK)

  ### Firmware'i M5Stack'e Yükle

  * Bkz. [firmware/README.md](./firmware/README.md)

  ## Geliştirme

  Katkıda bulunanlar için yapılandırma ve pull request beklentileri için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına bakın.

  Tipik firmware iş akışı:

  ```bash
  cd firmware
  npm run setup
  npm run doctor
  npm run test
  npm run build
  ```

  `web/flash` ve `web/schematics` altında oluşturulan web varlıkları, GitHub Actions tarafından `gh-pages` branch'ından yayınlanır. Bunları el ile bakımlanan kaynak dosyalar değil, deployment çıktıları olarak düşünün.

  ## Planlama

  * Geliştirme yol haritası: [docs/ROADMAP.md](./docs/ROADMAP.md)

  ## Katkı

  __Özellik istekleri/Hata raporları__ son derece hoş karşılanır! Yayınlamak için [issues](https://github.com/stack-chan/stack-chan/issues) sayfasına bakın.

  __Sponsor olmak ister misin__? Benim için büyük bir onur olurdu. Lütfen [sponsor](https://github.com/sponsors/meganetaaan/) sayfamı ziyaret edin.

  ## Lisans

  Bu repository'nin kaynakları Apache sürüm 2.0 lisansı altında dağıtılır.
  Bkz. [LICENSE](./LICENSE).

  ## BibTeX

  ```bibtex
  @misc{stackchan,
    author       = {Shinya Ishikawa and the Stack-chan community},
    title        = {Stack-chan: A JavaScript-driven Super-kawaii Robot},
    year         = {2021},
    howpublished = {\url{https://github.com/stack-chan/stack-chan}},
    note         = {Open-source hardware and software.},
  }
  ```
---

# Stack-chan

[![Build Stack-chan Firmware](https://github.com/stack-chan/stack-chan/actions/workflows/build.yml/badge.svg)](https://github.com/stack-chan/stack-chan/actions/workflows/build.yml)
[![Discord server invitation](https://img.shields.io/badge/Discord-Join%20server-5865F2?logo=discord&logoColor=white)](https://discord.gg/eGhd9adnBm)

[日本語](./README_ja.md)

![stackchan](https://raw.githubusercontent.com/stack-chan/stack-chan/HEAD/docs/images/stackchan.gif)

Stack-chan is a JavaScript-driven M5Stack-embedded super-kawaii robot.

* Video (with English subtitles): https://youtu.be/fZb_mF08xV0
* Official hashtag: [`#stackchan` | `#ｽﾀｯｸﾁｬﾝ` (JP)](https://twitter.com/search?q=%23stackchan%20OR%20%23%EF%BD%BD%EF%BE%80%EF%BD%AF%EF%BD%B8%EF%BE%81%EF%BD%AC%EF%BE%9D).

## Features

* :neutral_face:     Show cute face
* :smile:            Expression(Happy, Angry, Sad etc.)
* :smiley_cat:       Customize face
* :eyes:             Glance/stare/gaze
* :speech_balloon:   Say things
* :bulb:             Addon M5Units
* :cyclone:          Drive Serial(TTL)/PWM servos
* :game_die:         Make applications on your own

## Contents

This repository includes all the component of the robot.

* __firmware__ : Source codes of the firmware.
* __case__ : Stereolithography(STL) of the case.
* __schematics__ : Schematics and board layout data.

## Installation

### Assemble board

* See [schematics/README.md](./schematics/README.md) and [case/README.md](./case/README.md)
* OR You can get a pre-assembled module(COMING SOON)

### Flash firmware to M5Stack

* See [firmware/README.md](./firmware/README.md)

## Development

For contributor-oriented setup and pull request expectations, see [CONTRIBUTING.md](./CONTRIBUTING.md).

Typical firmware workflow:

```bash
cd firmware
npm run setup
npm run doctor
npm run test
npm run build
```

Generated web assets under `web/flash` and `web/schematics` are published from the `gh-pages` branch by GitHub Actions. Treat them as deployment outputs, not hand-maintained source files.

## Planning

* Development roadmap: [docs/ROADMAP.md](./docs/ROADMAP.md)

## Contribution

__Feature requests/Bug reports__ are extremely welcome! See [issues](https://github.com/stack-chan/stack-chan/issues) page to post some.

__Wanna be a sponsor__? It would be my great honor. please visit my [sponsor](https://github.com/sponsors/meganetaaan/) page.

## License

Resources of this repository are distributed under Apache version 2.0 license.
See [LICENSE](./LICENSE).

## BibTeX

```bibtex
@misc{stackchan,
  author       = {Shinya Ishikawa and the Stack-chan community},
  title        = {Stack-chan: A JavaScript-driven Super-kawaii Robot},
  year         = {2021},
  howpublished = {\url{https://github.com/stack-chan/stack-chan}},
  note         = {Open-source hardware and software.},
}
```
