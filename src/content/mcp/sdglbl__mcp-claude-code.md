---
name: "SDGLBL/mcp-claude-code"
description: "An implementation of Claude Code capabilities using MCP, enabling AI code understanding, modification, and project analysis with comprehensive tool support."
category: "Developer Tools"
repo: "SDGLBL/mcp-claude-code"
stars: 302
url: "https://github.com/SDGLBL/mcp-claude-code"
body_length: 4988
license: "MIT"
language: "Python"
body_tr: |-
  # MCP Claude Code

  Claude Code yeteneklerinin Model Context Protocol (MCP) kullanılarak uygulanması.

  ## Genel Bakış

  Bu proje, Claude Code benzeri işlevselliği uygulayan bir MCP sunucusu sağlar ve Claude'un proje dosyalarını değiştirmek ve geliştirmek için doğrudan talimatları yürütmesini sağlar. Model Context Protocol'den yararlanarak, bu uygulama Claude Desktop dahil olmak üzere çeşitli MCP istemcileriyle sorunsuz entegrasyonu mümkün kılar.

  ![example](https://raw.githubusercontent.com/SDGLBL/mcp-claude-code/HEAD/doc/example2.gif)

  ## Özellikler

  - **Kod Anlama**: Dosya erişimi ve pattern araması aracılığıyla kod tabanlarını analiz edin ve anlayın
  - **Kod Değişikliği**: Uygun izin yönetimiyle dosyalara hedeflenmiş düzenlemeler yapın
  - **Geliştirilmiş Komut Yürütme**: Çeşitli dillerdeki komutları ve betikleri geliştirilmiş hata yönetimi ve shell desteğiyle çalıştırın
  - **Dosya İşlemleri**: Shell komutları aracılığıyla uygun güvenlik kontrolleriyle dosyaları yönetin
  - **Kod Keşfi**: Yüksek performanslı arama ile projeniz genelinde ilgili dosyaları ve kod pattern'lerini bulun
  - **Agent Delegasyonu**: Eşzamanlı olarak çalışabilen özel alt ajanlarına karmaşık görevleri devredin
  - **Çoklu LLM Sağlayıcı Desteği**: Agent işlemleri için herhangi bir LiteLLM uyumlu modeli yapılandırın
  - **Jupyter Notebook Desteği**: Jupyter notebook'larını tam hücre ve çıktı yönetimiyle okuyun ve düzenleyin

  ## Uygulanan Araçlar

  | Araç              | Açıklama                                                                                                                       |
  | ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
  | `read`            | Satır numaraları, offset ve limit yetenekleriyle dosya içeriklerini okuyun                                                              |
  | `write`           | Dosya oluşturun veya üzerine yazın                                                                                                         |
  | `edit`            | Metin dosyalarına satır tabanlı düzenlemeler yapın                                                                                               |
  | `multi_edit`      | Atomik işlemler ile tek bir dosya işleminde birden fazla kesin metin değişikliği yapın                                       |
  | `directory_tree`  | Dizinlerin özyinelemeli ağaç görünümünü alın                                                                                          |
  | `grep`            | Ripgrep entegrasyonlu dosyalarda hızlı pattern araması yapın, en iyi performans için ([belgeler](./doc/migration_SearchContentTool_to_Grep.md)) |
  | `content_replace` | Dosya içeriklerinde pattern'leri değiştirin                                                                                                 |
  | `grep_ast`        | AST bağlamı ile kod arayın; function, class ve diğer yapılar içindeki eşleşmeleri gösterin                                      |
  | `run_command`     | Shell komutlarını yürütün (dizin oluşturma, dosya taşıma ve dizin listeleme için de kullanılır)                                     |
  | `notebook_read`   | Jupyter notebook'taki tüm hücrelerden kaynak kodunu çıkarın ve çıktılarla birlikte okuyun                                                    |
  | `notebook_edit`   | Jupyter notebook'ta hücreleri düzenleyin, ekleyin veya silin                                                                               |
  | `think`           | Değişiklik yapmadan karmaşık akıl yürütme ve analiz için yapılandırılmış alan                                                        |
  | `dispatch_agent`  | Tek başına aracı kullanarak eşzamanlı olarak çalışabilen bir veya daha fazla ajanı başlatın                                                               |
  | `batch`           | Birden fazla araç çağrısını tek bir istekte paralel veya seri olarak yürütün                                                     |
  | `todo_write`      | Yapılandırılmış bir görev listesi oluşturun ve yönetin                                                                                      |
  | `todo_read`       | Yapılandırılmış bir görev listesi okuyun                                                                                                       |

  ## Başlangıç

  Ayrıntılı kurulum ve yapılandırma talimatları için [INSTALL.md](./doc/INSTALL.md) dosyasına başvurun.

  0.3 sürümünün ayrıntılı öğreticisi için [TUTORIAL.md](./doc/TUTORIAL.md) dosyasına başvurun

  ## Güvenlik

  Bu uygulama, dosya sisteminize erişim sağlamlamada en iyi yöntemleri takip eder:

  - Dosya değişiklikleri ve komut yürütme için izin istemler
  - Yalnızca belirtilen dizinlere sınırlandırılmış erişim
  - Giriş doğrulaması ve sanitizasyonu
  - Uygun hata yönetimi ve raporlaması

  ## Geliştirme

  Bu projeye katkıda bulunmak için:

  1. Depoyu fork edin
  2. Bir feature branch oluşturun (`git checkout -b feature/amazing-feature`)
  3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
  4. Branch'e push edin (`git push origin feature/amazing-feature`)
  5. Bir Pull Request açın

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için LICENSE dosyasına bakın.
---

# MCP Claude Code

An implementation of Claude Code capabilities using the Model Context Protocol (MCP).

## Overview

This project provides an MCP server that implements Claude Code-like functionality, allowing Claude to directly execute instructions for modifying and improving project files. By leveraging the Model Context Protocol, this implementation enables seamless integration with various MCP clients including Claude Desktop.

![example](https://raw.githubusercontent.com/SDGLBL/mcp-claude-code/HEAD/doc/example2.gif)

## Features

- **Code Understanding**: Analyze and understand codebases through file access and pattern searching
- **Code Modification**: Make targeted edits to files with proper permission handling
- **Enhanced Command Execution**: Run commands and scripts in various languages with improved error handling and shell support
- **File Operations**: Manage files with proper security controls through shell commands
- **Code Discovery**: Find relevant files and code patterns across your project with high-performance searching
- **Agent Delegation**: Delegate complex tasks to specialized sub-agents that can work concurrently
- **Multiple LLM Provider Support**: Configure any LiteLLM-compatible model for agent operations
- **Jupyter Notebook Support**: Read and edit Jupyter notebooks with full cell and output handling

## Tools Implemented

| Tool              | Description                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `read`            | Read file contents with line numbers, offset, and limit capabilities                                                              |
| `write`           | Create or overwrite files                                                                                                         |
| `edit`            | Make line-based edits to text files                                                                                               |
| `multi_edit`      | Make multiple precise text replacements in a single file operation with atomic transactions                                       |
| `directory_tree`  | Get a recursive tree view of directories                                                                                          |
| `grep`            | Fast pattern search in files with ripgrep integration for best performance ([docs](./doc/migration_SearchContentTool_to_Grep.md)) |
| `content_replace` | Replace patterns in file contents                                                                                                 |
| `grep_ast`        | Search code with AST context showing matches within functions, classes, and other structures                                      |
| `run_command`     | Execute shell commands (also used for directory creation, file moving, and directory listing)                                     |
| `notebook_read`   | Extract and read source code from all cells in a Jupyter notebook with outputs                                                    |
| `notebook_edit`   | Edit, insert, or delete cells in a Jupyter notebook                                                                               |
| `think`           | Structured space for complex reasoning and analysis without making changes                                                        |
| `dispatch_agent`  | Launch one or more agents that can perform tasks using read-only tools concurrently                                               |
| `batch`           | Execute multiple tool invocations in parallel or serially in a single request                                                     |
| `todo_write`      | Create and manage a structured task list                                                                                          |
| `todo_read`       | Read a structured task list                                                                                                       |

## Getting Started

For detailed installation and configuration instructions, please refer to [INSTALL.md](./doc/INSTALL.md).

For detailed tutorial of 0.3 version, please refer to [TUTORIAL.md](./doc/TUTORIAL.md)

## Security

This implementation follows best practices for securing access to your filesystem:

- Permission prompts for file modifications and command execution
- Restricted access to specified directories only
- Input validation and sanitization
- Proper error handling and reporting

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
