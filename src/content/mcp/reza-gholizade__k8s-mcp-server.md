---
name: "reza-gholizade/k8s-mcp-server"
description: "A Kubernetes Model Context Protocol (MCP) server that provides tools for interacting with Kubernetes clusters through a standardized interface, including API resource discovery, resource management, pod logs, metrics, and events."
category: "Cloud Platforms"
repo: "reza-gholizade/k8s-mcp-server"
stars: 159
url: "https://github.com/reza-gholizade/k8s-mcp-server"
body_length: 31076
license: "MIT"
language: "Go"
body_tr: |-
  # Kubernetes MCP Sunucusu

  Kubernetes kümelerine standartlaştırılmış bir arayüz üzerinden etkileşim kurma araçları sağlayan bir Kubernetes Model Context Protocol (MCP) sunucusu.

  ## Barındırılan dağıtım

  [Fronteir AI](https://fronteir.ai/mcp/reza-gholizade-k8s-mcp-server) üzerinde barındırılan bir dağıtım mevcuttur.

  ## Özellikler

  - **API Kaynağı Keşfi**: Kubernetes kümenizde mevcut olan tüm API kaynaklarını alın.
  - **Kaynak Listeleme**: İsteğe bağlı ad alanı ve etiket filtrelemesi ile herhangi bir türde kaynakları listeleyin.
  - **Kaynak Detayları**: Belirli Kubernetes kaynakları hakkında detaylı bilgi alın.
  - **Kaynak Açıklaması**: Kubernetes kaynakları hakkında kapsamlı açıklamalar alın, `kubectl describe` benzeri.
  - **Pod Günlükleri**: Belirli podlardan günlükleri alın (isteğe bağlı olarak belirli bir kapsayıcıdan, ya da belirtilmemişse tüm kapsayıcılardan).
  - **Node Metrikleri**: Belirli düğümler için kaynak kullanım metriklerini alın.
  - **Pod Metrikleri**: Belirli podlar için CPU ve Bellek metriklerini alın.
  - **Olay Listeleme**: Bir ad alanı içinde veya belirli bir kaynak için olayları listeleyin.
  - **Kaynak Oluşturma/Güncelleme**: YAML veya JSON manifestinden yeni Kubernetes kaynakları oluşturun veya mevcut olanları güncelleyin.
  - **Kaynak Silme**: Kubernetes kümesinde sağlanan ad alanı ve türe göre bir kaynağı siler.
  - **Standartlaştırılmış Arayüz**: Tutarlı araç etkileşimi için MCP protokolünü kullanır.
  - **Esnek Yapılandırma**: Farklı Kubernetes içerikleri ve kaynak kapsamlarını destekler.
  - **Çoklu Modlar**: CLI araçları için `stdio` modu, web uygulamaları için `sse` modu veya `streamable-http` modu, ve kümedeki değişiklikleri devre dışı bırakmak için `--readonly` modu kullanın.
  - **Güvenlik**: Docker kapsayıcılarında arttırılmış güvenlik için root olmayan kullanıcı olarak çalışır.

  ## Ön Koşullar

  - Go 1.23 veya daha yeni
  - Kubernetes kümesine erişim
  - `kubectl` uygun küme erişimi ile yapılandırılmış

  ## Kurulum

  1.  **Depoyu klonlayın:**
      ```bash
      git clone https://github.com/reza-gholizade/k8s-mcp-server.git
      cd k8s-mcp-server
      ```

  2.  **Bağımlılıkları yükleyin:**
      ```bash
      go mod download
      ```

  3.  **Sunucuyu derleyin:**
      ```bash
      go build -o k8s-mcp-server main.go
      ```

  ## Kullanım

  ### Sunucuyu Başlatma

  Sunucu üç modda çalışabilir, komut satırı bayrakları veya ortam değişkenleri aracılığıyla yapılandırılabilir.

  #### Stdio Modu (CLI entegrasyonları için)
  Bu mod standart girdi/çıktı kullanarak iletişim kurar.

  ```bash
  ./k8s-mcp-server --mode stdio
  ```
  Veya ortam değişkenleri kullanarak:
  ```bash
  SERVER_MODE=stdio ./k8s-mcp-server
  ```

  #### SSE Modu (web uygulamaları için)
  Bu mod Server-Sent Events desteği ile bir HTTP sunucusu başlatır.

  Varsayılan (8080 portu):
  ```bash
  ./k8s-mcp-server --mode sse
  ```
  Port belirtin:
  ```bash
  ./k8s-mcp-server --mode sse --port 9090
  ```
  Veya ortam değişkenleri kullanarak:
  ```bash
  SERVER_MODE=sse SERVER_PORT=9090 ./k8s-mcp-server
  ```
  #### Streamable-HTTP Modu (web uygulamaları için)
  Bu mod, MCP özelliklerine uygun olarak streamable-http taşıma desteği ile bir HTTP sunucusu başlatır.

  Varsayılan (8080 portu):
  ```bash
  ./k8s-mcp-server --mode streamable-http
  ```
  Port belirtin:
  ```bash
  ./k8s-mcp-server --mode streamable-http --port 9090
  ```
  Veya ortam değişkenleri kullanarak:
  ```bash
  SERVER_MODE=streamable-http SERVER_PORT=9090 ./k8s-mcp-server
  ```

  Sunucu `http://localhost:8080/mcp` adresinde kullanılabilir olacaktır (veya belirttiğiniz port).

  Mod belirtilmezse, varsayılan olarak 8080 portunda SSE olarak ayarlanır.

  ### Kubernetes Kimlik Doğrulaması

  Sunucu birden fazla kimlik doğrulama yöntemini destekler ve aşağıdaki öncelik sırasında denenirler:

  #### 1. Ortam Değişkeninden Kubeconfig İçeriği

  `KUBECONFIG_DATA` ortam değişkeni aracılığıyla kubeconfig dosyasının tamamını sağlayabilirsiniz:

  ```bash
  export KUBECONFIG_DATA="$(cat ~/.kube/config)"
  ./k8s-mcp-server
  ```

  Bu, dosyaları monte etmekten kaçınmak istediğinizde veya dosya erişiminin kısıtlı olduğu ortamlarda çalışırken kullanışlıdır.

  #### 2. API Sunucusu URL'si ve Token'ı

  Kubernetes API sunucusu URL'si ve bearer token kullanarak kimlik doğrulaması yapabilirsiniz:

  ```bash
  export KUBERNETES_SERVER="https://kubernetes.example.com:6443"
  export KUBERNETES_TOKEN="your-bearer-token-here"
  ./k8s-mcp-server
  ```

  TLS yapılandırması için isteğe bağlı ortam değişkenleri:
  - `KUBERNETES_CA_CERT`: CA sertifikası içeriği (base64 kodlanmış veya PEM formatı)
  - `KUBERNETES_CA_CERT_PATH`: CA sertifikası dosyasının yolu
  - `KUBERNETES_INSECURE`: TLS doğrulamasını atlamak için `"true"` olarak ayarlayın (üretim için önerilmez)

  CA sertifikası ile örnek:
  ```bash
  export KUBERNETES_SERVER="https://kubernetes.example.com:6443"
  export KUBERNETES_TOKEN="your-bearer-token-here"
  export KUBERNETES_CA_CERT_PATH="/path/to/ca.crt"
  ./k8s-mcp-server
  ```

  #### 3. Küme İçi Kimlik Doğrulaması (Service Account)

  Kubernetes kümesi içinde çalışırken, sunucu `/var/run/secrets/kubernetes.io/serviceaccount/token` adresinden hizmet hesabı token'ını otomatik olarak algılar ve kullanır. Bu, sunucuyu bir pod olarak küme içinde çalıştırmak için önerilen yöntemdir.

  **Örnek Dağıtım:**

  ```yaml
  apiVersion: v1
  kind: ServiceAccount
  metadata:
    name: k8s-mcp-server-sa
    namespace: default
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRole
  metadata:
    name: k8s-mcp-server-role
  rules:
    - apiGroups: [""]
      resources: ["*"]
      verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
    - apiGroups: ["apps"]
      resources: ["*"]
      verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
    # Kullanım durumunuz için gerekli olduğu kadar kural ekleyin
  ---
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRoleBinding
  metadata:
    name: k8s-mcp-server-rb
  subjects:
    - kind: ServiceAccount
      name: k8s-mcp-server-sa
      namespace: default
  roleRef:
    kind: ClusterRole
    name: k8s-mcp-server-role
    apiGroup: rbac.authorization.k8s.io
  ---
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: k8s-mcp-server
    namespace: default
  spec:
    replicas: 1
    selector:
      matchLabels:
        app: k8s-mcp-server
    template:
      metadata:
        labels:
          app: k8s-mcp-server
      spec:
        serviceAccountName: k8s-mcp-server-sa
        containers:
          - name: k8s-mcp-server
            image: ginnux/k8s-mcp-server:latest
            ports:
              - containerPort: 8080
            env:
              - name: SERVER_MODE
                value: "sse"
              - name: SERVER_PORT
                value: "8080"
  ```

  #### 4. Kubeconfig Dosya Yolu (Varsayılan)

  Yukarıdaki yöntemlerden hiçbiri mevcut değilse, sunucu bir kubeconfig dosyasını kullanmaya döner:

  - `--kubeconfig` bayrağı (eğer uygulanmışsa) veya `KUBECONFIG` ortam değişkeni aracılığıyla sağlanan yolu kullanır
  - Hiçbiri belirtilmemişse `~/.kube/config` dosyasına döner

  ```bash
  # Varsayılan ~/.kube/config kullanın
  ./k8s-mcp-server

  # Özel kubeconfig yolunu kullanın
  export KUBECONFIG=/path/to/your/kubeconfig
  ./k8s-mcp-server
  ```

  **Not:** Sunucu mevcut ortam değişkenlerine ve dosya sistemi temelinde hangi kimlik doğrulama yönteminin kullanılacağını otomatik olarak algılar. Kimlik doğrulama yöntemini açıkça yapılandırmanız gerekmez - yukarıda listelenen öncelik sırasına göre ilk kullanılabilir yöntemi kullanacaktır.

  #### Salt Okunur Modu

  Sunucu, tüm yazma işlemlerini devre dışı bırakan ve Kubernetes kümenizi değişiklik riski olmadan keşfetme ve izleme konusunda daha güvenli bir yol sağlayan salt okunur bir modu destekler.

  `--read-only` bayrağı ile salt okunur modu etkinleştirin:

  ```bash
  ./k8s-mcp-server --read-only
  ```

  Salt okunur modu herhangi bir sunucu modunda birleştirebilirsiniz:

  ```bash
  # stdio modu ile salt okunur
  ./k8s-mcp-server --mode stdio --read-only

  # SSE modu ile salt okunur
  ./k8s-mcp-server --mode sse --read-only

  # streamable-http modu ile salt okunur
  ./k8s-mcp-server --mode streamable-http --read-only
  ```

  Salt okunur modu etkinleştirildiğinde, aşağıdaki araçlar devre dışı bırakılır:
  - `createResource` (Kubernetes kaynağı oluşturma/güncellemeler)
  - `helmInstall` (Helm grafik yüklemeleri)
  - `helmUpgrade` (Helm grafik yükseltmeleri)
  - `helmUninstall` (Helm grafik kaldırmaları)
  - `helmRollback` (Helm sürümü geri almaları)
  - `helmRepoAdd` (Helm depo eklemeleri)

  Kaynakları listeleme, günlükleri alma, metrikleri görüntüleme ve Helm sürümlerini inceleme dahil diğer tüm salt okunur işlemler kullanılabilir kalır.

  #### Araç Kategori Bayrakları
  Bu bayrakları kullanarak araç kategorilerini seçici olarak devre dışı bırakabilirsiniz:

  **Kubernetes Araçlarını Devre Dışı Bırakın:**
  ```bash
  ./k8s-mcp-server --no-k8s
  ```

  **Helm Araçlarını Devre Dışı Bırakın:**
  ```bash
  ./k8s-mcp-server --no-helm
  ```

  **Diğer bayraklarla birleştirin:**
  ```bash
  # Yalnızca Kubernetes araçları ile salt okunur modu (Helm yok)
  ./k8s-mcp-server --read-only --no-helm

  # Yalnızca Helm araçları ile salt okunur modu (Kubernetes yok)
  ./k8s-mcp-server --read-only --no-k8s

  # Yalnızca Kubernetes araçları ile SSE modu
  ./k8s-mcp-server --mode sse --no-helm

  ```

  **Not:** Her ikisi birlikte `--no-k8s` ve `--no-helm` kullanamazsınız, çünkü bu kullanılabilir araç olmadığını sonuçlandırır. Her iki bayrak sağlanırsa sunucu bir hatayla çıkacaktır.

  `--no-k8s` etkinleştirildiğinde, tüm Kubernetes araçları devre dışı bırakılır:
  - `getAPIResources`, `listResources`, `getResource`, `describeResource`
  - `getPodsLogs`, `getNodeMetrics`, `getPodMetrics`, `getEvents`
  - `createResource` (salt okunur modda değilse)

  `--no-helm` etkinleştirildiğinde, tüm Helm araçları devre dışı bırakılır:
  - `helmList`, `helmGet`, `helmHistory`, `helmRepoList`
  - `helmInstall`, `helmUpgrade`, `helmUninstall`, `helmRollback`, `helmRepoAdd` (salt okunur modda değilse)

  ### Docker İmajını Kullanma

  Sunucuyu Docker Hub'dan önceden derlenen Docker imajını kullanarak da çalıştırabilirsiniz.

  1.  **İmajı çekin:**
      ```bash
      docker pull ginnux/k8s-mcp-server:latest
      ```
      `latest` yerine belirli bir sürüm etiketi (örneğin, `1.0.0`) yazabilirsiniz.

  2.  **Konteyner'i çalıştırın:**

      **Not:** Sunucu birden fazla kimlik doğrulama yöntemini destekler. Kubeconfig dosyasını monte edebilir (aşağıda gösterildiği gibi) veya kimlik doğrulaması için ortam değişkenlerini kullanabilirsiniz ([Kubernetes Kimlik Doğrulaması](#kubernetes-kimlik-doğrulaması) bölümüne bakın).

      *   **SSE Modu (imajın varsayılan davranışı):**
          ```bash
          docker run -p 8080:8080 -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest
          ```
          Bu, konteynerün 8080 portunu ana makinenizdeki 8080 portuna eşler ve Kubernetes yapılandırmanızı salt okunur olarak root olmayan kullanıcının giriş dizinine monte eder. Sunucu `http://localhost:8080` adresinde kullanılabilir olacaktır. İmaj varsayılan olarak 8080 portunda `sse` modu ile çalışır.

      *   **Streamable-HTTP Modu:**
          ```bash
          docker run -p 8080:8080 -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest --mode streamable-http
          ```
          Bu, sunucuyu streamable-http modunda çalıştırır. Sunucu `http://localhost:8080/mcp` adresinde kullanılabilir olacaktır.

      *   **Stdio Modu:**
          ```bash
          docker run -i --rm -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest --mode stdio
          ```
          `-i` bayrağı etkileşimli stdio iletişimi için önemlidir. `--rm` çıkıştan sonra konteyner'i temizler.

      *   **SSE Modu için Özel Port:**
          ```bash
          docker run -p 9090:9090 -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest --mode sse --port 9090
          ```

      *   **Streamable-HTTP Modu için Özel Port:**
          ```bash
          docker run -p 9090:9090 -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest --mode streamable-http --port 9090
          ```

      *   **Alternatif: Tüm .kube dizinini monte edin:**
          ```bash
          docker run -p 8080:8080 -v ~/.kube:/home/appuser/.kube:ro ginnux/k8s-mcp-server:latest
          ```

      *   **Kimlik doğrulaması için ortam değişkenleri kullanma (dosya monte etme gerekmez):**
          ```bash
          # Ortam değişkeninden kubeconfig içeriği kullanma
          docker run -p 8080:8080 \
            -e KUBECONFIG_DATA="$(cat ~/.kube/config)" \
            ginnux/k8s-mcp-server:latest

          # Veya API sunucusu URL'si ve token kullanma
          docker run -p 8080:8080 \
            -e KUBERNETES_SERVER="https://kubernetes.example.com:6443" \
            -e KUBERNETES_TOKEN="your-token-here" \
            -e KUBERNETES_CA_CERT_PATH="/path/to/ca.crt" \
            -v /path/to/ca.crt:/path/to/ca.crt:ro \
            ginnux/k8s-mcp-server:latest
          ```

  #### Docker Compose ile Kullanma

  Bir `docker-compose.yml` dosyası oluşturun:

  **Seçenek 1: Kubeconfig dosyası kullanma (geleneksel yöntem):**
  ```yaml
  version: '3.8'
  services:
    k8s-mcp-server:
      image: ginnux/k8s-mcp-server:latest # Veya belirli bir sürüm
      container_name: k8s-mcp-server
      ports:
        - "8080:8080" # Host:Container, farklı bir SERVER_PORT kullanıyorsanız ayarlayın
      volumes:
        - ~/.kube:/home/appuser/.kube:ro # Kubeconfig'i root olmayan kullanıcı ev dizinine salt okunur olarak monte edin
      environment:
        - KUBECONFIG=/home/appuser/.kube/config
        - SERVER_MODE=sse # 'stdio', 'sse' veya 'streamable-http' olabilir
        - SERVER_PORT=8080 # SSE/streamable-http modları için port
      # command: ["--read-only"] # Salt okunur modu etkinleştirmek için bu satırı açın
      restart: unless-stopped
      healthcheck:
        test: ["CMD", "curl", "-f", "http://localhost:8080/"]
        interval: 30s
        timeout: 10s
        retries: 3
        start_period: 10s
  ```

  **Seçenek 2: Ortam değişkenleri kullanma (dosya monte etme yok):**
  ```yaml
  version: '3.8'
  services:
    k8s-mcp-server:
      image: ginnux/k8s-mcp-server:latest
      container_name: k8s-mcp-server
      ports:
        - "8080:8080"
      environment:
        - KUBECONFIG_DATA=${KUBECONFIG_DATA} # Bunu .env dosyasında veya shell'de ayarlayın
        # Veya API sunucusu ve token kullanın:
        # - KUBERNETES_SERVER=https://kubernetes.example.com:6443
        # - KUBERNETES_TOKEN=${KUBERNETES_TOKEN}
        - SERVER_MODE=sse
        - SERVER_PORT=8080
      restart: unless-stopped
      healthcheck:
        test: ["CMD", "curl", "-f", "http://localhost:8080/"]
        interval: 30s
        timeout: 10s
        retries: 3
        start_period: 10s
  ```

  **Not:** Salt okunur modu etkinleştirmek için, Seçenek 1'de gösterildiği gibi `command` geçersiz kılmasını kullanın. Stdio modu için, 'ports'u ayarlamanız, 'stdin_open: true' ve 'tty: true' eklemeniz ve potansiyel olarak komutu geçersiz kılmanız gerekebilir.

  Sonra başlatın:
  ```bash
  docker compose up -d
  ```
  Günlükleri görmek için: `docker compose logs -f k8s-mcp-server`.

  #### Güvenlik Hususları

  Docker imajı, arttırılmış güvenlik için root olmayan bir kullanıcı (`appuser` UID 1001 ile) olarak çalışır:
  - Uygulama ikilisi `/usr/local/bin/k8s-mcp-server` adresinde bulunur
  - Kubeconfig, `/home/appuser/.kube/config` adresine monte edilmelidir
  - Konteyner durumunu izlemek için sistem durumu kontrolleri etkindir
  - Konteyner, minimal bağımlılıklar içerir (yalnızca ca-certificates ve curl)

  #### API Çağrıları Yapma (SSE/Streamable-HTTP Modu)
  Sunucu SSE veya streamable-http modunda çalışırken, HTTP endpoint'ine JSON-RPC çağrıları yapabilirsiniz:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "getAPIResources",
      "arguments": {
        "includeNamespaceScoped": true,
        "includeClusterScoped": true
      }
    }
  }' http://localhost:8080/
  ```

  Sistem durumunu da kontrol edebilirsiniz:
  ```bash
  curl -f http://localhost:8080/
  ```

  ### Kullanılabilir Araçlar

  #### 1. `getAPIResources`

  Kubernetes kümesindeki tüm kullanılabilir API kaynaklarını alır.

  **Parametreler:**
  - `includeNamespaceScoped` (boolean, isteğe bağlı): Ad alanı kapsamlı kaynakları dahil edilip edilmeyeceği (varsayılan true).
  - `includeClusterScoped` (boolean, isteğe bağlı): Küme kapsamlı kaynakları dahil edilip edilmeyeceği (varsayılan true).

  **Örnek:**
  ```json
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "getAPIResources",
      "arguments": {
        "includeNamespaceScoped": true,
        "includeClusterScoped": true
      }
    }
  }
  ```

  #### 2. `listResources`

  Belirli kaynak türüne ait tüm örnekleri listeler.

  **Parametreler:**
  - `Kind` (string, gerekli): Listelenecek kaynağın türü (örneğin, "Pod", "Deployment").
  - `namespace` (string, isteğe bağlı): Kaynakları listeleyeceğiniz ad alanı. Atlanırsa, ad alanı kapsamlı kaynaklar için tüm ad alanları arasında listeler (RBAC'a tabi).
  - `labelSelector` (string, isteğe bağlı): Etiket seçicisine göre kaynakları filtreleyin (örneğin, "app=nginx,env=prod").

  **Örnek:**
  ```json
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "listResources",
      "arguments": {
        "Kind": "Pod",
        "namespace": "default",
        "labelSelector": "app=nginx"
      }
    }
  }
  ```

  #### 3. `getResource`

  Belirli bir kaynak hakkında detaylı bilgiler alır.

  **Parametreler:**
  - `kind` (string, gerekli): Alınacak kaynağın türü (örneğin, "Pod", "Deployment").
  - `name` (string, gerekli): Alınacak kaynağın adı.
  - `namespace` (string, isteğe bağlı): Kaynağın ad alanı (ad alanı kapsamlı kaynaklar için gerekli).

  **Örnek:**
  ```json
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "getResource",
      "arguments": {
        "kind": "Pod",
        "name": "nginx-pod",
        "namespace": "default"
      }
    }
  }
  ```

  #### 4. `describeResource`

  Kubernetes kümesinde bir kaynağı açıklar, `kubectl describe` benzeri.

  **Parametreler:**
  - `Kind` (string, gerekli): Açıklanacak kaynağın türü (örneğin, "Pod", "Deployment").
  - `name` (string, gerekli): Açıklanacak kaynağın adı.
  - `namespace` (string, isteğe bağlı): Kaynağın ad alanı (ad alanı kapsamlı kaynaklar için gerekli).

  **Örnek:**
  ```json
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "describeResource",
      "arguments": {
        "Kind": "Pod",
        "name": "nginx-pod",
        "namespace": "default"
      }
    }
  }
  ```

  #### 5. `getPodsLogs`

  Belirli bir pod'un günlüklerini alır.

  **Parametreler:**
  - `Name` (string, gerekli): Pod'un adı.
  - `namespace` (string, gerekli): Pod'un ad alanı.
  - `containerName` (string, isteğe bağlı): Pod içindeki belirli kapsayıcı adı. Atlanırsa:
      - Pod'un bir kapsayıcısı varsa, günlükleri alınır.
      - Pod'un birden fazla kapsayıcısı varsa, tüm kapsayıcılardan günlükler alınır ve birleştirilir.

  **Örnek:**
  ```json
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "getPodsLogs",
      "arguments": {
        "Name": "my-app-pod-12345",
        "namespace": "production",
        "containerName": "main-container"
      }
    }
  }
  ```

  #### 6. `getNodeMetrics`

  Belirli bir düğüm için kaynak kullanım metriklerini alır.

  **Parametreler:**
  - `Name` (string, gerekli): Düğümün adı.

  **Örnek:**
  ```json
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "getNodeMetrics",
      "arguments": {
        "Name": "worker-node-1"
      }
    }
  }
  ```

  #### 7. `getPodMetrics`

  Belirli bir pod için CPU ve Bellek metriklerini alır.

  **Parametreler:**
  - `namespace` (string, gerekli): Pod'un ad alanı.
  - `podName` (string, gerekli): Pod'un adı.

  **Örnek:**
  ```json
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "getPodMetrics",
      "arguments": {
        "namespace": "default",
        "podName": "my-app-pod-67890"
      }
    }
  }
  ```

  #### 8. `getEvents`

  Belirli bir ad alanı veya kaynak için olayları alır.

  **Parametreler:**
  - `namespace` (string, isteğe bağlı): Ol
---

# Kubernetes MCP Server

A Kubernetes Model Context Protocol (MCP) server that provides tools for interacting with Kubernetes clusters through a standardized interface.

## Hosted deployment

A hosted deployment is available on [Fronteir AI](https://fronteir.ai/mcp/reza-gholizade-k8s-mcp-server).

## Features

- **API Resource Discovery**: Get all available API resources in your Kubernetes cluster.
- **Resource Listing**: List resources of any type with optional namespace and label filtering.
- **Resource Details**: Get detailed information about specific Kubernetes resources.
- **Resource Description**: Get comprehensive descriptions of Kubernetes resources, similar to `kubectl describe`.
- **Pod Logs**: Retrieve logs from specific pods (optionally from a specific container, or all containers if unspecified).
- **Node Metrics**: Get resource usage metrics for specific nodes.
- **Pod Metrics**: Get CPU and Memory metrics for specific pods.
- **Event Listing**: List events within a namespace or for a specific resource.
- **Resource Creation/Updating**: Create new Kubernetes resources or update existing ones from a YAML or JSON manifest.
- **Resource Deletion**: It deletes a resource in the Kubernetes cluster based on the provided namespace and kind.
- **Standardized Interface**: Uses the MCP protocol for consistent tool interaction.
- **Flexible Configuration**: Supports different Kubernetes contexts and resource scopes.
- **Multiple Modes**: Run in `stdio` mode for CLI tools, `sse` mode, or `streamable-http` mode for web applications, and `--readonly` for no change in the cluster.
- **Security**: Runs as non-root user in Docker containers for enhanced security.

## Prerequisites

- Go 1.23 or later
- Access to a Kubernetes cluster
- `kubectl` configured with appropriate cluster access

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/reza-gholizade/k8s-mcp-server.git
    cd k8s-mcp-server
    ```

