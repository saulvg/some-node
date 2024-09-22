// Sin utilizar variables de entorno inidcariamos en la linea de comandos el puerto al que atacamos ->
// Linux y mac -> PORT=1234  node .\miniApps\10.1.httpPlusFreeEnv.js
// Windows -> $env:PORT=1234; node .\miniApps\10.1.httpPlusFreeEnv.js

// Utilizamos las variables de entorno del .env necesitariamos instalar alguna dependencia como dotenv (hay otras alternativas)

// require('dotenv').config()

// Y con esto ya estarias disponibles

// De esta manera si asignamos un puerto seria ese (en produccion por ejemplo) y sino atacaria al 3000 o al primero libre gracias a nuestra app free-port

const http = require("node:http");
const { findAvailablePort } = require("./9.free-port");

const desirePort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request recived");
  res.end("Hola mundo");
});

findAvailablePort(desirePort).then((port) => {
  server.listen(port, () => {
    console.log(`Server lisening on port http://localhost:${port}`);
  });
});
