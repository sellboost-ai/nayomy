---
name: "weibaohui/k8m"
description: "Provides MCP multi-cluster Kubernetes management and operations, featuring a management interface, logging, and nearly 50 built-in tools covering common DevOps and development scenarios. Supports both standard and CRD resources."
description_tr: "MCP ile çoklu Kubernetes kümesi yönetimi ve operasyonları sağlayan, yönetim arayüzü, logging ve DevOps ile geliştirme senaryolarını kapsayan yaklaşık 50 yerleşik araç içeren çözüm. Standart ve CRD kaynakları desteklemektedir."
category: "Cloud Platforms"
repo: "weibaohui/k8m"
stars: 822
url: "https://github.com/weibaohui/k8m"
body_length: 8940
license: "MIT"
language: "Go"
homepage: "https://github.com/weibaohui/k8m"
body_tr: |-
  ```markdown
  <div align="center">
  <h1>K8M</h1>
  </div>

  <div align=center>
   
  [![weibaohui%2Fk8m | Trendshift](https://trendshift.io/api/badge/repositories/14095)](https://trendshift.io/repositories/14095)

  </div>

  <div align=center>
   
  ![GitHub Repo Stars](https://img.shields.io/github/stars/weibaohui/k8m)
  ![GitHub Repo Forks](https://img.shields.io/github/forks/weibaohui/k8m)

  </div>

  <div align=center>

   [![License MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/weibaohui/k8m/blob/master/LICENSE)
   [![Go Report Card](https://goreportcard.com/badge/github.com/weibaohui/k8m)](https://goreportcard.com/report/github.com/weibaohui/k8m)
  ![GitHub Release](https://img.shields.io/github/v/release/weibaohui/k8m)
  ![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/weibaohui/k8m/total)
  ![GitHub Repo Issues](https://img.shields.io/github/issues/weibaohui/k8m)
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/weibaohui/k8m)](https://archestra.ai/mcp-catalog/weibaohui__k8m)
  [![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=plastic&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/weibaohui/k8m)
  ![Repobeats analytics image](https://repobeats.axiom.co/api/embed/9fde094e5c9a1d4c530e875864ee7919b17d0690.svg)

  </div>


  [English](README_en.md) | [中文](README.md)



  **k8m** yapay zeka tarafından yönlendirilen, Kubernetes kümesi yönetimini basitleştirmek için tasarlanmış hafif bir Mini Kubernetes AI Dashboard kontrol paneli aracıdır. AMIS tabanlı olup, [`kom`](https://github.com/weibaohui/kom) aracılığıyla Kubernetes API istemcisi olarak çalışır. **k8m** Qwen2.5-Coder-7B yerleşik ve deepseek-ai/DeepSeek-R1-Distill-Qwen-7B modeli etkileşim özelliğini destekler; ayrıca kendi özel büyük dilini modeli (ollama dahil) entegre edebilirsiniz.


  # Hızlı Deneyim
  Bu proje cnb çevrimiçi erişim adresi [k8m](https://cnb.cool/znb/qifei/-/tree/main/letsfly/justforfun/k8m) sağlar

  1. Bu projeyi fork ettikten sonra,
  1. Depo sağ üst köşesindeki 🛫起飞 düğmesine tıklayın,
  1. Bulut IDE seçin,
  1. Terminal'e girin
  1. `cd letsfly/justforfun/k8m && docker-compose up -d && docker-compose ps` komutunu yazın
  1. Port'a girin (terminal tab sayfasının sağ tarafında)
  1. Yeni port yönlendirmesi oluşturun, 8888 girin, onaylayın
  1. Oluşturulan yönlendirme adresine tıklayın, k8m giriş sayfasını açın
  1. Kullanıcı adı şifresi girin: k8m k8m .
  1. 🛫

   

  ![](https://raw.githubusercontent.com/weibaohui/k8m/HEAD/../../../public/k8m.webp)

  ### Belgeler

  - Ayrıntılı yapılandırma ve kullanım talimatları için [belgelendirme](docs/README.md) bölümüne bakın.
  - Değişiklik günlüğü için [değişiklik günlüğüne](CHANGELOG.md) bakın.
  - [Geliştirme Tasarım Belgesi-Chinese](https://zread.ai/weibaohui/k8m)
  - [Geliştirme Tasarım Belgesi-English](https://deepwiki.com/weibaohui/k8m)


  ### Ana Özellikler

  - **Mini Tasarım**: Tüm işlevler tek bir yürütülebilir dosyada birleştirilmiştir, dağıtım kolay ve kullanımı basittir.
  - **Basit Kullanım**: Kullanıcı dostu arayüz ve sezgisel işlem akışı, Kubernetes yönetimini daha kolay hale getirir. Standart k8s, aws eks, k3s, kind, k0s ve diğer küme türlerini destekler.
  - **Yüksek Performans**: Backend Golang ile oluşturulmuş, frontend Baidu AMIS tabanlı, yüksek kaynak kullanım verimliği ve hızlı yanıt süresi garantilenir.
  - **AI Odaklı Entegrasyon**: ChatGPT tabanlı söz seçme açıklaması, kaynak kılavuzu, YAML öznitelik otomatik çevirisi, Tanımlama bilgi yorumu, log AI tanısı, çalıştırma komutu önerileri ve [k8s-gpt](https://github.com/k8sgpt-ai/k8sgpt) işlevleri entegre edilerek Çince sunumu sağlar, k8s yönetimi için akıllı destek sağlar.
  - **Fonksiyon Eklenti Mimarisi**: Özellik fonksiyonları eklenti şeklindedir, gerektiğinde açılır, açılmazsa kaynak kullanmaz.  
  - **MCP Entegrasyonu**: MCP'yi görsel olarak yönetin, büyük model araç çağrısını uygulayın, 49 tür yerleşik k8s çok küme MCP aracını içerir, 100+ küme operasyonunu gerçekleştirmek için birleştirilebilir, diğer büyük model yazılımları tarafından kullanılması için MCP Server olarak hizmet verebilir. Büyük modelin k8s'yi yönetmesini kolaylaştırın. Her MCP çağrısını ayrıntılı olarak kaydedebilir. mcp.so ana akım hizmetlerini destekler.
  - **MCP Yetki Geçişi**: Çok küme yönetimi izinleri MCP büyük model çağrı izinleriyle bağlanmıştır, bir sözcükle özetlemek gerekirse: büyük model kullanan kişi, MCP'yi o kişinin izinleriyle çalıştırır. Güvenli kullanım, endişesiz, yetkisiz işlem riskini önler.
  - **Çok Küme Yönetimi**: InCluster modu kullanılarak küme içi tespiti otomatik gerçekleştirir, kubeconfig yolunu yapılandırdıktan sonra aynı seviye dizindeki yapılandırma dosyalarını otomatik tarar, aynı zamanda birden fazla kümeyi kaydeder ve yönetir, kalp atışı tespiti ve otomatik yeniden bağlanmayı destekler.
  - **Çok Küme İzin Yönetimi**: Kullanıcılar ve kullanıcı grupları için yetkilendirmeyi destekler, kümeye göre yetkilendirme yapabilir, salt okunur küme, Exec komutu, küme yöneticisi izinleri dahil olmak üzere üç izin türü vardır. Bir kullanıcı grubuna yetki verildikten sonra, gruptaki tüm kullanıcılar ilgili yetkiye sahip olur. Namespace siyah ve beyaz liste ayarını destekler.
  - **k8s En Son Özellikleri Desteklenir**: APIGateway, OpenKruise vb. fonksiyon özelliklerini destekler.
  - **Pod Dosya Yönetimi**: Console arayüzünün sol tarafındaki dosya ağacında, sağ tıklama menüsünde Pod içi dosyaların taranması, düzenlenmesi, yüklenmesi, indirilmesi, silinmesini destekler, günlük işlemleri basitleştirir.
  - **Pod Çalıştırma Yönetimi**: Pod günlüklerini gerçek zamanlı olarak görüntülemeyi, günlükleri indirmeyi ve Pod içinde doğrudan Shell komutları çalıştırmayı destekler. Ctrl+F aramasını, grep -A -B benzer vurgu aramasını destekler.
  - **API Açıklaması**: API KEY oluşturmayı destekler, üçüncü taraf harici erişimden, swagger arayüzü yönetim sayfası sağlar.
  - **Küme İnceleme Desteği**: Çok küme düzenli inspeksiyonu, özel inceleme kuralları destekler, lua script kurallarını destekler. Dingling grubuna, WeChat grubuna, Feishu grubuna ve özel webhook'a göndermeyi destekler. AI özetini destekler.
  - **k8s Event Yönlendirmesi**: Çok küme k8s Event webhook'a yönlendirmesini destekler, küme, anahtar kelime, namespace, ad vb. tarafından filtrelenebilir, birden fazla özel izleme yönlendirme kanalı oluşturmayı destekler. AI özetini destekler.
  - **CRD Yönetimi**: CRD kaynaklarını otomatik olarak keşfedebilir ve yönetebilir, tüm CRD'leri ağaç şeklinde listeler, çalışma verimini artırır.
  - **Helm Pazarı**: Helm depolarını serbestçe eklemeyi, tek tıklamayla Helm uygulamalarını yüklemeyi, kaldırmayı, yükseltmeyi, otomatik güncellemeyi destekler.
  - **Çapraz Platform Desteği**: Linux, macOS ve Windows ile uyumlu, x86, ARM gibi birden fazla mimariyı destekler, multi-platform kusursuz çalışmayı sağlar.
  - **Çok Veritabanı Desteği**: SQLite, MySql, PostgreSql gibi birden fazla veritabanını destekler.
  - **Tamamen Açık Kaynak**: Tüm kaynak kodları açık, kısıtlama yok, serbestçe özelleştir ve genişlet, ticari kullanım yapılabilir.

  **k8m**'ün tasarım felsefesi "AI odaklı, hafif verimli, karmaşıklığı sadeleştirmek"tir; geliştirici ve operasyon personelinin hızlı başlamasını ve Kubernetes kümesini kolayca yönetmesini sağlar.

  ![](https://github.com/user-attachments/assets/0951d6c1-389c-49cb-b247-84de15b6ec0e)


  ## **Çalıştırma**

  1. **İndir**: [GitHub release](https://github.com/weibaohui/k8m/releases) adresinden en son sürümü indirin.
  2. **Çalıştır**: `./k8m` komutu kullanarak başlatın, [http://127.0.0.1:3618](http://127.0.0.1:3618) adresine erişin.
  3. **Giriş Kullanıcı Adı Şifresi**:
      - Kullanıcı Adı: `k8m`
      - Şifre: `k8m`
      - Çevrimiçi olduktan sonra kullanıcı adı şifresi değiştirmeyi, iki faktörlü doğrulamayı etkinleştirmeyi unutmayın.
  4. **Parametreler**:

  ```shell
  Usage of ./k8m:
        --enable-temp-admin                Geçici yönetici hesabı yapılandırmasını etkinleştirip etkinleştirmeyeceğini belirtir, varsayılan olarak kapalı
        --admin-password string            Yönetici şifresi, geçici yönetici hesabı yapılandırması etkinleştirildiğinde etkili
        --admin-username string            Yönetici kullanıcı adı, geçici yönetici hesabı yapılandırması etkinleştirildiğinde etkili
        --print-config                     Yapılandırma bilgisini yazdırıp yazdırmayacağını belirtir (default false)
        --connect-cluster                  Küme başlatırken mevcut kümeleye otomatik olarak bağlanıp bağlanmayacağını belirtir, varsayılan kapalı
    -d, --debug                            Debug modu
        --in-cluster                       Barındırıcı kümesini otomatik olarak kaydetmek ve yönetmek isteyip istemediğini belirtir, varsayılan etkin
        --jwt-token-secret string          Giriş yapıldıktan sonra üretilen JWT token'ı için kullanılan Secret (default "your-secret-key")
    -c, --kubeconfig string                kubeconfig dosya yolu (default "/root/.kube/config")
        --kubectl-shell-image string       Kubectl Shell resmi. Varsayılan olarak bitnami/kubectl:latest, kubectl komutu içermesi zorunlu (default "bitnami/kubectl:latest")
        --log-v int                        klog günlük seviyesi klog.V(2) (default 2)
        --login-type string                Giriş yöntemi, password, oauth, token vb., varsayılan password (default "password")
        --image-pull-timeout               Node Shell, Kubectl Shell resmi çekme zaman aşımı. Varsayılan 30 saniye
        --node-shell-image string          NodeShell resmi. Varsayılan olarak alpine:latest, `nsenter` komutunu içermesi zorunlu (default "alpine:latest")
    -p, --port int                         Dinleme portu (default 3618)
    -v, --v Level                          klog günlük seviyesi (default 2)
  ```

  Ayrıca docker-compose (tavsiye edilir) aracılığıyla doğrudan başlatabilirsiniz:

  ```yaml
  services:
    k8m:
      container_name: k8m
      image: registry.cn-hangzhou.aliyuncs.com/minik8m/k8m
      restart: always
      ports:
        - "3618:3618"
      environment:
        TZ: Asia/Shanghai
      volumes:
        - ./data:/app/data
  ```

  Başlatıldıktan sonra, `3618` portuna erişin, varsayılan kullanıcı: `k8m`, varsayılan şifre `k8m`.
  Çevrimiçi ortamda hızlı bir şekilde deneyim yapmak isterseniz, erişebilirsiniz: [k8m](https://cnb.cool/znb/qifei/-/tree/main/letsfly/justforfun/k8m)


  ## Container k8s Kümesi Modunda Çalıştırma

  Küçük bir k8s kümesi yüklemek için [KinD](https://kind.sigs.k8s.io/docs/user/quick-start/) veya [MiniKube](https://minikube.sigs.k8s.io/docs/start/) kullanın

  ## KinD Yöntemi

  * KinD Kubernetes kümesi oluşturun

  ```
  brew install kind
  ```

  * Yeni bir Kubernetes kümesi oluşturun:

  ```
  kind create cluster --name k8sgpt-demo
  ```

  ## k8m'yi Kümeye Dağıtarak Deneyime

  ### Kurulum Betiği

  ```docker
  kubectl apply -f https://raw.githubusercontent.com/weibaohui/k8m/refs/heads/main/deploy/k8m.yaml
  ```

  * Erişim:
    Varsayılan olarak nodePort açık, lütfen 31999 portuna erişin. Veya Ingress'i kendiniz yapılandırın
    http://NodePortIP:31999

  ## Üretim Dağıtımında Lider-Yedek Seçim Eklentisini Etkinleştir, Dikkat Edilecek Noktalar

  - Service tanımında tek örnek çalıştırılırsa `k8m.io/role: leader` etiketi `eklemeyin`, eklenirse normal erişim sağlanamaz.
  - Service tanımında birden fazla örnek çalıştırılırsa `k8m.io/role: leader` etiketi `eklemeli`, aksi takdirde geçiş yapılmaz.
  - Birden fazla örnek çalıştırılan yaml aşağıdaki gibidir:
  ```docker
  kubectl apply -f https://raw.githubusercontent.com/weibaohui/k8m/refs/heads/main/deploy/k8m-ms.yaml
  ```


  ## **ChatGPT Yapılandırma Kılavuzu**

  ### Yerleşik GPT

  v0.0.8 sürümünden itibaren yerleşik GPT yer alacak, yapılandırma gerekmez.
  Kendi GPT'nizi kullanmak isterseniz, aşağıdaki belgelere bakın.

  - [Kendi Barındırılan/Özel Büyük Model Desteği](docs/use-self-hosted-ai.md) - Kendi Barındırılan Modeli Nasıl Kullanacağınız
  - [Ollama Yapılandırması](docs/ollama.md) - Ollama Büyük Modeli Nasıl Yapılandıracağınız.

  ### **ChatGPT Durumu Hata Ayıklaması**

  Parametre ayarladıktan sonra yine de etkili olmazsa, daha fazla hata ayıklama bilgisi almak için `./k8m -v 6` kullanmayı deneyin.
  Aşağıdaki bilgileri çıkacak, günlükleri görüntülerek ChatGPT'nin etkinleştirilip etkinleştirilmediğini doğrulayın.
    



  ## Geliştirme Hata Ayıklaması

  Yerel ortamda geliştirme ve hata ayıklama yapmak istiyorsanız, lütfen önce yerel frontend yapılandırmasını bir kez çalıştırın, dist dizinini otomatik olarak oluşturmak için. Bu proje ikili gömme kullandığından, dist olmadan frontend hata verecektir.

  #### Adım 1 Frontend Derlemesi

  ```bash 
  cd ui
  pnpm run build
  ```

  #### Arka Uç Derlemesini Hata Ayıkla

  ```bash
  #Bağımlılıkları indir
  go mod tidy
  #Çalıştır
  air
  #veya
  go run *.go 
  # localhost:3618 portunu dinle
  ```

  #### Frontend Sıcak Yükleme

  ```bash
  cd ui
  pnpm run dev
  #Vite hizmeti localhost:3000 portunda dinlenir
  #Vite arka uç erişimini 3618 portuna yönlendirir
  ```

  http://localhost:3000 adresine erişin

  ### YARDIM & DESTEK

  Herhangi bir sorunuz veya ek yardıma ihtiyacınız varsa, lütfen benimle iletişime geçin!

  ### Özel Teşekkürler

  [zhaomingcheng01](https://github.com/zhaomingcheng01): Çok yüksek kalitede öneriler sundu, k8m'nin kullanılabilirliğine olağanüstü katkı sağladı~

  [La0jin](https://github.com/La0jin): Çevrimiçi kaynaklar ve bakım sağladı, k8m'nin gösterim efektini büyük ölçüde iyileştirdi

  [eryajf](https://github.com/eryajf): Bize çok kullanışlı github actions sağladı, k8m'ye otomatik sürüm yayını, yapı, yayın vb. işlevleri ekledi



  ## Barındırılan Dağıtım

  Barındırılan dağıtım [Fronteir AI](https://fronteir.ai/mcp/weibaohui-k8m) adresinde mevcuttur.

  ## Benimle İletişim Kurun Feishu Grubu

  ![输入图片说明](https://foruda.gitee.com/images/1774880015525784725/4fd67005_77493.png "屏幕截图")
  ```
