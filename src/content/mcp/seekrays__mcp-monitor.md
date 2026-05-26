---
name: "seekrays/mcp-monitor"
description: "A system monitoring tool that exposes system metrics via the Model Context Protocol (MCP). This tool allows LLMs to retrieve real-time system information through an MCP-compatible interface.（support CPU、Memory、Disk、Network、Host、Process）"
description_tr: "Sistem metriklerini Model Context Protocol (MCP) üzerinden sunan bir sistem izleme aracı. LLM'lerin MCP-uyumlu interface aracılığıyla CPU, Memory, Disk, Network, Host ve Process bilgilerine gerçek zamanlı erişim sağlar."
category: "Monitoring"
repo: "seekrays/mcp-monitor"
stars: 82
url: "https://github.com/seekrays/mcp-monitor"
body_length: 2675
license: "Apache-2.0"
language: "Go"
homepage: "https://seekrays.com/chat"
body_tr: |-
  # MCP System Monitor
  ![Go](https://github.com/seekrays/mcp-monitor/actions/workflows/go.yml/badge.svg)
  ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/seekrays/mcp-monitor?sort=semver)
  [![Discord](https://img.shields.io/badge/Discord-Join%20Chat-blue?style=flat&logo=discord)](https://discord.gg/kbMJ9Qpf)

  Model Context Protocol (MCP) aracılığıyla sistem metriklerini açığa çıkaran bir sistem izleme aracı. Bu araç, LLM'lerin MCP uyumlu bir arabirim aracılığıyla gerçek zamanlı sistem bilgilerine erişmesini sağlar.

  ![](https://raw.githubusercontent.com/seekrays/mcp-monitor/HEAD/doc/snapshot-1.png)

  ## Özellikler

  Bu araç aşağıdaki izleme yeteneklerini sağlar:

  - **CPU Bilgisi**: Kullanım yüzdesi, çekirdek sayısı ve detaylı CPU bilgisi
  - **Bellek Bilgisi**: Sanal ve swap bellek kullanımı
  - **Disk Bilgisi**: Disk kullanımı, bölümler ve I/O istatistikleri
  - **Ağ Bilgisi**: Ağ arayüzleri, bağlantılar ve trafik istatistikleri
  - **Host Bilgisi**: Sistem detayları, çalışma süresi, boot zamanı ve kullanıcılar
  - **Process Bilgisi**: Process listesi, sıralama ve detaylı process başına istatistikler


  ## Kullanılabilir Araçlar

  ### 1. CPU Bilgisi

  ```
  Tool: get_cpu_info
  Description: CPU bilgisi ve kullanımını al
  Parameters:
    - per_cpu (boolean, default: false): Her çekirdek için veri döndürülüp döndürülmeyeceği
  ```

  ### 2. Bellek Bilgisi

  ```
  Tool: get_memory_info
  Description: Sistem bellek kullanım bilgisini al
  Parameters: Yok
  ```

  ### 3. Disk Bilgisi

  ```
  Tool: get_disk_info
  Description: Disk kullanım bilgisini al
  Parameters:
    - path (string, default: "/"): Sorgulanacak disk yolunu belirt
    - all_partitions (boolean, default: false): Tüm bölümler için bilgi döndürülüp döndürülmeyeceği
  ```

  ### 4. Ağ Bilgisi

  ```
  Tool: get_network_info
  Description: Ağ arayüzü ve trafik bilgisini al
  Parameters:
    - interface (string, optional): Sorgulanacak ağ arayüzü adını belirt
  ```

  ### 5. Host Bilgisi

  ```
  Tool: get_host_info
  Description: Host sistem bilgisini al
  Parameters: Yok
  ```

  ### 6. Process Bilgisi

  ```
  Tool: get_process_info
  Description: Process bilgisini al
  Parameters:
    - pid (number, optional): Belirli bir process için detaylı bilgi almak için Process ID
    - limit (number, default: 10): Döndürülen process sayısının sınırı
    - sort_by (string, default: "cpu"): Sıralama alanı (cpu, memory, pid, name)
  ```


  ## Kurulum

  ```bash
  git clone https://github.com/seekrays/mcp-monitor.git
  cd mcp-monitor
  make build
  ```

  ## Kullanım

  Derlenmiş binary'i çalıştırın:

  ```bash
  ./mcp-monitor
  ```

  Server stdio modunda başlar ve MCP uyumlu bir LLM client ile iletişim kurmaya hazır olur.


  ## Katkıda Bulunma

  Katkılar hoş karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.
---

# MCP System Monitor
![Go](https://github.com/seekrays/mcp-monitor/actions/workflows/go.yml/badge.svg)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/seekrays/mcp-monitor?sort=semver)
[![Discord](https://img.shields.io/badge/Discord-Join%20Chat-blue?style=flat&logo=discord)](https://discord.gg/kbMJ9Qpf)

A system monitoring tool that exposes system metrics via the Model Context Protocol (MCP). This tool allows LLMs to retrieve real-time system information through an MCP-compatible interface.

![](https://raw.githubusercontent.com/seekrays/mcp-monitor/HEAD/doc/snapshot-1.png)

## Features

This tool provides the following monitoring capabilities:

- **CPU Information**: Usage percentage, core count, and detailed CPU info
- **Memory Information**: Virtual and swap memory usage
- **Disk Information**: Disk usage, partitions, and I/O statistics
- **Network Information**: Network interfaces, connections, and traffic statistics
- **Host Information**: System details, uptime, boot time, and users
- **Process Information**: Process listing, sorting, and detailed per-process statistics


## Available Tools

### 1. CPU Information

```
Tool: get_cpu_info
Description: Get CPU information and usage
Parameters:
  - per_cpu (boolean, default: false): Whether to return data for each core
```

### 2. Memory Information

```
Tool: get_memory_info
Description: Get system memory usage information
Parameters: None
```

### 3. Disk Information

```
Tool: get_disk_info
Description: Get disk usage information
Parameters:
  - path (string, default: "/"): Specify the disk path to query
  - all_partitions (boolean, default: false): Whether to return information for all partitions
```

### 4. Network Information

```
Tool: get_network_info
Description: Get network interface and traffic information
Parameters:
  - interface (string, optional): Specify the network interface name to query
```

### 5. Host Information

```
Tool: get_host_info
Description: Get host system information
Parameters: None
```

### 6. Process Information

```
Tool: get_process_info
Description: Get process information
Parameters:
  - pid (number, optional): Process ID to get detailed information for a specific process
  - limit (number, default: 10): Limit the number of processes returned
  - sort_by (string, default: "cpu"): Sort field (cpu, memory, pid, name)
```


## Installation

```bash
git clone https://github.com/seekrays/mcp-monitor.git
cd mcp-monitor
make build
```

## Usage

Run the compiled binary:

```bash
./mcp-monitor
```

The server starts in stdio mode, ready to communicate with an MCP-compatible LLM client.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