2.  **Install dependencies:**
    ```bash
    go mod download
    ```

3.  **Build the server:**
    ```bash
    go build -o k8s-mcp-server main.go
    ```

## Usage

### Starting the Server

The server can run in three modes, configurable via command-line flags or environment variables.

#### Stdio Mode (for CLI integrations)
This mode uses standard input/output for communication.

```bash
./k8s-mcp-server --mode stdio
```
Or using environment variables:
```bash
SERVER_MODE=stdio ./k8s-mcp-server
```

#### SSE Mode (for web applications)
This mode starts an HTTP server with Server-Sent Events support.

Default (port 8080):
```bash
./k8s-mcp-server --mode sse
```
Specify a port:
```bash
./k8s-mcp-server --mode sse --port 9090
```
Or using environment variables:
```bash
SERVER_MODE=sse SERVER_PORT=9090 ./k8s-mcp-server
```
#### Streamable-HTTP Mode (for web applications)
This mode starts an HTTP server with streamable-http transport support, following the MCP specification.

Default (port 8080):
```bash
./k8s-mcp-server --mode streamable-http
```
Specify a port:
```bash
./k8s-mcp-server --mode streamable-http --port 9090
```
Or using environment variables:
```bash
SERVER_MODE=streamable-http SERVER_PORT=9090 ./k8s-mcp-server
```

