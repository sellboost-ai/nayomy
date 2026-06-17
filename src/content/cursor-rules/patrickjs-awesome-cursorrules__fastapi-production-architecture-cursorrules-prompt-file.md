---
name: "fastapi-production-architecture-cursorrules-prompt-file"
clean_name: "FastAPI Production Architecture"
description: "Cursor rules for FastAPI services with router/service/repository boundaries, typed provider adapters, bulkhead isolation, idempotency, and domain exceptions."
description_tr: "FastAPI servisleri için router/service/repository sınırları, typed provider adapterları, bulkhead isolation, idempotency ve domain exception'ları içeren Cursor kuralları."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/fastapi-production-architecture-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/fastapi-production-architecture-cursorrules-prompt-file.mdc"
body_length: 8225
file_extension: ".mdc"
body_tr: |-
  # FastAPI Production Architecture Rules
  # Üretim ortamına hazır FastAPI hizmetleri için ilkeler.

  ## LAYER ARCHITECTURE (İlkeler A1-A8)

  Bu kod tabanı katı 4-katmanlı mimaride uygulanır: Router → Service → Repository → ORM/HTTP/Storage.
  İçeri aktarımlar sadece aşağı doğru akar. Her katmanın ihlal etmemeniz gereken sert sınırları vardır.

  ### Router kuralları (app/routers/**)
  - Handler'lar İNCE olmalıdır: handler başına ≤10 satır çalıştırılabilir kod
  - İzin verilen içeri aktarımlar: fastapi, app.schemas.*, app.core.deps, app.services.*
  - YASAKLI içeri aktarımlar: sqlalchemy, httpx, boto3, app.models.*, app.repositories.*
  - Her endpoint `response_model=` parametresini OpenAPI uygunluğu için bildirir
  - Her korumalı/iş logic endpoint'i `user_id: str = Depends(get_current_user_id)` gerektirir
  - Açık endpoint'ler (health check'ler, webhook'lar, callback'ler) kimlik doğrulamadan muaftırlar
  - İş logic servislerde yaşar. Router'lar girişi ayrıştırır, bir servis metodunu çağırır, yanıt döner.

  İYİ:
  ```
  @router.post("/wallet/charge", response_model=WalletResponse, status_code=201)
  async def charge(
      req: ChargeRequest,
      user_id: str = Depends(get_current_user_id),
      svc: WalletUserService = Depends(get_wallet_service),
  ) -> WalletResponse:
      wallet = await svc.charge(
          user_id=user_id,
          amount=req.amount,
          idempotency_key=req.idempotency_key,
      )
      return WalletResponse.from_domain(wallet)
  ```

  KÖTÜ (router'da iş logic + SQL):
  ```
  @router.post("/wallet/charge")
  async def charge(req: ChargeRequest, db: Session = Depends(get_db)):
      wallet = db.query(Wallet).filter(Wallet.user_id == user_id).with_for_update().one()
      ...
  ```

  ### Service kuralları (app/services/**)
  - YASAKLI içeri aktarımlar: sqlalchemy, httpx, boto3, redis, FastAPI Request/Response/HTTPException
  - Constructor Protocol-tipli bağımlılıkları enjekte eder, somut sınıfları değil
  - Domain exception'ları (InsufficientFundsError) yükselt, HTTPException'ı değil

  İYİ:
  ```
  from app.repositories.protocols import WalletRepoProtocol
  class WalletUserService:
      def __init__(self, repo: WalletRepoProtocol):  # Protocol, SQLAlchemy Session değil
          self._repo = repo
  ```

  KÖTÜ:
  ```
  from sqlalchemy.orm import Session
  class WalletUserService:
      def __init__(self, db: Session): ...  # Yanlış — servis altyapıya bağımlı
  ```

  ### Repository kuralları (app/repositories/**)
  - sqlalchemy'i içeri aktarmaya İZİN VERILEN tek katman
  - `app/repositories/protocols.py` dosyasından Protocol'ü uygular
  - Domain objeleri döner, ORM modellerini değil
  - Her sorgu `user_id` tarafından kapsamlandırılır (çoklu kiracılık)

  ### Provider kuralları (app/providers/**)
  - httpx'i doğrudan içeri aktarmaya İZİN VERILEN tek katman
  - `GenerateResult | ProviderError` döner — asla ham dict değil
  - Provider başına `httpx.AsyncClient` kullanır (bulkhead deseni)

  ## FILE SIZE RULES (İlke A1)

  | LOC      | Durum  | İşlem                                           |
  |----------|--------|--------------------------------------------------|
  | 0–399    | Yeşil  | Hiçbiri.                                         |
  | 400–599  | Sarı   | Bölmeyi planla. TODO(decompose) başlığı ekle.   |
  | 600+     | Kırmızı| MERGE'ü BLOKLALA. Önce ayrıştır.                |

  Dosyayı pakete dönüştür bunlardan BİRİ doğru olduğunda:
  - 400 LOC geçer ve sonraki değişiklik 500'ü geçerse
  - 2+ ayrışık alt-domain içerir (resim vs video, user vs admin)
  - HTTP handler'larını worker handler'larla karıştırır
  - Her biri sadece bir sembolü içeri aktaran 2+ çağrıcısı var

  Güvenli bölme deseni (atomic PR):
  1. `<file>/__init__.py` oluştur (şimdilik boş)
  2. Parçaları alt-dosyalara taşı (a.py, b.py, c.py)
  3. Eski açık adları `__init__.py` dosyasından yeniden dışarı aktar
  4. Testleri çalıştır — değişiklik yapılmadan geçmeli
  5. İzleyen PR'de arayan tarafları eski alias'tan uzaklaştır

  `__init__.py` deseni:
  ```
  from .user import WalletUserService
  from .admin import WalletAdminService
  WalletService = WalletUserService  # backwards-compat alias
  __all__ = ["WalletUserService", "WalletAdminService", "WalletService"]
  ```

  ## EXTERNAL INTEGRATION RULES (İlkeler B1-B10)

  ### Kural 1: Anti-Corruption Layer (ACL)
  Provider'lar `GenerateResult | ProviderError` döner, asla dict değil.

  ```
  from dataclasses import dataclass
  from decimal import Decimal

  @dataclass(frozen=True)
  class GenerateResult:
      url: str
      cost_usd: Decimal
      latency_ms: int
      provider_request_id: str

  class ProviderError(Exception):
      def __init__(self, message: str, *, retryable: bool, code: str | None = None):
          super().__init__(message); self.retryable = retryable; self.code = code

  class ProviderTimeout(ProviderError):
      def __init__(self, message: str): super().__init__(message, retryable=True, code="timeout")
  ```

  ### Kural 2: Provider Başına Bulkhead
  Her harici provider'ın kendi `httpx.AsyncClient`'i var kendi Limits'i ile. ASLA paylaşma.

  İYİ:
  ```
  FAL_HTTP = httpx.AsyncClient(
      base_url=settings.FAL_BASE_URL,
      timeout=httpx.Timeout(connect=5.0, read=60.0, write=10.0, pool=5.0),
      limits=httpx.Limits(max_connections=20, max_keepalive_connections=10),
  )
  OPENAI_HTTP = httpx.AsyncClient(
      base_url="https://api.openai.com/v1",
      limits=httpx.Limits(max_connections=50, max_keepalive_connections=20),
  )
  ```

  KÖTÜ:
  ```
  HTTP = httpx.AsyncClient()  # tüm provider'lar arasında paylaşılır — bulkhead yalıtımı yok
  ```

  Kapatma temizliği — FastAPI lifespan'da tüm provider client'larını kapat
  ```
  from contextlib import asynccontextmanager

  @asynccontextmanager
  async def lifespan(app):
      yield  # app startup
      await FAL_HTTP.aclose()
      await OPENAI_HTTP.aclose()

  app = FastAPI(lifespan=lifespan)
  # Veya on_event("shutdown"):
  # @app.on_event("shutdown")
  # async def close_http_clients() -> None:
  #     await FAL_HTTP.aclose()
  #     await OPENAI_HTTP.aclose()
  ```

  ### Kural 3: Idempotency Keys
  Her yan-etki operasyonu `idempotency_key: UUID` kabul eder. Yeniden denemeden önce bak.

  ### Kural 4: contextvars ile Yapılandırılmış Logging
  Async çağrı yığınları arasında provider, user_id, request_id iletmek için ContextVar kullan.

  ```
  import contextvars

  provider_var   = contextvars.ContextVar[str | None]("provider", default=None)
  user_id_var    = contextvars.ContextVar[str | None]("user_id", default=None)
  request_id_var = contextvars.ContextVar[str | None]("request_id", default=None)

  # Log'larda oku: provider_var.get(), user_id_var.get(), request_id_var.get()
  # JSON formatter bunları `extra={}` veya `ContextVar.get()` aracılığıyla otomatik olarak alır
  ```

  ### Kural 5: Single-Writer Principle (İlke B10)
  Güvenlik açısından kritik durum için: tam olarak BİR servis-katmanı modülü yazım yapıyor.
  Yalnızca bir domain için atanan yazıcı servis `repo.hold()` çağırabilir.
  Router'lar ve provider'lar doğrudan `repo.hold()` çağıramazlar.
  Admin servisleri servis katmanında uygulanmış olabilir `repo.hold()` çağırabilir ancak
  sadece o domain için atanan yazıcı olmaları durumunda.
  Şu şekilde uygula: kod-review grep check (`grep -r "repo\.hold(" --include="*.py"`)
  ve `repo.hold()` çağrısının çağrı-kaynağını doğrulayan unit testler.

  ## ANTI-PATTERNS — GÖRÜŞÜNÜZÜ REDDEDIN

  1. `def some_method(self, db: Session, ...)` → Protocol-tipli repo kullan
  2. Servis içinde `from app.models.user import User` → repo'dan domain tiplerini döndür
  3. Fonksiyon içinde `httpx.AsyncClient()` başlatılmış → paylaşılan provider başına client'ı kullan
  4. Servis içinde `raise HTTPException(...)` → domain exception yükselt
  5. Router'da `db.query(...)` → servise taşı sonra repo'ya
  6. `async def call(self, req) -> dict: return resp.json()` → ACL ihlali
  7. Paylaşılan `HTTP = httpx.AsyncClient()` → bulkhead ihlali
  8. Servis kodunda `result["vendor_field"]["nested"]` → ACL ihlali
  9. `logger.info(f"{user_id} did X")` → `extra={}` ile yapılandırılmış logging kullan
  10. `idempotency_key` olmayan yan-etki operasyonu → double-charge riski

  ## DEPENDENCY INJECTION

  FastAPI `Depends()` + `app/core/deps.py` dosyasında factory fonksiyonlarını kullan.
  `dependency-injector`, `punq` veya başka bir DI container yükleme.

  ```
  def get_wallet_service(db: Session = Depends(get_db)) -> WalletUserService:
      return WalletUserService(repo=SQLAlchemyWalletRepo(db))
  ```

  ## DOMAIN EXCEPTIONS PATTERN

  Servisler domain hataları yükseltir. Router'lar HTTP'ye eşler.

  ```
  # services/wallet/exceptions.py
  class InsufficientFundsError(Exception): ...
  class WalletNotFoundError(Exception): ...

  # routers/wallet.py
  try:
      wallet = await svc.charge(...)
  except InsufficientFundsError:
      raise HTTPException(402, detail="insufficient funds")
  ```
---

# FastAPI Production Architecture Rules
# Principles for production-ready FastAPI services.

## LAYER ARCHITECTURE (Principles A1-A8)

This codebase follows strict 4-layer architecture: Router → Service → Repository → ORM/HTTP/Storage.
Imports flow downward only. Each layer has hard boundaries you must NOT cross.

### Router rules (app/routers/**)
- Handlers are THIN: ≤10 lines of executable code per handler
- Allowed imports: fastapi, app.schemas.*, app.core.deps, app.services.*
- FORBIDDEN imports: sqlalchemy, httpx, boto3, app.models.*, app.repositories.*
- Every endpoint declares response_model= for OpenAPI fidelity
- Every protected/business endpoint requires user_id: str = Depends(get_current_user_id)
- Public endpoints (health checks, webhooks, callbacks) are exempt from auth
- Business logic lives in services. Routers parse input, call one service method, return response.

GOOD:
@router.post("/wallet/charge", response_model=WalletResponse, status_code=201)
async def charge(
    req: ChargeRequest,
    user_id: str = Depends(get_current_user_id),
    svc: WalletUserService = Depends(get_wallet_service),
) -> WalletResponse:
    wallet = await svc.charge(
        user_id=user_id,
        amount=req.amount,
        idempotency_key=req.idempotency_key,
    )
    return WalletResponse.from_domain(wallet)

BAD (business logic + SQL in router):
@router.post("/wallet/charge")
async def charge(req: ChargeRequest, db: Session = Depends(get_db)):
    wallet = db.query(Wallet).filter(Wallet.user_id == user_id).with_for_update().one()
    ...

### Service rules (app/services/**)
- FORBIDDEN imports: sqlalchemy, httpx, boto3, redis, FastAPI Request/Response/HTTPException
- Constructor injects Protocol-typed dependencies, not concrete classes
- Raise domain exceptions (InsufficientFundsError), not HTTPException

GOOD:
from app.repositories.protocols import WalletRepoProtocol
class WalletUserService:
    def __init__(self, repo: WalletRepoProtocol):  # Protocol, not SQLAlchemy Session
        self._repo = repo

BAD:
from sqlalchemy.orm import Session
class WalletUserService:
    def __init__(self, db: Session): ...  # Wrong — service depends on infrastructure

### Repository rules (app/repositories/**)
- ONLY layer allowed to import sqlalchemy
- Implements Protocol from app/repositories/protocols.py
- Returns domain objects, not ORM models
- Every query scoped by user_id (multi-tenancy)

### Provider rules (app/providers/**)
- ONLY layer allowed to import httpx directly
- Returns GenerateResult | ProviderError — NEVER raw dict
- Uses per-provider httpx.AsyncClient (bulkhead pattern)

## FILE SIZE RULES (Principle A1)

| LOC      | State  | Action                                      |
|----------|--------|---------------------------------------------|
| 0–399    | Green  | None.                                       |
| 400–599  | Yellow | Plan split. Add TODO(decompose) header.     |
| 600+     | Red    | BLOCK merge. Decompose first.               |

Convert file to package when ANY is true:
- Crosses 400 LOC and next change pushes past 500
- Contains 2+ disjoint sub-domains (image vs video, user vs admin)
- Mixes HTTP handlers with worker handlers
- Has 2+ callers each importing only one symbol

Safe split pattern (atomic PR):
1. Create <file>/__init__.py (empty for now)
2. Move pieces to sub-files (a.py, b.py, c.py)
3. Re-export old public names from __init__.py
4. Run tests — must pass without changes
5. Follow-up PR to migrate callers off legacy alias

__init__.py pattern:
from .user import WalletUserService
from .admin import WalletAdminService
WalletService = WalletUserService  # backwards-compat alias
__all__ = ["WalletUserService", "WalletAdminService", "WalletService"]

## EXTERNAL INTEGRATION RULES (Principles B1-B10)

### Rule 1: Anti-Corruption Layer (ACL)
Providers return GenerateResult | ProviderError, never dict.

from dataclasses import dataclass
from decimal import Decimal

@dataclass(frozen=True)
class GenerateResult:
    url: str
    cost_usd: Decimal
    latency_ms: int
    provider_request_id: str

class ProviderError(Exception):
    def __init__(self, message: str, *, retryable: bool, code: str | None = None):
        super().__init__(message); self.retryable = retryable; self.code = code

class ProviderTimeout(ProviderError):
    def __init__(self, message: str): super().__init__(message, retryable=True, code="timeout")

### Rule 2: Per-Provider Bulkhead
Each external provider has its OWN httpx.AsyncClient with its OWN Limits. NEVER share.

GOOD:
FAL_HTTP = httpx.AsyncClient(
    base_url=settings.FAL_BASE_URL,
    timeout=httpx.Timeout(connect=5.0, read=60.0, write=10.0, pool=5.0),
    limits=httpx.Limits(max_connections=20, max_keepalive_connections=10),
)
OPENAI_HTTP = httpx.AsyncClient(
    base_url="https://api.openai.com/v1",
    limits=httpx.Limits(max_connections=50, max_keepalive_connections=20),
)

BAD:
HTTP = httpx.AsyncClient()  # shared across all providers — no bulkhead isolation

# Shutdown cleanup — close all provider clients in FastAPI lifespan
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app):
    yield  # app startup
    await FAL_HTTP.aclose()
    await OPENAI_HTTP.aclose()

