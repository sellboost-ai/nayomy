---
name: "solana-wallet-aware"
clean_name: "Solana Wallet Aware"
description: "Guidelines for writing Solana-native code with wallet-security awareness, isolated signer subprocesses, MEV defense, oracle gates, and transaction safety checks"
description_tr: "Solana native kod yazımı için cüzdan güvenliği, izole imzalayan alt işlemler, MEV savunması, oracle kapıları ve işlem güvenlik kontrolleri içeren rehber."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/solana-wallet-aware.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/solana-wallet-aware.mdc"
body_length: 3438
file_extension: ".mdc"
body_tr: |-
  # Solana Cüzdan-Farkındalı Kodlama

  Solana on-chain veya off-chain kod yazarken, bu cüzdan-güvenliği ve işlem-güvenliği kurallarını uygulayın.

  ## Cüzdan mimarisi

  - Ham private key'i hiçbir zaman `.env`, config dosyalarına veya source'a kaydetmeyin. Şifre türetilmiş anahtar ile şifreleyin (HKDF-SHA256 + AES-256-GCM, `eth-account`'ın scrypt V3 keystore'u, veya `libsodium`'un sealed-box'ı).
  - $1k+ ölçekte üç katmanlı cüzdan bölünmesi kullanın: **hot** (bot imzalama, ≤AUM'un %10'u), **warm** (kurucu telefonunda manuel top-up buffer, ~%30), **cold** (hardware wallet veya Squads 2-of-2 multisig, ~%60, ≥6 ay dokunulmaz).
  - Hot cüzdanı yakılabilir olarak görün. Dev makinesinde hiç `.env` dosyasına dokunan her key sonsuza kadar tehlikeli sayılır.
  - İmzalayanı, yalnızca iki yeteneğe sahip bir subprocess'te izole edin: (a) yerel bir Unix socket / stdin üzerinden önceden oluşturulmuş bir işlem alın, (b) bir imza döndürün. Ağ erişimi yok, program-scope yükselmesi yok, program ID'lerinin açık allowlist'i.

  ## Solana'da MEV savunması

  - Swap'ları hiçbir zaman public mempool'a yayınlamayın. Her zaman Jito bundle'larını per-bundle tip ile kullanın (10k lamports'tan başlayın, beklenen kârla ölçekleyin).
  - Bir oracle gate ekleyin: Jupiter'ın verdiği fiyat Pyth'in spot fiyatından > %0.5 farklıysa işlemi reddedin. Eşiği 1 dakikalık gerçekleşmiş volatilite ile dinamik olarak güncelleyin.
  - Likidite eksikliği blocklist'i yönetin: en derin pool'u < $1M TVL olan token'ları atlayın (kontrol etmek için GeckoTerminal veya Birdeye API kullanın).
  - Limit tarzı emirler için, kendi composmanızı yapmak yerine Jupiter'ın limit-order program'ını tercih edin (built-in MEV koruyucu).

  ## Program-ID allowlist deseni

  Bir imzalayan oluştururken, bot'unuzun çağırabildiği program ID'lerinin listesini hard-code edin. Allowlist dışında bir programa dokunan instruction'ları içeren herhangi bir işlemi reddedin. Solana trading bot'u için en azından:

  ```
  const ALLOWED_PROGRAMS = new Set([
    "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",  // Jupiter v6
    "opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb",  // OpenBook v2
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",  // SPL Token
    "ComputeBudget111111111111111111111111111111",  // Compute budget
    // DEX ID'lerinizi buraya ekleyin — ASLA bilinmeyen programlar eklemeyin
  ]);
  ```

  ## İşlem-güvenliği değişmezleri

  HERHANGİ bir işlemi imzalamadan önce:
  - Her instruction'ı deserialize edin + kontrol edin. Ayrıştırmadan "signTransaction(bytes)" kullanmayın.
  - İşlem başına ve 24h saatlik pencereyi rulo halinde max SOL çıkışını zorunlu kılın (harcama-sınırı devre kesici).
  - Blockhash'in tazeliğini kontrol edin (slot yaşı < 150 veya işlem muhtemelen sona erecektir).
  - Compute budget ≤ 200k CU varsayılan; daha yüksek için açık opt-in gerekli.

  ## Simülasyon gate'i

  Cüzdan-otomasyonu kodunu simülasyondan canlı imzalamaya taşımayın; kullanıcı açıkça onaylayana ve uygulama signer hatası, RPC hatası, eski blockhash'ler, reddedilen allowlist girdileri ve harcama-sınırı zorunluluğu için fault-injection testlerinden geçene kadar.

  ## Operasyonel güvenlik

  - Deployment credentials, cüzdan key'leri, RPC credentials ve monitoring token'larını source control dışında tutun.
  - İmzalayan kullanılabilirliği, eski blockhash'ler, RPC hata oranı ve işlem hatası oranı için health check'ler ekleyin.
  - Harcama sınırlarını, program allowlist'lerini veya compute-unit limitlerini yükseltmeden önce açık manual onay yolu gerekli kılın.