The server will be available at `http://localhost:8080/mcp` (or your specified port).

If no mode is specified, it defaults to SSE on port 8080.

### Kubernetes Authentication

The server supports multiple authentication methods, which are tried in the following order of priority:

#### 1. Kubeconfig Content from Environment Variable

You can provide the entire kubeconfig file content via the `KUBECONFIG_DATA` environment variable:

```bash
export KUBECONFIG_DATA="$(cat ~/.kube/config)"
./k8s-mcp-server
```

This is useful when you want to avoid mounting files or when running in environments where file access is restricted.

#### 2. API Server URL and Token

You can authenticate using a Kubernetes API server URL and bearer token:

```bash
export KUBERNETES_SERVER="https://kubernetes.example.com:6443"
export KUBERNETES_TOKEN="your-bearer-token-here"
./k8s-mcp-server
```

Optional environment variables for TLS configuration:
- `KUBERNETES_CA_CERT`: CA certificate content (base64-encoded or PEM format)
- `KUBERNETES_CA_CERT_PATH`: Path to CA certificate file
- `KUBERNETES_INSECURE`: Set to `"true"` to skip TLS verification (not recommended for production)

Example with CA certificate:
```bash
export KUBERNETES_SERVER="https://kubernetes.example.com:6443"
export KUBERNETES_TOKEN="your-bearer-token-here"
export KUBERNETES_CA_CERT_PATH="/path/to/ca.crt"
./k8s-mcp-server
```