---

<div align="center">
<h1>K8M</h1>
</div>

<div align=center>
 
[![weibaohui%2Fk8m | Trendshift](https://trendshift.io/api/badge/repositories/14095)](https://trendshift.io/repositories/14095)

</div>

<div align=center>
 
![GitHub Repo Stars](https://img.shields.io/github/stars/weibaohui/k8m)
![GitHub Repo Forks](https://img.shields.io/github/forks/weibaohui/k8m)

</div>

<div align=center>

 [![License MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/weibaohui/k8m/blob/master/LICENSE)
 [![Go Report Card](https://goreportcard.com/badge/github.com/weibaohui/k8m)](https://goreportcard.com/report/github.com/weibaohui/k8m)
![GitHub Release](https://img.shields.io/github/v/release/weibaohui/k8m)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/weibaohui/k8m/total)
![GitHub Repo Issues](https://img.shields.io/github/issues/weibaohui/k8m)
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/weibaohui/k8m)](https://archestra.ai/mcp-catalog/weibaohui__k8m)
[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=plastic&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/weibaohui/k8m)
![Repobeats analytics image](https://repobeats.axiom.co/api/embed/9fde094e5c9a1d4c530e875864ee7919b17d0690.svg)

</div>


[English](README_en.md) | [中文](README.md)



**k8m** 是一款AI驱动的 Mini Kubernetes AI Dashboard 轻量级控制台工具，专为简化集群管理设计。它基于 AMIS 构建，并通过  [
`kom`](https://github.com/weibaohui/kom)  作为 Kubernetes API 客户端，**k8m** 内置了
Qwen2.5-Coder-7B，支持deepseek-ai/DeepSeek-R1-Distill-Qwen-7B模型
模型交互能力，同时支持接入您自己的私有化大模型（包括ollama）。


# 快速体验
本项目提供cnb 在线访问地址 [k8m](https://cnb.cool/znb/qifei/-/tree/main/letsfly/justforfun/k8m)

1. fork 这个项目后，
1. 点击 仓库右上角 🛫起飞 按钮，
1. 选择云IDE，
1. 进入终端
1. 输入cd `letsfly/justforfun/k8m  && docker-compose up -d && docker-compose ps `
1. 进入端口 （在终端 tab页面右边）
1. 新建端口转发，填入8888，确定
1. 点击生成的转发地址，打开k8m 登录页面
1. 输入用户名密码：k8m k8m 。
1. 🛫

 

![](https://raw.githubusercontent.com/weibaohui/k8m/HEAD/../../../public/k8m.webp)

### 文档

- 详细的配置和使用说明请参考[文档](docs/README.md)。
- 更新日志请参考[更新日志](CHANGELOG.md)。
- [开发设计文档-中文](https://zread.ai/weibaohui/k8m)
- [开发设计文档-English](https://deepwiki.com/weibaohui/k8m)


### 主要特点

- **迷你化设计**：所有功能整合在一个单一的可执行文件中，部署便捷，使用简单。
- **简便易用**：友好的用户界面和直观的操作流程，让 Kubernetes 管理更加轻松。支持标准k8s、aws eks、k3s、kind、k0s等集群类型。
- **高效性能**：后端采用 Golang 构建，前端基于百度 AMIS，保证资源利用率高、响应速度快。
- **AI驱动融合**
  ：基于ChatGPT实现划词解释、资源指南、YAML属性自动翻译、Describe信息解读、日志AI问诊、运行命令推荐,并集成了[k8s-gpt](https://github.com/k8sgpt-ai/k8sgpt)
  功能，实现中文展现，为管理k8s提供智能化支持。
- **功能插件化**：特性功能插件化，按需开启，不开启不占资源。  
- **MCP集成**:可视化管理MCP，实现大模型调用Tools，内置k8s多集群MCP工具49种，可组合实现超百种集群操作，可作为MCP Server
  供其他大模型软件使用。轻松实现大模型管理k8s。可详细记录每一次MCP调用。支持mcp.so主流服务。
- **MCP权限打通**:多集群管理权限与MCP大模型调用权限打通，一句话概述：谁使用大模型，就用谁的权限执行MCP。安全使用，无后顾之忧，避免操作越权。
- **多集群管理**：自动识别集群内部使用InCluster模式，配置kubeconfig路径后自动扫描同级目录下的配置文件，同时注册管理多个集群，支持心跳检测与自动重连。
- **多集群权限管理**：支持对用户、用户组进行授权，可按集群授权，包括集群只读、Exec命令、集群管理员三种权限。对用户组授权后，组内用户均获得相应授权。支持设置命名空间黑白名单。
- **支持k8s最新特性**:支持APIGateway、OpenKruise等功能特性。
- **Pod文件管理**：在Console 界面左侧的文件树，右键菜单，支持 Pod 内文件的浏览、编辑、上传、下载、删除，简化日常操作。
- **Pod运行管理**：支持实时查看 Pod 日志，下载日志，并在 Pod 内直接执行 Shell 命令。支持Ctrl+F搜索，类似grep -A -B高亮搜索
- **API开放**:支持创建API KEY，从第三方外部访问，提供swagger接口管理页面。
- **集群巡检支持**：支持多集群定时巡检、自定义巡检规则，支持lua脚本规则。支持发送到钉钉群、微信群、飞书群以及自定义webhook。支持AI总结。
- **k8s Event转发**：支持多集群k8s Event转发到webhook中，可按集群、关键字、命名空间、名称等进行过滤，建立多个专门的监控转发通道。支持AI总结。
- **CRD管理**：可自动发现并管理 CRD 资源，树状列出所有CRD，提高工作效率。
- **Helm市场**：支持Helm自由添加仓库，一键安装、卸载、升级 Helm 应用，支持自动更新。
- **跨平台支持**：兼容 Linux、macOS 和 Windows，并支持 x86、ARM 等多种架构，确保多平台无缝运行。
- **多数据库支持**：支持SQLite、MySql、PostgreSql等多种数据库。
- **完全开源**：开放所有源码，无任何限制，可自由定制和扩展，可商业使用。

**k8m** 的设计理念是"AI驱动，轻便高效，化繁为简"，它帮助开发者和运维人员快速上手，轻松管理 Kubernetes 集群。

![](https://github.com/user-attachments/assets/0951d6c1-389c-49cb-b247-84de15b6ec0e)


## **运行**

1. **下载**：从 [GitHub release](https://github.com/weibaohui/k8m/releases) 下载最新版本。
2. **运行**：使用 `./k8m` 命令启动,访问[http://127.0.0.1:3618](http://127.0.0.1:3618)。
3. **登录用户名密码**：
    - 用户名：`k8m`
    - 密码：`k8m`
    - 请注意上线后修改用户名密码、启用两步验证。
4. **参数**：

```shell
Usage of ./k8m:
      --enable-temp-admin                是否启用临时管理员账户配置，默认关闭
      --admin-password string            管理员密码，启用临时管理员账户配置后生效 
      --admin-username string            管理员用户名，启用临时管理员账户配置后生效
      --print-config                     是否打印配置信息 (default false)
      --connect-cluster                  启动集群是是否自动连接现有集群，默认关闭
  -d, --debug                            调试模式
      --in-cluster                       是否自动注册纳管宿主集群，默认启用
      --jwt-token-secret string          登录后生成JWT token 使用的Secret (default "your-secret-key")
  -c, --kubeconfig string                kubeconfig文件路径 (default "/root/.kube/config")
      --kubectl-shell-image string       Kubectl Shell 镜像。默认为 bitnami/kubectl:latest，必须包含kubectl命令 (default "bitnami/kubectl:latest")
      --log-v int                        klog的日志级别klog.V(2) (default 2)
      --login-type string                登录方式，password, oauth, token等,default is password (default "password")
      --image-pull-timeout               Node Shell、Kubectl Shell 镜像拉取超时时间。默认为 30 秒
      --node-shell-image string          NodeShell 镜像。 默认为 alpine:latest，必须包含`nsenter`命令 (default "alpine:latest")
  -p, --port int                         监听端口 (default 3618)
  -v, --v Level                          klog的日志级别 (default 2)
```

也可以直接通过docker-compose(推荐)启动：

```yaml
services:
  k8m:
    container_name: k8m
    image: registry.cn-hangzhou.aliyuncs.com/minik8m/k8m
    restart: always
    ports:
      - "3618:3618"
    environment:
      TZ: Asia/Shanghai
    volumes:
      - ./data:/app/data
```

启动之后，访问`3618`端口，默认用户：`k8m`，默认密码`k8m`。
如果你想通过在线环境快速拉起体验，可以访问：[k8m](https://cnb.cool/znb/qifei/-/tree/main/letsfly/justforfun/k8m)


## 容器化k8s集群方式运行

使用[KinD](https://kind.sigs.k8s.io/docs/user/quick-start/)、[MiniKube](https://minikube.sigs.k8s.io/docs/start/)
安装一个小型k8s集群

## KinD方式

* 创建 KinD Kubernetes 集群

```
brew install kind
```

* 创建新的 Kubernetes 集群：

```
kind create cluster --name k8sgpt-demo
```

## 将k8m部署到集群中体验

### 安装脚本

```docker
kubectl apply -f https://raw.githubusercontent.com/weibaohui/k8m/refs/heads/main/deploy/k8m.yaml
```

* 访问：
  默认使用了nodePort开放，请访问31999端口。或自行配置Ingress
  http://NodePortIP:31999

## 生产部署启用主备选举插件，注意事项

- 单实例运行service的定义`不要加` `k8m.io/role: leader` 标签，加了不能正常访问。
- 多实例运行service的定义`必须加` `k8m.io/role: leader` 标签，否则不会切换。
- 多实例运行的yaml如下：
```docker
kubectl apply -f https://raw.githubusercontent.com/weibaohui/k8m/refs/heads/main/deploy/k8m-ms.yaml
```


## **ChatGPT 配置指南**

### 内置GPT

从v0.0.8版本开始，将内置GPT，无需配置。
如果您需要使用自己的GPT，请参考以下文档。

- [自托管/自定义大模型支持](docs/use-self-hosted-ai.md) - 如何使用自托管的
- [Ollama配置](docs/ollama.md) - 如何配置使用Ollama大模型。

### **ChatGPT 状态调试**

如果设置参数后，依然没有效果，请尝试使用`./k8m -v 6`获取更多的调试信息。
会输出以下信息，通过查看日志，确认是否启用ChatGPT。
  



## 开发调试

如果你想在本地开发调试，请先执行一次本地前端构建，自动生成dist目录。因为本项目采用了二进制嵌入，没有dist前端会报错。

#### 第一步编译前端

```bash 
cd ui
pnpm run build
```

#### 编译调试后端

```bash
#下载依赖
go mod tidy
#运行
air
#或者
go run *.go 
# 监听localhost:3618端口
```

#### 前端热加载

```bash
cd ui
pnpm run dev
#Vite服务会监听在localhost:3000端口
#Vite转发后端访问到3618端口
```

访问http://localhost:3000

### HELP & SUPPORT

如果你有任何进一步的问题或需要额外的帮助，请随时与我联系！

### 特别鸣谢

[zhaomingcheng01](https://github.com/zhaomingcheng01)：提出了诸多非常高质量的建议，为k8m的易用好用做出了卓越贡献~

[La0jin](https://github.com/La0jin):提供在线资源及维护，极大提升了k8m的展示效果

[eryajf](https://github.com/eryajf):为我们提供了非常好用的github actions，为k8m增加了自动化的发版、构建、发布等功能



## Hosted deployment

A hosted deployment is available on [Fronteir AI](https://fronteir.ai/mcp/weibaohui-k8m).

## 联系我 飞书群

![输入图片说明](https://foruda.gitee.com/images/1774880015525784725/4fd67005_77493.png "屏幕截图")
