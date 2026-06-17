---
name: "graphical-apps-development-cursorrules-prompt-file"
clean_name: "Graphical Apps Development"
description: "Cursor rules for graphical apps development with integration."
description_tr: "Grafik uygulama geliştirme için Cursor kuralları ve entegrasyon desteği."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/graphical-apps-development-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/graphical-apps-development-cursorrules-prompt-file.mdc"
body_length: 3000
file_extension: ".mdc"
body_tr: |-
  # Proje Özeti

  Pyllments, potansiyel olarak döngüsel bir grafta Elements birbirine bağlayarak grafiksel ve API tabanlı LLM uygulamaları oluşturmak için bir Python kütüphanesidir. Elements ve Payloads, Components tipindedir. Bir Component, bir Model ve Views'den oluşur. Model, temel verileri ve mantığı işlerken, Views, Modelle etkileşim kurmak için kullanılan etkileşimli UI'ı göstermek için kullanılan UI bileşenleridir.

  Bir Element, belirli bir işlevi yerine getirmekten sorumlu bir Component tipidir. Örneğin, bir Element, LLM sağlayıcılarına çağrı yaparak LLM seçimi ve oluşturmayı yönetebilir. Başka bir Element, chat arayüzünü yönetebilir; Model chat mesaj geçmişini depolayabilir ve Views, chat arayüzüyle etkileşim kurmak için kullanılan metin kutuları ve düğmeler olabilir. Elements, Ports aracılığıyla diğer Elements'e bağlanmak için tasarlanmıştır. Elements'i birbirine bağlamak için gereken tek şey, bir Element'in output portunu başka bir Element'in input portuna bağlamaktır. Her output port, bağlandığı sınırsız input porta sahip olabilir ve her input port, bağlandığı sınırsız output porta sahip olabilir. Portlar, output portun subject, input portun observer olduğu bir observer pattern'i takip eder. Subject, Element içinde belirlediğimiz belirli bir event tetiklendiğinde observers'ı bilgilendirir.

  Bir input ve output port'u bağlamak için, aynı tip Payload'ı gönderen ve alan bir şekilde kurulmaları gerekir. Payload da bir Component'tir ve görüntüleme mantığından sorumlu bir Model ve views'a sahiptir. Elements, payloads alabilir ve UI'ın views'larını oluşturmak için Payload'ın method'larını kullanabilir. Gönderen Element, verileri Payload'a paketlemekten sorumludur.

  Şu anda bunu tam teşekküllü bir framework haline getirmek üzerinde çalışıyorum.

  # Proje Organizasyonu

  Burada bireysel bir element'in dosya yapısına bir örnek verilmiştir:

  chat_interface:
    - __init__.py
    - chat_interface_element.py
    - chat_interface_model.py
    - css:
      - buttons.css
      - column.css
      - input.css

  # Kullanılan Temel Kütüphaneler

  - Panel, visualizasyon katmanını oluşturmak ve GUI'ı çalıştırmak için kullanılır. Views, genellikle Python ve CSS ile stillendirilebilen Panel nesnelerinden oluşur.
  - Param, type validation, default values, constraints ve en önemlisi reaktivite (değişiklikleri yakalamak için event handler'lar ayarlamak) ile ilgilenen parametreler oluşturmaya yardımcı olan parametreli sınıflar oluşturmak için kullanılır.
  - Langchain, LLM workflow'larını dahil etmeye ilişkin spesifik fonksiyonlardan sorumludur.

  # Geliştirme Öncelikleri

  Pyllments kodu, genişletilebilirlik ve modülarite'nin birinci sınıf vatandaş olduğu geliştirici dostu olmaya öncelik verilmektedir. Elements, temiz ve sezgisel arayüzlerle özelleştirilebilir olmalıdır. Ayrıca geliştirici ihtiyaçlarına bağlı olarak yeni elements oluşturmak kolay olmalıdır.

  # Dokümantasyon

  Docstring'ler NumPy/SciPy stilini kullanmalıdır.
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
