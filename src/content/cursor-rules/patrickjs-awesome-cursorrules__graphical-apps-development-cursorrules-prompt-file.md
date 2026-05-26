---
name: "graphical-apps-development-cursorrules-prompt-file"
clean_name: "Graphical Apps Development"
description: "Cursor rules for graphical apps development with integration."
description_tr: "Grafik uygulamalar geliştirme için Cursor kuralları ve entegrasyon desteği."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/graphical-apps-development-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/graphical-apps-development-cursorrules-prompt-file.mdc"
body_length: 3000
file_extension: ".mdc"
body_tr: |-
  # Proje Özeti

  Pyllments, potansiyel olarak döngüsel bir grafta Elements'i bir araya getirerek, grafik ve API tabanlı LLM uygulamaları oluşturmak için bir Python kütüphanesidir. Elements ve Payloads, Components türüdür. Bir Component, bir Model ve Views'lardan oluşur. Model, temel verileri ve mantığı yönetirken, Views, Modelle etkileşimde bulunmak için kullanılan etkileşimli UI'yi görüntülemek için kullanılan UI bileşenleridir.

  Bir Element, belirli bir işlevden sorumlu olan bir Component türüdür. Örneğin, bir Element, LLM sağlayıcılarına çağrılar yaparak LLM seçimi ve oluşturmayı işleyebilir. Başka bir Element, sohbet arayüzünü işleyebilir; Model sohbet mesajı geçmişini depolarken, Views, sohbet arayüzüyle etkileşimde bulunmak için kullanılan metin kutuları ve düğmelerdir. Elements, Ports aracılığıyla diğer Elements'e bağlanmak üzere tasarlanmıştır. Elements'i bir araya bağlamak için gereken tek şey, bir Element'in çıkış portunu başka bir Element'in giriş portuna bağlamaktır. Her çıkış portu, bağlandığı sınırsız sayıda giriş portuna sahip olabilir ve her giriş portu, bağlandığı sınırsız sayıda çıkış portuna sahip olabilir. Portlar, çıkış portunun özne ve giriş portunun gözlemci olduğu bir gözlemci deseni izler. Özne, Element içinde ayarladığımız belirli bir olay tetiklendiğinde gözlemcileri bilgilendirir.

  Bir giriş ve çıkış portunu bağlamak için, aynı türde Payload gönderen ve alan bir şekilde kurulması gerekir. Payload, bir Model ve görüntüleme mantığından sorumlu views'larla bir Component'tir. Elements, payloads alabilir ve UI için views oluşturmak üzere Payload yöntemlerini kullanabilir. Gönderen Element, verileri Payload'a paketlemekten sorumludur.

  Şu anda bunu tam anlamıyla işlevsel bir framework haline getirmek üzerinde çalışıyorum.

  # Proje Organizasyonu

  İşte bireysel bir element'in dosya yapısının bir örneği:

  chat_interface:
    - __init__.py
    - chat_interface_element.py
    - chat_interface_model.py
    - css:
      - buttons.css
      - column.css
      - input.css

  # Kullanılan Birincil Kütüphaneler

  - Panel, görselleştirme katmanını oluşturmak ve GUI'yi çalıştırmak için kullanılır. Views, genellikle Python ve CSS ile stillendirebilen Panel nesnelerinden oluşur.
  - Param, parametreleştirilmiş sınıflar oluşturmak için kullanılır; bu sınıflar, tür doğrulaması, varsayılan değerler, kısıtlamalar ve en önemlisi reaktivite (değişiklikleri yakalaması için olay işleyicilerini ayarlama) işleyen parametreleri oluşturmaya yardımcı olur.
  - Langchain, LLM iş akışlarını dahil etmeyle ilgili belirli işlevlerden sorumludur.

  # Geliştirme Öncelikleri

  Pyllments kodu, genişletilebilirlik ve modülerliğin birinci sınıf vatandaşlar olduğu, geliştirici dostu olmasını öncelik alır. Elements, temiz ve sezgisel arayüzlerle özelleştirilebilir olmalıdır. Ayrıca, geliştiricinin ihtiyaçlarına bağlı olarak yeni elements oluşturmak kolay olmalıdır.

  # Dokümantasyon

  Docstrings, NumPy/SciPy stilini kullanmalıdır.
---

# Project Synopsis

Pyllments is a Python library for building graphical and API-based LLM applications through chaining together Elements in a potentially cyclic graph. Elements and Payloads are a type of Components. A Component is composed of a Model and Views. The Model handles the underlying data and logic, while the Views are the UI components that are used to display display the interactive UI used to interact with the Model.

An Element is a type of Component that is responsible for a specific function. For instance, an Element can handle the LLM selection and generation by making calls to LLM providers. Another Element may handle the chat interface, whose Model would store the chat message history, and the Views would be the text boxes and buttons used to interact with the chat interface. Elements are meant to connect to other Elements through Ports. All that is necessary to link Elements together is to link the output port of one Element to the input port of Another. Each output port may have unlimited input ports it connects to, and each input port may have unlimited output ports it connects to. The ports follow an observer pattern where the output port is the subject and the input port is the observer. The subject notifies the observers when a certain event that we set within the Element is triggered.

In order to connect an input and and output port, they need to be setup in a manner that sends and receives the same type of Payload. A Payload is also a Component with a Model as well as views responsible for the display logic. Elements may receive payloads and use methods of the Payload to generate the views for the UI. The sending Element is responsible for packing data into the Payload.

I am currently working on making this a fully-fledged framework.

# Project Organization

Here is an example of the file structure of an individual element:

chat_interface:
  - __init__.py
  - chat_interface_element.py
  - chat_interface_model.py
  - css:
    - buttons.css
    - column.css
    - input.css

# Primary Libraries Used

- Panel is used to create the visualization layer and run the GUI. Views tend to consist of Panel objects which can be styled with Python and CSS.
- Param is used to create parameterized classes which help create parameters that handle type validation, default values, constraints, and most importantly, reactivity(setting event handlers to catch changes).
- Langchain is responsible for the specific functions pertaining to incorporating LLM workflows.

# Development Priorities

Pyllments code is prioritized on being developer-friendly, where extensibility and modularity are first-class citizens. Elements should be customizeable with clean and intuitive interfaces. It should also be easy to create new elements depending on the needs of the developer.

# Documentation

Docstrings should use a NumPy/SciPy style.