#### 3. In-Cluster Authentication (Service Account)

When running inside a Kubernetes cluster, the server automatically detects and uses the service account token from `/var/run/secrets/kubernetes.io/serviceaccount/token`. This is the recommended method for running the server as a pod within a cluster.

**Example Deployment:**

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: k8s-mcp-server-sa
  namespace: default
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: k8s-mcp-server-role
rules:
  - apiGroups: [""]
    resources: ["*"]
    verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
  - apiGroups: ["apps"]
    resources: ["*"]
    verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
  # Add more rules as needed for your use case
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: k8s-mcp-server-rb
subjects:
  - kind: ServiceAccount
    name: k8s-mcp-server-sa
    namespace: default
roleRef:
  kind: ClusterRole
  name: k8s-mcp-server-role
  apiGroup: rbac.authorization.k8s.io
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: k8s-mcp-server
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: k8s-mcp-server
  template:
    metadata:
      labels:
        app: k8s-mcp-server
    spec:
      serviceAccountName: k8s-mcp-server-sa
      containers:
        - name: k8s-mcp-server
          image: ginnux/k8s-mcp-server:latest
          ports:
            - containerPort: 8080
          env:
            - name: SERVER_MODE
              value: "sse"
            - name: SERVER_PORT
              value: "8080"
