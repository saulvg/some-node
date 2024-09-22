//modulo para 'jugar' con las rutas de los archivos, construir rutas, saber si un archivo tiene una extension, recuperar una extension, crear rutas absolutas, etc.
const path = require("node:path");

//Vamos a unir rutas con path.join (ya que crearlas es mala practica)
//Algunos de los motivos es por razones como las barras que juntan los archivos
//Windos -> \
//Linux -> /
//Existe el metodo sep que nos devulve como es el conexor de turas en el sistema operativo que se ejecuta
console.log("-> ", path.sep);

//Creamos una ruta uniendo la ruta, para evitar problemas como el nombrado anteriormente utilizariamos el metodo join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

//Obtener el nombre del archivo
const base = path.basename("tmp/tiki-secret-file/password.txt");
console.log(base);

//El nombre de fichero sin la extension
const fileName = path.basename("tmp/tiki-secret-file/password.txt", ".txt");
console.log(fileName);

//Obtener la extension
const extension = path.extname("my.super.image.jpg");
console.log(extension);
