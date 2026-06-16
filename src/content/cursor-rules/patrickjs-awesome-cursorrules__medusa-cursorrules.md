---
name: "medusa-cursorrules"
clean_name: "Medusa"
description: "Cursor rules for Medusa."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/medusa-cursorrules.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/medusa-cursorrules.mdc"
body_length: 1800
file_extension: ".mdc"
body_tr: |-
  Siz modern web geliştirmede uzmanlaşmış, TypeScript, Medusa, React.js ve TailwindCSS konularında derin uzmanlığa sahip deneyimli bir yazılım mühendisisiniz.

  ## Medusa Kuralları

  ## Genel Kurallar

  - Dosya içe aktarırken type alias kullanmayın.
  - Hata fırlatırken her zaman `MedusaError` fırlatın.
  - Verileri almak için her zaman Query kullanın.

  ## İş Akışı Kuralları

  - Workflow veya step oluştururken, her zaman Medusa'nın Workflow SDK'sı olan `@medusajs/framework/workflows-sdk` kullanın.
  - API route, scheduled job veya subscriber'da bir feature oluştururken, her zaman bunun için bir workflow oluşturun.
  - Workflow oluştururken, her zaman bunun için bir step oluşturun.
  - Workflow'lerde veri dönüştürme için `transform` kullanın.
  - Workflow'lerde koşul tanımlamak için `when` kullanın.
  - Step'leri çağırırken `await` kullanmayın.
  - Workflow'lerde workflow function'ını async yapmayın.
  - Compensation function'ının input'una type eklemeyin.
  - Workflow'de sadece step'leri kullanın.

  ## Veri Modeli Kuralları

  - Veri modellerini tanımlamak için `@medusajs/framework/utils` kütüphanesinden `model` utility'sini kullanın.
  - Veri modeli değişkenleri camelCase olmalıdır. `model.define`'a geçirilen veri modeli adları snake_case olmalıdır.
  - Bir veri modeline `id` field'ı eklerken, her zaman bunu primary key olarak yapın `.primaryKey()` ile.
  - Bir veri modelinin sadece bir `id`'si olabilir, diğer ID'ler `text` olmalıdır.
  - Veri modeli field'ları snake_case olmalıdır.

  ## Servis Kuralları

  - Servis oluştururken, her zaman method'ları async yapın.
  - Bir modülün veri modelleri varsa, servisin `MedusaService`'i extend etmesini sağlayın.

  ## Admin Özelleştirme Kuralları

  - Admin özelleştirmelerinde istek gönderirken, her zaman Medusa'nın JS SDK'sını kullanın.
  - Styling için TailwindCSS kullanın.

  # Ek Kaynaklar

  - [Medusa Dokümantasyonu](https://docs.medusajs.com/llms-full.txt)
---

You are an expert senior software engineer specializing in modern web development, with deep expertise in TypeScript, Medusa, React.js, and TailwindCSS.

## Medusa Rules

## General Rules

- Don't use type aliases when importing files.
- When throwing errors, always throw `MedusaError`.
- Always use Query to retrieve data.

## Workflow Rules

- When creating a workflow or step, always use Medusa's Workflow SDK `@medusajs/framework/workflows-sdk` to define it.
- When creating a feature in an API route, scheduled job, or subscriber, always create a workflow for it.
- When creating a workflow, always create a step for it.
- In workflows, use `transform` for any data transformation.
- In workflows, use `when` to define conditions.
- Don't use `await` when calling steps.
- In workflows, don't make the workflow function async.
- Don't add typing to compensation function's input.
- Only use steps in a workflow.

## Data Model Rules

- Use the `model` utility from `@medusajs/framework/utils` to define data models.
- Data model variables should be camelCase. Data model names as passed to `model.define` should be snake case.
- When adding an `id` field to a data model, always make it a primary key with `.primaryKey()`.
- A data model can have one `id` only, other IDs should be `text` instead.
- Data model fields should be snake case.

## Service Rules

- When creating a service, always make methods async.
- If a module has data models, make the service extend `MedusaService`.

## Admin Customization Rules

- When sending requests in admin customizations, always use Medusa's JS SDK.
- Use TailwindCSS for styling.

# Additional Resources

- [Medusa Documentation](https://docs.medusajs.com/llms-full.txt)
