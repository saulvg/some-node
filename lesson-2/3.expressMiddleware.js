//Instalamos express como dependencia de produccion
//npm intall express -E (el -E indica que se instale el modo exacto, es decir sin el carect ^)

const express = require("express");

const app = express();

//Para que no aparezca en las cabeceras de respuesta "X-Powered-By: Express"
//Ya que podria generar riesgos de seguridad, aplicamos
app.disable("x-powered-by");

const PORT = process.env.PORT ?? 1234;

//Para este middleware que acabamos de hacer, express lo tiene por defecto con
/* app.use((req, res, next) => {
  if (req.method !== "POST") return next();
  if (req.headers["content-type"] !== "application/json") return next();

  //Solo llegan las REQ que son POST y que tienen el header Content-Type: application/json
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);
    data.timestamp = new Date().toLocaleTimeString();

    req.body = data;
    next();
  });
}); */

app.use(express.json());

app.get("/", (req, res) => {
  res.status("200").send("<h1>Mi pagina</h1>");
});

app.post("/pokemon", (req, res) => {
  res.status("201").json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>404</H1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