---

# Solana Wallet-Aware Coding

When writing Solana on-chain or off-chain code, apply these wallet-safety and transaction-safety rules.

## Wallet architecture

- Never store a raw private key in `.env`, config files, or source. Encrypt with a passphrase-derived key (HKDF-SHA256 + AES-256-GCM, or `eth-account`'s scrypt V3 keystore, or `libsodium`'s sealed-box).
- Use a three-tier wallet split at $1k+ scale: **hot** (bot-signing, ≤10% of AUM), **warm** (manual-top-up buffer on founder phone, ~30%), **cold** (hardware wallet or Squads 2-of-2 multisig, ~60%, untouchable ≥6 months).
- Treat the hot wallet as burnable. Any key that ever touched a `.env` file on a dev machine is compromised forever.
- Isolate the signer in a subprocess with only two capabilities: (a) receive a pre-built transaction over a local Unix socket / stdin, (b) return a signature. No network access, no program-scope escalation, explicit allowlist of program IDs.

## MEV defense on Solana

- Never broadcast swaps to the public mempool. Always use Jito bundles with a per-bundle tip (start at 10k lamports, scale with expected profit).
- Add an oracle gate: reject a trade if Jupiter's quoted price is > 0.5% off Pyth's spot price. Update threshold dynamically with 1-minute realized volatility.
- Maintain an illiquidity blocklist: skip any token where the deepest pool has < $1M TVL (use GeckoTerminal or Birdeye API to check).
- For limit-style orders, prefer Jupiter's limit-order program (built-in MEV protection) over composing your own.

## Program-ID allowlist pattern

When building a signer, hard-code the list of program IDs your bot may invoke. Reject any transaction whose instructions touch a program outside the allowlist. At minimum for a Solana trading bot:

```
const ALLOWED_PROGRAMS = new Set([
  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",  // Jupiter v6
  "opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb",  // OpenBook v2
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",  // SPL Token
  "ComputeBudget111111111111111111111111111111",  // Compute budget
  // add your DEX IDs here — NEVER include unknown programs
]);
```

## Transaction-safety invariants

Before signing ANY transaction:
- Deserialize + inspect every instruction. No opaque "signTransaction(bytes)" without parsing.
- Enforce a max SOL outflow per transaction AND per rolling 24h window (spend-cap circuit breaker).
- Require a freshness check on the blockhash (slot age < 150 or transaction will likely expire).
- Compute budget ≤ 200k CU default; require explicit opt-in for higher.

## Simulation gate

Do not move wallet-automation code from simulation to live signing until the user has explicitly approved it and the implementation has passed fault-injection tests for signer failure, RPC failure, stale blockhashes, rejected allowlist entries, and spend-cap enforcement.

## Operational safety

- Keep deployment credentials, wallet keys, RPC credentials, and monitoring tokens out of source control.
- Add health checks for signer availability, stale blockhashes, RPC error rate, and transaction failure rate.
- Require an explicit manual approval path before raising spend caps, program allowlists, or compute-unit limits.
