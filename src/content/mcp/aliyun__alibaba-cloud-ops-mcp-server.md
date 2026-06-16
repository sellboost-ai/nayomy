---
name: "aliyun/alibaba-cloud-ops-mcp-server"
description: "A MCP server that enables AI assistants to operation resources on Alibaba Cloud, supporting ECS, Cloud Monitor, OOS and widely used cloud products."
category: "Cloud Platforms"
repo: "aliyun/alibaba-cloud-ops-mcp-server"
stars: 116
url: "https://github.com/aliyun/alibaba-cloud-ops-mcp-server"
body_length: 8164
license: "Apache-2.0"
language: "Python"
body_tr: |-
  # Alibaba Cloud Ops MCP Server

  [![GitHub stars](https://img.shields.io/github/stars/aliyun/alibaba-cloud-ops-mcp-server?style=social)](https://github.com/aliyun/alibaba-cloud-ops-mcp-server)

  [中文版本](./README_zh.md)

  Alibaba Cloud Ops MCP Server, Alibaba Cloud API'leriyle kesintisiz entegrasyon sağlayan bir [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) sunucusudur. AI asistanlarının Alibaba Cloud üzerindeki kaynakları işletmesine olanak tanır; ECS, Cloud Monitor, OOS, OSS, VPC, RDS ve diğer yaygın olarak kullanılan bulut ürünlerini destekler. Ayrıca AI asistanlarının uygulamaları analiz etmesine, derlemesine ve Alibaba Cloud ECS örneklerine dağıtmasına imkan verir.

  ## MCP Marketplace Entegrasyonu

  * [Qoder](https://qoder.com) <a href="qoder://aicoding.aicoding-deeplink/mcp/add?name=alibaba-cloud-ops-mcp-server&config=JTdCJTIyY29tbWFuZCUyMiUzQSUyMnV2eCUyMiUyQyUyMmFyZ3MlMjIlM0ElNUIlMjJhbGliYWJhLWNsb3VkLW9wcy1tY3Atc2VydmVyJTQwbGF0ZXN0JTIyJTVEJTJDJTIyZW52JTIyJTNBJTdCJTIyQUxJQkFCQV9DTE9VRF9BQ0NFU1NfS0VZX0lEJTIyJTNBJTIyWW91ciUyMEFjY2VzcyUyMEtleSUyMElkJTIyJTJDJTIyQUxJQkFCQV9DTE9VRF9BQ0NFU1NfS0VZX1NFQ1JFVCUyMiUzQSUyMllvdXIlMjBBY2Nlc3MlMjBLZXklMjBTRUNSRVQlMjIlN0QlN0Q%3D"></a>
  * [Cursor](https://docs.cursor.com/tools) [![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=alibaba-cloud-ops-mcp-server&config=eyJ0aW1lb3V0Ijo2MDAsImNvbW1hbmQiOiJ1dnggYWxpYmFiYS1jbG91ZC1vcHMtbWNwLXNlcnZlckBsYXRlc3QiLCJlbnYiOnsiQUxJQkFCQV9DTE9VRF9BQ0NFU1NfS0VZX0lEIjoiWW91ciBBY2Nlc3MgS2V5IElkIiwiQUxJQkFCQV9DTE9VRF9BQ0NFU1NfS0VZX1NFQ1JFVCI6IllvdXIgQWNjZXNzIEtleSBTZWNyZXQifX0%3D)
  * [Cline](https://cline.bot/mcp-marketplace)
  * [ModelScope](https://www.modelscope.cn/mcp/servers/@aliyun/alibaba-cloud-ops-mcp-server?lang=en_US)
  * [Lingma](https://lingma.aliyun.com/)
  * [Smithery AI](https://smithery.ai/server/@aliyun/alibaba-cloud-ops-mcp-server)
  * [FC-Function AI](https://cap.console.aliyun.com/template-detail?template=237)
  * [Alibaba Cloud Model Studio](https://bailian.console.aliyun.com/?tab=mcp#/mcp-market/detail/alibaba-cloud-ops)

  ## Özellikler

  - **ECS Yönetimi**: Instance'ları oluşturma, başlatma, durdurma, yeniden başlatma, silme, komut çalıştırma, instance'ları, bölgeleri, availability zone'ları, image'ları, security group'ları ve daha fazlasını görüntüleme
  - **VPC Yönetimi**: VPC'leri ve VSwitchları görüntüleme
  - **RDS Yönetimi**: RDS instance'larını listeleme, başlatma, durdurma ve yeniden başlatma
  - **OSS Yönetimi**: Bucket'ları listeleme, oluşturma, silme ve objeleri görüntüleme
  - **Cloud Monitor**: ECS instance'ları için CPU kullanımı, yük ortalaması, bellek kullanımı ve disk kullanımı metriklerini alma
  - **Uygulama Dağıtımı**: Otomatik uygulama ve uygulama grubu yönetimi ile ECS instance'larına uygulamaları dağıtma
  - **Proje Analizi**: Proje teknoloji yığınını ve dağıtım yöntemlerini otomatik olarak belirleme (npm, Python, Java, Go, Docker, vb.)
  - **Yerel Dosya İşlemleri**: Dizinleri listeleme, shell scriptlerini çalıştırma ve proje yapılarını analiz etme
  - **Dinamik API Tool'ları**: Alibaba Cloud OpenAPI işlemleri için destek

  ## Hazırlık

  [uv](https://github.com/astral-sh/uv) yükleyin

  ```bash
  # macOS ve Linux'ta.
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  ## Konfigürasyon

  MCP Server'ı yapılandırmak için [VS Code](https://code.visualstudio.com/) + [Cline](https://cline.bot/) kullanın.

  `alibaba-cloud-ops-mcp-server` MCP Server'ını herhangi bir MCP Client ile kullanmak için, bu yapılandırmayı el ile ekleyip değişikliklerin etkili olması için yeniden başlatabilirsiniz:

  ```json
  {
    "mcpServers": {
      "alibaba-cloud-ops-mcp-server": {
        "timeout": 600,
        "command": "uvx",
        "args": [
          "alibaba-cloud-ops-mcp-server@latest"
        ],
        "env": {
          "ALIBABA_CLOUD_ACCESS_KEY_ID": "Your Access Key ID",
          "ALIBABA_CLOUD_ACCESS_KEY_SECRET": "Your Access Key SECRET"
        }
      }
    }
  }
  ```

  [Ayrıntılı parametre açıklaması için MCP başlangıç parametresi belgesine bakın](./README_mcp_args.md)

  ## Daha Fazla Bilgi

  * [Alibaba Cloud Ops MCP Server kullanıma hazır!](https://developer.aliyun.com/article/1661348)
  * [Bailian'da Alibaba Cloud Ops MCP Server'ı Kurun](https://developer.aliyun.com/article/1662120)
  * [10 Satır Kod ile Kendi Alibaba Cloud OpenAPI MCP Server'ınızı Oluşturun](https://developer.aliyun.com/article/1662202)
  * [Alibaba Cloud Ops MCP Server Resmi Olarak Alibaba Cloud Model Studio Platform MCP Marketplace'de Kullanılabilir](https://developer.aliyun.com/article/1665019)

  ## Tool'lar

  | **Ürün** | **Tool** | **Fonksiyon** | **Uygulama** | **Durum** |
  | --- | --- | --- | --- | --- |
  | ECS | RunCommand | Komut Çalıştır | OOS | Tamamlandı |
  | | StartInstances | Instance'ları Başlat | OOS | Tamamlandı |
  | | StopInstances | Instance'ları Durdur | OOS | Tamamlandı |
  | | RebootInstances | Instance'ları Yeniden Başlat | OOS | Tamamlandı |
  | | DescribeInstances | Instance'ları Görüntüle | API | Tamamlandı |
  | | DescribeRegions | Bölgeleri Görüntüle | API | Tamamlandı |
  | | DescribeZones | Availability Zone'ları Görüntüle | API | Tamamlandı |
  | | DescribeAvailableResource | Kaynak Envanterini Görüntüle | API | Tamamlandı |
  | | DescribeImages | Image'ları Görüntüle | API | Tamamlandı |
  | | DescribeSecurityGroups | Security Group'ları Görüntüle | API | Tamamlandı |
  | | RunInstances | Instance'ları Oluştur | OOS | Tamamlandı |
  | | DeleteInstances | Instance'ları Sil | API | Tamamlandı |
  | | ResetPassword | Şifreyi Değiştir | OOS | Tamamlandı |
  | | ReplaceSystemDisk | İşletim Sistemini Değiştir | OOS | Tamamlandı |
  | VPC | DescribeVpcs | VPC'leri Görüntüle | API | Tamamlandı |
  | | DescribeVSwitches | VSwitchları Görüntüle | API | Tamamlandı |
  | RDS | DescribeDBInstances | RDS Instance'larını Listele | API | Tamamlandı |
  |  | StartDBInstances | RDS instance'ını Başlat | OOS | Tamamlandı |
  |  | StopDBInstances | RDS instance'ını Durdur | OOS | Tamamlandı |
  |  | RestartDBInstances | RDS instance'ını Yeniden Başlat | OOS | Tamamlandı |
  | OSS | ListBuckets | Bucket'ları Listele | API | Tamamlandı |
  |  | PutBucket | Bucket Oluştur | API | Tamamlandı |
  |  | DeleteBucket | Bucket Sil | API | Tamamlandı |
  |  | ListObjects | Bucket'taki Objeleri Görüntüle | API | Tamamlandı |
  | CloudMonitor | GetCpuUsageData | ECS Instance'ları için CPU Kullanım Verisi Alın | API | Tamamlandı |
  | | GetCpuLoadavgData | CPU Bir Dakikalık Ortalama Yük Metrik Verisi Alın | API | Tamamlandı |
  | | GetCpuloadavg5mData | CPU Beş Dakikalık Ortalama Yük Metrik Verisi Alın | API | Tamamlandı |
  | | GetCpuloadavg15mData | CPU On Beş Dakikalık Ortalama Yük Metrik Verisi Alın | API | Tamamlandı |
  | | GetMemUsedData | Bellek Kullanımı Metrik Verisi Alın | API | Tamamlandı |
  | | GetMemUsageData | Bellek Kullanım Oranı Metrik Verisi Alın | API | Tamamlandı |
  | | GetDiskUsageData | Disk Kullanım Oranı Metrik Verisi Alın | API | Tamamlandı |
  | | GetDiskTotalData | Toplam Disk Bölümü Kapasitesi Metrik Verisi Alın | API | Tamamlandı |
  | | GetDiskUsedData | Disk Bölümü Kullanım Metrik Verisi Alın | API | Tamamlandı |
  | Uygulama Yönetimi | OOS_CodeDeploy | ECS instance'larına uygulamaları dağıtın, OSS'ye otomatik artefakt yükleyin | OOS | Tamamlandı |
  | | OOS_GetDeployStatus | Uygulama gruplarının dağıtım durumunu sorgulayın | API | Tamamlandı |
  | | OOS_GetLastDeploymentInfo | Son dağıtım hakkında bilgi alın | API | Tamamlandı |
  | Yerel | LOCAL_ListDirectory | Dizindeki dosya ve alt dizinleri listeleyin | Yerel | Tamamlandı |
  | | LOCAL_RunShellScript | Shell scriptlerini veya komutlarını çalıştırın | Yerel | Tamamlandı |
  | | LOCAL_AnalyzeDeployStack | Proje dağıtım yöntemlerini ve teknoloji yığınını belirleyin | Yerel | Tamamlandı |

  ## Dağıtım İş Akışı

  Tipik dağıtım iş akışı şunları içerir:

  1. **Proje Analizi**: Projenin teknoloji yığınını ve dağıtım yöntemini belirlemek için `LOCAL_AnalyzeDeployStack` kullanın
  2. **Artefakt Derleyin**: Uygulamayı yerel olarak derleyin veya paketleyin (örn. tar.gz veya zip dosyaları oluşturun)
  3. **Uygulamayı Dağıtın**: `OOS_CodeDeploy` kullanarak uygulamayı ECS instance'larına dağıtın
     - Mevcut değilse uygulama ve uygulama grubunu otomatik olarak oluşturur
     - Artefaktları OSS'ye yükler
     - Belirtilen ECS instance'larına dağıtır
  4. **Dağıtımı İzleyin**: Dağıtım durumunu kontrol etmek için `OOS_GetDeployStatus` kullanın

  ## Bize Ulaşın

  Herhangi bir sorunuz varsa, lütfen [Alibaba Cloud Ops MCP tartışma grubuna](https://qr.dingtalk.com/action/joingroup?code=v1,k1,iFxYG4jjLVh1jfmNAkkclji7CN5DSIdT+jvFsLyI60I=&_dt_no_comment=1&origin=11) (DingTalk grubu: 113455011677) katılın.
---

# Alibaba Cloud Ops MCP Server

[![GitHub stars](https://img.shields.io/github/stars/aliyun/alibaba-cloud-ops-mcp-server?style=social)](https://github.com/aliyun/alibaba-cloud-ops-mcp-server)

[中文版本](./README_zh.md)

Alibaba Cloud Ops MCP Server is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that provides seamless integration with Alibaba Cloud APIs, enabling AI assistants to operate resources on Alibaba Cloud, supporting ECS, Cloud Monitor, OOS, OSS, VPC, RDS and other widely used cloud products. It also enables AI assistants to analyze, build, and deploy applications to Alibaba Cloud ECS instances.

## MCP Maketplace Integration

* [Qoder](https://qoder.com) <a href="qoder://aicoding.aicoding-deeplink/mcp/add?name=alibaba-cloud-ops-mcp-server&config=JTdCJTIyY29tbWFuZCUyMiUzQSUyMnV2eCUyMiUyQyUyMmFyZ3MlMjIlM0ElNUIlMjJhbGliYWJhLWNsb3VkLW9wcy1tY3Atc2VydmVyJTQwbGF0ZXN0JTIyJTVEJTJDJTIyZW52JTIyJTNBJTdCJTIyQUxJQkFCQV9DTE9VRF9BQ0NFU1NfS0VZX0lEJTIyJTNBJTIyWW91ciUyMEFjY2VzcyUyMEtleSUyMElkJTIyJTJDJTIyQUxJQkFCQV9DTE9VRF9BQ0NFU1NfS0VZX1NFQ1JFVCUyMiUzQSUyMllvdXIlMjBBY2Nlc3MlMjBLZXklMjBTRUNSRVQlMjIlN0QlN0Q%3D"></a>
* [Cursor](https://docs.cursor.com/tools) [![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=alibaba-cloud-ops-mcp-server&config=eyJ0aW1lb3V0Ijo2MDAsImNvbW1hbmQiOiJ1dnggYWxpYmFiYS1jbG91ZC1vcHMtbWNwLXNlcnZlckBsYXRlc3QiLCJlbnYiOnsiQUxJQkFCQV9DTE9VRF9BQ0NFU1NfS0VZX0lEIjoiWW91ciBBY2Nlc3MgS2V5IElkIiwiQUxJQkFCQV9DTE9VRF9BQ0NFU1NfS0VZX1NFQ1JFVCI6IllvdXIgQWNjZXNzIEtleSBTZWNyZXQifX0%3D)
* [Cline](https://cline.bot/mcp-marketplace)
* [ModelScope](https://www.modelscope.cn/mcp/servers/@aliyun/alibaba-cloud-ops-mcp-server?lang=en_US)
* [Lingma](https://lingma.aliyun.com/)
* [Smithery AI](https://smithery.ai/server/@aliyun/alibaba-cloud-ops-mcp-server)
* [FC-Function AI](https://cap.console.aliyun.com/template-detail?template=237)
* [Alibaba Cloud Model Studio](https://bailian.console.aliyun.com/?tab=mcp#/mcp-market/detail/alibaba-cloud-ops)

## Features

- **ECS Management**: Create, start, stop, reboot, delete instances, run commands, view instances, regions, zones, images, security groups, and more
- **VPC Management**: View VPCs and VSwitches
- **RDS Management**: List, start, stop, and restart RDS instances
- **OSS Management**: List, create, delete buckets, and view objects
- **Cloud Monitor**: Get CPU usage, load average, memory usage, and disk usage metrics for ECS instances
- **Application Deployment**: Deploy applications to ECS instances with automatic application and application group management
- **Project Analysis**: Automatically identify project technology stack and deployment methods (npm, Python, Java, Go, Docker, etc.)
- **Local File Operations**: List directories, run shell scripts, and analyze project structures
- **Dynamic API Tools**: Support for Alibaba Cloud OpenAPI operations

## Prepare

Install [uv](https://github.com/astral-sh/uv)

```bash
# On macOS and Linux.
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Configuration

Use [VS Code](https://code.visualstudio.com/) + [Cline](https://cline.bot/) to config MCP Server.

To use `alibaba-cloud-ops-mcp-server` MCP Server with any other MCP Client, you can manually add this configuration and restart for changes to take effect:

```json
{
  "mcpServers": {
    "alibaba-cloud-ops-mcp-server": {
      "timeout": 600,
      "command": "uvx",
      "args": [
        "alibaba-cloud-ops-mcp-server@latest"
      ],
      "env": {
        "ALIBABA_CLOUD_ACCESS_KEY_ID": "Your Access Key ID",
        "ALIBABA_CLOUD_ACCESS_KEY_SECRET": "Your Access Key SECRET"
      }
    }
  }
}
```

[For detailed parameter description, see MCP startup parameter document](./README_mcp_args.md)

## Know More

* [Alibaba Cloud Ops MCP Server is ready to use out of the box!！](https://developer.aliyun.com/article/1661348)
* [Setup Alibaba Cloud Ops MCP Server on Bailian](https://developer.aliyun.com/article/1662120)
* [Build your own Alibaba Cloud OpenAPI MCP Server with 10 lines of code](https://developer.aliyun.com/article/1662202)
* [Alibaba Cloud Ops MCP Server is officially available on the Alibaba Cloud Model Studio Platform MCP Marketplace](https://developer.aliyun.com/article/1665019)

## Tools

| **Product** | **Tool** | **Function** | **Implementation** | **Status** |
| --- | --- | --- | --- | --- |
| ECS | RunCommand | Run Command | OOS | Done |
| | StartInstances | Start Instances | OOS | Done |
| | StopInstances | Stop Instances | OOS | Done |
| | RebootInstances | Reboot Instances | OOS | Done |
| | DescribeInstances | View Instances | API | Done |
| | DescribeRegions | View Regions | API | Done |
| | DescribeZones | View Zones | API | Done |
| | DescribeAvailableResource | View Resource Inventory | API | Done |
| | DescribeImages | View Images | API | Done |
| | DescribeSecurityGroups | View Security Groups | API | Done |
| | RunInstances | Create Instances | OOS | Done |
| | DeleteInstances | Delete Instances | API | Done |
| | ResetPassword | Modify Password | OOS | Done |
| | ReplaceSystemDisk | Replace Operating System | OOS | Done |
| VPC | DescribeVpcs | View VPCs | API | Done |
| | DescribeVSwitches | View VSwitches | API | Done |
| RDS | DescribeDBInstances | List RDS Instances | API | Done |
|  | StartDBInstances | Start the RDS instance | OOS | Done |
|  | StopDBInstances | Stop the RDS instance | OOS | Done |
|  | RestartDBInstances | Restart the RDS instance | OOS | Done |
| OSS | ListBuckets | List Bucket | API | Done |
|  | PutBucket | Create Bucket | API | Done |
|  | DeleteBucket | Delete Bucket | API | Done |
|  | ListObjects | View object information in the bucket | API | Done |
| CloudMonitor | GetCpuUsageData | Get CPU Usage Data for ECS Instances | API | Done |
| | GetCpuLoadavgData | Get CPU One-Minute Average Load Metric Data | API | Done |
| | GetCpuloadavg5mData | Get CPU Five-Minute Average Load Metric Data | API | Done |
| | GetCpuloadavg15mData | Get CPU Fifteen-Minute Average Load Metric Data | API | Done |
| | GetMemUsedData | Get Memory Usage Metric Data | API | Done |
| | GetMemUsageData | Get Memory Utilization Metric Data | API | Done |
| | GetDiskUsageData | Get Disk Utilization Metric Data | API | Done |
| | GetDiskTotalData | Get Total Disk Partition Capacity Metric Data | API | Done |
| | GetDiskUsedData | Get Disk Partition Usage Metric Data | API | Done |
| Application Management | OOS_CodeDeploy | Deploy applications to ECS instances with automatic artifact upload to OSS | OOS | Done |
| | OOS_GetDeployStatus | Query deployment status of application groups | API | Done |
| | OOS_GetLastDeploymentInfo | Retrieve information about the last deployment | API | Done |
| Local | LOCAL_ListDirectory | List files and subdirectories in a directory | Local | Done |
| | LOCAL_RunShellScript | Execute shell scripts or commands | Local | Done |
| | LOCAL_AnalyzeDeployStack | Identify project deployment methods and technology stack | Local | Done |

## Deployment Workflow

The typical deployment workflow includes:

1. **Project Analysis**: Use `LOCAL_AnalyzeDeployStack` to identify the project's technology stack and deployment method
2. **Build Artifacts**: Build or package the application locally (e.g., create tar.gz or zip files)
3. **Deploy Application**: Use `OOS_CodeDeploy` to deploy the application to ECS instances
   - Automatically creates application and application group if they don't exist
   - Uploads artifacts to OSS
   - Deploys to specified ECS instances
4. **Monitor Deployment**: Use `OOS_GetDeployStatus` to check deployment status

## Contact us

If you have any questions, please join the [Alibaba Cloud Ops MCP discussion group](https://qr.dingtalk.com/action/joingroup?code=v1,k1,iFxYG4jjLVh1jfmNAkkclji7CN5DSIdT+jvFsLyI60I=&_dt_no_comment=1&origin=11) (DingTalk group: 113455011677) for discussion.


