---
name: "python-fastapi-cursorrules-prompt-file"
clean_name: "Python FastAPI"
description: "Cursor rules for Python Fastapi."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/python-fastapi-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/python-fastapi-cursorrules-prompt-file.mdc"
body_length: 1092
file_extension: ".mdc"
body_tr: |-
  # Python FastAPI .cursorrules

  # FastAPI en iyi uygulamaları

  fastapi_best_practices = [
      "Request ve response şemaları için Pydantic modellerini kullanın",
      "Paylaşılan kaynaklar için dependency injection uygulayın",
      "Non-blocking işlemler için async/await kullanın",
      "Path operation decoratorlarını kullanın (@app.get, @app.post, vb.)",
      "HTTPException ile uygun error handling uygulayın",
      "FastAPI'nin yerleşik OpenAPI ve JSON Schema desteğini kullanın",
  ]

  # Klasör yapısı

  folder_structure = """
  app/
    main.py
    models/
    schemas/
    routers/
    dependencies/
    services/
    tests/
  """

  # Ek talimatlar

  additional_instructions = """
  1. Tüm function parametreleri ve dönüş değerleri için type hints kullanın
  2. Pydantic kullanarak uygun input validation uygulayın
  3. Uzun süren işlemler için FastAPI'nin background tasks özelliğini kullanın
  4. Uygun CORS handling uygulayın
  5. Authentication için FastAPI'nin security utilities'lerini kullanın
  6. Python kodu için PEP 8 style guide'ını takip edin
  7. Kapsamlı unit ve integration testleri uygulayın
  """
---

# Python FastAPI .cursorrules

# FastAPI best practices

fastapi_best_practices = [
    "Use Pydantic models for request and response schemas",
    "Implement dependency injection for shared resources",
    "Utilize async/await for non-blocking operations",
    "Use path operations decorators (@app.get, @app.post, etc.)",
    "Implement proper error handling with HTTPException",
    "Use FastAPI's built-in OpenAPI and JSON Schema support",
]

# Folder structure

folder_structure = """
app/
  main.py
  models/
  schemas/
  routers/
  dependencies/
  services/
  tests/
"""

# Additional instructions

additional_instructions = """
1. Use type hints for all function parameters and return values
2. Implement proper input validation using Pydantic
3. Use FastAPI's background tasks for long-running operations
4. Implement proper CORS handling
5. Use FastAPI's security utilities for authentication
6. Follow PEP 8 style guide for Python code
7. Implement comprehensive unit and integration tests
"""
