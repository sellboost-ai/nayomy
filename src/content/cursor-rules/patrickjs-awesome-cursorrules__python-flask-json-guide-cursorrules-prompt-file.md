---
name: "python-flask-json-guide-cursorrules-prompt-file"
clean_name: "Python Flask Json Guide"
description: "Cursor rules for Python Flask development with JSON guide."
description_tr: "Python Flask geliştirimi için Cursor kuralları ve JSON rehberi."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/python-flask-json-guide-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/python-flask-json-guide-cursorrules-prompt-file.mdc"
body_length: 746
file_extension: ".mdc"
body_tr: |-
  Bu proje, özel Drawscape Factorio python modülümüze büyük ölçüde bağlıdır.

  İşte modülün nasıl kullanılacağına ilişkin kod örnekleri:

  ```python
  from drawscape_factorio import create as createFactorio
  from drawscape_factorio import importFUE5

  with open('/path/to/exported-entities.json', 'r') as file:
      json_data = json.load(file)
      data = importFUE5(json_data)
      result = createFactorio(data, {
          'theme_name': 'default',
          'color_scheme': 'main',
          'show_layers': ['assets', 'belts', 'walls', 'rails', 'electrical', 'spaceship']
      })

  with open(output_file_name, 'w') as f:
      f.write(result['svg_string'])
  ```
---

This project is heavily reliant on our custom Drawscape Factorio python module.

Here is code examples of how to use the module:

```python
from drawscape_factorio import create as createFactorio
from drawscape_factorio import importFUE5

with open('/path/to/exported-entities.json', 'r') as file:
    json_data = json.load(file)
    data = importFUE5(json_data)
    result = createFactorio(data, {
        'theme_name': 'default',
        'color_scheme': 'main',
        'show_layers': ['assets', 'belts', 'walls', 'rails', 'electrical', 'spaceship']
    })

with open(output_file_name, 'w') as f:
    f.write(result['svg_string'])
