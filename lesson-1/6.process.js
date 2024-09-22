//El objeto process es un objeto global en nodeJs, es un objto global que proporciona informacion y control sobre el proceso actual de ejecucion
//Tiene propiedades y metodos que permiten interactuar con el entorno de ejecucion de nodeJs y estan relacionadas con el proceso actual

//Argumentod de entrada (que va a recibir en la linea de comandos)
console.log(process.argv);

//Current working directory, desde donde se esta ejecutando el proceso (desde que carpeta se a inicializado el comando o el proceso)
const cwdLog = process.cwd();
console.log(cwdLog);

//Plataform, Variables de entorno
const envLog = process.env;

//Controlar el proceso y su salida
// 0 todo fue bien y tiene que terminar ahi
// 1  existe algun error y queremos que salga para que no se quede pillado
process.exit(1);

//Controlar eventos del proceso
//Cuando salga queremos...
process.on("exit", () => {
  //limpiar los recursos
});
