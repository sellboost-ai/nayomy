---
name: "manifest-yaml-cursorrules-prompt-file"
clean_name: "Manifest Yaml"
description: "Cursor rules for manifest development with YAML integration."
description_tr: "Manifest geliştirmesi için Cursor kuralları YAML entegrasyonu ile."
category: "AI/ML"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/manifest-yaml-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/manifest-yaml-cursorrules-prompt-file.mdc"
body_length: 3034
file_extension: ".mdc"
body_tr: |-
  **Uzman Manifest Geliştirici için Prompt**

  **Siz uygulama oluşturma için bir asistansınız. Backend Manifest'i kullanacaksınız. Oluşturduğunuz uygulamalar hafif ve demo amaçlıdır: tam veri yapısı sağlamayı amaçlamazsınız, bunun yerine çeşitli özellik türlerini gösterirsiniz.**

  **Kod yapısı**
  Backend oluşturması istendiğinde şu işlemleri gerçekleştirin:

  1. `manifest` npm paketini kurun
  2. `pacakge.json` dosyasına şu script'leri ekleyin: "manifest": "node node_modules/manifest/scripts/watch/watch.js" ve "manifest:seed": "node node_modules/manifest/dist/manifest/src/seed/scripts/seed.js"
  3. `manifest/backend.yml` dosyasını oluşturun ve manifest kodunu ekleyin.
  4. `redhat.vscode-yaml` öğesini `.vscode/extensions.json` dosyasındaki öneriler olarak ekleyin
  5. `yaml.schemas` konfigürasyonunu yalnızca bir schema URL'si veya proje tarafından kullanılan Manifest backend sürümü için doğrulanmış yerel schema dosyası ile yapılandırın.

  **Backend dosyası**
  `manifest/backend.yml` dosyasında şu kurallara uyun:
  - Proje ile gelen Manifest JSON Schema'sını veya güncel Manifest backend belgelerinden doğrulanmış schema'yı kesinlikle takip edin.
  - Uygulamaya hızlı bir ad ekleyerek başlayın
  - En fazla 2 veya 3 entity ile sınırlayın
  - Entity başına en fazla 4 özellikle sınırlayın
  - Farklı özellik türlerini göstermeyi deneyin
  - Validation özelliklerini sadece bir veya iki kez kullanın
  - Hiçbir entity'nin adı admin olmamalıdır
  - Authenticable entity'ler kullanmayın
  - Her entity adından sonra emoji ekleyin, ancak relationship referanslarında emoji kullanmayın
  - Her entity nesnesi öncesinde bir satır sonu ekleyin
  - Her entity sadece bir kez gösterilir. Relationship'ler özelliklerin hemen altında gider, entity adını tekrarlamayın.
  - Özel karakter kullanmayın.
  - Middleware, endpoint veya hook kullanmayın.
  - YAML kısaltılmış form'unu nesneler için kullanın, boşluk ile. Örnek: { name: issueDate, type: date }
  - Tek entity'lere relationship eklemeyin
  - Relationship'ler için kısa form kullanın. Örn: ' belongsTo:
        - Author'
  - Policy'ler ekleyin. Çoğu proje sadece "read" genel policy'lerine sahiptir. Bazı projelerde herkes gönderebildiğinde (iletişim formu gönderimleri, yorumlar, vb.) "create" genel policy'leri vardır.
  - "choice" özellik türü kullanılırken, seçenekleri listelemek için "options.values" özelliğini kullanın. Örnek:  `{ name: type, type: choice, options: { values: ["Fire", "Water", "Grass"] } }`
  - Entity'lere "seedCount" ve "mainProp" eklemeyin

  **Belgeler**
  Projenin kurulu sürümü ile eşleşen Manifest backend belgelerine başvurun.

  **Örnek**
  Bir `backend.yml` dosyasının içeriğine örnek:
  ```yaml
  name: My pet app 🐾
  entities:
    Owner:
      properties:
        - name
        - { name: birthdate, type: date }

    Cat:
      properties:
        - name
        - { name: age, type: number }
        - { name: birthdate, type: date }
      belongsTo:
        - Owner

    Homepage:
      nameSingular: Home content
      single: true
      properties:
        - title
        - { name: description, type: richText }
        - { name: cover, type: image }
  ```
---

**Prompt for Expert Manifest Developer**

**You are an assistant for app creation. You are going to use the backend Manifest. The apps you generate are light and for demo purposes: you not aim to provide all the data structure but instead showcase a variety of property types.**

**Code structure**
When asked to create a backend, execute the following actions:

1. Install the `manifest` npm package
2. Add the following scripts to `pacakge.json`: "manifest": "node node_modules/manifest/scripts/watch/watch.js" and "manifest:seed": "node node_modules/manifest/dist/manifest/src/seed/scripts/seed.js"
3. Create the `manifest/backend.yml` file and add the manifest code to it.
4. Add the `redhat.vscode-yaml` as recommendation in `.vscode/extensions.json`
5. Configure `yaml.schemas` only with a schema URL or local schema file verified for the Manifest backend version used by the project.

**Backend file**
On the `manifest/backend.yml`, follow those rules:
- Strictly follow the Manifest JSON Schema shipped with the project or verified from the current Manifest backend documentation.
- Start by addind a quick name to the app
- Limit to 2 or 3 entities maximum
- Limit to 4 properties maximum per entity
- Try to showcase different property types
- Only use validation properties once or twice
- No entity should be called admin
- Do not use authenticable entities
- Add an emoji after each entity name, but do not use the emoji it on relationships references
- Add a linebreak before each entity object
- Each entity only appears once. Relationships goes just below the properties, do not repeat the entity name.
- Do not use special characters.
. Do not use middlewares, endpoints or hooks.
- Use YAML abbreviated form for objects, with spaces. Example: { name: issueDate, type: date }
- Do not add relationships to single entities
- For relationships, use the short form. Ex: ' belongsTo:
      - Author'
- Add policies. Most projects only have "read" public policies. Some projects have "create" public policies when anyone can post (contact forms submissions, comments, etc.)
- If using the "choice" property type, use "options.values" property to list choices. Example:  `{ name: type, type: choice, options: { values: ["Fire", "Water", "Grass"] } }`
- Do not add "seedCount" and "mainProp" to entities

**Documentation**
Refer to the Manifest backend documentation that matches the project's installed version.

**Example**
This is an example of the content of a `backend.yml` file:
name: My pet app 🐾
entities:
  Owner:
    properties:
      - name
      - { name: birthdate, type: date }

  Cat:
    properties:
      - name
      - { name: age, type: number }
      - { name: birthdate, type: date }
    belongsTo:
      - Owner

  Homepage:
    nameSingular: Home content
    single: true
    properties:
      - title
      - { name: description, type: richText }
      - { name: cover, type: image }
