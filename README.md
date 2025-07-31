# Tutorial Kolaborasi di GitHub dengan Fork

## Langkah-langkah Kolaborasi dengan Fork

### 1. Melakukan Fork
1. Klik tombol **Fork** yang terletak di sudut kanan atas halaman.
2. Pilih akun Anda sebagai tujuan fork. GitHub akan membuat salinan repositori di akun Anda.

### 2. Mengkloning Repositori Fork
Setelah melakukan fork, kloning repositori fork ke komputer lokal.
1. Buka terminal atau command prompt.
2. Jalankan perintah berikut:
   ```bash
   git clone https://github.com/fbnri/hmdt-web.git
   ```
3. Masuk ke direktori repositori yang telah dikloning:
   ```bash
   cd hmdt-web
   ```

### 3. Membuat Cabang (Branch)
Sebelum melakukan perubahan, disarankan untuk membuat cabang baru.
```bash
git checkout -b nama-cabang
```

### 4. Melakukan Perubahan
Lakukan perubahan yang diinginkan pada kode sumber. Setelah selesai, simpan perubahan tersebut.

### 5. Menambahkan dan Mengkomit Perubahan
Setelah melakukan perubahan, tambahkan dan komit perubahan tersebut.
```bash
git add .
git commit -m "Deskripsi perubahan yang dilakukan"
```

### 6. Mengunggah Perubahan ke GitHub
Unggah branch yang telah dibuat ke repositori fork di GitHub.
```bash
git push origin nama-cabang
```

### 7. Membuat Pull Request
Setelah mengunggah perubahan, langkah selanjutnya adalah membuat pull request untuk mengusulkan perubahan ke repositori asli.
1. Buka repositori fork di GitHub.
2. Lihat tombol **Compare & pull request**. Klik tombol tersebut.
3. Tambahkan deskripsi yang jelas mengenai perubahan yang dilakukan.
4. Klik tombol **Create pull request**.

### 8. Menunggu Tanggapan
Setelah mengajukan pull request, pemilik repositori asli akan meninjau perubahan. Mereka dapat memberikan umpan balik, meminta perubahan, atau menggabungkan (merge) perubahan Anda ke repositori utama.

### Catatan
> Setiap kali membuka VS Code, disarankan untuk menggunakan perintah `pull` sebelum melakukan perubahan kode guna memastikan sinkronisasi dengan repositori.
