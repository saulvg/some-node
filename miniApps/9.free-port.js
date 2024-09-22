//Ademas de http, existen otros protocolos para hacer conexiones.
//En este caso vamos a utilizar 'net', que es un modulo con el que vamos a hacer conexiones "tcp"
//Es mas rapido porque envia menso cabezeras y nos va a permitir tambien si ese servidor esta abierto no lo esta etc.

const net = require("node:net");

//Vamos a crear una funion que nos devuelva que puerto esta libre
function findAvailablePort(desiredPort) {
  //Devolvemos una promesa

  return new Promise((resolve, reject) => {
    const server = net.createServer();

    //Intentamos abrir una conexion en el puerto deseado
    //Si es posible lo cerramos a continuacion y devolvemos el puerto en el que se puede abrir, en este caso el mismo
    server.listen(desiredPort, () => {
      //Lo mismo con el destructurion
      //const port = server.address().port;
      const { port } = server.address();

      server.close(() => {
        resolve(port);
      });
    });

    //Si salta un error al intentar copnectar con el puerto deseado, controlamos el evento de error
    //Si el error es el de puerto no dispobible
    //Llamamos a esta misma funcion con 0 para que al entrar por la llamada anterior nos devulelva el primer puerto disponible
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        //cuando se resuelva esta funcion lo devolvemos
        findAvailablePort(0).then((port) => resolve(port));
      } else {
        reject(err);
      }
    });
  });
}

//Exportamops la funcion
module.exports = { findAvailablePort };