app = FastAPI(lifespan=lifespan)
# Or on_event("shutdown"):
# @app.on_event("shutdown")
# async def close_http_clients() -> None:
#     await FAL_HTTP.aclose()
#     await OPENAI_HTTP.aclose()

### Rule 3: Idempotency Keys
Every side-effect operation accepts an idempotency_key: UUID. Look up before retrying.

### Rule 4: Structured Logging with contextvars
Use ContextVar to thread provider, user_id, request_id through async call stacks.

import contextvars

provider_var   = contextvars.ContextVar[str | None]("provider", default=None)
user_id_var    = contextvars.ContextVar[str | None]("user_id", default=None)
request_id_var = contextvars.ContextVar[str | None]("request_id", default=None)

# Read in logs: provider_var.get(), user_id_var.get(), request_id_var.get()
# JSON formatter picks these up automatically via extra={} or ContextVar.get()

### Rule 5: Single-Writer Principle (Principle B10)
For safety-critical state: exactly ONE service-layer module does the writing.
Only the designated writer service for a domain may call repo.hold().
Routers and providers must NOT call repo.hold() directly.
Admin services implemented in the service layer may call repo.hold() only
if they are the designated writer for that domain.
Enforce via: code-review grep check (`grep -r "repo\.hold(" --include="*.py"`)
and unit tests that assert call-origin of repo.hold().

