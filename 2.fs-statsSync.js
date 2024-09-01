//fs = file-system = sistema de archivos

const fs = require("node:fs"); // a partir de Node 16 se recomienda poner node: ...

//Datos sobre el fichero de forma sincrona
const stats = fs.statSync("./archivo.txt");
console.log(
  stats.isFile(), //Si es un fichero
  stats.isDirectory(), //Si es un directorio
  stats.isSymbolicLink(), //Si es un enlace simbolico
  stats.size //Tamaño en bytes
);
