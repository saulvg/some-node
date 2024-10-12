//Instalamos express como dependencia de produccion
//npm intall express -E (el -E indica que se instale el modo exacto, es decir sin el carect ^)

const express = require("express");

const app = express();

//Para que no aparezca en las cabeceras de respuesta "X-Powered-By: Express"
//Ya que podria generar riesgos de seguridad, aplicamos
app.disable("x-powered-by");

const PORT = process.env.PORT ?? 1234;

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

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
