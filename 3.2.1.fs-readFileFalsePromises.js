// asincronos en secuencial ->
// En lugar de utilizar callbacks vamos a utilizar promesas
const fs = require("node:fs");
// Si algun modulo de node.js no tuviese aun implementadas las promesas podriamos hacerlo igual gracias al modulo 'promisify'
// Solo utilizar en los modulos nativos que no tengan promesas por defecto
const { promisify } = require("node:util");

// Creamos asi la version de promesa de un modulo que no lo sea
const readFilePromise = promisify(fs.readFile);

console.log("Leyendo el primer archivo ...");

// eslint-disable-next-line
readFilePromise("./archivo.txt", "utf-8")
  .then((text) => console.log(text))
  .catch((err) => console.error("Error ->", err));

console.log("Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo ...");

readFilePromise("./archivo2.txt", "utf-8").then((text) => console.log(text));
