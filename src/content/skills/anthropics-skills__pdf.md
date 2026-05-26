---
name: "pdf"
description_en: "Use this skill whenever the user wants to do anything with PDF files. This includes reading or extracting text/tables from PDFs, combining or merging multiple PDFs into one, splitting PDFs apart, rotating pages, adding watermarks, creating new PDFs, filling PDF forms, encrypting/decrypting PDFs, extracting images, and OCR on scanned PDFs to make them searchable. If the user mentions a .pdf file or"
description_tr: "PDF dosyalarıyla ilgili her türlü işlem için bu skill'i kullanın. Metin ve tablo çıkarma, birden fazla PDF birleştirme, bölme, sayfa döndürme, filigran ekleme, yeni PDF oluşturma, form doldurma, şifreleme/şifre çözme, görsel çıkarma ve taranmış PDF'lerde OCR işlemleri dahil olmak üzere tüm PDF operasyonlarını destekler. Kullanıcı .pdf dosyası bahsettiğinde bu skill otomatik olarak devreye girer."
category: "Document"
repo: "anthropics/skills"
stars: 140618
url: "https://github.com/anthropics/skills/blob/HEAD/skills/pdf/SKILL.md"
path: "skills/pdf/SKILL.md"
is_collection: false
body_length: 7511
has_scripts: true
has_references: false
has_examples: false
related_files: ["forms.md", "reference.md"]
body_tr: |-
  # PDF İşleme Kılavuzu

  ## Genel Bakış

  Bu kılavuz, Python kütüphaneleri ve komut satırı araçlarını kullanarak temel PDF işleme operasyonlarını kapsar. Gelişmiş özellikler, JavaScript kütüphaneleri ve ayrıntılı örnekler için bkz. REFERENCE.md. Bir PDF formu doldurmanız gerekiyorsa, FORMS.md dosyasını okuyun ve talimatlarını izleyin.

  ## Hızlı Başlangıç

  ```python
  from pypdf import PdfReader, PdfWriter

  # PDF'i oku
  reader = PdfReader("document.pdf")
  print(f"Pages: {len(reader.pages)}")

  # Metni çıkar
  text = ""
  for page in reader.pages:
      text += page.extract_text()
  ```

  ## Python Kütüphaneleri

  ### pypdf - Temel İşlemler

  #### PDF'leri Birleştir
  ```python
  from pypdf import PdfWriter, PdfReader

  writer = PdfWriter()
  for pdf_file in ["doc1.pdf", "doc2.pdf", "doc3.pdf"]:
      reader = PdfReader(pdf_file)
      for page in reader.pages:
          writer.add_page(page)

  with open("merged.pdf", "wb") as output:
      writer.write(output)
  ```

  #### PDF'i Böl
  ```python
  reader = PdfReader("input.pdf")
  for i, page in enumerate(reader.pages):
      writer = PdfWriter()
      writer.add_page(page)
      with open(f"page_{i+1}.pdf", "wb") as output:
          writer.write(output)
  ```

  #### Metadata Çıkar
  ```python
  reader = PdfReader("document.pdf")
  meta = reader.metadata
  print(f"Title: {meta.title}")
  print(f"Author: {meta.author}")
  print(f"Subject: {meta.subject}")
  print(f"Creator: {meta.creator}")
  ```

  #### Sayfaları Döndür
  ```python
  reader = PdfReader("input.pdf")
  writer = PdfWriter()

  page = reader.pages[0]
  page.rotate(90)  # Saat yönünde 90 derece döndür
  writer.add_page(page)

  with open("rotated.pdf", "wb") as output:
      writer.write(output)
  ```

  ### pdfplumber - Metin ve Tablo Çıkarma

  #### Düzen Koruyan Metin Çıkar
  ```python
  import pdfplumber

  with pdfplumber.open("document.pdf") as pdf:
      for page in pdf.pages:
          text = page.extract_text()
          print(text)
  ```

  #### Tabloları Çıkar
  ```python
  with pdfplumber.open("document.pdf") as pdf:
      for i, page in enumerate(pdf.pages):
          tables = page.extract_tables()
          for j, table in enumerate(tables):
              print(f"Table {j+1} on page {i+1}:")
              for row in table:
                  print(row)
  ```

  #### Gelişmiş Tablo Çıkarma
  ```python
  import pandas as pd

  with pdfplumber.open("document.pdf") as pdf:
      all_tables = []
      for page in pdf.pages:
          tables = page.extract_tables()
          for table in tables:
              if table:  # Tablo boş değilse kontrol et
                  df = pd.DataFrame(table[1:], columns=table[0])
                  all_tables.append(df)

  # Tüm tabloları birleştir
  if all_tables:
      combined_df = pd.concat(all_tables, ignore_index=True)
      combined_df.to_excel("extracted_tables.xlsx", index=False)
  ```

  ### reportlab - PDF Oluştur

  #### Temel PDF Oluşturma
  ```python
  from reportlab.lib.pagesizes import letter
  from reportlab.pdfgen import canvas

  c = canvas.Canvas("hello.pdf", pagesize=letter)
  width, height = letter

  # Metin ekle
  c.drawString(100, height - 100, "Hello World!")
  c.drawString(100, height - 120, "This is a PDF created with reportlab")

  # Çizgi ekle
  c.line(100, height - 140, 400, height - 140)

  # Kaydet
  c.save()
  ```

  #### Birden Fazla Sayfaya Sahip PDF Oluştur
  ```python
  from reportlab.lib.pagesizes import letter
  from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
  from reportlab.lib.styles import getSampleStyleSheet

  doc = SimpleDocTemplate("report.pdf", pagesize=letter)
  styles = getSampleStyleSheet()
  story = []

  # İçerik ekle
  title = Paragraph("Report Title", styles['Title'])
  story.append(title)
  story.append(Spacer(1, 12))

  body = Paragraph("This is the body of the report. " * 20, styles['Normal'])
  story.append(body)
  story.append(PageBreak())

  # Sayfa 2
  story.append(Paragraph("Page 2", styles['Heading1']))
  story.append(Paragraph("Content for page 2", styles['Normal']))

  # PDF oluştur
  doc.build(story)
  ```

  #### Alt İndis ve Üst İndis

  **ÖNEMLİ**: ReportLab PDF'lerinde asla Unicode alt indis/üst indis karakterleri (₀₁₂₃₄₅₆₇₈₉, ⁰¹²³⁴⁵⁶⁷⁸⁹) kullanmayın. Yerleşik yazı tipleri bu glifleri içermez ve siyah kutular olarak render edilir.

  Bunun yerine, Paragraph nesnelerinde ReportLab'ın XML işaret etiketlerini kullanın:
  ```python
  from reportlab.platypus import Paragraph
  from reportlab.lib.styles import getSampleStyleSheet

  styles = getSampleStyleSheet()

  # Alt indisler: <sub> etiketini kullan
  chemical = Paragraph("H<sub>2</sub>O", styles['Normal'])

  # Üst indisler: <super> etiketini kullan
  squared = Paragraph("x<super>2</super> + y<super>2</super>", styles['Normal'])
  ```

  Canvas üzerine çizilen metin (Paragraph nesneleri değil) için Unicode alt/üst indisler kullanmak yerine font boyutunu ve konumunu manuel olarak ayarlayın.

  ## Komut Satırı Araçları

  ### pdftotext (poppler-utils)
  ```bash
  # Metni çıkar
  pdftotext input.pdf output.txt

  # Düzeni koruyan metin çıkar
  pdftotext -layout input.pdf output.txt

  # Belirli sayfaları çıkar
  pdftotext -f 1 -l 5 input.pdf output.txt  # Sayfalar 1-5
  ```

  ### qpdf
  ```bash
  # PDF'leri birleştir
  qpdf --empty --pages file1.pdf file2.pdf -- merged.pdf

  # Sayfaları böl
  qpdf input.pdf --pages . 1-5 -- pages1-5.pdf
  qpdf input.pdf --pages . 6-10 -- pages6-10.pdf

  # Sayfaları döndür
  qpdf input.pdf output.pdf --rotate=+90:1  # Sayfa 1'i 90 derece döndür

  # Şifreyi kaldır
  qpdf --password=mypassword --decrypt encrypted.pdf decrypted.pdf
  ```

  ### pdftk (varsa)
  ```bash
  # Birleştir
  pdftk file1.pdf file2.pdf cat output merged.pdf

  # Böl
  pdftk input.pdf burst

  # Döndür
  pdftk input.pdf rotate 1east output rotated.pdf
  ```

  ## Yaygın Görevler

  ### Taranmış PDF'lerden Metin Çıkar
  ```python
  # Gerekli: pip install pytesseract pdf2image
  import pytesseract
  from pdf2image import convert_from_path

  # PDF'i resimlere çevir
  images = convert_from_path('scanned.pdf')

  # Her sayfada OCR yap
  text = ""
  for i, image in enumerate(images):
      text += f"Page {i+1}:\n"
      text += pytesseract.image_to_string(image)
      text += "\n\n"

  print(text)
  ```

  ### Filigran Ekle
  ```python
  from pypdf import PdfReader, PdfWriter

  # Filigran oluştur (veya mevcut olanı yükle)
  watermark = PdfReader("watermark.pdf").pages[0]

  # Tüm sayfaları uygula
  reader = PdfReader("document.pdf")
  writer = PdfWriter()

  for page in reader.pages:
      page.merge_page(watermark)
      writer.add_page(page)

  with open("watermarked.pdf", "wb") as output:
      writer.write(output)
  ```

  ### Resimleri Çıkar
  ```bash
  # pdfimages kullanma (poppler-utils)
  pdfimages -j input.pdf output_prefix

  # Bu tüm resimleri output_prefix-000.jpg, output_prefix-001.jpg vb. olarak çıkarır
  ```

  ### Parola Koruması
  ```python
  from pypdf import PdfReader, PdfWriter

  reader = PdfReader("input.pdf")
  writer = PdfWriter()

  for page in reader.pages:
      writer.add_page(page)

  # Parola ekle
  writer.encrypt("userpassword", "ownerpassword")

  with open("encrypted.pdf", "wb") as output:
      writer.write(output)
  ```

  ## Hızlı Referans

  | Görev | En İyi Araç | Komut/Kod |
  |------|-----------|--------------|
  | PDF'leri birleştir | pypdf | `writer.add_page(page)` |
  | PDF'leri böl | pypdf | Her sayfa için ayrı dosya |
  | Metni çıkar | pdfplumber | `page.extract_text()` |
  | Tabloları çıkar | pdfplumber | `page.extract_tables()` |
  | PDF oluştur | reportlab | Canvas veya Platypus |
  | Komut satırında birleştir | qpdf | `qpdf --empty --pages ...` |
  | Taranmış PDF'lerden OCR | pytesseract | Önce resme çevir |
  | PDF formu doldur | pdf-lib veya pypdf (bkz. FORMS.md) | Bkz. FORMS.md |

  ## Sonraki Adımlar

  - Gelişmiş pypdfium2 kullanımı için bkz. REFERENCE.md
  - JavaScript kütüphaneleri (pdf-lib) için bkz. REFERENCE.md
  - Bir PDF formu doldurmanız gerekiyorsa, FORMS.md dosyasındaki talimatları izleyin
  - Sorun giderme kılavuzları için bkz. REFERENCE.md
