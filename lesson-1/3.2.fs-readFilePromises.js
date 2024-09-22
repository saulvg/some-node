// asincronos en secuencial -> Libera el espacio pero espera a que se resuelva el 'await' de forma que actua como un sincrono aunque libere el espacio
//En lugar de utilizar callbacks vamos a utilizar promesas
//Actulamente muchos modulos de Node.js ya tienen promesas ya que de forma historica se utilizaban callbacks, revisa lo doc de node
const fs = require("node:fs/promises");

console.log("Leyendo el primer archivo ...");

// eslint-disable-next-line
fs.readFile("./archivo.txt", "utf-8")
  .then((text) => console.log(text))
  .catch((err) => console.error("Error ->", err));

console.log("Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo ...");

fs.readFile("./archivo2.txt", "utf-8").then((text) => console.log(text));
