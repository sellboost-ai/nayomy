---
name: "automl-hyperparameter-optimization"
clean_name: "Automl Hyperparameter Optimization"
description: "AutoML and hyperparameter optimization rules for Python ML projects using Ray Tune, Optuna, PyCaret, and time-series AutoML libraries"
description_tr: "Python ML projeleri için Ray Tune, Optuna, PyCaret ve time-series AutoML kütüphaneleri ile AutoML ve hyperparameter optimization kuralları"
category: "AI/ML"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/automl-hyperparameter-optimization.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/automl-hyperparameter-optimization.mdc"
body_length: 2941
file_extension: ".mdc"
body_tr: |-
  # AutoML ve Hiperparametre Optimizasyonu Kuralları

  ## Kapsam

  - AutoML'i model keşfini hızlandırmak için kullanın, problem çerçevelemesini, validasyon tasarımını veya açıklanabilirliği atlamak için değil.
  - Bir arama başlatmadan önce basit bir baseline modeli ve sabit bir metrik ile başlayın.
  - Eğitim, değerlendirme, feature generation ve arama konfigürasyonunu ayrı tutun.
  - Her çalıştırma için veri setlerini, bölünmeleri, metrik tanımlarını, rastgele seed'leri, kütüphane versiyonlarını ve arama alanlarını kaydedin.

  ## Deneme Tasarımı

  - Araç seçiminden önce hedef metriği tanımlayın.
  - Model seçim iddialarında nested validation veya son dokunulmamış test bölünmesi kullanın.
  - Zaman serisi problemleri için zaman-farkında bölünmeler kullanın; zaman sınırları arasında hiçbir zaman karıştırmayın.
  - Ön işlemeyi yalnızca eğitim fold'larında uydurarak sızıntıyı önleyin.
  - Doğrusal modeller, random forest'lar veya naif zaman serisi tahminleri gibi basit baseline'ları dahil edin.
  - Pahalı aramalar için erken durdurma ve kaynak sınırları kullanın.
  - Keyfi geniş grid'ler yerine alan-bilgisi ile aydınlatılmış aralıklara sahip yapılandırılmış arama alanlarını tercih edin.

  ## Araçlandırma

  - Özel eğitim döngüleri, dağıtılmış denemeler, pruning ve scheduler kontrolü için Ray Tune veya Optuna kullanın.
  - Veri seti ve metrik basit olduğunda hızlı düşük kodlu karşılaştırmalar için PyCaret kullanın.
  - Tahmin-spesifik validasyon, mevsimsellik ve horizon işleme önemli olduğunda AutoTS, Merlion, PyAF veya proje onaylı zaman serisi araçlandırması kullanın.
  - Çalıştırma meta verilerini MLflow, Weights & Biases, TensorBoard veya proje onaylı bir tracker'da saklayın.
  - Yeniden üretilebilir ortamlar için `uv` veya mevcut proje paket yöneticisini kullanın.

  ## Arama Alanları

  - Arama alanlarını açık ve gözden geçirilmiş tutun.
  - Öğrenme oranları, düzenleştirme, ağaç sayıları ve diğer ölçek-duyarlı değerler için log-ölçek örneklemesi kullanın.
  - Gerçekçi olmayan eğitim zamanı veya bellek kullanımından kaçınmak için model karmaşıklığını sınırlayın.
  - Ön işlemeyi seçenekleri yalnızca sızıntı olmadan uygulanabildiğinde ekleyin.
  - Test setinde ayarlama yapmayın.

  ## Raporlama

  - Seçilen modeli, metriği, güven aralığını veya varyansı, validasyon şemasını ve son test sonucunu raporlayın.
  - En iyi parametreleri ve arama bütçesini ekleyin.
  - Seçilen modeli baseline ve en az bir non-AutoML alternatifi ile karşılaştırın.
  - Çıkarım gecikmesi, bellek kullanımı, yeniden eğitim maliyeti ve açıklanabilirlik gibi operasyonel kısıtlamalar belirtin.

  ## Yaygın Hatalar

  - Leaderboard sırasını production hazırlığının kanıtı olarak değerlendirmeyin.
  - Feature engineering sırasında eğitim/test verilerini karıştırmayın.
  - Etiketleri ve veri kalitesini doğrulamadan önce büyük aramalar yapmayın.
  - Sınıf dengesizliğini, kalibrasyonu veya işletme maliyeti asimetrisini göz ardı etmeyin.
  - Yeniden üretilebilir eğitim kodu ve sabitlenmiş bağımlılıklar olmadan bir AutoML modeli dağıtmayın.
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
