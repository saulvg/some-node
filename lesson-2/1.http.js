const http = require("node:http"); //Protocolo http -> protocolo de transferencia de hipertextos
const fs = require("node:fs");
const path = require("node:path");

const desirePort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  /* console.log("request recived: ", req.url);
  res.end("Hola mundo"); */

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.statusCode = 200;
    //res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Bienvenido a mi página de inicio</h1>");
  } else if (req.url === "/imagen-super-bonita.png") {
    const imagePath = path.join(__dirname, "imagenDemo.png");
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        console.error("Error al leer el archivo:", err); // Log del error para depurar
        res.statusCode = 500;
        res.end("<h1>500 Internal Server Error</h1>");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/png");
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    //res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Bienvenido a mi página de Contancto</h1>");
  } else {
    res.statusCode = 404;
    //res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desirePort, () => {
  console.log(`Server lisening on port http://localhost:${desirePort}`);
});
