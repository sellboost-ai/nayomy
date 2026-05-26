---
name: "netdata/netdata"
description: "Discovery, exploration, reporting and root cause analysis using all observability data, including metrics, logs, systems, containers, processes, and network connections."
description_tr: "Metrikler, loglar, sistemler, konteynerler, süreçler ve ağ bağlantıları dahil olmak üzere tüm observability verilerini kullanarak keşif, inceleme, raporlama ve kök neden analizi gerçekleştirin."
category: "Monitoring"
repo: "netdata/netdata"
stars: 78943
url: "https://github.com/netdata/netdata"
body_length: 26186
license: "GPL-3.0"
language: "C"
homepage: "https://www.netdata.cloud"
body_tr: |-
  <p align="center">
  <a href="https://www.netdata.cloud#gh-light-mode-only">
    
  </a>
  <a href="https://www.netdata.cloud#gh-dark-mode-only">
    
  </a>
  </p>
  <h3 align="center">Altyapınız için X-Ray Görüşü!</h3>
  <h4 align="center">Her Metrik, Her Saniye. Saçmalık Yok.</h4>

  <br />
  <p align="center">
    <a href="https://github.com/netdata/netdata/"></a>
    <br />
    <a href="https://app.netdata.cloud/spaces/netdata-demo?utm_campaign=github_readme_demo_badge"></a>
    <a href="https://github.com/netdata/netdata/releases/latest"></a>
    <a href="https://github.com/netdata/netdata-nightlies/releases/latest"></a>
    <br/>
    <a href="https://community.netdata.cloud"></a>
    <a href="https://github.com/netdata/netdata/discussions"></a>
    <br/>
    <a href="https://bestpractices.coreinfrastructure.org/projects/2231"></a>
    <a href="https://scan.coverity.com/projects/netdata-netdata?tab=overview"></a>
  </p>

  <p align="center">
    <a href="https://registry.my-netdata.io/#menu_netdata_submenu_registry"></a>
    <a href="https://registry.my-netdata.io/#menu_netdata_submenu_registry"></a>
    <a href="https://registry.my-netdata.io/#menu_netdata_submenu_registry"></a>
    <a href="https://hub.docker.com/r/netdata/netdata"></a>
  </p>
  <p align="center"><b><a href="https://www.netdata.cloud">Ana Sayfamızı</a> ziyaret edin</b></p>

  <hr class="solid">

  MENU: **[KİM OLDUĞUMUZ](#who-we-are)** | **[ANA ÖZELLİKLER](#key-features)** | **[BAŞLARKEN](#getting-started)** | **[NASIL ÇALIŞIR](#how-it-works)** | **[SSS](#faq)** | **[DÖKÜMANLAR](#book-documentation)** | **[TOPLULUK](#tada-community)** | **[KATKIDA BULUN](#pray-contribute)** | **[LİSANS](#scroll-license)**


  > [!WARNING]
  > İnsanlar **Netdata'ya bağımlı hale gelir.**
  > Sistemlerinizde bir kez kullanmaya başladığınızda, *geri dönüş yoktur.*

  [![Platforms](https://img.shields.io/badge/Platforms-Linux%20%7C%20macOS%20%7C%20FreeBSD%20%7C%20Windows-blue)]()

  ---

  ## KİM OLDUĞUMUZ

  Netdata açık kaynaklı, gerçek zamanlı bir altyapı izleme platformudur. Tüm altyapınızda izleyin, algılayın ve harekete geçin.

  **Temel Avantajları:**

  * **Anlık İçgörüler** – Netdata ile saniye bazında metriklere ve görselleştirmelere erişebilirsiniz.
  * **Sıfır Konfigürasyon** – Karmaşık kurulum olmadan hemen dağıtabilirsiniz.
  * **ML Destekli** – Anomalileri algılayabilir, sorunları tahmin edebilir ve analizi otomatikleştirebilirsiniz.
  * **Verimli** – Minimum kaynak kullanımı ve maksimum ölçeklenebilirlikle izleyebilirsiniz.
  * **Güvenli ve Dağıtık** – Verinizi yerel tutabilir, merkezi toplama yapmanıza gerek yoktur.

  Netdata ile gerçek zamanlı, saniye bazında güncellemeler alırsınız. **Bir bakışta net içgörüler**, karmaşıklık yok.

  <details>
    <summary><strong>Tüm kahramanların harika bir köken hikayesi vardır. Keşfetmek için tıklayın.</strong></summary>
    <br/>

  2013'te Costa Tsaousis'in COO olduğu şirkette, bulut tabanlı işlemlerinin önemli bir yüzdesi sessizce başarısız oldu ve iş performansını ciddi şekilde etkiledi.

  Costa ve ekibi o zamanlar mevcut olan her sorun giderme aracını denedi. Hiçbiri kök nedeni belirleyemedi. Costa daha sonra yazdığı gibi:

  "*İzleme sistemlerinin çok az metrik sağlaması ve bu kadar düşük çözünürlükte, bu kadar kötü ölçeklenmesi ve çalıştırması için bu kadar para gerektirmesi inanılmaz.*"

  Hayal kırıklığına uğrayan Costa, sıfırdan kendi izleme aracını inşa etmeye karar verdi.

  Bu karar sayısız geç gecelere ve hafta sonlarına neden oldu. Aynı zamanda altyapı izleme ve sorun gidermenin nasıl yapıldığında temel bir paradigma değişimi başlattı, hem yöntem hem de maliyet açısından.
  </details>

  ### En Enerji Verimli İzleme Aracı

  <p align="center">
  <a href="https://www.ivanomalavolta.com/files/papers/ICSOC_2023.pdf#gh-dark-mode-only">
    
  </a>
  <a href="https://www.ivanomalavolta.com/files/papers/ICSOC_2023.pdf#gh-light-mode-only">
    
  </a>
  </p>

  [Amsterdam Üniversitesi çalışmasına](https://www.ivanomalavolta.com/files/papers/ICSOC_2023.pdf) göre, Netdata Docker tabanlı sistemleri izlemek için en enerji verimli araçtır. Çalışma ayrıca Netdata'nın diğer izleme çözümlerine kıyasla CPU kullanımı, RAM kullanımı ve yürütme süresi açısından üstün olduğunu göstermektedir.

  ---

  ## Ana Özellikler

  | Özellik                    | Açıklama                               | Onu Benzersiz Yapan Şey                                     |
  |----------------------------|-------------------------------------------|----------------------------------------------------------|
  | **Gerçek Zamanlı**              | Saniye bazında veri toplama ve işleme | Bir çarpışmada çalışır – tıklayın ve sonuçları anında görün        |
  | **Sıfır Konfigürasyon**     | Otomatik algılama ve bulma         | Üzerinde çalıştığı düğümlerdeki her şeyi otomatik olarak bulur           |
  | **ML Destekli**             | Denetlemsiz anomali tespiti            | Her metrik için birden fazla ML modeli eğitir        |
  | **Uzun Vadeli Alıkoyma**    | Yüksek performanslı depolama                  | ~0.5 bayt/örnek arşivleme için katmanlı depolama ile       |
  | **Gelişmiş Görselleştirme** | Zengin, etkileşimli gösterge panelleri              | Sorgu dili olmadan verileri dilimleyin ve doğrayın               |
  | **Aşırı Ölçeklenebilirlik**    | Yerel yatay ölçekleme                 | Milyonlarca örnek/s ile Ana-Çocuk merkezileştirmesi |
  | **Tam Görünürlük**    | Altyapıdan uygulamalara       | İşlemleri basitleştirir ve siloları ortadan kaldırır               |
  | **Kenar Tabanlı**             | Tesislerinizde işleme               | Veriyi merkezileştirmek yerine kodu dağıtır            |

  > [!NOTE]  
  > Netdata'yı Prometheus ile ölçmek ister misiniz?
  > [Tam karşılaştırmayı](https://www.netdata.cloud/blog/netdata-vs-prometheus-2025/) keşfedin.

  ---

  ## Netdata Ekosistemi

  Bu üç parçalı mimari, tek düğümlerden karmaşık çok bulut ortamlarına kadar ölçeklendirmenizi sağlar:

  | Bileşen         | Açıklama                                                                                                                                                 | Lisans                                         |
  |-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
  | **Netdata Agent** | • Temel izleme motoru<br>• Toplama, depolama, ML, uyarılar, dışa aktarım işlemleri<br>• Sunucular, bulut, K8s, IoT'de çalışır<br>• Sıfır üretim etkisi            | [GPL v3+](https://www.gnu.org/licenses/gpl-3.0) |
  | **Netdata Cloud** | • Kurumsal özellikler<br>• Kullanıcı yönetimi, RBAC, yatay ölçekleme<br>• Merkezi uyarılar<br>• Ücretsiz topluluk katmanı<br>• Metrik depolamada merkezileştirme yok |                                                 |
  | **Netdata UI**    | • Gösterge panelleri ve görselleştirmeler<br>• Kullanmak ücretsiz<br>• Standart paketlerde dahil<br>• CDN aracılığıyla en son sürüm                                             | [NCUL1](https://app.netdata.cloud/LICENSE.txt)  |

  ## Neleri İzleyebilirsiniz

  Netdata ile platformlar arasında tüm bu bileşenleri izleyebilirsiniz:

  |                                                                                                   Bileşen |              Linux               | FreeBSD | macOS |                      Windows                      |
  |------------------------------------------------------------------------------------------------------------:|:--------------------------------:|:-------:|:-----:|:-------------------------------------------------:|
  |                             **Sistem Kaynakları**<small><br/>CPU, Bellek ve sistem paylaşılan kaynakları</small> |               Tam               |   Evet   |  Evet  |                        Evet                        |
  |                                **Depolama**<small><br/>Diskler, Bağlama noktaları, Dosya sistemleri, RAID dizileri</small> |               Tam               |   Evet   |  Evet  |                        Evet                        |
  |                                 **Ağ**<small><br/>Ağ Arayüzleri, Protokoller, Güvenlik Duvarı, vb.</small> |               Tam               |   Evet   |  Evet  |                        Evet                        |
  |                        **Donanım ve Sensörler**<small><br/>Fanlar, Sıcaklıklar, Denetleyiciler, GPU'lar, vb.</small> |               Tam               |  Kısmen   | Kısmen  |                       Kısmen                        |
  |                                       **İ/S Hizmetleri**<small><br/>Kaynaklar, Performans ve Durum</small> | Evet<small><br/>`systemd`</small> |    -    |   -   |                         -                         |
  |                                      **Süreçler**<small><br/>Kaynaklar, Performans, OOM, vb.</small> |               Evet                |   Evet   |  Evet  |                        Evet                        |
  |                                                                             Sistem ve Uygulama **Günlükleri** | Evet<small><br/>`systemd`-journal |    -    |   -   | Evet<small><br/>`Windows Event Log`, `ETW`</small> |
  |                                 **Ağ Bağlantıları**<small><br/>PID başına canlı TCP ve UDP soketleri</small> |               Evet                |    -    |   -   |                         -                         |
  |                               **Konteynerler**<small><br/>Docker/containerd, LXC/LXD, Kubernetes, vb.</small> |               Evet                |    -    |   -   |                         -                         |
  |                                 **VM'ler** (ana bilgisayardan)<small><br/>KVM, qemu, libvirt, Proxmox, vb.</small> | Evet<small><br/>`cgroups`</small> |    -    |   -   |         Evet<small><br/>`Hyper-V`</small>          |
  |                       **Sentetik Denetimler**<small><br/>API'ları, TCP bağlantı noktalarını, Ping, Sertifikaları test edin, vb.</small> |               Evet                |   Evet   |  Evet  |                        Evet                        |
  | **Paketlenmiş Uygulamalar**<small><br/>nginx, apache, postgres, redis, mongodb,<br/>ve yüzlerce daha fazlası</small> |               Evet                |   Evet   |  Evet  |                        Evet                        |
  |                              **Bulut Sağlayıcı Altyapısı**<small><br/>AWS, GCP, Azure ve daha fazlası</small> |               Evet                |   Evet   |  Evet  |                        Evet                        |
  |                       **Özel Uygulamalar**<small><br/>OpenMetrics, StatsD ve yakında OpenTelemetry</small> |               Evet                |   Evet   |  Evet  |                        Evet                        |

  Linux'ta, hataları sürekli olarak izleyebileceğiniz tüm çekirdek özelliklerini ve donanım sensörlerini Intel/AMD/Nvidia GPU'ları, PCI AER, RAM EDAC, IPMI, S.M.A.R.T, Intel RAPL, NVMe, fanlar, güç kaynakları ve voltaj okumalarını içererek izleyebilirsiniz.

  ---

  ## BAŞLARKEN

  Netdata'yı tüm ana işletim sistemlerine yükleyebilirsiniz. Başlamak için:

  ### 1. Netdata'yı Yükleyin

  Platformunuzu seçin ve kurulum kılavuzunu izleyin:

  * [Linux Kurulumu](https://learn.netdata.cloud/docs/installing/one-line-installer-for-all-linux-systems)
  * [macOS](https://learn.netdata.cloud/docs/installing/macos)
  * [FreeBSD](https://learn.netdata.cloud/docs/installing/freebsd)
  * [Windows](https://learn.netdata.cloud/docs/netdata-agent/installation/windows)
  * [Docker Kılavuzu](/packaging/docker/README.md)
  * [Kubernetes Kurulumu](https://learn.netdata.cloud/docs/installation/install-on-specific-environments/kubernetes)

  > [!NOTE]
  > Netdata UI'ye `http://localhost:19999` adresinden erişebilirsiniz (veya uzak ise `http://NODE:19999`).

  ### 2. Toplayıcıları Yapılandırın

  Netdata çoğu metriği otomatik olarak bulur, ancak bazı toplayıcıları manuel olarak yapılandırabilirsiniz:

  * [Tüm toplayıcılar](https://learn.netdata.cloud/docs/data-collection/)
  * [SNMP izlemesi](https://learn.netdata.cloud/docs/data-collection/monitor-anything/networking/snmp)

  ### 3. Uyarıları Yapılandırın

  Yüzlerce yerleşik uyarı kullanabilir ve bunlarla entegre olabilirsiniz:

  `email`, `Slack`, `Telegram`, `PagerDuty`, `Discord`, `Microsoft Teams` ve daha fazlası.

  > [!NOTE]  
  > E-posta uyarıları, yapılandırılmış bir MTA varsa varsayılan olarak çalışır.

  ### 4. Ana Bilgisayarları Yapılandırın

  Netdata Ana Bilgisayarları ile gösterge panellerini, uyarıları ve depolamayı merkezileştirebilirsiniz:

  * [Akış Başvurusu](https://learn.netdata.cloud/docs/streaming/streaming-configuration-reference)

  > [!NOTE]  
  > Netdata Ana Bilgisayarlarını merkezi gösterge panelleri, daha uzun alıkoyma ve uyarı yapılandırması için kullanabilirsiniz.

  ### 5. Netdata Cloud'a Bağlanın

  [Netdata Cloud'a giriş yapın](https://app.netdata.cloud/sign-in) ve düğümlerinizi bağlayın:

  * Her yerden erişim
  * Yatay ölçeklenebilirlik ve çok düğümlü gösterge panelleri
  * Uyarılar ve veri toplama için UI yapılandırması
  * Rol tabanlı erişim denetimi
  * Ücretsiz katman mevcuttur

  > [!NOTE]  
  > Netdata Cloud isteğe bağlıdır. Verileriniz altyapınızda kalır.

  ## Canlı Demo Siteleri

  <p align="center">
    <b>Netdata'yı iş başında görün</b><br/>
    <a href="https://frankfurt.netdata.rocks"><b>FRANKFURT</b></a> |
    <a href="https://newyork.netdata.rocks"><b>NEWYORK</b></a> |
    <a href="https://atlanta.netdata.rocks"><b>ATLANTA</b></a> |
    <a href="https://sanfrancisco.netdata.rocks"><b>SANFRANCISCO</b></a> |
    <a href="https://toronto.netdata.rocks"><b>TORONTO</b></a> |
    <a href="https://singapore.netdata.rocks"><b>SINGAPORE</b></a> |
    <a href="https://bangalore.netdata.rocks"><b>BANGALORE</b></a>
    <br/>
    <i>Bu demo kümeleri varsayılan yapılandırma ile çalışır ve gerçek izleme verilerini gösterir.</i>
    <br/>
    <i>En iyi performans için size en yakın örneği seçin.</i>
  </p>

  ---

  ## NASIL ÇALIŞIR

  Netdata ile metrik toplama, işleme ve görselleştirme için modüler bir pipeline çalıştırabilirsiniz.

  ```mermaid
  flowchart TB
    A[Netdata Agent]:::mainNode
    A1(Toplama):::green --> A
    A2(Depolama):::green --> A
    A3(Öğrenme):::green --> A
    A4(Algılama):::green --> A
    A5(Denetim):::green --> A
    A6(Akış):::green --> A
    A7(Arşiv):::green --> A
    A8(Sorgu):::green --> A
    A9(Puanlama):::green --> A

    classDef green fill:#bbf3bb,stroke:#333,stroke-width:1px,color:#000
    classDef mainNode fill:#f0f0f0,stroke:#333,stroke-width:1px,color:#333
  ```

  Her Agent ile şunları yapabilirsiniz:

  1. **Toplama** – Sistemler, konteynerler, uygulamalar, günlükler, API'lar ve sentetik denetimlerden metrik toplayın.
  2. **Depolama** – Metrikleri yüksek verimli, katmanlı bir zaman serisi veritabanına kaydedin.
  3. **Öğrenme** – Son davranışı kullanarak her metrik için ML modellerini eğitin.
  4. **Algılama** – Eğitilmiş ML modellerini kullanarak anomalileri belirleyin.
  5. **Denetim** – Metrikleri önceden ayarlanmış veya özel uyarı kurallarına göre değerlendirin.
  6. **Akış** – Metrikleri gerçek zamanlı olarak Netdata Ana Bilgisayarlarına gönderin.
  7. **Arşiv** – Metrikleri Prometheus, InfluxDB, OpenTSDB, Graphite ve diğerlerine dışa aktarın.
  8. **Sorgu** – Gösterge panelleri veya üçüncü taraf araçlar için API aracılığıyla metriklere erişin.
  9. **Puanlama** – Metriklerdeki desenleri ve korelasyonları bulmak için bir puanlama motoru kullanın.

  > [!NOTE]  
  > Daha fazla bilgi: [Netdata mimarisi](https://learn.netdata.cloud/docs/netdata-agent/#distributed-observability-pipeline)

  ## Agent Yetenekleri

  Netdata Agent ile kutudan çıkış durumunda bu temel yetenekleri kullanabilirsiniz:

  | Yetenek                   | Açıklama                                                                                                                                   |
  |------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
  | **Kapsamlı Toplama** | • 800+ entegrasyonu<br>• Sistemler, konteynerler, VM'ler, donanım sensörleri<br>• OpenMetrics, StatsD ve günlükler<br>• OpenTelemetry desteği yakında |
  | **Performans ve Doğruluk**  | • Saniye bazında toplama<br>• 1 saniye gecikme ile gerçek zamanlı görselleştirme<br>• Yüksek çözünürlüklü metrikler                                       |
  | **Kenar Tabanlı ML**            | • Kenarında eğitilmiş ML modelleri<br>• Metrik başına otomatik anomali tespiti<br>• Tarihsel davranışa dayalı desen tanıma             |
  | **Gelişmiş Günlük Yönetimi**  | • Doğrudan systemd-journald ve Windows Event Log entegrasyonu<br>• Kenarında günlükleri işleyin<br>• Zengin günlük görselleştirmesi                         |
  | **Gözlemlenebilirlik Pipeline**   | • Ana-Çocuk ilişkileri<br>• Esnek merkezileştirme<br>• Çok düzeyli çoğaltma ve alıkoyma                                          |
  | **Otomatik Görselleştirme**    | • NIDL veri modeli<br>• Otomatik olarak oluşturulan gösterge panelleri<br>• Sorgu dili gerekmez                                                                |
  | **Akıllı Uyarma**           | • Önceden yapılandırılmış uyarılar<br>• Birden fazla bildirim yöntemi<br>• Proaktif algılama                                                           |
  | **Düşük Bakım**          | • Otomatik algılama<br>• Sıfır dokunuş ML<br>• Kolay ölçeklenebilirlik<br>• CI/CD dostu                                                                 |
  | **Açık ve Genişletilebilir**        | • Modüler mimari<br>• Özelleştirmesi kolay<br>• Mevcut araçlarla entegrasyon                                                             |

  ---

  ## CNCF Üyeliği

  <p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/cncf/artwork/master/other/cncf/horizontal/white/cncf-white.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/cncf/artwork/master/other/cncf/horizontal/color/cncf-color.svg">
      
    </picture>
    <br />
    Netdata aktif olarak destekler ve Cloud Native Computing Foundation (CNCF) üyesidir.<br />
    <a href="https://landscape.cncf.io/?item=observability-and-analysis--observability--netdata">CNCF landscape</a>'teki en yıldızlı projelerden biridir.
  </p>

  ---

  ## SSS

  <details>
  <summary><strong>Netdata güvenli midir?</strong></summary>
  <br/>

  Evet. Netdata [OpenSSF en iyi uygulamalarını](https://bestpractices.coreinfrastructure.org/en/projects/2231) takip eder, güvenlik öncelikli bir tasarıma sahiptir ve topluluk tarafından düzenli olarak denetlenir.

  * [Güvenlik tasarımı](https://learn.netdata.cloud/docs/security-and-privacy-design)
  * [Güvenlik politikaları ve önerileri](https://github.com/netdata/netdata/security)

  </details>

  <details>
  <summary><strong>Netdata çok kaynak kullanır mı?</strong></summary>
  <br/>

  Hayır. ML ve saniye bazında metriklerle bile Netdata minimum kaynaklar kullanır.

  * Üretim sistemlerinde varsayılan olarak ~%5 CPU ve 150MiB RAM
  * ML ve uyarılar devre dışı bırakıldığında ve geçici depolama kullanılırken <1% CPU ve ~100MiB RAM
  * Ana Bilgisayarlar uygun donanımla saniyede milyonlarca metriğe ölçeklenir

  > Kaynak kullanımını incelemek için gösterge panelindeki **Netdata İzleme** bölümünü kullanabilirsiniz.

  </details>

  <details>
  <summary><strong>Ne kadar veri alıkoyma mümkün?</strong></summary>
  <br/>

  Diskiniz kadar.

  Netdata ile katmanlı alıkoyma kullanabilirsiniz:

  * Katman 0: saniye çözünürlüğü
  * Katman 1: dakika çözünürlüğü
  * Katman 2: saat çözünürlüğü

  Bunlar yakınlaştırma düzeyine göre otomatik olarak sorgulanır.
  </details>

  <details>
  <summary><strong>Netdata birçok sunucuya ölçeklenebilir mi?</strong></summary>
  <br/>

  Evet. Netdata ile:

  * Birçok Agent ile yatay ölçekleme yapabilir
  * Güçlü Ana Bilgisayarlar ile dikey ölçekleme yapabilir
  * Netdata Cloud aracılığıyla sonsuz ölçekleme yapabilir

  > Netdata Cloud'u birçok bağımsız altyapıyı bir mantıksal görünüme birleştirmek için kullanabilirsiniz.

  </details>

  <details>
  <summary><strong>Disk I/O endişe kaynağı mı?</strong></summary>
  <br/>

  Hayır. Netdata disk kullanımını en aza indirir:

  * Metrikler her 17 dakikada bir diske boşaltılır, eşit şekilde dağıtılır
  * Doğrudan I/O ve sıkıştırma (ZSTD) kullanır
  * Tamamen RAM'de çalışabilir veya bir Ana Bilgisayara akış yapabilir

  > Disk yazımı olmamak için `alloc` veya `ram` modunu kullanabilirsiniz.

  </details>

  <details>
  <summary><strong>Netdata, Prometheus + Grafana'dan ne kadar farklıdır?</strong></summary>
  <br/>

  Netdata ile sadece araçlar değil, tamamen bir izleme çözümü alırsınız.

  * Manuel kurulum veya gösterge panelleri gerekmez
  * Yerleşik ML, uyarılar, gösterge panelleri ve korelasyonlar
  * Daha verimli ve dağıtması daha kolay

  > [Performans karşılaştırması](https://blog.netdata.cloud/netdata-vs-prometheus-performance-analysis/)

  </details>

  <details>
  <summary><strong>Netdata, ticari SaaS araçlarından ne kadar farklıdır?</strong></summary>
  <br/>

  Netdata ile tüm metrikleri altyapınızda depolayabilirsiniz – örnekleme yok, toplaştırma yok, kayıp yok.

  * Varsayılan olarak yüksek çözünürlüklü metrikler
  * Paylaşılan modeller değil, metrik başına ML
  * Fiyat patlaması olmadan sınırsız ölçeklenebilirlik

  </details>

  <details>
  <summary><strong>Netdata, Nagios, Zabbix, vb. ile yan yana çalışabilir mi?</strong></summary>
  <br/>

  Evet. Netdata'yı geleneksel araçlarla birlikte kullanabilirsiniz.

  Netdata ile:

  * Gerçek zamanlı, yüksek çözünürlüklü izleme alırsınız
  * Sıfır konfigürasyon ve otomatik olarak oluşturulan gösterge panelleri
  * Anomali tespiti ve gelişmiş görselleştirme

  </details>

  <details>
  <summary><strong>
---

<p align="center">
<a href="https://www.netdata.cloud#gh-light-mode-only">
  
</a>
<a href="https://www.netdata.cloud#gh-dark-mode-only">
  
</a>
</p>
<h3 align="center">X-Ray Vision for your infrastructure!</h3>
<h4 align="center">Every Metric, Every Second. No BS.</h4>

<br />
<p align="center">
  <a href="https://github.com/netdata/netdata/"></a>
  <br />
  <a href="https://app.netdata.cloud/spaces/netdata-demo?utm_campaign=github_readme_demo_badge"></a>
  <a href="https://github.com/netdata/netdata/releases/latest"></a>
  <a href="https://github.com/netdata/netdata-nightlies/releases/latest"></a>
  <br/>
  <a href="https://community.netdata.cloud"></a>
  <a href="https://github.com/netdata/netdata/discussions"></a>
  <br/>
  <a href="https://bestpractices.coreinfrastructure.org/projects/2231"></a>
  <a href="https://scan.coverity.com/projects/netdata-netdata?tab=overview"></a>
</p>

<p align="center">
  <a href="https://registry.my-netdata.io/#menu_netdata_submenu_registry"></a>
  <a href="https://registry.my-netdata.io/#menu_netdata_submenu_registry"></a>
  <a href="https://registry.my-netdata.io/#menu_netdata_submenu_registry"></a>
  <a href="https://hub.docker.com/r/netdata/netdata"></a>
</p>
<p align="center"><b>Visit our <a href="https://www.netdata.cloud">Home Page</a></b></p>

<hr class="solid">

MENU: **[WHO WE ARE](#who-we-are)** | **[KEY FEATURES](#key-features)** | **[GETTING STARTED](#getting-started)** | **[HOW IT WORKS](#how-it-works)** | **[FAQ](#faq)** | **[DOCS](#book-documentation)** | **[COMMUNITY](#tada-community)** | **[CONTRIBUTE](#pray-contribute)** | **[LICENSE](#scroll-license)**


> [!WARNING]
> People **get addicted to Netdata.**
> Once you use it on your systems, *there's no going back.*

[![Platforms](https://img.shields.io/badge/Platforms-Linux%20%7C%20macOS%20%7C%20FreeBSD%20%7C%20Windows-blue)]()

---

## WHO WE ARE

Netdata is an open-source, real-time infrastructure monitoring platform. Monitor, detect, and act across your entire infrastructure.

**Core Advantages:**

* **Instant Insights** – With Netdata you can access per-second metrics and visualizations.
* **Zero Configuration** – You can deploy immediately without complex setup.
* **ML-Powered** – You can detect anomalies, predict issues, and automate analysis.
* **Efficient** – You can monitor with minimal resource usage and maximum scalability.
* **Secure & Distributed** – You can keep your data local with no central collection needed.

With Netdata, you get real-time, per-second updates. Clear **insights at a glance**, no complexity.

<details>
  <summary><strong>All heroes have a great origin story. Click to discover ours.</strong></summary>
  <br/>

In 2013, at the company where Costa Tsaousis was COO, a significant percentage of their cloud-based transactions failed silently, severely impacting business performance.

Costa and his team tried every troubleshooting tool available at the time. None could identify the root cause. As Costa later wrote:

“*I couldn’t believe that monitoring systems provide so few metrics and with such low resolution, scale so badly, and cost so much to run.*”

Frustrated, he decided to build his own monitoring tool, starting from scratch.

That decision led to countless late nights and weekends. It also sparked a fundamental shift in how infrastructure monitoring and troubleshooting are approached, both in method and in cost.
</details>

### Most Energy-Efficient Monitoring Tool

<p align="center">
<a href="https://www.ivanomalavolta.com/files/papers/ICSOC_2023.pdf#gh-dark-mode-only">
  
</a>
<a href="https://www.ivanomalavolta.com/files/papers/ICSOC_2023.pdf#gh-light-mode-only">
  
</a>
</p>

According to the [University of Amsterdam study](https://www.ivanomalavolta.com/files/papers/ICSOC_2023.pdf), Netdata is the most energy-efficient tool for monitoring Docker-based systems. The study also shows Netdata excels in CPU usage, RAM usage, and execution time compared to other monitoring solutions.

---

## Key Features

| Feature                    | Description                               | What Makes It Unique                                     |
|----------------------------|-------------------------------------------|----------------------------------------------------------|
| **Real-Time**              | Per-second data collection and processing | Works in a beat – click and see results instantly        |
| **Zero-Configuration**     | Automatic detection and discovery         | Auto-discovers everything on the nodes it runs           |
| **ML-Powered**             | Unsupervised anomaly detection            | Trains multiple ML models per metric at the edge         |
| **Long-Term Retention**    | High-performance storage                  | ~0.5 bytes per sample with tiered storage for archiving  |
| **Advanced Visualization** | Rich, interactive dashboards              | Slice and dice data without query language               |
| **Extreme Scalability**    | Native horizontal scaling                 | Parent-Child centralization with multi-million samples/s |
| **Complete Visibility**    | From infrastructure to applications       | Simplifies operations and eliminates silos               |
| **Edge-Based**             | Processing at your premises               | Distributes code instead of centralizing data            |

> [!NOTE]  
> Want to put Netdata to the test against Prometheus?
> Explore the [full comparison](https://www.netdata.cloud/blog/netdata-vs-prometheus-2025/).

---

## Netdata Ecosystem

This three-part architecture enables you to scale from single nodes to complex multi-cloud environments:

| Component         | Description                                                                                                                                                 | License                                         |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| **Netdata Agent** | • Core monitoring engine<br>• Handles collection, storage, ML, alerts, exports<br>• Runs on servers, cloud, K8s, IoT<br>• Zero production impact            | [GPL v3+](https://www.gnu.org/licenses/gpl-3.0) |
| **Netdata Cloud** | • Enterprise features<br>• User management, RBAC, horizontal scaling<br>• Centralized alerts<br>• Free community tier<br>• No metric storage centralization |                                                 |
| **Netdata UI**    | • Dashboards and visualizations<br>• Free to use<br>• Included in standard packages<br>• Latest version via CDN                                             | [NCUL1](https://app.netdata.cloud/LICENSE.txt)  |

## What You Can Monitor

With Netdata you can monitor all these components across platforms:

|                                                                                                   Component |              Linux               | FreeBSD | macOS |                      Windows                      |
|------------------------------------------------------------------------------------------------------------:|:--------------------------------:|:-------:|:-----:|:-------------------------------------------------:|
|                             **System Resources**<small><br/>CPU, Memory and system shared resources</small> |               Full               |   Yes   |  Yes  |                        Yes                        |
|                                **Storage**<small><br/>Disks, Mount points, Filesystems, RAID arrays</small> |               Full               |   Yes   |  Yes  |                        Yes                        |
|                                 **Network**<small><br/>Network Interfaces, Protocols, Firewall, etc</small> |               Full               |   Yes   |  Yes  |                        Yes                        |
|                        **Hardware & Sensors**<small><br/>Fans, Temperatures, Controllers, GPUs, etc</small> |               Full               |  Some   | Some  |                       Some                        |
|                                       **O/S Services**<small><br/>Resources, Performance and Status</small> | Yes<small><br/>`systemd`</small> |    -    |   -   |                         -                         |
|                                      **Processes**<small><br/>Resources, Performance, OOM, and more</small> |               Yes                |   Yes   |  Yes  |                        Yes                        |
|                                                                             System and Application **Logs** | Yes<small><br/>`systemd`-journal |    -    |   -   | Yes<small><br/>`Windows Event Log`, `ETW`</small> |
|                                 **Network Connections**<small><br/>Live TCP and UDP sockets per PID</small> |               Yes                |    -    |   -   |                         -                         |
|                               **Containers**<small><br/>Docker/containerd, LXC/LXD, Kubernetes, etc</small> |               Yes                |    -    |   -   |                         -                         |
|                                 **VMs** (from the host)<small><br/>KVM, qemu, libvirt, Proxmox, etc</small> | Yes<small><br/>`cgroups`</small> |    -    |   -   |         Yes<small><br/>`Hyper-V`</small>          |
|                       **Synthetic Checks**<small><br/>Test APIs, TCP ports, Ping, Certificates, etc</small> |               Yes                |   Yes   |  Yes  |                        Yes                        |
| **Packaged Applications**<small><br/>nginx, apache, postgres, redis, mongodb,<br/>and hundreds more</small> |               Yes                |   Yes   |  Yes  |                        Yes                        |
|                              **Cloud Provider Infrastructure**<small><br/>AWS, GCP, Azure, and more</small> |               Yes                |   Yes   |  Yes  |                        Yes                        |
|                       **Custom Applications**<small><br/>OpenMetrics, StatsD and soon OpenTelemetry</small> |               Yes                |   Yes   |  Yes  |                        Yes                        |

On Linux, you can continuously monitor all kernel features and hardware sensors for errors, including Intel/AMD/Nvidia GPUs, PCI AER, RAM EDAC, IPMI, S.M.A.R.T, Intel RAPL, NVMe, fans, power supplies, and voltage readings.

---

## Getting Started

You can install Netdata on all major operating systems. To begin:

### 1. Install Netdata

Choose your platform and follow the installation guide:

* [Linux Installation](https://learn.netdata.cloud/docs/installing/one-line-installer-for-all-linux-systems)
* [macOS](https://learn.netdata.cloud/docs/installing/macos)
* [FreeBSD](https://learn.netdata.cloud/docs/installing/freebsd)
* [Windows](https://learn.netdata.cloud/docs/netdata-agent/installation/windows)
* [Docker Guide](/packaging/docker/README.md)
* [Kubernetes Setup](https://learn.netdata.cloud/docs/installation/install-on-specific-environments/kubernetes)

> [!NOTE]
> You can access the Netdata UI at `http://localhost:19999` (or `http://NODE:19999` if remote).

### 2. Configure Collectors

Netdata auto-discovers most metrics, but you can manually configure some collectors:

* [All collectors](https://learn.netdata.cloud/docs/data-collection/)
* [SNMP monitoring](https://learn.netdata.cloud/docs/data-collection/monitor-anything/networking/snmp)

### 3. Configure Alerts

You can use hundreds of built-in alerts and integrate with:

`email`, `Slack`, `Telegram`, `PagerDuty`, `Discord`, `Microsoft Teams`, and more.

> [!NOTE]  
> Email alerts work by default if there's a configured MTA.

### 4. Configure Parents

You can centralize dashboards, alerts, and storage with Netdata Parents:

* [Streaming Reference](https://learn.netdata.cloud/docs/streaming/streaming-configuration-reference)

> [!NOTE]  
> You can use Netdata Parents for central dashboards, longer retention, and alert configuration.

### 5. Connect to Netdata Cloud

[Sign in to Netdata Cloud](https://app.netdata.cloud/sign-in) and connect your nodes for:

* Access from anywhere
* Horizontal scalability and multi-node dashboards
* UI configuration for alerts and data collection
* Role-based access control
* Free tier available

> [!NOTE]  
> Netdata Cloud is optional. Your data stays in your infrastructure.

## Live Demo Sites

<p align="center">
  <b>See Netdata in action</b><br/>
  <a href="https://frankfurt.netdata.rocks"><b>FRANKFURT</b></a> |
  <a href="https://newyork.netdata.rocks"><b>NEWYORK</b></a> |
  <a href="https://atlanta.netdata.rocks"><b>ATLANTA</b></a> |
  <a href="https://sanfrancisco.netdata.rocks"><b>SANFRANCISCO</b></a> |
  <a href="https://toronto.netdata.rocks"><b>TORONTO</b></a> |
  <a href="https://singapore.netdata.rocks"><b>SINGAPORE</b></a> |
  <a href="https://bangalore.netdata.rocks"><b>BANGALORE</b></a>
  <br/>
  <i>These demo clusters run with default configuration and show real monitoring data.</i>
  <br/>
  <i>Choose the instance closest to you for the best performance.</i>
</p>

---

## How It Works

With Netdata you can run a modular pipeline for metrics collection, processing, and visualization.

```mermaid
flowchart TB
  A[Netdata Agent]:::mainNode
  A1(Collect):::green --> A
  A2(Store):::green --> A
  A3(Learn):::green --> A
  A4(Detect):::green --> A
  A5(Check):::green --> A
  A6(Stream):::green --> A
  A7(Archive):::green --> A
  A8(Query):::green --> A
  A9(Score):::green --> A

  classDef green fill:#bbf3bb,stroke:#333,stroke-width:1px,color:#000
  classDef mainNode fill:#f0f0f0,stroke:#333,stroke-width:1px,color:#333
```

With each Agent you can:

1. **Collect** – Gather metrics from systems, containers, apps, logs, APIs, and synthetic checks.
2. **Store** – Save metrics to a high-efficiency, tiered time-series database.
3. **Learn** – Train ML models per metric using recent behavior.
4. **Detect** – Identify anomalies using trained ML models.
5. **Check** – Evaluate metrics against pre-set or custom alert rules.
6. **Stream** – Send metrics to Netdata Parents in real time.
7. **Archive** – Export metrics to Prometheus, InfluxDB, OpenTSDB, Graphite, and others.
8. **Query** – Access metrics via an API for dashboards or third-party tools.
9. **Score** – Use a scoring engine to find patterns and correlations across metrics.

> [!NOTE]  
> Learn more: [Netdata's architecture](https://learn.netdata.cloud/docs/netdata-agent/#distributed-observability-pipeline)

## Agent Capabilities

With the Netdata Agent, you can use these core capabilities out-of-the-box:

| Capability                   | Description                                                                                                                                   |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **Comprehensive Collection** | • 800+ integrations<br>• Systems, containers, VMs, hardware sensors<br>• OpenMetrics, StatsD, and logs<br>• OpenTelemetry support coming soon |
| **Performance & Precision**  | • Per-second collection<br>• Real-time visualization with 1-second latency<br>• High-resolution metrics                                       |
| **Edge-Based ML**            | • ML models trained at the edge<br>• Automatic anomaly detection per metric<br>• Pattern recognition based on historical behavior             |
| **Advanced Log Management**  | • Direct systemd-journald and Windows Event Log integration<br>• Process logs at the edge<br>• Rich log visualization                         |
| **Observability Pipeline**   | • Parent-Child relationships<br>• Flexible centralization<br>• Multi-level replication and retention                                          |
| **Automated Visualization**  | • NIDL data model<br>• Auto-generated dashboards<br>• No query language needed                                                                |
| **Smart Alerting**           | • Pre-configured alerts<br>• Multiple notification methods<br>• Proactive detection                                                           |
| **Low Maintenance**          | • Auto-detection<br>• Zero-touch ML<br>• Easy scalability<br>• CI/CD friendly                                                                 |
| **Open & Extensible**        | • Modular architecture<br>• Easy to customize<br>• Integrates with existing tools                                                             |

---

## CNCF Membership

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/cncf/artwork/master/other/cncf/horizontal/white/cncf-white.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/cncf/artwork/master/other/cncf/horizontal/color/cncf-color.svg">
    
  </picture>
  <br />
  Netdata actively supports and is a member of the Cloud Native Computing Foundation (CNCF).<br />
  It is one of the most starred projects in the <a href="https://landscape.cncf.io/?item=observability-and-analysis--observability--netdata">CNCF landscape</a>.
</p>

---

## FAQ

<details>
<summary><strong>Is Netdata secure?</strong></summary>
<br/>

Yes. Netdata follows [OpenSSF best practices](https://bestpractices.coreinfrastructure.org/en/projects/2231), has a security-first design, and is regularly audited by the community.

* [Security design](https://learn.netdata.cloud/docs/security-and-privacy-design)
* [Security policies and advisories](https://github.com/netdata/netdata/security)

</details>

<details>
<summary><strong>Does Netdata use a lot of resources?</strong></summary>
<br/>

No. Even with ML and per-second metrics, Netdata uses minimal resources.

* \~5% CPU and 150MiB RAM by default on production systems
* <1% CPU and \~100MiB RAM when ML and alerts are disabled and using ephemeral storage
* Parents scale to millions of metrics per second with appropriate hardware

> You can use the **Netdata Monitoring** section in the dashboard to inspect its resource usage.

</details>

<details>
<summary><strong>How much data retention is possible?</strong></summary>
<br/>

As much as your disk allows.

With Netdata you can use tiered retention:

* Tier 0: per-second resolution
* Tier 1: per-minute resolution
* Tier 2: per-hour resolution

These are queried automatically based on the zoom level.
</details>

<details>
<summary><strong>Can Netdata scale to many servers?</strong></summary>
<br/>

Yes. With Netdata you can:

* Scale horizontally with many Agents
* Scale vertically with powerful Parents
* Scale infinitely via Netdata Cloud

> You can use Netdata Cloud to merge many independent infrastructures into one logical view.

</details>

<details>
<summary><strong>Is disk I/O a concern?</strong></summary>
<br/>

No. Netdata minimizes disk usage:

* Metrics are flushed to disk every 17 minutes, spread out evenly
* Uses direct I/O and compression (ZSTD)
* Can run entirely in RAM or stream to a Parent

> You can use `alloc` or `ram` mode for no disk writes.

</details>

<details>
<summary><strong>How is Netdata different from Prometheus + Grafana?</strong></summary>
<br/>

With Netdata you get a complete monitoring solution—not just tools.

* No manual setup or dashboards needed
* Built-in ML, alerts, dashboards, and correlations
* More efficient and easier to deploy

> [Performance comparison](https://blog.netdata.cloud/netdata-vs-prometheus-performance-analysis/)

</details>

<details>
<summary><strong>How is Netdata different from commercial SaaS tools?</strong></summary>
<br/>

With Netdata you can store all metrics on your infrastructure—no sampling, no aggregation, no loss.

* High-resolution metrics by default
* ML per metric, not shared models
* Unlimited scalability without skyrocketing cost

</details>

<details>
<summary><strong>Can Netdata run alongside Nagios, Zabbix, etc.?</strong></summary>
<br/>

Yes. You can use Netdata together with traditional tools.

With Netdata you get:

* Real-time, high-resolution monitoring
* Zero configuration and auto-generated dashboards
* Anomaly detection and advanced visualization

</details>

<details>
<summary><strong>What if I feel overwhelmed?</strong></summary>
<br/>

You can start small:

* Use the dashboard's table of contents and search
* Explore anomaly scoring ("AR" toggle)
* Create custom dashboards in Netdata Cloud

> [Docs and guides](https://learn.netdata.cloud/guides)

</details>

<details>
<summary><strong>Do I have to use Netdata Cloud?</strong></summary>
<br/>

No. Netdata Cloud is optional.

Netdata works without it, but with Cloud you can:

* Access remotely with SSO
* Save dashboard customizations
* Configure alerts centrally
* Collaborate with role-based access

</details>

<details>
<summary><strong>What telemetry does Netdata collect?</strong></summary>
<br/>

Anonymous telemetry helps improve the product. You can disable it:

* Add `--disable-telemetry` to the installer, or
* Create `/etc/netdata/.opt-out-from-anonymous-statistics` and restart Netdata

> Telemetry helps us understand usage, not track users. No private data is collected.

</details>

<details>
<summary><strong>Who uses Netdata?</strong></summary>
<br/>

You'll join users including:

* Major companies (Amazon, ABN AMRO Bank, Facebook, Google, IBM, Intel, Netflix, Samsung)
* Universities (NYU, Columbia, Seoul National, UCL)
* Government organizations worldwide
* Infrastructure-intensive organizations
* Technology operators
* Startups and freelancers
* SysAdmins and DevOps professionals

</details>

---

## \:book: Documentation

Visit [Netdata Learn](https://learn.netdata.cloud) for full documentation and guides.

> [!NOTE]  
> Includes deployment, configuration, alerting, exporting, troubleshooting, and more.

---

## \:tada: Community

Join the Netdata community:

* [Discord](https://discord.com/invite/2mEmfW735j)
* [Forum](https://community.netdata.cloud)
* [GitHub Discussions](https://github.com/netdata/netdata/discussions)

> [!NOTE]  
> [Code of Conduct](https://github.com/netdata/.github/blob/main/CODE_OF_CONDUCT.md)

Follow us on:
[Twitter](https://twitter.com/netdatahq) | [Reddit](https://www.reddit.com/r/netdata/) | [YouTube](https://www.youtube.com/c/Netdata) | [LinkedIn](https://www.linkedin.com/company/netdata-cloud/)

---

## \:pray: Contribute

We welcome your contributions.

Ways you help us stay sharp:

* Share best practices and monitoring insights
* Report issues or missing features
* Improve documentation
* Develop new integrations or collectors
* Help users in forums and chats

> [!NOTE]  
> [Contribution guide](https://github.com/netdata/.github/blob/main/CONTRIBUTING.md)

---

## \:scroll: License

The Netdata ecosystem includes:

* **Netdata Agent** – Open-source core (GPLv3+). **Includes** data collection, storage, ML, alerting, APIs and **redistributes** several other open-source tools and libraries.
    * [Netdata Agent License](https://github.com/netdata/netdata/blob/master/LICENSE)
    * [Netdata Agent Redistributed](https://github.com/netdata/netdata/blob/master/REDISTRIBUTED.md)
* **Netdata UI** – Closed-source but free to use with Netdata Agent and Cloud. Delivered via CDN. It integrates third-party open-source components.
    * [Netdata Cloud UI License](https://app.netdata.cloud/LICENSE.txt)
    * [Netdata UI third-party licenses](https://app.netdata.cloud/3D_PARTY_LICENSES.txt)
* **Netdata Cloud** – Closed-source, with free and paid tiers. Adds remote access, SSO, scalability.
