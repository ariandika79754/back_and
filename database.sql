-- Membuat database baru
CREATE DATABASE sample_database;

-- Menggunakan database yang baru dibuat
USE sample_database;

-- Membuat tabel baru
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Kolom ID sebagai primary key yang auto increment
    nama VARCHAR(255) NOT NULL,        -- Kolom nama dengan tipe data VARCHAR
    nilai VARCHAR(255) NOT NULL,       -- Kolom email dengan tipe data VARCHAR
    umur INT NOT NULL                  -- Kolom umur dengan tipe data INT
);

CREATE TABLE class (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Kolom ID sebagai primary key yang auto increment
    nama VARCHAR(255) NOT NULL,        -- Kolom nama dengan tipe data VARCHAR
    teacher_id INT not null,         -- Kolom teacher_id dengan tipe data VARCHAR
    constraint Foreign key (teacher_id) references teacher (id) on Delete cascade -- fungsi cascade  delete
    -- apabila ada data guru yang di delete atau di update maka akan otomatasi berubah dan terhapus di table class 
);

CREATE TABLE teacher (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Kolom ID sebagai primary key yang auto increment
    nama VARCHAR(255) NOT NULL,        -- Kolom nama dengan tipe data VARCHAR
    email VARCHAR(255) NOT NULL,       -- Kolom email dengan tipe data VARCHAR
    umur INT NOT NULL                  -- Kolom umur dengan tipe data INT
);

-- Insert (Menambahkan data baru ke dalam tabel)
INSERT INTO students (nama, email, umur) 
VALUES ('John Doe', 'john@example.com', 25); -- Menambahkan data untuk nama, email, dan umur

-- Read (Membaca data dari tabel)
SELECT * FROM students; -- Mengambil semua data dari tabel

-- Update (Memperbarui data di dalam tabel)
UPDATE students 
SET umur = 30 
WHERE id = 1; -- Memperbarui umur menjadi 30 untuk data dengan ID 1

-- Delete (Menghapus data dari tabel)
DELETE FROM students 
WHERE id = 1; -- Menghapus data dengan ID 1 dari tabel


--dalam proses pengambilan data dari 2 atau lebih table kita perlu melakukan pemanggilan
-- column gunakan  as berfungsi untuk menjadi alias atau pengganti dari nama column dari kasus
-- kita mencoba mengambil data dari table class dengan menggunakan inner join dimana inner join membutuhkan
-- foreign key sebagai kunci asing atau sebagai izin untuk mengakses table
SELECT 
    class.nama as nama_kelas,
    teacher.nama as nama_guru
FROM 
    class 
INNER JOIN 
    teacher 
ON 
    class.teacher_id = teacher.id;

