// Vamos a crear un servidor unicamente con node gracias a la dependencia nativa http, para recibir y devolver peticiones
const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request recived");
  res.end("Hola mundo");
});

//Esto me ejecutaria el codigo en el puerto que le indicase, ahora mismo en el 8000
/* server.listen(8000, () => {
  console.log("server listening on port 8000");
}); */

//Podemos hacer que se ejecute en el primer puerto disponible y recuerar que puerto es con una propiedad del server\
server.listen(0, () => {
  console.log(
    `Server lisening on port http://localhost:${server.address().port}`
  );
});
