
var object = "Hello World";
console.log(object)



let a = "Ari";
console.log(a);
a = "Akbar"
console.log(a);


const pi = 3.80 //  => variable dengan tipe data desimal (float)
const area = 10 //  => variable dengan tipe data bilangan bulat (integer)
let b =" andika leva" // => variable dengan tipe data string
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
const simpleArray = [40, 50, 60, 70 ]
console.log(simpleArray [1]); // akses array menggunkan index 
console.log(typeof simpleArray);