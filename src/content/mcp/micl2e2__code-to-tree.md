---
name: "micl2e2/code-to-tree"
description: "A single-binary MCP server that converts source code into AST, regardless of language."
category: "Coding Agents"
repo: "micl2e2/code-to-tree"
stars: 83
url: "https://github.com/micl2e2/code-to-tree"
body_length: 5485
license: "MIT"
language: "C"
body_tr: |-
  # İçindekiler

  -   [MCP Server: code-to-tree](#orgf542482)
  -   [code-to-tree kullanımı](#org862e7dc)
  -   [MCP İstemcilerini Yapılandırma](#orge54fa87)
  -   [Derleme (Windows)](#org48a8180)
  -   [Derleme (macOS)](#orgbaa740e)



  <a id="orgf542482"></a>

  # MCP Server: code-to-tree

  code-to-tree sunucusunun hedefleri şunlardır:

  1.  LLM'lere kaynak kodu AST(Abstract Syntax Tree) formatına **doğru** 
      şekilde dönüştürme yeteneği vermek, dil farkı gözetmeksizin.
  2.  Tek bir **bağımsız** binary dosyası, MCP istemcisinin ihtiyaç duyduğu 
      her şey olmalıdır.

  Bu hedefler şunları ima eder:

  1.  Temel syntax parser yeterince **çok yönlü** olmalıdır. Burada 
      [tree-sitter](https://github.com/tree-sitter/tree-sitter) seçilmiştir ve desteklenen diller: 
      C, C++, Rust, Ruby, Go, Java, Python'dur.
  2.  Sunucu tüm yetenekleri içinde taşımalı, end user'ın makinesinde 
      **minimum** yazılım bağımlılığı oluşturmalıdır. Burada 
      [mcpc](https://github.com/micl2e2/mcpc) seçilmiştir.

  **Ekran görüntüleri:**



  Yukarıdaki ekran görüntüleri `q.md` içerisinde belirtilen sorunun 
  sorulması ile elde edilmiştir.

  (**ÖNEMLİ NOT**: LLM'lerin aynı soruya özdeş sonuç üretme sorumluluğu yoktur, 
  muhtemelen tamamen farklı bir stil veya içerik elde edeceksiniz. Burada 
  sağlanan ekran görüntüleri veya sorular sadece referans amaçlıdır)

  <a href="https://glama.ai/mcp/servers/@micl2e2/code-to-tree">
    
  </a>


  <a id="org862e7dc"></a>

  # code-to-tree kullanımı

  Her şeyden önce, code-to-tree executable dosyasının makinenizde olması 
  gerekir (`code-to-tree.exe` Windows için, `code-to-tree` macOS için). 
  GitHub release [sayfasından](https://github.com/micl2e2/code-to-tree/releases) indirebilir veya kendiniz 
  derleyebilirsiniz. İndirdikten sonra, MCP istemcilerinizi kurulacak şekilde 
  yapılandırırsınız. Daha fazla detay için *"MCP İstemcilerini Yapılandırma"* 
  bölümüne bakınız.


  <a id="orge54fa87"></a>

  # MCP İstemcilerini Yapılandırma

  Burada Claude örnek olarak kullanılmıştır.


  ## Windows

  Claude yapılandırma dosyanızda 
  (`C:\Users\YOUR_NAME\AppData\Roaming\Claude\claude_desktop_config.json`),
  `code-to-tree.exe` dosyasının konumunu belirtin:

      {
          "mcpServers": {
      	    "code-to-tree": { "command": "C:\\path\\to\\code-to-tree.exe" }
          }
      }


  ## macOS

  Claude yapılandırma dosyanızda
  (`~/Library/Application Support/Claude/claude_desktop_config.json`)
  `code-to-tree` dosyasının konumunu belirtin

      {
          "mcpServers": {
      	    "code-to-tree": { "command": "/path/to/code-to-tree" }
          }
      }


  <a id="org48a8180"></a>

  # Derleme (Windows)


  ## 1. Ortamı Hazırlama

  1.  MSYS2'yi indirin ve yükleyin.
  2.  "MSYS2 MINGW64" uygulamasını açın
  3.  `pacman -S make gcc git` komutunu çalıştırın


  ## 2. tree-sitter Kütüphanelerini Hazırlama

  Burada tree-sitter ve ilgili tüm grammar'ları derlememiz ve yüklememiz gerekir.

  Bunları klonlayın:

      git clone https://github.com/tree-sitter/tree-sitter
      
      git clone https://github.com/tree-sitter/tree-sitter-c
      
      git clone https://github.com/tree-sitter/tree-sitter-cpp
      
      git clone https://github.com/tree-sitter/tree-sitter-rust
      
      git clone https://github.com/tree-sitter/tree-sitter-ruby
      
      git clone https://github.com/tree-sitter/tree-sitter-go
      
      git clone https://github.com/tree-sitter/tree-sitter-java

  Bunları derleyin ve yükleyin:

      cd tree-sitter && OS=1 make install
      
      cd tree-sitter-c && OS=1 make install
      
      cd tree-sitter-cpp && OS=1 make install
      
      cd tree-sitter-rust && OS=1 make install
      
      cd tree-sitter-ruby && OS=1 make install
      
      cd tree-sitter-go && OS=1 make install
      
      cd tree-sitter-java && OS=1 make install


  ## 3. code-to-tree Derleme

  mcpc'yi yükleyin:

      git clone https://github.com/micl2e2/mcpc
      cd mcpc && make install

  code-to-tree'yi derleyin:

      cd mcpc/example/code-to-tree
      
      CFLAGS="-I/usr/local/include -L/usr/local/lib" make
      
      # Binary dosyasını kontrol edin
      file code-to-tree.exe
      
      # Binary dosyasının konumunu hatırlayın
      pwd
      # Çıktının şöyle olduğunu varsayalım: /c/path/to/code-to-tree.exe


  <a id="orgbaa740e"></a>

  # Derleme (macOS)


  ## 1. Ortamı Hazırlama

  1.  Xcode Command Line Tools


  ## 2. tree-sitter Kütüphanelerini Hazırlama

  Burada tree-sitter ve ilgili tüm grammar'ları derlememiz ve yüklememiz gerekir.

  Bunları klonlayın:

      git clone https://github.com/tree-sitter/tree-sitter
      
      git clone https://github.com/tree-sitter/tree-sitter-c
      
      git clone https://github.com/tree-sitter/tree-sitter-cpp
      
      git clone https://github.com/tree-sitter/tree-sitter-rust
      
      git clone https://github.com/tree-sitter/tree-sitter-ruby
      
      git clone https://github.com/tree-sitter/tree-sitter-go
      
      git clone https://github.com/tree-sitter/tree-sitter-java

  Bunları derleyin ve yükleyin:

      cd tree-sitter && make install
      
      cd tree-sitter-c && make install
      
      cd tree-sitter-cpp && make install
      
      cd tree-sitter-rust && make install
      
      cd tree-sitter-ruby && make install
      
      cd tree-sitter-go && make install
      
      cd tree-sitter-java && make install


  ## 3. code-to-tree Derleme

  mcpc'yi yükleyin:

      git clone https://github.com/micl2e2/mcpc
      cd mcpc && make install

  code-to-tree'yi derleyin:

      cd mcpc/example/code-to-tree
      
      make
      
      # Binary dosyasını kontrol edin
      file ./code-to-tree
      
      # Binary dosyasının konumunu hatırlayın
      pwd
      # Çıktının şöyle olduğunu varsayalım: /path/to/code-to-tree
---

# Table of Contents

-   [MCP Server: code-to-tree](#orgf542482)
-   [Using code-to-tree](#org862e7dc)
-   [Configure MCP Clients](#orge54fa87)
-   [Building (Windows)](#org48a8180)
-   [Building (macOS)](#orgbaa740e)



<a id="orgf542482"></a>

# MCP Server: code-to-tree

The code-to-tree server's goals are:

1.  Give LLMs the capability of **accurately** converting source code into
    AST(Abstract Syntax Tree), regardless of language.
2.  One **standalone** binary should be everything the MCP client needs.

These goals imply:

1.  The underlying syntax parser should be **versatile** enough. Here we
    choose [tree-sitter](https://github.com/tree-sitter/tree-sitter), and languages are: C, C++, Rust, Ruby, Go, Java, Python.
2.  The server should be able to carry all capabilities within
    itself, imposing **minimum** software dependencies on the end user's
    machine. Here we choose [mcpc](https://github.com/micl2e2/mcpc).

**Screenshots:**



The above screenshots are obtained by asking the question specified
in `q.md`. 

(**IMPORTANT NOTE**: LLMs have no responsibility of generating the identical
result for the same question,  you will likely get a completely different
style or content. The screenshots or questions provided here are just for the reference)

<a href="https://glama.ai/mcp/servers/@micl2e2/code-to-tree">
  
</a>


<a id="org862e7dc"></a>

# Using code-to-tree

Before everthing, you need to have the code-to-tree executable on your
machine (`code-to-tree.exe` for Windows, `code-to-tree` for macOS),
you can download at GitHub release [page](https://github.com/micl2e2/code-to-tree/releases) or build it yourself. Once
downloaded, you configure your MCP clients to install it, check the section
*"Configure MCP Clients"* for more details.


<a id="orge54fa87"></a>

# Configure MCP Clients

Here we use Claude as the example.


## Windows

In your Claude configuration
(`C:\Users\YOUR_NAME\AppData\Roaming\Claude\claude_desktop_config.json`),
specify the location of `code-to-tree.exe`:

    {
        "mcpServers": {
    	    "code-to-tree": { "command": "C:\\path\\to\\code-to-tree.exe" }
        }
    }


## macOS

In your Claude configuration,
(`~/Library/Application Support/Claude/claude_desktop_config.json`)
specify the location of `code-to-tree`

    {
        "mcpServers": {
    	    "code-to-tree": { "command": "/path/to/code-to-tree" }
        }
    }


<a id="org48a8180"></a>

# Building (Windows)


## 1. Prepare environment

1.  download & install MSYS2.
2.  open application "MSYS2 MINGW64"
3.  run `pacman -S make gcc git`


## 2. Prepare tree-sitter libraries

Here we need to compile and install tree-sitter and all related grammars.

Clone them:

    git clone https://github.com/tree-sitter/tree-sitter
    
    git clone https://github.com/tree-sitter/tree-sitter-c
    
    git clone https://github.com/tree-sitter/tree-sitter-cpp
    
    git clone https://github.com/tree-sitter/tree-sitter-rust
    
    git clone https://github.com/tree-sitter/tree-sitter-ruby
    
    git clone https://github.com/tree-sitter/tree-sitter-go
    
    git clone https://github.com/tree-sitter/tree-sitter-java

Compile and install them:

    cd tree-sitter && OS=1 make install
    
    cd tree-sitter-c && OS=1 make install
    
    cd tree-sitter-cpp && OS=1 make install
    
    cd tree-sitter-rust && OS=1 make install
    
    cd tree-sitter-ruby && OS=1 make install
    
    cd tree-sitter-go && OS=1 make install
    
    cd tree-sitter-java && OS=1 make install


## 3. Build code-to-tree

Install mcpc:

    git clone https://github.com/micl2e2/mcpc
    cd mcpc && make install

Compile code-to-tree:

    cd mcpc/example/code-to-tree
    
    CFLAGS="-I/usr/local/include -L/usr/local/lib" make
    
    # Check the binary
    file code-to-tree.exe
    
    # Remember the binary's location
    pwd
    # Assume the output is: /c/path/to/code-to-tree.exe


<a id="orgbaa740e"></a>

# Building (macOS)


## 1. Prepare environment

1.  Xcode Command Line Tools


## 2. Prepare tree-sitter libraries

Here we need to compile and install tree-sitter and all related grammars.

Clone them:

    git clone https://github.com/tree-sitter/tree-sitter
    
    git clone https://github.com/tree-sitter/tree-sitter-c
    
    git clone https://github.com/tree-sitter/tree-sitter-cpp
    
    git clone https://github.com/tree-sitter/tree-sitter-rust
    
    git clone https://github.com/tree-sitter/tree-sitter-ruby
    
    git clone https://github.com/tree-sitter/tree-sitter-go
    
    git clone https://github.com/tree-sitter/tree-sitter-java

Compile and install them:

    cd tree-sitter && make install
    
    cd tree-sitter-c && make install
    
    cd tree-sitter-cpp && make install
    
    cd tree-sitter-rust && make install
    
    cd tree-sitter-ruby && make install
    
    cd tree-sitter-go && make install
    
    cd tree-sitter-java && make install


## 3. Build code-to-tree

Install mcpc:

    git clone https://github.com/micl2e2/mcpc
    cd mcpc && make install

Compile code-to-tree:

    cd mcpc/example/code-to-tree
    
    make
    
    # Check the binary
    file ./code-to-tree
    
    # Remember the binary's location
    pwd
    # Assume the output is: /path/to/code-to-tree
