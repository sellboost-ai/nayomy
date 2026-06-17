---
name: "nestjs-anti-hallucination-cursorrules-prompt-file"
clean_name: "NestJS Anti Hallucination"
description: "Cursor rules that block deprecated, phantom, or incorrect NestJS imports, decorators, providers, modules, and testing patterns."
description_tr: "NestJS'te kullanımdan kaldırılmış, yanlış veya geçersiz import'ları, decorator'ları, provider'ları, modülleri ve test pattern'larini engelleyen Cursor kuralları."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/nestjs-anti-hallucination-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nestjs-anti-hallucination-cursorrules-prompt-file.mdc"
body_length: 7142
file_extension: ".mdc"
body_tr: |-
  # NestJS Anti-Hallucination Kuralları

  Bu kurallar diğer tüm üretim davranışını GEÇERSİZ KILAR. Üretilen kodun HER SATIRINI bu kurallara karşı kontrol edin.

  ## Yasaklı İçe Aktarmalar & Hayalet Paketler

  ### BU PAKETLERI ASLA içe aktarmayın — varolmaz veya kullanımdan kaldırılmıştır:
  ```
  ❌ @nestjs/core/decorators    — gerçek bir export yolu değil
  ❌ @nestjs/swagger/decorators — doğrudan @nestjs/swagger'dan içe aktarın
  ❌ @nestjs/typeorm/repository — gerçek bir export yolu değil
  ❌ @nestjs/passport/strategies — passport-jwt, passport-local vb. den içe aktarın
  ❌ @nestjs/bull/decorators     — @nestjs/bullmq'dan içe aktarın (bull eski)
  ❌ nestjs-redis               — @nestjs-modules/ioredis veya ioredis kullanın
  ❌ @nestjs/cqrs/decorators    — doğrudan @nestjs/cqrs'dan içe aktarın
  ❌ nestjs-config              — @nestjs/config kullanın (resmi)
  ❌ nestjs-pino/logger          — doğrudan nestjs-pino'dan içe aktarın
  ```

  ### Doğru import yolları:
  ```typescript
  // ✅ Swagger
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

  // ✅ TypeORM
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository, DataSource } from 'typeorm';

  // ✅ BullMQ (Bull DEĞİL)
  import { InjectQueue, Processor, WorkerHost } from '@nestjs/bullmq';

  // ✅ Config
  import { ConfigService, ConfigModule } from '@nestjs/config';

  // ✅ Passport
  import { AuthGuard } from '@nestjs/passport';
  import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

  // ✅ CQRS
  import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
  ```

  ## Kullanımdan Kaldırılan Desenler — ASLA BUNLARI ÜRETMEYİN

  ### 1. Provider'ların dışında getRepository()
  ```typescript
  // ❌ KULLANIMDAN KALDIRILMIŞ — TypeORM 0.3+'da kaldırıldı
  const repo = getRepository(User);
  const user = await getConnection().getRepository(User).find();

  // ✅ DOĞRU — constructor aracılığıyla enjekte edin
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}
  ```

  ### 2. @nestjs/bull (@nestjs/bullmq kullanın)
  ```typescript
  // ❌ ESKİ — @nestjs/bull ile @Process decorator'ü
  import { Process, Processor } from '@nestjs/bull';
  @Processor('queue')
  class MyProcessor {
    @Process() async handle(job: Job) {}
  }

  // ✅ GÜNCEL — @nestjs/bullmq ile WorkerHost
  import { Processor, WorkerHost } from '@nestjs/bullmq';
  @Processor('queue')
  class MyProcessor extends WorkerHost {
    async process(job: Job): Promise<void> {}
  }
  ```

  ### 3. Express'e özgü middleware hataları
  ```typescript
  // ❌ YANLIŞ — NestJS'de Express req/res türleri
  import { Request, Response } from 'express';
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    res.json(data); // İnterceptor'ları, serileştirmeyi ve exception filter'ları atlar
  }

  // ✅ DOĞRU — NestJS decorator'ları kullanın, değer döndürün
  @Get()
  async findAll(@Query() query: FindAllQueryDto): Promise<UserResponseDto[]> {
    return this.usersService.findAll(query);
  }

  // @Res() yalnızca dosya akışı veya SSE'de kullanın — { passthrough: true } ekleyin
  @Get('download')
  async download(@Res({ passthrough: true }) res: Response) {
    res.set('Content-Type', 'application/octet-stream');
    return new StreamableFile(stream);
  }
  ```

  ### 4. Yanlış decorator kombinasyonları
  ```typescript
  // ❌ YANLIŞ — Controller'da @Injectable()
  @Injectable()
  @Controller('users')
  export class UsersController {}

  // ❌ YANLIŞ — Service'de @Controller()
  @Controller()
  @Injectable()
  export class UsersService {}

  // ❌ YANLIŞ — GET handler'ında @Body()
  @Get()
  async findAll(@Body() body: any) {} // GET request'leri body içermemelidir

  // ❌ YANLIŞ — Aynı isimle hem @Param hem @Query
  @Get(':id')
  async findOne(@Param('id') paramId: string, @Query('id') queryId: string) {}
  ```

  ### 5. class-validator / class-transformer hataları
  ```typescript
  // ❌ YANLIŞ — main.ts'de etkinleştirilmeden doğrulama
  // (AI sık sık bu kritik satırı unutur)
  // main.ts MUTLAKA şunları içermelidir:
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // Bilinmeyen özellikleri sıyırın
    forbidNonWhitelisted: true, // Bilinmeyen özellikler varsa hata fırlatın
    transform: true,            // Payload'ları otomatik olarak DTO örneğine dönüştürün
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));

  // ❌ YANLIŞ — Doğrulama decorator'lerini yanlış transform ile karıştırma
  export class CreateUserDto {
    @IsString()
    name: string;

    @IsNumber()
    age: string; // Tür uyuşmazlığı! Decorator number diyor, tür string diyor
  }

  // ✅ DOĞRU — Türler decorator'lerle eşleşir
  export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @Min(0)
    age: number;
  }
  ```

  ### 6. Async module tuzakları
  ```typescript
  // ❌ YANLIŞ — bekleme olmadan useFactory
  TypeOrmModule.forRootAsync({
    useFactory: (config: ConfigService) => ({
      type: 'postgres',
      url: config.get('DATABASE_URL'), // Beklenmemiş, inject yok
    }),
  })

  // ✅ DOĞRU
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      type: 'postgres',
      url: config.getOrThrow<string>('DATABASE_URL'),
      autoLoadEntities: true,
      synchronize: false, // ÜRETİMDE ASLA true
    }),
  })
  ```

  ## Tür Güvenliği Kuralları

  ### ASLA `any` üretmeyin
  ```typescript
  // ❌ YASAKLI
  catch (error: any) { ... }
  const data: any = await response.json();
  private cache = new Map<string, any>();

  // ✅ GEREKLİ
  catch (error: unknown) {
    if (error instanceof DomainError) { ... }
    throw error;
  }
  const data = await response.json() as PaymentGatewayResponse;
  private cache = new Map<string, CachedSession>();
  ```

  ### ASLA tip belirtilmeyen event payload'ları üretmeyin
  ```typescript
  // ❌ YANLIŞ
  eventBus.emit('order.created', { order });

  // ✅ DOĞRU — Tiplendirilmiş eventler
  export class OrderCreatedEvent {
    constructor(
      public readonly orderId: string,
      public readonly userId: string,
      public readonly totalAmount: number,
      public readonly occurredAt: Date = new Date(),
    ) {}
  }
  eventBus.emit(new OrderCreatedEvent(order.id, order.userId, order.total));
  ```

  ## Konfigürasyon Güvenliği

  ### ASLA şunlar için sabit kodlanmış değerler üretmeyin:
  - Veritabanı bağlantı dizeleri
  - API anahtarları veya sırlar
  - Port numaraları
  - Özellik bayrakları
  - Harici hizmet URL'leri

  ### ALWAYS getOrThrow ile ConfigService kullanın:
  ```typescript
  // ❌ YANLIŞ
  const port = process.env.PORT || 3000;
  const dbUrl = process.env.DATABASE_URL;

  // ✅ DOĞRU
  const port = this.configService.getOrThrow<number>('app.port');
  const dbUrl = this.configService.getOrThrow<string>('database.url');
  ```

  ## Veritabanı Güvenliği

  ### ASLA bunu üretmeyin:
  ```typescript
  // ❌ synchronize: true üretim konfigürasyonunda
  // ❌ Migration dosyalarında DROP TABLE veya TRUNCATE
  // ❌ Parametreli sorgular olmadan ham SQL
  await this.dataSource.query(`SELECT * FROM users WHERE id = '${userId}'`); // SQL injection!

  // ✅ DOĞRU
  await this.dataSource.query(`SELECT * FROM users WHERE id = $1`, [userId]);
  ```

  ## Hatırla
  - Bir paket var olup olmadığından emin değilsen, ASLA içe aktarma. Sor veya kontrol et.
  - Resmi docs'ta görmediğin bir NestJS deseni üretiyorsan, DUR ve yeniden düşün.
  - Şüphe duyarsan, yanlış desenleri tahmin etmek yerine DAHA AZ KOD ve doğru desenler üret.
