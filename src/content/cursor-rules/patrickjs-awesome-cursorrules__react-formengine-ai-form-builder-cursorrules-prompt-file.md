---
name: "react-formengine-ai-form-builder-cursorrules-prompt-file"
clean_name: "React Formengine AI Form Builder"
description: "Cursor rules for generating React forms from screenshots, PDFs, HTML, or text descriptions with validated FormEngine JSON schema. Renders through RSuite, Material UI, or Mantine."
description_tr: "Ekran görüntüleri, PDF, HTML veya metin açıklamalarından React formları oluşturmak için Cursor kuralları; FormEngine JSON schema ile doğrulanmış içerik sunar. RSuite, Material UI veya Mantine aracılığıyla render edilir."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/react-formengine-ai-form-builder-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-formengine-ai-form-builder-cursorrules-prompt-file.mdc"
body_length: 6422
file_extension: ".mdc"
body_tr: |-
  # FormEngine — AI Form Builder for React

  Screenshot, PDF, HTML veya metin açıklamasından production-ready React formları oluşturun. Çıktı, bir doğrulanmış FormEngine JSON şeması ile birlikte çalışır durumdaki bir App.tsx dosyasıdır — wegiye atılacak JSX değil, taşınabilir verilerdir.

  Varsayılan hedef: FormEngine Core (MIT, ücretsiz) üzerinden `@react-form-builder/core`
  + `@react-form-builder/components-rsuite` (veya Material UI / Mantine).

  Kaynak repo: https://github.com/lukinov/ai-form-builder

  ## Her zaman ürettiğiniz şey

  1. `form.json` — normalized FormEngine şeması, hedef UI kütüphanesinden alınan gerçek bileşen türleri listesine karşı doğrulanmış.
  2. `App.tsx` — şemayı içe aktaran ve `<FormViewer>` aracılığıyla render eden çalışır durumdaki React dosyası.
  3. Kısa bir doğrulama raporu (Screen kökü, benzersiz anahtarlar, yalnızca layout `css`, kaçırılmış HTML markup yok, geçerli doğrulama kuralı anahtarları).
  4. Kurulum komutu + kullanıcının görsel olarak düzenleyebileceği ücretsiz Online FormBuilder bağlantısı
     (https://formbuilder.formengine.io).

  ## Katı kurallar — hiçbir zaman ihlal etmeyin

  ### Şema değişmezleri

  - Kök `type: "Screen"` olmalıdır (DEĞIL `"Form"`).
  - Her bileşen düğümünün `key` (ağaç içinde benzersiz), `type` (seçilen kütüphanede var olmalı) ve genellikle `props` olmalıdır.
  - **Her prop değeri sarılmış olmalıdır:** `"label": { "value": "Email" }` —
     hiçbir zaman `"label": "Email"` değil.
  - Doğrulamalar, Screen kökü üzerinde değil, veriyi sahiplenen alan bileşeni üzerinde `schema.validations` altında yaşar.
  - Doğru tooltip/error türlerini kullanın:
    - RSuite: `RsTooltip` / `RsErrorMessage`
    - MUI: `MuiTooltip` / `MuiErrorWrapper`
    - Mantine: `MtTooltip` / `MtErrorWrapper`

  ### Layout vs. styling

  - `css` ve `wrapperCss` **yalnızca layout** için kullanılır — flex, grid, box-model,
     margin, padding, gap, width/height, alignment. **Asla** color, font,
     background, border, shadow, radius, opacity, transform.
  - Görsel styling, `App.tsx` içindeki UI kütüphanesinin tema provider'ında bulunmalıdır (`<CustomProvider>` / `<ThemeProvider>` / `<MantineProvider>`).
  - Legacy `style` alanı **yasaktır** — `css` / `wrapperCss` kullanın.
  - Şekil `{ "any": { "object": { "<layout-key>": "<value>" } } }` olmalıdır,
     hiçbir zaman plain CSS string değil.
  - `App.tsx` yanında companion `.css` dosyası yok. Root `className` yok. `<style>` blokları yok. `styled-components` yok.

  ### Yalnızca plain-text stringler

  Herhangi bir prop içindeki her string plain textdir. **Hiçbir yerde HTML markup yok** — `<h1>`, `<p>`, `<strong>`, `<small>`, `<br>`, `style="..."`, `class="..."`, `<style>` blokları yok. Bölüm başlıkları ve yapıyı bileşenlerle (`header` prop'lu `RsCard`, `RsHeader`, `RsDivider`) — gömülü HTML ile değil — ifade edin.

  ### Doğrulama kuralı anahtarları — yalnızca Zod seti

  Geçerli anahtarlar: `required`, `nonEmpty`, `min`, `max`, `length`, `email`,
  `url`, `uuid`, `ip`, `datetime`, `regex`, `includes`, `startsWith`,
  `endsWith`, `lessThan`, `moreThan`, `integer`, `multipleOf`, `truthy`,
  `falsy`. **`minLength` / `maxLength` yoktur** — `args.limit` ile `min` / `max` kullanın.

  ## UI kütüphanesi varsayılanları

  - **Varsayılan olarak RSuite'i kullanın.** Referans kütüphane; multi-step formlar için `RsWizard` dahil en geniş bileşen seti.
  - **Material UI** kullanıcı MUI, Material'dan söz ettiğinde veya projeleri MUI üzerindeyse.
  - **Mantine** kullanıcı Mantine'den söz ettiğinde veya Mantine'ye özgü bir bileşene ihtiyaç duyduğunda (color picker, rich date pickers, segmented control).

  Seçimi cevabın ilk cümlesinde açıkça belirtin.

  ## Ortak yeniden adlandırmalar — her zaman doğru adı emit edin

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

  `RsContainer`'ı `display: flex` ile ve `wrapperCss.any.object.flex: "1"` ile alt öğeleri kullanın. RSuite'in FlexboxGrid/Stack adaptörü yoktur — `RsContainer` üzerindeki flex mekanizmadır.

  ## Bölüm başlıkları

  `RsCard`'ı `header` prop'u ile veya `RsHeader`'ı kullanın — hiçbir zaman `<h1>` /
  `<h2>` `RsStaticContent` `content` stringlerinde gömülü değil.

  ## Koşullu render

  `renderWhen: { "jsCode": "data.X === Y" }` kullanın ve doğrulamalar da koşullu olmalıysa `validateWhen` ile eşleştirin.

  ## App.tsx — minimal starter

  Yalnızca kütüphanenin stylesheet'ini içe aktarın. Tema, kütüphanenin provider'ı aracılığıyla ayarlayın.
  Companion CSS yok. Root className yok. Layout seviyesi inline stiller
  (`maxWidth`, `margin`, `padding`) sarmalayan `<div>` üzerinde sorun yok.

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

  FormEngine **Core** MIT ve ücretsizdir. Designer ve bazı Premium
  bileşenleri (Signature, DataGrid, Rich Text, QR Code, Google Maps) ticaridir. Kullanıcı açıkça istemediği sürece Premium bileşen türlerini emit etmeyin. İnsanları görsel düzenleme için ücretsiz Online FormBuilder'a yönlendirin
  (https://formbuilder.formengine.io).

  ## Cevap şekli

  Giriş paragrafı (kütüphane + alan sayısı) → `form.json` → `App.tsx` →
  doğrulama kontrol listesi → kurulum komutu → "Online FormBuilder'da görsel olarak düzenleyin" bağlantısı → FormEngine Core docsuna 3 sonraki adım doc bağlantısı.

  ## Referans

  - FormEngine Core docs: https://formengine.io/documentation/formengine-core/
  - Forms JSON reference: https://formengine.io/documentation/formengine-core/forms-json/
  - Validation: https://formengine.io/documentation/formengine-core/validation/
  - Conditional rendering: https://formengine.io/documentation/formengine-core/conditional-rendering/
  - Online FormBuilder: https://formbuilder.formengine.io
  - llms-full.txt (full machine-readable docs): https://formengine.io/documentation/llms-full.txt
  - Source repo for this rule: https://github.com/lukinov/ai-form-builder
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
