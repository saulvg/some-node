const http = require("node:http");
const { findAvailablePort } = require("./9.free-port");
//Gracias a la app del ejercicio 9 podemos ver que puerto esta disponible

const server = http.createServer((req, res) => {
  console.log("request recived");
  res.end("Hola mundo");
});

//Queremos x puerto, pero si no el que nos de la app freePort
findAvailablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`Server lisening on port http://localhost:${port}`);
  });
});
