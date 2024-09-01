const fs = require("node:fs");

//Esto devolveria un bufer (datos crudos en hexadecimal, optimizados para ir de un espacio de memoria a otro)
//const text = fs.readFileSync("./archivo.txt");

//Asi que le especificamos que queremos la codificacion UTF-8, para poder leerlo
//De forma sincrona
console.log("Leyendo el primer archivo ...");
const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log(text);

console.log("Hacer cosas mientras lee el archivo..."); //Como es sincrona, no puedo hace esto mientras leemos el archivo, ya que es mono hilo, aqui es donde entra la asyncronia

console.log("Leyendo el segundo archivo ...");
const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
console.log(secondText);