---

# NestJS Anti-Hallucination Rules

These rules OVERRIDE all other generation behavior. Check EVERY line of generated code against these rules.

## Banned Imports & Phantom Packages

### NEVER import these — they don't exist or are deprecated:
```
❌ @nestjs/core/decorators    — not a real export path
❌ @nestjs/swagger/decorators — import from @nestjs/swagger directly
❌ @nestjs/typeorm/repository — not a real export path
❌ @nestjs/passport/strategies — import from passport-jwt, passport-local, etc.
❌ @nestjs/bull/decorators     — import from @nestjs/bullmq (bull is legacy)
❌ nestjs-redis               — use @nestjs-modules/ioredis or ioredis directly
❌ @nestjs/cqrs/decorators    — import from @nestjs/cqrs directly
❌ nestjs-config              — use @nestjs/config (official)
❌ nestjs-pino/logger          — import from nestjs-pino directly
```

### Correct import paths:
```typescript
// ✅ Swagger
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

// ✅ TypeORM
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

// ✅ BullMQ (NOT Bull)
import { InjectQueue, Processor, WorkerHost } from '@nestjs/bullmq';

// ✅ Config
import { ConfigService, ConfigModule } from '@nestjs/config';

// ✅ Passport
import { AuthGuard } from '@nestjs/passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

// ✅ CQRS
import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
```