---

# PDF Processing Guide

## Overview

This guide covers essential PDF processing operations using Python libraries and command-line tools. For advanced features, JavaScript libraries, and detailed examples, see REFERENCE.md. If you need to fill out a PDF form, read FORMS.md and follow its instructions.

## Quick Start

```python
from pypdf import PdfReader, PdfWriter

# Read a PDF
reader = PdfReader("document.pdf")
print(f"Pages: {len(reader.pages)}")

# Extract text
text = ""
for page in reader.pages:
    text += page.extract_text()
```

## Python Libraries

### pypdf - Basic Operations

#### Merge PDFs
```python
from pypdf import PdfWriter, PdfReader

writer = PdfWriter()
for pdf_file in ["doc1.pdf", "doc2.pdf", "doc3.pdf"]:
    reader = PdfReader(pdf_file)
    for page in reader.pages:
        writer.add_page(page)

with open("merged.pdf", "wb") as output:
    writer.write(output)
```

#### Split PDF
```python
reader = PdfReader("input.pdf")
for i, page in enumerate(reader.pages):
    writer = PdfWriter()
    writer.add_page(page)
    with open(f"page_{i+1}.pdf", "wb") as output:
        writer.write(output)
```

#### Extract Metadata
```python
reader = PdfReader("document.pdf")
meta = reader.metadata
print(f"Title: {meta.title}")
print(f"Author: {meta.author}")
print(f"Subject: {meta.subject}")
print(f"Creator: {meta.creator}")
```

