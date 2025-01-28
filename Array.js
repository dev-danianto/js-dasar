//Apa itu Array?
//Array adalah kumpulan data yang memiliki index atau nomor urut.

//contoh Array
let user = ["John", 30];
console.log(user[0]); // Akan Print John
console.log(user[1]); // Akan Print 30

//Array Multidimensi
let users = [
  ["John", 30],
  ["Doe", 32],
];
console.log(users[0][0]); // Akan Print John
console.log(users[0][1]); // Akan Print 30
console.log(users[1][0]); // Akan Print Doe
console.log(users[1][1]); // Akan Print 32
//Array Method
//Ada beberapa method yang bisa digunakan pada array, diantaranya:
//1. push() : Menambahkan data di akhir array
//2. pop() : Menghapus data di akhir array
//3. shift() : Menghapus data di awal array
//4. unshift() : Menambahkan data di awal array
//5. splice() : Menambahkan atau menghapus data di array
//6. slice() : Mengambil data di array
//7. forEach() : Looping data di array
//8. map() : Looping data di array dan mengembalikan array baru
//9. filter() : Looping data di array dan mengembalikan array baru dengan kondisi tertentu
//10. find() : Mencari data di array
//11. findIndex() : Mencari index data di array
//12. indexOf() : Mencari index data di array
//13. lastIndexOf() : Mencari index data di array dari belakang
//14. includes() : Mengecek apakah data ada di array
//15. some() : Mengecek apakah data ada di array
//16. every() : Mengecek apakah semua data ada di array
//17. reduce() : Mengurangi data di array
//18. reduceRight() : Mengurangi data di array dari belakang
//19. concat() : Menggabungkan array
//20. join() : Menggabungkan array dengan separator
//21. reverse() : Membalikkan array
//22. sort() : Mengurutkan array
//23. fill() : Mengisi array
//24. copyWithin() : Menyalin data di array

//Contoh penggunaan method pada array
let users2 = ["John", "Doe"];
users2.push("Smith");
console.log(users2); // Akan Print ["John", "Doe", "Smith"]

users2.pop();
console.log(users2); // Akan Print ["John", "Doe"]

users2.shift();
console.log(users2); // Akan Print ["Doe"]

users2.unshift("Smith");
console.log(users2); // Akan Print ["Smith", "Doe"]

users2.splice(1, 0, "John");
console.log(users2); // Akan Print ["Smith", "John", "Doe"]

let users3 = users2.slice(1, 2);
console.log(users3); // Akan Print ["John"]

users2.forEach((user) => {
  console.log(user);
});
// Akan Print Smith, John, Doe
let users4 = users2.map((user) => {
  return user + " Smith";
});
