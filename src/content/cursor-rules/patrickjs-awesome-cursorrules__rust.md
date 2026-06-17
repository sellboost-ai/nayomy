---
name: "rust"
clean_name: "Rust"
description: "Rust best practices for Solana smart contract development using Anchor framework and Solana SDK"
description_tr: "Anchor framework ve Solana SDK ile Solana akıllı kontratı geliştirme için Rust en iyi uygulamaları"
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/rust.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/rust.mdc"
body_length: 4230
file_extension: ".mdc"
body_tr: |-
  # Rust + Solana (Anchor) En İyi Uygulamalar

  ## Program Yapısı
  - Solana programlarını `Anchor` framework standartlarını kullanarak yapılandırın
  - Program entrypoint mantığını `lib.rs` içine yerleştirin, `main.rs` içine değil
  - Handler'ları modüllere ayırın (örn. `initialize`, `update`, `close`)
  - State tanımlarını, hataları, instruction'ları ve utils'i ayırın
  - Yeniden kullanılabilir mantığı bir `utils` modülü altında gruplayın (örn. account doğrulama)
  - Program ID'yi tanımlamak için `declare_id!()` kullanın

  ## Anchor Framework
  - Tüm instruction context'leri için `#[derive(Accounts)]` kullanın
  - Constraint macro'larını kullanarak strict account doğrulama yapın (örn. `#[account(mut)]`, `seeds`, `bump`)
  - Tüm state struct'larını `#[account]` ve `#[derive(AnchorSerialize, AnchorDeserialize)]` ile tanımlayın
  - Manuel deserialization'dan kaçınmak için `Init`, `Close`, `Realloc`, `Mut` ve constraint macro'larını tercih edin
  - Doğrulanmış context account'larına erişmek için `ctx.accounts` kullanın
  - CPI (Cross-Program Invocation) çağrılarını Anchor'un CPI helper'ları aracılığıyla yönetin

  ## Serialization
  - Zincir üstü veri için **Borsh** veya Anchor'un custom serializer'ını kullanın (Serde değil)
  - Packed struct'lar için her zaman `#[account(zero_copy)]` veya `#[repr(C)]` ekleyin
  - Floating point type'larından kaçının — `u64`, `u128` veya fixed-point math kullanın
  - Kira maliyetlerini azaltmak için kullanılmayan account'ları sıfırlandırın veya kapatın

  ## Test
  - TypeScript'te Anchor'un Mocha + Chai setup'ını kullanarak test yazın (`tests/*.ts`)
  - Deploy edilen contract'ları yüklemek için `anchor.workspace.MyProgram` kullanın
  - Başarısız tx'leri incelemek için `provider.simulate()` kullanın
  - Yerel validator çalıştırın (`anchor test`) ve test'ler arasında sıfırlayın
  - Wallet'lara `provider.connection.requestAirdrop(...)` ile SOL verin
  - `tx.confirmation.logMessages` kullanarak program log'larını doğrulayın

  ## Solana SDK (Manual)
  - Anchor kullanmadığınızda `solana_program` crate'ini kullanın (bare-metal program'lar)
  - Account'ları `AccountInfo`, `try_from_slice_unchecked` kullanarak dikkatle deserialize edin
  - Hafif debugging log'ları için `solana_program::msg!` kullanın
  - Account'ları `is_signer`, `is_writable`, `key == expected` aracılığıyla doğrulayın
  - Asla panic etmeyin! `ProgramError::Custom(u32)` veya `ErrorCode` enum'larını kullanın

  ## Security Desenleri
  - Her zaman `msg.sender`/signer'ı `account_info.is_signer` ile doğrulayın
  - Replay attack'larını `seeds`, `bump` ve unique PDA'lar aracılığıyla önleyin
  - Reallocate veya deserialize etmeden önce strict size kontrolü yapın
  - Güvensiz unchecked casting'ten kaçının; Anchor deserialization'ı tercih edin
  - CPI'lar için `target_program`'ı beklenen program ID'ye karşı doğrulayın
  - Randomness kullanırken timestamp'lere hiç güvenmeyin — oracle'ları veya off-chain VRF'leri kullanın

  ## Performans
  - Büyük account'lar için zero-copy deserialization'ı tercih edin
  - Compute kullanımını minimalize edin; loop'lardan ve recursion'dan kaçının
  - Instruction ortasında memory reallocation'dan kaçının
  - Sıkı layout için `#[account(zero_copy)]` ve `#[repr(packed)]` kullanın
  - `solana logs` ve `anchor run` ile compute unit'lerini profile edin

  ## Dev İş Akışı
  - Projeleri scaffold'lamak için `anchor init` kullanın
  - Ön-uç kullanımı için Anchor IDL desteği ekleyin (JSON ABI)
  - `anchor build`, `anchor deploy`, `anchor test`'i tutarlı şekilde kullanın
  - devnet/mainnet/localnet için ayrı `Anchor.toml` environment'ları kullanın
  - Tüm Rust kodunu `cargo fmt` ile formatlandırın, `cargo clippy` ile lint yapın
  - `Cargo.lock`'u `programs/` altına kontrol edin ancak root'a değil

  ## Dokümantasyon
  - Tüm instruction'lar ve account'lar için `///` Rust doc comment'leri kullanın
  - Her instruction için doc örnekleri ekleyin
  - PDA derivation mantığını ve bump seed beklentilerini dokümante edin
  - Test komutları ve deployment adımları ile güncel `README.md` saklayın

  ## Wallet & Network Yönetimi
  - Test'lerde signer doğrulaması için `anchorProvider.wallet.publicKey` kullanın
  - Keypair'leri hardcode etmeyin — env-based loading'i kullanın (`process.env.ANCHOR_WALLET`)
  - Açık `cluster` target'ları ile deploy edin (`localnet`, `devnet`, `mainnet`)
  - Program ID değişikliklerini yayınlamak için `anchor keys sync` kullanın
  - Ön-uç ile paylaşmak için `target/idl/` ve `target/types/` öğesini commit edin

  ## CI/CD & Deploy
  - `solana-cli`, `anchor-cli` ve `node` yüklü GitHub Actions'ı kullanın
  - Her PR için CI'da `anchor test` çalıştırın
  - Production deploy'unda `solana program deploy` öğesini explicit `--program-id` ile kullanın
  - IDL'leri merkezi bir registre'ye yükleyin (örn. GitHub, IPFS veya `anchor.cloud`)