## ANTI-PATTERNS — REJECT ON SIGHT

1. def some_method(self, db: Session, ...) → use Protocol-typed repo
2. from app.models.user import User inside a service → return domain types from repo
3. httpx.AsyncClient() instantiated inside a function → use shared per-provider client
4. raise HTTPException(...) inside a service → raise domain exception
5. db.query(...) inside a router → move to service then repo
6. async def call(self, req) -> dict: return resp.json() → ACL violation
7. HTTP = httpx.AsyncClient() shared → bulkhead violation
8. result["vendor_field"]["nested"] in service code → ACL violation
9. logger.info(f"{user_id} did X") → use structured logging with extra={}
10. Side-effect operation without idempotency_key → double-charge risk

## DEPENDENCY INJECTION

Use FastAPI Depends() + factory functions in app/core/deps.py.
Do NOT install dependency-injector, punq, or any DI container.

def get_wallet_service(db: Session = Depends(get_db)) -> WalletUserService:
    return WalletUserService(repo=SQLAlchemyWalletRepo(db))

## DOMAIN EXCEPTIONS PATTERN

Services raise domain errors. Routers map to HTTP.

# services/wallet/exceptions.py
class InsufficientFundsError(Exception): ...
class WalletNotFoundError(Exception): ...

# routers/wallet.py
try:
    wallet = await svc.charge(...)
except InsufficientFundsError:
    raise HTTPException(402, detail="insufficient funds")
