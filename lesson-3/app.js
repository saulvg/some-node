// Vamos a crear una REST API (representational state transfer), no todas tiene porque serlo aun que en su mayoria lo son o lo intentan je j, existen alternativas como graphQL
//Rest es ->
// Que es una arquitectura de software para sistemas www (world wide web)
//Y rest se a utilizado generalmente para la creacion de apis de hay
//REST API

//Fundamentos de REST
//Resources: esta basado en recursos, y cada recurso o conjunto de ellos esta bajo una URL (para rest todo son recursos)
//Methods (verbos HTTP, GET...): Sirven para definir las operaciones que se pueden hacer con los recursos
//Representaciones: (no todas las representaciones de las apis tienen que ser JSON), pueden ser JSON, XML, HTML, etc. El cliente deberia poder elegir la representacion del recurso
//Statless: Cada solicitud realizada debe tener toda la informacion necesaria para que el servidor la entienda (de esta manera el servidor no debera guardarse ningun tipo de dato del cliente), no debe guardar cuantas llamadas se han, paginacion etc... todo eso debe ir en la URL de la peticion para que la llamada se entienda por si sola. Nuestra base de datos si puede pero nuestro backend NO.
//Interfaz uniforme: coherencia entre urls etc...
//Separacion de conceptos: Permite que cliente y servidor evolucionen de forma separada

const express = require("express"); // require -> commonJS

const app = express();

app.disable("x-power-by"); //deshabilita el header x-power-by:express

app.get("/", (req, res) => {
  res.json({ message: "hola mundo" });
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
