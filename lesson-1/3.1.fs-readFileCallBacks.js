// asincronos en callback -> libera el espacio y se puede utilizar mientras se resuelve los callbacks
const fs = require("node:fs");

console.log("Leyendo el primer archivo ...");

fs.readFile("./archivo.txt", "utf-8", (err, data) => {
  //<- Funcion de callback, cuando se resuelva esta llamada ya se ejecutara

  if (err) {
    console.error("Error => ", err);
  }
  console.log(data);
});

console.log("Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo ...");

fs.readFile("./archivo2.txt", "utf-8", (err, data) => {
  //<- Funcion de callback, cuando se resuelva esta llamada ya se ejecutara

  if (err) {
    console.error("Error => ", err);
  }
  console.log(data);
});
