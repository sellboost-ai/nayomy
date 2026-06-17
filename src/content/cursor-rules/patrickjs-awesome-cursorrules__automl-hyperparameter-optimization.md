---
name: "automl-hyperparameter-optimization"
clean_name: "Automl Hyperparameter Optimization"
description: "AutoML and hyperparameter optimization rules for Python ML projects using Ray Tune, Optuna, PyCaret, and time-series AutoML libraries"
description_tr: "Python ML projeleriniz için Ray Tune, Optuna, PyCaret ve time-series AutoML kütüphanelerini kullanarak AutoML ve hyperparameter optimization kuralları"
category: "AI/ML"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/automl-hyperparameter-optimization.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/automl-hyperparameter-optimization.mdc"
body_length: 2941
file_extension: ".mdc"
body_tr: |-
  # AutoML ve Hiperparametre Optimizasyonu Kuralları

  ## Kapsam

  - AutoML'yi model keşfini hızlandırmak için kullanın, problem çerçevelendirmesini, validasyon tasarımını veya açıklanabilirliği atlamak için değil.
  - Bir arama başlatmadan önce basit bir temel model ve sabit bir metrik ile başlayın.
  - Eğitim, değerlendirme, özellik üretimi ve arama konfigürasyonunu ayrı tutun.
  - Her çalıştırma için veri setlerini, bölünmeleri, metrik tanımlarını, rastgele tohumları, kütüphane sürümlerini ve arama alanlarını kaydedin.

  ## Deney Tasarımı

  - Araç seçiminden önce hedef metriği tanımlayın.
  - Model seçim iddialarında iç içe validasyon veya son dokunulmamış bir test bölünmesi kullanın.
  - Zaman serisi problemleri için zaman farkında bölünmeler kullanın; zaman sınırları arasında hiçbir zaman karıştırmayın.
  - Ön işleme sadece eğitim katlarında takılı olarak sızıntıyı önleyin.
  - Doğrusal modeller, rastgele ormanlar veya naif zaman serisi tahminleri gibi basit temel modellerini dahil edin.
  - Pahalı aramalar için erken durdurma ve kaynak sınırları kullanın.
  - Rasgele geniş ızgaraları tercih etmek yerine, etki alanından bilgilendirilmiş aralıklara sahip yapılandırılmış arama alanlarını tercih edin.

  ## Araçlar

  - Özel eğitim döngüleri, dağıtılmış denemeler, budama ve zamanlayıcı kontrolü için Ray Tune veya Optuna kullanın.
  - Veri seti ve metrik basit olduğunda hızlı düşük kodlu karşılaştırmalar için PyCaret kullanın.
  - Tahmin için spesifik validasyon, mevsimsellik ve ufuk işlemi önemli olduğunda AutoTS, Merlion, PyAF veya proje onaylı zaman serisi araçlarını kullanın.
  - Çalıştırma meta verilerini MLflow, Weights & Biases, TensorBoard veya proje onaylı bir izleyicide saklayın.
  - Tekrarlanabilir ortamlar için `uv` veya mevcut proje paket yöneticisini kullanın.

  ## Arama Alanları

  - Arama alanlarını açık ve gözden geçirilmiş tutun.
  - Öğrenme oranları, düzenleme, ağaç sayıları ve diğer ölçeğe duyarlı değerler için log-ölçekli örnekleme kullanın.
  - Gerçekçi olmayan eğitim süresi veya bellek kullanımını önlemek için model karmaşıklığını sınırlayın.
  - Ön işleme seçeneklerini sadece sızıntısız uygulanabilecekleri zaman dahil edin.
  - Test seti üzerinde ayarlama yapmayın.

  ## Raporlama

  - Seçilen modeli, metriği, güven aralığını veya varyansı, validasyon şemasını ve son test sonucunu raporlayın.
  - En iyi parametreleri ve arama bütçesini dahil edin.
  - Seçilen modeli temel model ve en az bir AutoML olmayan alternatif ile karşılaştırın.
  - İşletimsel kısıtlamalar gibi çıkarım gecikmesi, bellek kullanımı, yeniden eğitim maliyeti ve açıklanabilirliği belgeyin.

  ## Yaygın Hatalar

  - Liderlik tablosu sırasını üretim hazırlığının kanıtı olarak kabul etmeyin.
  - Özellik mühendisliği sırasında tren/test verilerini karıştırmayın.
  - Etiketleri ve veri kalitesini doğrulamadan önce büyük aramalar çalıştırmayın.
  - Sınıf dengesizliğini, kalibrasyonu veya iş maliyeti asimetrisini göz ardı etmeyin.
  - Tekrarlanabilir eğitim kodu ve sabitlenmiş bağımlılıklar olmadan AutoML modeli yayınlamayın.
---


# AutoML and Hyperparameter Optimization Rules

## Scope

- Use AutoML to accelerate model exploration, not to bypass problem framing, validation design, or explainability.
- Start with a simple baseline model and fixed metric before launching a search.
- Keep training, evaluation, feature generation, and search configuration separate.
- Record datasets, splits, metric definitions, random seeds, library versions, and search spaces for every run.

## Experiment Design

- Define the target metric before selecting tooling.
- Use nested validation or a final untouched test split for model selection claims.
- Use time-aware splits for time-series problems; never shuffle across time boundaries.
- Prevent leakage by fitting preprocessing only on training folds.
- Include simple baselines such as linear models, random forests, or naive time-series forecasts.
- Use early stopping and resource limits for expensive searches.
- Prefer structured search spaces with domain-informed ranges over arbitrary broad grids.

## Tooling

- Use Ray Tune or Optuna for custom training loops, distributed trials, pruning, and scheduler control.
- Use PyCaret for quick low-code comparisons when the dataset and metric are straightforward.
- Use AutoTS, Merlion, PyAF, or project-approved time-series tooling when forecast-specific validation, seasonality, and horizon handling matter.
- Store run metadata in MLflow, Weights & Biases, TensorBoard, or a project-approved tracker.
- Use `uv` or the existing project package manager for reproducible environments.

## Search Spaces

- Keep search spaces explicit and reviewed.
- Use log-scale sampling for learning rates, regularization, tree counts, and other scale-sensitive values.
- Constrain model complexity to avoid unrealistic training time or memory use.
- Include preprocessing choices only when they can be applied without leakage.
- Do not tune on the test set.

## Reporting

- Report the selected model, metric, confidence interval or variance, validation scheme, and final test result.
- Include the best parameters and the search budget.
- Compare the chosen model against the baseline and at least one non-AutoML alternative.
- Document operational constraints such as inference latency, memory use, retraining cost, and explainability.

## Common Mistakes

- Do not treat leaderboard rank as proof of production readiness.
- Do not mix train/test data during feature engineering.
- Do not run massive searches before validating labels and data quality.
- Do not ignore class imbalance, calibration, or business cost asymmetry.
- Do not deploy an AutoML model without reproducible training code and pinned dependencies.
