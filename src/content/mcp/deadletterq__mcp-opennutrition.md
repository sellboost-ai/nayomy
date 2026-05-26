---
name: "deadletterq/mcp-opennutrition"
description: "Local MCP server for searching 300,000+ foods, nutrition facts, and barcodes from the OpenNutrition database."
description_tr: "OpenNutrition veritabanından 300.000+ gıda ürünü, beslenme bilgileri ve barkodları arayan yerel MCP sunucusu."
category: "Search & Data Extraction"
repo: "deadletterq/mcp-opennutrition"
stars: 184
url: "https://github.com/deadletterq/mcp-opennutrition"
body_length: 2302
license: "MIT"
language: "TypeScript"
body_tr: |-
  # MCP OpenNutrition

  300.000+ gıda ürünü, beslenme verileri ve barkod araması ile kapsamlı OpenNutrition gıda veritabanına erişim sağlayan bir Model Context Protocol (MCP) sunucusu.

  OpenNutrition, yetkili kamu kaynaklarını (USDA, CNF, FRIDA, AUSNUT) birleştirerek parçalanmış ve güvenilmez beslenme verilerinin uzun süredir devam eden sorunlarını çözmektedir. Tutarsız kullanıcı tarafından oluşturulan içerik veya kısıtlayıcı ticari lisanslama nedeniyle sorun yaşayan diğer veritabanlarının aksine, OpenNutrition, geliştiriciler ve araştırmacılara açık olarak erişilebilir olan şeffaf, kapsamlı ve doğru beslenme verileri sağlar.

  ## Araçlar

  - **Ada Göre Arama**: Gıdaları ada, markaya veya kısmi eşleşmelere göre bulun
  - **Gıdalara Göz Atma**: Mevcut tüm gıdaların sayfalanmış listelerini alın
  - **Kimliğe Göre Alma**: Gıda kimliklerini kullanarak ayrıntılı beslenme bilgilerini alın
  - **Barkod Araması**: EAN-13 barkodlarını kullanarak gıdaları bulun

  ## Kurulum

  ### Docker (önerilir)

  Sunucuyu çalıştırmanın en kolay yolu Docker üzerindedir. Hiçbir derleme adımı gerekli değildir.

  Konteyneri çalıştırın:
  ```bash
  docker run --rm -p 9113:3000 deadletterq/mcp-opennutrition
  ```

  Ardından MCP yapılandırmanıza ekleyin:
  ```json
  "mcp-opennutrition": {
      "type": "streamable-http",
      "url": "http://localhost:9113"
  }
  ```

  ### Kaynaktan

  1. Bağımlılıkları yükleyin:
     ```bash
     npm install
     ```

  2. Projeyi derleyin:
     ```bash
     npm run build
     ```

  3. MCP yapılandırmanıza ekleyin (projeyi derlemek için kullandığınız node sürümünü ayarlayın):
     ```json
     "mcp-opennutrition": {
         "command": "/Users/YOUR.USERNAME/.nvm/versions/node/v20.19.0/bin/node",
         "args": [
             "/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-opennutrition/build/index.js"
         ]
     }
     ```

  ## Veri Kaynağı

  Bu sunucu [OpenNutrition veri setini](https://www.opennutrition.app/) kullanır.

  Veri seti, makrbesinler, vitaminler ve mineraller dahil olmak üzere kapsamlı beslenme profillerini sağlar.

  ## Kullanım

  Yapılandırıldıktan sonra, MCP sunucusu makinenizde tamamen yerel olarak çalışır ve Claude/Cline'a otomatik olarak gıda ve beslenme sorgusu yetenekleri sağlar. Tüm veri işleme ve sorgular dış API çağrıları olmadan yerel olarak gerçekleştirilir, gizlilik ve hızlı yanıt süreleri sağlar.

  ## Örnek

  Claude'un bir brownie tarifi için aracı nasıl kullandığına ilişkin bir örnek:

  ![Brownie Tarifi Örneği](https://raw.githubusercontent.com/deadletterq/mcp-opennutrition/HEAD/readme_example.png)
---

# MCP OpenNutrition

A Model Context Protocol (MCP) server providing access to the comprehensive OpenNutrition food database with 300,000+ food items, nutritional data, and barcode lookups.

OpenNutrition addresses the longstanding issues with fragmented and unreliable nutritional data by combining authoritative public sources (USDA, CNF, FRIDA, AUSNUT). Unlike other databases that suffer from inconsistent user-generated content or restrictive commercial licensing, OpenNutrition provides transparent, comprehensive, and accurate nutritional data that's freely accessible to developers and researchers.

## Tools

- **Search by Name**: Find foods by name, brand, or partial matches
- **Browse Foods**: Get paginated lists of all available foods
- **Get by ID**: Retrieve detailed nutritional information using food IDs
- **Barcode Lookup**: Find foods using EAN-13 barcodes

## Installation

### Docker (recommended)

The easiest way to run the server is via Docker. No build steps required.

Run the container:
```bash
docker run --rm -p 9113:3000 deadletterq/mcp-opennutrition
```

Then add to your MCP configuration:
```json
"mcp-opennutrition": {
    "type": "streamable-http",
    "url": "http://localhost:9113"
}
```

### From source

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Add to your MCP configuration (set the same version of node that you used to build the project):
   ```json
   "mcp-opennutrition": {
       "command": "/Users/YOUR.USERNAME/.nvm/versions/node/v20.19.0/bin/node",
       "args": [
           "/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-opennutrition/build/index.js"
       ]
   }
   ```

## Data Source

This server uses the [OpenNutrition dataset](https://www.opennutrition.app/).

The dataset provides comprehensive nutritional profiles including macronutrients, vitamins, and minerals.

## Usage

Once configured, the MCP server runs fully locally on your machine and automatically provides food and nutrition query capabilities to Claude/Cline. All data processing and queries happen locally with no external API calls, ensuring privacy and fast response times.

## Example

Here is an example of how Claude uses the tool for a brownie recipe:

![Brownie Recipe Example](https://raw.githubusercontent.com/deadletterq/mcp-opennutrition/HEAD/readme_example.png)