```

#### 4. Kubeconfig File Path (Default)

If none of the above methods are available, the server falls back to using a kubeconfig file:

- Uses the path provided via `--kubeconfig` flag (if implemented) or `KUBECONFIG` environment variable
- Defaults to `~/.kube/config` if neither is specified

```bash
# Using default ~/.kube/config
./k8s-mcp-server

# Using custom kubeconfig path
export KUBECONFIG=/path/to/your/kubeconfig
./k8s-mcp-server
```

**Note:** The server automatically detects which authentication method to use based on the available environment variables and file system. You don't need to explicitly configure the authentication method - it will use the first available method in the priority order listed above.

#### Read-Only Mode

The server supports a read-only mode that disables all write operations, providing a safer way to explore and monitor your Kubernetes cluster without the risk of making changes.

Enable read-only mode with the `--read-only` flag:

```bash
./k8s-mcp-server --read-only
```

You can combine read-only mode with any server mode:

```bash
# Read-only with stdio mode
./k8s-mcp-server --mode stdio --read-only

# Read-only with SSE mode
./k8s-mcp-server --mode sse --read-only

# Read-only with streamable-http mode
./k8s-mcp-server --mode streamable-http --read-only
```

When read-only mode is enabled, the following tools are disabled:
- `createResource` (Kubernetes resource creation/updates)
- `helmInstall` (Helm chart installations)
- `helmUpgrade` (Helm chart upgrades)
- `helmUninstall` (Helm chart uninstallations)
- `helmRollback` (Helm release rollbacks)
- `helmRepoAdd` (Helm repository additions)

All other read-only operations remain available, including listing resources, getting logs, viewing metrics, and inspecting Helm releases.

#### Tool Category Flags
You can selectively disable entire categories of tools using these flags:

**Disable Kubernetes Tools:**
```bash
./k8s-mcp-server --no-k8s
```

**Disable Helm Tools:**
```bash
./k8s-mcp-server --no-helm
```

**Combine with other flags:**
```bash
# Read-only mode with only Kubernetes tools (no Helm)
./k8s-mcp-server --read-only --no-helm

# Read-only mode with only Helm tools (no Kubernetes)
./k8s-mcp-server --read-only --no-k8s

# SSE mode with only Kubernetes tools
./k8s-mcp-server --mode sse --no-helm

