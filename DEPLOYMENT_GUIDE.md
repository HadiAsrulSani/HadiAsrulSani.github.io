# DEPLOYMENT GUIDE

## 📤 Deploy Portofolio Anda

### Opsi 1: GitHub Pages (Recommended)

**Keuntungan:**

- Gratis selamanya
- Domain custom bisa ditambahkan
- Auto-deploy dari Git push
- SSL certificate gratis

**Langkah-Langkah:**

1. **Buat GitHub Account** (jika belum)
   - Kunjungi: https://github.com
   - Sign up dengan email Anda

2. **Buat Repository Baru**
   - Klik `+` di top-right → `New repository`
   - Nama repository: `username.github.io`
   - Contoh: `hadi.github.io`
   - Pilih `Public`
   - Klik `Create repository`

3. **Upload Files**
   - Copy semua files dari folder portofolio
   - Push ke repository menggunakan Git:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/username.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Buka Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` → `/ (root)`
   - Save

5. **Akses Portofolio**
   - URL: `https://username.github.io`
   - Tunggu 1-5 menit hingga live

---

### Opsi 2: Netlify (Alternatif)

**Keuntungan:**

- Very beginner-friendly
- Auto-deploy dari Git
- Form handling bisa ditambahkan
- Performance analytics

**Langkah-Langkah:**

1. **Buat Netlify Account**
   - Kunjungi: https://netlify.com
   - Sign up dengan GitHub, GitLab, atau email

2. **Deploy via Git**
   - Click `Add new site` → `Import an existing project`
   - Connect ke GitHub repository Anda
   - Pilih repository
   - Next → Deploy

3. **Custom Domain** (Optional)
   - Settings → Domain management
   - Add custom domain
   - Ikuti instruksi DNS

---

### Opsi 3: Traditional Web Hosting

**Contoh Provider:**

- Niagahoster
- Hostinger
- BlueHost

**Langkah-Langkah:**

1. Beli domain dan hosting
2. Upload files via FTP
3. Point domain ke hosting

---

### Opsi 4: Development Server Lokal (Testing)

Gunakan Python server untuk testing:

```bash
# Windows CMD
python -m http.server

# macOS/Linux Terminal
python3 -m http.server
```

Akses di: `http://localhost:8000`

---

## 🔧 Setting Custom Domain (Opsional)

### Untuk GitHub Pages:

1. Beli domain (Niagahoster, Namecheap, etc.)
2. Buka repository settings → Pages
3. Custom domain: masukkan domain Anda
4. Di DNS provider, tambahkan:
   - Type: CNAME
   - Name: www
   - Value: `username.github.io`

Tunggu 24 jam untuk propagasi DNS.

---

## 🔐 SSL Certificate (HTTPS)

- **GitHub Pages:** Auto HTTPS
- **Netlify:** Auto HTTPS
- **Traditional Hosting:** Gunakan Let's Encrypt (gratis)

---

## 📊 Analytics (Opsional)

Tambahkan Google Analytics untuk tracking:

1. Buat akun Google Analytics: https://analytics.google.com
2. Buat property baru
3. Copy Tracking ID
4. Tambahkan ke `index.html` sebelum `</head>`:
   ```html
   <!-- Google Analytics -->
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
   ></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());
     gtag("config", "GA_MEASUREMENT_ID");
   </script>
   ```

---

## ✅ Pre-Deployment Checklist

- [ ] Semua files sudah diupdate
- [ ] Tested di local server
- [ ] No console errors (F12 → Console)
- [ ] Responsive di mobile
- [ ] All links working
- [ ] Images loading properly
- [ ] No typos
- [ ] Meta tags updated
- [ ] Repository private/public sesuai preferensi
- [ ] Domain tersedia/siap

---

## 🚀 Post-Deployment

1. **Test Live URL**
   - Buka di berbagai browser
   - Cek mobile responsiveness
   - Verifikasi semua link

2. **Share Portofolio**
   - Kirim ke teman/mentor
   - Share di LinkedIn
   - Gunakan untuk apply job

3. **Maintenance**
   - Update project secara berkala
   - Monitor performance
   - Collect feedback

---

## 🆘 Troubleshooting

### Halaman tidak muncul

- Pastikan files sudah ter-upload
- Cek naming: case-sensitive
- Clear browser cache (Ctrl+F5)

### CSS/JS tidak loading

- Pastikan path relatif benar
- Cek file permissions
- Gunakan DevTools (F12) untuk melihat errors

### Domain tidak bisa diakses

- Tunggu DNS propagation (24 jam)
- Verify DNS records di provider
- Cek repo settings

---

**Good luck dengan deploy! 🎉**
