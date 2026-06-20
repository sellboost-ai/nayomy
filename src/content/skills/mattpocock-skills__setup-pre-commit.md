---
name: "setup-pre-commit"
description_en: "Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing."
description_tr: "Mevcut repo'nuzda Husky pre-commit hooks'larını lint-staged (Prettier), type checking ve testlerle yapılandırın. Kullanıcı pre-commit hooks eklemek, Husky kurulum yapmak, lint-staged yapılandırmak ya da commit sırasında formatting/typechecking/testing eklemek istediğinde kullanın."
category: "Development"
repo: "mattpocock/skills"
stars: 137186
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/misc/setup-pre-commit/SKILL.md"
path: "skills/misc/setup-pre-commit/SKILL.md"
is_collection: false
body_length: 1974
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Pre-Commit Hooks Kurulumu
  
  ## Ne Kurulur
  
  - **Husky** pre-commit hook
  - **lint-staged** tüm staged dosyalarda Prettier çalıştırması
  - **Prettier** config (eksikse)
  - Pre-commit hook içinde **typecheck** ve **test** scriptleri
  
  ## Adımlar
  
  ### 1. Package manager'ı tespit et
  
  `package-lock.json` (npm), `pnpm-lock.yaml` (pnpm), `yarn.lock` (yarn), `bun.lockb` (bun) kontrol et. Hangisi varsa onu kullan. Emin değilsen npm'ye default yap.
  
  ### 2. Bağımlılıkları yükle
  
  devDependencies olarak yükle:
  
  ```
  husky lint-staged prettier
  ```
  
  ### 3. Husky'yi başlat
  
  ```bash
  npx husky init
  ```
  
  Bu `.husky/` dizini oluşturur ve package.json'a `prepare: "husky"` ekler.
  
  ### 4. `.husky/pre-commit` oluştur
  
  Bu dosyayı yaz (Husky v9+ için shebang gerekmez):
  
  ```
  npx lint-staged
  npm run typecheck
  npm run test
  ```
  
  **Uyarla**: `npm` yerine tespit edilen package manager'ı koy. Eğer repo'da package.json'da `typecheck` veya `test` scripti yoksa o satırları kaldır ve kullanıcıya bildir.
  
  ### 5. `.lintstagedrc` oluştur
  
  ```json
  {
    "*": "prettier --ignore-unknown --write"
  }
  ```
  
  ### 6. `.prettierrc` oluştur (eksikse)
  
  Sadece Prettier config yoksa oluştur. Şu defaultları kullan:
  
  ```json
  {
    "useTabs": false,
    "tabWidth": 2,
    "printWidth": 80,
    "singleQuote": false,
    "trailingComma": "es5",
    "semi": true,
    "arrowParens": "always"
  }
  ```
  
  ### 7. Doğrula
  
  - [ ] `.husky/pre-commit` var ve executable
  - [ ] `.lintstagedrc` var
  - [ ] package.json'daki `prepare` scripti `"husky"`
  - [ ] Prettier config var
  - [ ] `npx lint-staged` çalıştır ve çalışıp çalışmadığını doğrula
  
  ### 8. Commit et
  
  Tüm değişen/oluşturulan dosyaları stage et ve şu mesajla commit et: `Add pre-commit hooks (husky + lint-staged + prettier)`
  
  Bu yeni pre-commit hooks'ları çalıştıracak — her şeyin çalıştığını doğrulamak için iyi bir test.
  
  ## Notlar
  
  - Husky v9+ hook dosyalarında shebang gerektirmez
  - `prettier --ignore-unknown` Prettier'ın parse edemediği dosyaları atlar (resimler, vb.)
  - Pre-commit önce lint-staged'i (hızlı, sadece staged), sonra full typecheck ve testleri çalıştırır
---

# Setup Pre-Commit Hooks

## What This Sets Up

- **Husky** pre-commit hook
- **lint-staged** running Prettier on all staged files
- **Prettier** config (if missing)
- **typecheck** and **test** scripts in the pre-commit hook

## Steps

### 1. Detect package manager

Check for `package-lock.json` (npm), `pnpm-lock.yaml` (pnpm), `yarn.lock` (yarn), `bun.lockb` (bun). Use whichever is present. Default to npm if unclear.

### 2. Install dependencies

Install as devDependencies:

```
husky lint-staged prettier
```

### 3. Initialize Husky

```bash
npx husky init
```

This creates `.husky/` dir and adds `prepare: "husky"` to package.json.

### 4. Create `.husky/pre-commit`

Write this file (no shebang needed for Husky v9+):

```
npx lint-staged
npm run typecheck
npm run test
```

**Adapt**: Replace `npm` with detected package manager. If repo has no `typecheck` or `test` script in package.json, omit those lines and tell the user.

### 5. Create `.lintstagedrc`

```json
{
  "*": "prettier --ignore-unknown --write"
}
```

### 6. Create `.prettierrc` (if missing)

Only create if no Prettier config exists. Use these defaults:

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": false,
  "trailingComma": "es5",
  "semi": true,
  "arrowParens": "always"
}
```

### 7. Verify

- [ ] `.husky/pre-commit` exists and is executable
- [ ] `.lintstagedrc` exists
- [ ] `prepare` script in package.json is `"husky"`
- [ ] `prettier` config exists
- [ ] Run `npx lint-staged` to verify it works

### 8. Commit

Stage all changed/created files and commit with message: `Add pre-commit hooks (husky + lint-staged + prettier)`

This will run through the new pre-commit hooks — a good smoke test that everything works.

## Notes

- Husky v9+ doesn't need shebangs in hook files
- `prettier --ignore-unknown` skips files Prettier can't parse (images, etc.)
- The pre-commit runs lint-staged first (fast, staged-only), then full typecheck and tests
