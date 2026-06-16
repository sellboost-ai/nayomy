---
name: "xlsx"
description_en: "Comprehensive spreadsheet creation, editing, and analysis with support for formulas, formatting, data analysis, and visualization. When Claude needs to work with spreadsheets (.xlsx, .xlsm, .csv, .tsv, etc) for: (1) Creating new spreadsheets with formulas and formatting, (2) Reading or analyzing data, (3) Modify existing spreadsheets while preserving formulas, (4) Data analysis and visualization i"
category: "Document"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/document-skills/xlsx/SKILL.md"
path: "document-skills/xlsx/SKILL.md"
is_collection: false
body_length: 10094
has_scripts: false
has_references: false
has_examples: false
related_files: ["recalc.py"]
body_tr: |-
  # Çıktılar için Gereksinimler

  ## Tüm Excel dosyaları

  ### Sıfır Formül Hatası
  - Her Excel modeli SIFIR formül hatası (#REF!, #DIV/0!, #VALUE!, #N/A, #NAME?) ile teslim edilmeli

  ### Mevcut Şablonları Koruma (şablonlar güncellenirken)
  - Dosyaları değiştirirken mevcut biçim, stil ve kuralları tam olarak çalışın ve eşleştirin
  - Kurulu desenlere sahip dosyalara standardize edilmiş biçimlendirme dayatmayın
  - Mevcut şablon kuralları HER ZAMAN bu yönergeleri geçersiz kılar

  ## Mali modeller

  ### Renk Kodlama Standartları
  Aksi belirtilmediği sürece kullanıcı tarafından veya mevcut şablon tarafından

  #### Endüstri-Standart Renk Kuralları
  - **Mavi metin (RGB: 0,0,255)**: Kodlanmış girdiler ve kullanıcıların senaryolar için değiştireceği sayılar
  - **Siyah metin (RGB: 0,0,0)**: TÜM formüller ve hesaplamalar
  - **Yeşil metin (RGB: 0,128,0)**: Aynı çalışma kitabı içindeki diğer çalışma sayfalarından çeken bağlantılar
  - **Kırmızı metin (RGB: 255,0,0)**: Diğer dosyalara harici bağlantılar
  - **Sarı arka plan (RGB: 255,255,0)**: Dikkat gerektiren önemli varsayımlar veya güncellenmesi gereken hücreler

  ### Sayı Biçimlendirme Standartları

  #### Gerekli Biçim Kuralları
  - **Yıllar**: Metin dizesi olarak biçimlendir (örneğin, "2024" değil "2,024")
  - **Para Birimi**: $#,##0 biçimini kullan; HER ZAMAN başlıklarda birimleri belirt ("Revenue ($mm)")
  - **Sıfırlar**: Tüm sıfırları "-" olarak göstermek için sayı biçimlendirmesi kullan, yüzde dahil (örneğin, "$#,##0;($#,##0);-")
  - **Yüzdeler**: Varsayılan olarak 0.0% biçimi (bir ondalık basamak)
  - **Katlar**: Değerleme katları için 0.0x olarak biçimlendir (EV/EBITDA, P/E)
  - **Negatif sayılar**: Eksi (-) değil parantez (123) kullan

  ### Formül Oluşturma Kuralları

  #### Varsayımların Yerleştirilmesi
  - TÜM varsayımları (büyüme oranları, marjlar, katlar, vb.) ayrı varsayım hücrelerine yerleştir
  - Formüllerde kodlanmış değerler yerine hücre referansları kullan
  - Örnek: =B5*1.05 yerine =B5*(1+$B$6) kullan

  #### Formül Hata Önleme
  - Tüm hücre referanslarının doğru olduğunu doğrula
  - Aralıklardaki off-by-one hatalarını kontrol et
  - Tüm projeksiyon dönemlerinde tutarlı formüller sağla
  - Sınır durumlarıyla test et (sıfır değerleri, negatif sayılar)
  - Kasıtsız döngüsel referans olmadığını doğrula

  #### Kodlanmış Değerler için Belgelendirme Gereksinimleri
  - Yorum veya tablonun sonundaki hücreler içinde. Biçim: "Source: [System/Document], [Date], [Specific Reference], [URL if applicable]"
  - Örnekler:
    - "Source: Company 10-K, FY2024, Page 45, Revenue Note, [SEC EDGAR URL]"
    - "Source: Company 10-Q, Q2 2025, Exhibit 99.1, [SEC EDGAR URL]"
    - "Source: Bloomberg Terminal, 8/15/2025, AAPL US Equity"
    - "Source: FactSet, 8/20/2025, Consensus Estimates Screen"

  # XLSX oluşturma, düzenleme ve analiz

  ## Genel Bakış

  Bir kullanıcı .xlsx dosyası oluşturmanız, düzenlemeniz veya içeriğini analiz etmenizi isteyebilir. Farklı görevler için farklı araçlar ve iş akışları mevcuttur.

  ## Önemli Gereksinimler

  **Formül Yeniden Hesaplama için LibreOffice Gerekli**: `recalc.py` komut dosyasını kullanarak formül değerlerini yeniden hesaplamak için LibreOffice'in yüklü olduğunu varsayabilirsiniz. Komut dosyası ilk çalışmada LibreOffice'i otomatik olarak yapılandırır

  ## Verileri okuma ve analiz etme

  ### pandas ile veri analizi
  Veri analizi, görselleştirme ve temel işlemler için **pandas** kullan; güçlü veri işleme yetenekleri sağlar:

  ```python
  import pandas as pd

  # Excel oku
  df = pd.read_excel('file.xlsx')  # Varsayılan: ilk sayfa
  all_sheets = pd.read_excel('file.xlsx', sheet_name=None)  # Tüm sayfalar sözlük olarak

  # Analiz et
  df.head()      # Verileri önizle
  df.info()      # Sütun bilgisi
  df.describe()  # İstatistikler

  # Excel yaz
  df.to_excel('output.xlsx', index=False)
  ```

  ## Excel Dosyası İş Akışları

  ## KRİTİK: Formüller Kullan, Kodlanmış Değerler Değil

  **Değerleri Python'da hesapla ve kodla yerine HER ZAMAN Excel formüllerini kullan.** Bu, elektronik tablonun dinamik ve güncellenebilir kalmasını sağlar.

  ### ❌ YANLIŞ - Hesaplanan Değerleri Kodlama
  ```python
  # Kötü: Python'da hesaplama ve sonucu kodlama
  total = df['Sales'].sum()
  sheet['B10'] = total  # 5000 kodlanır

  # Kötü: Python'da büyüme oranı hesaplama
  growth = (df.iloc[-1]['Revenue'] - df.iloc[0]['Revenue']) / df.iloc[0]['Revenue']
  sheet['C5'] = growth  # 0.15 kodlanır

  # Kötü: Ortalama için Python hesaplaması
  avg = sum(values) / len(values)
  sheet['D20'] = avg  # 42.5 kodlanır
  ```

  ### ✅ DOĞRU - Excel Formüllerini Kullanma
  ```python
  # İyi: Excel'in toplamı hesaplamasını sağla
  sheet['B10'] = '=SUM(B2:B9)'

  # İyi: Büyüme oranı Excel formülü olarak
  sheet['C5'] = '=(C4-C2)/C2'

  # İyi: Excel işlevini kullanarak ortalama
  sheet['D20'] = '=AVERAGE(D2:D19)'
  ```

  Bu TÜM hesaplamalar için geçerlidir - toplamlar, yüzdeler, oranlar, farklar, vb. Elektronik tablo, kaynak veriler değiştiğinde yeniden hesaplayabilmelidir.

  ## Ortak İş Akışı
  1. **Aracı seç**: Veriler için pandas, formüller/biçimlendirme için openpyxl
  2. **Oluştur/Yükle**: Yeni çalışma kitabı oluştur veya mevcut dosyayı yükle
  3. **Değiştir**: Veri, formül ve biçimlendirme ekle/düzenle
  4. **Kaydet**: Dosyaya yaz
  5. **Formülleri yeniden hesapla (FORMÜL KULLANIRSAN ZORUNLU)**: recalc.py komut dosyasını kullan
     ```bash
     python recalc.py output.xlsx
     ```
  6. **Hataları doğrula ve düzelt**: 
     - Komut dosyası hata ayrıntılarıyla JSON döndürür
     - `status` `errors_found` ise, belirli hata türleri ve konumları için `error_summary` kontrol et
     - Tanımlanan hataları düzelt ve yeniden hesapla
     - Düzeltilecek yaygın hatalar:
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
  sheet['A1'] = 'Merhaba'
  sheet['B1'] = 'Dünya'
  sheet.append(['Satır', 'verisi'])

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
  sheet = wb.active  # veya wb['SheetName'] belirli sayfa için

  # Birden çok sayfayla çalışma
  for sheet_name in wb.sheetnames:
      sheet = wb[sheet_name]
      print(f"Sayfa: {sheet_name}")

  # Hücreleri değiştir
  sheet['A1'] = 'Yeni Değer'
  sheet.insert_rows(2)  # 2. konuma satır ekle
  sheet.delete_cols(3)  # 3. sütunu sil

  # Yeni sayfa ekle
  new_sheet = wb.create_sheet('YeniSayfa')
  new_sheet['A1'] = 'Veri'

  wb.save('modified.xlsx')
  ```

  ## Formülleri yeniden hesaplama

  openpyxl tarafından oluşturulan veya değiştirilen Excel dosyaları formülleri dizeler olarak içerir ancak hesaplanan değerleri içermez. Formülleri yeniden hesaplamak için sağlanan `recalc.py` komut dosyasını kullan:

  ```bash
  python recalc.py <excel_file> [timeout_seconds]
  ```

  Örnek:
  ```bash
  python recalc.py output.xlsx 30
  ```

  Komut dosyası:
  - İlk çalışmada LibreOffice makrosunu otomatik olarak ayarlar
  - Tüm sayfalardaki tüm formülleri yeniden hesaplar
  - TÜM hücreleri Excel hataları (#REF!, #DIV/0!, vb.) açısından tarar
  - Ayrıntılı hata konumları ve sayımları ile JSON döndürür
  - Linux ve macOS'ta çalışır

  ## Formül Doğrulama Kontrol Listesi

  Formüllerin doğru çalıştığından emin olmak için hızlı kontroller:

  ### Temel Doğrulama
  - [ ] **2-3 örnek referansı test et**: Tam model oluşturmadan önce doğru değerleri çektiğini doğrula
  - [ ] **Sütun eşleştirmesi**: Excel sütunlarının eşleştiğini doğrula (örneğin, sütun 64 = BL, BK değil)
  - [ ] **Satır ofseti**: Excel satırlarının 1-indekslenmiş olduğunu hatırla (DataFrame satırı 5 = Excel satırı 6)

  ### Yaygın Hatalar
  - [ ] **NaN işleme**: `pd.notna()` ile null değerleri kontrol et
  - [ ] **En sağ sütunlar**: FY verisi genellikle 50+ sütunlarda
  - [ ] **Çoklu eşleşmeler**: Sadece ilkini değil tüm oluşumları ara
  - [ ] **Sıfıra bölme**: Formüllerde `/` kullanmadan önce paydaları kontrol et (#DIV/0!)
  - [ ] **Yanlış referanslar**: Tüm hücre referanslarının amaçlanan hücreleri işaret ettiğini doğrula (#REF!)
  - [ ] **Çapraz sayfa referansları**: Sayfaları bağlamak için doğru biçimi kullan (Sheet1!A1)

  ### Formül Test Stratejisi
  - [ ] **Küçükten başla**: Geniş uygulamadan önce 2-3 hücrede formülleri test et
  - [ ] **Bağımlılıkları doğrula**: Formüllerde referans alınan tüm hücrelerin var olduğunu kontrol et
  - [ ] **Sınır durumlarını test et**: Sıfır, negatif ve çok büyük değerleri dahil et

  ### recalc.py Çıktısını Yorumlama
  Komut dosyası hata ayrıntılarıyla JSON döndürür:
  ```json
  {
    "status": "success",           // veya "errors_found"
    "total_errors": 0,              // Toplam hata sayısı
    "total_formulas": 42,           // Dosyadaki formül sayısı
    "error_summary": {              // Sadece hatalar bulunursa mevcut
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
  - Hücre indeksleri 1-tabanlıdır (satır=1, sütun=1, A1 hücresine gösterir)
  - Hesaplanan değerleri okumak için `data_only=True` kullan: `load_workbook('file.xlsx', data_only=True)`
  - **Uyarı**: `data_only=True` ile açılır ve kaydedilirse, formüller değerlerle değiştirilir ve kalıcı olarak kaybolur
  - Büyük dosyalar için: Okuma için `read_only=True` veya yazma için `write_only=True` kullan
  - Formüller korunur ancak değerlendirilmez - değerleri güncellemek için recalc.py kullan

  ### pandas ile Çalışma
  - Çıkarım sorunlarını önlemek için veri türlerini belirt: `pd.read_excel('file.xlsx', dtype={'id': str})`
  - Büyük dosyalar için, belirli sütunları oku: `pd.read_excel('file.xlsx', usecols=['A', 'C', 'E'])`
  - Tarihleri düzgün işle: `pd.read_excel('file.xlsx', parse_dates=['date_column'])`

  ## Kod Stiline İlişkin Yönergeler
  **ÖNEMLİ**: Excel işlemleri için Python kodu üretirken:
  - Gereksiz yorumlar olmadan minimal, özlü Python kodu yaz
  - Verbose değişken adlarından ve gereksiz işlemlerden kaçın
  - Gereksiz print deyimlerinden kaçın

  **Excel dosyaları için**:
  - Karmaşık formüllere veya önemli varsayımlara sahip hücrelere yorum ekle
  - Kodlanmış değerleri için veri kaynaklarını belge
  - Anahtar hesaplamalar ve model bölümleri için notlar ekle
---

# Requirements for Outputs

## All Excel files

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

**LibreOffice Required for Formula Recalculation**: You can assume LibreOffice is installed for recalculating formula values using the `recalc.py` script. The script automatically configures LibreOffice on first run

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
5. **Recalculate formulas (MANDATORY IF USING FORMULAS)**: Use the recalc.py script
   ```bash
   python recalc.py output.xlsx
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

Excel files created or modified by openpyxl contain formulas as strings but not calculated values. Use the provided `recalc.py` script to recalculate formulas:

```bash
python recalc.py <excel_file> [timeout_seconds]
```

Example:
```bash
python recalc.py output.xlsx 30
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

### Interpreting recalc.py Output
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
- Formulas are preserved but not evaluated - use recalc.py to update values

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
