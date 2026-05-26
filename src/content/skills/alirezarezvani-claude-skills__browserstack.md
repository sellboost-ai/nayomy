---
name: "browserstack"
description_en: ">- Run tests on BrowserStack. Use when user mentions \"browserstack\", \"cross-browser\", \"cloud testing\", \"browser matrix\", \"test on safari\", \"test on firefox\", or \"browser compatibility\"."
description_tr: "BrowserStack'te testler çalıştırın. Kullanıcı \"browserstack\", \"cross-browser\", \"bulut testleme\", \"browser matrix\", \"safari'de test et\", \"firefox'ta test et\" veya \"browser uyumluluğu\" gibi ifadeler kullandığında tercih edin."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/browserstack/SKILL.md"
path: ".gemini/skills/browserstack/SKILL.md"
is_collection: false
body_length: 4276
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # BrowserStack Entegrasyonu

  Playwright testlerini BrowserStack'in bulut grid'inde çalıştırarak tarayıcı ve cihaz testlemesi yapın.

  ## Ön Koşullar

  Ortam değişkenleri ayarlanmalıdır:
  - `BROWSERSTACK_USERNAME` — BrowserStack kullanıcı adınız
  - `BROWSERSTACK_ACCESS_KEY` — erişim anahtarınız

  Ayarlanmadıysa, kullanıcıya [browserstack.com/accounts/settings](https://www.browserstack.com/accounts/settings) adresinden nasıl alacaklarını gösterin ve durdurun.

  ## Yetenekler

  ### 1. BrowserStack için Yapılandırma

  ```
  /pw:browserstack setup
  ```

  Adımlar:
  1. Mevcut `playwright.config.ts` dosyasını kontrol edin
  2. BrowserStack bağlantı seçeneklerini ekleyin:

  ```typescript
  // playwright.config.ts dosyasına ekleyin
  import { defineConfig } from '@playwright/test';

  const isBS = !!process.env.BROWSERSTACK_USERNAME;

  export default defineConfig({
    // ... mevcut konfigürasyon
    projects: isBS ? [
      {
        name: "chromelatestwindows-11",
        use: {
          connectOptions: {
            wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
              'browser': 'chrome',
              'browser_version': 'latest',
              'os': 'Windows',
              'os_version': '11',
              'browserstack.username': process.env.BROWSERSTACK_USERNAME,
              'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
            }))}`,
          },
        },
      },
      {
        name: "firefoxlatestwindows-11",
        use: {
          connectOptions: {
            wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
              'browser': 'playwright-firefox',
              'browser_version': 'latest',
              'os': 'Windows',
              'os_version': '11',
              'browserstack.username': process.env.BROWSERSTACK_USERNAME,
              'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
            }))}`,
          },
        },
      },
      {
        name: "webkitlatestos-x-ventura",
        use: {
          connectOptions: {
            wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
              'browser': 'playwright-webkit',
              'browser_version': 'latest',
              'os': 'OS X',
              'os_version': 'Ventura',
              'browserstack.username': process.env.BROWSERSTACK_USERNAME,
              'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
            }))}`,
          },
        },
      },
    ] : [
      // ... yerel projeler fallback
    ],
  });
  ```

  3. npm script ekleyin: `"test:e2e:cloud": "npx playwright test --project='chrome@*' --project='firefox@*' --project='webkit@*'"`

  ### 2. Testleri BrowserStack'ta Çalıştırın

  ```
  /pw:browserstack run
  ```

  Adımlar:
  1. Kimlik bilgilerinin ayarlandığını doğrulayın
  2. BrowserStack projeleriyle testleri çalıştırın:
     ```bash
     BROWSERSTACK_USERNAME=$BROWSERSTACK_USERNAME \
     BROWSERSTACK_ACCESS_KEY=$BROWSERSTACK_ACCESS_KEY \
     npx playwright test --project='chrome@*' --project='firefox@*'
     ```
  3. Yürütmeyi izleyin
  4. Tarayıcı başına sonuçları raporlayın

  ### 3. Build Sonuçlarını Alın

  ```
  /pw:browserstack results
  ```

  Adımlar:
  1. `browserstack_get_builds` MCP aracını çağırın
  2. En son build'in oturumlarını alın
  3. Her oturum için:
     - Durum (geçti/başarısız)
     - Tarayıcı ve işletim sistemi
     - Süre
     - Video URL'si
     - Log URL'leri
  4. Özet tablo olarak formatleyin

  ### 4. Kullanılabilir Tarayıcıları Kontrol Edin

  ```
  /pw:browserstack browsers
  ```

  Adımlar:
  1. `browserstack_get_browsers` MCP aracını çağırın
  2. Playwright uyumlu tarayıcıları filtreleyin
  3. Kullanılabilir tarayıcı/işletim sistemi kombinasyonlarını görüntüleyin

  ### 5. Yerel Testleme

  ```
  /pw:browserstack local
  ```

  Localhost veya güvenlik duvarının arkasındaki staging için testleme:
  1. BrowserStack Local'i yükleyin: `npm install -D browserstack-local`
  2. Konfigürasyona yerel tunnel ekleyin
  3. Kurulum talimatlarını sağlayın

  ## Kullanılan MCP Araçları

  | Araç | Ne Zaman |
  |---|---|
  | `browserstack_get_plan` | Hesap limitlerini kontrol edin |
  | `browserstack_get_browsers` | Kullanılabilir tarayıcıları listeleyin |
  | `browserstack_get_builds` | Son build'leri listeleyin |
  | `browserstack_get_sessions` | Bir build'deki oturumları alın |
  | `browserstack_get_session` | Oturum ayrıntılarını alın (video, loglar) |
  | `browserstack_update_session` | Geçti/başarısız olarak işaretleyin |
  | `browserstack_get_logs` | Metin/network loglarını alın |

  ## Çıktı

  - Tarayıcılar arası test sonuçları tablosu
  - Tarayıcı başına geçti/başarısız durumu
  - Video/ekran görüntüleri için BrowserStack dashboard'ına bağlantılar
  - Vurgulanan tarayıcıya özgü hataları
---

# BrowserStack Integration

Run Playwright tests on BrowserStack's cloud grid for cross-browser and cross-device testing.

## Prerequisites

Environment variables must be set:
- `BROWSERSTACK_USERNAME` — your BrowserStack username
- `BROWSERSTACK_ACCESS_KEY` — your access key

If not set, inform the user how to get them from [browserstack.com/accounts/settings](https://www.browserstack.com/accounts/settings) and stop.

## Capabilities

### 1. Configure for BrowserStack

```
/pw:browserstack setup
```

Steps:
1. Check current `playwright.config.ts`
2. Add BrowserStack connect options:

```typescript
// Add to playwright.config.ts
import { defineConfig } from '@playwright/test';

