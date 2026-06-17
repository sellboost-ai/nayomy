---
name: "react-formengine-ai-form-builder-cursorrules-prompt-file"
clean_name: "React Formengine AI Form Builder"
description: "Cursor rules for generating React forms from screenshots, PDFs, HTML, or text descriptions with validated FormEngine JSON schema. Renders through RSuite, Material UI, or Mantine."
description_tr: "Ekran görüntüsü, PDF, HTML veya metin açıklamalarından React formları oluşturmak için Cursor rules. FormEngine JSON schema ile doğrulanmış ve RSuite, Material UI veya Mantine üzerinden render edilir."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/react-formengine-ai-form-builder-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-formengine-ai-form-builder-cursorrules-prompt-file.mdc"
body_length: 6422
file_extension: ".mdc"
body_tr: |-
  # FormEngine — React için AI Form Builder

  Bir ekran görüntüsü, PDF, HTML veya metin açıklamasından üretime hazır React formları oluşturun. Çıktı, doğrulanmış bir FormEngine JSON şeması artı çalıştırılabilir bir App.tsx'dir — tek kullanımlık JSX değil, taşınabilir veri.

  Varsayılan hedef: `@react-form-builder/core` aracılığıyla FormEngine Core (MIT, ücretsiz)
  + `@react-form-builder/components-rsuite` (veya Material UI / Mantine).

  Kaynak depo: https://github.com/lukinov/ai-form-builder

  ## Her zaman ürettikleriniz

  1. `form.json` — normalleştirilmiş bir FormEngine şeması, hedef UI kütüphanesinden bileşen türlerinin gerçek listesine karşı doğrulanmış.
  2. `App.tsx` — şemayı içe aktaran ve `<FormViewer>` aracılığıyla render eden çalıştırılabilir bir React dosyası.
  3. Kısa bir doğrulama raporu (Screen kökü, benzersiz anahtarlar, yalnızca düzen `css`, gizli HTML markup yok, geçerli doğrulama kuralı anahtarları).
  4. Kurulum komutu + kullanıcının görsel olarak ince ayar yapabilmesi için ücretsiz Online FormBuilder bağlantısı
     (https://formbuilder.formengine.io).

  ## Sert kurallar — asla ihlal etmeyin

  ### Şema değişmezleri

  - Kök `type: "Screen"` dir (`"Form"` değil).
  - Her bileşen düğümünün `key` (ağaç içinde benzersiz), `type` (seçilen kütüphanede var olmalı) ve genellikle `props` vardır.
  - **Her prop değeri sarılmıştır:** `"label": { "value": "Email" }` —
  asla `"label": "Email"` değil.
  - Doğrulamalar, Screen kökü değil, verilere sahip olan alan bileşeni üzerinde `schema.validations` altında yer alır.
  - Doğru tooltip/error türlerini kullanın:
    - RSuite: `RsTooltip` / `RsErrorMessage`
    - MUI: `MuiTooltip` / `MuiErrorWrapper`
    - Mantine: `MtTooltip` / `MtErrorWrapper`

  ### Düzen vs. stil

  - `css` ve `wrapperCss` **yalnızca düzen** içindir — flex, grid, box-model,
  margin, padding, gap, width/height, alignment. **Asla** renk, yazı tipi,
  background, border, shadow, radius, opacity, transform.
  - Görsel stil, App.tsx içindeki UI kütüphanesinin tema sağlayıcısına ait
  (`<CustomProvider>` / `<ThemeProvider>` / `<MantineProvider>`).
  - Eski `style` alanı **yasaktır** — `css` / `wrapperCss` kullanın.
  - Şekil `{ "any": { "object": { "<layout-key>": "<value>" } } }`,
  hiçbir zaman düz CSS string değil.
  - App.tsx'in yanında eşlik eden `.css` dosyası yok. Kök `className` yok. `<style>` blokları yok. `styled-components` yok.

  ### Yalnızca düz metin dizileri

  Herhangi bir prop içindeki her dize düz metindir. **Hiçbir yerde hiçbir HTML markup türü yok** — `<h1>`, `<p>`, `<strong>`, `<small>`, `<br>`, `style="..."`, `class="..."`, `<style>` bloğu yok. Bölüm başlıklarını ve yapıyı bileşenlerle (`header` prop ile `RsCard`, `RsHeader`, `RsDivider`) ifade edin — gömülü HTML değil.

  ### Doğrulama kuralı anahtarları — yalnızca Zod seti

  Geçerli anahtarlar: `required`, `nonEmpty`, `min`, `max`, `length`, `email`,
  `url`, `uuid`, `ip`, `datetime`, `regex`, `includes`, `startsWith`,
  `endsWith`, `lessThan`, `moreThan`, `integer`, `multipleOf`, `truthy`,
  `falsy`. **`minLength` / `maxLength` yoktur** — `args.limit` ile `min` / `max` kullanın.

  ## UI kütüphane varsayılanları

  - **Varsayılan olarak RSuite kullanın.** Referans kütüphane; çok adımlı formlar için `RsWizard` dahil olmak üzere en geniş bileşen seti.
  - Kullanıcı MUI, Material'dan bahsettiğinde veya projesi MUI'de olduğunda **Material UI**.
  - Kullanıcı Mantine'den bahsettiğinde veya Mantine'ye özgü bir bileşene ihtiyaç duyduğunda **Mantine** (renk seçici, zengin tarih seçiciler, segmentli kontrol).

  Seçimi yanıtın ilk cümlesinde açıkça belirtin.

  ## Yaygın yeniden adlandırmalar — her zaman doğru adı yayınlayın

  | Yanlış | Doğru |
  |---|---|
  | `Form` | `Screen` |
  | `RsForm` | `RsCard` veya `RsContainer` |
  | `RsSelectPicker` | `RsDropdown` |
  | `RsRadio` | `RsRadioGroup` |
  | `RsTextarea` | `RsTextArea` (büyük A) |
  | `RsInputNumber` | `RsNumberFormat` |
  | `RsUpload` | `RsUploader` |
  | `MtDatePickerSingle` | `MtDatePicker` |
  | `MtTextField` | `MtTextInput` |

  ## Yan yana alanlar

  `display: flex` ile `RsContainer` ve `wrapperCss.any.object.flex: "1"` ile children kullanın. RSuite'nin FlexboxGrid/Stack adaptörü yok — `RsContainer` üzerinde flex mekanizmadır.

  ## Bölüm başlıkları

  `header` prop ile `RsCard` veya `RsHeader` kullanın — `RsStaticContent` `content` dizileri içine gömülü `<h1>` / `<h2>` asla.

  ## Koşullu render etme

  `renderWhen: { "jsCode": "data.X === Y" }` kullanın ve doğrulamalar da koşullu olmalıysa `validateWhen` ile eşleştirin.

  ## App.tsx — minimal başlangıç

  Yalnızca kütüphanenin stil sayfasını içe aktarın. Tema, kütüphanenin sağlayıcısı aracılığıyla. Eşlik eden CSS yok. Kök className yok. Düzen düzeyinde satır içi stiller
  (`maxWidth`, `margin`, `padding`) sarmalayıcı `<div>` üzerinde sorun değil.

  ```tsx
  import "rsuite/dist/rsuite.min.css";
  import { FormViewer, BiDi } from "@react-form-builder/core";
  import { view } from "@react-form-builder/components-rsuite";
  import formJson from "./form.json";

  const getForm = () => JSON.stringify(formJson);

  export default function App() {
    return (
      <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
        <FormViewer
          view={view}
          getForm={getForm}
          onFormDataChange={(d) => console.log(d)}
          biDi={BiDi.LTR}
        />
      </div>
    );
  }
  ```

  ## Ücretsiz vs. ticari — MIT tarafında kalın

  FormEngine **Core** MIT ve ücretsizdir. Designer ve bazı Premium bileşenler (Signature, DataGrid, Rich Text, QR Code, Google Maps) ticaridir. Kullanıcı açıkça talep etmedikçe Premium bileşen türlerini yayınlamayın. Kişileri görsel düzenleme için ücretsiz Online FormBuilder'a yönlendirin
  (https://formbuilder.formengine.io).

  ## Yanıt şekli

  Açılış paragrafı (kütüphane + alan sayısı) → `form.json` → `App.tsx` →
  doğrulama kontrol listesi → kurulum komutu → "Online FormBuilder'da görsel olarak ince ayar yapın" bağlantısı → FormEngine Core docsuna 3 sonraki adım bağlantısı.

  ## Referans

  - FormEngine Core docsları: https://formengine.io/documentation/formengine-core/
  - Forms JSON referansı: https://formengine.io/documentation/formengine-core/forms-json/
  - Doğrulama: https://formengine.io/documentation/formengine-core/validation/
  - Koşullu render etme: https://formengine.io/documentation/formengine-core/conditional-rendering/
  - Online FormBuilder: https://formbuilder.formengine.io
  - llms-full.txt (tam makine tarafından okunabilir docslar): https://formengine.io/documentation/llms-full.txt
  - Bu kural için kaynak depo: https://github.com/lukinov/ai-form-builder
---

# FormEngine — AI Form Builder for React

Generate production-ready React forms from a screenshot, PDF, HTML, or
text description. The output is a validated FormEngine JSON schema plus
a runnable App.tsx — portable data, not throwaway JSX.

Default target: FormEngine Core (MIT, free) via `@react-form-builder/core`
+ `@react-form-builder/components-rsuite` (or Material UI / Mantine).

Source repo: https://github.com/lukinov/ai-form-builder

## What you produce — every time

1. `form.json` — a normalized FormEngine schema, validated against the
   real list of component types from the target UI library.
2. `App.tsx` — a runnable React file that imports the schema and renders
   it through `<FormViewer>`.
3. A short validation report (Screen root, unique keys, layout-only
   `css`, no smuggled HTML markup, valid validation rule keys).
4. Install command + a link to the free Online FormBuilder
   (https://formbuilder.formengine.io) so the user can tweak visually.

## Hard rules — never violate

### Schema invariants

- Root is `type: "Screen"` (NOT `"Form"`).
- Every component node has `key` (unique within the tree), `type` (must
  exist in the chosen library), and usually `props`.
- **Every prop value is wrapped:** `"label": { "value": "Email" }` —
  never `"label": "Email"`.
- Validations live under `schema.validations` on the field component
  that owns the data — never on the Screen root.
- Use the correct tooltip/error types:
  - RSuite: `RsTooltip` / `RsErrorMessage`
  - MUI: `MuiTooltip` / `MuiErrorWrapper`
  - Mantine: `MtTooltip` / `MtErrorWrapper`

### Layout vs. styling

- `css` and `wrapperCss` are **layout-only** — flex, grid, box-model,
  margin, padding, gap, width/height, alignment. **Never** color, font,
  background, border, shadow, radius, opacity, transform.
- Visual styling belongs in the UI library's theme provider in
  `App.tsx` (`<CustomProvider>` / `<ThemeProvider>` / `<MantineProvider>`).
- The legacy `style` field is **forbidden** — use `css` / `wrapperCss`.
- The shape is `{ "any": { "object": { "<layout-key>": "<value>" } } }`,
  never a plain CSS string.
- No companion `.css` file alongside `App.tsx`. No root `className`. No
  `<style>` blocks. No `styled-components`.

### Plain-text strings only

Every string inside any prop is plain text. **No HTML markup of any
kind**, anywhere — no `<h1>`, `<p>`, `<strong>`, `<small>`, `<br>`, no
`style="..."`, no `class="..."`, no `<style>` block. Express section
headings and structure with components (`RsCard` with `header` prop,
`RsHeader`, `RsDivider`) — not embedded HTML.

### Validation rule keys — Zod set only

Valid keys: `required`, `nonEmpty`, `min`, `max`, `length`, `email`,
`url`, `uuid`, `ip`, `datetime`, `regex`, `includes`, `startsWith`,
`endsWith`, `lessThan`, `moreThan`, `integer`, `multipleOf`, `truthy`,
`falsy`. There is **no `minLength` / `maxLength`** — use `min` / `max`
with `args.limit`.

## UI library defaults

- **Default to RSuite.** Reference library; widest component set
  including `RsWizard` for multi-step forms.
- **Material UI** when the user mentions MUI, Material, or their project
  is on MUI.
- **Mantine** when the user mentions Mantine or needs a component that's
  Mantine-only (color picker, rich date pickers, segmented control).

State the choice explicitly in the first sentence of the response.

## Common renames — always emit the right name

| Wrong | Right |
|---|---|
| `Form` | `Screen` |
| `RsForm` | `RsCard` or `RsContainer` |
| `RsSelectPicker` | `RsDropdown` |
| `RsRadio` | `RsRadioGroup` |
| `RsTextarea` | `RsTextArea` (capital A) |
| `RsInputNumber` | `RsNumberFormat` |
| `RsUpload` | `RsUploader` |
| `MtDatePickerSingle` | `MtDatePicker` |
| `MtTextField` | `MtTextInput` |

## Side-by-side fields

Use `RsContainer` with `display: flex` and children with
`wrapperCss.any.object.flex: "1"`. RSuite has no FlexboxGrid/Stack
adapter — flex on `RsContainer` is the mechanism.

## Section headings

Use `RsCard` with the `header` prop, or `RsHeader` — never `<h1>` /
`<h2>` embedded in `RsStaticContent` `content` strings.

## Conditional rendering

Use `renderWhen: { "jsCode": "data.X === Y" }` and pair with
`validateWhen` if validations should also be conditional.

## App.tsx — minimal starter

Import only the library's stylesheet. Theme via the library's provider.
No companion CSS. No root className. Layout-level inline styles
(`maxWidth`, `margin`, `padding`) on the wrapping `<div>` are fine.

```tsx
import "rsuite/dist/rsuite.min.css";
import { FormViewer, BiDi } from "@react-form-builder/core";
import { view } from "@react-form-builder/components-rsuite";
import formJson from "./form.json";

const getForm = () => JSON.stringify(formJson);

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <FormViewer
        view={view}
        getForm={getForm}
        onFormDataChange={(d) => console.log(d)}
        biDi={BiDi.LTR}
      />
    </div>
  );
}
```

## Free vs. commercial — stay on the MIT side

FormEngine **Core** is MIT and free. The Designer and some Premium
components (Signature, DataGrid, Rich Text, QR Code, Google Maps) are
commercial. Don't emit Premium component types unless the user
explicitly asks. Direct people to the free Online FormBuilder
(https://formbuilder.formengine.io) for visual editing.

## Response shape

Lead paragraph (library + field count) → `form.json` → `App.tsx` →
validation checklist → install command → "tweak visually in the Online
FormBuilder" link → 3 next-step doc links into FormEngine Core docs.

## Reference

- FormEngine Core docs: https://formengine.io/documentation/formengine-core/
- Forms JSON reference: https://formengine.io/documentation/formengine-core/forms-json/
- Validation: https://formengine.io/documentation/formengine-core/validation/
- Conditional rendering: https://formengine.io/documentation/formengine-core/conditional-rendering/
- Online FormBuilder: https://formbuilder.formengine.io
- llms-full.txt (full machine-readable docs): https://formengine.io/documentation/llms-full.txt
- Source repo for this rule: https://github.com/lukinov/ai-form-builder
