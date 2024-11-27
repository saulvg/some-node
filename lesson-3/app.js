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
const movies = require("./movies.json");
//Para crear un codigo alfanumerico unico
const crypto = require("node:crypto");
const { validateMovie } = require("./shemas/movies");
//const z = require("zod");

const app = express();

//Middleware de express para "construir" el body, en la clase anterior uniamos a mano los chunks para crearlo
app.use(express.json());

app.disable("x-power-by"); //deshabilita el header x-power-by:express

app.get("/", (req, res) => {
  //Podriamos leer el query param de format
  const format = req.query.format;
  if (format === "html") {
    //Devolverlo en formato html, etc..
  }
  res.json({ message: "hola mundo" });
});

//Todos los recursos que sean movies se identifican con /movies
app.get("/movies", (req, res) => {
  const { genre } = req.query;

  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }
  res.json(movies);
});

//recuperar segmentos dinamicos, path-to-regexp (ex una libreria que utiliza expresiones regulares para hacer la magia de capturar los paths dinamicos)
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "Movie not found" });
});

app.post("/movies", (req, res) => {
  //Deberiamos validar los datos siempre por seguridad y por experiencia de usuario
  //Se podria validar con los tipicos if (title !== string) {}, etc...
  //Pero existen libreriias para validar campos que son muy interesantes, una de ellas por ejemplo seria zod (existen muchas otras)
  //No seria correcto crear este esquema en cada reques asi que lo extraemaos a un archivo propio
  /* const movieSchema = z.object({
    title: z.string({
      invalid_type_error: "Movie title must be a string",
      required_error: "Movie title is required",
    }),
    year: z.number().int().positive().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    poster: z
      .string()
      .url({ message: "Poster must be a valid URL" })
      .endsWith(".jpg"),
    //genre:z.array(z.string()),
    //genre: z.enum(["Action","Adventure","Comedy","Drama","Fantasy","Horror","Thriller","True","Crime","Sci-Fi",]).array(),
    genre: z.array(
      z.enum([
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Thriller",
        "True",
        "Crime",
        "Sci-Fi",
      ]),
      {
        invalid_type_error: "Movie genre must be a string",
        required_error: "Movie genre must be an array of enum Genre",
      }
    ),
    rate: z.number().min(0).max(10),
  }); */

  //Como validamos con zod ya no nos hace falta esto
  //const { title, year, director, duration, poster, genre, rate } = req.body;

  //validemos el resultado
  const result = validateMovie(req.body);

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  //Como hemos validado, podemos pasar de esto
  /*   const newMovie = {
    id: crypto.randomUUID(),
    title,
    year,
    director,
    duration,
    poster,
    genre,
    rate: rate ?? 0,
  }; */

  //A esto, solo por que ya hemos validado los campos, sino nos podrian pasar cualquier cosa
  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  };

  //Esto no seria REST porque estamos guardando el estado de la aplicacion en memoria
  movies.push(newMovie);

  res.status(201).json(newMovie); //Puede ser interesante devolver el recurso creado para limpiar la cache del cliente
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
