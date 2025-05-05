# config project
Berikut adalah cara konfigurasi projek ini dari segi frontend dan backend. sebelum itu, lakukan langkah berikut:

#### clone project:
````
git clone git@github.com:daffasatrianegara/fullstack-react19-express.git
````
setelah itu, ikuti langkah berikut untuk config dari sisi frontend dan backend:
### - config project frontend
1. buka terminal laptop anda.
2. ketik perintah `` cd frontend-react19 `` pada terminal
3. buat file ``.env`` pada directory frontend.
4. copy isi file ``.env.example`` kedalam file ``.env`` anda.
5. masukkan API URL pada backend anda.
```
example: http://localhost:3000
// ketika menggunakan port 3000 pada device anda.
```
6. jalankan perintah ``npm install`` pada terminal.
7. setelah download depedencies selesai, jalankan perintah ``npm run dev`` untuk menjalankan aplikasi frontend anda.
### - config project backend
1. setelah anda melakukan config projek pada frontend, selanjutnya ketik perintah ini di terminal ``` cd ../backend ```
2. buat file ``.env`` pada directory backend.
3. copy isi file ``.env.example`` kedalam file ``.env`` anda.
4. copy isi file ``.env.example`` kedalam file ``.env`` anda.
5. sesuaikan dengan konfigurasi database anda (host, port, name, password, dan nama database) menggunakan postgre.
```
pastikan anda membuat database terlebih dahulu pada aplikasi postgre anda (PgAdmin).
```
6. setelah selesai konfigurasi dan sudah memastikan bahwa database sudah terhubung, jalankan perintah ``npm run migrate`` untuk migrate table dan seeder pada database anda.
7. setelah migrate db berhasil, jalankan perintah ``npm run dev`` untuk menjalankan projek backend di device anda.

Happy coding!