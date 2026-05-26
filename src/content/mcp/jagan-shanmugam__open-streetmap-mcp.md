---
name: "jagan-shanmugam/open-streetmap-mcp"
description: "An OpenStreetMap MCP server with location-based services and geospatial data."
description_tr: "OpenStreetMap tabanlı bir MCP sunucusu, konum tabanlı hizmetler ve jeofuzyal veri sağlayan araç."
category: "Location Services"
repo: "jagan-shanmugam/open-streetmap-mcp"
stars: 193
url: "https://github.com/jagan-shanmugam/open-streetmap-mcp"
body_length: 5559
license: "MIT"
language: "Python"
body_tr: |-
  # OpenStreetMap (OSM) MCP Sunucusu

  OpenStreetMap MCP sunucu uygulaması, konum tabanlı hizmetler ve jeocoğrafik veri ile LLM yeteneklerini geliştir.

  ## Demo

  ### Buluşma Noktası Optimizasyonu
  ![Meeting Point Use Case](https://raw.githubusercontent.com/jagan-shanmugam/open-streetmap-mcp/HEAD/demo/use-case-meeting.gif)

  ### Mahalle Analizi
  ![Neighborhood Analysis Use Case](https://raw.githubusercontent.com/jagan-shanmugam/open-streetmap-mcp/HEAD/demo/use-case-neighborhood.gif)

  ### Otopark Arama
  ![Parking Search Use Case](https://raw.githubusercontent.com/jagan-shanmugam/open-streetmap-mcp/HEAD/demo/use-case-parking.gif)


  ## Kurulum

  ### Claude Desktop, Cursor, Windsurf vb. MCP Host'larında
  - `osm-mcp-server`: Ana sunucu, genel kullanım için mevcuttur.
    
    ```json
    "mcpServers": {
      "osm-mcp-server": {
        "command": "uvx",
        "args": [
          "osm-mcp-server"
        ]
      }
    }
    ```

  ## Özellikler

  Bu sunucu, LLM'lerin OpenStreetMap verileriyle etkileşim kurması için araçlar sağlayarak, konum tabanlı uygulamaları şu şekilde etkinleştir:

  - Adresleri ve yer adlarını koordinatlara dönüştür
  - Koordinatları adreslere ters dönüştür
  - Yakındaki ilgi noktaları bul
  - Konumlar arasında yol tarifleri al
  - Sınırlayıcı kutu içinde kategoriye göre yerleri ara
  - Birden fazla kişi için optimal buluşma noktalarını öner
  - Alanları keşfet ve kapsamlı konum bilgisi al
  - Bir konumun yakınında okullar ve eğitim kurumlarını bul
  - Ev ve iş arasında işe gidiş-gelişleri analiz et
  - Konnektör ve güç filtrelemesiyle EV şarj istasyonlarını konumlandır
  - Gayrimenkul için mahalle yaşanabilirlik analizini gerçekleştir
  - Kullanılabilirlik ve ücret bilgisiyle otopark tesislerini bul

  ## Bileşenler

  ### Kaynaklar

  Sunucu konum tabanlı kaynakları uygular:
  - `location://place/{query}`: Ad veya adres ile yerleri hakkında bilgi al
  - `location://map/{style}/{z}/{x}/{y}`: Belirtilen koordinatlardaki stillendirilmiş harita kutucuklarını al

  ### Araçlar

  Sunucu birçok jeocoğrafik aracı uygular:
  - `geocode_address`: Metni coğrafik koordinatlara dönüştür
  - `reverse_geocode`: Koordinatları insan tarafından okunabilir adreslere dönüştür
  - `find_nearby_places`: Bir konumun yakınındaki ilgi noktalarını keşfet
  - `get_route_directions`: Konumlar arasında adım adım yönleri al
  - `search_category`: Bir alandaki belirli kategorilerin yerlerini bul
  - `suggest_meeting_point`: Birden fazla kişi için optimal buluşma noktaları bul
  - `explore_area`: Bir mahalle hakkında kapsamlı veri al
  - `find_schools_nearby`: Belirli bir konumun yakınında eğitim kurumlarını konumlandır
  - `analyze_commute`: Ev ve iş arasında ulaşım seçeneklerini karşılaştır
  - `find_ev_charging_stations`: Filtreleme ile EV şarj altyapısını konumlandır
  - `analyze_neighborhood`: Gayrimenkul için mahalle yaşanabilirliğini değerlendir
  - `find_parking_facilities`: Bir varış noktasının yakınında otopark seçeneklerini konumlandır


  ## Yerel Test

  ### Sunucuyu Çalıştırma

  Sunucuyu yerel olarak çalıştırmak için:

  1. Paketi geliştirme modunda kurun:

  ```bash
  pip install -e .
  ```

  2. Sunucuyu başlatın:

  ```bash
  osm-mcp-server
  ```

  3. Sunucu başlayacak ve standart giriş/çıkışta MCP isteklerini dinleyecektir.

  ### Örnek İstemcilerle Test Etme

  Depo `examples/` dizininde iki örnek istemci içerir:

  #### Temel İstemci Örneği

  `client.py`, OSM MCP sunucusunun temel kullanımını gösterir:

  ```bash
  python examples/client.py
  ```

  Bu işlem şunları yapacaktır:
  - Yerel olarak çalışan sunucuya bağlan
  - San Francisco hakkında bilgi al
  - Bölgedeki restoranları ara
  - İlerleme izlemesiyle kapsamlı harita verileri al

  #### LLM Entegrasyonu Örneği

  `llm_client.py`, LLM entegrasyonu için tasarlanmış bir yardımcı sınıf sağlar:

  ```bash
  python examples/llm_client.py
  ```

  Bu örnek, bir LLM'nin Konum Asistanını nasıl kullanabileceğini gösterir:
  - Metin sorgularından konum bilgisi al
  - Yakındaki ilgi noktaları bul
  - Konumlar arasında yönleri al
  - Optimal buluşma noktaları bul
  - Mahalleleri keşfet

  ### Kendi İstemcinizi Yazma

  Kendi istemcinizi oluşturmak için:

  1. MCP istemcisini içe aktarın:
  ```python
  from mcp.client import Client
  ```

  2. İstemciyi sunucu URL'iniz ile başlatın:
  ```python
  client = Client("http://localhost:8000")
  ```

  3. Araçları çağırın veya kaynaklara erişin:
  ```python
  # Örnek: Bir adresi coğrafya kodla
  results = await client.invoke_tool("geocode_address", {"address": "New York City"})
  ```

  #### Yerel sunucu için Claude Desktop yapılandırması

  MacOS'ta: `~/Library/Application\ Support/Claude/claude_desktop_config.json`
  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  <details>
    <summary>Geliştirme/Yayınlanmamış Sunucuları Yapılandırması</summary>
    
    ```json
    "mcpServers": {
      "osm-mcp-server": {
        "command": "uv",
        "args": [
          "--directory",
          "/path/to/osm-mcp-server",
          "run",
          "osm-mcp-server"
        ]
      }
    }
    ```
  </details>



  ## Geliştirme

  ### Oluşturma ve Yayınlama

  Paketi dağıtım için hazırlamak üzere:

  1. Bağımlılıkları senkronize edin ve lockfile'ı güncelleyin:
  ```bash
  uv sync
  ```

  2. Paket dağıtımları oluşturun:
  ```bash
  uv build
  ```

  Bu, `dist/` dizininde kaynak ve wheel dağıtımları oluşturacaktır.

  3. PyPI'ye yayınlayın:
  ```bash
  uv publish
  ```

  Not: PyPI kimlik bilgilerini ortam değişkenleri veya komut bayrakları aracılığıyla ayarlamanız gerekecektir.

  ### Hata Ayıklama

  MCP sunucuları stdio üzerinden çalıştığından, hata ayıklama zor olabilir. En iyi hata ayıklama
  deneyimi için [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanmanızı şiddetle tavsiye ederiz.

  MCP Inspector'ı [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ile bu komut aracılığıyla başlatabilirsiniz:

  ```bash
  npx @modelcontextprotocol/inspector uv --directory /path/to/osm-mcp-server run osm-mcp-server
  ```

  Başlatıldığında, Inspector hata ayıklamaya başlamak için tarayıcınızda erişebileceğiniz bir URL gösterecektir.
---

# OpenStreetMap (OSM) MCP Server

An OpenStreetMap MCP server implementation that enhances LLM capabilities with location-based services and geospatial data.

## Demo

### Meeting Point Optimization
![Meeting Point Use Case](https://raw.githubusercontent.com/jagan-shanmugam/open-streetmap-mcp/HEAD/demo/use-case-meeting.gif)

### Neighborhood Analysis
![Neighborhood Analysis Use Case](https://raw.githubusercontent.com/jagan-shanmugam/open-streetmap-mcp/HEAD/demo/use-case-neighborhood.gif)

### Parking Search
![Parking Search Use Case](https://raw.githubusercontent.com/jagan-shanmugam/open-streetmap-mcp/HEAD/demo/use-case-parking.gif)


## Installation

### In MCP Hosts like Claude Desktop, Cursor, Windsurf, etc.
- `osm-mcp-server`: The main server, available for public use.
  
  ```json
  "mcpServers": {
    "osm-mcp-server": {
      "command": "uvx",
      "args": [
        "osm-mcp-server"
      ]
    }
  }
  ```

## Features

This server provides LLMs with tools to interact with OpenStreetMap data, enabling location-based applications to:

- Geocode addresses and place names to coordinates
- Reverse geocode coordinates to addresses
- Find nearby points of interest
- Get route directions between locations
- Search for places by category within a bounding box
- Suggest optimal meeting points for multiple people
- Explore areas and get comprehensive location information
- Find schools and educational institutions near a location
- Analyze commute options between home and work
- Locate EV charging stations with connector and power filtering
- Perform neighborhood livability analysis for real estate
- Find parking facilities with availability and fee information

## Components

### Resources

The server implements location-based resources:
- `location://place/{query}`: Get information about places by name or address
- `location://map/{style}/{z}/{x}/{y}`: Get styled map tiles at specified coordinates

### Tools

The server implements several geospatial tools:
- `geocode_address`: Convert text to geographic coordinates
- `reverse_geocode`: Convert coordinates to human-readable addresses
- `find_nearby_places`: Discover points of interest near a location
- `get_route_directions`: Get turn-by-turn directions between locations
- `search_category`: Find places of specific categories in an area
- `suggest_meeting_point`: Find optimal meeting spots for multiple people
- `explore_area`: Get comprehensive data about a neighborhood
- `find_schools_nearby`: Locate educational institutions near a specific location
- `analyze_commute`: Compare transportation options between home and work
- `find_ev_charging_stations`: Locate EV charging infrastructure with filtering
- `analyze_neighborhood`: Evaluate neighborhood livability for real estate
- `find_parking_facilities`: Locate parking options near a destination


## Local Testing

### Running the Server

To run the server locally:

1. Install the package in development mode:

```bash
pip install -e .
```

2. Start the server:

```bash
osm-mcp-server
```

3. The server will start and listen for MCP requests on the standard input/output.

### Testing with Example Clients

The repository includes two example clients in the `examples/` directory:

#### Basic Client Example

`client.py` demonstrates basic usage of the OSM MCP server:

```bash
python examples/client.py
```

This will:
- Connect to the locally running server
- Get information about San Francisco
- Search for restaurants in the area
- Retrieve comprehensive map data with progress tracking

#### LLM Integration Example

`llm_client.py` provides a helper class designed for LLM integration:

```bash
python examples/llm_client.py
```

This example shows how an LLM can use the Location Assistant to:
- Get location information from text queries
- Find nearby points of interest
- Get directions between locations
- Find optimal meeting points
- Explore neighborhoods

### Writing Your Own Client

To create your own client:

1. Import the MCP client:
```python
from mcp.client import Client
```

2. Initialize the client with your server URL:
```python
client = Client("http://localhost:8000")
```

3. Invoke tools or access resources:
```python
# Example: Geocode an address
results = await client.invoke_tool("geocode_address", {"address": "New York City"})
```

#### Claude Desktop config for local server

On MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

<details>
  <summary>Development/Unpublished Servers Configuration</summary>
  
  ```json
  "mcpServers": {
    "osm-mcp-server": {
      "command": "uv",
      "args": [
        "--directory",
        "/path/to/osm-mcp-server",
        "run",
        "osm-mcp-server"
      ]
    }
  }
  ```
</details>



## Development

### Building and Publishing

To prepare the package for distribution:

1. Sync dependencies and update lockfile:
```bash
uv sync
```

2. Build package distributions:
```bash
uv build
```

This will create source and wheel distributions in the `dist/` directory.

3. Publish to PyPI:
```bash
uv publish
```

Note: You'll need to set PyPI credentials via environment variables or command flags.

### Debugging

Since MCP servers run over stdio, debugging can be challenging. For the best debugging
experience, we strongly recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector).

You can launch the MCP Inspector via [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) with this command:

```bash
npx @modelcontextprotocol/inspector uv --directory /path/to/osm-mcp-server run osm-mcp-server
```

Upon launching, the Inspector will display a URL that you can access in your browser to begin debugging.
