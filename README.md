# 🤖 GPT2 Kampus Chatbot

Chatbot berbasis GPT-2, intinya model dasarnya pake GPT2 yang perlu dilatih ulang (fine-tuned) untuk menjawab pertanyaan seputar kampus. Dibuat untuk mempermudah mahasiswa dalam mengakses informasi akademik secara cepat melalui antarmuka chatbot yang interaktif. untuk spesifik seperti jadwal, kelas, dosen perlu menggunakan data dynamic jangan latih model AI untuk data spesifik, karena jika jadwal atau hal hal spesifik lainya berubah, maka kamu harus latih lagi dari awal, dan belum tentu modelnya udah paham. maka dari itu jangan masukan data kampus spesifik ke dalam dataset untuk training model GPT2 ini okeh

---

## untuk dataset sudah di push di huggingface gunakan link berikut jika ingin pasang model hasil trainingnya
> Yudha556/kampus-gpt2-models
> Yudha556/GPT2-Chatbot-Kampus

gunakan untuk latihan AI nya bang


## 🚀 Fitur Utama

| Fitur                        | Keterangan                                            |
|-----------------------------|--------------------------------------------------------|
| 💬 Chatbot Interaktif       | Tampilan modern, seperti aplikasi chat                |
| 🧠 GPT-2 Fine-Tuned          | Model AI dilatih ulang dengan data pertanyaan kampus  |
| 🌐 API Backend               | Dibangun dengan Flask untuk komunikasi ke model AI    |
| 🎨 UI Responsif              | Menggunakan React + Tailwind untuk FE yang fleksibel  |
| 🔧 Mudah Dijalankan Lokal    | Cukup dengan 2 terminal: frontend + backend           |

---

## 🧠 Teknologi yang Digunakan

| Komponen   | Teknologi                        |
|------------|----------------------------------|
| Frontend   | React, TailwindCSS, Vite         |
| Backend    | Flask, Python                    |
| Model      | GPT-2 via HuggingFace Transformers |
| Dataset    | JSON (custom QA kampus)          |
| Dev Tool   | VSCode, Postman, Colab           |

---

## 📁 Struktur Proyek

```bash
gpt2-chatbot-kampus/
├── frontend/             # Aplikasi React
├── backend/              # API Flask + GPT2
├── data/                 # Dataset QA kampus
├── colab/                # Notebook training GPT2
├── README.md             # Dokumentasi
├── .gitignore            # File ignore
├── LICENSE               # Lisensi (MIT)
├── requirements.txt      # Dependensi backend
```

## sedikit info
data hasil training tidak di push karena terlalu besar datanya atau nanti bakal bikin si reponya lemot, makanya mending bikin sendiri

## Cara Menjalankan Proyek

### 🔹 Frontend (React + Tailwind)
```bash
cd frontend
npm install
npm run dev
```
Akses: http://localhost:5173

### 🔹 Backend (Flask API)
```bash
cd backend
pip install -r requirements.txt
python app.py
```
Akses: http://localhost:5000

## 🔗 Tabel API Endpoint
| Method | Endpoint  | Deskripsi                | Body (JSON)                      | Response (JSON)                 |
| ------ | --------- | ------------------------ | -------------------------------- | ------------------------------- |
| `POST` | `/ask`    | Kirim pertanyaan ke GPT2 | `{ "question": "Apa itu KRS?" }` | `{ "answer": "KRS adalah..." }` |
| `GET`  | `/health` | Cek status backend       | –                                | `{ "status": "ok" }`            |


## 🔄 Alur Kerja Sistem
| Langkah | Proses                                               |
| ------- | ---------------------------------------------------- |
| 1.      | User mengisi pertanyaan lewat UI frontend            |
| 2.      | Frontend mengirim request ke backend Flask (`/ask`)  |
| 3.      | Backend memproses input menggunakan GPT-2 fine-tuned |
| 4.      | Backend mengembalikan hasil ke frontend              |
| 5.      | Frontend menampilkan jawaban dalam chat bubble       |

## 📌 Contoh Interaksi

### Request
```bash
POST /ask
Content-Type: application/json

{
  "question": "Kapan UTS dimulai?"
}
```

### Response
```bash
{
  "answer": "UTS biasanya dimulai pada minggu ke-8 semester."
}
```

## 🧑‍💻 Dibuat Oleh
| Nama         | NIM         | Institusi                |
| ------------ | ----------- | ------------------------ |
| \Hendrian Yudha Pratama | \23000166050 | Universitas Ahmad Dahlan |

## 📄 Lisensi
Proyek ini menggunakan lisensi MIT — bebas digunakan, dimodifikasi, dan disebarkan, dengan tetap menyertakan kredit ke pembuat asli.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)



> 📢 Jangan lupa ⭐ repo ini kalau bermanfaat, atau fork buat pengembangan lanjut!

