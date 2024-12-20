//Instalamos express como dependencia de produccion
//npm intall express -E (el -E indica que se instale el modo exacto, es decir sin el carect ^)

const express = require("express");

const app = express();

//Para que no aparezca en las cabeceras de respuesta "X-Powered-By: Express"
//Ya que podria generar riesgos de seguridad, aplicamos
app.disable("x-powered-by");

const PORT = process.env.PORT ?? 1234;

//Los middlewares se ejecutan para todas las peticiones a no ser que lo indiques las url a las que quieres que ataque
app.use((req, res, next) => {
  console.log("Middleware");
  //Trackear la request a la base de datos
  //Revisar si el user tiene cookies
  //etc..

  //Next para que pase a lo siguiente
  next();
});

//Los middlewares se ejecutan para todas las peticiones bajo '/url-a-atacar'
app.use("/url-a-atacar", (req, res, next) => {
  console.log("Middleware");
  next();
});

app.get("/", (req, res) => {
  res.status("200").send("<h1>Mi pagina</h1>");
});

app.post("/pokemon", (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);

    data.timestamp = new Date().toLocaleTimeString();
    res.status("201").json(data);
  });
});

app.use((req, res) => {
  res.status(404).send("<h1>404</H1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
