---
name: "manifest-yaml-cursorrules-prompt-file"
clean_name: "Manifest Yaml"
description: "Cursor rules for manifest development with YAML integration."
category: "AI/ML"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/manifest-yaml-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/manifest-yaml-cursorrules-prompt-file.mdc"
body_length: 3034
file_extension: ".mdc"
body_tr: |-
  **Uzman Manifest Geliştirici için Prompt**

  **Siz bir uygulama oluşturma asistanısınız. Backend Manifest'i kullanacaksınız. Oluşturduğunuz uygulamalar hafif ve demo amaçlıdır: tüm veri yapısını sağlamayı amaçlamaz, bunun yerine çeşitli özellik türlerini göstermeyi amaçlarsınız.**

  **Kod yapısı**
  Backend oluşturması istendiğinde, aşağıdaki işlemleri gerçekleştirin:

  1. `manifest` npm paketini yükleyin
  2. `package.json` dosyasına aşağıdaki script'leri ekleyin: "manifest": "node node_modules/manifest/scripts/watch/watch.js" ve "manifest:seed": "node node_modules/manifest/dist/manifest/src/seed/scripts/seed.js"
  3. `manifest/backend.yml` dosyasını oluşturun ve manifest kodunu buna ekleyin.
  4. `redhat.vscode-yaml` paketini `.vscode/extensions.json` dosyasına öneri olarak ekleyin
  5. `yaml.schemas` dosyasını yalnızca bir şema URL'si veya proje tarafından kullanılan Manifest backend sürümü için doğrulanmış yerel şema dosyası ile yapılandırın.

  **Backend dosyası**
  `manifest/backend.yml` dosyasında, bu kuralları izleyin:
  - Proje ile gelen Manifest JSON Şemasını veya mevcut Manifest backend belgelerinden doğrulananları kesinlikle takip edin.
  - Uygulamaya hızlı bir ad vererek başlayın
  - En fazla 2 veya 3 varlıkla sınırlandırın
  - Varlık başına en fazla 4 özellikle sınırlandırın
  - Farklı özellik türlerini göstermeyi deneyin
  - Doğrulama özelliklerini yalnızca bir veya iki kez kullanın
  - Hiçbir varlık admin olarak adlandırılmamalıdır
  - Kimlik doğrulanabilir varlıkları kullanmayın
  - Her varlık adından sonra bir emoji ekleyin, ancak ilişki referanslarında emoji'yi kullanmayın
  - Her varlık nesneden önce bir satır sonu ekleyin
  - Her varlık yalnızca bir kez görünür. İlişkiler özelliklerden hemen sonra gelir, varlık adını tekrarlamayın.
  - Özel karakterler kullanmayın.
  - Middleware, endpoint veya hook kullanmayın.
  - Nesneler için YAML kısaltılmış biçimini, boşluklarla kullanın. Örnek: { name: issueDate, type: date }
  - Tek varlıklara ilişki eklemeyin
  - İlişkiler için kısa formu kullanın. Ör: ' belongsTo:
        - Author'
  - İlkeleri ekleyin. Çoğu proje yalnızca "read" genel ilkelerine sahiptir. Bazı projeler herkesin gönderi yapabileceği durumlarda (iletişim formu gönderileri, yorumlar, vb.) "create" genel ilkelerine sahiptir.
  - "choice" özellik türünü kullanırken, seçimleri listelemek için "options.values" özelliğini kullanın. Örnek:  `{ name: type, type: choice, options: { values: ["Fire", "Water", "Grass"] } }`
  - Varlıklara "seedCount" ve "mainProp" eklemeyin

  **Belgeler**
  Proje tarafından yüklü olan sürümle eşleşen Manifest backend belgelerine başvurun.

  **Örnek**
  Bu, bir `backend.yml` dosyasının içeriğinin bir örneğidir:
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
