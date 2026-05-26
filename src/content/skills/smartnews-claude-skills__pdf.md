---
name: "pdf"
description_en: "Comprehensive PDF manipulation toolkit for extracting text and tables, creating new PDFs, merging/splitting documents, and handling forms. When Claude needs to fill in a PDF form or programmatically process, generate, or analyze PDF documents at scale."
description_tr: "PDF dosyalarıyla çalışmak için kapsamlı bir toolkit; metin ve tabloları çıkarma, yeni PDF oluşturma, belgeleri birleştirme/bölme ve formları yönetme özelliklerine sahiptir. Claude'un PDF formlarını doldurması veya PDF belgelerini ölçekte programatik olarak işlemesi, oluşturması ya da analiz etmesi gerektiğinde kullanılır."
category: "Document"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/document-skills/pdf/SKILL.md"
path: "document-skills/pdf/SKILL.md"
is_collection: false
body_length: 6729
has_scripts: true
has_references: false
has_examples: false
related_files: ["forms.md", "reference.md"]
body_tr: |-
  # PDF İşleme Kılavuzu

  ## Genel Bakış

  Bu kılavuz Python kütüphaneleri ve komut satırı araçları kullanarak temel PDF işleme işlemlerini kapsamaktadır. Gelişmiş özellikler, JavaScript kütüphaneleri ve detaylı örnekler için reference.md dosyasına bakınız. Eğer bir PDF formunu doldurmanız gerekiyorsa, forms.md dosyasını okuyun ve talimatlarını izleyin.

  ## Hızlı Başlangıç

  ```python
  from pypdf import PdfReader, PdfWriter

  # PDF'yi oku
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

  #### PDF'yi Böl
  ```python
  reader = PdfReader("input.pdf")
  for i, page in enumerate(reader.pages):
      writer = PdfWriter()
      writer.add_page(page)
      with open(f"page_{i+1}.pdf", "wb") as output:
          writer.write(output)
  ```

  #### Meta Verileri Çıkar
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

  #### Düzeni Koruyan Metni Çıkar
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
              if table:  # Tablonun boş olmadığını kontrol et
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

  #### Birden Çok Sayfası Olan PDF Oluştur
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

  # PDF'yi oluştur
  doc.build(story)
  ```

  ## Komut Satırı Araçları

  ### pdftotext (poppler-utils)
  ```bash
  # Metni çıkar
  pdftotext input.pdf output.txt

  # Düzeni koruyan metni çıkar
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
  qpdf input.pdf output.pdf --rotate=+90:1  # 1. sayfayı 90 derece döndür

  # Şifreyi kaldır
  qpdf --password=mypassword --decrypt encrypted.pdf decrypted.pdf
  ```

  ### pdftk (mevcut ise)
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

  # PDF'yi resimlere dönüştür
  images = convert_from_path('scanned.pdf')

  # Her sayfayı OCR işlemine tabi tut
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

  # Tüm sayfalara uygula
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
  # pdfimages kullanarak (poppler-utils)
  pdfimages -j input.pdf output_prefix

  # Bu, output_prefix-000.jpg, output_prefix-001.jpg, vb. olarak tüm resimleri çıkarır
  ```

  ### Şifre Koruması
  ```python
  from pypdf import PdfReader, PdfWriter

  reader = PdfReader("input.pdf")
  writer = PdfWriter()

  for page in reader.pages:
      writer.add_page(page)

  # Şifre ekle
  writer.encrypt("userpassword", "ownerpassword")

  with open("encrypted.pdf", "wb") as output:
      writer.write(output)
  ```

  ## Hızlı Referans

  | Görev | En İyi Araç | Komut/Kod |
  |------|-----------|--------------|
  | PDF'leri birleştir | pypdf | `writer.add_page(page)` |
  | PDF'leri böl | pypdf | Her sayfayı ayrı dosyaya |
  | Metni çıkar | pdfplumber | `page.extract_text()` |
  | Tabloları çıkar | pdfplumber | `page.extract_tables()` |
  | PDF oluştur | reportlab | Canvas veya Platypus |
  | Komut satırında birleştir | qpdf | `qpdf --empty --pages ...` |
  | Taranmış PDF'lerde OCR | pytesseract | Önce görüntüye dönüştür |
  | PDF formlarını doldur | pdf-lib veya pypdf (forms.md'ye bakınız) | forms.md'yi inceleyin |

  ## Sonraki Adımlar

  - Gelişmiş pypdfium2 kullanımı için reference.md dosyasına bakınız
  - JavaScript kütüphaneleri (pdf-lib) için reference.md dosyasına bakınız
  - Eğer bir PDF formu doldurmanız gerekiyorsa, forms.md dosyasındaki talimatları izleyin
  - Sorun giderme kılavuzları için reference.md dosyasına bakınız
---

# PDF Processing Guide

## Overview

This guide covers essential PDF processing operations using Python libraries and command-line tools. For advanced features, JavaScript libraries, and detailed examples, see reference.md. If you need to fill out a PDF form, read forms.md and follow its instructions.

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
| Fill PDF forms | pdf-lib or pypdf (see forms.md) | See forms.md |

## Next Steps

- For advanced pypdfium2 usage, see reference.md
- For JavaScript libraries (pdf-lib), see reference.md
- If you need to fill out a PDF form, follow the instructions in forms.md
- For troubleshooting guides, see reference.md
