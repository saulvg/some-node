// asincronos en secuencial ->
//En commonJs se puede hacer con lo que se llama una funcion auto invocada
const { readFile } = require("node:fs/promises");

//Esto seria una funcion auto invocada, una funcion que la envolvemos entre () y que la llamamos justamente despues gracias a los ultimos ()
//IIFE -Inmediatly Invoked Function Expresion
//(() => {})();

//Asi podriamos hacer que esta funcion fuese asincrona y todo el codigo de dentro puediese tener el await

(async () => {
  console.log("Leyendo el primer archivo ...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log(text);

  console.log("Hacer cosas mientras lee el archivo...");

  console.log("Leyendo el segundo archivo ...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log(secondText);
})();

//Por si no te a quedado claro la funcion auto invocada, seria lo mismo que hacer

async function init() {
  console.log("Leyendo el primer archivo ...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log(text);

  console.log("Hacer cosas mientras lee el archivo...");

  console.log("Leyendo el segundo archivo ...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log(secondText);
}

init();
