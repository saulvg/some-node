// asincronos en secuencial ->
//En EMMA Script si podemos utilizar el await en el cuerpo del archivo, esto se llama 'TOP LEVEL AWAIT',
//En commonJs no se puede hacer
import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo ...");
const text = await readFile("./archivo.txt", "utf-8");
console.log(text);

console.log("Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo ...");
const secondText = await readFile("./archivo2.txt", "utf-8");
console.log(secondText);
