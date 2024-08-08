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
    constraint Foreign key (teacher_id) references teacher (id) on Delete cascade
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
