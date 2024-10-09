const http = require("node:http");
const dittoJson = require("./pokemon/ditto.json");

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJson));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404 - Not Found</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";
          //Escuchar el evento data
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            //Podriamos hacer cosas con la data, llamar a una base de datos o le que queramos
            //Ahora vamos ha escribir la cabecera
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });
            res.end(JSON.stringify(data));
          });
          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404 - Not Found</h1>");
      }

    default:
      // Manejar cualquier otro método que no sea GET o POST
      res.statusCode = 405; // Method Not Allowed
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.end("<h1>405 - Method Not Allowed</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log("Server lisening");
});
