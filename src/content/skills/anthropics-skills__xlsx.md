---
name: "xlsx"
description_en: "Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or from other data sources; or convert between tabular file formats. Trigger especial"
category: "Document"
repo: "anthropics/skills"
stars: 140618
url: "https://github.com/anthropics/skills/blob/HEAD/skills/xlsx/SKILL.md"
path: "skills/xlsx/SKILL.md"
is_collection: false
body_length: 10423
has_scripts: true
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Çıktılar için Gereksinimler

  ## Tüm Excel dosyaları

  ### Profesyonel Yazı Tipi
  - Kullanıcı tarafından aksi belirtilmedikçe tüm çıktılarda tutarlı, profesyonel bir yazı tipi (örn. Arial, Times New Roman) kullanın

  ### Sıfır Formula Hatası
  - Her Excel modeli SIFIR formula hatası (#REF!, #DIV/0!, #VALUE!, #N/A, #NAME?) ile teslim edilMELİDİR

  ### Mevcut Şablonları Koru (şablonları güncelleme sırasında)
  - Dosyaları değiştirirken mevcut biçimi, stili ve kuralları TAMAMEN eşleştirmek için çalışın
  - Yerleşik desenlere sahip dosyalara standartlaştırılmış biçimlendirme uygulamayın
  - Mevcut şablon kuralları HER ZAMAN bu yönergeleri geçersiz kılar

  ## Finansal modeller

  ### Renk Kodlama Standartları
  Aksi belirtilmedikçe veya mevcut şablon tarafından

  #### Endüstri Standart Renk Kuralları
  - **Mavi yazı (RGB: 0,0,255)**: Sabit kodlanmış girdiler ve kullanıcıların senaryolar için değiştireceği sayılar
  - **Siyah yazı (RGB: 0,0,0)**: TÜM formüller ve hesaplamalar
  - **Yeşil yazı (RGB: 0,128,0)**: Aynı çalışma kitabı içindeki diğer çalışma sayfalarından çekilen bağlantılar
  - **Kırmızı yazı (RGB: 255,0,0)**: Diğer dosyalara giden harici bağlantılar
  - **Sarı arka plan (RGB: 255,255,0)**: Dikkat gerektiren önemli varsayımlar veya güncellenmesi gereken hücreler

  ### Sayı Biçimlendirme Standartları

  #### Gerekli Biçim Kuralları
  - **Yıllar**: Metin dizesi olarak biçimlendir (örn. "2024" değil "2.024")
  - **Para Birimi**: $#,##0 biçimini kullan; başlıklarda HER ZAMAN birimleri belirt ("Revenue ($mm)")
  - **Sıfırlar**: Tüm sıfırları "-" olarak göstermek için sayı biçimlendirmesini kullan, yüzdeler dahil (örn. "$#,##0;($#,##0);-")
  - **Yüzdeler**: Varsayılan olarak 0.0% biçimini kullan (bir ondalık)
  - **Katları**: Değerleme katları için 0.0x olarak biçimlendir (EV/EBITDA, P/E)
  - **Negatif sayılar**: Eksi -123 değil parantez (123) kullan

  ### Formula Oluşturma Kuralları

  #### Varsayımlar Yerleşimi
  - TÜM varsayımları (büyüme oranları, marjlar, katlar vb.) ayrı varsayım hücrelerine yerleştir
  - Formüllerde sabit kodlanmış değerler yerine hücre referansları kullan
  - Örnek: =B5*1.05 yerine =B5*(1+$B$6) kullan

  #### Formula Hata Önleme
  - Tüm hücre referanslarının doğru olduğunu doğrula
  - Aralıklarda off-by-one hatalarını kontrol et
  - Tüm projeksiyon dönemleri arasında tutarlı formüller sağla
  - Sınır durumlarıyla test et (sıfır değerler, negatif sayılar)
  - İstemeden döngüsel referans olmadığını doğrula

  #### Sabit Kodlar için Belgelendirme Gereksinimleri
  - Yorum veya hücreler yanında (tablo sonundaysa). Biçim: "Source: [System/Document], [Date], [Specific Reference], [URL if applicable]"
  - Örnekler:
    - "Source: Company 10-K, FY2024, Page 45, Revenue Note, [SEC EDGAR URL]"
    - "Source: Company 10-Q, Q2 2025, Exhibit 99.1, [SEC EDGAR URL]"
    - "Source: Bloomberg Terminal, 8/15/2025, AAPL US Equity"
    - "Source: FactSet, 8/20/2025, Consensus Estimates Screen"

  # XLSX oluşturma, düzenleme ve analiz

  ## Genel Bakış

  Bir kullanıcı sizi bir .xlsx dosyası oluşturması, düzenlemesi veya analiz etmesi isteyebilir. Farklı görevler için kullanabileceğiniz farklı araçlar ve iş akışları vardır.

  ## Önemli Gereksinimler

  **Formula Yeniden Hesaplaması için LibreOffice Gerekli**: `scripts/recalc.py` betiğini kullanarak formülleri yeniden hesaplamak için LibreOffice'in kurulu olduğunu varsayabilirsiniz. Betik ilk çalıştırıldığında LibreOffice'i otomatik olarak yapılandırır; bu, Unix soketlerinin kısıtlı olduğu sandbox ortamlarını da içerir (`scripts/office/soffice.py` tarafından işlenir)

  ## Verileri okuma ve analiz etme

  ### pandas ile veri analizi
  Veri analizi, görselleştirme ve temel işlemler için güçlü veri işleme yetenekleri sağlayan **pandas**'ı kullan:

  ```python
  import pandas as pd

  # Excel oku
  df = pd.read_excel('file.xlsx')  # Varsayılan: ilk sayfa
  all_sheets = pd.read_excel('file.xlsx', sheet_name=None)  # Tüm sayfalar sözlük olarak

  # Analiz et
  df.head()      # Verileri ön izle
  df.info()      # Sütun bilgileri
  df.describe()  # İstatistikler

  # Excel yaz
  df.to_excel('output.xlsx', index=False)
  ```

  ## Excel Dosya İş Akışları

  ## KRİTİK: Formüller Kullan, Sabit Kodlanmış Değerler Değil

  **Python'da değerleri hesapladıktan sonra sabit olarak kodlamak yerine HER ZAMAN Excel formülleri kullan.** Bu, elektronik tablonun dinamik ve güncellenebilir kalmasını sağlar.

  ### ❌ YANLIŞ - Hesaplanan Değerleri Sabit Kodlamak
  ```python
  # Kötü: Python'da hesaplama ve sonucu sabit kodlamak
  total = df['Sales'].sum()
  sheet['B10'] = total  # 5000 sabit kodlar

  # Kötü: Python'da büyüme oranını hesaplamak
  growth = (df.iloc[-1]['Revenue'] - df.iloc[0]['Revenue']) / df.iloc[0]['Revenue']
  sheet['C5'] = growth  # 0.15 sabit kodlar

  # Kötü: Ortalama için Python hesaplaması
  avg = sum(values) / len(values)
  sheet['D20'] = avg  # 42.5 sabit kodlar
  ```

  ### ✅ DOĞRU - Excel Formülleri Kullanmak
  ```python
  # İyi: Excel'in toplamı hesaplamasını sağla
  sheet['B10'] = '=SUM(B2:B9)'

  # İyi: Büyüme oranı Excel formülü olarak
  sheet['C5'] = '=(C4-C2)/C2'

  # İyi: Excel işlevini kullanarak ortalama
  sheet['D20'] = '=AVERAGE(D2:D19)'
  ```

  Bu tüm hesaplamalara uygulanır - toplamlar, yüzdeler, oranlar, farklar vb. Elektronik tablo, kaynak veriler değiştiğinde yeniden hesaplayabilmelidir.

  ## Yaygın İş Akışı
  1. **Aracı seç**: Veriler için pandas, formüller/biçimlendirme için openpyxl
  2. **Oluştur/Yükle**: Yeni çalışma kitabı oluştur veya mevcut dosyayı yükle
  3. **Değiştir**: Veri, formül ve biçimlendirme ekle/düzenle
  4. **Kaydet**: Dosyaya yaz
  5. **Formülleri yeniden hesapla (FORMÜLLER KULLANIYOR İSE ZORUNLU)**: scripts/recalc.py betiğini kullan
     ```bash
     python scripts/recalc.py output.xlsx
     ```
  6. **Doğrula ve hataları düzelt**: 
     - Betik hata detaylarıyla birlikte JSON döndürür
     - Eğer `status` "errors_found" ise, belirli hata türleri ve konumları için `error_summary`'yi kontrol et
     - Tanımlanan hataları düzelt ve yeniden hesapla
     - Düzeltilmesi gereken yaygın hatalar:
       - `#REF!`: Geçersiz hücre referansları
       - `#DIV/0!`: Sıfıra bölme
       - `#VALUE!`: Formülde yanlış veri türü
       - `#NAME?`: Tanınmayan formül adı

  ### Yeni Excel dosyaları oluşturma

  ```python
  # Formüller ve biçimlendirme için openpyxl kullan
  from openpyxl import Workbook
  from openpyxl.styles import Font, PatternFill, Alignment

  wb = Workbook()
  sheet = wb.active

  # Veri ekle
  sheet['A1'] = 'Hello'
  sheet['B1'] = 'World'
  sheet.append(['Row', 'of', 'data'])

  # Formül ekle
  sheet['B2'] = '=SUM(A1:A10)'

  # Biçimlendirme
  sheet['A1'].font = Font(bold=True, color='FF0000')
  sheet['A1'].fill = PatternFill('solid', start_color='FFFF00')
  sheet['A1'].alignment = Alignment(horizontal='center')

  # Sütun genişliği
  sheet.column_dimensions['A'].width = 20

  wb.save('output.xlsx')
  ```

  ### Mevcut Excel dosyalarını düzenleme

  ```python
  # Formülleri ve biçimlendirmeyi korumak için openpyxl kullan
  from openpyxl import load_workbook

  # Mevcut dosyayı yükle
  wb = load_workbook('existing.xlsx')
  sheet = wb.active  # veya belirli sayfa için wb['SheetName']

  # Birden çok sayfa ile çalışma
  for sheet_name in wb.sheetnames:
      sheet = wb[sheet_name]
      print(f"Sheet: {sheet_name}")

  # Hücreleri değiştir
  sheet['A1'] = 'New Value'
  sheet.insert_rows(2)  # 2. konuma satır ekle
  sheet.delete_cols(3)  # 3. sütunu sil

  # Yeni sayfa ekle
  new_sheet = wb.create_sheet('NewSheet')
  new_sheet['A1'] = 'Data'

  wb.save('modified.xlsx')
  ```

  ## Formülleri yeniden hesaplama

  openpyxl tarafından oluşturulan veya değiştirilen Excel dosyaları formülleri dizeler olarak içerir ancak hesaplanan değerler içermez. Formülleri yeniden hesaplamak için sağlanan `scripts/recalc.py` betiğini kullan:

  ```bash
  python scripts/recalc.py <excel_file> [timeout_seconds]
  ```

  Örnek:
  ```bash
  python scripts/recalc.py output.xlsx 30
  ```

  Betik:
  - İlk çalıştırmada LibreOffice makrosunu otomatik olarak ayarlar
  - Tüm sayfalardaki tüm formülleri yeniden hesaplar
  - TÜM hücreleri Excel hataları (#REF!, #DIV/0!, vb.) açısından tarar
  - Detaylı hata konumları ve sayıları ile JSON döndürür
  - Linux ve macOS'ta çalışır

  ## Formula Doğrulama Kontrol Listesi

  Formüllerin doğru çalıştığından emin olmak için hızlı kontroller:

  ### Temel Doğrulama
  - [ ] **2-3 örnek referansı test et**: Tam modeli oluşturmadan önce doğru değerleri çektiklerini doğrula
  - [ ] **Sütun eşlemesi**: Excel sütunlarının eşleştiğinden emin ol (örn. sütun 64 = BL, BK değil)
  - [ ] **Satır ofseti**: Excel satırlarının 1-indexlenmiş olduğunu hatırla (DataFrame satır 5 = Excel satır 6)

  ### Yaygın Tuzaklar
  - [ ] **NaN işleme**: `pd.notna()` ile null değerleri kontrol et
  - [ ] **Sağ taraftaki sütunlar**: FY verileri genellikle 50+ sütunlardadır
  - [ ] **Çoklu eşleşmeler**: Sadece ilkini değil tüm oluşumları ara
  - [ ] **Sıfıra bölme**: Formüllerde `/` kullanmadan önce paydaları kontrol et (#DIV/0!)
  - [ ] **Yanlış referanslar**: Tüm hücre referanslarının amaçlanan hücreleri gösterdiğini doğrula (#REF!)
  - [ ] **Çapraz sayfa referansları**: Sayfaları bağlamak için doğru biçimi kullan (Sheet1!A1)

  ### Formula Test Stratejisi
  - [ ] **Küçük başla**: Formülleri yaygın olarak uygulamadan önce 2-3 hücrede test et
  - [ ] **Bağımlılıkları doğrula**: Formüllerde referans verilen tüm hücrelerin var olduğunu kontrol et
  - [ ] **Sınır durumlarını test et**: Sıfır, negatif ve çok büyük değerleri ekle

  ### scripts/recalc.py Çıktısını Yorumlama
  Betik hata detaylarıyla JSON döndürür:
  ```json
  {
    "status": "success",           // veya "errors_found"
    "total_errors": 0,              // Toplam hata sayısı
    "total_formulas": 42,           // Dosyadaki formül sayısı
    "error_summary": {              // Sadece hata bulunursa mevcut
      "#REF!": {
        "count": 2,
        "locations": ["Sheet1!B5", "Sheet1!C10"]
      }
    }
  }
  ```

  ## En İyi Uygulamalar

  ### Kütüphane Seçimi
  - **pandas**: Veri analizi, toplu işlemler ve basit veri dışa aktarma için en iyi
  - **openpyxl**: Karmaşık biçimlendirme, formüller ve Excel'e özgü özellikler için en iyi

  ### openpyxl ile Çalışma
  - Hücre indeksleri 1-tabanlıdır (row=1, column=1 A1 hücresini ifade eder)
  - Hesaplanan değerleri okumak için `data_only=True` kullan: `load_workbook('file.xlsx', data_only=True)`
  - **Uyarı**: `data_only=True` ile açılır ve kaydedilirse, formüller kalıcı olarak değerlerle değiştirilir
  - Büyük dosyalar için: Okuma için `read_only=True` veya yazma için `write_only=True` kullan
  - Formüller korunur ancak değerlendirilmez - değerleri güncellemek için scripts/recalc.py kullan

  ### pandas ile Çalışma
  - Çıkarım sorunlarını önlemek için veri türlerini belirt: `pd.read_excel('file.xlsx', dtype={'id': str})`
  - Büyük dosyalar için, belirli sütunları oku: `pd.read_excel('file.xlsx', usecols=['A', 'C', 'E'])`
  - Tarihleri uygun şekilde işle: `pd.read_excel('file.xlsx', parse_dates=['date_column'])`

  ## Kod Stili Yönergeleri
  **ÖNEMLİ**: Excel işlemleri için Python kodu oluştururken:
  - Gereksiz yorumlar olmadan minimal, özlü kod yazın
  - Ayrıntılı değişken adlarından ve gereksiz işlemlerden kaçının
  - Gereksiz print ifadelerinden kaçının

  **Excel dosyaları için**:
  - Karmaşık formüllere veya önemli varsayımlara sahip hücrelere açıklamalar ekleyin
  - Sabit kodlanmış değerler için veri kaynağını belgeleyin
  - Önemli hesaplamaları ve model bölümlerini açıklamalar ekleyin
---

# Requirements for Outputs

## All Excel files

### Professional Font
- Use a consistent, professional font (e.g., Arial, Times New Roman) for all deliverables unless otherwise instructed by the user

### Zero Formula Errors
- Every Excel model MUST be delivered with ZERO formula errors (#REF!, #DIV/0!, #VALUE!, #N/A, #NAME?)

### Preserve Existing Templates (when updating templates)
- Study and EXACTLY match existing format, style, and conventions when modifying files
- Never impose standardized formatting on files with established patterns
- Existing template conventions ALWAYS override these guidelines

## Financial models

### Color Coding Standards
Unless otherwise stated by the user or existing template

#### Industry-Standard Color Conventions
- **Blue text (RGB: 0,0,255)**: Hardcoded inputs, and numbers users will change for scenarios
- **Black text (RGB: 0,0,0)**: ALL formulas and calculations
- **Green text (RGB: 0,128,0)**: Links pulling from other worksheets within same workbook
- **Red text (RGB: 255,0,0)**: External links to other files
- **Yellow background (RGB: 255,255,0)**: Key assumptions needing attention or cells that need to be updated

### Number Formatting Standards

#### Required Format Rules
- **Years**: Format as text strings (e.g., "2024" not "2,024")
- **Currency**: Use $#,##0 format; ALWAYS specify units in headers ("Revenue ($mm)")
- **Zeros**: Use number formatting to make all zeros "-", including percentages (e.g., "$#,##0;($#,##0);-")
- **Percentages**: Default to 0.0% format (one decimal)
- **Multiples**: Format as 0.0x for valuation multiples (EV/EBITDA, P/E)
- **Negative numbers**: Use parentheses (123) not minus -123

### Formula Construction Rules

#### Assumptions Placement
- Place ALL assumptions (growth rates, margins, multiples, etc.) in separate assumption cells
- Use cell references instead of hardcoded values in formulas
- Example: Use =B5*(1+$B$6) instead of =B5*1.05

#### Formula Error Prevention
- Verify all cell references are correct
- Check for off-by-one errors in ranges
- Ensure consistent formulas across all projection periods
- Test with edge cases (zero values, negative numbers)
- Verify no unintended circular references

#### Documentation Requirements for Hardcodes
- Comment or in cells beside (if end of table). Format: "Source: [System/Document], [Date], [Specific Reference], [URL if applicable]"
- Examples:
  - "Source: Company 10-K, FY2024, Page 45, Revenue Note, [SEC EDGAR URL]"
  - "Source: Company 10-Q, Q2 2025, Exhibit 99.1, [SEC EDGAR URL]"
  - "Source: Bloomberg Terminal, 8/15/2025, AAPL US Equity"
  - "Source: FactSet, 8/20/2025, Consensus Estimates Screen"

# XLSX creation, editing, and analysis

## Overview

A user may ask you to create, edit, or analyze the contents of an .xlsx file. You have different tools and workflows available for different tasks.

## Important Requirements

**LibreOffice Required for Formula Recalculation**: You can assume LibreOffice is installed for recalculating formula values using the `scripts/recalc.py` script. The script automatically configures LibreOffice on first run, including in sandboxed environments where Unix sockets are restricted (handled by `scripts/office/soffice.py`)

## Reading and analyzing data

### Data analysis with pandas
For data analysis, visualization, and basic operations, use **pandas** which provides powerful data manipulation capabilities:

```python
import pandas as pd

# Read Excel
df = pd.read_excel('file.xlsx')  # Default: first sheet
all_sheets = pd.read_excel('file.xlsx', sheet_name=None)  # All sheets as dict

# Analyze
df.head()      # Preview data
df.info()      # Column info
df.describe()  # Statistics

# Write Excel
df.to_excel('output.xlsx', index=False)
```

## Excel File Workflows

## CRITICAL: Use Formulas, Not Hardcoded Values

**Always use Excel formulas instead of calculating values in Python and hardcoding them.** This ensures the spreadsheet remains dynamic and updateable.

### ❌ WRONG - Hardcoding Calculated Values
```python
# Bad: Calculating in Python and hardcoding result
total = df['Sales'].sum()
sheet['B10'] = total  # Hardcodes 5000

# Bad: Computing growth rate in Python
growth = (df.iloc[-1]['Revenue'] - df.iloc[0]['Revenue']) / df.iloc[0]['Revenue']
sheet['C5'] = growth  # Hardcodes 0.15

# Bad: Python calculation for average
avg = sum(values) / len(values)
sheet['D20'] = avg  # Hardcodes 42.5
```

### ✅ CORRECT - Using Excel Formulas
```python
# Good: Let Excel calculate the sum
sheet['B10'] = '=SUM(B2:B9)'

# Good: Growth rate as Excel formula
sheet['C5'] = '=(C4-C2)/C2'

# Good: Average using Excel function
sheet['D20'] = '=AVERAGE(D2:D19)'
```

This applies to ALL calculations - totals, percentages, ratios, differences, etc. The spreadsheet should be able to recalculate when source data changes.

## Common Workflow
1. **Choose tool**: pandas for data, openpyxl for formulas/formatting
2. **Create/Load**: Create new workbook or load existing file
3. **Modify**: Add/edit data, formulas, and formatting
4. **Save**: Write to file
5. **Recalculate formulas (MANDATORY IF USING FORMULAS)**: Use the scripts/recalc.py script
   ```bash
   python scripts/recalc.py output.xlsx
   ```
6. **Verify and fix any errors**: 
   - The script returns JSON with error details
   - If `status` is `errors_found`, check `error_summary` for specific error types and locations
   - Fix the identified errors and recalculate again
   - Common errors to fix:
     - `#REF!`: Invalid cell references
     - `#DIV/0!`: Division by zero
     - `#VALUE!`: Wrong data type in formula
     - `#NAME?`: Unrecognized formula name

### Creating new Excel files

```python
# Using openpyxl for formulas and formatting
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment

wb = Workbook()
sheet = wb.active

# Add data
sheet['A1'] = 'Hello'
sheet['B1'] = 'World'
sheet.append(['Row', 'of', 'data'])

# Add formula
sheet['B2'] = '=SUM(A1:A10)'

# Formatting
sheet['A1'].font = Font(bold=True, color='FF0000')
sheet['A1'].fill = PatternFill('solid', start_color='FFFF00')
sheet['A1'].alignment = Alignment(horizontal='center')

# Column width
sheet.column_dimensions['A'].width = 20

wb.save('output.xlsx')
```

### Editing existing Excel files

```python
# Using openpyxl to preserve formulas and formatting
from openpyxl import load_workbook

# Load existing file
wb = load_workbook('existing.xlsx')
sheet = wb.active  # or wb['SheetName'] for specific sheet

# Working with multiple sheets
for sheet_name in wb.sheetnames:
    sheet = wb[sheet_name]
    print(f"Sheet: {sheet_name}")

# Modify cells
sheet['A1'] = 'New Value'
sheet.insert_rows(2)  # Insert row at position 2
sheet.delete_cols(3)  # Delete column 3

# Add new sheet
new_sheet = wb.create_sheet('NewSheet')
new_sheet['A1'] = 'Data'

wb.save('modified.xlsx')
```

## Recalculating formulas

Excel files created or modified by openpyxl contain formulas as strings but not calculated values. Use the provided `scripts/recalc.py` script to recalculate formulas:

```bash
python scripts/recalc.py <excel_file> [timeout_seconds]
```

Example:
```bash
python scripts/recalc.py output.xlsx 30
```

The script:
- Automatically sets up LibreOffice macro on first run
- Recalculates all formulas in all sheets
- Scans ALL cells for Excel errors (#REF!, #DIV/0!, etc.)
- Returns JSON with detailed error locations and counts
- Works on both Linux and macOS

## Formula Verification Checklist

Quick checks to ensure formulas work correctly:

### Essential Verification
- [ ] **Test 2-3 sample references**: Verify they pull correct values before building full model
- [ ] **Column mapping**: Confirm Excel columns match (e.g., column 64 = BL, not BK)
- [ ] **Row offset**: Remember Excel rows are 1-indexed (DataFrame row 5 = Excel row 6)

### Common Pitfalls
- [ ] **NaN handling**: Check for null values with `pd.notna()`
- [ ] **Far-right columns**: FY data often in columns 50+ 
- [ ] **Multiple matches**: Search all occurrences, not just first
- [ ] **Division by zero**: Check denominators before using `/` in formulas (#DIV/0!)
- [ ] **Wrong references**: Verify all cell references point to intended cells (#REF!)
- [ ] **Cross-sheet references**: Use correct format (Sheet1!A1) for linking sheets

### Formula Testing Strategy
- [ ] **Start small**: Test formulas on 2-3 cells before applying broadly
- [ ] **Verify dependencies**: Check all cells referenced in formulas exist
- [ ] **Test edge cases**: Include zero, negative, and very large values

### Interpreting scripts/recalc.py Output
The script returns JSON with error details:
```json
{
  "status": "success",           // or "errors_found"
  "total_errors": 0,              // Total error count
  "total_formulas": 42,           // Number of formulas in file
  "error_summary": {              // Only present if errors found
    "#REF!": {
      "count": 2,
      "locations": ["Sheet1!B5", "Sheet1!C10"]
    }
  }
}
```

## Best Practices

### Library Selection
- **pandas**: Best for data analysis, bulk operations, and simple data export
- **openpyxl**: Best for complex formatting, formulas, and Excel-specific features

### Working with openpyxl
- Cell indices are 1-based (row=1, column=1 refers to cell A1)
- Use `data_only=True` to read calculated values: `load_workbook('file.xlsx', data_only=True)`
- **Warning**: If opened with `data_only=True` and saved, formulas are replaced with values and permanently lost
- For large files: Use `read_only=True` for reading or `write_only=True` for writing
- Formulas are preserved but not evaluated - use scripts/recalc.py to update values

### Working with pandas
- Specify data types to avoid inference issues: `pd.read_excel('file.xlsx', dtype={'id': str})`
- For large files, read specific columns: `pd.read_excel('file.xlsx', usecols=['A', 'C', 'E'])`
- Handle dates properly: `pd.read_excel('file.xlsx', parse_dates=['date_column'])`

## Code Style Guidelines
**IMPORTANT**: When generating Python code for Excel operations:
- Write minimal, concise Python code without unnecessary comments
- Avoid verbose variable names and redundant operations
- Avoid unnecessary print statements

**For Excel files themselves**:
- Add comments to cells with complex formulas or important assumptions
- Document data sources for hardcoded values
- Include notes for key calculations and model sections