```

**Note:** You cannot use both `--no-k8s` and `--no-helm` together, as this would result in no available tools. The server will exit with an error if both flags are provided.

When `--no-k8s` is enabled, all Kubernetes tools are disabled:
- `getAPIResources`, `listResources`, `getResource`, `describeResource`
- `getPodsLogs`, `getNodeMetrics`, `getPodMetrics`, `getEvents`
- `createResource` (if not in read-only mode)

When `--no-helm` is enabled, all Helm tools are disabled:
- `helmList`, `helmGet`, `helmHistory`, `helmRepoList`
- `helmInstall`, `helmUpgrade`, `helmUninstall`, `helmRollback`, `helmRepoAdd` (if not in read-only mode)

### Using the Docker Image

You can also run the server using the pre-built Docker image from Docker Hub.

1.  **Pull the image:**
    ```bash
    docker pull ginnux/k8s-mcp-server:latest
    ```
    You can replace `latest` with a specific version tag (e.g., `1.0.0`).

2.  **Run the container:**

    **Note:** The server supports multiple authentication methods. You can either mount a kubeconfig file (as shown below) or use environment variables for authentication (see [Kubernetes Authentication](#kubernetes-authentication) section above).

    *   **SSE Mode (default behavior of the image):**
        ```bash
        docker run -p 8080:8080 -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest
        ```
        This maps port 8080 of the container to port 8080 on your host and mounts your Kubernetes config read-only to the non-root user's home directory. The server will be available at `http://localhost:8080`. The image defaults to `sse` mode on port `8080`.

    *   **Streamable-HTTP Mode:**
        ```bash
        docker run -p 8080:8080 -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest --mode streamable-http
        ```
        This runs the server in streamable-http mode. The server will be available at `http://localhost:8080/mcp`.

    *   **Stdio Mode:**
        ```bash
        docker run -i --rm -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest --mode stdio
        ```
        The `-i` flag is important for interactive stdio communication. `--rm` cleans up the container after exit.

    *   **Custom Port for SSE Mode:**
        ```bash
        docker run -p 9090:9090 -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest --mode sse --port 9090
        ```

    *   **Custom Port for Streamable-HTTP Mode:**
        ```bash
        docker run -p 9090:9090 -v ~/.kube/config:/home/appuser/.kube/config:ro ginnux/k8s-mcp-server:latest --mode streamable-http --port 9090
        ```

    *   **Alternative: Mount entire .kube directory:**
        ```bash
        docker run -p 8080:8080 -v ~/.kube:/home/appuser/.kube:ro ginnux/k8s-mcp-server:latest
        ```

    *   **Using environment variables for authentication (no file mounting required):**
        ```bash
        # Using kubeconfig content from environment variable
        docker run -p 8080:8080 \
          -e KUBECONFIG_DATA="$(cat ~/.kube/config)" \
          ginnux/k8s-mcp-server:latest

        # Or using API server URL and token
        docker run -p 8080:8080 \
          -e KUBERNETES_SERVER="https://kubernetes.example.com:6443" \
          -e KUBERNETES_TOKEN="your-token-here" \
          -e KUBERNETES_CA_CERT_PATH="/path/to/ca.crt" \
          -v /path/to/ca.crt:/path/to/ca.crt:ro \
          ginnux/k8s-mcp-server:latest
        ```

#### Using with Docker Compose

Create a `docker-compose.yml` file:

**Option 1: Using kubeconfig file (traditional method):**
```yaml
version: '3.8'
services:
  k8s-mcp-server:
    image: ginnux/k8s-mcp-server:latest # Or a specific version
    container_name: k8s-mcp-server
    ports:
      - "8080:8080" # Host:Container, adjust if using a different SERVER_PORT
    volumes:
      - ~/.kube:/home/appuser/.kube:ro # Mount kubeconfig read-only to non-root user home
    environment:
      - KUBECONFIG=/home/appuser/.kube/config
      - SERVER_MODE=sse # Can be 'stdio', 'sse', or 'streamable-http'
      - SERVER_PORT=8080 # Port for SSE/streamable-http modes
    # command: ["--read-only"] # Uncomment this line to enable read-only mode
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
```

**Option 2: Using environment variables (no file mounting):**
```yaml
version: '3.8'
services:
  k8s-mcp-server:
    image: ginnux/k8s-mcp-server:latest
    container_name: k8s-mcp-server
    ports:
      - "8080:8080"
    environment:
      - KUBECONFIG_DATA=${KUBECONFIG_DATA} # Set this in your .env file or shell
      # Or use API server and token:
      # - KUBERNETES_SERVER=https://kubernetes.example.com:6443
      # - KUBERNETES_TOKEN=${KUBERNETES_TOKEN}
      - SERVER_MODE=sse
      - SERVER_PORT=8080
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
```

**Note:** To enable read-only mode, use the `command` override as shown in Option 1. For stdio mode, you might need to adjust 'ports', add 'stdin_open: true' and 'tty: true', and potentially override the command.

Then start with:
```bash
docker compose up -d
```
To see logs: `docker compose logs -f k8s-mcp-server`.

#### Security Considerations

The Docker image runs as a non-root user (`appuser` with UID 1001) for enhanced security:
- The application binary is located at `/usr/local/bin/k8s-mcp-server`
- The kubeconfig should be mounted to `/home/appuser/.kube/config`
- Health checks are enabled to monitor container status
- The container includes minimal dependencies (ca-certificates and curl only)

#### Making API Calls (SSE/Streamable-HTTP Mode)
Once the server is running in SSE or streamable-http mode, you can make JSON-RPC calls to its HTTP endpoint:
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getAPIResources",
    "arguments": {
      "includeNamespaceScoped": true,
      "includeClusterScoped": true
    }
  }
}' http://localhost:8080/
```

You can also check the health status:
```bash
curl -f http://localhost:8080/
```

### Available Tools

#### 1. `getAPIResources`

Retrieves all available API resources in the Kubernetes cluster.

**Parameters:**
- `includeNamespaceScoped` (boolean, optional): Whether to include namespace-scoped resources (defaults to true).
- `includeClusterScoped` (boolean, optional): Whether to include cluster-scoped resources (defaults to true).

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getAPIResources",
    "arguments": {
      "includeNamespaceScoped": true,
      "includeClusterScoped": true
    }
  }
}
```

#### 2. `listResources`

Lists all instances of a specific resource type.

