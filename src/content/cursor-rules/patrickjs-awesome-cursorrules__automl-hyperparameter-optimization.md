---
name: "automl-hyperparameter-optimization"
clean_name: "Automl Hyperparameter Optimization"
description: "AutoML and hyperparameter optimization rules for Python ML projects using Ray Tune, Optuna, PyCaret, and time-series AutoML libraries"
description_tr: "Python ML projeleriniz için Ray Tune, Optuna, PyCaret ve time-series AutoML kütüphaneleri kullanarak AutoML ve hyperparameter optimizasyon kuralları."
category: "AI/ML"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/automl-hyperparameter-optimization.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/automl-hyperparameter-optimization.mdc"
body_length: 2941
file_extension: ".mdc"
body_tr: |-
  # AutoML ve Hiperparameter Optimizasyon Kuralları

  ## Kapsam

  - AutoML'i model keşfini hızlandırmak için kullanın, ancak problem çerçevelemesini, validasyon tasarımını veya açıklanabilirliği atlamak için değil.
  - Bir arama başlatmadan önce basit bir baseline model ve sabit bir metrik ile başlayın.
  - Training, evaluation, feature generation ve search konfigürasyonunu ayrı tutun.
  - Her çalıştırma için datasets, splits, metric tanımları, random seeds, library sürümleri ve search spaces'i kaydedin.

  ## Deney Tasarımı

  - Tooling seçmeden önce target metriği tanımlayın.
  - Model seçim iddiaları için nested validation veya son dokunulmamış bir test split kullanın.
  - Time-series problemleri için time-aware splits kullanın; asla zaman sınırları arasında shuffle yapmayın.
  - Training folds üzerinde preprocessing'i sadece fitting yaparak leakage'ı önleyin.
  - Linear models, random forests veya naive time-series forecasts gibi basit baselines ekleyin.
  - Pahalı aramalar için early stopping ve resource limits kullanın.
  - Keyfi geniş gridler yerine domain-informed aralıkları olan yapılandırılmış search spaces tercih edin.

  ## Tooling

  - Custom training loops, distributed trials, pruning ve scheduler kontrol için Ray Tune veya Optuna kullanın.
  - Dataset ve metric basit olduğunda hızlı low-code karşılaştırmalar için PyCaret kullanın.
  - Forecast-specific validation, seasonality ve horizon handling önemli olduğunda AutoTS, Merlion, PyAF veya project-approved time-series tooling kullanın.
  - Run metadata'sını MLflow, Weights & Biases, TensorBoard veya project-approved tracker'da saklayın.
  - Reproducible environments için `uv` veya mevcut project package manager'ı kullanın.

  ## Search Spaces

  - Search spaces'i açık ve gözden geçirilmiş tutun.
  - Learning rates, regularization, tree counts ve diğer scale-sensitive değerler için log-scale sampling kullanın.
  - Gerçekçi olmayan training time veya memory use'ı önlemek için model complexity'sini kısıtlayın.
  - Preprocessing choices'ı sadece leakage olmadan uygulanabileceğinde ekleyin.
  - Test set üzerinde tune yapmayın.

  ## Raporlama

  - Seçilen model, metric, confidence interval veya variance, validation scheme ve final test result'u rapor edin.
  - En iyi parametreleri ve search budget'ı ekleyin.
  - Seçilen modeli baseline ve en az bir non-AutoML alternatifle karşılaştırın.
  - Inference latency, memory use, retraining cost ve explainability gibi operational constraints'ları belgeyin.

  ## Yaygın Hatalar

  - Leaderboard rank'ını production readiness kanıtı olarak ele almayın.
  - Feature engineering sırasında train/test verilerini karıştırmayın.
  - Labels ve data quality'yi validate etmeden önce massive aramalar yapmayın.
  - Class imbalance, calibration veya business cost asymmetry'yi görmezden gelmeyın.
  - Reproducible training code ve pinned dependencies olmadan AutoML model deploy etmeyin.
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
