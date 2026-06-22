---
name: "Braintree Automation"
description_en: "Braintree Automation: manage payment processing via Stripe-compatible tools for customers, subscriptions, payment methods, and transactions"
description_tr: "Braintree Automation: Stripe ile uyumlu araçlar kullanarak müşteriler, abonelikler, ödeme yöntemleri ve işlemler için ödeme işlemlerini yönetin."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65490
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/braintree-automation/SKILL.md"
path: "composio-skills/braintree-automation/SKILL.md"
is_collection: false
body_length: 6998
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Braintree Otomasyonu
  
  Stripe uyumlu araçlar aracılığıyla ödeme işleme operasyonlarını otomatikleştirin; müşteri yönetimi, abonelikler, ödeme yöntemleri, bakiye işlemleri ve müşteri aramaları dahil. Composio platformu Braintree ödeme iş akışlarını birleşik ödeme yönetimi için Stripe araç seti aracılığıyla yönlendirir.
  
  **Araç seti dokümantasyonu:** [composio.dev/toolkits/braintree](https://composio.dev/toolkits/braintree)
  
  ---
  
  ## Kurulum
  
  Bu beceri, `https://rube.app/mcp` adresinde bağlı **Rube MCP sunucusu** gerektirir.
  
  Herhangi bir aracı çalıştırmadan önce, `stripe` araç seti için aktif bir bağlantının var olduğundan emin olun. Aktif bağlantı yoksa, `RUBE_MANAGE_CONNECTIONS` aracılığıyla bir tane başlatın.
  
  ---
  
  ## Temel İş Akışları
  
  ### 1. Müşteri Oluşturma ve Yönetimi
  
  Yeni müşteriler oluşturun ve mevcut müşteri ayrıntılarını alın.
  
  **Araçlar:**
  - `STRIPE_CREATE_CUSTOMER` -- Yeni müşteri oluştur
  - `STRIPE_GET_CUSTOMERS_CUSTOMER` -- Müşteri ID'sine göre al
  - `STRIPE_POST_CUSTOMERS_CUSTOMER` -- Mevcut müşteriyi güncelle
  - `STRIPE_LIST_CUSTOMERS` -- Müşterileri pagination ile listele
  - `STRIPE_GET_V1_CUSTOMERS_SEARCH_CUSTOMERS` -- Müşterileri email, ad, metadata'ya göre ara
  
  **`STRIPE_CREATE_CUSTOMER` için Anahtar Parametreler:**
  - `email` -- Müşterinin birincil email adresi
  - `name` -- Ad/soyadı veya işletme adı
  - `phone` -- Ülke kodu ile telefon numarası
  - `description` -- İç referans notları
  - `address` -- `line1`, `city`, `state`, `postal_code`, `country` içeren faturalandırma adresi nesnesi
  
  **`STRIPE_GET_V1_CUSTOMERS_SEARCH_CUSTOMERS` için Anahtar Parametreler:**
  - `query` (gerekli) -- Stripe Search Query Language. `field:value` söz dizimini kullanmalıdır:
    - `email:'user@example.com'` -- Tam eşleşme (büyük/küçük harfe duyarsız)
    - `name~'John'` -- Substring eşleşmesi (min 3 karakter)
    - `metadata['key']:'value'` -- Metadata araması
    - `created>1609459200` -- Timestamp karşılaştırması
    - `AND` veya `OR` ile birleştir (max 10 madde, karıştıramazsınız)
  - `limit` -- Sayfa başına sonuç (1--100, varsayılan 10)
  
  **Örnek:**
  ```
  Tool: STRIPE_CREATE_CUSTOMER
  Arguments:
    email: "jane@example.com"
    name: "Jane Doe"
    description: "Enterprise plan customer"
    address: {
      "line1": "123 Main St",
      "city": "San Francisco",
      "state": "CA",
      "postal_code": "94105",
      "country": "US"
    }
  ```
  
  ---
  
  ### 2. Abonelikleri Yönetme
  
  Abonelikler oluşturun ve müşteri abonelik ayrıntılarını görüntüleyin.
  
  **Araçlar:**
  - `STRIPE_CREATE_SUBSCRIPTION` -- Mevcut müşteri için yeni abonelik oluştur
  - `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS` -- Müşteri için tüm abonelikleri listele
  - `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBS_SUB_EXPOSED_ID` -- Belirli bir aboneliği al
  
  **`STRIPE_CREATE_SUBSCRIPTION` için Anahtar Parametreler:**
  - `customer` (gerekli) -- Müşteri ID'si, örn. `"cus_xxxxxxxxxxxxxx"`
  - `items` (gerekli) -- Abonelik öğeleri dizisi, her biri şunları içerir:
    - `price` -- Fiyat ID'si, örn. `"price_xxxxxxxxxxxxxx"` (bunu VEYA `price_data` kullan)
    - `price_data` -- `currency`, `product`, `unit_amount`, `recurring` içeren satır içi fiyat tanımı
    - `quantity` -- Öğe miktarı
  - `default_payment_method` -- Ödeme yöntemi ID'si (deneme veya invoice faturalandırması için gerekli değil)
  - `trial_period_days` -- Deneme günleri (deneme süresi boyunca ödeme yapılmaz)
  - `collection_method` -- `"charge_automatically"` (varsayılan) veya `"send_invoice"`
  - `cancel_at_period_end` -- Faturalandırma döneminin sonunda iptal et (boolean)
  
  **`STRIPE_GET_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS` için Anahtar Parametreler:**
  - `customer` (gerekli) -- Müşteri ID'si
  - `status` -- Filtrele: `"active"`, `"all"`, `"canceled"`, `"trialing"`, `"past_due"`, vb.
  - `limit` -- Sayfa başına sonuç (1--100, varsayılan 10)
  
  **Örnek:**
  ```
  Tool: STRIPE_CREATE_SUBSCRIPTION
  Arguments:
    customer: "cus_abc123"
    items: [{"price": "price_xyz789", "quantity": 1}]
    trial_period_days: 14
  ```
  
  ---
  
  ### 3. Ödeme Yöntemlerini Yönetme
  
  Ödeme yöntemlerini listeleyin ve müşterilere ekleyin.
  
  **Araçlar:**
  - `STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS` -- Müşterinin ödeme yöntemlerini listele
  - `STRIPE_ATTACH_PAYMENT_METHOD` -- Ödeme yöntemini müşteriye ekle
  
  **`STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS` için Anahtar Parametreler:**
  - `customer` (gerekli) -- Müşteri ID'si
  - `type` -- Türe göre filtrele: `"card"`, `"sepa_debit"`, `"us_bank_account"`, vb.
  - `limit` -- Sayfa başına sonuç (1--100, varsayılan 10)
  
  **Örnek:**
  ```
  Tool: STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS
  Arguments:
    customer: "cus_abc123"
    type: "card"
    limit: 10
  ```
  
  ---
  
  ### 4. Bakiye İşlemlerini Görüntüleme
  
  Müşteri için bakiye değişikliklerinin geçmişini alın.
  
  **Araç:** `STRIPE_GET_CUSTOMERS_CUSTOMER_BALANCE_TRANSACTIONS`
  
  **Anahtar Parametreler:**
  - `customer` (gerekli) -- Müşteri ID'si
  - `created` -- Oluşturma tarihine göre filtrele karşılaştırma operatörleri ile: `{"gte": 1609459200}` veya `{"gt": 1609459200, "lt": 1640995200}`
  - `invoice` -- İlgili invoice ID'ye göre filtrele
  - `limit` -- Sayfa başına sonuç (1--100)
  - `starting_after` / `ending_before` -- Pagination imleci
  
  **Örnek:**
  ```
  Tool: STRIPE_GET_CUSTOMERS_CUSTOMER_BALANCE_TRANSACTIONS
  Arguments:
    customer: "cus_abc123"
    limit: 25
    created: {"gte": 1704067200}
  ```
  
  ---
  
  ## Bilinen Tuzaklar
  
  | Tuzak | Ayrıntı |
  |-------|---------|
  | **Arama sorgusu söz dizimi** | `STRIPE_GET_V1_CUSTOMERS_SEARCH_CUSTOMERS` alan ön eki olan sorgular gerektirir (örn. `email:'x'`). Alan öneki olmayan boş dizeler geçersizdir ve hata verir. |
  | **Abonelik ödeme yöntemi** | `trial_period_days` veya `collection_method='send_invoice'` kullanılıyorsa `default_payment_method` gerekli değildir. Aksi takdirde abonelik etkinleştirilmeyebilir. |
  | **Ödeme yöntemi ekleme** | Bir `PaymentMethod` müşteriye eklenmeden önce ayrılmış durumda olmalıdır. Zaten ekli yöntemler hata verir. |
  | **Pagination imleci** | Sayfa numaraları değil, nesne kimlikleri ile `starting_after`/`ending_before` kullanın. Her yanıttan son/ilk nesne kimliğini ayıklayın. |
  | **Bakiye tutarları sent cinsinden** | Tüm parasal tutarlar en küçük para birimi birimindedir (örn. USD için sent). 1000 = $10,00. |
  | **Abonelik durumu varsayılanı** | `GET_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS` varsayılan olarak iptal edilen abonelikleri hariç tutar. Bunları eklemek için `status: "all"` geçirin. |
  
  ---
  
  ## Hızlı Referans
  
  | Araç Slug | Açıklama |
  |-----------|----------|
  | `STRIPE_CREATE_CUSTOMER` | Yeni müşteri oluştur |
  | `STRIPE_GET_CUSTOMERS_CUSTOMER` | Müşteri ID'sine göre al |
  | `STRIPE_POST_CUSTOMERS_CUSTOMER` | Mevcut müşteriyi güncelle |
  | `STRIPE_LIST_CUSTOMERS` | Müşterileri pagination ile listele |
  | `STRIPE_GET_V1_CUSTOMERS_SEARCH_CUSTOMERS` | Müşterileri niteliklere göre ara |
  | `STRIPE_CREATE_SUBSCRIPTION` | Müşteri için abonelik oluştur |
  | `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS` | Müşteri aboneliklerini listele |
  | `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBS_SUB_EXPOSED_ID` | Belirli bir aboneliği al |
  | `STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS` | Müşteri ödeme yöntemlerini listele |
  | `STRIPE_ATTACH_PAYMENT_METHOD` | Ödeme yöntemini müşteriye ekle |
  | `STRIPE_GET_CUSTOMERS_CUSTOMER_BALANCE_TRANSACTIONS` | Müşteri bakiye işlemlerini listele |
  
  ---
  
  *Powered by [Composio](https://composio.dev)*
---

# Braintree Automation

Automate payment processing operations via Stripe-compatible tooling including managing customers, subscriptions, payment methods, balance transactions, and customer searches. The Composio platform routes Braintree payment workflows through the Stripe toolkit for unified payment management.

**Toolkit docs:** [composio.dev/toolkits/braintree](https://composio.dev/toolkits/braintree)

---

## Setup

This skill requires the **Rube MCP server** connected at `https://rube.app/mcp`.

Before executing any tools, ensure an active connection exists for the `stripe` toolkit. If no connection is active, initiate one via `RUBE_MANAGE_CONNECTIONS`.

---

## Core Workflows

### 1. Create and Manage Customers

Create new customers and retrieve existing customer details.

**Tools:**
- `STRIPE_CREATE_CUSTOMER` -- Create a new customer
- `STRIPE_GET_CUSTOMERS_CUSTOMER` -- Retrieve a customer by ID
- `STRIPE_POST_CUSTOMERS_CUSTOMER` -- Update an existing customer
- `STRIPE_LIST_CUSTOMERS` -- List customers with pagination
- `STRIPE_GET_V1_CUSTOMERS_SEARCH_CUSTOMERS` -- Search customers by email, name, metadata

**Key Parameters for `STRIPE_CREATE_CUSTOMER`:**
- `email` -- Customer's primary email address
- `name` -- Full name or business name
- `phone` -- Phone number with country code
- `description` -- Internal reference notes
- `address` -- Billing address object with `line1`, `city`, `state`, `postal_code`, `country`

**Key Parameters for `STRIPE_GET_V1_CUSTOMERS_SEARCH_CUSTOMERS`:**
- `query` (required) -- Stripe Search Query Language. Must use `field:value` syntax:
  - `email:'user@example.com'` -- Exact match (case insensitive)
  - `name~'John'` -- Substring match (min 3 chars)
  - `metadata['key']:'value'` -- Metadata search
  - `created>1609459200` -- Timestamp comparison
  - Combine with `AND` or `OR` (max 10 clauses, cannot mix)
- `limit` -- Results per page (1--100, default 10)

**Example:**
```
Tool: STRIPE_CREATE_CUSTOMER
Arguments:
  email: "jane@example.com"
  name: "Jane Doe"
  description: "Enterprise plan customer"
  address: {
    "line1": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "postal_code": "94105",
    "country": "US"
  }
```

---

### 2. Manage Subscriptions

Create subscriptions and view customer subscription details.

**Tools:**
- `STRIPE_CREATE_SUBSCRIPTION` -- Create a new subscription for an existing customer
- `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS` -- List all subscriptions for a customer
- `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBS_SUB_EXPOSED_ID` -- Get a specific subscription

**Key Parameters for `STRIPE_CREATE_SUBSCRIPTION`:**
- `customer` (required) -- Customer ID, e.g., `"cus_xxxxxxxxxxxxxx"`
- `items` (required) -- Array of subscription items, each with:
  - `price` -- Price ID, e.g., `"price_xxxxxxxxxxxxxx"` (use this OR `price_data`)
  - `price_data` -- Inline price definition with `currency`, `product`, `unit_amount`, `recurring`
  - `quantity` -- Item quantity
- `default_payment_method` -- Payment method ID (not required for trials or invoice billing)
- `trial_period_days` -- Trial days (no payment required during trial)
- `collection_method` -- `"charge_automatically"` (default) or `"send_invoice"`
- `cancel_at_period_end` -- Cancel at end of billing period (boolean)

**Key Parameters for `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS`:**
- `customer` (required) -- Customer ID
- `status` -- Filter: `"active"`, `"all"`, `"canceled"`, `"trialing"`, `"past_due"`, etc.
- `limit` -- Results per page (1--100, default 10)

**Example:**
```
Tool: STRIPE_CREATE_SUBSCRIPTION
Arguments:
  customer: "cus_abc123"
  items: [{"price": "price_xyz789", "quantity": 1}]
  trial_period_days: 14
```

---

### 3. Manage Payment Methods

List and attach payment methods to customers.

**Tools:**
- `STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS` -- List a customer's payment methods
- `STRIPE_ATTACH_PAYMENT_METHOD` -- Attach a payment method to a customer

**Key Parameters for `STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS`:**
- `customer` (required) -- Customer ID
- `type` -- Filter by type: `"card"`, `"sepa_debit"`, `"us_bank_account"`, etc.
- `limit` -- Results per page (1--100, default 10)

**Example:**
```
Tool: STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS
Arguments:
  customer: "cus_abc123"
  type: "card"
  limit: 10
```

---

### 4. View Balance Transactions

Retrieve the history of balance changes for a customer.

**Tool:** `STRIPE_GET_CUSTOMERS_CUSTOMER_BALANCE_TRANSACTIONS`

**Key Parameters:**
- `customer` (required) -- Customer ID
- `created` -- Filter by creation date with comparison operators: `{"gte": 1609459200}` or `{"gt": 1609459200, "lt": 1640995200}`
- `invoice` -- Filter by related invoice ID
- `limit` -- Results per page (1--100)
- `starting_after` / `ending_before` -- Pagination cursors

**Example:**
```
Tool: STRIPE_GET_CUSTOMERS_CUSTOMER_BALANCE_TRANSACTIONS
Arguments:
  customer: "cus_abc123"
  limit: 25
  created: {"gte": 1704067200}
```

---

## Known Pitfalls

| Pitfall | Detail |
|---------|--------|
| **Search query syntax** | `STRIPE_GET_V1_CUSTOMERS_SEARCH_CUSTOMERS` requires field-prefixed queries (e.g., `email:'x'`). Bare strings without field prefixes are invalid and will error. |
| **Subscription payment method** | `default_payment_method` is not required if using `trial_period_days` or `collection_method='send_invoice'`. Otherwise, the subscription may fail to activate. |
| **Payment method attachment** | A `PaymentMethod` must be in a detached state before attaching to a customer. Already-attached methods will error. |
| **Pagination cursors** | Use `starting_after`/`ending_before` with object IDs, not page numbers. Extract the last/first object ID from each response. |
| **Balance amounts in cents** | All monetary amounts are in the smallest currency unit (e.g., cents for USD). 1000 = $10.00. |
| **Subscription status default** | `GET_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS` excludes canceled subscriptions by default. Pass `status: "all"` to include them. |

---

## Quick Reference

| Tool Slug | Description |
|-----------|-------------|
| `STRIPE_CREATE_CUSTOMER` | Create a new customer |
| `STRIPE_GET_CUSTOMERS_CUSTOMER` | Retrieve a customer by ID |
| `STRIPE_POST_CUSTOMERS_CUSTOMER` | Update an existing customer |
| `STRIPE_LIST_CUSTOMERS` | List customers with pagination |
| `STRIPE_GET_V1_CUSTOMERS_SEARCH_CUSTOMERS` | Search customers by attributes |
| `STRIPE_CREATE_SUBSCRIPTION` | Create a subscription for a customer |
| `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS` | List customer subscriptions |
| `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBS_SUB_EXPOSED_ID` | Get a specific subscription |
| `STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS` | List customer payment methods |
| `STRIPE_ATTACH_PAYMENT_METHOD` | Attach payment method to customer |
| `STRIPE_GET_CUSTOMERS_CUSTOMER_BALANCE_TRANSACTIONS` | List customer balance transactions |

---

*Powered by [Composio](https://composio.dev)*
