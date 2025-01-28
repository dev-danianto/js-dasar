//Apa itu Function?
//Function adalah blok kode yang dapat digunakan kembali.
//Function akan dijalankan ketika dipanggil.
//Function dapat menerima parameter.
//Function dapat mengembalikan nilai.

//Contoh Function
function sayHello() {
  console.log("Hello World!");
}

sayHello(); // Akan Print Hello World!

//Function Dengan Parameter
function sayHello2(name) {
  console.log("Hello " + name + "!");
}

sayHello2("John"); // Akan Print Hello John!

//Function Dengan Return
function sayHello3(name) {
  return "Hello " + name + "!";
}

console.log(sayHello3("John")); // Akan Print Hello John!

//Function Dengan Return
function sayHello4(name) {
  return "Hello " + name + "!";
}

let hello = sayHello4("John");
console.log(hello); // Akan Print Hello John!
//Output yang dihasilkan adalah Hello World!, Hello John!, Hello John!, Hello John!, dan Hello John!.

//Function Dengan Return
function sayHello5(name) {
  return "Hello " + name + "!";
}

let hello2 = sayHello5("John");
console.log(hello2); // Akan Print Hello John!
//Output yang dihasilkan adalah Hello John!.
