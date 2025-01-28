//Struktur Dasar Variabel Pada Javascript

let namaVariabel;
console.log(namaVariabel); // Print Variable

// Deklarasi Variabel Tanpa Inisialisasi
let nama2;
console.log(nama2); // Akan Print Undefined

// Deklarasi Variabel Dengan Inisialisasi
let nama3 = "John";
console.log(nama3); // Akan Print John

// Deklarasi Variabel Dengan Inisialisasi Lain
let nama4 = "John";
nama4 = "Doe";
console.log(nama4); // Akan Print Doe

// Deklarasi Variabel Dengan Inisialisasi Lain
let nama5 = "John";
let nama6 = nama5;
console.log(nama6); // Akan Print John

// Deklarasi Variabel Dengan Inisialisasi Lain
let nama7 = "John";
let nama8 = nama7;
nama8 = "Doe"; // Mengubah nilai nama8
console.log(nama7); // Akan Print John

// Deklarasi Variabel Dengan Inisialisasi Lain
let nama9 = "John";
let nama10 = nama9;
nama10 = "Doe"; // Mengubah nilai nama10
console.log(nama10); // Akan Print Doe

//aturan penamaan variabel
let namaVariabel; // Camel Case
let nama_variabel; // Snake Case
let NamaVariabel; // Pascal Case
let NamaVariabel; // Camel Case
