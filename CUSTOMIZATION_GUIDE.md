# PANDUAN CUSTOMIZATION PORTOFOLIO

## 🎯 Langkah-Langkah Customization

### Step 1: Update Informasi Personal

**File: `index.html`**

Cari dan ganti placeholder berikut dengan data Anda:

#### Hero Section

```html
<!-- Baris ~45-55 -->
<h1>Halo! Saya <span class="highlight">Hadi</span></h1>
<p class="subtitle">Web Developer & UI/UX Designer</p>
<p class="description">[Ganti dengan deskripsi Anda]</p>
```

#### Contact Section

```html
<!-- Baris ~260-280 -->
<a href="mailto:email@example.com">email@example.com</a>
<a href="tel:+62812345678">+62 812 3456 78</a>
<p>Kota, Provinsi</p>
```

#### Social Media Links

```html
<!-- Baris ~285-295 -->
<a href="https://github.com/USERNAME" target="_blank">
  <a href="https://linkedin.com/in/USERNAME" target="_blank">
    <a href="https://instagram.com/USERNAME" target="_blank">
      <a href="https://twitter.com/USERNAME" target="_blank"></a></a></a
></a>
```

---

### Step 2: Tambah Foto Profil

1. **Siapkan Foto:**
   - Format: JPG, PNG, atau WEBP
   - Ukuran: minimal 300x300px
   - Aspek Rasio: Square (1:1)

2. **Letakkan di Folder:**
   - Copy foto ke: `assets/images/profile.jpg`

3. **Update HTML:**
   - Buka `index.html` baris ~57-60
   - Ganti:

   ```html
   <!-- DARI: -->
   <div class="profile-placeholder">
     <i class="fas fa-user"></i>
   </div>

   <!-- MENJADI: -->
   <img
     src="assets/images/profile.jpg"
     alt="Foto Profil Hadi"
     class="profile-img"
   />
   ```

4. **Tambah CSS:**
   - Buka `css/style.css`
   - Cari class `.profile-placeholder`
   - Tambahkan sebelumnya:
   ```css
   .profile-img {
     width: 300px;
     height: 300px;
     border-radius: 50%;
     object-fit: cover;
     border: 3px solid var(--primary-color);
     box-shadow: 0 15px 35px rgba(99, 102, 241, 0.3);
   }
   ```

---

### Step 3: Customize Skills/Keahlian

**File: `index.html` (Baris ~80-120)**

#### Template untuk menambah skill:

```html
<div class="skill-item">
  <div class="skill-icon">
    <i class="fab fa-[icon-name]"></i>
  </div>
  <h3>Nama Skill</h3>
</div>
```

#### Contoh skill yang bisa ditambahkan:

**Frontend:**

```html
<i class="fab fa-react"></i>
<!-- React -->
<i class="fab fa-vue"></i>
<!-- Vue -->
<i class="fab fa-angular"></i>
<!-- Angular -->
<i class="fab fa-bootstrap"></i>
<!-- Bootstrap -->
```

**Backend:**

```html
<i class="fab fa-node"></i>
<!-- Node.js -->
<i class="fab fa-python"></i>
<!-- Python -->
<i class="fab fa-java"></i>
<!-- Java -->
```

**Database & Tools:**

```html
<i class="fas fa-database"></i>
<!-- Database -->
<i class="fab fa-docker"></i>
<!-- Docker -->
<i class="fab fa-jenkins"></i>
<!-- Jenkins -->
```

**Lihat semua icon:** https://fontawesome.com/icons

---

### Step 4: Tambah Proyek

**File: `index.html` (Baris ~130-200)**

#### Template Project:

```html
<div class="project-card">
  <div class="project-image">
    <img src="assets/images/project-name.jpg" alt="Nama Projek" />
  </div>
  <div class="project-content">
    <h3>Nama Project Anda</h3>
    <p class="project-description">
      Deskripsi singkat proyek. Jelaskan tujuan, masalah yang diselesaikan, dan
      hasil yang dicapai dalam 2-3 kalimat.
    </p>
    <div class="project-tech">
      <span class="tech-badge">HTML</span>
      <span class="tech-badge">CSS</span>
      <span class="tech-badge">JavaScript</span>
    </div>
    <div class="project-links">
      <a href="https://demo-link.com" class="link-btn" target="_blank"
        >Lihat Demo</a
      >
      <a
        href="https://github.com/username/repo-name"
        class="link-btn"
        target="_blank"
        >Source Code</a
      >
    </div>
  </div>
</div>
```

#### Persiapan Project:

1. Siapkan screenshot proyek (800x400px)
2. Upload ke `assets/images/[project-name].jpg`
3. Siapkan link demo (jika ada)
4. Siapkan link GitHub repository
5. Tulis deskripsi singkat (50-100 kata)

---

### Step 5: Tambah Sertifikat