#### Rotate Pages
```python
reader = PdfReader("input.pdf")
writer = PdfWriter()

page = reader.pages[0]
page.rotate(90)  # Rotate 90 degrees clockwise
writer.add_page(page)

with open("rotated.pdf", "wb") as output:
    writer.write(output)
```

### pdfplumber - Text and Table Extraction

#### Extract Text with Layout
```python
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    for page in pdf.pages:
        text = page.extract_text()
        print(text)
```

#### Extract Tables
```python
with pdfplumber.open("document.pdf") as pdf:
    for i, page in enumerate(pdf.pages):
        tables = page.extract_tables()
        for j, table in enumerate(tables):
            print(f"Table {j+1} on page {i+1}:")
            for row in table:
                print(row)
```

#### Advanced Table Extraction
```python
import pandas as pd

with pdfplumber.open("document.pdf") as pdf:
    all_tables = []
    for page in pdf.pages:
        tables = page.extract_tables()
        for table in tables:
            if table:  # Check if table is not empty
                df = pd.DataFrame(table[1:], columns=table[0])
                all_tables.append(df)

# Combine all tables
if all_tables:
    combined_df = pd.concat(all_tables, ignore_index=True)
    combined_df.to_excel("extracted_tables.xlsx", index=False)
```

### reportlab - Create PDFs