**Parameters:**
- `Kind` (string, required): The kind of resource to list (e.g., "Pod", "Deployment").
- `namespace` (string, optional): The namespace to list resources from. If omitted, lists across all namespaces for namespaced resources (subject to RBAC).
- `labelSelector` (string, optional): Filter resources by label selector (e.g., "app=nginx,env=prod").

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "listResources",
    "arguments": {
      "Kind": "Pod",
      "namespace": "default",
      "labelSelector": "app=nginx"
    }
  }
}
```

#### 3. `getResource`

Retrieves detailed information about a specific resource.

**Parameters:**
- `kind` (string, required): The kind of resource to get (e.g., "Pod", "Deployment").
- `name` (string, required): The name of the resource to get.
- `namespace` (string, optional): The namespace of the resource (required for namespaced resources).

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getResource",
    "arguments": {
      "kind": "Pod",
      "name": "nginx-pod",
      "namespace": "default"
    }
  }
}
```

#### 4. `describeResource`

Describes a resource in the Kubernetes cluster, similar to `kubectl describe`.

**Parameters:**
- `Kind` (string, required): The kind of resource to describe (e.g., "Pod", "Deployment").
- `name` (string, required): The name of the resource to describe.
- `namespace` (string, optional): The namespace of the resource (required for namespaced resources).

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "describeResource",
    "arguments": {
      "Kind": "Pod",
      "name": "nginx-pod",
      "namespace": "default"
    }
  }
}
```

#### 5. `getPodsLogs`

Retrieves the logs of a specific pod.

**Parameters:**
- `Name` (string, required): The name of the pod.
- `namespace` (string, required): The namespace of the pod.
- `containerName` (string, optional): The specific container name within the pod. If omitted:
    - If the pod has one container, its logs are fetched.
    - If the pod has multiple containers, logs from all containers are fetched and concatenated.

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getPodsLogs",
    "arguments": {
      "Name": "my-app-pod-12345",
      "namespace": "production",
      "containerName": "main-container"
    }
  }
}
```

#### 6. `getNodeMetrics`

Retrieves resource usage metrics for a specific node.

**Parameters:**
- `Name` (string, required): The name of the node.

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getNodeMetrics",
    "arguments": {
      "Name": "worker-node-1"
    }
  }
}
```

#### 7. `getPodMetrics`

Retrieves CPU and Memory metrics for a specific pod.

**Parameters:**
- `namespace` (string, required): The namespace of the pod.
- `podName` (string, required): The name of the pod.

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getPodMetrics",
    "arguments": {
      "namespace": "default",
      "podName": "my-app-pod-67890"
    }
  }
}
```

#### 8. `getEvents`

Retrieves events for a specific namespace or resource.

**Parameters:**
- `namespace` (string, optional): The namespace to get events from. If omitted, events from all namespaces are considered (subject to RBAC).
- `resourceName` (string, optional): The name of a specific resource (e.g., a Pod name) to filter events for.
- `resourceKind` (string, optional): The kind of the specific resource (e.g., "Pod") if `resourceName` is provided.

**Example (Namespace Events):**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getEvents",
    "arguments": {
      "namespace": "default"
    }
  }
}
```

**Example (Resource Events):**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getEvents",
    "arguments": {
      "namespace": "production",
      "resourceName": "my-app-pod-12345",
      "resourceKind": "Pod"
    }
  }
}
```

#### 9. `createOrUpdateResource`

Creates a new resource or updates an existing one from a JSON manifest.

**Parameters:**
- `manifest` (string, required): The JSON manifest of the resource.
- `namespace` (string, optional): The namespace in which to create/update the resource. If the manifest contains a namespace, this parameter can be used to override it. If not provided and the manifest doesn't specify one, "default" might be assumed or it might be an error depending on the resource type.

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "createResource",
    "arguments": {
      "kind": "Deployment",
      "namespace": "default",
      "manifest": "{\"apiVersion\":\"apps/v1\",\"kind\":\"Deployment\",\"metadata\":{\"name\":\"nginx-deployment\"},\"spec\":{\"replicas\":1,\"selector\":{\"matchLabels\":{\"app\":\"nginx\"}},\"template\":{\"metadata\":{\"labels\":{\"app\":\"nginx\"}},\"spec\":{\"containers\":[{\"name\":\"nginx\",\"image\":\"nginx:latest\"}]}}}}"
    }
  }
}
```

#### 10. `createOrUpdateResourceYAML`

Creates a new resource or updates an existing one from a YAML manifest. This tool is specifically optimized for YAML input and provides better error handling for YAML parsing issues.

**Parameters:**
- `manifest` (string, required): The YAML manifest of the resource.
- `namespace` (string, optional): The namespace in which to create/update the resource. If the manifest contains a namespace, this parameter can be used to override it. If not provided and the manifest doesn't specify one, "default" might be assumed or it might be an error depending on the resource type.
- `kind` (string, optional): The kind of the resource. If not provided, the kind will be inferred from the YAML manifest.

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "createOrUpdateResourceYAML",
    "arguments": {
      "namespace": "default",
      "manifest": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-new-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:latest"
    }
  }
}
```

#### 11. `rolloutRestart`

Triggers a rolling restart of a Kubernetes resource that supports spec.template.metadata.annotations. This includes Deployment, DaemonSet, StatefulSet, Job, and similar resources.

**Parameters:**
- `kind` (string, required): The kind of resource (e.g., "Deployment", "StatefulSet").
- `name`: (string, required): The name of the resource to restart.
- `namespace` (string, required for namespaced resources): The namespace of the resource.

**Example (StatefulSet):**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "rolloutRestart",
    "arguments": {
      "kind": "StatefulSet",
      "name": "redis-cluster-01",
      "namespace": "default"
    }
  }
}
```
**Example (Deployment):**
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "rolloutRestart",
    "arguments": {
      "kind": "Deployment",
      "name": "my-app-deployment",
      "namespace": "default"
    }
  }
}
```

#### 12. `deleteResource`

Deletes a specific resource from the Kubernetes cluster.

**Parameters:**
- `kind` (string, required): The type of resource to delete.
- `name` (string, required): The name of the resource to delete.
- `namespace` (string, optional): The namespace of the resource (required for namespaced resources).

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "deleteResource",
    "arguments": {
      "kind": "Pod",
      "name": "my-pod",
      "namespace": "default"
    }
  }
}
```

#### 13. `getIngresses`

Retrieves ingress resources from the Kubernetes cluster.
You can filter ingresses by host. If no host is provided, all ingresses are returned.

**Parameters:**
- `host` (string, optional): The host to filter ingresses by. If omitted, all ingresses are included.

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "getIngresses",
    "arguments": {
      "host": "example.com"
    }
  }
}
```

### Helm Operations

#### 14. `helmInstall`

Install a Helm chart to the Kubernetes cluster.

