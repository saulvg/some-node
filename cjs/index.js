//Forma clasica de importar en node.js 'commonJS'
//No se puede renombrar porque en realidad estamos utilizando la clave del objeto creado en el otro fichero
const { sum } = require("./sum");

console.log(sum(1, 2));