## Deprecated Patterns — NEVER Generate These

### 1. getRepository() outside providers
```typescript
// ❌ DEPRECATED — removed in TypeORM 0.3+
const repo = getRepository(User);
const user = await getConnection().getRepository(User).find();

// ✅ CORRECT — inject via constructor
constructor(
  @InjectRepository(User)
  private readonly userRepo: Repository<User>,
) {}
```

### 2. @nestjs/bull (use @nestjs/bullmq)
```typescript
// ❌ OLD — @nestjs/bull with @Process decorator
import { Process, Processor } from '@nestjs/bull';
@Processor('queue')
class MyProcessor {
  @Process() async handle(job: Job) {}
}

// ✅ CURRENT — @nestjs/bullmq with WorkerHost
import { Processor, WorkerHost } from '@nestjs/bullmq';
@Processor('queue')
class MyProcessor extends WorkerHost {
  async process(job: Job): Promise<void> {}
}
```

### 3. Express-specific middleware mistakes
```typescript
// ❌ WRONG — Express req/res types in NestJS
import { Request, Response } from 'express';
@Get()
async findAll(@Req() req: Request, @Res() res: Response) {
  res.json(data); // Bypasses interceptors, serialization, exception filters
}

// ✅ CORRECT — Use NestJS decorators, return values
@Get()
async findAll(@Query() query: FindAllQueryDto): Promise<UserResponseDto[]> {
  return this.usersService.findAll(query);
}

// Only use @Res() when streaming files or SSE — add { passthrough: true }
@Get('download')
async download(@Res({ passthrough: true }) res: Response) {
  res.set('Content-Type', 'application/octet-stream');
  return new StreamableFile(stream);
}
```

