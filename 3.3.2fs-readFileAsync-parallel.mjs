// asincronos en paralelo ->
//leeme los dos archivos y cuando acabes de leer los dos imprime, mientras tanto continua con la ejecucion del codigo en secuencial
import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("primer texto: ", text);
  console.log("segundo texto: ", secondText);
});

console.log("Sigo trabajando ...");
