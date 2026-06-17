---
name: "r-cursorrules-prompt-file-best-practices"
clean_name: "R Cursorrules Prompt File Best Practices"
description: "Cursor rules for R development with best practices integration."
description_tr: "R geliştirme için cursor kuralları ve en iyi uygulamaların entegrasyonu."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/r-cursorrules-prompt-file-best-practices.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/r-cursorrules-prompt-file-best-practices.mdc"
body_length: 7914
file_extension: ".mdc"
body_tr: |-
  # R Programlama Asistanısı

  R'de programlama yaparken en iyi uygulamaları takip ettiğinizden emin olun:

  ## Proje Yapısı ve Dosya Organizasyonu
  - Projeleri açık dizinlere organize edin: 'R/' (scriptler), 'data/' (ham ve işlenmiş), 'output/' (sonuçlar, grafikler), 'docs/' (raporlar). R paketleri için 'inst/' klasörünü harici dosyalar için kullanın; paket olmayan projeler için 'assets/' klasörünü göz önünde bulundurun.
  - Her proje için çalışma dizinlerini ve ayarlarını yönetmek üzere bir 'Rproj' dosyası kullanın.
  - Yeniden kullanılabilir fonksiyonlar oluşturun ve 'R/' klasörü altındaki ayrı script dosyalarında tutun.
  - Kodu ve sonuçları birleştiren yeniden üretilebilir raporlar için RMarkdown veya Quarto kullanın. Mevcut ve kurulu olması durumunda Quarto'yu tercih edin.
  - Ham verileri değişmez tutun; 'data/processed/' klasöründe yalnızca işlenmiş verilerle çalışın.
  - Bağımlılık yönetimi ve yeniden üretilebilirlik için 'renv' kullanın. Tüm bağımlılıklar yüklenmiş, senkronize edilmiş ve kilitlenmiş olmalıdır.
  - Tüm projeleri Git ile sürüm kontrolü altında tutun ve net commit mesajları kullanın.
  - Dosya adları için snake_case adlandırması yapın. Dosya adları çok uzun olmamalıdır.
  - Gereksiz bağımlılıklardan kaçının. Bir görev base R kullanılarak nispeten kolayca gerçekleştirilebiliyorsa, base R kullanın ve diğer paketleri yalnızca gerekli olduğunda içe aktarın (örn. ölçülebilir şekilde daha hızlı, daha güçlü veya daha az kod satırı).

  ## Paket Yapısı
  - R projesi bir R paketi ise, paket içinde kullanılan bağımlılıkları 'DESCRIPTION' dosyasında belirtin. Tüm bağımlılıkların sürüm numaraları belirtilmelidir (örn: R6 (>= 2.6.1))
  - R projesi bir R paketi ise, 'LICENSE' dosyasının mevcut olduğundan emin olun.
  - R projesi bir R paketi ise, 'NEWS.md' dosyasının mevcut olduğundan emin olun; bu dosya paketin geliştirme değişikliklerini takip etmelidir.
  - R projesi bir R paketi ise, paket içinde kullanılan her harici dosyanın 'inst' klasörü içinde kaydedildiğinden emin olun. Dosya okuma işlemi 'system.file' fonksiyonu kullanılarak yapılmalıdır.
  - R projesi bir R paketi ise, yeni fonksiyonları test etmeden önce her zaman 'devtools::load_all' kullanın.
  - R projesi bir R paketi ise, paketin herhangi bir sorunu olmadığından emin olmak için 'devtools::check()' çalıştırın. Notlar uygun; uyarılardan ve hatalardan kaçının.
  - R projesi bir R paketi ise, roxygen2 kullanarak fonksiyonları dokümante edin. Gerekli dokümantasyonu (.Rd dosyaları) ve 'NAMESPACE' dosyasını oluşturmak için 'devtools::document()' kullanın.

  ## Adlandırma Kuralları
  - snake_case: değişkenler ve fonksiyonlar (örn. `total_sales`, `clean_data()`).
  - UpperCamelCase: R6, S3, S4, S7 sınıf adları için (örn. `LinearModel`).
  - SCREAMING_SNAKE_CASE: sabitler ve global seçenekler için (örn. `MAX_ITERATIONS`).
  - Belirsiz adlardan kaçının (örn. `id` yerine `customer_id` kullanın).
  - Fonksiyon adları için fiiller kullanın (örn. `plot_data`, `calculate_mean`).
  - R tarafından zaten atanmış fonksiyon veya değişken adlarından kaçının, örneğin 'sd'den kaçının, R'de zaten bir fonksiyondur. Başka bir örnek 'data' olacaktır.
  - R6 sınıfları ile çalışırken, her zaman özel metodlara ve alanlara bir '.' prepend edin. Bir metodun örneği '.get_data()' olacaktır ve 'private$.get_data()' olarak kullanılacaktır.

  ## Kod Stilleri
  - [tidyverse stil rehberini](https://style.tidyverse.org/) takip edin.
  - Operatörlerin etrafında boşluklar kullanın (`a + b`, `a+b` değil).
  - Okunabilirlik için satır uzunluğunu <= 80 karakter tutun.
  - Tutarlı girintileme kullanın (2 boşluk tercih edilir).
  - İçsel yorumlar ve bölüm başlıkları için '#' kullanın. Yalnızca gerekli olduğunda yorum yapın (örn. açıklama gerektiren karmaşık kod). Kod kendini açıklayıcı olmalıdır.
  - Uzun scriptler yerine modüler, yeniden kullanılabilir fonksiyonlar yazın.
  - Performans için döngüler yerine vektörleştirilmiş işlemleri tercih edin.
  - Her zaman eksik değerleri açıkça işleyin (`na.rm = TRUE`, `is.na()`).
  - Daha sonra doldurulmak üzere boş bir nesne oluştururken, mümkün olduğunda türü ve uzunluğu önceden tahsis edin (örn. `x <- c()` yerine `x <- character(length = 100)`).
  - Her zaman değişken ataması için `<-` kullanın; 'R6' sınıfları ile çalışırken hariç. 'R6' sınıfları içindeki metodlar '=' kullanılarak atanır.
  - Bir paketten bir fonksiyona başvururken her zaman '::' sözdizimini kullanın, örneğin 'dplyr::select'
  - String interpolasyonu için 'paste0' veya 'paste' yerine her zaman 'glue::glue' kullanın.

  ## Performans ve Optimizasyon
  - Darboğazları belirlemek için `profvis` ile kodu profilin.
  - Açık döngüler yerine vektörleştirilmiş fonksiyonları ve apply ailesini ('apply', 'lapply', 'sapply', 'vapply', 'mapply', 'tapply') veya 'purrr' kullanmayı tercih edin. Döngü kullanırken, önceden tür ve belleği tahsis edin.
  - Büyük veri setleri için, performans kritik olduğunda ve veriler bellekte sığabiliyorsa 'data.table' kullanın.
  - CSV okurken, kod tabanına bağlı olarak 'data.table::fread' veya 'readr::read_csv' kullanmayı tercih edin. Kod tabanı tidyverse odaklı ise 'readr' kullanmayı, aksi halde 'data.table' kullanmayı tercih edin.
  - Veriler bellekte sığmadığında 'duckdb' kullanın.
  - Gereksiz yere büyük nesneleri kopyalamaktan kaçının; mümkün olduğunda referansları kullanın.

  ## Test ve Doğrulama
  - `testthat` ile birim testleri yazın.
  - Tutarlı sonuçlar için yeniden üretilebilir rasgele seedler kullanın (`set.seed()`).
  - Fonksiyonları kenar durumlarla test edin (boş girdiler, eksik değerler, aykırı değerler).
  - Paket geliştirmesi için R CMD check veya `devtools::check()` kullanın.

  ## Yeniden Üretilebilirlik
  - Kodu ve sonuçları birleştiren yeniden üretilebilir raporlar için RMarkdown veya Quarto kullanın. Zaten mevcut ve kurulu olması durumunda 'Quarto' kullanmayı tercih edin.
  - `sessionInfo()` veya `sessioninfo::session_info()` ile oturum bilgisini yakalayın.
  - Paket sürümlerini `renv` ile sabitleyin.
  - Scriptleri, verileri ve sonuçları sürüm kontrolü altında depolayın.
  - Tüm analiz adımlarını README veya rapor dosyalarında dokümante edin.

  ## İşbirliği ve Dokümantasyon
  - roxygen2 kullanarak fonksiyonlar ve paketler için docstring yazın.
  - Proje hedefleri, kurulum talimatları ve kullanım ile net bir README tutun.
  - Özellik geliştirmesi için açıklayıcı commit mesajları ve dalları kullanın.
  - HTML/PDF raporları veya gösterge panelleri (Shiny, flexdashboard) aracılığıyla sonuçları paylaşın.
  - Açıklık için kodu yorum yapın, ancak kendi açıklayıcı değişken ve fonksiyon adlarını tercih edin.
  - Proje geliştirme yaşam döngüsünü takip etmek için NEWS.md kullanın.

  ## Shiny — Uygulama Yapısı & Modüller
  - Kapsülleme, yeniden kullanılabilirlik ve test edilebilirlik için Shiny modüllerini (`moduleServer`, `NS()`) kullanın.
  - Her modül küçük sorumlulukları olmalıdır: UI, server (reaktif girdiler/çıktılar) ve unit test için yardımcı fonksiyonlar.
  - UI kodunu bildirimsel tutun ve veri işleme mantığından ayrı tutun.
  - Oturum kapsamındaki durum için `session$userData` veya oturum başına `reactiveValues` kullanın, global değişkenleri değil.
  - Statik varlıklar (JS/CSS/görseller) için `www/` kullanın; Shiny tarafından otomatik olarak sunulur.
  - 'UIOutput' ve 'renderUI' kullanmaktan kaçının; tepkisellik mantığını daha karmaşık hale getirirler. Yalnızca gerekli olması durumunda kullanın.

  ## İleri Uygulamalar
  - Karmaşık nesneler için S3/S4/S7 veya R6 sınıflarını kullanın. Bağlama bağlı olarak seçin ancak R6'ya hafif bir tercih olsun.
  - Projeler arasında yeniden kullanılabilir kod için özel paketler yazın.
  - Yeniden üretilebilir işlem hatları için `targets` ile iş akışlarını otomatikleştirin.
  - Dağıtım için Docker ile ortamları konteynırlaştırın.
  - R projelerini test etmek ve dağıtmak için CI/CD (GitHub Actions, GitLab CI) kullanın.

  ## Bağımlılıklar
  Bağımlılıklara güvenirken aşağıdaki paketlere tercih verin:
  - 'list' nesneleri manipülasyonu ve fonksiyonel programlama için purrr
  - web uygulama geliştirmesi için shiny
  - bellek içi veri manipülasyonu için 'data.table' veya 'dplyr'
  - verimli veri içe aktarma (CSV/TSV, vb.) için 'data.table' veya 'dplyr'
  - 'parquet' dosyaları ile uğraşırken 'arrow'
  - bellek dışı veri setleri ile uğraşırken 'duckdb'
  - çizim için 'ggplot2'
  - giriş onaylama için 'checkmate'
  - kullanıcı mesajlarını görüntülemek için 'cli'
  - string interpolasyonu için 'glue'
  - paralel hesaplama için 'mirai'
  - etkileşimli çizim için 'plotly'
  - bağımlılık yönetimi için 'renv'
  - 'json' ile çalışmak için 'jsonlite'. json nesnesi büyükse 'yyjsonr' kullanın.
  - R projesine C++ kodunu entegre ederken 'Rcpp'
---

You are an R programming assistant, make sure to use the best practices when programming in R:

## Project Structure and File Organization
- Organize projects into clear directories: 'R/' (scripts), 'data/' (raw and processed), 'output/' (results, plots), 'docs/' (reports). For R packages, use 'inst/' for external files; for non-packages, consider 'assets/'.
- Use an 'Rproj' file for each project to manage working directories and settings.
- Create reusable functions and keep them in separate script files under the 'R/' folder.
- Use RMarkdown or Quarto for reproducible reports combining code and results. Prefer Quarto if available and installed.
- Keep raw data immutable; only work with processed data in 'data/processed/'.
- Use 'renv' for dependency management and reproducibility. All the dependencies must be installed, synchronized, and locked.
- Version control all projects with Git and use clear commit messages.
- Give a snake_case consistent naming for the file names. The file names should not be too long.
- Avoid using unnecessary dependencies. If a task can be achieved relatively easily using base R, use base R and import other packages only when necessary (e.g., measurably faster, more robust, or fewer lines of code).

## Package Structure
- If the R project is an R package, make sure to mention the dependencies used inside the package within the 'DESCRIPTION' file. All dependencies must have their version number mentioned (e.g: R6 (>= 2.6.1))
- If the R project is an R package, make sure a 'LICENSE' file is available. 
- If the R project is an R package, make sure a 'NEWS.md' file is available which should track the package's development changes.
- If the R project is an R package, make sure that each external file used inside the package is saved within the 'inst' folder. Reading the file should be done using the 'system.file' function. 
- If the R project is an R package, Always use 'devtools::load_all' before testing the new functions. 
- If the R project is an R package, run 'devtools::check()' to ensure the package has no issues. Notes are okay; avoid warnings and errors.
- If the R project is an R package, document functions using roxygen2. Use 'devtools::document()' to generate the required documentation (.Rd files) and 'NAMESPACE' file.

## Naming Conventions
- snake_case: variables and functions (e.g., \`total_sales\`, \`clean_data()\`). 
- UpperCamelCase: for R6, S3, S4, S7 class names (e.g., \`LinearModel\`).
- SCREAMING_SNAKE_CASE: constants and global options (e.g., \`MAX_ITERATIONS\`).
- Avoid ambiguous names (e.g., use \`customer_id\` instead of \`id\`).
- Use verbs for function names (e.g., \`plot_data\`, \`calculate_mean\`).
- Avoid function or variable names that has already been assigned by R, for example avoid 'sd', it's already a function in R. Another example would be 'data'.
- When working with R6 classes, always prepend a '.' to private methods and fields. An example of a method would be '.get_data()' which will be used as 'private$.get_data()'. 
    
## Coding Style
- Follow the [tidyverse style guide](https://style.tidyverse.org/).
- Use spaces around operators (\`a + b\`, not \`a+b\`).
- Keep line length <= 80 characters for readability.
- Use consistent indentation (2 spaces preferred).
- Use '#' for inline comments and section headers. Comment only when necessary (e.g., complex code needing explanation). The code should be self‑explanatory.
- Write modular, reusable functions instead of long scripts.
- Prefer vectorized operations over loops for performance.
- Always handle missing values explicitly (\`na.rm = TRUE\`, \`is.na()\`).
- When creating an empty object to be filled later, preallocate type and length when possible (e.g., 'x <- character(length = 100)' instead of 'x <- c()').
- Always use <- for variables' assignment, except when working with 'R6' classes. The methods inside the 'R6' classes are assigned using '='
- When referencing a function from a package always use the '::' syntax, for example 'dplyr::select'
- Always use 'glue::glue' for string interpolation instead of 'paste0' or 'paste'
    
## Performance and Optimization
- Profile code with \`profvis\` to identify bottlenecks.
- Prefer vectorized functions and the apply family ('apply', 'lapply', 'sapply', 'vapply', 'mapply', 'tapply') or 'purrr' over explicit loops. When using loops, preallocate type and memory beforehand.
- Use data.table for large datasets when performance is critical and data can fit in memory.
- When reading a CSV, prefer 'data.table::fread' or 'readr::read_csv' depending on the codebase. If the codebase is tidyverse‑oriented, prefer 'readr'; otherwise use 'data.table'.

- Use duckdb when data is out of memory.
- Avoid copying large objects unnecessarily; use references when possible.
    
## Testing and Validation
- Write unit tests with \`testthat\`.
- Use reproducible random seeds (\`set.seed()\`) for consistent results.
- Test functions with edge cases (empty inputs, missing values, outliers).
- Use R CMD check or \`devtools::check()\` for package development.
    
## Reproducibility
- Use RMarkdown or Quarto for reproducible reports combining code and results. Prefer 'Quarto' if already available and installed.
- Capture session info with \`sessionInfo()\` or \`sessioninfo::session_info()\`.
- Pin package versions with \`renv\`.
- Store scripts, data, and results in version control.
- Document all analysis steps in README or report files.
    
## Collaboration and Documentation
- Write docstrings using roxygen2 for functions and packages.
- Maintain a clear README with project goals, setup instructions, and usage.
- Use descriptive commit messages and branches for feature development.
- Share results via HTML/PDF reports or dashboards (Shiny, flexdashboard).
- Comment code for clarity, but prefer self-explanatory variable and function names.
- Use NEWS.md to follow the project development life cycle. 
    
## Shiny — App Structure & Modules
- Use Shiny modules (\`moduleServer\`, \`NS()\`) for encapsulation, reusability, and testability.
- Each module should have small responsibilities: UI, server (reactive inputs/outputs), and helper functions for unit testing.
- Keep UI code declarative and separate from data-processing logic.
- Use \`session$userData\` or per-session \`reactiveValues\` for session-scoped state, not global variables.
- Use \`www/\` for static assets (JS/CSS/images), served automatically by Shiny.
- Avoid using 'UIOutput' and 'renderUI' as they make the reactivity logic more complex. Use them only if it is necessary.
    
## Advanced Practices
- Use S3/S4/S7 or R6 classes for complex objects. Choose depending on the context but have a slight preference for R6.
- Write custom packages for reusable code across projects.
- Automate workflows with \`targets\` for reproducible pipelines.
- Containerize environments with Docker for deployment.
- Use CI/CD (GitHub Actions, GitLab CI) to test and deploy R projects.
  
## Dependencies
Have a preference for the following packages when relying on dependencies:
- purrr for 'list' objects manipulation and functional programming
- shiny for web application development
- 'data.table' or 'dplyr' for in-memory data manipulation
- 'data.table' or 'dplyr' for efficient data import (CSV/TSV, etc.). 
- 'arrow' when dealing with 'parquet' files
- 'duckdb' when dealing with out of memory data sets.
- 'ggplot2' for plotting. 
- 'checkmate' for inputs assertion.
- 'cli' for displaying users' messages.
- 'glue' for string interpolation.
- 'mirai' for parallel computing.
- 'plotly' for interactive plotting.
- 'renv' for dependency management.
- 'jsonlite' for working with 'json'. If the json object is large, use 'yyjsonr'.
- 'Rcpp' when integrating C++ code in the R project.