#### Basic PDF Creation
```python
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

c = canvas.Canvas("hello.pdf", pagesize=letter)
width, height = letter

# Add text
c.drawString(100, height - 100, "Hello World!")
c.drawString(100, height - 120, "This is a PDF created with reportlab")

# Add a line
c.line(100, height - 140, 400, height - 140)

# Save
c.save()
```

#### Create PDF with Multiple Pages
```python
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet

doc = SimpleDocTemplate("report.pdf", pagesize=letter)
styles = getSampleStyleSheet()
story = []

# Add content
title = Paragraph("Report Title", styles['Title'])
story.append(title)
story.append(Spacer(1, 12))

body = Paragraph("This is the body of the report. " * 20, styles['Normal'])
story.append(body)
story.append(PageBreak())

# Page 2
story.append(Paragraph("Page 2", styles['Heading1']))
story.append(Paragraph("Content for page 2", styles['Normal']))

# Build PDF
doc.build(story)
```

#### Subscripts and Superscripts

**IMPORTANT**: Never use Unicode subscript/superscript characters (₀₁₂₃₄₅₆₇₈₉, ⁰¹²³⁴⁵⁶⁷⁸⁹) in ReportLab PDFs. The built-in fonts do not include these glyphs, causing them to render as solid black boxes.