---

# Rust + Solana (Anchor) Best Practices

## Program Structure
- Structure Solana programs using `Anchor` framework standards
- Place program entrypoint logic in `lib.rs`, not `main.rs`
- Organize handlers into modules (e.g., `initialize`, `update`, `close`)
- Separate state definitions, errors, instructions, and utils
- Group reusable logic under a `utils` module (e.g., account validation)
- Use `declare_id!()` to define program ID

## Anchor Framework
- Use `#[derive(Accounts)]` for all instruction contexts
- Validate accounts strictly using constraint macros (e.g., `#[account(mut)]`, `seeds`, `bump]`)
- Define all state structs with `#[account]` and `#[derive(AnchorSerialize, AnchorDeserialize)]`
- Prefer `Init`, `Close`, `Realloc`, `Mut`, and constraint macros to avoid manual deserialization
- Use `ctx.accounts` to access validated context accounts
- Handle CPI (Cross-Program Invocation) calls via Anchor’s CPI helpers

## Serialization
- Use **Borsh** or Anchor's custom serializer (not Serde) for on-chain data
- Always include `#[account(zero_copy)]` or `#[repr(C)]` for packed structures
- Avoid floating point types — use `u64`, `u128`, or fixed-point math
- Zero out or close unused accounts to reduce rent costs

## Testing
- Write tests in TypeScript using Anchor’s Mocha + Chai setup (`tests/*.ts`)
- Use `anchor.workspace.MyProgram` to load deployed contracts
- Use `provider.simulate()` to inspect failed txs
- Spin up a local validator (`anchor test`) and reset between tests
- Airdrop SOL to wallets with `provider.connection.requestAirdrop(...)`
- Validate program logs using `tx.confirmation.logMessages`

## Solana SDK (Manual)
- Use `solana_program` crate when not using Anchor (bare-metal programs)
- Carefully deserialize accounts using `AccountInfo`, `try_from_slice_unchecked`
- Use `solana_program::msg!` for lightweight debugging logs
- Verify accounts via `is_signer`, `is_writable`, `key == expected`
- Never panic! Use `ProgramError::Custom(u32)` or `ErrorCode` enums

## Security Patterns
- Always validate `msg.sender`/signer with `account_info.is_signer`
- Prevent replay attacks via `seeds`, `bump`, and unique PDAs
- Use strict size checks before reallocating or deserializing
- Avoid unsafe unchecked casting; prefer Anchor deserialization
- For CPIs, validate `target_program` against expected program ID
- When using randomness, never rely on timestamps — use oracles or off-chain VRFs

## Performance
- Prefer zero-copy deserialization when accounts are large
- Minimize compute usage; avoid loops and recursion
- Avoid memory reallocations mid-instruction
- Use `#[account(zero_copy)]` and `#[repr(packed)]` for tight layout
- Profile compute units with `solana logs` and `anchor run`

## Dev Workflow
- Use `anchor init` to scaffold projects
- Add Anchor IDL support for front-end usage (JSON ABI)
- Use `anchor build`, `anchor deploy`, `anchor test` consistently
- Use separate `Anchor.toml` environments for devnet/mainnet/localnet
- Format all Rust code with `cargo fmt`, lint with `cargo clippy`
- Keep `Cargo.lock` checked into `programs/` but not root

## Documentation
- Use `///` Rust doc comments for all instructions and accounts
- Include doc examples for each instruction
- Document PDA derivation logic and bump seed expectations
- Maintain up-to-date `README.md` with test commands and deployment steps

## Wallet & Network Handling
- Use `anchorProvider.wallet.publicKey` for signer verification in tests
- Do not hardcode keypairs — use env-based loading (`process.env.ANCHOR_WALLET`)
- Deploy with clear `cluster` targets (`localnet`, `devnet`, `mainnet`)
- Use `anchor keys sync` to propagate program ID changes
- Commit `target/idl/` and `target/types/` to share with front end

## CI/CD & Deploy
- Use GitHub Actions with `solana-cli`, `anchor-cli`, and `node` installed
- Run `anchor test` in CI for every PR
- Use `solana program deploy` with explicit `--program-id` on production deploys
- Upload IDLs to a central registry (e.g., GitHub, IPFS, or `anchor.cloud`)
