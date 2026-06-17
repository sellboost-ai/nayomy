---
name: "semiotic-react-dataviz-cursorrules-prompt-file"
clean_name: "Semiotic React Dataviz"
description: "Cursor rules for Semiotic data visualization library with 30+ chart types, MCP server, and AI-assisted chart generation."
description_tr: "Semiotic veri görselleştirme kütüphanesi için cursor rules; 30+ grafik tipi, MCP server ve yapay zeka destekli grafik oluşturma özelliklerini içerir."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/semiotic-react-dataviz-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/semiotic-react-dataviz-cursorrules-prompt-file.mdc"
body_length: 28313
file_extension: ".mdc"
body_tr: |-
  # Semiotic — AI Asistan Rehberi

  ## Hızlı Başlangıç
  - Kur: `npm install semiotic`
  - İçe Aktar: `semiotic`, `semiotic/xy`, `semiotic/ordinal`, `semiotic/network`, `semiotic/geo`, `semiotic/realtime`, `semiotic/ai`, `semiotic/data`, `semiotic/server`
  - CLI: `npx semiotic-ai [--schema|--compact|--examples|--doctor]`
  - MCP: `npx semiotic-mcp`
  - Her HOC yerleşik bir hata sınırlandırıcısına sahiptir (sayfayı hiç boşaltmaz) ve geliştirme modu doğrulama uyarıları

  ## Mimari
  - **HOC Grafikler**: Basit props, akılı varsayılanlar. **Stream Frames**: Tam kontrol.
  - **Her zaman HOC grafikler kullan** (`ForceDirectedGraph`, `SankeyDiagram`, `LineChart`, `RealtimeLineChart`, `ChoroplethMap`, vb.) sürece onların ortaya koymadığı sofistike bir kontrol gerekmedikçe. Stream Frames (`StreamNetworkFrame`, `StreamXYFrame`, `StreamOrdinalFrame`, `StreamGeoFrame`) düşük seviyeli kaçış kaynakları — doğrudan callback'lerde `RealtimeNode`/`RealtimeEdge` sarmalayıcılarını kabul ederler, veri objelerinizi değil.
  - Her HOC `frameProps` kabul eder. TypeScript `strict: true`.

  ## Ortak Props (tüm HOC'lar)
  `title`, `width` (600), `height` (400), `responsiveWidth`, `responsiveHeight`, `margin`, `className`, `enableHover` (true), `tooltip` (boolean | `(datum) => ReactNode` | config objesi), `showLegend`, `showGrid` (false), `frameProps`, `onObservation` (geri çağırma, aşağıya bak), `chartId`, `loading` (false), `emptyContent`, `legendInteraction` ("none"|"highlight"|"isolate"), `legendPosition` ("right"|"left"|"top"|"bottom", varsayılan "right"), `emphasis` ("primary"|"secondary")

  ### tooltip
  `tooltip` kabul eder: `true` (varsayılan araç ipucu), `false` (devre dışı), bir **fonksiyon** `(datum: Record<string, any>) => ReactNode` veya bir config `{ fields?: string[], title?: accessor, format?: fn, style?: CSSProperties }`. Fonksiyon biçimi doğrudan ham veri nesnenizi alır.

  ### onObservation
  `onObservation` bir `ChartObservation` alır, `type` ve olaya özgü alanlar içerir:
  - **hover**: `{ type: "hover", datum: <veri>, x, y, timestamp, chartType, chartId }`
  - **hover-end**: `{ type: "hover-end", timestamp, chartType, chartId }`
  - **click**: `{ type: "click", datum: <veri>, x, y, timestamp, chartType, chartId }`
  - **brush**: `{ type: "brush", extent: { x: [min, max], y: [min, max] }, timestamp, chartType }`
  - **selection**: `{ type: "selection", selection: { name, fields }, timestamp, chartType }`

  `datum` alanı orijinal veri nesnenizi içerir (sarmalayıcı değil).

  ## XY Grafikler (`semiotic/xy`)

  **LineChart** — `data`, `xAccessor` ("x"), `yAccessor` ("y"), `lineBy`, `lineDataAccessor` ("coordinates"), `colorBy`, `colorScheme`, `curve`, `lineWidth` (2), `showPoints`, `pointRadius` (3), `fillArea`, `areaOpacity` (0.3), `anomaly` (AnomalyConfig), `forecast` (ForecastConfig), `directLabel` (boolean|{position,fontSize}), `gapStrategy` ("break"|"interpolate"|"zero"), `xScaleType` ("linear"|"log"), `yScaleType` ("linear"|"log")

  **AreaChart** — LineChart props + `areaBy`, `y0Accessor` (bant/şerit), `gradientFill` (boolean|{topOpacity,bottomOpacity}), `areaOpacity` (0.7), `showLine` (true)

  **StackedAreaChart** — düz dizi verisi + `areaBy` (gerekli, yığılmış alanlara grupla), `colorBy`, `normalize` (false). `lineBy` veya `lineDataAccessor` kullanma — bunlar LineChart props'udur.

  **Scatterplot** — `data`, `xAccessor`, `yAccessor`, `colorBy`, `sizeBy`, `sizeRange`, `pointRadius` (5), `pointOpacity` (0.8), `marginalGraphics`

  **BubbleChart** — Scatterplot + `sizeBy` (gerekli), `sizeRange` ([5,40]), `bubbleOpacity` (0.6)

  **ConnectedScatterplot** — `data`, `xAccessor`, `yAccessor`, `orderAccessor` (sıralama için sayı|Tarih alanı), `pointRadius` (4). Viridis renkli başlangıç→bitiş, çizgi genişliği = nokta yarıçapı, <100 nokta olduğunda çizgilerin altında beyaz hale.

  **QuadrantChart** — Dört etiketli, renkli kadrana bölünen Scatterplot. `data`, `xAccessor`, `yAccessor`, `quadrants` (gerekli: `{ topRight, topLeft, bottomRight, bottomLeft }` her biri `label`, `color`, isteğe bağlı `opacity` ile), `xCenter` (veri birimlerinde dikey merkez çizgisi), `yCenter` (yatay merkez çizgisi), `centerlineStyle` (`{ stroke, strokeWidth, strokeDasharray }`), `showQuadrantLabels` (true), `quadrantLabelSize` (12), `colorBy`, `sizeBy`, `sizeRange`, `pointRadius` (5), `pointOpacity` (0.8). Push API'sını destekler. Kadran dolgularını ve etiketlerini `canvasPreRenderers` aracılığıyla çizer.

  **Heatmap** — `data`, `xAccessor`, `yAccessor`, `valueAccessor`, `colorScheme` ("blues"|"reds"|"greens"|"viridis" veya özel), `showValues`, `cellBorderColor`. Accessorlar dize alan adları (dize/kategorik alanlar dahil) veya fonksiyonlar olabilir.

  ## Ordinal Grafikler (`semiotic/ordinal`)

  **BarChart** — `data`, `categoryAccessor`, `valueAccessor`, `orientation`, `colorBy`, `sort`, `barPadding` (40)
  **StackedBarChart** — + `stackBy` (gerekli), `normalize`, `barPadding` (40)
  **GroupedBarChart** — + `groupBy` (gerekli), `barPadding` (60)
  **SwarmPlot** — `data`, `categoryAccessor`, `valueAccessor`, `colorBy`, `sizeBy`, `pointRadius`, `pointOpacity`
  **BoxPlot** — + `showOutliers`, `outlierRadius`
  **Histogram** — + `bins` (25), `relative`. Her zaman yatay. `categoryAccessor` isteğe bağlıdır (varsayılan `"category"`) — tek grup histogramı için, bunu atla veya verinizin tek bir değerli `category` alanı olduğundan emin ol.
  **ViolinPlot** — + `bins`, `curve`, `showIQR`
  **DotPlot** — + `sort` (true), `dotRadius`, `showGrid` varsayılan true
  **PieChart** — `data`, `categoryAccessor`, `valueAccessor`, `colorBy`, `startAngle`, `slicePadding`
  **DonutChart** — PieChart + `innerRadius` (60), `centerContent` (ReactNode — herhangi bir React öğesi, ör. `<div>50%</div>`)

  ## Ağ Grafikler (`semiotic/network`)

  **ForceDirectedGraph** — `nodes`, `edges`, `nodeIDAccessor`, `sourceAccessor`, `targetAccessor`, `colorBy`, `colorScheme`, `nodeSize` (number|string|fn), `nodeSizeRange`, `edgeWidth`, `edgeColor`, `edgeOpacity`, `iterations` (300), `forceStrength` (0.1), `showLabels`, `nodeLabel`, `tooltip`, `showLegend`, `legendInteraction`
  **SankeyDiagram** — `edges`, `nodes`, `valueAccessor`, `edgeColorBy`, `orientation`, `nodeAlign`, `nodeWidth`, `showLabels`, `edgeOpacity`
  **ChordDiagram** — `edges`, `nodes`, `valueAccessor`, `edgeColorBy`, `padAngle`, `groupWidth`, `showLabels`
  **TreeDiagram** — `data` (kök), `layout`, `orientation`, `childrenAccessor`, `colorBy`, `colorByDepth`, `edgeStyle`
  **Treemap** — `data` (kök), `childrenAccessor`, `valueAccessor`, `colorBy`, `colorByDepth`, `showLabels`, `labelMode`
  **CirclePack** — `data` (kök), `childrenAccessor`, `valueAccessor`, `colorBy`, `colorByDepth`, `circleOpacity`
  **OrbitDiagram** — animasyonlu radyal/orbital hiyerarşi. Animasyonlu yörüngede dönen düğümler istediğinde bunu kullan (TreeDiagram değil). `data` (kök), `childrenAccessor`, `nodeIdAccessor`, `orbitMode` ("flat"|"solar"|"atomic"|number[]), `speed` (0.25), `revolution`, `eccentricity`, `orbitSize`, `nodeRadius`, `showRings`, `showLabels`, `animated` (true), `colorBy`, `colorByDepth`, `annotations` (widget ek açıklamaları nodeId'ye göre sabitle). Statik radyal ağaçlar için bunun yerine `TreeDiagram layout="radial"` kullan.

  ## Coğrafi Grafikler (`semiotic/geo`)

  d3-geo projeksiyonları ile coğrafi görselleştirme. Canvas aracılığıyla `StreamGeoFrame` ile oluşturulur. Coğrafi olmayan paketlere d3-geo eklenmesini önlemek için `semiotic/geo`'dan içe aktar.

  **ChoroplethMap** — `areas` (GeoJSON Feature[] veya "world-110m" gibi referans dizesi), `valueAccessor`, `colorScheme` ("blues"|"reds"|"greens"|"viridis"), `areaOpacity` (1), `projection` ("equalEarth"), `graticule`, `tooltip`, `showLegend`
  **ProportionalSymbolMap** — `points`, `xAccessor` ("lon"), `yAccessor` ("lat"), `sizeBy`, `sizeRange` ([3,30]), `colorBy`, `areas` (isteğe bağlı arka plan), `projection`
  **FlowMap** — `flows` ({source, target, value}), `nodes`, `xAccessor`, `yAccessor`, `nodeIdAccessor` ("id"), `valueAccessor` ("value"), `edgeColorBy`, `edgeOpacity` (0.6), `edgeWidthRange` ([1,8]), `edgeLinecap` ("round"), `lineType` ("geo"|"line"), `areas` (isteğe bağlı arka plan), `showParticles`, `particleStyle` ({ radius, color, opacity, speedMultiplier, maxPerLine, spawnRate }). Parçacık `color` bir dize, `"source"` (çizgi vuruşundan devral) veya `(datum) => string` kabul eder.
  **DistanceCartogram** — `points`, `center` (merkez düğümün id'si), `costAccessor`, `strength` (0-1), `lineMode` ("straight"|"fractional"), `nodeIdAccessor` ("id"), `lines`, `projection`, `showRings` (true|false|number[]), `ringStyle` ({ stroke, strokeWidth, ... }), `showNorth` (true), `costLabel` (halka etiketleri için dize), `transition` (smooth animasyon için ms), `pointRadius`

  Tüm coğrafi HOC'lar şunları destekler: `selection`, `linkedHover`, `onObservation`, `showLegend`, `legendInteraction`, `tooltip`, `loading`, `emptyContent`, `frameProps`, `fitPadding` (0–1 kesir, kenarlardan otomatik uydurma projeksiyonunu içe çeker), `zoomable` (tileURL ile varsayılan true, aksi takdirde false), `zoomExtent`, `onZoom`, `dragRotate`, `graticule`, `tileURL`, `tileAttribution`, `tileCacheSize`

  **Yakınlaştırma/Kaydırma**: Tüm coğrafi grafikler `zoomable` (boolean), `zoomExtent` ([minZoom, maxZoom], varsayılan [1, 8]) ve `onZoom` (geri çağırma `{ projection, zoom }` ile) kabul eder. Projeksiyonu her yakınlaştırma onayında doğrudan yeniden oluşturur (CSS dönüşümü yok). İmperatif API: `ref.current.getZoom()`, `ref.current.resetZoom()`.

  **Coğrafi Parçacıklar**: `FlowMap` ve `StreamGeoFrame` `showParticles` (boolean) ve `particleStyle` destekler; çizgi yollarını takip eden noktaları canlandırır. `GeoParticlePool` — bir nesne havuzu çok çizgili parçacık sistemi kullanır. Parçacık `color` kabul eder: `"source"` (çizgi vuruşundan devral), bir CSS dizesi veya `(datum) => string` satır başı renk için.

  **Sürükle Döndür (Dünya Döndürme)**: `dragRotate` (boolean) — true olduğunda, sürükleme hareketleri projeksiyonu döndürür (dünya döndürme) kaydırma yerine. **Orthografik projeksiyon için varsayılan true olur.** Kaydırma tekeri yakınlaştırması normal çalışır. Diğer projeksiyonlarda rotasyonu etkinleştirmek için orthografik'te `dragRotate={false}` veya `dragRotate={true}` açıkça ayarla. Enlem rotasyonu çevirmesi önlemek için [-90, 90] sınırlandırılır.

  **Döşeme Haritaları**: Tüm coğrafi grafikler `tileURL` (dize şablonu gibi `"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"` veya `(z, x, y, dpr) => string`), `tileAttribution` (ör. `"© OpenStreetMap contributors"`), `tileCacheSize` (varsayılan 256) kabul eder. Döşemeler veri katmanları arkasında arka plan kanvasında oluşturulur. **Sadece Mercator projeksiyonu** — coğrafi olmayan projeksiyonlar için geliştirme uyarısı yayınlanır. Döşemeler yakınlaştırma/kaydırma sırasında güncellenir. Retina desteği `{r}` yer tutucu veya DPR parametresi aracılığıyla. **Üretim**: OpenStreetMap döşemeleri sadece geliştirme/demo içindir. Üretim için, ticari bir döşeme sağlayıcı kullan (Mapbox, MapTiler, Stadia Maps) kendi API anahtarınız ile ortam değişkeni aracılığıyla geçir (istemci kodunda anahtarları asla sabiteme). Örnek: `tileURL={\`https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=\${process.env.MAPBOX_TOKEN}\`}`.

  **StreamGeoFrame** — düşük seviyeli çerçeve tam kontrol ile. Props: `projection`, `areas`, `points`, `lines`, `xAccessor`, `yAccessor`, `areaStyle`, `pointStyle`, `lineStyle`, `graticule`, `projectionTransform` (uzaklık cartogram config), `projectionExtent`, `enableHover`, `tooltipContent`, `zoomable`, `zoomExtent`, `onZoom`, `tileURL`, `tileAttribution`, `tileCacheSize`, `decay`, `pulse`, `transition`. Push API: `ref.current.push(datum)`, `ref.current.pushMany(data)`, `ref.current.clear()`.

  **Referans coğrafyası**: `resolveReferenceGeography("world-110m")` Natural Earth verilerinden GeoJSON özellikleri döner (world-atlas). Desteklenen: `"world-110m"`, `"world-50m"`, `"land-110m"`, `"land-50m"`. Tüm coğrafi HOC'lar `areas` kabul eder `GeoJSON.Feature[]` veya bir referans dizesi olarak.

  **mergeData(features, data, { featureKey, dataKey })** — anahtar alanı ile GeoJSON özelliklerine harici veri birleştirir. İç içe yolları destekler (ör. `"properties.iso_a3"`). World-atlas, `id` alanı olarak ISO 3166-1 sayısal kodlarını kullanır. `semiotic/data` alanından da genel birleştir-anahtar-tarafından yardımcı olarak kullanılabilir.

  ```jsx
  // Referans coğrafya + veri birleştirme ile dünya choropleth
  import { ChoroplethMap, resolveReferenceGeography, mergeData } from "semiotic/geo"
  const world = await resolveReferenceGeography("world-110m")
  const areas = mergeData(world, gdpData, { featureKey: "id", dataKey: "id" })
  <ChoroplethMap areas={areas} valueAccessor="gdpPerCapita" colorScheme="viridis"
    projection="equalEarth" zoomable tooltip />

  // Mesafe cartogram (ORBIS stili) eşmerkezli halkalar yer paylaşımı ile
  import { DistanceCartogram } from "semiotic/geo"
  <DistanceCartogram
    points={cities} center="rome" costAccessor="travelDays"
    strength={0.8} lines={routes} showLegend zoomable
    showRings costLabel="days" showNorth
    ringStyle={{ stroke: "#999", strokeWidth: 0.5 }}
  />

  // Orantılı sembollü döşeme haritası arka planı
  <ProportionalSymbolMap
    points={earthquakes} xAccessor="lon" yAccessor="lat"
    sizeBy="magnitude" sizeRange={[2, 20]}
    projection="mercator" zoomable
    tileURL="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    tileAttribution="© OpenStreetMap contributors"
  />

  // Yakınlaştırma ile akışkanlık coğrafi noktaları
  const geoRef = useRef()
  geoRef.current.push({ lon: -122.4, lat: 37.8, value: 42 })
  <StreamGeoFrame ref={geoRef} projection="mercator" xAccessor="lon" yAccessor="lat"
    runtimeMode="streaming" decay={{ type: "linear", minOpacity: 0.1 }}
    zoomable zoomExtent={[1, 12]} onZoom={({ zoom }) => console.log(zoom)} />
  ```

  ## Realtime Grafikler (`semiotic/realtime`)

  Push API: `chartRef.current.push({ time, value })`

  **ÖNEMLİ**: Tüm itilen veriler bir zaman alanı içermelidir (varsayılan: `"time"`). Veriniz farklı bir alan adı kullanıyorsa, `timeAccessor`'ı açıkça ayarla. Geçerli bir zaman alanı olmadan, grafikler hatasız boş oluşturulur.

  Boyutlandırma: tüm Realtime HOC'lar hem `size={[600, 400]}` (tuple) hem de `width={600} height={400}` kabul eder. Her biri işe yarar.

  **RealtimeLineChart** — `size`|`width`+`height`, **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `windowSize` (200), `windowMode`, `stroke`, `strokeWidth`
  **RealtimeHistogram** — **`binSize`** (gerekli), **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `categoryAccessor`, `colors`. Zaman alanı gereklidir — dağılım gösterse de, pencereleme için kullanılır.
  **RealtimeSwarmChart** — **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `categoryAccessor`, `radius`, `opacity`
  **RealtimeWaterfallChart** — **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `positiveColor`, `negativeColor`
  **RealtimeHeatmap** — **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `heatmapXBins`, `heatmapYBins`, `aggregation`. Her iki accessor da veri alanlarınızla eşleşmelidir veya grafik boş oluşturulur.
  **Akışkanlık Sankey** — `chartType="sankey"` ile `StreamNetworkFrame`, `showParticles` (boolean), `particleStyle` (`{ radius, opacity, speedMultiplier, maxPerEdge, colorBy }`), `tensionConfig`, `thresholds`. **Bireysel kenarlar** itin: `ref.current.push({ source: "A", target: "B", value: 42 })`. Toplu işler için `ref.current.pushMany([...edges])` kullan.

  Realtime kodlama: `decay`, `pulse`, `transition`, `staleness` — tüm akışkanlık grafiklerinde serbestçe oluştur.

  ### Realtime veri şekli
  ```jsx
  // Her itilen veri zaman alanı olmalıdır
  ref.current.push({ time: Date.now(), value: 42 })              // line, waterfall
  ref.current.push({ time: Date.now(), value: 42, category: "A" }) // histogram, swarm
  ref.current.push({ time: Date.now(), value: 42 })              // heatmap (time=x, value=y)
  ```

  ### HOC grafiklerinde Push API
  Pek çok HOC grafik `forwardRef` aracılığıyla push API'sini destekler. `data` prop'unu atla ve verileri imparatif olarak itin:
  ```jsx
  const chartRef = useRef()
  chartRef.current.push({ x: 1, y: 2 })          // tek nokta
  chartRef.current.pushMany([...points])           // toplu
  chartRef.current.clear()                          // sıfırla
  chartRef.current.getData()                        // mevcut veri oku
  <Scatterplot ref={chartRef} xAccessor="x" yAccessor="y" />
  ```
  **ÖNEMLİ**: Push API kullanırken, **bütünüyle atla** `data`/`nodes`/`edges` prop — `data={[]}` itin, bu her render'da itilen veriyi temizler. Akışkanlık spesifik props (`windowSize`, `decay`, `pulse`) `frameProps`'e git.

  Desteklenen: tüm XY grafikler (LineChart, AreaChart, Scatterplot, vb.), tüm ordinal grafikler (BarChart, Histogram, vb.), ağ grafikler (ForceDirectedGraph, SankeyDiagram, ChordDiagram) ve coğrafi nokta grafikler (ProportionalSymbolMap, DistanceCartogram). **Desteklenmeyen**: hiyerarşi grafikler (TreeDiagram, Treemap, CirclePack, OrbitDiagram) — kök nesnesi veri şekilleri düz itmeyle uyumsuzdur. ChoroplethMap (alan tabanlı, nokta tabanlı değil), FlowMap (çizgi tabanlı) ve ScatterplotMatrix da push'u desteklemez.

  ## Stream Frame Geri Çağırmaları (ileri — HOC'ları tercih et)
  Stream Frame geri çağırmaları (`nodeStyle`, `edgeStyle`, `nodeSize` fonksiyon olarak, `colorBy` fonksiyon olarak, `nodeLabel` fonksiyon olarak) **`RealtimeNode`/`RealtimeEdge`** sarmalayıcılarını alır, HAM verini değil. Özgün veriyi `.data` aracılığıyla erişin:
  ```jsx
  // YANLIŞ: nodeSize={(d) => d.weight}         — d RealtimeNode, d.weight tanımsız
  // DOĞRU: nodeSize={(d) => d.data?.weight}   — d.data asıl düğüm nesnesi
  // DOĞRU: nodeSize="weight"                  — dize accessor bunu otomatik işler
  // YANLIŞ: nodeStyle={(d) => ({ fill: d.datum.color })}  — .datum yok
  // DOĞRU: nodeStyle={(d) => ({ fill: d.data?.color })}  — .data kullan
  ```
  `customHoverBehavior` ve `customClickBehavior` `{ type: "node"|"edge", data: <ham nesne>, x, y } | null` alır.
  `tooltipContent` `{ type: "node"|"edge", data: <ham nesne> }` alır.

  ## Koordine Edilmiş Görünümler

  **LinkedCharts** — grafikler sarması. Props: `selections` (çözünürlük: "union"|"intersect"|"crossfilter"), `showLegend` (CategoryColorProvider mevcut olduğunda otomatik), `legendPosition` ("top"|"bottom"), `legendInteraction` ("highlight"|"isolate"|"none"), `legendSelectionName` (efsane tarafından işlenen çapraz vurgu için seçim adı), `legendField` (efsane seçimleri için veri alanı)
  **CategoryColorProvider** — sabit kategori→renk eşlemesi. Props: `colors` (harita) veya `categories` + `colorScheme`
  Grafik props: `selection`, `linkedHover`, `linkedBrush`. Kancalar: `useSelection`, `useLinkedHover`, `useBrushSelection`, `useFilteredData`
  **ScatterplotMatrix** — `data`, `fields`, `colorBy`, `cellSize`, `hoverMode`, `brushMode`

  ## ChartContainer

  **ChartContainer** — başlık, alt başlık, durum göstergesi, araç çubuğu eylemleri ile sarması. Props: `title`, `subtitle`, `height` (varsayılan **400** — grafiğin yüksekliğini eşleştirmek için ayarla veya fazladan boşluk alırsın), `width` (varsayılan "100%"), `status` ("live"|"stale"|"error"), `loading`, `error`, `errorBoundary`, `actions` (`{ export, fullscreen, copyConfig }`), `controls`, `style`, `className`

  `size={[w, h]}` içeren bir grafik ile `ChartContainer` kullanırken, uyumsuzluğu önlemek için daima `height={h}` container'a ayarla.

  ## Düzen & Bileşim

  **ChartGrid** — CSS Grid düzen. `columns` (sayı|"auto"), `minCellWidth` (300), `gap` (16). `emphasis="primary"` içeren çocuklar iki sütunu yayma.
  **ContextLayout** — birincil + bağlam paneli. `context` (ReactNode), `position`, `contextSize` (250)

  ## Anahtar Desenler

  ```jsx
  // Özel boyutlandırma ve vurgulama ile kuvvet yönelimli grafik
  <ForceDirectedGraph
    nodes={[{ id: "A", group: "eng", weight: 10 }, { id: "B", group: "design", weight: 5 }]}
    edges={[{ source: "A", target: "B" }]}
    colorBy="group"
    nodeSize="weight"           // dize accessor → node.weight okur, nodeSizeRange'e ölçekle
    nodeSizeRange={[5, 25]}
    showLabels
    showLegend
    tooltip={(d) => <div>{d.id}: {d.weight}</div>}
    frameProps={{
      customClickBehavior: (d) => { if (d?.type === "node") console.log(d.data) },
      background: "#f5f5f5",
    }}
  />

  // Sütun açılımı ile çapraz vurgu panosu
  // emphasis="primary" ChartGrid'de 2 sütunu yayan bir grafik yapar
  <CategoryColorProvider categories={["North", "South", "East"]}>
  <LinkedCharts>
    <ChartGrid columns={2}>
      <LineChart data={d} colorBy="region" linkedHover={{ name: "hl", fields: ["region"] }} selection={{ name: "hl" }} emphasis="primary" responsiveWidth />
      <BarChart data={d} colorBy="region" linkedHover={{ name: "hl", fields: ["region"] }} selection={{ name: "hl" }} responsiveWidth />
      <Scatterplot data={d} colorBy="region" linkedHover={{ name: "hl", fields: ["region"] }} selection={{ name: "hl" }} responsiveWidth />
    </ChartGrid>
  </LinkedCharts>
  </CategoryColorProvider>

  // Tahmin + anomali (otomatik)
  <LineChart data={ts} xAccessor="time" yAccessor="value"
    forecast={{ trainEnd: 60, steps: 15, confidence: 0.95 }}
    anomaly={{ threshold: 2 }} />

  // Tahmin (ön-hesaplanan ML sınırları)
  <LineChart data={ml} xAccessor="time" yAccessor="value"
    forecast={{ isTraining: "isTraining", isForecast: "isForecast", isAnomaly: "isAnomaly", upperBounds: "upper", lowerBounds: "lower" }} />

  // Yığılmış alan (düz dizi + areaBy, lineBy DEĞİL)
  <StackedAreaChart data={flatData} xAccessor="month" yAccessor="value"
    areaBy="category" colorBy="category" />

  // Yüzdelik bant (p5–p95) ana çizgi ile (p50) — İKİ GRAFIK KATMAN ETMEK GEREKLİ
  // y0Accessor ile AreaChart bandı oluşturur; showLine sadece ÜST kenarını çizer (p95), p50 değil
  // Ayrı ana çizgi göstermek için, üstüne LineChart ekle:
  <>
    <AreaChart data={d} xAccessor="x" yAccessor="p95" y0Accessor="p5"
      showLine={false} areaOpacity={0.3} gradientFill />
    <LineChart data={d} xAccessor="x" yAccessor="p50" lineWidth={2} />
  </>
  // Basit gradyan alan (bant yok):
  <AreaChart data={d} xAccessor="x" yAccessor="y" gradientFill />

  // Realtime — her zaman itilen veriye zaman alanı dahil et
  const ref = useRef()
  ref.current.push({ time: Date.now(), value: 42 })
  <RealtimeLineChart ref={ref} timeAccessor="time" valueAccessor="value" />

  // Realtime histogram — dağılım grafikleri için bile zaman alanı gerekli
  const histRef = useRef()
  histRef.current.push({ time: Date.now(), value: Math.abs(delta) })
  <RealtimeHistogram ref={histRef} timeAccessor="time" valueAccessor="value" binSize={100} />

  // Parçacıkları olan akışkanlık sankey — bireysel kenarlar itin, tam anlık görüntü DEĞİL
  const sankeyRef = useRef()
  sankeyRef.current.push({ source: "Web", target: "API", value: 1 })    // bir kenar tabında
  sankeyRef.current.pushMany([                                            // veya toplu
    { source: "Web", target: "API", value: 3 },
    { source: "API", target: "DB", value: 2 },
  ])
  <StreamNetworkFrame
    ref={sankeyRef}
    chartType="sankey"
    showParticles={true}
    particleStyle={{ radius: 2, colorBy: "source", speedMultiplier: 1.5 }}
    width={600} height={400}
  />

  // SSR — renderToStaticSVG çerçeve türü dizesini alır, bileşen adını değil
  import { renderOrdinalToStaticSVG } from "semiotic/server"
  const svg = renderOrdinalToStaticSVG({
    data, categoryAccessor: "category", valueAccessor: "value", width: 600, height: 400
  })
  ```

  ## Ek Açıklamalar
  - `type: "widget"` — veri koordinatlarında herhangi bir React öğesi yerleştir. Tüm çerçeve türlerinde işe yarar. XY/ordinal veri koordinatları kullanır (`x`/`y` veya alan adları). Ağ/yörünge `nodeId` kullanır. Varsayılan: bilgi emoji'si. HTML yer paylaşımı (SVG değil) olarak oluşturulur; böylece açılır menüler/konuşmalar serbestçe taşabilir.
  ```jsx
  annotations={[{ type: "widget", month: 4, revenue: 32, dy: -4, content: <MyAlertButton /> }]}
  // OrbitDiagram: annotations={[{ type: "widget", nodeId: "Pipeline", content: <Alert /> }]}
  ```

  ## Sunucu Tarafı Oluşturma
  - Tüm HOC grafikler ve Stream Frames sunucu ortamlarında otomatik olarak SVG oluşturur (window/document yok)
  - `renderToStaticSVG(frameType, props)` — `semiotic/server`'dan bağımsız SVG dizesi. `frameType` `"xy"` | `"ordinal"` | `"network"` | `"geo"` (NOT "BarChart" gibi bileşen adı)
  - Türe özgü kısayollar: `renderXYToStaticSVG(props)`, `renderOrdinalToStaticSVG(props)`, `renderNetworkToStaticSVG(props)`, `renderGeoToStaticSVG(props)`
  - Çubuk grafik için: `renderOrdinalToStaticSVG({ data, categoryAccessor: "cat", valueAccessor: "val", width: 600, height: 400 })`
  - Next.js App Router, Remix, Astro ile çalışır — sunucu ve istemci'de aynı bileşen
  - **Coğrafi SSR ön-çözümlü özellikleri gerektirir**: `renderGeoToStaticSVG` senkron — GeoJSON özelliklerini doğrudan geç, "world-110m" gibi referans dizileri değil. `await resolveReferenceGeography("world-110m")` çağrı yap ve sonucu `areas`'a geç.

  ## AI Özellikleri
  - `onObservation` — tüm HOC'larda yapılandırılmış olaylar (vurgula, tıkla, fırça, seçim)
  - `useChartObserver` — LinkedCharts'ta gözlemleri topla
  - `toConfig`/`fromConfig`/`toURL`/`fromURL`/`copyConfig`/`configToJSX` — grafik durumu seri hale getir
  - `DetailsPanel` — `ChartContainer` içinde tıkla-tarafından sürülen detay paneli
  - `validateProps(componentName, props)` — Levenshtein yazım hatası önerileri ile prop doğrulama
  - `diagnoseConfig(componentName, props)` — anti-desen dedektörü (12 kontrol: boş veri, kötü boyutlar, eksik accessorlar, kenar genişliği taşması, vb.)
  - `ChartErrorBoundary` — hata sınırlandırıcı
  - `exportChart(containerDiv, { format: "png"|"svg" })` — **sarmalayıcı div** geç (SVG öğesi değil); canvas + SVG'yi içe göre bulur. Varsayılan: PNG, canvas + SVG katmanlarını birleştir
  - `npx semiotic-ai --doctor` — bileşen + props JSON'unu CLI'dan doğrula (validateProps ve diagnoseConfig'i kullanır)

  ## Bilinen Tuzaklar

  **Araç ipucu veri şekli**: HOC araç ipucu fonksiyonları ham veri nesnenizi alır. Stream Frames'te `frameProps.tooltipContent` kullanırken, veri sarmalanan olabilir — verine `.data` aracılığıyla erişin. HOC `tooltip` fonksiyonlarının buna ihtiyacı yoktur.

  **Efsane konumu**: `legendPosition` efsanenin nerede oluşturulduğunu kontrol eder. "bottom" ayarlandığında, grafik otomatik olarak ~80px yer açmak için alt kenarı genişletir. "top" için kenar ~50px genişletilir. Daha fazla alan gerekli ise, `margin` açıkça geçersiz kıl. ~400px'den dar grafikler için, "bottom" veya "top" tercih et (bottom daha yaygındır) grafik alanını sıkıştırmayı önlemek için. Benzer şekilde, kısa grafikler (~250px veya daha az) için, bir yan efsane grafiği çok sıkıştırabilir — bunun yerine üstü veya altı kullan.

  **Log ölçeği ve sıfır**: `xScaleType="log"` / `yScaleType="log"` log(0) tanımsız olduğundan alan minimumlarını 1e-6 sınırlandırır. Sıfır veya negatif değerler içeren veri sınırlandırılacaktır.

  **Heatmap dize eksenleri ile**: Heatmap dize/kategorik x ve y değerlerini destekler (ör. haftanın günü adları, saat etiketleri). `colorScheme` prop d3-scale-chromatic adlarını kabul eder: "blues", "reds", "greens", "viridis".

  **barPadding pikseldir**: Ordinal grafikler üzerinde `barPadding` bant ölçeği dolgulama oranı hesaplamak için grafik genişliğine bölünen mutlak bir piksel değeridir. Varsayılanlar (40 bar/yığılmış, 60 gruplanmış) 600px genişliğinde iyi çalışır. Çok küçük grafikler için, azaltmanız gerekebilir.

  **Yatay çubuk grafikler daha geniş sol kenarlar gerektirir**: Uzun kategori etiketleri ile `orientation="horizontal"` kullanırken, sol kenarı manuel olarak artır: `margin={{ left: 120 }}`. Etiket genişliğinin otomatik ölçümü yok.

  **LinkedCharts çocuk efsaneleri bastırır**: Bir `CategoryColorProvider` `LinkedCharts`'ı sardığında, bireysel grafik efsaneleri birleşik bir efsane lehine bastırılır. Bir çocuk grafiğini kendi efsanesini göstermeye zorlamak için, `showLegend={true}` açıkça ayarla.

  **Coğrafi paket izolasyonu**: `semiotic/geo` ayrı bir giriş noktasıdır. Coğrafi bileşenleri `semiotic`'ten içe alma — d3-geo (~30KB) coğrafi olmayan paketlere çekmeyi önlemek için `import { ChoroplethMap } from "semiotic/geo"` kullan.

  **Push API: veriyi atla, boş dizi itin**: HOC'larda `ref.current.push()` kullanırken, **bütünüyle atla** `data`/`nodes`/`edges` prop. `data={[]}` itin, bu HOC'ın Stream Frame'e `setBoundedData([])` iletmesi nedeniyle her render'da itilen veriyi temizler. Benzer şekilde, `data={undefined}` iyidir (prop yok), ancak `data={null}` atlanmış olarak ele alınır.

  **`diagnoseConfig` yaygın hatalar yakalar**: Boş veri, kötü boyutlar, eksik accessorlar, kenar genişliği taşması ve daha fazla kontrol etmek için `diagnoseConfig("BarChart", props)` çağrı yap. CLI'dan `npx semiotic-ai --doctor` kullan.

  ## Ayırıcılar
  Ağ görselleştirme, coğrafi görselleştirme (choropleth, akış haritaları, mesafe cartogramları), akışkanlık canvas, realtime kodlama, koordine edilmiş görünümler, istatistiksel özetler, AI kancaları, grafik seri hale getirme, küresel tema, klavye navigasyonu, etkileşimli efsaneler (vurgula/ayır), doğrudan etiketleme, boşluk işlemesi, boş/yükleme durumları, simge işareti etiketleri, LinkedCharts birleşik efsane
---

# Semiotic — AI Assistant Guide

## Quick Start
- Install: `npm install semiotic`
- Import: `semiotic`, `semiotic/xy`, `semiotic/ordinal`, `semiotic/network`, `semiotic/geo`, `semiotic/realtime`, `semiotic/ai`, `semiotic/data`, `semiotic/server`
- CLI: `npx semiotic-ai [--schema|--compact|--examples|--doctor]`
- MCP: `npx semiotic-mcp`
- Every HOC has a built-in error boundary (never blanks the page) and dev-mode validation warnings

## Architecture
- **HOC Charts**: Simple props, sensible defaults. **Stream Frames**: Full control.
- **Always use HOC charts** (`ForceDirectedGraph`, `SankeyDiagram`, `LineChart`, `RealtimeLineChart`, `ChoroplethMap`, etc.) unless you need sophisticated control they don't expose. Stream Frames (`StreamNetworkFrame`, `StreamXYFrame`, `StreamOrdinalFrame`, `StreamGeoFrame`) are low-level escape hatches — they accept raw `RealtimeNode`/`RealtimeEdge` wrappers in callbacks, not your data objects directly.
- Every HOC accepts `frameProps` to pass through. TypeScript `strict: true`.

## Common Props (all HOCs)
`title`, `width` (600), `height` (400), `responsiveWidth`, `responsiveHeight`, `margin`, `className`, `enableHover` (true), `tooltip` (boolean | `(datum) => ReactNode` | config object), `showLegend`, `showGrid` (false), `frameProps`, `onObservation` (callback, see below), `chartId`, `loading` (false), `emptyContent`, `legendInteraction` ("none"|"highlight"|"isolate"), `legendPosition` ("right"|"left"|"top"|"bottom", default "right"), `emphasis` ("primary"|"secondary")

### tooltip
`tooltip` accepts: `true` (default tooltip), `false` (disabled), a **function** `(datum: Record<string, any>) => ReactNode`, or a config `{ fields?: string[], title?: accessor, format?: fn, style?: CSSProperties }`. The function form receives your raw data object directly.

### onObservation
`onObservation` receives a `ChartObservation` with `type` and event-specific fields:
- **hover**: `{ type: "hover", datum: <your data>, x, y, timestamp, chartType, chartId }`
- **hover-end**: `{ type: "hover-end", timestamp, chartType, chartId }`
- **click**: `{ type: "click", datum: <your data>, x, y, timestamp, chartType, chartId }`
- **brush**: `{ type: "brush", extent: { x: [min, max], y: [min, max] }, timestamp, chartType }`
- **selection**: `{ type: "selection", selection: { name, fields }, timestamp, chartType }`

The `datum` field contains your original data object (not a wrapper).

## XY Charts (`semiotic/xy`)

**LineChart** — `data`, `xAccessor` ("x"), `yAccessor` ("y"), `lineBy`, `lineDataAccessor` ("coordinates"), `colorBy`, `colorScheme`, `curve`, `lineWidth` (2), `showPoints`, `pointRadius` (3), `fillArea`, `areaOpacity` (0.3), `anomaly` (AnomalyConfig), `forecast` (ForecastConfig), `directLabel` (boolean|{position,fontSize}), `gapStrategy` ("break"|"interpolate"|"zero"), `xScaleType` ("linear"|"log"), `yScaleType` ("linear"|"log")

**AreaChart** — LineChart props + `areaBy`, `y0Accessor` (band/ribbon), `gradientFill` (boolean|{topOpacity,bottomOpacity}), `areaOpacity` (0.7), `showLine` (true)

**StackedAreaChart** — flat array data + `areaBy` (required, groups into stacked areas), `colorBy`, `normalize` (false). Do NOT use `lineBy` or `lineDataAccessor` — those are LineChart props.

**Scatterplot** — `data`, `xAccessor`, `yAccessor`, `colorBy`, `sizeBy`, `sizeRange`, `pointRadius` (5), `pointOpacity` (0.8), `marginalGraphics`

**BubbleChart** — Scatterplot + `sizeBy` (required), `sizeRange` ([5,40]), `bubbleOpacity` (0.6)

**ConnectedScatterplot** — `data`, `xAccessor`, `yAccessor`, `orderAccessor` (number|Date field for sequencing), `pointRadius` (4). Viridis colored start→end, line width = point radius, white halo under lines when <100 points.

**QuadrantChart** — Scatterplot divided into four labeled, colored quadrants. `data`, `xAccessor`, `yAccessor`, `quadrants` (required: `{ topRight, topLeft, bottomRight, bottomLeft }` each with `label`, `color`, optional `opacity`), `xCenter` (vertical center line in data units), `yCenter` (horizontal center line), `centerlineStyle` (`{ stroke, strokeWidth, strokeDasharray }`), `showQuadrantLabels` (true), `quadrantLabelSize` (12), `colorBy`, `sizeBy`, `sizeRange`, `pointRadius` (5), `pointOpacity` (0.8). Supports push API. Quadrant fills and labels drawn via `canvasPreRenderers`.

**Heatmap** — `data`, `xAccessor`, `yAccessor`, `valueAccessor`, `colorScheme` ("blues"|"reds"|"greens"|"viridis" or custom), `showValues`, `cellBorderColor`. Accessors can be string field names (including string/categorical fields) or functions.

## Ordinal Charts (`semiotic/ordinal`)

**BarChart** — `data`, `categoryAccessor`, `valueAccessor`, `orientation`, `colorBy`, `sort`, `barPadding` (40)
**StackedBarChart** — + `stackBy` (required), `normalize`, `barPadding` (40)
**GroupedBarChart** — + `groupBy` (required), `barPadding` (60)
**SwarmPlot** — `data`, `categoryAccessor`, `valueAccessor`, `colorBy`, `sizeBy`, `pointRadius`, `pointOpacity`
**BoxPlot** — + `showOutliers`, `outlierRadius`
**Histogram** — + `bins` (25), `relative`. Always horizontal. `categoryAccessor` is optional (defaults to `"category"`) — for a single-group histogram, either omit it or ensure your data has a `category` field with a single value.
**ViolinPlot** — + `bins`, `curve`, `showIQR`
**DotPlot** — + `sort` (true), `dotRadius`, `showGrid` default true
**PieChart** — `data`, `categoryAccessor`, `valueAccessor`, `colorBy`, `startAngle`, `slicePadding`
**DonutChart** — PieChart + `innerRadius` (60), `centerContent` (ReactNode — any React element, e.g. `<div>50%</div>`)

## Network Charts (`semiotic/network`)

**ForceDirectedGraph** — `nodes`, `edges`, `nodeIDAccessor`, `sourceAccessor`, `targetAccessor`, `colorBy`, `colorScheme`, `nodeSize` (number|string|fn), `nodeSizeRange`, `edgeWidth`, `edgeColor`, `edgeOpacity`, `iterations` (300), `forceStrength` (0.1), `showLabels`, `nodeLabel`, `tooltip`, `showLegend`, `legendInteraction`
**SankeyDiagram** — `edges`, `nodes`, `valueAccessor`, `edgeColorBy`, `orientation`, `nodeAlign`, `nodeWidth`, `showLabels`, `edgeOpacity`
**ChordDiagram** — `edges`, `nodes`, `valueAccessor`, `edgeColorBy`, `padAngle`, `groupWidth`, `showLabels`
**TreeDiagram** — `data` (root), `layout`, `orientation`, `childrenAccessor`, `colorBy`, `colorByDepth`, `edgeStyle`
**Treemap** — `data` (root), `childrenAccessor`, `valueAccessor`, `colorBy`, `colorByDepth`, `showLabels`, `labelMode`
**CirclePack** — `data` (root), `childrenAccessor`, `valueAccessor`, `colorBy`, `colorByDepth`, `circleOpacity`
**OrbitDiagram** — animated radial/orbital hierarchy. Use this (not TreeDiagram) when you want animated orbiting nodes. `data` (root), `childrenAccessor`, `nodeIdAccessor`, `orbitMode` ("flat"|"solar"|"atomic"|number[]), `speed` (0.25), `revolution`, `eccentricity`, `orbitSize`, `nodeRadius`, `showRings`, `showLabels`, `animated` (true), `colorBy`, `colorByDepth`, `annotations` (widget annotations anchor by nodeId). For static radial trees, use `TreeDiagram layout="radial"` instead.

## Geo Charts (`semiotic/geo`)

Geographic visualization with d3-geo projections. Canvas-rendered via `StreamGeoFrame`. Import from `semiotic/geo` to avoid adding d3-geo to non-geo bundles.

**ChoroplethMap** — `areas` (GeoJSON Feature[] or reference string like "world-110m"), `valueAccessor`, `colorScheme` ("blues"|"reds"|"greens"|"viridis"), `areaOpacity` (1), `projection` ("equalEarth"), `graticule`, `tooltip`, `showLegend`
**ProportionalSymbolMap** — `points`, `xAccessor` ("lon"), `yAccessor` ("lat"), `sizeBy`, `sizeRange` ([3,30]), `colorBy`, `areas` (optional background), `projection`
**FlowMap** — `flows` ({source, target, value}), `nodes`, `xAccessor`, `yAccessor`, `nodeIdAccessor` ("id"), `valueAccessor` ("value"), `edgeColorBy`, `edgeOpacity` (0.6), `edgeWidthRange` ([1,8]), `edgeLinecap` ("round"), `lineType` ("geo"|"line"), `areas` (optional background), `showParticles`, `particleStyle` ({ radius, color, opacity, speedMultiplier, maxPerLine, spawnRate }). Particle `color` accepts a string, `"source"` (inherit line stroke), or `(datum) => string`.
**DistanceCartogram** — `points`, `center` (id of center node), `costAccessor`, `strength` (0-1), `lineMode` ("straight"|"fractional"), `nodeIdAccessor` ("id"), `lines`, `projection`, `showRings` (true|false|number[]), `ringStyle` ({ stroke, strokeWidth, ... }), `showNorth` (true), `costLabel` (string for ring labels), `transition` (ms for smooth animation), `pointRadius`

All geo HOCs support: `selection`, `linkedHover`, `onObservation`, `showLegend`, `legendInteraction`, `tooltip`, `loading`, `emptyContent`, `frameProps`, `fitPadding` (0–1 fraction, insets auto-fit projection from edges), `zoomable` (defaults true with tileURL, false otherwise), `zoomExtent`, `onZoom`, `dragRotate`, `graticule`, `tileURL`, `tileAttribution`, `tileCacheSize`

**Zoom/Pan**: All geo charts accept `zoomable` (boolean), `zoomExtent` ([minZoom, maxZoom], default [1, 8]), and `onZoom` (callback with `{ projection, zoom }`). Re-renders projection directly on every zoom tick (no CSS transform). Imperative API: `ref.current.getZoom()`, `ref.current.resetZoom()`.

**Geo Particles**: `FlowMap` and `StreamGeoFrame` support `showParticles` (boolean) and `particleStyle` to animate dots flowing along line paths. Uses `GeoParticlePool` — an object-pool polyline particle system. Particle `color` accepts: `"source"` (inherit line stroke), a CSS string, or `(datum) => string` for per-line color.

**Drag Rotate (Globe Spinning)**: `dragRotate` (boolean) — when true, drag gestures rotate the projection (globe spinning) instead of panning. **Defaults to true for orthographic projection.** Scroll-wheel zoom still works normally. Explicitly set `dragRotate={false}` on orthographic to get standard pan behavior, or `dragRotate={true}` on other projections to enable rotation. Latitude rotation is clamped to [-90, 90] to prevent flipping.

**Tile Maps**: All geo charts accept `tileURL` (string template like `"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"` or `(z, x, y, dpr) => string`), `tileAttribution` (e.g., `"© OpenStreetMap contributors"`), `tileCacheSize` (default 256). Tiles render on a background canvas behind data layers. **Mercator projection only** — a dev warning is emitted for non-Mercator projections. Tiles update on zoom/pan. Retina support via `{r}` placeholder or DPR parameter. **Production**: OpenStreetMap tiles are for development/demo only. For production, use a commercial tile provider (Mapbox, MapTiler, Stadia Maps) with your own API key passed via environment variable (never hard-code keys in client code). Example: `tileURL={\`https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=\${process.env.MAPBOX_TOKEN}\`}`.

**StreamGeoFrame** — low-level frame with full control. Props: `projection`, `areas`, `points`, `lines`, `xAccessor`, `yAccessor`, `areaStyle`, `pointStyle`, `lineStyle`, `graticule`, `projectionTransform` (distance cartogram config), `projectionExtent`, `enableHover`, `tooltipContent`, `zoomable`, `zoomExtent`, `onZoom`, `tileURL`, `tileAttribution`, `tileCacheSize`, `decay`, `pulse`, `transition`. Push API: `ref.current.push(datum)`, `ref.current.pushMany(data)`, `ref.current.clear()`.

**Reference geography**: `resolveReferenceGeography("world-110m")` returns GeoJSON features from Natural Earth data (world-atlas). Supported: `"world-110m"`, `"world-50m"`, `"land-110m"`, `"land-50m"`. All geo HOCs accept `areas` as `GeoJSON.Feature[]` or a reference string.

**mergeData(features, data, { featureKey, dataKey })** — join external data into GeoJSON features by key field. Supports nested paths (e.g., `"properties.iso_a3"`). World-atlas uses ISO 3166-1 numeric codes as the `id` field. Also available from `semiotic/data` as a general join-by-key utility.

```jsx
// World choropleth with reference geography + data joining
import { ChoroplethMap, resolveReferenceGeography, mergeData } from "semiotic/geo"
const world = await resolveReferenceGeography("world-110m")
const areas = mergeData(world, gdpData, { featureKey: "id", dataKey: "id" })
<ChoroplethMap areas={areas} valueAccessor="gdpPerCapita" colorScheme="viridis"
  projection="equalEarth" zoomable tooltip />

// Distance cartogram (ORBIS-style) with concentric rings overlay
import { DistanceCartogram } from "semiotic/geo"
<DistanceCartogram
  points={cities} center="rome" costAccessor="travelDays"
  strength={0.8} lines={routes} showLegend zoomable
  showRings costLabel="days" showNorth
  ringStyle={{ stroke: "#999", strokeWidth: 0.5 }}
/>

// Tile map basemap with proportional symbols
<ProportionalSymbolMap
  points={earthquakes} xAccessor="lon" yAccessor="lat"
  sizeBy="magnitude" sizeRange={[2, 20]}
  projection="mercator" zoomable
  tileURL="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  tileAttribution="© OpenStreetMap contributors"
/>

// Streaming geo points with zoom
const geoRef = useRef()
geoRef.current.push({ lon: -122.4, lat: 37.8, value: 42 })
<StreamGeoFrame ref={geoRef} projection="mercator" xAccessor="lon" yAccessor="lat"
  runtimeMode="streaming" decay={{ type: "linear", minOpacity: 0.1 }}
  zoomable zoomExtent={[1, 12]} onZoom={({ zoom }) => console.log(zoom)} />
```

## Realtime Charts (`semiotic/realtime`)

Push API: `chartRef.current.push({ time, value })`

**IMPORTANT**: All pushed data must include a time field (default: `"time"`). If your data uses a different field name, set `timeAccessor` explicitly. Without a valid time field, charts render blank with no error.

Sizing: all Realtime HOCs accept both `size={[600, 400]}` (tuple) and `width={600} height={400}`. Either works.

**RealtimeLineChart** — `size`|`width`+`height`, **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `windowSize` (200), `windowMode`, `stroke`, `strokeWidth`
**RealtimeHistogram** — **`binSize`** (required), **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `categoryAccessor`, `colors`. Time field is required even though this shows a distribution — it's used for windowing.
**RealtimeSwarmChart** — **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `categoryAccessor`, `radius`, `opacity`
**RealtimeWaterfallChart** — **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `positiveColor`, `negativeColor`
**RealtimeHeatmap** — **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `heatmapXBins`, `heatmapYBins`, `aggregation`. Both accessors must match your data fields or the chart renders blank.
**Streaming Sankey** — `StreamNetworkFrame` with `chartType="sankey"`, `showParticles` (boolean), `particleStyle` (`{ radius, opacity, speedMultiplier, maxPerEdge, colorBy }`), `tensionConfig`, `thresholds`. Push **individual edges**: `ref.current.push({ source: "A", target: "B", value: 42 })`. Use `ref.current.pushMany([...edges])` for batches.

Realtime encoding: `decay`, `pulse`, `transition`, `staleness` — compose freely on all streaming charts.

### Realtime data shape
```jsx
// Every pushed datum should have a time field
ref.current.push({ time: Date.now(), value: 42 })              // line, waterfall
ref.current.push({ time: Date.now(), value: 42, category: "A" }) // histogram, swarm
ref.current.push({ time: Date.now(), value: 42 })              // heatmap (time=x, value=y)
```

### Push API on HOC charts
Many HOC charts support the push API via `forwardRef`. Omit the `data` prop and push data imperatively:
```jsx
const chartRef = useRef()
chartRef.current.push({ x: 1, y: 2 })          // single point
chartRef.current.pushMany([...points])           // batch
chartRef.current.clear()                          // reset
chartRef.current.getData()                        // read current data
<Scatterplot ref={chartRef} xAccessor="x" yAccessor="y" />
```
**IMPORTANT**: When using the push API, **omit** the `data`/`nodes`/`edges` prop entirely — do NOT pass `data={[]}`, which clears pushed data on every render. Streaming-specific props (`windowSize`, `decay`, `pulse`) go in `frameProps`.

Supported: all XY charts (LineChart, AreaChart, Scatterplot, etc.), all ordinal charts (BarChart, Histogram, etc.), network charts (ForceDirectedGraph, SankeyDiagram, ChordDiagram), and geo point charts (ProportionalSymbolMap, DistanceCartogram). **Not supported**: hierarchy charts (TreeDiagram, Treemap, CirclePack, OrbitDiagram) — their root-object data shape is incompatible with flat push. ChoroplethMap (area-based, not point-based), FlowMap (line-based), and ScatterplotMatrix also do not support push.

## Stream Frame Callbacks (advanced — prefer HOCs)
Stream Frame callbacks (`nodeStyle`, `edgeStyle`, `nodeSize` as function, `colorBy` as function, `nodeLabel` as function) receive **`RealtimeNode`/`RealtimeEdge`** wrappers, NOT your raw data. Access your original data via `.data`:
```jsx
// WRONG: nodeSize={(d) => d.weight}         — d is RealtimeNode, d.weight is undefined
// RIGHT: nodeSize={(d) => d.data?.weight}   — d.data is your original node object
// RIGHT: nodeSize="weight"                  — string accessor handles this automatically
// WRONG: nodeStyle={(d) => ({ fill: d.datum.color })}  — .datum does not exist
// RIGHT: nodeStyle={(d) => ({ fill: d.data?.color })}  — use .data
```
`customHoverBehavior` and `customClickBehavior` receive `{ type: "node"|"edge", data: <your raw object>, x, y } | null`.
`tooltipContent` receives `{ type: "node"|"edge", data: <your raw object> }`.

## Coordinated Views

**LinkedCharts** — wraps charts. Props: `selections` (resolution: "union"|"intersect"|"crossfilter"), `showLegend` (auto when CategoryColorProvider present), `legendPosition` ("top"|"bottom"), `legendInteraction` ("highlight"|"isolate"|"none"), `legendSelectionName` (selection name for legend-driven cross-highlighting), `legendField` (data field for legend selections)
**CategoryColorProvider** — stable category→color mapping. Props: `colors` (map) or `categories` + `colorScheme`
Chart props: `selection`, `linkedHover`, `linkedBrush`. Hooks: `useSelection`, `useLinkedHover`, `useBrushSelection`, `useFilteredData`
**ScatterplotMatrix** — `data`, `fields`, `colorBy`, `cellSize`, `hoverMode`, `brushMode`

## ChartContainer

**ChartContainer** — wrapper with title, subtitle, status indicator, toolbar actions. Props: `title`, `subtitle`, `height` (default **400** — set this to match your chart's height or you'll get extra whitespace), `width` (default "100%"), `status` ("live"|"stale"|"error"), `loading`, `error`, `errorBoundary`, `actions` (`{ export, fullscreen, copyConfig }`), `controls`, `style`, `className`

When using `ChartContainer` with a chart that has `size={[w, h]}`, always set `height={h}` on the container to avoid a mismatch.

## Layout & Composition

**ChartGrid** — CSS Grid layout. `columns` (number|"auto"), `minCellWidth` (300), `gap` (16). Children with `emphasis="primary"` span two columns.
**ContextLayout** — primary + context panel. `context` (ReactNode), `position`, `contextSize` (250)

## Key Patterns

```jsx
// Force-directed graph with custom sizing and hover
<ForceDirectedGraph
  nodes={[{ id: "A", group: "eng", weight: 10 }, { id: "B", group: "design", weight: 5 }]}
  edges={[{ source: "A", target: "B" }]}
  colorBy="group"
  nodeSize="weight"           // string accessor → reads node.weight, scales to nodeSizeRange
  nodeSizeRange={[5, 25]}
  showLabels
  showLegend
  tooltip={(d) => <div>{d.id}: {d.weight}</div>}
  frameProps={{
    customClickBehavior: (d) => { if (d?.type === "node") console.log(d.data) },
    background: "#f5f5f5",
  }}
/>

// Cross-highlighting dashboard with column spanning
// emphasis="primary" makes a chart span 2 columns in ChartGrid
<CategoryColorProvider categories={["North", "South", "East"]}>
<LinkedCharts>
  <ChartGrid columns={2}>
    <LineChart data={d} colorBy="region" linkedHover={{ name: "hl", fields: ["region"] }} selection={{ name: "hl" }} emphasis="primary" responsiveWidth />
    <BarChart data={d} colorBy="region" linkedHover={{ name: "hl", fields: ["region"] }} selection={{ name: "hl" }} responsiveWidth />
    <Scatterplot data={d} colorBy="region" linkedHover={{ name: "hl", fields: ["region"] }} selection={{ name: "hl" }} responsiveWidth />
  </ChartGrid>
</LinkedCharts>
</CategoryColorProvider>

// Forecast + anomaly (auto)
<LineChart data={ts} xAccessor="time" yAccessor="value"
  forecast={{ trainEnd: 60, steps: 15, confidence: 0.95 }}
  anomaly={{ threshold: 2 }} />

// Forecast (pre-computed ML bounds)
<LineChart data={ml} xAccessor="time" yAccessor="value"
  forecast={{ isTraining: "isTraining", isForecast: "isForecast", isAnomaly: "isAnomaly", upperBounds: "upper", lowerBounds: "lower" }} />

// Stacked area (flat array + areaBy, NOT lineBy)
<StackedAreaChart data={flatData} xAccessor="month" yAccessor="value"
  areaBy="category" colorBy="category" />

// Percentile band (p5–p95) with main line (p50) — MUST layer two charts
// AreaChart with y0Accessor renders the band; showLine only draws the TOP edge (p95), not p50
// To show a separate main line, add a LineChart on top:
<>
  <AreaChart data={d} xAccessor="x" yAccessor="p95" y0Accessor="p5"
    showLine={false} areaOpacity={0.3} gradientFill />
  <LineChart data={d} xAccessor="x" yAccessor="p50" lineWidth={2} />
</>
// Simple gradient area (no band):
<AreaChart data={d} xAccessor="x" yAccessor="y" gradientFill />

// Realtime — always include time field in pushed data
const ref = useRef()
ref.current.push({ time: Date.now(), value: 42 })
<RealtimeLineChart ref={ref} timeAccessor="time" valueAccessor="value" />

// Realtime histogram — time field required even for distribution charts
const histRef = useRef()
histRef.current.push({ time: Date.now(), value: Math.abs(delta) })
<RealtimeHistogram ref={histRef} timeAccessor="time" valueAccessor="value" binSize={100} />

// Streaming sankey with particles — push individual edges, NOT full snapshots
const sankeyRef = useRef()
sankeyRef.current.push({ source: "Web", target: "API", value: 1 })    // one edge at a time
sankeyRef.current.pushMany([                                            // or batch
  { source: "Web", target: "API", value: 3 },
  { source: "API", target: "DB", value: 2 },
])
<StreamNetworkFrame
  ref={sankeyRef}
  chartType="sankey"
  showParticles={true}
  particleStyle={{ radius: 2, colorBy: "source", speedMultiplier: 1.5 }}
  width={600} height={400}
/>

// SSR — renderToStaticSVG takes frame type string, not component name
import { renderOrdinalToStaticSVG } from "semiotic/server"
const svg = renderOrdinalToStaticSVG({
  data, categoryAccessor: "category", valueAccessor: "value", width: 600, height: 400
})
```

## Annotations
- `type: "widget"` — place any React element at data coordinates. Works on all frame types. XY/ordinal use data coordinates (`x`/`y` or field names). Network/orbit use `nodeId`. Default: info emoji. Renders as HTML overlay (not SVG) so popups/threads overflow freely.
```jsx
annotations={[{ type: "widget", month: 4, revenue: 32, dy: -4, content: <MyAlertButton /> }]}
// OrbitDiagram: annotations={[{ type: "widget", nodeId: "Pipeline", content: <Alert /> }]}
```

## Server-Side Rendering
- All HOC charts and Stream Frames render SVG automatically in server environments (no window/document)
- `renderToStaticSVG(frameType, props)` — standalone SVG string from `semiotic/server`. `frameType` is `"xy"` | `"ordinal"` | `"network"` | `"geo"` (NOT a component name like "BarChart")
- Type-specific shortcuts: `renderXYToStaticSVG(props)`, `renderOrdinalToStaticSVG(props)`, `renderNetworkToStaticSVG(props)`, `renderGeoToStaticSVG(props)`
- For a bar chart: `renderOrdinalToStaticSVG({ data, categoryAccessor: "cat", valueAccessor: "val", width: 600, height: 400 })`
- Works with Next.js App Router, Remix, Astro — same component on server and client
- **Geo SSR requires pre-resolved features**: `renderGeoToStaticSVG` is synchronous — pass GeoJSON features directly, not reference strings like `"world-110m"`. Call `await resolveReferenceGeography("world-110m")` first and pass the result as `areas`.

## AI Features
- `onObservation` — structured events (hover, click, brush, selection) on all HOCs
- `useChartObserver` — aggregates observations across LinkedCharts
- `toConfig`/`fromConfig`/`toURL`/`fromURL`/`copyConfig`/`configToJSX` — chart state serialization
- `DetailsPanel` — click-driven detail panel inside `ChartContainer`
- `validateProps(componentName, props)` — prop validation with Levenshtein typo suggestions
- `diagnoseConfig(componentName, props)` — anti-pattern detector (12 checks: empty data, bad dimensions, missing accessors, margin overflow, etc.)
- `ChartErrorBoundary` — error boundary
- `exportChart(containerDiv, { format: "png"|"svg" })` — pass the **wrapper div** (not the SVG element); it finds canvas + SVG internally. Default: PNG, composites canvas + SVG layers
- `npx semiotic-ai --doctor` — validate component + props JSON from CLI (uses both validateProps and diagnoseConfig)

## Known Pitfalls

**Tooltip datum shape**: HOC tooltip functions receive your raw data object. When using `frameProps.tooltipContent` on Stream Frames, the datum may be wrapped — access your data via `d.data`. HOC `tooltip` functions don't need this.

**Legend positioning**: `legendPosition` controls where the legend renders. When set to "bottom", the chart automatically expands the bottom margin to ~80px to clear axis labels. For "top", margin expands to ~50px. If you need more space, override `margin` explicitly. For charts narrower than ~400px, prefer `legendPosition="bottom"` or `"top"` (bottom is more common) to avoid squeezing the chart area. Similarly, for short charts (~250px or less), a side legend may compress the chart too much — use top or bottom instead.

**Log scale and zero**: `xScaleType="log"` / `yScaleType="log"` clamp domain minimums to 1e-6 because log(0) is undefined. Data with zero or negative values will be clamped.

**Heatmap with string axes**: Heatmap supports string/categorical x and y values (e.g., weekday names, hour labels). The `colorScheme` prop accepts d3-scale-chromatic names: "blues", "reds", "greens", "viridis".

**barPadding is in pixels**: `barPadding` on ordinal charts is an absolute pixel value divided by the chart width to compute a band scale padding ratio. The defaults (40 for bar/stacked, 60 for grouped) work well at 600px width. For very small charts, you may need to reduce it.

**Horizontal bar charts need wider left margins**: When using `orientation="horizontal"` with long category labels, increase the left margin manually: `margin={{ left: 120 }}`. There is no auto-measurement of label width.

**LinkedCharts suppresses child legends**: When a `CategoryColorProvider` wraps `LinkedCharts`, individual chart legends are suppressed in favor of a unified legend. To force a child chart to show its own legend, set `showLegend={true}` explicitly.

**Geo bundle isolation**: `semiotic/geo` is a separate entry point. Do NOT import geo components from `semiotic` — use `import { ChoroplethMap } from "semiotic/geo"` to avoid pulling d3-geo (~30KB) into non-geo bundles.

**Push API: omit data, don't pass empty array**: When using `ref.current.push()` on HOCs, **omit** the `data`/`nodes`/`edges` prop entirely. Passing `data={[]}` clears pushed data on every render because the HOC forwards it to the Stream Frame's `setBoundedData([])`. Similarly, `data={undefined}` is fine (prop not present), but `data={null}` is treated the same as omitted.

**`diagnoseConfig` catches common mistakes**: Run `diagnoseConfig("BarChart", props)` to check for empty data, bad dimensions, missing accessors, margin overflow, invisible bar padding, and more. Use `npx semiotic-ai --doctor` from CLI.

## Differentiators
Network viz, geographic viz (choropleth, flow maps, distance cartograms), streaming canvas, realtime encoding, coordinated views, statistical summaries, AI hooks, chart serialization, global theming, keyboard navigation, interactive legends (highlight/isolate), direct labeling, gap handling, empty/loading states, landmark tick labels, LinkedCharts unified legend
