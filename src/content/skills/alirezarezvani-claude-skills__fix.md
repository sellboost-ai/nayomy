---
name: "fix"
description_en: ">- Fix failing or flaky Playwright tests. Use when user says \"fix test\", \"flaky test\", \"test failing\", \"debug test\", \"test broken\", \"test passes sometimes\", or \"intermittent failure\"."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/fix/SKILL.md"
path: ".gemini/skills/fix/SKILL.md"
is_collection: false
body_length: 2832
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Başarısız veya Değişken Testleri Düzeltme

  Playwright testinin başarısız olduğu veya aralıklı olarak geçtiği durumları sistematik bir sınıflandırma kullanarak tanılayın ve düzeltin.

  ## Giriş

  `$ARGUMENTS` şunları içerir:
  - Bir test dosyası yolu: `e2e/login.spec.ts`
  - Bir test adı: `"should redirect after login"`
  - Bir açıklama: `"the checkout test fails in CI but passes locally"`

  ## Adımlar

  ### 1. Hatayı Yeniden Oluşturun

  Hatayı yakalamak için testi çalıştırın:

  ```bash
  npx playwright test <file> --reporter=list
  ```

  Test geçerse, muhtemelen değişkendir. Burn-in çalıştırın:

  ```bash
  npx playwright test <file> --repeat-each=10 --reporter=list
  ```

  Hâlâ geçerse, paralel çalışanlarla deneyin:

  ```bash
  npx playwright test --fully-parallel --workers=4 --repeat-each=5
  ```

  ### 2. Trace'i Yakalayın

  Tam tracing ile çalıştırın:

  ```bash
  npx playwright test <file> --trace=on --retries=0
  ```

  Trace çıktısını okuyun. Trace dosyalarını analiz etmek için `/debug` kullanın.

  ### 3. Hatayı Kategorize Edin

  Bu beceri dizininden `flaky-taxonomy.md` dosyasını yükleyin.

  Her başarısız test dört kategoriden birine düşer:

  | Kategori | Semptom | Tanı |
  |---|---|---|
  | **Zamanlama/Async** | Her yerde aralıklı olarak başarısız olur | `--repeat-each=20` yerel olarak yeniden üretir |
  | **Test Yalıtımı** | Suite içinde başarısız, tek başına geçer | `--workers=1 --grep "test name"` geçer |
  | **Ortam** | CI'da başarısız, yerel olarak geçer | CI vs yerel ekran görüntüleri/trace'leri karşılaştırın |
  | **Altyapı** | Rastgele, herhangi bir desen yok | Hata browser dahili bileşenlerine referans verir |

  ### 4. Hedefli Düzeltme Uygulayın

  **Zamanlama/Async:**
  - `waitForTimeout()` yerine web-first assertions kullanın
  - Eksik Playwright çağrılarına `await` ekleyin
  - Assert etmeden önce belirli network yanıtlarını bekleyin
  - Elemanlarla etkileşimde bulunmadan önce `toBeVisible()` kullanın

  **Test Yalıtımı:**
  - Testler arasında mutable paylaşılan state'i kaldırın
  - API veya fixtures aracılığıyla test başına test verisi oluşturun
  - Test verisi için benzersiz tanımlayıcılar (zaman damgaları, rastgele stringler) kullanın
  - Database state sızıntılarını kontrol edin

  **Ortam:**
  - Yerel ve CI arasında viewport boyutlarını eşleştirin
  - Ekran görüntülerinde font rendering farklarını hesaba katın
  - CI ortamıyla eşleştirmek için yerel olarak `docker` kullanın
  - Saat dilimi bağımlı assertionları kontrol edin

  **Altyapı:**
  - Yavaş CI koşucuları için timeout'ı artırın
  - CI config'ine retry'ları ekleyin (`retries: 2`)
  - Browser OOM'u kontrol edin (paralel çalışanları azaltın)
  - Browser bağımlılıklarının yüklü olduğundan emin olun

  ### 5. Düzeltmeyi Doğrulayın

  Kararlılığı onaylamak için testi 10 kez çalıştırın:

  ```bash
  npx playwright test <file> --repeat-each=10 --reporter=list
  ```

  Hepsi 10'u geçmeli. Birisi başarısız olursa, adım 3'e dönün.

  ### 6. Yeniden Oluşmayı Önleyin

  Öneriniz:
  - Henüz yoksa `retries: 2` ile CI'a ekleyin
  - Config'te `trace: 'on-first-retry'` etkinleştirin
  - Düzeltme desenini projenin test kuralları dokümantasyonuna ekleyin

  ## Çıktı

  - Root cause kategorisi ve spesifik sorun
  - Uygulanan düzeltme (diff ile)
  - Doğrulama sonucu (10/10 geçer)
  - Yeniden oluşmayı önleme önerisi
---

# Fix Failing or Flaky Tests

Diagnose and fix a Playwright test that fails or passes intermittently using a systematic taxonomy.

## Input

`$ARGUMENTS` contains:
- A test file path: `e2e/login.spec.ts`
- A test name: ""should redirect after login"`
- A description: `"the checkout test fails in CI but passes locally"`

## Steps

### 1. Reproduce the Failure

Run the test to capture the error:

```bash
npx playwright test <file> --reporter=list
```

If the test passes, it's likely flaky. Run burn-in:

```bash
npx playwright test <file> --repeat-each=10 --reporter=list
```

If it still passes, try with parallel workers:

```bash
npx playwright test --fully-parallel --workers=4 --repeat-each=5
```

### 2. Capture Trace

Run with full tracing:

```bash
npx playwright test <file> --trace=on --retries=0
```

Read the trace output. Use `/debug` to analyze trace files if available.

### 3. Categorize the Failure

Load `flaky-taxonomy.md` from this skill directory.

Every failing test falls into one of four categories:

| Category | Symptom | Diagnosis |
|---|---|---|
| **Timing/Async** | Fails intermittently everywhere | `--repeat-each=20` reproduces locally |
| **Test Isolation** | Fails in suite, passes alone | `--workers=1 --grep "test name"` passes |
| **Environment** | Fails in CI, passes locally | Compare CI vs local screenshots/traces |
| **Infrastructure** | Random, no pattern | Error references browser internals |

### 4. Apply Targeted Fix

**Timing/Async:**
- Replace `waitForTimeout()` with web-first assertions
- Add `await` to missing Playwright calls
- Wait for specific network responses before asserting
- Use `toBeVisible()` before interacting with elements

**Test Isolation:**
- Remove shared mutable state between tests
- Create test data per-test via API or fixtures
- Use unique identifiers (timestamps, random strings) for test data
- Check for database state leaks

**Environment:**
- Match viewport sizes between local and CI
- Account for font rendering differences in screenshots
- Use `docker` locally to match CI environment
- Check for timezone-dependent assertions

**Infrastructure:**
- Increase timeout for slow CI runners
- Add retries in CI config (`retries: 2`)
- Check for browser OOM (reduce parallel workers)
- Ensure browser dependencies are installed

### 5. Verify the Fix

Run the test 10 times to confirm stability:

```bash
npx playwright test <file> --repeat-each=10 --reporter=list
```

All 10 must pass. If any fail, go back to step 3.

### 6. Prevent Recurrence

Suggest:
- Add to CI with `retries: 2` if not already
- Enable `trace: 'on-first-retry'` in config
- Add the fix pattern to project's test conventions doc

## Output

- Root cause category and specific issue
- The fix applied (with diff)
- Verification result (10/10 passes)
- Prevention recommendation
