---
name: "solana-wallet-aware"
clean_name: "Solana Wallet Aware"
description: "Guidelines for writing Solana-native code with wallet-security awareness, isolated signer subprocesses, MEV defense, oracle gates, and transaction safety checks"
description_tr: "Solana için wallet güvenliğini göz önünde bulundurarak, izole imzalayıcı alt işlemler, MEV koruması, oracle geçitleri ve işlem güvenlik kontrolleri ile native kod yazma kılavuzu."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/solana-wallet-aware.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/solana-wallet-aware.mdc"
body_length: 3438
file_extension: ".mdc"
body_tr: |-
  # Solana Cüzdan-Uyumlu Kodlama

  Solana on-chain veya off-chain kod yazarken, bu cüzdan-güvenliği ve işlem-güvenliği kurallarını uygulayın.

  ## Cüzdan mimarisi

  - Ham özel anahtarı hiçbir zaman `.env`, config dosyalarında veya kaynak kodda saklamayın. Parola türetilmiş anahtarla şifreleyin (HKDF-SHA256 + AES-256-GCM, veya `eth-account`'ın scrypt V3 keystore'u, veya `libsodium`'in sealed-box'ı).
  - $1k+ ölçekte üç katmanlı cüzdan bölümlemesi kullanın: **hot** (bot-imzalama, AUM'nin ≤%10'u), **warm** (kurucu telefonda manuel dolum tamponu, ~%30), **cold** (donanım cüzdan veya Squads 2-of-2 multisig, ~%60, ≥6 ay dokunulmaz).
  - Hot cüzdanı yakılabilir olarak değerlendirin. Dev makinedeki `.env` dosyasına hiç değen her anahtar sonsuza dek tehlikeli hale gelir.
  - İmzalayıcıyı yalnızca iki yeteneğe sahip bir alt işlemde izole edin: (a) önceden oluşturulmuş bir işlemi yerel Unix socket / stdin üzerinden alması, (b) imza döndürmesi. Ağ erişimi yok, program-kapsamı yükseltmesi yok, açık program ID allowlist'i.

  ## Solana'da MEV savunması

  - Swapları asla genel mempool'a yayınlamayın. Her zaman Jito bundle'larını kullanın, bundle başına bir tip ile (10k lamports ile başlayın, beklenen kâr ile ölçeklendirin).
  - Bir oracle kapısı ekleyin: Jupiter'ın alıntı fiyatı Pyth'in spot fiyatından > %0.5 sapıyorsa işlemi reddedin. Eşiği 1 dakikalık gerçekleşmiş volatilite ile dinamik olarak güncelleyin.
  - Likidite yetersizliği blocklist'i tutun: en derin havuzun < $1M TVL'si olan herhangi bir token'ı atlayın (kontrol etmek için GeckoTerminal veya Birdeye API'sini kullanın).
  - Limit stili siparişler için, kendi bileşiminizi yapıştırmak yerine Jupiter'ın limit-order programını (yerleşik MEV koruması) tercih edin.

  ## Program-ID allowlist deseni

  Bir imzalayıcı oluştururken, botunuzun çağırabileceği program ID'lerinin listesini hard-code edin. İmzasını attığınız herhangi bir işlemi reddedin; bu işlemin talimatları allowlist dışındaki bir programa dokunuyorsa. Solana trading botu için minimum olarak:

  ```
  const ALLOWED_PROGRAMS = new Set([
    "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4",  // Jupiter v6
    "opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb",  // OpenBook v2
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",  // SPL Token
    "ComputeBudget111111111111111111111111111111",  // Compute budget
    // DEX ID'lerinizi buraya ekleyin — HİÇBİR ZAMAN bilinmeyen programları eklemeyin
  ]);
  ```

  ## İşlem-güvenliği değişmezleri

  HERHANGİ bir işleme imza atmadan önce:
  - Her talimatı ayrı ayrı deserialize + kontrol edin. Parsing olmadan opak "signTransaction(bytes)" yok.
  - İşlem başına VE 24 saatlik kayan pencerede maksimum SOL çıkışını zorunlu kılın (harcama-cap devre kesici).
  - Blockhash'in tazeliği kontrol edin (slot yaşı < 150 ya da işlem sona eriş olasılığı yüksek).
  - Compute bütçesi ≤ 200k CU varsayılan; daha yüksek için açık opt-in'i gerekli kılın.

  ## Simülasyon kapısı

  Cüzdan-otomasyonu kodunu simülasyondan canlı imzalamaya taşımayın; kullanıcı açıkça bunu onaylayana ve uygulama imzalayıcı hatası, RPC hatası, eski blockhash'ler, reddedilen allowlist girişleri ve harcama-cap uygulaması için hata-enjeksiyon testlerini geçene kadar.

  ## Operasyonel güvenlik

  - Dağıtım kimlik bilgilerini, cüzdan anahtarlarını, RPC kimlik bilgilerini ve izleme token'larını kaynak kontrolünden uzak tutun.
  - İmzalayıcı kullanılabilirliği, eski blockhash'ler, RPC hata oranı ve işlem başarısızlık oranı için sistem durumu kontrolleri ekleyin.
  - Harcama kaplarını, program allowlist'lerini veya compute-unit sınırlarını yükseltmeden önce açık manuel onay yolunu gerekli kılın.
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