**File: `index.html` (Baris ~220-250)**

#### Template Certificate:

```html
<div class="certificate-card">
  <div class="cert-icon">
    <i class="fas fa-award"></i>
  </div>
  <h3>Nama Sertifikat</h3>
  <p class="cert-issuer">Institusi/Perusahaan Penerbit</p>
  <p class="cert-date">2024</p>
  <a href="https://link-ke-sertifikat.pdf" class="cert-link" target="_blank"
    >Lihat Sertifikat</a
  >
</div>
```

#### Tips:

- Upload sertifikat ke Google Drive
- Copy link sharing (set ke Public)
- Gunakan link tersebut di `href`
- Atau upload PDF ke `assets/` folder

---

### Step 6: Ubah Warna (Theme Customization)

**File: `css/style.css` (Baris 1-20)**

#### Palet Warna Default (Biru & Pink):

```css
:root {
  --primary-color: #6366f1; /* Biru */
  --secondary-color: #ec4899; /* Pink */
}
```

#### Contoh Palet Warna Lain:

**Ungu & Cyan:**

```css
:root {
  --primary-color: #a855f7; /* Ungu */
  --secondary-color: #06b6d4; /* Cyan */
}
```

**Hijau & Emerald:**

```css
:root {
  --primary-color: #10b981; /* Hijau */
  --secondary-color: #34d399; /* Emerald */
}
```

**Orange & Red:**

```css
:root {
  --primary-color: #f97316; /* Orange */
  --secondary-color: #ff6b6b; /* Red */
}
```

**Red & Pink:**

```css
:root {
  --primary-color: #dc2626; /* Red */
  --secondary-color: #f472b6; /* Pink */
}
```

---

### Step 7: Edit CV (Optional)

1. Siapkan file CV dalam format PDF
2. Rename ke: `cv_hadi.pdf`
3. Letakkan di root folder (sama dengan index.html)
4. Link akan otomatis bekerja

---

## 📋 Checklist Sebelum Deploy

- [ ] Nama sudah diganti ke nama Anda di semua tempat
- [ ] Email dan telepon sudah diupdate
- [ ] Media sosial links sudah diupdate
- [ ] Foto profil sudah ditambahkan
- [ ] Minimal 3 project sudah ditambahkan
- [ ] Skills sudah disesuaikan dengan kemampuan Anda
- [ ] Sertifikat sudah ditambahkan
- [ ] Semua link berfungsi dengan baik
- [ ] Tested di berbagai browser (Chrome, Firefox, Safari, Edge)
- [ ] Tested di mobile device
- [ ] Tidak ada typo atau error

---

## 🔗 Link Referensi Penting

| Resource                    | Link                          |
| --------------------------- | ----------------------------- |
| FontAwesome Icons           | https://fontawesome.com/icons |
| Google Fonts                | https://fonts.google.com      |
| Color Palette Generator     | https://coolors.co            |
| Gradient Generator          | https://cssgradient.io        |
| Image Compressor            | https://tinypng.com           |
| Can I Use (Browser Support) | https://caniuse.com           |

---

## 🚀 Tips untuk Portofolio yang Bagus

1. **Foto Profil:**
   - Gunakan foto profesional
   - Latar belakang rapi dan tidak mengganggu
   - Ukuran minimal 300x300px

2. **Deskripsi Project:**
   - Jelaskan problem yang ingin diselesaikan
   - Tunjukkan solusi yang Anda buat
   - Sertakan teknologi yang digunakan
   - Highlight hasil/impact yang dicapai

3. **Link & URL:**
   - Pastikan semua link berfungsi
   - Gunakan friendly URL
   - Set repository ke public

4. **Content:**
   - Update secara berkala
   - Tambah project baru setiap 2-3 bulan
   - Highlight project terbaik Anda

5. **SEO:**
   - Gunakan deskripsi meta yang jelas
   - Optimasi ukuran gambar
   - Gunakan semantic HTML

---

## 🎨 Custom Font (Optional)

Jika ingin mengubah font default:

1. Buka Google Fonts: https://fonts.google.com
2. Pilih font yang Anda sukai (contoh: Poppins, Inter, JetBrains Mono)
3. Copy link di `<head>` section pada index.html:
   ```html
   <link
     href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
     rel="stylesheet"
   />
   ```
4. Update `css/style.css`:
   ```css
   body {
     font-family: "Poppins", sans-serif;
   }
   ```

---

## 📱 Testing Responsive

Untuk memastikan portofolio Anda responsif di semua device:

1. **Desktop:** 1920x1080, 1366x768
2. **Tablet:** 768x1024 (iPad)
3. **Mobile:** 375x667 (iPhone SE), 390x844 (iPhone 12)

Gunakan DevTools di Browser (F12) untuk testing.

---

**Happy customizing! 🎉**
