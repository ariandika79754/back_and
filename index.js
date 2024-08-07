
var object = "Hello World";
console.log(object)



let a = "Ari";
console.log(a);
a = "Akbar"
console.log(a);


const pi = 3.80 //  => variable dengan tipe data desimal (float)
const area = 10 //  => variable dengan tipe data bilangan bulat (integer)
let b = "andika leva" // => variable dengan tipe data string
console.log(typeof area); // ini mengecek tipe data variable
console.log(typeof b); // ini mengecek tipe data variable

const sudahistirahat = true
console.log(typeof sudahistirahat);


const profil = {
    nama: "Ari Andika Leva Pratama",
    pekerjaan: "Back-end Developer",
    lokasi: "Indonesia",
    usia : 20,
    hobi : "Mancing",
    pendidikan : {
        sd : "SDN Rawa Selapan",
        SMP : "SMP N1 Candipuro",
        SMK : "SMK N1 Candipuro"

    } 
};

console.log(profil);
console.log(profil.nama); // => ini untuk mengakses properti name di dalam objek profil
console.log(typeof profil);


// array memiliki index sebagai urutan atau lokasi tersebut dan array di mulai dari nol
const simpleArray = [40, 50, 60, 70 ] // yang ada di dalam kurung siku itu adalah elemen 
console.log(simpleArray [1]); // akses array menggunkan index 

simpleArray[1] = 55; // merubaj isi elemen dari array index ke 1 
console.log(simpleArray [1]);
console.log(typeof simpleArray);

const fruits = ["banana", "apple", "kiwi"]
fruits.push("orange"); // => menambahkan elemen di akhir array
console.log(fruits);
fruits.unshift("mango"); // => menambahkan elemen di awal array
console.log(fruits);
fruits.pop(); // mengghapus elemen di akhir array
console.log(fruits);
fruits.shift(); // menghapus elemen di awal array
console.log(fruits);

console.log(fruits.length); // mengecek panjang elemen array

const moreFruits = ["orange", "grape"]
const allFruits = fruits.concat(moreFruits); // menggabungkan 2 array menjadi satu

console.log(allFruits);

//  let i =0 adalah definisi dari index dari array yang mau kita mulai perulangan
//  jika i isinya 0 maka array akan di akses dari 0

//  i < foods.length adalah condition yang berarti variable i itu tidak boleh kurang dari, foods.length
//  atau dalam kasus index tidak boleh melibihi panjang array
//  i++ adalah posy statemen yang berhasil ketika condition i < foods.length itu terpenuhi
//  maka nilai akan di tambah 1.
 
//  ++ menambah 1
//  -- mengurang 1
const foods = ["midle", "egg", "rice"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
    
}

console.log("perubahan berhasil");


// 2 dimensi
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// console.log(matrix[1][1]); // => jika ingin menampilkan angka 5


// // multi dimensi
// const matriks =[
//     [
//         [1,2,3],
//         [4,5,6]
//     ],
//     [
//         [7,8,9],
//         [10,11,12]
//     ]
// ]

// console.log(matriks[0][1][2]);

let size = 5; // Ukuran sisi persegi

for (let i = 0; i < size; i++) {
    let str = "* ";
    console.log(str.repeat(size));
}


for (let i = 0; i < 5; i++) {
    let str = "* "

    console.log(str.repeat(i));
}
    let y = 5;

for (let i = 0; i < y; i++) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(y - i ) + str.repeat(i));
}


let x = 5; // Tinggi setengah belah ketupat

// Bagian atas dan tengah belah ketupat
for (let i = 0; i < x; i++) {
    let str = "* ";
    let space = "  ";
    // Menghasilkan spasi di sisi kiri
    let leftSpaces = space.repeat(x - i - 1);
    // Menghasilkan bintang
    let stars = str.repeat(2 * i + 1);
    // Gabungkan dan tampilkan
    console.log(leftSpaces + stars);
}

// Bagian bawah belah ketupat
for (let i = x - 2; i >= 0; i--) {
    let str = "* ";
    let space = "  ";
    // Menghasilkan spasi di sisi kiri
    let leftSpaces = space.repeat(x - i - 1);
    // Menghasilkan bintang
    let stars = str.repeat(2 * i + 1);
    // Gabungkan dan tampilkan
    console.log(leftSpaces + stars);
}

let z = 9; // Tinggi piramid

for (let i = 0; i < z; i++) {
    let str = "* ";
    let space = "  ";
    // Menghasilkan spasi di sisi kiri
    let leftSpaces = space.repeat(z - i - 1);
    // Menghasilkan bintang
    let stars = str.repeat(2 * i + 1);
    // Gabungkan dan tampilkan
    console.log(leftSpaces + stars);
}

    
const isLoggedin = true;
 if (isLoggedin) {
    console.log("Hello Admin");
 }else{
    console.log("Hello Pegawai");
 }

 const baju = "putih";
 if (baju == "putih") {
    console.log("Baju Bersih");
 }else if(baju == "merah"){
    console.log("Baju Merah");
 }else {
    console.log("Baju Kotor");
 }