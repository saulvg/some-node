const http = require("node:http"); //Protocolo http -> protocolo de transferencia de hipertextos

const desirePort = process.env.PORT ?? 1234;

const server = http.createServer((req, res) => {
  console.log("request recived: ", req.url);
  res.end("Hola mundo");
});

server.listen(desirePort, () => {
  console.log(`Server lisening on port http://localhost:${desirePort}`);
});
