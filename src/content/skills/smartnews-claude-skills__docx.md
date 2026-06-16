---
name: "docx"
description_en: "Comprehensive document creation, editing, and analysis with support for tracked changes, comments, formatting preservation, and text extraction. When Claude needs to work with professional documents (.docx files) for: (1) Creating new documents, (2) Modifying or editing content, (3) Working with tracked changes, (4) Adding comments, or any other document tasks"
category: "Document"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/document-skills/docx/SKILL.md"
path: "document-skills/docx/SKILL.md"
is_collection: false
body_length: 9699
has_scripts: true
has_references: false
has_examples: false
related_files: ["docx-js.md", "ooxml.md"]
body_tr: |-
  # DOCX oluşturma, düzenleme ve analiz

  ## Genel Bakış

  Sizden bir .docx dosyasının içeriğini oluşturmanız, düzenlemeniz veya analiz etmeniz istenebilir. Bir .docx dosyası esasen XML dosyaları ve diğer kaynakları içeren bir ZIP arşividir ve bu dosyaları okuyabilir veya düzenleyebilirsiniz. Farklı görevler için farklı araçlar ve iş akışları kullanılabilir.

  ## İş Akışı Karar Ağacı

  ### İçerik Okuma/Analiz
  Aşağıdaki "Metin çıkarma" veya "Ham XML erişimi" bölümlerini kullanın

  ### Yeni Belge Oluşturma
  "Word belgesi oluşturma" iş akışını kullanın

  ### Mevcut Belgeyi Düzenleme
  - **Kendi belgeniz + basit değişiklikler**
    "Temel OOXML düzenleme" iş akışını kullanın

  - **Başka birinin belgesi**
    **"Redline iş akışını"** kullanın (önerilen varsayılan)

  - **Yasal, akademik, ticari veya devlet belgeleri**
    **"Redline iş akışını"** kullanın (gerekli)

  ## İçerik okuma ve analiz

  ### Metin çıkarma
  Bir belgenin metin içeriğini okumanız gerekiyorsa, pandoc kullanarak belgeyi markdown'a dönüştürün. Pandoc, belge yapısını korumada mükemmel destek sağlar ve izlenen değişiklikleri gösterebilir:

  ```bash
  # Belgeyi markdown'a dönüştür - izlenen değişikliklerle
  pandoc --track-changes=all path-to-file.docx -o output.md
  # Seçenekler: --track-changes=accept/reject/all
  ```

  ### Ham XML erişimi
  Ham XML erişimi şu durumlar için gereklidir: yorumlar, karmaşık biçimlendirme, belge yapısı, gömülü medya ve meta veriler. Bu özelliklerden herhangi biri için bir belgeyi açmanız ve ham XML içeriğini okumanız gerekir.

  #### Dosya açma
  `python ooxml/scripts/unpack.py <office_file> <output_directory>`

  #### Anahtar dosya yapıları
  * `word/document.xml` - Ana belge içeriği
  * `word/comments.xml` - Belgedeki referans verilen yorumlar
  * `word/media/` - Gömülü görüntüler ve medya dosyaları
  * İzlenen değişiklikler `<w:ins>` (eklemeler) ve `<w:del>` (silmeler) etiketlerini kullanır

  ## Yeni Word belgesi oluşturma

  Sıfırdan yeni bir Word belgesi oluştururken, JavaScript/TypeScript kullanarak Word belgeleri oluşturmanıza olanak tanıyan **docx-js** kullanın.

  ### İş Akışı
  1. **ZORUNLU - TAM DOSYAYI OKU**: [`docx-js.md`](docx-js.md) dosyasını (~500 satır) başından sonuna kadar tamamen okuyun. **BU DOSYAYI OKURKEN HİÇBİR ARALIQ SINIRI KOYMAYINIZ.** Belge oluşturmaya başlamadan önce ayrıntılı söz dizimi, kritik biçimlendirme kuralları ve en iyi uygulamalar için tam dosya içeriğini okuyun.
  2. Document, Paragraph, TextRun bileşenlerini kullanarak bir JavaScript/TypeScript dosyası oluşturun (Tüm bağımlılıkların kurulu olduğunu varsayabilirsiniz, ancak kurulu değilse aşağıdaki bağımlılıklar bölümüne bakın)
  3. Packer.toBuffer() kullanarak .docx olarak dışa aktarın

  ## Mevcut Word belgesini düzenleme

  Mevcut bir Word belgesini düzenlerken, **Document kütüphanesini** (OOXML manipülasyonu için bir Python kütüphanesi) kullanın. Kütüphane altyapı kurulumunu otomatik olarak yönetir ve belge manipülasyonu için yöntemler sağlar. Karmaşık senaryolar için kütüphane aracılığıyla temel DOM'a doğrudan erişebilirsiniz.

  ### İş Akışı
  1. **ZORUNLU - TAM DOSYAYI OKU**: [`ooxml.md`](ooxml.md) dosyasını (~600 satır) başından sonuna kadar tamamen okuyun. **BU DOSYAYI OKURKEN HİÇBİR ARALIQ SINIRI KOYMAYINIZ.** Document kütüphanesi API'si ve doküman dosyalarını doğrudan düzenleme için XML desenleri hakkında tam dosya içeriğini okuyun.
  2. Belgeyi açın: `python ooxml/scripts/unpack.py <office_file> <output_directory>`
  3. Document kütüphanesini kullanarak bir Python betiği oluşturun ve çalıştırın (ooxml.md dosyasında "Document Library" bölümüne bakın)
  4. Son belgeyi paketleyin: `python ooxml/scripts/pack.py <input_directory> <office_file>`

  Document kütüphanesi, sık yapılan işlemler için yüksek seviyeli yöntemler ve karmaşık senaryolar için doğrudan DOM erişimi sağlar.

  ## Belge incelemesi için Redline iş akışı

  Bu iş akışı, OOXML'de uygulamadan önce markdown kullanarak kapsamlı izlenen değişiklikleri planlamanıza olanak tanır. **KRİTİK**: Tam izlenen değişiklikler için TÜM değişiklikleri sistematik olarak uygulamanız gerekir.

  **Toplu İşleme Stratejisi**: İlgili değişiklikleri 3-10 değişikliklik batches'lerine gruplayın. Bu, hata ayıklamayı yönetilebilir hale getirir ve verimliliği korur. Her batch'i bir sonrakine geçmeden önce test edin.

  **Prensip: Minimal, Kesin Düzenlemeler**
  İzlenen değişiklikleri uygularken, yalnızca gerçekten değişen metni işaretleyin. Değişmeyen metni tekrarlamak, düzenlemeleri incelemeyi zorlaştırır ve profesyonelce görünmez. Değişiklikleri şu şekilde bölün: [değişmeyen metin] + [silme] + [ekleme] + [değişmeyen metin]. Orijinal run'ın RSID'sini değişmeyen metin için koruyun, orijinalden `<w:r>` öğesini çıkararak ve yeniden kullanarak.

  Örnek - Bir cümlede "30 gün"ü "60 gün"e değiştirme:
  ```python
  # KÖTÜ - Tüm cümleyi değiştirir
  '<w:del><w:r><w:delText>The term is 30 days.</w:delText></w:r></w:del><w:ins><w:r><w:t>The term is 60 days.</w:t></w:r></w:ins>'

  # İYİ - Yalnızca değişeni işaretler, değişmeyen metin için orijinal <w:r> korur
  '<w:r w:rsidR="00AB12CD"><w:t>The term is </w:t></w:r><w:del><w:r><w:delText>30</w:delText></w:r></w:del><w:ins><w:r><w:t>60</w:t></w:r></w:ins><w:r w:rsidR="00AB12CD"><w:t> days.</w:t></w:r>'
  ```

  ### İzlenen değişiklikler iş akışı

  1. **Markdown temsilini alın**: Belgeyi izlenen değişiklikler korunarak markdown'a dönüştürün:
     ```bash
     pandoc --track-changes=all path-to-file.docx -o current.md
     ```

  2. **Değişiklikleri tanımlayın ve gruplandırın**: Belgeyi gözden geçirin ve gerekli TÜM değişiklikleri tanımlayın, bunları mantıksal batch'lere organize edin:

     **Konum yöntemleri** (XML'de değişiklikleri bulmak için):
     - Bölüm/başlık numaraları (örn. "Section 3.2", "Article IV")
     - Numaralı ise paragraf tanımlayıcıları
     - Benzersiz çevre metni ile Grep desenleri
     - Belge yapısı (örn. "ilk paragraf", "imza bloğu")
     - **Markdown satır numaralarını KULLANMAYINIZ** - XML yapısı ile eşleşmezler

     **Batch organizasyonu** (batch başına 3-10 ilgili değişiklik gruplandırın):
     - Bölüme göre: "Batch 1: Section 2 değişiklikleri", "Batch 2: Section 5 güncellemeleri"
     - Türe göre: "Batch 1: Tarih düzeltmeleri", "Batch 2: Taraf adı değişiklikleri"
     - Karmaşıklığa göre: Basit metin değiştirmelerle başlayın, sonra karmaşık yapısal değişikliklere geçin
     - Sıralı: "Batch 1: Sayfalar 1-3", "Batch 2: Sayfalar 4-6"

  3. **Belgeler okuyun ve açın**:
     - **ZORUNLU - TAM DOSYAYI OKU**: [`ooxml.md`](ooxml.md) dosyasını (~600 satır) başından sonuna kadar tamamen okuyun. **BU DOSYAYI OKURKEN HİÇBİR ARALIQ SINIRI KOYMAYINIZ.** "Document Library" ve "Tracked Change Patterns" bölümlerine özel dikkat verin.
     - **Belgeyi açın**: `python ooxml/scripts/unpack.py <file.docx> <dir>`
     - **Önerilen RSID'yi not edin**: Unpack betiği, izlenen değişiklikler için kullanmanız gereken bir RSID önerecektir. Bu RSID'yi 4b adımında kullanmak için kopyalayın.

  4. **Değişiklikleri batch'ler halinde uygulayın**: Değişiklikleri mantıksal olarak gruplandırın (bölüme göre, türe göre veya yakınlığa göre) ve bunları tek bir betik içinde birlikte uygulayın. Bu yaklaşım:
     - Hata ayıklamayı kolaylaştırır (küçük batch = hataları izole etmesi daha kolay)
     - Artımlı ilerlemeyi sağlar
     - Verimliliği korur (3-10 değişiklik batch boyutu iyi çalışır)

     **Önerilen batch gruplamaları:**
     - Belge bölümüne göre (örn. "Section 3 değişiklikleri", "Tanımlar", "Sona erme maddesi")
     - Değişiklik türüne göre (örn. "Tarih değişiklikleri", "Taraf adı güncellemeleri", "Yasal terim değişiklikleri")
     - Yakınlığa göre (örn. "Sayfalar 1-3'teki değişiklikler", "Belgenin ilk yarısındaki değişiklikler")

     İlgili her değişiklik batch'i için:

     **a. Metni XML'ye eşleyin**: Metnin `<w:r>` öğeleri arasında nasıl bölündüğünü doğrulamak için `word/document.xml` içinde Grep yapın.

     **b. Betik oluşturun ve çalıştırın**: Düğümleri bulmak için `get_node` kullanın, değişiklikleri uygulayın, ardından `doc.save()` çalıştırın. ooxml.md dosyasındaki **"Document Library"** bölümüne desenleri görmek için bakın.

     **Not**: Bir betik yazmadan hemen önce her zaman `word/document.xml` dosyasında Grep yapın, geçerli satır numaralarını ve metin içeriğini doğrulamak için. Satır numaraları her betik çalıştırısından sonra değişir.

  5. **Belgeyi paketleyin**: Tüm batch'ler tamamlandıktan sonra, açılmış dizini .docx'a geri dönüştürün:
     ```bash
     python ooxml/scripts/pack.py unpacked reviewed-document.docx
     ```

  6. **Son doğrulama**: Tam belgenin kapsamlı bir kontrolünü yapın:
     - Son belgeyi markdown'a dönüştürün:
       ```bash
       pandoc --track-changes=all reviewed-document.docx -o verification.md
       ```
     - TÜM değişikliklerin doğru şekilde uygulandığını doğrulayın:
       ```bash
       grep "original phrase" verification.md  # Bulmaması gerekir
       grep "replacement phrase" verification.md  # Bulması gerekir
       ```
     - İstenmeyen değişikliklerin tanıtılmadığını kontrol edin


  ## Belgeleri Görüntülere Dönüştürme

  Word belgelerini görsel olarak analiz etmek için iki aşamalı bir işlem kullanarak bunları görüntülere dönüştürün:

  1. **DOCX'i PDF'ye dönüştürün**:
     ```bash
     soffice --headless --convert-to pdf document.docx
     ```

  2. **PDF sayfalarını JPEG görüntülere dönüştürün**:
     ```bash
     pdftoppm -jpeg -r 150 document.pdf page
     ```
     Bu, `page-1.jpg`, `page-2.jpg` vb. gibi dosyalar oluşturur.

  Seçenekler:
  - `-r 150`: Çözünürlüğü 150 DPI'ye ayarlar (kalite/boyut dengesini ayarlamak için)
  - `-jpeg`: JPEG formatında çıkış (tercih ederseniz PNG için `-png` kullanın)
  - `-f N`: Dönüştürülecek ilk sayfa (örn. `-f 2` sayfa 2'den başlar)
  - `-l N`: Dönüştürülecek son sayfa (örn. `-l 5` sayfa 5'te durur)
  - `page`: Çıkış dosyaları için ön ek

  Belirli bir aralık örneği:
  ```bash
  pdftoppm -jpeg -r 150 -f 2 -l 5 document.pdf page  # Yalnızca sayfalar 2-5'i dönüştür
  ```

  ## Kod Stili Yönergeleri
  **ÖNEMLİ**: DOCX işlemleri için kod üretirken:
  - Özlü kod yazın
  - Ayrıntılı değişken adlarını ve gereksiz işlemleri önleyin
  - Gereksiz yazdırma ifadelerini önleyin

  ## Bağımlılıklar

  Gerekli bağımlılıklar (yoksa kurun):

  - **pandoc**: `sudo apt-get install pandoc` (metin çıkarma için)
  - **docx**: `npm install -g docx` (yeni belgeler oluşturmak için)
  - **LibreOffice**: `sudo apt-get install libreoffice` (PDF dönüştürme için)
  - **Poppler**: `sudo apt-get install poppler-utils` (pdftoppm'yi PDF'den görüntülere dönüştürmek için)
  - **defusedxml**: `pip install defusedxml` (güvenli XML ayrıştırma için)
---

# DOCX creation, editing, and analysis

## Overview

A user may ask you to create, edit, or analyze the contents of a .docx file. A .docx file is essentially a ZIP archive containing XML files and other resources that you can read or edit. You have different tools and workflows available for different tasks.

## Workflow Decision Tree

### Reading/Analyzing Content
Use "Text extraction" or "Raw XML access" sections below

### Creating New Document
Use "Creating a new Word document" workflow

### Editing Existing Document
- **Your own document + simple changes**
  Use "Basic OOXML editing" workflow

- **Someone else's document**
  Use **"Redlining workflow"** (recommended default)

- **Legal, academic, business, or government docs**
  Use **"Redlining workflow"** (required)

## Reading and analyzing content

### Text extraction
If you just need to read the text contents of a document, you should convert the document to markdown using pandoc. Pandoc provides excellent support for preserving document structure and can show tracked changes:

```bash
# Convert document to markdown with tracked changes
pandoc --track-changes=all path-to-file.docx -o output.md
# Options: --track-changes=accept/reject/all
```

### Raw XML access
You need raw XML access for: comments, complex formatting, document structure, embedded media, and metadata. For any of these features, you'll need to unpack a document and read its raw XML contents.

#### Unpacking a file
`python ooxml/scripts/unpack.py <office_file> <output_directory>`

#### Key file structures
* `word/document.xml` - Main document contents
* `word/comments.xml` - Comments referenced in document.xml
* `word/media/` - Embedded images and media files
* Tracked changes use `<w:ins>` (insertions) and `<w:del>` (deletions) tags

## Creating a new Word document

When creating a new Word document from scratch, use **docx-js**, which allows you to create Word documents using JavaScript/TypeScript.

### Workflow
1. **MANDATORY - READ ENTIRE FILE**: Read [`docx-js.md`](docx-js.md) (~500 lines) completely from start to finish. **NEVER set any range limits when reading this file.** Read the full file content for detailed syntax, critical formatting rules, and best practices before proceeding with document creation.
2. Create a JavaScript/TypeScript file using Document, Paragraph, TextRun components (You can assume all dependencies are installed, but if not, refer to the dependencies section below)
3. Export as .docx using Packer.toBuffer()

## Editing an existing Word document

When editing an existing Word document, use the **Document library** (a Python library for OOXML manipulation). The library automatically handles infrastructure setup and provides methods for document manipulation. For complex scenarios, you can access the underlying DOM directly through the library.

### Workflow
1. **MANDATORY - READ ENTIRE FILE**: Read [`ooxml.md`](ooxml.md) (~600 lines) completely from start to finish. **NEVER set any range limits when reading this file.** Read the full file content for the Document library API and XML patterns for directly editing document files.
2. Unpack the document: `python ooxml/scripts/unpack.py <office_file> <output_directory>`
3. Create and run a Python script using the Document library (see "Document Library" section in ooxml.md)
4. Pack the final document: `python ooxml/scripts/pack.py <input_directory> <office_file>`

The Document library provides both high-level methods for common operations and direct DOM access for complex scenarios.

## Redlining workflow for document review

This workflow allows you to plan comprehensive tracked changes using markdown before implementing them in OOXML. **CRITICAL**: For complete tracked changes, you must implement ALL changes systematically.

**Batching Strategy**: Group related changes into batches of 3-10 changes. This makes debugging manageable while maintaining efficiency. Test each batch before moving to the next.

**Principle: Minimal, Precise Edits**
When implementing tracked changes, only mark text that actually changes. Repeating unchanged text makes edits harder to review and appears unprofessional. Break replacements into: [unchanged text] + [deletion] + [insertion] + [unchanged text]. Preserve the original run's RSID for unchanged text by extracting the `<w:r>` element from the original and reusing it.

Example - Changing "30 days" to "60 days" in a sentence:
```python
# BAD - Replaces entire sentence
'<w:del><w:r><w:delText>The term is 30 days.</w:delText></w:r></w:del><w:ins><w:r><w:t>The term is 60 days.</w:t></w:r></w:ins>'

# GOOD - Only marks what changed, preserves original <w:r> for unchanged text
'<w:r w:rsidR="00AB12CD"><w:t>The term is </w:t></w:r><w:del><w:r><w:delText>30</w:delText></w:r></w:del><w:ins><w:r><w:t>60</w:t></w:r></w:ins><w:r w:rsidR="00AB12CD"><w:t> days.</w:t></w:r>'
```

### Tracked changes workflow

1. **Get markdown representation**: Convert document to markdown with tracked changes preserved:
   ```bash
   pandoc --track-changes=all path-to-file.docx -o current.md
   ```

2. **Identify and group changes**: Review the document and identify ALL changes needed, organizing them into logical batches:

   **Location methods** (for finding changes in XML):
   - Section/heading numbers (e.g., "Section 3.2", "Article IV")
   - Paragraph identifiers if numbered
   - Grep patterns with unique surrounding text
   - Document structure (e.g., "first paragraph", "signature block")
   - **DO NOT use markdown line numbers** - they don't map to XML structure

   **Batch organization** (group 3-10 related changes per batch):
   - By section: "Batch 1: Section 2 amendments", "Batch 2: Section 5 updates"
   - By type: "Batch 1: Date corrections", "Batch 2: Party name changes"
   - By complexity: Start with simple text replacements, then tackle complex structural changes
   - Sequential: "Batch 1: Pages 1-3", "Batch 2: Pages 4-6"

3. **Read documentation and unpack**:
   - **MANDATORY - READ ENTIRE FILE**: Read [`ooxml.md`](ooxml.md) (~600 lines) completely from start to finish. **NEVER set any range limits when reading this file.** Pay special attention to the "Document Library" and "Tracked Change Patterns" sections.
   - **Unpack the document**: `python ooxml/scripts/unpack.py <file.docx> <dir>`
   - **Note the suggested RSID**: The unpack script will suggest an RSID to use for your tracked changes. Copy this RSID for use in step 4b.

4. **Implement changes in batches**: Group changes logically (by section, by type, or by proximity) and implement them together in a single script. This approach:
   - Makes debugging easier (smaller batch = easier to isolate errors)
   - Allows incremental progress
   - Maintains efficiency (batch size of 3-10 changes works well)

   **Suggested batch groupings:**
   - By document section (e.g., "Section 3 changes", "Definitions", "Termination clause")
   - By change type (e.g., "Date changes", "Party name updates", "Legal term replacements")
   - By proximity (e.g., "Changes on pages 1-3", "Changes in first half of document")

   For each batch of related changes:

   **a. Map text to XML**: Grep for text in `word/document.xml` to verify how text is split across `<w:r>` elements.

   **b. Create and run script**: Use `get_node` to find nodes, implement changes, then `doc.save()`. See **"Document Library"** section in ooxml.md for patterns.

   **Note**: Always grep `word/document.xml` immediately before writing a script to get current line numbers and verify text content. Line numbers change after each script run.

5. **Pack the document**: After all batches are complete, convert the unpacked directory back to .docx:
   ```bash
   python ooxml/scripts/pack.py unpacked reviewed-document.docx
   ```

6. **Final verification**: Do a comprehensive check of the complete document:
   - Convert final document to markdown:
     ```bash
     pandoc --track-changes=all reviewed-document.docx -o verification.md
     ```
   - Verify ALL changes were applied correctly:
     ```bash
     grep "original phrase" verification.md  # Should NOT find it
     grep "replacement phrase" verification.md  # Should find it
     ```
   - Check that no unintended changes were introduced


## Converting Documents to Images

To visually analyze Word documents, convert them to images using a two-step process:

1. **Convert DOCX to PDF**:
   ```bash
   soffice --headless --convert-to pdf document.docx
   ```

2. **Convert PDF pages to JPEG images**:
   ```bash
   pdftoppm -jpeg -r 150 document.pdf page
   ```
   This creates files like `page-1.jpg`, `page-2.jpg`, etc.

Options:
- `-r 150`: Sets resolution to 150 DPI (adjust for quality/size balance)
- `-jpeg`: Output JPEG format (use `-png` for PNG if preferred)
- `-f N`: First page to convert (e.g., `-f 2` starts from page 2)
- `-l N`: Last page to convert (e.g., `-l 5` stops at page 5)
- `page`: Prefix for output files

Example for specific range:
```bash
pdftoppm -jpeg -r 150 -f 2 -l 5 document.pdf page  # Converts only pages 2-5
```

## Code Style Guidelines
**IMPORTANT**: When generating code for DOCX operations:
- Write concise code
- Avoid verbose variable names and redundant operations
- Avoid unnecessary print statements

## Dependencies

Required dependencies (install if not available):

- **pandoc**: `sudo apt-get install pandoc` (for text extraction)
- **docx**: `npm install -g docx` (for creating new documents)
- **LibreOffice**: `sudo apt-get install libreoffice` (for PDF conversion)
- **Poppler**: `sudo apt-get install poppler-utils` (for pdftoppm to convert PDF to images)
- **defusedxml**: `pip install defusedxml` (for secure XML parsing)
