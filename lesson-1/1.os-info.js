//Importamos un modulo nativo de node, ahora recomiendan hacerlo con 'node:..' en vez de solo con el nombre del modulo
//Os sirve para capturar datos en relacion a nuestro dispositivo
const os = require("node:os");

//Con esto vamos a ser capaces de crear una pequeña app para recopilar datos sobre nuestro equipo
console.log("Informacion del sistema operativo");
console.log("--------------------");

console.log("Nombre del sistema operativo", os.platform());
console.log("Version del sistema operativo", os.release());
console.log("Arquitectura", os.arch());
console.log("CPUs", os.cpus()); //<--- Con esta info podriamos escalar procesos en Node.js
console.log("Memoria libre", os.freemem() / 1024 / 1024); //Dividido por 1024 para obtener los megas
console.log("Memoria libre", os.totalmem() / 1024 / 1024); //Dividido por 1024 para obtener los megas
console.log("Dias que lleva el equipo encendido", os.uptime() / 60 / 60);
console.log("Dias que lleva el equipo encendido", os.uptime());
