---
name: "semiotic-react-dataviz-cursorrules-prompt-file"
clean_name: "Semiotic React Dataviz"
description: "Cursor rules for Semiotic data visualization library with 30+ chart types, MCP server, and AI-assisted chart generation."
description_tr: "Semiotic veri görselleştirme kütüphanesi için cursor kuralları; 30+ grafik türü, MCP server ve yapay zeka destekli grafik oluşturma özellikleriyle birlikte sunulmaktadır."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/semiotic-react-dataviz-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/semiotic-react-dataviz-cursorrules-prompt-file.mdc"
body_length: 28313
file_extension: ".mdc"
body_tr: |-
  # Semiotic — AI Asistanı Rehberi

  ## Hızlı Başlangıç
  - Kurulum: `npm install semiotic`
  - İçe aktarma: `semiotic`, `semiotic/xy`, `semiotic/ordinal`, `semiotic/network`, `semiotic/geo`, `semiotic/realtime`, `semiotic/ai`, `semiotic/data`, `semiotic/server`
  - CLI: `npx semiotic-ai [--schema|--compact|--examples|--doctor]`
  - MCP: `npx semiotic-mcp`
  - Her HOC'nin yerleşik bir error boundary'si vardır (sayfayı hiçbir zaman boşaltmaz) ve dev-mode doğrulama uyarıları

  ## Mimari
  - **HOC Grafikleri**: Basit props, mantıklı varsayılanlar. **Stream Frames**: Tam kontrol.
  - **Her zaman HOC grafikleri kullanın** (`ForceDirectedGraph`, `SankeyDiagram`, `LineChart`, `RealtimeLineChart`, `ChoroplethMap`, vb.) — bunların expose etmedikleri sofistike kontrol ihtiyacı olmadığı sürece. Stream Frames (`StreamNetworkFrame`, `StreamXYFrame`, `StreamOrdinalFrame`, `StreamGeoFrame`) düşük seviye kaçış kapılarıdır — callback'lerde raw `RealtimeNode`/`RealtimeEdge` wrapper'ları kabul ederler, veri nesnelerinizi doğrudan değil.
  - Her HOC `frameProps` kabul eder. TypeScript `strict: true`.

  ## Ortak Props (tüm HOC'ler)
  `title`, `width` (600), `height` (400), `responsiveWidth`, `responsiveHeight`, `margin`, `className`, `enableHover` (true), `tooltip` (boolean | `(datum) => ReactNode` | config object), `showLegend`, `showGrid` (false), `frameProps`, `onObservation` (callback, aşağıya bakın), `chartId`, `loading` (false), `emptyContent`, `legendInteraction` ("none"|"highlight"|"isolate"), `legendPosition` ("right"|"left"|"top"|"bottom", varsayılan "right"), `emphasis` ("primary"|"secondary")

  ### tooltip
  `tooltip` kabul eder: `true` (varsayılan tooltip), `false` (devre dışı), bir **function** `(datum: Record<string, any>) => ReactNode` veya config `{ fields?: string[], title?: accessor, format?: fn, style?: CSSProperties }`. Function formu raw veri nesnenizi doğrudan alır.

  ### onObservation
  `onObservation` `ChartObservation` alır (`type` ve event'e özgü alanlar ile):
  - **hover**: `{ type: "hover", datum: <your data>, x, y, timestamp, chartType, chartId }`
  - **hover-end**: `{ type: "hover-end", timestamp, chartType, chartId }`
  - **click**: `{ type: "click", datum: <your data>, x, y, timestamp, chartType, chartId }`
  - **brush**: `{ type: "brush", extent: { x: [min, max], y: [min, max] }, timestamp, chartType }`
  - **selection**: `{ type: "selection", selection: { name, fields }, timestamp, chartType }`

  `datum` alanı orijinal veri nesnenizi içerir (wrapper değil).

  ## XY Grafikleri (`semiotic/xy`)

  **LineChart** — `data`, `xAccessor` ("x"), `yAccessor` ("y"), `lineBy`, `lineDataAccessor` ("coordinates"), `colorBy`, `colorScheme`, `curve`, `lineWidth` (2), `showPoints`, `pointRadius` (3), `fillArea`, `areaOpacity` (0.3), `anomaly` (AnomalyConfig), `forecast` (ForecastConfig), `directLabel` (boolean|{position,fontSize}), `gapStrategy` ("break"|"interpolate"|"zero"), `xScaleType` ("linear"|"log"), `yScaleType` ("linear"|"log")

  **AreaChart** — LineChart props + `areaBy`, `y0Accessor` (band/ribbon), `gradientFill` (boolean|{topOpacity,bottomOpacity}), `areaOpacity` (0.7), `showLine` (true)

  **StackedAreaChart** — düz array veri + `areaBy` (gerekli, istiflenmiş alanlar halinde gruplandırır), `colorBy`, `normalize` (false). `lineBy` veya `lineDataAccessor` kullanmayın — bunlar LineChart props'larıdır.

  **Scatterplot** — `data`, `xAccessor`, `yAccessor`, `colorBy`, `sizeBy`, `sizeRange`, `pointRadius` (5), `pointOpacity` (0.8), `marginalGraphics`

  **BubbleChart** — Scatterplot + `sizeBy` (gerekli), `sizeRange` ([5,40]), `bubbleOpacity` (0.6)

  **ConnectedScatterplot** — `data`, `xAccessor`, `yAccessor`, `orderAccessor` (sequencing için number|Date alanı), `pointRadius` (4). Viridis renkli başlangıç→bitiş, çizgi genişliği = nokta yarıçapı, <100 nokta olduğunda çizgilerin altında beyaz halo.

  **QuadrantChart** — Scatterplot dört etiketli, renkli kadrana bölünmüş. `data`, `xAccessor`, `yAccessor`, `quadrants` (gerekli: `{ topRight, topLeft, bottomRight, bottomLeft }` her biri `label`, `color`, isteğe bağlı `opacity` ile), `xCenter` (veri birimlerinde dikey merkez çizgi), `yCenter` (yatay merkez çizgi), `centerlineStyle` (`{ stroke, strokeWidth, strokeDasharray }`), `showQuadrantLabels` (true), `quadrantLabelSize` (12), `colorBy`, `sizeBy`, `sizeRange`, `pointRadius` (5), `pointOpacity` (0.8). Push API'yi destekler. Kadran doldurmaları ve etiketleri `canvasPreRenderers` aracılığıyla çizilir.

  **Heatmap** — `data`, `xAccessor`, `yAccessor`, `valueAccessor`, `colorScheme` ("blues"|"reds"|"greens"|"viridis" veya custom), `showValues`, `cellBorderColor`. Accessor'lar string alan adları (string/kategorik alanlar dahil) veya function'lar olabilir.

  ## Ordinal Grafikler (`semiotic/ordinal`)

  **BarChart** — `data`, `categoryAccessor`, `valueAccessor`, `orientation`, `colorBy`, `sort`, `barPadding` (40)
  **StackedBarChart** — + `stackBy` (gerekli), `normalize`, `barPadding` (40)
  **GroupedBarChart** — + `groupBy` (gerekli), `barPadding` (60)
  **SwarmPlot** — `data`, `categoryAccessor`, `valueAccessor`, `colorBy`, `sizeBy`, `pointRadius`, `pointOpacity`
  **BoxPlot** — + `showOutliers`, `outlierRadius`
  **Histogram** — + `bins` (25), `relative`. Her zaman yatay. `categoryAccessor` isteğe bağlıdır (varsayılan `"category"`) — tek grup histogram için, bunu atlayın ya da veri'nize tek bir değer ile `category` alanı olduğundan emin olun.
  **ViolinPlot** — + `bins`, `curve`, `showIQR`
  **DotPlot** — + `sort` (true), `dotRadius`, `showGrid` varsayılan true
  **PieChart** — `data`, `categoryAccessor`, `valueAccessor`, `colorBy`, `startAngle`, `slicePadding`
  **DonutChart** — PieChart + `innerRadius` (60), `centerContent` (ReactNode — herhangi bir React element, ör. `<div>50%</div>`)

  ## Ağ Grafikleri (`semiotic/network`)

  **ForceDirectedGraph** — `nodes`, `edges`, `nodeIDAccessor`, `sourceAccessor`, `targetAccessor`, `colorBy`, `colorScheme`, `nodeSize` (number|string|fn), `nodeSizeRange`, `edgeWidth`, `edgeColor`, `edgeOpacity`, `iterations` (300), `forceStrength` (0.1), `showLabels`, `nodeLabel`, `tooltip`, `showLegend`, `legendInteraction`
  **SankeyDiagram** — `edges`, `nodes`, `valueAccessor`, `edgeColorBy`, `orientation`, `nodeAlign`, `nodeWidth`, `showLabels`, `edgeOpacity`
  **ChordDiagram** — `edges`, `nodes`, `valueAccessor`, `edgeColorBy`, `padAngle`, `groupWidth`, `showLabels`
  **TreeDiagram** — `data` (root), `layout`, `orientation`, `childrenAccessor`, `colorBy`, `colorByDepth`, `edgeStyle`
  **Treemap** — `data` (root), `childrenAccessor`, `valueAccessor`, `colorBy`, `colorByDepth`, `showLabels`, `labelMode`
  **CirclePack** — `data` (root), `childrenAccessor`, `valueAccessor`, `colorBy`, `colorByDepth`, `circleOpacity`
  **OrbitDiagram** — animasyonlu radyal/orbital hiyerarşi. Bu'yu (TreeDiagram değil) animasyonlu yörüngede dönen düğümler istediğinizde kullanın. `data` (root), `childrenAccessor`, `nodeIdAccessor`, `orbitMode` ("flat"|"solar"|"atomic"|number[]), `speed` (0.25), `revolution`, `eccentricity`, `orbitSize`, `nodeRadius`, `showRings`, `showLabels`, `animated` (true), `colorBy`, `colorByDepth`, `annotations` (widget annotations nodeId'ye göre bağlantı kurar). Statik radyal ağaçlar için bunun yerine `TreeDiagram layout="radial"` kullanın.

  ## Coğrafi Grafikler (`semiotic/geo`)

  d3-geo projeksiyonları ile coğrafi görselleştirme. Canvas aracılığıyla render edilir `StreamGeoFrame`. Coğrafi olmayan paketlere d3-geo eklemekten kaçınmak için `semiotic/geo`'dan içe aktarın.

  **ChoroplethMap** — `areas` (GeoJSON Feature[] veya "world-110m" gibi referans string), `valueAccessor`, `colorScheme` ("blues"|"reds"|"greens"|"viridis"), `areaOpacity` (1), `projection` ("equalEarth"), `graticule`, `tooltip`, `showLegend`
  **ProportionalSymbolMap** — `points`, `xAccessor` ("lon"), `yAccessor` ("lat"), `sizeBy`, `sizeRange` ([3,30]), `colorBy`, `areas` (isteğe bağlı arka plan), `projection`
  **FlowMap** — `flows` ({source, target, value}), `nodes`, `xAccessor`, `yAccessor`, `nodeIdAccessor` ("id"), `valueAccessor` ("value"), `edgeColorBy`, `edgeOpacity` (0.6), `edgeWidthRange` ([1,8]), `edgeLinecap` ("round"), `lineType` ("geo"|"line"), `areas` (isteğe bağlı arka plan), `showParticles`, `particleStyle` ({ radius, color, opacity, speedMultiplier, maxPerLine, spawnRate }). Parçacık `color` string, `"source"` (çizgi stroke'unu devral) veya `(datum) => string` kabul eder.
  **DistanceCartogram** — `points`, `center` (merkez düğümün id'si), `costAccessor`, `strength` (0-1), `lineMode` ("straight"|"fractional"), `nodeIdAccessor` ("id"), `lines`, `projection`, `showRings` (true|false|number[]), `ringStyle` ({ stroke, strokeWidth, ... }), `showNorth` (true), `costLabel` (halka etiketleri için string), `transition` (pürüzsüz animasyon için ms), `pointRadius`

  Tüm coğrafi HOC'ler destekler: `selection`, `linkedHover`, `onObservation`, `showLegend`, `legendInteraction`, `tooltip`, `loading`, `emptyContent`, `frameProps`, `fitPadding` (0–1 kesir, kenarlardan auto-fit projeksiyonu iç boşluk), `zoomable` (tileURL ile varsayılan true, aksi takdirde false), `zoomExtent`, `onZoom`, `dragRotate`, `graticule`, `tileURL`, `tileAttribution`, `tileCacheSize`

  **Zoom/Pan**: Tüm coğrafi grafikler `zoomable` (boolean), `zoomExtent` ([minZoom, maxZoom], varsayılan [1, 8]) ve `onZoom` (callback `{ projection, zoom }` ile) kabul eder. Her zoom demet'inde projeksiyonu doğrudan yeniden render eder (CSS transform yok). Komuta dayalı API: `ref.current.getZoom()`, `ref.current.resetZoom()`.

  **Coğrafi Parçacıklar**: `FlowMap` ve `StreamGeoFrame` `showParticles` (boolean) ve `particleStyle` destekler, çizgi yolları boyunca akan noktaları animate eder. `GeoParticlePool` kullanır — bir nesne-pool polyline parçacık sistemi. Parçacık `color` kabul eder: `"source"` (çizgi stroke'unu devral), bir CSS string veya `(datum) => string` (satır başı rengi için).

  **Drag Rotate (Küre Döndürme)**: `dragRotate` (boolean) — true olduğunda, sürükleme jestleri projeksiyonu döndürür (küre döndürme) pan yerine. **Orthographic projeksiyonu için varsayılan true.** Scroll-wheel zoom normal çalışmaya devam eder. Enlem rotasyonunu kısıtlamak için standard pan davranışı almak üzere orthographic'te `dragRotate={false}` ayarlayın veya diğer projeksiyonlarda rotasyonu etkinleştirmek için `dragRotate={true}` ayarlayın. Enlem rotasyonu çevirmeyi önlemek için [-90, 90] ile sınırlandırılır.

  **Karo Haritalar**: Tüm coğrafi grafikler `tileURL` (string template `"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"` gibi veya `(z, x, y, dpr) => string`), `tileAttribution` (ör. `"© OpenStreetMap contributors"`), `tileCacheSize` (varsayılan 256) kabul eder. Karolar veri katmanlarının arkasında arka plan canvas'ında render edilir. **Mercator projeksiyonu sadece** — non-Mercator projeksiyonları için dev uyarısı yaydılır. Karolar zoom/pan'ında güncellenir. `{r}` placeholder veya DPR parametresi ile Retina desteği. **Prodüksiyon**: OpenStreetMap karoları geliştirme/demo içindir. Prodüksiyon için, kendi API anahtarınızla birlikte ticari karo sağlayıcısı (Mapbox, MapTiler, Stadia Maps) kullanın (istemci kodunda hiçbir zaman anahtarları hard-code etmeyin). Örnek: `tileURL={\`https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=\${process.env.MAPBOX_TOKEN}\`}`.

  **StreamGeoFrame** — düşük seviye frame tam kontrol ile. Props: `projection`, `areas`, `points`, `lines`, `xAccessor`, `yAccessor`, `areaStyle`, `pointStyle`, `lineStyle`, `graticule`, `projectionTransform` (distance cartogram config), `projectionExtent`, `enableHover`, `tooltipContent`, `zoomable`, `zoomExtent`, `onZoom`, `tileURL`, `tileAttribution`, `tileCacheSize`, `decay`, `pulse`, `transition`. Push API: `ref.current.push(datum)`, `ref.current.pushMany(data)`, `ref.current.clear()`.

  **Referans coğrafya**: `resolveReferenceGeography("world-110m")` Natural Earth veri'sinden GeoJSON feature'larını döndürür (world-atlas). Desteklenenler: `"world-110m"`, `"world-50m"`, `"land-110m"`, `"land-50m"`. Tüm coğrafi HOC'ler `areas` kabul eder `GeoJSON.Feature[]` veya referans string olarak.

  **mergeData(features, data, { featureKey, dataKey })** — harici veri'yi GeoJSON feature'larına anahtar alanına göre birleştirir. İç içe yolları destekler (ör. `"properties.iso_a3"`). World-atlas ISO 3166-1 sayısal kodlarını `id` alanı olarak kullanır. `semiotic/data`'dan genel bir join-by-key yardımcı programı olarak da mevcuttur.

  ```jsx
  // Referans coğrafya + veri birleştirme ile dünya choropleth
  import { ChoroplethMap, resolveReferenceGeography, mergeData } from "semiotic/geo"
  const world = await resolveReferenceGeography("world-110m")
  const areas = mergeData(world, gdpData, { featureKey: "id", dataKey: "id" })
  <ChoroplethMap areas={areas} valueAccessor="gdpPerCapita" colorScheme="viridis"
    projection="equalEarth" zoomable tooltip />

  // Distance cartogram (ORBIS-style) eşmerkezli halkalı yer paylaşımı ile
  import { DistanceCartogram } from "semiotic/geo"
  <DistanceCartogram
    points={cities} center="rome" costAccessor="travelDays"
    strength={0.8} lines={routes} showLegend zoomable
    showRings costLabel="days" showNorth
    ringStyle={{ stroke: "#999", strokeWidth: 0.5 }}
  />

  // Orantılı sembol haritası ile karo haritası basemap
  <ProportionalSymbolMap
    points={earthquakes} xAccessor="lon" yAccessor="lat"
    sizeBy="magnitude" sizeRange={[2, 20]}
    projection="mercator" zoomable
    tileURL="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    tileAttribution="© OpenStreetMap contributors"
  />

  // Zoom ile streaming coğrafi noktaları
  const geoRef = useRef()
  geoRef.current.push({ lon: -122.4, lat: 37.8, value: 42 })
  <StreamGeoFrame ref={geoRef} projection="mercator" xAccessor="lon" yAccessor="lat"
    runtimeMode="streaming" decay={{ type: "linear", minOpacity: 0.1 }}
    zoomable zoomExtent={[1, 12]} onZoom={({ zoom }) => console.log(zoom)} />
  ```

  ## Gerçek Zamanlı Grafikler (`semiotic/realtime`)

  Push API: `chartRef.current.push({ time, value })`

  **ÖNEMLİ**: Tüm itilmiş veri'nin bir zaman alanı içermesi gerekir (varsayılan: `"time"`). Veri'niz farklı bir alan adı kullanıyorsa, `timeAccessor` açık olarak ayarlayın. Geçerli bir zaman alanı olmadan, grafikler boş render edilir hatasız.

  Boyutlandırma: tüm Realtime HOC'ler `size={[600, 400]}` (tuple) ve `width={600} height={400}` kabul eder. Her ikisi de çalışır.

  **RealtimeLineChart** — `size`|`width`+`height`, **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `windowSize` (200), `windowMode`, `stroke`, `strokeWidth`
  **RealtimeHistogram** — **`binSize`** (gerekli), **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `categoryAccessor`, `colors`. Zaman alanı gereklidir bu dağılımı göstermesine rağmen — pencereleştirme için kullanılır.
  **RealtimeSwarmChart** — **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `categoryAccessor`, `radius`, `opacity`
  **RealtimeWaterfallChart** — **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `positiveColor`, `negativeColor`
  **RealtimeHeatmap** — **`timeAccessor`** ("time"), **`valueAccessor`** ("value"), `heatmapXBins`, `heatmapYBins`, `aggregation`. Her iki accessor'un veri alanlarınızla eşleşmesi gerekir veya grafik boş render edilir.
  **Streaming Sankey** — `StreamNetworkFrame` `chartType="sankey"` ile, `showParticles` (boolean), `particleStyle` (`{ radius, opacity, speedMultiplier, maxPerEdge, colorBy }`), `tensionConfig`, `thresholds`. **Bireysel kenarları push'leyin**: `ref.current.push({ source: "A", target: "B", value: 42 })`. Toplu işler için `ref.current.pushMany([...edges])` kullanın.

  Realtime encoding: `decay`, `pulse`, `transition`, `staleness` — tüm streaming grafiklerinde özgürce oluşturun.

  ### Realtime veri şekli
  ```jsx
  // Her itilmiş datum'un zaman alanı olmalıdır
  ref.current.push({ time: Date.now(), value: 42 })              // line, waterfall
  ref.current.push({ time: Date.now(), value: 42, category: "A" }) // histogram, swarm
  ref.current.push({ time: Date.now(), value: 42 })              // heatmap (time=x, value=y)
  ```

  ### HOC grafikleri üzerinde Push API
  Birçok HOC grafik `forwardRef` aracılığıyla push API'yi destekler. `data` prop'unu atlayın ve veri'yi zorunlu olarak push'leyin:
  ```jsx
  const chartRef = useRef()
  chartRef.current.push({ x: 1, y: 2 })          // tek nokta
  chartRef.current.pushMany([...points])           // toplu
  chartRef.current.clear()                          // sıfırla
  chartRef.current.getData()                        // geçerli veri'yi oku
  <Scatterplot ref={chartRef} xAccessor="x" yAccessor="y" />
  ```
  **ÖNEMLİ**: Push API kullanırken, **atla** `data`/`nodes`/`edges` prop'u tamamen — `data={[]}` geçmeyin, bu her render'da itilen veri'yi temizler. Streaming özgü props (`windowSize`, `decay`, `pulse`) `frameProps`'a gider.

  Desteklenenler: tüm XY grafikler (LineChart, AreaChart, Scatterplot, vb.), tüm ordinal grafikler (BarChart, Histogram, vb.), network grafikler (ForceDirectedGraph, SankeyDiagram, ChordDiagram) ve coğrafi nokta grafikleri (ProportionalSymbolMap, DistanceCartogram). **Desteklenmiyor**: hiyerarşi grafikleri (TreeDiagram, Treemap, CirclePack, OrbitDiagram) — kök-nesne veri şekilleri düz push ile uyumsuz. ChoroplethMap (alan tabanlı, nokta tabanlı değil), FlowMap (çizgi tabanlı) ve ScatterplotMatrix da push'ü desteklemez.

  ## Stream Frame Callback'leri (ileri seviye — HOC'leri tercih edin)
  Stream Frame callback'leri (`nodeStyle`, `edgeStyle`, `nodeSize` function olarak, `colorBy` function olarak, `nodeLabel` function olarak) **`RealtimeNode`/`RealtimeEdge`** wrapper'ları alır, raw veri'yi değil. Orijinal veri'nize `.data` aracılığıyla erişin:
  ```jsx
  // YANLIŞ: nodeSize={(d) => d.weight}         — d RealtimeNode'dur, d.weight undefined
  // DOĞRU: nodeSize={(d) => d.data?.weight}   — d.data orijinal düğüm nesnesidir
  // DOĞRU: nodeSize="weight"                  — string accessor bunu otomatik işler
  // YANLIŞ: nodeStyle={(d) => ({ fill: d.datum.color })}  — .datum yok
  // DOĞRU: nodeStyle={(d) => ({ fill: d.data?.color })}  — .data kullanın
  ```
  `customHoverBehavior` ve `customClickBehavior` alır `{ type: "node"|"edge", data: <your raw object>, x, y } | null`.
  `tooltipContent` alır `{ type: "node"|"edge", data: <your raw object> }`.

  ## Koordine Edilmiş Görünümler

  **LinkedCharts** — grafikleri sarmalanır. Props: `selections` (çözünürlük: "union"|"intersect"|"crossfilter"), `showLegend` (CategoryColorProvider mevcut olduğunda otomatik), `legendPosition` ("top"|"bottom"), `legendInteraction` ("highlight"|"isolate"|"none"), `legendSelectionName` (legend tarafından yönlendirilen çapraz vurgulama için selection adı), `legendField` (legend seçimleri için veri alanı)
  **CategoryColorProvider** — sabit kategori→renk eşlemesi. Props: `colors` (harita) veya `categories` + `colorScheme`
  Grafik props: `selection`, `linkedHover`, `linkedBrush`. Hooks: `useSelection`, `useLinkedHover`, `useBrushSelection`, `useFilteredData`
  **ScatterplotMatrix** — `data`, `fields`, `colorBy`, `cellSize`, `hoverMode`, `brushMode`

  ## ChartContainer

  **ChartContainer** — başlık, alt başlık, durum göstergesi, araç çubuğu işlemleri ile sarmalayıcı. Props: `title`, `subtitle`, `height` (varsayılan **400** — bu'yu grafik'iniz yüksekliğiyle eşleştirmek için ayarlayın ya da ekstra boşluk alırsınız), `width` (varsayılan "100%"), `status` ("live"|"stale"|"error"), `loading`, `error`, `errorBoundary`, `actions` (`{ export, fullscreen, copyConfig }`), `controls`, `style`, `className`

  `ChartContainer` kullanırken `size={[w, h]}` olan grafik ile, `height={h}` konteyner'inde ayarlayın uyumsuzluğu önlemek için.

  ## Düzen & Bileşim

  **ChartGrid** — CSS Grid düzeni. `columns` (number|"auto"), `minCellWidth` (300), `gap` (16). `emphasis="primary"` olan çocuklar iki sütunla genişletilir.
  **ContextLayout** — primary + context panel. `context` (ReactNode), `position`, `contextSize` (250)

  ## Anahtar Paternler

  ```jsx
  // Custom boyutlandırma ve hover ile force-directed graph
  <ForceDirectedGraph
    nodes={[{ id: "A", group: "eng", weight: 10 }, { id: "B", group: "design", weight: 5 }]}
    edges={[{ source: "A", target: "B" }]}
    colorBy="group"
    nodeSize="weight"           // string accessor → node.weight'i okur, nodeSizeRange'a ölçekler
    nodeSizeRange={[5, 25]}
    showLabels
    showLegend
    tooltip={(d) => <div>{d.id}: {d.weight}</div>}
    frameProps={{
      customClickBehavior: (d) => { if (d?.type === "node") console.log(d.data) },
      background: "#f5f5f5",
    }}
  />

  // Çapraz vurgulama panosu sütun genişletme ile
  // emphasis="primary" ChartGrid'de grafik'in 2 sütun ile genişletilmesini sağlar
  <CategoryColorProvider categories={["North", "South", "East"]}>
  <LinkedCharts>
    <ChartGrid columns={2}>
      <LineChart data={d} colorBy="region" linkedHover={{ name: "hl", fields: ["region"] }} selection={{ name: "hl" }} emphasis="primary" responsiveWidth />
      <BarChart data={d} colorBy="region" linkedHover={{ name: "hl", fields: ["region"] }} selection={{ name: "hl" }} responsiveWidth />
      <Scatterplot data={d} colorBy="region" linkedHover={{ name: "hl", fields: ["region"] }} selection={{ name: "hl" }} responsiveWidth />
    </ChartGrid>
  </LinkedCharts>
  </CategoryColorProvider>

  // Forecast + anomaly (otomatik)
  <LineChart data={ts} xAccessor="time" yAccessor="value"
    forecast={{ trainEnd: 60, steps: 15, confidence: 0.95 }}
    anomaly={{ threshold: 2 }} />

  // Forecast (önceden hesaplanmış ML sınırları)
  <LineChart data={ml} xAccessor="time" yAccessor="value"
    forecast={{ isTraining: "isTraining", isForecast: "isForecast", isAnomaly: "isAnomaly", upperBounds: "upper", lowerBounds: "lower" }} />

  // Istiflenmiş alan (düz array + areaBy, lineBy DEĞIL)
  <StackedAreaChart data={flatData} xAccessor="month" yAccessor="value"
    areaBy="category" colorBy="category" />

  // Yüzdelik band (p5–p95) ana çizgi ile (p50) — İKİ grafik katmanlanmalı
  // AreaChart y0Accessor ile band render edilir; showLine sadece ÜST kenarı (p95) çizer, p50 değil
  // Ayrı ana çizgi göstermek için, üste LineChart ekleyin:
  <>
    <AreaChart data={d} xAccessor="x" yAccessor="p95" y0Accessor="p5"
      showLine={false} areaOpacity={0.3} gradientFill />
    <LineChart data={d} xAccessor="x" yAccessor="p50" lineWidth={2} />
  </>
  // Basit gradient alan (band yok):
  <AreaChart data={d} xAccessor="x" yAccessor="y" gradientFill />

  // Realtime — itilen veri'ye her zaman zaman alanı ekleyin
  const ref = useRef()
  ref.current.push({ time: Date.now(), value: 42 })
  <RealtimeLineChart ref={ref} timeAccessor="time" valueAccessor="value" />

  // Realtime histogram — dağılım grafikleri için bile zaman alanı gerekli
  const histRef = useRef()
  histRef.current.push({ time: Date.now(), value: Math.abs(delta) })
  <RealtimeHistogram ref={histRef} timeAccessor="time" valueAccessor="value" binSize={100} />

  // Parçacık ile streaming sankey — bireysel kenarları push'leyin, tam snapshot'ı DEĞIL
  const sankeyRef = useRef()
  sankeyRef.current.push({ source: "Web", target: "API", value: 1 })    // bir kenar aynı anda
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

  // SSR — renderToStaticSVG frame tipi string alır, bileşen adı değil
  import { renderOrdinalToStaticSVG } from "semiotic/server"
  const svg = renderOrdinalToStaticSVG({
    data, categoryAccessor: "category", valueAccessor: "value", width: 600, height: 400
  })
  ```

  ## Açıklamalar
  - `type: "widget"` — veri koordinatlarında herhangi bir React elementi yerleştirin. Tüm frame tiplerine çalışır. XY/ordinal veri koordinatları kullanır (`x`/`y` veya alan adları). Network/orbit `nodeId` kullanır. Varsayılan: info emoji. HTML overlay olarak render edilir (SVG değil) böylece açılır menüler/konuşmalar özgürce taşabilir.
  ```jsx
  annotations={[{ type: "widget", month: 4, revenue: 32, dy: -4, content: <MyAlertButton /> }]}
  // OrbitDiagram: annotations={[{ type: "widget", nodeId: "Pipeline", content: <Alert /> }]}
  ```

  ## Sunucu Tarafı Render
  - Tüm HOC grafikler ve Stream Frames sunucu ortamlarında SVG'yi otomatik render eder (window/document yok)
  - `renderToStaticSVG(frameType, props)` — `semiotic/server`'dan başlıklı SVG string. `frameType` `"xy"` | `"ordinal"` | `"network"` | `"geo"` (BarChart gibi bileşen adı DEĞİL)
  - Tip'e özgü kısa yollar: `renderXYToStaticSVG(props)`, `renderOrdinalToStaticSVG(props)`, `renderNetworkToStaticSVG(props)`, `renderGeoToStaticSVG(props)`
  - Bar grafik için: `renderOrdinalToStaticSVG({ data, categoryAccessor: "cat", valueAccessor: "val", width: 600, height: 400 })`
  - Next.js App Router, Remix, Astro ile çalışır — sunucu ve istemci'de aynı bileşen
  - **Coğrafi SSR önceden çözümlenen feature'lar gerektirir**: `renderGeoToStaticSVG` eşzamanlıdır — "world-110m" gibi referans string'leri değil GeoJSON feature'larını doğrudan geçin. Önce `await resolveReferenceGeography("world-110m")` çağırın ve sonucu `areas` olarak geçin.

  ## AI Özelikleri
  - `onObservation` — tüm HOC'lerde yapılandırılmış event'ler (hover, click, brush, selection)
  - `useChartObserver` — LinkedCharts arasında observation'ları toplar
  - `toConfig`/`fromConfig`/`toURL`/`fromURL`/`copyConfig`/`configToJSX` — grafik durumu serileştirmesi
  - `DetailsPanel` — `ChartContainer` içinde click tarafından yönlendirilen detail panel
  - `validateProps(componentName, props)` — Levenshtein typo önerileriyle prop doğrulaması
  - `diagnoseConfig(componentName, props)` — anti-pattern dedektörü (12 kontrol: boş veri, kötü boyutlar, eksik accessor'lar, margin overflow, vb.)
  - `ChartErrorBoundary` — error boundary
  - `exportChart(containerDiv, { format: "png"|"svg" })` — **wrapper div** geçin (SVG element değil); canvas + SVG'yi dahili olarak bulur. Varsayılan: PNG, canvas + SVG katmanlarını oluşturur
  - `npx semiotic-ai --doctor` — CLI'den bileşen + props JSON doğrula (validateProps ve diagnoseConfig'i kullanır)

  ## Bilinen Tuzaklar

  **Tooltip datum şekli**: HOC tooltip fonksiyonları raw veri nesnelerinizi alır. Stream Frames'de `frameProps.tooltipContent` kullanırken, datum sarılmış olabilir — `.data` aracılığıyla veri'nize erişin. HOC `tooltip` fonksiyonlarının buna ihtiyacı yok.

  **Legend konumlandırması**: `legendPosition` legend'in nerede render edileceğini kontrol eder. "bottom" olarak ayarlandığında, grafik otomatik olarak ~80px'lik alt margin'i eksenler etiketlerini temizlemek için genişletir. "top" için, margin ~50px'e genişletilir. Daha fazla yere ihtiyacınız varsa, `margin`'i açık olarak override edin. ~400px'ten dar olan grafikler için, `legendPosition="bottom"` veya `"top"` tercih edin ("bottom" daha yaygındır) grafik alanını sıkıştırmaktan kaçınmak için. Benzer şekilde, kısa grafikler (~250px veya daha az) için, yan legend grafik'i çok sıkıştırabilir — bunun yerine top veya bottom kullanın.

  **Log scale ve sıfır**: `xScaleType="log"` / `yScaleType="log"` domain minimumlarını 1e-6'ya sınırlandırır çünkü log(0) tanımsızdır. Sıfır veya negatif değerleri olan veri sınırlandırılacaktır.

  **String eksenleri olan Heatmap**: Heatmap string/kategorik x ve y değerlerini (ör. hafta günü adları, saat etiketleri) destekler. `colorScheme` prop'u d3-scale-chromatic adlarını kabul eder: "blues", "reds", "greens", "viridis".

  **barPadding piksel cinsinden**: Ordinal grafikler üzerinde `barPadding` band scale padding oranını hesaplamak için grafik genişliğine bölünen mutlak piksel değeridir. Varsayılanlar (bar/istiflenmiş için 40, grouped için 60) 600px genişliğinde iyi çalışır. Çok küçük grafikler için, bunu azaltmanız gerekebilir.

  **Yatay bar grafikler daha geniş sol margin'ler gerektirir**: Uzun kategori etiketleriyle `orientation="horizontal"` kullanırken, sol margin'i manuel olarak artırın: `margin={{ left: 120 }}`. Etiket genişliğinin otomatik ölçümü yoktur.

  **LinkedCharts çocuk legend'leri bastırır**: `CategoryColorProvider` `LinkedCharts`'ı sarladığında, bireysel grafik legend'leri birleştirilmiş legend lehine bastırılır. Bir çocuk grafik'in kendi legend'ini gösterilmesini zorlamak için, `showLegend={true}` açık olarak ayarlayın.

  **Coğrafi bundle izolasyonu**: `semiotic/geo` ayrı bir entry point'tir. Coğrafi bileşenleri `semiotic`'ten import etmeyin — coğrafi olmayan paketlere d3-geo (~30KB) eklemekten kaçınmak için `import { ChoroplethMap } from "semiotic/geo"` kullanın.

  **Push API: veri'yi atlayın, boş array geçmeyin**: HOC'lerde `ref.current.push()` kullanırken, **atla** `data`/`nodes`/`edges` prop'u tamamen. `data={[]}` geçmek her render'da itilen veri'yi temizler çünkü HOC onu Stream Frame'in `setBoundedData([])`'ına iletir. Benzer şekilde, `data={undefined}` iyidir (prop mevcut değil), ama `data={null}` atlanmışla aynı şekilde davranılır.

  **`diagnoseConfig` yaygın hataları yakalar**: Boş veri, kötü boyutlar, eksik accessor'lar, margin overflow, görünmez bar padding için kontrol etmek için `diagnoseConfig("BarChart", props)` çalıştırın, vb. CLI'den `npx semiotic-ai --doctor` kullanın.

  ## Ayırıcılar
  Ağ viz, coğrafi viz (choropleth, flow maps, distance cartograms), streaming canvas, realtime encoding, koordine edilmiş görünümler, istatistiksel özetler, AI hooks, grafik serileştirmesi, global theming, keyboard navigation, interactive legend'ler (highlight/isolate), direct labeling, gap handling, empty/loading state'leri, landmark tick etiketleri, LinkedCharts birleştirilmiş legend
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
