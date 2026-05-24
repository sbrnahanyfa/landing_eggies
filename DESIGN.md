---
name: Organic Harvest
colors:
  surface: '#f4fcee'
  surface-dim: '#d5dccf'
  surface-bright: '#f4fcee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff6e8'
  surface-container: '#e9f0e3'
  surface-container-high: '#e3eadd'
  surface-container-highest: '#dde5d7'
  on-surface: '#171d15'
  on-surface-variant: '#42493f'
  inverse-surface: '#2b3229'
  inverse-on-surface: '#ecf3e5'
  outline: '#72796e'
  outline-variant: '#c2c9bc'
  surface-tint: '#3f6838'
  primary: '#3f6838'
  on-primary: '#ffffff'
  primary-container: '#84b179'
  on-primary-container: '#1b4317'
  inverse-primary: '#a4d398'
  secondary: '#446832'
  on-secondary: '#ffffff'
  secondary-container: '#c4efab'
  on-secondary-container: '#496e38'
  tertiary: '#486641'
  on-tertiary: '#ffffff'
  tertiary-container: '#8dae83'
  on-tertiary-container: '#254120'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c0efb2'
  primary-fixed-dim: '#a4d398'
  on-primary-fixed: '#002201'
  on-primary-fixed-variant: '#275022'
  secondary-fixed: '#c4efab'
  secondary-fixed-dim: '#a9d292'
  on-secondary-fixed: '#062100'
  on-secondary-fixed-variant: '#2d4f1d'
  tertiary-fixed: '#c9ecbd'
  tertiary-fixed-dim: '#aed0a3'
  on-tertiary-fixed: '#052104'
  on-tertiary-fixed-variant: '#314e2b'
  background: '#f4fcee'
  on-background: '#171d15'
  surface-variant: '#dde5d7'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Merek & Gaya Visual

Desain ini fokus ke transparansi, kesegaran, dan konsep *farm-to-table* yang simpel. Target utamanya adalah orang-orang yang peduli kesehatan dan kualitas makanan mereka.

Gaya visualnya pakai pendekatan **Modern/Minimalis** tapi tetap ada sentuhan organiknya. Kita bakal banyak pakai foto kualitas tinggi dan *white space* (ruang kosong) biar kerasa bersih dan premium. UI-nya sengaja dibikin ramah dan nggak terlalu teknis, biar lebih membumi dan bikin *user* percaya sama brand kita.

## Warna

Pilihan warnanya diambil langsung dari nuansa alam dan padang rumput.

- **Primary (#84B179):** Hijau sage yang kalem, dipakai buat tombol aksi utama, *branding*, dan navigasi.
- **Secondary (#A2CB8B):** Hijau yang lebih terang, pas banget buat tombol sekunder atau *highlight* produk yang lagi *fresh*.
- **Tertiary (#C7EABB):** Hijau mint lembut buat *background*, garis pembatas, atau aksen dekoratif.
- **Accent (#E8F5BD):** Hijau lime pucat buat narik perhatian, kayak *badge* promo atau diskon.
- **Netral:** Teks kita nggak pakai hitam pekat, tapi hijau-arang gelap biar lebih hangat dan gampang dibaca. Untuk *background*, kita pakai putih pudar (*off-white*) biar mata nggak cepat capek pas *scrolling*.

## Tipografi

Kita pakai font **Plus Jakarta Sans** buat semua teks. Font ini dipilih karena bentuknya modern dan geometris, tapi lengkungannya tetap luwes (mirip bentuk telur organik).

Buat *headline* besar, kita pakai *bold* dengan jarak huruf yang agak dirapatkan biar terkesan editorial dan tegas. Teks paragrafnya dikasih jarak antar baris (*line height*) yang agak longgar biar tetap enak dibaca walau teksnya panjang. Di *mobile*, ukuran *headline* bakal otomatis mengecil biar kata-katanya nggak terpotong aneh.

## Tata Letak & Spacing

Layout-nya pakai sistem **grid dinamis 12 kolom** untuk desktop dan **4 kolom** untuk *mobile*. Jarak antar elemen sengaja dibikin lega biar nggak kerasa sumpek atau kaku.

- **Desktop:** Margin kiri-kanan 64px, jarak antar kolom (*gutter*) 24px. Maksimal lebar konten 1280px (posisi di tengah).
- **Mobile:** Margin dan *gutter* masing-masing 16px.
- **Jarak Vertikal:** Kita pakai kelipatan 8px. Khusus jarak antar produk di katalog, pakai 32px biar tiap item lebih menonjol dan terkesan eksklusif.

## Elevasi & Shadow

Kita mainin **warna latar** dan **shadow halus** buat bikin hierarki tanpa ngerusak kesan organiknya.

1.  **Level 0 (Dasar):** Warna *background* utama, biasanya putih pudar atau hijau tersier (#C7EABB) di beberapa bagian.
2.  **Level 1 (Card):** *Background* putih bersih dengan shadow yang super halus (Blur: 15px, Opacity: 5%, Warna: Hijau Primary). Biar produknya kelihatan kayak ditaruh pelan-pelan di atas meja.
3.  **Level 2 (Interaksi):** Pas tombol atau *card* di-*hover*, bayangannya sedikit menebal dan elemennya naik 2px biar kerasa interaktif.

Hindari pakai shadow hitam pekat; selalu campur sedikit warna hijau primary di bayangannya biar tetap *fresh*.

## Bentuk

Bentuk elemennya pakai sudut membulat (*rounded*) sekitar 8px (0.5rem). Biar serasi sama lengkungan font dan bentuk telurnya sendiri.

- **Elemen Standar:** 8px untuk tombol, form input, dan *card* kecil.
- **Wadah Besar:** 16px (rounded-lg) untuk *card* produk utama dan *pop-up/modal*.
- **Badge/Tag:** Bentuk pil penuh (*rounded-full*) biar kelihatan jelas kalau itu *tag* informasi atau elemen yang bisa di-klik.

## Komponen

### Tombol
Tombol utama pakai Hijau Primary (#84B179) dengan teks putih. *Padding* kiri-kanannya dibikin agak lebar (24px) biar enak pas di-klik. Tombol sekunder pakai gaya transparan (*ghost style*) dengan garis luar dan teks warna Hijau Primary.

### Card Produk
Ini komponen utama buat jualan. Wajib ada gambar resolusi tinggi, nama produk (ukuran Title-MD), dan harga (ukuran Label-SM). Jangan lupa kasih shadow Level 1 di wadahnya.

### Badge & Tag
Dipakai buat nampilin kategori kayak "Free Range", "Organik", atau "Grade A". *Background*-nya pakai warna Accent (#E8F5BD) dengan teks gelap biar kontras dan kasih kesan "segar".

### Form Input
Garis luarnya pakai ketebalan 1px warna Hijau Tersier (#C7EABB). Pas lagi diketik (*focus*), garisnya berubah jadi Hijau Primary setebal 2px. Label teks selalu ditaruh di atas form pakai ukuran Label-SM.

### Pilih Jumlah (Qty)
Komponen khusus buat milih jumlah kemasan telur. Pakai tombol "+" dan "-" bentuk bulat ukuran besar biar gampang ditekan, terutama kalau *user* lagi buka web-nya lewat HP.