const isBS = !!process.env.BROWSERSTACK_USERNAME;

export default defineConfig({
  // ... existing config
  projects: isBS ? [
    {
      name: "chromelatestwindows-11",
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
            'browser': 'chrome',
            'browser_version': 'latest',
            'os': 'Windows',
            'os_version': '11',
            'browserstack.username': process.env.BROWSERSTACK_USERNAME,
            'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
          }))}`,
        },
      },
    },
    {
      name: "firefoxlatestwindows-11",
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
            'browser': 'playwright-firefox',
            'browser_version': 'latest',
            'os': 'Windows',
            'os_version': '11',
            'browserstack.username': process.env.BROWSERSTACK_USERNAME,
            'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
          }))}`,
        },
      },
    },
    {
      name: "webkitlatestos-x-ventura",
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
            'browser': 'playwright-webkit',
            'browser_version': 'latest',
            'os': 'OS X',
            'os_version': 'Ventura',
            'browserstack.username': process.env.BROWSERSTACK_USERNAME,
            'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
          }))}`,
        },
      },
    },
  ] : [
    // ... local projects fallback
  ],
});
```

3. Add npm script: `"test:e2e:cloud": "npx playwright test --project='chrome@*' --project='firefox@*' --project='webkit@*'"`

### 2. Run Tests on BrowserStack

```
/pw:browserstack run
```

Steps:
1. Verify credentials are set
2. Run tests with BrowserStack projects:
   ```bash
   BROWSERSTACK_USERNAME=$BROWSERSTACK_USERNAME \
   BROWSERSTACK_ACCESS_KEY=$BROWSERSTACK_ACCESS_KEY \
   npx playwright test --project='chrome@*' --project='firefox@*'
   ```
3. Monitor execution
4. Report results per browser

### 3. Get Build Results

```
/pw:browserstack results
```

Steps:
1. Call `browserstack_get_builds` MCP tool
2. Get latest build's sessions
3. For each session:
   - Status (pass/fail)
   - Browser and OS
   - Duration
   - Video URL
   - Log URLs
4. Format as summary table

### 4. Check Available Browsers

```
/pw:browserstack browsers
```

Steps:
1. Call `browserstack_get_browsers` MCP tool
2. Filter for Playwright-compatible browsers
3. Display available browser/OS combinations

### 5. Local Testing

```
/pw:browserstack local
```

For testing localhost or staging behind firewall:
1. Install BrowserStack Local: `npm install -D browserstack-local`
2. Add local tunnel to config
3. Provide setup instructions

## MCP Tools Used

| Tool | When |
|---|---|
| `browserstack_get_plan` | Check account limits |
| `browserstack_get_browsers` | List available browsers |
| `browserstack_get_builds` | List recent builds |
| `browserstack_get_sessions` | Get sessions in a build |
| `browserstack_get_session` | Get session details (video, logs) |
| `browserstack_update_session` | Mark pass/fail |
| `browserstack_get_logs` | Get text/network logs |

## Output

- Cross-browser test results table
- Per-browser pass/fail status
- Links to BrowserStack dashboard for video/screenshots
- Any browser-specific failures highlighted
