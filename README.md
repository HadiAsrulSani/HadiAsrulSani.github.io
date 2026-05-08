# Portofolio Hadi

Selamat datang di portofolio pribadi Anda! Template ini dirancang untuk menampilkan proyek, keahlian, dan sertifikat Anda dengan tampilan modern dan responsif.

## 📁 Struktur Folder

```
portofolio-hadi/
│
├── index.html                 # File HTML utama
├── css/
│   └── style.css             # Stylesheet
├── js/
│   └── script.js             # JavaScript untuk interaktivitas
├── assets/
│   ├── images/               # Folder untuk foto dan gambar proyek
│   └── icons/                # Folder untuk ikon custom
├── README.md                 # File dokumentasi ini
└── cv_hadi.pdf              # File CV Anda (opsional)
```

## 🚀 Cara Menggunakan

### 1. **Buka di Browser**

Buka file `index.html` di browser Anda untuk melihat preview portofolio.

### 2. **Edit Data Pribadi di `index.html`**

#### Ubah Informasi Kontak:

Cari bagian Contact Section dan ganti dengan data Anda:

```html
<a href="mailto:email@example.com">email@example.com</a>
<a href="tel:+62812345678">+62 812 3456 78</a>
```

#### Ubah Media Sosial:

Ganti URL pada bagian Social Media:

```html
<a href="https://github.com/username" target="_blank">
  <a href="https://linkedin.com/in/username" target="_blank">
    <a href="https://instagram.com/username" target="_blank"></a></a
></a>
```

### 3. **Tambah Foto Profil**

1. Letakkan foto profil Anda di folder `assets/images/`
2. Beri nama file, misalnya: `profile.jpg`
3. Buka `index.html` dan cari section `.profile-placeholder`
4. Ganti dengan:

```html
<img src="assets/images/profile.jpg" alt="Foto Profil" class="profile-img" />
```

5. Tambahkan CSS untuk styling foto di `css/style.css`:

```css
.profile-img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
}
```

### 4. **Edit Keahlian/Skills**

Di bagian Skills Section, ganti atau tambah skill sesuai kemampuan Anda:

```html
<div class="skill-item">
  <div class="skill-icon">
    <i class="fab fa-python"></i>
  </div>
  <h3>Python</h3>
</div>
```

Daftar ikon FontAwesome: https://fontawesome.com/icons

### 5. **Tambah Proyek Baru**

Temukan bagian `Projects Section` dan duplikasi block `.project-card`:

```html
<div class="project-card">
  <div class="project-image">
    <img src="assets/images/project-name.jpg" alt="Nama Projek" />
  </div>
  <div class="project-content">
    <h3>Nama Proyek Anda</h3>
    <p class="project-description">
      Deskripsi singkat proyek. Jelaskan apa yang dibuat, teknologi yang
      digunakan.
    </p>
    <div class="project-tech">
      <span class="tech-badge">HTML</span>
      <span class="tech-badge">CSS</span>
      <span class="tech-badge">JavaScript</span>
    </div>
    <div class="project-links">
      <a href="https://link-demo.com" class="link-btn" target="_blank"
        >Lihat Demo</a
      >
      <a
        href="https://github.com/username/repo"
        class="link-btn"
        target="_blank"
        >Source Code</a
      >
    </div>
  </div>
</div>
```

### 6. **Tambah Sertifikat**

Di bagian Certificates Section, tambahkan sertifikat Anda:

```html
<div class="certificate-card">
  <div class="cert-icon">
    <i class="fas fa-award"></i>
  </div>
  <h3>Nama Sertifikat</h3>
  <p class="cert-issuer">Institusi Penerbit</p>
  <p class="cert-date">Tahun</p>
  <a href="link-ke-sertifikat.pdf" class="cert-link" target="_blank"
    >Lihat Sertifikat</a
  >
</div>
```

## 🎨 Kustomisasi Warna

Edit bagian `:root` di `css/style.css` untuk mengubah palet warna:

```css
:root {
  --primary-color: #6366f1; /* Biru */
  --secondary-color: #ec4899; /* Pink */
  --dark-bg: #0f172a; /* Latar belakang gelap */
  --light-bg: #f8fafc; /* Latar belakang terang */
  --card-bg: #1e293b; /* Warna card */
  --text-primary: #f1f5f9; /* Teks utama */
  --text-secondary: #cbd5e1; /* Teks sekunder */
}
```

### Palet Warna Rekomendasi:

**Biru & Pink (Saat ini)**

- Primary: #6366f1
- Secondary: #ec4899

**Ungu & Cyan**

- Primary: #a855f7
- Secondary: #06b6d4

**Hijau & Emerald**

- Primary: #10b981
- Secondary: #34d399

**Orange & Red**

- Primary: #f97316
- Secondary: #ff6b6b

## 📝 Font Awesome Icons

Untuk mengubah ikon, kunjungi: https://fontawesome.com/icons

Contoh penggunaan:

```html
<i class="fab fa-react"></i>
<!-- React -->
<i class="fab fa-vue"></i>
<!-- Vue -->
<i class="fab fa-angular"></i>
<!-- Angular -->
<i class="fab fa-docker"></i>
<!-- Docker -->
<i class="fas fa-database"></i>
<!-- Database -->
```

## 🔗 Link Penting

- **FontAwesome Icons**: https://fontawesome.com/icons
- **Google Fonts**: https://fonts.google.com/
- **Color Palette Generator**: https://coolors.co/
- **Gradient Generator**: https://cssgradient.io/

## 📱 Responsivitas

Portofolio ini sudah responsif untuk:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small Mobile (<480px)

## 🚀 Deploy ke GitHub Pages

1. Buat repository baru di GitHub dengan nama: `username.github.io`
2. Push file ke repository
3. Portofolio Anda akan accessible di: `https://username.github.io`

## 📧 Tips Tambahan

- Gunakan foto profil berkualitas tinggi
- Deskripsi proyek harus singkat dan jelas
- Tambahkan link live demo dan source code
- Update portofolio secara berkala dengan proyek terbaru
- Perhatikan typo dan grammar

## ✅ Checklist Sebelum Deploy

- [ ] Semua informasi pribadi sudah benar
- [ ] Foto profil sudah ditambahkan
- [ ] Minimal 2-3 proyek ditambahkan
- [ ] Link media sosial sudah diperbarui
- [ ] Email dan nomor telepon benar
- [ ] Tested di berbagai browser
- [ ] Tested di mobile device
- [ ] CV sudah di-upload (opsional)

## 🎯 Fitur Utama

✨ **Modern Design** - Tampilan minimalis dan profesional
📱 **Responsive** - Sempurna di semua perangkat
🎨 **Customizable** - Mudah mengubah warna dan konten
⚡ **Fast Loading** - Optimized dan lightweight
🔍 **SEO Friendly** - Meta tags dan struktur semantic HTML
🌙 **Dark Mode** - Sudah dark mode by default

## 💡 Saran Pengembangan Selanjutnya

- Tambahkan form kontak dengan backend
- Implementasi blog untuk dokumentasi
- Tambahkan dark/light mode toggle
- Implementasi animations yang lebih smooth
- Tambahkan searchable project filter
- Integrasi dengan CMS untuk management konten

---

**Dibuat dengan ❤️ untuk Hadi**

Semoga portofolio ini membawa kesuksesan untuk karir Anda! 🎉