### 4. Wrong decorator combinations
```typescript
// ❌ WRONG — @Injectable() on a controller
@Injectable()
@Controller('users')
export class UsersController {}

// ❌ WRONG — @Controller() on a service
@Controller()
@Injectable()
export class UsersService {}

// ❌ WRONG — @Body() in a GET handler
@Get()
async findAll(@Body() body: any) {} // GET requests should not have a body

// ❌ WRONG — Both @Param and @Query with same name
@Get(':id')
async findOne(@Param('id') paramId: string, @Query('id') queryId: string) {}
```

### 5. class-validator / class-transformer mistakes
```typescript
// ❌ WRONG — Validation without enabling in main.ts
// (AI often forgets this critical line)
// main.ts MUST have:
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,            // Strip unknown properties
  forbidNonWhitelisted: true, // Throw on unknown properties
  transform: true,            // Auto-transform payloads to DTO instances
  transformOptions: {
    enableImplicitConversion: true,
  },
}));

// ❌ WRONG — Mixing validation decorators with wrong transform
export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: string; // Type mismatch! Decorator says number, type says string
}

// ✅ CORRECT — Types match decorators
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(0)
  age: number;
}
```

### 6. Async module pitfalls
```typescript
// ❌ WRONG — useFactory without async when awaiting
TypeOrmModule.forRootAsync({
  useFactory: (config: ConfigService) => ({
    type: 'postgres',
    url: config.get('DATABASE_URL'), // Not awaited, no inject
  }),
})

// ✅ CORRECT
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    type: 'postgres',
    url: config.getOrThrow<string>('DATABASE_URL'),
    autoLoadEntities: true,
    synchronize: false, // NEVER true in production
  }),
})
```

## Type Safety Rules

### NEVER generate `any`
```typescript
// ❌ BANNED
catch (error: any) { ... }
const data: any = await response.json();
private cache = new Map<string, any>();

// ✅ REQUIRED
catch (error: unknown) {
  if (error instanceof DomainError) { ... }
  throw error;
}
const data = await response.json() as PaymentGatewayResponse;
private cache = new Map<string, CachedSession>();
```

### NEVER generate untyped event payloads
```typescript
// ❌ WRONG
eventBus.emit('order.created', { order });

// ✅ CORRECT — Typed events
export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userId: string,
    public readonly totalAmount: number,
    public readonly occurredAt: Date = new Date(),
  ) {}
}
eventBus.emit(new OrderCreatedEvent(order.id, order.userId, order.total));
```

## Configuration Safety

### NEVER generate hardcoded values for:
- Database connection strings
- API keys or secrets
- Port numbers
- Feature flags
- External service URLs

### ALWAYS use ConfigService with getOrThrow:
```typescript
// ❌ WRONG
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

// ✅ CORRECT
const port = this.configService.getOrThrow<number>('app.port');
const dbUrl = this.configService.getOrThrow<string>('database.url');
```

## Database Safety

### NEVER generate:
```typescript
// ❌ synchronize: true in production config
// ❌ DROP TABLE or TRUNCATE in migration files
// ❌ Raw SQL without parameterized queries
await this.dataSource.query(`SELECT * FROM users WHERE id = '${userId}'`); // SQL injection!

// ✅ CORRECT
await this.dataSource.query(`SELECT * FROM users WHERE id = $1`, [userId]);
```

## Remember
- If you're unsure whether a package exists, DO NOT import it. Ask or check.
- If you're generating a NestJS pattern you haven't seen in the official docs, STOP and reconsider.
- When in doubt, generate LESS code with correct patterns rather than MORE code with guesses.