**Parameters:**
- `releaseName` (string, required): Name of the Helm release
- `chartName` (string, required): Name or path of the Helm chart
- `namespace` (string, optional): Kubernetes namespace for the release (defaults to "default")
- `repoURL` (string, optional): Helm repository URL
- `values` (object, optional): Values to override in the chart

**Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "helmInstall",
    "arguments": {
      "releaseName": "my-nginx",
      "chartName": "bitnami/nginx",
      "namespace": "web",
      "repoURL": "https://charts.bitnami.com/bitnami",
      "values": {
        "replicaCount": 3,
        "service": {
          "type": "LoadBalancer"
        }
      }
    }
  }
}
```

#### 15. `helmUpgrade`

Upgrade an existing Helm release.

**Parameters:**
- `releaseName` (string, required): Name of the Helm release
- `chartName` (string, required): Name or path of the Helm chart
- `namespace` (string, required): Kubernetes namespace for the release (defaults to "default")
- `repoURL` (string, required): Helm repository URL
- `values` (object, required): Values to override in the chart
  **Example:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "helmUpgrade",
    "arguments": {
      "releaseName": "my-nginx",
      "chartName": "nginx",
      "namespace": "web",
      "repoURL": "https://charts.bitnami.com/bitnami",
      "values": {
        "replicaCount": 2,
        "service": {
          "type": "NodePort"
        }
      }
    }
  }
}
```

#### 16. `helmList`

List all Helm releases in the cluster or a specific namespace.

#### 17. `helmGet`

Get details of a specific Helm release.

#### 18. `helmHistory`

Get the history of a Helm release.

#### 19. `helmRollback`

Rollback a Helm release to a previous revision.

#### 20. `helmUninstall`

Uninstall a Helm release from the Kubernetes cluster.

### Adding New Tools

1.  **Define the Tool**: In `tools/tools.go`, define a function that returns an `mcp.Tool` structure. This includes the tool's name, description, and input/output schemas.
2.  **Implement the Handler**: In `handlers/handlers.go`, create a handler function. This function takes `*k8s.Client` as an argument and returns a function with the signature `func(context.Context, mcp.ToolInput) (mcp.ToolOutput, error)`. This inner function will contain the logic for your tool.
3.  **Register the Tool**: In `main.go`, add your new tool to the MCP server instance using `s.AddTool(tools.YourToolDefinitionFunction(), handlers.YourToolHandlerFunction(client))`.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License
gholizade.net@gmail.com

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<a href="https://glama.ai/mcp/servers/@reza-gholizade/k8s-mcp-server">
  
</a>

## VS Code Integration

### Quick Setup

#### Automatic Installation (Recommended)

**macOS/Linux:**
```bash
curl -sSL https://raw.githubusercontent.com/reza-gholizade/k8s-mcp-server/main/scripts/install-vscode-config.sh | bash
```

**Windows (PowerShell):**
```powershell
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/reza-gholizade/k8s-mcp-server/main/scripts/install-vscode-config.ps1'))
```

#### Manual Installation

1. **Install the MCP extension in VS Code:**
   ```bash
   code --install-extension modelcontextprotocol.mcp
   ```

2. **Add to your VS Code settings.json:**

   Open VS Code settings (Cmd/Ctrl + ,) → Open Settings JSON → Add:

   **macOS/Linux:**
   ```json
   {
     "mcp.mcpServers": {
       "k8s-mcp-server": {
         "command": "k8s-mcp-server",
         "args": ["--mode", "stdio"],
         "env": {
           "KUBECONFIG": "${env:HOME}/.kube/config"
         }
       }
     }
   }
   ```

   **Read-Only Mode (recommended for safety):**
   ```json
   {
     "mcp.mcpServers": {
       "k8s-mcp-server": {
         "command": "k8s-mcp-server",
         "args": ["--mode", "stdio", "--read-only"],
         "env": {
           "KUBECONFIG": "${env:HOME}/.kube/config"
         }
       }
     }
   }
   ```

   **Kubernetes Tools Only:**
   ```json
   {
     "mcp.mcpServers": {
       "k8s-mcp-server": {
         "command": "k8s-mcp-server",
         "args": ["--mode", "stdio", "--no-helm"],
         "env": {
           "KUBECONFIG": "${env:HOME}/.kube/config"
         }
       }
     }
   }
   ```

   **Helm Tools Only:**
   ```json
   {
     "mcp.mcpServers": {
       "k8s-mcp-server": {
         "command": "k8s-mcp-server",
         "args": ["--mode", "stdio", "--no-k8s"],
         "env": {
           "KUBECONFIG": "${env:HOME}/.kube/config"
         }
       }
     }
   }
   ```

   **Read-Only with Kubernetes Tools Only:**
   ```json
   {
     "mcp.mcpServers": {
       "k8s-mcp-server": {
         "command": "k8s-mcp-server",
         "args": ["--mode", "stdio", "--read-only", "--no-helm"],
         "env": {
           "KUBECONFIG": "${env:HOME}/.kube/config"
         }
       }
     }
   }
   ```

   **Windows:**
   ```json
   {
     "mcp.mcpServers": {
       "k8s-mcp-server": {
         "command": "k8s-mcp-server.exe",
         "args": ["--mode", "stdio"],
         "env": {
           "KUBECONFIG": "${env:USERPROFILE}/.kube/config"
         }
       }
     }
   }
   ```

3. **Ensure the binary is in your PATH:**

   Download the appropriate binary from the [releases page](https://github.com/reza-gholizade/k8s-mcp-server/releases) and add it to your system PATH.

4. **Restart VS Code**

### Usage in VS Code

Once configured, you can use the Kubernetes MCP server in VS Code with Claude or other MCP-compatible tools:

1. Open VS Code
2. Access Claude (or other MCP-enabled AI assistant)
3. Use natural language to interact with your Kubernetes cluster:
   - "List all pods in the default namespace"
   - "Show me the logs for pod nginx-123"
   - "Get the CPU usage for worker-node-1"
   - "Describe the deployment called my-app"

### Configuration Options

You can customize the configuration by modifying the settings:

```json
{
  "mcp.mcpServers": {
    "k8s-mcp-server": {
      "command": "k8s-mcp-server",
      "args": ["--mode", "stdio"],
      "env": {
        "KUBECONFIG": "/path/to/your/kubeconfig",
        "KUBERNETES_CONTEXT": "your-context-name"
      }
    }
  }
}
```

### Troubleshooting

- **Binary not found**: Ensure `k8s-mcp-server` is in your PATH
- **Kubernetes connection issues**: Verify your `KUBECONFIG` path is correct
- **Permission errors**: Ensure your kubeconfig has the necessary RBAC permissions
- **Extension not loading**: Restart VS Code after configuration changes
