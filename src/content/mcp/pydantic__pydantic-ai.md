---
name: "pydantic/pydantic-ai"
description: "Run Python code in a secure sandbox via MCP tool calls."
category: "Code Execution"
repo: "pydantic/pydantic-ai"
stars: 17316
url: "https://github.com/pydantic/pydantic-ai"
body_length: 12994
license: "MIT"
language: "Python"
homepage: "https://ai.pydantic.dev"
body_tr: |-
  <div align="center">
    <a href="https://ai.pydantic.dev/">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://pydantic.dev/docs/ai/img/pydantic-ai-dark.svg">
        
      </picture>
    </a>
  </div>
  <div align="center">
    <h3>GenAI Agent Framework, Pydantic tarzında</h3>
  </div>
  <div align="center">
    <a href="https://github.com/pydantic/pydantic-ai/actions/workflows/ci.yml?query=branch%3Amain"></a>
    <a href="https://coverage-badge.samuelcolvin.workers.dev/redirect/pydantic/pydantic-ai"></a>
    <a href="https://pypi.python.org/pypi/pydantic-ai"></a>
    <a href="https://github.com/pydantic/pydantic-ai"></a>
    <a href="https://github.com/pydantic/pydantic-ai/blob/main/LICENSE"></a>
    <a href="https://logfire.pydantic.dev/docs/join-slack/"></a>
  </div>

  ---

  **Dokumentasyon**: [ai.pydantic.dev](https://ai.pydantic.dev/)

  ---

  ### <em>Pydantic AI, Generative AI ile üretim kalitesinde uygulamalar ve iş akışları hızlı, güvenli ve sorunsuz bir şekilde geliştirmenize yardımcı olmak için tasarlanmış bir Python agent framework'üdür.</em>


  FastAPI, [Pydantic Validation](https://docs.pydantic.dev) temelinde ve tür ipuçları gibi modern Python özellikleri üzerine inşa edilmiş, yenilikçi ve ergonomik tasarımıyla web geliştirmeyi devrim niteliğinde değiştirdi.

  Ancak neredeyse her Python agent framework'ü ve LLM kütüphanesi Pydantic Validation kullanmasına rağmen, [Pydantic Logfire](https://pydantic.dev/logfire)'da LLM'leri kullanmaya başladığımızda, aynı hissi veren bir şey bulamadık.

  Pydantic AI'ı bir basit amaçla geliştirdik: FastAPI hissiyatını GenAI uygulama ve agent geliştirmeye getirmek.

  ## Neden Pydantic AI kullanmalı

  1. **Pydantic Ekibi tarafından geliştirildi**:
  [Pydantic Validation](https://docs.pydantic.dev/latest/), OpenAI SDK'sının, Google ADK'nın, Anthropic SDK'sının, LangChain'in, LlamaIndex'in, AutoGPT'nin, Transformers'ın, CrewAI'nın, Instructor'ın ve birçok başka projenin validasyon katmanıdır. _Türevini kullanırken neden doğrudan kaynağa gitmeyesiniz?_ :smiley:

  2. **Model-agnostik**:
  Neredeyse her [modeli](https://ai.pydantic.dev/models/overview) ve sağlayıcıyı destekler: OpenAI, Anthropic, Gemini, DeepSeek, Grok, Cohere, Mistral ve Perplexity; Azure AI Foundry, Amazon Bedrock, Google Cloud, Ollama, LiteLLM, Groq, OpenRouter, Together AI, Fireworks AI, Cerebras, Hugging Face, GitHub, Heroku, Vercel, Nebius, OVHcloud, Alibaba Cloud ve SambaNova. Favori modeliniz veya sağlayıcınız listede yoksa, kolayca [özel bir model](https://ai.pydantic.dev/models/overview#custom-models) uygulayabilirsiniz.

  3. **Kusursuz Gözlemlenebilirlik**:
  [Pydantic Logfire](https://pydantic.dev/logfire) ile sıkı entegrasyon sağlar, bu, genel amaçlı OpenTelemetry gözlemlenebilirlik platformumuzda gerçek zamanlı hata ayıklama, evals tabanlı performans izleme ve davranış, tracing ve maliyet takibi için. OTel'i destekleyen bir gözlemlenebilirlik platformunuz varsa, [bunu da kullanabilirsiniz](https://ai.pydantic.dev/logfire#alternative-observability-backends).

  4. **Tamamen Tür Güvenli**:
  IDE'niz veya AI coding agent'ınıza otomatik tamamlama ve [tür kontrolü](https://ai.pydantic.dev/agents#static-type-checking) için mümkün olduğunca fazla bağlam sağlamak için tasarlanmış, tüm hata sınıflarını çalışma zamanından yazma zamanına taşıyarak biraz Rust "if it compiles, it works" hissi verir.

  5. **Güçlü Evals**:
  Oluşturduğunuz agentic sistemlerin performansını ve doğruluğunu sistematik olarak test etme ve [değerlendirme](https://ai.pydantic.dev/evals) yapmanızı sağlar ve performansı Pydantic Logfire'da zaman içinde izleyin.

  6. **Tasarımı Gereği Genişletilebilir**:
  Tools, hooks, instructions ve model ayarlarını yeniden kullanılabilir birimler halinde paketleyen composable [capabilities](https://ai.pydantic.dev/capabilities) den agent'ler oluşturun. [Web arama](https://ai.pydantic.dev/capabilities#provider-adaptive-tools), [thinking](https://ai.pydantic.dev/capabilities#thinking) ve [MCP](https://ai.pydantic.dev/capabilities#provider-adaptive-tools) için yerleşik capabilities'i kullanın, [Pydantic AI Harness](https://ai.pydantic.dev/harness/overview) capability kütüphanesinden seçin, kendi oluşturun veya [üçüncü taraf capability paketlerini](https://ai.pydantic.dev/extensibility) yükleyin. Agent'leri tamamen [YAML/JSON](https://ai.pydantic.dev/agent-spec)'de tanımlayın — kod gerekmez.

  7. **MCP, A2A ve UI**:
  [Model Context Protocol](https://ai.pydantic.dev/mcp/overview), [Agent2Agent](https://ai.pydantic.dev/a2a) ve çeşitli [UI event stream](https://ai.pydantic.dev/ui/overview) standartlarını entegre eder, agent'ınıza harici tools ve veriye erişim sağlayarak, diğer agent'lerle birlikte çalışmasını sağlayarak ve akış tabanlı iletişimle etkileşimli uygulamalar oluşturmanızı sağlar.

  8. **İnsan Müdahalesi Gerektiren Tool Onayı**:
  Belirli tool çağrılarının [devam etmeden önce onay gerektirdiğini](https://ai.pydantic.dev/deferred-tools#human-in-the-loop-tool-approval) kolayca belirtir, muhtemelen tool çağrısı argümanlarına, konuşma geçmişine veya kullanıcı tercihlerine bağlı olarak.

  9. **Dayanıklı Yürütme**:
  Geçici API hataları ve uygulama hataları veya yeniden başlatmalar arasında ilerlemeyi koruyabilen ve uzun çalışan, asynchronous ve insan müdahalesi gerektiren iş akışlarını üretim sınıfı güvenilirlikle yapabilen [dayanıklı agent'ler](https://ai.pydantic.dev/durable_execution/overview/) oluşturmanızı sağlar.

  10. **Akışlı Çıktılar**:
  Yapılandırılmış çıktıyı sürekli [akışlama](https://ai.pydantic.dev/output#streamed-results) yeteneği sağlar, anında validasyon ile, üretilen veriye gerçek zamanlı erişim sağlar.

  11. **Graph Desteği**:
  Tür ipuçlarını kullanarak [graph'ları](https://ai.pydantic.dev/graph) tanımlamanın güçlü bir yolunu sağlar, standart kontrol akışının spagetti koduna dönüşebileceği karmaşık uygulamalar için.

  Gerçekçi olarak, hiçbir liste [deneyen](#next-steps) ve size nasıl hissettirdiğini gören kadar ikna edici olmayacaktır!

  ## Hello World Örneği

  İşte Pydantic AI'ın minimal bir örneği:

  ```python
  from pydantic_ai import Agent

  # Kullanılacak modeli de içeren çok basit bir agent tanımlayın, agent'i çalıştırırken modeli de ayarlayabilirsiniz.
  agent = Agent(
      'anthropic:claude-sonnet-4-6',
      # Agent'e bir keyword argümanı kullanarak statik instructions kaydedin.
      # Daha karmaşık dinamik olarak üretilen instructions için aşağıdaki örneğe bakın.
      instructions='Be concise, reply with one sentence.',
  )

  # Agent'i senkron olarak çalıştırın, LLM ile konuşma yapın.
  result = agent.run_sync('Where does "hello world" come from?')
  print(result.output)
  """
  The first known use of "hello, world" was in a 1974 textbook about the C programming language.
  """
  ```

  _(Bu örnek tamamlanmıştır, "olduğu gibi" çalıştırılabilir, [`pydantic_ai` paketini yüklediğinizi](https://ai.pydantic.dev/install) varsayarak)_

  Değişim çok kısa olacaktır: Pydantic AI instructions ve user prompt'u LLM'e gönderecek ve model bir metin response döndürecek.

  Henüz çok ilginç değil, ancak [tools](https://ai.pydantic.dev/tools), [dynamic instructions](https://ai.pydantic.dev/agents#instructions), [structured outputs](https://ai.pydantic.dev/output) veya composable [capabilities](https://ai.pydantic.dev/capabilities) ekleyerek kolayca daha güçlü agent'ler oluşturabiliriz.

  İşte aynı agent [thinking](https://ai.pydantic.dev/capabilities#thinking) ve [web search](https://ai.pydantic.dev/capabilities#provider-adaptive-tools) capabilities'i ile:

  ```python
  from pydantic_ai import Agent
  from pydantic_ai.capabilities import Thinking, WebSearch

  agent = Agent(
      'anthropic:claude-sonnet-4-6',
      instructions='Be concise, reply with one sentence.',
      capabilities=[Thinking(), WebSearch()],
  )

  result = agent.run_sync('What was the mass of the largest meteorite found this year?')
  print(result.output)
  ```

  ## Tools & Dependency Injection Örneği

  İşte bir banka için destek agent'i oluşturmak için Pydantic AI'ı kullanarak kısa bir örnek:

  **(Daha iyi belgelendirilmiş örnek [docs'da](https://ai.pydantic.dev/#tools-dependency-injection-example))**

  ```python
  from dataclasses import dataclass

  from pydantic import BaseModel, Field
  from pydantic_ai import Agent, RunContext

  from bank_database import DatabaseConn


  # SupportDependencies, çalıştırırken gereken veriler, bağlantılar ve mantığı modele iletmek için kullanılır
  # instructions ve tool fonksiyonları. Dependency injection, agent'lerinizin davranışını tür güvenli bir şekilde özelleştirmenin bir yoludur.
  @dataclass
  class SupportDependencies:
      customer_id: int
      db: DatabaseConn


  # Bu Pydantic modeli, agent tarafından döndürülen çıktının yapısını tanımlar.
  class SupportOutput(BaseModel):
      support_advice: str = Field(description='Advice returned to the customer')
      block_card: bool = Field(description="Whether to block the customer's card")
      risk: int = Field(description='Risk level of query', ge=0, le=10)


  # Bu agent bir bankada birinci seviye destek olarak hareket edecektir.
  # Agent'ler, kabul ettikleri dependencies türü ve döndürdükleri çıktı türü için geneldir.
  # Bu durumda, destek agent'ı `Agent[SupportDependencies, SupportOutput]` türündedir.
  support_agent = Agent(
      'openai:gpt-5.2',
      deps_type=SupportDependencies,
      # Agent'den gelen response, SupportOutput olması garantilidir,
      # validasyon başarısız olursa agent tekrar denemeye istenir.
      output_type=SupportOutput,
      instructions=(
          'You are a support agent in our bank, give the '
          'customer support and judge the risk level of their query.'
      ),
  )


  # Dinamik instructions, dependency injection'ı kullanabilir.
  # Dependencies, yukarıdaki `deps_type`'la parametreleştirilen `RunContext` argümanı aracılığıyla taşınır.
  # Buradaki tür ek açıklaması yanlışsa, statik tür denetleyicileri bunu yakalayacaktır.
  @support_agent.instructions
  async def add_customer_name(ctx: RunContext[SupportDependencies]) -> str:
      customer_name = await ctx.deps.db.customer_name(id=ctx.deps.customer_id)
      return f"The customer's name is {customer_name!r}"


  # `tool` dekoratörü, LLM'in bir kullanıcıya yanıt verirken çağırabileceği fonksiyonları kaydetmeyi sağlar.
  # Yine, dependencies `RunContext` aracılığıyla taşınır, diğer argümanlar LLM'e iletilen tool schema'sı olur.
  # Pydantic bu argümanları validate etmek için kullanılır ve hatalar LLM'e geri iletilir, böylece yeniden deneyebilir.
  @support_agent.tool
  async def customer_balance(
          ctx: RunContext[SupportDependencies], include_pending: bool
  ) -> float:
      """Returns the customer's current account balance."""
      # Bir tool'un docstring'i, LLM'e tool'un açıklaması olarak da iletilir.
      # Parametre açıklamaları docstring'den çıkarılır ve LLM'e gönderilen parametre schema'sına eklenir.
      balance = await ctx.deps.db.customer_balance(
          id=ctx.deps.customer_id,
          include_pending=include_pending,
      )
      return balance


  ...  # Gerçek bir kullanım durumunda, daha fazla tool ve daha uzun bir sistem prompt eklerdiniz


  async def main():
      deps = SupportDependencies(customer_id=123, db=DatabaseConn())
      # Agent'i asenkron olarak çalıştırın, final response'a ulaşılıncaya kadar LLM ile konuşma yapın.
      # Bu oldukça basit durumda bile, agent bir output almak için tools çağrılırken LLM ile birçok mesaj değiştirecektir.
      result = await support_agent.run('What is my balance?', deps=deps)
      # `result.output`, `SupportOutput` olduğunu garantilemek için Pydantic ile validate edilecektir. Agent genellik içinde olduğundan,
      # statik tür kontrolüne yardımcı olmak için `SupportOutput` olarak da türlenecektir.
      print(result.output)
      """
      support_advice='Hello John, your current account balance, including pending transactions, is $123.45.' block_card=False risk=1
      """

      result = await support_agent.run('I just lost my card!', deps=deps)
      print(result.output)
      """
      support_advice="I'm sorry to hear that, John. We are temporarily blocking your card to prevent unauthorized transactions." block_card=True risk=8
      """
  ```

  ## Sonraki Adımlar

  Pydantic AI'ı kendiniz denemek için, [kurun](https://ai.pydantic.dev/install) ve [örneklerdeki](https://ai.pydantic.dev/examples/setup) talimatları izleyin.

  Pydantic AI ile uygulama oluştturma hakkında daha fazla bilgi edinmek için [docs'u](https://ai.pydantic.dev/agents/) okuyun.

  Pydantic AI'ın arayüzünü anlamak için [API Reference](https://ai.pydantic.dev/api/agent/)'ı okuyun.

  Herhangi bir sorunuz varsa [Slack](https://logfire.pydantic.dev/docs/join-slack/)'a katılın veya [GitHub](https://github.com/pydantic/pydantic-ai/issues)'da bir issue açın.
---

<div align="center">
  <a href="https://ai.pydantic.dev/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://pydantic.dev/docs/ai/img/pydantic-ai-dark.svg">
      
    </picture>
  </a>
</div>
<div align="center">
  <h3>GenAI Agent Framework, the Pydantic way</h3>
</div>
<div align="center">
  <a href="https://github.com/pydantic/pydantic-ai/actions/workflows/ci.yml?query=branch%3Amain"></a>
  <a href="https://coverage-badge.samuelcolvin.workers.dev/redirect/pydantic/pydantic-ai"></a>
  <a href="https://pypi.python.org/pypi/pydantic-ai"></a>
  <a href="https://github.com/pydantic/pydantic-ai"></a>
  <a href="https://github.com/pydantic/pydantic-ai/blob/main/LICENSE"></a>
  <a href="https://logfire.pydantic.dev/docs/join-slack/"></a>
</div>

---

**Documentation**: [ai.pydantic.dev](https://ai.pydantic.dev/)

---

### <em>Pydantic AI is a Python agent framework designed to help you quickly, confidently, and painlessly build production grade applications and workflows with Generative AI.</em>


FastAPI revolutionized web development by offering an innovative and ergonomic design, built on the foundation of [Pydantic Validation](https://docs.pydantic.dev) and modern Python features like type hints.

Yet despite virtually every Python agent framework and LLM library using Pydantic Validation, when we began to use LLMs in [Pydantic Logfire](https://pydantic.dev/logfire), we couldn't find anything that gave us the same feeling.

We built Pydantic AI with one simple aim: to bring that FastAPI feeling to GenAI app and agent development.

## Why use Pydantic AI

1. **Built by the Pydantic Team**:
[Pydantic Validation](https://docs.pydantic.dev/latest/) is the validation layer of the OpenAI SDK, the Google ADK, the Anthropic SDK, LangChain, LlamaIndex, AutoGPT, Transformers, CrewAI, Instructor and many more. _Why use the derivative when you can go straight to the source?_ :smiley:

2. **Model-agnostic**:
Supports virtually every [model](https://ai.pydantic.dev/models/overview) and provider: OpenAI, Anthropic, Gemini, DeepSeek, Grok, Cohere, Mistral, and Perplexity; Azure AI Foundry, Amazon Bedrock, Google Cloud, Ollama, LiteLLM, Groq, OpenRouter, Together AI, Fireworks AI, Cerebras, Hugging Face, GitHub, Heroku, Vercel, Nebius, OVHcloud, Alibaba Cloud, and SambaNova. If your favorite model or provider is not listed, you can easily implement a [custom model](https://ai.pydantic.dev/models/overview#custom-models).

3. **Seamless Observability**:
Tightly [integrates](https://ai.pydantic.dev/logfire) with [Pydantic Logfire](https://pydantic.dev/logfire), our general-purpose OpenTelemetry observability platform, for real-time debugging, evals-based performance monitoring, and behavior, tracing, and cost tracking. If you already have an observability platform that supports OTel, you can [use that too](https://ai.pydantic.dev/logfire#alternative-observability-backends).

4. **Fully Type-safe**:
Designed to give your IDE or AI coding agent as much context as possible for auto-completion and [type checking](https://ai.pydantic.dev/agents#static-type-checking), moving entire classes of errors from runtime to write-time for a bit of that Rust "if it compiles, it works" feel.

5. **Powerful Evals**:
Enables you to systematically test and [evaluate](https://ai.pydantic.dev/evals) the performance and accuracy of the agentic systems you build, and monitor the performance over time in Pydantic Logfire.

6. **Extensible by Design**:
Build agents from composable [capabilities](https://ai.pydantic.dev/capabilities) that bundle tools, hooks, instructions, and model settings into reusable units. Use built-in capabilities for [web search](https://ai.pydantic.dev/capabilities#provider-adaptive-tools), [thinking](https://ai.pydantic.dev/capabilities#thinking), and [MCP](https://ai.pydantic.dev/capabilities#provider-adaptive-tools), pick from the [Pydantic AI Harness](https://ai.pydantic.dev/harness/overview) capability library, build your own, or install [third-party capability packages](https://ai.pydantic.dev/extensibility). Define agents entirely in [YAML/JSON](https://ai.pydantic.dev/agent-spec) — no code required.

7. **MCP, A2A, and UI**:
Integrates the [Model Context Protocol](https://ai.pydantic.dev/mcp/overview), [Agent2Agent](https://ai.pydantic.dev/a2a), and various [UI event stream](https://ai.pydantic.dev/ui/overview) standards to give your agent access to external tools and data, let it interoperate with other agents, and build interactive applications with streaming event-based communication.

8. **Human-in-the-Loop Tool Approval**:
Easily lets you flag that certain tool calls [require approval](https://ai.pydantic.dev/deferred-tools#human-in-the-loop-tool-approval) before they can proceed, possibly depending on tool call arguments, conversation history, or user preferences.

9. **Durable Execution**:
Enables you to build [durable agents](https://ai.pydantic.dev/durable_execution/overview/) that can preserve their progress across transient API failures and application errors or restarts, and handle long-running, asynchronous, and human-in-the-loop workflows with production-grade reliability.

10. **Streamed Outputs**:
Provides the ability to [stream](https://ai.pydantic.dev/output#streamed-results) structured output continuously, with immediate validation, ensuring real time access to generated data.

11. **Graph Support**:
Provides a powerful way to define [graphs](https://ai.pydantic.dev/graph) using type hints, for use in complex applications where standard control flow can degrade to spaghetti code.

Realistically though, no list is going to be as convincing as [giving it a try](#next-steps) and seeing how it makes you feel!

## Hello World Example

Here's a minimal example of Pydantic AI:

```python
from pydantic_ai import Agent

# Define a very simple agent including the model to use, you can also set the model when running the agent.
agent = Agent(
    'anthropic:claude-sonnet-4-6',
    # Register static instructions using a keyword argument to the agent.
    # For more complex dynamically-generated instructions, see the example below.
    instructions='Be concise, reply with one sentence.',
)

# Run the agent synchronously, conducting a conversation with the LLM.
result = agent.run_sync('Where does "hello world" come from?')
print(result.output)
"""
The first known use of "hello, world" was in a 1974 textbook about the C programming language.
"""
```

_(This example is complete, it can be run "as is", assuming you've [installed the `pydantic_ai` package](https://ai.pydantic.dev/install))_

The exchange will be very short: Pydantic AI will send the instructions and the user prompt to the LLM, and the model will return a text response.

Not very interesting yet, but we can easily add [tools](https://ai.pydantic.dev/tools), [dynamic instructions](https://ai.pydantic.dev/agents#instructions), [structured outputs](https://ai.pydantic.dev/output), or composable [capabilities](https://ai.pydantic.dev/capabilities) to build more powerful agents.

Here's the same agent with [thinking](https://ai.pydantic.dev/capabilities#thinking) and [web search](https://ai.pydantic.dev/capabilities#provider-adaptive-tools) capabilities:

```python
from pydantic_ai import Agent
from pydantic_ai.capabilities import Thinking, WebSearch

agent = Agent(
    'anthropic:claude-sonnet-4-6',
    instructions='Be concise, reply with one sentence.',
    capabilities=[Thinking(), WebSearch()],
)

result = agent.run_sync('What was the mass of the largest meteorite found this year?')
print(result.output)
```

## Tools & Dependency Injection Example

Here is a concise example using Pydantic AI to build a support agent for a bank:

**(Better documented example [in the docs](https://ai.pydantic.dev/#tools-dependency-injection-example))**

```python
from dataclasses import dataclass

from pydantic import BaseModel, Field
from pydantic_ai import Agent, RunContext

from bank_database import DatabaseConn


# SupportDependencies is used to pass data, connections, and logic into the model that will be needed when running
# instructions and tool functions. Dependency injection provides a type-safe way to customise the behavior of your agents.
@dataclass
class SupportDependencies:
    customer_id: int
    db: DatabaseConn


# This Pydantic model defines the structure of the output returned by the agent.
class SupportOutput(BaseModel):
    support_advice: str = Field(description='Advice returned to the customer')
    block_card: bool = Field(description="Whether to block the customer's card")
    risk: int = Field(description='Risk level of query', ge=0, le=10)


# This agent will act as first-tier support in a bank.
# Agents are generic in the type of dependencies they accept and the type of output they return.
# In this case, the support agent has type `Agent[SupportDependencies, SupportOutput]`.
support_agent = Agent(
    'openai:gpt-5.2',
    deps_type=SupportDependencies,
    # The response from the agent will be guaranteed to be a SupportOutput,
    # if validation fails the agent is prompted to try again.
    output_type=SupportOutput,
    instructions=(
        'You are a support agent in our bank, give the '
        'customer support and judge the risk level of their query.'
    ),
)


# Dynamic instructions can make use of dependency injection.
# Dependencies are carried via the `RunContext` argument, which is parameterized with the `deps_type` from above.
# If the type annotation here is wrong, static type checkers will catch it.
@support_agent.instructions
async def add_customer_name(ctx: RunContext[SupportDependencies]) -> str:
    customer_name = await ctx.deps.db.customer_name(id=ctx.deps.customer_id)
    return f"The customer's name is {customer_name!r}"


# The `tool` decorator let you register functions which the LLM may call while responding to a user.
# Again, dependencies are carried via `RunContext`, any other arguments become the tool schema passed to the LLM.
# Pydantic is used to validate these arguments, and errors are passed back to the LLM so it can retry.
@support_agent.tool
async def customer_balance(
        ctx: RunContext[SupportDependencies], include_pending: bool
) -> float:
    """Returns the customer's current account balance."""
    # The docstring of a tool is also passed to the LLM as the description of the tool.
    # Parameter descriptions are extracted from the docstring and added to the parameter schema sent to the LLM.
    balance = await ctx.deps.db.customer_balance(
        id=ctx.deps.customer_id,
        include_pending=include_pending,
    )
    return balance


...  # In a real use case, you'd add more tools and a longer system prompt


async def main():
    deps = SupportDependencies(customer_id=123, db=DatabaseConn())
    # Run the agent asynchronously, conducting a conversation with the LLM until a final response is reached.
    # Even in this fairly simple case, the agent will exchange multiple messages with the LLM as tools are called to retrieve an output.
    result = await support_agent.run('What is my balance?', deps=deps)
    # The `result.output` will be validated with Pydantic to guarantee it is a `SupportOutput`. Since the agent is generic,
    # it'll also be typed as a `SupportOutput` to aid with static type checking.
    print(result.output)
    """
    support_advice='Hello John, your current account balance, including pending transactions, is $123.45.' block_card=False risk=1
    """

    result = await support_agent.run('I just lost my card!', deps=deps)
    print(result.output)
    """
    support_advice="I'm sorry to hear that, John. We are temporarily blocking your card to prevent unauthorized transactions." block_card=True risk=8
    """
```

## Next Steps

To try Pydantic AI for yourself, [install it](https://ai.pydantic.dev/install) and follow the instructions [in the examples](https://ai.pydantic.dev/examples/setup).

Read the [docs](https://ai.pydantic.dev/agents/) to learn more about building applications with Pydantic AI.

Read the [API Reference](https://ai.pydantic.dev/api/agent/) to understand Pydantic AI's interface.

Join [Slack](https://logfire.pydantic.dev/docs/join-slack/) or file an issue on [GitHub](https://github.com/pydantic/pydantic-ai/issues) if you have any questions.
