//Esta vez vamos a hacer el ls con una promesa

const fs = require("node:fs/promises");
console.log(process.argv);

//Vamos a pasarle la carpeta en la que queremos hacer el listado de los archivos (el ls)
const folder = process.argv[2] ?? ".";

fs.readdir(folder)
  .then((files) => files.forEach((file) => console.log(file)))
  .catch((error) => console.error("Error al leer el directorio => ", error));

//Cuando ejecutemos el codigo, pasarle como segundo argumento la carpeta que queremos listar
//node .\7.lsAdvance.js 'carpeta a listar'
//node .\7.lsAdvance.js ./cjs
