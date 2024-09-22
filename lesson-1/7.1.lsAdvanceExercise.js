//Listaremos todos los archivos y ficheros del directorio indicado aunando todos los conocimientos hasta ahora, marcando:
//Si son un fichero o un directorio
//El nombre
//El tamaño
//La fecha de modificacion

const fs = require("node:fs/promises");
const path = require("node:path");

//Verificamos si el argumento --hidden esta presente para listar las carpetas ocultas
const showHidden = process.argv.includes("--hidden");

//Vamos a pasarle la carpeta en la que queremos hacer el listado de los archivos (el ls)
//Definimos la carpeta a listar (exluyendo el argumento --hidden si esta presente)
const folder =
  process.argv[2] && process.argv[2] !== "--hidden" ? process.argv[2] : ".";

//Funcion que recibe el directorio
async function ls(folder) {
  //Obtenemos los archivos y controlamos un posible error
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(`No se pudo leer el directorio -> ${folder}`);
    //Si existiese algun error salimos del proceso (continuamos) pero indicando que a habido un error
    process.exit(1);
  }

  //Para mostrar solo los ocultos filtramos por los que empiecen por '.'
  if (showHidden) {
    files = files.filter((file) => file.startsWith("."));
  } else {
    files = files.filter((file) => !file.startsWith("."));
  }

  //Vamos a crear todas las promesas de todos los archivos
  //para recuperer la informacion de cada archivo
  //Por cada archivo creamos una pormesa pidiendo la informacion - stasts
  const filePromises = files.map(async (file) => {
    //Obtenemos la ruta del fichero que vamos a obtener al leer el directorio, para poder acceder a el
    const filePath = path.join(folder, file);
    //ahora intentamos obtener el stat - info de cada uno
    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.error(`No se pudo leer el archivo -> ${filePath}`);
      process.exit(1);
    }

    //Si hemos llegado hasta aqui ya deberiamos ser capaces de recuperar los datos
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType.padEnd("1")} ${file.padEnd("35")} ${fileSize
      .toString()
      .padStart("4")
      .padEnd("4")} ${fileModified}`;
  });

  const filesInfo = await Promise.all(filePromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}
ls(folder);