Instead, use ReportLab's XML markup tags in Paragraph objects:
```python
from reportlab.platypus import Paragraph
from reportlab.lib.styles import getSampleStyleSheet

styles = getSampleStyleSheet()

# Subscripts: use <sub> tag
chemical = Paragraph("H<sub>2</sub>O", styles['Normal'])

# Superscripts: use <super> tag
squared = Paragraph("x<super>2</super> + y<super>2</super>", styles['Normal'])
```

For canvas-drawn text (not Paragraph objects), manually adjust font the size and position rather than using Unicode subscripts/superscripts.

## Command-Line Tools

### pdftotext (poppler-utils)
```bash
# Extract text
pdftotext input.pdf output.txt

# Extract text preserving layout
pdftotext -layout input.pdf output.txt

# Extract specific pages
pdftotext -f 1 -l 5 input.pdf output.txt  # Pages 1-5
```

### qpdf
```bash
# Merge PDFs
qpdf --empty --pages file1.pdf file2.pdf -- merged.pdf

# Split pages
qpdf input.pdf --pages . 1-5 -- pages1-5.pdf
qpdf input.pdf --pages . 6-10 -- pages6-10.pdf

# Rotate pages
qpdf input.pdf output.pdf --rotate=+90:1  # Rotate page 1 by 90 degrees

# Remove password
qpdf --password=mypassword --decrypt encrypted.pdf decrypted.pdf
```

### pdftk (if available)
```bash
# Merge
pdftk file1.pdf file2.pdf cat output merged.pdf

# Split
pdftk input.pdf burst

# Rotate
pdftk input.pdf rotate 1east output rotated.pdf
```

## Common Tasks

### Extract Text from Scanned PDFs
```python
# Requires: pip install pytesseract pdf2image
import pytesseract
from pdf2image import convert_from_path

# Convert PDF to images
images = convert_from_path('scanned.pdf')

# OCR each page
text = ""
for i, image in enumerate(images):
    text += f"Page {i+1}:\n"
    text += pytesseract.image_to_string(image)
    text += "\n\n"

print(text)
```

### Add Watermark
```python
from pypdf import PdfReader, PdfWriter

# Create watermark (or load existing)
watermark = PdfReader("watermark.pdf").pages[0]

# Apply to all pages
reader = PdfReader("document.pdf")
writer = PdfWriter()

for page in reader.pages:
    page.merge_page(watermark)
    writer.add_page(page)

with open("watermarked.pdf", "wb") as output:
    writer.write(output)
```

### Extract Images
```bash
# Using pdfimages (poppler-utils)
pdfimages -j input.pdf output_prefix

# This extracts all images as output_prefix-000.jpg, output_prefix-001.jpg, etc.
```

### Password Protection
```python
from pypdf import PdfReader, PdfWriter

reader = PdfReader("input.pdf")
writer = PdfWriter()

for page in reader.pages:
    writer.add_page(page)

# Add password
writer.encrypt("userpassword", "ownerpassword")

with open("encrypted.pdf", "wb") as output:
    writer.write(output)
```

## Quick Reference

| Task | Best Tool | Command/Code |
|------|-----------|--------------|
| Merge PDFs | pypdf | `writer.add_page(page)` |
| Split PDFs | pypdf | One page per file |
| Extract text | pdfplumber | `page.extract_text()` |
| Extract tables | pdfplumber | `page.extract_tables()` |
| Create PDFs | reportlab | Canvas or Platypus |
| Command line merge | qpdf | `qpdf --empty --pages ...` |
| OCR scanned PDFs | pytesseract | Convert to image first |
| Fill PDF forms | pdf-lib or pypdf (see FORMS.md) | See FORMS.md |

## Next Steps

- For advanced pypdfium2 usage, see REFERENCE.md
- For JavaScript libraries (pdf-lib), see REFERENCE.md
- If you need to fill out a PDF form, follow the instructions in FORMS.md
- For troubleshooting guides, see REFERENCE.md
